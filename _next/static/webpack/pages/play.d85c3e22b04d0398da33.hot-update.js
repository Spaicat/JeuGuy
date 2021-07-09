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
          lineNumber: 303,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "title",
        children: title || ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: text || "Chargement..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
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
            lineNumber: 313,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 300,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlSW5mb3JtYXRpb24iLCJzZW50ZW5jZXMiLCJwbGF5ZXJzIiwiY3NzU3F1YXJlIiwiY3NzU21hbGwiLCJjb25zb2xlIiwiZ3JvdXBDb2xsYXBzZWQiLCJsZW5ndGgiLCJmb3JFYWNoIiwicGxheWVyIiwibG9nIiwiZ2VuZGVyIiwibmFtZSIsImdyb3VwRW5kIiwiZmlsdGVyIiwieCIsInR5cGUiLCJzZW50ZW5jZSIsImNzc1RoZW1lIiwidGhlbWUiLCJzZW50ZW5jZVR5cGUiLCJzcGFjZVR5cGUiLCJ0ZXh0IiwidGFibGUiLCJyZWdleFRvRmluZCIsInN0cmluZ1RvRmluZCIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRMZW5ndGhTZW50ZW5jZXMiLCJkdXJhdGlvbiIsImZpbHRlclNlbnRlbmNlcyIsIm9wdGlvbnMiLCJuYkZlbWFsZSIsInJlZHVjZSIsImFjYyIsImN1ciIsIm5iR2VuZGVyIiwiZ2V0TmJFbHQiLCJyZWdleCIsIm1hdGNoIiwiZWx0IiwibmJFbHRGaW5kZWQiLCJuZXV0cmFsIiwibmJFbHRNYWxlRmluZGVkIiwibWFsZSIsIm5iRWx0RmVtYWxlRmluZGVkIiwiZmVtYWxlIiwiZW5vdWdoRWx0SG9tbWUiLCJlbm91Z2hFbHRGZW1tZSIsImVub3VnaFBsYXllciIsInRoZW1lcyIsImluY2x1ZGVzIiwic2VsZWN0U2VudGVuY2VzIiwic2VudGVuY2VzU2VsZWN0ZWQiLCJsZW5ndGhTZW50ZW5jZXMiLCJuYlNlbnRlbmNlc1BpY2tlZCIsIm5iVmlydXNQaWNrZWQiLCJpZFNlbnRlbmNlc1BpY2tlZCIsInRvdGFsIiwibmJSYW5kb21TZW50ZW5jZSIsInB1c2giLCJzZW50ZW5jZVBpY2tlZCIsInZpcnVzIiwiaW5pdFNlbnRlbmNlcyIsIm1hcCIsInBsYXllcnNOb3RQaWNrZWQiLCJzbGljZSIsImluaXRQbGF5ZXJzIiwic3RyaW5nTWF0Y2giLCJpbmRleE9mIiwicGxheWVyVG9QaWNrIiwicGxheWVyUGlja2VkIiwic3BsaWNlIiwicmVwbGFjZSIsImRldGFpbHMiLCJwdXRWaXJ1cyIsIm5ld1NlbnRlbmNlcyIsImkiLCJpbmRleFJhbmRWaXJ1cyIsInNlbnRlbmNlVmlydXMiLCJQbGF5IiwibG9jYWxPcHRpb25zIiwibG9jYWxQbGF5ZXJzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwic2V0VGV4dCIsInRpdGxlIiwic2V0VGl0bGUiLCJiYXJMZW5ndGgiLCJzZXRCYXJMZW5ndGgiLCJjdXJyZW50U2VudGVuY2UiLCJoYW5kbGVDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjbGllbnRYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInJlbG9hZCIsImdldExlbmd0aEJhciIsInNlbnRlbmNlc0xlbmd0aCIsInVzZUVmZmVjdCIsImRhdGEiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3R5bGVzIiwicXVpdEJ0biIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsU0FBRCxFQUFZQyxPQUFaLEVBQXdCO0FBQ2xELE1BQUlDLFNBQVMsR0FBRywwREFBaEI7QUFDQSxNQUFJQyxRQUFRLEdBQUcsa0JBQWY7QUFDQUMsU0FBTyxDQUFDQyxjQUFSLHNCQUFxQ0osT0FBTyxDQUFDSyxNQUE3QyxrQkFBMkRKLFNBQTNEO0FBQ0FELFNBQU8sQ0FBQ00sT0FBUixDQUFnQixVQUFBQyxNQUFNLEVBQUk7QUFDekJKLFdBQU8sQ0FBQ0ssR0FBUixhQUFpQkQsTUFBTSxDQUFDRSxNQUF4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QUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXdCQTs7R0EzRlFqQyxJO1VBT09RLGtEOzs7S0FQUFIsSTtBQTZGVCwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wbGF5LmQ4NWMzZTIyYjA0ZDAzOThkYTMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9QbGF5Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9zZW50ZW5jZXNfdGVzdC5qc29uJztcclxuXHJcbmNvbnN0IGNvbnNvbGVJbmZvcm1hdGlvbiA9IChzZW50ZW5jZXMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgY3NzU3F1YXJlID0gXCJwYWRkaW5nOiAzcHggNXB4OyBib3JkZXItcmFkaXVzOiA1cHg7IGZvbnQtd2VpZ2h0OiBib2xkO1wiO1xyXG5cdGxldCBjc3NTbWFsbCA9IFwiZm9udC1zaXplOiAxMHB4O1wiO1xyXG5cdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYCVjSm91ZXVycyAoJHtwbGF5ZXJzLmxlbmd0aH0pYCwgYCR7Y3NzU3F1YXJlfSBjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2ApO1xyXG5cdHBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coYCVjJHtwbGF5ZXIuZ2VuZGVyfSVjICR7cGxheWVyLm5hbWV9YCxcclxuXHRcdGAke2Nzc1NxdWFyZX0gY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtgLFxyXG5cdFx0XCJcIik7XHJcblx0fSk7XHJcblx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYCVjUGhyYXNlcyAoJHtzZW50ZW5jZXMubGVuZ3RofSklYyAlYygke3NlbnRlbmNlcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gXCJ2aXJ1c1wiKS5sZW5ndGh9IHZpcnVzKWAsXHJcblx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2AsXHJcblx0XCJcIixcclxuXHRgJHtjc3NTcXVhcmV9IGNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogcmVkO2ApO1xyXG5cdHNlbnRlbmNlcy5mb3JFYWNoKHNlbnRlbmNlID0+IHtcclxuXHRcdGxldCBjc3NUaGVtZSA9IFwiXCI7XHJcblx0XHRzd2l0Y2ggKHNlbnRlbmNlLnRoZW1lKSB7XHJcblx0XHRcdGNhc2UgXCJzcG9ydFwiOlxyXG5cdFx0XHRcdGNzc1RoZW1lID0gXCJjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IGJsdWU7XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJob3RcIjpcclxuXHRcdFx0XHRjc3NUaGVtZSA9IFwiY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNmJmO1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGNzc1RoZW1lID0gXCJjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0bGV0IHNlbnRlbmNlVHlwZSA9IFwiXCI7XHJcblx0XHRsZXQgc3BhY2VUeXBlID0gXCJcIjtcclxuXHRcdGlmIChzZW50ZW5jZS50eXBlICE9IFwibm9ybWFsXCIpIHtcclxuXHRcdFx0c2VudGVuY2VUeXBlID0gc2VudGVuY2UudHlwZTtcclxuXHRcdFx0c3BhY2VUeXBlID0gXCIgXCI7XHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGAlYyR7c2VudGVuY2VUeXBlfSVjJHtzcGFjZVR5cGV9JWMke3NlbnRlbmNlLnRoZW1lfSVjICR7c2VudGVuY2UudGV4dH1gLFxyXG5cdFx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IHJlZDsgJHtjc3NTbWFsbH1gLFxyXG5cdFx0YCR7Y3NzU21hbGx9YCxcclxuXHRcdGAke2Nzc1NxdWFyZX0gJHtjc3NUaGVtZX0gJHtjc3NTbWFsbH1gLFxyXG5cdFx0YCR7Y3NzU21hbGx9YCk7XHJcblx0XHRjb25zb2xlLnRhYmxlKHNlbnRlbmNlKTtcclxuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHR9KTtcclxuXHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuXHJcblxyXG5sZXQgcmVnZXhUb0ZpbmQgPSB7XHJcblx0XCJuZXV0cmFsXCI6IC9cXFtub21cXF0vZyxcclxuXHRcIm1hbGVcIjogL1xcW25vbU1cXF0vZyxcclxuXHRcImZlbWFsZVwiOiAvXFxbbm9tRlxcXS9nLFxyXG5cdFwiZ29yZ2Vlc1wiOiAvXFxbZ1swLTNdXFxdL2csXHJcbn07XHJcbmxldCBzdHJpbmdUb0ZpbmQgPSB7XHJcblx0XCJuZXV0cmFsXCI6IFwiW25vbV1cIixcclxuXHRcIm1hbGVcIjogXCJbbm9tTV1cIixcclxuXHRcImZlbWFsZVwiOiBcIltub21GXVwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbnZvaWUgdW4gZW50aWVyIGFsw6lhdG9pcmUgZW50cmUgbWluIGV0IG1heCBbbWluLCBtYXhdXHJcbiAqIEBwYXJhbSAge251bWJlcn0gbWluIGxhIHZhbGV1ciBtaW5pbXVtIHF1ZSBwZXV0IGF0dGVpbmRyZSBsJ2VudGllclxyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heCBsYSB2YWxldXIgbWF4aW11bSBxdWUgcGV1dCBhdHRlaW5kcmUgbCdlbnRpZXJcclxuICogQHJldHVybiB7bnVtYmVyfSBMJ2VudGllciB0aXLDqSBhdSBoYXNhcmRcclxuICovXHJcbiBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcclxuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW52b2llIGxlIG5vbWJyZSBkZSBwaHJhc2VzIMOgIGFmZmljaGVyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBcclxuICogQHJldHVybnMge251bWJlcn0gTm9tYnJlIGRlIHBocmFzZXNcclxuICovXHJcbmNvbnN0IGdldExlbmd0aFNlbnRlbmNlcyA9IChkdXJhdGlvbikgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRcInRvdGFsXCI6IDIwICsgMTUqZHVyYXRpb24sXHJcblx0XHRcInZpcnVzXCI6IDIgKyAyKmR1cmF0aW9uXHJcblx0fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzZW50ZW5jZXNcclxuICogQHBhcmFtIHtPYmplY3RbXX0gb3B0aW9ucyBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gcGxheWVycyBcclxuICogQHJldHVybnMge09iamVjdFtdfSBcclxuICovXHJcbmNvbnN0IGZpbHRlclNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgbmJGZW1hbGUgPSBwbGF5ZXJzLnJlZHVjZSgoYWNjLCBjdXIpID0+IGN1ci5nZW5kZXIgPT09IFwiRlwiID8gKythY2MgOiBhY2MsIDApO1xyXG5cdGxldCBuYkdlbmRlciA9IHtcclxuXHRcdFwiZmVtYWxlXCI6IG5iRmVtYWxlLFxyXG5cdFx0XCJtYWxlXCI6IHBsYXllcnMubGVuZ3RoIC0gbmJGZW1hbGVcclxuXHR9O1xyXG5cclxuXHQvL05vbWJyZSBkJ8OpbMOpbWVudCByZWdleCB0cm91dsOpIGRhbnMgbGEgcGhyYXNlXHJcblx0Y29uc3QgZ2V0TmJFbHQgPSAocmVnZXgsIHRleHQpID0+IHtcclxuXHRcdHJldHVybiAodGV4dC5tYXRjaChyZWdleCkgfHwgW10pLmxlbmd0aDtcclxuXHR9O1xyXG5cdFxyXG5cdHJldHVybiBzZW50ZW5jZXMuZmlsdGVyKChlbHQpID0+IHtcclxuXHRcdGxldCBuYkVsdEZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLm5ldXRyYWwsIGVsdC50ZXh0KTtcclxuXHRcdGxldCBuYkVsdE1hbGVGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5tYWxlLCBlbHQudGV4dCk7XHJcblx0XHRsZXQgbmJFbHRGZW1hbGVGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5mZW1hbGUsIGVsdC50ZXh0KTtcclxuXHRcdFxyXG5cdFx0Ly9PbiB2w6lyaWZpZSBzJ2lsIHkgYSBiaWVuLCBhdXRhbnQgb3UgcGx1cyBkZSBqb3VldXIgcXVlIGxhIHBocmFzZXMgZW4gbsOpY2Vzc2l0ZSAoZW4gZm9uY3Rpb24gZHUgc2V4ZSlcclxuXHRcdGxldCBlbm91Z2hFbHRIb21tZSA9IG5iR2VuZGVyLm1hbGUgPj0gbmJFbHRNYWxlRmluZGVkO1xyXG5cdFx0bGV0IGVub3VnaEVsdEZlbW1lID0gbmJHZW5kZXIuZmVtYWxlID49IG5iRWx0RmVtYWxlRmluZGVkO1xyXG5cdFx0bGV0IGVub3VnaFBsYXllciA9IHBsYXllcnMubGVuZ3RoID49IChuYkVsdEZpbmRlZCArIG5iRWx0TWFsZUZpbmRlZCArIG5iRWx0RmVtYWxlRmluZGVkKTtcclxuXHJcblx0XHRyZXR1cm4gb3B0aW9ucy50aGVtZXMuaW5jbHVkZXMoZWx0LnRoZW1lKSAmJiBlbm91Z2hFbHRIb21tZSAmJiBlbm91Z2hFbHRGZW1tZSAmJiBlbm91Z2hQbGF5ZXI7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gc2VudGVuY2VzIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBvcHRpb25zIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBwbGF5ZXJzIFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0W119XHJcbiAqL1xyXG5jb25zdCBzZWxlY3RTZW50ZW5jZXMgPSAoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKSA9PiB7XHJcblx0bGV0IHNlbnRlbmNlc1NlbGVjdGVkID0gW107XHJcblx0bGV0IGxlbmd0aFNlbnRlbmNlcyA9IGdldExlbmd0aFNlbnRlbmNlcyhvcHRpb25zLmR1cmF0aW9uKTtcclxuXHRcclxuXHRsZXQgbmJTZW50ZW5jZXNQaWNrZWQgPSAwO1xyXG4gICAgbGV0IG5iVmlydXNQaWNrZWQgPSAwO1xyXG5cdGxldCBpZFNlbnRlbmNlc1BpY2tlZCA9IFtdO1xyXG5cclxuXHR3aGlsZSAobmJTZW50ZW5jZXNQaWNrZWQgPCBsZW5ndGhTZW50ZW5jZXMudG90YWwgJiYgaWRTZW50ZW5jZXNQaWNrZWQubGVuZ3RoIDwgc2VudGVuY2VzLmxlbmd0aCkge1xyXG5cdFx0Ly9PbiBjaG9pc2l0IHVuIG51bcOpcm8gYXUgaGFzYXJkXHJcblx0XHRsZXQgbmJSYW5kb21TZW50ZW5jZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpzZW50ZW5jZXMubGVuZ3RoKTtcclxuXHRcdGlmICghaWRTZW50ZW5jZXNQaWNrZWQuaW5jbHVkZXMobmJSYW5kb21TZW50ZW5jZSkpIHtcclxuXHRcdFx0aWRTZW50ZW5jZXNQaWNrZWQucHVzaChuYlJhbmRvbVNlbnRlbmNlKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBzZW50ZW5jZVBpY2tlZCA9IHNlbnRlbmNlc1tuYlJhbmRvbVNlbnRlbmNlXTtcclxuXHJcblx0XHRcdGlmIChzZW50ZW5jZVBpY2tlZC50eXBlID09IFwidmlydXNcIikge1xyXG5cdFx0XHRcdGlmIChuYlZpcnVzUGlja2VkIDwgbGVuZ3RoU2VudGVuY2VzLnZpcnVzKSB7XHJcblx0XHRcdFx0XHRzZW50ZW5jZXNTZWxlY3RlZC5wdXNoKHNlbnRlbmNlUGlja2VkKTtcclxuXHRcdFx0XHRcdG5iU2VudGVuY2VzUGlja2VkKys7XHJcblx0XHRcdFx0XHRuYlZpcnVzUGlja2VkKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHNlbnRlbmNlc1NlbGVjdGVkLnB1c2goc2VudGVuY2VQaWNrZWQpO1xyXG5cdFx0XHRcdG5iU2VudGVuY2VzUGlja2VkKys7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBzZW50ZW5jZXNTZWxlY3RlZDtcclxufVxyXG5cclxuY29uc3QgaW5pdFNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRyZXR1cm4gc2VudGVuY2VzLm1hcCgoc2VudGVuY2UpID0+IHtcclxuXHRcdC8vRmFpdCB1bmUgY29waWUgZGVzIGpvdWV1cnNcclxuXHRcdGxldCBwbGF5ZXJzTm90UGlja2VkID0gcGxheWVycy5zbGljZSgpO1xyXG5cclxuXHRcdGNvbnN0IGluaXRQbGF5ZXJzID0gKHN0cmluZ01hdGNoKSA9PiB7XHJcblx0XHRcdHdoaWxlIChzZW50ZW5jZS50ZXh0LmluZGV4T2Yoc3RyaW5nTWF0Y2gpID4gLTEpIHtcclxuXHRcdFx0XHQvL0Nob2lzaXQgcGFybWlzIHF1ZWwgdHlwZSBkZSBqb3VldXIgb24gcGV1dCB0aXJlclxyXG5cdFx0XHRcdGxldCBwbGF5ZXJUb1BpY2s7XHJcblx0XHRcdFx0c3dpdGNoIChzdHJpbmdNYXRjaCkge1xyXG5cdFx0XHRcdFx0Y2FzZSBzdHJpbmdUb0ZpbmQuZmVtYWxlOlxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJUb1BpY2sgPSBwbGF5ZXJzTm90UGlja2VkLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLmdlbmRlciA9PSBcIkZcIik7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBzdHJpbmdUb0ZpbmQubWFsZTpcclxuXHRcdFx0XHRcdFx0cGxheWVyVG9QaWNrID0gcGxheWVyc05vdFBpY2tlZC5maWx0ZXIocGxheWVyID0+IHBsYXllci5nZW5kZXIgPT0gXCJNXCIpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdHBsYXllclRvUGljayA9IHBsYXllcnNOb3RQaWNrZWQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL0Nob2lzaXQgdW4gam91ZXVyIGF1IGhhc2FyZFxyXG5cdFx0XHRcdGxldCBwbGF5ZXJQaWNrZWQgPSBwbGF5ZXJUb1BpY2tbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnBsYXllclRvUGljay5sZW5ndGgpXTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL1JldGlyZSBjZSBqb3VldXIgZGUgbGEgbGlzdGUgZGVzIGpvdWV1cnMgbm9uIHByaXNcclxuXHRcdFx0XHRwbGF5ZXJzTm90UGlja2VkLnNwbGljZShwbGF5ZXJzTm90UGlja2VkLmluZGV4T2YocGxheWVyUGlja2VkKSwgMSk7XHJcblxyXG5cdFx0XHRcdC8vUmVtcGxhY2UgbCfDqWzDqW1lbnQgcGFyIGxlIG5vbSBkdSBqb3VldXJcclxuXHRcdFx0XHRzZW50ZW5jZS50ZXh0ID0gc2VudGVuY2UudGV4dC5yZXBsYWNlKHN0cmluZ01hdGNoLCBwbGF5ZXJQaWNrZWQubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9TaSBsYSBwaHJhc2UgZXN0IHVuIHZpcnVzIGV0IHF1J29uIHRyb3V2ZSB1biDDqWzDqW1lbnQgZGFucyBsZXMgZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbnRlbmNlLnR5cGUgPT0gXCJ2aXJ1c1wiICYmIHNlbnRlbmNlLmRldGFpbHMuaW5kZXhPZihzdHJpbmdNYXRjaCkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtcGxhY2UgbGUgZWx0VG9GaW5kIHBhciBsZSBub20gZHUgam91ZXVyIChsZSBtw6ptZSBxdWUgbGUgdGV4dClcclxuICAgICAgICAgICAgICAgICAgICBzZW50ZW5jZS5kZXRhaWxzID0gc2VudGVuY2UuZGV0YWlscy5yZXBsYWNlKHN0cmluZ01hdGNoLCBwbGF5ZXJQaWNrZWQubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aW5pdFBsYXllcnMoc3RyaW5nVG9GaW5kLm5ldXRyYWwpO1xyXG5cdFx0aW5pdFBsYXllcnMoc3RyaW5nVG9GaW5kLm1hbGUpO1xyXG5cdFx0aW5pdFBsYXllcnMoc3RyaW5nVG9GaW5kLmZlbWFsZSk7XHJcblxyXG5cdFx0XHJcblxyXG5cdFx0cmV0dXJuIHNlbnRlbmNlO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vKipcclxuICogUGxhY2UgbGVzIHZpcnVzIGVuIHRhbnQgcXVlIHBocmFzZVxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzZW50ZW5jZXMgVGFibGVhdSBkZXMgcGhyYXNlcyByZXRlbnVlc1xyXG4gKi9cclxuIGNvbnN0IHB1dFZpcnVzID0gKHNlbnRlbmNlcykgPT4ge1xyXG5cdGxldCBuZXdTZW50ZW5jZXMgPSBzZW50ZW5jZXMuc2xpY2UoKTtcclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZW50ZW5jZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChzZW50ZW5jZXNbaV0udHlwZSA9PSBcInZpcnVzXCIpIHtcclxuXHRcdFx0Y29uc3QgaW5kZXhSYW5kVmlydXMgPSBnZXRSYW5kb21JbnQoMywgNik7IC8vVE9ETyA6IGRpZmZlcmVudCB2aXJ1cyBsZW5ndGggKGRpZmZpY3VsdHkpXHJcblx0XHRcdGNvbnN0IHNlbnRlbmNlVmlydXMgPSB7XHJcblx0XHRcdFx0XCJ0ZXh0XCI6IHNlbnRlbmNlc1tpXS5kZXRhaWxzLFxyXG5cdFx0XHRcdFwidGhlbWVcIjogc2VudGVuY2VzW2ldLnRoZW1lLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInZpcnVzRW5kXCIsXHJcblx0XHRcdH07XHJcblx0XHRcdG5ld1NlbnRlbmNlcy5zcGxpY2UoaStpbmRleFJhbmRWaXJ1cywgMCwgc2VudGVuY2VWaXJ1cyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbmV3U2VudGVuY2VzO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gUGxheSgpIHtcclxuXHRsZXQgbG9jYWxPcHRpb25zID0gbnVsbDtcclxuXHRsZXQgbG9jYWxQbGF5ZXJzID0gbnVsbDtcclxuXHRpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcblx0XHRsb2NhbE9wdGlvbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3B0aW9uc1wiKSk7XHJcblx0XHRsb2NhbFBsYXllcnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyc1wiKSk7XHJcblx0fVxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3BsYXllcnNdID0gdXNlU3RhdGUobG9jYWxQbGF5ZXJzKTtcclxuXHRjb25zdCBbb3B0aW9uc10gPSB1c2VTdGF0ZShsb2NhbE9wdGlvbnMpO1xyXG5cdGNvbnN0IFtiYXJMZW5ndGgsIHNldEJhckxlbmd0aF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBsZXQgY3VycmVudFNlbnRlbmNlID0gMDtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQsIHNlbnRlbmNlcykgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdC8vQ2xpcXVlIMOgIGdhdWNoZVxyXG5cdFx0aWYgKGV2ZW50LmNsaWVudFggPCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIHtcclxuXHRcdFx0aWYgKGN1cnJlbnRTZW50ZW5jZSA+IDApIHtcclxuXHRcdFx0XHRjdXJyZW50U2VudGVuY2UtLTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly9DbGlxdWUgw6AgZHJvaXRlXHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aWYgKGN1cnJlbnRTZW50ZW5jZSA8IHNlbnRlbmNlcy5sZW5ndGgtMSkge1xyXG5cdFx0XHRcdGN1cnJlbnRTZW50ZW5jZSsrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHJvdXRlci5yZWxvYWQoJy9wbGF5Jyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHNldFRleHQoc2VudGVuY2VzW2N1cnJlbnRTZW50ZW5jZV0udGV4dCk7XHJcblx0XHRzZXRCYXJMZW5ndGgoZ2V0TGVuZ3RoQmFyKHNlbnRlbmNlcy5sZW5ndGgpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRMZW5ndGhCYXIgPSAoc2VudGVuY2VzTGVuZ3RoKSA9PiB7XHJcblx0XHRyZXR1cm4gY3VycmVudFNlbnRlbmNlKjEwMCAvIHNlbnRlbmNlc0xlbmd0aDtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGV0IHNlbnRlbmNlcyA9IGZpbHRlclNlbnRlbmNlcyhkYXRhLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IHNlbGVjdFNlbnRlbmNlcyhzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpO1xyXG5cdFx0c2VudGVuY2VzID0gaW5pdFNlbnRlbmNlcyhzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpO1xyXG5cdFx0c2VudGVuY2VzID0gcHV0VmlydXMoc2VudGVuY2VzKTtcclxuXHRcdGNvbnNvbGVJbmZvcm1hdGlvbihzZW50ZW5jZXMsIHBsYXllcnMpO1xyXG5cclxuXHRcdHNldEJhckxlbmd0aChnZXRMZW5ndGhCYXIoc2VudGVuY2VzLmxlbmd0aCkpO1xyXG5cdFx0c2V0VGV4dChzZW50ZW5jZXNbMF0udGV4dCk7XHJcblx0XHRcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gaGFuZGxlQ2xpY2soZSwgc2VudGVuY2VzKSk7XHJcblxyXG4gICAgICAgIC8qbGV0IG5SYW5kb21TZW50ZW5jZXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpO1xyXG5cdFx0c2V0VGV4dChkYXRhW25SYW5kb21TZW50ZW5jZXNdLnRleHQpOyovXHJcblxyXG5cdFx0Ly8gVE9ETyA6IChpZMOpZSBlbiB0cyA9PiBGYWlyZSByZWR1Y2VyIGV0IGludGVyZmFjZSBwb3VyIGxlcyBwaHJhc2VzIGR1IGpzb24gOiBodHRwczovL3lvdXR1LmJlL1o1aVdyNlNyc2o4P3Q9OTE4KVxyXG5cdFx0Ly8gKEZhaXJlIGRlcyBmb25jdGlvbnMgKGVuIGRlaG9ycyBkdSBjb21wb3NhbnRzIHBvdXIgcXVlIMOnYSBzb2l0IGNsZWFuIChqdXN0ZSBhdSBkZXNzdXMgbMOgKSkpXHJcblx0XHQvLyAtIEZpbHRyZXIgbGUganNvbiBkYXRhIHBvdXIgbmUgcHJlbmRyZSBxdWUgbGVzIHBocmFzZXMgcXVpIHJlc3BlY3RlbnQgbGVzIG9wdGlvbnMgKHRow6htZXMuLi4pXHJcblx0XHQvLyAtIEZhaXJlIGxlIHRhYmxlYXUgZGUgcGhyYXNlcyAodW5lIGNlcnRhaW5lIGxvbmd1ZXVyIGVuIGZvbmN0aW9uIGRlIGxhIGxvbmd1ZXVyIGVuIG9wdGlvbilcclxuXHRcdC8vIC0gUmVtcGxhY2VyIGxlcyBub21zIGRhbnMgbGVzIHBocmFzZXMgKHRpcmVyIGxlcyBub21zIGF1IGhhc2FyZCB0b3V0IMOnYSB0b3V0IMOnYSlcclxuXHRcdC8vIC0gTWV0dHJlIGxlcyB2aXJ1cyBxdWVscXVlIHBhcnRcclxuXHRcdC8vIC0gTWV0dHJlIGxhIGNvbnPDqXF1ZW5jZSBqdXN0ZSBhcHLDqHMgcG91ciBsZXMgY2hvaXhcclxuXHRcdC8vXHJcblx0XHQvLyAtIFBvdXIgbGVzIGNob2l4LCBjZSBzZXJhIGRhbnMgbGUgamV1IGRlIHJlbXBsYWNlciBsZSBub20gZGVzIGTDqXRhaWxzIGRvbmMgcGFzIGRhbnMgY2V0dGUgZm9uY3Rpb25cclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0IHRpdGxlPVwiU2VsZWN0aW9ubmVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke3N0eWxlcy5tYWlufWB9PlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvc2VsZWN0L3BsYXllcnNcIj5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT17c3R5bGVzLnF1aXRCdG59PjwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0e3RpdGxlIHx8IFwiXCJ9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHR7dGV4dCB8fCBcIkNoYXJnZW1lbnQuLi5cIn1cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJDb250YWluZXJ9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJ9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuYmFyVmFsdWV9XHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3t3aWR0aDogYCR7YmFyTGVuZ3RofSVgLCBiYWNrZ3JvdW5kQ29sb3I6IFwiIzg0RkZCOVwifX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXk7Il0sInNvdXJjZVJvb3QiOiIifQ==