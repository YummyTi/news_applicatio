(this.webpackJsonpnews_app=this.webpackJsonpnews_app||[]).push([[0],{173:function(e,t,n){e.exports=n(291)},291:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),l=n.n(c),i=n(33),o=n(51),u=n(292),s=n(300),m=n(19),d=n(20);function p(){var e=Object(m.a)(["\n  font: bold 26px Roboto;\n  color: white;\n  width: 20%;\n  line-height: 50px;\n  \n  @media (min-width: 400px) and (max-width: 800px) {\n    width: 30%;\n    font-size: 15px;\n    text-align: left;\n    margin-left: 0 !important;\n    padding-left: 0;\n  }\n"]);return p=function(){return e},e}var b=d.a.div(p()),E=u.a.Header,f=function(){return r.a.createElement(E,{style:{display:"flex",flexDirection:"row",position:"fixed",zIndex:100,width:"100%",top:0,boxShadow:"1px 5px 5px rgba(0, 0, 0, 0.6)"}},r.a.createElement(b,null,"News Application"),r.a.createElement(s.a,{style:{width:"70%"},theme:"dark",mode:"horizontal"},r.a.createElement(s.a.Item,{key:"0"},r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement(s.a.Item,{key:"1"},r.a.createElement(o.b,{to:"/business"},"Business")),r.a.createElement(s.a.Item,{key:"2"},r.a.createElement(o.b,{to:"/general"},"General"))))},g=n(25),h=n(49),v=n.n(h),w=n(67),y=n(68),S=n.n(y),I=n(296),j=n(297),O=n(293),x=n(298);function N(){var e=Object(m.a)(["\n  width: 50% !important;\n  text-align: left !important;\n  font: bold 24px Roboto;\n  position: absolute;\n"]);return N=function(){return e},e}function _(){var e=Object(m.a)(["\n  height: 500px;\n  width: 100%;\n  padding: 3%;\n  color: #ff081c;\n  line-height: 160px;\n  position: relative;\n  text-align: center;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  \n  &:hover {\n   backdrop-filter: blur(10);\n  }\n"]);return _=function(){return e},e}var T=I.a.Text,B=d.a.div(_(),(function(e){return e.urlToImg})),k=Object(d.a)(T)(N()),G=I.a.Text,W=Object(g.b)((function(e){return{error:e.slide.error,slideNews:e.slide.slideNews}}),{getSlideNewsById:function(e){return{type:"GET_SLIDE_BY_ID",payload:e}}})((function(e){var t=e.error,n=e.slideNews,a=e.getSlideNewsById,c=Object(i.f)();return t?r.a.createElement(G,{style:{marginLeft:"50vw"},mark:!0},"There is not any data"):0===n.length?r.a.createElement("div",null,r.a.createElement(j.a,{loading:!0,active:!0}),r.a.createElement(j.a,{loading:!0,active:!0}),r.a.createElement(j.a,{loading:!0,active:!0})):r.a.createElement(O.a,{autoplay:!0,effect:"fade"},n.length>0&&n.map((function(e){return null===e.urlToImage||null===e.source.id?null:r.a.createElement("div",{key:e.source.id},r.a.createElement(B,{urlToImg:e.urlToImage},r.a.createElement(k,{mark:!0},e.title),r.a.createElement(x.a,{style:{marginRight:"100%",marginTop:"15%"},type:"primary",onClick:function(){return t=e.source.id,a(e),void c.push("/news/slide/".concat(t));var t}},"See more")))})))})),A=n(63),L=n(294);function z(){var e=Object(m.a)(["\n  margin-top: 0;\n  margin-left: 60%;\n  \n  @media (min-width: 300px) and (max-width: 700px) {\n    margin-left: 0;\n    width: 100%;\n  }\n"]);return z=function(){return e},e}var F=Object(d.a)(x.a)(z()),D=n(299),C=L.a.Meta,U=I.a.Text,M=Object(g.b)(null,{getNewsById:function(e){return{type:"GET_NEWS_BY_ID",payload:e}}})((function(e){var t=e.source,n=e.url,a=e.author,c=e.description,l=e.publishedAt,o=e.title,u=e.urlToImage,s=e.content,m=e.getNewsById,d=Object(i.f)();return r.a.createElement(L.a,{bordered:!0,hoverable:!0,cover:r.a.createElement("img",{alt:t.id,src:u}),actions:[r.a.createElement(U,{key:a,mark:!0}," ",a),r.a.createElement(U,{key:l,type:"danger"}," ",r.a.createElement(D.a,null)," ",l.slice(0,10))]},r.a.createElement(C,{style:{height:"200px"},title:t.name,description:s}),r.a.createElement(F,{onClick:function(){return e=t.id,m({id:t.id,name:t.name,url:n,author:a,publishedAt:l,title:o,content:s,description:c,urlToImage:u}),void d.push("/news/".concat(e));var e},type:"primary"},"More..."))})),Y=n(295),P=n(90),R=n(57);function K(){var e=Object(m.a)(["\n  padding: 0;\n  margin-left: 70%;\n  margin-top: 2%;\n  margin-bottom: 5%;\n"]);return K=function(){return e},e}function q(){var e=Object(m.a)(["\n  margin-bottom: 30px;\n  box-sizing: border-box;\n"]);return q=function(){return e},e}function H(){var e=Object(m.a)(["\n  margin-top: 5%;\n"]);return H=function(){return e},e}var J=Object(d.a)(P.a)(H()),Q=Object(d.a)(R.a)(q()),V=d.a.div(K()),X=function(e){var t=e.news,n=e.loading,c=Object(a.useState)(0),l=Object(A.a)(c,2),i=l[0],o=l[1],u=Object(a.useState)(6),s=Object(A.a)(u,2),m=s[0],d=s[1];return r.a.createElement(J,{gutter:{xs:8,sm:16,md:24,lg:32}},t.length>0||n?t.slice(i,m).map((function(e,t){return r.a.createElement(Q,{className:"gutter-row",key:t,span:6,offset:1},r.a.createElement(M,e))})):r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{loading:!0,active:!0}),r.a.createElement(j.a,{loading:!0,active:!0}),r.a.createElement(j.a,{loading:!0,active:!0})),r.a.createElement(V,null,r.a.createElement(Y.a,{pageSize:6,defaultCurrent:1,defaultPageSize:6,onChange:function(e){o(6*(e-1)),d(6*e)},total:t.length})))};function Z(){var e=Object(m.a)(["\n  height: 600px;\n  width: 90%;\n  margin: 80px auto;\n"]);return Z=function(){return e},e}function $(){var e=Object(m.a)(["\n  width: 90%;\n  margin: 0 auto;\n  justify-content: space-between;\n"]);return $=function(){return e},e}var ee=d.a.div($()),te=d.a.div(Z()),ne=I.a.Text,ae=Object(g.b)((function(e){return{news:e.news.news,loading:e.news.loading,error:e.news.error,newById:e.news.newById}}),{getNews:function(){return function(){var e=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"BEGIN_GET_NEWS"}),e.prev=1,e.next=4,S.a.get("https://newsapi.org/v2/everything?q=apple&from=2020-08-24&to=2020-08-24&sortBy=popularity&apiKey=ad3c20ac87fc435db0b9a30c7ea824a4");case 4:n=e.sent,t({type:"SUCCESS_GET_NEWS",payload:n.data.articles}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"FAIL_GET_NEWS"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},getSlideNews:function(){return function(){var e=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=ad3c20ac87fc435db0b9a30c7ea824a4");case 3:n=e.sent,t({type:"GET_SLIDE_NEWS",payload:n.data.articles}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"FAIL_SLIDE_NEWS"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.loading,n=e.error,c=e.news,l=e.getNews,i=e.getSlideNews;return Object(a.useEffect)((function(){l(),i()}),[l,i]),r.a.createElement("div",null,r.a.createElement(te,null,r.a.createElement(W,null)),r.a.createElement(ne,{style:{fontFamily:"Roboto",marginLeft:"45vw",fontSize:"26px"}},"News"),r.a.createElement(ee,null,r.a.createElement(X,{news:c,loading:t})),n&&r.a.createElement(ne,{type:"danger"},"There is not any List"))}));function re(){var e=Object(m.a)(["\n  width: 80%;\n  margin: 5% auto;\n"]);return re=function(){return e},e}var ce=Object(d.a)(L.a)(re());function le(){var e=Object(m.a)(["\n  opacity: 0.6;\n"]);return le=function(){return e},e}function ie(){var e=Object(m.a)(["\n  top: 95%;\n  left: 90%;\n  position: absolute;\n"]);return ie=function(){return e},e}function oe(){var e=Object(m.a)(["\n   margin-top: 10px;\n   opacity: 0.6;\n"]);return oe=function(){return e},e}function ue(){var e=Object(m.a)(["\n  width: 80%;\n  margin: 5% auto;\n  position: relative;\n"]);return ue=function(){return e},e}var se=Object(d.a)(L.a)(ue()),me=d.a.p(oe()),de=d.a.p(ie()),pe=d.a.p(le()),be=I.a.Text,Ee=I.a.Title,fe=I.a.Link,ge=Object(g.b)((function(e){return{newById:e.news.newById}}))((function(e){var t=e.newById;return 0===t.length?null:r.a.createElement(ce,{hoverable:!0,cover:r.a.createElement("img",{alt:t.id,src:t.urlToImage})},t.author&&r.a.createElement(pe,null,t.author),r.a.createElement(Ee,null,t.title),r.a.createElement(be,{style:{fontSize:"24px"}},t.description),r.a.createElement(de,null,t.publishedAt.slice(0,10)),r.a.createElement(me,null,t.name),r.a.createElement(fe,{href:t.url,target:"_blank"},"For More Information: ",t.id))})),he=I.a.Text,ve=I.a.Link,we=I.a.Title,ye=Object(g.b)((function(e){return{SlideNewById:e.slide.SlideNewById}}))((function(e){var t=e.SlideNewById;return console.log(t),r.a.createElement(se,{hoverable:!0,cover:r.a.createElement("img",{alt:t.source.id,src:t.urlToImage})},t.author&&r.a.createElement(pe,null,t.author),r.a.createElement(we,null,t.title),r.a.createElement(he,{style:{fontSize:"24px"}},t.description),r.a.createElement(de,null,t.publishedAt.slice(0,10)),r.a.createElement(me,null,t.source.name),r.a.createElement(ve,{href:t.url,target:"_blank"},"For More Information: ",t.source.id))}));function Se(){var e=Object(m.a)(["\n  padding: 0;\n  margin-left: 65%;\n  margin-top: 2%;\n  margin-bottom: 5%;\n"]);return Se=function(){return e},e}function Ie(){var e=Object(m.a)(["\n  margin-bottom: 30px;\n  box-sizing: border-box;\n"]);return Ie=function(){return e},e}function je(){var e=Object(m.a)(["\n  margin-top: 5%;\n"]);return je=function(){return e},e}var Oe=Object(d.a)(P.a)(je()),xe=Object(d.a)(R.a)(Ie()),Ne=d.a.div(Se()),_e=L.a.Meta,Te=I.a.Text,Be=Object(g.b)(null,{getBusinessNewsById:function(e){return{type:"GET_BUSINESS_BY_ID",payload:e}}})((function(e){var t=e.author,n=e.source,a=e.title,c=e.description,l=e.url,o=e.urlToImage,u=e.publishedAt,s=e.content,m=e.getBusinessNewsById,d=Object(i.f)();return r.a.createElement(L.a,{bordered:!0,hoverable:!0,cover:r.a.createElement("img",{alt:n.id,src:o}),actions:[r.a.createElement(Te,{key:t,mark:!0}," ",t),r.a.createElement(Te,{key:u,type:"danger"}," ",r.a.createElement(D.a,null)," ",u.slice(0,10))]},r.a.createElement(_e,{style:{height:"200px"},title:n.name,description:s}),r.a.createElement(F,{onClick:function(){return e=n.id,m({id:n.id,name:n.name,url:l,author:t,publishedAt:u,title:a,content:s,description:c,urlToImage:o}),void d.push("/business/news/".concat(e));var e},type:"primary"},"More..."))})),ke=Object(g.b)((function(e){return{businessNews:e.business.businessNews,error:e.business.error}}))((function(e){var t=e.businessNews,n=e.error,c=Object(a.useState)(0),l=Object(A.a)(c,2),i=l[0],o=l[1],u=Object(a.useState)(6),s=Object(A.a)(u,2),m=s[0],d=s[1];return n?r.a.createElement("p",null,"There is not any News"):r.a.createElement(Oe,null,t.length>0?t.slice(i,m).map((function(e,t){return r.a.createElement(xe,{className:"gutter-row",key:t,span:6,offset:1},r.a.createElement(Be,e))})):r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{loading:!0,active:!0}),r.a.createElement(j.a,{loading:!0,active:!0}),r.a.createElement(j.a,{loading:!0,active:!0})),r.a.createElement(Ne,null,r.a.createElement(Y.a,{pageSize:6,defaultCurrent:1,defaultPageSize:6,onChange:function(e){o(6*(e-1)),d(6*e)},total:t.length})))})),Ge=I.a.Title,We=Object(g.b)(null,{getBusinessNews:function(){return function(){var e=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=ad3c20ac87fc435db0b9a30c7ea824a4");case 3:n=e.sent,t({type:"GET_BUSINESS_NEWS",payload:n.data.articles}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"FAIL_GET_BUSINESS_NEWS"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getBusinessNews;return Object(a.useEffect)((function(){t()}),[t]),r.a.createElement("div",{style:{marginTop:"100px",marginRight:0}},r.a.createElement(Ge,{style:{textAlign:"center"},mark:!0},"Business Page"),r.a.createElement(ke,null))}));function Ae(){var e=Object(m.a)(["\n  padding: 0;\n  margin-left: 65%;\n  margin-top: 2%;\n  margin-bottom: 5%;\n"]);return Ae=function(){return e},e}function Le(){var e=Object(m.a)(["\n  margin-bottom: 30px;\n  box-sizing: border-box;\n"]);return Le=function(){return e},e}function ze(){var e=Object(m.a)(["\n  margin-top: 5%;\n"]);return ze=function(){return e},e}var Fe=Object(d.a)(P.a)(ze()),De=Object(d.a)(R.a)(Le()),Ce=d.a.div(Ae()),Ue=L.a.Meta,Me=I.a.Text,Ye=Object(g.b)(null,{getWebNewsById:function(e){return{type:"GET_BUSINESS_BY_ID",payload:e}}})((function(e){var t=e.author,n=e.source,a=e.title,c=e.description,l=e.url,o=e.urlToImage,u=e.publishedAt,s=e.content,m=e.getWebNewsById,d=Object(i.f)();return r.a.createElement(L.a,{bordered:!0,hoverable:!0,cover:r.a.createElement("img",{alt:n.id,src:o}),actions:[r.a.createElement(Me,{key:t,mark:!0}," ",t),r.a.createElement(Me,{key:u,type:"danger"}," ",r.a.createElement(D.a,null)," ",u.slice(0,10))]},r.a.createElement(Ue,{style:{height:"200px"},title:n.name,description:s}),r.a.createElement(F,{onClick:function(){return e=n.id,m({id:n.id,name:n.name,url:l,author:t,publishedAt:u,title:a,content:s,description:c,urlToImage:o}),void d.push("/general/news/".concat(e));var e},type:"primary"},"More..."))})),Pe=Object(g.b)((function(e){return{webNews:e.web.webNews,error:e.web.error}}))((function(e){var t=e.webNews,n=e.error,c=Object(a.useState)(0),l=Object(A.a)(c,2),i=l[0],o=l[1],u=Object(a.useState)(6),s=Object(A.a)(u,2),m=s[0],d=s[1];return n?r.a.createElement("p",null,"There is not any News"):r.a.createElement(Fe,null,t.length>0?t.slice(i,m).map((function(e,t){return r.a.createElement(De,{className:"gutter-row",key:t,span:6,offset:1},r.a.createElement(Ye,e))})):r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{loading:!0,active:!0}),r.a.createElement(j.a,{loading:!0,active:!0}),r.a.createElement(j.a,{loading:!0,active:!0})),r.a.createElement(Ce,null,r.a.createElement(Y.a,{pageSize:6,defaultCurrent:1,defaultPageSize:6,onChange:function(e){o(6*(e-1)),d(6*e)},total:t.length})))})),Re=I.a.Title,Ke=Object(g.b)(null,{getWebNews:function(){return function(){var e=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=ad3c20ac87fc435db0b9a30c7ea824a4");case 3:n=e.sent,t({type:"GET_BUSINESS_NEWS",payload:n.data.articles}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"FAIL_GET_BUSINESS_NEWS"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getWebNews;return Object(a.useEffect)((function(){t()}),[t]),r.a.createElement("div",{style:{marginTop:"100px"}},r.a.createElement(Re,{style:{textAlign:"center"},mark:!0},"General Page"),r.a.createElement(Pe,null))}));function qe(){var e=Object(m.a)(["\n  width: 80%;\n  margin: 5% auto;\n"]);return qe=function(){return e},e}var He=Object(d.a)(L.a)(qe()),Je=I.a.Text,Qe=I.a.Title,Ve=I.a.Link,Xe=Object(g.b)((function(e){return{businessById:e.business.businessById}}))((function(e){var t=e.businessById;return 0===t.length?null:r.a.createElement(He,{hoverable:!0,cover:r.a.createElement("img",{alt:t.id,src:t.urlToImage})},t.author&&r.a.createElement(pe,null,t.author),r.a.createElement(Qe,null,t.title),r.a.createElement(Je,{style:{fontSize:"24px"}},t.description),r.a.createElement(de,null,t.publishedAt.slice(0,10)),r.a.createElement(me,null,t.name),r.a.createElement(Ve,{href:t.url,target:"_blank"},"For More Information: ",t.id))})),Ze=I.a.Text,$e=I.a.Title,et=I.a.Link,tt=Object(g.b)((function(e){return{webById:e.web.webById}}))((function(e){var t=e.webById;return 0===t.length?null:r.a.createElement(He,{hoverable:!0,cover:r.a.createElement("img",{alt:t.id,src:t.urlToImage})},t.author&&r.a.createElement(pe,null,t.author),r.a.createElement($e,null,t.title),r.a.createElement(Ze,{style:{fontSize:"24px"}},t.description),r.a.createElement(de,null,t.publishedAt.slice(0,10)),r.a.createElement(me,null,t.name),r.a.createElement(et,{href:t.url,target:"_blank"},"For More Information: ",t.id))})),nt=function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:ae}),r.a.createElement(i.a,{exact:!0,path:"/news/:id",component:ge}),r.a.createElement(i.a,{exact:!0,path:"/news/slide/:id",component:ye}),r.a.createElement(i.a,{exact:!0,path:"/business",component:We}),r.a.createElement(i.a,{exact:!0,path:"/business/news/:id",component:Xe}),r.a.createElement(i.a,{exact:!0,path:"/general",component:Ke}),r.a.createElement(i.a,{exact:!0,path:"/general/news/:id",component:tt})))},at=n(165),rt=n(53),ct=n(166),lt=n(107),it=n(167),ot=n.n(it),ut=n(38),st={loading:!1,error:null,news:[],newById:[]},mt={error:null,slideNews:[],SlideNewById:[]},dt={businessNews:[],businessById:[],error:!1},pt={webNews:[],webById:[],error:!1},bt={key:"root",storage:ot.a},Et=Object(rt.c)({news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BEGIN_GET_NEWS":return Object(ut.a)({},e,{error:null,loading:!0});case"SUCCESS_GET_NEWS":return Object(ut.a)({},e,{loading:!1,news:t.payload,error:null});case"FAIL_GET_NEWS":return Object(ut.a)({},e,{loading:!1,news:[],error:!0});case"GET_NEWS_BY_ID":return Object(ut.a)({},e,{newById:t.payload});default:return e}},slide:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SLIDE_NEWS":return Object(ut.a)({},e,{slideNews:t.payload,error:null});case"FAIL_SLIDE_NEWS":return Object(ut.a)({},e,{error:!0,slideNews:[]});case"GET_SLIDE_BY_ID":return Object(ut.a)({},e,{SlideNewById:t.payload});default:return e}},business:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BUSINESS_NEWS":return Object(ut.a)({},e,{businessNews:t.payload,error:!1});case"FAIL_GET_BUSINESS_NEWS":return Object(ut.a)({},e,{error:!0,businessNews:[]});case"GET_BUSINESS_BY_ID":return Object(ut.a)({},e,{businessById:t.payload});default:return e}},web:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BUSINESS_NEWS":return Object(ut.a)({},e,{webNews:t.payload,error:!1});case"FAIL_GET_BUSINESS_NEWS":return Object(ut.a)({},e,{error:!0,webNews:[]});case"GET_BUSINESS_BY_ID":return Object(ut.a)({},e,{webById:t.payload});default:return e}}}),ft=Object(lt.a)(bt,Et),gt=Object(rt.d)(ft,Object(rt.a)(ct.a)),ht=Object(lt.b)(gt);n(290);l.a.render(r.a.createElement(g.a,{store:gt},r.a.createElement(o.a,null,r.a.createElement(at.a,{persistor:ht,loading:null},r.a.createElement(nt,null)))),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.3e731152.chunk.js.map