import { next as Automerge } from '@automerge/automerge/slim';
import {
	AsyncComputed,
	AsyncSignal,
	allRevisionsOfEntrySignal,
	collectionSignal,
	deletedLinksSignal,
	deletesForEntrySignal,
	immutableEntrySignal,
	latestVersionOfEntrySignal,
	liveLinksSignal,
	pipe,
} from '@darksoil-studio/holochain-signals';
import {
	ActionCommittedSignal,
	EntryRecord,
	HashType,
	MemoHoloHashMap,
	retype,
	slice,
} from '@darksoil-studio/holochain-utils';
import {
	ActionHash,
	AgentPubKey,
	EntryHash,
	NewEntryAction,
	Record,
	encodeHashToBase64,
} from '@holochain/client';

import { NotesClient } from './notes-client.js';
import { Note } from './types.js';
import {
	AutomergeEntryRecord,
	allRevisionsOfAutomergeEntrySignal,
} from './utils.js';

export class NotesStore {
	constructor(public client: NotesClient) {}

	/** Note */

	notes = new MemoHoloHashMap((noteHash: ActionHash) => {
		const allRevisions = allRevisionsOfAutomergeEntrySignal(
			this.client,
			() => this.client.getAllRevisionsForNote(noteHash),
			2000,
		);
		const original = immutableEntrySignal(() =>
			this.client.getOriginalNote(noteHash),
		) as unknown as AsyncSignal<AutomergeEntryRecord<Note>>;
		return {
			latestVersion: new AsyncComputed(() => {
				const allRevisionsResult = allRevisions.get();
				const originalResult = original.get();
				if (originalResult.status !== 'completed') return originalResult;
				if (allRevisionsResult.status !== 'completed')
					return allRevisionsResult;

				const hasDescendants = (actionHash: ActionHash) =>
					allRevisionsResult.value.find(r =>
						r.previousHashes.find(
							h => encodeHashToBase64(h) === encodeHashToBase64(actionHash),
						),
					);
				const previousHashes = allRevisionsResult.value
					.filter(r => !hasDescendants(r.actionHash))
					.map(r => r.actionHash);

				const notes = allRevisionsResult.value.map(r => r.data);

				let doc: Automerge.Doc<Note> = Automerge.load(
					originalResult.value.data,
				);

				for (let i = 0; i < notes.length; i++) {
					doc = Automerge.loadIncremental(doc, notes[i]);
				}
				console.log('h5');
				Automerge.save(doc);
				return {
					status: 'completed',
					value: {
						doc,
						previousHashes,
					},
				};
			}),
			original,
			allRevisions,
			deletes: deletesForEntrySignal(this.client, noteHash, () =>
				this.client.getAllDeletesForNote(noteHash),
			),
			incrementalChanges: pipe(
				liveLinksSignal(
					this.client,
					noteHash,
					() => this.client.getIncrementalChangesForNote(noteHash),
					'IncrementalChanges',
				),
				links => links,
			),
		};
	});

	/** All Notes */

	allNotes = pipe(
		collectionSignal(
			this.client,
			() => this.client.getAllNotes(),
			'AllNotes',
			3000,
		),
		allNotes =>
			slice(
				this.notes,
				allNotes.map(l => l.target),
			),
	);
}
