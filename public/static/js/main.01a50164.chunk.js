(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(16),a=n.n(r),i=(n(22),n(11)),l=n(9),o=n(8),j=n(2),u=n(1);function b(){var e=Object(j.f)().slug,t=Object(c.useState)(),n=Object(l.a)(t,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(e){return e.json()})).then((function(e){r(e),console.log(e)}))}),[e]),Object(u.jsx)(u.Fragment,{children:s&&Object(u.jsxs)("div",{className:"w-3/12 m-auto bg-purple-100 mt-4 shadow-2xl flex justify-center flex-col items-center",children:[Object(u.jsx)("h3",{className:"text-2xl text-green-900 uppercase",children:s.name}),Object(u.jsxs)("div",{className:"flex justify-center",children:[Object(u.jsx)("img",{className:"w-48",src:s.sprites.front_shiny,alt:s.sprites.front_shiny}),Object(u.jsx)("img",{className:"w-48",src:s.sprites.back_shiny,alt:s.sprites.back_shiny})]})]})})}n(32);function d(e){var t=e.pokemon;return Object(u.jsx)("div",{className:"flex flex-wrap p-4",children:t&&t.map((function(e){return Object(u.jsx)("li",{className:"text-sm px-3 m-1 bg-red-900 text-red-400 rounded-full",children:Object(u.jsx)(o.b,{to:"/about/".concat(e.idx),children:e.name})},e.idx)}))})}var f=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([]),a=Object(l.a)(r,2),f=a[0],x=a[1],m=Object(c.useState)(""),h=Object(l.a)(m,2),p=h[0],O=h[1];return Object(c.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon?offset=0").then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e,t){return Object(i.a)(Object(i.a)({},e),{},{idx:t+1})}));s(Object(i.a)(Object(i.a)({},e),{},{results:t}))}))}),[]),Object(c.useMemo)((function(){0!==p.length?x((function(){var e;return null===(e=n.results)||void 0===e?void 0:e.filter((function(e){return e.name.includes(p)}))})):x([])}),[n.results,p]),Object(u.jsxs)(o.a,{children:[Object(u.jsx)("header",{className:"border-b md:flex md:items-center md:justify-center p-4 pb-0 shadow-lg md:pb-4",children:Object(u.jsx)("div",{className:"flex items-center justify-center mb-4 md:mb-0",children:Object(u.jsx)("h1",{className:"leading-none text-2xl text-grey-darkest",children:Object(u.jsx)(o.b,{to:"/",className:"no-underline text-red-600 hover:text-black",children:"Pokemon"})})})}),Object(u.jsxs)(j.c,{children:[Object(u.jsxs)(j.a,{exact:!0,path:"/",children:[Object(u.jsx)("div",{className:"w-full flex justify-center",children:Object(u.jsx)("input",{type:"text",onChange:function(e){return O(e.target.value)},placeholder:"Enter Pokemon here",className:"mt-10 p-2 border-blue-500 border-2"})}),n&&Object(u.jsx)(d,{pokemon:f})]}),Object(u.jsx)(j.a,{path:"/about/:slug",children:Object(u.jsx)(b,{})})]})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),x()}},[[33,1,2]]]);
//# sourceMappingURL=main.01a50164.chunk.js.map