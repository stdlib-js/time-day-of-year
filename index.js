// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"",a=r()?function(e){var r,a,o,u,c;if(null==e)return t.call(e);a=e[i],c=i,r=null!=(u=e)&&n.call(u,c);try{e[i]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[i]=a:delete e[i],o}:function(e){return t.call(e)},o=Date.prototype.getDay,u=r();function c(e){return"object"==typeof e&&(e instanceof Date||(u?function(e){try{return o.call(e),!0}catch(e){return!1}}(e):"[object Date]"===a(e)))}var l="function"==typeof Object.defineProperty?Object.defineProperty:null,s=Object.defineProperty,p=Object.prototype,f=p.toString,g=p.__defineGetter__,d=p.__defineSetter__,h=p.__lookupGetter__,b=p.__lookupSetter__,y=function(){try{return l({},"x",{}),!0}catch(e){return!1}}()?s:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===f.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===f.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(h.call(e,r)||b.call(e,r)?(n=e.__proto__,e.__proto__=p,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&g&&g.call(e,r,t.get),o&&d&&d.call(e,r,t.set),e};function m(e,r,t){y(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function v(e){return"string"==typeof e}var w=String.prototype.valueOf,j=r();function E(e){return"object"==typeof e&&(e instanceof String||(j?function(e){try{return w.call(e),!0}catch(e){return!1}}(e):"[object String]"===a(e)))}function _(e){return v(e)||E(e)}function S(e){return"number"==typeof e}m(_,"isPrimitive",v),m(_,"isObject",E);var T=Number,F=T.prototype.toString,V=r();function x(e){return"object"==typeof e&&(e instanceof T||(V?function(e){try{return F.call(e),!0}catch(e){return!1}}(e):"[object Number]"===a(e)))}function I(e){return S(e)||x(e)}m(I,"isPrimitive",S),m(I,"isObject",x);var k=Number.POSITIVE_INFINITY,O=T.NEGATIVE_INFINITY,D=Math.floor;function A(e){return e<k&&e>O&&D(r=e)===r;var r}function N(e){return S(e)&&A(e)}function P(e){return x(e)&&A(e.valueOf())}function Y(e){return N(e)||P(e)}function $(e){return"number"==typeof e}function C(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function R(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+C(i):C(i)+e,n&&(e="-"+e)),e}m(Y,"isPrimitive",N),m(Y,"isObject",P);var M=String.prototype.toLowerCase,G=String.prototype.toUpperCase;function Z(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!$(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=R(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=R(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===G.call(e.specifier)?G.call(t):M.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function L(e){return"string"==typeof e}var W=Math.abs,U=String.prototype.toLowerCase,z=String.prototype.toUpperCase,B=String.prototype.replace,X=/e\+(\d)$/,q=/e-(\d)$/,H=/^(\d+)$/,J=/^(\d+)e/,K=/\.0$/,Q=/\.0*e/,ee=/(\..*[^0])0*e/;function re(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!$(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":W(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=B.call(t,ee,"$1e"),t=B.call(t,Q,"e"),t=B.call(t,K,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=B.call(t,X,"e+0$1"),t=B.call(t,q,"e-0$1"),e.alternate&&(t=B.call(t,H,"$1."),t=B.call(t,J,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===z.call(e.specifier)?z.call(t):U.call(t)}function te(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ne(e,r,t){var n=r-e.length;return n<0?e:e=t?e+te(n):te(n)+e}var ie=String.fromCharCode,ae=isNaN,oe=Array.isArray;function ue(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ce(e){var r,t,n,i,a,o,u,c,l;if(!oe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",u=1,c=0;c<e.length;c++)if(L(n=e[c]))o+=n;else{if(r=void 0!==n.precision,!(n=ue(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,ae(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,ae(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Z(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!ae(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ae(a)?String(n.arg):ie(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=re(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=R(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ne(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o}var le=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function se(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function pe(e){var r,t,n,i;for(t=[],i=0,n=le.exec(e);n;)(r=e.slice(i,le.lastIndex-n[0].length)).length&&t.push(r),t.push(se(n)),i=le.lastIndex,n=le.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function fe(e){return"string"==typeof e}function ge(e){var r,t,n;if(!fe(e))throw new TypeError(ge("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=pe(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return ce.apply(null,t)}function de(e){if(!v(e))throw new TypeError(ge("invalid argument. Must provide a string. Value: `%s`.",e));return e.toLowerCase()}function he(e){var r;if(arguments.length)if(c(e))r=e.getFullYear();else{if(!N(e))return!1;r=e}else r=(new Date).getFullYear();return r%100==0?r%400==0:r%4==0}var be={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31,jan:31,january:31,feb:28,february:28,mar:31,march:31,apr:30,april:30,may:31,jun:30,june:30,jul:31,july:31,aug:31,august:31,sep:30,september:30,oct:31,october:31,nov:30,november:30,dec:31,december:31};function ye(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(c(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!v(e)&&!N(e))throw new TypeError(ge("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=(new Date).getFullYear(),n=e}else{if(!v(e)&&!N(e))throw new TypeError(ge("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!N(r))throw new TypeError(ge("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(N(n)&&(n<1||n>12))throw new RangeError(ge("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=de(n.toString()),void 0===(t=be[n]))throw new Error(ge("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 28===t&&he(i)&&(t+=1),t}function me(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}var ve={1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,jan:1,january:1,feb:2,february:2,mar:3,march:3,apr:4,april:4,may:5,jun:6,june:6,jul:7,july:7,aug:8,august:8,sep:9,september:9,oct:10,october:10,nov:11,november:11,dec:12,december:12},we=[31,28,31,30,31,30,31,31,30,31,30,31];return function(e,r,t){var n,i,a,o,u,l,s;if(0===arguments.length)o=(n=new Date).getMonth()+1,u=n.getFullYear(),l=n.getDate();else if(1===arguments.length){if(!c(e))throw new TypeError(me("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));o=(n=e).getMonth()+1,u=n.getFullYear(),l=n.getDate()}else{if(!v(e)&&!N(e))throw new TypeError(me("0hvBF",e));if(!N(r))throw new TypeError(me("0hv7x",r));if(!N(t))throw new TypeError(me("0hv3B",t));o=e,l=r,u=t}if(i=ye(o,u),l<1||l>i)throw new RangeError(me("invalid argument. Day number must be on the interval: [1, %u]. Value: `%d`.",i,l));for(o=de(o.toString()),o=ve[o],a=0,s=0;s<o-1;s++)a+=we[s],1===s&&he(u)&&(a+=1);return a+=l}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dayOfYear=r();
//# sourceMappingURL=index.js.map
