import{a as h}from"./array-b7dcf730-BKyUJesY.js";import{w as v,c as o}from"./path-39bad7e2-CbwjOpE9.js";import{q as d}from"./slidev/13-BThSvJR1.js";function w(t){return t[0]}function b(t){return t[1]}function L(t,u){var s=o(!0),f=null,l=d,r=null,m=v(e);t=typeof t=="function"?t:t===void 0?w:o(t),u=typeof u=="function"?u:u===void 0?b:o(u);function e(n){var i,g=(n=h(n)).length,p,c=!1,a;for(f==null&&(r=l(a=m())),i=0;i<=g;++i)!(i<g&&s(p=n[i],i,n))===c&&((c=!c)?r.lineStart():r.lineEnd()),c&&r.point(+t(p,i,n),+u(p,i,n));if(a)return r=null,a+""||null}return e.x=function(n){return arguments.length?(t=typeof n=="function"?n:o(+n),e):t},e.y=function(n){return arguments.length?(u=typeof n=="function"?n:o(+n),e):u},e.defined=function(n){return arguments.length?(s=typeof n=="function"?n:o(!!n),e):s},e.curve=function(n){return arguments.length?(l=n,f!=null&&(r=l(f)),e):l},e.context=function(n){return arguments.length?(n==null?f=r=null:r=l(f=n),e):f},e}export{L as l};
