/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick',
                '*:not(.slick-arrow)', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2019 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.6
*/

(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        }
    };
    __webpack_require__.r = function(exports) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (mode & 1) value = __webpack_require__(value);
        if (mode & 8) return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module["default"];
        } : function getModuleExports() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 0);
})([ function(module, exports, __webpack_require__) {
    "use strict";
    __webpack_require__(1);
    __webpack_require__(6);
    __webpack_require__(7);
    var _inputmask = __webpack_require__(2);
    var _inputmask2 = _interopRequireDefault(_inputmask);
    var _inputmask3 = __webpack_require__(3);
    var _inputmask4 = _interopRequireDefault(_inputmask3);
    var _jquery = __webpack_require__(4);
    var _jquery2 = _interopRequireDefault(_jquery);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    if (_inputmask4.default === _jquery2.default) {
        __webpack_require__(8);
    }
    window.Inputmask = _inputmask2.default;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function(factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
            __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    })(function(Inputmask) {
        Inputmask.extendDefinitions({
            A: {
                validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                casing: "upper"
            }
        });
        Inputmask.extendAliases({
            cssunit: {
                regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
            },
            url: {
                regex: "(https?|ftp)//.*",
                autoUnmask: false
            },
            ip: {
                mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
                definitions: {
                    i: {
                        validator: function validator(chrs, maskset, pos, strict, opts) {
                            if (pos - 1 > -1 && maskset.buffer[pos - 1] !== ".") {
                                chrs = maskset.buffer[pos - 1] + chrs;
                                if (pos - 2 > -1 && maskset.buffer[pos - 2] !== ".") {
                                    chrs = maskset.buffer[pos - 2] + chrs;
                                } else chrs = "0" + chrs;
                            } else chrs = "00" + chrs;
                            return new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
                        }
                    }
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: false,
                casing: "lower",
                onBeforePaste: function onBeforePaste(pastedValue, opts) {
                    pastedValue = pastedValue.toLowerCase();
                    return pastedValue.replace("mailto:", "");
                },
                definitions: {
                    "*": {
                        validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]"
                    }
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        casing: "upper"
                    }
                },
                clearIncomplete: true,
                autoUnmask: true
            }
        });
        return Inputmask;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function(factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(3), __webpack_require__(5) ], 
            __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    })(function($, window, undefined) {
        var document = window.document, ua = navigator.userAgent, ie = ua.indexOf("MSIE ") > 0 || ua.indexOf("Trident/") > 0, mobile = isInputEventSupported("touchstart"), iemobile = /iemobile/i.test(ua), iphone = /iphone/i.test(ua) && !iemobile;
        function Inputmask(alias, options, internal) {
            if (!(this instanceof Inputmask)) {
                return new Inputmask(alias, options, internal);
            }
            this.el = undefined;
            this.events = {};
            this.maskset = undefined;
            this.refreshValue = false;
            if (internal !== true) {
                if ($.isPlainObject(alias)) {
                    options = alias;
                } else {
                    options = options || {};
                    if (alias) options.alias = alias;
                }
                this.opts = $.extend(true, {}, this.defaults, options);
                this.noMasksCache = options && options.definitions !== undefined;
                this.userOptions = options || {};
                this.isRTL = this.opts.numericInput;
                resolveAlias(this.opts.alias, options, this.opts);
            }
        }
        Inputmask.prototype = {
            dataAttribute: "data-inputmask",
            defaults: {
                placeholder: "_",
                optionalmarker: [ "[", "]" ],
                quantifiermarker: [ "{", "}" ],
                groupmarker: [ "(", ")" ],
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                regex: null,
                oncomplete: $.noop,
                onincomplete: $.noop,
                oncleared: $.noop,
                repeat: 0,
                greedy: false,
                autoUnmask: false,
                removeMaskOnSubmit: false,
                clearMaskOnLostFocus: true,
                insertMode: true,
                clearIncomplete: false,
                alias: null,
                onKeyDown: $.noop,
                onBeforeMask: null,
                onBeforePaste: function onBeforePaste(pastedValue, opts) {
                    return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
                },
                onBeforeWrite: null,
                onUnMask: null,
                showMaskOnFocus: true,
                showMaskOnHover: true,
                onKeyValidation: $.noop,
                skipOptionalPartCharacter: " ",
                numericInput: false,
                rightAlign: false,
                undoOnEscape: true,
                radixPoint: "",
                _radixDance: false,
                groupSeparator: "",
                keepStatic: null,
                positionCaretOnTab: true,
                tabThrough: false,
                supportsInputType: [ "text", "tel", "url", "password", "search" ],
                ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                isComplete: null,
                preValidation: null,
                postValidation: null,
                staticDefinitionSymbol: undefined,
                jitMasking: false,
                nullable: true,
                inputEventOnly: false,
                noValuePatching: false,
                positionCaretOnClick: "lvp",
                casing: null,
                inputmode: "verbatim",
                colorMask: false,
                disablePredictiveText: false,
                importDataAttributes: true,
                shiftPositions: true
            },
            definitions: {
                9: {
                    validator: "[0-9\uff11-\uff19]",
                    definitionSymbol: "*"
                },
                a: {
                    validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                    definitionSymbol: "*"
                },
                "*": {
                    validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                }
            },
            aliases: {},
            masksCache: {},
            mask: function mask(elems) {
                var that = this;
                function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
                    if (opts.importDataAttributes === true) {
                        var importOption = function importOption(option, optionData) {
                            optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + "-" + option);
                            if (optionData !== null) {
                                if (typeof optionData === "string") {
                                    if (option.indexOf("on") === 0) optionData = window[optionData]; else if (optionData === "false") optionData = false; else if (optionData === "true") optionData = true;
                                }
                                userOptions[option] = optionData;
                            }
                        };
                        var attrOptions = npt.getAttribute(dataAttribute), option, dataoptions, optionData, p;
                        if (attrOptions && attrOptions !== "") {
                            attrOptions = attrOptions.replace(/'/g, '"');
                            dataoptions = JSON.parse("{" + attrOptions + "}");
                        }
                        if (dataoptions) {
                            optionData = undefined;
                            for (p in dataoptions) {
                                if (p.toLowerCase() === "alias") {
                                    optionData = dataoptions[p];
                                    break;
                                }
                            }
                        }
                        importOption("alias", optionData);
                        if (userOptions.alias) {
                            resolveAlias(userOptions.alias, userOptions, opts);
                        }
                        for (option in opts) {
                            if (dataoptions) {
                                optionData = undefined;
                                for (p in dataoptions) {
                                    if (p.toLowerCase() === option.toLowerCase()) {
                                        optionData = dataoptions[p];
                                        break;
                                    }
                                }
                            }
                            importOption(option, optionData);
                        }
                    }
                    $.extend(true, opts, userOptions);
                    if (npt.dir === "rtl" || opts.rightAlign) {
                        npt.style.textAlign = "right";
                    }
                    if (npt.dir === "rtl" || opts.numericInput) {
                        npt.dir = "ltr";
                        npt.removeAttribute("dir");
                        opts.isRTL = true;
                    }
                    return Object.keys(userOptions).length;
                }
                if (typeof elems === "string") {
                    elems = document.getElementById(elems) || document.querySelectorAll(elems);
                }
                elems = elems.nodeName ? [ elems ] : elems;
                $.each(elems, function(ndx, el) {
                    var scopedOpts = $.extend(true, {}, that.opts);
                    if (importAttributeOptions(el, scopedOpts, $.extend(true, {}, that.userOptions), that.dataAttribute)) {
                        var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                        if (maskset !== undefined) {
                            if (el.inputmask !== undefined) {
                                el.inputmask.opts.autoUnmask = true;
                                el.inputmask.remove();
                            }
                            el.inputmask = new Inputmask(undefined, undefined, true);
                            el.inputmask.opts = scopedOpts;
                            el.inputmask.noMasksCache = that.noMasksCache;
                            el.inputmask.userOptions = $.extend(true, {}, that.userOptions);
                            el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput;
                            el.inputmask.el = el;
                            el.inputmask.maskset = maskset;
                            $.data(el, "_inputmask_opts", scopedOpts);
                            maskScope.call(el.inputmask, {
                                action: "mask"
                            });
                        }
                    }
                });
                return elems && elems[0] ? elems[0].inputmask || this : this;
            },
            option: function option(options, noremask) {
                if (typeof options === "string") {
                    return this.opts[options];
                } else if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
                    $.extend(this.userOptions, options);
                    if (this.el && noremask !== true) {
                        this.mask(this.el);
                    }
                    return this;
                }
            },
            unmaskedvalue: function unmaskedvalue(value) {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    action: "unmaskedvalue",
                    value: value
                });
            },
            remove: function remove() {
                return maskScope.call(this, {
                    action: "remove"
                });
            },
            getemptymask: function getemptymask() {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    action: "getemptymask"
                });
            },
            hasMaskedValue: function hasMaskedValue() {
                return !this.opts.autoUnmask;
            },
            isComplete: function isComplete() {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    action: "isComplete"
                });
            },
            getmetadata: function getmetadata() {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    action: "getmetadata"
                });
            },
            isValid: function isValid(value) {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    action: "isValid",
                    value: value
                });
            },
            format: function format(value, metadata) {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    action: "format",
                    value: value,
                    metadata: metadata
                });
            },
            setValue: function setValue(value) {
                if (this.el) {
                    $(this.el).trigger("setvalue", [ value ]);
                }
            },
            analyseMask: function analyseMask(mask, regexMask, opts) {
                var tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, escaped = false, currentToken = new MaskToken(), match, m, openenings = [], maskTokens = [], openingToken, currentOpeningToken, alternator, lastMatch, groupToken;
                function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                    this.matches = [];
                    this.openGroup = isGroup || false;
                    this.alternatorGroup = false;
                    this.isGroup = isGroup || false;
                    this.isOptional = isOptional || false;
                    this.isQuantifier = isQuantifier || false;
                    this.isAlternator = isAlternator || false;
                    this.quantifier = {
                        min: 1,
                        max: 1
                    };
                }
                function insertTestDefinition(mtoken, element, position) {
                    position = position !== undefined ? position : mtoken.matches.length;
                    var prevMatch = mtoken.matches[position - 1];
                    if (regexMask) {
                        if (element.indexOf("[") === 0 || escaped && /\\d|\\s|\\w]/i.test(element) || element === ".") {
                            mtoken.matches.splice(position++, 0, {
                                fn: new RegExp(element, opts.casing ? "i" : ""),
                                optionality: false,
                                newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element,
                                casing: null,
                                def: element,
                                placeholder: undefined,
                                nativeDef: element
                            });
                        } else {
                            if (escaped) element = element[element.length - 1];
                            $.each(element.split(""), function(ndx, lmnt) {
                                prevMatch = mtoken.matches[position - 1];
                                mtoken.matches.splice(position++, 0, {
                                    fn: null,
                                    optionality: false,
                                    newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== lmnt && prevMatch.fn !== null,
                                    casing: null,
                                    def: opts.staticDefinitionSymbol || lmnt,
                                    placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,
                                    nativeDef: (escaped ? "'" : "") + lmnt
                                });
                            });
                        }
                        escaped = false;
                    } else {
                        var maskdef = (opts.definitions ? opts.definitions[element] : undefined) || Inputmask.prototype.definitions[element];
                        if (maskdef && !escaped) {
                            mtoken.matches.splice(position++, 0, {
                                fn: maskdef.validator ? typeof maskdef.validator == "string" ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function() {
                                    this.test = maskdef.validator;
                                }() : new RegExp("."),
                                optionality: false,
                                newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
                                casing: maskdef.casing,
                                def: maskdef.definitionSymbol || element,
                                placeholder: maskdef.placeholder,
                                nativeDef: element
                            });
                        } else {
                            mtoken.matches.splice(position++, 0, {
                                fn: null,
                                optionality: false,
                                newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element && prevMatch.fn !== null,
                                casing: null,
                                def: opts.staticDefinitionSymbol || element,
                                placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
                                nativeDef: (escaped ? "'" : "") + element
                            });
                            escaped = false;
                        }
                    }
                }
                function verifyGroupMarker(maskToken) {
                    if (maskToken && maskToken.matches) {
                        $.each(maskToken.matches, function(ndx, token) {
                            var nextToken = maskToken.matches[ndx + 1];
                            if ((nextToken === undefined || nextToken.matches === undefined || nextToken.isQuantifier === false) && token && token.isGroup) {
                                token.isGroup = false;
                                if (!regexMask) {
                                    insertTestDefinition(token, opts.groupmarker[0], 0);
                                    if (token.openGroup !== true) {
                                        insertTestDefinition(token, opts.groupmarker[1]);
                                    }
                                }
                            }
                            verifyGroupMarker(token);
                        });
                    }
                }
                function defaultCase() {
                    if (openenings.length > 0) {
                        currentOpeningToken = openenings[openenings.length - 1];
                        insertTestDefinition(currentOpeningToken, m);
                        if (currentOpeningToken.isAlternator) {
                            alternator = openenings.pop();
                            for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                                if (alternator.matches[mndx].isGroup) alternator.matches[mndx].isGroup = false;
                            }
                            if (openenings.length > 0) {
                                currentOpeningToken = openenings[openenings.length - 1];
                                currentOpeningToken.matches.push(alternator);
                            } else {
                                currentToken.matches.push(alternator);
                            }
                        }
                    } else {
                        insertTestDefinition(currentToken, m);
                    }
                }
                function reverseTokens(maskToken) {
                    function reverseStatic(st) {
                        if (st === opts.optionalmarker[0]) st = opts.optionalmarker[1]; else if (st === opts.optionalmarker[1]) st = opts.optionalmarker[0]; else if (st === opts.groupmarker[0]) st = opts.groupmarker[1]; else if (st === opts.groupmarker[1]) st = opts.groupmarker[0];
                        return st;
                    }
                    maskToken.matches = maskToken.matches.reverse();
                    for (var match in maskToken.matches) {
                        if (maskToken.matches.hasOwnProperty(match)) {
                            var intMatch = parseInt(match);
                            if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                                var qt = maskToken.matches[match];
                                maskToken.matches.splice(match, 1);
                                maskToken.matches.splice(intMatch + 1, 0, qt);
                            }
                            if (maskToken.matches[match].matches !== undefined) {
                                maskToken.matches[match] = reverseTokens(maskToken.matches[match]);
                            } else {
                                maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
                            }
                        }
                    }
                    return maskToken;
                }
                function groupify(matches) {
                    var groupToken = new MaskToken(true);
                    groupToken.openGroup = false;
                    groupToken.matches = matches;
                    return groupToken;
                }
                if (regexMask) {
                    opts.optionalmarker[0] = undefined;
                    opts.optionalmarker[1] = undefined;
                }
                while (match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask)) {
                    m = match[0];
                    if (regexMask) {
                        switch (m.charAt(0)) {
                          case "?":
                            m = "{0,1}";
                            break;

                          case "+":
                          case "*":
                            m = "{" + m + "}";
                            break;
                        }
                    }
                    if (escaped) {
                        defaultCase();
                        continue;
                    }
                    switch (m.charAt(0)) {
                      case "(?=":
                        break;

                      case "(?!":
                        break;

                      case "(?<=":
                        break;

                      case "(?<!":
                        break;

                      case opts.escapeChar:
                        escaped = true;
                        if (regexMask) {
                            defaultCase();
                        }
                        break;

                      case opts.optionalmarker[1]:
                      case opts.groupmarker[1]:
                        openingToken = openenings.pop();
                        openingToken.openGroup = false;
                        if (openingToken !== undefined) {
                            if (openenings.length > 0) {
                                currentOpeningToken = openenings[openenings.length - 1];
                                currentOpeningToken.matches.push(openingToken);
                                if (currentOpeningToken.isAlternator) {
                                    alternator = openenings.pop();
                                    for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                                        alternator.matches[mndx].isGroup = false;
                                        alternator.matches[mndx].alternatorGroup = false;
                                    }
                                    if (openenings.length > 0) {
                                        currentOpeningToken = openenings[openenings.length - 1];
                                        currentOpeningToken.matches.push(alternator);
                                    } else {
                                        currentToken.matches.push(alternator);
                                    }
                                }
                            } else {
                                currentToken.matches.push(openingToken);
                            }
                        } else defaultCase();
                        break;

                      case opts.optionalmarker[0]:
                        openenings.push(new MaskToken(false, true));
                        break;

                      case opts.groupmarker[0]:
                        openenings.push(new MaskToken(true));
                        break;

                      case opts.quantifiermarker[0]:
                        var quantifier = new MaskToken(false, false, true);
                        m = m.replace(/[{}]/g, "");
                        var mqj = m.split("|"), mq = mqj[0].split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = mq.length === 1 ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                        if (mq0 === "*" || mq0 === "+") {
                            mq0 = mq1 === "*" ? 0 : 1;
                        }
                        quantifier.quantifier = {
                            min: mq0,
                            max: mq1,
                            jit: mqj[1]
                        };
                        var matches = openenings.length > 0 ? openenings[openenings.length - 1].matches : currentToken.matches;
                        match = matches.pop();
                        if (match.isAlternator) {
                            matches.push(match);
                            matches = match.matches;
                            var groupToken = new MaskToken(true);
                            var tmpMatch = matches.pop();
                            matches.push(groupToken);
                            matches = groupToken.matches;
                            match = tmpMatch;
                        }
                        if (!match.isGroup) {
                            match = groupify([ match ]);
                        }
                        matches.push(match);
                        matches.push(quantifier);
                        break;

                      case opts.alternatormarker:
                        var groupQuantifier = function groupQuantifier(matches) {
                            var lastMatch = matches.pop();
                            if (lastMatch.isQuantifier) {
                                lastMatch = groupify([ matches.pop(), lastMatch ]);
                            }
                            return lastMatch;
                        };
                        if (openenings.length > 0) {
                            currentOpeningToken = openenings[openenings.length - 1];
                            var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                            if (currentOpeningToken.openGroup && (subToken.matches === undefined || subToken.isGroup === false && subToken.isAlternator === false)) {
                                lastMatch = openenings.pop();
                            } else {
                                lastMatch = groupQuantifier(currentOpeningToken.matches);
                            }
                        } else {
                            lastMatch = groupQuantifier(currentToken.matches);
                        }
                        if (lastMatch.isAlternator) {
                            openenings.push(lastMatch);
                        } else {
                            if (lastMatch.alternatorGroup) {
                                alternator = openenings.pop();
                                lastMatch.alternatorGroup = false;
                            } else {
                                alternator = new MaskToken(false, false, false, true);
                            }
                            alternator.matches.push(lastMatch);
                            openenings.push(alternator);
                            if (lastMatch.openGroup) {
                                lastMatch.openGroup = false;
                                var alternatorGroup = new MaskToken(true);
                                alternatorGroup.alternatorGroup = true;
                                openenings.push(alternatorGroup);
                            }
                        }
                        break;

                      default:
                        defaultCase();
                    }
                }
                while (openenings.length > 0) {
                    openingToken = openenings.pop();
                    currentToken.matches.push(openingToken);
                }
                if (currentToken.matches.length > 0) {
                    verifyGroupMarker(currentToken);
                    maskTokens.push(currentToken);
                }
                if (opts.numericInput || opts.isRTL) {
                    reverseTokens(maskTokens[0]);
                }
                return maskTokens;
            }
        };
        Inputmask.extendDefaults = function(options) {
            $.extend(true, Inputmask.prototype.defaults, options);
        };
        Inputmask.extendDefinitions = function(definition) {
            $.extend(true, Inputmask.prototype.definitions, definition);
        };
        Inputmask.extendAliases = function(alias) {
            $.extend(true, Inputmask.prototype.aliases, alias);
        };
        Inputmask.format = function(value, options, metadata) {
            return Inputmask(options).format(value, metadata);
        };
        Inputmask.unmask = function(value, options) {
            return Inputmask(options).unmaskedvalue(value);
        };
        Inputmask.isValid = function(value, options) {
            return Inputmask(options).isValid(value);
        };
        Inputmask.remove = function(elems) {
            if (typeof elems === "string") {
                elems = document.getElementById(elems) || document.querySelectorAll(elems);
            }
            elems = elems.nodeName ? [ elems ] : elems;
            $.each(elems, function(ndx, el) {
                if (el.inputmask) el.inputmask.remove();
            });
        };
        Inputmask.setValue = function(elems, value) {
            if (typeof elems === "string") {
                elems = document.getElementById(elems) || document.querySelectorAll(elems);
            }
            elems = elems.nodeName ? [ elems ] : elems;
            $.each(elems, function(ndx, el) {
                if (el.inputmask) el.inputmask.setValue(value); else $(el).trigger("setvalue", [ value ]);
            });
        };
        Inputmask.escapeRegex = function(str) {
            var specials = [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ];
            return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");
        };
        Inputmask.keyCode = {
            BACKSPACE: 8,
            BACKSPACE_SAFARI: 127,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            X: 88,
            CONTROL: 17
        };
        Inputmask.dependencyLib = $;
        function resolveAlias(aliasStr, options, opts) {
            var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
            if (aliasDefinition) {
                if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias, undefined, opts);
                $.extend(true, opts, aliasDefinition);
                $.extend(true, opts, options);
                return true;
            } else if (opts.mask === null) {
                opts.mask = aliasStr;
            }
            return false;
        }
        function generateMaskSet(opts, nocache) {
            function generateMask(mask, metadata, opts) {
                var regexMask = false;
                if (mask === null || mask === "") {
                    regexMask = opts.regex !== null;
                    if (regexMask) {
                        mask = opts.regex;
                        mask = mask.replace(/^(\^)(.*)(\$)$/, "$2");
                    } else {
                        regexMask = true;
                        mask = ".*";
                    }
                }
                if (mask.length === 1 && opts.greedy === false && opts.repeat !== 0) {
                    opts.placeholder = "";
                }
                if (opts.repeat > 0 || opts.repeat === "*" || opts.repeat === "+") {
                    var repeatStart = opts.repeat === "*" ? 0 : opts.repeat === "+" ? 1 : opts.repeat;
                    mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1];
                }
                var masksetDefinition, maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;
                if (Inputmask.prototype.masksCache[maskdefKey] === undefined || nocache === true) {
                    masksetDefinition = {
                        mask: mask,
                        maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
                        validPositions: {},
                        _buffer: undefined,
                        buffer: undefined,
                        tests: {},
                        excludes: {},
                        metadata: metadata,
                        maskLength: undefined,
                        jitOffset: {}
                    };
                    if (nocache !== true) {
                        Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition;
                        masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[maskdefKey]);
                    }
                } else masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[maskdefKey]);
                return masksetDefinition;
            }
            var ms;
            if ($.isFunction(opts.mask)) {
                opts.mask = opts.mask(opts);
            }
            if ($.isArray(opts.mask)) {
                if (opts.mask.length > 1) {
                    if (opts.keepStatic === null) {
                        opts.keepStatic = "auto";
                        for (var i = 0; i < opts.mask.length; i++) {
                            if (opts.mask[i].charAt(0) !== opts.mask[0].charAt(0)) {
                                opts.keepStatic = true;
                                break;
                            }
                        }
                    }
                    var altMask = opts.groupmarker[0];
                    $.each(opts.isRTL ? opts.mask.reverse() : opts.mask, function(ndx, msk) {
                        if (altMask.length > 1) {
                            altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0];
                        }
                        if (msk.mask !== undefined && !$.isFunction(msk.mask)) {
                            altMask += msk.mask;
                        } else {
                            altMask += msk;
                        }
                    });
                    altMask += opts.groupmarker[1];
                    return generateMask(altMask, opts.mask, opts);
                } else opts.mask = opts.mask.pop();
            }
            if (opts.mask && opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask)) {
                ms = generateMask(opts.mask.mask, opts.mask, opts);
            } else {
                ms = generateMask(opts.mask, opts.mask, opts);
            }
            return ms;
        }
        function isInputEventSupported(eventName) {
            var el = document.createElement("input"), evName = "on" + eventName, isSupported = evName in el;
            if (!isSupported) {
                el.setAttribute(evName, "return;");
                isSupported = typeof el[evName] === "function";
            }
            el = null;
            return isSupported;
        }
        function maskScope(actionObj, maskset, opts) {
            maskset = maskset || this.maskset;
            opts = opts || this.opts;
            var inputmask = this, el = this.el, isRTL = this.isRTL, undoValue, $el, skipKeyPressEvent = false, skipInputEvent = false, ignorable = false, maxLength, mouseEnter = false, colorMask, originalPlaceholder;
            function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
                var greedy = opts.greedy;
                if (clearOptionalTail) opts.greedy = false;
                minimalPos = minimalPos || 0;
                var maskTemplate = [], ndxIntlzr, pos = 0, test, testPos, lvp = getLastValidPosition();
                do {
                    if (baseOnInput === true && getMaskSet().validPositions[pos]) {
                        testPos = clearOptionalTail && getMaskSet().validPositions[pos].match.optionality === true && getMaskSet().validPositions[pos + 1] === undefined && (getMaskSet().validPositions[pos].generatedInput === true || getMaskSet().validPositions[pos].input == opts.skipOptionalPartCharacter && pos > 0) ? determineTestTemplate(pos, getTests(pos, ndxIntlzr, pos - 1)) : getMaskSet().validPositions[pos];
                        test = testPos.match;
                        ndxIntlzr = testPos.locator.slice();
                        maskTemplate.push(includeMode === true ? testPos.input : includeMode === false ? test.nativeDef : getPlaceholder(pos, test));
                    } else {
                        testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                        test = testPos.match;
                        ndxIntlzr = testPos.locator.slice();
                        var jitMasking = noJit === true ? false : opts.jitMasking !== false ? opts.jitMasking : test.jit;
                        if (jitMasking === false || jitMasking === undefined || typeof jitMasking === "number" && isFinite(jitMasking) && jitMasking > pos) {
                            maskTemplate.push(includeMode === false ? test.nativeDef : getPlaceholder(pos, test));
                        }
                    }
                    if (opts.keepStatic === "auto") {
                        if (test.newBlockMarker && test.fn !== null) {
                            opts.keepStatic = pos - 1;
                        }
                    }
                    pos++;
                } while ((maxLength === undefined || pos < maxLength) && (test.fn !== null || test.def !== "") || minimalPos > pos);
                if (maskTemplate[maskTemplate.length - 1] === "") {
                    maskTemplate.pop();
                }
                if (includeMode !== false || getMaskSet().maskLength === undefined) getMaskSet().maskLength = pos - 1;
                opts.greedy = greedy;
                return maskTemplate;
            }
            function getMaskSet() {
                return maskset;
            }
            function resetMaskSet(soft) {
                var maskset = getMaskSet();
                maskset.buffer = undefined;
                if (soft !== true) {
                    maskset.validPositions = {};
                    maskset.p = 0;
                }
            }
            function getLastValidPosition(closestTo, strict, validPositions) {
                var before = -1, after = -1, valids = validPositions || getMaskSet().validPositions;
                if (closestTo === undefined) closestTo = -1;
                for (var posNdx in valids) {
                    var psNdx = parseInt(posNdx);
                    if (valids[psNdx] && (strict || valids[psNdx].generatedInput !== true)) {
                        if (psNdx <= closestTo) before = psNdx;
                        if (psNdx >= closestTo) after = psNdx;
                    }
                }
                return before === -1 || before == closestTo ? after : after == -1 ? before : closestTo - before < after - closestTo ? before : after;
            }
            function getDecisionTaker(tst) {
                var decisionTaker = tst.locator[tst.alternation];
                if (typeof decisionTaker == "string" && decisionTaker.length > 0) {
                    decisionTaker = decisionTaker.split(",")[0];
                }
                return decisionTaker !== undefined ? decisionTaker.toString() : "";
            }
            function getLocator(tst, align) {
                var locator = (tst.alternation != undefined ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
                if (locator !== "") while (locator.length < align) {
                    locator += "0";
                }
                return locator;
            }
            function determineTestTemplate(pos, tests) {
                pos = pos > 0 ? pos - 1 : 0;
                var altTest = getTest(pos), targetLocator = getLocator(altTest), tstLocator, closest, bestMatch;
                for (var ndx = 0; ndx < tests.length; ndx++) {
                    var tst = tests[ndx];
                    tstLocator = getLocator(tst, targetLocator.length);
                    var distance = Math.abs(tstLocator - targetLocator);
                    if (closest === undefined || tstLocator !== "" && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && bestMatch.match.newBlockMarker === "master" && (!tst.match.optionality || !tst.match.newBlockMarker) || bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) {
                        closest = distance;
                        bestMatch = tst;
                    }
                }
                return bestMatch;
            }
            function getTestTemplate(pos, ndxIntlzr, tstPs) {
                return getMaskSet().validPositions[pos] || determineTestTemplate(pos, getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
            }
            function getTest(pos, tests) {
                if (getMaskSet().validPositions[pos]) {
                    return getMaskSet().validPositions[pos];
                }
                return (tests || getTests(pos))[0];
            }
            function positionCanMatchDefinition(pos, def) {
                var valid = false, tests = getTests(pos);
                for (var tndx = 0; tndx < tests.length; tndx++) {
                    if (tests[tndx].match && tests[tndx].match.def === def) {
                        valid = true;
                        break;
                    }
                }
                return valid;
            }
            function getTests(pos, ndxIntlzr, tstPs) {
                var maskTokens = getMaskSet().maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [ 0 ], matches = [], insertStop = false, latestMatch, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";
                function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                    function handleMatch(match, loopNdx, quantifierRecurse) {
                        function isFirstMatch(latestMatch, tokenGroup) {
                            var firstMatch = $.inArray(latestMatch, tokenGroup.matches) === 0;
                            if (!firstMatch) {
                                $.each(tokenGroup.matches, function(ndx, match) {
                                    if (match.isQuantifier === true) firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]); else if (match.hasOwnProperty("matches")) firstMatch = isFirstMatch(latestMatch, match);
                                    if (firstMatch) return false;
                                });
                            }
                            return firstMatch;
                        }
                        function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                            var bestMatch, indexPos;
                            if (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) {
                                $.each(getMaskSet().tests[pos] || [ getMaskSet().validPositions[pos] ], function(ndx, lmnt) {
                                    if (lmnt.mloc[alternateNdx]) {
                                        bestMatch = lmnt;
                                        return false;
                                    }
                                    var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation, ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                                    if ((indexPos === undefined || ndxPos < indexPos) && ndxPos !== -1) {
                                        bestMatch = lmnt;
                                        indexPos = ndxPos;
                                    }
                                });
                            }
                            if (bestMatch) {
                                var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation];
                                var locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                                return locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1);
                            } else {
                                return targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
                            }
                        }
                        function isSubsetOf(source, target) {
                            function expand(pattern) {
                                var expanded = [], start, end;
                                for (var i = 0, l = pattern.length; i < l; i++) {
                                    if (pattern.charAt(i) === "-") {
                                        end = pattern.charCodeAt(i + 1);
                                        while (++start < end) {
                                            expanded.push(String.fromCharCode(start));
                                        }
                                    } else {
                                        start = pattern.charCodeAt(i);
                                        expanded.push(pattern.charAt(i));
                                    }
                                }
                                return expanded.join("");
                            }
                            if (opts.regex && source.match.fn !== null && target.match.fn !== null) {
                                return expand(target.match.def.replace(/[\[\]]/g, "")).indexOf(expand(source.match.def.replace(/[\[\]]/g, ""))) !== -1;
                            }
                            return source.match.def === target.match.nativeDef;
                        }
                        function staticCanMatchDefinition(source, target) {
                            var sloc = source.locator.slice(source.alternation).join(""), tloc = target.locator.slice(target.alternation).join(""), canMatch = sloc == tloc;
                            canMatch = canMatch && source.match.fn === null && target.match.fn !== null ? target.match.fn.test(source.match.def, getMaskSet(), pos, false, opts, false) : false;
                            return canMatch;
                        }
                        function setMergeLocators(targetMatch, altMatch) {
                            if (altMatch === undefined || targetMatch.alternation === altMatch.alternation && targetMatch.locator[targetMatch.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) === -1) {
                                targetMatch.mloc = targetMatch.mloc || {};
                                var locNdx = targetMatch.locator[targetMatch.alternation];
                                if (locNdx === undefined) targetMatch.alternation = undefined; else {
                                    if (typeof locNdx === "string") locNdx = locNdx.split(",")[0];
                                    if (targetMatch.mloc[locNdx] === undefined) targetMatch.mloc[locNdx] = targetMatch.locator.slice();
                                    if (altMatch !== undefined) {
                                        for (var ndx in altMatch.mloc) {
                                            if (typeof ndx === "string") ndx = ndx.split(",")[0];
                                            if (targetMatch.mloc[ndx] === undefined) targetMatch.mloc[ndx] = altMatch.mloc[ndx];
                                        }
                                        targetMatch.locator[targetMatch.alternation] = Object.keys(targetMatch.mloc).join(",");
                                    }
                                    return true;
                                }
                            }
                            return false;
                        }
                        if (testPos > 500 && quantifierRecurse !== undefined) {
                            throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
                        }
                        if (testPos === pos && match.matches === undefined) {
                            matches.push({
                                match: match,
                                locator: loopNdx.reverse(),
                                cd: cacheDependency,
                                mloc: {}
                            });
                            return true;
                        } else if (match.matches !== undefined) {
                            if (match.isGroup && quantifierRecurse !== match) {
                                match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx, quantifierRecurse);
                                if (match) return true;
                            } else if (match.isOptional) {
                                var optionalToken = match;
                                match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                                if (match) {
                                    $.each(matches, function(ndx, mtch) {
                                        mtch.match.optionality = true;
                                    });
                                    latestMatch = matches[matches.length - 1].match;
                                    if (quantifierRecurse === undefined && isFirstMatch(latestMatch, optionalToken)) {
                                        insertStop = true;
                                        testPos = pos;
                                    } else return true;
                                }
                            } else if (match.isAlternator) {
                                var alternateToken = match, malternateMatches = [], maltMatches, currentMatches = matches.slice(), loopNdxCnt = loopNdx.length;
                                var altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
                                if (altIndex === -1 || typeof altIndex === "string") {
                                    var currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(), altIndexArr = [], amndx;
                                    if (typeof altIndex == "string") {
                                        altIndexArr = altIndex.split(",");
                                    } else {
                                        for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
                                            altIndexArr.push(amndx.toString());
                                        }
                                    }
                                    if (getMaskSet().excludes[pos]) {
                                        var altIndexArrClone = altIndexArr.slice();
                                        for (var i = 0, el = getMaskSet().excludes[pos].length; i < el; i++) {
                                            altIndexArr.splice(altIndexArr.indexOf(getMaskSet().excludes[pos][i].toString()), 1);
                                        }
                                        if (altIndexArr.length === 0) {
                                            getMaskSet().excludes[pos] = undefined;
                                            altIndexArr = altIndexArrClone;
                                        }
                                    }
                                    if (opts.keepStatic === true || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) altIndexArr = altIndexArr.slice(0, 1);
                                    var unMatchedAlternation = false;
                                    for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
                                        amndx = parseInt(altIndexArr[ndx]);
                                        matches = [];
                                        ndxInitializer = typeof altIndex === "string" ? resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice() : ndxInitializerClone.slice();
                                        if (alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [ amndx ].concat(loopNdx), quantifierRecurse)) match = true; else if (ndx === 0) {
                                            unMatchedAlternation = true;
                                        }
                                        maltMatches = matches.slice();
                                        testPos = currentPos;
                                        matches = [];
                                        for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                            var altMatch = maltMatches[ndx1], dropMatch = false;
                                            altMatch.match.jit = altMatch.match.jit || unMatchedAlternation;
                                            altMatch.alternation = altMatch.alternation || loopNdxCnt;
                                            setMergeLocators(altMatch);
                                            for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                                var altMatch2 = malternateMatches[ndx2];
                                                if (typeof altIndex !== "string" || altMatch.alternation !== undefined && $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr) !== -1) {
                                                    if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                                                        dropMatch = true;
                                                        setMergeLocators(altMatch2, altMatch);
                                                        break;
                                                    } else if (isSubsetOf(altMatch, altMatch2)) {
                                                        if (setMergeLocators(altMatch, altMatch2)) {
                                                            dropMatch = true;
                                                            malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                                        }
                                                        break;
                                                    } else if (isSubsetOf(altMatch2, altMatch)) {
                                                        setMergeLocators(altMatch2, altMatch);
                                                        break;
                                                    } else if (staticCanMatchDefinition(altMatch, altMatch2)) {
                                                        if (setMergeLocators(altMatch, altMatch2)) {
                                                            dropMatch = true;
                                                            malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                                        }
                                                        break;
                                                    }
                                                }
                                            }
                                            if (!dropMatch) {
                                                malternateMatches.push(altMatch);
                                            }
                                        }
                                    }
                                    matches = currentMatches.concat(malternateMatches);
                                    testPos = pos;
                                    insertStop = matches.length > 0;
                                    match = malternateMatches.length > 0;
                                    ndxInitializer = ndxInitializerClone.slice();
                                } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [ altIndex ].concat(loopNdx), quantifierRecurse);
                                if (match) return true;
                            } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) {
                                var qt = match;
                                for (var qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                                    var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                                    match = handleMatch(tokenGroup, [ qndx ].concat(loopNdx), tokenGroup);
                                    if (match) {
                                        latestMatch = matches[matches.length - 1].match;
                                        latestMatch.optionalQuantifier = qndx >= qt.quantifier.min;
                                        latestMatch.jit = (qndx || 1) * tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit;
                                        if (latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                                            insertStop = true;
                                            testPos = pos;
                                            break;
                                        }
                                        if (latestMatch.jit) {
                                            getMaskSet().jitOffset[pos] = tokenGroup.matches.indexOf(latestMatch);
                                        }
                                        return true;
                                    }
                                }
                            } else {
                                match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                                if (match) return true;
                            }
                        } else {
                            testPos++;
                        }
                    }
                    for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) {
                        if (maskToken.matches[tndx].isQuantifier !== true) {
                            var match = handleMatch(maskToken.matches[tndx], [ tndx ].concat(loopNdx), quantifierRecurse);
                            if (match && testPos === pos) {
                                return match;
                            } else if (testPos > pos) {
                                break;
                            }
                        }
                    }
                }
                function mergeLocators(pos, tests) {
                    var locator = [];
                    if (!$.isArray(tests)) tests = [ tests ];
                    if (tests.length > 0) {
                        if (tests[0].alternation === undefined) {
                            locator = determineTestTemplate(pos, tests.slice()).locator.slice();
                            if (locator.length === 0) locator = tests[0].locator.slice();
                        } else {
                            $.each(tests, function(ndx, tst) {
                                if (tst.def !== "") {
                                    if (locator.length === 0) locator = tst.locator.slice(); else {
                                        for (var i = 0; i < locator.length; i++) {
                                            if (tst.locator[i] && locator[i].toString().indexOf(tst.locator[i]) === -1) {
                                                locator[i] += "," + tst.locator[i];
                                            }
                                        }
                                    }
                                }
                            });
                        }
                    }
                    return locator;
                }
                if (pos > -1) {
                    if (ndxIntlzr === undefined) {
                        var previousPos = pos - 1, test;
                        while ((test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1) {
                            previousPos--;
                        }
                        if (test !== undefined && previousPos > -1) {
                            ndxInitializer = mergeLocators(previousPos, test);
                            cacheDependency = ndxInitializer.join("");
                            testPos = previousPos;
                        }
                    }
                    if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) {
                        return getMaskSet().tests[pos];
                    }
                    for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                        var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [ mtndx ]);
                        if (match && testPos === pos || testPos > pos) {
                            break;
                        }
                    }
                }
                if (matches.length === 0 || insertStop) {
                    matches.push({
                        match: {
                            fn: null,
                            optionality: false,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: [],
                        mloc: {},
                        cd: cacheDependency
                    });
                }
                if (ndxIntlzr !== undefined && getMaskSet().tests[pos]) {
                    return $.extend(true, [], matches);
                }
                getMaskSet().tests[pos] = $.extend(true, [], matches);
                return getMaskSet().tests[pos];
            }
            function getBufferTemplate() {
                if (getMaskSet()._buffer === undefined) {
                    getMaskSet()._buffer = getMaskTemplate(false, 1);
                    if (getMaskSet().buffer === undefined) getMaskSet().buffer = getMaskSet()._buffer.slice();
                }
                return getMaskSet()._buffer;
            }
            function getBuffer(noCache) {
                if (getMaskSet().buffer === undefined || noCache === true) {
                    getMaskSet().buffer = getMaskTemplate(true, getLastValidPosition(), true);
                    if (getMaskSet()._buffer === undefined) getMaskSet()._buffer = getMaskSet().buffer.slice();
                }
                return getMaskSet().buffer;
            }
            function refreshFromBuffer(start, end, buffer) {
                var i, p;
                if (start === true) {
                    resetMaskSet();
                    start = 0;
                    end = buffer.length;
                } else {
                    for (i = start; i < end; i++) {
                        delete getMaskSet().validPositions[i];
                    }
                }
                p = start;
                for (i = start; i < end; i++) {
                    resetMaskSet(true);
                    if (buffer[i] !== opts.skipOptionalPartCharacter) {
                        var valResult = isValid(p, buffer[i], true, true);
                        if (valResult !== false) {
                            resetMaskSet(true);
                            p = valResult.caret !== undefined ? valResult.caret : valResult.pos + 1;
                        }
                    }
                }
            }
            function casing(elem, test, pos) {
                switch (opts.casing || test.casing) {
                  case "upper":
                    elem = elem.toUpperCase();
                    break;

                  case "lower":
                    elem = elem.toLowerCase();
                    break;

                  case "title":
                    var posBefore = getMaskSet().validPositions[pos - 1];
                    if (pos === 0 || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE)) {
                        elem = elem.toUpperCase();
                    } else {
                        elem = elem.toLowerCase();
                    }
                    break;

                  default:
                    if ($.isFunction(opts.casing)) {
                        var args = Array.prototype.slice.call(arguments);
                        args.push(getMaskSet().validPositions);
                        elem = opts.casing.apply(this, args);
                    }
                }
                return elem;
            }
            function checkAlternationMatch(altArr1, altArr2, na) {
                var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = false, naArr = na !== undefined ? na.split(",") : [], naNdx;
                for (var i = 0; i < naArr.length; i++) {
                    if ((naNdx = altArr1.indexOf(naArr[i])) !== -1) {
                        altArr1.splice(naNdx, 1);
                    }
                }
                for (var alndx = 0; alndx < altArr1.length; alndx++) {
                    if ($.inArray(altArr1[alndx], altArrC) !== -1) {
                        isMatch = true;
                        break;
                    }
                }
                return isMatch;
            }
            function alternate(pos, c, strict, fromSetValid, rAltPos) {
                var validPsClone = $.extend(true, {}, getMaskSet().validPositions), lastAlt, alternation, isValidRslt = false, altPos, prevAltPos, i, validPos, decisionPos, lAltPos = rAltPos !== undefined ? rAltPos : getLastValidPosition();
                if (lAltPos === -1 && rAltPos === undefined) {
                    lastAlt = 0;
                    prevAltPos = getTest(lastAlt);
                    alternation = prevAltPos.alternation;
                } else {
                    for (;lAltPos >= 0; lAltPos--) {
                        altPos = getMaskSet().validPositions[lAltPos];
                        if (altPos && altPos.alternation !== undefined) {
                            if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) {
                                break;
                            }
                            lastAlt = lAltPos;
                            alternation = getMaskSet().validPositions[lastAlt].alternation;
                            prevAltPos = altPos;
                        }
                    }
                }
                if (alternation !== undefined) {
                    decisionPos = parseInt(lastAlt);
                    getMaskSet().excludes[decisionPos] = getMaskSet().excludes[decisionPos] || [];
                    if (pos !== true) {
                        getMaskSet().excludes[decisionPos].push(getDecisionTaker(prevAltPos));
                    }
                    var validInputsClone = [], staticInputsBeforePos = 0;
                    for (i = decisionPos; i < getLastValidPosition(undefined, true) + 1; i++) {
                        validPos = getMaskSet().validPositions[i];
                        if (validPos && validPos.generatedInput !== true) {
                            validInputsClone.push(validPos.input);
                        } else if (i < pos) staticInputsBeforePos++;
                        delete getMaskSet().validPositions[i];
                    }
                    while (getMaskSet().excludes[decisionPos] && getMaskSet().excludes[decisionPos].length < 10) {
                        var posOffset = staticInputsBeforePos * -1, validInputs = validInputsClone.slice();
                        getMaskSet().tests[decisionPos] = undefined;
                        resetMaskSet(true);
                        isValidRslt = true;
                        while (validInputs.length > 0) {
                            var input = validInputs.shift();
                            if (!(isValidRslt = isValid(getLastValidPosition(undefined, true) + 1, input, false, fromSetValid, true))) {
                                break;
                            }
                        }
                        if (isValidRslt && c !== undefined) {
                            var targetLvp = getLastValidPosition(pos) + 1;
                            for (i = decisionPos; i < getLastValidPosition() + 1; i++) {
                                validPos = getMaskSet().validPositions[i];
                                if ((validPos === undefined || validPos.match.fn == null) && i < pos + posOffset) {
                                    posOffset++;
                                }
                            }
                            pos = pos + posOffset;
                            isValidRslt = isValid(pos > targetLvp ? targetLvp : pos, c, strict, fromSetValid, true);
                        }
                        if (!isValidRslt) {
                            resetMaskSet();
                            prevAltPos = getTest(decisionPos);
                            getMaskSet().validPositions = $.extend(true, {}, validPsClone);
                            if (getMaskSet().excludes[decisionPos]) {
                                var decisionTaker = getDecisionTaker(prevAltPos);
                                if (getMaskSet().excludes[decisionPos].indexOf(decisionTaker) !== -1) {
                                    isValidRslt = alternate(pos, c, strict, fromSetValid, decisionPos - 1);
                                    break;
                                }
                                getMaskSet().excludes[decisionPos].push(decisionTaker);
                                for (i = decisionPos; i < getLastValidPosition(undefined, true) + 1; i++) {
                                    delete getMaskSet().validPositions[i];
                                }
                            } else {
                                isValidRslt = alternate(pos, c, strict, fromSetValid, decisionPos - 1);
                                break;
                            }
                        } else break;
                    }
                }
                getMaskSet().excludes[decisionPos] = undefined;
                return isValidRslt;
            }
            function isValid(pos, c, strict, fromSetValid, fromAlternate, validateOnly) {
                function isSelection(posObj) {
                    return isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end === 1 : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin === 1;
                }
                strict = strict === true;
                var maskPos = pos;
                if (pos.begin !== undefined) {
                    maskPos = isRTL ? pos.end : pos.begin;
                }
                function _isValid(position, c, strict) {
                    var rslt = false;
                    $.each(getTests(position), function(ndx, tst) {
                        var test = tst.match;
                        getBuffer(true);
                        rslt = test.fn != null ? test.fn.test(c, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && test.def !== "" ? {
                            c: getPlaceholder(position, test, true) || test.def,
                            pos: position
                        } : false;
                        if (rslt !== false) {
                            var elem = rslt.c !== undefined ? rslt.c : c, validatedPos = position;
                            elem = elem === opts.skipOptionalPartCharacter && test.fn === null ? getPlaceholder(position, test, true) || test.def : elem;
                            if (rslt.remove !== undefined) {
                                if (!$.isArray(rslt.remove)) rslt.remove = [ rslt.remove ];
                                $.each(rslt.remove.sort(function(a, b) {
                                    return b - a;
                                }), function(ndx, lmnt) {
                                    revalidateMask({
                                        begin: lmnt,
                                        end: lmnt + 1
                                    });
                                });
                            }
                            if (rslt.insert !== undefined) {
                                if (!$.isArray(rslt.insert)) rslt.insert = [ rslt.insert ];
                                $.each(rslt.insert.sort(function(a, b) {
                                    return a - b;
                                }), function(ndx, lmnt) {
                                    isValid(lmnt.pos, lmnt.c, true, fromSetValid);
                                });
                            }
                            if (rslt !== true && rslt.pos !== undefined && rslt.pos !== position) {
                                validatedPos = rslt.pos;
                            }
                            if (rslt !== true && rslt.pos === undefined && rslt.c === undefined) {
                                return false;
                            }
                            if (!revalidateMask(pos, $.extend({}, tst, {
                                input: casing(elem, test, validatedPos)
                            }), fromSetValid, validatedPos)) {
                                rslt = false;
                            }
                            return false;
                        }
                    });
                    return rslt;
                }
                var result = true, positionsClone = $.extend(true, {}, getMaskSet().validPositions);
                if ($.isFunction(opts.preValidation) && !strict && fromSetValid !== true && validateOnly !== true) {
                    result = opts.preValidation(getBuffer(), maskPos, c, isSelection(pos), opts, getMaskSet());
                }
                if (result === true) {
                    trackbackPositions(undefined, maskPos, true);
                    if (maxLength === undefined || maskPos < maxLength) {
                        result = _isValid(maskPos, c, strict);
                        if ((!strict || fromSetValid === true) && result === false && validateOnly !== true) {
                            var currentPosValid = getMaskSet().validPositions[maskPos];
                            if (currentPosValid && currentPosValid.match.fn === null && (currentPosValid.match.def === c || c === opts.skipOptionalPartCharacter)) {
                                result = {
                                    caret: seekNext(maskPos)
                                };
                            } else {
                                if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && (!isMask(maskPos, true) || getMaskSet().jitOffset[maskPos])) {
                                    if (getMaskSet().jitOffset[maskPos] && getMaskSet().validPositions[seekNext(maskPos)] === undefined) {
                                        result = isValid(maskPos + getMaskSet().jitOffset[maskPos], c, strict);
                                        if (result !== false) result.caret = maskPos;
                                    } else for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) {
                                        result = _isValid(nPos, c, strict);
                                        if (result !== false) {
                                            result = trackbackPositions(maskPos, result.pos !== undefined ? result.pos : nPos) || result;
                                            maskPos = nPos;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (result === false && opts.keepStatic !== false && (opts.regex == null || isComplete(getBuffer())) && !strict && fromAlternate !== true) {
                        result = alternate(maskPos, c, strict, fromSetValid);
                    }
                    if (result === true) {
                        result = {
                            pos: maskPos
                        };
                    }
                }
                if ($.isFunction(opts.postValidation) && result !== false && !strict && fromSetValid !== true && validateOnly !== true) {
                    var postResult = opts.postValidation(getBuffer(true), pos.begin !== undefined ? isRTL ? pos.end : pos.begin : pos, result, opts);
                    if (postResult !== undefined) {
                        if (postResult.refreshFromBuffer && postResult.buffer) {
                            var refresh = postResult.refreshFromBuffer;
                            refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, postResult.buffer);
                        }
                        result = postResult === true ? result : postResult;
                    }
                }
                if (result && result.pos === undefined) {
                    result.pos = maskPos;
                }
                if (result === false || validateOnly === true) {
                    resetMaskSet(true);
                    getMaskSet().validPositions = $.extend(true, {}, positionsClone);
                }
                return result;
            }
            function trackbackPositions(originalPos, newPos, fillOnly) {
                var result;
                if (originalPos === undefined) {
                    for (originalPos = newPos - 1; originalPos > 0; originalPos--) {
                        if (getMaskSet().validPositions[originalPos]) break;
                    }
                }
                for (var ps = originalPos; ps < newPos; ps++) {
                    if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, true)) {
                        var vp = ps == 0 ? getTest(ps) : getMaskSet().validPositions[ps - 1];
                        if (vp) {
                            var tests = getTests(ps).slice();
                            if (tests[tests.length - 1].match.def === "") tests.pop();
                            var bestMatch = determineTestTemplate(ps, tests);
                            bestMatch = $.extend({}, bestMatch, {
                                input: getPlaceholder(ps, bestMatch.match, true) || bestMatch.match.def
                            });
                            bestMatch.generatedInput = true;
                            revalidateMask(ps, bestMatch, true);
                            if (fillOnly !== true) {
                                var cvpInput = getMaskSet().validPositions[newPos].input;
                                getMaskSet().validPositions[newPos] = undefined;
                                result = isValid(newPos, cvpInput, true, true);
                            }
                        }
                    }
                }
                return result;
            }
            function revalidateMask(pos, validTest, fromSetValid, validatedPos) {
                function IsEnclosedStatic(pos, valids, selection) {
                    var posMatch = valids[pos];
                    if (posMatch !== undefined && (posMatch.match.fn === null && posMatch.match.optionality !== true || posMatch.input === opts.radixPoint)) {
                        var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && valids[pos - 1].match.fn === null && valids[pos - 1] : valids[pos - 1], nextMatch = selection.end > pos + 1 ? valids[pos + 1] && valids[pos + 1].match.fn === null && valids[pos + 1] : valids[pos + 1];
                        return prevMatch && nextMatch;
                    }
                    return false;
                }
                var begin = pos.begin !== undefined ? pos.begin : pos, end = pos.end !== undefined ? pos.end : pos;
                if (pos.begin > pos.end) {
                    begin = pos.end;
                    end = pos.begin;
                }
                validatedPos = validatedPos !== undefined ? validatedPos : begin;
                if (begin !== end || opts.insertMode && getMaskSet().validPositions[validatedPos] !== undefined && fromSetValid === undefined) {
                    var positionsClone = $.extend(true, {}, getMaskSet().validPositions), lvp = getLastValidPosition(undefined, true), i;
                    getMaskSet().p = begin;
                    for (i = lvp; i >= begin; i--) {
                        if (getMaskSet().validPositions[i] && getMaskSet().validPositions[i].match.nativeDef === "+") {
                            opts.isNegative = false;
                        }
                        delete getMaskSet().validPositions[i];
                    }
                    var valid = true, j = validatedPos, vps = getMaskSet().validPositions, needsValidation = false, posMatch = j, i = j;
                    if (validTest) {
                        getMaskSet().validPositions[validatedPos] = $.extend(true, {}, validTest);
                        posMatch++;
                        j++;
                        if (begin < end) i++;
                    }
                    for (;i <= lvp; i++) {
                        var t = positionsClone[i];
                        if (t !== undefined && (i >= end || i >= begin && t.generatedInput !== true && IsEnclosedStatic(i, positionsClone, {
                            begin: begin,
                            end: end
                        }))) {
                            while (getTest(posMatch).match.def !== "") {
                                if (needsValidation === false && positionsClone[posMatch] && positionsClone[posMatch].match.nativeDef === t.match.nativeDef) {
                                    getMaskSet().validPositions[posMatch] = $.extend(true, {}, positionsClone[posMatch]);
                                    getMaskSet().validPositions[posMatch].input = t.input;
                                    trackbackPositions(undefined, posMatch, true);
                                    j = posMatch + 1;
                                    valid = true;
                                } else if (opts.shiftPositions && positionCanMatchDefinition(posMatch, t.match.def)) {
                                    var result = isValid(posMatch, t.input, true, true);
                                    valid = result !== false;
                                    j = result.caret || result.insert ? getLastValidPosition() : posMatch + 1;
                                    needsValidation = true;
                                } else {
                                    valid = t.generatedInput === true || t.input === opts.radixPoint && opts.numericInput === true;
                                }
                                if (valid) break;
                                if (!valid && posMatch > end && isMask(posMatch, true) && (t.match.fn !== null || posMatch > getMaskSet().maskLength)) {
                                    break;
                                }
                                posMatch++;
                            }
                            if (getTest(posMatch).match.def == "") valid = false;
                            posMatch = j;
                        }
                        if (!valid) break;
                    }
                    if (!valid) {
                        getMaskSet().validPositions = $.extend(true, {}, positionsClone);
                        resetMaskSet(true);
                        return false;
                    }
                } else if (validTest) {
                    getMaskSet().validPositions[validatedPos] = $.extend(true, {}, validTest);
                }
                resetMaskSet(true);
                return true;
            }
            function isMask(pos, strict) {
                var test = getTestTemplate(pos).match;
                if (test.def === "") test = getTest(pos).match;
                if (test.fn != null) {
                    return test.fn;
                }
                if (strict !== true && pos > -1) {
                    var tests = getTests(pos);
                    return tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0);
                }
                return false;
            }
            function seekNext(pos, newBlock) {
                var position = pos + 1;
                while (getTest(position).match.def !== "" && (newBlock === true && (getTest(position).match.newBlockMarker !== true || !isMask(position)) || newBlock !== true && !isMask(position))) {
                    position++;
                }
                return position;
            }
            function seekPrevious(pos, newBlock) {
                var position = pos, tests;
                if (position <= 0) return 0;
                while (--position > 0 && (newBlock === true && getTest(position).match.newBlockMarker !== true || newBlock !== true && !isMask(position) && (tests = getTests(position), 
                tests.length < 2 || tests.length === 2 && tests[1].match.def === ""))) {}
                return position;
            }
            function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
                if (event && $.isFunction(opts.onBeforeWrite)) {
                    var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
                    if (result) {
                        if (result.refreshFromBuffer) {
                            var refresh = result.refreshFromBuffer;
                            refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, result.buffer || buffer);
                            buffer = getBuffer(true);
                        }
                        if (caretPos !== undefined) caretPos = result.caret !== undefined ? result.caret : caretPos;
                    }
                }
                if (input !== undefined) {
                    input.inputmask._valueSet(buffer.join(""));
                    if (caretPos !== undefined && (event === undefined || event.type !== "blur")) {
                        caret(input, caretPos);
                    } else renderColorMask(input, caretPos, buffer.length === 0);
                    if (triggerEvents === true) {
                        var $input = $(input), nptVal = input.inputmask._valueGet();
                        skipInputEvent = true;
                        $input.trigger("input");
                        setTimeout(function() {
                            if (nptVal === getBufferTemplate().join("")) {
                                $input.trigger("cleared");
                            } else if (isComplete(buffer) === true) {
                                $input.trigger("complete");
                            }
                        }, 0);
                    }
                }
            }
            function getPlaceholder(pos, test, returnPL) {
                test = test || getTest(pos).match;
                if (test.placeholder !== undefined || returnPL === true) {
                    return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
                } else if (test.fn === null) {
                    if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {
                        var tests = getTests(pos), staticAlternations = [], prevTest;
                        if (tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
                            for (var i = 0; i < tests.length; i++) {
                                if (tests[i].match.optionality !== true && tests[i].match.optionalQuantifier !== true && (tests[i].match.fn === null || prevTest === undefined || tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, true, opts) !== false)) {
                                    staticAlternations.push(tests[i]);
                                    if (tests[i].match.fn === null) prevTest = tests[i];
                                    if (staticAlternations.length > 1) {
                                        if (/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)) {
                                            return opts.placeholder.charAt(pos % opts.placeholder.length);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return test.def;
                }
                return opts.placeholder.charAt(pos % opts.placeholder.length);
            }
            function HandleNativePlaceholder(npt, value) {
                if (ie) {
                    if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || npt.placeholder === "")) {
                        var buffer = getBuffer().slice(), nptValue = npt.inputmask._valueGet();
                        if (nptValue !== value) {
                            var lvp = getLastValidPosition();
                            if (lvp === -1 && nptValue === getBufferTemplate().join("")) {
                                buffer = [];
                            } else if (lvp !== -1) {
                                clearOptionalTail(buffer);
                            }
                            writeBuffer(npt, buffer);
                        }
                    }
                } else if (npt.placeholder !== value) {
                    npt.placeholder = value;
                    if (npt.placeholder === "") npt.removeAttribute("placeholder");
                }
            }
            var EventRuler = {
                on: function on(input, eventName, eventHandler) {
                    var ev = function ev(e) {
                        var that = this;
                        if (that.inputmask === undefined && this.nodeName !== "FORM") {
                            var imOpts = $.data(that, "_inputmask_opts");
                            if (imOpts) new Inputmask(imOpts).mask(that); else EventRuler.off(that);
                        } else if (e.type !== "setvalue" && this.nodeName !== "FORM" && (that.disabled || that.readOnly && !(e.type === "keydown" && e.ctrlKey && e.keyCode === 67 || opts.tabThrough === false && e.keyCode === Inputmask.keyCode.TAB))) {
                            e.preventDefault();
                        } else {
                            switch (e.type) {
                              case "input":
                                if (skipInputEvent === true) {
                                    skipInputEvent = false;
                                    return e.preventDefault();
                                }
                                if (mobile) {
                                    var args = arguments;
                                    setTimeout(function() {
                                        eventHandler.apply(that, args);
                                        caret(that, that.inputmask.caretPos, undefined, true);
                                    }, 0);
                                    return false;
                                }
                                break;

                              case "keydown":
                                skipKeyPressEvent = false;
                                skipInputEvent = false;
                                break;

                              case "keypress":
                                if (skipKeyPressEvent === true) {
                                    return e.preventDefault();
                                }
                                skipKeyPressEvent = true;
                                break;

                              case "click":
                                if (iemobile || iphone) {
                                    var args = arguments;
                                    setTimeout(function() {
                                        eventHandler.apply(that, args);
                                    }, 0);
                                    return false;
                                }
                                break;
                            }
                            var returnVal = eventHandler.apply(that, arguments);
                            if (returnVal === false) {
                                e.preventDefault();
                                e.stopPropagation();
                            }
                            return returnVal;
                        }
                    };
                    input.inputmask.events[eventName] = input.inputmask.events[eventName] || [];
                    input.inputmask.events[eventName].push(ev);
                    if ($.inArray(eventName, [ "submit", "reset" ]) !== -1) {
                        if (input.form !== null) $(input.form).on(eventName, ev);
                    } else {
                        $(input).on(eventName, ev);
                    }
                },
                off: function off(input, event) {
                    if (input.inputmask && input.inputmask.events) {
                        var events;
                        if (event) {
                            events = [];
                            events[event] = input.inputmask.events[event];
                        } else {
                            events = input.inputmask.events;
                        }
                        $.each(events, function(eventName, evArr) {
                            while (evArr.length > 0) {
                                var ev = evArr.pop();
                                if ($.inArray(eventName, [ "submit", "reset" ]) !== -1) {
                                    if (input.form !== null) $(input.form).off(eventName, ev);
                                } else {
                                    $(input).off(eventName, ev);
                                }
                            }
                            delete input.inputmask.events[eventName];
                        });
                    }
                }
            };
            var EventHandlers = {
                keydownEvent: function keydownEvent(e) {
                    var input = this, $input = $(input), k = e.keyCode, pos = caret(input);
                    if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === Inputmask.keyCode.X && !isInputEventSupported("cut")) {
                        e.preventDefault();
                        handleRemove(input, k, pos);
                        writeBuffer(input, getBuffer(true), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join(""));
                    } else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) {
                        e.preventDefault();
                        var caretPos = seekNext(getLastValidPosition());
                        caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, true);
                    } else if (k === Inputmask.keyCode.HOME && !e.shiftKey || k === Inputmask.keyCode.PAGE_UP) {
                        e.preventDefault();
                        caret(input, 0, e.shiftKey ? pos.begin : 0, true);
                    } else if ((opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE || k === 90 && e.ctrlKey) && e.altKey !== true) {
                        checkVal(input, true, false, undoValue.split(""));
                        $input.trigger("click");
                    } else if (k === Inputmask.keyCode.INSERT && !(e.shiftKey || e.ctrlKey)) {
                        opts.insertMode = !opts.insertMode;
                        input.setAttribute("im-insert", opts.insertMode);
                    } else if (opts.tabThrough === true && k === Inputmask.keyCode.TAB) {
                        if (e.shiftKey === true) {
                            if (getTest(pos.begin).match.fn === null) {
                                pos.begin = seekNext(pos.begin);
                            }
                            pos.end = seekPrevious(pos.begin, true);
                            pos.begin = seekPrevious(pos.end, true);
                        } else {
                            pos.begin = seekNext(pos.begin, true);
                            pos.end = seekNext(pos.begin, true);
                            if (pos.end < getMaskSet().maskLength) pos.end--;
                        }
                        if (pos.begin < getMaskSet().maskLength) {
                            e.preventDefault();
                            caret(input, pos.begin, pos.end);
                        }
                    }
                    opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts);
                    ignorable = $.inArray(k, opts.ignorables) !== -1;
                },
                keypressEvent: function keypressEvent(e, checkval, writeOut, strict, ndx) {
                    var input = this, $input = $(input), k = e.which || e.charCode || e.keyCode;
                    if (checkval !== true && !(e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) {
                        if (k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("")) {
                            undoValue = getBuffer().join("");
                            setTimeout(function() {
                                $input.trigger("change");
                            }, 0);
                        }
                        return true;
                    } else {
                        if (k) {
                            if (k === 46 && e.shiftKey === false && opts.radixPoint !== "") k = opts.radixPoint.charCodeAt(0);
                            var pos = checkval ? {
                                begin: ndx,
                                end: ndx
                            } : caret(input), forwardPosition, c = String.fromCharCode(k), offset = 0;
                            if (opts._radixDance && opts.numericInput) {
                                var caretPos = getBuffer().indexOf(opts.radixPoint.charAt(0)) + 1;
                                if (pos.begin <= caretPos) {
                                    if (k === opts.radixPoint.charCodeAt(0)) offset = 1;
                                    pos.begin -= 1;
                                    pos.end -= 1;
                                }
                            }
                            getMaskSet().writeOutBuffer = true;
                            var valResult = isValid(pos, c, strict);
                            if (valResult !== false) {
                                resetMaskSet(true);
                                forwardPosition = valResult.caret !== undefined ? valResult.caret : seekNext(valResult.pos.begin ? valResult.pos.begin : valResult.pos);
                                getMaskSet().p = forwardPosition;
                            }
                            forwardPosition = (opts.numericInput && valResult.caret === undefined ? seekPrevious(forwardPosition) : forwardPosition) + offset;
                            if (writeOut !== false) {
                                setTimeout(function() {
                                    opts.onKeyValidation.call(input, k, valResult, opts);
                                }, 0);
                                if (getMaskSet().writeOutBuffer && valResult !== false) {
                                    var buffer = getBuffer();
                                    writeBuffer(input, buffer, forwardPosition, e, checkval !== true);
                                }
                            }
                            e.preventDefault();
                            if (checkval) {
                                if (valResult !== false) valResult.forwardPosition = forwardPosition;
                                return valResult;
                            }
                        }
                    }
                },
                pasteEvent: function pasteEvent(e) {
                    var input = this, ev = e.originalEvent || e, $input = $(input), inputValue = input.inputmask._valueGet(true), caretPos = caret(input), tempValue;
                    if (isRTL) {
                        tempValue = caretPos.end;
                        caretPos.end = caretPos.begin;
                        caretPos.begin = tempValue;
                    }
                    var valueBeforeCaret = inputValue.substr(0, caretPos.begin), valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                    if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("")) valueBeforeCaret = "";
                    if (valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("")) valueAfterCaret = "";
                    if (window.clipboardData && window.clipboardData.getData) {
                        inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;
                    } else if (ev.clipboardData && ev.clipboardData.getData) {
                        inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
                    } else return true;
                    var pasteValue = inputValue;
                    if ($.isFunction(opts.onBeforePaste)) {
                        pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts);
                        if (pasteValue === false) {
                            return e.preventDefault();
                        }
                        if (!pasteValue) {
                            pasteValue = inputValue;
                        }
                    }
                    checkVal(input, false, false, pasteValue.toString().split(""));
                    writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join(""));
                    return e.preventDefault();
                },
                inputFallBackEvent: function inputFallBackEvent(e) {
                    function radixPointHandler(input, inputValue, caretPos) {
                        if (inputValue.charAt(caretPos.begin - 1) === "." && opts.radixPoint !== "") {
                            inputValue = inputValue.split("");
                            inputValue[caretPos.begin - 1] = opts.radixPoint.charAt(0);
                            inputValue = inputValue.join("");
                        }
                        return inputValue;
                    }
                    function ieMobileHandler(input, inputValue, caretPos) {
                        if (iemobile) {
                            var inputChar = inputValue.replace(getBuffer().join(""), "");
                            if (inputChar.length === 1) {
                                var iv = inputValue.split("");
                                iv.splice(caretPos.begin, 0, inputChar);
                                inputValue = iv.join("");
                            }
                        }
                        return inputValue;
                    }
                    var input = this, inputValue = input.inputmask._valueGet();
                    if (getBuffer().join("") !== inputValue) {
                        var caretPos = caret(input);
                        inputValue = radixPointHandler(input, inputValue, caretPos);
                        inputValue = ieMobileHandler(input, inputValue, caretPos);
                        if (getBuffer().join("") !== inputValue) {
                            var buffer = getBuffer().join(""), offset = !opts.numericInput && inputValue.length > buffer.length ? -1 : 0, frontPart = inputValue.substr(0, caretPos.begin), backPart = inputValue.substr(caretPos.begin), frontBufferPart = buffer.substr(0, caretPos.begin + offset), backBufferPart = buffer.substr(caretPos.begin + offset);
                            var selection = caretPos, entries = "", isEntry = false;
                            if (frontPart !== frontBufferPart) {
                                var fpl = (isEntry = frontPart.length >= frontBufferPart.length) ? frontPart.length : frontBufferPart.length, i;
                                for (i = 0; frontPart.charAt(i) === frontBufferPart.charAt(i) && i < fpl; i++) {}
                                if (isEntry) {
                                    selection.begin = i - offset;
                                    entries += frontPart.slice(i, selection.end);
                                }
                            }
                            if (backPart !== backBufferPart) {
                                if (backPart.length > backBufferPart.length) {
                                    entries += backPart.slice(0, 1);
                                } else {
                                    if (backPart.length < backBufferPart.length) {
                                        selection.end += backBufferPart.length - backPart.length;
                                        if (!isEntry && opts.radixPoint !== "" && backPart === "" && frontPart.charAt(selection.begin + offset - 1) === opts.radixPoint) {
                                            selection.begin--;
                                            entries = opts.radixPoint;
                                        }
                                    }
                                }
                            }
                            writeBuffer(input, getBuffer(), {
                                begin: selection.begin + offset,
                                end: selection.end + offset
                            });
                            if (entries.length > 0) {
                                $.each(entries.split(""), function(ndx, entry) {
                                    var keypress = new $.Event("keypress");
                                    keypress.which = entry.charCodeAt(0);
                                    ignorable = false;
                                    EventHandlers.keypressEvent.call(input, keypress);
                                });
                            } else {
                                if (selection.begin === selection.end - 1) {
                                    selection.begin = seekPrevious(selection.begin + 1);
                                    if (selection.begin === selection.end - 1) {
                                        caret(input, selection.begin);
                                    } else {
                                        caret(input, selection.begin, selection.end);
                                    }
                                }
                                var keydown = new $.Event("keydown");
                                keydown.keyCode = opts.numericInput ? Inputmask.keyCode.BACKSPACE : Inputmask.keyCode.DELETE;
                                EventHandlers.keydownEvent.call(input, keydown);
                            }
                            e.preventDefault();
                        }
                    }
                },
                beforeInputEvent: function beforeInputEvent(e) {
                    if (e.cancelable) {
                        var input = this;
                        switch (e.inputType) {
                          case "insertText":
                            $.each(e.data.split(""), function(ndx, entry) {
                                var keypress = new $.Event("keypress");
                                keypress.which = entry.charCodeAt(0);
                                ignorable = false;
                                EventHandlers.keypressEvent.call(input, keypress);
                            });
                            return e.preventDefault();

                          case "deleteContentBackward":
                            var keydown = new $.Event("keydown");
                            keydown.keyCode = Inputmask.keyCode.BACKSPACE;
                            EventHandlers.keydownEvent.call(input, keydown);
                            return e.preventDefault();

                          case "deleteContentForward":
                            var keydown = new $.Event("keydown");
                            keydown.keyCode = Inputmask.keyCode.DELETE;
                            EventHandlers.keydownEvent.call(input, keydown);
                            return e.preventDefault();
                        }
                    }
                },
                setValueEvent: function setValueEvent(e) {
                    this.inputmask.refreshValue = false;
                    var input = this, value = e && e.detail ? e.detail[0] : arguments[1], value = value || input.inputmask._valueGet(true);
                    if ($.isFunction(opts.onBeforeMask)) value = opts.onBeforeMask.call(inputmask, value, opts) || value;
                    value = value.split("");
                    checkVal(input, true, false, value);
                    undoValue = getBuffer().join("");
                    if ((opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("")) {
                        input.inputmask._valueSet("");
                    }
                },
                focusEvent: function focusEvent(e) {
                    var input = this, nptValue = input.inputmask._valueGet();
                    if (opts.showMaskOnFocus) {
                        if (nptValue !== getBuffer().join("")) {
                            writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()));
                        } else if (mouseEnter === false) {
                            caret(input, seekNext(getLastValidPosition()));
                        }
                    }
                    if (opts.positionCaretOnTab === true && mouseEnter === false) {
                        EventHandlers.clickEvent.apply(input, [ e, true ]);
                    }
                    undoValue = getBuffer().join("");
                },
                mouseleaveEvent: function mouseleaveEvent(e) {
                    var input = this;
                    mouseEnter = false;
                    if (opts.clearMaskOnLostFocus && document.activeElement !== input) {
                        HandleNativePlaceholder(input, originalPlaceholder);
                    }
                },
                clickEvent: function clickEvent(e, tabbed) {
                    function doRadixFocus(clickPos) {
                        if (opts.radixPoint !== "") {
                            var vps = getMaskSet().validPositions;
                            if (vps[clickPos] === undefined || vps[clickPos].input === getPlaceholder(clickPos)) {
                                if (clickPos < seekNext(-1)) return true;
                                var radixPos = $.inArray(opts.radixPoint, getBuffer());
                                if (radixPos !== -1) {
                                    for (var vp in vps) {
                                        if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) {
                                            return false;
                                        }
                                    }
                                    return true;
                                }
                            }
                        }
                        return false;
                    }
                    var input = this;
                    setTimeout(function() {
                        if (document.activeElement === input) {
                            var selectedCaret = caret(input);
                            if (tabbed) {
                                if (isRTL) {
                                    selectedCaret.end = selectedCaret.begin;
                                } else {
                                    selectedCaret.begin = selectedCaret.end;
                                }
                            }
                            if (selectedCaret.begin === selectedCaret.end) {
                                switch (opts.positionCaretOnClick) {
                                  case "none":
                                    break;

                                  case "select":
                                    caret(input, 0, getBuffer().length);
                                    break;

                                  case "ignore":
                                    caret(input, seekNext(getLastValidPosition()));
                                    break;

                                  case "radixFocus":
                                    if (doRadixFocus(selectedCaret.begin)) {
                                        var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                                        caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);
                                        break;
                                    }

                                  default:
                                    var clickPosition = selectedCaret.begin, lvclickPosition = getLastValidPosition(clickPosition, true), lastPosition = seekNext(lvclickPosition);
                                    if (clickPosition < lastPosition) {
                                        caret(input, !isMask(clickPosition, true) && !isMask(clickPosition - 1, true) ? seekNext(clickPosition) : clickPosition);
                                    } else {
                                        var lvp = getMaskSet().validPositions[lvclickPosition], tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : undefined, lvp), placeholder = getPlaceholder(lastPosition, tt.match);
                                        if (placeholder !== "" && getBuffer()[lastPosition] !== placeholder && tt.match.optionalQuantifier !== true && tt.match.newBlockMarker !== true || !isMask(lastPosition, opts.keepStatic) && tt.match.def === placeholder) {
                                            var newPos = seekNext(lastPosition);
                                            if (clickPosition >= newPos || clickPosition === lastPosition) {
                                                lastPosition = newPos;
                                            }
                                        }
                                        caret(input, lastPosition);
                                    }
                                    break;
                                }
                            }
                        }
                    }, 0);
                },
                cutEvent: function cutEvent(e) {
                    var input = this, $input = $(input), pos = caret(input), ev = e.originalEvent || e;
                    var clipboardData = window.clipboardData || ev.clipboardData, clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
                    clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join(""));
                    if (document.execCommand) document.execCommand("copy");
                    handleRemove(input, Inputmask.keyCode.DELETE, pos);
                    writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join(""));
                },
                blurEvent: function blurEvent(e) {
                    var $input = $(this), input = this;
                    if (input.inputmask) {
                        HandleNativePlaceholder(input, originalPlaceholder);
                        var nptValue = input.inputmask._valueGet(), buffer = getBuffer().slice();
                        if (nptValue !== "" || colorMask !== undefined) {
                            if (opts.clearMaskOnLostFocus) {
                                if (getLastValidPosition() === -1 && nptValue === getBufferTemplate().join("")) {
                                    buffer = [];
                                } else {
                                    clearOptionalTail(buffer);
                                }
                            }
                            if (isComplete(buffer) === false) {
                                setTimeout(function() {
                                    $input.trigger("incomplete");
                                }, 0);
                                if (opts.clearIncomplete) {
                                    resetMaskSet();
                                    if (opts.clearMaskOnLostFocus) {
                                        buffer = [];
                                    } else {
                                        buffer = getBufferTemplate().slice();
                                    }
                                }
                            }
                            writeBuffer(input, buffer, undefined, e);
                        }
                        if (undoValue !== getBuffer().join("")) {
                            undoValue = buffer.join("");
                            $input.trigger("change");
                        }
                    }
                },
                mouseenterEvent: function mouseenterEvent(e) {
                    var input = this;
                    mouseEnter = true;
                    if (document.activeElement !== input && opts.showMaskOnHover) {
                        HandleNativePlaceholder(input, (isRTL ? getBuffer().slice().reverse() : getBuffer()).join(""));
                    }
                },
                submitEvent: function submitEvent(e) {
                    if (undoValue !== getBuffer().join("")) {
                        $el.trigger("change");
                    }
                    if (opts.clearMaskOnLostFocus && getLastValidPosition() === -1 && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("")) {
                        el.inputmask._valueSet("");
                    }
                    if (opts.clearIncomplete && isComplete(getBuffer()) === false) {
                        el.inputmask._valueSet("");
                    }
                    if (opts.removeMaskOnSubmit) {
                        el.inputmask._valueSet(el.inputmask.unmaskedvalue(), true);
                        setTimeout(function() {
                            writeBuffer(el, getBuffer());
                        }, 0);
                    }
                },
                resetEvent: function resetEvent(e) {
                    el.inputmask.refreshValue = true;
                    setTimeout(function() {
                        $el.trigger("setvalue");
                    }, 0);
                }
            };
            function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
                var inputmask = this || input.inputmask, inputValue = nptvl.slice(), charCodes = "", initialNdx = -1, result = undefined;
                function isTemplateMatch(ndx, charCodes) {
                    var charCodeNdx = getMaskTemplate(true, 0, false).slice(ndx, seekNext(ndx)).join("").replace(/'/g, "").indexOf(charCodes);
                    return charCodeNdx !== -1 && !isMask(ndx) && (getTest(ndx).match.nativeDef === charCodes.charAt(0) || getTest(ndx).match.fn === null && getTest(ndx).match.nativeDef === "'" + charCodes.charAt(0) || getTest(ndx).match.nativeDef === " " && (getTest(ndx + 1).match.nativeDef === charCodes.charAt(0) || getTest(ndx + 1).match.fn === null && getTest(ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));
                }
                resetMaskSet();
                if (!strict && opts.autoUnmask !== true) {
                    var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""), matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
                    if (matches && matches.length > 0) {
                        inputValue.splice(0, matches.length * staticInput.length);
                        initialNdx = seekNext(initialNdx);
                    }
                } else {
                    initialNdx = seekNext(initialNdx);
                }
                if (initialNdx === -1) {
                    getMaskSet().p = seekNext(initialNdx);
                    initialNdx = 0;
                } else getMaskSet().p = initialNdx;
                inputmask.caretPos = {
                    begin: initialNdx
                };
                $.each(inputValue, function(ndx, charCode) {
                    if (charCode !== undefined) {
                        if (getMaskSet().validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, true) && isValid(ndx, inputValue[ndx], true, undefined, undefined, true) === false) {
                            getMaskSet().p++;
                        } else {
                            var keypress = new $.Event("_checkval");
                            keypress.which = charCode.charCodeAt(0);
                            charCodes += charCode;
                            var lvp = getLastValidPosition(undefined, true);
                            if (!isTemplateMatch(initialNdx, charCodes)) {
                                result = EventHandlers.keypressEvent.call(input, keypress, true, false, strict, inputmask.caretPos.begin);
                                if (result) {
                                    initialNdx = inputmask.caretPos.begin + 1;
                                    charCodes = "";
                                }
                            } else {
                                result = EventHandlers.keypressEvent.call(input, keypress, true, false, strict, lvp + 1);
                            }
                            if (result) {
                                writeBuffer(undefined, getBuffer(), result.forwardPosition, keypress, false);
                                inputmask.caretPos = {
                                    begin: result.forwardPosition,
                                    end: result.forwardPosition
                                };
                            }
                        }
                    }
                });
                if (writeOut) writeBuffer(input, getBuffer(), result ? result.forwardPosition : undefined, initiatingEvent || new $.Event("checkval"), initiatingEvent && initiatingEvent.type === "input");
            }
            function unmaskedvalue(input) {
                if (input) {
                    if (input.inputmask === undefined) {
                        return input.value;
                    }
                    if (input.inputmask && input.inputmask.refreshValue) {
                        EventHandlers.setValueEvent.call(input);
                    }
                }
                var umValue = [], vps = getMaskSet().validPositions;
                for (var pndx in vps) {
                    if (vps[pndx].match && vps[pndx].match.fn != null) {
                        umValue.push(vps[pndx].input);
                    }
                }
                var unmaskedValue = umValue.length === 0 ? "" : (isRTL ? umValue.reverse() : umValue).join("");
                if ($.isFunction(opts.onUnMask)) {
                    var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
                    unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
                }
                return unmaskedValue;
            }
            function caret(input, begin, end, notranslate) {
                function translatePosition(pos) {
                    if (isRTL && typeof pos === "number" && (!opts.greedy || opts.placeholder !== "") && el) {
                        pos = el.inputmask._valueGet().length - pos;
                    }
                    return pos;
                }
                var range;
                if (begin !== undefined) {
                    if ($.isArray(begin)) {
                        end = isRTL ? begin[0] : begin[1];
                        begin = isRTL ? begin[1] : begin[0];
                    }
                    if (begin.begin !== undefined) {
                        end = isRTL ? begin.begin : begin.end;
                        begin = isRTL ? begin.end : begin.begin;
                    }
                    if (typeof begin === "number") {
                        begin = notranslate ? begin : translatePosition(begin);
                        end = notranslate ? end : translatePosition(end);
                        end = typeof end == "number" ? end : begin;
                        var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                        input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0;
                        input.inputmask.caretPos = {
                            begin: begin,
                            end: end
                        };
                        if (input === document.activeElement) {
                            if ("selectionStart" in input) {
                                input.selectionStart = begin;
                                input.selectionEnd = end;
                            } else if (window.getSelection) {
                                range = document.createRange();
                                if (input.firstChild === undefined || input.firstChild === null) {
                                    var textNode = document.createTextNode("");
                                    input.appendChild(textNode);
                                }
                                range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length);
                                range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length);
                                range.collapse(true);
                                var sel = window.getSelection();
                                sel.removeAllRanges();
                                sel.addRange(range);
                            } else if (input.createTextRange) {
                                range = input.createTextRange();
                                range.collapse(true);
                                range.moveEnd("character", end);
                                range.moveStart("character", begin);
                                range.select();
                            }
                            renderColorMask(input, {
                                begin: begin,
                                end: end
                            });
                        }
                    }
                } else {
                    if ("selectionStart" in input) {
                        begin = input.selectionStart;
                        end = input.selectionEnd;
                    } else if (window.getSelection) {
                        range = window.getSelection().getRangeAt(0);
                        if (range.commonAncestorContainer.parentNode === input || range.commonAncestorContainer === input) {
                            begin = range.startOffset;
                            end = range.endOffset;
                        }
                    } else if (document.selection && document.selection.createRange) {
                        range = document.selection.createRange();
                        begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length);
                        end = begin + range.text.length;
                    }
                    return {
                        begin: notranslate ? begin : translatePosition(begin),
                        end: notranslate ? end : translatePosition(end)
                    };
                }
            }
            function determineLastRequiredPosition(returnDefinition) {
                var buffer = getMaskTemplate(true, getLastValidPosition(), true, true), bl = buffer.length, pos, lvp = getLastValidPosition(), positions = {}, lvTest = getMaskSet().validPositions[lvp], ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined, testPos;
                for (pos = lvp + 1; pos < buffer.length; pos++) {
                    testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                    ndxIntlzr = testPos.locator.slice();
                    positions[pos] = $.extend(true, {}, testPos);
                }
                var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;
                for (pos = bl - 1; pos > lvp; pos--) {
                    testPos = positions[pos];
                    if ((testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && testPos.match.fn != null || testPos.match.fn === null && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && getTests(pos)[0].def !== "")) && buffer[pos] === getPlaceholder(pos, testPos.match)) {
                        bl--;
                    } else break;
                }
                return returnDefinition ? {
                    l: bl,
                    def: positions[bl] ? positions[bl].match : undefined
                } : bl;
            }
            function clearOptionalTail(buffer) {
                buffer.length = 0;
                var template = getMaskTemplate(true, 0, true, undefined, true), lmnt, validPos;
                while (lmnt = template.shift(), lmnt !== undefined) {
                    buffer.push(lmnt);
                }
                return buffer;
            }
            function isComplete(buffer) {
                if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
                if (opts.repeat === "*") return undefined;
                var complete = false, lrp = determineLastRequiredPosition(true), aml = seekPrevious(lrp.l);
                if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                    complete = true;
                    for (var i = 0; i <= aml; i++) {
                        var test = getTestTemplate(i).match;
                        if (test.fn !== null && getMaskSet().validPositions[i] === undefined && test.optionality !== true && test.optionalQuantifier !== true || test.fn === null && buffer[i] !== getPlaceholder(i, test)) {
                            complete = false;
                            break;
                        }
                    }
                }
                return complete;
            }
            function handleRemove(input, k, pos, strict, fromIsValid) {
                if (opts.numericInput || isRTL) {
                    if (k === Inputmask.keyCode.BACKSPACE) {
                        k = Inputmask.keyCode.DELETE;
                    } else if (k === Inputmask.keyCode.DELETE) {
                        k = Inputmask.keyCode.BACKSPACE;
                    }
                    if (isRTL) {
                        var pend = pos.end;
                        pos.end = pos.begin;
                        pos.begin = pend;
                    }
                }
                if (k === Inputmask.keyCode.BACKSPACE && pos.end - pos.begin < 1) {
                    pos.begin = seekPrevious(pos.begin);
                    if (getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator) {
                        pos.begin--;
                    }
                } else if (k === Inputmask.keyCode.DELETE && pos.begin === pos.end) {
                    pos.end = isMask(pos.end, true) && getMaskSet().validPositions[pos.end] && getMaskSet().validPositions[pos.end].input !== opts.radixPoint ? pos.end + 1 : seekNext(pos.end) + 1;
                    if (getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator) {
                        pos.end++;
                    }
                }
                revalidateMask(pos);
                if (strict !== true && opts.keepStatic !== false || opts.regex !== null) {
                    var result = alternate(true);
                    if (result) {
                        var newPos = result.caret !== undefined ? result.caret : result.pos ? seekNext(result.pos.begin ? result.pos.begin : result.pos) : getLastValidPosition(-1, true);
                        if (k !== Inputmask.keyCode.DELETE || pos.begin > newPos) {
                            pos.begin == newPos;
                        }
                    }
                }
                var lvp = getLastValidPosition(pos.begin, true);
                if (lvp < pos.begin || pos.begin === -1) {
                    getMaskSet().p = seekNext(lvp);
                } else if (strict !== true) {
                    getMaskSet().p = pos.begin;
                    if (fromIsValid !== true) {
                        while (getMaskSet().p < lvp && getMaskSet().validPositions[getMaskSet().p] === undefined) {
                            getMaskSet().p++;
                        }
                    }
                }
            }
            function initializeColorMask(input) {
                var computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null);
                function findCaretPos(clientx) {
                    var e = document.createElement("span"), caretPos;
                    for (var style in computedStyle) {
                        if (isNaN(style) && style.indexOf("font") !== -1) {
                            e.style[style] = computedStyle[style];
                        }
                    }
                    e.style.textTransform = computedStyle.textTransform;
                    e.style.letterSpacing = computedStyle.letterSpacing;
                    e.style.position = "absolute";
                    e.style.height = "auto";
                    e.style.width = "auto";
                    e.style.visibility = "hidden";
                    e.style.whiteSpace = "nowrap";
                    document.body.appendChild(e);
                    var inputText = input.inputmask._valueGet(), previousWidth = 0, itl;
                    for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {
                        e.innerHTML += inputText.charAt(caretPos) || "_";
                        if (e.offsetWidth >= clientx) {
                            var offset1 = clientx - previousWidth;
                            var offset2 = e.offsetWidth - clientx;
                            e.innerHTML = inputText.charAt(caretPos);
                            offset1 -= e.offsetWidth / 3;
                            caretPos = offset1 < offset2 ? caretPos - 1 : caretPos;
                            break;
                        }
                        previousWidth = e.offsetWidth;
                    }
                    document.body.removeChild(e);
                    return caretPos;
                }
                var template = document.createElement("div");
                template.style.width = computedStyle.width;
                template.style.textAlign = computedStyle.textAlign;
                colorMask = document.createElement("div");
                input.inputmask.colorMask = colorMask;
                colorMask.className = "im-colormask";
                input.parentNode.insertBefore(colorMask, input);
                input.parentNode.removeChild(input);
                colorMask.appendChild(input);
                colorMask.appendChild(template);
                input.style.left = template.offsetLeft + "px";
                $(colorMask).on("mouseleave", function(e) {
                    return EventHandlers.mouseleaveEvent.call(input, [ e ]);
                });
                $(colorMask).on("mouseenter", function(e) {
                    return EventHandlers.mouseenterEvent.call(input, [ e ]);
                });
                $(colorMask).on("click", function(e) {
                    caret(input, findCaretPos(e.clientX));
                    return EventHandlers.clickEvent.call(input, [ e ]);
                });
            }
            Inputmask.prototype.positionColorMask = function(input, template) {
                input.style.left = template.offsetLeft + "px";
            };
            function renderColorMask(input, caretPos, clear) {
                var maskTemplate = [], isStatic = false, test, testPos, ndxIntlzr, pos = 0;
                function setEntry(entry) {
                    if (entry === undefined) entry = "";
                    if (!isStatic && (test.fn === null || testPos.input === undefined)) {
                        isStatic = true;
                        maskTemplate.push("<span class='im-static'>" + entry);
                    } else if (isStatic && (test.fn !== null && testPos.input !== undefined || test.def === "")) {
                        isStatic = false;
                        var mtl = maskTemplate.length;
                        maskTemplate[mtl - 1] = maskTemplate[mtl - 1] + "</span>";
                        maskTemplate.push(entry);
                    } else maskTemplate.push(entry);
                }
                function setCaret() {
                    if (document.activeElement === input) {
                        maskTemplate.splice(caretPos.begin, 0, caretPos.begin === caretPos.end || caretPos.end > getMaskSet().maskLength ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">');
                        maskTemplate.splice(caretPos.end + 1, 0, "</mark>");
                    }
                }
                if (colorMask !== undefined) {
                    var buffer = getBuffer();
                    if (caretPos === undefined) {
                        caretPos = caret(input);
                    } else if (caretPos.begin === undefined) {
                        caretPos = {
                            begin: caretPos,
                            end: caretPos
                        };
                    }
                    if (clear !== true) {
                        var lvp = getLastValidPosition();
                        do {
                            if (getMaskSet().validPositions[pos]) {
                                testPos = getMaskSet().validPositions[pos];
                                test = testPos.match;
                                ndxIntlzr = testPos.locator.slice();
                                setEntry(buffer[pos]);
                            } else {
                                testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                                test = testPos.match;
                                ndxIntlzr = testPos.locator.slice();
                                if (opts.jitMasking === false || pos < lvp || typeof opts.jitMasking === "number" && isFinite(opts.jitMasking) && opts.jitMasking > pos) {
                                    setEntry(getPlaceholder(pos, test));
                                } else isStatic = false;
                            }
                            pos++;
                        } while ((maxLength === undefined || pos < maxLength) && (test.fn !== null || test.def !== "") || lvp > pos || isStatic);
                        if (isStatic) setEntry();
                        setCaret();
                    }
                    var template = colorMask.getElementsByTagName("div")[0];
                    template.innerHTML = maskTemplate.join("");
                    input.inputmask.positionColorMask(input, template);
                }
            }
            function mask(elem) {
                function isElementTypeSupported(input, opts) {
                    function patchValueProperty(npt) {
                        var valueGet;
                        var valueSet;
                        function patchValhook(type) {
                            if ($.valHooks && ($.valHooks[type] === undefined || $.valHooks[type].inputmaskpatch !== true)) {
                                var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {
                                    return elem.value;
                                };
                                var valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {
                                    elem.value = value;
                                    return elem;
                                };
                                $.valHooks[type] = {
                                    get: function get(elem) {
                                        if (elem.inputmask) {
                                            if (elem.inputmask.opts.autoUnmask) {
                                                return elem.inputmask.unmaskedvalue();
                                            } else {
                                                var result = valhookGet(elem);
                                                return getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) !== -1 || opts.nullable !== true ? result : "";
                                            }
                                        } else return valhookGet(elem);
                                    },
                                    set: function set(elem, value) {
                                        var $elem = $(elem), result;
                                        result = valhookSet(elem, value);
                                        if (elem.inputmask) {
                                            $elem.trigger("setvalue", [ value ]);
                                        }
                                        return result;
                                    },
                                    inputmaskpatch: true
                                };
                            }
                        }
                        function getter() {
                            if (this.inputmask) {
                                return this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : getLastValidPosition() !== -1 || opts.nullable !== true ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "";
                            } else return valueGet.call(this);
                        }
                        function setter(value) {
                            valueSet.call(this, value);
                            if (this.inputmask) {
                                $(this).trigger("setvalue", [ value ]);
                            }
                        }
                        function installNativeValueSetFallback(npt) {
                            EventRuler.on(npt, "mouseenter", function(event) {
                                var $input = $(this), input = this, value = input.inputmask._valueGet();
                                if (value !== getBuffer().join("")) {
                                    $input.trigger("setvalue");
                                }
                            });
                        }
                        if (!npt.inputmask.__valueGet) {
                            if (opts.noValuePatching !== true) {
                                if (Object.getOwnPropertyDescriptor) {
                                    if (typeof Object.getPrototypeOf !== "function") {
                                        Object.getPrototypeOf = _typeof("test".__proto__) === "object" ? function(object) {
                                            return object.__proto__;
                                        } : function(object) {
                                            return object.constructor.prototype;
                                        };
                                    }
                                    var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
                                    if (valueProperty && valueProperty.get && valueProperty.set) {
                                        valueGet = valueProperty.get;
                                        valueSet = valueProperty.set;
                                        Object.defineProperty(npt, "value", {
                                            get: getter,
                                            set: setter,
                                            configurable: true
                                        });
                                    } else if (npt.tagName !== "INPUT") {
                                        valueGet = function valueGet() {
                                            return this.textContent;
                                        };
                                        valueSet = function valueSet(value) {
                                            this.textContent = value;
                                        };
                                        Object.defineProperty(npt, "value", {
                                            get: getter,
                                            set: setter,
                                            configurable: true
                                        });
                                    }
                                } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
                                    valueGet = npt.__lookupGetter__("value");
                                    valueSet = npt.__lookupSetter__("value");
                                    npt.__defineGetter__("value", getter);
                                    npt.__defineSetter__("value", setter);
                                }
                                npt.inputmask.__valueGet = valueGet;
                                npt.inputmask.__valueSet = valueSet;
                            }
                            npt.inputmask._valueGet = function(overruleRTL) {
                                return isRTL && overruleRTL !== true ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                            };
                            npt.inputmask._valueSet = function(value, overruleRTL) {
                                valueSet.call(this.el, value === null || value === undefined ? "" : overruleRTL !== true && isRTL ? value.split("").reverse().join("") : value);
                            };
                            if (valueGet === undefined) {
                                valueGet = function valueGet() {
                                    return this.value;
                                };
                                valueSet = function valueSet(value) {
                                    this.value = value;
                                };
                                patchValhook(npt.type);
                                installNativeValueSetFallback(npt);
                            }
                        }
                    }
                    var elementType = input.getAttribute("type");
                    var isSupported = input.tagName === "INPUT" && $.inArray(elementType, opts.supportsInputType) !== -1 || input.isContentEditable || input.tagName === "TEXTAREA";
                    if (!isSupported) {
                        if (input.tagName === "INPUT") {
                            var el = document.createElement("input");
                            el.setAttribute("type", elementType);
                            isSupported = el.type === "text";
                            el = null;
                        } else isSupported = "partial";
                    }
                    if (isSupported !== false) {
                        patchValueProperty(input);
                    } else input.inputmask = undefined;
                    return isSupported;
                }
                EventRuler.off(elem);
                var isSupported = isElementTypeSupported(elem, opts);
                if (isSupported !== false) {
                    el = elem;
                    $el = $(el);
                    originalPlaceholder = el.placeholder;
                    maxLength = el !== undefined ? el.maxLength : undefined;
                    if (maxLength === -1) maxLength = undefined;
                    if (opts.colorMask === true) {
                        initializeColorMask(el);
                    }
                    if (mobile) {
                        if ("inputmode" in el) {
                            el.inputmode = opts.inputmode;
                            el.setAttribute("inputmode", opts.inputmode);
                        }
                        if (opts.disablePredictiveText === true) {
                            if ("autocorrect" in el) {
                                el.autocorrect = false;
                            } else {
                                if (opts.colorMask !== true) {
                                    initializeColorMask(el);
                                }
                                el.type = "password";
                            }
                        }
                    }
                    if (isSupported === true) {
                        el.setAttribute("im-insert", opts.insertMode);
                        EventRuler.on(el, "submit", EventHandlers.submitEvent);
                        EventRuler.on(el, "reset", EventHandlers.resetEvent);
                        EventRuler.on(el, "blur", EventHandlers.blurEvent);
                        EventRuler.on(el, "focus", EventHandlers.focusEvent);
                        if (opts.colorMask !== true) {
                            EventRuler.on(el, "click", EventHandlers.clickEvent);
                            EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent);
                            EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent);
                        }
                        EventRuler.on(el, "paste", EventHandlers.pasteEvent);
                        EventRuler.on(el, "cut", EventHandlers.cutEvent);
                        EventRuler.on(el, "complete", opts.oncomplete);
                        EventRuler.on(el, "incomplete", opts.onincomplete);
                        EventRuler.on(el, "cleared", opts.oncleared);
                        if (!mobile && opts.inputEventOnly !== true) {
                            EventRuler.on(el, "keydown", EventHandlers.keydownEvent);
                            EventRuler.on(el, "keypress", EventHandlers.keypressEvent);
                        } else {
                            el.removeAttribute("maxLength");
                        }
                        EventRuler.on(el, "input", EventHandlers.inputFallBackEvent);
                        EventRuler.on(el, "beforeinput", EventHandlers.beforeInputEvent);
                    }
                    EventRuler.on(el, "setvalue", EventHandlers.setValueEvent);
                    undoValue = getBufferTemplate().join("");
                    if (el.inputmask._valueGet(true) !== "" || opts.clearMaskOnLostFocus === false || document.activeElement === el) {
                        var initialValue = $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, el.inputmask._valueGet(true), opts) || el.inputmask._valueGet(true) : el.inputmask._valueGet(true);
                        if (initialValue !== "") checkVal(el, true, false, initialValue.split(""));
                        var buffer = getBuffer().slice();
                        undoValue = buffer.join("");
                        if (isComplete(buffer) === false) {
                            if (opts.clearIncomplete) {
                                resetMaskSet();
                            }
                        }
                        if (opts.clearMaskOnLostFocus && document.activeElement !== el) {
                            if (getLastValidPosition() === -1) {
                                buffer = [];
                            } else {
                                clearOptionalTail(buffer);
                            }
                        }
                        if (opts.clearMaskOnLostFocus === false || opts.showMaskOnFocus && document.activeElement === el || el.inputmask._valueGet(true) !== "") writeBuffer(el, buffer);
                        if (document.activeElement === el) {
                            caret(el, seekNext(getLastValidPosition()));
                        }
                    }
                }
            }
            var valueBuffer;
            if (actionObj !== undefined) {
                switch (actionObj.action) {
                  case "isComplete":
                    el = actionObj.el;
                    return isComplete(getBuffer());

                  case "unmaskedvalue":
                    if (el === undefined || actionObj.value !== undefined) {
                        valueBuffer = actionObj.value;
                        valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer : valueBuffer).split("");
                        checkVal.call(this, undefined, false, false, valueBuffer);
                        if ($.isFunction(opts.onBeforeWrite)) opts.onBeforeWrite.call(inputmask, undefined, getBuffer(), 0, opts);
                    }
                    return unmaskedvalue(el);

                  case "mask":
                    mask(el);
                    break;

                  case "format":
                    valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value : actionObj.value).split("");
                    checkVal.call(this, undefined, true, false, valueBuffer);
                    if (actionObj.metadata) {
                        return {
                            value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                            metadata: maskScope.call(this, {
                                action: "getmetadata"
                            }, maskset, opts)
                        };
                    }
                    return isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

                  case "isValid":
                    if (actionObj.value) {
                        valueBuffer = actionObj.value.split("");
                        checkVal.call(this, undefined, true, true, valueBuffer);
                    } else {
                        actionObj.value = getBuffer().join("");
                    }
                    var buffer = getBuffer();
                    var rl = determineLastRequiredPosition(), lmib = buffer.length - 1;
                    for (;lmib > rl; lmib--) {
                        if (isMask(lmib)) break;
                    }
                    buffer.splice(rl, lmib + 1 - rl);
                    return isComplete(buffer) && actionObj.value === getBuffer().join("");

                  case "getemptymask":
                    return getBufferTemplate().join("");

                  case "remove":
                    if (el && el.inputmask) {
                        $.data(el, "_inputmask_opts", null);
                        $el = $(el);
                        el.inputmask._valueSet(opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(true));
                        EventRuler.off(el);
                        if (el.inputmask.colorMask) {
                            colorMask = el.inputmask.colorMask;
                            colorMask.removeChild(el);
                            colorMask.parentNode.insertBefore(el, colorMask);
                            colorMask.parentNode.removeChild(colorMask);
                        }
                        var valueProperty;
                        if (Object.getOwnPropertyDescriptor && Object.getPrototypeOf) {
                            valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value");
                            if (valueProperty) {
                                if (el.inputmask.__valueGet) {
                                    Object.defineProperty(el, "value", {
                                        get: el.inputmask.__valueGet,
                                        set: el.inputmask.__valueSet,
                                        configurable: true
                                    });
                                }
                            }
                        } else if (document.__lookupGetter__ && el.__lookupGetter__("value")) {
                            if (el.inputmask.__valueGet) {
                                el.__defineGetter__("value", el.inputmask.__valueGet);
                                el.__defineSetter__("value", el.inputmask.__valueSet);
                            }
                        }
                        el.inputmask = undefined;
                    }
                    return el;
                    break;

                  case "getmetadata":
                    if ($.isArray(maskset.metadata)) {
                        var maskTarget = getMaskTemplate(true, 0, false).join("");
                        $.each(maskset.metadata, function(ndx, mtdt) {
                            if (mtdt.mask === maskTarget) {
                                maskTarget = mtdt;
                                return false;
                            }
                        });
                        return maskTarget;
                    }
                    return maskset.metadata;
                }
            }
        }
        return Inputmask;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function(factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(4) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
            __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    })(function($) {
        return $;
    });
}, function(module, exports) {
    module.exports = jQuery;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_RESULT__;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return typeof window !== "undefined" ? window : new (eval("require('jsdom').JSDOM"))("").window;
    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else {}
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function(factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
            __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    })(function(Inputmask) {
        var $ = Inputmask.dependencyLib;
        var formatCode = {
            d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
            dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                return pad(Date.prototype.getDate.call(this), 2);
            } ],
            ddd: [ "" ],
            dddd: [ "" ],
            m: [ "[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return Date.prototype.getMonth.call(this) + 1;
            } ],
            mm: [ "0[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return pad(Date.prototype.getMonth.call(this) + 1, 2);
            } ],
            mmm: [ "" ],
            mmmm: [ "" ],
            yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                return pad(Date.prototype.getFullYear.call(this), 2);
            } ],
            yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                return pad(Date.prototype.getFullYear.call(this), 4);
            } ],
            h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                return pad(Date.prototype.getHours.call(this), 2);
            } ],
            hhh: [ "[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                return pad(Date.prototype.getHours.call(this), 2);
            } ],
            HHH: [ "[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
            MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                return pad(Date.prototype.getMinutes.call(this), 2);
            } ],
            ss: [ "[0-5][0-9]", Date.prototype.setSeconds, "seconds", function() {
                return pad(Date.prototype.getSeconds.call(this), 2);
            } ],
            l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return pad(Date.prototype.getMilliseconds.call(this), 3);
            } ],
            L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return pad(Date.prototype.getMilliseconds.call(this), 2);
            } ],
            t: [ "[ap]" ],
            tt: [ "[ap]m" ],
            T: [ "[AP]" ],
            TT: [ "[AP]M" ],
            Z: [ "" ],
            o: [ "" ],
            S: [ "" ]
        }, formatAlias = {
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };
        function getTokenizer(opts) {
            if (!opts.tokenizer) {
                var tokens = [];
                for (var ndx in formatCode) {
                    if (tokens.indexOf(ndx[0]) === -1) tokens.push(ndx[0]);
                }
                opts.tokenizer = "(" + tokens.join("+|") + ")+?|.";
                opts.tokenizer = new RegExp(opts.tokenizer, "g");
            }
            return opts.tokenizer;
        }
        function isValidDate(dateParts, currentResult) {
            return !isFinite(dateParts.rawday) || dateParts.day == "29" && !isFinite(dateParts.rawyear) || new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day ? currentResult : false;
        }
        function isDateInRange(dateParts, opts) {
            var result = true;
            if (opts.min) {
                if (dateParts["rawyear"]) {
                    var rawYear = dateParts["rawyear"].replace(/[^0-9]/g, ""), minYear = opts.min.year.substr(0, rawYear.length);
                    result = minYear <= rawYear;
                }
                if (dateParts["year"] === dateParts["rawyear"]) {
                    if (opts.min.date.getTime() === opts.min.date.getTime()) {
                        result = opts.min.date.getTime() <= dateParts.date.getTime();
                    }
                }
            }
            if (result && opts.max && opts.max.date.getTime() === opts.max.date.getTime()) {
                result = opts.max.date.getTime() >= dateParts.date.getTime();
            }
            return result;
        }
        function parse(format, dateObjValue, opts, raw) {
            var mask = "", match;
            while (match = getTokenizer(opts).exec(format)) {
                if (dateObjValue === undefined) {
                    if (formatCode[match[0]]) {
                        mask += "(" + formatCode[match[0]][0] + ")";
                    } else {
                        switch (match[0]) {
                          case "[":
                            mask += "(";
                            break;

                          case "]":
                            mask += ")?";
                            break;

                          default:
                            mask += Inputmask.escapeRegex(match[0]);
                        }
                    }
                } else {
                    if (formatCode[match[0]]) {
                        if (raw !== true && formatCode[match[0]][3]) {
                            var getFn = formatCode[match[0]][3];
                            mask += getFn.call(dateObjValue.date);
                        } else if (formatCode[match[0]][2]) mask += dateObjValue["raw" + formatCode[match[0]][2]]; else mask += match[0];
                    } else mask += match[0];
                }
            }
            return mask;
        }
        function pad(val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) {
                val = "0" + val;
            }
            return val;
        }
        function analyseMask(maskString, format, opts) {
            var dateObj = {
                date: new Date(1, 0, 1)
            }, targetProp, mask = maskString, match, dateOperation, targetValidator;
            function extendProperty(value) {
                var correctedValue = value.replace(/[^0-9]/g, "0");
                if (correctedValue != value) {
                    var enteredPart = value.replace(/[^0-9]/g, ""), min = (opts.min && opts.min[targetProp] || value).toString(), max = (opts.max && opts.max[targetProp] || value).toString();
                    correctedValue = enteredPart + (enteredPart < min.slice(0, enteredPart.length) ? min.slice(enteredPart.length) : enteredPart > max.slice(0, enteredPart.length) ? max.slice(enteredPart.length) : correctedValue.toString().slice(enteredPart.length));
                }
                return correctedValue;
            }
            function setValue(dateObj, value, opts) {
                dateObj[targetProp] = extendProperty(value);
                dateObj["raw" + targetProp] = value;
                if (dateOperation !== undefined) dateOperation.call(dateObj.date, targetProp == "month" ? parseInt(dateObj[targetProp]) - 1 : dateObj[targetProp]);
            }
            if (typeof mask === "string") {
                while (match = getTokenizer(opts).exec(format)) {
                    var value = mask.slice(0, match[0].length);
                    if (formatCode.hasOwnProperty(match[0])) {
                        targetValidator = formatCode[match[0]][0];
                        targetProp = formatCode[match[0]][2];
                        dateOperation = formatCode[match[0]][1];
                        setValue(dateObj, value, opts);
                    }
                    mask = mask.slice(value.length);
                }
                return dateObj;
            } else if (mask && (typeof mask === "undefined" ? "undefined" : _typeof(mask)) === "object" && mask.hasOwnProperty("date")) {
                return mask;
            }
            return undefined;
        }
        Inputmask.extendAliases({
            datetime: {
                mask: function mask(opts) {
                    formatCode.S = opts.i18n.ordinalSuffix.join("|");
                    opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat;
                    opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat;
                    opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat;
                    opts.placeholder = opts.placeholder !== "" ? opts.placeholder : opts.inputFormat.replace(/[\[\]]/, "");
                    opts.regex = parse(opts.inputFormat, undefined, opts);
                    return null;
                },
                placeholder: "",
                inputFormat: "isoDateTime",
                displayFormat: undefined,
                outputFormat: undefined,
                min: null,
                max: null,
                i18n: {
                    dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                    monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                    ordinalSuffix: [ "st", "nd", "rd", "th" ]
                },
                postValidation: function postValidation(buffer, pos, currentResult, opts) {
                    opts.min = analyseMask(opts.min, opts.inputFormat, opts);
                    opts.max = analyseMask(opts.max, opts.inputFormat, opts);
                    var result = currentResult, dateParts = analyseMask(buffer.join(""), opts.inputFormat, opts);
                    if (result && dateParts.date.getTime() === dateParts.date.getTime()) {
                        result = isValidDate(dateParts, result);
                        result = result && isDateInRange(dateParts, opts);
                    }
                    if (pos && result && currentResult.pos !== pos) {
                        return {
                            buffer: parse(opts.inputFormat, dateParts, opts),
                            refreshFromBuffer: {
                                start: pos,
                                end: currentResult.pos
                            }
                        };
                    }
                    return result;
                },
                onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
                    var input = this;
                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                        var today = new Date(), match, date = "";
                        while (match = getTokenizer(opts).exec(opts.inputFormat)) {
                            if (match[0].charAt(0) === "d") {
                                date += pad(today.getDate(), match[0].length);
                            } else if (match[0].charAt(0) === "m") {
                                date += pad(today.getMonth() + 1, match[0].length);
                            } else if (match[0] === "yyyy") {
                                date += today.getFullYear().toString();
                            } else if (match[0].charAt(0) === "y") {
                                date += pad(today.getYear(), match[0].length);
                            }
                        }
                        input.inputmask._valueSet(date);
                        $(input).trigger("setvalue");
                    }
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    return parse(opts.outputFormat, analyseMask(maskedValue, opts.inputFormat, opts), opts, true);
                },
                casing: function casing(elem, test, pos, validPositions) {
                    if (test.nativeDef.indexOf("[ap]") == 0) return elem.toLowerCase();
                    if (test.nativeDef.indexOf("[AP]") == 0) return elem.toUpperCase();
                    return elem;
                },
                insertMode: false,
                shiftPositions: false
            }
        });
        return Inputmask;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function(factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
            __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    })(function(Inputmask) {
        var $ = Inputmask.dependencyLib;
        function autoEscape(txt, opts) {
            var escapedTxt = "";
            for (var i = 0; i < txt.length; i++) {
                if (Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker.start === txt.charAt(i) || opts.optionalmarker.end === txt.charAt(i) || opts.quantifiermarker.start === txt.charAt(i) || opts.quantifiermarker.end === txt.charAt(i) || opts.groupmarker.start === txt.charAt(i) || opts.groupmarker.end === txt.charAt(i) || opts.alternatormarker === txt.charAt(i)) {
                    escapedTxt += "\\" + txt.charAt(i);
                } else escapedTxt += txt.charAt(i);
            }
            return escapedTxt;
        }
        function alignDigits(buffer, digits, opts) {
            if (digits > 0) {
                var radixPosition = $.inArray(opts.radixPoint, buffer);
                if (radixPosition === -1) {
                    buffer.push(opts.radixPoint);
                    radixPosition = buffer.length - 1;
                }
                for (var i = 1; i <= digits; i++) {
                    buffer[radixPosition + i] = buffer[radixPosition + i] || "0";
                }
            }
            return buffer;
        }
        Inputmask.extendAliases({
            numeric: {
                mask: function mask(opts) {
                    if (opts.repeat !== 0 && isNaN(opts.integerDigits)) {
                        opts.integerDigits = opts.repeat;
                    }
                    opts.repeat = 0;
                    if (opts.groupSeparator === opts.radixPoint && opts.digits && opts.digits !== "0") {
                        if (opts.radixPoint === ".") {
                            opts.groupSeparator = ",";
                        } else if (opts.radixPoint === ",") {
                            opts.groupSeparator = ".";
                        } else opts.groupSeparator = "";
                    }
                    if (opts.groupSeparator === " ") {
                        opts.skipOptionalPartCharacter = undefined;
                    }
                    opts.autoGroup = opts.autoGroup && opts.groupSeparator !== "";
                    if (opts.autoGroup) {
                        if (typeof opts.groupSize == "string" && isFinite(opts.groupSize)) opts.groupSize = parseInt(opts.groupSize);
                        if (isFinite(opts.integerDigits)) {
                            var seps = Math.floor(opts.integerDigits / opts.groupSize);
                            var mod = opts.integerDigits % opts.groupSize;
                            opts.integerDigits = parseInt(opts.integerDigits) + (mod === 0 ? seps - 1 : seps);
                            if (opts.integerDigits < 1) {
                                opts.integerDigits = "*";
                            }
                        }
                    }
                    if (opts.placeholder.length > 1) {
                        opts.placeholder = opts.placeholder.charAt(0);
                    }
                    if (opts.positionCaretOnClick === "radixFocus" && opts.placeholder === "" && opts.integerOptional === false) {
                        opts.positionCaretOnClick = "lvp";
                    }
                    opts.definitions[";"] = opts.definitions["~"];
                    opts.definitions[";"].definitionSymbol = "~";
                    if (opts.numericInput === true) {
                        opts.positionCaretOnClick = opts.positionCaretOnClick === "radixFocus" ? "lvp" : opts.positionCaretOnClick;
                        opts.digitsOptional = false;
                        if (isNaN(opts.digits)) opts.digits = 2;
                        opts.decimalProtect = false;
                    }
                    var mask = "[+]";
                    mask += autoEscape(opts.prefix, opts);
                    if (opts.integerOptional === true) {
                        mask += "~{1," + opts.integerDigits + "}";
                    } else mask += "~{" + opts.integerDigits + "}";
                    if (opts.digits !== undefined) {
                        var radixDef = opts.decimalProtect ? ":" : opts.radixPoint;
                        var dq = opts.digits.toString().split(",");
                        if (isFinite(dq[0]) && dq[1] && isFinite(dq[1])) {
                            mask += radixDef + ";{" + opts.digits + "}";
                        } else if (isNaN(opts.digits) || parseInt(opts.digits) > 0) {
                            if (opts.digitsOptional) {
                                mask += "[" + radixDef + ";{1," + opts.digits + "}]";
                            } else mask += radixDef + ";{" + opts.digits + "}";
                        }
                    }
                    mask += autoEscape(opts.suffix, opts);
                    mask += "[-]";
                    opts.greedy = false;
                    return mask;
                },
                placeholder: "",
                greedy: false,
                digits: "*",
                digitsOptional: true,
                enforceDigitsOnBlur: false,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                groupSize: 3,
                groupSeparator: "",
                autoGroup: false,
                allowMinus: true,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                integerDigits: "+",
                integerOptional: true,
                prefix: "",
                suffix: "",
                rightAlign: true,
                decimalProtect: true,
                min: null,
                max: null,
                step: 1,
                insertMode: true,
                autoUnmask: false,
                unmaskAsNumber: false,
                inputType: "text",
                inputmode: "numeric",
                preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset) {
                    if (c === "-" || c === opts.negationSymbol.front) {
                        if (opts.allowMinus !== true) return false;
                        opts.isNegative = opts.isNegative === undefined ? true : !opts.isNegative;
                        if (buffer.join("") === "") return true;
                        return {
                            caret: maskset.validPositions[pos] ? pos : undefined,
                            dopost: true
                        };
                    }
                    if (isSelection === false && c === opts.radixPoint && opts.digits !== undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0)) {
                        var radixPos = $.inArray(opts.radixPoint, buffer);
                        if (radixPos !== -1 && maskset.validPositions[radixPos] !== undefined) {
                            if (opts.numericInput === true) {
                                return pos === radixPos;
                            }
                            return {
                                caret: radixPos + 1
                            };
                        }
                    }
                    return true;
                },
                postValidation: function postValidation(buffer, pos, currentResult, opts) {
                    function buildPostMask(buffer, opts) {
                        var postMask = "";
                        postMask += "(" + opts.groupSeparator + "*{" + opts.groupSize + "}){*}";
                        if (opts.radixPoint !== "") {
                            var radixSplit = buffer.join("").split(opts.radixPoint);
                            if (radixSplit[1]) {
                                postMask += opts.radixPoint + "*{" + radixSplit[1].match(/^\d*\??\d*/)[0].length + "}";
                            }
                        }
                        return postMask;
                    }
                    var suffix = opts.suffix.split(""), prefix = opts.prefix.split("");
                    if (currentResult.pos === undefined && currentResult.caret !== undefined && currentResult.dopost !== true) return currentResult;
                    var caretPos = currentResult.caret !== undefined ? currentResult.caret : currentResult.pos;
                    var maskedValue = buffer.slice();
                    if (opts.numericInput) {
                        caretPos = maskedValue.length - caretPos - 1;
                        maskedValue = maskedValue.reverse();
                    }
                    var charAtPos = maskedValue[caretPos];
                    if (charAtPos === opts.groupSeparator) {
                        caretPos += 1;
                        charAtPos = maskedValue[caretPos];
                    }
                    if (caretPos === maskedValue.length - opts.suffix.length - 1 && charAtPos === opts.radixPoint) return currentResult;
                    if (charAtPos !== undefined) {
                        if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) {
                            maskedValue[caretPos] = "?";
                            if (opts.prefix.length > 0 && caretPos >= (opts.isNegative === false ? 1 : 0) && caretPos < opts.prefix.length - 1 + (opts.isNegative === false ? 1 : 0)) {
                                prefix[caretPos - (opts.isNegative === false ? 1 : 0)] = "?";
                            } else if (opts.suffix.length > 0 && caretPos >= maskedValue.length - opts.suffix.length - (opts.isNegative === false ? 1 : 0)) {
                                suffix[caretPos - (maskedValue.length - opts.suffix.length - (opts.isNegative === false ? 1 : 0))] = "?";
                            }
                        }
                    }
                    prefix = prefix.join("");
                    suffix = suffix.join("");
                    var processValue = maskedValue.join("").replace(prefix, "");
                    processValue = processValue.replace(suffix, "");
                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                    processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), "");
                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
                    if (isNaN(opts.placeholder)) {
                        processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder), "g"), "");
                    }
                    if (processValue.length > 1 && processValue.indexOf(opts.radixPoint) !== 1) {
                        if (charAtPos === "0") {
                            processValue = processValue.replace(/^\?/g, "");
                        }
                        processValue = processValue.replace(/^0/g, "");
                    }
                    if (processValue.charAt(0) === opts.radixPoint && opts.radixPoint !== "" && opts.numericInput !== true) {
                        processValue = "0" + processValue;
                    }
                    if (processValue !== "") {
                        processValue = processValue.split("");
                        if ((!opts.digitsOptional || opts.enforceDigitsOnBlur && currentResult.event === "blur") && isFinite(opts.digits)) {
                            var radixPosition = $.inArray(opts.radixPoint, processValue);
                            var rpb = $.inArray(opts.radixPoint, maskedValue);
                            if (radixPosition === -1) {
                                processValue.push(opts.radixPoint);
                                radixPosition = processValue.length - 1;
                            }
                            for (var i = 1; i <= opts.digits; i++) {
                                if ((!opts.digitsOptional || opts.enforceDigitsOnBlur && currentResult.event === "blur") && (processValue[radixPosition + i] === undefined || processValue[radixPosition + i] === opts.placeholder.charAt(0))) {
                                    processValue[radixPosition + i] = currentResult.placeholder || opts.placeholder.charAt(0);
                                } else if (rpb !== -1 && maskedValue[rpb + i] !== undefined) {
                                    processValue[radixPosition + i] = processValue[radixPosition + i] || maskedValue[rpb + i];
                                }
                            }
                        }
                        if (opts.autoGroup === true && opts.groupSeparator !== "" && (charAtPos !== opts.radixPoint || currentResult.pos !== undefined || currentResult.dopost)) {
                            var addRadix = processValue[processValue.length - 1] === opts.radixPoint && currentResult.c === opts.radixPoint;
                            processValue = Inputmask(buildPostMask(processValue, opts), {
                                numericInput: true,
                                jitMasking: true,
                                definitions: {
                                    "*": {
                                        validator: "[0-9?]",
                                        cardinality: 1
                                    }
                                }
                            }).format(processValue.join(""));
                            if (addRadix) processValue += opts.radixPoint;
                            if (processValue.charAt(0) === opts.groupSeparator) {
                                processValue.substr(1);
                            }
                        } else processValue = processValue.join("");
                    }
                    if (opts.isNegative && currentResult.event === "blur") {
                        opts.isNegative = processValue !== "0";
                    }
                    processValue = prefix + processValue;
                    processValue += suffix;
                    if (opts.isNegative) {
                        processValue = opts.negationSymbol.front + processValue;
                        processValue += opts.negationSymbol.back;
                    }
                    processValue = processValue.split("");
                    if (charAtPos !== undefined) {
                        if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) {
                            caretPos = $.inArray("?", processValue);
                            if (caretPos > -1) {
                                processValue[caretPos] = charAtPos;
                            } else caretPos = currentResult.caret || 0;
                        } else if (charAtPos === opts.radixPoint || charAtPos === opts.negationSymbol.front || charAtPos === opts.negationSymbol.back) {
                            var newCaretPos = $.inArray(charAtPos, processValue);
                            if (newCaretPos !== -1) caretPos = newCaretPos;
                        }
                    }
                    if (opts.numericInput) {
                        caretPos = processValue.length - caretPos - 1;
                        processValue = processValue.reverse();
                    }
                    var rslt = {
                        caret: (charAtPos === undefined || currentResult.pos !== undefined) && caretPos !== undefined ? caretPos + (opts.numericInput ? -1 : 1) : caretPos,
                        buffer: processValue,
                        refreshFromBuffer: currentResult.dopost || buffer.join("") !== processValue.join("")
                    };
                    return rslt.refreshFromBuffer ? rslt : currentResult;
                },
                onBeforeWrite: function onBeforeWrite(e, buffer, caretPos, opts) {
                    function parseMinMaxOptions(opts) {
                        if (opts.parseMinMaxOptions === undefined) {
                            if (opts.min !== null) {
                                opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                                if (opts.radixPoint === ",") opts.min = opts.min.replace(opts.radixPoint, ".");
                                opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN;
                                if (isNaN(opts.min)) opts.min = Number.MIN_VALUE;
                            }
                            if (opts.max !== null) {
                                opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                                if (opts.radixPoint === ",") opts.max = opts.max.replace(opts.radixPoint, ".");
                                opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN;
                                if (isNaN(opts.max)) opts.max = Number.MAX_VALUE;
                            }
                            opts.parseMinMaxOptions = "done";
                        }
                    }
                    if (e) {
                        switch (e.type) {
                          case "keydown":
                            return opts.postValidation(buffer, caretPos, {
                                caret: caretPos,
                                dopost: true
                            }, opts);

                          case "blur":
                          case "checkval":
                            var unmasked;
                            parseMinMaxOptions(opts);
                            if (opts.min !== null || opts.max !== null) {
                                unmasked = opts.onUnMask(buffer.join(""), undefined, $.extend({}, opts, {
                                    unmaskAsNumber: true
                                }));
                                if (opts.min !== null && unmasked < opts.min) {
                                    opts.isNegative = opts.min < 0;
                                    return opts.postValidation(opts.min.toString().replace(".", opts.radixPoint).split(""), caretPos, {
                                        caret: caretPos,
                                        dopost: true,
                                        placeholder: "0"
                                    }, opts);
                                } else if (opts.max !== null && unmasked > opts.max) {
                                    opts.isNegative = opts.max < 0;
                                    return opts.postValidation(opts.max.toString().replace(".", opts.radixPoint).split(""), caretPos, {
                                        caret: caretPos,
                                        dopost: true,
                                        placeholder: "0"
                                    }, opts);
                                }
                            }
                            return opts.postValidation(buffer, caretPos, {
                                caret: caretPos,
                                placeholder: "0",
                                event: "blur"
                            }, opts);

                          case "_checkval":
                            return {
                                caret: caretPos
                            };

                          default:
                            break;
                        }
                    }
                },
                regex: {
                    integerPart: function integerPart(opts, emptyCheck) {
                        return emptyCheck ? new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?") : new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?\\d+");
                    },
                    integerNPart: function integerNPart(opts) {
                        return new RegExp("[\\d" + Inputmask.escapeRegex(opts.groupSeparator) + Inputmask.escapeRegex(opts.placeholder.charAt(0)) + "]+");
                    }
                },
                definitions: {
                    "~": {
                        validator: function validator(chrs, maskset, pos, strict, opts, isSelection) {
                            var isValid, l;
                            if (chrs === "k" || chrs === "m") {
                                isValid = {
                                    insert: [],
                                    c: 0
                                };
                                for (var i = 0, l = chrs === "k" ? 2 : 5; i < l; i++) {
                                    isValid.insert.push({
                                        pos: pos + i,
                                        c: 0
                                    });
                                }
                                isValid.pos = pos + l;
                                return isValid;
                            }
                            isValid = strict ? new RegExp("[0-9" + Inputmask.escapeRegex(opts.groupSeparator) + "]").test(chrs) : new RegExp("[0-9]").test(chrs);
                            if (isValid === true) {
                                if (opts.numericInput !== true && maskset.validPositions[pos] !== undefined && maskset.validPositions[pos].match.def === "~" && !isSelection) {
                                    var processValue = maskset.buffer.join("");
                                    processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), "");
                                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
                                    var pvRadixSplit = processValue.split(opts.radixPoint);
                                    if (pvRadixSplit.length > 1) {
                                        pvRadixSplit[1] = pvRadixSplit[1].replace(/0/g, opts.placeholder.charAt(0));
                                    }
                                    if (pvRadixSplit[0] === "0") {
                                        pvRadixSplit[0] = pvRadixSplit[0].replace(/0/g, opts.placeholder.charAt(0));
                                    }
                                    processValue = pvRadixSplit[0] + opts.radixPoint + pvRadixSplit[1] || "";
                                    var bufferTemplate = maskset._buffer.join("");
                                    if (processValue === opts.radixPoint) {
                                        processValue = bufferTemplate;
                                    }
                                    while (processValue.match(Inputmask.escapeRegex(bufferTemplate) + "$") === null) {
                                        bufferTemplate = bufferTemplate.slice(1);
                                    }
                                    processValue = processValue.replace(bufferTemplate, "");
                                    processValue = processValue.split("");
                                    if (processValue[pos] === undefined) {
                                        isValid = {
                                            pos: pos,
                                            remove: pos
                                        };
                                    } else {
                                        isValid = {
                                            pos: pos
                                        };
                                    }
                                }
                            } else if (!strict && chrs === opts.radixPoint && maskset.validPositions[pos - 1] === undefined) {
                                isValid = {
                                    insert: {
                                        pos: pos,
                                        c: 0
                                    },
                                    pos: pos + 1
                                };
                            }
                            return isValid;
                        },
                        cardinality: 1
                    },
                    "+": {
                        validator: function validator(chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && (chrs === "-" || chrs === opts.negationSymbol.front);
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    "-": {
                        validator: function validator(chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && chrs === opts.negationSymbol.back;
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    ":": {
                        validator: function validator(chrs, maskset, pos, strict, opts) {
                            var radix = "[" + Inputmask.escapeRegex(opts.radixPoint) + "]";
                            var isValid = new RegExp(radix).test(chrs);
                            if (isValid && maskset.validPositions[pos] && maskset.validPositions[pos].match.placeholder === opts.radixPoint) {
                                isValid = {
                                    caret: pos + 1
                                };
                            }
                            return isValid;
                        },
                        cardinality: 1,
                        placeholder: function placeholder(opts) {
                            return opts.radixPoint;
                        }
                    }
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    if (unmaskedValue === "" && opts.nullable === true) {
                        return unmaskedValue;
                    }
                    var processValue = maskedValue.replace(opts.prefix, "");
                    processValue = processValue.replace(opts.suffix, "");
                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                    if (opts.placeholder.charAt(0) !== "") {
                        processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0");
                    }
                    if (opts.unmaskAsNumber) {
                        if (opts.radixPoint !== "" && processValue.indexOf(opts.radixPoint) !== -1) processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".");
                        processValue = processValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-");
                        processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
                        return Number(processValue);
                    }
                    return processValue;
                },
                isComplete: function isComplete(buffer, opts) {
                    var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
                    maskedValue = maskedValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-");
                    maskedValue = maskedValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
                    maskedValue = maskedValue.replace(opts.prefix, "");
                    maskedValue = maskedValue.replace(opts.suffix, "");
                    maskedValue = maskedValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator) + "([0-9]{3})", "g"), "$1");
                    if (opts.radixPoint === ",") maskedValue = maskedValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".");
                    return isFinite(maskedValue);
                },
                onBeforeMask: function onBeforeMask(initialValue, opts) {
                    opts.isNegative = undefined;
                    var radixPoint = opts.radixPoint || ",";
                    if ((typeof initialValue == "number" || opts.inputType === "number") && radixPoint !== "") {
                        initialValue = initialValue.toString().replace(".", radixPoint);
                    }
                    var valueParts = initialValue.split(radixPoint), integerPart = valueParts[0].replace(/[^\-0-9]/g, ""), decimalPart = valueParts.length > 1 ? valueParts[1].replace(/[^0-9]/g, "") : "";
                    initialValue = integerPart + (decimalPart !== "" ? radixPoint + decimalPart : decimalPart);
                    var digits = 0;
                    if (radixPoint !== "") {
                        digits = decimalPart.length;
                        if (decimalPart !== "") {
                            var digitsFactor = Math.pow(10, digits || 1);
                            if (isFinite(opts.digits)) {
                                digits = parseInt(opts.digits);
                                digitsFactor = Math.pow(10, digits);
                            }
                            initialValue = initialValue.replace(Inputmask.escapeRegex(radixPoint), ".");
                            if (isFinite(initialValue)) initialValue = Math.round(parseFloat(initialValue) * digitsFactor) / digitsFactor;
                            initialValue = initialValue.toString().replace(".", radixPoint);
                        }
                    }
                    if (opts.digits === 0 && initialValue.indexOf(Inputmask.escapeRegex(radixPoint)) !== -1) {
                        initialValue = initialValue.substring(0, initialValue.indexOf(Inputmask.escapeRegex(radixPoint)));
                    }
                    return alignDigits(initialValue.toString().split(""), digits, opts).join("");
                },
                onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
                    var $input = $(this);
                    if (e.ctrlKey) {
                        switch (e.keyCode) {
                          case Inputmask.keyCode.UP:
                            $input.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step));
                            $input.trigger("setvalue");
                            break;

                          case Inputmask.keyCode.DOWN:
                            $input.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step));
                            $input.trigger("setvalue");
                            break;
                        }
                    }
                }
            },
            currency: {
                prefix: "$ ",
                groupSeparator: ",",
                alias: "numeric",
                placeholder: "0",
                autoGroup: true,
                digits: 2,
                digitsOptional: false,
                clearMaskOnLostFocus: false
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                digits: 0,
                radixPoint: ""
            },
            percentage: {
                alias: "numeric",
                digits: 2,
                digitsOptional: true,
                radixPoint: ".",
                placeholder: "0",
                autoGroup: false,
                min: 0,
                max: 100,
                suffix: " %",
                allowMinus: false
            }
        });
        return Inputmask;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function(factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(4), __webpack_require__(2) ], 
            __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    })(function($, Inputmask) {
        if ($.fn.inputmask === undefined) {
            $.fn.inputmask = function(fn, options) {
                var nptmask, input = this[0];
                if (options === undefined) options = {};
                if (typeof fn === "string") {
                    switch (fn) {
                      case "unmaskedvalue":
                        return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();

                      case "remove":
                        return this.each(function() {
                            if (this.inputmask) this.inputmask.remove();
                        });

                      case "getemptymask":
                        return input && input.inputmask ? input.inputmask.getemptymask() : "";

                      case "hasMaskedValue":
                        return input && input.inputmask ? input.inputmask.hasMaskedValue() : false;

                      case "isComplete":
                        return input && input.inputmask ? input.inputmask.isComplete() : true;

                      case "getmetadata":
                        return input && input.inputmask ? input.inputmask.getmetadata() : undefined;

                      case "setvalue":
                        Inputmask.setValue(input, options);
                        break;

                      case "option":
                        if (typeof options === "string") {
                            if (input && input.inputmask !== undefined) {
                                return input.inputmask.option(options);
                            }
                        } else {
                            return this.each(function() {
                                if (this.inputmask !== undefined) {
                                    return this.inputmask.option(options);
                                }
                            });
                        }
                        break;

                      default:
                        options.alias = fn;
                        nptmask = new Inputmask(options);
                        return this.each(function() {
                            nptmask.mask(this);
                        });
                    }
                } else if (Array.isArray(fn)) {
                    options.alias = fn;
                    nptmask = new Inputmask(options);
                    return this.each(function() {
                        nptmask.mask(this);
                    });
                } else if ((typeof fn === "undefined" ? "undefined" : _typeof(fn)) == "object") {
                    nptmask = new Inputmask(fn);
                    if (fn.mask === undefined && fn.alias === undefined) {
                        return this.each(function() {
                            if (this.inputmask !== undefined) {
                                return this.inputmask.option(fn);
                            } else nptmask.mask(this);
                        });
                    } else {
                        return this.each(function() {
                            nptmask.mask(this);
                        });
                    }
                } else if (fn === undefined) {
                    return this.each(function() {
                        nptmask = new Inputmask(options);
                        nptmask.mask(this);
                    });
                }
            };
        }
        return $.fn.inputmask;
    });
} ]);
/*!
 * jQuery Mobile Events
 * by Ben Major
 *
 * Copyright 2011-2017, Ben Major
 * Licensed under the MIT License:
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */

"use strict";!function(e){e.attrFn=e.attrFn||{};var t="ontouchstart"in window,a={tap_pixel_range:5,swipe_h_threshold:50,swipe_v_threshold:50,taphold_threshold:750,doubletap_int:500,shake_threshold:15,touch_capable:t,orientation_support:"orientation"in window&&"onorientationchange"in window,startevent:t?"touchstart":"mousedown",endevent:t?"touchend":"mouseup",moveevent:t?"touchmove":"mousemove",tapevent:t?"tap":"click",scrollevent:t?"touchmove":"scroll",hold_timer:null,tap_timer:null};e.touch={},e.isTouchCapable=function(){return a.touch_capable},e.getStartEvent=function(){return a.startevent},e.getEndEvent=function(){return a.endevent},e.getMoveEvent=function(){return a.moveevent},e.getTapEvent=function(){return a.tapevent},e.getScrollEvent=function(){return a.scrollevent},e.touch.setSwipeThresholdX=function(e){if("number"!=typeof e)throw new Error("Threshold parameter must be a type of number");a.swipe_h_threshold=e},e.touch.setSwipeThresholdY=function(e){if("number"!=typeof e)throw new Error("Threshold parameter must be a type of number");a.swipe_v_threshold=e},e.touch.setDoubleTapInt=function(e){if("number"!=typeof e)throw new Error("Interval parameter must be a type of number");a.doubletap_int=e},e.touch.setTapHoldThreshold=function(e){if("number"!=typeof e)throw new Error("Threshold parameter must be a type of number");a.taphold_threshold=e},e.touch.setTapRange=function(e){if("number"!=typeof e)throw new Error("Ranger parameter must be a type of number");a.tap_pixel_range=threshold},e.each(["tapstart","tapend","tapmove","tap","singletap","doubletap","taphold","swipe","swipeup","swiperight","swipedown","swipeleft","swipeend","scrollstart","scrollend","orientationchange","tap2","taphold2"],function(t,a){e.fn[a]=function(e){return e?this.on(a,e):this.trigger(a)},e.attrFn[a]=!0}),e.event.special.tapstart={setup:function(){var t=this,o=e(t);o.on(a.startevent,function e(n){if(o.data("callee",e),n.which&&1!==n.which)return!1;var i=n.originalEvent,r={position:{x:a.touch_capable?i.touches[0].pageX:n.pageX,y:a.touch_capable?i.touches[0].pageY:n.pageY},offset:{x:a.touch_capable?Math.round(i.changedTouches[0].pageX-(o.offset()?o.offset().left:0)):Math.round(n.pageX-(o.offset()?o.offset().left:0)),y:a.touch_capable?Math.round(i.changedTouches[0].pageY-(o.offset()?o.offset().top:0)):Math.round(n.pageY-(o.offset()?o.offset().top:0))},time:Date.now(),target:n.target};return w(t,"tapstart",n,r),!0})},remove:function(){e(this).off(a.startevent,e(this).data.callee)}},e.event.special.tapmove={setup:function(){var t=this,o=e(t);o.on(a.moveevent,function e(n){o.data("callee",e);var i=n.originalEvent,r={position:{x:a.touch_capable?i.touches[0].pageX:n.pageX,y:a.touch_capable?i.touches[0].pageY:n.pageY},offset:{x:a.touch_capable?Math.round(i.changedTouches[0].pageX-(o.offset()?o.offset().left:0)):Math.round(n.pageX-(o.offset()?o.offset().left:0)),y:a.touch_capable?Math.round(i.changedTouches[0].pageY-(o.offset()?o.offset().top:0)):Math.round(n.pageY-(o.offset()?o.offset().top:0))},time:Date.now(),target:n.target};return w(t,"tapmove",n,r),!0})},remove:function(){e(this).off(a.moveevent,e(this).data.callee)}},e.event.special.tapend={setup:function(){var t=this,o=e(t);o.on(a.endevent,function e(n){o.data("callee",e);var i=n.originalEvent,r={position:{x:a.touch_capable?i.changedTouches[0].pageX:n.pageX,y:a.touch_capable?i.changedTouches[0].pageY:n.pageY},offset:{x:a.touch_capable?Math.round(i.changedTouches[0].pageX-(o.offset()?o.offset().left:0)):Math.round(n.pageX-(o.offset()?o.offset().left:0)),y:a.touch_capable?Math.round(i.changedTouches[0].pageY-(o.offset()?o.offset().top:0)):Math.round(n.pageY-(o.offset()?o.offset().top:0))},time:Date.now(),target:n.target};return w(t,"tapend",n,r),!0})},remove:function(){e(this).off(a.endevent,e(this).data.callee)}},e.event.special.taphold={setup:function(){var t,o=this,n=e(o),i={x:0,y:0},r=0,s=0;n.on(a.startevent,function e(p){if(p.which&&1!==p.which)return!1;n.data("tapheld",!1),t=p.target;var h=p.originalEvent,c=Date.now();a.touch_capable?h.touches[0].pageX:p.pageX,a.touch_capable?h.touches[0].pageY:p.pageY,a.touch_capable?(h.touches[0].pageX,h.touches[0].target.offsetLeft):p.offsetX,a.touch_capable?(h.touches[0].pageY,h.touches[0].target.offsetTop):p.offsetY;i.x=p.originalEvent.targetTouches?p.originalEvent.targetTouches[0].pageX:p.pageX,i.y=p.originalEvent.targetTouches?p.originalEvent.targetTouches[0].pageY:p.pageY,r=i.x,s=i.y;var u=n.parent().data("threshold")?n.parent().data("threshold"):n.data("threshold"),f=void 0!==u&&!1!==u&&parseInt(u)?parseInt(u):a.taphold_threshold;return a.hold_timer=window.setTimeout(function(){var u=i.x-r,f=i.y-s;if(p.target==t&&(i.x==r&&i.y==s||u>=-a.tap_pixel_range&&u<=a.tap_pixel_range&&f>=-a.tap_pixel_range&&f<=a.tap_pixel_range)){n.data("tapheld",!0);for(var l=Date.now()-c,g=p.originalEvent.targetTouches?p.originalEvent.targetTouches:[p],d=[],v=0;v<g.length;v++){var _={position:{x:a.touch_capable?h.changedTouches[v].pageX:p.pageX,y:a.touch_capable?h.changedTouches[v].pageY:p.pageY},offset:{x:a.touch_capable?Math.round(h.changedTouches[v].pageX-(n.offset()?n.offset().left:0)):Math.round(p.pageX-(n.offset()?n.offset().left:0)),y:a.touch_capable?Math.round(h.changedTouches[v].pageY-(n.offset()?n.offset().top:0)):Math.round(p.pageY-(n.offset()?n.offset().top:0))},time:Date.now(),target:p.target,duration:l};d.push(_)}var T=2==g.length?"taphold2":"taphold";n.data("callee1",e),w(o,T,p,d)}},f),!0}).on(a.endevent,function e(){n.data("callee2",e),n.data("tapheld",!1),window.clearTimeout(a.hold_timer)}).on(a.moveevent,function e(t){n.data("callee3",e),r=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX,s=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY})},remove:function(){e(this).off(a.startevent,e(this).data.callee1).off(a.endevent,e(this).data.callee2).off(a.moveevent,e(this).data.callee3)}},e.event.special.doubletap={setup:function(){var t,o,n=this,i=e(n),r=null,s=!1;i.on(a.startevent,function t(n){return(!n.which||1===n.which)&&(i.data("doubletapped",!1),n.target,i.data("callee1",t),o=n.originalEvent,r||(r={position:{x:a.touch_capable?o.touches[0].pageX:n.pageX,y:a.touch_capable?o.touches[0].pageY:n.pageY},offset:{x:a.touch_capable?Math.round(o.changedTouches[0].pageX-(i.offset()?i.offset().left:0)):Math.round(n.pageX-(i.offset()?i.offset().left:0)),y:a.touch_capable?Math.round(o.changedTouches[0].pageY-(i.offset()?i.offset().top:0)):Math.round(n.pageY-(i.offset()?i.offset().top:0))},time:Date.now(),target:n.target,element:n.originalEvent.srcElement,index:e(n.target).index()}),!0)}).on(a.endevent,function p(h){var c=Date.now(),u=c-(i.data("lastTouch")||c+1);if(window.clearTimeout(t),i.data("callee2",p),u<a.doubletap_int&&e(h.target).index()==r.index&&u>100){i.data("doubletapped",!0),window.clearTimeout(a.tap_timer);var f={position:{x:a.touch_capable?h.originalEvent.changedTouches[0].pageX:h.pageX,y:a.touch_capable?h.originalEvent.changedTouches[0].pageY:h.pageY},offset:{x:a.touch_capable?Math.round(o.changedTouches[0].pageX-(i.offset()?i.offset().left:0)):Math.round(h.pageX-(i.offset()?i.offset().left:0)),y:a.touch_capable?Math.round(o.changedTouches[0].pageY-(i.offset()?i.offset().top:0)):Math.round(h.pageY-(i.offset()?i.offset().top:0))},time:Date.now(),target:h.target,element:h.originalEvent.srcElement,index:e(h.target).index()},l={firstTap:r,secondTap:f,interval:f.time-r.time};s||(w(n,"doubletap",h,l),r=null),s=!0,window.setTimeout(function(){s=!1},a.doubletap_int)}else i.data("lastTouch",c),t=window.setTimeout(function(){r=null,window.clearTimeout(t)},a.doubletap_int,[h]);i.data("lastTouch",c)})},remove:function(){e(this).off(a.startevent,e(this).data.callee1).off(a.endevent,e(this).data.callee2)}},e.event.special.singletap={setup:function(){var t=this,o=e(t),n=null,i=null,r={x:0,y:0};o.on(a.startevent,function e(t){return(!t.which||1===t.which)&&(i=Date.now(),n=t.target,o.data("callee1",e),r.x=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX,r.y=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY,!0)}).on(a.endevent,function e(s){if(o.data("callee2",e),s.target==n){var p=s.originalEvent.changedTouches?s.originalEvent.changedTouches[0].pageX:s.pageX,h=s.originalEvent.changedTouches?s.originalEvent.changedTouches[0].pageY:s.pageY;a.tap_timer=window.setTimeout(function(){var e=r.x-p,n=r.y-h;if(!o.data("doubletapped")&&!o.data("tapheld")&&(r.x==p&&r.y==h||e>=-a.tap_pixel_range&&e<=a.tap_pixel_range&&n>=-a.tap_pixel_range&&n<=a.tap_pixel_range)){var c=s.originalEvent,u={position:{x:a.touch_capable?c.changedTouches[0].pageX:s.pageX,y:a.touch_capable?c.changedTouches[0].pageY:s.pageY},offset:{x:a.touch_capable?Math.round(c.changedTouches[0].pageX-(o.offset()?o.offset().left:0)):Math.round(s.pageX-(o.offset()?o.offset().left:0)),y:a.touch_capable?Math.round(c.changedTouches[0].pageY-(o.offset()?o.offset().top:0)):Math.round(s.pageY-(o.offset()?o.offset().top:0))},time:Date.now(),target:s.target};u.time-i<a.taphold_threshold&&w(t,"singletap",s,u)}},a.doubletap_int)}})},remove:function(){e(this).off(a.startevent,e(this).data.callee1).off(a.endevent,e(this).data.callee2)}},e.event.special.tap={setup:function(){var t,o,n=this,i=e(n),r=!1,s=null,p={x:0,y:0};i.on(a.startevent,function e(a){return i.data("callee1",e),(!a.which||1===a.which)&&(r=!0,p.x=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageX:a.pageX,p.y=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageY:a.pageY,t=Date.now(),s=a.target,o=a.originalEvent.targetTouches?a.originalEvent.targetTouches:[a],!0)}).on(a.endevent,function e(h){i.data("callee2",e);var c=h.originalEvent.targetTouches?h.originalEvent.changedTouches[0].pageX:h.pageX,u=h.originalEvent.targetTouches?h.originalEvent.changedTouches[0].pageY:h.pageY,f=p.x-c,l=p.y-u;if(s==h.target&&r&&Date.now()-t<a.taphold_threshold&&(p.x==c&&p.y==u||f>=-a.tap_pixel_range&&f<=a.tap_pixel_range&&l>=-a.tap_pixel_range&&l<=a.tap_pixel_range)){for(var g=h.originalEvent,d=[],v=0;v<o.length;v++){var _={position:{x:a.touch_capable?g.changedTouches[v].pageX:h.pageX,y:a.touch_capable?g.changedTouches[v].pageY:h.pageY},offset:{x:a.touch_capable?Math.round(g.changedTouches[v].pageX-(i.offset()?i.offset().left:0)):Math.round(h.pageX-(i.offset()?i.offset().left:0)),y:a.touch_capable?Math.round(g.changedTouches[v].pageY-(i.offset()?i.offset().top:0)):Math.round(h.pageY-(i.offset()?i.offset().top:0))},time:Date.now(),target:h.target};d.push(_)}var T=2==o.length?"tap2":"tap";w(n,T,h,d)}})},remove:function(){e(this).off(a.startevent,e(this).data.callee1).off(a.endevent,e(this).data.callee2)}},e.event.special.swipe={setup:function(){var t,o=e(this),n=!1,i=!1,r={x:0,y:0},s={x:0,y:0};o.on(a.startevent,function i(p){(o=e(p.currentTarget)).data("callee1",i),r.x=p.originalEvent.targetTouches?p.originalEvent.targetTouches[0].pageX:p.pageX,r.y=p.originalEvent.targetTouches?p.originalEvent.targetTouches[0].pageY:p.pageY,s.x=r.x,s.y=r.y,n=!0;var h=p.originalEvent;t={position:{x:a.touch_capable?h.touches[0].pageX:p.pageX,y:a.touch_capable?h.touches[0].pageY:p.pageY},offset:{x:a.touch_capable?Math.round(h.changedTouches[0].pageX-(o.offset()?o.offset().left:0)):Math.round(p.pageX-(o.offset()?o.offset().left:0)),y:a.touch_capable?Math.round(h.changedTouches[0].pageY-(o.offset()?o.offset().top:0)):Math.round(p.pageY-(o.offset()?o.offset().top:0))},time:Date.now(),target:p.target}}),o.on(a.moveevent,function p(h){var c;(o=e(h.currentTarget)).data("callee2",p),s.x=h.originalEvent.targetTouches?h.originalEvent.targetTouches[0].pageX:h.pageX,s.y=h.originalEvent.targetTouches?h.originalEvent.targetTouches[0].pageY:h.pageY;var u=o.parent().data("xthreshold")?o.parent().data("xthreshold"):o.data("xthreshold"),f=o.parent().data("ythreshold")?o.parent().data("ythreshold"):o.data("ythreshold"),l=void 0!==u&&!1!==u&&parseInt(u)?parseInt(u):a.swipe_h_threshold,g=void 0!==f&&!1!==f&&parseInt(f)?parseInt(f):a.swipe_v_threshold;if(r.y>s.y&&r.y-s.y>g&&(c="swipeup"),r.x<s.x&&s.x-r.x>l&&(c="swiperight"),r.y<s.y&&s.y-r.y>g&&(c="swipedown"),r.x>s.x&&r.x-s.x>l&&(c="swipeleft"),void 0!=c&&n){r.x=0,r.y=0,s.x=0,s.y=0,n=!1;var d=h.originalEvent,v={position:{x:a.touch_capable?d.touches[0].pageX:h.pageX,y:a.touch_capable?d.touches[0].pageY:h.pageY},offset:{x:a.touch_capable?Math.round(d.changedTouches[0].pageX-(o.offset()?o.offset().left:0)):Math.round(h.pageX-(o.offset()?o.offset().left:0)),y:a.touch_capable?Math.round(d.changedTouches[0].pageY-(o.offset()?o.offset().top:0)):Math.round(h.pageY-(o.offset()?o.offset().top:0))},time:Date.now(),target:h.target},w=Math.abs(t.position.x-v.position.x),_=Math.abs(t.position.y-v.position.y),T={startEvnt:t,endEvnt:v,direction:c.replace("swipe",""),xAmount:w,yAmount:_,duration:v.time-t.time};i=!0,o.trigger("swipe",T).trigger(c,T)}}),o.on(a.endevent,function r(s){var p="";if((o=e(s.currentTarget)).data("callee3",r),i){var h=o.data("xthreshold"),c=o.data("ythreshold"),u=void 0!==h&&!1!==h&&parseInt(h)?parseInt(h):a.swipe_h_threshold,f=void 0!==c&&!1!==c&&parseInt(c)?parseInt(c):a.swipe_v_threshold,l=s.originalEvent,g={position:{x:a.touch_capable?l.changedTouches[0].pageX:s.pageX,y:a.touch_capable?l.changedTouches[0].pageY:s.pageY},offset:{x:a.touch_capable?Math.round(l.changedTouches[0].pageX-(o.offset()?o.offset().left:0)):Math.round(s.pageX-(o.offset()?o.offset().left:0)),y:a.touch_capable?Math.round(l.changedTouches[0].pageY-(o.offset()?o.offset().top:0)):Math.round(s.pageY-(o.offset()?o.offset().top:0))},time:Date.now(),target:s.target};t.position.y>g.position.y&&t.position.y-g.position.y>f&&(p="swipeup"),t.position.x<g.position.x&&g.position.x-t.position.x>u&&(p="swiperight"),t.position.y<g.position.y&&g.position.y-t.position.y>f&&(p="swipedown"),t.position.x>g.position.x&&t.position.x-g.position.x>u&&(p="swipeleft");var d=Math.abs(t.position.x-g.position.x),v=Math.abs(t.position.y-g.position.y),w={startEvnt:t,endEvnt:g,direction:p.replace("swipe",""),xAmount:d,yAmount:v,duration:g.time-t.time};o.trigger("swipeend",w)}n=!1,i=!1})},remove:function(){e(this).off(a.startevent,e(this).data.callee1).off(a.moveevent,e(this).data.callee2).off(a.endevent,e(this).data.callee3)}},e.event.special.scrollstart={setup:function(){var t,o,n=this,i=e(n);function r(e,a){w(n,(t=a)?"scrollstart":"scrollend",e)}i.on(a.scrollevent,function e(a){i.data("callee",e),t||r(a,!0),clearTimeout(o),o=setTimeout(function(){r(a,!1)},50)})},remove:function(){e(this).off(a.scrollevent,e(this).data.callee)}};var o,n,i,r,s=e(window),p={0:!0,180:!0};if(a.orientation_support){var h=window.innerWidth||s.width(),c=window.innerHeight||s.height();i=h>c&&h-c>50,r=p[window.orientation],(i&&r||!i&&!r)&&(p={"-90":!0,90:!0})}function u(){var e=o();e!==n&&(n=e,s.trigger("orientationchange"))}e.event.special.orientationchange={setup:function(){return!a.orientation_support&&(n=o(),s.on("throttledresize",u),!0)},teardown:function(){return!a.orientation_support&&(s.off("throttledresize",u),!0)},add:function(e){var t=e.handler;e.handler=function(e){return e.orientation=o(),t.apply(this,arguments)}}},e.event.special.orientationchange.orientation=o=function(){var e=document.documentElement;return(a.orientation_support?p[window.orientation]:e&&e.clientWidth/e.clientHeight<1.1)?"portrait":"landscape"},e.event.special.throttledresize={setup:function(){e(this).on("resize",d)},teardown:function(){e(this).off("resize",d)}};var f,l,g,d=function(){l=Date.now(),(g=l-v)>=250?(v=l,e(this).trigger("throttledresize")):(f&&window.clearTimeout(f),f=window.setTimeout(u,250-g))},v=0;function w(t,a,o,n){var i=o.type;o.type=a,e.event.dispatch.call(t,o,n),o.type=i}e.each({scrollend:"scrollstart",swipeup:"swipe",swiperight:"swipe",swipedown:"swipe",swipeleft:"swipe",swipeend:"swipe",tap2:"tap",taphold2:"taphold"},function(t,a){e.event.special[t]={setup:function(){e(this).on(a,e.noop)}}})}(jQuery);

/*
 * Lightcase - jQuery Plugin
 * The smart and flexible Lightbox Plugin.
 *
 * @author		Cornel Boppart <cornel@bopp-art.com>
 * @copyright	Author
 *
 * @version		2.5.0 (11/03/2018)
 */

;(function ($) {

	'use strict';

	var _self = {
		cache: {},

		support: {},

		objects: {},

		/**
		 * Initializes the plugin
		 *
		 * @param	{object}	options
		 * @return	{object}
		 */
		init: function (options) {
			return this.each(function () {
				$(this).unbind('click.lightcase').bind('click.lightcase', function (event) {
					event.preventDefault();
					$(this).lightcase('start', options);
				});
			});
		},

		/**
		 * Starts the plugin
		 *
		 * @param	{object}	options
		 * @return	{void}
		 */
		start: function (options) {
			_self.origin = lightcase.origin = this;

			_self.settings = lightcase.settings = $.extend(true, {
				idPrefix: 'lightcase-',
				classPrefix: 'lightcase-',
				attrPrefix: 'lc-',
				transition: 'elastic',
				transitionOpen: null,
				transitionClose: null,
				transitionIn: null,
				transitionOut: null,
				cssTransitions: true,
				speedIn: 250,
				speedOut: 250,
				width: null,
				height: null,
				maxWidth: 800,
				maxHeight: 500,
				forceWidth: false,
				forceHeight: false,
				liveResize: true,
				fullScreenModeForMobile: true,
				mobileMatchExpression: /(iphone|ipod|ipad|android|blackberry|symbian)/,
				disableShrink: false,
				fixedRatio: true,
				shrinkFactor: .75,
				overlayOpacity: .9,
				slideshow: false,
				slideshowAutoStart: true,
				breakBeforeShow: false,
				timeout: 5000,
				swipe: true,
				useKeys: true,
				useCategories: true,
				useAsCollection: false,
				navigateEndless: true,
				closeOnOverlayClick: true,
				title: null,
				caption: null,
				showTitle: true,
				showCaption: true,
				showSequenceInfo: true,
				inline: {
					width: 'auto',
					height: 'auto'
				},
				ajax: {
					width: 'auto',
					height: 'auto',
					type: 'get',
					dataType: 'html',
					data: {}
				},
				iframe: {
					width: 800,
					height: 500,
					frameborder: 0
				},
				flash: {
					width: 400,
					height: 205,
					wmode: 'transparent'
				},
				video: {
					width: 400,
					height: 225,
					poster: '',
					preload: 'auto',
					controls: true,
					autobuffer: true,
					autoplay: true,
					loop: false
				},
				attr: 'data-rel',
				href: null,
				type: null,
				typeMapping: {
					'image': 'jpg,jpeg,gif,png,bmp',
					'flash': 'swf',
					'video': 'mp4,mov,ogv,ogg,webm',
					'iframe': 'html,php',
					'ajax': 'json,txt',
					'inline': '#'
				},
				errorMessage: function () {
					return '<p class="' + _self.settings.classPrefix + 'error">' + _self.settings.labels['errorMessage'] + '</p>';
				},
				labels: {
					'errorMessage': 'Source could not be found...',
					'sequenceInfo.of': ' of ',
					'close': 'Close',
					'navigator.prev': 'Prev',
					'navigator.next': 'Next',
 					'navigator.play': 'Play',
					'navigator.pause': 'Pause'
				},
				markup: function () {
					_self.objects.body.append(
						_self.objects.overlay = $('<div id="' + _self.settings.idPrefix + 'overlay"></div>'),
						_self.objects.loading = $('<div id="' + _self.settings.idPrefix + 'loading" class="' + _self.settings.classPrefix + 'icon-spin"></div>'),
						_self.objects.case = $('<div id="' + _self.settings.idPrefix + 'case" aria-hidden="true" role="dialog"></div>')
					);
					_self.objects.case.after(
						_self.objects.close = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-close"><span>' + _self.settings.labels['close'] + '</span></a>'),
						_self.objects.nav = $('<div id="' + _self.settings.idPrefix + 'nav"></div>')
					);
					_self.objects.nav.append(
						_self.objects.prev = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-prev"><span>' + _self.settings.labels['navigator.prev'] + '</span></a>').hide(),
						_self.objects.next = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-next"><span>' + _self.settings.labels['navigator.next'] + '</span></a>').hide(),
						_self.objects.play = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-play"><span>' + _self.settings.labels['navigator.play'] + '</span></a>').hide(),
						_self.objects.pause = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-pause"><span>' + _self.settings.labels['navigator.pause'] + '</span></a>').hide()
					);
					_self.objects.case.append(
						_self.objects.content = $('<div id="' + _self.settings.idPrefix + 'content"></div>'),
						_self.objects.info = $('<div id="' + _self.settings.idPrefix + 'info"></div>')
					);
					_self.objects.content.append(
						_self.objects.contentInner = $('<div class="' + _self.settings.classPrefix + 'contentInner"></div>')
					);
					_self.objects.info.append(
						_self.objects.sequenceInfo = $('<div id="' + _self.settings.idPrefix + 'sequenceInfo"></div>'),
						_self.objects.title = $('<h4 id="' + _self.settings.idPrefix + 'title"></h4>'),
						_self.objects.caption = $('<p id="' + _self.settings.idPrefix + 'caption"></p>')
					);
				},
				onInit: {},
				onStart: {},
				onBeforeCalculateDimensions: {},
				onAfterCalculateDimensions: {},
				onBeforeShow: {},
				onFinish: {},
				onResize: {},
				onClose: {},
				onCleanup: {}
			},
			options,
			// Load options from data-lc-options attribute
			_self.origin.data ? _self.origin.data('lc-options') : {});

			_self.objects.document = $('html');
			_self.objects.body = $('body');

			// Call onInit hook functions
			_self._callHooks(_self.settings.onInit);

			_self.objectData = _self._setObjectData(this);

			_self._addElements();
			_self._open();

			_self.dimensions = _self.getViewportDimensions();
		},

		/**
		 * Getter method for objects
		 *
		 * @param	{string}	name
		 * @return	{object}
		 */
		get: function (name) {
			return _self.objects[name];
		},

		/**
		 * Getter method for objectData
		 *
		 * @return	{object}
		 */
		getObjectData: function () {
			return _self.objectData;
		},

		/**
		 * Sets the object data
		 *
		 * @param	{object}	object
		 * @return	{object}	objectData
		 */
		_setObjectData: function (object) {
		 	var $object = $(object),
				objectData = {
				this: $(object),
				title: _self.settings.title || $object.attr(_self._prefixAttributeName('title')) || $object.attr('title'),
				caption: _self.settings.caption || $object.attr(_self._prefixAttributeName('caption')) || $object.children('img').attr('alt'),
				url: _self._determineUrl(),
				requestType: _self.settings.ajax.type,
				requestData: _self.settings.ajax.data,
				requestDataType: _self.settings.ajax.dataType,
				rel: $object.attr(_self._determineAttributeSelector()),
				type: _self.settings.type || _self._verifyDataType(_self._determineUrl()),
				isPartOfSequence: _self.settings.useAsCollection || _self._isPartOfSequence($object.attr(_self.settings.attr), ':'),
				isPartOfSequenceWithSlideshow: _self._isPartOfSequence($object.attr(_self.settings.attr), ':slideshow'),
				currentIndex: $(_self._determineAttributeSelector()).index($object),
				sequenceLength: $(_self._determineAttributeSelector()).length
			};

			// Add sequence info to objectData
			objectData.sequenceInfo = (objectData.currentIndex + 1) + _self.settings.labels['sequenceInfo.of'] + objectData.sequenceLength;

			// Add next/prev index
			objectData.prevIndex = objectData.currentIndex - 1;
			objectData.nextIndex = objectData.currentIndex + 1;

			return objectData;
		},

		/**
		 * Prefixes a data attribute name with defined name from 'settings.attrPrefix'
		 * to ensure more uniqueness for all lightcase related/used attributes.
		 *
		 * @param	{string}	name
		 * @return	{string}
		 */
		_prefixAttributeName: function (name) {
			return 'data-' + _self.settings.attrPrefix + name;
		},

		/**
		 * Determines the link target considering 'settings.href' and data attributes
		 * but also with a fallback to the default 'href' value.
		 *
		 * @return	{string}
		 */
		_determineLinkTarget: function () {
			return _self.settings.href || $(_self.origin).attr(_self._prefixAttributeName('href')) || $(_self.origin).attr('href');
		},

		/**
		 * Determines the attribute selector to use, depending on
		 * whether categorized collections are beeing used or not.
		 *
		 * @return	{string}	selector
		 */
		_determineAttributeSelector: function () {
			var	$origin = $(_self.origin),
				selector = '';

			if (typeof _self.cache.selector !== 'undefined') {
				selector = _self.cache.selector;
			} else if (_self.settings.useCategories === true && $origin.attr(_self._prefixAttributeName('categories'))) {
				var	categories = $origin.attr(_self._prefixAttributeName('categories')).split(' ');

				$.each(categories, function (index, category) {
					if (index > 0) {
						selector += ',';
					}
					selector += '[' + _self._prefixAttributeName('categories') + '~="' + category + '"]';
				});
			} else {
				selector = '[' + _self.settings.attr + '="' + $origin.attr(_self.settings.attr) + '"]';
			}

			_self.cache.selector = selector;

			return selector;
		},

		/**
		 * Determines the correct resource according to the
		 * current viewport and density.
		 *
		 * @return	{string}	url
		 */
		_determineUrl: function () {
			var	dataUrl = _self._verifyDataUrl(_self._determineLinkTarget()),
				width = 0,
				density = 0,
				supportLevel = '',
				url;

			$.each(dataUrl, function (index, src) {
				switch (_self._verifyDataType(src.url)) {
					case 'video':
						var	video = document.createElement('video'),
							videoType = _self._verifyDataType(src.url) + '/' + _self._getFileUrlSuffix(src.url);

						// Check if browser can play this type of video format
						if (supportLevel !== 'probably' && supportLevel !== video.canPlayType(videoType) && video.canPlayType(videoType) !== '') {
							supportLevel = video.canPlayType(videoType);
							url = src.url;
						}
						break;
					default:
						if (
							// Check density
							_self._devicePixelRatio() >= src.density &&
							src.density >= density &&
							// Check viewport width
							_self._matchMedia()('screen and (min-width:' + src.width + 'px)').matches &&
							src.width >= width
						) {
							width = src.width;
							density = src.density;
							url = src.url;
						}
						break;
				}
			});

			return url;
		},

		/**
		 * Normalizes an url and returns information about the resource path,
		 * the viewport width as well as density if defined.
		 *
		 * @param	{string}	url	Path to resource in format of an url or srcset
		 * @return	{object}
		 */
		_normalizeUrl: function (url) {
			var srcExp = /^\d+$/;

			return url.split(',').map(function (str) {
				var src = {
					width: 0,
					density: 0
				};

				str.trim().split(/\s+/).forEach(function (url, i) {
					if (i === 0) {
						return src.url = url;
					}

					var value = url.substring(0, url.length - 1),
						lastChar = url[url.length - 1],
						intVal = parseInt(value, 10),
						floatVal = parseFloat(value);
					if (lastChar === 'w' && srcExp.test(value)) {
						src.width = intVal;
					} else if (lastChar === 'h' && srcExp.test(value)) {
						src.height = intVal;
					} else if (lastChar === 'x' && !isNaN(floatVal)) {
						src.density = floatVal;
					}
				});

				return src;
			});
		},

		/**
		 * Verifies if the link is part of a sequence
		 *
		 * @param	{string}	rel
		 * @param	{string}	expression
		 * @return	{boolean}
		 */
		_isPartOfSequence: function (rel, expression) {
			var getSimilarLinks = $('[' + _self.settings.attr + '="' + rel + '"]'),
				regexp = new RegExp(expression);

			return (regexp.test(rel) && getSimilarLinks.length > 1);
		},

		/**
		 * Verifies if the slideshow should be enabled
		 *
		 * @return	{boolean}
		 */
		isSlideshowEnabled: function () {
			return (_self.objectData.isPartOfSequence && (_self.settings.slideshow === true || _self.objectData.isPartOfSequenceWithSlideshow === true));
		},

		/**
		 * Loads the new content to show
		 *
		 * @return	{void}
		 */
		_loadContent: function () {
			if (_self.cache.originalObject) {
				_self._restoreObject();
			}

			_self._createObject();
		},

		/**
		 * Creates a new object
		 *
		 * @return	{void}
		 */
		_createObject: function () {
			var $object;

			// Create object
			switch (_self.objectData.type) {
				case 'image':
					$object = $(new Image());
					$object.attr({
						// The time expression is required to prevent the binding of an image load
						'src': _self.objectData.url,
						'alt': _self.objectData.title
					});
					break;
				case 'inline':
					$object = $('<div class="' + _self.settings.classPrefix + 'inlineWrap"></div>');
					$object.html(_self._cloneObject($(_self.objectData.url)));

					// Add custom attributes from _self.settings
					$.each(_self.settings.inline, function (name, value) {
						$object.attr(_self._prefixAttributeName(name), value);
					});
					break;
				case 'ajax':
					$object = $('<div class="' + _self.settings.classPrefix + 'inlineWrap"></div>');

					// Add custom attributes from _self.settings
					$.each(_self.settings.ajax, function (name, value) {
						if (name !== 'data') {
							$object.attr(_self._prefixAttributeName(name), value);
						}
					});
					break;
				case 'flash':
					$object = $('<embed src="' + _self.objectData.url + '" type="application/x-shockwave-flash"></embed>');

					// Add custom attributes from _self.settings
					$.each(_self.settings.flash, function (name, value) {
						$object.attr(name, value);
					});
					break;
				case 'video':
					$object = $('<video></video>');
					$object.attr('src', _self.objectData.url);

					// Add custom attributes from _self.settings
					$.each(_self.settings.video, function (name, value) {
						$object.attr(name, value);
					});
					break;
				default:
					$object = $('<iframe></iframe>');
					$object.attr({
						'src': _self.objectData.url
					});

					// Add custom attributes from _self.settings
					$.each(_self.settings.iframe, function (name, value) {
						$object.attr(name, value);
					});
					break;
			}

			_self._addObject($object);
			_self._loadObject($object);
		},

		/**
		 * Adds the new object to the markup
		 *
		 * @param	{object}	$object
		 * @return	{void}
		 */
		_addObject: function ($object) {
			// Add object to content holder
			_self.objects.contentInner.html($object);

			// Start loading
			_self._loading('start');

			// Call onStart hook functions
			_self._callHooks(_self.settings.onStart);

			// Add sequenceInfo to the content holder or hide if its empty
			if (_self.settings.showSequenceInfo === true && _self.objectData.isPartOfSequence) {
				_self.objects.sequenceInfo.html(_self.objectData.sequenceInfo);
				_self.objects.sequenceInfo.show();
			} else {
				_self.objects.sequenceInfo.empty();
				_self.objects.sequenceInfo.hide();
			}
			// Add title to the content holder or hide if its empty
			if (_self.settings.showTitle === true && _self.objectData.title !== undefined && _self.objectData.title !== '') {
				_self.objects.title.html(_self.objectData.title);
				_self.objects.title.show();
			} else {
				_self.objects.title.empty();
				_self.objects.title.hide();
			}
			// Add caption to the content holder or hide if its empty
			if (_self.settings.showCaption === true && _self.objectData.caption !== undefined && _self.objectData.caption !== '') {
				_self.objects.caption.html(_self.objectData.caption);
				_self.objects.caption.show();
			} else {
				_self.objects.caption.empty();
				_self.objects.caption.hide();
			}
		},

		/**
		 * Loads the new object
		 *
		 * @param	{object}	$object
		 * @return	{void}
		 */
		_loadObject: function ($object) {
			// Load the object
			switch (_self.objectData.type) {
				case 'inline':
					if ($(_self.objectData.url)) {
						_self._showContent($object);
					} else {
						_self.error();
					}
					break;
				case 'ajax':
					$.ajax(
						$.extend({}, _self.settings.ajax, {
							url: _self.objectData.url,
							type: _self.objectData.requestType,
							dataType: _self.objectData.requestDataType,
							data: _self.objectData.requestData,
							success: function (data, textStatus, jqXHR) {
								// Check for X-Ajax-Location
								if (jqXHR.getResponseHeader('X-Ajax-Location')) {
									_self.objectData.url = jqXHR.getResponseHeader('X-Ajax-Location');
									_self._loadObject($object);
								}
								else {
									// Unserialize if data is transferred as json
									if (_self.objectData.requestDataType === 'json') {
										_self.objectData.data = data;
									} else {
										$object.html(data);
									}
									_self._showContent($object);
								}
							},
							error: function (jqXHR, textStatus, errorThrown) {
								_self.error();
							}
						})
					);
					break;
				case 'flash':
					_self._showContent($object);
					break;
				case 'video':
					if (typeof($object.get(0).canPlayType) === 'function' || _self.objects.case.find('video').length === 0) {
						_self._showContent($object);
					} else {
						_self.error();
					}
					break;
				default:
					if (_self.objectData.url) {
						$object.on('load', function () {
							_self._showContent($object);
						});
						$object.on('error', function () {
							_self.error();
						});
					} else {
						_self.error();
					}
					break;
			}
		},

		/**
		 * Throws an error message if something went wrong
		 *
		 * @return	{void}
		 */
		error: function () {
			_self.objectData.type = 'error';
			var $object = $('<div class="' + _self.settings.classPrefix + 'inlineWrap"></div>');

			$object.html(_self.settings.errorMessage);
			_self.objects.contentInner.html($object);

			_self._showContent(_self.objects.contentInner);
		},

		/**
		 * Calculates the dimensions to fit content
		 *
		 * @param	{object}	$object
		 * @return	{void}
		 */
		_calculateDimensions: function ($object) {
			_self._cleanupDimensions();

			if (!$object) return;

			// Set default dimensions
			var dimensions = {
				ratio: 1,
				objectWidth: $object.attr('width') ? $object.attr('width') : $object.attr(_self._prefixAttributeName('width')),
				objectHeight: $object.attr('height') ? $object.attr('height') : $object.attr(_self._prefixAttributeName('height'))
			};

			if (!_self.settings.disableShrink) {
				// Add calculated maximum width/height to dimensions
				dimensions.maxWidth = parseInt(_self.dimensions.windowWidth * _self.settings.shrinkFactor);
				dimensions.maxHeight = parseInt(_self.dimensions.windowHeight * _self.settings.shrinkFactor);

				// If the auto calculated maxWidth/maxHeight greather than the user-defined one, use that.
				if (dimensions.maxWidth > _self.settings.maxWidth) {
					dimensions.maxWidth = _self.settings.maxWidth;
				}
				if (dimensions.maxHeight > _self.settings.maxHeight) {
					dimensions.maxHeight = _self.settings.maxHeight;
				}

				// Calculate the difference between screen width/height and image width/height
				dimensions.differenceWidthAsPercent = parseInt(100 / dimensions.maxWidth * dimensions.objectWidth);
				dimensions.differenceHeightAsPercent = parseInt(100 / dimensions.maxHeight * dimensions.objectHeight);

				switch (_self.objectData.type) {
					case 'image':
					case 'flash':
					case 'video':
					case 'iframe':
					case 'ajax':
					case 'inline':
						if (_self.objectData.type === 'image' || _self.settings.fixedRatio === true) {
							if (dimensions.differenceWidthAsPercent > 100 && dimensions.differenceWidthAsPercent > dimensions.differenceHeightAsPercent) {
								dimensions.objectWidth = dimensions.maxWidth;
								dimensions.objectHeight = parseInt(dimensions.objectHeight / dimensions.differenceWidthAsPercent * 100);
							}
							if (dimensions.differenceHeightAsPercent > 100 && dimensions.differenceHeightAsPercent > dimensions.differenceWidthAsPercent) {
								dimensions.objectWidth = parseInt(dimensions.objectWidth / dimensions.differenceHeightAsPercent * 100);
								dimensions.objectHeight = dimensions.maxHeight;
							}
							if (dimensions.differenceHeightAsPercent > 100 && dimensions.differenceWidthAsPercent < dimensions.differenceHeightAsPercent) {
								dimensions.objectWidth = parseInt(dimensions.maxWidth / dimensions.differenceHeightAsPercent * dimensions.differenceWidthAsPercent);
								dimensions.objectHeight = dimensions.maxHeight;
							}
							break;
						}
					case 'error':
						if (!isNaN(dimensions.objectWidth) && dimensions.objectWidth > dimensions.maxWidth) {
							dimensions.objectWidth = dimensions.maxWidth;
						}
						break;
					default:
						if ((isNaN(dimensions.objectWidth) || dimensions.objectWidth > dimensions.maxWidth) && !_self.settings.forceWidth) {
							dimensions.objectWidth = dimensions.maxWidth;
						}
						if (((isNaN(dimensions.objectHeight) && dimensions.objectHeight !== 'auto') || dimensions.objectHeight > dimensions.maxHeight) && !_self.settings.forceHeight) {
							dimensions.objectHeight = dimensions.maxHeight;
						}
						break;
				}
			}

			if (_self.settings.forceWidth) {
				try {
					dimensions.objectWidth = _self.settings[_self.objectData.type].width;
				} catch (e) {
					dimensions.objectWidth = _self.settings.width || dimensions.objectWidth;
				}

				dimensions.maxWidth = null;
			}
			if ($object.attr(_self._prefixAttributeName('max-width'))) {
				dimensions.maxWidth = $object.attr(_self._prefixAttributeName('max-width'));
			}

			if (_self.settings.forceHeight) {
				try {
					dimensions.objectHeight = _self.settings[_self.objectData.type].height;
				} catch (e) {
					dimensions.objectHeight = _self.settings.height || dimensions.objectHeight;
				}

				dimensions.maxHeight = null;
			}
			if ($object.attr(_self._prefixAttributeName('max-height'))) {
				dimensions.maxHeight = $object.attr(_self._prefixAttributeName('max-height'));
			}
			_self._adjustDimensions($object, dimensions);
		},

		/**
		 * Adjusts the dimensions
		 *
		 * @param	{object}	$object
		 * @param	{object}	dimensions
		 * @return	{void}
		 */
		_adjustDimensions: function ($object, dimensions) {
			// Adjust width and height
			$object.css({
				'width': dimensions.objectWidth,
				'height': dimensions.objectHeight,
				'max-width': dimensions.maxWidth,
				'max-height': dimensions.maxHeight
			});

			_self.objects.contentInner.css({
				'width': $object.outerWidth(),
				'height': $object.outerHeight(),
				'max-width': '100%'
			});

			_self.objects.case.css({
				'width': _self.objects.contentInner.outerWidth(),
				'max-width': '100%'
			});

			// Adjust margin
			_self.objects.case.css({
				'margin-top': parseInt(-(_self.objects.case.outerHeight() / 2)),
				'margin-left': parseInt(-(_self.objects.case.outerWidth() / 2))
			});
		},

		/**
		 * Handles the _loading
		 *
		 * @param	{string}	process
		 * @return	{void}
		 */
		_loading: function (process) {
			if (process === 'start') {
				_self.objects.case.addClass(_self.settings.classPrefix + 'loading');
				_self.objects.loading.show();
			} else if (process === 'end') {
				_self.objects.case.removeClass(_self.settings.classPrefix + 'loading');
				_self.objects.loading.hide();
			}
		},


		/**
		 * Gets the client screen dimensions
		 *
		 * @return	{object}	dimensions
		 */
		getViewportDimensions: function () {
			return {
				windowWidth: $(window).innerWidth(),
				windowHeight: $(window).innerHeight()
			};
		},

		/**
		 * Verifies the url
		 *
		 * @param	{string}	dataUrl
		 * @return	{object}	dataUrl	Clean url for processing content
		 */
		_verifyDataUrl: function (dataUrl) {
			if (!dataUrl || dataUrl === undefined || dataUrl === '') {
				return false;
			}

			if (dataUrl.indexOf('#') > -1) {
				dataUrl = dataUrl.split('#');
				dataUrl = '#' + dataUrl[dataUrl.length - 1];
			}

			return _self._normalizeUrl(dataUrl.toString());
		},

			//
		/**
		 * Tries to get the (file) suffix of an url
		 *
		 * @param	{string}	url
		 * @return	{string}
		 */
		_getFileUrlSuffix: function (url) {
			var re = /(?:\.([^.]+))?$/;
			return re.exec(url.toLowerCase())[1];
		},

		/**
		 * Verifies the data type of the content to load
		 *
		 * @param	{string}			url
		 * @return	{string|boolean}	Array key if expression matched, else false
		 */
		_verifyDataType: function (url) {
			var typeMapping = _self.settings.typeMapping;

			// Early abort if dataUrl couldn't be verified
			if (!url) {
				return false;
			}

			// Verify the dataType of url according to typeMapping which
			// has been defined in settings.
			for (var key in typeMapping) {
				if (typeMapping.hasOwnProperty(key)) {
					var suffixArr = typeMapping[key].split(',');

					for (var i = 0; i < suffixArr.length; i++) {
						var suffix = suffixArr[i].toLowerCase(),
							regexp = new RegExp('\.(' + suffix + ')$', 'i'),
							str = url.toLowerCase().split('?')[0].substr(-5);

						if (regexp.test(str) === true || (key === 'inline' && (url.indexOf(suffix) > -1))) {
							return key;
						}
					}
				}
			}

			// If no expression matched, return 'iframe'.
			return 'iframe';
		},

		/**
		 * Extends html markup with the essential tags
		 *
		 * @return	{void}
		 */
		_addElements: function () {
			if (typeof _self.objects.case !== 'undefined' && $('#' + _self.objects.case.attr('id')).length) {
				return;
			}

			_self.settings.markup();
		},

		/**
		 * Shows the loaded content
		 *
		 * @param	{object}	$object
		 * @return	{void}
		 */
		_showContent: function ($object) {
			// Add data attribute with the object type
			_self.objects.document.attr(_self._prefixAttributeName('type'), _self.objectData.type);

			_self.cache.object = $object;

			// Call onBeforeShow hook functions
			_self._callHooks(_self.settings.onBeforeShow);

			if (_self.settings.breakBeforeShow) return;
			_self.show();
		},

		/**
		 * Starts the 'inTransition'
		 * @return	{void}
		 */
		_startInTransition: function () {
			switch (_self.transition.in()) {
				case 'scrollTop':
				case 'scrollRight':
				case 'scrollBottom':
				case 'scrollLeft':
				case 'scrollHorizontal':
				case 'scrollVertical':
					_self.transition.scroll(_self.objects.case, 'in', _self.settings.speedIn);
					_self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn);
					break;
				case 'elastic':
					if (_self.objects.case.css('opacity') < 1) {
						_self.transition.zoom(_self.objects.case, 'in', _self.settings.speedIn);
						_self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn);
				}
				case 'fade':
				case 'fadeInline':
					_self.transition.fade(_self.objects.case, 'in', _self.settings.speedIn);
					_self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn);
					break;
				default:
					_self.transition.fade(_self.objects.case, 'in', 0);
					break;
			}

			// End loading.
			_self._loading('end');
			_self.isBusy = false;

			// Set index of the first item opened
			if (!_self.cache.firstOpened) {
				_self.cache.firstOpened = _self.objectData.this;
			}

			// Fade in the info with delay
			_self.objects.info.hide();
			setTimeout(function () {
				 _self.transition.fade(_self.objects.info, 'in', _self.settings.speedIn);
			}, _self.settings.speedIn);

			// Call onFinish hook functions
			_self._callHooks(_self.settings.onFinish);
		},

		/**
		 * Processes the content to show
		 *
		 * @return	{void}
		 */
		_processContent: function () {
			_self.isBusy = true;

			// Fade out the info at first
			_self.transition.fade(_self.objects.info, 'out', 0);

			switch (_self.settings.transitionOut) {
				case 'scrollTop':
				case 'scrollRight':
				case 'scrollBottom':
				case 'scrollLeft':
				case 'scrollVertical':
				case 'scrollHorizontal':
					if (_self.objects.case.is(':hidden')) {
						_self.transition.fade(_self.objects.contentInner, 'out', 0);
						_self.transition.fade(_self.objects.case, 'out', 0, 0, function () {
							_self._loadContent();
						});
					} else {
						_self.transition.scroll(_self.objects.case, 'out', _self.settings.speedOut, function () {
							_self._loadContent();
						});
					}
					break;
				case 'fade':
					if (_self.objects.case.is(':hidden')) {
						_self.transition.fade(_self.objects.case, 'out', 0, 0, function () {
							_self._loadContent();
						});
					} else {
						_self.transition.fade(_self.objects.case, 'out', _self.settings.speedOut, 0, function () {
							_self._loadContent();
						});
					}
					break;
				case 'fadeInline':
				case 'elastic':
					if (_self.objects.case.is(':hidden')) {
						_self.transition.fade(_self.objects.case, 'out', 0, 0, function () {
							_self._loadContent();
						});
					} else {
						_self.transition.fade(_self.objects.contentInner, 'out', _self.settings.speedOut, 0, function () {
							_self._loadContent();
						});
					}
					break;
				default:
					_self.transition.fade(_self.objects.case, 'out', 0, 0, function () {
						_self._loadContent();
					});
					break;
			}
		},

		/**
		 * Handles events for gallery buttons
		 *
		 * @return	{void}
		 */
		_handleEvents: function () {
			_self._unbindEvents();

			_self.objects.nav.children().not(_self.objects.close).hide();

			// If slideshow is enabled, show play/pause and start timeout.
			if (_self.isSlideshowEnabled()) {
				// Only start the timeout if slideshow autostart is enabled and slideshow is not pausing
				if (
					(_self.settings.slideshowAutoStart === true || _self.isSlideshowStarted) &&
					!_self.objects.nav.hasClass(_self.settings.classPrefix + 'paused')
				) {
					_self._startTimeout();
				} else {
					_self._stopTimeout();
				}
			}

			if (_self.settings.liveResize) {
				_self._watchResizeInteraction();
			}

			_self.objects.close.click(function (event) {
				event.preventDefault();
				_self.close();
			});

			if (_self.settings.closeOnOverlayClick === true) {
				_self.objects.overlay.css('cursor', 'pointer').click(function (event) {
					event.preventDefault();

					_self.close();
				});
			}

			if (_self.settings.useKeys === true) {
				_self._addKeyEvents();
			}

			if (_self.objectData.isPartOfSequence) {
				_self.objects.nav.attr(_self._prefixAttributeName('ispartofsequence'), true);
				_self.objects.nav.data('items', _self._setNavigation());

				_self.objects.prev.click(function (event) {
					event.preventDefault();

					if (_self.settings.navigateEndless === true || !_self.item.isFirst()) {
						_self.objects.prev.unbind('click');
						_self.cache.action = 'prev';
						_self.objects.nav.data('items').prev.click();

						if (_self.isSlideshowEnabled()) {
							_self._stopTimeout();
						}
					}
				});

				_self.objects.next.click(function (event) {
					event.preventDefault();

					if (_self.settings.navigateEndless === true || !_self.item.isLast()) {
						_self.objects.next.unbind('click');
						_self.cache.action = 'next';
						_self.objects.nav.data('items').next.click();

						if (_self.isSlideshowEnabled()) {
							_self._stopTimeout();
						}
					}
				});

				if (_self.isSlideshowEnabled()) {
					_self.objects.play.click(function (event) {
						event.preventDefault();
						_self._startTimeout();
					});
					_self.objects.pause.click(function (event) {
						event.preventDefault();
						_self._stopTimeout();
					});
				}

				// Enable swiping if activated
				if (_self.settings.swipe === true) {
					if ($.isPlainObject($.event.special.swipeleft)) {
						_self.objects.case.on('swipeleft', function (event) {
							event.preventDefault();
							_self.objects.next.click();
							if (_self.isSlideshowEnabled()) {
								_self._stopTimeout();
							}
						});
					}
					if ($.isPlainObject($.event.special.swiperight)) {
						_self.objects.case.on('swiperight', function (event) {
							event.preventDefault();
							_self.objects.prev.click();
							if (_self.isSlideshowEnabled()) {
								_self._stopTimeout();
							}
						});
					}
				}
			}
		},

		/**
		 * Adds the key events
		 *
		 * @return	{void}
		 */
		_addKeyEvents: function () {
			$(document).bind('keyup.lightcase', function (event) {
				// Do nothing if lightcase is in process
				if (_self.isBusy) {
					return;
				}

				switch (event.keyCode) {
					// Escape key
					case 27:
						_self.objects.close.click();
						break;
					// Backward key
					case 37:
						if (_self.objectData.isPartOfSequence) {
							_self.objects.prev.click();
						}
						break;
					// Forward key
					case 39:
						if (_self.objectData.isPartOfSequence) {
							_self.objects.next.click();
						}
						break;
				}
			});
		},

		/**
		 * Starts the slideshow timeout
		 *
		 * @return	{void}
		 */
		_startTimeout: function () {
			_self.isSlideshowStarted = true;

			_self.objects.play.hide();
			_self.objects.pause.show();

			_self.cache.action = 'next';
			_self.objects.nav.removeClass(_self.settings.classPrefix + 'paused');

			_self.timeout = setTimeout(function () {
				_self.objects.nav.data('items').next.click();
			}, _self.settings.timeout);
		},

		/**
		 * Stops the slideshow timeout
		 *
		 * @return	{void}
		 */
		_stopTimeout: function () {
			_self.objects.play.show();
			_self.objects.pause.hide();

			_self.objects.nav.addClass(_self.settings.classPrefix + 'paused');

			clearTimeout(_self.timeout);
		},

		/**
		 * Sets the navigator buttons (prev/next)
		 *
		 * @return	{object}	items
		 */
		_setNavigation: function () {
			var $links = $((_self.cache.selector || _self.settings.attr)),
				sequenceLength = _self.objectData.sequenceLength - 1,
				items = {
					prev: $links.eq(_self.objectData.prevIndex),
					next: $links.eq(_self.objectData.nextIndex)
				};

			if (_self.objectData.currentIndex > 0) {
				_self.objects.prev.show();
			} else {
				items.prevItem = $links.eq(sequenceLength);
			}
			if (_self.objectData.nextIndex <= sequenceLength) {
				_self.objects.next.show();
			} else {
				items.next = $links.eq(0);
			}

			if (_self.settings.navigateEndless === true) {
				_self.objects.prev.show();
				_self.objects.next.show();
			}

			return items;
		},

		/**
		 * Item information/status
		 *
		 */
		item: {
			/**
			 * Verifies if the current item is first item.
			 *
			 * @return	{boolean}
			 */
			isFirst: function () {
				return (_self.objectData.currentIndex === 0);
			},

			/**
			 * Verifies if the current item is first item opened.
			 *
			 * @return	{boolean}
			 */
			isFirstOpened: function () {
				return _self.objectData.this.is(_self.cache.firstOpened);
			},

			/**
			 * Verifies if the current item is last item.
			 *
			 * @return	{boolean}
			 */
			isLast: function () {
				return (_self.objectData.currentIndex === (_self.objectData.sequenceLength - 1));
			}
		},

		/**
		 * Clones the object for inline elements
		 *
		 * @param	{object}	$object
		 * @return	{object}	$clone
		 */
		_cloneObject: function ($object) {
			var $clone = $object.clone(),
				objectId = $object.attr('id');

			// If element is hidden, cache the object and remove
			if ($object.is(':hidden')) {
				_self._cacheObjectData($object);
				$object.attr('id', _self.settings.idPrefix + 'temp-' + objectId).empty();
			} else {
				// Prevent duplicated id's
				$clone.removeAttr('id');
			}

			return $clone.show();
		},

		/**
		 * Verifies if it is a mobile device
		 *
		 * @return	{boolean}
		 */
		isMobileDevice: function () {
			var deviceAgent = navigator.userAgent.toLowerCase(),
				agentId = deviceAgent.match(_self.settings.mobileMatchExpression);

			return agentId ? true : false;
		},

		/**
		 * Verifies if css transitions are supported
		 *
		 * @return	{string|boolean}	The transition prefix if supported, else false.
		 */
		isTransitionSupported: function () {
			var body = _self.objects.body.get(0),
				isTransitionSupported = false,
				transitionMapping = {
					'transition': '',
					'WebkitTransition': '-webkit-',
					'MozTransition': '-moz-',
					'OTransition': '-o-',
					'MsTransition': '-ms-'
				};

			for (var key in transitionMapping) {
				if (transitionMapping.hasOwnProperty(key) && key in body.style) {
					_self.support.transition = transitionMapping[key];
					isTransitionSupported = true;
				}
			}

			return isTransitionSupported;
		},

		/**
		 * Transition types
		 *
		 */
		transition: {
			/**
			 * Returns the correct transition type according to the status of interaction.
			 *
			 * @return	{string}	Transition type
			 */
			in: function () {
				if (_self.settings.transitionOpen && !_self.cache.firstOpened) {
					return _self.settings.transitionOpen;
				}
				return _self.settings.transitionIn;
			},

			/**
			 * Fades in/out the object
			 *
			 * @param	{object}	$object
			 * @param	{string}	type
			 * @param	{number}	speed
			 * @param	{number}	opacity
			 * @param	{function}	callback
			 * @return	{void}		Animates an object
			 */
			fade: function ($object, type, speed, opacity, callback) {
				var isInTransition = type === 'in',
					startTransition = {},
					startOpacity = $object.css('opacity'),
					endTransition = {},
					endOpacity = opacity ? opacity: isInTransition ? 1 : 0;

				if (!_self.isOpen && isInTransition) return;

				startTransition['opacity'] = startOpacity;
				endTransition['opacity'] = endOpacity;

				$object.css(_self.support.transition + 'transition', 'none');
				$object.css(startTransition).show();

				// Css transition
				if (_self.support.transitions) {
					endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';

					setTimeout(function () {
						$object.css(endTransition);

						setTimeout(function () {
							$object.css(_self.support.transition + 'transition', '');

							if (callback && (_self.isOpen || !isInTransition)) {
								callback();
							}
						}, speed);
					}, 15);
				} else {
					// Fallback to js transition
					$object.stop();
					$object.animate(endTransition, speed, callback);
				}
			},

			/**
			 * Scrolls in/out the object
			 *
			 * @param	{object}	$object
			 * @param	{string}	type
			 * @param	{number}	speed
			 * @param	{function}	callback
			 * @return	{void}		Animates an object
			 */
			scroll: function ($object, type, speed, callback) {
				var isInTransition = type === 'in',
					transition = isInTransition ? _self.settings.transitionIn : _self.settings.transitionOut,
					direction = 'left',
					startTransition = {},
					startOpacity = isInTransition ? 0 : 1,
					startOffset = isInTransition ? '-50%' : '50%',
					endTransition = {},
					endOpacity = isInTransition ? 1 : 0,
					endOffset = isInTransition ? '50%' : '-50%';

				if (!_self.isOpen && isInTransition) return;

				switch (transition) {
					case 'scrollTop':
						direction = 'top';
						break;
					case 'scrollRight':
						startOffset = isInTransition ? '150%' : '50%';
						endOffset = isInTransition ? '50%' : '150%';
						break;
					case 'scrollBottom':
						direction = 'top';
						startOffset = isInTransition ? '150%' : '50%';
						endOffset = isInTransition ? '50%' : '150%';
						break;
					case 'scrollHorizontal':
						startOffset = isInTransition ? '150%' : '50%';
						endOffset = isInTransition ? '50%' : '-50%';
						break;
					case 'scrollVertical':
						direction = 'top';
						startOffset = isInTransition ? '-50%' : '50%';
						endOffset = isInTransition ? '50%' : '150%';
						break;
				}

				if (_self.cache.action === 'prev') {
					switch (transition) {
						case 'scrollHorizontal':
							startOffset = isInTransition ? '-50%' : '50%';
							endOffset = isInTransition ? '50%' : '150%';
							break;
						case 'scrollVertical':
							startOffset = isInTransition ? '150%' : '50%';
							endOffset = isInTransition ? '50%' : '-50%';
							break;
					}
				}

				startTransition['opacity'] = startOpacity;
				startTransition[direction] = startOffset;

				endTransition['opacity'] = endOpacity;
				endTransition[direction] = endOffset;

				$object.css(_self.support.transition + 'transition', 'none');
				$object.css(startTransition).show();

				// Css transition
				if (_self.support.transitions) {
					endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';

					setTimeout(function () {
						$object.css(endTransition);

						setTimeout(function () {
							$object.css(_self.support.transition + 'transition', '');

							if (callback && (_self.isOpen || !isInTransition)) {
								callback();
							}
						}, speed);
					}, 15);
				} else {
					// Fallback to js transition
					$object.stop();
					$object.animate(endTransition, speed, callback);
				}
			},

			/**
			 * Zooms in/out the object
			 *
			 * @param	{object}	$object
			 * @param	{string}	type
			 * @param	{number}	speed
			 * @param	{function}	callback
			 * @return	{void}		Animates an object
			 */
			zoom: function ($object, type, speed, callback) {
				var isInTransition = type === 'in',
					startTransition = {},
					startOpacity = $object.css('opacity'),
					startScale = isInTransition ? 'scale(0.75)' : 'scale(1)',
					endTransition = {},
					endOpacity = isInTransition ? 1 : 0,
					endScale = isInTransition ? 'scale(1)' : 'scale(0.75)';

				if (!_self.isOpen && isInTransition) return;

				startTransition['opacity'] = startOpacity;
				startTransition[_self.support.transition + 'transform'] = startScale;

				endTransition['opacity'] = endOpacity;

				$object.css(_self.support.transition + 'transition', 'none');
				$object.css(startTransition).show();

				// Css transition
				if (_self.support.transitions) {
					endTransition[_self.support.transition + 'transform'] = endScale;
					endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';

					setTimeout(function () {
						$object.css(endTransition);

						setTimeout(function () {
							$object.css(_self.support.transition + 'transform', '');
							$object.css(_self.support.transition + 'transition', '');

							if (callback && (_self.isOpen || !isInTransition)) {
								callback();
							}
						}, speed);
					}, 15);
				} else {
					// Fallback to js transition
					$object.stop();
					$object.animate(endTransition, speed, callback);
				}
			}
		},

		/**
		 * Calls all the registered functions of a specific hook
		 *
		 * @param	{object}	hooks
		 * @return	{void}
		 */
		_callHooks: function (hooks) {
			if (typeof(hooks) === 'object') {
				$.each(hooks, function(index, hook) {
					if (typeof(hook) === 'function') {
						hook.call(_self.origin);
					}
				});
			}
		},

		/**
		 * Caches the object data
		 *
		 * @param	{object}	$object
		 * @return	{void}
		 */
		_cacheObjectData: function ($object) {
			$.data($object, 'cache', {
				id: $object.attr('id'),
				content: $object.html()
			});

			_self.cache.originalObject = $object;
		},

		/**
		 * Restores the object from cache
		 *
		 * @return	void
		 */
		_restoreObject: function () {
			var $object = $('[id^="' + _self.settings.idPrefix + 'temp-"]');

			$object.attr('id', $.data(_self.cache.originalObject, 'cache').id);
			$object.html($.data(_self.cache.originalObject, 'cache').content);
		},

		/**
		 * Executes functions for a window resize.
		 * It stops an eventual timeout and recalculates dimensions.
		 *
		 * @param	{object}	dimensions
		 * @return	{void}
		 */
		resize: function (event, dimensions) {
			if (!_self.isOpen) return;

			if (_self.isSlideshowEnabled()) {
				_self._stopTimeout();
			}

			if (typeof dimensions === 'object' && dimensions !== null) {
				if (dimensions.width) {
					_self.cache.object.attr(
						_self._prefixAttributeName('width'),
						dimensions.width
					);
				}
				if (dimensions.maxWidth) {
					_self.cache.object.attr(
						_self._prefixAttributeName('max-width'),
						dimensions.maxWidth
					);
				}
				if (dimensions.height) {
					_self.cache.object.attr(
						_self._prefixAttributeName('height'),
						dimensions.height
					);
				}
				if (dimensions.maxHeight) {
					_self.cache.object.attr(
						_self._prefixAttributeName('max-height'),
						dimensions.maxHeight
					);
				}
			}

			_self.dimensions = _self.getViewportDimensions();
			_self._calculateDimensions(_self.cache.object);

			// Call onResize hook functions
			_self._callHooks(_self.settings.onResize);
		},

		/**
		 * Watches for any resize interaction and caches the new sizes.
		 *
		 * @return	{void}
		 */
		_watchResizeInteraction: function () {
			$(window).resize(_self.resize);
		},

		/**
		 * Stop watching any resize interaction related to _self.
		 *
		 * @return	{void}
		 */
		_unwatchResizeInteraction: function () {
			$(window).off('resize', _self.resize);
		},

		/**
		 * Switches to the fullscreen mode
		 *
		 * @return	{void}
		 */
		_switchToFullScreenMode: function () {
			_self.settings.shrinkFactor = 1;
			_self.settings.overlayOpacity = 1;

			$('html').addClass(_self.settings.classPrefix + 'fullScreenMode');
		},

		/**
		 * Enters into the lightcase view
		 *
		 * @return	{void}
		 */
		_open: function () {
			_self.isOpen = true;

			_self.support.transitions = _self.settings.cssTransitions ? _self.isTransitionSupported() : false;
			_self.support.mobileDevice = _self.isMobileDevice();

			if (_self.support.mobileDevice) {
				$('html').addClass(_self.settings.classPrefix + 'isMobileDevice');

				if (_self.settings.fullScreenModeForMobile) {
					_self._switchToFullScreenMode();
				}
			}

			if (!_self.settings.transitionIn) {
				_self.settings.transitionIn = _self.settings.transition;
			}
			if (!_self.settings.transitionOut) {
				_self.settings.transitionOut = _self.settings.transition;
			}

			switch (_self.transition.in()) {
				case 'fade':
				case 'fadeInline':
				case 'elastic':
				case 'scrollTop':
				case 'scrollRight':
				case 'scrollBottom':
				case 'scrollLeft':
				case 'scrollVertical':
				case 'scrollHorizontal':
					if (_self.objects.case.is(':hidden')) {
						_self.objects.close.css('opacity', 0);
						_self.objects.overlay.css('opacity', 0);
						_self.objects.case.css('opacity', 0);
						_self.objects.contentInner.css('opacity', 0);
					}
					_self.transition.fade(_self.objects.overlay, 'in', _self.settings.speedIn, _self.settings.overlayOpacity, function () {
						_self.transition.fade(_self.objects.close, 'in', _self.settings.speedIn);
						_self._handleEvents();
						_self._processContent();
					});
					break;
				default:
					_self.transition.fade(_self.objects.overlay, 'in', 0, _self.settings.overlayOpacity, function () {
						_self.transition.fade(_self.objects.close, 'in', 0);
						_self._handleEvents();
						_self._processContent();
					});
					break;
			}

			_self.objects.document.addClass(_self.settings.classPrefix + 'open');
			_self.objects.case.attr('aria-hidden', 'false');
		},

		/**
		 * Shows the lightcase by starting the transition
		 */
		show: function () {
			// Call onCalculateDimensions hook functions
			_self._callHooks(_self.settings.onBeforeCalculateDimensions);

			_self._calculateDimensions(_self.cache.object);

			// Call onAfterCalculateDimensions hook functions
			_self._callHooks(_self.settings.onAfterCalculateDimensions);

			_self._startInTransition();
		},

		/**
		 * Escapes from the lightcase view
		 *
		 * @return	{void}
		 */
		close: function () {
			_self.isOpen = false;

			if (_self.isSlideshowEnabled()) {
				_self._stopTimeout();
				_self.isSlideshowStarted = false;
				_self.objects.nav.removeClass(_self.settings.classPrefix + 'paused');
			}

			_self.objects.loading.hide();

			_self._unbindEvents();

			_self._unwatchResizeInteraction();

			$('html').removeClass(_self.settings.classPrefix + 'open');
			_self.objects.case.attr('aria-hidden', 'true');

			_self.objects.nav.children().hide();
			_self.objects.close.hide();

			// Call onClose hook functions
			_self._callHooks(_self.settings.onClose);

			// Fade out the info at first
			_self.transition.fade(_self.objects.info, 'out', 0);

			switch (_self.settings.transitionClose || _self.settings.transitionOut) {
				case 'fade':
				case 'fadeInline':
				case 'scrollTop':
				case 'scrollRight':
				case 'scrollBottom':
				case 'scrollLeft':
				case 'scrollHorizontal':
				case 'scrollVertical':
					_self.transition.fade(_self.objects.case, 'out', _self.settings.speedOut, 0, function () {
						_self.transition.fade(_self.objects.overlay, 'out', _self.settings.speedOut, 0, function () {
							_self.cleanup();
						});
					});
					break;
				case 'elastic':
					_self.transition.zoom(_self.objects.case, 'out', _self.settings.speedOut, function () {
						_self.transition.fade(_self.objects.overlay, 'out', _self.settings.speedOut, 0, function () {
							_self.cleanup();
						});
					});
					break;
				default:
					_self.cleanup();
					break;
			}
		},

		/**
		 * Unbinds all given events
		 *
		 * @return	{void}
		 */
		_unbindEvents: function () {
			// Unbind overlay event
			_self.objects.overlay.unbind('click');

			// Unbind key events
			$(document).unbind('keyup.lightcase');

			// Unbind swipe events
			_self.objects.case.unbind('swipeleft').unbind('swiperight');

			// Unbind navigator events
			_self.objects.prev.unbind('click');
			_self.objects.next.unbind('click');
			_self.objects.play.unbind('click');
			_self.objects.pause.unbind('click');

			// Unbind close event
			_self.objects.close.unbind('click');
		},

		/**
		 * Cleans up the dimensions
		 *
		 * @return	{void}
		 */
		_cleanupDimensions: function () {
			var opacity = _self.objects.contentInner.css('opacity');

			_self.objects.case.css({
				'width': '',
				'height': '',
				'top': '',
				'left': '',
				'margin-top': '',
				'margin-left': ''
			});

			_self.objects.contentInner.removeAttr('style').css('opacity', opacity);
			_self.objects.contentInner.children().removeAttr('style');
		},

		/**
		 * Cleanup after aborting lightcase
		 *
		 * @return	{void}
		 */
		cleanup: function () {
			_self._cleanupDimensions();

			_self.objects.loading.hide();
			_self.objects.overlay.hide();
			_self.objects.case.hide();
			_self.objects.prev.hide();
			_self.objects.next.hide();
			_self.objects.play.hide();
			_self.objects.pause.hide();

			_self.objects.document.removeAttr(_self._prefixAttributeName('type'));
			_self.objects.nav.removeAttr(_self._prefixAttributeName('ispartofsequence'));

			_self.objects.contentInner.empty().hide();
			_self.objects.info.children().empty();

			if (_self.cache.originalObject) {
				_self._restoreObject();
			}

			// Call onCleanup hook functions
			_self._callHooks(_self.settings.onCleanup);

			// Restore cache
			_self.cache = {};
		},

		/**
		 * Returns the supported match media or undefined if the browser
		 * doesn't support match media.
		 *
		 * @return	{mixed}
		 */
		_matchMedia: function () {
			return window.matchMedia || window.msMatchMedia;
		},

		/**
		 * Returns the devicePixelRatio if supported. Else, it simply returns
		 * 1 as the default.
		 *
		 * @return	{number}
		 */
		_devicePixelRatio: function () {
			return window.devicePixelRatio || 1;
		},

		/**
		 * Checks if method is public
		 *
		 * @return	{boolean}
		 */
		_isPublicMethod: function (method) {
			return (typeof _self[method] === 'function' && method.charAt(0) !== '_');
		},

		/**
		 * Exports all public methods to be accessible, callable
		 * from global scope.
		 *
		 * @return	{void}
		 */
		_export: function () {
			window.lightcase = {};

			$.each(_self, function (property) {
				if (_self._isPublicMethod(property)) {
					lightcase[property] = _self[property];
				}
			});
		}
	};

	_self._export();

	$.fn.lightcase = function (method) {
		// Method calling logic (only public methods are applied)
		if (_self._isPublicMethod(method)) {
			return _self[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return _self.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.lightcase');
		}
	};
})(jQuery);

(function( $ ) {
    $.fn.form = function(options) {
        var settings = $.extend( {
            'action' : 'sendmail.php',
            'success_message' : 'Спасибо за заявку, наши менеджеры свяжутся с вами в ближайшее время',
            'error_message' : 'Произошла ошибка попробуйте выполнить запрос позже',
            after_success: false
        }, options);

        // Проводит валидацию формыы
        function validate_form(form) {
            var valid = true;

            $('.required', form).each(function() {
                if ($(this).attr('type') == 'checkbox') {
                    if (!$(this).is(':checked')) {
                        var chkbx = $(this).closest('.checkbox_wrap');
                        chkbx.addClass('error');

                        setTimeout(function() {
                            chkbx.removeClass('error');
                        }, 2000);

                        $(this).change(function(){
                            if ($(this).is(':checked')) {
                                $(this).closest('.checkbox_wrap').removeClass('error');
                            }
                        });

                        valid = false;
                    } else {
                        $(this).closest('.checkbox_wrap').removeClass('error');
                    }
                } else {
                    if (!$(this).val()) {
                        var input = $(this);
                        input.addClass('error');

                        setTimeout(function() {
                            input.removeClass('error');
                        }, 2000);

                        $(this).change(function(){
                            if ($(this).val()) {
                                $(this).removeClass('error');
                            }
                        });

                        valid = false;
                    } else {
                        $(this).removeClass('error');
                    }
                }
            });

            return valid;
        }

        return this.each(function() {
            $(this).submit(function() {
                var form = $(this);

                if (!validate_form(form)) {
                    return false;
                }

                var data = new FormData( form[0] );

                $.ajax({
                    url: settings.action,
                    type: 'POST',
                    data: data,
                    processData: false,
                    contentType: false
                }).done(function(data) {
                    if (data == 1) {
                        form.trigger('reset');
                        showMsg('', settings.success_message);

                        if (typeof settings.after_success == 'function') {
                            settings.after_success();
                        }
                    } else {
                        var error = '';
                        for (var key in data) {
                            error += data[key] + '. ';
                        }
                        showMsg('Произошла ошибка', error);
                    }
                }).fail(function() {
                    showMsg('Произошла ошибка', settings.error_message);
                });

                return false;
            });
        });

    };
})(jQuery);

/**
 * Скроллит страницу по клику на ссылку с соотв якорем
 * setlocation - атрибут в ссылке добавляет хеш в адрес страницы - можно задать при инициализации, либо в атрибуте data-setlocation
 * offset - скрллим до блока оставляя отступ сверху, так же можно указать в атрибуте data-offset
 *
 * Все что указано в атрибутах имеет преимущество
 */

(function( $ ) {
    $.fn.goto = function(options) {
        var settings = $.extend( {
            'offset' : 0,
            'setlocation' : false
        }, options);

        this.click(function() {
            var target = $(this).attr('href') || $(this).data('target');

            settings.offset = $(this).data('offset') || settings.offset;
            var setlocation = $(this).data('setlocation');

            if (typeof setlocation != 'undefined') {
                settings.setlocation = parseInt(setlocation);
            }

            var offset = $(target).offset().top - settings.offset;

            $('html, body').animate({
                scrollTop: offset
            }, 500);

            if (!settings.setlocation) return false;
        });

    };
})(jQuery);

(function( $ ) {
	$.fn.openPopup = function(options) {


		this.click(function() {
			var popup = $(this).attr('href') || $(this).data('popup');

			$.fn.showPopup(popup, options);

			return false;
		});
	};

	$.fn.showPopup = function(popup, options) {
		var options = $.extend( {
			'popup_wrap_class' : 'popup_wrapped',
            'popup_screen_class' : 'popup_screen',
            'close_btn' : '<div class="close">&times;</div>'
	    }, options);

		var close = $(options.close_btn);

		// Оборачиваем попап
		if (!$(popup).parent().hasClass(options.popup_wrap_class)) {
			$(popup).show();
			var popup_wrap_id = 'popup_wrap_' + $(popup).attr('id');
			popup = $(popup).wrap('<div class="' + options.popup_wrap_class + '" id="' + popup_wrap_id + '"></div>').parent();
			popup.prepend(close);
		} else {
			popup = $(popup).show().parent();
		}

		var screen = $('.' + options.popup_screen_class);

		if (!screen.length) {
			screen = $('<div class="' + options.popup_screen_class + '"></div>');

			$('body').append(screen);
		}

		var margin_left = popup.outerWidth() / 2;
		var margin_top = popup.outerHeight() / 2;

		popup.css('margin-left', -margin_left)
			 .css('margin-top', -margin_top);

		$(popup).addClass('open');
		screen.addClass('open');

		// Закрывает попап
		screen.on('click', function() {
			$.fn.closePopup(popup);
		});

		$(close, popup).on('click', function() {
			$.fn.closePopup(popup);
		});
	};

	$.fn.closePopup = function(popup, screen) {
		popup = popup || $('.popup').parent();
		screen = screen || $('.popup_screen');

		popup.removeClass('open');

		screen.removeClass('open');

		return false;
	};

	$.fn.showMsg = function(title, msg) {
		var html = '<div class="popup msg_popup" id="msg_popup">';
		html += title ? '<div class="title">' + title + '</div>' : '';
		html += msg ? '<div class="msg">' + msg + '</div>' : '';
		html += '</div>';

		$.fn.closePopup();

		$('#msg_popup').parent().remove();

		$('body').append(html);

		$.fn.showPopup('.msg_popup');
	}

})(jQuery);

function showMsg(title, msg) {
	$.fn.showMsg(title, msg);
}

/**
 * Выводит уведомление
 * @param  {[string]} message Сообщение
 * @param  {[string]} class Дополнительные классы
 */
function notify(message, css_class) {
    var notify = $('.notify');

    if (css_class) {
        css_class = 'notify ' + css_class;
    } else {
        css_class = 'notify';
    }

    if (!notify.length) {
        notify = $('<div class="notify"><div class="close">&times;</div><div class="message"></div></div>');
        $('body').append(notify);
    }

    notify.attr('class', css_class);

    $('.message', notify).html(message);

    $(notify).fadeIn();

    $('.close', notify).click(function() {
        $(notify).fadeOut();
    });

    window.clearTimeout(window.notifyTemeoutHendler);

    window.notifyTemeoutHendler = setTimeout(function() {
       $(notify).fadeOut();
   }, 3000);
}

(function( $ ) {
    $.fn.tabs = function() {
        this.each(function(){
            var tab_btns = $('.open_tab', this).not($('.tab .open_tab', this));


            var tabs = $('.tab', this).not($('.tab .tab', this));

            tab_btns.removeClass('active');
            tab_btns.eq(0).addClass('active');

            tabs.hide();
            tabs.eq(0).show();

            tab_btns.click(function() {
                tab_btns.removeClass('active');
                $(this).addClass('active');

                tabs.hide().removeClass('active');;
                $($(this).attr('href')).addClass('active').show();

                return false;
            });
        });
    };
})(jQuery);

/**
 * При нажатии на элемент показывает или скрывает указанный элемент
 * Целевой элемент берется из атрибута href или data-target
 * Можно задать текст кнопки для открытия и скрытия в соотв атрибутах data-showtext и data-hidetext
 **/
(function( $ ) {
    $.fn.toggleMore = function() {

        this.click(function() {
            var target = $(this).attr('href') || $(this).data('target');

            $(target).slideToggle();

            var showtext = $(this).data('showtext');
            var hidetext = $(this).data('hidetext');

            if ($(this).text() == hidetext) {
                $(this).text(showtext);
            } else {
                $(this).text(hidetext);
            }

            return false;
        });

    };
})(jQuery);

$(function() {

    $('.ajax_form').form({
		success_message: 'Спасибо! Мы скоро выйдем на связь!',
		after_success: function() {}
	});

    $('a[data-rel^=lightcase]').lightcase({
        swipe: true
    }).click(function() {
        return false;
    });



	$('.nav_toggle_wrap').click(function() {
		$(this).toggleClass('open');

		$('.main_menu_wrap').slideToggle();

		return false;
	});


	$(window).scroll(scrollFunction);
	scrollFunction();

	function scrollFunction() {
		if ($(window).scrollTop() <= 100) {
			$('.section_header').removeClass('fixed');
		} else {
			$('.section_header').addClass('fixed');
		}
	}



	/**
	 * Маска ввода
	 * Документация тут https://github.com/RobinHerbots/Inputmask
	 * Для номеров телефона:
	 * $('[name="phone"]').inputmask("+7 (9{3,4}) 9{2,3}-99-99");  // Общая маска
	 * $('[name="phone"]').inputmask("+7 (999) 999-99-99");  // Маска для мобильных
	 */
	$('[name="phone"]').inputmask("+7 (999) 999-99-99");  // Маска для мобильных номеров телефона



	/**
	 * Адаптивный слайдер
	 * Документация тут http://kenwheeler.github.io/slick/
	 **/
	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


    $('.toggle').toggleMore(); // При нажатии на элемент показывает или скрывает указанный элемент

	$('.tabs').tabs(); // Табы в т.ч. вложенные

	$('.open_popup').openPopup(); // Показывает попапы

	$('.goto').goto(); // Скроллит страницу по клику на ссылку с соотв якорем

	// showMsg('Hello', 'Hello, world'); // Выводит всплывающее сообщение (первый параметр заголовок, второй - текст)

});
