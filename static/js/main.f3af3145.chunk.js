(this["webpackJsonppersonal-account"]=this["webpackJsonppersonal-account"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),s=(n(13),n(3)),i=n(2),o=(n(14),n(0)),r=function(e){var t=e.error,n=e.login,a=Object(c.useState)({name:"",password:""}),r=Object(s.a)(a,2),l=r[0],d=r[1];return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-md-7",children:Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("form",{className:"box",onSubmit:function(e){e.preventDefault(),n(l)},children:[Object(o.jsx)("h1",{children:"Login"}),""!==t?Object(o.jsx)("div",{className:"error",children:t}):"",Object(o.jsx)("p",{className:"text-muted",children:"Please enter your login and password!"}),Object(o.jsx)("input",{onChange:function(e){d(Object(i.a)(Object(i.a)({},l),{},{name:e.target.value}))},placeholder:"Username",type:"text",value:l.name}),Object(o.jsx)("input",{onChange:function(e){d(Object(i.a)(Object(i.a)({},l),{},{password:e.target.value}))},placeholder:"Password",type:"password",value:l.password}),Object(o.jsx)("button",{className:"btn-submit",type:"submit",children:"Login"})]})})})})})},l=n(8),d=(n(16),function(){var e=Object(c.useState)([{name:"John",phone:"8-999-999-99-99",id:0}]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({name:"",phone:"",id:0}),d=Object(s.a)(r,2),j=d[0],b=d[1],m=Object(c.useState)(""),u=Object(s.a)(m,2),h=u[0],O=u[1],p=Object(c.useState)("add"),x=Object(s.a)(p,2),f=x[0],v=x[1],N=Object(c.useState)(""),g=Object(s.a)(N,2),w=g[0],y=g[1];return Object(o.jsx)("div",{className:"vh-100",children:Object(o.jsx)("div",{className:"container py-5",children:Object(o.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:Object(o.jsx)("div",{className:"col col-xl-10",children:Object(o.jsx)("div",{className:"card bg-dark",children:Object(o.jsxs)("div",{className:"card-body p-5",children:[""!==w?Object(o.jsx)("div",{className:"error",children:w}):"",Object(o.jsxs)("form",{className:"d-flex justify-content-center align-items-center mb-4 form-contact",children:[Object(o.jsx)("div",{className:"form-outline flex-fill",children:Object(o.jsxs)("label",{className:"form-label col-6",htmlFor:"form1",children:[Object(o.jsx)("input",{className:"form-control col-6",id:"form1",onChange:function(e){b(Object(i.a)(Object(i.a)({},j),{},{name:e.target.value}))},placeholder:"Name",type:"text",value:j.name}),Object(o.jsx)("input",{className:"form-control col-6",id:"form2",onChange:function(e){b(Object(i.a)(Object(i.a)({},j),{},{phone:e.target.value}))},placeholder:"Phone number",type:"text",value:j.phone})]})}),"add"===f?Object(o.jsx)("button",{className:"btn btn-info ms-2",onClick:function(){j.name&&j.phone?(a([].concat(Object(l.a)(n),[Object(i.a)(Object(i.a)({},j),{},{id:Math.trunc(1e5*Math.random())})])),b({name:"",phone:"",id:0}),y("")):y("Name or phone shouldn't be empty")},type:"button",children:"Add"}):Object(o.jsx)("button",{className:"btn btn-info ms-2",onClick:function(){j.name&&j.phone?(n.forEach((function(e){e.id===j.id&&(e.name=j.name,e.phone=j.phone)})),b(Object(i.a)(Object(i.a)({},j),{},{name:"",phone:""})),y(""),v("add")):y("Name or phone shouldn't be empty")},type:"button",children:"Update"})]}),Object(o.jsx)("input",{className:"form-control search",id:"form3",onChange:function(e){O(e.target.value)},placeholder:"Search by name...",type:"text",value:h}),Object(o.jsx)("div",{className:"tab-content",id:"ex1-content",children:Object(o.jsx)("div",{"aria-labelledby":"ex1-tab-1",className:"tab-pane fade show active",id:"ex1-tabs-1",children:Object(o.jsx)("ul",{className:"list-group mb-0",children:n.filter((function(e){return""===h||h&&e.name.toLowerCase().includes(h.toLowerCase())?e:void 0})).map((function(e){return Object(o.jsxs)("li",{className:"list-group-item d-flex align-items-center border-0 mb-2 rounded",id:String(e.id),children:[Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("p",{children:e.name}),Object(o.jsx)("p",{children:e.phone})]}),Object(o.jsx)("div",{"aria-hidden":"true",className:"btn-item",id:"edit",onClick:function(t){return function(e,t){v("update"),b(t)}(0,e)}}),Object(o.jsx)("div",{"aria-hidden":"true",className:"btn-item",id:"delete",onClick:function(t){return c=e.id,void a(n.filter((function(e){return e.id!==c})));var c}})]},String(e.id))}))})})})]})})})})})})}),j=(n(17),[{name:"admin",password:"admin",id:0}]),b=function(){var e=Object(c.useState)({name:""}),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),b=l[0],m=l[1];return Object(o.jsx)("div",{className:"App",children:""!==n.name?Object(o.jsxs)("div",{className:"welcome",children:[Object(o.jsxs)("div",{className:"welcome-header",children:[Object(o.jsx)("button",{className:"welcome-btn",onClick:function(){a({name:""}),m("")},type:"button",children:"Logout"}),Object(o.jsxs)("h2",{className:"welcome-message",children:["Welcome, ",Object(o.jsx)("span",{children:n.name})]})]}),Object(o.jsx)(d,{})]}):Object(o.jsx)(r,{error:b,login:function(e){e.name===j[0].name&&e.password===j[0].password?a({name:e.name}):m("Username or password incorrect")}})})};Object(a.render)(Object(o.jsx)(c.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.f3af3145.chunk.js.map