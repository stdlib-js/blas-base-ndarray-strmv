"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var g=l(function(S,d){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),c=require('@stdlib/ndarray-base-strides/dist'),f=require('@stdlib/ndarray-base-stride/dist'),n=require('@stdlib/ndarray-base-offset/dist'),q=require('@stdlib/ndarray-base-data-buffer/dist'),u=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),m=require('@stdlib/blas-base-strmv/dist').ndarray;function p(e){var r,a,s,v,t,i;return t=e[0],i=e[1],a=u(e[2]),r=u(e[3]),s=u(e[4]),v=c(t,!1),m(a,r,s,o(t,0),q(t),v[0],v[1],n(t),q(i),f(i,0),n(i)),i}d.exports=p
});var x=g();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
