webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@material-ui/icons/Explore.js":
false,

/***/ "./src/components/Home/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Home/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollableTabsButtonForce; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Room */ "./node_modules/@material-ui/icons/Room.js");
/* harmony import */ var _material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_SwapHorizontalCircle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/SwapHorizontalCircle */ "./node_modules/@material-ui/icons/SwapHorizontalCircle.js");
/* harmony import */ var _material_ui_icons_SwapHorizontalCircle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SwapHorizontalCircle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var components_CoordinateCurrent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/CoordinateCurrent */ "./src/components/CoordinateCurrent/index.tsx");
/* harmony import */ var components_CoordinateCalculator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/CoordinateCalculator */ "./src/components/CoordinateCalculator/index.tsx");
/* harmony import */ var components_Compass__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Compass */ "./src/components/Compass/index.tsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! utils/constants */ "./src/utils/constants.ts");


var _jsxFileName = "/Users/lyb/yb/explorer-src/src/components/Home/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: theme.palette.background.paper
    },
    title: {
      flexGrow: 1
    },
    content: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      height: "calc(100vh - 72px - 56px)",
      overflow: "scroll",
      position: "relative"
    }, "".concat(theme.breakpoints.up("sm")), {
      height: "calc(100vh - 72px - 64px)"
    })
  };
});
function ScrollableTabsButtonForce() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      tabIndex = _React$useState2[0],
      setTabIndex = _React$useState2[1];

  var handleChange = function handleChange(_, newValue) {
    setTabIndex(newValue);
  };

  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, utils_constants__WEBPACK_IMPORTED_MODULE_16__["HEAD_TITLE"])), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6",
    component: "h1",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, utils_constants__WEBPACK_IMPORTED_MODULE_16__["HEAD_TITLE"]))), __jsx("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_12___default.a, {
    enableMouseEvents: true,
    index: tabIndex,
    onChangeIndex: function onChangeIndex(index) {
      return setTabIndex(index);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(components_CoordinateCurrent__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(components_CoordinateCalculator__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(components_Compass__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }))), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "static",
    color: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: tabIndex,
    onChange: handleChange,
    variant: "standard",
    centered: true,
    indicatorColor: "secondary",
    textColor: "secondary",
    "aria-label": "icon label tabs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: utils_constants__WEBPACK_IMPORTED_MODULE_16__["TAB_COORDINATE_CURRENT"],
    icon: __jsx(_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: utils_constants__WEBPACK_IMPORTED_MODULE_16__["TAB_COORDINATE_CALCULATOR"],
    icon: __jsx(_material_ui_icons_SwapHorizontalCircle__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.3ded6d8bd55ebc9f36bc.hot-update.js.map