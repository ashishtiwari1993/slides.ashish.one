import{a2 as n,a8 as r,t as u,y as j,aw as $,aF as p}from"../modules/vue-BFglVRsm.js";import{W as v,a5 as C,ap as x,a3 as S,a1 as F,a2 as R,aq as l,a0 as T,ar as k,as as E}from"../index-CL109QfN.js";function g(){const t=n(x),a=r(t,"nav"),s=n(S).value,e=r(s,"current"),i=n(F),c=n(R),o=n(l,{}),d=n(T,void 0),m=n(v,u(1)),f=n(C,j(()=>1));return{$slidev:t,$nav:a,$clicksContext:s,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function b(t){var i,c;$(l,t);const{$slidev:a,$page:s}=g(),e=a.nav.slides.find(o=>o.no===s.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function y(t,a){return{...p(t,a===0?k:E),frontmatter:t}}export{y as f,b as p,g as u};