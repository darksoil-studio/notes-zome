import { next as Automerge } from '@automerge/automerge/slim';
import {
	AsyncComputed,
	AsyncSignal,
	allRevisionsOfEntrySignal,
	mapCompleted,
} from '@darksoil-studio/holochain-signals';
import {
	ActionCommittedSignal,
	EntryRecord,
	ZomeClient,
} from '@darksoil-studio/holochain-utils';
import { Record } from '@holochain/client';

export class AutomergeEntryRecord<T> extends EntryRecord<Automerge.Doc<T>> {
	constructor(record: Record) {
		super(record);
	}
	get data(): Uint8Array {
		return (super.entry as unknown as { data: Uint8Array }).data;
	}
	get entry(): Automerge.Doc<T> {
		return Automerge.load(this.data);
	}
}

export function allRevisionsOfAutomergeEntrySignal<
	T,
	S extends ActionCommittedSignal<any, any> & any,
>(
	client: ZomeClient<S>,
	fetchAllRevisions: () => Promise<Array<EntryRecord<T>>>,
	pollIntervalMs?: number,
): AsyncSignal<Array<AutomergeEntryRecord<T>>> {
	return mapCompleted(
		allRevisionsOfEntrySignal(client, fetchAllRevisions, pollIntervalMs),
		revisions => revisions.map(r => new AutomergeEntryRecord(r.record)),
	);
}
