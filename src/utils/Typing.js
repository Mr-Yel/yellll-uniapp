!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).hxkToolBox={})}(this,(function(e){"use strict";const t={strings:"默认的打字效果",startDelaySpeed:200,deleteSpeed:100,shouldDelete:!1,sleepTime:2e3};var n=[],i=[];!function(e,t){if(e&&"undefined"!=typeof document){var s,l=!0===t.prepend?"prepend":"append",a=!0===t.singleTag,o="string"==typeof t.container?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(a){var r=n.indexOf(o);-1===r&&(r=n.push(o)-1,i[r]={}),s=i[r]&&i[r][l]?i[r][l]:i[r][l]=h()}else s=h();65279===e.charCodeAt(0)&&(e=e.substring(1)),s.styleSheet?s.styleSheet.cssText+=e:s.appendChild(document.createTextNode(e))}function h(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),t.attributes)for(var n=Object.keys(t.attributes),i=0;n.length>i;i++)e.setAttribute(n[i],t.attributes[n[i]]);return o.insertAdjacentElement("prepend"===l?"afterbegin":"beforeend",e),e}}('.typing::after {\n  content: "|";\n  animation: blink 1s infinite;\n}\n\n@keyframes blink {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}',{}),e.Typing=class extends class{on(e,t){return(this.list[e]||(this.list[e]=[])).push(t),this}once(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this}off(e,t){let n=this.list[e];if(!n)return!1;if(t){let e;for(let i=0,s=n.length;s>i;i++)if(e=n[i],e===t||e.fn===t){n.splice(i,1);break}}else n&&(n.length=0);return this}emit(){[].shift.call(arguments);let e=[];for(let t in this.list)Array.isArray(this.list[t])?e.push(...this.list[t]):e.push(this.list[t]);return!(!e||0===e.length)&&(e.forEach((e=>{e.apply(this,arguments)})),this)}}{data;constructor(e){super(),this.data=Object.assign(t,e),console.log(this.data),this._init()}_init(){const e=this.data;let t=" ",n=0,i=Array.isArray(e.strings)&&e.strings[n].split("")||(e.strings=["strings must be Array"])[0],s="typing",l=null;const a=()=>{++n>e.strings.length-1&&(n=0),i=e.strings[n].split("")},o=async n=>{if(clearTimeout(l),"typing"==s)i.length>n?(t+=i[n],this.textNodeChange(t),++n):(await this.sleep(e.sleepTime),e.shouldDelete?s="delete":(t=" ",this.textNodeChange(t),n=0,a()));else if("delete"==s)if(n>0){let e=t.split("");e.length=e.length-1,t=e.join(""),this.textNodeChange(t),--n}else s="typing",a();l=setTimeout((()=>o(n)),"typing"==s?e.startDelaySpeed:e.deleteSpeed)};o(0)}textNodeChange(e){if(this.data.changeCallback)this.data.changeCallback&&"function"==typeof this.data.changeCallback&&this.data.changeCallback(e);else{if(!window||!document)throw Error("elm and changeCallback all is no definition");{const t=document&&document.querySelector(this.data.elm);if(!t)return void console.log("elm is no definition");t.innerHTML=e}}}sleep(e){return new Promise((t=>setTimeout(t,e)))}},Object.defineProperty(e,"__esModule",{value:!0})}));
