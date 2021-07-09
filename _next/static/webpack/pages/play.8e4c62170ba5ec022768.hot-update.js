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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Play.module.css */ "./styles/Play.module.css");
/* harmony import */ var _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_sentences_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/sentences.json */ "./data/sentences.json");
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
/**
 * Renvoie un entier aléatoire entre min et max [min, max]
 * @param  {number} min la valeur minimum que peut atteindre l'entier
 * @param  {number} max la valeur maximum que peut atteindre l'entier
 * @return {number} L'entier tiré au hasard
 */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var consoleInformation = function consoleInformation(sentences, players) {
  var cssSquare = "padding: 3px 5px; border-radius: 5px; font-weight: bold;";
  var cssSmall = "font-size: 10px;";
  console.groupCollapsed("%cJoueurs (".concat(players.length, ")"), "".concat(cssSquare, " color: black; background-color: white;"));
  players.forEach(function (player) {
    console.log("%c".concat(player.gender, "%c ").concat(player.name), "".concat(cssSquare, " color: black; background-color: white;"), "");
  });
  console.groupEnd();
  console.groupCollapsed("%cPhrases (".concat(sentences.length, ")%c %c(").concat(sentences.filter(function (x) {
    return x.type == "virus";
  }).length, " virus)"), "".concat(cssSquare, " color: black; background-color: white;"), "", "".concat(cssSquare, " color: white; background-color: red;"));
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
};
/**
 * 
 * @param {Object[]} sentences
 * @param {Object[]} options 
 * @param {Object[]} players 
 * @returns {Object[]} 
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
 * @returns {number} Nombre de phrases
 */


var getLengthSentences = function getLengthSentences(duration) {
  return {
    "total": 20 + 15 * duration,
    "virus": 2 + 2 * duration
  };
};
/**
 * 
 * @param {Object[]} sentences 
 * @param {Object[]} options 
 * @param {Object[]} players 
 * @returns {Object[]}
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

    var initPlayers = function initPlayers(stringMatch) {
      while (sentence.text.indexOf(stringMatch) > -1) {
        //Choisit parmis quel type de joueur on peut tirer
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


        var playerPicked = playerToPick[Math.floor(Math.random() * playerToPick.length)]; //Retire ce joueur de la liste des joueurs non pris

        playersNotPicked.splice(playersNotPicked.indexOf(playerPicked), 1); //Remplace l'élément par le nom du joueur

        sentence.text = sentence.text.replace(stringMatch, playerPicked.name); //Si la phrase est un virus et qu'on trouve un élément dans les details

        if (sentence.type == "virus" && sentence.details.indexOf(stringMatch) > -1) {
          //Remplace le eltToFind par le nom du joueur (le même que le text)
          sentence.details = sentence.details.replace(stringMatch, playerPicked.name);
        }
      }
    };

    initPlayers(stringToFind.neutral);
    initPlayers(stringToFind.male);
    initPlayers(stringToFind.female);
    return sentence;
  });
};
/**
 * Place les virus en tant que phrase
 * @param {Object[]} sentences Tableau des phrases retenues
 */


var putVirus = function putVirus(sentences) {
  var newSentences = sentences.slice();

  for (var i = 0; i < sentences.length; i++) {
    if (sentences[i].type == "virus") {
      var indexRandVirus = getRandomInt(3, 6); //TODO : different virus length (difficulty)

      var sentenceVirus = {
        "text": sentences[i].details,
        "theme": sentences[i].theme,
        "type": "virusEnd"
      };
      newSentences.splice(i + indexRandVirus, 0, sentenceVirus);
    }
  }

  return newSentences;
};

function Play(props) {
  _s();

  var localOptions = null;
  var localPlayers = null;

  if (true) {
    localOptions = JSON.parse(localStorage.getItem("options"));
    localPlayers = JSON.parse(localStorage.getItem("players"));
  }

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

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

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      barLength = _useState5[0],
      setBarLength = _useState5[1];

  var currentSentence = 0;

  var handleClick = function handleClick(event, sentences) {
    event.preventDefault(); //Clique à gauche

    if (event.clientX < window.innerWidth / 2) {
      if (currentSentence > 0) {
        currentSentence--;
      }
    } //Clique à droite
    else {
        if (currentSentence < sentences.length - 1) {
          currentSentence++;
        } else {
          router.push('/play');
        }
      }

    setText(sentences[currentSentence].text);
    setBarLength(getLengthBar(sentences.length));
  };

  var getLengthBar = function getLengthBar(sentencesLength) {
    return (currentSentence + 1) * 100 / sentencesLength;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var sentences = filterSentences(_data_sentences_json__WEBPACK_IMPORTED_MODULE_5__, options, players);
    sentences = selectSentences(sentences, options, players);
    sentences = initSentences(sentences, options, players);
    sentences = putVirus(sentences);
    consoleInformation(sentences, players);
    setBarLength(getLengthBar(sentences.length));
    setText(sentences[0].text);
    document.addEventListener("click", function (e) {
      return handleClick(e, sentences);
    });
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
    title: "Selectionner",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "".concat((_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_6___default().container), " ").concat((_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_6___default().main)),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "title",
        children: title || ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: text || "Chargement..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_6___default().barContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_6___default().bar),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_6___default().barValue),
            style: {
              width: "".concat(barLength, "%"),
              backgroundColor: "#84FFB9"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 296,
    columnNumber: 3
  }, this);
}

_s(Play, "Sfh3AaHc2eXlcJivIHEr4g7u2x4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

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


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvcm91dGVyLmpzIl0sIm5hbWVzIjpbInJlZ2V4VG9GaW5kIiwic3RyaW5nVG9GaW5kIiwiZ2V0UmFuZG9tSW50IiwibWluIiwibWF4IiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInJhbmRvbSIsImNvbnNvbGVJbmZvcm1hdGlvbiIsInNlbnRlbmNlcyIsInBsYXllcnMiLCJjc3NTcXVhcmUiLCJjc3NTbWFsbCIsImNvbnNvbGUiLCJncm91cENvbGxhcHNlZCIsImxlbmd0aCIsImZvckVhY2giLCJwbGF5ZXIiLCJsb2ciLCJnZW5kZXIiLCJuYW1lIiwiZ3JvdXBFbmQiLCJmaWx0ZXIiLCJ4IiwidHlwZSIsInNlbnRlbmNlIiwiY3NzVGhlbWUiLCJ0aGVtZSIsInNlbnRlbmNlVHlwZSIsInNwYWNlVHlwZSIsInRleHQiLCJ0YWJsZSIsImZpbHRlclNlbnRlbmNlcyIsIm9wdGlvbnMiLCJuYkZlbWFsZSIsInJlZHVjZSIsImFjYyIsImN1ciIsIm5iR2VuZGVyIiwiZ2V0TmJFbHQiLCJyZWdleCIsIm1hdGNoIiwiZWx0IiwibmJFbHRGaW5kZWQiLCJuZXV0cmFsIiwibmJFbHRNYWxlRmluZGVkIiwibWFsZSIsIm5iRWx0RmVtYWxlRmluZGVkIiwiZmVtYWxlIiwiZW5vdWdoRWx0SG9tbWUiLCJlbm91Z2hFbHRGZW1tZSIsImVub3VnaFBsYXllciIsInRoZW1lcyIsImluY2x1ZGVzIiwiZ2V0TGVuZ3RoU2VudGVuY2VzIiwiZHVyYXRpb24iLCJzZWxlY3RTZW50ZW5jZXMiLCJzZW50ZW5jZXNTZWxlY3RlZCIsImxlbmd0aFNlbnRlbmNlcyIsIm5iU2VudGVuY2VzUGlja2VkIiwibmJWaXJ1c1BpY2tlZCIsImlkU2VudGVuY2VzUGlja2VkIiwidG90YWwiLCJuYlJhbmRvbVNlbnRlbmNlIiwicHVzaCIsInNlbnRlbmNlUGlja2VkIiwidmlydXMiLCJpbml0U2VudGVuY2VzIiwibWFwIiwicGxheWVyc05vdFBpY2tlZCIsInNsaWNlIiwiaW5pdFBsYXllcnMiLCJzdHJpbmdNYXRjaCIsImluZGV4T2YiLCJwbGF5ZXJUb1BpY2siLCJwbGF5ZXJQaWNrZWQiLCJzcGxpY2UiLCJyZXBsYWNlIiwiZGV0YWlscyIsInB1dFZpcnVzIiwibmV3U2VudGVuY2VzIiwiaSIsImluZGV4UmFuZFZpcnVzIiwic2VudGVuY2VWaXJ1cyIsIlBsYXkiLCJwcm9wcyIsImxvY2FsT3B0aW9ucyIsImxvY2FsUGxheWVycyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNldFRleHQiLCJ0aXRsZSIsInNldFRpdGxlIiwiYmFyTGVuZ3RoIiwic2V0QmFyTGVuZ3RoIiwiY3VycmVudFNlbnRlbmNlIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xpZW50WCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJnZXRMZW5ndGhCYXIiLCJzZW50ZW5jZXNMZW5ndGgiLCJ1c2VFZmZlY3QiLCJkYXRhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0eWxlcyIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsV0FBVyxHQUFHO0FBQ2pCLGFBQVcsVUFETTtBQUVqQixVQUFRLFdBRlM7QUFHakIsWUFBVTtBQUhPLENBQWxCO0FBS0EsSUFBSUMsWUFBWSxHQUFHO0FBQ2xCLGFBQVcsT0FETztBQUVsQixVQUFRLFFBRlU7QUFHbEIsWUFBVTtBQUhRLENBQW5CO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNDLFNBQVNDLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM3QkQs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RDtBQXFCQTs7R0F4RlFoQyxJO1VBT09TLGtEOzs7S0FQUFQsSTtBQTBGVCwrREFBZUEsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdUQSw2R0FBZ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGxheS44ZTRjNjIxNzBiYTVlYzAyMjc2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUGxheS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvc2VudGVuY2VzLmpzb24nO1xyXG5cclxubGV0IHJlZ2V4VG9GaW5kID0ge1xyXG5cdFwibmV1dHJhbFwiOiAvXFxbbm9tXFxdL2csXHJcblx0XCJtYWxlXCI6IC9cXFtub21NXFxdL2csXHJcblx0XCJmZW1hbGVcIjogL1xcW25vbUZcXF0vZyxcclxufTtcclxubGV0IHN0cmluZ1RvRmluZCA9IHtcclxuXHRcIm5ldXRyYWxcIjogXCJbbm9tXVwiLFxyXG5cdFwibWFsZVwiOiBcIltub21NXVwiLFxyXG5cdFwiZmVtYWxlXCI6IFwiW25vbUZdXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogUmVudm9pZSB1biBlbnRpZXIgYWzDqWF0b2lyZSBlbnRyZSBtaW4gZXQgbWF4IFttaW4sIG1heF1cclxuICogQHBhcmFtICB7bnVtYmVyfSBtaW4gbGEgdmFsZXVyIG1pbmltdW0gcXVlIHBldXQgYXR0ZWluZHJlIGwnZW50aWVyXHJcbiAqIEBwYXJhbSAge251bWJlcn0gbWF4IGxhIHZhbGV1ciBtYXhpbXVtIHF1ZSBwZXV0IGF0dGVpbmRyZSBsJ2VudGllclxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEwnZW50aWVyIHRpcsOpIGF1IGhhc2FyZFxyXG4gKi9cclxuIGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxyXG5cclxuY29uc3QgY29uc29sZUluZm9ybWF0aW9uID0gKHNlbnRlbmNlcywgcGxheWVycykgPT4ge1xyXG5cdGxldCBjc3NTcXVhcmUgPSBcInBhZGRpbmc6IDNweCA1cHg7IGJvcmRlci1yYWRpdXM6IDVweDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI7XHJcblx0bGV0IGNzc1NtYWxsID0gXCJmb250LXNpemU6IDEwcHg7XCI7XHJcblx0Y29uc29sZS5ncm91cENvbGxhcHNlZChgJWNKb3VldXJzICgke3BsYXllcnMubGVuZ3RofSlgLCBgJHtjc3NTcXVhcmV9IGNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7YCk7XHJcblx0cGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhgJWMke3BsYXllci5nZW5kZXJ9JWMgJHtwbGF5ZXIubmFtZX1gLFxyXG5cdFx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2AsXHJcblx0XHRcIlwiKTtcclxuXHR9KTtcclxuXHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0Y29uc29sZS5ncm91cENvbGxhcHNlZChgJWNQaHJhc2VzICgke3NlbnRlbmNlcy5sZW5ndGh9KSVjICVjKCR7c2VudGVuY2VzLmZpbHRlcih4ID0+IHgudHlwZSA9PSBcInZpcnVzXCIpLmxlbmd0aH0gdmlydXMpYCxcclxuXHRgJHtjc3NTcXVhcmV9IGNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7YCxcclxuXHRcIlwiLFxyXG5cdGAke2Nzc1NxdWFyZX0gY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7YCk7XHJcblx0c2VudGVuY2VzLmZvckVhY2goc2VudGVuY2UgPT4ge1xyXG5cdFx0bGV0IGNzc1RoZW1lID0gXCJcIjtcclxuXHRcdHN3aXRjaCAoc2VudGVuY2UudGhlbWUpIHtcclxuXHRcdFx0Y2FzZSBcInNwb3J0XCI6XHJcblx0XHRcdFx0Y3NzVGhlbWUgPSBcImNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImhvdFwiOlxyXG5cdFx0XHRcdGNzc1RoZW1lID0gXCJjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6ICNmZjM2YmY7XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0Y3NzVGhlbWUgPSBcImNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRsZXQgc2VudGVuY2VUeXBlID0gXCJcIjtcclxuXHRcdGxldCBzcGFjZVR5cGUgPSBcIlwiO1xyXG5cdFx0aWYgKHNlbnRlbmNlLnR5cGUgIT0gXCJub3JtYWxcIikge1xyXG5cdFx0XHRzZW50ZW5jZVR5cGUgPSBzZW50ZW5jZS50eXBlO1xyXG5cdFx0XHRzcGFjZVR5cGUgPSBcIiBcIjtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYCVjJHtzZW50ZW5jZVR5cGV9JWMke3NwYWNlVHlwZX0lYyR7c2VudGVuY2UudGhlbWV9JWMgJHtzZW50ZW5jZS50ZXh0fWAsXHJcblx0XHRgJHtjc3NTcXVhcmV9IGNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogcmVkOyAke2Nzc1NtYWxsfWAsXHJcblx0XHRgJHtjc3NTbWFsbH1gLFxyXG5cdFx0YCR7Y3NzU3F1YXJlfSAke2Nzc1RoZW1lfSAke2Nzc1NtYWxsfWAsXHJcblx0XHRgJHtjc3NTbWFsbH1gKTtcclxuXHRcdGNvbnNvbGUudGFibGUoc2VudGVuY2UpO1xyXG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdH0pO1xyXG5cdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzZW50ZW5jZXNcclxuICogQHBhcmFtIHtPYmplY3RbXX0gb3B0aW9ucyBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gcGxheWVycyBcclxuICogQHJldHVybnMge09iamVjdFtdfSBcclxuICovXHJcbmNvbnN0IGZpbHRlclNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgbmJGZW1hbGUgPSBwbGF5ZXJzLnJlZHVjZSgoYWNjLCBjdXIpID0+IGN1ci5nZW5kZXIgPT09IFwiRlwiID8gKythY2MgOiBhY2MsIDApO1xyXG5cdGxldCBuYkdlbmRlciA9IHtcclxuXHRcdFwiZmVtYWxlXCI6IG5iRmVtYWxlLFxyXG5cdFx0XCJtYWxlXCI6IHBsYXllcnMubGVuZ3RoIC0gbmJGZW1hbGVcclxuXHR9O1xyXG5cclxuXHQvL05vbWJyZSBkJ8OpbMOpbWVudCByZWdleCB0cm91dsOpIGRhbnMgbGEgcGhyYXNlXHJcblx0Y29uc3QgZ2V0TmJFbHQgPSAocmVnZXgsIHRleHQpID0+IHtcclxuXHRcdHJldHVybiAodGV4dC5tYXRjaChyZWdleCkgfHwgW10pLmxlbmd0aDtcclxuXHR9O1xyXG5cdFxyXG5cdHJldHVybiBzZW50ZW5jZXMuZmlsdGVyKChlbHQpID0+IHtcclxuXHRcdGxldCBuYkVsdEZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLm5ldXRyYWwsIGVsdC50ZXh0KTtcclxuXHRcdGxldCBuYkVsdE1hbGVGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5tYWxlLCBlbHQudGV4dCk7XHJcblx0XHRsZXQgbmJFbHRGZW1hbGVGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5mZW1hbGUsIGVsdC50ZXh0KTtcclxuXHRcdFxyXG5cdFx0Ly9PbiB2w6lyaWZpZSBzJ2lsIHkgYSBiaWVuLCBhdXRhbnQgb3UgcGx1cyBkZSBqb3VldXIgcXVlIGxhIHBocmFzZXMgZW4gbsOpY2Vzc2l0ZSAoZW4gZm9uY3Rpb24gZHUgc2V4ZSlcclxuXHRcdGxldCBlbm91Z2hFbHRIb21tZSA9IG5iR2VuZGVyLm1hbGUgPj0gbmJFbHRNYWxlRmluZGVkO1xyXG5cdFx0bGV0IGVub3VnaEVsdEZlbW1lID0gbmJHZW5kZXIuZmVtYWxlID49IG5iRWx0RmVtYWxlRmluZGVkO1xyXG5cdFx0bGV0IGVub3VnaFBsYXllciA9IHBsYXllcnMubGVuZ3RoID49IChuYkVsdEZpbmRlZCArIG5iRWx0TWFsZUZpbmRlZCArIG5iRWx0RmVtYWxlRmluZGVkKTtcclxuXHJcblx0XHRyZXR1cm4gb3B0aW9ucy50aGVtZXMuaW5jbHVkZXMoZWx0LnRoZW1lKSAmJiBlbm91Z2hFbHRIb21tZSAmJiBlbm91Z2hFbHRGZW1tZSAmJiBlbm91Z2hQbGF5ZXI7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW52b2llIGxlIG5vbWJyZSBkZSBwaHJhc2VzIMOgIGFmZmljaGVyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBcclxuICogQHJldHVybnMge251bWJlcn0gTm9tYnJlIGRlIHBocmFzZXNcclxuICovXHJcbmNvbnN0IGdldExlbmd0aFNlbnRlbmNlcyA9IChkdXJhdGlvbikgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRcInRvdGFsXCI6IDIwICsgMTUqZHVyYXRpb24sXHJcblx0XHRcInZpcnVzXCI6IDIgKyAyKmR1cmF0aW9uXHJcblx0fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzZW50ZW5jZXMgXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IG9wdGlvbnMgXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IHBsYXllcnMgXHJcbiAqIEByZXR1cm5zIHtPYmplY3RbXX1cclxuICovXHJcbmNvbnN0IHNlbGVjdFNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgc2VudGVuY2VzU2VsZWN0ZWQgPSBbXTtcclxuXHRsZXQgbGVuZ3RoU2VudGVuY2VzID0gZ2V0TGVuZ3RoU2VudGVuY2VzKG9wdGlvbnMuZHVyYXRpb24pO1xyXG5cdFxyXG5cdGxldCBuYlNlbnRlbmNlc1BpY2tlZCA9IDA7XHJcbiAgICBsZXQgbmJWaXJ1c1BpY2tlZCA9IDA7XHJcblx0bGV0IGlkU2VudGVuY2VzUGlja2VkID0gW107XHJcblxyXG5cdHdoaWxlIChuYlNlbnRlbmNlc1BpY2tlZCA8IGxlbmd0aFNlbnRlbmNlcy50b3RhbCAmJiBpZFNlbnRlbmNlc1BpY2tlZC5sZW5ndGggPCBzZW50ZW5jZXMubGVuZ3RoKSB7XHJcblx0XHQvL09uIGNob2lzaXQgdW4gbnVtw6lybyBhdSBoYXNhcmRcclxuXHRcdGxldCBuYlJhbmRvbVNlbnRlbmNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnNlbnRlbmNlcy5sZW5ndGgpO1xyXG5cdFx0aWYgKCFpZFNlbnRlbmNlc1BpY2tlZC5pbmNsdWRlcyhuYlJhbmRvbVNlbnRlbmNlKSkge1xyXG5cdFx0XHRpZFNlbnRlbmNlc1BpY2tlZC5wdXNoKG5iUmFuZG9tU2VudGVuY2UpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHNlbnRlbmNlUGlja2VkID0gc2VudGVuY2VzW25iUmFuZG9tU2VudGVuY2VdO1xyXG5cclxuXHRcdFx0aWYgKHNlbnRlbmNlUGlja2VkLnR5cGUgPT0gXCJ2aXJ1c1wiKSB7XHJcblx0XHRcdFx0aWYgKG5iVmlydXNQaWNrZWQgPCBsZW5ndGhTZW50ZW5jZXMudmlydXMpIHtcclxuXHRcdFx0XHRcdHNlbnRlbmNlc1NlbGVjdGVkLnB1c2goc2VudGVuY2VQaWNrZWQpO1xyXG5cdFx0XHRcdFx0bmJTZW50ZW5jZXNQaWNrZWQrKztcclxuXHRcdFx0XHRcdG5iVmlydXNQaWNrZWQrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0c2VudGVuY2VzU2VsZWN0ZWQucHVzaChzZW50ZW5jZVBpY2tlZCk7XHJcblx0XHRcdFx0bmJTZW50ZW5jZXNQaWNrZWQrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNlbnRlbmNlc1NlbGVjdGVkO1xyXG59XHJcblxyXG5jb25zdCBpbml0U2VudGVuY2VzID0gKHNlbnRlbmNlcywgb3B0aW9ucywgcGxheWVycykgPT4ge1xyXG5cdHJldHVybiBzZW50ZW5jZXMubWFwKChzZW50ZW5jZSkgPT4ge1xyXG5cdFx0Ly9GYWl0IHVuZSBjb3BpZSBkZXMgam91ZXVyc1xyXG5cdFx0bGV0IHBsYXllcnNOb3RQaWNrZWQgPSBwbGF5ZXJzLnNsaWNlKCk7XHJcblxyXG5cdFx0Y29uc3QgaW5pdFBsYXllcnMgPSAoc3RyaW5nTWF0Y2gpID0+IHtcclxuXHRcdFx0d2hpbGUgKHNlbnRlbmNlLnRleHQuaW5kZXhPZihzdHJpbmdNYXRjaCkgPiAtMSkge1xyXG5cdFx0XHRcdC8vQ2hvaXNpdCBwYXJtaXMgcXVlbCB0eXBlIGRlIGpvdWV1ciBvbiBwZXV0IHRpcmVyXHJcblx0XHRcdFx0bGV0IHBsYXllclRvUGljaztcclxuXHRcdFx0XHRzd2l0Y2ggKHN0cmluZ01hdGNoKSB7XHJcblx0XHRcdFx0XHRjYXNlIHN0cmluZ1RvRmluZC5mZW1hbGU6XHJcblx0XHRcdFx0XHRcdHBsYXllclRvUGljayA9IHBsYXllcnNOb3RQaWNrZWQuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIuZ2VuZGVyID09IFwiRlwiKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIHN0cmluZ1RvRmluZC5tYWxlOlxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJUb1BpY2sgPSBwbGF5ZXJzTm90UGlja2VkLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLmdlbmRlciA9PSBcIk1cIik7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0cGxheWVyVG9QaWNrID0gcGxheWVyc05vdFBpY2tlZDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vQ2hvaXNpdCB1biBqb3VldXIgYXUgaGFzYXJkXHJcblx0XHRcdFx0bGV0IHBsYXllclBpY2tlZCA9IHBsYXllclRvUGlja1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcGxheWVyVG9QaWNrLmxlbmd0aCldO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vUmV0aXJlIGNlIGpvdWV1ciBkZSBsYSBsaXN0ZSBkZXMgam91ZXVycyBub24gcHJpc1xyXG5cdFx0XHRcdHBsYXllcnNOb3RQaWNrZWQuc3BsaWNlKHBsYXllcnNOb3RQaWNrZWQuaW5kZXhPZihwbGF5ZXJQaWNrZWQpLCAxKTtcclxuXHJcblx0XHRcdFx0Ly9SZW1wbGFjZSBsJ8OpbMOpbWVudCBwYXIgbGUgbm9tIGR1IGpvdWV1clxyXG5cdFx0XHRcdHNlbnRlbmNlLnRleHQgPSBzZW50ZW5jZS50ZXh0LnJlcGxhY2Uoc3RyaW5nTWF0Y2gsIHBsYXllclBpY2tlZC5uYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1NpIGxhIHBocmFzZSBlc3QgdW4gdmlydXMgZXQgcXUnb24gdHJvdXZlIHVuIMOpbMOpbWVudCBkYW5zIGxlcyBkZXRhaWxzXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VudGVuY2UudHlwZSA9PSBcInZpcnVzXCIgJiYgc2VudGVuY2UuZGV0YWlscy5pbmRleE9mKHN0cmluZ01hdGNoKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGFjZSBsZSBlbHRUb0ZpbmQgcGFyIGxlIG5vbSBkdSBqb3VldXIgKGxlIG3Dqm1lIHF1ZSBsZSB0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbnRlbmNlLmRldGFpbHMgPSBzZW50ZW5jZS5kZXRhaWxzLnJlcGxhY2Uoc3RyaW5nTWF0Y2gsIHBsYXllclBpY2tlZC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpbml0UGxheWVycyhzdHJpbmdUb0ZpbmQubmV1dHJhbCk7XHJcblx0XHRpbml0UGxheWVycyhzdHJpbmdUb0ZpbmQubWFsZSk7XHJcblx0XHRpbml0UGxheWVycyhzdHJpbmdUb0ZpbmQuZmVtYWxlKTtcclxuXHJcblx0XHRyZXR1cm4gc2VudGVuY2U7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQbGFjZSBsZXMgdmlydXMgZW4gdGFudCBxdWUgcGhyYXNlXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IHNlbnRlbmNlcyBUYWJsZWF1IGRlcyBwaHJhc2VzIHJldGVudWVzXHJcbiAqL1xyXG4gY29uc3QgcHV0VmlydXMgPSAoc2VudGVuY2VzKSA9PiB7XHJcblx0bGV0IG5ld1NlbnRlbmNlcyA9IHNlbnRlbmNlcy5zbGljZSgpO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHNlbnRlbmNlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKHNlbnRlbmNlc1tpXS50eXBlID09IFwidmlydXNcIikge1xyXG5cdFx0XHRjb25zdCBpbmRleFJhbmRWaXJ1cyA9IGdldFJhbmRvbUludCgzLCA2KTsgLy9UT0RPIDogZGlmZmVyZW50IHZpcnVzIGxlbmd0aCAoZGlmZmljdWx0eSlcclxuXHRcdFx0Y29uc3Qgc2VudGVuY2VWaXJ1cyA9IHtcclxuXHRcdFx0XHRcInRleHRcIjogc2VudGVuY2VzW2ldLmRldGFpbHMsXHJcblx0XHRcdFx0XCJ0aGVtZVwiOiBzZW50ZW5jZXNbaV0udGhlbWUsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidmlydXNFbmRcIixcclxuXHRcdFx0fTtcclxuXHRcdFx0bmV3U2VudGVuY2VzLnNwbGljZShpK2luZGV4UmFuZFZpcnVzLCAwLCBzZW50ZW5jZVZpcnVzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBuZXdTZW50ZW5jZXM7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBQbGF5KHByb3BzKSB7XHJcblx0bGV0IGxvY2FsT3B0aW9ucyA9IG51bGw7XHJcblx0bGV0IGxvY2FsUGxheWVycyA9IG51bGw7XHJcblx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdFx0bG9jYWxPcHRpb25zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9wdGlvbnNcIikpO1xyXG5cdFx0bG9jYWxQbGF5ZXJzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllcnNcIikpO1xyXG5cdH1cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtwbGF5ZXJzXSA9IHVzZVN0YXRlKGxvY2FsUGxheWVycyk7XHJcblx0Y29uc3QgW29wdGlvbnNdID0gdXNlU3RhdGUobG9jYWxPcHRpb25zKTtcclxuXHRjb25zdCBbYmFyTGVuZ3RoLCBzZXRCYXJMZW5ndGhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRTZW50ZW5jZSA9IDA7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50LCBzZW50ZW5jZXMpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQvL0NsaXF1ZSDDoCBnYXVjaGVcclxuXHRcdGlmIChldmVudC5jbGllbnRYIDwgd2luZG93LmlubmVyV2lkdGggLyAyKSB7XHJcblx0XHRcdGlmIChjdXJyZW50U2VudGVuY2UgPiAwKSB7XHJcblx0XHRcdFx0Y3VycmVudFNlbnRlbmNlLS07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vQ2xpcXVlIMOgIGRyb2l0ZVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlmIChjdXJyZW50U2VudGVuY2UgPCBzZW50ZW5jZXMubGVuZ3RoLTEpIHtcclxuXHRcdFx0XHRjdXJyZW50U2VudGVuY2UrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRyb3V0ZXIucHVzaCgnL3BsYXknKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0c2V0VGV4dChzZW50ZW5jZXNbY3VycmVudFNlbnRlbmNlXS50ZXh0KTtcclxuXHRcdHNldEJhckxlbmd0aChnZXRMZW5ndGhCYXIoc2VudGVuY2VzLmxlbmd0aCkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdldExlbmd0aEJhciA9IChzZW50ZW5jZXNMZW5ndGgpID0+IHtcclxuXHRcdHJldHVybiAoY3VycmVudFNlbnRlbmNlKzEpKjEwMCAvIHNlbnRlbmNlc0xlbmd0aDtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGV0IHNlbnRlbmNlcyA9IGZpbHRlclNlbnRlbmNlcyhkYXRhLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IHNlbGVjdFNlbnRlbmNlcyhzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpO1xyXG5cdFx0c2VudGVuY2VzID0gaW5pdFNlbnRlbmNlcyhzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpO1xyXG5cdFx0c2VudGVuY2VzID0gcHV0VmlydXMoc2VudGVuY2VzKTtcclxuXHRcdGNvbnNvbGVJbmZvcm1hdGlvbihzZW50ZW5jZXMsIHBsYXllcnMpO1xyXG5cclxuXHRcdHNldEJhckxlbmd0aChnZXRMZW5ndGhCYXIoc2VudGVuY2VzLmxlbmd0aCkpO1xyXG5cdFx0c2V0VGV4dChzZW50ZW5jZXNbMF0udGV4dCk7XHJcblx0XHRcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gaGFuZGxlQ2xpY2soZSwgc2VudGVuY2VzKSk7XHJcblxyXG4gICAgICAgIC8qbGV0IG5SYW5kb21TZW50ZW5jZXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpO1xyXG5cdFx0c2V0VGV4dChkYXRhW25SYW5kb21TZW50ZW5jZXNdLnRleHQpOyovXHJcblxyXG5cdFx0Ly8gVE9ETyA6IChpZMOpZSBlbiB0cyA9PiBGYWlyZSByZWR1Y2VyIGV0IGludGVyZmFjZSBwb3VyIGxlcyBwaHJhc2VzIGR1IGpzb24gOiBodHRwczovL3lvdXR1LmJlL1o1aVdyNlNyc2o4P3Q9OTE4KVxyXG5cdFx0Ly8gKEZhaXJlIGRlcyBmb25jdGlvbnMgKGVuIGRlaG9ycyBkdSBjb21wb3NhbnRzIHBvdXIgcXVlIMOnYSBzb2l0IGNsZWFuIChqdXN0ZSBhdSBkZXNzdXMgbMOgKSkpXHJcblx0XHQvLyAtIEZpbHRyZXIgbGUganNvbiBkYXRhIHBvdXIgbmUgcHJlbmRyZSBxdWUgbGVzIHBocmFzZXMgcXVpIHJlc3BlY3RlbnQgbGVzIG9wdGlvbnMgKHRow6htZXMuLi4pXHJcblx0XHQvLyAtIEZhaXJlIGxlIHRhYmxlYXUgZGUgcGhyYXNlcyAodW5lIGNlcnRhaW5lIGxvbmd1ZXVyIGVuIGZvbmN0aW9uIGRlIGxhIGxvbmd1ZXVyIGVuIG9wdGlvbilcclxuXHRcdC8vIC0gUmVtcGxhY2VyIGxlcyBub21zIGRhbnMgbGVzIHBocmFzZXMgKHRpcmVyIGxlcyBub21zIGF1IGhhc2FyZCB0b3V0IMOnYSB0b3V0IMOnYSlcclxuXHRcdC8vIC0gTWV0dHJlIGxlcyB2aXJ1cyBxdWVscXVlIHBhcnRcclxuXHRcdC8vIC0gTWV0dHJlIGxhIGNvbnPDqXF1ZW5jZSBqdXN0ZSBhcHLDqHMgcG91ciBsZXMgY2hvaXhcclxuXHRcdC8vXHJcblx0XHQvLyAtIFBvdXIgbGVzIGNob2l4LCBjZSBzZXJhIGRhbnMgbGUgamV1IGRlIHJlbXBsYWNlciBsZSBub20gZGVzIGTDqXRhaWxzIGRvbmMgcGFzIGRhbnMgY2V0dGUgZm9uY3Rpb25cclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0IHRpdGxlPVwiU2VsZWN0aW9ubmVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke3N0eWxlcy5tYWlufWB9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdHt0aXRsZSB8fCBcIlwifVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0e3RleHQgfHwgXCJDaGFyZ2VtZW50Li4uXCJ9XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyQ29udGFpbmVyfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyfT5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmJhclZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7d2lkdGg6IGAke2Jhckxlbmd0aH0lYCwgYmFja2dyb3VuZENvbG9yOiBcIiM4NEZGQjlcIn19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==