import{d as ne,e as oe,_ as le,f as ie,g as ae}from"../modules/unplugin-icons-jwRo-HiM.js";import{d as X,a7 as se,a8 as ce,t as B,a9 as re,D as K,C as de,a0 as ue,n as G,A as c,o as i,c as w,i as S,h as R,aa as me,ab as pe,b,j as ve,J as fe,y as O,M as he,ac as ge,e as s,F as L,ad as P,k as N,g as T,x as y,l as _}from"../modules/vue-BXiNn49O.js";import{u as ke,a as _e,i as be,b as U,t as xe,s as ye,c as we,C as j,g as q,p as Ce}from"../index-DcTyVBU-.js";import{u as $e,S as Se,_ as De,a as Me}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-B-hdHEdj.js";import{_ as z}from"./IconButton.vue_vue_type_script_setup_true_lang-DTv_YPtl.js";import{_ as Ee,C as He}from"./ClicksSlider-DaWbgkN-.js";import"../modules/shiki-CFUWKxDT.js";const Ne=["placeholder"],Te=X({__name:"NoteEditable",props:{no:{type:Number,required:!0},class:{default:""},editing:{default:!1},style:{default:()=>({})},placeholder:{default:"No notes for this slide"},clicksContext:{type:Object},highlight:{default:!0},autoHeight:{default:!1}},emits:["update:editing","markerDblclick","markerClick"],setup(C,{emit:A}){const o=C,x=A,r=se(o,"editing",x,{passive:!0}),{info:v,update:D}=$e(ce(o,"no")),f=B("");let M;const{ignoreUpdates:g}=re(f,u=>{if(!r.value)return;const m=o.no;clearTimeout(M),M=setTimeout(()=>{D({note:u},m)},500)});K(()=>{var u;return(u=v.value)==null?void 0:u.note},(u="")=>{r.value||(clearTimeout(M),g(()=>{f.value=u}))},{immediate:!0,flush:"sync"});const d=B(),k=B();de(()=>{var u;r.value&&((u=d.value)==null||u.focus())}),ue(d,()=>{r.value=!1});function I(){!o.autoHeight||!d.value||!r.value||d.value.scrollHeight>d.value.clientHeight&&(d.value.style.height=`${d.value.scrollHeight}px`)}return K([f,r],()=>{G(()=>{I()})},{flush:"post",immediate:!0}),(u,m)=>{var V;return c(r)?me((i(),b("textarea",{key:1,ref_key:"inputEl",ref:d,"onUpdate:modelValue":m[2]||(m[2]=h=>f.value=h),class:S(["prose resize-none overflow-auto outline-none bg-transparent block border-primary border-2",o.class]),style:R([{"line-height":"1.75"},[o.style,k.value!=null?{height:`${k.value}px`}:{}]]),placeholder:C.placeholder,onKeydown:m[3]||(m[3]=ve(h=>r.value=!1,["esc"]))},null,46,Ne)),[[pe,f.value]]):(i(),w(Ee,{key:0,class:S(["border-transparent border-2",[o.class,f.value?"":"opacity-25 italic select-none"]]),style:R(o.style),note:f.value||C.placeholder,"note-html":(V=c(v))==null?void 0:V.noteHTML,"clicks-context":C.clicksContext,"auto-scroll":!C.autoHeight,highlight:o.highlight,onMarkerClick:m[0]||(m[0]=(h,$)=>x("markerClick",h,$)),onMarkerDblclick:m[1]||(m[1]=(h,$)=>x("markerDblclick",h,$))},null,8,["class","style","note","note-html","clicks-context","auto-scroll","highlight"]))}}}),Be={class:"h-screen w-screen of-hidden flex"},Ie={class:"grid grid-rows-[auto_max-content] border-r border-main select-none max-h-full h-full"},Ve={class:"relative"},We={class:"absolute left-0 top-0 bottom-0 w-200 flex flex-col flex-auto items-end group p2 gap-1 max-h-full of-x-visible of-y-auto",style:{direction:"rtl"}},ze=["onClick"],Ae={p2:"",border:"t main"},Oe={class:"select-none w-13 text-right my4 flex flex-col gap-1 items-end"},Re={class:"text-3xl op20 mb2"},Fe={class:"flex flex-col gap-2 my5"},Ke=["onDblclick"],Le={class:"py3 mt-0.5 mr--8 ml--4 op0 transition group-hover:op100"},Pe={key:0,class:"select-none absolute bottom-0 right-0 bg-main rounded-tl p2 op35 text-xs"},Ue={class:"absolute top-0 right-0 px3 py1.5 border-b border-l rounded-lb bg-main border-main select-none"},je={class:"text-xs op50"},J=450,tt=X({__name:"overview",setup(C){ke({title:`Overview - ${ye}`});const{openInEditor:A,slides:o}=_e(),x=fe(new Map),r=B([]),v=B(null),D=O(()=>o.value.map(t=>{var e,l;return m(((l=(e=t.meta)==null?void 0:e.slide)==null?void 0:l.note)||"")})),f=O(()=>D.value.reduce((t,e)=>t+e,0)),M=O(()=>o.value.map(t=>I(t)).reduce((t,e)=>t+e,0)),g=he(),d=new WeakMap;function k(t){return d.has(t)||d.set(t,we(t,j)),d.get(t)}function I(t){var e,l;return((e=t.meta)==null?void 0:e.clicks)||((l=k(t))==null?void 0:l.total)}function u(t){g.value===t?g.value=void 0:g.value=t}function m(t){var e;return((e=t.match(/[\w`'\-]+/g))==null?void 0:e.length)||0}function V(t){const e=t.getBoundingClientRect(),l=20;return e.top>=0-l&&e.left>=0-l&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)+l&&e.right<=(window.innerWidth||document.documentElement.clientWidth)+l}function h(){const t=[];Array.from(x.entries()).forEach(([e,l])=>{V(l)&&t.push(e)}),r.value=t}function $(t){const e=document.createElement("a");e.target="_blank",e.href=Ce+t.slice(1),e.click()}function Q(t){const e=x.get(t);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function Y(t,e,l){const E=k(l);E.current===e?E.current=j:E.current=e,t.preventDefault()}return ge(()=>{G(()=>{h()})}),(t,e)=>{const l=ne,E=oe,Z=le,ee=ie,te=ae;return i(),b("div",Be,[s("nav",Ie,[s("div",Ve,[s("div",We,[(i(!0),b(L,null,P(c(o),(n,p)=>{var H,a,W,F;return i(),b("div",{key:n.no,class:"relative",style:{direction:"ltr"}},[s("button",{class:S(["relative transition duration-300 w-8 h-8 rounded hover:bg-active hover:op100",r.value.includes(p)?"op100 text-primary bg-gray:5":"op20"]),onClick:qe=>Q(p)},[s("div",null,y(p+1),1)],10,ze),(a=(H=n.meta)==null?void 0:H.slide)!=null&&a.title?(i(),b("div",{key:0,class:S(["pointer-events-none select-none absolute left-110% backdrop-blur-8 top-50% translate-y--50% ws-nowrap z-10 px2 shadow-xl rounded border border-main transition duration-400 op0 group-hover:op100",r.value.includes(p)?"text-primary":"text-main important-text-op-50"])},y((F=(W=n.meta)==null?void 0:W.slide)==null?void 0:F.title),3)):T("v-if",!0)])}),128))])]),s("div",Ae,[c(be)?T("v-if",!0):(i(),w(z,{key:0,title:c(U)?"Switch to light mode theme":"Switch to dark mode theme",onClick:e[0]||(e[0]=n=>c(xe)())},{default:N(()=>[c(U)?(i(),w(l,{key:0})):(i(),w(E,{key:1}))]),_:1},8,["title"]))])]),s("main",{class:"flex-1 h-full of-auto",style:R(`grid-template-columns: repeat(auto-fit,minmax(${J}px,1fr))`),onScroll:h},[(i(!0),b(L,null,P(c(o),(n,p)=>{var H;return i(),b("div",{key:n.no,ref_for:!0,ref:a=>x.set(p,a),class:S(["relative border-t border-main of-hidden flex gap-4 min-h-50 group",p===0?"pt5":""])},[s("div",Oe,[s("div",Re,y(p+1),1),_(z,{class:"mr--3 op0 group-hover:op80",title:"Play in new tab",onClick:a=>$(c(q)(n,!1))},{default:N(()=>[_(Z)]),_:2},1032,["onClick"]),(H=n.meta)!=null&&H.slide?(i(),w(z,{key:0,class:"mr--3 op0 group-hover:op80",title:"Open in editor",onClick:a=>c(A)(`${n.meta.slide.filepath}:${n.meta.slide.start}`)},{default:N(()=>[_(ee)]),_:2},1032,["onClick"])):T("v-if",!0)]),s("div",Fe,[s("div",{class:"border rounded border-main overflow-hidden bg-main select-none h-max",onDblclick:a=>$(c(q)(n,!1))},[(i(),w(Me,{key:n.no,width:J,class:"pointer-events-none important:[&_*]:select-none"},{default:N(()=>[_(Se,{"clicks-context":k(n),route:n,"render-context":"overview"},null,8,["clicks-context","route"]),_(De,{page:n.no},null,8,["page"])]),_:2},1024))],40,Ke),I(n)?(i(),w(He,{key:0,active:g.value===n,"clicks-context":k(n),class:"w-full mt-2",onDblclick:a=>u(n),onClick:a=>g.value=n},null,8,["active","clicks-context","onDblclick","onClick"])):T("v-if",!0)]),s("div",Le,[_(z,{title:"Edit Note",class:S(["rounded-full w-9 h-9 text-sm",v.value===n.no?"important:op0":""]),onClick:a=>v.value=n.no},{default:N(()=>[_(te)]),_:2},1032,["class","onClick"])]),_(Te,{no:n.no,class:"max-w-250 w-250 text-lg rounded p3","auto-height":!0,highlight:g.value===n,editing:v.value===n.no,"clicks-context":k(n),onDblclick:a=>v.value!==n.no?v.value=n.no:null,"onUpdate:editing":e[1]||(e[1]=a=>v.value=null),onMarkerClick:(a,W)=>Y(a,W,n)},null,8,["no","highlight","editing","clicks-context","onDblclick","onMarkerClick"]),D.value[p]>0?(i(),b("div",Pe,y(D.value[p])+" words ",1)):T("v-if",!0)],2)}),128))],36),s("div",Ue,[s("div",je,y(c(o).length)+" slides · "+y(M.value+c(o).length-1)+" clicks · "+y(f.value)+" words ",1)])])}}});export{tt as default};