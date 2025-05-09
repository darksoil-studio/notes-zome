import {
  hashProperty,
  hashState,
  notifyError,
  onSubmit,
  sharedStyles,
  wrapPathInSvg,
} from "@darksoil-studio/holochain-elements";
import { SignalWatcher, toPromise } from "@darksoil-studio/holochain-signals";
import { EntryRecord } from "@darksoil-studio/holochain-utils";
import { ActionHash, AgentPubKey, EntryHash, Record } from "@holochain/client";
import { consume } from "@lit/context";
import { localized, msg } from "@lit/localize";
import { mdiAlertCircleOutline, mdiDelete } from "@mdi/js";
import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

import "@shoelace-style/shoelace/dist/components/icon-button/icon-button.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import "@shoelace-style/shoelace/dist/components/textarea/textarea.js";

import "@shoelace-style/shoelace/dist/components/button/button.js";
import SlAlert from "@shoelace-style/shoelace/dist/components/alert/alert.js";
import "@shoelace-style/shoelace/dist/components/card/card.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@shoelace-style/shoelace/dist/components/alert/alert.js";
import { notesStoreContext } from "../context.js";
import { NotesStore } from "../notes-store.js";
import { Note } from "../types.js";

/**
 * @element edit-note
 * @fires note-updated: detail will contain { originalNoteHash, previousNoteHash, updatedNoteHash }
 */
@localized()
@customElement("edit-note")
export class EditNote extends SignalWatcher(LitElement) {
  /**
   * REQUIRED. The hash of the original `Create` action for this Note
   */
  @property(hashProperty("note-hash"))
  noteHash!: ActionHash;

  /**
   * @internal
   */
  @consume({ context: notesStoreContext })
  notesStore!: NotesStore;

  /**
   * @internal
   */
  @state()
  committing = false;

  async firstUpdated() {
    const currentRecord = await toPromise(this.notesStore.notes.get(this.noteHash).latestVersion);
    setTimeout(() => {
      (this.shadowRoot?.getElementById("form") as HTMLFormElement).reset();
    });
  }

  async updateNote(currentRecord: EntryRecord<Note>, fields: Partial<Note>) {
    const note: Note = {
      title: fields.title!,
      body: fields.body!,
    };

    try {
      this.committing = true;
      const updateRecord = await this.notesStore.client.updateNote(
        this.noteHash,
        currentRecord.actionHash,
        note,
      );

      this.dispatchEvent(
        new CustomEvent("note-updated", {
          composed: true,
          bubbles: true,
          detail: {
            originalNoteHash: this.noteHash,
            previousNoteHash: currentRecord.actionHash,
            updatedNoteHash: updateRecord.actionHash,
          },
        }),
      );
    } catch (e: unknown) {
      console.error(e);
      notifyError(msg("Error updating the note"));
    }

    this.committing = false;
  }

  renderEditForm(currentRecord: EntryRecord<Note>) {
    return html`
      <sl-card>

        <form
          id="form"
          class="column"
          style="flex: 1; gap: 16px;"
          ${onSubmit(fields => this.updateNote(currentRecord, fields))}
        >  
        <span class="title">${msg("Edit Note")}</span>

        <sl-input name="title" .label=${msg("Title")}  required .defaultValue=${currentRecord.entry.title}></sl-input>
        <sl-textarea name="body" .label=${
      msg("Body")
    }  required .defaultValue=${currentRecord.entry.body}></sl-textarea>

          <sl-button
            type="submit"
            variant="primary"
            style="flex: 1;"
            .loading=${this.committing}
          >${msg("Save")}</sl-button>
        </form>
      </sl-card>`;
  }

  render() {
    const note = this.notesStore.notes.get(this.noteHash).latestVersion.get();

    switch (note.status) {
      case "pending":
        return html`<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
        >
          <sl-spinner style="font-size: 2rem;"></sl-spinner>
        </div>`;
      case "error":
        return html`<display-error
          .headline=${msg("Error fetching the note")}
          .error=${note.error}
        ></display-error>`;
      case "completed":
        return this.renderEditForm(note.value);
    }
  }

  static styles = [sharedStyles];
}
