# `<create-note>`

## Usage

0. If you haven't already, [go through the setup for the module](/setup).

1. Import the `<create-note>` element somewhere in the javascript side of your web-app like this:

```js
import '@darksoil-studio/notes/dist/elements/create-note.js'
```

2. Use it in the html side of your web-app like this:


::: code-group
```html [Lit]
<create-note 
>
</create-note>
```

```html [React]
<create-note
>
</create-note>
```

```html [Angular]
<create-note
>
</create-note>
```

```html [Vue]
<create-note
>
</create-note>
```

```html [Svelte]
<create-note
>
</create-note>
```
:::

> [!WARNING]
> Like all the elements in this module, `<create-note>` needs to be placed inside an initialized `<notes-context>`.

## Demo

Here is an interactive demo of the element:

<element-demo>
</element-demo>

<script setup>
import { onMounted } from "vue";
import { ProfilesClient, ProfilesStore } from '@darksoil-studio/profiles-zome';
import { demoProfiles, ProfilesZomeMock } from '@darksoil-studio/profiles-zome/dist/mocks.js';
import { decodeHashFromBase64 } from '@holochain/client';
import { render, html } from "lit";

import { NotesZomeMock, sampleNote } from "../../ui/src/mocks.ts";
import { NotesStore } from "../../ui/src/notes-store.ts";
import { NotesClient } from "../../ui/src/notes-client.ts";

onMounted(async () => {
  // Elements need to be imported on the client side, not the SSR side
  // Reference: https://vitepress.dev/guide/ssr-compat#importing-in-mounted-hook
  await import('@api-viewer/docs/lib/api-docs.js');
  await import('@api-viewer/demo/lib/api-demo.js');
  await import('@darksoil-studio/profiles-zome/dist/elements/profiles-context.js');
  if (!customElements.get('notes-context')) await import('../../ui/src/elements/notes-context.ts');
  if (!customElements.get('create-note')) await import('../../ui/src/elements/create-note.ts');

  const profiles = await demoProfiles();

  const profilesMock = new ProfilesZomeMock(
    profiles,
    Array.from(profiles.keys())[0]
  );
  const profilesStore = new ProfilesStore(new ProfilesClient(profilesMock, "notes_test"));

  const mock = new NotesZomeMock();
  const client = new NotesClient(mock, "notes_test");

  const note = await sampleNote(client);

  const record = await mock.create_note(note);

  const store = new NotesStore(client);
  
  render(html`
    <profiles-context .store=${profilesStore}>
      <notes-context .store=${store}>
        <api-demo src="custom-elements.json" only="create-note" exclude-knobs="store">
        </api-demo>
      </notes-context>
    </profiles-context>
  `, document.querySelector('element-demo'))
  })


</script>

## API Reference

`<create-note>` is a [custom element](https://web.dev/articles/custom-elements-v1), which means that it can be used in any web app or website. Here is the reference for its API:

<api-docs src="custom-elements.json" only="create-note">
</api-docs>
