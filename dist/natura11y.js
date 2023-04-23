!function(){"use strict";const t=function(){return[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(["a[href]","button","input","textarea","select","details",'[tabindex]:not([tabindex="-1"])'])].filter((t=>!t.hasAttribute("disabled")&&!t.getAttribute("aria-hidden")))},e=new class{#t=document.querySelectorAll(".accordion");init(){this.#t.forEach((e=>{const s=e.querySelectorAll(':scope > [data-accordion="button"]'),a=e.querySelectorAll(':scope > [data-accordion="panel"]'),n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const a=t(e);for(const t of a)!0===s?t.setAttribute("tabindex",0):!1===s&&t.setAttribute("tabindex",-1)};s.forEach(((t,e)=>{const r=t.nextElementSibling;let i=t.getAttribute("aria-expanded");t.setAttribute("tabindex",0),"true"===i?(r.style.maxHeight=r.scrollHeight+"px",r.classList.add("show"),n(r,!0)):(t.setAttribute("aria-expanded",!1),r.style.maxHeight=null,r.setAttribute("aria-hidden",!0),n(r,!1));const o=e=>{e.preventDefault(),e.stopPropagation();for(const t of a)t.classList.remove("show"),t!==r&&(t.classList.remove("shown"),t.style.maxHeight=null,t.previousElementSibling.setAttribute("aria-expanded",!1),t.setAttribute("aria-hidden",!0),n(t,!1));r.classList.toggle("shown"),i=t.getAttribute("aria-expanded"),"true"===i?(t.setAttribute("aria-expanded",!1),r.setAttribute("aria-hidden",!0),n(r,!1)):"false"===i&&(t.setAttribute("aria-expanded",!0),r.setAttribute("aria-hidden",!1),n(r,!0)),r.style.maxHeight?r.style.maxHeight=null:(r.style.maxHeight=r.scrollHeight+"px",r.setAttribute("aria-hidden",!1));let s=new Event("accTrigger",{bubbles:!0});document.dispatchEvent(s)};t.addEventListener("click",(t=>{o(t)})),t.addEventListener("keydown",(t=>{const a=a=>{t.preventDefault();let n=e+a;-1===a&&n<0?s[s.length-1].focus():1===a&&n>=s.length?s[0].focus():s[n].focus()};switch(t.code){case"ArrowLeft":case"ArrowUp":a(-1);break;case"ArrowRight":case"ArrowDown":a(1)}})),t.addEventListener("keyup",(t=>{"Enter"===t.code&&"BUTTON"!==t.target.tagName&&o(t)}))}))}))}};e.init(),(new class{#e=document.querySelectorAll(".alert--dismissable");#s='\n        <button class="button button--icon-only">\n            <span class="icon icon-close" aria-label="Close" aria-hidden="true">\n        </button>\n    ';init(){this.#e.forEach((t=>{t.insertAdjacentHTML("afterbegin",this.#s),t.querySelector("button").addEventListener("click",(e=>{e.preventDefault(),t.classList.add("dismissed"),document.querySelector(".dismissed").addEventListener("animationend",(()=>{t.remove()}))}))}))}}).init(),(new class{#a=document.querySelectorAll(".button--icon-only");init(){let t;const e=e=>{t=setTimeout((()=>{this.#a.forEach((t=>{t.classList.remove("tooltip-show")})),e.target.classList.add("tooltip-show")}),300)},s=e=>{clearTimeout(t),e.target.classList.remove("tooltip-show")};this.#a.forEach((t=>{const a=t.getAttribute("aria-label"),n=`\n                <span class="button__tooltip">\n                    ${a}\n                </span>\n            `;if(a){t.insertAdjacentHTML("beforeend",n);const a=t.querySelector(".button__tooltip"),r=()=>{const e=a.offsetWidth/2,s=t.offsetLeft,n=window.innerWidth-(t.offsetLeft+t.offsetWidth);e>s&&a.classList.add("left"),e>n&&a.classList.add("right")};r(),window.addEventListener("resize",r),t.addEventListener("mouseenter",e),t.addEventListener("focusin",e),t.addEventListener("mouseleave",s),t.addEventListener("focusout",s)}}))}}).init(),(new class{#n=document.querySelectorAll("[data-target-toggle]");init(){this.#n.forEach((e=>{e.setAttribute("aria-expanded",!1),e.addEventListener("click",(s=>{const a=s.target.getAttribute("data-target-toggle").replace(/#/,""),n=document.getElementById(a),r=t(n)[0];let i=e.getAttribute("aria-expanded");const o=(t,e)=>{t.setAttribute("aria-expanded",!1),e.classList.remove("shown")};var l;if("true"===i?o(e,n):"false"===i&&(l=n,e.setAttribute("aria-expanded",!0),l.classList.add("shown"),n.hasAttribute("data-focus-first")&&r.focus()),n.addEventListener("keydown",(t=>{switch(t.code){case"Tab":document.activeElement===r&&t.shiftKey&&(t.preventDefault(),e.focus());break;case"Escape":o(e,n)}})),e.hasAttribute("data-target-close")){const t=s.target.getAttribute("data-target-close").replace(/#/,""),e=document.getElementById(t),a=document.querySelector(`[data-target-toggle="#${t}"]`);console.log(`Close target ID: ${a}`),o(a,e)}}))}))}}).init();const s=new class{#r=document.querySelectorAll("form[novalidate]");#i=document.querySelectorAll(".form-entry");#o=document.querySelectorAll(".file-upload");init(){let t=!1;const e=["is-invalid"];this.#r.forEach((e=>{e.addEventListener("submit",(s=>{s.preventDefault(),t=!0;let a=[];e.querySelectorAll(":invalid").forEach((t=>{let e=t.closest(".form-entry"),s=e.querySelector(".form-entry__field__label");e.classList.add("is-invalid");const n=e.querySelector(".form-entry__feedback"),r=e.querySelector(".form-entry__help");let i;r&&(i=r.innerHTML.toString());let o=e.getAttribute("data-error-message"),l=[o,i];var c,d;a.push(l),null===n&&s.insertAdjacentHTML("afterend",(null===(c=o)&&(c="This field is Required"),`\n                <small class="form-entry__feedback">\n                    <span class="icon icon-warn" aria-hidden="true"></span>\n                    <span class="message">\n                        <strong>${c}</strong> ${void 0!==(d=i)?d:""}\n                    </span>\n                </small>\n            `))})),a.length>0&&s.preventDefault();let n=e.querySelector('[class*="alert"], [class*="invalid"]');if(n){n.hasAttribute("data-alert")&&(n.style.display="block");let t=n.offsetTop-16;window.scrollTo({top:t,behavior:"smooth"})}}))})),this.#i.forEach((s=>{const a=s.querySelectorAll(["email","input","select","tel","textarea"]);let n;n=!!s.hasAttribute("data-required"),a.forEach((a=>{const r=s.querySelector(".form-entry__field__input"),i=a.tagName;let o=".form-entry";if("INPUT"===i){const t=a.getAttribute("type");"radio"!==t&&"checkbox"!==t||a.disabled&&a.closest("label").classList.add("disabled")}a.addEventListener("focusin",(function(){this.closest(o).classList.add("active")})),a.addEventListener("focusout",(function(){this.closest(o).classList.remove("active")})),!0===n&&(a.setAttribute("required","true"),a.setAttribute("aria-required",!0)),a.addEventListener("change",(()=>{var s;!0===t&&!0===n&&(function(){return""===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)}((s=a).value)?(t=>{t.closest(".form-entry").classList.add(...e)})(s):(t=>{t.closest(".form-entry").classList.remove(...e)})(s)),""!==a.value?a.closest(".form-entry").classList.add("has-value"):a.closest(".form-entry").classList.remove("has-value")})),r&&r.addEventListener("click",(t=>{let e=t.target.tagName,s=t.target.closest(".form-entry__field__input").querySelector("input");"SPAN"===e&&s.focus()}))}))})),this.#o.forEach((t=>{t.querySelector('input[type="file"]').addEventListener("change",(e=>{const[s]=e.target.files,{name:a,size:n}=s,r=`\n                    <span class="file-upload__data">\n                        <span class="file-name">${a}</span>\n                        <span class="file-size">${(n/1e3).toFixed(2)} kb</span>\n                    </span>\n                `,i=t.querySelector(".file-upload__data");i&&i.remove(),t.insertAdjacentHTML("beforeend",r)}));const e=()=>{t.closest(".form-entry").classList.remove("active")};t.addEventListener("dragenter",(()=>{t.closest(".form-entry").classList.add("active")})),t.addEventListener("dragleave",e),t.addEventListener("dragend",e),t.addEventListener("drop",(()=>{t.closest(".form-entry").classList.remove("active")}))}))}};s.init(),(new class{#l=document.querySelectorAll(".modal");#c=document.querySelectorAll("[data-modal-open]");init(){this.#l.forEach((t=>{const e=t.querySelector(".modal__content");e.setAttribute("role","dialog"),e.setAttribute("aria-modal",!0),t.setAttribute("aria-hidden",!0)})),this.#c.forEach((e=>{e.addEventListener("click",(e=>{const s=e.target.getAttribute("data-modal-open").replace(/#/,"");(e=>{document.querySelector("body").classList.add("modal-open"),e.setAttribute("aria-hidden",!1);const s=document.activeElement,a=e.querySelector(".modal__content");a.setAttribute("tabindex",0),a.focus(),a.setAttribute("tabindex",-1),e.classList.contains("modal--scroll-all")&&(e.scrollTop=0);const n=e.querySelectorAll("[data-modal-close]"),r=t=>{a.contains(t.target)||i()},i=()=>{e.setAttribute("aria-hidden",!0),s.focus(),document.querySelector("body").classList.remove("modal-open"),window.removeEventListener("click",r)},o=t(e),l=o[0],c=o[o.length-1];e.addEventListener("keydown",(t=>{switch(t.code){case"Tab":document.activeElement===c&&(t.shiftKey||(t.preventDefault(),l.focus())),document.activeElement===l&&t.shiftKey&&(t.preventDefault(),c.focus()),document.activeElement===a&&t.shiftKey&&(t.preventDefault(),l.focus());break;case"Escape":i()}})),n.forEach((t=>{t.addEventListener("click",i),t.setAttribute("aria-label","Close Modal Window")})),"true"===e.dataset.modalCloseOutside&&window.addEventListener("click",r)})(document.getElementById(s)),e.stopPropagation()}))}))}}).init(),(new class{#d=document.querySelectorAll('[data-toggle="dropdown"]');init(){this.#d.forEach((t=>{let e=t.closest("li"),s=t.nextElementSibling;t.setAttribute("aria-expanded",!1),t.setAttribute("aria-haspopup",!0),t.addEventListener("click",(e=>{e.preventDefault(),s.classList.toggle("shown");let a=t.getAttribute("aria-expanded");"true"===a?t.setAttribute("aria-expanded",!1):"false"===a&&t.setAttribute("aria-expanded",!0)})),window.addEventListener("click",(a=>{e.contains(a.target)||(s.classList.remove("shown"),t.setAttribute("aria-expanded",!1))}))}))}}).init(),(new class{#u=document.querySelectorAll('[class*="table--stack"]');#f=document.querySelectorAll(".table-scroll");init(){this.#u.forEach((t=>{const e=t.querySelectorAll("thead th"),s=t.querySelectorAll("tbody tr");let a=[];e.forEach((t=>{if(""!==t.textContent){const e=t.textContent.trim();a.push(e)}})),s.forEach((t=>{t.querySelectorAll("td").forEach(((t,e)=>{let s=`\n                        <div class="td-content">\n                            ${t.innerHTML}\n                        </div>\n                    `;t.innerHTML=s,t.setAttribute("data-header",a[e])}))}))}));const t=()=>{this.#f.forEach((t=>{let e=t.querySelector(".table-scroll__container"),s=t.offsetWidth;e.scrollWidth>s?t.setAttribute("data-scroll",!0):t.setAttribute("data-scroll",!1),e.addEventListener("scroll",(()=>{e.scrollLeft>1?e.setAttribute("data-scrolling",!0):e.setAttribute("data-scrolling",!1)}),{passive:!0})}))};t(),window.addEventListener("resize",t)}}).init(),(new class{#b=document.querySelectorAll(".tabs");init(){this.#b.forEach((t=>{const e=t.querySelectorAll('[role="tab"]'),s=t.querySelectorAll('[role="tabpanel"]');e.forEach(((t,a)=>{t.addEventListener("click",(t=>{(t=>{e.forEach((t=>{t.setAttribute("aria-selected","false")})),s.forEach((t=>{t.classList.remove("shown"),t.setAttribute("hidden","")})),t.setAttribute("aria-selected","true");let a=t.getAttribute("aria-controls"),n=document.getElementById(a);n.classList.add("shown"),n.removeAttribute("hidden")})(t.target)})),t.addEventListener("keydown",(t=>{const s=s=>{t.preventDefault();let n=a+s;-1===s&&n<0?e[e.length-1].focus():1===s&&n>=e.length?e[0].focus():e[n].focus()};switch(t.code){case"Home":(t=>{t.preventDefault(),e[0].focus()})(t);break;case"End":(t=>{t.preventDefault(),e[e.length-1].focus()})(t);break;case"ArrowLeft":s(-1);break;case"ArrowRight":s(1)}}))}))}))}}).init()}();