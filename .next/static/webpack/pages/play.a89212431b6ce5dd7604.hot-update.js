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
/* harmony import */ var _data_sentences_test_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/sentences_test.json */ "./data/sentences_test.json");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\wamp64\\www\\jeuGuyV2\\Application\\jeuguy\\pages\\play.js",
    _s = $RefreshSig$();








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

var regexToFind = {
  "neutral": /\[nom\]/g,
  "male": /\[nomM\]/g,
  "female": /\[nomF\]/g,
  "gorgees": /\[g[0-3]\]/g
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
/**
 * 
 * @param {number} difficulty 
 * @returns {number}
 */


var getAmount = function getAmount(difficulty) {
  return [["2 gorgées", "3 gorgées", "4 gorgées", "6 gorgées"], ["3 gorgées", "4 gorgées", "6 gorgées", "9 gorgées"], ["4 gorgées", "6 gorgées", "8 gorgées", "1 cul sec"]][difficulty];
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
  var amount = getAmount(options.difficulty);
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
    var gorgeesFinded = sentence.text.match(regexToFind.gorgees) || [];
    gorgeesFinded.forEach(function (elt) {
      var amountIndex = amount[parseInt(elt.charAt(2))];
      console.warn({
        "sentence": sentence.text,
        "test": amountIndex
      });
      sentence.text.replaceAll(elt, amountIndex);
    });
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

function Play() {
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
          router.reload('/play');
        }
      }

    setText(sentences[currentSentence].text);
    setBarLength(getLengthBar(sentences.length));
  };

  var getLengthBar = function getLengthBar(sentencesLength) {
    return currentSentence * 100 / sentencesLength;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var sentences = filterSentences(_data_sentences_test_json__WEBPACK_IMPORTED_MODULE_5__, options, players);
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/select/players",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: (_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_6___default().quitBtn)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "title",
        children: title || ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: text || "Chargement..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
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
            lineNumber: 332,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 319,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlSW5mb3JtYXRpb24iLCJzZW50ZW5jZXMiLCJwbGF5ZXJzIiwiY3NzU3F1YXJlIiwiY3NzU21hbGwiLCJjb25zb2xlIiwiZ3JvdXBDb2xsYXBzZWQiLCJsZW5ndGgiLCJmb3JFYWNoIiwicGxheWVyIiwibG9nIiwiZ2VuZGVyIiwibmFtZSIsImdyb3VwRW5kIiwiZmlsdGVyIiwieCIsInR5cGUiLCJzZW50ZW5jZSIsImNzc1RoZW1lIiwidGhlbWUiLCJzZW50ZW5jZVR5cGUiLCJzcGFjZVR5cGUiLCJ0ZXh0IiwidGFibGUiLCJyZWdleFRvRmluZCIsInN0cmluZ1RvRmluZCIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRBbW91bnQiLCJkaWZmaWN1bHR5IiwiZ2V0TGVuZ3RoU2VudGVuY2VzIiwiZHVyYXRpb24iLCJmaWx0ZXJTZW50ZW5jZXMiLCJvcHRpb25zIiwibmJGZW1hbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJuYkdlbmRlciIsImdldE5iRWx0IiwicmVnZXgiLCJtYXRjaCIsImVsdCIsIm5iRWx0RmluZGVkIiwibmV1dHJhbCIsIm5iRWx0TWFsZUZpbmRlZCIsIm1hbGUiLCJuYkVsdEZlbWFsZUZpbmRlZCIsImZlbWFsZSIsImVub3VnaEVsdEhvbW1lIiwiZW5vdWdoRWx0RmVtbWUiLCJlbm91Z2hQbGF5ZXIiLCJ0aGVtZXMiLCJpbmNsdWRlcyIsInNlbGVjdFNlbnRlbmNlcyIsInNlbnRlbmNlc1NlbGVjdGVkIiwibGVuZ3RoU2VudGVuY2VzIiwibmJTZW50ZW5jZXNQaWNrZWQiLCJuYlZpcnVzUGlja2VkIiwiaWRTZW50ZW5jZXNQaWNrZWQiLCJ0b3RhbCIsIm5iUmFuZG9tU2VudGVuY2UiLCJwdXNoIiwic2VudGVuY2VQaWNrZWQiLCJ2aXJ1cyIsImluaXRTZW50ZW5jZXMiLCJhbW91bnQiLCJtYXAiLCJwbGF5ZXJzTm90UGlja2VkIiwic2xpY2UiLCJpbml0UGxheWVycyIsInN0cmluZ01hdGNoIiwiaW5kZXhPZiIsInBsYXllclRvUGljayIsInBsYXllclBpY2tlZCIsInNwbGljZSIsInJlcGxhY2UiLCJkZXRhaWxzIiwiZ29yZ2Vlc0ZpbmRlZCIsImdvcmdlZXMiLCJhbW91bnRJbmRleCIsInBhcnNlSW50IiwiY2hhckF0Iiwid2FybiIsInJlcGxhY2VBbGwiLCJwdXRWaXJ1cyIsIm5ld1NlbnRlbmNlcyIsImkiLCJpbmRleFJhbmRWaXJ1cyIsInNlbnRlbmNlVmlydXMiLCJQbGF5IiwibG9jYWxPcHRpb25zIiwibG9jYWxQbGF5ZXJzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwic2V0VGV4dCIsInRpdGxlIiwic2V0VGl0bGUiLCJiYXJMZW5ndGgiLCJzZXRCYXJMZW5ndGgiLCJjdXJyZW50U2VudGVuY2UiLCJoYW5kbGVDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjbGllbnRYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInJlbG9hZCIsImdldExlbmd0aEJhciIsInNlbnRlbmNlc0xlbmd0aCIsInVzZUVmZmVjdCIsImRhdGEiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3R5bGVzIiwicXVpdEJ0biIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsU0FBRCxFQUFZQyxPQUFaLEVBQXdCO0FBQ2xELE1BQUlDLFNBQVMsR0FBRywwREFBaEI7QUFDQSxNQUFJQyxRQUFRLEdBQUcsa0JBQWY7QUFDQUMsU0FBTyxDQUFDQyxjQUFSLHNCQUFxQ0osT0FBTyxD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O0FBQUE7QUFBQTtBQUFBLFVBREQ7QUF3QkE7O0dBM0ZRakMsSTtVQU9PUSxrRDs7O0tBUFBSLEk7QUE2RlQsK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGxheS5hODkyMTI0MzFiNmNlNWRkNzYwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUGxheS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvc2VudGVuY2VzX3Rlc3QuanNvbic7XHJcblxyXG5jb25zdCBjb25zb2xlSW5mb3JtYXRpb24gPSAoc2VudGVuY2VzLCBwbGF5ZXJzKSA9PiB7XHJcblx0bGV0IGNzc1NxdWFyZSA9IFwicGFkZGluZzogM3B4IDVweDsgYm9yZGVyLXJhZGl1czogNXB4OyBmb250LXdlaWdodDogYm9sZDtcIjtcclxuXHRsZXQgY3NzU21hbGwgPSBcImZvbnQtc2l6ZTogMTBweDtcIjtcclxuXHRjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGAlY0pvdWV1cnMgKCR7cGxheWVycy5sZW5ndGh9KWAsIGAke2Nzc1NxdWFyZX0gY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtgKTtcclxuXHRwbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGAlYyR7cGxheWVyLmdlbmRlcn0lYyAke3BsYXllci5uYW1lfWAsXHJcblx0XHRgJHtjc3NTcXVhcmV9IGNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7YCxcclxuXHRcdFwiXCIpO1xyXG5cdH0pO1xyXG5cdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHRjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGAlY1BocmFzZXMgKCR7c2VudGVuY2VzLmxlbmd0aH0pJWMgJWMoJHtzZW50ZW5jZXMuZmlsdGVyKHggPT4geC50eXBlID09IFwidmlydXNcIikubGVuZ3RofSB2aXJ1cylgLFxyXG5cdGAke2Nzc1NxdWFyZX0gY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtgLFxyXG5cdFwiXCIsXHJcblx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IHJlZDtgKTtcclxuXHRzZW50ZW5jZXMuZm9yRWFjaChzZW50ZW5jZSA9PiB7XHJcblx0XHRsZXQgY3NzVGhlbWUgPSBcIlwiO1xyXG5cdFx0c3dpdGNoIChzZW50ZW5jZS50aGVtZSkge1xyXG5cdFx0XHRjYXNlIFwic3BvcnRcIjpcclxuXHRcdFx0XHRjc3NUaGVtZSA9IFwiY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiaG90XCI6XHJcblx0XHRcdFx0Y3NzVGhlbWUgPSBcImNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzZiZjtcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRjc3NUaGVtZSA9IFwiY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGxldCBzZW50ZW5jZVR5cGUgPSBcIlwiO1xyXG5cdFx0bGV0IHNwYWNlVHlwZSA9IFwiXCI7XHJcblx0XHRpZiAoc2VudGVuY2UudHlwZSAhPSBcIm5vcm1hbFwiKSB7XHJcblx0XHRcdHNlbnRlbmNlVHlwZSA9IHNlbnRlbmNlLnR5cGU7XHJcblx0XHRcdHNwYWNlVHlwZSA9IFwiIFwiO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5ncm91cENvbGxhcHNlZChgJWMke3NlbnRlbmNlVHlwZX0lYyR7c3BhY2VUeXBlfSVjJHtzZW50ZW5jZS50aGVtZX0lYyAke3NlbnRlbmNlLnRleHR9YCxcclxuXHRcdGAke2Nzc1NxdWFyZX0gY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICR7Y3NzU21hbGx9YCxcclxuXHRcdGAke2Nzc1NtYWxsfWAsXHJcblx0XHRgJHtjc3NTcXVhcmV9ICR7Y3NzVGhlbWV9ICR7Y3NzU21hbGx9YCxcclxuXHRcdGAke2Nzc1NtYWxsfWApO1xyXG5cdFx0Y29uc29sZS50YWJsZShzZW50ZW5jZSk7XHJcblx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0fSk7XHJcblx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcblxyXG5cclxubGV0IHJlZ2V4VG9GaW5kID0ge1xyXG5cdFwibmV1dHJhbFwiOiAvXFxbbm9tXFxdL2csXHJcblx0XCJtYWxlXCI6IC9cXFtub21NXFxdL2csXHJcblx0XCJmZW1hbGVcIjogL1xcW25vbUZcXF0vZyxcclxuXHRcImdvcmdlZXNcIjogL1xcW2dbMC0zXVxcXS9nLFxyXG59O1xyXG5sZXQgc3RyaW5nVG9GaW5kID0ge1xyXG5cdFwibmV1dHJhbFwiOiBcIltub21dXCIsXHJcblx0XCJtYWxlXCI6IFwiW25vbU1dXCIsXHJcblx0XCJmZW1hbGVcIjogXCJbbm9tRl1cIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW52b2llIHVuIGVudGllciBhbMOpYXRvaXJlIGVudHJlIG1pbiBldCBtYXggW21pbiwgbWF4XVxyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pbiBsYSB2YWxldXIgbWluaW11bSBxdWUgcGV1dCBhdHRlaW5kcmUgbCdlbnRpZXJcclxuICogQHBhcmFtICB7bnVtYmVyfSBtYXggbGEgdmFsZXVyIG1heGltdW0gcXVlIHBldXQgYXR0ZWluZHJlIGwnZW50aWVyXHJcbiAqIEByZXR1cm4ge251bWJlcn0gTCdlbnRpZXIgdGlyw6kgYXUgaGFzYXJkXHJcbiAqL1xyXG4gZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcclxuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkaWZmaWN1bHR5IFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuIGNvbnN0IGdldEFtb3VudCA9IChkaWZmaWN1bHR5KSA9PiB7XHJcblx0cmV0dXJuIFtcclxuXHRcdFtcIjIgZ29yZ8OpZXNcIiwgXCIzIGdvcmfDqWVzXCIsIFwiNCBnb3Jnw6llc1wiLCBcIjYgZ29yZ8OpZXNcIl0sXHJcblx0XHRbXCIzIGdvcmfDqWVzXCIsIFwiNCBnb3Jnw6llc1wiLCBcIjYgZ29yZ8OpZXNcIiwgXCI5IGdvcmfDqWVzXCJdLFxyXG5cdFx0W1wiNCBnb3Jnw6llc1wiLCBcIjYgZ29yZ8OpZXNcIiwgXCI4IGdvcmfDqWVzXCIsIFwiMSBjdWwgc2VjXCJdLFxyXG5cdF1bZGlmZmljdWx0eV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW52b2llIGxlIG5vbWJyZSBkZSBwaHJhc2VzIMOgIGFmZmljaGVyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBcclxuICogQHJldHVybnMge251bWJlcn0gTm9tYnJlIGRlIHBocmFzZXNcclxuICovXHJcbmNvbnN0IGdldExlbmd0aFNlbnRlbmNlcyA9IChkdXJhdGlvbikgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRcInRvdGFsXCI6IDIwICsgMTUqZHVyYXRpb24sXHJcblx0XHRcInZpcnVzXCI6IDIgKyAyKmR1cmF0aW9uXHJcblx0fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzZW50ZW5jZXNcclxuICogQHBhcmFtIHtPYmplY3RbXX0gb3B0aW9ucyBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gcGxheWVycyBcclxuICogQHJldHVybnMge09iamVjdFtdfSBcclxuICovXHJcbmNvbnN0IGZpbHRlclNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgbmJGZW1hbGUgPSBwbGF5ZXJzLnJlZHVjZSgoYWNjLCBjdXIpID0+IGN1ci5nZW5kZXIgPT09IFwiRlwiID8gKythY2MgOiBhY2MsIDApO1xyXG5cdGxldCBuYkdlbmRlciA9IHtcclxuXHRcdFwiZmVtYWxlXCI6IG5iRmVtYWxlLFxyXG5cdFx0XCJtYWxlXCI6IHBsYXllcnMubGVuZ3RoIC0gbmJGZW1hbGVcclxuXHR9O1xyXG5cclxuXHQvL05vbWJyZSBkJ8OpbMOpbWVudCByZWdleCB0cm91dsOpIGRhbnMgbGEgcGhyYXNlXHJcblx0Y29uc3QgZ2V0TmJFbHQgPSAocmVnZXgsIHRleHQpID0+IHtcclxuXHRcdHJldHVybiAodGV4dC5tYXRjaChyZWdleCkgfHwgW10pLmxlbmd0aDtcclxuXHR9O1xyXG5cdFxyXG5cdHJldHVybiBzZW50ZW5jZXMuZmlsdGVyKChlbHQpID0+IHtcclxuXHRcdGxldCBuYkVsdEZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLm5ldXRyYWwsIGVsdC50ZXh0KTtcclxuXHRcdGxldCBuYkVsdE1hbGVGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5tYWxlLCBlbHQudGV4dCk7XHJcblx0XHRsZXQgbmJFbHRGZW1hbGVGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5mZW1hbGUsIGVsdC50ZXh0KTtcclxuXHRcdFxyXG5cdFx0Ly9PbiB2w6lyaWZpZSBzJ2lsIHkgYSBiaWVuLCBhdXRhbnQgb3UgcGx1cyBkZSBqb3VldXIgcXVlIGxhIHBocmFzZXMgZW4gbsOpY2Vzc2l0ZSAoZW4gZm9uY3Rpb24gZHUgc2V4ZSlcclxuXHRcdGxldCBlbm91Z2hFbHRIb21tZSA9IG5iR2VuZGVyLm1hbGUgPj0gbmJFbHRNYWxlRmluZGVkO1xyXG5cdFx0bGV0IGVub3VnaEVsdEZlbW1lID0gbmJHZW5kZXIuZmVtYWxlID49IG5iRWx0RmVtYWxlRmluZGVkO1xyXG5cdFx0bGV0IGVub3VnaFBsYXllciA9IHBsYXllcnMubGVuZ3RoID49IChuYkVsdEZpbmRlZCArIG5iRWx0TWFsZUZpbmRlZCArIG5iRWx0RmVtYWxlRmluZGVkKTtcclxuXHJcblx0XHRyZXR1cm4gb3B0aW9ucy50aGVtZXMuaW5jbHVkZXMoZWx0LnRoZW1lKSAmJiBlbm91Z2hFbHRIb21tZSAmJiBlbm91Z2hFbHRGZW1tZSAmJiBlbm91Z2hQbGF5ZXI7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gc2VudGVuY2VzIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBvcHRpb25zIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBwbGF5ZXJzIFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0W119XHJcbiAqL1xyXG5jb25zdCBzZWxlY3RTZW50ZW5jZXMgPSAoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKSA9PiB7XHJcblx0bGV0IHNlbnRlbmNlc1NlbGVjdGVkID0gW107XHJcblx0bGV0IGxlbmd0aFNlbnRlbmNlcyA9IGdldExlbmd0aFNlbnRlbmNlcyhvcHRpb25zLmR1cmF0aW9uKTtcclxuXHRcclxuXHRsZXQgbmJTZW50ZW5jZXNQaWNrZWQgPSAwO1xyXG4gICAgbGV0IG5iVmlydXNQaWNrZWQgPSAwO1xyXG5cdGxldCBpZFNlbnRlbmNlc1BpY2tlZCA9IFtdO1xyXG5cclxuXHR3aGlsZSAobmJTZW50ZW5jZXNQaWNrZWQgPCBsZW5ndGhTZW50ZW5jZXMudG90YWwgJiYgaWRTZW50ZW5jZXNQaWNrZWQubGVuZ3RoIDwgc2VudGVuY2VzLmxlbmd0aCkge1xyXG5cdFx0Ly9PbiBjaG9pc2l0IHVuIG51bcOpcm8gYXUgaGFzYXJkXHJcblx0XHRsZXQgbmJSYW5kb21TZW50ZW5jZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpzZW50ZW5jZXMubGVuZ3RoKTtcclxuXHRcdGlmICghaWRTZW50ZW5jZXNQaWNrZWQuaW5jbHVkZXMobmJSYW5kb21TZW50ZW5jZSkpIHtcclxuXHRcdFx0aWRTZW50ZW5jZXNQaWNrZWQucHVzaChuYlJhbmRvbVNlbnRlbmNlKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBzZW50ZW5jZVBpY2tlZCA9IHNlbnRlbmNlc1tuYlJhbmRvbVNlbnRlbmNlXTtcclxuXHJcblx0XHRcdGlmIChzZW50ZW5jZVBpY2tlZC50eXBlID09IFwidmlydXNcIikge1xyXG5cdFx0XHRcdGlmIChuYlZpcnVzUGlja2VkIDwgbGVuZ3RoU2VudGVuY2VzLnZpcnVzKSB7XHJcblx0XHRcdFx0XHRzZW50ZW5jZXNTZWxlY3RlZC5wdXNoKHNlbnRlbmNlUGlja2VkKTtcclxuXHRcdFx0XHRcdG5iU2VudGVuY2VzUGlja2VkKys7XHJcblx0XHRcdFx0XHRuYlZpcnVzUGlja2VkKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHNlbnRlbmNlc1NlbGVjdGVkLnB1c2goc2VudGVuY2VQaWNrZWQpO1xyXG5cdFx0XHRcdG5iU2VudGVuY2VzUGlja2VkKys7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBzZW50ZW5jZXNTZWxlY3RlZDtcclxufVxyXG5cclxuY29uc3QgaW5pdFNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgYW1vdW50ID0gZ2V0QW1vdW50KG9wdGlvbnMuZGlmZmljdWx0eSk7XHJcblx0cmV0dXJuIHNlbnRlbmNlcy5tYXAoKHNlbnRlbmNlKSA9PiB7XHJcblx0XHQvL0ZhaXQgdW5lIGNvcGllIGRlcyBqb3VldXJzXHJcblx0XHRsZXQgcGxheWVyc05vdFBpY2tlZCA9IHBsYXllcnMuc2xpY2UoKTtcclxuXHJcblx0XHRjb25zdCBpbml0UGxheWVycyA9IChzdHJpbmdNYXRjaCkgPT4ge1xyXG5cdFx0XHR3aGlsZSAoc2VudGVuY2UudGV4dC5pbmRleE9mKHN0cmluZ01hdGNoKSA+IC0xKSB7XHJcblx0XHRcdFx0Ly9DaG9pc2l0IHBhcm1pcyBxdWVsIHR5cGUgZGUgam91ZXVyIG9uIHBldXQgdGlyZXJcclxuXHRcdFx0XHRsZXQgcGxheWVyVG9QaWNrO1xyXG5cdFx0XHRcdHN3aXRjaCAoc3RyaW5nTWF0Y2gpIHtcclxuXHRcdFx0XHRcdGNhc2Ugc3RyaW5nVG9GaW5kLmZlbWFsZTpcclxuXHRcdFx0XHRcdFx0cGxheWVyVG9QaWNrID0gcGxheWVyc05vdFBpY2tlZC5maWx0ZXIocGxheWVyID0+IHBsYXllci5nZW5kZXIgPT0gXCJGXCIpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2Ugc3RyaW5nVG9GaW5kLm1hbGU6XHJcblx0XHRcdFx0XHRcdHBsYXllclRvUGljayA9IHBsYXllcnNOb3RQaWNrZWQuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIuZ2VuZGVyID09IFwiTVwiKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJUb1BpY2sgPSBwbGF5ZXJzTm90UGlja2VkO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9DaG9pc2l0IHVuIGpvdWV1ciBhdSBoYXNhcmRcclxuXHRcdFx0XHRsZXQgcGxheWVyUGlja2VkID0gcGxheWVyVG9QaWNrW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpwbGF5ZXJUb1BpY2subGVuZ3RoKV07XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9SZXRpcmUgY2Ugam91ZXVyIGRlIGxhIGxpc3RlIGRlcyBqb3VldXJzIG5vbiBwcmlzXHJcblx0XHRcdFx0cGxheWVyc05vdFBpY2tlZC5zcGxpY2UocGxheWVyc05vdFBpY2tlZC5pbmRleE9mKHBsYXllclBpY2tlZCksIDEpO1xyXG5cclxuXHRcdFx0XHQvL1JlbXBsYWNlIGwnw6lsw6ltZW50IHBhciBsZSBub20gZHUgam91ZXVyXHJcblx0XHRcdFx0c2VudGVuY2UudGV4dCA9IHNlbnRlbmNlLnRleHQucmVwbGFjZShzdHJpbmdNYXRjaCwgcGxheWVyUGlja2VkLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vU2kgbGEgcGhyYXNlIGVzdCB1biB2aXJ1cyBldCBxdSdvbiB0cm91dmUgdW4gw6lsw6ltZW50IGRhbnMgbGVzIGRldGFpbHNcclxuICAgICAgICAgICAgICAgIGlmIChzZW50ZW5jZS50eXBlID09IFwidmlydXNcIiAmJiBzZW50ZW5jZS5kZXRhaWxzLmluZGV4T2Yoc3RyaW5nTWF0Y2gpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlbXBsYWNlIGxlIGVsdFRvRmluZCBwYXIgbGUgbm9tIGR1IGpvdWV1ciAobGUgbcOqbWUgcXVlIGxlIHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VudGVuY2UuZGV0YWlscyA9IHNlbnRlbmNlLmRldGFpbHMucmVwbGFjZShzdHJpbmdNYXRjaCwgcGxheWVyUGlja2VkLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGluaXRQbGF5ZXJzKHN0cmluZ1RvRmluZC5uZXV0cmFsKTtcclxuXHRcdGluaXRQbGF5ZXJzKHN0cmluZ1RvRmluZC5tYWxlKTtcclxuXHRcdGluaXRQbGF5ZXJzKHN0cmluZ1RvRmluZC5mZW1hbGUpO1xyXG5cclxuXHRcdGxldCBnb3JnZWVzRmluZGVkID0gc2VudGVuY2UudGV4dC5tYXRjaChyZWdleFRvRmluZC5nb3JnZWVzKSB8fCBbXTtcclxuXHRcdGdvcmdlZXNGaW5kZWQuZm9yRWFjaCgoZWx0KSA9PiB7XHJcblx0XHRcdGxldCBhbW91bnRJbmRleCA9IGFtb3VudFtwYXJzZUludChlbHQuY2hhckF0KDIpKV07XHJcblx0XHRcdGNvbnNvbGUud2Fybih7IFwic2VudGVuY2VcIjogc2VudGVuY2UudGV4dCwgXCJ0ZXN0XCI6IGFtb3VudEluZGV4fSk7XHJcblx0XHRcdHNlbnRlbmNlLnRleHQucmVwbGFjZUFsbChlbHQsIGFtb3VudEluZGV4KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBzZW50ZW5jZTtcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBsYWNlIGxlcyB2aXJ1cyBlbiB0YW50IHF1ZSBwaHJhc2VcclxuICogQHBhcmFtIHtPYmplY3RbXX0gc2VudGVuY2VzIFRhYmxlYXUgZGVzIHBocmFzZXMgcmV0ZW51ZXNcclxuICovXHJcbiBjb25zdCBwdXRWaXJ1cyA9IChzZW50ZW5jZXMpID0+IHtcclxuXHRsZXQgbmV3U2VudGVuY2VzID0gc2VudGVuY2VzLnNsaWNlKCk7XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc2VudGVuY2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoc2VudGVuY2VzW2ldLnR5cGUgPT0gXCJ2aXJ1c1wiKSB7XHJcblx0XHRcdGNvbnN0IGluZGV4UmFuZFZpcnVzID0gZ2V0UmFuZG9tSW50KDMsIDYpOyAvL1RPRE8gOiBkaWZmZXJlbnQgdmlydXMgbGVuZ3RoIChkaWZmaWN1bHR5KVxyXG5cdFx0XHRjb25zdCBzZW50ZW5jZVZpcnVzID0ge1xyXG5cdFx0XHRcdFwidGV4dFwiOiBzZW50ZW5jZXNbaV0uZGV0YWlscyxcclxuXHRcdFx0XHRcInRoZW1lXCI6IHNlbnRlbmNlc1tpXS50aGVtZSxcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ2aXJ1c0VuZFwiLFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRuZXdTZW50ZW5jZXMuc3BsaWNlKGkraW5kZXhSYW5kVmlydXMsIDAsIHNlbnRlbmNlVmlydXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5ld1NlbnRlbmNlcztcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFBsYXkoKSB7XHJcblx0bGV0IGxvY2FsT3B0aW9ucyA9IG51bGw7XHJcblx0bGV0IGxvY2FsUGxheWVycyA9IG51bGw7XHJcblx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdFx0bG9jYWxPcHRpb25zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9wdGlvbnNcIikpO1xyXG5cdFx0bG9jYWxQbGF5ZXJzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllcnNcIikpO1xyXG5cdH1cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtwbGF5ZXJzXSA9IHVzZVN0YXRlKGxvY2FsUGxheWVycyk7XHJcblx0Y29uc3QgW29wdGlvbnNdID0gdXNlU3RhdGUobG9jYWxPcHRpb25zKTtcclxuXHRjb25zdCBbYmFyTGVuZ3RoLCBzZXRCYXJMZW5ndGhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRTZW50ZW5jZSA9IDA7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50LCBzZW50ZW5jZXMpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQvL0NsaXF1ZSDDoCBnYXVjaGVcclxuXHRcdGlmIChldmVudC5jbGllbnRYIDwgd2luZG93LmlubmVyV2lkdGggLyAyKSB7XHJcblx0XHRcdGlmIChjdXJyZW50U2VudGVuY2UgPiAwKSB7XHJcblx0XHRcdFx0Y3VycmVudFNlbnRlbmNlLS07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vQ2xpcXVlIMOgIGRyb2l0ZVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlmIChjdXJyZW50U2VudGVuY2UgPCBzZW50ZW5jZXMubGVuZ3RoLTEpIHtcclxuXHRcdFx0XHRjdXJyZW50U2VudGVuY2UrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRyb3V0ZXIucmVsb2FkKCcvcGxheScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRzZXRUZXh0KHNlbnRlbmNlc1tjdXJyZW50U2VudGVuY2VdLnRleHQpO1xyXG5cdFx0c2V0QmFyTGVuZ3RoKGdldExlbmd0aEJhcihzZW50ZW5jZXMubGVuZ3RoKSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0TGVuZ3RoQmFyID0gKHNlbnRlbmNlc0xlbmd0aCkgPT4ge1xyXG5cdFx0cmV0dXJuIGN1cnJlbnRTZW50ZW5jZSoxMDAgLyBzZW50ZW5jZXNMZW5ndGg7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxldCBzZW50ZW5jZXMgPSBmaWx0ZXJTZW50ZW5jZXMoZGF0YSwgb3B0aW9ucywgcGxheWVycyk7XHJcblx0XHRzZW50ZW5jZXMgPSBzZWxlY3RTZW50ZW5jZXMoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IGluaXRTZW50ZW5jZXMoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IHB1dFZpcnVzKHNlbnRlbmNlcyk7XHJcblx0XHRjb25zb2xlSW5mb3JtYXRpb24oc2VudGVuY2VzLCBwbGF5ZXJzKTtcclxuXHJcblx0XHRzZXRCYXJMZW5ndGgoZ2V0TGVuZ3RoQmFyKHNlbnRlbmNlcy5sZW5ndGgpKTtcclxuXHRcdHNldFRleHQoc2VudGVuY2VzWzBdLnRleHQpO1xyXG5cdFx0XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGhhbmRsZUNsaWNrKGUsIHNlbnRlbmNlcykpO1xyXG5cclxuICAgICAgICAvKmxldCBuUmFuZG9tU2VudGVuY2VzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKTtcclxuXHRcdHNldFRleHQoZGF0YVtuUmFuZG9tU2VudGVuY2VzXS50ZXh0KTsqL1xyXG5cclxuXHRcdC8vIFRPRE8gOiAoaWTDqWUgZW4gdHMgPT4gRmFpcmUgcmVkdWNlciBldCBpbnRlcmZhY2UgcG91ciBsZXMgcGhyYXNlcyBkdSBqc29uIDogaHR0cHM6Ly95b3V0dS5iZS9aNWlXcjZTcnNqOD90PTkxOClcclxuXHRcdC8vIChGYWlyZSBkZXMgZm9uY3Rpb25zIChlbiBkZWhvcnMgZHUgY29tcG9zYW50cyBwb3VyIHF1ZSDDp2Egc29pdCBjbGVhbiAoanVzdGUgYXUgZGVzc3VzIGzDoCkpKVxyXG5cdFx0Ly8gLSBGaWx0cmVyIGxlIGpzb24gZGF0YSBwb3VyIG5lIHByZW5kcmUgcXVlIGxlcyBwaHJhc2VzIHF1aSByZXNwZWN0ZW50IGxlcyBvcHRpb25zICh0aMOobWVzLi4uKVxyXG5cdFx0Ly8gLSBGYWlyZSBsZSB0YWJsZWF1IGRlIHBocmFzZXMgKHVuZSBjZXJ0YWluZSBsb25ndWV1ciBlbiBmb25jdGlvbiBkZSBsYSBsb25ndWV1ciBlbiBvcHRpb24pXHJcblx0XHQvLyAtIFJlbXBsYWNlciBsZXMgbm9tcyBkYW5zIGxlcyBwaHJhc2VzICh0aXJlciBsZXMgbm9tcyBhdSBoYXNhcmQgdG91dCDDp2EgdG91dCDDp2EpXHJcblx0XHQvLyAtIE1ldHRyZSBsZXMgdmlydXMgcXVlbHF1ZSBwYXJ0XHJcblx0XHQvLyAtIE1ldHRyZSBsYSBjb25zw6lxdWVuY2UganVzdGUgYXByw6hzIHBvdXIgbGVzIGNob2l4XHJcblx0XHQvL1xyXG5cdFx0Ly8gLSBQb3VyIGxlcyBjaG9peCwgY2Ugc2VyYSBkYW5zIGxlIGpldSBkZSByZW1wbGFjZXIgbGUgbm9tIGRlcyBkw6l0YWlscyBkb25jIHBhcyBkYW5zIGNldHRlIGZvbmN0aW9uXHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dCB0aXRsZT1cIlNlbGVjdGlvbm5lclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHtzdHlsZXMubWFpbn1gfT5cclxuXHRcdFx0XHQ8TGluayBocmVmPVwiL3NlbGVjdC9wbGF5ZXJzXCI+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e3N0eWxlcy5xdWl0QnRufT48L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdHt0aXRsZSB8fCBcIlwifVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0e3RleHQgfHwgXCJDaGFyZ2VtZW50Li4uXCJ9XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyQ29udGFpbmVyfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyfT5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmJhclZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7d2lkdGg6IGAke2Jhckxlbmd0aH0lYCwgYmFja2dyb3VuZENvbG9yOiBcIiM4NEZGQjlcIn19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5OyJdLCJzb3VyY2VSb290IjoiIn0=