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
 * @param {Object} sentences
 * @param {Object} options 
 * @returns {Object} 
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
 * @param {*} sentences 
 * @param {*} options 
 * @param {*} players 
 * @returns {string[]}
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
    console.group("%c" + sentence.text, "color: red");

    var initSentence = function initSentence(stringMatch, regexMatch) {
      if (sentence.text.match(regexMatch) != null) console.log(stringMatch);

      while (sentence.text.match(regexMatch) != null) {
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

        playersNotPicked.splice(playersNotPicked.indexOf(playerPicked), 1);
        console.log(sentence.text); //Remplace l'élément par le nom du joueur

        sentence.text = sentence.text.replace(stringMatch, playerPicked.name);
      }

      console.log(sentence.text);
    };

    initSentence(stringToFind.neutral, regexToFind.neutral);
    initSentence(stringToFind.male, regexToFind.male);
    initSentence(stringToFind.female, regexToFind.female);
    console.groupEnd();
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
        lineNumber: 223,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: text || "Chargement..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 221,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS5qcyJdLCJuYW1lcyI6WyJyZWdleFRvRmluZCIsInN0cmluZ1RvRmluZCIsImNvbnNvbGVJbmZvcm1hdGlvbiIsInNlbnRlbmNlcyIsInBsYXllcnMiLCJjc3NTcXVhcmUiLCJjc3NTbWFsbCIsImNvbnNvbGUiLCJncm91cENvbGxhcHNlZCIsImxlbmd0aCIsImZvckVhY2giLCJwbGF5ZXIiLCJsb2ciLCJnZW5kZXIiLCJuYW1lIiwiZ3JvdXBFbmQiLCJzZW50ZW5jZSIsImNzc1RoZW1lIiwidGhlbWUiLCJzZW50ZW5jZVR5cGUiLCJzcGFjZVR5cGUiLCJ0eXBlIiwidGV4dCIsInRhYmxlIiwiZmlsdGVyIiwieCIsImZpbHRlclNlbnRlbmNlcyIsIm9wdGlvbnMiLCJuYkZlbWFsZSIsInJlZHVjZSIsImFjYyIsImN1ciIsIm5iR2VuZGVyIiwiZ2V0TmJFbHQiLCJyZWdleCIsIm1hdGNoIiwiZWx0IiwibmJFbHRGaW5kZWQiLCJuZXV0cmFsIiwibmJFbHRNYWxlRmluZGVkIiwibWFsZSIsIm5iRWx0RmVtYWxlRmluZGVkIiwiZmVtYWxlIiwiZW5vdWdoRWx0SG9tbWUiLCJlbm91Z2hFbHRGZW1tZSIsImVub3VnaFBsYXllciIsInRoZW1lcyIsImluY2x1ZGVzIiwiZ2V0TGVuZ3RoU2VudGVuY2VzIiwiZHVyYXRpb24iLCJzZWxlY3RTZW50ZW5jZXMiLCJzZW50ZW5jZXNTZWxlY3RlZCIsImxlbmd0aFNlbnRlbmNlcyIsIm5iU2VudGVuY2VzUGlja2VkIiwibmJWaXJ1c1BpY2tlZCIsImlkU2VudGVuY2VzUGlja2VkIiwidG90YWwiLCJuYlJhbmRvbVNlbnRlbmNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNlbnRlbmNlUGlja2VkIiwidmlydXMiLCJpbml0U2VudGVuY2VzIiwibWFwIiwicGxheWVyc05vdFBpY2tlZCIsInNsaWNlIiwiZ3JvdXAiLCJpbml0U2VudGVuY2UiLCJzdHJpbmdNYXRjaCIsInJlZ2V4TWF0Y2giLCJwbGF5ZXJUb1BpY2siLCJwbGF5ZXJQaWNrZWQiLCJzcGxpY2UiLCJpbmRleE9mIiwicmVwbGFjZSIsIlBsYXkiLCJsb2NhbE9wdGlvbnMiLCJsb2NhbFBsYXllcnMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlU3RhdGUiLCJzZXRUZXh0IiwidGl0bGUiLCJzZXRUaXRsZSIsInVzZUVmZmVjdCIsImRhdGEiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFdBQVcsR0FBRztBQUNqQixhQUFXLFVBRE07QUFFakIsVUFBUSxXQUZTO0FBR2pCLFlBQVU7QUFITyxDQUFsQjtBQUtBLElBQUlDLFlBQVksR0FBRztBQUNsQixhQUFXLE9BRE87QUFFbEIsVUFBUSxRQUZVO0FBR2xCLFlBQVU7QUFIUSxDQUFuQjs7QUFNQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFNBQUQsRUFBWUMsT0FBWixFQUF3QjtBQUNsRCxNQUFJQyxTQUFTLEdBQUcsMERBQWhCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLGtCQUFmO0FBQ0FDLFNBQU8sQ0FBQ0MsY0FBUixzQkFBcUNKLE9BQU8sQ0FBQ0ssTUFBN0Msa0JBQTJESixTQUEzRDtBQUNBRCxTQUFPLENBQUNNLE9BQVIsQ0FBZ0IsVUFBQUMsTUFBTSxFQUFJO0FBQ3pCSixXQUFPLENBQUNLLEdBQVIsYUFBaUJELE1BQU0sQ0FBQ0UsTUFBeEIsZ0JBQW9DRixNQUFNLENBQUNHLElBQTNDLGFBQ0dULFNBREgsOENBRUEsRUFGQTtBQUdBLEdBSkQ7QUFLQUUsU0FBTyxDQUFDUSxRQUFSO0FBQ0FSLFNBQU8sQ0FBQ0MsY0FBUixzQkFBcUNMLFNBQVMsQ0FBQ00sTUFBL0Msa0JBQTZESixTQUE3RDtBQUNBRixXQUFTLENBQUNPLE9BQVYsQ0FBa0IsVUFBQU0sUUFBUSxFQUFJO0FBQzdC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TixFQWpCTSxDQUFUO0FBbUJBLHNCQUNDLDhEQUFDLHVEQUFEO0FBQVEsU0FBSyxFQUFDLGNBQWQ7QUFBQSwyQkFDQztBQUFLLGVBQVMsWUFBS3NGLDBFQUFMLGNBQXlCQSxxRUFBekIsQ0FBZDtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUEsa0JBQ0VKLEtBQUssSUFBSTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUlDO0FBQUEsa0JBQ0VoRSxJQUFJLElBQUk7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBWUE7O0dBM0NRdUQsSTs7S0FBQUEsSTtBQTZDVCwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wbGF5LjNkNDcyZWIyNTAwNDRhMjMxM2NkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1BsYXkubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhL3NlbnRlbmNlcy5qc29uJztcclxuXHJcbmxldCByZWdleFRvRmluZCA9IHtcclxuXHRcIm5ldXRyYWxcIjogL1xcW25vbVxcXS9nLFxyXG5cdFwibWFsZVwiOiAvXFxbbm9tTVxcXS9nLFxyXG5cdFwiZmVtYWxlXCI6IC9cXFtub21GXFxdL2csXHJcbn07XHJcbmxldCBzdHJpbmdUb0ZpbmQgPSB7XHJcblx0XCJuZXV0cmFsXCI6IFwiW25vbV1cIixcclxuXHRcIm1hbGVcIjogXCJbbm9tTV1cIixcclxuXHRcImZlbWFsZVwiOiBcIltub21GXVwiLFxyXG59O1xyXG5cclxuY29uc3QgY29uc29sZUluZm9ybWF0aW9uID0gKHNlbnRlbmNlcywgcGxheWVycykgPT4ge1xyXG5cdGxldCBjc3NTcXVhcmUgPSBcInBhZGRpbmc6IDNweCA1cHg7IGJvcmRlci1yYWRpdXM6IDVweDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI7XHJcblx0bGV0IGNzc1NtYWxsID0gXCJmb250LXNpemU6IDEwcHg7XCI7XHJcblx0Y29uc29sZS5ncm91cENvbGxhcHNlZChgJWNKb3VldXJzICgke3BsYXllcnMubGVuZ3RofSlgLCBgJHtjc3NTcXVhcmV9IGNvbG9yOiBibGFjazsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7YCk7XHJcblx0cGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhgJWMke3BsYXllci5nZW5kZXJ9JWMgJHtwbGF5ZXIubmFtZX1gLFxyXG5cdFx0YCR7Y3NzU3F1YXJlfSBjb2xvcjogYmxhY2s7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2AsXHJcblx0XHRcIlwiKTtcclxuXHR9KTtcclxuXHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0Y29uc29sZS5ncm91cENvbGxhcHNlZChgJWNQaHJhc2VzICgke3NlbnRlbmNlcy5sZW5ndGh9KWAsIGAke2Nzc1NxdWFyZX0gY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtgKTtcclxuXHRzZW50ZW5jZXMuZm9yRWFjaChzZW50ZW5jZSA9PiB7XHJcblx0XHRsZXQgY3NzVGhlbWUgPSBcIlwiO1xyXG5cdFx0c3dpdGNoIChzZW50ZW5jZS50aGVtZSkge1xyXG5cdFx0XHRjYXNlIFwic3BvcnRcIjpcclxuXHRcdFx0XHRjc3NUaGVtZSA9IFwiY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiaG90XCI6XHJcblx0XHRcdFx0Y3NzVGhlbWUgPSBcImNvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzZiZjtcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRjc3NUaGVtZSA9IFwiY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGxldCBzZW50ZW5jZVR5cGUgPSBcIlwiO1xyXG5cdFx0bGV0IHNwYWNlVHlwZSA9IFwiXCI7XHJcblx0XHRpZiAoc2VudGVuY2UudHlwZSAhPSBcIm5vcm1hbFwiKSB7XHJcblx0XHRcdHNlbnRlbmNlVHlwZSA9IHNlbnRlbmNlLnR5cGU7XHJcblx0XHRcdHNwYWNlVHlwZSA9IFwiIFwiO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5ncm91cENvbGxhcHNlZChgJWMke3NlbnRlbmNlVHlwZX0lYyR7c3BhY2VUeXBlfSVjJHtzZW50ZW5jZS50aGVtZX0lYyAke3NlbnRlbmNlLnRleHR9YCxcclxuXHRcdGAke2Nzc1NxdWFyZX0gY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICR7Y3NzU21hbGx9YCxcclxuXHRcdGAke2Nzc1NtYWxsfWAsXHJcblx0XHRgJHtjc3NTcXVhcmV9ICR7Y3NzVGhlbWV9ICR7Y3NzU21hbGx9YCxcclxuXHRcdGAke2Nzc1NtYWxsfWApO1xyXG5cdFx0Y29uc29sZS50YWJsZShzZW50ZW5jZSk7XHJcblx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0fSk7XHJcblx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdGNvbnNvbGUubG9nKFwiJWNJbCB5IGEgXCIgKyBzZW50ZW5jZXMuZmlsdGVyKHggPT4geC50eXBlID09IFwidmlydXNcIikubGVuZ3RoICsgXCIgdmlydXMgIVwiLFxyXG5cdGAke2Nzc1NxdWFyZX0gY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7YCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtPYmplY3R9IHNlbnRlbmNlc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBcclxuICogQHJldHVybnMge09iamVjdH0gXHJcbiAqL1xyXG5jb25zdCBmaWx0ZXJTZW50ZW5jZXMgPSAoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKSA9PiB7XHJcblx0bGV0IG5iRmVtYWxlID0gcGxheWVycy5yZWR1Y2UoKGFjYywgY3VyKSA9PiBjdXIuZ2VuZGVyID09PSBcIkZcIiA/ICsrYWNjIDogYWNjLCAwKTtcclxuXHRsZXQgbmJHZW5kZXIgPSB7XHJcblx0XHRcImZlbWFsZVwiOiBuYkZlbWFsZSxcclxuXHRcdFwibWFsZVwiOiBwbGF5ZXJzLmxlbmd0aCAtIG5iRmVtYWxlXHJcblx0fTtcclxuXHJcblx0Ly9Ob21icmUgZCfDqWzDqW1lbnQgcmVnZXggdHJvdXbDqSBkYW5zIGxhIHBocmFzZVxyXG5cdGNvbnN0IGdldE5iRWx0ID0gKHJlZ2V4LCB0ZXh0KSA9PiB7XHJcblx0XHRyZXR1cm4gKHRleHQubWF0Y2gocmVnZXgpIHx8IFtdKS5sZW5ndGg7XHJcblx0fTtcclxuXHRcclxuXHRyZXR1cm4gc2VudGVuY2VzLmZpbHRlcigoZWx0KSA9PiB7XHJcblx0XHRsZXQgbmJFbHRGaW5kZWQgPSBnZXROYkVsdChyZWdleFRvRmluZC5uZXV0cmFsLCBlbHQudGV4dCk7XHJcblx0XHRsZXQgbmJFbHRNYWxlRmluZGVkID0gZ2V0TmJFbHQocmVnZXhUb0ZpbmQubWFsZSwgZWx0LnRleHQpO1xyXG5cdFx0bGV0IG5iRWx0RmVtYWxlRmluZGVkID0gZ2V0TmJFbHQocmVnZXhUb0ZpbmQuZmVtYWxlLCBlbHQudGV4dCk7XHJcblx0XHRcclxuXHRcdC8vT24gdsOpcmlmaWUgcydpbCB5IGEgYmllbiwgYXV0YW50IG91IHBsdXMgZGUgam91ZXVyIHF1ZSBsYSBwaHJhc2VzIGVuIG7DqWNlc3NpdGUgKGVuIGZvbmN0aW9uIGR1IHNleGUpXHJcblx0XHRsZXQgZW5vdWdoRWx0SG9tbWUgPSBuYkdlbmRlci5tYWxlID49IG5iRWx0TWFsZUZpbmRlZDtcclxuXHRcdGxldCBlbm91Z2hFbHRGZW1tZSA9IG5iR2VuZGVyLmZlbWFsZSA+PSBuYkVsdEZlbWFsZUZpbmRlZDtcclxuXHRcdGxldCBlbm91Z2hQbGF5ZXIgPSBwbGF5ZXJzLmxlbmd0aCA+PSAobmJFbHRGaW5kZWQgKyBuYkVsdE1hbGVGaW5kZWQgKyBuYkVsdEZlbWFsZUZpbmRlZCk7XHJcblxyXG5cdFx0cmV0dXJuIG9wdGlvbnMudGhlbWVzLmluY2x1ZGVzKGVsdC50aGVtZSkgJiYgZW5vdWdoRWx0SG9tbWUgJiYgZW5vdWdoRWx0RmVtbWUgJiYgZW5vdWdoUGxheWVyO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vKipcclxuICogUmVudm9pZSBsZSBub21icmUgZGUgcGhyYXNlcyDDoCBhZmZpY2hlclxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IG5vbWJyZSBkZSBwaHJhc2VzXHJcbiAqL1xyXG5jb25zdCBnZXRMZW5ndGhTZW50ZW5jZXMgPSAoZHVyYXRpb24pID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0XCJ0b3RhbFwiOiAyMCArIDE1KmR1cmF0aW9uLFxyXG5cdFx0XCJ2aXJ1c1wiOiAyICsgMipkdXJhdGlvblxyXG5cdH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHsqfSBzZW50ZW5jZXMgXHJcbiAqIEBwYXJhbSB7Kn0gb3B0aW9ucyBcclxuICogQHBhcmFtIHsqfSBwbGF5ZXJzIFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XHJcbiAqL1xyXG5jb25zdCBzZWxlY3RTZW50ZW5jZXMgPSAoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKSA9PiB7XHJcblx0bGV0IHNlbnRlbmNlc1NlbGVjdGVkID0gW107XHJcblx0bGV0IGxlbmd0aFNlbnRlbmNlcyA9IGdldExlbmd0aFNlbnRlbmNlcyhvcHRpb25zLmR1cmF0aW9uKTtcclxuXHRcclxuXHRsZXQgbmJTZW50ZW5jZXNQaWNrZWQgPSAwO1xyXG4gICAgbGV0IG5iVmlydXNQaWNrZWQgPSAwO1xyXG5cdGxldCBpZFNlbnRlbmNlc1BpY2tlZCA9IFtdO1xyXG5cclxuXHR3aGlsZSAobmJTZW50ZW5jZXNQaWNrZWQgPCBsZW5ndGhTZW50ZW5jZXMudG90YWwgJiYgaWRTZW50ZW5jZXNQaWNrZWQubGVuZ3RoIDwgc2VudGVuY2VzLmxlbmd0aCkge1xyXG5cdFx0Ly9PbiBjaG9pc2l0IHVuIG51bcOpcm8gYXUgaGFzYXJkXHJcblx0XHRsZXQgbmJSYW5kb21TZW50ZW5jZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpzZW50ZW5jZXMubGVuZ3RoKTtcclxuXHRcdGlmICghaWRTZW50ZW5jZXNQaWNrZWQuaW5jbHVkZXMobmJSYW5kb21TZW50ZW5jZSkpIHtcclxuXHRcdFx0aWRTZW50ZW5jZXNQaWNrZWQucHVzaChuYlJhbmRvbVNlbnRlbmNlKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBzZW50ZW5jZVBpY2tlZCA9IHNlbnRlbmNlc1tuYlJhbmRvbVNlbnRlbmNlXTtcclxuXHJcblx0XHRcdGlmIChzZW50ZW5jZVBpY2tlZC50eXBlID09IFwidmlydXNcIikge1xyXG5cdFx0XHRcdGlmIChuYlZpcnVzUGlja2VkIDwgbGVuZ3RoU2VudGVuY2VzLnZpcnVzKSB7XHJcblx0XHRcdFx0XHRzZW50ZW5jZXNTZWxlY3RlZC5wdXNoKHNlbnRlbmNlUGlja2VkKTtcclxuXHRcdFx0XHRcdG5iU2VudGVuY2VzUGlja2VkKys7XHJcblx0XHRcdFx0XHRuYlZpcnVzUGlja2VkKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHNlbnRlbmNlc1NlbGVjdGVkLnB1c2goc2VudGVuY2VQaWNrZWQpO1xyXG5cdFx0XHRcdG5iU2VudGVuY2VzUGlja2VkKys7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBzZW50ZW5jZXNTZWxlY3RlZDtcclxufVxyXG5cclxuY29uc3QgaW5pdFNlbnRlbmNlcyA9IChzZW50ZW5jZXMsIG9wdGlvbnMsIHBsYXllcnMpID0+IHtcclxuXHRyZXR1cm4gc2VudGVuY2VzLm1hcChzZW50ZW5jZSA9PiB7XHJcblx0XHQvL0ZhaXQgdW5lIGNvcGllIGRlcyBqb3VldXJzXHJcblx0XHRsZXQgcGxheWVyc05vdFBpY2tlZCA9IHBsYXllcnMuc2xpY2UoKTtcclxuXHJcblx0XHRjb25zb2xlLmdyb3VwKFwiJWNcIiArIHNlbnRlbmNlLnRleHQsIFwiY29sb3I6IHJlZFwiKTtcclxuXHRcdGNvbnN0IGluaXRTZW50ZW5jZSA9IChzdHJpbmdNYXRjaCwgcmVnZXhNYXRjaCkgPT4ge1xyXG5cdFx0XHRpZiAoc2VudGVuY2UudGV4dC5tYXRjaChyZWdleE1hdGNoKSAhPSBudWxsKSBjb25zb2xlLmxvZyhzdHJpbmdNYXRjaCk7XHJcblx0XHRcdHdoaWxlIChzZW50ZW5jZS50ZXh0Lm1hdGNoKHJlZ2V4TWF0Y2gpICE9IG51bGwpIHtcclxuXHRcdFx0XHRsZXQgcGxheWVyVG9QaWNrO1xyXG5cdFx0XHRcdHN3aXRjaCAoc3RyaW5nTWF0Y2gpIHtcclxuXHRcdFx0XHRcdGNhc2Ugc3RyaW5nVG9GaW5kLmZlbWFsZTpcclxuXHRcdFx0XHRcdFx0cGxheWVyVG9QaWNrID0gcGxheWVyc05vdFBpY2tlZC5maWx0ZXIocGxheWVyID0+IHBsYXllci5nZW5kZXIgPT0gXCJGXCIpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2Ugc3RyaW5nVG9GaW5kLm1hbGU6XHJcblx0XHRcdFx0XHRcdHBsYXllclRvUGljayA9IHBsYXllcnNOb3RQaWNrZWQuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIuZ2VuZGVyID09IFwiTVwiKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJUb1BpY2sgPSBwbGF5ZXJzTm90UGlja2VkO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9DaG9pc2l0IHVuIGpvdWV1ciBhdSBoYXNhcmRcclxuXHRcdFx0XHRsZXQgcGxheWVyUGlja2VkID0gcGxheWVyVG9QaWNrW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpwbGF5ZXJUb1BpY2subGVuZ3RoKV07XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9SZXRpcmUgY2Ugam91ZXVyIGRlIGxhIGxpc3RlIGRlcyBqb3VldXJzIG5vbiBwcmlzXHJcblx0XHRcdFx0cGxheWVyc05vdFBpY2tlZC5zcGxpY2UocGxheWVyc05vdFBpY2tlZC5pbmRleE9mKHBsYXllclBpY2tlZCksIDEpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHNlbnRlbmNlLnRleHQpO1xyXG5cclxuXHRcdFx0XHQvL1JlbXBsYWNlIGwnw6lsw6ltZW50IHBhciBsZSBub20gZHUgam91ZXVyXHJcblx0XHRcdFx0c2VudGVuY2UudGV4dCA9IHNlbnRlbmNlLnRleHQucmVwbGFjZShzdHJpbmdNYXRjaCwgcGxheWVyUGlja2VkLm5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnNvbGUubG9nKHNlbnRlbmNlLnRleHQpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpbml0U2VudGVuY2Uoc3RyaW5nVG9GaW5kLm5ldXRyYWwsIHJlZ2V4VG9GaW5kLm5ldXRyYWwpO1xyXG5cdFx0aW5pdFNlbnRlbmNlKHN0cmluZ1RvRmluZC5tYWxlLCByZWdleFRvRmluZC5tYWxlKTtcclxuXHRcdGluaXRTZW50ZW5jZShzdHJpbmdUb0ZpbmQuZmVtYWxlLCByZWdleFRvRmluZC5mZW1hbGUpO1xyXG5cclxuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHRcdHJldHVybiBzZW50ZW5jZTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFBsYXkoKSB7XHJcblx0bGV0IGxvY2FsT3B0aW9ucyA9IG51bGw7XHJcblx0bGV0IGxvY2FsUGxheWVycyA9IG51bGw7XHJcblx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdFx0bG9jYWxPcHRpb25zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9wdGlvbnNcIikpO1xyXG5cdFx0bG9jYWxQbGF5ZXJzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllcnNcIikpO1xyXG5cdH1cclxuXHRjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtwbGF5ZXJzXSA9IHVzZVN0YXRlKGxvY2FsUGxheWVycyk7XHJcblx0Y29uc3QgW29wdGlvbnNdID0gdXNlU3RhdGUobG9jYWxPcHRpb25zKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxldCBzZW50ZW5jZXMgPSBmaWx0ZXJTZW50ZW5jZXMoZGF0YSwgb3B0aW9ucywgcGxheWVycyk7XHJcblx0XHRzZW50ZW5jZXMgPSBzZWxlY3RTZW50ZW5jZXMoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdHNlbnRlbmNlcyA9IGluaXRTZW50ZW5jZXMoc2VudGVuY2VzLCBvcHRpb25zLCBwbGF5ZXJzKTtcclxuXHRcdGNvbnNvbGVJbmZvcm1hdGlvbihzZW50ZW5jZXMsIHBsYXllcnMpO1xyXG4gICAgICAgIC8qbGV0IG5SYW5kb21TZW50ZW5jZXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpO1xyXG5cdFx0c2V0VGV4dChkYXRhW25SYW5kb21TZW50ZW5jZXNdLnRleHQpOyovXHJcblxyXG5cdFx0Ly8gVE9ETyA6IChpZMOpZSBlbiB0cyA9PiBGYWlyZSByZWR1Y2VyIGV0IGludGVyZmFjZSBwb3VyIGxlcyBwaHJhc2VzIGR1IGpzb24gOiBodHRwczovL3lvdXR1LmJlL1o1aVdyNlNyc2o4P3Q9OTE4KVxyXG5cdFx0Ly8gKEZhaXJlIGRlcyBmb25jdGlvbnMgKGVuIGRlaG9ycyBkdSBjb21wb3NhbnRzIHBvdXIgcXVlIMOnYSBzb2l0IGNsZWFuIChqdXN0ZSBhdSBkZXNzdXMgbMOgKSkpXHJcblx0XHQvLyAtIEZpbHRyZXIgbGUganNvbiBkYXRhIHBvdXIgbmUgcHJlbmRyZSBxdWUgbGVzIHBocmFzZXMgcXVpIHJlc3BlY3RlbnQgbGVzIG9wdGlvbnMgKHRow6htZXMuLi4pXHJcblx0XHQvLyAtIEZhaXJlIGxlIHRhYmxlYXUgZGUgcGhyYXNlcyAodW5lIGNlcnRhaW5lIGxvbmd1ZXVyIGVuIGZvbmN0aW9uIGRlIGxhIGxvbmd1ZXVyIGVuIG9wdGlvbilcclxuXHRcdC8vIC0gUmVtcGxhY2VyIGxlcyBub21zIGRhbnMgbGVzIHBocmFzZXMgKHRpcmVyIGxlcyBub21zIGF1IGhhc2FyZCB0b3V0IMOnYSB0b3V0IMOnYSlcclxuXHRcdC8vIC0gTWV0dHJlIGxlcyB2aXJ1cyBxdWVscXVlIHBhcnRcclxuXHRcdC8vIC0gTWV0dHJlIGxhIGNvbnPDqXF1ZW5jZSBqdXN0ZSBhcHLDqHMgcG91ciBsZXMgY2hvaXhcclxuXHRcdC8vXHJcblx0XHQvLyAtIFBvdXIgbGVzIGNob2l4LCBjZSBzZXJhIGRhbnMgbGUgamV1IGRlIHJlbXBsYWNlciBsZSBub20gZGVzIGTDqXRhaWxzIGRvbmMgcGFzIGRhbnMgY2V0dGUgZm9uY3Rpb25cclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0IHRpdGxlPVwiU2VsZWN0aW9ubmVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke3N0eWxlcy5tYWlufWB9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdHt0aXRsZSB8fCBcIlwifVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0e3RleHQgfHwgXCJDaGFyZ2VtZW50Li4uXCJ9XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXk7Il0sInNvdXJjZVJvb3QiOiIifQ==