import{g as J,i as W,a as x,b as $,A as ue,o as X,r as Y,c as Ie,d as Se}from"../chunks/Auth.CWM5Zy4n.js";import"../chunks/index.DQfRr7yB.js";import{s as fe,b as N,d as R,n as ve,a as T}from"../chunks/scheduler.DF9ji6Nx.js";import{S as Ae,i as we,d as Z,l as B,v as ke,s as D,m as ce,n as V,o as Ue,f as v,g as F,p as le,h as C,q as me,r as E,u as q,w as ae,x as de,y as oe,e as G,H as Ee,t as M,c as H,a as K,G as ye,b as Q,A as z,j as U,k as se}from"../chunks/index.BRiiciFl.js";import{g as re}from"../chunks/entry.C2CCjbPb.js";import{b as Pe}from"../chunks/index.Bt-Xh7oU.js";import{N as pe}from"../chunks/Navigation.CEflH4hG.js";const je={apiKey:"AIzaSyCpZKwjZq81wfNVPC2K6PqbGEL1hnP65HY",authDomain:"quitelean.firebaseapp.com",projectId:"quitelean",storageBucket:"quitelean.appspot.com",messagingSenderId:"434611625957",appId:"1:434611625957:web:fbea8cbf3b58525ac6190c",measurementId:"G-FPX0STF405"};function qe({params:n}){let a;J().length===0?a=W(je):a=x(),$(a);let e=n.uid;if(e!="+layout.svelte")return{information:{title:e}}}const Oe=Object.freeze(Object.defineProperty({__proto__:null,load:qe},Symbol.toStringTag,{value:"Module"})),O="src/routes/people/[uid]/+page.svelte";function ee(n){let a=n[3],e,i,f=ne(n);const c={c:function(){f.c(),e=V()},l:function(o){f.l(o),e=V()},m:function(o,_){f.m(o,_),C(o,e,_),i=!0},p:function(o,_){_&8&&fe(a,a=o[3])?(oe(),q(f,1,1,ve),ae(),f=ne(o),f.c(),E(f,1),f.m(e.parentNode,e)):f.p(o,_)},i:function(o){i||(E(f),i=!0)},o:function(o){q(f),i=!1},d:function(o){o&&v(e),f.d(o)}};return Z("SvelteRegisterBlock",{block:c,id:ee.name,type:"if",source:"(72:0) {#if userAuthState != undefined}",ctx:n}),c}function te(n){let a,e,i,f,c,u,o,_,A,g,h,b,y,w,S;w=new pe({props:{displayname:n[1].displayName},$$inline:!0});const j={c:function(){a=G("div"),e=G("div"),i=G("h3"),f=G("strong"),c=new Ee(!1),u=D(),o=G("p"),_=M(n[8]),A=D(),g=G("p"),h=M("Rating: "),b=M(n[9]),y=D(),ce(w.$$.fragment),this.h()},l:function(l){a=H(l,"DIV",{class:!0});var m=K(a);e=H(m,"DIV",{class:!0});var s=K(e);i=H(s,"H3",{class:!0});var k=K(i);f=H(k,"STRONG",{});var d=K(f);c=ye(d,!1),d.forEach(v),k.forEach(v),u=F(s),o=H(s,"P",{class:!0});var r=K(o);_=Q(r,n[8]),r.forEach(v),A=F(s),g=H(s,"P",{class:!0});var p=K(g);h=Q(p,"Rating: "),b=Q(p,n[9]),p.forEach(v),s.forEach(v),m.forEach(v),y=F(l),le(w.$$.fragment,l),this.h()},h:function(){c.a=null,T(f,O,77,24,2381),z(i,"class","text-center"),T(i,O,76,20,2332),z(o,"class","subtext text-center"),T(o,O,79,20,2460),z(g,"class","text-center text-success"),T(g,O,80,20,2529),z(e,"class","col-md"),T(e,O,75,16,2291),z(a,"class","container p-5 w-75"),T(a,O,74,12,2242)},m:function(l,m){C(l,a,m),U(a,e),U(e,i),U(i,f),c.m(n[7],f),U(e,u),U(e,o),U(o,_),U(e,A),U(e,g),U(g,h),U(g,b),C(l,y,m),me(w,l,m),S=!0},p:function(l,m){(!S||m&128)&&c.p(l[7]),(!S||m&256)&&se(_,l[8]),(!S||m&512)&&se(b,l[9]);const s={};m&2&&(s.displayname=l[1].displayName),w.$set(s)},i:function(l){S||(E(w.$$.fragment,l),S=!0)},o:function(l){q(w.$$.fragment,l),S=!1},d:function(l){l&&(v(a),v(y)),de(w,l)}};return Z("SvelteRegisterBlock",{block:j,id:te.name,type:"if",source:"(74:8) {#if userAuthState == true}",ctx:n}),j}function ne(n){let a,e,i=n[3]==!0&&te(n);const f={c:function(){i&&i.c(),a=V()},l:function(u){i&&i.l(u),a=V()},m:function(u,o){i&&i.m(u,o),C(u,a,o),e=!0},p:function(u,o){u[3]==!0?i?(i.p(u,o),o&8&&E(i,1)):(i=te(u),i.c(),E(i,1),i.m(a.parentNode,a)):i&&(oe(),q(i,1,1,()=>{i=null}),ae())},i:function(u){e||(E(i),e=!0)},o:function(u){q(i),e=!1},d:function(u){u&&v(a),i&&i.d(u)}};return Z("SvelteRegisterBlock",{block:f,id:ne.name,type:"key",source:"(73:4) {#key userAuthState}",ctx:n}),f}function ie(n){let a,e,i,f,c,u,o,_,A,g,h,b;document.title=a=n[10];function y(d){n[13](d)}function w(d){n[14](d)}function S(d){n[15](d)}function j(d){n[16](d)}function I(d){n[17](d)}function l(d){n[18](d)}let m={};n[1]!==void 0&&(m.currentUserInformation=n[1]),n[3]!==void 0&&(m.userAuthState=n[3]),n[4]!==void 0&&(m.signUp=n[4]),n[5]!==void 0&&(m.signIn=n[5]),n[6]!==void 0&&(m.authErrorState=n[6]),n[2]!==void 0&&(m.competitiveUserInformation=n[2]),i=new ue({props:m,$$inline:!0}),n[12](i),N.push(()=>B(i,"currentUserInformation",y)),N.push(()=>B(i,"userAuthState",w)),N.push(()=>B(i,"signUp",S)),N.push(()=>B(i,"signIn",j)),N.push(()=>B(i,"authErrorState",I)),N.push(()=>B(i,"competitiveUserInformation",l));let s=n[3]!=null&&ee(n);const k={c:function(){e=D(),ce(i.$$.fragment),g=D(),s&&s.c(),h=V()},l:function(r){Ue("svelte-f8f31j",document.head).forEach(v),e=F(r),le(i.$$.fragment,r),g=F(r),s&&s.l(r),h=V()},m:function(r,p){C(r,e,p),me(i,r,p),C(r,g,p),s&&s.m(r,p),C(r,h,p),b=!0},p:function(r,[p]){(!b||p&1024)&&a!==(a=r[10])&&(document.title=a);const P={};!f&&p&2&&(f=!0,P.currentUserInformation=r[1],R(()=>f=!1)),!c&&p&8&&(c=!0,P.userAuthState=r[3],R(()=>c=!1)),!u&&p&16&&(u=!0,P.signUp=r[4],R(()=>u=!1)),!o&&p&32&&(o=!0,P.signIn=r[5],R(()=>o=!1)),!_&&p&64&&(_=!0,P.authErrorState=r[6],R(()=>_=!1)),!A&&p&4&&(A=!0,P.competitiveUserInformation=r[2],R(()=>A=!1)),i.$set(P),r[3]!=null?s?(s.p(r,p),p&8&&E(s,1)):(s=ee(r),s.c(),E(s,1),s.m(h.parentNode,h)):s&&(oe(),q(s,1,1,()=>{s=null}),ae())},i:function(r){b||(E(i.$$.fragment,r),E(s),b=!0)},o:function(r){q(i.$$.fragment,r),q(s),b=!1},d:function(r){r&&(v(e),v(g),v(h)),n[12](null),de(i,r),s&&s.d(r)}};return Z("SvelteRegisterBlock",{block:k,id:ie.name,type:"component",source:"",ctx:n}),k}function Ne(n,a,e){let{$$slots:i={},$$scope:f}=a;ke("Page",i,[]);let c,u="QuiteLean",o,_,A,g,h,b,y;const w={apiKey:"AIzaSyCpZKwjZq81wfNVPC2K6PqbGEL1hnP65HY",authDomain:"quitelean.firebaseapp.com",projectId:"quitelean",storageBucket:"quitelean.appspot.com",messagingSenderId:"434611625957",appId:"1:434611625957:web:fbea8cbf3b58525ac6190c",measurementId:"G-FPX0STF405"};let S;J().length===0?S=W(w):S=x();const j=$(S);let{data:I}=a,l=I.information.title,m="",s="",k=0;X(Y(j,`/usernames/${l}`),t=>{t.exists()?X(Y(j,`/users/${t.val().uid}`),L=>{e(7,m=L.val().username),e(8,s=L.val().institution),s==null&&e(8,s="No institution"),e(9,k=L.val().elo)}):re("/")}),n.$$.on_mount.push(function(){I===void 0&&!("data"in a||n.$$.bound[n.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const d=["data"];Object.keys(a).forEach(t=>{!~d.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<Page> was created with unknown prop '${t}'`)});function r(t){N[t?"unshift":"push"](()=>{c=t,e(0,c)})}function p(t){o=t,e(1,o)}function P(t){A=t,e(3,A)}function _e(t){g=t,e(4,g)}function ge(t){h=t,e(5,h)}function he(t){b=t,e(6,b)}function be(t){_=t,e(2,_)}return n.$$set=t=>{"data"in t&&e(11,I=t.data)},n.$capture_state=()=>({initializeApp:W,getApp:x,getApps:J,getDatabase:$,ref:Y,get:Ie,child:Se,onValue:X,goto:re,browser:Pe,Auth:ue,Navigation:pe,webAppAuthComponent:c,webAppTitleState:u,currentUserInformation:o,competitiveUserInformation:_,userAuthState:A,signUp:g,signIn:h,authErrorState:b,currEditor:y,firebaseConfig:w,firebaseApp:S,database:j,data:I,pid:l,display:m,institution:s,rating:k}),n.$inject_state=t=>{"webAppAuthComponent"in t&&e(0,c=t.webAppAuthComponent),"webAppTitleState"in t&&e(10,u=t.webAppTitleState),"currentUserInformation"in t&&e(1,o=t.currentUserInformation),"competitiveUserInformation"in t&&e(2,_=t.competitiveUserInformation),"userAuthState"in t&&e(3,A=t.userAuthState),"signUp"in t&&e(4,g=t.signUp),"signIn"in t&&e(5,h=t.signIn),"authErrorState"in t&&e(6,b=t.authErrorState),"currEditor"in t&&(y=t.currEditor),"firebaseApp"in t&&(S=t.firebaseApp),"data"in t&&e(11,I=t.data),"pid"in t&&(l=t.pid),"display"in t&&e(7,m=t.display),"institution"in t&&e(8,s=t.institution),"rating"in t&&e(9,k=t.rating)},a&&"$$inject"in a&&n.$inject_state(a.$$inject),[c,o,_,A,g,h,b,m,s,k,u,I,r,p,P,_e,ge,he,be]}class Ve extends Ae{constructor(a){super(a),we(this,a,Ne,ie,fe,{data:11}),Z("SvelteRegisterComponent",{component:this,tagName:"Page",options:a,id:ie.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(a){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Ve as component,Oe as universal};
