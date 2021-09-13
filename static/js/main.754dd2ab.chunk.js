(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},52:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(19),o=a.n(c),s=(a(26),a(4)),i=a(5),l=a(7),u=a(6),h=(a(27),a(28),a(0)),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleInputChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):alert("Write your search query")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(h.jsx)("input",{className:"SearchForm-input",type:"text",placeholder:"Search images and photos",value:this.state.searchQuery,name:"value",onChange:this.handleInputChange}),Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})})]})})}}]),a}(n.Component),m=a(10),p=(a(30),a(31),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).getId=function(t){var a=t.currentTarget.id;e.props.onClick(a)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.props.images.map((function(t){var a=t.largeImageURL,n=t.id;return Object(h.jsx)("li",{id:n,className:"ImageGalleryItem",onClick:e.getId,children:Object(h.jsx)("img",{src:a,alt:"",className:"ImageGalleryItem-image"})},n)}))}}]),a}(n.Component));a(32);function j(e){var t=e.value,a=e.onClick;return Object(h.jsx)("button",{type:"button",onClick:a,className:"Button",children:t})}var b=a(20),f=a.n(b),g=function(e,t){return f.a.get("https://pixabay.com/api/",{params:{q:e,key:"22683301-b01030d0df8a1fa2bda925efb",image_type:"photo",orientation:"horizontal",per_page:12,page:t}})},v=(a(52),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.src;return Object(h.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:e.largeImageURL,alt:""})})})}}]),a}(n.Component)),y=a(21),O=a.n(y),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={page:1,imagesInfo:[],status:"idle",id:"",showModal:!1},e.handleLoadMore=function(t){e.setState((function(e){return{page:e.page+1}}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.formSubmitHandler=function(t){e.setState({id:t}),e.toggleModal()},e.getInfoById=function(){var t=+e.state.id;return e.state.imagesInfo.find((function(e){return e.id===t}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state.page,r=this.props.searchValue;e.searchValue!==r&&(this.setState({status:"pending",page:1,imagesInfo:[]}),g(r,n).then((function(e){0!==e.data.total?a.setState({imagesInfo:e.data.hits,status:"resolve"}):a.setState({status:"rejected"})}))),e.searchValue===r&&t.page!==n&&g(r,n).then((function(e){var n=e.data.hits;a.setState({imagesInfo:[].concat(Object(m.a)(t.imagesInfo),Object(m.a)(n)),status:"resolve"})})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.imagesInfo,n=e.showModal;return"idle"===t?Object(h.jsx)("h2",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"}):"pending"===t?Object(h.jsx)(O.a,{type:"Oval",color:"#00BFFF",height:80,width:80}):"rejected"===t?Object(h.jsxs)("h2",{children:["\u0418\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ",this.props.searchValue," \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"]}):"resolve"===t?Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("ul",{className:"ImageGallery",children:Object(h.jsx)(p,{images:a,onClick:this.formSubmitHandler})}),Object(h.jsx)(j,{value:"Load more",onClick:this.handleLoadMore}),n&&Object(h.jsx)(v,{onClose:this.toggleModal,src:this.getInfoById()})]}):void 0}}]),a}(n.Component),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleFormSubmit=function(t){e.setState({searchQuery:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d,{onSubmit:this.handleFormSubmit}),Object(h.jsx)(S,{searchValue:this.state.searchQuery})]})}}]),a}(n.Component);o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.754dd2ab.chunk.js.map