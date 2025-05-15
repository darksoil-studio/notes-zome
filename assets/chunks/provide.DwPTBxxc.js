import{b as l}from"./property.BTRT8MSf.js";/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/class d{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const o=e||!Object.is(t,this.o);this.o=t,o&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:o}]of this.subscriptions)e(this.o,o)},t!==void 0&&(this.value=t)}addCallback(t,e,o){if(!o)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/let p=class extends Event{constructor(r,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=r,this.contextTarget=t}};class u extends d{constructor(t,e,o){var i,c;super(e.context!==void 0?e.initialValue:o),this.onContextRequest=s=>{if(s.context!==this.context)return;const n=s.contextTarget??s.composedPath()[0];n!==this.host&&(s.stopPropagation(),this.addCallback(s.callback,n,s.subscribe))},this.onProviderRequest=s=>{if(s.context!==this.context||(s.contextTarget??s.composedPath()[0])===this.host)return;const n=new Set;for(const[h,{consumerHost:a}]of this.subscriptions)n.has(h)||(n.add(h),a.dispatchEvent(new l(this.context,a,h,!0)));s.stopPropagation()},this.host=t,e.context!==void 0?this.context=e.context:this.context=e,this.attachListeners(),(c=(i=this.host).addController)==null||c.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new p(this.context,this.host))}}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function b({context:r}){return(t,e)=>{const o=new WeakMap;if(typeof e=="object")return{get(){return t.get.call(this)},set(i){return o.get(this).setValue(i),t.set.call(this,i)},init(i){return o.set(this,new u(this,{context:r,initialValue:i})),i}};{t.constructor.addInitializer(s=>{o.set(s,new u(s,{context:r}))});const i=Object.getOwnPropertyDescriptor(t,e);let c;if(i===void 0){const s=new WeakMap;c={get(){return s.get(this)},set(n){o.get(this).setValue(n),s.set(this,n)},configurable:!0,enumerable:!0}}else{const s=i.set;c={...i,set(n){o.get(this).setValue(n),s==null||s.call(this,n)}}}return void Object.defineProperty(t,e,c)}}}export{b as e};
