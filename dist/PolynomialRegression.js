!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r.r(e);var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,i;return e=t,(r=[{key:"backwardSubstitution",value:function(t,e,r,n){if(r<0||n<0)return e;for(var i=t.length,a=t[0].length-1,o=0,u=0,f=a-1;f>=n;f--)f===n?o=t[r][a]/t[r][f]:(t[r][a]-=t[r][f]*e[i-1-u],u++);return e[r]=o,this.backwardSubstitution(t,e,r-1,n-1)}},{key:"combineMatrices",value:function(t,e){for(var r=e.length,n=t[0].length,i=[],a=0;a<r;a++){i.push([]);for(var o=0;o<=n;o++)i[a][o]=o===n?e[a]:t[a][o]}return i}},{key:"forwardElimination",value:function(t){for(var e=t.length,r=t[0].length,n=[],i=0;i<e;i++){n.push([]);for(var a=0;a<r;a++)n[i][a]=t[i][a]}for(var o=0;o<e-1;o++)for(var u=o;u<e-1;u++)for(var f=n[u+1][o]/n[o][o],l=0;l<r;l++)n[u+1][l]=n[u+1][l]-f*n[o][l];return n}},{key:"gaussianJordanElimination",value:function(t,e){var r=this.combineMatrices(t,e),n=this.forwardElimination(r);return this.backwardSubstitution(n,[],n.length-1,n[0].length-2)}},{key:"identityMatrix",value:function(t){for(var e=t.length,r=t[0].length,n=[[]],i=0;i<e;i++)for(var a=0;a<r;a++)n[i][a]=a==i?1:0;return n}},{key:"matrixProduct",value:function(t,e){var r=t[0].length,n=e.length;if(r!=n)return!1;for(var i=[[]],a=0;a<n;a++)for(var o=0;o<r;o++)i[a][o]=this.doMultiplication(t,e,a,o,r);return i}},{key:"doMultiplication",value:function(t,e,r,n,i){for(var a=0,o=0;a<i;)o+=t[r][a]*e[a][n],a++;return o}},{key:"multiplyRow",value:function(t,e,r){for(var n=t.length,i=t[0].length,a=[[]],o=0;o<n;o++)for(var u=0;u<i;u++)a[o][u]=o==e?t[o][u]*r:t[o][u];return a}}])&&n(e.prototype,r),i&&n(e,i),t}();var a=function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=r};function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}r.d(e,"default",function(){return f});var f=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=e,this.degree=r,this.matrix=new i,this.leftMatrix=[],this.rightMatrix=[],this.generateLeftMatrix(),this.generateRightMatrix()}return u(t,null,[{key:"read",value:function(e,r){return new t(e.map(function(t){return new a(t.x,t.y)}),r)}}]),u(t,[{key:"sumX",value:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n].x,e);return r}},{key:"sumXTimesY",value:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n].x,e)*t[n].y;return r}},{key:"sumY",value:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n].y,e);return r}},{key:"generateLeftMatrix",value:function(){for(var t=0;t<=this.degree;t++){this.leftMatrix.push([]);for(var e=0;e<=this.degree;e++)this.leftMatrix[t][e]=0===t&&0===e?this.data.length:this.sumX(this.data,t+e)}}},{key:"generateRightMatrix",value:function(){for(var t=0;t<=this.degree;t++)this.rightMatrix[t]=0===t?this.sumY(this.data,1):this.sumXTimesY(this.data,t)}},{key:"getTerms",value:function(){return this.matrix.gaussianJordanElimination(this.leftMatrix,this.rightMatrix)}},{key:"predictY",value:function(t,e){for(var r=0,n=t.length-1;n>=0;n--)r+=0===n?t[n]:t[n]*Math.pow(e,n);return r}}]),t}()}])});