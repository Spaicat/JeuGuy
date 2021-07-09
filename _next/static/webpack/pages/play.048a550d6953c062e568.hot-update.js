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

var progressBarChange = function progressBarChange() {
  //TODO
  var bar = document.getElementsByClassName("progress-value")[0];
  var widthCurrent = bar.style.width;
  var widthFinal = currentSentence * 100 / sentences.length;
  bar.style.width = widthFinal + "%";
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

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      barStyle = _useState5[0],
      setBarStyle = _useState5[1];

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
        }
      }

    setText(sentences[currentSentence].text);
    progressBarChange();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var sentences = filterSentences(_data_sentences_json__WEBPACK_IMPORTED_MODULE_4__, options, players);
    sentences = selectSentences(sentences, options, players);
    sentences = initSentences(sentences, options, players);
    sentences = putVirus(sentences);
    consoleInformation(sentences, players);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    title: "Selectionner",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "".concat((_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_5___default().container), " ").concat((_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_5___default().main)),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "title",
        children: title || ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: text || "Chargement..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "progress-container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "progress-bar",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "progress-value"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 293,
    columnNumber: 3
  }, this);
}

_s(Play, "sVHnICq0D/czsOZWUfjiq6AGotc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS5qcyJdLCJuYW1lcyI6WyJyZWdleFRvRmluZCIsInN0cmluZ1RvRmluZCIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlSW5mb3JtYXRpb24iLCJzZW50ZW5jZXMiLCJwbGF5ZXJzIiwiY3NzU3F1YXJlIiwiY3NzU21hbGwiLCJjb25zb2xlIiwiZ3JvdXBDb2xsYXBzZWQiLCJsZW5ndGgiLCJmb3JFYWNoIiwicGxheWVyIiwibG9nIiwiZ2VuZGVyIiwibmFtZSIsImdyb3VwRW5kIiwiZmlsdGVyIiwieCIsInR5cGUiLCJzZW50ZW5jZSIsImNzc1RoZW1lIiwidGhlbWUiLCJzZW50ZW5jZVR5cGUiLCJzcGFjZVR5cGUiLCJ0ZXh0IiwidGFibGUiLCJmaWx0ZXJTZW50ZW5jZXMiLCJvcHRpb25zIiwibmJGZW1hbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJuYkdlbmRlciIsImdldE5iRWx0IiwicmVnZXgiLCJtYXRjaCIsImVsdCIsIm5iRWx0RmluZGVkIiwibmV1dHJhbCIsIm5iRWx0TWFsZUZpbmRlZCIsIm1hbGUiLCJuYkVsdEZlbWFsZUZpbmRlZCIsImZlbWFsZSIsImVub3VnaEVsdEhvbW1lIiwiZW5vdWdoRWx0RmVtbWUiLCJlbm91Z2hQbGF5ZXIiLCJ0aGVtZXMiLCJpbmNsdWRlcyIsImdldExlbmd0aFNlbnRlbmNlcyIsImR1cmF0aW9uIiwic2VsZWN0U2VudGVuY2VzIiwic2VudGVuY2VzU2VsZWN0ZWQiLCJsZW5ndGhTZW50ZW5jZXMiLCJuYlNlbnRlbmNlc1BpY2tlZCIsIm5iVmlydXNQaWNrZWQiLCJpZFNlbnRlbmNlc1BpY2tlZCIsInRvdGFsIiwibmJSYW5kb21TZW50ZW5jZSIsInB1c2giLCJzZW50ZW5jZVBpY2tlZCIsInZpcnVzIiwiaW5pdFNlbnRlbmNlcyIsIm1hcCIsInBsYXllcnNOb3RQaWNrZWQiLCJzbGljZSIsImluaXRQbGF5ZXJzIiwic3RyaW5nTWF0Y2giLCJpbmRleE9mIiwicGxheWVyVG9QaWNrIiwicGxheWVyUGlja2VkIiwic3BsaWNlIiwicmVwbGFjZSIsImRldGFpbHMiLCJwdXRWaXJ1cyIsIm5ld1NlbnRlbmNlcyIsImkiLCJpbmRleFJhbmRWaXJ1cyIsInNlbnRlbmNlVmlydXMiLCJwcm9ncmVzc0JhckNoYW5nZSIsImJhciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIndpZHRoQ3VycmVudCIsInN0eWxlIiwid2lkdGgiLCJ3aWR0aEZpbmFsIiwiY3VycmVudFNlbnRlbmNlIiwiUGxheSIsImxvY2FsT3B0aW9ucyIsImxvY2FsUGxheWVycyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VTdGF0ZSIsInNldFRleHQiLCJ0aXRsZSIsInNldFRpdGxlIiwiYmFyU3R5bGUiLCJzZXRCYXJTdHlsZSIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWVudFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidXNlRWZmZWN0IiwiZGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxXQUFXLEdBQUc7QUFDakIsYUFBVyxVQURNO0FBRWpCLFVBQVEsV0FGUztBQUdqQixZQUFVO0FBSE8sQ0FBbEI7QUFLQSxJQUFJQyxZQUFZLEdBQUc7QUFDbEIsYUFBVyxPQURPO0FBRWxCLFVBQVEsUUFGVTtBQUdsQixZQUFVO0FBSFEsQ0FBbkI7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0MsU0FBU0MsWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzdCRCxLQUFHLEdBQUdFLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxHQUFWLENBQU47QUFDQUMs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Q0FBcEI7QUFDQUQsc0JBQWtCLENBQUNDLFNBQUQsRUFBWUMsT0FBWixDQUFsQjtBQUVBMkYsV0FBTyxDQUFDNUYsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhcUIsSUFBZCxDQUFQO0FBRUF3RCxZQUFRLENBQUM0QixnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFEO0FBQUEsYUFBT1QsV0FBVyxDQUFDUyxDQUFELEVBQUkxRyxTQUFKLENBQWxCO0FBQUEsS0FBbkM7QUFFTTtBQUNSO0FBRUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0F2QlEsRUF1Qk4sRUF2Qk0sQ0FBVDtBQXlCQSxzQkFDQyw4REFBQyx1REFBRDtBQUFRLFNBQUssRUFBQyxjQUFkO0FBQUEsMkJBQ0M7QUFBSyxlQUFTLFlBQUsyRywwRUFBTCxjQUF5QkEscUVBQXpCLENBQWQ7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLGtCQUNFZCxLQUFLLElBQUk7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFJQztBQUFBLGtCQUNFeEUsSUFBSSxJQUFJO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpELGVBT0M7QUFBSyxVQUFFLEVBQUMsb0JBQVI7QUFBQSwrQkFDQztBQUFLLG1CQUFNLGNBQVg7QUFBQSxpQ0FDQztBQUFLLHFCQUFNO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBaUJBOztHQTNFUStELEk7O0tBQUFBLEk7QUE2RVQsK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGxheS4wNDhhNTUwZDY5NTNjMDYyZTU2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9QbGF5Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9zZW50ZW5jZXMuanNvbic7XHJcblxyXG5sZXQgcmVnZXhUb0ZpbmQgPSB7XHJcblx0XCJuZXV0cmFsXCI6IC9cXFtub21cXF0vZyxcclxuXHRcIm1hbGVcIjogL1xcW25vbU1cXF0vZyxcclxuXHRcImZlbWFsZVwiOiAvXFxbbm9tRlxcXS9nLFxyXG59O1xyXG5sZXQgc3RyaW5nVG9GaW5kID0ge1xyXG5cdFwibmV1dHJhbFwiOiBcIltub21dXCIsXHJcblx0XCJtYWxlXCI6IFwiW25vbU1dXCIsXHJcblx0XCJmZW1hbGVcIjogXCJbbm9tRl1cIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW52b2llIHVuIGVudGllciBhbMOpYXRvaXJlIGVudHJlIG1pbiBldCBtYXggW21pbiwgbWF4XVxyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pbiBsYSB2YWxldXIgbWluaW11bSBxdWUgcGV1dCBhdHRlaW5kcmUgbCdlbnRpZXJcclxuICogQHBhcmFtICB7bnVtYmVyfSBtYXggbGEgdmFsZXVyIG1heGltdW0gcXVlIHBldXQgYXR0ZWluZHJlIGwnZW50aWVyXHJcbiAqIEByZXR1cm4ge251bWJlcn0gTCdlbnRpZXIgdGlyw6kgYXUgaGFzYXJkXHJcbiAqL1xyXG4gZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcclxuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcblxyXG5jb25zdCBjb25zb2xlSW5mb3JtYXRpb24gPSAoc2VudGVuY2VzLCBwbGF5ZXJzKSA9PiB7XHJcblx0bGV0IGNzc1NxdWFyZSA9IFwicGFkZGluZzogM3B4IDVweDsgYm9yZGVyLXJhZGl1czogNXB4OyBmb250LXdlaWdodDogYm9sZDtcIjtcclxuXHRsZXQgY3NzU21hbGwgPSBcImZvbnQtc2l6ZTogMTBweDtcIjtcclxuXHRjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGAlY0pvdWV1cnMgKCR7cGxheWVycy5sZW5ndGh9KWAsIGAke2Nzc1NxdWFyZX0gY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtgKTtcclxuXHRwbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGAlYyR7cGxheWVyLmdlbmRlcn0lYyAke3BsYXllci5uYW1lfWAsXHJcblx0XHRgJHtjc3NTcXVhcmV9IGNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7YCxcclxuXHRcdFwiXCIpO1xyXG5cdH0pO1xyXG5cdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHRjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGAlY1BocmFzZXMgKCR7c2VudGVuY2VzLmxlbmd0aH0pJWMgJWMoJHtzZW50ZW5jZXMuZmlsdGVyKHggPT4geC50eXBlID09IFwidmlydXNcIikubGVuZ3RofSB2aXJ1cylgLFxyXG5cdGAke2Nzc1NxdWFyZX0gY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtgLFxyXG5cdFwiXCIsXHJcblx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IHJlZDtgKTtcclxuXHRzZW50ZW5jZXMuZm9yRWFjaChzZW50ZW5jZSA9PiB7XHJcblx0XHRsZXQgY3NzVGhlbWUgPSBcIlwiO1xyXG5cdFx0c3dpdGNoIChzZW50ZW5jZS50aGVtZSkge1xyXG5cdFx0XHRjYXNlIFwic3BvcnRcIjpcclxuXHRcdFx0XHRjc3NUaGVtZSA9IFwiY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiaG90XCI6XHJcblx0XHRcdFx0Y3NzVGhlbWUgPSBcImNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzZiZjtcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRjc3NUaGVtZSA9IFwiY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGxldCBzZW50ZW5jZVR5cGUgPSBcIlwiO1xyXG5cdFx0bGV0IHNwYWNlVHlwZSA9IFwiXCI7XHJcblx0XHRpZiAoc2VudGVuY2UudHlwZSAhPSBcIm5vcm1hbFwiKSB7XHJcblx0XHRcdHNlbnRlbmNlVHlwZSA9IHNlbnRlbmNlLnR5cGU7XHJcblx0XHRcdHNwYWNlVHlwZSA9IFwiIFwiO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5ncm91cENvbGxhcHNlZChgJWMke3NlbnRlbmNlVHlwZX0lYyR7c3BhY2VUeXBlfSVjJHtzZW50ZW5jZS50aGVtZX0lYyAke3NlbnRlbmNlLnRleHR9YCxcclxuXHRcdGAke2Nzc1NxdWFyZX0gY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICR7Y3NzU21hbGx9YCxcclxuXHRcdGAke2Nzc1NtYWxsfWAsXHJcblx0XHRgJHtjc3NTcXVhcmV9ICR7Y3NzVGhlbWV9ICR7Y3NzU21hbGx9YCxcclxuXHRcdGAke2Nzc1NtYWxsfWApO1xyXG5cdFx0Y29uc29sZS50YWJsZShzZW50ZW5jZSk7XHJcblx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0fSk7XHJcblx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IHNlbnRlbmNlc1xyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBvcHRpb25zIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBwbGF5ZXJzIFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0W119IFxyXG4gKi9cclxuY29uc3QgZmlsdGVyU2VudGVuY2VzID0gKHNlbnRlbmNlcywgb3B0aW9ucywgcGxheWVycykgPT4ge1xyXG5cdGxldCBuYkZlbWFsZSA9IHBsYXllcnMucmVkdWNlKChhY2MsIGN1cikgPT4gY3VyLmdlbmRlciA9PT0gXCJGXCIgPyArK2FjYyA6IGFjYywgMCk7XHJcblx0bGV0IG5iR2VuZGVyID0ge1xyXG5cdFx0XCJmZW1hbGVcIjogbmJGZW1hbGUsXHJcblx0XHRcIm1hbGVcIjogcGxheWVycy5sZW5ndGggLSBuYkZlbWFsZVxyXG5cdH07XHJcblxyXG5cdC8vTm9tYnJlIGQnw6lsw6ltZW50IHJlZ2V4IHRyb3V2w6kgZGFucyBsYSBwaHJhc2VcclxuXHRjb25zdCBnZXROYkVsdCA9IChyZWdleCwgdGV4dCkgPT4ge1xyXG5cdFx0cmV0dXJuICh0ZXh0Lm1hdGNoKHJlZ2V4KSB8fCBbXSkubGVuZ3RoO1xyXG5cdH07XHJcblx0XHJcblx0cmV0dXJuIHNlbnRlbmNlcy5maWx0ZXIoKGVsdCkgPT4ge1xyXG5cdFx0bGV0IG5iRWx0RmluZGVkID0gZ2V0TmJFbHQocmVnZXhUb0ZpbmQubmV1dHJhbCwgZWx0LnRleHQpO1xyXG5cdFx0bGV0IG5iRWx0TWFsZUZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLm1hbGUsIGVsdC50ZXh0KTtcclxuXHRcdGxldCBuYkVsdEZlbWFsZUZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLmZlbWFsZSwgZWx0LnRleHQpO1xyXG5cdFx0XHJcblx0XHQvL09uIHbDqXJpZmllIHMnaWwgeSBhIGJpZW4sIGF1dGFudCBvdSBwbHVzIGRlIGpvdWV1ciBxdWUgbGEgcGhyYXNlcyBlbiBuw6ljZXNzaXRlIChlbiBmb25jdGlvbiBkdSBzZXhlKVxyXG5cdFx0bGV0IGVub3VnaEVsdEhvbW1lID0gbmJHZW5kZXIubWFsZSA+PSBuYkVsdE1hbGVGaW5kZWQ7XHJcblx0XHRsZXQgZW5vdWdoRWx0RmVtbWUgPSBuYkdlbmRlci5mZW1hbGUgPj0gbmJFbHRGZW1hbGVGaW5kZWQ7XHJcblx0XHRsZXQgZW5vdWdoUGxheWVyID0gcGxheWVycy5sZW5ndGggPj0gKG5iRWx0RmluZGVkICsgbmJFbHRNYWxlRmluZGVkICsgbmJFbHRGZW1hbGVGaW5kZWQpO1xyXG5cclxuXHRcdHJldHVybiBvcHRpb25zLnRoZW1lcy5pbmNsdWRlcyhlbHQudGhlbWUpICYmIGVub3VnaEVsdEhvbW1lICYmIGVub3VnaEVsdEZlbW1lICYmIGVub3VnaFBsYXllcjtcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbnZvaWUgbGUgbm9tYnJlIGRlIHBocmFzZXMgw6AgYWZmaWNoZXJcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBOb21icmUgZGUgcGhyYXNlc1xyXG4gKi9cclxuY29uc3QgZ2V0TGVuZ3RoU2VudGVuY2VzID0gKGR1cmF0aW9uKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdFwidG90YWxcIjogMjAgKyAxNSpkdXJhdGlvbixcclxuXHRcdFwidmlydXNcIjogMiArIDIqZHVyYXRpb25cclxuXHR9O1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IHNlbnRlbmNlcyBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gb3B0aW9ucyBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gcGxheWVycyBcclxuICogQHJldHVybnMge09iamVjdFtdfVxyXG4gKi9cclxuY29uc3Qgc2VsZWN0U2VudGVuY2VzID0gKHNlbnRlbmNlcywgb3B0aW9ucywgcGxheWVycykgPT4ge1xyXG5cdGxldCBzZW50ZW5jZXNTZWxlY3RlZCA9IFtdO1xyXG5cdGxldCBsZW5ndGhTZW50ZW5jZXMgPSBnZXRMZW5ndGhTZW50ZW5jZXMob3B0aW9ucy5kdXJhdGlvbik7XHJcblx0XHJcblx0bGV0IG5iU2VudGVuY2VzUGlja2VkID0gMDtcclxuICAgIGxldCBuYlZpcnVzUGlja2VkID0gMDtcclxuXHRsZXQgaWRTZW50ZW5jZXNQaWNrZWQgPSBbXTtcclxuXHJcblx0d2hpbGUgKG5iU2VudGVuY2VzUGlja2VkIDwgbGVuZ3RoU2VudGVuY2VzLnRvdGFsICYmIGlkU2VudGVuY2VzUGlja2VkLmxlbmd0aCA8IHNlbnRlbmNlcy5sZW5ndGgpIHtcclxuXHRcdC8vT24gY2hvaXNpdCB1biBudW3DqXJvIGF1IGhhc2FyZFxyXG5cdFx0bGV0IG5iUmFuZG9tU2VudGVuY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqc2VudGVuY2VzLmxlbmd0aCk7XHJcblx0XHRpZiAoIWlkU2VudGVuY2VzUGlja2VkLmluY2x1ZGVzKG5iUmFuZG9tU2VudGVuY2UpKSB7XHJcblx0XHRcdGlkU2VudGVuY2VzUGlja2VkLnB1c2gobmJSYW5kb21TZW50ZW5jZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgc2VudGVuY2VQaWNrZWQgPSBzZW50ZW5jZXNbbmJSYW5kb21TZW50ZW5jZV07XHJcblxyXG5cdFx0XHRpZiAoc2VudGVuY2VQaWNrZWQudHlwZSA9PSBcInZpcnVzXCIpIHtcclxuXHRcdFx0XHRpZiAobmJWaXJ1c1BpY2tlZCA8IGxlbmd0aFNlbnRlbmNlcy52aXJ1cykge1xyXG5cdFx0XHRcdFx0c2VudGVuY2VzU2VsZWN0ZWQucHVzaChzZW50ZW5jZVBpY2tlZCk7XHJcblx0XHRcdFx0XHRuYlNlbnRlbmNlc1BpY2tlZCsrO1xyXG5cdFx0XHRcdFx0bmJWaXJ1c1BpY2tlZCsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRzZW50ZW5jZXNTZWxlY3RlZC5wdXNoKHNlbnRlbmNlUGlja2VkKTtcclxuXHRcdFx0XHRuYlNlbnRlbmNlc1BpY2tlZCsrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc2VudGVuY2VzU2VsZWN0ZWQ7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRTZW50ZW5jZXMgPSAoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKSA9PiB7XHJcblx0cmV0dXJuIHNlbnRlbmNlcy5tYXAoKHNlbnRlbmNlKSA9PiB7XHJcblx0XHQvL0ZhaXQgdW5lIGNvcGllIGRlcyBqb3VldXJzXHJcblx0XHRsZXQgcGxheWVyc05vdFBpY2tlZCA9IHBsYXllcnMuc2xpY2UoKTtcclxuXHJcblx0XHRjb25zdCBpbml0UGxheWVycyA9IChzdHJpbmdNYXRjaCkgPT4ge1xyXG5cdFx0XHR3aGlsZSAoc2VudGVuY2UudGV4dC5pbmRleE9mKHN0cmluZ01hdGNoKSA+IC0xKSB7XHJcblx0XHRcdFx0Ly9DaG9pc2l0IHBhcm1pcyBxdWVsIHR5cGUgZGUgam91ZXVyIG9uIHBldXQgdGlyZXJcclxuXHRcdFx0XHRsZXQgcGxheWVyVG9QaWNrO1xyXG5cdFx0XHRcdHN3aXRjaCAoc3RyaW5nTWF0Y2gpIHtcclxuXHRcdFx0XHRcdGNhc2Ugc3RyaW5nVG9GaW5kLmZlbWFsZTpcclxuXHRcdFx0XHRcdFx0cGxheWVyVG9QaWNrID0gcGxheWVyc05vdFBpY2tlZC5maWx0ZXIocGxheWVyID0+IHBsYXllci5nZW5kZXIgPT0gXCJGXCIpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2Ugc3RyaW5nVG9GaW5kLm1hbGU6XHJcblx0XHRcdFx0XHRcdHBsYXllclRvUGljayA9IHBsYXllcnNOb3RQaWNrZWQuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIuZ2VuZGVyID09IFwiTVwiKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJUb1BpY2sgPSBwbGF5ZXJzTm90UGlja2VkO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9DaG9pc2l0IHVuIGpvdWV1ciBhdSBoYXNhcmRcclxuXHRcdFx0XHRsZXQgcGxheWVyUGlja2VkID0gcGxheWVyVG9QaWNrW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpwbGF5ZXJUb1BpY2subGVuZ3RoKV07XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9SZXRpcmUgY2Ugam91ZXVyIGRlIGxhIGxpc3RlIGRlcyBqb3VldXJzIG5vbiBwcmlzXHJcblx0XHRcdFx0cGxheWVyc05vdFBpY2tlZC5zcGxpY2UocGxheWVyc05vdFBpY2tlZC5pbmRleE9mKHBsYXllclBpY2tlZCksIDEpO1xyXG5cclxuXHRcdFx0XHQvL1JlbXBsYWNlIGwnw6lsw6ltZW50IHBhciBsZSBub20gZHUgam91ZXVyXHJcblx0XHRcdFx0c2VudGVuY2UudGV4dCA9IHNlbnRlbmNlLnRleHQucmVwbGFjZShzdHJpbmdNYXRjaCwgcGxheWVyUGlja2VkLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vU2kgbGEgcGhyYXNlIGVzdCB1biB2aXJ1cyBldCBxdSdvbiB0cm91dmUgdW4gw6lsw6ltZW50IGRhbnMgbGVzIGRldGFpbHNcclxuICAgICAgICAgICAgICAgIGlmIChzZW50ZW5jZS50eXBlID09IFwidmlydXNcIiAmJiBzZW50ZW5jZS5kZXRhaWxzLmluZGV4T2Yoc3RyaW5nTWF0Y2gpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlbXBsYWNlIGxlIGVsdFRvRmluZCBwYXIgbGUgbm9tIGR1IGpvdWV1ciAobGUgbcOqbWUgcXVlIGxlIHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VudGVuY2UuZGV0YWlscyA9IHNlbnRlbmNlLmRldGFpbHMucmVwbGFjZShzdHJpbmdNYXRjaCwgcGxheWVyUGlja2VkLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGluaXRQbGF5ZXJzKHN0cmluZ1RvRmluZC5uZXV0cmFsKTtcclxuXHRcdGluaXRQbGF5ZXJzKHN0cmluZ1RvRmluZC5tYWxlKTtcclxuXHRcdGluaXRQbGF5ZXJzKHN0cmluZ1RvRmluZC5mZW1hbGUpO1xyXG5cclxuXHRcdHJldHVybiBzZW50ZW5jZTtcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBsYWNlIGxlcyB2aXJ1cyBlbiB0YW50IHF1ZSBwaHJhc2VcclxuICogQHBhcmFtIHtPYmplY3RbXX0gc2VudGVuY2VzIFRhYmxlYXUgZGVzIHBocmFzZXMgcmV0ZW51ZXNcclxuICovXHJcbiBjb25zdCBwdXRWaXJ1cyA9IChzZW50ZW5jZXMpID0+IHtcclxuXHRsZXQgbmV3U2VudGVuY2VzID0gc2VudGVuY2VzLnNsaWNlKCk7XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc2VudGVuY2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoc2VudGVuY2VzW2ldLnR5cGUgPT0gXCJ2aXJ1c1wiKSB7XHJcblx0XHRcdGNvbnN0IGluZGV4UmFuZFZpcnVzID0gZ2V0UmFuZG9tSW50KDMsIDYpOyAvL1RPRE8gOiBkaWZmZXJlbnQgdmlydXMgbGVuZ3RoIChkaWZmaWN1bHR5KVxyXG5cdFx0XHRjb25zdCBzZW50ZW5jZVZpcnVzID0ge1xyXG5cdFx0XHRcdFwidGV4dFwiOiBzZW50ZW5jZXNbaV0uZGV0YWlscyxcclxuXHRcdFx0XHRcInRoZW1lXCI6IHNlbnRlbmNlc1tpXS50aGVtZSxcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ2aXJ1c0VuZFwiLFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRuZXdTZW50ZW5jZXMuc3BsaWNlKGkraW5kZXhSYW5kVmlydXMsIDAsIHNlbnRlbmNlVmlydXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5ld1NlbnRlbmNlcztcclxufVxyXG5cclxuY29uc3QgcHJvZ3Jlc3NCYXJDaGFuZ2UgPSAoKSA9PiB7IC8vVE9ET1xyXG4gICAgY29uc3QgYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2dyZXNzLXZhbHVlXCIpWzBdO1xyXG4gICAgbGV0IHdpZHRoQ3VycmVudCA9IGJhci5zdHlsZS53aWR0aDtcclxuICAgIGxldCB3aWR0aEZpbmFsID0gY3VycmVudFNlbnRlbmNlKjEwMCAvIHNlbnRlbmNlcy5sZW5ndGg7XHJcbiAgICBiYXIuc3R5bGUud2lkdGggPSB3aWR0aEZpbmFsICsgXCIlXCI7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBQbGF5KCkge1xyXG5cdGxldCBsb2NhbE9wdGlvbnMgPSBudWxsO1xyXG5cdGxldCBsb2NhbFBsYXllcnMgPSBudWxsO1xyXG5cdGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuXHRcdGxvY2FsT3B0aW9ucyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvcHRpb25zXCIpKTtcclxuXHRcdGxvY2FsUGxheWVycyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbGF5ZXJzXCIpKTtcclxuXHR9XHJcblx0Y29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbcGxheWVyc10gPSB1c2VTdGF0ZShsb2NhbFBsYXllcnMpO1xyXG5cdGNvbnN0IFtvcHRpb25zXSA9IHVzZVN0YXRlKGxvY2FsT3B0aW9ucyk7XHJcblx0Y29uc3QgW2JhclN0eWxlLCBzZXRCYXJTdHlsZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBsZXQgY3VycmVudFNlbnRlbmNlID0gMDtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQsIHNlbnRlbmNlcykgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdC8vQ2xpcXVlIMOgIGdhdWNoZVxyXG5cdFx0aWYgKGV2ZW50LmNsaWVudFggPCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIHtcclxuXHRcdFx0aWYgKGN1cnJlbnRTZW50ZW5jZSA+IDApIHtcclxuXHRcdFx0XHRjdXJyZW50U2VudGVuY2UtLTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly9DbGlxdWUgw6AgZHJvaXRlXHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aWYgKGN1cnJlbnRTZW50ZW5jZSA8IHNlbnRlbmNlcy5sZW5ndGgtMSkge1xyXG5cdFx0XHRcdGN1cnJlbnRTZW50ZW5jZSsrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRzZXRUZXh0KHNlbnRlbmNlc1tjdXJyZW50U2VudGVuY2VdLnRleHQpO1xyXG4gICAgICAgIHByb2dyZXNzQmFyQ2hhbmdlKCk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxldCBzZW50ZW5jZXMgPSBmaWx0ZXJTZW50ZW5jZXMoZGF0YSwgb3B0aW9ucywgcGxheWVycyk7XHJcblx0XHRzZW50ZW5jZXMgPSBzZWxlY3RTZW50ZW5jZXMoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IGluaXRTZW50ZW5jZXMoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IHB1dFZpcnVzKHNlbnRlbmNlcyk7XHJcblx0XHRjb25zb2xlSW5mb3JtYXRpb24oc2VudGVuY2VzLCBwbGF5ZXJzKTtcclxuXHJcblx0XHRzZXRUZXh0KHNlbnRlbmNlc1swXS50ZXh0KTtcclxuXHRcdFxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBoYW5kbGVDbGljayhlLCBzZW50ZW5jZXMpKTtcclxuXHJcbiAgICAgICAgLypsZXQgblJhbmRvbVNlbnRlbmNlcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCk7XHJcblx0XHRzZXRUZXh0KGRhdGFbblJhbmRvbVNlbnRlbmNlc10udGV4dCk7Ki9cclxuXHJcblx0XHQvLyBUT0RPIDogKGlkw6llIGVuIHRzID0+IEZhaXJlIHJlZHVjZXIgZXQgaW50ZXJmYWNlIHBvdXIgbGVzIHBocmFzZXMgZHUganNvbiA6IGh0dHBzOi8veW91dHUuYmUvWjVpV3I2U3Jzajg/dD05MTgpXHJcblx0XHQvLyAoRmFpcmUgZGVzIGZvbmN0aW9ucyAoZW4gZGVob3JzIGR1IGNvbXBvc2FudHMgcG91ciBxdWUgw6dhIHNvaXQgY2xlYW4gKGp1c3RlIGF1IGRlc3N1cyBsw6ApKSlcclxuXHRcdC8vIC0gRmlsdHJlciBsZSBqc29uIGRhdGEgcG91ciBuZSBwcmVuZHJlIHF1ZSBsZXMgcGhyYXNlcyBxdWkgcmVzcGVjdGVudCBsZXMgb3B0aW9ucyAodGjDqG1lcy4uLilcclxuXHRcdC8vIC0gRmFpcmUgbGUgdGFibGVhdSBkZSBwaHJhc2VzICh1bmUgY2VydGFpbmUgbG9uZ3VldXIgZW4gZm9uY3Rpb24gZGUgbGEgbG9uZ3VldXIgZW4gb3B0aW9uKVxyXG5cdFx0Ly8gLSBSZW1wbGFjZXIgbGVzIG5vbXMgZGFucyBsZXMgcGhyYXNlcyAodGlyZXIgbGVzIG5vbXMgYXUgaGFzYXJkIHRvdXQgw6dhIHRvdXQgw6dhKVxyXG5cdFx0Ly8gLSBNZXR0cmUgbGVzIHZpcnVzIHF1ZWxxdWUgcGFydFxyXG5cdFx0Ly8gLSBNZXR0cmUgbGEgY29uc8OpcXVlbmNlIGp1c3RlIGFwcsOocyBwb3VyIGxlcyBjaG9peFxyXG5cdFx0Ly9cclxuXHRcdC8vIC0gUG91ciBsZXMgY2hvaXgsIGNlIHNlcmEgZGFucyBsZSBqZXUgZGUgcmVtcGxhY2VyIGxlIG5vbSBkZXMgZMOpdGFpbHMgZG9uYyBwYXMgZGFucyBjZXR0ZSBmb25jdGlvblxyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQgdGl0bGU9XCJTZWxlY3Rpb25uZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7c3R5bGVzLm1haW59YH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0e3RpdGxlIHx8IFwiXCJ9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHR7dGV4dCB8fCBcIkNoYXJnZW1lbnQuLi5cIn1cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBpZD1cInByb2dyZXNzLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInByb2dyZXNzLWJhclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtdmFsdWVcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXk7Il0sInNvdXJjZVJvb3QiOiIifQ==