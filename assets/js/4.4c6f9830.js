(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,n){"use strict";var r=n(23),a=n(38),o=n(55),i=n(40),s=n(148),l=n(150),c=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;n(152)("replace",2,(function(e,t,n,m){return[function(r,a){var o=e(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,a):n.call(String(o),r,a)},function(e,t){var a=m(n,e,this,t);if(a.done)return a.value;var d=r(e),f=String(this),v="function"==typeof t;v||(t=String(t));var b=d.global;if(b){var k=d.unicode;d.lastIndex=0}for(var h=[];;){var g=l(d,f);if(null===g)break;if(h.push(g),!b)break;""===String(g[0])&&(d.lastIndex=s(f,o(d.lastIndex),k))}for(var w,x="",_=0,y=0;y<h.length;y++){g=h[y];for(var T=String(g[0]),C=c(u(i(g.index),f.length),0),N=[],S=1;S<g.length;S++)N.push(void 0===(w=g[S])?w:String(w));var $=g.groups;if(v){var M=[T].concat(N,C,f);void 0!==$&&M.push($);var I=String(t.apply(void 0,M))}else I=p(T,f,C,N,$,t);C>=_&&(x+=f.slice(_,C)+I,_=C+T.length)}return x+f.slice(_)}];function p(e,t,r,o,i,s){var l=r+e.length,c=o.length,u=v;return void 0!==i&&(i=a(i),u=f),n.call(s,u,(function(n,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(l);case"<":s=i[a.slice(1,-1)];break;default:var u=+a;if(0===u)return n;if(u>c){var f=d(u/10);return 0===f?n:f<=c?void 0===o[f-1]?a.charAt(1):o[f-1]+a.charAt(1):n}s=o[u-1]}return void 0===s?"":s}))}}))},148:function(e,t,n){"use strict";var r=n(149)(!0);e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},149:function(e,t,n){var r=n(40),a=n(39);e.exports=function(e){return function(t,n){var o,i,s=String(a(t)),l=r(n),c=s.length;return l<0||l>=c?e?"":void 0:(o=s.charCodeAt(l))<55296||o>56319||l+1===c||(i=s.charCodeAt(l+1))<56320||i>57343?e?s.charAt(l):o:e?s.slice(l,l+2):i-56320+(o-55296<<10)+65536}}},150:function(e,t,n){"use strict";var r=n(151),a=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var o=n.call(e,t);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},151:function(e,t,n){var r=n(54),a=n(13)("toStringTag"),o="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),a))?n:o?r(t):"Object"==(i=r(t))&&"function"==typeof t.callee?"Arguments":i}},152:function(e,t,n){"use strict";n(153);var r=n(36),a=n(18),o=n(25),i=n(39),s=n(13),l=n(81),c=s("species"),u=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var f=s(e),v=!o((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),m=v?!o((function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[c]=function(){return n}),n[f](""),!t})):void 0;if(!v||!m||"replace"===e&&!u||"split"===e&&!d){var p=/./[f],b=n(i,f,""[e],(function(e,t,n,r,a){return t.exec===l?v&&!a?{done:!0,value:p.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}})),k=b[0],h=b[1];r(String.prototype,e,k),a(RegExp.prototype,f,2==t?function(e,t){return h.call(e,this,t)}:function(e){return h.call(e,this)})}}},153:function(e,t,n){"use strict";var r=n(81);n(32)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},154:function(e,t,n){"use strict";var r=n(23);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},155:function(e,t,n){var r=n(34).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(24)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},156:function(e,t,n){"use strict";n.r(t);n(147),n(155),n(42);var r,a,o=n(43),i={name:"Generator",mixins:[n(73).a],data:function(){return{loading:!0,currentNetwork:null,trxHash:"",makingTransaction:!1,formDisabled:!1,token:{},enableTransfer:!0}},mounted:function(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{initDapp:(a=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.network.current=this.network.list[this.currentNetwork],e.prev=1,e.next=4,this.initWeb3(this.currentNetwork,!0);case 4:this.initToken(),this.loading=!1,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0),document.location.href=this.$withBase("/");case 12:case"end":return e.stop()}}),e,this,[[1,8]])}))),function(){return a.apply(this,arguments)}),generateToken:(r=Object(o.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.$refs.observer.validate().then(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n){var r,a,o,i,s,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=30;break}if(t.metamask.installed){e.next=6;break}return alert("To create a Token please install MetaMask!"),e.abrupt("return");case 6:if(t.metamask.netId===t.network.current.id){e.next=9;break}return alert("Your MetaMask in on the wrong network. Please switch on ".concat(t.network.current.name," and try again!")),e.abrupt("return");case 9:if(r=t.token.name,a=t.token.symbol.toUpperCase(),o=new t.web3.BigNumber(t.token.decimals),i=new t.web3.BigNumber(t.token.cap).mul(Math.pow(10,t.token.decimals)),s=new t.web3.BigNumber(t.token.initialBalance).mul(Math.pow(10,t.token.decimals)),l=t.enableTransfer,e.prev=15,t.trxHash="",t.formDisabled=!0,t.makingTransaction=!0,t.legacy){e.next=22;break}return e.next=22,t.web3Provider.enable();case 22:setTimeout((function(){t.contracts.token.new(r,a,o,i,s,l,{from:t.web3.eth.coinbase,data:t.contracts.token.bytecode},(function(e,n){e?(t.makingTransaction=!1,t.formDisabled=!1):n.address?(t.token.address=n.address,t.token.link=t.network.current.etherscanLink+"/token/"+t.token.address,t.$forceUpdate()):(t.trxHash=n.transactionHash,t.trxLink=t.network.current.etherscanLink+"/tx/"+t.trxHash)}))}),500),e.next=30;break;case 25:e.prev=25,e.t0=e.catch(15),t.makingTransaction=!1,t.formDisabled=!1,alert("Some error occurred. Maybe you rejected the transaction or you have MetaMask locked!");case 30:case"end":return e.stop()}}),e,null,[[15,25]])})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),t.makingTransaction=!1,alert("Some error occurred.")}));case 1:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)}),getParam:function(e){var t={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(e,n,r){t[n]=void 0!==r?r:""})),e?t[e]?t[e]:null:t}}},s=n(2),l=Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",[n("b-col",{staticClass:"mt-4 p-0",attrs:{lg:"10","offset-lg":"1"}},[e.loading?e._e():n("b-card",{attrs:{"bg-variant":"light",title:e.$site.title}},[n("p",{staticClass:"card-text"},[e._v("\n                "+e._s(e.$site.description)+"\n            ")]),e._v(" "),e.metamask.installed?e._e():n("small",[e._v("\n                You need the "),n("a",{attrs:{href:"https://metamask.io/",target:"_blank"}},[e._v("MetaMask")]),e._v(" extension.\n            ")]),e._v(" "),n("b-alert",{staticClass:"mt-3",attrs:{variant:"success",show:e.makingTransaction}},[n("div",[e._v("Making transaction.")]),e._v(" "),e.trxHash?n("div",[n("b",[e._v("Well! Transaction done!")]),n("br"),e._v("\n                    Transaction id "),n("a",{attrs:{href:e.trxLink,target:"_blank"}},[n("span",{domProps:{innerHTML:e._s(e.trxHash)}})]),n("br"),e._v("\n\n                    Retrieving Token.\n                    "),e.token.address?n("div",[n("b",[e._v("Your Token")]),e._v(" "),n("b-link",{attrs:{href:e.token.link,target:"_blank"}},[n("span",{domProps:{innerHTML:e._s(e.token.address)}})])],1):n("div",[e._v("Please wait...")])]):n("div",[e._v("Please wait...")])]),e._v(" "),e.makingTransaction?e._e():n("ValidationObserver",{ref:"observer",staticClass:"mt-3",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),e.generateToken()}}},[n("fieldset",{attrs:{disabled:e.formDisabled}},[n("b-card",[n("b-row",[n("b-col",{attrs:{lg:"4"}},[n("ValidationProvider",{attrs:{name:"token name",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("b-form-group",{attrs:{description:"Choose a name for your token.",label:"Token name *","label-for":"tokenName"}},[n("b-form-input",{class:{"is-invalid":r.length>0},attrs:{id:"tokenName",name:"tokenName",placeholder:"Your token name",maxlength:"20"},model:{value:e.token.name,callback:function(t){e.$set(e.token,"name","string"==typeof t?t.trim():t)},expression:"token.name"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:r.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                            "+e._s(r[0])+"\n                                        ")])],1)]}}],null,!1,2879490500)})],1),e._v(" "),n("b-col",{attrs:{lg:"4"}},[n("ValidationProvider",{attrs:{name:"token symbol",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("b-form-group",{attrs:{description:"Choose a symbol for your token (usually 3-4 chars).",label:"Token symbol *","label-for":"tokenSymbol"}},[n("b-form-input",{class:{"is-invalid":r.length>0},attrs:{id:"tokenSymbol",name:"tokenSymbol",placeholder:"Your token symbol",maxlength:"5"},model:{value:e.token.symbol,callback:function(t){e.$set(e.token,"symbol","string"==typeof t?t.trim():t)},expression:"token.symbol"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:r.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                            "+e._s(r[0])+"\n                                        ")])],1)]}}],null,!1,3063288249)})],1),e._v(" "),n("b-col",{attrs:{lg:"4"}},[n("ValidationProvider",{attrs:{name:"token decimals",rules:{required:!0,numeric:!0,min_value:0,max_value:36}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("b-form-group",{attrs:{description:"Insert the decimal precision of your token. If you don't know what to insert, use 18.",label:"Token decimals *","label-for":"tokenDecimals"}},[n("b-form-input",{class:{"is-invalid":r.length>0},attrs:{id:"tokenDecimals",name:"tokenDecimals",placeholder:"Your token decimals",step:"1"},model:{value:e.token.decimals,callback:function(t){e.$set(e.token,"decimals","string"==typeof t?t.trim():t)},expression:"token.decimals"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:r.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                            "+e._s(r[0])+"\n                                        ")])],1)]}}],null,!1,1014607358)})],1)],1)],1),e._v(" "),n("b-card",{staticClass:"mt-3"},[n("b-row",[n("b-col",{attrs:{lg:"4"}},[n("ValidationProvider",{attrs:{name:"token cap",rules:{required:!0,numeric:!0,min_value:1,max_value:1e15}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("b-form-group",{attrs:{description:"Insert the maximum number of tokens available.",label:"Token cap *","label-for":"tokenCap"}},[n("b-form-input",{class:{"is-invalid":r.length>0},attrs:{id:"tokenCap",name:"tokenCap",placeholder:"Your token cap",step:"1"},model:{value:e.token.cap,callback:function(t){e.$set(e.token,"cap","string"==typeof t?t.trim():t)},expression:"token.cap"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:r.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                            "+e._s(r[0])+"\n                                        ")])],1)]}}],null,!1,2318064986)})],1),e._v(" "),n("b-col",{attrs:{lg:"4"}},[n("ValidationProvider",{attrs:{name:"token initial balance",rules:{required:!0,numeric:!0,min_value:0,max_value:e.token.cap||0}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("b-form-group",{attrs:{description:"Insert the initial number of tokens available. Will be put in your account.",label:"Token initial balance *","label-for":"tokenInitialBalance"}},[n("b-form-input",{class:{"is-invalid":r.length>0},attrs:{id:"tokenInitialBalance",name:"tokenInitialBalance",placeholder:"Your token initial balance",step:"1"},model:{value:e.token.initialBalance,callback:function(t){e.$set(e.token,"initialBalance","string"==typeof t?t.trim():t)},expression:"token.initialBalance"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:r.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                            "+e._s(r[0])+"\n                                        ")])],1)]}}],null,!1,2394946845)})],1),e._v(" "),n("b-col",{attrs:{lg:"4"}},[n("b-form-group",{attrs:{description:"Choose your Network.",label:"Network *","label-for":"network"}},[n("b-form-select",{attrs:{id:"network"},on:{input:e.initDapp},model:{value:e.currentNetwork,callback:function(t){e.currentNetwork=t},expression:"currentNetwork"}},e._l(e.network.list,(function(t,r){return n("option",{domProps:{value:r}},[e._v(e._s(t.name))])})),0)],1)],1)],1)],1),e._v(" "),n("b-card",{staticClass:"mt-3"},[n("b-row",[n("b-col",{attrs:{lg:"12"}},[n("b-form-group",{attrs:{description:"Choose to enable transfer during deploy or enable manually later.",label:"Enable transfer","label-for":"enableTransfer"}},[n("b-form-select",{attrs:{id:"network"},model:{value:e.enableTransfer,callback:function(t){e.enableTransfer=t},expression:"enableTransfer"}},[n("option",{domProps:{value:!0}},[e._v("Enable transfer during deploy")]),e._v(" "),n("option",{domProps:{value:!1}},[e._v("Enable transfer manually later")])])],1),e._v(" "),!1===e.enableTransfer?n("b-alert",{attrs:{show:"",variant:"warning"}},[n("strong",[e._v("\n                                        NOTE: If you don't enable transfer during deploy, tokens won't be\n                                        transferable until you call the "),n("i",[e._v("enableTransfer")]),e._v(" function.\n                                    ")]),n("br"),e._v("\n                                    Only people (or smart contract) with "),n("i",[e._v("Operator")]),e._v(" role will be able to\n                                    transfer tokens."),n("br"),e._v("\n                                    Contract creator will be Operator by default, so he can transfer tokens also\n                                    when transfer is not enabled."),n("br"),e._v("\n                                    You can also add or remove the Operator role to addresses."),n("br"),e._v("\n                                    This is because, by business choices, you may decide not to enable transfer\n                                    until a specific time.\n                                ")]):e._e()],1)],1)],1),e._v(" "),n("b-row",{staticClass:"mt-3"},[n("b-col",{attrs:{lg:"12"}},[n("b-button",{attrs:{variant:"success",size:"lg",type:"submit"}},[e._v("Create Token")])],1)],1)],1)])],1)],1)],1)}),[],!1,null,null,null);t.default=l.exports},81:function(e,t,n){"use strict";var r,a,o=n(154),i=RegExp.prototype.exec,s=String.prototype.replace,l=i,c=(r=/a/,a=/b*/g,i.call(r,"a"),i.call(a,"a"),0!==r.lastIndex||0!==a.lastIndex),u=void 0!==/()??/.exec("")[1];(c||u)&&(l=function(e){var t,n,r,a,l=this;return u&&(n=new RegExp("^"+l.source+"$(?!\\s)",o.call(l))),c&&(t=l.lastIndex),r=i.call(l,e),c&&r&&(l.lastIndex=l.global?r.index+r[0].length:t),u&&r&&r.length>1&&s.call(r[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(r[a]=void 0)})),r}),e.exports=l}}]);