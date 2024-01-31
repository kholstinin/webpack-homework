/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/components/dist/main.js":
/*!*************************************!*\
  !*** ./lib/components/dist/main.js ***!
  \*************************************/
/***/ ((module) => {

(()=>{var t={10:(t,r,o)=>{const e=o(582);t.exports.Button=e},582:t=>{t.exports=class{constructor(t){this.text=t}render(){console.log(this.text)}}}},r={},o=function o(e){var s=r[e];if(void 0!==s)return s.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,o),n.exports}(10);module.exports=o})();

/***/ }),

/***/ "./lib/utils/dist/utils.js":
/*!*********************************!*\
  !*** ./lib/utils/dist/utils.js ***!
  \*********************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(()=>{return t={10:(t,e,o)=>{const r=o(241),n=o(161);t.exports.add=r,t.exports.sub=n},241:t=>{t.exports=function(t,e){return t+e}},161:t=>{t.exports=function(t,e){return t-e}}},e={},function o(r){var n=e[r];if(void 0!==n)return n.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,o),s.exports}(10);var t,e}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var my_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-components */ "./lib/components/dist/main.js");
/* harmony import */ var my_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(my_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var my_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! my-utils */ "./lib/utils/dist/utils.js");
/* harmony import */ var my_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(my_utils__WEBPACK_IMPORTED_MODULE_1__);



const button = new my_components__WEBPACK_IMPORTED_MODULE_0__.Button((0,my_utils__WEBPACK_IMPORTED_MODULE_1__.add)(2, 2));

button.render();
console.log(window.utils.sub(5, 2));

})();

/******/ })()
;