import{s as Ht,c as g}from"../chunks/scheduler.aa675373.js";import{S as Pt,i as Vt,r as xe,s as k,g as v,m as dt,u as et,c as w,h as p,j as b,f,n as jt,y as qt,k as e,l as Q,v as tt,a as j,x as h,o as Ft,d as ue,t as ve,w as st,e as Se,p as Lt,b as Ct,A as ze}from"../chunks/index.f640fd19.js";import{e as J}from"../chunks/each.e59479a4.js";import{M as bt}from"../chunks/MediaQuery.e675f779.js";import{H as Dt}from"../chunks/headerMobile.e45fe6d0.js";function yt(i,t,u){const l=i.slice();return l[2]=t[u],l}function $t(i,t,u){const l=i.slice();return l[2]=t[u],l}function At(i,t,u){const l=i.slice();return l[2]=t[u],l}function kt(i,t,u){const l=i.slice();return l[2]=t[u],l}function wt(i){let t,u;return t=new Dt({}),{c(){xe(t.$$.fragment)},l(l){et(t.$$.fragment,l)},m(l,s){tt(t,l,s),u=!0},i(l){u||(ue(t.$$.fragment,l),u=!0)},o(l){ve(t.$$.fragment,l),u=!1},d(l){st(t,l)}}}function Bt(i){let t,u,l=i[1]&&wt();return{c(){l&&l.c(),t=Se()},l(s){l&&l.l(s),t=Se()},m(s,c){l&&l.m(s,c),j(s,t,c),u=!0},p(s,c){s[1]?l?c&2&&ue(l,1):(l=wt(),l.c(),ue(l,1),l.m(t.parentNode,t)):l&&(Lt(),ve(l,1,1,()=>{l=null}),Ct())},i(s){u||(ue(l),u=!0)},o(s){ve(l),u=!1},d(s){s&&f(t),l&&l.d(s)}}}function Nt(i){let t,u,l,s=J(i[0].project.images),c=[];for(let o=0;o<s.length;o+=1)c[o]=Et($t(i,s,o));let d=J(i[0].project.plans),_=[];for(let o=0;o<d.length;o+=1)_[o]=It(yt(i,d,o));return{c(){t=v("span");for(let o=0;o<c.length;o+=1)c[o].c();u=k();for(let o=0;o<_.length;o+=1)_[o].c();this.h()},l(o){t=p(o,"SPAN",{class:!0,id:!0});var m=b(t);for(let r=0;r<c.length;r+=1)c[r].l(m);u=w(m);for(let r=0;r<_.length;r+=1)_[r].l(m);m.forEach(f),this.h()},h(){e(t,"class",l=i[0].project.colour+" "+i[0].project.slug+" svelte-1y3face"),e(t,"id","display")},m(o,m){j(o,t,m);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(t,null);h(t,u);for(let r=0;r<_.length;r+=1)_[r]&&_[r].m(t,null)},p(o,m){if(m&1){s=J(o[0].project.images);let r;for(r=0;r<s.length;r+=1){const $=$t(o,s,r);c[r]?c[r].p($,m):(c[r]=Et($),c[r].c(),c[r].m(t,u))}for(;r<c.length;r+=1)c[r].d(1);c.length=s.length}if(m&1){d=J(o[0].project.plans);let r;for(r=0;r<d.length;r+=1){const $=yt(o,d,r);_[r]?_[r].p($,m):(_[r]=It($),_[r].c(),_[r].m(t,null))}for(;r<_.length;r+=1)_[r].d(1);_.length=d.length}m&1&&l!==(l=o[0].project.colour+" "+o[0].project.slug+" svelte-1y3face")&&e(t,"class",l)},d(o){o&&f(t),ze(c,o),ze(_,o)}}}function Ot(i){let t,u,l,s=J(i[0].project.images),c=[];for(let o=0;o<s.length;o+=1)c[o]=Mt(kt(i,s,o));let d=J(i[0].project.plans),_=[];for(let o=0;o<d.length;o+=1)_[o]=Gt(At(i,d,o));return{c(){t=v("a");for(let o=0;o<c.length;o+=1)c[o].c();u=k();for(let o=0;o<_.length;o+=1)_[o].c();this.h()},l(o){t=p(o,"A",{href:!0,class:!0,"data-sveltekit-noscroll":!0,id:!0});var m=b(t);for(let r=0;r<c.length;r+=1)c[r].l(m);u=w(m);for(let r=0;r<_.length;r+=1)_[r].l(m);m.forEach(f),this.h()},h(){e(t,"href","/"),e(t,"class",l=i[0].project.colour+" "+i[0].project.slug+" svelte-1y3face"),e(t,"data-sveltekit-noscroll",""),e(t,"id","display")},m(o,m){j(o,t,m);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(t,null);h(t,u);for(let r=0;r<_.length;r+=1)_[r]&&_[r].m(t,null)},p(o,m){if(m&1){s=J(o[0].project.images);let r;for(r=0;r<s.length;r+=1){const $=kt(o,s,r);c[r]?c[r].p($,m):(c[r]=Mt($),c[r].c(),c[r].m(t,u))}for(;r<c.length;r+=1)c[r].d(1);c.length=s.length}if(m&1){d=J(o[0].project.plans);let r;for(r=0;r<d.length;r+=1){const $=At(o,d,r);_[r]?_[r].p($,m):(_[r]=Gt($),_[r].c(),_[r].m(t,null))}for(;r<_.length;r+=1)_[r].d(1);_.length=d.length}m&1&&l!==(l=o[0].project.colour+" "+o[0].project.slug+" svelte-1y3face")&&e(t,"class",l)},d(o){o&&f(t),ze(c,o),ze(_,o)}}}function Et(i){let t,u,l;return{c(){t=v("img"),this.h()},l(s){t=p(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){g(t.src,u="../images/"+i[0].project.slug+"/"+i[2]+"_800.webp")||e(t,"src",u),e(t,"alt",l=i[0].project.title+" project"),e(t,"class","svelte-1y3face")},m(s,c){j(s,t,c)},p(s,c){c&1&&!g(t.src,u="../images/"+s[0].project.slug+"/"+s[2]+"_800.webp")&&e(t,"src",u),c&1&&l!==(l=s[0].project.title+" project")&&e(t,"alt",l)},d(s){s&&f(t)}}}function It(i){let t,u,l;return{c(){t=v("img"),this.h()},l(s){t=p(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){e(t,"class","plan svelte-1y3face"),g(t.src,u="../images/"+i[0].project.slug+"/Plan_"+i[2]+"_800.svg")||e(t,"src",u),e(t,"alt",l=i[0].project.title)},m(s,c){j(s,t,c)},p(s,c){c&1&&!g(t.src,u="../images/"+s[0].project.slug+"/Plan_"+s[2]+"_800.svg")&&e(t,"src",u),c&1&&l!==(l=s[0].project.title)&&e(t,"alt",l)},d(s){s&&f(t)}}}function Mt(i){let t,u,l;return{c(){t=v("img"),this.h()},l(s){t=p(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){g(t.src,u="../images/"+i[0].project.slug+"/"+i[2]+"_800.webp")||e(t,"src",u),e(t,"alt",l=i[0].project.title+" project"),e(t,"class","svelte-1y3face")},m(s,c){j(s,t,c)},p(s,c){c&1&&!g(t.src,u="../images/"+s[0].project.slug+"/"+s[2]+"_800.webp")&&e(t,"src",u),c&1&&l!==(l=s[0].project.title+" project")&&e(t,"alt",l)},d(s){s&&f(t)}}}function Gt(i){let t,u,l;return{c(){t=v("img"),this.h()},l(s){t=p(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){e(t,"class","plan svelte-1y3face"),g(t.src,u="../images/"+i[0].project.slug+"/Plan_"+i[2]+"_800.svg")||e(t,"src",u),e(t,"alt",l=i[0].project.title)},m(s,c){j(s,t,c)},p(s,c){c&1&&!g(t.src,u="../images/"+s[0].project.slug+"/Plan_"+s[2]+"_800.svg")&&e(t,"src",u),c&1&&l!==(l=s[0].project.title)&&e(t,"alt",l)},d(s){s&&f(t)}}}function Kt(i){let t;function u(c,d){return c[1]?Ot:Nt}let l=u(i),s=l(i);return{c(){s.c(),t=Se()},l(c){s.l(c),t=Se()},m(c,d){s.m(c,d),j(c,t,d)},p(c,d){l===(l=u(c))&&s?s.p(c,d):(s.d(1),s=l(c),s&&(s.c(),s.m(t.parentNode,t)))},d(c){c&&f(t),s.d(c)}}}function Rt(i){let t,u,l,s,c,d,_,o,m,r,$,T,pe,_e,N,U,H,he,Qe,W,P,ge,me,O,X,V,de,Je,Y,q,je,be,K,Z,E,ye,Ue,x,F,$e,Ae,R,ee,I,ke,We,te,L,we,Ee,S,se,M,Ie,Xe,re,C,Me,Ge,z,le,G,Te,Ye,ae,D,He,Pe,B,ie,fe=i[0].project.title+"",Ve,Ze,ce,qe=i[0].project.content+"",Fe,Le,A,rt="",y;return t=new bt({props:{query:"(max-width: 800px)",$$slots:{default:[Bt,({matches:a})=>({1:a}),({matches:a})=>a?2:0]},$$scope:{ctx:i}}}),s=new bt({props:{query:"(min-width: 800px)",$$slots:{default:[Kt,({matches:a})=>({1:a}),({matches:a})=>a?2:0]},$$scope:{ctx:i}}}),{c(){xe(t.$$.fragment),u=k(),l=v("article"),xe(s.$$.fragment),c=k(),d=v("div"),_=v("a"),o=v("img"),r=k(),$=v("a"),T=v("img"),_e=k(),N=v("div"),U=v("a"),H=v("img"),Qe=k(),W=v("a"),P=v("img"),me=k(),O=v("div"),X=v("a"),V=v("img"),Je=k(),Y=v("a"),q=v("img"),be=k(),K=v("div"),Z=v("a"),E=v("img"),Ue=k(),x=v("a"),F=v("img"),Ae=k(),R=v("div"),ee=v("a"),I=v("img"),We=k(),te=v("a"),L=v("img"),Ee=k(),S=v("div"),se=v("a"),M=v("img"),Xe=k(),re=v("a"),C=v("img"),Ge=k(),z=v("div"),le=v("a"),G=v("img"),Ye=k(),ae=v("a"),D=v("img"),Pe=k(),B=v("caption"),ie=v("h2"),Ve=dt(fe),Ze=dt(`  -  
    `),ce=v("p"),Le=k(),A=v("a"),A.innerHTML=rt,this.h()},l(a){et(t.$$.fragment,a),u=w(a),l=p(a,"ARTICLE",{class:!0});var n=b(l);et(s.$$.fragment,n),n.forEach(f),c=w(a),d=p(a,"DIV",{class:!0});var oe=b(d);_=p(oe,"A",{href:!0,"data-sveltekit-scroll":!0,class:!0});var ne=b(_);o=p(ne,"IMG",{id:!0,class:!0,src:!0,alt:!0}),ne.forEach(f),r=w(oe),$=p(oe,"A",{href:!0,"data-sveltekit-scroll":!0,class:!0});var lt=b($);T=p(lt,"IMG",{id:!0,class:!0,src:!0,alt:!0}),lt.forEach(f),oe.forEach(f),_e=w(a),N=p(a,"DIV",{class:!0});var Ce=b(N);U=p(Ce,"A",{href:!0,class:!0});var at=b(U);H=p(at,"IMG",{id:!0,class:!0,src:!0,alt:!0}),at.forEach(f),Qe=w(Ce),W=p(Ce,"A",{href:!0,class:!0});var ct=b(W);P=p(ct,"IMG",{id:!0,class:!0,src:!0,alt:!0}),ct.forEach(f),Ce.forEach(f),me=w(a),O=p(a,"DIV",{class:!0});var De=b(O);X=p(De,"A",{href:!0,class:!0});var ot=b(X);V=p(ot,"IMG",{id:!0,class:!0,src:!0,alt:!0}),ot.forEach(f),Je=w(De),Y=p(De,"A",{href:!0,class:!0});var it=b(Y);q=p(it,"IMG",{id:!0,class:!0,src:!0,alt:!0}),it.forEach(f),De.forEach(f),be=w(a),K=p(a,"DIV",{class:!0});var Be=b(K);Z=p(Be,"A",{href:!0,class:!0});var ut=b(Z);E=p(ut,"IMG",{href:!0,id:!0,class:!0,src:!0,alt:!0}),ut.forEach(f),Ue=w(Be),x=p(Be,"A",{href:!0,class:!0});var ft=b(x);F=p(ft,"IMG",{id:!0,class:!0,src:!0,alt:!0}),ft.forEach(f),Be.forEach(f),Ae=w(a),R=p(a,"DIV",{class:!0});var Ne=b(R);ee=p(Ne,"A",{href:!0,class:!0});var nt=b(ee);I=p(nt,"IMG",{href:!0,id:!0,class:!0,src:!0,alt:!0}),nt.forEach(f),We=w(Ne),te=p(Ne,"A",{href:!0,class:!0});var vt=b(te);L=p(vt,"IMG",{id:!0,class:!0,src:!0,alt:!0}),vt.forEach(f),Ne.forEach(f),Ee=w(a),S=p(a,"DIV",{class:!0});var Oe=b(S);se=p(Oe,"A",{href:!0,class:!0});var pt=b(se);M=p(pt,"IMG",{href:!0,id:!0,class:!0,src:!0,alt:!0}),pt.forEach(f),Xe=w(Oe),re=p(Oe,"A",{href:!0,class:!0});var _t=b(re);C=p(_t,"IMG",{id:!0,class:!0,src:!0,alt:!0}),_t.forEach(f),Oe.forEach(f),Ge=w(a),z=p(a,"DIV",{class:!0});var Ke=b(z);le=p(Ke,"A",{href:!0,class:!0});var ht=b(le);G=p(ht,"IMG",{href:!0,id:!0,class:!0,src:!0,alt:!0}),ht.forEach(f),Ye=w(Ke),ae=p(Ke,"A",{href:!0,class:!0});var gt=b(ae);D=p(gt,"IMG",{id:!0,class:!0,src:!0,alt:!0}),gt.forEach(f),Ke.forEach(f),Pe=w(a),B=p(a,"CAPTION",{class:!0});var Re=b(B);ie=p(Re,"H2",{class:!0});var mt=b(ie);Ve=jt(mt,fe),mt.forEach(f),Ze=jt(Re,`  -  
    `),ce=p(Re,"P",{class:!0});var Tt=b(ce);Tt.forEach(f),Re.forEach(f),Le=w(a),A=p(a,"A",{"data-sveltekit-noscroll":!0,class:!0,href:!0,style:!0,["data-svelte-h"]:!0}),qt(A)!=="svelte-1psemtf"&&(A.innerHTML=rt),this.h()},h(){e(l,"class","svelte-1y3face"),e(o,"id","prev"),e(o,"class","arrow svelte-1y3face"),g(o.src,m="/prev/"+i[0].project.colour+".svg")||e(o,"src",m),e(o,"alt","prev button"),e(_,"href","/projects/TokyoTina"),e(_,"data-sveltekit-scroll",""),e(_,"class","svelte-1y3face"),e(T,"id","next"),e(T,"class","arrow svelte-1y3face"),g(T.src,pe="/next/"+i[0].project.colour+".svg")||e(T,"src",pe),e(T,"alt","prev button"),e($,"href","/projects/APavilion"),e($,"data-sveltekit-scroll",""),e($,"class","svelte-1y3face"),e(d,"class","buttons ABHouse svelte-1y3face"),e(H,"id","prev"),e(H,"class","arrow svelte-1y3face"),g(H.src,he="/prev/"+i[0].project.colour+".svg")||e(H,"src",he),e(H,"alt","prev button"),e(U,"href","/projects/ABHouse"),e(U,"class","svelte-1y3face"),e(P,"id","next"),e(P,"class","arrow svelte-1y3face"),g(P.src,ge="/next/"+i[0].project.colour+".svg")||e(P,"src",ge),e(P,"alt","prev button"),e(W,"href","/projects/FourVisitsTo52Posts"),e(W,"class","svelte-1y3face"),e(N,"class","buttons APavilion svelte-1y3face"),e(V,"id","prev"),e(V,"class","arrow svelte-1y3face"),g(V.src,de="/prev/"+i[0].project.colour+".svg")||e(V,"src",de),e(V,"alt","prev button"),e(X,"href","/projects/APavilion"),e(X,"class","svelte-1y3face"),e(q,"id","next"),e(q,"class","arrow svelte-1y3face"),g(q.src,je="/next/"+i[0].project.colour+".svg")||e(q,"src",je),e(q,"alt","prev button"),e(Y,"href","/projects/ARenovationForThree"),e(Y,"class","svelte-1y3face"),e(O,"class","buttons FourVisitsTo52Posts svelte-1y3face"),e(E,"href",""),e(E,"id","prev"),e(E,"class","arrow svelte-1y3face"),g(E.src,ye="/prev/"+i[0].project.colour+".svg")||e(E,"src",ye),e(E,"alt","prev button"),e(Z,"href","/projects/FourVisitsTo52Posts"),e(Z,"class","svelte-1y3face"),e(F,"id","next"),e(F,"class","arrow svelte-1y3face"),g(F.src,$e="/next/"+i[0].project.colour+".svg")||e(F,"src",$e),e(F,"alt","prev button"),e(x,"href","/projects/ACertainKindofLife"),e(x,"class","svelte-1y3face"),e(K,"class","buttons ARenovationForThree svelte-1y3face"),e(I,"href",""),e(I,"id","prev"),e(I,"class","arrow svelte-1y3face"),g(I.src,ke="/prev/"+i[0].project.colour+".svg")||e(I,"src",ke),e(I,"alt","prev button"),e(ee,"href","/projects/ABHouse"),e(ee,"class","svelte-1y3face"),e(L,"id","next"),e(L,"class","arrow svelte-1y3face"),g(L.src,we="/next/"+i[0].project.colour+".svg")||e(L,"src",we),e(L,"alt","prev button"),e(te,"href","/projects/AHouseForOne"),e(te,"class","svelte-1y3face"),e(R,"class","buttons ACertainKindofLife svelte-1y3face"),e(M,"href",""),e(M,"id","prev"),e(M,"class","arrow svelte-1y3face"),g(M.src,Ie="/prev/"+i[0].project.colour+".svg")||e(M,"src",Ie),e(M,"alt","prev button"),e(se,"href","/projects/ACertainKindofLife"),e(se,"class","svelte-1y3face"),e(C,"id","next"),e(C,"class","arrow svelte-1y3face"),g(C.src,Me="/next/"+i[0].project.colour+".svg")||e(C,"src",Me),e(C,"alt","prev button"),e(re,"href","/projects/TokyoTina"),e(re,"class","svelte-1y3face"),e(S,"class","buttons AHouseForOne svelte-1y3face"),e(G,"href",""),e(G,"id","prev"),e(G,"class","arrow svelte-1y3face"),g(G.src,Te="/prev/"+i[0].project.colour+".svg")||e(G,"src",Te),e(G,"alt","prev button"),e(le,"href","/projects/AHouseForOne"),e(le,"class","svelte-1y3face"),e(D,"id","next"),e(D,"class","arrow svelte-1y3face"),g(D.src,He="/next/"+i[0].project.colour+".svg")||e(D,"src",He),e(D,"alt","prev button"),e(ae,"href","/projects/ABHouse"),e(ae,"class","svelte-1y3face"),e(z,"class","buttons TokyoTina svelte-1y3face"),e(ie,"class","svelte-1y3face"),e(ce,"class","svelte-1y3face"),e(B,"class",Fe=i[0].project.colour+" sun svelte-1y3face"),e(A,"data-sveltekit-noscroll",""),e(A,"class","white svelte-1y3face"),e(A,"href","/"),Q(A,"background","white"),Q(A,"height","calc(100% - 80px)"),Q(A,"width","100%"),Q(A,"z-index","-5"),Q(A,"opacity","0.8"),Q(A,"transition","all 2s ease 0s"),Q(A,"position","fixed"),Q(A,"top","30px"),Q(A,"left","0")},m(a,n){tt(t,a,n),j(a,u,n),j(a,l,n),tt(s,l,null),j(a,c,n),j(a,d,n),h(d,_),h(_,o),h(d,r),h(d,$),h($,T),j(a,_e,n),j(a,N,n),h(N,U),h(U,H),h(N,Qe),h(N,W),h(W,P),j(a,me,n),j(a,O,n),h(O,X),h(X,V),h(O,Je),h(O,Y),h(Y,q),j(a,be,n),j(a,K,n),h(K,Z),h(Z,E),h(K,Ue),h(K,x),h(x,F),j(a,Ae,n),j(a,R,n),h(R,ee),h(ee,I),h(R,We),h(R,te),h(te,L),j(a,Ee,n),j(a,S,n),h(S,se),h(se,M),h(S,Xe),h(S,re),h(re,C),j(a,Ge,n),j(a,z,n),h(z,le),h(le,G),h(z,Ye),h(z,ae),h(ae,D),j(a,Pe,n),j(a,B,n),h(B,ie),h(ie,Ve),h(B,Ze),h(B,ce),ce.innerHTML=qe,j(a,Le,n),j(a,A,n),y=!0},p(a,[n]){const oe={};n&2050&&(oe.$$scope={dirty:n,ctx:a}),t.$set(oe);const ne={};n&2051&&(ne.$$scope={dirty:n,ctx:a}),s.$set(ne),(!y||n&1&&!g(o.src,m="/prev/"+a[0].project.colour+".svg"))&&e(o,"src",m),(!y||n&1&&!g(T.src,pe="/next/"+a[0].project.colour+".svg"))&&e(T,"src",pe),(!y||n&1&&!g(H.src,he="/prev/"+a[0].project.colour+".svg"))&&e(H,"src",he),(!y||n&1&&!g(P.src,ge="/next/"+a[0].project.colour+".svg"))&&e(P,"src",ge),(!y||n&1&&!g(V.src,de="/prev/"+a[0].project.colour+".svg"))&&e(V,"src",de),(!y||n&1&&!g(q.src,je="/next/"+a[0].project.colour+".svg"))&&e(q,"src",je),(!y||n&1&&!g(E.src,ye="/prev/"+a[0].project.colour+".svg"))&&e(E,"src",ye),(!y||n&1&&!g(F.src,$e="/next/"+a[0].project.colour+".svg"))&&e(F,"src",$e),(!y||n&1&&!g(I.src,ke="/prev/"+a[0].project.colour+".svg"))&&e(I,"src",ke),(!y||n&1&&!g(L.src,we="/next/"+a[0].project.colour+".svg"))&&e(L,"src",we),(!y||n&1&&!g(M.src,Ie="/prev/"+a[0].project.colour+".svg"))&&e(M,"src",Ie),(!y||n&1&&!g(C.src,Me="/next/"+a[0].project.colour+".svg"))&&e(C,"src",Me),(!y||n&1&&!g(G.src,Te="/prev/"+a[0].project.colour+".svg"))&&e(G,"src",Te),(!y||n&1&&!g(D.src,He="/next/"+a[0].project.colour+".svg"))&&e(D,"src",He),(!y||n&1)&&fe!==(fe=a[0].project.title+"")&&Ft(Ve,fe),(!y||n&1)&&qe!==(qe=a[0].project.content+"")&&(ce.innerHTML=qe),(!y||n&1&&Fe!==(Fe=a[0].project.colour+" sun svelte-1y3face"))&&e(B,"class",Fe)},i(a){y||(ue(t.$$.fragment,a),ue(s.$$.fragment,a),y=!0)},o(a){ve(t.$$.fragment,a),ve(s.$$.fragment,a),y=!1},d(a){a&&(f(u),f(l),f(c),f(d),f(_e),f(N),f(me),f(O),f(be),f(K),f(Ae),f(R),f(Ee),f(S),f(Ge),f(z),f(Pe),f(B),f(Le),f(A)),st(t,a),st(s)}}}function St(i,t,u){let{data:l}=t;return i.$$set=s=>{"data"in s&&u(0,l=s.data)},[l]}class Xt extends Pt{constructor(t){super(),Vt(this,t,St,Rt,Ht,{data:0})}}export{Xt as component};