(this.webpackJsonpre=this.webpackJsonpre||[]).push([[0],{106:function(e,t,n){e.exports=n.p+"static/media/persik.4e1ec840.png"},193:function(e,t,n){e.exports=n(303)},294:function(e,t,n){},303:function(e,t,n){"use strict";n.r(t);n(194),n(220),n(222),n(223),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262);var a=n(0),r=n.n(a),c=n(66),o=n.n(c),i=n(22),l=n.n(i),s=n(67),u=n.n(s),m=n(99),p=n(49),d=n(109),f=n.n(d),h=n(108),b=n.n(h),E=(n(271),n(47)),g=n.n(E),v=n(48),w=n.n(v),k=n(103),A=n.n(k),j=n(68),O=n.n(j),y=n(100),_=n.n(y),x=n(102),K=n.n(x),V=n(101),N=n.n(V);l.a.send("VKWebAppShowNativeAds",{ad_format:"reward"}).then((function(e){return console.log(e.result)})).catch((function(e){return console.log(e)})),l.a.send("VKWebAppShowNativeAds",{ad_format:"interstitial"}).then((function(e){return console.log(e.result)})).catch((function(e){return console.log(e)}));var S=function(e){var t=e.id,n=(e.go,e.fetchedUser);e.werter;return r.a.createElement(g.a,{id:t},r.a.createElement(w.a,null,"Example"),n&&r.a.createElement(O.a,{title:"User Data Fetched with VK Bridge"},r.a.createElement(_.a,{before:n.photo_200?r.a.createElement(N.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),r.a.createElement(O.a,{title:"Navigation Example"},r.a.createElement(K.a,null,r.a.createElement(A.a,{size:"xl",level:"2",onClick:function(){l.a.send("VKWebAppShowNativeAds",{ad_format:"reward"}).then((function(e){return console.log(e.result)})).catch((function(e){return console.log(e)}))}},"\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u0443!"))))},W=n(69),U=n(107),C=n.n(U),I=n(104),P=n.n(I),z=n(105),B=n.n(z),J=n(106),T=n.n(J),D=(n(294),Object(W.b)()),F=function(e){return r.a.createElement(g.a,{id:e.id},r.a.createElement(w.a,{left:r.a.createElement(C.a,{onClick:e.go,"data-to":"home"},D===W.a?r.a.createElement(P.a,null):r.a.createElement(B.a,null))},"Persik"),r.a.createElement("img",{className:"Persik",src:T.a,alt:"Persik The Cat"}))},G=function(){var e=Object(a.useState)("home"),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),i=Object(p.a)(o,2),s=i[0],d=i[1],h=Object(a.useState)(r.a.createElement(b.a,{size:"large"})),E=Object(p.a)(h,2),g=E[0],v=E[1];Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,d(t),v(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){e.apply(this,arguments)}()}),[]);var w=function(e){c(e.currentTarget.dataset.to)};return r.a.createElement(f.a,{activePanel:n,popout:g},r.a.createElement(S,{id:"home",fetchedUser:s,go:w}),r.a.createElement(F,{id:"persik",go:w}))};l.a.send("VKWebAppInit"),o.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[193,1,2]]]);
//# sourceMappingURL=main.0c4aef51.chunk.js.map