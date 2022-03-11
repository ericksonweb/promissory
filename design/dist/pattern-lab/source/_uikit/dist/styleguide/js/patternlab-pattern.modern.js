!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./styleguide/",n(n.s=149)}({149:function(t,e,n){"use strict";n.r(e);var o=n(45),r=(n(83),n(2));const i={active:[],targetOrigin:"file:"===window.location.protocol?"*":window.location.protocol+"//"+window.location.host,onReady(){const t=document.querySelectorAll(".pl-js-pattern-extra-toggle");for(let e=0;e<t.length;e++)t[e].addEventListener("click",(n=>{const o=t[e].getAttribute("data-patternpartial");i.toggle(o)}))},toggle(t){if(void 0!==i.active[t]&&i.active[t])i.highlightsHide(),i.close(t);else{const e=document.getElementById("pl-pattern-data-"+t);i.collectAndSend(e,!0,!1)}},open(t,e){let n=document.createElement("div");n.innerHTML=e,e=document.createElement("div").appendChild(n).querySelector("div"),e=o.a.addClickEvents(e,t),i.active[t]=!0,n=document.getElementById("pl-pattern-extra-"+t),n&&n.childNodes&&n.childNodes.length>0&&n.removeChild(n.childNodes[0]),document.getElementById("pl-pattern-extra-"+t).appendChild(e);const r=document.getElementById("pl-pattern-extra-toggle-"+t);r&&r.classList.add("pl-is-active"),document.getElementById("pl-pattern-extra-"+t).classList.add("pl-is-active")},close(t){i.active[t]=!1;const e=document.getElementById("pl-pattern-extra-toggle-"+t);e&&e.classList.remove("pl-is-active"),document.getElementById("pl-pattern-extra-"+t)&&document.getElementById("pl-pattern-extra-"+t).classList.remove("pl-is-active")},collectAndSend(t,e,n){if(/\S/.test(t.innerHTML)){const o=JSON.parse(t.innerHTML);if(void 0!==o.patternName){const t=document.querySelector("#"+o.patternPartial+" > .pl-js-pattern-example");o.patternMarkup=null!==t?t.innerHTML:document.querySelector("body").innerHTML,i.patternQueryInfo(o,e,n)}}},highlightsHide(t){const e=void 0!==t?"#"+t+" > ":"";let n=document.querySelectorAll(e+".pl-has-annotation");for(let t=0;t<n.length;t++)n[t].classList.remove("pl-has-annotation");n=document.querySelectorAll(e+".pl-c-annotation-tip");for(let t=0;t<n.length;t++)n[t].style.display="none"},patternQueryInfo(t,e,n){try{const o=JSON.stringify({event:"patternLab.patternQueryInfo",patternData:t,iframePassback:e,switchText:n});window.parent.postMessage(o,i.targetOrigin)}catch(t){}},receiveIframeMessage(t){const e=Object(r.c)(t);if(void 0!==e.event&&"patternLab.patternQuery"===e.event){const t=document.querySelectorAll(".pl-js-pattern-data"),n=t.length>1;for(let o=0;o<t.length;o++)i.collectAndSend(t[o],n,e.switchText)}else if(void 0!==e.event&&"patternLab.patternModalInsert"===e.event)i.open(e.patternPartial,e.modalContent);else if(void 0!==e.event&&"patternLab.annotationsHighlightShow"===e.event){let t,n,o;for(let r=0;r<e.annotations.length;r++)if(n=e.annotations[r],t=document.querySelectorAll(n.el),t.length>0)for(let e=0;e<t.length;e++){t[e].classList.add("pl-has-annotation"),o=document.createElement("span"),o.innerHTML=n.displayNumber,o.classList.add("pl-c-annotation-tip"),"0px"===window.getComputedStyle(t[e],null).getPropertyValue("max-height")&&(o.style.display="none");const r=document.querySelector(n.el+" > span.pl-c-annotation-tip");null===r?t[e].insertBefore(o,t[e].firstChild):r.style.display="inline-flex",t[e].onclick=function(t){return function(e){e.preventDefault(),e.stopPropagation();const n=JSON.stringify({event:"patternLab.annotationNumberClicked",displayNumber:t.displayNumber});window.parent.postMessage(n,i.targetOrigin)}}(n)}}else if(void 0!==e.event&&"patternLab.annotationsHighlightHide"===e.event)i.highlightsHide();else if(void 0!==e.event&&"patternLab.patternModalClose"===e.event){const t=[];for(const e in i.active)e&&t.push(e);for(let e=0;e<t.length;e++){const n=t[e];i.active[n]&&i.close(n)}}}};i.onReady(),window.addEventListener("message",i.receiveIframeMessage,!1);var a=n(15),c=n.n(a);function l(t,e){try{window.parent.postMessage(JSON.stringify({event:"patternLab."+e,key:t.key,code:t.code}),r.g)}catch(t){}}if(c.a.bind("command+shift+f",(function(t){t.preventDefault();try{const e=JSON.stringify({event:"patternLab.keyPress",key:t.key,altKey:t.altKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,shiftKey:t.shiftKey});window.parent.postMessage(e,r.g)}catch(t){}return!1})),document.addEventListener("click",(function(){try{const t=JSON.stringify({event:"patternLab.pageClick"});window.parent.postMessage(t,r.g)}catch(t){}})),c.a.bind("esc",(function(t){try{const e=JSON.stringify({event:"patternLab.keyPress",key:t.key,altKey:t.altKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,shiftKey:t.shiftKey});window.parent.postMessage(e,r.g)}catch(t){}return!1})),document.addEventListener("keydown",(t=>{l(t,"iframeKeyDownEvent")})),document.addEventListener("keyup",(t=>{l(t,"iframeKeyUpEvent")})),window.self!==window.top){const t={event:"patternLab.pageLoad",path:window.location.toString().split("?")[0],details:{patternData:window.patternData}};t.patternpartial=void 0!==window.patternData.patternPartial?window.patternData.patternPartial:"all",""!==window.patternData.lineage&&(t.lineage=window.patternData.lineage),window.parent.postMessage(t,r.g);try{const t=new CustomEvent("patternPartial",{detail:{pattern:window.patternData.patternPartial}});window.parent.document.dispatchEvent(t)}catch(t){}}},15:function(t,e,n){var o;!function(r,i,a){if(r){for(var c,l={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},s={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},u={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},f={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p=1;p<20;++p)l[111+p]="f"+p;for(p=0;p<=9;++p)l[p+96]=p.toString();m.prototype.bind=function(t,e,n){return t=t instanceof Array?t:[t],this._bindMultiple.call(this,t,e,n),this},m.prototype.unbind=function(t,e){return this.bind.call(this,t,(function(){}),e)},m.prototype.trigger=function(t,e){return this._directMap[t+":"+e]&&this._directMap[t+":"+e]({},t),this},m.prototype.reset=function(){return this._callbacks={},this._directMap={},this},m.prototype.stopCallback=function(t,e){if((" "+e.className+" ").indexOf(" mousetrap ")>-1)return!1;if(function t(e,n){return null!==e&&e!==i&&(e===n||t(e.parentNode,n))}(e,this.target))return!1;if("composedPath"in t&&"function"==typeof t.composedPath){var n=t.composedPath()[0];n!==t.target&&(e=n)}return"INPUT"==e.tagName||"SELECT"==e.tagName||"TEXTAREA"==e.tagName||e.isContentEditable},m.prototype.handleKey=function(){var t=this;return t._handleKey.apply(t,arguments)},m.addKeycodes=function(t){for(var e in t)t.hasOwnProperty(e)&&(l[e]=t[e]);c=null},m.init=function(){var t=m(i);for(var e in t)"_"!==e.charAt(0)&&(m[e]=function(e){return function(){return t[e].apply(t,arguments)}}(e))},m.init(),r.Mousetrap=m,t.exports&&(t.exports=m),void 0===(o=function(){return m}.call(e,n,e,t))||(t.exports=o)}function d(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)}function h(t){if("keypress"==t.type){var e=String.fromCharCode(t.which);return t.shiftKey||(e=e.toLowerCase()),e}return l[t.which]?l[t.which]:s[t.which]?s[t.which]:String.fromCharCode(t.which).toLowerCase()}function y(t){return"shift"==t||"ctrl"==t||"alt"==t||"meta"==t}function g(t,e,n){return n||(n=function(){if(!c)for(var t in c={},l)t>95&&t<112||l.hasOwnProperty(t)&&(c[l[t]]=t);return c}()[t]?"keydown":"keypress"),"keypress"==n&&e.length&&(n="keydown"),n}function v(t,e){var n,o,r,i=[];for(n=function(t){return"+"===t?["+"]:(t=t.replace(/\+{2}/g,"+plus")).split("+")}(t),r=0;r<n.length;++r)o=n[r],f[o]&&(o=f[o]),e&&"keypress"!=e&&u[o]&&(o=u[o],i.push("shift")),y(o)&&i.push(o);return{key:o,modifiers:i,action:e=g(o,i,e)}}function m(t){var e=this;if(t=t||i,!(e instanceof m))return new m(t);e.target=t,e._callbacks={},e._directMap={};var n,o={},r=!1,a=!1,c=!1;function l(t){t=t||{};var e,n=!1;for(e in o)t[e]?n=!0:o[e]=0;n||(c=!1)}function s(t,n,r,i,a,c){var l,s,u,f,p=[],d=r.type;if(!e._callbacks[t])return[];for("keyup"==d&&y(t)&&(n=[t]),l=0;l<e._callbacks[t].length;++l)if(s=e._callbacks[t][l],(i||!s.seq||o[s.seq]==s.level)&&d==s.action&&("keypress"==d&&!r.metaKey&&!r.ctrlKey||(u=n,f=s.modifiers,u.sort().join(",")===f.sort().join(",")))){var h=!i&&s.combo==a,g=i&&s.seq==i&&s.level==c;(h||g)&&e._callbacks[t].splice(l,1),p.push(s)}return p}function u(t,n,o,r){e.stopCallback(n,n.target||n.srcElement,o,r)||!1===t(n,o)&&(function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}(n),function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}(n))}function f(t){"number"!=typeof t.which&&(t.which=t.keyCode);var n=h(t);n&&("keyup"!=t.type||r!==n?e.handleKey(n,function(t){var e=[];return t.shiftKey&&e.push("shift"),t.altKey&&e.push("alt"),t.ctrlKey&&e.push("ctrl"),t.metaKey&&e.push("meta"),e}(t),t):r=!1)}function p(t,e,i,a){function s(e){return function(){c=e,++o[t],clearTimeout(n),n=setTimeout(l,1e3)}}function f(e){u(i,e,t),"keyup"!==a&&(r=h(e)),setTimeout(l,10)}o[t]=0;for(var p=0;p<e.length;++p){var d=p+1===e.length?f:s(a||v(e[p+1]).action);g(e[p],d,a,t,p)}}function g(t,n,o,r,i){e._directMap[t+":"+o]=n;var a,c=(t=t.replace(/\s+/g," ")).split(" ");c.length>1?p(t,c,n,o):(a=v(t,o),e._callbacks[a.key]=e._callbacks[a.key]||[],s(a.key,a.modifiers,{type:a.action},r,t,i),e._callbacks[a.key][r?"unshift":"push"]({callback:n,modifiers:a.modifiers,action:a.action,seq:r,level:i,combo:t}))}e._handleKey=function(t,e,n){var o,r=s(t,e,n),i={},f=0,p=!1;for(o=0;o<r.length;++o)r[o].seq&&(f=Math.max(f,r[o].level));for(o=0;o<r.length;++o)if(r[o].seq){if(r[o].level!=f)continue;p=!0,i[r[o].seq]=1,u(r[o].callback,n,r[o].combo,r[o].seq)}else p||u(r[o].callback,n,r[o].combo);var d="keypress"==n.type&&a;n.type!=c||y(t)||d||l(i),a=p&&"keydown"==n.type},e._bindMultiple=function(t,e,n){for(var o=0;o<t.length;++o)g(t[o],e,n)},d(t,"keypress",f),d(t,"keydown",f),d(t,"keyup",f)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)},2:function(t,e,n){"use strict";n.d(e,"h",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"g",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return d})),n(23);
/*!
 * URL Handler
 *
 * Copyright (c) 2013-2014 Dave Olsen, http://dmolsen.com
 * Licensed under the MIT license
 *
 * Helps handle the initial iFrame source. Parses a string to see if it matches
 * an expected pattern in Pattern Lab. Supports Pattern Lab's fuzzy pattern partial
 * matching style.
 *
 */
const o={skipBack:!1,goBack:!1,iframeElement:document.querySelector(".pl-js-iframe"),targetOrigin:"file:"===window.location.protocol?"*":window.location.protocol+"//"+window.location.host,getFileName(t,e){let n="";if(void 0===t)return n;if(void 0===e&&(e=!0),"all"===t)return"styleguide/html/styleguide.html";if("snapshots"===t)return"snapshots/index.html";const o=-1!==t.indexOf("viewall-")?window.viewAllPaths:window.patternPaths,r=t.replace("viewall-",""),i=this.getPatternInfo(r,o),a=i[0],c=i[1];if(void 0!==o[a]&&void 0!==o[a][c])n=o[a][c];else if(void 0!==o[a])for(const t in o[a])if(-1!==t.indexOf(c)){n=o[a][t];break}if(""===n)return n;const l=/\//g;return-1!==t.indexOf("viewall-")&&0===t.indexOf("viewall-")&&""!==n?n="patterns/"+n.replace(l,"-")+"/index.html":""!==n&&(n="patterns/"+n.replace(l,"-")+"/"+n.replace(l,"-"),e)&&(n=n+(void 0!==window.config.outputFileSuffixes&&void 0!==window.config.outputFileSuffixes.rendered?window.config.outputFileSuffixes.rendered:"")+".html"),n},getPatternInfo(t,e){const n=t.split("-");let o=1;const r=n.length;let i=n[0];for(;void 0===e[i]&&o<r;)i+="-"+n[o],o++;return[i,t.slice(i.length+1,t.length)]},getRequestVars:()=>new function(t){if(t.length>1)for(let e,n=0,o=t.substr(1).split("&");n<o.length;n++)e=o[n].split("="),this[unescape(e[0])]=e.length>1?unescape(e[1]):""}(window.location.search),pushPattern(t,e){const n=o.getFileName(t);let r=window.location.pathname;if(r="file"===window.location.protocol?r.replace("/public/index.html","public/"):r.replace(/\/index\.html/,"/"),e!==window.location.protocol+"//"+window.location.host+r+n){const t=JSON.stringify({event:"patternLab.updatePath",path:n});document.querySelector(".pl-js-iframe").contentWindow.postMessage(t,o.targetOrigin)}},popPattern(t){let e;const n=t.state;if(null===n)return void(this.skipBack=!1);null!==n&&(e=n.currentPattern);let r="";r=this.getFileName(e),""===r&&(r="styleguide/html/styleguide.html");const i=JSON.stringify({event:"patternLab.updatePath",path:r});document.querySelector(".pl-js-iframe").contentWindow.postMessage(i,o.targetOrigin)}};window.onpopstate=function(t){o.skipBack=!0};var r=n(25);const i=new(n.n(r).a);"attachShadow"in Element.prototype&&"getRootNode"in Element.prototype||window.ShadyDOM;const a="file:"===window.location.protocol?"*":window.location.protocol+"//"+window.location.host;let c="";if(window.config){c=void 0!==window.config.defaultPattern&&"string"==typeof window.config.defaultPattern&&window.config.defaultPattern.trim().length>0?window.config.defaultPattern:"all";const t=o.getRequestVars();void 0===t.p&&void 0===t.pattern||(c=void 0!==t.p?t.p:t.pattern)}let l=240,s=2600;if(void 0!==window.config&&(void 0!==window.config.ishMinimum&&(l=parseInt(window.config.ishMinimum,10)),void 0!==window.config.ishMaximum&&(s=parseInt(window.config.ishMaximum,10)),void 0!==window.config.ishViewportRange&&(l=window.config.ishViewportRange.s[0],s=window.config.ishViewportRange.l[1]),window.config.ishViewportRange&&window.config.ishMaximum)){const t=parseInt(window.config.ishViewportRange.l[1],10),e=parseInt(window.config.ishMaximum,10);s=t>e?t:e}const u=l,f=s;function p(t,e){return Math.floor(Math.random()*(e-t)+t)}function d(t){if("file:"!==window.location.protocol&&t.origin!==window.location.protocol+"//"+window.location.host)return{};try{return"string"!=typeof t.data?t.data:JSON.parse(t.data)}catch(t){return{}}}},23:function(t,e){
/*!
 * Basic postMessage Support
 *
 * Copyright (c) 2013-2016 Dave Olsen, http://dmolsen.com
 * Licensed under the MIT license
 *
 * Handles the postMessage stuff in the pattern, view-all, and style guide templates.
 *
 */
if(window.self!==window.top){const t=document.getElementsByTagName("a");for(let e=0;e<t.length;e++)t[e].onclick=function(t){const e=this.getAttribute("href"),n=this.getAttribute("target");if(void 0===n||"_parent"!==n&&"_blank"!==n){if(!e||"#"===e)return t.preventDefault(),!1;t.preventDefault(),window.location.replace(e)}return!0}}window.addEventListener("message",(function(t){if("file:"!==window.location.protocol&&t.origin!==window.location.protocol+"//"+window.location.host)return;let e,n={};try{n="string"!=typeof t.data?t.data:JSON.parse(t.data)}catch(t){}if(void 0!==n.event&&"patternLab.updatePath"===n.event)if(void 0!==window.patternData.patternPartial){const t=/(patterns|snapshots)\/(.*)$/;e=window.location.protocol+"//"+window.location.host+window.location.pathname.replace(t,"")+n.path+"?"+Date.now(),window.location.replace(e)}else e=window.location.protocol+"//"+window.location.host+window.location.pathname.replace("styleguide/html/styleguide.html","")+n.path+"?"+Date.now(),window.location.replace(e);else void 0!==n.event&&"patternLab.reload"===n.event&&window.location.reload()}),!1)},25:function(t,e,n){var o;
/*!
 * EventEmitter v5.2.9 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - https://oli.me.uk/
 * @preserve
 */!function(e){"use strict";function r(){}var i=r.prototype,a=e.EventEmitter;function c(t,e){for(var n=t.length;n--;)if(t[n].listener===e)return n;return-1}function l(t){return function(){return this[t].apply(this,arguments)}}i.getListeners=function(t){var e,n,o=this._getEvents();if(t instanceof RegExp)for(n in e={},o)o.hasOwnProperty(n)&&t.test(n)&&(e[n]=o[n]);else e=o[t]||(o[t]=[]);return e},i.flattenListeners=function(t){var e,n=[];for(e=0;e<t.length;e+=1)n.push(t[e].listener);return n},i.getListenersAsObject=function(t){var e,n=this.getListeners(t);return n instanceof Array&&((e={})[t]=n),e||n},i.addListener=function(t,e){if(!function t(e){return"function"==typeof e||e instanceof RegExp||!(!e||"object"!=typeof e)&&t(e.listener)}(e))throw new TypeError("listener must be a function");var n,o=this.getListenersAsObject(t),r="object"==typeof e;for(n in o)o.hasOwnProperty(n)&&-1===c(o[n],e)&&o[n].push(r?e:{listener:e,once:!1});return this},i.on=l("addListener"),i.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},i.once=l("addOnceListener"),i.defineEvent=function(t){return this.getListeners(t),this},i.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},i.removeListener=function(t,e){var n,o,r=this.getListenersAsObject(t);for(o in r)r.hasOwnProperty(o)&&-1!==(n=c(r[o],e))&&r[o].splice(n,1);return this},i.off=l("removeListener"),i.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},i.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},i.manipulateListeners=function(t,e,n){var o,r,i=t?this.removeListener:this.addListener,a=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=n.length;o--;)i.call(this,e,n[o]);else for(o in e)e.hasOwnProperty(o)&&(r=e[o])&&("function"==typeof r?i.call(this,o,r):a.call(this,o,r));return this},i.removeEvent=function(t){var e,n=typeof t,o=this._getEvents();if("string"===n)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},i.removeAllListeners=l("removeEvent"),i.emitEvent=function(t,e){var n,o,r,i,a=this.getListenersAsObject(t);for(i in a)if(a.hasOwnProperty(i))for(n=a[i].slice(0),r=0;r<n.length;r++)!0===(o=n[r]).once&&this.removeListener(t,o.listener),o.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,o.listener);return this},i.trigger=l("emitEvent"),i.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},i.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},i._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},i._getEvents=function(){return this._events||(this._events={})},r.noConflict=function(){return e.EventEmitter=a,r},void 0===(o=function(){return r}.call(e,n,e,t))||(t.exports=o)}("undefined"!=typeof window?window:this||{})},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o={addClickEvents(t,e){const n=t.querySelectorAll(".pl-js-tab-link");for(let t=0;t<n.length;++t)n[t].onclick=function(t){t.preventDefault();const e=this.getAttribute("data-patternpartial"),n=this.getAttribute("data-panelid");o.show(e,n)};return t},show(t,e){const n=document.querySelector(`#pl-${t}-${e}-panel`),o=n.closest(".pl-js-tabs"),r=o.querySelectorAll(".pl-js-tab-link"),i=o.querySelectorAll(".pl-js-tab-panel"),a=o.querySelector(`#pl-${t}-${e}-tab`);for(let t=0;t<r.length;++t)r[t].classList.remove("pl-is-active-tab");for(let t=0;t<i.length;++t)i[t].classList.remove("pl-is-active-tab");a.classList.add("pl-is-active-tab"),n.classList.add("pl-is-active-tab")}}},46:function(t,e,n){
/*!
 * clipboard.js v2.0.9
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
var o;o=function(){return function(){var t={686:function(t,e,n){"use strict";n.d(e,{default:function(){return b}});var o=n(279),r=n.n(o),i=n(370),a=n.n(i),c=n(817),l=n.n(c);function s(t){try{return document.execCommand(t)}catch(t){return!1}}var u=function(t){var e=l()(t);return s("cut"),e};function f(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(o,"px"),n.setAttribute("readonly",""),n.value=t,n}var p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";if("string"==typeof t){var o=f(t);e.container.appendChild(o),n=l()(o),s("copy"),o.remove()}else n=l()(t),s("copy");return n};function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(i,t);var e,n,o,r=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=m(t);if(e){var r=m(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return v(this,n)}}(i);function i(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(n=r.call(this)).resolveOptions(e),n.listenClick(t),n}return e=i,o=[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return p(t,e)}},{key:"cut",value:function(t){return u(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}],(n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===h(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=a()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,o=t.container,r=t.target,i=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==r){if(!r||"object"!==d(r)||1!==r.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&r.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(r.hasAttribute("readonly")||r.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?p(i,{container:o}):r?"cut"===n?u(r):p(r,{container:o}):void 0}({action:this.action(e),container:this.container,target:this.target(e),text:this.text(e)});this.emit(n?"success":"error",{action:this.action,text:n,trigger:e,clearSelection:function(){e&&e.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return w("action",t)}},{key:"defaultTarget",value:function(t){var e=w("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return w("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&y(e.prototype,n),o&&y(e,o),i}(r())},828:function(t){if("undefined"!=typeof Element&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var o=n(828);function r(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,r){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&r.call(t,n)}}t.exports=function(t,e,n,o,i){return"function"==typeof t.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return r(t,e,n,o,i)})))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var o=n(879),r=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(o.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(o.string(t))return function(t,e,n){return r(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(686)}().default},t.exports=o()},83:function(t,e,n){"use strict";var o=n(46);new(n.n(o).a)(".pl-js-code-copy-btn").on("success",(function(t){const e=document.querySelectorAll(".pl-js-code-copy-btn");for(let t=0;t<e.length;t++)e[t].querySelector(".pl-c-code-copy-btn__icon-text").innerText="Copy";t.trigger.classList.add("is-copied"),t.trigger.querySelector(".pl-c-code-copy-btn__icon-text").textContent="Copied",setTimeout((()=>{t.trigger.classList.remove("is-copied"),t.trigger.querySelector(".pl-c-code-copy-btn__icon-text").textContent="Copy",t.clearSelection(),t.trigger.blur()}),2e3)}))}});