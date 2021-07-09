(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_select_CheckboxSelect_js"],{

/***/ "./components/select/CheckboxSelect.js":
/*!*********************************************!*\
  !*** ./components/select/CheckboxSelect.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CheckboxSelect; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Select_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Select.module.css */ "./styles/Select.module.css");
/* harmony import */ var _styles_Select_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Select_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\wamp64\\www\\jeuGuyV2\\Application\\jeuguy\\components\\select\\CheckboxSelect.js",
    _s = $RefreshSig$();



function CheckboxSelect(props) {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.selected),
      selected = _useState[0],
      setSelected = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setSelected(props.selected);
  }, [props.selected]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Select_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkbox),
    children: props.content.map(function (item, key) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "checkbox",
          id: props.name + "-" + key,
          name: props.name,
          value: item.theme,
          checked: selected.includes(item.theme),
          onChange: function onChange() {
            props.fctHandle(item.theme);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: props.name + "-" + key,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: item.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 9
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: item.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 7
        }, _this)]
      }, key, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 6
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

_s(CheckboxSelect, "AsX9ovzCVAfz/6Sak/XaSxWnEgE=");

_c = CheckboxSelect;

var _c;

$RefreshReg$(_c, "CheckboxSelect");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWxlY3QvQ2hlY2tib3hTZWxlY3QuanMiXSwibmFtZXMiOlsiQ2hlY2tib3hTZWxlY3QiLCJwcm9wcyIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZUVmZmVjdCIsInN0eWxlcyIsImNvbnRlbnQiLCJtYXAiLCJpdGVtIiwia2V5IiwibmFtZSIsInRoZW1lIiwiaW5jbHVkZXMiLCJmY3RIYW5kbGUiLCJpY29uIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBOztBQUFBLGtCQUNiQywrQ0FBUSxDQUFDRCxLQUFLLENBQUNFLFFBQVAsQ0FESztBQUFBLE1BQ3RDQSxRQURzQztBQUFBLE1BQzVCQyxXQUQ0Qjs7QUFHN0NDLGtEQUFTLENBQUMsWUFBTTtBQUNmRCxlQUFXLENBQUNILEtBQUssQ0FBQ0UsUUFBUCxDQUFYO0FBQ0EsR0FGUSxFQUVOLENBQUNGLEtBQUssQ0FBQ0UsUUFBUCxDQUZNLENBQVQ7QUFJQSxzQkFDQztBQUFLLGFBQVMsRUFBRUcsMkVBQWhCO0FBQUEsY0FDRUwsS0FBSyxDQUFDTSxPQUFOLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDakMsMEJBQ0MsOERBQUMsMkNBQUQ7QUFBQSxnQ0FDQztBQUNDLGNBQUksRUFBQyxVQUROO0FBRUMsWUFBRSxFQUFFVCxLQUFLLENBQUNVLElBQU4sR0FBYSxHQUFiLEdBQW1CRCxHQUZ4QjtBQUdDLGNBQUksRUFBRVQsS0FBSyxDQUFDVSxJQUhiO0FBSUMsZUFBSyxFQUFFRixJQUFJLENBQUNHLEtBSmI7QUFLQyxpQkFBTyxFQUFFVCxRQUFRLENBQUNVLFFBQVQsQ0FBa0JKLElBQUksQ0FBQ0csS0FBdkIsQ0FMVjtBQU1DLGtCQUFRLEVBQUUsb0JBQU07QUFDZlgsaUJBQUssQ0FBQ2EsU0FBTixDQUFnQkwsSUFBSSxDQUFDRyxLQUFyQjtBQUNBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQVdDO0FBQU8saUJBQU8sRUFBRVgsS0FBSyxDQUFDVSxJQUFOLEdBQWEsR0FBYixHQUFtQkQsR0FBbkM7QUFBQSxpQ0FDQztBQUFBLG9DQUNDO0FBQUEsd0JBQU9ELElBQUksQ0FBQ007QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBRUM7QUFBQSx3QkFBT04sSUFBSSxDQUFDTztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRDtBQUFBLFNBQWVOLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBb0JBLEtBckJBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMEJBOztHQWpDdUJWLGM7O0tBQUFBLGMiLCJmaWxlIjoic3RhdGljL2NodW5rcy9jb21wb25lbnRzX3NlbGVjdF9DaGVja2JveFNlbGVjdF9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9TZWxlY3QubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tib3hTZWxlY3QocHJvcHMpIHtcclxuXHRjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKHByb3BzLnNlbGVjdGVkKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkKHByb3BzLnNlbGVjdGVkKTtcclxuXHR9LCBbcHJvcHMuc2VsZWN0ZWRdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3h9PlxyXG5cdFx0XHR7cHJvcHMuY29udGVudC5tYXAoKGl0ZW0sIGtleSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8RnJhZ21lbnQga2V5PXtrZXl9PlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxyXG5cdFx0XHRcdFx0XHRcdGlkPXtwcm9wcy5uYW1lICsgXCItXCIgKyBrZXl9XHJcblx0XHRcdFx0XHRcdFx0bmFtZT17cHJvcHMubmFtZX1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS50aGVtZX1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtzZWxlY3RlZC5pbmNsdWRlcyhpdGVtLnRoZW1lKX1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMuZmN0SGFuZGxlKGl0ZW0udGhlbWUpO1xyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lICsgXCItXCIgKyBrZXl9PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57aXRlbS5pY29ufTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPntpdGVtLnRleHR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PC9GcmFnbWVudD5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==