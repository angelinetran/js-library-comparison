!function t(e,r,n){function o(a,u){if(!r[a]){if(!e[a]){var l="function"==typeof require&&require;if(!u&&l)return l(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var c=r[a]={exports:{}};e[a][0].call(c.exports,function(t){var r=e[a][1][t];return o(r?r:t)},c,c.exports,t,e,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var o=t("./modules/SVGInjector"),i=n(o),a=t("./modules/MyModule"),u=n(a);Modernizr.svg&&new i["default"],new u["default"]},{"./modules/MyModule":2,"./modules/SVGInjector":3}],2:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var o=function i(){n(this,i)};r["default"]=o},{}],3:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=t("svg-injector"),a=n(i),u=function l(){o(this,l);for(var t=document.querySelectorAll("[data-svg]"),e=0,r=t.length;r>e;e++)t[e].parentNode.style.backgroundImage="none";(0,a["default"])(t)};r["default"]=u},{"svg-injector":4}],4:[function(t,e,r){!function(t,n){"use strict";function o(t){t=t.split(" ");for(var e={},r=t.length,n=[];r--;)e.hasOwnProperty(t[r])||(e[t[r]]=1,n.unshift(t[r]));return n.join(" ")}var i="file:"===t.location.protocol,a=n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),u=Array.prototype.forEach||function(t,e){if(void 0===this||null===this||"function"!=typeof t)throw new TypeError;var r,n=this.length>>>0;for(r=0;n>r;++r)r in this&&t.call(e,this[r],r,this)},l={},s=0,c=[],f=[],d={},p=function(t){return t.cloneNode(!0)},v=function(t,e){f[t]=f[t]||[],f[t].push(e)},g=function(t){for(var e=0,r=f[t].length;r>e;e++)!function(e){setTimeout(function(){f[t][e](p(l[t]))},0)}(e)},h=function(e,r){if(void 0!==l[e])l[e]instanceof SVGSVGElement?r(p(l[e])):v(e,r);else{if(!t.XMLHttpRequest)return r("Browser does not support XMLHttpRequest"),!1;l[e]={},v(e,r);var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState){if(404===n.status||null===n.responseXML)return r("Unable to load SVG file: "+e),i&&r("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."),r(),!1;if(!(200===n.status||i&&0===n.status))return r("There was a problem injecting the SVG: "+n.status+" "+n.statusText),!1;if(n.responseXML instanceof Document)l[e]=n.responseXML.documentElement;else if(DOMParser&&DOMParser instanceof Function){var t;try{var o=new DOMParser;t=o.parseFromString(n.responseText,"text/xml")}catch(a){t=void 0}if(!t||t.getElementsByTagName("parsererror").length)return r("Unable to parse SVG file: "+e),!1;l[e]=t.documentElement}g(e)}},n.open("GET",e),n.overrideMimeType&&n.overrideMimeType("text/xml"),n.send()}},y=function(e,r,n,i){var l=e.getAttribute("data-src")||e.getAttribute("src");if(!/\.svg/i.test(l))return void i("Attempted to inject a file with a non-svg extension: "+l);if(!a){var f=e.getAttribute("data-fallback")||e.getAttribute("data-png");return void(f?(e.setAttribute("src",f),i(null)):n?(e.setAttribute("src",n+"/"+l.split("/").pop().replace(".svg",".png")),i(null)):i("This browser does not support SVG and no PNG fallback was defined."))}-1===c.indexOf(e)&&(c.push(e),e.setAttribute("src",""),h(l,function(n){if("undefined"==typeof n||"string"==typeof n)return i(n),!1;var a=e.getAttribute("id");a&&n.setAttribute("id",a);var f=e.getAttribute("title");f&&n.setAttribute("title",f);var p=[].concat(n.getAttribute("class")||[],"injected-svg",e.getAttribute("class")||[]).join(" ");n.setAttribute("class",o(p));var v=e.getAttribute("style");v&&n.setAttribute("style",v);var g=[].filter.call(e.attributes,function(t){return/^data-\w[\w\-]*$/.test(t.name)});u.call(g,function(t){t.name&&t.value&&n.setAttribute(t.name,t.value)});var h,y,m,b,w,A={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(A).forEach(function(t){h=t,m=A[t],y=n.querySelectorAll("defs "+h+"[id]");for(var e=0,r=y.length;r>e;e++){b=y[e].id,w=b+"-"+s;var o;u.call(m,function(t){o=n.querySelectorAll("["+t+'*="'+b+'"]');for(var e=0,r=o.length;r>e;e++)o[e].setAttribute(t,"url(#"+w+")")}),y[e].id=w}}),n.removeAttribute("xmlns:a");for(var M,j,x=n.querySelectorAll("script"),S=[],k=0,G=x.length;G>k;k++)j=x[k].getAttribute("type"),j&&"application/ecmascript"!==j&&"application/javascript"!==j||(M=x[k].innerText||x[k].textContent,S.push(M),n.removeChild(x[k]));if(S.length>0&&("always"===r||"once"===r&&!d[l])){for(var T=0,O=S.length;O>T;T++)new Function(S[T])(t);d[l]=!0}var q=n.querySelectorAll("style");u.call(q,function(t){t.textContent+=""}),e.parentNode.replaceChild(n,e),delete c[c.indexOf(e)],e=null,s++,i(n)}))},m=function(t,e,r){e=e||{};var n=e.evalScripts||"always",o=e.pngFallback||!1,i=e.each;if(void 0!==t.length){var a=0;u.call(t,function(e){y(e,n,o,function(e){i&&"function"==typeof i&&i(e),r&&t.length===++a&&r(a)})})}else t?y(t,n,o,function(e){i&&"function"==typeof i&&i(e),r&&r(1),t=null}):r&&r(0)};"object"==typeof e&&"object"==typeof e.exports?e.exports=r=m:"function"==typeof define&&define.amd?define(function(){return m}):"object"==typeof t&&(t.SVGInjector=m)}(window,document)},{}]},{},[1]);