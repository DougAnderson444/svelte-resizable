import{S as j,i as A,s as F,e as h,c as f,a as m,d as a,b as G,g as R,L as Q,K as C,P as U,t as v,k as w,w as Z,h as g,m as D,x as ee,f as W,J as s,y as te,q as se,o as re,B as ne}from"../chunks/vendor-08d33ed2.js";function ae(z){let e,c,p;return{c(){e=h("div"),this.h()},l(r){e=f(r,"DIV",{class:!0}),m(e).forEach(a),this.h()},h(){G(e,"class","svlt-resizer svelte-1ar6pvq")},m(r,l){R(r,e,l),c||(p=Q(z[0].call(null,e)),c=!0)},p:C,i:C,o:C,d(r){r&&a(e),c=!1,p()}}}function ie(z){let e,c,p;function r(l){e=new U(l,{eventListenerOptions:{capture:!0},avoidPointerEvents:!1,start:(i,o)=>e.currentPointers.length===1?!1:(console.log({pointer:i,event:o}),c=i.clientX-l.getBoundingClientRect().left,p=i.clientY-l.getBoundingClientRect().top,o.preventDefault(),o.stopPropagation(),!0),move:(i,o,u)=>{u.stopPropagation(),x({pageX:e.currentPointers[0].pageX,pageY:e.currentPointers[0].pageY})},end:(i,o,u)=>{console.log("Drag ended")}});function x({pageX:i,pageY:o}){const u=l.parentNode.getBoundingClientRect();l.parentNode.style.width=i-c-u.left+"px",l.parentNode.style.height=o-p-u.top+"px"}}return[r]}class le extends j{constructor(e){super();A(this,e,ie,ae,F,{})}}function oe(z){let e,c,p,r,l,x,i,o,u,n,$,H,B,P,I,L,S,E,T,X,Y,y,M;return y=new le({}),{c(){e=h("h1"),c=v("Resize Demo"),p=w(),r=h("h2"),l=v("See: "),x=h("pre"),i=h("code"),o=v("./src/routes/index.svelte"),u=w(),n=h("div"),$=h("p"),H=v("Insert Resizer as child of the HTMLElement you wan to Resize."),B=w(),P=h("p"),I=v("Minimum width: "),L=v(b),S=w(),E=h("p"),T=v("Maximum height: "),X=v(O),Y=w(),Z(y.$$.fragment),this.h()},l(t){e=f(t,"H1",{});var d=m(e);c=g(d,"Resize Demo"),d.forEach(a),p=D(t),r=f(t,"H2",{});var k=m(r);l=g(k,"See: "),x=f(k,"PRE",{});var V=m(x);i=f(V,"CODE",{});var J=m(i);o=g(J,"./src/routes/index.svelte"),J.forEach(a),V.forEach(a),k.forEach(a),u=D(t),n=f(t,"DIV",{style:!0,class:!0});var _=m(n);$=f(_,"P",{});var K=m($);H=g(K,"Insert Resizer as child of the HTMLElement you wan to Resize."),K.forEach(a),B=D(_),P=f(_,"P",{});var q=m(P);I=g(q,"Minimum width: "),L=g(q,b),q.forEach(a),S=D(_),E=f(_,"P",{});var N=m(E);T=g(N,"Maximum height: "),X=g(N,O),N.forEach(a),Y=D(_),ee(y.$$.fragment,_),_.forEach(a),this.h()},h(){W(n,"--max-height",O+"px"),W(n,"min-width",b+"px"),G(n,"class","svelte-el9xpm")},m(t,d){R(t,e,d),s(e,c),R(t,p,d),R(t,r,d),s(r,l),s(r,x),s(x,i),s(i,o),R(t,u,d),R(t,n,d),s(n,$),s($,H),s(n,B),s(n,P),s(P,I),s(P,L),s(n,S),s(n,E),s(E,T),s(E,X),s(n,Y),te(y,n,null),M=!0},p:C,i(t){M||(se(y.$$.fragment,t),M=!0)},o(t){re(y.$$.fragment,t),M=!1},d(t){t&&a(e),t&&a(p),t&&a(r),t&&a(u),t&&a(n),ne(y)}}}let b=200,O=400;class pe extends j{constructor(e){super();A(this,e,null,oe,F,{})}}export{pe as default};