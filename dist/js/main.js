!function(t,e){"function"==typeof define&&define.amd?define([],function(){return t.svg4everybody=e()}):"object"==typeof module&&module.exports?module.exports=e():t.svg4everybody=e()}(this,function(){function h(t,e,o){if(o){var r=document.createDocumentFragment(),i=!e.hasAttribute("viewBox")&&o.getAttribute("viewBox");i&&e.setAttribute("viewBox",i);for(var n=o.cloneNode(!0);n.childNodes.length;)r.appendChild(n.firstChild);t.appendChild(r)}}function b(r){r.onreadystatechange=function(){if(4===r.readyState){var o=r._cachedDocument;o||((o=r._cachedDocument=document.implementation.createHTMLDocument("")).body.innerHTML=r.responseText,r._cachedTarget={}),r._embeds.splice(0).map(function(t){var e=r._cachedTarget[t.id];e||(e=r._cachedTarget[t.id]=o.getElementById(t.id)),h(t.parent,t.svg,e)})}},r.onreadystatechange()}function g(t){for(var e=t;"svg"!==e.nodeName.toLowerCase()&&(e=e.parentNode););return e}return function(t){var d,f=Object(t),e=window.top!==window.self;d="polyfill"in f?f.polyfill:/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||/\bEdge\/.(\d+)\b/.test(navigator.userAgent)&&e;var u={},p=window.requestAnimationFrame||setTimeout,m=document.getElementsByTagName("use"),v=0;d&&function t(){for(var e=0;e<m.length;){var o=m[e],r=o.parentNode,i=g(r),n=o.getAttribute("xlink:href")||o.getAttribute("href");if(!n&&f.attributeName&&(n=o.getAttribute(f.attributeName)),i&&n){if(d)if(!f.validate||f.validate(n,i,o)){r.removeChild(o);var l=n.split("#"),s=l.shift(),a=l.join("#");if(s.length){var c=u[s];c||((c=u[s]=new XMLHttpRequest).open("GET",s),c.send(),c._embeds=[]),c._embeds.push({parent:r,svg:i,id:a}),b(c)}else h(r,i,document.getElementById(a))}else++e,++v}else++e}(!m.length||0<m.length-v)&&p(t,67)}()}}),svg4everybody({fallback:function(t,e){return"fallback.png"}}),function(){var n,t;window.addEventListener("DOMContentLoaded",(t=document.getElementById("portfolio-content").querySelectorAll("figure > div"),void Array.prototype.forEach.call(t,function(t,e){var i=t.querySelectorAll("img");Array.prototype.forEach.call(i,function(t,e){var o=t.getAttribute("data-src"),r=o.substring(0,o.lastIndexOf("."))+"@400"+o.substring(o.lastIndexOf("."))+" 400w,"+o.substring(0,o.lastIndexOf("."))+"@800"+o.substring(o.lastIndexOf("."))+" 800w,"+o.substring(0,o.lastIndexOf("."))+"@1200"+o.substring(o.lastIndexOf("."))+" 1200w,"+o.substring(0,o.lastIndexOf("."))+"@1600"+o.substring(o.lastIndexOf("."))+" 1600w,"+o.substring(0,o.lastIndexOf("."))+"@2000"+o.substring(o.lastIndexOf("."))+" 2000w";n=1==i.length?"(max-width:47.9375em) 90vw, (max-width:61.9375) 49.93em, 62.94em":2==i.length?"(max-width:47.9375em) 90vw, (max-width:61.9375) 24.96em, 31.47em":"(max-width:47.9375em) 90vw, (max-width:61.9375) 16.64em, 20.98em",t.setAttribute("srcset",r),t.setAttribute("sizes",n),t.setAttribute("src",t.getAttribute("data-src"))})})))}(),function(){var l=document.getElementById("contact-form-submit-button"),s=document.getElementById("contact-form"),a=l.querySelector("#contact-form-submit-button-icon");function t(t){t.preventDefault();var e=function(t){var n=t.elements,e=Object.keys(n).filter(function(t){return"honeypot"!==n[t].name}).map(function(t){return void 0!==n[t].name?n[t].name:0<n[t].length?n[t].item(0).name:void 0}).filter(function(t,e,o){return o.indexOf(t)==e&&t}),l={};return e.forEach(function(t){var e=n[t];if(l[t]=e.value,e.length){for(var o=[],r=0;r<e.length;r++){var i=e.item(r);(i.checked||i.selected)&&o.push(i.value)}l[t]=o.join(", ")}}),l.formDataNameOrder=JSON.stringify(e),l.formGoogleSheetName=t.dataset.sheet||"responses",l.formGoogleSendEmail=t.dataset.email||"",console.log(l),l}(s);if(e.email&&!function(t){return/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(t)}(e.email)){var o=s.querySelector(".email-invalid");if(o)return!(o.style.display="block")}else{!function(t){a.setAttribute("xlink:href","/dist/portfolio/dist/img/icons.svg#icon-form-spinner"),l.querySelector("span").innerHTML="Sending",l.disabled=!0,t.classList.add("js-submitting"),t.querySelector("input").disabled=!0,t.querySelector("textarea").disabled=!0}(s);var r=s.action,i=new XMLHttpRequest;i.open("POST",r),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.onreadystatechange=function(){window.setTimeout(function(){s.classList.remove("js-submitting"),s.classList.add("js-submitted"),a.setAttribute("xlink:href","/dist/portfolio/dist/img/icons.svg#icon-check"),l.querySelector("span").innerHTML="Sent"},2e3)};var n=Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&");i.send(n)}}document.addEventListener("DOMContentLoaded",function(){s.addEventListener("submit",t,!1)},!1)}(),document.addEventListener("DOMContentLoaded",function(){!function(){"use strict";function t(){var a=window,c=document;if(!("scrollBehavior"in c.documentElement.style&&!0!==a.__forceSmoothScrollPolyfill__)){var t,e=a.HTMLElement||a.Element,d=468,f={scroll:a.scroll||a.scrollTo,scrollBy:a.scrollBy,elementScroll:e.prototype.scroll||p,scrollIntoView:e.prototype.scrollIntoView},u=a.performance&&a.performance.now?a.performance.now.bind(a.performance):Date.now,o=(t=a.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(t)?1:0);a.scroll=a.scrollTo=function(){void 0!==arguments[0]&&(!0!==r(arguments[0])?l.call(a,c.body,void 0!==arguments[0].left?~~arguments[0].left:a.scrollX||a.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:a.scrollY||a.pageYOffset):f.scroll.call(a,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:a.scrollX||a.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:a.scrollY||a.pageYOffset))},a.scrollBy=function(){void 0!==arguments[0]&&(r(arguments[0])?f.scrollBy.call(a,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):l.call(a,c.body,~~arguments[0].left+(a.scrollX||a.pageXOffset),~~arguments[0].top+(a.scrollY||a.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==r(arguments[0])){var t=arguments[0].left,e=arguments[0].top;l.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");f.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==r(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):f.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==r(arguments[0])){var t=function(t){for(var e,o,r;!1==((t=t.parentNode)===c.body)&&!1===(o=i(e=t,"Y")&&n(e,"Y"),r=i(e,"X")&&n(e,"X"),o||r););return t}(this),e=t.getBoundingClientRect(),o=this.getBoundingClientRect();t!==c.body?(l.call(this,t,t.scrollLeft+o.left-e.left,t.scrollTop+o.top-e.top),"fixed"!==a.getComputedStyle(t).position&&a.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):a.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else f.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function p(t,e){this.scrollLeft=t,this.scrollTop=e}function r(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function i(t,e){return"Y"===e?t.clientHeight+o<t.scrollHeight:"X"===e?t.clientWidth+o<t.scrollWidth:void 0}function n(t,e){var o=a.getComputedStyle(t,null)["overflow"+e];return"auto"===o||"scroll"===o}function l(t,e,o){var r,i,n,l,s=u();l=t===c.body?(i=(r=a).scrollX||a.pageXOffset,n=a.scrollY||a.pageYOffset,f.scroll):(i=(r=t).scrollLeft,n=t.scrollTop,p),function t(e){var o,r,i,n,l=(u()-e.startTime)/d;n=l=1<l?1:l,o=.5*(1-Math.cos(Math.PI*n)),r=e.startX+(e.x-e.startX)*o,i=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,r,i),r===e.x&&i===e.y||a.requestAnimationFrame(t.bind(a,e))}({scrollable:r,method:l,startTime:s,startX:i,startY:n,x:e,y:o})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:t}:t()}()}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".site-nav__link"),o=document.querySelectorAll(".scroll-anchor"),r=function(){var r=this.getAttribute("href").replace("#","");event.preventDefault(),Array.prototype.forEach.call(o,function(t,e){if(t.id!=r)return!1;var o=t.offsetTop;window.scrollTo({top:o-96,left:0,behavior:"smooth"})})};Array.prototype.forEach.call(e,function(t,e){t.addEventListener("click",r)});var i=function(){for(var t=0;t<o.length;t++){if(t<o.length-1&&window.pageYOffset>=o[t].offsetTop-216&&window.pageYOffset<o[t+1].offsetTop-216)return Array.prototype.forEach.call(e,function(t,e){t.classList.remove("site-nav__link--current")}),e[t].classList.add("site-nav__link--current"),o[t].classList.add("scroll-anchor--seen"),!0;if(t==o.length-1)return Array.prototype.forEach.call(e,function(t,e){t.classList.remove("site-nav__link--current")}),e[t].classList.add("site-nav__link--current"),o[t].classList.add("scroll-anchor--seen"),!1}};window.addEventListener("scroll",function(t){var e;window.clearTimeout(e),e=setTimeout(i,750)},!1)},!1),document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".portfolio__tablist-tab"),r=document.querySelectorAll(".portfolio__section"),i=document.getElementById("portfolio-section-ux"),n=i.getAttribute("data-section"),e=parseInt(i.children[0].getAttribute("data-article")),o=e+1,l=e-1,s=function(){var e=this,o=e.getAttribute("data-section"),t=Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e});e.classList.add("tab--active"),e.setAttribute("aria-selected","true"),Array.prototype.forEach.call(t,function(t,e){t.classList.remove("tab--active"),t.setAttribute("aria-selected","")}),Array.prototype.forEach.call(r,function(t,e){if(t.id!=o)return t.innerHTML="",t.classList.remove("portfolio__section--active"),!1;(i=t).classList.add("portfolio__section--active"),n=t.getAttribute("data-section"),a()})},a=function(){l=0,e=1,o=2,u.disabled=!0,f.disabled=!1,c="/portfolio/dist/article/article-"+n+"-001.html",d="/portfolio/dist/article/article-"+n+"-002.html",p()};Array.prototype.forEach.call(t,function(t,e){t.addEventListener("click",s)});var c,d,f=document.getElementById("portfolio-article-next"),u=document.getElementById("portfolio-article-previous"),p=(document.getElementById("portfolio-content"),function(){var t=new XMLHttpRequest;t.open("GET",c,!0),t.onload=function(){return 200<=t.status&&t.status<400&&(i.innerHTML=t.response,v(),i.children[0].classList.add("portfolio__article--active"),m()),!1},t.send()}),m=function(){var t=new XMLHttpRequest;t.open("GET",d,!0),t.onload=function(){return 200<=t.status&&t.status<400?f.disabled=!1:!(f.disabled=!0)},t.send()},v=function(){var n,t=document.getElementById("portfolio-content").querySelectorAll("figure > div");Array.prototype.forEach.call(t,function(t,e){var i=t.querySelectorAll("img");Array.prototype.forEach.call(i,function(t,e){var o=t.getAttribute("data-src"),r=o.substring(0,o.lastIndexOf("."))+"@400"+o.substring(o.lastIndexOf("."))+" 400w,"+o.substring(0,o.lastIndexOf("."))+"@800"+o.substring(o.lastIndexOf("."))+" 800w,"+o.substring(0,o.lastIndexOf("."))+"@1200"+o.substring(o.lastIndexOf("."))+" 1200w,"+o.substring(0,o.lastIndexOf("."))+"@1600"+o.substring(o.lastIndexOf("."))+" 1600w,"+o.substring(0,o.lastIndexOf("."))+"@2000"+o.substring(o.lastIndexOf("."))+" 2000w";n=1==i.length?"(max-width:47.9375em) 90vw, (max-width:61.9375) 49.93em, 62.94em":2==i.length?"(max-width:47.9375em) 90vw, (max-width:61.9375) 24.96em, 31.47em":"(max-width:47.9375em) 90vw, (max-width:61.9375) 16.64em, 20.98em",t.setAttribute("srcset",r),t.setAttribute("sizes",n),t.setAttribute("src",t.getAttribute("data-src"))})})};f.addEventListener("click",function(){l++,o++,++e<=9&&1<=e?(c="/portfolio/dist/article/article-"+n+"-00"+e+".html",d="/portfolio/dist/article/article-"+n+"-00"+o+".html"):e<=99&&10<=e?(c="/portfolio/dist/article/article-"+n+"-0"+e+".html",d="/portfolio/dist/article/article-"+n+"-0"+o+".html"):e<=999&&100<=e&&(c="/portfolio/dist/article/article-"+n+"-"+e+".html",d="/portfolio/dist/article/article-"+n+"-"+o+".html"),function(){var t=new XMLHttpRequest;t.open("GET",c,!0),t.onload=function(){return 200<=t.status&&t.status<400&&(i.innerHTML=t.response,v(),i.children[0].classList.add("portfolio__article--next"),window.setTimeout(function(){i.children[0].classList.add("portfolio__article--active"),i.children[0].classList.remove("portfolio__article--loading")},500),m()),!1},t.send()}(),u.disabled=!1}),u.addEventListener("click",function(){l--,o--,--e<=9&&1<=e?(c="/portfolio/dist/article/article-"+n+"-00"+e+".html",d="/portfolio/dist/article/article-"+n+"-00"+o+".html"):e<=99&&10<=e?(c="/portfolio/dist/article/article-"+n+"-0"+e+".html",d="/portfolio/dist/article/article-"+n+"-0"+o+".html"):e<=999&&100<=e&&(c="/portfolio/dist/article/article-"+n+"-"+e+".html",d="/portfolio/dist/article/article-"+n+"-"+o+".html"),function(){var t=new XMLHttpRequest;t.open("GET",c,!0),t.onload=function(){return 200<=t.status&&t.status<400&&(i.innerHTML=t.response,v(),i.children[0].classList.add("portfolio__article--previous"),window.setTimeout(function(){i.children[0].classList.add("portfolio__article--active"),i.children[0].classList.remove("portfolio__article--loading"),i.children[0].classList.remove("portfolio__article--loading")},500),m()),!1},t.send()}(),l<1?u.disabled=!0:1<=l&&(u.disabled=!1),f.disabled=!1})},!1);