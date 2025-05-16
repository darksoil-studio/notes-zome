import{c as h,a as l,t as m}from"./property.D1KwM4A7.js";import{i as x,e as y,c as f,x as g,h as w}from"./notes-client.DwRtGXZP.js";import{a as d}from"./context.Bp68pK4B.js";import{e as u}from"./provide.DE7PUQYF.js";import{n as b}from"./context.DHCDjLmr.js";import"./range.DepzZoUv.js";import"./isIterateeCall.DmV5WHBc.js";import"./toFinite.CaWsV0a4.js";import"./isSymbol.DYPLY1nq.js";var v=Object.defineProperty,z=Object.getOwnPropertyDescriptor,o=(s,n,p,i)=>{for(var t=i>1?void 0:i?z(n,p):n,c=s.length-1,a;c>=0;c--)(a=s[c])&&(t=(i?a(n,p,t):a(t))||t);return i&&t&&v(n,p,t),t};const r=new Map;let e=class extends x{constructor(){super(...arguments),this.zome="notes"}connectedCallback(){if(super.connectedCallback(),!this.store){if(!this.role)throw new Error('<notes-context> must have a role="YOUR_DNA_ROLE" property, eg: <notes-context role="role1">');if(!this.client)throw new Error(`<notes-context> must either:
        a) be placed inside <app-client-context>
          or 
        b) receive an AppClient property (eg. <notes-context .client=\${client}>) 
          or 
        c) receive a store property (eg. <notes-context .store=\${store}>)
      `);if(r.has(this.role)||r.set(this.role,new Map),!r.get(this.role).has(this.zome)){const s=new y(new f(this.client,this.role,this.zome));r.get(this.role).set(this.zome,s)}this.store=r.get(this.role).get(this.zome)}}render(){return g`<slot></slot>`}};e.styles=w`
		:host {
			display: contents;
		}
	`,o([h({context:d})],e.prototype,"client",2),o([u({context:b}),l({type:Object})],e.prototype,"store",2),o([l()],e.prototype,"role",2),o([l()],e.prototype,"zome",2),e=o([m("notes-context")],e);export{e as NotesContext};
