!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,r){n[e]=r},r.parcelRequired7c6=a),a.register("8j2BU",(function(r,t){var n=a("bpxeT"),c=a("2TvXO"),i=a("dIxxU"),s=a("ejkSG"),o=a("xTqOg"),u=(o=a("xTqOg"),document.querySelector(".watched-btn")),l=document.querySelector(".queue-btn");function p(e){return d.apply(this,arguments)}function d(){return(d=e(n)(e(c).mark((function r(t){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.default.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o.apiKey));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),s.Notify.failure("Wystąpił błąd podczas pobierania szczegółów filmu."),console.error("Błąd podczas pobierania szczegółów filmu:",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",e(n)(e(c).mark((function r(){var t,a,i,s,d,f,v,x,b,m;return e(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t=JSON.parse(localStorage.getItem("watchedFilms")),(a=document.querySelector(".movies-gallery")).innerHTML="",u.classList.add("active-btn"),i=!0,s=!1,d=void 0,r.prev=5,f=t[Symbol.iterator]();case 7:if(i=(v=f.next()).done){r.next=20;break}return x=v.value,r.next=11,p(x);case 11:if(!(b=r.sent)){r.next=17;break}return r.next=15,(0,o.makeSingleFilmTile)(b);case 15:m=r.sent,a.innerHTML+=m;case 17:i=!0,r.next=7;break;case 20:r.next=26;break;case 22:r.prev=22,r.t0=r.catch(5),s=!0,d=r.t0;case 26:r.prev=26,r.prev=27,i||null==f.return||f.return();case 29:if(r.prev=29,!s){r.next=32;break}throw d;case 32:return r.finish(29);case 33:return r.finish(26);case 34:if(a){r.next=37;break}return console.error("Target container not found."),r.abrupt("return");case 37:u.addEventListener("click",e(n)(e(c).mark((function r(){var t,n,i,s,d,f,v,x,b;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=JSON.parse(localStorage.getItem("watchedFilms")),a.innerHTML="",l.classList.remove("active-btn"),u.classList.add("active-btn"),n=!0,i=!1,s=void 0,e.prev=5,d=t[Symbol.iterator]();case 7:if(n=(f=d.next()).done){e.next=20;break}return v=f.value,e.next=11,p(v);case 11:if(!(x=e.sent)){e.next=17;break}return e.next=15,(0,o.makeSingleFilmTile)(x);case 15:b=e.sent,a.innerHTML+=b;case 17:n=!0,e.next=7;break;case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(5),i=!0,s=e.t0;case 26:e.prev=26,e.prev=27,n||null==d.return||d.return();case 29:if(e.prev=29,!i){e.next=32;break}throw s;case 32:return e.finish(29);case 33:return e.finish(26);case 34:case"end":return e.stop()}}),r,null,[[5,22,26,34],[27,,29,33]])})))),l.addEventListener("click",e(n)(e(c).mark((function r(){var t,n,i,s,d,f,v,x,b;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=JSON.parse(localStorage.getItem("queueFilms")),a.innerHTML="",u.classList.remove("active-btn"),l.classList.add("active-btn"),n=!0,i=!1,s=void 0,e.prev=5,d=t[Symbol.iterator]();case 7:if(n=(f=d.next()).done){e.next=20;break}return v=f.value,e.next=11,p(v);case 11:if(!(x=e.sent)){e.next=17;break}return e.next=15,(0,o.makeSingleFilmTile)(x);case 15:b=e.sent,a.innerHTML+=b;case 17:n=!0,e.next=7;break;case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(5),i=!0,s=e.t0;case 26:e.prev=26,e.prev=27,n||null==d.return||d.return();case 29:if(e.prev=29,!i){e.next=32;break}throw s;case 32:return e.finish(29);case 33:return e.finish(26);case 34:case"end":return e.stop()}}),r,null,[[5,22,26,34],[27,,29,33]])}))));case 39:case"end":return r.stop()}}),r,null,[[5,22,26,34],[27,,29,33]])}))))})),a("8j2BU")}();
//# sourceMappingURL=library.35032951.js.map