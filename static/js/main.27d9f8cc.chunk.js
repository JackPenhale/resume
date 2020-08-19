(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{23:function(e,a,t){},55:function(e,a,t){e.exports=t.p+"static/media/myface.3eb4ce0e.png"},60:function(e,a,t){e.exports=t.p+"static/media/pi.3f0f0007.png"},61:function(e,a,t){e.exports=t.p+"static/media/tripApp.8feb0c65.png"},62:function(e,a,t){e.exports=t.p+"static/media/hospital.fbe99ddc.png"},73:function(e,a,t){e.exports=t(84)},83:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(9),c=t.n(i),o=t(12),l=t(13),s=t(24),m=t(15),u=t(14),p=(t(23),t(64)),h=t.n(p),d=t(116),E=t(128),g=t(121),v=t(122),b=t(112),f=t(109),y=t(111),j=t(113),k=t(55),w=t.n(k),P=t(59),O=t.n(P),N=t(43),A=t.n(N),C=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={aboutOpen:!1},n}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{className:"about",maxWidth:"xl"},r.a.createElement(y.a,{container:!0,spacing:3,xs:12},r.a.createElement(y.a,{xs:12,md:5,container:!0},this.renderPortrait(),r.a.createElement(y.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center"},r.a.createElement("span",{className:"iconAlign"},r.a.createElement("a",{href:"https://www.linkedin.com/in/jack-penhale-ba918516a/",target:"_blank"},r.a.createElement(O.a,{className:"portIcon",fontSize:"large"}))),r.a.createElement("span",{className:"iconAlign"},r.a.createElement("a",{href:"https://github.com/JackPenhale",target:"_blank"},r.a.createElement(A.a,{className:"portIcon",fontSize:"large"}))))),r.a.createElement(y.a,{xs:12,md:5,className:"aboutPadding"},this.renderBio())))}},{key:"renderPortrait",value:function(){return r.a.createElement("img",{alt:"my face",className:"myFace",src:w.a})}},{key:"renderBio",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{variant:"h6",className:"aboutBio"},"Hello, welcome!"),r.a.createElement(b.a,{variant:"body1",className:"aboutBio"}," My name is Jack Penhale, I am a recent graduate from Colorado State University whitch a Bachelors in Applied Computing technology. This site is a digital portfolio for me to showcase my development skills along with some of my photography. I have a passion for frontend development, photography and being creative."),r.a.createElement(b.a,{variant:"body1",className:"aboutBio"},"I am currently looking for an opportunity to work and add my skills to your team, learning and improving my skills in the process."))}}]),t}(n.Component),x=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{className:"resume"},r.a.createElement(y.a,{container:!0,spacing:3},r.a.createElement(y.a,{sm:12},r.a.createElement(b.a,{variant:"h6"},"My resume can be downloaded in your desired file format by clicking one of the buttons below!")),r.a.createElement(y.a,{container:!0,justify:"center",spacing:3},r.a.createElement(y.a,{className:"resumeButton"},r.a.createElement(j.a,{variant:"contained",color:"secondary",size:"large"},"PDF")),r.a.createElement(y.a,{className:"resumeButton"},r.a.createElement(j.a,{variant:"contained",color:"secondary",size:"large"},"DOC")))))}}]),t}(n.Component),S=t(124),H=t(123),T=t(129),B=t(60),I=t.n(B),R=t(61),M=t.n(R),J=t(62),W=t.n(J),D=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={},n}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{container:!0,xs:12},r.a.createElement(y.a,{xs:12},r.a.createElement(b.a,{variant:"h5"},this.props.title),r.a.createElement("a",{href:this.props.github,target:"_blank"},r.a.createElement(A.a,{className:"portIcon"}))),r.a.createElement(y.a,{md:4,xs:12,className:"projectSection"},r.a.createElement(b.a,{variant:"h6",align:"center"},this.props.description)),r.a.createElement(y.a,{md:4,xs:12,className:"projectSection"},r.a.createElement("img",{alt:"Project Picture",className:"projectImage",src:this.props.picture})),r.a.createElement(y.a,{md:4,xs:12,className:"projectSection"},r.a.createElement(b.a,{variant:"h6"},"Languages / Tools"),r.a.createElement(b.a,{variant:"body1",align:"center"},this.props.languages)))}}]),t}(n.Component),z=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={showTripApp:!0,showHospitalApp:!1,showPiProject:!1},n.handleChange=n.handleChange.bind(Object(s.a)(n)),n.renderTripApp=n.renderTripApp.bind(Object(s.a)(n)),n}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{className:"projects",maxWidth:"xl"},r.a.createElement(b.a,{variant:"h5",color:"inherit"}," What I've Built"),r.a.createElement(y.a,{container:!0,spacing:3},r.a.createElement(y.a,{xs:12,className:"buttons"},this.renderRadioButtons()),r.a.createElement(y.a,{xs:12},this.state.showTripApp&&this.renderTripApp(),this.state.showPiProject&&this.renderPiProject(),this.state.showHospitalApp&&this.renderHospitalApp())))}},{key:"renderRadioButtons",value:function(){return r.a.createElement("div",null,r.a.createElement(S.a,{row:!0,defaultValue:"tripApp",className:"center"},r.a.createElement(H.a,{value:"tripApp",color:"secondary",name:"reactTripApp",size:"small",onChange:this.handleChange}),r.a.createElement(H.a,{value:"piProject",color:"secondary",name:"PiProject",size:"small",onChange:this.handleChange}),r.a.createElement(H.a,{value:"hospitalApp",color:"secondary",name:"FuelHospital",size:"small",onChange:this.handleChange})))}},{key:"handleChange",value:function(e){switch(e.target.value){case"tripApp":var a=this.state;a.showTripApp=!0,a.showPiProject=!1,a.showHospitalApp=!1,this.setState({newState:a});break;case"piProject":var t=this.state;t.showTripApp=!1,t.showPiProject=!0,t.showHospitalApp=!1,this.setState({newerState:t});break;case"hospitalApp":var n=this.state;n.showTripApp=!1,n.showPiProject=!1,n.showHospitalApp=!0,this.setState({newestState:n})}}},{key:"renderTripApp",value:function(){return r.a.createElement(T.a,{direction:"left",in:this.state.showTripApp},r.a.createElement(D,{picture:M.a,title:"Web Trip Application",description:"Created a mobile, single page application and microservices during a semester-long, team-based Agile software development project.",languages:"Slack, GitHub, ZenHub, TravisCI, Code Climate, JUnit, Jest, Maven, NPM, WebPack, IntelliJ, ReactJS, ReactStrap, Leaflet, JavaScript, HTTP, JSON, JSON Schemas, SVG, KML, GSON, SQL, Java Spark",github:""}))}},{key:"renderPiProject",value:function(){return r.a.createElement(T.a,{direction:"left",in:this.state.showPiProject},r.a.createElement(D,{picture:I.a,title:"Pi Playlist Selector",description:"Built and developed a Rapsberry Pi heartrate sensor that takes them BPM of a user's heartrate and plays songs with a similar BPM.",languages:"Python, GitHub, Raspbian",github:""}))}},{key:"renderHospitalApp",value:function(){return r.a.createElement(T.a,{direction:"left",in:this.state.showHospitalApp},r.a.createElement(D,{picture:W.a,title:"Hospital Data Application",description:"A web application designed to display hospital DRG data along with filters, comments and a login system.",languages:"-PHP -SQL",github:""}))}}]),t}(n.Component),L=t(127),F=t(114),G=t(115),K=Object(L.a)(F.a)({background:"#282C34",color:"white",height:270,width:300,padding:"10px 20px"}),Q=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={},n}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{className:"experience",maxWidth:"xl"},r.a.createElement(b.a,{variant:"h5",color:"inherit",align:"center"},"Where I've worked"),r.a.createElement(y.a,{container:!0,justify:"center",spacing:5},r.a.createElement(y.a,{className:"padding"},r.a.createElement(K,{raised:!0},r.a.createElement(G.a,null,r.a.createElement(b.a,{variant:"h5"},"Digital Intern"),r.a.createElement(b.a,{variant:"subtitle1"},"Nutrien | May 2018 - August 2018"),r.a.createElement(b.a,{variant:"body2"},"-Developed an AWS Lambda application that retrieved an ID from clients for data collection."),r.a.createElement(b.a,{variant:"body2"},"-Worked in SQL to help clean companies data."),r.a.createElement(b.a,{variant:"body2"},"-Shadowed product owners, developers, agile coaches and scrum masters to get a understanding of the agile work environment.")))),r.a.createElement(y.a,{className:"padding"},r.a.createElement(K,{raised:!0},r.a.createElement(G.a,null,r.a.createElement(b.a,{variant:"h5"},"Backend Sofware Intern"),r.a.createElement(b.a,{variant:"subtitle1"},"Nutrien | May 2019- August 2019"),r.a.createElement(b.a,{variant:"body2"},"- Worked on an agile development team developing, maintaining and supporting a .NET application."),r.a.createElement(b.a,{variant:"body2"}," - Developed code to move data from legacy systems to SAP database."),r.a.createElement(b.a,{variant:"body2"}," - Wrote tests increasing code coverage to 80%."))))))}}]),t}(n.Component),V=t(119),_=t(120),U=t(66),Z=t(118),q=t(117),X=t(69),Y=t(130),$=t(126),ee=t(125),ae=t(47),te=t.n(ae),ne=Object(d.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2),backgroundColor:"#4f555e"}}}));function re(){var e=ne(),a=r.a.useState(!1),t=Object(U.a)(a,2),n=t[0],i=t[1],c=r.a.useRef(null),o=function(e){c.current&&c.current.contains(e.target)||i(!1)};function l(e){"Tab"===e.key&&(e.preventDefault(),i(!1))}var s=r.a.useRef(n);return r.a.useEffect((function(){!0===s.current&&!1===n&&c.current.focus(),s.current=n}),[n]),r.a.createElement("div",{className:e.root},r.a.createElement("div",null,r.a.createElement(j.a,{ref:c,"aria-controls":n?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){i((function(e){return!e}))}},r.a.createElement(te.a,{color:"inherit",className:"hamburger",fontSize:"large"})),r.a.createElement(Y.a,{open:n,anchorEl:c.current,role:void 0,transition:!0,disablePortal:!0},(function(a){var t=a.TransitionProps,i=a.placement;return r.a.createElement(q.a,Object.assign({},t,{style:{transformOrigin:"bottom"===i?"center top":"center bottom"}}),r.a.createElement(X.a,{className:e.paper},r.a.createElement(Z.a,{onClickAway:o},r.a.createElement(ee.a,{autoFocusItem:n,id:"menu-list-grow",onKeyDown:l},r.a.createElement($.a,{onClick:o},r.a.createElement("a",{href:"#about"},r.a.createElement(b.a,{variant:"subtitle1"},"Me"))),r.a.createElement($.a,{onClick:o},r.a.createElement("a",{href:"#projects"},r.a.createElement(b.a,{variant:"subtitle1"},"Projects"))),r.a.createElement($.a,{onClick:o},r.a.createElement("a",{href:"#experience"},r.a.createElement(b.a,{variant:"subtitle1"},"Experience"))),r.a.createElement($.a,{onClick:o},r.a.createElement("a",{href:"#contact"},r.a.createElement(b.a,{variant:"subtitle1"},"Contact"))),r.a.createElement($.a,{onClick:o},r.a.createElement("a",{href:"#resume"},r.a.createElement(b.a,{variant:"subtitle1"},"Resume")))))))}))))}var ie=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V.a,{className:"nav",position:"static",color:"secondary"},r.a.createElement(_.a,{variant:"dense"},r.a.createElement(re,null),r.a.createElement(b.a,{variant:"h5",color:"inherit",onClick:this.props.toggleHome,className:"hover"},"Jack Penhale"))))}}]),t}(n.Component),ce=t(65),oe=Object(ce.a)({palette:{primary:{main:"#272C34"},secondary:{main:"#282C34"},contrastThreshold:3,tonalOffset:.2}});Object(d.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},center:{justifyContent:"center"}});oe=Object(E.a)(oe);var le=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={showHome:!0,showMain:!1},n.toggleHome=n.toggleHome.bind(Object(s.a)(n)),n}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.a,{in:this.state.showMain},r.a.createElement(v.a,{theme:oe},this.renderNavBar(),r.a.createElement("div",{className:"main"},r.a.createElement("a",{id:"about"}),this.renderAbout(),r.a.createElement("a",{id:"projects"}),this.renderProjects(),r.a.createElement("a",{id:"experience"}),this.renderExperience(),r.a.createElement("a",{id:"resume"}),this.renderResume(),r.a.createElement("a",{id:"contact"}),r.a.createElement(b.a,{variant:"h6",color:"inherit",align:"center"},"Contact me"),this.renderContact()))),this.renderHome())}},{key:"toggleHome",value:function(){var e=this.state;e.showHome=!this.state.showHome,e.showMain=!this.state.showMain,this.setState({newState:e})}},{key:"renderHome",value:function(){return r.a.createElement(g.a,{in:this.state.showHome},r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home-header"},r.a.createElement(b.a,{variant:"h2"},"JACK PENHALE"),r.a.createElement(b.a,{variant:"h5"},"SOFTWARE DEVELOPER // PHOTOGRAPHER")),r.a.createElement("div",{className:"chevron"},r.a.createElement(h.a,{onClick:this.toggleHome,className:"adc",fontSize:"inherit",color:"inherit"}))))}},{key:"renderAbout",value:function(){return r.a.createElement(C,{closePage:this.toggleAbout})}},{key:"renderNavBar",value:function(){return r.a.createElement(ie,{toggleHome:this.toggleHome})}},{key:"renderContact",value:function(){return r.a.createElement(f.a,{className:"contact",maxWidth:"xl"},r.a.createElement(y.a,{container:!0,justify:"center",spacing:3},r.a.createElement(b.a,{variant:"subtitle1",color:"inherit"},"Please contact me if you are interested in working together! I am currently looking for opportunities.")),r.a.createElement(y.a,{container:!0,justify:"center",spacing:3,className:"contactButton"},r.a.createElement(j.a,{variant:"contained"},r.a.createElement("a",{href:"mailto:jackpenhale@gmail.com"}),"Contact Me")))}},{key:"renderResume",value:function(){return r.a.createElement(x,null)}},{key:"renderExperience",value:function(){return r.a.createElement(Q,null)}},{key:"renderProjects",value:function(){return r.a.createElement(z,null)}}]),t}(n.Component);t(83);c.a.render(r.a.createElement(le,null),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.27d9f8cc.chunk.js.map