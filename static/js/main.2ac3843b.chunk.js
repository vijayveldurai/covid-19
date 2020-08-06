(this["webpackJsonpreact-note"]=this["webpackJsonpreact-note"]||[]).push([[0],{56:function(e,t,a){e.exports=a(69)},61:function(e,t,a){},63:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),s=(a(61),a(32)),l=a.n(s),i=a(41),d=a(33),u=(a(63),a(112)),m=a(125),p=a(129),v=a(126),h=a(127),E=a(116),f=a(114),y=a(128),g=a(29),b=a.n(g),w=Object(u.a)((function(e){return{root:{padding:e.spacing(2)}}}));var C=function(e){var t=e.country,a=e.cases,n=e.newCases;return w(),r.a.createElement(y.a,null,r.a.createElement(f.a,{variant:"caption"},"Total Cases (",t,")"),r.a.createElement(f.a,{variant:"h3",style:{color:"#d63d59"}},r.a.createElement(b.a,{start:0,end:a,duration:2,separator:","})),r.a.createElement(f.a,{variant:"subtitle1",gutterBottom:!0,style:{color:"#d63d59"}},"+",r.a.createElement(b.a,{start:0,end:n,duration:2,separator:","})))},x=Object(u.a)((function(e){return{root:{display:"flex",justifyContent:"center",padding:"40px 20px"},mainImage:{width:200}}}));var j=function(){var e=x();return r.a.createElement("div",{className:e.root},r.a.createElement("img",{src:"https://i.ibb.co/7QpKsCX/image.png",className:e.mainImage}))},O=a(117),S=a(118),k=Object(u.a)((function(e){return{cardStyle:{padding:e.spacing(1),borderRadius:22,boxShadow:"1px 1px 10px 2px #0000001c"}}}));var R=function(e){var t=e.title,a=e.total,n=e.newCases,c=e.style,o=k();return r.a.createElement(E.a,{item:!0,xs:12,sm:4},r.a.createElement(O.a,{className:o.cardStyle,style:c},r.a.createElement(S.a,null,r.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0},t),r.a.createElement(f.a,{variant:"h4",component:"h2"},r.a.createElement(b.a,{start:0,end:a,duration:2,separator:","})),r.a.createElement(f.a,{color:"textSecondary"},"+",n))))},D=a(120),W=a(124),N=a(123),B=a(119),I=a(121),T=a(122),A=a(71),J=Object(u.a)((function(e){return{root:{marginTop:e.spacing(2)}}}));var U=function(e){var t=e.data.sort((function(e,t){return e.cases>t.cases?-1:1})),a=J();return r.a.createElement("div",{style:{marginTop:30}},r.a.createElement(f.a,{variant:"h4"},"Cases overview"),r.a.createElement(B.a,{component:A.a,className:a.root},r.a.createElement(D.a,{"aria-label":"caption table"},r.a.createElement("caption",null,"Covid-19 data sourced from Worldometers"),r.a.createElement(I.a,null,r.a.createElement(T.a,null,r.a.createElement(N.a,null),r.a.createElement(N.a,null,"Countries"),r.a.createElement(N.a,{align:"right"},"Total Cases"),r.a.createElement(N.a,{align:"right"},"Deaths"),r.a.createElement(N.a,{align:"right"},"Recovered"),r.a.createElement(N.a,{align:"right"},"Tests"))),r.a.createElement(W.a,null,t.map((function(e){return r.a.createElement(T.a,{key:e.country},r.a.createElement(N.a,null,r.a.createElement("img",{src:e.countryInfo.flag,width:24})),r.a.createElement(N.a,{component:"th",scope:"row"},e.country),r.a.createElement(N.a,{align:"right"},r.a.createElement(f.a,{variant:"body-1",component:"p"},e.cases),r.a.createElement(f.a,{variant:"caption",component:"p",color:"textSecondary"},"+",e.todayCases)),r.a.createElement(N.a,{align:"right"},r.a.createElement(f.a,{variant:"body-1",component:"p"},e.deaths),r.a.createElement(f.a,{variant:"caption",component:"p",color:"textSecondary"},"+",e.todayDeaths)),r.a.createElement(N.a,{align:"right"},r.a.createElement(f.a,{variant:"body-1",component:"p"},e.recovered),r.a.createElement(f.a,{variant:"caption",component:"p",color:"textSecondary"},"+",e.todayRecovered)),r.a.createElement(N.a,{align:"right"},e.tests))}))))))},z=Object(u.a)((function(e){return{root:{padding:e.spacing(2)},selectStyle:{fontSize:24}}}));var K=function(){var e=z(),t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)("worldwide"),u=Object(d.a)(s,2),f=u[0],y=u[1],g=Object(n.useState)({}),b=Object(d.a)(g,2),w=b[0],x=b[1],O=Object(n.useState)([]),S=Object(d.a)(O,2),k=S[0],D=S[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){x({totalCases:e.cases,active:e.active,deaths:e.deaths,recovered:e.recovered,todayCases:e.todayCases,todayRecovered:e.todayRecovered,todayDeaths:e.todayDeaths,lastUpdate:e.updated})}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}}));o(t),D(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var W=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),y(a),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){x({totalCases:e.cases,active:e.active,deaths:e.deaths,recovered:e.recovered,todayCases:e.todayCases,todayRecovered:e.todayRecovered,todayDeaths:e.todayDeaths,lastUpdate:e.updated})}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(m.a,{maxWidth:"md"},r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(v.a,{variant:"filled",fullWidth:!0,style:{marginBottom:12}},r.a.createElement(h.a,{className:e.selectStyle,variant:"outlined",onChange:W,value:f},r.a.createElement(p.a,{value:"worldwide",name:"Worldwide"},"Worldwide"),c.map((function(e){return r.a.createElement(p.a,{value:e.value,name:e.name},e.name)}))))),r.a.createElement(E.a,{item:!0,xs:12,sm:6},w.totalCases?r.a.createElement(C,{country:f,cases:w.totalCases,newCases:w.todayCases}):null)),w.totalCases?r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(R,{style:{background:"#ffa5b1"},title:"Deaths",total:w.deaths,newCases:w.todayDeaths}),r.a.createElement(R,{style:{background:"#9ee8d7"},title:"Recovered",total:w.recovered,newCases:w.todayRecovered}),r.a.createElement(R,{style:{background:"#c3d6ff"},title:"Active Cases",total:w.active,newCases:w.todayCases})):null,r.a.createElement(U,{data:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.2ac3843b.chunk.js.map