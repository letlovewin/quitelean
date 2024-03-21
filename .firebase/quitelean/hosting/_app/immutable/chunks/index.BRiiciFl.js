var j=Object.defineProperty;var B=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var f=(e,t,n)=>(B(e,typeof t!="symbol"?t+"":t,n),n);import{r as y,n as g,q as A,p as R,w as N,x as q,m as T,y as D,z as G,A as z,B as V,C as F,D as U}from"./scheduler.DF9ji6Nx.js";let v=!1;function W(){v=!0}function J(){v=!1}function K(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function Q(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let o=0;o<t.length;o++){const d=t[o];d.claim_order!==void 0&&r.push(d)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const o=t[r].claim_order,d=(s>0&&t[n[s]].claim_order<=o?s+1:K(1,s,$=>t[n[$]].claim_order,o))-1;i[r]=n[d]+1;const u=d+1;n[u]=r,s=Math.max(u,s)}const a=[],l=[];let c=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(a.push(t[r-1]);c>=r;c--)l.push(t[c]);c--}for(;c>=0;c--)l.push(t[c]);a.reverse(),l.sort((r,o)=>r.claim_order-o.claim_order);for(let r=0,o=0;r<l.length;r++){for(;o<a.length&&l[r].claim_order>=a[o].claim_order;)o++;const d=o<a.length?a[o]:null;e.insertBefore(l[r],d)}}function M(e,t){if(v){for(Q(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function X(e,t,n){e.insertBefore(t,n||null)}function O(e,t,n){v&&!n?M(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function m(e){e.parentNode&&e.parentNode.removeChild(e)}function C(e){return document.createElement(e)}function H(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function w(e){return document.createTextNode(e)}function de(){return w(" ")}function _e(){return w("")}function Y(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function Z(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function he(e){return e.dataset.svelteH}function k(e){return Array.from(e.childNodes)}function L(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function I(e,t,n,i,s=!1){L(e);const a=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const c=e[l];if(t(c)){const r=n(c);return r===void 0?e.splice(l,1):e[l]=r,s||(e.claim_info.last_index=l),c}}for(let l=e.claim_info.last_index-1;l>=0;l--){const c=e[l];if(t(c)){const r=n(c);return r===void 0?e.splice(l,1):e[l]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,c}}return i()})();return a.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,a}function P(e,t,n,i){return I(e,s=>s.nodeName===t,s=>{const a=[];for(let l=0;l<s.attributes.length;l++){const c=s.attributes[l];n[c.name]||a.push(c.name)}a.forEach(l=>s.removeAttribute(l))},()=>i(t))}function me(e,t,n){return P(e,t,n,C)}function $e(e,t,n){return P(e,t,n,H)}function ee(e,t){return I(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(t),!0)}function pe(e){return ee(e," ")}function b(e,t,n){for(let i=n;i<e.length;i+=1){const s=e[i];if(s.nodeType===8&&s.textContent.trim()===t)return i}return-1}function ye(e,t){const n=b(e,"HTML_TAG_START",0),i=b(e,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new x(t);L(e);const s=e.splice(n,i-n+1);m(s[0]),m(s[s.length-1]);const a=s.slice(1,s.length-1);if(a.length===0)return new x(t);for(const l of a)l.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new x(t,a)}function ve(e,t){e.value=t??""}function xe(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function te(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}function ge(e,t){const n=[];let i=0;for(const s of t.childNodes)if(s.nodeType===8){const a=s.textContent.trim();a===`HEAD_${e}_END`?(i-=1,n.push(s)):a===`HEAD_${e}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class ne{constructor(t=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,i=null){this.e||(this.is_svg?this.e=H(n.nodeName):this.e=C(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(i)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)X(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(m)}}class x extends ne{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)O(this.t,this.n[i],n)}}const p=new Set;let h;function we(){h={r:0,c:[],p:h}}function Ee(){h.r||y(h.c),h=h.p}function ie(e,t){e&&e.i&&(p.delete(e),e.i(t))}function Se(e,t,n,i){if(e&&e.o){if(p.has(e))return;p.add(e),h.c.push(()=>{p.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function Ae(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function Ne(e){e&&e.c()}function Te(e,t){e&&e.l(t)}function se(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),N(()=>{const a=e.$$.on_mount.map(z).filter(D);e.$$.on_destroy?e.$$.on_destroy.push(...a):y(a),e.$$.on_mount=[]}),s.forEach(N)}function re(e,t){const n=e.$$;n.fragment!==null&&(V(n.after_update),y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function le(e,t){e.$$.dirty[0]===-1&&(F.push(e),U(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function be(e,t,n,i,s,a,l=null,c=[-1]){const r=q;T(e);const o=e.$$={fragment:null,ctx:[],props:a,update:g,not_equal:s,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:A(),dirty:c,skip_bound:!1,root:t.target||r.$$.root};l&&l(o.root);let d=!1;if(o.ctx=n?n(e,t.props||{},(u,$,...E)=>{const S=E.length?E[0]:$;return o.ctx&&s(o.ctx[u],o.ctx[u]=S)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](S),d&&le(e,u)),$}):[],o.update(),d=!0,y(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){W();const u=k(t.target);o.fragment&&o.fragment.l(u),u.forEach(m)}else o.fragment&&o.fragment.c();t.intro&&ie(e.$$.fragment),se(e,t.target,t.anchor),J(),R()}T(r)}class oe{constructor(){f(this,"$$");f(this,"$$set")}$destroy(){re(this,1),this.$destroy=g}$on(t,n){if(!D(n))return g;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!G(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ae="4.2.12",ce="4";function _(e,t){document.dispatchEvent(te(e,{version:ae,...t},{bubbles:!0}))}function De(e,t){_("SvelteDOMInsert",{target:e,node:t}),M(e,t)}function Me(e,t,n){_("SvelteDOMInsert",{target:e,node:t,anchor:n}),O(e,t,n)}function Oe(e){_("SvelteDOMRemove",{node:e}),m(e)}function Ce(e,t,n,i,s,a,l){const c=i===!0?["capture"]:i?Array.from(Object.keys(i)):[];s&&c.push("preventDefault"),a&&c.push("stopPropagation"),l&&c.push("stopImmediatePropagation"),_("SvelteDOMAddEventListener",{node:e,event:t,handler:n,modifiers:c});const r=Y(e,t,n,i);return()=>{_("SvelteDOMRemoveEventListener",{node:e,event:t,handler:n,modifiers:c}),r()}}function He(e,t,n){Z(e,t,n),n==null?_("SvelteDOMRemoveAttribute",{node:e,attribute:t}):_("SvelteDOMSetAttribute",{node:e,attribute:t,value:n})}function Le(e,t){t=""+t,e.data!==t&&(_("SvelteDOMSetData",{node:e,data:t}),e.data=t)}function Ie(e,t,n){for(const i of Object.keys(t))~n.indexOf(i)||console.warn(`<${e}> received an unexpected slot "${i}".`)}function Pe(e,t){const n="this={...} of <svelte:component> should specify a Svelte component.";try{const i=new e(t);if(!i.$$||!i.$set||!i.$on||!i.$destroy)throw new Error(n);return i}catch(i){const{message:s}=i;throw typeof s=="string"&&s.indexOf("is not a constructor")!==-1?new Error(n):i}}class je extends oe{constructor(n){if(!n||!n.target&&!n.$$inline)throw new Error("'target' is a required option");super();f(this,"$$prop_def");f(this,"$$events_def");f(this,"$$slot_def")}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ce);export{He as A,xe as B,Ce as C,ve as D,H as E,$e as F,ye as G,x as H,Pe as I,je as S,k as a,ee as b,me as c,_ as d,C as e,Oe as f,pe as g,Me as h,be as i,De as j,Le as k,Ae as l,Ne as m,_e as n,ge as o,Te as p,se as q,ie as r,de as s,w as t,Se as u,Ie as v,Ee as w,re as x,we as y,he as z};
