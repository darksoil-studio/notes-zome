import { 
  SignedActionHashed,
  CreateLink,
  Link,
  DeleteLink,
  Delete,
  AppClient, 
  Record, 
  ActionHash, 
  EntryHash, 
  AgentPubKey,
} from '@holochain/client';
import { EntryRecord, ZomeClient } from '@darksoil-studio/holochain-utils';

import { NotesSignal } from './types.js';

export class NotesClient extends ZomeClient<NotesSignal> {

  constructor(public client: AppClient, public roleName: string, public zomeName = 'notes') {
    super(client, roleName, zomeName);
  }
}
