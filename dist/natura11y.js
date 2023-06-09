!function(){"use strict";let t,e=0,i=document.querySelector("html");const s=s=>{t=document.activeElement,e=window.pageYOffset,i.style.setProperty("--scroll-position",`-${e}px`),i.classList.add("has-overlay"),s&&"true"===s.getAttribute("aria-hidden")&&s.setAttribute("aria-hidden",!1),o(s)},a=s=>{i.removeAttribute("style"),i.classList.remove("has-overlay"),i.classList.length||i.removeAttribute("class"),s&&"false"===s.getAttribute("aria-hidden")&&s.setAttribute("aria-hidden",!0),window.scrollTo({top:e,behavior:"instant"}),t.focus()},n=function(){return[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(["a[href]","button","input","textarea","select","details",'[tabindex]:not([tabindex="-1"])'])].filter((t=>!t.hasAttribute("disabled")&&!t.getAttribute("aria-hidden")))},o=t=>{let e=n(t),i=e[0],s=e[e.length-1];t.addEventListener("keydown",(e=>{switch(e.code){case"Tab":document.activeElement===s&&(e.shiftKey||(e.preventDefault(),i.focus())),document.activeElement===i&&e.shiftKey&&(e.preventDefault(),s.focus());break;case"Escape":a(t)}}))};class l{#t=document.querySelectorAll(".accordion");#e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n(t).forEach((t=>{t.setAttribute("tabindex",e?0:-1)}))}#i=(t,e,i)=>s=>{s.preventDefault(),s.stopPropagation();for(const t of i)t.classList.remove("show"),t!==e&&(t.classList.remove("shown"),t.style.maxHeight=null,t.previousElementSibling.setAttribute("aria-expanded",!1),t.setAttribute("aria-hidden",!0),this.#e(t,!1));e.classList.toggle("shown");let a=t.getAttribute("aria-expanded");"true"===a?(t.setAttribute("aria-expanded",!1),e.setAttribute("aria-hidden",!0),this.#e(e,!1)):"false"===a&&(t.setAttribute("aria-expanded",!0),e.setAttribute("aria-hidden",!1),this.#e(e,!0)),e.style.maxHeight?e.style.maxHeight=null:(e.style.maxHeight=e.scrollHeight+"px",e.setAttribute("aria-hidden",!1));let n=new Event("accTrigger",{bubbles:!0});document.dispatchEvent(n)};#s=(t,e,i)=>t=>{const s=s=>{t.preventDefault();let a=i+s;-1===s&&a<0?e[e.length-1].focus():1===s&&a>=e.length?e[0].focus():e[a].focus()};switch(t.code){case"ArrowLeft":case"ArrowUp":s(-1);break;case"ArrowRight":case"ArrowDown":s(1)}};#a=(t,e,i)=>s=>{"Enter"===s.code&&"BUTTON"!==s.target.tagName&&this.#i(t,e,i)(s)};init(){this.#t.forEach((t=>{const e=Array.from(t.querySelectorAll(':scope > [data-accordion="button"]')),i=t.querySelectorAll(':scope > [data-accordion="panel"]');t.addEventListener("click",(t=>{const s=t.target.closest('[data-accordion="button"]');if(!s)return;if(-1===e.indexOf(s))return;const a=s.nextElementSibling;this.#i(s,a,i)(t)})),t.addEventListener("keydown",(t=>{const i=t.target.closest('[data-accordion="button"]');if(!i)return;const s=e.indexOf(i);-1!==s&&this.#s(i,e,s)(t)})),t.addEventListener("keyup",(t=>{const s=t.target.closest('[data-accordion="button"]');if(!s)return;e.indexOf(s);const a=s.nextElementSibling;this.#a(s,a,i)(t)})),e.forEach(((t,e)=>{const i=t.nextElementSibling;let s=t.getAttribute("aria-expanded");t.setAttribute("tabindex",0),"true"===s?(i.style.maxHeight=i.scrollHeight+"px",i.classList.add("show"),this.#e(i,!0)):(t.setAttribute("aria-expanded",!1),i.style.maxHeight=null,i.setAttribute("aria-hidden",!0),this.#e(i,!1))}))}))}}class r{#n=document.querySelectorAll(".alert--dismissable");#o='\n    <button class="button button--icon-only">\n        <span class="icon icon-close" aria-label="Close" aria-hidden="true">\n    </button>\n  ';#l=t=>e=>{e.preventDefault(),t.classList.add("dismissed"),document.querySelector(".dismissed").addEventListener("animationend",(()=>{t.remove()}))};init(){this.#n.forEach((t=>{t.insertAdjacentHTML("afterbegin",this.#o),t.querySelector("button").addEventListener("click",this.#l(t))}))}}class d{#r=document.querySelectorAll(".button--icon-only");#d=t=>e=>setTimeout((()=>{t.forEach((t=>{t.classList.remove("tooltip-show")})),e.target.classList.add("tooltip-show")}),300);#c=()=>(t,e)=>{clearTimeout(e),t.target.classList.remove("tooltip-show")};#h(t,e){const i=e.offsetWidth/2,s=t.offsetLeft,a=window.innerWidth-(t.offsetLeft+t.offsetWidth);i>s&&e.classList.add("left"),i>a&&e.classList.add("right")}#u=(t,e)=>{const i=`\n            <span class="button__tooltip">\n                ${e}\n            </span>\n        `;if(e){t.insertAdjacentHTML("beforeend",i);const e=t.querySelector(".button__tooltip");let s;this.#h(t,e),window.addEventListener("resize",(()=>this.#h(t,e))),t.addEventListener("mouseenter",(t=>{s=this.#d(this.#r)(t)})),t.addEventListener("focusin",(t=>{s=this.#d(this.#r)(t)})),t.addEventListener("mouseleave",(t=>{this.#c()(t,s)})),t.addEventListener("focusout",(t=>{this.#c()(t,s)}))}};init(){this.#r.forEach((t=>{const e=t.getAttribute("aria-label");this.#u(t,e)}))}}class c{#b=document.querySelectorAll("[data-target-toggle]");#g(t,e){t.setAttribute("aria-expanded",!1),e.classList.remove("shown")}#p(t,e,i){t.setAttribute("aria-expanded",!0),e.classList.add("shown"),i&&i.focus()}#s(t,e,i){return s=>{switch(s.code){case"Tab":document.activeElement===i&&s.shiftKey&&(s.preventDefault(),t.focus());break;case"Escape":this.#g(t,e)}}}#m(t,e){const i=t.target.getAttribute("data-target-toggle").replace(/#/,""),s=document.getElementById(i),a=n(s)[0],o=e.getAttribute("aria-expanded");"true"===o?this.#g(e,s):"false"===o&&this.#p(e,s,s.hasAttribute("data-focus-first")?a:null),s.addEventListener("keydown",this.#s(e,s,a))}init(){this.#b.forEach((t=>{t.setAttribute("aria-expanded",!1),t.addEventListener("click",(e=>{if(this.#m(e,t),t.hasAttribute("data-target-close")){const t=e.target.getAttribute("data-target-close").replace(/#/,""),i=document.getElementById(t),s=document.querySelector(`[data-target-toggle="#${t}"]`);this.#g(s,i)}}))}))}}class h{#f=document.querySelectorAll(".form-entry");#L=["is-invalid"];#v=!1;#y(){return""===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)}#x(t){t.closest(".form-entry").classList.add(...this.#L)}#E(t){t.closest(".form-entry").classList.remove(...this.#L)}#A(t){return this.#y(t.value)?(this.#x(t),!0):(this.#E(t),!1)}#w(t){return e=>{e.target.closest(t).classList.add("active")}}#S(t){return e=>{e.target.closest(t).classList.remove("active")}}#k(t,e){this.#v&&e&&this.#A(t),""!==t.value?t.closest(".form-entry").classList.add("has-value"):t.closest(".form-entry").classList.remove("has-value")}#q(t){const e=t.querySelectorAll(["email","input","select","tel","textarea"]);let i=t.hasAttribute("data-required");e.forEach((t=>this.#C(t,i)))}#C(t,e){const i=t.closest(".form-entry").querySelector(".form-entry__field__input");let s=".form-entry";if("INPUT"===t.tagName){const e=t.getAttribute("type");"radio"!==e&&"checkbox"!==e||t.disabled&&t.closest("label").classList.add("disabled")}t.addEventListener("focusin",this.#w(s)),t.addEventListener("focusout",this.#S(s)),e&&(t.setAttribute("required","true"),t.setAttribute("aria-required",!0)),t.addEventListener("change",(()=>this.#k(t,e))),i&&i.addEventListener("click",this.handleClickOnInputText)}handleClickOnInputText(t){let e=t.target.tagName,i=t.target.closest(".form-entry__field__input").querySelector("input");"SPAN"===e&&i.focus()}init(){this.#f.forEach((t=>this.#q(t)))}}class u{#T=document.querySelectorAll("form[novalidate]");#L=["is-invalid"];#v=!1;#y(){return""===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)}#x(t){t.closest(".form-entry").classList.add(...this.#L)}#E(t){t.closest(".form-entry").classList.remove(...this.#L)}#A(t){return this.#y(t.value)?(this.#x(t),!0):(this.#E(t),!1)}#_(t,e){return null===t&&(t="This field is Required"),`\n            <small class="form-entry__feedback">\n                <span class="icon icon-warn" aria-hidden="true"></span>\n                <span class="message">\n                    <strong>${t}</strong> ${void 0!==e?e:""}\n                </span>\n            </small>\n        `}#H(t,e){t.forEach((t=>{let i=t.closest(".form-entry"),s=i.querySelector(".form-entry__field__label");i.classList.add("is-invalid");const a=i.querySelector(".form-entry__feedback"),n=i.querySelector(".form-entry__help");let o;n&&(o=n.innerHTML.toString());let l=i.getAttribute("data-error-message"),r=[l,o];e.push(r),null===a&&s.insertAdjacentHTML("afterend",this.#_(l,o))}))}#I(t){let e=t.querySelector('[class*="alert"], [class*="invalid"]');if(e){e.hasAttribute("data-alert")&&(e.style.display="block");let t=e.offsetTop-16;window.scrollTo({top:t,behavior:"smooth"})}}#D(t){t.addEventListener("submit",(e=>{e.preventDefault(),this.#v=!0;let i=[],s=t.querySelectorAll("input, select, textarea");s.forEach((t=>{t.addEventListener("input",(()=>this.#A(t)))})),s.forEach((t=>{this.#A(t)}));let a=t.querySelectorAll(":invalid");this.#H(a,i),i.length>0&&e.preventDefault(),this.#I(t)}))}init(){this.#T.forEach((t=>this.#D(t)))}}class b{#F=document.querySelectorAll(".file-upload");#O(t){return function(e){const[i]=e.target.files,{name:s,size:a}=i,n=`\n                <span class="file-upload__data">\n                    <span class="file-name">${s}</span>\n                    <span class="file-size">${(a/1e3).toFixed(2)} kb</span>\n                </span>\n            `,o=t.querySelector(".file-upload__data");o&&o.remove(),t.insertAdjacentHTML("beforeend",n)}}dragOver(t){t.target.closest(".form-entry").classList.add("active")}dragOff(t){t.target.closest(".form-entry").classList.remove("active")}dropped(t){t.target.closest(".form-entry").classList.remove("active")}#M(t){t.querySelector('input[type="file"]').addEventListener("change",this.#O(t)),t.addEventListener("dragenter",this.dragOver.bind(this)),t.addEventListener("dragleave",this.dragOff.bind(this)),t.addEventListener("dragend",this.dragOff.bind(this)),t.addEventListener("drop",this.dropped.bind(this))}init(){this.#F.forEach((t=>this.#M(t)))}}class g{#B=document.querySelectorAll("img[data-lightbox]");#U='\n    <div class="button-group lightbox__buttons">\n      <button class="button button--icon-only" data-lightbox-previous>\n        <span class="icon icon-arrow-left" aria-label="Previous" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-next>\n        <span class="icon icon-arrow-right" aria-label="Next" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-close>\n        <span class="icon icon-close" aria-label="Close" aria-hidden="true"></span>\n      </button>\n    </div>\n    <figure class="lightbox__container">\n      <div class="lightbox__media"></div>           \n      <figcaption class="lightbox__caption">A caption for the image.</figcaption>\n    </figure>\n  ';#K='\n    <video controls>\n      <source src="" type="video/mp4">\n    </video>\n  ';#N='<img src="https://source.unsplash.com/1600x900" />';#P=[];#W=(t,e)=>t=>{document.querySelector(".lightbox")||(t.preventDefault(),this.lightbox=this.#$(),this.currentLB=e,s(this.lightbox),this.#z(e))};#V=t=>{t.stopPropagation(),t.target!==t.currentTarget&&"click"===t.type||(a(this.lightbox),this.lightbox.parentElement.removeChild(this.lightbox),window.removeEventListener("keyup",this.#j))};#R=t=>{if(t.preventDefault(),t.target.hasAttribute("data-lightbox-previous"))this.#Y(-1);else{if(!t.target.hasAttribute("data-lightbox-next"))return;this.#Y(1)}};#j=t=>{switch(t.preventDefault(),t.code){case"ArrowLeft":this.#Y(-1),this.lightbox.querySelector("[data-lightbox-previous]").focus();break;case"ArrowRight":this.#Y(1),this.lightbox.querySelector("[data-lightbox-next]").focus();break;case"Escape":this.#V(t);break;default:return}};#Y(t){this.currentLB+=t,this.currentLB<0?this.currentLB=this.#P.length-1:this.currentLB>=this.#P.length&&(this.currentLB=0),this.#z(this.currentLB)}#z(t){const e=this.lightbox.querySelector(".lightbox__media"),i=this.lightbox.querySelector(".lightbox__caption");let s;"video"===this.#P[t].imgType?(e.innerHTML=this.#K,s=e.querySelector("source")):(e.innerHTML=this.#N,s=e.querySelector("img"),s.alt=this.#P[t].imgAlt),s.src=this.#P[t].imgSrc,i.innerHTML=this.#P[t].imgCaption,this.#P[t].imgWidth&&s.setAttribute("width",this.#P[t].imgWidth)}#$(){const t=document.createElement("div");t.classList.add("lightbox"),t.setAttribute("aria-hidden",!0),t.innerHTML=this.#U,document.body.appendChild(t);const e=t.querySelector("[data-lightbox-previous]"),i=t.querySelector("[data-lightbox-next]"),s=t.querySelector("[data-lightbox-close]");return t.querySelector(".lightbox__media").classList.add("box-shadow-3"),t.addEventListener("click",this.#V),s.addEventListener("click",this.#V),e.addEventListener("click",this.#R),i.addEventListener("click",this.#R),window.addEventListener("keyup",this.#j),t}#G(){this.#B.forEach(((t,e)=>{const i=document.createElement("button");i.setAttribute("class","lightbox-button"),this.#J(t,i),this.#P.push(this.#Q(t))}))}#J(t,e){t.parentNode.insertBefore(e,t),e.appendChild(t)}#Q(t){return{imgType:t.getAttribute("data-lightbox")||"image",imgSrc:t.getAttribute("data-lightbox-src")||t.src||null,imgCaption:t.getAttribute("data-lightbox-caption")||t.alt||null,imgAlt:t.getAttribute("data-lightbox-alt")||t.alt||"",imgWidth:t.getAttribute("data-lightbox-width")||null}}#X(){const t=new IntersectionObserver(((t,e)=>{t.forEach((t=>{if(t.isIntersecting){const i=t.target;e.unobserve(i);const s=new Image;s.src=i.dataset.lightboxSrc||i.src,s.style.display="none",document.body.appendChild(s),this.#P[Number(i.dataset.index)].hiddenImage=s}}))}),{root:null,rootMargin:"0px",threshold:.1});this.#B.forEach(((e,i)=>{e.dataset.index=i,t.observe(e)}))}#Z(){this.#B.forEach(((t,e)=>{t.closest("button").addEventListener("click",this.#W(t,e))}))}init(){this.#G(),this.#Z(),this.#X()}}class p{#tt=document.querySelectorAll(".modal");#et=document.querySelectorAll("[data-modal-open]");#it=new Map;#st(t,e){window.addEventListener("click",e),this.#it.set(t,e)}#at(t){const e=this.#it.get(t);e&&(window.removeEventListener("click",e),this.#it.delete(t))}openModal(t){if(!t)return void console.warn("Modal target not found.");s(t);const e=t.querySelector(".modal__content");if(!e)return void console.warn("Modal content not found.");e.setAttribute("tabindex",0),e.focus(),e.setAttribute("tabindex",-1),t.classList.contains("modal--scroll-all")&&(t.scrollTop=0);t.querySelectorAll("[data-modal-close]").forEach((e=>{e.addEventListener("click",(()=>{a(t),this.#at(t)})),e.setAttribute("aria-label","Close Modal Window")})),"true"===t.dataset.modalCloseOutside&&this.#st(t,(i=>{e.contains(i.target)||(a(t),this.#at(t))}))}init(){this.#tt.forEach((t=>{const e=t.querySelector(".modal__content");e.setAttribute("role","dialog"),e.setAttribute("aria-modal",!0),t.setAttribute("aria-hidden",!0)})),this.#et.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-modal-open").replace(/#/,""),i=document.getElementById(e);this.openModal(i),t.stopPropagation()}))}))}}class m{#nt=document.querySelectorAll('[data-toggle="dropdown"]');#ot(t,e){e.classList.toggle("shown"),t.setAttribute("aria-expanded","true"===t.getAttribute("aria-expanded")?"false":"true")}#lt(t,e){e.classList.remove("shown"),t.setAttribute("aria-expanded","false")}init(){window.addEventListener("click",(t=>{this.#nt.forEach((e=>{let i=e.closest("li"),s=e.nextElementSibling;i.contains(t.target)||this.#lt(e,s)}))})),this.#nt.forEach((t=>{let e=t.nextElementSibling;e?(t.setAttribute("aria-expanded","false"),t.setAttribute("aria-haspopup","true"),t.addEventListener("click",(i=>{i.preventDefault(),this.#ot(t,e)}))):console.warn(`No dropdown menu found for dropdown button ${t}`)}))}}class f{#rt=document.querySelectorAll('[class*="table--stack"]');#dt=document.querySelectorAll(".table-scroll");#ct(t){const e=t.querySelectorAll("thead th"),i=t.querySelectorAll("tbody tr");let s=[];e.forEach((t=>{if(""!==t.textContent){const e=t.textContent.trim();s.push(e)}})),i.forEach((t=>{t.querySelectorAll("td").forEach(((t,e)=>{t.innerHTML=this.#ht(t.innerHTML),t.setAttribute("data-header",s[e])}))}))}#ht(t){return`\n\t\t\t<div class="td-content">\n\t\t\t\t${t}\n\t\t\t</div>\n\t\t`}#ut(){this.#dt.forEach((t=>{let e=t.querySelector(".table-scroll__container"),i=t.offsetWidth;e.scrollWidth>i?t.setAttribute("data-scroll",!0):t.setAttribute("data-scroll",!1),e.addEventListener("scroll",(()=>{e.scrollLeft>1?e.setAttribute("data-scrolling",!0):e.setAttribute("data-scrolling",!1)}),{passive:!0})}))}init(){this.#rt.forEach((t=>{this.#ct(t)})),this.#ut(),window.addEventListener("resize",this.#ut.bind(this))}}class L{#bt=document.querySelectorAll(".tabs");#gt(t,e,i,s){t.preventDefault();let a=e+s;-1===s&&a<0?i[i.length-1].focus():1===s&&a>=i.length?i[0].focus():i[a].focus()}#pt(t,e){t.forEach((t=>{t.setAttribute("aria-selected","false")})),e.forEach((t=>{t.classList.remove("shown"),t.setAttribute("hidden","")}))}activateTab(t,e,i){this.#pt(e,i),t.setAttribute("aria-selected","true");let s=t.getAttribute("aria-controls"),a=document.getElementById(s);a.classList.add("shown"),a.removeAttribute("hidden")}init(){this.#bt.forEach((t=>{const e=t.querySelectorAll('[role="tab"]'),i=t.querySelectorAll('[role="tabpanel"]');e.forEach(((t,s)=>{t.addEventListener("click",(t=>{let s=t.target;this.activateTab(s,e,i)})),t.addEventListener("keydown",(t=>{switch(t.code){case"Home":t.preventDefault(),e[0].focus();break;case"End":t.preventDefault(),e[e.length-1].focus();break;case"ArrowLeft":this.#gt(t,s,e,-1);break;case"ArrowRight":this.#gt(t,s,e,1)}}))}))}))}}document.addEventListener("DOMContentLoaded",(()=>{(new l).init(),(new r).init(),(new d).init(),(new c).init(),(new h).init(),(new u).init(),(new b).init(),(new g).init(),(new p).init(),(new m).init(),(new f).init(),(new L).init()}))}();