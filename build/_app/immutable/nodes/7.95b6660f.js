import{s as y,n as x}from"../chunks/scheduler.1bceac80.js";import{S as q,i as C,g as v,s as E,h as u,j as p,y as A,c as D,f as d,k as _,a as g,x as m,A as I,m as P,n as S,o as V}from"../chunks/index.b635535b.js";import{e as b}from"../chunks/each.e59479a4.js";function k(i,e,s){const r=i.slice();return r[1]=e[s].slug,r[2]=e[s].title,r}function j(i){let e,s=i[2]+"",r,c,o;return{c(){e=v("a"),r=P(s),o=v("br"),this.h()},l(n){e=u(n,"A",{href:!0,"data-sveltekit-noscroll":!0,class:!0});var t=p(e);r=S(t,s),t.forEach(d),o=u(n,"BR",{}),this.h()},h(){_(e,"href",c="/projects/"+i[1]),_(e,"data-sveltekit-noscroll",""),_(e,"class","svelte-rxmcvq")},m(n,t){g(n,e,t),m(e,r),g(n,o,t)},p(n,t){t&1&&s!==(s=n[2]+"")&&V(r,s),t&1&&c!==(c="/projects/"+n[1])&&_(e,"href",c)},d(n){n&&(d(e),d(o))}}}function z(i){let e,s,r="Projects",c,o,n=b(i[0].banana),t=[];for(let l=0;l<n.length;l+=1)t[l]=j(k(i,n,l));return{c(){e=v("div"),s=v("h6"),s.textContent=r,c=E(),o=v("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=u(l,"DIV",{id:!0,class:!0});var h=p(e);s=u(h,"H6",{class:!0,["data-svelte-h"]:!0}),A(s)!=="svelte-1mnc6z4"&&(s.textContent=r),c=D(h),o=u(h,"DIV",{});var a=p(o);for(let f=0;f<t.length;f+=1)t[f].l(a);a.forEach(d),h.forEach(d),this.h()},h(){_(s,"class","svelte-rxmcvq"),_(e,"id","projects"),_(e,"class","svelte-rxmcvq")},m(l,h){g(l,e,h),m(e,s),m(e,c),m(e,o);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(o,null)},p(l,[h]){if(h&1){n=b(l[0].banana);let a;for(a=0;a<n.length;a+=1){const f=k(l,n,a);t[a]?t[a].p(f,h):(t[a]=j(f),t[a].c(),t[a].m(o,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=n.length}},i:x,o:x,d(l){l&&d(e),I(t,l)}}}function B(i,e,s){let{data:r}=e;return i.$$set=c=>{"data"in c&&s(0,r=c.data)},[r]}class F extends q{constructor(e){super(),C(this,e,B,z,y,{data:0})}}export{F as component};