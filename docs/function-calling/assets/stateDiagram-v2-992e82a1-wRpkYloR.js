import{p as J,d as B,s as Q,D as m,a as X,S as Z,b as F,c as I}from"./styles-f80da881-DaDeD7sZ.js";import{G as tt}from"./graph-fe24fab6-DAI3srfq.js";import{l as E,c as g,h as x,v as et,i as ot,j as w}from"./slidev/13-BqqWEWhQ.js";import{r as st}from"./index-fc479858-C0JIBrU0.js";import"./modules/vue-CIG9kCyc.js";import"./index-CM6VceB8.js";import"./modules/shiki-D1dHQdM7.js";import"./lz-string-6c_MLJfo.js";import"./modules/file-saver-LUhfcczZ.js";import"./slidev/default-ox3MpM54.js";import"./slidev/context-B39MKqpS.js";import"./layout-163b9689-DvRPyBiG.js";import"./clone-9ea6bfeb-DI_1s-IB.js";import"./edges-ce5cfb7c-CrNX-4h7.js";import"./createText-b70fe78a-lUZWXGA5.js";import"./line-87f517ef-B5jwxtKy.js";import"./array-b7dcf730-BKyUJesY.js";import"./path-39bad7e2-CbwjOpE9.js";const h="rect",C="rectWithTitle",nt="start",it="end",ct="divider",rt="roundedWithTitle",lt="note",at="noteGroup",_="statediagram",dt="state",Et=`${_}-${dt}`,H="transition",St="note",pt="note-edge",Tt=`${H} ${pt}`,_t=`${_}-${St}`,ut="cluster",Dt=`${_}-${ut}`,bt="cluster-alt",ft=`${_}-${bt}`,U="parent",V="note",At="state",N="----",ht=`${N}${V}`,M=`${N}${U}`,Y="fill:none",W="fill: #333",z="c",j="text",q="normal";let y={},d=0;const yt=function(t){const n=Object.keys(t);for(const e of n)t[e]},gt=function(t,n){return n.db.extract(n.db.getRootDocV2()),n.db.getClasses()};function $t(t){return t==null?"":t.classes?t.classes.join(" "):""}function R(t="",n=0,e="",i=N){const c=e!==null&&e.length>0?`${i}${e}`:"";return`${At}-${t}${c}-${n}`}const A=(t,n,e,i,c,r)=>{const o=e.id,u=$t(i[o]);if(o!=="root"){let p=h;e.start===!0&&(p=nt),e.start===!1&&(p=it),e.type!==m&&(p=e.type),y[o]||(y[o]={id:o,shape:p,description:w.sanitizeText(o,g()),classes:`${u} ${Et}`});const s=y[o];e.description&&(Array.isArray(s.description)?(s.shape=C,s.description.push(e.description)):s.description.length>0?(s.shape=C,s.description===o?s.description=[e.description]:s.description=[s.description,e.description]):(s.shape=h,s.description=e.description),s.description=w.sanitizeTextOrArray(s.description,g())),s.description.length===1&&s.shape===C&&(s.shape=h),!s.type&&e.doc&&(E.info("Setting cluster for ",o,G(e)),s.type="group",s.dir=G(e),s.shape=e.type===X?ct:rt,s.classes=s.classes+" "+Dt+" "+(r?ft:""));const T={labelStyle:"",shape:s.shape,labelText:s.description,classes:s.classes,style:"",id:o,dir:s.dir,domId:R(o,d),type:s.type,padding:15};if(T.centerLabel=!0,e.note){const l={labelStyle:"",shape:lt,labelText:e.note.text,classes:_t,style:"",id:o+ht+"-"+d,domId:R(o,d,V),type:s.type,padding:15},a={labelStyle:"",shape:at,labelText:e.note.text,classes:s.classes,style:"",id:o+M,domId:R(o,d,U),type:"group",padding:0};d++;const D=o+M;t.setNode(D,a),t.setNode(l.id,l),t.setNode(o,T),t.setParent(o,D),t.setParent(l.id,D);let S=o,b=l.id;e.note.position==="left of"&&(S=l.id,b=o),t.setEdge(S,b,{arrowhead:"none",arrowType:"",style:Y,labelStyle:"",classes:Tt,arrowheadStyle:W,labelpos:z,labelType:j,thickness:q})}else t.setNode(o,T)}n&&n.id!=="root"&&(E.trace("Setting node ",o," to be child of its parent ",n.id),t.setParent(o,n.id)),e.doc&&(E.trace("Adding nodes children "),xt(t,e,e.doc,i,c,!r))},xt=(t,n,e,i,c,r)=>{E.trace("items",e),e.forEach(o=>{switch(o.stmt){case F:A(t,n,o,i,c,r);break;case m:A(t,n,o,i,c,r);break;case Z:{A(t,n,o.state1,i,c,r),A(t,n,o.state2,i,c,r);const u={id:"edge"+d,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:Y,labelStyle:"",label:w.sanitizeText(o.description,g()),arrowheadStyle:W,labelpos:z,labelType:j,thickness:q,classes:H};t.setEdge(o.state1.id,o.state2.id,u,d),d++}break}})},G=(t,n=I)=>{let e=n;if(t.doc)for(let i=0;i<t.doc.length;i++){const c=t.doc[i];c.stmt==="dir"&&(e=c.value)}return e},Ct=async function(t,n,e,i){E.info("Drawing state diagram (v2)",n),y={},i.db.getDirection();const{securityLevel:c,state:r}=g(),o=r.nodeSpacing||50,u=r.rankSpacing||50;E.info(i.db.getRootDocV2()),i.db.extract(i.db.getRootDocV2()),E.info(i.db.getRootDocV2());const p=i.db.getStates(),s=new tt({multigraph:!0,compound:!0}).setGraph({rankdir:G(i.db.getRootDocV2()),nodesep:o,ranksep:u,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});A(s,void 0,i.db.getRootDocV2(),p,i.db,!0);let T;c==="sandbox"&&(T=x("#i"+n));const l=c==="sandbox"?x(T.nodes()[0].contentDocument.body):x("body"),a=l.select(`[id="${n}"]`),D=l.select("#"+n+" g");await st(D,s,["barb"],_,n);const S=8;et.insertTitle(a,"statediagramTitleText",r.titleTopMargin,i.db.getDiagramTitle());const b=a.node().getBBox(),L=b.width+S*2,P=b.height+S*2;a.attr("class",_);const O=a.node().getBBox();ot(a,P,L,r.useMaxWidth);const v=`${O.x-S} ${O.y-S} ${L} ${P}`;E.debug(`viewBox ${v}`),a.attr("viewBox",v);const K=document.querySelectorAll('[id="'+n+'"] .edgeLabel .label');for(const $ of K){const k=$.getBBox(),f=document.createElementNS("http://www.w3.org/2000/svg",h);f.setAttribute("rx",0),f.setAttribute("ry",0),f.setAttribute("width",k.width),f.setAttribute("height",k.height),$.insertBefore(f,$.firstChild)}},Rt={setConf:yt,getClasses:gt,draw:Ct},qt={parser:J,db:B,renderer:Rt,styles:Q,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,B.clear()}};export{qt as diagram};