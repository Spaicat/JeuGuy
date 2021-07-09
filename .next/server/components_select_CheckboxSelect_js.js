exports.id = "components_select_CheckboxSelect_js";
exports.ids = ["components_select_CheckboxSelect_js"];
exports.modules = {

/***/ "./components/select/CheckboxSelect.js":
/*!*********************************************!*\
  !*** ./components/select/CheckboxSelect.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CheckboxSelect; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Select_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Select.module.css */ "./styles/Select.module.css");
/* harmony import */ var _styles_Select_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Select_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\wamp64\\www\\jeuGuyV2\\Application\\jeuguy\\components\\select\\CheckboxSelect.js";


function CheckboxSelect(props) {
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.selected);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setSelected(props.selected);
  }, [props.selected]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Select_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkbox),
    children: props.content.map((item, key) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "checkbox",
          id: props.name + "-" + key,
          name: props.name,
          value: item.theme,
          checked: selected.includes(item.theme),
          onChange: () => {
            props.fctHandle(item.theme);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: props.name + "-" + key,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: item.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: item.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 7
        }, this)]
      }, key, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 6
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZXVndXkvLi9jb21wb25lbnRzL3NlbGVjdC9DaGVja2JveFNlbGVjdC5qcyJdLCJuYW1lcyI6WyJDaGVja2JveFNlbGVjdCIsInByb3BzIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiY29udGVudCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJuYW1lIiwidGhlbWUiLCJpbmNsdWRlcyIsImZjdEhhbmRsZSIsImljb24iLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUM3QyxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLCtDQUFRLENBQUNILEtBQUssQ0FBQ0MsUUFBUCxDQUF4QztBQUVBRyxrREFBUyxDQUFDLE1BQU07QUFDZkYsZUFBVyxDQUFDRixLQUFLLENBQUNDLFFBQVAsQ0FBWDtBQUNBLEdBRlEsRUFFTixDQUFDRCxLQUFLLENBQUNDLFFBQVAsQ0FGTSxDQUFUO0FBSUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUVJLDJFQUFoQjtBQUFBLGNBQ0VMLEtBQUssQ0FBQ00sT0FBTixDQUFjQyxHQUFkLENBQWtCLENBQUNDLElBQUQsRUFBT0MsR0FBUCxLQUFlO0FBQ2pDLDBCQUNDLDhEQUFDLDJDQUFEO0FBQUEsZ0NBQ0M7QUFDQyxjQUFJLEVBQUMsVUFETjtBQUVDLFlBQUUsRUFBRVQsS0FBSyxDQUFDVSxJQUFOLEdBQWEsR0FBYixHQUFtQkQsR0FGeEI7QUFHQyxjQUFJLEVBQUVULEtBQUssQ0FBQ1UsSUFIYjtBQUlDLGVBQUssRUFBRUYsSUFBSSxDQUFDRyxLQUpiO0FBS0MsaUJBQU8sRUFBRVYsUUFBUSxDQUFDVyxRQUFULENBQWtCSixJQUFJLENBQUNHLEtBQXZCLENBTFY7QUFNQyxrQkFBUSxFQUFFLE1BQU07QUFDZlgsaUJBQUssQ0FBQ2EsU0FBTixDQUFnQkwsSUFBSSxDQUFDRyxLQUFyQjtBQUNBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQVdDO0FBQU8saUJBQU8sRUFBRVgsS0FBSyxDQUFDVSxJQUFOLEdBQWEsR0FBYixHQUFtQkQsR0FBbkM7QUFBQSxpQ0FDQztBQUFBLG9DQUNDO0FBQUEsd0JBQU9ELElBQUksQ0FBQ007QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBRUM7QUFBQSx3QkFBT04sSUFBSSxDQUFDTztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRDtBQUFBLFNBQWVOLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBb0JBLEtBckJBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMEJBLEMiLCJmaWxlIjoiY29tcG9uZW50c19zZWxlY3RfQ2hlY2tib3hTZWxlY3RfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvU2VsZWN0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrYm94U2VsZWN0KHByb3BzKSB7XHJcblx0Y29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShwcm9wcy5zZWxlY3RlZCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZChwcm9wcy5zZWxlY3RlZCk7XHJcblx0fSwgW3Byb3BzLnNlbGVjdGVkXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94fT5cclxuXHRcdFx0e3Byb3BzLmNvbnRlbnQubWFwKChpdGVtLCBrZXkpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PEZyYWdtZW50IGtleT17a2V5fT5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcclxuXHRcdFx0XHRcdFx0XHRpZD17cHJvcHMubmFtZSArIFwiLVwiICsga2V5fVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9e3Byb3BzLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0udGhlbWV9XHJcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17c2VsZWN0ZWQuaW5jbHVkZXMoaXRlbS50aGVtZSl9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLmZjdEhhbmRsZShpdGVtLnRoZW1lKTtcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZSArIFwiLVwiICsga2V5fT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2l0ZW0uaWNvbn08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57aXRlbS50ZXh0fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDwvRnJhZ21lbnQ+XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=