import { hashProperty, sharedStyles } from "@darksoil-studio/holochain-elements";
import { SignalWatcher } from "@darksoil-studio/holochain-signals";
import { EntryRecord } from "@darksoil-studio/holochain-utils";
import { ActionHash, EntryHash, Record } from "@holochain/client";
import { consume } from "@lit/context";
import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";

import "@darksoil-studio/holochain-elements/dist/elements/display-error.js";
import "@shoelace-style/shoelace/dist/components/spinner/spinner.js";
import "@shoelace-style/shoelace/dist/components/card/card.js";
import { notesStoreContext } from "../context.js";
import { NotesStore } from "../notes-store.js";
import { Note } from "../types.js";

/**
 * @element note-summary
 * @fires note-selected: detail will contain { noteHash }
 */
@localized()
@customElement("note-summary")
export class NoteSummary extends SignalWatcher(LitElement) {
  /**
   * REQUIRED. The hash of the Note to show
   */
  @property(hashProperty("note-hash"))
  noteHash!: ActionHash;

  /**
   * @internal
   */
  @consume({ context: notesStoreContext, subscribe: true })
  notesStore!: NotesStore;

  renderSummary(entryRecord: EntryRecord<Note>) {
    return html`
      <div class="column" style="gap: 16px; flex: 1;">

          <div class="column" style="gap: 8px">
	        <span><strong>${msg("Title")}</strong></span>
 	        <span style="white-space: pre-line">${entryRecord.entry.title}</span>
	  </div>

          <div class="column" style="gap: 8px">
	        <span><strong>${msg("Body")}</strong></span>
 	        <span style="white-space: pre-line">${entryRecord.entry.body}</span>
	  </div>

      </div>
    `;
  }

  renderNote() {
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
        return this.renderSummary(note.value);
    }
  }

  render() {
    return html`<sl-card style="flex: 1; cursor: grab;" @click=${() =>
      this.dispatchEvent(
        new CustomEvent("note-selected", {
          composed: true,
          bubbles: true,
          detail: {
            noteHash: this.noteHash,
          },
        }),
      )}>
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
