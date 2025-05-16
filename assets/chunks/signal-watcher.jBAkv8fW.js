var i=Object.defineProperty;var r=(s,e,a)=>e in s?i(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var c=(s,e,a)=>r(s,typeof e!="symbol"?e+"":e,a);import{S as d}from"./notes-client.DwRtGXZP.js";/**
* @license
* Copyright 2023 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function p(s){class e extends s{constructor(){super(...arguments);c(this,"__dispose");c(this,"w",new d.subtle.Watcher(()=>{this.requestUpdate()}))}performUpdate(){if(this.isUpdatePending===!1)return;const t=this.__dispose,n=new d.Computed(()=>{super.performUpdate()});this.w.watch(n),this.__dispose=()=>{this.w.unwatch(n)},n.get(),t==null||t()}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.__dispose)==null||t.call(this)}}return e}export{p as S};
