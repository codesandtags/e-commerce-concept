(this["webpackJsonpe-commerce-concept"]=this["webpackJsonpe-commerce-concept"]||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/logo-blue.48814db1.png"},38:function(e,t,a){e.exports=a(74)},47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),i=a.n(c),l=a(12),s=a(3),o=a(18),m=a(34),u=a.n(m),p=a(4),d=function(e){return{type:"SET_CURRENT_USER",payload:e}},b={currentUser:null},g=function(e){return{type:"ADD_ITEM",payload:e}},h=a(37),f=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(h.a)(e),[Object(p.a)(Object(p.a)({},t),{},{quantity:1})])},E=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity-1}):e}))},v={hidden:!0,cartItems:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_CART_HIDDEN":return Object(p.a)(Object(p.a)({},e),{},{hidden:!e.hidden});case"ADD_ITEM":return Object(p.a)(Object(p.a)({},e),{},{cartItems:f(e.cartItems,t.payload)});case"REMOVE_ITEM":return Object(p.a)(Object(p.a)({},e),{},{cartItems:E(e.cartItems,t.payload)});case"CLEAR_ITEM_FROM_CART":return Object(p.a)(Object(p.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},k=Object(o.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(p.a)(Object(p.a)({},e),{},{currentUser:t.payload});default:return e}},cart:y}),N=[u.a],O=Object(o.d)(k,o.a.apply(void 0,N));a(47),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(6),j=a.n(w),U=a(13),C=a(5),S=(a(49),a(14)),I=(a(50),[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:1,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:2,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:3,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:4,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:5,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:6,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:7,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:8,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:1,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:2,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:3,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:4,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:5,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:1,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:2,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:3,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:4,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:5,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:6,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:7,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:1,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:2,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:3,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:4,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:5,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:6,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}]),T=(a(51),a(52),a(21)),x=(a(53),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,c=Object(T.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(n?"inverted":""," ").concat(a?"google-sign-in":""," custom-button")},c),t)}),B=function(e){var t=e.item,a=t.name,n=t.price,c=t.imageUrl,i=Object(s.b)();return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},n)),r.a.createElement(x,{onClick:function(){return i(g(t))},inverted:!0},"Add to cart"))},R=Object(C.g)((function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(B,{key:e.id,item:e})}))))})),M=function(){var e=Object(n.useState)(I),t=Object(S.a)(e,1)[0];return r.a.createElement("div",{className:"shop-page"},t.map((function(e){return r.a.createElement(R,{key:e.id,title:e.title,items:e.items})})))},P=(a(55),a(56),a(57),Object(C.g)((function(e){var t=e.title,a=e.imageUrl,n=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"Shop Now")))}))),_=function(){return r.a.createElement("div",{className:"directory-menu"},[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}].map((function(e){var t=e.id,a=Object(T.a)(e,["id"]);return r.a.createElement(P,Object.assign({key:t},a))})))},A=function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(_,null))},G=(a(58),a(35)),D=a.n(G),q=a(15),W=a.n(q);a(59),a(63),a(75);W.a.initializeApp({apiKey:"AIzaSyBs0Ct-oih20-wtxf_QI_RzeQ_6l3Yn-XM",authDomain:"e-commerce-concept.firebaseapp.com",databaseURL:"https://e-commerce-concept.firebaseio.com",projectId:"e-commerce-concept",storageBucket:"e-commerce-concept.appspot.com",messagingSenderId:"484417921655",appId:"1:484417921655:web:c9194f10aa8bc071b4dc72",measurementId:"G-BVE30ZM1LH"}),W.a.analytics();var J=W.a.auth(),z=W.a.firestore(),H=new W.a.auth.GoogleAuthProvider;H.setCustomParameters({prompt:"select_account"});var L=function(){return J.signInWithPopup(H)},V=new W.a.auth.FacebookAuthProvider;V.setCustomParameters({prompt:"select_account"});var F=new W.a.auth.GithubAuthProvider;F.setCustomParameters({prompt:"select_account"});var Q=function(){return J.signInWithPopup(F)},Y=function(){var e=Object(U.a)(j.a.mark((function e(t,a){var n,r,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=z.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,n.set(Object(p.a)({displayName:r,email:c,createdAt:i},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}();W.a;function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Z=r.a.createElement("g",null),$=r.a.createElement("g",null),ee=r.a.createElement("g",null),te=r.a.createElement("g",null),ae=r.a.createElement("g",null),ne=r.a.createElement("g",null),re=r.a.createElement("g",null),ce=r.a.createElement("g",null),ie=r.a.createElement("g",null),le=r.a.createElement("g",null),se=r.a.createElement("g",null),oe=r.a.createElement("g",null),me=r.a.createElement("g",null),ue=r.a.createElement("g",null),pe=r.a.createElement("g",null),de=function(e){var t=e.svgRef,a=e.title,n=X(e,["svgRef","title"]);return r.a.createElement("svg",K({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Z,$,ee,te,ae,ne,re,ce,ie,le,se,oe,me,ue,pe)},be=r.a.forwardRef((function(e,t){return r.a.createElement(de,K({svgRef:t},e))})),ge=(a.p,a(65),function(e){return e.cart.cartItems}),he=function(e){return e.cart.hidden},fe=function(e){return e.cart.cartItems.reduce((function(e,t){return e+t.quantity}),0)},Ee=function(e){return e.cart.cartItems.reduce((function(e,t){return e+t.quantity*t.price}),0)},ve=function(){var e=Object(s.b)(),t=Object(s.c)(fe);return r.a.createElement("div",{className:"cart-icon",onClick:function(){return e({type:"TOGGLE_CART_HIDDEN"})}},r.a.createElement(be,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},t))},ye=(a(66),a(67),function(e){var t=e.item,a=t.imageUrl,n=t.price,c=t.name,i=t.quantity;Object(s.b)();return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",n)))}),ke=Object(C.g)((function(e){var t=e.history,a=Object(s.c)(ge),n=Object(s.b)();return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},a.length?a.map((function(e){return r.a.createElement(ye,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(x,{onClick:function(){t.push("/checkout"),n({type:"TOGGLE_CART_HIDDEN"})}},"GO TO CHECKOUT"))})),Ne=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return console.log("State => ",e),e.user})),a=Object(s.c)(he),n=function(){var t=Object(U.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J.signOut();case 2:e(d(null));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("header",{className:"header"},r.a.createElement(l.b,{className:"logo-container",to:"/"},r.a.createElement("img",{className:"logo",src:D.a,alt:"Clothing Center"}),"Clothing Center"),r.a.createElement("div",{className:"options"},r.a.createElement(l.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(l.b,{className:"option",to:"/contact"},"CONTACT"),t.currentUser?r.a.createElement("div",{className:"option",onClick:n},"SIGN OUT"):r.a.createElement(l.b,{className:"option",to:"/sign-in"},"SIGN IN"),r.a.createElement(ve,null)),a?null:r.a.createElement(ke,null))},Oe=(a(68),a(69),a(70),function(e){var t=e.label,a=e.handleChange,n=Object(T.a)(e,["label","handleChange"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:a},n)),t?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},t):null)}),we=function(){var e=Object(n.useState)(""),t=Object(S.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),l=Object(S.a)(i,2),s=l[0],o=l[1],m=function(){var e=Object(U.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,J.signInWithEmailAndPassword(a,s);case 4:c(""),o(""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert("Upppss wrong email or password");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",{className:"title"},"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:m},r.a.createElement(Oe,{name:"email",type:"email",handleChange:function(e){return c(e.target.value)},value:a,label:"email",required:!0}),r.a.createElement(Oe,{name:"password",type:"password",value:s,handleChange:function(e){return o(e.target.value)},label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(x,{type:"submit"}," Sign in "),r.a.createElement(x,{type:"button",onClick:L,isGoogleSignIn:!0},"Sign in with Google"),r.a.createElement(x,{type:"button",onClick:Q,isGoogleSignIn:!0},"Sign in with Github"))))},je=(a(71),function(){var e=Object(n.useState)(""),t=Object(S.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),l=Object(S.a)(i,2),s=l[0],o=l[1],m=Object(n.useState)(""),u=Object(S.a)(m,2),p=u[0],d=u[1],b=Object(n.useState)(""),g=Object(S.a)(b,2),h=g[0],f=g[1],E=function(){var e=Object(U.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p===h){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:return e.prev=4,e.next=7,J.createUserWithEmailAndPassword(a,p);case 7:return n=e.sent,r=n.user,e.next=11,Y(r,{displayName:s});case 11:o(""),c(""),d(""),f(""),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:E},r.a.createElement(Oe,{type:"text",name:"displayName",value:s,handleChange:function(e){return o(e.target.value)},label:"Display Name",required:!0}),r.a.createElement(Oe,{type:"email",name:"email",value:a,handleChange:function(e){return c(e.target.value)},label:"Email",required:!0}),r.a.createElement(Oe,{type:"password",name:"password",value:p,handleChange:function(e){return d(e.target.value)},label:"Password",required:!0}),r.a.createElement(Oe,{type:"password",name:"confirmPassword",value:h,handleChange:function(e){return f(e.target.value)},label:"Confirm Password",required:!0}),r.a.createElement(x,{type:"submit"},"SIGN UP")))}),Ue=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(we,null),r.a.createElement(je,null))},Ce=(a(72),a(73),function(e){var t=e.cartItem,a=t.name,n=t.imageUrl,c=t.price,i=t.quantity,l=Object(s.b)();return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:n,alt:"item"})),r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return l({type:"REMOVE_ITEM",payload:t})}},"\u276e"),r.a.createElement("span",{className:"value"},i),r.a.createElement("div",{className:"arrow",onClick:function(){return l(g(t))}},"\u276f")),r.a.createElement("span",{className:"price"},c),r.a.createElement("div",{className:"remove-button",onClick:function(){return l({type:"CLEAR_ITEM_FROM_CART",payload:t})}},"\u2715"))}),Se=function(){var e=Object(s.c)((function(e){return e.cart.cartItems})),t=(Object(s.b)(),Object(s.c)(Ee));return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),e.map((function(e){return r.a.createElement(Ce,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},"TOTAL: $",t))};var Ie=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return console.log("State => ",e),e.user}));return Object(n.useEffect)((function(){console.log("Calling auth...");var t=J.onAuthStateChanged(function(){var t=Object(U.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=6;break}return console.log("User logged ",a),t.next=4,Y(a);case 4:t.sent.onSnapshot((function(t){e(d(Object(p.a)({id:t.id},t.data())))}));case 6:d(a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());return function(){console.log("Doing unsubscribe...."),t()}}),[d]),r.a.createElement("div",{className:"App"},r.a.createElement(Ne,null),r.a.createElement(C.d,null,r.a.createElement(C.b,{exact:!0,path:"/",component:A}),r.a.createElement(C.b,{path:"/shop",component:M}),r.a.createElement(C.b,{exact:!0,path:"/checkout",component:Se}),r.a.createElement(C.b,{exact:!0,path:"/sign-in",render:function(){return t.currentUser?r.a.createElement(C.a,{to:"/"}):r.a.createElement(Ue,null)}})))};i.a.render(r.a.createElement(s.a,{store:O},r.a.createElement(l.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ie,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.90c0b613.chunk.js.map