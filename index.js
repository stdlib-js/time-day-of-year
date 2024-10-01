// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"",o=r()?function(e){var r,i,o,c,u;if(null==e)return t.call(e);i=e[a],u=a,r=null!=(c=e)&&n.call(c,u);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=i:delete e[a],o}:function(e){return t.call(e)},c=Date.prototype.getDay,u=r();function l(e){return"object"==typeof e&&(e instanceof Date||(u?function(e){try{return c.call(e),!0}catch(e){return!1}}(e):"[object Date]"===o(e)))}var s="function"==typeof Object.defineProperty?Object.defineProperty:null,p=Object.defineProperty;function f(e){return"number"==typeof e}function g(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function d(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+g(i):g(i)+e,n&&(e="-"+e)),e}var h=String.prototype.toLowerCase,b=String.prototype.toUpperCase;function y(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!f(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=d(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=d(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===b.call(e.specifier)?b.call(t):h.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var m=Math.abs,w=String.prototype.toLowerCase,v=String.prototype.toUpperCase,j=String.prototype.replace,E=/e\+(\d)$/,_=/e-(\d)$/,S=/^(\d+)$/,T=/^(\d+)e/,x=/\.0$/,F=/\.0*e/,V=/(\..*[^0])0*e/;function k(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!f(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":m(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=j.call(t,V,"$1e"),t=j.call(t,F,"e"),t=j.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=j.call(t,E,"e+0$1"),t=j.call(t,_,"e-0$1"),e.alternate&&(t=j.call(t,S,"$1."),t=j.call(t,T,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===v.call(e.specifier)?v.call(t):w.call(t)}function I(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var O=String.fromCharCode,A=Array.isArray;function D(e){return e!=e}function P(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $(e){var r,t,n,i,a,o,c,u,l,s,p,f,g;if(!A(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,u=0;u<e.length;u++)if("string"==typeof(n=e[u]))o+=n;else{if(r=void 0!==n.precision,!(n=P(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,D(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,D(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=y(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!D(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=D(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=k(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,p=n.width,f=n.padRight,g=void 0,(g=p-s.length)<0?s:s=f?s+I(g):I(g)+s)),o+=n.arg||"",c+=1}return o}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Y(e){var r,t,n,i;for(t=[],i=0,n=C.exec(e);n;)(r=e.slice(i,C.lastIndex-n[0].length)).length&&t.push(r),t.push(R(n)),i=C.lastIndex,n=C.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function M(e){var r,t;if("string"!=typeof e)throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Y(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return $.apply(null,r)}var N=Object.prototype,G=N.toString,Q=N.__defineGetter__,W=N.__defineSetter__,Z=N.__lookupGetter__,z=N.__lookupSetter__,L=function(){try{return s({},"x",{}),!0}catch(e){return!1}}()?p:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===G.call(e))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(e,r)||z.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Q&&Q.call(e,r,t.get),o&&W&&W.call(e,r,t.set),e};function U(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"string"==typeof e}var q=String.prototype.valueOf,B=r();function H(e){return"object"==typeof e&&(e instanceof String||(B?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object String]"===o(e)))}function J(e){return X(e)||H(e)}function K(e){return"number"==typeof e}U(J,"isPrimitive",X),U(J,"isObject",H);var ee=Number,re=ee.prototype.toString,te=r();function ne(e){return"object"==typeof e&&(e instanceof ee||(te?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Number]"===o(e)))}function ie(e){return K(e)||ne(e)}U(ie,"isPrimitive",K),U(ie,"isObject",ne);var ae=Number.POSITIVE_INFINITY,oe=ee.NEGATIVE_INFINITY,ce=Math.floor;function ue(e){return e<ae&&e>oe&&ce(r=e)===r;var r}function le(e){return K(e)&&ue(e)}function se(e){return ne(e)&&ue(e.valueOf())}function pe(e){return le(e)||se(e)}function fe(e){if(!X(e))throw new TypeError(M("invalid argument. Must provide a string. Value: `%s`.",e));return function(e){return e.toLowerCase()}(e)}function ge(){return(new Date).getFullYear()}function de(e){var r;if(arguments.length)if(l(e))r=e.getFullYear();else{if(!le(e))return!1;r=e}else r=ge();return r%100==0?r%400==0:r%4==0}U(pe,"isPrimitive",le),U(pe,"isObject",se);var he={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31,jan:31,january:31,feb:28,february:28,mar:31,march:31,apr:30,april:30,may:31,jun:30,june:30,jul:31,july:31,aug:31,august:31,sep:30,september:30,oct:31,october:31,nov:30,november:30,dec:31,december:31};function be(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}var ye={1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,jan:1,january:1,feb:2,february:2,mar:3,march:3,apr:4,april:4,may:5,jun:6,june:6,jul:7,july:7,aug:8,august:8,sep:9,september:9,oct:10,october:10,nov:11,november:11,dec:12,december:12},me=[31,28,31,30,31,30,31,31,30,31,30,31];return function(e,r,t){var n,i,a,o,c,u,s;if(0===arguments.length)o=(n=new Date).getMonth()+1,c=n.getFullYear(),u=n.getDate();else if(1===arguments.length){if(!l(e))throw new TypeError(be("1Q9AW",e));o=(n=e).getMonth()+1,c=n.getFullYear(),u=n.getDate()}else{if(!X(e)&&!le(e))throw new TypeError(be("1Q9AX",e));if(!le(r))throw new TypeError(be("1Q97f",r));if(!le(t))throw new TypeError(be("1Q92z",t));o=e,u=r,c=t}if(i=function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(l(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!X(e)&&!le(e))throw new TypeError(M("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=ge(),n=e}else{if(!X(e)&&!le(e))throw new TypeError(M("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!le(r))throw new TypeError(M("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(le(n)&&(n<1||n>12))throw new RangeError(M("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=fe(n.toString()),void 0===(t=he[n]))throw new Error(M("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 28===t&&de(i)&&(t+=1),t}(o,c),u<1||u>i)throw new RangeError(be("1Q9Dz",i,u));for(o=fe(o.toString()),o=ye[o],a=0,s=0;s<o-1;s++)a+=me[s],1===s&&de(c)&&(a+=1);return a+=u}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dayOfYear=r();
//# sourceMappingURL=index.js.map
