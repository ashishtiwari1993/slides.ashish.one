import{d as x,y as k,o as h,b as y,e as i,f as C,h as b,c as S,k as P,q as w,s as T,a6 as p}from"../modules/vue-DgbUhO8p.js";import{u,p as f,f as B}from"./context-hjNJ2xTS.js";import{_ as $,a8 as m}from"../index-BKaMojNn.js";import"../modules/shiki-hdlGbjxk.js";function v(e){return e.startsWith("/")?"/slides.ashish.one/function-calling/"+e.slice(1):e}function j(e,r=!1){const o=e&&["#","rgb","hsl"].some(s=>e.indexOf(s)===0),t={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?r?`linear-gradient(#0005, #0008), url(${v(e)})`:`url("${v(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const I=x({__name:"cover",props:{background:{default:""}},setup(e,{expose:r}){r();const{$slidev:o,$nav:t,$clicksContext:s,$clicks:n,$page:c,$renderContext:l,$frontmatter:d}=u(),a=e,g=k(()=>j(a.background,!0)),_={$slidev:o,$nav:t,$clicksContext:s,$clicks:n,$page:c,$renderContext:l,$frontmatter:d,props:a,style:g};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),z={class:"my-auto w-full"};function A(e,r,o,t,s,n){return h(),y("div",{class:"slidev-layout cover",style:b(t.style)},[i("div",z,[C(e.$slots,"default")])],4)}const F=$(I,[["render",A],["__file","/Users/ashish/work/slidev_test/slidev/node_modules/@slidev/theme-default/layouts/cover.vue"]]),O="/slides.ashish.one/function-calling/assets/elastic-white-CEHfmVY1.png",V={__name:"1",setup(e,{expose:r}){r(),f(m);const{$slidev:o,$nav:t,$clicksContext:s,$clicks:n,$page:c,$renderContext:l,$frontmatter:d}=u(),a={$slidev:o,$nav:t,$clicksContext:s,$clicks:n,$page:c,$renderContext:l,$frontmatter:d,InjectedLayout:F,get frontmatter(){return m},get useSlideContext(){return u},get _provideFrontmatter(){return f},get _frontmatterToProps(){return B}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},E=i("h1",null,"Function calling - Connect ChatGPT to the Internet",-1),L=i("p",null,[p("Ashish Tiwari"),i("br"),p(" Senior Developer Advocate")],-1),N=i("img",{src:O,width:"100"},null,-1);function R(e,r,o,t,s,n){return h(),S(t.InjectedLayout,w(T(t._frontmatterToProps(t.frontmatter,0))),{default:P(()=>[E,L,N]),_:1},16)}const H=$(V,[["render",R],["__file","/@slidev/slides/1.md"]]);export{H as default};
