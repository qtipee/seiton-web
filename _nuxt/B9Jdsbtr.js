const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./D_5T05FH.js","./C3Jz3Cf2.js","./DiylWhZt.js","./Dt0qqAj6.js","./D9KVOsHh.js","./S5yHZ_bO.js","./aaBQP10p.js","./dBE_IecR.js","./C_kkB4BP.js","./Ceq8xsyG.js","./BLcGuwlG.js","./DCAgJPg3.js","./DBmQUb37.js","./CJ69zcCP.js","./D9FamLM6.js","./error-404.C3V-3Mc4.css","./C9SIqOJg.js","./error-500.dGVH929u.css"])))=>i.map(i=>d[i]);
var Cw=Object.defineProperty;var kw=(t,e,n)=>e in t?Cw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var St=(t,e,n)=>kw(t,typeof e!="symbol"?e+"":e,n);/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ju(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},Rs=[],gn=()=>{},Nw=()=>!1,lo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Yu=t=>t.startsWith("onUpdate:"),Je=Object.assign,Xu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Dw=Object.prototype.hasOwnProperty,Ce=(t,e)=>Dw.call(t,e),ue=Array.isArray,Ss=t=>uo(t)==="[object Map]",ym=t=>uo(t)==="[object Set]",Ow=t=>uo(t)==="[object RegExp]",pe=t=>typeof t=="function",Fe=t=>typeof t=="string",qn=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",Em=t=>(Le(t)||pe(t))&&pe(t.then)&&pe(t.catch),Tm=Object.prototype.toString,uo=t=>Tm.call(t),Vw=t=>uo(t).slice(8,-1),wm=t=>uo(t)==="[object Object]",Zu=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ps=Ju(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xw=/-(\w)/g,Zt=hc(t=>t.replace(xw,(e,n)=>n?n.toUpperCase():"")),Lw=/\B([A-Z])/g,Rr=hc(t=>t.replace(Lw,"-$1").toLowerCase()),fc=hc(t=>t.charAt(0).toUpperCase()+t.slice(1)),ll=hc(t=>t?`on${fc(t)}`:""),hr=(t,e)=>!Object.is(t,e),Cs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},vm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Hl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Im=t=>{const e=Fe(t)?Number(t):NaN;return isNaN(e)?t:e};let wd;const dc=()=>wd||(wd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pc(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Fe(r)?Bw(r):pc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Fe(t)||Le(t))return t}const Mw=/;(?![^(]*\))/g,Fw=/:([^]+)/,Uw=/\/\*[^]*?\*\//g;function Bw(t){const e={};return t.replace(Uw,"").split(Mw).forEach(n=>{if(n){const r=n.split(Fw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function gc(t){let e="";if(Fe(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=gc(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function jw(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Fe(e)&&(t.class=gc(e)),n&&(t.style=pc(n)),t}const $w="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hw=Ju($w);function Am(t){return!!t||t===""}const bm=t=>!!(t&&t.__v_isRef===!0),qw=t=>Fe(t)?t:t==null?"":ue(t)||Le(t)&&(t.toString===Tm||!pe(t.toString))?bm(t)?qw(t.value):JSON.stringify(t,Rm,2):String(t),Rm=(t,e)=>bm(e)?Rm(t,e.value):Ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ul(r,i)+" =>"]=s,n),{})}:ym(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ul(n))}:qn(e)?ul(e):Le(e)&&!ue(e)&&!wm(e)?String(e):e,ul=(t,e="")=>{var n;return qn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class Sm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function eh(t){return new Sm(t)}function th(){return Ct}function Ww(t,e=!1){Ct&&Ct.cleanups.push(t)}let Oe;const hl=new WeakSet;class Pm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&Ct.active&&Ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,hl.has(this)&&(hl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||km(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vd(this),Nm(this);const e=Oe,n=on;Oe=this,on=!0;try{return this.fn()}finally{Dm(this),Oe=e,on=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)sh(e);this.deps=this.depsTail=void 0,vd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?hl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ql(this)&&this.run()}get dirty(){return ql(this)}}let Cm=0,Pi,Ci;function km(t,e=!1){if(t.flags|=8,e){t.next=Ci,Ci=t;return}t.next=Pi,Pi=t}function nh(){Cm++}function rh(){if(--Cm>0)return;if(Ci){let e=Ci;for(Ci=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Pi;){let e=Pi;for(Pi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Nm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Dm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),sh(r),Kw(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ql(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Om(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Om(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Wi))return;t.globalVersion=Wi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ql(t)){t.flags&=-3;return}const n=Oe,r=on;Oe=t,on=!0;try{Nm(t);const s=t.fn(t._value);(e.version===0||hr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Oe=n,on=r,Dm(t),t.flags&=-3}}function sh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)sh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Kw(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let on=!0;const Vm=[];function Sr(){Vm.push(on),on=!1}function Pr(){const t=Vm.pop();on=t===void 0?!0:t}function vd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let Wi=0;class zw{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ih{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Oe||!on||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new zw(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,xm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,Wi++,this.notify(e)}notify(e){nh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{rh()}}}function xm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)xm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ra=new WeakMap,Wr=Symbol(""),Wl=Symbol(""),Ki=Symbol("");function Tt(t,e,n){if(on&&Oe){let r=Ra.get(t);r||Ra.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ih),s.map=r,s.key=n),s.track()}}function Nn(t,e,n,r,s,i){const o=Ra.get(t);if(!o){Wi++;return}const a=l=>{l&&l.trigger()};if(nh(),e==="clear")o.forEach(a);else{const l=ue(t),u=l&&Zu(n);if(l&&n==="length"){const h=Number(r);o.forEach((d,p)=>{(p==="length"||p===Ki||!qn(p)&&p>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Ki)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Wr)),Ss(t)&&a(o.get(Wl)));break;case"delete":l||(a(o.get(Wr)),Ss(t)&&a(o.get(Wl)));break;case"set":Ss(t)&&a(o.get(Wr));break}}rh()}function Gw(t,e){const n=Ra.get(t);return n&&n.get(e)}function fs(t){const e=Ae(t);return e===t?e:(Tt(e,"iterate",Ki),Yt(t)?e:e.map(wt))}function mc(t){return Tt(t=Ae(t),"iterate",Ki),t}const Qw={__proto__:null,[Symbol.iterator](){return fl(this,Symbol.iterator,wt)},concat(...t){return fs(this).concat(...t.map(e=>ue(e)?fs(e):e))},entries(){return fl(this,"entries",t=>(t[1]=wt(t[1]),t))},every(t,e){return Sn(this,"every",t,e,void 0,arguments)},filter(t,e){return Sn(this,"filter",t,e,n=>n.map(wt),arguments)},find(t,e){return Sn(this,"find",t,e,wt,arguments)},findIndex(t,e){return Sn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Sn(this,"findLast",t,e,wt,arguments)},findLastIndex(t,e){return Sn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Sn(this,"forEach",t,e,void 0,arguments)},includes(...t){return dl(this,"includes",t)},indexOf(...t){return dl(this,"indexOf",t)},join(t){return fs(this).join(t)},lastIndexOf(...t){return dl(this,"lastIndexOf",t)},map(t,e){return Sn(this,"map",t,e,void 0,arguments)},pop(){return mi(this,"pop")},push(...t){return mi(this,"push",t)},reduce(t,...e){return Id(this,"reduce",t,e)},reduceRight(t,...e){return Id(this,"reduceRight",t,e)},shift(){return mi(this,"shift")},some(t,e){return Sn(this,"some",t,e,void 0,arguments)},splice(...t){return mi(this,"splice",t)},toReversed(){return fs(this).toReversed()},toSorted(t){return fs(this).toSorted(t)},toSpliced(...t){return fs(this).toSpliced(...t)},unshift(...t){return mi(this,"unshift",t)},values(){return fl(this,"values",wt)}};function fl(t,e,n){const r=mc(t),s=r[e]();return r!==t&&!Yt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Jw=Array.prototype;function Sn(t,e,n,r,s,i){const o=mc(t),a=o!==t&&!Yt(t),l=o[e];if(l!==Jw[e]){const d=l.apply(t,i);return a?wt(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,wt(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const h=l.call(o,u,r);return a&&s?s(h):h}function Id(t,e,n,r){const s=mc(t);let i=n;return s!==t&&(Yt(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,wt(a),l,t)}),s[e](i,...r)}function dl(t,e,n){const r=Ae(t);Tt(r,"iterate",Ki);const s=r[e](...n);return(s===-1||s===!1)&&ch(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function mi(t,e,n=[]){Sr(),nh();const r=Ae(t)[e].apply(t,n);return rh(),Pr(),r}const Yw=Ju("__proto__,__v_isRef,__isVue"),Lm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qn));function Xw(t){qn(t)||(t=String(t));const e=Ae(this);return Tt(e,"has",t),e.hasOwnProperty(t)}class Mm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?cv:jm:i?Bm:Um).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let l;if(o&&(l=Qw[n]))return l;if(n==="hasOwnProperty")return Xw}const a=Reflect.get(e,n,qe(e)?e:r);return(qn(n)?Lm.has(n):Yw(n))||(s||Tt(e,"get",n),i)?a:qe(a)?o&&Zu(n)?a:a.value:Le(a)?s?$m(a):In(a):a}}class Fm extends Mm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=yr(i);if(!Yt(r)&&!yr(r)&&(i=Ae(i),r=Ae(r)),!ue(e)&&qe(i)&&!qe(r))return l?!1:(i.value=r,!0)}const o=ue(e)&&Zu(n)?Number(n)<e.length:Ce(e,n),a=Reflect.set(e,n,r,qe(e)?e:s);return e===Ae(s)&&(o?hr(r,i)&&Nn(e,"set",n,r):Nn(e,"add",n,r)),a}deleteProperty(e,n){const r=Ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Nn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!qn(n)||!Lm.has(n))&&Tt(e,"has",n),r}ownKeys(e){return Tt(e,"iterate",ue(e)?"length":Wr),Reflect.ownKeys(e)}}class Zw extends Mm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ev=new Fm,tv=new Zw,nv=new Fm(!0);const Kl=t=>t,Ko=t=>Reflect.getPrototypeOf(t);function rv(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=Ss(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Kl:e?zl:wt;return!e&&Tt(i,"iterate",l?Wl:Wr),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function zo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function sv(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),a=Ae(s);t||(hr(s,a)&&Tt(o,"get",s),Tt(o,"get",a));const{has:l}=Ko(o),u=e?Kl:t?zl:wt;if(l.call(o,s))return u(i.get(s));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Tt(Ae(s),"iterate",Wr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ae(i),a=Ae(s);return t||(hr(s,a)&&Tt(o,"has",s),Tt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=Ae(a),u=e?Kl:t?zl:wt;return!t&&Tt(l,"iterate",Wr),a.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return Je(n,t?{add:zo("add"),set:zo("set"),delete:zo("delete"),clear:zo("clear")}:{add(s){!e&&!Yt(s)&&!yr(s)&&(s=Ae(s));const i=Ae(this);return Ko(i).has.call(i,s)||(i.add(s),Nn(i,"add",s,s)),this},set(s,i){!e&&!Yt(i)&&!yr(i)&&(i=Ae(i));const o=Ae(this),{has:a,get:l}=Ko(o);let u=a.call(o,s);u||(s=Ae(s),u=a.call(o,s));const h=l.call(o,s);return o.set(s,i),u?hr(i,h)&&Nn(o,"set",s,i):Nn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:a}=Ko(i);let l=o.call(i,s);l||(s=Ae(s),l=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return l&&Nn(i,"delete",s,void 0),u},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&Nn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=rv(s,t,e)}),n}function oh(t,e){const n=sv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ce(n,s)&&s in r?n:r,s,i)}const iv={get:oh(!1,!1)},ov={get:oh(!1,!0)},av={get:oh(!0,!1)};const Um=new WeakMap,Bm=new WeakMap,jm=new WeakMap,cv=new WeakMap;function lv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uv(t){return t.__v_skip||!Object.isExtensible(t)?0:lv(Vw(t))}function In(t){return yr(t)?t:ah(t,!1,ev,iv,Um)}function On(t){return ah(t,!1,nv,ov,Bm)}function $m(t){return ah(t,!0,tv,av,jm)}function ah(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=uv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Fn(t){return yr(t)?Fn(t.__v_raw):!!(t&&t.__v_isReactive)}function yr(t){return!!(t&&t.__v_isReadonly)}function Yt(t){return!!(t&&t.__v_isShallow)}function ch(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function lh(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&vm(t,"__v_skip",!0),t}const wt=t=>Le(t)?In(t):t,zl=t=>Le(t)?$m(t):t;function qe(t){return t?t.__v_isRef===!0:!1}function ct(t){return Hm(t,!1)}function zi(t){return Hm(t,!0)}function Hm(t,e){return qe(t)?t:new hv(t,e)}class hv{constructor(e,n){this.dep=new ih,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:wt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Yt(e)||yr(e);e=r?e:Ae(e),hr(e,n)&&(this._rawValue=e,this._value=r?e:wt(e),this.dep.trigger())}}function Ve(t){return qe(t)?t.value:t}const fv={get:(t,e,n)=>e==="__v_raw"?t:Ve(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return qe(s)&&!qe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qm(t){return Fn(t)?t:new Proxy(t,fv)}function dv(t){const e=ue(t)?new Array(t.length):{};for(const n in t)e[n]=Km(t,n);return e}class pv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Gw(Ae(this._object),this._key)}}class gv{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Wm(t,e,n){return qe(t)?t:pe(t)?new gv(t):Le(t)&&arguments.length>1?Km(t,e,n):ct(t)}function Km(t,e,n){const r=t[e];return qe(r)?r:new pv(t,e,n)}class mv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ih(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return km(this,!0),!0}get value(){const e=this.dep.track();return Om(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function _v(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new mv(r,s,n)}const Go={},Sa=new WeakMap;let $r;function yv(t,e=!1,n=$r){if(n){let r=Sa.get(n);r||Sa.set(n,r=[]),r.push(t)}}function Ev(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,u=k=>s?k:Yt(k)||s===!1||s===0?Dn(k,1):Dn(k);let h,d,p,m,A=!1,C=!1;if(qe(t)?(d=()=>t.value,A=Yt(t)):Fn(t)?(d=()=>u(t),A=!0):ue(t)?(C=!0,A=t.some(k=>Fn(k)||Yt(k)),d=()=>t.map(k=>{if(qe(k))return k.value;if(Fn(k))return u(k);if(pe(k))return l?l(k,2):k()})):pe(t)?e?d=l?()=>l(t,2):t:d=()=>{if(p){Sr();try{p()}finally{Pr()}}const k=$r;$r=h;try{return l?l(t,3,[m]):t(m)}finally{$r=k}}:d=gn,e&&s){const k=d,O=s===!0?1/0:s;d=()=>Dn(k(),O)}const D=th(),x=()=>{h.stop(),D&&D.active&&Xu(D.effects,h)};if(i&&e){const k=e;e=(...O)=>{k(...O),x()}}let N=C?new Array(t.length).fill(Go):Go;const w=k=>{if(!(!(h.flags&1)||!h.dirty&&!k))if(e){const O=h.run();if(s||A||(C?O.some((L,v)=>hr(L,N[v])):hr(O,N))){p&&p();const L=$r;$r=h;try{const v=[O,N===Go?void 0:C&&N[0]===Go?[]:N,m];l?l(e,3,v):e(...v),N=O}finally{$r=L}}}else h.run()};return a&&a(w),h=new Pm(d),h.scheduler=o?()=>o(w,!1):w,m=k=>yv(k,!1,h),p=h.onStop=()=>{const k=Sa.get(h);if(k){if(l)l(k,4);else for(const O of k)O();Sa.delete(h)}},e?r?w(!0):N=h.run():o?o(w.bind(null,!0),!0):h.run(),x.pause=h.pause.bind(h),x.resume=h.resume.bind(h),x.stop=x,x}function Dn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,qe(t))Dn(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)Dn(t[r],e,n);else if(ym(t)||Ss(t))t.forEach(r=>{Dn(r,e,n)});else if(wm(t)){for(const r in t)Dn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Dn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ho(t,e,n,r){try{return r?t(...r):t()}catch(s){Js(s,e,n)}}function an(t,e,n,r){if(pe(t)){const s=ho(t,e,n,r);return s&&Em(s)&&s.catch(i=>{Js(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(an(t[i],e,n,r));return s}}function Js(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||De;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,u)===!1)return}a=a.parent}if(i){Sr(),ho(i,null,10,[t,l,u]),Pr();return}}Tv(t,n,s,r,o)}function Tv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const kt=[];let hn=-1;const ks=[];let er=null,gs=0;const zm=Promise.resolve();let Pa=null;function ts(t){const e=Pa||zm;return t?e.then(this?t.bind(this):t):e}function wv(t){let e=hn+1,n=kt.length;for(;e<n;){const r=e+n>>>1,s=kt[r],i=Gi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function uh(t){if(!(t.flags&1)){const e=Gi(t),n=kt[kt.length-1];!n||!(t.flags&2)&&e>=Gi(n)?kt.push(t):kt.splice(wv(e),0,t),t.flags|=1,Gm()}}function Gm(){Pa||(Pa=zm.then(Qm))}function Gl(t){ue(t)?ks.push(...t):er&&t.id===-1?er.splice(gs+1,0,t):t.flags&1||(ks.push(t),t.flags|=1),Gm()}function Ad(t,e,n=hn+1){for(;n<kt.length;n++){const r=kt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;kt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ca(t){if(ks.length){const e=[...new Set(ks)].sort((n,r)=>Gi(n)-Gi(r));if(ks.length=0,er){er.push(...e);return}for(er=e,gs=0;gs<er.length;gs++){const n=er[gs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}er=null,gs=0}}const Gi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Qm(t){try{for(hn=0;hn<kt.length;hn++){const e=kt[hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ho(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;hn<kt.length;hn++){const e=kt[hn];e&&(e.flags&=-2)}hn=-1,kt.length=0,Ca(),Pa=null,(kt.length||ks.length)&&Qm()}}let tt=null,Jm=null;function ka(t){const e=tt;return tt=t,Jm=t&&t.type.__scopeId||null,e}function hh(t,e=tt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ud(-1);const i=ka(e);let o;try{o=t(...s)}finally{ka(i),r._d&&Ud(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function hx(t,e){if(tt===null)return t;const n=wc(tt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=De]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Dn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function fn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Sr(),an(l,n,8,[t.el,a,t,e]),Pr())}}const Ym=Symbol("_vte"),Xm=t=>t.__isTeleport,ki=t=>t&&(t.disabled||t.disabled===""),bd=t=>t&&(t.defer||t.defer===""),Rd=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Sd=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Ql=(t,e)=>{const n=t&&t.to;return Fe(n)?e?e(n):null:n},Zm={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,u){const{mc:h,pc:d,pbc:p,o:{insert:m,querySelector:A,createText:C,createComment:D}}=u,x=ki(e.props);let{shapeFlag:N,children:w,dynamicChildren:k}=e;if(t==null){const O=e.el=C(""),L=e.anchor=C("");m(O,n,r),m(L,n,r);const v=(_,T)=>{N&16&&(s&&s.isCE&&(s.ce._teleportTarget=_),h(w,_,T,s,i,o,a,l))},y=()=>{const _=e.target=Ql(e.props,A),T=e_(_,e,C,m);_&&(o!=="svg"&&Rd(_)?o="svg":o!=="mathml"&&Sd(_)&&(o="mathml"),x||(v(_,T),la(e,!1)))};x&&(v(n,L),la(e,!0)),bd(e.props)?Ye(()=>{y(),e.el.__isMounted=!0},i):y()}else{if(bd(e.props)&&!t.el.__isMounted){Ye(()=>{Zm.process(t,e,n,r,s,i,o,a,l,u),delete t.el.__isMounted},i);return}e.el=t.el,e.targetStart=t.targetStart;const O=e.anchor=t.anchor,L=e.target=t.target,v=e.targetAnchor=t.targetAnchor,y=ki(t.props),_=y?n:L,T=y?O:v;if(o==="svg"||Rd(L)?o="svg":(o==="mathml"||Sd(L))&&(o="mathml"),k?(p(t.dynamicChildren,k,_,s,i,o,a),yh(t,e,!0)):l||d(t,e,_,T,s,i,o,a,!1),x)y?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Qo(e,n,O,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const S=e.target=Ql(e.props,A);S&&Qo(e,S,null,u,0)}else y&&Qo(e,L,v,u,1);la(e,x)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:l,targetStart:u,targetAnchor:h,target:d,props:p}=t;if(d&&(s(u),s(h)),i&&s(l),o&16){const m=i||!ki(p);for(let A=0;A<a.length;A++){const C=a[A];r(C,e,n,m,!!C.dynamicChildren)}}},move:Qo,hydrate:vv};function Qo(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:u,props:h}=t,d=i===2;if(d&&r(o,e,n),(!d||ki(h))&&l&16)for(let p=0;p<u.length;p++)s(u[p],e,n,2);d&&r(a,e,n)}function vv(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:u,createText:h}},d){const p=e.target=Ql(e.props,l);if(p){const m=ki(e.props),A=p._lpa||p.firstChild;if(e.shapeFlag&16)if(m)e.anchor=d(o(t),e,a(t),n,r,s,i),e.targetStart=A,e.targetAnchor=A&&o(A);else{e.anchor=o(t);let C=A;for(;C;){if(C&&C.nodeType===8){if(C.data==="teleport start anchor")e.targetStart=C;else if(C.data==="teleport anchor"){e.targetAnchor=C,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}C=o(C)}e.targetAnchor||e_(p,e,h,u),d(A&&o(A),e,p,n,r,s,i)}la(e,m)}return e.anchor&&o(e.anchor)}const fx=Zm;function la(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function e_(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[Ym]=i,t&&(r(s,t),r(i,t)),i}const tr=Symbol("_leaveCb"),Jo=Symbol("_enterCb");function Iv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dh(()=>{t.isMounted=!0}),ph(()=>{t.isUnmounting=!0}),t}const Gt=[Function,Array],t_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},n_=t=>{const e=t.subTree;return e.component?n_(e.component):e},Av={name:"BaseTransition",props:t_,setup(t,{slots:e}){const n=Tc(),r=Iv();return()=>{const s=e.default&&i_(e.default(),!0);if(!s||!s.length)return;const i=r_(s),o=Ae(t),{mode:a}=o;if(r.isLeaving)return pl(i);const l=Pd(i);if(!l)return pl(i);let u=Jl(l,o,r,n,d=>u=d);l.type!==Xe&&Ms(l,u);let h=n.subTree&&Pd(n.subTree);if(h&&h.type!==Xe&&!sn(l,h)&&n_(n).type!==Xe){let d=Jl(h,o,r,n);if(Ms(h,d),a==="out-in"&&l.type!==Xe)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},pl(i);a==="in-out"&&l.type!==Xe?d.delayLeave=(p,m,A)=>{const C=s_(r,h);C[String(h.key)]=h,p[tr]=()=>{m(),p[tr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{A(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function r_(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Xe){e=n;break}}return e}const bv=Av;function s_(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Jl(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:m,onAfterLeave:A,onLeaveCancelled:C,onBeforeAppear:D,onAppear:x,onAfterAppear:N,onAppearCancelled:w}=e,k=String(t.key),O=s_(n,t),L=(_,T)=>{_&&an(_,r,9,T)},v=(_,T)=>{const S=T[1];L(_,T),ue(_)?_.every(R=>R.length<=1)&&S():_.length<=1&&S()},y={mode:o,persisted:a,beforeEnter(_){let T=l;if(!n.isMounted)if(i)T=D||l;else return;_[tr]&&_[tr](!0);const S=O[k];S&&sn(t,S)&&S.el[tr]&&S.el[tr](),L(T,[_])},enter(_){let T=u,S=h,R=d;if(!n.isMounted)if(i)T=x||u,S=N||h,R=w||d;else return;let I=!1;const ge=_[Jo]=_e=>{I||(I=!0,_e?L(R,[_]):L(S,[_]),y.delayedLeave&&y.delayedLeave(),_[Jo]=void 0)};T?v(T,[_,ge]):ge()},leave(_,T){const S=String(t.key);if(_[Jo]&&_[Jo](!0),n.isUnmounting)return T();L(p,[_]);let R=!1;const I=_[tr]=ge=>{R||(R=!0,T(),ge?L(C,[_]):L(A,[_]),_[tr]=void 0,O[S]===t&&delete O[S])};O[S]=t,m?v(m,[_,I]):I()},clone(_){const T=Jl(_,e,n,r,s);return s&&s(T),T}};return y}function pl(t){if(fo(t))return t=Un(t),t.children=null,t}function Pd(t){if(!fo(t))return Xm(t.type)&&t.children?r_(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function Ms(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ms(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function i_(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===vt?(o.patchFlag&128&&s++,r=r.concat(i_(o.children,e,a))):(e||o.type!==Xe)&&r.push(a!=null?Un(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Cr(t,e){return pe(t)?Je({name:t.name},e,{setup:t}):t}function dx(){const t=Tc();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function fh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Qi(t,e,n,r,s=!1){if(ue(t)){t.forEach((A,C)=>Qi(A,e&&(ue(e)?e[C]:e),n,r,s));return}if(fr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Qi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?wc(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===De?a.refs={}:a.refs,d=a.setupState,p=Ae(d),m=d===De?()=>!1:A=>Ce(p,A);if(u!=null&&u!==l&&(Fe(u)?(h[u]=null,m(u)&&(d[u]=null)):qe(u)&&(u.value=null)),pe(l))ho(l,a,12,[o,h]);else{const A=Fe(l),C=qe(l);if(A||C){const D=()=>{if(t.f){const x=A?m(l)?d[l]:h[l]:l.value;s?ue(x)&&Xu(x,i):ue(x)?x.includes(i)||x.push(i):A?(h[l]=[i],m(l)&&(d[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else A?(h[l]=o,m(l)&&(d[l]=o)):C&&(l.value=o,t.k&&(h[t.k]=o))};o?(D.id=-1,Ye(D,n)):D()}}}let Cd=!1;const ds=()=>{Cd||(console.error("Hydration completed but contains mismatches."),Cd=!0)},Rv=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",Sv=t=>t.namespaceURI.includes("MathML"),Yo=t=>{if(t.nodeType===1){if(Rv(t))return"svg";if(Sv(t))return"mathml"}},vs=t=>t.nodeType===8;function Pv(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(w,k)=>{if(!k.hasChildNodes()){n(null,w,k),Ca(),k._vnode=w;return}d(k.firstChild,w,null,null,null),Ca(),k._vnode=w},d=(w,k,O,L,v,y=!1)=>{y=y||!!k.dynamicChildren;const _=vs(w)&&w.data==="[",T=()=>C(w,k,O,L,v,_),{type:S,ref:R,shapeFlag:I,patchFlag:ge}=k;let _e=w.nodeType;k.el=w,ge===-2&&(y=!1,k.dynamicChildren=null);let X=null;switch(S){case Qr:_e!==3?k.children===""?(l(k.el=s(""),o(w),w),X=w):X=T():(w.data!==k.children&&(ds(),w.data=k.children),X=i(w));break;case Xe:N(w)?(X=i(w),x(k.el=w.content.firstChild,w,O)):_e!==8||_?X=T():X=i(w);break;case Di:if(_&&(w=i(w),_e=w.nodeType),_e===1||_e===3){X=w;const re=!k.children.length;for(let te=0;te<k.staticCount;te++)re&&(k.children+=X.nodeType===1?X.outerHTML:X.data),te===k.staticCount-1&&(k.anchor=X),X=i(X);return _?i(X):X}else T();break;case vt:_?X=A(w,k,O,L,v,y):X=T();break;default:if(I&1)(_e!==1||k.type.toLowerCase()!==w.tagName.toLowerCase())&&!N(w)?X=T():X=p(w,k,O,L,v,y);else if(I&6){k.slotScopeIds=v;const re=o(w);if(_?X=D(w):vs(w)&&w.data==="teleport start"?X=D(w,w.data,"teleport end"):X=i(w),e(k,re,null,O,L,Yo(re),y),fr(k)&&!k.type.__asyncResolved){let te;_?(te=He(vt),te.anchor=X?X.previousSibling:re.lastChild):te=w.nodeType===3?M_(""):He("div"),te.el=w,k.component.subTree=te}}else I&64?_e!==8?X=T():X=k.type.hydrate(w,k,O,L,v,y,t,m):I&128&&(X=k.type.hydrate(w,k,O,L,Yo(o(w)),v,y,t,d))}return R!=null&&Qi(R,null,L,k),X},p=(w,k,O,L,v,y)=>{y=y||!!k.dynamicChildren;const{type:_,props:T,patchFlag:S,shapeFlag:R,dirs:I,transition:ge}=k,_e=_==="input"||_==="option";if(_e||S!==-1){I&&fn(k,null,O,"created");let X=!1;if(N(w)){X=R_(null,ge)&&O&&O.vnode.props&&O.vnode.props.appear;const te=w.content.firstChild;X&&ge.beforeEnter(te),x(te,w,O),k.el=w=te}if(R&16&&!(T&&(T.innerHTML||T.textContent))){let te=m(w.firstChild,k,w,O,L,v,y);for(;te;){Xo(w,1)||ds();const Be=te;te=te.nextSibling,a(Be)}}else if(R&8){let te=k.children;te[0]===`
`&&(w.tagName==="PRE"||w.tagName==="TEXTAREA")&&(te=te.slice(1)),w.textContent!==te&&(Xo(w,0)||ds(),w.textContent=k.children)}if(T){if(_e||!y||S&48){const te=w.tagName.includes("-");for(const Be in T)(_e&&(Be.endsWith("value")||Be==="indeterminate")||lo(Be)&&!Ps(Be)||Be[0]==="."||te)&&r(w,Be,null,T[Be],void 0,O)}else if(T.onClick)r(w,"onClick",null,T.onClick,void 0,O);else if(S&4&&Fn(T.style))for(const te in T.style)T.style[te]}let re;(re=T&&T.onVnodeBeforeMount)&&Lt(re,O,k),I&&fn(k,null,O,"beforeMount"),((re=T&&T.onVnodeMounted)||I||X)&&N_(()=>{re&&Lt(re,O,k),X&&ge.enter(w),I&&fn(k,null,O,"mounted")},L)}return w.nextSibling},m=(w,k,O,L,v,y,_)=>{_=_||!!k.dynamicChildren;const T=k.children,S=T.length;for(let R=0;R<S;R++){const I=_?T[R]:T[R]=Ht(T[R]),ge=I.type===Qr;w?(ge&&!_&&R+1<S&&Ht(T[R+1]).type===Qr&&(l(s(w.data.slice(I.children.length)),O,i(w)),w.data=I.children),w=d(w,I,L,v,y,_)):ge&&!I.children?l(I.el=s(""),O):(Xo(O,1)||ds(),n(null,I,O,null,L,v,Yo(O),y))}return w},A=(w,k,O,L,v,y)=>{const{slotScopeIds:_}=k;_&&(v=v?v.concat(_):_);const T=o(w),S=m(i(w),k,T,O,L,v,y);return S&&vs(S)&&S.data==="]"?i(k.anchor=S):(ds(),l(k.anchor=u("]"),T,S),S)},C=(w,k,O,L,v,y)=>{if(Xo(w.parentElement,1)||ds(),k.el=null,y){const S=D(w);for(;;){const R=i(w);if(R&&R!==S)a(R);else break}}const _=i(w),T=o(w);return a(w),n(null,k,T,_,O,L,Yo(T),v),O&&(O.vnode.el=k.el,Ec(O,k.el)),_},D=(w,k="[",O="]")=>{let L=0;for(;w;)if(w=i(w),w&&vs(w)&&(w.data===k&&L++,w.data===O)){if(L===0)return i(w);L--}return w},x=(w,k,O)=>{const L=k.parentNode;L&&L.replaceChild(w,k);let v=O;for(;v;)v.vnode.el===k&&(v.vnode.el=v.subTree.el=w),v=v.parent},N=w=>w.nodeType===1&&w.tagName==="TEMPLATE";return[h,d]}const kd="data-allow-mismatch",Cv={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Xo(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(kd);)t=t.parentElement;const n=t&&t.getAttribute(kd);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(Cv[e])}}dc().requestIdleCallback;dc().cancelIdleCallback;function kv(t,e){if(vs(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(vs(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const fr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Na(t){pe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:l}=t;let u=null,h,d=0;const p=()=>(d++,u=null,m()),m=()=>{let A;return u||(A=u=e().catch(C=>{if(C=C instanceof Error?C:new Error(String(C)),l)return new Promise((D,x)=>{l(C,()=>D(p()),()=>x(C),d+1)});throw C}).then(C=>A!==u&&u?u:(C&&(C.__esModule||C[Symbol.toStringTag]==="Module")&&(C=C.default),h=C,C)))};return Cr({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(A,C,D){const x=i?()=>{const N=i(D,w=>kv(A,w));N&&(C.bum||(C.bum=[])).push(N)}:D;h?x():m().then(()=>!C.isUnmounted&&x())},get __asyncResolved(){return h},setup(){const A=Ze;if(fh(A),h)return()=>gl(h,A);const C=w=>{u=null,Js(w,A,13,!r)};if(a&&A.suspense||Us)return m().then(w=>()=>gl(w,A)).catch(w=>(C(w),()=>r?He(r,{error:w}):null));const D=ct(!1),x=ct(),N=ct(!!s);return s&&setTimeout(()=>{N.value=!1},s),o!=null&&setTimeout(()=>{if(!D.value&&!x.value){const w=new Error(`Async component timed out after ${o}ms.`);C(w),x.value=w}},o),m().then(()=>{D.value=!0,A.parent&&fo(A.parent.vnode)&&A.parent.update()}).catch(w=>{C(w),x.value=w}),()=>{if(D.value&&h)return gl(h,A);if(x.value&&r)return He(r,{error:x.value});if(n&&!N.value)return He(n)}}})}function gl(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=He(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const fo=t=>t.type.__isKeepAlive,Nv={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Tc(),r=n.ctx;if(!r.renderer)return()=>{const N=e.default&&e.default();return N&&N.length===1?N[0]:N};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:d}}}=r,p=d("div");r.activate=(N,w,k,O,L)=>{const v=N.component;u(N,w,k,0,a),l(v.vnode,N,w,k,v,a,O,N.slotScopeIds,L),Ye(()=>{v.isDeactivated=!1,v.a&&Cs(v.a);const y=N.props&&N.props.onVnodeMounted;y&&Lt(y,v.parent,N)},a)},r.deactivate=N=>{const w=N.component;Oa(w.m),Oa(w.a),u(N,p,null,1,a),Ye(()=>{w.da&&Cs(w.da);const k=N.props&&N.props.onVnodeUnmounted;k&&Lt(k,w.parent,N),w.isDeactivated=!0},a)};function m(N){ml(N),h(N,n,a,!0)}function A(N){s.forEach((w,k)=>{const O=su(w.type);O&&!N(O)&&C(k)})}function C(N){const w=s.get(N);w&&(!o||!sn(w,o))?m(w):o&&ml(o),s.delete(N),i.delete(N)}Gr(()=>[t.include,t.exclude],([N,w])=>{N&&A(k=>Ti(N,k)),w&&A(k=>!Ti(w,k))},{flush:"post",deep:!0});let D=null;const x=()=>{D!=null&&(Va(n.subTree.type)?Ye(()=>{s.set(D,Zo(n.subTree))},n.subTree.suspense):s.set(D,Zo(n.subTree)))};return dh(x),a_(x),ph(()=>{s.forEach(N=>{const{subTree:w,suspense:k}=n,O=Zo(w);if(N.type===O.type&&N.key===O.key){ml(O);const L=O.component.da;L&&Ye(L,k);return}m(N)})}),()=>{if(D=null,!e.default)return o=null;const N=e.default(),w=N[0];if(N.length>1)return o=null,N;if(!Jr(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return o=null,w;let k=Zo(w);if(k.type===Xe)return o=null,k;const O=k.type,L=su(fr(k)?k.type.__asyncResolved||{}:O),{include:v,exclude:y,max:_}=t;if(v&&(!L||!Ti(v,L))||y&&L&&Ti(y,L))return k.shapeFlag&=-257,o=k,w;const T=k.key==null?O:k.key,S=s.get(T);return k.el&&(k=Un(k),w.shapeFlag&128&&(w.ssContent=k)),D=T,S?(k.el=S.el,k.component=S.component,k.transition&&Ms(k,k.transition),k.shapeFlag|=512,i.delete(T),i.add(T)):(i.add(T),_&&i.size>parseInt(_,10)&&C(i.values().next().value)),k.shapeFlag|=256,o=k,Va(w.type)?w:k}}},Dv=Nv;function Ti(t,e){return ue(t)?t.some(n=>Ti(n,e)):Fe(t)?t.split(",").includes(e):Ow(t)?(t.lastIndex=0,t.test(e)):!1}function Ov(t,e){o_(t,"a",e)}function Vv(t,e){o_(t,"da",e)}function o_(t,e,n=Ze){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(_c(e,r,n),n){let s=n.parent;for(;s&&s.parent;)fo(s.parent.vnode)&&xv(r,e,n,s),s=s.parent}}function xv(t,e,n,r){const s=_c(e,t,r,!0);c_(()=>{Xu(r[e],s)},n)}function ml(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Zo(t){return t.shapeFlag&128?t.ssContent:t}function _c(t,e,n=Ze,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Sr();const a=po(n),l=an(e,n,t,o);return a(),Pr(),l});return r?s.unshift(i):s.push(i),i}}const Wn=t=>(e,n=Ze)=>{(!Us||t==="sp")&&_c(t,(...r)=>e(...r),n)},Lv=Wn("bm"),dh=Wn("m"),Mv=Wn("bu"),a_=Wn("u"),ph=Wn("bum"),c_=Wn("um"),Fv=Wn("sp"),Uv=Wn("rtg"),Bv=Wn("rtc");function l_(t,e=Ze){_c("ec",t,e)}const u_="components";function px(t,e){return f_(u_,t,!0,e)||t}const h_=Symbol.for("v-ndc");function jv(t){return Fe(t)?f_(u_,t,!1)||t:t||h_}function f_(t,e,n=!0,r=!1){const s=tt||Ze;if(s){const i=s.type;{const a=su(i,!1);if(a&&(a===e||a===Zt(e)||a===fc(Zt(e))))return i}const o=Nd(s[t]||i[t],e)||Nd(s.appContext[t],e);return!o&&r?i:o}}function Nd(t,e){return t&&(t[e]||t[Zt(e)]||t[fc(Zt(e))])}function gx(t,e,n,r){let s;const i=n,o=ue(t);if(o||Fe(t)){const a=o&&Fn(t);let l=!1;a&&(l=!Yt(t),t=mc(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(l?wt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}function mx(t,e,n={},r,s){if(tt.ce||tt.parent&&fr(tt.parent)&&tt.parent.ce)return Jt(),pn(vt,null,[He("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),Jt();const o=i&&d_(i(n)),a=n.key||o&&o.key,l=pn(vt,{key:(a&&!qn(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function d_(t){return t.some(e=>Jr(e)?!(e.type===Xe||e.type===vt&&!d_(e.children)):!0)?t:null}const Yl=t=>t?U_(t)?wc(t):Yl(t.parent):null,Ni=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yl(t.parent),$root:t=>Yl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>gh(t),$forceUpdate:t=>t.f||(t.f=()=>{uh(t.update)}),$nextTick:t=>t.n||(t.n=ts.bind(t.proxy)),$watch:t=>aI.bind(t)}),_l=(t,e)=>t!==De&&!t.__isScriptSetup&&Ce(t,e),$v={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(_l(r,e))return o[e]=1,r[e];if(s!==De&&Ce(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ce(u,e))return o[e]=3,i[e];if(n!==De&&Ce(n,e))return o[e]=4,n[e];Xl&&(o[e]=0)}}const h=Ni[e];let d,p;if(h)return e==="$attrs"&&Tt(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==De&&Ce(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Ce(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return _l(s,e)?(s[e]=n,!0):r!==De&&Ce(r,e)?(r[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==De&&Ce(t,o)||_l(e,o)||(a=i[0])&&Ce(a,o)||Ce(r,o)||Ce(Ni,o)||Ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Dd(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xl=!0;function Hv(t){const e=gh(t),n=t.proxy,r=t.ctx;Xl=!1,e.beforeCreate&&Od(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:m,updated:A,activated:C,deactivated:D,beforeDestroy:x,beforeUnmount:N,destroyed:w,unmounted:k,render:O,renderTracked:L,renderTriggered:v,errorCaptured:y,serverPrefetch:_,expose:T,inheritAttrs:S,components:R,directives:I,filters:ge}=e;if(u&&qv(u,r,null),o)for(const re in o){const te=o[re];pe(te)&&(r[re]=te.bind(n))}if(s){const re=s.call(n,n);Le(re)&&(t.data=In(re))}if(Xl=!0,i)for(const re in i){const te=i[re],Be=pe(te)?te.bind(n,n):pe(te.get)?te.get.bind(n,n):gn,tn=!pe(te)&&pe(te.set)?te.set.bind(n):gn,Kt=at({get:Be,set:tn});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:je=>Kt.value=je})}if(a)for(const re in a)p_(a[re],r,n,re);if(l){const re=pe(l)?l.call(n):l;Reflect.ownKeys(re).forEach(te=>{zr(te,re[te])})}h&&Od(h,t,"c");function X(re,te){ue(te)?te.forEach(Be=>re(Be.bind(n))):te&&re(te.bind(n))}if(X(Lv,d),X(dh,p),X(Mv,m),X(a_,A),X(Ov,C),X(Vv,D),X(l_,y),X(Bv,L),X(Uv,v),X(ph,N),X(c_,k),X(Fv,_),ue(T))if(T.length){const re=t.exposed||(t.exposed={});T.forEach(te=>{Object.defineProperty(re,te,{get:()=>n[te],set:Be=>n[te]=Be})})}else t.exposed||(t.exposed={});O&&t.render===gn&&(t.render=O),S!=null&&(t.inheritAttrs=S),R&&(t.components=R),I&&(t.directives=I),_&&fh(t)}function qv(t,e,n=gn){ue(t)&&(t=Zl(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=It(s.from||r,s.default,!0):i=It(s.from||r):i=It(s),qe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Od(t,e,n){an(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function p_(t,e,n,r){let s=r.includes(".")?P_(n,r):()=>n[r];if(Fe(t)){const i=e[t];pe(i)&&Gr(s,i)}else if(pe(t))Gr(s,t.bind(n));else if(Le(t))if(ue(t))t.forEach(i=>p_(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Gr(s,i,t)}}function gh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Da(l,u,o,!0)),Da(l,e,o)),Le(e)&&i.set(e,l),l}function Da(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Da(t,i,n,!0),s&&s.forEach(o=>Da(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Wv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Wv={data:Vd,props:xd,emits:xd,methods:wi,computed:wi,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:wi,directives:wi,watch:zv,provide:Vd,inject:Kv};function Vd(t,e){return e?t?function(){return Je(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function Kv(t,e){return wi(Zl(t),Zl(e))}function Zl(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pt(t,e){return t?[...new Set([].concat(t,e))]:e}function wi(t,e){return t?Je(Object.create(null),t,e):e}function xd(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:Je(Object.create(null),Dd(t),Dd(e??{})):e}function zv(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=Pt(t[r],e[r]);return n}function g_(){return{app:null,config:{isNativeTag:Nw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gv=0;function Qv(t,e){return function(r,s=null){pe(r)||(r=Je({},r)),s!=null&&!Le(s)&&(s=null);const i=g_(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:Gv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:j_,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&pe(h.install)?(o.add(h),h.install(u,...d)):pe(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,p){if(!l){const m=u._ceVNode||He(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(m,h):t(m,h,p),l=!0,u._container=h,h.__vue_app__=u,wc(m.component)}},onUnmount(h){a.push(h)},unmount(){l&&(an(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=Kr;Kr=u;try{return h()}finally{Kr=d}}};return u}}let Kr=null;function zr(t,e){if(Ze){let n=Ze.provides;const r=Ze.parent&&Ze.parent.provides;r===n&&(n=Ze.provides=Object.create(r)),n[t]=e}}function It(t,e,n=!1){const r=Ze||tt;if(r||Kr){const s=Kr?Kr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function mh(){return!!(Ze||tt||Kr)}const m_={},__=()=>Object.create(m_),y_=t=>Object.getPrototypeOf(t)===m_;function Jv(t,e,n,r=!1){const s={},i=__();t.propsDefaults=Object.create(null),E_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:On(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Yv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ae(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(yc(t.emitsOptions,p))continue;const m=e[p];if(l)if(Ce(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const A=Zt(p);s[A]=eu(l,a,A,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{E_(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!Ce(e,d)&&((h=Rr(d))===d||!Ce(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=eu(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Ce(e,d))&&(delete i[d],u=!0)}u&&Nn(t.attrs,"set","")}function E_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ps(l))continue;const u=e[l];let h;s&&Ce(s,h=Zt(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:yc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ae(n),u=a||De;for(let h=0;h<i.length;h++){const d=i[h];n[d]=eu(s,l,d,u[d],t,!Ce(u,d))}}return o}function eu(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ce(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=po(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Rr(n))&&(r=!0))}return r}const Xv=new WeakMap;function T_(t,e,n=!1){const r=n?Xv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!pe(t)){const h=d=>{l=!0;const[p,m]=T_(d,e,!0);Je(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Le(t)&&r.set(t,Rs),Rs;if(ue(i))for(let h=0;h<i.length;h++){const d=Zt(i[h]);Ld(d)&&(o[d]=De)}else if(i)for(const h in i){const d=Zt(h);if(Ld(d)){const p=i[h],m=o[d]=ue(p)||pe(p)?{type:p}:Je({},p),A=m.type;let C=!1,D=!0;if(ue(A))for(let x=0;x<A.length;++x){const N=A[x],w=pe(N)&&N.name;if(w==="Boolean"){C=!0;break}else w==="String"&&(D=!1)}else C=pe(A)&&A.name==="Boolean";m[0]=C,m[1]=D,(C||Ce(m,"default"))&&a.push(d)}}const u=[o,a];return Le(t)&&r.set(t,u),u}function Ld(t){return t[0]!=="$"&&!Ps(t)}const w_=t=>t[0]==="_"||t==="$stable",_h=t=>ue(t)?t.map(Ht):[Ht(t)],Zv=(t,e,n)=>{if(e._n)return e;const r=hh((...s)=>_h(e(...s)),n);return r._c=!1,r},v_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(w_(s))continue;const i=t[s];if(pe(i))e[s]=Zv(s,i,r);else if(i!=null){const o=_h(i);e[s]=()=>o}}},I_=(t,e)=>{const n=_h(e);t.slots.default=()=>n},A_=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},eI=(t,e,n)=>{const r=t.slots=__();if(t.vnode.shapeFlag&32){const s=e._;s?(A_(r,e,n),n&&vm(r,"_",s,!0)):v_(e,r)}else e&&I_(t,e)},tI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=De;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:A_(s,e,n):(i=!e.$stable,v_(e,s)),o=e}else e&&(I_(t,e),o={default:1});if(i)for(const a in s)!w_(a)&&o[a]==null&&delete s[a]},Ye=N_;function nI(t){return b_(t)}function rI(t){return b_(t,Pv)}function b_(t,e){const n=dc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:m=gn,insertStaticContent:A}=t,C=(b,P,M,H=null,U=null,q=null,Q=void 0,z=null,K=!!P.dynamicChildren)=>{if(b===P)return;b&&!sn(b,P)&&(H=B(b),je(b,U,q,!0),b=null),P.patchFlag===-2&&(K=!1,P.dynamicChildren=null);const{type:W,ref:ae,shapeFlag:Y}=P;switch(W){case Qr:D(b,P,M,H);break;case Xe:x(b,P,M,H);break;case Di:b==null&&N(P,M,H,Q);break;case vt:R(b,P,M,H,U,q,Q,z,K);break;default:Y&1?O(b,P,M,H,U,q,Q,z,K):Y&6?I(b,P,M,H,U,q,Q,z,K):(Y&64||Y&128)&&W.process(b,P,M,H,U,q,Q,z,K,ne)}ae!=null&&U&&Qi(ae,b&&b.ref,q,P||b,!P)},D=(b,P,M,H)=>{if(b==null)r(P.el=a(P.children),M,H);else{const U=P.el=b.el;P.children!==b.children&&u(U,P.children)}},x=(b,P,M,H)=>{b==null?r(P.el=l(P.children||""),M,H):P.el=b.el},N=(b,P,M,H)=>{[b.el,b.anchor]=A(b.children,P,M,H,b.el,b.anchor)},w=({el:b,anchor:P},M,H)=>{let U;for(;b&&b!==P;)U=p(b),r(b,M,H),b=U;r(P,M,H)},k=({el:b,anchor:P})=>{let M;for(;b&&b!==P;)M=p(b),s(b),b=M;s(P)},O=(b,P,M,H,U,q,Q,z,K)=>{P.type==="svg"?Q="svg":P.type==="math"&&(Q="mathml"),b==null?L(P,M,H,U,q,Q,z,K):_(b,P,U,q,Q,z,K)},L=(b,P,M,H,U,q,Q,z)=>{let K,W;const{props:ae,shapeFlag:Y,transition:oe,dirs:se}=b;if(K=b.el=o(b.type,q,ae&&ae.is,ae),Y&8?h(K,b.children):Y&16&&y(b.children,K,null,H,U,yl(b,q),Q,z),se&&fn(b,null,H,"created"),v(K,b,b.scopeId,Q,H),ae){for(const Se in ae)Se!=="value"&&!Ps(Se)&&i(K,Se,null,ae[Se],q,H);"value"in ae&&i(K,"value",null,ae.value,q),(W=ae.onVnodeBeforeMount)&&Lt(W,H,b)}se&&fn(b,null,H,"beforeMount");const he=R_(U,oe);he&&oe.beforeEnter(K),r(K,P,M),((W=ae&&ae.onVnodeMounted)||he||se)&&Ye(()=>{W&&Lt(W,H,b),he&&oe.enter(K),se&&fn(b,null,H,"mounted")},U)},v=(b,P,M,H,U)=>{if(M&&m(b,M),H)for(let q=0;q<H.length;q++)m(b,H[q]);if(U){let q=U.subTree;if(P===q||Va(q.type)&&(q.ssContent===P||q.ssFallback===P)){const Q=U.vnode;v(b,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},y=(b,P,M,H,U,q,Q,z,K=0)=>{for(let W=K;W<b.length;W++){const ae=b[W]=z?nr(b[W]):Ht(b[W]);C(null,ae,P,M,H,U,q,Q,z)}},_=(b,P,M,H,U,q,Q)=>{const z=P.el=b.el;let{patchFlag:K,dynamicChildren:W,dirs:ae}=P;K|=b.patchFlag&16;const Y=b.props||De,oe=P.props||De;let se;if(M&&Mr(M,!1),(se=oe.onVnodeBeforeUpdate)&&Lt(se,M,P,b),ae&&fn(P,b,M,"beforeUpdate"),M&&Mr(M,!0),(Y.innerHTML&&oe.innerHTML==null||Y.textContent&&oe.textContent==null)&&h(z,""),W?T(b.dynamicChildren,W,z,M,H,yl(P,U),q):Q||te(b,P,z,null,M,H,yl(P,U),q,!1),K>0){if(K&16)S(z,Y,oe,M,U);else if(K&2&&Y.class!==oe.class&&i(z,"class",null,oe.class,U),K&4&&i(z,"style",Y.style,oe.style,U),K&8){const he=P.dynamicProps;for(let Se=0;Se<he.length;Se++){const be=he[Se],pt=Y[be],st=oe[be];(st!==pt||be==="value")&&i(z,be,pt,st,U,M)}}K&1&&b.children!==P.children&&h(z,P.children)}else!Q&&W==null&&S(z,Y,oe,M,U);((se=oe.onVnodeUpdated)||ae)&&Ye(()=>{se&&Lt(se,M,P,b),ae&&fn(P,b,M,"updated")},H)},T=(b,P,M,H,U,q,Q)=>{for(let z=0;z<P.length;z++){const K=b[z],W=P[z],ae=K.el&&(K.type===vt||!sn(K,W)||K.shapeFlag&70)?d(K.el):M;C(K,W,ae,null,H,U,q,Q,!0)}},S=(b,P,M,H,U)=>{if(P!==M){if(P!==De)for(const q in P)!Ps(q)&&!(q in M)&&i(b,q,P[q],null,U,H);for(const q in M){if(Ps(q))continue;const Q=M[q],z=P[q];Q!==z&&q!=="value"&&i(b,q,z,Q,U,H)}"value"in M&&i(b,"value",P.value,M.value,U)}},R=(b,P,M,H,U,q,Q,z,K)=>{const W=P.el=b?b.el:a(""),ae=P.anchor=b?b.anchor:a("");let{patchFlag:Y,dynamicChildren:oe,slotScopeIds:se}=P;se&&(z=z?z.concat(se):se),b==null?(r(W,M,H),r(ae,M,H),y(P.children||[],M,ae,U,q,Q,z,K)):Y>0&&Y&64&&oe&&b.dynamicChildren?(T(b.dynamicChildren,oe,M,U,q,Q,z),(P.key!=null||U&&P===U.subTree)&&yh(b,P,!0)):te(b,P,M,ae,U,q,Q,z,K)},I=(b,P,M,H,U,q,Q,z,K)=>{P.slotScopeIds=z,b==null?P.shapeFlag&512?U.ctx.activate(P,M,H,Q,K):ge(P,M,H,U,q,Q,K):_e(b,P,K)},ge=(b,P,M,H,U,q,Q)=>{const z=b.component=AI(b,H,U);if(fo(b)&&(z.ctx.renderer=ne),bI(z,!1,Q),z.asyncDep){if(U&&U.registerDep(z,X,Q),!b.el){const K=z.subTree=He(Xe);x(null,K,P,M)}}else X(z,b,P,M,U,q,Q)},_e=(b,P,M)=>{const H=P.component=b.component;if(dI(b,P,M))if(H.asyncDep&&!H.asyncResolved){re(H,P,M);return}else H.next=P,H.update();else P.el=b.el,H.vnode=P},X=(b,P,M,H,U,q,Q)=>{const z=()=>{if(b.isMounted){let{next:Y,bu:oe,u:se,parent:he,vnode:Se}=b;{const gt=S_(b);if(gt){Y&&(Y.el=Se.el,re(b,Y,Q)),gt.asyncDep.then(()=>{b.isUnmounted||z()});return}}let be=Y,pt;Mr(b,!1),Y?(Y.el=Se.el,re(b,Y,Q)):Y=Se,oe&&Cs(oe),(pt=Y.props&&Y.props.onVnodeBeforeUpdate)&&Lt(pt,he,Y,Se),Mr(b,!0);const st=El(b),lt=b.subTree;b.subTree=st,C(lt,st,d(lt.el),B(lt),b,U,q),Y.el=st.el,be===null&&Ec(b,st.el),se&&Ye(se,U),(pt=Y.props&&Y.props.onVnodeUpdated)&&Ye(()=>Lt(pt,he,Y,Se),U)}else{let Y;const{el:oe,props:se}=P,{bm:he,m:Se,parent:be,root:pt,type:st}=b,lt=fr(P);if(Mr(b,!1),he&&Cs(he),!lt&&(Y=se&&se.onVnodeBeforeMount)&&Lt(Y,be,P),Mr(b,!0),oe&&ke){const gt=()=>{b.subTree=El(b),ke(oe,b.subTree,b,U,null)};lt&&st.__asyncHydrate?st.__asyncHydrate(oe,b,gt):gt()}else{pt.ce&&pt.ce._injectChildStyle(st);const gt=b.subTree=El(b);C(null,gt,M,H,b,U,q),P.el=gt.el}if(Se&&Ye(Se,U),!lt&&(Y=se&&se.onVnodeMounted)){const gt=P;Ye(()=>Lt(Y,be,gt),U)}(P.shapeFlag&256||be&&fr(be.vnode)&&be.vnode.shapeFlag&256)&&b.a&&Ye(b.a,U),b.isMounted=!0,P=M=H=null}};b.scope.on();const K=b.effect=new Pm(z);b.scope.off();const W=b.update=K.run.bind(K),ae=b.job=K.runIfDirty.bind(K);ae.i=b,ae.id=b.uid,K.scheduler=()=>uh(ae),Mr(b,!0),W()},re=(b,P,M)=>{P.component=b;const H=b.vnode.props;b.vnode=P,b.next=null,Yv(b,P.props,H,M),tI(b,P.children,M),Sr(),Ad(b),Pr()},te=(b,P,M,H,U,q,Q,z,K=!1)=>{const W=b&&b.children,ae=b?b.shapeFlag:0,Y=P.children,{patchFlag:oe,shapeFlag:se}=P;if(oe>0){if(oe&128){tn(W,Y,M,H,U,q,Q,z,K);return}else if(oe&256){Be(W,Y,M,H,U,q,Q,z,K);return}}se&8?(ae&16&&xt(W,U,q),Y!==W&&h(M,Y)):ae&16?se&16?tn(W,Y,M,H,U,q,Q,z,K):xt(W,U,q,!0):(ae&8&&h(M,""),se&16&&y(Y,M,H,U,q,Q,z,K))},Be=(b,P,M,H,U,q,Q,z,K)=>{b=b||Rs,P=P||Rs;const W=b.length,ae=P.length,Y=Math.min(W,ae);let oe;for(oe=0;oe<Y;oe++){const se=P[oe]=K?nr(P[oe]):Ht(P[oe]);C(b[oe],se,M,null,U,q,Q,z,K)}W>ae?xt(b,U,q,!0,!1,Y):y(P,M,H,U,q,Q,z,K,Y)},tn=(b,P,M,H,U,q,Q,z,K)=>{let W=0;const ae=P.length;let Y=b.length-1,oe=ae-1;for(;W<=Y&&W<=oe;){const se=b[W],he=P[W]=K?nr(P[W]):Ht(P[W]);if(sn(se,he))C(se,he,M,null,U,q,Q,z,K);else break;W++}for(;W<=Y&&W<=oe;){const se=b[Y],he=P[oe]=K?nr(P[oe]):Ht(P[oe]);if(sn(se,he))C(se,he,M,null,U,q,Q,z,K);else break;Y--,oe--}if(W>Y){if(W<=oe){const se=oe+1,he=se<ae?P[se].el:H;for(;W<=oe;)C(null,P[W]=K?nr(P[W]):Ht(P[W]),M,he,U,q,Q,z,K),W++}}else if(W>oe)for(;W<=Y;)je(b[W],U,q,!0),W++;else{const se=W,he=W,Se=new Map;for(W=he;W<=oe;W++){const bt=P[W]=K?nr(P[W]):Ht(P[W]);bt.key!=null&&Se.set(bt.key,W)}let be,pt=0;const st=oe-he+1;let lt=!1,gt=0;const zn=new Array(st);for(W=0;W<st;W++)zn[W]=0;for(W=se;W<=Y;W++){const bt=b[W];if(pt>=st){je(bt,U,q,!0);continue}let zt;if(bt.key!=null)zt=Se.get(bt.key);else for(be=he;be<=oe;be++)if(zn[be-he]===0&&sn(bt,P[be])){zt=be;break}zt===void 0?je(bt,U,q,!0):(zn[zt-he]=W+1,zt>=gt?gt=zt:lt=!0,C(bt,P[zt],M,null,U,q,Q,z,K),pt++)}const os=lt?sI(zn):Rs;for(be=os.length-1,W=st-1;W>=0;W--){const bt=he+W,zt=P[bt],as=bt+1<ae?P[bt+1].el:H;zn[W]===0?C(null,zt,M,as,U,q,Q,z,K):lt&&(be<0||W!==os[be]?Kt(zt,M,as,2):be--)}}},Kt=(b,P,M,H,U=null)=>{const{el:q,type:Q,transition:z,children:K,shapeFlag:W}=b;if(W&6){Kt(b.component.subTree,P,M,H);return}if(W&128){b.suspense.move(P,M,H);return}if(W&64){Q.move(b,P,M,ne);return}if(Q===vt){r(q,P,M);for(let Y=0;Y<K.length;Y++)Kt(K[Y],P,M,H);r(b.anchor,P,M);return}if(Q===Di){w(b,P,M);return}if(H!==2&&W&1&&z)if(H===0)z.beforeEnter(q),r(q,P,M),Ye(()=>z.enter(q),U);else{const{leave:Y,delayLeave:oe,afterLeave:se}=z,he=()=>r(q,P,M),Se=()=>{Y(q,()=>{he(),se&&se()})};oe?oe(q,he,Se):Se()}else r(q,P,M)},je=(b,P,M,H=!1,U=!1)=>{const{type:q,props:Q,ref:z,children:K,dynamicChildren:W,shapeFlag:ae,patchFlag:Y,dirs:oe,cacheIndex:se}=b;if(Y===-2&&(U=!1),z!=null&&Qi(z,null,M,b,!0),se!=null&&(P.renderCache[se]=void 0),ae&256){P.ctx.deactivate(b);return}const he=ae&1&&oe,Se=!fr(b);let be;if(Se&&(be=Q&&Q.onVnodeBeforeUnmount)&&Lt(be,P,b),ae&6)un(b.component,M,H);else{if(ae&128){b.suspense.unmount(M,H);return}he&&fn(b,null,P,"beforeUnmount"),ae&64?b.type.remove(b,P,M,ne,H):W&&!W.hasOnce&&(q!==vt||Y>0&&Y&64)?xt(W,P,M,!1,!0):(q===vt&&Y&384||!U&&ae&16)&&xt(K,P,M),H&&$e(b)}(Se&&(be=Q&&Q.onVnodeUnmounted)||he)&&Ye(()=>{be&&Lt(be,P,b),he&&fn(b,null,P,"unmounted")},M)},$e=b=>{const{type:P,el:M,anchor:H,transition:U}=b;if(P===vt){Kn(M,H);return}if(P===Di){k(b);return}const q=()=>{s(M),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(b.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:z}=U,K=()=>Q(M,q);z?z(b.el,q,K):K()}else q()},Kn=(b,P)=>{let M;for(;b!==P;)M=p(b),s(b),b=M;s(P)},un=(b,P,M)=>{const{bum:H,scope:U,job:q,subTree:Q,um:z,m:K,a:W}=b;Oa(K),Oa(W),H&&Cs(H),U.stop(),q&&(q.flags|=8,je(Q,b,P,M)),z&&Ye(z,P),Ye(()=>{b.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},xt=(b,P,M,H=!1,U=!1,q=0)=>{for(let Q=q;Q<b.length;Q++)je(b[Q],P,M,H,U)},B=b=>{if(b.shapeFlag&6)return B(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const P=p(b.anchor||b.el),M=P&&P[Ym];return M?p(M):P};let Z=!1;const J=(b,P,M)=>{b==null?P._vnode&&je(P._vnode,null,null,!0):C(P._vnode||null,b,P,null,null,null,M),P._vnode=b,Z||(Z=!0,Ad(),Ca(),Z=!1)},ne={p:C,um:je,m:Kt,r:$e,mt:ge,mc:y,pc:te,pbc:T,n:B,o:t};let Te,ke;return e&&([Te,ke]=e(ne)),{render:J,hydrate:Te,createApp:Qv(J,Te)}}function yl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Mr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function R_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function yh(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=nr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&yh(o,a)),a.type===Qr&&(a.el=o.el)}}function sI(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function S_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:S_(e)}function Oa(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const iI=Symbol.for("v-scx"),oI=()=>It(iI);function _x(t,e){return Eh(t,null,e)}function Gr(t,e,n){return Eh(t,e,n)}function Eh(t,e,n=De){const{immediate:r,deep:s,flush:i,once:o}=n,a=Je({},n),l=e&&r||!e&&i!=="post";let u;if(Us){if(i==="sync"){const m=oI();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=gn,m.resume=gn,m.pause=gn,m}}const h=Ze;a.call=(m,A,C)=>an(m,h,A,C);let d=!1;i==="post"?a.scheduler=m=>{Ye(m,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,A)=>{A?m():uh(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const p=Ev(t,e,a);return Us&&(u?u.push(p):l&&p()),p}function aI(t,e,n){const r=this.proxy,s=Fe(t)?t.includes(".")?P_(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=po(this),a=Eh(s,i.bind(r),n);return o(),a}function P_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const cI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Zt(e)}Modifiers`]||t[`${Rr(e)}Modifiers`];function lI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),o=i&&cI(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>Fe(h)?h.trim():h)),o.number&&(s=n.map(Hl)));let a,l=r[a=ll(e)]||r[a=ll(Zt(e))];!l&&i&&(l=r[a=ll(Rr(e))]),l&&an(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,an(u,t,6,s)}}function C_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!pe(t)){const l=u=>{const h=C_(u,e,!0);h&&(a=!0,Je(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Le(t)&&r.set(t,null),null):(ue(i)?i.forEach(l=>o[l]=null):Je(o,i),Le(t)&&r.set(t,o),o)}function yc(t,e){return!t||!lo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,Rr(e))||Ce(t,e))}function El(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:p,setupState:m,ctx:A,inheritAttrs:C}=t,D=ka(t);let x,N;try{if(n.shapeFlag&4){const k=s||r,O=k;x=Ht(u.call(O,k,h,d,m,p,A)),N=a}else{const k=e;x=Ht(k.length>1?k(d,{attrs:a,slots:o,emit:l}):k(d,null)),N=e.props?a:hI(a)}}catch(k){Oi.length=0,Js(k,t,1),x=He(Xe)}let w=x;if(N&&C!==!1){const k=Object.keys(N),{shapeFlag:O}=w;k.length&&O&7&&(i&&k.some(Yu)&&(N=fI(N,i)),w=Un(w,N,!1,!0))}return n.dirs&&(w=Un(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&Ms(w,n.transition),x=w,ka(D),x}function uI(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Jr(s)){if(s.type!==Xe||s.children==="v-if"){if(n)return;n=s}}else return}return n}const hI=t=>{let e;for(const n in t)(n==="class"||n==="style"||lo(n))&&((e||(e={}))[n]=t[n]);return e},fI=(t,e)=>{const n={};for(const r in t)(!Yu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function dI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Md(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==r[p]&&!yc(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Md(r,o,u):!0:!!o;return!1}function Md(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!yc(n,i))return!0}return!1}function Ec({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Va=t=>t.__isSuspense;let tu=0;const pI={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)gI(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}mI(t,e,n,r,s,o,a,l,u)}},hydrate:_I,normalize:yI},Th=pI;function Ji(t,e){const n=t.props&&t.props[e];pe(n)&&n()}function gI(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,d=h("div"),p=t.suspense=k_(t,s,r,e,d,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,d,null,r,p,i,o),p.deps>0?(Ji(t,"onPending"),Ji(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Ns(p,t.ssFallback)):p.resolve(!1,!0)}function mI(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const p=e.ssContent,m=e.ssFallback,{activeBranch:A,pendingBranch:C,isInFallback:D,isHydrating:x}=d;if(C)d.pendingBranch=p,sn(p,C)?(l(C,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():D&&(x||(l(A,m,n,r,s,null,i,o,a),Ns(d,m)))):(d.pendingId=tu++,x?(d.isHydrating=!1,d.activeBranch=C):u(C,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),D?(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(l(A,m,n,r,s,null,i,o,a),Ns(d,m))):A&&sn(p,A)?(l(A,p,n,r,s,d,i,o,a),d.resolve(!0)):(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(A&&sn(p,A))l(A,p,n,r,s,d,i,o,a),Ns(d,p);else if(Ji(e,"onPending"),d.pendingBranch=p,p.shapeFlag&512?d.pendingId=p.component.suspenseId:d.pendingId=tu++,l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:N,pendingId:w}=d;N>0?setTimeout(()=>{d.pendingId===w&&d.fallback(m)},N):N===0&&d.fallback(m)}}function k_(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:d,m:p,um:m,n:A,o:{parentNode:C,remove:D}}=u;let x;const N=EI(t);N&&e&&e.pendingBranch&&(x=e.pendingId,e.deps++);const w=t.props?Im(t.props.timeout):void 0,k=i,O={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:tu++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(L=!1,v=!1){const{vnode:y,activeBranch:_,pendingBranch:T,pendingId:S,effects:R,parentComponent:I,container:ge}=O;let _e=!1;O.isHydrating?O.isHydrating=!1:L||(_e=_&&T.transition&&T.transition.mode==="out-in",_e&&(_.transition.afterLeave=()=>{S===O.pendingId&&(p(T,ge,i===k?A(_):i,0),Gl(R))}),_&&(C(_.el)===ge&&(i=A(_)),m(_,I,O,!0)),_e||p(T,ge,i,0)),Ns(O,T),O.pendingBranch=null,O.isInFallback=!1;let X=O.parent,re=!1;for(;X;){if(X.pendingBranch){X.effects.push(...R),re=!0;break}X=X.parent}!re&&!_e&&Gl(R),O.effects=[],N&&e&&e.pendingBranch&&x===e.pendingId&&(e.deps--,e.deps===0&&!v&&e.resolve()),Ji(y,"onResolve")},fallback(L){if(!O.pendingBranch)return;const{vnode:v,activeBranch:y,parentComponent:_,container:T,namespace:S}=O;Ji(v,"onFallback");const R=A(y),I=()=>{O.isInFallback&&(d(null,L,T,R,_,null,S,a,l),Ns(O,L))},ge=L.transition&&L.transition.mode==="out-in";ge&&(y.transition.afterLeave=I),O.isInFallback=!0,m(y,_,null,!0),ge||I()},move(L,v,y){O.activeBranch&&p(O.activeBranch,L,v,y),O.container=L},next(){return O.activeBranch&&A(O.activeBranch)},registerDep(L,v,y){const _=!!O.pendingBranch;_&&O.deps++;const T=L.vnode.el;L.asyncDep.catch(S=>{Js(S,L,0)}).then(S=>{if(L.isUnmounted||O.isUnmounted||O.pendingId!==L.suspenseId)return;L.asyncResolved=!0;const{vnode:R}=L;ru(L,S,!1),T&&(R.el=T);const I=!T&&L.subTree.el;v(L,R,C(T||L.subTree.el),T?null:A(L.subTree),O,o,y),I&&D(I),Ec(L,R.el),_&&--O.deps===0&&O.resolve()})},unmount(L,v){O.isUnmounted=!0,O.activeBranch&&m(O.activeBranch,n,L,v),O.pendingBranch&&m(O.pendingBranch,n,L,v)}};return O}function _I(t,e,n,r,s,i,o,a,l){const u=e.suspense=k_(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function yI(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Fd(r?n.default:n),t.ssFallback=r?Fd(n.fallback):He(Xe)}function Fd(t){let e;if(pe(t)){const n=Fs&&t._c;n&&(t._d=!1,Jt()),t=t(),n&&(t._d=!0,e=Ft,D_())}return ue(t)&&(t=uI(t)),t=Ht(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function N_(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):Gl(t)}function Ns(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Ec(r,s))}function EI(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const vt=Symbol.for("v-fgt"),Qr=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),Di=Symbol.for("v-stc"),Oi=[];let Ft=null;function Jt(t=!1){Oi.push(Ft=t?null:[])}function D_(){Oi.pop(),Ft=Oi[Oi.length-1]||null}let Fs=1;function Ud(t,e=!1){Fs+=t,t<0&&Ft&&e&&(Ft.hasOnce=!0)}function O_(t){return t.dynamicChildren=Fs>0?Ft||Rs:null,D_(),Fs>0&&Ft&&Ft.push(t),t}function TI(t,e,n,r,s,i){return O_(x_(t,e,n,r,s,i,!0))}function pn(t,e,n,r,s){return O_(He(t,e,n,r,s,!0))}function Jr(t){return t?t.__v_isVNode===!0:!1}function sn(t,e){return t.type===e.type&&t.key===e.key}const V_=({key:t})=>t??null,ua=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||qe(t)||pe(t)?{i:tt,r:t,k:e,f:!!n}:t:null);function x_(t,e=null,n=null,r=0,s=null,i=t===vt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&V_(e),ref:e&&ua(e),scopeId:Jm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tt};return a?(wh(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),Fs>0&&!o&&Ft&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ft.push(l),l}const He=wI;function wI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===h_)&&(t=Xe),Jr(t)){const a=Un(t,e,!0);return n&&wh(a,n),Fs>0&&!i&&Ft&&(a.shapeFlag&6?Ft[Ft.indexOf(t)]=a:Ft.push(a)),a.patchFlag=-2,a}if(CI(t)&&(t=t.__vccOpts),e){e=L_(e);let{class:a,style:l}=e;a&&!Fe(a)&&(e.class=gc(a)),Le(l)&&(ch(l)&&!ue(l)&&(l=Je({},l)),e.style=pc(l))}const o=Fe(t)?1:Va(t)?128:Xm(t)?64:Le(t)?4:pe(t)?2:0;return x_(t,e,n,r,s,o,i,!0)}function L_(t){return t?ch(t)||y_(t)?Je({},t):t:null}function Un(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?F_(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&V_(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(ua(e)):[i,ua(e)]:ua(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Un(t.ssContent),ssFallback:t.ssFallback&&Un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ms(h,l.clone(h)),h}function M_(t=" ",e=0){return He(Qr,null,t,e)}function yx(t,e){const n=He(Di,null,t);return n.staticCount=e,n}function Ex(t="",e=!1){return e?(Jt(),pn(Xe,null,t)):He(Xe,null,t)}function Ht(t){return t==null||typeof t=="boolean"?He(Xe):ue(t)?He(vt,null,t.slice()):Jr(t)?nr(t):He(Qr,null,String(t))}function nr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Un(t)}function wh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),wh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!y_(e)?e._ctx=tt:s===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),r&64?(n=16,e=[M_(e)]):n=8);t.children=e,t.shapeFlag|=n}function F_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=gc([e.class,r.class]));else if(s==="style")e.style=pc([e.style,r.style]);else if(lo(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Lt(t,e,n,r=null){an(t,e,7,[n,r])}const vI=g_();let II=0;function AI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||vI,i={uid:II++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Sm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:T_(r,s),emitsOptions:C_(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=lI.bind(null,i),t.ce&&t.ce(i),i}let Ze=null;const Tc=()=>Ze||tt;let xa,nu;{const t=dc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};xa=e("__VUE_INSTANCE_SETTERS__",n=>Ze=n),nu=e("__VUE_SSR_SETTERS__",n=>Us=n)}const po=t=>{const e=Ze;return xa(t),t.scope.on(),()=>{t.scope.off(),xa(e)}},Bd=()=>{Ze&&Ze.scope.off(),xa(null)};function U_(t){return t.vnode.shapeFlag&4}let Us=!1;function bI(t,e=!1,n=!1){e&&nu(e);const{props:r,children:s}=t.vnode,i=U_(t);Jv(t,r,i,e),eI(t,s,n);const o=i?RI(t,e):void 0;return e&&nu(!1),o}function RI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,$v);const{setup:r}=n;if(r){Sr();const s=t.setupContext=r.length>1?PI(t):null,i=po(t),o=ho(r,t,0,[t.props,s]),a=Em(o);if(Pr(),i(),(a||t.sp)&&!fr(t)&&fh(t),a){if(o.then(Bd,Bd),e)return o.then(l=>{ru(t,l,e)}).catch(l=>{Js(l,t,0)});t.asyncDep=o}else ru(t,o,e)}else B_(t,e)}function ru(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=qm(e)),B_(t,n)}let jd;function B_(t,e,n){const r=t.type;if(!t.render){if(!e&&jd&&!r.render){const s=r.template||gh(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=Je(Je({isCustomElement:i,delimiters:a},o),l);r.render=jd(s,u)}}t.render=r.render||gn}{const s=po(t);Sr();try{Hv(t)}finally{Pr(),s()}}}const SI={get(t,e){return Tt(t,"get",""),t[e]}};function PI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,SI),slots:t.slots,emit:t.emit,expose:e}}function wc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(qm(lh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ni)return Ni[n](t)},has(e,n){return n in e||n in Ni}})):t.proxy}function su(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function CI(t){return pe(t)&&"__vccOpts"in t}const at=(t,e)=>_v(t,e,Us);function Ut(t,e,n){const r=arguments.length;return r===2?Le(e)&&!ue(e)?Jr(e)?He(t,null,[e]):He(t,e):He(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Jr(n)&&(n=[n]),He(t,e,n))}const j_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let iu;const $d=typeof window<"u"&&window.trustedTypes;if($d)try{iu=$d.createPolicy("vue",{createHTML:t=>t})}catch{}const $_=iu?t=>iu.createHTML(t):t=>t,kI="http://www.w3.org/2000/svg",NI="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,Hd=kn&&kn.createElement("template"),DI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?kn.createElementNS(kI,t):e==="mathml"?kn.createElementNS(NI,t):n?kn.createElement(t,{is:n}):kn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>kn.createTextNode(t),createComment:t=>kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hd.innerHTML=$_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Hd.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Yn="transition",_i="animation",Yi=Symbol("_vtc"),H_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},OI=Je({},t_,H_),VI=t=>(t.displayName="Transition",t.props=OI,t),xI=VI((t,{slots:e})=>Ut(bv,LI(t),e)),Fr=(t,e=[])=>{ue(t)?t.forEach(n=>n(...e)):t&&t(...e)},qd=t=>t?ue(t)?t.some(e=>e.length>1):t.length>1:!1;function LI(t){const e={};for(const R in t)R in H_||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,A=MI(s),C=A&&A[0],D=A&&A[1],{onBeforeEnter:x,onEnter:N,onEnterCancelled:w,onLeave:k,onLeaveCancelled:O,onBeforeAppear:L=x,onAppear:v=N,onAppearCancelled:y=w}=e,_=(R,I,ge,_e)=>{R._enterCancelled=_e,Ur(R,I?h:a),Ur(R,I?u:o),ge&&ge()},T=(R,I)=>{R._isLeaving=!1,Ur(R,d),Ur(R,m),Ur(R,p),I&&I()},S=R=>(I,ge)=>{const _e=R?v:N,X=()=>_(I,R,ge);Fr(_e,[I,X]),Wd(()=>{Ur(I,R?l:i),Pn(I,R?h:a),qd(_e)||Kd(I,r,C,X)})};return Je(e,{onBeforeEnter(R){Fr(x,[R]),Pn(R,i),Pn(R,o)},onBeforeAppear(R){Fr(L,[R]),Pn(R,l),Pn(R,u)},onEnter:S(!1),onAppear:S(!0),onLeave(R,I){R._isLeaving=!0;const ge=()=>T(R,I);Pn(R,d),R._enterCancelled?(Pn(R,p),Qd()):(Qd(),Pn(R,p)),Wd(()=>{R._isLeaving&&(Ur(R,d),Pn(R,m),qd(k)||Kd(R,r,D,ge))}),Fr(k,[R,ge])},onEnterCancelled(R){_(R,!1,void 0,!0),Fr(w,[R])},onAppearCancelled(R){_(R,!0,void 0,!0),Fr(y,[R])},onLeaveCancelled(R){T(R),Fr(O,[R])}})}function MI(t){if(t==null)return null;if(Le(t))return[Tl(t.enter),Tl(t.leave)];{const e=Tl(t);return[e,e]}}function Tl(t){return Im(t)}function Pn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Yi]||(t[Yi]=new Set)).add(e)}function Ur(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Yi];n&&(n.delete(e),n.size||(t[Yi]=void 0))}function Wd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let FI=0;function Kd(t,e,n,r){const s=t._endId=++FI,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=UI(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,p),i()},p=m=>{m.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},a+1),t.addEventListener(u,p)}function UI(t,e){const n=window.getComputedStyle(t),r=A=>(n[A]||"").split(", "),s=r(`${Yn}Delay`),i=r(`${Yn}Duration`),o=zd(s,i),a=r(`${_i}Delay`),l=r(`${_i}Duration`),u=zd(a,l);let h=null,d=0,p=0;e===Yn?o>0&&(h=Yn,d=o,p=i.length):e===_i?u>0&&(h=_i,d=u,p=l.length):(d=Math.max(o,u),h=d>0?o>u?Yn:_i:null,p=h?h===Yn?i.length:l.length:0);const m=h===Yn&&/\b(transform|all)(,|$)/.test(r(`${Yn}Property`).toString());return{type:h,timeout:d,propCount:p,hasTransform:m}}function zd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Gd(n)+Gd(t[r])))}function Gd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Qd(){return document.body.offsetHeight}function BI(t,e,n){const r=t[Yi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Jd=Symbol("_vod"),jI=Symbol("_vsh"),$I=Symbol(""),HI=/(^|;)\s*display\s*:/;function qI(t,e,n){const r=t.style,s=Fe(n);let i=!1;if(n&&!s){if(e)if(Fe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ha(r,a,"")}else for(const o in e)n[o]==null&&ha(r,o,"");for(const o in n)o==="display"&&(i=!0),ha(r,o,n[o])}else if(s){if(e!==n){const o=r[$I];o&&(n+=";"+o),r.cssText=n,i=HI.test(n)}}else e&&t.removeAttribute("style");Jd in t&&(t[Jd]=i?r.display:"",t[jI]&&(r.display="none"))}const Yd=/\s*!important$/;function ha(t,e,n){if(ue(n))n.forEach(r=>ha(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=WI(t,e);Yd.test(n)?t.setProperty(Rr(r),n.replace(Yd,""),"important"):t[r]=n}}const Xd=["Webkit","Moz","ms"],wl={};function WI(t,e){const n=wl[e];if(n)return n;let r=Zt(e);if(r!=="filter"&&r in t)return wl[e]=r;r=fc(r);for(let s=0;s<Xd.length;s++){const i=Xd[s]+r;if(i in t)return wl[e]=i}return e}const Zd="http://www.w3.org/1999/xlink";function ep(t,e,n,r,s,i=Hw(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Zd,e.slice(6,e.length)):t.setAttributeNS(Zd,e,n):n==null||i&&!Am(n)?t.removeAttribute(e):t.setAttribute(e,i?"":qn(n)?String(n):n)}function tp(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?$_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Am(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ms(t,e,n,r){t.addEventListener(e,n,r)}function KI(t,e,n,r){t.removeEventListener(e,n,r)}const np=Symbol("_vei");function zI(t,e,n,r,s=null){const i=t[np]||(t[np]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=GI(e);if(r){const u=i[e]=YI(r,s);ms(t,a,u,l)}else o&&(KI(t,a,o,l),i[e]=void 0)}}const rp=/(?:Once|Passive|Capture)$/;function GI(t){let e;if(rp.test(t)){e={};let r;for(;r=t.match(rp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rr(t.slice(2)),e]}let vl=0;const QI=Promise.resolve(),JI=()=>vl||(QI.then(()=>vl=0),vl=Date.now());function YI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;an(XI(r,n.value),e,5,[r])};return n.value=t,n.attached=JI(),n}function XI(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const sp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ZI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?BI(t,r,o):e==="style"?qI(t,n,r):lo(e)?Yu(e)||zI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):eA(t,e,r,o))?(tp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ep(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Fe(r))?tp(t,Zt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ep(t,e,r,o))};function eA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&sp(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return sp(e)&&Fe(n)?!1:e in t}const ip=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>Cs(e,n):e};function tA(t){t.target.composing=!0}function op(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Il=Symbol("_assign"),Tx={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Il]=ip(s);const i=r||s.props&&s.props.type==="number";ms(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Hl(a)),t[Il](a)}),n&&ms(t,"change",()=>{t.value=t.value.trim()}),e||(ms(t,"compositionstart",tA),ms(t,"compositionend",op),ms(t,"change",op))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Il]=ip(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Hl(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},nA=["ctrl","shift","alt","meta"],rA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>nA.some(n=>t[`${n}Key`]&&!e.includes(n))},wx=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=rA[e[o]];if(a&&a(s,e))return}return t(s,...i)})},sA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vx=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Rr(s.key);if(e.some(o=>o===i||sA[o]===i))return t(s)})},q_=Je({patchProp:ZI},DI);let Vi,ap=!1;function iA(){return Vi||(Vi=nI(q_))}function oA(){return Vi=ap?Vi:rI(q_),ap=!0,Vi}const aA=(...t)=>{const e=iA().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=K_(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,W_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},cA=(...t)=>{const e=oA().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=K_(r);if(s)return n(s,!0,W_(s))},e};function W_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function K_(t){return Fe(t)?document.querySelector(t):t}const lA=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,uA=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,hA=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function fA(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){dA(t);return}return e}function dA(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function La(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!hA.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(lA.test(t)||uA.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,fA)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const pA=/#/g,gA=/&/g,mA=/\//g,_A=/=/g,vh=/\+/g,yA=/%5e/gi,EA=/%60/gi,TA=/%7c/gi,wA=/%20/gi;function vA(t){return encodeURI(""+t).replace(TA,"|")}function ou(t){return vA(typeof t=="string"?t:JSON.stringify(t)).replace(vh,"%2B").replace(wA,"+").replace(pA,"%23").replace(gA,"%26").replace(EA,"`").replace(yA,"^").replace(mA,"%2F")}function Al(t){return ou(t).replace(_A,"%3D")}function Ma(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function IA(t){return Ma(t.replace(vh," "))}function AA(t){return Ma(t.replace(vh," "))}function bA(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=IA(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=AA(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function RA(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Al(t)}=${ou(n)}`).join("&"):`${Al(t)}=${ou(e)}`:Al(t)}function SA(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>RA(e,t[e])).filter(Boolean).join("&")}const PA=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,CA=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,kA=/^([/\\]\s*){2,}[^/\\]/,NA=/^[\s\0]*(blob|data|javascript|vbscript):$/i,DA=/\/$|\/\?|\/#/,OA=/^\.?\//;function ns(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?PA.test(t):CA.test(t)||(e.acceptRelative?kA.test(t):!1)}function VA(t){return!!t&&NA.test(t)}function au(t="",e){return e?DA.test(t):t.endsWith("/")}function Ih(t="",e){if(!e)return(au(t)?t.slice(0,-1):t)||"/";if(!au(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function cu(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(au(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function xA(t=""){return t.startsWith("/")}function cp(t=""){return xA(t)?t:"/"+t}function LA(t,e){if(G_(e)||ns(t))return t;const n=Ih(e);return t.startsWith(n)?t:Ah(n,t)}function lp(t,e){if(G_(e))return t;const n=Ih(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function z_(t,e){const n=UA(t),r={...bA(n.search),...e};return n.search=SA(r),BA(n)}function G_(t){return!t||t==="/"}function MA(t){return t&&t!=="/"}function Ah(t,...e){let n=t||"";for(const r of e.filter(s=>MA(s)))if(n){const s=r.replace(OA,"");n=cu(n)+s}else n=r;return n}function Q_(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[d,p]of h.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&ns(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function FA(t,e,n={}){return n.trailingSlash||(t=cu(t),e=cu(e)),n.leadingSlash||(t=cp(t),e=cp(e)),n.encoding||(t=Ma(t),e=Ma(e)),t===e}const J_=Symbol.for("ufo:protocolRelative");function UA(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,p=""]=n;return{protocol:d.toLowerCase(),pathname:p,href:d+p,auth:"",host:"",search:"",hash:""}}if(!ns(t,{acceptRelative:!0}))return up(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=up(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[J_]:!r}}function up(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function BA(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[J_]?(t.protocol||"")+"//":"")+s+i+e+n+r}class jA extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function $A(t){var l,u,h,d,p;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new jA(o,t.error?{cause:t.error}:void 0);for(const m of["request","options","response"])Object.defineProperty(a,m,{get(){return t[m]}});for(const[m,A]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,m,{get(){return t.response&&t.response[A]}});return a}const HA=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function hp(t="GET"){return HA.has(t.toUpperCase())}function qA(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const WA=new Set(["image/svg","application/xml","application/xhtml","application/html"]),KA=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function zA(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return KA.test(e)?"json":WA.has(e)||e.startsWith("text/")?"text":"blob"}function GA(t,e,n,r){const s=QA((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function QA(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function ea(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const JA=new Set([408,409,425,429,500,502,503,504]),YA=new Set([101,204,205,304]);function Y_(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=hp(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):JA.has(d))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(m=>setTimeout(m,p)),i(a.request,{...a.options,retry:h-1})}}const u=$A(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){const h={request:l,options:GA(l,u,t.defaults,n),response:void 0,error:void 0};h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&await ea(h,h.options.onRequest),typeof h.request=="string"&&(h.options.baseURL&&(h.request=LA(h.request,h.options.baseURL)),h.options.query&&(h.request=z_(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&hp(h.options.method)&&(qA(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let d;if(!h.options.signal&&h.options.timeout){const m=new r;d=setTimeout(()=>{const A=new Error("[TimeoutError]: The operation was aborted due to timeout");A.name="TimeoutError",A.code=23,m.abort(A)},h.options.timeout),h.options.signal=m.signal}try{h.response=await e(h.request,h.options)}catch(m){return h.error=m,h.options.onRequestError&&await ea(h,h.options.onRequestError),await s(h)}finally{d&&clearTimeout(d)}if((h.response.body||h.response._bodyInit)&&!YA.has(h.response.status)&&h.options.method!=="HEAD"){const m=(h.options.parseResponse?"json":h.options.responseType)||zA(h.response.headers.get("content-type")||"");switch(m){case"json":{const A=await h.response.text(),C=h.options.parseResponse||La;h.response._data=C(A);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[m]()}}return h.options.onResponse&&await ea(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await ea(h,h.options.onResponseError),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},l={})=>Y_({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const Fa=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),XA=Fa.fetch?(...t)=>Fa.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),ZA=Fa.Headers,eb=Fa.AbortController,tb=Y_({fetch:XA,Headers:ZA,AbortController:eb}),nb=tb,rb=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Ua=rb().app,sb=()=>Ua.baseURL,ib=()=>Ua.buildAssetsDir,bh=(...t)=>Q_(X_(),ib(),...t),X_=(...t)=>{const e=Ua.cdnURL||Ua.baseURL;return t.length?Q_(e,...t):e};globalThis.__buildAssetsURL=bh,globalThis.__publicAssetsURL=X_;globalThis.$fetch||(globalThis.$fetch=nb.create({baseURL:sb()}));function lu(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?lu(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const ob={run:t=>t()},ab=()=>ob,Z_=typeof console.createTask<"u"?console.createTask:ab;function cb(t,e){const n=e.shift(),r=Z_(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function lb(t,e){const n=e.shift(),r=Z_(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function bl(t,e){for(const n of[...t])n(e)}class ub{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=lu(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=lu(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(cb,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(lb,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&bl(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&bl(this._after,s)}):(this._after&&s&&bl(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function ey(){return new ub}function hb(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;uu.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{uu.delete(u)}}}}function fb(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=hb({...t,...r})),e[n]}}}const Ba=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},fp="__unctx__",db=Ba[fp]||(Ba[fp]=fb()),pb=(t,e={})=>db.get(t,e),dp="__unctx_async_handlers__",uu=Ba[dp]||(Ba[dp]=new Set);function Ds(t){const e=[];for(const s of uu){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const gb=!1,hu=!1,mb=!1,Ix={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},_b=null,yb="#__nuxt",ty="nuxt-app",pp=36e5,Eb="vite:preloadError";function ny(t=ty){return pb(t,{asyncContext:!1})}const Tb="__nuxt_plugin";function wb(t){var s;let e=0;const n={_id:t.id||ty||"nuxt-app",_scope:eh(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.15.4"},get vue(){return n.vueApp.version}},payload:On({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:On({}),state:In({}),once:new Set,_errors:On({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!th()?n._scope.run(()=>gp(n,i)):gp(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:On({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=ey(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;ta(n,a,o),ta(n.vueApp.config.globalProperties,a,o)},ta(n.vueApp,"$nuxt",n),ta(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(Eb,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||Ue;const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function vb(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function Ib(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function Ab(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(d=>e.some(p=>p._name===d)&&!n.includes(d)))??[];if(u.length>0)r.push([new Set(u),l]);else{const d=Ib(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([p,m])=>{p.has(l._name)&&(p.delete(l._name),p.size===0&&(o++,await a(m)))})))});l.parallel?s.push(d.catch(p=>i.push(p))):await d}}for(const l of e)vb(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function Vt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[Tb]:!0,_name:e})}const bb=Vt;function gp(t,e,n){const r=()=>e();return ny(t._id).set(t),t.vueApp.runWithContext(r)}function Rb(t){var n;let e;return mh()&&(e=(n=Tc())==null?void 0:n.appContext.app.$nuxt),e=e||ny(t).tryUse(),e||null}function Ue(t){const e=Rb(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function go(t){return Ue().$config}function ta(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function Sb(t,e){return{ctx:{table:t},matchAll:n=>sy(n,t)}}function ry(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,ry(s)])):new Map(Object.entries(t[n]));return e}function Pb(t){return Sb(ry(t))}function sy(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of mp(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of mp(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...sy(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function mp(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Rl(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function fu(t,e,n=".",r){if(!Rl(e))return fu(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Rl(o)&&Rl(s[i])?s[i]=fu(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function Cb(t){return(...e)=>e.reduce((n,r)=>fu(n,r,"",t),{})}const iy=Cb();function kb(t,e){try{return e in t}catch{return!1}}class du extends Error{constructor(n,r={}){super(n,r);St(this,"statusCode",500);St(this,"fatal",!1);St(this,"unhandled",!1);St(this,"statusMessage");St(this,"data");St(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:gu(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=oy(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}St(du,"__h3_error__",!0);function pu(t){if(typeof t=="string")return new du(t);if(Nb(t))return t;const e=new du(t.message??t.statusMessage??"",{cause:t.cause||t});if(kb(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=gu(t.statusCode,e.statusCode):t.status&&(e.statusCode=gu(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;oy(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function Nb(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const Db=/[^\u0009\u0020-\u007E]/g;function oy(t=""){return t.replace(Db,"")}function gu(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const ay=Symbol("layout-meta"),mo=Symbol("route"),en=()=>{var t;return(t=Ue())==null?void 0:t.$router},Rh=()=>mh()?It(mo,Ue()._route):Ue()._route;function Ax(t){return t}const Ob=()=>{try{if(Ue()._processingMiddleware)return!0}catch{return!1}return!1},Vb=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?xb(t):en().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,p])=>p!==void 0).map(([d,p])=>`${d.toLowerCase()}=${p}`).join(", ");return open(n,l,h),Promise.resolve()}const r=ns(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&VA(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=Ob();if(!s&&i)return e!=null&&e.replace?typeof t=="string"?{path:t,replace:!0}:{...t,replace:!0}:t;const o=en(),a=Ue();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function xb(t){return z_(t.path||"",t.query||{})+(t.hash||"")}const cy="__nuxt_error",vc=()=>Wm(Ue().payload,"error"),Is=t=>{const e=Ic(t);try{const n=Ue(),r=vc();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},Lb=async(t={})=>{const e=Ue(),n=vc();e.callHook("app:error:cleared",t),t.redirect&&await en().replace(t.redirect),n.value=_b},Mb=t=>!!t&&typeof t=="object"&&cy in t,Ic=t=>{const e=pu(t);return Object.defineProperty(e,cy,{value:!0,configurable:!1,writable:!1}),e};/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ly;const _o=t=>ly=t,uy=Symbol();function mu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xi||(xi={}));function Fb(){const t=eh(!0),e=t.run(()=>ct({}));let n=[],r=[];const s=lh({install(i){_o(s),s._a=i,i.provide(uy,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const hy=()=>{};function _p(t,e,n,r=hy){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&th()&&Ww(s),s}function ps(t,...e){t.slice().forEach(n=>{n(...e)})}const Ub=t=>t(),yp=Symbol(),Sl=Symbol();function _u(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];mu(s)&&mu(r)&&t.hasOwnProperty(n)&&!qe(r)&&!Fn(r)?t[n]=_u(s,r):t[n]=r}return t}const Bb=Symbol();function jb(t){return!mu(t)||!t.hasOwnProperty(Bb)}const{assign:Zn}=Object;function $b(t){return!!(qe(t)&&t.effect)}function Hb(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const h=dv(n.state.value[t]);return Zn(h,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=lh(at(()=>{_o(n);const m=n._s.get(t);return o[p].call(m,m)})),d),{}))}return l=fy(t,u,e,n,r,!0),l}function fy(t,e,n={},r,s,i){let o;const a=Zn({actions:{}},n),l={deep:!0};let u,h,d=[],p=[],m;const A=r.state.value[t];!i&&!A&&(r.state.value[t]={}),ct({});let C;function D(y){let _;u=h=!1,typeof y=="function"?(y(r.state.value[t]),_={type:xi.patchFunction,storeId:t,events:m}):(_u(r.state.value[t],y),_={type:xi.patchObject,payload:y,storeId:t,events:m});const T=C=Symbol();ts().then(()=>{C===T&&(u=!0)}),h=!0,ps(d,_,r.state.value[t])}const x=i?function(){const{state:_}=n,T=_?_():{};this.$patch(S=>{Zn(S,T)})}:hy;function N(){o.stop(),d=[],p=[],r._s.delete(t)}const w=(y,_="")=>{if(yp in y)return y[Sl]=_,y;const T=function(){_o(r);const S=Array.from(arguments),R=[],I=[];function ge(re){R.push(re)}function _e(re){I.push(re)}ps(p,{args:S,name:T[Sl],store:O,after:ge,onError:_e});let X;try{X=y.apply(this&&this.$id===t?this:O,S)}catch(re){throw ps(I,re),re}return X instanceof Promise?X.then(re=>(ps(R,re),re)).catch(re=>(ps(I,re),Promise.reject(re))):(ps(R,X),X)};return T[yp]=!0,T[Sl]=_,T},k={_p:r,$id:t,$onAction:_p.bind(null,p),$patch:D,$reset:x,$subscribe(y,_={}){const T=_p(d,y,_.detached,()=>S()),S=o.run(()=>Gr(()=>r.state.value[t],R=>{(_.flush==="sync"?h:u)&&y({storeId:t,type:xi.direct,events:m},R)},Zn({},l,_)));return T},$dispose:N},O=In(k);r._s.set(t,O);const v=(r._a&&r._a.runWithContext||Ub)(()=>r._e.run(()=>(o=eh()).run(()=>e({action:w}))));for(const y in v){const _=v[y];if(qe(_)&&!$b(_)||Fn(_))i||(A&&jb(_)&&(qe(_)?_.value=A[y]:_u(_,A[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const T=w(_,y);v[y]=T,a.actions[y]=_}}return Zn(O,v),Zn(Ae(O),v),Object.defineProperty(O,"$state",{get:()=>r.state.value[t],set:y=>{D(_=>{Zn(_,y)})}}),r._p.forEach(y=>{Zn(O,o.run(()=>y({store:O,app:r._a,pinia:r,options:a})))}),A&&i&&n.hydrate&&n.hydrate(O.$state,A),u=!0,h=!0,O}/*! #__NO_SIDE_EFFECTS__ */function Sh(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=mh();return a=a||(u?It(uy,null):null),a&&_o(a),a=ly,a._s.has(r)||(i?fy(r,e,s,a):Hb(r,s,a)),a._s.get(r)}return o.$id=r,o}function Ep(t){const e=Wb(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const qb="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Wb(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=qb.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const Kb=-1,zb=-2,Gb=-3,Qb=-4,Jb=-5,Yb=-6;function Xb(t,e){return Zb(JSON.parse(t),e)}function Zb(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===Kb)return;if(i===Gb)return NaN;if(i===Qb)return 1/0;if(i===Jb)return-1/0;if(i===Yb)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let m=1;m<a.length;m+=1)h.add(s(a[m]));break;case"Map":const d=new Map;r[i]=d;for(let m=1;m<a.length;m+=2)d.set(s(a[m]),s(a[m+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let m=1;m<a.length;m+=2)p[a[m]]=s(a[m+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const m=globalThis[l],A=a[1],C=Ep(A),D=new m(C);r[i]=D;break}case"ArrayBuffer":{const m=a[1],A=Ep(m);r[i]=A;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==zb&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in a){const h=a[u];l[u]=s(h)}}return r[i]}return s(0)}const eR=new Set(["title","titleTemplate","script","style","noscript"]),fa=new Set(["base","meta","link","style","script","noscript"]),tR=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),nR=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),dy=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),rR=typeof window<"u";function ja(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function yu(t){if(t._h)return t._h;if(t._d)return ja(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return ja(e)}function sR(t,e){return t instanceof Promise?t.then(e):e(t)}function Eu(t,e,n,r){const s=r||gy(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>Eu(t,e,n,o));const i={tag:t,props:s};for(const o of dy){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||eR.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function iR(t,e){var r;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function py(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=iR(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,py(t,e,n,s)));if(!e&&!dy.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function gy(t,e=!1){const n=py(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const oR=10;function my(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,my(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function aR(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!tR.has(s))){if(Array.isArray(i)){for(const o of i)e.push(Eu(s,o,t));continue}e.push(Eu(s,i,t))}}if(e.length===0)return[];const r=[];return sR(my(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<oR)+i,s)))}const Tp=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),wp={base:-10,title:10},vp={critical:-80,high:-10,low:20};function $a(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in wp&&(n=wp[t.tag]),e&&e in vp?n+vp[e]:n}const cR=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],lR=["name","property","http-equiv"];function _y(t){const{props:e,tag:n}=t;if(nR.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of lR)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}const rr="%separator";function uR(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/"/g,'\\"'):r||""}const hR=new RegExp(`${rr}(?:\\s*${rr})*`,"g");function na(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(rr);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===rr||!i.includes(a))return a;const l=uR(e,a.slice(1),r);return l!==void 0?l:a}).trim(),o&&(t.endsWith(rr)&&(t=t.slice(0,-rr.length)),t.startsWith(rr)&&(t=t.slice(rr.length)),t=t.replace(hR,n).trim()),t}function Ip(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function yy(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var d;const i=(await t.resolveTags()).map(p=>({tag:p,id:fa.has(p.tag)?yu(p):p.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const p=new Set;for(const m of["body","head"]){const A=(d=n[m])==null?void 0:d.children;for(const C of A){const D=C.tagName.toLowerCase();if(!fa.has(D))continue;const x={tag:D,props:await gy(C.getAttributeNames().reduce((O,L)=>({...O,[L]:C.getAttribute(L)}),{})),innerHTML:C.innerHTML},N=_y(x);let w=N,k=1;for(;w&&p.has(w);)w=`${N}:${k++}`;w&&(x._d=w,p.add(w)),o.elMap[C.getAttribute("data-hid")||yu(x)]=C}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(p,m,A){const C=`${p}:${m}`;o.sideEffects[C]=A,delete o.pendingSideEffects[C]}function l({id:p,$el:m,tag:A}){const C=A.tag.endsWith("Attrs");if(o.elMap[p]=m,C||(A.textContent&&A.textContent!==m.textContent&&(m.textContent=A.textContent),A.innerHTML&&A.innerHTML!==m.innerHTML&&(m.innerHTML=A.innerHTML),a(p,"el",()=>{var D;(D=o.elMap[p])==null||D.remove(),delete o.elMap[p]})),A._eventHandlers)for(const D in A._eventHandlers)Object.prototype.hasOwnProperty.call(A._eventHandlers,D)&&m.getAttribute(`data-${D}`)!==""&&((A.tag==="bodyAttrs"?n.defaultView:m).addEventListener(D.substring(2),A._eventHandlers[D].bind(m)),m.setAttribute(`data-${D}`,""));for(const D in A.props){if(!Object.prototype.hasOwnProperty.call(A.props,D))continue;const x=A.props[D],N=`attr:${D}`;if(D==="class"){if(!x)continue;for(const w of x.split(" "))C&&a(p,`${N}:${w}`,()=>m.classList.remove(w)),!m.classList.contains(w)&&m.classList.add(w)}else if(D==="style"){if(!x)continue;for(const w of x.split(";")){const k=w.indexOf(":"),O=w.substring(0,k).trim(),L=w.substring(k+1).trim();a(p,`${N}:${O}`,()=>{m.style.removeProperty(O)}),m.style.setProperty(O,L)}}else m.getAttribute(D)!==x&&m.setAttribute(D,x===!0?"":String(x)),C&&a(p,N,()=>m.removeAttribute(D))}}const u=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const p of i){const{tag:m,shouldRender:A,id:C}=p;if(A){if(m.tag==="title"){n.title=m.textContent;continue}p.$el=p.$el||o.elMap[C],p.$el?l(p):fa.has(m.tag)&&u.push(p)}}for(const p of u){const m=p.tag.tagPosition||"head";p.$el=n.createElement(p.tag.tag),l(p),h[m]=h[m]||n.createDocumentFragment(),h[m].appendChild(p.$el)}for(const p of i)await t.hooks.callHook("dom:renderTag",p,n,a);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const p in o.pendingSideEffects)o.pendingSideEffects[p]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function fR(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(r=>n(()=>yy(t,e).then(()=>{delete t._domDebouncedUpdatePromise,r()})))}function dR(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{fR(i,t)}}}}}const pR=new Set(["templateParams","htmlAttrs","bodyAttrs"]),gR={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=_y(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||yu(r),i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&pR.has(r.tag)&&(a="merge"),a==="merge"){const l=i.props;l.style&&r.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),r.props.style=`${l.style} ${r.props.style}`),l.class&&r.props.class?r.props.class=`${l.class} ${r.props.class}`:l.class&&(r.props.class=l.class),e[s].props={...l,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if($a(r)>$a(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&fa.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},mR=new Set(["script","link","bodyAttrs"]),_R=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!mR.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&Tp.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||ja(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);Tp.has(a)&&((i=(s=n._eventHandlers)==null?void 0:s[a])==null||i.call(e,new Event(a.substring(2))))}}}}),yR=new Set(["link","style","script","noscript"]),ER={hooks:{"tag:normalise":({tag:t})=>{t.key&&yR.has(t.tag)&&(t.props["data-hid"]=t._h=ja(t.key))}}},TR={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},wR={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of cR){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=$a(n),i=$a(r);return s<i?-1:s>i?1:n._p-r._p})}}},vR={meta:"content",link:"href",htmlAttrs:"lang"},IR=["innerHTML","textContent"],AR=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=e.tags.splice(a,1)[0].props,a-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=na(s.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const a of n){if(a.processTemplateParams===!1)continue;const l=vR[a.tag];if(l&&typeof a.props[l]=="string")a.props[l]=na(a.props[l],s,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of IR)typeof a[u]=="string"&&(a[u]=na(a[u],s,i,a.tag==="script"&&a.props.type.endsWith("json")))}t._templateParams=s,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"&&s.processTemplateParams!==!1&&(n=s)}n!=null&&n.textContent&&(n.textContent=na(n.textContent,t._templateParams,t._separator))}}}),bR={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=Ip(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=Ip(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},RR={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let Ey;function SR(t={}){const e=PR(t);return e.use(dR()),Ey=e}function Ap(t,e){return!t||t==="server"&&e||t==="client"&&!e}function PR(t={}){const e=ey();e.addHooks(t.hooks||{}),t.document=t.document||(rR?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),Ap(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const h={_i:s++,input:l,...u};return Ap(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(d=>d._i!==h._i),r()},patch(d){for(const p of i)p._i===h._i&&(p.input=h.input=d);r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const d of await aR(u)){const p={tag:d,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",p),l.tags.push(p.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[gR,TR,_R,ER,wR,AR,bR,RR,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function CR(){return Ey}const kR=j_[0]==="3";function NR(t){return typeof t=="function"?t():Ve(t)}function Tu(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=NR(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>Tu(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Ve(e[r]);continue}n[r]=Tu(e[r])}return n}return e}const DR={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=Tu(e.input)}}},Ty="usehead";function OR(t){return{install(n){kR&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Ty,t))}}.install}function VR(t={}){t.domDelayFn=t.domDelayFn||(n=>ts(()=>setTimeout(()=>n(),0)));const e=SR(t);return e.use(DR),e.install=OR(e),e}const wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vu="__unhead_injection_handler__";function xR(t){wu[vu]=t}function bx(){return vu in wu?wu[vu]():It(Ty)||CR()}const LR="modulepreload",MR=function(t,e){return new URL(t,e).href},bp={},$t=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=MR(u,r),u in bp)return;bp[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!r)for(let A=o.length-1;A>=0;A--){const C=o[A];if(C.href===u&&(!h||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":LR,h||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),h)return new Promise((A,C)=>{m.addEventListener("load",A),m.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let da,pa;function FR(){return da=$fetch(bh(`builds/meta/${go().app.buildId}.json`),{responseType:"json"}),da.then(t=>{pa=Pb(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),da}function Ac(){return da||FR()}async function Ph(t){const e=typeof t=="string"?t:t.path;if(await Ac(),!pa)return console.error("[nuxt] Error creating app manifest matcher.",pa),{};try{return iy({},...pa.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function Rp(t,e={}){const n=await BR(t,e),r=Ue(),s=r._payloadCache=r._payloadCache||{};return n in s?s[n]||null:(s[n]=vy(t).then(i=>i?wy(n).then(o=>o||(delete s[n],null)):(s[n]=null,null)),s[n])}const UR="_payload.json";async function BR(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||ns(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=go(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await vy(t)?i:r.app.baseURL;return Ah(o,n.pathname,UR+(s?`?${s}`:""))}async function wy(t){const e=fetch(t).then(n=>n.text().then(Iy));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function vy(t=Rh().path){const e=Ue();return t=Ih(t),(await Ac()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await Ph({path:t});return!!r.prerender&&!r.redirect})}let Br=null;async function jR(){var r;if(Br)return Br;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await Iy(t.textContent||""),n=t.dataset.src?await wy(t.dataset.src):void 0;return Br={...e,...n,...window.__NUXT__},(r=Br.config)!=null&&r.public&&(Br.config.public=In(Br.config.public)),Br}async function Iy(t){return await Xb(t,Ue()._payloadRevivers)}function Ay(t,e){Ue()._payloadRevivers[t]=e}const $R=bb(()=>{Ay("skipHydrate",t=>{})}),HR=[["NuxtError",t=>Ic(t)],["EmptyShallowRef",t=>zi(t==="_"?void 0:t==="0n"?BigInt(0):La(t))],["EmptyRef",t=>ct(t==="_"?void 0:t==="0n"?BigInt(0):La(t))],["ShallowRef",t=>zi(t)],["ShallowReactive",t=>On(t)],["Ref",t=>ct(t)],["Reactive",t=>In(t)]],qR=Vt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of HR)Ay(r,s);Object.assign(t.payload,([e,n]=Ds(()=>t.runWithContext(jR)),e=await e,n(),e)),window.__NUXT__=t.payload}}),WR=[],KR=Vt({name:"nuxt:head",enforce:"pre",setup(t){const e=VR({plugins:WR});xR(()=>Ue().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await yy(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const _s=typeof document<"u";function by(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&by(t.default)}const Pe=Object.assign;function Pl(t,e){const n={};for(const r in e){const s=e[r];n[r]=cn(s)?s.map(t):t(s)}return n}const Li=()=>{},cn=Array.isArray,Ry=/#/g,GR=/&/g,QR=/\//g,JR=/=/g,YR=/\?/g,Sy=/\+/g,XR=/%5B/g,ZR=/%5D/g,Py=/%5E/g,eS=/%60/g,Cy=/%7B/g,tS=/%7C/g,ky=/%7D/g,nS=/%20/g;function Ch(t){return encodeURI(""+t).replace(tS,"|").replace(XR,"[").replace(ZR,"]")}function rS(t){return Ch(t).replace(Cy,"{").replace(ky,"}").replace(Py,"^")}function Iu(t){return Ch(t).replace(Sy,"%2B").replace(nS,"+").replace(Ry,"%23").replace(GR,"%26").replace(eS,"`").replace(Cy,"{").replace(ky,"}").replace(Py,"^")}function sS(t){return Iu(t).replace(JR,"%3D")}function iS(t){return Ch(t).replace(Ry,"%23").replace(YR,"%3F")}function oS(t){return t==null?"":iS(t).replace(QR,"%2F")}function Xi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const aS=/\/$/,cS=t=>t.replace(aS,"");function Cl(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=fS(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Xi(o)}}function lS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Sp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Bs(e.matched[r],n.matched[s])&&Ny(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ny(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hS(t[n],e[n]))return!1;return!0}function hS(t,e){return cn(t)?Pp(t,e):cn(e)?Pp(e,t):t===e}function Pp(t,e){return cn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function fS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Zi;(function(t){t.pop="pop",t.push="push"})(Zi||(Zi={}));var Mi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Mi||(Mi={}));function dS(t){if(!t)if(_s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cS(t)}const pS=/^[^#]+#/;function gS(t,e){return t.replace(pS,"#")+e}function mS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const bc=()=>({left:window.scrollX,top:window.scrollY});function _S(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=mS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Cp(t,e){return(history.state?history.state.position-e:-1)+t}const Au=new Map;function yS(t,e){Au.set(t,e)}function ES(t){const e=Au.get(t);return Au.delete(t),e}let TS=()=>location.protocol+"//"+location.host;function Dy(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Sp(l,"")}return Sp(n,t)+r+s}function wS(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Dy(t,location),A=n.value,C=e.value;let D=0;if(p){if(n.value=m,e.value=p,o&&o===A){o=null;return}D=C?p.position-C.position:0}else r(m);s.forEach(x=>{x(n.value,A,{delta:D,type:Zi.pop,direction:D?D>0?Mi.forward:Mi.back:Mi.unknown})})};function l(){o=n.value}function u(p){s.push(p);const m=()=>{const A=s.indexOf(p);A>-1&&s.splice(A,1)};return i.push(m),m}function h(){const{history:p}=window;p.state&&p.replaceState(Pe({},p.state,{scroll:bc()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function kp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?bc():null}}function vS(t){const{history:e,location:n}=window,r={value:Dy(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:TS()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[h?"replace":"assign"](p)}}function o(l,u){const h=Pe({},e.state,kp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=Pe({},s.value,e.state,{forward:l,scroll:bc()});i(h.current,h,!0);const d=Pe({},kp(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function IS(t){t=dS(t);const e=vS(t),n=wS(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:gS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function AS(t){return typeof t=="string"||t&&typeof t=="object"}function Oy(t){return typeof t=="string"||typeof t=="symbol"}const Vy=Symbol("");var Np;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Np||(Np={}));function js(t,e){return Pe(new Error,{type:t,[Vy]:!0},e)}function Cn(t,e){return t instanceof Error&&Vy in t&&(e==null||!!(t.type&e))}const Dp="[^/]+?",bS={sensitive:!1,strict:!1,start:!0,end:!0},RS=/[.+*?^${}()[\]/\\]/g;function SS(t,e){const n=Pe({},bS,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(RS,"\\$&"),m+=40;else if(p.type===1){const{value:A,repeatable:C,optional:D,regexp:x}=p;i.push({name:A,repeatable:C,optional:D});const N=x||Dp;if(N!==Dp){m+=10;try{new RegExp(`(${N})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${A}" (${N}): `+k.message)}}let w=C?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(w=D&&u.length<2?`(?:/${w})`:"/"+w),D&&(w+="?"),s+=w,m+=20,D&&(m+=-8),C&&(m+=-20),N===".*"&&(m+=-50)}h.push(m)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const m=h[p]||"",A=i[p-1];d[A.name]=m&&A.repeatable?m.split("/"):m}return d}function l(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const m of p)if(m.type===0)h+=m.value;else if(m.type===1){const{value:A,repeatable:C,optional:D}=m,x=A in u?u[A]:"";if(cn(x)&&!C)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const N=cn(x)?x.join("/"):x;if(!N)if(D)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);h+=N}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function PS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function xy(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=PS(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Op(r))return 1;if(Op(s))return-1}return s.length-r.length}function Op(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const CS={type:0,value:""},kS=/[a-zA-Z0-9_]/;function NS(t){if(!t)return[[]];if(t==="/")return[[CS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:kS.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function DS(t,e,n){const r=SS(NS(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function OS(t,e){const n=[],r=new Map;e=Mp({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,m){const A=!m,C=xp(d);C.aliasOf=m&&m.record;const D=Mp(e,d),x=[C];if("alias"in d){const k=typeof d.alias=="string"?[d.alias]:d.alias;for(const O of k)x.push(xp(Pe({},C,{components:m?m.record.components:C.components,path:O,aliasOf:m?m.record:C})))}let N,w;for(const k of x){const{path:O}=k;if(p&&O[0]!=="/"){const L=p.record.path,v=L[L.length-1]==="/"?"":"/";k.path=p.record.path+(O&&v+O)}if(N=DS(k,p,D),m?m.alias.push(N):(w=w||N,w!==N&&w.alias.push(N),A&&d.name&&!Lp(N)&&o(d.name)),Ly(N)&&l(N),C.children){const L=C.children;for(let v=0;v<L.length;v++)i(L[v],N,m&&m.children[v])}m=m||N}return w?()=>{o(w)}:Li}function o(d){if(Oy(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=LS(d,n);n.splice(p,0,d),d.record.name&&!Lp(d)&&r.set(d.record.name,d)}function u(d,p){let m,A={},C,D;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw js(1,{location:d});D=m.record.name,A=Pe(Vp(p.params,m.keys.filter(w=>!w.optional).concat(m.parent?m.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&Vp(d.params,m.keys.map(w=>w.name))),C=m.stringify(A)}else if(d.path!=null)C=d.path,m=n.find(w=>w.re.test(C)),m&&(A=m.parse(C),D=m.record.name);else{if(m=p.name?r.get(p.name):n.find(w=>w.re.test(p.path)),!m)throw js(1,{location:d,currentLocation:p});D=m.record.name,A=Pe({},p.params,d.params),C=m.stringify(A)}const x=[];let N=m;for(;N;)x.unshift(N.record),N=N.parent;return{name:D,path:C,params:A,matched:x,meta:xS(x)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function Vp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function xp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:VS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function VS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Lp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xS(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function Mp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function LS(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;xy(t,e[i])<0?r=i:n=i+1}const s=MS(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function MS(t){let e=t;for(;e=e.parent;)if(Ly(e)&&xy(t,e)===0)return e}function Ly({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function FS(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Sy," "),o=i.indexOf("="),a=Xi(o<0?i:i.slice(0,o)),l=o<0?null:Xi(i.slice(o+1));if(a in e){let u=e[a];cn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Fp(t){let e="";for(let n in t){const r=t[n];if(n=sS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(cn(r)?r.map(i=>i&&Iu(i)):[r&&Iu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function US(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=cn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const BS=Symbol(""),Up=Symbol(""),kh=Symbol(""),Nh=Symbol(""),bu=Symbol("");function yi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function sr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(js(4,{from:n,to:e})):p instanceof Error?l(p):AS(p)?l(js(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function kl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(by(l)){const h=(l.__vccOpts||l)[e];h&&i.push(sr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=zR(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const m=(d.__vccOpts||d)[e];return m&&sr(m,n,r,o,a,s)()}))}}return i}function Bp(t){const e=It(kh),n=It(Nh),r=at(()=>{const l=Ve(t.to);return e.resolve(l)}),s=at(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(Bs.bind(null,h));if(p>-1)return p;const m=jp(l[u-2]);return u>1&&jp(h)===m&&d[d.length-1].path!==m?d.findIndex(Bs.bind(null,l[u-2])):p}),i=at(()=>s.value>-1&&WS(n.params,r.value.params)),o=at(()=>s.value>-1&&s.value===n.matched.length-1&&Ny(n.params,r.value.params));function a(l={}){if(qS(l)){const u=e[Ve(t.replace)?"replace":"push"](Ve(t.to)).catch(Li);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:at(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function jS(t){return t.length===1?t[0]:t}const $S=Cr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bp,setup(t,{slots:e}){const n=In(Bp(t)),{options:r}=It(kh),s=at(()=>({[$p(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$p(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&jS(e.default(n));return t.custom?i:Ut("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),HS=$S;function qS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function WS(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!cn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function jp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $p=(t,e,n)=>t??e??n,KS=Cr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=It(bu),s=at(()=>t.route||r.value),i=It(Up,0),o=at(()=>{let u=Ve(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=at(()=>s.value.matched[o.value]);zr(Up,at(()=>o.value+1)),zr(BS,a),zr(bu,s);const l=ct();return Gr(()=>[l.value,a.value,t.name],([u,h,d],[p,m,A])=>{h&&(h.instances[d]=u,m&&m!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!Bs(h,m)||!p)&&(h.enterCallbacks[d]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return Hp(n.default,{Component:p,route:u});const m=d.props[h],A=m?m===!0?u.params:typeof m=="function"?m(u):m:null,D=Ut(p,Pe({},A,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return Hp(n.default,{Component:D,route:u})||D}}});function Hp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const My=KS;function zS(t){const e=OS(t.routes,t),n=t.parseQuery||FS,r=t.stringifyQuery||Fp,s=t.history,i=yi(),o=yi(),a=yi(),l=zi(rn);let u=rn;_s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Pl.bind(null,B=>""+B),d=Pl.bind(null,oS),p=Pl.bind(null,Xi);function m(B,Z){let J,ne;return Oy(B)?(J=e.getRecordMatcher(B),ne=Z):ne=B,e.addRoute(ne,J)}function A(B){const Z=e.getRecordMatcher(B);Z&&e.removeRoute(Z)}function C(){return e.getRoutes().map(B=>B.record)}function D(B){return!!e.getRecordMatcher(B)}function x(B,Z){if(Z=Pe({},Z||l.value),typeof B=="string"){const P=Cl(n,B,Z.path),M=e.resolve({path:P.path},Z),H=s.createHref(P.fullPath);return Pe(P,M,{params:p(M.params),hash:Xi(P.hash),redirectedFrom:void 0,href:H})}let J;if(B.path!=null)J=Pe({},B,{path:Cl(n,B.path,Z.path).path});else{const P=Pe({},B.params);for(const M in P)P[M]==null&&delete P[M];J=Pe({},B,{params:d(P)}),Z.params=d(Z.params)}const ne=e.resolve(J,Z),Te=B.hash||"";ne.params=h(p(ne.params));const ke=lS(r,Pe({},B,{hash:rS(Te),path:ne.path})),b=s.createHref(ke);return Pe({fullPath:ke,hash:Te,query:r===Fp?US(B.query):B.query||{}},ne,{redirectedFrom:void 0,href:b})}function N(B){return typeof B=="string"?Cl(n,B,l.value.path):Pe({},B)}function w(B,Z){if(u!==B)return js(8,{from:Z,to:B})}function k(B){return v(B)}function O(B){return k(Pe(N(B),{replace:!0}))}function L(B){const Z=B.matched[B.matched.length-1];if(Z&&Z.redirect){const{redirect:J}=Z;let ne=typeof J=="function"?J(B):J;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=N(ne):{path:ne},ne.params={}),Pe({query:B.query,hash:B.hash,params:ne.path!=null?{}:B.params},ne)}}function v(B,Z){const J=u=x(B),ne=l.value,Te=B.state,ke=B.force,b=B.replace===!0,P=L(J);if(P)return v(Pe(N(P),{state:typeof P=="object"?Pe({},Te,P.state):Te,force:ke,replace:b}),Z||J);const M=J;M.redirectedFrom=Z;let H;return!ke&&uS(r,ne,J)&&(H=js(16,{to:M,from:ne}),Kt(ne,ne,!0,!1)),(H?Promise.resolve(H):T(M,ne)).catch(U=>Cn(U)?Cn(U,2)?U:tn(U):te(U,M,ne)).then(U=>{if(U){if(Cn(U,2))return v(Pe({replace:b},N(U.to),{state:typeof U.to=="object"?Pe({},Te,U.to.state):Te,force:ke}),Z||M)}else U=R(M,ne,!0,b,Te);return S(M,ne,U),U})}function y(B,Z){const J=w(B,Z);return J?Promise.reject(J):Promise.resolve()}function _(B){const Z=Kn.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(B):B()}function T(B,Z){let J;const[ne,Te,ke]=GS(B,Z);J=kl(ne.reverse(),"beforeRouteLeave",B,Z);for(const P of ne)P.leaveGuards.forEach(M=>{J.push(sr(M,B,Z))});const b=y.bind(null,B,Z);return J.push(b),xt(J).then(()=>{J=[];for(const P of i.list())J.push(sr(P,B,Z));return J.push(b),xt(J)}).then(()=>{J=kl(Te,"beforeRouteUpdate",B,Z);for(const P of Te)P.updateGuards.forEach(M=>{J.push(sr(M,B,Z))});return J.push(b),xt(J)}).then(()=>{J=[];for(const P of ke)if(P.beforeEnter)if(cn(P.beforeEnter))for(const M of P.beforeEnter)J.push(sr(M,B,Z));else J.push(sr(P.beforeEnter,B,Z));return J.push(b),xt(J)}).then(()=>(B.matched.forEach(P=>P.enterCallbacks={}),J=kl(ke,"beforeRouteEnter",B,Z,_),J.push(b),xt(J))).then(()=>{J=[];for(const P of o.list())J.push(sr(P,B,Z));return J.push(b),xt(J)}).catch(P=>Cn(P,8)?P:Promise.reject(P))}function S(B,Z,J){a.list().forEach(ne=>_(()=>ne(B,Z,J)))}function R(B,Z,J,ne,Te){const ke=w(B,Z);if(ke)return ke;const b=Z===rn,P=_s?history.state:{};J&&(ne||b?s.replace(B.fullPath,Pe({scroll:b&&P&&P.scroll},Te)):s.push(B.fullPath,Te)),l.value=B,Kt(B,Z,J,b),tn()}let I;function ge(){I||(I=s.listen((B,Z,J)=>{if(!un.listening)return;const ne=x(B),Te=L(ne);if(Te){v(Pe(Te,{replace:!0,force:!0}),ne).catch(Li);return}u=ne;const ke=l.value;_s&&yS(Cp(ke.fullPath,J.delta),bc()),T(ne,ke).catch(b=>Cn(b,12)?b:Cn(b,2)?(v(Pe(N(b.to),{force:!0}),ne).then(P=>{Cn(P,20)&&!J.delta&&J.type===Zi.pop&&s.go(-1,!1)}).catch(Li),Promise.reject()):(J.delta&&s.go(-J.delta,!1),te(b,ne,ke))).then(b=>{b=b||R(ne,ke,!1),b&&(J.delta&&!Cn(b,8)?s.go(-J.delta,!1):J.type===Zi.pop&&Cn(b,20)&&s.go(-1,!1)),S(ne,ke,b)}).catch(Li)}))}let _e=yi(),X=yi(),re;function te(B,Z,J){tn(B);const ne=X.list();return ne.length?ne.forEach(Te=>Te(B,Z,J)):console.error(B),Promise.reject(B)}function Be(){return re&&l.value!==rn?Promise.resolve():new Promise((B,Z)=>{_e.add([B,Z])})}function tn(B){return re||(re=!B,ge(),_e.list().forEach(([Z,J])=>B?J(B):Z()),_e.reset()),B}function Kt(B,Z,J,ne){const{scrollBehavior:Te}=t;if(!_s||!Te)return Promise.resolve();const ke=!J&&ES(Cp(B.fullPath,0))||(ne||!J)&&history.state&&history.state.scroll||null;return ts().then(()=>Te(B,Z,ke)).then(b=>b&&_S(b)).catch(b=>te(b,B,Z))}const je=B=>s.go(B);let $e;const Kn=new Set,un={currentRoute:l,listening:!0,addRoute:m,removeRoute:A,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:C,resolve:x,options:t,push:k,replace:O,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:Be,install(B){const Z=this;B.component("RouterLink",HS),B.component("RouterView",My),B.config.globalProperties.$router=Z,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Ve(l)}),_s&&!$e&&l.value===rn&&($e=!0,k(s.location).catch(Te=>{}));const J={};for(const Te in rn)Object.defineProperty(J,Te,{get:()=>l.value[Te],enumerable:!0});B.provide(kh,Z),B.provide(Nh,On(J)),B.provide(bu,l);const ne=B.unmount;Kn.add(B),B.unmount=function(){Kn.delete(B),Kn.size<1&&(u=rn,I&&I(),I=null,l.value=rn,$e=!1,re=!1),ne()}}};function xt(B){return B.reduce((Z,J)=>Z.then(()=>_(J)),Promise.resolve())}return un}function GS(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Bs(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Bs(u,l))||s.push(l))}return[n,r,s]}function QS(t){return It(Nh)}const JS=/(:\w+)\([^)]+\)/g,YS=/(:\w+)[?+*]/g,XS=/:\w+/g,ZS=(t,e)=>e.path.replace(JS,"$1").replace(YS,"$1").replace(XS,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Ru=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&ZS(t.route,n));return typeof r=="function"?r(t.route):r},eP=(t,e)=>({default:()=>t?Ut(Dv,t===!0?{}:t,e):e});function Dh(t){return Array.isArray(t)?t:[t]}const tP={layout:"app",middleware:["auth"]};const Nl=[{name:"app",path:"/app",meta:tP,component:()=>$t(()=>import("./BcZfaBNL.js"),[],import.meta.url),children:[{name:"app-cash-register",path:"cash-register",component:()=>$t(()=>import("./D_5T05FH.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)},{name:"app-settings",path:"settings",component:()=>$t(()=>import("./D9KVOsHh.js"),__vite__mapDeps([4,5]),import.meta.url)},{name:"app-stock-id",path:"stock/:id()",component:()=>$t(()=>import("./GV6FXUKg.js"),[],import.meta.url)},{name:"app-stock",path:"stock",component:()=>$t(()=>import("./aaBQP10p.js"),__vite__mapDeps([6,3,7]),import.meta.url)},{name:"app-tickets-id",path:"tickets/:id()",component:()=>$t(()=>import("./C_kkB4BP.js"),__vite__mapDeps([8,1,9]),import.meta.url)},{name:"app-tickets",path:"tickets",component:()=>$t(()=>import("./BLcGuwlG.js"),__vite__mapDeps([10,7,9]),import.meta.url)}]},{name:"login",path:"/login",component:()=>$t(()=>import("./DCAgJPg3.js"),__vite__mapDeps([11,5]),import.meta.url)}],Fy=(t,e)=>({default:()=>{var n;return t?Ut(xI,t===!0?{}:t,e):(n=e.default)==null?void 0:n.call(e)}}),nP=/(:\w+)\([^)]+\)/g,rP=/(:\w+)[?+*]/g,sP=/:\w+/g;function qp(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(nP,"$1").replace(rP,"$1").replace(sP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function iP(t,e){return t===e||e===rn?!1:qp(t)!==qp(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const oP={scrollBehavior(t,e,n){var u;const r=Ue(),s=((u=en().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&iP(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Wp(t.hash),behavior:s}:!1;const a=h=>!!(h.meta.pageTransition??hu),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(l,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:Wp(t.hash),behavior:s}),h(i)})})}};function Wp(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const aP={hashMode:!1,scrollBehaviorType:"auto"},Qt={...aP,...oP},cP=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=Ue(),s=en(),i=([e,n]=Ds(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=Ic({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>Is(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},lP=t=>{if(t.path==="/")return Vb("/app/cash-register")},uP=async t=>{let e,n;const r=([e,n]=Ds(()=>Ph({path:t.path})),e=await e,n(),e);if(r.redirect)return ns(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},hP=[cP,lP,uP],Fi={auth:()=>$t(()=>import("./DRA4Un2F.js"),[],import.meta.url)};function fP(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),lp(h,"")}const a=lp(r,t),l=!n||FA(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const dP=Vt({name:"nuxt:router",enforce:"pre",async setup(t){var D;let e,n,r=go().app.baseURL;const s=((D=Qt.history)==null?void 0:D.call(Qt,r))??IS(r),i=Qt.routes?([e,n]=Ds(()=>Qt.routes(Nl)),e=await e,n(),e??Nl):Nl;let o;const a=zS({...Qt,scrollBehavior:(x,N,w)=>{if(N===rn){o=w;return}if(Qt.scrollBehavior){if(a.options.scrollBehavior=Qt.scrollBehavior,"scrollRestoration"in window.history){const k=a.beforeEach(()=>{k(),window.history.scrollRestoration="manual"})}return Qt.scrollBehavior(x,rn,o||w)}},history:s,routes:i});Qt.routes&&Qt.routes,"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=zi(a.currentRoute.value);a.afterEach((x,N)=>{l.value=N}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=fP(r,window.location,t.payload.path),h=zi(a.currentRoute.value),d=()=>{h.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((x,N)=>{var w,k,O,L;((k=(w=x.matched[0])==null?void 0:w.components)==null?void 0:k.default)===((L=(O=N.matched[0])==null?void 0:O.components)==null?void 0:L.default)&&d()});const p={};for(const x in h.value)Object.defineProperty(p,x,{get:()=>h.value[x],enumerable:!0});t._route=On(p),t._middleware=t._middleware||{global:[],named:{}};const m=vc();a.afterEach(async(x,N,w)=>{delete t._processingMiddleware,!t.isHydrating&&m.value&&await t.runWithContext(Lb),w&&await t.callHook("page:loading:end")});try{[e,n]=Ds(()=>a.isReady()),await e,n()}catch(x){[e,n]=Ds(()=>t.runWithContext(()=>Is(x))),await e,n()}const A=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const C=t.payload.state._layout;return a.beforeEach(async(x,N)=>{var w;await t.callHook("page:loading:start"),x.meta=In(x.meta),t.isHydrating&&C&&!yr(x.meta.layout)&&(x.meta.layout=C),t._processingMiddleware=!0;{const k=new Set([...hP,...t._middleware.global]);for(const O of x.matched){const L=O.meta.middleware;if(L)for(const v of Dh(L))k.add(v)}{const O=await t.runWithContext(()=>Ph({path:x.path}));if(O.appMiddleware)for(const L in O.appMiddleware)O.appMiddleware[L]?k.add(L):k.delete(L)}for(const O of k){const L=typeof O=="string"?t._middleware.named[O]||await((w=Fi[O])==null?void 0:w.call(Fi).then(y=>y.default||y)):O;if(!L)throw new Error(`Unknown route middleware: '${O}'.`);const v=await t.runWithContext(()=>L(x,N));if(!t.payload.serverRendered&&t.isHydrating&&(v===!1||v instanceof Error)){const y=v||pu({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Is(y)),!1}if(v!==!0&&(v||v===!1))return v}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(x,N)=>{x.matched.length===0&&await t.runWithContext(()=>Is(pu({statusCode:404,fatal:!1,statusMessage:`Page not found: ${x.fullPath}`,data:{path:x.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in A&&(A.name=void 0),await a.replace({...A,force:!0}),a.options.scrollBehavior=Qt.scrollBehavior}catch(x){await t.runWithContext(()=>Is(x))}}),{provide:{router:a}}}}),Kp=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),Rx=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Oh=t=>{const e=Ue();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Kp(()=>t())}):Kp(()=>t())},pP=Vt({name:"nuxt:payload",setup(t){en().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await Rp(e.path);r&&Object.assign(t.static.data,r.data)}),Oh(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await Rp(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Ac,1e3)})}}),gP=Vt(()=>{const t=en();Oh(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),mP=Vt(t=>{let e;async function n(){const r=await Ac();e&&clearTimeout(e),e=setTimeout(n,pp);try{const s=await $fetch(bh("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}Oh(()=>{e=setTimeout(n,pp)})});function _P(t={}){const e=t.path||window.location.pathname;let n={};try{n=La(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Ue().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const yP=Vt({name:"nuxt:chunk-reload",setup(t){const e=en(),n=go(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Ah(n.app.baseURL,i.fullPath);_P({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),EP="$s";function TP(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,r]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s=EP+n,i=Ue(),o=Wm(i.payload.state,s);if(o.value===void 0&&r){const a=r();if(qe(a))return i.payload.state[s]=a,a;o.value=a}return o}const wP=Vt({name:"pinia",setup(t){const e=Fb();return t.vueApp.use(e),_o(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}}),vP=Vt({name:"nuxt:global-components"}),lr={app:Na(()=>$t(()=>import("./DBmQUb37.js"),__vite__mapDeps([12,7,2]),import.meta.url).then(t=>t.default||t)),default:Na(()=>$t(()=>import("./BknLhPSa.js"),[],import.meta.url).then(t=>t.default||t))},IP=Vt({name:"nuxt:prefetch",setup(t){const e=en();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof lr[r]=="function"&&await lr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(ns(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=Dh(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Fi[o]=="function"&&Fi[o]();s&&typeof lr[s]=="function"&&lr[s]()})}});var zp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},AP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},By={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(p=64)),r.push(n[h],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Uy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new bP;const p=i<<2|a>>4;if(r.push(p),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const A=u<<6&192|d;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RP=function(t){const e=Uy(t);return By.encodeByteArray(e,!0)},Ha=function(t){return RP(t).replace(/\./g,"")},jy=function(t){try{return By.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=()=>SP().__FIREBASE_DEFAULTS__,CP=()=>{if(typeof process>"u"||typeof zp>"u")return;const t=zp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jy(t[1]);return e&&JSON.parse(e)},Rc=()=>{try{return PP()||CP()||kP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$y=t=>{var e,n;return(n=(e=Rc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Hy=t=>{const e=$y(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qy=()=>{var t;return(t=Rc())===null||t===void 0?void 0:t.config},Wy=t=>{var e;return(e=Rc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ha(JSON.stringify(n)),Ha(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function VP(){var t;const e=(t=Rc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function xP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function LP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function MP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FP(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UP(){return!VP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BP(){try{return typeof indexedDB=="object"}catch{return!1}}function jP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$P,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?HP(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new An(s,a,r)}}function HP(t,e){return t.replace(qP,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qP=/\{\$([^}]+)}/g;function WP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Gp(i)&&Gp(o)){if(!qa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Gp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function KP(t,e){const n=new zP(t,e);return n.subscribe.bind(n)}class zP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GP(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Dl),s.error===void 0&&(s.error=Dl),s.complete===void 0&&(s.complete=Dl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t){return t&&t._delegate?t._delegate:t}class Er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YP(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:JP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JP(t){return t===Hr?void 0:t}function YP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const ZP={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},eC=ye.INFO,tC={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},nC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=tC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vh{constructor(e){this.name=e,this._logLevel=eC,this._logHandler=nC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const rC=(t,e)=>e.some(n=>t instanceof n);let Qp,Jp;function sC(){return Qp||(Qp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iC(){return Jp||(Jp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ky=new WeakMap,Su=new WeakMap,zy=new WeakMap,Ol=new WeakMap,xh=new WeakMap;function oC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ky.set(n,t)}).catch(()=>{}),xh.set(e,t),e}function aC(t){if(Su.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Su.set(t,e)}let Pu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Su.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cC(t){Pu=t(Pu)}function lC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vl(this),e,...n);return zy.set(r,e.sort?e.sort():[e]),dr(r)}:iC().includes(t)?function(...e){return t.apply(Vl(this),e),dr(Ky.get(this))}:function(...e){return dr(t.apply(Vl(this),e))}}function uC(t){return typeof t=="function"?lC(t):(t instanceof IDBTransaction&&aC(t),rC(t,sC())?new Proxy(t,Pu):t)}function dr(t){if(t instanceof IDBRequest)return oC(t);if(Ol.has(t))return Ol.get(t);const e=uC(t);return e!==t&&(Ol.set(t,e),xh.set(e,t)),e}const Vl=t=>xh.get(t);function hC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=dr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(dr(o.result),l.oldVersion,l.newVersion,dr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const fC=["get","getKey","getAll","getAllKeys","count"],dC=["put","add","delete","clear"],xl=new Map;function Yp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xl.get(e))return xl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=dC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fC.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return xl.set(e,i),i}cC(t=>({...t,get:(e,n,r)=>Yp(e,n)||t.get(e,n,r),has:(e,n)=>!!Yp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cu="@firebase/app",Xp="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Vh("@firebase/app"),mC="@firebase/app-compat",_C="@firebase/analytics-compat",yC="@firebase/analytics",EC="@firebase/app-check-compat",TC="@firebase/app-check",wC="@firebase/auth",vC="@firebase/auth-compat",IC="@firebase/database",AC="@firebase/data-connect",bC="@firebase/database-compat",RC="@firebase/functions",SC="@firebase/functions-compat",PC="@firebase/installations",CC="@firebase/installations-compat",kC="@firebase/messaging",NC="@firebase/messaging-compat",DC="@firebase/performance",OC="@firebase/performance-compat",VC="@firebase/remote-config",xC="@firebase/remote-config-compat",LC="@firebase/storage",MC="@firebase/storage-compat",FC="@firebase/firestore",UC="@firebase/vertexai",BC="@firebase/firestore-compat",jC="firebase",$C="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="[DEFAULT]",HC={[Cu]:"fire-core",[mC]:"fire-core-compat",[yC]:"fire-analytics",[_C]:"fire-analytics-compat",[TC]:"fire-app-check",[EC]:"fire-app-check-compat",[wC]:"fire-auth",[vC]:"fire-auth-compat",[IC]:"fire-rtdb",[AC]:"fire-data-connect",[bC]:"fire-rtdb-compat",[RC]:"fire-fn",[SC]:"fire-fn-compat",[PC]:"fire-iid",[CC]:"fire-iid-compat",[kC]:"fire-fcm",[NC]:"fire-fcm-compat",[DC]:"fire-perf",[OC]:"fire-perf-compat",[VC]:"fire-rc",[xC]:"fire-rc-compat",[LC]:"fire-gcs",[MC]:"fire-gcs-compat",[FC]:"fire-fst",[BC]:"fire-fst-compat",[UC]:"fire-vertex","fire-js":"fire-js",[jC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=new Map,qC=new Map,Nu=new Map;function Zp(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yr(t){const e=t.name;if(Nu.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;Nu.set(e,t);for(const n of Wa.values())Zp(n,t);for(const n of qC.values())Zp(n,t);return!0}function Sc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pr=new yo("app","Firebase",WC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=$C;function Gy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ku,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw pr.create("bad-app-name",{appName:String(s)});if(n||(n=qy()),!n)throw pr.create("no-options");const i=Wa.get(s);if(i){if(qa(n,i.options)&&qa(r,i.config))return i;throw pr.create("duplicate-app",{appName:s})}const o=new XP(s);for(const l of Nu.values())o.addComponent(l);const a=new KC(n,r,o);return Wa.set(s,a),a}function Lh(t=ku){const e=Wa.get(t);if(!e&&t===ku&&qy())return Gy();if(!e)throw pr.create("no-app",{appName:t});return e}function mn(t,e,n){var r;let s=(r=HC[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(a.join(" "));return}Yr(new Er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="firebase-heartbeat-database",GC=1,eo="firebase-heartbeat-store";let Ll=null;function Qy(){return Ll||(Ll=hC(zC,GC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(eo)}catch(n){console.warn(n)}}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),Ll}async function QC(t){try{const n=(await Qy()).transaction(eo),r=await n.objectStore(eo).get(Jy(t));return await n.done,r}catch(e){if(e instanceof An)Bn.warn(e.message);else{const n=pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function eg(t,e){try{const r=(await Qy()).transaction(eo,"readwrite");await r.objectStore(eo).put(e,Jy(t)),await r.done}catch(n){if(n instanceof An)Bn.warn(n.message);else{const r=pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function Jy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=1024,YC=30*24*60*60*1e3;class XC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ek(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=YC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tg(),{heartbeatsToSend:r,unsentEntries:s}=ZC(this._heartbeatsCache.heartbeats),i=Ha(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Bn.warn(n),""}}}function tg(){return new Date().toISOString().substring(0,10)}function ZC(t,e=JC){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ng(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ng(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ek{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BP()?jP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await QC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return eg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return eg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ng(t){return Ha(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t){Yr(new Er("platform-logger",e=>new pC(e),"PRIVATE")),Yr(new Er("heartbeat",e=>new XC(e),"PRIVATE")),mn(Cu,Xp,t),mn(Cu,Xp,"esm2017"),mn("fire-js","")}tk("");var nk="firebase",rk="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn(nk,rk,"app");var rg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gr,Yy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function _(){}_.prototype=y.prototype,v.D=y.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(T,S,R){for(var I=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)I[ge-2]=arguments[ge];return y.prototype[S].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,y,_){_||(_=0);var T=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)T[S]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(S=0;16>S;++S)T[S]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=v.g[0],_=v.g[1],S=v.g[2];var R=v.g[3],I=y+(R^_&(S^R))+T[0]+3614090360&4294967295;y=_+(I<<7&4294967295|I>>>25),I=R+(S^y&(_^S))+T[1]+3905402710&4294967295,R=y+(I<<12&4294967295|I>>>20),I=S+(_^R&(y^_))+T[2]+606105819&4294967295,S=R+(I<<17&4294967295|I>>>15),I=_+(y^S&(R^y))+T[3]+3250441966&4294967295,_=S+(I<<22&4294967295|I>>>10),I=y+(R^_&(S^R))+T[4]+4118548399&4294967295,y=_+(I<<7&4294967295|I>>>25),I=R+(S^y&(_^S))+T[5]+1200080426&4294967295,R=y+(I<<12&4294967295|I>>>20),I=S+(_^R&(y^_))+T[6]+2821735955&4294967295,S=R+(I<<17&4294967295|I>>>15),I=_+(y^S&(R^y))+T[7]+4249261313&4294967295,_=S+(I<<22&4294967295|I>>>10),I=y+(R^_&(S^R))+T[8]+1770035416&4294967295,y=_+(I<<7&4294967295|I>>>25),I=R+(S^y&(_^S))+T[9]+2336552879&4294967295,R=y+(I<<12&4294967295|I>>>20),I=S+(_^R&(y^_))+T[10]+4294925233&4294967295,S=R+(I<<17&4294967295|I>>>15),I=_+(y^S&(R^y))+T[11]+2304563134&4294967295,_=S+(I<<22&4294967295|I>>>10),I=y+(R^_&(S^R))+T[12]+1804603682&4294967295,y=_+(I<<7&4294967295|I>>>25),I=R+(S^y&(_^S))+T[13]+4254626195&4294967295,R=y+(I<<12&4294967295|I>>>20),I=S+(_^R&(y^_))+T[14]+2792965006&4294967295,S=R+(I<<17&4294967295|I>>>15),I=_+(y^S&(R^y))+T[15]+1236535329&4294967295,_=S+(I<<22&4294967295|I>>>10),I=y+(S^R&(_^S))+T[1]+4129170786&4294967295,y=_+(I<<5&4294967295|I>>>27),I=R+(_^S&(y^_))+T[6]+3225465664&4294967295,R=y+(I<<9&4294967295|I>>>23),I=S+(y^_&(R^y))+T[11]+643717713&4294967295,S=R+(I<<14&4294967295|I>>>18),I=_+(R^y&(S^R))+T[0]+3921069994&4294967295,_=S+(I<<20&4294967295|I>>>12),I=y+(S^R&(_^S))+T[5]+3593408605&4294967295,y=_+(I<<5&4294967295|I>>>27),I=R+(_^S&(y^_))+T[10]+38016083&4294967295,R=y+(I<<9&4294967295|I>>>23),I=S+(y^_&(R^y))+T[15]+3634488961&4294967295,S=R+(I<<14&4294967295|I>>>18),I=_+(R^y&(S^R))+T[4]+3889429448&4294967295,_=S+(I<<20&4294967295|I>>>12),I=y+(S^R&(_^S))+T[9]+568446438&4294967295,y=_+(I<<5&4294967295|I>>>27),I=R+(_^S&(y^_))+T[14]+3275163606&4294967295,R=y+(I<<9&4294967295|I>>>23),I=S+(y^_&(R^y))+T[3]+4107603335&4294967295,S=R+(I<<14&4294967295|I>>>18),I=_+(R^y&(S^R))+T[8]+1163531501&4294967295,_=S+(I<<20&4294967295|I>>>12),I=y+(S^R&(_^S))+T[13]+2850285829&4294967295,y=_+(I<<5&4294967295|I>>>27),I=R+(_^S&(y^_))+T[2]+4243563512&4294967295,R=y+(I<<9&4294967295|I>>>23),I=S+(y^_&(R^y))+T[7]+1735328473&4294967295,S=R+(I<<14&4294967295|I>>>18),I=_+(R^y&(S^R))+T[12]+2368359562&4294967295,_=S+(I<<20&4294967295|I>>>12),I=y+(_^S^R)+T[5]+4294588738&4294967295,y=_+(I<<4&4294967295|I>>>28),I=R+(y^_^S)+T[8]+2272392833&4294967295,R=y+(I<<11&4294967295|I>>>21),I=S+(R^y^_)+T[11]+1839030562&4294967295,S=R+(I<<16&4294967295|I>>>16),I=_+(S^R^y)+T[14]+4259657740&4294967295,_=S+(I<<23&4294967295|I>>>9),I=y+(_^S^R)+T[1]+2763975236&4294967295,y=_+(I<<4&4294967295|I>>>28),I=R+(y^_^S)+T[4]+1272893353&4294967295,R=y+(I<<11&4294967295|I>>>21),I=S+(R^y^_)+T[7]+4139469664&4294967295,S=R+(I<<16&4294967295|I>>>16),I=_+(S^R^y)+T[10]+3200236656&4294967295,_=S+(I<<23&4294967295|I>>>9),I=y+(_^S^R)+T[13]+681279174&4294967295,y=_+(I<<4&4294967295|I>>>28),I=R+(y^_^S)+T[0]+3936430074&4294967295,R=y+(I<<11&4294967295|I>>>21),I=S+(R^y^_)+T[3]+3572445317&4294967295,S=R+(I<<16&4294967295|I>>>16),I=_+(S^R^y)+T[6]+76029189&4294967295,_=S+(I<<23&4294967295|I>>>9),I=y+(_^S^R)+T[9]+3654602809&4294967295,y=_+(I<<4&4294967295|I>>>28),I=R+(y^_^S)+T[12]+3873151461&4294967295,R=y+(I<<11&4294967295|I>>>21),I=S+(R^y^_)+T[15]+530742520&4294967295,S=R+(I<<16&4294967295|I>>>16),I=_+(S^R^y)+T[2]+3299628645&4294967295,_=S+(I<<23&4294967295|I>>>9),I=y+(S^(_|~R))+T[0]+4096336452&4294967295,y=_+(I<<6&4294967295|I>>>26),I=R+(_^(y|~S))+T[7]+1126891415&4294967295,R=y+(I<<10&4294967295|I>>>22),I=S+(y^(R|~_))+T[14]+2878612391&4294967295,S=R+(I<<15&4294967295|I>>>17),I=_+(R^(S|~y))+T[5]+4237533241&4294967295,_=S+(I<<21&4294967295|I>>>11),I=y+(S^(_|~R))+T[12]+1700485571&4294967295,y=_+(I<<6&4294967295|I>>>26),I=R+(_^(y|~S))+T[3]+2399980690&4294967295,R=y+(I<<10&4294967295|I>>>22),I=S+(y^(R|~_))+T[10]+4293915773&4294967295,S=R+(I<<15&4294967295|I>>>17),I=_+(R^(S|~y))+T[1]+2240044497&4294967295,_=S+(I<<21&4294967295|I>>>11),I=y+(S^(_|~R))+T[8]+1873313359&4294967295,y=_+(I<<6&4294967295|I>>>26),I=R+(_^(y|~S))+T[15]+4264355552&4294967295,R=y+(I<<10&4294967295|I>>>22),I=S+(y^(R|~_))+T[6]+2734768916&4294967295,S=R+(I<<15&4294967295|I>>>17),I=_+(R^(S|~y))+T[13]+1309151649&4294967295,_=S+(I<<21&4294967295|I>>>11),I=y+(S^(_|~R))+T[4]+4149444226&4294967295,y=_+(I<<6&4294967295|I>>>26),I=R+(_^(y|~S))+T[11]+3174756917&4294967295,R=y+(I<<10&4294967295|I>>>22),I=S+(y^(R|~_))+T[2]+718787259&4294967295,S=R+(I<<15&4294967295|I>>>17),I=_+(R^(S|~y))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(S+(I<<21&4294967295|I>>>11))&4294967295,v.g[2]=v.g[2]+S&4294967295,v.g[3]=v.g[3]+R&4294967295}r.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var _=y-this.blockSize,T=this.B,S=this.h,R=0;R<y;){if(S==0)for(;R<=_;)s(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<y;)if(T[S++]=v.charCodeAt(R++),S==this.blockSize){s(this,T),S=0;break}}else for(;R<y;)if(T[S++]=v[R++],S==this.blockSize){s(this,T),S=0;break}}this.h=S,this.o+=y},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var _=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=_&255,_/=256;for(this.u(v),v=Array(16),y=_=0;4>y;++y)for(var T=0;32>T;T+=8)v[_++]=this.g[y]>>>T&255;return v};function i(v,y){var _=a;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=y(v)}function o(v,y){this.h=y;for(var _=[],T=!0,S=v.length-1;0<=S;S--){var R=v[S]|0;T&&R==y||(_[S]=R,T=!1)}this.g=_}var a={};function l(v){return-128<=v&&128>v?i(v,function(y){return new o([y|0],0>y?-1:0)}):new o([v|0],0>v?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return d;if(0>v)return D(u(-v));for(var y=[],_=1,T=0;v>=_;T++)y[T]=v/_|0,_*=4294967296;return new o(y,0)}function h(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return D(h(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),T=d,S=0;S<v.length;S+=8){var R=Math.min(8,v.length-S),I=parseInt(v.substring(S,S+R),y);8>R?(R=u(Math.pow(y,R)),T=T.j(R).add(u(I))):(T=T.j(_),T=T.add(u(I)))}return T}var d=l(0),p=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(C(this))return-D(this).m();for(var v=0,y=1,_=0;_<this.g.length;_++){var T=this.i(_);v+=(0<=T?T:4294967296+T)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A(this))return"0";if(C(this))return"-"+D(this).toString(v);for(var y=u(Math.pow(v,6)),_=this,T="";;){var S=k(_,y).g;_=x(_,S.j(y));var R=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=S,A(_))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function A(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function C(v){return v.h==-1}t.l=function(v){return v=x(this,v),C(v)?-1:A(v)?0:1};function D(v){for(var y=v.g.length,_=[],T=0;T<y;T++)_[T]=~v.g[T];return new o(_,~v.h).add(p)}t.abs=function(){return C(this)?D(this):this},t.add=function(v){for(var y=Math.max(this.g.length,v.g.length),_=[],T=0,S=0;S<=y;S++){var R=T+(this.i(S)&65535)+(v.i(S)&65535),I=(R>>>16)+(this.i(S)>>>16)+(v.i(S)>>>16);T=I>>>16,R&=65535,I&=65535,_[S]=I<<16|R}return new o(_,_[_.length-1]&-2147483648?-1:0)};function x(v,y){return v.add(D(y))}t.j=function(v){if(A(this)||A(v))return d;if(C(this))return C(v)?D(this).j(D(v)):D(D(this).j(v));if(C(v))return D(this.j(D(v)));if(0>this.l(m)&&0>v.l(m))return u(this.m()*v.m());for(var y=this.g.length+v.g.length,_=[],T=0;T<2*y;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var S=0;S<v.g.length;S++){var R=this.i(T)>>>16,I=this.i(T)&65535,ge=v.i(S)>>>16,_e=v.i(S)&65535;_[2*T+2*S]+=I*_e,N(_,2*T+2*S),_[2*T+2*S+1]+=R*_e,N(_,2*T+2*S+1),_[2*T+2*S+1]+=I*ge,N(_,2*T+2*S+1),_[2*T+2*S+2]+=R*ge,N(_,2*T+2*S+2)}for(T=0;T<y;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=y;T<2*y;T++)_[T]=0;return new o(_,0)};function N(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function w(v,y){this.g=v,this.h=y}function k(v,y){if(A(y))throw Error("division by zero");if(A(v))return new w(d,d);if(C(v))return y=k(D(v),y),new w(D(y.g),D(y.h));if(C(y))return y=k(v,D(y)),new w(D(y.g),y.h);if(30<v.g.length){if(C(v)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var _=p,T=y;0>=T.l(v);)_=O(_),T=O(T);var S=L(_,1),R=L(T,1);for(T=L(T,2),_=L(_,2);!A(T);){var I=R.add(T);0>=I.l(v)&&(S=S.add(_),R=I),T=L(T,1),_=L(_,1)}return y=x(v,S.j(y)),new w(S,y)}for(S=d;0<=v.l(y);){for(_=Math.max(1,Math.floor(v.m()/y.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=u(_),I=R.j(y);C(I)||0<I.l(v);)_-=T,R=u(_),I=R.j(y);A(R)&&(R=p),S=S.add(R),v=x(v,I)}return new w(S,v)}t.A=function(v){return k(this,v).h},t.and=function(v){for(var y=Math.max(this.g.length,v.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)&v.i(T);return new o(_,this.h&v.h)},t.or=function(v){for(var y=Math.max(this.g.length,v.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)|v.i(T);return new o(_,this.h|v.h)},t.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)^v.i(T);return new o(_,this.h^v.h)};function O(v){for(var y=v.g.length+1,_=[],T=0;T<y;T++)_[T]=v.i(T)<<1|v.i(T-1)>>>31;return new o(_,v.h)}function L(v,y){var _=y>>5;y%=32;for(var T=v.g.length-_,S=[],R=0;R<T;R++)S[R]=0<y?v.i(R+_)>>>y|v.i(R+_+1)<<32-y:v.i(R+_);return new o(S,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Yy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,gr=o}).apply(typeof rg<"u"?rg:typeof self<"u"?self:typeof window<"u"?window:{});var ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xy,Ai,Zy,ga,Du,eE,tE,nE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,g){return c==Array.prototype||c==Object.prototype||(c[f]=g.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof ra=="object"&&ra];for(var f=0;f<c.length;++f){var g=c[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var g=r;c=c.split(".");for(var E=0;E<c.length-1;E++){var V=c[E];if(!(V in g))break e;g=g[V]}c=c[c.length-1],E=g[c],f=f(E),f!=E&&f!=null&&e(g,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var g=0,E=!1,V={next:function(){if(!E&&g<c.length){var F=g++;return{value:f(F,c[F]),done:!1}}return E=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}s("Array.prototype.values",function(c){return c||function(){return i(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,g){return c.call.apply(c.bind,arguments)}function d(c,f,g){if(!c)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,E),c.apply(f,V)}}return function(){return c.apply(f,arguments)}}function p(c,f,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function m(c,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),c.apply(this,E)}}function A(c,f){function g(){}g.prototype=f.prototype,c.aa=f.prototype,c.prototype=new g,c.prototype.constructor=c,c.Qb=function(E,V,F){for(var G=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)G[Ne-2]=arguments[Ne];return f.prototype[V].apply(E,G)}}function C(c){const f=c.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=c[E];return g}return[]}function D(c,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(l(E)){const V=c.length||0,F=E.length||0;c.length=V+F;for(let G=0;G<F;G++)c[V+G]=E[G]}else c.push(E)}}class x{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function N(c){return/^[\s\xa0]*$/.test(c)}function w(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function k(c){return k[" "](c),c}k[" "]=function(){};var O=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function L(c,f,g){for(const E in c)f.call(g,c[E],E,c)}function v(c,f){for(const g in c)f.call(void 0,c[g],g,c)}function y(c){const f={};for(const g in c)f[g]=c[g];return f}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(c,f){let g,E;for(let V=1;V<arguments.length;V++){E=arguments[V];for(g in E)c[g]=E[g];for(let F=0;F<_.length;F++)g=_[F],Object.prototype.hasOwnProperty.call(E,g)&&(c[g]=E[g])}}function S(c){var f=1;c=c.split(":");const g=[];for(;0<f&&c.length;)g.push(c.shift()),f--;return c.length&&g.push(c.join(":")),g}function R(c){a.setTimeout(()=>{throw c},0)}function I(){var c=Be;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class ge{constructor(){this.h=this.g=null}add(f,g){const E=_e.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var _e=new x(()=>new X,c=>c.reset());class X{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let re,te=!1,Be=new ge,tn=()=>{const c=a.Promise.resolve(void 0);re=()=>{c.then(Kt)}};var Kt=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(g){R(g)}var f=_e;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}te=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var Kn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};a.addEventListener("test",g,f),a.removeEventListener("test",g,f)}catch{}return c}();function un(c,f){if($e.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var g=this.type=c.type,E=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(O){e:{try{k(f.nodeName);var V=!0;break e}catch{}V=!1}V||(f=null)}}else g=="mouseover"?f=c.fromElement:g=="mouseout"&&(f=c.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:xt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&un.aa.h.call(this)}}A(un,$e);var xt={2:"touch",3:"pen",4:"mouse"};un.prototype.h=function(){un.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),Z=0;function J(c,f,g,E,V){this.listener=c,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=V,this.key=++Z,this.da=this.fa=!1}function ne(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Te(c){this.src=c,this.g={},this.h=0}Te.prototype.add=function(c,f,g,E,V){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var G=b(c,f,E,V);return-1<G?(f=c[G],g||(f.fa=!1)):(f=new J(f,this.src,F,!!E,V),f.fa=g,c.push(f)),f};function ke(c,f){var g=f.type;if(g in c.g){var E=c.g[g],V=Array.prototype.indexOf.call(E,f,void 0),F;(F=0<=V)&&Array.prototype.splice.call(E,V,1),F&&(ne(f),c.g[g].length==0&&(delete c.g[g],c.h--))}}function b(c,f,g,E){for(var V=0;V<c.length;++V){var F=c[V];if(!F.da&&F.listener==f&&F.capture==!!g&&F.ha==E)return V}return-1}var P="closure_lm_"+(1e6*Math.random()|0),M={};function H(c,f,g,E,V){if(Array.isArray(f)){for(var F=0;F<f.length;F++)H(c,f[F],g,E,V);return null}return g=oe(g),c&&c[B]?c.K(f,g,u(E)?!!E.capture:!1,V):U(c,f,g,!1,E,V)}function U(c,f,g,E,V,F){if(!f)throw Error("Invalid event type");var G=u(V)?!!V.capture:!!V,Ne=ae(c);if(Ne||(c[P]=Ne=new Te(c)),g=Ne.add(f,g,E,G,F),g.proxy)return g;if(E=q(),g.proxy=E,E.src=c,E.listener=g,c.addEventListener)Kn||(V=G),V===void 0&&(V=!1),c.addEventListener(f.toString(),E,V);else if(c.attachEvent)c.attachEvent(K(f.toString()),E);else if(c.addListener&&c.removeListener)c.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function q(){function c(g){return f.call(c.src,c.listener,g)}const f=W;return c}function Q(c,f,g,E,V){if(Array.isArray(f))for(var F=0;F<f.length;F++)Q(c,f[F],g,E,V);else E=u(E)?!!E.capture:!!E,g=oe(g),c&&c[B]?(c=c.i,f=String(f).toString(),f in c.g&&(F=c.g[f],g=b(F,g,E,V),-1<g&&(ne(F[g]),Array.prototype.splice.call(F,g,1),F.length==0&&(delete c.g[f],c.h--)))):c&&(c=ae(c))&&(f=c.g[f.toString()],c=-1,f&&(c=b(f,g,E,V)),(g=-1<c?f[c]:null)&&z(g))}function z(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[B])ke(f.i,c);else{var g=c.type,E=c.proxy;f.removeEventListener?f.removeEventListener(g,E,c.capture):f.detachEvent?f.detachEvent(K(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=ae(f))?(ke(g,c),g.h==0&&(g.src=null,f[P]=null)):ne(c)}}}function K(c){return c in M?M[c]:M[c]="on"+c}function W(c,f){if(c.da)c=!0;else{f=new un(f,this);var g=c.listener,E=c.ha||c.src;c.fa&&z(c),c=g.call(E,f)}return c}function ae(c){return c=c[P],c instanceof Te?c:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(c){return typeof c=="function"?c:(c[Y]||(c[Y]=function(f){return c.handleEvent(f)}),c[Y])}function se(){je.call(this),this.i=new Te(this),this.M=this,this.F=null}A(se,je),se.prototype[B]=!0,se.prototype.removeEventListener=function(c,f,g,E){Q(this,c,f,g,E)};function he(c,f){var g,E=c.F;if(E)for(g=[];E;E=E.F)g.push(E);if(c=c.M,E=f.type||f,typeof f=="string")f=new $e(f,c);else if(f instanceof $e)f.target=f.target||c;else{var V=f;f=new $e(E,c),T(f,V)}if(V=!0,g)for(var F=g.length-1;0<=F;F--){var G=f.g=g[F];V=Se(G,E,!0,f)&&V}if(G=f.g=c,V=Se(G,E,!0,f)&&V,V=Se(G,E,!1,f)&&V,g)for(F=0;F<g.length;F++)G=f.g=g[F],V=Se(G,E,!1,f)&&V}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var g=c.g[f],E=0;E<g.length;E++)ne(g[E]);delete c.g[f],c.h--}}this.F=null},se.prototype.K=function(c,f,g,E){return this.i.add(String(c),f,!1,g,E)},se.prototype.L=function(c,f,g,E){return this.i.add(String(c),f,!0,g,E)};function Se(c,f,g,E){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var V=!0,F=0;F<f.length;++F){var G=f[F];if(G&&!G.da&&G.capture==g){var Ne=G.listener,ut=G.ha||G.src;G.fa&&ke(c.i,G),V=Ne.call(ut,E)!==!1&&V}}return V&&!E.defaultPrevented}function be(c,f,g){if(typeof c=="function")g&&(c=p(c,g));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function pt(c){c.g=be(()=>{c.g=null,c.i&&(c.i=!1,pt(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class st extends je{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:pt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lt(c){je.call(this),this.h=c,this.g={}}A(lt,je);var gt=[];function zn(c){L(c.g,function(f,g){this.g.hasOwnProperty(g)&&z(f)},c),c.g={}}lt.prototype.N=function(){lt.aa.N.call(this),zn(this)},lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var os=a.JSON.stringify,bt=a.JSON.parse,zt=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function as(){}as.prototype.h=null;function kf(c){return c.h||(c.h=c.i())}function Nf(){}var si={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qc(){$e.call(this,"d")}A(Qc,$e);function Jc(){$e.call(this,"c")}A(Jc,$e);var Or={},Df=null;function No(){return Df=Df||new se}Or.La="serverreachability";function Of(c){$e.call(this,Or.La,c)}A(Of,$e);function ii(c){const f=No();he(f,new Of(f))}Or.STAT_EVENT="statevent";function Vf(c,f){$e.call(this,Or.STAT_EVENT,c),this.stat=f}A(Vf,$e);function Rt(c){const f=No();he(f,new Vf(f,c))}Or.Ma="timingevent";function xf(c,f){$e.call(this,Or.Ma,c),this.size=f}A(xf,$e);function oi(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function ai(){this.g=!0}ai.prototype.xa=function(){this.g=!1};function ow(c,f,g,E,V,F){c.info(function(){if(c.g)if(F)for(var G="",Ne=F.split("&"),ut=0;ut<Ne.length;ut++){var Re=Ne[ut].split("=");if(1<Re.length){var mt=Re[0];Re=Re[1];var _t=mt.split("_");G=2<=_t.length&&_t[1]=="type"?G+(mt+"="+Re+"&"):G+(mt+"=redacted&")}}else G=null;else G=F;return"XMLHTTP REQ ("+E+") [attempt "+V+"]: "+f+`
`+g+`
`+G})}function aw(c,f,g,E,V,F,G){c.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+V+"]: "+f+`
`+g+`
`+F+" "+G})}function cs(c,f,g,E){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+lw(c,g)+(E?" "+E:"")})}function cw(c,f){c.info(function(){return"TIMEOUT: "+f})}ai.prototype.info=function(){};function lw(c,f){if(!c.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(c=0;c<g.length;c++)if(Array.isArray(g[c])){var E=g[c];if(!(2>E.length)){var V=E[1];if(Array.isArray(V)&&!(1>V.length)){var F=V[0];if(F!="noop"&&F!="stop"&&F!="close")for(var G=1;G<V.length;G++)V[G]=""}}}}return os(g)}catch{return f}}var Do={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Lf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yc;function Oo(){}A(Oo,as),Oo.prototype.g=function(){return new XMLHttpRequest},Oo.prototype.i=function(){return{}},Yc=new Oo;function Gn(c,f,g,E){this.j=c,this.i=f,this.l=g,this.R=E||1,this.U=new lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mf}function Mf(){this.i=null,this.g="",this.h=!1}var Ff={},Xc={};function Zc(c,f,g){c.L=1,c.v=Mo(bn(f)),c.m=g,c.P=!0,Uf(c,null)}function Uf(c,f){c.F=Date.now(),Vo(c),c.A=bn(c.v);var g=c.A,E=c.R;Array.isArray(E)||(E=[String(E)]),Zf(g.i,"t",E),c.C=0,g=c.j.J,c.h=new Mf,c.g=_d(c.j,g?f:null,!c.m),0<c.O&&(c.M=new st(p(c.Y,c,c.g),c.O)),f=c.U,g=c.g,E=c.ca;var V="readystatechange";Array.isArray(V)||(V&&(gt[0]=V.toString()),V=gt);for(var F=0;F<V.length;F++){var G=H(g,V[F],E||f.handleEvent,!1,f.h||f);if(!G)break;f.g[G.key]=G}f=c.H?y(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),ii(),ow(c.i,c.u,c.A,c.l,c.R,c.m)}Gn.prototype.ca=function(c){c=c.target;const f=this.M;f&&Rn(c)==3?f.j():this.Y(c)},Gn.prototype.Y=function(c){try{if(c==this.g)e:{const _t=Rn(this.g);var f=this.g.Ba();const hs=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||od(this.g)))){this.J||_t!=4||f==7||(f==8||0>=hs?ii(3):ii(2)),el(this);var g=this.g.Z();this.X=g;t:if(Bf(this)){var E=od(this.g);c="";var V=E.length,F=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vr(this),ci(this);var G="";break t}this.h.i=new a.TextDecoder}for(f=0;f<V;f++)this.h.h=!0,c+=this.h.i.decode(E[f],{stream:!(F&&f==V-1)});E.length=0,this.h.g+=c,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=g==200,aw(this.i,this.u,this.A,this.l,this.R,_t,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,ut=this.g;if((Ne=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(Ne)){var Re=Ne;break t}}Re=null}if(g=Re)cs(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,tl(this,g);else{this.o=!1,this.s=3,Rt(12),Vr(this),ci(this);break e}}if(this.P){g=!0;let nn;for(;!this.J&&this.C<G.length;)if(nn=uw(this,G),nn==Xc){_t==4&&(this.s=4,Rt(14),g=!1),cs(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Ff){this.s=4,Rt(15),cs(this.i,this.l,G,"[Invalid Chunk]"),g=!1;break}else cs(this.i,this.l,nn,null),tl(this,nn);if(Bf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||G.length!=0||this.h.h||(this.s=1,Rt(16),g=!1),this.o=this.o&&g,!g)cs(this.i,this.l,G,"[Invalid Chunked Response]"),Vr(this),ci(this);else if(0<G.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),al(mt),mt.M=!0,Rt(11))}}else cs(this.i,this.l,G,null),tl(this,G);_t==4&&Vr(this),this.o&&!this.J&&(_t==4?dd(this.j,this):(this.o=!1,Vo(this)))}else Sw(this.g),g==400&&0<G.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),Vr(this),ci(this)}}}catch{}finally{}};function Bf(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function uw(c,f){var g=c.C,E=f.indexOf(`
`,g);return E==-1?Xc:(g=Number(f.substring(g,E)),isNaN(g)?Ff:(E+=1,E+g>f.length?Xc:(f=f.slice(E,E+g),c.C=E+g,f)))}Gn.prototype.cancel=function(){this.J=!0,Vr(this)};function Vo(c){c.S=Date.now()+c.I,jf(c,c.I)}function jf(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=oi(p(c.ba,c),f)}function el(c){c.B&&(a.clearTimeout(c.B),c.B=null)}Gn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(cw(this.i,this.A),this.L!=2&&(ii(),Rt(17)),Vr(this),this.s=2,ci(this)):jf(this,this.S-c)};function ci(c){c.j.G==0||c.J||dd(c.j,c)}function Vr(c){el(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,zn(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function tl(c,f){try{var g=c.j;if(g.G!=0&&(g.g==c||nl(g.h,c))){if(!c.K&&nl(g.h,c)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var V=E;if(V[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<c.F)Ho(g),jo(g);else break e;ol(g),Rt(18)}}else g.za=V[1],0<g.za-g.T&&37500>V[2]&&g.F&&g.v==0&&!g.C&&(g.C=oi(p(g.Za,g),6e3));if(1>=qf(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Lr(g,11)}else if((c.K||g.g==c)&&Ho(g),!N(f))for(V=g.Da.g.parse(f),f=0;f<V.length;f++){let Re=V[f];if(g.T=Re[0],Re=Re[1],g.G==2)if(Re[0]=="c"){g.K=Re[1],g.ia=Re[2];const mt=Re[3];mt!=null&&(g.la=mt,g.j.info("VER="+g.la));const _t=Re[4];_t!=null&&(g.Aa=_t,g.j.info("SVER="+g.Aa));const hs=Re[5];hs!=null&&typeof hs=="number"&&0<hs&&(E=1.5*hs,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const nn=c.g;if(nn){const Wo=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wo){var F=E.h;F.g||Wo.indexOf("spdy")==-1&&Wo.indexOf("quic")==-1&&Wo.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(rl(F,F.h),F.h=null))}if(E.D){const cl=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;cl&&(E.ya=cl,Me(E.I,E.D,cl))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-c.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var G=c;if(E.qa=md(E,E.J?E.ia:null,E.W),G.K){Wf(E.h,G);var Ne=G,ut=E.L;ut&&(Ne.I=ut),Ne.B&&(el(Ne),Vo(Ne)),E.g=G}else hd(E);0<g.i.length&&$o(g)}else Re[0]!="stop"&&Re[0]!="close"||Lr(g,7);else g.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Lr(g,7):il(g):Re[0]!="noop"&&g.l&&g.l.ta(Re),g.v=0)}}ii(4)}catch{}}var hw=class{constructor(c,f){this.g=c,this.map=f}};function $f(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hf(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function qf(c){return c.h?1:c.g?c.g.size:0}function nl(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function rl(c,f){c.g?c.g.add(f):c.h=f}function Wf(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}$f.prototype.cancel=function(){if(this.i=Kf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Kf(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const g of c.g.values())f=f.concat(g.D);return f}return C(c.i)}function fw(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],g=c.length,E=0;E<g;E++)f.push(c[E]);return f}f=[],g=0;for(E in c)f[g++]=c[E];return f}function dw(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var g=0;g<c;g++)f.push(g);return f}f=[],g=0;for(const E in c)f[g++]=E;return f}}}function zf(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var g=dw(c),E=fw(c),V=E.length,F=0;F<V;F++)f.call(void 0,E[F],g&&g[F],c)}var Gf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pw(c,f){if(c){c=c.split("&");for(var g=0;g<c.length;g++){var E=c[g].indexOf("="),V=null;if(0<=E){var F=c[g].substring(0,E);V=c[g].substring(E+1)}else F=c[g];f(F,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function xr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof xr){this.h=c.h,xo(this,c.j),this.o=c.o,this.g=c.g,Lo(this,c.s),this.l=c.l;var f=c.i,g=new hi;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Qf(this,g),this.m=c.m}else c&&(f=String(c).match(Gf))?(this.h=!1,xo(this,f[1]||"",!0),this.o=li(f[2]||""),this.g=li(f[3]||"",!0),Lo(this,f[4]),this.l=li(f[5]||"",!0),Qf(this,f[6]||"",!0),this.m=li(f[7]||"")):(this.h=!1,this.i=new hi(null,this.h))}xr.prototype.toString=function(){var c=[],f=this.j;f&&c.push(ui(f,Jf,!0),":");var g=this.g;return(g||f=="file")&&(c.push("//"),(f=this.o)&&c.push(ui(f,Jf,!0),"@"),c.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&c.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(ui(g,g.charAt(0)=="/"?_w:mw,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",ui(g,Ew)),c.join("")};function bn(c){return new xr(c)}function xo(c,f,g){c.j=g?li(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function Lo(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function Qf(c,f,g){f instanceof hi?(c.i=f,Tw(c.i,c.h)):(g||(f=ui(f,yw)),c.i=new hi(f,c.h))}function Me(c,f,g){c.i.set(f,g)}function Mo(c){return Me(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function li(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ui(c,f,g){return typeof c=="string"?(c=encodeURI(c).replace(f,gw),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function gw(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Jf=/[#\/\?@]/g,mw=/[#\?:]/g,_w=/[#\?]/g,yw=/[#\?@]/g,Ew=/#/g;function hi(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function Qn(c){c.g||(c.g=new Map,c.h=0,c.i&&pw(c.i,function(f,g){c.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=hi.prototype,t.add=function(c,f){Qn(this),this.i=null,c=ls(this,c);var g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(f),this.h+=1,this};function Yf(c,f){Qn(c),f=ls(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function Xf(c,f){return Qn(c),f=ls(c,f),c.g.has(f)}t.forEach=function(c,f){Qn(this),this.g.forEach(function(g,E){g.forEach(function(V){c.call(f,V,E,this)},this)},this)},t.na=function(){Qn(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const V=c[E];for(let F=0;F<V.length;F++)g.push(f[E])}return g},t.V=function(c){Qn(this);let f=[];if(typeof c=="string")Xf(this,c)&&(f=f.concat(this.g.get(ls(this,c))));else{c=Array.from(this.g.values());for(let g=0;g<c.length;g++)f=f.concat(c[g])}return f},t.set=function(c,f){return Qn(this),this.i=null,c=ls(this,c),Xf(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function Zf(c,f,g){Yf(c,f),0<g.length&&(c.i=null,c.g.set(ls(c,f),C(g)),c.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const F=encodeURIComponent(String(E)),G=this.V(E);for(E=0;E<G.length;E++){var V=F;G[E]!==""&&(V+="="+encodeURIComponent(String(G[E]))),c.push(V)}}return this.i=c.join("&")};function ls(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function Tw(c,f){f&&!c.j&&(Qn(c),c.i=null,c.g.forEach(function(g,E){var V=E.toLowerCase();E!=V&&(Yf(this,E),Zf(this,V,g))},c)),c.j=f}function ww(c,f){const g=new ai;if(a.Image){const E=new Image;E.onload=m(Jn,g,"TestLoadImage: loaded",!0,f,E),E.onerror=m(Jn,g,"TestLoadImage: error",!1,f,E),E.onabort=m(Jn,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=m(Jn,g,"TestLoadImage: timeout",!1,f,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=c}else f(!1)}function vw(c,f){const g=new ai,E=new AbortController,V=setTimeout(()=>{E.abort(),Jn(g,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:E.signal}).then(F=>{clearTimeout(V),F.ok?Jn(g,"TestPingServer: ok",!0,f):Jn(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(V),Jn(g,"TestPingServer: error",!1,f)})}function Jn(c,f,g,E,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),E(g)}catch{}}function Iw(){this.g=new zt}function Aw(c,f,g){const E=g||"";try{zf(c,function(V,F){let G=V;u(V)&&(G=os(V)),f.push(E+F+"="+encodeURIComponent(G))})}catch(V){throw f.push(E+"type="+encodeURIComponent("_badmap")),V}}function Fo(c){this.l=c.Ub||null,this.j=c.eb||!1}A(Fo,as),Fo.prototype.g=function(){return new Uo(this.l,this.j)},Fo.prototype.i=function(c){return function(){return c}}({});function Uo(c,f){se.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Uo,se),t=Uo.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,di(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fi(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,di(this)),this.g&&(this.readyState=3,di(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ed(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function ed(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?fi(this):di(this),this.readyState==3&&ed(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,fi(this))},t.Qa=function(c){this.g&&(this.response=c,fi(this))},t.ga=function(){this.g&&fi(this)};function fi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,di(c)}t.setRequestHeader=function(c,f){this.u.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=f.next();return c.join(`\r
`)};function di(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Uo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function td(c){let f="";return L(c,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function sl(c,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=td(g),typeof c=="string"?g!=null&&encodeURIComponent(String(g)):Me(c,f,g))}function ze(c){se.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(ze,se);var bw=/^https?$/i,Rw=["POST","PUT"];t=ze.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yc.g(),this.v=this.o?kf(this.o):kf(Yc),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(F){nd(this,F);return}if(c=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var V in E)g.set(V,E[V]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const F of E.keys())g.set(F,E.get(F));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(F=>F.toLowerCase()=="content-type"),V=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Rw,f,void 0))||E||V||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,G]of g)this.g.setRequestHeader(F,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{id(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){nd(this,F)}};function nd(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,rd(c),Bo(c)}function rd(c){c.A||(c.A=!0,he(c,"complete"),he(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,he(this,"complete"),he(this,"abort"),Bo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bo(this,!0)),ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?sd(this):this.bb())},t.bb=function(){sd(this)};function sd(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Rn(c)!=4||c.Z()!=2)){if(c.u&&Rn(c)==4)be(c.Ea,0,c);else if(he(c,"readystatechange"),Rn(c)==4){c.h=!1;try{const G=c.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=G===0){var V=String(c.D).match(Gf)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),E=!bw.test(V?V.toLowerCase():"")}g=E}if(g)he(c,"complete"),he(c,"success");else{c.m=6;try{var F=2<Rn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",rd(c)}}finally{Bo(c)}}}}function Bo(c,f){if(c.g){id(c);const g=c.g,E=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||he(c,"ready");try{g.onreadystatechange=E}catch{}}}function id(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function Rn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),bt(f)}};function od(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Sw(c){const f={};c=(c.g&&2<=Rn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<c.length;E++){if(N(c[E]))continue;var g=S(c[E]);const V=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const F=f[V]||[];f[V]=F,F.push(g)}v(f,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function pi(c,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||f}function ad(c){this.Aa=0,this.i=[],this.j=new ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=pi("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=pi("baseRetryDelayMs",5e3,c),this.cb=pi("retryDelaySeedMs",1e4,c),this.Wa=pi("forwardChannelMaxRetries",2,c),this.wa=pi("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new $f(c&&c.concurrentRequestLimit),this.Da=new Iw,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ad.prototype,t.la=8,t.G=1,t.connect=function(c,f,g,E){Rt(0),this.W=c,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=md(this,null,this.W),$o(this)};function il(c){if(cd(c),c.G==3){var f=c.U++,g=bn(c.I);if(Me(g,"SID",c.K),Me(g,"RID",f),Me(g,"TYPE","terminate"),gi(c,g),f=new Gn(c,c.j,f),f.L=2,f.v=Mo(bn(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=f.v,g=!0),g||(f.g=_d(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Vo(f)}gd(c)}function jo(c){c.g&&(al(c),c.g.cancel(),c.g=null)}function cd(c){jo(c),c.u&&(a.clearTimeout(c.u),c.u=null),Ho(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function $o(c){if(!Hf(c.h)&&!c.s){c.s=!0;var f=c.Ga;re||tn(),te||(re(),te=!0),Be.add(f,c),c.B=0}}function Pw(c,f){return qf(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=oi(p(c.Ga,c,f),pd(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const V=new Gn(this,this.j,c);let F=this.o;if(this.S&&(F?(F=y(F),T(F,this.S)):F=this.S),this.m!==null||this.O||(V.H=F,F=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=ud(this,V,f),g=bn(this.I),Me(g,"RID",c),Me(g,"CVER",22),this.D&&Me(g,"X-HTTP-Session-Id",this.D),gi(this,g),F&&(this.O?f="headers="+encodeURIComponent(String(td(F)))+"&"+f:this.m&&sl(g,this.m,F)),rl(this.h,V),this.Ua&&Me(g,"TYPE","init"),this.P?(Me(g,"$req",f),Me(g,"SID","null"),V.T=!0,Zc(V,g,null)):Zc(V,g,f),this.G=2}}else this.G==3&&(c?ld(this,c):this.i.length==0||Hf(this.h)||ld(this))};function ld(c,f){var g;f?g=f.l:g=c.U++;const E=bn(c.I);Me(E,"SID",c.K),Me(E,"RID",g),Me(E,"AID",c.T),gi(c,E),c.m&&c.o&&sl(E,c.m,c.o),g=new Gn(c,c.j,g,c.B+1),c.m===null&&(g.H=c.o),f&&(c.i=f.D.concat(c.i)),f=ud(c,g,1e3),g.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),rl(c.h,g),Zc(g,E,f)}function gi(c,f){c.H&&L(c.H,function(g,E){Me(f,E,g)}),c.l&&zf({},function(g,E){Me(f,E,g)})}function ud(c,f,g){g=Math.min(c.i.length,g);var E=c.l?p(c.l.Na,c.l,c):null;e:{var V=c.i;let F=-1;for(;;){const G=["count="+g];F==-1?0<g?(F=V[0].g,G.push("ofs="+F)):F=0:G.push("ofs="+F);let Ne=!0;for(let ut=0;ut<g;ut++){let Re=V[ut].g;const mt=V[ut].map;if(Re-=F,0>Re)F=Math.max(0,V[ut].g-100),Ne=!1;else try{Aw(mt,G,"req"+Re+"_")}catch{E&&E(mt)}}if(Ne){E=G.join("&");break e}}}return c=c.i.splice(0,g),f.D=c,E}function hd(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;re||tn(),te||(re(),te=!0),Be.add(f,c),c.v=0}}function ol(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=oi(p(c.Fa,c),pd(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,fd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=oi(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),jo(this),fd(this))};function al(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function fd(c){c.g=new Gn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=bn(c.qa);Me(f,"RID","rpc"),Me(f,"SID",c.K),Me(f,"AID",c.T),Me(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&Me(f,"TO",c.ja),Me(f,"TYPE","xmlhttp"),gi(c,f),c.m&&c.o&&sl(f,c.m,c.o),c.L&&(c.g.I=c.L);var g=c.g;c=c.ia,g.L=1,g.v=Mo(bn(f)),g.m=null,g.P=!0,Uf(g,c)}t.Za=function(){this.C!=null&&(this.C=null,jo(this),ol(this),Rt(19))};function Ho(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function dd(c,f){var g=null;if(c.g==f){Ho(c),al(c),c.g=null;var E=2}else if(nl(c.h,f))g=f.D,Wf(c.h,f),E=1;else return;if(c.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var V=c.B;E=No(),he(E,new xf(E,g)),$o(c)}else hd(c);else if(V=f.s,V==3||V==0&&0<f.X||!(E==1&&Pw(c,f)||E==2&&ol(c)))switch(g&&0<g.length&&(f=c.h,f.i=f.i.concat(g)),V){case 1:Lr(c,5);break;case 4:Lr(c,10);break;case 3:Lr(c,6);break;default:Lr(c,2)}}}function pd(c,f){let g=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(g*=2),g*f}function Lr(c,f){if(c.j.info("Error code "+f),f==2){var g=p(c.fb,c),E=c.Xa;const V=!E;E=new xr(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||xo(E,"https"),Mo(E),V?ww(E.toString(),g):vw(E.toString(),g)}else Rt(2);c.G=0,c.l&&c.l.sa(f),gd(c),cd(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function gd(c){if(c.G=0,c.ka=[],c.l){const f=Kf(c.h);(f.length!=0||c.i.length!=0)&&(D(c.ka,f),D(c.ka,c.i),c.h.i.length=0,C(c.i),c.i.length=0),c.l.ra()}}function md(c,f,g){var E=g instanceof xr?bn(g):new xr(g);if(E.g!="")f&&(E.g=f+"."+E.g),Lo(E,E.s);else{var V=a.location;E=V.protocol,f=f?f+"."+V.hostname:V.hostname,V=+V.port;var F=new xr(null);E&&xo(F,E),f&&(F.g=f),V&&Lo(F,V),g&&(F.l=g),E=F}return g=c.D,f=c.ya,g&&f&&Me(E,g,f),Me(E,"VER",c.la),gi(c,E),E}function _d(c,f,g){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new ze(new Fo({eb:g})):new ze(c.pa),f.Ha(c.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function yd(){}t=yd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function qo(){}qo.prototype.g=function(c,f){return new jt(c,f)};function jt(c,f){se.call(this),this.g=new ad(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!N(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!N(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new us(this)}A(jt,se),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){il(this.g)},jt.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.u&&(g={},g.__data__=os(c),c=g);f.i.push(new hw(f.Ya++,c)),f.G==3&&$o(f)},jt.prototype.N=function(){this.g.l=null,delete this.j,il(this.g),delete this.g,jt.aa.N.call(this)};function Ed(c){Qc.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const g in f){c=g;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}A(Ed,Qc);function Td(){Jc.call(this),this.status=1}A(Td,Jc);function us(c){this.g=c}A(us,yd),us.prototype.ua=function(){he(this.g,"a")},us.prototype.ta=function(c){he(this.g,new Ed(c))},us.prototype.sa=function(c){he(this.g,new Td)},us.prototype.ra=function(){he(this.g,"b")},qo.prototype.createWebChannel=qo.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,nE=function(){return new qo},tE=function(){return No()},eE=Or,Du={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Do.NO_ERROR=0,Do.TIMEOUT=8,Do.HTTP_ERROR=6,ga=Do,Lf.COMPLETE="complete",Zy=Lf,Nf.EventType=si,si.OPEN="a",si.CLOSE="b",si.ERROR="c",si.MESSAGE="d",se.prototype.listen=se.prototype.K,Ai=Nf,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,Xy=ze}).apply(typeof ra<"u"?ra:typeof self<"u"?self:typeof window<"u"?window:{});const sg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Vh("@firebase/firestore");function ys(){return Xr.logLevel}function ee(t,...e){if(Xr.logLevel<=ye.DEBUG){const n=e.map(Mh);Xr.debug(`Firestore (${Xs}): ${t}`,...n)}}function jn(t,...e){if(Xr.logLevel<=ye.ERROR){const n=e.map(Mh);Xr.error(`Firestore (${Xs}): ${t}`,...n)}}function $s(t,...e){if(Xr.logLevel<=ye.WARN){const n=e.map(Mh);Xr.warn(`Firestore (${Xs}): ${t}`,...n)}}function Mh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t="Unexpected state"){const e=`FIRESTORE (${Xs}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function Ie(t,e){t||le()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class ik{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ok{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ie(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _n,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new rE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new Et(e)}}class ak{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class ck{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ak(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ie(this.o===void 0);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.R=n.token,new lk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=hk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Hs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new nt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new nt(0,0))}static max(){return new fe(new nt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return dn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof dn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=dn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=dn.isNumericId(e),s=dn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?dn.extractNumericId(e).compare(dn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gr.fromString(e.substring(4,e.length-2))}}class xe extends dn{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const fk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends dn{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return fk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ie($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ie($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ie($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(xe.fromString(e))}static fromName(e){return new ce(xe.fromString(e).popFirst(5))}static empty(){return new ce(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new xe(e.slice()))}}function dk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new Tr(s,ce.empty(),e)}function pk(t){return new Tr(t.readTime,t.key,-1)}class Tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Tr(fe.min(),ce.empty(),-1)}static max(){return new Tr(fe.max(),ce.empty(),-1)}}function gk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _k{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==mk)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function yk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ei(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Pc.oe=-1;function To(t){return t==null}function Ka(t){return t===0&&1/t==-1/0}function Ek(t){return typeof t=="number"&&Number.isInteger(t)&&!Ka(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ig(e)),e=wk(t.get(n),e);return ig(e)}function wk(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function ig(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function iE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sa(this.root,e,this.comparator,!0)}}class sa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=i??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ht(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ag(this.data.getIterator())}getIteratorFrom(e){return new ag(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class ag{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new qt([])}unionWith(e){let n=new rt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new oE("Invalid base64 string: "+i):i}}(e);return new dt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const vk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wr(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=vk.exec(t);if(Ie(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vr(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cc(t){const e=t.mapValue.fields.__previous_value__;return Fh(e)?Cc(e):e}function to(t){const e=wr(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class no{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new no("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof no&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fh(t)?4:bk(t)?9007199254740991:Ak(t)?10:11:le()}function wn(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return to(t).isEqual(to(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=wr(s.timestampValue),a=wr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vr(s.bytesValue).isEqual(vr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),a=Ge(i.doubleValue);return o===a?Ka(o)===Ka(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Hs(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(og(o)!==og(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!wn(o[l],a[l])))return!1;return!0}(t,e);default:return le()}}function ro(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function qs(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ge(i.integerValue||i.doubleValue),l=Ge(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return cg(t.timestampValue,e.timestampValue);case 4:return cg(to(t),to(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(i,o){const a=vr(i),l=vr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=we(a[u],l[u]);if(h!==0)return h}return we(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=we(Ge(i.latitude),Ge(o.latitude));return a!==0?a:we(Ge(i.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return lg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const d=i.fields||{},p=o.fields||{},m=(a=d.value)===null||a===void 0?void 0:a.arrayValue,A=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=we(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0);return C!==0?C:lg(m,A)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ia.mapValue&&o===ia.mapValue)return 0;if(i===ia.mapValue)return 1;if(o===ia.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=we(l[d],h[d]);if(p!==0)return p;const m=qs(a[l[d]],u[h[d]]);if(m!==0)return m}return we(l.length,h.length)}(t.mapValue,e.mapValue);default:throw le()}}function cg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=wr(t),r=wr(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function lg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=qs(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function Ws(t){return Ou(t)}function Ou(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=wr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ou(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ou(n.fields[o])}`;return s+"}"}(t.mapValue):le()}function ma(t){switch(Ir(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Cc(t);return e?16+ma(e):16;case 5:return 2*t.stringValue.length;case 6:return vr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ma(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return kr(r.fields,(i,o)=>{s+=i.length+ma(o)}),s}(t.mapValue);default:throw le()}}function Vu(t){return!!t&&"integerValue"in t}function Uh(t){return!!t&&"arrayValue"in t}function ug(t){return!!t&&"nullValue"in t}function hg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _a(t){return!!t&&"mapValue"in t}function Ak(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ui(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return kr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ui(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ui(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_a(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ui(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ui(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());_a(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];_a(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){kr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Nt(Ui(this.value))}}function aE(t){const e=[];return kr(t.fields,(n,r)=>{const s=new ft([n]);if(_a(r)){const i=aE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ot(e,0,fe.min(),fe.min(),fe.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,s){return new ot(e,1,n,fe.min(),r,s,0)}static newNoDocument(e,n){return new ot(e,2,n,fe.min(),fe.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,fe.min(),fe.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n){this.position=e,this.inclusive=n}}function fg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=qs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function dg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n="asc"){this.field=e,this.dir=n}}function Rk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{}class et extends cE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Pk(e,n,r):n==="array-contains"?new Nk(e,r):n==="in"?new Dk(e,r):n==="not-in"?new Ok(e,r):n==="array-contains-any"?new Vk(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ck(e,r):new kk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qs(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends cE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new vn(e,n)}matches(e){return lE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function lE(t){return t.op==="and"}function uE(t){return Sk(t)&&lE(t)}function Sk(t){for(const e of t.filters)if(e instanceof vn)return!1;return!0}function xu(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Ws(t.value);if(uE(t))return t.filters.map(e=>xu(e)).join(",");{const e=t.filters.map(n=>xu(n)).join(",");return`${t.op}(${e})`}}function hE(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&wn(r.value,s.value)}(t,e):t instanceof vn?function(r,s){return s instanceof vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&hE(o,s.filters[a]),!0):!1}(t,e):void le()}function fE(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${Ws(n.value)}`}(t):t instanceof vn?function(n){return n.op.toString()+" {"+n.getFilters().map(fE).join(" ,")+"}"}(t):"Filter"}class Pk extends et{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ck extends et{constructor(e,n){super(e,"in",n),this.keys=dE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kk extends et{constructor(e,n){super(e,"not-in",n),this.keys=dE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ce.fromName(r.referenceValue))}class Nk extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uh(n)&&ro(n.arrayValue,this.value)}}class Dk extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ro(this.value.arrayValue,n)}}class Ok extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ro(this.value.arrayValue,n)}}class Vk extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ro(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function pg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new xk(t,e,n,r,s,i,o)}function Bh(t){const e=me(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),To(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ws(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ws(r)).join(",")),e.ue=n}return e.ue}function jh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Rk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!hE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dg(t.startAt,e.startAt)&&dg(t.endAt,e.endAt)}function Lu(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Lk(t,e,n,r,s,i,o,a){return new kc(t,e,n,r,s,i,o,a)}function Nc(t){return new kc(t)}function gg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Mk(t){return t.collectionGroup!==null}function Bi(t){const e=me(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new rt(ft.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ga(i,r))}),n.has(ft.keyField().canonicalString())||e.ce.push(new Ga(ft.keyField(),r))}return e.ce}function yn(t){const e=me(t);return e.le||(e.le=Fk(e,Bi(t))),e.le}function Fk(t,e){if(t.limitType==="F")return pg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ga(s.field,i)});const n=t.endAt?new za(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new za(t.startAt.position,t.startAt.inclusive):null;return pg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Mu(t,e,n){return new kc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dc(t,e){return jh(yn(t),yn(e))&&t.limitType===e.limitType}function pE(t){return`${Bh(yn(t))}|lt:${t.limitType}`}function Es(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>fE(s)).join(", ")}]`),To(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ws(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ws(s)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function Oc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ce.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Bi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=fg(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Bi(r),s)||r.endAt&&!function(o,a,l){const u=fg(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Bi(r),s))}(t,e)}function Uk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gE(t){return(e,n)=>{let r=!1;for(const s of Bi(t)){const i=Bk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Bk(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?qs(l,u):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){kr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return iE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=new Ke(ce.comparator);function $n(){return jk}const mE=new Ke(ce.comparator);function bi(...t){let e=mE;for(const n of t)e=e.insert(n.key,n);return e}function _E(t){let e=mE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qr(){return ji()}function yE(){return ji()}function ji(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const $k=new Ke(ce.comparator),Hk=new rt(ce.comparator);function Ee(...t){let e=Hk;for(const n of t)e=e.add(n);return e}const qk=new rt(we);function Wk(){return qk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ka(e)?"-0":e}}function EE(t){return{integerValue:""+t}}function Kk(t,e){return Ek(e)?EE(e):$h(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this._=void 0}}function zk(t,e,n){return t instanceof so?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Fh(i)&&(i=Cc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof io?wE(t,e):t instanceof oo?vE(t,e):function(s,i){const o=TE(s,i),a=mg(o)+mg(s.Pe);return Vu(o)&&Vu(s.Pe)?EE(a):$h(s.serializer,a)}(t,e)}function Gk(t,e,n){return t instanceof io?wE(t,e):t instanceof oo?vE(t,e):n}function TE(t,e){return t instanceof Qa?function(r){return Vu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class so extends Vc{}class io extends Vc{constructor(e){super(),this.elements=e}}function wE(t,e){const n=IE(e);for(const r of t.elements)n.some(s=>wn(s,r))||n.push(r);return{arrayValue:{values:n}}}class oo extends Vc{constructor(e){super(),this.elements=e}}function vE(t,e){let n=IE(e);for(const r of t.elements)n=n.filter(s=>!wn(s,r));return{arrayValue:{values:n}}}class Qa extends Vc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function mg(t){return Ge(t.integerValue||t.doubleValue)}function IE(t){return Uh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,n){this.field=e,this.transform=n}}function Jk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof io&&s instanceof io||r instanceof oo&&s instanceof oo?Hs(r.elements,s.elements,wn):r instanceof Qa&&s instanceof Qa?wn(r.Pe,s.Pe):r instanceof so&&s instanceof so}(t.transform,e.transform)}class Yk{constructor(e,n){this.version=e,this.transformResults=n}}class Dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ya(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xc{}function AE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hh(t.key,Dt.none()):new wo(t.key,t.data,Dt.none());{const n=t.data,r=Nt.empty();let s=new rt(ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Nr(t.key,r,new qt(s.toArray()),Dt.none())}}function Xk(t,e,n){t instanceof wo?function(s,i,o){const a=s.value.clone(),l=yg(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(s,i,o){if(!ya(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=yg(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(bE(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function $i(t,e,n,r){return t instanceof wo?function(i,o,a,l){if(!ya(i.precondition,o))return a;const u=i.value.clone(),h=Eg(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nr?function(i,o,a,l){if(!ya(i.precondition,o))return a;const u=Eg(i.fieldTransforms,l,o),h=o.data;return h.setAll(bE(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return ya(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Zk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=TE(r.transform,s||null);i!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,i))}return n||null}function _g(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hs(r,s,(i,o)=>Jk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wo extends xc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Nr extends xc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function bE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yg(t,e,n){const r=new Map;Ie(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Gk(o,a,n[s]))}return r}function Eg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,zk(i,o,e))}return r}class Hh extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RE extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Xk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$i(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$i(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=AE(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&Hs(this.mutations,e.mutations,(n,r)=>_g(n,r))&&Hs(this.baseMutations,e.baseMutations,(n,r)=>_g(n,r))}}class qh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ie(e.mutations.length===r.length);let s=function(){return $k}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new qh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,ve;function SE(t){switch(t){default:return le();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function PE(t){if(t===void 0)return jn("GRPC error has no .code"),$.UNKNOWN;switch(t){case Qe.OK:return $.OK;case Qe.CANCELLED:return $.CANCELLED;case Qe.UNKNOWN:return $.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return $.INTERNAL;case Qe.UNAVAILABLE:return $.UNAVAILABLE;case Qe.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Qe.NOT_FOUND:return $.NOT_FOUND;case Qe.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Qe.ABORTED:return $.ABORTED;case Qe.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Qe.DATA_LOSS:return $.DATA_LOSS;default:return le()}}(ve=Qe||(Qe={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=new gr([4294967295,4294967295],0);function Tg(t){const e=r0().encode(t),n=new Yy;return n.update(e),new Uint8Array(n.digest())}function wg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new gr([n,r],0),new gr([s,i],0)]}class Wh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ri(`Invalid padding: ${n}`);if(r<0)throw new Ri(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ri(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ri(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=gr.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(gr.fromNumber(r)));return s.compare(s0)===1&&(s=new gr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Tg(e),[r,s]=wg(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ee(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Wh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Tg(e),[r,s]=wg(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,vo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Lc(fe.min(),s,new Ke(we),$n(),Ee())}}class vo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new vo(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class CE{constructor(e,n){this.targetId=e,this.me=n}}class kE{constructor(e,n,r=dt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class vg{constructor(){this.fe=0,this.ge=Ig(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ee(),n=Ee(),r=Ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le()}}),new vo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ig()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ie(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class i0{constructor(e){this.Be=e,this.Le=new Map,this.ke=$n(),this.qe=oa(),this.Qe=oa(),this.Ke=new Ke(we)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Le.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(Lu(i))if(r===0){const o=new ce(i.path);this.We(n,o,ot.newNoDocument(o,fe.min()))}else Ie(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=vr(r).toUint8Array()}catch(l){if(l instanceof oE)return $s("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Wh(o,s,i)}catch(l){return $s(l instanceof Ri?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Le.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Lu(a.target)){const l=new ce(a.target.path);this.st(l).has(o)||this.ot(o,l)||this.We(o,l,ot.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ee();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Lc(e,n,this.Ke,this.ke,r);return this.ke=$n(),this.qe=oa(),this.Qe=oa(),this.Ke=new Ke(we),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Le.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Le.get(e);return n||(n=new vg,this.Le.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new rt(we),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new rt(we),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Le.get(e);return n&&n.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new vg),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function oa(){return new Ke(ce.comparator)}function Ig(){return new Ke(ce.comparator)}const o0={asc:"ASCENDING",desc:"DESCENDING"},a0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},c0={and:"AND",or:"OR"};class l0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fu(t,e){return t.useProto3Json||To(e)?e:{value:e}}function Ja(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function u0(t,e){return Ja(t,e.toTimestamp())}function Wt(t){return Ie(!!t),fe.fromTimestamp(function(n){const r=wr(n);return new nt(r.seconds,r.nanos)}(t))}function Kh(t,e){return Uu(t,e).canonicalString()}function Uu(t,e){const n=function(s){return new xe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function DE(t){const e=xe.fromString(t);return Ie(FE(e)),e}function Ya(t,e){return Kh(t.databaseId,e.path)}function Hi(t,e){const n=DE(e);if(n.get(1)!==t.databaseId.projectId)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(VE(n))}function OE(t,e){return Kh(t.databaseId,e)}function h0(t){const e=DE(t);return e.length===4?xe.emptyPath():VE(e)}function Bu(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function VE(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ag(t,e,n){return{name:Ya(t,e),fields:n.value.mapValue.fields}}function f0(t,e){return"found"in e?function(r,s){Ie(!!s.found),s.found.name,s.found.updateTime;const i=Hi(r,s.found.name),o=Wt(s.found.updateTime),a=s.found.createTime?Wt(s.found.createTime):fe.min(),l=new Nt({mapValue:{fields:s.found.fields}});return ot.newFoundDocument(i,o,a,l)}(t,e):"missing"in e?function(r,s){Ie(!!s.missing),Ie(!!s.readTime);const i=Hi(r,s.missing),o=Wt(s.readTime);return ot.newNoDocument(i,o)}(t,e):le()}function d0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Ie(h===void 0||typeof h=="string"),dt.fromBase64String(h||"")):(Ie(h===void 0||h instanceof Buffer||h instanceof Uint8Array),dt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?$.UNKNOWN:PE(u.code);return new ie(h,u.message||"")}(o);n=new kE(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hi(t,r.document.name),i=Wt(r.document.updateTime),o=r.document.createTime?Wt(r.document.createTime):fe.min(),a=new Nt({mapValue:{fields:r.document.fields}}),l=ot.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Ea(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hi(t,r.document),i=r.readTime?Wt(r.readTime):fe.min(),o=ot.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ea([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hi(t,r.document),i=r.removedTargetIds||[];n=new Ea([],i,s,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new n0(s,i),a=r.targetId;n=new CE(a,o)}}return n}function xE(t,e){let n;if(e instanceof wo)n={update:Ag(t,e.key,e.value)};else if(e instanceof Hh)n={delete:Ya(t,e.key)};else if(e instanceof Nr)n={update:Ag(t,e.key,e.data),updateMask:v0(e.fieldMask)};else{if(!(e instanceof RE))return le();n={verify:Ya(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof so)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Qa)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:u0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le()}(t,e.precondition)),n}function p0(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Wt(s.updateTime):Wt(i);return o.isEqual(fe.min())&&(o=Wt(i)),new Yk(o,s.transformResults||[])}(n,e))):[]}function g0(t,e){return{documents:[OE(t,e.path)]}}function m0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=OE(t,s);const i=function(u){if(u.length!==0)return ME(vn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Ts(p.field),direction:E0(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Fu(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function _0(t){let e=h0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ie(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const p=LE(d);return p instanceof vn&&uE(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(A){return new Ga(ws(A.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,To(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,m=d.values||[];return new za(m,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,m=d.values||[];return new za(m,p)}(n.endAt)),Lk(e,s,o,i,a,"F",l,u)}function y0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function LE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ws(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ws(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ws(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ws(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return et.create(ws(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vn.create(n.compositeFilter.filters.map(r=>LE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function E0(t){return o0[t]}function T0(t){return a0[t]}function w0(t){return c0[t]}function Ts(t){return{fieldPath:t.canonicalString()}}function ws(t){return ft.fromServerFormat(t.fieldPath)}function ME(t){return t instanceof et?function(n){if(n.op==="=="){if(hg(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NAN"}};if(ug(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(hg(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NOT_NAN"}};if(ug(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ts(n.field),op:T0(n.op),value:n.value}}}(t):t instanceof vn?function(n){const r=n.getFilters().map(s=>ME(s));return r.length===1?r[0]:{compositeFilter:{op:w0(n.op),filters:r}}}(t):le()}function v0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function FE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,r,s,i=fe.min(),o=fe.min(),a=dt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e){this.ht=e}}function A0(t){const e=_0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(){this.ln=new R0}addToCollectionParentIndex(e,n){return this.ln.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Tr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Tr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class R0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Mt{static withCacheSize(e){return new Mt(e,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.DEFAULT_COLLECTION_PERCENTILE=10,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mt.DEFAULT=new Mt(41943040,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mt.DISABLED=new Mt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ks(0)}static Qn(){return new Ks(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg([t,e],[n,r]){const s=we(t,n);return s===0?we(e,r):s}class S0{constructor(e){this.Gn=e,this.buffer=new rt(Rg),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Rg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class P0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ee("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ei(n)?ee("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Zs(n)}await this.Yn(3e5)})}}class C0{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Pc.oe);const r=new S0(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(bg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bg):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),ys()<=ye.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function k0(t,e){return new C0(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(){this.changes=new rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&$i(r.mutation,s,qt.empty(),nt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=qr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=bi();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=$n();const o=ji(),a=function(){return ji()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Nr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),$i(h.mutation,u,h.mutation.getFieldMask(),nt.now())):o.set(u.key,qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new D0(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ji();let s=new Ke((o,a)=>o-a),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||qt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||Ee()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=yE();h.forEach(p=>{if(!i.has(p)){const m=AE(n.get(p),r.get(p));m!==null&&d.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Mk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(qr());let a=-1,l=i;return o.next(u=>j.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ee())).next(h=>({batchId:a,changes:_E(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(r=>{let s=bi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=bi();return this.indexManager.getCollectionParents(e,i).next(a=>j.forEach(a,l=>{const u=function(d,p){return new kc(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,ot.newInvalidDocument(h)))});let a=bi();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&$i(h.mutation,u,qt.empty(),nt.now()),Oc(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return j.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Wt(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:A0(s.bundledQuery),readTime:Wt(s.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(){this.overlays=new Ke(ce.comparator),this.dr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qr();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.dr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.dr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=qr(),i=n.length+1,o=new ce(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=qr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=qr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return j.resolve(a)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.dr.get(s.largestBatchId).delete(r.key);this.dr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new t0(n,r));let i=this.dr.get(n);i===void 0&&(i=Ee(),this.dr.set(n,i)),this.dr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.Er=new rt(it.Ar),this.Rr=new rt(it.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,n){const r=new it(e,n);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new it(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ce(new xe([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ce(new xe([])),r=new it(n,e),s=new it(n,e+1);let i=Ee();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new it(e,0),r=this.Er.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ce.comparator(e.key,n.key)||we(e.br,n.br)}static Vr(e,n){return we(e.br,n.br)||ce.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new rt(it.Ar)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new e0(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.vr=this.vr.add(new it(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const a=this.Cr(o.br);i.push(a)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(we);return n.forEach(s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{r=r.add(a.br)})}),j.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ce.isDocumentKey(i)||(i=i.child(""));const o=new it(new ce(i),0);let a=new rt(we);return this.vr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.br)),!0)},o),j.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ie(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return j.forEach(n.mutations,s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,n){const r=new it(n,0),s=this.vr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.Nr=e,this.docs=function(){return new Ke(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ot.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=$n();const o=n.path,a=new ce(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||gk(pk(h),r)<=0||(s.has(h.key)||Oc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le()}Br(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new U0(this)}getSize(e){return j.resolve(this.size)}}class U0 extends N0{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.persistence=e,this.Lr=new rs(n=>Bh(n),jh),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.kr=0,this.qr=new zh,this.targetCount=0,this.Qr=Ks.qn()}forEachTarget(e,n){return this.Lr.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),j.resolve()}Un(e){this.Lr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Ks(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Un(n),j.resolve()}removeTargetData(e,n){return this.Lr.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Lr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Lr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Lr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Pc(0),this.Ur=!1,this.Ur=!0,this.Wr=new L0,this.referenceDelegate=e(this),this.Gr=new B0(this),this.indexManager=new b0,this.remoteDocumentCache=function(s){return new F0(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new I0(n),this.jr=new V0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new x0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new M0(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new j0(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return j.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class j0 extends _k{constructor(e){super(),this.currentSequenceNumber=e}}class Gh{constructor(e){this.persistence=e,this.Zr=new zh,this.Xr=null}static ei(e){return new Gh(e)}get ti(){if(this.Xr)return this.Xr;throw le()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),j.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ti,r=>{const s=ce.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,fe.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return j.or([()=>j.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Xa{constructor(e,n){this.persistence=e,this.ri=new rs(r=>Tk(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=k0(this,n)}static ei(e,n){return new Xa(e,n)}Hr(){}Jr(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return j.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Br(e,o=>this.ir(e,o,n).next(a=>{a||(r++,i.removeEntry(o,fe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),j.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ma(e.data.value)),n}ir(e,n,r){return j.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Qh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return UP()?8:yk(At())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new $0;return this.ts(e,n,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(ys()<=ye.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Es(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),j.resolve()):(ys()<=ye.DEBUG&&ee("QueryEngine","Query:",Es(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(ys()<=ye.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Es(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):j.resolve())}Xi(e,n){if(gg(n))return j.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Mu(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.rs(n,a);return this.ss(n,u,o,l.readTime)?this.Xi(e,Mu(n,null,"F")):this.os(e,u,n,l)}))})))}es(e,n,r,s){return gg(n)||s.isEqual(fe.min())?j.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?j.resolve(null):(ys()<=ye.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Es(n)),this.os(e,o,n,dk(s,-1)).next(a=>a))})}rs(e,n){let r=new rt(gE(e));return n.forEach((s,i)=>{Oc(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return ys()<=ye.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Es(n)),this.Zi.getDocumentsMatchingQuery(e,n,Tr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ke(we),this.cs=new rs(i=>Bh(i),jh),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new O0(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function W0(t,e,n,r){return new q0(t,e,n,r)}async function BE(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Ee();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function K0(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,p=d.keys();let m=j.resolve();return p.forEach(A=>{m=m.next(()=>h.getEntry(l,A)).next(C=>{const D=u.docVersions.get(A);Ie(D!==null),C.version.compareTo(D)<0&&(d.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),h.addEntry(C)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Ee();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function jE(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function z0(t,e){const n=me(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const a=[];e.targetChanges.forEach((h,d)=>{const p=s.get(d);if(!p)return;a.push(n.Gr.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Gr.addMatchingKeys(i,h.addedDocuments,d)));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(dt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,r)),s=s.insert(d,m),function(C,D,x){return C.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,m,h)&&a.push(n.Gr.updateTargetData(i,m))});let l=$n(),u=Ee();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(G0(i,o,e.documentUpdates).next(h=>{l=h.Is,u=h.ds})),!r.isEqual(fe.min())){const h=n.Gr.getLastRemoteSnapshotVersion(i).next(d=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return j.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.us=s,i))}function G0(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=$n();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(fe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ee("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Is:o,ds:s}})}function Q0(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function J0(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function ju(t,e,n){const r=me(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ei(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Sg(t,e,n){const r=me(t);let s=fe.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=me(l),p=d.cs.get(h);return p!==void 0?j.resolve(d.us.get(p)):d.Gr.getTargetData(u,h)}(r,o,yn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?i:Ee())).next(a=>(Y0(r,Uk(e),a),{documents:a,Es:i})))}function Y0(t,e,n){let r=t.ls.get(e)||fe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Pg{constructor(){this.activeTargetIds=Wk()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class X0{constructor(){this._o=new Pg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Pg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa=null;function Ml(){return aa===null?aa=function(){return 268435456+Math.round(2147483648*Math.random())}():aa++,"0x"+aa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class nN extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const a=Ml(),l=this.No(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(u,i,o),this.Lo(n,l,u,s).then(h=>(ee("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw $s("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}ko(n,r,s,i,o,a){return this.Oo(n,r,s,i,o)}Bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=eN[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,n,r,s){const i=Ml();return new Promise((o,a)=>{const l=new Xy;l.setWithCredentials(!0),l.listenOnce(Zy.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ga.NO_ERROR:const h=l.getResponseJson();ee(yt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case ga.TIMEOUT:ee(yt,`RPC '${e}' ${i} timed out`),a(new ie($.DEADLINE_EXCEEDED,"Request time out"));break;case ga.HTTP_ERROR:const d=l.getStatus();if(ee(yt,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const A=function(D){const x=D.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(x)>=0?x:$.UNKNOWN}(m.status);a(new ie(A,m.message))}else a(new ie($.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ie($.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{ee(yt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ee(yt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}qo(e,n,r){const s=Ml(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nE(),a=tE(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");ee(yt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,m=!1;const A=new tN({Eo:D=>{m?ee(yt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(p||(ee(yt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),ee(yt,`RPC '${e}' stream ${s} sending:`,D),d.send(D))},Ao:()=>d.close()}),C=(D,x,N)=>{D.listen(x,w=>{try{N(w)}catch(k){setTimeout(()=>{throw k},0)}})};return C(d,Ai.EventType.OPEN,()=>{m||(ee(yt,`RPC '${e}' stream ${s} transport opened.`),A.So())}),C(d,Ai.EventType.CLOSE,()=>{m||(m=!0,ee(yt,`RPC '${e}' stream ${s} transport closed`),A.Do())}),C(d,Ai.EventType.ERROR,D=>{m||(m=!0,$s(yt,`RPC '${e}' stream ${s} transport errored:`,D),A.Do(new ie($.UNAVAILABLE,"The operation could not be completed")))}),C(d,Ai.EventType.MESSAGE,D=>{var x;if(!m){const N=D.data[0];Ie(!!N);const w=N,k=(w==null?void 0:w.error)||((x=w[0])===null||x===void 0?void 0:x.error);if(k){ee(yt,`RPC '${e}' stream ${s} received error:`,k);const O=k.status;let L=function(_){const T=Qe[_];if(T!==void 0)return PE(T)}(O),v=k.message;L===void 0&&(L=$.INTERNAL,v="Unknown error status: "+O+" with message "+k.message),m=!0,A.Do(new ie(L,v)),d.close()}else ee(yt,`RPC '${e}' stream ${s} received:`,N),A.vo(N)}}),C(a,eE.STAT_EVENT,D=>{D.stat===Du.PROXY?ee(yt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Du.NOPROXY&&ee(yt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.bo()},0),A}}function Fl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t){return new l0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,n,r,s,i,o,a,l){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Jh(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new ie($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.d_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.E_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.d_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rN extends $E{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}E_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=d0(this.serializer,e),r=function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?Wt(o.readTime):fe.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Bu(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Lu(l)?{documents:g0(i,l)}:{query:m0(i,l).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=NE(i,o.resumeToken);const u=Fu(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){a.readTime=Ja(i,o.snapshotVersion.toTimestamp());const u=Fu(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=y0(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Bu(this.serializer),n.removeTarget=e,this.c_(n)}}class sN extends $E{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=p0(e.writeResults,e.commitTime),r=Wt(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Bu(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>xE(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Uu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie($.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,Uu(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie($.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class oN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(jn(n),this.C_=!1):ee("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{ss(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=me(l);u.k_.add(4),await Io(u),u.K_.set("Unknown"),u.k_.delete(4),await Fc(u)}(this))})}),this.K_=new oN(r,s)}}async function Fc(t){if(ss(t))for(const e of t.q_)await e(!0)}async function Io(t){for(const e of t.q_)await e(!1)}function HE(t,e){const n=me(t);n.L_.has(e.targetId)||(n.L_.set(e.targetId,e),ef(n)?Zh(n):ti(n).s_()&&Xh(n,e))}function Yh(t,e){const n=me(t),r=ti(n);n.L_.delete(e),r.s_()&&qE(n,e),n.L_.size===0&&(r.s_()?r.a_():ss(n)&&n.K_.set("Unknown"))}function Xh(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ti(t).V_(e)}function qE(t,e){t.U_.xe(e),ti(t).m_(e)}function Zh(t){t.U_=new i0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.L_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ti(t).start(),t.K_.F_()}function ef(t){return ss(t)&&!ti(t).i_()&&t.L_.size>0}function ss(t){return me(t).k_.size===0}function WE(t){t.U_=void 0}async function cN(t){t.K_.set("Online")}async function lN(t){t.L_.forEach((e,n)=>{Xh(t,e)})}async function uN(t,e){WE(t),ef(t)?(t.K_.O_(e),Zh(t)):t.K_.set("Unknown")}async function hN(t,e,n){if(t.K_.set("Online"),e instanceof kE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.L_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.L_.delete(a),s.U_.removeTarget(a))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Za(t,r)}else if(e instanceof Ea?t.U_.$e(e):e instanceof CE?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(fe.min()))try{const r=await jE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.L_.get(u);h&&i.L_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.L_.get(l);if(!h)return;i.L_.set(l,h.withResumeToken(dt.EMPTY_BYTE_STRING,h.snapshotVersion)),qE(i,l);const d=new ur(h.target,l,u,h.sequenceNumber);Xh(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await Za(t,r)}}async function Za(t,e,n){if(!ei(e))throw e;t.k_.add(1),await Io(t),t.K_.set("Offline"),n||(n=()=>jE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Fc(t)})}function KE(t,e){return e().catch(n=>Za(t,n,e))}async function Uc(t){const e=me(t),n=Ar(e);let r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;fN(e);)try{const s=await Q0(e.localStore,r);if(s===null){e.B_.length===0&&n.a_();break}r=s.batchId,dN(e,s)}catch(s){await Za(e,s)}zE(e)&&GE(e)}function fN(t){return ss(t)&&t.B_.length<10}function dN(t,e){t.B_.push(e);const n=Ar(t);n.s_()&&n.f_&&n.g_(e.mutations)}function zE(t){return ss(t)&&!Ar(t).i_()&&t.B_.length>0}function GE(t){Ar(t).start()}async function pN(t){Ar(t).w_()}async function gN(t){const e=Ar(t);for(const n of t.B_)e.g_(n.mutations)}async function mN(t,e,n){const r=t.B_.shift(),s=qh.from(r,e,n);await KE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Uc(t)}async function _N(t,e){e&&Ar(t).f_&&await async function(r,s){if(function(o){return SE(o)&&o!==$.ABORTED}(s.code)){const i=r.B_.shift();Ar(r).__(),await KE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Uc(r)}}(t,e),zE(t)&&GE(t)}async function kg(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=ss(n);n.k_.add(3),await Io(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Fc(n)}async function yN(t,e){const n=me(t);e?(n.k_.delete(2),await Fc(n)):e||(n.k_.add(2),await Io(n),n.K_.set("Unknown"))}function ti(t){return t.W_||(t.W_=function(n,r,s){const i=me(n);return i.b_(),new rN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:cN.bind(null,t),mo:lN.bind(null,t),po:uN.bind(null,t),R_:hN.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),ef(t)?Zh(t):t.K_.set("Unknown")):(await t.W_.stop(),WE(t))})),t.W_}function Ar(t){return t.G_||(t.G_=function(n,r,s){const i=me(n);return i.b_(),new sN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:pN.bind(null,t),po:_N.bind(null,t),p_:gN.bind(null,t),y_:mN.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Uc(t)):(await t.G_.stop(),t.B_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.B_.length} pending writes`),t.B_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new tf(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nf(t,e){if(jn("AsyncQueue",`${e}: ${t}`),ei(t))return new ie($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{static emptySet(e){return new Os(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=bi(),this.sortedSet=new Ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(){this.z_=new Ke(ce.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):le():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class zs{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zs(e,n,Os.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class TN{constructor(){this.queries=Dg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=Dg(),i.forEach((o,a)=>{for(const l of a.J_)l.onError(r)})})(this,new ie($.ABORTED,"Firestore shutting down"))}}function Dg(){return new rs(t=>pE(t),Dc)}async function rf(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new EN,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=nf(o,`Initialization of query '${Es(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&of(n)}async function sf(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function wN(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.J_)a.ta(s)&&(r=!0);o.H_=s}}r&&of(n)}function vN(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function of(t){t.X_.forEach(e=>{e.next()})}var $u,Og;(Og=$u||($u={})).na="default",Og.Cache="cache";class af{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new zs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==$u.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.key=e}}class JE{constructor(e){this.key=e}}class IN{constructor(e,n){this.query=e,this.Ea=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ee(),this.mutatedKeys=Ee(),this.Va=gE(e),this.ma=new Os(this.Va)}get fa(){return this.Ea}ga(e,n){const r=n?n.pa:new Ng,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const p=s.get(h),m=Oc(this.query,d)?d:null,A=!!p&&this.mutatedKeys.has(p.key),C=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let D=!1;p&&m?p.data.isEqual(m.data)?A!==C&&(r.track({type:3,doc:m}),D=!0):this.ya(p,m)||(r.track({type:2,doc:m}),D=!0,(l&&this.Va(m,l)>0||u&&this.Va(m,u)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),D=!0):p&&!m&&(r.track({type:1,doc:p}),D=!0,(l||u)&&(a=!0)),D&&(m?(o=o.add(m),i=C?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{ma:o,pa:r,ss:a,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,d)=>function(m,A){const C=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return C(m)-C(A)}(h.type,d.type)||this.Va(h.doc,d.doc)),this.wa(r),s=s!=null&&s;const a=n&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,u=l!==this.Aa;return this.Aa=l,o.length!==0||u?{snapshot:new zs(this.query,e.ma,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Ng,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.Ea=this.Ea.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ea=this.Ea.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ee(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new JE(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new QE(r))}),n}va(e){this.Ea=e.Es,this.Ra=Ee();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return zs.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class AN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bN{constructor(e){this.key=e,this.Fa=!1}}class RN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new rs(a=>pE(a),Dc),this.Oa=new Map,this.Na=new Set,this.Ba=new Ke(ce.comparator),this.La=new Map,this.ka=new zh,this.qa={},this.Qa=new Map,this.Ka=Ks.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function SN(t,e,n=!0){const r=nT(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await YE(r,e,n,!0),s}async function PN(t,e){const n=nT(t);await YE(n,e,!0,!1)}async function YE(t,e,n,r){const s=await J0(t.localStore,yn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await CN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&HE(t.remoteStore,s),a}async function CN(t,e,n,r,s){t.Ua=(d,p,m)=>async function(C,D,x,N){let w=D.view.ga(x);w.ss&&(w=await Sg(C.localStore,D.query,!1).then(({documents:v})=>D.view.ga(v,w)));const k=N&&N.targetChanges.get(D.targetId),O=N&&N.targetMismatches.get(D.targetId)!=null,L=D.view.applyChanges(w,C.isPrimaryClient,k,O);return xg(C,D.targetId,L.ba),L.snapshot}(t,d,p,m);const i=await Sg(t.localStore,e,!0),o=new IN(e,i.Es),a=o.ga(i.documents),l=vo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);xg(t,n,u.ba);const h=new AN(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function kN(t,e,n){const r=me(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!Dc(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ju(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Yh(r.remoteStore,s.targetId),Hu(r,s.targetId)}).catch(Zs)):(Hu(r,s.targetId),await ju(r.localStore,s.targetId,!0))}async function NN(t,e){const n=me(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Yh(n.remoteStore,r.targetId))}async function DN(t,e,n){const r=UN(t);try{const s=await function(o,a){const l=me(o),u=nt.now(),h=a.reduce((m,A)=>m.add(A.key),Ee());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let A=$n(),C=Ee();return l.hs.getEntries(m,h).next(D=>{A=D,A.forEach((x,N)=>{N.isValidDocument()||(C=C.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,A)).next(D=>{d=D;const x=[];for(const N of a){const w=Zk(N,d.get(N.key).overlayedDocument);w!=null&&x.push(new Nr(N.key,w,aE(w.value.mapValue),Dt.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,x,a)}).next(D=>{p=D;const x=D.applyToLocalDocumentSet(d,C);return l.documentOverlayCache.saveOverlays(m,D.batchId,x)})}).then(()=>({batchId:p.batchId,changes:_E(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.qa[o.currentUser.toKey()];u||(u=new Ke(we)),u=u.insert(a,l),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ao(r,s.changes),await Uc(r.remoteStore)}catch(s){const i=nf(s,"Failed to persist write");n.reject(i)}}async function XE(t,e){const n=me(t);try{const r=await z0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.La.get(i);o&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Ie(o.Fa):s.removedDocuments.size>0&&(Ie(o.Fa),o.Fa=!1))}),await Ao(n,r,e)}catch(r){await Zs(r)}}function Vg(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=me(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.J_)p.ea(a)&&(u=!0)}),u&&of(l)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ON(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.La.get(e),i=s&&s.key;if(i){let o=new Ke(ce.comparator);o=o.insert(i,ot.newNoDocument(i,fe.min()));const a=Ee().add(i),l=new Lc(fe.min(),new Map,new Ke(we),o,a);await XE(r,l),r.Ba=r.Ba.remove(i),r.La.delete(e),cf(r)}else await ju(r.localStore,e,!1).then(()=>Hu(r,e,n)).catch(Zs)}async function VN(t,e){const n=me(t),r=e.batch.batchId;try{const s=await K0(n.localStore,e);eT(n,r,null),ZE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ao(n,s)}catch(s){await Zs(s)}}async function xN(t,e,n){const r=me(t);try{const s=await function(o,a){const l=me(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Ie(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);eT(r,e,n),ZE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ao(r,s)}catch(s){await Zs(s)}}function ZE(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function eT(t,e,n){const r=me(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function Hu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||tT(t,r)})}function tT(t,e){t.Na.delete(e.path.canonicalString());const n=t.Ba.get(e);n!==null&&(Yh(t.remoteStore,n),t.Ba=t.Ba.remove(e),t.La.delete(n),cf(t))}function xg(t,e,n){for(const r of n)r instanceof QE?(t.ka.addReference(r.key,e),LN(t,r)):r instanceof JE?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||tT(t,r.key)):le()}function LN(t,e){const n=e.key,r=n.path.canonicalString();t.Ba.get(n)||t.Na.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.Na.add(r),cf(t))}function cf(t){for(;t.Na.size>0&&t.Ba.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ce(xe.fromString(e)),r=t.Ka.next();t.La.set(r,new bN(n)),t.Ba=t.Ba.insert(n,r),HE(t.remoteStore,new ur(yn(Nc(n.path)),r,"TargetPurposeLimboResolution",Pc.oe))}}async function Ao(t,e,n){const r=me(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,l)=>{o.push(r.Ua(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Qh.zi(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(l,u){const h=me(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>j.forEach(u,p=>j.forEach(p.Wi,m=>h.persistence.referenceDelegate.addReference(d,p.targetId,m)).next(()=>j.forEach(p.Gi,m=>h.persistence.referenceDelegate.removeReference(d,p.targetId,m)))))}catch(d){if(!ei(d))throw d;ee("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const m=h.us.get(p),A=m.snapshotVersion,C=m.withLastLimboFreeSnapshotVersion(A);h.us=h.us.insert(p,C)}}}(r.localStore,i))}async function MN(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await BE(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(l=>{l.reject(new ie($.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ao(n,r.Ts)}}function FN(t,e){const n=me(t),r=n.La.get(e);if(r&&r.Fa)return Ee().add(r.key);{let s=Ee();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const a=n.xa.get(o);s=s.unionWith(a.view.fa)}return s}}function nT(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=XE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ON.bind(null,e),e.Ma.R_=wN.bind(null,e.eventManager),e.Ma.Wa=vN.bind(null,e.eventManager),e}function UN(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xN.bind(null,e),e}class ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return W0(this.persistence,new H0,e.initialUser,this.serializer)}ja(e){return new UE(Gh.ei,this.serializer)}za(e){return new X0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ec.provider={build:()=>new ec};class BN extends ec{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ie(this.persistence.referenceDelegate instanceof Xa);const r=this.persistence.referenceDelegate.garbageCollector;return new P0(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new UE(r=>Xa.ei(r,n),this.serializer)}}class qu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MN.bind(null,this.syncEngine),await yN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new TN}()}createDatastore(e){const n=Mc(e.databaseInfo.databaseId),r=function(i){return new nN(i)}(e.databaseInfo);return function(i,o,a,l){return new iN(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new aN(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Vg(this.syncEngine,n,0),function(){return Cg.p()?new Cg:new Z0}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const d=new RN(s,i,o,a,l,u);return h&&(d.$a=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=me(s);ee("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Io(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}qu.provider={build:()=>new qu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new ie($.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(s,i){const o=me(s),a={documents:i.map(d=>Ya(o.serializer,d))},l=await o.ko("BatchGetDocuments",o.serializer.databaseId,xe.emptyPath(),a,i.length),u=new Map;l.forEach(d=>{const p=f0(o.serializer,d);u.set(p.key.toString(),p)});const h=[];return i.forEach(d=>{const p=u.get(d.toString());Ie(!!p),h.push(p)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Hh(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=ce.fromPath(r);this.mutations.push(new RE(s,this.precondition(s)))}),await async function(r,s){const i=me(r),o={writes:s.map(a=>xE(i.serializer,a))};await i.Oo("Commit",i.serializer.databaseId,xe.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw le();n=fe.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new ie($.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(fe.min())?Dt.exists(!1):Dt.updateTime(n):Dt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(fe.min()))throw new ie($.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Dt.updateTime(n)}return Dt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.uu=r.maxAttempts,this.r_=new Jh(this.asyncQueue,"transaction_retry")}cu(){this.uu-=1,this.lu()}lu(){this.r_.jo(async()=>{const e=new jN(this.datastore),n=this.hu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Pu(s)}))}).catch(r=>{this.Pu(r)})})}hu(e){try{const n=this.updateFunction(e);return!To(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Pu(e){this.uu>0&&this.Tu(e)?(this.uu-=1,this.asyncQueue.enqueueAndForget(()=>(this.lu(),Promise.resolve()))):this.deferred.reject(e)}Tu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!SE(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Et.UNAUTHENTICATED,this.clientId=sE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=nf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ul(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await BE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Lg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await qN(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>kg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>kg(e.remoteStore,s)),t._onlineComponents=e}async function qN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ul(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;$s("Error using user provided cache. Falling back to memory cache: "+n),await Ul(t,new ec)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await Ul(t,new BN(void 0));return t._offlineComponents}async function uf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await Lg(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await Lg(t,new qu))),t._onlineComponents}function WN(t){return uf(t).then(e=>e.syncEngine)}function KN(t){return uf(t).then(e=>e.datastore)}async function tc(t){const e=await uf(t),n=e.eventManager;return n.onListen=SN.bind(null,e.syncEngine),n.onUnlisten=kN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=PN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=NN.bind(null,e.syncEngine),n}function zN(t,e,n={}){const r=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new lf({next:p=>{h.eu(),o.enqueueAndForget(()=>sf(i,d));const m=p.docs.has(a);!m&&p.fromCache?u.reject(new ie($.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&l&&l.source==="server"?u.reject(new ie($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new af(Nc(a.path),h,{includeMetadataChanges:!0,ua:!0});return rf(i,d)}(await tc(t),t.asyncQueue,e,n,r)),r.promise}function GN(t,e,n={}){const r=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new lf({next:p=>{h.eu(),o.enqueueAndForget(()=>sf(i,d)),p.fromCache&&l.source==="server"?u.reject(new ie($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new af(a,h,{includeMetadataChanges:!0,ua:!0});return rf(i,d)}(await tc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t,e,n){if(!n)throw new ie($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QN(t,e,n,r){if(e===!0&&r===!0)throw new ie($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Fg(t){if(!ce.isDocumentKey(t))throw new ie($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ug(t){if(ce.isDocumentKey(t))throw new ie($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function Xt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hf(t);throw new ie($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sk;switch(r.type){case"firstParty":return new ck(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Mg.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Mg.delete(n),r.terminate())}(this),Promise.resolve()}}function JN(t,e,n,r={}){var s;const i=(t=Xt(t,Bc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&$s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Et.MOCK_USER;else{a=DP(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ie($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Et(u)}t._authCredentials=new ik(new rE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bo(this.firestore,e,this._query)}}class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class mr extends bo{constructor(e,n,r){super(e,n,Nc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new ce(e))}withConverter(e){return new mr(this.firestore,e,this._path)}}function jr(t,e,...n){if(t=We(t),sT("collection","path",e),t instanceof Bc){const r=xe.fromString(e,...n);return Ug(r),new mr(t,null,r)}{if(!(t instanceof Ot||t instanceof mr))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Ug(r),new mr(t.firestore,null,r)}}function Si(t,e,...n){if(t=We(t),arguments.length===1&&(e=sE.newId()),sT("doc","path",e),t instanceof Bc){const r=xe.fromString(e,...n);return Fg(r),new Ot(t,null,new ce(r))}{if(!(t instanceof Ot||t instanceof mr))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Fg(r),new Ot(t.firestore,t instanceof mr?t.converter:null,new ce(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Jh(this,"async_queue_retry"),this.fu=()=>{const r=Fl();r&&ee("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Fl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const n=Fl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const n=new _n;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ei(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw jn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=tf.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.Eu.push(s),s}pu(){this.Au&&le()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.Eu)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.Eu.indexOf(e);this.Eu.splice(n,1)}}function $g(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class br extends Bc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new jg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jg(e),this._firestoreClient=void 0,await e}}}function iT(t,e){const n=typeof t=="object"?t:Lh(),r=typeof t=="string"?t:"(default)",s=Sc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Hy("firestore");i&&JN(s,...i)}return s}function Ro(t){if(t._terminated)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||YN(t),t._firestoreClient}function YN(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new Ik(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,rT(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new HN(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zr(dt.fromBase64String(e))}catch(n){throw new ie($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zr(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=/^__.*__$/;class ZN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new wo(e,this.data,n,this.fieldTransforms)}}class oT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function aT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class pf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new pf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Bu(e),s}Lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return nc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(aT(this.Mu)&&XN.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class eD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Mc(e)}$u(e,n,r,s=!1){return new pf({Mu:e,methodName:n,Ku:r,path:ft.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gf(t){const e=t._freezeSettings(),n=Mc(t._databaseId);return new eD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cT(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);_f("Data must be an object, but it was:",o,r);const a=hT(r,o);let l,u;if(i.merge)l=new qt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=Wu(e,d,n);if(!o.contains(p))throw new ie($.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);dT(h,p)||h.push(p)}l=new qt(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new ZN(new Nt(a),l,u)}class $c extends jc{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $c}}class mf extends jc{_toFieldTransform(e){return new Qk(e.path,new so)}isEqual(e){return e instanceof mf}}function lT(t,e,n,r){const s=t.$u(1,e,n);_f("Data must be an object, but it was:",s,r);const i=[],o=Nt.empty();kr(r,(l,u)=>{const h=yf(e,l,n);u=We(u);const d=s.Lu(h);if(u instanceof $c)i.push(h);else{const p=Hc(u,d);p!=null&&(i.push(h),o.set(h,p))}});const a=new qt(i);return new oT(o,a,s.fieldTransforms)}function uT(t,e,n,r,s,i){const o=t.$u(1,e,n),a=[Wu(e,r,n)],l=[s];if(i.length%2!=0)throw new ie($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Wu(e,i[p])),l.push(i[p+1]);const u=[],h=Nt.empty();for(let p=a.length-1;p>=0;--p)if(!dT(u,a[p])){const m=a[p];let A=l[p];A=We(A);const C=o.Lu(m);if(A instanceof $c)u.push(m);else{const D=Hc(A,C);D!=null&&(u.push(m),h.set(m,D))}}const d=new qt(u);return new oT(h,d,o.fieldTransforms)}function Hc(t,e){if(fT(t=We(t)))return _f("Unsupported field value:",e,t),hT(t,e);if(t instanceof jc)return function(r,s){if(!aT(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Hc(a,s.ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Kk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=nt.fromDate(r);return{timestampValue:Ja(s.serializer,i)}}if(r instanceof nt){const i=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ja(s.serializer,i)}}if(r instanceof ff)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zr)return{bytesValue:NE(s.serializer,r._byteString)};if(r instanceof Ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Kh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof df)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.qu("VectorValues must only contain numeric values.");return $h(a.serializer,l)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${hf(r)}`)}(t,e)}function hT(t,e){const n={};return iE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kr(t,(r,s)=>{const i=Hc(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function fT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof ff||t instanceof Zr||t instanceof Ot||t instanceof jc||t instanceof df)}function _f(t,e,n){if(!fT(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=hf(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function Wu(t,e,n){if((e=We(e))instanceof So)return e._internalPath;if(typeof e=="string")return yf(t,e);throw nc("Field path arguments must be of type string or ",t,!1,void 0,n)}const tD=new RegExp("[~\\*/\\[\\]]");function yf(t,e,n){if(e.search(tD)>=0)throw nc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new So(...e.split("."))._internalPath}catch{throw nc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ie($.INVALID_ARGUMENT,a+t+l)}function dT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nD extends rc{data(){return super.data()}}function pT(t,e){return typeof e=="string"?yf(t,e):e instanceof So?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mT{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return kr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ge(o.doubleValue));return new df(i)}convertGeoPoint(e){return new ff(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Cc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(to(e));default:return null}}convertTimestamp(e){const n=wr(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);Ie(FE(r));const s=new no(r.get(1),r.get(3)),i=new ce(r.popFirst(5));return s.isEqual(n)||jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class rD extends mT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ef extends rc{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(pT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ta extends Ef{data(e={}){return super.data(e)}}class yT{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new As(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ta(this._firestore,this._userDataWriter,r.key,r,new As(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Ta(s._firestore,s._userDataWriter,a.doc.key,a.doc,new As(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Ta(s._firestore,s._userDataWriter,a.doc.key,a.doc,new As(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:sD(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t){t=Xt(t,Ot);const e=Xt(t.firestore,br);return zN(Ro(e),t._key).then(n=>TT(e,t,n))}class qc extends mT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function Bl(t){t=Xt(t,bo);const e=Xt(t.firestore,br),n=Ro(e),r=new qc(e);return gT(t._query),GN(n,t._query).then(s=>new yT(e,r,t,s))}function iD(t,e,n,...r){t=Xt(t,Ot);const s=Xt(t.firestore,br),i=gf(s);let o;return o=typeof(e=We(e))=="string"||e instanceof So?uT(i,"updateDoc",t._key,e,n,r):lT(i,"updateDoc",t._key,e),ET(s,[o.toMutation(t._key,Dt.exists(!0))])}function qg(t,e){const n=Xt(t.firestore,br),r=Si(t),s=_T(t.converter,e);return ET(n,[cT(gf(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Dt.exists(!1))]).then(()=>r)}function Wg(t,...e){var n,r,s;t=We(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||$g(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if($g(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(s=d.complete)===null||s===void 0?void 0:s.bind(d)}let l,u,h;if(t instanceof Ot)u=Xt(t.firestore,br),h=Nc(t._key.path),l={next:d=>{e[o]&&e[o](TT(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Xt(t,bo);u=Xt(d.firestore,br),h=d._query;const p=new qc(u);l={next:m=>{e[o]&&e[o](new yT(u,p,d,m))},error:e[o+1],complete:e[o+2]},gT(t._query)}return function(p,m,A,C){const D=new lf(C),x=new af(m,D,A);return p.asyncQueue.enqueueAndForget(async()=>rf(await tc(p),x)),()=>{D.eu(),p.asyncQueue.enqueueAndForget(async()=>sf(await tc(p),x))}}(Ro(u),h,a,l)}function ET(t,e){return function(r,s){const i=new _n;return r.asyncQueue.enqueueAndForget(async()=>DN(await WN(r),s,i)),i.promise}(Ro(t),e)}function TT(t,e,n){const r=n.docs.get(e._key),s=new qc(t);return new Ef(t,s,e._key,r,new As(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD={maxAttempts:5};function Ei(t,e){if((t=We(t)).firestore!==e)throw new ie($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=gf(n)}get(n){const r=Ei(n,this._firestore),s=new rD(this._firestore);return this._transaction.lookup([r._key]).then(i=>{if(!i||i.length!==1)return le();const o=i[0];if(o.isFoundDocument())return new rc(this._firestore,s,o.key,o,r.converter);if(o.isNoDocument())return new rc(this._firestore,s,r._key,null,r.converter);throw le()})}set(n,r,s){const i=Ei(n,this._firestore),o=_T(i.converter,r,s),a=cT(this._dataReader,"Transaction.set",i._key,o,i.converter!==null,s);return this._transaction.set(i._key,a),this}update(n,r,s,...i){const o=Ei(n,this._firestore);let a;return a=typeof(r=We(r))=="string"||r instanceof So?uT(this._dataReader,"Transaction.update",o._key,r,s,i):lT(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Ei(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Ei(e,this._firestore),r=new qc(this._firestore);return super.get(e).then(s=>new Ef(this._firestore,r,n._key,s._document,new As(!1,!1),n.converter))}}function cD(t,e,n){t=Xt(t,br);const r=Object.assign(Object.assign({},oD),n);return function(i){if(i.maxAttempts<1)throw new ie($.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,a){const l=new _n;return i.asyncQueue.enqueueAndForget(async()=>{const u=await KN(i);new $N(i.asyncQueue,u,a,o,l).cu()}),l.promise}(Ro(t),s=>e(new aD(t,s)),r)}function Kg(){return new mf("serverTimestamp")}(function(e,n=!0){(function(s){Xs=s})(Ys),Yr(new Er("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new br(new ok(r.getProvider("auth-internal")),new uk(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ie($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new no(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),mn(sg,"4.7.6",e),mn(sg,"4.7.6","esm2017")})();function Tf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function wT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lD=wT,vT=new yo("auth","Firebase",wT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=new Vh("@firebase/auth");function uD(t,...e){sc.logLevel<=ye.WARN&&sc.warn(`Auth (${Ys}): ${t}`,...e)}function wa(t,...e){sc.logLevel<=ye.ERROR&&sc.error(`Auth (${Ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,...e){throw wf(t,...e)}function En(t,...e){return wf(t,...e)}function IT(t,e,n){const r=Object.assign(Object.assign({},lD()),{[e]:n});return new yo("auth","Firebase",r).create(e,{appName:t.name})}function _r(t){return IT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vT.create(t,...e)}function de(t,e,...n){if(!t)throw wf(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wa(e),new Error(e)}function Hn(t,e){t||xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hD(){return zg()==="http:"||zg()==="https:"}function zg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hD()||LP()||"connection"in navigator)?navigator.onLine:!0}function dD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=OP()||MP()}get(){return fD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=new Po(3e4,6e4);function is(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dr(t,e,n,r,s={}){return bT(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Eo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return xP()||(u.referrerPolicy="no-referrer"),AT.fetch()(RT(t,t.config.apiHost,n,a),u)})}async function bT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pD),e);try{const s=new _D(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ca(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ca(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ca(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ca(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw IT(t,h,u);ln(t,h)}}catch(s){if(s instanceof An)throw s;ln(t,"network-request-failed",{message:String(s)})}}async function Wc(t,e,n,r,s={}){const i=await Dr(t,e,n,r,s);return"mfaPendingCredential"in i&&ln(t,"multi-factor-auth-required",{_serverResponse:i}),i}function RT(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?vf(t.config,s):`${t.config.apiScheme}://${s}`}function mD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _D{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),gD.get())})}}function ca(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=En(t,e,r);return s.customData._tokenResponse=n,s}function Gg(t){return t!==void 0&&t.enterprise!==void 0}class yD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ED(t,e){return Dr(t,"GET","/v2/recaptchaConfig",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TD(t,e){return Dr(t,"POST","/v1/accounts:delete",e)}async function ST(t,e){return Dr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wD(t,e=!1){const n=We(t),r=await n.getIdToken(e),s=If(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:qi(jl(s.auth_time)),issuedAtTime:qi(jl(s.iat)),expirationTime:qi(jl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function jl(t){return Number(t)*1e3}function If(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wa("JWT malformed, contained fewer than 3 sections"),null;try{const s=jy(n);return s?JSON.parse(s):(wa("Failed to decode base64 JWT payload"),null)}catch(s){return wa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qg(t){const e=If(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&vD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qi(this.lastLoginAt),this.creationTime=qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ao(t,ST(n,{idToken:r}));de(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?PT(i.providerUserInfo):[],a=bD(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new zu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function AD(t){const e=We(t);await ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bD(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function PT(t){return t.map(e=>{var{providerId:n}=e,r=Tf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RD(t,e){const n=await bT(t,{},async()=>{const r=Eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=RT(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",AT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SD(t,e){return Dr(t,"POST","/v2/accounts:revokeToken",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=Qg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await RD(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Vs;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vs,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Tf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ID(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ao(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wD(this,e)}reload(){return AD(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ic(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vn(this.auth.app))return Promise.reject(_r(this.auth));const e=await this.getIdToken();return await ao(this,TD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,N=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:w,emailVerified:k,isAnonymous:O,providerData:L,stsTokenManager:v}=n;de(w&&v,e,"internal-error");const y=Vs.fromJSON(this.name,v);de(typeof w=="string",e,"internal-error"),Xn(d,e.name),Xn(p,e.name),de(typeof k=="boolean",e,"internal-error"),de(typeof O=="boolean",e,"internal-error"),Xn(m,e.name),Xn(A,e.name),Xn(C,e.name),Xn(D,e.name),Xn(x,e.name),Xn(N,e.name);const _=new Ln({uid:w,auth:e,email:p,emailVerified:k,displayName:d,isAnonymous:O,photoURL:A,phoneNumber:m,tenantId:C,stsTokenManager:y,createdAt:x,lastLoginAt:N});return L&&Array.isArray(L)&&(_.providerData=L.map(T=>Object.assign({},T))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Vs;s.updateFromServerResponse(n);const i=new Ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ic(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?PT(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Vs;a.updateFromIdToken(r);const l=new Ln({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=new Map;function Mn(t){Hn(t instanceof Function,"Expected a class definition");let e=Jg.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}CT.type="NONE";const Yg=CT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=va(this.userKey,s.apiKey,i),this.fullPersistenceKey=va("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xs(Mn(Yg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Mn(Yg);const o=va(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Ln._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new xs(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new xs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(OT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xT(e))return"Blackberry";if(LT(e))return"Webos";if(NT(e))return"Safari";if((e.includes("chrome/")||DT(e))&&!e.includes("edge/"))return"Chrome";if(VT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kT(t=At()){return/firefox\//i.test(t)}function NT(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function DT(t=At()){return/crios\//i.test(t)}function OT(t=At()){return/iemobile/i.test(t)}function VT(t=At()){return/android/i.test(t)}function xT(t=At()){return/blackberry/i.test(t)}function LT(t=At()){return/webos/i.test(t)}function Af(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PD(t=At()){var e;return Af(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CD(){return FP()&&document.documentMode===10}function MT(t=At()){return Af(t)||VT(t)||LT(t)||xT(t)||/windows phone/i.test(t)||OT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t,e=[]){let n;switch(t){case"Browser":n=Xg(At());break;case"Worker":n=`${Xg(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ys}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ND(t,e={}){return Dr(t,"GET","/v2/passwordPolicy",is(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD=6;class OD{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:DD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zg(this),this.idTokenSubscription=new Zg(this),this.beforeStateQueue=new kD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ST(this,{idToken:e}),r=await Ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Vn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ic(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vn(this.app))return Promise.reject(_r(this));const n=e?We(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vn(this.app)?Promise.reject(_r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vn(this.app)?Promise.reject(_r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ND(this),n=new OD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await SD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=FT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ni(t){return We(t)}class Zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=KP(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xD(t){Kc=t}function UT(t){return Kc.loadJS(t)}function LD(){return Kc.recaptchaEnterpriseScript}function MD(){return Kc.gapiScript}function FD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class UD{constructor(){this.enterprise=new BD}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class BD{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const jD="recaptcha-enterprise",BT="NO_RECAPTCHA";class $D{constructor(e){this.type=jD,this.auth=ni(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{ED(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new yD(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Gg(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(BT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new UD().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Gg(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=LD();l.length!==0&&(l+=a),UT(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function em(t,e,n,r=!1,s=!1){const i=new $D(t);let o;if(s)o=BT;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function tm(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await em(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await em(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(t,e){const n=Sc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(qa(i,e??{}))return s;ln(s,"already-initialized")}return n.initialize({options:e})}function qD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function WD(t,e,n){const r=ni(t);de(r._canInitEmulator,r,"emulator-config-failed"),de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=jT(e),{host:o,port:a}=KD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),zD()}function jT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KD(t){const e=jT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:nm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:nm(o)}}}function nm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}async function GD(t,e){return Dr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QD(t,e){return Wc(t,"POST","/v1/accounts:signInWithPassword",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JD(t,e){return Wc(t,"POST","/v1/accounts:signInWithEmailLink",is(t,e))}async function YD(t,e){return Wc(t,"POST","/v1/accounts:signInWithEmailLink",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends bf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new co(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new co(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tm(e,n,"signInWithPassword",QD);case"emailLink":return JD(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tm(e,r,"signUpPassword",GD);case"emailLink":return YD(e,{idToken:n,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t,e){return Wc(t,"POST","/v1/accounts:signInWithIdp",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD="http://localhost";class es extends bf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Tf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new es(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ls(e,n)}buildRequest(){const e={requestUri:XD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eO(t){const e=vi(Ii(t)).link,n=e?vi(Ii(e)).deep_link_id:null,r=vi(Ii(t)).deep_link_id;return(r?vi(Ii(r)).link:null)||r||n||e||t}class Rf{constructor(e){var n,r,s,i,o,a;const l=vi(Ii(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=ZD((s=l.mode)!==null&&s!==void 0?s:null);de(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=eO(e);try{return new Rf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.providerId=ri.PROVIDER_ID}static credential(e,n){return co._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rf.parseLink(n);return de(r,"argument-error"),co._fromEmailAndCode(e,r.code,r.tenantId)}}ri.PROVIDER_ID="password";ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends $T{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Co{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return es._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return or.credential(n,r)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Co{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Co{constructor(){super("twitter.com")}static credential(e,n){return es._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ln._fromIdTokenResponse(e,r,s),o=rm(r);return new Gs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=rm(r);return new Gs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function rm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends An{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,oc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new oc(e,n,r,s)}}function HT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?oc._fromErrorAndOperation(t,i,e,r):i})}async function tO(t,e,n=!1){const r=await ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nO(t,e,n=!1){const{auth:r}=t;if(Vn(r.app))return Promise.reject(_r(r));const s="reauthenticate";try{const i=await ao(t,HT(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=If(i.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),Gs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qT(t,e,n=!1){if(Vn(t.app))return Promise.reject(_r(t));const r="signIn",s=await HT(t,r,e),i=await Gs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function rO(t,e){return qT(ni(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sO(t){const e=ni(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Nx(t,e,n){return Vn(t.app)?Promise.reject(_r(t)):rO(We(t),ri.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sO(t),r})}function iO(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function oO(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function Dx(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function Ox(t){return We(t).signOut()}const ac="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ac,"1"),this.storage.removeItem(ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO=1e3,cO=10;class KT extends WT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=MT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);CD()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,cO):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}KT.type="LOCAL";const lO=KT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT extends WT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zT.type="SESSION";const GT=zT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new zc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await uO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Sf("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function fO(t){Tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function dO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gO(){return QT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="firebaseLocalStorageDb",mO=1,cc="firebaseLocalStorage",YT="fbase_key";class ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gc(t,e){return t.transaction([cc],e?"readwrite":"readonly").objectStore(cc)}function _O(){const t=indexedDB.deleteDatabase(JT);return new ko(t).toPromise()}function Gu(){const t=indexedDB.open(JT,mO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cc,{keyPath:YT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cc)?e(r):(r.close(),await _O(),e(await Gu()))})})}async function sm(t,e,n){const r=Gc(t,!0).put({[YT]:e,value:n});return new ko(r).toPromise()}async function yO(t,e){const n=Gc(t,!1).get(e),r=await new ko(n).toPromise();return r===void 0?null:r.value}function im(t,e){const n=Gc(t,!0).delete(e);return new ko(n).toPromise()}const EO=800,TO=3;class XT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>TO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return QT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zc._getInstance(gO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dO(),!this.activeServiceWorker)return;this.sender=new hO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gu();return await sm(e,ac,"1"),await im(e,ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>im(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Gc(s,!1).getAll();return new ko(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}XT.type="LOCAL";const wO=XT;new Po(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vO(t,e){return e?Mn(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf extends bf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IO(t){return qT(t.auth,new Pf(t),t.bypassAuthState)}function AO(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),nO(n,new Pf(t),t.bypassAuthState)}async function bO(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),tO(n,new Pf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IO;case"linkViaPopup":case"linkViaRedirect":return bO;case"reauthViaPopup":case"reauthViaRedirect":return AO;default:ln(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=new Po(2e3,1e4);class bs extends ZT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=Sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RO.get())};e()}}bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO="pendingRedirect",Ia=new Map;class PO extends ZT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ia.get(this.auth._key());if(!e){try{const r=await CO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ia.set(this.auth._key(),e)}return this.bypassAuthState||Ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CO(t,e){const n=DO(e),r=NO(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function kO(t,e){Ia.set(t._key(),e)}function NO(t){return Mn(t._redirectPersistence)}function DO(t){return va(SO,t.config.apiKey,t.name)}async function OO(t,e,n=!1){if(Vn(t.app))return Promise.reject(_r(t));const r=ni(t),s=vO(r,e),o=await new PO(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=10*60*1e3;class xO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ew(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VO&&this.cachedEventUids.clear(),this.cachedEventUids.has(om(e))}saveEventToCache(e){this.cachedEventUids.add(om(e)),this.lastProcessedEventTime=Date.now()}}function om(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ew({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ew(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MO(t,e={}){return Dr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UO=/^https?/;async function BO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MO(t);for(const n of e)try{if(jO(n))return}catch{}ln(t,"unauthorized-domain")}function jO(t){const e=Ku(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!UO.test(n))return!1;if(FO.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=new Po(3e4,6e4);function am(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HO(t){return new Promise((e,n)=>{var r,s,i;function o(){am(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{am(),n(En(t,"network-request-failed"))},timeout:$O.get()})}if(!((s=(r=Tn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Tn().gapi)===null||i===void 0)&&i.load)o();else{const a=FD("iframefcb");return Tn()[a]=()=>{gapi.load?o():n(En(t,"network-request-failed"))},UT(`${MD()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Aa=null,e})}let Aa=null;function qO(t){return Aa=Aa||HO(t),Aa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO=new Po(5e3,15e3),KO="__/auth/iframe",zO="emulator/auth/iframe",GO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JO(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vf(e,zO):`https://${t.config.authDomain}/${KO}`,r={apiKey:e.apiKey,appName:t.name,v:Ys},s=QO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Eo(r).slice(1)}`}async function YO(t){const e=await qO(t),n=Tn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:JO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),a=Tn().setTimeout(()=>{i(o)},WO.get());function l(){Tn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZO=500,eV=600,tV="_blank",nV="http://localhost";class cm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rV(t,e,n,r=ZO,s=eV){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},XO),{width:r.toString(),height:s.toString(),top:i,left:o}),u=At().toLowerCase();n&&(a=DT(u)?tV:n),kT(u)&&(e=e||nV,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[m,A])=>`${p}${m}=${A},`,"");if(PD(u)&&a!=="_self")return sV(e||"",a),new cm(null);const d=window.open(e||"",a,h);de(d,t,"popup-blocked");try{d.focus()}catch{}return new cm(d)}function sV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iV="__/auth/handler",oV="emulator/auth/handler",aV=encodeURIComponent("fac");async function lm(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ys,eventId:s};if(e instanceof $T){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",WP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Co){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${aV}=${encodeURIComponent(l)}`:"";return`${cV(t)}?${Eo(a).slice(1)}${u}`}function cV({config:t}){return t.emulator?vf(t,oV):`https://${t.authDomain}/${iV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="webStorageSupport";class lV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=GT,this._completeRedirectFn=OO,this._overrideRedirectResult=kO}async _openPopup(e,n,r,s){var i;Hn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await lm(e,n,r,Ku(),s);return rV(e,o,Sf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await lm(e,n,r,Ku(),s);return fO(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YO(e),r=new xO(e);return n.register("authEvent",s=>(de(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($l,{type:$l},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$l];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return MT()||NT()||Af()}}const uV=lV;var um="@firebase/auth",hm="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dV(t){Yr(new Er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:FT(t)},u=new VD(r,s,i,l);return qD(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Yr(new Er("auth-internal",e=>{const n=ni(e.getProvider("auth").getImmediate());return(r=>new hV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(um,hm,fV(t)),mn(um,hm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV=5*60,gV=Wy("authIdTokenMaxAge")||pV;let fm=null;const mV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gV)return;const s=n==null?void 0:n.token;fm!==s&&(fm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _V(t=Lh()){const e=Sc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HD(t,{popupRedirectResolver:uV,persistence:[wO,lO,GT]}),r=Wy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=mV(i.toString());oO(n,o,()=>o(n.currentUser)),iO(n,a=>o(a))}}const s=$y("auth");return s&&WD(n,`http://${s}`),n}function yV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}xD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=En("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",yV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dV("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EV="type.googleapis.com/google.protobuf.Int64Value",TV="type.googleapis.com/google.protobuf.UInt64Value";function tw(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function lc(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>lc(e));if(typeof t=="function"||typeof t=="object")return tw(t,e=>lc(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Qs(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case EV:case TV:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Qs(e)):typeof t=="function"||typeof t=="object"?tw(t,e=>Qs(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Bt extends An{constructor(e,n,r){super(`${Cf}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,Bt.prototype)}}function wV(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function uc(t,e){let n=wV(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!dm[o])return new Bt("internal","internal");n=dm[o],r=o}const a=i.message;typeof a=="string"&&(r=a),s=i.details,s!==void 0&&(s=Qs(s))}}catch{}return n==="ok"?null:new Bt(n,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||r.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="us-central1",IV=/^data: (.*?)(?:\n|$)/;function AV(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Bt("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class bV{constructor(e,n,r,s,i=Qu,o=(...a)=>fetch(...a)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new vV(n,r,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(i);this.customDomain=a.origin+(a.pathname==="/"?"":a.pathname),this.region=Qu}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function RV(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function SV(t,e,n){const r=s=>CV(t,e,s,{});return r.stream=(s,i)=>NV(t,e,s,i),r}async function PV(t,e,n,r){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}async function nw(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function CV(t,e,n,r){const s=t._url(e);return kV(t,s,n,r)}async function kV(t,e,n,r){n=lc(n);const s={data:n},i=await nw(t,r),o=r.timeout||7e4,a=AV(o),l=await Promise.race([PV(e,s,i,t.fetchImpl),a.promise,t.cancelAllRequests]);if(a.cancel(),!l)throw new Bt("cancelled","Firebase Functions instance was deleted.");const u=uc(l.status,l.json);if(u)throw u;if(!l.json)throw new Bt("internal","Response is not valid JSON object.");let h=l.json.data;if(typeof h>"u"&&(h=l.json.result),typeof h>"u")throw new Bt("internal","Response is missing data field.");return{data:Qs(h)}}function NV(t,e,n,r){const s=t._url(e);return DV(t,s,n,r||{})}async function DV(t,e,n,r){var s;n=lc(n);const i={data:n},o=await nw(t,r);o["Content-Type"]="application/json",o.Accept="text/event-stream";let a;try{a=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(i),headers:o,signal:r==null?void 0:r.signal})}catch(m){if(m instanceof Error&&m.name==="AbortError"){const C=new Bt("cancelled","Request was cancelled.");return{data:Promise.reject(C),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(C)}}}}}}const A=uc(0,null);return{data:Promise.reject(A),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(A)}}}}}}let l,u;const h=new Promise((m,A)=>{l=m,u=A});(s=r==null?void 0:r.signal)===null||s===void 0||s.addEventListener("abort",()=>{const m=new Bt("cancelled","Request was cancelled.");u(m)});const d=a.body.getReader(),p=OV(d,l,u,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const m=p.getReader();return{async next(){const{value:A,done:C}=await m.read();return{value:A,done:C}},async return(){return await m.cancel(),{done:!0,value:void 0}}}}},data:h}}function OV(t,e,n,r){const s=(o,a)=>{const l=o.match(IV);if(!l)return;const u=l[1];try{const h=JSON.parse(u);if("result"in h){e(Qs(h.result));return}if("message"in h){a.enqueue(Qs(h.message));return}if("error"in h){const d=uc(0,h);a.error(d),n(d);return}}catch(h){if(h instanceof Bt){a.error(h),n(h);return}}},i=new TextDecoder;return new ReadableStream({start(o){let a="";return l();async function l(){if(r!=null&&r.aborted){const u=new Bt("cancelled","Request was cancelled");return o.error(u),n(u),Promise.resolve()}try{const{value:u,done:h}=await t.read();if(h){a.trim()&&s(a.trim(),o),o.close();return}if(r!=null&&r.aborted){const p=new Bt("cancelled","Request was cancelled");o.error(p),n(p),await t.cancel();return}a+=i.decode(u,{stream:!0});const d=a.split(`
`);a=d.pop()||"";for(const p of d)p.trim()&&s(p.trim(),o);return l()}catch(u){const h=u instanceof Bt?u:uc(0,null);o.error(h),n(h)}}},cancel(){return t.cancel()}})}const pm="@firebase/functions",gm="0.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VV="auth-internal",xV="app-check-internal",LV="messaging-internal";function MV(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(VV),o=n.getProvider(LV),a=n.getProvider(xV);return new bV(s,i,o,a,r)};Yr(new Er(Cf,e,"PUBLIC").setMultipleInstances(!0)),mn(pm,gm,t),mn(pm,gm,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FV(t=Lh(),e=Qu){const r=Sc(We(t),Cf).getImmediate({identifier:e}),s=Hy("functions");return s&&UV(r,...s),r}function UV(t,e,n){RV(We(t),e,n)}function Vx(t,e,n){return SV(We(t),e)}MV();const BV=Vt(()=>{const t=go().public.firebaseConfig,e=Gy(t),n=iT(e),r=_V(e),s=TP("user",()=>null),i=FV(e,"europe-west6");return{provide:{firestore:n,auth:r,user:s,functions:i}}});class jV{constructor(){St(this,"db",iT())}async getArticles(){try{return(await Bl(jr(this.db,"articles"))).docs.map(n=>({...n.data(),id:n.id}))}catch(e){return console.error("Error fetching articles:",e),[]}}async getArticle(e){try{const n=Si(this.db,"articles",e),r=await Hg(n);return r.exists()?r.data():null}catch(n){return console.error("Error fetching ticket:",n),null}}async getArticleByArticleID(e){try{const r=(await Bl(jr(this.db,"articles"))).docs.find(s=>s.data().articleID===e);return r?{...r.data(),id:r.id}:null}catch(n){return console.error("Error fetching article by ID:",n),null}}async createArticle(e){try{return(await qg(jr(this.db,"articles"),{...e,datetime:Kg()})).id}catch(n){return console.error("Error creating article:",n),null}}async updateArticle(e,n){try{const r=Si(this.db,"articles",e);return await iD(r,{...n}),!0}catch(r){return console.error("Error updating article:",r),!1}}async updateArticlesQuantity(e){try{await cD(this.db,async n=>{e.forEach(r=>{const s=Si(this.db,"articles",r.id??"");n.update(s,{quantity:r.quantity})})})}catch(n){console.error("Error updating articles quantity:",n)}}subscribeToArticles(e){const n=jr(this.db,"articles");return Wg(n,s=>{const i=s.docs.map(o=>({...o.data(),id:o.id}));e(i)},s=>{console.error("Error listening to articles:",s)})}async getTickets(){try{return(await Bl(jr(this.db,"tickets"))).docs.map(n=>({...n.data(),id:n.id}))}catch(e){return console.error("Error fetching tickets:",e),[]}}async createTicket(e){try{return(await qg(jr(this.db,"tickets"),{...e,datetime:Kg()})).id}catch(n){return console.error("Error creating ticket:",n),null}}async getTicket(e){try{const n=Si(this.db,"tickets",e),r=await Hg(n);return r.exists()?r.data():null}catch(n){return console.error("Error fetching ticket:",n),null}}subscribeToTickets(e){const n=jr(this.db,"tickets");return Wg(n,s=>{const i=s.docs.map(o=>({...o.data(),id:o.id}));e(i)},s=>{console.error("Error listening to tickets:",s)})}}class $V{constructor(e){St(this,"database");this.database=e}async getArticles(){return await this.database.getArticles()}async getArticle(e){return await this.database.getArticle(e)}async getArticleByArticleID(e){return await this.database.getArticleByArticleID(e)}async createArticle(e){return await this.database.createArticle(e)}async updateArticle(e,n){return await this.database.updateArticle(e,n)}async updateArticlesQuantity(e){await this.database.updateArticlesQuantity(e)}subscribeToArticles(e){this.database.subscribeToArticles(e)}async getTickets(){return await this.database.getTickets()}async createTicket(e){return await this.database.createTicket(e)}async getTicket(e){return await this.database.getTicket(e)}subscribeToTickets(e){this.database.subscribeToTickets(e)}}const HV=Vt(()=>{const t=new jV;return{provide:{database:new $V(t)}}}),rw=()=>{const{$database:t}=Ue();return{getArticles:async()=>await t.getArticles(),getArticle:async l=>await t.getArticle(l),getArticleByArticleID:async l=>await t.getArticleByArticleID(l),addArticle:async l=>await t.createArticle(l),updateArticle:async(l,u)=>await t.updateArticle(l,u),updateArticlesQuantity:async l=>{l.length!==0&&await t.updateArticlesQuantity(l)},subscribeToArticles:l=>t.subscribeToArticles(l)}},sw=Sh("articles",()=>{const{getArticle:t,subscribeToArticles:e}=rw(),n=ct(JSON.parse(localStorage.getItem("articles")||"[]")),r=async()=>{e(o=>{n.value=o,s()})},s=()=>{localStorage.setItem("articles",JSON.stringify(n.value))},i=async o=>{if(!o)return null;const a=n.value.find(l=>l.articleID===o);return a||await t(o)};return{articles:at(()=>n.value),getArticleByArticleID:i,init:r}}),iw=()=>{const{$database:t}=Ue(),e=ct([]),n=async()=>await t.getTickets(),r=async o=>o?await t.getTicket(o):null,s=async o=>await t.createTicket(o),i=o=>t.subscribeToTickets(o);return{tickets:at(()=>e.value),getTickets:n,getTicketById:r,createTicket:s,subscribeToTickets:i}},qV=Sh("tickets",()=>{const{subscribeToTickets:t}=iw(),e=ct(JSON.parse(localStorage.getItem("tickets")||"[]")),n=at(()=>{const i=new Map;return e.value.forEach(a=>{var l;if(a.datetime){const u=a.datetime.toDate().toISOString().split("T")[0];i.has(u)||i.set(u,[]),(l=i.get(u))==null||l.push(a)}}),i.forEach((a,l)=>{i.set(l,a.sort((u,h)=>{const d=u.datetime?u.datetime.toDate().getTime():0;return(h.datetime?h.datetime.toDate().getTime():0)-d}))}),Array.from(i.entries()).sort(([a],[l])=>new Date(l).getTime()-new Date(a).getTime())}),r=async()=>{t(i=>{e.value=i,s()})},s=()=>{localStorage.setItem("tickets",JSON.stringify(e.value))};return{tickets:at(()=>e.value),sortedTickets:n,init:r}});var ba=(t=>(t.CASH="CASH",t.TERMINAL="TERMINAL",t.VOUCHER="VOUCHER",t.UNDEFINED="UNDEFINED",t))(ba||{});const WV=Sh("scannedArticles",()=>{const t=sw(),{updateArticlesQuantity:e}=rw(),{createTicket:n}=iw(),r=ct([]),s=ct(0),i=ct(""),o=at(()=>r.value[s.value]),a=async(N,w)=>{if(!N)return;const k=o.value,O=k.scannedArticles.findIndex(L=>L.article.articleID===N);if(O!==-1)k.scannedArticles[O].quantity+=w;else{const L=await t.getArticleByArticleID(N);if(L){const v={article:L,quantity:w};k.scannedArticles.push(v)}else console.error(`Article not found: ${N}`)}C()},l=(N,w)=>{const k=o.value,O=k.scannedArticles.findIndex(L=>L.article.articleID===N);O!==-1&&(w===0?k.scannedArticles.splice(O,1):k.scannedArticles[O].quantity=w,C())},u=N=>{N>=0&&N<r.value.length&&(s.value=N,localStorage.setItem("activeTicketIndex",String(s.value)))},h=()=>{r.value.length>=6||(r.value.push({scannedArticles:[],rawDiscount:0,percentageDiscount:0,totalPrice:0,paymentMethod:ba.UNDEFINED}),s.value=r.value.length-1)},d=()=>{r.value.length>1?(r.value.splice(s.value,1),s.value=Math.min(s.value,r.value.length-1)):(r.value[0]={scannedArticles:[],rawDiscount:0,percentageDiscount:0,totalPrice:0,paymentMethod:ba.UNDEFINED},s.value=0),D()},p=async()=>{const N=o.value.scannedArticles.map(k=>{const O={...k.article};return O.quantity-=k.quantity,O});await e(N);const w=await n(o.value);i.value=w??"",d()},m=(N,w)=>{const k=o.value;k.rawDiscount=N,k.percentageDiscount=w,C()},A=N=>{o.value.paymentMethod=N},C=()=>{const N=o.value;let k=N.scannedArticles.reduce((O,L)=>{const v=L.article.unitPrice-(L.article.discount??0);return O+v*L.quantity},0)-N.rawDiscount;k*=1-N.percentageDiscount/100,N.totalPrice=Math.max(k,0),D()},D=()=>{localStorage.setItem("ticketsOpen",JSON.stringify(r.value))};return{validatedTicketId:i,ticketsOpen:r,activeTicketIndex:s,currentTicket:o,addScannedArticle:a,updateArticleQuantity:l,selectActiveTicket:u,addNewTicket:h,deleteCurrentTicket:d,validateTicket:p,updateDiscounts:m,setPaymentMethod:A,init:()=>{const N=JSON.parse(localStorage.getItem("ticketsOpen")||"[]");N.length===0?r.value=[{scannedArticles:[],rawDiscount:0,percentageDiscount:0,totalPrice:0,paymentMethod:ba.UNDEFINED}]:r.value=N,s.value=parseInt(localStorage.getItem("activeTicketIndex")||"0")}}}),KV=Vt(()=>{sw().init(),qV().init(),WV().init()});class zV{constructor(){St(this,"inputBuffer","");St(this,"endDelimiter","Enter");St(this,"lastInputTime",0);St(this,"scanThreshold",50);St(this,"lastScannedBarcode",ct(null));this.startListening()}startListening(){window.addEventListener("keydown",e=>{const n=Date.now(),r=n-this.lastInputTime;this.lastInputTime=n,r>this.scanThreshold&&(this.inputBuffer=""),e.key===this.endDelimiter?(this.processScannedInput(),this.inputBuffer=""):this.inputBuffer+=e.key})}processScannedInput(){this.inputBuffer.length>0&&(this.lastScannedBarcode.value=this.inputBuffer)}}const GV=Vt(()=>({provide:{scannerDevice:In(new zV)}})),QV=[$R,qR,KR,dP,pP,gP,mP,yP,wP,vP,IP,BV,HV,KV,GV],JV=Cr({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s],enumerable:!0});return zr(mo,On(r)),()=>Ut(t.vnode,{ref:t.vnodeRef})}}),YV=Cr({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Ue(),i=ct(),o=It(mo,null);let a;r({pageRef:i});const l=It(ay,null);let u;const h=s.deferHydration();if(s.isHydrating){const p=s.hooks.hookOnce("app:error",h);en().beforeEach(p)}t.pageKey&&Gr(()=>t.pageKey,(p,m)=>{p!==m&&s.callHook("page:loading:start")});let d=!1;return()=>Ut(My,{name:t.name,route:t.route,...e},{default:p=>{const m=ZV(o,p.route,p.Component),A=o&&o.matched.length===p.route.matched.length;if(!p.Component){if(u&&!A)return u;h();return}if(u&&l&&!l.isCurrent(p.route))return u;if(m&&o&&(!l||l!=null&&l.isCurrent(o)))return A?u:null;const C=Ru(p,t.pageKey);!s.isHydrating&&!ex(o,p.route,p.Component)&&a===C&&(s.callHook("page:loading:end"),d=!0),a=C;const D=!!(t.transition??p.route.meta.pageTransition??hu),x=D&&XV([t.transition,p.route.meta.pageTransition,hu,{onAfterLeave:()=>{s.callHook("page:transition:finish",p.Component)}}].filter(Boolean)),N=t.keepalive??p.route.meta.keepalive??mb;return u=Fy(D&&x,eP(N,Ut(Th,{suspensible:!0,onPending:()=>s.callHook("page:start",p.Component),onResolve:()=>{ts(()=>s.callHook("page:finish",p.Component).then(()=>{if(!d)return s.callHook("page:loading:end");d=!1}).finally(h))}},{default:()=>{const w=Ut(JV,{key:C||void 0,vnode:n.default?Ut(vt,void 0,n.default(p)):p.Component,route:p.route,renderKey:C||void 0,trackRootNodes:D,vnodeRef:i});return N&&(w.type.name=p.Component.type.name||p.Component.type.__name||"RouteProvider"),w}}))).default(),u}})}});function XV(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?Dh(n.onAfterLeave):void 0}));return iy(...e)}function ZV(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&Ru({route:e,Component:n})!==Ru({route:t,Component:n})}function ex(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const tx=Cr({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>Ut(lr[t.name],t.layoutProps,e.slots)}}),nx=Cr({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=Ue(),r=It(mo),s=r===Rh()?QS():r,i=at(()=>{let l=Ve(t.name)??s.meta.layout??"default";return l&&!(l in lr)&&t.fallback&&(l=Ve(t.fallback)),l}),o=ct();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",a);en().beforeEach(l)}return()=>{const l=i.value&&i.value in lr,u=s.meta.layoutTransition??gb;return Fy(l&&u,{default:()=>Ut(Th,{suspensible:!0,onResolve:()=>{ts(a)}},{default:()=>Ut(rx,{layoutProps:F_(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),rx=Cr({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&zr(ay,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in lr)?(s=(r=e.slots).default)==null?void 0:s.call(r):Ut(tx,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),sx=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},ix={};function ox(t,e){const n=YV,r=nx;return Jt(),pn(r,null,{default:hh(()=>[He(n)]),_:1})}const ax=sx(ix,[["render",ox]]),cx={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(d=>({text:d.replace("webpack:/","").replace(".vue",".js").trim(),internal:d.includes("node_modules")&&!d.includes(".cache")||d.includes("internal")||d.includes("new Promise")})).map(d=>`<span class="stack${d.internal?" internal":""}">${d.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,h=s?Na(()=>$t(()=>import("./CJ69zcCP.js"),__vite__mapDeps([13,7,14,15]),import.meta.url)):Na(()=>$t(()=>import("./C9SIqOJg.js"),__vite__mapDeps([16,14,17]),import.meta.url));return(d,p)=>(Jt(),pn(Ve(h),jw(L_({statusCode:Ve(r),statusMessage:Ve(i),description:Ve(o),stack:Ve(a)})),null,16))}},lx={key:0},mm={__name:"nuxt-root",setup(t){const e=()=>null,n=Ue(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);en().beforeEach(l)}const s=!1;zr(mo,Rh()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=vc(),o=!1;l_((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),Mb(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>Is(l)),!1});const a=!1;return(l,u)=>(Jt(),pn(Th,{onResolve:Ve(r)},{default:hh(()=>[Ve(o)?(Jt(),TI("div",lx)):Ve(i)?(Jt(),pn(Ve(cx),{key:1,error:Ve(i)},null,8,["error"])):Ve(a)?(Jt(),pn(Ve(e),{key:2,context:Ve(a)},null,8,["context"])):Ve(s)?(Jt(),pn(jv(Ve(s)),{key:3})):(Jt(),pn(Ve(ax),{key:4}))]),_:1},8,["onResolve"]))}};let _m;{let t;_m=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?cA(mm):aA(mm),s=wb({vueApp:r});async function i(l){await s.callHook("app:error",l),s.payload.error=s.payload.error||Ic(l)}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await Ab(s,QV)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(yb),await s.hooks.callHook("app:mounted",r),await ts()}catch(l){i(l)}return r},t=_m().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{go as $,at as A,hx as B,Tx as C,wx as D,Vb as E,vt as F,Rh as G,dh as H,vx as I,sw as J,rw as K,iw as L,dx as M,It as N,Un as O,ba as P,Ut as Q,zr as R,c_ as S,zi as T,fx as U,In as V,ts as W,mx as X,Ue as Y,Vx as Z,sx as _,x_ as a,qV as a0,Nx as a1,Ox as a2,Ax as a3,Ds as a4,Dx as a5,jv as a6,en as a7,Oh as a8,Kp as a9,Rx as aa,px as ab,bA as ac,Ix as ad,xb as ae,ns as af,Ah as ag,cu as ah,Ih as ai,He as b,TI as c,M_ as d,_x as e,Tu as f,Gr as g,ph as h,bx as i,Vv as j,Ov as k,Tc as l,Cr as m,pn as n,Jt as o,YV as p,Ve as q,ct as r,gx as s,qw as t,WV as u,gc as v,hh as w,Ex as x,yx as y,qe as z};
