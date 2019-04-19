function oneOffLightbox(t){var e=document.querySelectorAll(".lightbox-wrapper img"),o=document.querySelector(".lightbox-wrapper");0<e.length&&Array.prototype.forEach.call(e,function(t,e){t.remove()}),console.log(t);var r=document.createElement("img");r.setAttribute("src",t.currentTarget.getAttribute("src")),r.setAttribute("alt",t.currentTarget.getAttribute("alt")),o.appendChild(r),o.setAttribute("aria-hidden","false"),window.setTimeout(function(){document.body.classList.add("js-lightbox-active")},200)}function srcSet(){var n,l="dist/img/article/",a=document.querySelector(".lightbox-wrapper"),t=document.getElementById("portfolio-content").querySelectorAll("figure > div");Array.prototype.forEach.call(t,function(t,e){var i=t.querySelectorAll("img[data-src]");Array.prototype.forEach.call(i,function(t,e){var o=t.getAttribute("data-src"),r=l+o.substring(0,o.lastIndexOf("."))+"@400"+o.substring(o.lastIndexOf("."))+" 400w,"+l+o.substring(0,o.lastIndexOf("."))+"@800"+o.substring(o.lastIndexOf("."))+" 800w,"+l+o.substring(0,o.lastIndexOf("."))+"@1200"+o.substring(o.lastIndexOf("."))+" 1200w,"+l+o.substring(0,o.lastIndexOf("."))+"@1600"+o.substring(o.lastIndexOf("."))+" 1600w,"+l+o.substring(0,o.lastIndexOf("."))+"@2000"+o.substring(o.lastIndexOf("."))+" 2000w";n=1==i.length?"(max-width:47.9375em) 90vw, (max-width:61.9375) 49.93em, 62.94em":2==i.length?"(max-width:47.9375em) 90vw, (max-width:61.9375) 24.96em, 31.47em":"(max-width:47.9375em) 90vw, (max-width:61.9375) 16.64em, 20.98em",t.setAttribute("srcset",r),t.setAttribute("sizes",n),t.setAttribute("src",l+t.getAttribute("data-src")),t.classList.add("lightbox"),t.addEventListener("click",function(){var t=document.querySelectorAll(".lightbox-wrapper img");0<t.length&&Array.prototype.forEach.call(t,function(t,e){t.remove()});var e=document.createElement("img");e.setAttribute("src",this.getAttribute("src")),e.setAttribute("alt",this.getAttribute("alt")),a.appendChild(e),a.setAttribute("aria-hidden","false"),window.setTimeout(function(){document.body.classList.add("js-lightbox-active")},200)})})})}function lightboxClose(){event.currentTarget.parentNode.setAttribute("aria-hidden","true"),document.body.classList.remove("js-lightbox-active")}!function(t,e){"function"==typeof define&&define.amd?define([],function(){return t.svg4everybody=e()}):"object"==typeof module&&module.exports?module.exports=e():t.svg4everybody=e()}(this,function(){function h(t,e,o){if(o){var r=document.createDocumentFragment(),i=!e.hasAttribute("viewBox")&&o.getAttribute("viewBox");i&&e.setAttribute("viewBox",i);for(var n=o.cloneNode(!0);n.childNodes.length;)r.appendChild(n.firstChild);t.appendChild(r)}}function b(r){r.onreadystatechange=function(){if(4===r.readyState){var o=r._cachedDocument;o||((o=r._cachedDocument=document.implementation.createHTMLDocument("")).body.innerHTML=r.responseText,r._cachedTarget={}),r._embeds.splice(0).map(function(t){var e=r._cachedTarget[t.id];e||(e=r._cachedTarget[t.id]=o.getElementById(t.id)),h(t.parent,t.svg,e)})}},r.onreadystatechange()}function g(t){for(var e=t;"svg"!==e.nodeName.toLowerCase()&&(e=e.parentNode););return e}return function(t){var d,u=Object(t),e=window.top!==window.self;d="polyfill"in u?u.polyfill:/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||/\bEdge\/.(\d+)\b/.test(navigator.userAgent)&&e;var f={},p=window.requestAnimationFrame||setTimeout,m=document.getElementsByTagName("use"),v=0;d&&function t(){for(var e=0;e<m.length;){var o=m[e],r=o.parentNode,i=g(r),n=o.getAttribute("xlink:href")||o.getAttribute("href");if(!n&&u.attributeName&&(n=o.getAttribute(u.attributeName)),i&&n){if(d)if(!u.validate||u.validate(n,i,o)){r.removeChild(o);var l=n.split("#"),a=l.shift(),s=l.join("#");if(a.length){var c=f[a];c||((c=f[a]=new XMLHttpRequest).open("GET",a),c.send(),c._embeds=[]),c._embeds.push({parent:r,svg:i,id:s}),b(c)}else h(r,i,document.getElementById(s))}else++e,++v}else++e}(!m.length||0<m.length-v)&&p(t,67)}()}}),svg4everybody({fallback:function(t,e){return"fallback.png"}}),document.addEventListener("DOMContentLoaded",function(){!function(){"use strict";function t(){var s=window,c=document;if(!("scrollBehavior"in c.documentElement.style&&!0!==s.__forceSmoothScrollPolyfill__)){var t,e=s.HTMLElement||s.Element,d=468,u={scroll:s.scroll||s.scrollTo,scrollBy:s.scrollBy,elementScroll:e.prototype.scroll||p,scrollIntoView:e.prototype.scrollIntoView},f=s.performance&&s.performance.now?s.performance.now.bind(s.performance):Date.now,o=(t=s.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(t)?1:0);s.scroll=s.scrollTo=function(){void 0!==arguments[0]&&(!0!==r(arguments[0])?l.call(s,c.body,void 0!==arguments[0].left?~~arguments[0].left:s.scrollX||s.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:s.scrollY||s.pageYOffset):u.scroll.call(s,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:s.scrollX||s.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:s.scrollY||s.pageYOffset))},s.scrollBy=function(){void 0!==arguments[0]&&(r(arguments[0])?u.scrollBy.call(s,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):l.call(s,c.body,~~arguments[0].left+(s.scrollX||s.pageXOffset),~~arguments[0].top+(s.scrollY||s.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==r(arguments[0])){var t=arguments[0].left,e=arguments[0].top;l.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");u.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==r(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):u.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==r(arguments[0])){var t=function(t){for(var e,o,r;!1==((t=t.parentNode)===c.body)&&!1===(o=i(e=t,"Y")&&n(e,"Y"),r=i(e,"X")&&n(e,"X"),o||r););return t}(this),e=t.getBoundingClientRect(),o=this.getBoundingClientRect();t!==c.body?(l.call(this,t,t.scrollLeft+o.left-e.left,t.scrollTop+o.top-e.top),"fixed"!==s.getComputedStyle(t).position&&s.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):s.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else u.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function p(t,e){this.scrollLeft=t,this.scrollTop=e}function r(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function i(t,e){return"Y"===e?t.clientHeight+o<t.scrollHeight:"X"===e?t.clientWidth+o<t.scrollWidth:void 0}function n(t,e){var o=s.getComputedStyle(t,null)["overflow"+e];return"auto"===o||"scroll"===o}function l(t,e,o){var r,i,n,l,a=f();l=t===c.body?(i=(r=s).scrollX||s.pageXOffset,n=s.scrollY||s.pageYOffset,u.scroll):(i=(r=t).scrollLeft,n=t.scrollTop,p),function t(e){var o,r,i,n,l=(f()-e.startTime)/d;n=l=1<l?1:l,o=.5*(1-Math.cos(Math.PI*n)),r=e.startX+(e.x-e.startX)*o,i=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,r,i),r===e.x&&i===e.y||s.requestAnimationFrame(t.bind(s,e))}({scrollable:r,method:l,startTime:a,startX:i,startY:n,x:e,y:o})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:t}:t()}()}),function(){var l=document.getElementById("contact-form-submit-button"),a=document.getElementById("contact-form"),s=l.querySelector("#contact-form-submit-button-icon");function t(t){t.preventDefault();var e=function(t){var n=t.elements,e=Object.keys(n).filter(function(t){return"honeypot"!==n[t].name}).map(function(t){return void 0!==n[t].name?n[t].name:0<n[t].length?n[t].item(0).name:void 0}).filter(function(t,e,o){return o.indexOf(t)==e&&t}),l={};return e.forEach(function(t){var e=n[t];if(l[t]=e.value,e.length){for(var o=[],r=0;r<e.length;r++){var i=e.item(r);(i.checked||i.selected)&&o.push(i.value)}l[t]=o.join(", ")}}),l.formDataNameOrder=JSON.stringify(e),l.formGoogleSheetName=t.dataset.sheet||"responses",l.formGoogleSendEmail=t.dataset.email||"",console.log(l),l}(a);if(e.email&&!function(t){return/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(t)}(e.email)){var o=a.querySelector(".email-invalid");if(o)return!(o.style.display="block")}else{!function(t){s.setAttribute("xlink:href","dist/img/icons.svg#icon-form-spinner"),l.querySelector("span").innerHTML="Sending",l.disabled=!0,t.classList.add("js-submitting"),t.querySelector("input").disabled=!0,t.querySelector("textarea").disabled=!0}(a);var r=a.action,i=new XMLHttpRequest;i.open("POST",r),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.onreadystatechange=function(){window.setTimeout(function(){a.classList.remove("js-submitting"),a.classList.add("js-submitted"),s.setAttribute("xlink:href","dist/img/icons.svg#icon-check"),l.querySelector("span").innerHTML="Sent"},2e3)};var n=Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&");i.send(n)}}document.addEventListener("DOMContentLoaded",function(){a.addEventListener("submit",t,!1)},!1)}(),function(){var e,o=document.getElementById("dribbble-feed");(e=new XMLHttpRequest).open("GET","https://api.dribbble.com/v2/user/shots?per_page=6&access_token=bd8865cd4ff712d9f421cb8526fa8560062dfd67da1fac1645a4229b43500d24",!0),e.onload=function(){if(200<=e.status&&e.status<400){var t=JSON.parse(e.responseText);if(0<t.length){var r=document.createDocumentFragment();Array.prototype.forEach.call(t,function(t,e){var o=document.createElement("a");o.setAttribute("href",t.html_url),o.setAttribute("target","_blank"),o.setAttribute("title",t.title),o.innerHTML='<img aria-hidden="true" src="'+t.images.hidpi+'" />',r.appendChild(o)}),o.appendChild(r)}}},e.send()}(),window.addEventListener("DOMContentLoaded",srcSet()),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".site-nav__link"),o=document.querySelectorAll(".scroll-anchor"),r=function(){var r=this.getAttribute("href").replace("#","");event.preventDefault(),Array.prototype.forEach.call(o,function(t,e){if(t.id!=r)return!1;var o=t.offsetTop;window.scrollTo({top:o-128,left:0,behavior:"smooth"})})};Array.prototype.forEach.call(e,function(t,e){t.addEventListener("click",r)});var i=function(){for(var t=0;t<o.length;t++){if(t<o.length-1&&window.pageYOffset>=o[t].offsetTop-272&&window.pageYOffset<o[t+1].offsetTop-272)return Array.prototype.forEach.call(e,function(t,e){t.classList.remove("site-nav__link--current")}),e[t].classList.add("site-nav__link--current"),o[t].classList.add("scroll-anchor--seen"),!0;if(t==o.length-1)return Array.prototype.forEach.call(e,function(t,e){t.classList.remove("site-nav__link--current")}),e[t].classList.add("site-nav__link--current"),o[t].classList.add("scroll-anchor--seen"),!1}};window.addEventListener("scroll",function(t){var e;window.clearTimeout(e),e=setTimeout(i,750)},!1)},!1),document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".portfolio__tablist-tab"),r=document.querySelectorAll(".portfolio__section"),i=document.getElementById("portfolio-section-recent"),n=i.getAttribute("data-section"),e=parseInt(i.children[0].getAttribute("data-article")),o=e+1,l=e-1,a=function(){var e=this,o=e.getAttribute("data-section"),t=Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e});e.classList.add("tab--active"),e.setAttribute("aria-selected","true"),Array.prototype.forEach.call(t,function(t,e){t.classList.remove("tab--active"),t.setAttribute("aria-selected","")}),Array.prototype.forEach.call(r,function(t,e){if(t.id==o)(i=t).classList.add("portfolio__section--active"),n=t.getAttribute("data-section"),s(t);else{if("portfolio-section-recent"!=t.id)return t.innerHTML="",t.classList.remove("portfolio__section--active"),!1;t.classList.remove("portfolio__section--active"),t.children[0].classList.remove("portfolio__article--active"),t.setAttribute("aria-hidden","true")}})},s=function(t){if(l=0,e=1,o=2,c="dist/article/article-"+n+"-001.html",d="dist/article/article-"+n+"-002.html","portfolio-section-recent"==t.id)return t.classList.add("portfolio__section--active"),t.children[0].classList.add("portfolio__article--active"),t.setAttribute("aria-hidden","false"),f.disabled=!0,!(u.disabled=!0);f.disabled=!0,u.disabled=!1,p()};Array.prototype.forEach.call(t,function(t,e){t.addEventListener("click",a)});var c,d,u=document.getElementById("portfolio-article-next"),f=document.getElementById("portfolio-article-previous"),p=(document.getElementById("portfolio-content"),function(){var t=new XMLHttpRequest;t.open("GET",c,!0),t.onload=function(){return 200<=t.status&&t.status<400&&(i.innerHTML=t.response,srcSet(),i.children[0].classList.add("portfolio__article--active"),m()),!1},t.send()}),m=function(){var t=new XMLHttpRequest;t.open("GET",d,!0),t.onload=function(){return 200<=t.status&&t.status<400?u.disabled=!1:!(u.disabled=!0)},t.send()},v=function(){return e<=9&&1<=e?(c="dist/article/article-"+n+"-00"+e+".html",d="dist/article/article-"+n+"-00"+o+".html"):e<=99&&10<=e?(c="dist/article/article-"+n+"-0"+e+".html",d="dist/article/article-"+n+"-0"+o+".html"):e<=999&&100<=e&&(c="dist/article/article-"+n+"-"+e+".html",d="dist/article/article-"+n+"-"+o+".html"),!1};u.addEventListener("click",function(){l++,e++,o++,v(),function(){var t=new XMLHttpRequest;t.open("GET",c,!0),t.onload=function(){return 200<=t.status&&t.status<400&&(i.innerHTML=t.response,srcSet(),i.children[0].classList.add("portfolio__article--next"),window.setTimeout(function(){i.children[0].classList.add("portfolio__article--active"),i.children[0].classList.remove("portfolio__article--loading")},500),m()),!1},t.send()}(),f.disabled=!1}),f.addEventListener("click",function(){l--,e--,o--,v(),function(){var t=new XMLHttpRequest;t.open("GET",c,!0),t.onload=function(){return 200<=t.status&&t.status<400&&(i.innerHTML=t.response,srcSet(),i.children[0].classList.add("portfolio__article--previous"),window.setTimeout(function(){i.children[0].classList.add("portfolio__article--active"),i.children[0].classList.remove("portfolio__article--loading"),i.children[0].classList.remove("portfolio__article--loading")},500),m()),!1},t.send()}(),l<1?f.disabled=!0:1<=l&&(f.disabled=!1),u.disabled=!1})},!1);