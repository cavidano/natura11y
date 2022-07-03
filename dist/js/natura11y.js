!function(){"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,n=["a[href]","button","input","textarea","select","details",'[tabindex]:not([tabindex="-1"])'];return t(e.querySelectorAll(n)).filter((function(t){return!t.hasAttribute("disabled")&&!t.getAttribute("aria-hidden")}))};function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,i=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.accordionList=document.querySelectorAll(".accordion")}var e,a;return e=t,a=[{key:"init",value:function(){this.accordionList.forEach((function(t){var e=t.querySelectorAll(':scope > [data-accordion="button"]'),a=t.querySelectorAll(':scope > [data-accordion="panel"]'),o=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=n(e),i=r(o);try{for(i.s();!(t=i.n()).done;){var l=t.value;!0===a?l.setAttribute("tabindex",0):!1===a&&l.setAttribute("tabindex",-1)}}catch(t){i.e(t)}finally{i.f()}};e.forEach((function(t,n){var i=t.nextElementSibling,l=t.getAttribute("aria-expanded");t.setAttribute("tabindex",0),"true"===l?(i.style.maxHeight=i.scrollHeight+"px",i.classList.add("show"),o(i,!0)):(t.setAttribute("aria-expanded",!1),i.style.maxHeight=null,i.setAttribute("aria-hidden",!0),o(i,!1));var c=function(e){e.preventDefault(),e.stopPropagation();var n,c=r(a);try{for(c.s();!(n=c.n()).done;){var s=n.value;s.classList.remove("show"),s!==i&&(s.classList.remove("shown"),s.style.maxHeight=null,s.previousElementSibling.setAttribute("aria-expanded",!1),s.setAttribute("aria-hidden",!0),o(s,!1))}}catch(t){c.e(t)}finally{c.f()}i.classList.toggle("shown"),"true"===(l=t.getAttribute("aria-expanded"))?(t.setAttribute("aria-expanded",!1),i.setAttribute("aria-hidden",!0),o(i,!1)):"false"===l&&(t.setAttribute("aria-expanded",!0),i.setAttribute("aria-hidden",!1),o(i,!0)),i.style.maxHeight?i.style.maxHeight=null:(i.style.maxHeight=i.scrollHeight+"px",i.setAttribute("aria-hidden",!1));var u=new Event("accTrigger",{bubbles:!0});document.dispatchEvent(u)};t.addEventListener("click",(function(t){c(t)})),t.addEventListener("keydown",(function(t){var r=function(r){t.preventDefault();var a=n+r;-1===r&&a<0?e[e.length-1].focus():1===r&&a>=e.length?e[0].focus():e[a].focus()};switch(t.code){case"ArrowUp":r(-1);break;case"ArrowDown":r(1)}})),t.addEventListener("keyup",(function(t){"Enter"===t.code&&"BUTTON"!==t.target.tagName&&c(t)}))}))}))}}],a&&o(e.prototype,a),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.alertDismissableList=document.querySelectorAll(".alert--dismissable"),this.closeButtonHTML='\n            <button class="button button--icon-only">\n                <span class="icon icon-close" aria-label="Close" aria-hidden="true">\n            </button>\n        '}var e,n;return e=t,(n=[{key:"init",value:function(){var t=this;this.alertDismissableList.forEach((function(e){e.insertAdjacentHTML("afterbegin",t.closeButtonHTML),e.querySelector("button").addEventListener("click",(function(t){t.preventDefault(),e.classList.add("dismissed"),document.querySelector(".dismissed").addEventListener("animationend",(function(){e.remove()}))}))}))}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.iconOnlyButtonList=document.querySelectorAll(".button--icon-only")}var e,n;return e=t,(n=[{key:"init",value:function(){var t,e=this,n=function(n){t=setTimeout((function(){e.iconOnlyButtonList.forEach((function(t){t.classList.remove("tooltip-show")})),n.target.classList.add("tooltip-show")}),300)},r=function(e){clearTimeout(t),e.target.classList.remove("tooltip-show")};this.iconOnlyButtonList.forEach((function(t){var e=t.getAttribute("aria-label"),a='\n                <span class="button__tooltip">\n                    '.concat(e,"\n                </span>\n            ");if(e){t.insertAdjacentHTML("beforeend",a);var o=t.querySelector(".button__tooltip"),i=function(){var e=o.offsetWidth/2,n=t.offsetLeft,r=window.innerWidth-(t.offsetLeft+t.offsetWidth);e>n&&o.classList.add("left"),e>r&&o.classList.add("right")};i(),window.addEventListener("resize",i),t.addEventListener("mouseenter",n),t.addEventListener("focusin",n),t.addEventListener("mouseleave",r),t.addEventListener("focusout",r)}}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.collapseButtonList=document.querySelectorAll("[data-target-toggle]")}var e,r;return e=t,(r=[{key:"init",value:function(){this.collapseButtonList.forEach((function(t){t.setAttribute("aria-expanded",!1),t.addEventListener("click",(function(e){var r,a=e.target.getAttribute("data-target-toggle").replace(/#/,""),o=document.getElementById(a),i=n(o)[0],l=t.getAttribute("aria-expanded"),c=function(t,e){t.setAttribute("aria-expanded",!1),e.classList.remove("shown")};if("true"===l?c(t,o):"false"===l&&(r=o,t.setAttribute("aria-expanded",!0),r.classList.add("shown"),o.hasAttribute("data-focus-first")&&i.focus()),o.addEventListener("keydown",(function(e){switch(e.code){case"Tab":document.activeElement===i&&e.shiftKey&&(e.preventDefault(),t.focus());break;case"Escape":c(t,o)}})),t.hasAttribute("data-target-close")){var s=e.target.getAttribute("data-target-close").replace(/#/,""),u=document.getElementById(s),d=document.querySelector('[data-target-toggle="#'.concat(s,'"]'));console.log("Close target ID: ".concat(d)),c(d,u)}}))}))}}])&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.formList=document.querySelectorAll("form[novalidate]"),this.formEntryList=document.querySelectorAll(".form-entry"),this.fileUploadList=document.querySelectorAll(".file-upload")}var e,n;return e=t,n=[{key:"init",value:function(){var t=!1,e=["is-invalid"];this.formList.forEach((function(e){e.addEventListener("submit",(function(n){n.preventDefault(),t=!0;var r=[];e.querySelectorAll(":invalid").forEach((function(t){var e=t.closest(".form-entry"),n=e.querySelector(".form-entry__field__label");e.classList.add("is-invalid");var a,o=e.querySelector(".form-entry__feedback"),i=e.querySelector(".form-entry__help");i&&(a=i.innerHTML.toString());var l,c,s=e.getAttribute("data-error-message"),u=[s,a];r.push(u),null===o&&n.insertAdjacentHTML("afterend",(c=a,null===(l=s)&&(l="This field is Required"),'\n                <div class="form-entry__feedback">\n                    <small>\n                        <span class="icon icon-warn" aria-hidden="true"></span>\n                        <span class="message">\n                            <strong>'.concat(l,"</strong> ").concat(void 0!==c?c:"","\n                        </span>\n                    </small>\n                </div>\n            ")))})),r.length>0&&n.preventDefault();var a=e.querySelector('[class*="alert"], [class*="invalid"]');if(a){a.hasAttribute("data-alert")&&(a.style.display="block");var o=a.offsetTop-16;window.scrollTo({top:o,behavior:"smooth"})}}))})),this.formEntryList.forEach((function(n){var r,a=n.querySelectorAll(["input","select","textarea"]);r=!!n.hasAttribute("data-required"),a.forEach((function(a){var o=n.querySelector(".form-entry__field__input"),i=a.tagName,l=".form-entry";if("INPUT"===i){var c=a.getAttribute("type");"radio"!==c&&"checkbox"!==c||(l="label",a.disabled&&a.closest("label").classList.add("disabled"))}a.addEventListener("focusin",(function(){this.closest(l).classList.add("active")})),a.addEventListener("focusout",(function(){this.closest(l).classList.remove("active")})),!0===r&&(a.setAttribute("required","true"),a.setAttribute("aria-required",!0)),a.addEventListener("change",(function(){var n;console.log("My value is",a.value),!0===t&&!0===r&&(function(){return""===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)}((n=a).value)?function(t){var n;(n=t.closest(".form-entry").classList).add.apply(n,e)}(n):function(t){var n;(n=t.closest(".form-entry").classList).remove.apply(n,e)}(n)),""!==a.value?a.closest(".form-entry").classList.add("has-value"):a.closest(".form-entry").classList.remove("has-value")})),o&&o.addEventListener("click",(function(t){var e=t.target.tagName,n=t.target.closest(".form-entry__field__input").querySelector("input");"SPAN"===e&&(console.log(t.target.nextSibling),n.focus())}))}))})),this.fileUploadList.forEach((function(t){t.querySelector('input[type="file"]').addEventListener("change",(function(e){var n,r,a=(n=e.target.files,r=1,function(t){if(Array.isArray(t))return t}(n)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(t){l=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(n,r)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],o=a.name,i=(a.size/1e3).toFixed(2),l='\n                    <span class="file-upload__data">\n                        <span class="file-name">'.concat(o,'</span>\n                        <span class="file-size">').concat(i," kb</span>\n                    </span>\n                "),c=t.querySelector(".file-upload__data");c&&c.remove(),t.insertAdjacentHTML("beforeend",l)}));var e=function(){t.closest(".form-entry").classList.remove("active")};t.addEventListener("dragenter",(function(){t.closest(".form-entry").classList.add("active")})),t.addEventListener("dragleave",e),t.addEventListener("dragend",e),t.addEventListener("drop",(function(){t.closest(".form-entry").classList.remove("active")}))}))}}],n&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.modalList=document.querySelectorAll(".modal"),this.modalButtonList=document.querySelectorAll("[data-modal-open]")}var e,r;return e=t,(r=[{key:"init",value:function(){this.modalList.forEach((function(t){var e=t.querySelector(".modal__content");e.setAttribute("role","dialog"),e.setAttribute("aria-modal",!0),t.setAttribute("aria-hidden",!0)})),this.modalButtonList.forEach((function(t){t.addEventListener("click",(function(t){var e=t.target.getAttribute("data-modal-open").replace(/#/,"");!function(t){document.querySelector("body").classList.add("modal-open"),t.setAttribute("aria-hidden",!1);var e=document.activeElement,r=t.querySelector(".modal__content");r.setAttribute("tabindex",0),r.focus(),r.setAttribute("tabindex",-1),t.classList.contains("modal--scroll-all")&&(t.scrollTop=0);var a=t.querySelectorAll("[data-modal-close]"),o=function(t){r.contains(t.target)||i()},i=function(){t.setAttribute("aria-hidden",!0),e.focus(),document.querySelector("body").classList.remove("modal-open"),window.removeEventListener("click",o)},l=n(t),c=l[0],s=l[l.length-1];t.addEventListener("keydown",(function(t){switch(t.code){case"Tab":document.activeElement===s&&(t.shiftKey||(t.preventDefault(),c.focus())),document.activeElement===c&&t.shiftKey&&(t.preventDefault(),s.focus()),document.activeElement===r&&t.shiftKey&&(t.preventDefault(),c.focus());break;case"Escape":i()}})),a.forEach((function(t){t.addEventListener("click",i),t.setAttribute("aria-label","Close Modal Window")})),"true"===t.dataset.modalCloseOutside&&window.addEventListener("click",o)}(document.getElementById(e)),t.stopPropagation()}))}))}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var g=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dropdownButtonList=document.querySelectorAll('[data-toggle="dropdown"]')}var e,n;return e=t,(n=[{key:"init",value:function(){this.dropdownButtonList.forEach((function(t){var e=t.closest("li"),n=t.nextElementSibling;t.setAttribute("aria-expanded",!1),t.setAttribute("aria-haspopup",!0),t.addEventListener("click",(function(e){e.preventDefault(),n.classList.toggle("shown");var r=t.getAttribute("aria-expanded");"true"===r?t.setAttribute("aria-expanded",!1):"false"===r&&t.setAttribute("aria-expanded",!0)})),window.addEventListener("click",(function(r){e.contains(r.target)||(n.classList.remove("shown"),t.setAttribute("aria-expanded",!1))}))}))}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var w=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tabsList=document.querySelectorAll(".tabs")}var e,n;return e=t,(n=[{key:"init",value:function(){this.tabsList.forEach((function(t){var e=t.querySelectorAll('[role="tab"]'),n=t.querySelectorAll('[role="tabpanel"]');e.forEach((function(t,r){t.addEventListener("click",(function(t){!function(t){e.forEach((function(t){t.setAttribute("aria-selected","false")})),n.forEach((function(t){t.classList.remove("shown"),t.setAttribute("hidden","")})),t.setAttribute("aria-selected","true");var r=t.getAttribute("aria-controls"),a=document.getElementById(r);a.classList.add("shown"),a.removeAttribute("hidden")}(t.target)})),t.addEventListener("keydown",(function(t){var n=function(n){t.preventDefault();var a=r+n;-1===n&&a<0?e[e.length-1].focus():1===n&&a>=e.length?e[0].focus():e[a].focus()};switch(t.code){case"Home":!function(t){t.preventDefault(),e[0].focus()}(t);break;case"End":!function(t){t.preventDefault(),e[e.length-1].focus()}(t);break;case"ArrowLeft":n(-1);break;case"ArrowRight":n(1)}}))}))}))}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var E=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tableStackList=document.querySelectorAll('[class*="table--stack"]'),this.tableScrollList=document.querySelectorAll(".table-scroll")}var e,n;return e=t,(n=[{key:"init",value:function(){var t=this;this.tableStackList.forEach((function(t){var e=t.querySelectorAll("thead th"),n=t.querySelectorAll("tbody tr"),r=[];e.forEach((function(t){if(""!==t.textContent){var e=t.textContent.trim();r.push(e)}})),n.forEach((function(t){t.querySelectorAll("td").forEach((function(t,e){var n=t.innerHTML,a='\n                        <div class="td-content">\n                            '.concat(n,"\n                        </div>\n                    ");t.innerHTML=a,t.setAttribute("data-before",r[e])}))}))}));var e=function(){t.tableScrollList.forEach((function(t){var e=t.querySelector(".table-scroll__container"),n=t.offsetWidth;e.scrollWidth>n?t.setAttribute("data-scroll",!0):t.setAttribute("data-scroll",!1),e.addEventListener("scroll",(function(){e.scrollLeft>1?e.setAttribute("data-scrolling",!0):e.setAttribute("data-scrolling",!1)}),{passive:!0})}))};e(),window.addEventListener("resize",e)}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();(new i).init(),(new c).init(),(new u).init(),(new f).init(),(new y).init(),(new h).init(),(new g).init(),(new w).init(),(new E).init()}();