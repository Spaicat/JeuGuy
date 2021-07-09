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
      console.warn({
        elt: elt,
        "test": sentence.text.match(elt)
      });
      sentence.text.replaceAll(elt, amount[parseInt(elt.charAt(2))]);
      console.log(sentence);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlSW5mb3JtYXRpb24iLCJzZW50ZW5jZXMiLCJwbGF5ZXJzIiwiY3NzU3F1YXJlIiwiY3NzU21hbGwiLCJjb25zb2xlIiwiZ3JvdXBDb2xsYXBzZWQiLCJsZW5ndGgiLCJmb3JFYWNoIiwicGxheWVyIiwibG9nIiwiZ2VuZGVyIiwibmFtZSIsImdyb3VwRW5kIiwiZmlsdGVyIiwieCIsInR5cGUiLCJzZW50ZW5jZSIsImNzc1RoZW1lIiwidGhlbWUiLCJzZW50ZW5jZVR5cGUiLCJzcGFjZVR5cGUiLCJ0ZXh0IiwidGFibGUiLCJyZWdleFRvRmluZCIsInN0cmluZ1RvRmluZCIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRBbW91bnQiLCJkaWZmaWN1bHR5IiwiZ2V0TGVuZ3RoU2VudGVuY2VzIiwiZHVyYXRpb24iLCJmaWx0ZXJTZW50ZW5jZXMiLCJvcHRpb25zIiwibmJGZW1hbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJuYkdlbmRlciIsImdldE5iRWx0IiwicmVnZXgiLCJtYXRjaCIsImVsdCIsIm5iRWx0RmluZGVkIiwibmV1dHJhbCIsIm5iRWx0TWFsZUZpbmRlZCIsIm1hbGUiLCJuYkVsdEZlbWFsZUZpbmRlZCIsImZlbWFsZSIsImVub3VnaEVsdEhvbW1lIiwiZW5vdWdoRWx0RmVtbWUiLCJlbm91Z2hQbGF5ZXIiLCJ0aGVtZXMiLCJpbmNsdWRlcyIsInNlbGVjdFNlbnRlbmNlcyIsInNlbnRlbmNlc1NlbGVjdGVkIiwibGVuZ3RoU2VudGVuY2VzIiwibmJTZW50ZW5jZXNQaWNrZWQiLCJuYlZpcnVzUGlja2VkIiwiaWRTZW50ZW5jZXNQaWNrZWQiLCJ0b3RhbCIsIm5iUmFuZG9tU2VudGVuY2UiLCJwdXNoIiwic2VudGVuY2VQaWNrZWQiLCJ2aXJ1cyIsImluaXRTZW50ZW5jZXMiLCJhbW91bnQiLCJtYXAiLCJwbGF5ZXJzTm90UGlja2VkIiwic2xpY2UiLCJpbml0UGxheWVycyIsInN0cmluZ01hdGNoIiwiaW5kZXhPZiIsInBsYXllclRvUGljayIsInBsYXllclBpY2tlZCIsInNwbGljZSIsInJlcGxhY2UiLCJkZXRhaWxzIiwiZ29yZ2Vlc0ZpbmRlZCIsImdvcmdlZXMiLCJ3YXJuIiwicmVwbGFjZUFsbCIsInBhcnNlSW50IiwiY2hhckF0IiwicHV0VmlydXMiLCJuZXdTZW50ZW5jZXMiLCJpIiwiaW5kZXhSYW5kVmlydXMiLCJzZW50ZW5jZVZpcnVzIiwiUGxheSIsImxvY2FsT3B0aW9ucyIsImxvY2FsUGxheWVycyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNldFRleHQiLCJ0aXRsZSIsInNldFRpdGxlIiwiYmFyTGVuZ3RoIiwic2V0QmFyTGVuZ3RoIiwiY3VycmVudFNlbnRlbmNlIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xpZW50WCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJyZWxvYWQiLCJnZXRMZW5ndGhCYXIiLCJzZW50ZW5jZXNMZW5ndGgiLCJ1c2VFZmZlY3QiLCJkYXRhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0eWxlcyIsInF1aXRCdG4iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFNBQUQsRUFBWUMsT0FBWixFQUF3QjtBQUNsRCxNQUFJQyxTQUFTLEdBQUcsMERBQWhCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLGtCQUFmO0FBQ0FDLFNBQU8sQ0FBQ0MsY0FBUixzQkFBcUNKLE9BQU8sQ0FBQ0ssTUFBN0Msa0JB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QUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXdCQTs7R0EzRlFqQyxJO1VBT09RLGtEOzs7S0FQUFIsSTtBQTZGVCwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wbGF5LjcyMzY5NDg5ZDY2ZmNlMjI5MGVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9QbGF5Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9zZW50ZW5jZXNfdGVzdC5qc29uJztcclxuXHJcbmNvbnN0IGNvbnNvbGVJbmZvcm1hdGlvbiA9IChzZW50ZW5jZXMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgY3NzU3F1YXJlID0gXCJwYWRkaW5nOiAzcHggNXB4OyBib3JkZXItcmFkaXVzOiA1cHg7IGZvbnQtd2VpZ2h0OiBib2xkO1wiO1xyXG5cdGxldCBjc3NTbWFsbCA9IFwiZm9udC1zaXplOiAxMHB4O1wiO1xyXG5cdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYCVjSm91ZXVycyAoJHtwbGF5ZXJzLmxlbmd0aH0pYCwgYCR7Y3NzU3F1YXJlfSBjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2ApO1xyXG5cdHBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coYCVjJHtwbGF5ZXIuZ2VuZGVyfSVjICR7cGxheWVyLm5hbWV9YCxcclxuXHRcdGAke2Nzc1NxdWFyZX0gY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtgLFxyXG5cdFx0XCJcIik7XHJcblx0fSk7XHJcblx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYCVjUGhyYXNlcyAoJHtzZW50ZW5jZXMubGVuZ3RofSklYyAlYygke3NlbnRlbmNlcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gXCJ2aXJ1c1wiKS5sZW5ndGh9IHZpcnVzKWAsXHJcblx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2AsXHJcblx0XCJcIixcclxuXHRgJHtjc3NTcXVhcmV9IGNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogcmVkO2ApO1xyXG5cdHNlbnRlbmNlcy5mb3JFYWNoKHNlbnRlbmNlID0+IHtcclxuXHRcdGxldCBjc3NUaGVtZSA9IFwiXCI7XHJcblx0XHRzd2l0Y2ggKHNlbnRlbmNlLnRoZW1lKSB7XHJcblx0XHRcdGNhc2UgXCJzcG9ydFwiOlxyXG5cdFx0XHRcdGNzc1RoZW1lID0gXCJjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IGJsdWU7XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJob3RcIjpcclxuXHRcdFx0XHRjc3NUaGVtZSA9IFwiY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNmJmO1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGNzc1RoZW1lID0gXCJjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0bGV0IHNlbnRlbmNlVHlwZSA9IFwiXCI7XHJcblx0XHRsZXQgc3BhY2VUeXBlID0gXCJcIjtcclxuXHRcdGlmIChzZW50ZW5jZS50eXBlICE9IFwibm9ybWFsXCIpIHtcclxuXHRcdFx0c2VudGVuY2VUeXBlID0gc2VudGVuY2UudHlwZTtcclxuXHRcdFx0c3BhY2VUeXBlID0gXCIgXCI7XHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGAlYyR7c2VudGVuY2VUeXBlfSVjJHtzcGFjZVR5cGV9JWMke3NlbnRlbmNlLnRoZW1lfSVjICR7c2VudGVuY2UudGV4dH1gLFxyXG5cdFx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IHJlZDsgJHtjc3NTbWFsbH1gLFxyXG5cdFx0YCR7Y3NzU21hbGx9YCxcclxuXHRcdGAke2Nzc1NxdWFyZX0gJHtjc3NUaGVtZX0gJHtjc3NTbWFsbH1gLFxyXG5cdFx0YCR7Y3NzU21hbGx9YCk7XHJcblx0XHRjb25zb2xlLnRhYmxlKHNlbnRlbmNlKTtcclxuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHR9KTtcclxuXHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuXHJcblxyXG5sZXQgcmVnZXhUb0ZpbmQgPSB7XHJcblx0XCJuZXV0cmFsXCI6IC9cXFtub21cXF0vZyxcclxuXHRcIm1hbGVcIjogL1xcW25vbU1cXF0vZyxcclxuXHRcImZlbWFsZVwiOiAvXFxbbm9tRlxcXS9nLFxyXG5cdFwiZ29yZ2Vlc1wiOiAvXFxbZ1swLTNdXFxdL2csXHJcbn07XHJcbmxldCBzdHJpbmdUb0ZpbmQgPSB7XHJcblx0XCJuZXV0cmFsXCI6IFwiW25vbV1cIixcclxuXHRcIm1hbGVcIjogXCJbbm9tTV1cIixcclxuXHRcImZlbWFsZVwiOiBcIltub21GXVwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbnZvaWUgdW4gZW50aWVyIGFsw6lhdG9pcmUgZW50cmUgbWluIGV0IG1heCBbbWluLCBtYXhdXHJcbiAqIEBwYXJhbSAge251bWJlcn0gbWluIGxhIHZhbGV1ciBtaW5pbXVtIHF1ZSBwZXV0IGF0dGVpbmRyZSBsJ2VudGllclxyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heCBsYSB2YWxldXIgbWF4aW11bSBxdWUgcGV1dCBhdHRlaW5kcmUgbCdlbnRpZXJcclxuICogQHJldHVybiB7bnVtYmVyfSBMJ2VudGllciB0aXLDqSBhdSBoYXNhcmRcclxuICovXHJcbiBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcclxuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtudW1iZXJ9IGRpZmZpY3VsdHkgXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG4gY29uc3QgZ2V0QW1vdW50ID0gKGRpZmZpY3VsdHkpID0+IHtcclxuXHRyZXR1cm4gW1xyXG5cdFx0W1wiMiBnb3Jnw6llc1wiLCBcIjMgZ29yZ8OpZXNcIiwgXCI0IGdvcmfDqWVzXCIsIFwiNiBnb3Jnw6llc1wiXSxcclxuXHRcdFtcIjMgZ29yZ8OpZXNcIiwgXCI0IGdvcmfDqWVzXCIsIFwiNiBnb3Jnw6llc1wiLCBcIjkgZ29yZ8OpZXNcIl0sXHJcblx0XHRbXCI0IGdvcmfDqWVzXCIsIFwiNiBnb3Jnw6llc1wiLCBcIjggZ29yZ8OpZXNcIiwgXCIxIGN1bCBzZWNcIl0sXHJcblx0XVtkaWZmaWN1bHR5XTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbnZvaWUgbGUgbm9tYnJlIGRlIHBocmFzZXMgw6AgYWZmaWNoZXJcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBOb21icmUgZGUgcGhyYXNlc1xyXG4gKi9cclxuY29uc3QgZ2V0TGVuZ3RoU2VudGVuY2VzID0gKGR1cmF0aW9uKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdFwidG90YWxcIjogMjAgKyAxNSpkdXJhdGlvbixcclxuXHRcdFwidmlydXNcIjogMiArIDIqZHVyYXRpb25cclxuXHR9O1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IHNlbnRlbmNlc1xyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBvcHRpb25zIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBwbGF5ZXJzIFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0W119IFxyXG4gKi9cclxuY29uc3QgZmlsdGVyU2VudGVuY2VzID0gKHNlbnRlbmNlcywgb3B0aW9ucywgcGxheWVycykgPT4ge1xyXG5cdGxldCBuYkZlbWFsZSA9IHBsYXllcnMucmVkdWNlKChhY2MsIGN1cikgPT4gY3VyLmdlbmRlciA9PT0gXCJGXCIgPyArK2FjYyA6IGFjYywgMCk7XHJcblx0bGV0IG5iR2VuZGVyID0ge1xyXG5cdFx0XCJmZW1hbGVcIjogbmJGZW1hbGUsXHJcblx0XHRcIm1hbGVcIjogcGxheWVycy5sZW5ndGggLSBuYkZlbWFsZVxyXG5cdH07XHJcblxyXG5cdC8vTm9tYnJlIGQnw6lsw6ltZW50IHJlZ2V4IHRyb3V2w6kgZGFucyBsYSBwaHJhc2VcclxuXHRjb25zdCBnZXROYkVsdCA9IChyZWdleCwgdGV4dCkgPT4ge1xyXG5cdFx0cmV0dXJuICh0ZXh0Lm1hdGNoKHJlZ2V4KSB8fCBbXSkubGVuZ3RoO1xyXG5cdH07XHJcblx0XHJcblx0cmV0dXJuIHNlbnRlbmNlcy5maWx0ZXIoKGVsdCkgPT4ge1xyXG5cdFx0bGV0IG5iRWx0RmluZGVkID0gZ2V0TmJFbHQocmVnZXhUb0ZpbmQubmV1dHJhbCwgZWx0LnRleHQpO1xyXG5cdFx0bGV0IG5iRWx0TWFsZUZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLm1hbGUsIGVsdC50ZXh0KTtcclxuXHRcdGxldCBuYkVsdEZlbWFsZUZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLmZlbWFsZSwgZWx0LnRleHQpO1xyXG5cdFx0XHJcblx0XHQvL09uIHbDqXJpZmllIHMnaWwgeSBhIGJpZW4sIGF1dGFudCBvdSBwbHVzIGRlIGpvdWV1ciBxdWUgbGEgcGhyYXNlcyBlbiBuw6ljZXNzaXRlIChlbiBmb25jdGlvbiBkdSBzZXhlKVxyXG5cdFx0bGV0IGVub3VnaEVsdEhvbW1lID0gbmJHZW5kZXIubWFsZSA+PSBuYkVsdE1hbGVGaW5kZWQ7XHJcblx0XHRsZXQgZW5vdWdoRWx0RmVtbWUgPSBuYkdlbmRlci5mZW1hbGUgPj0gbmJFbHRGZW1hbGVGaW5kZWQ7XHJcblx0XHRsZXQgZW5vdWdoUGxheWVyID0gcGxheWVycy5sZW5ndGggPj0gKG5iRWx0RmluZGVkICsgbmJFbHRNYWxlRmluZGVkICsgbmJFbHRGZW1hbGVGaW5kZWQpO1xyXG5cclxuXHRcdHJldHVybiBvcHRpb25zLnRoZW1lcy5pbmNsdWRlcyhlbHQudGhlbWUpICYmIGVub3VnaEVsdEhvbW1lICYmIGVub3VnaEVsdEZlbW1lICYmIGVub3VnaFBsYXllcjtcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzZW50ZW5jZXMgXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IG9wdGlvbnMgXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IHBsYXllcnMgXHJcbiAqIEByZXR1cm5zIHtPYmplY3RbXX1cclxuICovXHJcbmNvbnN0IHNlbGVjdFNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgc2VudGVuY2VzU2VsZWN0ZWQgPSBbXTtcclxuXHRsZXQgbGVuZ3RoU2VudGVuY2VzID0gZ2V0TGVuZ3RoU2VudGVuY2VzKG9wdGlvbnMuZHVyYXRpb24pO1xyXG5cdFxyXG5cdGxldCBuYlNlbnRlbmNlc1BpY2tlZCA9IDA7XHJcbiAgICBsZXQgbmJWaXJ1c1BpY2tlZCA9IDA7XHJcblx0bGV0IGlkU2VudGVuY2VzUGlja2VkID0gW107XHJcblxyXG5cdHdoaWxlIChuYlNlbnRlbmNlc1BpY2tlZCA8IGxlbmd0aFNlbnRlbmNlcy50b3RhbCAmJiBpZFNlbnRlbmNlc1BpY2tlZC5sZW5ndGggPCBzZW50ZW5jZXMubGVuZ3RoKSB7XHJcblx0XHQvL09uIGNob2lzaXQgdW4gbnVtw6lybyBhdSBoYXNhcmRcclxuXHRcdGxldCBuYlJhbmRvbVNlbnRlbmNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnNlbnRlbmNlcy5sZW5ndGgpO1xyXG5cdFx0aWYgKCFpZFNlbnRlbmNlc1BpY2tlZC5pbmNsdWRlcyhuYlJhbmRvbVNlbnRlbmNlKSkge1xyXG5cdFx0XHRpZFNlbnRlbmNlc1BpY2tlZC5wdXNoKG5iUmFuZG9tU2VudGVuY2UpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHNlbnRlbmNlUGlja2VkID0gc2VudGVuY2VzW25iUmFuZG9tU2VudGVuY2VdO1xyXG5cclxuXHRcdFx0aWYgKHNlbnRlbmNlUGlja2VkLnR5cGUgPT0gXCJ2aXJ1c1wiKSB7XHJcblx0XHRcdFx0aWYgKG5iVmlydXNQaWNrZWQgPCBsZW5ndGhTZW50ZW5jZXMudmlydXMpIHtcclxuXHRcdFx0XHRcdHNlbnRlbmNlc1NlbGVjdGVkLnB1c2goc2VudGVuY2VQaWNrZWQpO1xyXG5cdFx0XHRcdFx0bmJTZW50ZW5jZXNQaWNrZWQrKztcclxuXHRcdFx0XHRcdG5iVmlydXNQaWNrZWQrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0c2VudGVuY2VzU2VsZWN0ZWQucHVzaChzZW50ZW5jZVBpY2tlZCk7XHJcblx0XHRcdFx0bmJTZW50ZW5jZXNQaWNrZWQrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNlbnRlbmNlc1NlbGVjdGVkO1xyXG59XHJcblxyXG5jb25zdCBpbml0U2VudGVuY2VzID0gKHNlbnRlbmNlcywgb3B0aW9ucywgcGxheWVycykgPT4ge1xyXG5cdGxldCBhbW91bnQgPSBnZXRBbW91bnQob3B0aW9ucy5kaWZmaWN1bHR5KTtcclxuXHRyZXR1cm4gc2VudGVuY2VzLm1hcCgoc2VudGVuY2UpID0+IHtcclxuXHRcdC8vRmFpdCB1bmUgY29waWUgZGVzIGpvdWV1cnNcclxuXHRcdGxldCBwbGF5ZXJzTm90UGlja2VkID0gcGxheWVycy5zbGljZSgpO1xyXG5cclxuXHRcdGNvbnN0IGluaXRQbGF5ZXJzID0gKHN0cmluZ01hdGNoKSA9PiB7XHJcblx0XHRcdHdoaWxlIChzZW50ZW5jZS50ZXh0LmluZGV4T2Yoc3RyaW5nTWF0Y2gpID4gLTEpIHtcclxuXHRcdFx0XHQvL0Nob2lzaXQgcGFybWlzIHF1ZWwgdHlwZSBkZSBqb3VldXIgb24gcGV1dCB0aXJlclxyXG5cdFx0XHRcdGxldCBwbGF5ZXJUb1BpY2s7XHJcblx0XHRcdFx0c3dpdGNoIChzdHJpbmdNYXRjaCkge1xyXG5cdFx0XHRcdFx0Y2FzZSBzdHJpbmdUb0ZpbmQuZmVtYWxlOlxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJUb1BpY2sgPSBwbGF5ZXJzTm90UGlja2VkLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLmdlbmRlciA9PSBcIkZcIik7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBzdHJpbmdUb0ZpbmQubWFsZTpcclxuXHRcdFx0XHRcdFx0cGxheWVyVG9QaWNrID0gcGxheWVyc05vdFBpY2tlZC5maWx0ZXIocGxheWVyID0+IHBsYXllci5nZW5kZXIgPT0gXCJNXCIpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdHBsYXllclRvUGljayA9IHBsYXllcnNOb3RQaWNrZWQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL0Nob2lzaXQgdW4gam91ZXVyIGF1IGhhc2FyZFxyXG5cdFx0XHRcdGxldCBwbGF5ZXJQaWNrZWQgPSBwbGF5ZXJUb1BpY2tbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnBsYXllclRvUGljay5sZW5ndGgpXTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL1JldGlyZSBjZSBqb3VldXIgZGUgbGEgbGlzdGUgZGVzIGpvdWV1cnMgbm9uIHByaXNcclxuXHRcdFx0XHRwbGF5ZXJzTm90UGlja2VkLnNwbGljZShwbGF5ZXJzTm90UGlja2VkLmluZGV4T2YocGxheWVyUGlja2VkKSwgMSk7XHJcblxyXG5cdFx0XHRcdC8vUmVtcGxhY2UgbCfDqWzDqW1lbnQgcGFyIGxlIG5vbSBkdSBqb3VldXJcclxuXHRcdFx0XHRzZW50ZW5jZS50ZXh0ID0gc2VudGVuY2UudGV4dC5yZXBsYWNlKHN0cmluZ01hdGNoLCBwbGF5ZXJQaWNrZWQubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9TaSBsYSBwaHJhc2UgZXN0IHVuIHZpcnVzIGV0IHF1J29uIHRyb3V2ZSB1biDDqWzDqW1lbnQgZGFucyBsZXMgZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbnRlbmNlLnR5cGUgPT0gXCJ2aXJ1c1wiICYmIHNlbnRlbmNlLmRldGFpbHMuaW5kZXhPZihzdHJpbmdNYXRjaCkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtcGxhY2UgbGUgZWx0VG9GaW5kIHBhciBsZSBub20gZHUgam91ZXVyIChsZSBtw6ptZSBxdWUgbGUgdGV4dClcclxuICAgICAgICAgICAgICAgICAgICBzZW50ZW5jZS5kZXRhaWxzID0gc2VudGVuY2UuZGV0YWlscy5yZXBsYWNlKHN0cmluZ01hdGNoLCBwbGF5ZXJQaWNrZWQubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aW5pdFBsYXllcnMoc3RyaW5nVG9GaW5kLm5ldXRyYWwpO1xyXG5cdFx0aW5pdFBsYXllcnMoc3RyaW5nVG9GaW5kLm1hbGUpO1xyXG5cdFx0aW5pdFBsYXllcnMoc3RyaW5nVG9GaW5kLmZlbWFsZSk7XHJcblxyXG5cdFx0bGV0IGdvcmdlZXNGaW5kZWQgPSBzZW50ZW5jZS50ZXh0Lm1hdGNoKHJlZ2V4VG9GaW5kLmdvcmdlZXMpIHx8IFtdO1xyXG5cdFx0Z29yZ2Vlc0ZpbmRlZC5mb3JFYWNoKChlbHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS53YXJuKHsgZWx0LCBcInRlc3RcIjogc2VudGVuY2UudGV4dC5tYXRjaChlbHQpIH0pO1xyXG5cdFx0XHRzZW50ZW5jZS50ZXh0LnJlcGxhY2VBbGwoZWx0LCBhbW91bnRbcGFyc2VJbnQoZWx0LmNoYXJBdCgyKSldKTtcclxuXHRcdFx0Y29uc29sZS5sb2coc2VudGVuY2UpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHNlbnRlbmNlO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vKipcclxuICogUGxhY2UgbGVzIHZpcnVzIGVuIHRhbnQgcXVlIHBocmFzZVxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzZW50ZW5jZXMgVGFibGVhdSBkZXMgcGhyYXNlcyByZXRlbnVlc1xyXG4gKi9cclxuIGNvbnN0IHB1dFZpcnVzID0gKHNlbnRlbmNlcykgPT4ge1xyXG5cdGxldCBuZXdTZW50ZW5jZXMgPSBzZW50ZW5jZXMuc2xpY2UoKTtcclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZW50ZW5jZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChzZW50ZW5jZXNbaV0udHlwZSA9PSBcInZpcnVzXCIpIHtcclxuXHRcdFx0Y29uc3QgaW5kZXhSYW5kVmlydXMgPSBnZXRSYW5kb21JbnQoMywgNik7IC8vVE9ETyA6IGRpZmZlcmVudCB2aXJ1cyBsZW5ndGggKGRpZmZpY3VsdHkpXHJcblx0XHRcdGNvbnN0IHNlbnRlbmNlVmlydXMgPSB7XHJcblx0XHRcdFx0XCJ0ZXh0XCI6IHNlbnRlbmNlc1tpXS5kZXRhaWxzLFxyXG5cdFx0XHRcdFwidGhlbWVcIjogc2VudGVuY2VzW2ldLnRoZW1lLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInZpcnVzRW5kXCIsXHJcblx0XHRcdH07XHJcblx0XHRcdG5ld1NlbnRlbmNlcy5zcGxpY2UoaStpbmRleFJhbmRWaXJ1cywgMCwgc2VudGVuY2VWaXJ1cyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbmV3U2VudGVuY2VzO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gUGxheSgpIHtcclxuXHRsZXQgbG9jYWxPcHRpb25zID0gbnVsbDtcclxuXHRsZXQgbG9jYWxQbGF5ZXJzID0gbnVsbDtcclxuXHRpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcblx0XHRsb2NhbE9wdGlvbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3B0aW9uc1wiKSk7XHJcblx0XHRsb2NhbFBsYXllcnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyc1wiKSk7XHJcblx0fVxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3BsYXllcnNdID0gdXNlU3RhdGUobG9jYWxQbGF5ZXJzKTtcclxuXHRjb25zdCBbb3B0aW9uc10gPSB1c2VTdGF0ZShsb2NhbE9wdGlvbnMpO1xyXG5cdGNvbnN0IFtiYXJMZW5ndGgsIHNldEJhckxlbmd0aF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBsZXQgY3VycmVudFNlbnRlbmNlID0gMDtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQsIHNlbnRlbmNlcykgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdC8vQ2xpcXVlIMOgIGdhdWNoZVxyXG5cdFx0aWYgKGV2ZW50LmNsaWVudFggPCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIHtcclxuXHRcdFx0aWYgKGN1cnJlbnRTZW50ZW5jZSA+IDApIHtcclxuXHRcdFx0XHRjdXJyZW50U2VudGVuY2UtLTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly9DbGlxdWUgw6AgZHJvaXRlXHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aWYgKGN1cnJlbnRTZW50ZW5jZSA8IHNlbnRlbmNlcy5sZW5ndGgtMSkge1xyXG5cdFx0XHRcdGN1cnJlbnRTZW50ZW5jZSsrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHJvdXRlci5yZWxvYWQoJy9wbGF5Jyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHNldFRleHQoc2VudGVuY2VzW2N1cnJlbnRTZW50ZW5jZV0udGV4dCk7XHJcblx0XHRzZXRCYXJMZW5ndGgoZ2V0TGVuZ3RoQmFyKHNlbnRlbmNlcy5sZW5ndGgpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRMZW5ndGhCYXIgPSAoc2VudGVuY2VzTGVuZ3RoKSA9PiB7XHJcblx0XHRyZXR1cm4gY3VycmVudFNlbnRlbmNlKjEwMCAvIHNlbnRlbmNlc0xlbmd0aDtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGV0IHNlbnRlbmNlcyA9IGZpbHRlclNlbnRlbmNlcyhkYXRhLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IHNlbGVjdFNlbnRlbmNlcyhzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpO1xyXG5cdFx0c2VudGVuY2VzID0gaW5pdFNlbnRlbmNlcyhzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpO1xyXG5cdFx0c2VudGVuY2VzID0gcHV0VmlydXMoc2VudGVuY2VzKTtcclxuXHRcdGNvbnNvbGVJbmZvcm1hdGlvbihzZW50ZW5jZXMsIHBsYXllcnMpO1xyXG5cclxuXHRcdHNldEJhckxlbmd0aChnZXRMZW5ndGhCYXIoc2VudGVuY2VzLmxlbmd0aCkpO1xyXG5cdFx0c2V0VGV4dChzZW50ZW5jZXNbMF0udGV4dCk7XHJcblx0XHRcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gaGFuZGxlQ2xpY2soZSwgc2VudGVuY2VzKSk7XHJcblxyXG4gICAgICAgIC8qbGV0IG5SYW5kb21TZW50ZW5jZXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpO1xyXG5cdFx0c2V0VGV4dChkYXRhW25SYW5kb21TZW50ZW5jZXNdLnRleHQpOyovXHJcblxyXG5cdFx0Ly8gVE9ETyA6IChpZMOpZSBlbiB0cyA9PiBGYWlyZSByZWR1Y2VyIGV0IGludGVyZmFjZSBwb3VyIGxlcyBwaHJhc2VzIGR1IGpzb24gOiBodHRwczovL3lvdXR1LmJlL1o1aVdyNlNyc2o4P3Q9OTE4KVxyXG5cdFx0Ly8gKEZhaXJlIGRlcyBmb25jdGlvbnMgKGVuIGRlaG9ycyBkdSBjb21wb3NhbnRzIHBvdXIgcXVlIMOnYSBzb2l0IGNsZWFuIChqdXN0ZSBhdSBkZXNzdXMgbMOgKSkpXHJcblx0XHQvLyAtIEZpbHRyZXIgbGUganNvbiBkYXRhIHBvdXIgbmUgcHJlbmRyZSBxdWUgbGVzIHBocmFzZXMgcXVpIHJlc3BlY3RlbnQgbGVzIG9wdGlvbnMgKHRow6htZXMuLi4pXHJcblx0XHQvLyAtIEZhaXJlIGxlIHRhYmxlYXUgZGUgcGhyYXNlcyAodW5lIGNlcnRhaW5lIGxvbmd1ZXVyIGVuIGZvbmN0aW9uIGRlIGxhIGxvbmd1ZXVyIGVuIG9wdGlvbilcclxuXHRcdC8vIC0gUmVtcGxhY2VyIGxlcyBub21zIGRhbnMgbGVzIHBocmFzZXMgKHRpcmVyIGxlcyBub21zIGF1IGhhc2FyZCB0b3V0IMOnYSB0b3V0IMOnYSlcclxuXHRcdC8vIC0gTWV0dHJlIGxlcyB2aXJ1cyBxdWVscXVlIHBhcnRcclxuXHRcdC8vIC0gTWV0dHJlIGxhIGNvbnPDqXF1ZW5jZSBqdXN0ZSBhcHLDqHMgcG91ciBsZXMgY2hvaXhcclxuXHRcdC8vXHJcblx0XHQvLyAtIFBvdXIgbGVzIGNob2l4LCBjZSBzZXJhIGRhbnMgbGUgamV1IGRlIHJlbXBsYWNlciBsZSBub20gZGVzIGTDqXRhaWxzIGRvbmMgcGFzIGRhbnMgY2V0dGUgZm9uY3Rpb25cclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0IHRpdGxlPVwiU2VsZWN0aW9ubmVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke3N0eWxlcy5tYWlufWB9PlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvc2VsZWN0L3BsYXllcnNcIj5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT17c3R5bGVzLnF1aXRCdG59PjwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0e3RpdGxlIHx8IFwiXCJ9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHR7dGV4dCB8fCBcIkNoYXJnZW1lbnQuLi5cIn1cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJDb250YWluZXJ9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJ9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuYmFyVmFsdWV9XHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3t3aWR0aDogYCR7YmFyTGVuZ3RofSVgLCBiYWNrZ3JvdW5kQ29sb3I6IFwiIzg0RkZCOVwifX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXk7Il0sInNvdXJjZVJvb3QiOiIifQ==