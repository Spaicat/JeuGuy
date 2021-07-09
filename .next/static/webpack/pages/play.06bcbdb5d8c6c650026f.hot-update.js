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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/select/players",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: (_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_6___default().quitBtn)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "title",
        children: title || ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: text || "Chargement..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
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
            lineNumber: 309,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS5qcyJdLCJuYW1lcyI6WyJyZWdleFRvRmluZCIsInN0cmluZ1RvRmluZCIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlSW5mb3JtYXRpb24iLCJzZW50ZW5jZXMiLCJwbGF5ZXJzIiwiY3NzU3F1YXJlIiwiY3NzU21hbGwiLCJjb25zb2xlIiwiZ3JvdXBDb2xsYXBzZWQiLCJsZW5ndGgiLCJmb3JFYWNoIiwicGxheWVyIiwibG9nIiwiZ2VuZGVyIiwibmFtZSIsImdyb3VwRW5kIiwiZmlsdGVyIiwieCIsInR5cGUiLCJzZW50ZW5jZSIsImNzc1RoZW1lIiwidGhlbWUiLCJzZW50ZW5jZVR5cGUiLCJzcGFjZVR5cGUiLCJ0ZXh0IiwidGFibGUiLCJmaWx0ZXJTZW50ZW5jZXMiLCJvcHRpb25zIiwibmJGZW1hbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJuYkdlbmRlciIsImdldE5iRWx0IiwicmVnZXgiLCJtYXRjaCIsImVsdCIsIm5iRWx0RmluZGVkIiwibmV1dHJhbCIsIm5iRWx0TWFsZUZpbmRlZCIsIm1hbGUiLCJuYkVsdEZlbWFsZUZpbmRlZCIsImZlbWFsZSIsImVub3VnaEVsdEhvbW1lIiwiZW5vdWdoRWx0RmVtbWUiLCJlbm91Z2hQbGF5ZXIiLCJ0aGVtZXMiLCJpbmNsdWRlcyIsImdldExlbmd0aFNlbnRlbmNlcyIsImR1cmF0aW9uIiwic2VsZWN0U2VudGVuY2VzIiwic2VudGVuY2VzU2VsZWN0ZWQiLCJsZW5ndGhTZW50ZW5jZXMiLCJuYlNlbnRlbmNlc1BpY2tlZCIsIm5iVmlydXNQaWNrZWQiLCJpZFNlbnRlbmNlc1BpY2tlZCIsInRvdGFsIiwibmJSYW5kb21TZW50ZW5jZSIsInB1c2giLCJzZW50ZW5jZVBpY2tlZCIsInZpcnVzIiwiaW5pdFNlbnRlbmNlcyIsIm1hcCIsInBsYXllcnNOb3RQaWNrZWQiLCJzbGljZSIsImluaXRQbGF5ZXJzIiwic3RyaW5nTWF0Y2giLCJpbmRleE9mIiwicGxheWVyVG9QaWNrIiwicGxheWVyUGlja2VkIiwic3BsaWNlIiwicmVwbGFjZSIsImRldGFpbHMiLCJwdXRWaXJ1cyIsIm5ld1NlbnRlbmNlcyIsImkiLCJpbmRleFJhbmRWaXJ1cyIsInNlbnRlbmNlVmlydXMiLCJQbGF5IiwicHJvcHMiLCJsb2NhbE9wdGlvbnMiLCJsb2NhbFBsYXllcnMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJzZXRUZXh0IiwidGl0bGUiLCJzZXRUaXRsZSIsImJhckxlbmd0aCIsInNldEJhckxlbmd0aCIsImN1cnJlbnRTZW50ZW5jZSIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWVudFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicmVsb2FkIiwiZ2V0TGVuZ3RoQmFyIiwic2VudGVuY2VzTGVuZ3RoIiwidXNlRWZmZWN0IiwiZGF0YSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdHlsZXMiLCJxdWl0QnRuIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxXQUFXLEdBQUc7QUFDakIsYUFBVyxVQURNO0FBRWpCLFVBQVEsV0FGUztBQUdqQixZQUFVO0FBSE8sQ0FBbEI7QUFLQSxJQUFJQyxZQUFZLEdBQUc7QUFDbEIsYUFBVyxPQURPO0FBRWxCLFVBQVEsUUFGVTtBQUdsQixZQUFVO0FBSFEsQ0FBbkI7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0MsU0FBU0MsWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzdCRCxLQUFHLEdBQUdFLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxHQUFWLENBQU47QUFDQUMsS0FBRyxHQUFHQyxJQUFJLENBQUNFLEtBQUwsQ0FBV0gsR0FBWCxDQUFOO0FBQ0EsU0FBT0MsSUFBSSxDQUFDRSxLQUFMLENBQVdGLElBQUksQ0FBQ0csTUFBTCxNQUFpQkosR0FBRyxHQUFHRCxHQUFOLEdBQVksQ0FBN0IsQ0FBWCxJQUE4Q0EsR0FBckQ7QUFDSDs7QUFFRCxJQUFNTSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFNBQUQsRUFBWUMsT0FBWixFQUF3QjtBQUNsRCxNQUFJQyxTQUFTLEdBQUcsMERBQWhCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLGtCQUFmO0FBQ0FDLFNBQU8sQ0FBQ0MsY0FBUixzQkFBcUNKLE9BQU8sQ0FBQ0ssTUFBN0Msa0JBQTJESixTQUEzRDtBQUNBRCxTQUFPLENBQUNNLE9BQVIsQ0FBZ0IsVUFBQUMsTUFBTSxFQUFJO0FBQ3pCSixXQUFPLENBQUNLLEdBQVIsYUFBaUJELE1BQU0sQ0FBQ0UsTUFBeEIsZ0JBQW9DRixNQUFNLENBQUNHLElBQTNDLGFBQ0dULFNBREgsOENBRUEsRUFGQTtBQUdBLEdBSkQ7QUFLQUUsU0FBTyxDQUFDUSxRQUFSO0FBQ0FSLFNBQU8sQ0FBQ0MsY0FBUixzQkFBcUNMLFNBQVMsQ0FBQ00sTUFBL0Msb0JBQStETixTQUFTLENBQUNhLE1BQVYsQ0FBaUIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsSUFBRixJQUFVLE9BQWQ7QUFBQSxHQUFsQixFQUF5Q1QsTUFBeEcsd0JBQ0dKLFNBREgsOENBRUEsRUFGQSxZQUdHQSxTQUhIO0FBSUFGLFdBQVMsQ0FBQ08sT0FBVixDQUFrQixVQUFBUyxRQUFRLEVBQUk7QUFDN0IsUUFBSUMsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsWUFBUUQsUUFBUSxDQUFDRSxLQUFqQjtBQUNDLFdBQUssT0FBTDtBQUNDRCxnQkFBUSxHQUFHLHVDQUFYO0FBQ0E7O0FBQ0QsV0FBSyxLQUFMO0FBQ0NBLGdCQUFRLEdBQUcsMENBQVg7QUFDQTs7QUFDRDtBQUNDQSxnQkFBUSxHQUFHLHdDQUFYO0FBQ0E7QUFURjs7QUFXQSxRQUFJRSxZQUFZLEdBQUcsRUFBbkI7QUFDQSxRQUFJQyxTQUFTLEdBQUcsRUFBaEI7O0FBQ0EsUUFBSUosUUFBUSxDQUFDRCxJQUFULElBQWlCLFFBQXJCLEVBQStCO0FBQzlCSSxrQkFBWSxHQUFHSCxRQUFRLENBQUNELElBQXhCO0FBQ0FLLGVBQVMsR0FBRyxHQUFaO0FBQ0E7O0FBQ0RoQixXQUFPLENBQUNDLGNBQVIsYUFBNEJjLFlBQTVCLGVBQTZDQyxTQUE3QyxlQUEyREosUUFBUSxDQUFDRSxLQUFwRSxnQkFBK0VGLFFBQVEsQ0FBQ0ssSUFBeEYsYUFDR25CLFNBREgsbURBQ3FEQyxRQURyRCxhQUVHQSxRQUZILGFBR0dELFNBSEgsY0FHZ0JlLFFBSGhCLGNBRzRCZCxRQUg1QixhQUlHQSxRQUpIO0FBS0FDLFdBQU8sQ0FBQ2tCLEtBQVIsQ0FBY04sUUFBZDtBQUNBWixXQUFPLENBQUNRLFFBQVI7QUFDQSxHQTFCRDtBQTJCQVIsU0FBTyxDQUFDUSxRQUFSO0FBQ0EsQ0ExQ0Q7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1XLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3ZCLFNBQUQsRUFBWXdCLE9BQVosRUFBcUJ2QixPQUFyQixFQUFpQztBQUN4RCxNQUFJd0IsUUFBUSxHQUFHeEIsT0FBTyxDQUFDeUIsTUFBUixDQUFlLFVBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLFdBQWNBLEdBQUcsQ0FBQ2xCLE1BQUosS0FBZSxHQUFmLEdBQXFCLEVBQUVpQixHQUF2QixHQUE2QkEsR0FBM0M7QUFBQSxHQUFmLEVBQStELENBQS9ELENBQWY7QUFDQSxNQUFJRSxRQUFRLEdBQUc7QUFDZCxjQUFVSixRQURJO0FBRWQsWUFBUXhCLE9BQU8sQ0FBQ0ssTUFBUixHQUFpQm1CO0FBRlgsR0FBZixDQUZ3RCxDQU94RDs7QUFDQSxNQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVFWLElBQVIsRUFBaUI7QUFDakMsV0FBTyxDQUFDQSxJQUFJLENBQUNXLEtBQUwsQ0FBV0QsS0FBWCxLQUFxQixFQUF0QixFQUEwQnpCLE1BQWpDO0FBQ0EsR0FGRDs7QUFJQSxTQUFPTixTQUFTLENBQUNhLE1BQVYsQ0FBaUIsVUFBQ29CLEdBQUQsRUFBUztBQUNoQyxRQUFJQyxXQUFXLEdBQUdKLFFBQVEsQ0FBQ3hDLFdBQVcsQ0FBQzZDLE9BQWIsRUFBc0JGLEdBQUcsQ0FBQ1osSUFBMUIsQ0FBMUI7QUFDQSxRQUFJZSxlQUFlLEdBQUdOLFFBQVEsQ0FBQ3hDLFdBQVcsQ0FBQytDLElBQWIsRUFBbUJKLEdBQUcsQ0FBQ1osSUFBdkIsQ0FBOUI7QUFDQSxRQUFJaUIsaUJBQWlCLEdBQUdSLFFBQVEsQ0FBQ3hDLFdBQVcsQ0FBQ2lELE1BQWIsRUFBcUJOLEdBQUcsQ0FBQ1osSUFBekIsQ0FBaEMsQ0FIZ0MsQ0FLaEM7O0FBQ0EsUUFBSW1CLGNBQWMsR0FBR1gsUUFBUSxDQUFDUSxJQUFULElBQWlCRCxlQUF0QztBQUNBLFFBQUlLLGNBQWMsR0FBR1osUUFBUSxDQUFDVSxNQUFULElBQW1CRCxpQkFBeEM7QUFDQSxRQUFJSSxZQUFZLEdBQUd6QyxPQUFPLENBQUNLLE1BQVIsSUFBbUI0QixXQUFXLEdBQUdFLGVBQWQsR0FBZ0NFLGlCQUF0RTtBQUVBLFdBQU9kLE9BQU8sQ0FBQ21CLE1BQVIsQ0FBZUMsUUFBZixDQUF3QlgsR0FBRyxDQUFDZixLQUE1QixLQUFzQ3NCLGNBQXRDLElBQXdEQyxjQUF4RCxJQUEwRUMsWUFBakY7QUFDQSxHQVhNLENBQVA7QUFZQSxDQXhCRDtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN4QyxTQUFPO0FBQ04sYUFBUyxLQUFLLEtBQUdBLFFBRFg7QUFFTixhQUFTLElBQUksSUFBRUE7QUFGVCxHQUFQO0FBSUEsQ0FMRDtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUMvQyxTQUFELEVBQVl3QixPQUFaLEVBQXFCdkIsT0FBckIsRUFBaUM7QUFDeEQsTUFBSStDLGlCQUFpQixHQUFHLEVBQXhCO0FBQ0EsTUFBSUMsZUFBZSxHQUFHSixrQkFBa0IsQ0FBQ3JCLE9BQU8sQ0FBQ3NCLFFBQVQsQ0FBeEM7QUFFQSxNQUFJSSxpQkFBaUIsR0FBRyxDQUF4QjtBQUNHLE1BQUlDLGFBQWEsR0FBRyxDQUFwQjtBQUNILE1BQUlDLGlCQUFpQixHQUFHLEVBQXhCOztBQUVBLFNBQU9GLGlCQUFpQixHQUFHRCxlQUFlLENBQUNJLEtBQXBDLElBQTZDRCxpQkFBaUIsQ0FBQzlDLE1BQWxCLEdBQTJCTixTQUFTLENBQUNNLE1BQXpGLEVBQWlHO0FBQ2hHO0FBQ0EsUUFBSWdELGdCQUFnQixHQUFHM0QsSUFBSSxDQUFDRSxLQUFMLENBQVdGLElBQUksQ0FBQ0csTUFBTCxLQUFjRSxTQUFTLENBQUNNLE1BQW5DLENBQXZCOztBQUNBLFFBQUksQ0FBQzhDLGlCQUFpQixDQUFDUixRQUFsQixDQUEyQlUsZ0JBQTNCLENBQUwsRUFBbUQ7QUFDbERGLHVCQUFpQixDQUFDRyxJQUFsQixDQUF1QkQsZ0JBQXZCO0FBRUEsVUFBSUUsY0FBYyxHQUFHeEQsU0FBUyxDQUFDc0QsZ0JBQUQsQ0FBOUI7O0FBRUEsVUFBSUUsY0FBYyxDQUFDekMsSUFBZixJQUF1QixPQUEzQixFQUFvQztBQUNuQyxZQUFJb0MsYUFBYSxHQUFHRixlQUFlLENBQUNRLEtBQXBDLEVBQTJDO0FBQzFDVCwyQkFBaUIsQ0FBQ08sSUFBbEIsQ0FBdUJDLGNBQXZCO0FBQ0FOLDJCQUFpQjtBQUNqQkMsdUJBQWE7QUFDYjtBQUNELE9BTkQsTUFPSztBQUNKSCx5QkFBaUIsQ0FBQ08sSUFBbEIsQ0FBdUJDLGNBQXZCO0FBQ0FOLHlCQUFpQjtBQUNqQjtBQUNEO0FBQ0Q7O0FBRUQsU0FBT0YsaUJBQVA7QUFDQSxDQS9CRDs7QUFpQ0EsSUFBTVUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDMUQsU0FBRCxFQUFZd0IsT0FBWixFQUFxQnZCLE9BQXJCLEVBQWlDO0FBQ3RELFNBQU9ELFNBQVMsQ0FBQzJELEdBQVYsQ0FBYyxVQUFDM0MsUUFBRCxFQUFjO0FBQ2xDO0FBQ0EsUUFBSTRDLGdCQUFnQixHQUFHM0QsT0FBTyxDQUFDNEQsS0FBUixFQUF2Qjs7QUFFQSxRQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxXQUFELEVBQWlCO0FBQ3BDLGFBQU8vQyxRQUFRLENBQUNLLElBQVQsQ0FBYzJDLE9BQWQsQ0FBc0JELFdBQXRCLElBQXFDLENBQUMsQ0FBN0MsRUFBZ0Q7QUFDL0M7QUFDQSxZQUFJRSxZQUFZLFNBQWhCOztBQUNBLGdCQUFRRixXQUFSO0FBQ0MsZUFBS3hFLFlBQVksQ0FBQ2dELE1BQWxCO0FBQ0MwQix3QkFBWSxHQUFHTCxnQkFBZ0IsQ0FBQy9DLE1BQWpCLENBQXdCLFVBQUFMLE1BQU07QUFBQSxxQkFBSUEsTUFBTSxDQUFDRSxNQUFQLElBQWlCLEdBQXJCO0FBQUEsYUFBOUIsQ0FBZjtBQUNBOztBQUNELGVBQUtuQixZQUFZLENBQUM4QyxJQUFsQjtBQUNDNEIsd0JBQVksR0FBR0wsZ0JBQWdCLENBQUMvQyxNQUFqQixDQUF3QixVQUFBTCxNQUFNO0FBQUEscUJBQUlBLE1BQU0sQ0FBQ0UsTUFBUCxJQUFpQixHQUFyQjtBQUFBLGFBQTlCLENBQWY7QUFDQTs7QUFDRDtBQUNDdUQsd0JBQVksR0FBR0wsZ0JBQWY7QUFSRixTQUgrQyxDQWMvQzs7O0FBQ0EsWUFBSU0sWUFBWSxHQUFHRCxZQUFZLENBQUN0RSxJQUFJLENBQUNFLEtBQUwsQ0FBV0YsSUFBSSxDQUFDRyxNQUFMLEtBQWNtRSxZQUFZLENBQUMzRCxNQUF0QyxDQUFELENBQS9CLENBZitDLENBaUIvQzs7QUFDQXNELHdCQUFnQixDQUFDTyxNQUFqQixDQUF3QlAsZ0JBQWdCLENBQUNJLE9BQWpCLENBQXlCRSxZQUF6QixDQUF4QixFQUFnRSxDQUFoRSxFQWxCK0MsQ0FvQi9DOztBQUNBbEQsZ0JBQVEsQ0FBQ0ssSUFBVCxHQUFnQkwsUUFBUSxDQUFDSyxJQUFULENBQWMrQyxPQUFkLENBQXNCTCxXQUF0QixFQUFtQ0csWUFBWSxDQUFDdkQsSUFBaEQsQ0FBaEIsQ0FyQitDLENBdUJuQzs7QUFDQSxZQUFJSyxRQUFRLENBQUNELElBQVQsSUFBaUIsT0FBakIsSUFBNEJDLFFBQVEsQ0FBQ3FELE9BQVQsQ0FBaUJMLE9BQWpCLENBQXlCRCxXQUF6QixJQUF3QyxDQUFDLENBQXpFLEVBQTRFO0FBQ3hFO0FBQ0EvQyxrQkFBUSxDQUFDcUQsT0FBVCxHQUFtQnJELFFBQVEsQ0FBQ3FELE9BQVQsQ0FBaUJELE9BQWpCLENBQXlCTCxXQUF6QixFQUFzQ0csWUFBWSxDQUFDdkQsSUFBbkQsQ0FBbkI7QUFDSDtBQUNiO0FBQ0QsS0E5QkQ7O0FBZ0NBbUQsZUFBVyxDQUFDdkUsWUFBWSxDQUFDNEMsT0FBZCxDQUFYO0FBQ0EyQixlQUFXLENBQUN2RSxZQUFZLENBQUM4QyxJQUFkLENBQVg7QUFDQXlCLGVBQVcsQ0FBQ3ZFLFlBQVksQ0FBQ2dELE1BQWQsQ0FBWDtBQUVBLFdBQU92QixRQUFQO0FBQ0EsR0F6Q00sQ0FBUDtBQTBDQSxDQTNDRDtBQTZDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0MsSUFBTXNELFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUN0RSxTQUFELEVBQWU7QUFDaEMsTUFBSXVFLFlBQVksR0FBR3ZFLFNBQVMsQ0FBQzZELEtBQVYsRUFBbkI7O0FBRUEsT0FBSyxJQUFJVyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeEUsU0FBUyxDQUFDTSxNQUE5QixFQUFzQ2tFLENBQUMsRUFBdkMsRUFBMkM7QUFDMUMsUUFBSXhFLFNBQVMsQ0FBQ3dFLENBQUQsQ0FBVCxDQUFhekQsSUFBYixJQUFxQixPQUF6QixFQUFrQztBQUNqQyxVQUFNMEQsY0FBYyxHQUFHakYsWUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQW5DLENBRGlDLENBQ1U7O0FBQzNDLFVBQU1rRixhQUFhLEdBQUc7QUFDckIsZ0JBQVExRSxTQUFTLENBQUN3RSxDQUFELENBQVQsQ0FBYUgsT0FEQTtBQUVyQixpQkFBU3JFLFNBQVMsQ0FBQ3dFLENBQUQsQ0FBVCxDQUFhdEQsS0FGRDtBQUdyQixnQkFBUTtBQUhhLE9BQXRCO0FBS0FxRCxrQkFBWSxDQUFDSixNQUFiLENBQW9CSyxDQUFDLEdBQUNDLGNBQXRCLEVBQXNDLENBQXRDLEVBQXlDQyxhQUF6QztBQUNBO0FBQ0Q7O0FBRUQsU0FBT0gsWUFBUDtBQUNBLENBaEJBOztBQW1CRCxTQUFTSSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFDcEIsTUFBSUMsWUFBWSxHQUFHLElBQW5CO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLElBQW5COztBQUNBLFlBQXFCO0FBQ3BCRCxnQkFBWSxHQUFHRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLENBQVgsQ0FBZjtBQUNBSixnQkFBWSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLENBQVgsQ0FBZjtBQUNBOztBQUNELE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBUG9CLGtCQVFJQywrQ0FBUSxDQUFDLEVBQUQsQ0FSWjtBQUFBLE1BUWJoRSxJQVJhO0FBQUEsTUFRUGlFLE9BUk87O0FBQUEsbUJBU01ELCtDQUFRLENBQUMsRUFBRCxDQVRkO0FBQUEsTUFTYkUsS0FUYTtBQUFBLE1BU05DLFFBVE07O0FBQUEsbUJBVUZILCtDQUFRLENBQUNQLFlBQUQsQ0FWTjtBQUFBLE1BVWI3RSxPQVZhOztBQUFBLG1CQVdGb0YsK0NBQVEsQ0FBQ1IsWUFBRCxDQVhOO0FBQUEsTUFXYnJELE9BWGE7O0FBQUEsbUJBWWM2RCwrQ0FBUSxDQUFDLENBQUQsQ0FadEI7QUFBQSxNQVliSSxTQVphO0FBQUEsTUFZRkMsWUFaRTs7QUFjakIsTUFBSUMsZUFBZSxHQUFHLENBQXRCOztBQUVILE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBUTdGLFNBQVIsRUFBc0I7QUFDekM2RixTQUFLLENBQUNDLGNBQU4sR0FEeUMsQ0FFekM7O0FBQ0EsUUFBSUQsS0FBSyxDQUFDRSxPQUFOLEdBQWdCQyxNQUFNLENBQUNDLFVBQVAsR0FBb0IsQ0FBeEMsRUFBMkM7QUFDMUMsVUFBSU4sZUFBZSxHQUFHLENBQXRCLEVBQXlCO0FBQ3hCQSx1QkFBZTtBQUNmO0FBQ0QsS0FKRCxDQUtBO0FBTEEsU0FNSztBQUNKLFlBQUlBLGVBQWUsR0FBRzNGLFNBQVMsQ0FBQ00sTUFBVixHQUFpQixDQUF2QyxFQUEwQztBQUN6Q3FGLHlCQUFlO0FBQ2YsU0FGRCxNQUdLO0FBQ0pSLGdCQUFNLENBQUNlLE1BQVAsQ0FBYyxPQUFkO0FBQ0E7QUFDRDs7QUFDRFosV0FBTyxDQUFDdEYsU0FBUyxDQUFDMkYsZUFBRCxDQUFULENBQTJCdEUsSUFBNUIsQ0FBUDtBQUNBcUUsZ0JBQVksQ0FBQ1MsWUFBWSxDQUFDbkcsU0FBUyxDQUFDTSxNQUFYLENBQWIsQ0FBWjtBQUNBLEdBbkJEOztBQXFCQSxNQUFNNkYsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsZUFBRCxFQUFxQjtBQUN6QyxXQUFPVCxlQUFlLEdBQUMsR0FBaEIsR0FBc0JTLGVBQTdCO0FBQ0EsR0FGRDs7QUFJQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBSXJHLFNBQVMsR0FBR3VCLGVBQWUsQ0FBQytFLGlEQUFELEVBQU85RSxPQUFQLEVBQWdCdkIsT0FBaEIsQ0FBL0I7QUFDQUQsYUFBUyxHQUFHK0MsZUFBZSxDQUFDL0MsU0FBRCxFQUFZd0IsT0FBWixFQUFxQnZCLE9BQXJCLENBQTNCO0FBQ0FELGFBQVMsR0FBRzBELGFBQWEsQ0FBQzFELFNBQUQsRUFBWXdCLE9BQVosRUFBcUJ2QixPQUFyQixDQUF6QjtBQUNBRCxhQUFTLEdBQUdzRSxRQUFRLENBQUN0RSxTQUFELENBQXBCO0FBQ0FELHNCQUFrQixDQUFDQyxTQUFELEVBQVlDLE9BQVosQ0FBbEI7QUFFQXlGLGdCQUFZLENBQUNTLFlBQVksQ0FBQ25HLFNBQVMsQ0FBQ00sTUFBWCxDQUFiLENBQVo7QUFDQWdGLFdBQU8sQ0FBQ3RGLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXFCLElBQWQsQ0FBUDtBQUVBa0YsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFEO0FBQUEsYUFBT2IsV0FBVyxDQUFDYSxDQUFELEVBQUl6RyxTQUFKLENBQWxCO0FBQUEsS0FBbkM7QUFFTTtBQUNSO0FBRUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0F4QlEsRUF3Qk4sRUF4Qk0sQ0FBVDtBQTBCQSxzQkFDQyw4REFBQyx1REFBRDtBQUFRLFNBQUssRUFBQyxjQUFkO0FBQUEsMkJBQ0M7QUFBSyxlQUFTLFlBQUswRywwRUFBTCxjQUF5QkEscUVBQXpCLENBQWQ7QUFBQSw4QkFDQyw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxpQkFBWDtBQUFBLCtCQUNDO0FBQUcsbUJBQVMsRUFBRUEsd0VBQWNDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFJQztBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLGtCQUNFcEIsS0FBSyxJQUFJO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpELGVBT0M7QUFBQSxrQkFDRWxFLElBQUksSUFBSTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRCxlQVVDO0FBQUssaUJBQVMsRUFBRXFGLDZFQUFoQjtBQUFBLCtCQUNDO0FBQUssbUJBQVMsRUFBRUEsb0VBQWhCO0FBQUEsaUNBQ0M7QUFDQyxxQkFBUyxFQUFFQSx5RUFEWjtBQUVDLGlCQUFLLEVBQUU7QUFBQ0UsbUJBQUssWUFBS25CLFNBQUwsTUFBTjtBQUF5Qm9CLDZCQUFlLEVBQUU7QUFBMUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUF3QkE7O0dBM0ZRbEMsSTtVQU9PUyxrRDs7O0tBUFBULEk7QUE2RlQsK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGxheS4wNmJjYmRiNWQ4YzZjNjUwMDI2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUGxheS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvc2VudGVuY2VzLmpzb24nO1xyXG5cclxubGV0IHJlZ2V4VG9GaW5kID0ge1xyXG5cdFwibmV1dHJhbFwiOiAvXFxbbm9tXFxdL2csXHJcblx0XCJtYWxlXCI6IC9cXFtub21NXFxdL2csXHJcblx0XCJmZW1hbGVcIjogL1xcW25vbUZcXF0vZyxcclxufTtcclxubGV0IHN0cmluZ1RvRmluZCA9IHtcclxuXHRcIm5ldXRyYWxcIjogXCJbbm9tXVwiLFxyXG5cdFwibWFsZVwiOiBcIltub21NXVwiLFxyXG5cdFwiZmVtYWxlXCI6IFwiW25vbUZdXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogUmVudm9pZSB1biBlbnRpZXIgYWzDqWF0b2lyZSBlbnRyZSBtaW4gZXQgbWF4IFttaW4sIG1heF1cclxuICogQHBhcmFtICB7bnVtYmVyfSBtaW4gbGEgdmFsZXVyIG1pbmltdW0gcXVlIHBldXQgYXR0ZWluZHJlIGwnZW50aWVyXHJcbiAqIEBwYXJhbSAge251bWJlcn0gbWF4IGxhIHZhbGV1ciBtYXhpbXVtIHF1ZSBwZXV0IGF0dGVpbmRyZSBsJ2VudGllclxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEwnZW50aWVyIHRpcsOpIGF1IGhhc2FyZFxyXG4gKi9cclxuIGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxyXG5cclxuY29uc3QgY29uc29sZUluZm9ybWF0aW9uID0gKHNlbnRlbmNlcywgcGxheWVycykgPT4ge1xyXG5cdGxldCBjc3NTcXVhcmUgPSBcInBhZGRpbmc6IDNweCA1cHg7IGJvcmRlci1yYWRpdXM6IDVweDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI7XHJcblx0bGV0IGNzc1NtYWxsID0gXCJmb250LXNpemU6IDEwcHg7XCI7XHJcblx0Y29uc29sZS5ncm91cENvbGxhcHNlZChgJWNKb3VldXJzICgke3BsYXllcnMubGVuZ3RofSlgLCBgJHtjc3NTcXVhcmV9IGNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7YCk7XHJcblx0cGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhgJWMke3BsYXllci5nZW5kZXJ9JWMgJHtwbGF5ZXIubmFtZX1gLFxyXG5cdFx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2AsXHJcblx0XHRcIlwiKTtcclxuXHR9KTtcclxuXHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0Y29uc29sZS5ncm91cENvbGxhcHNlZChgJWNQaHJhc2VzICgke3NlbnRlbmNlcy5sZW5ndGh9KSVjICVjKCR7c2VudGVuY2VzLmZpbHRlcih4ID0+IHgudHlwZSA9PSBcInZpcnVzXCIpLmxlbmd0aH0gdmlydXMpYCxcclxuXHRgJHtjc3NTcXVhcmV9IGNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7YCxcclxuXHRcIlwiLFxyXG5cdGAke2Nzc1NxdWFyZX0gY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7YCk7XHJcblx0c2VudGVuY2VzLmZvckVhY2goc2VudGVuY2UgPT4ge1xyXG5cdFx0bGV0IGNzc1RoZW1lID0gXCJcIjtcclxuXHRcdHN3aXRjaCAoc2VudGVuY2UudGhlbWUpIHtcclxuXHRcdFx0Y2FzZSBcInNwb3J0XCI6XHJcblx0XHRcdFx0Y3NzVGhlbWUgPSBcImNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImhvdFwiOlxyXG5cdFx0XHRcdGNzc1RoZW1lID0gXCJjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6ICNmZjM2YmY7XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0Y3NzVGhlbWUgPSBcImNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRsZXQgc2VudGVuY2VUeXBlID0gXCJcIjtcclxuXHRcdGxldCBzcGFjZVR5cGUgPSBcIlwiO1xyXG5cdFx0aWYgKHNlbnRlbmNlLnR5cGUgIT0gXCJub3JtYWxcIikge1xyXG5cdFx0XHRzZW50ZW5jZVR5cGUgPSBzZW50ZW5jZS50eXBlO1xyXG5cdFx0XHRzcGFjZVR5cGUgPSBcIiBcIjtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYCVjJHtzZW50ZW5jZVR5cGV9JWMke3NwYWNlVHlwZX0lYyR7c2VudGVuY2UudGhlbWV9JWMgJHtzZW50ZW5jZS50ZXh0fWAsXHJcblx0XHRgJHtjc3NTcXVhcmV9IGNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogcmVkOyAke2Nzc1NtYWxsfWAsXHJcblx0XHRgJHtjc3NTbWFsbH1gLFxyXG5cdFx0YCR7Y3NzU3F1YXJlfSAke2Nzc1RoZW1lfSAke2Nzc1NtYWxsfWAsXHJcblx0XHRgJHtjc3NTbWFsbH1gKTtcclxuXHRcdGNvbnNvbGUudGFibGUoc2VudGVuY2UpO1xyXG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdH0pO1xyXG5cdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzZW50ZW5jZXNcclxuICogQHBhcmFtIHtPYmplY3RbXX0gb3B0aW9ucyBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gcGxheWVycyBcclxuICogQHJldHVybnMge09iamVjdFtdfSBcclxuICovXHJcbmNvbnN0IGZpbHRlclNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgbmJGZW1hbGUgPSBwbGF5ZXJzLnJlZHVjZSgoYWNjLCBjdXIpID0+IGN1ci5nZW5kZXIgPT09IFwiRlwiID8gKythY2MgOiBhY2MsIDApO1xyXG5cdGxldCBuYkdlbmRlciA9IHtcclxuXHRcdFwiZmVtYWxlXCI6IG5iRmVtYWxlLFxyXG5cdFx0XCJtYWxlXCI6IHBsYXllcnMubGVuZ3RoIC0gbmJGZW1hbGVcclxuXHR9O1xyXG5cclxuXHQvL05vbWJyZSBkJ8OpbMOpbWVudCByZWdleCB0cm91dsOpIGRhbnMgbGEgcGhyYXNlXHJcblx0Y29uc3QgZ2V0TmJFbHQgPSAocmVnZXgsIHRleHQpID0+IHtcclxuXHRcdHJldHVybiAodGV4dC5tYXRjaChyZWdleCkgfHwgW10pLmxlbmd0aDtcclxuXHR9O1xyXG5cdFxyXG5cdHJldHVybiBzZW50ZW5jZXMuZmlsdGVyKChlbHQpID0+IHtcclxuXHRcdGxldCBuYkVsdEZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLm5ldXRyYWwsIGVsdC50ZXh0KTtcclxuXHRcdGxldCBuYkVsdE1hbGVGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5tYWxlLCBlbHQudGV4dCk7XHJcblx0XHRsZXQgbmJFbHRGZW1hbGVGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5mZW1hbGUsIGVsdC50ZXh0KTtcclxuXHRcdFxyXG5cdFx0Ly9PbiB2w6lyaWZpZSBzJ2lsIHkgYSBiaWVuLCBhdXRhbnQgb3UgcGx1cyBkZSBqb3VldXIgcXVlIGxhIHBocmFzZXMgZW4gbsOpY2Vzc2l0ZSAoZW4gZm9uY3Rpb24gZHUgc2V4ZSlcclxuXHRcdGxldCBlbm91Z2hFbHRIb21tZSA9IG5iR2VuZGVyLm1hbGUgPj0gbmJFbHRNYWxlRmluZGVkO1xyXG5cdFx0bGV0IGVub3VnaEVsdEZlbW1lID0gbmJHZW5kZXIuZmVtYWxlID49IG5iRWx0RmVtYWxlRmluZGVkO1xyXG5cdFx0bGV0IGVub3VnaFBsYXllciA9IHBsYXllcnMubGVuZ3RoID49IChuYkVsdEZpbmRlZCArIG5iRWx0TWFsZUZpbmRlZCArIG5iRWx0RmVtYWxlRmluZGVkKTtcclxuXHJcblx0XHRyZXR1cm4gb3B0aW9ucy50aGVtZXMuaW5jbHVkZXMoZWx0LnRoZW1lKSAmJiBlbm91Z2hFbHRIb21tZSAmJiBlbm91Z2hFbHRGZW1tZSAmJiBlbm91Z2hQbGF5ZXI7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW52b2llIGxlIG5vbWJyZSBkZSBwaHJhc2VzIMOgIGFmZmljaGVyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBcclxuICogQHJldHVybnMge251bWJlcn0gTm9tYnJlIGRlIHBocmFzZXNcclxuICovXHJcbmNvbnN0IGdldExlbmd0aFNlbnRlbmNlcyA9IChkdXJhdGlvbikgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRcInRvdGFsXCI6IDIwICsgMTUqZHVyYXRpb24sXHJcblx0XHRcInZpcnVzXCI6IDIgKyAyKmR1cmF0aW9uXHJcblx0fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzZW50ZW5jZXMgXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IG9wdGlvbnMgXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IHBsYXllcnMgXHJcbiAqIEByZXR1cm5zIHtPYmplY3RbXX1cclxuICovXHJcbmNvbnN0IHNlbGVjdFNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgc2VudGVuY2VzU2VsZWN0ZWQgPSBbXTtcclxuXHRsZXQgbGVuZ3RoU2VudGVuY2VzID0gZ2V0TGVuZ3RoU2VudGVuY2VzKG9wdGlvbnMuZHVyYXRpb24pO1xyXG5cdFxyXG5cdGxldCBuYlNlbnRlbmNlc1BpY2tlZCA9IDA7XHJcbiAgICBsZXQgbmJWaXJ1c1BpY2tlZCA9IDA7XHJcblx0bGV0IGlkU2VudGVuY2VzUGlja2VkID0gW107XHJcblxyXG5cdHdoaWxlIChuYlNlbnRlbmNlc1BpY2tlZCA8IGxlbmd0aFNlbnRlbmNlcy50b3RhbCAmJiBpZFNlbnRlbmNlc1BpY2tlZC5sZW5ndGggPCBzZW50ZW5jZXMubGVuZ3RoKSB7XHJcblx0XHQvL09uIGNob2lzaXQgdW4gbnVtw6lybyBhdSBoYXNhcmRcclxuXHRcdGxldCBuYlJhbmRvbVNlbnRlbmNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnNlbnRlbmNlcy5sZW5ndGgpO1xyXG5cdFx0aWYgKCFpZFNlbnRlbmNlc1BpY2tlZC5pbmNsdWRlcyhuYlJhbmRvbVNlbnRlbmNlKSkge1xyXG5cdFx0XHRpZFNlbnRlbmNlc1BpY2tlZC5wdXNoKG5iUmFuZG9tU2VudGVuY2UpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHNlbnRlbmNlUGlja2VkID0gc2VudGVuY2VzW25iUmFuZG9tU2VudGVuY2VdO1xyXG5cclxuXHRcdFx0aWYgKHNlbnRlbmNlUGlja2VkLnR5cGUgPT0gXCJ2aXJ1c1wiKSB7XHJcblx0XHRcdFx0aWYgKG5iVmlydXNQaWNrZWQgPCBsZW5ndGhTZW50ZW5jZXMudmlydXMpIHtcclxuXHRcdFx0XHRcdHNlbnRlbmNlc1NlbGVjdGVkLnB1c2goc2VudGVuY2VQaWNrZWQpO1xyXG5cdFx0XHRcdFx0bmJTZW50ZW5jZXNQaWNrZWQrKztcclxuXHRcdFx0XHRcdG5iVmlydXNQaWNrZWQrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0c2VudGVuY2VzU2VsZWN0ZWQucHVzaChzZW50ZW5jZVBpY2tlZCk7XHJcblx0XHRcdFx0bmJTZW50ZW5jZXNQaWNrZWQrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNlbnRlbmNlc1NlbGVjdGVkO1xyXG59XHJcblxyXG5jb25zdCBpbml0U2VudGVuY2VzID0gKHNlbnRlbmNlcywgb3B0aW9ucywgcGxheWVycykgPT4ge1xyXG5cdHJldHVybiBzZW50ZW5jZXMubWFwKChzZW50ZW5jZSkgPT4ge1xyXG5cdFx0Ly9GYWl0IHVuZSBjb3BpZSBkZXMgam91ZXVyc1xyXG5cdFx0bGV0IHBsYXllcnNOb3RQaWNrZWQgPSBwbGF5ZXJzLnNsaWNlKCk7XHJcblxyXG5cdFx0Y29uc3QgaW5pdFBsYXllcnMgPSAoc3RyaW5nTWF0Y2gpID0+IHtcclxuXHRcdFx0d2hpbGUgKHNlbnRlbmNlLnRleHQuaW5kZXhPZihzdHJpbmdNYXRjaCkgPiAtMSkge1xyXG5cdFx0XHRcdC8vQ2hvaXNpdCBwYXJtaXMgcXVlbCB0eXBlIGRlIGpvdWV1ciBvbiBwZXV0IHRpcmVyXHJcblx0XHRcdFx0bGV0IHBsYXllclRvUGljaztcclxuXHRcdFx0XHRzd2l0Y2ggKHN0cmluZ01hdGNoKSB7XHJcblx0XHRcdFx0XHRjYXNlIHN0cmluZ1RvRmluZC5mZW1hbGU6XHJcblx0XHRcdFx0XHRcdHBsYXllclRvUGljayA9IHBsYXllcnNOb3RQaWNrZWQuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIuZ2VuZGVyID09IFwiRlwiKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIHN0cmluZ1RvRmluZC5tYWxlOlxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJUb1BpY2sgPSBwbGF5ZXJzTm90UGlja2VkLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLmdlbmRlciA9PSBcIk1cIik7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0cGxheWVyVG9QaWNrID0gcGxheWVyc05vdFBpY2tlZDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vQ2hvaXNpdCB1biBqb3VldXIgYXUgaGFzYXJkXHJcblx0XHRcdFx0bGV0IHBsYXllclBpY2tlZCA9IHBsYXllclRvUGlja1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcGxheWVyVG9QaWNrLmxlbmd0aCldO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vUmV0aXJlIGNlIGpvdWV1ciBkZSBsYSBsaXN0ZSBkZXMgam91ZXVycyBub24gcHJpc1xyXG5cdFx0XHRcdHBsYXllcnNOb3RQaWNrZWQuc3BsaWNlKHBsYXllcnNOb3RQaWNrZWQuaW5kZXhPZihwbGF5ZXJQaWNrZWQpLCAxKTtcclxuXHJcblx0XHRcdFx0Ly9SZW1wbGFjZSBsJ8OpbMOpbWVudCBwYXIgbGUgbm9tIGR1IGpvdWV1clxyXG5cdFx0XHRcdHNlbnRlbmNlLnRleHQgPSBzZW50ZW5jZS50ZXh0LnJlcGxhY2Uoc3RyaW5nTWF0Y2gsIHBsYXllclBpY2tlZC5uYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1NpIGxhIHBocmFzZSBlc3QgdW4gdmlydXMgZXQgcXUnb24gdHJvdXZlIHVuIMOpbMOpbWVudCBkYW5zIGxlcyBkZXRhaWxzXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VudGVuY2UudHlwZSA9PSBcInZpcnVzXCIgJiYgc2VudGVuY2UuZGV0YWlscy5pbmRleE9mKHN0cmluZ01hdGNoKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGFjZSBsZSBlbHRUb0ZpbmQgcGFyIGxlIG5vbSBkdSBqb3VldXIgKGxlIG3Dqm1lIHF1ZSBsZSB0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbnRlbmNlLmRldGFpbHMgPSBzZW50ZW5jZS5kZXRhaWxzLnJlcGxhY2Uoc3RyaW5nTWF0Y2gsIHBsYXllclBpY2tlZC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpbml0UGxheWVycyhzdHJpbmdUb0ZpbmQubmV1dHJhbCk7XHJcblx0XHRpbml0UGxheWVycyhzdHJpbmdUb0ZpbmQubWFsZSk7XHJcblx0XHRpbml0UGxheWVycyhzdHJpbmdUb0ZpbmQuZmVtYWxlKTtcclxuXHJcblx0XHRyZXR1cm4gc2VudGVuY2U7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQbGFjZSBsZXMgdmlydXMgZW4gdGFudCBxdWUgcGhyYXNlXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IHNlbnRlbmNlcyBUYWJsZWF1IGRlcyBwaHJhc2VzIHJldGVudWVzXHJcbiAqL1xyXG4gY29uc3QgcHV0VmlydXMgPSAoc2VudGVuY2VzKSA9PiB7XHJcblx0bGV0IG5ld1NlbnRlbmNlcyA9IHNlbnRlbmNlcy5zbGljZSgpO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHNlbnRlbmNlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKHNlbnRlbmNlc1tpXS50eXBlID09IFwidmlydXNcIikge1xyXG5cdFx0XHRjb25zdCBpbmRleFJhbmRWaXJ1cyA9IGdldFJhbmRvbUludCgzLCA2KTsgLy9UT0RPIDogZGlmZmVyZW50IHZpcnVzIGxlbmd0aCAoZGlmZmljdWx0eSlcclxuXHRcdFx0Y29uc3Qgc2VudGVuY2VWaXJ1cyA9IHtcclxuXHRcdFx0XHRcInRleHRcIjogc2VudGVuY2VzW2ldLmRldGFpbHMsXHJcblx0XHRcdFx0XCJ0aGVtZVwiOiBzZW50ZW5jZXNbaV0udGhlbWUsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidmlydXNFbmRcIixcclxuXHRcdFx0fTtcclxuXHRcdFx0bmV3U2VudGVuY2VzLnNwbGljZShpK2luZGV4UmFuZFZpcnVzLCAwLCBzZW50ZW5jZVZpcnVzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBuZXdTZW50ZW5jZXM7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBQbGF5KHByb3BzKSB7XHJcblx0bGV0IGxvY2FsT3B0aW9ucyA9IG51bGw7XHJcblx0bGV0IGxvY2FsUGxheWVycyA9IG51bGw7XHJcblx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdFx0bG9jYWxPcHRpb25zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9wdGlvbnNcIikpO1xyXG5cdFx0bG9jYWxQbGF5ZXJzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllcnNcIikpO1xyXG5cdH1cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtwbGF5ZXJzXSA9IHVzZVN0YXRlKGxvY2FsUGxheWVycyk7XHJcblx0Y29uc3QgW29wdGlvbnNdID0gdXNlU3RhdGUobG9jYWxPcHRpb25zKTtcclxuXHRjb25zdCBbYmFyTGVuZ3RoLCBzZXRCYXJMZW5ndGhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRTZW50ZW5jZSA9IDA7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50LCBzZW50ZW5jZXMpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQvL0NsaXF1ZSDDoCBnYXVjaGVcclxuXHRcdGlmIChldmVudC5jbGllbnRYIDwgd2luZG93LmlubmVyV2lkdGggLyAyKSB7XHJcblx0XHRcdGlmIChjdXJyZW50U2VudGVuY2UgPiAwKSB7XHJcblx0XHRcdFx0Y3VycmVudFNlbnRlbmNlLS07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vQ2xpcXVlIMOgIGRyb2l0ZVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlmIChjdXJyZW50U2VudGVuY2UgPCBzZW50ZW5jZXMubGVuZ3RoLTEpIHtcclxuXHRcdFx0XHRjdXJyZW50U2VudGVuY2UrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRyb3V0ZXIucmVsb2FkKCcvcGxheScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRzZXRUZXh0KHNlbnRlbmNlc1tjdXJyZW50U2VudGVuY2VdLnRleHQpO1xyXG5cdFx0c2V0QmFyTGVuZ3RoKGdldExlbmd0aEJhcihzZW50ZW5jZXMubGVuZ3RoKSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0TGVuZ3RoQmFyID0gKHNlbnRlbmNlc0xlbmd0aCkgPT4ge1xyXG5cdFx0cmV0dXJuIGN1cnJlbnRTZW50ZW5jZSoxMDAgLyBzZW50ZW5jZXNMZW5ndGg7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxldCBzZW50ZW5jZXMgPSBmaWx0ZXJTZW50ZW5jZXMoZGF0YSwgb3B0aW9ucywgcGxheWVycyk7XHJcblx0XHRzZW50ZW5jZXMgPSBzZWxlY3RTZW50ZW5jZXMoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IGluaXRTZW50ZW5jZXMoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IHB1dFZpcnVzKHNlbnRlbmNlcyk7XHJcblx0XHRjb25zb2xlSW5mb3JtYXRpb24oc2VudGVuY2VzLCBwbGF5ZXJzKTtcclxuXHJcblx0XHRzZXRCYXJMZW5ndGgoZ2V0TGVuZ3RoQmFyKHNlbnRlbmNlcy5sZW5ndGgpKTtcclxuXHRcdHNldFRleHQoc2VudGVuY2VzWzBdLnRleHQpO1xyXG5cdFx0XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGhhbmRsZUNsaWNrKGUsIHNlbnRlbmNlcykpO1xyXG5cclxuICAgICAgICAvKmxldCBuUmFuZG9tU2VudGVuY2VzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKTtcclxuXHRcdHNldFRleHQoZGF0YVtuUmFuZG9tU2VudGVuY2VzXS50ZXh0KTsqL1xyXG5cclxuXHRcdC8vIFRPRE8gOiAoaWTDqWUgZW4gdHMgPT4gRmFpcmUgcmVkdWNlciBldCBpbnRlcmZhY2UgcG91ciBsZXMgcGhyYXNlcyBkdSBqc29uIDogaHR0cHM6Ly95b3V0dS5iZS9aNWlXcjZTcnNqOD90PTkxOClcclxuXHRcdC8vIChGYWlyZSBkZXMgZm9uY3Rpb25zIChlbiBkZWhvcnMgZHUgY29tcG9zYW50cyBwb3VyIHF1ZSDDp2Egc29pdCBjbGVhbiAoanVzdGUgYXUgZGVzc3VzIGzDoCkpKVxyXG5cdFx0Ly8gLSBGaWx0cmVyIGxlIGpzb24gZGF0YSBwb3VyIG5lIHByZW5kcmUgcXVlIGxlcyBwaHJhc2VzIHF1aSByZXNwZWN0ZW50IGxlcyBvcHRpb25zICh0aMOobWVzLi4uKVxyXG5cdFx0Ly8gLSBGYWlyZSBsZSB0YWJsZWF1IGRlIHBocmFzZXMgKHVuZSBjZXJ0YWluZSBsb25ndWV1ciBlbiBmb25jdGlvbiBkZSBsYSBsb25ndWV1ciBlbiBvcHRpb24pXHJcblx0XHQvLyAtIFJlbXBsYWNlciBsZXMgbm9tcyBkYW5zIGxlcyBwaHJhc2VzICh0aXJlciBsZXMgbm9tcyBhdSBoYXNhcmQgdG91dCDDp2EgdG91dCDDp2EpXHJcblx0XHQvLyAtIE1ldHRyZSBsZXMgdmlydXMgcXVlbHF1ZSBwYXJ0XHJcblx0XHQvLyAtIE1ldHRyZSBsYSBjb25zw6lxdWVuY2UganVzdGUgYXByw6hzIHBvdXIgbGVzIGNob2l4XHJcblx0XHQvL1xyXG5cdFx0Ly8gLSBQb3VyIGxlcyBjaG9peCwgY2Ugc2VyYSBkYW5zIGxlIGpldSBkZSByZW1wbGFjZXIgbGUgbm9tIGRlcyBkw6l0YWlscyBkb25jIHBhcyBkYW5zIGNldHRlIGZvbmN0aW9uXHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dCB0aXRsZT1cIlNlbGVjdGlvbm5lclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHtzdHlsZXMubWFpbn1gfT5cclxuXHRcdFx0XHQ8TGluayBocmVmPVwiL3NlbGVjdC9wbGF5ZXJzXCI+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e3N0eWxlcy5xdWl0QnRufT48L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdHt0aXRsZSB8fCBcIlwifVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0e3RleHQgfHwgXCJDaGFyZ2VtZW50Li4uXCJ9XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyQ29udGFpbmVyfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyfT5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmJhclZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7d2lkdGg6IGAke2Jhckxlbmd0aH0lYCwgYmFja2dyb3VuZENvbG9yOiBcIiM4NEZGQjlcIn19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5OyJdLCJzb3VyY2VSb290IjoiIn0=