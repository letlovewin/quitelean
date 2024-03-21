import{s as oe,b as H,d as L,n as K,a as N,r as ge,e as ve}from"../chunks/scheduler.DF9ji6Nx.js";import{S as ke,i as ye,d as G,l as M,v as Se,s as j,m as se,n as J,o as Ie,f as h,g as R,p as re,h as g,q as fe,r as Y,u as Q,w as ae,x as ce,y as ue,e as V,c as O,z,a as W,A as I,t as X,b as Z,j as F,D as le,C as $,k as Ce,B as x}from"../chunks/index.BRiiciFl.js";/* empty css                       */import{A as me}from"../chunks/Auth.CWM5Zy4n.js";import{N as _e}from"../chunks/Navigation.CEflH4hG.js";import{b as Ue}from"../chunks/index.Bt-Xh7oU.js";import{g as we}from"../chunks/entry.C2CCjbPb.js";const B="src/routes/account/+page.svelte";function ee(i){let e=i[3],o,f,n=ne(i);const _={c:function(){n.c(),o=J()},l:function(s){n.l(s),o=J()},m:function(s,m){n.m(s,m),g(s,o,m),f=!0},p:function(s,m){m&8&&oe(e,e=s[3])?(ue(),Q(n,1,1,K),ae(),n=ne(s),n.c(),Y(n,1),n.m(o.parentNode,o)):n.p(s,m)},i:function(s){f||(Y(n),f=!0)},o:function(s){Q(n),f=!1},d:function(s){s&&h(o),n.d(s)}};return G("SvelteRegisterBlock",{block:_,id:ee.name,type:"if",source:"(42:0) {#if userAuthState != undefined}",ctx:i}),_}function de(i){let e,o,f=i[2],n,_;e=new _e({props:{displayname:i[1].displayName},$$inline:!0});let l=te(i);const s={c:function(){se(e.$$.fragment),o=j(),l.c(),n=J()},l:function(u){re(e.$$.fragment,u),o=R(u),l.l(u),n=J()},m:function(u,r){fe(e,u,r),g(u,o,r),l.m(u,r),g(u,n,r),_=!0},p:function(u,r){const k={};r&2&&(k.displayname=u[1].displayName),e.$set(k),r&4&&oe(f,f=u[2])?(l.d(1),l=te(u),l.c(),l.m(n.parentNode,n)):l.p(u,r)},i:function(u){_||(Y(e.$$.fragment,u),_=!0)},o:function(u){Q(e.$$.fragment,u),_=!1},d:function(u){u&&(h(o),h(n)),ce(e,u),l.d(u)}};return G("SvelteRegisterBlock",{block:s,id:de.name,type:"else",source:"(46:8) {:else}",ctx:i}),s}function pe(i){let e,o="Hey, you're not supposed to be here!";const f={c:function(){e=V("p"),e.textContent=o,this.h()},l:function(_){e=O(_,"P",{"data-svelte-h":!0}),z(e)!=="svelte-1pjhrpq"&&(e.textContent=o),this.h()},h:function(){N(e,B,44,12,1215)},m:function(_,l){g(_,e,l)},p:K,i:K,o:K,d:function(_){_&&h(e)}};return G("SvelteRegisterBlock",{block:f,id:pe.name,type:"if",source:"(44:8) {#if !userAuthState}",ctx:i}),f}function he(i){let e,o="Settings",f,n,_,l=i[1].uid+"",s,m,u,r,k="@",y,d,C,S,T,P,U,w,A,D="Save changes",q,E;const b={c:function(){e=V("h1"),e.textContent=o,f=j(),n=V("p"),_=X("UID: "),s=X(l),m=j(),u=V("div"),r=V("span"),r.textContent=k,y=j(),d=V("input"),T=j(),P=V("div"),U=V("input"),w=j(),A=V("button"),A.textContent=D,this.h()},l:function(t){e=O(t,"H1",{"data-svelte-h":!0}),z(e)!=="svelte-171lafx"&&(e.textContent=o),f=R(t),n=O(t,"P",{class:!0});var c=W(n);_=Z(c,"UID: "),s=Z(c,l),c.forEach(h),m=R(t),u=O(t,"DIV",{class:!0});var v=W(u);r=O(v,"SPAN",{class:!0,id:!0,"data-svelte-h":!0}),z(r)!=="svelte-yboc7i"&&(r.textContent=k),y=R(v),d=O(v,"INPUT",{type:!0,class:!0,placeholder:!0,"aria-label":!0,"aria-describedby":!0}),v.forEach(h),T=R(t),P=O(t,"DIV",{class:!0});var a=W(P);U=O(a,"INPUT",{type:!0,class:!0,placeholder:!0,"aria-label":!0}),a.forEach(h),w=R(t),A=O(t,"BUTTON",{class:!0,"data-svelte-h":!0}),z(A)!=="svelte-8r1gub"&&(A.textContent=D),this.h()},h:function(){N(e,B,76,28,2852),I(n,"class","text-wrap"),N(n,B,77,28,2898),I(r,"class","input-group-text"),I(r,"id","username-addon"),N(r,B,79,32,3048),I(d,"type","text"),I(d,"class","form-control"),I(d,"placeholder",C=i[1].displayName),I(d,"aria-label",S=i[1].displayName),I(d,"aria-describedby","username-addon"),d.disabled=!0,N(d,B,83,32,3245),I(u,"class","input-group mb-3"),N(u,B,78,28,2985),I(U,"type","text"),I(U,"class","form-control"),I(U,"placeholder","Institution"),I(U,"aria-label","Institution"),N(U,B,93,32,3802),I(P,"class","input-group mb-3"),N(P,B,92,28,3739),I(A,"class","btn btn-primary"),N(A,B,101,28,4194)},m:function(t,c){g(t,e,c),g(t,f,c),g(t,n,c),F(n,_),F(n,s),g(t,m,c),g(t,u,c),F(u,r),F(u,y),F(u,d),g(t,T,c),g(t,P,c),F(P,U),le(U,i[9]),g(t,w,c),g(t,A,c),q||(E=[$(U,"input",i[21]),$(A,"click",i[22],!1,!1,!1,!1)],q=!0)},p:function(t,c){c&2&&l!==(l=t[1].uid+"")&&Ce(s,l),c&2&&C!==(C=t[1].displayName)&&I(d,"placeholder",C),c&2&&S!==(S=t[1].displayName)&&I(d,"aria-label",S),c&512&&U.value!==t[9]&&le(U,t[9])},d:function(t){t&&(h(e),h(f),h(n),h(m),h(u),h(T),h(P),h(w),h(A)),q=!1,ge(E)}};return G("SvelteRegisterBlock",{block:b,id:he.name,type:"else",source:"(76:20) {:else}",ctx:i}),b}function be(i){let e,o="Settings",f,n,_,l,s,m="Your email isn't verified!",u,r,k=`You won't be able to make any changes to your
                            account until you verify your email.`,y,d,C,S,T="contact us",P,U,w,A="Send me a verification email",D,q;const E={c:function(){e=V("h1"),e.textContent=o,f=j(),n=V("img"),l=j(),s=V("h3"),s.textContent=m,u=j(),r=V("p"),r.textContent=k,y=j(),d=V("p"),C=X(`If you don't see an email from us, look in your junk
                            folder, or click the button below. If you mistakenly
                            signed up with a wrong email, `),S=V("a"),S.textContent=T,P=X("."),U=j(),w=V("button"),w.textContent=A,this.h()},l:function(p){e=O(p,"H1",{"data-svelte-h":!0}),z(e)!=="svelte-171lafx"&&(e.textContent=o),f=R(p),n=O(p,"IMG",{src:!0,alt:!0,style:!0}),l=R(p),s=O(p,"H3",{"data-svelte-h":!0}),z(s)!=="svelte-1uyq26x"&&(s.textContent=m),u=R(p),r=O(p,"P",{"data-svelte-h":!0}),z(r)!=="svelte-m0mxr7"&&(r.textContent=k),y=R(p),d=O(p,"P",{});var t=W(d);C=Z(t,`If you don't see an email from us, look in your junk
                            folder, or click the button below. If you mistakenly
                            signed up with a wrong email, `),S=O(t,"A",{href:!0,"data-svelte-h":!0}),z(S)!=="svelte-xcokfz"&&(S.textContent=T),P=Z(t,"."),t.forEach(h),U=R(p),w=O(p,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),z(w)!=="svelte-1hncpxi"&&(w.textContent=A),this.h()},h:function(){N(e,B,50,20,1552),ve(n.src,_="/exclamation-lg.svg")||I(n,"src",_),I(n,"alt","Exclamation point"),x(n,"height","200px"),x(n,"width","200px"),N(n,B,51,24,1594),N(s,B,56,24,1819),N(r,B,57,24,1879),I(S,"href","mailto:quitelean@gmail.com"),N(S,B,64,58,2299),N(d,B,61,24,2075),I(w,"class","btn btn-sm text-primary"),x(w,"background-transparency","100%"),N(w,B,68,24,2466)},m:function(p,t){g(p,e,t),g(p,f,t),g(p,n,t),g(p,l,t),g(p,s,t),g(p,u,t),g(p,r,t),g(p,y,t),g(p,d,t),F(d,C),F(d,S),F(d,P),g(p,U,t),g(p,w,t),D||(q=$(w,"click",i[20],!1,!1,!1,!1),D=!0)},p:K,d:function(p){p&&(h(e),h(f),h(n),h(l),h(s),h(u),h(r),h(y),h(d),h(U),h(w)),D=!1,q()}};return G("SvelteRegisterBlock",{block:E,id:be.name,type:"if",source:"(50:20) {#if !currentUserInformation.emailVerified}",ctx:i}),E}function te(i){let e;function o(l,s){return l[1].emailVerified?he:be}let f=o(i),n=f(i);const _={c:function(){e=V("div"),n.c(),this.h()},l:function(s){e=O(s,"DIV",{class:!0});var m=W(e);n.l(m),m.forEach(h),this.h()},h:function(){I(e,"class","container text-center text-wrap p-5 w-75"),N(e,B,48,16,1413)},m:function(s,m){g(s,e,m),n.m(e,null)},p:function(s,m){f===(f=o(s))&&n?n.p(s,m):(n.d(1),n=f(s),n&&(n.c(),n.m(e,null)))},d:function(s){s&&h(e),n.d()}};return G("SvelteRegisterBlock",{block:_,id:te.name,type:"key",source:"(48:12) {#key competitiveUserInformation}",ctx:i}),_}function ne(i){let e,o,f,n;const _=[pe,de],l=[];function s(u,r){return u[3]?1:0}e=s(i),o=l[e]=_[e](i);const m={c:function(){o.c(),f=J()},l:function(r){o.l(r),f=J()},m:function(r,k){l[e].m(r,k),g(r,f,k),n=!0},p:function(r,k){let y=e;e=s(r),e===y?l[e].p(r,k):(ue(),Q(l[y],1,1,()=>{l[y]=null}),ae(),o=l[e],o?o.p(r,k):(o=l[e]=_[e](r),o.c()),Y(o,1),o.m(f.parentNode,f))},i:function(r){n||(Y(o),n=!0)},o:function(r){Q(o),n=!1},d:function(r){r&&h(f),l[e].d(r)}};return G("SvelteRegisterBlock",{block:m,id:ne.name,type:"key",source:"(43:4) {#key userAuthState}",ctx:i}),m}function ie(i){let e,o,f,n,_,l,s,m,u,r,k,y,d,C;document.title=e=i[10];function S(t){i[12](t)}function T(t){i[13](t)}function P(t){i[14](t)}function U(t){i[15](t)}function w(t){i[16](t)}function A(t){i[17](t)}function D(t){i[18](t)}function q(t){i[19](t)}let E={};i[1]!==void 0&&(E.currentUserInformation=i[1]),i[3]!==void 0&&(E.userAuthState=i[3]),i[4]!==void 0&&(E.signUp=i[4]),i[5]!==void 0&&(E.signIn=i[5]),i[6]!==void 0&&(E.authErrorState=i[6]),i[7]!==void 0&&(E.sendVerificationEmail=i[7]),i[8]!==void 0&&(E.saveChangesOnSettings=i[8]),i[2]!==void 0&&(E.competitiveUserInformation=i[2]),f=new me({props:E,$$inline:!0}),i[11](f),H.push(()=>M(f,"currentUserInformation",S)),H.push(()=>M(f,"userAuthState",T)),H.push(()=>M(f,"signUp",P)),H.push(()=>M(f,"signIn",U)),H.push(()=>M(f,"authErrorState",w)),H.push(()=>M(f,"sendVerificationEmail",A)),H.push(()=>M(f,"saveChangesOnSettings",D)),H.push(()=>M(f,"competitiveUserInformation",q));let b=i[3]!=null&&ee(i);const p={c:function(){o=j(),se(f.$$.fragment),y=j(),b&&b.c(),d=J()},l:function(c){Ie("svelte-f8f31j",document.head).forEach(h),o=R(c),re(f.$$.fragment,c),y=R(c),b&&b.l(c),d=J()},m:function(c,v){g(c,o,v),fe(f,c,v),g(c,y,v),b&&b.m(c,v),g(c,d,v),C=!0},p:function(c,[v]){(!C||v&1024)&&e!==(e=c[10])&&(document.title=e);const a={};!n&&v&2&&(n=!0,a.currentUserInformation=c[1],L(()=>n=!1)),!_&&v&8&&(_=!0,a.userAuthState=c[3],L(()=>_=!1)),!l&&v&16&&(l=!0,a.signUp=c[4],L(()=>l=!1)),!s&&v&32&&(s=!0,a.signIn=c[5],L(()=>s=!1)),!m&&v&64&&(m=!0,a.authErrorState=c[6],L(()=>m=!1)),!u&&v&128&&(u=!0,a.sendVerificationEmail=c[7],L(()=>u=!1)),!r&&v&256&&(r=!0,a.saveChangesOnSettings=c[8],L(()=>r=!1)),!k&&v&4&&(k=!0,a.competitiveUserInformation=c[2],L(()=>k=!1)),f.$set(a),c[3]!=null?b?(b.p(c,v),v&8&&Y(b,1)):(b=ee(c),b.c(),Y(b,1),b.m(d.parentNode,d)):b&&(ue(),Q(b,1,1,()=>{b=null}),ae())},i:function(c){C||(Y(f.$$.fragment,c),Y(b),C=!0)},o:function(c){Q(f.$$.fragment,c),Q(b),C=!1},d:function(c){c&&(h(o),h(y),h(d)),i[11](null),ce(f,c),b&&b.d(c)}};return G("SvelteRegisterBlock",{block:p,id:ie.name,type:"component",source:"",ctx:i}),p}function Ae(i,e,o){let{$$slots:f={},$$scope:n}=e;Se("Page",f,[]);let _,l="QuiteLean",s,m,u,r,k,y,d,C,S;const T=[];Object.keys(e).forEach(a=>{!~T.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Page> was created with unknown prop '${a}'`)});function P(a){H[a?"unshift":"push"](()=>{_=a,o(0,_)})}function U(a){s=a,o(1,s)}function w(a){u=a,o(3,u)}function A(a){r=a,o(4,r)}function D(a){k=a,o(5,k)}function q(a){y=a,o(6,y)}function E(a){d=a,o(7,d)}function b(a){C=a,o(8,C)}function p(a){m=a,o(2,m)}const t=()=>{d()};function c(){S=this.value,o(9,S)}const v=()=>{C(S)};return i.$capture_state=()=>({Auth:me,Navigation:_e,browser:Ue,goto:we,webAppAuthComponent:_,webAppTitleState:l,currentUserInformation:s,competitiveUserInformation:m,userAuthState:u,signUp:r,signIn:k,authErrorState:y,sendVerificationEmail:d,saveChangesOnSettings:C,instField:S}),i.$inject_state=a=>{"webAppAuthComponent"in a&&o(0,_=a.webAppAuthComponent),"webAppTitleState"in a&&o(10,l=a.webAppTitleState),"currentUserInformation"in a&&o(1,s=a.currentUserInformation),"competitiveUserInformation"in a&&o(2,m=a.competitiveUserInformation),"userAuthState"in a&&o(3,u=a.userAuthState),"signUp"in a&&o(4,r=a.signUp),"signIn"in a&&o(5,k=a.signIn),"authErrorState"in a&&o(6,y=a.authErrorState),"sendVerificationEmail"in a&&o(7,d=a.sendVerificationEmail),"saveChangesOnSettings"in a&&o(8,C=a.saveChangesOnSettings),"instField"in a&&o(9,S=a.instField)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),[_,s,m,u,r,k,y,d,C,S,l,P,U,w,A,D,q,E,b,p,t,c,v]}class Re extends ke{constructor(e){super(e),ye(this,e,Ae,ie,oe,{}),G("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:ie.name})}}export{Re as component};