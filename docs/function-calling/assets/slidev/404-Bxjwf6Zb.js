import{N as _,y as p,r as x,b as S,e as s,a6 as n,x as f,c as m,k as h,g as v,o as d,p as k,a as N}from"../modules/vue-DgbUhO8p.js";import{_ as y,a as g}from"../index-BKaMojNn.js";import"../modules/shiki-hdlGbjxk.js";const R={__name:"404",setup(t,{expose:l}){l();const{currentRoute:o}=_(),{total:e}=g(),i=p(()=>{const u=o.value.path.match(/\d+/);if(u){const r=+u[0];if(r>0&&r<=e.value)return r}return null}),a={currentRoute:o,total:e,guessedSlide:i,computed:p,get useRouter(){return _},get useNav(){return g}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},b=t=>(k("data-v-498aedf6"),t=t(),N(),t),B={class:"grid justify-center pt-15%"},I=b(()=>s("h1",{class:"text-9xl font-bold"}," 404 ",-1)),w={class:"text-2xl"},C={class:"op-70"},V={class:"mt-3 flex flex-col gap-2"};function j(t,l,o,e,i,a){const c=x("RouterLink");return d(),S("div",B,[s("div",null,[I,s("p",w,[n(" Page not found"),s("code",C,":"+f(e.currentRoute.path),1)]),s("div",V,[e.guessedSlide!==1?(d(),m(c,{key:0,to:"/",class:"page-link"},{default:h(()=>[n(" Go Home ")]),_:1})):v("v-if",!0),e.guessedSlide?(d(),m(c,{key:1,to:`/${e.guessedSlide}`,class:"page-link"},{default:h(()=>[n(" Go to Slide "+f(e.guessedSlide),1)]),_:1},8,["to"])):v("v-if",!0)])])])}const D=y(R,[["render",j],["__scopeId","data-v-498aedf6"],["__file","/Users/ashish/work/slidev_test/slidev/node_modules/@slidev/client/pages/404.vue"]]);export{D as default};
