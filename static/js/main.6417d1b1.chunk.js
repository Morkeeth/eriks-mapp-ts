(this["webpackJsonperiks-mapp-ts"]=this["webpackJsonperiks-mapp-ts"]||[]).push([[0],{18:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a(3),r=a(5),l=a(4),o=a(6),m=a(0),s=a.n(m),c=a(15),u=a(19),d=a(20),p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),m=0;m<n;m++)o[m]=arguments[m];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).items=d.items,a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"case-grid"},this.items.map((function(e,t){return s.a.createElement(c.b,{key:t,to:"/"+e.url,className:"app-navigation-item"},s.a.createElement(u.default,{itemTitle:e.title,itemCompany:e.company,thumbnailImage:e.thumbnailImage,itemURL:e.url}))})))}}]),t}(m.Component);t.default=p},19:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a(3),r=a(5),l=a(4),o=a(6),m=a(0),s=a.n(m),c=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"case-thumbnail"},s.a.createElement("div",{className:"case-thumbnail-title"},s.a.createElement("strong",null,this.props.itemCompany)," ",s.a.createElement("br",null),this.props.itemTitle),s.a.createElement("div",{className:"case-thumbnail-img-container"},s.a.createElement("img",{key:this.props.itemURL,className:"case-thumbnail-img",alt:"img",src:a(47)("./"+this.props.thumbnailImage)})))}}]),t}(m.Component);t.default=c},20:function(e){e.exports=JSON.parse('{"items":[{"title":"Software developer","company":"AkerSolutions","thumbnailImage":"h4s-feed.jpg","image1":null,"image2":null,"image3":null,"introDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","url":"akersolutions"},{"title":"Frontend developer","company":"IBM","thumbnailImage":"h4s-feed.jpg","image1":null,"image2":null,"image3":null,"introDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","url":"ibm-summer-internship"},{"title":"Bachelor Thesis","company":"IBM","thumbnailImage":"h4s-feed.jpg","image1":null,"image2":null,"image3":null,"introDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","url":"ibm-bachelor-thesis"},{"title":"Marketing intern","company":"IBM","thumbnailImage":"ibm-feed.svg","image1":null,"image2":null,"image3":null,"introDescription":"Jobbade med employer branding tillsammans med IBM:s globala marknadsf\xf6ringsteam. Fr\xe4mst genom planering, produktion och utv\xe4rdering av videokampanjer \u2013 b\xe5de sj\xe4lvst\xe4ndigt och tillsammans med externa byr\xe5er. H\xe4r (nedan) finns n\xe5gra exempel p\xe5 projekt som jag varit med och skapat.","url":"ibm-marketing"},{"title":"Reklamkampanj","company":"Cabonline","thumbnailImage":"jip-feed.jpg","image1":null,"image2":null,"image3":null,"introDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","url":"jip"},{"title":"ChallengeGov 2019","company":"Tillv\xe4xtverket","thumbnailImage":"h4s-feed.jpg","image1":null,"image2":null,"image3":null,"introDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","url":"vex"}]}')},40:function(e,t,a){e.exports=a(61)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){var i={"./CaseGrid":18,"./CaseGrid.tsx":18,"./CaseThumbnail":19,"./CaseThumbnail.tsx":19,"./h4s-feed.jpg":48,"./ibm-feed.svg":49,"./jip-feed.jpg":50};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id=47},48:function(e,t,a){e.exports=a.p+"static/media/h4s-feed.09f0de26.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/ibm-feed.331f29bd.svg"},50:function(e,t,a){e.exports=a.p+"static/media/jip-feed.bd78940e.jpg"},61:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(37),l=a.n(r),o=(a(45),a(15)),m=a(12),s=(a(46),a(2)),c=a(3),u=a(5),d=a(4),p=a(6),h=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"header"},n.a.createElement("h1",null,"Stor svart rubrik ",n.a.createElement("br",null),"p\xe5 vit bakgrund"),n.a.createElement("h2",null,"En mapphemsida av Erik Nilsson. ",n.a.createElement("br",null)," Kalkylerad till minst 16,3 miljarder impressions."),n.a.createElement("div",{className:"header-description"},n.a.createElement("p",null,"Hej och v\xe4lkommen. ",n.a.createElement("br",null),n.a.createElement("strong",null,"Jag \xe4r en civilingenj\xf6rsstudent vid Uppsala universitet.")),n.a.createElement("p",null,"H\xe4r finns n\xe5gra saker jag gjort de senaste \xe5ren. Fr\xe5n till exempel sommarjobb, kurser i skolan eller andra sammanhang. Skicka j\xe4tteg\xe4rna"," ",n.a.createElement("a",{href:"mailto:eriks@mail.se"},n.a.createElement("u",null,"ett mail"))," ","om du undrar n\xe5got. Enjoy!")))}}]),t}(i.Component),g=a(18),b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"landing-container"},n.a.createElement(h,null),n.a.createElement(g.default,null))}}]),t}(i.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"case-grid"},n.a.createElement("h1",null,"About"),n.a.createElement("p",null,"Hej och v\xe4lkommen. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."))}}]),t}(i.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("h2",null,"Footer placeholder"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))}}]),t}(i.Component),E=a(16),j=a.n(E),k=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"case"},n.a.createElement(o.b,{to:"/",className:"case-back-title"},n.a.createElement("h3",null,n.a.createElement("u",null,"Start"))),n.a.createElement("h1",null,this.props.metadata.company),n.a.createElement("h2",null,this.props.metadata.title),n.a.createElement("p",{className:"case-intro-description"},this.props.metadata.introDescription),n.a.createElement(m.a,{path:"/ibm-marketing",component:y}),n.a.createElement(m.a,{path:"/jip",component:O}))}}]),t}(i.Component),y=function(){return n.a.createElement("div",{className:"case-video-container"},n.a.createElement("div",{className:"case-video-wrapper"},n.a.createElement(j.a,{light:!0,className:"case-react-player",url:"https://vimeo.com/251454442",width:"100%",height:"100%"})),n.a.createElement("div",{className:"case-video-wrapper"},n.a.createElement(j.a,{light:!0,className:"case-react-player",url:"https://www.youtube.com/watch?v=tRwk8cs32wg",width:"100%",height:"100%"})),n.a.createElement("div",{className:"case-video-wrapper"},n.a.createElement(j.a,{light:!0,className:"case-react-player",url:"https://vimeo.com/273954295",width:"100%",height:"100%"})))},O=function(){return n.a.createElement("div",{className:"case-video-container"},n.a.createElement("div",{className:"case-video-wrapper"},n.a.createElement(j.a,{light:!0,className:"case-react-player",url:"https://player.vimeo.com/video/361151799",width:"100%",height:"100%"})),n.a.createElement("div",{className:"case-video-wrapper"},n.a.createElement(j.a,{light:!0,className:"case-react-player",url:"https://vimeo.com/361151851",width:"100%",height:"100%"})))},N=a(20),x=function(){var e=N.items;return n.a.createElement(o.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"app-container"},n.a.createElement(m.a,{exact:!0,path:"/",component:b}),n.a.createElement(m.a,{path:"/about",component:v}),e.map((function(e,t){return n.a.createElement(m.a,{key:t,exact:!0,path:"/"+e.url,render:function(t){return n.a.createElement(k,Object.assign({},t,{metadata:e}))}})})),n.a.createElement(f,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.6417d1b1.chunk.js.map