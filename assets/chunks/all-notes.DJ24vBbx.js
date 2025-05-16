import{s as m,c as d,t as f}from"./property.D-Bq6jHL.js";import{x as s,i as y}from"./notes-client.D5p1SwbK.js";import{w as u,m as p,a as x,l as g}from"./chunk.3LWOA5DF.LMXLNl8H.js";import{S as h}from"./signal-watcher.B8nWLdb2.js";import{n as v}from"./context.Bpr8pzml.js";import"./note-summary.Do5Dahy0.js";import"./range.DepzZoUv.js";import"./isIterateeCall.DmV5WHBc.js";import"./toFinite.CaWsV0a4.js";import"./isSymbol.DYPLY1nq.js";var $=Object.defineProperty,b=Object.getOwnPropertyDescriptor,c=(e,r,i,n)=>{for(var t=n>1?void 0:n?b(r,i):r,l=e.length-1,a;l>=0;l--)(a=e[l])&&(t=(n?a(r,i,t):a(t))||t);return n&&t&&$(r,i,t),t};let o=class extends h(y){renderList(e){return e.length===0?s` <div
				class="column placeholder center-content"
				style="gap: 8px; flex: 1"
			>
				<sl-icon
					.src=${u(x)}
					style="font-size: 64px;"
				></sl-icon>
				<span style="text-align: center">${p("No notes found.")}</span>
			</div>`:s`
			<div class="column" style="gap: 8px; flex: 1">
				${e.map(r=>s`<note-summary .noteHash=${r}></note-summary>`)}
			</div>
		`}render(){const e=this.notesStore.allNotes.get();switch(e.status){case"pending":return s`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;case"error":return s`<display-error
					.headline=${p("Error fetching the notes")}
					.error=${e.error}
				></display-error>`;case"completed":return this.renderList(Array.from(e.value.keys()))}}};o.styles=[m],c([d({context:v,subscribe:!0})],o.prototype,"notesStore",2),o=c([g(),f("all-notes")],o);export{o as AllNotes};
