exports.id = 284;
exports.ids = [284];
exports.modules = {

/***/ 6284:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ NameItem; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./styles/Select.module.css
var Select_module = __webpack_require__(7096);
var Select_module_default = /*#__PURE__*/__webpack_require__.n(Select_module);
;// CONCATENATED MODULE: ./components/media/CloseIcon.js

function CloseIcon() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 41.756 41.756",
    children: /*#__PURE__*/jsx_runtime_.jsx("g", {
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M27.948,20.878L40.291,8.536c1.953-1.953,1.953-5.119,0-7.071c-1.951-1.952-5.119-1.952-7.07,0L20.878,13.809L8.535,1.465c-1.951-1.952-5.119-1.952-7.07,0c-1.953,1.953-1.953,5.119,0,7.071l12.342,12.342L1.465,33.22c-1.953,1.953-1.953,5.119,0,7.071C2.44,41.268,3.721,41.755,5,41.755c1.278,0,2.56-0.487,3.535-1.464l12.343-12.342l12.343,12.343c0.976,0.977,2.256,1.464,3.535,1.464s2.56-0.487,3.535-1.464c1.953-1.953,1.953-5.119,0-7.071L27.948,20.878z"
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/media/MarsIcon.js

function MarsIcon() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 49.267 49.267",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M31.261,22.368l11.838-11.838v12.602c0,0.851,0.345,1.623,0.903,2.181s1.33,0.904,2.181,0.903 c1.704,0,3.085-1.381,3.085-3.085V3.084C49.268,1.382,47.886-0.001,46.183,0L26.135,0c-1.704,0-3.085,1.381-3.085,3.085 c-0.001,1.702,1.382,3.085,3.084,3.084h12.602L26.899,18.006c-6.682-4.621-15.938-3.964-21.882,1.981 c-6.689,6.689-6.689,17.574,0,24.263s17.574,6.689,24.263,0C35.225,38.306,35.882,29.05,31.261,22.368z M9.379,39.888 c-4.284-4.284-4.284-11.255,0-15.54s11.255-4.284,15.54,0s4.284,11.255,0,15.54S13.663,44.173,9.379,39.888z"
    })
  });
}
;// CONCATENATED MODULE: ./components/media/VenusIcon.js

function VenusIcon() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 40.249 40.249",
    children: /*#__PURE__*/jsx_runtime_.jsx("g", {
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M26.875,27.999h-4.25v-4.646c5.315-1.15,9.312-5.887,9.312-11.542C31.937,5.298,26.638,0,20.125,0 S8.312,5.299,8.312,11.812c0,5.655,3.996,10.391,9.312,11.542v4.646h-4.25c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h4.25v4.75 c0,1.381,1.119,2.5,2.5,2.5c1.381,0,2.5-1.119,2.5-2.5v-4.75h4.25c1.381,0,2.5-1.119,2.5-2.5S28.256,27.999,26.875,27.999z M13.312,11.812C13.312,8.056,16.37,5,20.125,5c3.755,0,6.813,3.057,6.813,6.812c0,3.758-3.058,6.813-6.813,6.813 C16.37,18.625,13.312,15.567,13.312,11.812z"
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/select/NameItem.js






function NameItem(props) {
  let name = `gender-input-${props.index}`;
  let idFemale = `female-input-${props.index}`;
  let idMale = `male-input-${props.index}`;

  const handleGender = event => {
    props.fctGender(event, props.index);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
    className: `${(Select_module_default()).container} ${(Select_module_default()).player_item}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      className: (Select_module_default()).name,
      children: props.name
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Select_module_default()).gender,
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "radio",
        id: idFemale,
        name: name,
        value: "F",
        checked: props.gender === "F",
        onChange: handleGender
      }), /*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: idFemale,
        children: /*#__PURE__*/jsx_runtime_.jsx(VenusIcon, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "radio",
        id: idMale,
        name: name,
        value: "M",
        checked: props.gender === "M",
        onChange: handleGender
      }), /*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: idMale,
        children: /*#__PURE__*/jsx_runtime_.jsx(MarsIcon, {})
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: props.fctRemove,
      className: (Select_module_default()).btn_remove,
      children: /*#__PURE__*/jsx_runtime_.jsx(CloseIcon, {})
    })]
  });
}

/***/ })

};
;