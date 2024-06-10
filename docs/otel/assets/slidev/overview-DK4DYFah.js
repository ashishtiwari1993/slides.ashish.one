import{d as H,e as O,_ as K,f as L,g as U}from"../modules/unplugin-icons-CNWEvdMP.js";import{d as j,K as X,t as M,z as I,N as q,a8 as G,n as J,b as g,e as c,F as P,a9 as T,c as k,k as p,g as u,h as Q,x as _,o as s,i as x,l as d}from"../modules/vue-eSalnQph.js";import{u as Y,a as Z,s as $,c as ee,C as V,g as te,i as oe,b as ne,t as ie,p as le,_ as ae}from"../index-BxZxoApF.js";import{S as ce,a as se,D as re}from"./DrawingPreview-BoEwD8Y8.js";import{I as de}from"./IconButton-90doGtL5.js";import{N as me}from"./NoteEditable-C66kS0Zf.js";import{C as ge}from"./ClicksSlider-Cvqze4qd.js";import"../modules/shiki-Cg3W-Vfq.js";const _e=450,ve=j({__name:"overview",setup(z,{expose:v}){v(),Y({title:`Overview - ${$}`});const{openInEditor:E,slides:e}=Z(),b=X(new Map),w=M([]),S=M(null),C=I(()=>e.value.map(o=>{var n,a;return m(((a=(n=o.meta)==null?void 0:n.slide)==null?void 0:a.note)||"")})),y=I(()=>C.value.reduce((o,n)=>o+n,0)),N=I(()=>e.value.map(o=>r(o)).reduce((o,n)=>o+n,0)),f=q(),t=new WeakMap;function l(o){return t.has(o)||t.set(o,ee(o,V)),t.get(o)}function r(o){var n,a;return((n=o.meta)==null?void 0:n.clicks)||((a=l(o))==null?void 0:a.total)}function i(o){f.value===o?f.value=void 0:f.value=o}function m(o){var n;return((n=o.match(/[\w`'\-]+/g))==null?void 0:n.length)||0}function h(o){const n=o.getBoundingClientRect(),a=20;return n.top>=0-a&&n.left>=0-a&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)+a&&n.right<=(window.innerWidth||document.documentElement.clientWidth)+a}function D(){const o=[];Array.from(b.entries()).forEach(([n,a])=>{h(a)&&o.push(n)}),w.value=o}function A(o){const n=document.createElement("a");n.target="_blank",n.href=le+o.slice(1),n.click()}function R(o){const n=b.get(o);n&&n.scrollIntoView({behavior:"smooth",block:"start"})}function F(o,n,a){const B=l(a);B.current===n?B.current=V:B.current=n,o.preventDefault()}G(()=>{J(()=>{D()})});const W={cardWidth:_e,openInEditor:E,slides:e,blocks:b,activeBlocks:w,edittingNote:S,wordCounts:C,totalWords:y,totalClicks:N,activeSlide:f,clicksContextMap:t,getClicksContext:l,getSlideClicks:r,toggleRoute:i,wordCount:m,isElementInViewport:h,checkActiveBlocks:D,openSlideInNewTab:A,scrollToSlide:R,onMarkerClick:F,get getSlidePath(){return te},get isColorSchemaConfigured(){return oe},get isDark(){return ne},get toggleDark(){return ie},SlideContainer:ce,SlideWrapper:se,DrawingPreview:re,IconButton:de,NoteEditable:me,ClicksSlider:ge};return Object.defineProperty(W,"__isScriptSetup",{enumerable:!1,value:!0}),W}}),fe={class:"h-screen w-screen of-hidden flex"},ke={class:"grid grid-rows-[auto_max-content] border-r border-main select-none max-h-full h-full"},he={class:"relative"},pe={class:"absolute left-0 top-0 bottom-0 w-200 flex flex-col flex-auto items-end group p2 gap-1 max-h-full of-x-visible of-y-auto",style:{direction:"rtl"}},ue=["onClick"],be={p2:"",border:"t main"},Ce={class:"select-none w-13 text-right my4 flex flex-col gap-1 items-end"},xe={class:"text-3xl op20 mb2"},we={class:"flex flex-col gap-2 my5"},Se=["onDblclick"],ye={class:"py3 mt-0.5 mr--8 ml--4 op0 transition group-hover:op100"},Ne={key:0,class:"select-none absolute bottom-0 right-0 bg-main rounded-tl p2 op35 text-xs"},De={class:"absolute top-0 right-0 px3 py1.5 border-b border-l rounded-lb bg-main border-main select-none"},Be={class:"text-xs op50"};function Ie(z,v,E,e,b,w){const S=H,C=O,y=K,N=U,f=L;return s(),g("div",fe,[c("nav",ke,[c("div",he,[c("div",pe,[(s(!0),g(P,null,T(e.slides,(t,l)=>{var r,i,m,h;return s(),g("div",{key:t.no,class:"relative",style:{direction:"ltr"}},[c("button",{class:x(["relative transition duration-300 w-8 h-8 rounded hover:bg-active hover:op100",e.activeBlocks.includes(l)?"op100 text-primary bg-gray:5":"op20"]),onClick:D=>e.scrollToSlide(l)},[c("div",null,_(l+1),1)],10,ue),(i=(r=t.meta)==null?void 0:r.slide)!=null&&i.title?(s(),g("div",{key:0,class:x(["pointer-events-none select-none absolute left-110% backdrop-blur-8 top-50% translate-y--50% ws-nowrap z-10 px2 shadow-xl rounded border border-main transition duration-400 op0 group-hover:op100",e.activeBlocks.includes(l)?"text-primary":"text-main important-text-op-50"])},_((h=(m=t.meta)==null?void 0:m.slide)==null?void 0:h.title),3)):u("v-if",!0)])}),128))])]),c("div",be,[e.isColorSchemaConfigured?u("v-if",!0):(s(),k(e.IconButton,{key:0,title:e.isDark?"Switch to light mode theme":"Switch to dark mode theme",onClick:v[0]||(v[0]=t=>e.toggleDark())},{default:p(()=>[e.isDark?(s(),k(S,{key:0})):(s(),k(C,{key:1}))]),_:1},8,["title"]))])]),c("main",{class:"flex-1 h-full of-auto",style:Q(`grid-template-columns: repeat(auto-fit,minmax(${e.cardWidth}px,1fr))`),onScroll:e.checkActiveBlocks},[(s(!0),g(P,null,T(e.slides,(t,l)=>{var r;return s(),g("div",{key:t.no,ref_for:!0,ref:i=>e.blocks.set(l,i),class:x(["relative border-t border-main of-hidden flex gap-4 min-h-50 group",l===0?"pt5":""])},[c("div",Ce,[c("div",xe,_(l+1),1),d(e.IconButton,{class:"mr--3 op0 group-hover:op80",title:"Play in new tab",onClick:i=>e.openSlideInNewTab(e.getSlidePath(t,!1))},{default:p(()=>[d(y)]),_:2},1032,["onClick"]),(r=t.meta)!=null&&r.slide?(s(),k(e.IconButton,{key:0,class:"mr--3 op0 group-hover:op80",title:"Open in editor",onClick:i=>e.openInEditor(`${t.meta.slide.filepath}:${t.meta.slide.start}`)},{default:p(()=>[d(N)]),_:2},1032,["onClick"])):u("v-if",!0)]),c("div",we,[c("div",{class:"border rounded border-main overflow-hidden bg-main select-none h-max",onDblclick:i=>e.openSlideInNewTab(e.getSlidePath(t,!1))},[(s(),k(e.SlideContainer,{key:t.no,width:e.cardWidth,class:"pointer-events-none important:[&_*]:select-none"},{default:p(()=>[d(e.SlideWrapper,{"clicks-context":e.getClicksContext(t),route:t,"render-context":"overview"},null,8,["clicks-context","route"]),d(e.DrawingPreview,{page:t.no},null,8,["page"])]),_:2},1024))],40,Se),e.getSlideClicks(t)?(s(),k(e.ClicksSlider,{key:0,active:e.activeSlide===t,"clicks-context":e.getClicksContext(t),class:"w-full mt-2",onDblclick:i=>e.toggleRoute(t),onClick:i=>e.activeSlide=t},null,8,["active","clicks-context","onDblclick","onClick"])):u("v-if",!0)]),c("div",ye,[d(e.IconButton,{title:"Edit Note",class:x(["rounded-full w-9 h-9 text-sm",e.edittingNote===t.no?"important:op0":""]),onClick:i=>e.edittingNote=t.no},{default:p(()=>[d(f)]),_:2},1032,["class","onClick"])]),d(e.NoteEditable,{no:t.no,class:"max-w-250 w-250 text-lg rounded p3","auto-height":!0,highlight:e.activeSlide===t,editing:e.edittingNote===t.no,"clicks-context":e.getClicksContext(t),onDblclick:i=>e.edittingNote!==t.no?e.edittingNote=t.no:null,"onUpdate:editing":v[1]||(v[1]=i=>e.edittingNote=null),onMarkerClick:(i,m)=>e.onMarkerClick(i,m,t)},null,8,["no","highlight","editing","clicks-context","onDblclick","onMarkerClick"]),e.wordCounts[l]>0?(s(),g("div",Ne,_(e.wordCounts[l])+" words ",1)):u("v-if",!0)],2)}),128))],36),c("div",De,[c("div",Be,_(e.slides.length)+" slides · "+_(e.totalClicks+e.slides.length-1)+" clicks · "+_(e.totalWords)+" words ",1)])])}const Re=ae(ve,[["render",Ie],["__file","/Users/ashish/work/slidev_test/slidev/node_modules/@slidev/client/pages/overview.vue"]]);export{Re as default};
