import{s as wt,c as g}from"../chunks/scheduler.1bceac80.js";import{S as Et,i as It,r as Mt,s as E,g as v,m as pt,u as Gt,c as I,h as f,j as d,n as nt,f as u,y as vt,k as e,l as U,v as Tt,a as j,x as _,o as $t,d as Ht,t as Pt,w as Vt,e as ft,A as Oe}from"../chunks/index.b635535b.js";import{e as Y}from"../chunks/each.e59479a4.js";import{M as Lt}from"../chunks/MediaQuery.c76ce9b6.js";function _t(o,t,p){const i=o.slice();return i[2]=t[p],i}function ht(o,t,p){const i=o.slice();return i[2]=t[p],i}function gt(o,t,p){const i=o.slice();return i[2]=t[p],i}function mt(o,t,p){const i=o.slice();return i[2]=t[p],i}function Ft(o){let t,p,i,r=Y(o[0].project.images),l=[];for(let c=0;c<r.length;c+=1)l[c]=dt(ht(o,r,c));let b=Y(o[0].project.plans),h=[];for(let c=0;c<b.length;c+=1)h[c]=jt(_t(o,b,c));return{c(){t=v("span");for(let c=0;c<l.length;c+=1)l[c].c();p=E();for(let c=0;c<h.length;c+=1)h[c].c();this.h()},l(c){t=f(c,"SPAN",{class:!0,id:!0});var m=d(t);for(let s=0;s<l.length;s+=1)l[s].l(m);p=I(m);for(let s=0;s<h.length;s+=1)h[s].l(m);m.forEach(u),this.h()},h(){e(t,"class",i=o[0].project.colour+" "+o[0].project.slug+" svelte-54p83c"),e(t,"id","display")},m(c,m){j(c,t,m);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(t,null);_(t,p);for(let s=0;s<h.length;s+=1)h[s]&&h[s].m(t,null)},p(c,m){if(m&1){r=Y(c[0].project.images);let s;for(s=0;s<r.length;s+=1){const k=ht(c,r,s);l[s]?l[s].p(k,m):(l[s]=dt(k),l[s].c(),l[s].m(t,p))}for(;s<l.length;s+=1)l[s].d(1);l.length=r.length}if(m&1){b=Y(c[0].project.plans);let s;for(s=0;s<b.length;s+=1){const k=_t(c,b,s);h[s]?h[s].p(k,m):(h[s]=jt(k),h[s].c(),h[s].m(t,null))}for(;s<h.length;s+=1)h[s].d(1);h.length=b.length}m&1&&i!==(i=c[0].project.colour+" "+c[0].project.slug+" svelte-54p83c")&&e(t,"class",i)},d(c){c&&u(t),Oe(l,c),Oe(h,c)}}}function Ct(o){let t,p,i,r=Y(o[0].project.images),l=[];for(let c=0;c<r.length;c+=1)l[c]=bt(mt(o,r,c));let b=Y(o[0].project.plans),h=[];for(let c=0;c<b.length;c+=1)h[c]=At(gt(o,b,c));return{c(){t=v("a");for(let c=0;c<l.length;c+=1)l[c].c();p=E();for(let c=0;c<h.length;c+=1)h[c].c();this.h()},l(c){t=f(c,"A",{href:!0,class:!0,"data-sveltekit-noscroll":!0,id:!0});var m=d(t);for(let s=0;s<l.length;s+=1)l[s].l(m);p=I(m);for(let s=0;s<h.length;s+=1)h[s].l(m);m.forEach(u),this.h()},h(){e(t,"href","/"),e(t,"class",i=o[0].project.colour+" "+o[0].project.slug+" svelte-54p83c"),e(t,"data-sveltekit-noscroll",""),e(t,"id","display")},m(c,m){j(c,t,m);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(t,null);_(t,p);for(let s=0;s<h.length;s+=1)h[s]&&h[s].m(t,null)},p(c,m){if(m&1){r=Y(c[0].project.images);let s;for(s=0;s<r.length;s+=1){const k=mt(c,r,s);l[s]?l[s].p(k,m):(l[s]=bt(k),l[s].c(),l[s].m(t,p))}for(;s<l.length;s+=1)l[s].d(1);l.length=r.length}if(m&1){b=Y(c[0].project.plans);let s;for(s=0;s<b.length;s+=1){const k=gt(c,b,s);h[s]?h[s].p(k,m):(h[s]=At(k),h[s].c(),h[s].m(t,null))}for(;s<h.length;s+=1)h[s].d(1);h.length=b.length}m&1&&i!==(i=c[0].project.colour+" "+c[0].project.slug+" svelte-54p83c")&&e(t,"class",i)},d(c){c&&u(t),Oe(l,c),Oe(h,c)}}}function dt(o){let t,p,i;return{c(){t=v("img"),this.h()},l(r){t=f(r,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){g(t.src,p="../images/"+o[0].project.slug+"/"+o[2]+"_800.webp")||e(t,"src",p),e(t,"alt",i=o[0].project.title+" project"),e(t,"class","svelte-54p83c")},m(r,l){j(r,t,l)},p(r,l){l&1&&!g(t.src,p="../images/"+r[0].project.slug+"/"+r[2]+"_800.webp")&&e(t,"src",p),l&1&&i!==(i=r[0].project.title+" project")&&e(t,"alt",i)},d(r){r&&u(t)}}}function jt(o){let t,p,i;return{c(){t=v("img"),this.h()},l(r){t=f(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){e(t,"class","plan svelte-54p83c"),g(t.src,p="../images/"+o[0].project.slug+"/plan_"+o[2]+"_800.svg")||e(t,"src",p),e(t,"alt",i=o[0].project.title)},m(r,l){j(r,t,l)},p(r,l){l&1&&!g(t.src,p="../images/"+r[0].project.slug+"/plan_"+r[2]+"_800.svg")&&e(t,"src",p),l&1&&i!==(i=r[0].project.title)&&e(t,"alt",i)},d(r){r&&u(t)}}}function bt(o){let t,p,i;return{c(){t=v("img"),this.h()},l(r){t=f(r,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){g(t.src,p="../images/"+o[0].project.slug+"/"+o[2]+"_800.webp")||e(t,"src",p),e(t,"alt",i=o[0].project.title+" project"),e(t,"class","svelte-54p83c")},m(r,l){j(r,t,l)},p(r,l){l&1&&!g(t.src,p="../images/"+r[0].project.slug+"/"+r[2]+"_800.webp")&&e(t,"src",p),l&1&&i!==(i=r[0].project.title+" project")&&e(t,"alt",i)},d(r){r&&u(t)}}}function At(o){let t,p,i;return{c(){t=v("img"),this.h()},l(r){t=f(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){e(t,"class","plan svelte-54p83c"),g(t.src,p="../images/"+o[0].project.slug+"/plan_"+o[2]+"_800.svg")||e(t,"src",p),e(t,"alt",i=o[0].project.title)},m(r,l){j(r,t,l)},p(r,l){l&1&&!g(t.src,p="../images/"+r[0].project.slug+"/plan_"+r[2]+"_800.svg")&&e(t,"src",p),l&1&&i!==(i=r[0].project.title)&&e(t,"alt",i)},d(r){r&&u(t)}}}function Dt(o){let t;function p(l,b){return l[1]?Ct:Ft}let i=p(o),r=i(o);return{c(){r.c(),t=ft()},l(l){r.l(l),t=ft()},m(l,b){r.m(l,b),j(l,t,b)},p(l,b){i===(i=p(l))&&r?r.p(l,b):(r.d(1),r=i(l),r&&(r.c(),r.m(t.parentNode,t)))},d(l){l&&u(t),r.d(l)}}}function qt(o){let t,p,i,r,l=o[0].project.title+"",b,h,c,m=o[0].project.content+"",s,k,We="",pe,ne,O,W,H,ve,Se,X,P,fe,_e,S,Z,V,he,Ke,y,L,ge,me,K,x,F,de,Re,ee,C,je,be,R,te,M,Ae,ze,se,D,ke,we,z,re,G,Ee,Qe,le,q,Ie,Me,Q,ce,T,Ge,Je,ae,B,Te,$e,J,oe,$,He,Ue,ie,N,Pe,Ve,w,Xe="",A;return t=new Lt({props:{query:"(min-width: 800px)",$$slots:{default:[Dt,({matches:a})=>({1:a}),({matches:a})=>a?2:0]},$$scope:{ctx:o}}}),{c(){Mt(t.$$.fragment),p=E(),i=v("caption"),r=v("h2"),b=pt(l),h=pt(`  -  
        `),c=v("p"),s=E(),k=v("span"),k.innerHTML=We,ne=E(),O=v("div"),W=v("a"),H=v("img"),Se=E(),X=v("a"),P=v("img"),_e=E(),S=v("div"),Z=v("a"),V=v("img"),Ke=E(),y=v("a"),L=v("img"),me=E(),K=v("div"),x=v("a"),F=v("img"),Re=E(),ee=v("a"),C=v("img"),be=E(),R=v("div"),te=v("a"),M=v("img"),ze=E(),se=v("a"),D=v("img"),we=E(),z=v("div"),re=v("a"),G=v("img"),Qe=E(),le=v("a"),q=v("img"),Me=E(),Q=v("div"),ce=v("a"),T=v("img"),Je=E(),ae=v("a"),B=v("img"),$e=E(),J=v("div"),oe=v("a"),$=v("img"),Ue=E(),ie=v("a"),N=v("img"),Ve=E(),w=v("a"),w.innerHTML=Xe,this.h()},l(a){Gt(t.$$.fragment,a),p=I(a),i=f(a,"CAPTION",{class:!0});var n=d(i);r=f(n,"H2",{class:!0});var ue=d(r);b=nt(ue,l),ue.forEach(u),h=nt(n,`  -  
        `),c=f(n,"P",{class:!0});var kt=d(c);kt.forEach(u),s=I(n),k=f(n,"SPAN",{class:!0,["data-svelte-h"]:!0}),vt(k)!=="svelte-1wkw2h2"&&(k.innerHTML=We),n.forEach(u),ne=I(a),O=f(a,"DIV",{class:!0});var Le=d(O);W=f(Le,"A",{href:!0,"data-sveltekit-scroll":!0,class:!0});var Ye=d(W);H=f(Ye,"IMG",{id:!0,class:!0,src:!0,alt:!0}),Ye.forEach(u),Se=I(Le),X=f(Le,"A",{href:!0,"data-sveltekit-scroll":!0,class:!0});var Ze=d(X);P=f(Ze,"IMG",{id:!0,class:!0,src:!0,alt:!0}),Ze.forEach(u),Le.forEach(u),_e=I(a),S=f(a,"DIV",{class:!0});var Fe=d(S);Z=f(Fe,"A",{href:!0,class:!0});var ye=d(Z);V=f(ye,"IMG",{id:!0,class:!0,src:!0,alt:!0}),ye.forEach(u),Ke=I(Fe),y=f(Fe,"A",{href:!0,class:!0});var xe=d(y);L=f(xe,"IMG",{id:!0,class:!0,src:!0,alt:!0}),xe.forEach(u),Fe.forEach(u),me=I(a),K=f(a,"DIV",{class:!0});var Ce=d(K);x=f(Ce,"A",{href:!0,class:!0});var et=d(x);F=f(et,"IMG",{id:!0,class:!0,src:!0,alt:!0}),et.forEach(u),Re=I(Ce),ee=f(Ce,"A",{href:!0,class:!0});var tt=d(ee);C=f(tt,"IMG",{id:!0,class:!0,src:!0,alt:!0}),tt.forEach(u),Ce.forEach(u),be=I(a),R=f(a,"DIV",{class:!0});var De=d(R);te=f(De,"A",{href:!0,class:!0});var st=d(te);M=f(st,"IMG",{href:!0,id:!0,class:!0,src:!0,alt:!0}),st.forEach(u),ze=I(De),se=f(De,"A",{href:!0,class:!0});var rt=d(se);D=f(rt,"IMG",{id:!0,class:!0,src:!0,alt:!0}),rt.forEach(u),De.forEach(u),we=I(a),z=f(a,"DIV",{class:!0});var qe=d(z);re=f(qe,"A",{href:!0,class:!0});var lt=d(re);G=f(lt,"IMG",{href:!0,id:!0,class:!0,src:!0,alt:!0}),lt.forEach(u),Qe=I(qe),le=f(qe,"A",{href:!0,class:!0});var ct=d(le);q=f(ct,"IMG",{id:!0,class:!0,src:!0,alt:!0}),ct.forEach(u),qe.forEach(u),Me=I(a),Q=f(a,"DIV",{class:!0});var Be=d(Q);ce=f(Be,"A",{href:!0,class:!0});var at=d(ce);T=f(at,"IMG",{href:!0,id:!0,class:!0,src:!0,alt:!0}),at.forEach(u),Je=I(Be),ae=f(Be,"A",{href:!0,class:!0});var ot=d(ae);B=f(ot,"IMG",{id:!0,class:!0,src:!0,alt:!0}),ot.forEach(u),Be.forEach(u),$e=I(a),J=f(a,"DIV",{class:!0});var Ne=d(J);oe=f(Ne,"A",{href:!0,class:!0});var it=d(oe);$=f(it,"IMG",{href:!0,id:!0,class:!0,src:!0,alt:!0}),it.forEach(u),Ue=I(Ne),ie=f(Ne,"A",{href:!0,class:!0});var ut=d(ie);N=f(ut,"IMG",{id:!0,class:!0,src:!0,alt:!0}),ut.forEach(u),Ne.forEach(u),Ve=I(a),w=f(a,"A",{"data-sveltekit-noscroll":!0,class:!0,href:!0,style:!0,["data-svelte-h"]:!0}),vt(w)!=="svelte-1psemtf"&&(w.innerHTML=Xe),this.h()},h(){e(r,"class","svelte-54p83c"),e(c,"class","svelte-54p83c"),e(k,"class","svelte-54p83c"),e(i,"class",pe=o[0].project.colour+" sun svelte-54p83c"),e(H,"id","prev"),e(H,"class","arrow svelte-54p83c"),g(H.src,ve="/prev/"+o[0].project.colour+".svg")||e(H,"src",ve),e(H,"alt","prev button"),e(W,"href","/projects/TokyoTina"),e(W,"data-sveltekit-scroll",""),e(W,"class","svelte-54p83c"),e(P,"id","next"),e(P,"class","arrow svelte-54p83c"),g(P.src,fe="/next/"+o[0].project.colour+".svg")||e(P,"src",fe),e(P,"alt","prev button"),e(X,"href","/projects/APavilion"),e(X,"data-sveltekit-scroll",""),e(X,"class","svelte-54p83c"),e(O,"class","buttons ABHouse svelte-54p83c"),e(V,"id","prev"),e(V,"class","arrow svelte-54p83c"),g(V.src,he="/prev/"+o[0].project.colour+".svg")||e(V,"src",he),e(V,"alt","prev button"),e(Z,"href","/projects/ABHouse"),e(Z,"class","svelte-54p83c"),e(L,"id","next"),e(L,"class","arrow svelte-54p83c"),g(L.src,ge="/next/"+o[0].project.colour+".svg")||e(L,"src",ge),e(L,"alt","prev button"),e(y,"href","/projects/FourVisitsTo52Posts"),e(y,"class","svelte-54p83c"),e(S,"class","buttons APavilion svelte-54p83c"),e(F,"id","prev"),e(F,"class","arrow svelte-54p83c"),g(F.src,de="/prev/"+o[0].project.colour+".svg")||e(F,"src",de),e(F,"alt","prev button"),e(x,"href","/projects/APavilion"),e(x,"class","svelte-54p83c"),e(C,"id","next"),e(C,"class","arrow svelte-54p83c"),g(C.src,je="/next/"+o[0].project.colour+".svg")||e(C,"src",je),e(C,"alt","prev button"),e(ee,"href","/projects/ARenovationForThree"),e(ee,"class","svelte-54p83c"),e(K,"class","buttons FourVisitsTo52Posts svelte-54p83c"),e(M,"href",""),e(M,"id","prev"),e(M,"class","arrow svelte-54p83c"),g(M.src,Ae="/prev/"+o[0].project.colour+".svg")||e(M,"src",Ae),e(M,"alt","prev button"),e(te,"href","/projects/FourVisitsTo52Posts"),e(te,"class","svelte-54p83c"),e(D,"id","next"),e(D,"class","arrow svelte-54p83c"),g(D.src,ke="/next/"+o[0].project.colour+".svg")||e(D,"src",ke),e(D,"alt","prev button"),e(se,"href","/projects/ACertainKindofLife"),e(se,"class","svelte-54p83c"),e(R,"class","buttons ARenovationForThree svelte-54p83c"),e(G,"href",""),e(G,"id","prev"),e(G,"class","arrow svelte-54p83c"),g(G.src,Ee="/prev/"+o[0].project.colour+".svg")||e(G,"src",Ee),e(G,"alt","prev button"),e(re,"href","/projects/ABHouse"),e(re,"class","svelte-54p83c"),e(q,"id","next"),e(q,"class","arrow svelte-54p83c"),g(q.src,Ie="/next/"+o[0].project.colour+".svg")||e(q,"src",Ie),e(q,"alt","prev button"),e(le,"href","/projects/AHouseForOne"),e(le,"class","svelte-54p83c"),e(z,"class","buttons ACertainKindofLife svelte-54p83c"),e(T,"href",""),e(T,"id","prev"),e(T,"class","arrow svelte-54p83c"),g(T.src,Ge="/prev/"+o[0].project.colour+".svg")||e(T,"src",Ge),e(T,"alt","prev button"),e(ce,"href","/projects/ACertainKindofLife"),e(ce,"class","svelte-54p83c"),e(B,"id","next"),e(B,"class","arrow svelte-54p83c"),g(B.src,Te="/next/"+o[0].project.colour+".svg")||e(B,"src",Te),e(B,"alt","prev button"),e(ae,"href","/projects/TokyoTina"),e(ae,"class","svelte-54p83c"),e(Q,"class","buttons AHouseForOne svelte-54p83c"),e($,"href",""),e($,"id","prev"),e($,"class","arrow svelte-54p83c"),g($.src,He="/prev/"+o[0].project.colour+".svg")||e($,"src",He),e($,"alt","prev button"),e(oe,"href","/projects/AHouseForOne"),e(oe,"class","svelte-54p83c"),e(N,"id","next"),e(N,"class","arrow svelte-54p83c"),g(N.src,Pe="/next/"+o[0].project.colour+".svg")||e(N,"src",Pe),e(N,"alt","prev button"),e(ie,"href","/projects/ABHouse"),e(ie,"class","svelte-54p83c"),e(J,"class","buttons TokyoTina svelte-54p83c"),e(w,"data-sveltekit-noscroll",""),e(w,"class","white svelte-54p83c"),e(w,"href","/"),U(w,"background","white"),U(w,"height","calc(100% - 80px)"),U(w,"width","100%"),U(w,"z-index","-5"),U(w,"opacity","0.8"),U(w,"transition","all 2s ease 0s"),U(w,"position","fixed"),U(w,"top","30px"),U(w,"left","0")},m(a,n){Tt(t,a,n),j(a,p,n),j(a,i,n),_(i,r),_(r,b),_(i,h),_(i,c),c.innerHTML=m,_(i,s),_(i,k),j(a,ne,n),j(a,O,n),_(O,W),_(W,H),_(O,Se),_(O,X),_(X,P),j(a,_e,n),j(a,S,n),_(S,Z),_(Z,V),_(S,Ke),_(S,y),_(y,L),j(a,me,n),j(a,K,n),_(K,x),_(x,F),_(K,Re),_(K,ee),_(ee,C),j(a,be,n),j(a,R,n),_(R,te),_(te,M),_(R,ze),_(R,se),_(se,D),j(a,we,n),j(a,z,n),_(z,re),_(re,G),_(z,Qe),_(z,le),_(le,q),j(a,Me,n),j(a,Q,n),_(Q,ce),_(ce,T),_(Q,Je),_(Q,ae),_(ae,B),j(a,$e,n),j(a,J,n),_(J,oe),_(oe,$),_(J,Ue),_(J,ie),_(ie,N),j(a,Ve,n),j(a,w,n),A=!0},p(a,[n]){const ue={};n&2051&&(ue.$$scope={dirty:n,ctx:a}),t.$set(ue),(!A||n&1)&&l!==(l=a[0].project.title+"")&&$t(b,l),(!A||n&1)&&m!==(m=a[0].project.content+"")&&(c.innerHTML=m),(!A||n&1&&pe!==(pe=a[0].project.colour+" sun svelte-54p83c"))&&e(i,"class",pe),(!A||n&1&&!g(H.src,ve="/prev/"+a[0].project.colour+".svg"))&&e(H,"src",ve),(!A||n&1&&!g(P.src,fe="/next/"+a[0].project.colour+".svg"))&&e(P,"src",fe),(!A||n&1&&!g(V.src,he="/prev/"+a[0].project.colour+".svg"))&&e(V,"src",he),(!A||n&1&&!g(L.src,ge="/next/"+a[0].project.colour+".svg"))&&e(L,"src",ge),(!A||n&1&&!g(F.src,de="/prev/"+a[0].project.colour+".svg"))&&e(F,"src",de),(!A||n&1&&!g(C.src,je="/next/"+a[0].project.colour+".svg"))&&e(C,"src",je),(!A||n&1&&!g(M.src,Ae="/prev/"+a[0].project.colour+".svg"))&&e(M,"src",Ae),(!A||n&1&&!g(D.src,ke="/next/"+a[0].project.colour+".svg"))&&e(D,"src",ke),(!A||n&1&&!g(G.src,Ee="/prev/"+a[0].project.colour+".svg"))&&e(G,"src",Ee),(!A||n&1&&!g(q.src,Ie="/next/"+a[0].project.colour+".svg"))&&e(q,"src",Ie),(!A||n&1&&!g(T.src,Ge="/prev/"+a[0].project.colour+".svg"))&&e(T,"src",Ge),(!A||n&1&&!g(B.src,Te="/next/"+a[0].project.colour+".svg"))&&e(B,"src",Te),(!A||n&1&&!g($.src,He="/prev/"+a[0].project.colour+".svg"))&&e($,"src",He),(!A||n&1&&!g(N.src,Pe="/next/"+a[0].project.colour+".svg"))&&e(N,"src",Pe)},i(a){A||(Ht(t.$$.fragment,a),A=!0)},o(a){Pt(t.$$.fragment,a),A=!1},d(a){a&&(u(p),u(i),u(ne),u(O),u(_e),u(S),u(me),u(K),u(be),u(R),u(we),u(z),u(Me),u(Q),u($e),u(J),u(Ve),u(w)),Vt(t,a)}}}function Bt(o,t,p){let{data:i}=t;return o.$$set=r=>{"data"in r&&p(0,i=r.data)},[i]}class Rt extends Et{constructor(t){super(),It(this,t,Bt,qt,wt,{data:0})}}export{Rt as component};
