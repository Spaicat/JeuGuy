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
      console.warn(elt);
      sentence.text.replaceAll(elt, amount[parseInt(elt.charAt(2))]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlSW5mb3JtYXRpb24iLCJzZW50ZW5jZXMiLCJwbGF5ZXJzIiwiY3NzU3F1YXJlIiwiY3NzU21hbGwiLCJjb25zb2xlIiwiZ3JvdXBDb2xsYXBzZWQiLCJsZW5ndGgiLCJmb3JFYWNoIiwicGxheWVyIiwibG9nIiwiZ2VuZGVyIiwibmFtZSIsImdyb3VwRW5kIiwiZmlsdGVyIiwieCIsInR5cGUiLCJzZW50ZW5jZSIsImNzc1RoZW1lIiwidGhlbWUiLCJzZW50ZW5jZVR5cGUiLCJzcGFjZVR5cGUiLCJ0ZXh0IiwidGFibGUiLCJyZWdleFRvRmluZCIsInN0cmluZ1RvRmluZCIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRBbW91bnQiLCJkaWZmaWN1bHR5IiwiZ2V0TGVuZ3RoU2VudGVuY2VzIiwiZHVyYXRpb24iLCJmaWx0ZXJTZW50ZW5jZXMiLCJvcHRpb25zIiwibmJGZW1hbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJuYkdlbmRlciIsImdldE5iRWx0IiwicmVnZXgiLCJtYXRjaCIsImVsdCIsIm5iRWx0RmluZGVkIiwibmV1dHJhbCIsIm5iRWx0TWFsZUZpbmRlZCIsIm1hbGUiLCJuYkVsdEZlbWFsZUZpbmRlZCIsImZlbWFsZSIsImVub3VnaEVsdEhvbW1lIiwiZW5vdWdoRWx0RmVtbWUiLCJlbm91Z2hQbGF5ZXIiLCJ0aGVtZXMiLCJpbmNsdWRlcyIsInNlbGVjdFNlbnRlbmNlcyIsInNlbnRlbmNlc1NlbGVjdGVkIiwibGVuZ3RoU2VudGVuY2VzIiwibmJTZW50ZW5jZXNQaWNrZWQiLCJuYlZpcnVzUGlja2VkIiwiaWRTZW50ZW5jZXNQaWNrZWQiLCJ0b3RhbCIsIm5iUmFuZG9tU2VudGVuY2UiLCJwdXNoIiwic2VudGVuY2VQaWNrZWQiLCJ2aXJ1cyIsImluaXRTZW50ZW5jZXMiLCJhbW91bnQiLCJtYXAiLCJwbGF5ZXJzTm90UGlja2VkIiwic2xpY2UiLCJpbml0UGxheWVycyIsInN0cmluZ01hdGNoIiwiaW5kZXhPZiIsInBsYXllclRvUGljayIsInBsYXllclBpY2tlZCIsInNwbGljZSIsInJlcGxhY2UiLCJkZXRhaWxzIiwiZ29yZ2Vlc0ZpbmRlZCIsImdvcmdlZXMiLCJ3YXJuIiwicmVwbGFjZUFsbCIsInBhcnNlSW50IiwiY2hhckF0IiwicHV0VmlydXMiLCJuZXdTZW50ZW5jZXMiLCJpIiwiaW5kZXhSYW5kVmlydXMiLCJzZW50ZW5jZVZpcnVzIiwiUGxheSIsImxvY2FsT3B0aW9ucyIsImxvY2FsUGxheWVycyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNldFRleHQiLCJ0aXRsZSIsInNldFRpdGxlIiwiYmFyTGVuZ3RoIiwic2V0QmFyTGVuZ3RoIiwiY3VycmVudFNlbnRlbmNlIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xpZW50WCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJyZWxvYWQiLCJnZXRMZW5ndGhCYXIiLCJzZW50ZW5jZXNMZW5ndGgiLCJ1c2VFZmZlY3QiLCJkYXRhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0eWxlcyIsInF1aXRCdG4iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFNBQUQsRUFBWUMsT0FBWixFQUF3QjtBQUNsRCxNQUFJQyxTQUFTLEdBQUcsMERBQWhCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLGtCQUFmO0FBQ0FDLFNBQU8sQ0FBQ0MsY0FBUixzQkFBcUNKLE9BQU8sQ0FBQ0ssTUFBN0Msa0JB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L3dlYnBhY2svcGFnZXMvcGxheS41MWE2ZTU0OTliODhiMjQwZWM0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUGxheS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvc2VudGVuY2VzX3Rlc3QuanNvbic7XHJcblxyXG5jb25zdCBjb25zb2xlSW5mb3JtYXRpb24gPSAoc2VudGVuY2VzLCBwbGF5ZXJzKSA9PiB7XHJcblx0bGV0IGNzc1NxdWFyZSA9IFwicGFkZGluZzogM3B4IDVweDsgYm9yZGVyLXJhZGl1czogNXB4OyBmb250LXdlaWdodDogYm9sZDtcIjtcclxuXHRsZXQgY3NzU21hbGwgPSBcImZvbnQtc2l6ZTogMTBweDtcIjtcclxuXHRjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGAlY0pvdWV1cnMgKCR7cGxheWVycy5sZW5ndGh9KWAsIGAke2Nzc1NxdWFyZX0gY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtgKTtcclxuXHRwbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGAlYyR7cGxheWVyLmdlbmRlcn0lYyAke3BsYXllci5uYW1lfWAsXHJcblx0XHRgJHtjc3NTcXVhcmV9IGNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7YCxcclxuXHRcdFwiXCIpO1xyXG5cdH0pO1xyXG5cdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHRjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGAlY1BocmFzZXMgKCR7c2VudGVuY2VzLmxlbmd0aH0pJWMgJWMoJHtzZW50ZW5jZXMuZmlsdGVyKHggPT4geC50eXBlID09IFwidmlydXNcIikubGVuZ3RofSB2aXJ1cylgLFxyXG5cdGAke2Nzc1NxdWFyZX0gY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtgLFxyXG5cdFwiXCIsXHJcblx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IHJlZDtgKTtcclxuXHRzZW50ZW5jZXMuZm9yRWFjaChzZW50ZW5jZSA9PiB7XHJcblx0XHRsZXQgY3NzVGhlbWUgPSBcIlwiO1xyXG5cdFx0c3dpdGNoIChzZW50ZW5jZS50aGVtZSkge1xyXG5cdFx0XHRjYXNlIFwic3BvcnRcIjpcclxuXHRcdFx0XHRjc3NUaGVtZSA9IFwiY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiaG90XCI6XHJcblx0XHRcdFx0Y3NzVGhlbWUgPSBcImNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzZiZjtcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRjc3NUaGVtZSA9IFwiY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGxldCBzZW50ZW5jZVR5cGUgPSBcIlwiO1xyXG5cdFx0bGV0IHNwYWNlVHlwZSA9IFwiXCI7XHJcblx0XHRpZiAoc2VudGVuY2UudHlwZSAhPSBcIm5vcm1hbFwiKSB7XHJcblx0XHRcdHNlbnRlbmNlVHlwZSA9IHNlbnRlbmNlLnR5cGU7XHJcblx0XHRcdHNwYWNlVHlwZSA9IFwiIFwiO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5ncm91cENvbGxhcHNlZChgJWMke3NlbnRlbmNlVHlwZX0lYyR7c3BhY2VUeXBlfSVjJHtzZW50ZW5jZS50aGVtZX0lYyAke3NlbnRlbmNlLnRleHR9YCxcclxuXHRcdGAke2Nzc1NxdWFyZX0gY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICR7Y3NzU21hbGx9YCxcclxuXHRcdGAke2Nzc1NtYWxsfWAsXHJcblx0XHRgJHtjc3NTcXVhcmV9ICR7Y3NzVGhlbWV9ICR7Y3NzU21hbGx9YCxcclxuXHRcdGAke2Nzc1NtYWxsfWApO1xyXG5cdFx0Y29uc29sZS50YWJsZShzZW50ZW5jZSk7XHJcblx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0fSk7XHJcblx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcblxyXG5cclxubGV0IHJlZ2V4VG9GaW5kID0ge1xyXG5cdFwibmV1dHJhbFwiOiAvXFxbbm9tXFxdL2csXHJcblx0XCJtYWxlXCI6IC9cXFtub21NXFxdL2csXHJcblx0XCJmZW1hbGVcIjogL1xcW25vbUZcXF0vZyxcclxuXHRcImdvcmdlZXNcIjogL1xcW2dbMC0zXVxcXS9nLFxyXG59O1xyXG5sZXQgc3RyaW5nVG9GaW5kID0ge1xyXG5cdFwibmV1dHJhbFwiOiBcIltub21dXCIsXHJcblx0XCJtYWxlXCI6IFwiW25vbU1dXCIsXHJcblx0XCJmZW1hbGVcIjogXCJbbm9tRl1cIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW52b2llIHVuIGVudGllciBhbMOpYXRvaXJlIGVudHJlIG1pbiBldCBtYXggW21pbiwgbWF4XVxyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pbiBsYSB2YWxldXIgbWluaW11bSBxdWUgcGV1dCBhdHRlaW5kcmUgbCdlbnRpZXJcclxuICogQHBhcmFtICB7bnVtYmVyfSBtYXggbGEgdmFsZXVyIG1heGltdW0gcXVlIHBldXQgYXR0ZWluZHJlIGwnZW50aWVyXHJcbiAqIEByZXR1cm4ge251bWJlcn0gTCdlbnRpZXIgdGlyw6kgYXUgaGFzYXJkXHJcbiAqL1xyXG4gZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcclxuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkaWZmaWN1bHR5IFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuIGNvbnN0IGdldEFtb3VudCA9IChkaWZmaWN1bHR5KSA9PiB7XHJcblx0cmV0dXJuIFtcclxuXHRcdFtcIjIgZ29yZ8OpZXNcIiwgXCIzIGdvcmfDqWVzXCIsIFwiNCBnb3Jnw6llc1wiLCBcIjYgZ29yZ8OpZXNcIl0sXHJcblx0XHRbXCIzIGdvcmfDqWVzXCIsIFwiNCBnb3Jnw6llc1wiLCBcIjYgZ29yZ8OpZXNcIiwgXCI5IGdvcmfDqWVzXCJdLFxyXG5cdFx0W1wiNCBnb3Jnw6llc1wiLCBcIjYgZ29yZ8OpZXNcIiwgXCI4IGdvcmfDqWVzXCIsIFwiMSBjdWwgc2VjXCJdLFxyXG5cdF1bZGlmZmljdWx0eV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW52b2llIGxlIG5vbWJyZSBkZSBwaHJhc2VzIMOgIGFmZmljaGVyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBcclxuICogQHJldHVybnMge251bWJlcn0gTm9tYnJlIGRlIHBocmFzZXNcclxuICovXHJcbmNvbnN0IGdldExlbmd0aFNlbnRlbmNlcyA9IChkdXJhdGlvbikgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRcInRvdGFsXCI6IDIwICsgMTUqZHVyYXRpb24sXHJcblx0XHRcInZpcnVzXCI6IDIgKyAyKmR1cmF0aW9uXHJcblx0fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzZW50ZW5jZXNcclxuICogQHBhcmFtIHtPYmplY3RbXX0gb3B0aW9ucyBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gcGxheWVycyBcclxuICogQHJldHVybnMge09iamVjdFtdfSBcclxuICovXHJcbmNvbnN0IGZpbHRlclNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgbmJGZW1hbGUgPSBwbGF5ZXJzLnJlZHVjZSgoYWNjLCBjdXIpID0+IGN1ci5nZW5kZXIgPT09IFwiRlwiID8gKythY2MgOiBhY2MsIDApO1xyXG5cdGxldCBuYkdlbmRlciA9IHtcclxuXHRcdFwiZmVtYWxlXCI6IG5iRmVtYWxlLFxyXG5cdFx0XCJtYWxlXCI6IHBsYXllcnMubGVuZ3RoIC0gbmJGZW1hbGVcclxuXHR9O1xyXG5cclxuXHQvL05vbWJyZSBkJ8OpbMOpbWVudCByZWdleCB0cm91dsOpIGRhbnMgbGEgcGhyYXNlXHJcblx0Y29uc3QgZ2V0TmJFbHQgPSAocmVnZXgsIHRleHQpID0+IHtcclxuXHRcdHJldHVybiAodGV4dC5tYXRjaChyZWdleCkgfHwgW10pLmxlbmd0aDtcclxuXHR9O1xyXG5cdFxyXG5cdHJldHVybiBzZW50ZW5jZXMuZmlsdGVyKChlbHQpID0+IHtcclxuXHRcdGxldCBuYkVsdEZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLm5ldXRyYWwsIGVsdC50ZXh0KTtcclxuXHRcdGxldCBuYkVsdE1hbGVGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5tYWxlLCBlbHQudGV4dCk7XHJcblx0XHRsZXQgbmJFbHRGZW1hbGVGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5mZW1hbGUsIGVsdC50ZXh0KTtcclxuXHRcdFxyXG5cdFx0Ly9PbiB2w6lyaWZpZSBzJ2lsIHkgYSBiaWVuLCBhdXRhbnQgb3UgcGx1cyBkZSBqb3VldXIgcXVlIGxhIHBocmFzZXMgZW4gbsOpY2Vzc2l0ZSAoZW4gZm9uY3Rpb24gZHUgc2V4ZSlcclxuXHRcdGxldCBlbm91Z2hFbHRIb21tZSA9IG5iR2VuZGVyLm1hbGUgPj0gbmJFbHRNYWxlRmluZGVkO1xyXG5cdFx0bGV0IGVub3VnaEVsdEZlbW1lID0gbmJHZW5kZXIuZmVtYWxlID49IG5iRWx0RmVtYWxlRmluZGVkO1xyXG5cdFx0bGV0IGVub3VnaFBsYXllciA9IHBsYXllcnMubGVuZ3RoID49IChuYkVsdEZpbmRlZCArIG5iRWx0TWFsZUZpbmRlZCArIG5iRWx0RmVtYWxlRmluZGVkKTtcclxuXHJcblx0XHRyZXR1cm4gb3B0aW9ucy50aGVtZXMuaW5jbHVkZXMoZWx0LnRoZW1lKSAmJiBlbm91Z2hFbHRIb21tZSAmJiBlbm91Z2hFbHRGZW1tZSAmJiBlbm91Z2hQbGF5ZXI7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gc2VudGVuY2VzIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBvcHRpb25zIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBwbGF5ZXJzIFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0W119XHJcbiAqL1xyXG5jb25zdCBzZWxlY3RTZW50ZW5jZXMgPSAoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKSA9PiB7XHJcblx0bGV0IHNlbnRlbmNlc1NlbGVjdGVkID0gW107XHJcblx0bGV0IGxlbmd0aFNlbnRlbmNlcyA9IGdldExlbmd0aFNlbnRlbmNlcyhvcHRpb25zLmR1cmF0aW9uKTtcclxuXHRcclxuXHRsZXQgbmJTZW50ZW5jZXNQaWNrZWQgPSAwO1xyXG4gICAgbGV0IG5iVmlydXNQaWNrZWQgPSAwO1xyXG5cdGxldCBpZFNlbnRlbmNlc1BpY2tlZCA9IFtdO1xyXG5cclxuXHR3aGlsZSAobmJTZW50ZW5jZXNQaWNrZWQgPCBsZW5ndGhTZW50ZW5jZXMudG90YWwgJiYgaWRTZW50ZW5jZXNQaWNrZWQubGVuZ3RoIDwgc2VudGVuY2VzLmxlbmd0aCkge1xyXG5cdFx0Ly9PbiBjaG9pc2l0IHVuIG51bcOpcm8gYXUgaGFzYXJkXHJcblx0XHRsZXQgbmJSYW5kb21TZW50ZW5jZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpzZW50ZW5jZXMubGVuZ3RoKTtcclxuXHRcdGlmICghaWRTZW50ZW5jZXNQaWNrZWQuaW5jbHVkZXMobmJSYW5kb21TZW50ZW5jZSkpIHtcclxuXHRcdFx0aWRTZW50ZW5jZXNQaWNrZWQucHVzaChuYlJhbmRvbVNlbnRlbmNlKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBzZW50ZW5jZVBpY2tlZCA9IHNlbnRlbmNlc1tuYlJhbmRvbVNlbnRlbmNlXTtcclxuXHJcblx0XHRcdGlmIChzZW50ZW5jZVBpY2tlZC50eXBlID09IFwidmlydXNcIikge1xyXG5cdFx0XHRcdGlmIChuYlZpcnVzUGlja2VkIDwgbGVuZ3RoU2VudGVuY2VzLnZpcnVzKSB7XHJcblx0XHRcdFx0XHRzZW50ZW5jZXNTZWxlY3RlZC5wdXNoKHNlbnRlbmNlUGlja2VkKTtcclxuXHRcdFx0XHRcdG5iU2VudGVuY2VzUGlja2VkKys7XHJcblx0XHRcdFx0XHRuYlZpcnVzUGlja2VkKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHNlbnRlbmNlc1NlbGVjdGVkLnB1c2goc2VudGVuY2VQaWNrZWQpO1xyXG5cdFx0XHRcdG5iU2VudGVuY2VzUGlja2VkKys7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBzZW50ZW5jZXNTZWxlY3RlZDtcclxufVxyXG5cclxuY29uc3QgaW5pdFNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgYW1vdW50ID0gZ2V0QW1vdW50KG9wdGlvbnMuZGlmZmljdWx0eSk7XHJcblx0cmV0dXJuIHNlbnRlbmNlcy5tYXAoKHNlbnRlbmNlKSA9PiB7XHJcblx0XHQvL0ZhaXQgdW5lIGNvcGllIGRlcyBqb3VldXJzXHJcblx0XHRsZXQgcGxheWVyc05vdFBpY2tlZCA9IHBsYXllcnMuc2xpY2UoKTtcclxuXHJcblx0XHRjb25zdCBpbml0UGxheWVycyA9IChzdHJpbmdNYXRjaCkgPT4ge1xyXG5cdFx0XHR3aGlsZSAoc2VudGVuY2UudGV4dC5pbmRleE9mKHN0cmluZ01hdGNoKSA+IC0xKSB7XHJcblx0XHRcdFx0Ly9DaG9pc2l0IHBhcm1pcyBxdWVsIHR5cGUgZGUgam91ZXVyIG9uIHBldXQgdGlyZXJcclxuXHRcdFx0XHRsZXQgcGxheWVyVG9QaWNrO1xyXG5cdFx0XHRcdHN3aXRjaCAoc3RyaW5nTWF0Y2gpIHtcclxuXHRcdFx0XHRcdGNhc2Ugc3RyaW5nVG9GaW5kLmZlbWFsZTpcclxuXHRcdFx0XHRcdFx0cGxheWVyVG9QaWNrID0gcGxheWVyc05vdFBpY2tlZC5maWx0ZXIocGxheWVyID0+IHBsYXllci5nZW5kZXIgPT0gXCJGXCIpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2Ugc3RyaW5nVG9GaW5kLm1hbGU6XHJcblx0XHRcdFx0XHRcdHBsYXllclRvUGljayA9IHBsYXllcnNOb3RQaWNrZWQuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIuZ2VuZGVyID09IFwiTVwiKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJUb1BpY2sgPSBwbGF5ZXJzTm90UGlja2VkO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9DaG9pc2l0IHVuIGpvdWV1ciBhdSBoYXNhcmRcclxuXHRcdFx0XHRsZXQgcGxheWVyUGlja2VkID0gcGxheWVyVG9QaWNrW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpwbGF5ZXJUb1BpY2subGVuZ3RoKV07XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9SZXRpcmUgY2Ugam91ZXVyIGRlIGxhIGxpc3RlIGRlcyBqb3VldXJzIG5vbiBwcmlzXHJcblx0XHRcdFx0cGxheWVyc05vdFBpY2tlZC5zcGxpY2UocGxheWVyc05vdFBpY2tlZC5pbmRleE9mKHBsYXllclBpY2tlZCksIDEpO1xyXG5cclxuXHRcdFx0XHQvL1JlbXBsYWNlIGwnw6lsw6ltZW50IHBhciBsZSBub20gZHUgam91ZXVyXHJcblx0XHRcdFx0c2VudGVuY2UudGV4dCA9IHNlbnRlbmNlLnRleHQucmVwbGFjZShzdHJpbmdNYXRjaCwgcGxheWVyUGlja2VkLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vU2kgbGEgcGhyYXNlIGVzdCB1biB2aXJ1cyBldCBxdSdvbiB0cm91dmUgdW4gw6lsw6ltZW50IGRhbnMgbGVzIGRldGFpbHNcclxuICAgICAgICAgICAgICAgIGlmIChzZW50ZW5jZS50eXBlID09IFwidmlydXNcIiAmJiBzZW50ZW5jZS5kZXRhaWxzLmluZGV4T2Yoc3RyaW5nTWF0Y2gpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlbXBsYWNlIGxlIGVsdFRvRmluZCBwYXIgbGUgbm9tIGR1IGpvdWV1ciAobGUgbcOqbWUgcXVlIGxlIHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VudGVuY2UuZGV0YWlscyA9IHNlbnRlbmNlLmRldGFpbHMucmVwbGFjZShzdHJpbmdNYXRjaCwgcGxheWVyUGlja2VkLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGluaXRQbGF5ZXJzKHN0cmluZ1RvRmluZC5uZXV0cmFsKTtcclxuXHRcdGluaXRQbGF5ZXJzKHN0cmluZ1RvRmluZC5tYWxlKTtcclxuXHRcdGluaXRQbGF5ZXJzKHN0cmluZ1RvRmluZC5mZW1hbGUpO1xyXG5cclxuXHRcdGxldCBnb3JnZWVzRmluZGVkID0gc2VudGVuY2UudGV4dC5tYXRjaChyZWdleFRvRmluZC5nb3JnZWVzKSB8fCBbXTtcclxuXHRcdGdvcmdlZXNGaW5kZWQuZm9yRWFjaCgoZWx0KSA9PiB7XHJcblx0XHRcdGNvbnNvbGUud2FybihlbHQpO1xyXG5cdFx0XHRzZW50ZW5jZS50ZXh0LnJlcGxhY2VBbGwoZWx0LCBhbW91bnRbcGFyc2VJbnQoZWx0LmNoYXJBdCgyKSldKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBzZW50ZW5jZTtcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBsYWNlIGxlcyB2aXJ1cyBlbiB0YW50IHF1ZSBwaHJhc2VcclxuICogQHBhcmFtIHtPYmplY3RbXX0gc2VudGVuY2VzIFRhYmxlYXUgZGVzIHBocmFzZXMgcmV0ZW51ZXNcclxuICovXHJcbiBjb25zdCBwdXRWaXJ1cyA9IChzZW50ZW5jZXMpID0+IHtcclxuXHRsZXQgbmV3U2VudGVuY2VzID0gc2VudGVuY2VzLnNsaWNlKCk7XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc2VudGVuY2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoc2VudGVuY2VzW2ldLnR5cGUgPT0gXCJ2aXJ1c1wiKSB7XHJcblx0XHRcdGNvbnN0IGluZGV4UmFuZFZpcnVzID0gZ2V0UmFuZG9tSW50KDMsIDYpOyAvL1RPRE8gOiBkaWZmZXJlbnQgdmlydXMgbGVuZ3RoIChkaWZmaWN1bHR5KVxyXG5cdFx0XHRjb25zdCBzZW50ZW5jZVZpcnVzID0ge1xyXG5cdFx0XHRcdFwidGV4dFwiOiBzZW50ZW5jZXNbaV0uZGV0YWlscyxcclxuXHRcdFx0XHRcInRoZW1lXCI6IHNlbnRlbmNlc1tpXS50aGVtZSxcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ2aXJ1c0VuZFwiLFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRuZXdTZW50ZW5jZXMuc3BsaWNlKGkraW5kZXhSYW5kVmlydXMsIDAsIHNlbnRlbmNlVmlydXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5ld1NlbnRlbmNlcztcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFBsYXkoKSB7XHJcblx0bGV0IGxvY2FsT3B0aW9ucyA9IG51bGw7XHJcblx0bGV0IGxvY2FsUGxheWVycyA9IG51bGw7XHJcblx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdFx0bG9jYWxPcHRpb25zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9wdGlvbnNcIikpO1xyXG5cdFx0bG9jYWxQbGF5ZXJzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllcnNcIikpO1xyXG5cdH1cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtwbGF5ZXJzXSA9IHVzZVN0YXRlKGxvY2FsUGxheWVycyk7XHJcblx0Y29uc3QgW29wdGlvbnNdID0gdXNlU3RhdGUobG9jYWxPcHRpb25zKTtcclxuXHRjb25zdCBbYmFyTGVuZ3RoLCBzZXRCYXJMZW5ndGhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRTZW50ZW5jZSA9IDA7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50LCBzZW50ZW5jZXMpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQvL0NsaXF1ZSDDoCBnYXVjaGVcclxuXHRcdGlmIChldmVudC5jbGllbnRYIDwgd2luZG93LmlubmVyV2lkdGggLyAyKSB7XHJcblx0XHRcdGlmIChjdXJyZW50U2VudGVuY2UgPiAwKSB7XHJcblx0XHRcdFx0Y3VycmVudFNlbnRlbmNlLS07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vQ2xpcXVlIMOgIGRyb2l0ZVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlmIChjdXJyZW50U2VudGVuY2UgPCBzZW50ZW5jZXMubGVuZ3RoLTEpIHtcclxuXHRcdFx0XHRjdXJyZW50U2VudGVuY2UrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRyb3V0ZXIucmVsb2FkKCcvcGxheScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRzZXRUZXh0KHNlbnRlbmNlc1tjdXJyZW50U2VudGVuY2VdLnRleHQpO1xyXG5cdFx0c2V0QmFyTGVuZ3RoKGdldExlbmd0aEJhcihzZW50ZW5jZXMubGVuZ3RoKSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0TGVuZ3RoQmFyID0gKHNlbnRlbmNlc0xlbmd0aCkgPT4ge1xyXG5cdFx0cmV0dXJuIGN1cnJlbnRTZW50ZW5jZSoxMDAgLyBzZW50ZW5jZXNMZW5ndGg7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxldCBzZW50ZW5jZXMgPSBmaWx0ZXJTZW50ZW5jZXMoZGF0YSwgb3B0aW9ucywgcGxheWVycyk7XHJcblx0XHRzZW50ZW5jZXMgPSBzZWxlY3RTZW50ZW5jZXMoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IGluaXRTZW50ZW5jZXMoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IHB1dFZpcnVzKHNlbnRlbmNlcyk7XHJcblx0XHRjb25zb2xlSW5mb3JtYXRpb24oc2VudGVuY2VzLCBwbGF5ZXJzKTtcclxuXHJcblx0XHRzZXRCYXJMZW5ndGgoZ2V0TGVuZ3RoQmFyKHNlbnRlbmNlcy5sZW5ndGgpKTtcclxuXHRcdHNldFRleHQoc2VudGVuY2VzWzBdLnRleHQpO1xyXG5cdFx0XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGhhbmRsZUNsaWNrKGUsIHNlbnRlbmNlcykpO1xyXG5cclxuICAgICAgICAvKmxldCBuUmFuZG9tU2VudGVuY2VzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKTtcclxuXHRcdHNldFRleHQoZGF0YVtuUmFuZG9tU2VudGVuY2VzXS50ZXh0KTsqL1xyXG5cclxuXHRcdC8vIFRPRE8gOiAoaWTDqWUgZW4gdHMgPT4gRmFpcmUgcmVkdWNlciBldCBpbnRlcmZhY2UgcG91ciBsZXMgcGhyYXNlcyBkdSBqc29uIDogaHR0cHM6Ly95b3V0dS5iZS9aNWlXcjZTcnNqOD90PTkxOClcclxuXHRcdC8vIChGYWlyZSBkZXMgZm9uY3Rpb25zIChlbiBkZWhvcnMgZHUgY29tcG9zYW50cyBwb3VyIHF1ZSDDp2Egc29pdCBjbGVhbiAoanVzdGUgYXUgZGVzc3VzIGzDoCkpKVxyXG5cdFx0Ly8gLSBGaWx0cmVyIGxlIGpzb24gZGF0YSBwb3VyIG5lIHByZW5kcmUgcXVlIGxlcyBwaHJhc2VzIHF1aSByZXNwZWN0ZW50IGxlcyBvcHRpb25zICh0aMOobWVzLi4uKVxyXG5cdFx0Ly8gLSBGYWlyZSBsZSB0YWJsZWF1IGRlIHBocmFzZXMgKHVuZSBjZXJ0YWluZSBsb25ndWV1ciBlbiBmb25jdGlvbiBkZSBsYSBsb25ndWV1ciBlbiBvcHRpb24pXHJcblx0XHQvLyAtIFJlbXBsYWNlciBsZXMgbm9tcyBkYW5zIGxlcyBwaHJhc2VzICh0aXJlciBsZXMgbm9tcyBhdSBoYXNhcmQgdG91dCDDp2EgdG91dCDDp2EpXHJcblx0XHQvLyAtIE1ldHRyZSBsZXMgdmlydXMgcXVlbHF1ZSBwYXJ0XHJcblx0XHQvLyAtIE1ldHRyZSBsYSBjb25zw6lxdWVuY2UganVzdGUgYXByw6hzIHBvdXIgbGVzIGNob2l4XHJcblx0XHQvL1xyXG5cdFx0Ly8gLSBQb3VyIGxlcyBjaG9peCwgY2Ugc2VyYSBkYW5zIGxlIGpldSBkZSByZW1wbGFjZXIgbGUgbm9tIGRlcyBkw6l0YWlscyBkb25jIHBhcyBkYW5zIGNldHRlIGZvbmN0aW9uXHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dCB0aXRsZT1cIlNlbGVjdGlvbm5lclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHtzdHlsZXMubWFpbn1gfT5cclxuXHRcdFx0XHQ8TGluayBocmVmPVwiL3NlbGVjdC9wbGF5ZXJzXCI+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e3N0eWxlcy5xdWl0QnRufT48L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdHt0aXRsZSB8fCBcIlwifVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0e3RleHQgfHwgXCJDaGFyZ2VtZW50Li4uXCJ9XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyQ29udGFpbmVyfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyfT5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmJhclZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7d2lkdGg6IGAke2Jhckxlbmd0aH0lYCwgYmFja2dyb3VuZENvbG9yOiBcIiM4NEZGQjlcIn19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5OyJdLCJzb3VyY2VSb290IjoiIn0=