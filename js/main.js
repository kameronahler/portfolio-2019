!function(e,t){"function"==typeof define&&define.amd?define([],function(){return e.svg4everybody=t()}):"object"==typeof module&&module.exports?module.exports=t():e.svg4everybody=t()}(this,function(){function h(e,t,o){if(o){var r=document.createDocumentFragment(),n=!t.hasAttribute("viewBox")&&o.getAttribute("viewBox");n&&t.setAttribute("viewBox",n);for(var l=o.cloneNode(!0);l.childNodes.length;)r.appendChild(l.firstChild);e.appendChild(r)}}function y(r){r.onreadystatechange=function(){if(4===r.readyState){var o=r._cachedDocument;o||((o=r._cachedDocument=document.implementation.createHTMLDocument("")).body.innerHTML=r.responseText,r._cachedTarget={}),r._embeds.splice(0).map(function(e){var t=r._cachedTarget[e.id];t||(t=r._cachedTarget[e.id]=o.getElementById(e.id)),h(e.parent,e.svg,t)})}},r.onreadystatechange()}function e(e){var d,f=Object(e),t=window.top!==window.self;d="polyfill"in f?f.polyfill:/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||/\bEdge\/.(\d+)\b/.test(navigator.userAgent)&&t;var u={},p=window.requestAnimationFrame||setTimeout,v=document.getElementsByTagName("use"),m=0;d&&function e(){for(var t=0;t<v.length;){var o=v[t],r=o.parentNode,n=b(r),l=o.getAttribute("xlink:href")||o.getAttribute("href");if(!l&&f.attributeName&&(l=o.getAttribute(f.attributeName)),n&&l){if(d)if(!f.validate||f.validate(l,n,o)){r.removeChild(o);var i=l.split("#"),a=i.shift(),c=i.join("#");if(a.length){var s=u[a];s||((s=u[a]=new XMLHttpRequest).open("GET",a),s.send(),s._embeds=[]),s._embeds.push({parent:r,svg:n,id:c}),y(s)}else h(r,n,document.getElementById(c))}else++t,++m}else++t}(!v.length||0<v.length-m)&&p(e,67)}()}function b(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}return e}),function(){var u=document.getElementById("contact-form-submit-button"),p=document.getElementById("contact-form"),v=u.querySelector("#contact-form-submit-button-icon");function e(e){e.preventDefault();var t,l,o,i,r,n,a=(l=(t=p).elements,o=Object.keys(l).filter(function(e){return"honeypot"!==l[e].name}).map(function(e){return void 0!==l[e].name?l[e].name:0<l[e].length?l[e].item(0).name:void 0}).filter(function(e,t,o){return o.indexOf(e)==t&&e}),i={},o.forEach(function(e){var t=l[e];if(i[e]=t.value,t.length){for(var o=[],r=0;r<t.length;r++){var n=t.item(r);(n.checked||n.selected)&&o.push(n.value)}i[e]=o.join(", ")}}),i.formDataNameOrder=JSON.stringify(o),i.formGoogleSheetName=t.dataset.sheet||"responses",i.formGoogleSendEmail=t.dataset.email||"",console.log(i),i);if(a.email&&(n=a.email,!/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(n))){var c=p.querySelector(".email-invalid");if(c)return!(c.style.display="block")}else{r=p,v.setAttribute("xlink:href","/img/icons.svg#icon-form-spinner"),u.querySelector("span").innerHTML="Sending",u.disabled=!0,r.classList.add("js-submitting"),r.querySelector("input").disabled=!0,r.querySelector("textarea").disabled=!0;var s=p.action,d=new XMLHttpRequest;d.open("POST",s),d.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),d.onreadystatechange=function(){window.setTimeout(function(){p.classList.remove("js-submitting"),p.classList.add("js-submitted"),v.setAttribute("xlink:href","/img/icons.svg#icon-check"),u.querySelector("span").innerHTML="Sent"},4e3)};var f=Object.keys(a).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(a[e])}).join("&");d.send(f)}}document.addEventListener("DOMContentLoaded",function(){p.addEventListener("submit",e,!1)},!1)}(),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".portfolio__tablist-tab"),t=document.querySelectorAll(".portfolio__example"),o=function(){var o=this.getAttribute("data-article"),e=Array.prototype.filter.call(this.parentNode.children,function(e){return e!==this});Array.prototype.forEach.call(e,function(e,t){e.classList.remove("tab--active")}),this.getAttribute("data-article"),this.classList.add("tab--active"),Array.prototype.forEach.call(t,function(e,t){e.id==o?e.classList.add("portfolio__example--active"):e.classList.remove("portfolio__example--active")})};Array.prototype.forEach.call(e,function(e,t){e.addEventListener("click",o)})},!1),document.addEventListener("DOMContentLoaded",function(){!function(){"use strict";function e(){var c=window,s=document;if(!("scrollBehavior"in s.documentElement.style&&!0!==c.__forceSmoothScrollPolyfill__)){var e,t=c.HTMLElement||c.Element,d=468,f={scroll:c.scroll||c.scrollTo,scrollBy:c.scrollBy,elementScroll:t.prototype.scroll||p,scrollIntoView:t.prototype.scrollIntoView},u=c.performance&&c.performance.now?c.performance.now.bind(c.performance):Date.now,o=(e=c.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(e)?1:0);c.scroll=c.scrollTo=function(){void 0!==arguments[0]&&(!0!==r(arguments[0])?i.call(c,s.body,void 0!==arguments[0].left?~~arguments[0].left:c.scrollX||c.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:c.scrollY||c.pageYOffset):f.scroll.call(c,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:c.scrollX||c.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:c.scrollY||c.pageYOffset))},c.scrollBy=function(){void 0!==arguments[0]&&(r(arguments[0])?f.scrollBy.call(c,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):i.call(c,s.body,~~arguments[0].left+(c.scrollX||c.pageXOffset),~~arguments[0].top+(c.scrollY||c.pageYOffset)))},t.prototype.scroll=t.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==r(arguments[0])){var e=arguments[0].left,t=arguments[0].top;i.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");f.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},t.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==r(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):f.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},t.prototype.scrollIntoView=function(){if(!0!==r(arguments[0])){var e=function(e){for(var t,o,r;!1==((e=e.parentNode)===s.body)&&!1===(o=n(t=e,"Y")&&l(t,"Y"),r=n(t,"X")&&l(t,"X"),o||r););return e}(this),t=e.getBoundingClientRect(),o=this.getBoundingClientRect();e!==s.body?(i.call(this,e,e.scrollLeft+o.left-t.left,e.scrollTop+o.top-t.top),"fixed"!==c.getComputedStyle(e).position&&c.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):c.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else f.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function p(e,t){this.scrollLeft=e,this.scrollTop=t}function r(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function n(e,t){return"Y"===t?e.clientHeight+o<e.scrollHeight:"X"===t?e.clientWidth+o<e.scrollWidth:void 0}function l(e,t){var o=c.getComputedStyle(e,null)["overflow"+t];return"auto"===o||"scroll"===o}function i(e,t,o){var r,n,l,i,a=u();i=e===s.body?(n=(r=c).scrollX||c.pageXOffset,l=c.scrollY||c.pageYOffset,f.scroll):(n=(r=e).scrollLeft,l=e.scrollTop,p),function e(t){var o,r,n,l,i=(u()-t.startTime)/d;l=i=1<i?1:i,o=.5*(1-Math.cos(Math.PI*l)),r=t.startX+(t.x-t.startX)*o,n=t.startY+(t.y-t.startY)*o,t.method.call(t.scrollable,r,n),r===t.x&&n===t.y||c.requestAnimationFrame(e.bind(c,t))}({scrollable:r,method:i,startTime:a,startX:n,startY:l,x:t,y:o})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:e}:e()}()}),document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".site-nav__link"),o=document.querySelectorAll(".scroll-anchor"),r=function(){var r=this.getAttribute("href").replace("#","");event.preventDefault(),Array.prototype.forEach.call(o,function(e,t){if(e.id!=r)return!1;var o=e.offsetTop;window.scrollTo({top:o-216,left:0,behavior:"smooth"})})};Array.prototype.forEach.call(t,function(e,t){e.addEventListener("click",r)});var n=function(){for(var e=0;e<o.length;e++){if(e<o.length-1&&window.scrollY>=o[e].offsetTop-216&&window.scrollY<o[e+1].offsetTop-216)return Array.prototype.forEach.call(t,function(e,t){e.classList.remove("site-nav__link--current")}),t[e].classList.add("site-nav__link--current"),o[e].classList.add("scroll-anchor--seen"),!0;if(e==o.length-1)return Array.prototype.forEach.call(t,function(e,t){e.classList.remove("site-nav__link--current")}),t[e].classList.add("site-nav__link--current"),o[e].classList.add("scroll-anchor--seen"),!1}};window.addEventListener("scroll",function(e){var t;window.clearTimeout(t),t=setTimeout(n,500)},!1)},!1);