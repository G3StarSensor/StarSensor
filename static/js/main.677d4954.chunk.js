(this["webpackJsonpsistema-de-prueba"]=this["webpackJsonpsistema-de-prueba"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n,s=a(2),c=a.n(s),i=a(11),r=a.n(i),d=a(3),o=a(8),j=a(1),l=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o.a,{color:"red",size:"80px",className:"animate__animated animate__pulse animate__infinite",style:{border:"2px solid red",borderRadius:"100%"}}),Object(j.jsx)("span",{className:"danger",children:" [(Bomber|1200)]"})]}):Object(j.jsx)(o.a,{color:"rgba(0, 38, 255, 0.842)",size:"80px",style:{border:"2px solid blue",borderRadius:"100%"}})},b=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?Object(j.jsx)("span",{className:"alertDanger animate__animated animate__pulse animate__infinite\tinfinite",children:"\xa1Naves rebeldes detectadas!"}):Object(j.jsx)("span",{className:"alertOk",children:"No se han detectado naves rebeldes"})},u=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?Object(j.jsx)("span",{className:"alertDanger animate__animated animate__pulse animate__infinite\tinfinite",children:"\xa1Sensor [ 12375 ] defectuoso!"}):Object(j.jsx)("span",{className:"alertOk",children:"No hay sensores averiados"})},m=function(e){return Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{}),Object(j.jsx)("tbody",{children:e.map((function(e,t){return Object(j.jsx)("tr",{children:e.M<100?Object(j.jsxs)("td",{children:["S",t,": ",e.N," | ",e.M]}):Object(j.jsxs)("td",{className:"danger",children:["S",t,": ",e.N," | ",e.M]})},t)}))}),Object(j.jsx)("tfoot",{})]})},O=a(4),h=a(15),x=a(5),N=x.a.span(n||(n=Object(O.a)(["\n  font-family:arial;\n  font-size:1.8rem;\n  border-radius: 100%;\n  box-shadow: none;\n"]))),p=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e&&Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("button",{className:"btnLaunchRay animate__animated animate__backInUp",children:[Object(j.jsx)(h.a,{className:"animate__animated animate__pulse animate__infinite infinite"})," ",Object(j.jsx)(N,{children:"Lanzar Rayo"})]})})};function g(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=(t[1],Object(s.useState)(!1)),c=Object(d.a)(n,2),i=c[0],r=(c[1],Object(s.useState)(!1)),o=Object(d.a)(r,2),O=o[0],h=(o[1],function(){return Math.round(120*Math.random())}),x=Object(s.useState)([{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()},{N:"-",M:h()}]),N=Object(d.a)(x,2),g=N[0],M=(N[1],Object(s.useState)("00-00-00 00:00:00")),_=Object(d.a)(M,2);_[0],_[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"dash",children:[Object(j.jsx)("div",{className:"alarmNaveFantasma",children:l(a)}),Object(j.jsx)("div",{className:"last-minute-data",children:m(g)}),Object(j.jsxs)("div",{className:"alerts",children:[Object(j.jsx)("div",{children:b(i)}),Object(j.jsx)("div",{children:u(O)})]}),a&&p(!0),Object(j.jsx)("div",{id:"chart_div"})]})})}a(23);var M,_,v,f=a.p+"static/media/logo.8e7e9267.jpg",y=x.a.div(M||(M=Object(O.a)(["\n  width: 100%;\n  height: 10vh;\n  background-color: black;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding:0px 10%;\n  /* border-bottom: 2px solid rgb(90, 90, 90); */\n"]))),S=x.a.div(_||(_=Object(O.a)(["\n  background-color: #333;\n  padding: 10px;\n  border-radius: 5px;\n  width: 180px;\n  text-align: center;\n"]))),k=x.a.img(v||(v=Object(O.a)(["\n    display: inline-block;\n    height: 80%;\n    border-radius: 0px 50px 50px 50px;\n"])));function w(){var e=Object(s.useState)("00-00-00 00:00:00"),t=Object(d.a)(e,2),a=t[0],n=t[1];return setInterval((function(){return n(function(){var e=new Date,t=e.getFullYear(),a=e.getMonth(),n=e.getDay(),s=e.getHours(),c=e.getMinutes(),i=e.getSeconds();return"".concat(t,"-").concat(a,"-").concat(n," ").concat(s,":").concat(c,":").concat(i)}())}),1e3),Object(j.jsxs)(y,{children:[Object(j.jsx)(k,{src:f}),Object(j.jsx)(S,{children:a}),Object(j.jsx)(k,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"})]})}r.a.render(Object(j.jsxs)(c.a.StrictMode,{children:[Object(j.jsx)(w,{}),Object(j.jsx)("div",{className:"body",children:Object(j.jsx)(g,{})})]}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.677d4954.chunk.js.map