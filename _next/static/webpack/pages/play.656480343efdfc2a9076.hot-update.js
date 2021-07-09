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
  sentences.map(function (sentence) {
    if (sentence.type == "virus") {
      var indexRandVirus = getRandomInt(3, 6);
      var sentenceVirus = {
        "text": sentence.details,
        "type": "virusEnd"
      };
      sentences.splice(i + indexRandVirus, 0, sentenceVirus);
    }

    return sentence;
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
        lineNumber: 253,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: text || "Chargement..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 251,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS5qcyJdLCJuYW1lcyI6WyJyZWdleFRvRmluZCIsInN0cmluZ1RvRmluZCIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlSW5mb3JtYXRpb24iLCJzZW50ZW5jZXMiLCJwbGF5ZXJzIiwiY3NzU3F1YXJlIiwiY3NzU21hbGwiLCJjb25zb2xlIiwiZ3JvdXBDb2xsYXBzZWQiLCJsZW5ndGgiLCJmb3JFYWNoIiwicGxheWVyIiwibG9nIiwiZ2VuZGVyIiwibmFtZSIsImdyb3VwRW5kIiwic2VudGVuY2UiLCJjc3NUaGVtZSIsInRoZW1lIiwic2VudGVuY2VUeXBlIiwic3BhY2VUeXBlIiwidHlwZSIsInRleHQiLCJ0YWJsZSIsImZpbHRlciIsIngiLCJmaWx0ZXJTZW50ZW5jZXMiLCJvcHRpb25zIiwibmJGZW1hbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJuYkdlbmRlciIsImdldE5iRWx0IiwicmVnZXgiLCJtYXRjaCIsImVsdCIsIm5iRWx0RmluZGVkIiwibmV1dHJhbCIsIm5iRWx0TWFsZUZpbmRlZCIsIm1hbGUiLCJuYkVsdEZlbWFsZUZpbmRlZCIsImZlbWFsZSIsImVub3VnaEVsdEhvbW1lIiwiZW5vdWdoRWx0RmVtbWUiLCJlbm91Z2hQbGF5ZXIiLCJ0aGVtZXMiLCJpbmNsdWRlcyIsImdldExlbmd0aFNlbnRlbmNlcyIsImR1cmF0aW9uIiwic2VsZWN0U2VudGVuY2VzIiwic2VudGVuY2VzU2VsZWN0ZWQiLCJsZW5ndGhTZW50ZW5jZXMiLCJuYlNlbnRlbmNlc1BpY2tlZCIsIm5iVmlydXNQaWNrZWQiLCJpZFNlbnRlbmNlc1BpY2tlZCIsInRvdGFsIiwibmJSYW5kb21TZW50ZW5jZSIsInB1c2giLCJzZW50ZW5jZVBpY2tlZCIsInZpcnVzIiwiaW5pdFNlbnRlbmNlcyIsIm1hcCIsInBsYXllcnNOb3RQaWNrZWQiLCJzbGljZSIsImluaXRQbGF5ZXJzIiwic3RyaW5nTWF0Y2giLCJpbmRleE9mIiwicGxheWVyVG9QaWNrIiwicGxheWVyUGlja2VkIiwic3BsaWNlIiwicmVwbGFjZSIsImRldGFpbHMiLCJwdXRWaXJ1cyIsImluZGV4UmFuZFZpcnVzIiwic2VudGVuY2VWaXJ1cyIsImkiLCJQbGF5IiwibG9jYWxPcHRpb25zIiwibG9jYWxQbGF5ZXJzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZVN0YXRlIiwic2V0VGV4dCIsInRpdGxlIiwic2V0VGl0bGUiLCJ1c2VFZmZlY3QiLCJkYXRhIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxXQUFXLEdBQUc7QUFDakIsYUFBVyxVQURNO0FBRWpCLFVBQVEsV0FGUztBQUdqQixZQUFVO0FBSE8sQ0FBbEI7QUFLQSxJQUFJQyxZQUFZLEdBQUc7QUFDbEIsYUFBVyxPQURPO0FBRWxCLFVBQVEsUUFGVTtBQUdsQixZQUFVO0FBSFEsQ0FBbkI7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0MsU0FBU0MsWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzdCRCxLQUFHLEdBQUdFLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxHQUFWLENBQU47QUFDQUMsS0FBRyxHQUFHQyxJQUFJLENBQUNFLEtBQUwsQ0FBV0gsR0FBWCxDQUFOO0FBQ0EsU0FBT0MsSUFBSSxDQUFDRSxLQUFMLENBQVdGLElBQUksQ0FBQ0csTUFBTCxNQUFpQkosR0FBRyxHQUFHRCxHQUFOLEdBQVksQ0FBN0IsQ0FBWCxJQUE4Q0EsR0FBckQ7QUFDSDs7QUFFRCxJQUFNTSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFNBQUQsRUFBWUMsT0FBWixFQUF3QjtBQUNsRCxNQUFJQyxTQUFTLEdBQUcsMERBQWhCO0FBQ0EsTUFBSUMsUUFB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QUEsY0FKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFZQTs7R0EzQ1F1RCxJOztLQUFBQSxJO0FBNkNULCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BsYXkuNjU2NDgwMzQzZWZkZmMyYTkwNzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUGxheS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvc2VudGVuY2VzLmpzb24nO1xyXG5cclxubGV0IHJlZ2V4VG9GaW5kID0ge1xyXG5cdFwibmV1dHJhbFwiOiAvXFxbbm9tXFxdL2csXHJcblx0XCJtYWxlXCI6IC9cXFtub21NXFxdL2csXHJcblx0XCJmZW1hbGVcIjogL1xcW25vbUZcXF0vZyxcclxufTtcclxubGV0IHN0cmluZ1RvRmluZCA9IHtcclxuXHRcIm5ldXRyYWxcIjogXCJbbm9tXVwiLFxyXG5cdFwibWFsZVwiOiBcIltub21NXVwiLFxyXG5cdFwiZmVtYWxlXCI6IFwiW25vbUZdXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogUmVudm9pZSB1biBlbnRpZXIgYWzDqWF0b2lyZSBlbnRyZSBtaW4gZXQgbWF4IFttaW4sIG1heF1cclxuICogQHBhcmFtICB7bnVtYmVyfSBtaW4gbGEgdmFsZXVyIG1pbmltdW0gcXVlIHBldXQgYXR0ZWluZHJlIGwnZW50aWVyXHJcbiAqIEBwYXJhbSAge251bWJlcn0gbWF4IGxhIHZhbGV1ciBtYXhpbXVtIHF1ZSBwZXV0IGF0dGVpbmRyZSBsJ2VudGllclxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEwnZW50aWVyIHRpcsOpIGF1IGhhc2FyZFxyXG4gKi9cclxuIGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxyXG5cclxuY29uc3QgY29uc29sZUluZm9ybWF0aW9uID0gKHNlbnRlbmNlcywgcGxheWVycykgPT4ge1xyXG5cdGxldCBjc3NTcXVhcmUgPSBcInBhZGRpbmc6IDNweCA1cHg7IGJvcmRlci1yYWRpdXM6IDVweDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI7XHJcblx0bGV0IGNzc1NtYWxsID0gXCJmb250LXNpemU6IDEwcHg7XCI7XHJcblx0Y29uc29sZS5ncm91cENvbGxhcHNlZChgJWNKb3VldXJzICgke3BsYXllcnMubGVuZ3RofSlgLCBgJHtjc3NTcXVhcmV9IGNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7YCk7XHJcblx0cGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhgJWMke3BsYXllci5nZW5kZXJ9JWMgJHtwbGF5ZXIubmFtZX1gLFxyXG5cdFx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2AsXHJcblx0XHRcIlwiKTtcclxuXHR9KTtcclxuXHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0Y29uc29sZS5ncm91cENvbGxhcHNlZChgJWNQaHJhc2VzICgke3NlbnRlbmNlcy5sZW5ndGh9KWAsIGAke2Nzc1NxdWFyZX0gY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtgKTtcclxuXHRzZW50ZW5jZXMuZm9yRWFjaChzZW50ZW5jZSA9PiB7XHJcblx0XHRsZXQgY3NzVGhlbWUgPSBcIlwiO1xyXG5cdFx0c3dpdGNoIChzZW50ZW5jZS50aGVtZSkge1xyXG5cdFx0XHRjYXNlIFwic3BvcnRcIjpcclxuXHRcdFx0XHRjc3NUaGVtZSA9IFwiY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiaG90XCI6XHJcblx0XHRcdFx0Y3NzVGhlbWUgPSBcImNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzZiZjtcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRjc3NUaGVtZSA9IFwiY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGxldCBzZW50ZW5jZVR5cGUgPSBcIlwiO1xyXG5cdFx0bGV0IHNwYWNlVHlwZSA9IFwiXCI7XHJcblx0XHRpZiAoc2VudGVuY2UudHlwZSAhPSBcIm5vcm1hbFwiKSB7XHJcblx0XHRcdHNlbnRlbmNlVHlwZSA9IHNlbnRlbmNlLnR5cGU7XHJcblx0XHRcdHNwYWNlVHlwZSA9IFwiIFwiO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5ncm91cENvbGxhcHNlZChgJWMke3NlbnRlbmNlVHlwZX0lYyR7c3BhY2VUeXBlfSVjJHtzZW50ZW5jZS50aGVtZX0lYyAke3NlbnRlbmNlLnRleHR9YCxcclxuXHRcdGAke2Nzc1NxdWFyZX0gY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICR7Y3NzU21hbGx9YCxcclxuXHRcdGAke2Nzc1NtYWxsfWAsXHJcblx0XHRgJHtjc3NTcXVhcmV9ICR7Y3NzVGhlbWV9ICR7Y3NzU21hbGx9YCxcclxuXHRcdGAke2Nzc1NtYWxsfWApO1xyXG5cdFx0Y29uc29sZS50YWJsZShzZW50ZW5jZSk7XHJcblx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0fSk7XHJcblx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdGNvbnNvbGUubG9nKFwiJWNJbCB5IGEgXCIgKyBzZW50ZW5jZXMuZmlsdGVyKHggPT4geC50eXBlID09IFwidmlydXNcIikubGVuZ3RoICsgXCIgdmlydXMgIVwiLFxyXG5cdGAke2Nzc1NxdWFyZX0gY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7YCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gc2VudGVuY2VzXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IG9wdGlvbnMgXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IHBsYXllcnMgXHJcbiAqIEByZXR1cm5zIHtPYmplY3RbXX0gXHJcbiAqL1xyXG5jb25zdCBmaWx0ZXJTZW50ZW5jZXMgPSAoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKSA9PiB7XHJcblx0bGV0IG5iRmVtYWxlID0gcGxheWVycy5yZWR1Y2UoKGFjYywgY3VyKSA9PiBjdXIuZ2VuZGVyID09PSBcIkZcIiA/ICsrYWNjIDogYWNjLCAwKTtcclxuXHRsZXQgbmJHZW5kZXIgPSB7XHJcblx0XHRcImZlbWFsZVwiOiBuYkZlbWFsZSxcclxuXHRcdFwibWFsZVwiOiBwbGF5ZXJzLmxlbmd0aCAtIG5iRmVtYWxlXHJcblx0fTtcclxuXHJcblx0Ly9Ob21icmUgZCfDqWzDqW1lbnQgcmVnZXggdHJvdXbDqSBkYW5zIGxhIHBocmFzZVxyXG5cdGNvbnN0IGdldE5iRWx0ID0gKHJlZ2V4LCB0ZXh0KSA9PiB7XHJcblx0XHRyZXR1cm4gKHRleHQubWF0Y2gocmVnZXgpIHx8IFtdKS5sZW5ndGg7XHJcblx0fTtcclxuXHRcclxuXHRyZXR1cm4gc2VudGVuY2VzLmZpbHRlcigoZWx0KSA9PiB7XHJcblx0XHRsZXQgbmJFbHRGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5uZXV0cmFsLCBlbHQudGV4dCk7XHJcblx0XHRsZXQgbmJFbHRNYWxlRmluZGVkID0gZ2V0TmJFbHQocmVnZXhUb0ZpbmQubWFsZSwgZWx0LnRleHQpO1xyXG5cdFx0bGV0IG5iRWx0RmVtYWxlRmluZGVkID0gZ2V0TmJFbHQocmVnZXhUb0ZpbmQuZmVtYWxlLCBlbHQudGV4dCk7XHJcblx0XHRcclxuXHRcdC8vT24gdsOpcmlmaWUgcydpbCB5IGEgYmllbiwgYXV0YW50IG91IHBsdXMgZGUgam91ZXVyIHF1ZSBsYSBwaHJhc2VzIGVuIG7DqWNlc3NpdGUgKGVuIGZvbmN0aW9uIGR1IHNleGUpXHJcblx0XHRsZXQgZW5vdWdoRWx0SG9tbWUgPSBuYkdlbmRlci5tYWxlID49IG5iRWx0TWFsZUZpbmRlZDtcclxuXHRcdGxldCBlbm91Z2hFbHRGZW1tZSA9IG5iR2VuZGVyLmZlbWFsZSA+PSBuYkVsdEZlbWFsZUZpbmRlZDtcclxuXHRcdGxldCBlbm91Z2hQbGF5ZXIgPSBwbGF5ZXJzLmxlbmd0aCA+PSAobmJFbHRGaW5kZWQgKyBuYkVsdE1hbGVGaW5kZWQgKyBuYkVsdEZlbWFsZUZpbmRlZCk7XHJcblxyXG5cdFx0cmV0dXJuIG9wdGlvbnMudGhlbWVzLmluY2x1ZGVzKGVsdC50aGVtZSkgJiYgZW5vdWdoRWx0SG9tbWUgJiYgZW5vdWdoRWx0RmVtbWUgJiYgZW5vdWdoUGxheWVyO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vKipcclxuICogUmVudm9pZSBsZSBub21icmUgZGUgcGhyYXNlcyDDoCBhZmZpY2hlclxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IE5vbWJyZSBkZSBwaHJhc2VzXHJcbiAqL1xyXG5jb25zdCBnZXRMZW5ndGhTZW50ZW5jZXMgPSAoZHVyYXRpb24pID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0XCJ0b3RhbFwiOiAyMCArIDE1KmR1cmF0aW9uLFxyXG5cdFx0XCJ2aXJ1c1wiOiAyICsgMipkdXJhdGlvblxyXG5cdH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtPYmplY3RbXX0gc2VudGVuY2VzIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBvcHRpb25zIFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBwbGF5ZXJzIFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0W119XHJcbiAqL1xyXG5jb25zdCBzZWxlY3RTZW50ZW5jZXMgPSAoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKSA9PiB7XHJcblx0bGV0IHNlbnRlbmNlc1NlbGVjdGVkID0gW107XHJcblx0bGV0IGxlbmd0aFNlbnRlbmNlcyA9IGdldExlbmd0aFNlbnRlbmNlcyhvcHRpb25zLmR1cmF0aW9uKTtcclxuXHRcclxuXHRsZXQgbmJTZW50ZW5jZXNQaWNrZWQgPSAwO1xyXG4gICAgbGV0IG5iVmlydXNQaWNrZWQgPSAwO1xyXG5cdGxldCBpZFNlbnRlbmNlc1BpY2tlZCA9IFtdO1xyXG5cclxuXHR3aGlsZSAobmJTZW50ZW5jZXNQaWNrZWQgPCBsZW5ndGhTZW50ZW5jZXMudG90YWwgJiYgaWRTZW50ZW5jZXNQaWNrZWQubGVuZ3RoIDwgc2VudGVuY2VzLmxlbmd0aCkge1xyXG5cdFx0Ly9PbiBjaG9pc2l0IHVuIG51bcOpcm8gYXUgaGFzYXJkXHJcblx0XHRsZXQgbmJSYW5kb21TZW50ZW5jZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpzZW50ZW5jZXMubGVuZ3RoKTtcclxuXHRcdGlmICghaWRTZW50ZW5jZXNQaWNrZWQuaW5jbHVkZXMobmJSYW5kb21TZW50ZW5jZSkpIHtcclxuXHRcdFx0aWRTZW50ZW5jZXNQaWNrZWQucHVzaChuYlJhbmRvbVNlbnRlbmNlKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBzZW50ZW5jZVBpY2tlZCA9IHNlbnRlbmNlc1tuYlJhbmRvbVNlbnRlbmNlXTtcclxuXHJcblx0XHRcdGlmIChzZW50ZW5jZVBpY2tlZC50eXBlID09IFwidmlydXNcIikge1xyXG5cdFx0XHRcdGlmIChuYlZpcnVzUGlja2VkIDwgbGVuZ3RoU2VudGVuY2VzLnZpcnVzKSB7XHJcblx0XHRcdFx0XHRzZW50ZW5jZXNTZWxlY3RlZC5wdXNoKHNlbnRlbmNlUGlja2VkKTtcclxuXHRcdFx0XHRcdG5iU2VudGVuY2VzUGlja2VkKys7XHJcblx0XHRcdFx0XHRuYlZpcnVzUGlja2VkKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHNlbnRlbmNlc1NlbGVjdGVkLnB1c2goc2VudGVuY2VQaWNrZWQpO1xyXG5cdFx0XHRcdG5iU2VudGVuY2VzUGlja2VkKys7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBzZW50ZW5jZXNTZWxlY3RlZDtcclxufVxyXG5cclxuY29uc3QgaW5pdFNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRyZXR1cm4gc2VudGVuY2VzLm1hcCgoc2VudGVuY2UpID0+IHtcclxuXHRcdC8vRmFpdCB1bmUgY29waWUgZGVzIGpvdWV1cnNcclxuXHRcdGxldCBwbGF5ZXJzTm90UGlja2VkID0gcGxheWVycy5zbGljZSgpO1xyXG5cclxuXHRcdGNvbnN0IGluaXRQbGF5ZXJzID0gKHN0cmluZ01hdGNoKSA9PiB7XHJcblx0XHRcdHdoaWxlIChzZW50ZW5jZS50ZXh0LmluZGV4T2Yoc3RyaW5nTWF0Y2gpID4gLTEpIHtcclxuXHRcdFx0XHQvL0Nob2lzaXQgcGFybWlzIHF1ZWwgdHlwZSBkZSBqb3VldXIgb24gcGV1dCB0aXJlclxyXG5cdFx0XHRcdGxldCBwbGF5ZXJUb1BpY2s7XHJcblx0XHRcdFx0c3dpdGNoIChzdHJpbmdNYXRjaCkge1xyXG5cdFx0XHRcdFx0Y2FzZSBzdHJpbmdUb0ZpbmQuZmVtYWxlOlxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJUb1BpY2sgPSBwbGF5ZXJzTm90UGlja2VkLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLmdlbmRlciA9PSBcIkZcIik7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBzdHJpbmdUb0ZpbmQubWFsZTpcclxuXHRcdFx0XHRcdFx0cGxheWVyVG9QaWNrID0gcGxheWVyc05vdFBpY2tlZC5maWx0ZXIocGxheWVyID0+IHBsYXllci5nZW5kZXIgPT0gXCJNXCIpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdHBsYXllclRvUGljayA9IHBsYXllcnNOb3RQaWNrZWQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL0Nob2lzaXQgdW4gam91ZXVyIGF1IGhhc2FyZFxyXG5cdFx0XHRcdGxldCBwbGF5ZXJQaWNrZWQgPSBwbGF5ZXJUb1BpY2tbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnBsYXllclRvUGljay5sZW5ndGgpXTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL1JldGlyZSBjZSBqb3VldXIgZGUgbGEgbGlzdGUgZGVzIGpvdWV1cnMgbm9uIHByaXNcclxuXHRcdFx0XHRwbGF5ZXJzTm90UGlja2VkLnNwbGljZShwbGF5ZXJzTm90UGlja2VkLmluZGV4T2YocGxheWVyUGlja2VkKSwgMSk7XHJcblxyXG5cdFx0XHRcdC8vUmVtcGxhY2UgbCfDqWzDqW1lbnQgcGFyIGxlIG5vbSBkdSBqb3VldXJcclxuXHRcdFx0XHRzZW50ZW5jZS50ZXh0ID0gc2VudGVuY2UudGV4dC5yZXBsYWNlKHN0cmluZ01hdGNoLCBwbGF5ZXJQaWNrZWQubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9TaSBsYSBwaHJhc2UgZXN0IHVuIHZpcnVzIGV0IHF1J29uIHRyb3V2ZSB1biDDqWzDqW1lbnQgZGFucyBsZXMgZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbnRlbmNlLnR5cGUgPT0gXCJ2aXJ1c1wiICYmIHNlbnRlbmNlLmRldGFpbHMuaW5kZXhPZihzdHJpbmdNYXRjaCkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtcGxhY2UgbGUgZWx0VG9GaW5kIHBhciBsZSBub20gZHUgam91ZXVyIChsZSBtw6ptZSBxdWUgbGUgdGV4dClcclxuICAgICAgICAgICAgICAgICAgICBzZW50ZW5jZS5kZXRhaWxzID0gc2VudGVuY2UuZGV0YWlscy5yZXBsYWNlKHN0cmluZ01hdGNoLCBwbGF5ZXJQaWNrZWQubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aW5pdFBsYXllcnMoc3RyaW5nVG9GaW5kLm5ldXRyYWwpO1xyXG5cdFx0aW5pdFBsYXllcnMoc3RyaW5nVG9GaW5kLm1hbGUpO1xyXG5cdFx0aW5pdFBsYXllcnMoc3RyaW5nVG9GaW5kLmZlbWFsZSk7XHJcblxyXG5cdFx0cmV0dXJuIHNlbnRlbmNlO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vKipcclxuICogUGxhY2UgbGVzIHZpcnVzIGVuIHRhbnQgcXVlIHBocmFzZVxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzZW50ZW5jZXMgVGFibGVhdSBkZXMgcGhyYXNlcyByZXRlbnVlc1xyXG4gKi9cclxuIGNvbnN0IHB1dFZpcnVzID0gKHNlbnRlbmNlcykgPT4ge1xyXG4gICAgc2VudGVuY2VzLm1hcCgoc2VudGVuY2UpID0+IHtcclxuICAgICAgICBpZiAoc2VudGVuY2UudHlwZSA9PSBcInZpcnVzXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXhSYW5kVmlydXMgPSBnZXRSYW5kb21JbnQoMywgNik7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbnRlbmNlVmlydXMgPSB7XCJ0ZXh0XCI6IHNlbnRlbmNlLmRldGFpbHMsIFwidHlwZVwiOiBcInZpcnVzRW5kXCJ9O1xyXG4gICAgICAgICAgICBzZW50ZW5jZXMuc3BsaWNlKGkraW5kZXhSYW5kVmlydXMsIDAsIHNlbnRlbmNlVmlydXMpO1xyXG4gICAgICAgIH1cclxuXHRcdHJldHVybiBzZW50ZW5jZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gUGxheSgpIHtcclxuXHRsZXQgbG9jYWxPcHRpb25zID0gbnVsbDtcclxuXHRsZXQgbG9jYWxQbGF5ZXJzID0gbnVsbDtcclxuXHRpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcblx0XHRsb2NhbE9wdGlvbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3B0aW9uc1wiKSk7XHJcblx0XHRsb2NhbFBsYXllcnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyc1wiKSk7XHJcblx0fVxyXG5cdGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3BsYXllcnNdID0gdXNlU3RhdGUobG9jYWxQbGF5ZXJzKTtcclxuXHRjb25zdCBbb3B0aW9uc10gPSB1c2VTdGF0ZShsb2NhbE9wdGlvbnMpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGV0IHNlbnRlbmNlcyA9IGZpbHRlclNlbnRlbmNlcyhkYXRhLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IHNlbGVjdFNlbnRlbmNlcyhzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpO1xyXG5cdFx0c2VudGVuY2VzID0gaW5pdFNlbnRlbmNlcyhzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpO1xyXG5cdFx0Y29uc29sZUluZm9ybWF0aW9uKHNlbnRlbmNlcywgcGxheWVycyk7XHJcbiAgICAgICAgLypsZXQgblJhbmRvbVNlbnRlbmNlcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCk7XHJcblx0XHRzZXRUZXh0KGRhdGFbblJhbmRvbVNlbnRlbmNlc10udGV4dCk7Ki9cclxuXHJcblx0XHQvLyBUT0RPIDogKGlkw6llIGVuIHRzID0+IEZhaXJlIHJlZHVjZXIgZXQgaW50ZXJmYWNlIHBvdXIgbGVzIHBocmFzZXMgZHUganNvbiA6IGh0dHBzOi8veW91dHUuYmUvWjVpV3I2U3Jzajg/dD05MTgpXHJcblx0XHQvLyAoRmFpcmUgZGVzIGZvbmN0aW9ucyAoZW4gZGVob3JzIGR1IGNvbXBvc2FudHMgcG91ciBxdWUgw6dhIHNvaXQgY2xlYW4gKGp1c3RlIGF1IGRlc3N1cyBsw6ApKSlcclxuXHRcdC8vIC0gRmlsdHJlciBsZSBqc29uIGRhdGEgcG91ciBuZSBwcmVuZHJlIHF1ZSBsZXMgcGhyYXNlcyBxdWkgcmVzcGVjdGVudCBsZXMgb3B0aW9ucyAodGjDqG1lcy4uLilcclxuXHRcdC8vIC0gRmFpcmUgbGUgdGFibGVhdSBkZSBwaHJhc2VzICh1bmUgY2VydGFpbmUgbG9uZ3VldXIgZW4gZm9uY3Rpb24gZGUgbGEgbG9uZ3VldXIgZW4gb3B0aW9uKVxyXG5cdFx0Ly8gLSBSZW1wbGFjZXIgbGVzIG5vbXMgZGFucyBsZXMgcGhyYXNlcyAodGlyZXIgbGVzIG5vbXMgYXUgaGFzYXJkIHRvdXQgw6dhIHRvdXQgw6dhKVxyXG5cdFx0Ly8gLSBNZXR0cmUgbGVzIHZpcnVzIHF1ZWxxdWUgcGFydFxyXG5cdFx0Ly8gLSBNZXR0cmUgbGEgY29uc8OpcXVlbmNlIGp1c3RlIGFwcsOocyBwb3VyIGxlcyBjaG9peFxyXG5cdFx0Ly9cclxuXHRcdC8vIC0gUG91ciBsZXMgY2hvaXgsIGNlIHNlcmEgZGFucyBsZSBqZXUgZGUgcmVtcGxhY2VyIGxlIG5vbSBkZXMgZMOpdGFpbHMgZG9uYyBwYXMgZGFucyBjZXR0ZSBmb25jdGlvblxyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQgdGl0bGU9XCJTZWxlY3Rpb25uZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7c3R5bGVzLm1haW59YH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0e3RpdGxlIHx8IFwiXCJ9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHR7dGV4dCB8fCBcIkNoYXJnZW1lbnQuLi5cIn1cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheTsiXSwic291cmNlUm9vdCI6IiJ9