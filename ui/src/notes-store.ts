import { 
  collectionSignal, 
  liveLinksSignal, 
  deletedLinksSignal, 
  allRevisionsOfEntrySignal,
  latestVersionOfEntrySignal, 
  immutableEntrySignal, 
  deletesForEntrySignal, 
  AsyncComputed,
  pipe,
} from "@darksoil-studio/holochain-signals";
import { slice, HashType, retype, EntryRecord, MemoHoloHashMap } from "@darksoil-studio/holochain-utils";
import { NewEntryAction, Record, ActionHash, EntryHash, AgentPubKey } from '@holochain/client';

import { NotesClient } from './notes-client.js';

export class NotesStore {

  constructor(public client: NotesClient) {}
  
}
