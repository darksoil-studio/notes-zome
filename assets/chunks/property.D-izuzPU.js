import{h as u,k as d,l as p}from"./notes-client.B2dIe2T5.js";/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/let h=class extends Event{constructor(t,s,e,o){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=s,this.callback=e,this.subscribe=o??!1}};/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function x(t){return t}/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/class b{constructor(s,e,o,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(i,c)=>{this.unsubscribe&&(this.unsubscribe!==c&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=i,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(i,c)),this.unsubscribe=c},this.host=s,e.context!==void 0){const i=e;this.context=i.context,this.callback=i.callback,this.subscribe=i.subscribe??!1}else this.context=e,this.callback=o,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new h(this.context,this.host,this.t,this.subscribe))}}/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function f({context:t,subscribe:s}){return(e,o)=>{typeof o=="object"?o.addInitializer(function(){new b(this,{context:t,callback:r=>{e.set.call(this,r)},subscribe:s})}):e.constructor.addInitializer(r=>{new b(r,{context:t,callback:i=>{r[o]=i},subscribe:s})})}}const m=[u`
		.row {
			display: flex;
			flex-direction: row;
		}
		.column {
			display: flex;
			flex-direction: column;
		}
		.small-margin {
			margin-top: 6px;
		}
		.big-margin {
			margin-top: 23px;
		}

		.fill {
			flex: 1;
			height: 100%;
		}

		.title {
			font-size: 20px;
		}

		.center-content {
			align-items: center;
			justify-content: center;
		}

		.placeholder {
			color: var(--sl-color-gray-700);
		}

		.flex-scrollable-parent {
			position: relative;
			display: flex;
			flex: 1;
		}

		.flex-scrollable-container {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		.flex-scrollable-x {
			max-width: 100%;
			overflow-x: auto;
		}
		.flex-scrollable-y {
			max-height: 100%;
			overflow-y: auto;
		}
		:host {
			color: var(--sl-color-neutral-1000);
		}

		sl-card {
			display: flex;
		}
		sl-card::part(base) {
			flex: 1;
		}
		sl-card::part(body) {
			display: flex;
			flex: 1;
			height: 100%;
		}
		sl-drawer::part(body) {
			display: flex;
		}
	`];/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/class n extends Event{constructor(s){super(n.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=s}}n.eventName="lit-routes-connected";/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const v=t=>(s,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(t,s)}):customElements.define(t,s)};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const y={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:d},g=(t=y,s,e)=>{const{kind:o,metadata:r}=e;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(e.name,t),o==="accessor"){const{name:c}=e;return{set(l){const a=s.get.call(this);s.set.call(this,l),this.requestUpdate(c,a,t)},init(l){return l!==void 0&&this.C(c,void 0,t,l),l}}}if(o==="setter"){const{name:c}=e;return function(l){const a=this[c];s.call(this,l),this.requestUpdate(c,a,t)}}throw Error("Unsupported decorator location: "+o)};function w(t){return(s,e)=>typeof e=="object"?g(t,s,e):((o,r,i)=>{const c=r.hasOwnProperty(i);return r.constructor.createProperty(i,o),c?Object.getOwnPropertyDescriptor(r,i):void 0})(t,s,e)}export{w as a,h as b,f as c,x as n,m as s,v as t};
