!function(){"use strict";let e,t=0,i=document.querySelector(":root");const s=s=>{e=document.activeElement,t=window.scrollY,i.style.setProperty("--scroll-position",`-${t}px`),i.classList.add("has-overlay"),s&&o(s)},n=s=>{i.removeAttribute("style"),i.classList.remove("has-overlay"),i.classList.length||i.removeAttribute("class"),window.scrollTo({top:t,behavior:"instant"}),s&&"false"===s.getAttribute("aria-hidden")&&s.setAttribute("aria-hidden",!0),s&&e&&e.focus()},a=function(){return[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(["a[href]","area","button","details","frame","iframe","input","object","summary","textarea","select",'[tabindex]:not([tabindex="-1"])',"video","audio"])].filter((e=>!e.hasAttribute("disabled")))},o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=a(e),s=i[0],o=i[i.length-1];t.setAttribute("tabindex","-1"),t.focus(),e.addEventListener("keydown",(t=>{switch(t.code){case"Tab":document.activeElement===o&&(t.shiftKey||(t.preventDefault(),s.focus())),document.activeElement===s&&t.shiftKey&&(t.preventDefault(),o.focus());break;case"Escape":n(e)}}))};class r{#e=document.querySelectorAll(".accordion");#t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a(e).forEach((e=>{e.setAttribute("tabindex",t?0:-1)}))}#i=(e,t,i)=>s=>{s.preventDefault(),s.stopPropagation();for(const e of i)e.classList.remove("show"),e!==t&&(e.classList.remove("shown"),e.style.maxHeight=null,e.previousElementSibling.setAttribute("aria-expanded",!1),e.setAttribute("aria-hidden",!0),this.#t(e,!1));t.classList.toggle("shown");let n=e.getAttribute("aria-expanded");"true"===n?(e.setAttribute("aria-expanded",!1),t.setAttribute("aria-hidden",!0),this.#t(t,!1)):"false"===n&&(e.setAttribute("aria-expanded",!0),t.setAttribute("aria-hidden",!1),this.#t(t,!0)),t.style.maxHeight?t.style.maxHeight=null:(t.style.maxHeight=t.scrollHeight+"px",t.setAttribute("aria-hidden",!1));let a=new Event("accTrigger",{bubbles:!0});document.dispatchEvent(a)};#s=(e,t,i)=>e=>{const s=s=>{e.preventDefault();let n=i+s;-1===s&&n<0?t[t.length-1].focus():1===s&&n>=t.length?t[0].focus():t[n].focus()};switch(e.code){case"ArrowLeft":case"ArrowUp":s(-1);break;case"ArrowRight":case"ArrowDown":s(1)}};#n=(e,t,i)=>s=>{"Enter"===s.code&&"BUTTON"!==s.target.tagName&&this.#i(e,t,i)(s)};init(){this.#e.forEach((e=>{const t=Array.from(e.querySelectorAll(':scope > [data-accordion="button"]')),i=e.querySelectorAll(':scope > [data-accordion="panel"]');e.addEventListener("click",(e=>{const s=e.target.closest('[data-accordion="button"]');if(!s)return;if(-1===t.indexOf(s))return;const n=s.nextElementSibling;this.#i(s,n,i)(e)})),e.addEventListener("keydown",(e=>{const i=e.target.closest('[data-accordion="button"]');if(!i)return;const s=t.indexOf(i);-1!==s&&this.#s(i,t,s)(e)})),e.addEventListener("keyup",(e=>{const s=e.target.closest('[data-accordion="button"]');if(!s)return;t.indexOf(s);const n=s.nextElementSibling;this.#n(s,n,i)(e)})),t.forEach(((e,t)=>{const i=e.nextElementSibling;let s=e.getAttribute("aria-expanded");e.setAttribute("tabindex",0),"true"===s?(i.style.maxHeight=i.scrollHeight+"px",i.classList.add("show"),this.#t(i,!0)):(e.setAttribute("aria-expanded",!1),i.style.maxHeight=null,i.setAttribute("aria-hidden",!0),this.#t(i,!1))}))}))}}const l=(e,t,i,s)=>{e instanceof Element||e instanceof Document?"string"==typeof t&&t?"string"==typeof i&&i?"function"==typeof s?e.addEventListener(t,(e=>{(e.target.matches(i)||e.target.closest(i))&&s(e)})):console.error("Invalid or missing handler function provided to delegateEvent."):console.error("Invalid or missing selector provided to delegateEvent."):console.error("Invalid or missing event type provided to delegateEvent."):console.error("Invalid parent element provided to delegateEvent.")};class d{#a='\n    <button class="button button--icon-only" aria-label="Close alert" aria-describedby="alert-description">\n        <span class="icon icon-close" aria-hidden="true"></span>\n    </button>\n  ';#o=e=>{e.preventDefault();const t=e.target.closest(".alert--dismissable");t&&(t.classList.add("dismissed"),t.addEventListener("animationend",(()=>{t.remove()})))};#r=e=>{e.insertAdjacentHTML("afterbegin",this.#a),e.setAttribute("role","alert"),e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true")};init=()=>{document.querySelectorAll(".alert--dismissable").forEach((e=>{this.#r(e)})),l(document,"click",".alert--dismissable .button--icon-only",this.#o)}}class c{#l=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.setAttribute("aria-expanded","false"),t.classList.remove("shown"),i&&e.focus()};#d=(()=>function(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.setAttribute("aria-expanded","true"),t.classList.add("shown"),o(t),i&&(console.log(i),i.focus())})();#s=(e,t,i)=>s=>{switch(s.code){case"Tab":document.activeElement===i&&s.shiftKey&&(s.preventDefault(),e.focus());break;case"Escape":this.#l(e,t,!0)}};#c=e=>{e.preventDefault();const t=e.target.closest('[data-toggle="collapse"]');if(!t)return;const i=t.getAttribute("aria-controls")?.replace(/#/,""),s=document.getElementById(i);if(!s)return;const n=a(s)[0],o=t.getAttribute("aria-expanded");if("true"===o?this.#l(t,s):"false"===o&&this.#d(t,s,s.hasAttribute("data-focus-first")?n:null),s.addEventListener("keydown",this.#s(t,s,n)),t.hasAttribute("data-target-close")){const e=t.getAttribute("data-target-close")?.replace(/#/,""),i=document.getElementById(e),s=document.querySelector(`[aria-controls="#${e}"]`);i&&s?this.#l(s,i):console.error(`Could not find close target or close target button for ID ${e}`)}};init=()=>{l(document,"click",'[data-toggle="collapse"]',this.#c)}}class h{#h=document.querySelectorAll(".form-entry");#u=["is-invalid"];#g=!1;#b(){return""===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)}#p(e){e.closest(".form-entry").classList.add(...this.#u),e.setAttribute("aria-invalid","true")}#m(e){e.closest(".form-entry").classList.remove(...this.#u),e.removeAttribute("aria-invalid")}#f(e){return this.#b(e.value)?(this.#p(e),!0):(this.#m(e),!1)}#v(e){return t=>{t.target.closest(e).classList.add("active")}}#y(e){return t=>{t.target.closest(e).classList.remove("active")}}#L(e,t){this.#g&&t&&this.#f(e),""!==e.value?e.closest(".form-entry").classList.add("has-value"):e.closest(".form-entry").classList.remove("has-value")}#x(e){const t=e.querySelectorAll(["input","select","textarea"].join(",")),i=e.hasAttribute("data-required");t.forEach((e=>this.#E(e,i)))}#A(e){const t=e.target.tagName,i=e.target.closest(".form-entry__field__input").querySelector("input");"SPAN"===t&&i.focus()}#E(e,t){const i=e.closest(".form-entry").querySelector(".form-entry__field__input"),s=".form-entry";l(document,"focusin",".form-entry input, .form-entry select, .form-entry textarea",this.#v(s)),l(document,"focusout",".form-entry input, .form-entry select, .form-entry textarea",this.#y(s)),t&&(e.setAttribute("required","true"),e.setAttribute("aria-required","true")),e.addEventListener("change",(()=>this.#L(e,t))),i&&i.addEventListener("click",this.#A)}init(){this.#h.forEach((e=>this.#x(e)))}}class u{#w=document.querySelectorAll("form[novalidate]");#u=["is-invalid"];#g=!1;#b(){return""===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)}#p(e){e.closest(".form-entry").classList.add(...this.#u),e.setAttribute("aria-invalid","true")}#m(e){e.closest(".form-entry").classList.remove(...this.#u),e.removeAttribute("aria-invalid")}#f(e){return this.#b(e.value)?(this.#p(e),!0):(this.#m(e),!1)}#_(e,t){return null===e&&(e="This field is Required"),`\n      <small class="form-entry__feedback" role="alert">\n        <span class="icon icon-warn" aria-hidden="true"></span>\n        <span class="message">\n          <strong>${e}</strong> ${void 0!==t?t:""}\n        </span>\n      </small>\n    `}#S(e,t){e.forEach((e=>{const i=e.closest(".form-entry"),s=i.querySelector(".form-entry__field__label");i.classList.add("is-invalid"),e.setAttribute("aria-describedby","error-message");const n=i.querySelector(".form-entry__feedback"),a=i.querySelector(".form-entry__help");let o;a&&(o=a.innerHTML.toString());const r=i.getAttribute("data-error-message"),l=[r,o];t.push(l),null===n&&s.insertAdjacentHTML("afterend",this.#_(r,o))}))}#k(e){const t=e.querySelector('[class*="alert"], [class*="invalid"]');if(t){t.hasAttribute("data-alert")&&(t.style.display="block");const e=t.offsetTop-16;window.scrollTo({top:e,behavior:"smooth"})}}#C(e){e.addEventListener("submit",(t=>{t.preventDefault(),this.#g=!0;const i=[],s=e.querySelectorAll("input, select, textarea");s.forEach((e=>{e.addEventListener("input",(()=>this.#f(e)))})),s.forEach((e=>{this.#f(e)}));const n=e.querySelectorAll(":invalid");this.#S(n,i),i.length>0&&t.preventDefault(),this.#k(e)}))}init(){this.#w.forEach((e=>this.#C(e)))}}class g{#T=document.querySelectorAll(".file-upload");#q(e){return function(t){const[i]=t.target.files,{name:s,size:n}=i,a=`\n        <span class="file-upload__data">\n          <span class="file-name">${s}</span>\n          <span class="file-size">${(n/1e3).toFixed(2)} kb</span>\n        </span>\n      `,o=e.querySelector(".file-upload__data");o&&o.remove(),e.insertAdjacentHTML("beforeend",a)}}dragOver(e){e.target.closest(".form-entry").classList.add("active")}dragOff(e){e.target.closest(".form-entry").classList.remove("active")}dropped(e){e.target.closest(".form-entry").classList.remove("active")}#D(e){e.querySelector('input[type="file"]').addEventListener("change",this.#q(e)),e.addEventListener("dragenter",this.dragOver.bind(this)),e.addEventListener("dragleave",this.dragOff.bind(this)),e.addEventListener("dragend",this.dragOff.bind(this)),e.addEventListener("drop",this.dropped.bind(this))}init(){this.#T.forEach((e=>this.#D(e)))}}class b{#H=document.querySelectorAll("[data-lightbox]");#I='\n    <figure class="lightbox__container" aria-live="polite" aria-atomic="true">\n      <div class="lightbox__media"></div>           \n      <figcaption class="lightbox__caption"></figcaption>\n    </figure>\n    <div class="lightbox__controls">\n      <button class="button button--icon-only" data-lightbox-previous aria-label="Previous">\n        <span class="icon icon-arrow-left" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-next aria-label="Next">\n        <span class="icon icon-arrow-right" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-close aria-label="Close">\n        <span class="icon icon-close" aria-hidden="true"></span>\n      </button>\n    </div>\n  ';#M='\n    <video controls tabindex="0">\n      <source type="video/mp4">\n    </video>\n  ';#P='\n    <iframe\n      frameborder="0"\n      allow="autoplay; fullscreen;"\n      allowfullscreen\n      controls\n      tabindex="0"\n    ></iframe>\n  ';#F='\n    <div class="lightbox__media__loader">\n      <span class="icon icon-loading icon--rotate" aria-hidden="true"></span>\n    </div>\n    <div class="lightbox__media__error" style="display: none;">\n      <span class="icon icon-warn" aria-hidden="true"></span>\n      <p>Failed to load content. Please try again later.</p>\n    </div>\n  ';#O='<img src="https://source.unsplash.com/1600x900"/>';#B=[];#$=e=>t=>{document.querySelector(".lightbox")||(t.preventDefault(),this.lightbox=this.#N(),this.currentLB=e,this.#V(e),s(this.lightbox))};#K=e=>{e.stopPropagation(),e.target!==e.currentTarget&&"click"===e.type||(n(this.lightbox),this.lightbox.parentElement.removeChild(this.lightbox),window.removeEventListener("keyup",this.#U))};#R=(()=>{var e=this;return function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e.lightbox.querySelector(".lightbox__caption").style.display=t?"block":"none"}})();#W=e=>{if(e.preventDefault(),e.target.hasAttribute("data-lightbox-previous"))this.#z(-1);else{if(!e.target.hasAttribute("data-lightbox-next"))return;this.#z(1)}};#U=e=>{if(e.preventDefault(),!(this.#B.length<=1)||"ArrowLeft"!==e.code&&"ArrowRight"!==e.code)switch(e.code){case"ArrowLeft":this.#z(-1),this.lightbox.querySelector("[data-lightbox-previous]").focus();break;case"ArrowRight":this.#z(1),this.lightbox.querySelector("[data-lightbox-next]").focus();break;case"Escape":this.#K(e);break;default:return}};#j=e=>{e.setAttribute("tabindex",0),e.addEventListener("focus",(t=>{t.preventDefault(),e.children[0].focus(),a(e.children[0])}))};#z(e){this.currentLB+=e,this.currentLB<0?this.currentLB=this.#B.length-1:this.currentLB>=this.#B.length&&(this.currentLB=0),this.#V(this.currentLB)}#V(e){const t=this.lightbox.querySelector(".lightbox__media"),i=this.lightbox.querySelector(".lightbox__caption");let s;t.innerHTML="";const{lbType:n,lbSrc:a,lbAlt:r,lbCaption:l}=this.#B[e],d=null!==l;switch(this.#R(d),n){case"image":s=this.#Y(t,a);break;case"video":s=this.#G(t,a)}this.#j(t),d&&(i.innerHTML=l),o(this.lightbox)}#Y(e,t){e.hasAttribute("style")&&e.removeAttribute("style"),e.innerHTML=this.#O;const i=this.#J();e.appendChild(i);const s=e.querySelector("img");return s.src=t,this.#Q(s,i),s}#G(e,t){const i=/youtube/i.test(t),s=/vimeo/i.test(t);let n;if(i||s)e.innerHTML=this.#P,n=e.querySelector("iframe"),n.src=t;else{e.innerHTML=this.#M;const i=this.#J();e.appendChild(i),n=e.querySelector("source");const s=e.querySelector("video");s.addEventListener("loadedmetadata",(()=>{let t=s.videoWidth,i=s.videoHeight;e.style.maxWidth=`${t}px`,e.style.aspectRatio=`${t} / ${i}`})),this.#Q(n,i),n.src=t}return n}#N(){const e=document.createElement("div");e.classList.add("lightbox"),e.setAttribute("aria-hidden",!0),e.setAttribute("aria-live","polite"),e.innerHTML=this.#I,document.body.appendChild(e);const t=e.querySelector("[data-lightbox-previous]"),i=e.querySelector("[data-lightbox-next]"),s=e.querySelector("[data-lightbox-close]");return this.#B.length<=1&&(t.setAttribute("disabled",!0),i.setAttribute("disabled",!0),t.style.display="none",i.style.display="none"),e.addEventListener("click",this.#K),s.addEventListener("click",this.#K),t.addEventListener("click",this.#W),i.addEventListener("click",this.#W),window.addEventListener("keyup",this.#U),e}#X(e){if(!e)return void console.error("No lightbox button provided");let t=null,i="";if(null!==e.querySelector("img")){const s=e.querySelector("img");t=s.src||null,i=s.alt||""}const s=e.getAttribute("data-lightbox")||"image",n=e.getAttribute("data-lightbox-src")||t,a=e.getAttribute("data-lightbox-caption")||null,o=e.getAttribute("data-lightbox-alt")||i;if(null!==n)return{lbType:s,lbSrc:n,lbCaption:a,lbAlt:o};console.error("No source provided for lightbox")}#Z(){this.#H.forEach((e=>{this.#B.push(this.#X(e))}))}#J=()=>{const e=document.createElement("div");return e.className="lightbox__media__loader",e.innerHTML=this.#F,e};#Q=(e,t)=>{const i="SOURCE"===e.nodeName?"loadeddata":"load";e.closest("SOURCE"===e.nodeName?"video":"img").addEventListener(i,(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),null!==this.#B[this.currentLB].lbCaption&&this.#R(!0)})),e.onerror=()=>{const i=t.querySelector(".lightbox__media__loader"),s=t.querySelector(".lightbox__media__error");e.style.display="none",this.#R(!1),i.style.display="none",s.style.display="block"}};#ee(){const e=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){const i=e.target,s=i.dataset.lightboxSrc||i.src;if(!s)return;t.unobserve(i);const n=new Image;n.onload=()=>{document.body.appendChild(n)},n.onerror=()=>{console.error(`Failed to load image: ${s}`)},n.src=s,n.style.display="none",this.#B[Number(i.dataset.index)].hiddenImage=n}}))}),{root:null,rootMargin:"0px",threshold:.1});Array.from(this.#H).filter((e=>"image"===e.getAttribute("data-lightbox"))).forEach(((t,i)=>{const s=t.querySelector("img");s&&(s.dataset.index=i,e.observe(s))}))}#te(){this.#H.forEach(((e,t)=>{e.addEventListener("click",this.#$(t))}))}init(){this.#Z(),this.#te(),this.#ee()}}class p{#ie=new Map;#se=this.#ne.bind(this);#ae(e,t){const i=i=>{e.querySelector(".modal__content").contains(i.target)||t(i)};window.addEventListener("pointerdown",i),this.#ie.set(e,i)}#oe(e){const t=this.#ie.get(e);t&&(window.removeEventListener("pointerdown",t),this.#ie.delete(e))}#ne(e){"Escape"===e.code&&document.querySelectorAll(".modal.shown").forEach((e=>this.#re(e)))}#re(e){e.classList.remove("shown"),n(e),this.#oe(e),window.removeEventListener("keydown",this.#se)}openModal(e){if(e)if(s(e),e.classList.add("shown"),e.focus(),e.querySelector(".modal__content")){if(e.classList.contains("modal--scroll-all")&&(e.scrollTop=0),e.querySelectorAll("[data-modal-close]").forEach((t=>{t.addEventListener("click",(()=>this.#re(e))),t.setAttribute("aria-label","Close Modal Window")})),"true"===e.dataset.modalCloseOutside){const t=()=>this.#re(e);this.#ae(e,t)}window.addEventListener("keydown",this.#se)}else console.warn("Modal content not found.");else console.warn("Modal target not found.")}init(){l(document,"click",'[data-modal="open"]',(e=>{const t=e.target.getAttribute("aria-controls")?.replace(/#/,""),i=document.getElementById(t);this.openModal(i)}))}}class m{#le=document.querySelectorAll('[data-toggle="dropdown"]');#de=!1;#ce(e,t){this.#de=!0,e.setAttribute("aria-expanded","true"),t.classList.add("shown"),t.className.includes("mega-menu")&&s()}#he(e,t){this.#de=this.#ue(),t.classList.remove("shown"),e.setAttribute("aria-expanded","false"),t.className.includes("mega-menu")&&n()}#ge(e,t){const i=i=>{const s=i.relatedTarget;!s||t.contains(s)||e.contains(s)||this.#he(e,t)};e.addEventListener("click",(i=>{i.preventDefault(),t.classList.contains("shown")?this.#he(e,t):this.#ce(e,t)})),e.addEventListener("focusout",i),t.addEventListener("focusout",i)}#ue(){return Array.from(this.#le).some((e=>document.getElementById(e.getAttribute("aria-controls")).classList.contains("shown")))}#be=e=>{this.#de&&this.#le.forEach((t=>{const i=document.getElementById(t.getAttribute("aria-controls"));i&&i.classList.contains("shown")&&!i.contains(e.target)&&!t.contains(e.target)&&this.#he(t,i)}))};#pe=e=>{"Escape"===e.key&&this.#de&&(this.#le.forEach((e=>{const t=document.getElementById(e.getAttribute("aria-controls"));t.classList.contains("shown")&&(this.#he(e,t),e.focus())})),this.#de=!1)};init(){this.#le.forEach((e=>{const t=e.getAttribute("aria-controls"),i=document.getElementById(t);i?(e.setAttribute("aria-expanded","false"),e.setAttribute("aria-haspopup","true"),this.#ge(e,i)):console.warn(`No dropdown menu found for ${t}`)})),window.addEventListener("click",this.#be),document.addEventListener("keydown",this.#pe)}}class f{#me=document.querySelectorAll('[class*="table--stack"]');#fe=document.querySelectorAll(".table-scroll");#ve(e){const t=e.querySelectorAll("thead th"),i=e.querySelectorAll("tbody tr");let s=[];t.forEach(((e,t)=>{if(""!==e.textContent){const i=e.textContent.trim();s.push({title:i,id:`header-${t}`}),e.setAttribute("id",`header-${t}`)}})),i.forEach((e=>{e.querySelectorAll("td").forEach(((e,t)=>{e.innerHTML=this.#ye(e.innerHTML),e.setAttribute("data-header",s[t].title),e.setAttribute("aria-labelledby",s[t].id)}))}))}#ye(e){return`\n      <div class="td-content">\n        ${e}\n      </div>\n    `}#Le(){this.#fe.forEach((e=>{let t=e.querySelector(".table-scroll__container"),i=e.offsetWidth;t.scrollWidth>i?e.setAttribute("data-scroll",!0):e.setAttribute("data-scroll",!1),t.addEventListener("scroll",(()=>{t.scrollLeft>1?t.setAttribute("data-scrolling",!0):t.setAttribute("data-scrolling",!1)}),{passive:!0})}))}init(){this.#me.forEach((e=>{this.#ve(e)})),this.#Le(),window.addEventListener("resize",this.#Le.bind(this))}}class v{#xe=document.querySelectorAll(".tabs");#Ee(e,t,i,s){e.preventDefault();let n=t+s;-1===s&&n<0?i[i.length-1].focus():1===s&&n>=i.length?i[0].focus():i[n].focus()}#Ae(e,t){e.forEach((e=>{e.setAttribute("aria-selected","false"),e.setAttribute("tabindex","-1")})),t.forEach((e=>{e.classList.remove("shown"),e.setAttribute("hidden","")}))}#we(e,t,i){this.#Ae(t,i),e.setAttribute("aria-selected","true"),e.setAttribute("tabindex","0"),e.focus();let s=e.getAttribute("aria-controls"),n=document.getElementById(s);n.classList.add("shown"),n.removeAttribute("hidden")}init(){this.#xe.forEach((e=>{const t=e.querySelectorAll('[role="tab"]'),i=e.querySelectorAll('[role="tabpanel"]');t.forEach(((e,s)=>{e.setAttribute("tabindex",0===s?"0":"-1"),e.addEventListener("click",(e=>{this.#we(e.target,t,i)})),e.addEventListener("keydown",(e=>{switch(e.code){case"Home":e.preventDefault(),t[0].focus();break;case"End":e.preventDefault(),t[t.length-1].focus();break;case"ArrowLeft":this.#Ee(e,s,t,-1);break;case"ArrowRight":this.#Ee(e,s,t,1)}}))})),this.#we(t[0],t,i)}))}}class y{#_e=document.querySelectorAll(".track");#Se=null;#ke(e){return parseInt(getComputedStyle(e).getPropertyValue("--visible-panels"),10)||1}#Ce(e){const t=this.#ke(e),i=e.children.length;return Math.ceil(i/t)}#Te(e,t){e.classList.toggle("hide-controls",t<=1)}#qe(e){const t=e.querySelector(".track__panels"),i=this.#Ce(t),s=e.querySelector(".track__pagination");s&&(s.innerHTML=Array.from({length:i},((e,t)=>`\n            <li>\n                <button\n                    class="track__pagination__item ${0===t?"active":""}"\n                    data-item="${t}"\n                    aria-label="Page ${t+1}"\n                    ${0===t?'aria-current="true"':""}\n                ></button>\n            </li>\n        `)).join(""),this.#Te(e,i))}#De(e,t){e.querySelectorAll(".track__pagination__item").forEach(((e,i)=>{e.classList.toggle("active",i===t),e.setAttribute("aria-current",i===t?"true":"false")}))}#He(e,t,i){const s=e.querySelector(".liveregion");s&&(s.textContent=`Page ${t+1} of ${i}`)}#Ie(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=e.querySelector(".track__panels"),n=this.#ke(s),a=t*s.children[0].offsetWidth*n;s.scrollTo({left:a,behavior:i?"auto":"smooth"}),this.#De(e,t),this.#He(e,t,this.#Ce(s))}#Me(e){const t=e.scrollLeft,i=this.#ke(e),s=e.children[0].offsetWidth;return Math.round(t/(s*i))}#Pe(e){const t=e.querySelector(".track__panels"),i=t.children[0].firstElementChild.cloneNode(!0),s=t.children[t.children.length-1],n=document.createElement("div");i.removeAttribute("id"),i.removeAttribute("href"),n.classList.add("track__panel__duplicate"),n.setAttribute("tabindex","-1"),n.setAttribute("aria-hidden","true"),n.appendChild(i),s.appendChild(n)}#Fe(e){const t=e.querySelector(".track__panels"),i=e.querySelector(".track__pagination");t.scrollLeft=0,i.innerHTML="",this.#qe(e),this.#Oe(e)}#Oe(e){let t=e.querySelector(".liveregion");t||(t=document.createElement("div"),t.className="liveregion screen-reader-only",t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic","true"),e.appendChild(t))}#Be(e){const t=e.querySelector(".track__panels");clearTimeout(this.#Se),this.#Se=setTimeout((()=>{const i=this.#Me(t);this.#De(e,i),this.#He(e,i,this.#Ce(t))}),250)}#te(e){const t=e.querySelector(".track__panels");e.querySelector(".track__pagination")?.addEventListener("click",(t=>{const i=t.target.closest(".track__pagination__item");if(i){const t=parseInt(i.getAttribute("data-item"));this.#Ie(e,t)}})),e.querySelector(".track__prev")?.addEventListener("click",(()=>{const i=this.#Me(t);if(e.hasAttribute("data-loop")&&0===i){const i=t.children.length-this.#ke(t);this.#Ie(e,i,!1)}else i>0&&this.#Ie(e,i-1)})),e.querySelector(".track__next")?.addEventListener("click",(()=>{const i=this.#Me(t),s=this.#Ce(t);e.hasAttribute("data-loop")&&i>=s-1?this.#Ie(e,0,!1):i<s-1&&this.#Ie(e,i+1)})),t.addEventListener("scroll",(()=>{this.#Be(e)})),window.addEventListener("resize",(()=>{this.#Fe(e)}))}init(){this.#_e.forEach((e=>{e.classList.contains("track--peeking")&&this.#Pe(e),this.#Fe(e),this.#te(e)}))}}document.addEventListener("DOMContentLoaded",(()=>{(new r).init(),(new d).init(),(new c).init(),(new h).init(),(new u).init(),(new g).init(),(new b).init(),(new p).init(),(new m).init(),(new f).init(),(new v).init(),(new y).init()}))}();