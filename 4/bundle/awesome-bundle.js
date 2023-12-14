/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/button.js":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var Helpers_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Helpers/log */ "./src/helpers/log.js");


class Button {
	constructor(text) {
		this.text = text;
	}

	render() {
		(0,Helpers_log__WEBPACK_IMPORTED_MODULE_0__.log)('render button');
		return `<button>${this.text}</button>`;
	}
}


/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var Helpers_header_mocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Helpers/header-mocks */ "./src/helpers/header-mocks.cooljson");
/* harmony import */ var Utils_sum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utils/sum */ "./src/utilities/sum.js");



class Header {
	constructor(title, height) {
		this.title = title;
		this.height = (0,Utils_sum__WEBPACK_IMPORTED_MODULE_1__.sum)(height, 50);
	}

	debug() {
		this.title = Helpers_header_mocks__WEBPACK_IMPORTED_MODULE_0__.title;
		this.height = Helpers_header_mocks__WEBPACK_IMPORTED_MODULE_0__.height;
	}

	render() {
		document.title = this.title;
		document.getElementById('header').height = this.height;
	}
}


/***/ }),

/***/ "./src/helpers/log.js":
/*!****************************!*\
  !*** ./src/helpers/log.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   log: () => (/* binding */ log)
/* harmony export */ });
function log(message) {
	console.log(message)
}


/***/ }),

/***/ "./src/helpers/render.js":
/*!*******************************!*\
  !*** ./src/helpers/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
function render(string) {
	document.getElementById('root').innerHTML = string;
}


/***/ }),

/***/ "./src/utilities/sum.js":
/*!******************************!*\
  !*** ./src/utilities/sum.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sum: () => (/* binding */ sum)
/* harmony export */ });
function sum(a, b) {
	return a + b;
}


/***/ }),

/***/ "./src/utilities/url.js":
/*!******************************!*\
  !*** ./src/utilities/url.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ URL)
/* harmony export */ });
class URL {

}


/***/ }),

/***/ "./src/helpers/header-mocks.cooljson":
/*!*******************************************!*\
  !*** ./src/helpers/header-mocks.cooljson ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"title":"hello world","height":"52"}');

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Components/button */ "./src/components/button.js");
/* harmony import */ var Components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/header */ "./src/components/header.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _/render */ "./src/helpers/render.js");
/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _/sum */ "./src/utilities/sum.js");
/* harmony import */ var coolurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! coolurl */ "./src/utilities/url.js");







const button = new Components_button__WEBPACK_IMPORTED_MODULE_0__.Button();
const header = new Components_header__WEBPACK_IMPORTED_MODULE_1__.Header();

(0,_render__WEBPACK_IMPORTED_MODULE_2__.render)((0,_sum__WEBPACK_IMPORTED_MODULE_3__.sum)(button + header));

const url = new coolurl__WEBPACK_IMPORTED_MODULE_4__["default"](location.origin);

})();

/******/ })()
;