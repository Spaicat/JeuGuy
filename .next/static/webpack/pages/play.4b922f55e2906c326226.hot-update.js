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
var stringToFind = {
  "neutral": "[nom]",
  "male": "[nomM]",
  "female": "[nomF]"
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
    console.group("%c" + sentence.text, "color: red");

    var initSentence = function initSentence(stringMatch, regexMatch) {
      while (sentence.text.match(regexMatch) != null) {
        var playerToPick = void 0;

        switch (stringMatch) {
          case stringToFind.female:
            playerToPick = playersNotPicked.filter(function (player) {
              return player.gender == "F";
            });
            break;

          case stringToFind.male:
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

        sentence.text = sentence.text.replace(stringMatch, playerPicked.name);
      }
    };

    initSentence(stringToFind.neutral, regexToFind.neutral);
    initSentence(stringToFind.male, regexToFind.male);
    initSentence(stringToFind.female, regexToFind.female);
    console.log(sentence.text);
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
        lineNumber: 222,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: text || "Chargement..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 220,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS5qcyJdLCJuYW1lcyI6WyJyZWdleFRvRmluZCIsInN0cmluZ1RvRmluZCIsImNvbnNvbGVJbmZvcm1hdGlvbiIsInNlbnRlbmNlcyIsInBsYXllcnMiLCJjc3NTcXVhcmUiLCJjc3NTbWFsbCIsImNvbnNvbGUiLCJncm91cENvbGxhcHNlZCIsImxlbmd0aCIsImZvckVhY2giLCJwbGF5ZXIiLCJsb2ciLCJnZW5kZXIiLCJuYW1lIiwiZ3JvdXBFbmQiLCJzZW50ZW5jZSIsImNzc1RoZW1lIiwidGhlbWUiLCJzZW50ZW5jZVR5cGUiLCJzcGFjZVR5cGUiLCJ0eXBlIiwidGV4dCIsInRhYmxlIiwiZmlsdGVyIiwieCIsImZpbHRlclNlbnRlbmNlcyIsIm9wdGlvbnMiLCJuYkZlbWFsZSIsInJlZHVjZSIsImFjYyIsImN1ciIsIm5iR2VuZGVyIiwiZ2V0TmJFbHQiLCJyZWdleCIsIm1hdGNoIiwiZWx0IiwibmJFbHRGaW5kZWQiLCJuZXV0cmFsIiwibmJFbHRNYWxlRmluZGVkIiwibWFsZSIsIm5iRWx0RmVtYWxlRmluZGVkIiwiZmVtYWxlIiwiZW5vdWdoRWx0SG9tbWUiLCJlbm91Z2hFbHRGZW1tZSIsImVub3VnaFBsYXllciIsInRoZW1lcyIsImluY2x1ZGVzIiwiZ2V0TGVuZ3RoU2VudGVuY2VzIiwiZHVyYXRpb24iLCJzZWxlY3RTZW50ZW5jZXMiLCJzZW50ZW5jZXNTZWxlY3RlZCIsImxlbmd0aFNlbnRlbmNlcyIsIm5iU2VudGVuY2VzUGlja2VkIiwibmJWaXJ1c1BpY2tlZCIsImlkU2VudGVuY2VzUGlja2VkIiwidG90YWwiLCJuYlJhbmRvbVNlbnRlbmNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNlbnRlbmNlUGlja2VkIiwidmlydXMiLCJpbml0U2VudGVuY2VzIiwibWFwIiwicGxheWVyc05vdFBpY2tlZCIsInNsaWNlIiwiZ3JvdXAiLCJpbml0U2VudGVuY2UiLCJzdHJpbmdNYXRjaCIsInJlZ2V4TWF0Y2giLCJwbGF5ZXJUb1BpY2siLCJwbGF5ZXJQaWNrZWQiLCJzcGxpY2UiLCJpbmRleE9mIiwicmVwbGFjZSIsIlBsYXkiLCJsb2NhbE9wdGlvbnMiLCJsb2NhbFBsYXllcnMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlU3RhdGUiLCJzZXRUZXh0IiwidGl0bGUiLCJzZXRUaXRsZSIsInVzZUVmZmVjdCIsImRhdGEiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFdBQVcsR0FBRztBQUNqQixhQUFXLFVBRE07QUFFakIsVUFBUSxXQUZTO0FBR2pCLFlBQVU7QUFITyxDQUFsQjtBQUtBLElBQUlDLFlBQVksR0FBRztBQUNsQixhQUFXLE9BRE87QUFFbEIsVUFBUSxRQUZVO0FBR2xCLFlBQVU7QUFIUSxDQUFuQjs7QUFNQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFNBQUQsRUFBWUMsT0FBWixFQUF3QjtBQUNsRCxNQUFJQyxTQUFTLEdBQUcsMERBQWhCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLGtCQUFmO0FBQ0FDLFNBQU8sQ0FBQ0MsY0FBUixzQkFBcUNKLE9BQU8sQ0FBQ0ssTUFBN0Msa0JBQTJESixTQUEzRDtBQUNBRCxTQUFPLENBQUNNLE9BQVIsQ0FBZ0IsVUFBQUMsTUFBTSxFQUFJO0FBQ3pCSixXQUFPLENBQUNLLEdBQVIsYUFBaUJELE1BQU0sQ0FBQ0UsTUFBeEIsZ0JBQW9DRixNQUFNLENBQUNHLElBQTNDLGFBQ0dULFNBREgsOENBRUEsRUFGQTtBQUdBLEdBSkQ7QUFLQUUsU0FBTyxDQUFDUSxRQUFSO0FBQ0FSLFNBQU8sQ0FBQ0MsY0FBUixzQkFBcUNMLFNBQVMsQ0FBQ00sTUFBL0Msa0JBQTZESixTQUE3RDtBQUNBRixXQUFTLENBQUNPLE9BQVYsQ0FBa0IsVUFBQU0sUUFBUSxFQUFJO0FBQzdC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QkFDQztBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLGtCQUNFSixLQUFLLElBQUk7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFJQztBQUFBLGtCQUNFaEUsSUFBSSxJQUFJO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVlBOztHQTNDUXVELEk7O0tBQUFBLEk7QUE2Q1QsK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGxheS40YjkyMmY1NWUyOTA2YzMyNjIyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9QbGF5Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9zZW50ZW5jZXMuanNvbic7XHJcblxyXG5sZXQgcmVnZXhUb0ZpbmQgPSB7XHJcblx0XCJuZXV0cmFsXCI6IC9cXFtub21cXF0vZyxcclxuXHRcIm1hbGVcIjogL1xcW25vbU1cXF0vZyxcclxuXHRcImZlbWFsZVwiOiAvXFxbbm9tRlxcXS9nLFxyXG59O1xyXG5sZXQgc3RyaW5nVG9GaW5kID0ge1xyXG5cdFwibmV1dHJhbFwiOiBcIltub21dXCIsXHJcblx0XCJtYWxlXCI6IFwiW25vbU1dXCIsXHJcblx0XCJmZW1hbGVcIjogXCJbbm9tRl1cIixcclxufTtcclxuXHJcbmNvbnN0IGNvbnNvbGVJbmZvcm1hdGlvbiA9IChzZW50ZW5jZXMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgY3NzU3F1YXJlID0gXCJwYWRkaW5nOiAzcHggNXB4OyBib3JkZXItcmFkaXVzOiA1cHg7IGZvbnQtd2VpZ2h0OiBib2xkO1wiO1xyXG5cdGxldCBjc3NTbWFsbCA9IFwiZm9udC1zaXplOiAxMHB4O1wiO1xyXG5cdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYCVjSm91ZXVycyAoJHtwbGF5ZXJzLmxlbmd0aH0pYCwgYCR7Y3NzU3F1YXJlfSBjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2ApO1xyXG5cdHBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coYCVjJHtwbGF5ZXIuZ2VuZGVyfSVjICR7cGxheWVyLm5hbWV9YCxcclxuXHRcdGAke2Nzc1NxdWFyZX0gY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtgLFxyXG5cdFx0XCJcIik7XHJcblx0fSk7XHJcblx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYCVjUGhyYXNlcyAoJHtzZW50ZW5jZXMubGVuZ3RofSlgLCBgJHtjc3NTcXVhcmV9IGNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7YCk7XHJcblx0c2VudGVuY2VzLmZvckVhY2goc2VudGVuY2UgPT4ge1xyXG5cdFx0bGV0IGNzc1RoZW1lID0gXCJcIjtcclxuXHRcdHN3aXRjaCAoc2VudGVuY2UudGhlbWUpIHtcclxuXHRcdFx0Y2FzZSBcInNwb3J0XCI6XHJcblx0XHRcdFx0Y3NzVGhlbWUgPSBcImNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImhvdFwiOlxyXG5cdFx0XHRcdGNzc1RoZW1lID0gXCJjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6ICNmZjM2YmY7XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0Y3NzVGhlbWUgPSBcImNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRsZXQgc2VudGVuY2VUeXBlID0gXCJcIjtcclxuXHRcdGxldCBzcGFjZVR5cGUgPSBcIlwiO1xyXG5cdFx0aWYgKHNlbnRlbmNlLnR5cGUgIT0gXCJub3JtYWxcIikge1xyXG5cdFx0XHRzZW50ZW5jZVR5cGUgPSBzZW50ZW5jZS50eXBlO1xyXG5cdFx0XHRzcGFjZVR5cGUgPSBcIiBcIjtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYCVjJHtzZW50ZW5jZVR5cGV9JWMke3NwYWNlVHlwZX0lYyR7c2VudGVuY2UudGhlbWV9JWMgJHtzZW50ZW5jZS50ZXh0fWAsXHJcblx0XHRgJHtjc3NTcXVhcmV9IGNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogcmVkOyAke2Nzc1NtYWxsfWAsXHJcblx0XHRgJHtjc3NTbWFsbH1gLFxyXG5cdFx0YCR7Y3NzU3F1YXJlfSAke2Nzc1RoZW1lfSAke2Nzc1NtYWxsfWAsXHJcblx0XHRgJHtjc3NTbWFsbH1gKTtcclxuXHRcdGNvbnNvbGUudGFibGUoc2VudGVuY2UpO1xyXG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdH0pO1xyXG5cdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHRjb25zb2xlLmxvZyhcIiVjSWwgeSBhIFwiICsgc2VudGVuY2VzLmZpbHRlcih4ID0+IHgudHlwZSA9PSBcInZpcnVzXCIpLmxlbmd0aCArIFwiIHZpcnVzICFcIixcclxuXHRgJHtjc3NTcXVhcmV9IGNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogcmVkO2ApO1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZW50ZW5jZXNcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFxyXG4gKi9cclxuY29uc3QgZmlsdGVyU2VudGVuY2VzID0gKHNlbnRlbmNlcywgb3B0aW9ucywgcGxheWVycykgPT4ge1xyXG5cdGxldCBuYkZlbWFsZSA9IHBsYXllcnMucmVkdWNlKChhY2MsIGN1cikgPT4gY3VyLmdlbmRlciA9PT0gXCJGXCIgPyArK2FjYyA6IGFjYywgMCk7XHJcblx0bGV0IG5iR2VuZGVyID0ge1xyXG5cdFx0XCJmZW1hbGVcIjogbmJGZW1hbGUsXHJcblx0XHRcIm1hbGVcIjogcGxheWVycy5sZW5ndGggLSBuYkZlbWFsZVxyXG5cdH07XHJcblxyXG5cdC8vTm9tYnJlIGQnw6lsw6ltZW50IHJlZ2V4IHRyb3V2w6kgZGFucyBsYSBwaHJhc2VcclxuXHRjb25zdCBnZXROYkVsdCA9IChyZWdleCwgdGV4dCkgPT4ge1xyXG5cdFx0cmV0dXJuICh0ZXh0Lm1hdGNoKHJlZ2V4KSB8fCBbXSkubGVuZ3RoO1xyXG5cdH07XHJcblx0XHJcblx0cmV0dXJuIHNlbnRlbmNlcy5maWx0ZXIoKGVsdCkgPT4ge1xyXG5cdFx0bGV0IG5iRWx0RmluZGVkID0gZ2V0TmJFbHQocmVnZXhUb0ZpbmQubmV1dHJhbCwgZWx0LnRleHQpO1xyXG5cdFx0bGV0IG5iRWx0TWFsZUZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLm1hbGUsIGVsdC50ZXh0KTtcclxuXHRcdGxldCBuYkVsdEZlbWFsZUZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLmZlbWFsZSwgZWx0LnRleHQpO1xyXG5cdFx0XHJcblx0XHQvL09uIHbDqXJpZmllIHMnaWwgeSBhIGJpZW4sIGF1dGFudCBvdSBwbHVzIGRlIGpvdWV1ciBxdWUgbGEgcGhyYXNlcyBlbiBuw6ljZXNzaXRlIChlbiBmb25jdGlvbiBkdSBzZXhlKVxyXG5cdFx0bGV0IGVub3VnaEVsdEhvbW1lID0gbmJHZW5kZXIubWFsZSA+PSBuYkVsdE1hbGVGaW5kZWQ7XHJcblx0XHRsZXQgZW5vdWdoRWx0RmVtbWUgPSBuYkdlbmRlci5mZW1hbGUgPj0gbmJFbHRGZW1hbGVGaW5kZWQ7XHJcblx0XHRsZXQgZW5vdWdoUGxheWVyID0gcGxheWVycy5sZW5ndGggPj0gKG5iRWx0RmluZGVkICsgbmJFbHRNYWxlRmluZGVkICsgbmJFbHRGZW1hbGVGaW5kZWQpO1xyXG5cclxuXHRcdHJldHVybiBvcHRpb25zLnRoZW1lcy5pbmNsdWRlcyhlbHQudGhlbWUpICYmIGVub3VnaEVsdEhvbW1lICYmIGVub3VnaEVsdEZlbW1lICYmIGVub3VnaFBsYXllcjtcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbnZvaWUgbGUgbm9tYnJlIGRlIHBocmFzZXMgw6AgYWZmaWNoZXJcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBub21icmUgZGUgcGhyYXNlc1xyXG4gKi9cclxuY29uc3QgZ2V0TGVuZ3RoU2VudGVuY2VzID0gKGR1cmF0aW9uKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdFwidG90YWxcIjogMjAgKyAxNSpkdXJhdGlvbixcclxuXHRcdFwidmlydXNcIjogMiArIDIqZHVyYXRpb25cclxuXHR9O1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7Kn0gc2VudGVuY2VzIFxyXG4gKiBAcGFyYW0geyp9IG9wdGlvbnMgXHJcbiAqIEBwYXJhbSB7Kn0gcGxheWVycyBcclxuICogQHJldHVybnMge3N0cmluZ1tdfVxyXG4gKi9cclxuY29uc3Qgc2VsZWN0U2VudGVuY2VzID0gKHNlbnRlbmNlcywgb3B0aW9ucywgcGxheWVycykgPT4ge1xyXG5cdGxldCBzZW50ZW5jZXNTZWxlY3RlZCA9IFtdO1xyXG5cdGxldCBsZW5ndGhTZW50ZW5jZXMgPSBnZXRMZW5ndGhTZW50ZW5jZXMob3B0aW9ucy5kdXJhdGlvbik7XHJcblx0XHJcblx0bGV0IG5iU2VudGVuY2VzUGlja2VkID0gMDtcclxuICAgIGxldCBuYlZpcnVzUGlja2VkID0gMDtcclxuXHRsZXQgaWRTZW50ZW5jZXNQaWNrZWQgPSBbXTtcclxuXHJcblx0d2hpbGUgKG5iU2VudGVuY2VzUGlja2VkIDwgbGVuZ3RoU2VudGVuY2VzLnRvdGFsICYmIGlkU2VudGVuY2VzUGlja2VkLmxlbmd0aCA8IHNlbnRlbmNlcy5sZW5ndGgpIHtcclxuXHRcdC8vT24gY2hvaXNpdCB1biBudW3DqXJvIGF1IGhhc2FyZFxyXG5cdFx0bGV0IG5iUmFuZG9tU2VudGVuY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqc2VudGVuY2VzLmxlbmd0aCk7XHJcblx0XHRpZiAoIWlkU2VudGVuY2VzUGlja2VkLmluY2x1ZGVzKG5iUmFuZG9tU2VudGVuY2UpKSB7XHJcblx0XHRcdGlkU2VudGVuY2VzUGlja2VkLnB1c2gobmJSYW5kb21TZW50ZW5jZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgc2VudGVuY2VQaWNrZWQgPSBzZW50ZW5jZXNbbmJSYW5kb21TZW50ZW5jZV07XHJcblxyXG5cdFx0XHRpZiAoc2VudGVuY2VQaWNrZWQudHlwZSA9PSBcInZpcnVzXCIpIHtcclxuXHRcdFx0XHRpZiAobmJWaXJ1c1BpY2tlZCA8IGxlbmd0aFNlbnRlbmNlcy52aXJ1cykge1xyXG5cdFx0XHRcdFx0c2VudGVuY2VzU2VsZWN0ZWQucHVzaChzZW50ZW5jZVBpY2tlZCk7XHJcblx0XHRcdFx0XHRuYlNlbnRlbmNlc1BpY2tlZCsrO1xyXG5cdFx0XHRcdFx0bmJWaXJ1c1BpY2tlZCsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRzZW50ZW5jZXNTZWxlY3RlZC5wdXNoKHNlbnRlbmNlUGlja2VkKTtcclxuXHRcdFx0XHRuYlNlbnRlbmNlc1BpY2tlZCsrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc2VudGVuY2VzU2VsZWN0ZWQ7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRTZW50ZW5jZXMgPSAoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKSA9PiB7XHJcblx0cmV0dXJuIHNlbnRlbmNlcy5tYXAoc2VudGVuY2UgPT4ge1xyXG5cdFx0Ly9GYWl0IHVuZSBjb3BpZSBkZXMgam91ZXVyc1xyXG5cdFx0bGV0IHBsYXllcnNOb3RQaWNrZWQgPSBwbGF5ZXJzLnNsaWNlKCk7XHJcblxyXG5cdFx0Y29uc29sZS5ncm91cChcIiVjXCIgKyBzZW50ZW5jZS50ZXh0LCBcImNvbG9yOiByZWRcIik7XHJcblx0XHRjb25zdCBpbml0U2VudGVuY2UgPSAoc3RyaW5nTWF0Y2gsIHJlZ2V4TWF0Y2gpID0+IHtcclxuXHRcdFx0d2hpbGUgKHNlbnRlbmNlLnRleHQubWF0Y2gocmVnZXhNYXRjaCkgIT0gbnVsbCkge1xyXG5cdFx0XHRcdGxldCBwbGF5ZXJUb1BpY2s7XHJcblx0XHRcdFx0c3dpdGNoIChzdHJpbmdNYXRjaCkge1xyXG5cdFx0XHRcdFx0Y2FzZSBzdHJpbmdUb0ZpbmQuZmVtYWxlOlxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJUb1BpY2sgPSBwbGF5ZXJzTm90UGlja2VkLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLmdlbmRlciA9PSBcIkZcIik7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBzdHJpbmdUb0ZpbmQubWFsZTpcclxuXHRcdFx0XHRcdFx0cGxheWVyVG9QaWNrID0gcGxheWVyc05vdFBpY2tlZC5maWx0ZXIocGxheWVyID0+IHBsYXllci5nZW5kZXIgPT0gXCJNXCIpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdHBsYXllclRvUGljayA9IHBsYXllcnNOb3RQaWNrZWQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL0Nob2lzaXQgdW4gam91ZXVyIGF1IGhhc2FyZFxyXG5cdFx0XHRcdGxldCBwbGF5ZXJQaWNrZWQgPSBwbGF5ZXJUb1BpY2tbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnBsYXllclRvUGljay5sZW5ndGgpXTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhwbGF5ZXJQaWNrZWQpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vUmV0aXJlIGNlIGpvdWV1ciBkZSBsYSBsaXN0ZSBkZXMgam91ZXVycyBub24gcHJpc1xyXG5cdFx0XHRcdHBsYXllcnNOb3RQaWNrZWQuc3BsaWNlKHBsYXllcnNOb3RQaWNrZWQuaW5kZXhPZihwbGF5ZXJQaWNrZWQpLCAxKTtcclxuXHJcblx0XHRcdFx0Ly9SZW1wbGFjZSBsJ8OpbMOpbWVudCBwYXIgbGUgbm9tIGR1IGpvdWV1clxyXG5cdFx0XHRcdHNlbnRlbmNlLnRleHQgPSBzZW50ZW5jZS50ZXh0LnJlcGxhY2Uoc3RyaW5nTWF0Y2gsIHBsYXllclBpY2tlZC5uYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpbml0U2VudGVuY2Uoc3RyaW5nVG9GaW5kLm5ldXRyYWwsIHJlZ2V4VG9GaW5kLm5ldXRyYWwpO1xyXG5cdFx0aW5pdFNlbnRlbmNlKHN0cmluZ1RvRmluZC5tYWxlLCByZWdleFRvRmluZC5tYWxlKTtcclxuXHRcdGluaXRTZW50ZW5jZShzdHJpbmdUb0ZpbmQuZmVtYWxlLCByZWdleFRvRmluZC5mZW1hbGUpO1xyXG5cdFx0Y29uc29sZS5sb2coc2VudGVuY2UudGV4dCk7XHJcblxyXG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdFx0cmV0dXJuIHNlbnRlbmNlO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gUGxheSgpIHtcclxuXHRsZXQgbG9jYWxPcHRpb25zID0gbnVsbDtcclxuXHRsZXQgbG9jYWxQbGF5ZXJzID0gbnVsbDtcclxuXHRpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcblx0XHRsb2NhbE9wdGlvbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3B0aW9uc1wiKSk7XHJcblx0XHRsb2NhbFBsYXllcnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyc1wiKSk7XHJcblx0fVxyXG5cdGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3BsYXllcnNdID0gdXNlU3RhdGUobG9jYWxQbGF5ZXJzKTtcclxuXHRjb25zdCBbb3B0aW9uc10gPSB1c2VTdGF0ZShsb2NhbE9wdGlvbnMpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGV0IHNlbnRlbmNlcyA9IGZpbHRlclNlbnRlbmNlcyhkYXRhLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IHNlbGVjdFNlbnRlbmNlcyhzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpO1xyXG5cdFx0c2VudGVuY2VzID0gaW5pdFNlbnRlbmNlcyhzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpO1xyXG5cdFx0Y29uc29sZUluZm9ybWF0aW9uKHNlbnRlbmNlcywgcGxheWVycyk7XHJcbiAgICAgICAgLypsZXQgblJhbmRvbVNlbnRlbmNlcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCk7XHJcblx0XHRzZXRUZXh0KGRhdGFbblJhbmRvbVNlbnRlbmNlc10udGV4dCk7Ki9cclxuXHJcblx0XHQvLyBUT0RPIDogKGlkw6llIGVuIHRzID0+IEZhaXJlIHJlZHVjZXIgZXQgaW50ZXJmYWNlIHBvdXIgbGVzIHBocmFzZXMgZHUganNvbiA6IGh0dHBzOi8veW91dHUuYmUvWjVpV3I2U3Jzajg/dD05MTgpXHJcblx0XHQvLyAoRmFpcmUgZGVzIGZvbmN0aW9ucyAoZW4gZGVob3JzIGR1IGNvbXBvc2FudHMgcG91ciBxdWUgw6dhIHNvaXQgY2xlYW4gKGp1c3RlIGF1IGRlc3N1cyBsw6ApKSlcclxuXHRcdC8vIC0gRmlsdHJlciBsZSBqc29uIGRhdGEgcG91ciBuZSBwcmVuZHJlIHF1ZSBsZXMgcGhyYXNlcyBxdWkgcmVzcGVjdGVudCBsZXMgb3B0aW9ucyAodGjDqG1lcy4uLilcclxuXHRcdC8vIC0gRmFpcmUgbGUgdGFibGVhdSBkZSBwaHJhc2VzICh1bmUgY2VydGFpbmUgbG9uZ3VldXIgZW4gZm9uY3Rpb24gZGUgbGEgbG9uZ3VldXIgZW4gb3B0aW9uKVxyXG5cdFx0Ly8gLSBSZW1wbGFjZXIgbGVzIG5vbXMgZGFucyBsZXMgcGhyYXNlcyAodGlyZXIgbGVzIG5vbXMgYXUgaGFzYXJkIHRvdXQgw6dhIHRvdXQgw6dhKVxyXG5cdFx0Ly8gLSBNZXR0cmUgbGVzIHZpcnVzIHF1ZWxxdWUgcGFydFxyXG5cdFx0Ly8gLSBNZXR0cmUgbGEgY29uc8OpcXVlbmNlIGp1c3RlIGFwcsOocyBwb3VyIGxlcyBjaG9peFxyXG5cdFx0Ly9cclxuXHRcdC8vIC0gUG91ciBsZXMgY2hvaXgsIGNlIHNlcmEgZGFucyBsZSBqZXUgZGUgcmVtcGxhY2VyIGxlIG5vbSBkZXMgZMOpdGFpbHMgZG9uYyBwYXMgZGFucyBjZXR0ZSBmb25jdGlvblxyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQgdGl0bGU9XCJTZWxlY3Rpb25uZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7c3R5bGVzLm1haW59YH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0e3RpdGxlIHx8IFwiXCJ9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHR7dGV4dCB8fCBcIkNoYXJnZW1lbnQuLi5cIn1cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheTsiXSwic291cmNlUm9vdCI6IiJ9