import{U as za,S as xt,H as On,g as D,m as Ea,n as Da,o as Oa,p as Ta,q as Tn,r as $a,t as Ba,v as Fa,w as Ma,h as G,i as Pt,j as Va,x as j,E as $n,y as It,u as Ct,l as Bn,T as St,z as Pa,A as ja,C as Ha}from"./notes-client.B2dIe2T5.js";import{_ as B}from"./tslib.es6.kHcLnhpD.js";import{a as La,w as Fn,t as Wa,P as Mn,p as Ra,b as Na,S as Ua,c as qa,s as Ga,E as Ja,d as Ka,e as Ya,u as At,v as jt,_ as p,x as ut,y as ht,z as zt,A as nt,B as gt,C as Vn,H as Ht,L as Pn,D as jn,F as Hn,G as Ln,I as Wn,J as Rn,K as Lt,M as Qa,N as Xa,O as Za,Q as ot,R as ti,T as ei,m as X,n as Wt,f as ni,U as oi,V as ri,W as ai,i as ii,k as Nn,X as si,h as li,j as ci,o as _i,q as di,Y as ui,r as hi,l as gi}from"./prosemirror-flat-list-styles.BLiWIvu3.js";import{S as Un}from"./signal-watcher.IcN2PUh8.js";import{g as bi}from"./isIterateeCall.DmV5WHBc.js";import{n as qn,s as Gn,a as f,c as Et,t as Rt}from"./property.D-izuzPU.js";import{e as pi}from"./provide.wfZiu9lg.js";import{n as fi}from"./context.BRM9QJvW.js";import"./range.DepzZoUv.js";import"./toFinite.CaWsV0a4.js";import"./isSymbol.DYPLY1nq.js";let J,mi=(async()=>{function Jn(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function Kn(e,t="primary",n=La,o=3e3){const r=Object.assign(document.createElement("sl-alert"),{variant:t,closable:!0,duration:o,innerHTML:`
        <sl-icon src="${Fn(n)}" slot="icon"></sl-icon>
        ${Jn(e)}
      `});return document.body.append(r),r.toast()}function Dt(e){return Kn(e,"danger",Wa)}const Yn="/notes-zome/assets/automerge_wasm_bg.B_JtgnFP.wasm",Qn=async(e={},t)=>{let n;if(t.startsWith("data:")){const o=t.replace(/^data:.*?base64,/,"");let r;if(typeof Buffer=="function"&&typeof Buffer.from=="function")r=Buffer.from(o,"base64");else if(typeof atob=="function"){const i=atob(o);r=new Uint8Array(i.length);for(let l=0;l<i.length;l++)r[l]=i.charCodeAt(l)}else throw new Error("Cannot decode base64-encoded data URL");n=await WebAssembly.instantiate(r,e)}else{const o=await fetch(t),r=o.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&r.startsWith("application/wasm"))n=await WebAssembly.instantiateStreaming(o,e);else{const i=await o.arrayBuffer();n=await WebAssembly.instantiate(i,e)}}return n.instance.exports};let a;function Nt(e){a=e}const R=new Array(128).fill(void 0);R.push(void 0,null,!0,!1);function b(e){return R[e]}let F=0,bt=null;function rt(){return(bt===null||bt.byteLength===0)&&(bt=new Uint8Array(a.memory.buffer)),bt}const Xn=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder;let pt=new Xn("utf-8");const Zn=typeof pt.encodeInto=="function"?function(e,t){return pt.encodeInto(e,t)}:function(e,t){const n=pt.encode(e);return t.set(n),{read:e.length,written:n.length}};function H(e,t,n){if(n===void 0){const d=pt.encode(e),h=t(d.length,1)>>>0;return rt().subarray(h,h+d.length).set(d),F=d.length,h}let o=e.length,r=t(o,1)>>>0;const i=rt();let l=0;for(;l<o;l++){const d=e.charCodeAt(l);if(d>127)break;i[r+l]=d}if(l!==o){l!==0&&(e=e.slice(l)),r=n(r,o,o=l+e.length*3,1)>>>0;const d=rt().subarray(r+l,r+o),h=Zn(e,d);l+=h.written,r=n(r,o,l,1)>>>0}return F=l,r}let tt=null;function s(){return(tt===null||tt.buffer.detached===!0||tt.buffer.detached===void 0&&tt.buffer!==a.memory.buffer)&&(tt=new DataView(a.memory.buffer)),tt}let at=R.length;function c(e){at===R.length&&R.push(R.length+1);const t=at;return at=R[t],R[t]=e,t}function N(e,t){try{return e.apply(this,t)}catch(n){a.__wbindgen_exn_store(c(n))}}const to=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let Ut=new to("utf-8",{ignoreBOM:!0,fatal:!0});Ut.decode();function M(e,t){return e=e>>>0,Ut.decode(rt().subarray(e,e+t))}function eo(e,t){return e=e>>>0,rt().subarray(e/1,e/1+t)}function no(e){e<132||(R[e]=at,at=e)}function _(e){const t=b(e);return no(e),t}function Ot(e){const t=typeof e;if(t=="number"||t=="boolean"||e==null)return`${e}`;if(t=="string")return`"${e}"`;if(t=="symbol"){const r=e.description;return r==null?"Symbol":`Symbol(${r})`}if(t=="function"){const r=e.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(e)){const r=e.length;let i="[";r>0&&(i+=Ot(e[0]));for(let l=1;l<r;l++)i+=", "+Ot(e[l]);return i+="]",i}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let o;if(n&&n.length>1)o=n[1];else return toString.call(e);if(o=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:o}function x(e){return e==null}function K(e,t){if(!(e instanceof t))throw new Error(`expected instance of ${t.name}`)}function oo(e){try{const r=a.__wbindgen_add_to_stack_pointer(-16);a.create(r,c(e));var t=s().getInt32(r+4*0,!0),n=s().getInt32(r+4*1,!0),o=s().getInt32(r+4*2,!0);if(o)throw _(n);return L.__wrap(t)}finally{a.__wbindgen_add_to_stack_pointer(16)}}function ro(e,t){try{const i=a.__wbindgen_add_to_stack_pointer(-16);a.load(i,c(e),c(t));var n=s().getInt32(i+4*0,!0),o=s().getInt32(i+4*1,!0),r=s().getInt32(i+4*2,!0);if(r)throw _(o);return L.__wrap(n)}finally{a.__wbindgen_add_to_stack_pointer(16)}}function ao(e){try{const r=a.__wbindgen_add_to_stack_pointer(-16);a.encodeChange(r,c(e));var t=s().getInt32(r+4*0,!0),n=s().getInt32(r+4*1,!0),o=s().getInt32(r+4*2,!0);if(o)throw _(n);return _(t)}finally{a.__wbindgen_add_to_stack_pointer(16)}}function io(e){try{const r=a.__wbindgen_add_to_stack_pointer(-16);a.decodeChange(r,c(e));var t=s().getInt32(r+4*0,!0),n=s().getInt32(r+4*1,!0),o=s().getInt32(r+4*2,!0);if(o)throw _(n);return _(t)}finally{a.__wbindgen_add_to_stack_pointer(16)}}function so(){const e=a.initSyncState();return V.__wrap(e)}function lo(e){try{const r=a.__wbindgen_add_to_stack_pointer(-16);a.importSyncState(r,c(e));var t=s().getInt32(r+4*0,!0),n=s().getInt32(r+4*1,!0),o=s().getInt32(r+4*2,!0);if(o)throw _(n);return V.__wrap(t)}finally{a.__wbindgen_add_to_stack_pointer(16)}}function co(e){K(e,V);const t=a.exportSyncState(e.__wbg_ptr);return _(t)}function _o(e){try{const r=a.__wbindgen_add_to_stack_pointer(-16);a.encodeSyncMessage(r,c(e));var t=s().getInt32(r+4*0,!0),n=s().getInt32(r+4*1,!0),o=s().getInt32(r+4*2,!0);if(o)throw _(n);return _(t)}finally{a.__wbindgen_add_to_stack_pointer(16)}}function uo(e){try{const r=a.__wbindgen_add_to_stack_pointer(-16);a.decodeSyncMessage(r,c(e));var t=s().getInt32(r+4*0,!0),n=s().getInt32(r+4*1,!0),o=s().getInt32(r+4*2,!0);if(o)throw _(n);return _(t)}finally{a.__wbindgen_add_to_stack_pointer(16)}}function ho(e){K(e,V);const t=a.encodeSyncState(e.__wbg_ptr);return _(t)}function go(e){try{const r=a.__wbindgen_add_to_stack_pointer(-16);a.decodeSyncState(r,c(e));var t=s().getInt32(r+4*0,!0),n=s().getInt32(r+4*1,!0),o=s().getInt32(r+4*2,!0);if(o)throw _(n);return V.__wrap(t)}finally{a.__wbindgen_add_to_stack_pointer(16)}}const bo=Object.freeze({Array:0,0:"Array",String:1,1:"String"}),qt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>a.__wbg_automerge_free(e>>>0,1));class L{static __wrap(t){t=t>>>0;const n=Object.create(L.prototype);return n.__wbg_ptr=t,qt.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,qt.unregister(this),t}free(){const t=this.__destroy_into_raw();a.__wbg_automerge_free(t,0)}static new(t,n){try{const h=a.__wbindgen_add_to_stack_pointer(-16);var o=x(t)?0:H(t,a.__wbindgen_malloc,a.__wbindgen_realloc),r=F;a.automerge_new(h,o,r,n);var i=s().getInt32(h+4*0,!0),l=s().getInt32(h+4*1,!0),d=s().getInt32(h+4*2,!0);if(d)throw _(l);return L.__wrap(i)}finally{a.__wbindgen_add_to_stack_pointer(16)}}clone(t){try{const d=a.__wbindgen_add_to_stack_pointer(-16);var n=x(t)?0:H(t,a.__wbindgen_malloc,a.__wbindgen_realloc),o=F;a.automerge_clone(d,this.__wbg_ptr,n,o);var r=s().getInt32(d+4*0,!0),i=s().getInt32(d+4*1,!0),l=s().getInt32(d+4*2,!0);if(l)throw _(i);return L.__wrap(r)}finally{a.__wbindgen_add_to_stack_pointer(16)}}fork(t,n){try{const h=a.__wbindgen_add_to_stack_pointer(-16);var o=x(t)?0:H(t,a.__wbindgen_malloc,a.__wbindgen_realloc),r=F;a.automerge_fork(h,this.__wbg_ptr,o,r,c(n));var i=s().getInt32(h+4*0,!0),l=s().getInt32(h+4*1,!0),d=s().getInt32(h+4*2,!0);if(d)throw _(l);return L.__wrap(i)}finally{a.__wbindgen_add_to_stack_pointer(16)}}pendingOps(){const t=a.automerge_pendingOps(this.__wbg_ptr);return _(t)}commit(t,n){var o=x(t)?0:H(t,a.__wbindgen_malloc,a.__wbindgen_realloc),r=F;const i=a.automerge_commit(this.__wbg_ptr,o,r,!x(n),x(n)?0:n);return _(i)}merge(t){try{const i=a.__wbindgen_add_to_stack_pointer(-16);K(t,L),a.automerge_merge(i,this.__wbg_ptr,t.__wbg_ptr);var n=s().getInt32(i+4*0,!0),o=s().getInt32(i+4*1,!0),r=s().getInt32(i+4*2,!0);if(r)throw _(o);return _(n)}finally{a.__wbindgen_add_to_stack_pointer(16)}}rollback(){return a.automerge_rollback(this.__wbg_ptr)}keys(t,n){try{const l=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_keys(l,this.__wbg_ptr,c(t),x(n)?0:c(n));var o=s().getInt32(l+4*0,!0),r=s().getInt32(l+4*1,!0),i=s().getInt32(l+4*2,!0);if(i)throw _(r);return _(o)}finally{a.__wbindgen_add_to_stack_pointer(16)}}text(t,n){let o,r;try{const v=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_text(v,this.__wbg_ptr,c(t),x(n)?0:c(n));var i=s().getInt32(v+4*0,!0),l=s().getInt32(v+4*1,!0),d=s().getInt32(v+4*2,!0),h=s().getInt32(v+4*3,!0),m=i,w=l;if(h)throw m=0,w=0,_(d);return o=m,r=w,M(m,w)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(o,r,1)}}spans(t,n){try{const l=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_spans(l,this.__wbg_ptr,c(t),x(n)?0:c(n));var o=s().getInt32(l+4*0,!0),r=s().getInt32(l+4*1,!0),i=s().getInt32(l+4*2,!0);if(i)throw _(r);return _(o)}finally{a.__wbindgen_add_to_stack_pointer(16)}}splice(t,n,o,r){try{const d=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_splice(d,this.__wbg_ptr,c(t),n,o,c(r));var i=s().getInt32(d+4*0,!0),l=s().getInt32(d+4*1,!0);if(l)throw _(i)}finally{a.__wbindgen_add_to_stack_pointer(16)}}updateText(t,n){try{const i=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_updateText(i,this.__wbg_ptr,c(t),c(n));var o=s().getInt32(i+4*0,!0),r=s().getInt32(i+4*1,!0);if(r)throw _(o)}finally{a.__wbindgen_add_to_stack_pointer(16)}}updateSpans(t,n){try{const i=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_updateSpans(i,this.__wbg_ptr,c(t),c(n));var o=s().getInt32(i+4*0,!0),r=s().getInt32(i+4*1,!0);if(r)throw _(o)}finally{a.__wbindgen_add_to_stack_pointer(16)}}push(t,n,o){try{const l=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_push(l,this.__wbg_ptr,c(t),c(n),c(o));var r=s().getInt32(l+4*0,!0),i=s().getInt32(l+4*1,!0);if(i)throw _(r)}finally{a.__wbindgen_add_to_stack_pointer(16)}}pushObject(t,n){try{const d=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_pushObject(d,this.__wbg_ptr,c(t),c(n));var o=s().getInt32(d+4*0,!0),r=s().getInt32(d+4*1,!0),i=s().getInt32(d+4*2,!0),l=s().getInt32(d+4*3,!0);if(l)throw _(i);let h;return o!==0&&(h=M(o,r).slice(),a.__wbindgen_free(o,r*1,1)),h}finally{a.__wbindgen_add_to_stack_pointer(16)}}insert(t,n,o,r){try{const d=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_insert(d,this.__wbg_ptr,c(t),n,c(o),c(r));var i=s().getInt32(d+4*0,!0),l=s().getInt32(d+4*1,!0);if(l)throw _(i)}finally{a.__wbindgen_add_to_stack_pointer(16)}}splitBlock(t,n,o){try{const l=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_splitBlock(l,this.__wbg_ptr,c(t),n,c(o));var r=s().getInt32(l+4*0,!0),i=s().getInt32(l+4*1,!0);if(i)throw _(r)}finally{a.__wbindgen_add_to_stack_pointer(16)}}joinBlock(t,n){try{const i=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_joinBlock(i,this.__wbg_ptr,c(t),n);var o=s().getInt32(i+4*0,!0),r=s().getInt32(i+4*1,!0);if(r)throw _(o)}finally{a.__wbindgen_add_to_stack_pointer(16)}}updateBlock(t,n,o){try{const l=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_updateBlock(l,this.__wbg_ptr,c(t),n,c(o));var r=s().getInt32(l+4*0,!0),i=s().getInt32(l+4*1,!0);if(i)throw _(r)}finally{a.__wbindgen_add_to_stack_pointer(16)}}getBlock(t,n,o){try{const d=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_getBlock(d,this.__wbg_ptr,c(t),n,x(o)?0:c(o));var r=s().getInt32(d+4*0,!0),i=s().getInt32(d+4*1,!0),l=s().getInt32(d+4*2,!0);if(l)throw _(i);return _(r)}finally{a.__wbindgen_add_to_stack_pointer(16)}}insertObject(t,n,o){try{const h=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_insertObject(h,this.__wbg_ptr,c(t),n,c(o));var r=s().getInt32(h+4*0,!0),i=s().getInt32(h+4*1,!0),l=s().getInt32(h+4*2,!0),d=s().getInt32(h+4*3,!0);if(d)throw _(l);let m;return r!==0&&(m=M(r,i).slice(),a.__wbindgen_free(r,i*1,1)),m}finally{a.__wbindgen_add_to_stack_pointer(16)}}put(t,n,o,r){try{const d=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_put(d,this.__wbg_ptr,c(t),c(n),c(o),c(r));var i=s().getInt32(d+4*0,!0),l=s().getInt32(d+4*1,!0);if(l)throw _(i)}finally{a.__wbindgen_add_to_stack_pointer(16)}}putObject(t,n,o){try{const d=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_putObject(d,this.__wbg_ptr,c(t),c(n),c(o));var r=s().getInt32(d+4*0,!0),i=s().getInt32(d+4*1,!0),l=s().getInt32(d+4*2,!0);if(l)throw _(i);return _(r)}finally{a.__wbindgen_add_to_stack_pointer(16)}}increment(t,n,o){try{const l=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_increment(l,this.__wbg_ptr,c(t),c(n),c(o));var r=s().getInt32(l+4*0,!0),i=s().getInt32(l+4*1,!0);if(i)throw _(r)}finally{a.__wbindgen_add_to_stack_pointer(16)}}get(t,n,o){try{const d=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_get(d,this.__wbg_ptr,c(t),c(n),x(o)?0:c(o));var r=s().getInt32(d+4*0,!0),i=s().getInt32(d+4*1,!0),l=s().getInt32(d+4*2,!0);if(l)throw _(i);return _(r)}finally{a.__wbindgen_add_to_stack_pointer(16)}}getWithType(t,n,o){try{const d=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_getWithType(d,this.__wbg_ptr,c(t),c(n),x(o)?0:c(o));var r=s().getInt32(d+4*0,!0),i=s().getInt32(d+4*1,!0),l=s().getInt32(d+4*2,!0);if(l)throw _(i);return _(r)}finally{a.__wbindgen_add_to_stack_pointer(16)}}objInfo(t,n){try{const l=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_objInfo(l,this.__wbg_ptr,c(t),x(n)?0:c(n));var o=s().getInt32(l+4*0,!0),r=s().getInt32(l+4*1,!0),i=s().getInt32(l+4*2,!0);if(i)throw _(r);return _(o)}finally{a.__wbindgen_add_to_stack_pointer(16)}}getAll(t,n,o){try{const d=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_getAll(d,this.__wbg_ptr,c(t),c(n),x(o)?0:c(o));var r=s().getInt32(d+4*0,!0),i=s().getInt32(d+4*1,!0),l=s().getInt32(d+4*2,!0);if(l)throw _(i);return _(r)}finally{a.__wbindgen_add_to_stack_pointer(16)}}enableFreeze(t){try{const i=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_enableFreeze(i,this.__wbg_ptr,c(t));var n=s().getInt32(i+4*0,!0),o=s().getInt32(i+4*1,!0),r=s().getInt32(i+4*2,!0);if(r)throw _(o);return _(n)}finally{a.__wbindgen_add_to_stack_pointer(16)}}registerDatatype(t,n,o){try{const l=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_registerDatatype(l,this.__wbg_ptr,c(t),c(n),c(o));var r=s().getInt32(l+4*0,!0),i=s().getInt32(l+4*1,!0);if(i)throw _(r)}finally{a.__wbindgen_add_to_stack_pointer(16)}}applyPatches(t,n){try{const l=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_applyPatches(l,this.__wbg_ptr,c(t),c(n));var o=s().getInt32(l+4*0,!0),r=s().getInt32(l+4*1,!0),i=s().getInt32(l+4*2,!0);if(i)throw _(r);return _(o)}finally{a.__wbindgen_add_to_stack_pointer(16)}}applyAndReturnPatches(t,n){try{const l=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_applyAndReturnPatches(l,this.__wbg_ptr,c(t),c(n));var o=s().getInt32(l+4*0,!0),r=s().getInt32(l+4*1,!0),i=s().getInt32(l+4*2,!0);if(i)throw _(r);return _(o)}finally{a.__wbindgen_add_to_stack_pointer(16)}}diffIncremental(){try{const r=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_diffIncremental(r,this.__wbg_ptr);var t=s().getInt32(r+4*0,!0),n=s().getInt32(r+4*1,!0),o=s().getInt32(r+4*2,!0);if(o)throw _(n);return _(t)}finally{a.__wbindgen_add_to_stack_pointer(16)}}updateDiffCursor(){a.automerge_updateDiffCursor(this.__wbg_ptr)}resetDiffCursor(){a.automerge_resetDiffCursor(this.__wbg_ptr)}diff(t,n){try{const l=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_diff(l,this.__wbg_ptr,c(t),c(n));var o=s().getInt32(l+4*0,!0),r=s().getInt32(l+4*1,!0),i=s().getInt32(l+4*2,!0);if(i)throw _(r);return _(o)}finally{a.__wbindgen_add_to_stack_pointer(16)}}isolate(t){try{const r=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_isolate(r,this.__wbg_ptr,c(t));var n=s().getInt32(r+4*0,!0),o=s().getInt32(r+4*1,!0);if(o)throw _(n)}finally{a.__wbindgen_add_to_stack_pointer(16)}}integrate(){a.automerge_integrate(this.__wbg_ptr)}length(t,n){try{const l=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_length(l,this.__wbg_ptr,c(t),x(n)?0:c(n));var o=s().getFloat64(l+8*0,!0),r=s().getInt32(l+4*2,!0),i=s().getInt32(l+4*3,!0);if(i)throw _(r);return o}finally{a.__wbindgen_add_to_stack_pointer(16)}}delete(t,n){try{const i=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_delete(i,this.__wbg_ptr,c(t),c(n));var o=s().getInt32(i+4*0,!0),r=s().getInt32(i+4*1,!0);if(r)throw _(o)}finally{a.__wbindgen_add_to_stack_pointer(16)}}save(){const t=a.automerge_save(this.__wbg_ptr);return _(t)}saveIncremental(){const t=a.automerge_saveIncremental(this.__wbg_ptr);return _(t)}saveSince(t){try{const i=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_saveSince(i,this.__wbg_ptr,c(t));var n=s().getInt32(i+4*0,!0),o=s().getInt32(i+4*1,!0),r=s().getInt32(i+4*2,!0);if(r)throw _(o);return _(n)}finally{a.__wbindgen_add_to_stack_pointer(16)}}saveNoCompress(){const t=a.automerge_saveNoCompress(this.__wbg_ptr);return _(t)}saveAndVerify(){try{const r=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_saveAndVerify(r,this.__wbg_ptr);var t=s().getInt32(r+4*0,!0),n=s().getInt32(r+4*1,!0),o=s().getInt32(r+4*2,!0);if(o)throw _(n);return _(t)}finally{a.__wbindgen_add_to_stack_pointer(16)}}loadIncremental(t){try{const i=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_loadIncremental(i,this.__wbg_ptr,c(t));var n=s().getFloat64(i+8*0,!0),o=s().getInt32(i+4*2,!0),r=s().getInt32(i+4*3,!0);if(r)throw _(o);return n}finally{a.__wbindgen_add_to_stack_pointer(16)}}applyChanges(t){try{const r=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_applyChanges(r,this.__wbg_ptr,c(t));var n=s().getInt32(r+4*0,!0),o=s().getInt32(r+4*1,!0);if(o)throw _(n)}finally{a.__wbindgen_add_to_stack_pointer(16)}}getChanges(t){try{const i=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_getChanges(i,this.__wbg_ptr,c(t));var n=s().getInt32(i+4*0,!0),o=s().getInt32(i+4*1,!0),r=s().getInt32(i+4*2,!0);if(r)throw _(o);return _(n)}finally{a.__wbindgen_add_to_stack_pointer(16)}}getChangeByHash(t){try{const i=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_getChangeByHash(i,this.__wbg_ptr,c(t));var n=s().getInt32(i+4*0,!0),o=s().getInt32(i+4*1,!0),r=s().getInt32(i+4*2,!0);if(r)throw _(o);return _(n)}finally{a.__wbindgen_add_to_stack_pointer(16)}}getDecodedChangeByHash(t){try{const i=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_getDecodedChangeByHash(i,this.__wbg_ptr,c(t));var n=s().getInt32(i+4*0,!0),o=s().getInt32(i+4*1,!0),r=s().getInt32(i+4*2,!0);if(r)throw _(o);return _(n)}finally{a.__wbindgen_add_to_stack_pointer(16)}}getChangesAdded(t){K(t,L);const n=a.automerge_getChangesAdded(this.__wbg_ptr,t.__wbg_ptr);return _(n)}getHeads(){const t=a.automerge_getHeads(this.__wbg_ptr);return _(t)}getActorId(){let t,n;try{const i=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_getActorId(i,this.__wbg_ptr);var o=s().getInt32(i+4*0,!0),r=s().getInt32(i+4*1,!0);return t=o,n=r,M(o,r)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(t,n,1)}}getLastLocalChange(){const t=a.automerge_getLastLocalChange(this.__wbg_ptr);return _(t)}dump(){a.automerge_dump(this.__wbg_ptr)}getMissingDeps(t){try{const i=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_getMissingDeps(i,this.__wbg_ptr,x(t)?0:c(t));var n=s().getInt32(i+4*0,!0),o=s().getInt32(i+4*1,!0),r=s().getInt32(i+4*2,!0);if(r)throw _(o);return _(n)}finally{a.__wbindgen_add_to_stack_pointer(16)}}receiveSyncMessage(t,n){try{const i=a.__wbindgen_add_to_stack_pointer(-16);K(t,V),a.automerge_receiveSyncMessage(i,this.__wbg_ptr,t.__wbg_ptr,c(n));var o=s().getInt32(i+4*0,!0),r=s().getInt32(i+4*1,!0);if(r)throw _(o)}finally{a.__wbindgen_add_to_stack_pointer(16)}}generateSyncMessage(t){K(t,V);const n=a.automerge_generateSyncMessage(this.__wbg_ptr,t.__wbg_ptr);return _(n)}toJS(t){try{const i=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_toJS(i,this.__wbg_ptr,c(t));var n=s().getInt32(i+4*0,!0),o=s().getInt32(i+4*1,!0),r=s().getInt32(i+4*2,!0);if(r)throw _(o);return _(n)}finally{a.__wbindgen_add_to_stack_pointer(16)}}materialize(t,n,o){try{const d=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_materialize(d,this.__wbg_ptr,c(t),x(n)?0:c(n),c(o));var r=s().getInt32(d+4*0,!0),i=s().getInt32(d+4*1,!0),l=s().getInt32(d+4*2,!0);if(l)throw _(i);return _(r)}finally{a.__wbindgen_add_to_stack_pointer(16)}}getCursor(t,n,o,r){let i,l;try{const I=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_getCursor(I,this.__wbg_ptr,c(t),c(n),x(o)?0:c(o),c(r));var d=s().getInt32(I+4*0,!0),h=s().getInt32(I+4*1,!0),m=s().getInt32(I+4*2,!0),w=s().getInt32(I+4*3,!0),v=d,C=h;if(w)throw v=0,C=0,_(m);return i=v,l=C,M(v,C)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(i,l,1)}}getCursorPosition(t,n,o){try{const d=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_getCursorPosition(d,this.__wbg_ptr,c(t),c(n),x(o)?0:c(o));var r=s().getFloat64(d+8*0,!0),i=s().getInt32(d+4*2,!0),l=s().getInt32(d+4*3,!0);if(l)throw _(i);return r}finally{a.__wbindgen_add_to_stack_pointer(16)}}emptyChange(t,n){var o=x(t)?0:H(t,a.__wbindgen_malloc,a.__wbindgen_realloc),r=F;const i=a.automerge_emptyChange(this.__wbg_ptr,o,r,!x(n),x(n)?0:n);return _(i)}mark(t,n,o,r,i){try{const h=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_mark(h,this.__wbg_ptr,c(t),c(n),c(o),c(r),c(i));var l=s().getInt32(h+4*0,!0),d=s().getInt32(h+4*1,!0);if(d)throw _(l)}finally{a.__wbindgen_add_to_stack_pointer(16)}}unmark(t,n,o){try{const l=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_unmark(l,this.__wbg_ptr,c(t),c(n),c(o));var r=s().getInt32(l+4*0,!0),i=s().getInt32(l+4*1,!0);if(i)throw _(r)}finally{a.__wbindgen_add_to_stack_pointer(16)}}marks(t,n){try{const l=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_marks(l,this.__wbg_ptr,c(t),x(n)?0:c(n));var o=s().getInt32(l+4*0,!0),r=s().getInt32(l+4*1,!0),i=s().getInt32(l+4*2,!0);if(i)throw _(r);return _(o)}finally{a.__wbindgen_add_to_stack_pointer(16)}}marksAt(t,n,o){try{const d=a.__wbindgen_add_to_stack_pointer(-16);a.automerge_marksAt(d,this.__wbg_ptr,c(t),n,x(o)?0:c(o));var r=s().getInt32(d+4*0,!0),i=s().getInt32(d+4*1,!0),l=s().getInt32(d+4*2,!0);if(l)throw _(i);return _(r)}finally{a.__wbindgen_add_to_stack_pointer(16)}}hasOurChanges(t){K(t,V);const n=a.automerge_hasOurChanges(this.__wbg_ptr,t.__wbg_ptr);return _(n)}topoHistoryTraversal(){const t=a.automerge_topoHistoryTraversal(this.__wbg_ptr);return _(t)}stats(){const t=a.automerge_stats(this.__wbg_ptr);return _(t)}}const Gt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>a.__wbg_syncstate_free(e>>>0,1));class V{static __wrap(t){t=t>>>0;const n=Object.create(V.prototype);return n.__wbg_ptr=t,Gt.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Gt.unregister(this),t}free(){const t=this.__destroy_into_raw();a.__wbg_syncstate_free(t,0)}get sharedHeads(){const t=a.syncstate_sharedHeads(this.__wbg_ptr);return _(t)}get lastSentHeads(){const t=a.syncstate_lastSentHeads(this.__wbg_ptr);return _(t)}set lastSentHeads(t){try{const r=a.__wbindgen_add_to_stack_pointer(-16);a.syncstate_set_lastSentHeads(r,this.__wbg_ptr,c(t));var n=s().getInt32(r+4*0,!0),o=s().getInt32(r+4*1,!0);if(o)throw _(n)}finally{a.__wbindgen_add_to_stack_pointer(16)}}set sentHashes(t){try{const r=a.__wbindgen_add_to_stack_pointer(-16);a.syncstate_set_sentHashes(r,this.__wbg_ptr,c(t));var n=s().getInt32(r+4*0,!0),o=s().getInt32(r+4*1,!0);if(o)throw _(n)}finally{a.__wbindgen_add_to_stack_pointer(16)}}clone(){const t=a.syncstate_clone(this.__wbg_ptr);return V.__wrap(t)}}function Jt(e,t){const n=String(b(t)),o=H(n,a.__wbindgen_malloc,a.__wbindgen_realloc),r=F;s().setInt32(e+4*1,r,!0),s().setInt32(e+4*0,o,!0)}function Kt(){return N(function(e,t,n){const o=Reflect.apply(b(e),b(t),b(n));return c(o)},arguments)}function Yt(e,t){const n=Object.assign(b(e),b(t));return c(n)}function Qt(e){const t=b(e).buffer;return c(t)}function Xt(){return N(function(e,t){const n=b(e).call(b(t));return c(n)},arguments)}function Zt(){return N(function(e,t,n){const o=b(e).call(b(t),b(n));return c(o)},arguments)}function te(e,t){const n=b(e).concat(b(t));return c(n)}function ee(e,t,n){const o=Object.defineProperty(b(e),b(t),b(n));return c(o)}function ne(){return N(function(e,t){return Reflect.deleteProperty(b(e),b(t))},arguments)}function oe(e){return b(e).done}function re(e){const t=Object.entries(b(e));return c(t)}function ae(e,t){let n,o;try{n=e,o=t,console.error(M(e,t))}finally{a.__wbindgen_free(n,o,1)}}function ie(e,t){const n=Symbol.for(M(e,t));return c(n)}function se(e){const t=Object.freeze(b(e));return c(t)}function le(e){const t=Array.from(b(e));return c(t)}function ce(){return N(function(e,t){globalThis.crypto.getRandomValues(eo(e,t))},arguments)}function _e(e){return b(e).getTime()}function de(){return N(function(e,t){const n=Reflect.get(b(e),b(t));return c(n)},arguments)}function ue(e,t){const n=b(e)[t>>>0];return c(n)}function he(e){let t;try{t=b(e)instanceof ArrayBuffer}catch{t=!1}return t}function ge(e){let t;try{t=b(e)instanceof Date}catch{t=!1}return t}function be(e){let t;try{t=b(e)instanceof Object}catch{t=!1}return t}function pe(e){let t;try{t=b(e)instanceof Uint8Array}catch{t=!1}return t}function fe(e){return Array.isArray(b(e))}function me(){return c(Symbol.iterator)}function we(e){const t=Object.keys(b(e));return c(t)}function ye(e){return b(e).length}function ve(e){return b(e).length}function ke(e){return b(e).length}function xe(e,t){console.log(b(e),b(t))}function Ie(e){console.log(b(e))}function Ce(e,t){const n=new RangeError(M(e,t));return c(n)}function Se(e){const t=new Date(b(e));return c(t)}function Ae(){const e=new Object;return c(e)}function ze(){const e=new Array;return c(e)}function Ee(){const e=new Error;return c(e)}function De(e){const t=new Uint8Array(b(e));return c(t)}function Oe(e,t){const n=new Error(M(e,t));return c(n)}function Te(e,t,n){const o=new Uint8Array(b(e),t>>>0,n>>>0);return c(o)}function $e(e){const t=b(e).next;return c(t)}function Be(){return N(function(e){const t=b(e).next();return c(t)},arguments)}function Fe(){return N(function(e){const t=Reflect.ownKeys(b(e));return c(t)},arguments)}function Me(e,t){return b(e).push(b(t))}function Ve(e,t,n){b(e)[t>>>0]=_(n)}function Pe(e,t,n){b(e)[_(t)]=_(n)}function je(e,t,n){b(e).set(b(t),n>>>0)}function He(){return N(function(e,t,n){return Reflect.set(b(e),b(t),b(n))},arguments)}function Le(e,t,n){const o=b(e).slice(t>>>0,n>>>0);return c(o)}function We(e,t){const n=b(t).stack,o=H(n,a.__wbindgen_malloc,a.__wbindgen_realloc),r=F;s().setInt32(e+4*1,r,!0),s().setInt32(e+4*0,o,!0)}function Re(e){const t=b(e).toString();return c(t)}function Ne(e,t){return b(e).unshift(b(t))}function Ue(e){const t=b(e).value;return c(t)}function qe(e){const t=Object.values(b(e));return c(t)}function Ge(e){return c(e)}function Je(e){const t=BigInt.asUintN(64,e);return c(t)}function Ke(e){const t=b(e);return typeof t=="boolean"?t?1:0:2}function Ye(e,t){const n=Ot(b(t)),o=H(n,a.__wbindgen_malloc,a.__wbindgen_realloc),r=F;s().setInt32(e+4*1,r,!0),s().setInt32(e+4*0,o,!0)}function Qe(e,t){const n=new Error(M(e,t));return c(n)}function Xe(e){return Array.isArray(b(e))}function Ze(e){return typeof b(e)=="function"}function tn(e){return b(e)===null}function en(e){const t=b(e);return typeof t=="object"&&t!==null}function nn(e){return typeof b(e)=="string"}function on(e){return b(e)===void 0}function rn(e,t){const n=b(t),o=JSON.stringify(n===void 0?null:n),r=H(o,a.__wbindgen_malloc,a.__wbindgen_realloc),i=F;s().setInt32(e+4*1,i,!0),s().setInt32(e+4*0,r,!0)}function an(e,t){return b(e)==b(t)}function sn(){const e=a.memory;return c(e)}function ln(e,t){const n=b(t),o=typeof n=="number"?n:void 0;s().setFloat64(e+8*1,x(o)?0:o,!0),s().setInt32(e+4*0,!x(o),!0)}function cn(e){return c(e)}function _n(e){const t=b(e);return c(t)}function dn(e){_(e)}function un(e,t){const n=b(t),o=typeof n=="string"?n:void 0;var r=x(o)?0:H(o,a.__wbindgen_malloc,a.__wbindgen_realloc),i=F;s().setInt32(e+4*1,i,!0),s().setInt32(e+4*0,r,!0)}function hn(e,t){const n=M(e,t);return c(n)}function gn(e,t){throw new Error(M(e,t))}URL=globalThis.URL;const u=await Qn({"./automerge_wasm_bg.js":{__wbindgen_object_drop_ref:dn,__wbindgen_string_get:un,__wbindgen_error_new:Qe,__wbindgen_string_new:hn,__wbindgen_number_new:cn,__wbindgen_object_clone_ref:_n,__wbindgen_number_get:ln,__wbindgen_is_undefined:on,__wbindgen_boolean_get:Ke,__wbindgen_is_null:tn,__wbindgen_is_string:nn,__wbindgen_is_function:Ze,__wbindgen_is_object:en,__wbindgen_is_array:Xe,__wbindgen_json_serialize:rn,__wbg_new_8a6f238a6ece86ea:Ee,__wbg_stack_0ed75d68575b0f3c:We,__wbg_error_7534b8e9a36f1ab4:ae,__wbindgen_jsval_loose_eq:an,__wbg_String_fed4d24b68977888:Jt,__wbindgen_bigint_from_i64:Ge,__wbindgen_bigint_from_u64:Je,__wbg_set_3fda3bac07393de4:Pe,__wbg_getRandomValues_3d90134a348e46b3:ce,__wbg_log_c222819a41e063d3:Ie,__wbg_log_1ae1e9f741096e91:xe,__wbg_get_b9b93047fe3cf45b:ue,__wbg_length_e2d2a49132c1b256:ke,__wbg_new_78feb108b6472713:ze,__wbg_next_25feadfc0913fea9:$e,__wbg_next_6574e1a8a62d1055:Be,__wbg_done_769e5ede4b31c67b:oe,__wbg_value_cd1ffa7b1ab794f1:Ue,__wbg_iterator_9a24c88df860dc65:me,__wbg_get_67b2ba62fc30de12:de,__wbg_call_672a4d21634d4a24:Xt,__wbg_new_405e22f390576ce2:Ae,__wbg_length_d56737991078581b:ve,__wbg_set_37837023f3d740e8:Ve,__wbg_from_2a5d3e218e67aa85:le,__wbg_isArray_a1eab7e0d067391b:fe,__wbg_push_737cfc8c1432c2c6:Me,__wbg_unshift_c290010f73f04fb1:Ne,__wbg_instanceof_ArrayBuffer_e14585432e3737fc:he,__wbg_new_c68d7209be747379:Oe,__wbg_call_7cccdd69e0791ae2:Zt,__wbg_instanceof_Date_e9a9be8b9cea7890:ge,__wbg_getTime_46267b1c24877e30:_e,__wbg_new_31a97dac4f10fab7:Se,__wbg_instanceof_Object_7f2dcef8f78644a4:be,__wbg_assign_3627b8559449930a:Yt,__wbg_defineProperty_a3ddad9901e2d29e:ee,__wbg_entries_3265d4158b33e5dc:re,__wbg_freeze_ef6d70cf38e8d948:se,__wbg_keys_5c77a08ddc2fb8a6:we,__wbg_values_fcb8ba8c0aad8b58:qe,__wbg_new_1ab78df5e132f715:Ce,__wbg_apply_eb9e9b97497f91e4:Kt,__wbg_deleteProperty_96363d4a1d977c97:ne,__wbg_ownKeys_3930041068756f1f:Fe,__wbg_set_bb8cecf6a62b9f46:He,__wbg_buffer_609cc3eee51ed158:Qt,__wbg_concat_9de968491c4340cf:te,__wbg_slice_972c243648c9fd2e:Le,__wbg_for_4ff07bddd743c5e7:ie,__wbg_toString_66ab719c2a98bdf1:Re,__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a:Te,__wbg_new_a12002a7f91c75be:De,__wbg_set_65595bdd868b3009:je,__wbg_length_a446193dc22c12f8:ye,__wbg_instanceof_Uint8Array_17156bcf118086a9:pe,__wbindgen_debug_string:Ye,__wbindgen_throw:gn,__wbindgen_memory:sn}},Yn),po=u.memory,fo=u.__wbg_syncstate_free,mo=u.syncstate_sharedHeads,wo=u.syncstate_lastSentHeads,yo=u.syncstate_set_lastSentHeads,vo=u.syncstate_set_sentHashes,ko=u.syncstate_clone,xo=u.__wbg_automerge_free,Io=u.automerge_new,Co=u.automerge_clone,So=u.automerge_fork,Ao=u.automerge_pendingOps,zo=u.automerge_commit,Eo=u.automerge_merge,Do=u.automerge_rollback,Oo=u.automerge_keys,To=u.automerge_text,$o=u.automerge_spans,Bo=u.automerge_splice,Fo=u.automerge_updateText,Mo=u.automerge_updateSpans,Vo=u.automerge_push,Po=u.automerge_pushObject,jo=u.automerge_insert,Ho=u.automerge_splitBlock,Lo=u.automerge_joinBlock,Wo=u.automerge_updateBlock,Ro=u.automerge_getBlock,No=u.automerge_insertObject,Uo=u.automerge_put,qo=u.automerge_putObject,Go=u.automerge_increment,Jo=u.automerge_get,Ko=u.automerge_getWithType,Yo=u.automerge_objInfo,Qo=u.automerge_getAll,Xo=u.automerge_enableFreeze,Zo=u.automerge_registerDatatype,tr=u.automerge_applyPatches,er=u.automerge_applyAndReturnPatches,nr=u.automerge_diffIncremental,or=u.automerge_updateDiffCursor,rr=u.automerge_resetDiffCursor,ar=u.automerge_diff,ir=u.automerge_isolate,sr=u.automerge_integrate,lr=u.automerge_length,cr=u.automerge_delete,_r=u.automerge_save,dr=u.automerge_saveIncremental,ur=u.automerge_saveSince,hr=u.automerge_saveNoCompress,gr=u.automerge_saveAndVerify,br=u.automerge_loadIncremental,pr=u.automerge_applyChanges,fr=u.automerge_getChanges,mr=u.automerge_getChangeByHash,wr=u.automerge_getDecodedChangeByHash,yr=u.automerge_getChangesAdded,vr=u.automerge_getHeads,kr=u.automerge_getActorId,xr=u.automerge_getLastLocalChange,Ir=u.automerge_dump,Cr=u.automerge_getMissingDeps,Sr=u.automerge_receiveSyncMessage,Ar=u.automerge_generateSyncMessage,zr=u.automerge_toJS,Er=u.automerge_materialize,Dr=u.automerge_getCursor,Or=u.automerge_getCursorPosition,Tr=u.automerge_emptyChange,$r=u.automerge_mark,Br=u.automerge_unmark,Fr=u.automerge_marks,Mr=u.automerge_marksAt,Vr=u.automerge_hasOurChanges,Pr=u.automerge_topoHistoryTraversal,jr=u.automerge_stats,Hr=u.create,Lr=u.load,Wr=u.encodeChange,Rr=u.decodeChange,Nr=u.initSyncState,Ur=u.importSyncState,qr=u.exportSyncState,Gr=u.encodeSyncMessage,Jr=u.decodeSyncMessage,Kr=u.encodeSyncState,Yr=u.decodeSyncState,Qr=u.__wbindgen_malloc,Xr=u.__wbindgen_realloc,Zr=u.__wbindgen_exn_store,ta=u.__wbindgen_free,ea=u.__wbindgen_add_to_stack_pointer,na=Object.freeze(Object.defineProperty({__proto__:null,__wbg_automerge_free:xo,__wbg_syncstate_free:fo,__wbindgen_add_to_stack_pointer:ea,__wbindgen_exn_store:Zr,__wbindgen_free:ta,__wbindgen_malloc:Qr,__wbindgen_realloc:Xr,automerge_applyAndReturnPatches:er,automerge_applyChanges:pr,automerge_applyPatches:tr,automerge_clone:Co,automerge_commit:zo,automerge_delete:cr,automerge_diff:ar,automerge_diffIncremental:nr,automerge_dump:Ir,automerge_emptyChange:Tr,automerge_enableFreeze:Xo,automerge_fork:So,automerge_generateSyncMessage:Ar,automerge_get:Jo,automerge_getActorId:kr,automerge_getAll:Qo,automerge_getBlock:Ro,automerge_getChangeByHash:mr,automerge_getChanges:fr,automerge_getChangesAdded:yr,automerge_getCursor:Dr,automerge_getCursorPosition:Or,automerge_getDecodedChangeByHash:wr,automerge_getHeads:vr,automerge_getLastLocalChange:xr,automerge_getMissingDeps:Cr,automerge_getWithType:Ko,automerge_hasOurChanges:Vr,automerge_increment:Go,automerge_insert:jo,automerge_insertObject:No,automerge_integrate:sr,automerge_isolate:ir,automerge_joinBlock:Lo,automerge_keys:Oo,automerge_length:lr,automerge_loadIncremental:br,automerge_mark:$r,automerge_marks:Fr,automerge_marksAt:Mr,automerge_materialize:Er,automerge_merge:Eo,automerge_new:Io,automerge_objInfo:Yo,automerge_pendingOps:Ao,automerge_push:Vo,automerge_pushObject:Po,automerge_put:Uo,automerge_putObject:qo,automerge_receiveSyncMessage:Sr,automerge_registerDatatype:Zo,automerge_resetDiffCursor:rr,automerge_rollback:Do,automerge_save:_r,automerge_saveAndVerify:gr,automerge_saveIncremental:dr,automerge_saveNoCompress:hr,automerge_saveSince:ur,automerge_spans:$o,automerge_splice:Bo,automerge_splitBlock:Ho,automerge_stats:jr,automerge_text:To,automerge_toJS:zr,automerge_topoHistoryTraversal:Pr,automerge_unmark:Br,automerge_updateBlock:Wo,automerge_updateDiffCursor:or,automerge_updateSpans:Mo,automerge_updateText:Fo,create:Hr,decodeChange:Rr,decodeSyncMessage:Jr,decodeSyncState:Yr,encodeChange:Wr,encodeSyncMessage:Gr,encodeSyncState:Kr,exportSyncState:qr,importSyncState:Ur,initSyncState:Nr,load:Lr,memory:po,syncstate_clone:ko,syncstate_lastSentHeads:wo,syncstate_set_lastSentHeads:yo,syncstate_set_sentHashes:vo,syncstate_sharedHeads:mo},Symbol.toStringTag,{value:"Module"}));Nt(na);const oa=Object.freeze(Object.defineProperty({__proto__:null,Automerge:L,SyncState:V,TextRepresentation:bo,__wbg_String_fed4d24b68977888:Jt,__wbg_apply_eb9e9b97497f91e4:Kt,__wbg_assign_3627b8559449930a:Yt,__wbg_buffer_609cc3eee51ed158:Qt,__wbg_call_672a4d21634d4a24:Xt,__wbg_call_7cccdd69e0791ae2:Zt,__wbg_concat_9de968491c4340cf:te,__wbg_defineProperty_a3ddad9901e2d29e:ee,__wbg_deleteProperty_96363d4a1d977c97:ne,__wbg_done_769e5ede4b31c67b:oe,__wbg_entries_3265d4158b33e5dc:re,__wbg_error_7534b8e9a36f1ab4:ae,__wbg_for_4ff07bddd743c5e7:ie,__wbg_freeze_ef6d70cf38e8d948:se,__wbg_from_2a5d3e218e67aa85:le,__wbg_getRandomValues_3d90134a348e46b3:ce,__wbg_getTime_46267b1c24877e30:_e,__wbg_get_67b2ba62fc30de12:de,__wbg_get_b9b93047fe3cf45b:ue,__wbg_instanceof_ArrayBuffer_e14585432e3737fc:he,__wbg_instanceof_Date_e9a9be8b9cea7890:ge,__wbg_instanceof_Object_7f2dcef8f78644a4:be,__wbg_instanceof_Uint8Array_17156bcf118086a9:pe,__wbg_isArray_a1eab7e0d067391b:fe,__wbg_iterator_9a24c88df860dc65:me,__wbg_keys_5c77a08ddc2fb8a6:we,__wbg_length_a446193dc22c12f8:ye,__wbg_length_d56737991078581b:ve,__wbg_length_e2d2a49132c1b256:ke,__wbg_log_1ae1e9f741096e91:xe,__wbg_log_c222819a41e063d3:Ie,__wbg_new_1ab78df5e132f715:Ce,__wbg_new_31a97dac4f10fab7:Se,__wbg_new_405e22f390576ce2:Ae,__wbg_new_78feb108b6472713:ze,__wbg_new_8a6f238a6ece86ea:Ee,__wbg_new_a12002a7f91c75be:De,__wbg_new_c68d7209be747379:Oe,__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a:Te,__wbg_next_25feadfc0913fea9:$e,__wbg_next_6574e1a8a62d1055:Be,__wbg_ownKeys_3930041068756f1f:Fe,__wbg_push_737cfc8c1432c2c6:Me,__wbg_set_37837023f3d740e8:Ve,__wbg_set_3fda3bac07393de4:Pe,__wbg_set_65595bdd868b3009:je,__wbg_set_bb8cecf6a62b9f46:He,__wbg_set_wasm:Nt,__wbg_slice_972c243648c9fd2e:Le,__wbg_stack_0ed75d68575b0f3c:We,__wbg_toString_66ab719c2a98bdf1:Re,__wbg_unshift_c290010f73f04fb1:Ne,__wbg_value_cd1ffa7b1ab794f1:Ue,__wbg_values_fcb8ba8c0aad8b58:qe,__wbindgen_bigint_from_i64:Ge,__wbindgen_bigint_from_u64:Je,__wbindgen_boolean_get:Ke,__wbindgen_debug_string:Ye,__wbindgen_error_new:Qe,__wbindgen_is_array:Xe,__wbindgen_is_function:Ze,__wbindgen_is_null:tn,__wbindgen_is_object:en,__wbindgen_is_string:nn,__wbindgen_is_undefined:on,__wbindgen_json_serialize:rn,__wbindgen_jsval_loose_eq:an,__wbindgen_memory:sn,__wbindgen_number_get:ln,__wbindgen_number_new:cn,__wbindgen_object_clone_ref:_n,__wbindgen_object_drop_ref:dn,__wbindgen_string_get:un,__wbindgen_string_new:hn,__wbindgen_throw:gn,create:oo,decodeChange:io,decodeSyncMessage:uo,decodeSyncState:go,encodeChange:ao,encodeSyncMessage:_o,encodeSyncState:ho,exportSyncState:co,importSyncState:lo,initSyncState:so,load:ro},Symbol.toStringTag,{value:"Module"}));za(oa);var bn={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function o(){}Object.create&&(o.prototype=Object.create(null),new o().__proto__||(n=!1));function r(h,m,w){this.fn=h,this.context=m,this.once=w||!1}function i(h,m,w,v,C){if(typeof w!="function")throw new TypeError("The listener must be a function");var I=new r(w,v||h,C),E=n?n+m:m;return h._events[E]?h._events[E].fn?h._events[E]=[h._events[E],I]:h._events[E].push(I):(h._events[E]=I,h._eventsCount++),h}function l(h,m){--h._eventsCount===0?h._events=new o:delete h._events[m]}function d(){this._events=new o,this._eventsCount=0}d.prototype.eventNames=function(){var h=[],m,w;if(this._eventsCount===0)return h;for(w in m=this._events)t.call(m,w)&&h.push(n?w.slice(1):w);return Object.getOwnPropertySymbols?h.concat(Object.getOwnPropertySymbols(m)):h},d.prototype.listeners=function(h){var m=n?n+h:h,w=this._events[m];if(!w)return[];if(w.fn)return[w.fn];for(var v=0,C=w.length,I=new Array(C);v<C;v++)I[v]=w[v].fn;return I},d.prototype.listenerCount=function(h){var m=n?n+h:h,w=this._events[m];return w?w.fn?1:w.length:0},d.prototype.emit=function(h,m,w,v,C,I){var E=n?n+h:h;if(!this._events[E])return!1;var y=this._events[E],q=arguments.length,Q,A;if(y.fn){switch(y.once&&this.removeListener(h,y.fn,void 0,!0),q){case 1:return y.fn.call(y.context),!0;case 2:return y.fn.call(y.context,m),!0;case 3:return y.fn.call(y.context,m,w),!0;case 4:return y.fn.call(y.context,m,w,v),!0;case 5:return y.fn.call(y.context,m,w,v,C),!0;case 6:return y.fn.call(y.context,m,w,v,C,I),!0}for(A=1,Q=new Array(q-1);A<q;A++)Q[A-1]=arguments[A];y.fn.apply(y.context,Q)}else{var Aa=y.length,dt;for(A=0;A<Aa;A++)switch(y[A].once&&this.removeListener(h,y[A].fn,void 0,!0),q){case 1:y[A].fn.call(y[A].context);break;case 2:y[A].fn.call(y[A].context,m);break;case 3:y[A].fn.call(y[A].context,m,w);break;case 4:y[A].fn.call(y[A].context,m,w,v);break;default:if(!Q)for(dt=1,Q=new Array(q-1);dt<q;dt++)Q[dt-1]=arguments[dt];y[A].fn.apply(y[A].context,Q)}}return!0},d.prototype.on=function(h,m,w){return i(this,h,m,w,!1)},d.prototype.once=function(h,m,w){return i(this,h,m,w,!0)},d.prototype.removeListener=function(h,m,w,v){var C=n?n+h:h;if(!this._events[C])return this;if(!m)return l(this,C),this;var I=this._events[C];if(I.fn)I.fn===m&&(!v||I.once)&&(!w||I.context===w)&&l(this,C);else{for(var E=0,y=[],q=I.length;E<q;E++)(I[E].fn!==m||v&&!I[E].once||w&&I[E].context!==w)&&y.push(I[E]);y.length?this._events[C]=y.length===1?y[0]:y:l(this,C)}return this},d.prototype.removeAllListeners=function(h){var m;return h?(m=n?n+h:h,this._events[m]&&l(this,m)):(this._events=new o,this._eventsCount=0),this},d.prototype.off=d.prototype.removeListener,d.prototype.addListener=d.prototype.on,d.prefixed=n,d.EventEmitter=d,e.exports=d})(bn);var ra=bn.exports;const pn=bi(ra);let Tt=!1;const ft=new xt.subtle.Watcher(()=>{Tt||(Tt=!0,queueMicrotask(()=>{Tt=!1;for(const e of ft.getPending())e.get();ft.watch()}))});function aa(e){let t;const n=new xt.Computed(()=>{typeof t=="function"&&t(),t=e()});return ft.watch(n),n.get(),()=>{typeof t=="function"&&t(),ft.unwatch(n)}}class ia extends pn{get activeCollaborators(){return Array.from(this.collaborators.get().keys())}constructor(t,n,o){super(),this.client=t,this.sessionId=n,this.acceptedCollaborators=o,this.collaborators=new xt.State(new On),this.joined=!0,this.ignoredMessages=new On,t.onSignal(i=>{if(!(!this.joined||i.remote_signal.session_id!==this.sessionId)){if(!this.acceptedCollaborators.get().find(l=>D(l)===D(i.provenance))){console.warn(`Received a message from an invalid peer ${D(i.provenance)}: ignoring.`),this.ignoredMessages.has(i.provenance)||this.ignoredMessages.set(i.provenance,[]),this.ignoredMessages.get(i.provenance).push(i.remote_signal);return}this.handleCollaboratorMessage(i.provenance,i.remote_signal)}});let r;aa(()=>{const i=this.acceptedCollaborators.get();for(const[l,d]of Array.from(this.ignoredMessages.entries()))if(i.find(h=>D(h)===D(l))){for(const h of d)this.handleCollaboratorMessage(l,h);this.ignoredMessages.delete(l)}r&&clearInterval(r),r=setInterval(()=>{this.joined&&this.client.sendPresenceSignal(this.sessionId,i.filter(l=>D(l)!==D(this.client.client.myPubKey)))},3e3)})}handleCollaboratorMessage(t,n){const o=this.collaborators.get(),r=o.get(t);switch(n.type){case"Presence":r||this.emit("collaborator-joined",{collaborator:t}),o.set(t,{lastSeen:Date.now()});break;case"SessionMessage":this.emit("message-received",{collaborator:t,message:Ea(n.message)}),o.set(t,{lastSeen:Date.now()});break;case"LeaveSession":o.delete(t),this.emit("collaborator-left",{collaborator:t});break}this.collaborators.set(o)}async join(){this.joined=!0;const t=this.acceptedCollaborators.get();return this.client.sendPresenceSignal(this.sessionId,t.filter(n=>D(n)!==D(this.client.client.myPubKey)))}async sendMessage(t,n){if(t.length===0)return;const o=Da(n);return this.client.sendSessionMessage(this.sessionId,t.filter(r=>D(r)!==D(this.client.client.myPubKey)),o)}async leave(){return this.joined=!1,this.client.sendLeaveSesionSignal(this.sessionId,this.activeCollaborators)}}const fn=qn("collaborative_sessions/client");class sa extends pn{constructor(t,n,o,r){super(),this.client=t,this.sessionId=n,this.acceptedCollaborators=o,this.doc=r,this.syncStates={},this.session=new ia(this.client,this.sessionId,this.acceptedCollaborators),this.session.on("message-received",i=>{switch(i.message.type){case"sync":this.handleSyncMessage(D(i.collaborator),i.message.syncMessage);return;case"change":this.handleChange(D(i.collaborator),i.message.change);return}}),this.session.on("collaborator-joined",i=>this.sendSyncMessage(D(i.collaborator)))}change(t){this.doc=Oa(this.doc,{patchCallback:this.patchCallback.bind(this)},t);const n=Ta(this.doc);n&&this.session.sendMessage(this.session.activeCollaborators,{type:"change",change:n})}docSync(){return this.doc}async syncWithPeers(){this.session.activeCollaborators.forEach(t=>this.sendSyncMessage(D(t)))}sendSyncMessage(t){this.syncStates[t]||(this.syncStates[t]=Tn());const n=this.syncStates[t],[o,r]=$a(this.doc,n);r&&(this.syncStates[t]=o,this.session.sendMessage([Ba(t)],{type:"sync",syncMessage:r}))}handleSyncMessage(t,n){this.syncStates[t]||(this.syncStates[t]=Tn());const o=this.syncStates[t],[r,i]=Fa(this.doc,o,n,{patchCallback:this.patchCallback.bind(this)});this.doc=r,this.syncStates[t]=i,this.sendSyncMessage(t)}handleChange(t,n){const[o]=Ma(this.doc,[n],{patchCallback:this.patchCallback.bind(this)});this.doc=o}patchCallback(t,n){this.emit("change",{doc:n.after,handle:this,patches:t,patchInfo:n})}}const mn=qn("collaborative_document");function la(e){const t=n=>{n.state.doc.textContent?n.dom.removeAttribute("data-placeholder"):n.dom.setAttribute("data-placeholder",e)};return new Mn({view(n){return t(n),{update:t}}})}let W=class extends Un(Pt){constructor(){super(...arguments),this.plugins=[],this.path=["text"],this.styles=[]}get schema(){return this.adapter.schema}firstUpdated(){this.adapter=this.schemaSpec?new Ua(this.schemaSpec):qa;const e=[...this.plugins,Ga({adapter:this.adapter,handle:this.document,path:this.path})];this.placeholder&&e.push(la(this.placeholder)),this.prosemirror=new Ja(this.shadowRoot,{state:Ka.create({doc:Ya(this.adapter,Va(this.document.docSync(),this.path)),plugins:e}),dispatchTransaction:t=>{this.prosemirror.updateState(this.prosemirror.state.apply(t))}})}render(){return j`${this.styles.map(e=>j`<style>
					${e}
				</style>`)}`}};W.styles=[G`
			:host {
			}
			#editor {
				min-height: 100%;
			}
			.ProseMirror {
				min-height: 100%;
			}

			.ProseMirror[data-placeholder]::before {
				position: absolute;
				content: attr(data-placeholder);
				pointer-events: none;
				color: var(--sl-color-gray-700);
			}

			[contenteditable]:active,
			[contenteditable]:focus {
				border: none;
				outline: none;
			}
			p {
				margin: 0;
			}
		`,Ra,Na,Gn],B([f()],W.prototype,"plugins",void 0),B([f()],W.prototype,"schemaSpec",void 0),B([f()],W.prototype,"path",void 0),B([f()],W.prototype,"styles",void 0),B([f()],W.prototype,"placeholder",void 0),B([Et({context:fn})],W.prototype,"client",void 0),B([Et({context:mn}),f()],W.prototype,"document",void 0),W=B([Rt("collaborative-prosemirror")],W);let Y=class extends Pt{constructor(){super(...arguments),this._acceptedCollaborators=new xt.State(this.acceptedCollaborators)}set acceptedCollaborators(e){this._acceptedCollaborators.set(e)}get acceptedCollaborators(){return this._acceptedCollaborators?this._acceptedCollaborators.get():[]}connectedCallback(){super.connectedCallback(),this.document=new sa(this.collaborativeSessionsClient,this.sessionId,this._acceptedCollaborators,this.initialDocument),this.document.on("change",e=>{this.dispatchEvent(new CustomEvent("document-change",{bubbles:!0,composed:!0,detail:{change:e}}))})}render(){return j`<slot></slot>`}};Y.styles=G`
		:host {
			display: contents;
		}
	`,B([Et({context:fn}),f({type:Object})],Y.prototype,"collaborativeSessionsClient",void 0),B([f({attribute:"session-id"})],Y.prototype,"sessionId",void 0),B([pi({context:mn})],Y.prototype,"document",void 0),B([f()],Y.prototype,"initialDocument",void 0),Y=B([Rt("collaborative-document-context")],Y);var ca=e=>{var t;const{activeElement:n}=document;n&&e.contains(n)&&((t=document.activeElement)==null||t.blur())},_a=G`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;const S=e=>e??$n;var O=class extends zt{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?It`a`:It`button`;return Ct`
      <${t}
        part="base"
        class=${nt({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${S(e?void 0:this.disabled)}
        type=${S(e?void 0:"button")}
        href=${S(e?this.href:void 0)}
        target=${S(e?this.target:void 0)}
        download=${S(e?this.download:void 0)}
        rel=${S(e&&this.target?"noreferrer noopener":void 0)}
        role=${S(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${S(this.name)}
          library=${S(this.library)}
          src=${S(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};O.styles=[At,_a],O.dependencies={"sl-icon":jt},p([ut(".icon-button")],O.prototype,"button",2),p([ht()],O.prototype,"hasFocus",2),p([f()],O.prototype,"name",2),p([f()],O.prototype,"library",2),p([f()],O.prototype,"src",2),p([f()],O.prototype,"href",2),p([f()],O.prototype,"target",2),p([f()],O.prototype,"download",2),p([f()],O.prototype,"label",2),p([f({type:Boolean,reflect:!0})],O.prototype,"disabled",2);var da=G`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,T=class Z extends zt{constructor(){super(...arguments),this.hasSlotController=new Ht(this,"icon","suffix"),this.localize=new Pn(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,n="100%",o="0";this.countdownAnimation=t.animate([{width:n},{width:o}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await jn(this.base),this.base.hidden=!1;const{keyframes:t,options:n}=Hn(this,"alert.show",{dir:this.localize.dir()});await Ln(this.base,t,n),this.emit("sl-after-show")}else{ca(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await jn(this.base);const{keyframes:t,options:n}=Hn(this,"alert.hide",{dir:this.localize.dir()});await Ln(this.base,t,n),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Wn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Wn(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),Z.toastStack.parentElement===null&&document.body.append(Z.toastStack),Z.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Z.toastStack.removeChild(this),t(),Z.toastStack.querySelector("sl-alert")===null&&Z.toastStack.remove()},{once:!0})})}render(){return j`
      <div
        part="base"
        class=${nt({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?j`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?j`
              <div
                class=${nt({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};T.styles=[At,da],T.dependencies={"sl-icon-button":O},p([ut('[part~="base"]')],T.prototype,"base",2),p([ut(".alert__countdown-elapsed")],T.prototype,"countdownElement",2),p([f({type:Boolean,reflect:!0})],T.prototype,"open",2),p([f({type:Boolean,reflect:!0})],T.prototype,"closable",2),p([f({reflect:!0})],T.prototype,"variant",2),p([f({type:Number})],T.prototype,"duration",2),p([f({type:String,reflect:!0})],T.prototype,"countdown",2),p([ht()],T.prototype,"remainingTime",2),p([gt("open",{waitUntilFirstUpdate:!0})],T.prototype,"handleOpenChange",1),p([gt("duration")],T.prototype,"handleDurationChange",1);var ua=T;Vn("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),Vn("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),ua.define("sl-alert");var it=new WeakMap,st=new WeakMap,lt=new WeakMap,$t=new WeakSet,mt=new WeakMap,wn=class{constructor(e,t){this.handleFormData=n=>{const o=this.options.disabled(this.host),r=this.options.name(this.host),i=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!l&&typeof r=="string"&&r.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(d=>{n.formData.append(r,d.toString())}):n.formData.append(r,i.toString()))},this.handleFormSubmit=n=>{var o;const r=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=it.get(this.form))==null||o.forEach(l=>{this.setUserInteracted(l,!0)})),this.form&&!this.form.noValidate&&!r&&!i(this.host)&&(n.preventDefault(),n.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),mt.set(this.host,[])},this.handleInteraction=n=>{const o=mt.get(this.host);o.includes(n.type)||o.push(n.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const o of n)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const o of n)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Lt({form:n=>{const o=n.form;if(o){const r=n.getRootNode().querySelector(`#${o}`);if(r)return r}return n.closest("form")},name:n=>n.name,value:n=>n.value,defaultValue:n=>n.defaultValue,disabled:n=>{var o;return(o=n.disabled)!=null?o:!1},reportValidity:n=>typeof n.reportValidity=="function"?n.reportValidity():!0,checkValidity:n=>typeof n.checkValidity=="function"?n.checkValidity():!0,setValue:(n,o)=>n.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),mt.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),mt.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,it.has(this.form)?it.get(this.form).add(this.host):it.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),st.has(this.form)||(st.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),lt.has(this.form)||(lt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=it.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),st.has(this.form)&&(this.form.reportValidity=st.get(this.form),st.delete(this.form)),lt.has(this.form)&&(this.form.checkValidity=lt.get(this.form),lt.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?$t.add(e):$t.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const n=document.createElement("button");n.type=e,n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",t&&(n.name=t.name,n.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&n.setAttribute(o,t.getAttribute(o))})),this.form.append(n),n.click(),n.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,n=!!$t.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&n),t.toggleAttribute("data-user-valid",e&&n)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||(e==null||e.preventDefault())}},Bt=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Rn(Lt({},Bt),{valid:!1,valueMissing:!0})),Object.freeze(Rn(Lt({},Bt),{valid:!1,customError:!0}));var ha=G`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,k=class extends zt{constructor(){super(...arguments),this.formControlController=new wn(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Ht(this,"[default]","prefix","suffix"),this.localize=new Pn(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Bt}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?It`a`:It`button`;return Ct`
      <${t}
        part="base"
        class=${nt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${S(e?void 0:this.disabled)}
        type=${S(e?void 0:this.type)}
        title=${this.title}
        name=${S(e?void 0:this.name)}
        value=${S(e?void 0:this.value)}
        href=${S(e&&!this.disabled?this.href:void 0)}
        target=${S(e?this.target:void 0)}
        download=${S(e?this.download:void 0)}
        rel=${S(e?this.rel:void 0)}
        role=${S(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Ct` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Ct`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};k.styles=[At,ha],k.dependencies={"sl-icon":jt,"sl-spinner":Qa},p([ut(".button")],k.prototype,"button",2),p([ht()],k.prototype,"hasFocus",2),p([ht()],k.prototype,"invalid",2),p([f()],k.prototype,"title",2),p([f({reflect:!0})],k.prototype,"variant",2),p([f({reflect:!0})],k.prototype,"size",2),p([f({type:Boolean,reflect:!0})],k.prototype,"caret",2),p([f({type:Boolean,reflect:!0})],k.prototype,"disabled",2),p([f({type:Boolean,reflect:!0})],k.prototype,"loading",2),p([f({type:Boolean,reflect:!0})],k.prototype,"outline",2),p([f({type:Boolean,reflect:!0})],k.prototype,"pill",2),p([f({type:Boolean,reflect:!0})],k.prototype,"circle",2),p([f()],k.prototype,"type",2),p([f()],k.prototype,"name",2),p([f()],k.prototype,"value",2),p([f()],k.prototype,"href",2),p([f()],k.prototype,"target",2),p([f()],k.prototype,"rel",2),p([f()],k.prototype,"download",2),p([f()],k.prototype,"form",2),p([f({attribute:"formaction"})],k.prototype,"formAction",2),p([f({attribute:"formenctype"})],k.prototype,"formEnctype",2),p([f({attribute:"formmethod"})],k.prototype,"formMethod",2),p([f({attribute:"formnovalidate",type:Boolean})],k.prototype,"formNoValidate",2),p([f({attribute:"formtarget"})],k.prototype,"formTarget",2),p([gt("disabled",{waitUntilFirstUpdate:!0})],k.prototype,"handleDisabledChange",1),k.define("sl-button");var ga=G`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,ba=(e="value")=>(t,n)=>{const o=t.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(i,l,d){var h;const m=o.getPropertyOptions(e),w=typeof m.attribute=="string"?m.attribute:e;if(i===w){const v=m.converter||Bn,C=(typeof v=="function"?v:(h=v==null?void 0:v.fromAttribute)!=null?h:Bn.fromAttribute)(d,m.type);this[e]!==C&&(this[n]=C)}r.call(this,i,l,d)}},pa=G`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;const yn=Xa(class extends Za{constructor(e){if(super(e),e.type!==ot.PROPERTY&&e.type!==ot.ATTRIBUTE&&e.type!==ot.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ti(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===St||t===$n)return t;const n=e.element,o=e.name;if(e.type===ot.PROPERTY){if(t===n[o])return St}else if(e.type===ot.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(o))return St}else if(e.type===ot.ATTRIBUTE&&n.getAttribute(o)===t+"")return St;return ei(e),t}});var z=class extends zt{constructor(){super(...arguments),this.formControlController=new wn(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Ht(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return j`
      <div
        class=${nt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${nt({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${S(this.value)}
            .indeterminate=${yn(this.indeterminate)}
            .checked=${yn(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?j`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?j`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};z.styles=[At,pa,ga],z.dependencies={"sl-icon":jt},p([ut('input[type="checkbox"]')],z.prototype,"input",2),p([ht()],z.prototype,"hasFocus",2),p([f()],z.prototype,"title",2),p([f()],z.prototype,"name",2),p([f()],z.prototype,"value",2),p([f({reflect:!0})],z.prototype,"size",2),p([f({type:Boolean,reflect:!0})],z.prototype,"disabled",2),p([f({type:Boolean,reflect:!0})],z.prototype,"checked",2),p([f({type:Boolean,reflect:!0})],z.prototype,"indeterminate",2),p([ba("checked")],z.prototype,"defaultChecked",2),p([f({reflect:!0})],z.prototype,"form",2),p([f({type:Boolean,reflect:!0})],z.prototype,"required",2),p([f({attribute:"help-text"})],z.prototype,"helpText",2),p([gt("disabled",{waitUntilFirstUpdate:!0})],z.prototype,"handleDisabledChange",1),p([gt(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],z.prototype,"handleStateChange",1),z.define("sl-checkbox"),O.define("sl-icon-button");function fa(e,t,n,o){if(typeof t=="function"?e!==t||!0:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?o:n==="a"?o.call(e):o?o.value:t.get(e)}function ma(e,t,n,o,r){if(typeof t=="function"?e!==t||!0:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t.set(e,n),n}var wt;const P="__TAURI_TO_IPC_KEY__";function wa(e,t=!1){return window.__TAURI_INTERNALS__.transformCallback(e,t)}async function g(e,t={},n){return window.__TAURI_INTERNALS__.invoke(e,t,n)}class ya{get rid(){return fa(this,wt,"f")}constructor(t){wt.set(this,void 0),ma(this,wt,t)}async close(){return g("plugin:resources|close",{rid:this.rid})}}wt=new WeakMap;class vn{constructor(...t){this.type="Logical",t.length===1?"Logical"in t[0]?(this.width=t[0].Logical.width,this.height=t[0].Logical.height):(this.width=t[0].width,this.height=t[0].height):(this.width=t[0],this.height=t[1])}toPhysical(t){return new ct(this.width*t,this.height*t)}[P](){return{width:this.width,height:this.height}}toJSON(){return this[P]()}}class ct{constructor(...t){this.type="Physical",t.length===1?"Physical"in t[0]?(this.width=t[0].Physical.width,this.height=t[0].Physical.height):(this.width=t[0].width,this.height=t[0].height):(this.width=t[0],this.height=t[1])}toLogical(t){return new vn(this.width/t,this.height/t)}[P](){return{width:this.width,height:this.height}}toJSON(){return this[P]()}}class et{constructor(t){this.size=t}toLogical(t){return this.size instanceof vn?this.size:this.size.toLogical(t)}toPhysical(t){return this.size instanceof ct?this.size:this.size.toPhysical(t)}[P](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[P]()}}class kn{constructor(...t){this.type="Logical",t.length===1?"Logical"in t[0]?(this.x=t[0].Logical.x,this.y=t[0].Logical.y):(this.x=t[0].x,this.y=t[0].y):(this.x=t[0],this.y=t[1])}toPhysical(t){return new U(this.x*t,this.y*t)}[P](){return{x:this.x,y:this.y}}toJSON(){return this[P]()}}class U{constructor(...t){this.type="Physical",t.length===1?"Physical"in t[0]?(this.x=t[0].Physical.x,this.y=t[0].Physical.y):(this.x=t[0].x,this.y=t[0].y):(this.x=t[0],this.y=t[1])}toLogical(t){return new kn(this.x/t,this.y/t)}[P](){return{x:this.x,y:this.y}}toJSON(){return this[P]()}}class yt{constructor(t){this.position=t}toLogical(t){return this.position instanceof kn?this.position:this.position.toLogical(t)}toPhysical(t){return this.position instanceof U?this.position:this.position.toPhysical(t)}[P](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[P]()}}var $;(function(e){e.WINDOW_RESIZED="tauri://resize",e.WINDOW_MOVED="tauri://move",e.WINDOW_CLOSE_REQUESTED="tauri://close-requested",e.WINDOW_DESTROYED="tauri://destroyed",e.WINDOW_FOCUS="tauri://focus",e.WINDOW_BLUR="tauri://blur",e.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",e.WINDOW_THEME_CHANGED="tauri://theme-changed",e.WINDOW_CREATED="tauri://window-created",e.WEBVIEW_CREATED="tauri://webview-created",e.DRAG_ENTER="tauri://drag-enter",e.DRAG_OVER="tauri://drag-over",e.DRAG_DROP="tauri://drag-drop",e.DRAG_LEAVE="tauri://drag-leave"})($||($={}));async function xn(e,t){await g("plugin:event|unlisten",{event:e,eventId:t})}async function In(e,t,n){var o;const r=typeof(n==null?void 0:n.target)=="string"?{kind:"AnyLabel",label:n.target}:(o=n==null?void 0:n.target)!==null&&o!==void 0?o:{kind:"Any"};return g("plugin:event|listen",{event:e,target:r,handler:wa(t)}).then(i=>async()=>xn(e,i))}async function va(e,t,n){return In(e,o=>{xn(e,o.id),t(o)},n)}async function ka(e,t){await g("plugin:event|emit",{event:e,payload:t})}async function xa(e,t,n){await g("plugin:event|emit_to",{target:typeof e=="string"?{kind:"AnyLabel",label:e}:e,event:t,payload:n})}class _t extends ya{constructor(t){super(t)}static async new(t,n,o){return g("plugin:image|new",{rgba:vt(t),width:n,height:o}).then(r=>new _t(r))}static async fromBytes(t){return g("plugin:image|from_bytes",{bytes:vt(t)}).then(n=>new _t(n))}static async fromPath(t){return g("plugin:image|from_path",{path:t}).then(n=>new _t(n))}async rgba(){return g("plugin:image|rgba",{rid:this.rid}).then(t=>new Uint8Array(t))}async size(){return g("plugin:image|size",{rid:this.rid})}}function vt(e){return e==null?null:typeof e=="string"?e:e instanceof _t?e.rid:e}var Ft;(function(e){e[e.Critical=1]="Critical",e[e.Informational=2]="Informational"})(Ft||(Ft={}));class Ia{constructor(t){this._preventDefault=!1,this.event=t.event,this.id=t.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var Cn;(function(e){e.None="none",e.Normal="normal",e.Indeterminate="indeterminate",e.Paused="paused",e.Error="error"})(Cn||(Cn={}));function Sn(){return new An(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Mt(){return g("plugin:window|get_all_windows").then(e=>e.map(t=>new An(t,{skip:!0})))}const Vt=["tauri://created","tauri://error"];class An{constructor(t,n={}){var o;this.label=t,this.listeners=Object.create(null),n!=null&&n.skip||g("plugin:window|create",{options:{...n,parent:typeof n.parent=="string"?n.parent:(o=n.parent)===null||o===void 0?void 0:o.label,label:t}}).then(async()=>this.emit("tauri://created")).catch(async r=>this.emit("tauri://error",r))}static async getByLabel(t){var n;return(n=(await Mt()).find(o=>o.label===t))!==null&&n!==void 0?n:null}static getCurrent(){return Sn()}static async getAll(){return Mt()}static async getFocusedWindow(){for(const t of await Mt())if(await t.isFocused())return t;return null}async listen(t,n){return this._handleTauriEvent(t,n)?()=>{const o=this.listeners[t];o.splice(o.indexOf(n),1)}:In(t,n,{target:{kind:"Window",label:this.label}})}async once(t,n){return this._handleTauriEvent(t,n)?()=>{const o=this.listeners[t];o.splice(o.indexOf(n),1)}:va(t,n,{target:{kind:"Window",label:this.label}})}async emit(t,n){if(Vt.includes(t)){for(const o of this.listeners[t]||[])o({event:t,id:-1,payload:n});return}return ka(t,n)}async emitTo(t,n,o){if(Vt.includes(n)){for(const r of this.listeners[n]||[])r({event:n,id:-1,payload:o});return}return xa(t,n,o)}_handleTauriEvent(t,n){return Vt.includes(t)?(t in this.listeners?this.listeners[t].push(n):this.listeners[t]=[n],!0):!1}async scaleFactor(){return g("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return g("plugin:window|inner_position",{label:this.label}).then(t=>new U(t))}async outerPosition(){return g("plugin:window|outer_position",{label:this.label}).then(t=>new U(t))}async innerSize(){return g("plugin:window|inner_size",{label:this.label}).then(t=>new ct(t))}async outerSize(){return g("plugin:window|outer_size",{label:this.label}).then(t=>new ct(t))}async isFullscreen(){return g("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return g("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return g("plugin:window|is_maximized",{label:this.label})}async isFocused(){return g("plugin:window|is_focused",{label:this.label})}async isDecorated(){return g("plugin:window|is_decorated",{label:this.label})}async isResizable(){return g("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return g("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return g("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return g("plugin:window|is_closable",{label:this.label})}async isVisible(){return g("plugin:window|is_visible",{label:this.label})}async title(){return g("plugin:window|title",{label:this.label})}async theme(){return g("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return g("plugin:window|is_always_on_top",{label:this.label})}async center(){return g("plugin:window|center",{label:this.label})}async requestUserAttention(t){let n=null;return t&&(t===Ft.Critical?n={type:"Critical"}:n={type:"Informational"}),g("plugin:window|request_user_attention",{label:this.label,value:n})}async setResizable(t){return g("plugin:window|set_resizable",{label:this.label,value:t})}async setEnabled(t){return g("plugin:window|set_enabled",{label:this.label,value:t})}async isEnabled(){return g("plugin:window|is_enabled",{label:this.label})}async setMaximizable(t){return g("plugin:window|set_maximizable",{label:this.label,value:t})}async setMinimizable(t){return g("plugin:window|set_minimizable",{label:this.label,value:t})}async setClosable(t){return g("plugin:window|set_closable",{label:this.label,value:t})}async setTitle(t){return g("plugin:window|set_title",{label:this.label,value:t})}async maximize(){return g("plugin:window|maximize",{label:this.label})}async unmaximize(){return g("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return g("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return g("plugin:window|minimize",{label:this.label})}async unminimize(){return g("plugin:window|unminimize",{label:this.label})}async show(){return g("plugin:window|show",{label:this.label})}async hide(){return g("plugin:window|hide",{label:this.label})}async close(){return g("plugin:window|close",{label:this.label})}async destroy(){return g("plugin:window|destroy",{label:this.label})}async setDecorations(t){return g("plugin:window|set_decorations",{label:this.label,value:t})}async setShadow(t){return g("plugin:window|set_shadow",{label:this.label,value:t})}async setEffects(t){return g("plugin:window|set_effects",{label:this.label,value:t})}async clearEffects(){return g("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(t){return g("plugin:window|set_always_on_top",{label:this.label,value:t})}async setAlwaysOnBottom(t){return g("plugin:window|set_always_on_bottom",{label:this.label,value:t})}async setContentProtected(t){return g("plugin:window|set_content_protected",{label:this.label,value:t})}async setSize(t){return g("plugin:window|set_size",{label:this.label,value:t instanceof et?t:new et(t)})}async setMinSize(t){return g("plugin:window|set_min_size",{label:this.label,value:t instanceof et?t:t?new et(t):null})}async setMaxSize(t){return g("plugin:window|set_max_size",{label:this.label,value:t instanceof et?t:t?new et(t):null})}async setSizeConstraints(t){function n(o){return o?{Logical:o}:null}return g("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:n(t==null?void 0:t.minWidth),minHeight:n(t==null?void 0:t.minHeight),maxWidth:n(t==null?void 0:t.maxWidth),maxHeight:n(t==null?void 0:t.maxHeight)}})}async setPosition(t){return g("plugin:window|set_position",{label:this.label,value:t instanceof yt?t:new yt(t)})}async setFullscreen(t){return g("plugin:window|set_fullscreen",{label:this.label,value:t})}async setFocus(){return g("plugin:window|set_focus",{label:this.label})}async setIcon(t){return g("plugin:window|set_icon",{label:this.label,value:vt(t)})}async setSkipTaskbar(t){return g("plugin:window|set_skip_taskbar",{label:this.label,value:t})}async setCursorGrab(t){return g("plugin:window|set_cursor_grab",{label:this.label,value:t})}async setCursorVisible(t){return g("plugin:window|set_cursor_visible",{label:this.label,value:t})}async setCursorIcon(t){return g("plugin:window|set_cursor_icon",{label:this.label,value:t})}async setBackgroundColor(t){return g("plugin:window|set_background_color",{color:t})}async setCursorPosition(t){return g("plugin:window|set_cursor_position",{label:this.label,value:t instanceof yt?t:new yt(t)})}async setIgnoreCursorEvents(t){return g("plugin:window|set_ignore_cursor_events",{label:this.label,value:t})}async startDragging(){return g("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(t){return g("plugin:window|start_resize_dragging",{label:this.label,value:t})}async setBadgeCount(t){return g("plugin:window|set_badge_count",{label:this.label,value:t})}async setBadgeLabel(t){return g("plugin:window|set_badge_label",{label:this.label,value:t})}async setOverlayIcon(t){return g("plugin:window|set_overlay_icon",{label:this.label,value:t?vt(t):void 0})}async setProgressBar(t){return g("plugin:window|set_progress_bar",{label:this.label,value:t})}async setVisibleOnAllWorkspaces(t){return g("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:t})}async setTitleBarStyle(t){return g("plugin:window|set_title_bar_style",{label:this.label,value:t})}async setTheme(t){return g("plugin:window|set_theme",{label:this.label,value:t})}async onResized(t){return this.listen($.WINDOW_RESIZED,n=>{n.payload=new ct(n.payload),t(n)})}async onMoved(t){return this.listen($.WINDOW_MOVED,n=>{n.payload=new U(n.payload),t(n)})}async onCloseRequested(t){return this.listen($.WINDOW_CLOSE_REQUESTED,async n=>{const o=new Ia(n);await t(o),o.isPreventDefault()||await this.destroy()})}async onDragDropEvent(t){const n=await this.listen($.DRAG_ENTER,l=>{t({...l,payload:{type:"enter",paths:l.payload.paths,position:new U(l.payload.position)}})}),o=await this.listen($.DRAG_OVER,l=>{t({...l,payload:{type:"over",position:new U(l.payload.position)}})}),r=await this.listen($.DRAG_DROP,l=>{t({...l,payload:{type:"drop",paths:l.payload.paths,position:new U(l.payload.position)}})}),i=await this.listen($.DRAG_LEAVE,l=>{t({...l,payload:{type:"leave"}})});return()=>{n(),r(),o(),i()}}async onFocusChanged(t){const n=await this.listen($.WINDOW_FOCUS,r=>{t({...r,payload:!0})}),o=await this.listen($.WINDOW_BLUR,r=>{t({...r,payload:!1})});return()=>{n(),o()}}async onScaleChanged(t){return this.listen($.WINDOW_SCALE_FACTOR_CHANGED,t)}async onThemeChanged(t){return this.listen($.WINDOW_THEME_CHANGED,t)}}var zn;(function(e){e.Disabled="disabled",e.Throttle="throttle",e.Suspend="suspend"})(zn||(zn={}));var En;(function(e){e.AppearanceBased="appearanceBased",e.Light="light",e.Dark="dark",e.MediumLight="mediumLight",e.UltraDark="ultraDark",e.Titlebar="titlebar",e.Selection="selection",e.Menu="menu",e.Popover="popover",e.Sidebar="sidebar",e.HeaderView="headerView",e.Sheet="sheet",e.WindowBackground="windowBackground",e.HudWindow="hudWindow",e.FullScreenUI="fullScreenUI",e.Tooltip="tooltip",e.ContentBackground="contentBackground",e.UnderWindowBackground="underWindowBackground",e.UnderPageBackground="underPageBackground",e.Mica="mica",e.Blur="blur",e.Acrylic="acrylic",e.Tabbed="tabbed",e.TabbedDark="tabbedDark",e.TabbedLight="tabbedLight"})(En||(En={}));var Dn;(function(e){e.FollowsWindowActiveState="followsWindowActiveState",e.Active="active",e.Inactive="inactive"})(Dn||(Dn={}));var Ca=Object.defineProperty,Sa=Object.getOwnPropertyDescriptor,kt=(e,t,n,o)=>{for(var r=o>1?void 0:o?Sa(t,n):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(r=(o?l(t,n,r):l(r))||r);return o&&r&&Ca(t,n,r),r};J=class extends Un(Pt){constructor(){super(...arguments),this.acceptedCollaborators=[],this.onbeforeunload=e=>X("Are you sure you want to leave?"),this.unloadSetup=!1}async deleteNote(){try{await this.notesStore.client.deleteNote(this.noteHash),this.dispatchEvent(new CustomEvent("note-deleted",{bubbles:!0,composed:!0,detail:{noteHash:this.noteHash}}))}catch(e){console.error(e),Dt(X("Error deleting the note"))}}async setupUnload(){if(!this.unloadSetup){this.unloadSetup=!0,window.addEventListener("beforeunload",this.onbeforeunload);try{this.unlisten=await Sn().onCloseRequested(async e=>{try{await this.updateNote()}catch{Dt(X("Failed to save note.")),e.preventDefault()}})}catch(e){console.log("Not in a tauri context",e)}}}disconnectedCallback(){super.disconnectedCallback(),this.updateNote(),window.removeEventListener("beforeunload",this.onbeforeunload),this.unlisten&&this.unlisten()}async updateNote(){const e=this.shadowRoot.querySelector("collaborative-document-context").document.docSync(),t=await Pa(this.notesStore.notes.get(this.noteHash).latestVersion);if(ja(t.doc,e).length===0)return;const n=Ha(e);try{const o=await this.notesStore.client.updateNote(this.noteHash,t.previousHashes,n);this.dispatchEvent(new CustomEvent("note-updated",{composed:!0,bubbles:!0,detail:{originalNoteHash:this.noteHash,updatedNoteHash:o.actionHash}}))}catch(o){console.error(o),Dt(X("Error updating the note"))}}renderDetail(e){return j`
			<sl-card style="flex: 1">
				<div class="column" style="gap: 16px; flex: 1; width: 558px">
					<collaborative-document-context
						.sessionId="${D(this.noteHash)}}"
						.acceptedCollaborators=${this.acceptedCollaborators}
						.initialDocument=${e}
						@document-change=${()=>this.setupUnload()}
					>
						<collaborative-prosemirror
							style="font-size: 24px; overflow: auto"
							.schemaSpec=${Wt}
							.path=${["title"]}
							.placeholder=${X("Title")}
						>
						</collaborative-prosemirror>

						<collaborative-prosemirror
							id="body"
							style="flex: 1"
							.schemaSpec=${Wt}
							.styles=${[ni]}
							.plugins=${[new Mn({props:{handleDOMEvents:{mousedown:(t,n)=>{si({view:t,event:{target:n.composedPath()[0],preventDefault:()=>n.preventDefault()}});const o=t.state.schema.nodes.paragraph;let r=t.state.doc.content.size;t.dispatch(t.state.tr.insert(r,o.create())),r=t.state.doc.content.size-t.state.doc.lastChild.nodeSize,t.dispatch(t.state.tr.delete(r,r+1))}}}}),oi(),ri(new li(Wt)),ai(),ii({rules:ci}),Nn(_i),Nn(di)]}
							.path=${["body"]}
							.placeholder=${X("Write your note...")}
						>
						</collaborative-prosemirror>
					</collaborative-document-context>

					<div class="row" style="max-height: 200px; align-items: center">
						<sl-icon-button
							style="font-size: 24px"
							.src=${Fn(ui)}
							@click=${()=>{const t=this.shadowRoot.getElementById("body"),n=t.schema.nodes.list;t.prosemirror.dispatch(t.prosemirror.state.tr.insert(t.prosemirror.state.selection.to,n.createAndFill({kind:"task",checked:!1})))}}
						>
						</sl-icon-button>

						<slot name="footer"></slot>
					</div>
				</div>
			</sl-card>
		`}render(){const e=this.notesStore.notes.get(this.noteHash).latestVersion.get();switch(e.status){case"pending":return j`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;case"error":return j`<display-error
					.headline=${X("Error fetching the note")}
					.error=${e.error}
				></display-error>`;case"completed":return this.renderDetail(e.value.doc)}}},J.styles=[Gn,G`
			:host {
				display: flex;
			}
		`],kt([f(hi("note-hash"))],J.prototype,"noteHash",2),kt([Et({context:fi,subscribe:!0})],J.prototype,"notesStore",2),kt([f()],J.prototype,"acceptedCollaborators",2),J=kt([gi(),Rt("note-detail")],J)})();export{J as NoteDetail,mi as __tla};
