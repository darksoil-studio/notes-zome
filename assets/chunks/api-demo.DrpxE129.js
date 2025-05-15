import{f as te,j as ne,t as ye,k as $e,D as ze,A as ae,l as xe,p as we,q as Fe,v as He,x as w,u as ke,o as se,r as Ee,T as Ne,n as T,s as Ce,M as We,m as De,h as qe,e as Xe,g as Me,a as Ue,b as Ve,i as re,d as Ze}from"./api-viewer-tabs.CBT_sciR.js";import{_ as S}from"./tslib.es6.kHcLnhpD.js";const G=[],Ge=(n,e)=>{G[n]=e},I=Object.freeze({HOST:"host",KNOB:"knob",SLOT:"slot",PREFIX:"prefix",SUFFIX:"suffix",WRAPPER:"wrapper"}),O=n=>n instanceof HTMLTemplateElement,oe=(n,e)=>t=>{const{element:a,target:s}=t.dataset;return a===n&&s===e},J=n=>O(n)?n.content.firstElementChild:null,D=(n,e,t)=>G[n].find(oe(e,t)),Je=(n,e,t)=>G[n].filter(oe(e,t)),ie=(n,e,t)=>G[n].some(oe(e,t));/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Te=n=>He(n)?n._$litType$.h:n.strings,Ye=te(class extends ne{constructor(n){super(n),this.tt=new WeakMap}render(n){return[n]}update(n,[e]){const t=ye(this.et)?Te(this.et):null,a=ye(e)?Te(e):null;if(t!==null&&(a===null||t!==a)){const s=$e(n).pop();let r=this.tt.get(t);if(r===void 0){const i=document.createDocumentFragment();r=ze(ae,i),r.setConnected(!1),this.tt.set(t,r)}xe(r,[s]),we(r,void 0,s)}if(a!==null){if(t===null||t!==a){const s=this.tt.get(a);if(s!==void 0){const r=$e(s).pop();Fe(n),we(n,void 0,r),xe(n,[r])}}this.et=e}else this.et=void 0;return this.render(e)}});class le{get data(){return this._data}set data(e){this._data=e,this.updateData(e)}updateData(e){this.host.isConnected&&this.host.requestUpdate()}constructor(e,t){this._data=[],(this.host=e).addController(this),this.el=t}clear(){this.data=[]}destroy(){this.host.removeController(this)}}class Qe extends le{constructor(e,t,a){super(e,t),a.forEach(({name:s})=>{t.addEventListener(s,r=>{const i="-changed";if(s.endsWith(i)){const{knob:o}=e.getKnob(s.replace(i,""));e.syncKnob(t,o)}this.data=[...this.data,r]})})}}const et=n=>n[0].toUpperCase()+n.slice(1),Se=n=>et(n===""?"content":n),tt=(n,e)=>{const{name:t,value:a}=n;return w`
    <input
      id=${e}
      type="text"
      .value=${String(a)}
      data-name=${t}
      part="input"
    />
  `},Pe=(n,e)=>{const{name:t,knobType:a,value:s,options:r}=n;let i;return a==="select"&&Array.isArray(r)?i=w`
      <select id=${e} data-name=${t} data-type=${a} part="select">
        ${r.map(o=>w`<option value=${o}>${o}</option>`)}
      </select>
    `:a==="boolean"?i=w`
      <input
        id=${e}
        type="checkbox"
        .checked=${!!s}
        data-name=${t}
        data-type=${a}
        part="checkbox"
      />
    `:i=w`
      <input
        id=${e}
        type=${a==="number"?"number":"text"}
        .value=${s==null?"":String(s)}
        data-name=${t}
        data-type=${a}
        part="input"
      />
    `,i},nt=(n,e)=>{const{name:t,content:a}=n;return w`
    <input
      id=${e}
      type="text"
      .value=${a}
      data-type="slot"
      data-slot=${t}
      part="input"
    />
  `},Y=(n,e,t,a)=>{const s=n.map(r=>{const{name:i}=r,o=`${t}-${i||"default"}`,u=t==="slot"?Se(i):i;return w`
      <tr>
        <td>
          <label for=${o} part="knob-label">${u}</label>
        </td>
        <td>${a(r,o)}</td>
      </tr>
    `});return w`
    <h3 part="knobs-header" ?hidden=${n.length===0}>${e}</h3>
    <table>
      ${s}
    </table>
  `};class at extends le{constructor(e,t,a,s){super(e,t),this.enabled=!ie(a,t.localName,I.SLOT),this.data=s.sort((r,i)=>r.name===""?1:i.name===""?-1:r.name.localeCompare(i.name)).map(r=>({...r,content:Se(r.name)}))}setValue(e,t){this.data=this.data.map(a=>a.name===e?{...a,content:t}:a)}updateData(e){super.updateData(e),this.enabled&&this.el.isConnected&&e&&e.length&&(this.el.innerHTML="",e.forEach(t=>{let a;const{name:s,content:r}=t;s?(a=document.createElement("div"),a.setAttribute("slot",s),a.textContent=r):a=document.createTextNode(r),this.el.appendChild(a)}))}}class st extends le{constructor(e,t,a){if(super(e,t),a.length){const s=getComputedStyle(t);this.data=a.map(r=>{let i=r.default?ke(r.default):s.getPropertyValue(r.name);const o=r;return i&&(i=i.trim(),o.default=i,o.value=i),o})}}setValue(e,t){this.data=this.data.map(a=>a.name===e?{...a,value:t}:a)}updateData(e){super.updateData(e),e.length&&e.forEach(t=>{const{name:a,value:s}=t;s&&(s===t.default?this.el.style.removeProperty(a):this.el.style.setProperty(a,s))})}}const rt=n=>{const e=n,t="undefined";return"value"in n&&n.value===void 0&&(e.value=t),` detail: ${JSON.stringify(n).replace(`"${t}"`,t)}`},ot=n=>w`
  ${n.map(e=>w`
      <p part="event-record">
        event:
        ${e.type}.${e.detail==null?ae:rt(e.detail)}
      </p>
    `)}
`;function it(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var lt={text:function(n){return it(n)},join:function(n){return n.join("")},wrap:function(n,e){return'<span class="'+n+'">'+e+"</span>"}};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var z=function(){return z=Object.assign||function(n){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},z.apply(this,arguments)};function ce(n){return n&&n.source||n}var ct={exec:function(){return null}};function q(n,e,t){return new RegExp(ce(e),"m"+(n.case_insensitive?"i":"")+(t?"g":""))}function ut(n){var e=[];function t(o){for(var u=0,g=e;u<g.length;u++){var h=g[u],m=h[0],f=h[1];if(o===m)return f}}var a=[];function s(o){if(!(!o.variants||!o.variants.length)){for(var u=0,g=a;u<g.length;u++){var h=g[u],m=h[0],f=h[1];if(o===m)return f}var b=o.variants.map(function(E){return z({},o,{variants:void 0},E)});return a.push([o,b]),b}}function r(o,u,g){var h=t(o);if(h)return h;var m={lexemesRe:q(n,o.lexemes||/\w+/,!0),relevance:o.relevance==null?1:o.relevance,contains:[],terminators:ct,subLanguage:o.subLanguage==null?void 0:typeof o.subLanguage=="string"?[o.subLanguage]:o.subLanguage};e.push([o,m]),o.className&&(m.className=o.className),o.illegal&&(m.illegalRe=q(n,o.illegal));for(var f=0,b=["endsParent","endsWithParent","skip","excludeBegin","excludeEnd","returnBegin","returnEnd"];f<b.length;f++){var E=b[f];o[E]&&(m[E]=!0)}var p;if(u){var v=o.beginKeywords?"\\b("+o.beginKeywords.split(/\s+/).join("|")+")\\b":o.begin||/\B|\b/;o.begin=v,m.beginRe=q(n,v);var k=!o.end&&!o.endsWithParent?/\B|\b/:o.end;k&&(o.end=k,m.endRe=q(n,k)),p=ce(k)||"",o.endsWithParent&&g&&(p+=(k?"|":"")+g)}var y=o.keywords||o.beginKeywords;if(y){var d={},F=function(l,c){n.case_insensitive&&(c=c.toLowerCase());for(var x=c.split(/\s+/),C=0,W=x;C<W.length;C++){var Z=W[C],A=Z.split(/\|/),B=A[0],fe=A[1];d[B]=[l,fe?Number(fe):1]}};if(typeof y=="string")F("keyword",y);else for(var N in y)F(N,y[N]);m.keywords=d}var $=[];if(o.contains&&o.contains.length){for(var _=0,K=o.contains;_<K.length;_++)for(var H=K[_],R=H==="self"?o:H,X=s(R)||R.endsWithParent&&[z({},R)]||[R],j=0,M=X;j<M.length;j++){var U=M[j];$.push(U)}m.contains=$.map(function(l){return r(l,m,p)})}o.starts&&(m.starts=r(o.starts,u,g));var V=$.map(function(l){return l.beginKeywords?"\\.?("+l.begin+")\\.?":l.begin}).concat([p,o.illegal]).map(ce).filter(Boolean);return V.length&&(m.terminators=q(n,V.join("|"),!0)),m}var i=r(n);return n.case_insensitive&&(i.case_insensitive=!0),i}var Q={},Re={};function dt(n){return"lexemesRe"in n}function pt(n){if(Q[n.name]=n,n.aliases)for(var e=0,t=n.aliases;e<t.length;e++){var a=t[e];Re[a]=n.name}}function mt(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];for(var t=0,a=n;t<a.length;t++){var s=a[t];pt(s)}}function ht(){return Object.keys(Q)}function ue(n){n=(n||"").toLowerCase(),n=Re[n]||n;var e=Q[n];if(e)return dt(e)?e:Q[n]=ut(e)}var gt="\\b\\d+(\\.\\d+)?",Le={begin:"\\\\[\\s\\S]",relevance:0},de={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[Le]},pe={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[Le]},bt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/};function ee(n,e,t){t===void 0&&(t={});var a=z({className:"comment",begin:n,end:e,contains:[]},t),s=a.contains;return s&&(s.push(bt),s.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0})),a}ee("//","$");var me=ee("/\\*","\\*/");ee("#","$");var _e={className:"number",begin:gt+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},vt="[A-Za-z0-9\\._:-]+",he={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:vt,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]},ft={name:"xml",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},ee("<!--","-->",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0}]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[he],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[he],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},he]}]};function ge(n,e){var t=n&&n.exec(e);return t&&t.index===0||!1}function be(n,e,t,a,s,r){var i=[{content:[]}];function o(l){var c=i[0].content;typeof l=="string"&&c.length&&typeof c[c.length-1]=="string"?c[c.length-1]+=l:c.push(l)}function u(l){o(e.text(l))}function g(l,c){c||(l=n.classPrefix+l),i.unshift({className:l,content:[]})}function h(l){l=n.classPrefix+l,i.push({className:l,content:[]})}function m(){if(i.length<2)throw"unbalanced";var l=i.shift(),c=l.className,x=l.content,C=e.join(x);o(c?e.wrap(c,C):C)}function f(l,c){if(ge(l.endRe,c)){for(;l.endsParent&&l.parent;l=l.parent);return l}if(l.endsWithParent&&l.parent)return f(l.parent,c)}function b(){if(!d.keywords){u($);return}var l=0;d.lexemesRe.lastIndex=0;for(var c=d.lexemesRe.exec($);c;){u($.substring(l,c.index));var x=y.case_insensitive?c[0].toLowerCase():c[0],C=d.keywords.hasOwnProperty(x)&&d.keywords[x];C?(_+=C[1],g(C[0],!1),u(c[0]),m()):u(c[0]),l=d.lexemesRe.lastIndex,c=d.lexemesRe.exec($)}u($.substr(l))}function E(l){var c=l.length==1&&l[0];if(c&&!ue(c)){u($);return}var x=c?be(n,e,c,$,!0,F[c]):Ke(n,e,$,l.length?d.subLanguage:void 0);d.relevance>0&&(_+=x.relevance),c&&x.top&&(F[c]=x.top),g(x.language,!0),o(x.value),m()}function p(){d.subLanguage!=null?E(d.subLanguage):b(),$=""}function v(l){l.className&&g(l.className,!1),d=Object.create(l,{parent:{value:d}})}function k(l,c){if($+=l,c==null)return p(),0;for(var x,C=0,W=d.contains;C<W.length;C++){var Z=W[C];if(ge(Z.beginRe,c)){x=Z;break}}if(x)return x.skip?$+=c:(x.excludeBegin&&($+=c),p(),!x.returnBegin&&!x.excludeBegin&&($=c)),v(x),x.returnBegin?0:c.length;var A=f(d,c);if(A){var B=d;B.skip?$+=c:(B.returnEnd||B.excludeEnd||($+=c),p(),B.excludeEnd&&($=c));do d.className&&m(),!d.skip&&!d.subLanguage&&(_+=d.relevance),d=d.parent;while(d!==A.parent);return A.starts&&v(A.starts),B.returnEnd?0:c.length}if(!s&&ge(d.illegalRe,c))throw new Error('Illegal lexeme "'+c+'" for mode "'+(d.className||"<unnamed>")+'"');return $+=c,c.length||1}var y=ue(t);if(!y)throw new Error('Unknown language: "'+t+'"');var d=r||y,F={},N;for(N=d;N&&N!==y;N=N.parent)N.className&&h(N.className);var $="",_=0;try{for(var K=void 0,H=void 0,R=0;d.terminators.lastIndex=R,K=d.terminators.exec(a),!!K;)H=k(a.substring(R,K.index),K[0]),R=K.index+H;for(k(a.substr(R)),N=d;N.parent;N=N.parent)N.className&&m();if(i.length!=1)throw"unbalanced";var X=i[0],j=X.className,M=X.content,U=e.join(M),V=j?e.wrap(j,U):U;return{language:t,relevance:_,value:V,top:d}}catch(l){if(l.message&&l.message.indexOf("Illegal")!==-1)return{language:t,relevance:0,value:e.text(a)};throw l}}function Ke(n,e,t,a){a===void 0&&(a=n.languages||ht());var s={language:"",relevance:0,value:e.text(t)};if(t!=""){for(var r=s,i=a.filter(ue),o=0,u=i;o<u.length;o++){var g=u[o],h=be(n,e,g,t,!1);h.relevance>r.relevance&&(r=h),h.relevance>s.relevance&&(r=s,s=h)}r.language&&(s.second_best=r)}return s}var yt={classPrefix:"hljs-",useBr:!1};function $t(n,e){return e===void 0&&(e={}),{render:n,options:z({},yt,e)}}function xt(n,e,t){var a=n.render,s=n.options;return typeof t=="string"?be(s,a,t,e,!1):Ke(s,a,e,t)}const wt={begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[de,pe,_e]}]},kt={className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[wt,_e,pe,de,me,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}},Et="[a-zA-Z-][a-zA-Z0-9_-]*",Nt={begin:/(?:[A-Z_.-]+|--[a-zA-Z0-9_-]+)\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[kt]},Ct={name:"css",case_insensitive:!0,illegal:/[=/|'$]/,contains:[me,{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[de,pe]},{className:"selector-tag",begin:Et,relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[me,Nt]}]};mt(Ct,ft);const Tt=$t(lt,{classPrefix:""}),{PREFIX:St,SLOT:Pt,SUFFIX:Rt,WRAPPER:Lt}=I,L="  ",_t=(n,e)=>{if(!n)return n;const t=n.replace(/\t/g,L).split(`
`),a=t.reduce((s,r)=>{if(/^\s*$/.test(r))return s;const i=r.match(/^(\s*)/),o=i&&i[0].length;return s===null||o<s?o:s},null);return t.map(s=>e+s.substr(a)).join(`
`)},ve=(n,e)=>{const t=n.innerHTML.replace(/\s+$/,"").replace(/(="")/g,"");return _t(t,e)},Kt=(n,e,t,a,s)=>{let r="";const i=D(n,e,St);O(i)&&(r+=`${ve(i,"").trim()}
`);let o="",u=null;const g=D(n,e,Lt),h=J(g);if(h){o=L;const p=h.outerHTML.match(/<([a-z]+)[^>]*>/);p&&(u=h.tagName.toLowerCase(),r+=`${p[0]}
${L}`)}r+=`<${e}`,Object.keys(t).sort((p,v)=>p>v?1:-1).forEach(p=>{const{value:v,knobType:k,attribute:y}=t[p],d=y||p;switch(k){case"boolean":r+=v?` ${d}`:"";break;case"select":r+=v!==""?` ${d}="${v}"`:"";break;default:r+=v!=null?` ${d}="${v}"`:"";break}}),r+=">";const m=D(n,e,Pt);O(m)?r+=`${ve(m,`${o}${L}`)}
${o}`:a.length&&(a.length===1&&!a[0].name?r+=a[0].content:(r+=a.reduce((p,v)=>{const{name:k,content:y}=v,d=k?`<div slot="${k}">${y}</div>`:y;return`${p}
${o}${L}${d}`},""),r+=`
${o}`)),r+=`</${e}>`,u&&(r+=`
</${u}>`);const f=D(n,e,Rt);O(f)&&(r+=`
${ve(f,"").trim()}
`);const b=s.filter(p=>p.value!==p.default);b.length&&(r+=`
<style>
${L}${e} {
`,b.forEach(p=>{p.value&&(r+=`${L}${L}${p.name}: ${p.value};
`)}),r+=`${L}}
</style>`);const{value:E}=xt(Tt,r,["xml","css"]);return w`<pre><code>${se(E)}</code></pre>`},Ae=n=>{const{knobType:e,default:t}=n;switch(e){case"boolean":return t!=="false";case"number":return Number(t);default:return ke(t)}},At=(n="")=>n.replace(" | undefined","").replace(" | null",""),Bt=(n,e="")=>{let t=n.filter(({name:a,readonly:s})=>!e.includes(a)&&!s);return t=t.map(a=>{var r;const s={...a,knobType:At((r=a.type)==null?void 0:r.text)};return typeof s.default=="string"&&(s.value=Ae(s)),s}),t},Ot=(n,e)=>Je(e,n,I.KNOB).map(t=>{const{attr:a,type:s}=t.dataset;let r=null;if(a){if(s==="select"){const i=J(t),o=i?Array.from(i.children).filter(u=>u instanceof HTMLOptionElement).map(u=>u.value):[];i instanceof HTMLSelectElement&&o.length>1&&(r={name:a,attribute:a,knobType:s,options:o})}(s==="string"||s==="boolean")&&(r={name:a,attribute:a,knobType:s})}return r}).filter(Boolean),jt=(n,e)=>n.filter(t=>{const{name:a,knobType:s}=t,r=Ae(t);return e[a]!==r||s==="boolean"&&r});/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Be=te(class extends ne{constructor(n){if(super(n),n.type!==Ee.CHILD)throw Error("templateContent can only be used in child bindings")}render(n){return this.vt===n?Ne:(this.vt=n,document.importNode(n.content,!0))}}),{HOST:It,PREFIX:zt,SLOT:Ft,SUFFIX:Ht,WRAPPER:Wt}=I,Dt=(n,e)=>{const{knobs:t}=e;Object.keys(t).forEach(a=>{const{attribute:s,value:r,custom:i}=t[a];i&&s?typeof r=="string"&&r?n.setAttribute(s,r):n.removeAttribute(s):n[a]=r})},Oe=n=>typeof n=="object"&&Promise.resolve(n)===n;async function qt(n){let e=!1;const t=n,a=t.updateComplete;Oe(a)&&(await a,e=!0);const s=t.componentOnReady?t.componentOnReady():!1;return Oe(s)&&(await s,e=!0),e||await new Promise(requestAnimationFrame),t}class Xt extends ne{constructor(e){if(super(e),e.type!==Ee.CHILD)throw new Error("renderer only supports binding to element")}render(e){return ae}update(e,[t]){var k;const a=(k=e.options)==null?void 0:k.host,{tag:s}=t,r=[],[i,o,u,g,h]=[It,zt,Ht,Ft,Wt].map(y=>D(t.id,s,y)),m=J(h),f=m?m.localName:"";let b=a.querySelector(s);if(b){const y=a.querySelector('[part="demo-output"]'),d=b.parentElement;if(d&&(d===y||d.localName===f))return Dt(b,t),Ne}const E=`</${s}>`,p=J(i);O(o)&&r.push(Be(o));let v=p?p.outerHTML:`<${s}>${E}`;if(O(g)&&(v=v.replace(E,`${g.innerHTML}${E}`)),f){const y=se(`
        <${f}>
          ${v}
        </${f}>
      `);r.push(y)}else r.push(se(v));return O(u)&&r.push(Be(u)),Promise.resolve().then(()=>{b=a.querySelector(s),b&&qt(b).then(()=>{b.dispatchEvent(new CustomEvent("rendered",{detail:{component:b},bubbles:!0,composed:!0}))})}),w`${r}`}}const Mt=te(Xt);class P extends Ce{constructor(){super(...arguments),this.copyBtnText="copy",this.cssProps=[],this.events=[],this.slots=[],this.tag="",this.props=[],this.exclude="",this.defined=!1}createRenderRoot(){return this}render(){var b,E,p;const{tag:e}=this;if(!this.defined)return w`
        <div part="warning">
          Element ${e} is not defined. Have you imported it?
        </div>
      `;const[t,a,s,r,i]=[this.cssProps,this.events,this.slots,this.customKnobs,this.propKnobs].map(v=>v.length===0),o=this.vid,u=((b=this.eventsController)==null?void 0:b.data)||[],g=((E=this.slotsController)==null?void 0:E.data)||[],h=((p=this.stylesController)==null?void 0:p.data)||[],m=s||ie(o,e,I.SLOT),f=i&&r;return w`
      <div part="demo-output" @rendered=${this.onRendered}>
        ${Mt({id:o,tag:e,knobs:this.knobs})}
      </div>
      <api-viewer-tabs part="demo-tabs">
        <api-viewer-tab slot="tab" part="tab">Source</api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <button @click=${this._onCopyClick} part="button">
            ${this.copyBtnText}
          </button>
          <div part="demo-snippet">
            ${Kt(o,e,this.knobs,g,h)}
          </div>
        </api-viewer-panel>
        <api-viewer-tab slot="tab" part="tab" ?hidden=${f&&m}>
          Knobs
        </api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <div part="knobs">
            <section
              ?hidden=${f}
              part="knobs-column"
              @change=${this._onPropChanged}
            >
              ${Y(this.propKnobs,"Properties","prop",Pe)}
              ${Y(this.customKnobs,"Attributes","attr",Pe)}
            </section>
            <section
              ?hidden=${m}
              part="knobs-column"
              @change=${this._onSlotChanged}
            >
              ${Y(g,"Slots","slot",nt)}
            </section>
          </div>
        </api-viewer-panel>
        <api-viewer-tab slot="tab" part="tab" ?hidden=${t}>
          Styles
        </api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <div part="knobs" ?hidden=${t}>
            <section part="knobs-column" @change=${this._onCssChanged}>
              ${Y(h,"Custom CSS Properties","css-prop",tt)}
            </section>
          </div>
        </api-viewer-panel>
        <api-viewer-tab id="events" slot="tab" part="tab" ?hidden=${a}>
          Events
        </api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <div part="event-log" ?hidden=${a}>
            <button
              @click=${this._onLogClear}
              ?hidden=${!u.length}
              part="button"
            >
              Clear
            </button>
            ${Ye(u.length?ot(u):w`
                    <p part="event-record">
                      Interact with component to see the event log.
                    </p>
                  `)}
          </div>
        </api-viewer-panel>
      </api-viewer-tabs>
    `}willUpdate(e){if(e.has("tag")){const{tag:t}=this;this.defined=!!customElements.get(t),this.defined||customElements.whenDefined(t).then(()=>{this.tag===t&&(this.defined=!0)}),this.knobs={},this.propKnobs=Bt(this.props,this.exclude),this.customKnobs=Ot(this.tag,this.vid)}}updated(e){if(e.has("tag")&&e.get("tag")){const t=this.renderRoot.querySelector("api-viewer-tabs");t&&t.selectFirst()}}_onLogClear(){var t;(t=this.eventsController)==null||t.clear();const e=this.querySelector("#events");e&&e.focus()}_onCopyClick(){const e=this.renderRoot.querySelector('[part="demo-snippet"] code');if(e){const t=document.createRange();t.selectNodeContents(e);const a=window.getSelection();a.removeAllRanges(),a.addRange(t);try{document.execCommand("copy"),this.copyBtnText="done"}catch(s){console.error(s),this.copyBtnText="error"}setTimeout(()=>{this.copyBtnText="copy"},1e3),a.removeAllRanges()}}onRendered(e){const{component:t}=e.detail;this.initKnobs(t),this.initEvents(t),this.initSlots(t),this.initStyles(t)}initEvents(e){const t=this.eventsController;t&&t.destroy(),this.eventsController=new Qe(this,e,this.events)}initKnobs(e){ie(this.vid,this.tag,I.HOST)&&jt(this.propKnobs,e).forEach(t=>{this.syncKnob(e,t)})}initSlots(e){const t=this.slotsController;t&&t.destroy(),this.slotsController=new at(this,e,this.vid,this.slots)}initStyles(e){const t=this.stylesController;t&&t.destroy(),this.stylesController=new st(this,e,this.cssProps)}getKnob(e){const t=r=>r.name===e||r.attribute===e;let a=this.propKnobs.find(t),s=!1;return a||(a=this.customKnobs.find(t),s=!0),{knob:a,custom:s}}setKnobs(e,t,a,s,r=!1){this.knobs={...this.knobs,[e]:{knobType:t,value:a,attribute:s,custom:r}}}syncKnob(e,t){const{name:a,knobType:s,attribute:r}=t,i=e[a];this.setKnobs(a,s,i,r),this.propKnobs=this.propKnobs.map(o=>o.name===a?{...o,value:i}:o)}_onCssChanged(e){var a;const t=e.composedPath()[0];(a=this.stylesController)==null||a.setValue(t.dataset.name,t.value)}_onPropChanged(e){const t=e.composedPath()[0],{name:a,type:s}=t.dataset;let r;switch(s){case"boolean":r=t.checked;break;case"number":r=t.value===""?null:Number(t.value);break;default:r=t.value}const{knob:i,custom:o}=this.getKnob(a);this.setKnobs(a,s,r,i.attribute,o)}_onSlotChanged(e){var a;const t=e.composedPath()[0];(a=this.slotsController)==null||a.setValue(t.dataset.slot,t.value)}}S([T()],P.prototype,"copyBtnText",void 0),S([T({attribute:!1})],P.prototype,"cssProps",void 0),S([T({attribute:!1})],P.prototype,"events",void 0),S([T({attribute:!1})],P.prototype,"slots",void 0),S([T()],P.prototype,"tag",void 0),S([T({attribute:!1})],P.prototype,"props",void 0),S([T()],P.prototype,"exclude",void 0),S([T({type:Number})],P.prototype,"vid",void 0),S([T({attribute:!1})],P.prototype,"customKnobs",void 0),S([T({attribute:!1})],P.prototype,"knobs",void 0),S([T({attribute:!1})],P.prototype,"propKnobs",void 0),S([T({type:Boolean})],P.prototype,"defined",void 0),customElements.define("api-demo-layout",P);async function Ut(n,e,t,a,s,r=""){const i=await n;if(!qe(i))return Xe;const o=Me(i,t),u=Ue(i,o,a),g=Ve(u.members);return w`
    <header part="header">
      <div part="header-title">&lt;${u.name}&gt;</div>
      <nav>
        <label part="select-label">
          <select
            @change=${e}
            .value=${a||""}
            ?hidden=${o.length===1}
            part="select"
          >
            ${o.map(h=>w`<option value=${h.name}>${h.name}</option>`)}
          </select>
        </label>
      </nav>
    </header>
    <api-demo-layout
      .tag=${u.name}
      .props=${g}
      .events=${u.events??[]}
      .slots=${u.slots??[]}
      .cssProps=${u.cssProperties??[]}
      .exclude=${r}
      .vid=${s}
      part="demo-container"
    ></api-demo-layout>
  `}let Vt=0;class je extends We(Ce){constructor(){super(),this._id=Vt++}render(){return w`
      ${De(Ut(this.jsonFetched,this._onSelect,this.only,this.selected,this._id,this.excludeKnobs))}
    `}_onSelect(e){this.selected=e.target.value}}S([T({type:String,attribute:"exclude-knobs"})],je.prototype,"excludeKnobs",void 0);const Zt=re`
  pre {
    margin: 0;
    color: black;
    background: none;
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
    text-align: left;
    white-space: pre-wrap;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    text-shadow: none;
  }

  code {
    font-family: inherit;
  }

  .comment {
    color: slategray;
  }

  .attr,
  .selector-tag {
    color: #690;
  }

  .css {
    color: #333;
  }

  .built_in {
    color: #dd4a68;
  }

  .meta {
    color: #e90;
    font-weight: bold;
  }

  .string {
    color: #07a;
  }

  .tag {
    color: #999;
  }

  .attribute,
  .name,
  .number {
    color: #905;
  }
`,Gt=re`
  [part='button'] {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    text-transform: uppercase;
    border: none;
    border-radius: 0.25em;
    cursor: pointer;
    background: var(--ave-button-background, rgba(0, 0, 0, 0.3));
    color: var(--ave-button-color, #fff);
  }

  [part='button']:focus,
  [part='button']:hover {
    background: var(--ave-button-active-background, rgba(0, 0, 0, 0.6));
  }

  api-demo-layout {
    display: block;
  }

  [part='demo-tabs'],
  [part='demo-output'] {
    border-top: solid 1px var(--ave-border-color);
  }

  [part='demo-tabs'] [part='tab-panel'] {
    box-sizing: border-box;
    position: relative;
    background: #fafafa;
  }

  [part='demo-output'] {
    padding: 1.5rem;
    text-align: initial;
    transform: translateZ(0);
    overflow: hidden;
  }

  [part='demo-snippet'] {
    padding: 0.75rem 1rem;
  }

  .source {
    position: relative;
  }

  [part='knobs'] {
    display: flex;
    padding: 0 1rem 1rem;
  }

  [part='knobs-column'] {
    flex-shrink: 1;
  }

  [part='knobs-column']:not(:only-child) {
    flex-basis: 50%;
  }

  [part='knobs-header'] {
    font-size: 1rem;
    font-weight: bold;
    margin: 1rem 0 0.25rem;
  }

  td {
    padding: 0.25rem 0.25rem 0.25rem 0;
    font-size: 0.9375rem;
    white-space: nowrap;
  }

  [part='event-log'] {
    padding: 0 1rem;
    min-height: 50px;
    max-height: 200px;
    overflow: auto;
  }

  [part='event-record'] {
    margin: 0 0 0.25rem;
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
  }

  [part='event-record']:first-of-type {
    margin-top: 1rem;
  }

  [part='event-record']:last-of-type {
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    [part='knobs'] {
      flex-direction: column;
    }

    [part='knobs-column']:not(:last-child) {
      margin-bottom: 1rem;
    }

    [part='input'] {
      max-width: 8rem;
    }
  }
`,Jt=re`
  ${Gt}
  ${Zt}
`;class Ie extends je{static get styles(){return[Ze,Jt]}firstUpdated(){this.setTemplates()}setTemplates(e){Ge(this._id,e||Array.from(this.querySelectorAll("template")))}}customElements.define("api-demo",Ie);export{Ie as ApiDemo};
