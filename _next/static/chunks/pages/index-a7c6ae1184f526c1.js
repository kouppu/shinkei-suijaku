(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8381)}])},8381:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var e=r(5893),i=r(7948),a=r(2293),c=r(155),o=r(5861),s=r(8140),u=function(){return(0,e.jsx)(a.Z,{position:"static",children:(0,e.jsx)(i.Z,{maxWidth:"xl",children:(0,e.jsxs)(c.Z,{disableGutters:!0,children:[(0,e.jsx)(s.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),(0,e.jsx)(o.Z,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"\u795e\u7d4c\u8870\u5f31"})]})})})},f=r(7294),d=r(6242),h=r(2023),l=r(4267),x=r(7357),m=r(2757),v=r(8141),w=r(3486);function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var C=function(){function n(t,r){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(p(this,n),n.MIN_NUMBER>r||n.MAX_NUMBER<r)throw"Number is invalid.";this.type=t,this.number=r,this.isFront=e}var t=n.prototype;return t.equal=function(n){return this.number===n.number&&this.type===n.type},t.equalNumber=function(n){return this.number===n.number},t.faceUp=function(){return new n(this.type,this.number,!0)},t.faceDown=function(){return new n(this.type,this.number,!1)},n}();C.MIN_NUMBER=1,C.MAX_NUMBER=13;var b=function(){function n(t){if(function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.MAX_CARD_LENGTH=52,this.MAX_CARD_LENGTH<t.length)throw"The max number of cards has been exceeded.";this.cards=t}var t=n.prototype;return t.add=function(t){return new n(this.cards.concat(t))},t.remove=function(t){var r=this.cards.indexOf(t);return-1!==r&&new n(this.cards.filter((function(n,t){return t!=r})))},t.shuffle=function(){return new n(this.shuffleArray(this.cards))},t.faceUpCard=function(t){var r=this.findIndexOfCard(t);if(-1===r)throw"Not find card in cards";return this.cards[r]=t.faceUp(),new n(this.cards)},t.faceDownCard=function(t){var r=this.findIndexOfCard(t);if(-1===r)throw"Not find card in cards";return this.cards[r]=t.faceDown(),new n(this.cards)},t.findIndexOfCard=function(n){var t=-1;return this.cards.forEach((function(r,e){r.equal(n)&&(t=e)})),t},t.shuffleArray=function(n){for(var t=n.length-1;t>0;t-=1){var r=Math.floor(Math.random()*(t+1)),e=n[t];n[t]=n[r],n[r]=e}return n},n}(),y=Object.values({FIRST:"first",SECOND:"second"});var j=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.move=t}var t=n.prototype;return t.next=function(){var t=y.indexOf(this.move),r=y[t+1];return new n(void 0===r?"first":r)},t.isCurrentMove=function(n){return this.move===n},n}();var N=function(){function n(t){if(function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t<n.MIN_POINT)throw"Value must be 0 or more.";this.value=t}return n.prototype.add=function(t){return new n(this.value+t)},n}();N.MIN_POINT=0;var _=Object.values({SPADE:"spade",HEART:"heart",DIAMOND:"diamond",CLUB:"club"}),E=r(9007),M=r(1752);function k(n){return(0,M.default)().publicRuntimeConfig.urlPrefix+n}var I=function(n){return(0,e.jsx)(E.Z,{children:(0,e.jsx)("img",{onClick:function(){return n.handleCardItemClick(n.card)},src:n.card.isFront?k("/cards/".concat(n.card.type,"/").concat(n.card.number,".png")):k("/cards/back.png"),alt:"Card",loading:"lazy"})},"".concat(n.card.type).concat(n.card.number))},Z=r(5450),T=function(n){return(0,e.jsx)(Z.Z,{cols:13,children:n.deck.cards.map((function(t){return(0,e.jsx)(I,{card:t,handleCardItemClick:n.handleCardItemClick},"".concat(t.type,"-").concat(t.number))}))})},O=function(){var n=(0,f.useState)(new j("first")),t=n[0],r=n[1],i=(0,f.useState)(new b([])),a=i[0],c=i[1],o=(0,f.useState)(new N(0)),s=o[0],u=o[1],p=(0,f.useState)(),y=p[0],E=p[1],M=(0,f.useState)(!1),k=M[0],I=M[1];(0,f.useEffect)((function(){c(D())}),[]);var Z=function(n){k||t.isCurrentMove("first")&&(n.isFront||(E(n),g(n),r(t.next())))},O=function(n){k||t.isCurrentMove("second")&&(n.isFront||y&&(y.equal(n)||(g(n),I(!0),setTimeout((function(){y.equalNumber(n)?u(s.add(1)):(A(y),A(n)),r(t.next()),I(!1)}),1e3))))},g=function(n){c(a.faceUpCard(n))},A=function(n){c(a.faceDownCard(n))},D=function(){var n=new b([]),t=!0,r=!1,e=void 0;try{for(var i,a=_[Symbol.iterator]();!(t=(i=a.next()).done);t=!0)for(var c=i.value,o=1;o<=C.MAX_NUMBER;o++){var s=new C(c,o,!1);n=n.add(s)}}catch(u){r=!0,e=u}finally{try{t||null==a.return||a.return()}finally{if(r)throw e}}return n.shuffle()};return(0,e.jsxs)(d.Z,{sx:{background:w.Z[900],mt:5},children:[(0,e.jsx)(l.Z,{children:(0,e.jsx)(T,{deck:a,handleCardItemClick:function(n){if(!k)switch(t.move){case"first":Z(n);break;case"second":O(n);break;default:throw"Undefined move"}}})}),(0,e.jsxs)(h.Z,{children:[(0,e.jsx)(x.Z,{sx:{flexGrow:1}}),(0,e.jsx)(m.Z,{icon:(0,e.jsx)(v.Z,{}),label:s.value})]})]})},g=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("header",{children:(0,e.jsx)(u,{})}),(0,e.jsx)("main",{children:(0,e.jsx)(i.Z,{children:(0,e.jsx)("section",{children:(0,e.jsx)(O,{})})})})]})}}},function(n){n.O(0,[368,774,888,179],(function(){return t=8312,n(n.s=t);var t}));var t=n.O();_N_E=t}]);