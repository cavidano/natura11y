!function(){"use strict";let e,t=0,i=document.querySelector(":root");const n=n=>{e=document.activeElement,t=window.scrollY,i.style.setProperty("--scroll-position",`-${t}px`),i.classList.add("has-overlay"),n&&s(n)},a=n=>{i.removeAttribute("style"),i.classList.remove("has-overlay"),i.classList.length||i.removeAttribute("class"),window.scrollTo({top:t,behavior:"instant"}),n&&"false"===n.getAttribute("aria-hidden")&&n.setAttribute("aria-hidden",!0),n&&e&&e.focus()},o=function(){return[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(["a[href]","area","button","details","frame","iframe","input","object","summary","textarea","select",'[tabindex]:not([tabindex="-1"])',"video","audio"])].filter((e=>!e.hasAttribute("disabled")))},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=o(e),n=i[0],s=i[i.length-1];t.setAttribute("tabindex","-1"),t.focus(),e.addEventListener("keydown",(t=>{switch(t.code){case"Tab":document.activeElement===s&&(t.shiftKey||(t.preventDefault(),n.focus())),document.activeElement===n&&t.shiftKey&&(t.preventDefault(),s.focus());break;case"Escape":a(e)}}))},r=(e,t,i,n)=>{e instanceof Element||e instanceof Document?"string"==typeof t&&t?"string"==typeof i&&i?"function"==typeof n?e.addEventListener(t,(e=>{(e.target.matches(i)||e.target.closest(i))&&n(e)})):console.error("Invalid or missing handler function provided to delegateEvent."):console.error("Invalid or missing selector provided to delegateEvent."):console.error("Invalid or missing event type provided to delegateEvent."):console.error("Invalid parent element provided to delegateEvent.")};class l{#e=document.querySelectorAll(".accordion");#t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o(e).forEach((e=>{e.setAttribute("tabindex",t?0:-1)}))}#i(e,t,i,n){e.preventDefault(),e.stopPropagation(),n.forEach((e=>{e.classList.remove("show"),e!==i&&(e.classList.remove("shown"),e.previousElementSibling.setAttribute("aria-expanded",!1),e.setAttribute("aria-hidden",!0),this.#t(e,!1))})),i.classList.toggle("shown");const a="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!a),i.setAttribute("aria-hidden",a),this.#t(i,!a);const o=new Event("accTrigger",{bubbles:!0});document.dispatchEvent(o)}#n(e,t,i){const n=n=>{e.preventDefault();let a=i+n;-1===n&&a<0?t[t.length-1].focus():1===n&&a>=t.length?t[0].focus():t[a].focus()};switch(e.code){case"ArrowUp":n(-1);break;case"ArrowDown":n(1)}}init(){this.#e.forEach((e=>{const t=e.querySelectorAll(':scope > [data-accordion="button"]'),i=e.querySelectorAll(':scope > [data-accordion="panel"]');t.forEach(((n,a)=>{const o=n.nextElementSibling,s="true"===n.getAttribute("aria-expanded");n.setAttribute("tabindex",0),o.classList.toggle("show",s),this.#t(o,s),r(e,"click",'[data-accordion="button"]',(e=>{e.target===n&&this.#i(e,n,o,i)})),r(e,"keydown",'[data-accordion="button"]',(e=>{e.target===n&&this.#n(e,t,a)})),r(e,"keyup",'[data-accordion="button"]',(e=>{"Enter"===e.code&&this.#i(e,n,o,i)}))}))}))}}class c{#a='\n    <button class="button button--icon-only" aria-label="Close alert" aria-describedby="alert-description">\n        <span class="icon icon-close" aria-hidden="true"></span>\n    </button>\n  ';#o=e=>{e.preventDefault();const t=e.target.closest(".alert--dismissable");t&&(t.classList.add("dismissed"),t.addEventListener("animationend",(()=>{t.remove()})))};#s=e=>{e.insertAdjacentHTML("afterbegin",this.#a),e.setAttribute("role","alert"),e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true")};init=()=>{document.querySelectorAll(".alert--dismissable").forEach((e=>{this.#s(e)})),r(document,"click",".alert--dismissable .button--icon-only",this.#o)}}class d{#r=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.setAttribute("aria-expanded","false"),t.classList.remove("shown"),i&&e.focus()};#l=(()=>function(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.setAttribute("aria-expanded","true"),t.classList.add("shown"),s(t),i&&i.focus()})();#c=(e,t,i)=>n=>{switch(n.code){case"Tab":document.activeElement===i&&n.shiftKey&&(n.preventDefault(),e.focus());break;case"Escape":this.#r(e,t,!0)}};#d=e=>{e.preventDefault();const t=e.target.closest('[data-toggle="collapse"]');if(!t)return;const i=t.getAttribute("aria-controls")?.replace(/^#/,""),n=document.getElementById(i);if(!n)return void console.error(`Collapse target with ID "${i}" not found.`);const a=o(n)[0];"true"===t.getAttribute("aria-expanded")||n.classList.contains("shown")?this.#r(t,n):this.#l(t,n,n.hasAttribute("data-focus-first")?a:null);const s=this.#c(t,n,a);if(n.addEventListener("keydown",s),n.addEventListener("transitionend",(()=>{n.classList.contains("shown")||n.removeEventListener("keydown",s)})),t.hasAttribute("data-target-close")){const e=t.getAttribute("data-target-close")?.replace(/^#/,""),i=document.getElementById(e),n=document.querySelector(`[aria-controls="${e}"]`);i&&n?this.#r(n,i):console.error(`Could not find close target or close target button for ID ${e}`)}};init=()=>{r(document,"click",'[data-toggle="collapse"]',this.#d)}}const h=e=>!e?.trim(),u=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["is-invalid"];e.closest(".form-entry").classList.toggle(i[0],!t),e.setAttribute("aria-invalid",!t)};class g{#h=document.querySelectorAll(".form-entry");#u=["is-invalid"];#g=!1;#b(e){const t=h(e.value);return u(e,!t,this.#u),t}#p(e,t){this.#g&&t&&this.#b(e),e.closest(".form-entry").classList.toggle("has-value",""!==e.value)}#m(e){e.addEventListener("input",(()=>{this.#b(e)}))}#f(e,t){const i=e.closest(".form-entry").querySelector(".form-entry__field__input");t&&(e.setAttribute("required","true"),e.setAttribute("aria-required","true")),this.#m(e),e.addEventListener("change",(()=>this.#p(e,t))),i&&i.addEventListener("click",this.#v)}#v(e){const t=e.target.closest(".form-entry__field__input").querySelector("input");"SPAN"===e.target.tagName&&t.focus()}init(){this.#h.forEach((e=>{const t=e.hasAttribute("data-required");e.querySelectorAll("input, select, textarea").forEach((e=>this.#f(e,t))),r(e,"focusin","input, select, textarea",(e=>{this.#y(e,!0)})),r(e,"focusout","input, select, textarea",(e=>{this.#y(e,!1)}))}))}#y(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.target.closest(".form-entry").classList.toggle("is-focused",t)}}class b{#L=document.querySelectorAll("form[novalidate]");#u=["is-invalid"];#g=!1;#x(e,t){e.forEach((e=>{const i=e.closest(".form-entry"),n=i.querySelector(".form-entry__field__label"),a=i.getAttribute("data-error-message")||"This field is required",o=i.querySelector(".form-entry__help")?.innerHTML||"";t.push([a,o]),i.querySelector(".form-entry__feedback")||n.insertAdjacentHTML("afterend",this.#E(a,o))}))}#E(e,t){return`\n      <small class="form-entry__feedback" role="alert">\n        <span class="icon icon-warn" aria-hidden="true"></span>\n        <span class="message">\n          <strong>${e}</strong> ${t||""}\n        </span>\n      </small>\n    `}#A(e){const t=e.querySelector(".is-invalid, [data-alert]");t&&window.scrollTo({top:t.offsetTop-16,behavior:"smooth"})}#b(e){const t=h(e.value);return u(e,!t,this.#u),t}#w(e){e.addEventListener("submit",(t=>{t.preventDefault(),this.#g=!0;const i=[];e.querySelectorAll("input, select, textarea").forEach((e=>{e.hasAttribute("required")&&this.#b(e)}));const n=e.querySelectorAll(":invalid");this.#x(n,i),i.length>0&&(t.preventDefault(),this.#A(e))}))}init(){this.#L.forEach((e=>this.#w(e)))}}class p{#k=document.querySelectorAll(".file-upload");#S(e){return t=>{const[i]=t.target.files;if(!i)return;const{name:n,size:a}=i,o=a>=1e6?`${(a/1e6).toFixed(2)} MB`:`${(a/1e3).toFixed(2)} KB`,s=e.querySelector(".file-upload__data");s&&s.remove(),e.insertAdjacentHTML("beforeend",`\n        <span class="file-upload__data">\n          <span class="file-name">${n}</span>\n          <span class="file-size">${o}</span>\n        </span>\n      `)}}dragOver(e){e.preventDefault(),e.target.closest(".form-entry").classList.add("is-focused")}dragOff(e){e.target.closest(".form-entry").classList.remove("is-focused")}dropped(e){e.preventDefault(),e.target.closest(".form-entry").classList.remove("is-focused")}#T(e){e.querySelector('input[type="file"]').addEventListener("change",this.#S(e)),e.addEventListener("dragenter",this.dragOver.bind(this)),e.addEventListener("dragleave",this.dragOff.bind(this)),e.addEventListener("dragend",this.dragOff.bind(this)),e.addEventListener("drop",this.dropped.bind(this))}init(){this.#k.forEach((e=>this.#T(e)))}}class m{#C=document.querySelectorAll("[data-lightbox]");#_='\n    <figure class="lightbox__container" aria-live="polite" aria-atomic="true">\n      <div class="lightbox__media"></div>           \n      <figcaption class="lightbox__caption"></figcaption>\n    </figure>\n    <div class="lightbox__controls">\n      <button class="button button--icon-only" data-lightbox-previous aria-label="Previous">\n        <span class="icon icon-arrow-left" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-next aria-label="Next">\n        <span class="icon icon-arrow-right" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-close aria-label="Close">\n        <span class="icon icon-close" aria-hidden="true"></span>\n      </button>\n    </div>\n  ';#q='\n    <video controls tabindex="0">\n      <source type="video/mp4">\n    </video>\n  ';#I='\n    <iframe\n      frameborder="0"\n      allow="autoplay; fullscreen;"\n      allowfullscreen\n      controls\n      tabindex="0"\n    ></iframe>\n  ';#D='\n    <div class="lightbox__media__loader">\n      <span class="icon icon-loading icon--rotate" aria-hidden="true"></span>\n    </div>\n    <div class="lightbox__media__error" style="display: none;">\n      <span class="icon icon-warn" aria-hidden="true"></span>\n      <p>Failed to load content. Please try again later.</p>\n    </div>\n  ';#M='<img src="https://source.unsplash.com/1600x900"/>';#P=[];#H=e=>t=>{document.querySelector(".lightbox")||(t.preventDefault(),this.lightbox=this.#O(),this.lightbox.setAttribute("aria-hidden",!1),this.currentLB=e,this.#$(e),n(this.lightbox))};#F=e=>{if(e.stopPropagation(),e.target!==e.currentTarget&&"click"===e.type)return;const t=this.lightbox.querySelector("[data-lightbox-previous]"),i=this.lightbox.querySelector("[data-lightbox-next]"),n=this.lightbox.querySelector("[data-lightbox-close]");t.removeEventListener("click",this.#B),i.removeEventListener("click",this.#B),n.removeEventListener("click",this.#F),a(this.lightbox),this.lightbox.parentElement.removeChild(this.lightbox),window.removeEventListener("keyup",this.#K)};#N=(()=>{var e=this;return function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e.lightbox.querySelector(".lightbox__caption").style.display=t?"block":"none"}})();#B=e=>{if(e.preventDefault(),e.target.hasAttribute("data-lightbox-previous"))this.#U(-1);else{if(!e.target.hasAttribute("data-lightbox-next"))return;this.#U(1)}};#K=e=>{if(e.preventDefault(),!(this.#P.length<=1)||"ArrowLeft"!==e.code&&"ArrowRight"!==e.code)switch(e.code){case"ArrowLeft":this.#U(-1),this.lightbox.querySelector("[data-lightbox-previous]").focus();break;case"ArrowRight":this.#U(1),this.lightbox.querySelector("[data-lightbox-next]").focus();break;case"Escape":this.#F(e);break;default:return}};#V=e=>{e.setAttribute("tabindex",0),e.addEventListener("focus",(t=>{t.preventDefault(),e.children[0].focus(),o(e.children[0])}))};#U(e){this.currentLB+=e,this.currentLB<0?this.currentLB=this.#P.length-1:this.currentLB>=this.#P.length&&(this.currentLB=0),this.#$(this.currentLB)}#$(e){const t=this.lightbox.querySelector(".lightbox__media"),i=this.lightbox.querySelector(".lightbox__caption");let n;t.innerHTML="";const{lbType:a,lbSrc:o,lbAlt:r,lbCaption:l}=this.#P[e],c=null!==l;switch(this.#N(c),a){case"image":n=this.#R(t,o);break;case"video":n=this.#z(t,o)}this.#V(t),c&&(i.innerHTML=l),s(this.lightbox)}#R=(e,t)=>{e.hasAttribute("style")&&e.removeAttribute("style"),e.innerHTML=this.#M;const i=this.#W();e.appendChild(i);const n=e.querySelector("img");return n.src=t,this.#j(n,i),n};#z=(e,t)=>{const i=/youtube/i.test(t),n=/vimeo/i.test(t);let a;if(i||n)e.innerHTML=this.#I,a=e.querySelector("iframe"),a.src=t;else{e.innerHTML=this.#q;const i=this.#W();e.appendChild(i),a=e.querySelector("source");const n=e.querySelector("video");n.addEventListener("loadedmetadata",(()=>{let t=n.videoWidth,i=n.videoHeight;e.style.maxWidth=`${t}px`,e.style.aspectRatio=`${t} / ${i}`})),this.#j(a,i),a.src=t}return a};#W=()=>{const e=document.createElement("div");return e.className="lightbox__media__loader",e.innerHTML=this.#D,e};#j=(e,t)=>{const i="SOURCE"===e.nodeName?"loadeddata":"load";e.closest("SOURCE"===e.nodeName?"video":"img").addEventListener(i,(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),null!==this.#P[this.currentLB].lbCaption&&this.#N(!0)})),e.onerror=()=>{const i=t.querySelector(".lightbox__media__loader"),n=t.querySelector(".lightbox__media__error");e.style.display="none",this.#N(!1),i.style.display="none",n.style.display="block"}};#O=()=>{const e=document.createElement("div");e.classList.add("lightbox"),e.setAttribute("aria-hidden",!0),e.setAttribute("aria-live","polite"),e.innerHTML=this.#_,document.body.appendChild(e);const t=e.querySelector("[data-lightbox-previous]"),i=e.querySelector("[data-lightbox-next]"),n=e.querySelector("[data-lightbox-close]");return this.#P.length<=1&&(t.setAttribute("disabled",!0),i.setAttribute("disabled",!0),t.style.display="none",i.style.display="none"),n.addEventListener("click",this.#F),t.addEventListener("click",this.#B),i.addEventListener("click",this.#B),window.addEventListener("keyup",this.#K),e};#G=e=>{let t=null,i="";if(null!==e.querySelector("img")){const n=e.querySelector("img");t=n.src||null,i=n.alt||""}const n=e.getAttribute("data-lightbox")||"image",a=e.getAttribute("data-lightbox-src")||t,o=e.getAttribute("data-lightbox-caption")||null,s=e.getAttribute("data-lightbox-alt")||i;return null===a?(console.error("No source provided for lightbox"),null):{lbType:n,lbSrc:a,lbCaption:o,lbAlt:s}};#Y=()=>{this.#C.forEach((e=>{this.#P.push(this.#G(e))}))};#J=()=>{r(document,"click","[data-lightbox]",(e=>{const t=e.target.closest("[data-lightbox]"),i=Array.from(this.#C).indexOf(t);-1!==i&&this.#H(i)(e)}))};#Q=()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting){const i=t.target,n=i.dataset.lightboxSrc||i.src;if(!n)return;e.unobserve(i);const a=new Image;a.onload=()=>{document.body.appendChild(a)},a.onerror=()=>{console.error(`Failed to load image: ${n}`)},a.src=n,a.style.display="none",this.#P[Number(i.dataset.index)].hiddenImage=a}}))}),{threshold:.25});Array.from(this.#C).filter((e=>"image"===e.getAttribute("data-lightbox"))).forEach(((t,i)=>{const n=t.querySelector("img");n&&(n.dataset.index=i,e.observe(n))}))};init=()=>{this.#Y(),this.#J(),this.#Q()}}class f{#X=new Map;#Z=this.#ee.bind(this);#te(e,t){const i=i=>{e.querySelector(".modal__content").contains(i.target)||t(i)};window.addEventListener("pointerdown",i),this.#X.set(e,i)}#ie(e){const t=this.#X.get(e);t&&(window.removeEventListener("pointerdown",t),this.#X.delete(e))}#ee(e){"Escape"===e.code&&document.querySelectorAll(".modal.shown").forEach((e=>this.#ne(e)))}#ne(e){e.classList.remove("shown"),a(e),this.#ie(e),window.removeEventListener("keydown",this.#Z)}openModal(e){if(!e)return void console.warn("Modal target not found.");e.classList.add("shown"),e.focus();const t=e.querySelector(".modal__content");if(t){if(n(t),e.classList.contains("modal--scroll-all")&&(e.scrollTop=0),e.querySelectorAll("[data-modal-close]").forEach((t=>{t.addEventListener("click",(()=>this.#ne(e))),t.setAttribute("aria-label","Close Modal Window")})),"true"===e.dataset.modalCloseOutside){const t=()=>this.#ne(e);this.#te(e,t)}window.addEventListener("keydown",this.#Z)}else console.warn("Modal content not found.")}init(){r(document,"click",'[data-modal="open"]',(e=>{const t=e.target.getAttribute("aria-controls")?.replace(/^#/,""),i=document.getElementById(t);this.openModal(i)}))}}class v{#ae=!1;#oe(e,t){this.#ae=!0,e.setAttribute("aria-expanded","true"),t.classList.add("shown"),t.classList.contains("mega-menu")&&n()}#se(e,t){this.#ae=this.#re(),t.classList.remove("shown"),e.setAttribute("aria-expanded","false"),t.classList.contains("mega-menu")&&a()}#re(){return Array.from(document.querySelectorAll('[data-toggle="dropdown"]')).some((e=>{const t=document.getElementById(e.getAttribute("aria-controls"));return t&&t.classList.contains("shown")}))}#le=e=>{this.#ae&&document.querySelectorAll('[data-toggle="dropdown"]').forEach((t=>{const i=document.getElementById(t.getAttribute("aria-controls"));i&&i.classList.contains("shown")&&!i.contains(e.target)&&!t.contains(e.target)&&this.#se(t,i)}))};#ce=e=>{"Escape"===e.key&&this.#ae&&(document.querySelectorAll('[data-toggle="dropdown"]').forEach((e=>{const t=document.getElementById(e.getAttribute("aria-controls"));t.classList.contains("shown")&&(this.#se(e,t),e.focus())})),this.#ae=!1)};#de=(e,t)=>i=>{const n=i.relatedTarget;!n||t.contains(n)||e.contains(n)||this.#se(e,t)};init(){r(document,"click",'[data-toggle="dropdown"]',(e=>{const t=e.target,i=t.getAttribute("aria-controls"),n=document.getElementById(i);n?n.classList.contains("shown")?this.#se(t,n):this.#oe(t,n):console.warn(`No dropdown menu found for ${i}`)})),document.querySelectorAll('[data-toggle="dropdown"]').forEach((e=>{const t=e.getAttribute("aria-controls"),i=document.getElementById(t);if(!i)return;const n=this.#de(e,i);e.addEventListener("focusout",n),i.addEventListener("focusout",n)})),window.addEventListener("click",this.#le),document.addEventListener("keydown",this.#ce)}}class y{#he=document.querySelectorAll('[class*="table--stack"]');#ue=document.querySelectorAll(".table-scroll");#ge(e){const t=e.querySelectorAll("thead th"),i=e.querySelectorAll("tbody tr");let n=[];t.forEach(((e,t)=>{if(""!==e.textContent){const i=e.textContent.trim();n.push({title:i,id:`header-${t}`}),e.setAttribute("id",`header-${t}`)}})),i.forEach((e=>{e.querySelectorAll("td").forEach(((e,t)=>{e.innerHTML=this.#be(e.innerHTML),e.setAttribute("data-header",n[t].title),e.setAttribute("aria-labelledby",n[t].id)}))}))}#be(e){return`\n      <div class="td-content">\n        ${e}\n      </div>\n    `}#pe(){this.#ue.forEach((e=>{let t=e.querySelector(".table-scroll__container"),i=e.offsetWidth;t.scrollWidth>i?e.setAttribute("data-scroll",!0):e.setAttribute("data-scroll",!1),t.addEventListener("scroll",(()=>{t.scrollLeft>1?t.setAttribute("data-scrolling",!0):t.setAttribute("data-scrolling",!1)}),{passive:!0})}))}init(){this.#he.forEach((e=>{this.#ge(e)})),this.#pe(),window.addEventListener("resize",this.#pe.bind(this))}}class L{#me=document.querySelectorAll(".tabs");#fe(e,t){e.forEach((e=>{e.setAttribute("aria-selected","false"),e.setAttribute("tabindex","-1")})),t.forEach((e=>{e.classList.remove("shown"),e.setAttribute("aria-hidden","true")}))}#ve(e,t,i){this.#fe(t,i),e.setAttribute("aria-selected","true"),e.removeAttribute("tabindex");const n=e.getAttribute("aria-controls"),a=document.getElementById(n);a.classList.add("shown"),a.setAttribute("aria-hidden","false")}init(){this.#me.forEach((e=>{const t=e.querySelectorAll('[role="tab"]'),i=e.querySelectorAll('[role="tabpanel"]');r(e,"click",'[role="tab"]',(e=>{const n=e.target.closest('[role="tab"]');this.#ve(n,t,i)})),r(e,"keydown",'[role="tab"]',(e=>{const n=e.target.closest('[role="tab"]'),a=Array.from(t).indexOf(n);switch(e.code){case"Enter":case"Space":e.preventDefault(),this.#ve(n,t,i);break;case"ArrowLeft":case"ArrowRight":case"Home":case"End":((e,i,n,a)=>{e.preventDefault();let o=i;switch(e.code){case"ArrowLeft":o=i-1<0?n.length-1:i-1;break;case"ArrowRight":o=i+1>=n.length?0:i+1;break;case"Home":o=0;break;case"End":o=n.length-1;break;default:return}(e=>{t[e].focus()})(o)})(e,a,t)}})),this.#ve(t[0],t,i)}))}}class x{#ye=document.querySelectorAll(".track");#Le=null;#xe(e,t){return e.querySelector(t)}#Ee(e){return parseInt(getComputedStyle(e).getPropertyValue("--visible-panels"),10)||1}#Ae(e,t){e.classList.toggle("hide-controls",t<=1)}#we(e){const t=this.#xe(e,".track__panels"),i=this.#xe(e,"[data-track-pagination]"),n=this.#Ee(t),a=e.getAttribute("data-track-id"),o=[];let s=[];Array.from(t.children).forEach(((e,i)=>{const r=`${a}-panel-${i}`;e.setAttribute("id",r),s.push(e),s.length!==n&&i!==t.children.length-1||(o.push(s),s=[])})),e.pages=o,e.currentPageIndex=0,i&&(i.innerHTML=o.map(((e,t)=>`\n                <li>\n                    <button\n                        type="button"\n                        data-page-index="${t}"\n                        aria-label="Go To Page ${t+1}"\n                        ${0===t?'aria-current="true"':""}\n                    >\n                        <span class="pagination__number">\n                            ${t+1}\n                        </span>\n                    </button>\n                </li>\n            `)).join("")),this.#Ae(e,o.length),this.#ke(e,0)}#Se(e,t){this.#xe(e,"[data-track-pagination]").querySelectorAll("[data-page-index]").forEach(((e,i)=>{e.classList.toggle("active",i===t),e.setAttribute("aria-current",i===t?"true":"false")})),this.#Te(e,t,e.pages.length)}#ke(e,t){e.pages.forEach(((e,i)=>{e.forEach((e=>{const n=o(e),a=i===t;e.setAttribute("aria-hidden",a?"false":"true"),n.forEach((e=>{e.setAttribute("tabindex",a?"0":"-1")}))}))}))}#Ce(e,t){const i=this.#xe(e,".track__panels"),n=e.pages[t][0];e.currentPageIndex=t,i.scrollTo({left:n.offsetLeft,behavior:"smooth"}),clearTimeout(this.#Le),this.#Le=setTimeout((()=>{this.#Se(e,t)}),300)}#_e(e){const t=e.currentPageIndex<e.pages.length-1?e.currentPageIndex+1:0;this.#Ce(e,t)}#qe(e){const t=e.currentPageIndex>0?e.currentPageIndex-1:e.pages.length-1;this.#Ce(e,t)}#Ie(e){const t=getComputedStyle(e);return parseFloat(t.paddingLeft)||0}#De(e,t){const i=this.#xe(e,".track__panels"),n=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting){const n=t.target.id,a=e.pages.findIndex((e=>e.some((e=>e.id===n)))),o=()=>{e.currentPageIndex=a,this.#Se(e,a)};-1!==a&&("onscrollend"in window?i.onscrollend=o:i.onscroll=()=>{clearTimeout(this.#Le),this.#Le=setTimeout(o,250)})}}))}),{root:i,threshold:.5,rootMargin:`0px -${.5*t}px`});e.pages.forEach((e=>{n.observe(e[0])})),e.pageObserver=n}#Me(e,t){const i=this.#xe(e,".track__panels"),n=new IntersectionObserver((e=>{e.forEach((e=>{const t=o(e.target),i=e.isIntersecting;e.target.setAttribute("aria-hidden",i?"false":"true"),t.forEach((e=>{e.setAttribute("tabindex",i?"0":"-1")}))}))}),{root:i,threshold:.5,rootMargin:`0px -${t}px`});e.pages.flat().forEach((e=>{n.observe(e)})),e.tabbingObserver=n}#Pe(e){r(e,"keydown","[data-track-prev], [data-track-next]",(t=>{"ArrowRight"===t.code&&t.target.matches("[data-track-next]")?this.#_e(e):"ArrowLeft"===t.code&&t.target.matches("[data-track-prev]")&&this.#qe(e)}))}#He(e){const t=this.#xe(e,".track__panels"),i=this.#xe(e,"[data-track-pagination]");t.scrollLeft=0,i&&(i.innerHTML=""),e.pageObserver&&e.pageObserver.disconnect(),e.tabbingObserver&&e.tabbingObserver.disconnect(),e.currentPageIndex=0;const n=this.#Ie(t);this.#we(e),this.#Oe(e),this.#De(e,n),this.#Me(e,n),this.#Pe(e)}#J(e){r(e,"click","[data-page-index]",(t=>{const i=t.target.closest("[data-page-index]");if(i){const t=parseInt(i.getAttribute("data-page-index"));this.#Ce(e,t)}})),r(e,"click","[data-track-prev]",(()=>{const t=e.currentPageIndex>0?e.currentPageIndex-1:e.pages.length-1;this.#Ce(e,t)})),r(e,"click","[data-track-next]",(()=>{const t=e.currentPageIndex<e.pages.length-1?e.currentPageIndex+1:0;this.#Ce(e,t)})),window.addEventListener("resize",(()=>{this.#He(e)}))}#Oe(e){let t=this.#xe(e,".liveregion");t||(t=document.createElement("div"),t.className="liveregion screen-reader-only",t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic","true"),e.appendChild(t))}#Te(e,t,i){const n=this.#xe(e,".liveregion");n&&(n.textContent=`Page ${t+1} of ${i}`)}init(){this.#ye.forEach(((e,t)=>{e.setAttribute("data-track-id",`track-${t}`),this.#He(e),this.#J(e)}))}destroy(e){["pageObserver","tabbingObserver"].forEach((t=>{e[t]&&e[t].disconnect()})),clearTimeout(this.#Le)}}document.addEventListener("DOMContentLoaded",(()=>{(new l).init(),(new c).init(),(new d).init(),(new g).init(),(new b).init(),(new p).init(),(new m).init(),(new f).init(),(new v).init(),(new y).init(),(new L).init(),(new x).init()}))}();