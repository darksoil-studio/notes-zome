import{_ as t}from"./tslib.es6.kHcLnhpD.js";import{n as r,a as o,c as i,t as p}from"./property.BTRT8MSf.js";import{e as s}from"./provide.DwPTBxxc.js";import{a as n,b as c,x as l,i as a,h as m}from"./notes-client.CtlbsTPZ.js";import{a as f}from"./context.B3B5i6FH.js";import{S as h}from"./signal-watcher.CLTKX5E5.js";import"./range.DepzZoUv.js";import"./isIterateeCall.DmV5WHBc.js";import"./toFinite.CaWsV0a4.js";import"./isSymbol.DYPLY1nq.js";const x=r("hc_zome_profiles/store"),d=r("ProfilesProvider");let e=class extends h(a){constructor(){super(...arguments),this.zome="profiles"}connectedCallback(){if(super.connectedCallback(),!this.store){if(!this.role)throw new Error('<profiles-context> must have a role="YOUR_DNA_ROLE" property, eg: <profiles-context role="role1">');if(!this.client)throw new Error(`<profiles-context> must either:
				a) be placed inside <app-client-context>
					or 
				b) receive an AppClient property (eg. <profiles-context .client=\${client}>) 
					or 
				c) receive a store property (eg. <profiles-context .store=\${store}>)`);this.store=new n(new c(this.client,this.role,this.zome))}}render(){return l`<slot></slot>`}};e.styles=m`
		:host {
			display: contents;
		}
	`,t([s({context:x}),s({context:d}),o({type:Object})],e.prototype,"store",void 0),t([i({context:f,subscribe:!0})],e.prototype,"client",void 0),t([o()],e.prototype,"role",void 0),t([o()],e.prototype,"zome",void 0),e=t([p("profiles-context")],e);export{e as ProfilesContext};
