!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){window.SoundPlayer=function(){var e=[],n=[],t=null,r=null;return{add_sounds:function(n){e.push(n)},play:function(o){if(r&&r.played&&r.pause(),n.length>=e.length)alert("All the sounds played.");else{for(var u=Math.floor(Math.random()*e.length);-1!==n.indexOf(u);)u=Math.floor(Math.random()*e.length);n.push(u),t=u;var l=1;(r=new Audio(e[t])).onended=function(){-1!==e[t].indexOf("loop")&&l<2?(l+=1,r.play()):r.onended=function(){o.callback&&"function"==typeof o.callback&&o.callback()},r.play()},r.play()}},getPlayingNumber:function(){return t},getPlayedNumber:function(){return n.length},getTotalNumber:function(){return e.length}}}}]);