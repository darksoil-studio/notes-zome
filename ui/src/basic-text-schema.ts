import { MappedSchemaSpec } from '@automerge/prosemirror';
import { createListSpec, listToDOM } from 'prosemirror-flat-list';
import { DOMOutputSpec, NodeSpec } from 'prosemirror-model';

const pDOM: DOMOutputSpec = ['p', 0];

console.log(createListSpec());
export const basicTextSchemaSpec: MappedSchemaSpec = {
	nodes: {
		/// NodeSpec The top level document node.
		doc: {
			content: 'block+',
		} as NodeSpec,

		/// A plain paragraph textblock. Represented in the DOM
		/// as a `<p>` element.
		paragraph: {
			automerge: {
				block: 'paragraph',
			},
			content: 'inline*',
			group: 'block',
			parseDOM: [{ tag: 'p' }],
			toDOM() {
				return pDOM;
			},
		} as NodeSpec,

		list: {
			automerge: {
				block: 'paragraph',
			},
			...createListSpec(),
		},

		unknownBlock: {
			automerge: {
				unknownBlock: true,
			},
			group: 'block',
			content: 'block+',
			parseDOM: [{ tag: 'div', attrs: { 'data-unknown-block': 'true' } }],
			toDOM() {
				return ['div', { 'data-unknown-block': 'true' }, 0];
			},
		},

		/// The text node.
		text: {
			group: 'inline',
		} as NodeSpec,
	},
	marks: {},
};
