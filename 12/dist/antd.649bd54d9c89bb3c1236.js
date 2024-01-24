"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["antd-node_modules_antd_es_app_index_js-node_modules_antd_es_layout_index_js-node_modules_antd-f27777"],{

/***/ "../node_modules/antd/es/_util/ActionButton.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/_util/ActionButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-util/es/hooks/useState */ "../node_modules/rc-util/es/hooks/useState.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "../node_modules/antd/es/button/index.js");
/* harmony import */ var _button_buttonHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/buttonHelpers */ "../node_modules/antd/es/button/buttonHelpers.js");
"use client";





function isThenable(thing) {
  return !!(thing && thing.then);
}
const ActionButton = props => {
  const {
    type,
    children,
    prefixCls,
    buttonProps,
    close,
    autoFocus,
    emitEvent,
    isSilent,
    quitOnNullishReturnValue,
    actionFn
  } = props;
  const clickedRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);
  const buttonRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  const [loading, setLoading] = (0,rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_0__["default"])(false);
  const onInternalClose = function () {
    close === null || close === void 0 ? void 0 : close.apply(void 0, arguments);
  };
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    let timeoutId = null;
    if (autoFocus) {
      timeoutId = setTimeout(() => {
        var _a;
        (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.focus();
      });
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);
  const handlePromiseOnOk = returnValueOfOnOk => {
    if (!isThenable(returnValueOfOnOk)) {
      return;
    }
    setLoading(true);
    returnValueOfOnOk.then(function () {
      setLoading(false, true);
      onInternalClose.apply(void 0, arguments);
      clickedRef.current = false;
    }, e => {
      // See: https://github.com/ant-design/ant-design/issues/6183
      setLoading(false, true);
      clickedRef.current = false;
      // Do not throw if is `await` mode
      if (isSilent === null || isSilent === void 0 ? void 0 : isSilent()) {
        return;
      }
      return Promise.reject(e);
    });
  };
  const onClick = e => {
    if (clickedRef.current) {
      return;
    }
    clickedRef.current = true;
    if (!actionFn) {
      onInternalClose();
      return;
    }
    let returnValueOfOnOk;
    if (emitEvent) {
      returnValueOfOnOk = actionFn(e);
      if (quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
        clickedRef.current = false;
        onInternalClose(e);
        return;
      }
    } else if (actionFn.length) {
      returnValueOfOnOk = actionFn(close);
      // https://github.com/ant-design/ant-design/issues/23358
      clickedRef.current = false;
    } else {
      returnValueOfOnOk = actionFn();
      if (!returnValueOfOnOk) {
        onInternalClose();
        return;
      }
    }
    handlePromiseOnOk(returnValueOfOnOk);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, (0,_button_buttonHelpers__WEBPACK_IMPORTED_MODULE_3__.convertLegacyProps)(type), {
    onClick: onClick,
    loading: loading,
    prefixCls: prefixCls
  }, buttonProps, {
    ref: buttonRef
  }), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionButton);

/***/ }),

/***/ "../node_modules/antd/es/_util/colors.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/_util/colors.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PresetStatusColorTypes: () => (/* binding */ PresetStatusColorTypes),
/* harmony export */   isPresetColor: () => (/* binding */ isPresetColor),
/* harmony export */   isPresetStatusColor: () => (/* binding */ isPresetStatusColor)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _theme_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/interface */ "../node_modules/antd/es/theme/interface/presetColors.js");


const inverseColors = _theme_interface__WEBPACK_IMPORTED_MODULE_1__.PresetColors.map(color => `${color}-inverse`);
const PresetStatusColorTypes = ['success', 'processing', 'error', 'default', 'warning'];
/**
 * determine if the color keyword belongs to the `Ant Design` {@link PresetColors}.
 * @param color color to be judged
 * @param includeInverse whether to include reversed colors
 */
function isPresetColor(color) {
  let includeInverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (includeInverse) {
    return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(inverseColors), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_theme_interface__WEBPACK_IMPORTED_MODULE_1__.PresetColors)).includes(color);
  }
  return _theme_interface__WEBPACK_IMPORTED_MODULE_1__.PresetColors.includes(color);
}
function isPresetStatusColor(color) {
  return PresetStatusColorTypes.includes(color);
}

/***/ }),

/***/ "../node_modules/antd/es/_util/hooks/useClosable.js":
/*!**********************************************************!*\
  !*** ../node_modules/antd/es/_util/hooks/useClosable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons/es/icons/CloseOutlined */ "../node_modules/@ant-design/icons/es/icons/CloseOutlined.js");
"use client";



function useInnerClosable(closable, closeIcon, defaultClosable) {
  if (typeof closable === 'boolean') {
    return closable;
  }
  if (closeIcon === undefined) {
    return !!defaultClosable;
  }
  return closeIcon !== false && closeIcon !== null;
}
function useClosable(closable, closeIcon, customCloseIconRender) {
  let defaultCloseIcon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_1__["default"], null);
  let defaultClosable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  const mergedClosable = useInnerClosable(closable, closeIcon, defaultClosable);
  if (!mergedClosable) {
    return [false, null];
  }
  const mergedCloseIcon = typeof closeIcon === 'boolean' || closeIcon === undefined || closeIcon === null ? defaultCloseIcon : closeIcon;
  return [true, customCloseIconRender ? customCloseIconRender(mergedCloseIcon) : mergedCloseIcon];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClosable);

/***/ }),

/***/ "../node_modules/antd/es/_util/hooks/usePatchElement.js":
/*!**************************************************************!*\
  !*** ../node_modules/antd/es/_util/hooks/usePatchElement.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePatchElement)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function usePatchElement() {
  const [elements, setElements] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
  const patchElement = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(element => {
    // append a new element to elements (and create a new ref)
    setElements(originElements => [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(originElements), [element]));
    // return a function that removes the new element out of elements (and create a new ref)
    // it works a little like useEffect
    return () => {
      setElements(originElements => originElements.filter(ele => ele !== element));
    };
  }, []);
  return [elements, patchElement];
}

/***/ }),

/***/ "../node_modules/antd/es/_util/hooks/useZIndex.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/_util/hooks/useZIndex.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONTAINER_MAX_OFFSET: () => (/* binding */ CONTAINER_MAX_OFFSET),
/* harmony export */   consumerBaseZIndexOffset: () => (/* binding */ consumerBaseZIndexOffset),
/* harmony export */   containerBaseZIndexOffset: () => (/* binding */ containerBaseZIndexOffset),
/* harmony export */   useZIndex: () => (/* binding */ useZIndex)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_useToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/useToken */ "../node_modules/antd/es/theme/useToken.js");
/* harmony import */ var _zindexContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zindexContext */ "../node_modules/antd/es/_util/zindexContext.js");



// Z-Index control range
// Container: 1000 + offset 100 (max base + 10 * offset = 2000)
// Popover: offset 50
// Notification: Container Max zIndex + componentOffset
const CONTAINER_OFFSET = 100;
const CONTAINER_OFFSET_MAX_COUNT = 10;
const CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
const containerBaseZIndexOffset = {
  Modal: CONTAINER_OFFSET,
  Drawer: CONTAINER_OFFSET,
  Popover: CONTAINER_OFFSET,
  Popconfirm: CONTAINER_OFFSET,
  Tooltip: CONTAINER_OFFSET,
  Tour: CONTAINER_OFFSET
};
const consumerBaseZIndexOffset = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function isContainerType(type) {
  return type in containerBaseZIndexOffset;
}
function useZIndex(componentType, customZIndex) {
  const [, token] = (0,_theme_useToken__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const parentZIndex = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_zindexContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const isContainer = isContainerType(componentType);
  if (customZIndex !== undefined) {
    return [customZIndex, customZIndex];
  }
  let zIndex = parentZIndex !== null && parentZIndex !== void 0 ? parentZIndex : 0;
  if (isContainer) {
    zIndex +=
    // Use preset token zIndex by default but not stack when has parent container
    (parentZIndex ? 0 : token.zIndexPopupBase) +
    // Container offset
    containerBaseZIndexOffset[componentType];
    zIndex = Math.min(zIndex, token.zIndexPopupBase + CONTAINER_MAX_OFFSET);
  } else {
    zIndex += consumerBaseZIndexOffset[componentType];
  }
  return [parentZIndex === undefined ? customZIndex : zIndex, zIndex];
}

/***/ }),

/***/ "../node_modules/antd/es/_util/isNumeric.js":
/*!**************************************************!*\
  !*** ../node_modules/antd/es/_util/isNumeric.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const isNumeric = value => !isNaN(parseFloat(value)) && isFinite(value);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNumeric);

/***/ }),

/***/ "../node_modules/antd/es/_util/motion.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/_util/motion.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getTransitionName: () => (/* binding */ getTransitionName)
/* harmony export */ });
// ================== Collapse Motion ==================
const getCollapsedHeight = () => ({
  height: 0,
  opacity: 0
});
const getRealHeight = node => {
  const {
    scrollHeight
  } = node;
  return {
    height: scrollHeight,
    opacity: 1
  };
};
const getCurrentHeight = node => ({
  height: node ? node.offsetHeight : 0
});
const skipOpacityTransition = (_, event) => (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === 'height';
const initCollapseMotion = function () {
  let rootCls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ant';
  return {
    motionName: `${rootCls}-motion-collapse`,
    onAppearStart: getCollapsedHeight,
    onEnterStart: getCollapsedHeight,
    onAppearActive: getRealHeight,
    onEnterActive: getRealHeight,
    onLeaveStart: getCurrentHeight,
    onLeaveActive: getCollapsedHeight,
    onAppearEnd: skipOpacityTransition,
    onEnterEnd: skipOpacityTransition,
    onLeaveEnd: skipOpacityTransition,
    motionDeadline: 500
  };
};
const SelectPlacements = ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'];
const getTransitionName = (rootPrefixCls, motion, transitionName) => {
  if (transitionName !== undefined) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCollapseMotion);

/***/ }),

/***/ "../node_modules/antd/es/_util/placements.js":
/*!***************************************************!*\
  !*** ../node_modules/antd/es/_util/placements.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPlacements),
/* harmony export */   getOverflowOptions: () => (/* binding */ getOverflowOptions)
/* harmony export */ });
/* harmony import */ var _style_placementArrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/placementArrow */ "../node_modules/antd/es/style/placementArrow.js");

function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
  if (autoAdjustOverflow === false) {
    return {
      adjustX: false,
      adjustY: false
    };
  }
  const overflow = autoAdjustOverflow && typeof autoAdjustOverflow === 'object' ? autoAdjustOverflow : {};
  const baseOverflow = {};
  switch (placement) {
    case 'top':
    case 'bottom':
      baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
      baseOverflow.shiftY = true;
      baseOverflow.adjustY = true;
      break;
    case 'left':
    case 'right':
      baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
      baseOverflow.shiftX = true;
      baseOverflow.adjustX = true;
      break;
  }
  const mergedOverflow = Object.assign(Object.assign({}, baseOverflow), overflow);
  // Support auto shift
  if (!mergedOverflow.shiftX) {
    mergedOverflow.adjustX = true;
  }
  if (!mergedOverflow.shiftY) {
    mergedOverflow.adjustY = true;
  }
  return mergedOverflow;
}
const PlacementAlignMap = {
  left: {
    points: ['cr', 'cl']
  },
  right: {
    points: ['cl', 'cr']
  },
  top: {
    points: ['bc', 'tc']
  },
  bottom: {
    points: ['tc', 'bc']
  },
  topLeft: {
    points: ['bl', 'tl']
  },
  leftTop: {
    points: ['tr', 'tl']
  },
  topRight: {
    points: ['br', 'tr']
  },
  rightTop: {
    points: ['tl', 'tr']
  },
  bottomRight: {
    points: ['tr', 'br']
  },
  rightBottom: {
    points: ['bl', 'br']
  },
  bottomLeft: {
    points: ['tl', 'bl']
  },
  leftBottom: {
    points: ['br', 'bl']
  }
};
const ArrowCenterPlacementAlignMap = {
  topLeft: {
    points: ['bl', 'tc']
  },
  leftTop: {
    points: ['tr', 'cl']
  },
  topRight: {
    points: ['br', 'tc']
  },
  rightTop: {
    points: ['tl', 'cr']
  },
  bottomRight: {
    points: ['tr', 'bc']
  },
  rightBottom: {
    points: ['bl', 'cr']
  },
  bottomLeft: {
    points: ['tl', 'bc']
  },
  leftBottom: {
    points: ['br', 'cl']
  }
};
const DisableAutoArrowList = new Set(['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']);
function getPlacements(config) {
  const {
    arrowWidth,
    autoAdjustOverflow,
    arrowPointAtCenter,
    offset,
    borderRadius,
    visibleFirst
  } = config;
  const halfArrowWidth = arrowWidth / 2;
  const placementMap = {};
  Object.keys(PlacementAlignMap).forEach(key => {
    const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
    const placementInfo = Object.assign(Object.assign({}, template), {
      offset: [0, 0],
      dynamicInset: true
    });
    placementMap[key] = placementInfo;
    // Disable autoArrow since design is fixed position
    if (DisableAutoArrowList.has(key)) {
      placementInfo.autoArrow = false;
    }
    // Static offset
    switch (key) {
      case 'top':
      case 'topLeft':
      case 'topRight':
        placementInfo.offset[1] = -halfArrowWidth - offset;
        break;
      case 'bottom':
      case 'bottomLeft':
      case 'bottomRight':
        placementInfo.offset[1] = halfArrowWidth + offset;
        break;
      case 'left':
      case 'leftTop':
      case 'leftBottom':
        placementInfo.offset[0] = -halfArrowWidth - offset;
        break;
      case 'right':
      case 'rightTop':
      case 'rightBottom':
        placementInfo.offset[0] = halfArrowWidth + offset;
        break;
    }
    // Dynamic offset
    const arrowOffset = (0,_style_placementArrow__WEBPACK_IMPORTED_MODULE_0__.getArrowOffsetToken)({
      contentRadius: borderRadius,
      limitVerticalRadius: true
    });
    if (arrowPointAtCenter) {
      switch (key) {
        case 'topLeft':
        case 'bottomLeft':
          placementInfo.offset[0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
          break;
        case 'topRight':
        case 'bottomRight':
          placementInfo.offset[0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
          break;
        case 'leftTop':
        case 'rightTop':
          placementInfo.offset[1] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
          break;
        case 'leftBottom':
        case 'rightBottom':
          placementInfo.offset[1] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
          break;
      }
    }
    // Overflow
    placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
    // VisibleFirst
    if (visibleFirst) {
      placementInfo.htmlRegion = 'visibleFirst';
    }
  });
  return placementMap;
}

/***/ }),

/***/ "../node_modules/antd/es/_util/reactNode.js":
/*!**************************************************!*\
  !*** ../node_modules/antd/es/_util/reactNode.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneElement: () => (/* binding */ cloneElement),
/* harmony export */   isFragment: () => (/* binding */ isFragment),
/* harmony export */   isValidElement: () => (/* binding */ isValidElement),
/* harmony export */   replaceElement: () => (/* binding */ replaceElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  isValidElement
} = react__WEBPACK_IMPORTED_MODULE_0__;
function isFragment(child) {
  return child && isValidElement(child) && child.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
}
function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) {
    return replacement;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
}
function cloneElement(element, props) {
  return replaceElement(element, element, props);
}

/***/ }),

/***/ "../node_modules/antd/es/_util/styleChecker.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/_util/styleChecker.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canUseDocElement: () => (/* binding */ canUseDocElement),
/* harmony export */   isStyleSupport: () => (/* reexport safe */ rc_util_es_Dom_styleChecker__WEBPACK_IMPORTED_MODULE_1__.isStyleSupport)
/* harmony export */ });
/* harmony import */ var rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-util/es/Dom/canUseDom */ "../node_modules/rc-util/es/Dom/canUseDom.js");
/* harmony import */ var rc_util_es_Dom_styleChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/Dom/styleChecker */ "../node_modules/rc-util/es/Dom/styleChecker.js");


const canUseDocElement = () => (0,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__["default"])() && window.document.documentElement;


/***/ }),

/***/ "../node_modules/antd/es/_util/warning.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/_util/warning.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarningContext: () => (/* binding */ WarningContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   devUseWarning: () => (/* binding */ devUseWarning),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   resetWarned: () => (/* binding */ resetWarned)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/warning */ "../node_modules/rc-util/es/warning.js");


function noop() {}
let deprecatedWarnList = null;
function resetWarned() {
  deprecatedWarnList = null;
  (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__.resetWarned)();
}
// eslint-disable-next-line import/no-mutable-exports
let warning = noop;
if (true) {
  warning = (valid, component, message) => {
    (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(valid, `[antd: ${component}] ${message}`);
    // StrictMode will inject console which will not throw warning in React 17.
    if (false) {}
  };
}
const WarningContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
/**
 * This is a hook but we not named as `useWarning`
 * since this is only used in development.
 * We should always wrap this in `if (process.env.NODE_ENV !== 'production')` condition
 */
const devUseWarning =  true ? component => {
  const {
    strict
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(WarningContext);
  const typeWarning = (valid, type, message) => {
    if (!valid) {
      if (strict === false && type === 'deprecated') {
        const existWarning = deprecatedWarnList;
        if (!deprecatedWarnList) {
          deprecatedWarnList = {};
        }
        deprecatedWarnList[component] = deprecatedWarnList[component] || [];
        if (!deprecatedWarnList[component].includes(message || '')) {
          deprecatedWarnList[component].push(message || '');
        }
        // Warning for the first time
        if (!existWarning) {
          // eslint-disable-next-line no-console
          console.warn('[antd] There exists deprecated usage in your code:', deprecatedWarnList);
        }
      } else {
         true ? warning(valid, component, message) : 0;
      }
    }
  };
  typeWarning.deprecated = (valid, oldProp, newProp, message) => {
    typeWarning(valid, 'deprecated', `\`${oldProp}\` is deprecated. Please use \`${newProp}\` instead.${message ? ` ${message}` : ''}`);
  };
  return typeWarning;
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (warning);

/***/ }),

/***/ "../node_modules/antd/es/_util/wave/WaveEffect.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/_util/wave/WaveEffect.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-motion */ "../node_modules/rc-motion/es/index.js");
/* harmony import */ var rc_util_es_React_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/React/render */ "../node_modules/rc-util/es/React/render.js");
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/raf */ "../node_modules/rc-util/es/raf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "../node_modules/antd/es/_util/wave/util.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interface */ "../node_modules/antd/es/_util/wave/interface.js");
"use client";








function validateNum(value) {
  return Number.isNaN(value) ? 0 : value;
}
const WaveEffect = props => {
  const {
    className,
    target,
    component
  } = props;
  const divRef = react__WEBPACK_IMPORTED_MODULE_4__.useRef(null);
  const [color, setWaveColor] = react__WEBPACK_IMPORTED_MODULE_4__.useState(null);
  const [borderRadius, setBorderRadius] = react__WEBPACK_IMPORTED_MODULE_4__.useState([]);
  const [left, setLeft] = react__WEBPACK_IMPORTED_MODULE_4__.useState(0);
  const [top, setTop] = react__WEBPACK_IMPORTED_MODULE_4__.useState(0);
  const [width, setWidth] = react__WEBPACK_IMPORTED_MODULE_4__.useState(0);
  const [height, setHeight] = react__WEBPACK_IMPORTED_MODULE_4__.useState(0);
  const [enabled, setEnabled] = react__WEBPACK_IMPORTED_MODULE_4__.useState(false);
  const waveStyle = {
    left,
    top,
    width,
    height,
    borderRadius: borderRadius.map(radius => `${radius}px`).join(' ')
  };
  if (color) {
    waveStyle['--wave-color'] = color;
  }
  function syncPos() {
    const nodeStyle = getComputedStyle(target);
    // Get wave color from target
    setWaveColor((0,_util__WEBPACK_IMPORTED_MODULE_5__.getTargetWaveColor)(target));
    const isStatic = nodeStyle.position === 'static';
    // Rect
    const {
      borderLeftWidth,
      borderTopWidth
    } = nodeStyle;
    setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
    setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
    setWidth(target.offsetWidth);
    setHeight(target.offsetHeight);
    // Get border radius
    const {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    } = nodeStyle;
    setBorderRadius([borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius].map(radius => validateNum(parseFloat(radius))));
  }
  react__WEBPACK_IMPORTED_MODULE_4__.useEffect(() => {
    if (target) {
      // We need delay to check position here
      // since UI may change after click
      const id = (0,rc_util_es_raf__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
        syncPos();
        setEnabled(true);
      });
      // Add resize observer to follow size
      let resizeObserver;
      if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(syncPos);
        resizeObserver.observe(target);
      }
      return () => {
        rc_util_es_raf__WEBPACK_IMPORTED_MODULE_3__["default"].cancel(id);
        resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
      };
    }
  }, []);
  if (!enabled) {
    return null;
  }
  const isSmallComponent = (component === 'Checkbox' || component === 'Radio') && (target === null || target === void 0 ? void 0 : target.classList.contains(_interface__WEBPACK_IMPORTED_MODULE_6__.TARGET_CLS));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(rc_motion__WEBPACK_IMPORTED_MODULE_1__["default"], {
    visible: true,
    motionAppear: true,
    motionName: "wave-motion",
    motionDeadline: 5000,
    onAppearEnd: (_, event) => {
      var _a;
      if (event.deadline || event.propertyName === 'opacity') {
        const holder = (_a = divRef.current) === null || _a === void 0 ? void 0 : _a.parentElement;
        (0,rc_util_es_React_render__WEBPACK_IMPORTED_MODULE_2__.unmount)(holder).then(() => {
          holder === null || holder === void 0 ? void 0 : holder.remove();
        });
      }
      return false;
    }
  }, _ref => {
    let {
      className: motionClassName
    } = _ref;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      ref: divRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, {
        'wave-quick': isSmallComponent
      }, motionClassName),
      style: waveStyle
    });
  });
};
const showWaveEffect = (target, info) => {
  var _a;
  const {
    component
  } = info;
  // Skip for unchecked checkbox
  if (component === 'Checkbox' && !((_a = target.querySelector('input')) === null || _a === void 0 ? void 0 : _a.checked)) {
    return;
  }
  // Create holder
  const holder = document.createElement('div');
  holder.style.position = 'absolute';
  holder.style.left = '0px';
  holder.style.top = '0px';
  target === null || target === void 0 ? void 0 : target.insertBefore(holder, target === null || target === void 0 ? void 0 : target.firstChild);
  (0,rc_util_es_React_render__WEBPACK_IMPORTED_MODULE_2__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(WaveEffect, Object.assign({}, info, {
    target: target
  })), holder);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showWaveEffect);

/***/ }),

/***/ "../node_modules/antd/es/_util/wave/index.js":
/*!***************************************************!*\
  !*** ../node_modules/antd/es/_util/wave/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/ref */ "../node_modules/rc-util/es/ref.js");
/* harmony import */ var rc_util_es_Dom_isVisible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Dom/isVisible */ "../node_modules/rc-util/es/Dom/isVisible.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _reactNode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reactNode */ "../node_modules/antd/es/_util/reactNode.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "../node_modules/antd/es/_util/wave/style.js");
/* harmony import */ var _useWave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useWave */ "../node_modules/antd/es/_util/wave/useWave.js");








const Wave = props => {
  const {
    children,
    disabled,
    component
  } = props;
  const {
    getPrefixCls
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_config_provider__WEBPACK_IMPORTED_MODULE_4__.ConfigContext);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  // ============================== Style ===============================
  const prefixCls = getPrefixCls('wave');
  const [, hashId] = (0,_style__WEBPACK_IMPORTED_MODULE_5__["default"])(prefixCls);
  // =============================== Wave ===============================
  const showWave = (0,_useWave__WEBPACK_IMPORTED_MODULE_6__["default"])(containerRef, classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, hashId), component);
  // ============================== Effect ==============================
  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(() => {
    const node = containerRef.current;
    if (!node || node.nodeType !== 1 || disabled) {
      return;
    }
    // Click handler
    const onClick = e => {
      // Fix radio button click twice
      if (!(0,rc_util_es_Dom_isVisible__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target) ||
      // No need wave
      !node.getAttribute || node.getAttribute('disabled') || node.disabled || node.className.includes('disabled') || node.className.includes('-leave')) {
        return;
      }
      showWave(e);
    };
    // Bind events
    node.addEventListener('click', onClick, true);
    return () => {
      node.removeEventListener('click', onClick, true);
    };
  }, [disabled]);
  // ============================== Render ==============================
  if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().isValidElement(children)) {
    return children !== null && children !== void 0 ? children : null;
  }
  const ref = (0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_1__.supportRef)(children) ? (0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_1__.composeRef)(children.ref, containerRef) : containerRef;
  return (0,_reactNode__WEBPACK_IMPORTED_MODULE_7__.cloneElement)(children, {
    ref
  });
};
if (true) {
  Wave.displayName = 'Wave';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wave);

/***/ }),

/***/ "../node_modules/antd/es/_util/wave/interface.js":
/*!*******************************************************!*\
  !*** ../node_modules/antd/es/_util/wave/interface.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TARGET_CLS: () => (/* binding */ TARGET_CLS)
/* harmony export */ });
const TARGET_CLS = 'ant-wave-target';

/***/ }),

/***/ "../node_modules/antd/es/_util/wave/style.js":
/*!***************************************************!*\
  !*** ../node_modules/antd/es/_util/wave/style.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/genComponentStyleHook.js");

const genWaveStyle = token => {
  const {
    componentCls,
    colorPrimary
  } = token;
  return {
    [componentCls]: {
      position: 'absolute',
      background: 'transparent',
      pointerEvents: 'none',
      boxSizing: 'border-box',
      color: `var(--wave-color, ${colorPrimary})`,
      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,
      // =================== Motion ===================
      '&.wave-motion-appear': {
        transition: [`box-shadow 0.4s ${token.motionEaseOutCirc}`, `opacity 2s ${token.motionEaseOutCirc}`].join(','),
        '&-active': {
          boxShadow: `0 0 0 6px currentcolor`,
          opacity: 0
        },
        '&.wave-quick': {
          transition: [`box-shadow 0.3s ${token.motionEaseInOut}`, `opacity 0.35s ${token.motionEaseInOut}`].join(',')
        }
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__["default"])('Wave', token => [genWaveStyle(token)]));

/***/ }),

/***/ "../node_modules/antd/es/_util/wave/useWave.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/_util/wave/useWave.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useWave)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util */ "../node_modules/rc-util/es/index.js");
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/raf */ "../node_modules/rc-util/es/raf.js");
/* harmony import */ var _WaveEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WaveEffect */ "../node_modules/antd/es/_util/wave/WaveEffect.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _theme_useToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/useToken */ "../node_modules/antd/es/theme/useToken.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interface */ "../node_modules/antd/es/_util/wave/interface.js");







function useWave(nodeRef, className, component) {
  const {
    wave
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_3__.ConfigContext);
  const [, token, hashId] = (0,_theme_useToken__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const showWave = (0,rc_util__WEBPACK_IMPORTED_MODULE_1__.useEvent)(event => {
    const node = nodeRef.current;
    if ((wave === null || wave === void 0 ? void 0 : wave.disabled) || !node) {
      return;
    }
    const targetNode = node.querySelector(`.${_interface__WEBPACK_IMPORTED_MODULE_5__.TARGET_CLS}`) || node;
    const {
      showEffect
    } = wave || {};
    // Customize wave effect
    (showEffect || _WaveEffect__WEBPACK_IMPORTED_MODULE_6__["default"])(targetNode, {
      className,
      token,
      component,
      event,
      hashId
    });
  });
  const rafId = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  // Merge trigger event into one for each frame
  const showDebounceWave = event => {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__["default"].cancel(rafId.current);
    rafId.current = (0,rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
      showWave(event);
    });
  };
  return showDebounceWave;
}

/***/ }),

/***/ "../node_modules/antd/es/_util/wave/util.js":
/*!**************************************************!*\
  !*** ../node_modules/antd/es/_util/wave/util.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTargetWaveColor: () => (/* binding */ getTargetWaveColor),
/* harmony export */   isNotGrey: () => (/* binding */ isNotGrey),
/* harmony export */   isValidWaveColor: () => (/* binding */ isValidWaveColor)
/* harmony export */ });
function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  const match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
function isValidWaveColor(color) {
  return color && color !== '#fff' && color !== '#ffffff' && color !== 'rgb(255, 255, 255)' && color !== 'rgba(255, 255, 255, 1)' && isNotGrey(color) && !/rgba\((?:\d*, ){3}0\)/.test(color) &&
  // any transparent rgba color
  color !== 'transparent';
}
function getTargetWaveColor(node) {
  const {
    borderTopColor,
    borderColor,
    backgroundColor
  } = getComputedStyle(node);
  if (isValidWaveColor(borderTopColor)) {
    return borderTopColor;
  }
  if (isValidWaveColor(borderColor)) {
    return borderColor;
  }
  if (isValidWaveColor(backgroundColor)) {
    return backgroundColor;
  }
  return null;
}

/***/ }),

/***/ "../node_modules/antd/es/_util/zindexContext.js":
/*!******************************************************!*\
  !*** ../node_modules/antd/es/_util/zindexContext.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const zIndexContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(undefined);
if (true) {
  zIndexContext.displayName = 'zIndexContext';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (zIndexContext);

/***/ }),

/***/ "../node_modules/antd/es/app/context.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/app/context.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppConfigContext: () => (/* binding */ AppConfigContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AppConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
const AppContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  message: {},
  notification: {},
  modal: {}
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);

/***/ }),

/***/ "../node_modules/antd/es/app/index.js":
/*!********************************************!*\
  !*** ../node_modules/antd/es/app/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _message_useMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message/useMessage */ "../node_modules/antd/es/message/useMessage.js");
/* harmony import */ var _modal_useModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/useModal */ "../node_modules/antd/es/modal/useModal/index.js");
/* harmony import */ var _notification_useNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notification/useNotification */ "../node_modules/antd/es/notification/useNotification.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "../node_modules/antd/es/app/context.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "../node_modules/antd/es/app/style/index.js");
"use client";









const useApp = () => react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_context__WEBPACK_IMPORTED_MODULE_2__["default"]);
const App = props => {
  const {
    prefixCls: customizePrefixCls,
    children,
    className,
    rootClassName,
    message,
    notification,
    style,
    component = 'div'
  } = props;
  const {
    getPrefixCls
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_config_provider__WEBPACK_IMPORTED_MODULE_3__.ConfigContext);
  const prefixCls = getPrefixCls('app', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,_style__WEBPACK_IMPORTED_MODULE_4__["default"])(prefixCls);
  const customClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()(hashId, prefixCls, className, rootClassName, cssVarCls);
  const appConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.AppConfigContext);
  const mergedAppConfig = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => ({
    message: Object.assign(Object.assign({}, appConfig.message), message),
    notification: Object.assign(Object.assign({}, appConfig.notification), notification)
  }), [message, notification, appConfig.message, appConfig.notification]);
  const [messageApi, messageContextHolder] = (0,_message_useMessage__WEBPACK_IMPORTED_MODULE_5__["default"])(mergedAppConfig.message);
  const [notificationApi, notificationContextHolder] = (0,_notification_useNotification__WEBPACK_IMPORTED_MODULE_6__["default"])(mergedAppConfig.notification);
  const [ModalApi, ModalContextHolder] = (0,_modal_useModal__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const memoizedContextValue = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => ({
    message: messageApi,
    notification: notificationApi,
    modal: ModalApi
  }), [messageApi, notificationApi, ModalApi]);
  // ============================ Render ============================
  const Component = component === false ? (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment) : component;
  const rootProps = {
    className: customClassName,
    style
  };
  return wrapCSSVar( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: memoizedContextValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context__WEBPACK_IMPORTED_MODULE_2__.AppConfigContext.Provider, {
    value: mergedAppConfig
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, Object.assign({}, component === false ? undefined : rootProps), ModalContextHolder, messageContextHolder, notificationContextHolder, children))));
};
if (true) {
  App.displayName = 'App';
}
App.useApp = useApp;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "../node_modules/antd/es/app/style/index.js":
/*!**************************************************!*\
  !*** ../node_modules/antd/es/app/style/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   prepareComponentToken: () => (/* binding */ prepareComponentToken)
/* harmony export */ });
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/genComponentStyleHook.js");

// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    colorText,
    fontSize,
    lineHeight,
    fontFamily
  } = token;
  return {
    [componentCls]: {
      color: colorText,
      fontSize,
      lineHeight,
      fontFamily
    }
  };
};
const prepareComponentToken = () => ({});
// ============================== Export ==============================
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__.genStyleHooks)('App', genBaseStyle, prepareComponentToken));

/***/ }),

/***/ "../node_modules/antd/es/button/IconWrapper.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/button/IconWrapper.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
"use client";



const IconWrapper = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    style,
    children,
    prefixCls
  } = props;
  const iconWrapperCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()(`${prefixCls}-icon`, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    ref: ref,
    className: iconWrapperCls,
    style: style
  }, children);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconWrapper);

/***/ }),

/***/ "../node_modules/antd/es/button/LoadingIcon.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/button/LoadingIcon.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_icons_es_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons/es/icons/LoadingOutlined */ "../node_modules/@ant-design/icons/es/icons/LoadingOutlined.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-motion */ "../node_modules/rc-motion/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _IconWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IconWrapper */ "../node_modules/antd/es/button/IconWrapper.js");
"use client";






const InnerLoadingIcon = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_ref, ref) => {
  let {
    prefixCls,
    className,
    style,
    iconClassName
  } = _ref;
  const mergedIconCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()(`${prefixCls}-loading-icon`, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_IconWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    prefixCls: prefixCls,
    className: mergedIconCls,
    style: style,
    ref: ref
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ant_design_icons_es_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: iconClassName
  }));
});
const getCollapsedWidth = () => ({
  width: 0,
  opacity: 0,
  transform: 'scale(0)'
});
const getRealWidth = node => ({
  width: node.scrollWidth,
  opacity: 1,
  transform: 'scale(1)'
});
const LoadingIcon = props => {
  const {
    prefixCls,
    loading,
    existIcon,
    className,
    style
  } = props;
  const visible = !!loading;
  if (existIcon) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(InnerLoadingIcon, {
      prefixCls: prefixCls,
      className: className,
      style: style
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(rc_motion__WEBPACK_IMPORTED_MODULE_1__["default"], {
    visible: visible,
    // We do not really use this motionName
    motionName: `${prefixCls}-loading-icon-motion`,
    motionLeave: visible,
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, (_ref2, ref) => {
    let {
      className: motionCls,
      style: motionStyle
    } = _ref2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(InnerLoadingIcon, {
      prefixCls: prefixCls,
      className: className,
      style: Object.assign(Object.assign({}, style), motionStyle),
      ref: ref,
      iconClassName: motionCls
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingIcon);

/***/ }),

/***/ "../node_modules/antd/es/button/button-group.js":
/*!******************************************************!*\
  !*** ../node_modules/antd/es/button/button-group.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupSizeContext: () => (/* binding */ GroupSizeContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/internal */ "../node_modules/antd/es/theme/useToken.js");
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const GroupSizeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const ButtonGroup = props => {
  const {
    getPrefixCls,
    direction
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_2__.ConfigContext);
  const {
      prefixCls: customizePrefixCls,
      size,
      className
    } = props,
    others = __rest(props, ["prefixCls", "size", "className"]);
  const prefixCls = getPrefixCls('btn-group', customizePrefixCls);
  const [,, hashId] = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_3__["default"])();
  let sizeCls = '';
  switch (size) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    case 'middle':
    default:
    // Do nothing
  }
  if (true) {
    const warning = (0,_util_warning__WEBPACK_IMPORTED_MODULE_4__.devUseWarning)('Button.Group');
     true ? warning(!size || ['large', 'small', 'middle'].includes(size), 'usage', 'Invalid prop `size`.') : 0;
  }
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, {
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, hashId);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GroupSizeContext.Provider, {
    value: size
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", Object.assign({}, others, {
    className: classes
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonGroup);

/***/ }),

/***/ "../node_modules/antd/es/button/button.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/button/button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/omit */ "../node_modules/rc-util/es/omit.js");
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/ref */ "../node_modules/rc-util/es/ref.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _util_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_util/wave */ "../node_modules/antd/es/_util/wave/index.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _config_provider_DisabledContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config-provider/DisabledContext */ "../node_modules/antd/es/config-provider/DisabledContext.js");
/* harmony import */ var _config_provider_hooks_useSize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config-provider/hooks/useSize */ "../node_modules/antd/es/config-provider/hooks/useSize.js");
/* harmony import */ var _space_Compact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../space/Compact */ "../node_modules/antd/es/space/Compact.js");
/* harmony import */ var _button_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button-group */ "../node_modules/antd/es/button/button-group.js");
/* harmony import */ var _buttonHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buttonHelpers */ "../node_modules/antd/es/button/buttonHelpers.js");
/* harmony import */ var _IconWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./IconWrapper */ "../node_modules/antd/es/button/IconWrapper.js");
/* harmony import */ var _LoadingIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LoadingIcon */ "../node_modules/antd/es/button/LoadingIcon.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "../node_modules/antd/es/button/style/index.js");
/* harmony import */ var _style_compactCmp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./style/compactCmp */ "../node_modules/antd/es/button/style/compactCmp.js");
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* eslint-disable react/button-has-type */
















function getLoadingConfig(loading) {
  if (typeof loading === 'object' && loading) {
    let delay = loading === null || loading === void 0 ? void 0 : loading.delay;
    delay = !Number.isNaN(delay) && typeof delay === 'number' ? delay : 0;
    return {
      loading: delay <= 0,
      delay
    };
  }
  return {
    loading: !!loading,
    delay: 0
  };
}
const InternalButton = (props, ref) => {
  var _a, _b;
  const {
      loading = false,
      prefixCls: customizePrefixCls,
      type = 'default',
      danger,
      shape = 'default',
      size: customizeSize,
      styles,
      disabled: customDisabled,
      className,
      rootClassName,
      children,
      icon,
      ghost = false,
      block = false,
      // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
      htmlType = 'button',
      classNames: customClassNames,
      style: customStyle = {}
    } = props,
    rest = __rest(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]);
  const {
    getPrefixCls,
    autoInsertSpaceInButton,
    direction,
    button
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_config_provider__WEBPACK_IMPORTED_MODULE_4__.ConfigContext);
  const prefixCls = getPrefixCls('btn', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,_style__WEBPACK_IMPORTED_MODULE_5__["default"])(prefixCls);
  const disabled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_config_provider_DisabledContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const groupSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_button_group__WEBPACK_IMPORTED_MODULE_7__.GroupSizeContext);
  const loadingOrDelay = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => getLoadingConfig(loading), [loading]);
  const [innerLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(loadingOrDelay.loading);
  const [hasTwoCNChar, setHasTwoCNChar] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const internalRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  const buttonRef = (0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__.composeRef)(ref, internalRef);
  const needInserted = react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) === 1 && !icon && !(0,_buttonHelpers__WEBPACK_IMPORTED_MODULE_8__.isUnBorderedButtonType)(type);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let delayTimer = null;
    if (loadingOrDelay.delay > 0) {
      delayTimer = setTimeout(() => {
        delayTimer = null;
        setLoading(true);
      }, loadingOrDelay.delay);
    } else {
      setLoading(loadingOrDelay.loading);
    }
    function cleanupTimer() {
      if (delayTimer) {
        clearTimeout(delayTimer);
        delayTimer = null;
      }
    }
    return cleanupTimer;
  }, [loadingOrDelay]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // FIXME: for HOC usage like <FormatMessage />
    if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
      return;
    }
    const buttonText = buttonRef.current.textContent;
    if (needInserted && (0,_buttonHelpers__WEBPACK_IMPORTED_MODULE_8__.isTwoCNChar)(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  }, [buttonRef]);
  const handleClick = e => {
    const {
      onClick
    } = props;
    // FIXME: https://github.com/ant-design/ant-design/issues/30207
    if (innerLoading || mergedDisabled) {
      e.preventDefault();
      return;
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  if (true) {
    const warning = (0,_util_warning__WEBPACK_IMPORTED_MODULE_9__.devUseWarning)('Button');
     true ? warning(!(typeof icon === 'string' && icon.length > 2), 'breaking', `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${icon}\` at https://ant.design/components/icon`) : 0;
     true ? warning(!(ghost && (0,_buttonHelpers__WEBPACK_IMPORTED_MODULE_8__.isUnBorderedButtonType)(type)), 'usage', "`link` or `text` button can't be a `ghost` button.") : 0;
  }
  const autoInsertSpace = autoInsertSpaceInButton !== false;
  const {
    compactSize,
    compactItemClassnames
  } = (0,_space_Compact__WEBPACK_IMPORTED_MODULE_10__.useCompactItemContext)(prefixCls, direction);
  const sizeClassNameMap = {
    large: 'lg',
    small: 'sm',
    middle: undefined
  };
  const sizeFullName = (0,_config_provider_hooks_useSize__WEBPACK_IMPORTED_MODULE_11__["default"])(ctxSize => {
    var _a, _b;
    return (_b = (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : groupSize) !== null && _b !== void 0 ? _b : ctxSize;
  });
  const sizeCls = sizeFullName ? sizeClassNameMap[sizeFullName] || '' : '';
  const iconType = innerLoading ? 'loading' : icon;
  const linkButtonRestProps = (0,rc_util_es_omit__WEBPACK_IMPORTED_MODULE_2__["default"])(rest, ['navigate']);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, hashId, cssVarCls, {
    [`${prefixCls}-${shape}`]: shape !== 'default' && shape,
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
    [`${prefixCls}-background-ghost`]: ghost && !(0,_buttonHelpers__WEBPACK_IMPORTED_MODULE_8__.isUnBorderedButtonType)(type),
    [`${prefixCls}-loading`]: innerLoading,
    [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar && autoInsertSpace && !innerLoading,
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-dangerous`]: !!danger,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, compactItemClassnames, className, rootClassName, button === null || button === void 0 ? void 0 : button.className);
  const fullStyle = Object.assign(Object.assign({}, button === null || button === void 0 ? void 0 : button.style), customStyle);
  const iconClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.icon, (_a = button === null || button === void 0 ? void 0 : button.classNames) === null || _a === void 0 ? void 0 : _a.icon);
  const iconStyle = Object.assign(Object.assign({}, (styles === null || styles === void 0 ? void 0 : styles.icon) || {}), ((_b = button === null || button === void 0 ? void 0 : button.styles) === null || _b === void 0 ? void 0 : _b.icon) || {});
  const iconNode = icon && !innerLoading ? ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IconWrapper__WEBPACK_IMPORTED_MODULE_12__["default"], {
    prefixCls: prefixCls,
    className: iconClasses,
    style: iconStyle
  }, icon)) : ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LoadingIcon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    existIcon: !!icon,
    prefixCls: prefixCls,
    loading: !!innerLoading
  }));
  const kids = children || children === 0 ? (0,_buttonHelpers__WEBPACK_IMPORTED_MODULE_8__.spaceChildren)(children, needInserted && autoInsertSpace) : null;
  if (linkButtonRestProps.href !== undefined) {
    return wrapCSSVar( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", Object.assign({}, linkButtonRestProps, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes, {
        [`${prefixCls}-disabled`]: mergedDisabled
      }),
      href: mergedDisabled ? undefined : linkButtonRestProps.href,
      style: fullStyle,
      onClick: handleClick,
      ref: buttonRef,
      tabIndex: mergedDisabled ? -1 : 0
    }), iconNode, kids));
  }
  let buttonNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", Object.assign({}, rest, {
    type: htmlType,
    className: classes,
    style: fullStyle,
    onClick: handleClick,
    disabled: mergedDisabled,
    ref: buttonRef
  }), iconNode, kids, compactItemClassnames && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style_compactCmp__WEBPACK_IMPORTED_MODULE_14__["default"], {
    key: "compact",
    prefixCls: prefixCls
  }));
  if (!(0,_buttonHelpers__WEBPACK_IMPORTED_MODULE_8__.isUnBorderedButtonType)(type)) {
    buttonNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_util_wave__WEBPACK_IMPORTED_MODULE_15__["default"], {
      component: "Button",
      disabled: !!innerLoading
    }, buttonNode);
  }
  return wrapCSSVar(buttonNode);
};
const Button = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(InternalButton);
if (true) {
  Button.displayName = 'Button';
}
Button.Group = _button_group__WEBPACK_IMPORTED_MODULE_7__["default"];
Button.__ANT_BUTTON = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "../node_modules/antd/es/button/buttonHelpers.js":
/*!*******************************************************!*\
  !*** ../node_modules/antd/es/button/buttonHelpers.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertLegacyProps: () => (/* binding */ convertLegacyProps),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isTwoCNChar: () => (/* binding */ isTwoCNChar),
/* harmony export */   isUnBorderedButtonType: () => (/* binding */ isUnBorderedButtonType),
/* harmony export */   spaceChildren: () => (/* binding */ spaceChildren)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_reactNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_util/reactNode */ "../node_modules/antd/es/_util/reactNode.js");
"use client";



const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }
  return {
    type
  };
}
function isString(str) {
  return typeof str === 'string';
}
function isUnBorderedButtonType(type) {
  return type === 'text' || type === 'link';
}
function splitCNCharsBySpace(child, needInserted) {
  if (child === null || child === undefined) {
    return;
  }
  const SPACE = needInserted ? ' ' : '';
  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return (0,_util_reactNode__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(child, {
      children: child.props.children.split('').join(SPACE)
    });
  }
  if (isString(child)) {
    return isTwoCNChar(child) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, child.split('').join(SPACE)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, child);
  }
  if ((0,_util_reactNode__WEBPACK_IMPORTED_MODULE_1__.isFragment)(child)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, child);
  }
  return child;
}
function spaceChildren(children, needInserted) {
  let isPrevChildPure = false;
  const childList = [];
  react__WEBPACK_IMPORTED_MODULE_0___default().Children.forEach(children, child => {
    const type = typeof child;
    const isCurrentChildPure = type === 'string' || type === 'number';
    if (isPrevChildPure && isCurrentChildPure) {
      const lastIndex = childList.length - 1;
      const lastChild = childList[lastIndex];
      childList[lastIndex] = `${lastChild}${child}`;
    } else {
      childList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(childList, child => splitCNCharsBySpace(child, needInserted));
}
const ButtonTypes = ['default', 'primary', 'dashed', 'link', 'text'];
const ButtonShapes = ['default', 'circle', 'round'];
const ButtonHTMLTypes = ['submit', 'button', 'reset'];

/***/ }),

/***/ "../node_modules/antd/es/button/index.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/button/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertLegacyProps: () => (/* reexport safe */ _buttonHelpers__WEBPACK_IMPORTED_MODULE_0__.convertLegacyProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isString: () => (/* reexport safe */ _buttonHelpers__WEBPACK_IMPORTED_MODULE_0__.isString),
/* harmony export */   isTwoCNChar: () => (/* reexport safe */ _buttonHelpers__WEBPACK_IMPORTED_MODULE_0__.isTwoCNChar),
/* harmony export */   isUnBorderedButtonType: () => (/* reexport safe */ _buttonHelpers__WEBPACK_IMPORTED_MODULE_0__.isUnBorderedButtonType),
/* harmony export */   spaceChildren: () => (/* reexport safe */ _buttonHelpers__WEBPACK_IMPORTED_MODULE_0__.spaceChildren)
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "../node_modules/antd/es/button/button.js");
/* harmony import */ var _buttonHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonHelpers */ "../node_modules/antd/es/button/buttonHelpers.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_button__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/button/style/compactCmp.js":
/*!**********************************************************!*\
  !*** ../node_modules/antd/es/button/style/compactCmp.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ "../node_modules/antd/es/button/style/token.js");
/* harmony import */ var _style_compact_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/compact-item */ "../node_modules/antd/es/style/compact-item.js");
/* harmony import */ var _style_compact_item_vertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../style/compact-item-vertical */ "../node_modules/antd/es/style/compact-item-vertical.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/genComponentStyleHook.js");
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");





const genButtonCompactStyle = token => {
  const {
    componentCls,
    calc
  } = token;
  return {
    [componentCls]: {
      // Special styles for Primary Button
      [`&-compact-item${componentCls}-primary`]: {
        [`&:not([disabled]) + ${componentCls}-compact-item${componentCls}-primary:not([disabled])`]: {
          position: 'relative',
          '&:before': {
            position: 'absolute',
            top: calc(token.lineWidth).mul(-1).equal(),
            insetInlineStart: calc(token.lineWidth).mul(-1).equal(),
            display: 'inline-block',
            width: token.lineWidth,
            height: `calc(100% + ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.lineWidth)} * 2)`,
            backgroundColor: token.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      '&-compact-vertical-item': {
        [`&${componentCls}-primary`]: {
          [`&:not([disabled]) + ${componentCls}-compact-vertical-item${componentCls}-primary:not([disabled])`]: {
            position: 'relative',
            '&:before': {
              position: 'absolute',
              top: calc(token.lineWidth).mul(-1).equal(),
              insetInlineStart: calc(token.lineWidth).mul(-1).equal(),
              display: 'inline-block',
              width: `calc(100% + ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.lineWidth)} * 2)`,
              height: token.lineWidth,
              backgroundColor: token.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__.genSubStyleComponent)(['Button', 'compact'], token => {
  const buttonToken = (0,_token__WEBPACK_IMPORTED_MODULE_2__.prepareToken)(token);
  return [
  // Space Compact
  (0,_style_compact_item__WEBPACK_IMPORTED_MODULE_3__.genCompactItemStyle)(buttonToken), (0,_style_compact_item_vertical__WEBPACK_IMPORTED_MODULE_4__.genCompactItemVerticalStyle)(buttonToken), genButtonCompactStyle(buttonToken)];
}, _token__WEBPACK_IMPORTED_MODULE_2__.prepareComponentToken));

/***/ }),

/***/ "../node_modules/antd/es/button/style/group.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/button/style/group.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
  // Border
  [`> span, > ${buttonTypeCls}`]: {
    '&:not(:last-child)': {
      [`&, & > ${buttonTypeCls}`]: {
        '&:not(:disabled)': {
          borderInlineEndColor: borderColor
        }
      }
    },
    '&:not(:first-child)': {
      [`&, & > ${buttonTypeCls}`]: {
        '&:not(:disabled)': {
          borderInlineStartColor: borderColor
        }
      }
    }
  }
});
const genGroupStyle = token => {
  const {
    componentCls,
    fontSize,
    lineWidth,
    groupBorderColor,
    colorErrorHover
  } = token;
  return {
    [`${componentCls}-group`]: [{
      position: 'relative',
      display: 'inline-flex',
      // Border
      [`> span, > ${componentCls}`]: {
        '&:not(:last-child)': {
          [`&, & > ${componentCls}`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        '&:not(:first-child)': {
          marginInlineStart: token.calc(lineWidth).mul(-1).equal(),
          [`&, & > ${componentCls}`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      },
      [componentCls]: {
        position: 'relative',
        zIndex: 1,
        [`&:hover,
          &:focus,
          &:active`]: {
          zIndex: 2
        },
        '&[disabled]': {
          zIndex: 0
        }
      },
      [`${componentCls}-icon-only`]: {
        fontSize
      }
    },
    // Border Color
    genButtonBorderStyle(`${componentCls}-primary`, groupBorderColor), genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)]
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genGroupStyle);

/***/ }),

/***/ "../node_modules/antd/es/button/style/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/button/style/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style */ "../node_modules/antd/es/style/index.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/statistic.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/genComponentStyleHook.js");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group */ "../node_modules/antd/es/button/style/group.js");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token */ "../node_modules/antd/es/button/style/token.js");





// ============================== Shared ==============================
const genSharedButtonStyle = token => {
  const {
    componentCls,
    iconCls,
    fontWeight
  } = token;
  return {
    [componentCls]: {
      outline: 'none',
      position: 'relative',
      display: 'inline-block',
      fontWeight,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      backgroundImage: 'none',
      background: 'transparent',
      border: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.lineWidth)} ${token.lineType} transparent`,
      cursor: 'pointer',
      transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
      userSelect: 'none',
      touchAction: 'manipulation',
      color: token.colorText,
      '&:disabled > *': {
        pointerEvents: 'none'
      },
      '> span': {
        display: 'inline-block'
      },
      [`${componentCls}-icon`]: {
        lineHeight: 0
      },
      // Leave a space between icon and text.
      [`> ${iconCls} + span, > span + ${iconCls}`]: {
        marginInlineStart: token.marginXS
      },
      [`&:not(${componentCls}-icon-only) > ${componentCls}-icon`]: {
        [`&${componentCls}-loading-icon, &:not(:last-child)`]: {
          marginInlineEnd: token.marginXS
        }
      },
      '> a': {
        color: 'currentColor'
      },
      '&:not(:disabled)': Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__.genFocusStyle)(token)),
      [`&${componentCls}-two-chinese-chars::first-letter`]: {
        letterSpacing: '0.34em'
      },
      [`&${componentCls}-two-chinese-chars > *:not(${iconCls})`]: {
        marginInlineEnd: '-0.34em',
        letterSpacing: '0.34em'
      },
      // make `btn-icon-only` not too narrow
      [`&-icon-only${componentCls}-compact-item`]: {
        flex: 'none'
      }
    }
  };
};
const genHoverActiveButtonStyle = (btnCls, hoverStyle, activeStyle) => ({
  [`&:not(:disabled):not(${btnCls}-disabled)`]: {
    '&:hover': hoverStyle,
    '&:active': activeStyle
  }
});
// ============================== Shape ===============================
const genCircleButtonStyle = token => ({
  minWidth: token.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: '50%'
});
const genRoundButtonStyle = token => ({
  borderRadius: token.controlHeight,
  paddingInlineStart: token.calc(token.controlHeight).div(2).equal(),
  paddingInlineEnd: token.calc(token.controlHeight).div(2).equal()
});
// =============================== Type ===============================
const genDisabledStyle = token => ({
  cursor: 'not-allowed',
  borderColor: token.borderColorDisabled,
  color: token.colorTextDisabled,
  background: token.colorBgContainerDisabled,
  boxShadow: 'none'
});
const genGhostButtonStyle = (btnCls, background, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
  [`&${btnCls}-background-ghost`]: Object.assign(Object.assign({
    color: textColor || undefined,
    background,
    borderColor: borderColor || undefined,
    boxShadow: 'none'
  }, genHoverActiveButtonStyle(btnCls, Object.assign({
    background
  }, hoverStyle), Object.assign({
    background
  }, activeStyle))), {
    '&:disabled': {
      cursor: 'not-allowed',
      color: textColorDisabled || undefined,
      borderColor: borderColorDisabled || undefined
    }
  })
});
const genSolidDisabledButtonStyle = token => ({
  [`&:disabled, &${token.componentCls}-disabled`]: Object.assign({}, genDisabledStyle(token))
});
const genSolidButtonStyle = token => Object.assign({}, genSolidDisabledButtonStyle(token));
const genPureDisabledButtonStyle = token => ({
  [`&:disabled, &${token.componentCls}-disabled`]: {
    cursor: 'not-allowed',
    color: token.colorTextDisabled
  }
});
// Type: Default
const genDefaultButtonStyle = token => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token)), {
  background: token.defaultBg,
  borderColor: token.defaultBorderColor,
  color: token.defaultColor,
  boxShadow: token.defaultShadow
}), genHoverActiveButtonStyle(token.componentCls, {
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.ghostBg, token.defaultGhostColor, token.defaultGhostBorderColor, token.colorTextDisabled, token.colorBorder)), {
  [`&${token.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: token.colorError,
    borderColor: token.colorError
  }, genHoverActiveButtonStyle(token.componentCls, {
    color: token.colorErrorHover,
    borderColor: token.colorErrorBorderHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder)), genSolidDisabledButtonStyle(token))
});
// Type: Primary
const genPrimaryButtonStyle = token => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token)), {
  color: token.primaryColor,
  background: token.colorPrimary,
  boxShadow: token.primaryShadow
}), genHoverActiveButtonStyle(token.componentCls, {
  color: token.colorTextLightSolid,
  background: token.colorPrimaryHover
}, {
  color: token.colorTextLightSolid,
  background: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorPrimary, token.colorPrimary, token.colorTextDisabled, token.colorBorder, {
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), {
  [`&${token.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    background: token.colorError,
    boxShadow: token.dangerShadow,
    color: token.dangerColor
  }, genHoverActiveButtonStyle(token.componentCls, {
    background: token.colorErrorHover
  }, {
    background: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder, {
    color: token.colorErrorHover,
    borderColor: token.colorErrorHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genSolidDisabledButtonStyle(token))
});
// Type: Dashed
const genDashedButtonStyle = token => Object.assign(Object.assign({}, genDefaultButtonStyle(token)), {
  borderStyle: 'dashed'
});
// Type: Link
const genLinkButtonStyle = token => Object.assign(Object.assign(Object.assign({
  color: token.colorLink
}, genHoverActiveButtonStyle(token.componentCls, {
  color: token.colorLinkHover,
  background: token.linkHoverBg
}, {
  color: token.colorLinkActive
})), genPureDisabledButtonStyle(token)), {
  [`&${token.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: token.colorError
  }, genHoverActiveButtonStyle(token.componentCls, {
    color: token.colorErrorHover
  }, {
    color: token.colorErrorActive
  })), genPureDisabledButtonStyle(token))
});
// Type: Text
const genTextButtonStyle = token => Object.assign(Object.assign(Object.assign({}, genHoverActiveButtonStyle(token.componentCls, {
  color: token.colorText,
  background: token.textHoverBg
}, {
  color: token.colorText,
  background: token.colorBgTextActive
})), genPureDisabledButtonStyle(token)), {
  [`&${token.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: token.colorError
  }, genPureDisabledButtonStyle(token)), genHoverActiveButtonStyle(token.componentCls, {
    color: token.colorErrorHover,
    background: token.colorErrorBg
  }, {
    color: token.colorErrorHover,
    background: token.colorErrorBg
  }))
});
const genTypeButtonStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-default`]: genDefaultButtonStyle(token),
    [`${componentCls}-primary`]: genPrimaryButtonStyle(token),
    [`${componentCls}-dashed`]: genDashedButtonStyle(token),
    [`${componentCls}-link`]: genLinkButtonStyle(token),
    [`${componentCls}-text`]: genTextButtonStyle(token),
    [`${componentCls}-ghost`]: genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorBgContainer, token.colorBgContainer, token.colorTextDisabled, token.colorBorder)
  };
};
// =============================== Size ===============================
const genSizeButtonStyle = function (token) {
  let sizePrefixCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  const {
    componentCls,
    controlHeight,
    fontSize,
    lineHeight,
    borderRadius,
    buttonPaddingHorizontal,
    iconCls,
    buttonPaddingVertical
  } = token;
  const iconOnlyCls = `${componentCls}-icon-only`;
  return [
  // Size
  {
    [`${componentCls}${sizePrefixCls}`]: {
      fontSize,
      lineHeight,
      height: controlHeight,
      padding: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(buttonPaddingVertical)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(buttonPaddingHorizontal)}`,
      borderRadius,
      [`&${iconOnlyCls}`]: {
        width: controlHeight,
        paddingInlineStart: 0,
        paddingInlineEnd: 0,
        [`&${componentCls}-round`]: {
          width: 'auto'
        },
        [iconCls]: {
          fontSize: token.buttonIconOnlyFontSize
        }
      },
      // Loading
      [`&${componentCls}-loading`]: {
        opacity: token.opacityLoading,
        cursor: 'default'
      },
      [`${componentCls}-loading-icon`]: {
        transition: `width ${token.motionDurationSlow} ${token.motionEaseInOut}, opacity ${token.motionDurationSlow} ${token.motionEaseInOut}`
      }
    }
  },
  // Shape - patch prefixCls again to override solid border radius style
  {
    [`${componentCls}${componentCls}-circle${sizePrefixCls}`]: genCircleButtonStyle(token)
  }, {
    [`${componentCls}${componentCls}-round${sizePrefixCls}`]: genRoundButtonStyle(token)
  }];
};
const genSizeBaseButtonStyle = token => genSizeButtonStyle((0,_theme_internal__WEBPACK_IMPORTED_MODULE_2__.merge)(token, {
  fontSize: token.contentFontSize,
  lineHeight: token.contentLineHeight
}));
const genSizeSmallButtonStyle = token => {
  const smallToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_2__.merge)(token, {
    controlHeight: token.controlHeightSM,
    fontSize: token.contentFontSizeSM,
    lineHeight: token.contentLineHeightSM,
    padding: token.paddingXS,
    buttonPaddingHorizontal: token.paddingInlineSM,
    buttonPaddingVertical: token.paddingBlockSM,
    borderRadius: token.borderRadiusSM,
    buttonIconOnlyFontSize: token.onlyIconSizeSM
  });
  return genSizeButtonStyle(smallToken, `${token.componentCls}-sm`);
};
const genSizeLargeButtonStyle = token => {
  const largeToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_2__.merge)(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.contentFontSizeLG,
    lineHeight: token.contentLineHeightLG,
    buttonPaddingHorizontal: token.paddingInlineLG,
    buttonPaddingVertical: token.paddingBlockLG,
    borderRadius: token.borderRadiusLG,
    buttonIconOnlyFontSize: token.onlyIconSizeLG
  });
  return genSizeButtonStyle(largeToken, `${token.componentCls}-lg`);
};
const genBlockButtonStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      [`&${componentCls}-block`]: {
        width: '100%'
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_3__.genStyleHooks)('Button', token => {
  const buttonToken = (0,_token__WEBPACK_IMPORTED_MODULE_4__.prepareToken)(token);
  return [
  // Shared
  genSharedButtonStyle(buttonToken),
  // Size
  genSizeSmallButtonStyle(buttonToken), genSizeBaseButtonStyle(buttonToken), genSizeLargeButtonStyle(buttonToken),
  // Block
  genBlockButtonStyle(buttonToken),
  // Group (type, ghost, danger, loading)
  genTypeButtonStyle(buttonToken),
  // Button Group
  (0,_group__WEBPACK_IMPORTED_MODULE_5__["default"])(buttonToken)];
}, _token__WEBPACK_IMPORTED_MODULE_4__.prepareComponentToken, {
  unitless: {
    fontWeight: true,
    contentLineHeight: true,
    contentLineHeightSM: true,
    contentLineHeightLG: true
  }
}));

/***/ }),

/***/ "../node_modules/antd/es/button/style/token.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/button/style/token.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prepareComponentToken: () => (/* binding */ prepareComponentToken),
/* harmony export */   prepareToken: () => (/* binding */ prepareToken)
/* harmony export */ });
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/statistic.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/themes/shared/genFontSizes.js");

const prepareToken = token => {
  const {
    paddingInline,
    onlyIconSize,
    paddingBlock
  } = token;
  const buttonToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__.merge)(token, {
    buttonPaddingHorizontal: paddingInline,
    buttonPaddingVertical: paddingBlock,
    buttonIconOnlyFontSize: onlyIconSize
  });
  return buttonToken;
};
const prepareComponentToken = token => {
  var _a, _b, _c, _d, _e, _f;
  const contentFontSize = (_a = token.contentFontSize) !== null && _a !== void 0 ? _a : token.fontSize;
  const contentFontSizeSM = (_b = token.contentFontSizeSM) !== null && _b !== void 0 ? _b : token.fontSize;
  const contentFontSizeLG = (_c = token.contentFontSizeLG) !== null && _c !== void 0 ? _c : token.fontSizeLG;
  const contentLineHeight = (_d = token.contentLineHeight) !== null && _d !== void 0 ? _d : (0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__.getLineHeight)(contentFontSize);
  const contentLineHeightSM = (_e = token.contentLineHeightSM) !== null && _e !== void 0 ? _e : (0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__.getLineHeight)(contentFontSizeSM);
  const contentLineHeightLG = (_f = token.contentLineHeightLG) !== null && _f !== void 0 ? _f : (0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__.getLineHeight)(contentFontSizeLG);
  return {
    fontWeight: 400,
    defaultShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlTmpOutline}`,
    primaryShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlOutline}`,
    dangerShadow: `0 ${token.controlOutlineWidth}px 0 ${token.colorErrorOutline}`,
    primaryColor: token.colorTextLightSolid,
    dangerColor: token.colorTextLightSolid,
    borderColorDisabled: token.colorBorder,
    defaultGhostColor: token.colorBgContainer,
    ghostBg: 'transparent',
    defaultGhostBorderColor: token.colorBgContainer,
    paddingInline: token.paddingContentHorizontal - token.lineWidth,
    paddingInlineLG: token.paddingContentHorizontal - token.lineWidth,
    paddingInlineSM: 8 - token.lineWidth,
    onlyIconSize: token.fontSizeLG,
    onlyIconSizeSM: token.fontSizeLG - 2,
    onlyIconSizeLG: token.fontSizeLG + 2,
    groupBorderColor: token.colorPrimaryHover,
    linkHoverBg: 'transparent',
    textHoverBg: token.colorBgTextHover,
    defaultColor: token.colorText,
    defaultBg: token.colorBgContainer,
    defaultBorderColor: token.colorBorder,
    defaultBorderColorDisabled: token.colorBorder,
    contentFontSize,
    contentFontSizeSM,
    contentFontSizeLG,
    contentLineHeight,
    contentLineHeightSM,
    contentLineHeightLG,
    paddingBlock: Math.max((token.controlHeight - contentFontSize * contentLineHeight) / 2 - token.lineWidth, 0),
    paddingBlockSM: Math.max((token.controlHeightSM - contentFontSizeSM * contentLineHeightSM) / 2 - token.lineWidth, 0),
    paddingBlockLG: Math.max((token.controlHeightLG - contentFontSizeLG * contentLineHeightLG) / 2 - token.lineWidth, 0)
  };
};

/***/ }),

/***/ "../node_modules/antd/es/calendar/locale/en_US.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/calendar/locale/en_US.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../date-picker/locale/en_US */ "../node_modules/antd/es/date-picker/locale/en_US.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/config-provider/DisabledContext.js":
/*!******************************************************************!*\
  !*** ../node_modules/antd/es/config-provider/DisabledContext.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisabledContextProvider: () => (/* binding */ DisabledContextProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
"use client";


const DisabledContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);
const DisabledContextProvider = _ref => {
  let {
    children,
    disabled
  } = _ref;
  const originDisabled = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DisabledContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DisabledContext.Provider, {
    value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisabledContext);

/***/ }),

/***/ "../node_modules/antd/es/config-provider/MotionWrapper.js":
/*!****************************************************************!*\
  !*** ../node_modules/antd/es/config-provider/MotionWrapper.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MotionWrapper)
/* harmony export */ });
/* harmony import */ var rc_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-motion */ "../node_modules/rc-motion/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/internal */ "../node_modules/antd/es/theme/useToken.js");
"use client";




function MotionWrapper(props) {
  const {
    children
  } = props;
  const [, token] = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    motion
  } = token;
  const needWrapMotionProviderRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);
  needWrapMotionProviderRef.current = needWrapMotionProviderRef.current || motion === false;
  if (needWrapMotionProviderRef.current) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(rc_motion__WEBPACK_IMPORTED_MODULE_0__.Provider, {
      motion: motion
    }, children);
  }
  return children;
}

/***/ }),

/***/ "../node_modules/antd/es/config-provider/PropWarning.js":
/*!**************************************************************!*\
  !*** ../node_modules/antd/es/config-provider/PropWarning.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
"use client";



/**
 * Warning for ConfigProviderProps.
 * This will be empty function in production.
 */
const PropWarning = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(_ref => {
  let {
    dropdownMatchSelectWidth
  } = _ref;
  const warning = (0,_util_warning__WEBPACK_IMPORTED_MODULE_1__.devUseWarning)('ConfigProvider');
  warning.deprecated(dropdownMatchSelectWidth === undefined, 'dropdownMatchSelectWidth', 'popupMatchSelectWidth');
  return null;
});
if (true) {
  PropWarning.displayName = 'PropWarning';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ( true ? PropWarning : 0);

/***/ }),

/***/ "../node_modules/antd/es/config-provider/SizeContext.js":
/*!**************************************************************!*\
  !*** ../node_modules/antd/es/config-provider/SizeContext.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SizeContextProvider: () => (/* binding */ SizeContextProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
"use client";


const SizeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const SizeContextProvider = _ref => {
  let {
    children,
    size
  } = _ref;
  const originSize = react__WEBPACK_IMPORTED_MODULE_0__.useContext(SizeContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SizeContext.Provider, {
    value: size || originSize
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SizeContext);

/***/ }),

/***/ "../node_modules/antd/es/config-provider/context.js":
/*!**********************************************************!*\
  !*** ../node_modules/antd/es/config-provider/context.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigConsumer: () => (/* binding */ ConfigConsumer),
/* harmony export */   ConfigContext: () => (/* binding */ ConfigContext),
/* harmony export */   defaultIconPrefixCls: () => (/* binding */ defaultIconPrefixCls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const defaultIconPrefixCls = 'anticon';
const defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  return suffixCls ? `ant-${suffixCls}` : 'ant';
};
// zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will cause circular dependency.
const ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  iconPrefixCls: defaultIconPrefixCls
});
const {
  Consumer: ConfigConsumer
} = ConfigContext;

/***/ }),

/***/ "../node_modules/antd/es/config-provider/cssVariables.js":
/*!***************************************************************!*\
  !*** ../node_modules/antd/es/config-provider/cssVariables.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyle: () => (/* binding */ getStyle),
/* harmony export */   registerTheme: () => (/* binding */ registerTheme)
/* harmony export */ });
/* harmony import */ var _ant_design_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/colors */ "../node_modules/@ant-design/colors/es/index.js");
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ctrl/tinycolor */ "../node_modules/@ctrl/tinycolor/dist/module/index.js");
/* harmony import */ var rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/Dom/canUseDom */ "../node_modules/rc-util/es/Dom/canUseDom.js");
/* harmony import */ var rc_util_es_Dom_dynamicCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Dom/dynamicCSS */ "../node_modules/rc-util/es/Dom/dynamicCSS.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* eslint-disable import/prefer-default-export, prefer-destructuring */





const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
function getStyle(globalPrefixCls, theme) {
  const variables = {};
  const formatColor = (color, updater) => {
    let clone = color.clone();
    clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
    return clone.toRgbString();
  };
  const fillColor = (colorVal, type) => {
    const baseColor = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor(colorVal);
    const colorPalettes = (0,_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.generate)(baseColor.toRgbString());
    variables[`${type}-color`] = formatColor(baseColor);
    variables[`${type}-color-disabled`] = colorPalettes[1];
    variables[`${type}-color-hover`] = colorPalettes[4];
    variables[`${type}-color-active`] = colorPalettes[6];
    variables[`${type}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
    variables[`${type}-color-deprecated-border`] = colorPalettes[2];
  };
  // ================ Primary Color ================
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, 'primary');
    const primaryColor = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor(theme.primaryColor);
    const primaryColors = (0,_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.generate)(primaryColor.toRgbString());
    // Legacy - We should use semantic naming standard
    primaryColors.forEach((color, index) => {
      variables[`primary-${index + 1}`] = color;
    });
    // Deprecated
    variables['primary-color-deprecated-l-35'] = formatColor(primaryColor, c => c.lighten(35));
    variables['primary-color-deprecated-l-20'] = formatColor(primaryColor, c => c.lighten(20));
    variables['primary-color-deprecated-t-20'] = formatColor(primaryColor, c => c.tint(20));
    variables['primary-color-deprecated-t-50'] = formatColor(primaryColor, c => c.tint(50));
    variables['primary-color-deprecated-f-12'] = formatColor(primaryColor, c => c.setAlpha(c.getAlpha() * 0.12));
    const primaryActiveColor = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor(primaryColors[0]);
    variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, c => c.setAlpha(c.getAlpha() * 0.3));
    variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, c => c.darken(2));
  }
  // ================ Success Color ================
  if (theme.successColor) {
    fillColor(theme.successColor, 'success');
  }
  // ================ Warning Color ================
  if (theme.warningColor) {
    fillColor(theme.warningColor, 'warning');
  }
  // ================= Error Color =================
  if (theme.errorColor) {
    fillColor(theme.errorColor, 'error');
  }
  // ================= Info Color ==================
  if (theme.infoColor) {
    fillColor(theme.infoColor, 'info');
  }
  // Convert to css variables
  const cssList = Object.keys(variables).map(key => `--${globalPrefixCls}-${key}: ${variables[key]};`);
  return `
  :root {
    ${cssList.join('\n')}
  }
  `.trim();
}
function registerTheme(globalPrefixCls, theme) {
  const style = getStyle(globalPrefixCls, theme);
  if ((0,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
    (0,rc_util_es_Dom_dynamicCSS__WEBPACK_IMPORTED_MODULE_2__.updateCSS)(style, `${dynamicStyleMark}-dynamic-theme`);
  } else {
     true ? (0,_util_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'ConfigProvider', 'SSR do not support dynamic theme with css variables.') : 0;
  }
}

/***/ }),

/***/ "../node_modules/antd/es/config-provider/hooks/useCSSVarCls.js":
/*!*********************************************************************!*\
  !*** ../node_modules/antd/es/config-provider/hooks/useCSSVarCls.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/useToken.js");

/**
 * This hook is only for cssVar to add root className for components.
 * If root ClassName is needed, this hook could be refactored with `-root`
 * @param prefixCls
 */
const useCSSVarCls = prefixCls => {
  const [,,,, cssVar] = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return cssVar ? `${prefixCls}-css-var` : '';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCSSVarCls);

/***/ }),

/***/ "../node_modules/antd/es/config-provider/hooks/useConfig.js":
/*!******************************************************************!*\
  !*** ../node_modules/antd/es/config-provider/hooks/useConfig.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DisabledContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DisabledContext */ "../node_modules/antd/es/config-provider/DisabledContext.js");
/* harmony import */ var _SizeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SizeContext */ "../node_modules/antd/es/config-provider/SizeContext.js");



function useConfig() {
  const componentDisabled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_DisabledContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const componentSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_SizeContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return {
    componentDisabled,
    componentSize
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useConfig);

/***/ }),

/***/ "../node_modules/antd/es/config-provider/hooks/useSize.js":
/*!****************************************************************!*\
  !*** ../node_modules/antd/es/config-provider/hooks/useSize.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SizeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SizeContext */ "../node_modules/antd/es/config-provider/SizeContext.js");


const useSize = customSize => {
  const size = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_SizeContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const mergedSize = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
    if (!customSize) {
      return size;
    }
    if (typeof customSize === 'string') {
      return customSize !== null && customSize !== void 0 ? customSize : size;
    }
    if (customSize instanceof Function) {
      return customSize(size);
    }
    return size;
  }, [customSize, size]);
  return mergedSize;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSize);

/***/ }),

/***/ "../node_modules/antd/es/config-provider/hooks/useTheme.js":
/*!*****************************************************************!*\
  !*** ../node_modules/antd/es/config-provider/hooks/useTheme.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var rc_util_es_hooks_useMemo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-util/es/hooks/useMemo */ "../node_modules/rc-util/es/hooks/useMemo.js");
/* harmony import */ var rc_util_es_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/isEqual */ "../node_modules/rc-util/es/isEqual.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/context.js");
/* harmony import */ var _useThemeKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useThemeKey */ "../node_modules/antd/es/config-provider/hooks/useThemeKey.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_util/warning */ "../node_modules/antd/es/_util/warning.js");





function useTheme(theme, parentTheme) {
  var _a;
  const warning = (0,_util_warning__WEBPACK_IMPORTED_MODULE_2__.devUseWarning)('ConfigProvider');
  const themeConfig = theme || {};
  const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? _theme_internal__WEBPACK_IMPORTED_MODULE_3__.defaultConfig : parentTheme;
  const themeKey = (0,_useThemeKey__WEBPACK_IMPORTED_MODULE_4__["default"])();
  if (true) {
    const cssVarEnabled = themeConfig.cssVar || parentThemeConfig.cssVar;
    const validKey = !!(typeof themeConfig.cssVar === 'object' && ((_a = themeConfig.cssVar) === null || _a === void 0 ? void 0 : _a.key) || themeKey);
     true ? warning(!cssVarEnabled || validKey, 'breaking', 'Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.') : 0;
  }
  return (0,rc_util_es_hooks_useMemo__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
    var _a, _b;
    if (!theme) {
      return parentTheme;
    }
    // Override
    const mergedComponents = Object.assign({}, parentThemeConfig.components);
    Object.keys(theme.components || {}).forEach(componentName => {
      mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
    });
    const cssVarKey = `css-var-${themeKey.replace(/:/g, '')}`;
    const mergedCssVar = ((_a = themeConfig.cssVar) !== null && _a !== void 0 ? _a : parentThemeConfig.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: 'ant'
    }, typeof parentThemeConfig.cssVar === 'object' ? parentThemeConfig.cssVar : {}), typeof themeConfig.cssVar === 'object' ? themeConfig.cssVar : {}), {
      key: typeof themeConfig.cssVar === 'object' && ((_b = themeConfig.cssVar) === null || _b === void 0 ? void 0 : _b.key) || cssVarKey
    });
    // Base token
    return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
      token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
      components: mergedComponents,
      cssVar: mergedCssVar
    });
  }, [themeConfig, parentThemeConfig], (prev, next) => prev.some((prevTheme, index) => {
    const nextTheme = next[index];
    return !(0,rc_util_es_isEqual__WEBPACK_IMPORTED_MODULE_1__["default"])(prevTheme, nextTheme, true);
  }));
}

/***/ }),

/***/ "../node_modules/antd/es/config-provider/hooks/useThemeKey.js":
/*!********************************************************************!*\
  !*** ../node_modules/antd/es/config-provider/hooks/useThemeKey.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const fullClone = Object.assign({}, react__WEBPACK_IMPORTED_MODULE_0__);
const {
  useId
} = fullClone;
const useEmptyId = () => '';
const useThemeKey = typeof useId === 'undefined' ? useEmptyId : useId;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useThemeKey);

/***/ }),

/***/ "../node_modules/antd/es/config-provider/index.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/config-provider/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigConsumer: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_5__.ConfigConsumer),
/* harmony export */   ConfigContext: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_5__.ConfigContext),
/* harmony export */   configConsumerProps: () => (/* binding */ configConsumerProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultIconPrefixCls: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_5__.defaultIconPrefixCls),
/* harmony export */   defaultPrefixCls: () => (/* binding */ defaultPrefixCls),
/* harmony export */   globalConfig: () => (/* binding */ globalConfig),
/* harmony export */   warnContext: () => (/* binding */ warnContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var _ant_design_icons_es_components_Context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ant-design/icons/es/components/Context */ "../node_modules/@ant-design/icons/es/components/Context.js");
/* harmony import */ var rc_util_es_hooks_useMemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/hooks/useMemo */ "../node_modules/rc-util/es/hooks/useMemo.js");
/* harmony import */ var rc_util_es_utils_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/utils/set */ "../node_modules/rc-util/es/utils/set.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _form_validateMessagesContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../form/validateMessagesContext */ "../node_modules/antd/es/form/validateMessagesContext.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../locale */ "../node_modules/antd/es/locale/index.js");
/* harmony import */ var _locale_context__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../locale/context */ "../node_modules/antd/es/locale/context.js");
/* harmony import */ var _locale_en_US__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../locale/en_US */ "../node_modules/antd/es/locale/en_US.js");
/* harmony import */ var _theme_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../theme/context */ "../node_modules/antd/es/theme/context.js");
/* harmony import */ var _theme_themes_seed__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../theme/themes/seed */ "../node_modules/antd/es/theme/themes/seed.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _cssVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cssVariables */ "../node_modules/antd/es/config-provider/cssVariables.js");
/* harmony import */ var _DisabledContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./DisabledContext */ "../node_modules/antd/es/config-provider/DisabledContext.js");
/* harmony import */ var _hooks_useConfig__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./hooks/useConfig */ "../node_modules/antd/es/config-provider/hooks/useConfig.js");
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useTheme */ "../node_modules/antd/es/config-provider/hooks/useTheme.js");
/* harmony import */ var _MotionWrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MotionWrapper */ "../node_modules/antd/es/config-provider/MotionWrapper.js");
/* harmony import */ var _PropWarning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PropWarning */ "../node_modules/antd/es/config-provider/PropWarning.js");
/* harmony import */ var _SizeContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SizeContext */ "../node_modules/antd/es/config-provider/SizeContext.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "../node_modules/antd/es/theme/util/useResetIconStyle.js");
"use client";
'use client';

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





















/**
 * Since too many feedback using static method like `Modal.confirm` not getting theme, we record the
 * theme register info here to help developer get warning info.
 */
let existThemeConfig = false;
const warnContext =  true ? componentName => {
   true ? (0,_util_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!existThemeConfig, componentName, `Static function can not consume context like dynamic theme. Please use 'App' component instead.`) : 0;
} : /* istanbul ignore next */
0;

const configConsumerProps = ['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader'];
// These props is used by `useContext` directly in sub component
const PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'pageHeader', 'input', 'pagination', 'form', 'select', 'button'];
const defaultPrefixCls = 'ant';
let globalPrefixCls;
let globalIconPrefixCls;
let globalTheme;
let globalHolderRender;
function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
  return globalIconPrefixCls || _context__WEBPACK_IMPORTED_MODULE_5__.defaultIconPrefixCls;
}
function isLegacyTheme(theme) {
  return Object.keys(theme).some(key => key.endsWith('Color'));
}
const setGlobalConfig = props => {
  const {
    prefixCls,
    iconPrefixCls,
    theme,
    holderRender
  } = props;
  if (prefixCls !== undefined) {
    globalPrefixCls = prefixCls;
  }
  if (iconPrefixCls !== undefined) {
    globalIconPrefixCls = iconPrefixCls;
  }
  if ('holderRender' in props) {
    globalHolderRender = holderRender;
  }
  if (theme) {
    if (isLegacyTheme(theme)) {
       true ? (0,_util_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'ConfigProvider', '`config` of css variable theme is not work in v5. Please use new `theme` config instead.') : 0;
      (0,_cssVariables__WEBPACK_IMPORTED_MODULE_6__.registerTheme)(getGlobalPrefixCls(), theme);
    } else {
      globalTheme = theme;
    }
  }
};
const globalConfig = () => ({
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => {
    // If Global prefixCls provided, use this
    if (globalPrefixCls) {
      return globalPrefixCls;
    }
    // Fallback to default prefixCls
    return getGlobalPrefixCls();
  },
  getTheme: () => globalTheme,
  holderRender: globalHolderRender
});
const ProviderChildren = props => {
  const {
    children,
    csp: customCsp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    form,
    locale,
    componentSize,
    direction,
    space,
    virtual,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    popupOverflow,
    legacyLocale,
    parentContext,
    iconPrefixCls: customIconPrefixCls,
    theme,
    componentDisabled,
    segmented,
    statistic,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    input,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig
  } = props;
  // =================================== Context ===================================
  const getPrefixCls = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((suffixCls, customizePrefixCls) => {
    const {
      prefixCls
    } = props;
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
    return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
  }, [parentContext.getPrefixCls, props.prefixCls]);
  const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || _context__WEBPACK_IMPORTED_MODULE_5__.defaultIconPrefixCls;
  const csp = customCsp || parentContext.csp;
  (0,_style__WEBPACK_IMPORTED_MODULE_7__["default"])(iconPrefixCls, csp);
  const mergedTheme = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__["default"])(theme, parentContext.theme);
  if (true) {
    existThemeConfig = existThemeConfig || !!mergedTheme;
  }
  const baseConfig = {
    csp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    locale: locale || legacyLocale,
    direction,
    space,
    virtual,
    popupMatchSelectWidth: popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth,
    popupOverflow,
    getPrefixCls,
    iconPrefixCls,
    theme: mergedTheme,
    segmented,
    statistic,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    input,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig
  };
  const config = Object.assign({}, parentContext);
  Object.keys(baseConfig).forEach(key => {
    if (baseConfig[key] !== undefined) {
      config[key] = baseConfig[key];
    }
  });
  // Pass the props used by `useContext` directly with child component.
  // These props should merged into `config`.
  PASSED_PROPS.forEach(propName => {
    const propValue = props[propName];
    if (propValue) {
      config[propName] = propValue;
    }
  });
  // https://github.com/ant-design/ant-design/issues/27617
  const memoedConfig = (0,rc_util_es_hooks_useMemo__WEBPACK_IMPORTED_MODULE_2__["default"])(() => config, config, (prevConfig, currentConfig) => {
    const prevKeys = Object.keys(prevConfig);
    const currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some(key => prevConfig[key] !== currentConfig[key]);
  });
  const memoIconContextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    prefixCls: iconPrefixCls,
    csp
  }), [iconPrefixCls, csp]);
  let childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PropWarning__WEBPACK_IMPORTED_MODULE_9__["default"], {
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
  }), children);
  const validateMessages = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    var _a, _b, _c, _d;
    return (0,rc_util_es_utils_set__WEBPACK_IMPORTED_MODULE_3__.merge)(((_a = _locale_en_US__WEBPACK_IMPORTED_MODULE_10__["default"].Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || {}, ((_c = (_b = memoedConfig.locale) === null || _b === void 0 ? void 0 : _b.Form) === null || _c === void 0 ? void 0 : _c.defaultValidateMessages) || {}, ((_d = memoedConfig.form) === null || _d === void 0 ? void 0 : _d.validateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
  }, [memoedConfig, form === null || form === void 0 ? void 0 : form.validateMessages]);
  if (Object.keys(validateMessages).length > 0) {
    childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_form_validateMessagesContext__WEBPACK_IMPORTED_MODULE_11__["default"].Provider, {
      value: validateMessages
    }, childNode);
  }
  if (locale) {
    childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_locale__WEBPACK_IMPORTED_MODULE_12__["default"], {
      locale: locale,
      _ANT_MARK__: _locale__WEBPACK_IMPORTED_MODULE_12__.ANT_MARK
    }, childNode);
  }
  if (iconPrefixCls || csp) {
    childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_components_Context__WEBPACK_IMPORTED_MODULE_13__["default"].Provider, {
      value: memoIconContextValue
    }, childNode);
  }
  if (componentSize) {
    childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SizeContext__WEBPACK_IMPORTED_MODULE_14__.SizeContextProvider, {
      size: componentSize
    }, childNode);
  }
  // =================================== Motion ===================================
  childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MotionWrapper__WEBPACK_IMPORTED_MODULE_15__["default"], null, childNode);
  // ================================ Dynamic theme ================================
  const memoTheme = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const _a = mergedTheme || {},
      {
        algorithm,
        token,
        components,
        cssVar
      } = _a,
      rest = __rest(_a, ["algorithm", "token", "components", "cssVar"]);
    const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_1__.createTheme)(algorithm) : _theme_context__WEBPACK_IMPORTED_MODULE_16__.defaultTheme;
    const parsedComponents = {};
    Object.entries(components || {}).forEach(_ref => {
      let [componentName, componentToken] = _ref;
      const parsedToken = Object.assign({}, componentToken);
      if ('algorithm' in parsedToken) {
        if (parsedToken.algorithm === true) {
          parsedToken.theme = themeObj;
        } else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === 'function') {
          parsedToken.theme = (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_1__.createTheme)(parsedToken.algorithm);
        }
        delete parsedToken.algorithm;
      }
      parsedComponents[componentName] = parsedToken;
    });
    const mergedToken = Object.assign(Object.assign({}, _theme_themes_seed__WEBPACK_IMPORTED_MODULE_17__["default"]), token);
    return Object.assign(Object.assign({}, rest), {
      theme: themeObj,
      token: mergedToken,
      components: parsedComponents,
      override: Object.assign({
        override: mergedToken
      }, parsedComponents),
      cssVar: cssVar
    });
  }, [mergedTheme]);
  if (theme) {
    childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_context__WEBPACK_IMPORTED_MODULE_16__.DesignTokenContext.Provider, {
      value: memoTheme
    }, childNode);
  }
  // ================================== Warning ===================================
  if (memoedConfig.warning) {
    childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_warning__WEBPACK_IMPORTED_MODULE_4__.WarningContext.Provider, {
      value: memoedConfig.warning
    }, childNode);
  }
  // =================================== Render ===================================
  if (componentDisabled !== undefined) {
    childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DisabledContext__WEBPACK_IMPORTED_MODULE_18__.DisabledContextProvider, {
      disabled: componentDisabled
    }, childNode);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context__WEBPACK_IMPORTED_MODULE_5__.ConfigContext.Provider, {
    value: memoedConfig
  }, childNode);
};
const ConfigProvider = props => {
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_context__WEBPACK_IMPORTED_MODULE_5__.ConfigContext);
  const antLocale = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_locale_context__WEBPACK_IMPORTED_MODULE_19__["default"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProviderChildren, Object.assign({
    parentContext: context,
    legacyLocale: antLocale
  }, props));
};
ConfigProvider.ConfigContext = _context__WEBPACK_IMPORTED_MODULE_5__.ConfigContext;
ConfigProvider.SizeContext = _SizeContext__WEBPACK_IMPORTED_MODULE_14__["default"];
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = _hooks_useConfig__WEBPACK_IMPORTED_MODULE_20__["default"];
Object.defineProperty(ConfigProvider, 'SizeContext', {
  get: () => {
     true ? (0,_util_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'ConfigProvider', 'ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead.') : 0;
    return _SizeContext__WEBPACK_IMPORTED_MODULE_14__["default"];
  }
});
if (true) {
  ConfigProvider.displayName = 'ConfigProvider';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigProvider);

/***/ }),

/***/ "../node_modules/antd/es/date-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ../node_modules/antd/es/date-picker/locale/en_US.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var rc_picker_es_locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-picker/es/locale/en_US */ "../node_modules/rc-picker/es/locale/en_US.js");
/* harmony import */ var _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../time-picker/locale/en_US */ "../node_modules/antd/es/time-picker/locale/en_US.js");


// Merge into a locale object
const locale = {
  lang: Object.assign({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, rc_picker_es_locale_en_US__WEBPACK_IMPORTED_MODULE_0__["default"]),
  timePickerLocale: Object.assign({}, _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_1__["default"])
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "../node_modules/antd/es/form/context.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/form/context.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormContext: () => (/* binding */ FormContext),
/* harmony export */   FormItemInputContext: () => (/* binding */ FormItemInputContext),
/* harmony export */   FormItemPrefixContext: () => (/* binding */ FormItemPrefixContext),
/* harmony export */   FormProvider: () => (/* binding */ FormProvider),
/* harmony export */   NoFormStyle: () => (/* binding */ NoFormStyle),
/* harmony export */   NoStyleItemContext: () => (/* binding */ NoStyleItemContext),
/* harmony export */   VariantContext: () => (/* binding */ VariantContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_field_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-field-form */ "../node_modules/rc-field-form/es/index.js");
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/omit */ "../node_modules/rc-util/es/omit.js");
"use client";





const FormContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  labelAlign: 'right',
  vertical: false,
  itemRef: () => {}
});
const NoStyleItemContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const FormProvider = props => {
  const providerProps = (0,rc_util_es_omit__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ['prefixCls']);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(rc_field_form__WEBPACK_IMPORTED_MODULE_1__.FormProvider, Object.assign({}, providerProps));
};
const FormItemPrefixContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  prefixCls: ''
});
const FormItemInputContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
if (true) {
  FormItemInputContext.displayName = 'FormItemInputContext';
}
const NoFormStyle = _ref => {
  let {
    children,
    status,
    override
  } = _ref;
  const formItemInputContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FormItemInputContext);
  const newFormItemInputContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const newContext = Object.assign({}, formItemInputContext);
    if (override) {
      delete newContext.isFormItemInput;
    }
    if (status) {
      delete newContext.status;
      delete newContext.hasFeedback;
      delete newContext.feedbackIcon;
    }
    return newContext;
  }, [status, override, formItemInputContext]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormItemInputContext.Provider, {
    value: newFormItemInputContext
  }, children);
};
const VariantContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);

/***/ }),

/***/ "../node_modules/antd/es/form/validateMessagesContext.js":
/*!***************************************************************!*\
  !*** ../node_modules/antd/es/form/validateMessagesContext.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
"use client";


// ZombieJ: We export single file here since
// ConfigProvider use this which will make loop deps
// to import whole `rc-field-form`
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined));

/***/ }),

/***/ "../node_modules/antd/es/layout/Sider.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/layout/Sider.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SiderContext: () => (/* binding */ SiderContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons_es_icons_BarsOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/es/icons/BarsOutlined */ "../node_modules/@ant-design/icons/es/icons/BarsOutlined.js");
/* harmony import */ var _ant_design_icons_es_icons_LeftOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/es/icons/LeftOutlined */ "../node_modules/@ant-design/icons/es/icons/LeftOutlined.js");
/* harmony import */ var _ant_design_icons_es_icons_RightOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/es/icons/RightOutlined */ "../node_modules/@ant-design/icons/es/icons/RightOutlined.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/omit */ "../node_modules/rc-util/es/omit.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_util/isNumeric */ "../node_modules/antd/es/_util/isNumeric.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "../node_modules/antd/es/layout/context.js");
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const dimensionMaxMap = {
  xs: '479.98px',
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1599.98px'
};
const SiderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
const generateId = (() => {
  let i = 0;
  return function () {
    let prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return `${prefix}${i}`;
  };
})();
const Sider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      className,
      trigger,
      children,
      defaultCollapsed = false,
      theme = 'dark',
      style = {},
      collapsible = false,
      reverseArrow = false,
      width = 200,
      collapsedWidth = 80,
      zeroWidthTriggerStyle,
      breakpoint,
      onCollapse,
      onBreakpoint
    } = props,
    otherProps = __rest(props, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]);
  const {
    siderHook
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.LayoutContext);
  const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('collapsed' in props ? props.collapsed : defaultCollapsed);
  const [below, setBelow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ('collapsed' in props) {
      setCollapsed(props.collapsed);
    }
  }, [props.collapsed]);
  const handleSetCollapsed = (value, type) => {
    if (!('collapsed' in props)) {
      setCollapsed(value);
    }
    onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(value, type);
  };
  // ========================= Responsive =========================
  const responsiveHandlerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  responsiveHandlerRef.current = mql => {
    setBelow(mql.matches);
    onBreakpoint === null || onBreakpoint === void 0 ? void 0 : onBreakpoint(mql.matches);
    if (collapsed !== mql.matches) {
      handleSetCollapsed(mql.matches, 'responsive');
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function responsiveHandler(mql) {
      return responsiveHandlerRef.current(mql);
    }
    let mql;
    if (typeof window !== 'undefined') {
      const {
        matchMedia
      } = window;
      if (matchMedia && breakpoint && breakpoint in dimensionMaxMap) {
        mql = matchMedia(`screen and (max-width: ${dimensionMaxMap[breakpoint]})`);
        try {
          mql.addEventListener('change', responsiveHandler);
        } catch (error) {
          mql.addListener(responsiveHandler);
        }
        responsiveHandler(mql);
      }
    }
    return () => {
      try {
        mql === null || mql === void 0 ? void 0 : mql.removeEventListener('change', responsiveHandler);
      } catch (error) {
        mql === null || mql === void 0 ? void 0 : mql.removeListener(responsiveHandler);
      }
    };
  }, [breakpoint]); // in order to accept dynamic 'breakpoint' property, we need to add 'breakpoint' into dependency array.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const uniqueId = generateId('ant-sider-');
    siderHook.addSider(uniqueId);
    return () => siderHook.removeSider(uniqueId);
  }, []);
  const toggle = () => {
    handleSetCollapsed(!collapsed, 'clickTrigger');
  };
  const {
    getPrefixCls
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_config_provider__WEBPACK_IMPORTED_MODULE_4__.ConfigContext);
  const renderSider = () => {
    const prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
    const divProps = (0,rc_util_es_omit__WEBPACK_IMPORTED_MODULE_2__["default"])(otherProps, ['collapsed']);
    const rawWidth = collapsed ? collapsedWidth : width;
    // use "px" as fallback unit for width
    const siderWidth = (0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_5__["default"])(rawWidth) ? `${rawWidth}px` : String(rawWidth);
    // special trigger when collapsedWidth == 0
    const zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      onClick: toggle,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(`${prefixCls}-zero-width-trigger`, `${prefixCls}-zero-width-trigger-${reverseArrow ? 'right' : 'left'}`),
      style: zeroWidthTriggerStyle
    }, trigger || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_BarsOutlined__WEBPACK_IMPORTED_MODULE_6__["default"], null))) : null;
    const iconObj = {
      expanded: reverseArrow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_RightOutlined__WEBPACK_IMPORTED_MODULE_7__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_LeftOutlined__WEBPACK_IMPORTED_MODULE_8__["default"], null),
      collapsed: reverseArrow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_LeftOutlined__WEBPACK_IMPORTED_MODULE_8__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_RightOutlined__WEBPACK_IMPORTED_MODULE_7__["default"], null)
    };
    const status = collapsed ? 'collapsed' : 'expanded';
    const defaultTrigger = iconObj[status];
    const triggerDom = trigger !== null ? zeroWidthTrigger || ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: `${prefixCls}-trigger`,
      onClick: toggle,
      style: {
        width: siderWidth
      }
    }, trigger || defaultTrigger)) : null;
    const divStyle = Object.assign(Object.assign({}, style), {
      flex: `0 0 ${siderWidth}`,
      maxWidth: siderWidth,
      minWidth: siderWidth,
      width: siderWidth
    });
    const siderCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, `${prefixCls}-${theme}`, {
      [`${prefixCls}-collapsed`]: !!collapsed,
      [`${prefixCls}-has-trigger`]: collapsible && trigger !== null && !zeroWidthTrigger,
      [`${prefixCls}-below`]: !!below,
      [`${prefixCls}-zero-width`]: parseFloat(siderWidth) === 0
    }, className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("aside", Object.assign({
      className: siderCls
    }, divProps, {
      style: divStyle,
      ref: ref
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: `${prefixCls}-children`
    }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null);
  };
  const contextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    siderCollapsed: collapsed
  }), [collapsed]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SiderContext.Provider, {
    value: contextValue
  }, renderSider());
});
if (true) {
  Sider.displayName = 'Sider';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sider);

/***/ }),

/***/ "../node_modules/antd/es/layout/context.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/layout/context.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutContext: () => (/* binding */ LayoutContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LayoutContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});

/***/ }),

/***/ "../node_modules/antd/es/layout/hooks/useHasSider.js":
/*!***********************************************************!*\
  !*** ../node_modules/antd/es/layout/hooks/useHasSider.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useHasSider)
/* harmony export */ });
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "../node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var _Sider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Sider */ "../node_modules/antd/es/layout/Sider.js");


function useHasSider(siders, children, hasSider) {
  if (typeof hasSider === 'boolean') {
    return hasSider;
  }
  if (siders.length) {
    return true;
  }
  const childNodes = (0,rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_0__["default"])(children);
  return childNodes.some(node => node.type === _Sider__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/***/ }),

/***/ "../node_modules/antd/es/layout/index.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/layout/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "../node_modules/antd/es/layout/layout.js");
/* harmony import */ var _Sider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sider */ "../node_modules/antd/es/layout/Sider.js");
"use client";



const Layout = _layout__WEBPACK_IMPORTED_MODULE_0__["default"];
Layout.Header = _layout__WEBPACK_IMPORTED_MODULE_0__.Header;
Layout.Footer = _layout__WEBPACK_IMPORTED_MODULE_0__.Footer;
Layout.Content = _layout__WEBPACK_IMPORTED_MODULE_0__.Content;
Layout.Sider = _Sider__WEBPACK_IMPORTED_MODULE_1__["default"];
Layout._InternalSiderContext = _Sider__WEBPACK_IMPORTED_MODULE_1__.SiderContext;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "../node_modules/antd/es/layout/layout.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/layout/layout.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Content: () => (/* binding */ Content),
/* harmony export */   Footer: () => (/* binding */ Footer),
/* harmony export */   Header: () => (/* binding */ Header),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/omit */ "../node_modules/rc-util/es/omit.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context */ "../node_modules/antd/es/layout/context.js");
/* harmony import */ var _hooks_useHasSider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useHasSider */ "../node_modules/antd/es/layout/hooks/useHasSider.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "../node_modules/antd/es/layout/style/index.js");
"use client";


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







function generator(_ref) {
  let {
    suffixCls,
    tagName,
    displayName
  } = _ref;
  return BasicComponent => {
    const Adapter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((props, ref) => ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(BasicComponent, Object.assign({
      ref: ref,
      suffixCls: suffixCls,
      tagName: tagName
    }, props))));
    if (true) {
      Adapter.displayName = displayName;
    }
    return Adapter;
  };
}
const Basic = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      suffixCls,
      className,
      tagName: TagName
    } = props,
    others = __rest(props, ["prefixCls", "suffixCls", "className", "tagName"]);
  const {
    getPrefixCls
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_4__.ConfigContext);
  const prefixCls = getPrefixCls('layout', customizePrefixCls);
  const [wrapSSR, hashId, cssVarCls] = (0,_style__WEBPACK_IMPORTED_MODULE_5__["default"])(prefixCls);
  const prefixWithSuffixCls = suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
  return wrapSSR( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(TagName, Object.assign({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(customizePrefixCls || prefixWithSuffixCls, className, hashId, cssVarCls),
    ref: ref
  }, others)));
});
const BasicLayout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((props, ref) => {
  const {
    direction
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_4__.ConfigContext);
  const [siders, setSiders] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
  const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      children,
      hasSider,
      tagName: Tag,
      style
    } = props,
    others = __rest(props, ["prefixCls", "className", "rootClassName", "children", "hasSider", "tagName", "style"]);
  const passedProps = (0,rc_util_es_omit__WEBPACK_IMPORTED_MODULE_3__["default"])(others, ['suffixCls']);
  const {
    getPrefixCls,
    layout
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_4__.ConfigContext);
  const prefixCls = getPrefixCls('layout', customizePrefixCls);
  const mergedHasSider = (0,_hooks_useHasSider__WEBPACK_IMPORTED_MODULE_6__["default"])(siders, children, hasSider);
  const [wrapCSSVar, hashId, cssVarCls] = (0,_style__WEBPACK_IMPORTED_MODULE_5__["default"])(prefixCls);
  const classString = classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls, {
    [`${prefixCls}-has-sider`]: mergedHasSider,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, layout === null || layout === void 0 ? void 0 : layout.className, className, rootClassName, hashId, cssVarCls);
  const contextValue = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
    siderHook: {
      addSider: id => {
        setSiders(prev => [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev), [id]));
      },
      removeSider: id => {
        setSiders(prev => prev.filter(currentId => currentId !== id));
      }
    }
  }), []);
  return wrapCSSVar( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_context__WEBPACK_IMPORTED_MODULE_7__.LayoutContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Tag, Object.assign({
    ref: ref,
    className: classString,
    style: Object.assign(Object.assign({}, layout === null || layout === void 0 ? void 0 : layout.style), style)
  }, passedProps), children)));
});
const Layout = generator({
  tagName: 'div',
  displayName: 'Layout'
})(BasicLayout);
const Header = generator({
  suffixCls: 'header',
  tagName: 'header',
  displayName: 'Header'
})(Basic);
const Footer = generator({
  suffixCls: 'footer',
  tagName: 'footer',
  displayName: 'Footer'
})(Basic);
const Content = generator({
  suffixCls: 'content',
  tagName: 'main',
  displayName: 'Content'
})(Basic);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "../node_modules/antd/es/layout/style/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/layout/style/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   prepareComponentToken: () => (/* binding */ prepareComponentToken)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/genComponentStyleHook.js");
/* harmony import */ var _light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./light */ "../node_modules/antd/es/layout/style/light.js");



const genLayoutStyle = token => {
  const {
    antCls,
    // .ant
    componentCls,
    // .ant-layout
    colorText,
    triggerColor,
    footerBg,
    triggerBg,
    headerHeight,
    headerPadding,
    headerColor,
    footerPadding,
    triggerHeight,
    zeroTriggerHeight,
    zeroTriggerWidth,
    motionDurationMid,
    motionDurationSlow,
    fontSize,
    borderRadius,
    bodyBg,
    headerBg,
    siderBg
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({
      display: 'flex',
      flex: 'auto',
      flexDirection: 'column',
      /* fix firefox can't set height smaller than content on flex item */
      minHeight: 0,
      background: bodyBg,
      '&, *': {
        boxSizing: 'border-box'
      },
      [`&${componentCls}-has-sider`]: {
        flexDirection: 'row',
        [`> ${componentCls}, > ${componentCls}-content`]: {
          // https://segmentfault.com/a/1190000019498300
          width: 0
        }
      },
      [`${componentCls}-header, &${componentCls}-footer`]: {
        flex: '0 0 auto'
      },
      [`${componentCls}-sider`]: {
        position: 'relative',
        // fix firefox can't set width smaller than content on flex item
        minWidth: 0,
        background: siderBg,
        transition: `all ${motionDurationMid}, background 0s`,
        '&-children': {
          height: '100%',
          // Hack for fixing margin collapse bug
          // https://github.com/ant-design/ant-design/issues/7967
          // solution from https://stackoverflow.com/a/33132624/3040605
          marginTop: -0.1,
          paddingTop: 0.1,
          [`${antCls}-menu${antCls}-menu-inline-collapsed`]: {
            width: 'auto'
          }
        },
        '&-has-trigger': {
          paddingBottom: triggerHeight
        },
        '&-right': {
          order: 1
        },
        '&-trigger': {
          position: 'fixed',
          bottom: 0,
          zIndex: 1,
          height: triggerHeight,
          color: triggerColor,
          lineHeight: (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(triggerHeight),
          textAlign: 'center',
          background: triggerBg,
          cursor: 'pointer',
          transition: `all ${motionDurationMid}`
        },
        '&-zero-width': {
          '> *': {
            overflow: 'hidden'
          },
          '&-trigger': {
            position: 'absolute',
            top: headerHeight,
            insetInlineEnd: token.calc(zeroTriggerWidth).mul(-1).equal(),
            zIndex: 1,
            width: zeroTriggerWidth,
            height: zeroTriggerHeight,
            color: triggerColor,
            fontSize: token.fontSizeXL,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: siderBg,
            borderStartStartRadius: 0,
            borderStartEndRadius: borderRadius,
            borderEndEndRadius: borderRadius,
            borderEndStartRadius: 0,
            cursor: 'pointer',
            transition: `background ${motionDurationSlow} ease`,
            '&::after': {
              position: 'absolute',
              inset: 0,
              background: 'transparent',
              transition: `all ${motionDurationSlow}`,
              content: '""'
            },
            '&:hover::after': {
              background: `rgba(255, 255, 255, 0.2)`
            },
            '&-right': {
              insetInlineStart: token.calc(zeroTriggerWidth).mul(-1).equal(),
              borderStartStartRadius: borderRadius,
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
              borderEndStartRadius: borderRadius
            }
          }
        }
      }
    }, (0,_light__WEBPACK_IMPORTED_MODULE_1__["default"])(token)), {
      // RTL
      '&-rtl': {
        direction: 'rtl'
      }
    }),
    // ==================== Header ====================
    [`${componentCls}-header`]: {
      height: headerHeight,
      padding: headerPadding,
      color: headerColor,
      lineHeight: (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(headerHeight),
      background: headerBg,
      // Other components/menu/style/index.less line:686
      // Integration with header element so menu items have the same height
      [`${antCls}-menu`]: {
        lineHeight: 'inherit'
      }
    },
    // ==================== Footer ====================
    [`${componentCls}-footer`]: {
      padding: footerPadding,
      color: colorText,
      fontSize,
      background: footerBg
    },
    // =================== Content ====================
    [`${componentCls}-content`]: {
      flex: 'auto',
      // fix firefox can't set height smaller than content on flex item
      minHeight: 0
    }
  };
};
const prepareComponentToken = token => {
  const {
    colorBgLayout,
    controlHeight,
    controlHeightLG,
    colorText,
    controlHeightSM,
    marginXXS,
    colorTextLightSolid,
    colorBgContainer
  } = token;
  const paddingInline = controlHeightLG * 1.25;
  return {
    // Deprecated
    colorBgHeader: '#001529',
    colorBgBody: colorBgLayout,
    colorBgTrigger: '#002140',
    bodyBg: colorBgLayout,
    headerBg: '#001529',
    headerHeight: controlHeight * 2,
    headerPadding: `0 ${paddingInline}px`,
    headerColor: colorText,
    footerPadding: `${controlHeightSM}px ${paddingInline}px`,
    footerBg: colorBgLayout,
    siderBg: '#001529',
    triggerHeight: controlHeightLG + marginXXS * 2,
    triggerBg: '#002140',
    triggerColor: colorTextLightSolid,
    zeroTriggerWidth: controlHeightLG,
    zeroTriggerHeight: controlHeightLG,
    lightSiderBg: colorBgContainer,
    lightTriggerBg: colorBgContainer,
    lightTriggerColor: colorText
  };
};
// ============================== Export ==============================
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_2__.genStyleHooks)('Layout', token => [genLayoutStyle(token)], prepareComponentToken, {
  deprecatedTokens: [['colorBgBody', 'bodyBg'], ['colorBgHeader', 'headerBg'], ['colorBgTrigger', 'triggerBg']]
}));

/***/ }),

/***/ "../node_modules/antd/es/layout/style/light.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/layout/style/light.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const genLayoutLightStyle = token => {
  const {
    componentCls,
    bodyBg,
    lightSiderBg,
    lightTriggerBg,
    lightTriggerColor
  } = token;
  return {
    [`${componentCls}-sider-light`]: {
      background: lightSiderBg,
      [`${componentCls}-sider-trigger`]: {
        color: lightTriggerColor,
        background: lightTriggerBg
      },
      [`${componentCls}-sider-zero-width-trigger`]: {
        color: lightTriggerColor,
        background: lightTriggerBg,
        border: `1px solid ${bodyBg}`,
        // Safe to modify to any other color
        borderInlineStart: 0
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genLayoutLightStyle);

/***/ }),

/***/ "../node_modules/antd/es/locale/context.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/locale/context.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LocaleContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocaleContext);

/***/ }),

/***/ "../node_modules/antd/es/locale/en_US.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/locale/en_US.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var rc_pagination_es_locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-pagination/es/locale/en_US */ "../node_modules/rc-pagination/es/locale/en_US.js");
/* harmony import */ var _calendar_locale_en_US__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar/locale/en_US */ "../node_modules/antd/es/calendar/locale/en_US.js");
/* harmony import */ var _date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date-picker/locale/en_US */ "../node_modules/antd/es/date-picker/locale/en_US.js");
/* harmony import */ var _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-picker/locale/en_US */ "../node_modules/antd/es/time-picker/locale/en_US.js");
/* eslint-disable no-template-curly-in-string */




const typeTemplate = '${label} is not a valid ${type}';
const localeValues = {
  locale: 'en',
  Pagination: rc_pagination_es_locale_en_US__WEBPACK_IMPORTED_MODULE_0__["default"],
  DatePicker: _date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_1__["default"],
  TimePicker: _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_2__["default"],
  Calendar: _calendar_locale_en_US__WEBPACK_IMPORTED_MODULE_3__["default"],
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    filterCheckall: 'Select all items',
    filterSearchPlaceholder: 'Search in filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectNone: 'Clear all data',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting'
  },
  Tour: {
    Next: 'Next',
    Previous: 'Previous',
    Finish: 'Finish'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      default: 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      enum: '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  },
  Image: {
    preview: 'Preview'
  },
  QRCode: {
    expired: 'QR code expired',
    refresh: 'Refresh',
    scanned: 'Scanned'
  },
  ColorPicker: {
    presetEmpty: 'Empty'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localeValues);

/***/ }),

/***/ "../node_modules/antd/es/locale/index.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/locale/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANT_MARK: () => (/* binding */ ANT_MARK),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useLocale: () => (/* reexport safe */ _useLocale__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _modal_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/locale */ "../node_modules/antd/es/modal/locale.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "../node_modules/antd/es/locale/context.js");
/* harmony import */ var _useLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useLocale */ "../node_modules/antd/es/locale/useLocale.js");
"use client";






const ANT_MARK = 'internalMark';
const LocaleProvider = props => {
  const {
    locale = {},
    children,
    _ANT_MARK__
  } = props;
  if (true) {
    const warning = (0,_util_warning__WEBPACK_IMPORTED_MODULE_2__.devUseWarning)('LocaleProvider');
     true ? warning(_ANT_MARK__ === ANT_MARK, 'deprecated', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale') : 0;
  }
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const clearLocale = (0,_modal_locale__WEBPACK_IMPORTED_MODULE_3__.changeConfirmLocale)(locale && locale.Modal);
    return clearLocale;
  }, [locale]);
  const getMemoizedContextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => Object.assign(Object.assign({}, locale), {
    exist: true
  }), [locale]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: getMemoizedContextValue
  }, children);
};
if (true) {
  LocaleProvider.displayName = 'LocaleProvider';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocaleProvider);

/***/ }),

/***/ "../node_modules/antd/es/locale/useLocale.js":
/*!***************************************************!*\
  !*** ../node_modules/antd/es/locale/useLocale.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "../node_modules/antd/es/locale/context.js");
/* harmony import */ var _en_US__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en_US */ "../node_modules/antd/es/locale/en_US.js");



const useLocale = (componentName, defaultLocale) => {
  const fullLocale = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const getLocale = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    var _a;
    const locale = defaultLocale || _en_US__WEBPACK_IMPORTED_MODULE_2__["default"][componentName];
    const localeFromContext = (_a = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale[componentName]) !== null && _a !== void 0 ? _a : {};
    return Object.assign(Object.assign({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, fullLocale]);
  const getLocaleCode = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const localeCode = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if ((fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.exist) && !localeCode) {
      return _en_US__WEBPACK_IMPORTED_MODULE_2__["default"].locale;
    }
    return localeCode;
  }, [fullLocale]);
  return [getLocale, getLocaleCode];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocale);

/***/ }),

/***/ "../node_modules/antd/es/menu/MenuContext.js":
/*!***************************************************!*\
  !*** ../node_modules/antd/es/menu/MenuContext.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
"use client";


const MenuContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  prefixCls: '',
  firstLevel: true,
  inlineCollapsed: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuContext);

/***/ }),

/***/ "../node_modules/antd/es/menu/MenuDivider.js":
/*!***************************************************!*\
  !*** ../node_modules/antd/es/menu/MenuDivider.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-menu */ "../node_modules/rc-menu/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/context.js");
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




const MenuDivider = props => {
  const {
      prefixCls: customizePrefixCls,
      className,
      dashed
    } = props,
    restProps = __rest(props, ["prefixCls", "className", "dashed"]);
  const {
    getPrefixCls
  } = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_3__.ConfigContext);
  const prefixCls = getPrefixCls('menu', customizePrefixCls);
  const classString = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
    [`${prefixCls}-item-divider-dashed`]: !!dashed
  }, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(rc_menu__WEBPACK_IMPORTED_MODULE_1__.Divider, Object.assign({
    className: classString
  }, restProps));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuDivider);

/***/ }),

/***/ "../node_modules/antd/es/menu/MenuItem.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/menu/MenuItem.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-menu */ "../node_modules/rc-menu/es/index.js");
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "../node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/omit */ "../node_modules/rc-util/es/omit.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout_Sider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/Sider */ "../node_modules/antd/es/layout/Sider.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tooltip */ "../node_modules/antd/es/tooltip/index.js");
/* harmony import */ var _util_reactNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util/reactNode */ "../node_modules/antd/es/_util/reactNode.js");
/* harmony import */ var _MenuContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MenuContext */ "../node_modules/antd/es/menu/MenuContext.js");
"use client";










const MenuItem = props => {
  var _a;
  const {
    className,
    children,
    icon,
    title,
    danger
  } = props;
  const {
    prefixCls,
    firstLevel,
    direction,
    disableMenuItemTitleTooltip,
    inlineCollapsed: isInlineCollapsed
  } = react__WEBPACK_IMPORTED_MODULE_4__.useContext(_MenuContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const renderItemChildren = inlineCollapsed => {
    const wrapNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      className: `${prefixCls}-title-content`
    }, children);
    // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
    // ref: https://github.com/ant-design/ant-design/pull/23456
    if (!icon || (0,_util_reactNode__WEBPACK_IMPORTED_MODULE_6__.isValidElement)(children) && children.type === 'span') {
      if (children && inlineCollapsed && firstLevel && typeof children === 'string') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
          className: `${prefixCls}-inline-collapsed-noicon`
        }, children.charAt(0));
      }
    }
    return wrapNode;
  };
  const {
    siderCollapsed
  } = react__WEBPACK_IMPORTED_MODULE_4__.useContext(_layout_Sider__WEBPACK_IMPORTED_MODULE_7__.SiderContext);
  let tooltipTitle = title;
  if (typeof title === 'undefined') {
    tooltipTitle = firstLevel ? children : '';
  } else if (title === false) {
    tooltipTitle = '';
  }
  const tooltipProps = {
    title: tooltipTitle
  };
  if (!siderCollapsed && !isInlineCollapsed) {
    tooltipProps.title = null;
    // Reset `open` to fix control mode tooltip display not correct
    // ref: https://github.com/ant-design/ant-design/issues/16742
    tooltipProps.open = false;
  }
  const childrenLength = (0,rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(children).length;
  let returnNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(rc_menu__WEBPACK_IMPORTED_MODULE_1__.Item, Object.assign({}, (0,rc_util_es_omit__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ['title', 'icon', 'danger']), {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      [`${prefixCls}-item-danger`]: danger,
      [`${prefixCls}-item-only-child`]: (icon ? childrenLength + 1 : childrenLength) === 1
    }, className),
    title: typeof title === 'string' ? title : undefined
  }), (0,_util_reactNode__WEBPACK_IMPORTED_MODULE_6__.cloneElement)(icon, {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()((0,_util_reactNode__WEBPACK_IMPORTED_MODULE_6__.isValidElement)(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', `${prefixCls}-item-icon`)
  }), renderItemChildren(isInlineCollapsed));
  if (!disableMenuItemTitleTooltip) {
    returnNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_tooltip__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, tooltipProps, {
      placement: direction === 'rtl' ? 'left' : 'right',
      overlayClassName: `${prefixCls}-inline-collapsed-tooltip`
    }), returnNode);
  }
  return returnNode;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);

/***/ }),

/***/ "../node_modules/antd/es/menu/OverrideContext.js":
/*!*******************************************************!*\
  !*** ../node_modules/antd/es/menu/OverrideContext.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverrideProvider: () => (/* binding */ OverrideProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util */ "../node_modules/rc-util/es/index.js");
/* harmony import */ var _space_Compact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../space/Compact */ "../node_modules/antd/es/space/Compact.js");
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



const OverrideContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/** @internal Only used for Dropdown component. Do not use this in your production. */
const OverrideProvider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
  const {
      children
    } = props,
    restProps = __rest(props, ["children"]);
  const override = react__WEBPACK_IMPORTED_MODULE_0__.useContext(OverrideContext);
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => Object.assign(Object.assign({}, override), restProps), [override, restProps.prefixCls,
  // restProps.expandIcon, Not mark as deps since this is a ReactNode
  restProps.mode, restProps.selectable, restProps.rootClassName
  // restProps.validator, Not mark as deps since this is a function
  ]);
  const canRef = (0,rc_util__WEBPACK_IMPORTED_MODULE_1__.supportNodeRef)(children);
  const mergedRef = (0,rc_util__WEBPACK_IMPORTED_MODULE_1__.useComposeRef)(ref, canRef ? children.ref : null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(OverrideContext.Provider, {
    value: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_space_Compact__WEBPACK_IMPORTED_MODULE_2__.NoCompactStyle, null, canRef ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
    ref: mergedRef
  }) : children));
});
/** @internal Only used for Dropdown component. Do not use this in your production. */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverrideContext);

/***/ }),

/***/ "../node_modules/antd/es/menu/SubMenu.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/menu/SubMenu.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-menu */ "../node_modules/rc-menu/es/index.js");
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/omit */ "../node_modules/rc-util/es/omit.js");
/* harmony import */ var _util_hooks_useZIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util/hooks/useZIndex */ "../node_modules/antd/es/_util/hooks/useZIndex.js");
/* harmony import */ var _util_reactNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_util/reactNode */ "../node_modules/antd/es/_util/reactNode.js");
/* harmony import */ var _MenuContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuContext */ "../node_modules/antd/es/menu/MenuContext.js");
"use client";








const SubMenu = props => {
  var _a;
  const {
    popupClassName,
    icon,
    title,
    theme: customTheme
  } = props;
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_MenuContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const {
    prefixCls,
    inlineCollapsed,
    theme: contextTheme
  } = context;
  const parentPath = (0,rc_menu__WEBPACK_IMPORTED_MODULE_2__.useFullPath)();
  let titleNode;
  if (!icon) {
    titleNode = inlineCollapsed && !parentPath.length && title && typeof title === 'string' ? ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: `${prefixCls}-inline-collapsed-noicon`
    }, title.charAt(0))) : ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: `${prefixCls}-title-content`
    }, title));
  } else {
    // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
    // ref: https://github.com/ant-design/ant-design/pull/23456
    const titleIsSpan = (0,_util_reactNode__WEBPACK_IMPORTED_MODULE_5__.isValidElement)(title) && title.type === 'span';
    titleNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_util_reactNode__WEBPACK_IMPORTED_MODULE_5__.cloneElement)(icon, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_util_reactNode__WEBPACK_IMPORTED_MODULE_5__.isValidElement)(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', `${prefixCls}-item-icon`)
    }), titleIsSpan ? title : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: `${prefixCls}-title-content`
    }, title));
  }
  const contextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => Object.assign(Object.assign({}, context), {
    firstLevel: false
  }), [context]);
  // ============================ zIndex ============================
  const [zIndex] = (0,_util_hooks_useZIndex__WEBPACK_IMPORTED_MODULE_6__.useZIndex)('Menu');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MenuContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: contextValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(rc_menu__WEBPACK_IMPORTED_MODULE_2__.SubMenu, Object.assign({}, (0,rc_util_es_omit__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ['icon']), {
    title: titleNode,
    popupClassName: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, popupClassName, `${prefixCls}-${customTheme || contextTheme}`),
    popupStyle: {
      zIndex
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubMenu);

/***/ }),

/***/ "../node_modules/antd/es/menu/hooks/useItems.js":
/*!******************************************************!*\
  !*** ../node_modules/antd/es/menu/hooks/useItems.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useItems)
/* harmony export */ });
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-menu */ "../node_modules/rc-menu/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MenuDivider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MenuDivider */ "../node_modules/antd/es/menu/MenuDivider.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MenuItem */ "../node_modules/antd/es/menu/MenuItem.js");
/* harmony import */ var _SubMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SubMenu */ "../node_modules/antd/es/menu/SubMenu.js");
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





function convertItemsToNodes(list) {
  return (list || []).map((opt, index) => {
    if (opt && typeof opt === 'object') {
      const _a = opt,
        {
          label,
          children,
          key,
          type
        } = _a,
        restProps = __rest(_a, ["label", "children", "key", "type"]);
      const mergedKey = key !== null && key !== void 0 ? key : `tmp-${index}`;
      // MenuItemGroup & SubMenuItem
      if (children || type === 'group') {
        if (type === 'group') {
          // Group
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(rc_menu__WEBPACK_IMPORTED_MODULE_0__.ItemGroup, Object.assign({
            key: mergedKey
          }, restProps, {
            title: label
          }), convertItemsToNodes(children));
        }
        // Sub Menu
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SubMenu__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
          key: mergedKey
        }, restProps, {
          title: label
        }), convertItemsToNodes(children));
      }
      // MenuItem & Divider
      if (type === 'divider') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_MenuDivider__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({
          key: mergedKey
        }, restProps));
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({
        key: mergedKey
      }, restProps), label);
    }
    return null;
  }).filter(opt => opt);
}
// FIXME: Move logic here in v5
/**
 * We simply convert `items` to ReactNode for reuse origin component logic. But we need move all the
 * logic from component into this hooks when in v5
 */
function useItems(items) {
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    if (!items) {
      return items;
    }
    return convertItemsToNodes(items);
  }, [items]);
}

/***/ }),

/***/ "../node_modules/antd/es/menu/index.js":
/*!*********************************************!*\
  !*** ../node_modules/antd/es/menu/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-menu */ "../node_modules/rc-menu/es/index.js");
/* harmony import */ var _layout_Sider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Sider */ "../node_modules/antd/es/layout/Sider.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "../node_modules/antd/es/menu/menu.js");
/* harmony import */ var _MenuDivider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuDivider */ "../node_modules/antd/es/menu/MenuDivider.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuItem */ "../node_modules/antd/es/menu/MenuItem.js");
/* harmony import */ var _SubMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubMenu */ "../node_modules/antd/es/menu/SubMenu.js");
"use client";









const Menu = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_layout_Sider__WEBPACK_IMPORTED_MODULE_2__.SiderContext);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    menu: menuRef.current,
    focus: options => {
      var _a;
      (_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.focus(options);
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_menu__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({
    ref: menuRef
  }, props, context));
});
Menu.Item = _MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"];
Menu.SubMenu = _SubMenu__WEBPACK_IMPORTED_MODULE_5__["default"];
Menu.Divider = _MenuDivider__WEBPACK_IMPORTED_MODULE_6__["default"];
Menu.ItemGroup = rc_menu__WEBPACK_IMPORTED_MODULE_1__.ItemGroup;
if (true) {
  Menu.displayName = 'Menu';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "../node_modules/antd/es/menu/menu.js":
/*!********************************************!*\
  !*** ../node_modules/antd/es/menu/menu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons_es_icons_EllipsisOutlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ant-design/icons/es/icons/EllipsisOutlined */ "../node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-menu */ "../node_modules/rc-menu/es/index.js");
/* harmony import */ var rc_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util */ "../node_modules/rc-util/es/index.js");
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/omit */ "../node_modules/rc-util/es/omit.js");
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_util/motion */ "../node_modules/antd/es/_util/motion.js");
/* harmony import */ var _util_reactNode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_util/reactNode */ "../node_modules/antd/es/_util/reactNode.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _hooks_useItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useItems */ "../node_modules/antd/es/menu/hooks/useItems.js");
/* harmony import */ var _MenuContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MenuContext */ "../node_modules/antd/es/menu/MenuContext.js");
/* harmony import */ var _OverrideContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OverrideContext */ "../node_modules/antd/es/menu/OverrideContext.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style */ "../node_modules/antd/es/menu/style/index.js");
/* harmony import */ var _config_provider_hooks_useCSSVarCls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config-provider/hooks/useCSSVarCls */ "../node_modules/antd/es/config-provider/hooks/useCSSVarCls.js");
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
















const InternalMenu = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  var _a, _b;
  const override = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_OverrideContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const overrideObj = override || {};
  const {
    getPrefixCls,
    getPopupContainer,
    direction,
    menu
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_6__.ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const {
      prefixCls: customizePrefixCls,
      className,
      style,
      theme = 'light',
      expandIcon,
      _internalDisableMenuItemTitleTooltip,
      inlineCollapsed,
      siderCollapsed,
      items,
      children,
      rootClassName,
      mode,
      selectable,
      onClick,
      overflowedIndicatorPopupClassName
    } = props,
    restProps = __rest(props, ["prefixCls", "className", "style", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "items", "children", "rootClassName", "mode", "selectable", "onClick", "overflowedIndicatorPopupClassName"]);
  const passedProps = (0,rc_util_es_omit__WEBPACK_IMPORTED_MODULE_4__["default"])(restProps, ['collapsedWidth']);
  // ========================= Items ===========================
  const mergedChildren = (0,_hooks_useItems__WEBPACK_IMPORTED_MODULE_7__["default"])(items) || children;
  // ======================== Warning ==========================
  if (true) {
    const warning = (0,_util_warning__WEBPACK_IMPORTED_MODULE_8__.devUseWarning)('Menu');
     true ? warning(!('inlineCollapsed' in props && mode !== 'inline'), 'usage', '`inlineCollapsed` should only be used when `mode` is inline.') : 0;
     true ? warning(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'usage', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.') : 0;
    warning.deprecated('items' in props && !children, 'children', 'items');
  }
  (_a = overrideObj.validator) === null || _a === void 0 ? void 0 : _a.call(overrideObj, {
    mode
  });
  // ========================== Click ==========================
  // Tell dropdown that item clicked
  const onItemClick = (0,rc_util__WEBPACK_IMPORTED_MODULE_3__.useEvent)(function () {
    var _a;
    onClick === null || onClick === void 0 ? void 0 : onClick.apply(void 0, arguments);
    (_a = overrideObj.onClick) === null || _a === void 0 ? void 0 : _a.call(overrideObj);
  });
  // ========================== Mode ===========================
  const mergedMode = overrideObj.mode || mode;
  // ======================= Selectable ========================
  const mergedSelectable = selectable !== null && selectable !== void 0 ? selectable : overrideObj.selectable;
  // ======================== Collapsed ========================
  // Inline Collapsed
  const mergedInlineCollapsed = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (siderCollapsed !== undefined) {
      return siderCollapsed;
    }
    return inlineCollapsed;
  }, [inlineCollapsed, siderCollapsed]);
  const defaultMotions = {
    horizontal: {
      motionName: `${rootPrefixCls}-slide-up`
    },
    inline: (0,_util_motion__WEBPACK_IMPORTED_MODULE_9__["default"])(rootPrefixCls),
    other: {
      motionName: `${rootPrefixCls}-zoom-big`
    }
  };
  const prefixCls = getPrefixCls('menu', customizePrefixCls || overrideObj.prefixCls);
  const rootCls = (0,_config_provider_hooks_useCSSVarCls__WEBPACK_IMPORTED_MODULE_10__["default"])(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,_style__WEBPACK_IMPORTED_MODULE_11__["default"])(prefixCls, rootCls, !override);
  const menuClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()(`${prefixCls}-${theme}`, menu === null || menu === void 0 ? void 0 : menu.className, className);
  // ====================== Expand Icon ========================
  let mergedExpandIcon;
  if (typeof expandIcon === 'function') {
    mergedExpandIcon = expandIcon;
  } else if (expandIcon === null || expandIcon === false) {
    mergedExpandIcon = null;
  } else if (overrideObj.expandIcon === null || overrideObj.expandIcon === false) {
    mergedExpandIcon = null;
  } else {
    const beClone = expandIcon !== null && expandIcon !== void 0 ? expandIcon : overrideObj.expandIcon;
    mergedExpandIcon = (0,_util_reactNode__WEBPACK_IMPORTED_MODULE_12__.cloneElement)(beClone, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(`${prefixCls}-submenu-expand-icon`, (0,_util_reactNode__WEBPACK_IMPORTED_MODULE_12__.isValidElement)(beClone) ? (_b = beClone.props) === null || _b === void 0 ? void 0 : _b.className : '')
    });
  }
  // ======================== Context ==========================
  const contextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    prefixCls,
    inlineCollapsed: mergedInlineCollapsed || false,
    direction,
    firstLevel: true,
    theme,
    mode: mergedMode,
    disableMenuItemTitleTooltip: _internalDisableMenuItemTitleTooltip
  }), [prefixCls, mergedInlineCollapsed, direction, _internalDisableMenuItemTitleTooltip, theme]);
  // ========================= Render ==========================
  return wrapCSSVar( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OverrideContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MenuContext__WEBPACK_IMPORTED_MODULE_13__["default"].Provider, {
    value: contextValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(rc_menu__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    getPopupContainer: getPopupContainer,
    overflowedIndicator: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_EllipsisOutlined__WEBPACK_IMPORTED_MODULE_14__["default"], null),
    overflowedIndicatorPopupClassName: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, `${prefixCls}-${theme}`, overflowedIndicatorPopupClassName),
    mode: mergedMode,
    selectable: mergedSelectable,
    onClick: onItemClick
  }, passedProps, {
    inlineCollapsed: mergedInlineCollapsed,
    style: Object.assign(Object.assign({}, menu === null || menu === void 0 ? void 0 : menu.style), style),
    className: menuClassName,
    prefixCls: prefixCls,
    direction: direction,
    defaultMotions: defaultMotions,
    expandIcon: mergedExpandIcon,
    ref: ref,
    rootClassName: classnames__WEBPACK_IMPORTED_MODULE_1___default()(rootClassName, hashId, overrideObj.rootClassName, cssVarCls, rootCls)
  }), mergedChildren))));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InternalMenu);

/***/ }),

/***/ "../node_modules/antd/es/menu/style/horizontal.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/menu/style/horizontal.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");

const getHorizontalStyle = token => {
  const {
    componentCls,
    motionDurationSlow,
    horizontalLineHeight,
    colorSplit,
    lineWidth,
    lineType,
    itemPaddingInline
  } = token;
  return {
    [`${componentCls}-horizontal`]: {
      lineHeight: horizontalLineHeight,
      border: 0,
      borderBottom: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(lineWidth)} ${lineType} ${colorSplit}`,
      boxShadow: 'none',
      '&::after': {
        display: 'block',
        clear: 'both',
        height: 0,
        content: '"\\20"'
      },
      // ======================= Item =======================
      [`${componentCls}-item, ${componentCls}-submenu`]: {
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'bottom',
        paddingInline: itemPaddingInline
      },
      [`> ${componentCls}-item:hover,
        > ${componentCls}-item-active,
        > ${componentCls}-submenu ${componentCls}-submenu-title:hover`]: {
        backgroundColor: 'transparent'
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`].join(',')
      },
      // ===================== Sub Menu =====================
      [`${componentCls}-submenu-arrow`]: {
        display: 'none'
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHorizontalStyle);

/***/ }),

/***/ "../node_modules/antd/es/menu/style/index.js":
/*!***************************************************!*\
  !*** ../node_modules/antd/es/menu/style/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   prepareComponentToken: () => (/* binding */ prepareComponentToken)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ctrl/tinycolor */ "../node_modules/@ctrl/tinycolor/dist/module/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style */ "../node_modules/antd/es/style/index.js");
/* harmony import */ var _style_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../style/motion */ "../node_modules/antd/es/style/motion/collapse.js");
/* harmony import */ var _style_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../style/motion */ "../node_modules/antd/es/style/motion/slide.js");
/* harmony import */ var _style_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../style/motion */ "../node_modules/antd/es/style/motion/zoom.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/genComponentStyleHook.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/statistic.js");
/* harmony import */ var _horizontal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./horizontal */ "../node_modules/antd/es/menu/style/horizontal.js");
/* harmony import */ var _rtl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rtl */ "../node_modules/antd/es/menu/style/rtl.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme */ "../node_modules/antd/es/menu/style/theme.js");
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vertical */ "../node_modules/antd/es/menu/style/vertical.js");









const genMenuItemStyle = token => {
  const {
    componentCls,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    motionEaseOut,
    iconCls,
    iconSize,
    iconMarginInlineEnd
  } = token;
  return {
    // >>>>> Item
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      position: 'relative',
      display: 'block',
      margin: 0,
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`, `padding ${motionDurationSlow} ${motionEaseInOut}`].join(','),
      [`${componentCls}-item-icon, ${iconCls}`]: {
        minWidth: iconSize,
        fontSize: iconSize,
        transition: [`font-size ${motionDurationMid} ${motionEaseOut}`, `margin ${motionDurationSlow} ${motionEaseInOut}`, `color ${motionDurationSlow}`].join(','),
        '+ span': {
          marginInlineStart: iconMarginInlineEnd,
          opacity: 1,
          transition: [`opacity ${motionDurationSlow} ${motionEaseInOut}`, `margin ${motionDurationSlow}`, `color ${motionDurationSlow}`].join(',')
        }
      },
      [`${componentCls}-item-icon`]: Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__.resetIcon)()),
      [`&${componentCls}-item-only-child`]: {
        [`> ${iconCls}, > ${componentCls}-item-icon`]: {
          marginInlineEnd: 0
        }
      }
    },
    // Disabled state sets text to gray and nukes hover/tab effects
    [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
      background: 'none !important',
      cursor: 'not-allowed',
      '&::after': {
        borderColor: 'transparent !important'
      },
      a: {
        color: 'inherit !important'
      },
      [`> ${componentCls}-submenu-title`]: {
        color: 'inherit !important',
        cursor: 'not-allowed'
      }
    }
  };
};
const genSubMenuArrowStyle = token => {
  const {
    componentCls,
    motionDurationSlow,
    motionEaseInOut,
    borderRadius,
    menuArrowSize,
    menuArrowOffset
  } = token;
  return {
    [`${componentCls}-submenu`]: {
      [`&-expand-icon, &-arrow`]: {
        position: 'absolute',
        top: '50%',
        insetInlineEnd: token.margin,
        width: menuArrowSize,
        color: 'currentcolor',
        transform: 'translateY(-50%)',
        transition: `transform ${motionDurationSlow} ${motionEaseInOut}, opacity ${motionDurationSlow}`
      },
      '&-arrow': {
        // →
        '&::before, &::after': {
          position: 'absolute',
          width: token.calc(menuArrowSize).mul(0.6).equal(),
          height: token.calc(menuArrowSize).mul(0.15).equal(),
          backgroundColor: 'currentcolor',
          borderRadius,
          transition: [`background ${motionDurationSlow} ${motionEaseInOut}`, `transform ${motionDurationSlow} ${motionEaseInOut}`, `top ${motionDurationSlow} ${motionEaseInOut}`, `color ${motionDurationSlow} ${motionEaseInOut}`].join(','),
          content: '""'
        },
        '&::before': {
          transform: `rotate(45deg) translateY(${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.calc(menuArrowOffset).mul(-1).equal())})`
        },
        '&::after': {
          transform: `rotate(-45deg) translateY(${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(menuArrowOffset)})`
        }
      }
    }
  };
};
// =============================== Base ===============================
const getBaseStyle = token => {
  const {
    antCls,
    componentCls,
    fontSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    paddingXS,
    padding,
    colorSplit,
    lineWidth,
    zIndexPopup,
    borderRadiusLG,
    subMenuItemBorderRadius,
    menuArrowSize,
    menuArrowOffset,
    lineType,
    menuPanelMaskInset,
    groupTitleLineHeight,
    groupTitleFontSize
  } = token;
  return [
  // Misc
  {
    '': {
      [`${componentCls}`]: Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__.clearFix)()), {
        // Hidden
        [`&-hidden`]: {
          display: 'none'
        }
      })
    },
    [`${componentCls}-submenu-hidden`]: {
      display: 'none'
    }
  }, {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__.resetComponent)(token)), (0,_style__WEBPACK_IMPORTED_MODULE_1__.clearFix)()), {
      marginBottom: 0,
      paddingInlineStart: 0,
      // Override default ul/ol
      fontSize,
      lineHeight: 0,
      listStyle: 'none',
      outline: 'none',
      // Magic cubic here but smooth transition
      transition: `width ${motionDurationSlow} cubic-bezier(0.2, 0, 0, 1) 0s`,
      [`ul, ol`]: {
        margin: 0,
        padding: 0,
        listStyle: 'none'
      },
      // Overflow ellipsis
      [`&-overflow`]: {
        display: 'flex',
        [`${componentCls}-item`]: {
          flex: 'none'
        }
      },
      [`${componentCls}-item, ${componentCls}-submenu, ${componentCls}-submenu-title`]: {
        borderRadius: token.itemBorderRadius
      },
      [`${componentCls}-item-group-title`]: {
        padding: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(paddingXS)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(padding)}`,
        fontSize: groupTitleFontSize,
        lineHeight: groupTitleLineHeight,
        transition: `all ${motionDurationSlow}`
      },
      [`&-horizontal ${componentCls}-submenu`]: {
        transition: [`border-color ${motionDurationSlow} ${motionEaseInOut}`, `background ${motionDurationSlow} ${motionEaseInOut}`].join(',')
      },
      [`${componentCls}-submenu, ${componentCls}-submenu-inline`]: {
        transition: [`border-color ${motionDurationSlow} ${motionEaseInOut}`, `background ${motionDurationSlow} ${motionEaseInOut}`, `padding ${motionDurationMid} ${motionEaseInOut}`].join(',')
      },
      [`${componentCls}-submenu ${componentCls}-sub`]: {
        cursor: 'initial',
        transition: [`background ${motionDurationSlow} ${motionEaseInOut}`, `padding ${motionDurationSlow} ${motionEaseInOut}`].join(',')
      },
      [`${componentCls}-title-content`]: {
        transition: `color ${motionDurationSlow}`,
        // https://github.com/ant-design/ant-design/issues/41143
        [`> ${antCls}-typography-ellipsis-single-line`]: {
          display: 'inline',
          verticalAlign: 'unset'
        }
      },
      [`${componentCls}-item a`]: {
        '&::before': {
          position: 'absolute',
          inset: 0,
          backgroundColor: 'transparent',
          content: '""'
        }
      },
      // Removed a Badge related style seems it's safe
      // https://github.com/ant-design/ant-design/issues/19809
      // >>>>> Divider
      [`${componentCls}-item-divider`]: {
        overflow: 'hidden',
        lineHeight: 0,
        borderColor: colorSplit,
        borderStyle: lineType,
        borderWidth: 0,
        borderTopWidth: lineWidth,
        marginBlock: lineWidth,
        padding: 0,
        '&-dashed': {
          borderStyle: 'dashed'
        }
      }
    }), genMenuItemStyle(token)), {
      [`${componentCls}-item-group`]: {
        [`${componentCls}-item-group-list`]: {
          margin: 0,
          padding: 0,
          [`${componentCls}-item, ${componentCls}-submenu-title`]: {
            paddingInline: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.calc(fontSize).mul(2).equal())} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(padding)}`
          }
        }
      },
      // ======================= Sub Menu =======================
      '&-submenu': {
        '&-popup': {
          position: 'absolute',
          zIndex: zIndexPopup,
          borderRadius: borderRadiusLG,
          boxShadow: 'none',
          transformOrigin: '0 0',
          [`&${componentCls}-submenu`]: {
            background: 'transparent'
          },
          // https://github.com/ant-design/ant-design/issues/13955
          '&::before': {
            position: 'absolute',
            inset: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(menuPanelMaskInset)} 0 0`,
            zIndex: -1,
            width: '100%',
            height: '100%',
            opacity: 0,
            content: '""'
          }
        },
        // https://github.com/ant-design/ant-design/issues/13955
        '&-placement-rightTop::before': {
          top: 0,
          insetInlineStart: menuPanelMaskInset
        },
        [`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]: {
          transformOrigin: '100% 0'
        },
        [`
          &-placement-leftBottom,
          &-placement-topRight,
          `]: {
          transformOrigin: '100% 100%'
        },
        [`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]: {
          transformOrigin: '0 100%'
        },
        [`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]: {
          transformOrigin: '0 0'
        },
        [`
          &-placement-leftTop,
          &-placement-leftBottom
          `]: {
          paddingInlineEnd: token.paddingXS
        },
        [`
          &-placement-rightTop,
          &-placement-rightBottom
          `]: {
          paddingInlineStart: token.paddingXS
        },
        [`
          &-placement-topRight,
          &-placement-topLeft
          `]: {
          paddingBottom: token.paddingXS
        },
        [`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]: {
          paddingTop: token.paddingXS
        },
        [`> ${componentCls}`]: Object.assign(Object.assign(Object.assign({
          borderRadius: borderRadiusLG
        }, genMenuItemStyle(token)), genSubMenuArrowStyle(token)), {
          [`${componentCls}-item, ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
            borderRadius: subMenuItemBorderRadius
          },
          [`${componentCls}-submenu-title::after`]: {
            transition: `transform ${motionDurationSlow} ${motionEaseInOut}`
          }
        })
      }
    }), genSubMenuArrowStyle(token)), {
      [`&-inline-collapsed ${componentCls}-submenu-arrow,
        &-inline ${componentCls}-submenu-arrow`]: {
        // ↓
        '&::before': {
          transform: `rotate(-45deg) translateX(${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(menuArrowOffset)})`
        },
        '&::after': {
          transform: `rotate(45deg) translateX(${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.calc(menuArrowOffset).mul(-1).equal())})`
        }
      },
      [`${componentCls}-submenu-open${componentCls}-submenu-inline > ${componentCls}-submenu-title > ${componentCls}-submenu-arrow`]: {
        // ↑
        transform: `translateY(${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.calc(menuArrowSize).mul(0.2).mul(-1).equal())})`,
        '&::after': {
          transform: `rotate(-45deg) translateX(${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.calc(menuArrowOffset).mul(-1).equal())})`
        },
        '&::before': {
          transform: `rotate(45deg) translateX(${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(menuArrowOffset)})`
        }
      }
    })
  },
  // Integration with header element so menu items have the same height
  {
    [`${antCls}-layout-header`]: {
      [componentCls]: {
        lineHeight: 'inherit'
      }
    }
  }];
};
const prepareComponentToken = token => {
  var _a, _b, _c;
  const {
    colorPrimary,
    colorError,
    colorTextDisabled,
    colorErrorBg,
    colorText,
    colorTextDescription,
    colorBgContainer,
    colorFillAlter,
    colorFillContent,
    lineWidth,
    lineWidthBold,
    controlItemBgActive,
    colorBgTextHover,
    controlHeightLG,
    lineHeight,
    colorBgElevated,
    marginXXS,
    padding,
    fontSize,
    controlHeightSM,
    fontSizeLG,
    colorTextLightSolid,
    colorErrorHover
  } = token;
  const activeBarWidth = (_a = token.activeBarWidth) !== null && _a !== void 0 ? _a : 0;
  const activeBarBorderWidth = (_b = token.activeBarBorderWidth) !== null && _b !== void 0 ? _b : lineWidth;
  const itemMarginInline = (_c = token.itemMarginInline) !== null && _c !== void 0 ? _c : token.marginXXS;
  const colorTextDark = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__.TinyColor(colorTextLightSolid).setAlpha(0.65).toRgbString();
  return {
    dropdownWidth: 160,
    zIndexPopup: token.zIndexPopupBase + 50,
    radiusItem: token.borderRadiusLG,
    itemBorderRadius: token.borderRadiusLG,
    radiusSubMenuItem: token.borderRadiusSM,
    subMenuItemBorderRadius: token.borderRadiusSM,
    colorItemText: colorText,
    itemColor: colorText,
    colorItemTextHover: colorText,
    itemHoverColor: colorText,
    colorItemTextHoverHorizontal: colorPrimary,
    horizontalItemHoverColor: colorPrimary,
    colorGroupTitle: colorTextDescription,
    groupTitleColor: colorTextDescription,
    colorItemTextSelected: colorPrimary,
    itemSelectedColor: colorPrimary,
    colorItemTextSelectedHorizontal: colorPrimary,
    horizontalItemSelectedColor: colorPrimary,
    colorItemBg: colorBgContainer,
    itemBg: colorBgContainer,
    colorItemBgHover: colorBgTextHover,
    itemHoverBg: colorBgTextHover,
    colorItemBgActive: colorFillContent,
    itemActiveBg: controlItemBgActive,
    colorSubItemBg: colorFillAlter,
    subMenuItemBg: colorFillAlter,
    colorItemBgSelected: controlItemBgActive,
    itemSelectedBg: controlItemBgActive,
    colorItemBgSelectedHorizontal: 'transparent',
    horizontalItemSelectedBg: 'transparent',
    colorActiveBarWidth: 0,
    activeBarWidth,
    colorActiveBarHeight: lineWidthBold,
    activeBarHeight: lineWidthBold,
    colorActiveBarBorderSize: lineWidth,
    activeBarBorderWidth,
    // Disabled
    colorItemTextDisabled: colorTextDisabled,
    itemDisabledColor: colorTextDisabled,
    // Danger
    colorDangerItemText: colorError,
    dangerItemColor: colorError,
    colorDangerItemTextHover: colorError,
    dangerItemHoverColor: colorError,
    colorDangerItemTextSelected: colorError,
    dangerItemSelectedColor: colorError,
    colorDangerItemBgActive: colorErrorBg,
    dangerItemActiveBg: colorErrorBg,
    colorDangerItemBgSelected: colorErrorBg,
    dangerItemSelectedBg: colorErrorBg,
    itemMarginInline,
    horizontalItemBorderRadius: 0,
    horizontalItemHoverBg: 'transparent',
    itemHeight: controlHeightLG,
    groupTitleLineHeight: lineHeight,
    collapsedWidth: controlHeightLG * 2,
    popupBg: colorBgElevated,
    itemMarginBlock: marginXXS,
    itemPaddingInline: padding,
    horizontalLineHeight: `${controlHeightLG * 1.15}px`,
    iconSize: fontSize,
    iconMarginInlineEnd: controlHeightSM - fontSize,
    collapsedIconSize: fontSizeLG,
    groupTitleFontSize: fontSize,
    // Disabled
    darkItemDisabledColor: new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__.TinyColor(colorTextLightSolid).setAlpha(0.25).toRgbString(),
    // Dark
    darkItemColor: colorTextDark,
    darkDangerItemColor: colorError,
    darkItemBg: '#001529',
    darkPopupBg: '#001529',
    darkSubMenuItemBg: '#000c17',
    darkItemSelectedColor: colorTextLightSolid,
    darkItemSelectedBg: colorPrimary,
    darkDangerItemSelectedBg: colorError,
    darkItemHoverBg: 'transparent',
    darkGroupTitleColor: colorTextDark,
    darkItemHoverColor: colorTextLightSolid,
    darkDangerItemHoverColor: colorErrorHover,
    darkDangerItemSelectedColor: colorTextLightSolid,
    darkDangerItemActiveBg: colorError,
    // internal
    itemWidth: activeBarWidth ? `calc(100% + ${activeBarBorderWidth}px)` : `calc(100% - ${itemMarginInline * 2}px)`
  };
};
// ============================== Export ==============================
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (prefixCls) {
  let rootCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prefixCls;
  let injectStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  const useStyle = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_3__.genStyleHooks)('Menu', token => {
    const {
      colorBgElevated,
      colorPrimary,
      colorTextLightSolid,
      controlHeightLG,
      fontSize,
      darkItemColor,
      darkDangerItemColor,
      darkItemBg,
      darkSubMenuItemBg,
      darkItemSelectedColor,
      darkItemSelectedBg,
      darkDangerItemSelectedBg,
      darkItemHoverBg,
      darkGroupTitleColor,
      darkItemHoverColor,
      darkItemDisabledColor,
      darkDangerItemHoverColor,
      darkDangerItemSelectedColor,
      darkDangerItemActiveBg,
      popupBg,
      darkPopupBg
    } = token;
    const menuArrowSize = token.calc(fontSize).div(7).mul(5).equal();
    // Menu Token
    const menuToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_4__.merge)(token, {
      menuArrowSize,
      menuHorizontalHeight: token.calc(controlHeightLG).mul(1.15).equal(),
      menuArrowOffset: token.calc(menuArrowSize).mul(0.25).equal(),
      menuPanelMaskInset: -7,
      // Still a hardcode here since it's offset by rc-align
      menuSubMenuBg: colorBgElevated,
      calc: token.calc,
      popupBg
    });
    const menuDarkToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_4__.merge)(menuToken, {
      itemColor: darkItemColor,
      itemHoverColor: darkItemHoverColor,
      groupTitleColor: darkGroupTitleColor,
      itemSelectedColor: darkItemSelectedColor,
      itemBg: darkItemBg,
      popupBg: darkPopupBg,
      subMenuItemBg: darkSubMenuItemBg,
      itemActiveBg: 'transparent',
      itemSelectedBg: darkItemSelectedBg,
      activeBarHeight: 0,
      activeBarBorderWidth: 0,
      itemHoverBg: darkItemHoverBg,
      // Disabled
      itemDisabledColor: darkItemDisabledColor,
      // Danger
      dangerItemColor: darkDangerItemColor,
      dangerItemHoverColor: darkDangerItemHoverColor,
      dangerItemSelectedColor: darkDangerItemSelectedColor,
      dangerItemActiveBg: darkDangerItemActiveBg,
      dangerItemSelectedBg: darkDangerItemSelectedBg,
      menuSubMenuBg: darkSubMenuItemBg,
      // Horizontal
      horizontalItemSelectedColor: colorTextLightSolid,
      horizontalItemSelectedBg: colorPrimary
    });
    return [
    // Basic
    getBaseStyle(menuToken),
    // Horizontal
    (0,_horizontal__WEBPACK_IMPORTED_MODULE_5__["default"])(menuToken),
    // Hard code for some light style
    // Vertical
    (0,_vertical__WEBPACK_IMPORTED_MODULE_6__["default"])(menuToken),
    // Hard code for some light style
    // Theme
    (0,_theme__WEBPACK_IMPORTED_MODULE_7__["default"])(menuToken, 'light'), (0,_theme__WEBPACK_IMPORTED_MODULE_7__["default"])(menuDarkToken, 'dark'),
    // RTL
    (0,_rtl__WEBPACK_IMPORTED_MODULE_8__["default"])(menuToken),
    // Motion
    (0,_style_motion__WEBPACK_IMPORTED_MODULE_9__["default"])(menuToken), (0,_style_motion__WEBPACK_IMPORTED_MODULE_10__.initSlideMotion)(menuToken, 'slide-up'), (0,_style_motion__WEBPACK_IMPORTED_MODULE_10__.initSlideMotion)(menuToken, 'slide-down'), (0,_style_motion__WEBPACK_IMPORTED_MODULE_11__.initZoomMotion)(menuToken, 'zoom-big')];
  }, prepareComponentToken, {
    deprecatedTokens: [['colorGroupTitle', 'groupTitleColor'], ['radiusItem', 'itemBorderRadius'], ['radiusSubMenuItem', 'subMenuItemBorderRadius'], ['colorItemText', 'itemColor'], ['colorItemTextHover', 'itemHoverColor'], ['colorItemTextHoverHorizontal', 'horizontalItemHoverColor'], ['colorItemTextSelected', 'itemSelectedColor'], ['colorItemTextSelectedHorizontal', 'horizontalItemSelectedColor'], ['colorItemTextDisabled', 'itemDisabledColor'], ['colorDangerItemText', 'dangerItemColor'], ['colorDangerItemTextHover', 'dangerItemHoverColor'], ['colorDangerItemTextSelected', 'dangerItemSelectedColor'], ['colorDangerItemBgActive', 'dangerItemActiveBg'], ['colorDangerItemBgSelected', 'dangerItemSelectedBg'], ['colorItemBg', 'itemBg'], ['colorItemBgHover', 'itemHoverBg'], ['colorSubItemBg', 'subMenuItemBg'], ['colorItemBgActive', 'itemActiveBg'], ['colorItemBgSelectedHorizontal', 'horizontalItemSelectedBg'], ['colorActiveBarWidth', 'activeBarWidth'], ['colorActiveBarHeight', 'activeBarHeight'], ['colorActiveBarBorderSize', 'activeBarBorderWidth'], ['colorItemBgSelected', 'itemSelectedBg']],
    // Dropdown will handle menu style self. We do not need to handle this.
    injectStyle,
    unitless: {
      groupTitleLineHeight: true
    }
  });
  return useStyle(prefixCls, rootCls);
});

/***/ }),

/***/ "../node_modules/antd/es/menu/style/rtl.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/menu/style/rtl.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");

const getRTLStyle = _ref => {
  let {
    componentCls,
    menuArrowOffset,
    calc
  } = _ref;
  return {
    [`${componentCls}-rtl`]: {
      direction: 'rtl'
    },
    [`${componentCls}-submenu-rtl`]: {
      transformOrigin: '100% 0'
    },
    // Vertical Arrow
    [`${componentCls}-rtl${componentCls}-vertical,
    ${componentCls}-submenu-rtl ${componentCls}-vertical`]: {
      [`${componentCls}-submenu-arrow`]: {
        '&::before': {
          transform: `rotate(-45deg) translateY(${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(calc(menuArrowOffset).mul(-1).equal())})`
        },
        '&::after': {
          transform: `rotate(45deg) translateY(${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(menuArrowOffset)})`
        }
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRTLStyle);

/***/ }),

/***/ "../node_modules/antd/es/menu/style/theme.js":
/*!***************************************************!*\
  !*** ../node_modules/antd/es/menu/style/theme.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style */ "../node_modules/antd/es/style/index.js");


const accessibilityFocus = token => Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__.genFocusOutline)(token));
const getThemeStyle = (token, themeSuffix) => {
  const {
    componentCls,
    itemColor,
    itemSelectedColor,
    groupTitleColor,
    itemBg,
    subMenuItemBg,
    itemSelectedBg,
    activeBarHeight,
    activeBarWidth,
    activeBarBorderWidth,
    motionDurationSlow,
    motionEaseInOut,
    motionEaseOut,
    itemPaddingInline,
    motionDurationMid,
    itemHoverColor,
    lineType,
    colorSplit,
    // Disabled
    itemDisabledColor,
    // Danger
    dangerItemColor,
    dangerItemHoverColor,
    dangerItemSelectedColor,
    dangerItemActiveBg,
    dangerItemSelectedBg,
    // Bg
    popupBg,
    itemHoverBg,
    itemActiveBg,
    menuSubMenuBg,
    // Horizontal
    horizontalItemSelectedColor,
    horizontalItemSelectedBg,
    horizontalItemBorderRadius,
    horizontalItemHoverBg
  } = token;
  return {
    [`${componentCls}-${themeSuffix}, ${componentCls}-${themeSuffix} > ${componentCls}`]: {
      color: itemColor,
      background: itemBg,
      [`&${componentCls}-root:focus-visible`]: Object.assign({}, accessibilityFocus(token)),
      // ======================== Item ========================
      [`${componentCls}-item-group-title`]: {
        color: groupTitleColor
      },
      [`${componentCls}-submenu-selected`]: {
        [`> ${componentCls}-submenu-title`]: {
          color: itemSelectedColor
        }
      },
      // Disabled
      [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
        color: `${itemDisabledColor} !important`
      },
      // Hover
      [`${componentCls}-item:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
        [`&:hover, > ${componentCls}-submenu-title:hover`]: {
          color: itemHoverColor
        }
      },
      [`&:not(${componentCls}-horizontal)`]: {
        [`${componentCls}-item:not(${componentCls}-item-selected)`]: {
          '&:hover': {
            backgroundColor: itemHoverBg
          },
          '&:active': {
            backgroundColor: itemActiveBg
          }
        },
        [`${componentCls}-submenu-title`]: {
          '&:hover': {
            backgroundColor: itemHoverBg
          },
          '&:active': {
            backgroundColor: itemActiveBg
          }
        }
      },
      // Danger - only Item has
      [`${componentCls}-item-danger`]: {
        color: dangerItemColor,
        [`&${componentCls}-item:hover`]: {
          [`&:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
            color: dangerItemHoverColor
          }
        },
        [`&${componentCls}-item:active`]: {
          background: dangerItemActiveBg
        }
      },
      [`${componentCls}-item a`]: {
        '&, &:hover': {
          color: 'inherit'
        }
      },
      [`${componentCls}-item-selected`]: {
        color: itemSelectedColor,
        // Danger
        [`&${componentCls}-item-danger`]: {
          color: dangerItemSelectedColor
        },
        [`a, a:hover`]: {
          color: 'inherit'
        }
      },
      [`& ${componentCls}-item-selected`]: {
        backgroundColor: itemSelectedBg,
        // Danger
        [`&${componentCls}-item-danger`]: {
          backgroundColor: dangerItemSelectedBg
        }
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        [`&:not(${componentCls}-item-disabled):focus-visible`]: Object.assign({}, accessibilityFocus(token))
      },
      [`&${componentCls}-submenu > ${componentCls}`]: {
        backgroundColor: menuSubMenuBg
      },
      // ===== 设置浮层的颜色 =======
      // ！dark 模式会被popupBg 会被rest 为 darkPopupBg
      [`&${componentCls}-popup > ${componentCls}`]: {
        backgroundColor: popupBg
      },
      [`&${componentCls}-submenu-popup > ${componentCls}`]: {
        backgroundColor: popupBg
      },
      // ===== 设置浮层的颜色 end =======
      // ====================== Horizontal ======================
      [`&${componentCls}-horizontal`]: Object.assign(Object.assign({}, themeSuffix === 'dark' ? {
        borderBottom: 0
      } : {}), {
        [`> ${componentCls}-item, > ${componentCls}-submenu`]: {
          top: activeBarBorderWidth,
          marginTop: token.calc(activeBarBorderWidth).mul(-1).equal(),
          marginBottom: 0,
          borderRadius: horizontalItemBorderRadius,
          '&::after': {
            position: 'absolute',
            insetInline: itemPaddingInline,
            bottom: 0,
            borderBottom: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(activeBarHeight)} solid transparent`,
            transition: `border-color ${motionDurationSlow} ${motionEaseInOut}`,
            content: '""'
          },
          [`&:hover, &-active, &-open`]: {
            background: horizontalItemHoverBg,
            '&::after': {
              borderBottomWidth: activeBarHeight,
              borderBottomColor: horizontalItemSelectedColor
            }
          },
          [`&-selected`]: {
            color: horizontalItemSelectedColor,
            backgroundColor: horizontalItemSelectedBg,
            '&:hover': {
              backgroundColor: horizontalItemSelectedBg
            },
            '&::after': {
              borderBottomWidth: activeBarHeight,
              borderBottomColor: horizontalItemSelectedColor
            }
          }
        }
      }),
      // ================== Inline & Vertical ===================
      //
      [`&${componentCls}-root`]: {
        [`&${componentCls}-inline, &${componentCls}-vertical`]: {
          borderInlineEnd: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(activeBarBorderWidth)} ${lineType} ${colorSplit}`
        }
      },
      // ======================== Inline ========================
      [`&${componentCls}-inline`]: {
        // Sub
        [`${componentCls}-sub${componentCls}-inline`]: {
          background: subMenuItemBg
        },
        [`${componentCls}-item`]: {
          position: 'relative',
          '&::after': {
            position: 'absolute',
            insetBlock: 0,
            insetInlineEnd: 0,
            borderInlineEnd: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(activeBarWidth)} solid ${itemSelectedColor}`,
            transform: 'scaleY(0.0001)',
            opacity: 0,
            transition: [`transform ${motionDurationMid} ${motionEaseOut}`, `opacity ${motionDurationMid} ${motionEaseOut}`].join(','),
            content: '""'
          },
          // Danger
          [`&${componentCls}-item-danger`]: {
            '&::after': {
              borderInlineEndColor: dangerItemSelectedColor
            }
          }
        },
        [`${componentCls}-selected, ${componentCls}-item-selected`]: {
          '&::after': {
            transform: 'scaleY(1)',
            opacity: 1,
            transition: [`transform ${motionDurationMid} ${motionEaseInOut}`, `opacity ${motionDurationMid} ${motionEaseInOut}`].join(',')
          }
        }
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getThemeStyle);

/***/ }),

/***/ "../node_modules/antd/es/menu/style/vertical.js":
/*!******************************************************!*\
  !*** ../node_modules/antd/es/menu/style/vertical.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style */ "../node_modules/antd/es/style/index.js");


const getVerticalInlineStyle = token => {
  const {
    componentCls,
    itemHeight,
    itemMarginInline,
    padding,
    menuArrowSize,
    marginXS,
    itemMarginBlock,
    itemWidth
  } = token;
  const paddingWithArrow = token.calc(menuArrowSize).add(padding).add(marginXS).equal();
  return {
    [`${componentCls}-item`]: {
      position: 'relative',
      overflow: 'hidden'
    },
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      height: itemHeight,
      lineHeight: (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(itemHeight),
      paddingInline: padding,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      marginInline: itemMarginInline,
      marginBlock: itemMarginBlock,
      width: itemWidth
    },
    [`> ${componentCls}-item,
            > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
      height: itemHeight,
      lineHeight: (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(itemHeight)
    },
    [`${componentCls}-item-group-list ${componentCls}-submenu-title,
            ${componentCls}-submenu-title`]: {
      paddingInlineEnd: paddingWithArrow
    }
  };
};
const getVerticalStyle = token => {
  const {
    componentCls,
    iconCls,
    itemHeight,
    colorTextLightSolid,
    dropdownWidth,
    controlHeightLG,
    motionDurationMid,
    motionEaseOut,
    paddingXL,
    itemMarginInline,
    fontSizeLG,
    motionDurationSlow,
    paddingXS,
    boxShadowSecondary,
    collapsedWidth,
    collapsedIconSize
  } = token;
  const inlineItemStyle = {
    height: itemHeight,
    lineHeight: (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(itemHeight),
    listStylePosition: 'inside',
    listStyleType: 'disc'
  };
  return [{
    [componentCls]: {
      [`&-inline, &-vertical`]: Object.assign({
        [`&${componentCls}-root`]: {
          boxShadow: 'none'
        }
      }, getVerticalInlineStyle(token))
    },
    [`${componentCls}-submenu-popup`]: {
      [`${componentCls}-vertical`]: Object.assign(Object.assign({}, getVerticalInlineStyle(token)), {
        boxShadow: boxShadowSecondary
      })
    }
  },
  // Vertical only
  {
    [`${componentCls}-submenu-popup ${componentCls}-vertical${componentCls}-sub`]: {
      minWidth: dropdownWidth,
      maxHeight: `calc(100vh - ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.calc(controlHeightLG).mul(2.5).equal())})`,
      padding: '0',
      overflow: 'hidden',
      borderInlineEnd: 0,
      // https://github.com/ant-design/ant-design/issues/22244
      // https://github.com/ant-design/ant-design/issues/26812
      "&:not([class*='-active'])": {
        overflowX: 'hidden',
        overflowY: 'auto'
      }
    }
  },
  // Inline Only
  {
    [`${componentCls}-inline`]: {
      width: '100%',
      // Motion enhance for first level
      [`&${componentCls}-root`]: {
        [`${componentCls}-item, ${componentCls}-submenu-title`]: {
          display: 'flex',
          alignItems: 'center',
          transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`, `padding ${motionDurationMid} ${motionEaseOut}`].join(','),
          [`> ${componentCls}-title-content`]: {
            flex: 'auto',
            minWidth: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          },
          '> *': {
            flex: 'none'
          }
        }
      },
      // >>>>> Sub
      [`${componentCls}-sub${componentCls}-inline`]: {
        padding: 0,
        border: 0,
        borderRadius: 0,
        boxShadow: 'none',
        [`& > ${componentCls}-submenu > ${componentCls}-submenu-title`]: inlineItemStyle,
        [`& ${componentCls}-item-group-title`]: {
          paddingInlineStart: paddingXL
        }
      },
      // >>>>> Item
      [`${componentCls}-item`]: inlineItemStyle
    }
  },
  // Inline Collapse Only
  {
    [`${componentCls}-inline-collapsed`]: {
      width: collapsedWidth,
      [`&${componentCls}-root`]: {
        [`${componentCls}-item, ${componentCls}-submenu ${componentCls}-submenu-title`]: {
          [`> ${componentCls}-inline-collapsed-noicon`]: {
            fontSize: fontSizeLG,
            textAlign: 'center'
          }
        }
      },
      [`> ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-submenu > ${componentCls}-submenu-title,
          > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
        insetInlineStart: 0,
        paddingInline: `calc(50% - ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.calc(fontSizeLG).div(2).equal())} - ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(itemMarginInline)})`,
        textOverflow: 'clip',
        [`
            ${componentCls}-submenu-arrow,
            ${componentCls}-submenu-expand-icon
          `]: {
          opacity: 0
        },
        [`${componentCls}-item-icon, ${iconCls}`]: {
          margin: 0,
          fontSize: collapsedIconSize,
          lineHeight: (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(itemHeight),
          '+ span': {
            display: 'inline-block',
            opacity: 0
          }
        }
      },
      [`${componentCls}-item-icon, ${iconCls}`]: {
        display: 'inline-block'
      },
      '&-tooltip': {
        pointerEvents: 'none',
        [`${componentCls}-item-icon, ${iconCls}`]: {
          display: 'none'
        },
        'a, a:hover': {
          color: colorTextLightSolid
        }
      },
      [`${componentCls}-item-group-title`]: Object.assign(Object.assign({}, _style__WEBPACK_IMPORTED_MODULE_1__.textEllipsis), {
        paddingInline: paddingXS
      })
    }
  }];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getVerticalStyle);

/***/ }),

/***/ "../node_modules/antd/es/message/PurePanel.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/message/PurePanel.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PureContent: () => (/* binding */ PureContent),
/* harmony export */   TypeIcon: () => (/* binding */ TypeIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_icons_es_icons_CheckCircleFilled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons/es/icons/CheckCircleFilled */ "../node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js");
/* harmony import */ var _ant_design_icons_es_icons_CloseCircleFilled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/es/icons/CloseCircleFilled */ "../node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js");
/* harmony import */ var _ant_design_icons_es_icons_ExclamationCircleFilled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/es/icons/ExclamationCircleFilled */ "../node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js");
/* harmony import */ var _ant_design_icons_es_icons_InfoCircleFilled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/es/icons/InfoCircleFilled */ "../node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js");
/* harmony import */ var _ant_design_icons_es_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/es/icons/LoadingOutlined */ "../node_modules/@ant-design/icons/es/icons/LoadingOutlined.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-notification */ "../node_modules/rc-notification/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style */ "../node_modules/antd/es/message/style/index.js");
/* harmony import */ var _config_provider_hooks_useCSSVarCls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config-provider/hooks/useCSSVarCls */ "../node_modules/antd/es/config-provider/hooks/useCSSVarCls.js");
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











const TypeIcon = {
  info: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ant_design_icons_es_icons_InfoCircleFilled__WEBPACK_IMPORTED_MODULE_3__["default"], null),
  success: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ant_design_icons_es_icons_CheckCircleFilled__WEBPACK_IMPORTED_MODULE_4__["default"], null),
  error: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ant_design_icons_es_icons_CloseCircleFilled__WEBPACK_IMPORTED_MODULE_5__["default"], null),
  warning: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ant_design_icons_es_icons_ExclamationCircleFilled__WEBPACK_IMPORTED_MODULE_6__["default"], null),
  loading: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ant_design_icons_es_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_7__["default"], null)
};
const PureContent = _ref => {
  let {
    prefixCls,
    type,
    icon,
    children
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(`${prefixCls}-custom-content`, `${prefixCls}-${type}`)
  }, icon || TypeIcon[type], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, children));
};
/** @private Internal Component. Do not use in your production. */
const PurePanel = props => {
  const {
      prefixCls: staticPrefixCls,
      className,
      type,
      icon,
      content
    } = props,
    restProps = __rest(props, ["prefixCls", "className", "type", "icon", "content"]);
  const {
    getPrefixCls
  } = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_8__.ConfigContext);
  const prefixCls = staticPrefixCls || getPrefixCls('message');
  const rootCls = (0,_config_provider_hooks_useCSSVarCls__WEBPACK_IMPORTED_MODULE_9__["default"])(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,_style__WEBPACK_IMPORTED_MODULE_10__["default"])(prefixCls, rootCls);
  return wrapCSSVar( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(rc_notification__WEBPACK_IMPORTED_MODULE_1__.Notice, Object.assign({}, restProps, {
    prefixCls: prefixCls,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, hashId, `${prefixCls}-notice-pure-panel`, cssVarCls, rootCls),
    eventKey: "pure",
    duration: null,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(PureContent, {
      prefixCls: prefixCls,
      type: type,
      icon: icon
    }, content)
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurePanel);

/***/ }),

/***/ "../node_modules/antd/es/message/style/index.js":
/*!******************************************************!*\
  !*** ../node_modules/antd/es/message/style/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   prepareComponentToken: () => (/* binding */ prepareComponentToken)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var _util_hooks_useZIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_util/hooks/useZIndex */ "../node_modules/antd/es/_util/hooks/useZIndex.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style */ "../node_modules/antd/es/style/index.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/genComponentStyleHook.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/statistic.js");




const genMessageStyle = token => {
  const {
    componentCls,
    iconCls,
    boxShadow,
    colorText,
    colorSuccess,
    colorError,
    colorWarning,
    colorInfo,
    fontSizeLG,
    motionEaseInOutCirc,
    motionDurationSlow,
    marginXS,
    paddingXS,
    borderRadiusLG,
    zIndexPopup,
    // Custom token
    contentPadding,
    contentBg
  } = token;
  const noticeCls = `${componentCls}-notice`;
  const messageMoveIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('MessageMoveIn', {
    '0%': {
      padding: 0,
      transform: 'translateY(-100%)',
      opacity: 0
    },
    '100%': {
      padding: paddingXS,
      transform: 'translateY(0)',
      opacity: 1
    }
  });
  const messageMoveOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('MessageMoveOut', {
    '0%': {
      maxHeight: token.height,
      padding: paddingXS,
      opacity: 1
    },
    '100%': {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  });
  const noticeStyle = {
    padding: paddingXS,
    textAlign: 'center',
    [`${componentCls}-custom-content > ${iconCls}`]: {
      verticalAlign: 'text-bottom',
      marginInlineEnd: marginXS,
      // affected by ltr or rtl
      fontSize: fontSizeLG
    },
    [`${noticeCls}-content`]: {
      display: 'inline-block',
      padding: contentPadding,
      background: contentBg,
      borderRadius: borderRadiusLG,
      boxShadow,
      pointerEvents: 'all'
    },
    [`${componentCls}-success > ${iconCls}`]: {
      color: colorSuccess
    },
    [`${componentCls}-error > ${iconCls}`]: {
      color: colorError
    },
    [`${componentCls}-warning > ${iconCls}`]: {
      color: colorWarning
    },
    [`${componentCls}-info > ${iconCls},
      ${componentCls}-loading > ${iconCls}`]: {
      color: colorInfo
    }
  };
  return [
  // ============================ Holder ============================
  {
    [componentCls]: Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__.resetComponent)(token)), {
      color: colorText,
      position: 'fixed',
      top: marginXS,
      width: '100%',
      pointerEvents: 'none',
      zIndex: zIndexPopup,
      [`${componentCls}-move-up`]: {
        animationFillMode: 'forwards'
      },
      [`
        ${componentCls}-move-up-appear,
        ${componentCls}-move-up-enter
      `]: {
        animationName: messageMoveIn,
        animationDuration: motionDurationSlow,
        animationPlayState: 'paused',
        animationTimingFunction: motionEaseInOutCirc
      },
      [`
        ${componentCls}-move-up-appear${componentCls}-move-up-appear-active,
        ${componentCls}-move-up-enter${componentCls}-move-up-enter-active
      `]: {
        animationPlayState: 'running'
      },
      [`${componentCls}-move-up-leave`]: {
        animationName: messageMoveOut,
        animationDuration: motionDurationSlow,
        animationPlayState: 'paused',
        animationTimingFunction: motionEaseInOutCirc
      },
      [`${componentCls}-move-up-leave${componentCls}-move-up-leave-active`]: {
        animationPlayState: 'running'
      },
      '&-rtl': {
        direction: 'rtl',
        span: {
          direction: 'rtl'
        }
      }
    })
  },
  // ============================ Notice ============================
  {
    [componentCls]: {
      [`${noticeCls}-wrapper`]: Object.assign({}, noticeStyle)
    }
  },
  // ============================= Pure =============================
  {
    [`${componentCls}-notice-pure-panel`]: Object.assign(Object.assign({}, noticeStyle), {
      padding: 0,
      textAlign: 'start'
    })
  }];
};
const prepareComponentToken = token => ({
  zIndexPopup: token.zIndexPopupBase + _util_hooks_useZIndex__WEBPACK_IMPORTED_MODULE_2__.CONTAINER_MAX_OFFSET + 10,
  contentBg: token.colorBgElevated,
  contentPadding: `${(token.controlHeightLG - token.fontSize * token.lineHeight) / 2}px ${token.paddingSM}px`
});
// ============================== Export ==============================
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_3__.genStyleHooks)('Message', token => {
  // Gen-style functions here
  const combinedToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_4__.merge)(token, {
    height: 150
  });
  return [genMessageStyle(combinedToken)];
}, prepareComponentToken));

/***/ }),

/***/ "../node_modules/antd/es/message/useMessage.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/message/useMessage.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMessage),
/* harmony export */   useInternalMessage: () => (/* binding */ useInternalMessage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/es/icons/CloseOutlined */ "../node_modules/@ant-design/icons/es/icons/CloseOutlined.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-notification */ "../node_modules/rc-notification/es/index.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _config_provider_hooks_useCSSVarCls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config-provider/hooks/useCSSVarCls */ "../node_modules/antd/es/config-provider/hooks/useCSSVarCls.js");
/* harmony import */ var _PurePanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PurePanel */ "../node_modules/antd/es/message/PurePanel.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "../node_modules/antd/es/message/style/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "../node_modules/antd/es/message/util.js");
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const DEFAULT_OFFSET = 8;
const DEFAULT_DURATION = 3;
const Wrapper = _ref => {
  let {
    children,
    prefixCls
  } = _ref;
  const rootCls = (0,_config_provider_hooks_useCSSVarCls__WEBPACK_IMPORTED_MODULE_3__["default"])(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,_style__WEBPACK_IMPORTED_MODULE_4__["default"])(prefixCls, rootCls);
  return wrapCSSVar( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(rc_notification__WEBPACK_IMPORTED_MODULE_2__.NotificationProvider, {
    classNames: {
      list: classnames__WEBPACK_IMPORTED_MODULE_1___default()(hashId, cssVarCls, rootCls)
    }
  }, children));
};
const renderNotifications = (node, _ref2) => {
  let {
    prefixCls,
    key
  } = _ref2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, {
    prefixCls: prefixCls,
    key: key
  }, node);
};
const Holder = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
  const {
    top,
    prefixCls: staticPrefixCls,
    getContainer: staticGetContainer,
    maxCount,
    duration = DEFAULT_DURATION,
    rtl,
    transitionName,
    onAllRemoved
  } = props;
  const {
    getPrefixCls,
    getPopupContainer,
    message,
    direction
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_5__.ConfigContext);
  const prefixCls = staticPrefixCls || getPrefixCls('message');
  // =============================== Style ===============================
  const getStyle = () => ({
    left: '50%',
    transform: 'translateX(-50%)',
    top: top !== null && top !== void 0 ? top : DEFAULT_OFFSET
  });
  const getClassName = () => classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [`${prefixCls}-rtl`]: rtl !== null && rtl !== void 0 ? rtl : direction === 'rtl'
  });
  // ============================== Motion ===============================
  const getNotificationMotion = () => (0,_util__WEBPACK_IMPORTED_MODULE_6__.getMotion)(prefixCls, transitionName);
  // ============================ Close Icon =============================
  const mergedCloseIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: `${prefixCls}-close-x`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: `${prefixCls}-close-icon`
  }));
  // ============================== Origin ===============================
  const [api, holder] = (0,rc_notification__WEBPACK_IMPORTED_MODULE_2__.useNotification)({
    prefixCls,
    style: getStyle,
    className: getClassName,
    motion: getNotificationMotion,
    closable: false,
    closeIcon: mergedCloseIcon,
    duration,
    getContainer: () => (staticGetContainer === null || staticGetContainer === void 0 ? void 0 : staticGetContainer()) || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer()) || document.body,
    maxCount,
    onAllRemoved,
    renderNotifications
  });
  // ================================ Ref ================================
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, () => Object.assign(Object.assign({}, api), {
    prefixCls,
    message
  }));
  return holder;
});
// ==============================================================================
// ==                                   Hook                                   ==
// ==============================================================================
let keyIndex = 0;
function useInternalMessage(messageConfig) {
  const holderRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const warning = (0,_util_warning__WEBPACK_IMPORTED_MODULE_8__.devUseWarning)('Message');
  // ================================ API ================================
  const wrapAPI = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Wrap with notification content
    // >>> close
    const close = key => {
      var _a;
      (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.close(key);
    };
    // >>> Open
    const open = config => {
      if (!holderRef.current) {
         true ? warning(false, 'usage', 'You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.') : 0;
        const fakeResult = () => {};
        fakeResult.then = () => {};
        return fakeResult;
      }
      const {
        open: originOpen,
        prefixCls,
        message
      } = holderRef.current;
      const noticePrefixCls = `${prefixCls}-notice`;
      const {
          content,
          icon,
          type,
          key,
          className,
          style,
          onClose
        } = config,
        restConfig = __rest(config, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let mergedKey = key;
      if (mergedKey === undefined || mergedKey === null) {
        keyIndex += 1;
        mergedKey = `antd-message-${keyIndex}`;
      }
      return (0,_util__WEBPACK_IMPORTED_MODULE_6__.wrapPromiseFn)(resolve => {
        originOpen(Object.assign(Object.assign({}, restConfig), {
          key: mergedKey,
          content: ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PurePanel__WEBPACK_IMPORTED_MODULE_9__.PureContent, {
            prefixCls: prefixCls,
            type: type,
            icon: icon
          }, content)),
          placement: 'top',
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(type && `${noticePrefixCls}-${type}`, className, message === null || message === void 0 ? void 0 : message.className),
          style: Object.assign(Object.assign({}, message === null || message === void 0 ? void 0 : message.style), style),
          onClose: () => {
            onClose === null || onClose === void 0 ? void 0 : onClose();
            resolve();
          }
        }));
        // Return close function
        return () => {
          close(mergedKey);
        };
      });
    };
    // >>> destroy
    const destroy = key => {
      var _a;
      if (key !== undefined) {
        close(key);
      } else {
        (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
      }
    };
    const clone = {
      open,
      destroy
    };
    const keys = ['info', 'success', 'warning', 'error', 'loading'];
    keys.forEach(type => {
      const typeOpen = (jointContent, duration, onClose) => {
        let config;
        if (jointContent && typeof jointContent === 'object' && 'content' in jointContent) {
          config = jointContent;
        } else {
          config = {
            content: jointContent
          };
        }
        // Params
        let mergedDuration;
        let mergedOnClose;
        if (typeof duration === 'function') {
          mergedOnClose = duration;
        } else {
          mergedDuration = duration;
          mergedOnClose = onClose;
        }
        const mergedConfig = Object.assign(Object.assign({
          onClose: mergedOnClose,
          duration: mergedDuration
        }, config), {
          type
        });
        return open(mergedConfig);
      };
      clone[type] = typeOpen;
    });
    return clone;
  }, []);
  // ============================== Return ===============================
  return [wrapAPI, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Holder, Object.assign({
    key: "message-holder"
  }, messageConfig, {
    ref: holderRef
  }))];
}
function useMessage(messageConfig) {
  return useInternalMessage(messageConfig);
}

/***/ }),

/***/ "../node_modules/antd/es/message/util.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/message/util.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMotion: () => (/* binding */ getMotion),
/* harmony export */   wrapPromiseFn: () => (/* binding */ wrapPromiseFn)
/* harmony export */ });
function getMotion(prefixCls, transitionName) {
  return {
    motionName: transitionName !== null && transitionName !== void 0 ? transitionName : `${prefixCls}-move-up`
  };
}
/** Wrap message open with promise like function */
function wrapPromiseFn(openFn) {
  let closeFn;
  const closePromise = new Promise(resolve => {
    closeFn = openFn(() => {
      resolve(true);
    });
  });
  const result = () => {
    closeFn === null || closeFn === void 0 ? void 0 : closeFn();
  };
  result.then = (filled, rejected) => closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}

/***/ }),

/***/ "../node_modules/antd/es/modal/ConfirmDialog.js":
/*!******************************************************!*\
  !*** ../node_modules/antd/es/modal/ConfirmDialog.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmContent: () => (/* binding */ ConfirmContent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons_es_icons_CheckCircleFilled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/es/icons/CheckCircleFilled */ "../node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js");
/* harmony import */ var _ant_design_icons_es_icons_CloseCircleFilled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/es/icons/CloseCircleFilled */ "../node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js");
/* harmony import */ var _ant_design_icons_es_icons_ExclamationCircleFilled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/es/icons/ExclamationCircleFilled */ "../node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js");
/* harmony import */ var _ant_design_icons_es_icons_InfoCircleFilled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons/es/icons/InfoCircleFilled */ "../node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_hooks_useZIndex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_util/hooks/useZIndex */ "../node_modules/antd/es/_util/hooks/useZIndex.js");
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../_util/motion */ "../node_modules/antd/es/_util/motion.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/index.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../locale */ "../node_modules/antd/es/locale/useLocale.js");
/* harmony import */ var _theme_useToken__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../theme/useToken */ "../node_modules/antd/es/theme/useToken.js");
/* harmony import */ var _components_ConfirmCancelBtn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ConfirmCancelBtn */ "../node_modules/antd/es/modal/components/ConfirmCancelBtn.js");
/* harmony import */ var _components_ConfirmOkBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ConfirmOkBtn */ "../node_modules/antd/es/modal/components/ConfirmOkBtn.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./context */ "../node_modules/antd/es/modal/context.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Modal */ "../node_modules/antd/es/modal/Modal.js");
/* harmony import */ var _style_confirm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style/confirm */ "../node_modules/antd/es/modal/style/confirm.js");
"use client";


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

















function ConfirmContent(props) {
  const {
      prefixCls,
      icon,
      okText,
      cancelText,
      confirmPrefixCls,
      type,
      okCancel,
      footer,
      // Legacy for static function usage
      locale: staticLocale
    } = props,
    resetProps = __rest(props, ["prefixCls", "icon", "okText", "cancelText", "confirmPrefixCls", "type", "okCancel", "footer", "locale"]);
  if (true) {
    const warning = (0,_util_warning__WEBPACK_IMPORTED_MODULE_3__.devUseWarning)('Modal');
     true ? warning(!(typeof icon === 'string' && icon.length > 2), 'breaking', `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${icon}\` at https://ant.design/components/icon`) : 0;
  }
  // Icon
  let mergedIcon = icon;
  // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon
  if (!icon && icon !== null) {
    switch (type) {
      case 'info':
        mergedIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ant_design_icons_es_icons_InfoCircleFilled__WEBPACK_IMPORTED_MODULE_4__["default"], null);
        break;
      case 'success':
        mergedIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ant_design_icons_es_icons_CheckCircleFilled__WEBPACK_IMPORTED_MODULE_5__["default"], null);
        break;
      case 'error':
        mergedIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ant_design_icons_es_icons_CloseCircleFilled__WEBPACK_IMPORTED_MODULE_6__["default"], null);
        break;
      default:
        mergedIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ant_design_icons_es_icons_ExclamationCircleFilled__WEBPACK_IMPORTED_MODULE_7__["default"], null);
    }
  }
  // 默认为 true，保持向下兼容
  const mergedOkCancel = okCancel !== null && okCancel !== void 0 ? okCancel : type === 'confirm';
  const autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  const [locale] = (0,_locale__WEBPACK_IMPORTED_MODULE_8__["default"])('Modal');
  const mergedLocale = staticLocale || locale;
  // ================== Locale Text ==================
  const okTextLocale = okText || (mergedOkCancel ? mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.okText : mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.justOkText);
  const cancelTextLocale = cancelText || (mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.cancelText);
  // ================= Context Value =================
  const btnCtxValue = Object.assign({
    autoFocusButton,
    cancelTextLocale,
    okTextLocale,
    mergedOkCancel
  }, resetProps);
  const btnCtxValueMemo = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => btnCtxValue, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.values(btnCtxValue)));
  // ====================== Footer Origin Node ======================
  const footerOriginNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ConfirmCancelBtn__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ConfirmOkBtn__WEBPACK_IMPORTED_MODULE_10__["default"], null));
  const hasTitle = props.title !== undefined && props.title !== null;
  const bodyCls = `${confirmPrefixCls}-body`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: `${confirmPrefixCls}-body-wrapper`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(bodyCls, {
      [`${bodyCls}-has-title`]: hasTitle
    })
  }, mergedIcon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: `${confirmPrefixCls}-paragraph`
  }, hasTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: `${confirmPrefixCls}-title`
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: `${confirmPrefixCls}-content`
  }, props.content))), footer === undefined || typeof footer === 'function' ? ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_context__WEBPACK_IMPORTED_MODULE_11__.ModalContextProvider, {
    value: btnCtxValueMemo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: `${confirmPrefixCls}-btns`
  }, typeof footer === 'function' ? footer(footerOriginNode, {
    OkBtn: _components_ConfirmOkBtn__WEBPACK_IMPORTED_MODULE_10__["default"],
    CancelBtn: _components_ConfirmCancelBtn__WEBPACK_IMPORTED_MODULE_9__["default"]
  }) : footerOriginNode))) : footer, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_style_confirm__WEBPACK_IMPORTED_MODULE_12__["default"], {
    prefixCls: prefixCls
  }));
}
const ConfirmDialog = props => {
  const {
    close,
    zIndex,
    afterClose,
    open,
    keyboard,
    centered,
    getContainer,
    maskStyle,
    direction,
    prefixCls,
    wrapClassName,
    rootPrefixCls,
    bodyStyle,
    closable = false,
    closeIcon,
    modalRender,
    focusTriggerAfterClose,
    onConfirm,
    styles
  } = props;
  if (true) {
    const warning = (0,_util_warning__WEBPACK_IMPORTED_MODULE_3__.devUseWarning)('Modal');
    [['visible', 'open'], ['bodyStyle', 'styles.body'], ['maskStyle', 'styles.mask']].forEach(_ref => {
      let [deprecatedName, newName] = _ref;
      warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
  }
  const confirmPrefixCls = `${prefixCls}-confirm`;
  const width = props.width || 416;
  const style = props.style || {};
  const mask = props.mask === undefined ? true : props.mask;
  // 默认为 false，保持旧版默认行为
  const maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  const classString = classnames__WEBPACK_IMPORTED_MODULE_2___default()(confirmPrefixCls, `${confirmPrefixCls}-${props.type}`, {
    [`${confirmPrefixCls}-rtl`]: direction === 'rtl'
  }, props.className);
  // ========================= zIndex =========================
  const [, token] = (0,_theme_useToken__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const mergedZIndex = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    if (zIndex !== undefined) {
      return zIndex;
    }
    // Static always use max zIndex
    return token.zIndexPopupBase + _util_hooks_useZIndex__WEBPACK_IMPORTED_MODULE_14__.CONTAINER_MAX_OFFSET;
  }, [zIndex, token]);
  // ========================= Render =========================
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_15__["default"], {
    prefixCls: prefixCls,
    className: classString,
    wrapClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [`${confirmPrefixCls}-centered`]: !!props.centered
    }, wrapClassName),
    onCancel: () => {
      close === null || close === void 0 ? void 0 : close({
        triggerCancel: true
      });
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(false);
    },
    open: open,
    title: "",
    footer: null,
    transitionName: (0,_util_motion__WEBPACK_IMPORTED_MODULE_16__.getTransitionName)(rootPrefixCls || '', 'zoom', props.transitionName),
    maskTransitionName: (0,_util_motion__WEBPACK_IMPORTED_MODULE_16__.getTransitionName)(rootPrefixCls || '', 'fade', props.maskTransitionName),
    mask: mask,
    maskClosable: maskClosable,
    style: style,
    styles: Object.assign({
      body: bodyStyle,
      mask: maskStyle
    }, styles),
    width: width,
    zIndex: mergedZIndex,
    afterClose: afterClose,
    keyboard: keyboard,
    centered: centered,
    getContainer: getContainer,
    closable: closable,
    closeIcon: closeIcon,
    modalRender: modalRender,
    focusTriggerAfterClose: focusTriggerAfterClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ConfirmContent, Object.assign({}, props, {
    confirmPrefixCls: confirmPrefixCls
  })));
};
const ConfirmDialogWrapper = props => {
  const {
    rootPrefixCls,
    iconPrefixCls,
    direction,
    theme
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_config_provider__WEBPACK_IMPORTED_MODULE_17__["default"], {
    prefixCls: rootPrefixCls,
    iconPrefixCls: iconPrefixCls,
    direction: direction,
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ConfirmDialog, Object.assign({}, props)));
};
if (true) {
  ConfirmDialog.displayName = 'ConfirmDialog';
  ConfirmDialogWrapper.displayName = 'ConfirmDialogWrapper';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmDialogWrapper);

/***/ }),

/***/ "../node_modules/antd/es/modal/Modal.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/modal/Modal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/es/icons/CloseOutlined */ "../node_modules/@ant-design/icons/es/icons/CloseOutlined.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-dialog */ "../node_modules/rc-dialog/es/index.js");
/* harmony import */ var _util_hooks_useClosable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_util/hooks/useClosable */ "../node_modules/antd/es/_util/hooks/useClosable.js");
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../_util/motion */ "../node_modules/antd/es/_util/motion.js");
/* harmony import */ var _util_styleChecker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_util/styleChecker */ "../node_modules/antd/es/_util/styleChecker.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _util_zindexContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_util/zindexContext */ "../node_modules/antd/es/_util/zindexContext.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _form_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../form/context */ "../node_modules/antd/es/form/context.js");
/* harmony import */ var _space_Compact__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../space/Compact */ "../node_modules/antd/es/space/Compact.js");
/* harmony import */ var _watermark_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../watermark/context */ "../node_modules/antd/es/watermark/context.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared */ "../node_modules/antd/es/modal/shared.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "../node_modules/antd/es/modal/style/index.js");
/* harmony import */ var _util_hooks_useZIndex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_util/hooks/useZIndex */ "../node_modules/antd/es/_util/hooks/useZIndex.js");
/* harmony import */ var _config_provider_hooks_useCSSVarCls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config-provider/hooks/useCSSVarCls */ "../node_modules/antd/es/config-provider/hooks/useCSSVarCls.js");
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

















let mousePosition;
// ref: https://github.com/ant-design/ant-design/issues/15795
const getClickPosition = e => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  };
  // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开
  setTimeout(() => {
    mousePosition = null;
  }, 100);
};
// 只有点击事件支持从鼠标位置动画展开
if ((0,_util_styleChecker__WEBPACK_IMPORTED_MODULE_3__.canUseDocElement)()) {
  document.documentElement.addEventListener('click', getClickPosition, true);
}
const Modal = props => {
  var _a;
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
    modal
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_4__.ConfigContext);
  const handleCancel = e => {
    const {
      onCancel
    } = props;
    onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);
  };
  const handleOk = e => {
    const {
      onOk
    } = props;
    onOk === null || onOk === void 0 ? void 0 : onOk(e);
  };
  if (true) {
    const warning = (0,_util_warning__WEBPACK_IMPORTED_MODULE_5__.devUseWarning)('Modal');
    [['visible', 'open'], ['bodyStyle', 'styles.body'], ['maskStyle', 'styles.mask']].forEach(_ref => {
      let [deprecatedName, newName] = _ref;
      warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
  }
  const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      open,
      wrapClassName,
      centered,
      getContainer,
      closeIcon,
      closable,
      focusTriggerAfterClose = true,
      style,
      // Deprecated
      visible,
      width = 520,
      footer,
      classNames: modalClassNames,
      styles: modalStyles
    } = props,
    restProps = __rest(props, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "closable", "focusTriggerAfterClose", "style", "visible", "width", "footer", "classNames", "styles"]);
  const prefixCls = getPrefixCls('modal', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  // Style
  const rootCls = (0,_config_provider_hooks_useCSSVarCls__WEBPACK_IMPORTED_MODULE_6__["default"])(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,_style__WEBPACK_IMPORTED_MODULE_7__["default"])(prefixCls, rootCls);
  const wrapClassNameExtended = classnames__WEBPACK_IMPORTED_MODULE_1___default()(wrapClassName, {
    [`${prefixCls}-centered`]: !!centered,
    [`${prefixCls}-wrap-rtl`]: direction === 'rtl'
  });
  const dialogFooter = footer !== null && ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared__WEBPACK_IMPORTED_MODULE_8__.Footer, Object.assign({}, props, {
    onOk: handleOk,
    onCancel: handleCancel
  })));
  const [mergedClosable, mergedCloseIcon] = (0,_util_hooks_useClosable__WEBPACK_IMPORTED_MODULE_9__["default"])(closable, closeIcon, icon => (0,_shared__WEBPACK_IMPORTED_MODULE_8__.renderCloseIcon)(prefixCls, icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: `${prefixCls}-close-icon`
  }), true);
  // ============================ Refs ============================
  // Select `ant-modal-content` by `panelRef`
  const panelRef = (0,_watermark_context__WEBPACK_IMPORTED_MODULE_11__.usePanelRef)(`.${prefixCls}-content`);
  // ============================ zIndex ============================
  const [zIndex, contextZIndex] = (0,_util_hooks_useZIndex__WEBPACK_IMPORTED_MODULE_12__.useZIndex)('Modal', restProps.zIndex);
  // =========================== Render ===========================
  return wrapCSSVar( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_space_Compact__WEBPACK_IMPORTED_MODULE_13__.NoCompactStyle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_form_context__WEBPACK_IMPORTED_MODULE_14__.NoFormStyle, {
    status: true,
    override: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_zindexContext__WEBPACK_IMPORTED_MODULE_15__["default"].Provider, {
    value: contextZIndex
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(rc_dialog__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    width: width
  }, restProps, {
    zIndex: zIndex,
    getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
    prefixCls: prefixCls,
    rootClassName: classnames__WEBPACK_IMPORTED_MODULE_1___default()(hashId, rootClassName, cssVarCls, rootCls),
    footer: dialogFooter,
    visible: open !== null && open !== void 0 ? open : visible,
    mousePosition: (_a = restProps.mousePosition) !== null && _a !== void 0 ? _a : mousePosition,
    onClose: handleCancel,
    closable: mergedClosable,
    closeIcon: mergedCloseIcon,
    focusTriggerAfterClose: focusTriggerAfterClose,
    transitionName: (0,_util_motion__WEBPACK_IMPORTED_MODULE_16__.getTransitionName)(rootPrefixCls, 'zoom', props.transitionName),
    maskTransitionName: (0,_util_motion__WEBPACK_IMPORTED_MODULE_16__.getTransitionName)(rootPrefixCls, 'fade', props.maskTransitionName),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(hashId, className, modal === null || modal === void 0 ? void 0 : modal.className),
    style: Object.assign(Object.assign({}, modal === null || modal === void 0 ? void 0 : modal.style), style),
    classNames: Object.assign(Object.assign({
      wrapper: wrapClassNameExtended
    }, modal === null || modal === void 0 ? void 0 : modal.classNames), modalClassNames),
    styles: Object.assign(Object.assign({}, modal === null || modal === void 0 ? void 0 : modal.styles), modalStyles),
    panelRef: panelRef
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "../node_modules/antd/es/modal/components/ConfirmCancelBtn.js":
/*!********************************************************************!*\
  !*** ../node_modules/antd/es/modal/components/ConfirmCancelBtn.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_util/ActionButton */ "../node_modules/antd/es/_util/ActionButton.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "../node_modules/antd/es/modal/context.js");
"use client";




const ConfirmCancelBtn = () => {
  const {
    autoFocusButton,
    cancelButtonProps,
    cancelTextLocale,
    isSilent,
    mergedOkCancel,
    rootPrefixCls,
    close,
    onCancel,
    onConfirm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.ModalContext);
  return mergedOkCancel ? ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_util_ActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isSilent: isSilent,
    actionFn: onCancel,
    close: function () {
      close === null || close === void 0 ? void 0 : close.apply(void 0, arguments);
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(false);
    },
    autoFocus: autoFocusButton === 'cancel',
    buttonProps: cancelButtonProps,
    prefixCls: `${rootPrefixCls}-btn`
  }, cancelTextLocale)) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmCancelBtn);

/***/ }),

/***/ "../node_modules/antd/es/modal/components/ConfirmOkBtn.js":
/*!****************************************************************!*\
  !*** ../node_modules/antd/es/modal/components/ConfirmOkBtn.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_util/ActionButton */ "../node_modules/antd/es/_util/ActionButton.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "../node_modules/antd/es/modal/context.js");
"use client";




const ConfirmOkBtn = () => {
  const {
    autoFocusButton,
    close,
    isSilent,
    okButtonProps,
    rootPrefixCls,
    okTextLocale,
    okType,
    onConfirm,
    onOk
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.ModalContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_util_ActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isSilent: isSilent,
    type: okType || 'primary',
    actionFn: onOk,
    close: function () {
      close === null || close === void 0 ? void 0 : close.apply(void 0, arguments);
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(true);
    },
    autoFocus: autoFocusButton === 'ok',
    buttonProps: okButtonProps,
    prefixCls: `${rootPrefixCls}-btn`
  }, okTextLocale);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmOkBtn);

/***/ }),

/***/ "../node_modules/antd/es/modal/components/NormalCancelBtn.js":
/*!*******************************************************************!*\
  !*** ../node_modules/antd/es/modal/components/NormalCancelBtn.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../button */ "../node_modules/antd/es/button/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "../node_modules/antd/es/modal/context.js");
"use client";




const NormalCancelBtn = () => {
  const {
    cancelButtonProps,
    cancelTextLocale,
    onCancel
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.ModalContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_button__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    onClick: onCancel
  }, cancelButtonProps), cancelTextLocale);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NormalCancelBtn);

/***/ }),

/***/ "../node_modules/antd/es/modal/components/NormalOkBtn.js":
/*!***************************************************************!*\
  !*** ../node_modules/antd/es/modal/components/NormalOkBtn.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../button */ "../node_modules/antd/es/button/index.js");
/* harmony import */ var _button_buttonHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../button/buttonHelpers */ "../node_modules/antd/es/button/buttonHelpers.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "../node_modules/antd/es/modal/context.js");
"use client";





const NormalOkBtn = () => {
  const {
    confirmLoading,
    okButtonProps,
    okType,
    okTextLocale,
    onOk
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.ModalContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_button__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, (0,_button_buttonHelpers__WEBPACK_IMPORTED_MODULE_3__.convertLegacyProps)(okType), {
    loading: confirmLoading,
    onClick: onOk
  }, okButtonProps), okTextLocale);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NormalOkBtn);

/***/ }),

/***/ "../node_modules/antd/es/modal/confirm.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/modal/confirm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ confirm),
/* harmony export */   modalGlobalConfig: () => (/* binding */ modalGlobalConfig),
/* harmony export */   withConfirm: () => (/* binding */ withConfirm),
/* harmony export */   withError: () => (/* binding */ withError),
/* harmony export */   withInfo: () => (/* binding */ withInfo),
/* harmony export */   withSuccess: () => (/* binding */ withSuccess),
/* harmony export */   withWarn: () => (/* binding */ withWarn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_React_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/React/render */ "../node_modules/rc-util/es/React/render.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/index.js");
/* harmony import */ var _ConfirmDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ConfirmDialog */ "../node_modules/antd/es/modal/ConfirmDialog.js");
/* harmony import */ var _destroyFns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./destroyFns */ "../node_modules/antd/es/modal/destroyFns.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale */ "../node_modules/antd/es/modal/locale.js");
"use client";









let defaultRootPrefixCls = '';
function getRootPrefixCls() {
  return defaultRootPrefixCls;
}
const ConfirmDialogWrapper = props => {
  var _a, _b;
  const {
    prefixCls: customizePrefixCls,
    getContainer,
    direction
  } = props;
  const runtimeLocale = (0,_locale__WEBPACK_IMPORTED_MODULE_3__.getConfirmLocale)();
  const config = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_config_provider__WEBPACK_IMPORTED_MODULE_4__.ConfigContext);
  const rootPrefixCls = customizePrefixCls || getRootPrefixCls() || config.getPrefixCls();
  // because Modal.config set rootPrefixCls, which is different from other components
  const prefixCls = customizePrefixCls || `${rootPrefixCls}-modal`;
  let mergedGetContainer = getContainer;
  if (mergedGetContainer === false) {
    mergedGetContainer = undefined;
    if (true) {
       true ? (0,_util_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, 'Modal', 'Static method not support `getContainer` to be `false` since it do not have context env.') : 0;
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ConfirmDialog__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props, {
    rootPrefixCls: rootPrefixCls,
    prefixCls: prefixCls,
    iconPrefixCls: config.iconPrefixCls,
    theme: config.theme,
    direction: direction !== null && direction !== void 0 ? direction : config.direction,
    locale: (_b = (_a = config.locale) === null || _a === void 0 ? void 0 : _a.Modal) !== null && _b !== void 0 ? _b : runtimeLocale,
    getContainer: mergedGetContainer
  }));
};
function confirm(config) {
  const global = (0,_config_provider__WEBPACK_IMPORTED_MODULE_7__.globalConfig)();
  if ( true && !global.holderRender) {
    (0,_config_provider__WEBPACK_IMPORTED_MODULE_7__.warnContext)('Modal');
  }
  const container = document.createDocumentFragment();
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  let currentConfig = Object.assign(Object.assign({}, config), {
    close,
    open: true
  });
  let timeoutId;
  function destroy() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const triggerCancel = args.some(param => param && param.triggerCancel);
    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, [() => {}].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(args.slice(1))));
    }
    for (let i = 0; i < _destroyFns__WEBPACK_IMPORTED_MODULE_8__["default"].length; i++) {
      const fn = _destroyFns__WEBPACK_IMPORTED_MODULE_8__["default"][i];
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      if (fn === close) {
        _destroyFns__WEBPACK_IMPORTED_MODULE_8__["default"].splice(i, 1);
        break;
      }
    }
    (0,rc_util_es_React_render__WEBPACK_IMPORTED_MODULE_2__.unmount)(container);
  }
  function render(props) {
    clearTimeout(timeoutId);
    /**
     * https://github.com/ant-design/ant-design/issues/23623
     *
     * Sync render blocks React event. Let's make this async.
     */
    timeoutId = setTimeout(() => {
      const rootPrefixCls = global.getRootPrefixCls();
      const iconPrefixCls = global.getIconPrefixCls();
      const theme = global.getTheme();
      const dom = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ConfirmDialogWrapper, Object.assign({}, props));
      (0,rc_util_es_React_render__WEBPACK_IMPORTED_MODULE_2__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_config_provider__WEBPACK_IMPORTED_MODULE_7__["default"], {
        prefixCls: rootPrefixCls,
        iconPrefixCls: iconPrefixCls,
        theme: theme
      }, global.holderRender ? global.holderRender(dom) : dom), container);
    });
  }
  function close() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    currentConfig = Object.assign(Object.assign({}, currentConfig), {
      open: false,
      afterClose: () => {
        if (typeof config.afterClose === 'function') {
          config.afterClose();
        }
        destroy.apply(this, args);
      }
    });
    // Legacy support
    if (currentConfig.visible) {
      delete currentConfig.visible;
    }
    render(currentConfig);
  }
  function update(configUpdate) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = Object.assign(Object.assign({}, currentConfig), configUpdate);
    }
    render(currentConfig);
  }
  render(currentConfig);
  _destroyFns__WEBPACK_IMPORTED_MODULE_8__["default"].push(close);
  return {
    destroy: close,
    update
  };
}
function withWarn(props) {
  return Object.assign(Object.assign({}, props), {
    type: 'warning'
  });
}
function withInfo(props) {
  return Object.assign(Object.assign({}, props), {
    type: 'info'
  });
}
function withSuccess(props) {
  return Object.assign(Object.assign({}, props), {
    type: 'success'
  });
}
function withError(props) {
  return Object.assign(Object.assign({}, props), {
    type: 'error'
  });
}
function withConfirm(props) {
  return Object.assign(Object.assign({}, props), {
    type: 'confirm'
  });
}
function modalGlobalConfig(_ref) {
  let {
    rootPrefixCls
  } = _ref;
   true ? (0,_util_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, 'Modal', 'Modal.config is deprecated. Please use ConfigProvider.config instead.') : 0;
  defaultRootPrefixCls = rootPrefixCls;
}

/***/ }),

/***/ "../node_modules/antd/es/modal/context.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/modal/context.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalContext: () => (/* binding */ ModalContext),
/* harmony export */   ModalContextProvider: () => (/* binding */ ModalContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ModalContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
const {
  Provider: ModalContextProvider
} = ModalContext;

/***/ }),

/***/ "../node_modules/antd/es/modal/destroyFns.js":
/*!***************************************************!*\
  !*** ../node_modules/antd/es/modal/destroyFns.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const destroyFns = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (destroyFns);

/***/ }),

/***/ "../node_modules/antd/es/modal/locale.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/modal/locale.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeConfirmLocale: () => (/* binding */ changeConfirmLocale),
/* harmony export */   getConfirmLocale: () => (/* binding */ getConfirmLocale)
/* harmony export */ });
/* harmony import */ var _locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/en_US */ "../node_modules/antd/es/locale/en_US.js");

let runtimeLocale = Object.assign({}, _locale_en_US__WEBPACK_IMPORTED_MODULE_0__["default"].Modal);
let localeList = [];
const generateLocale = () => localeList.reduce((merged, locale) => Object.assign(Object.assign({}, merged), locale), _locale_en_US__WEBPACK_IMPORTED_MODULE_0__["default"].Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    const cloneLocale = Object.assign({}, newLocale);
    localeList.push(cloneLocale);
    runtimeLocale = generateLocale();
    return () => {
      localeList = localeList.filter(locale => locale !== cloneLocale);
      runtimeLocale = generateLocale();
    };
  }
  runtimeLocale = Object.assign({}, _locale_en_US__WEBPACK_IMPORTED_MODULE_0__["default"].Modal);
}
function getConfirmLocale() {
  return runtimeLocale;
}

/***/ }),

/***/ "../node_modules/antd/es/modal/shared.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/modal/shared.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer),
/* harmony export */   renderCloseIcon: () => (/* binding */ renderCloseIcon)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons/es/icons/CloseOutlined */ "../node_modules/@ant-design/icons/es/icons/CloseOutlined.js");
/* harmony import */ var _config_provider_DisabledContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config-provider/DisabledContext */ "../node_modules/antd/es/config-provider/DisabledContext.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../locale */ "../node_modules/antd/es/locale/useLocale.js");
/* harmony import */ var _components_NormalCancelBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NormalCancelBtn */ "../node_modules/antd/es/modal/components/NormalCancelBtn.js");
/* harmony import */ var _components_NormalOkBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/NormalOkBtn */ "../node_modules/antd/es/modal/components/NormalOkBtn.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context */ "../node_modules/antd/es/modal/context.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale */ "../node_modules/antd/es/modal/locale.js");
"use client";










function renderCloseIcon(prefixCls, closeIcon) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: `${prefixCls}-close-x`
  }, closeIcon || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: `${prefixCls}-close-icon`
  }));
}
const Footer = props => {
  const {
    okText,
    okType = 'primary',
    cancelText,
    confirmLoading,
    onOk,
    onCancel,
    okButtonProps,
    cancelButtonProps,
    footer
  } = props;
  const [locale] = (0,_locale__WEBPACK_IMPORTED_MODULE_3__["default"])('Modal', (0,_locale__WEBPACK_IMPORTED_MODULE_4__.getConfirmLocale)());
  // ================== Locale Text ==================
  const okTextLocale = okText || (locale === null || locale === void 0 ? void 0 : locale.okText);
  const cancelTextLocale = cancelText || (locale === null || locale === void 0 ? void 0 : locale.cancelText);
  // ================= Context Value =================
  const btnCtxValue = {
    confirmLoading,
    okButtonProps,
    cancelButtonProps,
    okTextLocale,
    cancelTextLocale,
    okType,
    onOk,
    onCancel
  };
  const btnCtxValueMemo = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => btnCtxValue, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.values(btnCtxValue)));
  let footerNode;
  if (typeof footer === 'function' || typeof footer === 'undefined') {
    footerNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_NormalCancelBtn__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_NormalOkBtn__WEBPACK_IMPORTED_MODULE_6__["default"], null));
    if (typeof footer === 'function') {
      footerNode = footer(footerNode, {
        OkBtn: _components_NormalOkBtn__WEBPACK_IMPORTED_MODULE_6__["default"],
        CancelBtn: _components_NormalCancelBtn__WEBPACK_IMPORTED_MODULE_5__["default"]
      });
    }
    footerNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_context__WEBPACK_IMPORTED_MODULE_7__.ModalContextProvider, {
      value: btnCtxValueMemo
    }, footerNode);
  } else {
    footerNode = footer;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_config_provider_DisabledContext__WEBPACK_IMPORTED_MODULE_8__.DisabledContextProvider, {
    disabled: false
  }, footerNode);
};

/***/ }),

/***/ "../node_modules/antd/es/modal/style/confirm.js":
/*!******************************************************!*\
  !*** ../node_modules/antd/es/modal/style/confirm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "../node_modules/antd/es/modal/style/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style */ "../node_modules/antd/es/style/index.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/genComponentStyleHook.js");
// Style as confirm component




// ============================= Confirm ==============================
const genModalConfirmStyle = token => {
  const {
    componentCls,
    titleFontSize,
    titleLineHeight,
    modalConfirmIconSize,
    fontSize,
    lineHeight,
    modalTitleHeight,
    fontHeight,
    confirmBodyPadding
  } = token;
  const confirmComponentCls = `${componentCls}-confirm`;
  return {
    [confirmComponentCls]: {
      '&-rtl': {
        direction: 'rtl'
      },
      [`${token.antCls}-modal-header`]: {
        display: 'none'
      },
      [`${confirmComponentCls}-body-wrapper`]: Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__.clearFix)()),
      [`&${componentCls} ${componentCls}-body`]: {
        padding: confirmBodyPadding
      },
      // ====================== Body ======================
      [`${confirmComponentCls}-body`]: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'start',
        [`> ${token.iconCls}`]: {
          flex: 'none',
          fontSize: modalConfirmIconSize,
          marginInlineEnd: token.confirmIconMarginInlineEnd,
          marginTop: token.calc(token.calc(fontHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
        },
        [`&-has-title > ${token.iconCls}`]: {
          marginTop: token.calc(token.calc(modalTitleHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
        }
      },
      [`${confirmComponentCls}-paragraph`]: {
        display: 'flex',
        flexDirection: 'column',
        flex: 'auto',
        rowGap: token.marginXS,
        maxWidth: `calc(100% - ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.calc(token.modalConfirmIconSize).add(token.marginSM).equal())})`
      },
      [`${confirmComponentCls}-title`]: {
        color: token.colorTextHeading,
        fontWeight: token.fontWeightStrong,
        fontSize: titleFontSize,
        lineHeight: titleLineHeight
      },
      [`${confirmComponentCls}-content`]: {
        color: token.colorText,
        fontSize,
        lineHeight
      },
      // ===================== Footer =====================
      [`${confirmComponentCls}-btns`]: {
        textAlign: 'end',
        marginTop: token.confirmBtnsMarginTop,
        [`${token.antCls}-btn + ${token.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: token.marginXS
        }
      }
    },
    [`${confirmComponentCls}-error ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorError
    },
    [`${confirmComponentCls}-warning ${confirmComponentCls}-body > ${token.iconCls},
        ${confirmComponentCls}-confirm ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorWarning
    },
    [`${confirmComponentCls}-info ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorInfo
    },
    [`${confirmComponentCls}-success ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorSuccess
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_2__.genSubStyleComponent)(['Modal', 'confirm'], token => {
  const modalToken = (0,___WEBPACK_IMPORTED_MODULE_3__.prepareToken)(token);
  return [genModalConfirmStyle(modalToken)];
}, ___WEBPACK_IMPORTED_MODULE_3__.prepareComponentToken, {
  // confirm is weak than modal since no conflict here
  order: -1000
}));

/***/ }),

/***/ "../node_modules/antd/es/modal/style/index.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/modal/style/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   genModalMaskStyle: () => (/* binding */ genModalMaskStyle),
/* harmony export */   prepareComponentToken: () => (/* binding */ prepareComponentToken),
/* harmony export */   prepareToken: () => (/* binding */ prepareToken)
/* harmony export */ });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style */ "../node_modules/antd/es/style/index.js");
/* harmony import */ var _style_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style/motion */ "../node_modules/antd/es/style/motion/fade.js");
/* harmony import */ var _style_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../style/motion */ "../node_modules/antd/es/style/motion/zoom.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/statistic.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/genComponentStyleHook.js");
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");




function box(position) {
  return {
    position,
    inset: 0
  };
}
const genModalMaskStyle = token => {
  const {
    componentCls,
    antCls
  } = token;
  return [{
    [`${componentCls}-root`]: {
      [`${componentCls}${antCls}-zoom-enter, ${componentCls}${antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: 'none',
        opacity: 0,
        animationDuration: token.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: 'none'
      },
      // https://github.com/ant-design/ant-design/issues/37329
      // https://github.com/ant-design/ant-design/issues/40272
      [`${componentCls}${antCls}-zoom-leave ${componentCls}-content`]: {
        pointerEvents: 'none'
      },
      [`${componentCls}-mask`]: Object.assign(Object.assign({}, box('fixed')), {
        zIndex: token.zIndexPopupBase,
        height: '100%',
        backgroundColor: token.colorBgMask,
        pointerEvents: 'none',
        [`${componentCls}-hidden`]: {
          display: 'none'
        }
      }),
      [`${componentCls}-wrap`]: Object.assign(Object.assign({}, box('fixed')), {
        zIndex: token.zIndexPopupBase,
        overflow: 'auto',
        outline: 0,
        WebkitOverflowScrolling: 'touch',
        // Note: Firefox not support `:has` yet
        [`&:has(${componentCls}${antCls}-zoom-enter), &:has(${componentCls}${antCls}-zoom-appear)`]: {
          pointerEvents: 'none'
        }
      })
    }
  }, {
    [`${componentCls}-root`]: (0,_style_motion__WEBPACK_IMPORTED_MODULE_1__.initFadeMotion)(token)
  }];
};
const genModalStyle = token => {
  const {
    componentCls
  } = token;
  return [
  // ======================== Root =========================
  {
    [`${componentCls}-root`]: {
      [`${componentCls}-wrap-rtl`]: {
        direction: 'rtl'
      },
      [`${componentCls}-centered`]: {
        textAlign: 'center',
        '&::before': {
          display: 'inline-block',
          width: 0,
          height: '100%',
          verticalAlign: 'middle',
          content: '""'
        },
        [componentCls]: {
          top: 0,
          display: 'inline-block',
          paddingBottom: 0,
          textAlign: 'start',
          verticalAlign: 'middle'
        }
      },
      [`@media (max-width: ${token.screenSMMax}px)`]: {
        [componentCls]: {
          maxWidth: 'calc(100vw - 16px)',
          margin: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.marginXS)} auto`
        },
        [`${componentCls}-centered`]: {
          [componentCls]: {
            flex: 1
          }
        }
      }
    }
  },
  // ======================== Modal ========================
  {
    [componentCls]: Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_2__.resetComponent)(token)), {
      pointerEvents: 'none',
      position: 'relative',
      top: 100,
      width: 'auto',
      maxWidth: `calc(100vw - ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.calc(token.margin).mul(2).equal())})`,
      margin: '0 auto',
      paddingBottom: token.paddingLG,
      [`${componentCls}-title`]: {
        margin: 0,
        color: token.titleColor,
        fontWeight: token.fontWeightStrong,
        fontSize: token.titleFontSize,
        lineHeight: token.titleLineHeight,
        wordWrap: 'break-word'
      },
      [`${componentCls}-content`]: {
        position: 'relative',
        backgroundColor: token.contentBg,
        backgroundClip: 'padding-box',
        border: 0,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadow,
        pointerEvents: 'auto',
        padding: token.contentPadding
      },
      [`${componentCls}-close`]: Object.assign({
        position: 'absolute',
        top: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
        insetInlineEnd: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
        zIndex: token.calc(token.zIndexPopupBase).add(10).equal(),
        padding: 0,
        color: token.modalCloseIconColor,
        fontWeight: token.fontWeightStrong,
        lineHeight: 1,
        textDecoration: 'none',
        background: 'transparent',
        borderRadius: token.borderRadiusSM,
        width: token.modalCloseBtnSize,
        height: token.modalCloseBtnSize,
        border: 0,
        outline: 0,
        cursor: 'pointer',
        transition: `color ${token.motionDurationMid}, background-color ${token.motionDurationMid}`,
        '&-x': {
          display: 'flex',
          fontSize: token.fontSizeLG,
          fontStyle: 'normal',
          lineHeight: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.modalCloseBtnSize)}`,
          justifyContent: 'center',
          textTransform: 'none',
          textRendering: 'auto'
        },
        '&:hover': {
          color: token.modalIconHoverColor,
          backgroundColor: token.closeBtnHoverBg,
          textDecoration: 'none'
        },
        '&:active': {
          backgroundColor: token.closeBtnActiveBg
        }
      }, (0,_style__WEBPACK_IMPORTED_MODULE_2__.genFocusStyle)(token)),
      [`${componentCls}-header`]: {
        color: token.colorText,
        background: token.headerBg,
        borderRadius: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.borderRadiusLG)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.borderRadiusLG)} 0 0`,
        marginBottom: token.headerMarginBottom,
        padding: token.headerPadding,
        borderBottom: token.headerBorderBottom
      },
      [`${componentCls}-body`]: {
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        wordWrap: 'break-word',
        padding: token.bodyPadding
      },
      [`${componentCls}-footer`]: {
        textAlign: 'end',
        background: token.footerBg,
        marginTop: token.footerMarginTop,
        padding: token.footerPadding,
        borderTop: token.footerBorderTop,
        borderRadius: token.footerBorderRadius,
        [`> ${token.antCls}-btn + ${token.antCls}-btn`]: {
          marginInlineStart: token.marginXS
        }
      },
      [`${componentCls}-open`]: {
        overflow: 'hidden'
      }
    })
  },
  // ======================== Pure =========================
  {
    [`${componentCls}-pure-panel`]: {
      top: 'auto',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      [`${componentCls}-content,
          ${componentCls}-body,
          ${componentCls}-confirm-body-wrapper`]: {
        display: 'flex',
        flexDirection: 'column',
        flex: 'auto'
      },
      [`${componentCls}-confirm-body`]: {
        marginBottom: 'auto'
      }
    }
  }];
};
const genRTLStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-root`]: {
      [`${componentCls}-wrap-rtl`]: {
        direction: 'rtl',
        [`${componentCls}-confirm-body`]: {
          direction: 'rtl'
        }
      }
    }
  };
};
// ============================== Export ==============================
const prepareToken = token => {
  const headerPaddingVertical = token.padding;
  const headerFontSize = token.fontSizeHeading5;
  const headerLineHeight = token.lineHeightHeading5;
  const modalToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_3__.merge)(token, {
    modalHeaderHeight: token.calc(token.calc(headerLineHeight).mul(headerFontSize).equal()).add(token.calc(headerPaddingVertical).mul(2).equal()).equal(),
    modalFooterBorderColorSplit: token.colorSplit,
    modalFooterBorderStyle: token.lineType,
    modalFooterBorderWidth: token.lineWidth,
    modalIconHoverColor: token.colorIconHover,
    modalCloseIconColor: token.colorIcon,
    modalCloseBtnSize: token.fontHeight,
    modalConfirmIconSize: token.fontHeight,
    modalTitleHeight: token.calc(token.titleFontSize).mul(token.titleLineHeight).equal()
  });
  return modalToken;
};
const prepareComponentToken = token => ({
  footerBg: 'transparent',
  headerBg: token.colorBgElevated,
  titleLineHeight: token.lineHeightHeading5,
  titleFontSize: token.fontSizeHeading5,
  contentBg: token.colorBgElevated,
  titleColor: token.colorTextHeading,
  // internal
  closeBtnHoverBg: token.wireframe ? 'transparent' : token.colorFillContent,
  closeBtnActiveBg: token.wireframe ? 'transparent' : token.colorFillContentHover,
  contentPadding: token.wireframe ? 0 : `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.paddingMD)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.paddingContentHorizontalLG)}`,
  headerPadding: token.wireframe ? `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.padding)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.paddingLG)}` : 0,
  headerBorderBottom: token.wireframe ? `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : 'none',
  headerMarginBottom: token.wireframe ? 0 : token.marginXS,
  bodyPadding: token.wireframe ? token.paddingLG : 0,
  footerPadding: token.wireframe ? `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.paddingXS)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.padding)}` : 0,
  footerBorderTop: token.wireframe ? `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : 'none',
  footerBorderRadius: token.wireframe ? `0 0 ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.borderRadiusLG)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.borderRadiusLG)}` : 0,
  footerMarginTop: token.wireframe ? 0 : token.marginSM,
  confirmBodyPadding: token.wireframe ? `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.padding * 2)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.padding * 2)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.paddingLG)}` : 0,
  confirmIconMarginInlineEnd: token.wireframe ? token.margin : token.marginSM,
  confirmBtnsMarginTop: token.wireframe ? token.marginLG : token.marginSM
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_4__.genStyleHooks)('Modal', token => {
  const modalToken = prepareToken(token);
  return [genModalStyle(modalToken), genRTLStyle(modalToken), genModalMaskStyle(modalToken), (0,_style_motion__WEBPACK_IMPORTED_MODULE_5__.initZoomMotion)(modalToken, 'zoom')];
}, prepareComponentToken, {
  unitless: {
    titleLineHeight: true
  }
}));

/***/ }),

/***/ "../node_modules/antd/es/modal/useModal/HookModal.js":
/*!***********************************************************!*\
  !*** ../node_modules/antd/es/modal/useModal/HookModal.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _locale_en_US__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../locale/en_US */ "../node_modules/antd/es/locale/en_US.js");
/* harmony import */ var _locale_useLocale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../locale/useLocale */ "../node_modules/antd/es/locale/useLocale.js");
/* harmony import */ var _ConfirmDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ConfirmDialog */ "../node_modules/antd/es/modal/ConfirmDialog.js");
"use client";


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const HookModal = (_a, ref) => {
  var _b;
  var {
      afterClose: hookAfterClose,
      config
    } = _a,
    restProps = __rest(_a, ["afterClose", "config"]);
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(true);
  const [innerConfig, setInnerConfig] = react__WEBPACK_IMPORTED_MODULE_1__.useState(config);
  const {
    direction,
    getPrefixCls
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_2__.ConfigContext);
  const prefixCls = getPrefixCls('modal');
  const rootPrefixCls = getPrefixCls();
  const afterClose = () => {
    var _a;
    hookAfterClose();
    (_a = innerConfig.afterClose) === null || _a === void 0 ? void 0 : _a.call(innerConfig);
  };
  const close = function () {
    setOpen(false);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const triggerCancel = args.some(param => param && param.triggerCancel);
    if (innerConfig.onCancel && triggerCancel) {
      innerConfig.onCancel.apply(innerConfig, [() => {}].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(args.slice(1))));
    }
  };
  react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle(ref, () => ({
    destroy: close,
    update: newConfig => {
      setInnerConfig(originConfig => Object.assign(Object.assign({}, originConfig), newConfig));
    }
  }));
  const mergedOkCancel = (_b = innerConfig.okCancel) !== null && _b !== void 0 ? _b : innerConfig.type === 'confirm';
  const [contextLocale] = (0,_locale_useLocale__WEBPACK_IMPORTED_MODULE_3__["default"])('Modal', _locale_en_US__WEBPACK_IMPORTED_MODULE_4__["default"].Modal);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ConfirmDialog__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({
    prefixCls: prefixCls,
    rootPrefixCls: rootPrefixCls
  }, innerConfig, {
    close: close,
    open: open,
    afterClose: afterClose,
    okText: innerConfig.okText || (mergedOkCancel ? contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.okText : contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.justOkText),
    direction: innerConfig.direction || direction,
    cancelText: innerConfig.cancelText || (contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.cancelText)
  }, restProps));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(HookModal));

/***/ }),

/***/ "../node_modules/antd/es/modal/useModal/index.js":
/*!*******************************************************!*\
  !*** ../node_modules/antd/es/modal/useModal/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_hooks_usePatchElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_util/hooks/usePatchElement */ "../node_modules/antd/es/_util/hooks/usePatchElement.js");
/* harmony import */ var _confirm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../confirm */ "../node_modules/antd/es/modal/confirm.js");
/* harmony import */ var _destroyFns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../destroyFns */ "../node_modules/antd/es/modal/destroyFns.js");
/* harmony import */ var _HookModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HookModal */ "../node_modules/antd/es/modal/useModal/HookModal.js");
"use client";







let uuid = 0;
const ElementsHolder = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((_props, ref) => {
  const [elements, patchElement] = (0,_util_hooks_usePatchElement__WEBPACK_IMPORTED_MODULE_2__["default"])();
  react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle(ref, () => ({
    patchElement
  }), []);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, elements);
}));
function useModal() {
  const holderRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  // ========================== Effect ==========================
  const [actionQueue, setActionQueue] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (actionQueue.length) {
      const cloneQueue = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(actionQueue);
      cloneQueue.forEach(action => {
        action();
      });
      setActionQueue([]);
    }
  }, [actionQueue]);
  // =========================== Hook ===========================
  const getConfirmFunc = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(withFunc => function hookConfirm(config) {
    var _a;
    uuid += 1;
    const modalRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createRef();
    // Proxy to promise with `onClose`
    let resolvePromise;
    const promise = new Promise(resolve => {
      resolvePromise = resolve;
    });
    let silent = false;
    let closeFunc;
    const modal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_HookModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: `modal-${uuid}`,
      config: withFunc(config),
      ref: modalRef,
      afterClose: () => {
        closeFunc === null || closeFunc === void 0 ? void 0 : closeFunc();
      },
      isSilent: () => silent,
      onConfirm: confirmed => {
        resolvePromise(confirmed);
      }
    });
    closeFunc = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.patchElement(modal);
    if (closeFunc) {
      _destroyFns__WEBPACK_IMPORTED_MODULE_4__["default"].push(closeFunc);
    }
    const instance = {
      destroy: () => {
        function destroyAction() {
          var _a;
          (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
        }
        if (modalRef.current) {
          destroyAction();
        } else {
          setActionQueue(prev => [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev), [destroyAction]));
        }
      },
      update: newConfig => {
        function updateAction() {
          var _a;
          (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.update(newConfig);
        }
        if (modalRef.current) {
          updateAction();
        } else {
          setActionQueue(prev => [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev), [updateAction]));
        }
      },
      then: resolve => {
        silent = true;
        return promise.then(resolve);
      }
    };
    return instance;
  }, []);
  const fns = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
    info: getConfirmFunc(_confirm__WEBPACK_IMPORTED_MODULE_5__.withInfo),
    success: getConfirmFunc(_confirm__WEBPACK_IMPORTED_MODULE_5__.withSuccess),
    error: getConfirmFunc(_confirm__WEBPACK_IMPORTED_MODULE_5__.withError),
    warning: getConfirmFunc(_confirm__WEBPACK_IMPORTED_MODULE_5__.withWarn),
    confirm: getConfirmFunc(_confirm__WEBPACK_IMPORTED_MODULE_5__.withConfirm)
  }), []);
  return [fns, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ElementsHolder, {
    key: "modal-holder",
    ref: holderRef
  })];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useModal);

/***/ }),

/***/ "../node_modules/antd/es/notification/PurePanel.js":
/*!*********************************************************!*\
  !*** ../node_modules/antd/es/notification/PurePanel.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PureContent: () => (/* binding */ PureContent),
/* harmony export */   TypeIcon: () => (/* binding */ TypeIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getCloseIcon: () => (/* binding */ getCloseIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons_es_icons_CheckCircleFilled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons/es/icons/CheckCircleFilled */ "../node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js");
/* harmony import */ var _ant_design_icons_es_icons_CloseCircleFilled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/es/icons/CloseCircleFilled */ "../node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js");
/* harmony import */ var _ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/es/icons/CloseOutlined */ "../node_modules/@ant-design/icons/es/icons/CloseOutlined.js");
/* harmony import */ var _ant_design_icons_es_icons_ExclamationCircleFilled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/es/icons/ExclamationCircleFilled */ "../node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js");
/* harmony import */ var _ant_design_icons_es_icons_InfoCircleFilled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/es/icons/InfoCircleFilled */ "../node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js");
/* harmony import */ var _ant_design_icons_es_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/es/icons/LoadingOutlined */ "../node_modules/@ant-design/icons/es/icons/LoadingOutlined.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-notification */ "../node_modules/rc-notification/es/index.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _config_provider_hooks_useCSSVarCls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config-provider/hooks/useCSSVarCls */ "../node_modules/antd/es/config-provider/hooks/useCSSVarCls.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style */ "../node_modules/antd/es/notification/style/index.js");
/* harmony import */ var _style_pure_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style/pure-panel */ "../node_modules/antd/es/notification/style/pure-panel.js");
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};













const TypeIcon = {
  info: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_InfoCircleFilled__WEBPACK_IMPORTED_MODULE_3__["default"], null),
  success: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_CheckCircleFilled__WEBPACK_IMPORTED_MODULE_4__["default"], null),
  error: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_CloseCircleFilled__WEBPACK_IMPORTED_MODULE_5__["default"], null),
  warning: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_ExclamationCircleFilled__WEBPACK_IMPORTED_MODULE_6__["default"], null),
  loading: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_7__["default"], null)
};
function getCloseIcon(prefixCls, closeIcon) {
  if (closeIcon === null || closeIcon === false) {
    return null;
  }
  return closeIcon || ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: `${prefixCls}-close-x`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: `${prefixCls}-close-icon`
  })));
}
const typeToIcon = {
  success: _ant_design_icons_es_icons_CheckCircleFilled__WEBPACK_IMPORTED_MODULE_4__["default"],
  info: _ant_design_icons_es_icons_InfoCircleFilled__WEBPACK_IMPORTED_MODULE_3__["default"],
  error: _ant_design_icons_es_icons_CloseCircleFilled__WEBPACK_IMPORTED_MODULE_5__["default"],
  warning: _ant_design_icons_es_icons_ExclamationCircleFilled__WEBPACK_IMPORTED_MODULE_6__["default"]
};
const PureContent = props => {
  const {
    prefixCls,
    icon,
    type,
    message,
    description,
    btn,
    role = 'alert'
  } = props;
  let iconNode = null;
  if (icon) {
    iconNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: `${prefixCls}-icon`
    }, icon);
  } else if (type) {
    iconNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(typeToIcon[type] || null, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(`${prefixCls}-icon`, `${prefixCls}-icon-${type}`)
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      [`${prefixCls}-with-icon`]: iconNode
    }),
    role: role
  }, iconNode, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: `${prefixCls}-message`
  }, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: `${prefixCls}-description`
  }, description), btn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: `${prefixCls}-btn`
  }, btn));
};
/** @private Internal Component. Do not use in your production. */
const PurePanel = props => {
  const {
      prefixCls: staticPrefixCls,
      className,
      icon,
      type,
      message,
      description,
      btn,
      closable = true,
      closeIcon,
      className: notificationClassName
    } = props,
    restProps = __rest(props, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "closable", "closeIcon", "className"]);
  const {
    getPrefixCls
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_9__.ConfigContext);
  const prefixCls = staticPrefixCls || getPrefixCls('notification');
  const noticePrefixCls = `${prefixCls}-notice`;
  const rootCls = (0,_config_provider_hooks_useCSSVarCls__WEBPACK_IMPORTED_MODULE_10__["default"])(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,_style__WEBPACK_IMPORTED_MODULE_11__["default"])(prefixCls, rootCls);
  return wrapCSSVar( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(`${noticePrefixCls}-pure-panel`, hashId, className, cssVarCls, rootCls)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style_pure_panel__WEBPACK_IMPORTED_MODULE_12__["default"], {
    prefixCls: prefixCls
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(rc_notification__WEBPACK_IMPORTED_MODULE_2__.Notice, Object.assign({}, restProps, {
    prefixCls: prefixCls,
    eventKey: "pure",
    duration: null,
    closable: closable,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      notificationClassName
    }),
    closeIcon: getCloseIcon(prefixCls, closeIcon),
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PureContent, {
      prefixCls: noticePrefixCls,
      icon: icon,
      type: type,
      message: message,
      description: description,
      btn: btn
    })
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurePanel);

/***/ }),

/***/ "../node_modules/antd/es/notification/interface.js":
/*!*********************************************************!*\
  !*** ../node_modules/antd/es/notification/interface.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationPlacements: () => (/* binding */ NotificationPlacements)
/* harmony export */ });
const NotificationPlacements = ['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight'];

/***/ }),

/***/ "../node_modules/antd/es/notification/style/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/antd/es/notification/style/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   genNoticeStyle: () => (/* binding */ genNoticeStyle),
/* harmony export */   prepareComponentToken: () => (/* binding */ prepareComponentToken),
/* harmony export */   prepareNotificationToken: () => (/* binding */ prepareNotificationToken)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var _util_hooks_useZIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_util/hooks/useZIndex */ "../node_modules/antd/es/_util/hooks/useZIndex.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style */ "../node_modules/antd/es/style/index.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/statistic.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/genComponentStyleHook.js");
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placement */ "../node_modules/antd/es/notification/style/placement.js");
/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stack */ "../node_modules/antd/es/notification/style/stack.js");






const genNoticeStyle = token => {
  const {
    iconCls,
    componentCls,
    // .ant-notification
    boxShadow,
    fontSizeLG,
    notificationMarginBottom,
    borderRadiusLG,
    colorSuccess,
    colorInfo,
    colorWarning,
    colorError,
    colorTextHeading,
    notificationBg,
    notificationPadding,
    notificationMarginEdge,
    fontSize,
    lineHeight,
    width,
    notificationIconSize,
    colorText
  } = token;
  const noticeCls = `${componentCls}-notice`;
  return {
    position: 'relative',
    marginBottom: notificationMarginBottom,
    marginInlineStart: 'auto',
    background: notificationBg,
    borderRadius: borderRadiusLG,
    boxShadow,
    [noticeCls]: {
      padding: notificationPadding,
      width,
      maxWidth: `calc(100vw - ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.calc(notificationMarginEdge).mul(2).equal())})`,
      overflow: 'hidden',
      lineHeight,
      wordWrap: 'break-word'
    },
    [`${componentCls}-close-icon`]: {
      fontSize,
      cursor: 'pointer'
    },
    [`${noticeCls}-message`]: {
      marginBottom: token.marginXS,
      color: colorTextHeading,
      fontSize: fontSizeLG,
      lineHeight: token.lineHeightLG
    },
    [`${noticeCls}-description`]: {
      fontSize,
      color: colorText
    },
    [`${noticeCls}-closable ${noticeCls}-message`]: {
      paddingInlineEnd: token.paddingLG
    },
    [`${noticeCls}-with-icon ${noticeCls}-message`]: {
      marginBottom: token.marginXS,
      marginInlineStart: token.calc(token.marginSM).add(notificationIconSize).equal(),
      fontSize: fontSizeLG
    },
    [`${noticeCls}-with-icon ${noticeCls}-description`]: {
      marginInlineStart: token.calc(token.marginSM).add(notificationIconSize).equal(),
      fontSize
    },
    // Icon & color style in different selector level
    // https://github.com/ant-design/ant-design/issues/16503
    // https://github.com/ant-design/ant-design/issues/15512
    [`${noticeCls}-icon`]: {
      position: 'absolute',
      fontSize: notificationIconSize,
      lineHeight: 1,
      // icon-font
      [`&-success${iconCls}`]: {
        color: colorSuccess
      },
      [`&-info${iconCls}`]: {
        color: colorInfo
      },
      [`&-warning${iconCls}`]: {
        color: colorWarning
      },
      [`&-error${iconCls}`]: {
        color: colorError
      }
    },
    [`${noticeCls}-close`]: {
      position: 'absolute',
      top: token.notificationPaddingVertical,
      insetInlineEnd: token.notificationPaddingHorizontal,
      color: token.colorIcon,
      outline: 'none',
      width: token.notificationCloseButtonSize,
      height: token.notificationCloseButtonSize,
      borderRadius: token.borderRadiusSM,
      transition: `background-color ${token.motionDurationMid}, color ${token.motionDurationMid}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        color: token.colorIconHover,
        backgroundColor: token.closeBtnHoverBg
      }
    },
    [`${noticeCls}-btn`]: {
      float: 'right',
      marginTop: token.marginSM
    }
  };
};
const genNotificationStyle = token => {
  const {
    componentCls,
    // .ant-notification
    notificationMarginBottom,
    notificationMarginEdge,
    motionDurationMid,
    motionEaseInOut
  } = token;
  const noticeCls = `${componentCls}-notice`;
  const fadeOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antNotificationFadeOut', {
    '0%': {
      maxHeight: token.animationMaxHeight,
      marginBottom: notificationMarginBottom
    },
    '100%': {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }
  });
  return [
  // ============================ Holder ============================
  {
    [componentCls]: Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__.resetComponent)(token)), {
      position: 'fixed',
      zIndex: token.zIndexPopup,
      marginRight: {
        value: notificationMarginEdge,
        _skip_check_: true
      },
      [`${componentCls}-hook-holder`]: {
        position: 'relative'
      },
      //  animation
      [`${componentCls}-fade-appear-prepare`]: {
        opacity: '0 !important'
      },
      [`${componentCls}-fade-enter, ${componentCls}-fade-appear`]: {
        animationDuration: token.motionDurationMid,
        animationTimingFunction: motionEaseInOut,
        animationFillMode: 'both',
        opacity: 0,
        animationPlayState: 'paused'
      },
      [`${componentCls}-fade-leave`]: {
        animationTimingFunction: motionEaseInOut,
        animationFillMode: 'both',
        animationDuration: motionDurationMid,
        animationPlayState: 'paused'
      },
      [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
        animationPlayState: 'running'
      },
      [`${componentCls}-fade-leave${componentCls}-fade-leave-active`]: {
        animationName: fadeOut,
        animationPlayState: 'running'
      },
      // RTL
      '&-rtl': {
        direction: 'rtl',
        [`${noticeCls}-btn`]: {
          float: 'left'
        }
      }
    })
  },
  // ============================ Notice ============================
  {
    [componentCls]: {
      [`${noticeCls}-wrapper`]: Object.assign({}, genNoticeStyle(token))
    }
  }];
};
// ============================== Export ==============================
const prepareComponentToken = token => ({
  zIndexPopup: token.zIndexPopupBase + _util_hooks_useZIndex__WEBPACK_IMPORTED_MODULE_2__.CONTAINER_MAX_OFFSET + 50,
  width: 384,
  closeBtnHoverBg: token.wireframe ? 'transparent' : token.colorFillContent
});
const prepareNotificationToken = token => {
  const notificationPaddingVertical = token.paddingMD;
  const notificationPaddingHorizontal = token.paddingLG;
  const notificationToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_3__.merge)(token, {
    notificationBg: token.colorBgElevated,
    notificationPaddingVertical,
    notificationPaddingHorizontal,
    notificationIconSize: token.calc(token.fontSizeLG).mul(token.lineHeightLG).equal(),
    notificationCloseButtonSize: token.calc(token.controlHeightLG).mul(0.55).equal(),
    notificationMarginBottom: token.margin,
    notificationPadding: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.paddingMD)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.paddingContentHorizontalLG)}`,
    notificationMarginEdge: token.marginLG,
    animationMaxHeight: 150,
    notificationStackLayer: 3
  });
  return notificationToken;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_4__.genStyleHooks)('Notification', token => {
  const notificationToken = prepareNotificationToken(token);
  return [genNotificationStyle(notificationToken), (0,_placement__WEBPACK_IMPORTED_MODULE_5__["default"])(notificationToken), (0,_stack__WEBPACK_IMPORTED_MODULE_6__["default"])(notificationToken)];
}, prepareComponentToken));

/***/ }),

/***/ "../node_modules/antd/es/notification/style/placement.js":
/*!***************************************************************!*\
  !*** ../node_modules/antd/es/notification/style/placement.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");

const genNotificationPlacementStyle = token => {
  const {
    componentCls,
    notificationMarginEdge,
    animationMaxHeight
  } = token;
  const noticeCls = `${componentCls}-notice`;
  const rightFadeIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antNotificationFadeIn', {
    '0%': {
      transform: `translate3d(100%, 0, 0)`,
      opacity: 0
    },
    '100%': {
      transform: `translate3d(0, 0, 0)`,
      opacity: 1
    }
  });
  const topFadeIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antNotificationTopFadeIn', {
    '0%': {
      top: -animationMaxHeight,
      opacity: 0
    },
    '100%': {
      top: 0,
      opacity: 1
    }
  });
  const bottomFadeIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antNotificationBottomFadeIn', {
    '0%': {
      bottom: token.calc(animationMaxHeight).mul(-1).equal(),
      opacity: 0
    },
    '100%': {
      bottom: 0,
      opacity: 1
    }
  });
  const leftFadeIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antNotificationLeftFadeIn', {
    '0%': {
      transform: `translate3d(-100%, 0, 0)`,
      opacity: 0
    },
    '100%': {
      transform: `translate3d(0, 0, 0)`,
      opacity: 1
    }
  });
  return {
    [componentCls]: {
      [`&${componentCls}-top, &${componentCls}-bottom`]: {
        marginInline: 0,
        [noticeCls]: {
          marginInline: 'auto auto'
        }
      },
      [`&${componentCls}-top`]: {
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: topFadeIn
        }
      },
      [`&${componentCls}-bottom`]: {
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: bottomFadeIn
        }
      },
      [`&${componentCls}-topRight, &${componentCls}-bottomRight`]: {
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: rightFadeIn
        }
      },
      [`&${componentCls}-topLeft, &${componentCls}-bottomLeft`]: {
        marginRight: {
          value: 0,
          _skip_check_: true
        },
        marginLeft: {
          value: notificationMarginEdge,
          _skip_check_: true
        },
        [noticeCls]: {
          marginInlineEnd: 'auto',
          marginInlineStart: 0
        },
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: leftFadeIn
        }
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genNotificationPlacementStyle);

/***/ }),

/***/ "../node_modules/antd/es/notification/style/pure-panel.js":
/*!****************************************************************!*\
  !*** ../node_modules/antd/es/notification/style/pure-panel.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/genComponentStyleHook.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "../node_modules/antd/es/notification/style/index.js");
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__.genSubStyleComponent)(['Notification', 'PurePanel'], token => {
  const noticeCls = `${token.componentCls}-notice`;
  const notificationToken = (0,___WEBPACK_IMPORTED_MODULE_2__.prepareNotificationToken)(token);
  return {
    [`${noticeCls}-pure-panel`]: Object.assign(Object.assign({}, (0,___WEBPACK_IMPORTED_MODULE_2__.genNoticeStyle)(notificationToken)), {
      width: notificationToken.width,
      maxWidth: `calc(100vw - ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.calc(notificationToken.notificationMarginEdge).mul(2).equal())})`,
      margin: 0
    })
  };
}, ___WEBPACK_IMPORTED_MODULE_2__.prepareComponentToken));

/***/ }),

/***/ "../node_modules/antd/es/notification/style/stack.js":
/*!***********************************************************!*\
  !*** ../node_modules/antd/es/notification/style/stack.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interface */ "../node_modules/antd/es/notification/interface.js");

const placementAlignProperty = {
  topLeft: 'left',
  topRight: 'right',
  bottomLeft: 'left',
  bottomRight: 'right',
  top: 'left',
  bottom: 'left'
};
const genPlacementStackStyle = (token, placement) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-${placement}`]: {
      [`&${componentCls}-stack > ${componentCls}-notice-wrapper`]: {
        [placement.startsWith('top') ? 'top' : 'bottom']: 0,
        [placementAlignProperty[placement]]: {
          value: 0,
          _skip_check_: true
        }
      }
    }
  };
};
const genStackChildrenStyle = token => {
  const childrenStyle = {};
  for (let i = 1; i < token.notificationStackLayer; i++) {
    childrenStyle[`&:nth-last-child(${i + 1})`] = {
      overflow: 'hidden',
      [`& > ${token.componentCls}-notice`]: {
        opacity: 0,
        transition: `opacity ${token.motionDurationMid}`
      }
    };
  }
  return Object.assign({
    [`&:not(:nth-last-child(-n+${token.notificationStackLayer}))`]: {
      opacity: 0,
      overflow: 'hidden',
      color: 'transparent',
      pointerEvents: 'none'
    }
  }, childrenStyle);
};
const genStackedNoticeStyle = token => {
  const childrenStyle = {};
  for (let i = 1; i < token.notificationStackLayer; i++) {
    childrenStyle[`&:nth-last-child(${i + 1})`] = {
      background: token.colorBgBlur,
      backdropFilter: 'blur(10px)',
      '-webkit-backdrop-filter': 'blur(10px)'
    };
  }
  return Object.assign({}, childrenStyle);
};
const genStackStyle = token => {
  const {
    componentCls
  } = token;
  return Object.assign({
    [`${componentCls}-stack`]: {
      [`& > ${componentCls}-notice-wrapper`]: Object.assign({
        transition: `all ${token.motionDurationSlow}, backdrop-filter 0s`,
        position: 'absolute'
      }, genStackChildrenStyle(token))
    },
    [`${componentCls}-stack:not(${componentCls}-stack-expanded)`]: {
      [`& > ${componentCls}-notice-wrapper`]: Object.assign({}, genStackedNoticeStyle(token))
    },
    [`${componentCls}-stack${componentCls}-stack-expanded`]: {
      [`& > ${componentCls}-notice-wrapper`]: {
        '&:not(:nth-last-child(-n + 1))': {
          opacity: 1,
          overflow: 'unset',
          color: 'inherit',
          pointerEvents: 'auto',
          [`& > ${token.componentCls}-notice`]: {
            opacity: 1
          }
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          height: token.margin,
          width: '100%',
          insetInline: 0,
          bottom: token.calc(token.margin).mul(-1).equal(),
          background: 'transparent',
          pointerEvents: 'auto'
        }
      }
    }
  }, _interface__WEBPACK_IMPORTED_MODULE_0__.NotificationPlacements.map(placement => genPlacementStackStyle(token, placement)).reduce((acc, cur) => Object.assign(Object.assign({}, acc), cur), {}));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genStackStyle);

/***/ }),

/***/ "../node_modules/antd/es/notification/useNotification.js":
/*!***************************************************************!*\
  !*** ../node_modules/antd/es/notification/useNotification.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNotification),
/* harmony export */   useInternalNotification: () => (/* binding */ useInternalNotification)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-notification */ "../node_modules/rc-notification/es/index.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _config_provider_hooks_useCSSVarCls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config-provider/hooks/useCSSVarCls */ "../node_modules/antd/es/config-provider/hooks/useCSSVarCls.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/internal */ "../node_modules/antd/es/theme/useToken.js");
/* harmony import */ var _PurePanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PurePanel */ "../node_modules/antd/es/notification/PurePanel.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "../node_modules/antd/es/notification/style/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "../node_modules/antd/es/notification/util.js");
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const DEFAULT_OFFSET = 24;
const DEFAULT_DURATION = 4.5;
const DEFAULT_PLACEMENT = 'topRight';
const Wrapper = _ref => {
  let {
    children,
    prefixCls
  } = _ref;
  const rootCls = (0,_config_provider_hooks_useCSSVarCls__WEBPACK_IMPORTED_MODULE_3__["default"])(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,_style__WEBPACK_IMPORTED_MODULE_4__["default"])(prefixCls, rootCls);
  return wrapCSSVar( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(rc_notification__WEBPACK_IMPORTED_MODULE_2__.NotificationProvider, {
    classNames: {
      list: classnames__WEBPACK_IMPORTED_MODULE_1___default()(hashId, cssVarCls, rootCls)
    }
  }, children));
};
const renderNotifications = (node, _ref2) => {
  let {
    prefixCls,
    key
  } = _ref2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, {
    prefixCls: prefixCls,
    key: key
  }, node);
};
const Holder = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((props, ref) => {
  const {
    top,
    bottom,
    prefixCls: staticPrefixCls,
    getContainer: staticGetContainer,
    maxCount,
    rtl,
    onAllRemoved,
    stack
  } = props;
  const {
    getPrefixCls,
    getPopupContainer,
    notification,
    direction
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_config_provider__WEBPACK_IMPORTED_MODULE_5__.ConfigContext);
  const [, token] = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const prefixCls = staticPrefixCls || getPrefixCls('notification');
  // =============================== Style ===============================
  const getStyle = placement => (0,_util__WEBPACK_IMPORTED_MODULE_7__.getPlacementStyle)(placement, top !== null && top !== void 0 ? top : DEFAULT_OFFSET, bottom !== null && bottom !== void 0 ? bottom : DEFAULT_OFFSET);
  const getClassName = () => classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [`${prefixCls}-rtl`]: rtl !== null && rtl !== void 0 ? rtl : direction === 'rtl'
  });
  // ============================== Motion ===============================
  const getNotificationMotion = () => (0,_util__WEBPACK_IMPORTED_MODULE_7__.getMotion)(prefixCls);
  // ============================== Origin ===============================
  const [api, holder] = (0,rc_notification__WEBPACK_IMPORTED_MODULE_2__.useNotification)({
    prefixCls,
    style: getStyle,
    className: getClassName,
    motion: getNotificationMotion,
    closable: true,
    closeIcon: (0,_PurePanel__WEBPACK_IMPORTED_MODULE_8__.getCloseIcon)(prefixCls),
    duration: DEFAULT_DURATION,
    getContainer: () => (staticGetContainer === null || staticGetContainer === void 0 ? void 0 : staticGetContainer()) || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer()) || document.body,
    maxCount,
    onAllRemoved,
    renderNotifications,
    stack: stack === false ? false : {
      threshold: typeof stack === 'object' ? stack === null || stack === void 0 ? void 0 : stack.threshold : undefined,
      offset: 8,
      gap: token.margin
    }
  });
  // ================================ Ref ================================
  react__WEBPACK_IMPORTED_MODULE_0___default().useImperativeHandle(ref, () => Object.assign(Object.assign({}, api), {
    prefixCls,
    notification
  }));
  return holder;
});
// ==============================================================================
// ==                                   Hook                                   ==
// ==============================================================================
function useInternalNotification(notificationConfig) {
  const holderRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const warning = (0,_util_warning__WEBPACK_IMPORTED_MODULE_9__.devUseWarning)('Notification');
  // ================================ API ================================
  const wrapAPI = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
    // Wrap with notification content
    // >>> Open
    const open = config => {
      var _a;
      if (!holderRef.current) {
         true ? warning(false, 'usage', 'You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.') : 0;
        return;
      }
      const {
        open: originOpen,
        prefixCls,
        notification
      } = holderRef.current;
      const noticePrefixCls = `${prefixCls}-notice`;
      const {
          message,
          description,
          icon,
          type,
          btn,
          className,
          style,
          role = 'alert',
          closeIcon
        } = config,
        restConfig = __rest(config, ["message", "description", "icon", "type", "btn", "className", "style", "role", "closeIcon"]);
      const realCloseIcon = (0,_PurePanel__WEBPACK_IMPORTED_MODULE_8__.getCloseIcon)(noticePrefixCls, closeIcon);
      return originOpen(Object.assign(Object.assign({
        // use placement from props instead of hard-coding "topRight"
        placement: (_a = notificationConfig === null || notificationConfig === void 0 ? void 0 : notificationConfig.placement) !== null && _a !== void 0 ? _a : DEFAULT_PLACEMENT
      }, restConfig), {
        content: ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PurePanel__WEBPACK_IMPORTED_MODULE_8__.PureContent, {
          prefixCls: noticePrefixCls,
          icon: icon,
          type: type,
          message: message,
          description: description,
          btn: btn,
          role: role
        })),
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(type && `${noticePrefixCls}-${type}`, className, notification === null || notification === void 0 ? void 0 : notification.className),
        style: Object.assign(Object.assign({}, notification === null || notification === void 0 ? void 0 : notification.style), style),
        closeIcon: realCloseIcon,
        closable: !!realCloseIcon
      }));
    };
    // >>> destroy
    const destroy = key => {
      var _a, _b;
      if (key !== undefined) {
        (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.close(key);
      } else {
        (_b = holderRef.current) === null || _b === void 0 ? void 0 : _b.destroy();
      }
    };
    const clone = {
      open,
      destroy
    };
    const keys = ['success', 'info', 'warning', 'error'];
    keys.forEach(type => {
      clone[type] = config => open(Object.assign(Object.assign({}, config), {
        type
      }));
    });
    return clone;
  }, []);
  // ============================== Return ===============================
  return [wrapAPI, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Holder, Object.assign({
    key: "notification-holder"
  }, notificationConfig, {
    ref: holderRef
  }))];
}
function useNotification(notificationConfig) {
  return useInternalNotification(notificationConfig);
}

/***/ }),

/***/ "../node_modules/antd/es/notification/util.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/notification/util.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMotion: () => (/* binding */ getMotion),
/* harmony export */   getPlacementStyle: () => (/* binding */ getPlacementStyle)
/* harmony export */ });
function getPlacementStyle(placement, top, bottom) {
  let style;
  switch (placement) {
    case 'top':
      style = {
        left: '50%',
        transform: 'translateX(-50%)',
        right: 'auto',
        top,
        bottom: 'auto'
      };
      break;
    case 'topLeft':
      style = {
        left: 0,
        top,
        bottom: 'auto'
      };
      break;
    case 'topRight':
      style = {
        right: 0,
        top,
        bottom: 'auto'
      };
      break;
    case 'bottom':
      style = {
        left: '50%',
        transform: 'translateX(-50%)',
        right: 'auto',
        top: 'auto',
        bottom
      };
      break;
    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom
      };
      break;
    default:
      style = {
        right: 0,
        top: 'auto',
        bottom
      };
      break;
  }
  return style;
}
function getMotion(prefixCls) {
  return {
    motionName: `${prefixCls}-fade`
  };
}

/***/ }),

/***/ "../node_modules/antd/es/space/Compact.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/space/Compact.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoCompactStyle: () => (/* binding */ NoCompactStyle),
/* harmony export */   SpaceCompactItemContext: () => (/* binding */ SpaceCompactItemContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useCompactItemContext: () => (/* binding */ useCompactItemContext)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "../node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _config_provider_hooks_useSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config-provider/hooks/useSize */ "../node_modules/antd/es/config-provider/hooks/useSize.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "../node_modules/antd/es/space/style/index.js");
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






const SpaceCompactItemContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createContext(null);
const useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = react__WEBPACK_IMPORTED_MODULE_2__.useContext(SpaceCompactItemContext);
  const compactItemClassnames = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => {
    if (!compactItemContext) {
      return '';
    }
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === 'vertical' ? '-vertical-' : '-';
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()(`${prefixCls}-compact${separator}item`, {
      [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls}-compact${separator}item-rtl`]: direction === 'rtl'
    });
  }, [prefixCls, direction, compactItemContext]);
  return {
    compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
    compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
    compactItemClassnames
  };
};
const NoCompactStyle = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(SpaceCompactItemContext.Provider, {
    value: null
  }, children);
};
const CompactItem = _a => {
  var {
      children
    } = _a,
    otherProps = __rest(_a, ["children"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(SpaceCompactItemContext.Provider, {
    value: otherProps
  }, children);
};
const Compact = props => {
  const {
    getPrefixCls,
    direction: directionConfig
  } = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_3__.ConfigContext);
  const {
      size,
      direction,
      block,
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      children
    } = props,
    restProps = __rest(props, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]);
  const mergedSize = (0,_config_provider_hooks_useSize__WEBPACK_IMPORTED_MODULE_4__["default"])(ctx => size !== null && size !== void 0 ? size : ctx);
  const prefixCls = getPrefixCls('space-compact', customizePrefixCls);
  const [wrapCSSVar, hashId] = (0,_style__WEBPACK_IMPORTED_MODULE_5__["default"])(prefixCls);
  const clx = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, hashId, {
    [`${prefixCls}-rtl`]: directionConfig === 'rtl',
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-vertical`]: direction === 'vertical'
  }, className, rootClassName);
  const compactItemContext = react__WEBPACK_IMPORTED_MODULE_2__.useContext(SpaceCompactItemContext);
  const childNodes = (0,rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_1__["default"])(children);
  const nodes = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => childNodes.map((child, i) => {
    const key = child && child.key || `${prefixCls}-item-${i}`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(CompactItem, {
      key: key,
      compactSize: mergedSize,
      compactDirection: direction,
      isFirstItem: i === 0 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
      isLastItem: i === childNodes.length - 1 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
    }, child);
  }), [size, childNodes, compactItemContext]);
  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null;
  }
  return wrapCSSVar( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", Object.assign({
    className: clx
  }, restProps), nodes));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Compact);

/***/ }),

/***/ "../node_modules/antd/es/space/style/compact.js":
/*!******************************************************!*\
  !*** ../node_modules/antd/es/space/style/compact.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const genSpaceCompactStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      '&-block': {
        display: 'flex',
        width: '100%'
      },
      '&-vertical': {
        flexDirection: 'column'
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genSpaceCompactStyle);

/***/ }),

/***/ "../node_modules/antd/es/space/style/index.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/space/style/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   prepareComponentToken: () => (/* binding */ prepareComponentToken)
/* harmony export */ });
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/genComponentStyleHook.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/statistic.js");
/* harmony import */ var _compact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compact */ "../node_modules/antd/es/space/style/compact.js");


const genSpaceStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: 'inline-flex',
      '&-rtl': {
        direction: 'rtl'
      },
      '&-vertical': {
        flexDirection: 'column'
      },
      '&-align': {
        flexDirection: 'column',
        '&-center': {
          alignItems: 'center'
        },
        '&-start': {
          alignItems: 'flex-start'
        },
        '&-end': {
          alignItems: 'flex-end'
        },
        '&-baseline': {
          alignItems: 'baseline'
        }
      },
      [`${componentCls}-item:empty`]: {
        display: 'none'
      }
    }
  };
};
const genSpaceGapStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      '&-gap-row-small': {
        rowGap: token.spaceGapSmallSize
      },
      '&-gap-row-middle': {
        rowGap: token.spaceGapMiddleSize
      },
      '&-gap-row-large': {
        rowGap: token.spaceGapLargeSize
      },
      '&-gap-col-small': {
        columnGap: token.spaceGapSmallSize
      },
      '&-gap-col-middle': {
        columnGap: token.spaceGapMiddleSize
      },
      '&-gap-col-large': {
        columnGap: token.spaceGapLargeSize
      }
    }
  };
};
// ============================== Export ==============================
const prepareComponentToken = () => ({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__.genStyleHooks)('Space', token => {
  const spaceToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__.merge)(token, {
    spaceGapSmallSize: token.paddingXS,
    spaceGapMiddleSize: token.padding,
    spaceGapLargeSize: token.paddingLG
  });
  return [genSpaceStyle(spaceToken), genSpaceGapStyle(spaceToken), (0,_compact__WEBPACK_IMPORTED_MODULE_2__["default"])(spaceToken)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: false
}));

/***/ }),

/***/ "../node_modules/antd/es/style/compact-item-vertical.js":
/*!**************************************************************!*\
  !*** ../node_modules/antd/es/style/compact-item-vertical.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   genCompactItemVerticalStyle: () => (/* binding */ genCompactItemVerticalStyle)
/* harmony export */ });
function compactItemVerticalBorder(token, parentCls) {
  return {
    // border collapse
    [`&-item:not(${parentCls}-last-item)`]: {
      marginBottom: token.calc(token.lineWidth).mul(-1).equal()
    },
    '&-item': {
      '&:hover,&:focus,&:active': {
        zIndex: 2
      },
      '&[disabled]': {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function genCompactItemVerticalStyle(token) {
  const compactCls = `${token.componentCls}-compact-vertical`;
  return {
    [compactCls]: Object.assign(Object.assign({}, compactItemVerticalBorder(token, compactCls)), compactItemBorderVerticalRadius(token.componentCls, compactCls))
  };
}

/***/ }),

/***/ "../node_modules/antd/es/style/compact-item.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/style/compact-item.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   genCompactItemStyle: () => (/* binding */ genCompactItemStyle)
/* harmony export */ });
// handle border collapse
function compactItemBorder(token, parentCls, options) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? '> *' : '';
  const hoverEffects = ['hover', focus ? 'focus' : null, 'active'].filter(Boolean).map(n => `&:${n} ${childCombinator}`).join(',');
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal()
    },
    '&-item': Object.assign(Object.assign({
      [hoverEffects]: {
        zIndex: 2
      }
    }, focusElCls ? {
      [`&${focusElCls}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    })
  };
}
// handle border-radius
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : '';
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    focus: true
  };
  const {
    componentCls
  } = token;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: Object.assign(Object.assign({}, compactItemBorder(token, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
  };
}

/***/ }),

/***/ "../node_modules/antd/es/style/index.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/style/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearFix: () => (/* binding */ clearFix),
/* harmony export */   genCommonStyle: () => (/* binding */ genCommonStyle),
/* harmony export */   genFocusOutline: () => (/* binding */ genFocusOutline),
/* harmony export */   genFocusStyle: () => (/* binding */ genFocusStyle),
/* harmony export */   genLinkStyle: () => (/* binding */ genLinkStyle),
/* harmony export */   operationUnit: () => (/* reexport safe */ _operationUnit__WEBPACK_IMPORTED_MODULE_1__.operationUnit),
/* harmony export */   resetComponent: () => (/* binding */ resetComponent),
/* harmony export */   resetIcon: () => (/* binding */ resetIcon),
/* harmony export */   textEllipsis: () => (/* binding */ textEllipsis)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var _operationUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operationUnit */ "../node_modules/antd/es/style/operationUnit.js");
"use client";

/* eslint-disable import/prefer-default-export */


const textEllipsis = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
};
const resetComponent = function (token) {
  let needInheritFontFamily = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    color: token.colorText,
    fontSize: token.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: token.lineHeight,
    listStyle: 'none',
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: needInheritFontFamily ? 'inherit' : token.fontFamily
  };
};
const resetIcon = () => ({
  display: 'inline-flex',
  alignItems: 'center',
  color: 'inherit',
  fontStyle: 'normal',
  lineHeight: 0,
  textAlign: 'center',
  textTransform: 'none',
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: '-0.125em',
  textRendering: 'optimizeLegibility',
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale',
  '> *': {
    lineHeight: 1
  },
  svg: {
    display: 'inline-block'
  }
});
const clearFix = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  '&::before': {
    display: 'table',
    content: '""'
  },
  '&::after': {
    // https://github.com/ant-design/ant-design/issues/21864
    display: 'table',
    clear: 'both',
    content: '""'
  }
});
const genLinkStyle = token => ({
  a: {
    color: token.colorLink,
    textDecoration: token.linkDecoration,
    backgroundColor: 'transparent',
    // remove the gray background on active links in IE 10.
    outline: 'none',
    cursor: 'pointer',
    transition: `color ${token.motionDurationSlow}`,
    '-webkit-text-decoration-skip': 'objects',
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    '&:hover': {
      color: token.colorLinkHover
    },
    '&:active': {
      color: token.colorLinkActive
    },
    [`&:active,
  &:hover`]: {
      textDecoration: token.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    '&:focus': {
      textDecoration: token.linkFocusDecoration,
      outline: 0
    },
    '&[disabled]': {
      color: token.colorTextDisabled,
      cursor: 'not-allowed'
    }
  }
});
const genCommonStyle = (token, componentPrefixCls) => {
  const {
    fontFamily,
    fontSize
  } = token;
  const rootPrefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  return {
    [rootPrefixSelector]: {
      fontFamily,
      fontSize,
      boxSizing: 'border-box',
      '&::before, &::after': {
        boxSizing: 'border-box'
      },
      [rootPrefixSelector]: {
        boxSizing: 'border-box',
        '&::before, &::after': {
          boxSizing: 'border-box'
        }
      }
    }
  };
};
const genFocusOutline = token => ({
  outline: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.lineWidthFocus)} solid ${token.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: 'outline-offset 0s, outline 0s'
});
const genFocusStyle = token => ({
  '&:focus-visible': Object.assign({}, genFocusOutline(token))
});

/***/ }),

/***/ "../node_modules/antd/es/style/motion/collapse.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/style/motion/collapse.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const genCollapseMotion = token => ({
  [token.componentCls]: {
    // For common/openAnimation
    [`${token.antCls}-motion-collapse-legacy`]: {
      overflow: 'hidden',
      '&-active': {
        transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
      }
    },
    [`${token.antCls}-motion-collapse`]: {
      overflow: 'hidden',
      transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genCollapseMotion);

/***/ }),

/***/ "../node_modules/antd/es/style/motion/fade.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/style/motion/fade.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fadeIn: () => (/* binding */ fadeIn),
/* harmony export */   fadeOut: () => (/* binding */ fadeOut),
/* harmony export */   initFadeMotion: () => (/* binding */ initFadeMotion)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./motion */ "../node_modules/antd/es/style/motion/motion.js");


const fadeIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antFadeIn', {
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
});
const fadeOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antFadeOut', {
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  }
});
const initFadeMotion = function (token) {
  let sameLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-fade`;
  const sameLevelPrefix = sameLevel ? '&' : '';
  return [(0,_motion__WEBPACK_IMPORTED_MODULE_1__.initMotion)(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel), {
    [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: 'linear'
    },
    [`${sameLevelPrefix}${motionCls}-leave`]: {
      animationTimingFunction: 'linear'
    }
  }];
};

/***/ }),

/***/ "../node_modules/antd/es/style/motion/motion.js":
/*!******************************************************!*\
  !*** ../node_modules/antd/es/style/motion/motion.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initMotion: () => (/* binding */ initMotion)
/* harmony export */ });
const initMotionCommon = duration => ({
  animationDuration: duration,
  animationFillMode: 'both'
});
// FIXME: origin less code seems same as initMotionCommon. Maybe we can safe remove
const initMotionCommonLeave = duration => ({
  animationDuration: duration,
  animationFillMode: 'both'
});
const initMotion = function (motionCls, inKeyframes, outKeyframes, duration) {
  let sameLevel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  const sameLevelPrefix = sameLevel ? '&' : '';
  return {
    [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: Object.assign(Object.assign({}, initMotionCommon(duration)), {
      animationPlayState: 'paused'
    }),
    [`${sameLevelPrefix}${motionCls}-leave`]: Object.assign(Object.assign({}, initMotionCommonLeave(duration)), {
      animationPlayState: 'paused'
    }),
    [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
      animationName: inKeyframes,
      animationPlayState: 'running'
    },
    [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
      animationName: outKeyframes,
      animationPlayState: 'running',
      pointerEvents: 'none'
    }
  };
};

/***/ }),

/***/ "../node_modules/antd/es/style/motion/slide.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/style/motion/slide.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSlideMotion: () => (/* binding */ initSlideMotion),
/* harmony export */   slideDownIn: () => (/* binding */ slideDownIn),
/* harmony export */   slideDownOut: () => (/* binding */ slideDownOut),
/* harmony export */   slideLeftIn: () => (/* binding */ slideLeftIn),
/* harmony export */   slideLeftOut: () => (/* binding */ slideLeftOut),
/* harmony export */   slideRightIn: () => (/* binding */ slideRightIn),
/* harmony export */   slideRightOut: () => (/* binding */ slideRightOut),
/* harmony export */   slideUpIn: () => (/* binding */ slideUpIn),
/* harmony export */   slideUpOut: () => (/* binding */ slideUpOut)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./motion */ "../node_modules/antd/es/style/motion/motion.js");


const slideUpIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antSlideUpIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
const slideUpOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antSlideUpOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
const slideDownIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antSlideDownIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  }
});
const slideDownOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antSlideDownOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  }
});
const slideLeftIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antSlideLeftIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
const slideLeftOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antSlideLeftOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
const slideRightIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antSlideRightIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  }
});
const slideRightOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antSlideRightOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  }
});
const slideMotion = {
  'slide-up': {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  'slide-down': {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  'slide-left': {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  'slide-right': {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
const initSlideMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [(0,_motion__WEBPACK_IMPORTED_MODULE_1__.initMotion)(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
      transform: 'scale(0)',
      transformOrigin: '0% 0%',
      opacity: 0,
      animationTimingFunction: token.motionEaseOutQuint,
      [`&-prepare`]: {
        transform: 'scale(1)'
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInQuint
    }
  }];
};

/***/ }),

/***/ "../node_modules/antd/es/style/motion/zoom.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/style/motion/zoom.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initZoomMotion: () => (/* binding */ initZoomMotion),
/* harmony export */   zoomBigIn: () => (/* binding */ zoomBigIn),
/* harmony export */   zoomBigOut: () => (/* binding */ zoomBigOut),
/* harmony export */   zoomDownIn: () => (/* binding */ zoomDownIn),
/* harmony export */   zoomDownOut: () => (/* binding */ zoomDownOut),
/* harmony export */   zoomIn: () => (/* binding */ zoomIn),
/* harmony export */   zoomLeftIn: () => (/* binding */ zoomLeftIn),
/* harmony export */   zoomLeftOut: () => (/* binding */ zoomLeftOut),
/* harmony export */   zoomOut: () => (/* binding */ zoomOut),
/* harmony export */   zoomRightIn: () => (/* binding */ zoomRightIn),
/* harmony export */   zoomRightOut: () => (/* binding */ zoomRightOut),
/* harmony export */   zoomUpIn: () => (/* binding */ zoomUpIn),
/* harmony export */   zoomUpOut: () => (/* binding */ zoomUpOut)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./motion */ "../node_modules/antd/es/style/motion/motion.js");


const zoomIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antZoomIn', {
  '0%': {
    transform: 'scale(0.2)',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1
  }
});
const zoomOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antZoomOut', {
  '0%': {
    transform: 'scale(1)'
  },
  '100%': {
    transform: 'scale(0.2)',
    opacity: 0
  }
});
const zoomBigIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antZoomBigIn', {
  '0%': {
    transform: 'scale(0.8)',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1
  }
});
const zoomBigOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antZoomBigOut', {
  '0%': {
    transform: 'scale(1)'
  },
  '100%': {
    transform: 'scale(0.8)',
    opacity: 0
  }
});
const zoomUpIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antZoomUpIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '50% 0%'
  }
});
const zoomUpOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antZoomUpOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '50% 0%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 0%',
    opacity: 0
  }
});
const zoomLeftIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antZoomLeftIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '0% 50%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '0% 50%'
  }
});
const zoomLeftOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antZoomLeftOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '0% 50%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '0% 50%',
    opacity: 0
  }
});
const zoomRightIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antZoomRightIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '100% 50%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '100% 50%'
  }
});
const zoomRightOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antZoomRightOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '100% 50%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '100% 50%',
    opacity: 0
  }
});
const zoomDownIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antZoomDownIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 100%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '50% 100%'
  }
});
const zoomDownOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('antZoomDownOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '50% 100%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 100%',
    opacity: 0
  }
});
const zoomMotion = {
  zoom: {
    inKeyframes: zoomIn,
    outKeyframes: zoomOut
  },
  'zoom-big': {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  'zoom-big-fast': {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  'zoom-left': {
    inKeyframes: zoomLeftIn,
    outKeyframes: zoomLeftOut
  },
  'zoom-right': {
    inKeyframes: zoomRightIn,
    outKeyframes: zoomRightOut
  },
  'zoom-up': {
    inKeyframes: zoomUpIn,
    outKeyframes: zoomUpOut
  },
  'zoom-down': {
    inKeyframes: zoomDownIn,
    outKeyframes: zoomDownOut
  }
};
const initZoomMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = zoomMotion[motionName];
  return [(0,_motion__WEBPACK_IMPORTED_MODULE_1__.initMotion)(motionCls, inKeyframes, outKeyframes, motionName === 'zoom-big-fast' ? token.motionDurationFast : token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      transform: 'scale(0)',
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc,
      '&-prepare': {
        transform: 'none'
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};

/***/ }),

/***/ "../node_modules/antd/es/style/operationUnit.js":
/*!******************************************************!*\
  !*** ../node_modules/antd/es/style/operationUnit.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   operationUnit: () => (/* binding */ operationUnit)
/* harmony export */ });
// eslint-disable-next-line import/prefer-default-export
const operationUnit = token => ({
  // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
  // And Typography use this to generate link style which should not do this.
  color: token.colorLink,
  textDecoration: 'none',
  outline: 'none',
  cursor: 'pointer',
  transition: `color ${token.motionDurationSlow}`,
  '&:focus, &:hover': {
    color: token.colorLinkHover
  },
  '&:active': {
    color: token.colorLinkActive
  }
});

/***/ }),

/***/ "../node_modules/antd/es/style/placementArrow.js":
/*!*******************************************************!*\
  !*** ../node_modules/antd/es/style/placementArrow.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAX_VERTICAL_CONTENT_RADIUS: () => (/* binding */ MAX_VERTICAL_CONTENT_RADIUS),
/* harmony export */   "default": () => (/* binding */ getArrowStyle),
/* harmony export */   getArrowOffsetToken: () => (/* binding */ getArrowOffsetToken)
/* harmony export */ });
/* harmony import */ var _roundedArrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roundedArrow */ "../node_modules/antd/es/style/roundedArrow.js");

const MAX_VERTICAL_CONTENT_RADIUS = 8;
function getArrowOffsetToken(options) {
  const {
    contentRadius,
    limitVerticalRadius
  } = options;
  const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
  const arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
  return {
    arrowOffsetHorizontal: arrowOffset,
    arrowOffsetVertical
  };
}
function isInject(valid, code) {
  if (!valid) {
    return {};
  }
  return code;
}
function getArrowStyle(token, colorBg, options) {
  const {
    componentCls,
    boxShadowPopoverArrow,
    arrowOffsetVertical,
    arrowOffsetHorizontal
  } = token;
  const {
    arrowDistance = 0,
    arrowPlacement = {
      left: true,
      right: true,
      top: true,
      bottom: true
    }
  } = options || {};
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${componentCls}-arrow`]: [Object.assign(Object.assign({
        position: 'absolute',
        zIndex: 1,
        display: 'block'
      }, (0,_roundedArrow__WEBPACK_IMPORTED_MODULE_0__.genRoundedArrow)(token, colorBg, boxShadowPopoverArrow)), {
        '&:before': {
          background: colorBg
        }
      })]
    }, isInject(!!arrowPlacement.top, {
      [[`&-placement-top > ${componentCls}-arrow`, `&-placement-topLeft > ${componentCls}-arrow`, `&-placement-topRight > ${componentCls}-arrow`].join(',')]: {
        bottom: arrowDistance,
        transform: 'translateY(100%) rotate(180deg)'
      },
      [`&-placement-top > ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: '50%'
        },
        transform: 'translateX(-50%) translateY(100%) rotate(180deg)'
      },
      [`&-placement-topLeft > ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: arrowOffsetHorizontal
        }
      },
      [`&-placement-topRight > ${componentCls}-arrow`]: {
        right: {
          _skip_check_: true,
          value: arrowOffsetHorizontal
        }
      }
    })), isInject(!!arrowPlacement.bottom, {
      [[`&-placement-bottom > ${componentCls}-arrow`, `&-placement-bottomLeft > ${componentCls}-arrow`, `&-placement-bottomRight > ${componentCls}-arrow`].join(',')]: {
        top: arrowDistance,
        transform: `translateY(-100%)`
      },
      [`&-placement-bottom > ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: '50%'
        },
        transform: `translateX(-50%) translateY(-100%)`
      },
      [`&-placement-bottomLeft > ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: arrowOffsetHorizontal
        }
      },
      [`&-placement-bottomRight > ${componentCls}-arrow`]: {
        right: {
          _skip_check_: true,
          value: arrowOffsetHorizontal
        }
      }
    })), isInject(!!arrowPlacement.left, {
      [[`&-placement-left > ${componentCls}-arrow`, `&-placement-leftTop > ${componentCls}-arrow`, `&-placement-leftBottom > ${componentCls}-arrow`].join(',')]: {
        right: {
          _skip_check_: true,
          value: arrowDistance
        },
        transform: 'translateX(100%) rotate(90deg)'
      },
      [`&-placement-left > ${componentCls}-arrow`]: {
        top: {
          _skip_check_: true,
          value: '50%'
        },
        transform: 'translateY(-50%) translateX(100%) rotate(90deg)'
      },
      [`&-placement-leftTop > ${componentCls}-arrow`]: {
        top: arrowOffsetVertical
      },
      [`&-placement-leftBottom > ${componentCls}-arrow`]: {
        bottom: arrowOffsetVertical
      }
    })), isInject(!!arrowPlacement.right, {
      [[`&-placement-right > ${componentCls}-arrow`, `&-placement-rightTop > ${componentCls}-arrow`, `&-placement-rightBottom > ${componentCls}-arrow`].join(',')]: {
        left: {
          _skip_check_: true,
          value: arrowDistance
        },
        transform: 'translateX(-100%) rotate(-90deg)'
      },
      [`&-placement-right > ${componentCls}-arrow`]: {
        top: {
          _skip_check_: true,
          value: '50%'
        },
        transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)'
      },
      [`&-placement-rightTop > ${componentCls}-arrow`]: {
        top: arrowOffsetVertical
      },
      [`&-placement-rightBottom > ${componentCls}-arrow`]: {
        bottom: arrowOffsetVertical
      }
    }))
  };
}

/***/ }),

/***/ "../node_modules/antd/es/style/roundedArrow.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/style/roundedArrow.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   genRoundedArrow: () => (/* binding */ genRoundedArrow),
/* harmony export */   getArrowToken: () => (/* binding */ getArrowToken)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");

function getArrowToken(token) {
  const {
    sizePopupArrow,
    borderRadiusXS,
    borderRadiusOuter
  } = token;
  const unitWidth = sizePopupArrow / 2;
  const ax = 0;
  const ay = unitWidth;
  const bx = borderRadiusOuter * 1 / Math.sqrt(2);
  const by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2));
  const cx = unitWidth - borderRadiusXS * (1 / Math.sqrt(2));
  const cy = borderRadiusOuter * (Math.sqrt(2) - 1) + borderRadiusXS * (1 / Math.sqrt(2));
  const dx = 2 * unitWidth - cx;
  const dy = cy;
  const ex = 2 * unitWidth - bx;
  const ey = by;
  const fx = 2 * unitWidth - ax;
  const fy = ay;
  const shadowWidth = unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2);
  const polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1);
  const arrowPolygon = `polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`;
  const arrowPath = `path('M ${ax} ${ay} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${borderRadiusXS} ${borderRadiusXS} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${fx} ${fy} Z')`;
  return {
    arrowShadowWidth: shadowWidth,
    arrowPath,
    arrowPolygon
  };
}
const genRoundedArrow = (token, bgColor, boxShadow) => {
  const {
    sizePopupArrow,
    arrowPolygon,
    arrowPath,
    arrowShadowWidth,
    borderRadiusXS,
    calc
  } = token;
  return {
    pointerEvents: 'none',
    width: sizePopupArrow,
    height: sizePopupArrow,
    overflow: 'hidden',
    '&::before': {
      position: 'absolute',
      bottom: 0,
      insetInlineStart: 0,
      width: sizePopupArrow,
      height: calc(sizePopupArrow).div(2).equal(),
      background: bgColor,
      clipPath: {
        _multi_value_: true,
        value: [arrowPolygon, arrowPath]
      },
      content: '""'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: arrowShadowWidth,
      height: arrowShadowWidth,
      bottom: 0,
      insetInline: 0,
      margin: 'auto',
      borderRadius: {
        _skip_check_: true,
        value: `0 0 ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(borderRadiusXS)} 0`
      },
      transform: 'translateY(50%) rotate(-135deg)',
      boxShadow,
      zIndex: 0,
      background: 'transparent'
    }
  };
};

/***/ }),

/***/ "../node_modules/antd/es/theme/context.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/theme/context.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesignTokenContext: () => (/* binding */ DesignTokenContext),
/* harmony export */   defaultConfig: () => (/* binding */ defaultConfig),
/* harmony export */   defaultTheme: () => (/* binding */ defaultTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var _themes_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes/default */ "../node_modules/antd/es/theme/themes/default/index.js");
/* harmony import */ var _themes_seed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./themes/seed */ "../node_modules/antd/es/theme/themes/seed.js");




const defaultTheme = (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_1__.createTheme)(_themes_default__WEBPACK_IMPORTED_MODULE_2__["default"]);
// ================================ Context =================================
// To ensure snapshot stable. We disable hashed in test env.
const defaultConfig = {
  token: _themes_seed__WEBPACK_IMPORTED_MODULE_3__["default"],
  override: {
    override: _themes_seed__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  hashed: true
};
const DesignTokenContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(defaultConfig);

/***/ }),

/***/ "../node_modules/antd/es/theme/interface/presetColors.js":
/*!***************************************************************!*\
  !*** ../node_modules/antd/es/theme/interface/presetColors.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PresetColors: () => (/* binding */ PresetColors)
/* harmony export */ });
const PresetColors = ['blue', 'purple', 'cyan', 'green', 'magenta', 'pink', 'red', 'orange', 'yellow', 'volcano', 'geekblue', 'lime', 'gold'];

/***/ }),

/***/ "../node_modules/antd/es/theme/themes/default/colorAlgorithm.js":
/*!**********************************************************************!*\
  !*** ../node_modules/antd/es/theme/themes/default/colorAlgorithm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAlphaColor: () => (/* binding */ getAlphaColor),
/* harmony export */   getSolidColor: () => (/* binding */ getSolidColor)
/* harmony export */ });
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ctrl/tinycolor */ "../node_modules/@ctrl/tinycolor/dist/module/index.js");

const getAlphaColor = (baseColor, alpha) => new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__.TinyColor(baseColor).setAlpha(alpha).toRgbString();
const getSolidColor = (baseColor, brightness) => {
  const instance = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__.TinyColor(baseColor);
  return instance.darken(brightness).toHexString();
};

/***/ }),

/***/ "../node_modules/antd/es/theme/themes/default/colors.js":
/*!**************************************************************!*\
  !*** ../node_modules/antd/es/theme/themes/default/colors.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateColorPalettes: () => (/* binding */ generateColorPalettes),
/* harmony export */   generateNeutralColorPalettes: () => (/* binding */ generateNeutralColorPalettes)
/* harmony export */ });
/* harmony import */ var _ant_design_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/colors */ "../node_modules/@ant-design/colors/es/index.js");
/* harmony import */ var _colorAlgorithm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorAlgorithm */ "../node_modules/antd/es/theme/themes/default/colorAlgorithm.js");


const generateColorPalettes = baseColor => {
  const colors = (0,_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.generate)(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || '#fff';
  const colorTextBase = textBaseColor || '#000';
  return {
    colorBgBase,
    colorTextBase,
    colorText: (0,_colorAlgorithm__WEBPACK_IMPORTED_MODULE_1__.getAlphaColor)(colorTextBase, 0.88),
    colorTextSecondary: (0,_colorAlgorithm__WEBPACK_IMPORTED_MODULE_1__.getAlphaColor)(colorTextBase, 0.65),
    colorTextTertiary: (0,_colorAlgorithm__WEBPACK_IMPORTED_MODULE_1__.getAlphaColor)(colorTextBase, 0.45),
    colorTextQuaternary: (0,_colorAlgorithm__WEBPACK_IMPORTED_MODULE_1__.getAlphaColor)(colorTextBase, 0.25),
    colorFill: (0,_colorAlgorithm__WEBPACK_IMPORTED_MODULE_1__.getAlphaColor)(colorTextBase, 0.15),
    colorFillSecondary: (0,_colorAlgorithm__WEBPACK_IMPORTED_MODULE_1__.getAlphaColor)(colorTextBase, 0.06),
    colorFillTertiary: (0,_colorAlgorithm__WEBPACK_IMPORTED_MODULE_1__.getAlphaColor)(colorTextBase, 0.04),
    colorFillQuaternary: (0,_colorAlgorithm__WEBPACK_IMPORTED_MODULE_1__.getAlphaColor)(colorTextBase, 0.02),
    colorBgLayout: (0,_colorAlgorithm__WEBPACK_IMPORTED_MODULE_1__.getSolidColor)(colorBgBase, 4),
    colorBgContainer: (0,_colorAlgorithm__WEBPACK_IMPORTED_MODULE_1__.getSolidColor)(colorBgBase, 0),
    colorBgElevated: (0,_colorAlgorithm__WEBPACK_IMPORTED_MODULE_1__.getSolidColor)(colorBgBase, 0),
    colorBgSpotlight: (0,_colorAlgorithm__WEBPACK_IMPORTED_MODULE_1__.getAlphaColor)(colorTextBase, 0.85),
    colorBgBlur: 'transparent',
    colorBorder: (0,_colorAlgorithm__WEBPACK_IMPORTED_MODULE_1__.getSolidColor)(colorBgBase, 15),
    colorBorderSecondary: (0,_colorAlgorithm__WEBPACK_IMPORTED_MODULE_1__.getSolidColor)(colorBgBase, 6)
  };
};

/***/ }),

/***/ "../node_modules/antd/es/theme/themes/default/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/antd/es/theme/themes/default/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ derivative)
/* harmony export */ });
/* harmony import */ var _ant_design_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/colors */ "../node_modules/@ant-design/colors/es/index.js");
/* harmony import */ var _shared_genControlHeight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/genControlHeight */ "../node_modules/antd/es/theme/themes/shared/genControlHeight.js");
/* harmony import */ var _shared_genSizeMapToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/genSizeMapToken */ "../node_modules/antd/es/theme/themes/shared/genSizeMapToken.js");
/* harmony import */ var _seed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../seed */ "../node_modules/antd/es/theme/themes/seed.js");
/* harmony import */ var _shared_genColorMapToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/genColorMapToken */ "../node_modules/antd/es/theme/themes/shared/genColorMapToken.js");
/* harmony import */ var _shared_genCommonMapToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/genCommonMapToken */ "../node_modules/antd/es/theme/themes/shared/genCommonMapToken.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colors */ "../node_modules/antd/es/theme/themes/default/colors.js");
/* harmony import */ var _shared_genFontMapToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/genFontMapToken */ "../node_modules/antd/es/theme/themes/shared/genFontMapToken.js");








function derivative(token) {
  const colorPalettes = Object.keys(_seed__WEBPACK_IMPORTED_MODULE_1__.defaultPresetColors).map(colorKey => {
    const colors = (0,_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.generate)(token[colorKey]);
    return new Array(10).fill(1).reduce((prev, _, i) => {
      prev[`${colorKey}-${i + 1}`] = colors[i];
      prev[`${colorKey}${i + 1}`] = colors[i];
      return prev;
    }, {});
  }).reduce((prev, cur) => {
    prev = Object.assign(Object.assign({}, prev), cur);
    return prev;
  }, {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, token), colorPalettes), (0,_shared_genColorMapToken__WEBPACK_IMPORTED_MODULE_2__["default"])(token, {
    generateColorPalettes: _colors__WEBPACK_IMPORTED_MODULE_3__.generateColorPalettes,
    generateNeutralColorPalettes: _colors__WEBPACK_IMPORTED_MODULE_3__.generateNeutralColorPalettes
  })), (0,_shared_genFontMapToken__WEBPACK_IMPORTED_MODULE_4__["default"])(token.fontSize)), (0,_shared_genSizeMapToken__WEBPACK_IMPORTED_MODULE_5__["default"])(token)), (0,_shared_genControlHeight__WEBPACK_IMPORTED_MODULE_6__["default"])(token)), (0,_shared_genCommonMapToken__WEBPACK_IMPORTED_MODULE_7__["default"])(token));
}

/***/ }),

/***/ "../node_modules/antd/es/theme/themes/seed.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/theme/themes/seed.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultPresetColors: () => (/* binding */ defaultPresetColors)
/* harmony export */ });
const defaultPresetColors = {
  blue: '#1677ff',
  purple: '#722ED1',
  cyan: '#13C2C2',
  green: '#52C41A',
  magenta: '#EB2F96',
  pink: '#eb2f96',
  red: '#F5222D',
  orange: '#FA8C16',
  yellow: '#FADB14',
  volcano: '#FA541C',
  geekblue: '#2F54EB',
  gold: '#FAAD14',
  lime: '#A0D911'
};
const seedToken = Object.assign(Object.assign({}, defaultPresetColors), {
  // Color
  colorPrimary: '#1677ff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  colorInfo: '#1677ff',
  colorLink: '',
  colorTextBase: '',
  colorBgBase: '',
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: 'solid',
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
  motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
  motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
  motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1000,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false,
  // Motion
  motion: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (seedToken);

/***/ }),

/***/ "../node_modules/antd/es/theme/themes/shared/genColorMapToken.js":
/*!***********************************************************************!*\
  !*** ../node_modules/antd/es/theme/themes/shared/genColorMapToken.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ genColorMapToken)
/* harmony export */ });
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ctrl/tinycolor */ "../node_modules/@ctrl/tinycolor/dist/module/index.js");

function genColorMapToken(seed, _ref) {
  let {
    generateColorPalettes,
    generateNeutralColorPalettes
  } = _ref;
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase
  } = seed;
  const primaryColors = generateColorPalettes(colorPrimaryBase);
  const successColors = generateColorPalettes(colorSuccessBase);
  const warningColors = generateColorPalettes(colorWarningBase);
  const errorColors = generateColorPalettes(colorErrorBase);
  const infoColors = generateColorPalettes(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase);
  // Color Link
  const colorLink = seed.colorLink || seed.colorInfo;
  const linkColors = generateColorPalettes(colorLink);
  return Object.assign(Object.assign({}, neutralColors), {
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorLinkHover: linkColors[4],
    colorLink: linkColors[6],
    colorLinkActive: linkColors[7],
    colorBgMask: new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__.TinyColor('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff'
  });
}

/***/ }),

/***/ "../node_modules/antd/es/theme/themes/shared/genCommonMapToken.js":
/*!************************************************************************!*\
  !*** ../node_modules/antd/es/theme/themes/shared/genCommonMapToken.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ genCommonMapToken)
/* harmony export */ });
/* harmony import */ var _genRadius__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genRadius */ "../node_modules/antd/es/theme/themes/shared/genRadius.js");

function genCommonMapToken(token) {
  const {
    motionUnit,
    motionBase,
    borderRadius,
    lineWidth
  } = token;
  return Object.assign({
    // motion
    motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
    motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
    motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
    // line
    lineWidthBold: lineWidth + 1
  }, (0,_genRadius__WEBPACK_IMPORTED_MODULE_0__["default"])(borderRadius));
}

/***/ }),

/***/ "../node_modules/antd/es/theme/themes/shared/genControlHeight.js":
/*!***********************************************************************!*\
  !*** ../node_modules/antd/es/theme/themes/shared/genControlHeight.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const genControlHeight = token => {
  const {
    controlHeight
  } = token;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genControlHeight);

/***/ }),

/***/ "../node_modules/antd/es/theme/themes/shared/genFontMapToken.js":
/*!**********************************************************************!*\
  !*** ../node_modules/antd/es/theme/themes/shared/genFontMapToken.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _genFontSizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genFontSizes */ "../node_modules/antd/es/theme/themes/shared/genFontSizes.js");

const genFontMapToken = fontSize => {
  const fontSizePairs = (0,_genFontSizes__WEBPACK_IMPORTED_MODULE_0__["default"])(fontSize);
  const fontSizes = fontSizePairs.map(pair => pair.size);
  const lineHeights = fontSizePairs.map(pair => pair.lineHeight);
  const fontSizeMD = fontSizes[1];
  const fontSizeSM = fontSizes[0];
  const fontSizeLG = fontSizes[2];
  const lineHeight = lineHeights[1];
  const lineHeightSM = lineHeights[0];
  const lineHeightLG = lineHeights[2];
  return {
    fontSizeSM,
    fontSize: fontSizeMD,
    fontSizeLG,
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight,
    lineHeightLG,
    lineHeightSM,
    fontHeight: Math.round(lineHeight * fontSizeMD),
    fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
    fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2]
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genFontMapToken);

/***/ }),

/***/ "../node_modules/antd/es/theme/themes/shared/genFontSizes.js":
/*!*******************************************************************!*\
  !*** ../node_modules/antd/es/theme/themes/shared/genFontSizes.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFontSizes),
/* harmony export */   getLineHeight: () => (/* binding */ getLineHeight)
/* harmony export */ });
function getLineHeight(fontSize) {
  return (fontSize + 8) / fontSize;
}
// https://zhuanlan.zhihu.com/p/32746810
function getFontSizes(base) {
  const fontSizes = new Array(10).fill(null).map((_, index) => {
    const i = index - 1;
    const baseSize = base * Math.pow(2.71828, i / 5);
    const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    // Convert to even
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map(size => ({
    size,
    lineHeight: getLineHeight(size)
  }));
}

/***/ }),

/***/ "../node_modules/antd/es/theme/themes/shared/genRadius.js":
/*!****************************************************************!*\
  !*** ../node_modules/antd/es/theme/themes/shared/genRadius.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const genRadius = radiusBase => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  // radiusLG
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  // radiusSM
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  // radiusXS
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  // radiusOuter
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genRadius);

/***/ }),

/***/ "../node_modules/antd/es/theme/themes/shared/genSizeMapToken.js":
/*!**********************************************************************!*\
  !*** ../node_modules/antd/es/theme/themes/shared/genSizeMapToken.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ genSizeMapToken)
/* harmony export */ });
function genSizeMapToken(token) {
  const {
    sizeUnit,
    sizeStep
  } = token;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    // 48
    sizeXL: sizeUnit * (sizeStep + 4),
    // 32
    sizeLG: sizeUnit * (sizeStep + 2),
    // 24
    sizeMD: sizeUnit * (sizeStep + 1),
    // 20
    sizeMS: sizeUnit * sizeStep,
    // 16
    size: sizeUnit * sizeStep,
    // 16
    sizeSM: sizeUnit * (sizeStep - 1),
    // 12
    sizeXS: sizeUnit * (sizeStep - 2),
    // 8
    sizeXXS: sizeUnit * (sizeStep - 3) // 4
  };
}

/***/ }),

/***/ "../node_modules/antd/es/theme/useToken.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/theme/useToken.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useToken),
/* harmony export */   getComputedToken: () => (/* binding */ getComputedToken),
/* harmony export */   ignore: () => (/* binding */ ignore),
/* harmony export */   unitless: () => (/* binding */ unitless)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../version */ "../node_modules/antd/es/version/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "../node_modules/antd/es/theme/context.js");
/* harmony import */ var _themes_seed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./themes/seed */ "../node_modules/antd/es/theme/themes/seed.js");
/* harmony import */ var _util_alias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/alias */ "../node_modules/antd/es/theme/util/alias.js");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






const unitless = {
  lineHeight: true,
  lineHeightSM: true,
  lineHeightLG: true,
  lineHeightHeading1: true,
  lineHeightHeading2: true,
  lineHeightHeading3: true,
  lineHeightHeading4: true,
  lineHeightHeading5: true,
  opacityLoading: true,
  fontWeightStrong: true,
  zIndexPopupBase: true,
  zIndexBase: true
};
const ignore = {
  size: true,
  sizeSM: true,
  sizeLG: true,
  sizeMD: true,
  sizeXS: true,
  sizeXXS: true,
  sizeMS: true,
  sizeXL: true,
  sizeXXL: true,
  sizeUnit: true,
  sizeStep: true,
  motionBase: true,
  motionUnit: true
};
const preserve = {
  screenXS: true,
  screenXSMin: true,
  screenXSMax: true,
  screenSM: true,
  screenSMMin: true,
  screenSMMax: true,
  screenMD: true,
  screenMDMin: true,
  screenMDMax: true,
  screenLG: true,
  screenLGMin: true,
  screenLGMax: true,
  screenXL: true,
  screenXLMin: true,
  screenXLMax: true,
  screenXXL: true,
  screenXXLMin: true
};
const getComputedToken = (originToken, overrideToken, theme) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  const {
      override
    } = overrideToken,
    components = __rest(overrideToken, ["override"]);
  // Merge with override
  let mergedDerivativeToken = Object.assign(Object.assign({}, derivativeToken), {
    override
  });
  // Format if needed
  mergedDerivativeToken = (0,_util_alias__WEBPACK_IMPORTED_MODULE_2__["default"])(mergedDerivativeToken);
  if (components) {
    Object.entries(components).forEach(_ref => {
      let [key, value] = _ref;
      const {
          theme: componentTheme
        } = value,
        componentTokens = __rest(value, ["theme"]);
      let mergedComponentToken = componentTokens;
      if (componentTheme) {
        mergedComponentToken = getComputedToken(Object.assign(Object.assign({}, mergedDerivativeToken), componentTokens), {
          override: componentTokens
        }, componentTheme);
      }
      mergedDerivativeToken[key] = mergedComponentToken;
    });
  }
  return mergedDerivativeToken;
};
// ================================== Hook ==================================
function useToken() {
  const {
    token: rootDesignToken,
    hashed,
    theme,
    override,
    cssVar
  } = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_context__WEBPACK_IMPORTED_MODULE_3__.DesignTokenContext);
  const salt = `${_version__WEBPACK_IMPORTED_MODULE_4__["default"]}-${hashed || ''}`;
  const mergedTheme = theme || _context__WEBPACK_IMPORTED_MODULE_3__.defaultTheme;
  const [token, hashId, realToken] = (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_1__.useCacheToken)(mergedTheme, [_themes_seed__WEBPACK_IMPORTED_MODULE_5__["default"], rootDesignToken], {
    salt,
    override,
    getComputedToken,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: _util_alias__WEBPACK_IMPORTED_MODULE_2__["default"],
    cssVar: cssVar && {
      prefix: cssVar.prefix,
      key: cssVar.key,
      unitless,
      ignore,
      preserve
    }
  });
  return [mergedTheme, realToken, hashed ? hashId : '', token, cssVar];
}

/***/ }),

/***/ "../node_modules/antd/es/theme/util/alias.js":
/*!***************************************************!*\
  !*** ../node_modules/antd/es/theme/util/alias.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatToken)
/* harmony export */ });
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ctrl/tinycolor */ "../node_modules/@ctrl/tinycolor/dist/module/index.js");
/* harmony import */ var _themes_seed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../themes/seed */ "../node_modules/antd/es/theme/themes/seed.js");
/* harmony import */ var _getAlphaColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAlphaColor */ "../node_modules/antd/es/theme/util/getAlphaColor.js");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



/**
 * Seed (designer) > Derivative (designer) > Alias (developer).
 *
 * Merge seed & derivative & override token and generate alias token for developer.
 */
function formatToken(derivativeToken) {
  const {
      override
    } = derivativeToken,
    restToken = __rest(derivativeToken, ["override"]);
  const overrideTokens = Object.assign({}, override);
  Object.keys(_themes_seed__WEBPACK_IMPORTED_MODULE_0__["default"]).forEach(token => {
    delete overrideTokens[token];
  });
  const mergedToken = Object.assign(Object.assign({}, restToken), overrideTokens);
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  // Motion
  if (mergedToken.motion === false) {
    const fastDuration = '0s';
    mergedToken.motionDurationFast = fastDuration;
    mergedToken.motionDurationMid = fastDuration;
    mergedToken.motionDurationSlow = fastDuration;
  }
  // Generate alias token
  const aliasToken = Object.assign(Object.assign(Object.assign({}, mergedToken), {
    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: (0,_getAlphaColor__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,
    colorHighlight: mergedToken.colorError,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,
    colorIcon: mergedToken.colorTextTertiary,
    colorIconHover: mergedToken.colorText,
    colorErrorOutline: (0,_getAlphaColor__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
    colorWarningOutline: (0,_getAlphaColor__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
    // Font
    fontSizeIcon: mergedToken.fontSizeSM,
    // Line
    lineWidthFocus: mergedToken.lineWidth * 4,
    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,
    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
    controlItemBgActiveDisabled: mergedToken.colorFill,
    controlTmpOutline: mergedToken.colorFillQuaternary,
    controlOutline: (0,_getAlphaColor__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
    lineType: mergedToken.lineType,
    borderRadius: mergedToken.borderRadius,
    borderRadiusXS: mergedToken.borderRadiusXS,
    borderRadiusSM: mergedToken.borderRadiusSM,
    borderRadiusLG: mergedToken.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: 'none',
    linkHoverDecoration: 'none',
    linkFocusDecoration: 'none',
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,
    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,
    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
    boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
    boxShadowCard: `
      0 1px 2px -2px ${new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__.TinyColor('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__.TinyColor('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__.TinyColor('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
    boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
    boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
    boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)'
  }), overrideTokens);
  return aliasToken;
}

/***/ }),

/***/ "../node_modules/antd/es/theme/util/calc/CSSCalculator.js":
/*!****************************************************************!*\
  !*** ../node_modules/antd/es/theme/util/calc/CSSCalculator.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CSSCalculator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/isNativeReflectConstruct */ "../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculator */ "../node_modules/antd/es/theme/util/calc/calculator.js");






function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, (0,_babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_3__["default"])() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }

const CALC_UNIT = 'CALC_UNIT';
function unit(value) {
  if (typeof value === 'number') {
    return `${value}${CALC_UNIT}`;
  }
  return value;
}
let CSSCalculator = /*#__PURE__*/function (_AbstractCalculator) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CSSCalculator, _AbstractCalculator);
  function CSSCalculator(num) {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CSSCalculator);
    _this = _callSuper(this, CSSCalculator);
    _this.result = '';
    if (num instanceof CSSCalculator) {
      _this.result = `(${num.result})`;
    } else if (typeof num === 'number') {
      _this.result = unit(num);
    } else if (typeof num === 'string') {
      _this.result = num;
    }
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CSSCalculator, [{
    key: "add",
    value: function add(num) {
      if (num instanceof CSSCalculator) {
        this.result = `${this.result} + ${num.getResult()}`;
      } else if (typeof num === 'number' || typeof num === 'string') {
        this.result = `${this.result} + ${unit(num)}`;
      }
      this.lowPriority = true;
      return this;
    }
  }, {
    key: "sub",
    value: function sub(num) {
      if (num instanceof CSSCalculator) {
        this.result = `${this.result} - ${num.getResult()}`;
      } else if (typeof num === 'number' || typeof num === 'string') {
        this.result = `${this.result} - ${unit(num)}`;
      }
      this.lowPriority = true;
      return this;
    }
  }, {
    key: "mul",
    value: function mul(num) {
      if (this.lowPriority) {
        this.result = `(${this.result})`;
      }
      if (num instanceof CSSCalculator) {
        this.result = `${this.result} * ${num.getResult(true)}`;
      } else if (typeof num === 'number' || typeof num === 'string') {
        this.result = `${this.result} * ${num}`;
      }
      this.lowPriority = false;
      return this;
    }
  }, {
    key: "div",
    value: function div(num) {
      if (this.lowPriority) {
        this.result = `(${this.result})`;
      }
      if (num instanceof CSSCalculator) {
        this.result = `${this.result} / ${num.getResult(true)}`;
      } else if (typeof num === 'number' || typeof num === 'string') {
        this.result = `${this.result} / ${num}`;
      }
      this.lowPriority = false;
      return this;
    }
  }, {
    key: "getResult",
    value: function getResult(force) {
      return this.lowPriority || force ? `(${this.result})` : this.result;
    }
  }, {
    key: "equal",
    value: function equal(options) {
      const {
        unit: cssUnit = true
      } = options || {};
      const regexp = new RegExp(`${CALC_UNIT}`, 'g');
      this.result = this.result.replace(regexp, cssUnit ? 'px' : '');
      if (typeof this.lowPriority !== 'undefined') {
        return `calc(${this.result})`;
      }
      return this.result;
    }
  }]);
  return CSSCalculator;
}(_calculator__WEBPACK_IMPORTED_MODULE_6__["default"]);


/***/ }),

/***/ "../node_modules/antd/es/theme/util/calc/NumCalculator.js":
/*!****************************************************************!*\
  !*** ../node_modules/antd/es/theme/util/calc/NumCalculator.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NumCalculator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/isNativeReflectConstruct */ "../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculator */ "../node_modules/antd/es/theme/util/calc/calculator.js");






function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, (0,_babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_3__["default"])() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }

let NumCalculator = /*#__PURE__*/function (_AbstractCalculator) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NumCalculator, _AbstractCalculator);
  function NumCalculator(num) {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NumCalculator);
    _this = _callSuper(this, NumCalculator);
    _this.result = 0;
    if (num instanceof NumCalculator) {
      _this.result = num.result;
    } else if (typeof num === 'number') {
      _this.result = num;
    }
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NumCalculator, [{
    key: "add",
    value: function add(num) {
      if (num instanceof NumCalculator) {
        this.result += num.result;
      } else if (typeof num === 'number') {
        this.result += num;
      }
      return this;
    }
  }, {
    key: "sub",
    value: function sub(num) {
      if (num instanceof NumCalculator) {
        this.result -= num.result;
      } else if (typeof num === 'number') {
        this.result -= num;
      }
      return this;
    }
  }, {
    key: "mul",
    value: function mul(num) {
      if (num instanceof NumCalculator) {
        this.result *= num.result;
      } else if (typeof num === 'number') {
        this.result *= num;
      }
      return this;
    }
  }, {
    key: "div",
    value: function div(num) {
      if (num instanceof NumCalculator) {
        this.result /= num.result;
      } else if (typeof num === 'number') {
        this.result /= num;
      }
      return this;
    }
  }, {
    key: "equal",
    value: function equal() {
      return this.result;
    }
  }]);
  return NumCalculator;
}(_calculator__WEBPACK_IMPORTED_MODULE_6__["default"]);


/***/ }),

/***/ "../node_modules/antd/es/theme/util/calc/calculator.js":
/*!*************************************************************!*\
  !*** ../node_modules/antd/es/theme/util/calc/calculator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");


let AbstractCalculator = /*#__PURE__*/(0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function AbstractCalculator() {
  (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AbstractCalculator);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AbstractCalculator);

/***/ }),

/***/ "../node_modules/antd/es/theme/util/calc/index.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/theme/util/calc/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NumCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NumCalculator */ "../node_modules/antd/es/theme/util/calc/NumCalculator.js");
/* harmony import */ var _CSSCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSCalculator */ "../node_modules/antd/es/theme/util/calc/CSSCalculator.js");


const genCalc = type => {
  const Calculator = type === 'css' ? _CSSCalculator__WEBPACK_IMPORTED_MODULE_0__["default"] : _NumCalculator__WEBPACK_IMPORTED_MODULE_1__["default"];
  return num => new Calculator(num);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genCalc);

/***/ }),

/***/ "../node_modules/antd/es/theme/util/genComponentStyleHook.js":
/*!*******************************************************************!*\
  !*** ../node_modules/antd/es/theme/util/genComponentStyleHook.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ genComponentStyleHook),
/* harmony export */   genStyleHooks: () => (/* binding */ genStyleHooks),
/* harmony export */   genSubStyleComponent: () => (/* binding */ genSubStyleComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var rc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util */ "../node_modules/rc-util/es/index.js");
/* harmony import */ var _config_provider_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config-provider/context */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../style */ "../node_modules/antd/es/style/index.js");
/* harmony import */ var _useToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useToken */ "../node_modules/antd/es/theme/useToken.js");
/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calc */ "../node_modules/antd/es/theme/util/calc/index.js");
/* harmony import */ var _maxmin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./maxmin */ "../node_modules/antd/es/theme/util/maxmin.js");
/* harmony import */ var _statistic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistic */ "../node_modules/antd/es/theme/util/statistic.js");
/* harmony import */ var _useResetIconStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useResetIconStyle */ "../node_modules/antd/es/theme/util/useResetIconStyle.js");
"use client";











const getDefaultComponentToken = (component, token, getDefaultToken) => {
  var _a;
  if (typeof getDefaultToken === 'function') {
    return getDefaultToken((0,_statistic__WEBPACK_IMPORTED_MODULE_3__.merge)(token, (_a = token[component]) !== null && _a !== void 0 ? _a : {}));
  }
  return getDefaultToken !== null && getDefaultToken !== void 0 ? getDefaultToken : {};
};
const getComponentToken = (component, token, defaultToken, options) => {
  const customToken = Object.assign({}, token[component]);
  if (options === null || options === void 0 ? void 0 : options.deprecatedTokens) {
    const {
      deprecatedTokens
    } = options;
    deprecatedTokens.forEach(_ref => {
      let [oldTokenKey, newTokenKey] = _ref;
      var _a;
      if (true) {
         true ? (0,rc_util__WEBPACK_IMPORTED_MODULE_2__.warning)(!(customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey]), `Component Token \`${String(oldTokenKey)}\` of ${component} is deprecated. Please use \`${String(newTokenKey)}\` instead.`) : 0;
      }
      // Should wrap with `if` clause, or there will be `undefined` in object.
      if ((customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey]) || (customToken === null || customToken === void 0 ? void 0 : customToken[newTokenKey])) {
        (_a = customToken[newTokenKey]) !== null && _a !== void 0 ? _a : customToken[newTokenKey] = customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey];
      }
    });
  }
  const mergedToken = Object.assign(Object.assign({}, defaultToken), customToken);
  // Remove same value as global token to minimize size
  Object.keys(mergedToken).forEach(key => {
    if (mergedToken[key] === token[key]) {
      delete mergedToken[key];
    }
  });
  return mergedToken;
};
const getCompVarPrefix = (component, prefix) => `${[prefix, component.replace(/([A-Z]+)([A-Z][a-z]+)/g, '$1-$2').replace(/([a-z])([A-Z])/g, '$1-$2')].filter(Boolean).join('-')}`;
function genComponentStyleHook(componentName, styleFn, getDefaultToken) {
  let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const cells = Array.isArray(componentName) ? componentName : [componentName, componentName];
  const [component] = cells;
  const concatComponent = cells.join('-');
  return prefixCls => {
    const [theme, realToken, hashId, token, cssVar] = (0,_useToken__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const {
      getPrefixCls,
      iconPrefixCls,
      csp
    } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_config_provider_context__WEBPACK_IMPORTED_MODULE_5__.ConfigContext);
    const rootPrefixCls = getPrefixCls();
    const type = cssVar ? 'css' : 'js';
    const calc = (0,_calc__WEBPACK_IMPORTED_MODULE_6__["default"])(type);
    const {
      max,
      min
    } = (0,_maxmin__WEBPACK_IMPORTED_MODULE_7__["default"])(type);
    // Shared config
    const sharedConfig = {
      theme,
      token,
      hashId,
      nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce,
      clientOnly: options.clientOnly,
      // antd is always at top of styles
      order: options.order || -999
    };
    // Generate style for all a tags in antd component.
    (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_1__.useStyleRegister)(Object.assign(Object.assign({}, sharedConfig), {
      clientOnly: false,
      path: ['Shared', rootPrefixCls]
    }), () => [{
      // Link
      '&': (0,_style__WEBPACK_IMPORTED_MODULE_8__.genLinkStyle)(token)
    }]);
    // Generate style for icons
    (0,_useResetIconStyle__WEBPACK_IMPORTED_MODULE_9__["default"])(iconPrefixCls, csp);
    const wrapSSR = (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_1__.useStyleRegister)(Object.assign(Object.assign({}, sharedConfig), {
      path: [concatComponent, prefixCls, iconPrefixCls]
    }), () => {
      if (options.injectStyle === false) {
        return [];
      }
      const {
        token: proxyToken,
        flush
      } = (0,_statistic__WEBPACK_IMPORTED_MODULE_3__["default"])(token);
      const defaultComponentToken = getDefaultComponentToken(component, realToken, getDefaultToken);
      const componentCls = `.${prefixCls}`;
      const componentToken = getComponentToken(component, realToken, defaultComponentToken, {
        deprecatedTokens: options.deprecatedTokens
      });
      if (cssVar) {
        Object.keys(defaultComponentToken).forEach(key => {
          defaultComponentToken[key] = `var(${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_1__.token2CSSVar)(key, getCompVarPrefix(component, cssVar.prefix))})`;
        });
      }
      const mergedToken = (0,_statistic__WEBPACK_IMPORTED_MODULE_3__.merge)(proxyToken, {
        componentCls,
        prefixCls,
        iconCls: `.${iconPrefixCls}`,
        antCls: `.${rootPrefixCls}`,
        calc,
        max,
        min
      }, cssVar ? defaultComponentToken : componentToken);
      const styleInterpolation = styleFn(mergedToken, {
        hashId,
        prefixCls,
        rootPrefixCls,
        iconPrefixCls
      });
      flush(component, componentToken);
      return [options.resetStyle === false ? null : (0,_style__WEBPACK_IMPORTED_MODULE_8__.genCommonStyle)(mergedToken, prefixCls), styleInterpolation];
    });
    return [wrapSSR, hashId];
  };
}
const genSubStyleComponent = (componentName, styleFn, getDefaultToken, options) => {
  const useStyle = genComponentStyleHook(componentName, styleFn, getDefaultToken, Object.assign({
    resetStyle: false,
    // Sub Style should default after root one
    order: -998
  }, options));
  const StyledComponent = _ref2 => {
    let {
      prefixCls
    } = _ref2;
    useStyle(prefixCls);
    return null;
  };
  if (true) {
    StyledComponent.displayName = `SubStyle_${Array.isArray(componentName) ? componentName.join('.') : componentName}`;
  }
  return StyledComponent;
};
const genCSSVarRegister = (component, getDefaultToken, options) => {
  function prefixToken(key) {
    return `${component}${key.slice(0, 1).toUpperCase()}${key.slice(1)}`;
  }
  const {
    unitless: originUnitless = {},
    injectStyle = true
  } = options !== null && options !== void 0 ? options : {};
  const compUnitless = {
    [prefixToken('zIndexPopup')]: true
  };
  Object.keys(originUnitless).forEach(key => {
    compUnitless[prefixToken(key)] = originUnitless[key];
  });
  const CSSVarRegister = _ref3 => {
    let {
      rootCls,
      cssVar
    } = _ref3;
    const [, realToken] = (0,_useToken__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_1__.useCSSVarRegister)({
      path: [component],
      prefix: cssVar.prefix,
      key: cssVar === null || cssVar === void 0 ? void 0 : cssVar.key,
      unitless: Object.assign(Object.assign({}, _useToken__WEBPACK_IMPORTED_MODULE_4__.unitless), compUnitless),
      ignore: _useToken__WEBPACK_IMPORTED_MODULE_4__.ignore,
      token: realToken,
      scope: rootCls
    }, () => {
      const defaultToken = getDefaultComponentToken(component, realToken, getDefaultToken);
      const componentToken = getComponentToken(component, realToken, defaultToken, {
        deprecatedTokens: options === null || options === void 0 ? void 0 : options.deprecatedTokens
      });
      Object.keys(defaultToken).forEach(key => {
        componentToken[prefixToken(key)] = componentToken[key];
        delete componentToken[key];
      });
      return componentToken;
    });
    return null;
  };
  const useCSSVar = rootCls => {
    const [,,,, cssVar] = (0,_useToken__WEBPACK_IMPORTED_MODULE_4__["default"])();
    return [node => injectStyle && cssVar ? ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CSSVarRegister, {
      rootCls: rootCls,
      cssVar: cssVar,
      component: component
    }), node)) : node, cssVar === null || cssVar === void 0 ? void 0 : cssVar.key];
  };
  return useCSSVar;
};
const genStyleHooks = (component, styleFn, getDefaultToken, options) => {
  const useStyle = genComponentStyleHook(component, styleFn, getDefaultToken, options);
  const useCSSVar = genCSSVarRegister(Array.isArray(component) ? component[0] : component, getDefaultToken, options);
  return function (prefixCls) {
    let rootCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prefixCls;
    const [, hashId] = useStyle(prefixCls);
    const [wrapCSSVar, cssVarCls] = useCSSVar(rootCls);
    return [wrapCSSVar, hashId, cssVarCls];
  };
};

/***/ }),

/***/ "../node_modules/antd/es/theme/util/genPresetColor.js":
/*!************************************************************!*\
  !*** ../node_modules/antd/es/theme/util/genPresetColor.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ genPresetColor)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interface */ "../node_modules/antd/es/theme/interface/presetColors.js");

function genPresetColor(token, genCss) {
  return _interface__WEBPACK_IMPORTED_MODULE_0__.PresetColors.reduce((prev, colorKey) => {
    const lightColor = token[`${colorKey}1`];
    const lightBorderColor = token[`${colorKey}3`];
    const darkColor = token[`${colorKey}6`];
    const textColor = token[`${colorKey}7`];
    return Object.assign(Object.assign({}, prev), genCss(colorKey, {
      lightColor,
      lightBorderColor,
      darkColor,
      textColor
    }));
  }, {});
}

/***/ }),

/***/ "../node_modules/antd/es/theme/util/getAlphaColor.js":
/*!***********************************************************!*\
  !*** ../node_modules/antd/es/theme/util/getAlphaColor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ctrl/tinycolor */ "../node_modules/@ctrl/tinycolor/dist/module/index.js");

function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha
  } = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__.TinyColor(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const {
    r: bR,
    g: bG,
    b: bB
  } = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__.TinyColor(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA);
    const g = Math.round((fG - bG * (1 - fA)) / fA);
    const b = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
      return new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__.TinyColor({
        r,
        g,
        b,
        a: Math.round(fA * 100) / 100
      }).toRgbString();
    }
  }
  // fallback
  /* istanbul ignore next */
  return new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__.TinyColor({
    r: fR,
    g: fG,
    b: fB,
    a: 1
  }).toRgbString();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAlphaColor);

/***/ }),

/***/ "../node_modules/antd/es/theme/util/maxmin.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/theme/util/maxmin.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ genMaxMin)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");

function genMaxMin(type) {
  if (type === 'js') {
    return {
      max: Math.max,
      min: Math.min
    };
  }
  return {
    max: function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return `max(${args.map(value => (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(value)).join(',')})`;
    },
    min: function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return `min(${args.map(value => (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(value)).join(',')})`;
    }
  };
}

/***/ }),

/***/ "../node_modules/antd/es/theme/util/statistic.js":
/*!*******************************************************!*\
  !*** ../node_modules/antd/es/theme/util/statistic.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _statistic_build_: () => (/* binding */ _statistic_build_),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   merge: () => (/* binding */ merge),
/* harmony export */   statistic: () => (/* binding */ statistic)
/* harmony export */ });
const enableStatistic =  true || 0;
let recording = true;
/**
 * This function will do as `Object.assign` in production. But will use Object.defineProperty:get to
 * pass all value access in development. To support statistic field usage with alias token.
 */
function merge() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  /* istanbul ignore next */
  if (!enableStatistic) {
    return Object.assign.apply(Object, [{}].concat(objs));
  }
  recording = false;
  const ret = {};
  objs.forEach(obj => {
    const keys = Object.keys(obj);
    keys.forEach(key => {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: () => obj[key]
      });
    });
  });
  recording = true;
  return ret;
}
/** @internal Internal Usage. Not use in your production. */
const statistic = {};
/** @internal Internal Usage. Not use in your production. */
// eslint-disable-next-line camelcase
const _statistic_build_ = {};
/* istanbul ignore next */
function noop() {}
/** Statistic token usage case. Should use `merge` function if you do not want spread record. */
const statisticToken = token => {
  let tokenKeys;
  let proxy = token;
  let flush = noop;
  if (enableStatistic && typeof Proxy !== 'undefined') {
    tokenKeys = new Set();
    proxy = new Proxy(token, {
      get(obj, prop) {
        if (recording) {
          tokenKeys.add(prop);
        }
        return obj[prop];
      }
    });
    flush = (componentName, componentToken) => {
      var _a;
      statistic[componentName] = {
        global: Array.from(tokenKeys),
        component: Object.assign(Object.assign({}, (_a = statistic[componentName]) === null || _a === void 0 ? void 0 : _a.component), componentToken)
      };
    };
  }
  return {
    token: proxy,
    keys: tokenKeys,
    flush
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (statisticToken);

/***/ }),

/***/ "../node_modules/antd/es/theme/util/useResetIconStyle.js":
/*!***************************************************************!*\
  !*** ../node_modules/antd/es/theme/util/useResetIconStyle.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style */ "../node_modules/antd/es/style/index.js");
/* harmony import */ var _useToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useToken */ "../node_modules/antd/es/theme/useToken.js");



const useResetIconStyle = (iconPrefixCls, csp) => {
  const [theme, token] = (0,_useToken__WEBPACK_IMPORTED_MODULE_1__["default"])();
  // Generate style for icons
  return (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.useStyleRegister)({
    theme,
    token,
    hashId: '',
    path: ['ant-design-icons', iconPrefixCls],
    nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce
  }, () => [{
    [`.${iconPrefixCls}`]: Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_2__.resetIcon)()), {
      [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
        display: 'block'
      }
    })
  }]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useResetIconStyle);

/***/ }),

/***/ "../node_modules/antd/es/time-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ../node_modules/antd/es/time-picker/locale/en_US.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const locale = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "../node_modules/antd/es/tooltip/PurePanel.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/tooltip/PurePanel.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-tooltip */ "../node_modules/rc-tooltip/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "../node_modules/antd/es/tooltip/style/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "../node_modules/antd/es/tooltip/util.js");
"use client";







/** @private Internal Component. Do not use in your production. */
const PurePanel = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    placement = 'top',
    title,
    color,
    overlayInnerStyle
  } = props;
  const {
    getPrefixCls
  } = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_3__.ConfigContext);
  const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,_style__WEBPACK_IMPORTED_MODULE_4__["default"])(prefixCls);
  // Color
  const colorInfo = (0,_util__WEBPACK_IMPORTED_MODULE_5__.parseColor)(prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const formattedOverlayInnerStyle = Object.assign(Object.assign({}, overlayInnerStyle), colorInfo.overlayStyle);
  const cls = classnames__WEBPACK_IMPORTED_MODULE_0___default()(hashId, cssVarCls, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className, colorInfo.className);
  return wrapCSSVar( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: cls,
    style: arrowContentStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: `${prefixCls}-arrow`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(rc_tooltip__WEBPACK_IMPORTED_MODULE_1__.Popup, Object.assign({}, props, {
    className: hashId,
    prefixCls: prefixCls,
    overlayInnerStyle: formattedOverlayInnerStyle
  }), title)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurePanel);

/***/ }),

/***/ "../node_modules/antd/es/tooltip/index.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/tooltip/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-tooltip */ "../node_modules/rc-tooltip/es/index.js");
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/hooks/useMergedState */ "../node_modules/rc-util/es/hooks/useMergedState.js");
/* harmony import */ var _util_hooks_useZIndex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_util/hooks/useZIndex */ "../node_modules/antd/es/_util/hooks/useZIndex.js");
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_util/motion */ "../node_modules/antd/es/_util/motion.js");
/* harmony import */ var _util_placements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_util/placements */ "../node_modules/antd/es/_util/placements.js");
/* harmony import */ var _util_reactNode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_util/reactNode */ "../node_modules/antd/es/_util/reactNode.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _util_zindexContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_util/zindexContext */ "../node_modules/antd/es/_util/zindexContext.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config-provider */ "../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _space_Compact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../space/Compact */ "../node_modules/antd/es/space/Compact.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/internal */ "../node_modules/antd/es/theme/useToken.js");
/* harmony import */ var _PurePanel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PurePanel */ "../node_modules/antd/es/tooltip/PurePanel.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style */ "../node_modules/antd/es/tooltip/style/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util */ "../node_modules/antd/es/tooltip/util.js");
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
















const Tooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
  var _a, _b;
  const {
    prefixCls: customizePrefixCls,
    openClassName,
    getTooltipContainer,
    overlayClassName,
    color,
    overlayInnerStyle,
    children,
    afterOpenChange,
    afterVisibleChange,
    destroyTooltipOnHide,
    arrow = true,
    title,
    overlay,
    builtinPlacements,
    arrowPointAtCenter = false,
    autoAdjustOverflow = true
  } = props;
  const mergedShowArrow = !!arrow;
  const [, token] = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_5__.ConfigContext);
  // ============================== Ref ===============================
  const warning = (0,_util_warning__WEBPACK_IMPORTED_MODULE_6__.devUseWarning)('Tooltip');
  const tooltipRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const forceAlign = () => {
    var _a;
    (_a = tooltipRef.current) === null || _a === void 0 ? void 0 : _a.forceAlign();
  };
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, () => ({
    forceAlign,
    forcePopupAlign: () => {
      warning.deprecated(false, 'forcePopupAlign', 'forceAlign');
      forceAlign();
    }
  }));
  // ============================== Warn ==============================
  if (true) {
    [['visible', 'open'], ['defaultVisible', 'defaultOpen'], ['onVisibleChange', 'onOpenChange'], ['afterVisibleChange', 'afterOpenChange'], ['arrowPointAtCenter', 'arrow={{ pointAtCenter: true }}']].forEach(_ref => {
      let [deprecatedName, newName] = _ref;
      warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
     true ? warning(!destroyTooltipOnHide || typeof destroyTooltipOnHide === 'boolean', 'usage', '`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly.') : 0;
     true ? warning(!arrow || typeof arrow === 'boolean' || !('arrowPointAtCenter' in arrow), 'deprecated', '`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead.') : 0;
  }
  // ============================== Open ==============================
  const [open, setOpen] = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_3__["default"])(false, {
    value: (_a = props.open) !== null && _a !== void 0 ? _a : props.visible,
    defaultValue: (_b = props.defaultOpen) !== null && _b !== void 0 ? _b : props.defaultVisible
  });
  const noTitle = !title && !overlay && title !== 0; // overlay for old version compatibility
  const onOpenChange = vis => {
    var _a, _b;
    setOpen(noTitle ? false : vis);
    if (!noTitle) {
      (_a = props.onOpenChange) === null || _a === void 0 ? void 0 : _a.call(props, vis);
      (_b = props.onVisibleChange) === null || _b === void 0 ? void 0 : _b.call(props, vis);
    }
  };
  const tooltipPlacements = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    var _a, _b;
    let mergedArrowPointAtCenter = arrowPointAtCenter;
    if (typeof arrow === 'object') {
      mergedArrowPointAtCenter = (_b = (_a = arrow.pointAtCenter) !== null && _a !== void 0 ? _a : arrow.arrowPointAtCenter) !== null && _b !== void 0 ? _b : arrowPointAtCenter;
    }
    return builtinPlacements || (0,_util_placements__WEBPACK_IMPORTED_MODULE_7__["default"])({
      arrowPointAtCenter: mergedArrowPointAtCenter,
      autoAdjustOverflow,
      arrowWidth: mergedShowArrow ? token.sizePopupArrow : 0,
      borderRadius: token.borderRadius,
      offset: token.marginXXS,
      visibleFirst: true
    });
  }, [arrowPointAtCenter, arrow, builtinPlacements, token]);
  const memoOverlay = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (title === 0) {
      return title;
    }
    return overlay || title || '';
  }, [overlay, title]);
  const memoOverlayWrapper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_space_Compact__WEBPACK_IMPORTED_MODULE_8__.NoCompactStyle, null, typeof memoOverlay === 'function' ? memoOverlay() : memoOverlay);
  const {
      getPopupContainer,
      placement = 'top',
      mouseEnterDelay = 0.1,
      mouseLeaveDelay = 0.1,
      overlayStyle,
      rootClassName
    } = props,
    otherProps = __rest(props, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]);
  const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const injectFromPopover = props['data-popover-inject'];
  let tempOpen = open;
  // Hide tooltip when there is no title
  if (!('open' in props) && !('visible' in props) && noTitle) {
    tempOpen = false;
  }
  // ============================= Render =============================
  const child = (0,_util_reactNode__WEBPACK_IMPORTED_MODULE_9__.isValidElement)(children) && !(0,_util_reactNode__WEBPACK_IMPORTED_MODULE_9__.isFragment)(children) ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, children);
  const childProps = child.props;
  const childCls = !childProps.className || typeof childProps.className === 'string' ? classnames__WEBPACK_IMPORTED_MODULE_1___default()(childProps.className, openClassName || `${prefixCls}-open`) : childProps.className;
  // Style
  const [wrapCSSVar, hashId, cssVarCls] = (0,_style__WEBPACK_IMPORTED_MODULE_10__["default"])(prefixCls, !injectFromPopover);
  // Color
  const colorInfo = (0,_util__WEBPACK_IMPORTED_MODULE_11__.parseColor)(prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const formattedOverlayInnerStyle = Object.assign(Object.assign({}, overlayInnerStyle), colorInfo.overlayStyle);
  const customOverlayClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()(overlayClassName, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, colorInfo.className, rootClassName, hashId, cssVarCls);
  // ============================ zIndex ============================
  const [zIndex, contextZIndex] = (0,_util_hooks_useZIndex__WEBPACK_IMPORTED_MODULE_12__.useZIndex)('Tooltip', otherProps.zIndex);
  const content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(rc_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, otherProps, {
    zIndex: zIndex,
    showArrow: mergedShowArrow,
    placement: placement,
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay,
    prefixCls: prefixCls,
    overlayClassName: customOverlayClassName,
    overlayStyle: Object.assign(Object.assign({}, arrowContentStyle), overlayStyle),
    getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
    ref: tooltipRef,
    builtinPlacements: tooltipPlacements,
    overlay: memoOverlayWrapper,
    visible: tempOpen,
    onVisibleChange: onOpenChange,
    afterVisibleChange: afterOpenChange !== null && afterOpenChange !== void 0 ? afterOpenChange : afterVisibleChange,
    overlayInnerStyle: formattedOverlayInnerStyle,
    arrowContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: `${prefixCls}-arrow-content`
    }),
    motion: {
      motionName: (0,_util_motion__WEBPACK_IMPORTED_MODULE_13__.getTransitionName)(rootPrefixCls, 'zoom-big-fast', props.transitionName),
      motionDeadline: 1000
    },
    destroyTooltipOnHide: !!destroyTooltipOnHide
  }), tempOpen ? (0,_util_reactNode__WEBPACK_IMPORTED_MODULE_9__.cloneElement)(child, {
    className: childCls
  }) : child);
  return wrapCSSVar( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_zindexContext__WEBPACK_IMPORTED_MODULE_14__["default"].Provider, {
    value: contextZIndex
  }, content));
});
if (true) {
  Tooltip.displayName = 'Tooltip';
}
Tooltip._InternalPanelDoNotUseOrYouWillBeFired = _PurePanel__WEBPACK_IMPORTED_MODULE_15__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);

/***/ }),

/***/ "../node_modules/antd/es/tooltip/style/index.js":
/*!******************************************************!*\
  !*** ../node_modules/antd/es/tooltip/style/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   prepareComponentToken: () => (/* binding */ prepareComponentToken)
/* harmony export */ });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style */ "../node_modules/antd/es/style/index.js");
/* harmony import */ var _style_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../style/motion */ "../node_modules/antd/es/style/motion/zoom.js");
/* harmony import */ var _style_placementArrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/placementArrow */ "../node_modules/antd/es/style/placementArrow.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/genPresetColor.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/statistic.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme/internal */ "../node_modules/antd/es/theme/util/genComponentStyleHook.js");
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ "../node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var _style_roundedArrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../style/roundedArrow */ "../node_modules/antd/es/style/roundedArrow.js");






const genTooltipStyle = token => {
  const {
    componentCls,
    // ant-tooltip
    tooltipMaxWidth,
    tooltipColor,
    tooltipBg,
    tooltipBorderRadius,
    zIndexPopup,
    controlHeight,
    boxShadowSecondary,
    paddingSM,
    paddingXS
  } = token;
  return [{
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__.resetComponent)(token)), {
      position: 'absolute',
      zIndex: zIndexPopup,
      display: 'block',
      width: 'max-content',
      maxWidth: tooltipMaxWidth,
      visibility: 'visible',
      transformOrigin: `var(--arrow-x, 50%) var(--arrow-y, 50%)`,
      '&-hidden': {
        display: 'none'
      },
      '--antd-arrow-background-color': tooltipBg,
      // Wrapper for the tooltip content
      [`${componentCls}-inner`]: {
        minWidth: controlHeight,
        minHeight: controlHeight,
        padding: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.calc(paddingSM).div(2).equal())} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(paddingXS)}`,
        color: tooltipColor,
        textAlign: 'start',
        textDecoration: 'none',
        wordWrap: 'break-word',
        backgroundColor: tooltipBg,
        borderRadius: tooltipBorderRadius,
        boxShadow: boxShadowSecondary,
        boxSizing: 'border-box'
      },
      // Limit left and right placement radius
      [[`&-placement-left`, `&-placement-leftTop`, `&-placement-leftBottom`, `&-placement-right`, `&-placement-rightTop`, `&-placement-rightBottom`].join(',')]: {
        [`${componentCls}-inner`]: {
          borderRadius: token.min(tooltipBorderRadius, _style_placementArrow__WEBPACK_IMPORTED_MODULE_2__.MAX_VERTICAL_CONTENT_RADIUS)
        }
      },
      [`${componentCls}-content`]: {
        position: 'relative'
      }
    }), (0,_theme_internal__WEBPACK_IMPORTED_MODULE_3__["default"])(token, (colorKey, _ref) => {
      let {
        darkColor
      } = _ref;
      return {
        [`&${componentCls}-${colorKey}`]: {
          [`${componentCls}-inner`]: {
            backgroundColor: darkColor
          },
          [`${componentCls}-arrow`]: {
            '--antd-arrow-background-color': darkColor
          }
        }
      };
    })), {
      // RTL
      '&-rtl': {
        direction: 'rtl'
      }
    })
  },
  // Arrow Style
  (0,_style_placementArrow__WEBPACK_IMPORTED_MODULE_2__["default"])(token, 'var(--antd-arrow-background-color)'),
  // Pure Render
  {
    [`${componentCls}-pure`]: {
      position: 'relative',
      maxWidth: 'none',
      margin: token.sizePopupArrow
    }
  }];
};
// ============================== Export ==============================
const prepareComponentToken = token => Object.assign(Object.assign({
  zIndexPopup: token.zIndexPopupBase + 70
}, (0,_style_placementArrow__WEBPACK_IMPORTED_MODULE_2__.getArrowOffsetToken)({
  contentRadius: token.borderRadius,
  limitVerticalRadius: true
})), (0,_style_roundedArrow__WEBPACK_IMPORTED_MODULE_4__.getArrowToken)((0,_theme_internal__WEBPACK_IMPORTED_MODULE_5__.merge)(token, {
  borderRadiusOuter: Math.min(token.borderRadiusOuter, 4)
})));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (prefixCls) {
  let injectStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const useStyle = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_6__.genStyleHooks)('Tooltip', token => {
    const {
      borderRadius,
      colorTextLightSolid,
      colorBgSpotlight
    } = token;
    const TooltipToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_5__.merge)(token, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: colorTextLightSolid,
      tooltipBorderRadius: borderRadius,
      tooltipBg: colorBgSpotlight
    });
    return [genTooltipStyle(TooltipToken), (0,_style_motion__WEBPACK_IMPORTED_MODULE_7__.initZoomMotion)(token, 'zoom-big-fast')];
  }, prepareComponentToken, {
    resetStyle: false,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle
  });
  return useStyle(prefixCls);
});

/***/ }),

/***/ "../node_modules/antd/es/tooltip/util.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/tooltip/util.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseColor: () => (/* binding */ parseColor)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_util/colors */ "../node_modules/antd/es/_util/colors.js");
/* eslint-disable import/prefer-default-export */


function parseColor(prefixCls, color) {
  const isInternalColor = (0,_util_colors__WEBPACK_IMPORTED_MODULE_1__.isPresetColor)(color);
  const className = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
    [`${prefixCls}-${color}`]: color && isInternalColor
  });
  const overlayStyle = {};
  const arrowStyle = {};
  if (color && !isInternalColor) {
    overlayStyle.background = color;
    // @ts-ignore
    arrowStyle['--antd-arrow-background-color'] = color;
  }
  return {
    className,
    overlayStyle,
    arrowStyle
  };
}

/***/ }),

/***/ "../node_modules/antd/es/version/index.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/version/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "../node_modules/antd/es/version/version.js");
"use client";

/* eslint import/no-unresolved: 0 */
// @ts-ignore

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_version__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/version/version.js":
/*!**************************************************!*\
  !*** ../node_modules/antd/es/version/version.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('5.13.1');

/***/ }),

/***/ "../node_modules/antd/es/watermark/context.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/watermark/context.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   usePanelRef: () => (/* binding */ usePanelRef)
/* harmony export */ });
/* harmony import */ var rc_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-util */ "../node_modules/rc-util/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function voidFunc() {}
const WatermarkContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext({
  add: voidFunc,
  remove: voidFunc
});
function usePanelRef(panelSelector) {
  const watermark = react__WEBPACK_IMPORTED_MODULE_1__.useContext(WatermarkContext);
  const panelEleRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const panelRef = (0,rc_util__WEBPACK_IMPORTED_MODULE_0__.useEvent)(ele => {
    if (ele) {
      const innerContentEle = panelSelector ? ele.querySelector(panelSelector) : ele;
      watermark.add(innerContentEle);
      panelEleRef.current = innerContentEle;
    } else {
      watermark.remove(panelEleRef.current);
    }
  });
  return panelRef;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WatermarkContext);

/***/ })

}]);