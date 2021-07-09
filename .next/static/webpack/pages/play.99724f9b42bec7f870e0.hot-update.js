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
  console.groupCollapsed("%cJoueurs (".concat(players.length, ")"), "".concat(cssSquare, " color: black; background-color: white;"));
  players.forEach(function (player) {
    console.log("%c".concat(player.gender, "%c ").concat(player.name), "".concat(cssSquare, " color: black; background-color: white;"), "");
  });
  console.groupEnd();
  console.groupCollapsed("%cPhrases (".concat(sentences.length, ")"), "".concat(cssSquare, " color: black; background-color: white;"));
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
  return sentences.map(function (sentence) {
    //Fait une copie des joueurs
    var playersNotPicked = players.slice();
    console.groupCollapsed("%c" + sentence.text, "color: red");

    var initSentence = function initSentence(eltToFind) {
      if (sentence.text.match(eltToFind) != null) console.log(eltToFind);

      while (sentence.text.match(eltToFind) != null) {
        var playerToPick = void 0;

        switch (eltToFind) {
          case regexToFind.male:
            playerToPick = playersNotPicked.filter(function (player) {
              return player.gender == "F";
            });
            break;

          case regexToFind.female:
            playerToPick = playersNotPicked.filter(function (player) {
              return player.gender == "M";
            });
            break;

          default:
            playerToPick = playersNotPicked;
        } //Choisit un joueur au hasard


        var playerPicked = playerToPick[Math.floor(Math.random() * playerToPick.length)];
        console.log(playerPicked); //Retire ce joueur de la liste des joueurs non pris

        playersNotPicked.splice(playersNotPicked.indexOf(playerPicked), 1); //Remplace l'élément par le nom du joueur

        sentence.text = sentence.text.replace(eltToFind, playerPicked.name);
      }
    };

    initSentence(regexToFind.neutral);
    initSentence(regexToFind.male);
    initSentence(regexToFind.female);
    console.groupEnd();
    return sentence;
  });
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
    sentences = initSentences(sentences, options, players);
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
        lineNumber: 217,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: text || "Chargement..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 215,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS5qcyJdLCJuYW1lcyI6WyJyZWdleFRvRmluZCIsImNvbnNvbGVJbmZvcm1hdGlvbiIsInNlbnRlbmNlcyIsInBsYXllcnMiLCJjc3NTcXVhcmUiLCJjc3NTbWFsbCIsImNvbnNvbGUiLCJncm91cENvbGxhcHNlZCIsImxlbmd0aCIsImZvckVhY2giLCJwbGF5ZXIiLCJsb2ciLCJnZW5kZXIiLCJuYW1lIiwiZ3JvdXBFbmQiLCJzZW50ZW5jZSIsImNzc1RoZW1lIiwidGhlbWUiLCJzZW50ZW5jZVR5cGUiLCJzcGFjZVR5cGUiLCJ0eXBlIiwidGV4dCIsInRhYmxlIiwiZmlsdGVyIiwieCIsImZpbHRlclNlbnRlbmNlcyIsIm9wdGlvbnMiLCJuYkZlbWFsZSIsInJlZHVjZSIsImFjYyIsImN1ciIsIm5iR2VuZGVyIiwiZ2V0TmJFbHQiLCJyZWdleCIsIm1hdGNoIiwiZWx0IiwibmJFbHRGaW5kZWQiLCJuZXV0cmFsIiwibmJFbHRNYWxlRmluZGVkIiwibWFsZSIsIm5iRWx0RmVtYWxlRmluZGVkIiwiZmVtYWxlIiwiZW5vdWdoRWx0SG9tbWUiLCJlbm91Z2hFbHRGZW1tZSIsImVub3VnaFBsYXllciIsInRoZW1lcyIsImluY2x1ZGVzIiwiZ2V0TGVuZ3RoU2VudGVuY2VzIiwiZHVyYXRpb24iLCJzZWxlY3RTZW50ZW5jZXMiLCJzZW50ZW5jZXNTZWxlY3RlZCIsImxlbmd0aFNlbnRlbmNlcyIsIm5iU2VudGVuY2VzUGlja2VkIiwibmJWaXJ1c1BpY2tlZCIsImlkU2VudGVuY2VzUGlja2VkIiwidG90YWwiLCJuYlJhbmRvbVNlbnRlbmNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNlbnRlbmNlUGlja2VkIiwidmlydXMiLCJpbml0U2VudGVuY2VzIiwibWFwIiwicGxheWVyc05vdFBpY2tlZCIsInNsaWNlIiwiaW5pdFNlbnRlbmNlIiwiZWx0VG9GaW5kIiwicGxheWVyVG9QaWNrIiwicGxheWVyUGlja2VkIiwic3BsaWNlIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJQbGF5IiwibG9jYWxPcHRpb25zIiwibG9jYWxQbGF5ZXJzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZVN0YXRlIiwic2V0VGV4dCIsInRpdGxlIiwic2V0VGl0bGUiLCJ1c2VFZmZlY3QiLCJkYXRhIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxXQUFXLEdBQUc7QUFDakIsYUFBVyxVQURNO0FBRWpCLFVBQVEsV0FGUztBQUdqQixZQUFVO0FBSE8sQ0FBbEI7O0FBTUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxTQUFELEVBQVlDLE9BQVosRUFBd0I7QUFDbEQsTUFBSUMsU0FBUyxHQUFHLDBEQUFoQjtBQUNBLE1BQUlDLFFBQVEsR0FBRyxrQkFBZjtBQUNBQyxTQUFPLENBQUNDLGNBQVIsc0JBQXFDSixPQUFPLENBQUNLLE1BQTdDLGtCQUEyREosU0FBM0Q7QUFDQUQsU0FBTyxDQUFDTSxPQUFSLENBQWdCLFVBQUFDLE1BQU0sRUFBSTtBQUN6QkosV0FBTyxDQUFDSyxHQUFSLGFBQWlCRCxNQUFNLENBQUNFLE1BQXhCLGdCQUFvQ0YsTUFBTSxDQUFDRyxJQUEzQyxhQUNHVCxTQURILDhDQUVBLEVBRkE7QUFHQSxHQUpEO0FBS0FFLFNBQU8sQ0FBQ1EsUUFBUjtBQUNBUixTQUFPLENBQUNDLGNBQVIsc0JBQXFDTCxTQUFTLENBQUNNLE1BQS9DLGtCQUE2REosU0FBN0Q7QUFDQUYsV0FBUyxDQUFDTyxPQUFWLENBQWtCLFVBQUFNLFFBQVEsRUFBSTtBQUM3QixRQUFJQyxRQUFRLEdBQUcsRUFBZjs7QUFDQSxZQUFRRCxRQUFRLENBQUNFLEtBQWpCO0FBQ0MsV0FBSyxPQUFMO0FBQ0NELGdCQUFRLEdBQUcsdUNBQVg7QUFDQTs7QUFDRCxXQUFLLEtBQUw7QUFD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QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFZQTs7R0EzQ1FxRCxJOztLQUFBQSxJO0FBNkNULCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BsYXkuOTk3MjRmOWI0MmJlYzdmODcwZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUGxheS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvc2VudGVuY2VzLmpzb24nO1xyXG5cclxubGV0IHJlZ2V4VG9GaW5kID0ge1xyXG5cdFwibmV1dHJhbFwiOiAvXFxbbm9tXFxdL2csXHJcblx0XCJtYWxlXCI6IC9cXFtub21NXFxdL2csXHJcblx0XCJmZW1hbGVcIjogL1xcW25vbUZcXF0vZyxcclxufTtcclxuXHJcbmNvbnN0IGNvbnNvbGVJbmZvcm1hdGlvbiA9IChzZW50ZW5jZXMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgY3NzU3F1YXJlID0gXCJwYWRkaW5nOiAzcHggNXB4OyBib3JkZXItcmFkaXVzOiA1cHg7IGZvbnQtd2VpZ2h0OiBib2xkO1wiO1xyXG5cdGxldCBjc3NTbWFsbCA9IFwiZm9udC1zaXplOiAxMHB4O1wiO1xyXG5cdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYCVjSm91ZXVycyAoJHtwbGF5ZXJzLmxlbmd0aH0pYCwgYCR7Y3NzU3F1YXJlfSBjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2ApO1xyXG5cdHBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coYCVjJHtwbGF5ZXIuZ2VuZGVyfSVjICR7cGxheWVyLm5hbWV9YCxcclxuXHRcdGAke2Nzc1NxdWFyZX0gY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtgLFxyXG5cdFx0XCJcIik7XHJcblx0fSk7XHJcblx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYCVjUGhyYXNlcyAoJHtzZW50ZW5jZXMubGVuZ3RofSlgLCBgJHtjc3NTcXVhcmV9IGNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7YCk7XHJcblx0c2VudGVuY2VzLmZvckVhY2goc2VudGVuY2UgPT4ge1xyXG5cdFx0bGV0IGNzc1RoZW1lID0gXCJcIjtcclxuXHRcdHN3aXRjaCAoc2VudGVuY2UudGhlbWUpIHtcclxuXHRcdFx0Y2FzZSBcInNwb3J0XCI6XHJcblx0XHRcdFx0Y3NzVGhlbWUgPSBcImNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImhvdFwiOlxyXG5cdFx0XHRcdGNzc1RoZW1lID0gXCJjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6ICNmZjM2YmY7XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0Y3NzVGhlbWUgPSBcImNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRsZXQgc2VudGVuY2VUeXBlID0gXCJcIjtcclxuXHRcdGxldCBzcGFjZVR5cGUgPSBcIlwiO1xyXG5cdFx0aWYgKHNlbnRlbmNlLnR5cGUgIT0gXCJub3JtYWxcIikge1xyXG5cdFx0XHRzZW50ZW5jZVR5cGUgPSBzZW50ZW5jZS50eXBlO1xyXG5cdFx0XHRzcGFjZVR5cGUgPSBcIiBcIjtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYCVjJHtzZW50ZW5jZVR5cGV9JWMke3NwYWNlVHlwZX0lYyR7c2VudGVuY2UudGhlbWV9JWMgJHtzZW50ZW5jZS50ZXh0fWAsXHJcblx0XHRgJHtjc3NTcXVhcmV9IGNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogcmVkOyAke2Nzc1NtYWxsfWAsXHJcblx0XHRgJHtjc3NTbWFsbH1gLFxyXG5cdFx0YCR7Y3NzU3F1YXJlfSAke2Nzc1RoZW1lfSAke2Nzc1NtYWxsfWAsXHJcblx0XHRgJHtjc3NTbWFsbH1gKTtcclxuXHRcdGNvbnNvbGUudGFibGUoc2VudGVuY2UpO1xyXG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdH0pO1xyXG5cdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHRjb25zb2xlLmxvZyhcIiVjSWwgeSBhIFwiICsgc2VudGVuY2VzLmZpbHRlcih4ID0+IHgudHlwZSA9PSBcInZpcnVzXCIpLmxlbmd0aCArIFwiIHZpcnVzICFcIixcclxuXHRgJHtjc3NTcXVhcmV9IGNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogcmVkO2ApO1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZW50ZW5jZXNcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFxyXG4gKi9cclxuY29uc3QgZmlsdGVyU2VudGVuY2VzID0gKHNlbnRlbmNlcywgb3B0aW9ucywgcGxheWVycykgPT4ge1xyXG5cdGxldCBuYkZlbWFsZSA9IHBsYXllcnMucmVkdWNlKChhY2MsIGN1cikgPT4gY3VyLmdlbmRlciA9PT0gXCJGXCIgPyArK2FjYyA6IGFjYywgMCk7XHJcblx0bGV0IG5iR2VuZGVyID0ge1xyXG5cdFx0XCJmZW1hbGVcIjogbmJGZW1hbGUsXHJcblx0XHRcIm1hbGVcIjogcGxheWVycy5sZW5ndGggLSBuYkZlbWFsZVxyXG5cdH07XHJcblxyXG5cdC8vTm9tYnJlIGQnw6lsw6ltZW50IHJlZ2V4IHRyb3V2w6kgZGFucyBsYSBwaHJhc2VcclxuXHRjb25zdCBnZXROYkVsdCA9IChyZWdleCwgdGV4dCkgPT4ge1xyXG5cdFx0cmV0dXJuICh0ZXh0Lm1hdGNoKHJlZ2V4KSB8fCBbXSkubGVuZ3RoO1xyXG5cdH07XHJcblx0XHJcblx0cmV0dXJuIHNlbnRlbmNlcy5maWx0ZXIoKGVsdCkgPT4ge1xyXG5cdFx0bGV0IG5iRWx0RmluZGVkID0gZ2V0TmJFbHQocmVnZXhUb0ZpbmQubmV1dHJhbCwgZWx0LnRleHQpO1xyXG5cdFx0bGV0IG5iRWx0TWFsZUZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLm1hbGUsIGVsdC50ZXh0KTtcclxuXHRcdGxldCBuYkVsdEZlbWFsZUZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLmZlbWFsZSwgZWx0LnRleHQpO1xyXG5cdFx0XHJcblx0XHQvL09uIHbDqXJpZmllIHMnaWwgeSBhIGJpZW4sIGF1dGFudCBvdSBwbHVzIGRlIGpvdWV1ciBxdWUgbGEgcGhyYXNlcyBlbiBuw6ljZXNzaXRlIChlbiBmb25jdGlvbiBkdSBzZXhlKVxyXG5cdFx0bGV0IGVub3VnaEVsdEhvbW1lID0gbmJHZW5kZXIubWFsZSA+PSBuYkVsdE1hbGVGaW5kZWQ7XHJcblx0XHRsZXQgZW5vdWdoRWx0RmVtbWUgPSBuYkdlbmRlci5mZW1hbGUgPj0gbmJFbHRGZW1hbGVGaW5kZWQ7XHJcblx0XHRsZXQgZW5vdWdoUGxheWVyID0gcGxheWVycy5sZW5ndGggPj0gKG5iRWx0RmluZGVkICsgbmJFbHRNYWxlRmluZGVkICsgbmJFbHRGZW1hbGVGaW5kZWQpO1xyXG5cclxuXHRcdHJldHVybiBvcHRpb25zLnRoZW1lcy5pbmNsdWRlcyhlbHQudGhlbWUpICYmIGVub3VnaEVsdEhvbW1lICYmIGVub3VnaEVsdEZlbW1lICYmIGVub3VnaFBsYXllcjtcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbnZvaWUgbGUgbm9tYnJlIGRlIHBocmFzZXMgw6AgYWZmaWNoZXJcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBub21icmUgZGUgcGhyYXNlc1xyXG4gKi9cclxuY29uc3QgZ2V0TGVuZ3RoU2VudGVuY2VzID0gKGR1cmF0aW9uKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdFwidG90YWxcIjogMjAgKyAxNSpkdXJhdGlvbixcclxuXHRcdFwidmlydXNcIjogMiArIDIqZHVyYXRpb25cclxuXHR9O1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7Kn0gc2VudGVuY2VzIFxyXG4gKiBAcGFyYW0geyp9IG9wdGlvbnMgXHJcbiAqIEBwYXJhbSB7Kn0gcGxheWVycyBcclxuICogQHJldHVybnMge3N0cmluZ1tdfVxyXG4gKi9cclxuY29uc3Qgc2VsZWN0U2VudGVuY2VzID0gKHNlbnRlbmNlcywgb3B0aW9ucywgcGxheWVycykgPT4ge1xyXG5cdGxldCBzZW50ZW5jZXNTZWxlY3RlZCA9IFtdO1xyXG5cdGxldCBsZW5ndGhTZW50ZW5jZXMgPSBnZXRMZW5ndGhTZW50ZW5jZXMob3B0aW9ucy5kdXJhdGlvbik7XHJcblx0XHJcblx0bGV0IG5iU2VudGVuY2VzUGlja2VkID0gMDtcclxuICAgIGxldCBuYlZpcnVzUGlja2VkID0gMDtcclxuXHRsZXQgaWRTZW50ZW5jZXNQaWNrZWQgPSBbXTtcclxuXHJcblx0d2hpbGUgKG5iU2VudGVuY2VzUGlja2VkIDwgbGVuZ3RoU2VudGVuY2VzLnRvdGFsICYmIGlkU2VudGVuY2VzUGlja2VkLmxlbmd0aCA8IHNlbnRlbmNlcy5sZW5ndGgpIHtcclxuXHRcdC8vT24gY2hvaXNpdCB1biBudW3DqXJvIGF1IGhhc2FyZFxyXG5cdFx0bGV0IG5iUmFuZG9tU2VudGVuY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqc2VudGVuY2VzLmxlbmd0aCk7XHJcblx0XHRpZiAoIWlkU2VudGVuY2VzUGlja2VkLmluY2x1ZGVzKG5iUmFuZG9tU2VudGVuY2UpKSB7XHJcblx0XHRcdGlkU2VudGVuY2VzUGlja2VkLnB1c2gobmJSYW5kb21TZW50ZW5jZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgc2VudGVuY2VQaWNrZWQgPSBzZW50ZW5jZXNbbmJSYW5kb21TZW50ZW5jZV07XHJcblxyXG5cdFx0XHRpZiAoc2VudGVuY2VQaWNrZWQudHlwZSA9PSBcInZpcnVzXCIpIHtcclxuXHRcdFx0XHRpZiAobmJWaXJ1c1BpY2tlZCA8IGxlbmd0aFNlbnRlbmNlcy52aXJ1cykge1xyXG5cdFx0XHRcdFx0c2VudGVuY2VzU2VsZWN0ZWQucHVzaChzZW50ZW5jZVBpY2tlZCk7XHJcblx0XHRcdFx0XHRuYlNlbnRlbmNlc1BpY2tlZCsrO1xyXG5cdFx0XHRcdFx0bmJWaXJ1c1BpY2tlZCsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRzZW50ZW5jZXNTZWxlY3RlZC5wdXNoKHNlbnRlbmNlUGlja2VkKTtcclxuXHRcdFx0XHRuYlNlbnRlbmNlc1BpY2tlZCsrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc2VudGVuY2VzU2VsZWN0ZWQ7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRTZW50ZW5jZXMgPSAoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKSA9PiB7XHJcblx0cmV0dXJuIHNlbnRlbmNlcy5tYXAoc2VudGVuY2UgPT4ge1xyXG5cdFx0Ly9GYWl0IHVuZSBjb3BpZSBkZXMgam91ZXVyc1xyXG5cdFx0bGV0IHBsYXllcnNOb3RQaWNrZWQgPSBwbGF5ZXJzLnNsaWNlKCk7XHJcblxyXG5cdFx0Y29uc29sZS5ncm91cENvbGxhcHNlZChcIiVjXCIgKyBzZW50ZW5jZS50ZXh0LCBcImNvbG9yOiByZWRcIik7XHJcblx0XHRjb25zdCBpbml0U2VudGVuY2UgPSAoZWx0VG9GaW5kKSA9PiB7XHJcblx0XHRcdGlmIChzZW50ZW5jZS50ZXh0Lm1hdGNoKGVsdFRvRmluZCkgIT0gbnVsbCkgY29uc29sZS5sb2coZWx0VG9GaW5kKTtcclxuXHRcdFx0d2hpbGUgKHNlbnRlbmNlLnRleHQubWF0Y2goZWx0VG9GaW5kKSAhPSBudWxsKSB7XHJcblx0XHRcdFx0bGV0IHBsYXllclRvUGljaztcclxuXHRcdFx0XHRzd2l0Y2ggKGVsdFRvRmluZCkge1xyXG5cdFx0XHRcdFx0Y2FzZSByZWdleFRvRmluZC5tYWxlOlxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJUb1BpY2sgPSBwbGF5ZXJzTm90UGlja2VkLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLmdlbmRlciA9PSBcIkZcIik7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSByZWdleFRvRmluZC5mZW1hbGU6XHJcblx0XHRcdFx0XHRcdHBsYXllclRvUGljayA9IHBsYXllcnNOb3RQaWNrZWQuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIuZ2VuZGVyID09IFwiTVwiKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJUb1BpY2sgPSBwbGF5ZXJzTm90UGlja2VkO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9DaG9pc2l0IHVuIGpvdWV1ciBhdSBoYXNhcmRcclxuXHRcdFx0XHRsZXQgcGxheWVyUGlja2VkID0gcGxheWVyVG9QaWNrW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpwbGF5ZXJUb1BpY2subGVuZ3RoKV07XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocGxheWVyUGlja2VkKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL1JldGlyZSBjZSBqb3VldXIgZGUgbGEgbGlzdGUgZGVzIGpvdWV1cnMgbm9uIHByaXNcclxuXHRcdFx0XHRwbGF5ZXJzTm90UGlja2VkLnNwbGljZShwbGF5ZXJzTm90UGlja2VkLmluZGV4T2YocGxheWVyUGlja2VkKSwgMSk7XHJcblxyXG5cdFx0XHRcdC8vUmVtcGxhY2UgbCfDqWzDqW1lbnQgcGFyIGxlIG5vbSBkdSBqb3VldXJcclxuXHRcdFx0XHRzZW50ZW5jZS50ZXh0ID0gc2VudGVuY2UudGV4dC5yZXBsYWNlKGVsdFRvRmluZCwgcGxheWVyUGlja2VkLm5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGluaXRTZW50ZW5jZShyZWdleFRvRmluZC5uZXV0cmFsKTtcclxuXHRcdGluaXRTZW50ZW5jZShyZWdleFRvRmluZC5tYWxlKTtcclxuXHRcdGluaXRTZW50ZW5jZShyZWdleFRvRmluZC5mZW1hbGUpO1xyXG5cclxuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHRcdHJldHVybiBzZW50ZW5jZTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFBsYXkoKSB7XHJcblx0bGV0IGxvY2FsT3B0aW9ucyA9IG51bGw7XHJcblx0bGV0IGxvY2FsUGxheWVycyA9IG51bGw7XHJcblx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdFx0bG9jYWxPcHRpb25zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9wdGlvbnNcIikpO1xyXG5cdFx0bG9jYWxQbGF5ZXJzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllcnNcIikpO1xyXG5cdH1cclxuXHRjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtwbGF5ZXJzXSA9IHVzZVN0YXRlKGxvY2FsUGxheWVycyk7XHJcblx0Y29uc3QgW29wdGlvbnNdID0gdXNlU3RhdGUobG9jYWxPcHRpb25zKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxldCBzZW50ZW5jZXMgPSBmaWx0ZXJTZW50ZW5jZXMoZGF0YSwgb3B0aW9ucywgcGxheWVycyk7XHJcblx0XHRzZW50ZW5jZXMgPSBzZWxlY3RTZW50ZW5jZXMoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IGluaXRTZW50ZW5jZXMoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdGNvbnNvbGVJbmZvcm1hdGlvbihzZW50ZW5jZXMsIHBsYXllcnMpO1xyXG4gICAgICAgIC8qbGV0IG5SYW5kb21TZW50ZW5jZXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpO1xyXG5cdFx0c2V0VGV4dChkYXRhW25SYW5kb21TZW50ZW5jZXNdLnRleHQpOyovXHJcblxyXG5cdFx0Ly8gVE9ETyA6IChpZMOpZSBlbiB0cyA9PiBGYWlyZSByZWR1Y2VyIGV0IGludGVyZmFjZSBwb3VyIGxlcyBwaHJhc2VzIGR1IGpzb24gOiBodHRwczovL3lvdXR1LmJlL1o1aVdyNlNyc2o4P3Q9OTE4KVxyXG5cdFx0Ly8gKEZhaXJlIGRlcyBmb25jdGlvbnMgKGVuIGRlaG9ycyBkdSBjb21wb3NhbnRzIHBvdXIgcXVlIMOnYSBzb2l0IGNsZWFuIChqdXN0ZSBhdSBkZXNzdXMgbMOgKSkpXHJcblx0XHQvLyAtIEZpbHRyZXIgbGUganNvbiBkYXRhIHBvdXIgbmUgcHJlbmRyZSBxdWUgbGVzIHBocmFzZXMgcXVpIHJlc3BlY3RlbnQgbGVzIG9wdGlvbnMgKHRow6htZXMuLi4pXHJcblx0XHQvLyAtIEZhaXJlIGxlIHRhYmxlYXUgZGUgcGhyYXNlcyAodW5lIGNlcnRhaW5lIGxvbmd1ZXVyIGVuIGZvbmN0aW9uIGRlIGxhIGxvbmd1ZXVyIGVuIG9wdGlvbilcclxuXHRcdC8vIC0gUmVtcGxhY2VyIGxlcyBub21zIGRhbnMgbGVzIHBocmFzZXMgKHRpcmVyIGxlcyBub21zIGF1IGhhc2FyZCB0b3V0IMOnYSB0b3V0IMOnYSlcclxuXHRcdC8vIC0gTWV0dHJlIGxlcyB2aXJ1cyBxdWVscXVlIHBhcnRcclxuXHRcdC8vIC0gTWV0dHJlIGxhIGNvbnPDqXF1ZW5jZSBqdXN0ZSBhcHLDqHMgcG91ciBsZXMgY2hvaXhcclxuXHRcdC8vXHJcblx0XHQvLyAtIFBvdXIgbGVzIGNob2l4LCBjZSBzZXJhIGRhbnMgbGUgamV1IGRlIHJlbXBsYWNlciBsZSBub20gZGVzIGTDqXRhaWxzIGRvbmMgcGFzIGRhbnMgY2V0dGUgZm9uY3Rpb25cclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0IHRpdGxlPVwiU2VsZWN0aW9ubmVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke3N0eWxlcy5tYWlufWB9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdHt0aXRsZSB8fCBcIlwifVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0e3RleHQgfHwgXCJDaGFyZ2VtZW50Li4uXCJ9XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXk7Il0sInNvdXJjZVJvb3QiOiIifQ==