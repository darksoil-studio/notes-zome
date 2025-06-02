import{_ as n}from"./tslib.es6.kHcLnhpD.js";import{h as m,i as u,j as x,x as a}from"./notes-client.B2dIe2T5.js";import{p as w,b as $,S,c as P,E as j,d as H,s as k,e as E,n as y,f as N,g as O,i as R,k as f,h as q,m as z,j as C,o as M,q as _,r as D,l as V}from"./prosemirror-flat-list-styles.BLiWIvu3.js";import{s as g,a as p,t as v,c as A}from"./property.D-izuzPU.js";import{S as b}from"./signal-watcher.IcN2PUh8.js";import{n as F}from"./context.BRM9QJvW.js";import"./range.DepzZoUv.js";import"./isIterateeCall.DmV5WHBc.js";import"./toFinite.CaWsV0a4.js";import"./isSymbol.DYPLY1nq.js";let r=class extends b(u){constructor(){super(...arguments),this.plugins=[],this.path=["text"],this.styles=[]}get schema(){return this.adapter.schema}firstUpdated(){this.adapter=this.schemaSpec?new S(this.schemaSpec):P,this.setupProsemirror()}updated(e){super.updated(e),e.has("document")&&this.setupProsemirror()}setupProsemirror(){var e,s;if(this.prosemirror){const t=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector("div");t&&((s=this.shadowRoot)===null||s===void 0||s.removeChild(t))}this.prosemirror=new j(this.shadowRoot,{state:H.create({doc:E(this.adapter,x(this.document,this.path)),plugins:[k({adapter:this.adapter,handle:{change(t){},docSync:()=>this.document,off(t,i){},on(t,i){}},path:this.path}),...this.plugins]}),dispatchTransaction:t=>{this.prosemirror.updateState(this.prosemirror.state.apply(t))},editable:()=>!1})}render(){return a`${this.styles.map(e=>a`<style>
					${e}
				</style>`)}`}};r.styles=[m`
			:host {
				pointer-events: none;
			}
			.ProseMirror {
				min-height: 100%;
			}

			.ProseMirror[data-placeholder]::before {
				position: absolute;
				content: attr(data-placeholder);
				pointer-events: none;
				color: var(--sl-color-gray-700);
			}

			[contenteditable]:active,
			[contenteditable]:focus {
				border: none;
				outline: none;
			}
			p {
				margin: 0;
			}
		`,w,$,g],n([p()],r.prototype,"plugins",void 0),n([p()],r.prototype,"schemaSpec",void 0),n([p()],r.prototype,"path",void 0),n([p()],r.prototype,"document",void 0),n([p()],r.prototype,"styles",void 0),r=n([v("readonly-prosemirror")],r);var K=Object.defineProperty,L=Object.getOwnPropertyDescriptor,c=(e,s,t,i)=>{for(var o=i>1?void 0:i?L(s,t):s,d=e.length-1,h;d>=0;d--)(h=e[d])&&(o=(i?h(s,t,o):h(o))||o);return i&&o&&K(s,t,o),o};let l=class extends b(u){renderSummary(e){return a`
			${e.images_hashes.map(s=>a`
					<show-image
						part="image"
						slot="image"
						.imageHash=${s}
					></show-image>
				`)}
			<div class="row" style="gap: 16px; flex: 1;">
				<div class="column" style="gap: 16px; flex: 1;">
					<span
						style="white-space: pre-line; font-size: 24px; word-break: break-all"
						>${e.title}</span
					>

					<readonly-prosemirror
						.document=${e}
						.path=${["body"]}
						.schemaSpec=${y}
						.styles=${[N]}
						.plugins=${[...O({schema:new q(y)}),R({rules:C}),f(M),f(_)]}
						style="flex: 1; overflow: hidden;"
					></readonly-prosemirror>
				</div>
			</div>
		`}renderNote(){const e=this.notesStore.notes.get(this.noteHash).latestVersion.get();switch(e.status){case"pending":return a`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;case"error":return a`<display-error
					.headline=${z("Error fetching the note")}
					.error=${e.error}
				></display-error>`;case"completed":return this.renderSummary(e.value.doc)}}render(){return a`<sl-card
			style="flex: 1; cursor: grab;"
			@click=${()=>this.dispatchEvent(new CustomEvent("note-selected",{composed:!0,bubbles:!0,detail:{noteHash:this.noteHash}}))}
		>
			${this.renderNote()}
		</sl-card>`}};l.styles=[g,m`
			:host {
				display: flex;
			}
		`],c([p(D("note-hash"))],l.prototype,"noteHash",2),c([A({context:F,subscribe:!0})],l.prototype,"notesStore",2),l=c([V(),v("note-summary")],l);export{l as NoteSummary};
