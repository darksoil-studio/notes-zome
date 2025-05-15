import{_ as U}from"./tslib.es6.kHcLnhpD.js";/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const H=window,I=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol(),ot=new WeakMap;let nt=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(I&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=ot.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ot.set(t,e))}return e}toString(){return this.cssText}};const Pt=e=>new nt(typeof e=="string"?e:e+"",void 0,z),rt=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((i,o,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new nt(s,e,z)},Tt=(e,t)=>{I?e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):t.forEach(s=>{const i=document.createElement("style"),o=H.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=s.cssText,e.appendChild(i)})},at=I?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return Pt(s)})(e):e;/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var j;const M=window,lt=M.trustedTypes,Nt=lt?lt.emptyScript:"",D=M.reactiveElementPolyfillSupport,B={toAttribute(e,t){switch(t){case Boolean:e=e?Nt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},ht=(e,t)=>t!==e&&(t==t||e==e),q={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:ht},V="finalized";let b=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,s)=>{const i=this._$Ep(s,t);i!==void 0&&(this._$Ev.set(i,s),e.push(i))}),e}static createProperty(e,t=q){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){const o=this[e];this[t]=i,this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||q}static finalize(){if(this.hasOwnProperty(V))return!1;this[V]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of s)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(at(i))}else e!==void 0&&t.push(at(e));return t}static _$Ep(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Tt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=q){var i;const o=this.constructor._$Ep(e,s);if(o!==void 0&&s.reflect===!0){const n=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:B).toAttribute(t,s.type);this._$El=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(e,t){var s;const i=this.constructor,o=i._$Ev.get(e);if(o!==void 0&&this._$El!==o){const n=i.getPropertyOptions(o),r=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?n.converter:B;this._$El=o,this[o]=r.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,s){let i=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||ht)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(s)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,s)=>this._$EO(s,this[s],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};b[V]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},D==null||D({ReactiveElement:b}),((j=M.reactiveElementVersions)!==null&&j!==void 0?j:M.reactiveElementVersions=[]).push("1.6.3");/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var F;const O=window,g=O.trustedTypes,ct=g?g.createPolicy("lit-html",{createHTML:e=>e}):void 0,W="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,dt="?"+_,Ut=`<${dt}>`,$=document,E=()=>$.createComment(""),C=e=>e===null||typeof e!="object"&&typeof e!="function",ut=Array.isArray,Ht=e=>ut(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",K=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pt=/-->/g,vt=/>/g,m=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ft=/'/g,_t=/"/g,$t=/^(?:script|style|textarea|title)$/i,Mt=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),mt=Mt(1),f=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),At=new WeakMap,A=$.createTreeWalker($,129,null,!1);function bt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ct!==void 0?ct.createHTML(t):t}const Ot=(e,t)=>{const s=e.length-1,i=[];let o,n=t===2?"<svg>":"",r=x;for(let l=0;l<s;l++){const a=e[l];let c,h,d=-1,p=0;for(;p<a.length&&(r.lastIndex=p,h=r.exec(a),h!==null);)p=r.lastIndex,r===x?h[1]==="!--"?r=pt:h[1]!==void 0?r=vt:h[2]!==void 0?($t.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=m):h[3]!==void 0&&(r=m):r===m?h[0]===">"?(r=o??x,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,c=h[1],r=h[3]===void 0?m:h[3]==='"'?_t:ft):r===_t||r===ft?r=m:r===pt||r===vt?r=x:(r=m,o=void 0);const v=r===m&&e[l+1].startsWith("/>")?" ":"";n+=r===x?a+Ut:d>=0?(i.push(c),a.slice(0,d)+W+a.slice(d)+_+v):a+_+(d===-2?(i.push(void 0),l):v)}return[bt(e,n+(e[s]||"<?>")+(t===2?"</svg>":"")),i]};class T{constructor({strings:t,_$litType$:s},i){let o;this.parts=[];let n=0,r=0;const l=t.length-1,a=this.parts,[c,h]=Ot(t,s);if(this.el=T.createElement(c,i),A.currentNode=this.el.content,s===2){const d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(o=A.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const p of o.getAttributeNames())if(p.endsWith(W)||p.startsWith(_)){const v=h[r++];if(d.push(p),v!==void 0){const kt=o.getAttribute(v.toLowerCase()+W).split(_),N=/([.?@])?(.*)/.exec(v);a.push({type:1,index:n,name:N[2],strings:kt,ctor:N[1]==="."?Rt:N[1]==="?"?zt:N[1]==="@"?jt:L})}else a.push({type:6,index:n})}for(const p of d)o.removeAttribute(p)}if($t.test(o.tagName)){const d=o.textContent.split(_),p=d.length-1;if(p>0){o.textContent=g?g.emptyScript:"";for(let v=0;v<p;v++)o.append(d[v],E()),A.nextNode(),a.push({type:2,index:++n});o.append(d[p],E())}}}else if(o.nodeType===8)if(o.data===dt)a.push({type:2,index:n});else{let d=-1;for(;(d=o.data.indexOf(_,d+1))!==-1;)a.push({type:7,index:n}),d+=_.length-1}n++}}static createElement(t,s){const i=$.createElement("template");return i.innerHTML=t,i}}function y(e,t,s=e,i){var o,n,r,l;if(t===f)return t;let a=i!==void 0?(o=s._$Co)===null||o===void 0?void 0:o[i]:s._$Cl;const c=C(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),c===void 0?a=void 0:(a=new c(e),a._$AT(e,s,i)),i!==void 0?((r=(l=s)._$Co)!==null&&r!==void 0?r:l._$Co=[])[i]=a:s._$Cl=a),a!==void 0&&(t=y(e,a._$AS(e,t.values),a,i)),t}class Lt{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var s;const{el:{content:i},parts:o}=this._$AD,n=((s=t==null?void 0:t.creationScope)!==null&&s!==void 0?s:$).importNode(i,!0);A.currentNode=n;let r=A.nextNode(),l=0,a=0,c=o[0];for(;c!==void 0;){if(l===c.index){let h;c.type===2?h=new w(r,r.nextSibling,this,t):c.type===1?h=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(h=new Dt(r,this,t)),this._$AV.push(h),c=o[++a]}l!==(c==null?void 0:c.index)&&(r=A.nextNode(),l++)}return A.currentNode=$,n}v(t){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class w{constructor(t,s,i,o){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=o,this._$Cp=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,s;return(s=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&s!==void 0?s:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=y(this,t,s),C(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==f&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ht(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$($.createTextNode(t)),this._$AH=t}g(t){var s;const{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=T.createElement(bt(o.h,o.h[0]),this.options)),o);if(((s=this._$AH)===null||s===void 0?void 0:s._$AD)===n)this._$AH.v(i);else{const r=new Lt(n,this),l=r.u(this.options);r.v(i),this.$(l),this._$AH=r}}_$AC(t){let s=At.get(t.strings);return s===void 0&&At.set(t.strings,s=new T(t)),s}T(t){ut(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,o=0;for(const n of t)o===s.length?s.push(i=new w(this.k(E()),this.k(E()),this,this.options)):i=s[o],i._$AI(n),o++;o<s.length&&(this._$AR(i&&i._$AB.nextSibling,o),s.length=o)}_$AR(t=this._$AA.nextSibling,s){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,s);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var s;this._$AM===void 0&&(this._$Cp=t,(s=this._$AP)===null||s===void 0||s.call(this,t))}}class L{constructor(t,s,i,o,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=s,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,s=this,i,o){const n=this.strings;let r=!1;if(n===void 0)t=y(this,t,s,0),r=!C(t)||t!==this._$AH&&t!==f,r&&(this._$AH=t);else{const l=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=y(this,l[i+a],s,a),c===f&&(c=this._$AH[a]),r||(r=!C(c)||c!==this._$AH[a]),c===u?t=u:t!==u&&(t+=(c??"")+n[a+1]),this._$AH[a]=c}r&&!o&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Rt extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const It=g?g.emptyScript:"";class zt extends L{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,It):this.element.removeAttribute(this.name)}}class jt extends L{constructor(t,s,i,o,n){super(t,s,i,o,n),this.type=5}_$AI(t,s=this){var i;if((t=(i=y(this,t,s,0))!==null&&i!==void 0?i:u)===f)return;const o=this._$AH,n=t===u&&o!==u||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==u&&(o===u||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s,i;typeof this._$AH=="function"?this._$AH.call((i=(s=this.options)===null||s===void 0?void 0:s.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Dt{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){y(this,t)}}const Bt={I:w},Z=O.litHtmlPolyfillSupport;Z==null||Z(T,w),((F=O.litHtmlVersions)!==null&&F!==void 0?F:O.litHtmlVersions=[]).push("2.8.0");const gt=(e,t,s)=>{var i,o;const n=(i=s==null?void 0:s.renderBefore)!==null&&i!==void 0?i:t;let r=n._$litPart$;if(r===void 0){const l=(o=s==null?void 0:s.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=r=new w(t.insertBefore(E(),l),l,void 0,s??{})}return r._$AI(e),r};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Y,G;let S=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return f}};S.finalized=!0,S._$litElement$=!0,(Y=globalThis.litElementHydrateSupport)===null||Y===void 0||Y.call(globalThis,{LitElement:S});const J=globalThis.litElementPolyfillSupport;J==null||J({LitElement:S}),((G=globalThis.litElementVersions)!==null&&G!==void 0?G:globalThis.litElementVersions=[]).push("3.3.3");const qt=rt`
  :host {
    display: block;
    text-align: left;
    box-sizing: border-box;
    max-width: 800px;
    min-width: 360px;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
    border: 1px solid var(--ave-border-color);
    border-radius: var(--ave-border-radius);

    --ave-primary-color: #01579b;
    --ave-secondary-color: rgba(0, 0, 0, 0.54);
    --ave-accent-color: #d63200;
    --ave-border-color: rgba(0, 0, 0, 0.12);
    --ave-border-radius: 4px;
    --ave-header-color: #fff;
    --ave-item-color: rgba(0, 0, 0, 0.87);
    --ave-label-color: #424242;
    --ave-link-color: #01579b;
    --ave-link-hover-color: #d63200;
    --ave-tab-indicator-size: 2px;
    --ave-tab-color: rgba(0, 0, 0, 0.54);
    --ave-tag-background-color: #e2e3e5;
    --ave-tag-border-color: #d6d8db;
    --ave-tag-color: #383d41;
    --ave-monospace-font: Menlo, 'DejaVu Sans Mono', 'Liberation Mono', Consolas,
      'Courier New', monospace;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;
    background: var(--ave-header-background, var(--ave-primary-color));
    border-top-left-radius: var(--ave-border-radius);
    border-top-right-radius: var(--ave-border-radius);
  }

  nav {
    display: flex;
    align-items: center;
  }

  [part='header-title'] {
    color: var(--ave-header-color);
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  [part='select-label'] {
    margin-left: 0.5rem;
  }

  [part='warning'] {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    header {
      flex-direction: column;
    }

    nav {
      margin-top: 0.5rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    :host {
      background: #fff;
      color: #000;
    }
  }
`;/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:Vt}=Bt,Ft=e=>e===null||typeof e!="object"&&typeof e!="function",Wt=(e,t)=>(e==null?void 0:e._$litType$)!==void 0,Kt=e=>{var t;return((t=e==null?void 0:e._$litType$)===null||t===void 0?void 0:t.h)!=null},Zt=e=>e.strings===void 0,yt=()=>document.createComment(""),Yt=(e,t,s)=>{var i;const o=e._$AA.parentNode,n=e._$AB;if(s===void 0){const r=o.insertBefore(yt(),n),l=o.insertBefore(yt(),n);s=new Vt(r,l,e,e.options)}else{const r=s._$AB.nextSibling,l=s._$AM,a=l!==e;if(a){let c;(i=s._$AQ)===null||i===void 0||i.call(s,e),s._$AM=e,s._$AP!==void 0&&(c=e._$AU)!==l._$AU&&s._$AP(c)}if(r!==n||a){let c=s._$AA;for(;c!==r;){const h=c.nextSibling;o.insertBefore(c,n),c=h}}}return s},Gt={},Jt=(e,t=Gt)=>e._$AH=t,Qt=e=>e._$AH,Xt=e=>{e._$AR()};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Q={CHILD:2},X=e=>(...t)=>({_$litDirective$:e,values:t});let tt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const k=(e,t)=>{var s,i;const o=e._$AN;if(o===void 0)return!1;for(const n of o)(i=(s=n)._$AO)===null||i===void 0||i.call(s,t,!1),k(n,t);return!0},R=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},wt=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),se(t)}};function te(e){this._$AN!==void 0?(R(this),this._$AM=e,wt(this)):this._$AM=e}function ee(e,t=!1,s=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let n=s;n<i.length;n++)k(i[n],!1),R(i[n]);else i!=null&&(k(i,!1),R(i));else k(this,e)}const se=e=>{var t,s,i,o;e.type==Q.CHILD&&((t=(i=e)._$AP)!==null&&t!==void 0||(i._$AP=ee),(s=(o=e)._$AQ)!==null&&s!==void 0||(o._$AQ=te))};let ie=class extends tt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),wt(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,i;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)===null||s===void 0||s.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),t&&(k(this,e),R(this))}setValue(e){if(Zt(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/class oe{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}let ne=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var e;(e=this.Y)!==null&&e!==void 0||(this.Y=new Promise(t=>this.Z=t))}resume(){var e;(e=this.Z)===null||e===void 0||e.call(this),this.Y=this.Z=void 0}};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Et=e=>!Ft(e)&&typeof e.then=="function",Ct=1073741823;class re extends ie{constructor(){super(...arguments),this._$C_t=Ct,this._$Cwt=[],this._$Cq=new oe(this),this._$CK=new ne}render(...t){var s;return(s=t.find(i=>!Et(i)))!==null&&s!==void 0?s:f}update(t,s){const i=this._$Cwt;let o=i.length;this._$Cwt=s;const n=this._$Cq,r=this._$CK;this.isConnected||this.disconnected();for(let l=0;l<s.length&&!(l>this._$C_t);l++){const a=s[l];if(!Et(a))return this._$C_t=l,a;l<o&&a===i[l]||(this._$C_t=Ct,o=0,Promise.resolve(a).then(async c=>{for(;r.get();)await r.get();const h=n.deref();if(h!==void 0){const d=h._$Cwt.indexOf(a);d>-1&&d<h._$C_t&&(h._$C_t=d,h.setValue(c))}}))}return f}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const ae=X(re);function et(e){return!!e&&Array.isArray(e.modules)&&e.modules.some(t=>{var s,i;return((s=t.exports)==null?void 0:s.some(o=>o.kind==="custom-element-definition"))||((i=t.declarations)==null?void 0:i.some(o=>o.customElement))})}const le=e=>e.kind==="custom-element-definition",he=e=>e.customElement,xt=e=>!(e.privacy==="private"||e.privacy==="protected");async function ce(e){try{const t=await(await fetch(e)).json();if(et(t))return t;throw new Error(`No element definitions found at ${e}`)}catch(t){return console.error(t),null}}function de(e,t){const s=(e.modules??[]).flatMap(i=>{var o;return((o=i.exports)==null?void 0:o.filter(le))??[]});return t?s.filter(i=>t.includes(i.name)):s}const ue=(e,t,s)=>{var a,c;const i=s?t.findIndex(h=>(h==null?void 0:h.name)===s):0,o=t[i];if(!o)return null;const{name:n,module:r}=o.declaration,l=r?(c=(a=e.modules.find(h=>h.path===r.replace(/^\//,"")))==null?void 0:a.declarations)==null?void 0:c.find(h=>h.name===n):e.modules.flatMap(h=>h.declarations).find(h=>(h==null?void 0:h.name)===n);if(!l||!he(l))throw new Error(`Could not find declaration for ${s}`);return{customElement:!0,name:o.name,description:l==null?void 0:l.description,slots:l.slots??[],attributes:l.attributes??[],members:l.members??[],events:l.events??[],cssParts:l.cssParts??[],cssProperties:[...l.cssProperties??[]].sort((h,d)=>h.name>d.name?1:-1)}},pe=(e=[])=>e.filter(t=>t.kind==="field"&&xt(t)),ve=(e=[])=>e.filter(t=>t.kind==="method"&&xt(t));/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const fe=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(s){s.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}},_e=(e,t,s)=>{t.constructor.createProperty(s,e)};function P(e){return(t,s)=>s!==void 0?_e(e,t,s):fe(e,t)}const $e=mt`
  <div part="warning">No custom elements found in the JSON file.</div>
`,me=e=>{class t extends e{constructor(){super(...arguments),this.jsonFetched=Promise.resolve(null)}willUpdate(){const{src:i}=this;this.manifest?et(this.manifest)?(this.lastSrc=void 0,this.jsonFetched=Promise.resolve(this.manifest)):console.error("No custom elements found in the `manifest` object."):i&&this.lastSrc!==i&&(this.lastSrc=i,this.jsonFetched=ce(i))}}return U([P()],t.prototype,"src",void 0),U([P({attribute:!1})],t.prototype,"manifest",void 0),U([P({reflect:!0,converter:{fromAttribute:s=>s.split(","),toAttribute:s=>s.join(",")}})],t.prototype,"only",void 0),U([P()],t.prototype,"selected",void 0),t},Ae=e=>typeof e=="string"&&e.startsWith("'")&&e.endsWith("'")?e.slice(1,e.length-1):e;function st(e,...t){const s=document.createElement("template");return s.innerHTML=t.reduce((i,o,n)=>i+o+e[n+1],e[0]),s}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/class it extends tt{constructor(t){if(super(t),this.et=u,t.type!==Q.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this.ft=void 0,this.et=t;if(t===f)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const s=[t];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}}it.directiveName="unsafeHTML",it.resultType=1;const be=X(it);let ge=0;const ye=st`
  <style>
    :host {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      box-sizing: border-box;
      position: relative;
      max-width: 150px;
      overflow: hidden;
      min-height: 3rem;
      padding: 0 1rem;
      color: var(--ave-tab-color);
      font-size: 0.875rem;
      line-height: 1.2;
      font-weight: 500;
      text-transform: uppercase;
      outline: none;
      cursor: pointer;
      -webkit-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: var(--ave-tab-indicator-size);
      background-color: var(--ave-primary-color);
      opacity: 0;
    }

    :host([selected]) {
      color: var(--ave-tab-selected-color, var(--ave-primary-color));
    }

    :host([selected])::before {
      opacity: 1;
    }

    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: var(--ave-primary-color);
      opacity: 0;
      transition: opacity 0.1s linear;
    }

    :host(:hover)::after {
      opacity: 0.08;
    }

    :host([focus-ring])::after {
      opacity: 0.12;
    }

    :host([active])::after {
      opacity: 0.16;
    }

    @media (max-width: 600px) {
      :host {
        justify-content: center;
        text-align: center;
      }

      :host::before {
        top: auto;
        right: 0;
        width: 100%;
        height: var(--ave-tab-indicator-size);
      }
    }
  </style>
  <slot></slot>
`;class St extends HTMLElement{get selected(){return this._selected}set selected(t){this._selected=t,this.setAttribute("aria-selected",String(t)),this.setAttribute("tabindex",t?"0":"-1"),this.toggleAttribute("selected",t)}constructor(){super(),this._mousedown=!1,this._selected=!1,this.attachShadow({mode:"open"}).appendChild(ye.content.cloneNode(!0)),this.addEventListener("focus",()=>this._setFocused(!0),!0),this.addEventListener("blur",()=>{this._setFocused(!1),this._setActive(!1)},!0),this.addEventListener("mousedown",()=>{this._setActive(this._mousedown=!0);const t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)})}connectedCallback(){this.setAttribute("role","tab"),this.id||(this.id=`api-viewer-tab-${ge++}`)}_setActive(t){this.toggleAttribute("active",t)}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&!this._mousedown)}}customElements.define("api-viewer-tab",St);let we=0;const Ee=st`
  <style>
    :host {
      display: block;
      box-sizing: border-box;
      width: 100%;
      overflow: hidden;
    }

    :host([hidden]) {
      display: none !important;
    }
  </style>
  <slot></slot>
`;class Ce extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(Ee.content.cloneNode(!0))}connectedCallback(){this.setAttribute("role","tabpanel"),this.id||(this.id=`api-viewer-panel-${we++}`)}}customElements.define("api-viewer-panel",Ce);const xe=st`
  <style>
    :host {
      display: flex;
      border-bottom-left-radius: var(--ave-border-radius);
      overflow: hidden;
    }

    @media (max-width: 600px) {
      :host {
        flex-direction: column;
      }

      .tabs {
        display: flex;
        flex-grow: 1;
        align-self: stretch;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }
    }
  </style>
  <div class="tabs">
    <slot name="tab"></slot>
  </div>
  <slot name="panel"></slot>
`;class Se extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});t.appendChild(xe.content.cloneNode(!0));const s=t.querySelectorAll("slot");s[0].addEventListener("slotchange",()=>this._linkPanels()),s[1].addEventListener("slotchange",()=>this._linkPanels()),this.addEventListener("keydown",this.handleEvent),this.addEventListener("click",this.handleEvent)}connectedCallback(){this.setAttribute("role","tablist"),requestAnimationFrame(()=>{this._linkPanels()})}_linkPanels(){const{tabs:t}=this;t.forEach(i=>{const o=i.nextElementSibling;i.setAttribute("aria-controls",o.id),o.setAttribute("aria-labelledby",i.id)});const s=t.find(i=>i.selected)||t[0];this._selectTab(s)}get tabs(){return Array.from(this.querySelectorAll("api-viewer-tab"))}_getAvailableIndex(t,s){const{tabs:i}=this,o=i.length;for(let n=0;typeof t=="number"&&n<o;n++,t+=s||1)if(t<0?t=o-1:t>=o&&(t=0),!i[t].hasAttribute("hidden"))return t;return-1}_prevTab(t){const s=this._getAvailableIndex(t.findIndex(i=>i.selected)-1,-1);return t[(s+t.length)%t.length]}_nextTab(t){const s=this._getAvailableIndex(t.findIndex(i=>i.selected)+1,1);return t[s%t.length]}reset(){this.tabs.forEach(t=>{t.selected=!1}),this.querySelectorAll("api-viewer-panel").forEach(t=>{t.hidden=!0})}selectFirst(){const t=this._getAvailableIndex(0,1);this._selectTab(this.tabs[t%this.tabs.length])}_selectTab(t){this.reset();const s=t.getAttribute("aria-controls"),i=this.querySelector(`#${s}`);i&&(t.selected=!0,i.hidden=!1)}handleEvent(t){const{target:s}=t;if(s&&s instanceof St){let i;if(t.type==="keydown"){const{tabs:o}=this;switch(t.key){case"ArrowLeft":case"ArrowUp":i=this._prevTab(o);break;case"ArrowDown":case"ArrowRight":i=this._nextTab(o);break;case"Home":i=o[0];break;case"End":i=o[o.length-1];break;default:return}t.preventDefault()}else i=s;this._selectTab(i),i.focus()}}}customElements.define("api-viewer-tabs",Se);export{u as A,gt as D,me as M,f as T,ue as a,pe as b,ve as c,qt as d,$e as e,X as f,de as g,et as h,rt as i,tt as j,Qt as k,Jt as l,ae as m,P as n,be as o,Yt as p,Xt as q,Q as r,S as s,Wt as t,Ae as u,Kt as v,mt as x};
