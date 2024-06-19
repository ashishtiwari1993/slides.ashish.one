import{N as H,O as T}from"../modules/unplugin-icons-DPWq8Mpp.js";import{d as P,t as V,aC as q,D as v,ad as O,z as E,aG as M,o as r,b,f as $,B as o,c as u,g as z,i as G,h as R,k as c,e as s,l as g,m as y,q as U,s as W,a7 as i}from"../modules/vue-DtB1VZkz.js";import{v as w,ac as j,C as K,ah as X,ai as Y,aj as x}from"../index-n2eJBweN.js";import{u as S,p as J,f as Q}from"./context-DN0nMbO_.js";import{I as Z}from"./default-CTP4Hqkq.js";import"../modules/shiki-6OiND9wM.js";const ss=["title"],is=P({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:w.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(A){const e=A,{$clicksContext:k}=S(),t=V(),f=j();q(()=>{k.unregister(f)}),v(()=>{var a;(a=t.value)==null||a.classList.toggle("slidev-code-line-numbers",e.lines)}),O(()=>{var p;if(!k||!((p=e.ranges)!=null&&p.length))return;const a=k.calculateSince(e.at,e.ranges.length-1);k.register(f,a);const l=E(()=>a?Math.max(0,k.current-a.start+1):K),n=E(()=>e.finally==="last"?e.ranges.at(-1):e.finally.toString());v(()=>{if(!t.value)return;let d=e.ranges[l.value]??n.value;const _=d==="hide";t.value.classList.toggle(X,_),_&&(d=e.ranges[l.value+1]??n.value);const C=t.value.querySelector(".shiki"),B=Array.from(C.querySelectorAll("code > .line")),L=B.length;if(Y(d,L,e.startLine,h=>[B[h]]),e.maxHeight){const h=Array.from(C.querySelectorAll(".line.highlighted"));h.reduce((D,F)=>F.offsetHeight+D,0)>t.value.offsetHeight?h[0].scrollIntoView({behavior:"smooth",block:"start"}):h.length>0&&h[Math.round((h.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:m,copy:N}=M();function I(){var l,n;const a=(n=(l=t.value)==null?void 0:l.querySelector(".slidev-code"))==null?void 0:n.textContent;a&&N(a)}return(a,l)=>{const n=H,p=T;return r(),b("div",{ref_key:"el",ref:t,class:G(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":e.lines}]),style:R({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0,"--start":e.startLine})},[$(a.$slots,"default"),o(w).codeCopy?(r(),b("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:o(m)?"Copied":"Copy",onClick:l[0]||(l[0]=d=>I())},[o(m)?(r(),u(n,{key:0,class:"p-2 w-8 h-8"})):(r(),u(p,{key:1,class:"p-2 w-8 h-8"}))],8,ss)):z("v-if",!0)],6)}}}),es=s("h1",null,"Let’s see how it works with Flask - Python web framework",-1),ts=s("p",null,"Flask is a micro web framework written in Python. It use to build lightweight web applications quickly.",-1),as={class:"grid grid-cols-2 gap-4"},ls=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-sh"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"pip"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," install"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," flask")])])],-1),ns=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-sh"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# install dependency")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"pip"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," install"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," opentelemetry-distro")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"opentelemetry-bootstrap"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," -a"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," install")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# run flask app")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"flask"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," run"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," -p"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 8080")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# run instrumented flask app ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"export"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," OTEL_PYTHON_LOGGING_AUTO_INSTRUMENTATION_ENABLED"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"opentelemetry-instrument"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," \\")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"    --traces_exporter"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," console"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," \\")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"    --metrics_exporter"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," console"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," \\")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"    --logs_exporter"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," console"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," \\")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"    --service_name"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," dice-server"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," \\")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    flask"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," run"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," -p"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 8080")])])],-1),hs=s("p",null,"app.py",-1),ks=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-py"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"from"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," flask "),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," Flask")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"app "),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," Flask"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"__name__"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"@"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"app"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"route"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"/"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"def"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," hello_world"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"():")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"    return"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Hello, World!"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'")])])],-1),rs=s("p",null,[s("a",{href:"https://opentelemetry.io/docs/languages/python/",target:"_blank"},"https://opentelemetry.io/docs/languages/python/")],-1),As={__name:"6",setup(A){return J(x),S(),(e,k)=>{const t=is;return r(),u(Z,U(W(o(Q)(o(x),5))),{default:c(()=>[es,ts,s("div",as,[s("div",null,[g(t,y({},{ranges:[]}),{default:c(()=>[ls]),_:1},16),g(t,y({},{ranges:["0","1-3","5-6","8-15"]}),{default:c(()=>[ns]),_:1},16)]),s("div",null,[hs,g(t,y({},{ranges:["all"]}),{default:c(()=>[ks]),_:1},16),rs])])]),_:1},16)}}};export{As as default};
