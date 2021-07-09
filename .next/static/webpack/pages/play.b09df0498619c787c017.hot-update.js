self["webpackHotUpdate_N_E"]("pages/play",{

/***/ "./pages/play.js":
/*!***********************!*\
  !*** ./pages/play.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Play.module.css */ "./styles/Play.module.css");
/* harmony import */ var _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_sentences_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/sentences.json */ "./data/sentences.json");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\wamp64\\www\\jeuGuyV2\\Application\\jeuguy\\pages\\play.js",
    _s = $RefreshSig$();






var regexToFind = {
  "neutral": /\[nom\]/g,
  "male": /\[nomM\]/g,
  "female": /\[nomF\]/g
};

var consoleInformation = function consoleInformation(sentences, players) {
  var cssSquare = "padding: 3px 5px; border-radius: 5px; font-weight: bold;";
  var cssSmall = "font-size: 10px;";
  console.groupCollapsed("Joueurs (".concat(players.length, ") :"));
  players.forEach(function (player) {
    console.log("%c".concat(player.gender, "%c ").concat(player.name), "".concat(cssSquare, " color: black; background-color: white;"), "");
  });
  console.groupEnd();
  console.groupCollapsed("Phrases (".concat(sentences.length, ") :"));
  sentences.forEach(function (sentence) {
    var cssTheme = "";

    switch (sentence.theme) {
      case "sport":
        cssTheme = "color: white; background-color: blue;";
        break;

      case "hot":
        cssTheme = "color: white; background-color: #ff36bf;";
        break;

      default:
        cssTheme = "color: black; background-color: white;";
        break;
    }

    var sentenceType = "";
    var spaceType = "";

    if (sentence.type != "normal") {
      sentenceType = sentence.type;
      spaceType = " ";
    }

    console.groupCollapsed("%c".concat(sentenceType, "%c").concat(spaceType, "%c").concat(sentence.theme, "%c ").concat(sentence.text), "".concat(cssSquare, " color: white; background-color: red; ").concat(cssSmall), "".concat(cssSmall), "".concat(cssSquare, " ").concat(cssTheme, " ").concat(cssSmall), "".concat(cssSmall));
    console.table(sentence);
    console.groupEnd();
  });
  console.groupEnd();
  console.log("%cIl y a " + sentences.filter(function (x) {
    return x.type == "virus";
  }).length + " virus !", "".concat(cssSquare, " color: white; background-color: red;"));
};
/**
 * 
 * @param {Object} sentences
 * @param {Object} options 
 * @returns {Object} 
 */


var filterSentences = function filterSentences(sentences, options, players) {
  var nbFemale = players.reduce(function (acc, cur) {
    return cur.gender === "F" ? ++acc : acc;
  }, 0);
  var nbGender = {
    "female": nbFemale,
    "male": players.length - nbFemale
  }; //Nombre d'élément regex trouvé dans la phrase

  var getNbElt = function getNbElt(regex, text) {
    return (text.match(regex) || []).length;
  };

  return sentences.filter(function (elt) {
    var nbEltFinded = getNbElt(regexToFind.neutral, elt.text);
    var nbEltMaleFinded = getNbElt(regexToFind.male, elt.text);
    var nbEltFemaleFinded = getNbElt(regexToFind.female, elt.text); //On vérifie s'il y a bien, autant ou plus de joueur que la phrases en nécessite (en fonction du sexe)

    var enoughEltHomme = nbGender.male >= nbEltMaleFinded;
    var enoughEltFemme = nbGender.female >= nbEltFemaleFinded;
    var enoughPlayer = players.length >= nbEltFinded + nbEltMaleFinded + nbEltFemaleFinded;
    return options.themes.includes(elt.theme) && enoughEltHomme && enoughEltFemme && enoughPlayer;
  });
};
/**
 * Renvoie le nombre de phrases à afficher
 * @param {number} duration 
 * @returns {number} nombre de phrases
 */


var getLengthSentences = function getLengthSentences(duration) {
  return {
    "total": 20 + 15 * duration,
    "virus": 2 + 2 * duration
  };
};
/**
 * 
 * @param {*} sentences 
 * @param {*} options 
 * @param {*} players 
 * @returns {string[]}
 */


var selectSentences = function selectSentences(sentences, options, players) {
  var sentencesSelected = [];
  var lengthSentences = getLengthSentences(options.duration);
  var nbSentencesPicked = 0;
  var nbVirusPicked = 0;
  var idSentencesPicked = [];

  while (nbSentencesPicked < lengthSentences.total && idSentencesPicked.length < sentences.length) {
    //On choisit un numéro au hasard
    var nbRandomSentence = Math.floor(Math.random() * sentences.length);

    if (!idSentencesPicked.includes(nbRandomSentence)) {
      idSentencesPicked.push(nbRandomSentence);
      var sentencePicked = sentences[nbRandomSentence];

      if (sentencePicked.type == "virus") {
        if (nbVirusPicked < lengthSentences.virus) {
          sentencesSelected.push(sentencePicked);
          nbSentencesPicked++;
          nbVirusPicked++;
        }
      } else {
        sentencesSelected.push(sentencePicked);
        nbSentencesPicked++;
      }
    }
  }

  return sentencesSelected;
};

var initSentences = function initSentences(sentences, options, players) {
  sentences.forEach(function (sentence) {});
};

function Play() {
  _s();

  var localOptions = null;
  var localPlayers = null;

  if (true) {
    localOptions = JSON.parse(localStorage.getItem("options"));
    localPlayers = JSON.parse(localStorage.getItem("players"));
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      text = _useState[0],
      setText = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(localPlayers),
      players = _useState3[0];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(localOptions),
      options = _useState4[0];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var sentences = filterSentences(_data_sentences_json__WEBPACK_IMPORTED_MODULE_4__, options, players);
    sentences = selectSentences(sentences, options, players);
    consoleInformation(sentences, players);
    /*let nRandomSentences = Math.floor(Math.random()*data.length);
    setText(data[nRandomSentences].text);*/
    // TODO : (idée en ts => Faire reducer et interface pour les phrases du json : https://youtu.be/Z5iWr6Srsj8?t=918)
    // (Faire des fonctions (en dehors du composants pour que ça soit clean (juste au dessus là)))
    // - Filtrer le json data pour ne prendre que les phrases qui respectent les options (thèmes...)
    // - Faire le tableau de phrases (une certaine longueur en fonction de la longueur en option)
    // - Remplacer les noms dans les phrases (tirer les noms au hasard tout ça tout ça)
    // - Mettre les virus quelque part
    // - Mettre la conséquence juste après pour les choix
    //
    // - Pour les choix, ce sera dans le jeu de remplacer le nom des détails donc pas dans cette fonction
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    title: "Selectionner",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "".concat((_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_5___default().container), " ").concat((_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_5___default().main)),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "title",
        children: title || ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: text || "Chargement..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 178,
    columnNumber: 3
  }, this);
}

_s(Play, "IZ/kSaTprsWXNTkHvJn2HbLG5dw=");

_c = Play;
/* harmony default export */ __webpack_exports__["default"] = (Play);

var _c;

$RefreshReg$(_c, "Play");

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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS5qcyJdLCJuYW1lcyI6WyJyZWdleFRvRmluZCIsImNvbnNvbGVJbmZvcm1hdGlvbiIsInNlbnRlbmNlcyIsInBsYXllcnMiLCJjc3NTcXVhcmUiLCJjc3NTbWFsbCIsImNvbnNvbGUiLCJncm91cENvbGxhcHNlZCIsImxlbmd0aCIsImZvckVhY2giLCJwbGF5ZXIiLCJsb2ciLCJnZW5kZXIiLCJuYW1lIiwiZ3JvdXBFbmQiLCJzZW50ZW5jZSIsImNzc1RoZW1lIiwidGhlbWUiLCJzZW50ZW5jZVR5cGUiLCJzcGFjZVR5cGUiLCJ0eXBlIiwidGV4dCIsInRhYmxlIiwiZmlsdGVyIiwieCIsImZpbHRlclNlbnRlbmNlcyIsIm9wdGlvbnMiLCJuYkZlbWFsZSIsInJlZHVjZSIsImFjYyIsImN1ciIsIm5iR2VuZGVyIiwiZ2V0TmJFbHQiLCJyZWdleCIsIm1hdGNoIiwiZWx0IiwibmJFbHRGaW5kZWQiLCJuZXV0cmFsIiwibmJFbHRNYWxlRmluZGVkIiwibWFsZSIsIm5iRWx0RmVtYWxlRmluZGVkIiwiZmVtYWxlIiwiZW5vdWdoRWx0SG9tbWUiLCJlbm91Z2hFbHRGZW1tZSIsImVub3VnaFBsYXllciIsInRoZW1lcyIsImluY2x1ZGVzIiwiZ2V0TGVuZ3RoU2VudGVuY2VzIiwiZHVyYXRpb24iLCJzZWxlY3RTZW50ZW5jZXMiLCJzZW50ZW5jZXNTZWxlY3RlZCIsImxlbmd0aFNlbnRlbmNlcyIsIm5iU2VudGVuY2VzUGlja2VkIiwibmJWaXJ1c1BpY2tlZCIsImlkU2VudGVuY2VzUGlja2VkIiwidG90YWwiLCJuYlJhbmRvbVNlbnRlbmNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNlbnRlbmNlUGlja2VkIiwidmlydXMiLCJpbml0U2VudGVuY2VzIiwiUGxheSIsImxvY2FsT3B0aW9ucyIsImxvY2FsUGxheWVycyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VTdGF0ZSIsInNldFRleHQiLCJ0aXRsZSIsInNldFRpdGxlIiwidXNlRWZmZWN0IiwiZGF0YSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsV0FBVyxHQUFHO0FBQ2pCLGFBQVcsVUFETTtBQUVqQixVQUFRLFdBRlM7QUFHakIsWUFBVTtBQUhPLENBQWxCOztBQU1BLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsU0FBRCxFQUFZQyxPQUFaLEVBQXdCO0FBQ2xELE1BQUlDLFNBQVMsR0FBRywwREFBaEI7QUFDQSxNQUFJQyxRQUFRLEdBQUcsa0JBQWY7QUFDQUMsU0FBTyxDQUFDQyxjQUFSLG9CQUFtQ0osT0FBTyxDQUFDSyxNQUEzQztBQUNBTCxTQUFPLENBQUNNLE9BQVIsQ0FBZ0IsVUFBQUMsTUFBTSxFQUFJO0FBQ3pCSixXQUFPLENBQUNLLEdBQVIsYUFBaUJELE1BQU0sQ0FBQ0UsTUFBeEIsZ0JBQW9DRixNQUFNLENBQUNHLElBQTNDLGFBQ0dULFNBREgsOENBRUEsRUFGQTtBQUdBLEdBSkQ7QUFLQUUsU0FBTyxDQUFDUSxRQUFSO0FBQ0FSLFNBQU8sQ0FBQ0MsY0FBUixvQkFBbUNMLFNBQVMsQ0FBQ00sTUFBN0M7QUFDQU4sV0FBUyxDQUFDTyxPQUFWLENBQWtCLFVBQUFNLFFBQVEsRUFBSTtBQUM3QixRQUFJQyxRQUFRLEdBQUcsRUFBZjs7QUFDQSxZQUFRRCxRQUFRLENBQUNFLEtBQWpCO0FBQ0MsV0FBSyxPQUFMO0FBQ0NELGdCQUFRLEdBQUcsdUNBQVg7QUFDQTs7QUFDRCxXQUFLLEtBQUw7QUFDQ0EsZ0JBQVEsR0FBRywwQ0FBWDtBQUNBOztBQUNEO0FBQ0NBLGdCQUFRLEdBQUcsd0NBQVg7QUFDQTtBQVRGOztBQVdBLFFBQUlFLFlBQVksR0FBRyxFQUFuQjtBQUNBLFFBQUlDLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxRQUFJSixRQUFRLENBQUNLLElBQVQs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBaEJRLEVBZ0JOLEVBaEJNLENBQVQ7QUFrQkEsc0JBQ0MsOERBQUMsdURBQUQ7QUFBUSxTQUFLLEVBQUMsY0FBZDtBQUFBLDJCQUNDO0FBQUssZUFBUyxZQUFLMEUsMEVBQUwsY0FBeUJBLHFFQUF6QixDQUFkO0FBQUEsOEJBQ0M7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxrQkFDRUosS0FBSyxJQUFJO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBSUM7QUFBQSxrQkFDRXBELElBQUksSUFBSTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFZQTs7R0ExQ1EyQyxJOztLQUFBQSxJO0FBNENULCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BsYXkuYjA5ZGYwNDk4NjE5Yzc4N2MwMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUGxheS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvc2VudGVuY2VzLmpzb24nO1xyXG5cclxubGV0IHJlZ2V4VG9GaW5kID0ge1xyXG5cdFwibmV1dHJhbFwiOiAvXFxbbm9tXFxdL2csXHJcblx0XCJtYWxlXCI6IC9cXFtub21NXFxdL2csXHJcblx0XCJmZW1hbGVcIjogL1xcW25vbUZcXF0vZyxcclxufTtcclxuXHJcbmNvbnN0IGNvbnNvbGVJbmZvcm1hdGlvbiA9IChzZW50ZW5jZXMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgY3NzU3F1YXJlID0gXCJwYWRkaW5nOiAzcHggNXB4OyBib3JkZXItcmFkaXVzOiA1cHg7IGZvbnQtd2VpZ2h0OiBib2xkO1wiO1xyXG5cdGxldCBjc3NTbWFsbCA9IFwiZm9udC1zaXplOiAxMHB4O1wiO1xyXG5cdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYEpvdWV1cnMgKCR7cGxheWVycy5sZW5ndGh9KSA6YCk7XHJcblx0cGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhgJWMke3BsYXllci5nZW5kZXJ9JWMgJHtwbGF5ZXIubmFtZX1gLFxyXG5cdFx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2AsXHJcblx0XHRcIlwiKTtcclxuXHR9KTtcclxuXHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0Y29uc29sZS5ncm91cENvbGxhcHNlZChgUGhyYXNlcyAoJHtzZW50ZW5jZXMubGVuZ3RofSkgOmApO1xyXG5cdHNlbnRlbmNlcy5mb3JFYWNoKHNlbnRlbmNlID0+IHtcclxuXHRcdGxldCBjc3NUaGVtZSA9IFwiXCI7XHJcblx0XHRzd2l0Y2ggKHNlbnRlbmNlLnRoZW1lKSB7XHJcblx0XHRcdGNhc2UgXCJzcG9ydFwiOlxyXG5cdFx0XHRcdGNzc1RoZW1lID0gXCJjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IGJsdWU7XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJob3RcIjpcclxuXHRcdFx0XHRjc3NUaGVtZSA9IFwiY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNmJmO1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGNzc1RoZW1lID0gXCJjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0bGV0IHNlbnRlbmNlVHlwZSA9IFwiXCI7XHJcblx0XHRsZXQgc3BhY2VUeXBlID0gXCJcIjtcclxuXHRcdGlmIChzZW50ZW5jZS50eXBlICE9IFwibm9ybWFsXCIpIHtcclxuXHRcdFx0c2VudGVuY2VUeXBlID0gc2VudGVuY2UudHlwZTtcclxuXHRcdFx0c3BhY2VUeXBlID0gXCIgXCI7XHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGAlYyR7c2VudGVuY2VUeXBlfSVjJHtzcGFjZVR5cGV9JWMke3NlbnRlbmNlLnRoZW1lfSVjICR7c2VudGVuY2UudGV4dH1gLFxyXG5cdFx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IHJlZDsgJHtjc3NTbWFsbH1gLFxyXG5cdFx0YCR7Y3NzU21hbGx9YCxcclxuXHRcdGAke2Nzc1NxdWFyZX0gJHtjc3NUaGVtZX0gJHtjc3NTbWFsbH1gLFxyXG5cdFx0YCR7Y3NzU21hbGx9YCk7XHJcblx0XHRjb25zb2xlLnRhYmxlKHNlbnRlbmNlKTtcclxuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHR9KTtcclxuXHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0Y29uc29sZS5sb2coXCIlY0lsIHkgYSBcIiArIHNlbnRlbmNlcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gXCJ2aXJ1c1wiKS5sZW5ndGggKyBcIiB2aXJ1cyAhXCIsXHJcblx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IHJlZDtgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge09iamVjdH0gc2VudGVuY2VzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBcclxuICovXHJcbmNvbnN0IGZpbHRlclNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgbmJGZW1hbGUgPSBwbGF5ZXJzLnJlZHVjZSgoYWNjLCBjdXIpID0+IGN1ci5nZW5kZXIgPT09IFwiRlwiID8gKythY2MgOiBhY2MsIDApO1xyXG5cdGxldCBuYkdlbmRlciA9IHtcclxuXHRcdFwiZmVtYWxlXCI6IG5iRmVtYWxlLFxyXG5cdFx0XCJtYWxlXCI6IHBsYXllcnMubGVuZ3RoIC0gbmJGZW1hbGVcclxuXHR9O1xyXG5cclxuXHQvL05vbWJyZSBkJ8OpbMOpbWVudCByZWdleCB0cm91dsOpIGRhbnMgbGEgcGhyYXNlXHJcblx0Y29uc3QgZ2V0TmJFbHQgPSAocmVnZXgsIHRleHQpID0+IHtcclxuXHRcdHJldHVybiAodGV4dC5tYXRjaChyZWdleCkgfHwgW10pLmxlbmd0aDtcclxuXHR9O1xyXG5cdFxyXG5cdHJldHVybiBzZW50ZW5jZXMuZmlsdGVyKChlbHQpID0+IHtcclxuXHRcdGxldCBuYkVsdEZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLm5ldXRyYWwsIGVsdC50ZXh0KTtcclxuXHRcdGxldCBuYkVsdE1hbGVGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5tYWxlLCBlbHQudGV4dCk7XHJcblx0XHRsZXQgbmJFbHRGZW1hbGVGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5mZW1hbGUsIGVsdC50ZXh0KTtcclxuXHRcdFxyXG5cdFx0Ly9PbiB2w6lyaWZpZSBzJ2lsIHkgYSBiaWVuLCBhdXRhbnQgb3UgcGx1cyBkZSBqb3VldXIgcXVlIGxhIHBocmFzZXMgZW4gbsOpY2Vzc2l0ZSAoZW4gZm9uY3Rpb24gZHUgc2V4ZSlcclxuXHRcdGxldCBlbm91Z2hFbHRIb21tZSA9IG5iR2VuZGVyLm1hbGUgPj0gbmJFbHRNYWxlRmluZGVkO1xyXG5cdFx0bGV0IGVub3VnaEVsdEZlbW1lID0gbmJHZW5kZXIuZmVtYWxlID49IG5iRWx0RmVtYWxlRmluZGVkO1xyXG5cdFx0bGV0IGVub3VnaFBsYXllciA9IHBsYXllcnMubGVuZ3RoID49IChuYkVsdEZpbmRlZCArIG5iRWx0TWFsZUZpbmRlZCArIG5iRWx0RmVtYWxlRmluZGVkKTtcclxuXHJcblx0XHRyZXR1cm4gb3B0aW9ucy50aGVtZXMuaW5jbHVkZXMoZWx0LnRoZW1lKSAmJiBlbm91Z2hFbHRIb21tZSAmJiBlbm91Z2hFbHRGZW1tZSAmJiBlbm91Z2hQbGF5ZXI7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW52b2llIGxlIG5vbWJyZSBkZSBwaHJhc2VzIMOgIGFmZmljaGVyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBcclxuICogQHJldHVybnMge251bWJlcn0gbm9tYnJlIGRlIHBocmFzZXNcclxuICovXHJcbmNvbnN0IGdldExlbmd0aFNlbnRlbmNlcyA9IChkdXJhdGlvbikgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRcInRvdGFsXCI6IDIwICsgMTUqZHVyYXRpb24sXHJcblx0XHRcInZpcnVzXCI6IDIgKyAyKmR1cmF0aW9uXHJcblx0fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0geyp9IHNlbnRlbmNlcyBcclxuICogQHBhcmFtIHsqfSBvcHRpb25zIFxyXG4gKiBAcGFyYW0geyp9IHBsYXllcnMgXHJcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX1cclxuICovXHJcbmNvbnN0IHNlbGVjdFNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgc2VudGVuY2VzU2VsZWN0ZWQgPSBbXTtcclxuXHRsZXQgbGVuZ3RoU2VudGVuY2VzID0gZ2V0TGVuZ3RoU2VudGVuY2VzKG9wdGlvbnMuZHVyYXRpb24pO1xyXG5cdFxyXG5cdGxldCBuYlNlbnRlbmNlc1BpY2tlZCA9IDA7XHJcbiAgICBsZXQgbmJWaXJ1c1BpY2tlZCA9IDA7XHJcblx0bGV0IGlkU2VudGVuY2VzUGlja2VkID0gW107XHJcblxyXG5cdHdoaWxlIChuYlNlbnRlbmNlc1BpY2tlZCA8IGxlbmd0aFNlbnRlbmNlcy50b3RhbCAmJiBpZFNlbnRlbmNlc1BpY2tlZC5sZW5ndGggPCBzZW50ZW5jZXMubGVuZ3RoKSB7XHJcblx0XHQvL09uIGNob2lzaXQgdW4gbnVtw6lybyBhdSBoYXNhcmRcclxuXHRcdGxldCBuYlJhbmRvbVNlbnRlbmNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnNlbnRlbmNlcy5sZW5ndGgpO1xyXG5cdFx0aWYgKCFpZFNlbnRlbmNlc1BpY2tlZC5pbmNsdWRlcyhuYlJhbmRvbVNlbnRlbmNlKSkge1xyXG5cdFx0XHRpZFNlbnRlbmNlc1BpY2tlZC5wdXNoKG5iUmFuZG9tU2VudGVuY2UpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHNlbnRlbmNlUGlja2VkID0gc2VudGVuY2VzW25iUmFuZG9tU2VudGVuY2VdO1xyXG5cclxuXHRcdFx0aWYgKHNlbnRlbmNlUGlja2VkLnR5cGUgPT0gXCJ2aXJ1c1wiKSB7XHJcblx0XHRcdFx0aWYgKG5iVmlydXNQaWNrZWQgPCBsZW5ndGhTZW50ZW5jZXMudmlydXMpIHtcclxuXHRcdFx0XHRcdHNlbnRlbmNlc1NlbGVjdGVkLnB1c2goc2VudGVuY2VQaWNrZWQpO1xyXG5cdFx0XHRcdFx0bmJTZW50ZW5jZXNQaWNrZWQrKztcclxuXHRcdFx0XHRcdG5iVmlydXNQaWNrZWQrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0c2VudGVuY2VzU2VsZWN0ZWQucHVzaChzZW50ZW5jZVBpY2tlZCk7XHJcblx0XHRcdFx0bmJTZW50ZW5jZXNQaWNrZWQrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNlbnRlbmNlc1NlbGVjdGVkO1xyXG59XHJcblxyXG5jb25zdCBpbml0U2VudGVuY2VzID0gKHNlbnRlbmNlcywgb3B0aW9ucywgcGxheWVycykgPT4ge1xyXG5cdHNlbnRlbmNlcy5mb3JFYWNoKHNlbnRlbmNlID0+IHtcclxuXHRcdFxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gUGxheSgpIHtcclxuXHRsZXQgbG9jYWxPcHRpb25zID0gbnVsbDtcclxuXHRsZXQgbG9jYWxQbGF5ZXJzID0gbnVsbDtcclxuXHRpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcblx0XHRsb2NhbE9wdGlvbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3B0aW9uc1wiKSk7XHJcblx0XHRsb2NhbFBsYXllcnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyc1wiKSk7XHJcblx0fVxyXG5cdGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3BsYXllcnNdID0gdXNlU3RhdGUobG9jYWxQbGF5ZXJzKTtcclxuXHRjb25zdCBbb3B0aW9uc10gPSB1c2VTdGF0ZShsb2NhbE9wdGlvbnMpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGV0IHNlbnRlbmNlcyA9IGZpbHRlclNlbnRlbmNlcyhkYXRhLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IHNlbGVjdFNlbnRlbmNlcyhzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpO1xyXG5cdFx0Y29uc29sZUluZm9ybWF0aW9uKHNlbnRlbmNlcywgcGxheWVycyk7XHJcbiAgICAgICAgLypsZXQgblJhbmRvbVNlbnRlbmNlcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCk7XHJcblx0XHRzZXRUZXh0KGRhdGFbblJhbmRvbVNlbnRlbmNlc10udGV4dCk7Ki9cclxuXHJcblx0XHQvLyBUT0RPIDogKGlkw6llIGVuIHRzID0+IEZhaXJlIHJlZHVjZXIgZXQgaW50ZXJmYWNlIHBvdXIgbGVzIHBocmFzZXMgZHUganNvbiA6IGh0dHBzOi8veW91dHUuYmUvWjVpV3I2U3Jzajg/dD05MTgpXHJcblx0XHQvLyAoRmFpcmUgZGVzIGZvbmN0aW9ucyAoZW4gZGVob3JzIGR1IGNvbXBvc2FudHMgcG91ciBxdWUgw6dhIHNvaXQgY2xlYW4gKGp1c3RlIGF1IGRlc3N1cyBsw6ApKSlcclxuXHRcdC8vIC0gRmlsdHJlciBsZSBqc29uIGRhdGEgcG91ciBuZSBwcmVuZHJlIHF1ZSBsZXMgcGhyYXNlcyBxdWkgcmVzcGVjdGVudCBsZXMgb3B0aW9ucyAodGjDqG1lcy4uLilcclxuXHRcdC8vIC0gRmFpcmUgbGUgdGFibGVhdSBkZSBwaHJhc2VzICh1bmUgY2VydGFpbmUgbG9uZ3VldXIgZW4gZm9uY3Rpb24gZGUgbGEgbG9uZ3VldXIgZW4gb3B0aW9uKVxyXG5cdFx0Ly8gLSBSZW1wbGFjZXIgbGVzIG5vbXMgZGFucyBsZXMgcGhyYXNlcyAodGlyZXIgbGVzIG5vbXMgYXUgaGFzYXJkIHRvdXQgw6dhIHRvdXQgw6dhKVxyXG5cdFx0Ly8gLSBNZXR0cmUgbGVzIHZpcnVzIHF1ZWxxdWUgcGFydFxyXG5cdFx0Ly8gLSBNZXR0cmUgbGEgY29uc8OpcXVlbmNlIGp1c3RlIGFwcsOocyBwb3VyIGxlcyBjaG9peFxyXG5cdFx0Ly9cclxuXHRcdC8vIC0gUG91ciBsZXMgY2hvaXgsIGNlIHNlcmEgZGFucyBsZSBqZXUgZGUgcmVtcGxhY2VyIGxlIG5vbSBkZXMgZMOpdGFpbHMgZG9uYyBwYXMgZGFucyBjZXR0ZSBmb25jdGlvblxyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQgdGl0bGU9XCJTZWxlY3Rpb25uZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7c3R5bGVzLm1haW59YH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0e3RpdGxlIHx8IFwiXCJ9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHR7dGV4dCB8fCBcIkNoYXJnZW1lbnQuLi5cIn1cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheTsiXSwic291cmNlUm9vdCI6IiJ9