import{s as Tt,c as g}from"../chunks/scheduler.aa675373.js";import{S as Ht,i as Pt,r as ye,s as w,g as p,m as gt,u as xe,c as E,h as _,j as b,f as n,n as dt,y as Vt,k as e,l as Q,v as et,a as j,x as h,o as qt,d as oe,t as fe,w as tt,e as Re,p as Ft,b as Dt,A as ze}from"../chunks/index.f640fd19.js";import{e as J}from"../chunks/each.e59479a4.js";import{M as mt}from"../chunks/MediaQuery.e675f779.js";import{H as Lt}from"../chunks/headerMobile.e45fe6d0.js";function jt(u,t,i){const l=u.slice();return l[2]=t[i],l}function bt(u,t,i){const l=u.slice();return l[2]=t[i],l}function $t(u,t,i){const l=u.slice();return l[2]=t[i],l}function At(u,t,i){const l=u.slice();return l[2]=t[i],l}function kt(u){let t,i;return t=new Lt({}),{c(){ye(t.$$.fragment)},l(l){xe(t.$$.fragment,l)},m(l,s){et(t,l,s),i=!0},i(l){i||(oe(t.$$.fragment,l),i=!0)},o(l){fe(t.$$.fragment,l),i=!1},d(l){tt(t,l)}}}function Ct(u){let t,i,l=u[1]&&kt();return{c(){l&&l.c(),t=Re()},l(s){l&&l.l(s),t=Re()},m(s,a){l&&l.m(s,a),j(s,t,a),i=!0},p(s,a){s[1]?l?a&2&&oe(l,1):(l=kt(),l.c(),oe(l,1),l.m(t.parentNode,t)):l&&(Ft(),fe(l,1,1,()=>{l=null}),Dt())},i(s){i||(oe(l),i=!0)},o(s){fe(l),i=!1},d(s){s&&n(t),l&&l.d(s)}}}function Bt(u){let t,i,l,s=J(u[0].project.images),a=[];for(let o=0;o<s.length;o+=1)a[o]=wt(bt(u,s,o));let m=J(u[0].project.plans),v=[];for(let o=0;o<m.length;o+=1)v[o]=Et(jt(u,m,o));return{c(){t=p("span");for(let o=0;o<a.length;o+=1)a[o].c();i=w();for(let o=0;o<v.length;o+=1)v[o].c();this.h()},l(o){t=_(o,"SPAN",{class:!0,id:!0});var d=b(t);for(let r=0;r<a.length;r+=1)a[r].l(d);i=E(d);for(let r=0;r<v.length;r+=1)v[r].l(d);d.forEach(n),this.h()},h(){e(t,"class",l=u[0].project.colour+" "+u[0].project.slug+" svelte-r4ledu"),e(t,"id","display")},m(o,d){j(o,t,d);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(t,null);h(t,i);for(let r=0;r<v.length;r+=1)v[r]&&v[r].m(t,null)},p(o,d){if(d&1){s=J(o[0].project.images);let r;for(r=0;r<s.length;r+=1){const $=bt(o,s,r);a[r]?a[r].p($,d):(a[r]=wt($),a[r].c(),a[r].m(t,i))}for(;r<a.length;r+=1)a[r].d(1);a.length=s.length}if(d&1){m=J(o[0].project.plans);let r;for(r=0;r<m.length;r+=1){const $=jt(o,m,r);v[r]?v[r].p($,d):(v[r]=Et($),v[r].c(),v[r].m(t,null))}for(;r<v.length;r+=1)v[r].d(1);v.length=m.length}d&1&&l!==(l=o[0].project.colour+" "+o[0].project.slug+" svelte-r4ledu")&&e(t,"class",l)},d(o){o&&n(t),ze(a,o),ze(v,o)}}}function Nt(u){let t,i,l,s=J(u[0].project.images),a=[];for(let o=0;o<s.length;o+=1)a[o]=It(At(u,s,o));let m=J(u[0].project.plans),v=[];for(let o=0;o<m.length;o+=1)v[o]=Mt($t(u,m,o));return{c(){t=p("a");for(let o=0;o<a.length;o+=1)a[o].c();i=w();for(let o=0;o<v.length;o+=1)v[o].c();this.h()},l(o){t=_(o,"A",{href:!0,class:!0,"data-sveltekit-noscroll":!0,id:!0});var d=b(t);for(let r=0;r<a.length;r+=1)a[r].l(d);i=E(d);for(let r=0;r<v.length;r+=1)v[r].l(d);d.forEach(n),this.h()},h(){e(t,"href","/"),e(t,"class",l=u[0].project.colour+" "+u[0].project.slug+" svelte-r4ledu"),e(t,"data-sveltekit-noscroll",""),e(t,"id","display")},m(o,d){j(o,t,d);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(t,null);h(t,i);for(let r=0;r<v.length;r+=1)v[r]&&v[r].m(t,null)},p(o,d){if(d&1){s=J(o[0].project.images);let r;for(r=0;r<s.length;r+=1){const $=At(o,s,r);a[r]?a[r].p($,d):(a[r]=It($),a[r].c(),a[r].m(t,i))}for(;r<a.length;r+=1)a[r].d(1);a.length=s.length}if(d&1){m=J(o[0].project.plans);let r;for(r=0;r<m.length;r+=1){const $=$t(o,m,r);v[r]?v[r].p($,d):(v[r]=Mt($),v[r].c(),v[r].m(t,null))}for(;r<v.length;r+=1)v[r].d(1);v.length=m.length}d&1&&l!==(l=o[0].project.colour+" "+o[0].project.slug+" svelte-r4ledu")&&e(t,"class",l)},d(o){o&&n(t),ze(a,o),ze(v,o)}}}function wt(u){let t,i,l;return{c(){t=p("img"),this.h()},l(s){t=_(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){g(t.src,i="../images/"+u[0].project.slug+"/"+u[2]+"_800.webp")||e(t,"src",i),e(t,"alt",l=u[0].project.title+" project"),e(t,"class","svelte-r4ledu")},m(s,a){j(s,t,a)},p(s,a){a&1&&!g(t.src,i="../images/"+s[0].project.slug+"/"+s[2]+"_800.webp")&&e(t,"src",i),a&1&&l!==(l=s[0].project.title+" project")&&e(t,"alt",l)},d(s){s&&n(t)}}}function Et(u){let t,i,l;return{c(){t=p("img"),this.h()},l(s){t=_(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){e(t,"class","plan svelte-r4ledu"),g(t.src,i="../images/"+u[0].project.slug+"/Plan_"+u[2]+"_800.svg")||e(t,"src",i),e(t,"alt",l=u[0].project.title)},m(s,a){j(s,t,a)},p(s,a){a&1&&!g(t.src,i="../images/"+s[0].project.slug+"/Plan_"+s[2]+"_800.svg")&&e(t,"src",i),a&1&&l!==(l=s[0].project.title)&&e(t,"alt",l)},d(s){s&&n(t)}}}function It(u){let t,i,l;return{c(){t=p("img"),this.h()},l(s){t=_(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){g(t.src,i="../images/"+u[0].project.slug+"/"+u[2]+"_800.webp")||e(t,"src",i),e(t,"alt",l=u[0].project.title+" project"),e(t,"class","svelte-r4ledu")},m(s,a){j(s,t,a)},p(s,a){a&1&&!g(t.src,i="../images/"+s[0].project.slug+"/"+s[2]+"_800.webp")&&e(t,"src",i),a&1&&l!==(l=s[0].project.title+" project")&&e(t,"alt",l)},d(s){s&&n(t)}}}function Mt(u){let t,i,l;return{c(){t=p("img"),this.h()},l(s){t=_(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){e(t,"class","plan svelte-r4ledu"),g(t.src,i="../images/"+u[0].project.slug+"/Plan_"+u[2]+"_800.svg")||e(t,"src",i),e(t,"alt",l=u[0].project.title)},m(s,a){j(s,t,a)},p(s,a){a&1&&!g(t.src,i="../images/"+s[0].project.slug+"/Plan_"+s[2]+"_800.svg")&&e(t,"src",i),a&1&&l!==(l=s[0].project.title)&&e(t,"alt",l)},d(s){s&&n(t)}}}function Ot(u){let t;function i(a,m){return a[1]?Nt:Bt}let l=i(u),s=l(u);return{c(){s.c(),t=Re()},l(a){s.l(a),t=Re()},m(a,m){s.m(a,m),j(a,t,m)},p(a,m){l===(l=i(a))&&s?s.p(a,m):(s.d(1),s=l(a),s&&(s.c(),s.m(t.parentNode,t)))},d(a){a&&n(t),s.d(a)}}}function Kt(u){let t,i,l,s,a,m,v,o,d,r,$,ve,pe,N,U,H,_e,Qe,W,P,he,ge,O,X,V,de,Je,Y,q,me,je,K,Z,I,be,Ue,y,F,$e,Ae,S,x,M,ke,We,ee,D,we,Ee,R,te,G,Ie,Xe,re,L,Me,Ge,z,le,T,Te,Ye,se,C,He,Pe,B,ce,ue=u[0].project.title+"",Ve,Ze,ae,qe=u[0].project.content+"",Fe,De,k,rt="",A;return t=new mt({props:{query:"(max-width: 800px)",$$slots:{default:[Ct,({matches:c})=>({1:c}),({matches:c})=>c?2:0]},$$scope:{ctx:u}}}),l=new mt({props:{query:"(min-width: 800px)",$$slots:{default:[Ot,({matches:c})=>({1:c}),({matches:c})=>c?2:0]},$$scope:{ctx:u}}}),{c(){ye(t.$$.fragment),i=w(),ye(l.$$.fragment),s=w(),a=p("div"),m=p("a"),v=p("img"),d=w(),r=p("a"),$=p("img"),pe=w(),N=p("div"),U=p("a"),H=p("img"),Qe=w(),W=p("a"),P=p("img"),ge=w(),O=p("div"),X=p("a"),V=p("img"),Je=w(),Y=p("a"),q=p("img"),je=w(),K=p("div"),Z=p("a"),I=p("img"),Ue=w(),y=p("a"),F=p("img"),Ae=w(),S=p("div"),x=p("a"),M=p("img"),We=w(),ee=p("a"),D=p("img"),Ee=w(),R=p("div"),te=p("a"),G=p("img"),Xe=w(),re=p("a"),L=p("img"),Ge=w(),z=p("div"),le=p("a"),T=p("img"),Ye=w(),se=p("a"),C=p("img"),Pe=w(),B=p("caption"),ce=p("h2"),Ve=gt(ue),Ze=gt(`  -  
    `),ae=p("p"),De=w(),k=p("a"),k.innerHTML=rt,this.h()},l(c){xe(t.$$.fragment,c),i=E(c),xe(l.$$.fragment,c),s=E(c),a=_(c,"DIV",{class:!0});var f=b(a);m=_(f,"A",{href:!0,"data-sveltekit-scroll":!0,class:!0});var ie=b(m);v=_(ie,"IMG",{id:!0,class:!0,src:!0,alt:!0}),ie.forEach(n),d=E(f),r=_(f,"A",{href:!0,"data-sveltekit-scroll":!0,class:!0});var ne=b(r);$=_(ne,"IMG",{id:!0,class:!0,src:!0,alt:!0}),ne.forEach(n),f.forEach(n),pe=E(c),N=_(c,"DIV",{class:!0});var Le=b(N);U=_(Le,"A",{href:!0,class:!0});var lt=b(U);H=_(lt,"IMG",{id:!0,class:!0,src:!0,alt:!0}),lt.forEach(n),Qe=E(Le),W=_(Le,"A",{href:!0,class:!0});var st=b(W);P=_(st,"IMG",{id:!0,class:!0,src:!0,alt:!0}),st.forEach(n),Le.forEach(n),ge=E(c),O=_(c,"DIV",{class:!0});var Ce=b(O);X=_(Ce,"A",{href:!0,class:!0});var at=b(X);V=_(at,"IMG",{id:!0,class:!0,src:!0,alt:!0}),at.forEach(n),Je=E(Ce),Y=_(Ce,"A",{href:!0,class:!0});var ct=b(Y);q=_(ct,"IMG",{id:!0,class:!0,src:!0,alt:!0}),ct.forEach(n),Ce.forEach(n),je=E(c),K=_(c,"DIV",{class:!0});var Be=b(K);Z=_(Be,"A",{href:!0,class:!0});var ot=b(Z);I=_(ot,"IMG",{href:!0,id:!0,class:!0,src:!0,alt:!0}),ot.forEach(n),Ue=E(Be),y=_(Be,"A",{href:!0,class:!0});var ut=b(y);F=_(ut,"IMG",{id:!0,class:!0,src:!0,alt:!0}),ut.forEach(n),Be.forEach(n),Ae=E(c),S=_(c,"DIV",{class:!0});var Ne=b(S);x=_(Ne,"A",{href:!0,class:!0});var it=b(x);M=_(it,"IMG",{href:!0,id:!0,class:!0,src:!0,alt:!0}),it.forEach(n),We=E(Ne),ee=_(Ne,"A",{href:!0,class:!0});var nt=b(ee);D=_(nt,"IMG",{id:!0,class:!0,src:!0,alt:!0}),nt.forEach(n),Ne.forEach(n),Ee=E(c),R=_(c,"DIV",{class:!0});var Oe=b(R);te=_(Oe,"A",{href:!0,class:!0});var ft=b(te);G=_(ft,"IMG",{href:!0,id:!0,class:!0,src:!0,alt:!0}),ft.forEach(n),Xe=E(Oe),re=_(Oe,"A",{href:!0,class:!0});var vt=b(re);L=_(vt,"IMG",{id:!0,class:!0,src:!0,alt:!0}),vt.forEach(n),Oe.forEach(n),Ge=E(c),z=_(c,"DIV",{class:!0});var Ke=b(z);le=_(Ke,"A",{href:!0,class:!0});var pt=b(le);T=_(pt,"IMG",{href:!0,id:!0,class:!0,src:!0,alt:!0}),pt.forEach(n),Ye=E(Ke),se=_(Ke,"A",{href:!0,class:!0});var _t=b(se);C=_(_t,"IMG",{id:!0,class:!0,src:!0,alt:!0}),_t.forEach(n),Ke.forEach(n),Pe=E(c),B=_(c,"CAPTION",{class:!0});var Se=b(B);ce=_(Se,"H2",{class:!0});var ht=b(ce);Ve=dt(ht,ue),ht.forEach(n),Ze=dt(Se,`  -  
    `),ae=_(Se,"P",{class:!0});var Gt=b(ae);Gt.forEach(n),Se.forEach(n),De=E(c),k=_(c,"A",{"data-sveltekit-noscroll":!0,class:!0,href:!0,style:!0,["data-svelte-h"]:!0}),Vt(k)!=="svelte-1psemtf"&&(k.innerHTML=rt),this.h()},h(){e(v,"id","prev"),e(v,"class","arrow svelte-r4ledu"),g(v.src,o="/prev/"+u[0].project.colour+".svg")||e(v,"src",o),e(v,"alt","prev button"),e(m,"href","/projects/TokyoTina"),e(m,"data-sveltekit-scroll",""),e(m,"class","svelte-r4ledu"),e($,"id","next"),e($,"class","arrow svelte-r4ledu"),g($.src,ve="/next/"+u[0].project.colour+".svg")||e($,"src",ve),e($,"alt","prev button"),e(r,"href","/projects/APavilion"),e(r,"data-sveltekit-scroll",""),e(r,"class","svelte-r4ledu"),e(a,"class","buttons ABHouse svelte-r4ledu"),e(H,"id","prev"),e(H,"class","arrow svelte-r4ledu"),g(H.src,_e="/prev/"+u[0].project.colour+".svg")||e(H,"src",_e),e(H,"alt","prev button"),e(U,"href","/projects/ABHouse"),e(U,"class","svelte-r4ledu"),e(P,"id","next"),e(P,"class","arrow svelte-r4ledu"),g(P.src,he="/next/"+u[0].project.colour+".svg")||e(P,"src",he),e(P,"alt","prev button"),e(W,"href","/projects/FourVisitsTo52Posts"),e(W,"class","svelte-r4ledu"),e(N,"class","buttons APavilion svelte-r4ledu"),e(V,"id","prev"),e(V,"class","arrow svelte-r4ledu"),g(V.src,de="/prev/"+u[0].project.colour+".svg")||e(V,"src",de),e(V,"alt","prev button"),e(X,"href","/projects/APavilion"),e(X,"class","svelte-r4ledu"),e(q,"id","next"),e(q,"class","arrow svelte-r4ledu"),g(q.src,me="/next/"+u[0].project.colour+".svg")||e(q,"src",me),e(q,"alt","prev button"),e(Y,"href","/projects/ARenovationForThree"),e(Y,"class","svelte-r4ledu"),e(O,"class","buttons FourVisitsTo52Posts svelte-r4ledu"),e(I,"href",""),e(I,"id","prev"),e(I,"class","arrow svelte-r4ledu"),g(I.src,be="/prev/"+u[0].project.colour+".svg")||e(I,"src",be),e(I,"alt","prev button"),e(Z,"href","/projects/FourVisitsTo52Posts"),e(Z,"class","svelte-r4ledu"),e(F,"id","next"),e(F,"class","arrow svelte-r4ledu"),g(F.src,$e="/next/"+u[0].project.colour+".svg")||e(F,"src",$e),e(F,"alt","prev button"),e(y,"href","/projects/ACertainKindofLife"),e(y,"class","svelte-r4ledu"),e(K,"class","buttons ARenovationForThree svelte-r4ledu"),e(M,"href",""),e(M,"id","prev"),e(M,"class","arrow svelte-r4ledu"),g(M.src,ke="/prev/"+u[0].project.colour+".svg")||e(M,"src",ke),e(M,"alt","prev button"),e(x,"href","/projects/ABHouse"),e(x,"class","svelte-r4ledu"),e(D,"id","next"),e(D,"class","arrow svelte-r4ledu"),g(D.src,we="/next/"+u[0].project.colour+".svg")||e(D,"src",we),e(D,"alt","prev button"),e(ee,"href","/projects/AHouseForOne"),e(ee,"class","svelte-r4ledu"),e(S,"class","buttons ACertainKindofLife svelte-r4ledu"),e(G,"href",""),e(G,"id","prev"),e(G,"class","arrow svelte-r4ledu"),g(G.src,Ie="/prev/"+u[0].project.colour+".svg")||e(G,"src",Ie),e(G,"alt","prev button"),e(te,"href","/projects/ACertainKindofLife"),e(te,"class","svelte-r4ledu"),e(L,"id","next"),e(L,"class","arrow svelte-r4ledu"),g(L.src,Me="/next/"+u[0].project.colour+".svg")||e(L,"src",Me),e(L,"alt","prev button"),e(re,"href","/projects/TokyoTina"),e(re,"class","svelte-r4ledu"),e(R,"class","buttons AHouseForOne svelte-r4ledu"),e(T,"href",""),e(T,"id","prev"),e(T,"class","arrow svelte-r4ledu"),g(T.src,Te="/prev/"+u[0].project.colour+".svg")||e(T,"src",Te),e(T,"alt","prev button"),e(le,"href","/projects/AHouseForOne"),e(le,"class","svelte-r4ledu"),e(C,"id","next"),e(C,"class","arrow svelte-r4ledu"),g(C.src,He="/next/"+u[0].project.colour+".svg")||e(C,"src",He),e(C,"alt","prev button"),e(se,"href","/projects/ABHouse"),e(se,"class","svelte-r4ledu"),e(z,"class","buttons TokyoTina svelte-r4ledu"),e(ce,"class","svelte-r4ledu"),e(ae,"class","svelte-r4ledu"),e(B,"class",Fe=u[0].project.colour+" sun svelte-r4ledu"),e(k,"data-sveltekit-noscroll",""),e(k,"class","white svelte-r4ledu"),e(k,"href","/"),Q(k,"background","white"),Q(k,"height","calc(100% - 80px)"),Q(k,"width","100%"),Q(k,"z-index","-5"),Q(k,"opacity","0.8"),Q(k,"transition","all 2s ease 0s"),Q(k,"position","fixed"),Q(k,"top","30px"),Q(k,"left","0")},m(c,f){et(t,c,f),j(c,i,f),et(l,c,f),j(c,s,f),j(c,a,f),h(a,m),h(m,v),h(a,d),h(a,r),h(r,$),j(c,pe,f),j(c,N,f),h(N,U),h(U,H),h(N,Qe),h(N,W),h(W,P),j(c,ge,f),j(c,O,f),h(O,X),h(X,V),h(O,Je),h(O,Y),h(Y,q),j(c,je,f),j(c,K,f),h(K,Z),h(Z,I),h(K,Ue),h(K,y),h(y,F),j(c,Ae,f),j(c,S,f),h(S,x),h(x,M),h(S,We),h(S,ee),h(ee,D),j(c,Ee,f),j(c,R,f),h(R,te),h(te,G),h(R,Xe),h(R,re),h(re,L),j(c,Ge,f),j(c,z,f),h(z,le),h(le,T),h(z,Ye),h(z,se),h(se,C),j(c,Pe,f),j(c,B,f),h(B,ce),h(ce,Ve),h(B,Ze),h(B,ae),ae.innerHTML=qe,j(c,De,f),j(c,k,f),A=!0},p(c,[f]){const ie={};f&2050&&(ie.$$scope={dirty:f,ctx:c}),t.$set(ie);const ne={};f&2051&&(ne.$$scope={dirty:f,ctx:c}),l.$set(ne),(!A||f&1&&!g(v.src,o="/prev/"+c[0].project.colour+".svg"))&&e(v,"src",o),(!A||f&1&&!g($.src,ve="/next/"+c[0].project.colour+".svg"))&&e($,"src",ve),(!A||f&1&&!g(H.src,_e="/prev/"+c[0].project.colour+".svg"))&&e(H,"src",_e),(!A||f&1&&!g(P.src,he="/next/"+c[0].project.colour+".svg"))&&e(P,"src",he),(!A||f&1&&!g(V.src,de="/prev/"+c[0].project.colour+".svg"))&&e(V,"src",de),(!A||f&1&&!g(q.src,me="/next/"+c[0].project.colour+".svg"))&&e(q,"src",me),(!A||f&1&&!g(I.src,be="/prev/"+c[0].project.colour+".svg"))&&e(I,"src",be),(!A||f&1&&!g(F.src,$e="/next/"+c[0].project.colour+".svg"))&&e(F,"src",$e),(!A||f&1&&!g(M.src,ke="/prev/"+c[0].project.colour+".svg"))&&e(M,"src",ke),(!A||f&1&&!g(D.src,we="/next/"+c[0].project.colour+".svg"))&&e(D,"src",we),(!A||f&1&&!g(G.src,Ie="/prev/"+c[0].project.colour+".svg"))&&e(G,"src",Ie),(!A||f&1&&!g(L.src,Me="/next/"+c[0].project.colour+".svg"))&&e(L,"src",Me),(!A||f&1&&!g(T.src,Te="/prev/"+c[0].project.colour+".svg"))&&e(T,"src",Te),(!A||f&1&&!g(C.src,He="/next/"+c[0].project.colour+".svg"))&&e(C,"src",He),(!A||f&1)&&ue!==(ue=c[0].project.title+"")&&qt(Ve,ue),(!A||f&1)&&qe!==(qe=c[0].project.content+"")&&(ae.innerHTML=qe),(!A||f&1&&Fe!==(Fe=c[0].project.colour+" sun svelte-r4ledu"))&&e(B,"class",Fe)},i(c){A||(oe(t.$$.fragment,c),oe(l.$$.fragment,c),A=!0)},o(c){fe(t.$$.fragment,c),fe(l.$$.fragment,c),A=!1},d(c){c&&(n(i),n(s),n(a),n(pe),n(N),n(ge),n(O),n(je),n(K),n(Ae),n(S),n(Ee),n(R),n(Ge),n(z),n(Pe),n(B),n(De),n(k)),tt(t,c),tt(l,c)}}}function St(u,t,i){let{data:l}=t;return u.$$set=s=>{"data"in s&&i(0,l=s.data)},[l]}class Wt extends Ht{constructor(t){super(),Pt(this,t,St,Kt,Tt,{data:0})}}export{Wt as component};
