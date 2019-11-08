(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{141:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),o=a.n(l),s=a(26),i=(a(84),a(9)),c=a(10),u=a(12),m=a(11),p=a(13),d=a(30),h=a(20),f=a(15),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{fluid:!0,id:"profile",className:"p-0"},r.a.createElement(s.b,{to:"/home"},r.a.createElement(f.a,{variant:"navbar"},"Freat")))}}]),t}(r.a.Component),b=a(56),g=a(34),v=a(5),y=a(27),k=a(23),O=a.n(k),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target.name,n=e.target.value,r=a.state.post;r[t]=n,a.setState({post:r})},a.handleDietChange=function(e){var t=e.target.name,n=a.state.post;n.diet[t]=!n.diet[t],a.setState({post:n})},a.handleSubmit=function(e){e.preventDefault();for(var t=[],n=0;n<a.diets.length;n++)a.state.post.diet[a.diets[n].name]&&t.push(n);var r=(new Date).getTime(),l={title:a.state.post.title,room:a.state.post.room,building:a.state.post.building,description:a.state.post.description,diet:t,feeds:a.state.post.feeds,time:r,userid:a.props.user.userid};a.props.addPost(l),a.close()},a.emptyPost={title:"",room:"",building:null,image:null,description:"",diet:{vegetarian:!1,vegan:!1,kosher:!1,halal:!1,gluten:!1},feeds:""},a.buildings=["-- Select building --","Bloomberg Hall","Dod Hall","Colonial","Friend Center"],a.diets=[{id:0,name:"vegetarian",label:"Vegetarian"},{id:1,name:"vegan",label:"Vegan"},{id:2,name:"kosher",label:"Kosher"},{id:3,name:"halal",label:"Halal"},{id:4,name:"gluten",label:"Gluten-Free"}],a.state={post:a.emptyPost,valid:{title:!1,room:!1,building:!1,feeds:!1}},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"validate",value:function(e,t){var a=this.state.valid;switch(e){case"title":a.title=t.length>0;break;case"room":a.room=t.length>0}}},{key:"close",value:function(){this.setState({post:this.emptyPost}),this.props.handleClose()}},{key:"getTime",value:function(){return"1 minute ago"}},{key:"renderBuildings",value:function(){return this.buildings.sort().map((function(e,t){return r.a.createElement("option",{key:t},e)}))}},{key:"renderDietOptions",value:function(){var e=this;return this.diets.map((function(t){return r.a.createElement(v.a.Check,{key:t.id,type:"checkbox",name:t.name,label:t.label,onChange:e.handleDietChange})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(g.a,{show:this.props.show},r.a.createElement(g.a.Header,null,r.a.createElement(g.a.Title,null,"New post")),r.a.createElement(v.a,{onSubmit:this.handleSubmit},r.a.createElement(g.a.Body,null,r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,"Title"),r.a.createElement(v.a.Control,{type:"text",name:"title",placeholder:"Enter title",onChange:this.handleChange})),r.a.createElement(v.a.Row,null,r.a.createElement(v.a.Group,{as:y.a},r.a.createElement(v.a.Label,null,"Room"),r.a.createElement(v.a.Control,{type:"text",name:"room",placeholder:"Enter room",onChange:this.handleChange})),r.a.createElement(v.a.Group,{as:y.a,controlId:"input-building"},r.a.createElement(v.a.Label,null,"Building"),r.a.createElement(v.a.Control,{as:"select",name:"building",onChange:this.handleChange},this.renderBuildings()))),r.a.createElement(v.a.Group,{controlId:"input-image"},r.a.createElement(v.a.Label,null,"Image"),r.a.createElement(v.a.Control,{type:"file"}),r.a.createElement(v.a.Control.Feedback,{type:"invalid"},"Please upload an image.")),r.a.createElement(v.a.Group,{controlId:"input-desc"},r.a.createElement(v.a.Label,null,"Description"),r.a.createElement(v.a.Control,{as:"textarea",name:"description",rows:"3",onChange:this.handleChange})),r.a.createElement(v.a.Group,{controlId:"input-diet"},r.a.createElement(v.a.Label,null,"Dietary Options"),this.renderDietOptions()),r.a.createElement(v.a.Group,{controlId:"input-feeds"},r.a.createElement(v.a.Label,null,"Feeds approximately..."),r.a.createElement(v.a.Control,{type:"number",name:"feeds",placeholder:"1",onChange:this.handleChange}))),r.a.createElement(g.a.Footer,null,r.a.createElement(f.a,{type:"reset",variant:"cancel",className:"mr-1",onClick:function(){return e.close()}},"Cancel"),r.a.createElement(f.a,{type:"submit",variant:"submit"},"Submit"))))}}]),t}(r.a.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={showModal:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{show:this.state.showModal,handleClose:function(){return e.handleCloseModal()},addPost:this.props.addPost}),r.a.createElement(b.a,{className:"p-2",variant:"dark",expand:"lg"},r.a.createElement(s.b,{to:"/home"},r.a.createElement(b.a.Brand,{className:"ml-2"},"Freat")),r.a.createElement(f.a,{className:"mr-auto",variant:"navbar",onClick:function(){return e.handleOpenModal()}},"New post"),r.a.createElement(s.b,{to:"/profile"},r.a.createElement(f.a,{variant:"navbar"},"Account"))))}}]),t}(r.a.Component),w=a(29);var N=a(37),P=a(16),x=a(43),F=a(42),G=a.n(F),D=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"renderDietOptions",value:function(){var e=[{key:0,name:"Vegetarian",color:"vegetarian"},{key:1,name:"Vegan",color:"vegan"},{key:2,name:"Kosher",color:"kosher"},{key:3,name:"Halal",color:"halal"},{key:4,name:"Gluten-Free",color:"gluten"}];return this.props.post.diet.map((function(t){return e[t]})).map((function(e){return r.a.createElement(x.a,{pill:!0,key:e.key,variant:e.color},e.name)}))}},{key:"render",value:function(){return r.a.createElement(N.a.Toggle,{as:P.a,eventKey:this.props.post.id},r.a.createElement(P.a.Header,null,r.a.createElement(h.a,{fluid:!0,className:"p-0"},r.a.createElement(w.a,{noGutters:"true"},r.a.createElement(P.a.Title,{className:"mr-auto"},this.props.post.title),r.a.createElement("span",{className:"post-time"},"15 minutes ago")),r.a.createElement(w.a,{noGutters:"true",className:"mt-1"},r.a.createElement(f.a,{variant:"location"},r.a.createElement("i",{className:"fas fa-map-marker-alt mr-1"}),this.props.post.room," ",this.props.post.building)))),r.a.createElement(P.a.Img,{src:G.a}),r.a.createElement(N.a.Collapse,{eventKey:this.props.post.id},r.a.createElement(P.a.Body,null,this.props.post.description,r.a.createElement("br",null),r.a.createElement("em",null,"Feeds approximately: ",this.props.post.feeds))),r.a.createElement(P.a.Footer,null,this.renderDietOptions()))}}]),t}(r.a.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"renderPosts",value:function(){return this.props.posts.map((function(e){return r.a.createElement(D,{key:e.id,post:e})}))}},{key:"render",value:function(){return r.a.createElement(N.a,null,this.renderPosts())}}]),t}(r.a.Component);function B(){return r.a.createElement("iframe",{id:"map",src:"https://www.google.com/maps/embed/v1/place?key=AIzaSyB8gNdm5uw0zkEZhknd0nLiUhbrd8K3kjw&q=Princeton,New+Jersey"})}function H(e){return r.a.createElement(w.a,{fluid:"true",noGutters:"true"},r.a.createElement(y.a,{id:"post-pane",xs:12,sm:5},r.a.createElement(S,{posts:e.posts})),r.a.createElement(y.a,{id:"map-pane"},r.a.createElement(B,null)))}var I=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"renderDietOptions",value:function(){var e=[{key:0,name:"Vegetarian",color:"vegetarian"},{key:1,name:"Vegan",color:"vegan"},{key:2,name:"Kosher",color:"kosher"},{key:3,name:"Halal",color:"halal"},{key:4,name:"Gluten-Free",color:"gluten"}];return this.props.post.diet.map((function(t){return e[t]})).map((function(e){return r.a.createElement(x.a,{pill:!0,key:e.key,variant:e.color},e.name)}))}},{key:"render",value:function(){return r.a.createElement(P.a,null,r.a.createElement(P.a.Header,null,r.a.createElement(h.a,{fluid:!0,className:"p-0"},r.a.createElement(w.a,{noGutters:"true"},r.a.createElement(P.a.Title,{className:"mr-auto"},this.props.post.title),r.a.createElement("span",{className:"post-time"},"15 minutes ago"),r.a.createElement(f.a,{variant:"edit"},r.a.createElement("i",{className:"fas fa-ellipsis-v p-0 m-0"}))),r.a.createElement(w.a,{noGutters:"true",className:"mt-1"},r.a.createElement(f.a,{variant:"location"},r.a.createElement("i",{className:"fas fa-map-marker-alt mr-1"}),this.props.post.room," ",this.props.post.building)))),r.a.createElement(P.a.Img,{src:G.a}),r.a.createElement(P.a.Body,null,this.props.post.description,r.a.createElement("br",null),r.a.createElement("em",null,"Feeds approximately: ",this.props.post.feeds)),r.a.createElement(P.a.Footer,null,this.renderDietOptions()))}}]),t}(r.a.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"renderPosts",value:function(){return this.props.posts.map((function(e){return r.a.createElement(I,{key:e.id,post:e})}))}},{key:"render",value:function(){return r.a.createElement(h.a,{id:"user-feed",className:"p-0"},this.renderPosts())}}]),t}(r.a.Component);function L(e){return r.a.createElement(h.a,{fluid:!0,id:"profile",className:"p-0"},r.a.createElement("h3",{id:"profile-name"},"Bianca Catoto"),r.a.createElement("h4",{id:"profile-text"},"Active Posts"),r.a.createElement(M,{posts:e.posts}))}a(140),a(141);O.a.defaults.xsrfCookieName="csrftoken",O.a.defaults.xsrfHeaderName="X-CSRFToken",O.a.defaults.withCredentials=!0;var T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={user:{id:null,name:""},posts:[],userPosts:[]},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getPosts(),this.getUserPosts()}},{key:"getPosts",value:function(){var e=this;O.a.get("/api/v1/posting/").then((function(t){var a=t.data;e.setState({posts:a})}))}},{key:"getUserPosts",value:function(){var e=this;O.a.get("https://my-json-server.typicode.com/bcatoto/freat/posts").then((function(t){var a=t.data;e.setState({userPosts:a})}))}},{key:"addPost",value:function(e){O.a.post("https://my-json-server.typicode.com/bcatoto/freat/posts",{post:e}).then((function(e){console.log(e),console.log(e.data)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"app"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:E}),r.a.createElement(d.a,{render:function(t){return r.a.createElement(C,Object.assign({},t,{addPost:e.addPost,user:e.state.user}))}})),r.a.createElement(d.a,{path:"/Home",render:function(t){return r.a.createElement(H,Object.assign({},t,{posts:e.state.posts,user:e.state.user}))}}),r.a.createElement(d.a,{path:"/profile",render:function(t){return r.a.createElement(L,Object.assign({},t,{posts:e.state.userPosts,user:e.state.user}))}}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(s.a,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},42:function(e,t,a){e.exports=a.p+"static/media/berries.8d8e3e79.png"},79:function(e,t,a){e.exports=a(142)},84:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.4e0868dc.chunk.js.map