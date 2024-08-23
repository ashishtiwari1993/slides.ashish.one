import{d as y,ac as F,aA as G,o as S,c as $,F as L,aC as M,v as o,aD as m,aE as R,l as E,aa as P,aF as K,b as H,e,f as w,i as N,k as b,q,s as O,A as z,a6 as p}from"../modules/vue-BXiNn49O.js";import{ac as U,al as X,am as j,C as J,an as B}from"../index-BLjtp1fI.js";import{u as V,p as Q,f as W}from"./context-Bg0crAjK.js";import"../modules/shiki-CFUWKxDT.js";const Y=y({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(n){const t=n,{$clicksContext:r}=V(),c=U();let u=+t.size;return Number.isNaN(u)&&(console.warn(`[slidev] Invalid size for VClickGap: ${t.size}`),u=1),F(()=>{const d=r.currentOffset+u-1;r.register(c,{max:d,delta:u})}),G(()=>{r.unregister(c)}),(d,a)=>(S(),$(L))}}),I=["ul","ol"],Z=y({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},handleSpecialElements:{type:Boolean,default:!0}},render(){var k,x;const n=+this.every,t=X(this.at),r=typeof t=="string";if(!t){console.warn("[slidev] Invalid at prop for v-clicks component:",t);return}const c=M("click"),u=(i,l)=>P(i,[[c,l,"",{hide:this.hide,fade:this.fade}]]),d=i=>i.flatMap(l=>m(l)&&typeof l.type=="symbol"&&Array.isArray(l.children)?d(l.children):[l]);let a=(x=(k=this.$slots).default)==null?void 0:x.call(k);if(!a)return;a=d(j(a));const D=(i,l=1)=>d(i).map(s=>{if(!m(s))return s;if(I.includes(s.type)&&Array.isArray(s.children)){const f=h(s.children,l+1);return o(s,{},f)}return o(s)});let C=1,_=0;const h=(i,l=1)=>d(i).map(s=>{if(!m(s)||s.type===R)return s;const f=+t+Math.ceil(C++/n)-1;let v;l<+this.depth&&Array.isArray(s.children)?v=o(s,{},D(s.children,l)):v=o(s);const A=f-_;return _=f,u(v,r?A>=0?`+${A}`:`${A}`:f)}),g=()=>E(Y,{size:+t+Math.ceil((C-1)/n)-1-_});if(this.handleSpecialElements){if(a.length===1&&I.includes(a[0].type)&&Array.isArray(a[0].children))return o(a[0],{},[...h(a[0].children),g()]);if(a.length===1&&a[0].type==="table"){const i=a[0];if(Array.isArray(i.children))return o(i,{},i.children.map(l=>m(l)?l.type==="tbody"&&Array.isArray(l.children)?o(l,{},[...h(l.children),g()]):o(l):l))}}return[...h(a),g()]}}),ee=y({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:n=>o("span",n)}},render(){return o(Z,{every:J,at:this.at,hide:this.hide,fade:this.fade,handleSpecialElements:!1},{default:()=>{var n,t;return(t=(n=this.$slots).default)==null?void 0:t.call(n).map(r=>r.type===K?this.wrapText(r):r)}})}}),le=y({__name:"two-cols",props:{class:{type:String},layoutClass:{type:String}},setup(n){const t=n;return(r,c)=>(S(),H("div",{class:N(["slidev-layout two-columns w-full h-full grid grid-cols-2",t.layoutClass])},[e("div",{class:N(["col-left",t.class])},[w(r.$slots,"default")],2),e("div",{class:N(["col-right",t.class])},[w(r.$slots,"right")],2)],2))}}),te=e("h1",null,"And lot more …",-1),se=e("ul",null,[e("li",null,"Full-text search"),e("li",null,"Aggregation"),e("li",null,"BKD-tree"),e("li",null,"Hilighters"),e("li",null,"Language analyzers"),e("li",null,"Geo-match"),e("li",null,"Data platform"),e("li",null,"Timeseries"),e("li",null,"Analyzers"),e("li",null,"Permission based search"),e("li",null,"Document level security"),e("li",null,[p("Cross cluster search / Replication"),e("br"),p(" …"),e("br"),p(" …")])],-1),re=e("h1",null,"GenAI",-1),ae=e("ul",null,[e("li",null,"Vector search"),e("li",null,"ANN"),e("li",null,"KNN"),e("li",null,"Reranking"),e("li",null,"Inference"),e("li",null,"ELSER"),e("li",null,"RAG"),e("li",null,"Embeddings on fly"),e("li",null,"ELAND"),e("li",null,"Multilingual search"),e("li",null,"Hybrid Search"),e("li",null,[p("AI Assistant"),e("br"),p(" …"),e("br"),p(" …")])],-1),ue={__name:"10",setup(n){return Q(B),V(),(t,r)=>{const c=ee;return S(),$(le,q(O(z(W)(z(B),9))),{right:b(u=>[E(c,null,{default:b(()=>[re,ae]),_:1})]),default:b(()=>[te,se]),_:1},16)}}};export{ue as default};
