import { next as Automerge } from '@automerge/automerge/slim';
import '@darksoil-studio/automerge-collaborative-prosemirror/dist/elements/collaborative-prosemirror.js';
import { CollaborativeProsemirror } from '@darksoil-studio/automerge-collaborative-prosemirror/dist/elements/collaborative-prosemirror.js';
import '@darksoil-studio/automerge-collaborative-sessions/dist/elements/collaborative-document-context.js';
import { CollaborativeDocumentContext } from '@darksoil-studio/automerge-collaborative-sessions/dist/elements/collaborative-document-context.js';
import {
	hashProperty,
	notifyError,
	sharedStyles,
	wrapPathInSvg,
} from '@darksoil-studio/holochain-elements';
import '@darksoil-studio/holochain-elements/dist/elements/display-error.js';
import { SignalWatcher, toPromise } from '@darksoil-studio/holochain-signals';
import { EntryRecord } from '@darksoil-studio/holochain-utils';
import {
	ActionHash,
	AgentPubKey,
	EntryHash,
	Record,
	encodeHashToBase64,
} from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import {
	mdiAlertCircleOutline,
	mdiDelete,
	mdiOrderBoolAscendingVariant,
	mdiPencil,
} from '@mdi/js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { baseKeymap } from 'prosemirror-commands';
import {
	createListPlugins,
	listInputRules,
	listKeymap,
} from 'prosemirror-flat-list';
import { inputRules } from 'prosemirror-inputrules';
import { keymap } from 'prosemirror-keymap';
import { NodeType, Schema } from 'prosemirror-model';

import { basicTextSchemaSpec } from '../basic-text-schema.js';
import { notesStoreContext } from '../context.js';
import { NotesStore } from '../notes-store.js';
import { prosemirrorFlatListStyles } from '../prosemirror-flat-list-styles.js';
import { Note } from '../types.js';

/**
 * @element note-detail
 * @fires edit-clicked: fired when the user clicks the edit icon button
 * @fires note-deleted: detail will contain { noteHash }
 */
@localized()
@customElement('note-detail')
export class NoteDetail extends SignalWatcher(LitElement) {
	/**
	 * REQUIRED. The hash of the Note to show
	 */
	@property(hashProperty('note-hash'))
	noteHash!: ActionHash;

	/**
	 * @internal
	 */
	@consume({ context: notesStoreContext, subscribe: true })
	notesStore!: NotesStore;

	@property()
	acceptedCollaborators: Array<AgentPubKey> = [];

	async deleteNote() {
		try {
			await this.notesStore.client.deleteNote(this.noteHash);

			this.dispatchEvent(
				new CustomEvent('note-deleted', {
					bubbles: true,
					composed: true,
					detail: {
						noteHash: this.noteHash,
					},
				}),
			);
		} catch (e: unknown) {
			console.error(e);
			notifyError(msg('Error deleting the note'));
		}
	}

	onbeforeunload = (_e: BeforeUnloadEvent) =>
		msg('Are you sure you want to leave?');
	unlisten: (() => void) | undefined;
	unloadSetup = false;

	async setupUnload() {
		if (this.unloadSetup) return;
		this.unloadSetup = true;
		window.addEventListener('beforeunload', this.onbeforeunload);
		try {
			this.unlisten = await getCurrentWindow().onCloseRequested(async event => {
				try {
					await this.updateNote();
				} catch (e) {
					notifyError(msg('Failed to save note.'));
					event.preventDefault();
				}
			});
		} catch (e) {
			console.log('Not in a tauri context', e);
		}
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		this.updateNote();
		window.removeEventListener('beforeunload', this.onbeforeunload);
		if (this.unlisten) this.unlisten();
	}

	async updateNote() {
		const updatedNote = this.shadowRoot!.querySelector(
			'collaborative-document-context',
		) as CollaborativeDocumentContext;

		const newNote = updatedNote.document.docSync()! as Automerge.Doc<Note>;

		const latestVersion = await toPromise(
			this.notesStore.notes.get(this.noteHash).latestVersion,
		);

		const changes = Automerge.getChanges(latestVersion.doc, newNote);
		if (changes.length === 0) return;

		const data = Automerge.saveIncremental(newNote);
		try {
			const updateRecord = await this.notesStore.client.updateNote(
				this.noteHash,
				latestVersion.previousHashes,
				data,
			);

			this.dispatchEvent(
				new CustomEvent('note-updated', {
					composed: true,
					bubbles: true,
					detail: {
						originalNoteHash: this.noteHash,
						updatedNoteHash: updateRecord.actionHash,
					},
				}),
			);
		} catch (e: unknown) {
			console.error(e);
			notifyError(msg('Error updating the note'));
		}
	}

	renderDetail(doc: Automerge.Doc<Note>) {
		return html`
			<sl-card style="flex: 1">
				<div class="column" style="gap: 16px; flex: 1; width: 558px">
					<collaborative-document-context
						.sessionId="${encodeHashToBase64(this.noteHash)}}"
						.acceptedCollaborators=${this.acceptedCollaborators}
						.initialDocument=${doc}
						@document-change=${() => this.setupUnload()}
					>
						<collaborative-prosemirror
							style="font-size: 24px; overflow: auto"
							.schemaSpec=${basicTextSchemaSpec}
							.path=${['title']}
							.placeholder=${msg('Title')}
						>
						</collaborative-prosemirror>

						<collaborative-prosemirror
							id="body"
							style="flex: 1"
							.schemaSpec=${basicTextSchemaSpec}
							.styles=${[prosemirrorFlatListStyles]}
							.plugins=${[
								...createListPlugins({
									schema: new Schema(basicTextSchemaSpec),
								}),
								inputRules({ rules: listInputRules }),
								keymap(listKeymap),
								keymap(baseKeymap),
							]}
							.path=${['body']}
							.placeholder=${msg('Write your note...')}
						>
						</collaborative-prosemirror>
					</collaborative-document-context>

					<div class="row" style="max-height: 200px">
						<sl-icon-button
							style="font-size: 24px"
							.src=${wrapPathInSvg(mdiOrderBoolAscendingVariant)}
							@click=${() => {
								const cp = this.shadowRoot!.getElementById(
									'body',
								)! as CollaborativeProsemirror;
								const listType = cp.schema!.nodes.list;

								cp.prosemirror.dispatch(
									cp.prosemirror.state.tr.insert(
										cp.prosemirror.state.selection.to,
										listType.createAndFill({
											kind: 'task',
											checked: false,
										})!,
									),
								);
							}}
						>
						</sl-icon-button>
					</div>
				</div>
			</sl-card>
		`;
	}

	render() {
		const note = this.notesStore.notes.get(this.noteHash).latestVersion.get();

		switch (note.status) {
			case 'pending':
				return html`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;
			case 'error':
				return html`<display-error
					.headline=${msg('Error fetching the note')}
					.error=${note.error}
				></display-error>`;
			case 'completed':
				return this.renderDetail(note.value.doc);
		}
	}

	static styles = [
		sharedStyles,
		css`
			:host {
				display: flex;
			}
		`,
	];
}
