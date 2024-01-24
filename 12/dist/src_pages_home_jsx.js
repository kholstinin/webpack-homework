"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_pages_home_jsx"],{

/***/ "./src/pages/home.jsx":
/*!****************************!*\
  !*** ./src/pages/home.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/message/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/date-picker/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);



const Home = () => {
  const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [messageApi, contextHolder] = antd__WEBPACK_IMPORTED_MODULE_2__["default"].useMessage();
  const handleChange = value => {
    messageApi.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    const tail = lodash__WEBPACK_IMPORTED_MODULE_1___default().tail(value);
    console.log(tail);
    setDate();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: 400,
      margin: '100px auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: 16
    }
  }, "Selected Date: ", date ? date.format('YYYY-MM-DD') : 'None'), contextHolder);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ })

}]);