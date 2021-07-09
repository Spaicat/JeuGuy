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

    var initGorgees = function initGorgees(text) {
      var gorgeesFinded = text.match(regexToFind.gorgees) || [];
      gorgeesFinded.forEach(function (elt) {
        var amountIndex = amount[parseInt(elt.charAt(2))];
        console.warn(text);
        text = text.replaceAll(elt, amountIndex);
        console.log(text);
      });
    };

    initGorgees(sentence.text);
    initGorgees(sentence.details);
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
          lineNumber: 328,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "title",
        children: title || ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: text || "Chargement..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 333,
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
            lineNumber: 338,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 325,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlSW5mb3JtYXRpb24iLCJzZW50ZW5jZXMiLCJwbGF5ZXJzIiwiY3NzU3F1YXJlIiwiY3NzU21hbGwiLCJjb25zb2xlIiwiZ3JvdXBDb2xsYXBzZWQiLCJsZW5ndGgiLCJmb3JFYWNoIiwicGxheWVyIiwibG9nIiwiZ2VuZGVyIiwibmFtZSIsImdyb3VwRW5kIiwiZmlsdGVyIiwieCIsInR5cGUiLCJzZW50ZW5jZSIsImNzc1RoZW1lIiwidGhlbWUiLCJzZW50ZW5jZVR5cGUiLCJzcGFjZVR5cGUiLCJ0ZXh0IiwidGFibGUiLCJyZWdleFRvRmluZCIsInN0cmluZ1RvRmluZCIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRBbW91bnQiLCJkaWZmaWN1bHR5IiwiZ2V0TGVuZ3RoU2VudGVuY2VzIiwiZHVyYXRpb24iLCJmaWx0ZXJTZW50ZW5jZXMiLCJvcHRpb25zIiwibmJGZW1hbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJuYkdlbmRlciIsImdldE5iRWx0IiwicmVnZXgiLCJtYXRjaCIsImVsdCIsIm5iRWx0RmluZGVkIiwibmV1dHJhbCIsIm5iRWx0TWFsZUZpbmRlZCIsIm1hbGUiLCJuYkVsdEZlbWFsZUZpbmRlZCIsImZlbWFsZSIsImVub3VnaEVsdEhvbW1lIiwiZW5vdWdoRWx0RmVtbWUiLCJlbm91Z2hQbGF5ZXIiLCJ0aGVtZXMiLCJpbmNsdWRlcyIsInNlbGVjdFNlbnRlbmNlcyIsInNlbnRlbmNlc1NlbGVjdGVkIiwibGVuZ3RoU2VudGVuY2VzIiwibmJTZW50ZW5jZXNQaWNrZWQiLCJuYlZpcnVzUGlja2VkIiwiaWRTZW50ZW5jZXNQaWNrZWQiLCJ0b3RhbCIsIm5iUmFuZG9tU2VudGVuY2UiLCJwdXNoIiwic2VudGVuY2VQaWNrZWQiLCJ2aXJ1cyIsImluaXRTZW50ZW5jZXMiLCJhbW91bnQiLCJtYXAiLCJwbGF5ZXJzTm90UGlja2VkIiwic2xpY2UiLCJpbml0UGxheWVycyIsInN0cmluZ01hdGNoIiwiaW5kZXhPZiIsInBsYXllclRvUGljayIsInBsYXllclBpY2tlZCIsInNwbGljZSIsInJlcGxhY2UiLCJkZXRhaWxzIiwiaW5pdEdvcmdlZXMiLCJnb3JnZWVzRmluZGVkIiwiZ29yZ2VlcyIsImFtb3VudEluZGV4IiwicGFyc2VJbnQiLCJjaGFyQXQiLCJ3YXJuIiwicmVwbGFjZUFsbCIsInB1dFZpcnVzIiwibmV3U2VudGVuY2VzIiwiaSIsImluZGV4UmFuZFZpcnVzIiwic2VudGVuY2VWaXJ1cyIsIlBsYXkiLCJsb2NhbE9wdGlvbnMiLCJsb2NhbFBsYXllcnMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJzZXRUZXh0IiwidGl0bGUiLCJzZXRUaXRsZSIsImJhckxlbmd0aCIsInNldEJhckxlbmd0aCIsImN1cnJlbnRTZW50ZW5jZSIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWVudFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicmVsb2FkIiwiZ2V0TGVuZ3RoQmFyIiwic2VudGVuY2VzTGVuZ3RoIiwidXNlRWZmZWN0IiwiZGF0YSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdHlsZXMiLCJxdWl0QnRuIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxTQUFELEVBQVlDLE9BQVosRUFBd0I7QUFDbEQsTUFBSUMsU0FBUyxHQUFHLDBEQUFoQjtBQUNBLE1BQUlDLFFBQVEsR0FBRyxrQkFBZjtBQUNBQyxTQUFPLENBQUNDLGNBQVIsc0JBQXFDSixPQUFPLENBQUNLLE1BQTdDLGtCQUEyREosU0FBM0Q7QUFDQUQsU0FBTyxDQUFDTSxPQUFSLENBQWdCLFVBQUFDLE1BQU0sRUFBSTtBQUN6QkosV0FBTyxDQUFDSyxHQUFSLGFBQWlCRCxNQUFNLENBQUNFLE1BQXhCLGdCQUFvQ0YsTUFBTSxDQUFDRyxJQUEzQyxhQUNHVCxTQURILDhDQUVBLEVBRkE7QUFHQSxHQUpEO0FBS0FFLFNBQU8sQ0FBQ1EsUUFBUjtBQUNBUixTQUFPLENBQUNDLGNBQVIsc0JBQXFDTCxTQUFTLENBQUNNLE1BQS9DLG9CQUErRE4sU0FBUyxDQUFDYSxNQUFWLENBQWlCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLElBQUYsSUFBVSxPQUFkO0FBQUEsR0FBbEIsRUFBeUNULE1BQXhHLHdCQUNHSixTQURILDhDQUVBLEVBRkEsWUFHR0EsU0FISDtBQUlBRixXQUFTLENBQUNPLE9BQVYsQ0FBa0IsVUFBQVMsUUFBUSxFQUFJO0FBQzdCLFFBQUlDLFFBQVEsR0FBRyxFQUFmOztBQUNBLFlBQVFELFFBQVEsQ0FBQ0UsS0FBakI7QUFDQyxXQUFLLE9BQUw7QUFDQ0QsZ0JBQVEsR0FBRyx1Q0FBWDtBQUNBOztBQUNELFdBQUssS0FBTDtBQUNDQSxnQkFBUSxHQUFHLDBDQUFYO0FBQ0E7O0FBQ0Q7QUFDQ0EsZ0JBQVEsR0FBRyx3Q0FBWDtBQUNBO0FBVEY7O0FBV0EsUUFBSUUsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUNBLFFBQUlKLFFBQVEsQ0FBQ0QsSUFBVCxJQUFpQixRQUFyQixFQUErQjtBQUM5Qkksa0JBQVksR0FBR0gsUUFBUSxDQUFDRCxJQUF4QjtBQUNBSyxlQUFTLEdBQUcsR0FBWjtBQUNBOztBQUNEaEIsV0FBTyxDQUFDQyxjQUFSLGFBQTRCYyxZQUE1QixlQUE2Q0MsU0FBN0MsZUFBMkRKLFFBQVEsQ0FBQ0UsS0FBcEUsZ0JBQStFRixRQUFRLENBQUNLLElBQXhGLGFBQ0duQixTQURILG1EQUNxREMsUUFEckQsYUFFR0EsUUFGSCxhQUdHRCxTQUhILGNBR2dCZSxRQUhoQixjQUc0QmQsUUFINUIsYUFJR0EsUUFKSDtBQUtBQyxXQUFPLENBQUNrQixLQUFSLENBQWNOLFFBQWQ7QUFDQVosV0FBTyxDQUFDUSxRQUFSO0FBQ0EsR0ExQkQ7QUEyQkFSLFNBQU8sQ0FBQ1EsUUFBUjtBQUNBLENBMUNEOztBQTZDQSxJQUFJVyxXQUFXLEdBQUc7QUFDakIsYUFBVyxVQURNO0FBRWpCLFVBQVEsV0FGUztBQUdqQixZQUFVLFdBSE87QUFJakIsYUFBVztBQUpNLENBQWxCO0FBTUEsSUFBSUMsWUFBWSxHQUFHO0FBQ2xCLGFBQVcsT0FETztBQUVsQixVQUFRLFFBRlU7QUFHbEIsWUFBVTtBQUhRLENBQW5CO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNDLFNBQVNDLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM3QkQsS0FBRyxHQUFHRSxJQUFJLENBQUNDLElBQUwsQ0FBVUgsR0FBVixDQUFOO0FBQ0FDLEtBQUcsR0FBR0MsSUFBSSxDQUFDRSxLQUFMLENBQVdILEdBQVgsQ0FBTjtBQUNBLFNBQU9DLElBQUksQ0FBQ0UsS0FBTCxDQUFXRixJQUFJLENBQUNHLE1BQUwsTUFBaUJKLEdBQUcsR0FBR0QsR0FBTixHQUFZLENBQTdCLENBQVgsSUFBOENBLEdBQXJEO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQyxJQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxVQUFELEVBQWdCO0FBQ2xDLFNBQU8sQ0FDTixDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLFdBQTNCLEVBQXdDLFdBQXhDLENBRE0sRUFFTixDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLFdBQTNCLEVBQXdDLFdBQXhDLENBRk0sRUFHTixDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLFdBQTNCLEVBQXdDLFdBQXhDLENBSE0sRUFJTEEsVUFKSyxDQUFQO0FBS0EsQ0FOQTtBQVFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3hDLFNBQU87QUFDTixhQUFTLEtBQUssS0FBR0EsUUFEWDtBQUVOLGFBQVMsSUFBSSxJQUFFQTtBQUZULEdBQVA7QUFJQSxDQUxEO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3BDLFNBQUQsRUFBWXFDLE9BQVosRUFBcUJwQyxPQUFyQixFQUFpQztBQUN4RCxNQUFJcUMsUUFBUSxHQUFHckMsT0FBTyxDQUFDc0MsTUFBUixDQUFlLFVBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLFdBQWNBLEdBQUcsQ0FBQy9CLE1BQUosS0FBZSxHQUFmLEdBQXFCLEVBQUU4QixHQUF2QixHQUE2QkEsR0FBM0M7QUFBQSxHQUFmLEVBQStELENBQS9ELENBQWY7QUFDQSxNQUFJRSxRQUFRLEdBQUc7QUFDZCxjQUFVSixRQURJO0FBRWQsWUFBUXJDLE9BQU8sQ0FBQ0ssTUFBUixHQUFpQmdDO0FBRlgsR0FBZixDQUZ3RCxDQU94RDs7QUFDQSxNQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVF2QixJQUFSLEVBQWlCO0FBQ2pDLFdBQU8sQ0FBQ0EsSUFBSSxDQUFDd0IsS0FBTCxDQUFXRCxLQUFYLEtBQXFCLEVBQXRCLEVBQTBCdEMsTUFBakM7QUFDQSxHQUZEOztBQUlBLFNBQU9OLFNBQVMsQ0FBQ2EsTUFBVixDQUFpQixVQUFDaUMsR0FBRCxFQUFTO0FBQ2hDLFFBQUlDLFdBQVcsR0FBR0osUUFBUSxDQUFDcEIsV0FBVyxDQUFDeUIsT0FBYixFQUFzQkYsR0FBRyxDQUFDekIsSUFBMUIsQ0FBMUI7QUFDQSxRQUFJNEIsZUFBZSxHQUFHTixRQUFRLENBQUNwQixXQUFXLENBQUMyQixJQUFiLEVBQW1CSixHQUFHLENBQUN6QixJQUF2QixDQUE5QjtBQUNBLFFBQUk4QixpQkFBaUIsR0FBR1IsUUFBUSxDQUFDcEIsV0FBVyxDQUFDNkIsTUFBYixFQUFxQk4sR0FBRyxDQUFDekIsSUFBekIsQ0FBaEMsQ0FIZ0MsQ0FLaEM7O0FBQ0EsUUFBSWdDLGNBQWMsR0FBR1gsUUFBUSxDQUFDUSxJQUFULElBQWlCRCxlQUF0QztBQUNBLFFBQUlLLGNBQWMsR0FBR1osUUFBUSxDQUFDVSxNQUFULElBQW1CRCxpQkFBeEM7QUFDQSxRQUFJSSxZQUFZLEdBQUd0RCxPQUFPLENBQUNLLE1BQVIsSUFBbUJ5QyxXQUFXLEdBQUdFLGVBQWQsR0FBZ0NFLGlCQUF0RTtBQUVBLFdBQU9kLE9BQU8sQ0FBQ21CLE1BQVIsQ0FBZUMsUUFBZixDQUF3QlgsR0FBRyxDQUFDNUIsS0FBNUIsS0FBc0NtQyxjQUF0QyxJQUF3REMsY0FBeEQsSUFBMEVDLFlBQWpGO0FBQ0EsR0FYTSxDQUFQO0FBWUEsQ0F4QkQ7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQzFELFNBQUQsRUFBWXFDLE9BQVosRUFBcUJwQyxPQUFyQixFQUFpQztBQUN4RCxNQUFJMEQsaUJBQWlCLEdBQUcsRUFBeEI7QUFDQSxNQUFJQyxlQUFlLEdBQUcxQixrQkFBa0IsQ0FBQ0csT0FBTyxDQUFDRixRQUFULENBQXhDO0FBRUEsTUFBSTBCLGlCQUFpQixHQUFHLENBQXhCO0FBQ0csTUFBSUMsYUFBYSxHQUFHLENBQXBCO0FBQ0gsTUFBSUMsaUJBQWlCLEdBQUcsRUFBeEI7O0FBRUEsU0FBT0YsaUJBQWlCLEdBQUdELGVBQWUsQ0FBQ0ksS0FBcEMsSUFBNkNELGlCQUFpQixDQUFDekQsTUFBbEIsR0FBMkJOLFNBQVMsQ0FBQ00sTUFBekYsRUFBaUc7QUFDaEc7QUFDQSxRQUFJMkQsZ0JBQWdCLEdBQUdyQyxJQUFJLENBQUNFLEtBQUwsQ0FBV0YsSUFBSSxDQUFDRyxNQUFMLEtBQWMvQixTQUFTLENBQUNNLE1BQW5DLENBQXZCOztBQUNBLFFBQUksQ0FBQ3lELGlCQUFpQixDQUFDTixRQUFsQixDQUEyQlEsZ0JBQTNCLENBQUwsRUFBbUQ7QUFDbERGLHVCQUFpQixDQUFDRyxJQUFsQixDQUF1QkQsZ0JBQXZCO0FBRUEsVUFBSUUsY0FBYyxHQUFHbkUsU0FBUyxDQUFDaUUsZ0JBQUQsQ0FBOUI7O0FBRUEsVUFBSUUsY0FBYyxDQUFDcEQsSUFBZixJQUF1QixPQUEzQixFQUFvQztBQUNuQyxZQUFJK0MsYUFBYSxHQUFHRixlQUFlLENBQUNRLEtBQXBDLEVBQTJDO0FBQzFDVCwyQkFBaUIsQ0FBQ08sSUFBbEIsQ0FBdUJDLGNBQXZCO0FBQ0FOLDJCQUFpQjtBQUNqQkMsdUJBQWE7QUFDYjtBQUNELE9BTkQsTUFPSztBQUNKSCx5QkFBaUIsQ0FBQ08sSUFBbEIsQ0FBdUJDLGNBQXZCO0FBQ0FOLHlCQUFpQjtBQUNqQjtBQUNEO0FBQ0Q7O0FBRUQsU0FBT0YsaUJBQVA7QUFDQSxDQS9CRDs7QUFpQ0EsSUFBTVUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDckUsU0FBRCxFQUFZcUMsT0FBWixFQUFxQnBDLE9BQXJCLEVBQWlDO0FBQ3RELE1BQUlxRSxNQUFNLEdBQUd0QyxTQUFTLENBQUNLLE9BQU8sQ0FBQ0osVUFBVCxDQUF0QjtBQUNBLFNBQU9qQyxTQUFTLENBQUN1RSxHQUFWLENBQWMsVUFBQ3ZELFFBQUQsRUFBYztBQUNsQztBQUNBLFFBQUl3RCxnQkFBZ0IsR0FBR3ZFLE9BQU8sQ0FBQ3dFLEtBQVIsRUFBdkI7O0FBRUEsUUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsV0FBRCxFQUFpQjtBQUNwQyxhQUFPM0QsUUFBUSxDQUFDSyxJQUFULENBQWN1RCxPQUFkLENBQXNCRCxXQUF0QixJQUFxQyxDQUFDLENBQTdDLEVBQWdEO0FBQy9DO0FBQ0EsWUFBSUUsWUFBWSxTQUFoQjs7QUFDQSxnQkFBUUYsV0FBUjtBQUNDLGVBQUtuRCxZQUFZLENBQUM0QixNQUFsQjtBQUNDeUIsd0JBQVksR0FBR0wsZ0JBQWdCLENBQUMzRCxNQUFqQixDQUF3QixVQUFBTCxNQUFNO0FBQUEscUJBQUlBLE1BQU0sQ0FBQ0UsTUFBUCxJQUFpQixHQUFyQjtBQUFBLGFBQTlCLENBQWY7QUFDQTs7QUFDRCxlQUFLYyxZQUFZLENBQUMwQixJQUFsQjtBQUNDMkIsd0JBQVksR0FBR0wsZ0JBQWdCLENBQUMzRCxNQUFqQixDQUF3QixVQUFBTCxNQUFNO0FBQUEscUJBQUlBLE1BQU0sQ0FBQ0UsTUFBUCxJQUFpQixHQUFyQjtBQUFBLGFBQTlCLENBQWY7QUFDQTs7QUFDRDtBQUNDbUUsd0JBQVksR0FBR0wsZ0JBQWY7QUFSRixTQUgrQyxDQWMvQzs7O0FBQ0EsWUFBSU0sWUFBWSxHQUFHRCxZQUFZLENBQUNqRCxJQUFJLENBQUNFLEtBQUwsQ0FBV0YsSUFBSSxDQUFDRyxNQUFMLEtBQWM4QyxZQUFZLENBQUN2RSxNQUF0QyxDQUFELENBQS9CLENBZitDLENBaUIvQzs7QUFDQWtFLHdCQUFnQixDQUFDTyxNQUFqQixDQUF3QlAsZ0JBQWdCLENBQUNJLE9BQWpCLENBQXlCRSxZQUF6QixDQUF4QixFQUFnRSxDQUFoRSxFQWxCK0MsQ0FvQi9DOztBQUNBOUQsZ0JBQVEsQ0FBQ0ssSUFBVCxHQUFnQkwsUUFBUSxDQUFDSyxJQUFULENBQWMyRCxPQUFkLENBQXNCTCxXQUF0QixFQUFtQ0csWUFBWSxDQUFDbkUsSUFBaEQsQ0FBaEIsQ0FyQitDLENBdUJuQzs7QUFDQSxZQUFJSyxRQUFRLENBQUNELElBQVQsSUFBaUIsT0FBakIsSUFBNEJDLFFBQVEsQ0FBQ2lFLE9BQVQsQ0FBaUJMLE9BQWpCLENBQXlCRCxXQUF6QixJQUF3QyxDQUFDLENBQXpFLEVBQTRFO0FBQ3hFO0FBQ0EzRCxrQkFBUSxDQUFDaUUsT0FBVCxHQUFtQmpFLFFBQVEsQ0FBQ2lFLE9BQVQsQ0FBaUJELE9BQWpCLENBQXlCTCxXQUF6QixFQUFzQ0csWUFBWSxDQUFDbkUsSUFBbkQsQ0FBbkI7QUFDSDtBQUNiO0FBQ0QsS0E5QkQ7O0FBZ0NBK0QsZUFBVyxDQUFDbEQsWUFBWSxDQUFDd0IsT0FBZCxDQUFYO0FBQ0EwQixlQUFXLENBQUNsRCxZQUFZLENBQUMwQixJQUFkLENBQVg7QUFDQXdCLGVBQVcsQ0FBQ2xELFlBQVksQ0FBQzRCLE1BQWQsQ0FBWDs7QUFFQSxRQUFNOEIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQzdELElBQUQsRUFBVTtBQUM3QixVQUFJOEQsYUFBYSxHQUFHOUQsSUFBSSxDQUFDd0IsS0FBTCxDQUFXdEIsV0FBVyxDQUFDNkQsT0FBdkIsS0FBbUMsRUFBdkQ7QUFDQUQsbUJBQWEsQ0FBQzVFLE9BQWQsQ0FBc0IsVUFBQ3VDLEdBQUQsRUFBUztBQUM5QixZQUFJdUMsV0FBVyxHQUFHZixNQUFNLENBQUNnQixRQUFRLENBQUN4QyxHQUFHLENBQUN5QyxNQUFKLENBQVcsQ0FBWCxDQUFELENBQVQsQ0FBeEI7QUFDQW5GLGVBQU8sQ0FBQ29GLElBQVIsQ0FBYW5FLElBQWI7QUFDQUEsWUFBSSxHQUFHQSxJQUFJLENBQUNvRSxVQUFMLENBQWdCM0MsR0FBaEIsRUFBcUJ1QyxXQUFyQixDQUFQO0FBQ0FqRixlQUFPLENBQUNLLEdBQVIsQ0FBWVksSUFBWjtBQUNBLE9BTEQ7QUFNQSxLQVJEOztBQVVBNkQsZUFBVyxDQUFDbEUsUUFBUSxDQUFDSyxJQUFWLENBQVg7QUFDQTZELGVBQVcsQ0FBQ2xFLFFBQVEsQ0FBQ2lFLE9BQVYsQ0FBWDtBQUVBLFdBQU9qRSxRQUFQO0FBQ0EsR0F0RE0sQ0FBUDtBQXVEQSxDQXpERDtBQTJEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0MsSUFBTTBFLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUMxRixTQUFELEVBQWU7QUFDaEMsTUFBSTJGLFlBQVksR0FBRzNGLFNBQVMsQ0FBQ3lFLEtBQVYsRUFBbkI7O0FBRUEsT0FBSyxJQUFJbUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzVGLFNBQVMsQ0FBQ00sTUFBOUIsRUFBc0NzRixDQUFDLEVBQXZDLEVBQTJDO0FBQzFDLFFBQUk1RixTQUFTLENBQUM0RixDQUFELENBQVQsQ0FBYTdFLElBQWIsSUFBcUIsT0FBekIsRUFBa0M7QUFDakMsVUFBTThFLGNBQWMsR0FBR3BFLFlBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFuQyxDQURpQyxDQUNVOztBQUMzQyxVQUFNcUUsYUFBYSxHQUFHO0FBQ3JCLGdCQUFROUYsU0FBUyxDQUFDNEYsQ0FBRCxDQUFULENBQWFYLE9BREE7QUFFckIsaUJBQVNqRixTQUFTLENBQUM0RixDQUFELENBQVQsQ0FBYTFFLEtBRkQ7QUFHckIsZ0JBQVE7QUFIYSxPQUF0QjtBQUtBeUUsa0JBQVksQ0FBQ1osTUFBYixDQUFvQmEsQ0FBQyxHQUFDQyxjQUF0QixFQUFzQyxDQUF0QyxFQUF5Q0MsYUFBekM7QUFDQTtBQUNEOztBQUVELFNBQU9ILFlBQVA7QUFDQSxDQWhCQTs7QUFtQkQsU0FBU0ksSUFBVCxHQUFnQjtBQUFBOztBQUNmLE1BQUlDLFlBQVksR0FBRyxJQUFuQjtBQUNBLE1BQUlDLFlBQVksR0FBRyxJQUFuQjs7QUFDQSxZQUFxQjtBQUNwQkQsZ0JBQVksR0FBR0UsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixDQUFYLENBQWY7QUFDQUosZ0JBQVksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixDQUFYLENBQWY7QUFDQTs7QUFDRCxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQVBlLGtCQVFTQywrQ0FBUSxDQUFDLEVBQUQsQ0FSakI7QUFBQSxNQVFSbkYsSUFSUTtBQUFBLE1BUUZvRixPQVJFOztBQUFBLG1CQVNXRCwrQ0FBUSxDQUFDLEVBQUQsQ0FUbkI7QUFBQSxNQVNSRSxLQVRRO0FBQUEsTUFTREMsUUFUQzs7QUFBQSxtQkFVR0gsK0NBQVEsQ0FBQ1AsWUFBRCxDQVZYO0FBQUEsTUFVUmhHLE9BVlE7O0FBQUEsbUJBV0d1RywrQ0FBUSxDQUFDUixZQUFELENBWFg7QUFBQSxNQVdSM0QsT0FYUTs7QUFBQSxtQkFZbUJtRSwrQ0FBUSxDQUFDLENBQUQsQ0FaM0I7QUFBQSxNQVlSSSxTQVpRO0FBQUEsTUFZR0MsWUFaSDs7QUFjWixNQUFJQyxlQUFlLEdBQUcsQ0FBdEI7O0FBRUgsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFRaEgsU0FBUixFQUFzQjtBQUN6Q2dILFNBQUssQ0FBQ0MsY0FBTixHQUR5QyxDQUV6Qzs7QUFDQSxRQUFJRCxLQUFLLENBQUNFLE9BQU4sR0FBZ0JDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixDQUF4QyxFQUEyQztBQUMxQyxVQUFJTixlQUFlLEdBQUcsQ0FBdEIsRUFBeUI7QUFDeEJBLHVCQUFlO0FBQ2Y7QUFDRCxLQUpELENBS0E7QUFMQSxTQU1LO0FBQ0osWUFBSUEsZUFBZSxHQUFHOUcsU0FBUyxDQUFDTSxNQUFWLEdBQWlCLENBQXZDLEVBQTBDO0FBQ3pDd0cseUJBQWU7QUFDZixTQUZELE1BR0s7QUFDSlIsZ0JBQU0sQ0FBQ2UsTUFBUCxDQUFjLE9BQWQ7QUFDQTtBQUNEOztBQUNEWixXQUFPLENBQUN6RyxTQUFTLENBQUM4RyxlQUFELENBQVQsQ0FBMkJ6RixJQUE1QixDQUFQO0FBQ0F3RixnQkFBWSxDQUFDUyxZQUFZLENBQUN0SCxTQUFTLENBQUNNLE1BQVgsQ0FBYixDQUFaO0FBQ0EsR0FuQkQ7O0FBcUJBLE1BQU1nSCxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxlQUFELEVBQXFCO0FBQ3pDLFdBQU9ULGVBQWUsR0FBQyxHQUFoQixHQUFzQlMsZUFBN0I7QUFDQSxHQUZEOztBQUlBQyxrREFBUyxDQUFDLFlBQU07QUFDZixRQUFJeEgsU0FBUyxHQUFHb0MsZUFBZSxDQUFDcUYsc0RBQUQsRUFBT3BGLE9BQVAsRUFBZ0JwQyxPQUFoQixDQUEvQjtBQUNBRCxhQUFTLEdBQUcwRCxlQUFlLENBQUMxRCxTQUFELEVBQVlxQyxPQUFaLEVBQXFCcEMsT0FBckIsQ0FBM0I7QUFDQUQsYUFBUyxHQUFHcUUsYUFBYSxDQUFDckUsU0FBRCxFQUFZcUMsT0FBWixFQUFxQnBDLE9BQXJCLENBQXpCO0FBQ0FELGFBQVMsR0FBRzBGLFFBQVEsQ0FBQzFGLFNBQUQsQ0FBcEI7QUFDQUQsc0JBQWtCLENBQUNDLFNBQUQsRUFBWUMsT0FBWixDQUFsQjtBQUVBNEcsZ0JBQVksQ0FBQ1MsWUFBWSxDQUFDdEgsU0FBUyxDQUFDTSxNQUFYLENBQWIsQ0FBWjtBQUNBbUcsV0FBTyxDQUFDekcsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhcUIsSUFBZCxDQUFQO0FBRUFxRyxZQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNDLENBQUQ7QUFBQSxhQUFPYixXQUFXLENBQUNhLENBQUQsRUFBSTVILFNBQUosQ0FBbEI7QUFBQSxLQUFuQztBQUVNO0FBQ1I7QUFFRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXhCUSxFQXdCTixFQXhCTSxDQUFUO0FBMEJBLHNCQUNDLDhEQUFDLHVEQUFEO0FBQVEsU0FBSyxFQUFDLGNBQWQ7QUFBQSwyQkFDQztBQUFLLGVBQVMsWUFBSzZILDBFQUFMLGNBQXlCQSxxRUFBekIsQ0FBZDtBQUFBLDhCQUNDLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLGlCQUFYO0FBQUEsK0JBQ0M7QUFBRyxtQkFBUyxFQUFFQSx3RUFBY0M7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUlDO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUEsa0JBQ0VwQixLQUFLLElBQUk7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkQsZUFPQztBQUFBLGtCQUNFckYsSUFBSSxJQUFJO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBELGVBVUM7QUFBSyxpQkFBUyxFQUFFd0csNkVBQWhCO0FBQUEsK0JBQ0M7QUFBSyxtQkFBUyxFQUFFQSxvRUFBaEI7QUFBQSxpQ0FDQztBQUNDLHFCQUFTLEVBQUVBLHlFQURaO0FBRUMsaUJBQUssRUFBRTtBQUFDRSxtQkFBSyxZQUFLbkIsU0FBTCxNQUFOO0FBQXlCb0IsNkJBQWUsRUFBRTtBQUExQztBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXdCQTs7R0EzRlFqQyxJO1VBT09RLGtEOzs7S0FQUFIsSTtBQTZGVCwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wbGF5LjU5ZTRhMWNhOWU5ODE4ZGE1OTQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9QbGF5Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9zZW50ZW5jZXNfdGVzdC5qc29uJztcclxuXHJcbmNvbnN0IGNvbnNvbGVJbmZvcm1hdGlvbiA9IChzZW50ZW5jZXMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgY3NzU3F1YXJlID0gXCJwYWRkaW5nOiAzcHggNXB4OyBib3JkZXItcmFkaXVzOiA1cHg7IGZvbnQtd2VpZ2h0OiBib2xkO1wiO1xyXG5cdGxldCBjc3NTbWFsbCA9IFwiZm9udC1zaXplOiAxMHB4O1wiO1xyXG5cdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYCVjSm91ZXVycyAoJHtwbGF5ZXJzLmxlbmd0aH0pYCwgYCR7Y3NzU3F1YXJlfSBjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2ApO1xyXG5cdHBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coYCVjJHtwbGF5ZXIuZ2VuZGVyfSVjICR7cGxheWVyLm5hbWV9YCxcclxuXHRcdGAke2Nzc1NxdWFyZX0gY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtgLFxyXG5cdFx0XCJcIik7XHJcblx0fSk7XHJcblx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYCVjUGhyYXNlcyAoJHtzZW50ZW5jZXMubGVuZ3RofSklYyAlYygke3NlbnRlbmNlcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gXCJ2aXJ1c1wiKS5sZW5ndGh9IHZpcnVzKWAsXHJcblx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2AsXHJcblx0XCJcIixcclxuXHRgJHtjc3NTcXVhcmV9IGNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogcmVkO2ApO1xyXG5cdHNlbnRlbmNlcy5mb3JFYWNoKHNlbnRlbmNlID0+IHtcclxuXHRcdGxldCBjc3NUaGVtZSA9IFwiXCI7XHJcblx0XHRzd2l0Y2ggKHNlbnRlbmNlLnRoZW1lKSB7XHJcblx0XHRcdGNhc2UgXCJzcG9ydFwiOlxyXG5cdFx0XHRcdGNzc1RoZW1lID0gXCJjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IGJsdWU7XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJob3RcIjpcclxuXHRcdFx0XHRjc3NUaGVtZSA9IFwiY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNmJmO1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGNzc1RoZW1lID0gXCJjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0bGV0IHNlbnRlbmNlVHlwZSA9IFwiXCI7XHJcblx0XHRsZXQgc3BhY2VUeXBlID0gXCJcIjtcclxuXHRcdGlmIChzZW50ZW5jZS50eXBlICE9IFwibm9ybWFsXCIpIHtcclxuXHRcdFx0c2VudGVuY2VUeXBlID0gc2VudGVuY2UudHlwZTtcclxuXHRcdFx0c3BhY2VUeXBlID0gXCIgXCI7XHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGAlYyR7c2VudGVuY2VUeXBlfSVjJHtzcGFjZVR5cGV9JWMke3NlbnRlbmNlLnRoZW1lfSVjICR7c2VudGVuY2UudGV4dH1gLFxyXG5cdFx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IHJlZDsgJHtjc3NTbWFsbH1gLFxyXG5cdFx0YCR7Y3NzU21hbGx9YCxcclxuXHRcdGAke2Nzc1NxdWFyZX0gJHtjc3NUaGVtZX0gJHtjc3NTbWFsbH1gLFxyXG5cdFx0YCR7Y3NzU21hbGx9YCk7XHJcblx0XHRjb25zb2xlLnRhYmxlKHNlbnRlbmNlKTtcclxuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHR9KTtcclxuXHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuXHJcblxyXG5sZXQgcmVnZXhUb0ZpbmQgPSB7XHJcblx0XCJuZXV0cmFsXCI6IC9cXFtub21cXF0vZyxcclxuXHRcIm1hbGVcIjogL1xcW25vbU1cXF0vZyxcclxuXHRcImZlbWFsZVwiOiAvXFxbbm9tRlxcXS9nLFxyXG5cdFwiZ29yZ2Vlc1wiOiAvXFxbZ1swLTNdXFxdL2csXHJcbn07XHJcbmxldCBzdHJpbmdUb0ZpbmQgPSB7XHJcblx0XCJuZXV0cmFsXCI6IFwiW25vbV1cIixcclxuXHRcIm1hbGVcIjogXCJbbm9tTV1cIixcclxuXHRcImZlbWFsZVwiOiBcIltub21GXVwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbnZvaWUgdW4gZW50aWVyIGFsw6lhdG9pcmUgZW50cmUgbWluIGV0IG1heCBbbWluLCBtYXhdXHJcbiAqIEBwYXJhbSAge251bWJlcn0gbWluIGxhIHZhbGV1ciBtaW5pbXVtIHF1ZSBwZXV0IGF0dGVpbmRyZSBsJ2VudGllclxyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heCBsYSB2YWxldXIgbWF4aW11bSBxdWUgcGV1dCBhdHRlaW5kcmUgbCdlbnRpZXJcclxuICogQHJldHVybiB7bnVtYmVyfSBMJ2VudGllciB0aXLDqSBhdSBoYXNhcmRcclxuICovXHJcbiBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcclxuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtudW1iZXJ9IGRpZmZpY3VsdHkgXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG4gY29uc3QgZ2V0QW1vdW50ID0gKGRpZmZpY3VsdHkpID0+IHtcclxuXHRyZXR1cm4gW1xyXG5cdFx0W1wiMiBnb3Jnw6llc1wiLCBcIjMgZ29yZ8OpZXNcIiwgXCI0IGdvcmfDqWVzXCIsIFwiNiBnb3Jnw6llc1wiXSxcclxuXHRcdFtcIjMgZ29yZ8OpZXNcIiwgXCI0IGdvcmfDqWVzXCIsIFwiNiBnb3Jnw6llc1wiLCBcIjkgZ29yZ8OpZXNcIl0sXHJcblx0XHRbXCI0IGdvcmfDqWVzXCIsIFwiNiBnb3Jnw6llc1wiLCBcIjggZ29yZ8OpZXNcIiwgXCIxIGN1bCBzZWNcIl0sXHJcblx0XVtkaWZmaWN1bHR5XTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbnZvaWUgbGUgbm9tYnJlIGRlIHBocmFzZXMgw6AgYWZmaWNoZXJcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBOb21icmUgZGUgcGhyYXNlc1xyXG4gKi9cclxuY29uc3QgZ2V0TGVuZ3RoU2VudGVuY2VzID0gKGR1cmF0aW9uKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdFwidG90YWxcIjogMjAgKyAxNSpkdXJhdGlvbixcclxuXHRcdFwidmlydXNcIjogMiArIDIqZHVyYXRpb25cclxuXHR9O1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IHNlbnRlbmNlc1xyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBvcHRpb25zIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBwbGF5ZXJzIFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0W119IFxyXG4gKi9cclxuY29uc3QgZmlsdGVyU2VudGVuY2VzID0gKHNlbnRlbmNlcywgb3B0aW9ucywgcGxheWVycykgPT4ge1xyXG5cdGxldCBuYkZlbWFsZSA9IHBsYXllcnMucmVkdWNlKChhY2MsIGN1cikgPT4gY3VyLmdlbmRlciA9PT0gXCJGXCIgPyArK2FjYyA6IGFjYywgMCk7XHJcblx0bGV0IG5iR2VuZGVyID0ge1xyXG5cdFx0XCJmZW1hbGVcIjogbmJGZW1hbGUsXHJcblx0XHRcIm1hbGVcIjogcGxheWVycy5sZW5ndGggLSBuYkZlbWFsZVxyXG5cdH07XHJcblxyXG5cdC8vTm9tYnJlIGQnw6lsw6ltZW50IHJlZ2V4IHRyb3V2w6kgZGFucyBsYSBwaHJhc2VcclxuXHRjb25zdCBnZXROYkVsdCA9IChyZWdleCwgdGV4dCkgPT4ge1xyXG5cdFx0cmV0dXJuICh0ZXh0Lm1hdGNoKHJlZ2V4KSB8fCBbXSkubGVuZ3RoO1xyXG5cdH07XHJcblx0XHJcblx0cmV0dXJuIHNlbnRlbmNlcy5maWx0ZXIoKGVsdCkgPT4ge1xyXG5cdFx0bGV0IG5iRWx0RmluZGVkID0gZ2V0TmJFbHQocmVnZXhUb0ZpbmQubmV1dHJhbCwgZWx0LnRleHQpO1xyXG5cdFx0bGV0IG5iRWx0TWFsZUZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLm1hbGUsIGVsdC50ZXh0KTtcclxuXHRcdGxldCBuYkVsdEZlbWFsZUZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLmZlbWFsZSwgZWx0LnRleHQpO1xyXG5cdFx0XHJcblx0XHQvL09uIHbDqXJpZmllIHMnaWwgeSBhIGJpZW4sIGF1dGFudCBvdSBwbHVzIGRlIGpvdWV1ciBxdWUgbGEgcGhyYXNlcyBlbiBuw6ljZXNzaXRlIChlbiBmb25jdGlvbiBkdSBzZXhlKVxyXG5cdFx0bGV0IGVub3VnaEVsdEhvbW1lID0gbmJHZW5kZXIubWFsZSA+PSBuYkVsdE1hbGVGaW5kZWQ7XHJcblx0XHRsZXQgZW5vdWdoRWx0RmVtbWUgPSBuYkdlbmRlci5mZW1hbGUgPj0gbmJFbHRGZW1hbGVGaW5kZWQ7XHJcblx0XHRsZXQgZW5vdWdoUGxheWVyID0gcGxheWVycy5sZW5ndGggPj0gKG5iRWx0RmluZGVkICsgbmJFbHRNYWxlRmluZGVkICsgbmJFbHRGZW1hbGVGaW5kZWQpO1xyXG5cclxuXHRcdHJldHVybiBvcHRpb25zLnRoZW1lcy5pbmNsdWRlcyhlbHQudGhlbWUpICYmIGVub3VnaEVsdEhvbW1lICYmIGVub3VnaEVsdEZlbW1lICYmIGVub3VnaFBsYXllcjtcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzZW50ZW5jZXMgXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IG9wdGlvbnMgXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IHBsYXllcnMgXHJcbiAqIEByZXR1cm5zIHtPYmplY3RbXX1cclxuICovXHJcbmNvbnN0IHNlbGVjdFNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgc2VudGVuY2VzU2VsZWN0ZWQgPSBbXTtcclxuXHRsZXQgbGVuZ3RoU2VudGVuY2VzID0gZ2V0TGVuZ3RoU2VudGVuY2VzKG9wdGlvbnMuZHVyYXRpb24pO1xyXG5cdFxyXG5cdGxldCBuYlNlbnRlbmNlc1BpY2tlZCA9IDA7XHJcbiAgICBsZXQgbmJWaXJ1c1BpY2tlZCA9IDA7XHJcblx0bGV0IGlkU2VudGVuY2VzUGlja2VkID0gW107XHJcblxyXG5cdHdoaWxlIChuYlNlbnRlbmNlc1BpY2tlZCA8IGxlbmd0aFNlbnRlbmNlcy50b3RhbCAmJiBpZFNlbnRlbmNlc1BpY2tlZC5sZW5ndGggPCBzZW50ZW5jZXMubGVuZ3RoKSB7XHJcblx0XHQvL09uIGNob2lzaXQgdW4gbnVtw6lybyBhdSBoYXNhcmRcclxuXHRcdGxldCBuYlJhbmRvbVNlbnRlbmNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnNlbnRlbmNlcy5sZW5ndGgpO1xyXG5cdFx0aWYgKCFpZFNlbnRlbmNlc1BpY2tlZC5pbmNsdWRlcyhuYlJhbmRvbVNlbnRlbmNlKSkge1xyXG5cdFx0XHRpZFNlbnRlbmNlc1BpY2tlZC5wdXNoKG5iUmFuZG9tU2VudGVuY2UpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHNlbnRlbmNlUGlja2VkID0gc2VudGVuY2VzW25iUmFuZG9tU2VudGVuY2VdO1xyXG5cclxuXHRcdFx0aWYgKHNlbnRlbmNlUGlja2VkLnR5cGUgPT0gXCJ2aXJ1c1wiKSB7XHJcblx0XHRcdFx0aWYgKG5iVmlydXNQaWNrZWQgPCBsZW5ndGhTZW50ZW5jZXMudmlydXMpIHtcclxuXHRcdFx0XHRcdHNlbnRlbmNlc1NlbGVjdGVkLnB1c2goc2VudGVuY2VQaWNrZWQpO1xyXG5cdFx0XHRcdFx0bmJTZW50ZW5jZXNQaWNrZWQrKztcclxuXHRcdFx0XHRcdG5iVmlydXNQaWNrZWQrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0c2VudGVuY2VzU2VsZWN0ZWQucHVzaChzZW50ZW5jZVBpY2tlZCk7XHJcblx0XHRcdFx0bmJTZW50ZW5jZXNQaWNrZWQrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNlbnRlbmNlc1NlbGVjdGVkO1xyXG59XHJcblxyXG5jb25zdCBpbml0U2VudGVuY2VzID0gKHNlbnRlbmNlcywgb3B0aW9ucywgcGxheWVycykgPT4ge1xyXG5cdGxldCBhbW91bnQgPSBnZXRBbW91bnQob3B0aW9ucy5kaWZmaWN1bHR5KTtcclxuXHRyZXR1cm4gc2VudGVuY2VzLm1hcCgoc2VudGVuY2UpID0+IHtcclxuXHRcdC8vRmFpdCB1bmUgY29waWUgZGVzIGpvdWV1cnNcclxuXHRcdGxldCBwbGF5ZXJzTm90UGlja2VkID0gcGxheWVycy5zbGljZSgpO1xyXG5cclxuXHRcdGNvbnN0IGluaXRQbGF5ZXJzID0gKHN0cmluZ01hdGNoKSA9PiB7XHJcblx0XHRcdHdoaWxlIChzZW50ZW5jZS50ZXh0LmluZGV4T2Yoc3RyaW5nTWF0Y2gpID4gLTEpIHtcclxuXHRcdFx0XHQvL0Nob2lzaXQgcGFybWlzIHF1ZWwgdHlwZSBkZSBqb3VldXIgb24gcGV1dCB0aXJlclxyXG5cdFx0XHRcdGxldCBwbGF5ZXJUb1BpY2s7XHJcblx0XHRcdFx0c3dpdGNoIChzdHJpbmdNYXRjaCkge1xyXG5cdFx0XHRcdFx0Y2FzZSBzdHJpbmdUb0ZpbmQuZmVtYWxlOlxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJUb1BpY2sgPSBwbGF5ZXJzTm90UGlja2VkLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLmdlbmRlciA9PSBcIkZcIik7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBzdHJpbmdUb0ZpbmQubWFsZTpcclxuXHRcdFx0XHRcdFx0cGxheWVyVG9QaWNrID0gcGxheWVyc05vdFBpY2tlZC5maWx0ZXIocGxheWVyID0+IHBsYXllci5nZW5kZXIgPT0gXCJNXCIpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdHBsYXllclRvUGljayA9IHBsYXllcnNOb3RQaWNrZWQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL0Nob2lzaXQgdW4gam91ZXVyIGF1IGhhc2FyZFxyXG5cdFx0XHRcdGxldCBwbGF5ZXJQaWNrZWQgPSBwbGF5ZXJUb1BpY2tbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnBsYXllclRvUGljay5sZW5ndGgpXTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL1JldGlyZSBjZSBqb3VldXIgZGUgbGEgbGlzdGUgZGVzIGpvdWV1cnMgbm9uIHByaXNcclxuXHRcdFx0XHRwbGF5ZXJzTm90UGlja2VkLnNwbGljZShwbGF5ZXJzTm90UGlja2VkLmluZGV4T2YocGxheWVyUGlja2VkKSwgMSk7XHJcblxyXG5cdFx0XHRcdC8vUmVtcGxhY2UgbCfDqWzDqW1lbnQgcGFyIGxlIG5vbSBkdSBqb3VldXJcclxuXHRcdFx0XHRzZW50ZW5jZS50ZXh0ID0gc2VudGVuY2UudGV4dC5yZXBsYWNlKHN0cmluZ01hdGNoLCBwbGF5ZXJQaWNrZWQubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9TaSBsYSBwaHJhc2UgZXN0IHVuIHZpcnVzIGV0IHF1J29uIHRyb3V2ZSB1biDDqWzDqW1lbnQgZGFucyBsZXMgZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbnRlbmNlLnR5cGUgPT0gXCJ2aXJ1c1wiICYmIHNlbnRlbmNlLmRldGFpbHMuaW5kZXhPZihzdHJpbmdNYXRjaCkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtcGxhY2UgbGUgZWx0VG9GaW5kIHBhciBsZSBub20gZHUgam91ZXVyIChsZSBtw6ptZSBxdWUgbGUgdGV4dClcclxuICAgICAgICAgICAgICAgICAgICBzZW50ZW5jZS5kZXRhaWxzID0gc2VudGVuY2UuZGV0YWlscy5yZXBsYWNlKHN0cmluZ01hdGNoLCBwbGF5ZXJQaWNrZWQubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRcclxuXHRcdGluaXRQbGF5ZXJzKHN0cmluZ1RvRmluZC5uZXV0cmFsKTtcclxuXHRcdGluaXRQbGF5ZXJzKHN0cmluZ1RvRmluZC5tYWxlKTtcclxuXHRcdGluaXRQbGF5ZXJzKHN0cmluZ1RvRmluZC5mZW1hbGUpO1xyXG5cclxuXHRcdGNvbnN0IGluaXRHb3JnZWVzID0gKHRleHQpID0+IHtcclxuXHRcdFx0bGV0IGdvcmdlZXNGaW5kZWQgPSB0ZXh0Lm1hdGNoKHJlZ2V4VG9GaW5kLmdvcmdlZXMpIHx8IFtdO1xyXG5cdFx0XHRnb3JnZWVzRmluZGVkLmZvckVhY2goKGVsdCkgPT4ge1xyXG5cdFx0XHRcdGxldCBhbW91bnRJbmRleCA9IGFtb3VudFtwYXJzZUludChlbHQuY2hhckF0KDIpKV07XHJcblx0XHRcdFx0Y29uc29sZS53YXJuKHRleHQpO1xyXG5cdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2VBbGwoZWx0LCBhbW91bnRJbmRleCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGV4dCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpbml0R29yZ2VlcyhzZW50ZW5jZS50ZXh0KTtcclxuXHRcdGluaXRHb3JnZWVzKHNlbnRlbmNlLmRldGFpbHMpO1xyXG5cclxuXHRcdHJldHVybiBzZW50ZW5jZTtcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBsYWNlIGxlcyB2aXJ1cyBlbiB0YW50IHF1ZSBwaHJhc2VcclxuICogQHBhcmFtIHtPYmplY3RbXX0gc2VudGVuY2VzIFRhYmxlYXUgZGVzIHBocmFzZXMgcmV0ZW51ZXNcclxuICovXHJcbiBjb25zdCBwdXRWaXJ1cyA9IChzZW50ZW5jZXMpID0+IHtcclxuXHRsZXQgbmV3U2VudGVuY2VzID0gc2VudGVuY2VzLnNsaWNlKCk7XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc2VudGVuY2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoc2VudGVuY2VzW2ldLnR5cGUgPT0gXCJ2aXJ1c1wiKSB7XHJcblx0XHRcdGNvbnN0IGluZGV4UmFuZFZpcnVzID0gZ2V0UmFuZG9tSW50KDMsIDYpOyAvL1RPRE8gOiBkaWZmZXJlbnQgdmlydXMgbGVuZ3RoIChkaWZmaWN1bHR5KVxyXG5cdFx0XHRjb25zdCBzZW50ZW5jZVZpcnVzID0ge1xyXG5cdFx0XHRcdFwidGV4dFwiOiBzZW50ZW5jZXNbaV0uZGV0YWlscyxcclxuXHRcdFx0XHRcInRoZW1lXCI6IHNlbnRlbmNlc1tpXS50aGVtZSxcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ2aXJ1c0VuZFwiLFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRuZXdTZW50ZW5jZXMuc3BsaWNlKGkraW5kZXhSYW5kVmlydXMsIDAsIHNlbnRlbmNlVmlydXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5ld1NlbnRlbmNlcztcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFBsYXkoKSB7XHJcblx0bGV0IGxvY2FsT3B0aW9ucyA9IG51bGw7XHJcblx0bGV0IGxvY2FsUGxheWVycyA9IG51bGw7XHJcblx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdFx0bG9jYWxPcHRpb25zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9wdGlvbnNcIikpO1xyXG5cdFx0bG9jYWxQbGF5ZXJzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllcnNcIikpO1xyXG5cdH1cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtwbGF5ZXJzXSA9IHVzZVN0YXRlKGxvY2FsUGxheWVycyk7XHJcblx0Y29uc3QgW29wdGlvbnNdID0gdXNlU3RhdGUobG9jYWxPcHRpb25zKTtcclxuXHRjb25zdCBbYmFyTGVuZ3RoLCBzZXRCYXJMZW5ndGhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRTZW50ZW5jZSA9IDA7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50LCBzZW50ZW5jZXMpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQvL0NsaXF1ZSDDoCBnYXVjaGVcclxuXHRcdGlmIChldmVudC5jbGllbnRYIDwgd2luZG93LmlubmVyV2lkdGggLyAyKSB7XHJcblx0XHRcdGlmIChjdXJyZW50U2VudGVuY2UgPiAwKSB7XHJcblx0XHRcdFx0Y3VycmVudFNlbnRlbmNlLS07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vQ2xpcXVlIMOgIGRyb2l0ZVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlmIChjdXJyZW50U2VudGVuY2UgPCBzZW50ZW5jZXMubGVuZ3RoLTEpIHtcclxuXHRcdFx0XHRjdXJyZW50U2VudGVuY2UrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRyb3V0ZXIucmVsb2FkKCcvcGxheScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRzZXRUZXh0KHNlbnRlbmNlc1tjdXJyZW50U2VudGVuY2VdLnRleHQpO1xyXG5cdFx0c2V0QmFyTGVuZ3RoKGdldExlbmd0aEJhcihzZW50ZW5jZXMubGVuZ3RoKSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0TGVuZ3RoQmFyID0gKHNlbnRlbmNlc0xlbmd0aCkgPT4ge1xyXG5cdFx0cmV0dXJuIGN1cnJlbnRTZW50ZW5jZSoxMDAgLyBzZW50ZW5jZXNMZW5ndGg7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxldCBzZW50ZW5jZXMgPSBmaWx0ZXJTZW50ZW5jZXMoZGF0YSwgb3B0aW9ucywgcGxheWVycyk7XHJcblx0XHRzZW50ZW5jZXMgPSBzZWxlY3RTZW50ZW5jZXMoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IGluaXRTZW50ZW5jZXMoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IHB1dFZpcnVzKHNlbnRlbmNlcyk7XHJcblx0XHRjb25zb2xlSW5mb3JtYXRpb24oc2VudGVuY2VzLCBwbGF5ZXJzKTtcclxuXHJcblx0XHRzZXRCYXJMZW5ndGgoZ2V0TGVuZ3RoQmFyKHNlbnRlbmNlcy5sZW5ndGgpKTtcclxuXHRcdHNldFRleHQoc2VudGVuY2VzWzBdLnRleHQpO1xyXG5cdFx0XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGhhbmRsZUNsaWNrKGUsIHNlbnRlbmNlcykpO1xyXG5cclxuICAgICAgICAvKmxldCBuUmFuZG9tU2VudGVuY2VzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKTtcclxuXHRcdHNldFRleHQoZGF0YVtuUmFuZG9tU2VudGVuY2VzXS50ZXh0KTsqL1xyXG5cclxuXHRcdC8vIFRPRE8gOiAoaWTDqWUgZW4gdHMgPT4gRmFpcmUgcmVkdWNlciBldCBpbnRlcmZhY2UgcG91ciBsZXMgcGhyYXNlcyBkdSBqc29uIDogaHR0cHM6Ly95b3V0dS5iZS9aNWlXcjZTcnNqOD90PTkxOClcclxuXHRcdC8vIChGYWlyZSBkZXMgZm9uY3Rpb25zIChlbiBkZWhvcnMgZHUgY29tcG9zYW50cyBwb3VyIHF1ZSDDp2Egc29pdCBjbGVhbiAoanVzdGUgYXUgZGVzc3VzIGzDoCkpKVxyXG5cdFx0Ly8gLSBGaWx0cmVyIGxlIGpzb24gZGF0YSBwb3VyIG5lIHByZW5kcmUgcXVlIGxlcyBwaHJhc2VzIHF1aSByZXNwZWN0ZW50IGxlcyBvcHRpb25zICh0aMOobWVzLi4uKVxyXG5cdFx0Ly8gLSBGYWlyZSBsZSB0YWJsZWF1IGRlIHBocmFzZXMgKHVuZSBjZXJ0YWluZSBsb25ndWV1ciBlbiBmb25jdGlvbiBkZSBsYSBsb25ndWV1ciBlbiBvcHRpb24pXHJcblx0XHQvLyAtIFJlbXBsYWNlciBsZXMgbm9tcyBkYW5zIGxlcyBwaHJhc2VzICh0aXJlciBsZXMgbm9tcyBhdSBoYXNhcmQgdG91dCDDp2EgdG91dCDDp2EpXHJcblx0XHQvLyAtIE1ldHRyZSBsZXMgdmlydXMgcXVlbHF1ZSBwYXJ0XHJcblx0XHQvLyAtIE1ldHRyZSBsYSBjb25zw6lxdWVuY2UganVzdGUgYXByw6hzIHBvdXIgbGVzIGNob2l4XHJcblx0XHQvL1xyXG5cdFx0Ly8gLSBQb3VyIGxlcyBjaG9peCwgY2Ugc2VyYSBkYW5zIGxlIGpldSBkZSByZW1wbGFjZXIgbGUgbm9tIGRlcyBkw6l0YWlscyBkb25jIHBhcyBkYW5zIGNldHRlIGZvbmN0aW9uXHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dCB0aXRsZT1cIlNlbGVjdGlvbm5lclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHtzdHlsZXMubWFpbn1gfT5cclxuXHRcdFx0XHQ8TGluayBocmVmPVwiL3NlbGVjdC9wbGF5ZXJzXCI+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e3N0eWxlcy5xdWl0QnRufT48L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdHt0aXRsZSB8fCBcIlwifVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0e3RleHQgfHwgXCJDaGFyZ2VtZW50Li4uXCJ9XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyQ29udGFpbmVyfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyfT5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmJhclZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7d2lkdGg6IGAke2Jhckxlbmd0aH0lYCwgYmFja2dyb3VuZENvbG9yOiBcIiM4NEZGQjlcIn19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5OyJdLCJzb3VyY2VSb290IjoiIn0=