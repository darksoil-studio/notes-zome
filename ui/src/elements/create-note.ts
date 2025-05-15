import {
	hashProperty,
	hashState,
	notifyError,
	onSubmit,
	sharedStyles,
	wrapPathInSvg,
} from '@darksoil-studio/holochain-elements';
import '@darksoil-studio/holochain-elements/dist/elements/display-error.js';
import { SignalWatcher } from '@darksoil-studio/holochain-signals';
import { EntryRecord } from '@darksoil-studio/holochain-utils';
import {
	ActionHash,
	AgentPubKey,
	DnaHash,
	EntryHash,
	Record,
} from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import { mdiAlertCircleOutline, mdiDelete } from '@mdi/js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import SlAlert from '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import { LitElement, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { notesStoreContext } from '../context.js';
import { NotesStore } from '../notes-store.js';
import { Note } from '../types.js';

/**
 * @element create-note
 * @fires note-created: detail will contain { noteHash }
 */
@localized()
@customElement('create-note')
export class CreateNote extends SignalWatcher(LitElement) {
	/**
	 * @internal
	 */
	@consume({ context: notesStoreContext, subscribe: true })
	notesStore!: NotesStore;

	/**
	 * @internal
	 */
	@state()
	committing = false;

	/**
	 * @internal
	 */
	@query('#create-form')
	form!: HTMLFormElement;

	async createNote(fields: Partial<Note>) {
		const note: Note = {
			title: fields.title!,
			body: fields.body!,
		};

		try {
			this.committing = true;
			const record: EntryRecord<Note> =
				await this.notesStore.client.createNote(note);

			this.dispatchEvent(
				new CustomEvent('note-created', {
					composed: true,
					bubbles: true,
					detail: {
						noteHash: record.actionHash,
					},
				}),
			);

			this.form.reset();
		} catch (e: unknown) {
			console.error(e);
			notifyError(msg('Error creating the note'));
		}
		this.committing = false;
	}

	render() {
		return html` <sl-card style="flex: 1;">
			<form
				id="create-form"
				class="column"
				style="flex: 1; gap: 16px;"
				${onSubmit(fields => this.createNote(fields))}
			>
				<span class="title">${msg('Create Note')}</span>

				<sl-input name="title" .label=${msg('Title')} required></sl-input>
				<sl-textarea name="body" .label=${msg('Body')} required></sl-textarea>

				<sl-button variant="primary" type="submit" .loading=${this.committing}
					>${msg('Create Note')}</sl-button
				>
			</form>
		</sl-card>`;
	}

	static styles = [sharedStyles];
}
