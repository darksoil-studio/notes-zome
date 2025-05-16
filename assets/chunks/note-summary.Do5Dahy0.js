import{s as d,a as m,c as h,t as c}from"./property.D-Bq6jHL.js";import{m as y,h as u,l as f}from"./chunk.3LWOA5DF.LMXLNl8H.js";import{x as s,i as g,h as x}from"./notes-client.D5p1SwbK.js";import{S as v}from"./signal-watcher.B8nWLdb2.js";import{n as b}from"./context.Bpr8pzml.js";import"./range.DepzZoUv.js";import"./isIterateeCall.DmV5WHBc.js";import"./toFinite.CaWsV0a4.js";import"./isSymbol.DYPLY1nq.js";var w=Object.defineProperty,$=Object.getOwnPropertyDescriptor,p=(e,r,i,a)=>{for(var t=a>1?void 0:a?$(r,i):r,n=e.length-1,l;n>=0;n--)(l=e[n])&&(t=(a?l(r,i,t):l(t))||t);return a&&t&&w(r,i,t),t};let o=class extends v(g){renderSummary(e){return s`
			<div class="row" style="gap: 16px; flex: 1; height: 200px">
				${e.images_hashes.length>0?s`
							<div class="column" style="height: 200px">
								${e.images_hashes.map(r=>s`
										<show-image
											style="max-width: 600px;"
											.imageHash=${r}
										></show-image>
									`)}
							</div>
						`:s``}
				<div class="column" style="gap: 16px; flex: 1;">
					<span
						style="white-space: pre-line; font-size: 24px; word-break: break-all"
						>${e.title}</span
					>

					<div style="overflow: hidden; word-break: break-all">
						${e.body}
					</div>
				</div>
			</div>
		`}renderNote(){const e=this.notesStore.notes.get(this.noteHash).latestVersion.get();switch(e.status){case"pending":return s`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;case"error":return s`<display-error
					.headline=${y("Error fetching the note")}
					.error=${e.error}
				></display-error>`;case"completed":return this.renderSummary(e.value.doc)}}render(){return s`<sl-card
			style="flex: 1; cursor: grab;"
			@click=${()=>this.dispatchEvent(new CustomEvent("note-selected",{composed:!0,bubbles:!0,detail:{noteHash:this.noteHash}}))}
		>
			${this.renderNote()}
		</sl-card>`}};o.styles=[d,x`
			:host {
				display: flex;
			}
		`],p([m(u("note-hash"))],o.prototype,"noteHash",2),p([h({context:b,subscribe:!0})],o.prototype,"notesStore",2),o=p([f(),c("note-summary")],o);export{o as NoteSummary};
