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
 * @param  {int} min la valeur minimum que peut atteindre l'entier
 * @param  {int} max la valeur maximum que peut atteindre l'entier
 * @return {int}     L'entier tiré au hasard
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
  console.groupCollapsed("%cPhrases (".concat(sentences.length, ")"), "".concat(cssSquare, " color: black; background-color: white;"));
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
  console.log("%cIl y a " + sentences.filter(function (x) {
    return x.type == "virus";
  }).length + " virus !", "".concat(cssSquare, " color: white; background-color: red;"));
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
 * @returns {number} nombre de phrases
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
 * @param {Object[]} sentences tableau des phrases retenues
 */


var putVirus = function putVirus(sentences) {
  sentences.forEach(function (sentence) {
    if (sentence.type == "virus") {
      var indexRandVirus = getRandomInt(3, 6);
      var sentenceVirus = {
        "text": sentence.details,
        "type": "virusEnd"
      };
      sentences.splice(i + indexRandVirus, 0, sentenceVirus);
    }
  });
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

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var sentences = filterSentences(_data_sentences_json__WEBPACK_IMPORTED_MODULE_4__, options, players);
    sentences = selectSentences(sentences, options, players);
    sentences = initSentences(sentences, options, players);
    consoleInformation(sentences, players);
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
        lineNumber: 252,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: text || "Chargement..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 250,
    columnNumber: 3
  }, this);
}

_s(Play, "IZ/kSaTprsWXNTkHvJn2HbLG5dw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS5qcyJdLCJuYW1lcyI6WyJyZWdleFRvRmluZCIsInN0cmluZ1RvRmluZCIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlSW5mb3JtYXRpb24iLCJzZW50ZW5jZXMiLCJwbGF5ZXJzIiwiY3NzU3F1YXJlIiwiY3NzU21hbGwiLCJjb25zb2xlIiwiZ3JvdXBDb2xsYXBzZWQiLCJsZW5ndGgiLCJmb3JFYWNoIiwicGxheWVyIiwibG9nIiwiZ2VuZGVyIiwibmFtZSIsImdyb3VwRW5kIiwic2VudGVuY2UiLCJjc3NUaGVtZSIsInRoZW1lIiwic2VudGVuY2VUeXBlIiwic3BhY2VUeXBlIiwidHlwZSIsInRleHQiLCJ0YWJsZSIsImZpbHRlciIsIngiLCJmaWx0ZXJTZW50ZW5jZXMiLCJvcHRpb25zIiwibmJGZW1hbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJuYkdlbmRlciIsImdldE5iRWx0IiwicmVnZXgiLCJtYXRjaCIsImVsdCIsIm5iRWx0RmluZGVkIiwibmV1dHJhbCIsIm5iRWx0TWFsZUZpbmRlZCIsIm1hbGUiLCJuYkVsdEZlbWFsZUZpbmRlZCIsImZlbWFsZSIsImVub3VnaEVsdEhvbW1lIiwiZW5vdWdoRWx0RmVtbWUiLCJlbm91Z2hQbGF5ZXIiLCJ0aGVtZXMiLCJpbmNsdWRlcyIsImdldExlbmd0aFNlbnRlbmNlcyIsImR1cmF0aW9uIiwic2VsZWN0U2VudGVuY2VzIiwic2VudGVuY2VzU2VsZWN0ZWQiLCJsZW5ndGhTZW50ZW5jZXMiLCJuYlNlbnRlbmNlc1BpY2tlZCIsIm5iVmlydXNQaWNrZWQiLCJpZFNlbnRlbmNlc1BpY2tlZCIsInRvdGFsIiwibmJSYW5kb21TZW50ZW5jZSIsInB1c2giLCJzZW50ZW5jZVBpY2tlZCIsInZpcnVzIiwiaW5pdFNlbnRlbmNlcyIsIm1hcCIsInBsYXllcnNOb3RQaWNrZWQiLCJzbGljZSIsImluaXRQbGF5ZXJzIiwic3RyaW5nTWF0Y2giLCJpbmRleE9mIiwicGxheWVyVG9QaWNrIiwicGxheWVyUGlja2VkIiwic3BsaWNlIiwicmVwbGFjZSIsImRldGFpbHMiLCJwdXRWaXJ1cyIsImluZGV4UmFuZFZpcnVzIiwic2VudGVuY2VWaXJ1cyIsImkiLCJQbGF5IiwibG9jYWxPcHRpb25zIiwibG9jYWxQbGF5ZXJzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZVN0YXRlIiwic2V0VGV4dCIsInRpdGxlIiwic2V0VGl0bGUiLCJ1c2VFZmZlY3QiLCJkYXRhIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxXQUFXLEdBQUc7QUFDakIsYUFBVyxVQURNO0FBRWpCLFVBQVEsV0FGUztBQUdqQixZQUFVO0FBSE8sQ0FBbEI7QUFLQSxJQUFJQyxZQUFZLEdBQUc7QUFDbEIsYUFBVyxPQURPO0FBRWxCLFVBQVEsUUFGVTtBQUdsQixZQUFVO0FBSFEsQ0FBbkI7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0MsU0FBU0MsWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzdCRCxLQUFHLEdBQUdFLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxHQUFWLENBQU47QUFDQUMsS0FBRyxHQUFHQyxJQUFJLENBQUNFLEtBQUwsQ0FBV0gsR0FBWCxDQUFOO0FBQ0EsU0FBT0MsSUFBSSxDQUFDRSxLQUFMLENBQVdGLElBQUksQ0FBQ0csTUFBTCxNQUFpQkosR0FBRyxHQUFHRCxHQUFOLEdBQVksQ0FBN0IsQ0FBWCxJQUE4Q0EsR0FBckQ7QUFDSDs7QUFFRCxJQUFNTSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFNBQUQsRUFBWUMsT0FBWixFQUF3QjtBQUNsRCxNQUFJQyxTQUFTLEdBQUcsMERBQWhCO0FBQ0EsTUFBSUMsUUFB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QUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBWUE7O0dBM0NRdUQsSTs7S0FBQUEsSTtBQTZDVCwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wbGF5LjA3M2E1YTY2NDQ4NmRkNTcyMjRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1BsYXkubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhL3NlbnRlbmNlcy5qc29uJztcclxuXHJcbmxldCByZWdleFRvRmluZCA9IHtcclxuXHRcIm5ldXRyYWxcIjogL1xcW25vbVxcXS9nLFxyXG5cdFwibWFsZVwiOiAvXFxbbm9tTVxcXS9nLFxyXG5cdFwiZmVtYWxlXCI6IC9cXFtub21GXFxdL2csXHJcbn07XHJcbmxldCBzdHJpbmdUb0ZpbmQgPSB7XHJcblx0XCJuZXV0cmFsXCI6IFwiW25vbV1cIixcclxuXHRcIm1hbGVcIjogXCJbbm9tTV1cIixcclxuXHRcImZlbWFsZVwiOiBcIltub21GXVwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbnZvaWUgdW4gZW50aWVyIGFsw6lhdG9pcmUgZW50cmUgbWluIGV0IG1heCBbbWluLCBtYXhdXHJcbiAqIEBwYXJhbSAge2ludH0gbWluIGxhIHZhbGV1ciBtaW5pbXVtIHF1ZSBwZXV0IGF0dGVpbmRyZSBsJ2VudGllclxyXG4gKiBAcGFyYW0gIHtpbnR9IG1heCBsYSB2YWxldXIgbWF4aW11bSBxdWUgcGV1dCBhdHRlaW5kcmUgbCdlbnRpZXJcclxuICogQHJldHVybiB7aW50fSAgICAgTCdlbnRpZXIgdGlyw6kgYXUgaGFzYXJkXHJcbiAqL1xyXG4gZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcclxuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcblxyXG5jb25zdCBjb25zb2xlSW5mb3JtYXRpb24gPSAoc2VudGVuY2VzLCBwbGF5ZXJzKSA9PiB7XHJcblx0bGV0IGNzc1NxdWFyZSA9IFwicGFkZGluZzogM3B4IDVweDsgYm9yZGVyLXJhZGl1czogNXB4OyBmb250LXdlaWdodDogYm9sZDtcIjtcclxuXHRsZXQgY3NzU21hbGwgPSBcImZvbnQtc2l6ZTogMTBweDtcIjtcclxuXHRjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGAlY0pvdWV1cnMgKCR7cGxheWVycy5sZW5ndGh9KWAsIGAke2Nzc1NxdWFyZX0gY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtgKTtcclxuXHRwbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGAlYyR7cGxheWVyLmdlbmRlcn0lYyAke3BsYXllci5uYW1lfWAsXHJcblx0XHRgJHtjc3NTcXVhcmV9IGNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7YCxcclxuXHRcdFwiXCIpO1xyXG5cdH0pO1xyXG5cdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHRjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGAlY1BocmFzZXMgKCR7c2VudGVuY2VzLmxlbmd0aH0pYCwgYCR7Y3NzU3F1YXJlfSBjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2ApO1xyXG5cdHNlbnRlbmNlcy5mb3JFYWNoKHNlbnRlbmNlID0+IHtcclxuXHRcdGxldCBjc3NUaGVtZSA9IFwiXCI7XHJcblx0XHRzd2l0Y2ggKHNlbnRlbmNlLnRoZW1lKSB7XHJcblx0XHRcdGNhc2UgXCJzcG9ydFwiOlxyXG5cdFx0XHRcdGNzc1RoZW1lID0gXCJjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IGJsdWU7XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJob3RcIjpcclxuXHRcdFx0XHRjc3NUaGVtZSA9IFwiY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNmJmO1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGNzc1RoZW1lID0gXCJjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0bGV0IHNlbnRlbmNlVHlwZSA9IFwiXCI7XHJcblx0XHRsZXQgc3BhY2VUeXBlID0gXCJcIjtcclxuXHRcdGlmIChzZW50ZW5jZS50eXBlICE9IFwibm9ybWFsXCIpIHtcclxuXHRcdFx0c2VudGVuY2VUeXBlID0gc2VudGVuY2UudHlwZTtcclxuXHRcdFx0c3BhY2VUeXBlID0gXCIgXCI7XHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGAlYyR7c2VudGVuY2VUeXBlfSVjJHtzcGFjZVR5cGV9JWMke3NlbnRlbmNlLnRoZW1lfSVjICR7c2VudGVuY2UudGV4dH1gLFxyXG5cdFx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IHJlZDsgJHtjc3NTbWFsbH1gLFxyXG5cdFx0YCR7Y3NzU21hbGx9YCxcclxuXHRcdGAke2Nzc1NxdWFyZX0gJHtjc3NUaGVtZX0gJHtjc3NTbWFsbH1gLFxyXG5cdFx0YCR7Y3NzU21hbGx9YCk7XHJcblx0XHRjb25zb2xlLnRhYmxlKHNlbnRlbmNlKTtcclxuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHR9KTtcclxuXHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0Y29uc29sZS5sb2coXCIlY0lsIHkgYSBcIiArIHNlbnRlbmNlcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gXCJ2aXJ1c1wiKS5sZW5ndGggKyBcIiB2aXJ1cyAhXCIsXHJcblx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IHJlZDtgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzZW50ZW5jZXNcclxuICogQHBhcmFtIHtPYmplY3RbXX0gb3B0aW9ucyBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gcGxheWVycyBcclxuICogQHJldHVybnMge09iamVjdFtdfSBcclxuICovXHJcbmNvbnN0IGZpbHRlclNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgbmJGZW1hbGUgPSBwbGF5ZXJzLnJlZHVjZSgoYWNjLCBjdXIpID0+IGN1ci5nZW5kZXIgPT09IFwiRlwiID8gKythY2MgOiBhY2MsIDApO1xyXG5cdGxldCBuYkdlbmRlciA9IHtcclxuXHRcdFwiZmVtYWxlXCI6IG5iRmVtYWxlLFxyXG5cdFx0XCJtYWxlXCI6IHBsYXllcnMubGVuZ3RoIC0gbmJGZW1hbGVcclxuXHR9O1xyXG5cclxuXHQvL05vbWJyZSBkJ8OpbMOpbWVudCByZWdleCB0cm91dsOpIGRhbnMgbGEgcGhyYXNlXHJcblx0Y29uc3QgZ2V0TmJFbHQgPSAocmVnZXgsIHRleHQpID0+IHtcclxuXHRcdHJldHVybiAodGV4dC5tYXRjaChyZWdleCkgfHwgW10pLmxlbmd0aDtcclxuXHR9O1xyXG5cdFxyXG5cdHJldHVybiBzZW50ZW5jZXMuZmlsdGVyKChlbHQpID0+IHtcclxuXHRcdGxldCBuYkVsdEZpbmRlZCA9IGdldE5iRWx0KHJlZ2V4VG9GaW5kLm5ldXRyYWwsIGVsdC50ZXh0KTtcclxuXHRcdGxldCBuYkVsdE1hbGVGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5tYWxlLCBlbHQudGV4dCk7XHJcblx0XHRsZXQgbmJFbHRGZW1hbGVGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5mZW1hbGUsIGVsdC50ZXh0KTtcclxuXHRcdFxyXG5cdFx0Ly9PbiB2w6lyaWZpZSBzJ2lsIHkgYSBiaWVuLCBhdXRhbnQgb3UgcGx1cyBkZSBqb3VldXIgcXVlIGxhIHBocmFzZXMgZW4gbsOpY2Vzc2l0ZSAoZW4gZm9uY3Rpb24gZHUgc2V4ZSlcclxuXHRcdGxldCBlbm91Z2hFbHRIb21tZSA9IG5iR2VuZGVyLm1hbGUgPj0gbmJFbHRNYWxlRmluZGVkO1xyXG5cdFx0bGV0IGVub3VnaEVsdEZlbW1lID0gbmJHZW5kZXIuZmVtYWxlID49IG5iRWx0RmVtYWxlRmluZGVkO1xyXG5cdFx0bGV0IGVub3VnaFBsYXllciA9IHBsYXllcnMubGVuZ3RoID49IChuYkVsdEZpbmRlZCArIG5iRWx0TWFsZUZpbmRlZCArIG5iRWx0RmVtYWxlRmluZGVkKTtcclxuXHJcblx0XHRyZXR1cm4gb3B0aW9ucy50aGVtZXMuaW5jbHVkZXMoZWx0LnRoZW1lKSAmJiBlbm91Z2hFbHRIb21tZSAmJiBlbm91Z2hFbHRGZW1tZSAmJiBlbm91Z2hQbGF5ZXI7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW52b2llIGxlIG5vbWJyZSBkZSBwaHJhc2VzIMOgIGFmZmljaGVyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBcclxuICogQHJldHVybnMge251bWJlcn0gbm9tYnJlIGRlIHBocmFzZXNcclxuICovXHJcbmNvbnN0IGdldExlbmd0aFNlbnRlbmNlcyA9IChkdXJhdGlvbikgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRcInRvdGFsXCI6IDIwICsgMTUqZHVyYXRpb24sXHJcblx0XHRcInZpcnVzXCI6IDIgKyAyKmR1cmF0aW9uXHJcblx0fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzZW50ZW5jZXMgXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IG9wdGlvbnMgXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IHBsYXllcnMgXHJcbiAqIEByZXR1cm5zIHtPYmplY3RbXX1cclxuICovXHJcbmNvbnN0IHNlbGVjdFNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRsZXQgc2VudGVuY2VzU2VsZWN0ZWQgPSBbXTtcclxuXHRsZXQgbGVuZ3RoU2VudGVuY2VzID0gZ2V0TGVuZ3RoU2VudGVuY2VzKG9wdGlvbnMuZHVyYXRpb24pO1xyXG5cdFxyXG5cdGxldCBuYlNlbnRlbmNlc1BpY2tlZCA9IDA7XHJcbiAgICBsZXQgbmJWaXJ1c1BpY2tlZCA9IDA7XHJcblx0bGV0IGlkU2VudGVuY2VzUGlja2VkID0gW107XHJcblxyXG5cdHdoaWxlIChuYlNlbnRlbmNlc1BpY2tlZCA8IGxlbmd0aFNlbnRlbmNlcy50b3RhbCAmJiBpZFNlbnRlbmNlc1BpY2tlZC5sZW5ndGggPCBzZW50ZW5jZXMubGVuZ3RoKSB7XHJcblx0XHQvL09uIGNob2lzaXQgdW4gbnVtw6lybyBhdSBoYXNhcmRcclxuXHRcdGxldCBuYlJhbmRvbVNlbnRlbmNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnNlbnRlbmNlcy5sZW5ndGgpO1xyXG5cdFx0aWYgKCFpZFNlbnRlbmNlc1BpY2tlZC5pbmNsdWRlcyhuYlJhbmRvbVNlbnRlbmNlKSkge1xyXG5cdFx0XHRpZFNlbnRlbmNlc1BpY2tlZC5wdXNoKG5iUmFuZG9tU2VudGVuY2UpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHNlbnRlbmNlUGlja2VkID0gc2VudGVuY2VzW25iUmFuZG9tU2VudGVuY2VdO1xyXG5cclxuXHRcdFx0aWYgKHNlbnRlbmNlUGlja2VkLnR5cGUgPT0gXCJ2aXJ1c1wiKSB7XHJcblx0XHRcdFx0aWYgKG5iVmlydXNQaWNrZWQgPCBsZW5ndGhTZW50ZW5jZXMudmlydXMpIHtcclxuXHRcdFx0XHRcdHNlbnRlbmNlc1NlbGVjdGVkLnB1c2goc2VudGVuY2VQaWNrZWQpO1xyXG5cdFx0XHRcdFx0bmJTZW50ZW5jZXNQaWNrZWQrKztcclxuXHRcdFx0XHRcdG5iVmlydXNQaWNrZWQrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0c2VudGVuY2VzU2VsZWN0ZWQucHVzaChzZW50ZW5jZVBpY2tlZCk7XHJcblx0XHRcdFx0bmJTZW50ZW5jZXNQaWNrZWQrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNlbnRlbmNlc1NlbGVjdGVkO1xyXG59XHJcblxyXG5jb25zdCBpbml0U2VudGVuY2VzID0gKHNlbnRlbmNlcywgb3B0aW9ucywgcGxheWVycykgPT4ge1xyXG5cdHJldHVybiBzZW50ZW5jZXMubWFwKChzZW50ZW5jZSkgPT4ge1xyXG5cdFx0Ly9GYWl0IHVuZSBjb3BpZSBkZXMgam91ZXVyc1xyXG5cdFx0bGV0IHBsYXllcnNOb3RQaWNrZWQgPSBwbGF5ZXJzLnNsaWNlKCk7XHJcblxyXG5cdFx0Y29uc3QgaW5pdFBsYXllcnMgPSAoc3RyaW5nTWF0Y2gpID0+IHtcclxuXHRcdFx0d2hpbGUgKHNlbnRlbmNlLnRleHQuaW5kZXhPZihzdHJpbmdNYXRjaCkgPiAtMSkge1xyXG5cdFx0XHRcdC8vQ2hvaXNpdCBwYXJtaXMgcXVlbCB0eXBlIGRlIGpvdWV1ciBvbiBwZXV0IHRpcmVyXHJcblx0XHRcdFx0bGV0IHBsYXllclRvUGljaztcclxuXHRcdFx0XHRzd2l0Y2ggKHN0cmluZ01hdGNoKSB7XHJcblx0XHRcdFx0XHRjYXNlIHN0cmluZ1RvRmluZC5mZW1hbGU6XHJcblx0XHRcdFx0XHRcdHBsYXllclRvUGljayA9IHBsYXllcnNOb3RQaWNrZWQuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIuZ2VuZGVyID09IFwiRlwiKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIHN0cmluZ1RvRmluZC5tYWxlOlxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJUb1BpY2sgPSBwbGF5ZXJzTm90UGlja2VkLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLmdlbmRlciA9PSBcIk1cIik7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0cGxheWVyVG9QaWNrID0gcGxheWVyc05vdFBpY2tlZDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vQ2hvaXNpdCB1biBqb3VldXIgYXUgaGFzYXJkXHJcblx0XHRcdFx0bGV0IHBsYXllclBpY2tlZCA9IHBsYXllclRvUGlja1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcGxheWVyVG9QaWNrLmxlbmd0aCldO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vUmV0aXJlIGNlIGpvdWV1ciBkZSBsYSBsaXN0ZSBkZXMgam91ZXVycyBub24gcHJpc1xyXG5cdFx0XHRcdHBsYXllcnNOb3RQaWNrZWQuc3BsaWNlKHBsYXllcnNOb3RQaWNrZWQuaW5kZXhPZihwbGF5ZXJQaWNrZWQpLCAxKTtcclxuXHJcblx0XHRcdFx0Ly9SZW1wbGFjZSBsJ8OpbMOpbWVudCBwYXIgbGUgbm9tIGR1IGpvdWV1clxyXG5cdFx0XHRcdHNlbnRlbmNlLnRleHQgPSBzZW50ZW5jZS50ZXh0LnJlcGxhY2Uoc3RyaW5nTWF0Y2gsIHBsYXllclBpY2tlZC5uYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1NpIGxhIHBocmFzZSBlc3QgdW4gdmlydXMgZXQgcXUnb24gdHJvdXZlIHVuIMOpbMOpbWVudCBkYW5zIGxlcyBkZXRhaWxzXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VudGVuY2UudHlwZSA9PSBcInZpcnVzXCIgJiYgc2VudGVuY2UuZGV0YWlscy5pbmRleE9mKHN0cmluZ01hdGNoKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGFjZSBsZSBlbHRUb0ZpbmQgcGFyIGxlIG5vbSBkdSBqb3VldXIgKGxlIG3Dqm1lIHF1ZSBsZSB0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbnRlbmNlLmRldGFpbHMgPSBzZW50ZW5jZS5kZXRhaWxzLnJlcGxhY2Uoc3RyaW5nTWF0Y2gsIHBsYXllclBpY2tlZC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpbml0UGxheWVycyhzdHJpbmdUb0ZpbmQubmV1dHJhbCk7XHJcblx0XHRpbml0UGxheWVycyhzdHJpbmdUb0ZpbmQubWFsZSk7XHJcblx0XHRpbml0UGxheWVycyhzdHJpbmdUb0ZpbmQuZmVtYWxlKTtcclxuXHJcblx0XHRyZXR1cm4gc2VudGVuY2U7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQbGFjZSBsZXMgdmlydXMgZW4gdGFudCBxdWUgcGhyYXNlXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IHNlbnRlbmNlcyB0YWJsZWF1IGRlcyBwaHJhc2VzIHJldGVudWVzXHJcbiAqL1xyXG4gY29uc3QgcHV0VmlydXMgPSAoc2VudGVuY2VzKSA9PiB7XHJcbiAgICBzZW50ZW5jZXMuZm9yRWFjaCgoc2VudGVuY2UpID0+IHtcclxuICAgICAgICBpZiAoc2VudGVuY2UudHlwZSA9PSBcInZpcnVzXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXhSYW5kVmlydXMgPSBnZXRSYW5kb21JbnQoMywgNik7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbnRlbmNlVmlydXMgPSB7XCJ0ZXh0XCI6IHNlbnRlbmNlLmRldGFpbHMsIFwidHlwZVwiOiBcInZpcnVzRW5kXCJ9O1xyXG4gICAgICAgICAgICBzZW50ZW5jZXMuc3BsaWNlKGkraW5kZXhSYW5kVmlydXMsIDAsIHNlbnRlbmNlVmlydXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gUGxheSgpIHtcclxuXHRsZXQgbG9jYWxPcHRpb25zID0gbnVsbDtcclxuXHRsZXQgbG9jYWxQbGF5ZXJzID0gbnVsbDtcclxuXHRpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcblx0XHRsb2NhbE9wdGlvbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3B0aW9uc1wiKSk7XHJcblx0XHRsb2NhbFBsYXllcnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyc1wiKSk7XHJcblx0fVxyXG5cdGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3BsYXllcnNdID0gdXNlU3RhdGUobG9jYWxQbGF5ZXJzKTtcclxuXHRjb25zdCBbb3B0aW9uc10gPSB1c2VTdGF0ZShsb2NhbE9wdGlvbnMpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGV0IHNlbnRlbmNlcyA9IGZpbHRlclNlbnRlbmNlcyhkYXRhLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IHNlbGVjdFNlbnRlbmNlcyhzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpO1xyXG5cdFx0c2VudGVuY2VzID0gaW5pdFNlbnRlbmNlcyhzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpO1xyXG5cdFx0Y29uc29sZUluZm9ybWF0aW9uKHNlbnRlbmNlcywgcGxheWVycyk7XHJcbiAgICAgICAgLypsZXQgblJhbmRvbVNlbnRlbmNlcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCk7XHJcblx0XHRzZXRUZXh0KGRhdGFbblJhbmRvbVNlbnRlbmNlc10udGV4dCk7Ki9cclxuXHJcblx0XHQvLyBUT0RPIDogKGlkw6llIGVuIHRzID0+IEZhaXJlIHJlZHVjZXIgZXQgaW50ZXJmYWNlIHBvdXIgbGVzIHBocmFzZXMgZHUganNvbiA6IGh0dHBzOi8veW91dHUuYmUvWjVpV3I2U3Jzajg/dD05MTgpXHJcblx0XHQvLyAoRmFpcmUgZGVzIGZvbmN0aW9ucyAoZW4gZGVob3JzIGR1IGNvbXBvc2FudHMgcG91ciBxdWUgw6dhIHNvaXQgY2xlYW4gKGp1c3RlIGF1IGRlc3N1cyBsw6ApKSlcclxuXHRcdC8vIC0gRmlsdHJlciBsZSBqc29uIGRhdGEgcG91ciBuZSBwcmVuZHJlIHF1ZSBsZXMgcGhyYXNlcyBxdWkgcmVzcGVjdGVudCBsZXMgb3B0aW9ucyAodGjDqG1lcy4uLilcclxuXHRcdC8vIC0gRmFpcmUgbGUgdGFibGVhdSBkZSBwaHJhc2VzICh1bmUgY2VydGFpbmUgbG9uZ3VldXIgZW4gZm9uY3Rpb24gZGUgbGEgbG9uZ3VldXIgZW4gb3B0aW9uKVxyXG5cdFx0Ly8gLSBSZW1wbGFjZXIgbGVzIG5vbXMgZGFucyBsZXMgcGhyYXNlcyAodGlyZXIgbGVzIG5vbXMgYXUgaGFzYXJkIHRvdXQgw6dhIHRvdXQgw6dhKVxyXG5cdFx0Ly8gLSBNZXR0cmUgbGVzIHZpcnVzIHF1ZWxxdWUgcGFydFxyXG5cdFx0Ly8gLSBNZXR0cmUgbGEgY29uc8OpcXVlbmNlIGp1c3RlIGFwcsOocyBwb3VyIGxlcyBjaG9peFxyXG5cdFx0Ly9cclxuXHRcdC8vIC0gUG91ciBsZXMgY2hvaXgsIGNlIHNlcmEgZGFucyBsZSBqZXUgZGUgcmVtcGxhY2VyIGxlIG5vbSBkZXMgZMOpdGFpbHMgZG9uYyBwYXMgZGFucyBjZXR0ZSBmb25jdGlvblxyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQgdGl0bGU9XCJTZWxlY3Rpb25uZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7c3R5bGVzLm1haW59YH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0e3RpdGxlIHx8IFwiXCJ9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHR7dGV4dCB8fCBcIkNoYXJnZW1lbnQuLi5cIn1cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheTsiXSwic291cmNlUm9vdCI6IiJ9