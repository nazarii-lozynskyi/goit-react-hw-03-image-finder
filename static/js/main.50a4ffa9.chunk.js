(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={Searchbar:"Searchbar_Searchbar__3o4qP",Form:"Searchbar_Form__2TcgS",Button:"Searchbar_Button__b4TfP",ButtonLabel:"Searchbar_ButtonLabel__1hNCk",Input:"Searchbar_Input__2rjNx"}},,function(e,t,n){e.exports={Image:"ImageGalleryItem_Image__1eCh0",ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2yz0A"}},function(e,t,n){e.exports={ImageGallery:"ImageGallery_ImageGallery__3sZR-"}},,function(e,t,n){e.exports={Overlay:"Modal_Overlay__3dBy6",Modal:"Modal_Modal__38SaN"}},,,,,,function(e,t,n){e.exports={container:"Container_container__1YGLJ"}},function(e,t,n){e.exports={IconButton:"IconButton_IconButton__sAppK"}},function(e,t,n){e.exports={Button:"Button_Button__lyIwQ"}},function(e,t,n){e.exports={Loader:"Loader_Loader__3_q3w",load1:"Loader_load1__3V1Je"}},function(e,t,n){},,,,,,,function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),o=(n(29),n(2)),s=n(3),i=n(5),u=n(4),h=n(8),d=(n(15),n(18)),p=n.n(d),m=n(1);var g=function(e){var t=e.children;return Object(m.jsx)("div",{className:p.a.container,children:t})},b=n(36),j=n(7),f=n.n(j),y=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:"",page:1},e.inputId=Object(b.a)(),e.handleInputValueChange=function(t){e.setState({inputValue:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.inputValue.trim()?(e.props.onSubmit(e.state.inputValue),e.setState({inputValue:"",page:1})):h.b.error("The input field cannot be entry. Pleas, enter something")},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsx)("header",{className:f.a.Searchbar,children:Object(m.jsxs)("form",{className:f.a.Form,onSubmit:this.handleSubmit,children:[Object(m.jsx)("button",{type:"submit",className:f.a.Button,children:Object(m.jsx)("span",{className:f.a.ButtonLabel,children:"Search"})}),Object(m.jsx)("input",{className:f.a.Input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.inputValue,onChange:this.handleInputValueChange,id:this.inputId})]})})}}]),n}(a.Component),O=n(13),v=n(23),x=n.n(v),w=function(){function e(){Object(o.a)(this,e),this.pageNumber=1,this.inputValue="",this.totalHits=0,this.hits=0}return Object(s.a)(e,[{key:"fetchImages",value:function(){var e=this,t="photo",n="horizontal",a="12",r="22982376-5ba816c8dbdcbd488bfab475d",l="".concat("https://pixabay.com/api/","?q=").concat(this.inputValue,"&page=").concat(this.pageNumber,"&key=").concat(r,"&image_type=").concat(t,"&orientation=").concat(n,"&per_page=").concat(a);return fetch(l).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not Found :("))})).then((function(t){return e.pageNumber+=1,e.totalHits=t.totalHits,e.hits+=t.hits.length,t}))}},{key:"resetPage",value:function(){this.pageNumber=1}},{key:"resetAmount",value:function(){this.hits=0}},{key:"value",get:function(){return this.inputValue},set:function(e){this.inputValue=e}}]),e}(),_=n(12),C=n.n(_),k=document.querySelector("#modal-root"),I=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(l.createPortal)(Object(m.jsx)("div",{className:C.a.Overlay,onClick:this.handleOverlayClick,children:Object(m.jsx)("div",{className:C.a.Modal,children:this.props.children})}),k)}}]),n}(a.Component),S=n(14),E=n(24),L=n(19),M=n.n(L),N=["onClick","children"],B=function(e){var t=e.onClick,n=e.children,a=Object(E.a)(e,N);return Object(m.jsx)("button",Object(S.a)(Object(S.a)({type:"button",className:M.a.IconButton,onClick:function(){return t()}},a),{},{children:n}))};B.defaultProps={onClick:function(){return null},children:null};var V,F,H,P,z,G,D,T,A,R,U,q,J,K,Y,Q,W,X,Z,$=B,ee=["title","titleId"];function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},te.apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ae(e,t){var n=e.title,r=e.titleId,l=ne(e,ee);return a.createElement("svg",te({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 502 502",style:{enableBackground:"new 0 0 502 502"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},l),n?a.createElement("title",{id:r},n):null,a.createElement("g",null,a.createElement("g",null,a.createElement("circle",{style:{fill:"#4EC9DC"},cx:251,cy:251,r:241}),V||(V=a.createElement("path",{d:"M251,502c-67.045,0-130.076-26.108-177.483-73.517C26.108,381.076,0,318.045,0,251S26.108,120.924,73.517,73.517 C120.924,26.108,183.955,0,251,0s130.076,26.108,177.483,73.517C475.892,120.924,502,183.955,502,251 s-26.108,130.076-73.517,177.483C381.076,475.892,318.045,502,251,502z M251,20C123.626,20,20,123.626,20,251s103.626,231,231,231 s231-103.626,231-231S378.374,20,251,20z"}))),a.createElement("g",null,a.createElement("path",{style:{fill:"#D1DCEB"},d:"M281.291,249l76.729-76.729c8.641-8.641,8.641-22.651,0-31.291c-8.641-8.641-22.651-8.641-31.291,0 L250,217.709l-76.729-76.729c-8.641-8.641-22.651-8.641-31.291,0c-8.641,8.641-8.641,22.651,0,31.291L218.709,249l-76.729,76.729 c-8.641,8.641-8.641,22.651,0,31.291c4.32,4.32,9.984,6.48,15.646,6.48s11.325-2.16,15.646-6.48L250,280.291l76.729,76.729 c4.32,4.32,9.984,6.48,15.646,6.48s11.325-2.16,15.646-6.48c8.641-8.641,8.641-22.651,0-31.291L281.291,249z"}),F||(F=a.createElement("path",{d:"M342.374,373.5c-8.582,0-16.649-3.341-22.717-9.408L250,294.434l-69.657,69.658c-6.067,6.067-14.135,9.408-22.717,9.408 c-8.581,0-16.648-3.341-22.717-9.407c-12.527-12.527-12.527-32.909-0.001-45.436L204.566,249l-69.658-69.657 c-12.525-12.526-12.525-32.907,0-45.434c6.068-6.068,14.137-9.41,22.718-9.41s16.649,3.343,22.717,9.411L250,203.566 l69.657-69.657c6.067-6.067,14.136-9.41,22.717-9.41s16.649,3.342,22.718,9.41c12.525,12.526,12.525,32.907,0,45.434L295.434,249 l69.658,69.657c12.526,12.526,12.526,32.908,0,45.435C359.022,370.159,350.955,373.5,342.374,373.5z M250,270.291 c2.652,0,5.195,1.054,7.071,2.929l76.729,76.729c2.289,2.29,5.335,3.551,8.574,3.551c3.24,0,6.285-1.262,8.576-3.552 c4.728-4.728,4.728-12.421-0.001-17.148l-76.729-76.729c-1.875-1.876-2.929-4.419-2.929-7.071s1.054-5.195,2.929-7.071 l76.729-76.729c4.729-4.728,4.729-12.421,0-17.148c-2.29-2.291-5.336-3.553-8.575-3.553s-6.284,1.262-8.574,3.552l-76.729,76.729 c-3.906,3.904-10.236,3.904-14.143,0L166.2,148.052c-2.29-2.291-5.335-3.553-8.574-3.553s-6.285,1.262-8.575,3.553 c-4.729,4.728-4.729,12.421,0,17.148l76.729,76.729c1.875,1.876,2.929,4.419,2.929,7.071s-1.054,5.195-2.929,7.071L149.051,332.8 c-4.729,4.728-4.729,12.421,0,17.149c2.29,2.289,5.335,3.551,8.575,3.551c3.239,0,6.285-1.261,8.574-3.551l76.729-76.729 C244.805,271.345,247.348,270.291,250,270.291z"}))),H||(H=a.createElement("g",null,a.createElement("path",{d:"M50,261c-5.522,0-10-4.478-10-10c0-39.687,11.081-78.358,32.045-111.836c20.387-32.557,49.233-58.957,83.422-76.346 c4.92-2.506,10.942-0.544,13.446,4.38c2.504,4.922,0.543,10.942-4.38,13.446C100.055,113.44,60,178.717,60,251 C60,256.522,55.522,261,50,261z"}))),P||(P=a.createElement("g",null,a.createElement("path",{d:"M209.99,64.187c-4.641,0-8.802-3.249-9.781-7.973c-1.121-5.408,2.354-10.7,7.763-11.821C222.036,41.478,236.513,40,251,40 c5.522,0,10,4.478,10,10s-4.478,10-10,10c-13.127,0-26.238,1.338-38.97,3.977C211.346,64.118,210.663,64.187,209.99,64.187z"})))),z||(z=a.createElement("g",null)),G||(G=a.createElement("g",null)),D||(D=a.createElement("g",null)),T||(T=a.createElement("g",null)),A||(A=a.createElement("g",null)),R||(R=a.createElement("g",null)),U||(U=a.createElement("g",null)),q||(q=a.createElement("g",null)),J||(J=a.createElement("g",null)),K||(K=a.createElement("g",null)),Y||(Y=a.createElement("g",null)),Q||(Q=a.createElement("g",null)),W||(W=a.createElement("g",null)),X||(X=a.createElement("g",null)),Z||(Z=a.createElement("g",null)))}var re=a.forwardRef(ae),le=(n.p,n(9)),ce=n.n(le),oe=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.showModal;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("li",{className:ce.a.Item,onClick:this.toggleModal,children:Object(m.jsx)("img",{src:this.props.src,alt:this.props.alt,className:ce.a.Image})}),e&&Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(I,{onClose:this.toggleModal,children:[Object(m.jsx)($,{onClick:this.toggleModal,"aria-label":"Close Button",children:Object(m.jsx)(re,{width:"40",height:"40"})}),Object(m.jsx)("img",{src:this.props.largeImageURL,alt:this.props.alt,className:ce.a.ImageForModal})]})})]})}}]),n}(a.Component),se=n(20),ie=n.n(se),ue=function(e){var t=e.onClick,n=e.label;return Object(m.jsx)("button",{type:"button",className:ie.a.Button,onClick:function(){return t()},children:n})};ue.defaultProps={onClick:function(){return null}};var he=ue,de=n(21),pe=n.n(de);var me=function(){return Object(m.jsx)("div",{className:pe.a.Loader,children:"Loading..."})},ge=n(22),be=n.n(ge);var je=function(e){var t=e.inputValue,n=e.message;return Object(m.jsxs)("div",{className:be.a.NotFound,children:[Object(m.jsx)("h1",{children:n}),Object(m.jsxs)("p",{children:['Your search "',t,'" did not match any documents.']}),Object(m.jsx)("p",{children:"Suggestions: "}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Make sure that all words are spelled correctly."}),Object(m.jsx)("li",{children:"Try different keywords."}),Object(m.jsx)("li",{children:"Try more general keywords."})]})]})};function fe(){return Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"https://github.com/nazarii-lozynskyi",target:"_blank",children:"By Nazarii Lozynskyi"})})}var ye=n(10),Oe=n.n(ye),ve=new w,xe=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={gallery:null,status:"idle",totalHits:null,error:null},e.loadMoreImages=function(){e.setState({status:"pending"}),ve.fetchImages().then((function(t){e.setState((function(e){return{gallery:[].concat(Object(O.a)(e.gallery),Object(O.a)(t.hits)),status:"resolved",totalHits:t.totalHits}}))})).catch((function(t){return e.setState({error:t,status:"rejected"})})).finally((function(){e.scroll()})),console.log(e.state.totalHits),console.log(e.state.gallery.length)},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this,a=e.inputValue,r=this.props.inputValue;a!==r&&(this.setState({status:"pending"}),ve.value=r,ve.resetPage(),ve.fetchImages().then((function(e){return 0!==e.hits.length?n.setState({gallery:e.hits,status:"resolved",totalHits:e.totalHits}):n.setState({gallery:e.hits,status:"rejected",totalHits:e.totalHits})})))}},{key:"scroll",value:function(){setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),500)}},{key:"render",value:function(){var e=this,t=this.state.status,n=this.props.inputValue;return"idle"===t?Object(m.jsx)(fe,{}):"pending"===t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("ul",{className:Oe.a.ImageGallery,children:this.state.gallery&&this.state.gallery.map((function(e){return Object(m.jsx)("li",{className:Oe.a.Item,children:Object(m.jsx)(x.a,{height:260,width:330})},e.id)}))}),Object(m.jsx)(me,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})]}):"rejected"===t?Object(m.jsx)(je,{inputValue:n,message:this.state.error}):"resolved"===t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("ul",{className:Oe.a.ImageGallery,children:this.state.gallery&&this.state.gallery.map((function(t){return Object(m.jsx)(oe,{src:t.webformatURL,alt:t.tags,onClick:e.toggleModal,largeImageURL:t.largeImageURL},t.id)}))}),this.state.totalHits>12?Object(m.jsx)(he,{onClick:this.loadMoreImages,label:"Load more"}):Object(m.jsx)(m.Fragment,{})]}):void 0}}]),n}(a.Component),we=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:"",showModal:!1},e.handleSearchbarSubmit=function(t){e.setState({inputValue:t,page:1})},e}return Object(s.a)(n,[{key:"loadMore",value:function(){}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y,{onSubmit:this.handleSearchbarSubmit}),Object(m.jsx)(h.a,{theme:"colored",position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),Object(m.jsx)(g,{children:Object(m.jsx)(xe,{inputValue:this.state.inputValue})})]})}}]),n}(a.Component),_e=we;c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(_e,{})}),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.50a4ffa9.chunk.js.map