import{o as De,t as ye}from"../chunks/scheduler.aa675373.js";import{S as He,a as Je,I as V,g as Ce,f as Ve,b as we,c as le,s as M,d as ee,i as _e,e as J,P as qe,h as We}from"../chunks/singletons.2f6fbdef.js";function Xe(t,o){return t==="/"||o==="ignore"?t:o==="never"?t.endsWith("/")?t.slice(0,-1):t:o==="always"&&!t.endsWith("/")?t+"/":t}function Ze(t){return t.split("%25").map(decodeURI).join("%25")}function Qe(t){for(const o in t)t[o]=decodeURIComponent(t[o]);return t}const et=["href","pathname","search","searchParams","toString","toJSON"];function tt(t,o){const u=new URL(t);for(const i of et)Object.defineProperty(u,i,{get(){return o(),t[i]},enumerable:!0,configurable:!0});return nt(u),u}function nt(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const at="/__data.json";function rt(t){return t.replace(/\/$/,"")+at}function Ke(t){try{return JSON.parse(sessionStorage[t])}catch{}}function Fe(t,o){const u=JSON.stringify(o);try{sessionStorage[t]=u}catch{}}function ot(...t){let o=5381;for(const u of t)if(typeof u=="string"){let i=u.length;for(;i;)o=o*33^u.charCodeAt(--i)}else if(ArrayBuffer.isView(u)){const i=new Uint8Array(u.buffer,u.byteOffset,u.byteLength);let d=i.length;for(;d;)o=o*33^i[--d]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const fe=window.fetch;window.fetch=(t,o)=>((t instanceof Request?t.method:(o==null?void 0:o.method)||"GET")!=="GET"&&ne.delete(Se(t)),fe(t,o));const ne=new Map;function it(t,o){const u=Se(t,o),i=document.querySelector(u);if(i!=null&&i.textContent){const{body:d,...f}=JSON.parse(i.textContent),S=i.getAttribute("data-ttl");return S&&ne.set(u,{body:d,init:f,ttl:1e3*Number(S)}),Promise.resolve(new Response(d,f))}return fe(t,o)}function st(t,o,u){if(ne.size>0){const i=Se(t,u),d=ne.get(i);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(u==null?void 0:u.cache))return new Response(d.body,d.init);ne.delete(i)}}return fe(o,u)}function Se(t,o){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(o!=null&&o.headers||o!=null&&o.body){const d=[];o.headers&&d.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&d.push(o.body),i+=`[data-hash="${ot(...d)}"]`}return i}const ct=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function lt(t){const o=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${ut(t).map(i=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(d)return o.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(f)return o.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const S=i.split(/\[(.+?)\](?!\])/);return"/"+S.map((w,_)=>{if(_%2){if(w.startsWith("x+"))return be(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return be(String.fromCharCode(...w.slice(2).split("-").map(P=>parseInt(P,16))));const p=ct.exec(w);if(!p)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,x,k,N]=p;return o.push({name:k,matcher:N,optional:!!D,rest:!!x,chained:x?_===1&&S[0]==="":!1}),x?"(.*?)":D?"([^/]*)?":"([^/]+?)"}return be(w)}).join("")}).join("")}/?$`),params:o}}function ft(t){return!/^\([^)]+\)$/.test(t)}function ut(t){return t.slice(1).split("/").filter(ft)}function dt(t,o,u){const i={},d=t.slice(1);let f=0;for(let S=0;S<o.length;S+=1){const l=o[S];let w=d[S-f];if(l.chained&&l.rest&&f&&(w=d.slice(S-f,S+1).filter(_=>_).join("/"),f=0),w===void 0){l.rest&&(i[l.name]="");continue}if(!l.matcher||u[l.matcher](w)){i[l.name]=w;const _=o[S+1],p=d[S+1];_&&!_.rest&&_.optional&&p&&l.chained&&(f=0);continue}if(l.optional&&l.chained){f++;continue}return}if(!f)return i}function be(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function pt({nodes:t,server_loads:o,dictionary:u,matchers:i}){const d=new Set(o);return Object.entries(u).map(([l,[w,_,p]])=>{const{pattern:D,params:x}=lt(l),k={id:l,exec:N=>{const P=D.exec(N);if(P)return dt(P,x,i)},errors:[1,...p||[]].map(N=>t[N]),layouts:[0,..._||[]].map(S),leaf:f(w)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function f(l){const w=l<0;return w&&(l=~l),[w,t[l]]}function S(l){return l===void 0?l:[d.has(l),t[l]]}}class te{constructor(o,u){this.status=o,typeof u=="string"?this.body={message:u}:u?this.body=u:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(o,u){this.status=o,this.location=u}}async function ht(t){var o;for(const u in t)if(typeof((o=t[u])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([i,d])=>[i,await d])));return t}const gt=-1,mt=-2,yt=-3,wt=-4,_t=-5,bt=-6;function vt(t,o){if(typeof t=="number")return d(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const u=t,i=Array(u.length);function d(f,S=!1){if(f===gt)return;if(f===yt)return NaN;if(f===wt)return 1/0;if(f===_t)return-1/0;if(f===bt)return-0;if(S)throw new Error("Invalid input");if(f in i)return i[f];const l=u[f];if(!l||typeof l!="object")i[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const w=l[0],_=o==null?void 0:o[w];if(_)return i[f]=_(d(l[1]));switch(w){case"Date":i[f]=new Date(l[1]);break;case"Set":const p=new Set;i[f]=p;for(let k=1;k<l.length;k+=1)p.add(d(l[k]));break;case"Map":const D=new Map;i[f]=D;for(let k=1;k<l.length;k+=2)D.set(d(l[k]),d(l[k+1]));break;case"RegExp":i[f]=new RegExp(l[1],l[2]);break;case"Object":i[f]=Object(l[1]);break;case"BigInt":i[f]=BigInt(l[1]);break;case"null":const x=Object.create(null);i[f]=x;for(let k=1;k<l.length;k+=2)x[l[k]]=d(l[k+1]);break;default:throw new Error(`Unknown type ${w}`)}}else{const w=new Array(l.length);i[f]=w;for(let _=0;_<l.length;_+=1){const p=l[_];p!==mt&&(w[_]=d(p))}}else{const w={};i[f]=w;for(const _ in l){const p=l[_];w[_]=d(p)}}return i[f]}return d(0)}const ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ze];const Et=new Set([...ze]);[...Et];function St(t){return t.filter(o=>o!=null)}const kt="x-sveltekit-invalidated",K=Ke(He)??{},Q=Ke(Je)??{};function ve(t){K[t]=ee()}function Rt(t,o){var $e;const u=pt(t),i=t.nodes[0],d=t.nodes[1];i(),d();const f=document.documentElement,S=[],l=[];let w=null;const _={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},D=!1,x=!1,k=!0,N=!1,P=!1,z=!1,B=!1,q,j=($e=history.state)==null?void 0:$e[V];j||(j=Date.now(),history.replaceState({...history.state,[V]:j},"",location.href));const ue=K[j];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let F,ae,Y;async function ke(){if(Y=Y||Promise.resolve(),await Y,!Y)return;Y=null;const e=new URL(location.href),n=X(e,!0);w=null;const r=ae={},a=n&&await he(n);if(r===ae&&a){if(a.type==="redirect")return re(new URL(a.location,e).href,{},[e.pathname],r);a.props.page!==void 0&&(F=a.props.page),q.$set(a.props)}}function Re(e){l.some(n=>n==null?void 0:n.snapshot)&&(Q[e]=l.map(n=>{var r;return(r=n==null?void 0:n.snapshot)==null?void 0:r.capture()}))}function Ae(e){var n;(n=Q[e])==null||n.forEach((r,a)=>{var s,c;(c=(s=l[a])==null?void 0:s.snapshot)==null||c.restore(r)})}function Ie(){ve(j),Fe(He,K),Re(j),Fe(Je,Q)}async function re(e,{noScroll:n=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:c=!1},g,m){return typeof e=="string"&&(e=new URL(e,Ce(document))),ce({url:e,scroll:n?ee():null,keepfocus:a,redirect_chain:g,details:{state:s,replaceState:r},nav_token:m,accepted:()=>{c&&(B=!0)},blocked:()=>{},type:"goto"})}async function Le(e){return w={id:e.id,promise:he(e).then(n=>(n.type==="loaded"&&n.state.error&&(w=null),n))},w.promise}async function oe(...e){const r=u.filter(a=>e.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}function Oe(e){var a;p=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),F=e.props.page,q=new t.root({target:o,props:{...e.props,stores:M,components:l},hydrate:!0}),Ae(j);const r={from:null,to:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};_.after_navigate.forEach(s=>s(r)),x=!0}async function W({url:e,params:n,branch:r,status:a,error:s,route:c,form:g}){let m="never";for(const b of r)(b==null?void 0:b.slash)!==void 0&&(m=b.slash);e.pathname=Xe(e.pathname,m),e.search=e.search;const v={type:"loaded",state:{url:e,params:n,branch:r,error:s,route:c},props:{constructors:St(r).map(b=>b.node.component)}};g!==void 0&&(v.props.form=g);let y={},R=!F,A=0;for(let b=0;b<Math.max(r.length,p.branch.length);b+=1){const h=r[b],U=p.branch[b];(h==null?void 0:h.data)!==(U==null?void 0:U.data)&&(R=!0),h&&(y={...y,...h.data},R&&(v.props[`data_${A}`]=y),A+=1)}return(!p.url||e.href!==p.url.href||p.error!==s||g!==void 0&&g!==F.form||R)&&(v.props.page={error:s,params:n,route:{id:(c==null?void 0:c.id)??null},status:a,url:new URL(e),form:g??null,data:R?y:F.data}),v}async function de({loader:e,parent:n,url:r,params:a,route:s,server_data_node:c}){var y,R,A;let g=null;const m={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await e();if((y=v.universal)!=null&&y.load){let O=function(...h){for(const U of h){const{href:$}=new URL(U,r);m.dependencies.add($)}};const b={route:{get id(){return m.route=!0,s.id}},params:new Proxy(a,{get:(h,U)=>(m.params.add(U),h[U])}),data:(c==null?void 0:c.data)??null,url:tt(r,()=>{m.url=!0}),async fetch(h,U){let $;h instanceof Request?($=h.url,U={body:h.method==="GET"||h.method==="HEAD"?void 0:await h.blob(),cache:h.cache,credentials:h.credentials,headers:h.headers,integrity:h.integrity,keepalive:h.keepalive,method:h.method,mode:h.mode,redirect:h.redirect,referrer:h.referrer,referrerPolicy:h.referrerPolicy,signal:h.signal,...U}):$=h;const C=new URL($,r);return O(C.href),C.origin===r.origin&&($=C.href.slice(r.origin.length)),x?st($,C.href,U):it($,U)},setHeaders:()=>{},depends:O,parent(){return m.parent=!0,n()}};g=await v.universal.load.call(null,b)??null,g=g?await ht(g):null}return{node:v,loader:e,server:c,universal:(R=v.universal)!=null&&R.load?{type:"data",data:g,uses:m}:null,data:g??(c==null?void 0:c.data)??null,slash:((A=v.universal)==null?void 0:A.trailingSlash)??(c==null?void 0:c.slash)}}function Pe(e,n,r,a,s){if(B)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&r)return!0;for(const c of a.params)if(s[c]!==p.params[c])return!0;for(const c of a.dependencies)if(S.some(g=>g(new URL(c))))return!0;return!1}function pe(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}async function he({id:e,invalidating:n,url:r,params:a,route:s}){if((w==null?void 0:w.id)===e)return w.promise;const{errors:c,layouts:g,leaf:m}=s,v=[...g,m];c.forEach(E=>E==null?void 0:E().catch(()=>{})),v.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let y=null;const R=p.url?e!==p.url.pathname+p.url.search:!1,A=p.route?s.id!==p.route.id:!1;let O=!1;const b=v.map((E,L)=>{var H;const I=p.branch[L],T=!!(E!=null&&E[0])&&((I==null?void 0:I.loader)!==E[1]||Pe(O,A,R,(H=I.server)==null?void 0:H.uses,a));return T&&(O=!0),T});if(b.some(Boolean)){try{y=await Be(r,b)}catch(E){return ie({status:E instanceof te?E.status:500,error:await Z(E,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(y.type==="redirect")return y}const h=y==null?void 0:y.nodes;let U=!1;const $=v.map(async(E,L)=>{var ge;if(!E)return;const I=p.branch[L],T=h==null?void 0:h[L];if((!T||T.type==="skip")&&E[1]===(I==null?void 0:I.loader)&&!Pe(U,A,R,(ge=I.universal)==null?void 0:ge.uses,a))return I;if(U=!0,(T==null?void 0:T.type)==="error")throw T;return de({loader:E[1],url:r,params:a,route:s,parent:async()=>{var Te;const je={};for(let me=0;me<L;me+=1)Object.assign(je,(Te=await $[me])==null?void 0:Te.data);return je},server_data_node:pe(T===void 0&&E[0]?{type:"skip"}:T??null,E[0]?I==null?void 0:I.server:void 0)})});for(const E of $)E.catch(()=>{});const C=[];for(let E=0;E<v.length;E+=1)if(v[E])try{C.push(await $[E])}catch(L){if(L instanceof Me)return{type:"redirect",location:L.location};let I=500,T;if(h!=null&&h.includes(L))I=L.status??I,T=L.error;else if(L instanceof te)I=L.status,T=L.body;else{if(await M.updated.check())return await G(r);T=await Z(L,{params:a,url:r,route:{id:s.id}})}const H=await Ue(E,C,c);return H?await W({url:r,params:a,branch:C.slice(0,H.idx).concat(H.node),status:I,error:T,route:s}):await Ne(r,{id:s.id},T,I)}else C.push(void 0);return await W({url:r,params:a,branch:C,status:200,error:null,route:s,form:n?void 0:null})}async function Ue(e,n,r){for(;e--;)if(r[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await r[e](),loader:r[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:n,url:r,route:a}){const s={};let c=null;if(t.server_loads[0]===0)try{const y=await Be(r,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;c=y.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||D)&&await G(r)}const m=await de({loader:i,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(c)}),v={node:await d(),loader:d,universal:null,server:null,data:null};return await W({url:r,params:s,branch:[m,v],status:e,error:n,route:null})}function X(e,n){if(_e(e,J))return;const r=se(e);for(const a of u){const s=a.exec(r);if(s)return{id:e.pathname+e.search,invalidating:n,route:a,params:Qe(s),url:e}}}function se(e){return Ze(e.pathname.slice(J.length)||"/")}function xe({url:e,type:n,intent:r,delta:a}){var m,v;let s=!1;const c={from:{params:p.params,route:{id:((m=p.route)==null?void 0:m.id)??null},url:p.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((v=r==null?void 0:r.route)==null?void 0:v.id)??null},url:e},willUnload:!r,type:n};a!==void 0&&(c.delta=a);const g={...c,cancel:()=>{s=!0}};return P||_.before_navigate.forEach(y=>y(g)),s?null:c}async function ce({url:e,scroll:n,keepfocus:r,redirect_chain:a,details:s,type:c,delta:g,nav_token:m={},accepted:v,blocked:y}){var $,C,E;const R=X(e,!1),A=xe({url:e,type:c,delta:g,intent:R});if(!A){y();return}const O=j;v(),P=!0,x&&M.navigating.set(A),ae=m;let b=R&&await he(R);if(!b){if(_e(e,J))return await G(e);b=await Ne(e,{id:null},await Z(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(R==null?void 0:R.url)||e,ae!==m)return!1;if(b.type==="redirect")if(a.length>10||a.includes(e.pathname))b=await ie({status:500,error:await Z(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(b.location,e).href,{},[...a,e.pathname],m),!1;else(($=b.props.page)==null?void 0:$.status)>=400&&await M.updated.check()&&await G(e);if(S.length=0,B=!1,N=!0,ve(O),Re(O),(C=b.props.page)!=null&&C.url&&b.props.page.url.pathname!==e.pathname&&(e.pathname=(E=b.props.page)==null?void 0:E.url.pathname),s){const L=s.replaceState?0:1;if(s.state[V]=j+=L,history[s.replaceState?"replaceState":"pushState"](s.state,"",e),!s.replaceState){let I=j+1;for(;Q[I]||K[I];)delete Q[I],delete K[I],I+=1}}w=null,x?(p=b.state,b.props.page&&(b.props.page.url=e),q.$set(b.props)):Oe(b);const{activeElement:h}=document;if(await ye(),k){const L=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));n?scrollTo(n.x,n.y):L?L.scrollIntoView():scrollTo(0,0)}const U=document.activeElement!==h&&document.activeElement!==document.body;!r&&!U&&Ee(),k=!0,b.props.page&&(F=b.props.page),P=!1,c==="popstate"&&Ae(j),_.after_navigate.forEach(L=>L(A)),M.navigating.set(null),N=!1}async function Ne(e,n,r,a){return e.origin===location.origin&&e.pathname===location.pathname&&!D?await ie({status:a,error:r,url:e,route:n}):await G(e)}function G(e){return location.href=e.href,new Promise(()=>{})}function Ye(){let e;f.addEventListener("mousemove",c=>{const g=c.target;clearTimeout(e),e=setTimeout(()=>{a(g,2)},20)});function n(c){a(c.composedPath()[0],1)}f.addEventListener("mousedown",n),f.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(c=>{for(const g of c)g.isIntersecting&&(oe(se(new URL(g.target.href))),r.unobserve(g.target))},{threshold:0});function a(c,g){const m=Ve(c,f);if(!m)return;const{url:v,external:y,download:R}=we(m,J);if(y||R)return;const A=le(m);if(!A.reload)if(g<=A.preload_data){const O=X(v,!1);O&&Le(O)}else g<=A.preload_code&&oe(se(v))}function s(){r.disconnect();for(const c of f.querySelectorAll("a")){const{url:g,external:m,download:v}=we(c,J);if(m||v)continue;const y=le(c);y.reload||(y.preload_code===qe.viewport&&r.observe(c),y.preload_code===qe.eager&&oe(se(g)))}}_.after_navigate.push(s),s()}function Z(e,n){return e instanceof te?e.body:t.hooks.handleError({error:e,event:n})??{message:n.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{De(()=>(_.after_navigate.push(e),()=>{const n=_.after_navigate.indexOf(e);_.after_navigate.splice(n,1)}))},before_navigate:e=>{De(()=>(_.before_navigate.push(e),()=>{const n=_.before_navigate.indexOf(e);_.before_navigate.splice(n,1)}))},disable_scroll_handling:()=>{(N||!x)&&(k=!1)},goto:(e,n={})=>re(e,n,[]),invalidate:e=>{if(typeof e=="function")S.push(e);else{const{href:n}=new URL(e,location.href);S.push(r=>r.href===n)}return ke()},invalidate_all:()=>(B=!0,ke()),preload_data:async e=>{const n=new URL(e,Ce(document)),r=X(n,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${n}`);await Le(r)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const n=new URL(location.href),{branch:r,route:a}=p;if(!a)return;const s=await Ue(p.branch.length,r,a.errors);if(s){const c=await W({url:n,params:p.params,branch:r.slice(0,s.idx).concat(s.node),status:e.status??500,error:e.error,route:a});p=c.state,q.$set(c.props),ye().then(Ee)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(q.$set({form:null,page:{...F,form:e.data,status:e.status}}),await ye(),q.$set({form:e.data}),e.type==="success"&&Ee())},_start_router:()=>{var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{var a;let r=!1;if(Ie(),!P){const s={from:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};_.before_navigate.forEach(c=>c(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ie()}),(e=navigator.connection)!=null&&e.saveData||Ye(),f.addEventListener("click",n=>{var A;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=Ve(n.composedPath()[0],f);if(!r)return;const{url:a,external:s,target:c,download:g}=we(r,J);if(!a)return;if(c==="_parent"||c==="_top"){if(window.parent!==window)return}else if(c&&c!=="_self")return;const m=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||g)return;if(s||m.reload){xe({url:a,type:"link"})?P=!0:n.preventDefault();return}const[y,R]=a.href.split("#");if(R!==void 0&&y===location.href.split("#")[0]){if(p.url.hash===a.hash){n.preventDefault(),(A=r.ownerDocument.getElementById(R))==null||A.scrollIntoView();return}if(z=!0,ve(j),p.url=a,M.page.set({...F,url:a}),M.page.notify(),!m.replace_state)return;z=!1,n.preventDefault()}ce({url:a,scroll:m.noscroll?ee():null,keepfocus:m.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:m.replace_state??a.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),f.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const c=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(_e(c,J))return;const g=n.target,{keep_focus:m,noscroll:v,reload:y,replace_state:R}=le(g);if(y)return;n.preventDefault(),n.stopPropagation();const A=new FormData(g),O=a==null?void 0:a.getAttribute("name");O&&A.append(O,(a==null?void 0:a.getAttribute("value"))??""),c.search=new URLSearchParams(A).toString(),ce({url:c,scroll:v?ee():null,keepfocus:m??!1,redirect_chain:[],details:{state:{},replaceState:R??c.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[V]){if(n.state[V]===j)return;const a=K[n.state[V]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){K[j]=ee(),j=n.state[V],scrollTo(a.x,a.y);return}const s=n.state[V]-j;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=n.state[V]},blocked:()=>{history.go(-s)},type:"popstate",delta:s})}}),addEventListener("hashchange",()=>{z&&(z=!1,history.replaceState({...history.state,[V]:++j},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&M.navigating.set(null)})},_hydrate:async({status:e=200,error:n,node_ids:r,params:a,route:s,data:c,form:g})=>{D=!0;const m=new URL(location.href);({params:a={},route:s={id:null}}=X(m,!1)||{});let v;try{const y=r.map(async(O,b)=>{const h=c[b];return h!=null&&h.uses&&(h.uses=Ge(h.uses)),de({loader:t.nodes[O],url:m,params:a,route:s,parent:async()=>{const U={};for(let $=0;$<b;$+=1)Object.assign(U,(await y[$]).data);return U},server_data_node:pe(h)})}),R=await Promise.all(y),A=u.find(({id:O})=>O===s.id);if(A){const O=A.layouts;for(let b=0;b<O.length;b++)O[b]||R.splice(b,0,void 0)}v=await W({url:m,params:a,branch:R,status:e,error:n,form:g,route:A??null})}catch(y){if(y instanceof Me){await G(new URL(y.location,location.href));return}v=await ie({status:y instanceof te?y.status:500,error:await Z(y,{url:m,params:a,route:s}),url:m,route:s})}Oe(v)}}}async function Be(t,o){const u=new URL(t);u.pathname=rt(t.pathname),u.searchParams.append(kt,o.map(d=>d?"1":"0").join(""));const i=await fe(u.href);if(!i.ok)throw new te(i.status,await i.json());return new Promise(async d=>{var p;const f=new Map,S=i.body.getReader(),l=new TextDecoder;function w(D){return vt(D,{Promise:x=>new Promise((k,N)=>{f.set(x,{fulfil:k,reject:N})})})}let _="";for(;;){const{done:D,value:x}=await S.read();if(D&&!_)break;for(_+=!x&&_?`
`:l.decode(x);;){const k=_.indexOf(`
`);if(k===-1)break;const N=JSON.parse(_.slice(0,k));if(_=_.slice(k+1),N.type==="redirect")return d(N);if(N.type==="data")(p=N.nodes)==null||p.forEach(P=>{(P==null?void 0:P.type)==="data"&&(P.uses=Ge(P.uses),P.data=w(P.data))}),d(N);else if(N.type==="chunk"){const{id:P,data:z,error:B}=N,q=f.get(P);f.delete(P),B?q.reject(w(B)):q.fulfil(w(z))}}}})}function Ge(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url)}}function Ee(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const o=document.body,u=o.getAttribute("tabindex");o.tabIndex=-1,o.focus({preventScroll:!0,focusVisible:!1}),u!==null?o.setAttribute("tabindex",u):o.removeAttribute("tabindex");const i=getSelection();if(i&&i.type!=="None"){const d=[];for(let f=0;f<i.rangeCount;f+=1)d.push(i.getRangeAt(f));setTimeout(()=>{if(i.rangeCount===d.length){for(let f=0;f<i.rangeCount;f+=1){const S=d[f],l=i.getRangeAt(f);if(S.commonAncestorContainer!==l.commonAncestorContainer||S.startContainer!==l.startContainer||S.endContainer!==l.endContainer||S.startOffset!==l.startOffset||S.endOffset!==l.endOffset)return}i.removeAllRanges()}})}}}async function Lt(t,o,u){const i=Rt(t,o);We({client:i}),u?await i._hydrate(u):i.goto(location.href,{replaceState:!0}),i._start_router()}export{Lt as start};
