import{d as p,y as m,o as d,b as _,e as r,f,h,c as v,k as g,q as k,s as y,A as n,a6 as i}from"../modules/vue-CIG9kCyc.js";import{_ as b}from"../elastic-Dh_lIWSx.js";import{u,p as x,f as C}from"./context-DvPa4WSy.js";import{a9 as c}from"../index-T31OeqKs.js";import"../modules/shiki-D1dHQdM7.js";function l(e){return e.startsWith("/")?"/function-calling/"+e.slice(1):e}function w(e,s=!1){const t=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),o={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?s?`linear-gradient(#0005, #0008), url(${l(e)})`:`url("${l(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const B={class:"my-auto w-full"},P=p({__name:"cover",props:{background:{default:""}},setup(e){u();const s=e,t=m(()=>w(s.background,!0));return(o,a)=>(d(),_("div",{class:"slidev-layout cover",style:h(t.value)},[r("div",B,[f(o.$slots,"default")])],4))}}),S=r("h1",null,"Function calling - Connect ChatGPT to the Internet",-1),$=r("p",null,[i("Ashish Tiwari"),r("br"),i(" Senior Developer Advocate")],-1),A=r("img",{src:b,width:"100"},null,-1),R={__name:"1",setup(e){return x(c),u(),(s,t)=>(d(),v(P,k(y(n(C)(n(c),0))),{default:g(()=>[S,$,A]),_:1},16))}};export{R as default};
