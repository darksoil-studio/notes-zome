import{c as l,a as p,t as m}from"./property.BTRT8MSf.js";import{i as h,e as x,c as y,x as f,h as d}from"./notes-client.CtlbsTPZ.js";import{a as u}from"./context.B3B5i6FH.js";import{e as b}from"./provide.DwPTBxxc.js";import{n as w}from"./context.BpabIJ9o.js";import"./range.DepzZoUv.js";import"./isIterateeCall.DmV5WHBc.js";import"./toFinite.CaWsV0a4.js";import"./isSymbol.DYPLY1nq.js";var v=Object.defineProperty,g=Object.getOwnPropertyDescriptor,o=(a,r,n,s)=>{for(var t=s>1?void 0:s?g(r,n):r,c=a.length-1,i;c>=0;c--)(i=a[c])&&(t=(s?i(r,n,t):i(t))||t);return s&&t&&v(r,n,t),t};let e=class extends h{constructor(){super(...arguments),this.zome="notes"}connectedCallback(){if(super.connectedCallback(),!this.store){if(!this.role)throw new Error('<notes-context> must have a role="YOUR_DNA_ROLE" property, eg: <notes-context role="role1">');if(!this.client)throw new Error(`<notes-context> must either:
        a) be placed inside <app-client-context>
          or 
        b) receive an AppClient property (eg. <notes-context .client=\${client}>) 
          or 
        c) receive a store property (eg. <notes-context .store=\${store}>)
      `);this.store=new x(new y(this.client,this.role,this.zome))}}render(){return f`<slot></slot>`}};e.styles=d`
		:host {
			display: contents;
		}
	`,o([l({context:u})],e.prototype,"client",2),o([b({context:w}),p({type:Object})],e.prototype,"store",2),o([p()],e.prototype,"role",2),o([p()],e.prototype,"zome",2),e=o([m("notes-context")],e);export{e as NotesContext};
