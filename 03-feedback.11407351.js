!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=l||d||Function("return this")(),s=Object.prototype.toString,p=Math.max,y=Math.min,g=function(){return v.Date.now()};function m(e,t,n){var r,i,u,a,f,c,l=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function m(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function S(e){return l=e,f=setTimeout(h,t),d?m(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||v&&e-l>=u}function h(){var e=g();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return v?y(n,u-(e-l)):n}(e))}function w(e){return f=void 0,s&&r?m(e):(r=i=void 0,a)}function T(){var e=g(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(v)return f=setTimeout(h,t),m(c)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,b(n)&&(d=!!n.leading,u=(v="maxWait"in n)?p(j(n.maxWait)||0,t):u,s="trailing"in n?!!n.trailing:s),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},T.flush=function(){return void 0===f?a:w(g())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:r,maxWait:t,trailing:i})};var S=document.querySelector("form"),O="feedback-form-state";S.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,t=h,n=JSON.stringify(t),localStorage.setItem(O,n);var t,n}),500)),S.addEventListener("submit",(function(e){for(var t in e.preventDefault(),localStorage.clear(),h){var n=S.querySelector('[name="'.concat(t,'"]'));n&&(n.value="")}console.log(h)}));var h={};!function(){var e=JSON.parse(localStorage.getItem(O));if(e)for(var t in h=e){var n=S.querySelector('[name="'.concat(t,'"]'));n&&(n.value=h[t])}}()}();
//# sourceMappingURL=03-feedback.11407351.js.map
