import { next as Automerge } from '@automerge/automerge/slim';
import '@darksoil-studio/automerge-collaborative-prosemirror/dist/elements/collaborative-prosemirror.js';
import { CollaborativeProsemirror } from '@darksoil-studio/automerge-collaborative-prosemirror/dist/elements/collaborative-prosemirror.js';
import {
	hashProperty,
	notifyError,
	sharedStyles,
	wrapPathInSvg,
} from '@darksoil-studio/holochain-elements';
import '@darksoil-studio/holochain-elements/dist/elements/display-error.js';
import { SignalWatcher } from '@darksoil-studio/holochain-signals';
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
import SlAlert from '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { baseKeymap } from 'prosemirror-commands';
import { keymap } from 'prosemirror-keymap';

import { basicTextSchema } from '../basic-text-schema.js';
import { notesStoreContext } from '../context.js';
import { AutomergeEntryRecord } from '../notes-client.js';
import { NotesStore } from '../notes-store.js';
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

	renderDetail(entryRecord: AutomergeEntryRecord<Note>) {
		return html`
			<sl-card style="flex: 1">
				<div class="column" style="gap: 16px; flex: 1; width: 558px">
					<collaborative-prosemirror
						style="font-size: 24px; overflow: auto"
						.sessionId=${`${encodeHashToBase64(this.noteHash)}/title`}
						.acceptedCollaborators=${this.acceptedCollaborators}
						.schema=${basicTextSchema}
						.initialDocument=${entryRecord.entry}
						.path=${['title']}
					>
					</collaborative-prosemirror>

					<collaborative-prosemirror
						.sessionId=${`${encodeHashToBase64(this.noteHash)}/body`}
						.acceptedCollaborators=${this.acceptedCollaborators}
						.schema=${basicTextSchema}
						style="flex: 1"
						.plugins=${[keymap(baseKeymap)]}
						.path=${['body']}
						.initialDocument=${entryRecord.entry}
						@document-change=${(e: CustomEvent) => {
							console.log(
								Automerge.saveIncremental(e.detail.change.doc),
								Automerge.save(e.detail.change.doc),
							);
						}}
					>
					</collaborative-prosemirror>

					<div class="row" style="max-height: 200px">
						<sl-icon-button
							style="font-size: 24px"
							.src=${wrapPathInSvg(mdiOrderBoolAscendingVariant)}
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
				return this.renderDetail(note.value);
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
