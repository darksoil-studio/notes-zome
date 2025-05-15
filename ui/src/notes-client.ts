import { next as Automerge } from '@automerge/automerge/slim';
import { EntryRecord, ZomeClient } from '@darksoil-studio/holochain-utils';
import {
	ActionHash,
	AgentPubKey,
	AppClient,
	CreateLink,
	Delete,
	DeleteLink,
	Entry,
	EntryHash,
	Record as HRecord,
	Link,
	SignedActionHashed,
} from '@holochain/client';

import { Note } from './types.js';
import { NotesSignal } from './types.js';
import { AutomergeEntryRecord } from './utils.js';

export class NotesClient extends ZomeClient<NotesSignal> {
	constructor(
		public client: AppClient,
		public roleName: string,
		public zomeName = 'notes',
	) {
		super(client, roleName, zomeName);
	}
	/** Note */

	async createNote(note: Note): Promise<EntryRecord<Note>> {
		const record: HRecord = await this.callZome('create_note', {
			data: Automerge.save(
				Automerge.from(note as unknown as Record<string, unknown>),
			),
			previous_hashes: [],
		});
		return new EntryRecord(record);
	}

	async getLatestNote(
		noteHash: ActionHash,
	): Promise<EntryRecord<Automerge.Doc<Note>> | undefined> {
		const record: HRecord = await this.callZome('get_latest_note', noteHash);
		return record ? new AutomergeEntryRecord(record) : undefined;
	}

	async getOriginalNote(
		noteHash: ActionHash,
	): Promise<EntryRecord<Note> | undefined> {
		const record: HRecord = await this.callZome('get_original_note', noteHash);
		return record ? new AutomergeEntryRecord(record) : undefined;
	}

	async getAllRevisionsForNote(
		noteHash: ActionHash,
	): Promise<Array<AutomergeEntryRecord<Note>>> {
		const records: HRecord[] = await this.callZome(
			'get_all_revisions_for_note',
			noteHash,
		);
		return records.map(r => new AutomergeEntryRecord(r));
	}

	async updateNote(
		noteHash: ActionHash,
		previousHashes: ActionHash[],
		data: Uint8Array,
	): Promise<EntryRecord<Note>> {
		const record: HRecord = await this.callZome('update_note', {
			original_note_hash: noteHash,
			updated_note: {
				data,
				previous_hashes: previousHashes,
			},
		});
		return new AutomergeEntryRecord(record);
	}

	deleteNote(originalNoteHash: ActionHash): Promise<ActionHash> {
		return this.callZome('delete_note', originalNoteHash);
	}

	getAllDeletesForNote(
		originalNoteHash: ActionHash,
	): Promise<Array<SignedActionHashed<Delete>> | undefined> {
		return this.callZome('get_all_deletes_for_note', originalNoteHash);
	}

	getOldestDeleteForNote(
		originalNoteHash: ActionHash,
	): Promise<SignedActionHashed<Delete> | undefined> {
		return this.callZome('get_oldest_delete_for_note', originalNoteHash);
	}

	/** All Notes */

	async getAllNotes(): Promise<Array<Link>> {
		return this.callZome('get_all_notes', undefined);
	}

	async getIncrementalChangesForNote(
		noteHash: ActionHash,
	): Promise<Array<Link>> {
		return this.callZome('get_incremental_changes_for_note', noteHash);
	}

	addIncrementalChangesForNote(
		noteHash: ActionHash,
		incrementalChanges: string,
	): Promise<void> {
		return this.callZome('add_incremental_changes_for_note', {
			note_hash: noteHash,
			incremental_changes: incrementalChanges,
		});
	}
}
