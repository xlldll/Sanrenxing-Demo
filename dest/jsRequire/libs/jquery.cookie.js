/*! grunt-0.0.1.js 压缩于：2017-04-08 11:11 */

/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(a){"function"==typeof define&&define.amd?
// AMD. Register as anonymous module.
define(["jquery"],a):
// Browser globals.
a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(
// This is a quoted cookie as according to RFC2068, unescape...
a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{
// Replace server-side written pluses with spaces.
// If we can't decode the cookie, ignore it, it's unusable.
a=decodeURIComponent(a.replace(g," "))}catch(a){return}try{
// If we can't parse the cookie, ignore it, it's unusable.
return h.json?JSON.parse(a):a}catch(a){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){
// Write
if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setDate(k.getDate()+j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",// use expires attribute, max-age is not supported by IE
i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;n<o;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){
// If second argument (value) is a function it's a converter...
l=f(r,g);break}
// Prevent storing a cookie that we couldn't decode.
e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){
// Must not alter options, thus extending a fresh object...
return void 0!==a.cookie(b)&&(a.cookie(b,"",a.extend({},c,{expires:-1})),!0)}});
/*! grunt 最后修改于： 2017-04-08 */