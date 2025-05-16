import{g as je,l as Ve,h as et,i as ie,x as T,T as Ie}from"./notes-client.DwRtGXZP.js";import{a as m,s as We,t as Ue}from"./property.D1KwM4A7.js";/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const qe={ATTRIBUTE:1},Ze=t=>(...e)=>({_$litDirective$:t,values:e});let Ke=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};function Xe(t){return{attribute:t,type:Object,hasChanged:(e,o)=>(e==null?void 0:e.toString())!==(o==null?void 0:o.toString()),converter:{fromAttribute:e=>e&&e.length>0&&Ve(e),toAttribute:e=>e&&je(e)},reflect:!0}}function re(t){return`data:image/svg+xml;utf8,${Ye(t)}`}function Ye(t){return encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' style='fill: currentColor' viewBox='0 0 24 24'><path d='${t}'></path></svg>`)}var ne="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",Ge="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",Je="M4 13C2.89 13 2 13.89 2 15V19C2 20.11 2.89 21 4 21H8C9.11 21 10 20.11 10 19V15C10 13.89 9.11 13 8 13M8.2 14.5L9.26 15.55L5.27 19.5L2.74 16.95L3.81 15.9L5.28 17.39M4 3C2.89 3 2 3.89 2 5V9C2 10.11 2.89 11 4 11H8C9.11 11 10 10.11 10 9V5C10 3.89 9.11 3 8 3M4 5H8V9H4M12 5H22V7H12M12 19V17H22V19M12 11H22V13H12Z";/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function se(t){return m({...t,state:!0,attribute:!1})}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Qe=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function nt(t,e){return(o,i,r)=>{const n=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(t))??null};return Qe(o,i,{get(){return n(this)}})}}var Tt="";function ae(t){Tt=t}function to(t=""){if(!Tt){const e=[...document.getElementsByTagName("script")],o=e.find(i=>i.hasAttribute("data-shoelace"));if(o)ae(o.getAttribute("data-shoelace"));else{const i=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let r="";i&&(r=i.getAttribute("src")),ae(r.split("/").slice(0,-1).join("/"))}}return Tt.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var eo={name:"default",resolver:t=>to(`assets/icons/${t}.svg`)},oo=eo,le={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},io={name:"system",resolver:t=>t in le?`data:image/svg+xml,${encodeURIComponent(le[t])}`:""},ro=io,no=[oo,ro],Mt=[];function so(t){Mt.push(t)}function ao(t){Mt=Mt.filter(e=>e!==t)}function ce(t){return no.find(e=>e.name===t)}var lo=et`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,he=Object.defineProperty,co=Object.defineProperties,ho=Object.getOwnPropertyDescriptor,po=Object.getOwnPropertyDescriptors,de=Object.getOwnPropertySymbols,uo=Object.prototype.hasOwnProperty,fo=Object.prototype.propertyIsEnumerable,pe=t=>{throw TypeError(t)},ue=(t,e,o)=>e in t?he(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,ft=(t,e)=>{for(var o in e||(e={}))uo.call(e,o)&&ue(t,o,e[o]);if(de)for(var o of de(e))fo.call(e,o)&&ue(t,o,e[o]);return t},Ot=(t,e)=>co(t,po(e)),f=(t,e,o,i)=>{for(var r=i>1?void 0:i?ho(e,o):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(i?s(e,o,r):s(r))||r);return i&&r&&he(e,o,r),r},fe=(t,e,o)=>e.has(t)||pe("Cannot "+o),go=(t,e,o)=>(fe(t,e,"read from private field"),e.get(t)),mo=(t,e,o)=>e.has(t)?pe("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),vo=(t,e,o,i)=>(fe(t,e,"write to private field"),e.set(t,o),o);function st(t,e){const o=ft({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:n}=i,s=Array.isArray(t)?t:[t];i.update=function(a){s.forEach(l=>{const c=l;if(a.has(c)){const h=a.get(c),p=this[c];h!==p&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,p)}}),n.call(this,a)}}}var at=et`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,bt,F=class extends ie{constructor(){super(),mo(this,bt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const o=new CustomEvent(t,ft({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,o)}catch{customElements.define(t,class extends e{},o)}return}let r=" (unknown version)",n=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in i&&i.version&&(n=" v"+i.version),!(r&&n&&r===n)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${n} has already been registered.`)}attributeChangedCallback(t,e,o){go(this,bt)||(this.constructor.elementProperties.forEach((i,r)=>{i.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),vo(this,bt,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&this[o]==null&&(this[o]=e)})}};bt=new WeakMap,F.version="2.20.1",F.dependencies={},f([m()],F.prototype,"dir",2),f([m()],F.prototype,"lang",2);/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const yo=(t,e)=>(t==null?void 0:t._$litType$)!==void 0;var gt=Symbol(),xt=Symbol(),Rt,Bt=new Map,N=class extends F{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(e!=null&&e.spriteSheet)return this.svg=T`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?gt:xt}catch{return xt}try{const r=document.createElement("div");r.innerHTML=await i.text();const n=r.firstElementChild;if(((o=n==null?void 0:n.tagName)==null?void 0:o.toLowerCase())!=="svg")return gt;Rt||(Rt=new DOMParser);const s=Rt.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):gt}catch{return gt}}connectedCallback(){super.connectedCallback(),so(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ao(this)}getIconSource(){const t=ce(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?ce(this.library):void 0;if(!e){this.svg=null;return}let r=Bt.get(e);if(r||(r=this.resolveIcon(e,i),Bt.set(e,r)),!this.initialRender)return;const n=await r;if(n===xt&&Bt.delete(e),e===this.getIconSource().url){if(yo(n)){if(this.svg=n,i){await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&s&&i.mutator(s)}return}switch(n){case xt:case gt:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(t=i==null?void 0:i.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};N.styles=[at,lo],f([se()],N.prototype,"svg",2),f([m({reflect:!0})],N.prototype,"name",2),f([m()],N.prototype,"src",2),f([m()],N.prototype,"label",2),f([m({reflect:!0})],N.prototype,"library",2),f([st("label")],N.prototype,"handleLabelChange",1),f([st(["name","src","library"])],N.prototype,"setIcon",1),N.define("sl-icon");var wo=et`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,bo=et`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Dt=new Set,lt=new Map;let ot,Ht="ltr",Ft="en";const ge=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(ge){const t=new MutationObserver(ve);Ht=document.documentElement.dir||"ltr",Ft=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function me(...t){t.map(e=>{const o=e.$code.toLowerCase();lt.has(o)?lt.set(o,Object.assign(Object.assign({},lt.get(o)),e)):lt.set(o,e),ot||(ot=e)}),ve()}function ve(){ge&&(Ht=document.documentElement.dir||"ltr",Ft=document.documentElement.lang||navigator.language),[...Dt.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let xo=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Dt.add(this.host)}hostDisconnected(){Dt.delete(this.host)}dir(){return`${this.host.dir||Ht}`.toLowerCase()}lang(){return`${this.host.lang||Ft}`.toLowerCase()}getTranslationData(t){var e,o;const i=new Intl.Locale(t.replace(/_/g,"-")),r=i==null?void 0:i.language.toLowerCase(),n=(o=(e=i==null?void 0:i.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&o!==void 0?o:"",s=lt.get(`${r}-${n}`),a=lt.get(r);return{locale:i,language:r,region:n,primary:s,secondary:a}}exists(t,e){var o;const{primary:i,secondary:r}=this.getTranslationData((o=e.lang)!==null&&o!==void 0?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(i&&i[t]||r&&r[t]||e.includeFallback&&ot&&ot[t])}term(t,...e){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let r;if(o&&o[t])r=o[t];else if(i&&i[t])r=i[t];else if(ot&&ot[t])r=ot[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof r=="function"?r(...e):r}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}};var ye={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};me(ye);var Co=ye,Ct=class extends xo{};me(Co);const Y=Math.min,S=Math.max,kt=Math.round,zt=Math.floor,j=t=>({x:t,y:t}),ko={left:"right",right:"left",bottom:"top",top:"bottom"},zo={start:"end",end:"start"};function Nt(t,e,o){return S(t,Y(e,o))}function ct(t,e){return typeof t=="function"?t(e):t}function G(t){return t.split("-")[0]}function ht(t){return t.split("-")[1]}function we(t){return t==="x"?"y":"x"}function jt(t){return t==="y"?"height":"width"}function J(t){return["top","bottom"].includes(G(t))?"y":"x"}function Vt(t){return we(J(t))}function Eo(t,e,o){o===void 0&&(o=!1);const i=ht(t),r=Vt(t),n=jt(r);let s=r==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=Et(s)),[s,Et(s)]}function Lo(t){const e=Et(t);return[It(t),e,It(e)]}function It(t){return t.replace(/start|end/g,e=>zo[e])}function So(t,e,o){const i=["left","right"],r=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?r:i:e?i:r;case"left":case"right":return e?n:s;default:return[]}}function _o(t,e,o,i){const r=ht(t);let n=So(G(t),o==="start",i);return r&&(n=n.map(s=>s+"-"+r),e&&(n=n.concat(n.map(It)))),n}function Et(t){return t.replace(/left|right|bottom|top/g,e=>ko[e])}function Po(t){return{top:0,right:0,bottom:0,left:0,...t}}function be(t){return typeof t!="number"?Po(t):{top:t,right:t,bottom:t,left:t}}function Lt(t){const{x:e,y:o,width:i,height:r}=t;return{width:i,height:r,top:o,left:e,right:e+i,bottom:o+r,x:e,y:o}}function xe(t,e,o){let{reference:i,floating:r}=t;const n=J(e),s=Vt(e),a=jt(s),l=G(e),c=n==="y",h=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,g=i[a]/2-r[a]/2;let d;switch(l){case"top":d={x:h,y:i.y-r.height};break;case"bottom":d={x:h,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:p};break;case"left":d={x:i.x-r.width,y:p};break;default:d={x:i.x,y:i.y}}switch(ht(e)){case"start":d[s]-=g*(o&&c?-1:1);break;case"end":d[s]+=g*(o&&c?-1:1);break}return d}const Ao=async(t,e,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:n=[],platform:s}=o,a=n.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:h,y:p}=xe(c,i,l),g=i,d={},u=0;for(let v=0;v<a.length;v++){const{name:y,fn:w}=a[v],{x:b,y:x,data:k,reset:E}=await w({x:h,y:p,initialPlacement:i,placement:g,strategy:r,middlewareData:d,rects:c,platform:s,elements:{reference:t,floating:e}});h=b??h,p=x??p,d={...d,[y]:{...d[y],...k}},E&&u<=50&&(u++,typeof E=="object"&&(E.placement&&(g=E.placement),E.rects&&(c=E.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):E.rects),{x:h,y:p}=xe(c,g,l)),v=-1)}return{x:h,y:p,placement:g,strategy:r,middlewareData:d}};async function Wt(t,e){var o;e===void 0&&(e={});const{x:i,y:r,platform:n,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:g=!1,padding:d=0}=ct(e,t),u=be(d),v=a[g?p==="floating"?"reference":"floating":p],y=Lt(await n.getClippingRect({element:(o=await(n.isElement==null?void 0:n.isElement(v)))==null||o?v:v.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),w=p==="floating"?{x:i,y:r,width:s.floating.width,height:s.floating.height}:s.reference,b=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),x=await(n.isElement==null?void 0:n.isElement(b))?await(n.getScale==null?void 0:n.getScale(b))||{x:1,y:1}:{x:1,y:1},k=Lt(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:b,strategy:l}):w);return{top:(y.top-k.top+u.top)/x.y,bottom:(k.bottom-y.bottom+u.bottom)/x.y,left:(y.left-k.left+u.left)/x.x,right:(k.right-y.right+u.right)/x.x}}const $o=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:r,rects:n,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=ct(t,e)||{};if(c==null)return{};const p=be(h),g={x:o,y:i},d=Vt(r),u=jt(d),v=await s.getDimensions(c),y=d==="y",w=y?"top":"left",b=y?"bottom":"right",x=y?"clientHeight":"clientWidth",k=n.reference[u]+n.reference[d]-g[d]-n.floating[u],E=g[d]-n.reference[d],L=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let A=L?L[x]:0;(!A||!await(s.isElement==null?void 0:s.isElement(L)))&&(A=a.floating[x]||n.floating[u]);const W=k/2-E/2,R=A/2-v[u]/2-1,P=Y(p[w],R),q=Y(p[b],R),B=P,Z=A-v[u]-q,D=A/2-v[u]/2+W,$=Nt(B,D,Z),tt=!l.arrow&&ht(r)!=null&&D!==$&&n.reference[u]/2-(D<B?P:q)-v[u]/2<0,U=tt?D<B?D-B:D-Z:0;return{[d]:g[d]+U,data:{[d]:$,centerOffset:D-$-U,...tt&&{alignmentOffset:U}},reset:tt}}}),To=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:r,middlewareData:n,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:g,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:u="none",flipAlignment:v=!0,...y}=ct(t,e);if((o=n.arrow)!=null&&o.alignmentOffset)return{};const w=G(r),b=J(a),x=G(a)===a,k=await(l.isRTL==null?void 0:l.isRTL(c.floating)),E=g||(x||!v?[Et(a)]:Lo(a)),L=u!=="none";!g&&L&&E.push(..._o(a,v,u,k));const A=[a,...E],W=await Wt(e,y),R=[];let P=((i=n.flip)==null?void 0:i.overflows)||[];if(h&&R.push(W[w]),p){const $=Eo(r,s,k);R.push(W[$[0]],W[$[1]])}if(P=[...P,{placement:r,overflows:R}],!R.every($=>$<=0)){var q,B;const $=(((q=n.flip)==null?void 0:q.index)||0)+1,tt=A[$];if(tt){var Z;const K=p==="alignment"?b!==J(tt):!1,H=((Z=P[0])==null?void 0:Z.overflows[0])>0;if(!K||H)return{data:{index:$,overflows:P},reset:{placement:tt}}}let U=(B=P.filter(K=>K.overflows[0]<=0).sort((K,H)=>K.overflows[1]-H.overflows[1])[0])==null?void 0:B.placement;if(!U)switch(d){case"bestFit":{var D;const K=(D=P.filter(H=>{if(L){const X=J(H.placement);return X===b||X==="y"}return!0}).map(H=>[H.placement,H.overflows.filter(X=>X>0).reduce((X,Ne)=>X+Ne,0)]).sort((H,X)=>H[1]-X[1])[0])==null?void 0:D[0];K&&(U=K);break}case"initialPlacement":U=a;break}if(r!==U)return{reset:{placement:U}}}return{}}}};async function Mo(t,e){const{placement:o,platform:i,elements:r}=t,n=await(i.isRTL==null?void 0:i.isRTL(r.floating)),s=G(o),a=ht(o),l=J(o)==="y",c=["left","top"].includes(s)?-1:1,h=n&&l?-1:1,p=ct(e,t);let{mainAxis:g,crossAxis:d,alignmentAxis:u}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return a&&typeof u=="number"&&(d=a==="end"?u*-1:u),l?{x:d*h,y:g*c}:{x:g*c,y:d*h}}const Oo=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:r,y:n,placement:s,middlewareData:a}=e,l=await Mo(e,t);return s===((o=a.offset)==null?void 0:o.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:n+l.y,data:{...l,placement:s}}}}},Ro=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:r}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:a={fn:y=>{let{x:w,y:b}=y;return{x:w,y:b}}},...l}=ct(t,e),c={x:o,y:i},h=await Wt(e,l),p=J(G(r)),g=we(p);let d=c[g],u=c[p];if(n){const y=g==="y"?"top":"left",w=g==="y"?"bottom":"right",b=d+h[y],x=d-h[w];d=Nt(b,d,x)}if(s){const y=p==="y"?"top":"left",w=p==="y"?"bottom":"right",b=u+h[y],x=u-h[w];u=Nt(b,u,x)}const v=a.fn({...e,[g]:d,[p]:u});return{...v,data:{x:v.x-o,y:v.y-i,enabled:{[g]:n,[p]:s}}}}}},Bo=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:r,rects:n,platform:s,elements:a}=e,{apply:l=()=>{},...c}=ct(t,e),h=await Wt(e,c),p=G(r),g=ht(r),d=J(r)==="y",{width:u,height:v}=n.floating;let y,w;p==="top"||p==="bottom"?(y=p,w=g===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(w=p,y=g==="end"?"top":"bottom");const b=v-h.top-h.bottom,x=u-h.left-h.right,k=Y(v-h[y],b),E=Y(u-h[w],x),L=!e.middlewareData.shift;let A=k,W=E;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(W=x),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(A=b),L&&!g){const P=S(h.left,0),q=S(h.right,0),B=S(h.top,0),Z=S(h.bottom,0);d?W=u-2*(P!==0||q!==0?P+q:S(h.left,h.right)):A=v-2*(B!==0||Z!==0?B+Z:S(h.top,h.bottom))}await l({...e,availableWidth:W,availableHeight:A});const R=await s.getDimensions(a.floating);return u!==R.width||v!==R.height?{reset:{rects:!0}}:{}}}};function St(){return typeof window<"u"}function dt(t){return Ce(t)?(t.nodeName||"").toLowerCase():"#document"}function _(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function V(t){var e;return(e=(Ce(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ce(t){return St()?t instanceof Node||t instanceof _(t).Node:!1}function M(t){return St()?t instanceof Element||t instanceof _(t).Element:!1}function I(t){return St()?t instanceof HTMLElement||t instanceof _(t).HTMLElement:!1}function ke(t){return!St()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof _(t).ShadowRoot}function mt(t){const{overflow:e,overflowX:o,overflowY:i,display:r}=O(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(r)}function Do(t){return["table","td","th"].includes(dt(t))}function _t(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Pt(t){const e=Ut(),o=M(t)?O(t):t;return["transform","translate","scale","rotate","perspective"].some(i=>o[i]?o[i]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function Ho(t){let e=Q(t);for(;I(e)&&!pt(e);){if(Pt(e))return e;if(_t(e))return null;e=Q(e)}return null}function Ut(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function pt(t){return["html","body","#document"].includes(dt(t))}function O(t){return _(t).getComputedStyle(t)}function At(t){return M(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Q(t){if(dt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ke(t)&&t.host||V(t);return ke(e)?e.host:e}function ze(t){const e=Q(t);return pt(e)?t.ownerDocument?t.ownerDocument.body:t.body:I(e)&&mt(e)?e:ze(e)}function vt(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=ze(t),n=r===((i=t.ownerDocument)==null?void 0:i.body),s=_(r);if(n){const a=qt(s);return e.concat(s,s.visualViewport||[],mt(r)?r:[],a&&o?vt(a):[])}return e.concat(r,vt(r,[],o))}function qt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ee(t){const e=O(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=I(t),n=r?t.offsetWidth:o,s=r?t.offsetHeight:i,a=kt(o)!==n||kt(i)!==s;return a&&(o=n,i=s),{width:o,height:i,$:a}}function Zt(t){return M(t)?t:t.contextElement}function ut(t){const e=Zt(t);if(!I(e))return j(1);const o=e.getBoundingClientRect(),{width:i,height:r,$:n}=Ee(e);let s=(n?kt(o.width):o.width)/i,a=(n?kt(o.height):o.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Fo=j(0);function Le(t){const e=_(t);return!Ut()||!e.visualViewport?Fo:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function No(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==_(t)?!1:e}function it(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),n=Zt(t);let s=j(1);e&&(i?M(i)&&(s=ut(i)):s=ut(t));const a=No(n,o,i)?Le(n):j(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,h=r.width/s.x,p=r.height/s.y;if(n){const g=_(n),d=i&&M(i)?_(i):i;let u=g,v=qt(u);for(;v&&i&&d!==u;){const y=ut(v),w=v.getBoundingClientRect(),b=O(v),x=w.left+(v.clientLeft+parseFloat(b.paddingLeft))*y.x,k=w.top+(v.clientTop+parseFloat(b.paddingTop))*y.y;l*=y.x,c*=y.y,h*=y.x,p*=y.y,l+=x,c+=k,u=_(v),v=qt(u)}}return Lt({width:h,height:p,x:l,y:c})}function Kt(t,e){const o=At(t).scrollLeft;return e?e.left+o:it(V(t)).left+o}function Se(t,e,o){o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=i.left+e.scrollLeft-(o?0:Kt(t,i)),n=i.top+e.scrollTop;return{x:r,y:n}}function jo(t){let{elements:e,rect:o,offsetParent:i,strategy:r}=t;const n=r==="fixed",s=V(i),a=e?_t(e.floating):!1;if(i===s||a&&n)return o;let l={scrollLeft:0,scrollTop:0},c=j(1);const h=j(0),p=I(i);if((p||!p&&!n)&&((dt(i)!=="body"||mt(s))&&(l=At(i)),I(i))){const d=it(i);c=ut(i),h.x=d.x+i.clientLeft,h.y=d.y+i.clientTop}const g=s&&!p&&!n?Se(s,l,!0):j(0);return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+h.x+g.x,y:o.y*c.y-l.scrollTop*c.y+h.y+g.y}}function Vo(t){return Array.from(t.getClientRects())}function Io(t){const e=V(t),o=At(t),i=t.ownerDocument.body,r=S(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=S(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-o.scrollLeft+Kt(t);const a=-o.scrollTop;return O(i).direction==="rtl"&&(s+=S(e.clientWidth,i.clientWidth)-r),{width:r,height:n,x:s,y:a}}function Wo(t,e){const o=_(t),i=V(t),r=o.visualViewport;let n=i.clientWidth,s=i.clientHeight,a=0,l=0;if(r){n=r.width,s=r.height;const c=Ut();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:n,height:s,x:a,y:l}}function Uo(t,e){const o=it(t,!0,e==="fixed"),i=o.top+t.clientTop,r=o.left+t.clientLeft,n=I(t)?ut(t):j(1),s=t.clientWidth*n.x,a=t.clientHeight*n.y,l=r*n.x,c=i*n.y;return{width:s,height:a,x:l,y:c}}function _e(t,e,o){let i;if(e==="viewport")i=Wo(t,o);else if(e==="document")i=Io(V(t));else if(M(e))i=Uo(e,o);else{const r=Le(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return Lt(i)}function Pe(t,e){const o=Q(t);return o===e||!M(o)||pt(o)?!1:O(o).position==="fixed"||Pe(o,e)}function qo(t,e){const o=e.get(t);if(o)return o;let i=vt(t,[],!1).filter(a=>M(a)&&dt(a)!=="body"),r=null;const n=O(t).position==="fixed";let s=n?Q(t):t;for(;M(s)&&!pt(s);){const a=O(s),l=Pt(s);!l&&a.position==="fixed"&&(r=null),(n?!l&&!r:!l&&a.position==="static"&&r&&["absolute","fixed"].includes(r.position)||mt(s)&&!l&&Pe(t,s))?i=i.filter(c=>c!==s):r=a,s=Q(s)}return e.set(t,i),i}function Zo(t){let{element:e,boundary:o,rootBoundary:i,strategy:r}=t;const n=[...o==="clippingAncestors"?_t(e)?[]:qo(e,this._c):[].concat(o),i],s=n[0],a=n.reduce((l,c)=>{const h=_e(e,c,r);return l.top=S(h.top,l.top),l.right=Y(h.right,l.right),l.bottom=Y(h.bottom,l.bottom),l.left=S(h.left,l.left),l},_e(e,s,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Ko(t){const{width:e,height:o}=Ee(t);return{width:e,height:o}}function Xo(t,e,o){const i=I(e),r=V(e),n=o==="fixed",s=it(t,!0,n,e);let a={scrollLeft:0,scrollTop:0};const l=j(0);function c(){l.x=Kt(r)}if(i||!i&&!n)if((dt(e)!=="body"||mt(r))&&(a=At(e)),i){const d=it(e,!0,n,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else r&&c();n&&!i&&r&&c();const h=r&&!i&&!n?Se(r,a):j(0),p=s.left+a.scrollLeft-l.x-h.x,g=s.top+a.scrollTop-l.y-h.y;return{x:p,y:g,width:s.width,height:s.height}}function Xt(t){return O(t).position==="static"}function Ae(t,e){if(!I(t)||O(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return V(t)===o&&(o=o.ownerDocument.body),o}function $e(t,e){const o=_(t);if(_t(t))return o;if(!I(t)){let r=Q(t);for(;r&&!pt(r);){if(M(r)&&!Xt(r))return r;r=Q(r)}return o}let i=Ae(t,e);for(;i&&Do(i)&&Xt(i);)i=Ae(i,e);return i&&pt(i)&&Xt(i)&&!Pt(i)?o:i||Ho(t)||o}const Yo=async function(t){const e=this.getOffsetParent||$e,o=this.getDimensions,i=await o(t.floating);return{reference:Xo(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Go(t){return O(t).direction==="rtl"}const $t={convertOffsetParentRelativeRectToViewportRelativeRect:jo,getDocumentElement:V,getClippingRect:Zo,getOffsetParent:$e,getElementRects:Yo,getClientRects:Vo,getDimensions:Ko,getScale:ut,isElement:M,isRTL:Go};function Te(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Jo(t,e){let o=null,i;const r=V(t);function n(){var a;clearTimeout(i),(a=o)==null||a.disconnect(),o=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),n();const c=t.getBoundingClientRect(),{left:h,top:p,width:g,height:d}=c;if(a||e(),!g||!d)return;const u=zt(p),v=zt(r.clientWidth-(h+g)),y=zt(r.clientHeight-(p+d)),w=zt(h),b={rootMargin:-u+"px "+-v+"px "+-y+"px "+-w+"px",threshold:S(0,Y(1,l))||1};let x=!0;function k(E){const L=E[0].intersectionRatio;if(L!==l){if(!x)return s();L?s(!1,L):i=setTimeout(()=>{s(!1,1e-7)},1e3)}L===1&&!Te(c,t.getBoundingClientRect())&&s(),x=!1}try{o=new IntersectionObserver(k,{...b,root:r.ownerDocument})}catch{o=new IntersectionObserver(k,b)}o.observe(t)}return s(!0),n}function Qo(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=Zt(t),h=r||n?[...c?vt(c):[],...vt(e)]:[];h.forEach(w=>{r&&w.addEventListener("scroll",o,{passive:!0}),n&&w.addEventListener("resize",o)});const p=c&&a?Jo(c,o):null;let g=-1,d=null;s&&(d=new ResizeObserver(w=>{let[b]=w;b&&b.target===c&&d&&(d.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;(x=d)==null||x.observe(e)})),o()}),c&&!l&&d.observe(c),d.observe(e));let u,v=l?it(t):null;l&&y();function y(){const w=it(t);v&&!Te(v,w)&&o(),v=w,u=requestAnimationFrame(y)}return o(),()=>{var w;h.forEach(b=>{r&&b.removeEventListener("scroll",o),n&&b.removeEventListener("resize",o)}),p==null||p(),(w=d)==null||w.disconnect(),d=null,l&&cancelAnimationFrame(u)}}const ti=Oo,ei=Ro,oi=To,Me=Bo,ii=$o,ri=(t,e,o)=>{const i=new Map,r={platform:$t,...o},n={...r.platform,_c:i};return Ao(t,e,{...r,platform:n})};/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const yt=Ze(class extends Ke{constructor(t){var e;if(super(t),t.type!==qe.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const o=t.element.classList;for(const n of this.st)n in e||(o.remove(n),this.st.delete(n));for(const n in e){const s=!!e[n];s===this.st.has(n)||(r=this.nt)!=null&&r.has(n)||(s?(o.add(n),this.st.add(n)):(o.remove(n),this.st.delete(n)))}return Ie}});function ni(t){return si(t)}function Yt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function si(t){for(let e=t;e;e=Yt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Yt(t);e;e=Yt(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||Pt(o)||e.tagName==="BODY"))return e}return null}function ai(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var C=class extends F{constructor(){super(...arguments),this.localize=new Ct(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,n=0,s=0,a=0,l=0,c=0,h=0;o?t.top<e.top?(i=t.left,r=t.bottom,n=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):(i=e.left,r=e.bottom,n=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):t.left<e.left?(i=t.right,r=t.top,n=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom):(i=e.right,r=e.top,n=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||ai(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Qo(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[ti({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Me({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=r?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(oi({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(ei({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Me({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(ii({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>$t.getOffsetParent(o,ni):$t.getOffsetParent;ri(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Ot(ft({},$t),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:r,placement:n})=>{const s=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const l=r.arrow.x,c=r.arrow.y;let h="",p="",g="",d="";if(this.arrowPlacement==="start"){const u=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=s?u:"",d=s?"":u}else if(this.arrowPlacement==="end"){const u=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=s?"":u,d=s?u:"",g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(d=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(d=typeof l=="number"?`${l}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:p,bottom:g,left:d,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return T`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${yt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${yt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?T`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};C.styles=[at,bo],f([nt(".popup")],C.prototype,"popup",2),f([nt(".popup__arrow")],C.prototype,"arrowEl",2),f([m()],C.prototype,"anchor",2),f([m({type:Boolean,reflect:!0})],C.prototype,"active",2),f([m({reflect:!0})],C.prototype,"placement",2),f([m({reflect:!0})],C.prototype,"strategy",2),f([m({type:Number})],C.prototype,"distance",2),f([m({type:Number})],C.prototype,"skidding",2),f([m({type:Boolean})],C.prototype,"arrow",2),f([m({attribute:"arrow-placement"})],C.prototype,"arrowPlacement",2),f([m({attribute:"arrow-padding",type:Number})],C.prototype,"arrowPadding",2),f([m({type:Boolean})],C.prototype,"flip",2),f([m({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],C.prototype,"flipFallbackPlacements",2),f([m({attribute:"flip-fallback-strategy"})],C.prototype,"flipFallbackStrategy",2),f([m({type:Object})],C.prototype,"flipBoundary",2),f([m({attribute:"flip-padding",type:Number})],C.prototype,"flipPadding",2),f([m({type:Boolean})],C.prototype,"shift",2),f([m({type:Object})],C.prototype,"shiftBoundary",2),f([m({attribute:"shift-padding",type:Number})],C.prototype,"shiftPadding",2),f([m({attribute:"auto-size"})],C.prototype,"autoSize",2),f([m()],C.prototype,"sync",2),f([m({type:Object})],C.prototype,"autoSizeBoundary",2),f([m({attribute:"auto-size-padding",type:Number})],C.prototype,"autoSizePadding",2),f([m({attribute:"hover-bridge",type:Boolean})],C.prototype,"hoverBridge",2);var Oe=new Map,li=new WeakMap;function ci(t){return t??{keyframes:[],options:{duration:0}}}function Re(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Gt(t,e){Oe.set(t,ci(e))}function Jt(t,e,o){const i=li.get(t);if(i!=null&&i[e])return Re(i[e],o.dir);const r=Oe.get(e);return r?Re(r,o.dir):{keyframes:[],options:{duration:0}}}function Qt(t,e){return new Promise(o=>{function i(r){r.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function te(t,e,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,Ot(ft({},o),{duration:hi()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function Be(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function hi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ee(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}var z=class extends F{constructor(){super(),this.localize=new Ct(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Be(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Be(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ee(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:i}=Jt(this,"tooltip.show",{dir:this.localize.dir()});await te(this.popup.popup,o,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ee(this.body);const{keyframes:o,options:i}=Jt(this,"tooltip.hide",{dir:this.localize.dir()});await te(this.popup.popup,o,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Qt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Qt(this,"sl-after-hide")}render(){return T`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${yt({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};z.styles=[at,wo],z.dependencies={"sl-popup":C},f([nt("slot:not([name])")],z.prototype,"defaultSlot",2),f([nt(".tooltip__body")],z.prototype,"body",2),f([nt("sl-popup")],z.prototype,"popup",2),f([m()],z.prototype,"content",2),f([m()],z.prototype,"placement",2),f([m({type:Boolean,reflect:!0})],z.prototype,"disabled",2),f([m({type:Number})],z.prototype,"distance",2),f([m({type:Boolean,reflect:!0})],z.prototype,"open",2),f([m({type:Number})],z.prototype,"skidding",2),f([m()],z.prototype,"trigger",2),f([m({type:Boolean})],z.prototype,"hoist",2),f([st("open",{waitUntilFirstUpdate:!0})],z.prototype,"handleOpenChange",1),f([st(["content","distance","hoist","placement","skidding"])],z.prototype,"handleOptionsChange",1),f([st("disabled")],z.prototype,"handleDisabledChange",1),Gt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),Gt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),z.define("sl-tooltip");var wt=function(t,e,o,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,o,n):s(e,o))||n);return r>3&&n&&Object.defineProperty(e,o,n),n};let rt=class extends ie{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return T`
			<sl-icon
				style="color: red; height: ${this._iconSize}; width: ${this._iconSize};"
				src="${re(ne)}"
			></sl-icon>
		`}renderFull(){return T` <div class="column center-content" style="flex: 1; gap: 8px">
			${this.renderIcon()}
			<div style="max-width: 500px; text-align: center" class="column">
				${this.headline?T` <span style="margin-bottom: 8px">${this.headline} </span>`:T``}
				<span class="placeholder"
					>${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
				</span>
			</div>
		</div>`}renderTooltip(){return T`
			<sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
				${this.renderIcon()}</sl-tooltip
			>
		`}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};rt.styles=[We,et`
			:host {
				display: flex;
			}
		`],wt([m({attribute:"tooltip"})],rt.prototype,"tooltip",void 0),wt([m()],rt.prototype,"headline",void 0),wt([m()],rt.prototype,"error",void 0),wt([m({attribute:"icon-size"})],rt.prototype,"iconSize",void 0),rt=wt([Ue("display-error")],rt);/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const De="lit-localize-status";/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const di=t=>typeof t!="string"&&"strTag"in t,pi=(t,e,o)=>{let i=t[0];for(let r=1;r<t.length;r++)i+=e[r-1],i+=t[r];return i};/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const ui=t=>di(t)?pi(t.strings,t.values):t;let fi=ui;/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/class gi{constructor(e){this.__litLocalizeEventHandler=o=>{o.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(De,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(De,this.__litLocalizeEventHandler)}}const mi=t=>t.addController(new gi(t)),vi=mi;/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const yi=()=>(t,e)=>(t.addInitializer(vi),t);/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/class wi{constructor(){this.settled=!1,this.promise=new Promise((e,o)=>{this._resolve=e,this._reject=o})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
* @license
* Copyright 2014 Travis Webb
* SPDX-License-Identifier: MIT
*/for(let t=0;t<256;t++)(t>>4&15).toString(16)+(t&15).toString(16);/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/let bi=new wi;bi.resolve();var xi=et`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,oe=class extends F{constructor(){super(...arguments),this.localize=new Ct(this)}render(){return T`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};oe.styles=[at,xi],oe.define("sl-spinner");var Ci=et`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,He=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},Fe=class extends F{constructor(){super(...arguments),this.hasSlotController=new He(this,"footer","header","image")}render(){return T`
      <div
        part="base"
        class=${yt({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Fe.styles=[at,Ci],Fe.define("sl-card");export{He as H,Ct as L,N as S,f as _,Ge as a,ne as b,at as c,F as d,nt as e,yt as f,st as g,Xe as h,ee as i,Jt as j,te as k,yi as l,fi as m,Qt as n,Ot as o,ft as p,oe as q,se as r,Gt as s,Je as t,re as w};
