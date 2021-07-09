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

    for (var i = 0; i < gorgeesFinded.length; i++) {
      var amountIndex = amount[parseInt(gorgeesFinded[i].charAt(2))];
      sentence.text.replaceAll(gorgeesFinded[i], amountIndex);
    }

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
          lineNumber: 321,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "title",
        children: title || ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: text || "Chargement..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 326,
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
            lineNumber: 331,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 318,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlSW5mb3JtYXRpb24iLCJzZW50ZW5jZXMiLCJwbGF5ZXJzIiwiY3NzU3F1YXJlIiwiY3NzU21hbGwiLCJjb25zb2xlIiwiZ3JvdXBDb2xsYXBzZWQiLCJsZW5ndGgiLCJmb3JFYWNoIiwicGxheWVyIiwibG9nIiwiZ2VuZGVyIiwibmFtZSIsImdyb3VwRW5kIiwiZmlsdGVyIiwieCIsInR5cGUiLCJzZW50ZW5jZSIsImNzc1RoZW1lIiwidGhlbWUiLCJzZW50ZW5jZVR5cGUiLCJzcGFjZVR5cGUiLCJ0ZXh0IiwidGFibGUiLCJyZWdleFRvRmluZCIsInN0cmluZ1RvRmluZCIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRBbW91bnQiLCJkaWZmaWN1bHR5IiwiZ2V0TGVuZ3RoU2VudGVuY2VzIiwiZHVyYXRpb24iLCJmaWx0ZXJTZW50ZW5jZXMiLCJvcHRpb25zIiwibmJGZW1hbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJuYkdlbmRlciIsImdldE5iRWx0IiwicmVnZXgiLCJtYXRjaCIsImVsdCIsIm5iRWx0RmluZGVkIiwibmV1dHJhbCIsIm5iRWx0TWFsZUZpbmRlZCIsIm1hbGUiLCJuYkVsdEZlbWFsZUZpbmRlZCIsImZlbWFsZSIsImVub3VnaEVsdEhvbW1lIiwiZW5vdWdoRWx0RmVtbWUiLCJlbm91Z2hQbGF5ZXIiLCJ0aGVtZXMiLCJpbmNsdWRlcyIsInNlbGVjdFNlbnRlbmNlcyIsInNlbnRlbmNlc1NlbGVjdGVkIiwibGVuZ3RoU2VudGVuY2VzIiwibmJTZW50ZW5jZXNQaWNrZWQiLCJuYlZpcnVzUGlja2VkIiwiaWRTZW50ZW5jZXNQaWNrZWQiLCJ0b3RhbCIsIm5iUmFuZG9tU2VudGVuY2UiLCJwdXNoIiwic2VudGVuY2VQaWNrZWQiLCJ2aXJ1cyIsImluaXRTZW50ZW5jZXMiLCJhbW91bnQiLCJtYXAiLCJwbGF5ZXJzTm90UGlja2VkIiwic2xpY2UiLCJpbml0UGxheWVycyIsInN0cmluZ01hdGNoIiwiaW5kZXhPZiIsInBsYXllclRvUGljayIsInBsYXllclBpY2tlZCIsInNwbGljZSIsInJlcGxhY2UiLCJkZXRhaWxzIiwiZ29yZ2Vlc0ZpbmRlZCIsImdvcmdlZXMiLCJpIiwiYW1vdW50SW5kZXgiLCJwYXJzZUludCIsImNoYXJBdCIsInJlcGxhY2VBbGwiLCJwdXRWaXJ1cyIsIm5ld1NlbnRlbmNlcyIsImluZGV4UmFuZFZpcnVzIiwic2VudGVuY2VWaXJ1cyIsIlBsYXkiLCJsb2NhbE9wdGlvbnMiLCJsb2NhbFBsYXllcnMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJzZXRUZXh0IiwidGl0bGUiLCJzZXRUaXRsZSIsImJhckxlbmd0aCIsInNldEJhckxlbmd0aCIsImN1cnJlbnRTZW50ZW5jZSIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWVudFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicmVsb2FkIiwiZ2V0TGVuZ3RoQmFyIiwic2VudGVuY2VzTGVuZ3RoIiwidXNlRWZmZWN0IiwiZGF0YSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdHlsZXMiLCJxdWl0QnRuIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxTQUFELEVBQVlDLE9BQVosRUFBd0I7QUFDbEQsTUFBSUMsU0FBUyxHQUFHLDBEQUFoQjtBQUNBLE1BQUlDLFFBQVEsR0FBRyxrQkFBZjtBQUNBQyxTQUFPLENBQUNDLGNBQVIsc0JBQXFDSixPQUFPLENBQUNLLE1BQTdDLGtCQUEyREosU0FBM0Q7QUFDQUQsU0FBTyxDQUFDTSxPQUFSLENBQWdCLFVBQUFDLE1BQU0sRUFBSTtBQUN6QkosV0FBTyxDQUFDSyxHQUFSLGFBQWlCRCxNQUFNLENBQUNFLE1BQXhCLGdCQUFvQ0YsTUFBTSxDQUFDRyxJQUEzQyxhQUNHVCxTQURILDhDQUVBLEVBRkE7QUFHQSxHQUpEO0FBS0FFLFNBQU8sQ0FBQ1EsUUFBUjtBQUNBUixTQUFPLENBQUNDLGNBQVIsc0JBQXFDTCxTQUFTLENBQUNNLE1BQS9DLG9CQUErRE4sU0FBUyxDQUFDYSxNQUFWLENBQWlCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLElBQUYsSUFBVSxPQUFkO0FBQUEsR0FBbEIsRUFBeUNULE1BQXhHLHdCQUNHSixTQURILDhDQUVBLEVBRkEsWUFHR0EsU0FISDtBQUlBRixXQUFTLENBQUNPLE9BQVYsQ0FBa0IsVUFBQVMsUUFBUSxFQUFJO0FBQzdCLFFBQUlDLFFBQVEsR0FBRyxFQUFmOztBQUNBLFlBQVFELFFBQVEsQ0FBQ0UsS0FBakI7QUFDQyxXQUFLLE9BQUw7QUFDQ0QsZ0JBQVEsR0FBRyx1Q0FBWDtBQUNBOztBQUNELFdBQUssS0FBTDtBQUNDQSxnQkFBUSxHQUFHLDBDQUFYO0FBQ0E7O0FBQ0Q7QUFDQ0EsZ0JBQVEsR0FBRyx3Q0FBWDtBQUNBO0FBVEY7O0FBV0EsUUFBSUUsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUNBLFFBQUlKLFFBQVEsQ0FBQ0QsSUFBVCxJQUFpQixRQUFyQixFQUErQjtBQUM5Qkksa0JBQVksR0FBR0gsUUFBUSxDQUFDRCxJQUF4QjtBQUNBSyxlQUFTLEdBQUcsR0FBWjtBQUNBOztBQUNEaEIsV0FBTyxDQUFDQyxjQUFSLGFBQTRCYyxZQUE1QixlQUE2Q0MsU0FBN0MsZUFBMkRKLFFBQVEsQ0FBQ0UsS0FBcEUsZ0JBQStFRixRQUFRLENBQUNLLElBQXhGLGFBQ0duQixTQURILG1EQUNxREMsUUFEckQsYUFFR0EsUUFGSCxhQUdHRCxTQUhILGNBR2dCZSxRQUhoQixjQUc0QmQsUUFINUIsYUFJR0EsUUFKSDtBQUtBQyxXQUFPLENBQUNrQixLQUFSLENBQWNOLFFBQWQ7QUFDQVosV0FBTyxDQUFDUSxRQUFSO0FBQ0EsR0ExQkQ7QUEyQkFSLFNBQU8sQ0FBQ1EsUUFBUjtBQUNBLENBMUNEOztBQTZDQSxJQUFJVyxXQUFXLEdBQUc7QUFDakIsYUFBVyxVQURNO0FBRWpCLFVBQVEsV0FGUztBQUdqQixZQUFVLFdBSE87QUFJakIsYUFBVztBQUpNLENBQWxCO0FBTUEsSUFBSUMsWUFBWSxHQUFHO0FBQ2xCLGFBQVcsT0FETztBQUVsQixVQUFRLFFBRlU7QUFHbEIsWUFBVTtBQUhRLENBQW5CO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNDLFNBQVNDLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM3QkQsS0FBRyxHQUFHRSxJQUFJLENBQUNDLElBQUwsQ0FBVUgsR0FBVixDQUFOO0FBQ0FDLEtBQUcsR0FBR0MsSUFBSSxDQUFDRSxLQUFMLENBQVdILEdBQVgsQ0FBTjtBQUNBLFNBQU9DLElBQUksQ0FBQ0UsS0FBTCxDQUFXRixJQUFJLENBQUNHLE1BQUwsTUFBaUJKLEdBQUcsR0FBR0QsR0FBTixHQUFZLENBQTdCLENBQVgsSUFBOENBLEdBQXJEO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQyxJQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxVQUFELEVBQWdCO0FBQ2xDLFNBQU8sQ0FDTixDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLFdBQTNCLEVBQXdDLFdBQXhDLENBRE0sRUFFTixDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLFdBQTNCLEVBQXdDLFdBQXhDLENBRk0sRUFHTixDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLFdBQTNCLEVBQXdDLFdBQXhDLENBSE0sRUFJTEEsVUFKSyxDQUFQO0FBS0EsQ0FOQTtBQVFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3hDLFNBQU87QUFDTixhQUFTLEtBQUssS0FBR0EsUUFEWDtBQUVOLGFBQVMsSUFBSSxJQUFFQTtBQUZULEdBQVA7QUFJQSxDQUxEO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3BDLFNBQUQsRUFBWXFDLE9BQVosRUFBcUJwQyxPQUFyQixFQUFpQztBQUN4RCxNQUFJcUMsUUFBUSxHQUFHckMsT0FBTyxDQUFDc0MsTUFBUixDQUFlLFVBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLFdBQWNBLEdBQUcsQ0FBQy9CLE1BQUosS0FBZSxHQUFmLEdBQXFCLEVBQUU4QixHQUF2QixHQUE2QkEsR0FBM0M7QUFBQSxHQUFmLEVBQStELENBQS9ELENBQWY7QUFDQSxNQUFJRSxRQUFRLEdBQUc7QUFDZCxjQUFVSixRQURJO0FBRWQsWUFBUXJDLE9BQU8sQ0FBQ0ssTUFBUixHQUFpQmdDO0FBRlgsR0FBZixDQUZ3RCxDQU94RDs7QUFDQSxNQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVF2QixJQUFSLEVBQWlCO0FBQ2pDLFdBQU8sQ0FBQ0EsSUFBSSxDQUFDd0IsS0FBTCxDQUFXRCxLQUFYLEtBQXFCLEVBQXRCLEVBQTBCdEMsTUFBakM7QUFDQSxHQUZEOztBQUlBLFNBQU9OLFNBQVMsQ0FBQ2EsTUFBVixDQUFpQixVQUFDaUMsR0FBRCxFQUFTO0FBQ2hDLFFBQUlDLFdBQVcsR0FBR0osUUFBUSxDQUFDcEIsV0FBVyxDQUFDeUIsT0FBYixFQUFzQkYsR0FBRyxDQUFDekIsSUFBMUIsQ0FBMUI7QUFDQSxRQUFJNEIsZUFBZSxHQUFHTixRQUFRLENBQUNwQixXQUFXLENBQUMyQixJQUFiLEVBQW1CSixHQUFHLENBQUN6QixJQUF2QixDQUE5QjtBQUNBLFFBQUk4QixpQkFBaUIsR0FBR1IsUUFBUSxDQUFDcEIsV0FBVyxDQUFDNkIsTUFBYixFQUFxQk4sR0FBRyxDQUFDekIsSUFBekIsQ0FBaEMsQ0FIZ0MsQ0FLaEM7O0FBQ0EsUUFBSWdDLGNBQWMsR0FBR1gsUUFBUSxDQUFDUSxJQUFULElBQWlCRCxlQUF0QztBQUNBLFFBQUlLLGNBQWMsR0FBR1osUUFBUSxDQUFDVSxNQUFULElBQW1CRCxpQkFBeEM7QUFDQSxRQUFJSSxZQUFZLEdBQUd0RCxPQUFPLENBQUNLLE1BQVIsSUFBbUJ5QyxXQUFXLEdBQUdFLGVBQWQsR0FBZ0NFLGlCQUF0RTtBQUVBLFdBQU9kLE9BQU8sQ0FBQ21CLE1BQVIsQ0FBZUMsUUFBZixDQUF3QlgsR0FBRyxDQUFDNUIsS0FBNUIsS0FBc0NtQyxjQUF0QyxJQUF3REMsY0FBeEQsSUFBMEVDLFlBQWpGO0FBQ0EsR0FYTSxDQUFQO0FBWUEsQ0F4QkQ7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQzFELFNBQUQsRUFBWXFDLE9BQVosRUFBcUJwQyxPQUFyQixFQUFpQztBQUN4RCxNQUFJMEQsaUJBQWlCLEdBQUcsRUFBeEI7QUFDQSxNQUFJQyxlQUFlLEdBQUcxQixrQkFBa0IsQ0FBQ0csT0FBTyxDQUFDRixRQUFULENBQXhDO0FBRUEsTUFBSTBCLGlCQUFpQixHQUFHLENBQXhCO0FBQ0csTUFBSUMsYUFBYSxHQUFHLENBQXBCO0FBQ0gsTUFBSUMsaUJBQWlCLEdBQUcsRUFBeEI7O0FBRUEsU0FBT0YsaUJBQWlCLEdBQUdELGVBQWUsQ0FBQ0ksS0FBcEMsSUFBNkNELGlCQUFpQixDQUFDekQsTUFBbEIsR0FBMkJOLFNBQVMsQ0FBQ00sTUFBekYsRUFBaUc7QUFDaEc7QUFDQSxRQUFJMkQsZ0JBQWdCLEdBQUdyQyxJQUFJLENBQUNFLEtBQUwsQ0FBV0YsSUFBSSxDQUFDRyxNQUFMLEtBQWMvQixTQUFTLENBQUNNLE1BQW5DLENBQXZCOztBQUNBLFFBQUksQ0FBQ3lELGlCQUFpQixDQUFDTixRQUFsQixDQUEyQlEsZ0JBQTNCLENBQUwsRUFBbUQ7QUFDbERGLHVCQUFpQixDQUFDRyxJQUFsQixDQUF1QkQsZ0JBQXZCO0FBRUEsVUFBSUUsY0FBYyxHQUFHbkUsU0FBUyxDQUFDaUUsZ0JBQUQsQ0FBOUI7O0FBRUEsVUFBSUUsY0FBYyxDQUFDcEQsSUFBZixJQUF1QixPQUEzQixFQUFvQztBQUNuQyxZQUFJK0MsYUFBYSxHQUFHRixlQUFlLENBQUNRLEtBQXBDLEVBQTJDO0FBQzFDVCwyQkFBaUIsQ0FBQ08sSUFBbEIsQ0FBdUJDLGNBQXZCO0FBQ0FOLDJCQUFpQjtBQUNqQkMsdUJBQWE7QUFDYjtBQUNELE9BTkQsTUFPSztBQUNKSCx5QkFBaUIsQ0FBQ08sSUFBbEIsQ0FBdUJDLGNBQXZCO0FBQ0FOLHlCQUFpQjtBQUNqQjtBQUNEO0FBQ0Q7O0FBRUQsU0FBT0YsaUJBQVA7QUFDQSxDQS9CRDs7QUFpQ0EsSUFBTVUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDckUsU0FBRCxFQUFZcUMsT0FBWixFQUFxQnBDLE9BQXJCLEVBQWlDO0FBQ3RELE1BQUlxRSxNQUFNLEdBQUd0QyxTQUFTLENBQUNLLE9BQU8sQ0FBQ0osVUFBVCxDQUF0QjtBQUNBLFNBQU9qQyxTQUFTLENBQUN1RSxHQUFWLENBQWMsVUFBQ3ZELFFBQUQsRUFBYztBQUNsQztBQUNBLFFBQUl3RCxnQkFBZ0IsR0FBR3ZFLE9BQU8sQ0FBQ3dFLEtBQVIsRUFBdkI7O0FBRUEsUUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsV0FBRCxFQUFpQjtBQUNwQyxhQUFPM0QsUUFBUSxDQUFDSyxJQUFULENBQWN1RCxPQUFkLENBQXNCRCxXQUF0QixJQUFxQyxDQUFDLENBQTdDLEVBQWdEO0FBQy9DO0FBQ0EsWUFBSUUsWUFBWSxTQUFoQjs7QUFDQSxnQkFBUUYsV0FBUjtBQUNDLGVBQUtuRCxZQUFZLENBQUM0QixNQUFsQjtBQUNDeUIsd0JBQVksR0FBR0wsZ0JBQWdCLENBQUMzRCxNQUFqQixDQUF3QixVQUFBTCxNQUFNO0FBQUEscUJBQUlBLE1BQU0sQ0FBQ0UsTUFBUCxJQUFpQixHQUFyQjtBQUFBLGFBQTlCLENBQWY7QUFDQTs7QUFDRCxlQUFLYyxZQUFZLENBQUMwQixJQUFsQjtBQUNDMkIsd0JBQVksR0FBR0wsZ0JBQWdCLENBQUMzRCxNQUFqQixDQUF3QixVQUFBTCxNQUFNO0FBQUEscUJBQUlBLE1BQU0sQ0FBQ0UsTUFBUCxJQUFpQixHQUFyQjtBQUFBLGFBQTlCLENBQWY7QUFDQTs7QUFDRDtBQUNDbUUsd0JBQVksR0FBR0wsZ0JBQWY7QUFSRixTQUgrQyxDQWMvQzs7O0FBQ0EsWUFBSU0sWUFBWSxHQUFHRCxZQUFZLENBQUNqRCxJQUFJLENBQUNFLEtBQUwsQ0FBV0YsSUFBSSxDQUFDRyxNQUFMLEtBQWM4QyxZQUFZLENBQUN2RSxNQUF0QyxDQUFELENBQS9CLENBZitDLENBaUIvQzs7QUFDQWtFLHdCQUFnQixDQUFDTyxNQUFqQixDQUF3QlAsZ0JBQWdCLENBQUNJLE9BQWpCLENBQXlCRSxZQUF6QixDQUF4QixFQUFnRSxDQUFoRSxFQWxCK0MsQ0FvQi9DOztBQUNBOUQsZ0JBQVEsQ0FBQ0ssSUFBVCxHQUFnQkwsUUFBUSxDQUFDSyxJQUFULENBQWMyRCxPQUFkLENBQXNCTCxXQUF0QixFQUFtQ0csWUFBWSxDQUFDbkUsSUFBaEQsQ0FBaEIsQ0FyQitDLENBdUJuQzs7QUFDQSxZQUFJSyxRQUFRLENBQUNELElBQVQsSUFBaUIsT0FBakIsSUFBNEJDLFFBQVEsQ0FBQ2lFLE9BQVQsQ0FBaUJMLE9BQWpCLENBQXlCRCxXQUF6QixJQUF3QyxDQUFDLENBQXpFLEVBQTRFO0FBQ3hFO0FBQ0EzRCxrQkFBUSxDQUFDaUUsT0FBVCxHQUFtQmpFLFFBQVEsQ0FBQ2lFLE9BQVQsQ0FBaUJELE9BQWpCLENBQXlCTCxXQUF6QixFQUFzQ0csWUFBWSxDQUFDbkUsSUFBbkQsQ0FBbkI7QUFDSDtBQUNiO0FBQ0QsS0E5QkQ7O0FBZ0NBK0QsZUFBVyxDQUFDbEQsWUFBWSxDQUFDd0IsT0FBZCxDQUFYO0FBQ0EwQixlQUFXLENBQUNsRCxZQUFZLENBQUMwQixJQUFkLENBQVg7QUFDQXdCLGVBQVcsQ0FBQ2xELFlBQVksQ0FBQzRCLE1BQWQsQ0FBWDtBQUVBLFFBQUk4QixhQUFhLEdBQUdsRSxRQUFRLENBQUNLLElBQVQsQ0FBY3dCLEtBQWQsQ0FBb0J0QixXQUFXLENBQUM0RCxPQUFoQyxLQUE0QyxFQUFoRTs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLGFBQWEsQ0FBQzVFLE1BQWxDLEVBQTBDOEUsQ0FBQyxFQUEzQyxFQUErQztBQUM5QyxVQUFJQyxXQUFXLEdBQUdmLE1BQU0sQ0FBQ2dCLFFBQVEsQ0FBQ0osYUFBYSxDQUFDRSxDQUFELENBQWIsQ0FBaUJHLE1BQWpCLENBQXdCLENBQXhCLENBQUQsQ0FBVCxDQUF4QjtBQUNBdkUsY0FBUSxDQUFDSyxJQUFULENBQWNtRSxVQUFkLENBQXlCTixhQUFhLENBQUNFLENBQUQsQ0FBdEMsRUFBMkNDLFdBQTNDO0FBQ0E7O0FBRUQsV0FBT3JFLFFBQVA7QUFDQSxHQS9DTSxDQUFQO0FBZ0RBLENBbEREO0FBb0RBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQyxJQUFNeUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ3pGLFNBQUQsRUFBZTtBQUNoQyxNQUFJMEYsWUFBWSxHQUFHMUYsU0FBUyxDQUFDeUUsS0FBVixFQUFuQjs7QUFFQSxPQUFLLElBQUlXLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdwRixTQUFTLENBQUNNLE1BQTlCLEVBQXNDOEUsQ0FBQyxFQUF2QyxFQUEyQztBQUMxQyxRQUFJcEYsU0FBUyxDQUFDb0YsQ0FBRCxDQUFULENBQWFyRSxJQUFiLElBQXFCLE9BQXpCLEVBQWtDO0FBQ2pDLFVBQU00RSxjQUFjLEdBQUdsRSxZQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBbkMsQ0FEaUMsQ0FDVTs7QUFDM0MsVUFBTW1FLGFBQWEsR0FBRztBQUNyQixnQkFBUTVGLFNBQVMsQ0FBQ29GLENBQUQsQ0FBVCxDQUFhSCxPQURBO0FBRXJCLGlCQUFTakYsU0FBUyxDQUFDb0YsQ0FBRCxDQUFULENBQWFsRSxLQUZEO0FBR3JCLGdCQUFRO0FBSGEsT0FBdEI7QUFLQXdFLGtCQUFZLENBQUNYLE1BQWIsQ0FBb0JLLENBQUMsR0FBQ08sY0FBdEIsRUFBc0MsQ0FBdEMsRUFBeUNDLGFBQXpDO0FBQ0E7QUFDRDs7QUFFRCxTQUFPRixZQUFQO0FBQ0EsQ0FoQkE7O0FBbUJELFNBQVNHLElBQVQsR0FBZ0I7QUFBQTs7QUFDZixNQUFJQyxZQUFZLEdBQUcsSUFBbkI7QUFDQSxNQUFJQyxZQUFZLEdBQUcsSUFBbkI7O0FBQ0EsWUFBcUI7QUFDcEJELGdCQUFZLEdBQUdFLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsQ0FBWCxDQUFmO0FBQ0FKLGdCQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsQ0FBWCxDQUFmO0FBQ0E7O0FBQ0QsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFQZSxrQkFRU0MsK0NBQVEsQ0FBQyxFQUFELENBUmpCO0FBQUEsTUFRUmpGLElBUlE7QUFBQSxNQVFGa0YsT0FSRTs7QUFBQSxtQkFTV0QsK0NBQVEsQ0FBQyxFQUFELENBVG5CO0FBQUEsTUFTUkUsS0FUUTtBQUFBLE1BU0RDLFFBVEM7O0FBQUEsbUJBVUdILCtDQUFRLENBQUNQLFlBQUQsQ0FWWDtBQUFBLE1BVVI5RixPQVZROztBQUFBLG1CQVdHcUcsK0NBQVEsQ0FBQ1IsWUFBRCxDQVhYO0FBQUEsTUFXUnpELE9BWFE7O0FBQUEsbUJBWW1CaUUsK0NBQVEsQ0FBQyxDQUFELENBWjNCO0FBQUEsTUFZUkksU0FaUTtBQUFBLE1BWUdDLFlBWkg7O0FBY1osTUFBSUMsZUFBZSxHQUFHLENBQXRCOztBQUVILE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBUTlHLFNBQVIsRUFBc0I7QUFDekM4RyxTQUFLLENBQUNDLGNBQU4sR0FEeUMsQ0FFekM7O0FBQ0EsUUFBSUQsS0FBSyxDQUFDRSxPQUFOLEdBQWdCQyxNQUFNLENBQUNDLFVBQVAsR0FBb0IsQ0FBeEMsRUFBMkM7QUFDMUMsVUFBSU4sZUFBZSxHQUFHLENBQXRCLEVBQXlCO0FBQ3hCQSx1QkFBZTtBQUNmO0FBQ0QsS0FKRCxDQUtBO0FBTEEsU0FNSztBQUNKLFlBQUlBLGVBQWUsR0FBRzVHLFNBQVMsQ0FBQ00sTUFBVixHQUFpQixDQUF2QyxFQUEwQztBQUN6Q3NHLHlCQUFlO0FBQ2YsU0FGRCxNQUdLO0FBQ0pSLGdCQUFNLENBQUNlLE1BQVAsQ0FBYyxPQUFkO0FBQ0E7QUFDRDs7QUFDRFosV0FBTyxDQUFDdkcsU0FBUyxDQUFDNEcsZUFBRCxDQUFULENBQTJCdkYsSUFBNUIsQ0FBUDtBQUNBc0YsZ0JBQVksQ0FBQ1MsWUFBWSxDQUFDcEgsU0FBUyxDQUFDTSxNQUFYLENBQWIsQ0FBWjtBQUNBLEdBbkJEOztBQXFCQSxNQUFNOEcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsZUFBRCxFQUFxQjtBQUN6QyxXQUFPVCxlQUFlLEdBQUMsR0FBaEIsR0FBc0JTLGVBQTdCO0FBQ0EsR0FGRDs7QUFJQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBSXRILFNBQVMsR0FBR29DLGVBQWUsQ0FBQ21GLHNEQUFELEVBQU9sRixPQUFQLEVBQWdCcEMsT0FBaEIsQ0FBL0I7QUFDQUQsYUFBUyxHQUFHMEQsZUFBZSxDQUFDMUQsU0FBRCxFQUFZcUMsT0FBWixFQUFxQnBDLE9BQXJCLENBQTNCO0FBQ0FELGFBQVMsR0FBR3FFLGFBQWEsQ0FBQ3JFLFNBQUQsRUFBWXFDLE9BQVosRUFBcUJwQyxPQUFyQixDQUF6QjtBQUNBRCxhQUFTLEdBQUd5RixRQUFRLENBQUN6RixTQUFELENBQXBCO0FBQ0FELHNCQUFrQixDQUFDQyxTQUFELEVBQVlDLE9BQVosQ0FBbEI7QUFFQTBHLGdCQUFZLENBQUNTLFlBQVksQ0FBQ3BILFNBQVMsQ0FBQ00sTUFBWCxDQUFiLENBQVo7QUFDQWlHLFdBQU8sQ0FBQ3ZHLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXFCLElBQWQsQ0FBUDtBQUVBbUcsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFEO0FBQUEsYUFBT2IsV0FBVyxDQUFDYSxDQUFELEVBQUkxSCxTQUFKLENBQWxCO0FBQUEsS0FBbkM7QUFFTTtBQUNSO0FBRUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0F4QlEsRUF3Qk4sRUF4Qk0sQ0FBVDtBQTBCQSxzQkFDQyw4REFBQyx1REFBRDtBQUFRLFNBQUssRUFBQyxjQUFkO0FBQUEsMkJBQ0M7QUFBSyxlQUFTLFlBQUsySCwwRUFBTCxjQUF5QkEscUVBQXpCLENBQWQ7QUFBQSw4QkFDQyw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxpQkFBWDtBQUFBLCtCQUNDO0FBQUcsbUJBQVMsRUFBRUEsd0VBQWNDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFJQztBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLGtCQUNFcEIsS0FBSyxJQUFJO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpELGVBT0M7QUFBQSxrQkFDRW5GLElBQUksSUFBSTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRCxlQVVDO0FBQUssaUJBQVMsRUFBRXNHLDZFQUFoQjtBQUFBLCtCQUNDO0FBQUssbUJBQVMsRUFBRUEsb0VBQWhCO0FBQUEsaUNBQ0M7QUFDQyxxQkFBUyxFQUFFQSx5RUFEWjtBQUVDLGlCQUFLLEVBQUU7QUFBQ0UsbUJBQUssWUFBS25CLFNBQUwsTUFBTjtBQUF5Qm9CLDZCQUFlLEVBQUU7QUFBMUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUF3QkE7O0dBM0ZRakMsSTtVQU9PUSxrRDs7O0tBUFBSLEk7QUE2RlQsK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGxheS5kYmZhZDc4ODZhZjY5YmY1NWJlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUGxheS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvc2VudGVuY2VzX3Rlc3QuanNvbic7XHJcblxyXG5jb25zdCBjb25zb2xlSW5mb3JtYXRpb24gPSAoc2VudGVuY2VzLCBwbGF5ZXJzKSA9PiB7XHJcblx0bGV0IGNzc1NxdWFyZSA9IFwicGFkZGluZzogM3B4IDVweDsgYm9yZGVyLXJhZGl1czogNXB4OyBmb250LXdlaWdodDogYm9sZDtcIjtcclxuXHRsZXQgY3NzU21hbGwgPSBcImZvbnQtc2l6ZTogMTBweDtcIjtcclxuXHRjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGAlY0pvdWV1cnMgKCR7cGxheWVycy5sZW5ndGh9KWAsIGAke2Nzc1NxdWFyZX0gY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtgKTtcclxuXHRwbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGAlYyR7cGxheWVyLmdlbmRlcn0lYyAke3BsYXllci5uYW1lfWAsXHJcblx0XHRgJHtjc3NTcXVhcmV9IGNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7YCxcclxuXHRcdFwiXCIpO1xyXG5cdH0pO1xyXG5cdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHRjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGAlY1BocmFzZXMgKCR7c2VudGVuY2VzLmxlbmd0aH0pJWMgJWMoJHtzZW50ZW5jZXMuZmlsdGVyKHggPT4geC50eXBlID09IFwidmlydXNcIikubGVuZ3RofSB2aXJ1cylgLFxyXG5cdGAke2Nzc1NxdWFyZX0gY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtgLFxyXG5cdFwiXCIsXHJcblx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IHJlZDtgKTtcclxuXHRzZW50ZW5jZXMuZm9yRWFjaChzZW50ZW5jZSA9PiB7XHJcblx0XHRsZXQgY3NzVGhlbWUgPSBcIlwiO1xyXG5cdFx0c3dpdGNoIChzZW50ZW5jZS50aGVtZSkge1xyXG5cdFx0XHRjYXNlIFwic3BvcnRcIjpcclxuXHRcdFx0XHRjc3NUaGVtZSA9IFwiY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiaG90XCI6XHJcblx0XHRcdFx0Y3NzVGhlbWUgPSBcImNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzZiZjtcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRjc3NUaGVtZSA9IFwiY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGxldCBzZW50ZW5jZVR5cGUgPSBcIlwiO1xyXG5cdFx0bGV0IHNwYWNlVHlwZSA9IFwiXCI7XHJcblx0XHRpZiAoc2VudGVuY2UudHlwZSAhPSBcIm5vcm1hbFwiKSB7XHJcblx0XHRcdHNlbnRlbmNlVHlwZSA9IHNlbnRlbmNlLnR5cGU7XHJcblx0XHRcdHNwYWNlVHlwZSA9IFwiIFwiO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5ncm91cENvbGxhcHNlZChgJWMke3NlbnRlbmNlVHlwZX0lYyR7c3BhY2VUeXBlfSVjJHtzZW50ZW5jZS50aGVtZX0lYyAke3NlbnRlbmNlLnRleHR9YCxcclxuXHRcdGAke2Nzc1NxdWFyZX0gY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICR7Y3NzU21hbGx9YCxcclxuXHRcdGAke2Nzc1NtYWxsfWAsXHJcblx0XHRgJHtjc3NTcXVhcmV9ICR7Y3NzVGhlbWV9ICR7Y3NzU21hbGx9YCxcclxuXHRcdGAke2Nzc1NtYWxsfWApO1xyXG5cdFx0Y29uc29sZS50YWJsZShzZW50ZW5jZSk7XHJcblx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0fSk7XHJcblx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcblxyXG5cclxubGV0IHJlZ2V4VG9GaW5kID0ge1xyXG5cdFwibmV1dHJhbFwiOiAvXFxbbm9tXFxdL2csXHJcblx0XCJtYWxlXCI6IC9cXFtub21NXFxdL2csXHJcblx0XCJmZW1hbGVcIjogL1xcW25vbUZcXF0vZyxcclxuXHRcImdvcmdlZXNcIjogL1xcW2dbMC0zXVxcXS9nLFxyXG59O1xyXG5sZXQgc3RyaW5nVG9GaW5kID0ge1xyXG5cdFwibmV1dHJhbFwiOiBcIltub21dXCIsXHJcblx0XCJtYWxlXCI6IFwiW25vbU1dXCIsXHJcblx0XCJmZW1hbGVcIjogXCJbbm9tRl1cIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW52b2llIHVuIGVudGllciBhbMOpYXRvaXJlIGVudHJlIG1pbiBldCBtYXggW21pbiwgbWF4XVxyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pbiBsYSB2YWxldXIgbWluaW11bSBxdWUgcGV1dCBhdHRlaW5kcmUgbCdlbnRpZXJcclxuICogQHBhcmFtICB7bnVtYmVyfSBtYXggbGEgdmFsZXVyIG1heGltdW0gcXVlIHBldXQgYXR0ZWluZHJlIGwnZW50aWVyXHJcbiAqIEByZXR1cm4ge251bWJlcn0gTCdlbnRpZXIgdGlyw6kgYXUgaGFzYXJkXHJcbiAqL1xyXG4gZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcclxuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkaWZmaWN1bHR5IFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuIGNvbnN0IGdldEFtb3VudCA9IChkaWZmaWN1bHR5KSA9PiB7XHJcblx0cmV0dXJuIFtcclxuXHRcdFtcIjIgZ29yZ8OpZXNcIiwgXCIzIGdvcmfDqWVzXCIsIFwiNCBnb3Jnw6llc1wiLCBcIjYgZ29yZ8OpZXNcIl0sXHJcblx0XHRbXCIzIGdvcmfDqWVzXCIsIFwiNCBnb3Jnw6llc1wiLCBcIjYgZ29yZ8OpZXNcIiwgXCI5IGdvcmfDqWVzXCJdLFxyXG5cdFx0W1wiNCBnb3Jnw6llc1wiLCBcIjYgZ29yZ8OpZXNcIiwgXCI4IGdvcmfDqWVzXCIsIFwiMSBjdWwgc2VjXCJdLFxyXG5cdF1bZGlmZmljdWx0eV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW52b2llIGxlIG5vbWJyZSBkZSBwaHJhc2VzIMOgIGFmZmljaGVyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBcclxuICogQHJldHVybnMge251bWJlcn0gTm9tYnJlIGRlIHBocmFzZXNcclxuICovXHJcbmNvbnN0IGdldExlbmd0aFNlbnRlbmNlcyA9IChkdXJhdGlvbikgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRcInRvdGFsXCI6IDIwICsgMTUqZHVyYXRpb24sXHJcblx0XHRcInZpcnVzXCI6IDIgKyAyKmR1cmF0aW9uXHJcblx0fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzZW50ZW5jZXNcclxuICogQHBhcmFtIHtPYmplY3RbXX0gb3B0aW9ucyBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gcGxheWVycyBcclxuICogQHJldHVybnMge09iamVjdFtdfSBcclxuICovXHJcbmNvbnN0IGZpbHRlclNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgbmJGZW1hbGUgPSBwbGF5ZXJzLnJlZHVjZSgoYWNjLCBjdXIpID0+IGN1ci5nZW5kZXIgPT09IFwiRlwiID8gKythY2MgOiBhY2MsIDApO1xyXG5cdGxldCBuYkdlbmRlciA9IHtcclxuXHRcdFwiZmVtYWxlXCI6IG5iRmVtYWxlLFxyXG5cdFx0XCJtYWxlXCI6IHBsYXllcnMubGVuZ3RoIC0gbmJGZW1hbGVcclxuXHR9O1xyXG5cclxuXHQvL05vbWJyZSBkJ8OpbMOpbWVudCByZWdleCB0cm91dsOpIGRhbnMgbGEgcGhyYXNlXHJcblx0Y29uc3QgZ2V0TmJFbHQgPSAocmVnZXgsIHRleHQpID0+IHtcclxuXHRcdHJldHVybiAodGV4dC5tYXRjaChyZWdleCkgfHwgW10pLmxlbmd0aDtcclxuXHR9O1xyXG5cdFxyXG5cdHJldHVybiBzZW50ZW5jZXMuZmlsdGVyKChlbHQpID0+IHtcclxuXHRcdGxldCBuYkVsdEZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLm5ldXRyYWwsIGVsdC50ZXh0KTtcclxuXHRcdGxldCBuYkVsdE1hbGVGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5tYWxlLCBlbHQudGV4dCk7XHJcblx0XHRsZXQgbmJFbHRGZW1hbGVGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5mZW1hbGUsIGVsdC50ZXh0KTtcclxuXHRcdFxyXG5cdFx0Ly9PbiB2w6lyaWZpZSBzJ2lsIHkgYSBiaWVuLCBhdXRhbnQgb3UgcGx1cyBkZSBqb3VldXIgcXVlIGxhIHBocmFzZXMgZW4gbsOpY2Vzc2l0ZSAoZW4gZm9uY3Rpb24gZHUgc2V4ZSlcclxuXHRcdGxldCBlbm91Z2hFbHRIb21tZSA9IG5iR2VuZGVyLm1hbGUgPj0gbmJFbHRNYWxlRmluZGVkO1xyXG5cdFx0bGV0IGVub3VnaEVsdEZlbW1lID0gbmJHZW5kZXIuZmVtYWxlID49IG5iRWx0RmVtYWxlRmluZGVkO1xyXG5cdFx0bGV0IGVub3VnaFBsYXllciA9IHBsYXllcnMubGVuZ3RoID49IChuYkVsdEZpbmRlZCArIG5iRWx0TWFsZUZpbmRlZCArIG5iRWx0RmVtYWxlRmluZGVkKTtcclxuXHJcblx0XHRyZXR1cm4gb3B0aW9ucy50aGVtZXMuaW5jbHVkZXMoZWx0LnRoZW1lKSAmJiBlbm91Z2hFbHRIb21tZSAmJiBlbm91Z2hFbHRGZW1tZSAmJiBlbm91Z2hQbGF5ZXI7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gc2VudGVuY2VzIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBvcHRpb25zIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBwbGF5ZXJzIFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0W119XHJcbiAqL1xyXG5jb25zdCBzZWxlY3RTZW50ZW5jZXMgPSAoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKSA9PiB7XHJcblx0bGV0IHNlbnRlbmNlc1NlbGVjdGVkID0gW107XHJcblx0bGV0IGxlbmd0aFNlbnRlbmNlcyA9IGdldExlbmd0aFNlbnRlbmNlcyhvcHRpb25zLmR1cmF0aW9uKTtcclxuXHRcclxuXHRsZXQgbmJTZW50ZW5jZXNQaWNrZWQgPSAwO1xyXG4gICAgbGV0IG5iVmlydXNQaWNrZWQgPSAwO1xyXG5cdGxldCBpZFNlbnRlbmNlc1BpY2tlZCA9IFtdO1xyXG5cclxuXHR3aGlsZSAobmJTZW50ZW5jZXNQaWNrZWQgPCBsZW5ndGhTZW50ZW5jZXMudG90YWwgJiYgaWRTZW50ZW5jZXNQaWNrZWQubGVuZ3RoIDwgc2VudGVuY2VzLmxlbmd0aCkge1xyXG5cdFx0Ly9PbiBjaG9pc2l0IHVuIG51bcOpcm8gYXUgaGFzYXJkXHJcblx0XHRsZXQgbmJSYW5kb21TZW50ZW5jZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpzZW50ZW5jZXMubGVuZ3RoKTtcclxuXHRcdGlmICghaWRTZW50ZW5jZXNQaWNrZWQuaW5jbHVkZXMobmJSYW5kb21TZW50ZW5jZSkpIHtcclxuXHRcdFx0aWRTZW50ZW5jZXNQaWNrZWQucHVzaChuYlJhbmRvbVNlbnRlbmNlKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBzZW50ZW5jZVBpY2tlZCA9IHNlbnRlbmNlc1tuYlJhbmRvbVNlbnRlbmNlXTtcclxuXHJcblx0XHRcdGlmIChzZW50ZW5jZVBpY2tlZC50eXBlID09IFwidmlydXNcIikge1xyXG5cdFx0XHRcdGlmIChuYlZpcnVzUGlja2VkIDwgbGVuZ3RoU2VudGVuY2VzLnZpcnVzKSB7XHJcblx0XHRcdFx0XHRzZW50ZW5jZXNTZWxlY3RlZC5wdXNoKHNlbnRlbmNlUGlja2VkKTtcclxuXHRcdFx0XHRcdG5iU2VudGVuY2VzUGlja2VkKys7XHJcblx0XHRcdFx0XHRuYlZpcnVzUGlja2VkKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHNlbnRlbmNlc1NlbGVjdGVkLnB1c2goc2VudGVuY2VQaWNrZWQpO1xyXG5cdFx0XHRcdG5iU2VudGVuY2VzUGlja2VkKys7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBzZW50ZW5jZXNTZWxlY3RlZDtcclxufVxyXG5cclxuY29uc3QgaW5pdFNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgYW1vdW50ID0gZ2V0QW1vdW50KG9wdGlvbnMuZGlmZmljdWx0eSk7XHJcblx0cmV0dXJuIHNlbnRlbmNlcy5tYXAoKHNlbnRlbmNlKSA9PiB7XHJcblx0XHQvL0ZhaXQgdW5lIGNvcGllIGRlcyBqb3VldXJzXHJcblx0XHRsZXQgcGxheWVyc05vdFBpY2tlZCA9IHBsYXllcnMuc2xpY2UoKTtcclxuXHJcblx0XHRjb25zdCBpbml0UGxheWVycyA9IChzdHJpbmdNYXRjaCkgPT4ge1xyXG5cdFx0XHR3aGlsZSAoc2VudGVuY2UudGV4dC5pbmRleE9mKHN0cmluZ01hdGNoKSA+IC0xKSB7XHJcblx0XHRcdFx0Ly9DaG9pc2l0IHBhcm1pcyBxdWVsIHR5cGUgZGUgam91ZXVyIG9uIHBldXQgdGlyZXJcclxuXHRcdFx0XHRsZXQgcGxheWVyVG9QaWNrO1xyXG5cdFx0XHRcdHN3aXRjaCAoc3RyaW5nTWF0Y2gpIHtcclxuXHRcdFx0XHRcdGNhc2Ugc3RyaW5nVG9GaW5kLmZlbWFsZTpcclxuXHRcdFx0XHRcdFx0cGxheWVyVG9QaWNrID0gcGxheWVyc05vdFBpY2tlZC5maWx0ZXIocGxheWVyID0+IHBsYXllci5nZW5kZXIgPT0gXCJGXCIpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2Ugc3RyaW5nVG9GaW5kLm1hbGU6XHJcblx0XHRcdFx0XHRcdHBsYXllclRvUGljayA9IHBsYXllcnNOb3RQaWNrZWQuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIuZ2VuZGVyID09IFwiTVwiKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJUb1BpY2sgPSBwbGF5ZXJzTm90UGlja2VkO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9DaG9pc2l0IHVuIGpvdWV1ciBhdSBoYXNhcmRcclxuXHRcdFx0XHRsZXQgcGxheWVyUGlja2VkID0gcGxheWVyVG9QaWNrW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpwbGF5ZXJUb1BpY2subGVuZ3RoKV07XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9SZXRpcmUgY2Ugam91ZXVyIGRlIGxhIGxpc3RlIGRlcyBqb3VldXJzIG5vbiBwcmlzXHJcblx0XHRcdFx0cGxheWVyc05vdFBpY2tlZC5zcGxpY2UocGxheWVyc05vdFBpY2tlZC5pbmRleE9mKHBsYXllclBpY2tlZCksIDEpO1xyXG5cclxuXHRcdFx0XHQvL1JlbXBsYWNlIGwnw6lsw6ltZW50IHBhciBsZSBub20gZHUgam91ZXVyXHJcblx0XHRcdFx0c2VudGVuY2UudGV4dCA9IHNlbnRlbmNlLnRleHQucmVwbGFjZShzdHJpbmdNYXRjaCwgcGxheWVyUGlja2VkLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vU2kgbGEgcGhyYXNlIGVzdCB1biB2aXJ1cyBldCBxdSdvbiB0cm91dmUgdW4gw6lsw6ltZW50IGRhbnMgbGVzIGRldGFpbHNcclxuICAgICAgICAgICAgICAgIGlmIChzZW50ZW5jZS50eXBlID09IFwidmlydXNcIiAmJiBzZW50ZW5jZS5kZXRhaWxzLmluZGV4T2Yoc3RyaW5nTWF0Y2gpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlbXBsYWNlIGxlIGVsdFRvRmluZCBwYXIgbGUgbm9tIGR1IGpvdWV1ciAobGUgbcOqbWUgcXVlIGxlIHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VudGVuY2UuZGV0YWlscyA9IHNlbnRlbmNlLmRldGFpbHMucmVwbGFjZShzdHJpbmdNYXRjaCwgcGxheWVyUGlja2VkLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGluaXRQbGF5ZXJzKHN0cmluZ1RvRmluZC5uZXV0cmFsKTtcclxuXHRcdGluaXRQbGF5ZXJzKHN0cmluZ1RvRmluZC5tYWxlKTtcclxuXHRcdGluaXRQbGF5ZXJzKHN0cmluZ1RvRmluZC5mZW1hbGUpO1xyXG5cclxuXHRcdGxldCBnb3JnZWVzRmluZGVkID0gc2VudGVuY2UudGV4dC5tYXRjaChyZWdleFRvRmluZC5nb3JnZWVzKSB8fCBbXTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZ29yZ2Vlc0ZpbmRlZC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgYW1vdW50SW5kZXggPSBhbW91bnRbcGFyc2VJbnQoZ29yZ2Vlc0ZpbmRlZFtpXS5jaGFyQXQoMikpXTtcclxuXHRcdFx0c2VudGVuY2UudGV4dC5yZXBsYWNlQWxsKGdvcmdlZXNGaW5kZWRbaV0sIGFtb3VudEluZGV4KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gc2VudGVuY2U7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQbGFjZSBsZXMgdmlydXMgZW4gdGFudCBxdWUgcGhyYXNlXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IHNlbnRlbmNlcyBUYWJsZWF1IGRlcyBwaHJhc2VzIHJldGVudWVzXHJcbiAqL1xyXG4gY29uc3QgcHV0VmlydXMgPSAoc2VudGVuY2VzKSA9PiB7XHJcblx0bGV0IG5ld1NlbnRlbmNlcyA9IHNlbnRlbmNlcy5zbGljZSgpO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHNlbnRlbmNlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKHNlbnRlbmNlc1tpXS50eXBlID09IFwidmlydXNcIikge1xyXG5cdFx0XHRjb25zdCBpbmRleFJhbmRWaXJ1cyA9IGdldFJhbmRvbUludCgzLCA2KTsgLy9UT0RPIDogZGlmZmVyZW50IHZpcnVzIGxlbmd0aCAoZGlmZmljdWx0eSlcclxuXHRcdFx0Y29uc3Qgc2VudGVuY2VWaXJ1cyA9IHtcclxuXHRcdFx0XHRcInRleHRcIjogc2VudGVuY2VzW2ldLmRldGFpbHMsXHJcblx0XHRcdFx0XCJ0aGVtZVwiOiBzZW50ZW5jZXNbaV0udGhlbWUsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidmlydXNFbmRcIixcclxuXHRcdFx0fTtcclxuXHRcdFx0bmV3U2VudGVuY2VzLnNwbGljZShpK2luZGV4UmFuZFZpcnVzLCAwLCBzZW50ZW5jZVZpcnVzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBuZXdTZW50ZW5jZXM7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBQbGF5KCkge1xyXG5cdGxldCBsb2NhbE9wdGlvbnMgPSBudWxsO1xyXG5cdGxldCBsb2NhbFBsYXllcnMgPSBudWxsO1xyXG5cdGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuXHRcdGxvY2FsT3B0aW9ucyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvcHRpb25zXCIpKTtcclxuXHRcdGxvY2FsUGxheWVycyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbGF5ZXJzXCIpKTtcclxuXHR9XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbcGxheWVyc10gPSB1c2VTdGF0ZShsb2NhbFBsYXllcnMpO1xyXG5cdGNvbnN0IFtvcHRpb25zXSA9IHVzZVN0YXRlKGxvY2FsT3B0aW9ucyk7XHJcblx0Y29uc3QgW2Jhckxlbmd0aCwgc2V0QmFyTGVuZ3RoXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGxldCBjdXJyZW50U2VudGVuY2UgPSAwO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbGljayA9IChldmVudCwgc2VudGVuY2VzKSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Ly9DbGlxdWUgw6AgZ2F1Y2hlXHJcblx0XHRpZiAoZXZlbnQuY2xpZW50WCA8IHdpbmRvdy5pbm5lcldpZHRoIC8gMikge1xyXG5cdFx0XHRpZiAoY3VycmVudFNlbnRlbmNlID4gMCkge1xyXG5cdFx0XHRcdGN1cnJlbnRTZW50ZW5jZS0tO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvL0NsaXF1ZSDDoCBkcm9pdGVcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRpZiAoY3VycmVudFNlbnRlbmNlIDwgc2VudGVuY2VzLmxlbmd0aC0xKSB7XHJcblx0XHRcdFx0Y3VycmVudFNlbnRlbmNlKys7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0cm91dGVyLnJlbG9hZCgnL3BsYXknKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0c2V0VGV4dChzZW50ZW5jZXNbY3VycmVudFNlbnRlbmNlXS50ZXh0KTtcclxuXHRcdHNldEJhckxlbmd0aChnZXRMZW5ndGhCYXIoc2VudGVuY2VzLmxlbmd0aCkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdldExlbmd0aEJhciA9IChzZW50ZW5jZXNMZW5ndGgpID0+IHtcclxuXHRcdHJldHVybiBjdXJyZW50U2VudGVuY2UqMTAwIC8gc2VudGVuY2VzTGVuZ3RoO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsZXQgc2VudGVuY2VzID0gZmlsdGVyU2VudGVuY2VzKGRhdGEsIG9wdGlvbnMsIHBsYXllcnMpO1xyXG5cdFx0c2VudGVuY2VzID0gc2VsZWN0U2VudGVuY2VzKHNlbnRlbmNlcywgb3B0aW9ucywgcGxheWVycyk7XHJcblx0XHRzZW50ZW5jZXMgPSBpbml0U2VudGVuY2VzKHNlbnRlbmNlcywgb3B0aW9ucywgcGxheWVycyk7XHJcblx0XHRzZW50ZW5jZXMgPSBwdXRWaXJ1cyhzZW50ZW5jZXMpO1xyXG5cdFx0Y29uc29sZUluZm9ybWF0aW9uKHNlbnRlbmNlcywgcGxheWVycyk7XHJcblxyXG5cdFx0c2V0QmFyTGVuZ3RoKGdldExlbmd0aEJhcihzZW50ZW5jZXMubGVuZ3RoKSk7XHJcblx0XHRzZXRUZXh0KHNlbnRlbmNlc1swXS50ZXh0KTtcclxuXHRcdFxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBoYW5kbGVDbGljayhlLCBzZW50ZW5jZXMpKTtcclxuXHJcbiAgICAgICAgLypsZXQgblJhbmRvbVNlbnRlbmNlcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCk7XHJcblx0XHRzZXRUZXh0KGRhdGFbblJhbmRvbVNlbnRlbmNlc10udGV4dCk7Ki9cclxuXHJcblx0XHQvLyBUT0RPIDogKGlkw6llIGVuIHRzID0+IEZhaXJlIHJlZHVjZXIgZXQgaW50ZXJmYWNlIHBvdXIgbGVzIHBocmFzZXMgZHUganNvbiA6IGh0dHBzOi8veW91dHUuYmUvWjVpV3I2U3Jzajg/dD05MTgpXHJcblx0XHQvLyAoRmFpcmUgZGVzIGZvbmN0aW9ucyAoZW4gZGVob3JzIGR1IGNvbXBvc2FudHMgcG91ciBxdWUgw6dhIHNvaXQgY2xlYW4gKGp1c3RlIGF1IGRlc3N1cyBsw6ApKSlcclxuXHRcdC8vIC0gRmlsdHJlciBsZSBqc29uIGRhdGEgcG91ciBuZSBwcmVuZHJlIHF1ZSBsZXMgcGhyYXNlcyBxdWkgcmVzcGVjdGVudCBsZXMgb3B0aW9ucyAodGjDqG1lcy4uLilcclxuXHRcdC8vIC0gRmFpcmUgbGUgdGFibGVhdSBkZSBwaHJhc2VzICh1bmUgY2VydGFpbmUgbG9uZ3VldXIgZW4gZm9uY3Rpb24gZGUgbGEgbG9uZ3VldXIgZW4gb3B0aW9uKVxyXG5cdFx0Ly8gLSBSZW1wbGFjZXIgbGVzIG5vbXMgZGFucyBsZXMgcGhyYXNlcyAodGlyZXIgbGVzIG5vbXMgYXUgaGFzYXJkIHRvdXQgw6dhIHRvdXQgw6dhKVxyXG5cdFx0Ly8gLSBNZXR0cmUgbGVzIHZpcnVzIHF1ZWxxdWUgcGFydFxyXG5cdFx0Ly8gLSBNZXR0cmUgbGEgY29uc8OpcXVlbmNlIGp1c3RlIGFwcsOocyBwb3VyIGxlcyBjaG9peFxyXG5cdFx0Ly9cclxuXHRcdC8vIC0gUG91ciBsZXMgY2hvaXgsIGNlIHNlcmEgZGFucyBsZSBqZXUgZGUgcmVtcGxhY2VyIGxlIG5vbSBkZXMgZMOpdGFpbHMgZG9uYyBwYXMgZGFucyBjZXR0ZSBmb25jdGlvblxyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQgdGl0bGU9XCJTZWxlY3Rpb25uZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7c3R5bGVzLm1haW59YH0+XHJcblx0XHRcdFx0PExpbmsgaHJlZj1cIi9zZWxlY3QvcGxheWVyc1wiPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtzdHlsZXMucXVpdEJ0bn0+PC9hPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcblx0XHRcdFx0XHR7dGl0bGUgfHwgXCJcIn1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdHt0ZXh0IHx8IFwiQ2hhcmdlbWVudC4uLlwifVxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhckNvbnRhaW5lcn0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5iYXJWYWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e3dpZHRoOiBgJHtiYXJMZW5ndGh9JWAsIGJhY2tncm91bmRDb2xvcjogXCIjODRGRkI5XCJ9fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheTsiXSwic291cmNlUm9vdCI6IiJ9