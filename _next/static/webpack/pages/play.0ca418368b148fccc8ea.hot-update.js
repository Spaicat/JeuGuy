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
      console.warn(sentence);
      sentence.text.replaceAll(elt, amount[parseInt(elt.charAt(2))]);
      console.warn(sentence);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlSW5mb3JtYXRpb24iLCJzZW50ZW5jZXMiLCJwbGF5ZXJzIiwiY3NzU3F1YXJlIiwiY3NzU21hbGwiLCJjb25zb2xlIiwiZ3JvdXBDb2xsYXBzZWQiLCJsZW5ndGgiLCJmb3JFYWNoIiwicGxheWVyIiwibG9nIiwiZ2VuZGVyIiwibmFtZSIsImdyb3VwRW5kIiwiZmlsdGVyIiwieCIsInR5cGUiLCJzZW50ZW5jZSIsImNzc1RoZW1lIiwidGhlbWUiLCJzZW50ZW5jZVR5cGUiLCJzcGFjZVR5cGUiLCJ0ZXh0IiwidGFibGUiLCJyZWdleFRvRmluZCIsInN0cmluZ1RvRmluZCIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRBbW91bnQiLCJkaWZmaWN1bHR5IiwiZ2V0TGVuZ3RoU2VudGVuY2VzIiwiZHVyYXRpb24iLCJmaWx0ZXJTZW50ZW5jZXMiLCJvcHRpb25zIiwibmJGZW1hbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJuYkdlbmRlciIsImdldE5iRWx0IiwicmVnZXgiLCJtYXRjaCIsImVsdCIsIm5iRWx0RmluZGVkIiwibmV1dHJhbCIsIm5iRWx0TWFsZUZpbmRlZCIsIm1hbGUiLCJuYkVsdEZlbWFsZUZpbmRlZCIsImZlbWFsZSIsImVub3VnaEVsdEhvbW1lIiwiZW5vdWdoRWx0RmVtbWUiLCJlbm91Z2hQbGF5ZXIiLCJ0aGVtZXMiLCJpbmNsdWRlcyIsInNlbGVjdFNlbnRlbmNlcyIsInNlbnRlbmNlc1NlbGVjdGVkIiwibGVuZ3RoU2VudGVuY2VzIiwibmJTZW50ZW5jZXNQaWNrZWQiLCJuYlZpcnVzUGlja2VkIiwiaWRTZW50ZW5jZXNQaWNrZWQiLCJ0b3RhbCIsIm5iUmFuZG9tU2VudGVuY2UiLCJwdXNoIiwic2VudGVuY2VQaWNrZWQiLCJ2aXJ1cyIsImluaXRTZW50ZW5jZXMiLCJhbW91bnQiLCJtYXAiLCJwbGF5ZXJzTm90UGlja2VkIiwic2xpY2UiLCJpbml0UGxheWVycyIsInN0cmluZ01hdGNoIiwiaW5kZXhPZiIsInBsYXllclRvUGljayIsInBsYXllclBpY2tlZCIsInNwbGljZSIsInJlcGxhY2UiLCJkZXRhaWxzIiwiZ29yZ2Vlc0ZpbmRlZCIsImdvcmdlZXMiLCJ3YXJuIiwicmVwbGFjZUFsbCIsInBhcnNlSW50IiwiY2hhckF0IiwicHV0VmlydXMiLCJuZXdTZW50ZW5jZXMiLCJpIiwiaW5kZXhSYW5kVmlydXMiLCJzZW50ZW5jZVZpcnVzIiwiUGxheSIsImxvY2FsT3B0aW9ucyIsImxvY2FsUGxheWVycyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNldFRleHQiLCJ0aXRsZSIsInNldFRpdGxlIiwiYmFyTGVuZ3RoIiwic2V0QmFyTGVuZ3RoIiwiY3VycmVudFNlbnRlbmNlIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xpZW50WCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJyZWxvYWQiLCJnZXRMZW5ndGhCYXIiLCJzZW50ZW5jZXNMZW5ndGgiLCJ1c2VFZmZlY3QiLCJkYXRhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0eWxlcyIsInF1aXRCdG4iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFNBQUQsRUFBWUMsT0FBWixFQUF3QjtBQUNsRCxNQUFJQyxTQUFTLEdBQUcsMERBQWhCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLGtCQUFmO0FBQ0FDLFNBQU8sQ0FBQ0MsY0FBUixzQkFBcUNKLE9BQU8sQ0FBQ0ssTUFBN0Msa0JB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O0FBNkZULCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BsYXkuMGNhNDE4MzY4YjE0OGZjY2M4ZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1BsYXkubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhL3NlbnRlbmNlc190ZXN0Lmpzb24nO1xyXG5cclxuY29uc3QgY29uc29sZUluZm9ybWF0aW9uID0gKHNlbnRlbmNlcywgcGxheWVycykgPT4ge1xyXG5cdGxldCBjc3NTcXVhcmUgPSBcInBhZGRpbmc6IDNweCA1cHg7IGJvcmRlci1yYWRpdXM6IDVweDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI7XHJcblx0bGV0IGNzc1NtYWxsID0gXCJmb250LXNpemU6IDEwcHg7XCI7XHJcblx0Y29uc29sZS5ncm91cENvbGxhcHNlZChgJWNKb3VldXJzICgke3BsYXllcnMubGVuZ3RofSlgLCBgJHtjc3NTcXVhcmV9IGNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7YCk7XHJcblx0cGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhgJWMke3BsYXllci5nZW5kZXJ9JWMgJHtwbGF5ZXIubmFtZX1gLFxyXG5cdFx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2AsXHJcblx0XHRcIlwiKTtcclxuXHR9KTtcclxuXHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0Y29uc29sZS5ncm91cENvbGxhcHNlZChgJWNQaHJhc2VzICgke3NlbnRlbmNlcy5sZW5ndGh9KSVjICVjKCR7c2VudGVuY2VzLmZpbHRlcih4ID0+IHgudHlwZSA9PSBcInZpcnVzXCIpLmxlbmd0aH0gdmlydXMpYCxcclxuXHRgJHtjc3NTcXVhcmV9IGNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7YCxcclxuXHRcIlwiLFxyXG5cdGAke2Nzc1NxdWFyZX0gY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7YCk7XHJcblx0c2VudGVuY2VzLmZvckVhY2goc2VudGVuY2UgPT4ge1xyXG5cdFx0bGV0IGNzc1RoZW1lID0gXCJcIjtcclxuXHRcdHN3aXRjaCAoc2VudGVuY2UudGhlbWUpIHtcclxuXHRcdFx0Y2FzZSBcInNwb3J0XCI6XHJcblx0XHRcdFx0Y3NzVGhlbWUgPSBcImNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImhvdFwiOlxyXG5cdFx0XHRcdGNzc1RoZW1lID0gXCJjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6ICNmZjM2YmY7XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0Y3NzVGhlbWUgPSBcImNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRsZXQgc2VudGVuY2VUeXBlID0gXCJcIjtcclxuXHRcdGxldCBzcGFjZVR5cGUgPSBcIlwiO1xyXG5cdFx0aWYgKHNlbnRlbmNlLnR5cGUgIT0gXCJub3JtYWxcIikge1xyXG5cdFx0XHRzZW50ZW5jZVR5cGUgPSBzZW50ZW5jZS50eXBlO1xyXG5cdFx0XHRzcGFjZVR5cGUgPSBcIiBcIjtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYCVjJHtzZW50ZW5jZVR5cGV9JWMke3NwYWNlVHlwZX0lYyR7c2VudGVuY2UudGhlbWV9JWMgJHtzZW50ZW5jZS50ZXh0fWAsXHJcblx0XHRgJHtjc3NTcXVhcmV9IGNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogcmVkOyAke2Nzc1NtYWxsfWAsXHJcblx0XHRgJHtjc3NTbWFsbH1gLFxyXG5cdFx0YCR7Y3NzU3F1YXJlfSAke2Nzc1RoZW1lfSAke2Nzc1NtYWxsfWAsXHJcblx0XHRgJHtjc3NTbWFsbH1gKTtcclxuXHRcdGNvbnNvbGUudGFibGUoc2VudGVuY2UpO1xyXG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdH0pO1xyXG5cdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG5cclxuXHJcbmxldCByZWdleFRvRmluZCA9IHtcclxuXHRcIm5ldXRyYWxcIjogL1xcW25vbVxcXS9nLFxyXG5cdFwibWFsZVwiOiAvXFxbbm9tTVxcXS9nLFxyXG5cdFwiZmVtYWxlXCI6IC9cXFtub21GXFxdL2csXHJcblx0XCJnb3JnZWVzXCI6IC9cXFtnWzAtM11cXF0vZyxcclxufTtcclxubGV0IHN0cmluZ1RvRmluZCA9IHtcclxuXHRcIm5ldXRyYWxcIjogXCJbbm9tXVwiLFxyXG5cdFwibWFsZVwiOiBcIltub21NXVwiLFxyXG5cdFwiZmVtYWxlXCI6IFwiW25vbUZdXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogUmVudm9pZSB1biBlbnRpZXIgYWzDqWF0b2lyZSBlbnRyZSBtaW4gZXQgbWF4IFttaW4sIG1heF1cclxuICogQHBhcmFtICB7bnVtYmVyfSBtaW4gbGEgdmFsZXVyIG1pbmltdW0gcXVlIHBldXQgYXR0ZWluZHJlIGwnZW50aWVyXHJcbiAqIEBwYXJhbSAge251bWJlcn0gbWF4IGxhIHZhbGV1ciBtYXhpbXVtIHF1ZSBwZXV0IGF0dGVpbmRyZSBsJ2VudGllclxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEwnZW50aWVyIHRpcsOpIGF1IGhhc2FyZFxyXG4gKi9cclxuIGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGlmZmljdWx0eSBcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbiBjb25zdCBnZXRBbW91bnQgPSAoZGlmZmljdWx0eSkgPT4ge1xyXG5cdHJldHVybiBbXHJcblx0XHRbXCIyIGdvcmfDqWVzXCIsIFwiMyBnb3Jnw6llc1wiLCBcIjQgZ29yZ8OpZXNcIiwgXCI2IGdvcmfDqWVzXCJdLFxyXG5cdFx0W1wiMyBnb3Jnw6llc1wiLCBcIjQgZ29yZ8OpZXNcIiwgXCI2IGdvcmfDqWVzXCIsIFwiOSBnb3Jnw6llc1wiXSxcclxuXHRcdFtcIjQgZ29yZ8OpZXNcIiwgXCI2IGdvcmfDqWVzXCIsIFwiOCBnb3Jnw6llc1wiLCBcIjEgY3VsIHNlY1wiXSxcclxuXHRdW2RpZmZpY3VsdHldO1xyXG59XHJcblxyXG4vKipcclxuICogUmVudm9pZSBsZSBub21icmUgZGUgcGhyYXNlcyDDoCBhZmZpY2hlclxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IE5vbWJyZSBkZSBwaHJhc2VzXHJcbiAqL1xyXG5jb25zdCBnZXRMZW5ndGhTZW50ZW5jZXMgPSAoZHVyYXRpb24pID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0XCJ0b3RhbFwiOiAyMCArIDE1KmR1cmF0aW9uLFxyXG5cdFx0XCJ2aXJ1c1wiOiAyICsgMipkdXJhdGlvblxyXG5cdH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gc2VudGVuY2VzXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IG9wdGlvbnMgXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IHBsYXllcnMgXHJcbiAqIEByZXR1cm5zIHtPYmplY3RbXX0gXHJcbiAqL1xyXG5jb25zdCBmaWx0ZXJTZW50ZW5jZXMgPSAoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKSA9PiB7XHJcblx0bGV0IG5iRmVtYWxlID0gcGxheWVycy5yZWR1Y2UoKGFjYywgY3VyKSA9PiBjdXIuZ2VuZGVyID09PSBcIkZcIiA/ICsrYWNjIDogYWNjLCAwKTtcclxuXHRsZXQgbmJHZW5kZXIgPSB7XHJcblx0XHRcImZlbWFsZVwiOiBuYkZlbWFsZSxcclxuXHRcdFwibWFsZVwiOiBwbGF5ZXJzLmxlbmd0aCAtIG5iRmVtYWxlXHJcblx0fTtcclxuXHJcblx0Ly9Ob21icmUgZCfDqWzDqW1lbnQgcmVnZXggdHJvdXbDqSBkYW5zIGxhIHBocmFzZVxyXG5cdGNvbnN0IGdldE5iRWx0ID0gKHJlZ2V4LCB0ZXh0KSA9PiB7XHJcblx0XHRyZXR1cm4gKHRleHQubWF0Y2gocmVnZXgpIHx8IFtdKS5sZW5ndGg7XHJcblx0fTtcclxuXHRcclxuXHRyZXR1cm4gc2VudGVuY2VzLmZpbHRlcigoZWx0KSA9PiB7XHJcblx0XHRsZXQgbmJFbHRGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5uZXV0cmFsLCBlbHQudGV4dCk7XHJcblx0XHRsZXQgbmJFbHRNYWxlRmluZGVkID0gZ2V0TmJFbHQocmVnZXhUb0ZpbmQubWFsZSwgZWx0LnRleHQpO1xyXG5cdFx0bGV0IG5iRWx0RmVtYWxlRmluZGVkID0gZ2V0TmJFbHQocmVnZXhUb0ZpbmQuZmVtYWxlLCBlbHQudGV4dCk7XHJcblx0XHRcclxuXHRcdC8vT24gdsOpcmlmaWUgcydpbCB5IGEgYmllbiwgYXV0YW50IG91IHBsdXMgZGUgam91ZXVyIHF1ZSBsYSBwaHJhc2VzIGVuIG7DqWNlc3NpdGUgKGVuIGZvbmN0aW9uIGR1IHNleGUpXHJcblx0XHRsZXQgZW5vdWdoRWx0SG9tbWUgPSBuYkdlbmRlci5tYWxlID49IG5iRWx0TWFsZUZpbmRlZDtcclxuXHRcdGxldCBlbm91Z2hFbHRGZW1tZSA9IG5iR2VuZGVyLmZlbWFsZSA+PSBuYkVsdEZlbWFsZUZpbmRlZDtcclxuXHRcdGxldCBlbm91Z2hQbGF5ZXIgPSBwbGF5ZXJzLmxlbmd0aCA+PSAobmJFbHRGaW5kZWQgKyBuYkVsdE1hbGVGaW5kZWQgKyBuYkVsdEZlbWFsZUZpbmRlZCk7XHJcblxyXG5cdFx0cmV0dXJuIG9wdGlvbnMudGhlbWVzLmluY2x1ZGVzKGVsdC50aGVtZSkgJiYgZW5vdWdoRWx0SG9tbWUgJiYgZW5vdWdoRWx0RmVtbWUgJiYgZW5vdWdoUGxheWVyO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IHNlbnRlbmNlcyBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gb3B0aW9ucyBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gcGxheWVycyBcclxuICogQHJldHVybnMge09iamVjdFtdfVxyXG4gKi9cclxuY29uc3Qgc2VsZWN0U2VudGVuY2VzID0gKHNlbnRlbmNlcywgb3B0aW9ucywgcGxheWVycykgPT4ge1xyXG5cdGxldCBzZW50ZW5jZXNTZWxlY3RlZCA9IFtdO1xyXG5cdGxldCBsZW5ndGhTZW50ZW5jZXMgPSBnZXRMZW5ndGhTZW50ZW5jZXMob3B0aW9ucy5kdXJhdGlvbik7XHJcblx0XHJcblx0bGV0IG5iU2VudGVuY2VzUGlja2VkID0gMDtcclxuICAgIGxldCBuYlZpcnVzUGlja2VkID0gMDtcclxuXHRsZXQgaWRTZW50ZW5jZXNQaWNrZWQgPSBbXTtcclxuXHJcblx0d2hpbGUgKG5iU2VudGVuY2VzUGlja2VkIDwgbGVuZ3RoU2VudGVuY2VzLnRvdGFsICYmIGlkU2VudGVuY2VzUGlja2VkLmxlbmd0aCA8IHNlbnRlbmNlcy5sZW5ndGgpIHtcclxuXHRcdC8vT24gY2hvaXNpdCB1biBudW3DqXJvIGF1IGhhc2FyZFxyXG5cdFx0bGV0IG5iUmFuZG9tU2VudGVuY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqc2VudGVuY2VzLmxlbmd0aCk7XHJcblx0XHRpZiAoIWlkU2VudGVuY2VzUGlja2VkLmluY2x1ZGVzKG5iUmFuZG9tU2VudGVuY2UpKSB7XHJcblx0XHRcdGlkU2VudGVuY2VzUGlja2VkLnB1c2gobmJSYW5kb21TZW50ZW5jZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgc2VudGVuY2VQaWNrZWQgPSBzZW50ZW5jZXNbbmJSYW5kb21TZW50ZW5jZV07XHJcblxyXG5cdFx0XHRpZiAoc2VudGVuY2VQaWNrZWQudHlwZSA9PSBcInZpcnVzXCIpIHtcclxuXHRcdFx0XHRpZiAobmJWaXJ1c1BpY2tlZCA8IGxlbmd0aFNlbnRlbmNlcy52aXJ1cykge1xyXG5cdFx0XHRcdFx0c2VudGVuY2VzU2VsZWN0ZWQucHVzaChzZW50ZW5jZVBpY2tlZCk7XHJcblx0XHRcdFx0XHRuYlNlbnRlbmNlc1BpY2tlZCsrO1xyXG5cdFx0XHRcdFx0bmJWaXJ1c1BpY2tlZCsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRzZW50ZW5jZXNTZWxlY3RlZC5wdXNoKHNlbnRlbmNlUGlja2VkKTtcclxuXHRcdFx0XHRuYlNlbnRlbmNlc1BpY2tlZCsrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc2VudGVuY2VzU2VsZWN0ZWQ7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRTZW50ZW5jZXMgPSAoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKSA9PiB7XHJcblx0bGV0IGFtb3VudCA9IGdldEFtb3VudChvcHRpb25zLmRpZmZpY3VsdHkpO1xyXG5cdHJldHVybiBzZW50ZW5jZXMubWFwKChzZW50ZW5jZSkgPT4ge1xyXG5cdFx0Ly9GYWl0IHVuZSBjb3BpZSBkZXMgam91ZXVyc1xyXG5cdFx0bGV0IHBsYXllcnNOb3RQaWNrZWQgPSBwbGF5ZXJzLnNsaWNlKCk7XHJcblxyXG5cdFx0Y29uc3QgaW5pdFBsYXllcnMgPSAoc3RyaW5nTWF0Y2gpID0+IHtcclxuXHRcdFx0d2hpbGUgKHNlbnRlbmNlLnRleHQuaW5kZXhPZihzdHJpbmdNYXRjaCkgPiAtMSkge1xyXG5cdFx0XHRcdC8vQ2hvaXNpdCBwYXJtaXMgcXVlbCB0eXBlIGRlIGpvdWV1ciBvbiBwZXV0IHRpcmVyXHJcblx0XHRcdFx0bGV0IHBsYXllclRvUGljaztcclxuXHRcdFx0XHRzd2l0Y2ggKHN0cmluZ01hdGNoKSB7XHJcblx0XHRcdFx0XHRjYXNlIHN0cmluZ1RvRmluZC5mZW1hbGU6XHJcblx0XHRcdFx0XHRcdHBsYXllclRvUGljayA9IHBsYXllcnNOb3RQaWNrZWQuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIuZ2VuZGVyID09IFwiRlwiKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIHN0cmluZ1RvRmluZC5tYWxlOlxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJUb1BpY2sgPSBwbGF5ZXJzTm90UGlja2VkLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLmdlbmRlciA9PSBcIk1cIik7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0cGxheWVyVG9QaWNrID0gcGxheWVyc05vdFBpY2tlZDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vQ2hvaXNpdCB1biBqb3VldXIgYXUgaGFzYXJkXHJcblx0XHRcdFx0bGV0IHBsYXllclBpY2tlZCA9IHBsYXllclRvUGlja1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcGxheWVyVG9QaWNrLmxlbmd0aCldO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vUmV0aXJlIGNlIGpvdWV1ciBkZSBsYSBsaXN0ZSBkZXMgam91ZXVycyBub24gcHJpc1xyXG5cdFx0XHRcdHBsYXllcnNOb3RQaWNrZWQuc3BsaWNlKHBsYXllcnNOb3RQaWNrZWQuaW5kZXhPZihwbGF5ZXJQaWNrZWQpLCAxKTtcclxuXHJcblx0XHRcdFx0Ly9SZW1wbGFjZSBsJ8OpbMOpbWVudCBwYXIgbGUgbm9tIGR1IGpvdWV1clxyXG5cdFx0XHRcdHNlbnRlbmNlLnRleHQgPSBzZW50ZW5jZS50ZXh0LnJlcGxhY2Uoc3RyaW5nTWF0Y2gsIHBsYXllclBpY2tlZC5uYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1NpIGxhIHBocmFzZSBlc3QgdW4gdmlydXMgZXQgcXUnb24gdHJvdXZlIHVuIMOpbMOpbWVudCBkYW5zIGxlcyBkZXRhaWxzXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VudGVuY2UudHlwZSA9PSBcInZpcnVzXCIgJiYgc2VudGVuY2UuZGV0YWlscy5pbmRleE9mKHN0cmluZ01hdGNoKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGFjZSBsZSBlbHRUb0ZpbmQgcGFyIGxlIG5vbSBkdSBqb3VldXIgKGxlIG3Dqm1lIHF1ZSBsZSB0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbnRlbmNlLmRldGFpbHMgPSBzZW50ZW5jZS5kZXRhaWxzLnJlcGxhY2Uoc3RyaW5nTWF0Y2gsIHBsYXllclBpY2tlZC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpbml0UGxheWVycyhzdHJpbmdUb0ZpbmQubmV1dHJhbCk7XHJcblx0XHRpbml0UGxheWVycyhzdHJpbmdUb0ZpbmQubWFsZSk7XHJcblx0XHRpbml0UGxheWVycyhzdHJpbmdUb0ZpbmQuZmVtYWxlKTtcclxuXHJcblx0XHRsZXQgZ29yZ2Vlc0ZpbmRlZCA9IHNlbnRlbmNlLnRleHQubWF0Y2gocmVnZXhUb0ZpbmQuZ29yZ2VlcykgfHwgW107XHJcblx0XHRnb3JnZWVzRmluZGVkLmZvckVhY2goKGVsdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLndhcm4oc2VudGVuY2UpO1xyXG5cdFx0XHRzZW50ZW5jZS50ZXh0LnJlcGxhY2VBbGwoZWx0LCBhbW91bnRbcGFyc2VJbnQoZWx0LmNoYXJBdCgyKSldKTtcclxuXHRcdFx0Y29uc29sZS53YXJuKHNlbnRlbmNlKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBzZW50ZW5jZTtcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBsYWNlIGxlcyB2aXJ1cyBlbiB0YW50IHF1ZSBwaHJhc2VcclxuICogQHBhcmFtIHtPYmplY3RbXX0gc2VudGVuY2VzIFRhYmxlYXUgZGVzIHBocmFzZXMgcmV0ZW51ZXNcclxuICovXHJcbiBjb25zdCBwdXRWaXJ1cyA9IChzZW50ZW5jZXMpID0+IHtcclxuXHRsZXQgbmV3U2VudGVuY2VzID0gc2VudGVuY2VzLnNsaWNlKCk7XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc2VudGVuY2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoc2VudGVuY2VzW2ldLnR5cGUgPT0gXCJ2aXJ1c1wiKSB7XHJcblx0XHRcdGNvbnN0IGluZGV4UmFuZFZpcnVzID0gZ2V0UmFuZG9tSW50KDMsIDYpOyAvL1RPRE8gOiBkaWZmZXJlbnQgdmlydXMgbGVuZ3RoIChkaWZmaWN1bHR5KVxyXG5cdFx0XHRjb25zdCBzZW50ZW5jZVZpcnVzID0ge1xyXG5cdFx0XHRcdFwidGV4dFwiOiBzZW50ZW5jZXNbaV0uZGV0YWlscyxcclxuXHRcdFx0XHRcInRoZW1lXCI6IHNlbnRlbmNlc1tpXS50aGVtZSxcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ2aXJ1c0VuZFwiLFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRuZXdTZW50ZW5jZXMuc3BsaWNlKGkraW5kZXhSYW5kVmlydXMsIDAsIHNlbnRlbmNlVmlydXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5ld1NlbnRlbmNlcztcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFBsYXkoKSB7XHJcblx0bGV0IGxvY2FsT3B0aW9ucyA9IG51bGw7XHJcblx0bGV0IGxvY2FsUGxheWVycyA9IG51bGw7XHJcblx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdFx0bG9jYWxPcHRpb25zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9wdGlvbnNcIikpO1xyXG5cdFx0bG9jYWxQbGF5ZXJzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllcnNcIikpO1xyXG5cdH1cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtwbGF5ZXJzXSA9IHVzZVN0YXRlKGxvY2FsUGxheWVycyk7XHJcblx0Y29uc3QgW29wdGlvbnNdID0gdXNlU3RhdGUobG9jYWxPcHRpb25zKTtcclxuXHRjb25zdCBbYmFyTGVuZ3RoLCBzZXRCYXJMZW5ndGhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRTZW50ZW5jZSA9IDA7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50LCBzZW50ZW5jZXMpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQvL0NsaXF1ZSDDoCBnYXVjaGVcclxuXHRcdGlmIChldmVudC5jbGllbnRYIDwgd2luZG93LmlubmVyV2lkdGggLyAyKSB7XHJcblx0XHRcdGlmIChjdXJyZW50U2VudGVuY2UgPiAwKSB7XHJcblx0XHRcdFx0Y3VycmVudFNlbnRlbmNlLS07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vQ2xpcXVlIMOgIGRyb2l0ZVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlmIChjdXJyZW50U2VudGVuY2UgPCBzZW50ZW5jZXMubGVuZ3RoLTEpIHtcclxuXHRcdFx0XHRjdXJyZW50U2VudGVuY2UrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRyb3V0ZXIucmVsb2FkKCcvcGxheScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRzZXRUZXh0KHNlbnRlbmNlc1tjdXJyZW50U2VudGVuY2VdLnRleHQpO1xyXG5cdFx0c2V0QmFyTGVuZ3RoKGdldExlbmd0aEJhcihzZW50ZW5jZXMubGVuZ3RoKSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0TGVuZ3RoQmFyID0gKHNlbnRlbmNlc0xlbmd0aCkgPT4ge1xyXG5cdFx0cmV0dXJuIGN1cnJlbnRTZW50ZW5jZSoxMDAgLyBzZW50ZW5jZXNMZW5ndGg7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxldCBzZW50ZW5jZXMgPSBmaWx0ZXJTZW50ZW5jZXMoZGF0YSwgb3B0aW9ucywgcGxheWVycyk7XHJcblx0XHRzZW50ZW5jZXMgPSBzZWxlY3RTZW50ZW5jZXMoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IGluaXRTZW50ZW5jZXMoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IHB1dFZpcnVzKHNlbnRlbmNlcyk7XHJcblx0XHRjb25zb2xlSW5mb3JtYXRpb24oc2VudGVuY2VzLCBwbGF5ZXJzKTtcclxuXHJcblx0XHRzZXRCYXJMZW5ndGgoZ2V0TGVuZ3RoQmFyKHNlbnRlbmNlcy5sZW5ndGgpKTtcclxuXHRcdHNldFRleHQoc2VudGVuY2VzWzBdLnRleHQpO1xyXG5cdFx0XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGhhbmRsZUNsaWNrKGUsIHNlbnRlbmNlcykpO1xyXG5cclxuICAgICAgICAvKmxldCBuUmFuZG9tU2VudGVuY2VzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKTtcclxuXHRcdHNldFRleHQoZGF0YVtuUmFuZG9tU2VudGVuY2VzXS50ZXh0KTsqL1xyXG5cclxuXHRcdC8vIFRPRE8gOiAoaWTDqWUgZW4gdHMgPT4gRmFpcmUgcmVkdWNlciBldCBpbnRlcmZhY2UgcG91ciBsZXMgcGhyYXNlcyBkdSBqc29uIDogaHR0cHM6Ly95b3V0dS5iZS9aNWlXcjZTcnNqOD90PTkxOClcclxuXHRcdC8vIChGYWlyZSBkZXMgZm9uY3Rpb25zIChlbiBkZWhvcnMgZHUgY29tcG9zYW50cyBwb3VyIHF1ZSDDp2Egc29pdCBjbGVhbiAoanVzdGUgYXUgZGVzc3VzIGzDoCkpKVxyXG5cdFx0Ly8gLSBGaWx0cmVyIGxlIGpzb24gZGF0YSBwb3VyIG5lIHByZW5kcmUgcXVlIGxlcyBwaHJhc2VzIHF1aSByZXNwZWN0ZW50IGxlcyBvcHRpb25zICh0aMOobWVzLi4uKVxyXG5cdFx0Ly8gLSBGYWlyZSBsZSB0YWJsZWF1IGRlIHBocmFzZXMgKHVuZSBjZXJ0YWluZSBsb25ndWV1ciBlbiBmb25jdGlvbiBkZSBsYSBsb25ndWV1ciBlbiBvcHRpb24pXHJcblx0XHQvLyAtIFJlbXBsYWNlciBsZXMgbm9tcyBkYW5zIGxlcyBwaHJhc2VzICh0aXJlciBsZXMgbm9tcyBhdSBoYXNhcmQgdG91dCDDp2EgdG91dCDDp2EpXHJcblx0XHQvLyAtIE1ldHRyZSBsZXMgdmlydXMgcXVlbHF1ZSBwYXJ0XHJcblx0XHQvLyAtIE1ldHRyZSBsYSBjb25zw6lxdWVuY2UganVzdGUgYXByw6hzIHBvdXIgbGVzIGNob2l4XHJcblx0XHQvL1xyXG5cdFx0Ly8gLSBQb3VyIGxlcyBjaG9peCwgY2Ugc2VyYSBkYW5zIGxlIGpldSBkZSByZW1wbGFjZXIgbGUgbm9tIGRlcyBkw6l0YWlscyBkb25jIHBhcyBkYW5zIGNldHRlIGZvbmN0aW9uXHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dCB0aXRsZT1cIlNlbGVjdGlvbm5lclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHtzdHlsZXMubWFpbn1gfT5cclxuXHRcdFx0XHQ8TGluayBocmVmPVwiL3NlbGVjdC9wbGF5ZXJzXCI+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e3N0eWxlcy5xdWl0QnRufT48L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdHt0aXRsZSB8fCBcIlwifVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0e3RleHQgfHwgXCJDaGFyZ2VtZW50Li4uXCJ9XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyQ29udGFpbmVyfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyfT5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmJhclZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7d2lkdGg6IGAke2Jhckxlbmd0aH0lYCwgYmFja2dyb3VuZENvbG9yOiBcIiM4NEZGQjlcIn19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5OyJdLCJzb3VyY2VSb290IjoiIn0=