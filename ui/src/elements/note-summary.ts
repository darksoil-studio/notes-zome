import { next as Automerge } from '@automerge/automerge/slim';
import '@darksoil-studio/automerge-collaborative-prosemirror/dist/elements/readonly-prosemirror.js';
import {
	hashProperty,
	sharedStyles,
} from '@darksoil-studio/holochain-elements';
import '@darksoil-studio/holochain-elements/dist/elements/display-error.js';
import { SignalWatcher } from '@darksoil-studio/holochain-signals';
import { EntryRecord } from '@darksoil-studio/holochain-utils';
import { ActionHash, EntryHash, Record } from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
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
import { Schema } from 'prosemirror-model';

import { notesStoreContext } from '../context.js';
import { noteSchemaSpec } from '../note-schema.js';
import { NotesStore } from '../notes-store.js';
import { prosemirrorFlatListStyles } from '../prosemirror-flat-list-styles.js';
import { Note } from '../types.js';

/**
 * @element note-summary
 * @fires note-selected: detail will contain { noteHash }
 */
@localized()
@customElement('note-summary')
export class NoteSummary extends SignalWatcher(LitElement) {
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

	renderSummary(note: Automerge.Doc<Note>) {
		return html`
			${note.images_hashes.map(
				imageHash => html`
					<show-image
						part="image"
						slot="image"
						.imageHash=${imageHash}
					></show-image>
				`,
			)}
			<div class="row" style="gap: 16px; flex: 1;">
				<div class="column" style="gap: 16px; flex: 1;">
					<span
						style="white-space: pre-line; font-size: 24px; word-break: break-all"
						>${note.title}</span
					>

					<readonly-prosemirror
						.document=${note}
						.path=${['body']}
						.schemaSpec=${noteSchemaSpec}
						.styles=${[prosemirrorFlatListStyles]}
						.plugins=${[
							...createListPlugins({
								schema: new Schema(noteSchemaSpec),
							}),
							inputRules({ rules: listInputRules }),
							keymap(listKeymap),
							keymap(baseKeymap),
						]}
						style="flex: 1; overflow: hidden;"
					></readonly-prosemirror>
				</div>
			</div>
		`;
	}

	renderNote() {
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
				return this.renderSummary(note.value.doc);
		}
	}

	render() {
		return html`<sl-card
			style="flex: 1; cursor: grab;"
			@click=${() =>
				this.dispatchEvent(
					new CustomEvent('note-selected', {
						composed: true,
						bubbles: true,
						detail: {
							noteHash: this.noteHash,
						},
					}),
				)}
		>
			${this.renderNote()}
		</sl-card>`;
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
