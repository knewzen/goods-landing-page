!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Popper=t()}(this,function(){"use strict";function e(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}function t(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},fe))}}function n(e){var t={};return e&&"[object Function]"===t.toString.call(e)}function r(e,t){if(1!==e.nodeType)return[];var n=getComputedStyle(e,null);return t?n[t]:n}function o(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function i(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=r(e),n=t.overflow,a=t.overflowX;return/(auto|scroll)/.test(n+t.overflowY+a)?e:i(o(e))}function a(e){var t=e&&e.offsetParent,n=t&&t.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TD","TABLE"].indexOf(t.nodeName)&&"static"===r(t,"position")?a(t):t:e?e.ownerDocument.documentElement:document.documentElement}function f(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||a(e.firstElementChild)===e)}function s(e){return null!==e.parentNode?s(e.parentNode):e}function p(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?e:t,o=n?t:e,i=document.createRange();i.setStart(r,0),i.setEnd(o,0);var l=i.commonAncestorContainer;if(e!==l&&t!==l||r.contains(o))return f(l)?l:a(l);var u=s(e);return u.host?p(u.host,t):p(e,s(t).host)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",r=e.nodeName;if("BODY"===r||"HTML"===r){var o=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||o)[n]}return e[n]}function u(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=l(t,"top"),o=l(t,"left"),i=n?-1:1;return e.top+=r*i,e.bottom+=r*i,e.left+=o*i,e.right+=o*i,e}function c(e,t){var n="x"===t?"Left":"Top",r="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+r+"Width"],10)}function d(e,t,n,r){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],ce()?n["offset"+e]+r["margin"+("Height"===e?"Top":"Left")]+r["margin"+("Height"===e?"Bottom":"Right")]:0)}function h(){var e=document.body,t=document.documentElement,n=ce()&&getComputedStyle(t);return{height:d("Height",e,t,n),width:d("Width",e,t,n)}}function m(e){return ge({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var t={};if(ce())try{t=e.getBoundingClientRect();var n=l(e,"top"),o=l(e,"left");t.top+=n,t.left+=o,t.bottom+=n,t.right+=o}catch(e){}else t=e.getBoundingClientRect();var i={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},a="HTML"===e.nodeName?h():{},f=a.width||e.clientWidth||i.right-i.left,s=a.height||e.clientHeight||i.bottom-i.top,p=e.offsetWidth-f,u=e.offsetHeight-s;if(p||u){var d=r(e);p-=c(d,"x"),u-=c(d,"y"),i.width-=p,i.height-=u}return m(i)}function v(e,t){var n=ce(),o="HTML"===t.nodeName,a=g(e),f=g(t),s=i(e),p=r(t),l=parseFloat(p.borderTopWidth,10),c=parseFloat(p.borderLeftWidth,10),d=m({top:a.top-f.top-l,left:a.left-f.left-c,width:a.width,height:a.height});if(d.marginTop=0,d.marginLeft=0,!n&&o){var h=parseFloat(p.marginTop,10),v=parseFloat(p.marginLeft,10);d.top-=l-h,d.bottom-=l-h,d.left-=c-v,d.right-=c-v,d.marginTop=h,d.marginLeft=v}return(n?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(d=u(d,t)),d}function b(e){var t=e.ownerDocument.documentElement,n=v(e,t),r=Math.max(t.clientWidth,window.innerWidth||0),o=Math.max(t.clientHeight,window.innerHeight||0),i=l(t),a=l(t,"left");return m({top:i-n.top+n.marginTop,left:a-n.left+n.marginLeft,width:r,height:o})}function w(e){var t=e.nodeName;return"BODY"!==t&&"HTML"!==t&&("fixed"===r(e,"position")||w(o(e)))}function y(e,t,n,r){var a={top:0,left:0},f=p(e,t);if("viewport"===r)a=b(f);else{var s=void 0;"scrollParent"===r?(s=i(o(t)),"BODY"===s.nodeName&&(s=e.ownerDocument.documentElement)):s="window"===r?e.ownerDocument.documentElement:r;var l=v(s,f);if("HTML"!==s.nodeName||w(f))a=l;else{var u=h(),c=u.height,d=u.width;a.top+=l.top-l.marginTop,a.bottom=c+l.top,a.left+=l.left-l.marginLeft,a.right=d+l.left}}return a.left+=n,a.top+=n,a.right-=n,a.bottom-=n,a}function E(e){return e.width*e.height}function O(e,t,n,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=y(n,r,i,o),f={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},s=Object.keys(f).map(function(e){return ge({key:e},f[e],{area:E(f[e])})}).sort(function(e,t){return t.area-e.area}),p=s.filter(function(e){var t=e.width,r=e.height;return t>=n.clientWidth&&r>=n.clientHeight}),l=p.length>0?p[0].key:s[0].key,u=e.split("-")[1];return l+(u?"-"+u:"")}function x(e,t,n){return v(n,p(t,n))}function L(e){var t=getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),r=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+r,height:e.offsetHeight+n}}function T(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function N(e,t,n){n=n.split("-")[0];var r=L(e),o={width:r.width,height:r.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",f=i?"left":"top",s=i?"height":"width",p=i?"width":"height";return o[a]=t[a]+t[s]/2-r[s]/2,o[f]=n===f?t[f]-r[p]:t[T(f)],o}function C(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function D(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var r=C(e,function(e){return e[t]===n});return e.indexOf(r)}function M(e,t,r){return(void 0===r?e:e.slice(0,D(e,"name",r))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var r=e.function||e.fn;e.enabled&&n(r)&&(t.offsets.popper=m(t.offsets.popper),t.offsets.reference=m(t.offsets.reference),t=r(t,e))}),t}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=N(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position="absolute",e=M(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function S(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<t.length-1;r++){var o=t[r],i=o?""+o+n:e;if(void 0!==document.body.style[i])return i}return null}function F(){return this.state.isDestroyed=!0,W(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[S("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function P(e){var t=e.ownerDocument;return t?t.defaultView:window}function B(e,t,n,r){var o="BODY"===e.nodeName,a=o?e.ownerDocument.defaultView:e;a.addEventListener(t,n,{passive:!0}),o||B(i(a.parentNode),t,n,r),r.push(a)}function H(e,t,n,r){n.updateBound=r,P(e).addEventListener("resize",n.updateBound,{passive:!0});var o=i(e);return B(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function A(){this.state.eventsEnabled||(this.state=H(this.reference,this.options,this.state,this.scheduleUpdate))}function j(e,t){return P(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function I(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=j(this.reference,this.state))}function R(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&R(t[n])&&(r="px"),e.style[n]=t[n]+r})}function Y(e,t){Object.keys(t).forEach(function(n){!1!==t[n]?e.setAttribute(n,t[n]):e.removeAttribute(n)})}function q(e){return U(e.instance.popper,e.styles),Y(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&U(e.arrowElement,e.arrowStyles),e}function K(e,t,n,r,o){var i=x(o,t,e),a=O(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),U(t,{position:"absolute"}),n}function V(e,t){var n=t.x,r=t.y,o=e.offsets.popper,i=C(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var f=void 0!==i?i:t.gpuAcceleration,s=a(e.instance.popper),p=g(s),l={position:o.position},u={left:Math.floor(o.left),top:Math.floor(o.top),bottom:Math.floor(o.bottom),right:Math.floor(o.right)},c="bottom"===n?"top":"bottom",d="right"===r?"left":"right",h=S("transform"),m=void 0,v=void 0;if(v="bottom"===c?-p.height+u.bottom:u.top,m="right"===d?-p.width+u.right:u.left,f&&h)l[h]="translate3d("+m+"px, "+v+"px, 0)",l[c]=0,l[d]=0,l.willChange="transform";else{var b="bottom"===c?-1:1,w="right"===d?-1:1;l[c]=v*b,l[d]=m*w,l.willChange=c+", "+d}var y={"x-placement":e.placement};return e.attributes=ge({},y,e.attributes),e.styles=ge({},l,e.styles),e.arrowStyles=ge({},e.offsets.arrow,e.arrowStyles),e}function z(e,t,n){var r=C(e,function(e){return e.name===t}),o=!!r&&e.some(function(e){return e.name===n&&e.enabled&&e.order<r.order});if(!o){var i="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return o}function G(e,t){var n;if(!z(e.instance.modifiers,"arrow","keepTogether"))return e;var o=t.element;if("string"==typeof o){if(!(o=e.instance.popper.querySelector(o)))return e}else if(!e.instance.popper.contains(o))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var i=e.placement.split("-")[0],a=e.offsets,f=a.popper,s=a.reference,p=-1!==["left","right"].indexOf(i),l=p?"height":"width",u=p?"Top":"Left",c=u.toLowerCase(),d=p?"left":"top",h=p?"bottom":"right",g=L(o)[l];s[h]-g<f[c]&&(e.offsets.popper[c]-=f[c]-(s[h]-g)),s[c]+g>f[h]&&(e.offsets.popper[c]+=s[c]+g-f[h]),e.offsets.popper=m(e.offsets.popper);var v=s[c]+s[l]/2-g/2,b=r(e.instance.popper),w=parseFloat(b["margin"+u],10),y=parseFloat(b["border"+u+"Width"],10),E=v-e.offsets.popper[c]-w-y;return E=Math.max(Math.min(f[l]-g,E),0),e.arrowElement=o,e.offsets.arrow=(n={},me(n,c,Math.round(E)),me(n,d,""),n),e}function _(e){return"end"===e?"start":"start"===e?"end":e}function X(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=be.indexOf(e),r=be.slice(n+1).concat(be.slice(0,n));return t?r.reverse():r}function J(e,t){if(W(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=y(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),r=e.placement.split("-")[0],o=T(r),i=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case we.FLIP:a=[r,o];break;case we.CLOCKWISE:a=X(r);break;case we.COUNTERCLOCKWISE:a=X(r,!0);break;default:a=t.behavior}return a.forEach(function(f,s){if(r!==f||a.length===s+1)return e;r=e.placement.split("-")[0],o=T(r);var p=e.offsets.popper,l=e.offsets.reference,u=Math.floor,c="left"===r&&u(p.right)>u(l.left)||"right"===r&&u(p.left)<u(l.right)||"top"===r&&u(p.bottom)>u(l.top)||"bottom"===r&&u(p.top)<u(l.bottom),d=u(p.left)<u(n.left),h=u(p.right)>u(n.right),m=u(p.top)<u(n.top),g=u(p.bottom)>u(n.bottom),v="left"===r&&d||"right"===r&&h||"top"===r&&m||"bottom"===r&&g,b=-1!==["top","bottom"].indexOf(r),w=!!t.flipVariations&&(b&&"start"===i&&d||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&g);(c||v||w)&&(e.flipped=!0,(c||v)&&(r=a[s+1]),w&&(i=_(i)),e.placement=r+(i?"-"+i:""),e.offsets.popper=ge({},e.offsets.popper,N(e.instance.popper,e.offsets.reference,e.placement)),e=M(e.instance.modifiers,e,"flip"))}),e}function Q(e){var t=e.offsets,n=t.popper,r=t.reference,o=e.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(o),f=a?"right":"bottom",s=a?"left":"top",p=a?"width":"height";return n[f]<i(r[s])&&(e.offsets.popper[s]=i(r[s])-n[p]),n[s]>i(r[f])&&(e.offsets.popper[s]=i(r[f])),e}function Z(e,t,n,r){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+o[1],a=o[2];if(!i)return e;if(0===a.indexOf("%")){var f=void 0;switch(a){case"%p":f=n;break;case"%":case"%r":default:f=r}return m(f)[t]/100*i}if("vh"===a||"vw"===a){return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i}return i}function $(e,t,n,r){var o=[0,0],i=-1!==["right","left"].indexOf(r),a=e.split(/(\+|\-)/).map(function(e){return e.trim()}),f=a.indexOf(C(a,function(e){return-1!==e.search(/,|\s/)}));a[f]&&-1===a[f].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var s=/\s*,\s*|\s+/,p=-1!==f?[a.slice(0,f).concat([a[f].split(s)[0]]),[a[f].split(s)[1]].concat(a.slice(f+1))]:[a];return p=p.map(function(e,r){var o=(1===r?!i:i)?"height":"width",a=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)},[]).map(function(e){return Z(e,o,t,n)})}),p.forEach(function(e,t){e.forEach(function(n,r){R(n)&&(o[t]+=n*("-"===e[r-1]?-1:1))})}),o}function ee(e,t){var n=t.offset,r=e.placement,o=e.offsets,i=o.popper,a=o.reference,f=r.split("-")[0],s=void 0;return s=R(+n)?[+n,0]:$(n,i,a,f),"left"===f?(i.top+=s[0],i.left-=s[1]):"right"===f?(i.top+=s[0],i.left+=s[1]):"top"===f?(i.left+=s[0],i.top-=s[1]):"bottom"===f&&(i.left+=s[0],i.top+=s[1]),e.popper=i,e}function te(e,t){var n=t.boundariesElement||a(e.instance.popper);e.instance.reference===n&&(n=a(n));var r=y(e.instance.popper,e.instance.reference,t.padding,n);t.boundaries=r;var o=t.priority,i=e.offsets.popper,f={primary:function(e){var n=i[e];return i[e]<r[e]&&!t.escapeWithReference&&(n=Math.max(i[e],r[e])),me({},e,n)},secondary:function(e){var n="right"===e?"left":"top",o=i[n];return i[e]>r[e]&&!t.escapeWithReference&&(o=Math.min(i[n],r[e]-("right"===e?i.width:i.height))),me({},n,o)}};return o.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";i=ge({},i,f[t](e))}),e.offsets.popper=i,e}function ne(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1];if(r){var o=e.offsets,i=o.reference,a=o.popper,f=-1!==["bottom","top"].indexOf(n),s=f?"left":"top",p=f?"width":"height",l={start:me({},s,i[s]),end:me({},s,i[s]+i[p]-a[p])};e.offsets.popper=ge({},a,l[r])}return e}function re(e){if(!z(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=C(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}function oe(e){var t=e.placement,n=t.split("-")[0],r=e.offsets,o=r.popper,i=r.reference,a=-1!==["left","right"].indexOf(n),f=-1===["top","left"].indexOf(n);return o[a?"left":"top"]=i[n]-(f?o[a?"width":"height"]:0),e.placement=T(t),e.offsets.popper=m(o),e}for(var ie="undefined"!=typeof window&&"undefined"!=typeof document,ae=["Edge","Trident","Firefox"],fe=0,se=0;se<ae.length;se+=1)if(ie&&navigator.userAgent.indexOf(ae[se])>=0){fe=1;break}var pe=ie&&window.Promise,le=pe?e:t,ue=void 0,ce=function(){return void 0===ue&&(ue=-1!==navigator.appVersion.indexOf("MSIE 10")),ue},de=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},he=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),me=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ve=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],be=ve.slice(3),we={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},ye={shift:{order:100,enabled:!0,fn:ne},offset:{order:200,enabled:!0,fn:ee,offset:0},preventOverflow:{order:300,enabled:!0,fn:te,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:Q},arrow:{order:500,enabled:!0,fn:G,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:J,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:oe},hide:{order:800,enabled:!0,fn:re},computeStyle:{order:850,enabled:!0,fn:V,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:q,onLoad:K,gpuAcceleration:void 0}},Ee={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:ye},Oe=function(){function e(t,r){var o=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};de(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=le(this.update.bind(this)),this.options=ge({},e.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=r&&r.jquery?r[0]:r,this.options.modifiers={},Object.keys(ge({},e.Defaults.modifiers,i.modifiers)).forEach(function(t){o.options.modifiers[t]=ge({},e.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return ge({name:e},o.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&n(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)}),this.update();var a=this.options.eventsEnabled;a&&this.enableEventListeners(),this.state.eventsEnabled=a}return he(e,[{key:"update",value:function(){return k.call(this)}},{key:"destroy",value:function(){return F.call(this)}},{key:"enableEventListeners",value:function(){return A.call(this)}},{key:"disableEventListeners",value:function(){return I.call(this)}}]),e}();return Oe.Utils=("undefined"!=typeof window?window:global).PopperUtils,Oe.placements=ve,Oe.Defaults=Ee,Oe});
//# sourceMappingURL=popper.js.map
