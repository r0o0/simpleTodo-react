(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(47)},24:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(15),c=n.n(r),u=(n(24),n(25),n(5)),l=n.n(u),i=n(16),s=n(1),d=n(3),m=n(17),f=n(4),p=n.n(f),b="https://todo-react-7293.firebaseio.com/todos",g=function(e){p.a.get("".concat(b,".json")).then(function(t){if(console.log("get todo",t.data),200===t.status){var n=t.data;e(n)}}).catch(function(e){console.error(e)})},v=function(e){console.log(e),p.a.delete("".concat(b,"/").concat(e,".json")).then(function(e){console.log("delete todo",e.data)}).catch(function(e){console.error(e)})},h=function(e){p.a.post("".concat(b,".json"),e).then(function(e){console.log("post todo",e.data)}).catch(function(e){console.error(e)})},y=function(e,t){p.a.put("".concat(b,"/").concat(e,".json"),t).then(function(e){console.log("update todo",e.data)}).catch(function(e){console.error(e)})},j=function(e,t){null!==e&&e.classList.add(t)},E=function(e,t){if(null!==e){var n=e.classList;n.contains(t)&&n.remove(t)}};n(44);var O=function(e){var t=e.submitState,n=Object(o.useReducer)(function(e,t){return Object(m.a)({},e,t)},{todo:null,category:null,isDone:!1}),r=Object(s.a)(n,2),c=r[0],u=r[1],l=Object(o.useState)(!1),i=Object(s.a)(l,2),f=i[0],p=i[1],b=Object(o.useState)(!1),g=Object(s.a)(b,2),v=g[0],y=g[1],O=Object(o.useState)(null),_=Object(s.a)(O,2),w=_[0],S=_[1],N=Object(o.useState)(null),k=Object(s.a)(N,2),C=k[0],x=k[1],D=function(e){var t=e.target.id;p(!1),u(Object(d.a)({},t,e.target.value)),console.log("handle change",c),"todo"===t&&S(!1),"category"===t&&x(!1),e.target.value<=0&&y(!1)},q=Object(o.useCallback)(function(e,t){console.log("%c handle Error","background: red; color: white",e,t),t.length<=0?("todo"===e&&S(!0),"category"===e&&x(!0),v&&y(!1)):("todo"===e&&S(!1),"category"===e&&x(!1))},[v]),B=function(e){var t=e.target.id;p(!1),u(Object(d.a)({},t,e.target.value)),null!==c.todo&&null!==c.category&&("todo"===t&&c.todo.length<=0&&S(!0),"category"===t&&c.todo.length<=0&&x(!0)),e.target.value<=0&&y(!1)},T=function(e){13===e.keyCode&&"todo"===e.target.id&&e.preventDefault(),13!==e.keyCode&&9!==e.keyCode||q(e.target.id,e.target.value)};return Object(o.useEffect)(function(){var e=document.querySelector("#todo"),t=document.querySelector("#category");console.log("%c effect","background: blue; color: white;","\n","ready to submit:",v,"\n","error states:",w,C,"\n","state:",c),w?j(e,"error__input"):E(e,"error__input"),C?j(t,"error__input"):E(t,"error__input"),null!==w&&null!==C&&(w||C||y(!0))},[c,w,C,v]),Object(o.useMemo)(function(){var e=document.querySelector("#todo"),t=document.querySelector("#category");!v&&f&&((null===e.value||c.todo<=0)&&(q(e.id,e.value),y(!1)),(null===t.value||c.category<=0)&&(q(t.id,t.value),y(!1)))},[v,f,q,c]),a.a.createElement("form",{className:"form__todo",onSubmit:function(e){return function(e){e.preventDefault(),p(!0),v&&(h(c),t(!0),document.querySelector("form").reset(),y(!1))}(e)}},a.a.createElement("div",{className:"inputBox"},a.a.createElement("label",null,"Todo",a.a.createElement("input",{id:"todo",className:"inputBox__field",type:"input",onChange:function(e){return D(e)},onKeyDown:function(e){return T(e)},onBlur:function(e){return B(e)},autoComplete:"off"})),w?a.a.createElement("p",{className:"error__msg"},"Please enter todo."):null),a.a.createElement("div",{className:"inputBox"},a.a.createElement("label",null,"Category",a.a.createElement("input",{id:"category",type:"input",className:"inputBox__field",onChange:function(e){return D(e)},onKeyDown:function(e){return T(e)},onBlur:function(e){return B(e)},autoComplete:"off"})),C?a.a.createElement("p",{className:"error__msg"},"Please enter category."):null),a.a.createElement("input",{type:"submit",value:"Submit"}))};n(45);var _=function(e){var t=e.submitState,n=Object(o.useState)(null),r=Object(s.a)(n,2),c=r[0],u=r[1],l=Object(o.useState)(!0),i=Object(s.a)(l,2),d=i[0],m=i[1],f=Object(o.useRef)(null),p=Object(o.useRef)(null),b=function(){E(f.current.querySelector(".modal--wrapper"),"show--modal"),setTimeout(function(){return j(f.current.querySelector(".modal--wrapper"),"hide--modal")},100),setTimeout(function(){return E(f.current,"show")},400),E(p.current,"hide");var e=document.querySelector("form");null===c&&e.reset(),c&&t(c),m(!0)};return Object(o.useEffect)(function(){c&&b()},[c]),a.a.createElement(o.Fragment,null,a.a.createElement("input",{ref:p,className:"btn--show",type:"button",value:"Add todo",onClick:function(){return E(f.current.querySelector(".modal--wrapper"),"hide--modal"),j(f.current,"show"),j(f.current.querySelector(".modal--wrapper"),"show--modal"),j(p.current,"hide"),m(!1),void u(!1)}}),a.a.createElement("div",{ref:f,className:"modal"},a.a.createElement("div",{className:"modal--wrapper"},a.a.createElement(O,{submitState:function(e){return u(e)},isModalClosed:d}),a.a.createElement("input",{className:"btn--close",type:"button",value:"Close",onClick:function(){return b()}}))))};n(46);var w=function(){var e=Object(o.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)(!1),u=Object(s.a)(c,2),d=u[0],m=u[1],f=Object(o.useState)(!1),p=Object(s.a)(f,2),b=p[0],h=p[1],j=Object(o.useState)(null),E=Object(s.a)(j,2),O=E[0],w=E[1],S=function(e,t){return Object.assign(e,t)};return Object(o.useEffect)(function(){var e=function(){var e=Object(i.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(w);case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();setTimeout(function(){return e()},200),r(!1),m(!1),h(!1)},[n,d,b]),a.a.createElement("div",null,a.a.createElement("h1",{className:"title"},"Todos"),a.a.createElement("ul",{className:"todolist"},null!==O?Object.keys(O).map(function(e){var t=O[e];return a.a.createElement("li",{className:O[e].isDone?"todolist__list todo--done":"todolist__list",key:e},a.a.createElement("div",{className:"todolist__title"},a.a.createElement("h2",{className:"todolist__category text"},t.category),a.a.createElement("p",{className:"todolist__text text"},t.todo)),a.a.createElement("input",{className:"todolist__checkbox",type:"checkbox",checked:O[e].isDone,onChange:function(t){return function(e,t){var n=O[t];if(O[t].isDone){var o=S(n,{isDone:!1});y(t,o)}else{var a=S(n,{isDone:!0});y(t,a)}h(!0)}(0,e)}}),a.a.createElement("input",{className:"btn--delete",type:"button",value:"Delete",onClick:function(){return function(e){r(!0),v(e)}(e)}}))}):null),a.a.createElement(_,{submitState:function(e){return m(e)}}))};var S=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"}),a.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.fd928fd3.chunk.js.map