import { next as Automerge } from '@automerge/automerge';
import { toPromise } from '@darksoil-studio/holochain-signals';
import { EntryRecord } from '@darksoil-studio/holochain-utils';
import { cleanNodeDecoding } from '@darksoil-studio/holochain-utils/dist/clean-node-decoding.js';
import {
	ActionHash,
	Delete,
	Record,
	SignedActionHashed,
} from '@holochain/client';
import { dhtSync, runScenario } from '@holochain/tryorama';
import { decode } from '@msgpack/msgpack';
import { assert, test } from 'vitest';

import { sampleNote } from '../../ui/src/mocks.js';
import { Note } from '../../ui/src/types.js';
import { setup } from './setup.js';

test('create Note', async () => {
	await runScenario(async scenario => {
		const [alice, bob] = await setup(scenario);

		// Alice creates a Note
		const note: EntryRecord<Note> = await alice.store.client.createNote(
			await sampleNote(alice.store.client),
		);
		assert.ok(note);
	});
});

test('create and read Note', async () => {
	await runScenario(async scenario => {
		const [alice, bob] = await setup(scenario);

		const sample = await sampleNote(alice.store.client);

		// Alice creates a Note
		const note: EntryRecord<Note> = await alice.store.client.createNote(sample);
		assert.ok(note);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

		// Bob gets the created Note
		const createReadOutput: EntryRecord<Note> = await toPromise(
			bob.store.notes.get(note.actionHash).original,
		);
		assert.deepEqual(sample, cleanNodeDecoding(createReadOutput.entry));
	});
});

test('create and update Note', async () => {
	await runScenario(async scenario => {
		const [alice, bob] = await setup(scenario);

		// Alice creates a Note
		const note: EntryRecord<Note> = await alice.store.client.createNote(
			await sampleNote(alice.store.client),
		);
		assert.ok(note);

		const originalActionHash = note.actionHash;
		const latestVersion = await toPromise(
			bob.store.notes.get(originalActionHash).latestVersion,
		);

		// Alice updates the Note
		let contentUpdate = Automerge.change<Note>(latestVersion.doc, doc => {
			doc.title = 'hey';
		});

		let updatedNote: EntryRecord<Note> = await alice.store.client.updateNote(
			originalActionHash,
			[originalActionHash],
			Automerge.save(contentUpdate),
		);
		assert.ok(updatedNote);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

		// Bob gets the updated Note
		const readUpdatedOutput0 = await toPromise(
			bob.store.notes.get(note.actionHash).latestVersion,
		);
		assert.equal(contentUpdate.title, readUpdatedOutput0.doc.title);
		assert.equal(contentUpdate.body, readUpdatedOutput0.doc.body);

		// Alice updates the Note again
		contentUpdate = Automerge.change<Note>(readUpdatedOutput0.doc, doc => {
			doc.title = 'hey2';
		});

		updatedNote = await alice.store.client.updateNote(
			originalActionHash,
			[updatedNote.actionHash],
			Automerge.save(contentUpdate),
		);
		assert.ok(updatedNote);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

		// Bob gets the updated Note
		const readUpdatedOutput1 = await toPromise(
			bob.store.notes.get(originalActionHash).latestVersion,
		);
		assert.equal(contentUpdate.title, readUpdatedOutput1.doc.title);
		assert.equal(contentUpdate.body, readUpdatedOutput1.doc.body);
	});
});

test('create and delete Note', async () => {
	await runScenario(async scenario => {
		const [alice, bob] = await setup(scenario);

		// Alice creates a Note
		const note: EntryRecord<Note> = await alice.store.client.createNote(
			await sampleNote(alice.store.client),
		);
		assert.ok(note);

		// Alice deletes the Note
		const deleteActionHash = await alice.store.client.deleteNote(
			note.actionHash,
		);
		assert.ok(deleteActionHash);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

		// Bob tries to get the deleted Note
		const deletes: Array<SignedActionHashed<Delete>> = await toPromise(
			bob.store.notes.get(note.actionHash).deletes,
		);
		assert.equal(deletes.length, 1);
	});
});
