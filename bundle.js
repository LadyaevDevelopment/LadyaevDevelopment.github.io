/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    height: 100%;
    overflow: hidden;
}

body {
    background-color: #2c2c2c;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    height: 100%;
    overflow: hidden;
    position: fixed;
    width: 100%;
}

#gameCanvas {
    background-color: #87CEEB;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 4px solid #1a1a1a;
    /* border-radius: 8px; */
    width: 1290px;
    height: 860px;
    /* aspect-ratio: 3/2; */
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,wCAAwC;IACxC,yBAAyB;IACzB,wBAAwB;IACxB,aAAa;IACb,aAAa;IACb,uBAAuB;AAC3B","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n    overflow: hidden;\n}\n\nbody {\n    background-color: #2c2c2c;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: Arial, sans-serif;\n    height: 100%;\n    overflow: hidden;\n    position: fixed;\n    width: 100%;\n}\n\n#gameCanvas {\n    background-color: #87CEEB;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    border: 4px solid #1a1a1a;\n    /* border-radius: 8px; */\n    width: 1290px;\n    height: 860px;\n    /* aspect-ratio: 3/2; */\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _app_states_game_game_app_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app_states/game/game_app_state.js */ "./src/app_states/game/game_app_state.js");
/* harmony import */ var _app_states_empty_empty_app_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app_states/empty/empty_app_state.js */ "./src/app_states/empty/empty_app_state.js");
/* harmony import */ var _app_states_start_screen_start_screen_app_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app_states/start_screen/start_screen_app_state.js */ "./src/app_states/start_screen/start_screen_app_state.js");
/* harmony import */ var _app_states_level_designer_level_designer_app_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app_states/level_designer/level_designer_app_state.js */ "./src/app_states/level_designer/level_designer_app_state.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _common_levels_level_factory_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/levels/level_factory.js */ "./src/common/levels/level_factory.js");
/* harmony import */ var _app_states_catalog_catalog_app_state_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app_states/catalog/catalog_app_state.js */ "./src/app_states/catalog/catalog_app_state.js");








class App {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');

        this.canvasSize = new _common_size_js__WEBPACK_IMPORTED_MODULE_4__["default"](1290, 860);

        this.states = {
            initial: new _app_states_empty_empty_app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
            start: new _app_states_start_screen_start_screen_app_state_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.canvas),
            catalog: new _app_states_catalog_catalog_app_state_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.canvas, this.canvasSize),
            game: new _app_states_game_game_app_state_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, this.canvasSize, _common_levels_level_factory_js__WEBPACK_IMPORTED_MODULE_5__["default"].createDefaultLevel(this.canvasSize)),
            designer: new _app_states_level_designer_level_designer_app_state_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.canvas, this.canvasSize)
        };
        this.stringToState = {};
        this.stringToState[App.START] = this.states.start;
        this.stringToState[App.CATALOG] = this.states.catalog;
        this.stringToState[App.GAME] = this.states.game;
        this.stringToState[App.DESIGNER] = this.states.designer;

        this.currentState = this.states.initial;
    }

    static get START() { return 'Start' };
    static get CATALOG() { return 'Catalog' };
    static get GAME() { return 'Game' };
    static get DESIGNER() { return 'Designer' };

    checkCanRenderApp() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        if (viewportWidth < this.canvasSize.width || viewportHeight < this.canvasSize.height) {
            this.canvas.style.display = 'none';
            this.currentState.deactivate();
        } else {
            this.canvas.width = this.canvasSize.width;
            this.canvas.height = this.canvasSize.height;
            this.canvas.style.width = this.canvasSize.width + 'px';
            this.canvas.style.height = this.canvasSize.height + 'px';
            this.canvas.style.position = 'fixed';
            this.canvas.style.left = '50%';
            this.canvas.style.top = '50%';
            this.canvas.style.transform = 'translate(-50%, -50%)';
        }
    }

    setupResizeListener() {
        window.addEventListener('resize', () => {
            this.checkCanRenderApp();
        });
    }

    setupStateCallbacks() {
        this.states.start.onPlayClick = () => {
            this.switchToState(this.states.catalog);
        };
        this.states.start.onLevelDesignerClick = () => {
            this.switchToState(this.states.designer);
        };

        this.states.game.onExit = (nextState, level) => {
            if (!nextState) {
                nextState = this.states.start;
            }
            this.switchToState(nextState, {level: level});
        };
        this.states.game.onMainMenu = () => {
            this.switchToState(this.states.start);
        };

        this.states.designer.onTestLevel = (level) => {
            this.switchToState(this.states.game, {level: level, nextState: App.DESIGNER});
        };

        this.states.designer.onExit = () => {
            this.switchToState(this.states.start);
        };

        this.states.catalog.onExit = () => {
            this.switchToState(this.states.start);
        };
        this.states.catalog.onLevelStart = (level) => {
            this.switchToState(this.states.game, {level: level, nextState: App.CATALOG});
        };
        this.states.catalog.onLevelEdit = (level) => {
            this.switchToState(this.states.designer, {level: level});
        }
    }

    switchToState(state, args) {
        if (typeof state === 'string' || state instanceof String) {
            state = this.stringToState[state];
        }
        this.currentState.deactivate();
        this.currentState = state;
        this.currentState.activate(args);
    }

    start() {
        this.setupResizeListener();
        this.setupStateCallbacks();
        this.switchToState(this.states.start);
        this.checkCanRenderApp();
    }

    destroy() {
        Object.values(this.states).forEach(state => {
            state.destroy();
        });
    }
}

/***/ }),

/***/ "./src/app_states/base_app_state.js":
/*!******************************************!*\
  !*** ./src/app_states/base_app_state.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseAppState)
/* harmony export */ });
class BaseAppState {
    constructor(canvas) {
        this.canvas = canvas;
        this.isActive = false;
        this.animationId = null;

        this.onExit = () => {};
    }

    activate() {
        this.isActive = true;
    }

    deactivate() {
        this.isActive = false;
    }

    destroy() {
        this.deactivate();
    }
}

/***/ }),

/***/ "./src/app_states/catalog/back_button.js":
/*!***********************************************!*\
  !*** ./src/app_states/catalog/back_button.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackButton)
/* harmony export */ });
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.js */ "./src/app_states/catalog/button.js");


class BackButton extends _button_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, size, text) {
        super(position, size, text, {
            font: 'bold 18px "Courier New", "Lucida Console", "Monaco", "DejaVu Sans Mono", monospace',
            brickColor: '#8B4513',
            mortarColor: '#654321',
            hoveredBrickColor: '#A0522D',
            borderColor: '#654321',
            hoveredBorderColor: '#8B4513',
            brickWidth: 35,
            brickHeight: 18,
            mortarWidth: 2,
            mortarHeight: 2
        });
    }
}

/***/ }),

/***/ "./src/app_states/catalog/button.js":
/*!******************************************!*\
  !*** ./src/app_states/catalog/button.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _common_graphics_brick_pattern_renderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/graphics/brick_pattern_renderer.js */ "./src/common/graphics/brick_pattern_renderer.js");




class Button {
    constructor(position, size, text = '', options = {}) {
        this.position = position;
        this.size = size;
        this.text = text;
        this.hovered = false;
        this.visible = true;

        this.options = {
            font: 'bold 16px "Courier New", "Lucida Console", "Monaco", "DejaVu Sans Mono", monospace',
            textColor: '#FFFFFF',
            strokeColor: '#000000',
            strokeWidth: 3,
            brickColor: '#D2691E',
            mortarColor: '#8B4513',
            hoveredBrickColor: '#CD853F',
            borderColor: '#654321',
            hoveredBorderColor: '#F4A460',
            borderWidth: 3,
            hoveredBorderWidth: 4,
            brickWidth: 30,
            brickHeight: 15,
            mortarWidth: 2,
            mortarHeight: 2,
            ...options
        };
    }

    isPointInside(point) {
        return point.x >= this.position.x &&
               point.x <= this.position.x + this.size.width &&
               point.y >= this.position.y &&
               point.y <= this.position.y + this.size.height;
    }

    draw(ctx) {
        if (!this.visible) return;

        ctx.save();

        const brickOptions = {
            brickColor: this.hovered ? this.options.hoveredBrickColor : this.options.brickColor,
            mortarColor: this.options.mortarColor,
            brickWidth: this.options.brickWidth,
            brickHeight: this.options.brickHeight,
            mortarWidth: this.options.mortarWidth,
            mortarHeight: this.options.mortarHeight
        };

        _common_graphics_brick_pattern_renderer_js__WEBPACK_IMPORTED_MODULE_2__["default"].drawBrickPattern(
            ctx,
            this.position.x, this.position.y,
            this.size.width, this.size.height,
            brickOptions
        );

        ctx.strokeStyle = this.hovered ? this.options.hoveredBorderColor : this.options.borderColor;
        ctx.lineWidth = this.hovered ? this.options.hoveredBorderWidth : this.options.borderWidth;
        ctx.strokeRect(this.position.x, this.position.y, this.size.width, this.size.height);

        if (this.text) {
            ctx.font = this.options.font;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            const centerX = this.position.x + this.size.width / 2;
            const centerY = this.position.y + this.size.height / 2;

            ctx.strokeStyle = this.options.strokeColor;
            ctx.lineWidth = this.options.strokeWidth;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.strokeText(this.text, centerX, centerY);

            ctx.fillStyle = this.options.textColor;
            ctx.fillText(this.text, centerX, centerY);
        }

        ctx.restore();
    }
}

/***/ }),

/***/ "./src/app_states/catalog/catalog_app_state.js":
/*!*****************************************************!*\
  !*** ./src/app_states/catalog/catalog_app_state.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogAppState)
/* harmony export */ });
/* harmony import */ var _app_states_base_app_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app_states/base_app_state.js */ "./src/app_states/base_app_state.js");
/* harmony import */ var _common_graphics_brick_pattern_renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/graphics/brick_pattern_renderer.js */ "./src/common/graphics/brick_pattern_renderer.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _level_card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./level_card.js */ "./src/app_states/catalog/level_card.js");
/* harmony import */ var _loading_screen_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading_screen.js */ "./src/app_states/catalog/loading_screen.js");







class CatalogAppState extends _app_states_base_app_state_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(canvas, canvasSize) {
        super(canvas);
        this.ctx = canvas.getContext('2d');
        this.canvasSize = new _common_size_js__WEBPACK_IMPORTED_MODULE_3__["default"](canvasSize.width, canvasSize.height);

        this.levelPaths = [
            './src/collection/level-0.json',
            './src/collection/level-1.json',
            './src/collection/level-2.json'
        ];

        this.levels = [];
        this.isLoading = true;
        this.loadingProgress = 0;
        this.selectedLevelIndex = 0;

        this.onLevelStart = () => {};
        this.onLevelEdit = () => {};

        this.animationId = null;
        this.startTime = Date.now();

        this.initializeComponents();
        
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.gameLoop = this.gameLoop.bind(this);

        this.loadLevels();
    }

    async loadLevels() {
        try {
            this.levels = [];
            this.loadingProgress = 0;

            for (let i = 0; i < this.levelPaths.length; i++) {
                const levelPath = this.levelPaths[i];

                try {
                    const response = await fetch(levelPath);
                    const level = await response.json();
                    this.levels.push(level);
                } catch (error) {
                    console.error(`Error loading level from ${levelPath}:`, error);
                }

                this.loadingProgress = (i + 1) / this.levelPaths.length;
            }

            this.isLoading = false;
        } catch (error) {
            console.error('Error during level loading:', error);
            this.isLoading = false;
        }
    }

    activate() {
        this.canvas.style.display = 'block';
        this.ctx = this.canvas.getContext('2d');
        this.setupEventListeners();
        
        this.startTime = Date.now();
        this.gameLoop();
    }

    deactivate() {
        this.removeEventListeners();
        
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        
        this.canvas.style.cursor = 'default';
    }

    setupEventListeners() {
        this.boundClickHandler = this.handleClick.bind(this);
        
        this.canvas.addEventListener('click', this.boundClickHandler);
        this.canvas.addEventListener('mousemove', this.handleMouseMove);
    }

    removeEventListeners() {
        this.canvas.removeEventListener('click', this.boundClickHandler);
        this.canvas.removeEventListener('mousemove', this.handleMouseMove);
    }

    handleClick(event) {
        if (this.isLoading) return;

        const rect = this.canvas.getBoundingClientRect();
        const clickPoint = new _common_point_js__WEBPACK_IMPORTED_MODULE_2__["default"](event.clientX - rect.left, event.clientY - rect.top);

        const result = this.levelCard.handleClick(clickPoint);
        if (result) {
            this.handleCardAction(result);
        }
    }

    handleMouseMove(event) {
        if (this.isLoading) return;

        const rect = this.canvas.getBoundingClientRect();
        const mousePoint = new _common_point_js__WEBPACK_IMPORTED_MODULE_2__["default"](event.clientX - rect.left, event.clientY - rect.top);

        const isHovered = this.levelCard.handleMouseMove(mousePoint);
        this.canvas.style.cursor = isHovered ? 'pointer' : 'default';
    }

    initializeComponents() {
        const cardSize = new _common_size_js__WEBPACK_IMPORTED_MODULE_3__["default"](400, 220);
        const cardPosition = new _common_point_js__WEBPACK_IMPORTED_MODULE_2__["default"](
            (this.canvasSize.width - cardSize.width) / 2,
            (this.canvasSize.height - cardSize.height) / 2
        );

        this.levelCard = new _level_card_js__WEBPACK_IMPORTED_MODULE_4__["default"](cardPosition, cardSize, this.canvasSize);
        this.loadingScreen = new _loading_screen_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.canvasSize);
    }

    handleCardAction(action) {
        switch (action.action) {
            case 'play':
                this.onLevelStart(action.level);
                break;
            case 'edit':
                console.log(action.level);
                this.onLevelEdit(action.level);
                break;
            case 'prev':
                if (this.selectedLevelIndex > 0) {
                    this.selectedLevelIndex--;
                }
                break;
            case 'next':
                if (this.selectedLevelIndex < this.levels.length - 1) {
                    this.selectedLevelIndex++;
                }
                break;
            case 'back':
                this.onExit();
                break;
        }
    }

    gameLoop(currentTime = 0) {
        this.updateLayout();
        this.render();
        this.animationId = requestAnimationFrame(this.gameLoop);
    }
    
    updateLayout() {
        if (!this.isLoading) {
            this.levelCard.setLevel(this.levels[this.selectedLevelIndex]);
            this.levelCard.updateLayout(this.selectedLevelIndex, this.levels.length);
        }
    }
    
    render() {
        const currentTime = Date.now() - this.startTime;
        
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
        
        _common_graphics_brick_pattern_renderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawAnimatedBrickPattern(
            this.ctx,
            0, 0,
            this.canvasSize.width, this.canvasSize.height,
            currentTime,
            {
                brickColor: '#8B4513',
                mortarColor: '#654321',
                brickWidth: 80,
                brickHeight: 40,
                mortarWidth: 4,
                mortarHeight: 4
            }
        );

        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        this.ctx.fillRect(0, 0, this.canvasSize.width, this.canvasSize.height);

        if (this.isLoading) {
            this.loadingScreen.draw(this.ctx, this.loadingProgress);
        } else {
            this.levelCard.draw(this.ctx);
        }
    }

}

/***/ }),

/***/ "./src/app_states/catalog/edit_button.js":
/*!***********************************************!*\
  !*** ./src/app_states/catalog/edit_button.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditButton)
/* harmony export */ });
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.js */ "./src/app_states/catalog/button.js");
/* harmony import */ var _common_graphics_brick_pattern_renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/graphics/brick_pattern_renderer.js */ "./src/common/graphics/brick_pattern_renderer.js");



class EditButton extends _button_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, size) {
        super(position, size, '', {
            brickWidth: 20,
            brickHeight: 10,
            mortarWidth: 1,
            mortarHeight: 1
        });
    }

    draw(ctx) {
        ctx.save();

        const brickOptions = {
            brickColor: this.hovered ? this.options.hoveredBrickColor : this.options.brickColor,
            mortarColor: this.options.mortarColor,
            brickWidth: this.options.brickWidth,
            brickHeight: this.options.brickHeight,
            mortarWidth: this.options.mortarWidth,
            mortarHeight: this.options.mortarHeight
        };

        _common_graphics_brick_pattern_renderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawBrickPattern(
            ctx,
            this.position.x, this.position.y,
            this.size.width, this.size.height,
            brickOptions
        );

        ctx.strokeStyle = this.hovered ? this.options.hoveredBorderColor : this.options.borderColor;
        ctx.lineWidth = this.hovered ? this.options.hoveredBorderWidth : this.options.borderWidth;
        ctx.strokeRect(this.position.x, this.position.y, this.size.width, this.size.height);

        this.drawGearIcon(ctx);

        ctx.restore();
    }

    drawGearIcon(ctx) {
        const centerX = this.position.x + this.size.width / 2;
        const centerY = this.position.y + this.size.height / 2;
        const outerRadius = 12;
        const innerRadius = 6;
        const numTeeth = 8;

        ctx.strokeStyle = '#000000';
        ctx.fillStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.lineJoin = 'round';

        ctx.beginPath();
        for (let i = 0; i < numTeeth; i++) {
            const angle = (i * 2 * Math.PI) / numTeeth;
            const nextAngle = ((i + 1) * 2 * Math.PI) / numTeeth;

            const outerX = centerX + Math.cos(angle) * outerRadius;
            const outerY = centerY + Math.sin(angle) * outerRadius;
            const outerXNext = centerX + Math.cos(nextAngle) * outerRadius;
            const outerYNext = centerY + Math.sin(nextAngle) * outerRadius;

            const innerAngle = angle + Math.PI / numTeeth;
            const innerX = centerX + Math.cos(innerAngle) * innerRadius;
            const innerY = centerY + Math.sin(innerAngle) * innerRadius;

            if (i === 0) {
                ctx.moveTo(outerX, outerY);
            } else {
                ctx.lineTo(outerX, outerY);
            }
            ctx.lineTo(outerXNext, outerYNext);
            ctx.lineTo(innerX, innerY);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(centerX, centerY, 3, 0, 2 * Math.PI);
        ctx.fillStyle = '#000000';
        ctx.fill();
    }
}

/***/ }),

/***/ "./src/app_states/catalog/level_card.js":
/*!**********************************************!*\
  !*** ./src/app_states/catalog/level_card.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LevelCard)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _common_graphics_brick_pattern_renderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/graphics/brick_pattern_renderer.js */ "./src/common/graphics/brick_pattern_renderer.js");
/* harmony import */ var _play_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./play_button.js */ "./src/app_states/catalog/play_button.js");
/* harmony import */ var _edit_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit_button.js */ "./src/app_states/catalog/edit_button.js");
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button.js */ "./src/app_states/catalog/button.js");
/* harmony import */ var _back_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./back_button.js */ "./src/app_states/catalog/back_button.js");
/* harmony import */ var _common_string_resources_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @common/string_resources.js */ "./src/common/string_resources.js");









class LevelCard {
    constructor(position, size, canvasSize) {
        this.position = position;
        this.size = size;
        this.canvasSize = canvasSize;

        this.level = null;
        this.description = _common_string_resources_js__WEBPACK_IMPORTED_MODULE_7__["default"].PUT_ASIDE_ALL_DOUBTS;

        this.playButton = null;
        this.editButton = null;
        this.prevButton = null;
        this.nextButton = null;
        this.backButton = null;

        this.initializeButtons();
    }

    initializeButtons() {
        this.playButton = new _play_button_js__WEBPACK_IMPORTED_MODULE_3__["default"](
            new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0),
            new _common_size_js__WEBPACK_IMPORTED_MODULE_1__["default"](160, 50),
            _common_string_resources_js__WEBPACK_IMPORTED_MODULE_7__["default"].PLAY
        );

        this.editButton = new _edit_button_js__WEBPACK_IMPORTED_MODULE_4__["default"](
            new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0),
            new _common_size_js__WEBPACK_IMPORTED_MODULE_1__["default"](40, 40)
        );

        this.prevButton = new _button_js__WEBPACK_IMPORTED_MODULE_5__["default"](
            new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0),
            new _common_size_js__WEBPACK_IMPORTED_MODULE_1__["default"](100, 40),
            `◀ ${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_7__["default"].PREV}`
        );

        this.nextButton = new _button_js__WEBPACK_IMPORTED_MODULE_5__["default"](
            new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0),
            new _common_size_js__WEBPACK_IMPORTED_MODULE_1__["default"](100, 40),
            `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_7__["default"].NEXT} ▶`
        );

        this.backButton = new _back_button_js__WEBPACK_IMPORTED_MODULE_6__["default"](
            new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0),
            new _common_size_js__WEBPACK_IMPORTED_MODULE_1__["default"](120, 45),
            _common_string_resources_js__WEBPACK_IMPORTED_MODULE_7__["default"].BACK
        );
    }

    setLevel(level) {
        this.level = level;
    }

    updateLayout(selectedIndex, totalLevels) {
        const cardCenterX = this.position.x + this.size.width / 2;
        const cardCenterY = this.position.y + this.size.height / 2;

        this.playButton.position = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            cardCenterX - this.playButton.size.width / 2,
            this.position.y + this.size.height - 80
        );

        this.editButton.position = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            this.position.x + this.size.width - this.editButton.size.width - 30,
            this.position.y + 28
        );

        this.prevButton.position = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            this.position.x - 120,
            cardCenterY - this.prevButton.size.height / 2
        );
        this.prevButton.visible = selectedIndex > 0;

        this.nextButton.position = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            this.position.x + this.size.width + 20,
            cardCenterY - this.nextButton.size.height / 2
        );
        this.nextButton.visible = selectedIndex < totalLevels - 1;

        this.backButton.position = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            this.position.x + (this.size.width - this.backButton.size.width) / 2,
            this.position.y + this.size.height + 20
        );
    }

    handleMouseMove(mousePoint) {
        this.playButton.hovered = this.playButton.isPointInside(mousePoint);
        this.editButton.hovered = this.editButton.isPointInside(mousePoint);
        this.prevButton.hovered = this.prevButton.isPointInside(mousePoint);
        this.nextButton.hovered = this.nextButton.isPointInside(mousePoint);
        this.backButton.hovered = this.backButton.isPointInside(mousePoint);

        return this.playButton.hovered || this.editButton.hovered ||
               this.prevButton.hovered || this.nextButton.hovered || this.backButton.hovered;
    }

    handleClick(clickPoint) {
        if (this.playButton.isPointInside(clickPoint)) {
            return { action: 'play', level: this.level };
        }
        if (this.editButton.isPointInside(clickPoint)) {
            return { action: 'edit', level: this.level };
        }
        if (this.prevButton.isPointInside(clickPoint) && this.prevButton.visible) {
            return { action: 'prev' };
        }
        if (this.nextButton.isPointInside(clickPoint) && this.nextButton.visible) {
            return { action: 'next' };
        }
        if (this.backButton.isPointInside(clickPoint)) {
            return { action: 'back' };
        }
        return null;
    }

    draw(ctx) {
        if (!this.level) return;

        ctx.save();

        this.drawCardBackground(ctx);
        this.drawTitle(ctx);
        this.drawDescription(ctx);
        this.drawButtons(ctx);

        ctx.restore();
    }

    drawCardBackground(ctx) {
        _common_graphics_brick_pattern_renderer_js__WEBPACK_IMPORTED_MODULE_2__["default"].drawBrickPattern(
            ctx,
            this.position.x, this.position.y,
            this.size.width, this.size.height,
            {
                brickColor: '#D2691E',
                mortarColor: '#8B4513',
                brickWidth: 60,
                brickHeight: 30,
                mortarWidth: 3,
                mortarHeight: 3
            }
        );

        ctx.strokeStyle = '#654321';
        ctx.lineWidth = 6;
        ctx.strokeRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }

    drawTitle(ctx) {
        ctx.font = 'bold 32px "Courier New", "Lucida Console", "Monaco", "DejaVu Sans Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const titleCenterX = this.position.x + this.size.width / 2;
        const titleCenterY = this.position.y + 50;

        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 4;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeText(this.level.name, titleCenterX, titleCenterY);

        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(this.level.name, titleCenterX, titleCenterY);
    }

    drawDescription(ctx) {
        ctx.font = 'bold 16px "Courier New", "Lucida Console", "Monaco", "DejaVu Sans Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const centerX = this.position.x + this.size.width / 2;
        const words = this.description.split(' ');
        const midPoint = Math.ceil(words.length / 2);
        const line1 = words.slice(0, midPoint).join(' ');
        const line2 = words.slice(midPoint).join(' ');

        const descCenterY1 = this.position.y + 88;
        const descCenterY2 = this.position.y + 108;

        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 3;
        ctx.strokeText(line1, centerX, descCenterY1);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(line1, centerX, descCenterY1);

        ctx.strokeStyle = '#000000';
        ctx.strokeText(line2, centerX, descCenterY2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(line2, centerX, descCenterY2);
    }

    drawButtons(ctx) {
        this.playButton.draw(ctx);
        this.editButton.draw(ctx);
        this.prevButton.draw(ctx);
        this.nextButton.draw(ctx);
        this.backButton.draw(ctx);
    }
}

/***/ }),

/***/ "./src/app_states/catalog/loading_screen.js":
/*!**************************************************!*\
  !*** ./src/app_states/catalog/loading_screen.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadingScreen)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");



class LoadingScreen {
    constructor(canvasSize) {
        this.canvasSize = canvasSize;
        this.center = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](canvasSize.width / 2, canvasSize.height / 2);
    }

    draw(ctx, loadingProgress) {
        ctx.save();

        this.drawLoadingText(ctx);
        this.drawProgressBar(ctx, loadingProgress);
        this.drawProgressPercentage(ctx, loadingProgress);

        ctx.restore();
    }

    drawLoadingText(ctx) {
        ctx.font = 'bold 32px "Courier New", "Lucida Console", "Monaco", "DejaVu Sans Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const loadingText = 'Loading Levels...';
        const textY = this.center.y - 80;

        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 4;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeText(loadingText, this.center.x, textY);

        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(loadingText, this.center.x, textY);
    }

    drawProgressBar(ctx, progress) {
        const radius = 60;
        const lineWidth = 8;

        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#654321';
        ctx.lineWidth = lineWidth;
        ctx.stroke();

        if (progress > 0) {
            ctx.beginPath();
            ctx.arc(this.center.x, this.center.y, radius, -Math.PI / 2, -Math.PI / 2 + (progress * 2 * Math.PI));
            ctx.strokeStyle = '#FFA500';
            ctx.lineWidth = lineWidth;
            ctx.lineCap = 'round';
            ctx.stroke();
        }
    }

    drawProgressPercentage(ctx, progress) {
        const percentText = Math.round(progress * 100) + '%';
        ctx.font = 'bold 24px "Courier New", "Lucida Console", "Monaco", "DejaVu Sans Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 3;
        ctx.strokeText(percentText, this.center.x, this.center.y);

        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(percentText, this.center.x, this.center.y);
    }
}

/***/ }),

/***/ "./src/app_states/catalog/play_button.js":
/*!***********************************************!*\
  !*** ./src/app_states/catalog/play_button.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayButton)
/* harmony export */ });
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.js */ "./src/app_states/catalog/button.js");


class PlayButton extends _button_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, size, text) {
        super(position, size, text, {
            font: 'bold 22px "Courier New", "Lucida Console", "Monaco", "DejaVu Sans Mono", monospace',
            brickColor: '#FFA500',
            mortarColor: '#ffffff',
            brickWidth: 40,
            brickHeight: 20,
            mortarWidth: 2,
            mortarHeight: 2,
            borderWidth: 4
        });
    }
}

/***/ }),

/***/ "./src/app_states/empty/empty_app_state.js":
/*!*************************************************!*\
  !*** ./src/app_states/empty/empty_app_state.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmptyAppState)
/* harmony export */ });
/* harmony import */ var _app_states_base_app_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app_states/base_app_state.js */ "./src/app_states/base_app_state.js");


class EmptyAppState extends _app_states_base_app_state_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

}

/***/ }),

/***/ "./src/app_states/game/active_game_state.js":
/*!**************************************************!*\
  !*** ./src/app_states/game/active_game_state.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActiveGameState)
/* harmony export */ });
/* harmony import */ var _app_states_game_game_state_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app_states/game/game_state_base.js */ "./src/app_states/game/game_state_base.js");


class ActiveGameState extends _app_states_game_game_state_base_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(renderCallback, world, canvasSize, onDestroyed, onVictory) {
        super(renderCallback);
        this.world = world;
        this.canvasSize = canvasSize;
        this.onDestroyed = onDestroyed;
        this.onVictory = onVictory;
    }

    canChangeState(newState) {
        return newState.name === 'PauseState' || 
               newState.name === 'DebugState' || 
               newState.name === 'VictoryState' || 
               newState.name === 'DestructionState';
    }

    update(deltaTime) {
        const updateWorldResult = this.world.update(deltaTime / 16, this.canvasSize);

        if (updateWorldResult.isDestroyed()) {
            if (this.onDestroyed) {
                this.onDestroyed(updateWorldResult);
            }
        } else if (updateWorldResult.isReachedEnd()) {
            if (this.onVictory) {
                this.onVictory();
            }
        }

        this.render();
    }
}

/***/ }),

/***/ "./src/app_states/game/debug_session.js":
/*!**********************************************!*\
  !*** ./src/app_states/game/debug_session.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DebugSession)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");



class DebugSession {
    constructor(world, inputController) {
        this.world = world;
        this.inputController = inputController;
        this.hoveredActor = null;
    }

    updateHoveredActor() {
        const mousePos = this.inputController.getMousePosition();
        this.hoveredActor = this.world.getHoveredObject(mousePos);
    }

    renderDebugOverlay(ctx, canvasSize) {
        this.updateHoveredActor();
        
        this.drawTextWithBackground(ctx, ['Debugging mode'], new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](10, 30));

        if (this.hoveredActor) {
            this.displayInfo(ctx, this.hoveredActor, this.world.worldOffset, canvasSize);
        }
    }

    displayInfo(ctx, actor, worldOffset, canvasSize) {
        if (!actor.isVisible(worldOffset, canvasSize)) {
            return;
        }

        const infoProvider = actor.getInfoProvider();
        const debugData = infoProvider.getDebugData();

        const visibleBounds = actor.getVisibleBounds(canvasSize, worldOffset);
        ctx.strokeStyle = 'rgba(255, 255, 0, 0.8)';
        ctx.lineWidth = 2;
        ctx.strokeRect(
            visibleBounds.coords.x + 1, 
            visibleBounds.coords.y + 1, 
            visibleBounds.size.width - 2, 
            visibleBounds.size.height - 2
        );
        
        const textPosition = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            visibleBounds.coords.x + visibleBounds.size.width + 5,
            visibleBounds.coords.y + 20
        );
        
        const texts = [
            `Type: ${actor.getType()}`,
            `ID: ${actor.id}`,
            `Bounds: (${Math.round(visibleBounds.coords.x)}, ${Math.round(visibleBounds.coords.y)}, ${visibleBounds.size.width}, ${visibleBounds.size.height})`,
            ...debugData
        ];
        
        this.drawTextWithBackground(ctx, texts, textPosition);
    }

    drawTextWithBackground(ctx, texts, position, lineHeight = 16) {
        if (!texts || texts.length === 0) return;
        
        let maxWidth = 0;
        ctx.font = '14px Arial';
        for (const text of texts) {
            const textWidth = ctx.measureText(text).width;
            maxWidth = Math.max(maxWidth, textWidth);
        }
        
        const padding = 4;
        const backgroundWidth = maxWidth + padding * 2;
        const backgroundHeight = texts.length * lineHeight + padding * 2;
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillRect(position.x - padding, position.y - padding - 12, backgroundWidth, backgroundHeight);
        
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.strokeRect(position.x - padding, position.y - padding - 12, backgroundWidth, backgroundHeight);
        
        ctx.fillStyle = 'red';
        ctx.font = '14px Arial';
        for (let i = 0; i < texts.length; i++) {
            ctx.fillText(texts[i], position.x, position.y + i * lineHeight);
        }
    }
}

/***/ }),

/***/ "./src/app_states/game/debug_state.js":
/*!********************************************!*\
  !*** ./src/app_states/game/debug_state.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DebugState)
/* harmony export */ });
/* harmony import */ var _app_states_game_game_state_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app_states/game/game_state_base.js */ "./src/app_states/game/game_state_base.js");
/* harmony import */ var _app_states_game_active_game_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app_states/game/active_game_state.js */ "./src/app_states/game/active_game_state.js");
/* harmony import */ var _app_states_game_debug_session_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app_states/game/debug_session.js */ "./src/app_states/game/debug_session.js");




class DebugState extends _app_states_game_game_state_base_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(renderCallback, world, inputController, ctx, canvasSize, onContinue, onGameOver, onLastFrameTimeUpdate) {
        super(renderCallback);
        this.needToCloseGame = false;
        this.onContinue = onContinue;
        this.onGameOver = onGameOver;
        this.onLastFrameTimeUpdate = onLastFrameTimeUpdate;
        this.ctx = ctx;
        this.canvasSize = canvasSize;
        this.debugSession = new _app_states_game_debug_session_js__WEBPACK_IMPORTED_MODULE_2__["default"](world, inputController);
    }

    canChangeState(newState) {
        return newState.name === 'ActiveGameState';
    }

    onEnter() {
        if (this.onLastFrameTimeUpdate) {
            this.onLastFrameTimeUpdate(null);
        }
    }

    update() {
        super.render();
        this.debugSession.renderDebugOverlay(this.ctx, this.canvasSize);
    }

    toggleOff() {
        if (this.needToCloseGame) {
            if (this.onGameOver) {
                this.onGameOver();
            }
        } else {
            if (this.onContinue) {
                this.onContinue();
            }
        }
    }
}

/***/ }),

/***/ "./src/app_states/game/destruction_state.js":
/*!**************************************************!*\
  !*** ./src/app_states/game/destruction_state.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DestructionState)
/* harmony export */ });
/* harmony import */ var _app_states_game_game_state_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app_states/game/game_state_base.js */ "./src/app_states/game/game_state_base.js");


class DestructionState extends _app_states_game_game_state_base_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(renderCallback, updateWorldResult, explosionEffect, crashText, shakeEffect, player, boundaryManager, onGameOver) {
        super(renderCallback);
        this.updateWorldResult = updateWorldResult;
        this.explosionEffect = explosionEffect;
        this.crashText = crashText;
        this.shakeEffect = shakeEffect;
        this.player = player;
        this.boundaryManager = boundaryManager;
        this.onGameOver = onGameOver;
        this.isActive = true;
    }

    canChangeState(newState) {
        return newState.name === 'DebugState';
    }

    onEnter() {
        this.explosionEffect.createExplosion(
            this.player.coords,
            this.player.size,
            this.boundaryManager.getGroundLevel()
        );
        this.crashText.start();
        this.shakeEffect.continueAfterStop(
            () => this.render(),
            () => {
                if (this.isActive && this.onGameOver) {
                    this.onGameOver();
                }
            }
        );
    }

    onExit(newState) {
        this.isActive = false;
        if (newState.name == 'DebugState') {
            newState.needToCloseGame = true;
        }
    }

    update(deltaTime) {
        this.shakeEffect.update(deltaTime / 16);
        this.explosionEffect.update();
        this.crashText.update(deltaTime / 16);
        this.render();
    }
}

/***/ }),

/***/ "./src/app_states/game/game_app_state.js":
/*!***********************************************!*\
  !*** ./src/app_states/game/game_app_state.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameAppState)
/* harmony export */ });
/* harmony import */ var _app_states_base_app_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app_states/base_app_state.js */ "./src/app_states/base_app_state.js");
/* harmony import */ var _common_game_explosion_explosion_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/game/explosion/explosion_effect.js */ "./src/common/game/explosion/explosion_effect.js");
/* harmony import */ var _common_game_crash_text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/game/crash_text.js */ "./src/common/game/crash_text.js");
/* harmony import */ var _common_game_victory_text_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/game/victory_text.js */ "./src/common/game/victory_text.js");
/* harmony import */ var _common_game_shake_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/game/shake_effect.js */ "./src/common/game/shake_effect.js");
/* harmony import */ var _common_game_world_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/game/world.js */ "./src/common/game/world.js");
/* harmony import */ var _common_game_pause_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @common/game/pause_menu.js */ "./src/common/game/pause_menu.js");
/* harmony import */ var _common_game_input_controller_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @common/game/input_controller.js */ "./src/common/game/input_controller.js");
/* harmony import */ var _app_states_game_active_game_state_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app_states/game/active_game_state.js */ "./src/app_states/game/active_game_state.js");
/* harmony import */ var _app_states_game_pause_state_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app_states/game/pause_state.js */ "./src/app_states/game/pause_state.js");
/* harmony import */ var _app_states_game_debug_state_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app_states/game/debug_state.js */ "./src/app_states/game/debug_state.js");
/* harmony import */ var _app_states_game_victory_state_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app_states/game/victory_state.js */ "./src/app_states/game/victory_state.js");
/* harmony import */ var _app_states_game_destruction_state_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app_states/game/destruction_state.js */ "./src/app_states/game/destruction_state.js");














class GameAppState extends _app_states_base_app_state_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(canvas, canvasSize) {
        super(canvas);
        this.ctx = canvas.getContext('2d');
        this.canvasSize = canvasSize;

        this.lastFrameTime = 0;
        this.animationId = null;
        this.currentState = null;

        this.pauseMenu = new _common_game_pause_menu_js__WEBPACK_IMPORTED_MODULE_6__["default"]();

        this.onMainMenu = () => {};
    }

    gameLoop(currentTime = 0) {
        if (this.currentState) {
            const deltaTime = this.lastFrameTime ? currentTime - this.lastFrameTime : 16;
            this.lastFrameTime = currentTime;
            this.currentState.update(deltaTime);
        }

        this.animationId = requestAnimationFrame((time) => this.gameLoop(time));
    }

    changeState(newState) {
        if (this.currentState && !this.currentState.canChangeState(newState)) {
            return false;
        }
        
        if (this.currentState) {
            this.currentState.onExit(newState);
        }
        this.currentState = newState;
        if (this.currentState) {
            this.currentState.onEnter();
        }
        return true;
    }

    render() {
        this.ctx.clearRect(-20, -20, this.canvas.width + 40, this.canvas.height + 40);

        const shakeOffset = this.shakeEffect.getOffset();

        this.ctx.save();
        this.ctx.translate(shakeOffset.x, shakeOffset.y);

        this.world.draw(this.ctx, this.canvasSize);
        this.player.draw(this.ctx);
        this.explosionEffect.draw(this.ctx);

        this.ctx.restore();

        this.crashText.draw(this.ctx, this.canvasSize);
        this.victoryText.draw(this.ctx, this.canvasSize);
    }

    activate(args) {
        this.canvas.style.display = 'block';
        this.ctx = this.canvas.getContext('2d');

        this.explosionEffect = new _common_game_explosion_explosion_effect_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.crashText = new _common_game_crash_text_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.victoryText = new _common_game_victory_text_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.shakeEffect = new _common_game_shake_effect_js__WEBPACK_IMPORTED_MODULE_4__["default"]();

        this.level = args.level;
        this.nextState = args.nextState;
        this.world = new _common_game_world_js__WEBPACK_IMPORTED_MODULE_5__["default"](args.level, true);
        this.player = this.world.player;

        this.inputController = new _common_game_input_controller_js__WEBPACK_IMPORTED_MODULE_7__["default"](this.player, this.canvas, this.world.objectManager);
        this.inputController.onPauseRequest = () => this.pauseGame();
        this.inputController.onDebugToggle = () => this.toggleDebugMode();
        this.inputController.onJump = () => this.world.jumpPlayer();
        this.lastFrameTime = null;
        
        this.changeState(new _app_states_game_active_game_state_js__WEBPACK_IMPORTED_MODULE_8__["default"](
            () => this.render(),
            this.world,
            this.canvasSize,
            (updateWorldResult) => this.handleDestroyed(updateWorldResult),
            () => this.handleVictory()
        ));
        this.gameLoop();
    }

    pauseGame() {
        this.changeState(new _app_states_game_pause_state_js__WEBPACK_IMPORTED_MODULE_9__["default"](
            () => this.render(),
            this.pauseMenu,
            () => this.resumeGame(),
            () => this.onMainMenu(),
            (time) => { this.lastFrameTime = time; }
        ));
    }

    resumeGame() {
        this.changeState(new _app_states_game_active_game_state_js__WEBPACK_IMPORTED_MODULE_8__["default"](
            () => this.render(),
            this.world,
            this.canvasSize,
            (updateWorldResult) => this.handleDestroyed(updateWorldResult),
            () => this.handleVictory()
        ));
    }

    toggleDebugMode() {
        if (!this.currentState) return;

        if (this.currentState.name === 'DebugState') {
            this.currentState.toggleOff();
        } else {
            this.changeState(new _app_states_game_debug_state_js__WEBPACK_IMPORTED_MODULE_10__["default"](
                () => this.render(),
                this.world,
                this.inputController,
                this.ctx,
                this.canvasSize,
                () => this.resumeGame(),
                () => this.onExit(this.nextState, this.level),
                (time) => { this.lastFrameTime = time; }
            ));
        }
    }

    handleDestroyed(updateWorldResult) {
        this.changeState(new _app_states_game_destruction_state_js__WEBPACK_IMPORTED_MODULE_12__["default"](
            () => this.render(),
            updateWorldResult,
            this.explosionEffect,
            this.crashText,
            this.shakeEffect,
            this.player,
            this.world.boundaryManager,
            () => this.onExit(this.nextState, this.level)
        ));
    }

    handleVictory() {
        this.changeState(new _app_states_game_victory_state_js__WEBPACK_IMPORTED_MODULE_11__["default"](
            () => this.render(),
            this.victoryText,
            () => this.onExit(this.nextState, this.level)
        ));
    }

    deactivate() {
        this.currentState = null;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    destroy() {
        this.deactivate();
        if (this.inputController) {
            this.inputController.destroy();
        }
    }
}

/***/ }),

/***/ "./src/app_states/game/game_state_base.js":
/*!************************************************!*\
  !*** ./src/app_states/game/game_state_base.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameStateBase)
/* harmony export */ });
class GameStateBase {
    constructor(renderCallback) {
        this.renderCallback = renderCallback;
        this.name = this.constructor.name;
    }

    update(deltaTime) {
    }

    render() {
        if (this.renderCallback) {
            this.renderCallback();
        }
    }

    canChangeState(newState) {
        return true;
    }

    onEnter() {
    }

    onExit(newState) {
    }
}

/***/ }),

/***/ "./src/app_states/game/pause_state.js":
/*!********************************************!*\
  !*** ./src/app_states/game/pause_state.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PauseState)
/* harmony export */ });
/* harmony import */ var _app_states_game_game_state_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app_states/game/game_state_base.js */ "./src/app_states/game/game_state_base.js");
/* harmony import */ var _app_states_game_active_game_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app_states/game/active_game_state.js */ "./src/app_states/game/active_game_state.js");



class PauseState extends _app_states_game_game_state_base_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(renderCallback, pauseMenu, onContinue, onMainMenu, onLastFrameTimeUpdate) {
        super(renderCallback);
        this.pauseMenu = pauseMenu;
        this.onContinue = onContinue;
        this.onMainMenu = onMainMenu;
        this.onLastFrameTimeUpdate = onLastFrameTimeUpdate;
    }

    canChangeState(newState) {
        return newState.name === 'ActiveGameState';
    }

    onEnter() {
        this.pauseMenu.onContinueClick = () => {
            if (this.onContinue) {
                this.onContinue();
            }
        };
        this.pauseMenu.onMainMenuClick = () => {
            if (this.onContinue) {
                this.onContinue();
            }
            if (this.onMainMenu) {
                this.onMainMenu();
            }
        };
        this.pauseMenu.show();
    }

    onExit(newState) {
        this.pauseMenu.hide();
        if (this.onLastFrameTimeUpdate) {
            this.onLastFrameTimeUpdate(performance.now());
        }
    }
}

/***/ }),

/***/ "./src/app_states/game/victory_state.js":
/*!**********************************************!*\
  !*** ./src/app_states/game/victory_state.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VictoryState)
/* harmony export */ });
/* harmony import */ var _app_states_game_game_state_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app_states/game/game_state_base.js */ "./src/app_states/game/game_state_base.js");


class VictoryState extends _app_states_game_game_state_base_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(renderCallback, victoryText, onVictory) {
        super(renderCallback);
        this.victoryText = victoryText;
        this.onVictory = onVictory;
        this.victoryTimeout = null;
    }

    canChangeState(newState) {
        return false;
    }

    onEnter() {
        this.victoryText.start();
        this.victoryTimeout = setTimeout(() => {
            if (this.onVictory) {
                this.onVictory();
            }
        }, 2000);
    }

    onExit(newState) {
        if (this.victoryTimeout) {
            clearTimeout(this.victoryTimeout);
            this.victoryTimeout = null;
        }
    }

    update(deltaTime) {
        this.victoryText.update(deltaTime / 16);
        this.render();
    }
}

/***/ }),

/***/ "./src/app_states/level_designer/base_level_designer_manager.js":
/*!**********************************************************************!*\
  !*** ./src/app_states/level_designer/base_level_designer_manager.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseLevelDesignerManager)
/* harmony export */ });
class BaseLevelDesignerManager {
    activate() {

    }

    deactivate() {

    }
}

/***/ }),

/***/ "./src/app_states/level_designer/boundary_editor.js":
/*!**********************************************************!*\
  !*** ./src/app_states/level_designer/boundary_editor.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoundaryEditor)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _app_states_level_designer_base_level_designer_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app_states/level_designer/base_level_designer_manager.js */ "./src/app_states/level_designer/base_level_designer_manager.js");
/* harmony import */ var _common_string_resources_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/string_resources.js */ "./src/common/string_resources.js");





class BoundaryEditor extends _app_states_level_designer_base_level_designer_manager_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(world, eventHandler) {
        super();
        this.world = world;
        this.eventHandler = eventHandler;
        this.selectedBoundary = null;
        this.selectedBoundaryType = null;
        
        this.controlsContainer = null;
        this.widthInput = null;
        this.heightInput = null;
        this.titleElement = null;
        
        this.createInputControls();
        this.subscribeToEventHandler();
    }
    
    subscribeToEventHandler() {
        if (this.eventHandler) {
            this.eventHandler.addOnMouseDownCallback((selectedObject, point, ctrlPressed) => {
                if (selectedObject?.getType().includes('boundary')) {
                    const boundaryType = selectedObject.type;
                    if (boundaryType) {
                        this.selectBoundary(boundaryType);
                        this.show();
                    }
                } else {
                    this.hide();
                }
            });
        }
    }
    
    createInputControls() {
        this.controlsContainer = document.createElement('div');
        this.controlsContainer.style.cssText = `
            position: fixed;
            bottom: 220px;
            left: 10px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 12px;
            z-index: 1000;
            min-width: 200px;
        `;
        
        this.titleElement = document.createElement('div');
        this.titleElement.textContent = 'Boundary Editor';
        this.titleElement.style.cssText = `
            font-weight: bold;
            margin-bottom: 10px;
            border-bottom: 1px solid #444;
            padding-bottom: 5px;
        `;
        this.controlsContainer.appendChild(this.titleElement);
        
        const widthLabel = document.createElement('label');
        widthLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_3__["default"].WIDTH}:`;
        widthLabel.style.display = 'block';
        widthLabel.style.marginBottom = '5px';
        this.controlsContainer.appendChild(widthLabel);
        
        this.widthInput = document.createElement('input');
        this.widthInput.type = 'number';
        this.widthInput.min = '10';
        this.widthInput.max = '200';
        this.widthInput.value = '50';
        this.widthInput.step = 10;
        this.widthInput.style.cssText = `
            width: 100%;
            margin-bottom: 10px;
            padding: 3px;
            background: #333;
            color: white;
            border: 1px solid #555;
        `;
        this.widthInput.disabled = true;
        this.controlsContainer.appendChild(this.widthInput);
        
        const heightLabel = document.createElement('label');
        heightLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_3__["default"].HEIGHT}:`;
        heightLabel.style.display = 'block';
        heightLabel.style.marginBottom = '5px';
        this.controlsContainer.appendChild(heightLabel);
        
        this.heightInput = document.createElement('input');
        this.heightInput.type = 'number';
        this.heightInput.min = '10';
        this.heightInput.max = '200';
        this.heightInput.value = '50';
        this.heightInput.step = 10;
        this.heightInput.style.cssText = `
            width: 100%;
            margin-bottom: 10px;
            padding: 3px;
            background: #333;
            color: white;
            border: 1px solid #555;
        `;
        this.heightInput.disabled = true;
        this.controlsContainer.appendChild(this.heightInput);
    }
    
    attachEventListeners() {
        this.widthInput.addEventListener('input', () => {
            this.applyBoundaryChanges();
        });
        
        this.heightInput.addEventListener('input', () => {
            this.applyBoundaryChanges();
        });
    }
    
    detachEventListeners() {

    }
    
    onBoundarySelected(boundaryType) {
        this.selectedBoundaryType = boundaryType;
        
        if (!boundaryType) {
            this.selectedBoundary = null;
            this.widthInput.disabled = true;
            this.heightInput.disabled = true;
            return;
        }
        
        this.selectedBoundary = this.world.boundaries[boundaryType];
        
        const boundaryNames = {
            'left': 'Left Boundary',
            'right': 'Right Boundary', 
            'top': 'Top Boundary',
            'bottom': 'Bottom Boundary'
        };
        this.titleElement.textContent = `Edit ${boundaryNames[boundaryType]}`;
        
        if (boundaryType === 'left' || boundaryType === 'right') {
            this.widthInput.disabled = false;
            this.heightInput.disabled = true;
            this.widthInput.value = this.selectedBoundary.size.width;
            this.heightInput.value = this.selectedBoundary.size.height;
        } else if (boundaryType === 'top' || boundaryType === 'bottom') {
            this.widthInput.disabled = true;
            this.heightInput.disabled = false;
            this.widthInput.value = this.selectedBoundary.size.width;
            this.heightInput.value = this.selectedBoundary.size.height;
        }
    }
    
    applyBoundaryChanges() {
        if (!this.selectedBoundary || !this.selectedBoundaryType) return;
        
        const newWidth = parseInt(this.widthInput.value);
        const newHeight = parseInt(this.heightInput.value);
        
        if (isNaN(newWidth) || isNaN(newHeight) || newWidth < 10 || newHeight < 10) {
            return;
        }

        this.updateBoundarySize(this.selectedBoundaryType, new _common_size_js__WEBPACK_IMPORTED_MODULE_1__["default"](newWidth, newHeight));
    }
    
    updateBoundarySize(boundaryType, newSize) {
        const boundary = this.world.boundaries[boundaryType];
        const worldSize = this.world.size;
        
        switch (boundaryType) {
            case 'left':
                boundary.size = new _common_size_js__WEBPACK_IMPORTED_MODULE_1__["default"](newSize.width, worldSize.height);
                boundary.coords = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
                break;
                
            case 'right':
                boundary.size = new _common_size_js__WEBPACK_IMPORTED_MODULE_1__["default"](newSize.width, worldSize.height);
                boundary.coords = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](worldSize.width - newSize.width, 0);
                break;
                
            case 'top':
                boundary.size = new _common_size_js__WEBPACK_IMPORTED_MODULE_1__["default"](worldSize.width, newSize.height);
                boundary.coords = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
                break;
                
            case 'bottom':
                boundary.size = new _common_size_js__WEBPACK_IMPORTED_MODULE_1__["default"](worldSize.width, newSize.height);
                boundary.coords = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, worldSize.height - newSize.height);
                break;
        }
        
        this.updateLevelBoundaryData(boundaryType, boundary);
    }
    
    updateLevelBoundaryData(boundaryType, boundary) {
        const boundaryObject = this.world.boundaries[boundaryType];
        if (boundaryObject) {
            boundaryObject.coords = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](boundary.coords.x, boundary.coords.y);
            boundaryObject.size = new _common_size_js__WEBPACK_IMPORTED_MODULE_1__["default"](boundary.size.width, boundary.size.height);
        }
    }
    
    selectBoundary(boundaryType) {
        if (!boundaryType) return;
        
        this.onBoundarySelected(boundaryType);
    }
    
    getSelectedBoundary() {
        return this.selectedBoundary;
    }
    
    getSelectedBoundaryType() {
        return this.selectedBoundaryType;
    }
    
    show() {
        this.controlsContainer.style.display = 'block';
    }
    
    hide() {
        this.controlsContainer.style.display = 'none';
        this.selectedBoundary = null;
        this.selectedBoundaryType = null;
        this.titleElement.textContent = 'Boundary Editor';
    }

    activate() {
        document.body.appendChild(this.controlsContainer);
        this.attachEventListeners();
        this.hide();
    }

    deactivate() {
        document.body.removeChild(this.controlsContainer);
        this.detachEventListeners();
    }
}

/***/ }),

/***/ "./src/app_states/level_designer/drag_manager.js":
/*!*******************************************************!*\
  !*** ./src/app_states/level_designer/drag_manager.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DragManager)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _app_states_level_designer_base_level_designer_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app_states/level_designer/base_level_designer_manager.js */ "./src/app_states/level_designer/base_level_designer_manager.js");



class DragManager extends _app_states_level_designer_base_level_designer_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(world, canvas, scrollManager, selectionManager, eventHandler) {
        super();
        this.world = world;
        this.canvas = canvas;
        this.scrollManager = scrollManager;
        this.selectionManager = selectionManager;
        this.eventHandler = eventHandler;
        
        this.mousePressed = false;
        this.isDraggingObject = false;
        this.wasDragging = false;

        this.prevPoint = null;
        this.gridStep = 10;

        this.selectedObject = null;
        this.ctrlPressed = false;
        this.containsObject = false;
        
        this.subscribeToEventHandler();
        this.snapPointToGrid = this.snapPointToGrid.bind(this);
    }
    
    subscribeToEventHandler() {
        this.eventHandler.addOnMouseDownCallback((selectedObject, point, ctrlPressed) => {
            if (this.scrollManager.isInScrollMode()) {
                return;
            }

            this.ctrlPressed = ctrlPressed;
            this.selectedObject = selectedObject;
            this.mousePressed = true;
            this.prevPoint = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](point.x, point.y);

            if (!this.selectedObject) {
                this.selectionManager.clearSelection();
            } else {
                this.containsObject = this.selectionManager.contains(this.selectedObject);
                if (!this.containsObject) {
                    this.selectionManager.addToSelection(this.selectedObject, this.ctrlPressed);
                }
            }
        });
        
        this.eventHandler.addOnMouseMoveCallback((point) => {
            if (this.mousePressed) {
                this.handleDragMove(point);
            }
        });
        
        this.eventHandler.addOnMouseUpCallback(() => {
            this.mousePressed = false;

            if (this.scrollManager.isInScrollMode()) {
                return;
            }

            if (this.isDraggingObject) {
                this.endDrag();
            } else {
                if (this.containsObject) {
                    this.selectionManager.removeFromSelection(this.selectedObject);
                }
            }
        });
    }
    
    handleDragMove(point) {
        if (this.scrollManager.isInScrollMode()) {
            return;
        }
        if (!this.selectedObject || !this.mousePressed) {
            return;
        }
        const objectType = this.selectedObject.getType();
        if (objectType != 'CubePlayer' && objectType != 'Brick' && objectType != 'JumpOrb' && objectType != 'Spike') {
            return;
        }

        let offset = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            point.x - this.prevPoint.x,
            point.y - this.prevPoint.y
        );

        this.selectionManager.move(offset, this.snapPointToGrid);
        this.prevPoint = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](point.x, point.y);

        this.isDraggingObject = true;
    }
    
    endDrag() {
        if (this.isDraggingObject) {
            this.isDraggingObject = false;
        }
    }
    
    snapPointToGrid(point) {
        const worldOffset = this.world.worldOffset;
        
        const adjustedX = point.x + worldOffset.x;
        const adjustedY = point.y + worldOffset.y;
        
        const snappedX = Math.floor(adjustedX / this.gridStep) * this.gridStep - worldOffset.x;
        const snappedY = Math.floor(adjustedY / this.gridStep) * this.gridStep - worldOffset.y;
        
        return new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](snappedX, snappedY);
    }
    
    isDragging() {
        return this.isDraggingObject;
    }
    
    getDraggedObjects() {
        return this.draggedObjects;
    }
}

/***/ }),

/***/ "./src/app_states/level_designer/event_handler.js":
/*!********************************************************!*\
  !*** ./src/app_states/level_designer/event_handler.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventHandler)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");


class EventHandler {
    constructor(world, playerOptions, canvas) {
        this.world = world;
        this.playerOptions = playerOptions;
        this.canvas = canvas;
        
        this.onMouseClick = [];
        this.onMouseDown = [];
        this.onMouseUp = [];
        this.onMouseMove = [];
        this.onKeyDown = [];
        
        this.handleMouseClick = this.handleMouseClick.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    addOnMouseClickCallback(callback) {
        this.onMouseClick.push(callback);
    }

    addOnMouseDownCallback(callback) {
        this.onMouseDown.push(callback);
    }
    
    addOnMouseUpCallback(callback) {
        this.onMouseUp.push(callback);
    }
    
    addOnMouseMoveCallback(callback) {
        this.onMouseMove.push(callback);
    }
    
    addOnKeyDownCallback(callback) {
        this.onKeyDown.push(callback);
    }

    activate() {
        this.canvas.addEventListener('click', this.handleMouseClick);
        this.canvas.addEventListener('mousedown', this.handleMouseDown);
        this.canvas.addEventListener('mousemove', this.handleMouseMove);
        this.canvas.addEventListener('mouseup', this.handleMouseUp);
        document.addEventListener('keydown', this.handleKeyDown);
    }
    
    deactivate() {
        this.canvas.removeEventListener('click', this.handleMouseClick);
        this.canvas.removeEventListener('mousedown', this.handleMouseDown);
        this.canvas.removeEventListener('mousemove', this.handleMouseMove);
        this.canvas.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleMouseDown(event) {
        const rect = this.canvas.getBoundingClientRect();
        const mousePos = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            event.clientX - rect.left,
            event.clientY - rect.top
        )
        
        const hoveredObject = this.world.getHoveredObject(mousePos, this.playerOptions);
        const isCtrlPressed = event.ctrlKey || event.metaKey;
        
        this.onMouseDown.forEach(callback => callback(hoveredObject, mousePos, isCtrlPressed));
    }

    handleMouseClick(event) {
        const rect = this.canvas.getBoundingClientRect();
        const mousePos = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            event.clientX - rect.left,
            event.clientY - rect.top
        )
        this.onMouseClick.forEach(callback => callback(mousePos));
    }
    
    handleMouseMove(event) {
        const rect = this.canvas.getBoundingClientRect();
        const mousePos = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            event.clientX - rect.left,
            event.clientY - rect.top
        )
        this.onMouseMove.forEach(callback => callback(mousePos));
    }

    handleMouseUp(event) {
        const rect = this.canvas.getBoundingClientRect();
        const mousePos = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            event.clientX - rect.left,
            event.clientY - rect.top
        )
        this.onMouseUp.forEach(callback => callback(mousePos));
    }
    
    handleKeyDown(event) {
        this.onKeyDown.forEach(callback => callback(event));
    }
}

/***/ }),

/***/ "./src/app_states/level_designer/game_size_manager.js":
/*!************************************************************!*\
  !*** ./src/app_states/level_designer/game_size_manager.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameSizeManager)
/* harmony export */ });
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _app_states_level_designer_base_level_designer_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app_states/level_designer/base_level_designer_manager.js */ "./src/app_states/level_designer/base_level_designer_manager.js");
/* harmony import */ var _common_string_resources_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/string_resources.js */ "./src/common/string_resources.js");




class GameSizeManager extends _app_states_level_designer_base_level_designer_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(world) {
        super();
        this.world = world;
        this.controlsContainer = null;
        this.gameWidthInput = null;
        this.gameHeightInput = null;
        
        this.minWidth = 1290;
        this.minHeight = 860;
        
        this.onSizeChanged = null;
        
        this.handleWidthInput = this.handleWidthInput.bind(this);
        this.handleHeightInput = this.handleHeightInput.bind(this);
        
        this.createInputControls();
    }

    createInputControls() {
        this.controlsContainer = document.createElement('div');
        this.controlsContainer.id = 'level-designer-controls';
        this.controlsContainer.style.cssText = `
            position: fixed;
            bottom: 80px;
            left: 10px;
            background: rgba(0, 0, 0, 0.8);
            padding: 15px;
            border-radius: 8px;
            color: white;
            font-family: Arial, sans-serif;
            font-size: 14px;
            z-index: 1000;
        `;

        const label = document.createElement('div');
        label.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_2__["default"].GAME_SIZE}:`;
        label.style.cssText = `
            margin-bottom: 10px;
            font-weight: bold;
            color: #fff;
        `;
        this.controlsContainer.appendChild(label);

        const widthContainer = document.createElement('div');
        widthContainer.style.cssText = `
            margin-bottom: 8px;
            display: flex;
            align-items: center;
        `;

        const widthLabel = document.createElement('label');
        widthLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_2__["default"].WIDTH}: `;
        widthLabel.style.cssText = `
            display: inline-block;
            width: 50px;
            color: #ccc;
        `;

        this.gameWidthInput = document.createElement('input');
        this.gameWidthInput.type = 'text';
        this.gameWidthInput.value = this.world.size.width;
        this.gameWidthInput.style.cssText = `
            width: 80px;
            padding: 4px;
            margin-left: 5px;
            border: 1px solid #555;
            background: #333;
            color: white;
            border-radius: 4px;
        `;

        const minWidthLabel = document.createElement('span');
        minWidthLabel.textContent = ` (${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_2__["default"].MIN}: ${this.minWidth})`;
        minWidthLabel.style.cssText = `
            margin-left: 5px;
            color: #888;
            font-size: 12px;
        `;

        widthContainer.appendChild(widthLabel);
        widthContainer.appendChild(this.gameWidthInput);
        widthContainer.appendChild(minWidthLabel);
        this.controlsContainer.appendChild(widthContainer);

        const heightContainer = document.createElement('div');
        heightContainer.style.cssText = `
            display: flex;
            align-items: center;
        `;

        const heightLabel = document.createElement('label');
        heightLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_2__["default"].HEIGHT}: `;
        heightLabel.style.cssText = `
            display: inline-block;
            width: 50px;
            color: #ccc;
        `;

        this.gameHeightInput = document.createElement('input');
        this.gameHeightInput.type = 'text';
        this.gameHeightInput.value = this.world.size.height;
        this.gameHeightInput.style.cssText = `
            width: 80px;
            padding: 4px;
            margin-left: 5px;
            border: 1px solid #555;
            background: #333;
            color: white;
            border-radius: 4px;
        `;

        const minHeightLabel = document.createElement('span');
        minHeightLabel.textContent = ` (${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_2__["default"].MIN}: ${this.minHeight})`;
        minHeightLabel.style.cssText = `
            margin-left: 5px;
            color: #888;
            font-size: 12px;
        `;

        heightContainer.appendChild(heightLabel);
        heightContainer.appendChild(this.gameHeightInput);
        heightContainer.appendChild(minHeightLabel);
        this.controlsContainer.appendChild(heightContainer);

        return this.controlsContainer;
    }

    handleWidthInput() {
        const inputValue = this.gameWidthInput.value.trim();
        const value = Number(inputValue);

        if (this.isValidValue(value, this.minWidth)) {
            this.gameWidthInput.style.borderColor = '#555';
            const correctedValue = this.correctToMultipleOf10(value);
            this.world.changeGameSize(new _common_size_js__WEBPACK_IMPORTED_MODULE_0__["default"](correctedValue, this.world.size.height));
            this.onSizeChanged();
        } else {
            this.gameWidthInput.style.borderColor = '#ff4444';
        }
    }

    isValidValue(value, minValue) {
        return !isNaN(value) &&
               value >= minValue &&
               value > 0;
    }

    correctToMultipleOf10(value) {
        return Math.round(value / 10) * 10;
    }
    
    handleHeightInput() {
        const inputValue = this.gameHeightInput.value.trim();
        const value = Number(inputValue);

        if (this.isValidValue(value, this.minHeight)) {
            this.gameHeightInput.style.borderColor = '#555';
            const correctedValue = this.correctToMultipleOf10(value);
            this.world.changeGameSize(new _common_size_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.world.size.width, correctedValue));
            if (this.onSizeChanged) {
                this.onSizeChanged();
            }
        } else {
            this.gameHeightInput.style.borderColor = '#ff4444';
        }
    }
    
    attachEventListeners() {
        this.gameWidthInput.addEventListener('blur', this.handleWidthInput);
        this.gameWidthInput.addEventListener('change', this.handleWidthInput);
        this.gameHeightInput.addEventListener('blur', this.handleHeightInput);
        this.gameHeightInput.addEventListener('change', this.handleHeightInput);
    }

    detachEventListeners() {
        this.gameWidthInput.removeEventListener('blur', this.handleWidthInput);
        this.gameWidthInput.removeEventListener('change', this.handleWidthInput);
        this.gameHeightInput.removeEventListener('blur', this.handleHeightInput);
        this.gameHeightInput.removeEventListener('change', this.handleHeightInput);
    }

    getContainer() {
        return this.controlsContainer;
    }

    activate() {
        document.body.appendChild(this.controlsContainer);
        this.attachEventListeners();
    }

    deactivate() {
        document.body.removeChild(this.controlsContainer);
        this.detachEventListeners();
    }
}

/***/ }),

/***/ "./src/app_states/level_designer/level_designer_app_state.js":
/*!*******************************************************************!*\
  !*** ./src/app_states/level_designer/level_designer_app_state.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LevelDesignerAppState)
/* harmony export */ });
/* harmony import */ var _app_states_base_app_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app_states/base_app_state.js */ "./src/app_states/base_app_state.js");
/* harmony import */ var _common_game_world_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/game/world.js */ "./src/common/game/world.js");
/* harmony import */ var _common_levels_level_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/levels/level_factory.js */ "./src/common/levels/level_factory.js");
/* harmony import */ var _app_states_level_designer_game_size_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app_states/level_designer/game_size_manager.js */ "./src/app_states/level_designer/game_size_manager.js");
/* harmony import */ var _app_states_level_designer_scroll_manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app_states/level_designer/scroll_manager.js */ "./src/app_states/level_designer/scroll_manager.js");
/* harmony import */ var _app_states_level_designer_object_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app_states/level_designer/object_manager.js */ "./src/app_states/level_designer/object_manager.js");
/* harmony import */ var _app_states_level_designer_drag_manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app_states/level_designer/drag_manager.js */ "./src/app_states/level_designer/drag_manager.js");
/* harmony import */ var _app_states_level_designer_level_manager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app_states/level_designer/level_manager.js */ "./src/app_states/level_designer/level_manager.js");
/* harmony import */ var _app_states_level_designer_boundary_editor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app_states/level_designer/boundary_editor.js */ "./src/app_states/level_designer/boundary_editor.js");
/* harmony import */ var _app_states_level_designer_player_editor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app_states/level_designer/player_editor.js */ "./src/app_states/level_designer/player_editor.js");
/* harmony import */ var _common_game_player_options_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @common/game/player_options.js */ "./src/common/game/player_options.js");
/* harmony import */ var _app_states_level_designer_selection_selection_manager_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app_states/level_designer/selection/selection_manager.js */ "./src/app_states/level_designer/selection/selection_manager.js");
/* harmony import */ var _app_states_level_designer_ui_manager_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app_states/level_designer/ui_manager.js */ "./src/app_states/level_designer/ui_manager.js");
/* harmony import */ var _app_states_level_designer_event_handler_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app_states/level_designer/event_handler.js */ "./src/app_states/level_designer/event_handler.js");















class LevelDesignerAppState extends _app_states_base_app_state_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(canvas, canvasSize) {
        super(canvas);

        this.onTestLevel = () => {};

        this.canvasSize = canvasSize;
        this.ctx = canvas.getContext('2d');
    }

    activate(args) {
        this.canvas.style.display = 'block';

        const level = args?.level || _common_levels_level_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"].createEmptyLevel(this.canvasSize);
        this.world = new _common_game_world_js__WEBPACK_IMPORTED_MODULE_1__["default"](level, false);
        this.player = this.world.player;

        this.playerOptions = new _common_game_player_options_js__WEBPACK_IMPORTED_MODULE_10__["default"](false);

        this.eventHandler = new _app_states_level_designer_event_handler_js__WEBPACK_IMPORTED_MODULE_13__["default"](this.world, this.playerOptions, this.canvas);
        this.eventHandler.activate();

        this.selectionManager = new _app_states_level_designer_selection_selection_manager_js__WEBPACK_IMPORTED_MODULE_11__["default"](this.world, this.eventHandler);

        this.scrollManager = new _app_states_level_designer_scroll_manager_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.world, this.canvas, this.canvasSize, this.eventHandler);
        this.scrollManager.activate();

        this.dragManager = new _app_states_level_designer_drag_manager_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.world, this.canvas, this.scrollManager, this.selectionManager, this.eventHandler);
        this.dragManager.activate();

        this.gameSizeManager = new _app_states_level_designer_game_size_manager_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.world);
        this.gameSizeManager.onSizeChanged = () => {
            this.scrollManager.onWorldSizeChanged();
        };
        this.gameSizeManager.activate();
        
        this.objectManager = new _app_states_level_designer_object_manager_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.world, this.canvasSize, this.eventHandler, this.selectionManager);
        this.objectManager.activate();

        this.levelManager = new _app_states_level_designer_level_manager_js__WEBPACK_IMPORTED_MODULE_7__["default"](this.world);
        this.levelManager.onTestLevel = (level) => {
            this.onTestLevel(level);
        };
        this.levelManager.onLevelChanged = (level) => {
            this.deactivate();
            this.activate({level: level});
        }
        this.levelManager.activate();
        
        this.boundaryEditor = new _app_states_level_designer_boundary_editor_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.world, this.eventHandler);
        this.boundaryEditor.activate();

        this.playerEditor = new _app_states_level_designer_player_editor_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.world, this.eventHandler);
        this.playerEditor.activate();

        this.uiManager = new _app_states_level_designer_ui_manager_js__WEBPACK_IMPORTED_MODULE_12__["default"](this.scrollManager, this.world, this.canvasSize);
        this.uiManager.onBack = () => {
            this.onExit();
        };
        this.uiManager.activate();

        this.gameLoop();
    }

    gameLoop() {
        this.draw(this.ctx);
        this.animationId = requestAnimationFrame((time) => this.gameLoop(time));
    }

    deactivate() {
        super.deactivate();
        this.eventHandler.deactivate();
        this.scrollManager.deactivate();
        this.dragManager.deactivate();

        this.gameSizeManager.deactivate();
        this.objectManager.deactivate();
        this.boundaryEditor.deactivate();
        this.playerEditor.deactivate();

        this.levelManager.deactivate();
        this.uiManager.deactivate();

        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
        this.uiManager.drawBackground(ctx);
        this.uiManager.drawGrid(ctx);
        this.world.draw(ctx, this.canvasSize, this.playerOptions);

        this.selectionManager.drawSelection(ctx, this.canvasSize, this.world.worldOffset, this.playerOptions);
        this.scrollManager.updateScrollbars();
        this.uiManager.drawUI(ctx);
    }
}

/***/ }),

/***/ "./src/app_states/level_designer/level_manager.js":
/*!********************************************************!*\
  !*** ./src/app_states/level_designer/level_manager.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LevelManager)
/* harmony export */ });
/* harmony import */ var _common_levels_level_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/levels/level.js */ "./src/common/levels/level.js");
/* harmony import */ var _common_levels_world_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/levels/world_data.js */ "./src/common/levels/world_data.js");
/* harmony import */ var _common_levels_player_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/levels/player_data.js */ "./src/common/levels/player_data.js");
/* harmony import */ var _common_levels_brick_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/levels/brick_data.js */ "./src/common/levels/brick_data.js");
/* harmony import */ var _common_levels_jump_orb_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/levels/jump_orb_data.js */ "./src/common/levels/jump_orb_data.js");
/* harmony import */ var _common_levels_spike_data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/levels/spike_data.js */ "./src/common/levels/spike_data.js");
/* harmony import */ var _common_levels_boundary_data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @common/levels/boundary_data.js */ "./src/common/levels/boundary_data.js");
/* harmony import */ var _common_levels_game_bounds_data_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @common/levels/game_bounds_data.js */ "./src/common/levels/game_bounds_data.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_game_actors_boundary_boundary_background_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @common/game/actors/boundary/boundary_background.js */ "./src/common/game/actors/boundary/boundary_background.js");
/* harmony import */ var _common_string_resources_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @common/string_resources.js */ "./src/common/string_resources.js");













class LevelManager {
    constructor(world) {
        this.world = world;
        this.controlsContainer = null;
        this.testLevelButton = null;
        this.downloadLevelButton = null;
        this.uploadLevelButton = null;
        this.resetButton = null;
        this.fileInput = null;

        this.onTestLevel = () => {};
        this.onLevelChanged = () => {};
        this.handleTestLevel = this.handleTestLevel.bind(this);
        this.handleDownloadLevel = this.handleDownloadLevel.bind(this);
        this.handleUploadLevel = this.handleUploadLevel.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleFileSelect = this.handleFileSelect.bind(this);
    }

    createTestLevelButton() {
        this.testLevelButton = document.createElement('button');
        this.testLevelButton.textContent = _common_string_resources_js__WEBPACK_IMPORTED_MODULE_11__["default"].TEST_LEVEL;
        this.testLevelButton.style.cssText = `
            position: absolute;
            bottom: 200px;
            right: 10px;
            background: #4CAF50;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        `;

        this.handleMouseEnter = () => {
            this.testLevelButton.style.background = '#45a049';
        };
        
        this.handleMouseLeave = () => {
            this.testLevelButton.style.background = '#4CAF50';
        };

        this.testLevelButton.addEventListener('mouseenter', this.handleMouseEnter);
        this.testLevelButton.addEventListener('mouseleave', this.handleMouseLeave);
        this.testLevelButton.addEventListener('click', this.handleTestLevel);

        return this.testLevelButton;
    }

    createDownloadLevelButton() {
        this.downloadLevelButton = document.createElement('button');
        this.downloadLevelButton.textContent = _common_string_resources_js__WEBPACK_IMPORTED_MODULE_11__["default"].DOWNLOAD_LEVEL;
        this.downloadLevelButton.style.cssText = `
            position: absolute;
            bottom: 24px;
            right: 10px;
            background: #2196F3;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        `;

        this.handleDownloadMouseEnter = () => {
            this.downloadLevelButton.style.background = '#1976D2';
        };
        
        this.handleDownloadMouseLeave = () => {
            this.downloadLevelButton.style.background = '#2196F3';
        };

        this.downloadLevelButton.addEventListener('mouseenter', this.handleDownloadMouseEnter);
        this.downloadLevelButton.addEventListener('mouseleave', this.handleDownloadMouseLeave);
        this.downloadLevelButton.addEventListener('click', this.handleDownloadLevel);

        return this.downloadLevelButton;
    }

    createUploadLevelButton() {
        this.uploadLevelButton = document.createElement('button');
        this.uploadLevelButton.textContent = _common_string_resources_js__WEBPACK_IMPORTED_MODULE_11__["default"].UPLOAD_LEVEL;
        this.uploadLevelButton.style.cssText = `
            position: absolute;
            bottom: 84px;
            right: 10px;
            background: #FF9800;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        `;

        this.fileInput = document.createElement('input');
        this.fileInput.type = 'file';
        this.fileInput.accept = '.json';
        this.fileInput.style.display = 'none';

        this.handleUploadMouseEnter = () => {
            this.uploadLevelButton.style.background = '#F57C00';
        };

        this.handleUploadMouseLeave = () => {
            this.uploadLevelButton.style.background = '#FF9800';
        };

        this.uploadLevelButton.addEventListener('mouseenter', this.handleUploadMouseEnter);
        this.uploadLevelButton.addEventListener('mouseleave', this.handleUploadMouseLeave);
        this.uploadLevelButton.addEventListener('click', this.handleUploadLevel);
        this.fileInput.addEventListener('change', this.handleFileSelect);

        document.body.appendChild(this.fileInput);

        return this.uploadLevelButton;
    }

    createResetButton() {
        this.resetButton = document.createElement('button');
        this.resetButton.textContent = _common_string_resources_js__WEBPACK_IMPORTED_MODULE_11__["default"].RESET;
        this.resetButton.style.cssText = `
            position: absolute;
            bottom: 300px;
            right: 10px;
            background: #F44336;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        `;

        this.handleResetMouseEnter = () => {
            this.resetButton.style.background = '#D32F2F';
        };

        this.handleResetMouseLeave = () => {
            this.resetButton.style.background = '#F44336';
        };

        this.resetButton.addEventListener('mouseenter', this.handleResetMouseEnter);
        this.resetButton.addEventListener('mouseleave', this.handleResetMouseLeave);
        this.resetButton.addEventListener('click', this.handleReset);

        return this.resetButton;
    }

    handleTestLevel() {
        this.onTestLevel(this.exportLevel());
    }

    handleDownloadLevel() {
        const level = this.exportLevel();
        this.downloadLevel(level);
    }

    handleUploadLevel() {
        this.fileInput.click();
    }

    handleReset() {
        this.onLevelChanged(null);
    }

    handleFileSelect(event) {
        const file = event.target.files[0];
        if (file && file.type === 'application/json') {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const levelData = JSON.parse(e.target.result);
                    this.loadLevel(levelData);
                    event.target.value = '';
                } catch (error) {
                    console.error('Error parsing JSON file:', error);
                    alert('Error: Invalid JSON file format');
                }
            };
            reader.readAsText(file);
        } else {
            alert('Please select a valid JSON file');
        }
    }

    loadLevel(levelData) {
        try {
            this.onLevelChanged(levelData);
        } catch (error) {
            console.error('Error creating level object:', error);
            alert('Error: Invalid level format');
        }
    }

    downloadLevel(level) {
        const levelJson = JSON.stringify(level, null, 2);
        const blob = new Blob([levelJson], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const currentDate = new Date();
        const timestamp = currentDate.toISOString().replace(/[:.]/g, '-').slice(0, 19);
        const filename = `level_${timestamp}.json`;

        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = filename;
        downloadLink.style.display = 'none';

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        URL.revokeObjectURL(url);
    }

    exportLevel() {
        const worldData = new _common_levels_world_data_js__WEBPACK_IMPORTED_MODULE_1__["default"](
            new _common_size_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.world.size.width, this.world.size.height),
            this.world.physics.worldSpeed
        );
        const playerData = new _common_levels_player_data_js__WEBPACK_IMPORTED_MODULE_2__["default"](
            new _common_point_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.world.player.coords.x, this.world.player.coords.y),
            new _common_size_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.world.player.size.width, this.world.player.size.height)
        );
        const bricksData = this.world.bricks.map(item => 
            new _common_levels_brick_data_js__WEBPACK_IMPORTED_MODULE_3__["default"](
                item.id,
                new _common_point_js__WEBPACK_IMPORTED_MODULE_9__["default"](item.coords.x, item.coords.y),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_8__["default"](item.size.width, item.size.height),
                item.backgroundColor,
                item.strokeWidth,
                item.strokeColor,
                true
            )
        );
        const jumpOrbsData = this.world.jumpOrbs.map(item => 
            new _common_levels_jump_orb_data_js__WEBPACK_IMPORTED_MODULE_4__["default"](
                item.id,
                new _common_point_js__WEBPACK_IMPORTED_MODULE_9__["default"](item.coords.x, item.coords.y),
                item.isReversed
            )
        );
        const spikesData = this.world.spikes.map(item => 
            new _common_levels_spike_data_js__WEBPACK_IMPORTED_MODULE_5__["default"](
                item.id,
                new _common_point_js__WEBPACK_IMPORTED_MODULE_9__["default"](item.coords.x, item.coords.y),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_8__["default"](item.size.width, item.size.height),
                item.backgroundColor,
                item.strokeWidth,
                item.strokeColor,
                true,
                item.isReversed
            )
        );

        const boundaries = this.world.boundaries;
        const boundaryData = new _common_levels_game_bounds_data_js__WEBPACK_IMPORTED_MODULE_7__["default"](
            new _common_levels_boundary_data_js__WEBPACK_IMPORTED_MODULE_6__["default"](
                'left',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_9__["default"](boundaries.left.coords.x, boundaries.left.coords.y),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_8__["default"](boundaries.left.size.width, boundaries.left.size.height),
                new _common_game_actors_boundary_boundary_background_js__WEBPACK_IMPORTED_MODULE_10__["default"]()
            ),
            new _common_levels_boundary_data_js__WEBPACK_IMPORTED_MODULE_6__["default"](
                'top',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_9__["default"](boundaries.top.coords.x, boundaries.top.coords.y),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_8__["default"](boundaries.top.size.width, boundaries.top.size.height),
                new _common_game_actors_boundary_boundary_background_js__WEBPACK_IMPORTED_MODULE_10__["default"]()
            ),
            new _common_levels_boundary_data_js__WEBPACK_IMPORTED_MODULE_6__["default"](
                'right',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_9__["default"](boundaries.right.coords.x, boundaries.right.coords.y),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_8__["default"](boundaries.right.size.width, boundaries.right.size.height),
                new _common_game_actors_boundary_boundary_background_js__WEBPACK_IMPORTED_MODULE_10__["default"]()
            ),
            new _common_levels_boundary_data_js__WEBPACK_IMPORTED_MODULE_6__["default"](
                'bottom',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_9__["default"](boundaries.bottom.coords.x, boundaries.bottom.coords.y),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_8__["default"](boundaries.bottom.size.width, boundaries.bottom.size.height),
                new _common_game_actors_boundary_boundary_background_js__WEBPACK_IMPORTED_MODULE_10__["default"]()
            )
        )

        const level = new _common_levels_level_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            this.world.name,
            worldData,
            boundaryData,
            bricksData,
            jumpOrbsData,
            spikesData,
            playerData
        );

        return level;
    }

    attachEventListeners() {
        this.testLevelButton.addEventListener('mouseenter', this.handleMouseEnter);
        this.testLevelButton.addEventListener('mouseleave', this.handleMouseLeave);
        this.testLevelButton.addEventListener('click', this.handleTestLevel);
        this.attachDownloadEventListeners();
        this.attachUploadEventListeners();
        this.attachResetEventListeners();
    }

    detachEventListeners() {
        this.testLevelButton.removeEventListener('mouseenter', this.handleMouseEnter);
        this.testLevelButton.removeEventListener('mouseleave', this.handleMouseLeave);
        this.testLevelButton.removeEventListener('click', this.handleTestLevel);
        this.detachDownloadEventListeners();
        this.detachUploadEventListeners();
        this.detachResetEventListeners();
    }

    attachDownloadEventListeners() {
        this.downloadLevelButton.addEventListener('mouseenter', this.handleDownloadMouseEnter);
        this.downloadLevelButton.addEventListener('mouseleave', this.handleDownloadMouseLeave);
        this.downloadLevelButton.addEventListener('click', this.handleDownloadLevel);
    }

    detachDownloadEventListeners() {
        this.downloadLevelButton.removeEventListener('mouseenter', this.handleDownloadMouseEnter);
        this.downloadLevelButton.removeEventListener('mouseleave', this.handleDownloadMouseLeave);
        this.downloadLevelButton.removeEventListener('click', this.handleDownloadLevel);
    }

    attachUploadEventListeners() {
        this.uploadLevelButton.addEventListener('mouseenter', this.handleUploadMouseEnter);
        this.uploadLevelButton.addEventListener('mouseleave', this.handleUploadMouseLeave);
        this.uploadLevelButton.addEventListener('click', this.handleUploadLevel);
        this.fileInput.addEventListener('change', this.handleFileSelect);
    }

    detachUploadEventListeners() {
        this.uploadLevelButton.removeEventListener('mouseenter', this.handleUploadMouseEnter);
        this.uploadLevelButton.removeEventListener('mouseleave', this.handleUploadMouseLeave);
        this.uploadLevelButton.removeEventListener('click', this.handleUploadLevel);
        this.fileInput.removeEventListener('change', this.handleFileSelect);
    }

    attachResetEventListeners() {
        this.resetButton.addEventListener('mouseenter', this.handleResetMouseEnter);
        this.resetButton.addEventListener('mouseleave', this.handleResetMouseLeave);
        this.resetButton.addEventListener('click', this.handleReset);
    }

    detachResetEventListeners() {
        this.resetButton.removeEventListener('mouseenter', this.handleResetMouseEnter);
        this.resetButton.removeEventListener('mouseleave', this.handleResetMouseLeave);
        this.resetButton.removeEventListener('click', this.handleReset);
    }

    activate() {
        this.testLevelButton = this.createTestLevelButton();
        this.downloadLevelButton = this.createDownloadLevelButton();
        this.uploadLevelButton = this.createUploadLevelButton();
        this.resetButton = this.createResetButton();
        document.body.appendChild(this.testLevelButton);
        document.body.appendChild(this.downloadLevelButton);
        document.body.appendChild(this.uploadLevelButton);
        document.body.appendChild(this.resetButton);
        this.attachEventListeners();
    }

    deactivate() {
        document.body.removeChild(this.testLevelButton);
        document.body.removeChild(this.downloadLevelButton);
        document.body.removeChild(this.uploadLevelButton);
        document.body.removeChild(this.resetButton);
        document.body.removeChild(this.fileInput);
        this.detachEventListeners();
        this.testLevelButton = null;
        this.downloadLevelButton = null;
        this.uploadLevelButton = null;
        this.resetButton = null;
        this.fileInput = null;
    }

    getButton() {
        return this.testLevelButton;
    }
}

/***/ }),

/***/ "./src/app_states/level_designer/object_manager.js":
/*!*********************************************************!*\
  !*** ./src/app_states/level_designer/object_manager.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ObjectManager)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _common_game_actors_brick_brick_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/game/actors/brick/brick.js */ "./src/common/game/actors/brick/brick.js");
/* harmony import */ var _common_game_actors_jump_orb_jump_orb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/game/actors/jump_orb/jump_orb.js */ "./src/common/game/actors/jump_orb/jump_orb.js");
/* harmony import */ var _common_game_actors_spike_spike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/game/actors/spike/spike.js */ "./src/common/game/actors/spike/spike.js");
/* harmony import */ var _app_states_level_designer_base_level_designer_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app_states/level_designer/base_level_designer_manager.js */ "./src/app_states/level_designer/base_level_designer_manager.js");
/* harmony import */ var _common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @common/string_resources.js */ "./src/common/string_resources.js");








class ObjectManager extends _app_states_level_designer_base_level_designer_manager_js__WEBPACK_IMPORTED_MODULE_5__["default"] {
    constructor(world, canvasSize, eventHandler, selectionManager) {
        super();
        this.world = world;
        this.canvasSize = canvasSize;
        this.eventHandler = eventHandler;
        this.selectionManager = selectionManager;
        this.selectionManager.onRemoved = () => {
            this.hideEditor();
        }
        
        this.addBrickButton = null;
        this.addJumpOrbButton = null;
        this.addSpikeButton = null;
        this.editorContainer = null;
        this.jumpOrbEditorContainer = null;
        this.spikeEditorContainer = null;
        this.isEditorVisible = false;
        this.isJumpOrbEditorVisible = false;
        this.isSpikeEditorVisible = false;
        
        this.defaultWidth = 50;
        this.defaultHeight = 50;
        
        this.idCounter = 0;
        
        this.handleAddBrick = this.handleAddBrick.bind(this);
        this.handleAddJumpOrb = this.handleAddJumpOrb.bind(this);
        this.handleAddSpike = this.handleAddSpike.bind(this);
        this.handleBrickIdChange = this.handleBrickIdChange.bind(this);
        this.handleBrickXChange = this.handleBrickXChange.bind(this);
        this.handleBrickYChange = this.handleBrickYChange.bind(this);
        this.handleBrickWidthChange = this.handleBrickWidthChange.bind(this);
        this.handleBrickHeightChange = this.handleBrickHeightChange.bind(this);
        this.handleBrickBackgroundColorChange = this.handleBrickBackgroundColorChange.bind(this);
        this.handleBrickStrokeWidthChange = this.handleBrickStrokeWidthChange.bind(this);
        this.handleBrickStrokeColorChange = this.handleBrickStrokeColorChange.bind(this);

        this.handleJumpOrbIdChange = this.handleJumpOrbIdChange.bind(this);
        this.handleJumpOrbXChange = this.handleJumpOrbXChange.bind(this);
        this.handleJumpOrbYChange = this.handleJumpOrbYChange.bind(this);
        this.handleJumpOrbIsReversedChange = this.handleJumpOrbIsReversedChange.bind(this);

        this.handleSpikeIdChange = this.handleSpikeIdChange.bind(this);
        this.handleSpikeXChange = this.handleSpikeXChange.bind(this);
        this.handleSpikeYChange = this.handleSpikeYChange.bind(this);
        this.handleSpikeWidthChange = this.handleSpikeWidthChange.bind(this);
        this.handleSpikeHeightChange = this.handleSpikeHeightChange.bind(this);
        this.handleSpikeBackgroundColorChange = this.handleSpikeBackgroundColorChange.bind(this);
        this.handleSpikeStrokeWidthChange = this.handleSpikeStrokeWidthChange.bind(this);
        this.handleSpikeStrokeColorChange = this.handleSpikeStrokeColorChange.bind(this);
        this.handleSpikeIsReversedChange = this.handleSpikeIsReversedChange.bind(this);
        
        this.createAddBrickButton();
        this.createAddJumpOrbButton();
        this.createAddSpikeButton();
        this.createEditorControls();
        this.createJumpOrbEditorControls();
        this.createSpikeEditorControls();
        this.subscribeToEventHandler();
    }

    subscribeToEventHandler() {
        if (this.eventHandler) {
            this.eventHandler.addOnMouseDownCallback((selectedObject, point, ctrlPressed) => {
                if (selectedObject?.getType() === 'Brick') {
                    this.showEditor();
                    this.hideJumpOrbEditor();
                    this.hideSpikeEditor();
                } else if (selectedObject?.getType() === 'JumpOrb') {
                    this.showJumpOrbEditor();
                    this.hideEditor();
                    this.hideSpikeEditor();
                } else if (selectedObject?.getType() === 'Spike') {
                    this.showSpikeEditor();
                    this.hideEditor();
                    this.hideJumpOrbEditor();
                } else {
                    this.hideEditor();
                    this.hideJumpOrbEditor();
                    this.hideSpikeEditor();
                }
            });
        }
    }
    
    createAddBrickButton() {
        this.addBrickButton = document.createElement('button');
        this.addBrickButton.textContent = _common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].ADD_BRICK;
        this.addBrickButton.style.cssText = `
            position: fixed;
            top: 24px;
            right: 10px;
            padding: 10px 20px;
            border: none;
            background: #4CAF50;
            color: white;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            z-index: 1000;
            width: 160px;
        `;
        this.addBrickButton.addEventListener('mouseenter', () => {
            this.addBrickButton.style.background = '#45a049';
        });
        this.addBrickButton.addEventListener('mouseleave', () => {
            this.addBrickButton.style.background = '#4CAF50';
        });

        return this.addBrickButton;
    }

    createAddJumpOrbButton() {
        this.addJumpOrbButton = document.createElement('button');
        this.addJumpOrbButton.textContent = _common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].ADD_JUMP_ORB;
        this.addJumpOrbButton.style.cssText = `
            position: fixed;
            top: 74px;
            right: 10px;
            padding: 10px 20px;
            border: none;
            background: #FF9500;
            color: white;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            z-index: 1000;
            width: 160px;
        `;
        this.addJumpOrbButton.addEventListener('mouseenter', () => {
            this.addJumpOrbButton.style.background = '#E8860B';
        });
        this.addJumpOrbButton.addEventListener('mouseleave', () => {
            this.addJumpOrbButton.style.background = '#FF9500';
        });

        return this.addJumpOrbButton;
    }

    createAddSpikeButton() {
        this.addSpikeButton = document.createElement('button');
        this.addSpikeButton.textContent = _common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].ADD_SPIKE;
        this.addSpikeButton.style.cssText = `
            position: fixed;
            top: 124px;
            right: 10px;
            padding: 10px 20px;
            border: none;
            background: #E53E3E;
            color: white;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            z-index: 1000;
            width: 160px;
        `;
        this.addSpikeButton.addEventListener('mouseenter', () => {
            this.addSpikeButton.style.background = '#C53030';
        });
        this.addSpikeButton.addEventListener('mouseleave', () => {
            this.addSpikeButton.style.background = '#E53E3E';
        });

        return this.addSpikeButton;
    }

    createEditorControls() {
        const container = document.createElement('div');
        container.style.cssText = `
            position: fixed;
            bottom: 220px;
            left: 10px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 12px;
            z-index: 1000;
            width: 250px;
            display: none;
        `;

        const title = document.createElement('div');
        title.textContent = _common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].BRICK;
        title.style.cssText = `
            font-weight: bold;
            margin-bottom: 10px;
            border-bottom: 1px solid #444;
            padding-bottom: 5px;
        `;
        container.appendChild(title);

        const idGroup = document.createElement('div');
        idGroup.style.marginBottom = '10px';
        
        const idLabel = document.createElement('label');
        idLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].ID}:`;
        idLabel.style.cssText = `
            display: block;
            margin-bottom: 5px;
        `;
        idGroup.appendChild(idLabel);

        this.idInput = document.createElement('input');
        this.idInput.type = 'text';
        this.idInput.id = 'brickIdInput';
        this.idInput.style.cssText = `
            width: 100%;
            padding: 3px;
            background: #333;
            color: white;
            border: 1px solid #555;
        `;
        idGroup.appendChild(this.idInput);
        container.appendChild(idGroup);

        const positionGroup = document.createElement('div');
        positionGroup.style.marginBottom = '10px';
        
        const positionTitle = document.createElement('label');
        positionTitle.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].POSITION}:`;
        positionTitle.style.display = 'block';
        positionTitle.style.marginBottom = '5px';
        positionGroup.appendChild(positionTitle);

        const xyContainer = document.createElement('div');
        xyContainer.style.cssText = `
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
        `;
        
        const xWrapper = document.createElement('div');
        xWrapper.style.flex = '1';
        
        const xLabel = document.createElement('label');
        xLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].X}:`;
        xLabel.style.cssText = `
            display: block;
            margin-bottom: 3px;
            font-size: 11px;
        `;
        
        this.xInput = document.createElement('input');
        this.xInput.type = 'number';
        this.xInput.step = '10';
        this.xInput.id = 'brickXInput';
        this.xInput.style.cssText = `
            width: 100%;
            padding: 3px;
            background: #333;
            color: white;
            border: 1px solid #555;
        `;
        
        xWrapper.appendChild(xLabel);
        xWrapper.appendChild(this.xInput);
        
        const yWrapper = document.createElement('div');
        yWrapper.style.flex = '1';
        
        const yLabel = document.createElement('label');
        yLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].Y}:`;
        yLabel.style.cssText = `
            display: block;
            margin-bottom: 3px;
            font-size: 11px;
        `;
        
        this.yInput = document.createElement('input');
        this.yInput.type = 'number';
        this.yInput.step = '10';
        this.yInput.id = 'brickYInput';
        this.yInput.style.cssText = `
            width: 100%;
            padding: 3px;
            background: #333;
            color: white;
            border: 1px solid #555;
        `;
        
        yWrapper.appendChild(yLabel);
        yWrapper.appendChild(this.yInput);
        
        xyContainer.appendChild(xWrapper);
        xyContainer.appendChild(yWrapper);
        positionGroup.appendChild(xyContainer);
        container.appendChild(positionGroup);

        const sizeGroup = document.createElement('div');
        sizeGroup.style.marginBottom = '10px';
        
        const sizeTitle = document.createElement('label');
        sizeTitle.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].SIZE}:`;
        sizeTitle.style.display = 'block';
        sizeTitle.style.marginBottom = '5px';
        sizeGroup.appendChild(sizeTitle);

        const whContainer = document.createElement('div');
        whContainer.style.cssText = `
            display: flex;
            gap: 10px;
        `;
        
        const widthWrapper = document.createElement('div');
        widthWrapper.style.flex = '1';
        
        const widthLabel = document.createElement('label');
        widthLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].WIDTH}:`;
        widthLabel.style.cssText = `
            display: block;
            margin-bottom: 3px;
            font-size: 11px;
        `;
        
        this.widthInput = document.createElement('input');
        this.widthInput.type = 'number';
        this.widthInput.step = '10';
        this.widthInput.min = '10';
        this.widthInput.id = 'brickWidthInput';
        this.widthInput.style.cssText = `
            width: 100%;
            padding: 3px;
            background: #333;
            color: white;
            border: 1px solid #555;
        `;
        
        widthWrapper.appendChild(widthLabel);
        widthWrapper.appendChild(this.widthInput);
        
        const heightWrapper = document.createElement('div');
        heightWrapper.style.flex = '1';
        
        const heightLabel = document.createElement('label');
        heightLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].HEIGHT}:`;
        heightLabel.style.cssText = `
            display: block;
            margin-bottom: 3px;
            font-size: 11px;
        `;
        
        this.heightInput = document.createElement('input');
        this.heightInput.type = 'number';
        this.heightInput.step = '10';
        this.heightInput.min = '10';
        this.heightInput.id = 'brickHeightInput';
        this.heightInput.style.cssText = `
            width: 100%;
            padding: 3px;
            background: #333;
            color: white;
            border: 1px solid #555;
        `;
        
        heightWrapper.appendChild(heightLabel);
        heightWrapper.appendChild(this.heightInput);
        
        whContainer.appendChild(widthWrapper);
        whContainer.appendChild(heightWrapper);
        sizeGroup.appendChild(whContainer);
        container.appendChild(sizeGroup);

        const backgroundColorGroup = document.createElement('div');
        backgroundColorGroup.style.cssText = `
            margin-bottom: 10px;
            width: 50%;
        `;
        
        const backgroundColorLabel = document.createElement('label');
        backgroundColorLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].BACKGROUND}:`;
        backgroundColorLabel.style.cssText = `
            display: block;
            margin-bottom: 5px;
            font-size: 11px;
        `;
        backgroundColorGroup.appendChild(backgroundColorLabel);

        this.backgroundColorInput = document.createElement('input');
        this.backgroundColorInput.type = 'color';
        this.backgroundColorInput.id = 'brickBackgroundColorInput';
        this.backgroundColorInput.style.cssText = `
            width: 100%;
            height: 30px;
            padding: 0;
            border: 1px solid #555;
            background: #333;
            cursor: pointer;
        `;
        backgroundColorGroup.appendChild(this.backgroundColorInput);
        container.appendChild(backgroundColorGroup);

        const strokeGroup = document.createElement('div');
        strokeGroup.style.marginBottom = '10px';

        const strokeTitle = document.createElement('label');
        strokeTitle.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].STROKE}:`;
        strokeTitle.style.cssText = `
            display: block;
            margin-bottom: 5px;
        `;
        strokeGroup.appendChild(strokeTitle);

        const strokeContainer = document.createElement('div');
        strokeContainer.style.cssText = `
            display: flex;
            gap: 10px;
        `;

        const strokeWidthWrapper = document.createElement('div');
        strokeWidthWrapper.style.flex = '1';

        const strokeWidthLabel = document.createElement('label');
        strokeWidthLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].WIDTH}:`;
        strokeWidthLabel.style.cssText = `
            display: block;
            margin-bottom: 3px;
            font-size: 11px;
        `;
        strokeWidthWrapper.appendChild(strokeWidthLabel);

        this.strokeWidthInput = document.createElement('input');
        this.strokeWidthInput.type = 'number';
        this.strokeWidthInput.step = '1';
        this.strokeWidthInput.min = '0';
        this.strokeWidthInput.max = '20';
        this.strokeWidthInput.id = 'brickStrokeWidthInput';
        this.strokeWidthInput.style.cssText = `
            width: 100%;
            padding: 3px;
            background: #333;
            color: white;
            border: 1px solid #555;
        `;
        strokeWidthWrapper.appendChild(this.strokeWidthInput);

        const strokeColorWrapper = document.createElement('div');
        strokeColorWrapper.style.flex = '1';

        const strokeColorLabel = document.createElement('label');
        strokeColorLabel.textContent = 'Color:';
        strokeColorLabel.style.cssText = `
            display: block;
            margin-bottom: 3px;
            font-size: 11px;
        `;
        strokeColorWrapper.appendChild(strokeColorLabel);

        this.strokeColorInput = document.createElement('input');
        this.strokeColorInput.type = 'color';
        this.strokeColorInput.id = 'brickStrokeColorInput';
        this.strokeColorInput.style.cssText = `
            width: 100%;
            height: 25px;
            padding: 0;
            border: 1px solid #555;
            background: #333;
            cursor: pointer;
        `;
        strokeColorWrapper.appendChild(this.strokeColorInput);

        strokeContainer.appendChild(strokeWidthWrapper);
        strokeContainer.appendChild(strokeColorWrapper);
        strokeGroup.appendChild(strokeContainer);
        container.appendChild(strokeGroup);

        this.editorContainer = container;
    }

    createJumpOrbEditorControls() {
        const container = document.createElement('div');
        container.style.cssText = `
            position: fixed;
            bottom: 220px;
            left: 10px;
            background: rgba(255, 149, 0, 0.9);
            color: white;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 12px;
            z-index: 1000;
            width: 250px;
            display: none;
        `;

        const title = document.createElement('div');
        title.textContent = _common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].JUMP_ORB;
        title.style.cssText = `
            font-weight: bold;
            margin-bottom: 10px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            padding-bottom: 5px;
        `;
        container.appendChild(title);

        const idGroup = document.createElement('div');
        idGroup.style.marginBottom = '10px';

        const idLabel = document.createElement('label');
        idLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].ID}:`;
        idLabel.style.cssText = `
            display: block;
            margin-bottom: 5px;
        `;
        idGroup.appendChild(idLabel);

        this.jumpOrbIdInput = document.createElement('input');
        this.jumpOrbIdInput.type = 'text';
        this.jumpOrbIdInput.id = 'jumpOrbIdInput';
        this.jumpOrbIdInput.style.cssText = `
            width: 100%;
            padding: 3px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
        `;
        idGroup.appendChild(this.jumpOrbIdInput);
        container.appendChild(idGroup);

        const positionGroup = document.createElement('div');
        positionGroup.style.marginBottom = '10px';

        const positionTitle = document.createElement('label');
        positionTitle.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].POSITION}:`;
        positionTitle.style.display = 'block';
        positionTitle.style.marginBottom = '5px';
        positionGroup.appendChild(positionTitle);

        const xyContainer = document.createElement('div');
        xyContainer.style.cssText = `
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
        `;

        const xWrapper = document.createElement('div');
        xWrapper.style.flex = '1';

        const xLabel = document.createElement('label');
        xLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].X}:`;
        xLabel.style.cssText = `
            display: block;
            margin-bottom: 3px;
            font-size: 11px;
        `;

        this.jumpOrbXInput = document.createElement('input');
        this.jumpOrbXInput.type = 'number';
        this.jumpOrbXInput.step = '10';
        this.jumpOrbXInput.id = 'jumpOrbXInput';
        this.jumpOrbXInput.style.cssText = `
            width: 100%;
            padding: 3px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
        `;

        xWrapper.appendChild(xLabel);
        xWrapper.appendChild(this.jumpOrbXInput);

        const yWrapper = document.createElement('div');
        yWrapper.style.flex = '1';

        const yLabel = document.createElement('label');
        yLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].Y}:`;
        yLabel.style.cssText = `
            display: block;
            margin-bottom: 3px;
            font-size: 11px;
        `;

        this.jumpOrbYInput = document.createElement('input');
        this.jumpOrbYInput.type = 'number';
        this.jumpOrbYInput.step = '10';
        this.jumpOrbYInput.id = 'jumpOrbYInput';
        this.jumpOrbYInput.style.cssText = `
            width: 100%;
            padding: 3px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
        `;

        yWrapper.appendChild(yLabel);
        yWrapper.appendChild(this.jumpOrbYInput);

        xyContainer.appendChild(xWrapper);
        xyContainer.appendChild(yWrapper);
        positionGroup.appendChild(xyContainer);
        container.appendChild(positionGroup);

        const reversedGroup = document.createElement('div');
        reversedGroup.style.marginBottom = '10px';

        const reversedCheckbox = document.createElement('input');
        reversedCheckbox.type = 'checkbox';
        reversedCheckbox.id = 'jumpOrbIsReversedInput';
        reversedCheckbox.style.cssText = `
            margin-right: 8px;
        `;

        const reversedLabel = document.createElement('label');
        reversedLabel.style.cssText = `
            display: flex;
            align-items: center;
            cursor: pointer;
        `;
        reversedLabel.appendChild(reversedCheckbox);
        reversedLabel.appendChild(document.createTextNode(_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].REVERSED));

        reversedGroup.appendChild(reversedLabel);
        container.appendChild(reversedGroup);

        this.jumpOrbIsReversedInput = reversedCheckbox;
        this.jumpOrbEditorContainer = container;
    }

    createSpikeEditorControls() {
        const container = document.createElement('div');
        container.style.cssText = `
            position: fixed;
            bottom: 220px;
            left: 10px;
            background: rgba(229, 62, 62, 0.9);
            color: white;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 12px;
            z-index: 1000;
            width: 250px;
            display: none;
        `;

        const title = document.createElement('div');
        title.textContent = _common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].SPIKE;
        title.style.cssText = `
            font-weight: bold;
            margin-bottom: 10px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            padding-bottom: 5px;
        `;
        container.appendChild(title);

        const idGroup = document.createElement('div');
        idGroup.style.marginBottom = '10px';

        const idLabel = document.createElement('label');
        idLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].ID}:`;
        idLabel.style.cssText = `
            display: block;
            margin-bottom: 5px;
        `;
        idGroup.appendChild(idLabel);

        this.spikeIdInput = document.createElement('input');
        this.spikeIdInput.type = 'text';
        this.spikeIdInput.id = 'spikeIdInput';
        this.spikeIdInput.style.cssText = `
            width: 100%;
            padding: 3px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
        `;
        idGroup.appendChild(this.spikeIdInput);
        container.appendChild(idGroup);

        const positionGroup = document.createElement('div');
        positionGroup.style.marginBottom = '10px';

        const positionTitle = document.createElement('label');
        positionTitle.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].POSITION}:`;
        positionTitle.style.display = 'block';
        positionTitle.style.marginBottom = '5px';
        positionGroup.appendChild(positionTitle);

        const xyContainer = document.createElement('div');
        xyContainer.style.cssText = `
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
        `;

        const xWrapper = document.createElement('div');
        xWrapper.style.flex = '1';

        const xLabel = document.createElement('label');
        xLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].X}:`;
        xLabel.style.cssText = `
            display: block;
            margin-bottom: 3px;
            font-size: 11px;
        `;

        this.spikeXInput = document.createElement('input');
        this.spikeXInput.type = 'number';
        this.spikeXInput.step = '10';
        this.spikeXInput.id = 'spikeXInput';
        this.spikeXInput.style.cssText = `
            width: 100%;
            padding: 3px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
        `;

        xWrapper.appendChild(xLabel);
        xWrapper.appendChild(this.spikeXInput);

        const yWrapper = document.createElement('div');
        yWrapper.style.flex = '1';

        const yLabel = document.createElement('label');
        yLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].Y}:`;
        yLabel.style.cssText = `
            display: block;
            margin-bottom: 3px;
            font-size: 11px;
        `;

        this.spikeYInput = document.createElement('input');
        this.spikeYInput.type = 'number';
        this.spikeYInput.step = '10';
        this.spikeYInput.id = 'spikeYInput';
        this.spikeYInput.style.cssText = `
            width: 100%;
            padding: 3px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
        `;

        yWrapper.appendChild(yLabel);
        yWrapper.appendChild(this.spikeYInput);

        xyContainer.appendChild(xWrapper);
        xyContainer.appendChild(yWrapper);
        positionGroup.appendChild(xyContainer);
        container.appendChild(positionGroup);

        const sizeGroup = document.createElement('div');
        sizeGroup.style.marginBottom = '10px';

        const sizeTitle = document.createElement('label');
        sizeTitle.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].SIZE}:`;
        sizeTitle.style.display = 'block';
        sizeTitle.style.marginBottom = '5px';
        sizeGroup.appendChild(sizeTitle);

        const whContainer = document.createElement('div');
        whContainer.style.cssText = `
            display: flex;
            gap: 10px;
        `;

        const widthWrapper = document.createElement('div');
        widthWrapper.style.flex = '1';

        const widthLabel = document.createElement('label');
        widthLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].WIDTH}:`;
        widthLabel.style.cssText = `
            display: block;
            margin-bottom: 3px;
            font-size: 11px;
        `;

        this.spikeWidthInput = document.createElement('input');
        this.spikeWidthInput.type = 'number';
        this.spikeWidthInput.step = '10';
        this.spikeWidthInput.min = '10';
        this.spikeWidthInput.id = 'spikeWidthInput';
        this.spikeWidthInput.style.cssText = `
            width: 100%;
            padding: 3px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
        `;

        widthWrapper.appendChild(widthLabel);
        widthWrapper.appendChild(this.spikeWidthInput);

        const heightWrapper = document.createElement('div');
        heightWrapper.style.flex = '1';

        const heightLabel = document.createElement('label');
        heightLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].HEIGHT}:`;
        heightLabel.style.cssText = `
            display: block;
            margin-bottom: 3px;
            font-size: 11px;
        `;

        this.spikeHeightInput = document.createElement('input');
        this.spikeHeightInput.type = 'number';
        this.spikeHeightInput.step = '10';
        this.spikeHeightInput.min = '10';
        this.spikeHeightInput.id = 'spikeHeightInput';
        this.spikeHeightInput.style.cssText = `
            width: 100%;
            padding: 3px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
        `;

        heightWrapper.appendChild(heightLabel);
        heightWrapper.appendChild(this.spikeHeightInput);

        whContainer.appendChild(widthWrapper);
        whContainer.appendChild(heightWrapper);
        sizeGroup.appendChild(whContainer);
        container.appendChild(sizeGroup);

        const backgroundColorGroup = document.createElement('div');
        backgroundColorGroup.style.cssText = `
            margin-bottom: 10px;
            width: 50%;
        `;

        const backgroundColorLabel = document.createElement('label');
        backgroundColorLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].BACKGROUND}:`;
        backgroundColorLabel.style.cssText = `
            display: block;
            margin-bottom: 5px;
            font-size: 11px;
        `;
        backgroundColorGroup.appendChild(backgroundColorLabel);

        this.spikeBackgroundColorInput = document.createElement('input');
        this.spikeBackgroundColorInput.type = 'color';
        this.spikeBackgroundColorInput.id = 'spikeBackgroundColorInput';
        this.spikeBackgroundColorInput.style.cssText = `
            width: 100%;
            height: 30px;
            padding: 0;
            border: 1px solid rgba(255, 255, 255, 0.3);
            background: rgba(255, 255, 255, 0.2);
            cursor: pointer;
        `;
        backgroundColorGroup.appendChild(this.spikeBackgroundColorInput);
        container.appendChild(backgroundColorGroup);

        const strokeGroup = document.createElement('div');
        strokeGroup.style.marginBottom = '10px';

        const strokeTitle = document.createElement('label');
        strokeTitle.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].STROKE}:`;
        strokeTitle.style.cssText = `
            display: block;
            margin-bottom: 5px;
        `;
        strokeGroup.appendChild(strokeTitle);

        const strokeContainer = document.createElement('div');
        strokeContainer.style.cssText = `
            display: flex;
            gap: 10px;
        `;

        const strokeWidthWrapper = document.createElement('div');
        strokeWidthWrapper.style.flex = '1';

        const strokeWidthLabel = document.createElement('label');
        strokeWidthLabel.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].WIDTH}:`;
        strokeWidthLabel.style.cssText = `
            display: block;
            margin-bottom: 3px;
            font-size: 11px;
        `;
        strokeWidthWrapper.appendChild(strokeWidthLabel);

        this.spikeStrokeWidthInput = document.createElement('input');
        this.spikeStrokeWidthInput.type = 'number';
        this.spikeStrokeWidthInput.step = '1';
        this.spikeStrokeWidthInput.min = '0';
        this.spikeStrokeWidthInput.max = '20';
        this.spikeStrokeWidthInput.id = 'spikeStrokeWidthInput';
        this.spikeStrokeWidthInput.style.cssText = `
            width: 100%;
            padding: 3px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
        `;
        strokeWidthWrapper.appendChild(this.spikeStrokeWidthInput);

        const strokeColorWrapper = document.createElement('div');
        strokeColorWrapper.style.flex = '1';

        const strokeColorLabel = document.createElement('label');
        strokeColorLabel.textContent = 'Color:';
        strokeColorLabel.style.cssText = `
            display: block;
            margin-bottom: 3px;
            font-size: 11px;
        `;
        strokeColorWrapper.appendChild(strokeColorLabel);

        this.spikeStrokeColorInput = document.createElement('input');
        this.spikeStrokeColorInput.type = 'color';
        this.spikeStrokeColorInput.id = 'spikeStrokeColorInput';
        this.spikeStrokeColorInput.style.cssText = `
            width: 100%;
            height: 25px;
            padding: 0;
            border: 1px solid rgba(255, 255, 255, 0.3);
            background: rgba(255, 255, 255, 0.2);
            cursor: pointer;
        `;
        strokeColorWrapper.appendChild(this.spikeStrokeColorInput);

        strokeContainer.appendChild(strokeWidthWrapper);
        strokeContainer.appendChild(strokeColorWrapper);
        strokeGroup.appendChild(strokeContainer);
        container.appendChild(strokeGroup);

        const reversedGroup = document.createElement('div');
        reversedGroup.style.marginBottom = '10px';

        const reversedCheckbox = document.createElement('input');
        reversedCheckbox.type = 'checkbox';
        reversedCheckbox.id = 'spikeIsReversedInput';
        reversedCheckbox.style.cssText = `
            margin-right: 8px;
        `;

        const reversedLabel = document.createElement('label');
        reversedLabel.style.cssText = `
            display: flex;
            align-items: center;
            cursor: pointer;
        `;
        reversedLabel.appendChild(reversedCheckbox);
        reversedLabel.appendChild(document.createTextNode(_common_string_resources_js__WEBPACK_IMPORTED_MODULE_6__["default"].REVERSED));

        reversedGroup.appendChild(reversedLabel);
        container.appendChild(reversedGroup);

        this.spikeIsReversedInput = reversedCheckbox;
        this.spikeEditorContainer = container;
    }

    attachEventListeners() {
        this.addBrickButton.addEventListener('click', this.handleAddBrick);
        this.addJumpOrbButton.addEventListener('click', this.handleAddJumpOrb);
        this.addSpikeButton.addEventListener('click', this.handleAddSpike);
        this.idInput.addEventListener('change', this.handleBrickIdChange);
        this.xInput.addEventListener('change', this.handleBrickXChange);
        this.yInput.addEventListener('change', this.handleBrickYChange);
        this.widthInput.addEventListener('change', this.handleBrickWidthChange);
        this.heightInput.addEventListener('change', this.handleBrickHeightChange);
        this.backgroundColorInput.addEventListener('change', this.handleBrickBackgroundColorChange);
        this.strokeWidthInput.addEventListener('change', this.handleBrickStrokeWidthChange);
        this.strokeColorInput.addEventListener('change', this.handleBrickStrokeColorChange);

        this.jumpOrbIdInput.addEventListener('change', this.handleJumpOrbIdChange);
        this.jumpOrbXInput.addEventListener('change', this.handleJumpOrbXChange);
        this.jumpOrbYInput.addEventListener('change', this.handleJumpOrbYChange);
        this.jumpOrbIsReversedInput.addEventListener('change', this.handleJumpOrbIsReversedChange);

        this.spikeIdInput.addEventListener('change', this.handleSpikeIdChange);
        this.spikeXInput.addEventListener('change', this.handleSpikeXChange);
        this.spikeYInput.addEventListener('change', this.handleSpikeYChange);
        this.spikeWidthInput.addEventListener('change', this.handleSpikeWidthChange);
        this.spikeHeightInput.addEventListener('change', this.handleSpikeHeightChange);
        this.spikeBackgroundColorInput.addEventListener('change', this.handleSpikeBackgroundColorChange);
        this.spikeStrokeWidthInput.addEventListener('change', this.handleSpikeStrokeWidthChange);
        this.spikeStrokeColorInput.addEventListener('change', this.handleSpikeStrokeColorChange);
        this.spikeIsReversedInput.addEventListener('change', this.handleSpikeIsReversedChange);
    }

    detachEventListeners() {
        this.addBrickButton.removeEventListener('click', this.handleAddBrick);
        this.addJumpOrbButton.removeEventListener('click', this.handleAddJumpOrb);
        this.addSpikeButton.removeEventListener('click', this.handleAddSpike);

        this.idInput.removeEventListener('change', this.handleBrickIdChange);
        this.xInput.removeEventListener('change', this.handleBrickXChange);
        this.yInput.removeEventListener('change', this.handleBrickYChange);
        this.widthInput.removeEventListener('change', this.handleBrickWidthChange);
        this.heightInput.removeEventListener('change', this.handleBrickHeightChange);
        this.backgroundColorInput.removeEventListener('change', this.handleBrickBackgroundColorChange);
        this.strokeWidthInput.removeEventListener('change', this.handleBrickStrokeWidthChange);
        this.strokeColorInput.removeEventListener('change', this.handleBrickStrokeColorChange);

        this.jumpOrbIdInput.removeEventListener('change', this.handleJumpOrbIdChange);
        this.jumpOrbXInput.removeEventListener('change', this.handleJumpOrbXChange);
        this.jumpOrbYInput.removeEventListener('change', this.handleJumpOrbYChange);
        this.jumpOrbIsReversedInput.removeEventListener('change', this.handleJumpOrbIsReversedChange);

        this.spikeIdInput.removeEventListener('change', this.handleSpikeIdChange);
        this.spikeXInput.removeEventListener('change', this.handleSpikeXChange);
        this.spikeYInput.removeEventListener('change', this.handleSpikeYChange);
        this.spikeWidthInput.removeEventListener('change', this.handleSpikeWidthChange);
        this.spikeHeightInput.removeEventListener('change', this.handleSpikeHeightChange);
        this.spikeBackgroundColorInput.removeEventListener('change', this.handleSpikeBackgroundColorChange);
        this.spikeStrokeWidthInput.removeEventListener('change', this.handleSpikeStrokeWidthChange);
        this.spikeStrokeColorInput.removeEventListener('change', this.handleSpikeStrokeColorChange);
        this.spikeIsReversedInput.removeEventListener('change', this.handleSpikeIsReversedChange);
    }

    updateInputValues() {
        const selectedObjects = this.selectionManager.selection.objects;
        if (selectedObjects.length === 0) return;
        
        const selectedBrick = selectedObjects[0];
        this.idInput.value = selectedBrick.id || '';
        this.xInput.value = Math.round(selectedBrick.coords.x);
        this.yInput.value = Math.round(selectedBrick.coords.y);
        this.widthInput.value = selectedBrick.size.width;
        this.heightInput.value = selectedBrick.size.height;
        this.backgroundColorInput.value = selectedBrick.backgroundColor || '#ffffff';
        this.strokeWidthInput.value = selectedBrick.strokeWidth || 0;
        this.strokeColorInput.value = selectedBrick.strokeColor || '#000000';
    }

    handleAddBrick() {
        const width = this.defaultWidth;
        const height = this.defaultHeight;

        const centerX = this.canvasSize.width / 2 - width / 2;
        const centerY = this.canvasSize.height / 2 - height / 2;

        const roundedX = Math.round(centerX / 10) * 10;
        const roundedY = Math.round(centerY / 10) * 10;

        const brickId = `brick-${++this.idCounter}`;

        const brickCoords = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](roundedX, roundedY);
        const brickSize = new _common_size_js__WEBPACK_IMPORTED_MODULE_1__["default"](width, height);
        const newBrick = new _common_game_actors_brick_brick_js__WEBPACK_IMPORTED_MODULE_2__["default"](brickId, brickCoords, brickSize);

        this.world.bricks.push(newBrick);
    }

    handleAddJumpOrb() {
        const centerX = this.canvasSize.width / 2 - 15;
        const centerY = this.canvasSize.height / 2 - 15;

        const roundedX = Math.round(centerX / 10) * 10;
        const roundedY = Math.round(centerY / 10) * 10;

        const jumpOrbId = `jump-orb-${++this.idCounter}`;

        const jumpOrbCoords = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](roundedX, roundedY);
        const newJumpOrb = new _common_game_actors_jump_orb_jump_orb_js__WEBPACK_IMPORTED_MODULE_3__["default"](jumpOrbId, jumpOrbCoords, false);

        if (!this.world.jumpOrbs) {
            this.world.jumpOrbs = [];
        }
        this.world.jumpOrbs.push(newJumpOrb);
    }

    handleAddSpike() {
        const width = this.defaultWidth;
        const height = this.defaultHeight;

        const centerX = this.canvasSize.width / 2 - width / 2;
        const centerY = this.canvasSize.height / 2 - height / 2;

        const roundedX = Math.round(centerX / 10) * 10;
        const roundedY = Math.round(centerY / 10) * 10;

        const spikeId = `spike-${++this.idCounter}`;

        const spikeCoords = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](roundedX, roundedY);
        const spikeSize = new _common_size_js__WEBPACK_IMPORTED_MODULE_1__["default"](width, height);
        const newSpike = new _common_game_actors_spike_spike_js__WEBPACK_IMPORTED_MODULE_4__["default"](spikeId, spikeCoords, spikeSize, '#4A5568', 2, '#2D3748', true, false);

        if (!this.world.spikes) {
            this.world.spikes = [];
        }
        this.world.spikes.push(newSpike);
    }

    updateJumpOrbInputValues() {
        const selectedObjects = this.selectionManager.selection.objects;
        if (selectedObjects.length === 0) return;

        const selectedJumpOrb = selectedObjects[0];
        this.jumpOrbIdInput.value = selectedJumpOrb.id || '';
        this.jumpOrbXInput.value = Math.round(selectedJumpOrb.coords.x);
        this.jumpOrbYInput.value = Math.round(selectedJumpOrb.coords.y);
        this.jumpOrbIsReversedInput.checked = selectedJumpOrb.isReversed || false;
    }

    updateSpikeInputValues() {
        const selectedObjects = this.selectionManager.selection.objects;
        if (selectedObjects.length === 0) return;

        const selectedSpike = selectedObjects[0];
        this.spikeIdInput.value = selectedSpike.id || '';
        this.spikeXInput.value = Math.round(selectedSpike.coords.x);
        this.spikeYInput.value = Math.round(selectedSpike.coords.y);
        this.spikeWidthInput.value = selectedSpike.size.width;
        this.spikeHeightInput.value = selectedSpike.size.height;
        this.spikeBackgroundColorInput.value = selectedSpike.backgroundColor || '#4A5568';
        this.spikeStrokeWidthInput.value = selectedSpike.strokeWidth || 2;
        this.spikeStrokeColorInput.value = selectedSpike.strokeColor || '#2D3748';
        this.spikeIsReversedInput.checked = selectedSpike.isReversed || false;
    }

    handleBrickIdChange(event) {
        this.selectionManager.setId(event.target.value);
    }

    handleBrickXChange(event) {
        const newX = parseInt(event.target.value, 10);
        if (!isNaN(newX)) {
            this.selectionManager.setX(newX);
        }
    }

    handleBrickYChange(event) {
        const newY = parseInt(event.target.value, 10);
        if (!isNaN(newY)) {
            this.selectionManager.setY(newY);
        }
    }

    handleBrickWidthChange(event) {
        const newWidth = parseInt(event.target.value, 10);
        if (!isNaN(newWidth) && newWidth >= 10) {
            this.selectionManager.setWidth(newWidth);
        }
    }

    handleBrickHeightChange(event) {
        const newHeight = parseInt(event.target.value, 10);
        if (!isNaN(newHeight) && newHeight >= 10) {
            this.selectionManager.setHeight(newHeight);
        }
    }

    handleBrickBackgroundColorChange(event) {
        this.selectionManager.setBackgroundColor(event.target.value);
    }

    handleBrickStrokeWidthChange(event) {
        const newStrokeWidth = parseInt(event.target.value, 10);
        if (!isNaN(newStrokeWidth) && newStrokeWidth >= 0) {
            this.selectionManager.setStrokeWidth(newStrokeWidth);
        }
    }

    handleBrickStrokeColorChange(event) {
        this.selectionManager.setStrokeColor(event.target.value);
    }

    handleJumpOrbIdChange(event) {
        this.selectionManager.setId(event.target.value);
    }

    handleJumpOrbXChange(event) {
        const newX = parseInt(event.target.value, 10);
        if (!isNaN(newX)) {
            this.selectionManager.setX(newX);
        }
    }

    handleJumpOrbYChange(event) {
        const newY = parseInt(event.target.value, 10);
        if (!isNaN(newY)) {
            this.selectionManager.setY(newY);
        }
    }

    handleJumpOrbIsReversedChange(event) {
        this.selectionManager.setIsReversed(event.target.checked);
    }

    handleSpikeIdChange(event) {
        this.selectionManager.setId(event.target.value);
    }

    handleSpikeXChange(event) {
        const newX = parseInt(event.target.value, 10);
        if (!isNaN(newX)) {
            this.selectionManager.setX(newX);
        }
    }

    handleSpikeYChange(event) {
        const newY = parseInt(event.target.value, 10);
        if (!isNaN(newY)) {
            this.selectionManager.setY(newY);
        }
    }

    handleSpikeWidthChange(event) {
        const newWidth = parseInt(event.target.value, 10);
        if (!isNaN(newWidth) && newWidth >= 10) {
            this.selectionManager.setWidth(newWidth);
        }
    }

    handleSpikeHeightChange(event) {
        const newHeight = parseInt(event.target.value, 10);
        if (!isNaN(newHeight) && newHeight >= 10) {
            this.selectionManager.setHeight(newHeight);
        }
    }

    handleSpikeBackgroundColorChange(event) {
        this.selectionManager.setBackgroundColor(event.target.value);
    }

    handleSpikeStrokeWidthChange(event) {
        const newStrokeWidth = parseInt(event.target.value, 10);
        if (!isNaN(newStrokeWidth) && newStrokeWidth >= 0) {
            this.selectionManager.setStrokeWidth(newStrokeWidth);
        }
    }

    handleSpikeStrokeColorChange(event) {
        this.selectionManager.setStrokeColor(event.target.value);
    }

    handleSpikeIsReversedChange(event) {
        this.selectionManager.setIsReversed(event.target.checked);
    }

    showEditor() {
        this.editorContainer.style.display = 'block';
        this.updateInputValues();
        this.isEditorVisible = true;
    }

    hideEditor() {
        this.editorContainer.style.display = 'none';
        this.isEditorVisible = false;
    }

    showJumpOrbEditor() {
        this.jumpOrbEditorContainer.style.display = 'block';
        this.updateJumpOrbInputValues();
        this.isJumpOrbEditorVisible = true;
    }

    hideJumpOrbEditor() {
        this.jumpOrbEditorContainer.style.display = 'none';
        this.isJumpOrbEditorVisible = false;
    }

    showSpikeEditor() {
        this.spikeEditorContainer.style.display = 'block';
        this.updateSpikeInputValues();
        this.isSpikeEditorVisible = true;
    }

    hideSpikeEditor() {
        this.spikeEditorContainer.style.display = 'none';
        this.isSpikeEditorVisible = false;
    }

    getAddBrickButton() {
        return this.addBrickButton;
    }

    getAddJumpOrbButton() {
        return this.addJumpOrbButton;
    }

    getAddSpikeButton() {
        return this.addSpikeButton;
    }

    getEditorContainer() {
        return this.editorContainer;
    }

    getJumpOrbEditorContainer() {
        return this.jumpOrbEditorContainer;
    }

    getSpikeEditorContainer() {
        return this.spikeEditorContainer;
    }

    activate() {
        document.body.appendChild(this.addBrickButton);
        document.body.appendChild(this.addJumpOrbButton);
        document.body.appendChild(this.addSpikeButton);
        document.body.appendChild(this.editorContainer);
        document.body.appendChild(this.jumpOrbEditorContainer);
        document.body.appendChild(this.spikeEditorContainer);
        
        this.attachEventListeners();
    }

    deactivate() {
        if (this.addBrickButton && this.addBrickButton.parentNode) {
            document.body.removeChild(this.addBrickButton);
        }
        if (this.addJumpOrbButton && this.addJumpOrbButton.parentNode) {
            document.body.removeChild(this.addJumpOrbButton);
        }
        if (this.addSpikeButton && this.addSpikeButton.parentNode) {
            document.body.removeChild(this.addSpikeButton);
        }
        if (this.editorContainer && this.editorContainer.parentNode) {
            document.body.removeChild(this.editorContainer);
        }
        if (this.jumpOrbEditorContainer && this.jumpOrbEditorContainer.parentNode) {
            document.body.removeChild(this.jumpOrbEditorContainer);
        }
        if (this.spikeEditorContainer && this.spikeEditorContainer.parentNode) {
            document.body.removeChild(this.spikeEditorContainer);
        }
        
        this.detachEventListeners();
    }
}

/***/ }),

/***/ "./src/app_states/level_designer/player_editor.js":
/*!********************************************************!*\
  !*** ./src/app_states/level_designer/player_editor.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerEditor)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _app_states_level_designer_base_level_designer_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app_states/level_designer/base_level_designer_manager.js */ "./src/app_states/level_designer/base_level_designer_manager.js");
/* harmony import */ var _common_string_resources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/string_resources */ "./src/common/string_resources.js");





class PlayerEditor extends _app_states_level_designer_base_level_designer_manager_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(world, eventHandler) {
        super();
        this.world = world;
        this.eventHandler = eventHandler;
        this.player = world.player;
        this.container = null;
        this.isVisible = false;

        this.handleXChange = this.handleXChange.bind(this);
        this.handleYChange = this.handleYChange.bind(this);
        this.handleWidthChange = this.handleWidthChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
        
        this.createDOMElements();
        this.subscribeToEventHandler();
    }

    createDOMElements() {
        this.container = document.createElement('div');
        this.container.style.cssText = `
            position: fixed;
            bottom: 220px;
            left: 10px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 12px;
            z-index: 1000;
            width: 250px;
            display: none;
        `;

        const title = document.createElement('div');
        title.textContent = 'Player editor';
        title.style.cssText = `
            font-weight: bold;
            margin-bottom: 10px;
            border-bottom: 1px solid #444;
            padding-bottom: 5px;
        `;
        this.container.appendChild(title);

        const positionGroup = document.createElement('div');
        positionGroup.style.marginBottom = '10px';
        
        const positionTitle = document.createElement('label');
        positionTitle.textContent = `${_common_string_resources__WEBPACK_IMPORTED_MODULE_3__["default"].POSITION}:`;
        positionTitle.style.display = 'block';
        positionTitle.style.marginBottom = '5px';
        positionGroup.appendChild(positionTitle);

        const xyContainer = document.createElement('div');
        xyContainer.style.cssText = `
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
        `;
        
        const xWrapper = document.createElement('div');
        xWrapper.style.flex = '1';
        
        const xLabel = document.createElement('label');
        xLabel.textContent = `${_common_string_resources__WEBPACK_IMPORTED_MODULE_3__["default"].X}:`;
        xLabel.style.cssText = `
            font-size: 10px;
            display: block;
            margin-bottom: 2px;
        `;
        
        this.xInput = document.createElement('input');
        this.xInput.type = 'number';
        this.xInput.id = 'playerXInput';
        this.xInput.step = 10;
        this.xInput.style.cssText = `
            width: 100%;
            padding: 4px;
            border: 1px solid #555;
            background: #333;
            color: white;
            border-radius: 3px;
        `;
        
        xWrapper.appendChild(xLabel);
        xWrapper.appendChild(this.xInput);
        xyContainer.appendChild(xWrapper);

        const yWrapper = document.createElement('div');
        yWrapper.style.flex = '1';
        
        const yLabel = document.createElement('label');
        yLabel.textContent = `${_common_string_resources__WEBPACK_IMPORTED_MODULE_3__["default"].Y}:`;
        yLabel.style.cssText = `
            font-size: 10px;
            display: block;
            margin-bottom: 2px;
        `;
        
        this.yInput = document.createElement('input');
        this.yInput.type = 'number';
        this.yInput.id = 'playerYInput';
        this.yInput.step = 10;
        this.yInput.style.cssText = `
            width: 100%;
            padding: 4px;
            border: 1px solid #555;
            background: #333;
            color: white;
            border-radius: 3px;
        `;
        
        yWrapper.appendChild(yLabel);
        yWrapper.appendChild(this.yInput);
        xyContainer.appendChild(yWrapper);

        positionGroup.appendChild(xyContainer);
        this.container.appendChild(positionGroup);

        const sizeGroup = document.createElement('div');
        
        const sizeTitle = document.createElement('label');
        sizeTitle.textContent = `${_common_string_resources__WEBPACK_IMPORTED_MODULE_3__["default"].SIZE}:`;
        sizeTitle.style.display = 'block';
        sizeTitle.style.marginBottom = '5px';
        sizeGroup.appendChild(sizeTitle);

        const sizeContainer = document.createElement('div');
        sizeContainer.style.cssText = `
            display: flex;
            gap: 10px;
        `;
        
        const widthWrapper = document.createElement('div');
        widthWrapper.style.flex = '1';
        
        const widthLabel = document.createElement('label');
        widthLabel.textContent = `${_common_string_resources__WEBPACK_IMPORTED_MODULE_3__["default"].WIDTH}:`;
        widthLabel.style.cssText = `
            font-size: 10px;
            display: block;
            margin-bottom: 2px;
        `;
        
        this.widthInput = document.createElement('input');
        this.widthInput.type = 'number';
        this.widthInput.id = 'playerWidthInput';
        this.widthInput.step = 10;
        this.widthInput.style.cssText = `
            width: 100%;
            padding: 4px;
            border: 1px solid #555;
            background: #333;
            color: white;
            border-radius: 3px;
        `;
        
        widthWrapper.appendChild(widthLabel);
        widthWrapper.appendChild(this.widthInput);
        sizeContainer.appendChild(widthWrapper);

        const heightWrapper = document.createElement('div');
        heightWrapper.style.flex = '1';
        
        const heightLabel = document.createElement('label');
        heightLabel.textContent = `${_common_string_resources__WEBPACK_IMPORTED_MODULE_3__["default"].HEIGHT}:`;
        heightLabel.style.cssText = `
            font-size: 10px;
            display: block;
            margin-bottom: 2px;
        `;
        
        this.heightInput = document.createElement('input');
        this.heightInput.type = 'number';
        this.heightInput.id = 'playerHeightInput';
        this.heightInput.step = 10;
        this.heightInput.style.cssText = `
            width: 100%;
            padding: 4px;
            border: 1px solid #555;
            background: #333;
            color: white;
            border-radius: 3px;
        `;
        
        heightWrapper.appendChild(heightLabel);
        heightWrapper.appendChild(this.heightInput);
        sizeContainer.appendChild(heightWrapper);

        sizeGroup.appendChild(sizeContainer);
        this.container.appendChild(sizeGroup);
    }

    subscribeToEventHandler() {
        if (this.eventHandler) {
            this.eventHandler.addOnMouseDownCallback((selectedObject, point, ctrlPressed) => {
                if (selectedObject?.getType() === 'CubePlayer') {
                    this.show();
                } else {
                    this.hide();
                }
            });
        }
    }

    attachEventListeners() {
        this.xInput.addEventListener('change', this.handleXChange);
        this.yInput.addEventListener('change', this.handleYChange);
        this.widthInput.addEventListener('change', this.handleWidthChange);
        this.heightInput.addEventListener('change', this.handleHeightChange);
    }

    detachEventListeners() {
        this.xInput.removeEventListener('change', this.handleXChange);
        this.yInput.removeEventListener('change', this.handleYChange);
        this.widthInput.removeEventListener('change', this.handleWidthChange);
        this.heightInput.removeEventListener('change', this.handleHeightChange);
    }

    handleXChange(event) {
        const newX = parseInt(event.target.value, 10);
        if (!isNaN(newX)) {
            this.player.coords = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](newX, this.player.coords.y, this.player.coords.z);
        }
    }

    handleYChange(event) {
        const newY = parseInt(event.target.value, 10);
        if (!isNaN(newY)) {
            this.player.coords = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.player.coords.x, newY, this.player.coords.z);
        }
    }

    handleWidthChange(event) {
        const newWidth = parseInt(event.target.value, 10);
        if (!isNaN(newWidth) && newWidth >= 10) {
            this.player.size = new _common_size_js__WEBPACK_IMPORTED_MODULE_1__["default"](newWidth, this.player.size.height);
        }
    }

    handleHeightChange(event) {
        const newHeight = parseInt(event.target.value, 10);
        if (!isNaN(newHeight) && newHeight >= 10) {
            this.player.size = new _common_size_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.player.size.width, newHeight);
        }
    }

    updateInputValues() {
        this.xInput.value = Math.round(this.player.coords.x);
        this.yInput.value = Math.round(this.player.coords.y);
        this.widthInput.value = this.player.size.width;
         this.heightInput.value = this.player.size.height;
    }

    show() {
        this.container.style.display = 'block';
        this.updateInputValues();
        this.isVisible = true;
    }

    hide() {
        this.container.style.display = 'none';
        this.isVisible = false;
    }

    activate() {
        document.body.appendChild(this.container);
        this.attachEventListeners();
        this.hide();
    }

    deactivate() {
        document.body.removeChild(this.container);
        this.detachEventListeners();
    }
}

/***/ }),

/***/ "./src/app_states/level_designer/scroll_manager.js":
/*!*********************************************************!*\
  !*** ./src/app_states/level_designer/scroll_manager.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollManager)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _app_states_level_designer_base_level_designer_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app_states/level_designer/base_level_designer_manager.js */ "./src/app_states/level_designer/base_level_designer_manager.js");




class ScrollManager extends _app_states_level_designer_base_level_designer_manager_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(world, canvas, canvasSize, eventHandler) {
        super();
        this.world = world;
        this.canvas = canvas;
        this.canvasSize = canvasSize;
        this.eventHandler = eventHandler;
        
        this.mouseX = 0;
        this.mouseY = 0;
        this.lastMouseX = 0;
        this.lastMouseY = 0;
        
        this.isSpacePressed = false;
        this.isDragging = false;
        this.world.worldOffset = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        this.gridStep = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](10, 10);
        
        this.horizontalScrollbar = null;
        this.verticalScrollbar = null;
        this.horizontalThumb = null;
        this.verticalThumb = null;
        
        this.isDraggingHorizontal = false;
        this.isDraggingVertical = false;
        this.dragStartOffset = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        this.dragStartScrollPosition = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleScrollbarMouseDown = this.handleScrollbarMouseDown.bind(this);
        this.handleScrollbarMouseMove = this.handleScrollbarMouseMove.bind(this);
        this.handleScrollbarMouseUp = this.handleScrollbarMouseUp.bind(this);
        this.handleWindowResize = this.handleWindowResize.bind(this);
        
        this.createScrollbars();
        this.subscribeToEventHandler();
    }
    
    subscribeToEventHandler() {
        if (this.eventHandler) {
            this.eventHandler.addOnMouseMoveCallback((point) => {
                this.mouseX = point.x;
                this.mouseY = point.y;
            });
        }
    }
    
    activate() {
        this.canvas.addEventListener('mousemove', this.handleMouseMove);
        this.canvas.addEventListener('mousedown', this.handleMouseDown);
        this.canvas.addEventListener('mouseup', this.handleMouseUp);
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
        
        document.body.appendChild(this.horizontalScrollbar);
        document.body.appendChild(this.verticalScrollbar);
        this.updateScrollbars();
        this.updateScrollbarPositions();
        
        window.addEventListener('resize', this.handleWindowResize);
    }
    
    deactivate() {
        this.canvas.removeEventListener('mousemove', this.handleMouseMove);
        this.canvas.removeEventListener('mousedown', this.handleMouseDown);
        this.canvas.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('keyup', this.handleKeyUp);
        
        document.body.removeChild(this.horizontalScrollbar);
        document.body.removeChild(this.verticalScrollbar);
        
        document.removeEventListener('mousemove', this.handleScrollbarMouseMove);
        document.removeEventListener('mouseup', this.handleScrollbarMouseUp);
        window.removeEventListener('resize', this.handleWindowResize);
    }
    
    handleMouseMove(event) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouseX = event.clientX - rect.left;
        this.mouseY = event.clientY - rect.top;

        if (this.isSpacePressed && this.isDragging) {
            const delta = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
                this.mouseX - this.lastMouseX,
                this.mouseY - this.lastMouseY
            );
            this.updateWorldOffset(delta);

            this.canvas.style.cursor = 'grabbing';
        } else if (this.isSpacePressed) {
            this.canvas.style.cursor = 'grab';
        } else {
            this.canvas.style.cursor = 'default';
        }

        this.lastMouseX = this.mouseX;
        this.lastMouseY = this.mouseY;
    }
    
    handleMouseDown(event) {
        if (this.isSpacePressed) {
            this.isDragging = true;
            this.lastMouseX = this.mouseX;
            this.lastMouseY = this.mouseY;
        }
    }
    
    handleMouseUp(event) {
        this.isDragging = false;
    }
    
    handleKeyDown(event) {
        if (event.code === 'Space') {
            event.preventDefault();
            this.isSpacePressed = true;
        }
    }
    
    handleKeyUp(event) {
        if (event.code === 'Space') {
            event.preventDefault();
            this.isSpacePressed = false;
            this.isDragging = false;
            this.canvas.style.cursor = 'default';
        }
    }
    
    updateWorldOffset(delta) {
        delta.x = Math.floor(delta.x / this.gridStep.x) * this.gridStep.x;
        delta.y = Math.floor(delta.y / this.gridStep.y) * this.gridStep.y;

        const originalX = this.world.worldOffset.x;
        const originalY = this.world.worldOffset.y;

        this.world.worldOffset.x -= delta.x;
        this.world.worldOffset.y -= delta.y;
        
        const maxOffsetX = Math.max(0, this.world.size.width - this.canvasSize.width);
        const maxOffsetY = Math.max(0, this.world.size.height - this.canvasSize.height);
        
        this.world.worldOffset.x = Math.max(0, Math.min(this.world.worldOffset.x, maxOffsetX));
        this.world.worldOffset.y = Math.max(0, Math.min(this.world.worldOffset.y, maxOffsetY));
        
        return new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            this.world.worldOffset.x - originalX,
            this.world.worldOffset.y - originalY
        );
    }
    
    getWorldOffset() {
        return this.world.worldOffset;
    }
    
    getMousePosition() {
        return new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.mouseX, this.mouseY);
    }
    
    isInScrollMode() {
        return this.isSpacePressed;
    }
    
    createScrollbars() {
        const canvasRect = this.canvas.getBoundingClientRect();
        
        this.horizontalScrollbar = document.createElement('div');
        this.horizontalScrollbar.style.cssText = `
            position: fixed;
            bottom: ${window.innerHeight - canvasRect.bottom - 20}px;
            left: ${canvasRect.left}px;
            width: ${this.canvasSize.width}px;
            height: 16px;
            background: rgba(40, 40, 40, 0.9);
            z-index: 1001;
            display: none;
            cursor: pointer;
        `;
        
        this.horizontalThumb = document.createElement('div');
        this.horizontalThumb.style.cssText = `
            position: absolute;
            top: 2px;
            left: 0;
            height: 12px;
            background: rgba(204, 204, 204, 0.8);
            border-radius: 6px;
            cursor: grab;
            min-width: 20px;
        `;
        this.horizontalThumb.addEventListener('mousedown', this.handleScrollbarMouseDown);
        this.horizontalScrollbar.appendChild(this.horizontalThumb);
        
        this.verticalScrollbar = document.createElement('div');
        this.verticalScrollbar.style.cssText = `
            position: fixed;
            top: ${canvasRect.top}px;
            right: ${window.innerWidth - canvasRect.right - 20}px;
            width: 16px;
            height: ${this.canvasSize.height}px;
            background: rgba(40, 40, 40, 0.9);
            z-index: 1001;
            display: none;
            cursor: pointer;
        `;
        
        this.verticalThumb = document.createElement('div');
        this.verticalThumb.style.cssText = `
            position: absolute;
            top: 0;
            left: 2px;
            width: 12px;
            background: rgba(204, 204, 204, 0.8);
            border-radius: 6px;
            cursor: grab;
            min-height: 20px;
        `;
        this.verticalThumb.addEventListener('mousedown', this.handleScrollbarMouseDown);
        this.verticalScrollbar.appendChild(this.verticalThumb);
        
        this.horizontalScrollbar.addEventListener('click', (e) => this.handleTrackClick(e, 'horizontal'));
        this.verticalScrollbar.addEventListener('click', (e) => this.handleTrackClick(e, 'vertical'));
    }
    
    handleScrollbarMouseDown(event) {
        event.preventDefault();
        
        if (event.target === this.horizontalThumb) {
            this.isDraggingHorizontal = true;
            this.dragStartOffset = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](event.clientX, event.clientY);
            this.dragStartScrollPosition = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.world.worldOffset.x, this.world.worldOffset.y);
        } else if (event.target === this.verticalThumb) {
            this.isDraggingVertical = true;
            this.dragStartOffset = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](event.clientX, event.clientY);
            this.dragStartScrollPosition = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.world.worldOffset.x, this.world.worldOffset.y);
        }
        
        document.addEventListener('mousemove', this.handleScrollbarMouseMove);
        document.addEventListener('mouseup', this.handleScrollbarMouseUp);
    }
    
    handleScrollbarMouseMove(event) {
        if (this.isDraggingHorizontal) {
            const deltaX = event.clientX - this.dragStartOffset.x;
            const maxScroll = this.world.size.width - this.canvasSize.width;
            const scrollRatio = deltaX / (this.canvasSize.width - this.getThumbSize('horizontal'));
            let newScrollX = Math.max(0, Math.min(maxScroll, this.dragStartScrollPosition.x + scrollRatio * maxScroll));
            newScrollX = Math.floor(newScrollX / this.gridStep.x) * this.gridStep.x;

            this.world.worldOffset = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](newScrollX, this.world.worldOffset.y);
            this.updateScrollbars();
        }
        
        if (this.isDraggingVertical) {
            const deltaY = event.clientY - this.dragStartOffset.y;
            const maxScroll = this.world.size.height - this.canvasSize.height;
            const scrollRatio = deltaY / (this.canvasSize.height - this.getThumbSize('vertical'));
            let newScrollY = Math.max(0, Math.min(maxScroll, this.dragStartScrollPosition.y + scrollRatio * maxScroll));
            newScrollY = Math.floor(newScrollY / this.gridStep.y) * this.gridStep.y;
            
            this.world.worldOffset = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.world.worldOffset.x, newScrollY);
            this.updateScrollbars();
        }
    }
    
    handleScrollbarMouseUp() {
        this.isDraggingHorizontal = false;
        this.isDraggingVertical = false;
        
        document.removeEventListener('mousemove', this.handleScrollbarMouseMove);
        document.removeEventListener('mouseup', this.handleScrollbarMouseUp);
    }
    
    handleTrackClick(event, orientation) {
        if (event.target === this.horizontalThumb || event.target === this.verticalThumb) {
            return;
        }
        
        const rect = event.target.getBoundingClientRect();
        
        if (orientation === 'horizontal') {
            const clickRatio = (event.clientX - rect.left) / rect.width;
            const maxScroll = this.world.size.width - this.canvasSize.width;
            const newScrollX = Math.max(0, Math.min(maxScroll, clickRatio * maxScroll));
            this.world.worldOffset = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](newScrollX, this.world.worldOffset.y);
        } else {
            const clickRatio = (event.clientY - rect.top) / rect.height;
            const maxScroll = this.world.size.height - this.canvasSize.height;
            const newScrollY = Math.max(0, Math.min(maxScroll, clickRatio * maxScroll));
            this.world.worldOffset = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.world.worldOffset.x, newScrollY);
        }
        
        this.updateScrollbars();
    }
    
    getThumbSize(orientation) {
        if (orientation === 'horizontal') {
            const ratio = this.canvasSize.width / this.world.size.width;
            return Math.max(20, this.canvasSize.width * ratio);
        } else {
            const ratio = this.canvasSize.height / this.world.size.height;
            return Math.max(20, this.canvasSize.height * ratio);
        }
    }
    
    getThumbPosition(orientation) {
        if (orientation === 'horizontal') {
            const maxScroll = this.world.size.width - this.canvasSize.width;
            if (maxScroll <= 0) return 0;
            const scrollRatio = this.world.worldOffset.x / maxScroll;
            return scrollRatio * (this.canvasSize.width - this.getThumbSize('horizontal'));
        } else {
            const maxScroll = this.world.size.height - this.canvasSize.height;
            if (maxScroll <= 0) return 0;
            const scrollRatio = this.world.worldOffset.y / maxScroll;
            return scrollRatio * (this.canvasSize.height - this.getThumbSize('vertical'));
        }
    }
    
    updateScrollbars() {
        const needsHorizontalScroll = this.world.size.width > this.canvasSize.width;
        const needsVerticalScroll = this.world.size.height > this.canvasSize.height;
        
        if (needsHorizontalScroll) {
            this.horizontalScrollbar.style.display = 'block';
            const thumbWidth = this.getThumbSize('horizontal');
            const thumbPosition = this.getThumbPosition('horizontal');
            
            this.horizontalThumb.style.width = `${thumbWidth}px`;
            this.horizontalThumb.style.left = `${thumbPosition}px`;
        } else {
            this.horizontalScrollbar.style.display = 'none';
        }
        
        if (needsVerticalScroll) {
            this.verticalScrollbar.style.display = 'block';
            const thumbHeight = this.getThumbSize('vertical');
            const thumbPosition = this.getThumbPosition('vertical');
            
            this.verticalThumb.style.height = `${thumbHeight}px`;
            this.verticalThumb.style.top = `${thumbPosition}px`;
        } else {
            this.verticalScrollbar.style.display = 'none';
        }
    }
    
    onWorldSizeChanged() {
        this.updateScrollbars();
    }
    
    updateScrollbarPositions() {
        const canvasRect = this.canvas.getBoundingClientRect();
        
        this.horizontalScrollbar.style.bottom = `${window.innerHeight - canvasRect.bottom - 20}px`;
        this.horizontalScrollbar.style.left = `${canvasRect.left}px`;
        
        this.verticalScrollbar.style.top = `${canvasRect.top}px`;
        this.verticalScrollbar.style.right = `${window.innerWidth - canvasRect.right - 20}px`;
    }
    
    handleWindowResize() {
        this.updateScrollbarPositions();
    }
}

/***/ }),

/***/ "./src/app_states/level_designer/selection/group_selection.js":
/*!********************************************************************!*\
  !*** ./src/app_states/level_designer/selection/group_selection.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GroupSelection)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");


class GroupSelection {

    constructor(selectedObjects) {
        this.objects = selectedObjects || [];
        this.rawCoords = new Map();
    }

    select(object) {
        if (!this.contains(object)) {
            this.objects.push(object);
            this.rawCoords.set(object, new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](object.coords.x, object.coords.y));
        }
    }

    deselect() {
        this.objects = [];
    }

    setStrokeWidth(width) {
        this.objects.forEach(item => {
            item.strokeWidth = width;
        });
    }

    setStrokeColor(color) {
        this.objects.forEach(item => {
            item.strokeColor = color;
        });
    }

    setBackgroundColor(color) {
        this.objects.forEach(item => {
            item.backgroundColor = color;
        });
    }

    move(offset, map) {
        this.objects.forEach(item => {
            const rawCoords = this.rawCoords.get(item);
            rawCoords.x += offset.x;
            rawCoords.y += offset.y;
            item.coords = map(rawCoords);
        });
    }

    setWidth(width) {
        this.objects.forEach(item => {
            item.size.width = width;
        });
    }

    setHeight(height) {
        this.objects.forEach(item => {
            item.size.height = height;
        });
    }

    setX(x) {
        this.objects.forEach(item => {
            item.coords.x = x;
        });
    }

    setY(y) {
        this.objects.forEach(item => {
            item.coords.y = y;
        });
    }

    setId(id) {
        if (!this.isGroup() && !this.isEmpty()) {
            this.objects[0].id = id;
        }
    }

    setIsReversed(isReversed) {
        this.objects.forEach(item => {
            if (item.getType() === 'Spike' || item.getType() === 'JumpOrb') {
                item.isReversed = isReversed;
            }
        });
    }

    isGroup() {
        return this.objects.length > 1;
    }

    contains(object) {
        return this.objects.includes(object);
    }

    removeObject(object) {
        const index = this.objects.indexOf(object);
        if (index > -1) {
            this.objects.splice(index, 1);
        }
    }

    isEmpty() {
        return this.objects.length === 0;
    }
}

/***/ }),

/***/ "./src/app_states/level_designer/selection/selection_manager.js":
/*!**********************************************************************!*\
  !*** ./src/app_states/level_designer/selection/selection_manager.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectionManager)
/* harmony export */ });
/* harmony import */ var _app_states_level_designer_selection_group_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app_states/level_designer/selection/group_selection */ "./src/app_states/level_designer/selection/group_selection.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _common_game_actors_brick_brick_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/game/actors/brick/brick.js */ "./src/common/game/actors/brick/brick.js");
/* harmony import */ var _common_game_actors_spike_spike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/game/actors/spike/spike.js */ "./src/common/game/actors/spike/spike.js");
/* harmony import */ var _common_game_actors_jump_orb_jump_orb_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/game/actors/jump_orb/jump_orb.js */ "./src/common/game/actors/jump_orb/jump_orb.js");







class SelectionManager {
    constructor(world, eventHandler) {
        this.currentSelection = new _app_states_level_designer_selection_group_selection__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.world = world;
        this.eventHandler = eventHandler;
        this.clipboard = [];
        this.clipboardPosition = null;
        this.idCounter = 0;

        this.onRemoved = () => {};
        
        this.subscribeToEventHandler();
    }

    get selection() {
        return this.currentSelection;
    }

    get objects() {
        return 
    }

    contains(object) {
        return this.currentSelection.contains(object);
    }

    addToSelection(object, ctrlPressed) {
        if (!this.currentSelection.isEmpty() && !ctrlPressed) {
            this.currentSelection.deselect();
        }
        this.currentSelection.select(object);
    }

    removeFromSelection(object) {
            this.currentSelection.removeObject(object);
    }

    clearSelection() {
        this.currentSelection.deselect();
    }

    isGroupSelected() {
        return this.currentSelection.isGroup();
    }

    hasSelection() {
        return !this.currentSelection.isEmpty();
    }

    setStrokeWidth(width) {
        this.currentSelection.setStrokeWidth(width);
    }

    setStrokeColor(color) {
        this.currentSelection.setStrokeColor(color);
    }

    setBackgroundColor(color) {
        this.currentSelection.setBackgroundColor(color);
    }

    setX(x) {
        this.currentSelection.setX(x);
    }

    setY(y) {
        this.currentSelection.setY(y);
    }

    setWidth(width) {
        this.currentSelection.setWidth(width);
    }

    setHeight(height) {
        this.currentSelection.setHeight(height);
    }

    setId(id) {
        this.currentSelection.setId(id);
    }

    setIsReversed(isReversed) {
        this.currentSelection.setIsReversed(isReversed);
    }

    move(offset, map) {
        this.currentSelection.move(offset, map);
    }
    
    deleteSelectedBricks() {
        const selectedObjects = this.currentSelection.objects;
        const bricksToDelete = selectedObjects.filter(obj => obj.getType() === 'Brick');
        bricksToDelete.forEach(item => {
            const index = this.world.bricks.indexOf(item);
            if (index > -1) {
                this.world.bricks.splice(index, 1);
            }
        });

        const jumpOrbsToDelete = selectedObjects.filter(obj => obj.getType() === 'JumpOrb');
        jumpOrbsToDelete.forEach(item => {
            const index = this.world.jumpOrbs.indexOf(item);
            if (index > -1) {
                this.world.jumpOrbs.splice(index, 1);
            }
        });

        const spikesToDelete = selectedObjects.filter(obj => obj.getType() === 'Spike');
        spikesToDelete.forEach(item => {
            const index = this.world.spikes.indexOf(item);
            if (index > -1) {
                this.world.spikes.splice(index, 1);
            }
        });
        
        this.clearSelection();

        if (bricksToDelete.length) {
            this.onRemoved();
        }
    }

    drawSelection(ctx, canvasSize, worldOffset, playerOptions) {
        const selectedObjects = this.currentSelection.objects;
        if (selectedObjects.length > 0) {
            ctx.strokeStyle = this.isGroupSelected() ? '#00ff00' : '#ff0000';
            ctx.lineWidth = 4;
            
            selectedObjects.forEach(obj => {
                const bounds = obj.getVisibleBounds(canvasSize, worldOffset, playerOptions);
                ctx.strokeRect(bounds.coords.x + 2, bounds.coords.y + 2, bounds.size.width - 4, bounds.size.height - 4);
            });
        }
    }

    subscribeToEventHandler() {
        if (this.eventHandler) {
            this.eventHandler.addOnKeyDownCallback((event) => {
                this.handleKeyDownEvent(event);
            });
        }
    }

    handleKeyDownEvent(event) {
        if (event.ctrlKey && event.key === 'c') {
            event.preventDefault();
            this.copySelection();
        } else if (event.ctrlKey && event.key === 'v') {
            event.preventDefault();
            this.pasteSelection();
        } else if (event.key === 'Delete' && this.hasSelection()) {
            this.deleteSelectedBricks();
        }
    }

    copySelection() {
        if (this.hasSelection()) {
            this.clipboard = this.currentSelection.objects.map(obj => ({
                type: obj.getType(),
                id: obj.id,
                coords: { x: obj.coords.x, y: obj.coords.y },
                size: { width: obj.size.width, height: obj.size.height },
                backgroundColor: obj.backgroundColor,
                strokeWidth: obj.strokeWidth,
                strokeColor: obj.strokeColor,
                isActive: obj.isActive,
                isReversed: obj.isReversed
            }));

            const bounds = this.getSelectionBounds();
            this.clipboardPosition = new _common_point_js__WEBPACK_IMPORTED_MODULE_1__["default"](
                bounds.minX,
                bounds.minY
            );
        }
    }

    pasteSelection() {
        if (this.clipboard.length > 0 && this.clipboardPosition) {
            this.clearSelection();

            const pastedObjects = [];
            this.clipboard.forEach(objData => {
                const relativeX = objData.coords.x - this.clipboardPosition.x;
                const relativeY = objData.coords.y - this.clipboardPosition.y;
                if (objData.type === 'Brick') {
                    pastedObjects.push(this.createBrick({
                        ...objData,
                        coords: new _common_point_js__WEBPACK_IMPORTED_MODULE_1__["default"](
                            this.clipboardPosition.x + relativeX,
                            this.clipboardPosition.y + relativeY
                        )
                    }));
                } else if (objData.type === 'JumpOrb') {
                    pastedObjects.push(this.createJumpOrb(objData));
                } else if (objData.type === 'Spike') {
                    pastedObjects.push(this.createSpike(objData));
                }
            });

            pastedObjects.forEach(obj => {
                this.currentSelection.select(obj);
            });
        }
    }

    createBrick(data) {
        const itemCoords = new _common_point_js__WEBPACK_IMPORTED_MODULE_1__["default"](data.coords.x, data.coords.y);
        const itemSize = new _common_size_js__WEBPACK_IMPORTED_MODULE_2__["default"](data.size.width, data.size.height);
        
        const itemId = `${data.id}-copy-${++this.idCounter}`;
        
        const newItem = new _common_game_actors_brick_brick_js__WEBPACK_IMPORTED_MODULE_3__["default"](
            itemId,
            itemCoords,
            itemSize,
            data.backgroundColor,
            data.strokeWidth,
            data.strokeColor,
            data.isActive
        );

        this.world.bricks.unshift(newItem);
        return newItem;
    }

    createSpike(data) {
        const itemCoords = new _common_point_js__WEBPACK_IMPORTED_MODULE_1__["default"](data.coords.x, data.coords.y);
        const itemSize = new _common_size_js__WEBPACK_IMPORTED_MODULE_2__["default"](data.size.width, data.size.height);
        
        const itemId = `${data.id}-copy-${++this.idCounter}`;
        
        const newItem = new _common_game_actors_spike_spike_js__WEBPACK_IMPORTED_MODULE_4__["default"](
            itemId,
            itemCoords,
            itemSize,
            data.backgroundColor,
            data.strokeWidth,
            data.strokeColor,
            data.isActive,
            data.isReversed
        );

        this.world.spikes.unshift(newItem);
        return newItem;
    }

    createJumpOrb(data) {
        const coords = new _common_point_js__WEBPACK_IMPORTED_MODULE_1__["default"](data.coords.x, data.coords.y);
        const itemId = `${data.id}-copy-${++this.idCounter}`;
        const newItem = new _common_game_actors_jump_orb_jump_orb_js__WEBPACK_IMPORTED_MODULE_5__["default"](
            itemId,
            coords,
            data.isReversed
        );
        this.world.jumpOrbs.unshift(newItem);
        return newItem;
    }

    getSelectionBounds() {
        const selectedObjects = this.currentSelection.objects;
        if (selectedObjects.length === 0) {
            return { minX: 0, minY: 0, maxX: 0, maxY: 0 };
        }

        let minX = selectedObjects[0].coords.x;
        let minY = selectedObjects[0].coords.y;
        let maxX = selectedObjects[0].coords.x + selectedObjects[0].size.width;
        let maxY = selectedObjects[0].coords.y + selectedObjects[0].size.height;

        selectedObjects.forEach(obj => {
            minX = Math.min(minX, obj.coords.x);
            minY = Math.min(minY, obj.coords.y);
            maxX = Math.max(maxX, obj.coords.x + obj.size.width);
            maxY = Math.max(maxY, obj.coords.y + obj.size.height);
        });

        return { minX, minY, maxX, maxY };
    }
}

/***/ }),

/***/ "./src/app_states/level_designer/ui_manager.js":
/*!*****************************************************!*\
  !*** ./src/app_states/level_designer/ui_manager.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UIManager)
/* harmony export */ });
/* harmony import */ var _common_string_resources_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/string_resources.js */ "./src/common/string_resources.js");


class UIManager {
    constructor(scrollManager, world, canvasSize) {
        this.scrollManager = scrollManager;
        this.world = world;
        this.canvasSize = canvasSize;

        this.infoContainer = null;
        this.backButton = null;

        this.onBack = () => {};
        this.handleBack = this.handleBack.bind(this);
    }

    drawUI(ctx) {
        const mousePos = this.scrollManager.getMousePosition();
        const worldOffset = this.scrollManager.getWorldOffset();
        
        this.mouseInfo.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_0__["default"].MOUSE}: (${Math.round(mousePos.x)}, ${Math.round(mousePos.y)})`;
        this.worldOffsetInfo.textContent = `${_common_string_resources_js__WEBPACK_IMPORTED_MODULE_0__["default"].WORLD_OFFSET}: (${Math.round(worldOffset.x)}, ${Math.round(worldOffset.y)})`;

        if (!this.scrollManager.isInScrollMode()) {
            ctx.fillStyle = '#999999';
            ctx.font = '14px Arial';        
        }
    }

    drawBackground(ctx) {
        ctx.fillStyle = '#2a2a2a';
        ctx.fillRect(0, 0, this.canvasSize.width, this.canvasSize.height);

        ctx.fillStyle = '#404040';
        const gameAreaWidth = Math.min(this.world.size.width, this.canvasSize.width);
        const gameAreaHeight = Math.min(this.world.size.height, this.canvasSize.height);
        ctx.fillRect(0, 0, gameAreaWidth, gameAreaHeight);
    }

    drawGrid(ctx) {
        const gridStep = 10;
        ctx.strokeStyle = '#555555';
        ctx.lineWidth = 1;

        const worldOffset = this.world.worldOffset;

        ctx.save();
        ctx.translate(-worldOffset.x, -worldOffset.y);
        
        const visibleStartX = worldOffset.x;
        const visibleEndX = worldOffset.x + this.canvasSize.width;
        const visibleStartY = worldOffset.y;
        const visibleEndY = worldOffset.y + this.canvasSize.height;
        
        const startX = Math.floor(visibleStartX / gridStep) * gridStep;
        const endX = Math.ceil(visibleEndX / gridStep) * gridStep;
        const startY = Math.floor(visibleStartY / gridStep) * gridStep;
        const endY = Math.ceil(visibleEndY / gridStep) * gridStep;
        
        for (let x = startX; x <= endX; x += gridStep) {
            if (x >= 0 && x <= this.world.size.width && x >= visibleStartX && x <= visibleEndX) {
                ctx.beginPath();
                ctx.moveTo(x, Math.max(0, Math.max(visibleStartY, 0)));
                ctx.lineTo(x, Math.min(this.world.size.height, Math.min(visibleEndY, this.world.size.height)));
                ctx.stroke();
            }
        }
        
        for (let y = startY; y <= endY; y += gridStep) {
            if (y >= 0 && y <= this.world.size.height && y >= visibleStartY && y <= visibleEndY) {
                ctx.beginPath();
                ctx.moveTo(Math.max(0, Math.max(visibleStartX, 0)), y);
                ctx.lineTo(Math.min(this.world.size.width, Math.min(visibleEndX, this.world.size.width)), y);
                ctx.stroke();
            }
        }

        ctx.restore();
    }

    createBackButton() {
        if (this.backButton) {
            this.detachBackEventListeners();
            if (this.backButton.parentNode) {
                this.backButton.parentNode.removeChild(this.backButton);
            }
        }

        this.backButton = document.createElement('button');
        this.backButton.textContent = _common_string_resources_js__WEBPACK_IMPORTED_MODULE_0__["default"].BACK;
        this.backButton.style.cssText = `
            position: absolute;
            top: 24px;
            left: 10px;
            background: #757575;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        `;

        this.handleBackMouseEnter = () => {
            this.backButton.style.background = '#616161';
        };

        this.handleBackMouseLeave = () => {
            this.backButton.style.background = '#757575';
        };

        this.backButton.addEventListener('mouseenter', this.handleBackMouseEnter);
        this.backButton.addEventListener('mouseleave', this.handleBackMouseLeave);
        this.backButton.addEventListener('click', this.handleBack);

        return this.backButton;
    }

    createInfoDisplay() {
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.bottom = '10px';
        container.style.left = '10px';
        container.style.background = 'rgba(0, 0, 0, 0.8)';
        container.style.color = '#cccccc';
        container.style.padding = '8px 12px';
        container.style.borderRadius = '4px';
        container.style.fontFamily = 'Arial, sans-serif';
        container.style.fontSize = '12px';
        container.style.zIndex = '1000';
        container.style.display = 'none';

        this.mouseInfo = document.createElement('div');
        this.mouseInfo.id = 'mouseInfo';
        container.appendChild(this.mouseInfo);

        this.worldOffsetInfo = document.createElement('div');
        this.worldOffsetInfo.id = 'worldOffsetInfo';
        container.appendChild(this.worldOffsetInfo);

        return container;
    }

    handleBack() {
        this.onBack();
    }

    attachBackEventListeners() {
        if (this.backButton) {
            this.backButton.addEventListener('mouseenter', this.handleBackMouseEnter);
            this.backButton.addEventListener('mouseleave', this.handleBackMouseLeave);
            this.backButton.addEventListener('click', this.handleBack);
        }
    }

    detachBackEventListeners() {
        if (this.backButton) {
            this.backButton.removeEventListener('mouseenter', this.handleBackMouseEnter);
            this.backButton.removeEventListener('mouseleave', this.handleBackMouseLeave);
            this.backButton.removeEventListener('click', this.handleBack);
        }
    }

    activate() {
        if (!this.infoContainer) {
            this.infoContainer = this.createInfoDisplay();
        }
        this.backButton = this.createBackButton();
        document.body.appendChild(this.infoContainer);
        document.body.appendChild(this.backButton);
        this.infoContainer.style.display = 'block';
        this.attachBackEventListeners();
    }

    deactivate() {
        if (this.infoContainer && this.infoContainer.parentNode) {
            document.body.removeChild(this.infoContainer);
        }
        if (this.backButton && this.backButton.parentNode) {
            document.body.removeChild(this.backButton);
        }
        this.detachBackEventListeners();
        this.backButton = null;
    }

    getContainer() {
        return this.infoContainer;
    }
}

/***/ }),

/***/ "./src/app_states/start_screen/start_screen_app_state.js":
/*!***************************************************************!*\
  !*** ./src/app_states/start_screen/start_screen_app_state.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StartScreenAppState)
/* harmony export */ });
/* harmony import */ var _app_states_base_app_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app_states/base_app_state.js */ "./src/app_states/base_app_state.js");
/* harmony import */ var _common_graphics_brick_pattern_renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/graphics/brick_pattern_renderer.js */ "./src/common/graphics/brick_pattern_renderer.js");
/* harmony import */ var _app_states_catalog_catalog_app_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app_states/catalog/catalog_app_state.js */ "./src/app_states/catalog/catalog_app_state.js");
/* harmony import */ var _common_string_resources_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/string_resources.js */ "./src/common/string_resources.js");





class StartScreenAppState extends _app_states_base_app_state_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(canvas) {
        super(canvas);
        this.ctx = canvas.getContext('2d');
        this.container = null;
        this.onPlayClick = null;
        this.onLevelDesignerClick = null;
        this.animationId = null;
        this.startTime = Date.now();
        
        this.playButton = {
            x: 0,
            y: 0,
            width: 300,
            height: 60,
            text: _common_string_resources_js__WEBPACK_IMPORTED_MODULE_3__["default"].LEVEL_CATALOG,
            hovered: false
        };
        
        this.designerButton = {
            x: 0,
            y: 0,
            width: 300,
            height: 60,
            text: _common_string_resources_js__WEBPACK_IMPORTED_MODULE_3__["default"].DESIGNER_MODE,
            hovered: false
        };
        
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseClick = this.handleMouseClick.bind(this);
        this.gameLoop = this.gameLoop.bind(this);
    }
    
    updateLayout() {
        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;
        
        const titlePanelHeight = 120;
        const titleY = canvasHeight / 2 - 200;
        
        const buttonSpacing = 30;
        const startY = titleY + titlePanelHeight + 50;
        
        this.playButton.x = (canvasWidth - this.playButton.width) / 2;
        this.playButton.y = startY;
        
        this.designerButton.x = (canvasWidth - this.designerButton.width) / 2;
        this.designerButton.y = startY + this.playButton.height + buttonSpacing;
    }
    
    gameLoop(currentTime = 0) {
        this.updateLayout();
        this.draw();
        this.animationId = requestAnimationFrame(this.gameLoop);
    }

    draw() {
        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;
        const currentTime = Date.now() - this.startTime;

        this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        _common_graphics_brick_pattern_renderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawAnimatedBrickPattern(
            this.ctx, 
            0, 0, 
            canvasWidth, canvasHeight, 
            currentTime,
            {
                brickColor: '#8B4513',
                mortarColor: '#654321',
                brickWidth: 80,
                brickHeight: 40,
                mortarWidth: 4,
                mortarHeight: 4
            }
        );

        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        this.ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        this.drawTitle();

        this.drawButton(this.playButton);
        this.drawButton(this.designerButton);

        this.drawCopyright();
    }

    drawTitle() {
        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;

        this.ctx.save();
        
        const titlePanelWidth = 600;
        const titlePanelHeight = 120;
        const titleX = (canvasWidth - titlePanelWidth) / 2;
        const titleY = canvasHeight / 2 - 200;

        _common_graphics_brick_pattern_renderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawBrickPattern(
            this.ctx,
            titleX, titleY,
            titlePanelWidth, titlePanelHeight,
            {
                brickColor: '#D2691E',
                mortarColor: '#8B4513',
                brickWidth: 60,
                brickHeight: 30,
                mortarWidth: 3,
                mortarHeight: 3
            }
        );

        this.ctx.strokeStyle = '#654321';
        this.ctx.lineWidth = 6;
        this.ctx.strokeRect(titleX, titleY, titlePanelWidth, titlePanelHeight);

        this.ctx.font = 'bold 48px "Courier New", "Lucida Console", "Monaco", "DejaVu Sans Mono", monospace';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        
        const titleText = _common_string_resources_js__WEBPACK_IMPORTED_MODULE_3__["default"].APP_TITLE;
        const titleCenterX = canvasWidth / 2;
        const titleCenterY = titleY + titlePanelHeight / 2;
        
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 4;
        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.ctx.strokeText(titleText, titleCenterX, titleCenterY);
        
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.fillText(titleText, titleCenterX, titleCenterY);

        this.ctx.restore();
    }

    drawButton(button) {
        this.ctx.save();

        const brickOptions = {
            brickColor: button.hovered ? '#CD853F' : '#D2691E',
            mortarColor: '#8B4513',
            brickWidth: 40,
            brickHeight: 20,
            mortarWidth: 2,
            mortarHeight: 2
        };

        _common_graphics_brick_pattern_renderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawBrickPattern(
            this.ctx,
            button.x, button.y,
            button.width, button.height,
            brickOptions
        );

        this.ctx.strokeStyle = button.hovered ? '#F4A460' : '#654321';
        this.ctx.lineWidth = button.hovered ? 4 : 3;
        this.ctx.strokeRect(button.x, button.y, button.width, button.height);

        this.ctx.font = 'bold 24px "Courier New", "Lucida Console", "Monaco", "DejaVu Sans Mono", monospace';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        
        const buttonCenterX = button.x + button.width / 2;
        const buttonCenterY = button.y + button.height / 2;
        
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.ctx.strokeText(button.text, buttonCenterX, buttonCenterY);
        
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.fillText(button.text, buttonCenterX, buttonCenterY);

        this.ctx.restore();
    }

    drawCopyright() {
        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;

        this.ctx.save();

        this.ctx.font = 'bold 20px "Courier New", "Lucida Console", "Monaco", "DejaVu Sans Mono", monospace';
        this.ctx.textAlign = 'right';
        this.ctx.textBaseline = 'bottom';

        const copyrightText = 'Alexander Ladyaev\nSaratov State University, 2025 @All rights reserved.';
        const lines = copyrightText.split('\n');
        const margin = 20;
        const lineHeight = 24;

        const x = canvasWidth - margin;
        let y = canvasHeight - margin;

        for (let i = lines.length - 1; i >= 0; i--) {
            const line = lines[i];

            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 3;
            this.ctx.lineJoin = 'round';
            this.ctx.lineCap = 'round';
            this.ctx.strokeText(line, x, y);

            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.fillText(line, x, y);

            y -= lineHeight;
        }

        this.ctx.restore();
    }

    handleMouseMove(event) {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        this.playButton.hovered = this.isPointInButton(mouseX, mouseY, this.playButton);
        this.designerButton.hovered = this.isPointInButton(mouseX, mouseY, this.designerButton);

        if (this.playButton.hovered || this.designerButton.hovered) {
            this.canvas.style.cursor = 'pointer';
        } else {
            this.canvas.style.cursor = 'default';
        }
    }

    handleMouseClick(event) {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        if (this.isPointInButton(mouseX, mouseY, this.playButton)) {
            this.openCatalog();
        } else if (this.isPointInButton(mouseX, mouseY, this.designerButton)) {
            if (this.onLevelDesignerClick) this.onLevelDesignerClick();
        }
    }

    isPointInButton(x, y, button) {
        return x >= button.x && x <= button.x + button.width &&
               y >= button.y && y <= button.y + button.height;
    }
    
    activate() {
        this.canvas.style.display = 'block';
        
        this.canvas.addEventListener('mousemove', this.handleMouseMove);
        this.canvas.addEventListener('click', this.handleMouseClick);
        
        this.startTime = Date.now();
        this.gameLoop();
        
        this.isActive = true;
    }
    
    deactivate() {
        this.canvas.removeEventListener('mousemove', this.handleMouseMove);
        this.canvas.removeEventListener('click', this.handleMouseClick);
        
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        
        this.canvas.style.cursor = 'default';
        
        this.isActive = false;
    }
    
    openCatalog() {
        const catalogState = new _app_states_catalog_catalog_app_state_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.canvas, { width: this.canvas.width, height: this.canvas.height });
        
        this.deactivate();
        catalogState.activate();
        
        if (this.onPlayClick) {
            this.onPlayClick(catalogState);
        }
    }

    destroy() {
        this.deactivate();
        this.container = null;
        this.isActive = false;
    }
}

/***/ }),

/***/ "./src/common/bounds.js":
/*!******************************!*\
  !*** ./src/common/bounds.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bounds)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");



class Bounds {
    constructor(coords, size) {
        this.coords = coords;
        this.size = size;
    }

    static empty() {
        return new Bounds(new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0), new _common_size_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0));
    }
}

/***/ }),

/***/ "./src/common/game/actors/actor_info_provider.js":
/*!*******************************************************!*\
  !*** ./src/common/game/actors/actor_info_provider.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActorInfoProvider)
/* harmony export */ });
class ActorInfoProvider {
    constructor(actor) {
        this.actor = actor;
    }

    getDebugData() {
        return [
            `Type: ${this.actor.getType()}`,
            `Position: (${this.actor.coords.x}, ${this.actor.coords.y})`,
            `Size: ${this.actor.size.width} x ${this.actor.size.height}`
        ];
    }
}

/***/ }),

/***/ "./src/common/game/actors/base_actor.js":
/*!**********************************************!*\
  !*** ./src/common/game/actors/base_actor.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseActor)
/* harmony export */ });
/* harmony import */ var _common_bounds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/bounds.js */ "./src/common/bounds.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _actor_info_provider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actor_info_provider.js */ "./src/common/game/actors/actor_info_provider.js");





class BaseActor {

    constructor(id, coords, size) {
        this.id = id;
        this.coords = coords;
        this.size = size;
    }

    update() {

    }

    getVisibleBounds(canvasSize, worldOffset, playerOptions) {
        return new _common_bounds_js__WEBPACK_IMPORTED_MODULE_0__["default"](new _common_point_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.coords.x - worldOffset.x, this.coords.y), new _common_size_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.size.width, this.size.height));
    }

    getType() {
        return 'BaseActor';
    }

    draw(ctx, worldOffset, canvasSize) {
        
    }

    getInfoProvider() {
        return new _actor_info_provider_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);
    }

    isVisible(worldOffset, canvasSize) {
        return true;
    }

    static drawTextWithBackground(ctx, texts, x, y, lineHeight = 16) {
        if (!texts || texts.length === 0) return;
        
        let maxWidth = 0;
        ctx.font = '14px Arial';
        for (const text of texts) {
            const textWidth = ctx.measureText(text).width;
            maxWidth = Math.max(maxWidth, textWidth);
        }
        
        const padding = 4;
        const backgroundWidth = maxWidth + padding * 2;
        const backgroundHeight = texts.length * lineHeight + padding * 2;
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillRect(x - padding, y - padding - 12, backgroundWidth, backgroundHeight);
        
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.strokeRect(x - padding, y - padding - 12, backgroundWidth, backgroundHeight);
        
        ctx.fillStyle = 'red';
        ctx.font = '14px Arial';
        for (let i = 0; i < texts.length; i++) {
            ctx.fillText(texts[i], x, y + i * lineHeight);
        }
    }
}

/***/ }),

/***/ "./src/common/game/actors/boundary/base_boundary.js":
/*!**********************************************************!*\
  !*** ./src/common/game/actors/boundary/base_boundary.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseBoundary)
/* harmony export */ });
/* harmony import */ var _common_game_actors_base_actor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/game/actors/base_actor.js */ "./src/common/game/actors/base_actor.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _common_bounds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/bounds.js */ "./src/common/bounds.js");
/* harmony import */ var _base_boundary_info_provider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base_boundary_info_provider.js */ "./src/common/game/actors/boundary/base_boundary_info_provider.js");






class BaseBoundary extends _common_game_actors_base_actor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(coords, size, type, background) {
        super(`boundary-${type}`, coords, size);

        this.type = type;
        this.background = background;
        this.margin = 20;
        this.lineWidth = 10;
        
        this.strokeColor = '#612E09';
    }

    getType() {
        return 'Boundary';
    }


    isVisible(worldOffset, canvasSize) {
        return false;
    }

    getBackgroundPivotPoint() {
        return new _common_point_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
    }

    drawMain(ctx, worldOffset, canvasSize) {

    }

    getTextureOffset() {
        return new _common_point_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
    }

    drawTexture(ctx, worldOffset, canvasSize) {
        if (!this.background) {
            return;
        }

        const bounds = this.getVisibleBoundsWithMargin(canvasSize, worldOffset, null);
        const x = bounds.coords.x;
        const y = bounds.coords.y;
        const width = bounds.size.width;
        const height = bounds.size.height;

        const brickWidth = this.background.brickSize.width;
        const brickHeight = this.background.brickSize.height;
        const mortarWidth = this.background.mortarSize.width;
        const mortarHeight = this.background.mortarSize.height;

        const totalBrickWidth = brickWidth + mortarWidth;
        const totalBrickHeight = brickHeight + mortarHeight;

        ctx.fillStyle = this.background.mortarColor;
        ctx.fillRect(x, y, width, height);

        ctx.fillStyle = this.background.brickColor;

        const rows = Math.ceil(height / totalBrickHeight);
        const cols = Math.ceil(width / totalBrickWidth);

        const textureOffset = this.getTextureOffset(worldOffset);
        const normalizedOffset = textureOffset.x + Math.floor(Math.abs(textureOffset.x) / totalBrickWidth) * totalBrickWidth;

        for (let row = 0; row < rows; row++) {
            const rowY = y + row * totalBrickHeight;
            const offset = (row % 2) * (brickWidth / 2);

            for (let col = 0; col < cols + 1; col++) {
                const colX = x + col * totalBrickWidth - offset + normalizedOffset;
                
                if (colX + brickWidth > x && colX < x + width &&
                    rowY < y + height) {
                    
                    const drawX = Math.max(colX, x);
                    const drawY = rowY;
                    const drawWidth = Math.min(colX + brickWidth, x + width) - drawX;
                    const drawHeight = Math.min(brickHeight, y + height - rowY);

                    if (drawWidth > 0 && drawHeight > 0) {
                        ctx.fillRect(drawX, drawY, drawWidth, drawHeight);
                    }
                }
            }
        }
    }

    draw(ctx, worldOffset, canvasSize) {       
        if (!this.isVisible(worldOffset, canvasSize)) {
            return;
        }

        ctx.strokeStyle = this.strokeColor;
        ctx.lineWidth = 3;

        this.drawTexture(ctx, worldOffset, canvasSize);
        this.drawMain(ctx, worldOffset, canvasSize);
    }

    
    isPointOver(point, worldOffset) {
        return point.x >= this.coords.x - worldOffset.x && point.x <= this.coords.x + this.size.width - worldOffset.x && 
               point.y >= this.coords.y && point.y <= this.coords.y + this.size.height;
    }
    
    getVisibleBoundsWithMargin(canvasSize, worldOffset, playerOptions) {
        const visibleBounds = this.getVisibleBounds(canvasSize, worldOffset, playerOptions);
        return new _common_bounds_js__WEBPACK_IMPORTED_MODULE_3__["default"](visibleBounds.coords, visibleBounds.size);
    }

    getInfoProvider() {
        return new _base_boundary_info_provider_js__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    }
}

/***/ }),

/***/ "./src/common/game/actors/boundary/base_boundary_info_provider.js":
/*!************************************************************************!*\
  !*** ./src/common/game/actors/boundary/base_boundary_info_provider.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseBoundaryInfoProvider)
/* harmony export */ });
/* harmony import */ var _actor_info_provider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actor_info_provider.js */ "./src/common/game/actors/actor_info_provider.js");


class BaseBoundaryInfoProvider extends _actor_info_provider_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getDebugData() {
        return [
            `Type: ${this.actor.getType()}`,
            `Position: (${this.actor.coords.x}, ${this.actor.coords.y})`,
            `Size: ${this.actor.size.width} x ${this.actor.size.height}`,
            `Boundary Type: ${this.actor.type}`,
            `Margin: ${this.actor.margin}px`,
            `Line Width: ${this.actor.lineWidth}px`
        ];
    }
}

/***/ }),

/***/ "./src/common/game/actors/boundary/bottom_boundary.js":
/*!************************************************************!*\
  !*** ./src/common/game/actors/boundary/bottom_boundary.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BottomBoundary)
/* harmony export */ });
/* harmony import */ var _common_game_actors_boundary_base_boundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/game/actors/boundary/base_boundary.js */ "./src/common/game/actors/boundary/base_boundary.js");
/* harmony import */ var _common_bounds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/bounds.js */ "./src/common/bounds.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");





class BottomBoundary extends _common_game_actors_boundary_base_boundary_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(coords, size, background) {
        super(coords, size, 'bottom', background);
    }

    getType() {
        return 'Bottom boundary';
    }

    getTextureOffset(worldOffset) {
        return new _common_point_js__WEBPACK_IMPORTED_MODULE_2__["default"](-worldOffset.x, 0);
    }

    isVisible(worldOffset, canvasSize) {
        return true;
    }

    drawMain(ctx, worldOffset, canvasSize) {
        ctx.strokeStyle = this.strokeColor;
        ctx.lineWidth = 10;
        ctx.beginPath();
        const lineY = Math.floor(this.coords.y) + 5;
        ctx.moveTo(-20, lineY);
        ctx.lineTo(canvasSize.width + 20, lineY);
        ctx.stroke();
    }



    getVisibleBounds(canvasSize, worldOffset, playerOptions) {
        return new _common_bounds_js__WEBPACK_IMPORTED_MODULE_1__["default"](new _common_point_js__WEBPACK_IMPORTED_MODULE_2__["default"](0, this.coords.y), new _common_size_js__WEBPACK_IMPORTED_MODULE_3__["default"](canvasSize.width, this.size.height));
    }

    getVisibleBoundsWithMargin(canvasSize, worldOffset, playerOptions) {
        const visibleBounds = this.getVisibleBounds(canvasSize, worldOffset, playerOptions);
        const newX = visibleBounds.coords.x - this.margin;
        const newY = visibleBounds.coords.y;
        const newWidth = visibleBounds.size.width + 2 * this.margin;
        const newHeight = visibleBounds.size.height + this.margin;
        return new _common_bounds_js__WEBPACK_IMPORTED_MODULE_1__["default"](new _common_point_js__WEBPACK_IMPORTED_MODULE_2__["default"](newX, newY), new _common_size_js__WEBPACK_IMPORTED_MODULE_3__["default"](newWidth, newHeight));
    }
}

/***/ }),

/***/ "./src/common/game/actors/boundary/boundary_background.js":
/*!****************************************************************!*\
  !*** ./src/common/game/actors/boundary/boundary_background.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoundaryBackground)
/* harmony export */ });
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");


class BoundaryBackground {
    constructor(
        brickSize = new _common_size_js__WEBPACK_IMPORTED_MODULE_0__["default"](30, 15),
        mortarSize = new _common_size_js__WEBPACK_IMPORTED_MODULE_0__["default"](2, 2),
        brickColor = '#8B4513',
        mortarColor = '#C0C0C0'
    ) {
        this.brickSize = brickSize;
        this.mortarSize = mortarSize;
        this.brickColor = brickColor;
        this.mortarColor = mortarColor;
    }
}

/***/ }),

/***/ "./src/common/game/actors/boundary/left_boundary.js":
/*!**********************************************************!*\
  !*** ./src/common/game/actors/boundary/left_boundary.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LeftBoundary)
/* harmony export */ });
/* harmony import */ var _common_bounds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/bounds.js */ "./src/common/bounds.js");
/* harmony import */ var _common_game_actors_boundary_base_boundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/game/actors/boundary/base_boundary.js */ "./src/common/game/actors/boundary/base_boundary.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");





class LeftBoundary extends _common_game_actors_boundary_base_boundary_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(coords, size, background) {
        super(coords, size, 'left', background);
    }

    getType() {
        return 'Left boundary';
    }

    isVisible(worldOffset, canvasSize) {
        return this.coords.x - worldOffset.x + this.size.width > 0;
    }

    drawMain(ctx, worldOffset, canvasSize) {
        const x = this.coords.x - worldOffset.x;

        ctx.strokeStyle = this.strokeColor;
        ctx.lineWidth = 10;
        ctx.beginPath();
        const lineX = x + this.size.width - 5;
        ctx.moveTo(lineX, 0);
        ctx.lineTo(lineX, this.size.height);
        ctx.stroke();
    }



    getVisibleBounds(canvasSize, worldOffset, playerOptions) {
        return new _common_bounds_js__WEBPACK_IMPORTED_MODULE_0__["default"](new _common_point_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.coords.x - worldOffset.x, 0), new _common_size_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.size.width, canvasSize.height));
    }

    getVisibleBoundsWithMargin(canvasSize, worldOffset, playerOptions) {
        const visibleBounds = this.getVisibleBounds(canvasSize, worldOffset, playerOptions);
        const newX = visibleBounds.coords.x - this.margin;
        const newY = visibleBounds.coords.y;
        const newWidth = visibleBounds.size.width + this.margin;
        const newHeight = visibleBounds.size.height;
        return new _common_bounds_js__WEBPACK_IMPORTED_MODULE_0__["default"](new _common_point_js__WEBPACK_IMPORTED_MODULE_2__["default"](newX, newY), new _common_size_js__WEBPACK_IMPORTED_MODULE_3__["default"](newWidth, newHeight));
    }
}

/***/ }),

/***/ "./src/common/game/actors/boundary/right_boundary.js":
/*!***********************************************************!*\
  !*** ./src/common/game/actors/boundary/right_boundary.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RightBoundary)
/* harmony export */ });
/* harmony import */ var _common_game_actors_boundary_base_boundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/game/actors/boundary/base_boundary.js */ "./src/common/game/actors/boundary/base_boundary.js");
/* harmony import */ var _common_bounds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/bounds.js */ "./src/common/bounds.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");





class RightBoundary extends _common_game_actors_boundary_base_boundary_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(coords, size, background) {
        super(coords, size, 'right', background);
    }

    getType() {
        return 'Right boundary';
    }

    isVisible(worldOffset, canvasSize) {
        const x = this.coords.x - worldOffset.x;
        return x < canvasSize.width;
    }

    isFullyVisible(worldOffset, canvasSize) {
        const x = this.coords.x - worldOffset.x;
        return x + this.size.width <= canvasSize.width;
    }

    drawMain(ctx, worldOffset, canvasSize) {
        let x = this.coords.x - worldOffset.x;
        
        if (this.isFullyVisible(worldOffset, canvasSize)) {
            x = canvasSize.width - this.size.width;
        }
        
        ctx.strokeStyle = this.strokeColor;
        ctx.lineWidth = 10;
        ctx.beginPath();
        const lineX = x + 5;
        ctx.moveTo(lineX, 0);
        ctx.lineTo(lineX, this.size.height);
        ctx.stroke();
    }


    getVisibleBounds(canvasSize, worldOffset, playerOptions) {
        return new _common_bounds_js__WEBPACK_IMPORTED_MODULE_1__["default"](new _common_point_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.coords.x - worldOffset.x, 0), new _common_size_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.size.width, canvasSize.height));
    }

    getVisibleBoundsWithMargin(canvasSize, worldOffset, playerOptions) {
        const visibleBounds = this.getVisibleBounds(canvasSize, worldOffset, playerOptions);
        const newX = visibleBounds.coords.x;
        const newY = visibleBounds.coords.y;
        const newWidth = visibleBounds.size.width + this.margin;
        const newHeight = visibleBounds.size.height;
        return new _common_bounds_js__WEBPACK_IMPORTED_MODULE_1__["default"](new _common_point_js__WEBPACK_IMPORTED_MODULE_2__["default"](newX, newY), new _common_size_js__WEBPACK_IMPORTED_MODULE_3__["default"](newWidth, newHeight));
    }
}

/***/ }),

/***/ "./src/common/game/actors/boundary/top_boundary.js":
/*!*********************************************************!*\
  !*** ./src/common/game/actors/boundary/top_boundary.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TopBoundary)
/* harmony export */ });
/* harmony import */ var _common_game_actors_boundary_base_boundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/game/actors/boundary/base_boundary.js */ "./src/common/game/actors/boundary/base_boundary.js");
/* harmony import */ var _common_bounds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/bounds.js */ "./src/common/bounds.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");





class TopBoundary extends _common_game_actors_boundary_base_boundary_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(coords, size, background) {
        super(coords, size, 'top', background);
    }

    getType() {
        return 'Top boundary';
    }

    getTextureOffset(worldOffset) {
        return new _common_point_js__WEBPACK_IMPORTED_MODULE_2__["default"](-worldOffset.x, 0);
    }

    isVisible(worldOffset, canvasSize) {
        return true;
    }

    drawMain(ctx, worldOffset, canvasSize) {
        const margin = 20;
        const startX = -margin;
        const width = canvasSize.width + margin * 2;

        ctx.strokeStyle = this.strokeColor;
        ctx.lineWidth = 10;
        ctx.beginPath();
        const lineY = this.coords.y + this.size.height - 5;
        ctx.moveTo(startX, lineY);
        ctx.lineTo(startX + width, lineY);
        ctx.stroke();
    }



    getVisibleBounds(canvasSize, worldOffset, playerOptions) {
        return new _common_bounds_js__WEBPACK_IMPORTED_MODULE_1__["default"](new _common_point_js__WEBPACK_IMPORTED_MODULE_2__["default"](0, this.coords.y), new _common_size_js__WEBPACK_IMPORTED_MODULE_3__["default"](canvasSize.width, this.size.height));
    }

    getVisibleBoundsWithMargin(canvasSize, worldOffset, playerOptions) {
        const visibleBounds = this.getVisibleBounds(canvasSize, worldOffset, playerOptions);
        const newX = visibleBounds.coords.x - this.margin;
        const newY = visibleBounds.coords.y - this.margin;
        const newWidth = visibleBounds.size.width + 2 * this.margin;
        const newHeight = visibleBounds.size.height + this.margin;
        return new _common_bounds_js__WEBPACK_IMPORTED_MODULE_1__["default"](new _common_point_js__WEBPACK_IMPORTED_MODULE_2__["default"](newX, newY), new _common_size_js__WEBPACK_IMPORTED_MODULE_3__["default"](newWidth, newHeight));
    }
}

/***/ }),

/***/ "./src/common/game/actors/brick/brick.js":
/*!***********************************************!*\
  !*** ./src/common/game/actors/brick/brick.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brick)
/* harmony export */ });
/* harmony import */ var _common_game_actors_base_actor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/game/actors/base_actor.js */ "./src/common/game/actors/base_actor.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_bounds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/bounds.js */ "./src/common/bounds.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _brick_info_provider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brick_info_provider.js */ "./src/common/game/actors/brick/brick_info_provider.js");






class Brick extends _common_game_actors_base_actor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(id, coords, size, backgroundColor = '#4A5568', strokeWidth = 2, strokeColor = '#2D3748', isActive = true) {
        super(id, coords, size);
        this.backgroundColor = backgroundColor;
        this.strokeWidth = strokeWidth;
        this.strokeColor = strokeColor;
        this.isActive = isActive;
    }

    getType() {
        return 'Brick';
    }

    getVisibleBounds(canvasSize, worldOffset, playerOptions) {
        return new _common_bounds_js__WEBPACK_IMPORTED_MODULE_2__["default"](new _common_point_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.coords.x - worldOffset.x, this.coords.y - worldOffset.y), new _common_size_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.size.width, this.size.height));
    }
    
    isPointOver(point, worldOffset) {
        return point.x >= this.coords.x - worldOffset.x && point.x <= this.coords.x + this.size.width - worldOffset.x && 
               point.y >= this.coords.y - worldOffset.y && point.y <= this.coords.y + this.size.height - worldOffset.y;
    }

    getInfoProvider() {
        return new _brick_info_provider_js__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    }

    isVisible(worldOffset, canvasSize) {
        const rightEdge = this.coords.x + this.size.width - worldOffset.x;
        const leftEdge = this.coords.x - worldOffset.x;
        
        return rightEdge > 0 && leftEdge < canvasSize.width;
    }

    draw(ctx, worldOffset, canvasSize) {
        ctx.save();

        ctx.fillStyle = this.backgroundColor;
        ctx.strokeStyle = this.strokeColor;
        ctx.lineWidth = this.strokeWidth;

        ctx.beginPath();
        // ctx.rect(
        //     this.coords.x - worldOffset.x + this.strokeWidth / 2,
        //     this.coords.y + this.strokeWidth / 2,
        //     this.size.width - this.strokeWidth,
        //     this.size.height - this.strokeWidth
        // );
        ctx.rect(
            this.coords.x - worldOffset.x,
            this.coords.y,
            this.size.width,
            this.size.height
        );
        ctx.fill();
        
        if (this.strokeWidth > 0) {
            ctx.stroke();
        }

        ctx.restore();
    }
}

/***/ }),

/***/ "./src/common/game/actors/brick/brick_info_provider.js":
/*!*************************************************************!*\
  !*** ./src/common/game/actors/brick/brick_info_provider.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrickInfoProvider)
/* harmony export */ });
/* harmony import */ var _actor_info_provider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actor_info_provider.js */ "./src/common/game/actors/actor_info_provider.js");


class BrickInfoProvider extends _actor_info_provider_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getDebugData() {
        return [
            `Type: ${this.actor.getType()}`,
            `Position: (${this.actor.coords.x}, ${this.actor.coords.y})`,
            `Size: ${this.actor.size.width} x ${this.actor.size.height}`,
            `Active: ${this.actor.isActive}`,
            `Background: ${this.actor.backgroundColor}`,
            `Stroke: ${this.actor.strokeColor}`
        ];
    }
}

/***/ }),

/***/ "./src/common/game/actors/jump_orb/jump_orb.js":
/*!*****************************************************!*\
  !*** ./src/common/game/actors/jump_orb/jump_orb.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JumpOrb)
/* harmony export */ });
/* harmony import */ var _common_game_actors_base_actor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/game/actors/base_actor.js */ "./src/common/game/actors/base_actor.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_bounds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/bounds.js */ "./src/common/bounds.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _common_game_actors_jump_orb_jump_orb_info_provider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/game/actors/jump_orb/jump_orb_info_provider.js */ "./src/common/game/actors/jump_orb/jump_orb_info_provider.js");
/* harmony import */ var _common_game_actors_jump_orb_pulse_animation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/game/actors/jump_orb/pulse_animation.js */ "./src/common/game/actors/jump_orb/pulse_animation.js");







class JumpOrb extends _common_game_actors_base_actor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(id, coords, isReversed) {
        super(id, coords, new _common_size_js__WEBPACK_IMPORTED_MODULE_3__["default"](30, 30));
        this.isReversed = isReversed;
        this.pulseAnimation = new _common_game_actors_jump_orb_pulse_animation_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    }

    getType() {
        return 'JumpOrb';
    }

    getVisibleBounds(canvasSize, worldOffset, playerOptions) {
        return new _common_bounds_js__WEBPACK_IMPORTED_MODULE_2__["default"](new _common_point_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.coords.x - worldOffset.x, this.coords.y - worldOffset.y), new _common_size_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.size.width, this.size.height));
    }
    
    isPointOver(point, worldOffset) {
        return point.x >= this.coords.x - worldOffset.x && point.x <= this.coords.x + this.size.width - worldOffset.x && 
                point.y >= this.coords.y - worldOffset.y && point.y <= this.coords.y + this.size.height - worldOffset.y;
    }

    getInfoProvider() {
        return new _common_game_actors_jump_orb_jump_orb_info_provider_js__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    }

    update(worldSpeed, factor = 1) {
        this.pulseAnimation.update(factor);
    }

    startPulseAnimation() {
        this.pulseAnimation.start();
    }

    isVisible(worldOffset, canvasSize) {
        const rightEdge = this.coords.x + this.size.width - worldOffset.x;
        const leftEdge = this.coords.x - worldOffset.x;
        
        return rightEdge > 0 && leftEdge < canvasSize.width;
    }

    draw(ctx, worldOffset, canvasSize) {
        ctx.save();

        const center = new _common_point_js__WEBPACK_IMPORTED_MODULE_1__["default"](
            this.coords.x - worldOffset.x + this.size.width / 2,
            this.coords.y + this.size.height / 2
        );
        this.pulseAnimation.draw(ctx, center);

        ctx.globalAlpha = 0.7;

        const gradient = ctx.createRadialGradient(
            this.coords.x - worldOffset.x + this.size.width / 2,
            this.coords.y + this.size.height / 2,
            0,
            this.coords.x - worldOffset.x + this.size.width / 2,
            this.coords.y + this.size.height / 2,
            Math.max(this.size.width, this.size.height) / 2
        );
        gradient.addColorStop(0, '#FFD700');
        gradient.addColorStop(0.7, '#FFA500');
        gradient.addColorStop(1, '#FF8C00');

        ctx.fillStyle = gradient;
        ctx.strokeStyle = '#B8860B';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.ellipse(
            this.coords.x - worldOffset.x + this.size.width / 2,
            this.coords.y + this.size.height / 2,
            this.size.width / 2,
            this.size.height / 2,
            0,
            0,
            2 * Math.PI
        );
        ctx.fill();
        ctx.stroke();

        ctx.restore();
    }
}

/***/ }),

/***/ "./src/common/game/actors/jump_orb/jump_orb_info_provider.js":
/*!*******************************************************************!*\
  !*** ./src/common/game/actors/jump_orb/jump_orb_info_provider.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JumpOrbInfoProvider)
/* harmony export */ });
/* harmony import */ var _common_game_actors_actor_info_provider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/game/actors/actor_info_provider.js */ "./src/common/game/actors/actor_info_provider.js");


class JumpOrbInfoProvider extends _common_game_actors_actor_info_provider_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getDebugData() {
        return [

        ];
    }
}

/***/ }),

/***/ "./src/common/game/actors/jump_orb/pulse_animation.js":
/*!************************************************************!*\
  !*** ./src/common/game/actors/jump_orb/pulse_animation.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PulseAnimation)
/* harmony export */ });
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");


class PulseCircle {

    constructor(color, maxSize) {
        this.color = color;
        this.maxSize = maxSize;
        this.currentSize = new _common_size_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        this.isActive = false;
        this.isCompleted = false;
    }

    update(factor) {
        if (!this.isActive && !this.isCompleted) {
            this.isActive = true;
        }

        if (this.isActive && !this.isCompleted) {
            const progress = this.currentSize.width / this.maxSize.width;
            const easeOutFactor = (1 - Math.pow(progress, 3)) * 1.32;
            const baseSpeed = 18;
            const expandSpeed = baseSpeed * easeOutFactor;

            const newWidth = Math.min(this.currentSize.width + (expandSpeed * factor), this.maxSize.width);
            const newHeight = Math.min(this.currentSize.height + (expandSpeed * factor), this.maxSize.height);
            this.currentSize = new _common_size_js__WEBPACK_IMPORTED_MODULE_0__["default"](newWidth, newHeight);

            if (this.currentSize.width >= this.maxSize.width) {
                this.isCompleted = true;
            }
        }
    }

    draw(ctx, center) {
        if (this.isActive && !this.isCompleted && this.currentSize.width > 0) {
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.ellipse(
                center.x,
                center.y,
                this.currentSize.width / 2,
                this.currentSize.height / 2,
                0,
                0,
                2 * Math.PI
            );

            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }
    }
}

class PulseAnimation {

    constructor() {
        this.isActive = false;
        this.maxSize = new _common_size_js__WEBPACK_IMPORTED_MODULE_0__["default"](75, 75);
        this.circle = new PulseCircle('#FFA500', this.maxSize);
    }

    start() {
        if (this.isActive) {
            return;
        }

        this.isActive = true;
        this.circle.currentSize = new _common_size_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        this.circle.isActive = false;
        this.circle.isCompleted = false;
    }

    update(factor) {
        if (!this.isActive) return;
        this.circle.update(factor);
        if (this.circle.isCompleted) {
            this.isActive = false;
        }
    }

    draw(ctx, center) {
        if (!this.isActive) return;
        this.circle.draw(ctx, center);
    }

}

/***/ }),

/***/ "./src/common/game/actors/player/blink_animation.js":
/*!**********************************************************!*\
  !*** ./src/common/game/actors/player/blink_animation.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlinkAnimation)
/* harmony export */ });
class BlinkAnimation {
    constructor() {
        this.blinkTimer = 0;
        this.closingDuration = 160;
        this.closedDuration = 160;
        this.openingDuration = 360;
        this.blinkInterval = 4800;
        this.blinkState = 'open';
    }

    update(factor) {
        this.blinkTimer += factor * 16;

        switch (this.blinkState) {
            case 'open':
                if (this.blinkTimer >= this.blinkInterval) {
                    this.blinkState = 'closing';
                    this.blinkTimer = 0;
                }
                break;

            case 'closing':
                if (this.blinkTimer >= this.closingDuration) {
                    this.blinkState = 'closed';
                    this.blinkTimer = 0;
                }
                break;

            case 'closed':
                if (this.blinkTimer >= this.closedDuration) {
                    this.blinkState = 'opening';
                    this.blinkTimer = 0;
                }
                break;

            case 'opening':
                if (this.blinkTimer >= this.openingDuration) {
                    this.blinkState = 'open';
                    this.blinkTimer = 0;
                }
                break;
        }
    }

    isEyesClosed() {
        return this.blinkState === 'closed';
    }

    getBlinkProgress() {
        switch (this.blinkState) {
            case 'closing':
                return Math.min(1, this.blinkTimer / this.closingDuration);
            case 'closed':
                return 1;
            case 'opening':
                return Math.max(0, 1 - (this.blinkTimer / this.openingDuration));
            default:
                return 0;
        }
    }
}

/***/ }),

/***/ "./src/common/game/actors/player/player.js":
/*!*************************************************!*\
  !*** ./src/common/game/actors/player/player.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CubePlayer)
/* harmony export */ });
/* harmony import */ var _common_game_actors_base_actor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/game/actors/base_actor.js */ "./src/common/game/actors/base_actor.js");
/* harmony import */ var _common_game_player_options_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/game/player_options.js */ "./src/common/game/player_options.js");
/* harmony import */ var _common_bounds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/bounds.js */ "./src/common/bounds.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _common_game_actors_player_player_info_provider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/game/actors/player/player_info_provider.js */ "./src/common/game/actors/player/player_info_provider.js");
/* harmony import */ var _common_game_actors_player_blink_animation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @common/game/actors/player/blink_animation.js */ "./src/common/game/actors/player/blink_animation.js");








class CubePlayer extends _common_game_actors_base_actor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(coords, size) {
        super('player', coords, size);

        this.velocity = new _common_point_js__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0);
        this.onBrick = false;
        this.isDestroyed = false;
        this.isExploding = false;
        this.isIntentionalJump = false;
        this.rotation = 0;
        this.rotationSpeed = 0;
        this.blinkAnimation = new _common_game_actors_player_blink_animation_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
    }

    getType() {
        return 'CubePlayer';
    }

    destroy() {
        this.isDestroyed = true;
    }

    draw(ctx, worldOffset, playerOptions) {
        if (!this.isExploding) {
            playerOptions = playerOptions || _common_game_player_options_js__WEBPACK_IMPORTED_MODULE_1__["default"]["default"]();
            const offsetX = playerOptions.isPlayerFixed ? 0 : -worldOffset.x;
            
            ctx.save();
            
            const centerX = this.coords.x + offsetX + this.size.width / 2;
            const centerY = this.coords.y + this.size.height / 2;
            
            ctx.translate(centerX, centerY);
            ctx.rotate(this.rotation);
            ctx.translate(-this.size.width / 2, -this.size.height / 2);
            
            ctx.fillStyle = '#FF8C00';
            ctx.strokeStyle = '#FF6600';
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.roundRect(1, 1, this.size.width - 2, this.size.height - 2, 8);
            ctx.fill();
            ctx.stroke();

            const w = this.size.width;
            const h = this.size.height;
            const yOffset = 6;

            ctx.fillStyle = '#FFB347';
            ctx.beginPath();
            ctx.moveTo(w * 0.2, h * 0.1);
            ctx.lineTo(w * 0.15, h * 0.25);
            ctx.lineTo(w * 0.3, h * 0.2);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(w * 0.8, h * 0.1);
            ctx.lineTo(w * 0.7, h * 0.2);
            ctx.lineTo(w * 0.85, h * 0.25);
            ctx.closePath();
            ctx.fill();

            if (this.blinkAnimation.isEyesClosed()) {
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(w * 0.29, h * 0.32 + yOffset);
                ctx.lineTo(w * 0.41, h * 0.32 + yOffset);
                ctx.moveTo(w * 0.59, h * 0.32 + yOffset);
                ctx.lineTo(w * 0.71, h * 0.32 + yOffset);
                ctx.stroke();
            } else {
                ctx.fillStyle = '#FFF';
                ctx.beginPath();
                ctx.ellipse(w * 0.35, h * 0.32 + yOffset, w * 0.08, h * 0.11, 0, 0, 2 * Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(w * 0.65, h * 0.32 + yOffset, w * 0.08, h * 0.11, 0, 0, 2 * Math.PI);
                ctx.fill();

                ctx.strokeStyle = '#000';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.ellipse(w * 0.35, h * 0.32 + yOffset, w * 0.08, h * 0.11, 0, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.beginPath();
                ctx.ellipse(w * 0.65, h * 0.32 + yOffset, w * 0.08, h * 0.11, 0, 0, 2 * Math.PI);
                ctx.stroke();

                ctx.fillStyle = '#000';
                ctx.beginPath();
                ctx.ellipse(w * 0.35, h * 0.31 + yOffset, w * 0.05, h * 0.07, 0, 0, 2 * Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(w * 0.65, h * 0.31 + yOffset, w * 0.05, h * 0.07, 0, 0, 2 * Math.PI);
                ctx.fill();

                ctx.fillStyle = '#FFF';
                ctx.beginPath();
                ctx.ellipse(w * 0.36, h * 0.32 + yOffset, w * 0.01, h * 0.015, 0, 0, 2 * Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(w * 0.66, h * 0.32 + yOffset, w * 0.01, h * 0.015, 0, 0, 2 * Math.PI);
                ctx.fill();
            }

            ctx.fillStyle = '#FF69B4';
            ctx.beginPath();
            ctx.moveTo(w * 0.5, h * 0.45 + yOffset);
            ctx.lineTo(w * 0.48, h * 0.52 + yOffset);
            ctx.lineTo(w * 0.52, h * 0.52 + yOffset);
            ctx.closePath();
            ctx.fill();

            ctx.strokeStyle = '#000';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(w * 0.5, h * 0.54 + yOffset);
            ctx.lineTo(w * 0.45, h * 0.62 + yOffset);
            ctx.moveTo(w * 0.5, h * 0.54 + yOffset);
            ctx.lineTo(w * 0.55, h * 0.62 + yOffset);
            ctx.stroke();

            ctx.strokeStyle = '#000';
            ctx.lineWidth = 1;
            ctx.beginPath();

            ctx.moveTo(w * 0.15, h * 0.47 + yOffset);
            ctx.lineTo(w * 0.35, h * 0.50 + yOffset);
            ctx.moveTo(w * 0.18, h * 0.54 + yOffset);
            ctx.lineTo(w * 0.35, h * 0.54 + yOffset);

            ctx.moveTo(w * 0.65, h * 0.50 + yOffset);
            ctx.lineTo(w * 0.85, h * 0.47 + yOffset);
            ctx.moveTo(w * 0.65, h * 0.54 + yOffset);
            ctx.lineTo(w * 0.82, h * 0.54 + yOffset);
            ctx.stroke();
            
            ctx.restore();
        }
    }

    update(factor) {
        this.blinkAnimation.update(factor);
    }
    
    isPointOver(point, worldOffset, playerOptions) {
        playerOptions = playerOptions || _common_game_player_options_js__WEBPACK_IMPORTED_MODULE_1__["default"]["default"]();
        const offset = playerOptions.isPlayerFixed ? 0 : -worldOffset.x;

        return point.x >= this.coords.x + offset && point.x <= this.coords.x + this.size.width + offset && 
               point.y >= this.coords.y && point.y <= this.coords.y + this.size.height;
    }

    getVisibleBounds(canvasSize, worldOffset, playerOptions) {
        playerOptions = playerOptions || _common_game_player_options_js__WEBPACK_IMPORTED_MODULE_1__["default"]["default"]();
        let offset = playerOptions.isPlayerFixed ? 0 : -worldOffset.x;
        return new _common_bounds_js__WEBPACK_IMPORTED_MODULE_2__["default"](new _common_point_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.coords.x + offset, this.coords.y), new _common_size_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.size.width, this.size.height));
    }

    getInfoProvider() {
        return new _common_game_actors_player_player_info_provider_js__WEBPACK_IMPORTED_MODULE_5__["default"](this);
    }

    isVisible(worldOffset, canvasSize) {
        return !this.isDestroyed;
    }
}

/***/ }),

/***/ "./src/common/game/actors/player/player_info_provider.js":
/*!***************************************************************!*\
  !*** ./src/common/game/actors/player/player_info_provider.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerInfoProvider)
/* harmony export */ });
/* harmony import */ var _common_game_actors_actor_info_provider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/game/actors/actor_info_provider.js */ "./src/common/game/actors/actor_info_provider.js");


class PlayerInfoProvider extends _common_game_actors_actor_info_provider_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getDebugData() {
        return [
            `Type: ${this.actor.getType()}`,
            `Position: (${this.actor.coords.x}, ${this.actor.coords.y})`,
            `Size: ${this.actor.size.width} x ${this.actor.size.height}`,
            `Velocity: (${this.actor.velocity.x.toFixed(1)}, ${this.actor.velocity.y.toFixed(1)})`,
            `Grounded: ${this.actor.isGrounded}`,
            `On Brick: ${this.actor.onBrick}`,
            `Rotation: ${(this.actor.rotation * 180 / Math.PI).toFixed(1)}°`
        ];
    }
}

/***/ }),

/***/ "./src/common/game/actors/spike/spike.js":
/*!***********************************************!*\
  !*** ./src/common/game/actors/spike/spike.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Spike)
/* harmony export */ });
/* harmony import */ var _common_game_actors_base_actor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/game/actors/base_actor.js */ "./src/common/game/actors/base_actor.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_bounds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/bounds.js */ "./src/common/bounds.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _common_game_actors_spike_spike_info_provider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/game/actors/spike/spike_info_provider.js */ "./src/common/game/actors/spike/spike_info_provider.js");






class Spike extends _common_game_actors_base_actor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(id, coords, size, backgroundColor = '#4A5568', strokeWidth = 2, strokeColor = '#2D3748', isActive = true, isReversed = false) {
        super(id, coords, size);
        this.backgroundColor = backgroundColor;
        this.strokeWidth = strokeWidth;
        this.strokeColor = strokeColor;
        this.isActive = isActive;
        this.isReversed = isReversed;
    }

    getType() {
        return 'Spike';
    }

    getVisibleBounds(canvasSize, worldOffset, playerOptions) {
        return new _common_bounds_js__WEBPACK_IMPORTED_MODULE_2__["default"](new _common_point_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.coords.x - worldOffset.x, this.coords.y - worldOffset.y), new _common_size_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.size.width, this.size.height));
    }
    
    isPointOver(point, worldOffset) {
        return point.x >= this.coords.x - worldOffset.x && point.x <= this.coords.x + this.size.width - worldOffset.x && 
               point.y >= this.coords.y - worldOffset.y && point.y <= this.coords.y + this.size.height - worldOffset.y;
    }

    getInfoProvider() {
        return new _common_game_actors_spike_spike_info_provider_js__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    }

    isVisible(worldOffset, canvasSize) {
        const rightEdge = this.coords.x + this.size.width - worldOffset.x;
        const leftEdge = this.coords.x - worldOffset.x;
        
        return rightEdge > 0 && leftEdge < canvasSize.width;
    }

    draw(ctx, worldOffset, canvasSize) {
        ctx.save();

        ctx.fillStyle = this.backgroundColor;
        ctx.strokeStyle = this.strokeColor;
        ctx.lineWidth = this.strokeWidth;

        const x = this.coords.x - worldOffset.x;
        const y = this.coords.y;
        const width = this.size.width;
        const height = this.size.height;

        ctx.beginPath();
        if (this.isReversed) {
            ctx.moveTo(x, y);
            ctx.lineTo(x + width, y);
            ctx.lineTo(x + width / 2, y + height);
        } else {
            ctx.moveTo(x + width / 2, y);
            ctx.lineTo(x, y + height);
            ctx.lineTo(x + width, y + height);
        }
        ctx.closePath();

        ctx.fill();

        if (this.strokeWidth > 0) {
            ctx.stroke();
        }

        ctx.restore();
    }
}

/***/ }),

/***/ "./src/common/game/actors/spike/spike_info_provider.js":
/*!*************************************************************!*\
  !*** ./src/common/game/actors/spike/spike_info_provider.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpikeInfoProvider)
/* harmony export */ });
/* harmony import */ var _common_game_actors_actor_info_provider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/game/actors/actor_info_provider.js */ "./src/common/game/actors/actor_info_provider.js");


class SpikeInfoProvider extends _common_game_actors_actor_info_provider_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getDebugData() {
        return [

        ];
    }
}

/***/ }),

/***/ "./src/common/game/base_manager.js":
/*!*****************************************!*\
  !*** ./src/common/game/base_manager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseManager)
/* harmony export */ });
class BaseManager {
    get objects() {
        return [];
    }
}

/***/ }),

/***/ "./src/common/game/base_physics.js":
/*!*****************************************!*\
  !*** ./src/common/game/base_physics.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BasePhysics)
/* harmony export */ });
class BasePhysics {
    constructor(world, worldSpeed = 0) {
        this.world = world;
        this.worldSpeed = worldSpeed;
        this.playerMovesInWorld = false;
    }

    isRightBoundaryFullyVisible(canvasSize) {
        return this.world.boundaryManager.isRightBoundaryFullyVisible(this.world.worldOffset, canvasSize);
    }

    getCurrentWorldSpeed() {
        return this.playerMovesInWorld ? 0 : this.worldSpeed;
    }

    updateWorldOffset(factor, canvasSize) {
        if (!this.playerMovesInWorld) {
            this.world.worldOffset.x += (this.worldSpeed * factor);
            this.world.worldOffset.x = Math.min(this.world.worldOffset.x, this.world.size.width - canvasSize.width);
        }
    }

    switchToPlayerMovement(canvasSize) {
        if (!this.playerMovesInWorld && this.isRightBoundaryFullyVisible(canvasSize)) {
            this.playerMovesInWorld = true;
            return true;
        }
        return false;
    }

    isPlayerMovingInWorld() {
        return this.playerMovesInWorld;
    }

    getGameParams() {
        return {
            size: this.world.size,
            worldOffset: this.world.worldOffset,
            boundaries: this.world.boundaries
        };
    }
}

/***/ }),

/***/ "./src/common/game/boundary_manager.js":
/*!*********************************************!*\
  !*** ./src/common/game/boundary_manager.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoundaryManager)
/* harmony export */ });
/* harmony import */ var _common_game_actors_boundary_left_boundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/game/actors/boundary/left_boundary.js */ "./src/common/game/actors/boundary/left_boundary.js");
/* harmony import */ var _common_game_actors_boundary_right_boundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/game/actors/boundary/right_boundary.js */ "./src/common/game/actors/boundary/right_boundary.js");
/* harmony import */ var _common_game_actors_boundary_top_boundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/game/actors/boundary/top_boundary.js */ "./src/common/game/actors/boundary/top_boundary.js");
/* harmony import */ var _common_game_actors_boundary_bottom_boundary_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/game/actors/boundary/bottom_boundary.js */ "./src/common/game/actors/boundary/bottom_boundary.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _common_game_base_manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @common/game/base_manager.js */ "./src/common/game/base_manager.js");








class BoundaryManager extends _common_game_base_manager_js__WEBPACK_IMPORTED_MODULE_6__["default"] {
    constructor(level) {
        super();

        this.level = level;
        const boundaryClasses = { left: _common_game_actors_boundary_left_boundary_js__WEBPACK_IMPORTED_MODULE_0__["default"], right: _common_game_actors_boundary_right_boundary_js__WEBPACK_IMPORTED_MODULE_1__["default"], top: _common_game_actors_boundary_top_boundary_js__WEBPACK_IMPORTED_MODULE_2__["default"], bottom: _common_game_actors_boundary_bottom_boundary_js__WEBPACK_IMPORTED_MODULE_3__["default"] };
        
        this.boundaries = Object.fromEntries(
            Object.entries(boundaryClasses).map(([type, BoundaryClass]) => {
                const data = level.boundaries[type];
                return [type, new BoundaryClass(data.coords, data.size, data.background)];
            })
        );
    }

    get objects() {
        return this.boundaries;
    }

    draw(ctx, worldOffset, canvasSize) {
        Object.values(this.boundaries).forEach(boundary => 
            boundary.draw(ctx, worldOffset, canvasSize)
        );
    }

    isRightBoundaryFullyVisible(worldOffset, canvasSize) {
        return this.boundaries.right.isFullyVisible(worldOffset, canvasSize);
    }

    getGroundLevel() {
        return this.boundaries.bottom.coords.y;
    }

    update(factor = 1, worldSpeed = 0, canvasSize = null) {
        for (const boundary of Object.values(this.boundaries)) {
            boundary.update(factor, worldSpeed, canvasSize.width);
        }
    }

    changeGameSize(gameSize) {
        this.boundaries.top.size = new _common_size_js__WEBPACK_IMPORTED_MODULE_5__["default"](gameSize.width, this.boundaries.top.size.height);
        this.boundaries.top.coords = new _common_point_js__WEBPACK_IMPORTED_MODULE_4__["default"](0, 0);
        
        this.boundaries.bottom.size = new _common_size_js__WEBPACK_IMPORTED_MODULE_5__["default"](gameSize.width, this.boundaries.bottom.size.height);
        this.boundaries.bottom.coords = new _common_point_js__WEBPACK_IMPORTED_MODULE_4__["default"](0, gameSize.height - this.boundaries.bottom.size.height);
        
        this.boundaries.left.coords = new _common_point_js__WEBPACK_IMPORTED_MODULE_4__["default"](0, 0);
        this.boundaries.left.size = new _common_size_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.boundaries.left.size.width, gameSize.height);
        
        this.boundaries.right.coords = new _common_point_js__WEBPACK_IMPORTED_MODULE_4__["default"](gameSize.width - this.boundaries.right.size.width, 0);
        this.boundaries.right.size = new _common_size_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.boundaries.right.size.width, gameSize.height);
    }
}

/***/ }),

/***/ "./src/common/game/collision_manager.js":
/*!**********************************************!*\
  !*** ./src/common/game/collision_manager.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CollisionManager)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _common_game_collision_result_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/game/collision_result.js */ "./src/common/game/collision_result.js");




class CollisionManager {
    constructor(world) {
        this.world = world;
    }

    checkPlayerCollisions(playerState, canvasSize) {
        const collisions = [];

        const brickCollision = this.checkBrickCollisions(playerState, canvasSize);
        if (brickCollision) {
            collisions.push(brickCollision);
        }

        const jumpOrbCollision = this.checkJumpOrbCollisions(playerState, canvasSize);
        if (jumpOrbCollision) {
            collisions.push(jumpOrbCollision);
        }

        const spikeCollision = this.checkSpikeCollisions(playerState, canvasSize);
        if (spikeCollision) {
            collisions.push(spikeCollision);
        }

        return collisions;
    }

    checkBrickCollisions(playerState, canvasSize) {
        let topCollision = null;
        
        for (const brick of this.world.getVisibleBricks(canvasSize)) {
            if (!brick.isActive) {
                continue;
            }
            
            const collision = this.checkPlayerBrickCollision(playerState, brick);
            if (collision) {
                if (collision.type === 'destroy') {
                    return collision;
                } else if (collision.type === 'top') {
                    topCollision = collision;
                }
            }
        }
        
        return topCollision;
    }

    checkJumpOrbCollisions(playerState, canvasSize) {
        const padding = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](50, 50);
        for (const jumpOrb of this.world.getVisibleJumpOrbs(canvasSize)) {
            if (this.isPlayerCollidingWithObject(playerState, jumpOrb, padding)) {
                return new _common_game_collision_result_js__WEBPACK_IMPORTED_MODULE_2__["default"](
                    'jumpOrb',
                    new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](jumpOrb.coords.x, jumpOrb.coords.y),
                    new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](playerState.coords.x, playerState.coords.y),
                    jumpOrb
                );
            }
        }
        return null;
    }

    checkPlayerBrickCollision(playerState, brick) {
        if (!this.isPlayerCollidingWithObject(playerState, brick)) {
            return null;
        }

        if (this.isPlayerLandingOnObjectTop(playerState, brick)) {
            const normalizedPosition = this.normalizePlayerPositionOnBrickTop(playerState, brick);
            return new _common_game_collision_result_js__WEBPACK_IMPORTED_MODULE_2__["default"](
                'top',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](brick.coords.x, brick.coords.y),
                normalizedPosition,
                brick
            );
        } else {
            return new _common_game_collision_result_js__WEBPACK_IMPORTED_MODULE_2__["default"](
                'destroy',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](brick.coords.x, brick.coords.y),
                null,
                brick
            );
        }
    }

    checkBoundaryCollisions(playerState) {
        const collisions = [];
        const bottomBoundaryY = this.world.boundaries.bottom.coords.y;
        const boundaries = this.world.boundaries;

        if (playerState.coords.y < boundaries.top.size.height) {
            const normalizedPosition = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
                playerState.coords.x,
                boundaries.top.size.height
            );
            collisions.push(new _common_game_collision_result_js__WEBPACK_IMPORTED_MODULE_2__["default"](
                'boundary-top',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, boundaries.top.size.height),
                normalizedPosition,
                boundaries.top
            ));
        }

        if (playerState.coords.y + playerState.size.height >= bottomBoundaryY) {
            const normalizedPosition = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
                playerState.coords.x,
                bottomBoundaryY - playerState.size.height
            );
            collisions.push(new _common_game_collision_result_js__WEBPACK_IMPORTED_MODULE_2__["default"](
                'boundary-bottom',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, bottomBoundaryY),
                normalizedPosition,
                boundaries.bottom
            ));
        }

        const rightBoundaryX = boundaries.right.coords.x - this.world.worldOffset.x;
        if (playerState.coords.x + playerState.size.width >= rightBoundaryX) {
            const normalizedPosition = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
                rightBoundaryX - playerState.size.width,
                playerState.coords.y
            );
            if (this.isPlayerCollidingWithObject(playerState, boundaries.bottom)) {
                normalizedPosition.y = boundaries.bottom.coords.y - playerState.size.height;
            }
            collisions.push(new _common_game_collision_result_js__WEBPACK_IMPORTED_MODULE_2__["default"](
                'boundary-right',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](rightBoundaryX, 0),
                normalizedPosition,
                boundaries.right
            ));
        }

        const leftBoundaryX = boundaries.left.coords.x - this.world.worldOffset.x;
        if (playerState.coords.x <= leftBoundaryX + boundaries.left.size.width) {
            const normalizedPosition = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
                leftBoundaryX + boundaries.left.size.width,
                playerState.coords.y
            );
            collisions.push(new _common_game_collision_result_js__WEBPACK_IMPORTED_MODULE_2__["default"](
                'boundary-left',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](leftBoundaryX, 0),
                normalizedPosition,
                boundaries.left
            ));
        }

        return collisions;
    }

    isPlayerCollidingWithObject(playerState, object, padding) {
        padding = padding || new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        const playerLeft = playerState.coords.x;
        const playerRight = playerState.coords.x + playerState.size.width;
        const playerTop = playerState.coords.y;
        const playerBottom = playerState.coords.y + playerState.size.height;

        const brickWorldX = object.coords.x - this.world.worldOffset.x;
        const brickLeft = brickWorldX - padding.x;
        const brickRight = brickWorldX + object.size.width + padding.x;
        const brickTop = object.coords.y - padding.y;
        const brickBottom = object.coords.y + object.size.height + padding.y;

        return (playerRight > brickLeft && playerLeft < brickRight) &&
               (playerBottom > brickTop && playerTop < brickBottom);
    }

    isPlayerLandingOnObjectTop(playerState, object) {
        const prevPlayerBottom = playerState.prevCoords.y + playerState.size.height;
        const objectTop = object.coords.y;
        const wasAboveObject = prevPlayerBottom <= objectTop;
        return wasAboveObject && playerState.velocity.y >= 0;
    }

    normalizePlayerPositionOnTop(playerState, object) {
        return new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            playerState.coords.x,
            object.coords.y - playerState.size.height
        );
    }

    normalizePlayerPositionOnBrickTop(playerState, brick) {
        return new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            playerState.coords.x,
            brick.coords.y - playerState.size.height
        );
    }

    checkSpikeCollisions(playerState, canvasSize) {
        for (const spike of this.world.getVisibleSpikes(canvasSize)) {
            if (!spike.isActive) {
                continue;
            }

            if (this.isPlayerCollidingWithSpike(playerState, spike)) {
                return new _common_game_collision_result_js__WEBPACK_IMPORTED_MODULE_2__["default"](
                    'destroy',
                    new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](spike.coords.x, spike.coords.y),
                    null,
                    spike
                );
            }
        }
        return null;
    }

    isPlayerCollidingWithSpike(playerState, spike) {
        const playerLeft = playerState.coords.x;
        const playerRight = playerState.coords.x + playerState.size.width;
        const playerTop = playerState.coords.y;
        const playerBottom = playerState.coords.y + playerState.size.height;

        const spikeX = spike.coords.x - this.world.worldOffset.x;
        const spikeY = spike.coords.y - this.world.worldOffset.y;
        const spikeWidth = spike.size.width;
        const spikeHeight = spike.size.height;

        if (playerRight <= spikeX || playerLeft >= spikeX + spikeWidth ||
            playerBottom <= spikeY || playerTop >= spikeY + spikeHeight) {
            return false;
        }

        const topVertex = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](spikeX + spikeWidth / 2, spikeY);
        const bottomLeftVertex = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](spikeX, spikeY + spikeHeight);
        const bottomRightVertex = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](spikeX + spikeWidth, spikeY + spikeHeight);

        const playerCorners = [
            new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](playerLeft, playerTop),
            new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](playerRight, playerTop),
            new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](playerLeft, playerBottom),
            new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](playerRight, playerBottom)
        ];

        for (const corner of playerCorners) {
            if (this.isPointInTriangle(corner, topVertex, bottomLeftVertex, bottomRightVertex)) {
                return true;
            }
        }

        const spikeVertices = [topVertex, bottomLeftVertex, bottomRightVertex];
        for (const vertex of spikeVertices) {
            if (this.isPointInRectangle(vertex, playerLeft, playerTop, playerRight, playerBottom)) {
                return true;
            }
        }

        return false;
    }

    isPointInTriangle(point, v1, v2, v3) {
        const denom = (v2.y - v3.y) * (v1.x - v3.x) + (v3.x - v2.x) * (v1.y - v3.y);

        const a = ((v2.y - v3.y) * (point.x - v3.x) + (v3.x - v2.x) * (point.y - v3.y)) / denom;
        const b = ((v3.y - v1.y) * (point.x - v3.x) + (v1.x - v3.x) * (point.y - v3.y)) / denom;
        const c = 1 - a - b;

        return a >= 0 && b >= 0 && c >= 0;
    }

    isPointInRectangle(point, left, top, right, bottom) {
        return point.x >= left && point.x <= right &&
               point.y >= top && point.y <= bottom;
    }
}

/***/ }),

/***/ "./src/common/game/collision_result.js":
/*!*********************************************!*\
  !*** ./src/common/game/collision_result.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CollisionResult)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");


class CollisionResult {
    constructor(type, objectPosition, normalizedPosition = null, hitObject = null) {
        this.type = type; // 'destroy', 'top', 'boundary'
        this.objectPosition = objectPosition; // Point для позиции объекта столкновения
        this.normalizedPosition = normalizedPosition; // Point для нормализованной позиции игрока
        this.hitObject = hitObject; // ссылка на объект столкновения
    }
}

/***/ }),

/***/ "./src/common/game/crash_text.js":
/*!***************************************!*\
  !*** ./src/common/game/crash_text.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CrashText)
/* harmony export */ });
/* harmony import */ var _common_string_resources_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/string_resources.js */ "./src/common/string_resources.js");


class CrashText {
    constructor() {
        this.isActive = false;
        this.animationTime = 0;
        this.totalDuration = 3000;
        this.fadeInDuration = 500;
        this.fadeOutDuration = 1000;
        this.scale = 0;
        this.rotation = 0;
        this.alpha = 0;
        this.bouncePhase = 0;
    }

    start() {
        this.isActive = true;
        this.animationTime = 0;
        this.scale = 0;
        this.rotation = 0;
        this.alpha = 0;
        this.bouncePhase = 0;
    }

    update(factor = 1) {
        if (!this.isActive) return;

        this.animationTime += 16 * factor;

        if (this.animationTime >= this.totalDuration) {
            this.isActive = false;
            return;
        }

        if (this.animationTime < this.fadeInDuration) {
            const progress = this.animationTime / this.fadeInDuration;
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            this.scale = easeOut;
            this.alpha = easeOut;
            this.rotation = 0;
            
        } else if (this.animationTime > this.totalDuration - this.fadeOutDuration) {
            const fadeOutStart = this.totalDuration - this.fadeOutDuration;
            const progress = (this.animationTime - fadeOutStart) / this.fadeOutDuration;
            
            this.scale = 1;
            this.alpha = 1 - progress;
            this.rotation = 0;
            
        } else {
            this.scale = 1;
            this.alpha = 1;
            this.rotation = 0;
        }
    }

    draw(ctx, canvasSize) {
        if (!this.isActive || this.alpha <= 0) return;

        ctx.save();
        
        const centerX = canvasSize.width / 2;
        const centerY = canvasSize.height / 2;
        
        ctx.translate(centerX, centerY);
        ctx.rotate(this.rotation);
        ctx.scale(this.scale, this.scale);
        
        ctx.save();
        ctx.translate(4, 4);
        ctx.globalAlpha = this.alpha * 0.5;
        this.drawText(ctx, '#000000', false);
        ctx.restore();
        
        ctx.globalAlpha = this.alpha;
        
        this.drawText(ctx, '#FFFFFF', true);
        
        if (this.alpha > 0.5) {
            ctx.save();
            ctx.globalAlpha = (this.alpha - 0.5) * 2 * 0.7;
            
            const highlightGradient = ctx.createLinearGradient(-120, -50, 120, -20);
            highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
            highlightGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
            highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            this.drawText(ctx, highlightGradient, false);
            ctx.restore();
        }
        
        ctx.restore();
    }

    drawText(ctx, fillStyle, withStroke = false) {
        ctx.font = 'bold 72px "Courier New", "Lucida Console", "Monaco", "DejaVu Sans Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        if (withStroke) {
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 8;
            ctx.lineJoin = 'miter';
            ctx.lineCap = 'butt';
            ctx.miterLimit = 2;
            ctx.strokeText(_common_string_resources_js__WEBPACK_IMPORTED_MODULE_0__["default"].CRASHED, 0, 0);
            
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 6;
            ctx.lineJoin = 'miter';
            ctx.lineCap = 'butt';
            ctx.strokeText(_common_string_resources_js__WEBPACK_IMPORTED_MODULE_0__["default"].CRASHED, 0, 0);
            
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 3;
            ctx.lineJoin = 'miter';
            ctx.lineCap = 'butt';
            ctx.strokeText(_common_string_resources_js__WEBPACK_IMPORTED_MODULE_0__["default"].CRASHED, 0, 0);
        }
        
        ctx.fillStyle = fillStyle;
        ctx.fillText(_common_string_resources_js__WEBPACK_IMPORTED_MODULE_0__["default"].CRASHED, 0, 0);
        
        if (withStroke) {
            ctx.save();
            ctx.globalCompositeOperation = 'source-atop';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.fillText(_common_string_resources_js__WEBPACK_IMPORTED_MODULE_0__["default"].CRASHED, 1, 1);
            ctx.restore();
        }
    }

    isComplete() {
        return !this.isActive;
    }

}

/***/ }),

/***/ "./src/common/game/explosion/explosion_cube.js":
/*!*****************************************************!*\
  !*** ./src/common/game/explosion/explosion_cube.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExplosionCube)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");


class ExplosionCube {
    constructor(coords, size, color) {
        this.coords = coords;
        this.coords.z = 0;
        this.size = size;
        this.originalSize = size;
        this.color = color;
        
        this.velocity = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15 - Math.random() * 8,
            (Math.random() - 0.5) * 10
        );
        
        this.rotationX = 0;
        this.rotationY = 0;
        this.rotationZ = 0;
        this.rotationSpeedX = (Math.random() - 0.5) * 0.3;
        this.rotationSpeedY = (Math.random() - 0.5) * 0.3;
        this.rotationSpeedZ = (Math.random() - 0.5) * 0.3;
        
        this.gravity = 0.8;
        this.bounce = 0.3;
        this.life = 1.0;
        this.decay = 0.012;
        this.groundLevel = 0;
    }

    update() {
        this.coords.x += this.velocity.x;
        this.coords.y += this.velocity.y;
        this.coords.z += this.velocity.z;
        
        this.velocity.y += this.gravity;
        
        if (this.coords.y + this.size >= this.groundLevel) {
            this.coords.y = this.groundLevel - this.size;
            this.velocity.y *= -this.bounce;
            this.velocity.x *= 0.8;
        }
        
        this.rotationX += this.rotationSpeedX;
        this.rotationY += this.rotationSpeedY;
        this.rotationZ += this.rotationSpeedZ;
        
        this.life -= this.decay;
        this.size = this.originalSize * Math.max(0, this.life);
        
        return this.life > 0;
    }

    draw(ctx) {
        if (this.life <= 0) return;

        ctx.save();
        
        const centerX = this.coords.x + this.size / 2;
        const centerY = this.coords.y + this.size / 2;
        
        ctx.translate(centerX, centerY);
        
        const scale = 1 + this.coords.z * 0.01;
        ctx.scale(scale, scale);
        
        const rotX = this.rotationX;
        const rotY = this.rotationY;
        const rotZ = this.rotationZ;
        
        const alpha = this.life * 0.9;
        const r = parseInt(this.color.slice(1, 3), 16);
        const g = parseInt(this.color.slice(3, 5), 16);
        const b = parseInt(this.color.slice(5, 7), 16);
        
        const cubeSize = this.size;
        const depth = cubeSize * 0.4;
        const offsetX = depth * Math.cos(Math.PI / 6);
        const offsetY = depth * Math.sin(Math.PI / 6);
        
        ctx.save();
        ctx.globalAlpha = alpha * 0.3;
        ctx.fillStyle = '#000000';
        ctx.transform(1, 0, -0.5, 0.3, offsetX, offsetY + cubeSize * 0.8);
        ctx.fillRect(-cubeSize / 2, -cubeSize / 2, cubeSize, cubeSize);
        ctx.restore();
        
        ctx.rotate(rotZ);
        
        const lightAngle = rotX + rotY;
        const lightIntensity = (Math.sin(lightAngle) + 1) * 0.3;
        
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fillRect(-cubeSize / 2, -cubeSize / 2, cubeSize, cubeSize);
        
        const topBrightness = 60 + lightIntensity * 40;
        ctx.fillStyle = `rgba(${Math.min(255, r + topBrightness)}, ${Math.min(255, g + topBrightness)}, ${Math.min(255, b + topBrightness)}, ${alpha * 0.85})`;
        ctx.beginPath();
        ctx.moveTo(-cubeSize / 2, -cubeSize / 2);
        ctx.lineTo(-cubeSize / 2 + offsetX, -cubeSize / 2 - offsetY);
        ctx.lineTo(cubeSize / 2 + offsetX, -cubeSize / 2 - offsetY);
        ctx.lineTo(cubeSize / 2, -cubeSize / 2);
        ctx.closePath();
        ctx.fill();
        
        const sideDarkness = 50 - lightIntensity * 30;
        ctx.fillStyle = `rgba(${Math.max(0, r - sideDarkness)}, ${Math.max(0, g - sideDarkness)}, ${Math.max(0, b - sideDarkness)}, ${alpha * 0.9})`;
        ctx.beginPath();
        ctx.moveTo(cubeSize / 2, -cubeSize / 2);
        ctx.lineTo(cubeSize / 2 + offsetX, -cubeSize / 2 - offsetY);
        ctx.lineTo(cubeSize / 2 + offsetX, cubeSize / 2 - offsetY);
        ctx.lineTo(cubeSize / 2, cubeSize / 2);
        ctx.closePath();
        ctx.fill();
        
        ctx.strokeStyle = `rgba(${Math.max(0, r - 80)}, ${Math.max(0, g - 80)}, ${Math.max(0, b - 80)}, ${alpha * 0.8})`;
        ctx.lineWidth = 0.8;

        ctx.strokeRect(-cubeSize / 2, -cubeSize / 2, cubeSize, cubeSize);
        
        ctx.beginPath();
        ctx.moveTo(-cubeSize / 2, -cubeSize / 2);
        ctx.lineTo(-cubeSize / 2 + offsetX, -cubeSize / 2 - offsetY);
        ctx.lineTo(cubeSize / 2 + offsetX, -cubeSize / 2 - offsetY);
        ctx.lineTo(cubeSize / 2, -cubeSize / 2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(cubeSize / 2, -cubeSize / 2);
        ctx.lineTo(cubeSize / 2 + offsetX, -cubeSize / 2 - offsetY);
        ctx.lineTo(cubeSize / 2 + offsetX, cubeSize / 2 - offsetY);
        ctx.lineTo(cubeSize / 2, cubeSize / 2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(-cubeSize / 2, cubeSize / 2);
        ctx.lineTo(-cubeSize / 2 + offsetX, cubeSize / 2 - offsetY);
        ctx.stroke();
        
        if (this.life > 0.5) {
            const highlightAlpha = (this.life - 0.5) * 2 * alpha * 0.3;
            ctx.fillStyle = `rgba(255, 255, 255, ${highlightAlpha})`;
            ctx.fillRect(-cubeSize / 3, -cubeSize / 3, cubeSize / 6, cubeSize / 6);
        }
        
        ctx.restore();
    }
}

/***/ }),

/***/ "./src/common/game/explosion/explosion_effect.js":
/*!*******************************************************!*\
  !*** ./src/common/game/explosion/explosion_effect.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExplosionEffect)
/* harmony export */ });
/* harmony import */ var _common_game_explosion_explosion_cube_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/game/explosion/explosion_cube.js */ "./src/common/game/explosion/explosion_cube.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");




class ExplosionEffect {
    constructor() {
        this.cubes = [];
        this.isActive = false;
    }

    createExplosion(playerPos, playerSize, groundLevel) {
        this.cubes = [];
        this.isActive = true;
        
        const cubesPerSide = 5;
        const cubeSize = Math.min(playerSize.width, playerSize.height) / cubesPerSide;
        
        for (let row = 0; row < cubesPerSide; row++) {
            for (let col = 0; col < cubesPerSide; col++) {
                const x = playerPos.x + col * cubeSize;
                const y = playerPos.y + row * cubeSize;
                
                const colors = ['#FF8C00', '#FF7F00', '#FF6600', '#FF9500', '#FFA500'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                const coords = new _common_point_js__WEBPACK_IMPORTED_MODULE_1__["default"](x, y, 0);
                const cube = new _common_game_explosion_explosion_cube_js__WEBPACK_IMPORTED_MODULE_0__["default"](coords, cubeSize * 0.8, color);
                cube.groundLevel = groundLevel;
                
                const centerDistance = Math.sqrt(
                    Math.pow(col - cubesPerSide/2, 2) + 
                    Math.pow(row - cubesPerSide/2, 2)
                );
                const speedMultiplier = 1 + (centerDistance * 0.3);
                cube.velocity.x *= speedMultiplier;
                cube.velocity.y *= speedMultiplier;
                
                this.cubes.push(cube);
            }
        }
    }

    update() {
        if (!this.isActive) return;
        
        let activeCubes = 0;
        
        for (let i = this.cubes.length - 1; i >= 0; i--) {
            const cube = this.cubes[i];
            const isAlive = cube.update();
            
            if (!isAlive) {
                this.cubes.splice(i, 1);
            } else {
                activeCubes++;
            }
        }
        
        if (activeCubes === 0) {
            this.isActive = false;
        }
    }

    draw(ctx) {
        if (!this.isActive) return;
        
        const sortedCubes = [...this.cubes].sort((a, b) => a.coords.z - b.coords.z);
        
        for (const cube of sortedCubes) {
            cube.draw(ctx);
        }
    }

    isComplete() {
        return !this.isActive;
    }

}

/***/ }),

/***/ "./src/common/game/input_controller.js":
/*!*********************************************!*\
  !*** ./src/common/game/input_controller.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputController)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");


class InputController {
    constructor(player, canvas, objectManager) {
        this.player = player;
        this.canvas = canvas;
        this.objectManager = objectManager;
        this.onPauseRequest = null;
        this.onDebugToggle = null;
        this.onJump = null;
        
        this.lastMouseX = 0;
        this.lastMouseY = 0;
        
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleContextMenu = this.handleContextMenu.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        
        this.init();
    }

    init() {
        document.body.addEventListener('mousedown', this.handleMouseDown);
        this.canvas.addEventListener('contextmenu', this.handleContextMenu);
        this.canvas.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('keydown', this.handleKeyDown);
    }

    handleMouseDown(event) {
        if (event.button === 0) {
            if (this.onJump) {
                this.onJump();
            }
        }
    }
    
    handleContextMenu(event) {
        event.preventDefault();
    }
    
    handleKeyDown(event) {
        console.log(event.code);
        if (event.code === 'Escape') {
            event.preventDefault();
            if (this.onPauseRequest) {
                this.onPauseRequest();
            }
        } else if (event.code === 'Tab') {
            event.preventDefault();
            if (this.onDebugToggle) {
                this.onDebugToggle();
            }
        } else if (event.code === 'ArrowUp') {
            event.preventDefault();
            if (this.onJump) {
                this.onJump();
            }
        }
    }
    
    handleMouseMove(event) {
        const rect = this.canvas.getBoundingClientRect();
        this.lastMouseX = event.clientX - rect.left;
        this.lastMouseY = event.clientY - rect.top;
    }
    
    getMousePosition() {
        return new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.lastMouseX, this.lastMouseY);
    }

    destroy() {
        document.body.removeEventListener('mousedown', this.handleMouseDown);
        this.canvas.removeEventListener('contextmenu', this.handleContextMenu);
        this.canvas.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('keydown', this.handleKeyDown);
    }
}

/***/ }),

/***/ "./src/common/game/object_manager.js":
/*!*******************************************!*\
  !*** ./src/common/game/object_manager.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ObjectManager)
/* harmony export */ });
/* harmony import */ var _common_game_actors_brick_brick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/game/actors/brick/brick.js */ "./src/common/game/actors/brick/brick.js");
/* harmony import */ var _common_game_actors_jump_orb_jump_orb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/game/actors/jump_orb/jump_orb.js */ "./src/common/game/actors/jump_orb/jump_orb.js");
/* harmony import */ var _common_game_actors_spike_spike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/game/actors/spike/spike.js */ "./src/common/game/actors/spike/spike.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _common_game_base_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/game/base_manager.js */ "./src/common/game/base_manager.js");







class ObjectManager extends _common_game_base_manager_js__WEBPACK_IMPORTED_MODULE_5__["default"] {
    constructor(useOneDirectionOptimization, bricks, jumpOrbs, spikes) {
        super();

        this.useOneDirectionOptimization = useOneDirectionOptimization;

        this.bricks = bricks.map(item => new _common_game_actors_brick_brick_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            item.id,
            new _common_point_js__WEBPACK_IMPORTED_MODULE_3__["default"](item.coords.x, item.coords.y), 
            new _common_size_js__WEBPACK_IMPORTED_MODULE_4__["default"](item.size.width, item.size.height),
            item.backgroundColor,
            item.strokeWidth,
            item.strokeColor,
            item.isActive
        )).sort((a, b) => a.coords.x - b.coords.x);

        this.jumpOrbs = jumpOrbs.map(item => new _common_game_actors_jump_orb_jump_orb_js__WEBPACK_IMPORTED_MODULE_1__["default"](
            item.id,
            new _common_point_js__WEBPACK_IMPORTED_MODULE_3__["default"](item.coords.x, item.coords.y),
            item.isReversed
        )).sort((a, b) => a.coords.x - b.coords.x);

        this.spikes = spikes.map(item => new _common_game_actors_spike_spike_js__WEBPACK_IMPORTED_MODULE_2__["default"](
            item.id,
            new _common_point_js__WEBPACK_IMPORTED_MODULE_3__["default"](item.coords.x, item.coords.y), 
            new _common_size_js__WEBPACK_IMPORTED_MODULE_4__["default"](item.size.width, item.size.height),
            item.backgroundColor,
            item.strokeWidth,
            item.strokeColor,
            item.isActive,
            item.isReversed
        )).sort((a, b) => a.coords.x - b.coords.x);

        this.visibilityWindows = {
            bricks: { start: 0, end: 0 },
            jumpOrbs: { start: 0, end: 0 },
            spikes: { start: 0, end: 0 }
        };
    }

    get objects() {
        return this.bricks + this.jumpOrbs + this.spikes;
    }

    updateVisibilityWindow(objects, windowKey, worldOffset, canvasSize) {
        const window = this.visibilityWindows[windowKey];
        const viewLeft = worldOffset.x;
        const viewRight = worldOffset.x + canvasSize.width;
        
        while (window.start < objects.length && objects[window.start].coords.x + (objects[window.start].size?.width || 0) < viewLeft) {
            window.start++;
        }
        
        while (window.end < objects.length && objects[window.end].coords.x <= viewRight) {
            window.end++;
        }
        
        if (window.start >= objects.length) {
            window.start = objects.length;
            window.end = objects.length;
        }
        
        if (window.end > objects.length) {
            window.end = objects.length;
        }
    }

    getVisibleObjectsIterator(objectType, worldOffset, canvasSize) {
        const objects = this[objectType];
        this.updateVisibilityWindow(objects, objectType, worldOffset, canvasSize);
        
        const window = this.visibilityWindows[objectType];
        
        return {
            objects: objects,
            start: window.start,
            end: window.end,
            worldOffset: worldOffset,
            canvasSize: canvasSize,
            
            *[Symbol.iterator]() {
                for (let i = this.start; i < this.end; i++) {
                    yield this.objects[i];
                }
            }
        };
    }

    update(worldSpeed, factor = 1) {
        const jumpOrbsWindow = this.visibilityWindows.jumpOrbs;
        for (let i = jumpOrbsWindow.start; i < jumpOrbsWindow.end; i++) {
            this.jumpOrbs[i].update(worldSpeed, factor);
        }
    }

    draw(ctx, worldOffset, canvasSize) {
        if (this.useOneDirectionOptimization) {
            this.updateVisibilityWindow(this.bricks, 'bricks', worldOffset, canvasSize);
            this.updateVisibilityWindow(this.jumpOrbs, 'jumpOrbs', worldOffset, canvasSize);
            this.updateVisibilityWindow(this.spikes, 'spikes', worldOffset, canvasSize);

            const bricksWindow = this.visibilityWindows.bricks;
            for (let i = bricksWindow.start; i < bricksWindow.end; i++) {
                this.bricks[i].draw(ctx, worldOffset, canvasSize);
            }
            
            const jumpOrbsWindow = this.visibilityWindows.jumpOrbs;
            for (let i = jumpOrbsWindow.start; i < jumpOrbsWindow.end; i++) {
                this.jumpOrbs[i].draw(ctx, worldOffset, canvasSize);
            }
            
            const spikesWindow = this.visibilityWindows.spikes;
            for (let i = spikesWindow.start; i < spikesWindow.end; i++) {
                this.spikes[i].draw(ctx, worldOffset, canvasSize);
            }
        } else {
            this.bricks.forEach(brick => brick.draw(ctx, worldOffset, canvasSize));
            this.jumpOrbs.forEach(brick => brick.draw(ctx, worldOffset, canvasSize));
            this.spikes.forEach(brick => brick.draw(ctx, worldOffset, canvasSize));
        }
    }
}

/***/ }),

/***/ "./src/common/game/pause_menu.js":
/*!***************************************!*\
  !*** ./src/common/game/pause_menu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PauseMenu)
/* harmony export */ });
class PauseMenu {
    constructor() {
        this.container = null;
        this.onContinueClick = null;
        this.onMainMenuClick = null;
        this.isActive = false;
    }
    
    create() {
        this.container = document.createElement('div');
        this.container.className = 'pause-menu-container';
        this.container.innerHTML = `
            <div class="pause-menu">
                <h2 class="pause-title">Пауза</h2>
                <div class="pause-buttons">
                    <button id="continue-button" class="pause-button">Продолжить</button>
                    <button id="main-menu-button" class="pause-button">На главный экран</button>
                </div>
            </div>
        `;
        
        this.addStyles();
        this.setupEventListeners();
        
        return this.container;
    }
    
    addStyles() {
        const styleId = 'pause-menu-styles';
        if (document.getElementById(styleId)) return;
        
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .pause-menu-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                font-family: 'Arial', sans-serif;
            }
            
            .pause-menu {
                text-align: center;
                background: rgba(40, 40, 60, 0.95);
                padding: 40px 30px;
                border-radius: 15px;
                backdrop-filter: blur(10px);
                border: 2px solid rgba(255, 255, 255, 0.3);
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
                min-width: 300px;
            }
            
            .pause-title {
                font-size: 2.5rem;
                color: white;
                margin: 0 0 30px 0;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
                font-weight: bold;
            }
            
            .pause-buttons {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            
            .pause-button {
                padding: 12px 25px;
                font-size: 1.3rem;
                background: rgba(255, 255, 255, 0.15);
                color: white;
                border: 2px solid rgba(255, 255, 255, 0.3);
                border-radius: 25px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-weight: bold;
                min-width: 200px;
            }
            
            .pause-button:hover {
                background: rgba(255, 255, 255, 0.25);
                border-color: rgba(255, 255, 255, 0.5);
                transform: translateY(-2px);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
            }
            
            .pause-button:active {
                transform: translateY(0);
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
            }
        `;
        
        document.head.appendChild(style);
    }
    
    setupEventListeners() {
        const continueButton = this.container.querySelector('#continue-button');
        const mainMenuButton = this.container.querySelector('#main-menu-button');
        
        continueButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.onContinueClick) this.onContinueClick();
        });
        
        mainMenuButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.onMainMenuClick) this.onMainMenuClick();
        });
    }
    
    show() {
        if (!this.container) {
            this.create();
        }
        
        if (!document.body.contains(this.container)) {
            document.body.appendChild(this.container);
        }
        
        this.container.style.display = 'flex';
        this.isActive = true;
    }
    
    hide() {
        if (this.container) {
            this.container.style.display = 'none';
        }
        this.isActive = false;
    }
    
    destroy() {
        if (this.container && document.body.contains(this.container)) {
            document.body.removeChild(this.container);
        }
        this.container = null;
        this.isActive = false;
    }
}

/***/ }),

/***/ "./src/common/game/physics.js":
/*!************************************!*\
  !*** ./src/common/game/physics.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CubePlayerPhysics)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_game_player_update_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/game/player_update_result.js */ "./src/common/game/player_update_result.js");
/* harmony import */ var _common_game_collision_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/game/collision_manager.js */ "./src/common/game/collision_manager.js");
/* harmony import */ var _common_game_base_physics_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/game/base_physics.js */ "./src/common/game/base_physics.js");





class CubePlayerPhysics extends _common_game_base_physics_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor(world, worldSpeed = 0) {
        super(world, worldSpeed);
        this.collisionManager = new _common_game_collision_manager_js__WEBPACK_IMPORTED_MODULE_2__["default"](world);
        this.gravity = 1.0;
        this.playerJumpPower = -18;
        this.orbUpJumpPower = -24;
        this.orbDownJumpPower = 12;
        this.horizontalSpeed = 6;
        this.isGrounded = false;
        this.wasFalling = true;
        this.prevCoords = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        this.collidingWithJumpOrb = false;
    }

    update(factor, player, canvasSize) {
        this.switchToPlayerMovement(canvasSize);
        
        const gameParams = this.getGameParams();

        this.prevCoords = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](player.coords.x, player.coords.y);
        
        player.velocity.y += this.gravity * factor;
        
        if (this.playerMovesInWorld) {
            player.velocity.x = this.horizontalSpeed;
        } else {
            player.velocity.x = 0;
        }
        
        const isFalling = !this.isGrounded && player.velocity.y > 0;
        this.targetRotation = this.targetRotation || player.rotation;
        
        if (isFalling && !this.wasFalling && !player.isIntentionalJump && player.rotationSpeed === 0) {
            player.rotationSpeed = (Math.PI / 2) / 8;
            this.targetRotation = player.rotation + Math.PI / 2;
        }
        
        this.wasFalling = isFalling;
        
        if (player.rotationSpeed > 0) {
            player.rotation += player.rotationSpeed * factor;
            if (player.rotation >= this.targetRotation) {
                player.rotation = this.targetRotation;
                player.rotationSpeed = 0;
            }
        }
        if (isFalling && player.rotationSpeed == 0) {
            const quarterTurn = Math.PI / 2;
            const remainder = player.rotation % quarterTurn;
            if (Math.abs(remainder) > 0.01) {
                const adjustment = quarterTurn - remainder;
                this.targetRotation = player.rotation + adjustment;
                player.rotationSpeed = adjustment / 12;
            }
        }
        
        let newPlayerState = {
            coords: new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
                player.coords.x + (player.velocity.x * factor),
                player.coords.y + (player.velocity.y * factor)
            ),
            size: player.size,
            velocity: player.velocity,
            prevCoords: this.prevCoords
        };

        this.isGrounded = false;
        this.collidingWithJumpOrb = false;
        this.currentJumpOrb = null;

        const boundaryCollisions = this.collisionManager.checkBoundaryCollisions(newPlayerState);
        if (boundaryCollisions.length) {
            let rightBoundaryCollision = boundaryCollisions.find(collision => collision.type === 'boundary-right');
            if (rightBoundaryCollision) {
                player.coords = rightBoundaryCollision.normalizedPosition;
                return _common_game_player_update_result_js__WEBPACK_IMPORTED_MODULE_1__["default"].reachedEnd();
            } else {
                newPlayerState.coords = boundaryCollisions[0].normalizedPosition;
            }

            if (boundaryCollisions[0].objectPosition.y === gameParams.boundaries.top.size.height) {
                player.velocity.y = Math.max(0, player.velocity.y);
            } else {
                player.velocity.y = 0;
                this.isGrounded = true;
                this.handleGroundedRotation(player);
                player.isIntentionalJump = false;
            }
        }

        player.coords = newPlayerState.coords;
        
        const collisions = this.collisionManager.checkPlayerCollisions(newPlayerState, canvasSize);

        const jumpOrbCollision = collisions.find(collision => collision.type === 'jumpOrb');
        if (jumpOrbCollision) {
            this.collidingWithJumpOrb = true;
            this.currentJumpOrb = jumpOrbCollision.hitObject;
        }

        const destroyCollision = collisions.find(collision => collision.type === 'destroy');
        if (destroyCollision) {
            player.isExploding = true;
            return _common_game_player_update_result_js__WEBPACK_IMPORTED_MODULE_1__["default"].destroyed();
        }

        const topCollision = collisions.find(collision => collision.type === 'top');
        if (topCollision) {
            player.coords.y = topCollision.normalizedPosition.y;
            player.coords.x = topCollision.normalizedPosition.x;
            player.velocity.y = 0;
            this.isGrounded = true;

            this.handleGroundedRotation(player);
            player.isIntentionalJump = false;
            return _common_game_player_update_result_js__WEBPACK_IMPORTED_MODULE_1__["default"].alive();
        }
        
        if (this.playerMovesInWorld) {
            let rightBoundaryX = gameParams.size.width - gameParams.boundaries.right.size.width - gameParams.worldOffset.x;
            if (rightBoundaryX + gameParams.boundaries.right.size.width <= canvasSize.width) {
                rightBoundaryX = canvasSize.width - gameParams.boundaries.right.size.width;
            }
            
            const maxPlayerX = rightBoundaryX - player.size.width;
            player.coords.x = Math.min(player.coords.x, maxPlayerX);
        }

        return _common_game_player_update_result_js__WEBPACK_IMPORTED_MODULE_1__["default"].alive();
    }

    handleGroundedRotation(player) {
        if (player.rotation > 0 && player.rotation < Math.PI / 2) {
            const remainingRotation = Math.PI / 2 - player.rotation;
            player.rotationSpeed = remainingRotation / 3;
        } else {
            player.rotation = this.targetRotation;
            player.rotationSpeed = 0;

            const quarterTurn = Math.PI / 2;
            const remainder = player.rotation % quarterTurn;
            if (Math.abs(remainder) > 0.01) {
                const adjustment = quarterTurn - remainder;
                player.rotationSpeed = adjustment / 12;
            }
        }
    }

    jump(player) {
        if (this.isGrounded || this.collidingWithJumpOrb) {
            player.isIntentionalJump = true;
            player.rotationSpeed = (Math.PI / 2) / 12;
            this.targetRotation = player.rotation + Math.PI / 2;

            if (this.collidingWithJumpOrb) {
                if (this.currentJumpOrb.isReversed) {
                    player.velocity.y = this.orbDownJumpPower;
                } else {
                    player.velocity.y = this.orbUpJumpPower;
                }

                if (this.currentJumpOrb && this.currentJumpOrb.startPulseAnimation) {
                    this.currentJumpOrb.startPulseAnimation();
                }
                this.collidingWithJumpOrb = false;
                this.currentJumpOrb = null;
            } else {
                player.velocity.y = this.playerJumpPower;
            }

            this.isGrounded = false;
            return true;
        }
        return false;
    }

}

/***/ }),

/***/ "./src/common/game/player_options.js":
/*!*******************************************!*\
  !*** ./src/common/game/player_options.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerOptions)
/* harmony export */ });
class PlayerOptions {
    constructor(isPlayerFixed) {
        this.isPlayerFixed = isPlayerFixed;
    }

    static default() {
        return new PlayerOptions(true);
    }
}

/***/ }),

/***/ "./src/common/game/player_update_result.js":
/*!*************************************************!*\
  !*** ./src/common/game/player_update_result.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerUpdateResult)
/* harmony export */ });
class PlayerUpdateResult {
    static get ALIVE() { return 'alive'; }
    static get DESTROYED() { return 'destroyed'; }
    static get REACHED_END() { return 'reached_end'; }

    constructor(result) {
        this.result = result;
    }

    static alive() {
        return new PlayerUpdateResult(PlayerUpdateResult.ALIVE);
    }

    static destroyed() {
        return new PlayerUpdateResult(PlayerUpdateResult.DESTROYED);
    }

    static reachedEnd() {
        return new PlayerUpdateResult(PlayerUpdateResult.REACHED_END);
    }

    isAlive() {
        return this.result === PlayerUpdateResult.ALIVE;
    }

    isDestroyed() {
        return this.result === PlayerUpdateResult.DESTROYED;
    }

    isReachedEnd() {
        return this.result === PlayerUpdateResult.REACHED_END;
    }
}

/***/ }),

/***/ "./src/common/game/shake_effect.js":
/*!*****************************************!*\
  !*** ./src/common/game/shake_effect.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShakeEffect)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");


class ShakeEffect {
    constructor() {
        this.intensity = 0;
        this.duration = 0;
        this.timer = 0;
    }

    start(intensity = 8, duration = 300) {
        this.intensity = intensity;
        this.duration = duration;
        this.timer = 0;
    }

    update(factor = 1) {
        if (this.duration <= 0) return;
        
        this.timer += 16 * factor;
        if (this.timer >= this.duration) {
            this.duration = 0;
            this.intensity = 0;
            this.timer = 0;
        }
    }

    getOffset() {
        if (this.duration <= 0) return new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        
        const progress = this.timer / this.duration;
        const fadeOut = 1 - progress;
        const currentIntensity = this.intensity * fadeOut;
        
        return new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            (Math.random() - 0.5) * 2 * currentIntensity,
            (Math.random() - 0.5) * 2 * currentIntensity
        );
    }

    get isActive() {
        return this.duration > 0;
    }


    continueAfterStop(renderCallback, onComplete) {
        this.start(12, 400);
        let lastShakeTime = performance.now();
        const shakeLoop = (currentTime) => {
            const deltaTime = Math.min(currentTime - lastShakeTime, 33);
            lastShakeTime = currentTime;
            
            if (this.isActive) {
                this.update(deltaTime / 16);
                renderCallback();
                requestAnimationFrame(shakeLoop);
            } else {
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        };
        requestAnimationFrame(shakeLoop);
    }
}

/***/ }),

/***/ "./src/common/game/victory_text.js":
/*!*****************************************!*\
  !*** ./src/common/game/victory_text.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VictoryText)
/* harmony export */ });
/* harmony import */ var _common_string_resources_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/string_resources.js */ "./src/common/string_resources.js");


class VictoryText {
    constructor() {
        this.isActive = false;
        this.animationTime = 0;
        this.totalDuration = 3000;
        this.fadeInDuration = 500;
        this.fadeOutDuration = 1000;
        this.scale = 0;
        this.rotation = 0;
        this.alpha = 0;
        this.bouncePhase = 0;
    }

    start() {
        this.isActive = true;
        this.animationTime = 0;
        this.scale = 0;
        this.rotation = 0;
        this.alpha = 0;
        this.bouncePhase = 0;
    }

    update(factor = 1) {
        if (!this.isActive) return;

        this.animationTime += 16 * factor;

        if (this.animationTime >= this.totalDuration) {
            this.isActive = false;
            return;
        }

        if (this.animationTime < this.fadeInDuration) {
            const progress = this.animationTime / this.fadeInDuration;
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            this.scale = easeOut;
            this.alpha = easeOut;
            this.rotation = 0;
            
        } else if (this.animationTime > this.totalDuration - this.fadeOutDuration) {
            const fadeOutStart = this.totalDuration - this.fadeOutDuration;
            const progress = (this.animationTime - fadeOutStart) / this.fadeOutDuration;
            
            this.scale = 1;
            this.alpha = 1 - progress;
            this.rotation = 0;
            
        } else {
            this.scale = 1;
            this.alpha = 1;
            this.rotation = 0;
        }
    }

    draw(ctx, canvasSize) {
        if (!this.isActive || this.alpha <= 0) return;

        ctx.save();
        
        const centerX = canvasSize.width / 2;
        const centerY = canvasSize.height / 2;
        
        ctx.translate(centerX, centerY);
        ctx.rotate(this.rotation);
        ctx.scale(this.scale, this.scale);
        
        ctx.save();
        ctx.translate(4, 4);
        ctx.globalAlpha = this.alpha * 0.5;
        this.drawText(ctx, '#000000', false);
        ctx.restore();
        
        ctx.globalAlpha = this.alpha;
        
        this.drawText(ctx, '#FFFFFF', true);
        
        if (this.alpha > 0.5) {
            ctx.save();
            ctx.globalAlpha = (this.alpha - 0.5) * 2 * 0.7;
            
            const highlightGradient = ctx.createLinearGradient(-120, -50, 120, -20);
            highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
            highlightGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
            highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            this.drawText(ctx, highlightGradient, false);
            ctx.restore();
        }
        
        ctx.restore();
    }

    drawText(ctx, fillStyle, withStroke = false) {
        ctx.font = 'bold 72px "Courier New", "Lucida Console", "Monaco", "DejaVu Sans Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        if (withStroke) {
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 8;
            ctx.lineJoin = 'miter';
            ctx.lineCap = 'butt';
            ctx.miterLimit = 2;
            ctx.strokeText(_common_string_resources_js__WEBPACK_IMPORTED_MODULE_0__["default"].LEVEL_PASSED, 0, 0);
            
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 6;
            ctx.lineJoin = 'miter';
            ctx.lineCap = 'butt';
            ctx.strokeText(_common_string_resources_js__WEBPACK_IMPORTED_MODULE_0__["default"].LEVEL_PASSED, 0, 0);
            
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 3;
            ctx.lineJoin = 'miter';
            ctx.lineCap = 'butt';
            ctx.strokeText(_common_string_resources_js__WEBPACK_IMPORTED_MODULE_0__["default"].LEVEL_PASSED, 0, 0);
        }
        
        ctx.fillStyle = fillStyle;
        ctx.fillText(_common_string_resources_js__WEBPACK_IMPORTED_MODULE_0__["default"].LEVEL_PASSED, 0, 0);
        
        if (withStroke) {
            ctx.save();
            ctx.globalCompositeOperation = 'source-atop';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.fillText(_common_string_resources_js__WEBPACK_IMPORTED_MODULE_0__["default"].LEVEL_PASSED, 1, 1);
            ctx.restore();
        }
    }

    isComplete() {
        return !this.isActive;
    }

}

/***/ }),

/***/ "./src/common/game/world.js":
/*!**********************************!*\
  !*** ./src/common/game/world.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ World)
/* harmony export */ });
/* harmony import */ var _common_game_object_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/game/object_manager.js */ "./src/common/game/object_manager.js");
/* harmony import */ var _common_game_boundary_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/game/boundary_manager.js */ "./src/common/game/boundary_manager.js");
/* harmony import */ var _common_game_actors_player_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/game/actors/player/player.js */ "./src/common/game/actors/player/player.js");
/* harmony import */ var _common_game_player_options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/game/player_options.js */ "./src/common/game/player_options.js");
/* harmony import */ var _common_game_physics_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/game/physics.js */ "./src/common/game/physics.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _common_graphics_progress_bar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @common/graphics/progress_bar.js */ "./src/common/graphics/progress_bar.js");









class World {
    constructor(level, useOneDirectionOptimization) {
        this.name = level.name;
        this.size = new _common_size_js__WEBPACK_IMPORTED_MODULE_6__["default"](level.world.size.width, level.world.size.height);
        this.worldOffset = new _common_point_js__WEBPACK_IMPORTED_MODULE_5__["default"](0, 0);
        
        this.boundaryManager = new _common_game_boundary_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"](level);
        this.player = new _common_game_actors_player_player_js__WEBPACK_IMPORTED_MODULE_2__["default"](new _common_point_js__WEBPACK_IMPORTED_MODULE_5__["default"](level.player.coords.x, level.player.coords.y), new _common_size_js__WEBPACK_IMPORTED_MODULE_6__["default"](level.player.size.width, level.player.size.height));
        this.objectManager = new _common_game_object_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"](useOneDirectionOptimization, level.bricks, level.jumpOrbs, level.spikes);
        this.physics = new _common_game_physics_js__WEBPACK_IMPORTED_MODULE_4__["default"](this, level.world.worldSpeed);

        this.startPosition = this.player.coords.x;
        this.endPosition = this.boundaries.right.coords.x - this.player.size.width;
        this.progressBar = new _common_graphics_progress_bar_js__WEBPACK_IMPORTED_MODULE_7__["default"](new _common_size_js__WEBPACK_IMPORTED_MODULE_6__["default"](400, 20));
    }

    get boundaries() {
        return this.boundaryManager.objects;
    }

    get bricks() {
        return this.objectManager.bricks;
    }

    get jumpOrbs() {
        return this.objectManager.jumpOrbs;
    }

    get spikes() {
        return this.objectManager.spikes;
    }

    getVisibleBricks(canvasSize) {
        return this.objectManager.getVisibleObjectsIterator('bricks', this.worldOffset, canvasSize);
    }

    getVisibleJumpOrbs(canvasSize) {
        return this.objectManager.getVisibleObjectsIterator('jumpOrbs', this.worldOffset, canvasSize);
    }

    getVisibleSpikes(canvasSize) {
        return this.objectManager.getVisibleObjectsIterator('spikes', this.worldOffset, canvasSize);
    }

    update(factor, canvasSize) {
        this.physics.updateWorldOffset(factor, canvasSize);

        const worldSpeed = this.physics.getCurrentWorldSpeed();
        this.objectManager.update(worldSpeed, factor, canvasSize.width);
        this.boundaryManager.update(factor, worldSpeed, canvasSize.width);
        this.player.update(factor);

        this.updateProgressBar(canvasSize);

        return this.physics.update(factor, this.player, canvasSize);
    }
    
    draw(ctx, canvasSize, playerOptions) {
        this.objectManager.draw(ctx, this.worldOffset, canvasSize);
        this.boundaryManager.draw(ctx, this.worldOffset, canvasSize);
        this.player.draw(ctx, this.worldOffset, playerOptions);
        this.progressBar.draw(ctx, canvasSize);
    }

    changeGameSize(size) {
        this.size = size;
        this.boundaryManager.changeGameSize(size);
    }
    
    getHoveredObject(point, playerOptions) {
        playerOptions = playerOptions || _common_game_player_options_js__WEBPACK_IMPORTED_MODULE_3__["default"]["default"]();

        if (this.player.isPointOver(point, this.worldOffset, playerOptions)) {
            return this.player;
        }
        
        for (const brick of this.bricks) {
            if (brick.isPointOver(point, this.worldOffset)) {
                return brick;
            }
        }

        for (const orb of this.jumpOrbs) {
            if (orb.isPointOver(point, this.worldOffset)) {
                return orb;
            }
        }

        for (const spike of this.spikes) {
            if (spike.isPointOver(point, this.worldOffset)) {
                return spike;
            }
        }
        
        for (const [key, boundary] of Object.entries(this.boundaries)) {
            if (boundary.isPointOver(point, this.worldOffset)) {
                return boundary;
            }
        }
        
        return null;
    }

    updateProgressBar() {
        const progress = (this.player.coords.x - this.startPosition + this.worldOffset.x) / (this.endPosition - this.startPosition);
        this.progressBar.setProgress(progress);
    }

    jumpPlayer() {
        this.physics.jump(this.player);
    }
}

/***/ }),

/***/ "./src/common/graphics/brick_pattern_renderer.js":
/*!*******************************************************!*\
  !*** ./src/common/graphics/brick_pattern_renderer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrickPatternRenderer)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");



class BrickPatternRenderer {
    static drawBrickPattern(ctx, x, y, width, height, options = {}) {
        const {
            brickColor = '#8B4513',
            mortarColor = '#654321',
            brickWidth = 60,
            brickHeight = 30,
            mortarWidth = 3,
            mortarHeight = 3,
            offsetX = 0,
            offsetY = 0
        } = options;

        const totalBrickWidth = brickWidth + mortarWidth;
        const totalBrickHeight = brickHeight + mortarHeight;

        ctx.fillStyle = mortarColor;
        ctx.fillRect(x, y, width, height);

        ctx.fillStyle = brickColor;

        const rows = Math.ceil(height / totalBrickHeight);
        const cols = Math.ceil(width / totalBrickWidth);

        const normalizedOffset = offsetX + Math.floor(Math.abs(offsetX) / totalBrickWidth) * totalBrickWidth;

        for (let row = 0; row < rows; row++) {
            const rowY = y + row * totalBrickHeight + offsetY;
            const offset = (row % 2) * (brickWidth / 2);

            for (let col = 0; col < cols + 1; col++) {
                const colX = x + col * totalBrickWidth - offset + normalizedOffset;
                
                if (colX + brickWidth > x && colX < x + width &&
                    rowY < y + height && rowY + brickHeight > y) {
                    
                    const drawX = Math.max(colX, x);
                    const drawY = Math.max(rowY, y);
                    const drawWidth = Math.min(colX + brickWidth, x + width) - drawX;
                    const drawHeight = Math.min(rowY + brickHeight, y + height) - drawY;

                    if (drawWidth > 0 && drawHeight > 0) {
                        ctx.fillRect(drawX, drawY, drawWidth, drawHeight);
                    }
                }
            }
        }
    }

    static drawAnimatedBrickPattern(ctx, x, y, width, height, time, options = {}) {
        const animatedOptions = {
            ...options,
            offsetX: (options.offsetX || 0) + Math.sin(time * 0.001) * 20,
            offsetY: (options.offsetY || 0) + Math.cos(time * 0.0015) * 10
        };

        this.drawBrickPattern(ctx, x, y, width, height, animatedOptions);
    }

    static drawGradientBrickPattern(ctx, x, y, width, height, options = {}) {
        const {
            startColor = '#D2691E',
            endColor = '#8B4513',
            mortarColor = '#654321',
            ...otherOptions
        } = options;

        const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
        gradient.addColorStop(0, startColor);
        gradient.addColorStop(1, endColor);

        this.drawBrickPattern(ctx, x, y, width, height, {
            ...otherOptions,
            brickColor: gradient,
            mortarColor
        });
    }
}

/***/ }),

/***/ "./src/common/graphics/progress_bar.js":
/*!*********************************************!*\
  !*** ./src/common/graphics/progress_bar.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProgressBar)
/* harmony export */ });
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");


class ProgressBar {
    constructor(size) {
        this.size = size;
        this.progress = 0;
        this.backgroundColor = '#333333';
        this.fillColor = '#FF1726';
        this.borderColor = '#ffffff';
        this.borderWidth = 4;
    }

    setProgress(progress) {
        this.progress = Math.max(0, Math.min(1, progress));
    }

    draw(ctx, canvasSize) {
        ctx.save();

        const position = new _common_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            (canvasSize.width - this.size.width) / 2,
            20
        );

        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(position.x, position.y, this.size.width, this.size.height);

        const fillWidth = this.size.width * this.progress;
        ctx.fillStyle = this.fillColor;
        ctx.fillRect(position.x, position.y, fillWidth, this.size.height);

        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = this.borderWidth;
        ctx.strokeRect(position.x, position.y, this.size.width, this.size.height);

        ctx.restore();
    }
}

/***/ }),

/***/ "./src/common/levels/boundary_data.js":
/*!********************************************!*\
  !*** ./src/common/levels/boundary_data.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoundaryData)
/* harmony export */ });
class BoundaryData {
    constructor(
        type,
        coords,
        size,
        background
    ) {
        this.type = type;
        this.coords = coords;
        this.size = size;
        this.background = background;
    }
}

/***/ }),

/***/ "./src/common/levels/brick_data.js":
/*!*****************************************!*\
  !*** ./src/common/levels/brick_data.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrickData)
/* harmony export */ });
class BrickData {
    constructor(id, coords, size, backgroundColor, strokeWidth, strokeColor, isActive) {
        this.id = id;
        this.coords = coords;
        this.size = size;
        this.backgroundColor = backgroundColor;
        this.strokeWidth = strokeWidth;
        this.strokeColor = strokeColor;
        this.isActive = isActive;
    }
}

/***/ }),

/***/ "./src/common/levels/game_bounds_data.js":
/*!***********************************************!*\
  !*** ./src/common/levels/game_bounds_data.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoundsData)
/* harmony export */ });
class GameBoundsData {
    constructor(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
}

/***/ }),

/***/ "./src/common/levels/jump_orb_data.js":
/*!********************************************!*\
  !*** ./src/common/levels/jump_orb_data.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JumpOrbData)
/* harmony export */ });
class JumpOrbData {
    constructor(id, coords, isReversed) {
        this.id = id;
        this.coords = coords;
        this.isReversed = isReversed;
    }
}

/***/ }),

/***/ "./src/common/levels/level.js":
/*!************************************!*\
  !*** ./src/common/levels/level.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Level)
/* harmony export */ });
class Level {
    constructor(
        name, // string
        world, // WorldData,
        boundaries, // GameBoundsData
        bricks, // [BrickData]
        jumpOrbs, // [JumpOrbData]
        spikes, // [SpikeData]
        player // PlayerData
    ) {
        this.name = name;
        this.world = world;
        this.boundaries = boundaries;
        this.bricks = bricks;
        this.jumpOrbs = jumpOrbs;
        this.spikes = spikes;
        this.player = player;
    }
}

/***/ }),

/***/ "./src/common/levels/level_factory.js":
/*!********************************************!*\
  !*** ./src/common/levels/level_factory.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LevelFactory)
/* harmony export */ });
/* harmony import */ var _common_levels_level_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/levels/level.js */ "./src/common/levels/level.js");
/* harmony import */ var _common_levels_world_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/levels/world_data.js */ "./src/common/levels/world_data.js");
/* harmony import */ var _common_levels_player_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/levels/player_data.js */ "./src/common/levels/player_data.js");
/* harmony import */ var _common_levels_brick_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/levels/brick_data.js */ "./src/common/levels/brick_data.js");
/* harmony import */ var _common_levels_boundary_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/levels/boundary_data.js */ "./src/common/levels/boundary_data.js");
/* harmony import */ var _common_levels_game_bounds_data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/levels/game_bounds_data.js */ "./src/common/levels/game_bounds_data.js");
/* harmony import */ var _common_game_actors_boundary_boundary_background_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @common/game/actors/boundary/boundary_background.js */ "./src/common/game/actors/boundary/boundary_background.js");
/* harmony import */ var _common_size_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @common/size.js */ "./src/common/size.js");
/* harmony import */ var _common_point_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @common/point.js */ "./src/common/point.js");










class LevelFactory {
    static createDefaultLevel(canvasSize) {
        const worldData = new _common_levels_world_data_js__WEBPACK_IMPORTED_MODULE_1__["default"](new _common_size_js__WEBPACK_IMPORTED_MODULE_7__["default"](3000, 860), 6);

        const groundLevel = worldData.size.height - 200;
        const boundaryThickness = 100;
        
        const defaultBackground = new _common_game_actors_boundary_boundary_background_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
        
        const boundariesData = new _common_levels_game_bounds_data_js__WEBPACK_IMPORTED_MODULE_5__["default"](
            new _common_levels_boundary_data_js__WEBPACK_IMPORTED_MODULE_4__["default"](
                'left',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_8__["default"](0, 0),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_7__["default"](boundaryThickness, worldData.size.height),
                defaultBackground
            ),
            new _common_levels_boundary_data_js__WEBPACK_IMPORTED_MODULE_4__["default"](
                'top',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_8__["default"](0, 0),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_7__["default"](worldData.size.width, boundaryThickness),
                defaultBackground
            ),
            new _common_levels_boundary_data_js__WEBPACK_IMPORTED_MODULE_4__["default"](
                'right',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_8__["default"](worldData.size.width - boundaryThickness, 0),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_7__["default"](boundaryThickness, worldData.size.height),
                defaultBackground
            ),
            new _common_levels_boundary_data_js__WEBPACK_IMPORTED_MODULE_4__["default"](
                'bottom',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_8__["default"](0, groundLevel),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_7__["default"](worldData.size.width, worldData.size.height - groundLevel),
                defaultBackground
            )
        );

        const playerData = new _common_levels_player_data_js__WEBPACK_IMPORTED_MODULE_2__["default"](
            new _common_point_js__WEBPACK_IMPORTED_MODULE_8__["default"](canvasSize.width / 2 - 25, groundLevel - 50),
            new _common_size_js__WEBPACK_IMPORTED_MODULE_7__["default"](50, 50)
        );

        const bricksData = [];
        const jumpOrbsData = [];
        const spikesData = [];
        
        for (let i = 0; i < 5; i++) {
            bricksData.push(new _common_levels_brick_data_js__WEBPACK_IMPORTED_MODULE_3__["default"](
                `brick-${i + 1}`,
                new _common_point_js__WEBPACK_IMPORTED_MODULE_8__["default"](canvasSize.width + 200 + (i * 50), groundLevel - 150),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_7__["default"](50, 50),
                '#8B4513',
                2,
                '#654321',
                true
            ));
        }
        
        for (let i = 0; i < 4; i++) {
            const stepHeight = i;
            const y = Math.min(groundLevel - 50 - (stepHeight * 50), groundLevel - 50 - 50);
            bricksData.push(new _common_levels_brick_data_js__WEBPACK_IMPORTED_MODULE_3__["default"](
                `brick-${i + 1}`,
                new _common_point_js__WEBPACK_IMPORTED_MODULE_8__["default"](canvasSize.width + 500 + (i * 50), y),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_7__["default"](50, 50),
                '#8B4513',
                2,
                '#654321',
                true
            ));
        }
        
        for (let i = 0; i < 3; i++) {
            bricksData.push(new _common_levels_brick_data_js__WEBPACK_IMPORTED_MODULE_3__["default"](
                `brick-${i + 1}`,
                new _common_point_js__WEBPACK_IMPORTED_MODULE_8__["default"](canvasSize.width + 800 + (i * 50), groundLevel - 100),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_7__["default"](50, 50),
                '#8B4513',
                2,
                '#654321',
                true
            ));
        }
        
        for (let i = 0; i < 3; i++) {
            const stepHeight = (3 - 1 - i);
            const y = Math.min(groundLevel - 50 - (stepHeight * 50), groundLevel - 50 - 50);
            bricksData.push(new _common_levels_brick_data_js__WEBPACK_IMPORTED_MODULE_3__["default"](
                `brick-${i + 1}`,
                new _common_point_js__WEBPACK_IMPORTED_MODULE_8__["default"](canvasSize.width + 1100 + (i * 50), y),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_7__["default"](50, 50),
                '#8B4513',
                2,
                '#654321',
                true
            ));
        }

        return new _common_levels_level_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            'Default level',
            worldData,
            boundariesData,
            bricksData,
            jumpOrbsData,
            spikesData,
            playerData
        );
    }

    static createEmptyLevel(canvasSize) {
        const worldData = new _common_levels_world_data_js__WEBPACK_IMPORTED_MODULE_1__["default"](new _common_size_js__WEBPACK_IMPORTED_MODULE_7__["default"](1290, 860), 6);

        const groundLevel = worldData.size.height - 200;
        const boundaryThickness = 100;
        
        const defaultBackground = new _common_game_actors_boundary_boundary_background_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
        
        const boundariesData = new _common_levels_game_bounds_data_js__WEBPACK_IMPORTED_MODULE_5__["default"](
            new _common_levels_boundary_data_js__WEBPACK_IMPORTED_MODULE_4__["default"](
                'left',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_8__["default"](0, 0),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_7__["default"](boundaryThickness, worldData.size.height),
                defaultBackground
            ),
            new _common_levels_boundary_data_js__WEBPACK_IMPORTED_MODULE_4__["default"](
                'top',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_8__["default"](0, 0),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_7__["default"](worldData.size.width, boundaryThickness),
                defaultBackground
            ),
            new _common_levels_boundary_data_js__WEBPACK_IMPORTED_MODULE_4__["default"](
                'right',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_8__["default"](worldData.size.width - boundaryThickness, 0),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_7__["default"](boundaryThickness, worldData.size.height),
                defaultBackground
            ),
            new _common_levels_boundary_data_js__WEBPACK_IMPORTED_MODULE_4__["default"](
                'bottom',
                new _common_point_js__WEBPACK_IMPORTED_MODULE_8__["default"](0, groundLevel),
                new _common_size_js__WEBPACK_IMPORTED_MODULE_7__["default"](worldData.size.width, worldData.size.height - groundLevel),
                defaultBackground
            )
        );

        const playerData = new _common_levels_player_data_js__WEBPACK_IMPORTED_MODULE_2__["default"](
            new _common_point_js__WEBPACK_IMPORTED_MODULE_8__["default"](canvasSize.width / 2 - 25, groundLevel - 50),
            new _common_size_js__WEBPACK_IMPORTED_MODULE_7__["default"](50, 50)
        );

        return new _common_levels_level_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            'New level',
            worldData,
            boundariesData,
            [],
            [],
            [],
            playerData
        );
    }
}

/***/ }),

/***/ "./src/common/levels/player_data.js":
/*!******************************************!*\
  !*** ./src/common/levels/player_data.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerData)
/* harmony export */ });
class PlayerData {
    constructor(
        coords,
        size
    ) {
        this.coords = coords;
        this.size = size;
    }
}

/***/ }),

/***/ "./src/common/levels/spike_data.js":
/*!*****************************************!*\
  !*** ./src/common/levels/spike_data.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpikeData)
/* harmony export */ });
class SpikeData {
    constructor(id, coords, size, backgroundColor, strokeWidth, strokeColor, isActive, isReversed) {
        this.id = id;
        this.coords = coords;
        this.size = size;
        this.backgroundColor = backgroundColor;
        this.strokeWidth = strokeWidth;
        this.strokeColor = strokeColor;
        this.isActive = isActive;
        this.isReversed = isReversed;
    }
}

/***/ }),

/***/ "./src/common/levels/world_data.js":
/*!*****************************************!*\
  !*** ./src/common/levels/world_data.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WorldData)
/* harmony export */ });
class WorldData {
    constructor(size, worldSpeed) {
        this.size = size;
        this.worldSpeed = worldSpeed;
    }
}

/***/ }),

/***/ "./src/common/point.js":
/*!*****************************!*\
  !*** ./src/common/point.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Point)
/* harmony export */ });
class Point {
    constructor(x, y, z) {
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
        this.z = Number(z) || 0;
    }
}

/***/ }),

/***/ "./src/common/size.js":
/*!****************************!*\
  !*** ./src/common/size.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Size)
/* harmony export */ });
class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

/***/ }),

/***/ "./src/common/string_resources.js":
/*!****************************************!*\
  !*** ./src/common/string_resources.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StringResources)
/* harmony export */ });
class StringResources {
    static get APP_TITLE() { return 'GeometryCat'; }
    static get LEVEL_CATALOG() { return 'Level catalog'; }
    static get DESIGNER_MODE() { return 'Designer mode'; }
    static get PUT_ASIDE_ALL_DOUBTS() { return 'Put aside all doubts to verify this level!'; }
    static get PLAY() { return 'Play!'; }
    static get NEXT() { return 'Next'; }
    static get PREV() { return 'Prev'; }
    static get CRASHED() { return 'Crashed!'; }
    static get LEVEL_PASSED() { return 'Level passed!'; }
    static get BACK() { return 'Back'; }
    static get GAME_SIZE() { return 'Game size'; }
    static get WIDTH() { return 'Width'; }
    static get HEIGHT() { return 'Height'; }
    static get MIN() { return 'min'; }
    static get MOUSE() { return 'Mouse'; }
    static get WORLD_OFFSET() { return 'World offset'; }
    static get BRICK() { return 'Brick'; }
    static get ID() { return 'ID'; }
    static get POSITION() { return 'Position'; }
    static get X() { return 'X'; }
    static get Y() { return 'Y'; }
    static get SIZE() { return 'Size'; }
    static get BACKGROUND() { return 'Background'; }
    static get STROKE() { return 'Stroke'; }
    static get REVERSED() { return 'Reversed'; }
    static get JUMP_ORB() { return 'Jump orb'; }
    static get SPIKE() { return 'Spike'; }
    static get ADD_BRICK() { return 'Add brick'; }
    static get ADD_JUMP_ORB() { return 'Add jump orb'; }
    static get ADD_SPIKE() { return 'Add spike'; }
    static get RESET() { return 'Reset'; }
    static get TEST_LEVEL() { return 'Test level'; }
    static get UPLOAD_LEVEL() { return 'Upload level'; }
    static get DOWNLOAD_LEVEL() { return 'Download level'; }
}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app.js */ "./src/app.js");



const app = new _app_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
app.start();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsb0VBQWU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxvRUFBZTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywwQkFBMEI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsVUFBVTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9FQUFTO0FBQ3ZDLGdCQUFnQix1REFBSTtBQUNwQjtBQUNBO0FBQ0EsK0JBQStCLHFFQUFVO0FBQ3pDLGdCQUFnQix3REFBSztBQUNyQixnQkFBZ0IsdURBQUk7QUFDcEI7QUFDQTtBQUNBLGdCQUFnQixvRUFBUztBQUN6QjtBQUNBLG9CQUFvQix3REFBSztBQUN6QixvQkFBb0IsdURBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdUVBQVc7QUFDM0I7QUFDQSxvQkFBb0Isd0RBQUs7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0VBQVM7QUFDekI7QUFDQSxvQkFBb0Isd0RBQUs7QUFDekIsb0JBQW9CLHVEQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywwRUFBYztBQUMvQyxnQkFBZ0IsdUVBQVk7QUFDNUI7QUFDQSxvQkFBb0Isd0RBQUs7QUFDekIsb0JBQW9CLHVEQUFJO0FBQ3hCLG9CQUFvQiw0RkFBa0I7QUFDdEM7QUFDQSxnQkFBZ0IsdUVBQVk7QUFDNUI7QUFDQSxvQkFBb0Isd0RBQUs7QUFDekIsb0JBQW9CLHVEQUFJO0FBQ3hCLG9CQUFvQiw0RkFBa0I7QUFDdEM7QUFDQSxnQkFBZ0IsdUVBQVk7QUFDNUI7QUFDQSxvQkFBb0Isd0RBQUs7QUFDekIsb0JBQW9CLHVEQUFJO0FBQ3hCLG9CQUFvQiw0RkFBa0I7QUFDdEM7QUFDQSxnQkFBZ0IsdUVBQVk7QUFDNUI7QUFDQSxvQkFBb0Isd0RBQUs7QUFDekIsb0JBQW9CLHVEQUFJO0FBQ3hCLG9CQUFvQiw0RkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLCtEQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelpxQztBQUNGO0FBQ29CO0FBQ1E7QUFDUjtBQUMwQztBQUN2QztBQUMxRDtBQUNlLDRCQUE0QixpR0FBd0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsbUVBQWU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtRUFBZTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLG1FQUFlO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtRUFBZTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUVBQWUsSUFBSTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLG1FQUFlLFVBQVU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1FQUFlLEdBQUc7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUVBQWUsR0FBRztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUVBQWUsTUFBTTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1FQUFlLE9BQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxtRUFBZSxRQUFRO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLG1FQUFlLFlBQVk7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsbUVBQWUsUUFBUTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxtRUFBZSxPQUFPO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1FQUFlO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxtRUFBZSxJQUFJO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsbUVBQWUsVUFBVTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUVBQWUsR0FBRztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtRUFBZSxHQUFHO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELG1FQUFlO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUVBQWU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG1FQUFlLElBQUk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxtRUFBZSxVQUFVO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtRUFBZSxHQUFHO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1FQUFlLEdBQUc7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG1FQUFlLE1BQU07QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtRUFBZSxPQUFPO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsbUVBQWUsUUFBUTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxtRUFBZSxZQUFZO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLG1FQUFlLFFBQVE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsbUVBQWUsT0FBTztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsbUVBQWU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpQkFBaUI7QUFDbEQ7QUFDQSxnQ0FBZ0Msd0RBQUs7QUFDckMsOEJBQThCLHVEQUFJO0FBQ2xDLDZCQUE2QiwwRUFBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGlCQUFpQjtBQUN2RDtBQUNBLGtDQUFrQyx3REFBSztBQUN2QywrQkFBK0IsZ0ZBQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpQkFBaUI7QUFDbEQ7QUFDQSxnQ0FBZ0Msd0RBQUs7QUFDckMsOEJBQThCLHVEQUFJO0FBQ2xDLDZCQUE2QiwwRUFBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2p6Q3FDO0FBQ0Y7QUFDOEQ7QUFDckM7QUFDNUQ7QUFDZSwyQkFBMkIsaUdBQXdCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxnRUFBZSxVQUFVO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnRUFBZSxHQUFHO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnRUFBZSxHQUFHO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0VBQWUsTUFBTTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdFQUFlLE9BQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGdFQUFlLFFBQVE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0ZBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0ZBQWUsZ0JBQWdCLHNEQUFzRDtBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZTcUM7QUFDRjtBQUNuQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSxtQzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNLO0FBQzNCO0FBQ0EsZ0JBQWdCLCtDQUFHO0FBQ25CLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2FwcF9zdGF0ZXMvYmFzZV9hcHBfc3RhdGUuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvYXBwX3N0YXRlcy9jYXRhbG9nL2JhY2tfYnV0dG9uLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2FwcF9zdGF0ZXMvY2F0YWxvZy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvYXBwX3N0YXRlcy9jYXRhbG9nL2NhdGFsb2dfYXBwX3N0YXRlLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2FwcF9zdGF0ZXMvY2F0YWxvZy9lZGl0X2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9hcHBfc3RhdGVzL2NhdGFsb2cvbGV2ZWxfY2FyZC5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9hcHBfc3RhdGVzL2NhdGFsb2cvbG9hZGluZ19zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvYXBwX3N0YXRlcy9jYXRhbG9nL3BsYXlfYnV0dG9uLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2FwcF9zdGF0ZXMvZW1wdHkvZW1wdHlfYXBwX3N0YXRlLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2FwcF9zdGF0ZXMvZ2FtZS9hY3RpdmVfZ2FtZV9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9hcHBfc3RhdGVzL2dhbWUvZGVidWdfc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9hcHBfc3RhdGVzL2dhbWUvZGVidWdfc3RhdGUuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvYXBwX3N0YXRlcy9nYW1lL2Rlc3RydWN0aW9uX3N0YXRlLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2FwcF9zdGF0ZXMvZ2FtZS9nYW1lX2FwcF9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9hcHBfc3RhdGVzL2dhbWUvZ2FtZV9zdGF0ZV9iYXNlLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2FwcF9zdGF0ZXMvZ2FtZS9wYXVzZV9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9hcHBfc3RhdGVzL2dhbWUvdmljdG9yeV9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9hcHBfc3RhdGVzL2xldmVsX2Rlc2lnbmVyL2Jhc2VfbGV2ZWxfZGVzaWduZXJfbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9hcHBfc3RhdGVzL2xldmVsX2Rlc2lnbmVyL2JvdW5kYXJ5X2VkaXRvci5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9hcHBfc3RhdGVzL2xldmVsX2Rlc2lnbmVyL2RyYWdfbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9hcHBfc3RhdGVzL2xldmVsX2Rlc2lnbmVyL2V2ZW50X2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvYXBwX3N0YXRlcy9sZXZlbF9kZXNpZ25lci9nYW1lX3NpemVfbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9hcHBfc3RhdGVzL2xldmVsX2Rlc2lnbmVyL2xldmVsX2Rlc2lnbmVyX2FwcF9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9hcHBfc3RhdGVzL2xldmVsX2Rlc2lnbmVyL2xldmVsX21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvYXBwX3N0YXRlcy9sZXZlbF9kZXNpZ25lci9vYmplY3RfbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9hcHBfc3RhdGVzL2xldmVsX2Rlc2lnbmVyL3BsYXllcl9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvYXBwX3N0YXRlcy9sZXZlbF9kZXNpZ25lci9zY3JvbGxfbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9hcHBfc3RhdGVzL2xldmVsX2Rlc2lnbmVyL3NlbGVjdGlvbi9ncm91cF9zZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvYXBwX3N0YXRlcy9sZXZlbF9kZXNpZ25lci9zZWxlY3Rpb24vc2VsZWN0aW9uX21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvYXBwX3N0YXRlcy9sZXZlbF9kZXNpZ25lci91aV9tYW5hZ2VyLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2FwcF9zdGF0ZXMvc3RhcnRfc2NyZWVuL3N0YXJ0X3NjcmVlbl9hcHBfc3RhdGUuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvY29tbW9uL2JvdW5kcy5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9jb21tb24vZ2FtZS9hY3RvcnMvYWN0b3JfaW5mb19wcm92aWRlci5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9jb21tb24vZ2FtZS9hY3RvcnMvYmFzZV9hY3Rvci5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9jb21tb24vZ2FtZS9hY3RvcnMvYm91bmRhcnkvYmFzZV9ib3VuZGFyeS5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9jb21tb24vZ2FtZS9hY3RvcnMvYm91bmRhcnkvYmFzZV9ib3VuZGFyeV9pbmZvX3Byb3ZpZGVyLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2NvbW1vbi9nYW1lL2FjdG9ycy9ib3VuZGFyeS9ib3R0b21fYm91bmRhcnkuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvY29tbW9uL2dhbWUvYWN0b3JzL2JvdW5kYXJ5L2JvdW5kYXJ5X2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvY29tbW9uL2dhbWUvYWN0b3JzL2JvdW5kYXJ5L2xlZnRfYm91bmRhcnkuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvY29tbW9uL2dhbWUvYWN0b3JzL2JvdW5kYXJ5L3JpZ2h0X2JvdW5kYXJ5LmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2NvbW1vbi9nYW1lL2FjdG9ycy9ib3VuZGFyeS90b3BfYm91bmRhcnkuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvY29tbW9uL2dhbWUvYWN0b3JzL2JyaWNrL2JyaWNrLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2NvbW1vbi9nYW1lL2FjdG9ycy9icmljay9icmlja19pbmZvX3Byb3ZpZGVyLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2NvbW1vbi9nYW1lL2FjdG9ycy9qdW1wX29yYi9qdW1wX29yYi5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9jb21tb24vZ2FtZS9hY3RvcnMvanVtcF9vcmIvanVtcF9vcmJfaW5mb19wcm92aWRlci5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9jb21tb24vZ2FtZS9hY3RvcnMvanVtcF9vcmIvcHVsc2VfYW5pbWF0aW9uLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2NvbW1vbi9nYW1lL2FjdG9ycy9wbGF5ZXIvYmxpbmtfYW5pbWF0aW9uLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2NvbW1vbi9nYW1lL2FjdG9ycy9wbGF5ZXIvcGxheWVyLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2NvbW1vbi9nYW1lL2FjdG9ycy9wbGF5ZXIvcGxheWVyX2luZm9fcHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvY29tbW9uL2dhbWUvYWN0b3JzL3NwaWtlL3NwaWtlLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2NvbW1vbi9nYW1lL2FjdG9ycy9zcGlrZS9zcGlrZV9pbmZvX3Byb3ZpZGVyLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2NvbW1vbi9nYW1lL2Jhc2VfbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9jb21tb24vZ2FtZS9iYXNlX3BoeXNpY3MuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvY29tbW9uL2dhbWUvYm91bmRhcnlfbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9jb21tb24vZ2FtZS9jb2xsaXNpb25fbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9jb21tb24vZ2FtZS9jb2xsaXNpb25fcmVzdWx0LmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2NvbW1vbi9nYW1lL2NyYXNoX3RleHQuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvY29tbW9uL2dhbWUvZXhwbG9zaW9uL2V4cGxvc2lvbl9jdWJlLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2NvbW1vbi9nYW1lL2V4cGxvc2lvbi9leHBsb3Npb25fZWZmZWN0LmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2NvbW1vbi9nYW1lL2lucHV0X2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvY29tbW9uL2dhbWUvb2JqZWN0X21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvY29tbW9uL2dhbWUvcGF1c2VfbWVudS5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9jb21tb24vZ2FtZS9waHlzaWNzLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2NvbW1vbi9nYW1lL3BsYXllcl9vcHRpb25zLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2NvbW1vbi9nYW1lL3BsYXllcl91cGRhdGVfcmVzdWx0LmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2NvbW1vbi9nYW1lL3NoYWtlX2VmZmVjdC5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9jb21tb24vZ2FtZS92aWN0b3J5X3RleHQuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvY29tbW9uL2dhbWUvd29ybGQuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvY29tbW9uL2dyYXBoaWNzL2JyaWNrX3BhdHRlcm5fcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvY29tbW9uL2dyYXBoaWNzL3Byb2dyZXNzX2Jhci5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9jb21tb24vbGV2ZWxzL2JvdW5kYXJ5X2RhdGEuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvY29tbW9uL2xldmVscy9icmlja19kYXRhLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2NvbW1vbi9sZXZlbHMvZ2FtZV9ib3VuZHNfZGF0YS5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9jb21tb24vbGV2ZWxzL2p1bXBfb3JiX2RhdGEuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvY29tbW9uL2xldmVscy9sZXZlbC5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9jb21tb24vbGV2ZWxzL2xldmVsX2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvY29tbW9uL2xldmVscy9wbGF5ZXJfZGF0YS5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9jb21tb24vbGV2ZWxzL3NwaWtlX2RhdGEuanMiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvY29tbW9uL2xldmVscy93b3JsZF9kYXRhLmpzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0Ly4vc3JjL2NvbW1vbi9wb2ludC5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9jb21tb24vc2l6ZS5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9jb21tb24vc3RyaW5nX3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dlb21ldHJ5Y2F0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nZW9tZXRyeWNhdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZ2VvbWV0cnljYXQvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNnYW1lQ2FudmFzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdDRUVCO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYm9yZGVyOiA0cHggc29saWQgIzFhMWExYTtcbiAgICAvKiBib3JkZXItcmFkaXVzOiA4cHg7ICovXG4gICAgd2lkdGg6IDEyOTBweDtcbiAgICBoZWlnaHQ6IDg2MHB4O1xuICAgIC8qIGFzcGVjdC1yYXRpbzogMy8yOyAqL1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3Q0FBd0M7SUFDeEMseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyYztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZ2FtZUNhbnZhcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4N0NFRUI7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMxYTFhMWE7XFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDhweDsgKi9cXG4gICAgd2lkdGg6IDEyOTBweDtcXG4gICAgaGVpZ2h0OiA4NjBweDtcXG4gICAgLyogYXNwZWN0LXJhdGlvOiAzLzI7ICovXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2FtZUFwcFN0YXRlIGZyb20gJ0BhcHBfc3RhdGVzL2dhbWUvZ2FtZV9hcHBfc3RhdGUuanMnO1xyXG5pbXBvcnQgRW1wdHlBcHBTdGF0ZSBmcm9tICdAYXBwX3N0YXRlcy9lbXB0eS9lbXB0eV9hcHBfc3RhdGUuanMnO1xyXG5pbXBvcnQgU3RhcnRTY3JlZW5BcHBTdGF0ZSBmcm9tICdAYXBwX3N0YXRlcy9zdGFydF9zY3JlZW4vc3RhcnRfc2NyZWVuX2FwcF9zdGF0ZS5qcyc7XHJcbmltcG9ydCBMZXZlbERlc2lnbmVyQXBwU3RhdGUgZnJvbSAnQGFwcF9zdGF0ZXMvbGV2ZWxfZGVzaWduZXIvbGV2ZWxfZGVzaWduZXJfYXBwX3N0YXRlLmpzJztcclxuaW1wb3J0IFNpemUgZnJvbSAnQGNvbW1vbi9zaXplLmpzJztcclxuaW1wb3J0IExldmVsRmFjdG9yeSBmcm9tICdAY29tbW9uL2xldmVscy9sZXZlbF9mYWN0b3J5LmpzJztcclxuaW1wb3J0IENhdGFsb2dBcHBTdGF0ZSBmcm9tICdAYXBwX3N0YXRlcy9jYXRhbG9nL2NhdGFsb2dfYXBwX3N0YXRlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lQ2FudmFzJyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IG5ldyBTaXplKDEyOTAsIDg2MCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGVzID0ge1xyXG4gICAgICAgICAgICBpbml0aWFsOiBuZXcgRW1wdHlBcHBTdGF0ZSgpLFxyXG4gICAgICAgICAgICBzdGFydDogbmV3IFN0YXJ0U2NyZWVuQXBwU3RhdGUodGhpcy5jYW52YXMpLFxyXG4gICAgICAgICAgICBjYXRhbG9nOiBuZXcgQ2F0YWxvZ0FwcFN0YXRlKHRoaXMuY2FudmFzLCB0aGlzLmNhbnZhc1NpemUpLFxyXG4gICAgICAgICAgICBnYW1lOiBuZXcgR2FtZUFwcFN0YXRlKHRoaXMuY2FudmFzLCB0aGlzLmNhbnZhc1NpemUsIExldmVsRmFjdG9yeS5jcmVhdGVEZWZhdWx0TGV2ZWwodGhpcy5jYW52YXNTaXplKSksXHJcbiAgICAgICAgICAgIGRlc2lnbmVyOiBuZXcgTGV2ZWxEZXNpZ25lckFwcFN0YXRlKHRoaXMuY2FudmFzLCB0aGlzLmNhbnZhc1NpemUpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0cmluZ1RvU3RhdGUgPSB7fTtcclxuICAgICAgICB0aGlzLnN0cmluZ1RvU3RhdGVbQXBwLlNUQVJUXSA9IHRoaXMuc3RhdGVzLnN0YXJ0O1xyXG4gICAgICAgIHRoaXMuc3RyaW5nVG9TdGF0ZVtBcHAuQ0FUQUxPR10gPSB0aGlzLnN0YXRlcy5jYXRhbG9nO1xyXG4gICAgICAgIHRoaXMuc3RyaW5nVG9TdGF0ZVtBcHAuR0FNRV0gPSB0aGlzLnN0YXRlcy5nYW1lO1xyXG4gICAgICAgIHRoaXMuc3RyaW5nVG9TdGF0ZVtBcHAuREVTSUdORVJdID0gdGhpcy5zdGF0ZXMuZGVzaWduZXI7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gdGhpcy5zdGF0ZXMuaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IFNUQVJUKCkgeyByZXR1cm4gJ1N0YXJ0JyB9O1xyXG4gICAgc3RhdGljIGdldCBDQVRBTE9HKCkgeyByZXR1cm4gJ0NhdGFsb2cnIH07XHJcbiAgICBzdGF0aWMgZ2V0IEdBTUUoKSB7IHJldHVybiAnR2FtZScgfTtcclxuICAgIHN0YXRpYyBnZXQgREVTSUdORVIoKSB7IHJldHVybiAnRGVzaWduZXInIH07XHJcblxyXG4gICAgY2hlY2tDYW5SZW5kZXJBcHAoKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAodmlld3BvcnRXaWR0aCA8IHRoaXMuY2FudmFzU2l6ZS53aWR0aCB8fCB2aWV3cG9ydEhlaWdodCA8IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXNTaXplLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IHRoaXMuY2FudmFzU2l6ZS53aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSAnNTAlJztcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUudG9wID0gJzUwJSc7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXR1cFJlc2l6ZUxpc3RlbmVyKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tDYW5SZW5kZXJBcHAoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cFN0YXRlQ2FsbGJhY2tzKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGVzLnN0YXJ0Lm9uUGxheUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRvU3RhdGUodGhpcy5zdGF0ZXMuY2F0YWxvZyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0YXRlcy5zdGFydC5vbkxldmVsRGVzaWduZXJDbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUb1N0YXRlKHRoaXMuc3RhdGVzLmRlc2lnbmVyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlcy5nYW1lLm9uRXhpdCA9IChuZXh0U3RhdGUsIGxldmVsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbmV4dFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSB0aGlzLnN0YXRlcy5zdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRvU3RhdGUobmV4dFN0YXRlLCB7bGV2ZWw6IGxldmVsfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0YXRlcy5nYW1lLm9uTWFpbk1lbnUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVG9TdGF0ZSh0aGlzLnN0YXRlcy5zdGFydCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZXMuZGVzaWduZXIub25UZXN0TGV2ZWwgPSAobGV2ZWwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUb1N0YXRlKHRoaXMuc3RhdGVzLmdhbWUsIHtsZXZlbDogbGV2ZWwsIG5leHRTdGF0ZTogQXBwLkRFU0lHTkVSfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZXMuZGVzaWduZXIub25FeGl0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRvU3RhdGUodGhpcy5zdGF0ZXMuc3RhcnQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGVzLmNhdGFsb2cub25FeGl0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRvU3RhdGUodGhpcy5zdGF0ZXMuc3RhcnQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdGF0ZXMuY2F0YWxvZy5vbkxldmVsU3RhcnQgPSAobGV2ZWwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUb1N0YXRlKHRoaXMuc3RhdGVzLmdhbWUsIHtsZXZlbDogbGV2ZWwsIG5leHRTdGF0ZTogQXBwLkNBVEFMT0d9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RhdGVzLmNhdGFsb2cub25MZXZlbEVkaXQgPSAobGV2ZWwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUb1N0YXRlKHRoaXMuc3RhdGVzLmRlc2lnbmVyLCB7bGV2ZWw6IGxldmVsfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFRvU3RhdGUoc3RhdGUsIGFyZ3MpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHN0YXRlID09PSAnc3RyaW5nJyB8fCBzdGF0ZSBpbnN0YW5jZW9mIFN0cmluZykge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IHRoaXMuc3RyaW5nVG9TdGF0ZVtzdGF0ZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlLmRlYWN0aXZhdGUoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlLmFjdGl2YXRlKGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0dXBSZXNpemVMaXN0ZW5lcigpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBTdGF0ZUNhbGxiYWNrcygpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoVG9TdGF0ZSh0aGlzLnN0YXRlcy5zdGFydCk7XHJcbiAgICAgICAgdGhpcy5jaGVja0NhblJlbmRlckFwcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnN0YXRlcykuZm9yRWFjaChzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VBcHBTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25JZCA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMub25FeGl0ID0gKCkgPT4ge307XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24uanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja0J1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgc2l6ZSwgdGV4dCkge1xyXG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBzaXplLCB0ZXh0LCB7XHJcbiAgICAgICAgICAgIGZvbnQ6ICdib2xkIDE4cHggXCJDb3VyaWVyIE5ld1wiLCBcIkx1Y2lkYSBDb25zb2xlXCIsIFwiTW9uYWNvXCIsIFwiRGVqYVZ1IFNhbnMgTW9ub1wiLCBtb25vc3BhY2UnLFxyXG4gICAgICAgICAgICBicmlja0NvbG9yOiAnIzhCNDUxMycsXHJcbiAgICAgICAgICAgIG1vcnRhckNvbG9yOiAnIzY1NDMyMScsXHJcbiAgICAgICAgICAgIGhvdmVyZWRCcmlja0NvbG9yOiAnI0EwNTIyRCcsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzY1NDMyMScsXHJcbiAgICAgICAgICAgIGhvdmVyZWRCb3JkZXJDb2xvcjogJyM4QjQ1MTMnLFxyXG4gICAgICAgICAgICBicmlja1dpZHRoOiAzNSxcclxuICAgICAgICAgICAgYnJpY2tIZWlnaHQ6IDE4LFxyXG4gICAgICAgICAgICBtb3J0YXJXaWR0aDogMixcclxuICAgICAgICAgICAgbW9ydGFySGVpZ2h0OiAyXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9pbnQgZnJvbSAnQGNvbW1vbi9wb2ludC5qcyc7XHJcbmltcG9ydCBTaXplIGZyb20gJ0Bjb21tb24vc2l6ZS5qcyc7XHJcbmltcG9ydCBCcmlja1BhdHRlcm5SZW5kZXJlciBmcm9tICdAY29tbW9uL2dyYXBoaWNzL2JyaWNrX3BhdHRlcm5fcmVuZGVyZXIuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplLCB0ZXh0ID0gJycsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICBmb250OiAnYm9sZCAxNnB4IFwiQ291cmllciBOZXdcIiwgXCJMdWNpZGEgQ29uc29sZVwiLCBcIk1vbmFjb1wiLCBcIkRlamFWdSBTYW5zIE1vbm9cIiwgbW9ub3NwYWNlJyxcclxuICAgICAgICAgICAgdGV4dENvbG9yOiAnI0ZGRkZGRicsXHJcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzLFxyXG4gICAgICAgICAgICBicmlja0NvbG9yOiAnI0QyNjkxRScsXHJcbiAgICAgICAgICAgIG1vcnRhckNvbG9yOiAnIzhCNDUxMycsXHJcbiAgICAgICAgICAgIGhvdmVyZWRCcmlja0NvbG9yOiAnI0NEODUzRicsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzY1NDMyMScsXHJcbiAgICAgICAgICAgIGhvdmVyZWRCb3JkZXJDb2xvcjogJyNGNEE0NjAnLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMyxcclxuICAgICAgICAgICAgaG92ZXJlZEJvcmRlcldpZHRoOiA0LFxyXG4gICAgICAgICAgICBicmlja1dpZHRoOiAzMCxcclxuICAgICAgICAgICAgYnJpY2tIZWlnaHQ6IDE1LFxyXG4gICAgICAgICAgICBtb3J0YXJXaWR0aDogMixcclxuICAgICAgICAgICAgbW9ydGFySGVpZ2h0OiAyLFxyXG4gICAgICAgICAgICAuLi5vcHRpb25zXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpc1BvaW50SW5zaWRlKHBvaW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50LnggPj0gdGhpcy5wb3NpdGlvbi54ICYmXHJcbiAgICAgICAgICAgICAgIHBvaW50LnggPD0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLndpZHRoICYmXHJcbiAgICAgICAgICAgICAgIHBvaW50LnkgPj0gdGhpcy5wb3NpdGlvbi55ICYmXHJcbiAgICAgICAgICAgICAgIHBvaW50LnkgPD0gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJyaWNrT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYnJpY2tDb2xvcjogdGhpcy5ob3ZlcmVkID8gdGhpcy5vcHRpb25zLmhvdmVyZWRCcmlja0NvbG9yIDogdGhpcy5vcHRpb25zLmJyaWNrQ29sb3IsXHJcbiAgICAgICAgICAgIG1vcnRhckNvbG9yOiB0aGlzLm9wdGlvbnMubW9ydGFyQ29sb3IsXHJcbiAgICAgICAgICAgIGJyaWNrV2lkdGg6IHRoaXMub3B0aW9ucy5icmlja1dpZHRoLFxyXG4gICAgICAgICAgICBicmlja0hlaWdodDogdGhpcy5vcHRpb25zLmJyaWNrSGVpZ2h0LFxyXG4gICAgICAgICAgICBtb3J0YXJXaWR0aDogdGhpcy5vcHRpb25zLm1vcnRhcldpZHRoLFxyXG4gICAgICAgICAgICBtb3J0YXJIZWlnaHQ6IHRoaXMub3B0aW9ucy5tb3J0YXJIZWlnaHRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBCcmlja1BhdHRlcm5SZW5kZXJlci5kcmF3QnJpY2tQYXR0ZXJuKFxyXG4gICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB0aGlzLnNpemUud2lkdGgsIHRoaXMuc2l6ZS5oZWlnaHQsXHJcbiAgICAgICAgICAgIGJyaWNrT3B0aW9uc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuaG92ZXJlZCA/IHRoaXMub3B0aW9ucy5ob3ZlcmVkQm9yZGVyQ29sb3IgOiB0aGlzLm9wdGlvbnMuYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuaG92ZXJlZCA/IHRoaXMub3B0aW9ucy5ob3ZlcmVkQm9yZGVyV2lkdGggOiB0aGlzLm9wdGlvbnMuYm9yZGVyV2lkdGg7XHJcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRleHQpIHtcclxuICAgICAgICAgICAgY3R4LmZvbnQgPSB0aGlzLm9wdGlvbnMuZm9udDtcclxuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjZW50ZXJYID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgY29uc3QgY2VudGVyWSA9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5vcHRpb25zLnN0cm9rZUNvbG9yO1xyXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5vcHRpb25zLnN0cm9rZVdpZHRoO1xyXG4gICAgICAgICAgICBjdHgubGluZUpvaW4gPSAncm91bmQnO1xyXG4gICAgICAgICAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VUZXh0KHRoaXMudGV4dCwgY2VudGVyWCwgY2VudGVyWSk7XHJcblxyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5vcHRpb25zLnRleHRDb2xvcjtcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VBcHBTdGF0ZSBmcm9tICdAYXBwX3N0YXRlcy9iYXNlX2FwcF9zdGF0ZS5qcyc7XHJcbmltcG9ydCBCcmlja1BhdHRlcm5SZW5kZXJlciBmcm9tICdAY29tbW9uL2dyYXBoaWNzL2JyaWNrX3BhdHRlcm5fcmVuZGVyZXIuanMnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnQGNvbW1vbi9wb2ludC5qcyc7XHJcbmltcG9ydCBTaXplIGZyb20gJ0Bjb21tb24vc2l6ZS5qcyc7XHJcbmltcG9ydCBMZXZlbENhcmQgZnJvbSAnLi9sZXZlbF9jYXJkLmpzJztcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSAnLi9sb2FkaW5nX3NjcmVlbi5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nQXBwU3RhdGUgZXh0ZW5kcyBCYXNlQXBwU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjYW52YXNTaXplKSB7XHJcbiAgICAgICAgc3VwZXIoY2FudmFzKTtcclxuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IG5ldyBTaXplKGNhbnZhc1NpemUud2lkdGgsIGNhbnZhc1NpemUuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5sZXZlbFBhdGhzID0gW1xyXG4gICAgICAgICAgICAnLi9zcmMvY29sbGVjdGlvbi9sZXZlbC0wLmpzb24nLFxyXG4gICAgICAgICAgICAnLi9zcmMvY29sbGVjdGlvbi9sZXZlbC0xLmpzb24nLFxyXG4gICAgICAgICAgICAnLi9zcmMvY29sbGVjdGlvbi9sZXZlbC0yLmpzb24nXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBbXTtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMZXZlbEluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5vbkxldmVsU3RhcnQgPSAoKSA9PiB7fTtcclxuICAgICAgICB0aGlzLm9uTGV2ZWxFZGl0ID0gKCkgPT4ge307XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50cygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaGFuZGxlTW91c2VNb3ZlID0gdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWVMb29wID0gdGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRMZXZlbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2FkTGV2ZWxzKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1Byb2dyZXNzID0gMDtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZXZlbFBhdGhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZXZlbFBhdGggPSB0aGlzLmxldmVsUGF0aHNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGxldmVsUGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbHMucHVzaChsZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGxvYWRpbmcgbGV2ZWwgZnJvbSAke2xldmVsUGF0aH06YCwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1Byb2dyZXNzID0gKGkgKyAxKSAvIHRoaXMubGV2ZWxQYXRocy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIGxldmVsIGxvYWRpbmc6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25JZCkge1xyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbklkKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25JZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuYm91bmRDbGlja0hhbmRsZXIgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmJvdW5kQ2xpY2tIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmJvdW5kQ2xpY2tIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0xvYWRpbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGNsaWNrUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCwgZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5sZXZlbENhcmQuaGFuZGxlQ2xpY2soY2xpY2tQb2ludCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNhcmRBY3Rpb24ocmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTW91c2VNb3ZlKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb2FkaW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBtb3VzZVBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsIGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzSG92ZXJlZCA9IHRoaXMubGV2ZWxDYXJkLmhhbmRsZU1vdXNlTW92ZShtb3VzZVBvaW50KTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBpc0hvdmVyZWQgPyAncG9pbnRlcicgOiAnZGVmYXVsdCc7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZUNvbXBvbmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZFNpemUgPSBuZXcgU2l6ZSg0MDAsIDIyMCk7XHJcbiAgICAgICAgY29uc3QgY2FyZFBvc2l0aW9uID0gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICAodGhpcy5jYW52YXNTaXplLndpZHRoIC0gY2FyZFNpemUud2lkdGgpIC8gMixcclxuICAgICAgICAgICAgKHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLSBjYXJkU2l6ZS5oZWlnaHQpIC8gMlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMubGV2ZWxDYXJkID0gbmV3IExldmVsQ2FyZChjYXJkUG9zaXRpb24sIGNhcmRTaXplLCB0aGlzLmNhbnZhc1NpemUpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NjcmVlbiA9IG5ldyBMb2FkaW5nU2NyZWVuKHRoaXMuY2FudmFzU2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2FyZEFjdGlvbihhY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi5hY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAncGxheSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTGV2ZWxTdGFydChhY3Rpb24ubGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2VkaXQnOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmxldmVsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25MZXZlbEVkaXQoYWN0aW9uLmxldmVsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwcmV2JzpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTGV2ZWxJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkTGV2ZWxJbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ25leHQnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRMZXZlbEluZGV4IDwgdGhpcy5sZXZlbHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRMZXZlbEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmFjayc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXhpdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdhbWVMb29wKGN1cnJlbnRUaW1lID0gMCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGF5b3V0KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3ApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1cGRhdGVMYXlvdXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsQ2FyZC5zZXRMZXZlbCh0aGlzLmxldmVsc1t0aGlzLnNlbGVjdGVkTGV2ZWxJbmRleF0pO1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsQ2FyZC51cGRhdGVMYXlvdXQodGhpcy5zZWxlY3RlZExldmVsSW5kZXgsIHRoaXMubGV2ZWxzLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpIC0gdGhpcy5zdGFydFRpbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzU2l6ZS53aWR0aCwgdGhpcy5jYW52YXNTaXplLmhlaWdodCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgQnJpY2tQYXR0ZXJuUmVuZGVyZXIuZHJhd0FuaW1hdGVkQnJpY2tQYXR0ZXJuKFxyXG4gICAgICAgICAgICB0aGlzLmN0eCxcclxuICAgICAgICAgICAgMCwgMCxcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNTaXplLndpZHRoLCB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0LFxyXG4gICAgICAgICAgICBjdXJyZW50VGltZSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJpY2tDb2xvcjogJyM4QjQ1MTMnLFxyXG4gICAgICAgICAgICAgICAgbW9ydGFyQ29sb3I6ICcjNjU0MzIxJyxcclxuICAgICAgICAgICAgICAgIGJyaWNrV2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgYnJpY2tIZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgbW9ydGFyV2lkdGg6IDQsXHJcbiAgICAgICAgICAgICAgICBtb3J0YXJIZWlnaHQ6IDRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMyknO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzU2l6ZS53aWR0aCwgdGhpcy5jYW52YXNTaXplLmhlaWdodCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdTY3JlZW4uZHJhdyh0aGlzLmN0eCwgdGhpcy5sb2FkaW5nUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxDYXJkLmRyYXcodGhpcy5jdHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uLmpzJztcclxuaW1wb3J0IEJyaWNrUGF0dGVyblJlbmRlcmVyIGZyb20gJ0Bjb21tb24vZ3JhcGhpY3MvYnJpY2tfcGF0dGVybl9yZW5kZXJlci5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0QnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHNpemUsICcnLCB7XHJcbiAgICAgICAgICAgIGJyaWNrV2lkdGg6IDIwLFxyXG4gICAgICAgICAgICBicmlja0hlaWdodDogMTAsXHJcbiAgICAgICAgICAgIG1vcnRhcldpZHRoOiAxLFxyXG4gICAgICAgICAgICBtb3J0YXJIZWlnaHQ6IDFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJyaWNrT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYnJpY2tDb2xvcjogdGhpcy5ob3ZlcmVkID8gdGhpcy5vcHRpb25zLmhvdmVyZWRCcmlja0NvbG9yIDogdGhpcy5vcHRpb25zLmJyaWNrQ29sb3IsXHJcbiAgICAgICAgICAgIG1vcnRhckNvbG9yOiB0aGlzLm9wdGlvbnMubW9ydGFyQ29sb3IsXHJcbiAgICAgICAgICAgIGJyaWNrV2lkdGg6IHRoaXMub3B0aW9ucy5icmlja1dpZHRoLFxyXG4gICAgICAgICAgICBicmlja0hlaWdodDogdGhpcy5vcHRpb25zLmJyaWNrSGVpZ2h0LFxyXG4gICAgICAgICAgICBtb3J0YXJXaWR0aDogdGhpcy5vcHRpb25zLm1vcnRhcldpZHRoLFxyXG4gICAgICAgICAgICBtb3J0YXJIZWlnaHQ6IHRoaXMub3B0aW9ucy5tb3J0YXJIZWlnaHRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBCcmlja1BhdHRlcm5SZW5kZXJlci5kcmF3QnJpY2tQYXR0ZXJuKFxyXG4gICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB0aGlzLnNpemUud2lkdGgsIHRoaXMuc2l6ZS5oZWlnaHQsXHJcbiAgICAgICAgICAgIGJyaWNrT3B0aW9uc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuaG92ZXJlZCA/IHRoaXMub3B0aW9ucy5ob3ZlcmVkQm9yZGVyQ29sb3IgOiB0aGlzLm9wdGlvbnMuYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuaG92ZXJlZCA/IHRoaXMub3B0aW9ucy5ob3ZlcmVkQm9yZGVyV2lkdGggOiB0aGlzLm9wdGlvbnMuYm9yZGVyV2lkdGg7XHJcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd0dlYXJJY29uKGN0eCk7XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0dlYXJJY29uKGN0eCkge1xyXG4gICAgICAgIGNvbnN0IGNlbnRlclggPSB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUud2lkdGggLyAyO1xyXG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICBjb25zdCBvdXRlclJhZGl1cyA9IDEyO1xyXG4gICAgICAgIGNvbnN0IGlubmVyUmFkaXVzID0gNjtcclxuICAgICAgICBjb25zdCBudW1UZWV0aCA9IDg7XHJcblxyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwMDAwJztcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgIGN0eC5saW5lSm9pbiA9ICdyb3VuZCc7XHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVRlZXRoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSAoaSAqIDIgKiBNYXRoLlBJKSAvIG51bVRlZXRoO1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0QW5nbGUgPSAoKGkgKyAxKSAqIDIgKiBNYXRoLlBJKSAvIG51bVRlZXRoO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3V0ZXJYID0gY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIG91dGVyUmFkaXVzO1xyXG4gICAgICAgICAgICBjb25zdCBvdXRlclkgPSBjZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogb3V0ZXJSYWRpdXM7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dGVyWE5leHQgPSBjZW50ZXJYICsgTWF0aC5jb3MobmV4dEFuZ2xlKSAqIG91dGVyUmFkaXVzO1xyXG4gICAgICAgICAgICBjb25zdCBvdXRlcllOZXh0ID0gY2VudGVyWSArIE1hdGguc2luKG5leHRBbmdsZSkgKiBvdXRlclJhZGl1cztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlubmVyQW5nbGUgPSBhbmdsZSArIE1hdGguUEkgLyBudW1UZWV0aDtcclxuICAgICAgICAgICAgY29uc3QgaW5uZXJYID0gY2VudGVyWCArIE1hdGguY29zKGlubmVyQW5nbGUpICogaW5uZXJSYWRpdXM7XHJcbiAgICAgICAgICAgIGNvbnN0IGlubmVyWSA9IGNlbnRlclkgKyBNYXRoLnNpbihpbm5lckFuZ2xlKSAqIGlubmVyUmFkaXVzO1xyXG5cclxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8ob3V0ZXJYLCBvdXRlclkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhvdXRlclgsIG91dGVyWSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LmxpbmVUbyhvdXRlclhOZXh0LCBvdXRlcllOZXh0KTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyhpbm5lclgsIGlubmVyWSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgMywgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwMDAwMCc7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBQb2ludCBmcm9tICdAY29tbW9uL3BvaW50LmpzJztcclxuaW1wb3J0IFNpemUgZnJvbSAnQGNvbW1vbi9zaXplLmpzJztcclxuaW1wb3J0IEJyaWNrUGF0dGVyblJlbmRlcmVyIGZyb20gJ0Bjb21tb24vZ3JhcGhpY3MvYnJpY2tfcGF0dGVybl9yZW5kZXJlci5qcyc7XHJcbmltcG9ydCBQbGF5QnV0dG9uIGZyb20gJy4vcGxheV9idXR0b24uanMnO1xyXG5pbXBvcnQgRWRpdEJ1dHRvbiBmcm9tICcuL2VkaXRfYnV0dG9uLmpzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbi5qcyc7XHJcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gJy4vYmFja19idXR0b24uanMnO1xyXG5pbXBvcnQgU3RyaW5nUmVzb3VyY2VzIGZyb20gJ0Bjb21tb24vc3RyaW5nX3Jlc291cmNlcy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbENhcmQge1xyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUsIGNhbnZhc1NpemUpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLmNhbnZhc1NpemUgPSBjYW52YXNTaXplO1xyXG5cclxuICAgICAgICB0aGlzLmxldmVsID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gU3RyaW5nUmVzb3VyY2VzLlBVVF9BU0lERV9BTExfRE9VQlRTO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXlCdXR0b24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZWRpdEJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmV2QnV0dG9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5leHRCdXR0b24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYmFja0J1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUJ1dHRvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplQnV0dG9ucygpIHtcclxuICAgICAgICB0aGlzLnBsYXlCdXR0b24gPSBuZXcgUGxheUJ1dHRvbihcclxuICAgICAgICAgICAgbmV3IFBvaW50KDAsIDApLFxyXG4gICAgICAgICAgICBuZXcgU2l6ZSgxNjAsIDUwKSxcclxuICAgICAgICAgICAgU3RyaW5nUmVzb3VyY2VzLlBMQVlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmVkaXRCdXR0b24gPSBuZXcgRWRpdEJ1dHRvbihcclxuICAgICAgICAgICAgbmV3IFBvaW50KDAsIDApLFxyXG4gICAgICAgICAgICBuZXcgU2l6ZSg0MCwgNDApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcmV2QnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgICAgICAgICAgbmV3IFBvaW50KDAsIDApLFxyXG4gICAgICAgICAgICBuZXcgU2l6ZSgxMDAsIDQwKSxcclxuICAgICAgICAgICAgYOKXgCAke1N0cmluZ1Jlc291cmNlcy5QUkVWfWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLm5leHRCdXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgICAgICAgICBuZXcgUG9pbnQoMCwgMCksXHJcbiAgICAgICAgICAgIG5ldyBTaXplKDEwMCwgNDApLFxyXG4gICAgICAgICAgICBgJHtTdHJpbmdSZXNvdXJjZXMuTkVYVH0g4pa2YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFja0J1dHRvbiA9IG5ldyBCYWNrQnV0dG9uKFxyXG4gICAgICAgICAgICBuZXcgUG9pbnQoMCwgMCksXHJcbiAgICAgICAgICAgIG5ldyBTaXplKDEyMCwgNDUpLFxyXG4gICAgICAgICAgICBTdHJpbmdSZXNvdXJjZXMuQkFDS1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGV2ZWwobGV2ZWwpIHtcclxuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTGF5b3V0KHNlbGVjdGVkSW5kZXgsIHRvdGFsTGV2ZWxzKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZENlbnRlclggPSB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUud2lkdGggLyAyO1xyXG4gICAgICAgIGNvbnN0IGNhcmRDZW50ZXJZID0gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLmhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5wb3NpdGlvbiA9IG5ldyBQb2ludChcclxuICAgICAgICAgICAgY2FyZENlbnRlclggLSB0aGlzLnBsYXlCdXR0b24uc2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS5oZWlnaHQgLSA4MFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuZWRpdEJ1dHRvbi5wb3NpdGlvbiA9IG5ldyBQb2ludChcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLndpZHRoIC0gdGhpcy5lZGl0QnV0dG9uLnNpemUud2lkdGggLSAzMCxcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICsgMjhcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnByZXZCdXR0b24ucG9zaXRpb24gPSBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIDEyMCxcclxuICAgICAgICAgICAgY2FyZENlbnRlclkgLSB0aGlzLnByZXZCdXR0b24uc2l6ZS5oZWlnaHQgLyAyXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnByZXZCdXR0b24udmlzaWJsZSA9IHNlbGVjdGVkSW5kZXggPiAwO1xyXG5cclxuICAgICAgICB0aGlzLm5leHRCdXR0b24ucG9zaXRpb24gPSBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS53aWR0aCArIDIwLFxyXG4gICAgICAgICAgICBjYXJkQ2VudGVyWSAtIHRoaXMubmV4dEJ1dHRvbi5zaXplLmhlaWdodCAvIDJcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubmV4dEJ1dHRvbi52aXNpYmxlID0gc2VsZWN0ZWRJbmRleCA8IHRvdGFsTGV2ZWxzIC0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWNrQnV0dG9uLnBvc2l0aW9uID0gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKyAodGhpcy5zaXplLndpZHRoIC0gdGhpcy5iYWNrQnV0dG9uLnNpemUud2lkdGgpIC8gMixcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLmhlaWdodCArIDIwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNb3VzZU1vdmUobW91c2VQb2ludCkge1xyXG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5ob3ZlcmVkID0gdGhpcy5wbGF5QnV0dG9uLmlzUG9pbnRJbnNpZGUobW91c2VQb2ludCk7XHJcbiAgICAgICAgdGhpcy5lZGl0QnV0dG9uLmhvdmVyZWQgPSB0aGlzLmVkaXRCdXR0b24uaXNQb2ludEluc2lkZShtb3VzZVBvaW50KTtcclxuICAgICAgICB0aGlzLnByZXZCdXR0b24uaG92ZXJlZCA9IHRoaXMucHJldkJ1dHRvbi5pc1BvaW50SW5zaWRlKG1vdXNlUG9pbnQpO1xyXG4gICAgICAgIHRoaXMubmV4dEJ1dHRvbi5ob3ZlcmVkID0gdGhpcy5uZXh0QnV0dG9uLmlzUG9pbnRJbnNpZGUobW91c2VQb2ludCk7XHJcbiAgICAgICAgdGhpcy5iYWNrQnV0dG9uLmhvdmVyZWQgPSB0aGlzLmJhY2tCdXR0b24uaXNQb2ludEluc2lkZShtb3VzZVBvaW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheUJ1dHRvbi5ob3ZlcmVkIHx8IHRoaXMuZWRpdEJ1dHRvbi5ob3ZlcmVkIHx8XHJcbiAgICAgICAgICAgICAgIHRoaXMucHJldkJ1dHRvbi5ob3ZlcmVkIHx8IHRoaXMubmV4dEJ1dHRvbi5ob3ZlcmVkIHx8IHRoaXMuYmFja0J1dHRvbi5ob3ZlcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKGNsaWNrUG9pbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5QnV0dG9uLmlzUG9pbnRJbnNpZGUoY2xpY2tQb2ludCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgYWN0aW9uOiAncGxheScsIGxldmVsOiB0aGlzLmxldmVsIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVkaXRCdXR0b24uaXNQb2ludEluc2lkZShjbGlja1BvaW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBhY3Rpb246ICdlZGl0JywgbGV2ZWw6IHRoaXMubGV2ZWwgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJldkJ1dHRvbi5pc1BvaW50SW5zaWRlKGNsaWNrUG9pbnQpICYmIHRoaXMucHJldkJ1dHRvbi52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGFjdGlvbjogJ3ByZXYnIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm5leHRCdXR0b24uaXNQb2ludEluc2lkZShjbGlja1BvaW50KSAmJiB0aGlzLm5leHRCdXR0b24udmlzaWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBhY3Rpb246ICduZXh0JyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5iYWNrQnV0dG9uLmlzUG9pbnRJbnNpZGUoY2xpY2tQb2ludCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgYWN0aW9uOiAnYmFjaycgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGV2ZWwpIHJldHVybjtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3Q2FyZEJhY2tncm91bmQoY3R4KTtcclxuICAgICAgICB0aGlzLmRyYXdUaXRsZShjdHgpO1xyXG4gICAgICAgIHRoaXMuZHJhd0Rlc2NyaXB0aW9uKGN0eCk7XHJcbiAgICAgICAgdGhpcy5kcmF3QnV0dG9ucyhjdHgpO1xyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdDYXJkQmFja2dyb3VuZChjdHgpIHtcclxuICAgICAgICBCcmlja1BhdHRlcm5SZW5kZXJlci5kcmF3QnJpY2tQYXR0ZXJuKFxyXG4gICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB0aGlzLnNpemUud2lkdGgsIHRoaXMuc2l6ZS5oZWlnaHQsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyaWNrQ29sb3I6ICcjRDI2OTFFJyxcclxuICAgICAgICAgICAgICAgIG1vcnRhckNvbG9yOiAnIzhCNDUxMycsXHJcbiAgICAgICAgICAgICAgICBicmlja1dpZHRoOiA2MCxcclxuICAgICAgICAgICAgICAgIGJyaWNrSGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgICAgIG1vcnRhcldpZHRoOiAzLFxyXG4gICAgICAgICAgICAgICAgbW9ydGFySGVpZ2h0OiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzY1NDMyMSc7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDY7XHJcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1RpdGxlKGN0eCkge1xyXG4gICAgICAgIGN0eC5mb250ID0gJ2JvbGQgMzJweCBcIkNvdXJpZXIgTmV3XCIsIFwiTHVjaWRhIENvbnNvbGVcIiwgXCJNb25hY29cIiwgXCJEZWphVnUgU2FucyBNb25vXCIsIG1vbm9zcGFjZSc7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGVDZW50ZXJYID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLndpZHRoIC8gMjtcclxuICAgICAgICBjb25zdCB0aXRsZUNlbnRlclkgPSB0aGlzLnBvc2l0aW9uLnkgKyA1MDtcclxuXHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAwMDAnO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA0O1xyXG4gICAgICAgIGN0eC5saW5lSm9pbiA9ICdyb3VuZCc7XHJcbiAgICAgICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xyXG4gICAgICAgIGN0eC5zdHJva2VUZXh0KHRoaXMubGV2ZWwubmFtZSwgdGl0bGVDZW50ZXJYLCB0aXRsZUNlbnRlclkpO1xyXG5cclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmxldmVsLm5hbWUsIHRpdGxlQ2VudGVyWCwgdGl0bGVDZW50ZXJZKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3RGVzY3JpcHRpb24oY3R4KSB7XHJcbiAgICAgICAgY3R4LmZvbnQgPSAnYm9sZCAxNnB4IFwiQ291cmllciBOZXdcIiwgXCJMdWNpZGEgQ29uc29sZVwiLCBcIk1vbmFjb1wiLCBcIkRlamFWdSBTYW5zIE1vbm9cIiwgbW9ub3NwYWNlJztcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG5cclxuICAgICAgICBjb25zdCBjZW50ZXJYID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLndpZHRoIC8gMjtcclxuICAgICAgICBjb25zdCB3b3JkcyA9IHRoaXMuZGVzY3JpcHRpb24uc3BsaXQoJyAnKTtcclxuICAgICAgICBjb25zdCBtaWRQb2ludCA9IE1hdGguY2VpbCh3b3Jkcy5sZW5ndGggLyAyKTtcclxuICAgICAgICBjb25zdCBsaW5lMSA9IHdvcmRzLnNsaWNlKDAsIG1pZFBvaW50KS5qb2luKCcgJyk7XHJcbiAgICAgICAgY29uc3QgbGluZTIgPSB3b3Jkcy5zbGljZShtaWRQb2ludCkuam9pbignICcpO1xyXG5cclxuICAgICAgICBjb25zdCBkZXNjQ2VudGVyWTEgPSB0aGlzLnBvc2l0aW9uLnkgKyA4ODtcclxuICAgICAgICBjb25zdCBkZXNjQ2VudGVyWTIgPSB0aGlzLnBvc2l0aW9uLnkgKyAxMDg7XHJcblxyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwMDAwJztcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gMztcclxuICAgICAgICBjdHguc3Ryb2tlVGV4dChsaW5lMSwgY2VudGVyWCwgZGVzY0NlbnRlclkxKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChsaW5lMSwgY2VudGVyWCwgZGVzY0NlbnRlclkxKTtcclxuXHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAwMDAnO1xyXG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGxpbmUyLCBjZW50ZXJYLCBkZXNjQ2VudGVyWTIpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KGxpbmUyLCBjZW50ZXJYLCBkZXNjQ2VudGVyWTIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdCdXR0b25zKGN0eCkge1xyXG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5kcmF3KGN0eCk7XHJcbiAgICAgICAgdGhpcy5lZGl0QnV0dG9uLmRyYXcoY3R4KTtcclxuICAgICAgICB0aGlzLnByZXZCdXR0b24uZHJhdyhjdHgpO1xyXG4gICAgICAgIHRoaXMubmV4dEJ1dHRvbi5kcmF3KGN0eCk7XHJcbiAgICAgICAgdGhpcy5iYWNrQnV0dG9uLmRyYXcoY3R4KTtcclxuICAgIH1cclxufSIsImltcG9ydCBQb2ludCBmcm9tICdAY29tbW9uL3BvaW50LmpzJztcclxuaW1wb3J0IFNpemUgZnJvbSAnQGNvbW1vbi9zaXplLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdTY3JlZW4ge1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IGNhbnZhc1NpemU7XHJcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBuZXcgUG9pbnQoY2FudmFzU2l6ZS53aWR0aCAvIDIsIGNhbnZhc1NpemUuaGVpZ2h0IC8gMik7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHgsIGxvYWRpbmdQcm9ncmVzcykge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd0xvYWRpbmdUZXh0KGN0eCk7XHJcbiAgICAgICAgdGhpcy5kcmF3UHJvZ3Jlc3NCYXIoY3R4LCBsb2FkaW5nUHJvZ3Jlc3MpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Byb2dyZXNzUGVyY2VudGFnZShjdHgsIGxvYWRpbmdQcm9ncmVzcyk7XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0xvYWRpbmdUZXh0KGN0eCkge1xyXG4gICAgICAgIGN0eC5mb250ID0gJ2JvbGQgMzJweCBcIkNvdXJpZXIgTmV3XCIsIFwiTHVjaWRhIENvbnNvbGVcIiwgXCJNb25hY29cIiwgXCJEZWphVnUgU2FucyBNb25vXCIsIG1vbm9zcGFjZSc7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcclxuXHJcbiAgICAgICAgY29uc3QgbG9hZGluZ1RleHQgPSAnTG9hZGluZyBMZXZlbHMuLi4nO1xyXG4gICAgICAgIGNvbnN0IHRleHRZID0gdGhpcy5jZW50ZXIueSAtIDgwO1xyXG5cclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzAwMDAwMCc7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDQ7XHJcbiAgICAgICAgY3R4LmxpbmVKb2luID0gJ3JvdW5kJztcclxuICAgICAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XHJcbiAgICAgICAgY3R4LnN0cm9rZVRleHQobG9hZGluZ1RleHQsIHRoaXMuY2VudGVyLngsIHRleHRZKTtcclxuXHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjRkZGRkZGJztcclxuICAgICAgICBjdHguZmlsbFRleHQobG9hZGluZ1RleHQsIHRoaXMuY2VudGVyLngsIHRleHRZKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3UHJvZ3Jlc3NCYXIoY3R4LCBwcm9ncmVzcykge1xyXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IDYwO1xyXG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IDg7XHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguYXJjKHRoaXMuY2VudGVyLngsIHRoaXMuY2VudGVyLnksIHJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjNjU0MzIxJztcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgaWYgKHByb2dyZXNzID4gMCkge1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy5jZW50ZXIueCwgdGhpcy5jZW50ZXIueSwgcmFkaXVzLCAtTWF0aC5QSSAvIDIsIC1NYXRoLlBJIC8gMiArIChwcm9ncmVzcyAqIDIgKiBNYXRoLlBJKSk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjRkZBNTAwJztcclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcclxuICAgICAgICAgICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdQcm9ncmVzc1BlcmNlbnRhZ2UoY3R4LCBwcm9ncmVzcykge1xyXG4gICAgICAgIGNvbnN0IHBlcmNlbnRUZXh0ID0gTWF0aC5yb3VuZChwcm9ncmVzcyAqIDEwMCkgKyAnJSc7XHJcbiAgICAgICAgY3R4LmZvbnQgPSAnYm9sZCAyNHB4IFwiQ291cmllciBOZXdcIiwgXCJMdWNpZGEgQ29uc29sZVwiLCBcIk1vbmFjb1wiLCBcIkRlamFWdSBTYW5zIE1vbm9cIiwgbW9ub3NwYWNlJztcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG5cclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzAwMDAwMCc7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDM7XHJcbiAgICAgICAgY3R4LnN0cm9rZVRleHQocGVyY2VudFRleHQsIHRoaXMuY2VudGVyLngsIHRoaXMuY2VudGVyLnkpO1xyXG5cclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChwZXJjZW50VGV4dCwgdGhpcy5jZW50ZXIueCwgdGhpcy5jZW50ZXIueSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUsIHRleHQpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgc2l6ZSwgdGV4dCwge1xyXG4gICAgICAgICAgICBmb250OiAnYm9sZCAyMnB4IFwiQ291cmllciBOZXdcIiwgXCJMdWNpZGEgQ29uc29sZVwiLCBcIk1vbmFjb1wiLCBcIkRlamFWdSBTYW5zIE1vbm9cIiwgbW9ub3NwYWNlJyxcclxuICAgICAgICAgICAgYnJpY2tDb2xvcjogJyNGRkE1MDAnLFxyXG4gICAgICAgICAgICBtb3J0YXJDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICBicmlja1dpZHRoOiA0MCxcclxuICAgICAgICAgICAgYnJpY2tIZWlnaHQ6IDIwLFxyXG4gICAgICAgICAgICBtb3J0YXJXaWR0aDogMixcclxuICAgICAgICAgICAgbW9ydGFySGVpZ2h0OiAyLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogNFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VBcHBTdGF0ZSBmcm9tICdAYXBwX3N0YXRlcy9iYXNlX2FwcF9zdGF0ZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbXB0eUFwcFN0YXRlIGV4dGVuZHMgQmFzZUFwcFN0YXRlIHtcclxuXHJcbn0iLCJpbXBvcnQgR2FtZVN0YXRlQmFzZSBmcm9tICdAYXBwX3N0YXRlcy9nYW1lL2dhbWVfc3RhdGVfYmFzZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RpdmVHYW1lU3RhdGUgZXh0ZW5kcyBHYW1lU3RhdGVCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHJlbmRlckNhbGxiYWNrLCB3b3JsZCwgY2FudmFzU2l6ZSwgb25EZXN0cm95ZWQsIG9uVmljdG9yeSkge1xyXG4gICAgICAgIHN1cGVyKHJlbmRlckNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gY2FudmFzU2l6ZTtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveWVkID0gb25EZXN0cm95ZWQ7XHJcbiAgICAgICAgdGhpcy5vblZpY3RvcnkgPSBvblZpY3Rvcnk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuQ2hhbmdlU3RhdGUobmV3U3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3U3RhdGUubmFtZSA9PT0gJ1BhdXNlU3RhdGUnIHx8IFxyXG4gICAgICAgICAgICAgICBuZXdTdGF0ZS5uYW1lID09PSAnRGVidWdTdGF0ZScgfHwgXHJcbiAgICAgICAgICAgICAgIG5ld1N0YXRlLm5hbWUgPT09ICdWaWN0b3J5U3RhdGUnIHx8IFxyXG4gICAgICAgICAgICAgICBuZXdTdGF0ZS5uYW1lID09PSAnRGVzdHJ1Y3Rpb25TdGF0ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZSkge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVdvcmxkUmVzdWx0ID0gdGhpcy53b3JsZC51cGRhdGUoZGVsdGFUaW1lIC8gMTYsIHRoaXMuY2FudmFzU2l6ZSk7XHJcblxyXG4gICAgICAgIGlmICh1cGRhdGVXb3JsZFJlc3VsdC5pc0Rlc3Ryb3llZCgpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9uRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVzdHJveWVkKHVwZGF0ZVdvcmxkUmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodXBkYXRlV29ybGRSZXN1bHQuaXNSZWFjaGVkRW5kKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub25WaWN0b3J5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVmljdG9yeSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBvaW50IGZyb20gJ0Bjb21tb24vcG9pbnQuanMnO1xyXG5pbXBvcnQgU2l6ZSBmcm9tICdAY29tbW9uL3NpemUuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVidWdTZXNzaW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHdvcmxkLCBpbnB1dENvbnRyb2xsZXIpIHtcclxuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XHJcbiAgICAgICAgdGhpcy5pbnB1dENvbnRyb2xsZXIgPSBpbnB1dENvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5ob3ZlcmVkQWN0b3IgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhvdmVyZWRBY3RvcigpIHtcclxuICAgICAgICBjb25zdCBtb3VzZVBvcyA9IHRoaXMuaW5wdXRDb250cm9sbGVyLmdldE1vdXNlUG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLmhvdmVyZWRBY3RvciA9IHRoaXMud29ybGQuZ2V0SG92ZXJlZE9iamVjdChtb3VzZVBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRGVidWdPdmVybGF5KGN0eCwgY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlSG92ZXJlZEFjdG9yKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dFdpdGhCYWNrZ3JvdW5kKGN0eCwgWydEZWJ1Z2dpbmcgbW9kZSddLCBuZXcgUG9pbnQoMTAsIDMwKSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhvdmVyZWRBY3Rvcikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlJbmZvKGN0eCwgdGhpcy5ob3ZlcmVkQWN0b3IsIHRoaXMud29ybGQud29ybGRPZmZzZXQsIGNhbnZhc1NpemUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5SW5mbyhjdHgsIGFjdG9yLCB3b3JsZE9mZnNldCwgY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIGlmICghYWN0b3IuaXNWaXNpYmxlKHdvcmxkT2Zmc2V0LCBjYW52YXNTaXplKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbmZvUHJvdmlkZXIgPSBhY3Rvci5nZXRJbmZvUHJvdmlkZXIoKTtcclxuICAgICAgICBjb25zdCBkZWJ1Z0RhdGEgPSBpbmZvUHJvdmlkZXIuZ2V0RGVidWdEYXRhKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpc2libGVCb3VuZHMgPSBhY3Rvci5nZXRWaXNpYmxlQm91bmRzKGNhbnZhc1NpemUsIHdvcmxkT2Zmc2V0KTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsIDI1NSwgMCwgMC44KSc7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QoXHJcbiAgICAgICAgICAgIHZpc2libGVCb3VuZHMuY29vcmRzLnggKyAxLCBcclxuICAgICAgICAgICAgdmlzaWJsZUJvdW5kcy5jb29yZHMueSArIDEsIFxyXG4gICAgICAgICAgICB2aXNpYmxlQm91bmRzLnNpemUud2lkdGggLSAyLCBcclxuICAgICAgICAgICAgdmlzaWJsZUJvdW5kcy5zaXplLmhlaWdodCAtIDJcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRleHRQb3NpdGlvbiA9IG5ldyBQb2ludChcclxuICAgICAgICAgICAgdmlzaWJsZUJvdW5kcy5jb29yZHMueCArIHZpc2libGVCb3VuZHMuc2l6ZS53aWR0aCArIDUsXHJcbiAgICAgICAgICAgIHZpc2libGVCb3VuZHMuY29vcmRzLnkgKyAyMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGV4dHMgPSBbXHJcbiAgICAgICAgICAgIGBUeXBlOiAke2FjdG9yLmdldFR5cGUoKX1gLFxyXG4gICAgICAgICAgICBgSUQ6ICR7YWN0b3IuaWR9YCxcclxuICAgICAgICAgICAgYEJvdW5kczogKCR7TWF0aC5yb3VuZCh2aXNpYmxlQm91bmRzLmNvb3Jkcy54KX0sICR7TWF0aC5yb3VuZCh2aXNpYmxlQm91bmRzLmNvb3Jkcy55KX0sICR7dmlzaWJsZUJvdW5kcy5zaXplLndpZHRofSwgJHt2aXNpYmxlQm91bmRzLnNpemUuaGVpZ2h0fSlgLFxyXG4gICAgICAgICAgICAuLi5kZWJ1Z0RhdGFcclxuICAgICAgICBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZHJhd1RleHRXaXRoQmFja2dyb3VuZChjdHgsIHRleHRzLCB0ZXh0UG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdUZXh0V2l0aEJhY2tncm91bmQoY3R4LCB0ZXh0cywgcG9zaXRpb24sIGxpbmVIZWlnaHQgPSAxNikge1xyXG4gICAgICAgIGlmICghdGV4dHMgfHwgdGV4dHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG1heFdpZHRoID0gMDtcclxuICAgICAgICBjdHguZm9udCA9ICcxNHB4IEFyaWFsJztcclxuICAgICAgICBmb3IgKGNvbnN0IHRleHQgb2YgdGV4dHMpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG4gICAgICAgICAgICBtYXhXaWR0aCA9IE1hdGgubWF4KG1heFdpZHRoLCB0ZXh0V2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwYWRkaW5nID0gNDtcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kV2lkdGggPSBtYXhXaWR0aCArIHBhZGRpbmcgKiAyO1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRIZWlnaHQgPSB0ZXh0cy5sZW5ndGggKiBsaW5lSGVpZ2h0ICsgcGFkZGluZyAqIDI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSknO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdChwb3NpdGlvbi54IC0gcGFkZGluZywgcG9zaXRpb24ueSAtIHBhZGRpbmcgLSAxMiwgYmFja2dyb3VuZFdpZHRoLCBiYWNrZ3JvdW5kSGVpZ2h0KTtcclxuICAgICAgICBcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHBvc2l0aW9uLnggLSBwYWRkaW5nLCBwb3NpdGlvbi55IC0gcGFkZGluZyAtIDEyLCBiYWNrZ3JvdW5kV2lkdGgsIGJhY2tncm91bmRIZWlnaHQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJztcclxuICAgICAgICBjdHguZm9udCA9ICcxNHB4IEFyaWFsJztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0c1tpXSwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSArIGkgKiBsaW5lSGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgR2FtZVN0YXRlQmFzZSBmcm9tICdAYXBwX3N0YXRlcy9nYW1lL2dhbWVfc3RhdGVfYmFzZS5qcyc7XHJcbmltcG9ydCBBY3RpdmVHYW1lU3RhdGUgZnJvbSAnQGFwcF9zdGF0ZXMvZ2FtZS9hY3RpdmVfZ2FtZV9zdGF0ZS5qcyc7XHJcbmltcG9ydCBEZWJ1Z1Nlc3Npb24gZnJvbSAnQGFwcF9zdGF0ZXMvZ2FtZS9kZWJ1Z19zZXNzaW9uLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYnVnU3RhdGUgZXh0ZW5kcyBHYW1lU3RhdGVCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHJlbmRlckNhbGxiYWNrLCB3b3JsZCwgaW5wdXRDb250cm9sbGVyLCBjdHgsIGNhbnZhc1NpemUsIG9uQ29udGludWUsIG9uR2FtZU92ZXIsIG9uTGFzdEZyYW1lVGltZVVwZGF0ZSkge1xyXG4gICAgICAgIHN1cGVyKHJlbmRlckNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLm5lZWRUb0Nsb3NlR2FtZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25Db250aW51ZSA9IG9uQ29udGludWU7XHJcbiAgICAgICAgdGhpcy5vbkdhbWVPdmVyID0gb25HYW1lT3ZlcjtcclxuICAgICAgICB0aGlzLm9uTGFzdEZyYW1lVGltZVVwZGF0ZSA9IG9uTGFzdEZyYW1lVGltZVVwZGF0ZTtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLmNhbnZhc1NpemUgPSBjYW52YXNTaXplO1xyXG4gICAgICAgIHRoaXMuZGVidWdTZXNzaW9uID0gbmV3IERlYnVnU2Vzc2lvbih3b3JsZCwgaW5wdXRDb250cm9sbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5DaGFuZ2VTdGF0ZShuZXdTdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZS5uYW1lID09PSAnQWN0aXZlR2FtZVN0YXRlJztcclxuICAgIH1cclxuXHJcbiAgICBvbkVudGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9uTGFzdEZyYW1lVGltZVVwZGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uTGFzdEZyYW1lVGltZVVwZGF0ZShudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZGVidWdTZXNzaW9uLnJlbmRlckRlYnVnT3ZlcmxheSh0aGlzLmN0eCwgdGhpcy5jYW52YXNTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVPZmYoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmVlZFRvQ2xvc2VHYW1lKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9uR2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25HYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub25Db250aW51ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbnRpbnVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgR2FtZVN0YXRlQmFzZSBmcm9tICdAYXBwX3N0YXRlcy9nYW1lL2dhbWVfc3RhdGVfYmFzZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXN0cnVjdGlvblN0YXRlIGV4dGVuZHMgR2FtZVN0YXRlQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJDYWxsYmFjaywgdXBkYXRlV29ybGRSZXN1bHQsIGV4cGxvc2lvbkVmZmVjdCwgY3Jhc2hUZXh0LCBzaGFrZUVmZmVjdCwgcGxheWVyLCBib3VuZGFyeU1hbmFnZXIsIG9uR2FtZU92ZXIpIHtcclxuICAgICAgICBzdXBlcihyZW5kZXJDYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVXb3JsZFJlc3VsdCA9IHVwZGF0ZVdvcmxkUmVzdWx0O1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uRWZmZWN0ID0gZXhwbG9zaW9uRWZmZWN0O1xyXG4gICAgICAgIHRoaXMuY3Jhc2hUZXh0ID0gY3Jhc2hUZXh0O1xyXG4gICAgICAgIHRoaXMuc2hha2VFZmZlY3QgPSBzaGFrZUVmZmVjdDtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLmJvdW5kYXJ5TWFuYWdlciA9IGJvdW5kYXJ5TWFuYWdlcjtcclxuICAgICAgICB0aGlzLm9uR2FtZU92ZXIgPSBvbkdhbWVPdmVyO1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkNoYW5nZVN0YXRlKG5ld1N0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlLm5hbWUgPT09ICdEZWJ1Z1N0YXRlJztcclxuICAgIH1cclxuXHJcbiAgICBvbkVudGVyKCkge1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uRWZmZWN0LmNyZWF0ZUV4cGxvc2lvbihcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29vcmRzLFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zaXplLFxyXG4gICAgICAgICAgICB0aGlzLmJvdW5kYXJ5TWFuYWdlci5nZXRHcm91bmRMZXZlbCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmNyYXNoVGV4dC5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2hha2VFZmZlY3QuY29udGludWVBZnRlclN0b3AoXHJcbiAgICAgICAgICAgICgpID0+IHRoaXMucmVuZGVyKCksXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQWN0aXZlICYmIHRoaXMub25HYW1lT3Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25HYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkV4aXQobmV3U3RhdGUpIHtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKG5ld1N0YXRlLm5hbWUgPT0gJ0RlYnVnU3RhdGUnKSB7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlLm5lZWRUb0Nsb3NlR2FtZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YVRpbWUpIHtcclxuICAgICAgICB0aGlzLnNoYWtlRWZmZWN0LnVwZGF0ZShkZWx0YVRpbWUgLyAxNik7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25FZmZlY3QudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5jcmFzaFRleHQudXBkYXRlKGRlbHRhVGltZSAvIDE2KTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VBcHBTdGF0ZSBmcm9tICdAYXBwX3N0YXRlcy9iYXNlX2FwcF9zdGF0ZS5qcyc7XHJcbmltcG9ydCBFeHBsb3Npb25FZmZlY3QgZnJvbSAnQGNvbW1vbi9nYW1lL2V4cGxvc2lvbi9leHBsb3Npb25fZWZmZWN0LmpzJztcclxuaW1wb3J0IENyYXNoVGV4dCBmcm9tICdAY29tbW9uL2dhbWUvY3Jhc2hfdGV4dC5qcyc7XHJcbmltcG9ydCBWaWN0b3J5VGV4dCBmcm9tICdAY29tbW9uL2dhbWUvdmljdG9yeV90ZXh0LmpzJztcclxuaW1wb3J0IFNoYWtlRWZmZWN0IGZyb20gJ0Bjb21tb24vZ2FtZS9zaGFrZV9lZmZlY3QuanMnO1xyXG5pbXBvcnQgV29ybGQgZnJvbSAnQGNvbW1vbi9nYW1lL3dvcmxkLmpzJztcclxuaW1wb3J0IFBhdXNlTWVudSBmcm9tICdAY29tbW9uL2dhbWUvcGF1c2VfbWVudS5qcyc7XHJcbmltcG9ydCBJbnB1dENvbnRyb2xsZXIgZnJvbSAnQGNvbW1vbi9nYW1lL2lucHV0X2NvbnRyb2xsZXIuanMnXHJcbmltcG9ydCBBY3RpdmVHYW1lU3RhdGUgZnJvbSAnQGFwcF9zdGF0ZXMvZ2FtZS9hY3RpdmVfZ2FtZV9zdGF0ZS5qcyc7XHJcbmltcG9ydCBQYXVzZVN0YXRlIGZyb20gJ0BhcHBfc3RhdGVzL2dhbWUvcGF1c2Vfc3RhdGUuanMnO1xyXG5pbXBvcnQgRGVidWdTdGF0ZSBmcm9tICdAYXBwX3N0YXRlcy9nYW1lL2RlYnVnX3N0YXRlLmpzJztcclxuaW1wb3J0IFZpY3RvcnlTdGF0ZSBmcm9tICdAYXBwX3N0YXRlcy9nYW1lL3ZpY3Rvcnlfc3RhdGUuanMnO1xyXG5pbXBvcnQgRGVzdHJ1Y3Rpb25TdGF0ZSBmcm9tICdAYXBwX3N0YXRlcy9nYW1lL2Rlc3RydWN0aW9uX3N0YXRlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVBcHBTdGF0ZSBleHRlbmRzIEJhc2VBcHBTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNhbnZhc1NpemUpIHtcclxuICAgICAgICBzdXBlcihjYW52YXMpO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gY2FudmFzU2l6ZTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbklkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMucGF1c2VNZW51ID0gbmV3IFBhdXNlTWVudSgpO1xyXG5cclxuICAgICAgICB0aGlzLm9uTWFpbk1lbnUgPSAoKSA9PiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnYW1lTG9vcChjdXJyZW50VGltZSA9IDApIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gdGhpcy5sYXN0RnJhbWVUaW1lID8gY3VycmVudFRpbWUgLSB0aGlzLmxhc3RGcmFtZVRpbWUgOiAxNjtcclxuICAgICAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlLnVwZGF0ZShkZWx0YVRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgodGltZSkgPT4gdGhpcy5nYW1lTG9vcCh0aW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU3RhdGUobmV3U3RhdGUpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RhdGUgJiYgIXRoaXMuY3VycmVudFN0YXRlLmNhbkNoYW5nZVN0YXRlKG5ld1N0YXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZS5vbkV4aXQobmV3U3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZS5vbkVudGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoLTIwLCAtMjAsIHRoaXMuY2FudmFzLndpZHRoICsgNDAsIHRoaXMuY2FudmFzLmhlaWdodCArIDQwKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hha2VPZmZzZXQgPSB0aGlzLnNoYWtlRWZmZWN0LmdldE9mZnNldCgpO1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHNoYWtlT2Zmc2V0LngsIHNoYWtlT2Zmc2V0LnkpO1xyXG5cclxuICAgICAgICB0aGlzLndvcmxkLmRyYXcodGhpcy5jdHgsIHRoaXMuY2FudmFzU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdyh0aGlzLmN0eCk7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25FZmZlY3QuZHJhdyh0aGlzLmN0eCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmFzaFRleHQuZHJhdyh0aGlzLmN0eCwgdGhpcy5jYW52YXNTaXplKTtcclxuICAgICAgICB0aGlzLnZpY3RvcnlUZXh0LmRyYXcodGhpcy5jdHgsIHRoaXMuY2FudmFzU2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUoYXJncykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25FZmZlY3QgPSBuZXcgRXhwbG9zaW9uRWZmZWN0KCk7XHJcbiAgICAgICAgdGhpcy5jcmFzaFRleHQgPSBuZXcgQ3Jhc2hUZXh0KCk7XHJcbiAgICAgICAgdGhpcy52aWN0b3J5VGV4dCA9IG5ldyBWaWN0b3J5VGV4dCgpO1xyXG4gICAgICAgIHRoaXMuc2hha2VFZmZlY3QgPSBuZXcgU2hha2VFZmZlY3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IGFyZ3MubGV2ZWw7XHJcbiAgICAgICAgdGhpcy5uZXh0U3RhdGUgPSBhcmdzLm5leHRTdGF0ZTtcclxuICAgICAgICB0aGlzLndvcmxkID0gbmV3IFdvcmxkKGFyZ3MubGV2ZWwsIHRydWUpO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy53b3JsZC5wbGF5ZXI7XHJcblxyXG4gICAgICAgIHRoaXMuaW5wdXRDb250cm9sbGVyID0gbmV3IElucHV0Q29udHJvbGxlcih0aGlzLnBsYXllciwgdGhpcy5jYW52YXMsIHRoaXMud29ybGQub2JqZWN0TWFuYWdlcik7XHJcbiAgICAgICAgdGhpcy5pbnB1dENvbnRyb2xsZXIub25QYXVzZVJlcXVlc3QgPSAoKSA9PiB0aGlzLnBhdXNlR2FtZSgpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRDb250cm9sbGVyLm9uRGVidWdUb2dnbGUgPSAoKSA9PiB0aGlzLnRvZ2dsZURlYnVnTW9kZSgpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRDb250cm9sbGVyLm9uSnVtcCA9ICgpID0+IHRoaXMud29ybGQuanVtcFBsYXllcigpO1xyXG4gICAgICAgIHRoaXMubGFzdEZyYW1lVGltZSA9IG51bGw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShuZXcgQWN0aXZlR2FtZVN0YXRlKFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnJlbmRlcigpLFxyXG4gICAgICAgICAgICB0aGlzLndvcmxkLFxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc1NpemUsXHJcbiAgICAgICAgICAgICh1cGRhdGVXb3JsZFJlc3VsdCkgPT4gdGhpcy5oYW5kbGVEZXN0cm95ZWQodXBkYXRlV29ybGRSZXN1bHQpLFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmhhbmRsZVZpY3RvcnkoKVxyXG4gICAgICAgICkpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXVzZUdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShuZXcgUGF1c2VTdGF0ZShcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5yZW5kZXIoKSxcclxuICAgICAgICAgICAgdGhpcy5wYXVzZU1lbnUsXHJcbiAgICAgICAgICAgICgpID0+IHRoaXMucmVzdW1lR2FtZSgpLFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLm9uTWFpbk1lbnUoKSxcclxuICAgICAgICAgICAgKHRpbWUpID0+IHsgdGhpcy5sYXN0RnJhbWVUaW1lID0gdGltZTsgfVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VtZUdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShuZXcgQWN0aXZlR2FtZVN0YXRlKFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnJlbmRlcigpLFxyXG4gICAgICAgICAgICB0aGlzLndvcmxkLFxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc1NpemUsXHJcbiAgICAgICAgICAgICh1cGRhdGVXb3JsZFJlc3VsdCkgPT4gdGhpcy5oYW5kbGVEZXN0cm95ZWQodXBkYXRlV29ybGRSZXN1bHQpLFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmhhbmRsZVZpY3RvcnkoKVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZURlYnVnTW9kZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudFN0YXRlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZS5uYW1lID09PSAnRGVidWdTdGF0ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUudG9nZ2xlT2ZmKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShuZXcgRGVidWdTdGF0ZShcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMucmVuZGVyKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLndvcmxkLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dENvbnRyb2xsZXIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eCxcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzU2l6ZSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMucmVzdW1lR2FtZSgpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5vbkV4aXQodGhpcy5uZXh0U3RhdGUsIHRoaXMubGV2ZWwpLFxyXG4gICAgICAgICAgICAgICAgKHRpbWUpID0+IHsgdGhpcy5sYXN0RnJhbWVUaW1lID0gdGltZTsgfVxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRGVzdHJveWVkKHVwZGF0ZVdvcmxkUmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShuZXcgRGVzdHJ1Y3Rpb25TdGF0ZShcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5yZW5kZXIoKSxcclxuICAgICAgICAgICAgdXBkYXRlV29ybGRSZXN1bHQsXHJcbiAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9uRWZmZWN0LFxyXG4gICAgICAgICAgICB0aGlzLmNyYXNoVGV4dCxcclxuICAgICAgICAgICAgdGhpcy5zaGFrZUVmZmVjdCxcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIsXHJcbiAgICAgICAgICAgIHRoaXMud29ybGQuYm91bmRhcnlNYW5hZ2VyLFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLm9uRXhpdCh0aGlzLm5leHRTdGF0ZSwgdGhpcy5sZXZlbClcclxuICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVWaWN0b3J5KCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobmV3IFZpY3RvcnlTdGF0ZShcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5yZW5kZXIoKSxcclxuICAgICAgICAgICAgdGhpcy52aWN0b3J5VGV4dCxcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5vbkV4aXQodGhpcy5uZXh0U3RhdGUsIHRoaXMubGV2ZWwpXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uSWQpIHtcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25JZCk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0Q29udHJvbGxlcikge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0Q29udHJvbGxlci5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXRlQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJDYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ2FsbGJhY2sgPSByZW5kZXJDYWxsYmFjaztcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZSkge1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5yZW5kZXJDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbkNoYW5nZVN0YXRlKG5ld1N0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbnRlcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbkV4aXQobmV3U3RhdGUpIHtcclxuICAgIH1cclxufSIsImltcG9ydCBHYW1lU3RhdGVCYXNlIGZyb20gJ0BhcHBfc3RhdGVzL2dhbWUvZ2FtZV9zdGF0ZV9iYXNlLmpzJztcclxuaW1wb3J0IEFjdGl2ZUdhbWVTdGF0ZSBmcm9tICdAYXBwX3N0YXRlcy9nYW1lL2FjdGl2ZV9nYW1lX3N0YXRlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdXNlU3RhdGUgZXh0ZW5kcyBHYW1lU3RhdGVCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHJlbmRlckNhbGxiYWNrLCBwYXVzZU1lbnUsIG9uQ29udGludWUsIG9uTWFpbk1lbnUsIG9uTGFzdEZyYW1lVGltZVVwZGF0ZSkge1xyXG4gICAgICAgIHN1cGVyKHJlbmRlckNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLnBhdXNlTWVudSA9IHBhdXNlTWVudTtcclxuICAgICAgICB0aGlzLm9uQ29udGludWUgPSBvbkNvbnRpbnVlO1xyXG4gICAgICAgIHRoaXMub25NYWluTWVudSA9IG9uTWFpbk1lbnU7XHJcbiAgICAgICAgdGhpcy5vbkxhc3RGcmFtZVRpbWVVcGRhdGUgPSBvbkxhc3RGcmFtZVRpbWVVcGRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuQ2hhbmdlU3RhdGUobmV3U3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3U3RhdGUubmFtZSA9PT0gJ0FjdGl2ZUdhbWVTdGF0ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbnRlcigpIHtcclxuICAgICAgICB0aGlzLnBhdXNlTWVudS5vbkNvbnRpbnVlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9uQ29udGludWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Db250aW51ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnBhdXNlTWVudS5vbk1haW5NZW51Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9uQ29udGludWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Db250aW51ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9uTWFpbk1lbnUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25NYWluTWVudSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnBhdXNlTWVudS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FeGl0KG5ld1N0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5wYXVzZU1lbnUuaGlkZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLm9uTGFzdEZyYW1lVGltZVVwZGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uTGFzdEZyYW1lVGltZVVwZGF0ZShwZXJmb3JtYW5jZS5ub3coKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEdhbWVTdGF0ZUJhc2UgZnJvbSAnQGFwcF9zdGF0ZXMvZ2FtZS9nYW1lX3N0YXRlX2Jhc2UuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmljdG9yeVN0YXRlIGV4dGVuZHMgR2FtZVN0YXRlQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJDYWxsYmFjaywgdmljdG9yeVRleHQsIG9uVmljdG9yeSkge1xyXG4gICAgICAgIHN1cGVyKHJlbmRlckNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLnZpY3RvcnlUZXh0ID0gdmljdG9yeVRleHQ7XHJcbiAgICAgICAgdGhpcy5vblZpY3RvcnkgPSBvblZpY3Rvcnk7XHJcbiAgICAgICAgdGhpcy52aWN0b3J5VGltZW91dCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuQ2hhbmdlU3RhdGUobmV3U3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbnRlcigpIHtcclxuICAgICAgICB0aGlzLnZpY3RvcnlUZXh0LnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy52aWN0b3J5VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vblZpY3RvcnkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25WaWN0b3J5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkV4aXQobmV3U3RhdGUpIHtcclxuICAgICAgICBpZiAodGhpcy52aWN0b3J5VGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy52aWN0b3J5VGltZW91dCk7XHJcbiAgICAgICAgICAgIHRoaXMudmljdG9yeVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgdGhpcy52aWN0b3J5VGV4dC51cGRhdGUoZGVsdGFUaW1lIC8gMTYpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlTGV2ZWxEZXNpZ25lck1hbmFnZXIge1xyXG4gICAgYWN0aXZhdGUoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRlYWN0aXZhdGUoKSB7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBvaW50IGZyb20gJ0Bjb21tb24vcG9pbnQuanMnO1xyXG5pbXBvcnQgU2l6ZSBmcm9tICdAY29tbW9uL3NpemUuanMnO1xyXG5pbXBvcnQgQmFzZUxldmVsRGVzaWduZXJNYW5hZ2VyIGZyb20gJ0BhcHBfc3RhdGVzL2xldmVsX2Rlc2lnbmVyL2Jhc2VfbGV2ZWxfZGVzaWduZXJfbWFuYWdlci5qcyc7XHJcbmltcG9ydCBTdHJpbmdSZXNvdXJjZXMgZnJvbSAnQGNvbW1vbi9zdHJpbmdfcmVzb3VyY2VzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kYXJ5RWRpdG9yIGV4dGVuZHMgQmFzZUxldmVsRGVzaWduZXJNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHdvcmxkLCBldmVudEhhbmRsZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMud29ybGQgPSB3b3JsZDtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlcjtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQm91bmRhcnkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCb3VuZGFyeVR5cGUgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udHJvbHNDb250YWluZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMud2lkdGhJbnB1dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5oZWlnaHRJbnB1dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50aXRsZUVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY3JlYXRlSW5wdXRDb250cm9scygpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9FdmVudEhhbmRsZXIoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3Vic2NyaWJlVG9FdmVudEhhbmRsZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmFkZE9uTW91c2VEb3duQ2FsbGJhY2soKHNlbGVjdGVkT2JqZWN0LCBwb2ludCwgY3RybFByZXNzZWQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9iamVjdD8uZ2V0VHlwZSgpLmluY2x1ZGVzKCdib3VuZGFyeScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm91bmRhcnlUeXBlID0gc2VsZWN0ZWRPYmplY3QudHlwZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYm91bmRhcnlUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm91bmRhcnkoYm91bmRhcnlUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjcmVhdGVJbnB1dENvbnRyb2xzKCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgYm90dG9tOiAyMjBweDtcclxuICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9ICdCb3VuZGFyeSBFZGl0b3InO1xyXG4gICAgICAgIHRoaXMudGl0bGVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ0NDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aXRsZUVsZW1lbnQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHdpZHRoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIHdpZHRoTGFiZWwudGV4dENvbnRlbnQgPSBgJHtTdHJpbmdSZXNvdXJjZXMuV0lEVEh9OmA7XHJcbiAgICAgICAgd2lkdGhMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB3aWR0aExhYmVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICc1cHgnO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHNDb250YWluZXIuYXBwZW5kQ2hpbGQod2lkdGhMYWJlbCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy53aWR0aElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLndpZHRoSW5wdXQudHlwZSA9ICdudW1iZXInO1xyXG4gICAgICAgIHRoaXMud2lkdGhJbnB1dC5taW4gPSAnMTAnO1xyXG4gICAgICAgIHRoaXMud2lkdGhJbnB1dC5tYXggPSAnMjAwJztcclxuICAgICAgICB0aGlzLndpZHRoSW5wdXQudmFsdWUgPSAnNTAnO1xyXG4gICAgICAgIHRoaXMud2lkdGhJbnB1dC5zdGVwID0gMTA7XHJcbiAgICAgICAgdGhpcy53aWR0aElucHV0LnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxuICAgICAgICBgO1xyXG4gICAgICAgIHRoaXMud2lkdGhJbnB1dC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLndpZHRoSW5wdXQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhlaWdodExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBoZWlnaHRMYWJlbC50ZXh0Q29udGVudCA9IGAke1N0cmluZ1Jlc291cmNlcy5IRUlHSFR9OmA7XHJcbiAgICAgICAgaGVpZ2h0TGFiZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgaGVpZ2h0TGFiZWwuc3R5bGUubWFyZ2luQm90dG9tID0gJzVweCc7XHJcbiAgICAgICAgdGhpcy5jb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZChoZWlnaHRMYWJlbCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5oZWlnaHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHRJbnB1dC50eXBlID0gJ251bWJlcic7XHJcbiAgICAgICAgdGhpcy5oZWlnaHRJbnB1dC5taW4gPSAnMTAnO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0SW5wdXQubWF4ID0gJzIwMCc7XHJcbiAgICAgICAgdGhpcy5oZWlnaHRJbnB1dC52YWx1ZSA9ICc1MCc7XHJcbiAgICAgICAgdGhpcy5oZWlnaHRJbnB1dC5zdGVwID0gMTA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHRJbnB1dC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XHJcbiAgICAgICAgYDtcclxuICAgICAgICB0aGlzLmhlaWdodElucHV0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaGVpZ2h0SW5wdXQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhdHRhY2hFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLndpZHRoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlCb3VuZGFyeUNoYW5nZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhlaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5Qm91bmRhcnlDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRldGFjaEV2ZW50TGlzdGVuZXJzKCkge1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgb25Cb3VuZGFyeVNlbGVjdGVkKGJvdW5kYXJ5VHlwZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCb3VuZGFyeVR5cGUgPSBib3VuZGFyeVR5cGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFib3VuZGFyeVR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEJvdW5kYXJ5ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy53aWR0aElucHV0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHRJbnB1dC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEJvdW5kYXJ5ID0gdGhpcy53b3JsZC5ib3VuZGFyaWVzW2JvdW5kYXJ5VHlwZV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYm91bmRhcnlOYW1lcyA9IHtcclxuICAgICAgICAgICAgJ2xlZnQnOiAnTGVmdCBCb3VuZGFyeScsXHJcbiAgICAgICAgICAgICdyaWdodCc6ICdSaWdodCBCb3VuZGFyeScsIFxyXG4gICAgICAgICAgICAndG9wJzogJ1RvcCBCb3VuZGFyeScsXHJcbiAgICAgICAgICAgICdib3R0b20nOiAnQm90dG9tIEJvdW5kYXJ5J1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgRWRpdCAke2JvdW5kYXJ5TmFtZXNbYm91bmRhcnlUeXBlXX1gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChib3VuZGFyeVR5cGUgPT09ICdsZWZ0JyB8fCBib3VuZGFyeVR5cGUgPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgdGhpcy53aWR0aElucHV0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0SW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoSW5wdXQudmFsdWUgPSB0aGlzLnNlbGVjdGVkQm91bmRhcnkuc2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHRJbnB1dC52YWx1ZSA9IHRoaXMuc2VsZWN0ZWRCb3VuZGFyeS5zaXplLmhlaWdodDtcclxuICAgICAgICB9IGVsc2UgaWYgKGJvdW5kYXJ5VHlwZSA9PT0gJ3RvcCcgfHwgYm91bmRhcnlUeXBlID09PSAnYm90dG9tJykge1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodElucHV0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGhJbnB1dC52YWx1ZSA9IHRoaXMuc2VsZWN0ZWRCb3VuZGFyeS5zaXplLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodElucHV0LnZhbHVlID0gdGhpcy5zZWxlY3RlZEJvdW5kYXJ5LnNpemUuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgYXBwbHlCb3VuZGFyeUNoYW5nZXMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkQm91bmRhcnkgfHwgIXRoaXMuc2VsZWN0ZWRCb3VuZGFyeVR5cGUpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdXaWR0aCA9IHBhcnNlSW50KHRoaXMud2lkdGhJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5oZWlnaHRJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlzTmFOKG5ld1dpZHRoKSB8fCBpc05hTihuZXdIZWlnaHQpIHx8IG5ld1dpZHRoIDwgMTAgfHwgbmV3SGVpZ2h0IDwgMTApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVCb3VuZGFyeVNpemUodGhpcy5zZWxlY3RlZEJvdW5kYXJ5VHlwZSwgbmV3IFNpemUobmV3V2lkdGgsIG5ld0hlaWdodCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1cGRhdGVCb3VuZGFyeVNpemUoYm91bmRhcnlUeXBlLCBuZXdTaXplKSB7XHJcbiAgICAgICAgY29uc3QgYm91bmRhcnkgPSB0aGlzLndvcmxkLmJvdW5kYXJpZXNbYm91bmRhcnlUeXBlXTtcclxuICAgICAgICBjb25zdCB3b3JsZFNpemUgPSB0aGlzLndvcmxkLnNpemU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoIChib3VuZGFyeVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgICAgICBib3VuZGFyeS5zaXplID0gbmV3IFNpemUobmV3U2l6ZS53aWR0aCwgd29ybGRTaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBib3VuZGFyeS5jb29yZHMgPSBuZXcgUG9pbnQoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICBib3VuZGFyeS5zaXplID0gbmV3IFNpemUobmV3U2l6ZS53aWR0aCwgd29ybGRTaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBib3VuZGFyeS5jb29yZHMgPSBuZXcgUG9pbnQod29ybGRTaXplLndpZHRoIC0gbmV3U2l6ZS53aWR0aCwgMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgICAgICAgICAgYm91bmRhcnkuc2l6ZSA9IG5ldyBTaXplKHdvcmxkU2l6ZS53aWR0aCwgbmV3U2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYm91bmRhcnkuY29vcmRzID0gbmV3IFBvaW50KDAsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICAgICAgICAgIGJvdW5kYXJ5LnNpemUgPSBuZXcgU2l6ZSh3b3JsZFNpemUud2lkdGgsIG5ld1NpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJvdW5kYXJ5LmNvb3JkcyA9IG5ldyBQb2ludCgwLCB3b3JsZFNpemUuaGVpZ2h0IC0gbmV3U2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudXBkYXRlTGV2ZWxCb3VuZGFyeURhdGEoYm91bmRhcnlUeXBlLCBib3VuZGFyeSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZUxldmVsQm91bmRhcnlEYXRhKGJvdW5kYXJ5VHlwZSwgYm91bmRhcnkpIHtcclxuICAgICAgICBjb25zdCBib3VuZGFyeU9iamVjdCA9IHRoaXMud29ybGQuYm91bmRhcmllc1tib3VuZGFyeVR5cGVdO1xyXG4gICAgICAgIGlmIChib3VuZGFyeU9iamVjdCkge1xyXG4gICAgICAgICAgICBib3VuZGFyeU9iamVjdC5jb29yZHMgPSBuZXcgUG9pbnQoYm91bmRhcnkuY29vcmRzLngsIGJvdW5kYXJ5LmNvb3Jkcy55KTtcclxuICAgICAgICAgICAgYm91bmRhcnlPYmplY3Quc2l6ZSA9IG5ldyBTaXplKGJvdW5kYXJ5LnNpemUud2lkdGgsIGJvdW5kYXJ5LnNpemUuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNlbGVjdEJvdW5kYXJ5KGJvdW5kYXJ5VHlwZSkge1xyXG4gICAgICAgIGlmICghYm91bmRhcnlUeXBlKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vbkJvdW5kYXJ5U2VsZWN0ZWQoYm91bmRhcnlUeXBlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0U2VsZWN0ZWRCb3VuZGFyeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEJvdW5kYXJ5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRTZWxlY3RlZEJvdW5kYXJ5VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEJvdW5kYXJ5VHlwZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQm91bmRhcnkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCb3VuZGFyeVR5cGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gJ0JvdW5kYXJ5IEVkaXRvcic7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xzQ29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbHNDb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuZGV0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBQb2ludCBmcm9tICdAY29tbW9uL3BvaW50LmpzJztcclxuaW1wb3J0IEJhc2VMZXZlbERlc2lnbmVyTWFuYWdlciBmcm9tICdAYXBwX3N0YXRlcy9sZXZlbF9kZXNpZ25lci9iYXNlX2xldmVsX2Rlc2lnbmVyX21hbmFnZXIuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ01hbmFnZXIgZXh0ZW5kcyBCYXNlTGV2ZWxEZXNpZ25lck1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3Iod29ybGQsIGNhbnZhcywgc2Nyb2xsTWFuYWdlciwgc2VsZWN0aW9uTWFuYWdlciwgZXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxNYW5hZ2VyID0gc2Nyb2xsTWFuYWdlcjtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIgPSBzZWxlY3Rpb25NYW5hZ2VyO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubW91c2VQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nT2JqZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy53YXNEcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnByZXZQb2ludCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ncmlkU3RlcCA9IDEwO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmN0cmxQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250YWluc09iamVjdCA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLnNuYXBQb2ludFRvR3JpZCA9IHRoaXMuc25hcFBvaW50VG9HcmlkLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN1YnNjcmliZVRvRXZlbnRIYW5kbGVyKCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmFkZE9uTW91c2VEb3duQ2FsbGJhY2soKHNlbGVjdGVkT2JqZWN0LCBwb2ludCwgY3RybFByZXNzZWQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsTWFuYWdlci5pc0luU2Nyb2xsTW9kZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3RybFByZXNzZWQgPSBjdHJsUHJlc3NlZDtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdCA9IHNlbGVjdGVkT2JqZWN0O1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucHJldlBvaW50ID0gbmV3IFBvaW50KHBvaW50LngsIHBvaW50LnkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuY2xlYXJTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbnNPYmplY3QgPSB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuY29udGFpbnModGhpcy5zZWxlY3RlZE9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuYWRkVG9TZWxlY3Rpb24odGhpcy5zZWxlY3RlZE9iamVjdCwgdGhpcy5jdHJsUHJlc3NlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5hZGRPbk1vdXNlTW92ZUNhbGxiYWNrKChwb2ludCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb3VzZVByZXNzZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRHJhZ01vdmUocG9pbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYWRkT25Nb3VzZVVwQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlUHJlc3NlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsTWFuYWdlci5pc0luU2Nyb2xsTW9kZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmdPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kRHJhZygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGFpbnNPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIucmVtb3ZlRnJvbVNlbGVjdGlvbih0aGlzLnNlbGVjdGVkT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVEcmFnTW92ZShwb2ludCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbE1hbmFnZXIuaXNJblNjcm9sbE1vZGUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZE9iamVjdCB8fCAhdGhpcy5tb3VzZVByZXNzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvYmplY3RUeXBlID0gdGhpcy5zZWxlY3RlZE9iamVjdC5nZXRUeXBlKCk7XHJcbiAgICAgICAgaWYgKG9iamVjdFR5cGUgIT0gJ0N1YmVQbGF5ZXInICYmIG9iamVjdFR5cGUgIT0gJ0JyaWNrJyAmJiBvYmplY3RUeXBlICE9ICdKdW1wT3JiJyAmJiBvYmplY3RUeXBlICE9ICdTcGlrZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9mZnNldCA9IG5ldyBQb2ludChcclxuICAgICAgICAgICAgcG9pbnQueCAtIHRoaXMucHJldlBvaW50LngsXHJcbiAgICAgICAgICAgIHBvaW50LnkgLSB0aGlzLnByZXZQb2ludC55XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLm1vdmUob2Zmc2V0LCB0aGlzLnNuYXBQb2ludFRvR3JpZCk7XHJcbiAgICAgICAgdGhpcy5wcmV2UG9pbnQgPSBuZXcgUG9pbnQocG9pbnQueCwgcG9pbnQueSk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ09iamVjdCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVuZERyYWcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZ09iamVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmdPYmplY3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNuYXBQb2ludFRvR3JpZChwb2ludCkge1xyXG4gICAgICAgIGNvbnN0IHdvcmxkT2Zmc2V0ID0gdGhpcy53b3JsZC53b3JsZE9mZnNldDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFggPSBwb2ludC54ICsgd29ybGRPZmZzZXQueDtcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFkgPSBwb2ludC55ICsgd29ybGRPZmZzZXQueTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzbmFwcGVkWCA9IE1hdGguZmxvb3IoYWRqdXN0ZWRYIC8gdGhpcy5ncmlkU3RlcCkgKiB0aGlzLmdyaWRTdGVwIC0gd29ybGRPZmZzZXQueDtcclxuICAgICAgICBjb25zdCBzbmFwcGVkWSA9IE1hdGguZmxvb3IoYWRqdXN0ZWRZIC8gdGhpcy5ncmlkU3RlcCkgKiB0aGlzLmdyaWRTdGVwIC0gd29ybGRPZmZzZXQueTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50KHNuYXBwZWRYLCBzbmFwcGVkWSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlzRHJhZ2dpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEcmFnZ2luZ09iamVjdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0RHJhZ2dlZE9iamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhZ2dlZE9iamVjdHM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9pbnQgZnJvbSAnQGNvbW1vbi9wb2ludC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3Iod29ybGQsIHBsYXllck9wdGlvbnMsIGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMud29ybGQgPSB3b3JsZDtcclxuICAgICAgICB0aGlzLnBsYXllck9wdGlvbnMgPSBwbGF5ZXJPcHRpb25zO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub25Nb3VzZUNsaWNrID0gW107XHJcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93biA9IFtdO1xyXG4gICAgICAgIHRoaXMub25Nb3VzZVVwID0gW107XHJcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZSA9IFtdO1xyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5oYW5kbGVNb3VzZUNsaWNrID0gdGhpcy5oYW5kbGVNb3VzZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVNb3VzZURvd24gPSB0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTW91c2VNb3ZlID0gdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZU1vdXNlVXAgPSB0aGlzLmhhbmRsZU1vdXNlVXAuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUtleURvd24gPSB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRPbk1vdXNlQ2xpY2tDYWxsYmFjayhjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMub25Nb3VzZUNsaWNrLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE9uTW91c2VEb3duQ2FsbGJhY2soY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLm9uTW91c2VEb3duLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGRPbk1vdXNlVXBDYWxsYmFjayhjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMub25Nb3VzZVVwLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGRPbk1vdXNlTW92ZUNhbGxiYWNrKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZS5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYWRkT25LZXlEb3duQ2FsbGJhY2soY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLm9uS2V5RG93bi5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlTW91c2VDbGljayk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlTW91c2VDbGljayk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcclxuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgbW91c2VQb3MgPSBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAgIGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsXHJcbiAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcFxyXG4gICAgICAgIClcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBob3ZlcmVkT2JqZWN0ID0gdGhpcy53b3JsZC5nZXRIb3ZlcmVkT2JqZWN0KG1vdXNlUG9zLCB0aGlzLnBsYXllck9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IGlzQ3RybFByZXNzZWQgPSBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93bi5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKGhvdmVyZWRPYmplY3QsIG1vdXNlUG9zLCBpc0N0cmxQcmVzc2VkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTW91c2VDbGljayhldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBtb3VzZVBvcyA9IG5ldyBQb2ludChcclxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcclxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMub25Nb3VzZUNsaWNrLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sobW91c2VQb3MpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGFuZGxlTW91c2VNb3ZlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IG1vdXNlUG9zID0gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxyXG4gICAgICAgICAgICBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZS5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKG1vdXNlUG9zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTW91c2VVcChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBtb3VzZVBvcyA9IG5ldyBQb2ludChcclxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcclxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMub25Nb3VzZVVwLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sobW91c2VQb3MpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGFuZGxlS2V5RG93bihldmVudCkge1xyXG4gICAgICAgIHRoaXMub25LZXlEb3duLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soZXZlbnQpKTtcclxuICAgIH1cclxufSIsImltcG9ydCBTaXplIGZyb20gJ0Bjb21tb24vc2l6ZS5qcyc7XHJcbmltcG9ydCBCYXNlTGV2ZWxEZXNpZ25lck1hbmFnZXIgZnJvbSAnQGFwcF9zdGF0ZXMvbGV2ZWxfZGVzaWduZXIvYmFzZV9sZXZlbF9kZXNpZ25lcl9tYW5hZ2VyLmpzJztcclxuaW1wb3J0IFN0cmluZ1Jlc291cmNlcyBmcm9tICdAY29tbW9uL3N0cmluZ19yZXNvdXJjZXMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNpemVNYW5hZ2VyIGV4dGVuZHMgQmFzZUxldmVsRGVzaWduZXJNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHdvcmxkKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XHJcbiAgICAgICAgdGhpcy5jb250cm9sc0NvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5nYW1lV2lkdGhJbnB1dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5nYW1lSGVpZ2h0SW5wdXQgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubWluV2lkdGggPSAxMjkwO1xyXG4gICAgICAgIHRoaXMubWluSGVpZ2h0ID0gODYwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub25TaXplQ2hhbmdlZCA9IG51bGw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5oYW5kbGVXaWR0aElucHV0ID0gdGhpcy5oYW5kbGVXaWR0aElucHV0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVIZWlnaHRJbnB1dCA9IHRoaXMuaGFuZGxlSGVpZ2h0SW5wdXQuYmluZCh0aGlzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNyZWF0ZUlucHV0Q29udHJvbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVJbnB1dENvbnRyb2xzKCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzQ29udGFpbmVyLmlkID0gJ2xldmVsLWRlc2lnbmVyLWNvbnRyb2xzJztcclxuICAgICAgICB0aGlzLmNvbnRyb2xzQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgYm90dG9tOiA4MHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7U3RyaW5nUmVzb3VyY2VzLkdBTUVfU0laRX06YDtcclxuICAgICAgICBsYWJlbC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYDtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHJcbiAgICAgICAgY29uc3Qgd2lkdGhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3aWR0aENvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgY29uc3Qgd2lkdGhMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgd2lkdGhMYWJlbC50ZXh0Q29udGVudCA9IGAke1N0cmluZ1Jlc291cmNlcy5XSURUSH06IGA7XHJcbiAgICAgICAgd2lkdGhMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2NjYztcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWVXaWR0aElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLmdhbWVXaWR0aElucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgdGhpcy5nYW1lV2lkdGhJbnB1dC52YWx1ZSA9IHRoaXMud29ybGQuc2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLmdhbWVXaWR0aElucHV0LnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbldpZHRoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgbWluV2lkdGhMYWJlbC50ZXh0Q29udGVudCA9IGAgKCR7U3RyaW5nUmVzb3VyY2VzLk1JTn06ICR7dGhpcy5taW5XaWR0aH0pYDtcclxuICAgICAgICBtaW5XaWR0aExhYmVsLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgd2lkdGhDb250YWluZXIuYXBwZW5kQ2hpbGQod2lkdGhMYWJlbCk7XHJcbiAgICAgICAgd2lkdGhDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5nYW1lV2lkdGhJbnB1dCk7XHJcbiAgICAgICAgd2lkdGhDb250YWluZXIuYXBwZW5kQ2hpbGQobWluV2lkdGhMYWJlbCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh3aWR0aENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGhlaWdodENvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlaWdodExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBoZWlnaHRMYWJlbC50ZXh0Q29udGVudCA9IGAke1N0cmluZ1Jlc291cmNlcy5IRUlHSFR9OiBgO1xyXG4gICAgICAgIGhlaWdodExhYmVsLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUhlaWdodElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLmdhbWVIZWlnaHRJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgIHRoaXMuZ2FtZUhlaWdodElucHV0LnZhbHVlID0gdGhpcy53b3JsZC5zaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLmdhbWVIZWlnaHRJbnB1dC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBjb25zdCBtaW5IZWlnaHRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBtaW5IZWlnaHRMYWJlbC50ZXh0Q29udGVudCA9IGAgKCR7U3RyaW5nUmVzb3VyY2VzLk1JTn06ICR7dGhpcy5taW5IZWlnaHR9KWA7XHJcbiAgICAgICAgbWluSGVpZ2h0TGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgY29sb3I6ICM4ODg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBoZWlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVpZ2h0TGFiZWwpO1xyXG4gICAgICAgIGhlaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmdhbWVIZWlnaHRJbnB1dCk7XHJcbiAgICAgICAgaGVpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1pbkhlaWdodExhYmVsKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlaWdodENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVdpZHRoSW5wdXQoKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IHRoaXMuZ2FtZVdpZHRoSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGlucHV0VmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkVmFsdWUodmFsdWUsIHRoaXMubWluV2lkdGgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVdpZHRoSW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnIzU1NSc7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvcnJlY3RlZFZhbHVlID0gdGhpcy5jb3JyZWN0VG9NdWx0aXBsZU9mMTAodmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLndvcmxkLmNoYW5nZUdhbWVTaXplKG5ldyBTaXplKGNvcnJlY3RlZFZhbHVlLCB0aGlzLndvcmxkLnNpemUuaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgIHRoaXMub25TaXplQ2hhbmdlZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVdpZHRoSW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI2ZmNDQ0NCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWRWYWx1ZSh2YWx1ZSwgbWluVmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gIWlzTmFOKHZhbHVlKSAmJlxyXG4gICAgICAgICAgICAgICB2YWx1ZSA+PSBtaW5WYWx1ZSAmJlxyXG4gICAgICAgICAgICAgICB2YWx1ZSA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29ycmVjdFRvTXVsdGlwbGVPZjEwKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgLyAxMCkgKiAxMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGFuZGxlSGVpZ2h0SW5wdXQoKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IHRoaXMuZ2FtZUhlaWdodElucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihpbnB1dFZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFZhbHVlKHZhbHVlLCB0aGlzLm1pbkhlaWdodCkpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lSGVpZ2h0SW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnIzU1NSc7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvcnJlY3RlZFZhbHVlID0gdGhpcy5jb3JyZWN0VG9NdWx0aXBsZU9mMTAodmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLndvcmxkLmNoYW5nZUdhbWVTaXplKG5ldyBTaXplKHRoaXMud29ybGQuc2l6ZS53aWR0aCwgY29ycmVjdGVkVmFsdWUpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub25TaXplQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNpemVDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVIZWlnaHRJbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjZmY0NDQ0JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuaGFuZGxlV2lkdGhJbnB1dCk7XHJcbiAgICAgICAgdGhpcy5nYW1lV2lkdGhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVdpZHRoSW5wdXQpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUhlaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmhhbmRsZUhlaWdodElucHV0KTtcclxuICAgICAgICB0aGlzLmdhbWVIZWlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUhlaWdodElucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2hFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLmdhbWVXaWR0aElucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmhhbmRsZVdpZHRoSW5wdXQpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoSW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVXaWR0aElucHV0KTtcclxuICAgICAgICB0aGlzLmdhbWVIZWlnaHRJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5oYW5kbGVIZWlnaHRJbnB1dCk7XHJcbiAgICAgICAgdGhpcy5nYW1lSGVpZ2h0SW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVIZWlnaHRJbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udGFpbmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sc0NvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2xzQ29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLmRldGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZUFwcFN0YXRlIGZyb20gJ0BhcHBfc3RhdGVzL2Jhc2VfYXBwX3N0YXRlLmpzJztcclxuaW1wb3J0IFdvcmxkIGZyb20gJ0Bjb21tb24vZ2FtZS93b3JsZC5qcyc7XHJcbmltcG9ydCBMZXZlbEZhY3RvcnkgZnJvbSAnQGNvbW1vbi9sZXZlbHMvbGV2ZWxfZmFjdG9yeS5qcyc7XHJcbmltcG9ydCBHYW1lU2l6ZU1hbmFnZXIgZnJvbSAnQGFwcF9zdGF0ZXMvbGV2ZWxfZGVzaWduZXIvZ2FtZV9zaXplX21hbmFnZXIuanMnO1xyXG5pbXBvcnQgU2Nyb2xsTWFuYWdlciBmcm9tICdAYXBwX3N0YXRlcy9sZXZlbF9kZXNpZ25lci9zY3JvbGxfbWFuYWdlci5qcyc7XHJcbmltcG9ydCBPYmplY3RNYW5hZ2VyIGZyb20gJ0BhcHBfc3RhdGVzL2xldmVsX2Rlc2lnbmVyL29iamVjdF9tYW5hZ2VyLmpzJztcclxuaW1wb3J0IERyYWdNYW5hZ2VyIGZyb20gJ0BhcHBfc3RhdGVzL2xldmVsX2Rlc2lnbmVyL2RyYWdfbWFuYWdlci5qcyc7XHJcbmltcG9ydCBMZXZlbE1hbmFnZXIgZnJvbSAnQGFwcF9zdGF0ZXMvbGV2ZWxfZGVzaWduZXIvbGV2ZWxfbWFuYWdlci5qcyc7XHJcbmltcG9ydCBCb3VuZGFyeUVkaXRvciBmcm9tICdAYXBwX3N0YXRlcy9sZXZlbF9kZXNpZ25lci9ib3VuZGFyeV9lZGl0b3IuanMnO1xyXG5pbXBvcnQgUGxheWVyRWRpdG9yIGZyb20gJ0BhcHBfc3RhdGVzL2xldmVsX2Rlc2lnbmVyL3BsYXllcl9lZGl0b3IuanMnO1xyXG5pbXBvcnQgUGxheWVyT3B0aW9ucyBmcm9tICdAY29tbW9uL2dhbWUvcGxheWVyX29wdGlvbnMuanMnO1xyXG5pbXBvcnQgU2VsZWN0aW9uTWFuYWdlciBmcm9tICdAYXBwX3N0YXRlcy9sZXZlbF9kZXNpZ25lci9zZWxlY3Rpb24vc2VsZWN0aW9uX21hbmFnZXIuanMnO1xyXG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gJ0BhcHBfc3RhdGVzL2xldmVsX2Rlc2lnbmVyL3VpX21hbmFnZXIuanMnO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJ0BhcHBfc3RhdGVzL2xldmVsX2Rlc2lnbmVyL2V2ZW50X2hhbmRsZXIuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxEZXNpZ25lckFwcFN0YXRlIGV4dGVuZHMgQmFzZUFwcFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIHN1cGVyKGNhbnZhcyk7XHJcblxyXG4gICAgICAgIHRoaXMub25UZXN0TGV2ZWwgPSAoKSA9PiB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gY2FudmFzU2l6ZTtcclxuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBhcmdzPy5sZXZlbCB8fCBMZXZlbEZhY3RvcnkuY3JlYXRlRW1wdHlMZXZlbCh0aGlzLmNhbnZhc1NpemUpO1xyXG4gICAgICAgIHRoaXMud29ybGQgPSBuZXcgV29ybGQobGV2ZWwsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMud29ybGQucGxheWVyO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllck9wdGlvbnMgPSBuZXcgUGxheWVyT3B0aW9ucyhmYWxzZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gbmV3IEV2ZW50SGFuZGxlcih0aGlzLndvcmxkLCB0aGlzLnBsYXllck9wdGlvbnMsIHRoaXMuY2FudmFzKTtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5hY3RpdmF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIgPSBuZXcgU2VsZWN0aW9uTWFuYWdlcih0aGlzLndvcmxkLCB0aGlzLmV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsTWFuYWdlciA9IG5ldyBTY3JvbGxNYW5hZ2VyKHRoaXMud29ybGQsIHRoaXMuY2FudmFzLCB0aGlzLmNhbnZhc1NpemUsIHRoaXMuZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLnNjcm9sbE1hbmFnZXIuYWN0aXZhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmFnTWFuYWdlciA9IG5ldyBEcmFnTWFuYWdlcih0aGlzLndvcmxkLCB0aGlzLmNhbnZhcywgdGhpcy5zY3JvbGxNYW5hZ2VyLCB0aGlzLnNlbGVjdGlvbk1hbmFnZXIsIHRoaXMuZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLmRyYWdNYW5hZ2VyLmFjdGl2YXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVNpemVNYW5hZ2VyID0gbmV3IEdhbWVTaXplTWFuYWdlcih0aGlzLndvcmxkKTtcclxuICAgICAgICB0aGlzLmdhbWVTaXplTWFuYWdlci5vblNpemVDaGFuZ2VkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbE1hbmFnZXIub25Xb3JsZFNpemVDaGFuZ2VkKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdhbWVTaXplTWFuYWdlci5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub2JqZWN0TWFuYWdlciA9IG5ldyBPYmplY3RNYW5hZ2VyKHRoaXMud29ybGQsIHRoaXMuY2FudmFzU2l6ZSwgdGhpcy5ldmVudEhhbmRsZXIsIHRoaXMuc2VsZWN0aW9uTWFuYWdlcik7XHJcbiAgICAgICAgdGhpcy5vYmplY3RNYW5hZ2VyLmFjdGl2YXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubGV2ZWxNYW5hZ2VyID0gbmV3IExldmVsTWFuYWdlcih0aGlzLndvcmxkKTtcclxuICAgICAgICB0aGlzLmxldmVsTWFuYWdlci5vblRlc3RMZXZlbCA9IChsZXZlbCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uVGVzdExldmVsKGxldmVsKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubGV2ZWxNYW5hZ2VyLm9uTGV2ZWxDaGFuZ2VkID0gKGxldmVsKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlKHtsZXZlbDogbGV2ZWx9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sZXZlbE1hbmFnZXIuYWN0aXZhdGUoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmJvdW5kYXJ5RWRpdG9yID0gbmV3IEJvdW5kYXJ5RWRpdG9yKHRoaXMud29ybGQsIHRoaXMuZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLmJvdW5kYXJ5RWRpdG9yLmFjdGl2YXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyRWRpdG9yID0gbmV3IFBsYXllckVkaXRvcih0aGlzLndvcmxkLCB0aGlzLmV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJFZGl0b3IuYWN0aXZhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy51aU1hbmFnZXIgPSBuZXcgVUlNYW5hZ2VyKHRoaXMuc2Nyb2xsTWFuYWdlciwgdGhpcy53b3JsZCwgdGhpcy5jYW52YXNTaXplKTtcclxuICAgICAgICB0aGlzLnVpTWFuYWdlci5vbkJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25FeGl0KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnVpTWFuYWdlci5hY3RpdmF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWVMb29wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZUxvb3AoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0aW1lKSA9PiB0aGlzLmdhbWVMb29wKHRpbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWFjdGl2YXRlKCkge1xyXG4gICAgICAgIHN1cGVyLmRlYWN0aXZhdGUoKTtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5kZWFjdGl2YXRlKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxNYW5hZ2VyLmRlYWN0aXZhdGUoKTtcclxuICAgICAgICB0aGlzLmRyYWdNYW5hZ2VyLmRlYWN0aXZhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lU2l6ZU1hbmFnZXIuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TWFuYWdlci5kZWFjdGl2YXRlKCk7XHJcbiAgICAgICAgdGhpcy5ib3VuZGFyeUVkaXRvci5kZWFjdGl2YXRlKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJFZGl0b3IuZGVhY3RpdmF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmxldmVsTWFuYWdlci5kZWFjdGl2YXRlKCk7XHJcbiAgICAgICAgdGhpcy51aU1hbmFnZXIuZGVhY3RpdmF0ZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25JZCkge1xyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbklkKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25JZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4KSB7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1NpemUud2lkdGgsIHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMudWlNYW5hZ2VyLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XHJcbiAgICAgICAgdGhpcy51aU1hbmFnZXIuZHJhd0dyaWQoY3R4KTtcclxuICAgICAgICB0aGlzLndvcmxkLmRyYXcoY3R4LCB0aGlzLmNhbnZhc1NpemUsIHRoaXMucGxheWVyT3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5kcmF3U2VsZWN0aW9uKGN0eCwgdGhpcy5jYW52YXNTaXplLCB0aGlzLndvcmxkLndvcmxkT2Zmc2V0LCB0aGlzLnBsYXllck9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsTWFuYWdlci51cGRhdGVTY3JvbGxiYXJzKCk7XHJcbiAgICAgICAgdGhpcy51aU1hbmFnZXIuZHJhd1VJKGN0eCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTGV2ZWwgZnJvbSAnQGNvbW1vbi9sZXZlbHMvbGV2ZWwuanMnO1xyXG5pbXBvcnQgV29ybGREYXRhIGZyb20gJ0Bjb21tb24vbGV2ZWxzL3dvcmxkX2RhdGEuanMnO1xyXG5pbXBvcnQgUGxheWVyRGF0YSBmcm9tICdAY29tbW9uL2xldmVscy9wbGF5ZXJfZGF0YS5qcyc7XHJcbmltcG9ydCBCcmlja0RhdGEgZnJvbSAnQGNvbW1vbi9sZXZlbHMvYnJpY2tfZGF0YS5qcyc7XHJcbmltcG9ydCBKdW1wT3JiRGF0YSBmcm9tICdAY29tbW9uL2xldmVscy9qdW1wX29yYl9kYXRhLmpzJztcclxuaW1wb3J0IFNwaWtlRGF0YSBmcm9tICdAY29tbW9uL2xldmVscy9zcGlrZV9kYXRhLmpzJztcclxuaW1wb3J0IEJvdW5kYXJ5RGF0YSBmcm9tICdAY29tbW9uL2xldmVscy9ib3VuZGFyeV9kYXRhLmpzJztcclxuaW1wb3J0IEdhbWVCb3VuZHNEYXRhIGZyb20gJ0Bjb21tb24vbGV2ZWxzL2dhbWVfYm91bmRzX2RhdGEuanMnO1xyXG5pbXBvcnQgU2l6ZSBmcm9tICdAY29tbW9uL3NpemUuanMnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnQGNvbW1vbi9wb2ludC5qcyc7XHJcbmltcG9ydCBCb3VuZGFyeUJhY2tncm91bmQgZnJvbSAnQGNvbW1vbi9nYW1lL2FjdG9ycy9ib3VuZGFyeS9ib3VuZGFyeV9iYWNrZ3JvdW5kLmpzJ1xyXG5pbXBvcnQgU3RyaW5nUmVzb3VyY2VzIGZyb20gJ0Bjb21tb24vc3RyaW5nX3Jlc291cmNlcy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbE1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3Iod29ybGQpIHtcclxuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XHJcbiAgICAgICAgdGhpcy5jb250cm9sc0NvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50ZXN0TGV2ZWxCdXR0b24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZG93bmxvYWRMZXZlbEJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy51cGxvYWRMZXZlbEJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZXNldEJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maWxlSW5wdXQgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLm9uVGVzdExldmVsID0gKCkgPT4ge307XHJcbiAgICAgICAgdGhpcy5vbkxldmVsQ2hhbmdlZCA9ICgpID0+IHt9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVGVzdExldmVsID0gdGhpcy5oYW5kbGVUZXN0TGV2ZWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZURvd25sb2FkTGV2ZWwgPSB0aGlzLmhhbmRsZURvd25sb2FkTGV2ZWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVVwbG9hZExldmVsID0gdGhpcy5oYW5kbGVVcGxvYWRMZXZlbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzZXQgPSB0aGlzLmhhbmRsZVJlc2V0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVGaWxlU2VsZWN0ID0gdGhpcy5oYW5kbGVGaWxlU2VsZWN0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVGVzdExldmVsQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMudGVzdExldmVsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy50ZXN0TGV2ZWxCdXR0b24udGV4dENvbnRlbnQgPSBTdHJpbmdSZXNvdXJjZXMuVEVTVF9MRVZFTDtcclxuICAgICAgICB0aGlzLnRlc3RMZXZlbEJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMjAwcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGVzdExldmVsQnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzQ1YTA0OSc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGVzdExldmVsQnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzRDQUY1MCc7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXN0TGV2ZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGFuZGxlTW91c2VFbnRlcik7XHJcbiAgICAgICAgdGhpcy50ZXN0TGV2ZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuaGFuZGxlTW91c2VMZWF2ZSk7XHJcbiAgICAgICAgdGhpcy50ZXN0TGV2ZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVRlc3RMZXZlbCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnRlc3RMZXZlbEJ1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVEb3dubG9hZExldmVsQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMuZG93bmxvYWRMZXZlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuZG93bmxvYWRMZXZlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFN0cmluZ1Jlc291cmNlcy5ET1dOTE9BRF9MRVZFTDtcclxuICAgICAgICB0aGlzLmRvd25sb2FkTGV2ZWxCdXR0b24uc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDI0cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjE5NkYzO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZURvd25sb2FkTW91c2VFbnRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kb3dubG9hZExldmVsQnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzE5NzZEMic7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhhbmRsZURvd25sb2FkTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kb3dubG9hZExldmVsQnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzIxOTZGMyc7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5kb3dubG9hZExldmVsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhhbmRsZURvd25sb2FkTW91c2VFbnRlcik7XHJcbiAgICAgICAgdGhpcy5kb3dubG9hZExldmVsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmhhbmRsZURvd25sb2FkTW91c2VMZWF2ZSk7XHJcbiAgICAgICAgdGhpcy5kb3dubG9hZExldmVsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEb3dubG9hZExldmVsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZG93bmxvYWRMZXZlbEJ1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVVcGxvYWRMZXZlbEJ1dHRvbigpIHtcclxuICAgICAgICB0aGlzLnVwbG9hZExldmVsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy51cGxvYWRMZXZlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFN0cmluZ1Jlc291cmNlcy5VUExPQURfTEVWRUw7XHJcbiAgICAgICAgdGhpcy51cGxvYWRMZXZlbEJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogODRweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRjk4MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLmZpbGVJbnB1dC50eXBlID0gJ2ZpbGUnO1xyXG4gICAgICAgIHRoaXMuZmlsZUlucHV0LmFjY2VwdCA9ICcuanNvbic7XHJcbiAgICAgICAgdGhpcy5maWxlSW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVVcGxvYWRNb3VzZUVudGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwbG9hZExldmVsQnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnI0Y1N0MwMCc7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVVcGxvYWRNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwbG9hZExldmVsQnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnI0ZGOTgwMCc7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy51cGxvYWRMZXZlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oYW5kbGVVcGxvYWRNb3VzZUVudGVyKTtcclxuICAgICAgICB0aGlzLnVwbG9hZExldmVsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmhhbmRsZVVwbG9hZE1vdXNlTGVhdmUpO1xyXG4gICAgICAgIHRoaXMudXBsb2FkTGV2ZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVVwbG9hZExldmVsKTtcclxuICAgICAgICB0aGlzLmZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUZpbGVTZWxlY3QpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZmlsZUlucHV0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkTGV2ZWxCdXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUmVzZXRCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHRoaXMucmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSBTdHJpbmdSZXNvdXJjZXMuUkVTRVQ7XHJcbiAgICAgICAgdGhpcy5yZXNldEJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMzAwcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjQ0MzM2O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVJlc2V0TW91c2VFbnRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyNEMzJGMkYnO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzZXRNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0QnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnI0Y0NDMzNic7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oYW5kbGVSZXNldE1vdXNlRW50ZXIpO1xyXG4gICAgICAgIHRoaXMucmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuaGFuZGxlUmVzZXRNb3VzZUxlYXZlKTtcclxuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVSZXNldCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc2V0QnV0dG9uO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRlc3RMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLm9uVGVzdExldmVsKHRoaXMuZXhwb3J0TGV2ZWwoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRG93bmxvYWRMZXZlbCgpIHtcclxuICAgICAgICBjb25zdCBsZXZlbCA9IHRoaXMuZXhwb3J0TGV2ZWwoKTtcclxuICAgICAgICB0aGlzLmRvd25sb2FkTGV2ZWwobGV2ZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVVwbG9hZExldmVsKCkge1xyXG4gICAgICAgIHRoaXMuZmlsZUlucHV0LmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkxldmVsQ2hhbmdlZChudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVGaWxlU2VsZWN0KGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBpZiAoZmlsZSAmJiBmaWxlLnR5cGUgPT09ICdhcHBsaWNhdGlvbi9qc29uJykge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGV2ZWxEYXRhID0gSlNPTi5wYXJzZShlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZExldmVsKGxldmVsRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBhcnNpbmcgSlNPTiBmaWxlOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnRXJyb3I6IEludmFsaWQgSlNPTiBmaWxlIGZvcm1hdCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIHNlbGVjdCBhIHZhbGlkIEpTT04gZmlsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkTGV2ZWwobGV2ZWxEYXRhKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5vbkxldmVsQ2hhbmdlZChsZXZlbERhdGEpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGxldmVsIG9iamVjdDonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdFcnJvcjogSW52YWxpZCBsZXZlbCBmb3JtYXQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRMZXZlbChsZXZlbCkge1xyXG4gICAgICAgIGNvbnN0IGxldmVsSnNvbiA9IEpTT04uc3RyaW5naWZ5KGxldmVsLCBudWxsLCAyKTtcclxuICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2xldmVsSnNvbl0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBjdXJyZW50RGF0ZS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1s6Ll0vZywgJy0nKS5zbGljZSgwLCAxOSk7XHJcbiAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBgbGV2ZWxfJHt0aW1lc3RhbXB9Lmpzb25gO1xyXG5cclxuICAgICAgICBjb25zdCBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgZG93bmxvYWRMaW5rLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gZmlsZW5hbWU7XHJcbiAgICAgICAgZG93bmxvYWRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG93bmxvYWRMaW5rKTtcclxuICAgICAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvd25sb2FkTGluayk7XHJcblxyXG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnRMZXZlbCgpIHtcclxuICAgICAgICBjb25zdCB3b3JsZERhdGEgPSBuZXcgV29ybGREYXRhKFxyXG4gICAgICAgICAgICBuZXcgU2l6ZSh0aGlzLndvcmxkLnNpemUud2lkdGgsIHRoaXMud29ybGQuc2l6ZS5oZWlnaHQpLFxyXG4gICAgICAgICAgICB0aGlzLndvcmxkLnBoeXNpY3Mud29ybGRTcGVlZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyRGF0YSA9IG5ldyBQbGF5ZXJEYXRhKFxyXG4gICAgICAgICAgICBuZXcgUG9pbnQodGhpcy53b3JsZC5wbGF5ZXIuY29vcmRzLngsIHRoaXMud29ybGQucGxheWVyLmNvb3Jkcy55KSxcclxuICAgICAgICAgICAgbmV3IFNpemUodGhpcy53b3JsZC5wbGF5ZXIuc2l6ZS53aWR0aCwgdGhpcy53b3JsZC5wbGF5ZXIuc2l6ZS5oZWlnaHQpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBicmlja3NEYXRhID0gdGhpcy53b3JsZC5icmlja3MubWFwKGl0ZW0gPT4gXHJcbiAgICAgICAgICAgIG5ldyBCcmlja0RhdGEoXHJcbiAgICAgICAgICAgICAgICBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBvaW50KGl0ZW0uY29vcmRzLngsIGl0ZW0uY29vcmRzLnkpLFxyXG4gICAgICAgICAgICAgICAgbmV3IFNpemUoaXRlbS5zaXplLndpZHRoLCBpdGVtLnNpemUuaGVpZ2h0KSxcclxuICAgICAgICAgICAgICAgIGl0ZW0uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgaXRlbS5zdHJva2VXaWR0aCxcclxuICAgICAgICAgICAgICAgIGl0ZW0uc3Ryb2tlQ29sb3IsXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGp1bXBPcmJzRGF0YSA9IHRoaXMud29ybGQuanVtcE9yYnMubWFwKGl0ZW0gPT4gXHJcbiAgICAgICAgICAgIG5ldyBKdW1wT3JiRGF0YShcclxuICAgICAgICAgICAgICAgIGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICBuZXcgUG9pbnQoaXRlbS5jb29yZHMueCwgaXRlbS5jb29yZHMueSksXHJcbiAgICAgICAgICAgICAgICBpdGVtLmlzUmV2ZXJzZWRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc3Bpa2VzRGF0YSA9IHRoaXMud29ybGQuc3Bpa2VzLm1hcChpdGVtID0+IFxyXG4gICAgICAgICAgICBuZXcgU3Bpa2VEYXRhKFxyXG4gICAgICAgICAgICAgICAgaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgIG5ldyBQb2ludChpdGVtLmNvb3Jkcy54LCBpdGVtLmNvb3Jkcy55KSxcclxuICAgICAgICAgICAgICAgIG5ldyBTaXplKGl0ZW0uc2l6ZS53aWR0aCwgaXRlbS5zaXplLmhlaWdodCksXHJcbiAgICAgICAgICAgICAgICBpdGVtLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgICAgIGl0ZW0uc3Ryb2tlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBpdGVtLnN0cm9rZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGl0ZW0uaXNSZXZlcnNlZFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgYm91bmRhcmllcyA9IHRoaXMud29ybGQuYm91bmRhcmllcztcclxuICAgICAgICBjb25zdCBib3VuZGFyeURhdGEgPSBuZXcgR2FtZUJvdW5kc0RhdGEoXHJcbiAgICAgICAgICAgIG5ldyBCb3VuZGFyeURhdGEoXHJcbiAgICAgICAgICAgICAgICAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBuZXcgUG9pbnQoYm91bmRhcmllcy5sZWZ0LmNvb3Jkcy54LCBib3VuZGFyaWVzLmxlZnQuY29vcmRzLnkpLFxyXG4gICAgICAgICAgICAgICAgbmV3IFNpemUoYm91bmRhcmllcy5sZWZ0LnNpemUud2lkdGgsIGJvdW5kYXJpZXMubGVmdC5zaXplLmhlaWdodCksXHJcbiAgICAgICAgICAgICAgICBuZXcgQm91bmRhcnlCYWNrZ3JvdW5kKClcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgbmV3IEJvdW5kYXJ5RGF0YShcclxuICAgICAgICAgICAgICAgICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBvaW50KGJvdW5kYXJpZXMudG9wLmNvb3Jkcy54LCBib3VuZGFyaWVzLnRvcC5jb29yZHMueSksXHJcbiAgICAgICAgICAgICAgICBuZXcgU2l6ZShib3VuZGFyaWVzLnRvcC5zaXplLndpZHRoLCBib3VuZGFyaWVzLnRvcC5zaXplLmhlaWdodCksXHJcbiAgICAgICAgICAgICAgICBuZXcgQm91bmRhcnlCYWNrZ3JvdW5kKClcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgbmV3IEJvdW5kYXJ5RGF0YShcclxuICAgICAgICAgICAgICAgICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICBuZXcgUG9pbnQoYm91bmRhcmllcy5yaWdodC5jb29yZHMueCwgYm91bmRhcmllcy5yaWdodC5jb29yZHMueSksXHJcbiAgICAgICAgICAgICAgICBuZXcgU2l6ZShib3VuZGFyaWVzLnJpZ2h0LnNpemUud2lkdGgsIGJvdW5kYXJpZXMucmlnaHQuc2l6ZS5oZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgbmV3IEJvdW5kYXJ5QmFja2dyb3VuZCgpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIG5ldyBCb3VuZGFyeURhdGEoXHJcbiAgICAgICAgICAgICAgICAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgIG5ldyBQb2ludChib3VuZGFyaWVzLmJvdHRvbS5jb29yZHMueCwgYm91bmRhcmllcy5ib3R0b20uY29vcmRzLnkpLFxyXG4gICAgICAgICAgICAgICAgbmV3IFNpemUoYm91bmRhcmllcy5ib3R0b20uc2l6ZS53aWR0aCwgYm91bmRhcmllcy5ib3R0b20uc2l6ZS5oZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgbmV3IEJvdW5kYXJ5QmFja2dyb3VuZCgpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGNvbnN0IGxldmVsID0gbmV3IExldmVsKFxyXG4gICAgICAgICAgICB0aGlzLndvcmxkLm5hbWUsXHJcbiAgICAgICAgICAgIHdvcmxkRGF0YSxcclxuICAgICAgICAgICAgYm91bmRhcnlEYXRhLFxyXG4gICAgICAgICAgICBicmlja3NEYXRhLFxyXG4gICAgICAgICAgICBqdW1wT3Jic0RhdGEsXHJcbiAgICAgICAgICAgIHNwaWtlc0RhdGEsXHJcbiAgICAgICAgICAgIHBsYXllckRhdGFcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gbGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0TGV2ZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGFuZGxlTW91c2VFbnRlcik7XHJcbiAgICAgICAgdGhpcy50ZXN0TGV2ZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuaGFuZGxlTW91c2VMZWF2ZSk7XHJcbiAgICAgICAgdGhpcy50ZXN0TGV2ZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVRlc3RMZXZlbCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hEb3dubG9hZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hVcGxvYWRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoUmVzZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMudGVzdExldmVsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhhbmRsZU1vdXNlRW50ZXIpO1xyXG4gICAgICAgIHRoaXMudGVzdExldmVsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmhhbmRsZU1vdXNlTGVhdmUpO1xyXG4gICAgICAgIHRoaXMudGVzdExldmVsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVUZXN0TGV2ZWwpO1xyXG4gICAgICAgIHRoaXMuZGV0YWNoRG93bmxvYWRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuZGV0YWNoVXBsb2FkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLmRldGFjaFJlc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hEb3dubG9hZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuZG93bmxvYWRMZXZlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oYW5kbGVEb3dubG9hZE1vdXNlRW50ZXIpO1xyXG4gICAgICAgIHRoaXMuZG93bmxvYWRMZXZlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVEb3dubG9hZE1vdXNlTGVhdmUpO1xyXG4gICAgICAgIHRoaXMuZG93bmxvYWRMZXZlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRG93bmxvYWRMZXZlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGV0YWNoRG93bmxvYWRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLmRvd25sb2FkTGV2ZWxCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGFuZGxlRG93bmxvYWRNb3VzZUVudGVyKTtcclxuICAgICAgICB0aGlzLmRvd25sb2FkTGV2ZWxCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuaGFuZGxlRG93bmxvYWRNb3VzZUxlYXZlKTtcclxuICAgICAgICB0aGlzLmRvd25sb2FkTGV2ZWxCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZURvd25sb2FkTGV2ZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaFVwbG9hZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMudXBsb2FkTGV2ZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGFuZGxlVXBsb2FkTW91c2VFbnRlcik7XHJcbiAgICAgICAgdGhpcy51cGxvYWRMZXZlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVVcGxvYWRNb3VzZUxlYXZlKTtcclxuICAgICAgICB0aGlzLnVwbG9hZExldmVsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVVcGxvYWRMZXZlbCk7XHJcbiAgICAgICAgdGhpcy5maWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVGaWxlU2VsZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2hVcGxvYWRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLnVwbG9hZExldmVsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhhbmRsZVVwbG9hZE1vdXNlRW50ZXIpO1xyXG4gICAgICAgIHRoaXMudXBsb2FkTGV2ZWxCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuaGFuZGxlVXBsb2FkTW91c2VMZWF2ZSk7XHJcbiAgICAgICAgdGhpcy51cGxvYWRMZXZlbEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlVXBsb2FkTGV2ZWwpO1xyXG4gICAgICAgIHRoaXMuZmlsZUlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlRmlsZVNlbGVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoUmVzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhhbmRsZVJlc2V0TW91c2VFbnRlcik7XHJcbiAgICAgICAgdGhpcy5yZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVSZXNldE1vdXNlTGVhdmUpO1xyXG4gICAgICAgIHRoaXMucmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVJlc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2hSZXNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGFuZGxlUmVzZXRNb3VzZUVudGVyKTtcclxuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmhhbmRsZVJlc2V0TW91c2VMZWF2ZSk7XHJcbiAgICAgICAgdGhpcy5yZXNldEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlUmVzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMudGVzdExldmVsQnV0dG9uID0gdGhpcy5jcmVhdGVUZXN0TGV2ZWxCdXR0b24oKTtcclxuICAgICAgICB0aGlzLmRvd25sb2FkTGV2ZWxCdXR0b24gPSB0aGlzLmNyZWF0ZURvd25sb2FkTGV2ZWxCdXR0b24oKTtcclxuICAgICAgICB0aGlzLnVwbG9hZExldmVsQnV0dG9uID0gdGhpcy5jcmVhdGVVcGxvYWRMZXZlbEJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMucmVzZXRCdXR0b24gPSB0aGlzLmNyZWF0ZVJlc2V0QnV0dG9uKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnRlc3RMZXZlbEJ1dHRvbik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRvd25sb2FkTGV2ZWxCdXR0b24pO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy51cGxvYWRMZXZlbEJ1dHRvbik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlc2V0QnV0dG9uKTtcclxuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMudGVzdExldmVsQnV0dG9uKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZG93bmxvYWRMZXZlbEJ1dHRvbik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLnVwbG9hZExldmVsQnV0dG9uKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMucmVzZXRCdXR0b24pO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5maWxlSW5wdXQpO1xyXG4gICAgICAgIHRoaXMuZGV0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLnRlc3RMZXZlbEJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kb3dubG9hZExldmVsQnV0dG9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVwbG9hZExldmVsQnV0dG9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpbGVJbnB1dCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnV0dG9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlc3RMZXZlbEJ1dHRvbjtcclxuICAgIH1cclxufSIsImltcG9ydCBQb2ludCBmcm9tICdAY29tbW9uL3BvaW50LmpzJztcclxuaW1wb3J0IFNpemUgZnJvbSAnQGNvbW1vbi9zaXplLmpzJztcclxuaW1wb3J0IEJyaWNrIGZyb20gJ0Bjb21tb24vZ2FtZS9hY3RvcnMvYnJpY2svYnJpY2suanMnO1xyXG5pbXBvcnQgSnVtcE9yYiBmcm9tICdAY29tbW9uL2dhbWUvYWN0b3JzL2p1bXBfb3JiL2p1bXBfb3JiLmpzJztcclxuaW1wb3J0IFNwaWtlIGZyb20gJ0Bjb21tb24vZ2FtZS9hY3RvcnMvc3Bpa2Uvc3Bpa2UuanMnO1xyXG5pbXBvcnQgQmFzZUxldmVsRGVzaWduZXJNYW5hZ2VyIGZyb20gJ0BhcHBfc3RhdGVzL2xldmVsX2Rlc2lnbmVyL2Jhc2VfbGV2ZWxfZGVzaWduZXJfbWFuYWdlci5qcyc7XHJcbmltcG9ydCBTdHJpbmdSZXNvdXJjZXMgZnJvbSAnQGNvbW1vbi9zdHJpbmdfcmVzb3VyY2VzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdE1hbmFnZXIgZXh0ZW5kcyBCYXNlTGV2ZWxEZXNpZ25lck1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3Iod29ybGQsIGNhbnZhc1NpemUsIGV2ZW50SGFuZGxlciwgc2VsZWN0aW9uTWFuYWdlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy53b3JsZCA9IHdvcmxkO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IGNhbnZhc1NpemU7XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBldmVudEhhbmRsZXI7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyID0gc2VsZWN0aW9uTWFuYWdlcjtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIub25SZW1vdmVkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVFZGl0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hZGRCcmlja0J1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hZGRKdW1wT3JiQnV0dG9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFkZFNwaWtlQnV0dG9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVkaXRvckNvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5qdW1wT3JiRWRpdG9yQ29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNwaWtlRWRpdG9yQ29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzRWRpdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNKdW1wT3JiRWRpdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNTcGlrZUVkaXRvclZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmRlZmF1bHRXaWR0aCA9IDUwO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdEhlaWdodCA9IDUwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaWRDb3VudGVyID0gMDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhhbmRsZUFkZEJyaWNrID0gdGhpcy5oYW5kbGVBZGRCcmljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQWRkSnVtcE9yYiA9IHRoaXMuaGFuZGxlQWRkSnVtcE9yYi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQWRkU3Bpa2UgPSB0aGlzLmhhbmRsZUFkZFNwaWtlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVCcmlja0lkQ2hhbmdlID0gdGhpcy5oYW5kbGVCcmlja0lkQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVCcmlja1hDaGFuZ2UgPSB0aGlzLmhhbmRsZUJyaWNrWENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQnJpY2tZQ2hhbmdlID0gdGhpcy5oYW5kbGVCcmlja1lDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUJyaWNrV2lkdGhDaGFuZ2UgPSB0aGlzLmhhbmRsZUJyaWNrV2lkdGhDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUJyaWNrSGVpZ2h0Q2hhbmdlID0gdGhpcy5oYW5kbGVCcmlja0hlaWdodENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQnJpY2tCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UgPSB0aGlzLmhhbmRsZUJyaWNrQmFja2dyb3VuZENvbG9yQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVCcmlja1N0cm9rZVdpZHRoQ2hhbmdlID0gdGhpcy5oYW5kbGVCcmlja1N0cm9rZVdpZHRoQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVCcmlja1N0cm9rZUNvbG9yQ2hhbmdlID0gdGhpcy5oYW5kbGVCcmlja1N0cm9rZUNvbG9yQ2hhbmdlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlSnVtcE9yYklkQ2hhbmdlID0gdGhpcy5oYW5kbGVKdW1wT3JiSWRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUp1bXBPcmJYQ2hhbmdlID0gdGhpcy5oYW5kbGVKdW1wT3JiWENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSnVtcE9yYllDaGFuZ2UgPSB0aGlzLmhhbmRsZUp1bXBPcmJZQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVKdW1wT3JiSXNSZXZlcnNlZENoYW5nZSA9IHRoaXMuaGFuZGxlSnVtcE9yYklzUmV2ZXJzZWRDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTcGlrZUlkQ2hhbmdlID0gdGhpcy5oYW5kbGVTcGlrZUlkQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTcGlrZVhDaGFuZ2UgPSB0aGlzLmhhbmRsZVNwaWtlWENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3Bpa2VZQ2hhbmdlID0gdGhpcy5oYW5kbGVTcGlrZVlDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNwaWtlV2lkdGhDaGFuZ2UgPSB0aGlzLmhhbmRsZVNwaWtlV2lkdGhDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNwaWtlSGVpZ2h0Q2hhbmdlID0gdGhpcy5oYW5kbGVTcGlrZUhlaWdodENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3Bpa2VCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UgPSB0aGlzLmhhbmRsZVNwaWtlQmFja2dyb3VuZENvbG9yQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTcGlrZVN0cm9rZVdpZHRoQ2hhbmdlID0gdGhpcy5oYW5kbGVTcGlrZVN0cm9rZVdpZHRoQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTcGlrZVN0cm9rZUNvbG9yQ2hhbmdlID0gdGhpcy5oYW5kbGVTcGlrZVN0cm9rZUNvbG9yQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTcGlrZUlzUmV2ZXJzZWRDaGFuZ2UgPSB0aGlzLmhhbmRsZVNwaWtlSXNSZXZlcnNlZENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY3JlYXRlQWRkQnJpY2tCdXR0b24oKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUFkZEp1bXBPcmJCdXR0b24oKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUFkZFNwaWtlQnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVFZGl0b3JDb250cm9scygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSnVtcE9yYkVkaXRvckNvbnRyb2xzKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVTcGlrZUVkaXRvckNvbnRyb2xzKCk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0V2ZW50SGFuZGxlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZVRvRXZlbnRIYW5kbGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5hZGRPbk1vdXNlRG93bkNhbGxiYWNrKChzZWxlY3RlZE9iamVjdCwgcG9pbnQsIGN0cmxQcmVzc2VkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRPYmplY3Q/LmdldFR5cGUoKSA9PT0gJ0JyaWNrJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VkaXRvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZUp1bXBPcmJFZGl0b3IoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVTcGlrZUVkaXRvcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZE9iamVjdD8uZ2V0VHlwZSgpID09PSAnSnVtcE9yYicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dKdW1wT3JiRWRpdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlRWRpdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlU3Bpa2VFZGl0b3IoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRPYmplY3Q/LmdldFR5cGUoKSA9PT0gJ1NwaWtlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NwaWtlRWRpdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlRWRpdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlSnVtcE9yYkVkaXRvcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVFZGl0b3IoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVKdW1wT3JiRWRpdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlU3Bpa2VFZGl0b3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjcmVhdGVBZGRCcmlja0J1dHRvbigpIHtcclxuICAgICAgICB0aGlzLmFkZEJyaWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5hZGRCcmlja0J1dHRvbi50ZXh0Q29udGVudCA9IFN0cmluZ1Jlc291cmNlcy5BRERfQlJJQ0s7XHJcbiAgICAgICAgdGhpcy5hZGRCcmlja0J1dHRvbi5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMjRweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgYDtcclxuICAgICAgICB0aGlzLmFkZEJyaWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQnJpY2tCdXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjNDVhMDQ5JztcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFkZEJyaWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQnJpY2tCdXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjNENBRjUwJztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkQnJpY2tCdXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQWRkSnVtcE9yYkJ1dHRvbigpIHtcclxuICAgICAgICB0aGlzLmFkZEp1bXBPcmJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICB0aGlzLmFkZEp1bXBPcmJCdXR0b24udGV4dENvbnRlbnQgPSBTdHJpbmdSZXNvdXJjZXMuQUREX0pVTVBfT1JCO1xyXG4gICAgICAgIHRoaXMuYWRkSnVtcE9yYkJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogNzRweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkY5NTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgYDtcclxuICAgICAgICB0aGlzLmFkZEp1bXBPcmJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRKdW1wT3JiQnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnI0U4ODYwQic7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hZGRKdW1wT3JiQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkSnVtcE9yYkJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyNGRjk1MDAnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRKdW1wT3JiQnV0dG9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFkZFNwaWtlQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMuYWRkU3Bpa2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICB0aGlzLmFkZFNwaWtlQnV0dG9uLnRleHRDb250ZW50ID0gU3RyaW5nUmVzb3VyY2VzLkFERF9TUElLRTtcclxuICAgICAgICB0aGlzLmFkZFNwaWtlQnV0dG9uLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAxMjRweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTUzRTNFO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgYDtcclxuICAgICAgICB0aGlzLmFkZFNwaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3Bpa2VCdXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjQzUzMDMwJztcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFkZFNwaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3Bpa2VCdXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjRTUzRTNFJztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkU3Bpa2VCdXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRWRpdG9yQ29udHJvbHMoKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgYm90dG9tOiAyMjBweDtcclxuICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFN0cmluZ1Jlc291cmNlcy5CUklDSztcclxuICAgICAgICB0aXRsZS5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0NDQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgYDtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCBpZEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaWRHcm91cC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMTBweCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgaWRMYWJlbC50ZXh0Q29udGVudCA9IGAke1N0cmluZ1Jlc291cmNlcy5JRH06YDtcclxuICAgICAgICBpZExhYmVsLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgYDtcclxuICAgICAgICBpZEdyb3VwLmFwcGVuZENoaWxkKGlkTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLmlkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuaWRJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgIHRoaXMuaWRJbnB1dC5pZCA9ICdicmlja0lkSW5wdXQnO1xyXG4gICAgICAgIHRoaXMuaWRJbnB1dC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XHJcbiAgICAgICAgYDtcclxuICAgICAgICBpZEdyb3VwLmFwcGVuZENoaWxkKHRoaXMuaWRJbnB1dCk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlkR3JvdXApO1xyXG5cclxuICAgICAgICBjb25zdCBwb3NpdGlvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcG9zaXRpb25Hcm91cC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMTBweCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgcG9zaXRpb25UaXRsZS50ZXh0Q29udGVudCA9IGAke1N0cmluZ1Jlc291cmNlcy5QT1NJVElPTn06YDtcclxuICAgICAgICBwb3NpdGlvblRpdGxlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHBvc2l0aW9uVGl0bGUuc3R5bGUubWFyZ2luQm90dG9tID0gJzVweCc7XHJcbiAgICAgICAgcG9zaXRpb25Hcm91cC5hcHBlbmRDaGlsZChwb3NpdGlvblRpdGxlKTtcclxuXHJcbiAgICAgICAgY29uc3QgeHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB4eUNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB4V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHhXcmFwcGVyLnN0eWxlLmZsZXggPSAnMSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgeExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICB4TGFiZWwudGV4dENvbnRlbnQgPSBgJHtTdHJpbmdSZXNvdXJjZXMuWH06YDtcclxuICAgICAgICB4TGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy54SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMueElucHV0LnR5cGUgPSAnbnVtYmVyJztcclxuICAgICAgICB0aGlzLnhJbnB1dC5zdGVwID0gJzEwJztcclxuICAgICAgICB0aGlzLnhJbnB1dC5pZCA9ICdicmlja1hJbnB1dCc7XHJcbiAgICAgICAgdGhpcy54SW5wdXQuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgeFdyYXBwZXIuYXBwZW5kQ2hpbGQoeExhYmVsKTtcclxuICAgICAgICB4V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnhJbnB1dCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgeVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB5V3JhcHBlci5zdHlsZS5mbGV4ID0gJzEnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgeUxhYmVsLnRleHRDb250ZW50ID0gYCR7U3RyaW5nUmVzb3VyY2VzLll9OmA7XHJcbiAgICAgICAgeUxhYmVsLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMueUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnlJbnB1dC50eXBlID0gJ251bWJlcic7XHJcbiAgICAgICAgdGhpcy55SW5wdXQuc3RlcCA9ICcxMCc7XHJcbiAgICAgICAgdGhpcy55SW5wdXQuaWQgPSAnYnJpY2tZSW5wdXQnO1xyXG4gICAgICAgIHRoaXMueUlucHV0LnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHlXcmFwcGVyLmFwcGVuZENoaWxkKHlMYWJlbCk7XHJcbiAgICAgICAgeVdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy55SW5wdXQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHh5Q29udGFpbmVyLmFwcGVuZENoaWxkKHhXcmFwcGVyKTtcclxuICAgICAgICB4eUNvbnRhaW5lci5hcHBlbmRDaGlsZCh5V3JhcHBlcik7XHJcbiAgICAgICAgcG9zaXRpb25Hcm91cC5hcHBlbmRDaGlsZCh4eUNvbnRhaW5lcik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBvc2l0aW9uR3JvdXApO1xyXG5cclxuICAgICAgICBjb25zdCBzaXplR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzaXplR3JvdXAuc3R5bGUubWFyZ2luQm90dG9tID0gJzEwcHgnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNpemVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgc2l6ZVRpdGxlLnRleHRDb250ZW50ID0gYCR7U3RyaW5nUmVzb3VyY2VzLlNJWkV9OmA7XHJcbiAgICAgICAgc2l6ZVRpdGxlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHNpemVUaXRsZS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnNXB4JztcclxuICAgICAgICBzaXplR3JvdXAuYXBwZW5kQ2hpbGQoc2l6ZVRpdGxlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgd2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3aENvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB3aWR0aFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3aWR0aFdyYXBwZXIuc3R5bGUuZmxleCA9ICcxJztcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB3aWR0aExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICB3aWR0aExhYmVsLnRleHRDb250ZW50ID0gYCR7U3RyaW5nUmVzb3VyY2VzLldJRFRIfTpgO1xyXG4gICAgICAgIHdpZHRoTGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy53aWR0aElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLndpZHRoSW5wdXQudHlwZSA9ICdudW1iZXInO1xyXG4gICAgICAgIHRoaXMud2lkdGhJbnB1dC5zdGVwID0gJzEwJztcclxuICAgICAgICB0aGlzLndpZHRoSW5wdXQubWluID0gJzEwJztcclxuICAgICAgICB0aGlzLndpZHRoSW5wdXQuaWQgPSAnYnJpY2tXaWR0aElucHV0JztcclxuICAgICAgICB0aGlzLndpZHRoSW5wdXQuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2lkdGhXcmFwcGVyLmFwcGVuZENoaWxkKHdpZHRoTGFiZWwpO1xyXG4gICAgICAgIHdpZHRoV3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLndpZHRoSW5wdXQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhlaWdodFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZWlnaHRXcmFwcGVyLnN0eWxlLmZsZXggPSAnMSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaGVpZ2h0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGhlaWdodExhYmVsLnRleHRDb250ZW50ID0gYCR7U3RyaW5nUmVzb3VyY2VzLkhFSUdIVH06YDtcclxuICAgICAgICBoZWlnaHRMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhlaWdodElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLmhlaWdodElucHV0LnR5cGUgPSAnbnVtYmVyJztcclxuICAgICAgICB0aGlzLmhlaWdodElucHV0LnN0ZXAgPSAnMTAnO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0SW5wdXQubWluID0gJzEwJztcclxuICAgICAgICB0aGlzLmhlaWdodElucHV0LmlkID0gJ2JyaWNrSGVpZ2h0SW5wdXQnO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0SW5wdXQuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaGVpZ2h0V3JhcHBlci5hcHBlbmRDaGlsZChoZWlnaHRMYWJlbCk7XHJcbiAgICAgICAgaGVpZ2h0V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmhlaWdodElucHV0KTtcclxuICAgICAgICBcclxuICAgICAgICB3aENvbnRhaW5lci5hcHBlbmRDaGlsZCh3aWR0aFdyYXBwZXIpO1xyXG4gICAgICAgIHdoQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlaWdodFdyYXBwZXIpO1xyXG4gICAgICAgIHNpemVHcm91cC5hcHBlbmRDaGlsZCh3aENvbnRhaW5lcik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpemVHcm91cCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yR3JvdXAuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JMYWJlbC50ZXh0Q29udGVudCA9IGAke1N0cmluZ1Jlc291cmNlcy5CQUNLR1JPVU5EfTpgO1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvckxhYmVsLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvckdyb3VwLmFwcGVuZENoaWxkKGJhY2tncm91bmRDb2xvckxhYmVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3JJbnB1dC50eXBlID0gJ2NvbG9yJztcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvcklucHV0LmlkID0gJ2JyaWNrQmFja2dyb3VuZENvbG9ySW5wdXQnO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9ySW5wdXQuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5iYWNrZ3JvdW5kQ29sb3JJbnB1dCk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tncm91bmRDb2xvckdyb3VwKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3Ryb2tlR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzdHJva2VHcm91cC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMTBweCc7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0cm9rZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBzdHJva2VUaXRsZS50ZXh0Q29udGVudCA9IGAke1N0cmluZ1Jlc291cmNlcy5TVFJPS0V9OmA7XHJcbiAgICAgICAgc3Ryb2tlVGl0bGUuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIHN0cm9rZUdyb3VwLmFwcGVuZENoaWxkKHN0cm9rZVRpdGxlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3Ryb2tlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc3Ryb2tlQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBjb25zdCBzdHJva2VXaWR0aFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzdHJva2VXaWR0aFdyYXBwZXIuc3R5bGUuZmxleCA9ICcxJztcclxuXHJcbiAgICAgICAgY29uc3Qgc3Ryb2tlV2lkdGhMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgc3Ryb2tlV2lkdGhMYWJlbC50ZXh0Q29udGVudCA9IGAke1N0cmluZ1Jlc291cmNlcy5XSURUSH06YDtcclxuICAgICAgICBzdHJva2VXaWR0aExhYmVsLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIHN0cm9rZVdpZHRoV3JhcHBlci5hcHBlbmRDaGlsZChzdHJva2VXaWR0aExhYmVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdHJva2VXaWR0aElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnN0cm9rZVdpZHRoSW5wdXQudHlwZSA9ICdudW1iZXInO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlV2lkdGhJbnB1dC5zdGVwID0gJzEnO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlV2lkdGhJbnB1dC5taW4gPSAnMCc7XHJcbiAgICAgICAgdGhpcy5zdHJva2VXaWR0aElucHV0Lm1heCA9ICcyMCc7XHJcbiAgICAgICAgdGhpcy5zdHJva2VXaWR0aElucHV0LmlkID0gJ2JyaWNrU3Ryb2tlV2lkdGhJbnB1dCc7XHJcbiAgICAgICAgdGhpcy5zdHJva2VXaWR0aElucHV0LnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxuICAgICAgICBgO1xyXG4gICAgICAgIHN0cm9rZVdpZHRoV3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnN0cm9rZVdpZHRoSW5wdXQpO1xyXG5cclxuICAgICAgICBjb25zdCBzdHJva2VDb2xvcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzdHJva2VDb2xvcldyYXBwZXIuc3R5bGUuZmxleCA9ICcxJztcclxuXHJcbiAgICAgICAgY29uc3Qgc3Ryb2tlQ29sb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgc3Ryb2tlQ29sb3JMYWJlbC50ZXh0Q29udGVudCA9ICdDb2xvcjonO1xyXG4gICAgICAgIHN0cm9rZUNvbG9yTGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgc3Ryb2tlQ29sb3JXcmFwcGVyLmFwcGVuZENoaWxkKHN0cm9rZUNvbG9yTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLnN0cm9rZUNvbG9ySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlQ29sb3JJbnB1dC50eXBlID0gJ2NvbG9yJztcclxuICAgICAgICB0aGlzLnN0cm9rZUNvbG9ySW5wdXQuaWQgPSAnYnJpY2tTdHJva2VDb2xvcklucHV0JztcclxuICAgICAgICB0aGlzLnN0cm9rZUNvbG9ySW5wdXQuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgc3Ryb2tlQ29sb3JXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuc3Ryb2tlQ29sb3JJbnB1dCk7XHJcblxyXG4gICAgICAgIHN0cm9rZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdHJva2VXaWR0aFdyYXBwZXIpO1xyXG4gICAgICAgIHN0cm9rZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdHJva2VDb2xvcldyYXBwZXIpO1xyXG4gICAgICAgIHN0cm9rZUdyb3VwLmFwcGVuZENoaWxkKHN0cm9rZUNvbnRhaW5lcik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN0cm9rZUdyb3VwKTtcclxuXHJcbiAgICAgICAgdGhpcy5lZGl0b3JDb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSnVtcE9yYkVkaXRvckNvbnRyb2xzKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMjIwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNDksIDAsIDAuOSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gU3RyaW5nUmVzb3VyY2VzLkpVTVBfT1JCO1xyXG4gICAgICAgIHRpdGxlLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlkR3JvdXAuc3R5bGUubWFyZ2luQm90dG9tID0gJzEwcHgnO1xyXG5cclxuICAgICAgICBjb25zdCBpZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBpZExhYmVsLnRleHRDb250ZW50ID0gYCR7U3RyaW5nUmVzb3VyY2VzLklEfTpgO1xyXG4gICAgICAgIGlkTGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIGlkR3JvdXAuYXBwZW5kQ2hpbGQoaWRMYWJlbCk7XHJcblxyXG4gICAgICAgIHRoaXMuanVtcE9yYklkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuanVtcE9yYklkSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgICAgICB0aGlzLmp1bXBPcmJJZElucHV0LmlkID0gJ2p1bXBPcmJJZElucHV0JztcclxuICAgICAgICB0aGlzLmp1bXBPcmJJZElucHV0LnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgYDtcclxuICAgICAgICBpZEdyb3VwLmFwcGVuZENoaWxkKHRoaXMuanVtcE9yYklkSW5wdXQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpZEdyb3VwKTtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBvc2l0aW9uR3JvdXAuc3R5bGUubWFyZ2luQm90dG9tID0gJzEwcHgnO1xyXG5cclxuICAgICAgICBjb25zdCBwb3NpdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBwb3NpdGlvblRpdGxlLnRleHRDb250ZW50ID0gYCR7U3RyaW5nUmVzb3VyY2VzLlBPU0lUSU9OfTpgO1xyXG4gICAgICAgIHBvc2l0aW9uVGl0bGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgcG9zaXRpb25UaXRsZS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnNXB4JztcclxuICAgICAgICBwb3NpdGlvbkdyb3VwLmFwcGVuZENoaWxkKHBvc2l0aW9uVGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCB4eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHh5Q29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBjb25zdCB4V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHhXcmFwcGVyLnN0eWxlLmZsZXggPSAnMSc7XHJcblxyXG4gICAgICAgIGNvbnN0IHhMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgeExhYmVsLnRleHRDb250ZW50ID0gYCR7U3RyaW5nUmVzb3VyY2VzLlh9OmA7XHJcbiAgICAgICAgeExhYmVsLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLmp1bXBPcmJYSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuanVtcE9yYlhJbnB1dC50eXBlID0gJ251bWJlcic7XHJcbiAgICAgICAgdGhpcy5qdW1wT3JiWElucHV0LnN0ZXAgPSAnMTAnO1xyXG4gICAgICAgIHRoaXMuanVtcE9yYlhJbnB1dC5pZCA9ICdqdW1wT3JiWElucHV0JztcclxuICAgICAgICB0aGlzLmp1bXBPcmJYSW5wdXQuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB4V3JhcHBlci5hcHBlbmRDaGlsZCh4TGFiZWwpO1xyXG4gICAgICAgIHhXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuanVtcE9yYlhJbnB1dCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgeVdyYXBwZXIuc3R5bGUuZmxleCA9ICcxJztcclxuXHJcbiAgICAgICAgY29uc3QgeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICB5TGFiZWwudGV4dENvbnRlbnQgPSBgJHtTdHJpbmdSZXNvdXJjZXMuWX06YDtcclxuICAgICAgICB5TGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHRoaXMuanVtcE9yYllJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5qdW1wT3JiWUlucHV0LnR5cGUgPSAnbnVtYmVyJztcclxuICAgICAgICB0aGlzLmp1bXBPcmJZSW5wdXQuc3RlcCA9ICcxMCc7XHJcbiAgICAgICAgdGhpcy5qdW1wT3JiWUlucHV0LmlkID0gJ2p1bXBPcmJZSW5wdXQnO1xyXG4gICAgICAgIHRoaXMuanVtcE9yYllJbnB1dC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHlXcmFwcGVyLmFwcGVuZENoaWxkKHlMYWJlbCk7XHJcbiAgICAgICAgeVdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5qdW1wT3JiWUlucHV0KTtcclxuXHJcbiAgICAgICAgeHlDb250YWluZXIuYXBwZW5kQ2hpbGQoeFdyYXBwZXIpO1xyXG4gICAgICAgIHh5Q29udGFpbmVyLmFwcGVuZENoaWxkKHlXcmFwcGVyKTtcclxuICAgICAgICBwb3NpdGlvbkdyb3VwLmFwcGVuZENoaWxkKHh5Q29udGFpbmVyKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocG9zaXRpb25Hcm91cCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJldmVyc2VkR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICByZXZlcnNlZEdyb3VwLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxMHB4JztcclxuXHJcbiAgICAgICAgY29uc3QgcmV2ZXJzZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcmV2ZXJzZWRDaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgICByZXZlcnNlZENoZWNrYm94LmlkID0gJ2p1bXBPcmJJc1JldmVyc2VkSW5wdXQnO1xyXG4gICAgICAgIHJldmVyc2VkQ2hlY2tib3guc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgY29uc3QgcmV2ZXJzZWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgcmV2ZXJzZWRMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYDtcclxuICAgICAgICByZXZlcnNlZExhYmVsLmFwcGVuZENoaWxkKHJldmVyc2VkQ2hlY2tib3gpO1xyXG4gICAgICAgIHJldmVyc2VkTGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nUmVzb3VyY2VzLlJFVkVSU0VEKSk7XHJcblxyXG4gICAgICAgIHJldmVyc2VkR3JvdXAuYXBwZW5kQ2hpbGQocmV2ZXJzZWRMYWJlbCk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJldmVyc2VkR3JvdXApO1xyXG5cclxuICAgICAgICB0aGlzLmp1bXBPcmJJc1JldmVyc2VkSW5wdXQgPSByZXZlcnNlZENoZWNrYm94O1xyXG4gICAgICAgIHRoaXMuanVtcE9yYkVkaXRvckNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTcGlrZUVkaXRvckNvbnRyb2xzKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMjIwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjI5LCA2MiwgNjIsIDAuOSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gU3RyaW5nUmVzb3VyY2VzLlNQSUtFO1xyXG4gICAgICAgIHRpdGxlLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlkR3JvdXAuc3R5bGUubWFyZ2luQm90dG9tID0gJzEwcHgnO1xyXG5cclxuICAgICAgICBjb25zdCBpZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBpZExhYmVsLnRleHRDb250ZW50ID0gYCR7U3RyaW5nUmVzb3VyY2VzLklEfTpgO1xyXG4gICAgICAgIGlkTGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIGlkR3JvdXAuYXBwZW5kQ2hpbGQoaWRMYWJlbCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Bpa2VJZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnNwaWtlSWRJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VJZElucHV0LmlkID0gJ3NwaWtlSWRJbnB1dCc7XHJcbiAgICAgICAgdGhpcy5zcGlrZUlkSW5wdXQuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICBgO1xyXG4gICAgICAgIGlkR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5zcGlrZUlkSW5wdXQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpZEdyb3VwKTtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBvc2l0aW9uR3JvdXAuc3R5bGUubWFyZ2luQm90dG9tID0gJzEwcHgnO1xyXG5cclxuICAgICAgICBjb25zdCBwb3NpdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBwb3NpdGlvblRpdGxlLnRleHRDb250ZW50ID0gYCR7U3RyaW5nUmVzb3VyY2VzLlBPU0lUSU9OfTpgO1xyXG4gICAgICAgIHBvc2l0aW9uVGl0bGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgcG9zaXRpb25UaXRsZS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnNXB4JztcclxuICAgICAgICBwb3NpdGlvbkdyb3VwLmFwcGVuZENoaWxkKHBvc2l0aW9uVGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCB4eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHh5Q29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBjb25zdCB4V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHhXcmFwcGVyLnN0eWxlLmZsZXggPSAnMSc7XHJcblxyXG4gICAgICAgIGNvbnN0IHhMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgeExhYmVsLnRleHRDb250ZW50ID0gYCR7U3RyaW5nUmVzb3VyY2VzLlh9OmA7XHJcbiAgICAgICAgeExhYmVsLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLnNwaWtlWElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnNwaWtlWElucHV0LnR5cGUgPSAnbnVtYmVyJztcclxuICAgICAgICB0aGlzLnNwaWtlWElucHV0LnN0ZXAgPSAnMTAnO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VYSW5wdXQuaWQgPSAnc3Bpa2VYSW5wdXQnO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VYSW5wdXQuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB4V3JhcHBlci5hcHBlbmRDaGlsZCh4TGFiZWwpO1xyXG4gICAgICAgIHhXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuc3Bpa2VYSW5wdXQpO1xyXG5cclxuICAgICAgICBjb25zdCB5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHlXcmFwcGVyLnN0eWxlLmZsZXggPSAnMSc7XHJcblxyXG4gICAgICAgIGNvbnN0IHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgeUxhYmVsLnRleHRDb250ZW50ID0gYCR7U3RyaW5nUmVzb3VyY2VzLll9OmA7XHJcbiAgICAgICAgeUxhYmVsLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLnNwaWtlWUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnNwaWtlWUlucHV0LnR5cGUgPSAnbnVtYmVyJztcclxuICAgICAgICB0aGlzLnNwaWtlWUlucHV0LnN0ZXAgPSAnMTAnO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VZSW5wdXQuaWQgPSAnc3Bpa2VZSW5wdXQnO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VZSW5wdXQuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB5V3JhcHBlci5hcHBlbmRDaGlsZCh5TGFiZWwpO1xyXG4gICAgICAgIHlXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuc3Bpa2VZSW5wdXQpO1xyXG5cclxuICAgICAgICB4eUNvbnRhaW5lci5hcHBlbmRDaGlsZCh4V3JhcHBlcik7XHJcbiAgICAgICAgeHlDb250YWluZXIuYXBwZW5kQ2hpbGQoeVdyYXBwZXIpO1xyXG4gICAgICAgIHBvc2l0aW9uR3JvdXAuYXBwZW5kQ2hpbGQoeHlDb250YWluZXIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwb3NpdGlvbkdyb3VwKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2l6ZUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2l6ZUdyb3VwLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxMHB4JztcclxuXHJcbiAgICAgICAgY29uc3Qgc2l6ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBzaXplVGl0bGUudGV4dENvbnRlbnQgPSBgJHtTdHJpbmdSZXNvdXJjZXMuU0laRX06YDtcclxuICAgICAgICBzaXplVGl0bGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgc2l6ZVRpdGxlLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICc1cHgnO1xyXG4gICAgICAgIHNpemVHcm91cC5hcHBlbmRDaGlsZChzaXplVGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCB3aENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdoQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBjb25zdCB3aWR0aFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3aWR0aFdyYXBwZXIuc3R5bGUuZmxleCA9ICcxJztcclxuXHJcbiAgICAgICAgY29uc3Qgd2lkdGhMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgd2lkdGhMYWJlbC50ZXh0Q29udGVudCA9IGAke1N0cmluZ1Jlc291cmNlcy5XSURUSH06YDtcclxuICAgICAgICB3aWR0aExhYmVsLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLnNwaWtlV2lkdGhJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5zcGlrZVdpZHRoSW5wdXQudHlwZSA9ICdudW1iZXInO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VXaWR0aElucHV0LnN0ZXAgPSAnMTAnO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VXaWR0aElucHV0Lm1pbiA9ICcxMCc7XHJcbiAgICAgICAgdGhpcy5zcGlrZVdpZHRoSW5wdXQuaWQgPSAnc3Bpa2VXaWR0aElucHV0JztcclxuICAgICAgICB0aGlzLnNwaWtlV2lkdGhJbnB1dC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHdpZHRoV3JhcHBlci5hcHBlbmRDaGlsZCh3aWR0aExhYmVsKTtcclxuICAgICAgICB3aWR0aFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5zcGlrZVdpZHRoSW5wdXQpO1xyXG5cclxuICAgICAgICBjb25zdCBoZWlnaHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaGVpZ2h0V3JhcHBlci5zdHlsZS5mbGV4ID0gJzEnO1xyXG5cclxuICAgICAgICBjb25zdCBoZWlnaHRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgaGVpZ2h0TGFiZWwudGV4dENvbnRlbnQgPSBgJHtTdHJpbmdSZXNvdXJjZXMuSEVJR0hUfTpgO1xyXG4gICAgICAgIGhlaWdodExhYmVsLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLnNwaWtlSGVpZ2h0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VIZWlnaHRJbnB1dC50eXBlID0gJ251bWJlcic7XHJcbiAgICAgICAgdGhpcy5zcGlrZUhlaWdodElucHV0LnN0ZXAgPSAnMTAnO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VIZWlnaHRJbnB1dC5taW4gPSAnMTAnO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VIZWlnaHRJbnB1dC5pZCA9ICdzcGlrZUhlaWdodElucHV0JztcclxuICAgICAgICB0aGlzLnNwaWtlSGVpZ2h0SW5wdXQuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBoZWlnaHRXcmFwcGVyLmFwcGVuZENoaWxkKGhlaWdodExhYmVsKTtcclxuICAgICAgICBoZWlnaHRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuc3Bpa2VIZWlnaHRJbnB1dCk7XHJcblxyXG4gICAgICAgIHdoQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpZHRoV3JhcHBlcik7XHJcbiAgICAgICAgd2hDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVpZ2h0V3JhcHBlcik7XHJcbiAgICAgICAgc2l6ZUdyb3VwLmFwcGVuZENoaWxkKHdoQ29udGFpbmVyKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2l6ZUdyb3VwKTtcclxuXHJcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZENvbG9yR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JHcm91cC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JMYWJlbC50ZXh0Q29udGVudCA9IGAke1N0cmluZ1Jlc291cmNlcy5CQUNLR1JPVU5EfTpgO1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvckxhYmVsLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvckdyb3VwLmFwcGVuZENoaWxkKGJhY2tncm91bmRDb2xvckxhYmVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcGlrZUJhY2tncm91bmRDb2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnNwaWtlQmFja2dyb3VuZENvbG9ySW5wdXQudHlwZSA9ICdjb2xvcic7XHJcbiAgICAgICAgdGhpcy5zcGlrZUJhY2tncm91bmRDb2xvcklucHV0LmlkID0gJ3NwaWtlQmFja2dyb3VuZENvbG9ySW5wdXQnO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VCYWNrZ3JvdW5kQ29sb3JJbnB1dC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5zcGlrZUJhY2tncm91bmRDb2xvcklucHV0KTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZENvbG9yR3JvdXApO1xyXG5cclxuICAgICAgICBjb25zdCBzdHJva2VHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHN0cm9rZUdyb3VwLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxMHB4JztcclxuXHJcbiAgICAgICAgY29uc3Qgc3Ryb2tlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIHN0cm9rZVRpdGxlLnRleHRDb250ZW50ID0gYCR7U3RyaW5nUmVzb3VyY2VzLlNUUk9LRX06YDtcclxuICAgICAgICBzdHJva2VUaXRsZS5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgc3Ryb2tlR3JvdXAuYXBwZW5kQ2hpbGQoc3Ryb2tlVGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCBzdHJva2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzdHJva2VDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0cm9rZVdpZHRoV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHN0cm9rZVdpZHRoV3JhcHBlci5zdHlsZS5mbGV4ID0gJzEnO1xyXG5cclxuICAgICAgICBjb25zdCBzdHJva2VXaWR0aExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBzdHJva2VXaWR0aExhYmVsLnRleHRDb250ZW50ID0gYCR7U3RyaW5nUmVzb3VyY2VzLldJRFRIfTpgO1xyXG4gICAgICAgIHN0cm9rZVdpZHRoTGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgc3Ryb2tlV2lkdGhXcmFwcGVyLmFwcGVuZENoaWxkKHN0cm9rZVdpZHRoTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLnNwaWtlU3Ryb2tlV2lkdGhJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5zcGlrZVN0cm9rZVdpZHRoSW5wdXQudHlwZSA9ICdudW1iZXInO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VTdHJva2VXaWR0aElucHV0LnN0ZXAgPSAnMSc7XHJcbiAgICAgICAgdGhpcy5zcGlrZVN0cm9rZVdpZHRoSW5wdXQubWluID0gJzAnO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VTdHJva2VXaWR0aElucHV0Lm1heCA9ICcyMCc7XHJcbiAgICAgICAgdGhpcy5zcGlrZVN0cm9rZVdpZHRoSW5wdXQuaWQgPSAnc3Bpa2VTdHJva2VXaWR0aElucHV0JztcclxuICAgICAgICB0aGlzLnNwaWtlU3Ryb2tlV2lkdGhJbnB1dC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgc3Ryb2tlV2lkdGhXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuc3Bpa2VTdHJva2VXaWR0aElucHV0KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3Ryb2tlQ29sb3JXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc3Ryb2tlQ29sb3JXcmFwcGVyLnN0eWxlLmZsZXggPSAnMSc7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0cm9rZUNvbG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIHN0cm9rZUNvbG9yTGFiZWwudGV4dENvbnRlbnQgPSAnQ29sb3I6JztcclxuICAgICAgICBzdHJva2VDb2xvckxhYmVsLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIHN0cm9rZUNvbG9yV3JhcHBlci5hcHBlbmRDaGlsZChzdHJva2VDb2xvckxhYmVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcGlrZVN0cm9rZUNvbG9ySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VTdHJva2VDb2xvcklucHV0LnR5cGUgPSAnY29sb3InO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VTdHJva2VDb2xvcklucHV0LmlkID0gJ3NwaWtlU3Ryb2tlQ29sb3JJbnB1dCc7XHJcbiAgICAgICAgdGhpcy5zcGlrZVN0cm9rZUNvbG9ySW5wdXQuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBgO1xyXG4gICAgICAgIHN0cm9rZUNvbG9yV3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnNwaWtlU3Ryb2tlQ29sb3JJbnB1dCk7XHJcblxyXG4gICAgICAgIHN0cm9rZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdHJva2VXaWR0aFdyYXBwZXIpO1xyXG4gICAgICAgIHN0cm9rZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdHJva2VDb2xvcldyYXBwZXIpO1xyXG4gICAgICAgIHN0cm9rZUdyb3VwLmFwcGVuZENoaWxkKHN0cm9rZUNvbnRhaW5lcik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN0cm9rZUdyb3VwKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmV2ZXJzZWRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHJldmVyc2VkR3JvdXAuc3R5bGUubWFyZ2luQm90dG9tID0gJzEwcHgnO1xyXG5cclxuICAgICAgICBjb25zdCByZXZlcnNlZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICByZXZlcnNlZENoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgICAgIHJldmVyc2VkQ2hlY2tib3guaWQgPSAnc3Bpa2VJc1JldmVyc2VkSW5wdXQnO1xyXG4gICAgICAgIHJldmVyc2VkQ2hlY2tib3guc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgY29uc3QgcmV2ZXJzZWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgcmV2ZXJzZWRMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYDtcclxuICAgICAgICByZXZlcnNlZExhYmVsLmFwcGVuZENoaWxkKHJldmVyc2VkQ2hlY2tib3gpO1xyXG4gICAgICAgIHJldmVyc2VkTGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nUmVzb3VyY2VzLlJFVkVSU0VEKSk7XHJcblxyXG4gICAgICAgIHJldmVyc2VkR3JvdXAuYXBwZW5kQ2hpbGQocmV2ZXJzZWRMYWJlbCk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJldmVyc2VkR3JvdXApO1xyXG5cclxuICAgICAgICB0aGlzLnNwaWtlSXNSZXZlcnNlZElucHV0ID0gcmV2ZXJzZWRDaGVja2JveDtcclxuICAgICAgICB0aGlzLnNwaWtlRWRpdG9yQ29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQnJpY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUFkZEJyaWNrKTtcclxuICAgICAgICB0aGlzLmFkZEp1bXBPcmJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUFkZEp1bXBPcmIpO1xyXG4gICAgICAgIHRoaXMuYWRkU3Bpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUFkZFNwaWtlKTtcclxuICAgICAgICB0aGlzLmlkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVCcmlja0lkQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLnhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUJyaWNrWENoYW5nZSk7XHJcbiAgICAgICAgdGhpcy55SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVCcmlja1lDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMud2lkdGhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUJyaWNrV2lkdGhDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVCcmlja0hlaWdodENoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUJyaWNrQmFja2dyb3VuZENvbG9yQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLnN0cm9rZVdpZHRoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVCcmlja1N0cm9rZVdpZHRoQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLnN0cm9rZUNvbG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVCcmlja1N0cm9rZUNvbG9yQ2hhbmdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5qdW1wT3JiSWRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUp1bXBPcmJJZENoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5qdW1wT3JiWElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlSnVtcE9yYlhDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMuanVtcE9yYllJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUp1bXBPcmJZQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLmp1bXBPcmJJc1JldmVyc2VkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVKdW1wT3JiSXNSZXZlcnNlZENoYW5nZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Bpa2VJZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlU3Bpa2VJZENoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5zcGlrZVhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVNwaWtlWENoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5zcGlrZVlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVNwaWtlWUNoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5zcGlrZVdpZHRoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVTcGlrZVdpZHRoQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLnNwaWtlSGVpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVTcGlrZUhlaWdodENoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5zcGlrZUJhY2tncm91bmRDb2xvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlU3Bpa2VCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VTdHJva2VXaWR0aElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlU3Bpa2VTdHJva2VXaWR0aENoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5zcGlrZVN0cm9rZUNvbG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVTcGlrZVN0cm9rZUNvbG9yQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLnNwaWtlSXNSZXZlcnNlZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlU3Bpa2VJc1JldmVyc2VkQ2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2hFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLmFkZEJyaWNrQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVBZGRCcmljayk7XHJcbiAgICAgICAgdGhpcy5hZGRKdW1wT3JiQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVBZGRKdW1wT3JiKTtcclxuICAgICAgICB0aGlzLmFkZFNwaWtlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVBZGRTcGlrZSk7XHJcblxyXG4gICAgICAgIHRoaXMuaWRJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUJyaWNrSWRDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMueElucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQnJpY2tYQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLnlJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUJyaWNrWUNoYW5nZSk7XHJcbiAgICAgICAgdGhpcy53aWR0aElucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQnJpY2tXaWR0aENoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHRJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUJyaWNrSGVpZ2h0Q2hhbmdlKTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvcklucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQnJpY2tCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlV2lkdGhJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUJyaWNrU3Ryb2tlV2lkdGhDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlQ29sb3JJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUJyaWNrU3Ryb2tlQ29sb3JDaGFuZ2UpO1xyXG5cclxuICAgICAgICB0aGlzLmp1bXBPcmJJZElucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlSnVtcE9yYklkQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLmp1bXBPcmJYSW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVKdW1wT3JiWENoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5qdW1wT3JiWUlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlSnVtcE9yYllDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMuanVtcE9yYklzUmV2ZXJzZWRJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUp1bXBPcmJJc1JldmVyc2VkQ2hhbmdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcGlrZUlkSW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVTcGlrZUlkQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLnNwaWtlWElucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlU3Bpa2VYQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLnNwaWtlWUlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlU3Bpa2VZQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLnNwaWtlV2lkdGhJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVNwaWtlV2lkdGhDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VIZWlnaHRJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVNwaWtlSGVpZ2h0Q2hhbmdlKTtcclxuICAgICAgICB0aGlzLnNwaWtlQmFja2dyb3VuZENvbG9ySW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVTcGlrZUJhY2tncm91bmRDb2xvckNoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5zcGlrZVN0cm9rZVdpZHRoSW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVTcGlrZVN0cm9rZVdpZHRoQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLnNwaWtlU3Ryb2tlQ29sb3JJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVNwaWtlU3Ryb2tlQ29sb3JDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VJc1JldmVyc2VkSW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVTcGlrZUlzUmV2ZXJzZWRDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUlucHV0VmFsdWVzKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT2JqZWN0cyA9IHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zZWxlY3Rpb24ub2JqZWN0cztcclxuICAgICAgICBpZiAoc2VsZWN0ZWRPYmplY3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQnJpY2sgPSBzZWxlY3RlZE9iamVjdHNbMF07XHJcbiAgICAgICAgdGhpcy5pZElucHV0LnZhbHVlID0gc2VsZWN0ZWRCcmljay5pZCB8fCAnJztcclxuICAgICAgICB0aGlzLnhJbnB1dC52YWx1ZSA9IE1hdGgucm91bmQoc2VsZWN0ZWRCcmljay5jb29yZHMueCk7XHJcbiAgICAgICAgdGhpcy55SW5wdXQudmFsdWUgPSBNYXRoLnJvdW5kKHNlbGVjdGVkQnJpY2suY29vcmRzLnkpO1xyXG4gICAgICAgIHRoaXMud2lkdGhJbnB1dC52YWx1ZSA9IHNlbGVjdGVkQnJpY2suc2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodElucHV0LnZhbHVlID0gc2VsZWN0ZWRCcmljay5zaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvcklucHV0LnZhbHVlID0gc2VsZWN0ZWRCcmljay5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNmZmZmZmYnO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlV2lkdGhJbnB1dC52YWx1ZSA9IHNlbGVjdGVkQnJpY2suc3Ryb2tlV2lkdGggfHwgMDtcclxuICAgICAgICB0aGlzLnN0cm9rZUNvbG9ySW5wdXQudmFsdWUgPSBzZWxlY3RlZEJyaWNrLnN0cm9rZUNvbG9yIHx8ICcjMDAwMDAwJztcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBZGRCcmljaygpIHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZGVmYXVsdFdpZHRoO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZGVmYXVsdEhlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IHRoaXMuY2FudmFzU2l6ZS53aWR0aCAvIDIgLSB3aWR0aCAvIDI7XHJcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLyAyIC0gaGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgICAgY29uc3Qgcm91bmRlZFggPSBNYXRoLnJvdW5kKGNlbnRlclggLyAxMCkgKiAxMDtcclxuICAgICAgICBjb25zdCByb3VuZGVkWSA9IE1hdGgucm91bmQoY2VudGVyWSAvIDEwKSAqIDEwO1xyXG5cclxuICAgICAgICBjb25zdCBicmlja0lkID0gYGJyaWNrLSR7Kyt0aGlzLmlkQ291bnRlcn1gO1xyXG5cclxuICAgICAgICBjb25zdCBicmlja0Nvb3JkcyA9IG5ldyBQb2ludChyb3VuZGVkWCwgcm91bmRlZFkpO1xyXG4gICAgICAgIGNvbnN0IGJyaWNrU2l6ZSA9IG5ldyBTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IG5ld0JyaWNrID0gbmV3IEJyaWNrKGJyaWNrSWQsIGJyaWNrQ29vcmRzLCBicmlja1NpemUpO1xyXG5cclxuICAgICAgICB0aGlzLndvcmxkLmJyaWNrcy5wdXNoKG5ld0JyaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBZGRKdW1wT3JiKCkge1xyXG4gICAgICAgIGNvbnN0IGNlbnRlclggPSB0aGlzLmNhbnZhc1NpemUud2lkdGggLyAyIC0gMTU7XHJcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLyAyIC0gMTU7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvdW5kZWRYID0gTWF0aC5yb3VuZChjZW50ZXJYIC8gMTApICogMTA7XHJcbiAgICAgICAgY29uc3Qgcm91bmRlZFkgPSBNYXRoLnJvdW5kKGNlbnRlclkgLyAxMCkgKiAxMDtcclxuXHJcbiAgICAgICAgY29uc3QganVtcE9yYklkID0gYGp1bXAtb3JiLSR7Kyt0aGlzLmlkQ291bnRlcn1gO1xyXG5cclxuICAgICAgICBjb25zdCBqdW1wT3JiQ29vcmRzID0gbmV3IFBvaW50KHJvdW5kZWRYLCByb3VuZGVkWSk7XHJcbiAgICAgICAgY29uc3QgbmV3SnVtcE9yYiA9IG5ldyBKdW1wT3JiKGp1bXBPcmJJZCwganVtcE9yYkNvb3JkcywgZmFsc2UpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMud29ybGQuanVtcE9yYnMpIHtcclxuICAgICAgICAgICAgdGhpcy53b3JsZC5qdW1wT3JicyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndvcmxkLmp1bXBPcmJzLnB1c2gobmV3SnVtcE9yYik7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQWRkU3Bpa2UoKSB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmRlZmF1bHRXaWR0aDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmRlZmF1bHRIZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbnRlclggPSB0aGlzLmNhbnZhc1NpemUud2lkdGggLyAyIC0gd2lkdGggLyAyO1xyXG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0IC8gMiAtIGhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvdW5kZWRYID0gTWF0aC5yb3VuZChjZW50ZXJYIC8gMTApICogMTA7XHJcbiAgICAgICAgY29uc3Qgcm91bmRlZFkgPSBNYXRoLnJvdW5kKGNlbnRlclkgLyAxMCkgKiAxMDtcclxuXHJcbiAgICAgICAgY29uc3Qgc3Bpa2VJZCA9IGBzcGlrZS0keysrdGhpcy5pZENvdW50ZXJ9YDtcclxuXHJcbiAgICAgICAgY29uc3Qgc3Bpa2VDb29yZHMgPSBuZXcgUG9pbnQocm91bmRlZFgsIHJvdW5kZWRZKTtcclxuICAgICAgICBjb25zdCBzcGlrZVNpemUgPSBuZXcgU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjb25zdCBuZXdTcGlrZSA9IG5ldyBTcGlrZShzcGlrZUlkLCBzcGlrZUNvb3Jkcywgc3Bpa2VTaXplLCAnIzRBNTU2OCcsIDIsICcjMkQzNzQ4JywgdHJ1ZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMud29ybGQuc3Bpa2VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMud29ybGQuc3Bpa2VzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud29ybGQuc3Bpa2VzLnB1c2gobmV3U3Bpa2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUp1bXBPcmJJbnB1dFZhbHVlcygpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZE9iamVjdHMgPSB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2VsZWN0aW9uLm9iamVjdHM7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkT2JqZWN0cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRKdW1wT3JiID0gc2VsZWN0ZWRPYmplY3RzWzBdO1xyXG4gICAgICAgIHRoaXMuanVtcE9yYklkSW5wdXQudmFsdWUgPSBzZWxlY3RlZEp1bXBPcmIuaWQgfHwgJyc7XHJcbiAgICAgICAgdGhpcy5qdW1wT3JiWElucHV0LnZhbHVlID0gTWF0aC5yb3VuZChzZWxlY3RlZEp1bXBPcmIuY29vcmRzLngpO1xyXG4gICAgICAgIHRoaXMuanVtcE9yYllJbnB1dC52YWx1ZSA9IE1hdGgucm91bmQoc2VsZWN0ZWRKdW1wT3JiLmNvb3Jkcy55KTtcclxuICAgICAgICB0aGlzLmp1bXBPcmJJc1JldmVyc2VkSW5wdXQuY2hlY2tlZCA9IHNlbGVjdGVkSnVtcE9yYi5pc1JldmVyc2VkIHx8IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNwaWtlSW5wdXRWYWx1ZXMoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPYmplY3RzID0gdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNlbGVjdGlvbi5vYmplY3RzO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZE9iamVjdHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkU3Bpa2UgPSBzZWxlY3RlZE9iamVjdHNbMF07XHJcbiAgICAgICAgdGhpcy5zcGlrZUlkSW5wdXQudmFsdWUgPSBzZWxlY3RlZFNwaWtlLmlkIHx8ICcnO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VYSW5wdXQudmFsdWUgPSBNYXRoLnJvdW5kKHNlbGVjdGVkU3Bpa2UuY29vcmRzLngpO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VZSW5wdXQudmFsdWUgPSBNYXRoLnJvdW5kKHNlbGVjdGVkU3Bpa2UuY29vcmRzLnkpO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VXaWR0aElucHV0LnZhbHVlID0gc2VsZWN0ZWRTcGlrZS5zaXplLndpZHRoO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VIZWlnaHRJbnB1dC52YWx1ZSA9IHNlbGVjdGVkU3Bpa2Uuc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zcGlrZUJhY2tncm91bmRDb2xvcklucHV0LnZhbHVlID0gc2VsZWN0ZWRTcGlrZS5iYWNrZ3JvdW5kQ29sb3IgfHwgJyM0QTU1NjgnO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VTdHJva2VXaWR0aElucHV0LnZhbHVlID0gc2VsZWN0ZWRTcGlrZS5zdHJva2VXaWR0aCB8fCAyO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VTdHJva2VDb2xvcklucHV0LnZhbHVlID0gc2VsZWN0ZWRTcGlrZS5zdHJva2VDb2xvciB8fCAnIzJEMzc0OCc7XHJcbiAgICAgICAgdGhpcy5zcGlrZUlzUmV2ZXJzZWRJbnB1dC5jaGVja2VkID0gc2VsZWN0ZWRTcGlrZS5pc1JldmVyc2VkIHx8IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJyaWNrSWRDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2V0SWQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVCcmlja1hDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBuZXdYID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgaWYgKCFpc05hTihuZXdYKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2V0WChuZXdYKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQnJpY2tZQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgbmV3WSA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgICAgIGlmICghaXNOYU4obmV3WSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNldFkobmV3WSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJyaWNrV2lkdGhDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBuZXdXaWR0aCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgICAgIGlmICghaXNOYU4obmV3V2lkdGgpICYmIG5ld1dpZHRoID49IDEwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zZXRXaWR0aChuZXdXaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJyaWNrSGVpZ2h0Q2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgaWYgKCFpc05hTihuZXdIZWlnaHQpICYmIG5ld0hlaWdodCA+PSAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2V0SGVpZ2h0KG5ld0hlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJyaWNrQmFja2dyb3VuZENvbG9yQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNldEJhY2tncm91bmRDb2xvcihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJyaWNrU3Ryb2tlV2lkdGhDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBuZXdTdHJva2VXaWR0aCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgICAgIGlmICghaXNOYU4obmV3U3Ryb2tlV2lkdGgpICYmIG5ld1N0cm9rZVdpZHRoID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNldFN0cm9rZVdpZHRoKG5ld1N0cm9rZVdpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQnJpY2tTdHJva2VDb2xvckNoYW5nZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zZXRTdHJva2VDb2xvcihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUp1bXBPcmJJZENoYW5nZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zZXRJZChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUp1bXBPcmJYQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgbmV3WCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgICAgIGlmICghaXNOYU4obmV3WCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNldFgobmV3WCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUp1bXBPcmJZQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgbmV3WSA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgICAgIGlmICghaXNOYU4obmV3WSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNldFkobmV3WSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUp1bXBPcmJJc1JldmVyc2VkQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNldElzUmV2ZXJzZWQoZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNwaWtlSWRDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2V0SWQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTcGlrZVhDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBuZXdYID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgaWYgKCFpc05hTihuZXdYKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2V0WChuZXdYKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3Bpa2VZQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgbmV3WSA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgICAgIGlmICghaXNOYU4obmV3WSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNldFkobmV3WSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNwaWtlV2lkdGhDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBuZXdXaWR0aCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgICAgIGlmICghaXNOYU4obmV3V2lkdGgpICYmIG5ld1dpZHRoID49IDEwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zZXRXaWR0aChuZXdXaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNwaWtlSGVpZ2h0Q2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgaWYgKCFpc05hTihuZXdIZWlnaHQpICYmIG5ld0hlaWdodCA+PSAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2V0SGVpZ2h0KG5ld0hlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNwaWtlQmFja2dyb3VuZENvbG9yQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNldEJhY2tncm91bmRDb2xvcihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNwaWtlU3Ryb2tlV2lkdGhDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBuZXdTdHJva2VXaWR0aCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgICAgIGlmICghaXNOYU4obmV3U3Ryb2tlV2lkdGgpICYmIG5ld1N0cm9rZVdpZHRoID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNldFN0cm9rZVdpZHRoKG5ld1N0cm9rZVdpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3Bpa2VTdHJva2VDb2xvckNoYW5nZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zZXRTdHJva2VDb2xvcihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNwaWtlSXNSZXZlcnNlZENoYW5nZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zZXRJc1JldmVyc2VkKGV2ZW50LnRhcmdldC5jaGVja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RWRpdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZXMoKTtcclxuICAgICAgICB0aGlzLmlzRWRpdG9yVmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUVkaXRvcigpIHtcclxuICAgICAgICB0aGlzLmVkaXRvckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0b3JWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0p1bXBPcmJFZGl0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5qdW1wT3JiRWRpdG9yQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSnVtcE9yYklucHV0VmFsdWVzKCk7XHJcbiAgICAgICAgdGhpcy5pc0p1bXBPcmJFZGl0b3JWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlSnVtcE9yYkVkaXRvcigpIHtcclxuICAgICAgICB0aGlzLmp1bXBPcmJFZGl0b3JDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLmlzSnVtcE9yYkVkaXRvclZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93U3Bpa2VFZGl0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zcGlrZUVkaXRvckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB0aGlzLnVwZGF0ZVNwaWtlSW5wdXRWYWx1ZXMoKTtcclxuICAgICAgICB0aGlzLmlzU3Bpa2VFZGl0b3JWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlU3Bpa2VFZGl0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zcGlrZUVkaXRvckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMuaXNTcGlrZUVkaXRvclZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBZGRCcmlja0J1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRCcmlja0J1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBZGRKdW1wT3JiQnV0dG9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZEp1bXBPcmJCdXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWRkU3Bpa2VCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkU3Bpa2VCdXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWRpdG9yQ29udGFpbmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRvckNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRKdW1wT3JiRWRpdG9yQ29udGFpbmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmp1bXBPcmJFZGl0b3JDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3Bpa2VFZGl0b3JDb250YWluZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Bpa2VFZGl0b3JDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmFkZEJyaWNrQnV0dG9uKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYWRkSnVtcE9yYkJ1dHRvbik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmFkZFNwaWtlQnV0dG9uKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWRpdG9yQ29udGFpbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuanVtcE9yYkVkaXRvckNvbnRhaW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNwaWtlRWRpdG9yQ29udGFpbmVyKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5hZGRCcmlja0J1dHRvbiAmJiB0aGlzLmFkZEJyaWNrQnV0dG9uLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmFkZEJyaWNrQnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkSnVtcE9yYkJ1dHRvbiAmJiB0aGlzLmFkZEp1bXBPcmJCdXR0b24ucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuYWRkSnVtcE9yYkJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmFkZFNwaWtlQnV0dG9uICYmIHRoaXMuYWRkU3Bpa2VCdXR0b24ucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuYWRkU3Bpa2VCdXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lZGl0b3JDb250YWluZXIgJiYgdGhpcy5lZGl0b3JDb250YWluZXIucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWRpdG9yQ29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuanVtcE9yYkVkaXRvckNvbnRhaW5lciAmJiB0aGlzLmp1bXBPcmJFZGl0b3JDb250YWluZXIucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuanVtcE9yYkVkaXRvckNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNwaWtlRWRpdG9yQ29udGFpbmVyICYmIHRoaXMuc3Bpa2VFZGl0b3JDb250YWluZXIucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuc3Bpa2VFZGl0b3JDb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmRldGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9pbnQgZnJvbSAnQGNvbW1vbi9wb2ludC5qcyc7XHJcbmltcG9ydCBTaXplIGZyb20gJ0Bjb21tb24vc2l6ZS5qcyc7XHJcbmltcG9ydCBCYXNlTGV2ZWxEZXNpZ25lck1hbmFnZXIgZnJvbSAnQGFwcF9zdGF0ZXMvbGV2ZWxfZGVzaWduZXIvYmFzZV9sZXZlbF9kZXNpZ25lcl9tYW5hZ2VyLmpzJztcclxuaW1wb3J0IFN0cmluZ1Jlc291cmNlcyBmcm9tICcuLi8uLi9jb21tb24vc3RyaW5nX3Jlc291cmNlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJFZGl0b3IgZXh0ZW5kcyBCYXNlTGV2ZWxEZXNpZ25lck1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3Iod29ybGQsIGV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy53b3JsZCA9IHdvcmxkO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gd29ybGQucGxheWVyO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVhDaGFuZ2UgPSB0aGlzLmhhbmRsZVhDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVlDaGFuZ2UgPSB0aGlzLmhhbmRsZVlDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVdpZHRoQ2hhbmdlID0gdGhpcy5oYW5kbGVXaWR0aENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSGVpZ2h0Q2hhbmdlID0gdGhpcy5oYW5kbGVIZWlnaHRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNyZWF0ZURPTUVsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0V2ZW50SGFuZGxlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZURPTUVsZW1lbnRzKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBib3R0b206IDIyMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1BsYXllciBlZGl0b3InO1xyXG4gICAgICAgIHRpdGxlLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ0NDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBvc2l0aW9uR3JvdXAuc3R5bGUubWFyZ2luQm90dG9tID0gJzEwcHgnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIHBvc2l0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBgJHtTdHJpbmdSZXNvdXJjZXMuUE9TSVRJT059OmA7XHJcbiAgICAgICAgcG9zaXRpb25UaXRsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBwb3NpdGlvblRpdGxlLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICc1cHgnO1xyXG4gICAgICAgIHBvc2l0aW9uR3JvdXAuYXBwZW5kQ2hpbGQocG9zaXRpb25UaXRsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHh5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgeHlDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgeFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB4V3JhcHBlci5zdHlsZS5mbGV4ID0gJzEnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHhMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgeExhYmVsLnRleHRDb250ZW50ID0gYCR7U3RyaW5nUmVzb3VyY2VzLlh9OmA7XHJcbiAgICAgICAgeExhYmVsLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMueElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnhJbnB1dC50eXBlID0gJ251bWJlcic7XHJcbiAgICAgICAgdGhpcy54SW5wdXQuaWQgPSAncGxheWVyWElucHV0JztcclxuICAgICAgICB0aGlzLnhJbnB1dC5zdGVwID0gMTA7XHJcbiAgICAgICAgdGhpcy54SW5wdXQuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICB4V3JhcHBlci5hcHBlbmRDaGlsZCh4TGFiZWwpO1xyXG4gICAgICAgIHhXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMueElucHV0KTtcclxuICAgICAgICB4eUNvbnRhaW5lci5hcHBlbmRDaGlsZCh4V3JhcHBlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgeVdyYXBwZXIuc3R5bGUuZmxleCA9ICcxJztcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIHlMYWJlbC50ZXh0Q29udGVudCA9IGAke1N0cmluZ1Jlc291cmNlcy5ZfTpgO1xyXG4gICAgICAgIHlMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy55SW5wdXQudHlwZSA9ICdudW1iZXInO1xyXG4gICAgICAgIHRoaXMueUlucHV0LmlkID0gJ3BsYXllcllJbnB1dCc7XHJcbiAgICAgICAgdGhpcy55SW5wdXQuc3RlcCA9IDEwO1xyXG4gICAgICAgIHRoaXMueUlucHV0LnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgeVdyYXBwZXIuYXBwZW5kQ2hpbGQoeUxhYmVsKTtcclxuICAgICAgICB5V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnlJbnB1dCk7XHJcbiAgICAgICAgeHlDb250YWluZXIuYXBwZW5kQ2hpbGQoeVdyYXBwZXIpO1xyXG5cclxuICAgICAgICBwb3NpdGlvbkdyb3VwLmFwcGVuZENoaWxkKHh5Q29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChwb3NpdGlvbkdyb3VwKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2l6ZUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc2l6ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBzaXplVGl0bGUudGV4dENvbnRlbnQgPSBgJHtTdHJpbmdSZXNvdXJjZXMuU0laRX06YDtcclxuICAgICAgICBzaXplVGl0bGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgc2l6ZVRpdGxlLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICc1cHgnO1xyXG4gICAgICAgIHNpemVHcm91cC5hcHBlbmRDaGlsZChzaXplVGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCBzaXplQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2l6ZUNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB3aWR0aFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3aWR0aFdyYXBwZXIuc3R5bGUuZmxleCA9ICcxJztcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB3aWR0aExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICB3aWR0aExhYmVsLnRleHRDb250ZW50ID0gYCR7U3RyaW5nUmVzb3VyY2VzLldJRFRIfTpgO1xyXG4gICAgICAgIHdpZHRoTGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy53aWR0aElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLndpZHRoSW5wdXQudHlwZSA9ICdudW1iZXInO1xyXG4gICAgICAgIHRoaXMud2lkdGhJbnB1dC5pZCA9ICdwbGF5ZXJXaWR0aElucHV0JztcclxuICAgICAgICB0aGlzLndpZHRoSW5wdXQuc3RlcCA9IDEwO1xyXG4gICAgICAgIHRoaXMud2lkdGhJbnB1dC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdpZHRoV3JhcHBlci5hcHBlbmRDaGlsZCh3aWR0aExhYmVsKTtcclxuICAgICAgICB3aWR0aFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy53aWR0aElucHV0KTtcclxuICAgICAgICBzaXplQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpZHRoV3JhcHBlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlaWdodFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZWlnaHRXcmFwcGVyLnN0eWxlLmZsZXggPSAnMSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaGVpZ2h0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGhlaWdodExhYmVsLnRleHRDb250ZW50ID0gYCR7U3RyaW5nUmVzb3VyY2VzLkhFSUdIVH06YDtcclxuICAgICAgICBoZWlnaHRMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhlaWdodElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLmhlaWdodElucHV0LnR5cGUgPSAnbnVtYmVyJztcclxuICAgICAgICB0aGlzLmhlaWdodElucHV0LmlkID0gJ3BsYXllckhlaWdodElucHV0JztcclxuICAgICAgICB0aGlzLmhlaWdodElucHV0LnN0ZXAgPSAxMDtcclxuICAgICAgICB0aGlzLmhlaWdodElucHV0LnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaGVpZ2h0V3JhcHBlci5hcHBlbmRDaGlsZChoZWlnaHRMYWJlbCk7XHJcbiAgICAgICAgaGVpZ2h0V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmhlaWdodElucHV0KTtcclxuICAgICAgICBzaXplQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlaWdodFdyYXBwZXIpO1xyXG5cclxuICAgICAgICBzaXplR3JvdXAuYXBwZW5kQ2hpbGQoc2l6ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoc2l6ZUdyb3VwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVUb0V2ZW50SGFuZGxlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYWRkT25Nb3VzZURvd25DYWxsYmFjaygoc2VsZWN0ZWRPYmplY3QsIHBvaW50LCBjdHJsUHJlc3NlZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT2JqZWN0Py5nZXRUeXBlKCkgPT09ICdDdWJlUGxheWVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMueElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlWENoYW5nZSk7XHJcbiAgICAgICAgdGhpcy55SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVZQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLndpZHRoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVXaWR0aENoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUhlaWdodENoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGV0YWNoRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy54SW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVYQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLnlJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVlDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMud2lkdGhJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVdpZHRoQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLmhlaWdodElucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlSGVpZ2h0Q2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVYQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgbmV3WCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgICAgIGlmICghaXNOYU4obmV3WCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29vcmRzID0gbmV3IFBvaW50KG5ld1gsIHRoaXMucGxheWVyLmNvb3Jkcy55LCB0aGlzLnBsYXllci5jb29yZHMueik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVlDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBuZXdZID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgaWYgKCFpc05hTihuZXdZKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5jb29yZHMgPSBuZXcgUG9pbnQodGhpcy5wbGF5ZXIuY29vcmRzLngsIG5ld1ksIHRoaXMucGxheWVyLmNvb3Jkcy56KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlV2lkdGhDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBuZXdXaWR0aCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgICAgIGlmICghaXNOYU4obmV3V2lkdGgpICYmIG5ld1dpZHRoID49IDEwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNpemUgPSBuZXcgU2l6ZShuZXdXaWR0aCwgdGhpcy5wbGF5ZXIuc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVIZWlnaHRDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKTtcclxuICAgICAgICBpZiAoIWlzTmFOKG5ld0hlaWdodCkgJiYgbmV3SGVpZ2h0ID49IDEwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNpemUgPSBuZXcgU2l6ZSh0aGlzLnBsYXllci5zaXplLndpZHRoLCBuZXdIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJbnB1dFZhbHVlcygpIHtcclxuICAgICAgICB0aGlzLnhJbnB1dC52YWx1ZSA9IE1hdGgucm91bmQodGhpcy5wbGF5ZXIuY29vcmRzLngpO1xyXG4gICAgICAgIHRoaXMueUlucHV0LnZhbHVlID0gTWF0aC5yb3VuZCh0aGlzLnBsYXllci5jb29yZHMueSk7XHJcbiAgICAgICAgdGhpcy53aWR0aElucHV0LnZhbHVlID0gdGhpcy5wbGF5ZXIuc2l6ZS53aWR0aDtcclxuICAgICAgICAgdGhpcy5oZWlnaHRJbnB1dC52YWx1ZSA9IHRoaXMucGxheWVyLnNpemUuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlcygpO1xyXG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLmRldGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9pbnQgZnJvbSAnQGNvbW1vbi9wb2ludC5qcyc7XHJcbmltcG9ydCBTaXplIGZyb20gJ0Bjb21tb24vc2l6ZS5qcyc7XHJcbmltcG9ydCBCYXNlTGV2ZWxEZXNpZ25lck1hbmFnZXIgZnJvbSAnQGFwcF9zdGF0ZXMvbGV2ZWxfZGVzaWduZXIvYmFzZV9sZXZlbF9kZXNpZ25lcl9tYW5hZ2VyLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbE1hbmFnZXIgZXh0ZW5kcyBCYXNlTGV2ZWxEZXNpZ25lck1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3Iod29ybGQsIGNhbnZhcywgY2FudmFzU2l6ZSwgZXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gY2FudmFzU2l6ZTtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlcjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1vdXNlWCA9IDA7XHJcbiAgICAgICAgdGhpcy5tb3VzZVkgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdE1vdXNlWCA9IDA7XHJcbiAgICAgICAgdGhpcy5sYXN0TW91c2VZID0gMDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmlzU3BhY2VQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy53b3JsZC53b3JsZE9mZnNldCA9IG5ldyBQb2ludCgwLCAwKTtcclxuICAgICAgICB0aGlzLmdyaWRTdGVwID0gbmV3IFBvaW50KDEwLCAxMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsU2Nyb2xsYmFyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsYmFyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxUaHVtYiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFRodW1iID0gbnVsbDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmdIb3Jpem9udGFsID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nVmVydGljYWwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRyYWdTdGFydE9mZnNldCA9IG5ldyBQb2ludCgwLCAwKTtcclxuICAgICAgICB0aGlzLmRyYWdTdGFydFNjcm9sbFBvc2l0aW9uID0gbmV3IFBvaW50KDAsIDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaGFuZGxlTW91c2VNb3ZlID0gdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZU1vdXNlRG93biA9IHRoaXMuaGFuZGxlTW91c2VEb3duLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVNb3VzZVVwID0gdGhpcy5oYW5kbGVNb3VzZVVwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlEb3duID0gdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlVcCA9IHRoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbGJhck1vdXNlRG93biA9IHRoaXMuaGFuZGxlU2Nyb2xsYmFyTW91c2VEb3duLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGxiYXJNb3VzZU1vdmUgPSB0aGlzLmhhbmRsZVNjcm9sbGJhck1vdXNlTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsYmFyTW91c2VVcCA9IHRoaXMuaGFuZGxlU2Nyb2xsYmFyTW91c2VVcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlV2luZG93UmVzaXplID0gdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUuYmluZCh0aGlzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNyZWF0ZVNjcm9sbGJhcnMoKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVRvRXZlbnRIYW5kbGVyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN1YnNjcmliZVRvRXZlbnRIYW5kbGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5hZGRPbk1vdXNlTW92ZUNhbGxiYWNrKChwb2ludCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVggPSBwb2ludC54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVkgPSBwb2ludC55O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vdXNlRG93bik7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlTW91c2VVcCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleVVwKTtcclxuICAgICAgICBcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaG9yaXpvbnRhbFNjcm9sbGJhcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnZlcnRpY2FsU2Nyb2xsYmFyKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbGJhcnMoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbGJhclBvc2l0aW9ucygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlTW91c2VEb3duKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuaGFuZGxlS2V5VXApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5ob3Jpem9udGFsU2Nyb2xsYmFyKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMudmVydGljYWxTY3JvbGxiYXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlU2Nyb2xsYmFyTW91c2VNb3ZlKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVTY3JvbGxiYXJNb3VzZVVwKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVNb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdGhpcy5tb3VzZVggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgIHRoaXMubW91c2VZID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1NwYWNlUHJlc3NlZCAmJiB0aGlzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlWCAtIHRoaXMubGFzdE1vdXNlWCxcclxuICAgICAgICAgICAgICAgIHRoaXMubW91c2VZIC0gdGhpcy5sYXN0TW91c2VZXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlV29ybGRPZmZzZXQoZGVsdGEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ2dyYWJiaW5nJztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNTcGFjZVByZXNzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ2dyYWInO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGFzdE1vdXNlWCA9IHRoaXMubW91c2VYO1xyXG4gICAgICAgIHRoaXMubGFzdE1vdXNlWSA9IHRoaXMubW91c2VZO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1NwYWNlUHJlc3NlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVggPSB0aGlzLm1vdXNlWDtcclxuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VZID0gdGhpcy5tb3VzZVk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVNb3VzZVVwKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZUtleURvd24oZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ1NwYWNlJykge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmlzU3BhY2VQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZUtleVVwKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdTcGFjZScpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5pc1NwYWNlUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlV29ybGRPZmZzZXQoZGVsdGEpIHtcclxuICAgICAgICBkZWx0YS54ID0gTWF0aC5mbG9vcihkZWx0YS54IC8gdGhpcy5ncmlkU3RlcC54KSAqIHRoaXMuZ3JpZFN0ZXAueDtcclxuICAgICAgICBkZWx0YS55ID0gTWF0aC5mbG9vcihkZWx0YS55IC8gdGhpcy5ncmlkU3RlcC55KSAqIHRoaXMuZ3JpZFN0ZXAueTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxYID0gdGhpcy53b3JsZC53b3JsZE9mZnNldC54O1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsWSA9IHRoaXMud29ybGQud29ybGRPZmZzZXQueTtcclxuXHJcbiAgICAgICAgdGhpcy53b3JsZC53b3JsZE9mZnNldC54IC09IGRlbHRhLng7XHJcbiAgICAgICAgdGhpcy53b3JsZC53b3JsZE9mZnNldC55IC09IGRlbHRhLnk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbWF4T2Zmc2V0WCA9IE1hdGgubWF4KDAsIHRoaXMud29ybGQuc2l6ZS53aWR0aCAtIHRoaXMuY2FudmFzU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgY29uc3QgbWF4T2Zmc2V0WSA9IE1hdGgubWF4KDAsIHRoaXMud29ybGQuc2l6ZS5oZWlnaHQgLSB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLndvcmxkLndvcmxkT2Zmc2V0LnggPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLndvcmxkLndvcmxkT2Zmc2V0LngsIG1heE9mZnNldFgpKTtcclxuICAgICAgICB0aGlzLndvcmxkLndvcmxkT2Zmc2V0LnkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLndvcmxkLndvcmxkT2Zmc2V0LnksIG1heE9mZnNldFkpKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICB0aGlzLndvcmxkLndvcmxkT2Zmc2V0LnggLSBvcmlnaW5hbFgsXHJcbiAgICAgICAgICAgIHRoaXMud29ybGQud29ybGRPZmZzZXQueSAtIG9yaWdpbmFsWVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFdvcmxkT2Zmc2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndvcmxkLndvcmxkT2Zmc2V0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRNb3VzZVBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5tb3VzZVgsIHRoaXMubW91c2VZKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaXNJblNjcm9sbE1vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTcGFjZVByZXNzZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNyZWF0ZVNjcm9sbGJhcnMoKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzUmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbFNjcm9sbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbFNjcm9sbGJhci5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIGJvdHRvbTogJHt3aW5kb3cuaW5uZXJIZWlnaHQgLSBjYW52YXNSZWN0LmJvdHRvbSAtIDIwfXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAke2NhbnZhc1JlY3QubGVmdH1weDtcclxuICAgICAgICAgICAgd2lkdGg6ICR7dGhpcy5jYW52YXNTaXplLndpZHRofXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDAsIDQwLCA0MCwgMC45KTtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMTtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsVGh1bWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxUaHVtYi5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC44KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjBweDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbFRodW1iLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlU2Nyb2xsYmFyTW91c2VEb3duKTtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxTY3JvbGxiYXIuYXBwZW5kQ2hpbGQodGhpcy5ob3Jpem9udGFsVGh1bWIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudmVydGljYWxTY3JvbGxiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsYmFyLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAke2NhbnZhc1JlY3QudG9wfXB4O1xyXG4gICAgICAgICAgICByaWdodDogJHt3aW5kb3cuaW5uZXJXaWR0aCAtIGNhbnZhc1JlY3QucmlnaHQgLSAyMH1weDtcclxuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogJHt0aGlzLmNhbnZhc1NpemUuaGVpZ2h0fXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA0MCwgNDAsIDAuOSk7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDE7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudmVydGljYWxUaHVtYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMudmVydGljYWxUaHVtYi5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjgpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogZ3JhYjtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMjBweDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIHRoaXMudmVydGljYWxUaHVtYi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZVNjcm9sbGJhck1vdXNlRG93bik7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFNjcm9sbGJhci5hcHBlbmRDaGlsZCh0aGlzLnZlcnRpY2FsVGh1bWIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbFNjcm9sbGJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmhhbmRsZVRyYWNrQ2xpY2soZSwgJ2hvcml6b250YWwnKSk7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFNjcm9sbGJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmhhbmRsZVRyYWNrQ2xpY2soZSwgJ3ZlcnRpY2FsJykpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVTY3JvbGxiYXJNb3VzZURvd24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuaG9yaXpvbnRhbFRodW1iKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZ0hvcml6b250YWwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdTdGFydE9mZnNldCA9IG5ldyBQb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcclxuICAgICAgICAgICAgdGhpcy5kcmFnU3RhcnRTY3JvbGxQb3NpdGlvbiA9IG5ldyBQb2ludCh0aGlzLndvcmxkLndvcmxkT2Zmc2V0LngsIHRoaXMud29ybGQud29ybGRPZmZzZXQueSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMudmVydGljYWxUaHVtYikge1xyXG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmdWZXJ0aWNhbCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdTdGFydFNjcm9sbFBvc2l0aW9uID0gbmV3IFBvaW50KHRoaXMud29ybGQud29ybGRPZmZzZXQueCwgdGhpcy53b3JsZC53b3JsZE9mZnNldC55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVTY3JvbGxiYXJNb3VzZU1vdmUpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZVNjcm9sbGJhck1vdXNlVXApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVTY3JvbGxiYXJNb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RyYWdnaW5nSG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YVggPSBldmVudC5jbGllbnRYIC0gdGhpcy5kcmFnU3RhcnRPZmZzZXQueDtcclxuICAgICAgICAgICAgY29uc3QgbWF4U2Nyb2xsID0gdGhpcy53b3JsZC5zaXplLndpZHRoIC0gdGhpcy5jYW52YXNTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxSYXRpbyA9IGRlbHRhWCAvICh0aGlzLmNhbnZhc1NpemUud2lkdGggLSB0aGlzLmdldFRodW1iU2l6ZSgnaG9yaXpvbnRhbCcpKTtcclxuICAgICAgICAgICAgbGV0IG5ld1Njcm9sbFggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhTY3JvbGwsIHRoaXMuZHJhZ1N0YXJ0U2Nyb2xsUG9zaXRpb24ueCArIHNjcm9sbFJhdGlvICogbWF4U2Nyb2xsKSk7XHJcbiAgICAgICAgICAgIG5ld1Njcm9sbFggPSBNYXRoLmZsb29yKG5ld1Njcm9sbFggLyB0aGlzLmdyaWRTdGVwLngpICogdGhpcy5ncmlkU3RlcC54O1xyXG5cclxuICAgICAgICAgICAgdGhpcy53b3JsZC53b3JsZE9mZnNldCA9IG5ldyBQb2ludChuZXdTY3JvbGxYLCB0aGlzLndvcmxkLndvcmxkT2Zmc2V0LnkpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbGJhcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZ1ZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWSA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLmRyYWdTdGFydE9mZnNldC55O1xyXG4gICAgICAgICAgICBjb25zdCBtYXhTY3JvbGwgPSB0aGlzLndvcmxkLnNpemUuaGVpZ2h0IC0gdGhpcy5jYW52YXNTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsUmF0aW8gPSBkZWx0YVkgLyAodGhpcy5jYW52YXNTaXplLmhlaWdodCAtIHRoaXMuZ2V0VGh1bWJTaXplKCd2ZXJ0aWNhbCcpKTtcclxuICAgICAgICAgICAgbGV0IG5ld1Njcm9sbFkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhTY3JvbGwsIHRoaXMuZHJhZ1N0YXJ0U2Nyb2xsUG9zaXRpb24ueSArIHNjcm9sbFJhdGlvICogbWF4U2Nyb2xsKSk7XHJcbiAgICAgICAgICAgIG5ld1Njcm9sbFkgPSBNYXRoLmZsb29yKG5ld1Njcm9sbFkgLyB0aGlzLmdyaWRTdGVwLnkpICogdGhpcy5ncmlkU3RlcC55O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy53b3JsZC53b3JsZE9mZnNldCA9IG5ldyBQb2ludCh0aGlzLndvcmxkLndvcmxkT2Zmc2V0LngsIG5ld1Njcm9sbFkpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbGJhcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZVNjcm9sbGJhck1vdXNlVXAoKSB7XHJcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nSG9yaXpvbnRhbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ1ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVTY3JvbGxiYXJNb3VzZU1vdmUpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZVNjcm9sbGJhck1vdXNlVXApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVUcmFja0NsaWNrKGV2ZW50LCBvcmllbnRhdGlvbikge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuaG9yaXpvbnRhbFRodW1iIHx8IGV2ZW50LnRhcmdldCA9PT0gdGhpcy52ZXJ0aWNhbFRodW1iKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVjdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICBjb25zdCBjbGlja1JhdGlvID0gKGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQpIC8gcmVjdC53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgbWF4U2Nyb2xsID0gdGhpcy53b3JsZC5zaXplLndpZHRoIC0gdGhpcy5jYW52YXNTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTY3JvbGxYID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4U2Nyb2xsLCBjbGlja1JhdGlvICogbWF4U2Nyb2xsKSk7XHJcbiAgICAgICAgICAgIHRoaXMud29ybGQud29ybGRPZmZzZXQgPSBuZXcgUG9pbnQobmV3U2Nyb2xsWCwgdGhpcy53b3JsZC53b3JsZE9mZnNldC55KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjbGlja1JhdGlvID0gKGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCkgLyByZWN0LmhlaWdodDtcclxuICAgICAgICAgICAgY29uc3QgbWF4U2Nyb2xsID0gdGhpcy53b3JsZC5zaXplLmhlaWdodCAtIHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Njcm9sbFkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhTY3JvbGwsIGNsaWNrUmF0aW8gKiBtYXhTY3JvbGwpKTtcclxuICAgICAgICAgICAgdGhpcy53b3JsZC53b3JsZE9mZnNldCA9IG5ldyBQb2ludCh0aGlzLndvcmxkLndvcmxkT2Zmc2V0LngsIG5ld1Njcm9sbFkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbGJhcnMoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0VGh1bWJTaXplKG9yaWVudGF0aW9uKSB7XHJcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgY29uc3QgcmF0aW8gPSB0aGlzLmNhbnZhc1NpemUud2lkdGggLyB0aGlzLndvcmxkLnNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgyMCwgdGhpcy5jYW52YXNTaXplLndpZHRoICogcmF0aW8pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5jYW52YXNTaXplLmhlaWdodCAvIHRoaXMud29ybGQuc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgyMCwgdGhpcy5jYW52YXNTaXplLmhlaWdodCAqIHJhdGlvKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFRodW1iUG9zaXRpb24ob3JpZW50YXRpb24pIHtcclxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICBjb25zdCBtYXhTY3JvbGwgPSB0aGlzLndvcmxkLnNpemUud2lkdGggLSB0aGlzLmNhbnZhc1NpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGlmIChtYXhTY3JvbGwgPD0gMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFJhdGlvID0gdGhpcy53b3JsZC53b3JsZE9mZnNldC54IC8gbWF4U2Nyb2xsO1xyXG4gICAgICAgICAgICByZXR1cm4gc2Nyb2xsUmF0aW8gKiAodGhpcy5jYW52YXNTaXplLndpZHRoIC0gdGhpcy5nZXRUaHVtYlNpemUoJ2hvcml6b250YWwnKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbWF4U2Nyb2xsID0gdGhpcy53b3JsZC5zaXplLmhlaWdodCAtIHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmIChtYXhTY3JvbGwgPD0gMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFJhdGlvID0gdGhpcy53b3JsZC53b3JsZE9mZnNldC55IC8gbWF4U2Nyb2xsO1xyXG4gICAgICAgICAgICByZXR1cm4gc2Nyb2xsUmF0aW8gKiAodGhpcy5jYW52YXNTaXplLmhlaWdodCAtIHRoaXMuZ2V0VGh1bWJTaXplKCd2ZXJ0aWNhbCcpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZVNjcm9sbGJhcnMoKSB7XHJcbiAgICAgICAgY29uc3QgbmVlZHNIb3Jpem9udGFsU2Nyb2xsID0gdGhpcy53b3JsZC5zaXplLndpZHRoID4gdGhpcy5jYW52YXNTaXplLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IG5lZWRzVmVydGljYWxTY3JvbGwgPSB0aGlzLndvcmxkLnNpemUuaGVpZ2h0ID4gdGhpcy5jYW52YXNTaXplLmhlaWdodDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAobmVlZHNIb3Jpem9udGFsU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFNjcm9sbGJhci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgY29uc3QgdGh1bWJXaWR0aCA9IHRoaXMuZ2V0VGh1bWJTaXplKCdob3Jpem9udGFsJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRodW1iUG9zaXRpb24gPSB0aGlzLmdldFRodW1iUG9zaXRpb24oJ2hvcml6b250YWwnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFRodW1iLnN0eWxlLndpZHRoID0gYCR7dGh1bWJXaWR0aH1weGA7XHJcbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFRodW1iLnN0eWxlLmxlZnQgPSBgJHt0aHVtYlBvc2l0aW9ufXB4YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhvcml6b250YWxTY3JvbGxiYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG5lZWRzVmVydGljYWxTY3JvbGwpIHtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFNjcm9sbGJhci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgY29uc3QgdGh1bWJIZWlnaHQgPSB0aGlzLmdldFRodW1iU2l6ZSgndmVydGljYWwnKTtcclxuICAgICAgICAgICAgY29uc3QgdGh1bWJQb3NpdGlvbiA9IHRoaXMuZ2V0VGh1bWJQb3NpdGlvbigndmVydGljYWwnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxUaHVtYi5zdHlsZS5oZWlnaHQgPSBgJHt0aHVtYkhlaWdodH1weGA7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxUaHVtYi5zdHlsZS50b3AgPSBgJHt0aHVtYlBvc2l0aW9ufXB4YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsYmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbldvcmxkU2l6ZUNoYW5nZWQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY3JvbGxiYXJzKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZVNjcm9sbGJhclBvc2l0aW9ucygpIHtcclxuICAgICAgICBjb25zdCBjYW52YXNSZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsU2Nyb2xsYmFyLnN0eWxlLmJvdHRvbSA9IGAke3dpbmRvdy5pbm5lckhlaWdodCAtIGNhbnZhc1JlY3QuYm90dG9tIC0gMjB9cHhgO1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbFNjcm9sbGJhci5zdHlsZS5sZWZ0ID0gYCR7Y2FudmFzUmVjdC5sZWZ0fXB4YDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsYmFyLnN0eWxlLnRvcCA9IGAke2NhbnZhc1JlY3QudG9wfXB4YDtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsYmFyLnN0eWxlLnJpZ2h0ID0gYCR7d2luZG93LmlubmVyV2lkdGggLSBjYW52YXNSZWN0LnJpZ2h0IC0gMjB9cHhgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVXaW5kb3dSZXNpemUoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY3JvbGxiYXJQb3NpdGlvbnMoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBQb2ludCBmcm9tICdAY29tbW9uL3BvaW50LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwU2VsZWN0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3RlZE9iamVjdHMpIHtcclxuICAgICAgICB0aGlzLm9iamVjdHMgPSBzZWxlY3RlZE9iamVjdHMgfHwgW107XHJcbiAgICAgICAgdGhpcy5yYXdDb29yZHMgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0KG9iamVjdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb250YWlucyhvYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG9iamVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMucmF3Q29vcmRzLnNldChvYmplY3QsIG5ldyBQb2ludChvYmplY3QuY29vcmRzLngsIG9iamVjdC5jb29yZHMueSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXNlbGVjdCgpIHtcclxuICAgICAgICB0aGlzLm9iamVjdHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdHJva2VXaWR0aCh3aWR0aCkge1xyXG4gICAgICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnN0cm9rZVdpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3Ryb2tlQ29sb3IoY29sb3IpIHtcclxuICAgICAgICB0aGlzLm9iamVjdHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5zdHJva2VDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEJhY2tncm91bmRDb2xvcihjb2xvcikge1xyXG4gICAgICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUob2Zmc2V0LCBtYXApIHtcclxuICAgICAgICB0aGlzLm9iamVjdHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmF3Q29vcmRzID0gdGhpcy5yYXdDb29yZHMuZ2V0KGl0ZW0pO1xyXG4gICAgICAgICAgICByYXdDb29yZHMueCArPSBvZmZzZXQueDtcclxuICAgICAgICAgICAgcmF3Q29vcmRzLnkgKz0gb2Zmc2V0Lnk7XHJcbiAgICAgICAgICAgIGl0ZW0uY29vcmRzID0gbWFwKHJhd0Nvb3Jkcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0V2lkdGgod2lkdGgpIHtcclxuICAgICAgICB0aGlzLm9iamVjdHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5zaXplLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SGVpZ2h0KGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnNpemUuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFgoeCkge1xyXG4gICAgICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmNvb3Jkcy54ID0geDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRZKHkpIHtcclxuICAgICAgICB0aGlzLm9iamVjdHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jb29yZHMueSA9IHk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SWQoaWQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNHcm91cCgpICYmICF0aGlzLmlzRW1wdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9iamVjdHNbMF0uaWQgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXNSZXZlcnNlZChpc1JldmVyc2VkKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmdldFR5cGUoKSA9PT0gJ1NwaWtlJyB8fCBpdGVtLmdldFR5cGUoKSA9PT0gJ0p1bXBPcmInKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmlzUmV2ZXJzZWQgPSBpc1JldmVyc2VkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNHcm91cCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RzLmxlbmd0aCA+IDE7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbnMob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0cy5pbmNsdWRlcyhvYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZU9iamVjdChvYmplY3QpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMub2JqZWN0cy5pbmRleE9mKG9iamVjdCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5vYmplY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzRW1wdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0cy5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgR3JvdXBTZWxlY3Rpb24gZnJvbSBcIkBhcHBfc3RhdGVzL2xldmVsX2Rlc2lnbmVyL3NlbGVjdGlvbi9ncm91cF9zZWxlY3Rpb25cIjtcclxuaW1wb3J0IFBvaW50IGZyb20gJ0Bjb21tb24vcG9pbnQuanMnO1xyXG5pbXBvcnQgU2l6ZSBmcm9tICdAY29tbW9uL3NpemUuanMnO1xyXG5pbXBvcnQgQnJpY2sgZnJvbSAnQGNvbW1vbi9nYW1lL2FjdG9ycy9icmljay9icmljay5qcyc7XHJcbmltcG9ydCBTcGlrZSBmcm9tICdAY29tbW9uL2dhbWUvYWN0b3JzL3NwaWtlL3NwaWtlLmpzJztcclxuaW1wb3J0IEp1bXBPcmIgZnJvbSAnQGNvbW1vbi9nYW1lL2FjdG9ycy9qdW1wX29yYi9qdW1wX29yYi5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3Rpb25NYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHdvcmxkLCBldmVudEhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3Rpb24gPSBuZXcgR3JvdXBTZWxlY3Rpb24oKTtcclxuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBldmVudEhhbmRsZXI7XHJcbiAgICAgICAgdGhpcy5jbGlwYm9hcmQgPSBbXTtcclxuICAgICAgICB0aGlzLmNsaXBib2FyZFBvc2l0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlkQ291bnRlciA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMub25SZW1vdmVkID0gKCkgPT4ge307XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0V2ZW50SGFuZGxlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNlbGVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb2JqZWN0cygpIHtcclxuICAgICAgICByZXR1cm4gXHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbnMob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNlbGVjdGlvbi5jb250YWlucyhvYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvU2VsZWN0aW9uKG9iamVjdCwgY3RybFByZXNzZWQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudFNlbGVjdGlvbi5pc0VtcHR5KCkgJiYgIWN0cmxQcmVzc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbi5kZXNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3Rpb24uc2VsZWN0KG9iamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRnJvbVNlbGVjdGlvbihvYmplY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uLnJlbW92ZU9iamVjdChvYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbi5kZXNlbGVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzR3JvdXBTZWxlY3RlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2VsZWN0aW9uLmlzR3JvdXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNTZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmN1cnJlbnRTZWxlY3Rpb24uaXNFbXB0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0cm9rZVdpZHRoKHdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uLnNldFN0cm9rZVdpZHRoKHdpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdHJva2VDb2xvcihjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbi5zZXRTdHJva2VDb2xvcihjb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uLnNldEJhY2tncm91bmRDb2xvcihjb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0WCh4KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uLnNldFgoeCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0WSh5KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uLnNldFkoeSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0V2lkdGgod2lkdGgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3Rpb24uc2V0V2lkdGgod2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEhlaWdodChoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3Rpb24uc2V0SGVpZ2h0KGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SWQoaWQpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3Rpb24uc2V0SWQoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElzUmV2ZXJzZWQoaXNSZXZlcnNlZCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbi5zZXRJc1JldmVyc2VkKGlzUmV2ZXJzZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUob2Zmc2V0LCBtYXApIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3Rpb24ubW92ZShvZmZzZXQsIG1hcCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlbGV0ZVNlbGVjdGVkQnJpY2tzKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT2JqZWN0cyA9IHRoaXMuY3VycmVudFNlbGVjdGlvbi5vYmplY3RzO1xyXG4gICAgICAgIGNvbnN0IGJyaWNrc1RvRGVsZXRlID0gc2VsZWN0ZWRPYmplY3RzLmZpbHRlcihvYmogPT4gb2JqLmdldFR5cGUoKSA9PT0gJ0JyaWNrJyk7XHJcbiAgICAgICAgYnJpY2tzVG9EZWxldGUuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLndvcmxkLmJyaWNrcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53b3JsZC5icmlja3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBqdW1wT3Jic1RvRGVsZXRlID0gc2VsZWN0ZWRPYmplY3RzLmZpbHRlcihvYmogPT4gb2JqLmdldFR5cGUoKSA9PT0gJ0p1bXBPcmInKTtcclxuICAgICAgICBqdW1wT3Jic1RvRGVsZXRlLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy53b3JsZC5qdW1wT3Jicy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53b3JsZC5qdW1wT3Jicy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNwaWtlc1RvRGVsZXRlID0gc2VsZWN0ZWRPYmplY3RzLmZpbHRlcihvYmogPT4gb2JqLmdldFR5cGUoKSA9PT0gJ1NwaWtlJyk7XHJcbiAgICAgICAgc3Bpa2VzVG9EZWxldGUuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLndvcmxkLnNwaWtlcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53b3JsZC5zcGlrZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKGJyaWNrc1RvRGVsZXRlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uUmVtb3ZlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3U2VsZWN0aW9uKGN0eCwgY2FudmFzU2l6ZSwgd29ybGRPZmZzZXQsIHBsYXllck9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZE9iamVjdHMgPSB0aGlzLmN1cnJlbnRTZWxlY3Rpb24ub2JqZWN0cztcclxuICAgICAgICBpZiAoc2VsZWN0ZWRPYmplY3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5pc0dyb3VwU2VsZWN0ZWQoKSA/ICcjMDBmZjAwJyA6ICcjZmYwMDAwJztcclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZWxlY3RlZE9iamVjdHMuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm91bmRzID0gb2JqLmdldFZpc2libGVCb3VuZHMoY2FudmFzU2l6ZSwgd29ybGRPZmZzZXQsIHBsYXllck9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVJlY3QoYm91bmRzLmNvb3Jkcy54ICsgMiwgYm91bmRzLmNvb3Jkcy55ICsgMiwgYm91bmRzLnNpemUud2lkdGggLSA0LCBib3VuZHMuc2l6ZS5oZWlnaHQgLSA0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZVRvRXZlbnRIYW5kbGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5hZGRPbktleURvd25DYWxsYmFjaygoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlS2V5RG93bkV2ZW50KGV2ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUtleURvd25FdmVudChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5ICYmIGV2ZW50LmtleSA9PT0gJ2MnKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29weVNlbGVjdGlvbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuY3RybEtleSAmJiBldmVudC5rZXkgPT09ICd2Jykge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBhc3RlU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdEZWxldGUnICYmIHRoaXMuaGFzU2VsZWN0aW9uKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVTZWxlY3RlZEJyaWNrcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb3B5U2VsZWN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc1NlbGVjdGlvbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkID0gdGhpcy5jdXJyZW50U2VsZWN0aW9uLm9iamVjdHMubWFwKG9iaiA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogb2JqLmdldFR5cGUoKSxcclxuICAgICAgICAgICAgICAgIGlkOiBvYmouaWQsXHJcbiAgICAgICAgICAgICAgICBjb29yZHM6IHsgeDogb2JqLmNvb3Jkcy54LCB5OiBvYmouY29vcmRzLnkgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IG9iai5zaXplLndpZHRoLCBoZWlnaHQ6IG9iai5zaXplLmhlaWdodCB9LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBvYmouYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IG9iai5zdHJva2VXaWR0aCxcclxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBvYmouc3Ryb2tlQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogb2JqLmlzQWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgaXNSZXZlcnNlZDogb2JqLmlzUmV2ZXJzZWRcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYm91bmRzID0gdGhpcy5nZXRTZWxlY3Rpb25Cb3VuZHMoKTtcclxuICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRQb3NpdGlvbiA9IG5ldyBQb2ludChcclxuICAgICAgICAgICAgICAgIGJvdW5kcy5taW5YLFxyXG4gICAgICAgICAgICAgICAgYm91bmRzLm1pbllcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGFzdGVTZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2xpcGJvYXJkLmxlbmd0aCA+IDAgJiYgdGhpcy5jbGlwYm9hcmRQb3NpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXN0ZWRPYmplY3RzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkLmZvckVhY2gob2JqRGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWxhdGl2ZVggPSBvYmpEYXRhLmNvb3Jkcy54IC0gdGhpcy5jbGlwYm9hcmRQb3NpdGlvbi54O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVZID0gb2JqRGF0YS5jb29yZHMueSAtIHRoaXMuY2xpcGJvYXJkUG9zaXRpb24ueTtcclxuICAgICAgICAgICAgICAgIGlmIChvYmpEYXRhLnR5cGUgPT09ICdCcmljaycpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXN0ZWRPYmplY3RzLnB1c2godGhpcy5jcmVhdGVCcmljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLm9iakRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkczogbmV3IFBvaW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRQb3NpdGlvbi54ICsgcmVsYXRpdmVYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRQb3NpdGlvbi55ICsgcmVsYXRpdmVZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9iakRhdGEudHlwZSA9PT0gJ0p1bXBPcmInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzdGVkT2JqZWN0cy5wdXNoKHRoaXMuY3JlYXRlSnVtcE9yYihvYmpEYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9iakRhdGEudHlwZSA9PT0gJ1NwaWtlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhc3RlZE9iamVjdHMucHVzaCh0aGlzLmNyZWF0ZVNwaWtlKG9iakRhdGEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwYXN0ZWRPYmplY3RzLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbi5zZWxlY3Qob2JqKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJyaWNrKGRhdGEpIHtcclxuICAgICAgICBjb25zdCBpdGVtQ29vcmRzID0gbmV3IFBvaW50KGRhdGEuY29vcmRzLngsIGRhdGEuY29vcmRzLnkpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1TaXplID0gbmV3IFNpemUoZGF0YS5zaXplLndpZHRoLCBkYXRhLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpdGVtSWQgPSBgJHtkYXRhLmlkfS1jb3B5LSR7Kyt0aGlzLmlkQ291bnRlcn1gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgQnJpY2soXHJcbiAgICAgICAgICAgIGl0ZW1JZCxcclxuICAgICAgICAgICAgaXRlbUNvb3JkcyxcclxuICAgICAgICAgICAgaXRlbVNpemUsXHJcbiAgICAgICAgICAgIGRhdGEuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICBkYXRhLnN0cm9rZVdpZHRoLFxyXG4gICAgICAgICAgICBkYXRhLnN0cm9rZUNvbG9yLFxyXG4gICAgICAgICAgICBkYXRhLmlzQWN0aXZlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy53b3JsZC5icmlja3MudW5zaGlmdChuZXdJdGVtKTtcclxuICAgICAgICByZXR1cm4gbmV3SXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTcGlrZShkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbUNvb3JkcyA9IG5ldyBQb2ludChkYXRhLmNvb3Jkcy54LCBkYXRhLmNvb3Jkcy55KTtcclxuICAgICAgICBjb25zdCBpdGVtU2l6ZSA9IG5ldyBTaXplKGRhdGEuc2l6ZS53aWR0aCwgZGF0YS5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaXRlbUlkID0gYCR7ZGF0YS5pZH0tY29weS0keysrdGhpcy5pZENvdW50ZXJ9YDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdJdGVtID0gbmV3IFNwaWtlKFxyXG4gICAgICAgICAgICBpdGVtSWQsXHJcbiAgICAgICAgICAgIGl0ZW1Db29yZHMsXHJcbiAgICAgICAgICAgIGl0ZW1TaXplLFxyXG4gICAgICAgICAgICBkYXRhLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgZGF0YS5zdHJva2VXaWR0aCxcclxuICAgICAgICAgICAgZGF0YS5zdHJva2VDb2xvcixcclxuICAgICAgICAgICAgZGF0YS5pc0FjdGl2ZSxcclxuICAgICAgICAgICAgZGF0YS5pc1JldmVyc2VkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy53b3JsZC5zcGlrZXMudW5zaGlmdChuZXdJdGVtKTtcclxuICAgICAgICByZXR1cm4gbmV3SXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVKdW1wT3JiKGRhdGEpIHtcclxuICAgICAgICBjb25zdCBjb29yZHMgPSBuZXcgUG9pbnQoZGF0YS5jb29yZHMueCwgZGF0YS5jb29yZHMueSk7XHJcbiAgICAgICAgY29uc3QgaXRlbUlkID0gYCR7ZGF0YS5pZH0tY29weS0keysrdGhpcy5pZENvdW50ZXJ9YDtcclxuICAgICAgICBjb25zdCBuZXdJdGVtID0gbmV3IEp1bXBPcmIoXHJcbiAgICAgICAgICAgIGl0ZW1JZCxcclxuICAgICAgICAgICAgY29vcmRzLFxyXG4gICAgICAgICAgICBkYXRhLmlzUmV2ZXJzZWRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMud29ybGQuanVtcE9yYnMudW5zaGlmdChuZXdJdGVtKTtcclxuICAgICAgICByZXR1cm4gbmV3SXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWxlY3Rpb25Cb3VuZHMoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPYmplY3RzID0gdGhpcy5jdXJyZW50U2VsZWN0aW9uLm9iamVjdHM7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkT2JqZWN0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgbWluWDogMCwgbWluWTogMCwgbWF4WDogMCwgbWF4WTogMCB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1pblggPSBzZWxlY3RlZE9iamVjdHNbMF0uY29vcmRzLng7XHJcbiAgICAgICAgbGV0IG1pblkgPSBzZWxlY3RlZE9iamVjdHNbMF0uY29vcmRzLnk7XHJcbiAgICAgICAgbGV0IG1heFggPSBzZWxlY3RlZE9iamVjdHNbMF0uY29vcmRzLnggKyBzZWxlY3RlZE9iamVjdHNbMF0uc2l6ZS53aWR0aDtcclxuICAgICAgICBsZXQgbWF4WSA9IHNlbGVjdGVkT2JqZWN0c1swXS5jb29yZHMueSArIHNlbGVjdGVkT2JqZWN0c1swXS5zaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRPYmplY3RzLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICAgICAgbWluWCA9IE1hdGgubWluKG1pblgsIG9iai5jb29yZHMueCk7XHJcbiAgICAgICAgICAgIG1pblkgPSBNYXRoLm1pbihtaW5ZLCBvYmouY29vcmRzLnkpO1xyXG4gICAgICAgICAgICBtYXhYID0gTWF0aC5tYXgobWF4WCwgb2JqLmNvb3Jkcy54ICsgb2JqLnNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICBtYXhZID0gTWF0aC5tYXgobWF4WSwgb2JqLmNvb3Jkcy55ICsgb2JqLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSB9O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFN0cmluZ1Jlc291cmNlcyBmcm9tICdAY29tbW9uL3N0cmluZ19yZXNvdXJjZXMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjcm9sbE1hbmFnZXIsIHdvcmxkLCBjYW52YXNTaXplKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxNYW5hZ2VyID0gc2Nyb2xsTWFuYWdlcjtcclxuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gY2FudmFzU2l6ZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbmZvQ29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmJhY2tCdXR0b24gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLm9uQmFjayA9ICgpID0+IHt9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQmFjayA9IHRoaXMuaGFuZGxlQmFjay5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdVSShjdHgpIHtcclxuICAgICAgICBjb25zdCBtb3VzZVBvcyA9IHRoaXMuc2Nyb2xsTWFuYWdlci5nZXRNb3VzZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3Qgd29ybGRPZmZzZXQgPSB0aGlzLnNjcm9sbE1hbmFnZXIuZ2V0V29ybGRPZmZzZXQoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1vdXNlSW5mby50ZXh0Q29udGVudCA9IGAke1N0cmluZ1Jlc291cmNlcy5NT1VTRX06ICgke01hdGgucm91bmQobW91c2VQb3MueCl9LCAke01hdGgucm91bmQobW91c2VQb3MueSl9KWA7XHJcbiAgICAgICAgdGhpcy53b3JsZE9mZnNldEluZm8udGV4dENvbnRlbnQgPSBgJHtTdHJpbmdSZXNvdXJjZXMuV09STERfT0ZGU0VUfTogKCR7TWF0aC5yb3VuZCh3b3JsZE9mZnNldC54KX0sICR7TWF0aC5yb3VuZCh3b3JsZE9mZnNldC55KX0pYDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbE1hbmFnZXIuaXNJblNjcm9sbE1vZGUoKSkge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyM5OTk5OTknO1xyXG4gICAgICAgICAgICBjdHguZm9udCA9ICcxNHB4IEFyaWFsJzsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3QmFja2dyb3VuZChjdHgpIHtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyMyYTJhMmEnO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1NpemUud2lkdGgsIHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQpO1xyXG5cclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyM0MDQwNDAnO1xyXG4gICAgICAgIGNvbnN0IGdhbWVBcmVhV2lkdGggPSBNYXRoLm1pbih0aGlzLndvcmxkLnNpemUud2lkdGgsIHRoaXMuY2FudmFzU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgY29uc3QgZ2FtZUFyZWFIZWlnaHQgPSBNYXRoLm1pbih0aGlzLndvcmxkLnNpemUuaGVpZ2h0LCB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KTtcclxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgZ2FtZUFyZWFXaWR0aCwgZ2FtZUFyZWFIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdHcmlkKGN0eCkge1xyXG4gICAgICAgIGNvbnN0IGdyaWRTdGVwID0gMTA7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyM1NTU1NTUnO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xyXG5cclxuICAgICAgICBjb25zdCB3b3JsZE9mZnNldCA9IHRoaXMud29ybGQud29ybGRPZmZzZXQ7XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtd29ybGRPZmZzZXQueCwgLXdvcmxkT2Zmc2V0LnkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHZpc2libGVTdGFydFggPSB3b3JsZE9mZnNldC54O1xyXG4gICAgICAgIGNvbnN0IHZpc2libGVFbmRYID0gd29ybGRPZmZzZXQueCArIHRoaXMuY2FudmFzU2l6ZS53aWR0aDtcclxuICAgICAgICBjb25zdCB2aXNpYmxlU3RhcnRZID0gd29ybGRPZmZzZXQueTtcclxuICAgICAgICBjb25zdCB2aXNpYmxlRW5kWSA9IHdvcmxkT2Zmc2V0LnkgKyB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHN0YXJ0WCA9IE1hdGguZmxvb3IodmlzaWJsZVN0YXJ0WCAvIGdyaWRTdGVwKSAqIGdyaWRTdGVwO1xyXG4gICAgICAgIGNvbnN0IGVuZFggPSBNYXRoLmNlaWwodmlzaWJsZUVuZFggLyBncmlkU3RlcCkgKiBncmlkU3RlcDtcclxuICAgICAgICBjb25zdCBzdGFydFkgPSBNYXRoLmZsb29yKHZpc2libGVTdGFydFkgLyBncmlkU3RlcCkgKiBncmlkU3RlcDtcclxuICAgICAgICBjb25zdCBlbmRZID0gTWF0aC5jZWlsKHZpc2libGVFbmRZIC8gZ3JpZFN0ZXApICogZ3JpZFN0ZXA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHN0YXJ0WDsgeCA8PSBlbmRYOyB4ICs9IGdyaWRTdGVwKSB7XHJcbiAgICAgICAgICAgIGlmICh4ID49IDAgJiYgeCA8PSB0aGlzLndvcmxkLnNpemUud2lkdGggJiYgeCA+PSB2aXNpYmxlU3RhcnRYICYmIHggPD0gdmlzaWJsZUVuZFgpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oeCwgTWF0aC5tYXgoMCwgTWF0aC5tYXgodmlzaWJsZVN0YXJ0WSwgMCkpKTtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCwgTWF0aC5taW4odGhpcy53b3JsZC5zaXplLmhlaWdodCwgTWF0aC5taW4odmlzaWJsZUVuZFksIHRoaXMud29ybGQuc2l6ZS5oZWlnaHQpKSk7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgeSA9IHN0YXJ0WTsgeSA8PSBlbmRZOyB5ICs9IGdyaWRTdGVwKSB7XHJcbiAgICAgICAgICAgIGlmICh5ID49IDAgJiYgeSA8PSB0aGlzLndvcmxkLnNpemUuaGVpZ2h0ICYmIHkgPj0gdmlzaWJsZVN0YXJ0WSAmJiB5IDw9IHZpc2libGVFbmRZKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKE1hdGgubWF4KDAsIE1hdGgubWF4KHZpc2libGVTdGFydFgsIDApKSwgeSk7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKE1hdGgubWluKHRoaXMud29ybGQuc2l6ZS53aWR0aCwgTWF0aC5taW4odmlzaWJsZUVuZFgsIHRoaXMud29ybGQuc2l6ZS53aWR0aCkpLCB5KTtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCYWNrQnV0dG9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmJhY2tCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5kZXRhY2hCYWNrRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYmFja0J1dHRvbi5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tCdXR0b24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmJhY2tCdXR0b24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJhY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICB0aGlzLmJhY2tCdXR0b24udGV4dENvbnRlbnQgPSBTdHJpbmdSZXNvdXJjZXMuQkFDSztcclxuICAgICAgICB0aGlzLmJhY2tCdXR0b24uc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDI0cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3NTc1NzU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlQmFja01vdXNlRW50ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja0J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyM2MTYxNjEnO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlQmFja01vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja0J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyM3NTc1NzUnO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oYW5kbGVCYWNrTW91c2VFbnRlcik7XHJcbiAgICAgICAgdGhpcy5iYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmhhbmRsZUJhY2tNb3VzZUxlYXZlKTtcclxuICAgICAgICB0aGlzLmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUJhY2spO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrQnV0dG9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUluZm9EaXNwbGF5KCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJvdHRvbSA9ICcxMHB4JztcclxuICAgICAgICBjb250YWluZXIuc3R5bGUubGVmdCA9ICcxMHB4JztcclxuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDAsIDAsIDAsIDAuOCknO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5jb2xvciA9ICcjY2NjY2NjJztcclxuICAgICAgICBjb250YWluZXIuc3R5bGUucGFkZGluZyA9ICc4cHggMTJweCc7XHJcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc0cHgnO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5mb250RmFtaWx5ID0gJ0FyaWFsLCBzYW5zLXNlcmlmJztcclxuICAgICAgICBjb250YWluZXIuc3R5bGUuZm9udFNpemUgPSAnMTJweCc7XHJcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICcxMDAwJztcclxuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgdGhpcy5tb3VzZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLm1vdXNlSW5mby5pZCA9ICdtb3VzZUluZm8nO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1vdXNlSW5mbyk7XHJcblxyXG4gICAgICAgIHRoaXMud29ybGRPZmZzZXRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy53b3JsZE9mZnNldEluZm8uaWQgPSAnd29ybGRPZmZzZXRJbmZvJztcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy53b3JsZE9mZnNldEluZm8pO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5vbkJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hCYWNrRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFja0J1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGFuZGxlQmFja01vdXNlRW50ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuaGFuZGxlQmFja01vdXNlTGVhdmUpO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2hCYWNrRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFja0J1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGFuZGxlQmFja01vdXNlRW50ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuaGFuZGxlQmFja01vdXNlTGVhdmUpO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5mb0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLmluZm9Db250YWluZXIgPSB0aGlzLmNyZWF0ZUluZm9EaXNwbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmFja0J1dHRvbiA9IHRoaXMuY3JlYXRlQmFja0J1dHRvbigpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5pbmZvQ29udGFpbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYmFja0J1dHRvbik7XHJcbiAgICAgICAgdGhpcy5pbmZvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoQmFja0V2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbmZvQ29udGFpbmVyICYmIHRoaXMuaW5mb0NvbnRhaW5lci5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5pbmZvQ29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYmFja0J1dHRvbiAmJiB0aGlzLmJhY2tCdXR0b24ucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuYmFja0J1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGV0YWNoQmFja0V2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5iYWNrQnV0dG9uID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb250YWluZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5mb0NvbnRhaW5lcjtcclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlQXBwU3RhdGUgZnJvbSAnQGFwcF9zdGF0ZXMvYmFzZV9hcHBfc3RhdGUuanMnO1xyXG5pbXBvcnQgQnJpY2tQYXR0ZXJuUmVuZGVyZXIgZnJvbSAnQGNvbW1vbi9ncmFwaGljcy9icmlja19wYXR0ZXJuX3JlbmRlcmVyLmpzJztcclxuaW1wb3J0IENhdGFsb2dBcHBTdGF0ZSBmcm9tICdAYXBwX3N0YXRlcy9jYXRhbG9nL2NhdGFsb2dfYXBwX3N0YXRlLmpzJztcclxuaW1wb3J0IFN0cmluZ1Jlc291cmNlcyBmcm9tICdAY29tbW9uL3N0cmluZ19yZXNvdXJjZXMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRTY3JlZW5BcHBTdGF0ZSBleHRlbmRzIEJhc2VBcHBTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgICAgICBzdXBlcihjYW52YXMpO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25QbGF5Q2xpY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25MZXZlbERlc2lnbmVyQ2xpY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnBsYXlCdXR0b24gPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogNjAsXHJcbiAgICAgICAgICAgIHRleHQ6IFN0cmluZ1Jlc291cmNlcy5MRVZFTF9DQVRBTE9HLFxyXG4gICAgICAgICAgICBob3ZlcmVkOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kZXNpZ25lckJ1dHRvbiA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgICAgICAgdGV4dDogU3RyaW5nUmVzb3VyY2VzLkRFU0lHTkVSX01PREUsXHJcbiAgICAgICAgICAgIGhvdmVyZWQ6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhhbmRsZU1vdXNlTW92ZSA9IHRoaXMuaGFuZGxlTW91c2VNb3ZlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVNb3VzZUNsaWNrID0gdGhpcy5oYW5kbGVNb3VzZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nYW1lTG9vcCA9IHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlTGF5b3V0KCkge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRpdGxlUGFuZWxIZWlnaHQgPSAxMjA7XHJcbiAgICAgICAgY29uc3QgdGl0bGVZID0gY2FudmFzSGVpZ2h0IC8gMiAtIDIwMDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBidXR0b25TcGFjaW5nID0gMzA7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRZID0gdGl0bGVZICsgdGl0bGVQYW5lbEhlaWdodCArIDUwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi54ID0gKGNhbnZhc1dpZHRoIC0gdGhpcy5wbGF5QnV0dG9uLndpZHRoKSAvIDI7XHJcbiAgICAgICAgdGhpcy5wbGF5QnV0dG9uLnkgPSBzdGFydFk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kZXNpZ25lckJ1dHRvbi54ID0gKGNhbnZhc1dpZHRoIC0gdGhpcy5kZXNpZ25lckJ1dHRvbi53aWR0aCkgLyAyO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXJCdXR0b24ueSA9IHN0YXJ0WSArIHRoaXMucGxheUJ1dHRvbi5oZWlnaHQgKyBidXR0b25TcGFjaW5nO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnYW1lTG9vcChjdXJyZW50VGltZSA9IDApIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxheW91dCgpO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBjb25zdCBjYW52YXNXaWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcclxuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KCkgLSB0aGlzLnN0YXJ0VGltZTtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xyXG5cclxuICAgICAgICBCcmlja1BhdHRlcm5SZW5kZXJlci5kcmF3QW5pbWF0ZWRCcmlja1BhdHRlcm4oXHJcbiAgICAgICAgICAgIHRoaXMuY3R4LCBcclxuICAgICAgICAgICAgMCwgMCwgXHJcbiAgICAgICAgICAgIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIFxyXG4gICAgICAgICAgICBjdXJyZW50VGltZSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJpY2tDb2xvcjogJyM4QjQ1MTMnLFxyXG4gICAgICAgICAgICAgICAgbW9ydGFyQ29sb3I6ICcjNjU0MzIxJyxcclxuICAgICAgICAgICAgICAgIGJyaWNrV2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgYnJpY2tIZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgbW9ydGFyV2lkdGg6IDQsXHJcbiAgICAgICAgICAgICAgICBtb3J0YXJIZWlnaHQ6IDRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMyknO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLmRyYXdUaXRsZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmRyYXdCdXR0b24odGhpcy5wbGF5QnV0dG9uKTtcclxuICAgICAgICB0aGlzLmRyYXdCdXR0b24odGhpcy5kZXNpZ25lckJ1dHRvbik7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd0NvcHlyaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdUaXRsZSgpIHtcclxuICAgICAgICBjb25zdCBjYW52YXNXaWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRpdGxlUGFuZWxXaWR0aCA9IDYwMDtcclxuICAgICAgICBjb25zdCB0aXRsZVBhbmVsSGVpZ2h0ID0gMTIwO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlWCA9IChjYW52YXNXaWR0aCAtIHRpdGxlUGFuZWxXaWR0aCkgLyAyO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlWSA9IGNhbnZhc0hlaWdodCAvIDIgLSAyMDA7XHJcblxyXG4gICAgICAgIEJyaWNrUGF0dGVyblJlbmRlcmVyLmRyYXdCcmlja1BhdHRlcm4oXHJcbiAgICAgICAgICAgIHRoaXMuY3R4LFxyXG4gICAgICAgICAgICB0aXRsZVgsIHRpdGxlWSxcclxuICAgICAgICAgICAgdGl0bGVQYW5lbFdpZHRoLCB0aXRsZVBhbmVsSGVpZ2h0LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmlja0NvbG9yOiAnI0QyNjkxRScsXHJcbiAgICAgICAgICAgICAgICBtb3J0YXJDb2xvcjogJyM4QjQ1MTMnLFxyXG4gICAgICAgICAgICAgICAgYnJpY2tXaWR0aDogNjAsXHJcbiAgICAgICAgICAgICAgICBicmlja0hlaWdodDogMzAsXHJcbiAgICAgICAgICAgICAgICBtb3J0YXJXaWR0aDogMyxcclxuICAgICAgICAgICAgICAgIG1vcnRhckhlaWdodDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzY1NDMyMSc7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNjtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VSZWN0KHRpdGxlWCwgdGl0bGVZLCB0aXRsZVBhbmVsV2lkdGgsIHRpdGxlUGFuZWxIZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgNDhweCBcIkNvdXJpZXIgTmV3XCIsIFwiTHVjaWRhIENvbnNvbGVcIiwgXCJNb25hY29cIiwgXCJEZWphVnUgU2FucyBNb25vXCIsIG1vbm9zcGFjZSc7XHJcbiAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgdGhpcy5jdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gU3RyaW5nUmVzb3VyY2VzLkFQUF9USVRMRTtcclxuICAgICAgICBjb25zdCB0aXRsZUNlbnRlclggPSBjYW52YXNXaWR0aCAvIDI7XHJcbiAgICAgICAgY29uc3QgdGl0bGVDZW50ZXJZID0gdGl0bGVZICsgdGl0bGVQYW5lbEhlaWdodCAvIDI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzAwMDAwMCc7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNDtcclxuICAgICAgICB0aGlzLmN0eC5saW5lSm9pbiA9ICdyb3VuZCc7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZUNhcCA9ICdyb3VuZCc7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlVGV4dCh0aXRsZVRleHQsIHRpdGxlQ2VudGVyWCwgdGl0bGVDZW50ZXJZKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodGl0bGVUZXh0LCB0aXRsZUNlbnRlclgsIHRpdGxlQ2VudGVyWSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3QnV0dG9uKGJ1dHRvbikge1xyXG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnJpY2tPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBicmlja0NvbG9yOiBidXR0b24uaG92ZXJlZCA/ICcjQ0Q4NTNGJyA6ICcjRDI2OTFFJyxcclxuICAgICAgICAgICAgbW9ydGFyQ29sb3I6ICcjOEI0NTEzJyxcclxuICAgICAgICAgICAgYnJpY2tXaWR0aDogNDAsXHJcbiAgICAgICAgICAgIGJyaWNrSGVpZ2h0OiAyMCxcclxuICAgICAgICAgICAgbW9ydGFyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgIG1vcnRhckhlaWdodDogMlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIEJyaWNrUGF0dGVyblJlbmRlcmVyLmRyYXdCcmlja1BhdHRlcm4oXHJcbiAgICAgICAgICAgIHRoaXMuY3R4LFxyXG4gICAgICAgICAgICBidXR0b24ueCwgYnV0dG9uLnksXHJcbiAgICAgICAgICAgIGJ1dHRvbi53aWR0aCwgYnV0dG9uLmhlaWdodCxcclxuICAgICAgICAgICAgYnJpY2tPcHRpb25zXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBidXR0b24uaG92ZXJlZCA/ICcjRjRBNDYwJyA6ICcjNjU0MzIxJztcclxuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSBidXR0b24uaG92ZXJlZCA/IDQgOiAzO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVJlY3QoYnV0dG9uLngsIGJ1dHRvbi55LCBidXR0b24ud2lkdGgsIGJ1dHRvbi5oZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMjRweCBcIkNvdXJpZXIgTmV3XCIsIFwiTHVjaWRhIENvbnNvbGVcIiwgXCJNb25hY29cIiwgXCJEZWphVnUgU2FucyBNb25vXCIsIG1vbm9zcGFjZSc7XHJcbiAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgdGhpcy5jdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYnV0dG9uQ2VudGVyWCA9IGJ1dHRvbi54ICsgYnV0dG9uLndpZHRoIC8gMjtcclxuICAgICAgICBjb25zdCBidXR0b25DZW50ZXJZID0gYnV0dG9uLnkgKyBidXR0b24uaGVpZ2h0IC8gMjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjMDAwMDAwJztcclxuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAzO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVKb2luID0gJ3JvdW5kJztcclxuICAgICAgICB0aGlzLmN0eC5saW5lQ2FwID0gJ3JvdW5kJztcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VUZXh0KGJ1dHRvbi50ZXh0LCBidXR0b25DZW50ZXJYLCBidXR0b25DZW50ZXJZKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYnV0dG9uLnRleHQsIGJ1dHRvbkNlbnRlclgsIGJ1dHRvbkNlbnRlclkpO1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0NvcHlyaWdodCgpIHtcclxuICAgICAgICBjb25zdCBjYW52YXNXaWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMjBweCBcIkNvdXJpZXIgTmV3XCIsIFwiTHVjaWRhIENvbnNvbGVcIiwgXCJNb25hY29cIiwgXCJEZWphVnUgU2FucyBNb25vXCIsIG1vbm9zcGFjZSc7XHJcbiAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ3JpZ2h0JztcclxuICAgICAgICB0aGlzLmN0eC50ZXh0QmFzZWxpbmUgPSAnYm90dG9tJztcclxuXHJcbiAgICAgICAgY29uc3QgY29weXJpZ2h0VGV4dCA9ICdBbGV4YW5kZXIgTGFkeWFldlxcblNhcmF0b3YgU3RhdGUgVW5pdmVyc2l0eSwgMjAyNSBAQWxsIHJpZ2h0cyByZXNlcnZlZC4nO1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gY29weXJpZ2h0VGV4dC5zcGxpdCgnXFxuJyk7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luID0gMjA7XHJcbiAgICAgICAgY29uc3QgbGluZUhlaWdodCA9IDI0O1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gY2FudmFzV2lkdGggLSBtYXJnaW47XHJcbiAgICAgICAgbGV0IHkgPSBjYW52YXNIZWlnaHQgLSBtYXJnaW47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSBsaW5lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjMDAwMDAwJztcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMztcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZUpvaW4gPSAncm91bmQnO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lQ2FwID0gJ3JvdW5kJztcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlVGV4dChsaW5lLCB4LCB5KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjRkZGRkZGJztcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQobGluZSwgeCwgeSk7XHJcblxyXG4gICAgICAgICAgICB5IC09IGxpbmVIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTW91c2VNb3ZlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IG1vdXNlWCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgY29uc3QgbW91c2VZID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXlCdXR0b24uaG92ZXJlZCA9IHRoaXMuaXNQb2ludEluQnV0dG9uKG1vdXNlWCwgbW91c2VZLCB0aGlzLnBsYXlCdXR0b24pO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXJCdXR0b24uaG92ZXJlZCA9IHRoaXMuaXNQb2ludEluQnV0dG9uKG1vdXNlWCwgbW91c2VZLCB0aGlzLmRlc2lnbmVyQnV0dG9uKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGxheUJ1dHRvbi5ob3ZlcmVkIHx8IHRoaXMuZGVzaWduZXJCdXR0b24uaG92ZXJlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNb3VzZUNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IG1vdXNlWCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgY29uc3QgbW91c2VZID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1BvaW50SW5CdXR0b24obW91c2VYLCBtb3VzZVksIHRoaXMucGxheUJ1dHRvbikpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuQ2F0YWxvZygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1BvaW50SW5CdXR0b24obW91c2VYLCBtb3VzZVksIHRoaXMuZGVzaWduZXJCdXR0b24pKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9uTGV2ZWxEZXNpZ25lckNsaWNrKSB0aGlzLm9uTGV2ZWxEZXNpZ25lckNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzUG9pbnRJbkJ1dHRvbih4LCB5LCBidXR0b24pIHtcclxuICAgICAgICByZXR1cm4geCA+PSBidXR0b24ueCAmJiB4IDw9IGJ1dHRvbi54ICsgYnV0dG9uLndpZHRoICYmXHJcbiAgICAgICAgICAgICAgIHkgPj0gYnV0dG9uLnkgJiYgeSA8PSBidXR0b24ueSArIGJ1dHRvbi5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlTW91c2VDbGljayk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUxvb3AoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU1vdXNlQ2xpY2spO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbklkKSB7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uSWQpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbklkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb3BlbkNhdGFsb2coKSB7XHJcbiAgICAgICAgY29uc3QgY2F0YWxvZ1N0YXRlID0gbmV3IENhdGFsb2dBcHBTdGF0ZSh0aGlzLmNhbnZhcywgeyB3aWR0aDogdGhpcy5jYW52YXMud2lkdGgsIGhlaWdodDogdGhpcy5jYW52YXMuaGVpZ2h0IH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgIGNhdGFsb2dTdGF0ZS5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLm9uUGxheUNsaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25QbGF5Q2xpY2soY2F0YWxvZ1N0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBvaW50IGZyb20gJ0Bjb21tb24vcG9pbnQuanMnO1xyXG5pbXBvcnQgU2l6ZSBmcm9tICdAY29tbW9uL3NpemUuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm91bmRzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvb3Jkcywgc2l6ZSkge1xyXG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVtcHR5KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQm91bmRzKG5ldyBQb2ludCgwLCAwKSwgbmV3IFNpemUoMCwgMCkpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0b3JJbmZvUHJvdmlkZXIge1xyXG4gICAgY29uc3RydWN0b3IoYWN0b3IpIHtcclxuICAgICAgICB0aGlzLmFjdG9yID0gYWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVidWdEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGBUeXBlOiAke3RoaXMuYWN0b3IuZ2V0VHlwZSgpfWAsXHJcbiAgICAgICAgICAgIGBQb3NpdGlvbjogKCR7dGhpcy5hY3Rvci5jb29yZHMueH0sICR7dGhpcy5hY3Rvci5jb29yZHMueX0pYCxcclxuICAgICAgICAgICAgYFNpemU6ICR7dGhpcy5hY3Rvci5zaXplLndpZHRofSB4ICR7dGhpcy5hY3Rvci5zaXplLmhlaWdodH1gXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufSIsImltcG9ydCBCb3VuZHMgZnJvbSBcIkBjb21tb24vYm91bmRzLmpzXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tICdAY29tbW9uL3BvaW50LmpzJztcclxuaW1wb3J0IFNpemUgZnJvbSAnQGNvbW1vbi9zaXplLmpzJztcclxuaW1wb3J0IEFjdG9ySW5mb1Byb3ZpZGVyIGZyb20gJy4vYWN0b3JfaW5mb19wcm92aWRlci5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQWN0b3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBjb29yZHMsIHNpemUpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFZpc2libGVCb3VuZHMoY2FudmFzU2l6ZSwgd29ybGRPZmZzZXQsIHBsYXllck9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJvdW5kcyhuZXcgUG9pbnQodGhpcy5jb29yZHMueCAtIHdvcmxkT2Zmc2V0LngsIHRoaXMuY29vcmRzLnkpLCBuZXcgU2l6ZSh0aGlzLnNpemUud2lkdGgsIHRoaXMuc2l6ZS5oZWlnaHQpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiAnQmFzZUFjdG9yJztcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCwgd29ybGRPZmZzZXQsIGNhbnZhc1NpemUpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmZvUHJvdmlkZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBY3RvckluZm9Qcm92aWRlcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1Zpc2libGUod29ybGRPZmZzZXQsIGNhbnZhc1NpemUpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZHJhd1RleHRXaXRoQmFja2dyb3VuZChjdHgsIHRleHRzLCB4LCB5LCBsaW5lSGVpZ2h0ID0gMTYpIHtcclxuICAgICAgICBpZiAoIXRleHRzIHx8IHRleHRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBtYXhXaWR0aCA9IDA7XHJcbiAgICAgICAgY3R4LmZvbnQgPSAnMTRweCBBcmlhbCc7XHJcbiAgICAgICAgZm9yIChjb25zdCB0ZXh0IG9mIHRleHRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICAgICAgICAgICAgbWF4V2lkdGggPSBNYXRoLm1heChtYXhXaWR0aCwgdGV4dFdpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDQ7XHJcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZFdpZHRoID0gbWF4V2lkdGggKyBwYWRkaW5nICogMjtcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kSGVpZ2h0ID0gdGV4dHMubGVuZ3RoICogbGluZUhlaWdodCArIHBhZGRpbmcgKiAyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpJztcclxuICAgICAgICBjdHguZmlsbFJlY3QoeCAtIHBhZGRpbmcsIHkgLSBwYWRkaW5nIC0gMTIsIGJhY2tncm91bmRXaWR0aCwgYmFja2dyb3VuZEhlaWdodCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsYWNrJztcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcclxuICAgICAgICBjdHguc3Ryb2tlUmVjdCh4IC0gcGFkZGluZywgeSAtIHBhZGRpbmcgLSAxMiwgYmFja2dyb3VuZFdpZHRoLCBiYWNrZ3JvdW5kSGVpZ2h0KTtcclxuICAgICAgICBcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XHJcbiAgICAgICAgY3R4LmZvbnQgPSAnMTRweCBBcmlhbCc7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQodGV4dHNbaV0sIHgsIHkgKyBpICogbGluZUhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VBY3RvciBmcm9tIFwiQGNvbW1vbi9nYW1lL2FjdG9ycy9iYXNlX2FjdG9yLmpzXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiQGNvbW1vbi9wb2ludC5qc1wiO1xyXG5pbXBvcnQgU2l6ZSBmcm9tIFwiQGNvbW1vbi9zaXplLmpzXCI7XHJcbmltcG9ydCBCb3VuZHMgZnJvbSBcIkBjb21tb24vYm91bmRzLmpzXCI7XHJcbmltcG9ydCBCYXNlQm91bmRhcnlJbmZvUHJvdmlkZXIgZnJvbSAnLi9iYXNlX2JvdW5kYXJ5X2luZm9fcHJvdmlkZXIuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUJvdW5kYXJ5IGV4dGVuZHMgQmFzZUFjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvb3Jkcywgc2l6ZSwgdHlwZSwgYmFja2dyb3VuZCkge1xyXG4gICAgICAgIHN1cGVyKGBib3VuZGFyeS0ke3R5cGV9YCwgY29vcmRzLCBzaXplKTtcclxuXHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xyXG4gICAgICAgIHRoaXMubWFyZ2luID0gMjA7XHJcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSAxMDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN0cm9rZUNvbG9yID0gJyM2MTJFMDknO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdCb3VuZGFyeSc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlzVmlzaWJsZSh3b3JsZE9mZnNldCwgY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCYWNrZ3JvdW5kUGl2b3RQb2ludCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50KDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdNYWluKGN0eCwgd29ybGRPZmZzZXQsIGNhbnZhc1NpemUpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGV4dHVyZU9mZnNldCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50KDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdUZXh0dXJlKGN0eCwgd29ybGRPZmZzZXQsIGNhbnZhc1NpemUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYmFja2dyb3VuZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBib3VuZHMgPSB0aGlzLmdldFZpc2libGVCb3VuZHNXaXRoTWFyZ2luKGNhbnZhc1NpemUsIHdvcmxkT2Zmc2V0LCBudWxsKTtcclxuICAgICAgICBjb25zdCB4ID0gYm91bmRzLmNvb3Jkcy54O1xyXG4gICAgICAgIGNvbnN0IHkgPSBib3VuZHMuY29vcmRzLnk7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBib3VuZHMuc2l6ZS53aWR0aDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBib3VuZHMuc2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGJyaWNrV2lkdGggPSB0aGlzLmJhY2tncm91bmQuYnJpY2tTaXplLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IGJyaWNrSGVpZ2h0ID0gdGhpcy5iYWNrZ3JvdW5kLmJyaWNrU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgbW9ydGFyV2lkdGggPSB0aGlzLmJhY2tncm91bmQubW9ydGFyU2l6ZS53aWR0aDtcclxuICAgICAgICBjb25zdCBtb3J0YXJIZWlnaHQgPSB0aGlzLmJhY2tncm91bmQubW9ydGFyU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdGFsQnJpY2tXaWR0aCA9IGJyaWNrV2lkdGggKyBtb3J0YXJXaWR0aDtcclxuICAgICAgICBjb25zdCB0b3RhbEJyaWNrSGVpZ2h0ID0gYnJpY2tIZWlnaHQgKyBtb3J0YXJIZWlnaHQ7XHJcblxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmJhY2tncm91bmQubW9ydGFyQ29sb3I7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5iYWNrZ3JvdW5kLmJyaWNrQ29sb3I7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvd3MgPSBNYXRoLmNlaWwoaGVpZ2h0IC8gdG90YWxCcmlja0hlaWdodCk7XHJcbiAgICAgICAgY29uc3QgY29scyA9IE1hdGguY2VpbCh3aWR0aCAvIHRvdGFsQnJpY2tXaWR0aCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHR1cmVPZmZzZXQgPSB0aGlzLmdldFRleHR1cmVPZmZzZXQod29ybGRPZmZzZXQpO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRPZmZzZXQgPSB0ZXh0dXJlT2Zmc2V0LnggKyBNYXRoLmZsb29yKE1hdGguYWJzKHRleHR1cmVPZmZzZXQueCkgLyB0b3RhbEJyaWNrV2lkdGgpICogdG90YWxCcmlja1dpZHRoO1xyXG5cclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3dZID0geSArIHJvdyAqIHRvdGFsQnJpY2tIZWlnaHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IChyb3cgJSAyKSAqIChicmlja1dpZHRoIC8gMik7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBjb2xzICsgMTsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbFggPSB4ICsgY29sICogdG90YWxCcmlja1dpZHRoIC0gb2Zmc2V0ICsgbm9ybWFsaXplZE9mZnNldDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbFggKyBicmlja1dpZHRoID4geCAmJiBjb2xYIDwgeCArIHdpZHRoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcm93WSA8IHkgKyBoZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmF3WCA9IE1hdGgubWF4KGNvbFgsIHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdZID0gcm93WTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmF3V2lkdGggPSBNYXRoLm1pbihjb2xYICsgYnJpY2tXaWR0aCwgeCArIHdpZHRoKSAtIGRyYXdYO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdIZWlnaHQgPSBNYXRoLm1pbihicmlja0hlaWdodCwgeSArIGhlaWdodCAtIHJvd1kpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZHJhd1dpZHRoID4gMCAmJiBkcmF3SGVpZ2h0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoZHJhd1gsIGRyYXdZLCBkcmF3V2lkdGgsIGRyYXdIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCwgd29ybGRPZmZzZXQsIGNhbnZhc1NpemUpIHsgICAgICAgXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmlzaWJsZSh3b3JsZE9mZnNldCwgY2FudmFzU2l6ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2VDb2xvcjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gMztcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dHVyZShjdHgsIHdvcmxkT2Zmc2V0LCBjYW52YXNTaXplKTtcclxuICAgICAgICB0aGlzLmRyYXdNYWluKGN0eCwgd29ybGRPZmZzZXQsIGNhbnZhc1NpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgaXNQb2ludE92ZXIocG9pbnQsIHdvcmxkT2Zmc2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50LnggPj0gdGhpcy5jb29yZHMueCAtIHdvcmxkT2Zmc2V0LnggJiYgcG9pbnQueCA8PSB0aGlzLmNvb3Jkcy54ICsgdGhpcy5zaXplLndpZHRoIC0gd29ybGRPZmZzZXQueCAmJiBcclxuICAgICAgICAgICAgICAgcG9pbnQueSA+PSB0aGlzLmNvb3Jkcy55ICYmIHBvaW50LnkgPD0gdGhpcy5jb29yZHMueSArIHRoaXMuc2l6ZS5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFZpc2libGVCb3VuZHNXaXRoTWFyZ2luKGNhbnZhc1NpemUsIHdvcmxkT2Zmc2V0LCBwbGF5ZXJPcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgdmlzaWJsZUJvdW5kcyA9IHRoaXMuZ2V0VmlzaWJsZUJvdW5kcyhjYW52YXNTaXplLCB3b3JsZE9mZnNldCwgcGxheWVyT3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCb3VuZHModmlzaWJsZUJvdW5kcy5jb29yZHMsIHZpc2libGVCb3VuZHMuc2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5mb1Byb3ZpZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmFzZUJvdW5kYXJ5SW5mb1Byb3ZpZGVyKHRoaXMpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEFjdG9ySW5mb1Byb3ZpZGVyIGZyb20gJy4uL2FjdG9yX2luZm9fcHJvdmlkZXIuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUJvdW5kYXJ5SW5mb1Byb3ZpZGVyIGV4dGVuZHMgQWN0b3JJbmZvUHJvdmlkZXIge1xyXG4gICAgZ2V0RGVidWdEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGBUeXBlOiAke3RoaXMuYWN0b3IuZ2V0VHlwZSgpfWAsXHJcbiAgICAgICAgICAgIGBQb3NpdGlvbjogKCR7dGhpcy5hY3Rvci5jb29yZHMueH0sICR7dGhpcy5hY3Rvci5jb29yZHMueX0pYCxcclxuICAgICAgICAgICAgYFNpemU6ICR7dGhpcy5hY3Rvci5zaXplLndpZHRofSB4ICR7dGhpcy5hY3Rvci5zaXplLmhlaWdodH1gLFxyXG4gICAgICAgICAgICBgQm91bmRhcnkgVHlwZTogJHt0aGlzLmFjdG9yLnR5cGV9YCxcclxuICAgICAgICAgICAgYE1hcmdpbjogJHt0aGlzLmFjdG9yLm1hcmdpbn1weGAsXHJcbiAgICAgICAgICAgIGBMaW5lIFdpZHRoOiAke3RoaXMuYWN0b3IubGluZVdpZHRofXB4YFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZUJvdW5kYXJ5IGZyb20gJ0Bjb21tb24vZ2FtZS9hY3RvcnMvYm91bmRhcnkvYmFzZV9ib3VuZGFyeS5qcyc7XHJcbmltcG9ydCBCb3VuZHMgZnJvbSAnQGNvbW1vbi9ib3VuZHMuanMnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnQGNvbW1vbi9wb2ludC5qcyc7XHJcbmltcG9ydCBTaXplIGZyb20gJ0Bjb21tb24vc2l6ZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3R0b21Cb3VuZGFyeSBleHRlbmRzIEJhc2VCb3VuZGFyeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb29yZHMsIHNpemUsIGJhY2tncm91bmQpIHtcclxuICAgICAgICBzdXBlcihjb29yZHMsIHNpemUsICdib3R0b20nLCBiYWNrZ3JvdW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiAnQm90dG9tIGJvdW5kYXJ5JztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUZXh0dXJlT2Zmc2V0KHdvcmxkT2Zmc2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludCgtd29ybGRPZmZzZXQueCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWaXNpYmxlKHdvcmxkT2Zmc2V0LCBjYW52YXNTaXplKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd01haW4oY3R4LCB3b3JsZE9mZnNldCwgY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlQ29sb3I7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDEwO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb25zdCBsaW5lWSA9IE1hdGguZmxvb3IodGhpcy5jb29yZHMueSkgKyA1O1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oLTIwLCBsaW5lWSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyhjYW52YXNTaXplLndpZHRoICsgMjAsIGxpbmVZKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBnZXRWaXNpYmxlQm91bmRzKGNhbnZhc1NpemUsIHdvcmxkT2Zmc2V0LCBwbGF5ZXJPcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCb3VuZHMobmV3IFBvaW50KDAsIHRoaXMuY29vcmRzLnkpLCBuZXcgU2l6ZShjYW52YXNTaXplLndpZHRoLCB0aGlzLnNpemUuaGVpZ2h0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmlzaWJsZUJvdW5kc1dpdGhNYXJnaW4oY2FudmFzU2l6ZSwgd29ybGRPZmZzZXQsIHBsYXllck9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCB2aXNpYmxlQm91bmRzID0gdGhpcy5nZXRWaXNpYmxlQm91bmRzKGNhbnZhc1NpemUsIHdvcmxkT2Zmc2V0LCBwbGF5ZXJPcHRpb25zKTtcclxuICAgICAgICBjb25zdCBuZXdYID0gdmlzaWJsZUJvdW5kcy5jb29yZHMueCAtIHRoaXMubWFyZ2luO1xyXG4gICAgICAgIGNvbnN0IG5ld1kgPSB2aXNpYmxlQm91bmRzLmNvb3Jkcy55O1xyXG4gICAgICAgIGNvbnN0IG5ld1dpZHRoID0gdmlzaWJsZUJvdW5kcy5zaXplLndpZHRoICsgMiAqIHRoaXMubWFyZ2luO1xyXG4gICAgICAgIGNvbnN0IG5ld0hlaWdodCA9IHZpc2libGVCb3VuZHMuc2l6ZS5oZWlnaHQgKyB0aGlzLm1hcmdpbjtcclxuICAgICAgICByZXR1cm4gbmV3IEJvdW5kcyhuZXcgUG9pbnQobmV3WCwgbmV3WSksIG5ldyBTaXplKG5ld1dpZHRoLCBuZXdIZWlnaHQpKTtcclxuICAgIH1cclxufSIsImltcG9ydCBTaXplIGZyb20gXCJAY29tbW9uL3NpemUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kYXJ5QmFja2dyb3VuZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBicmlja1NpemUgPSBuZXcgU2l6ZSgzMCwgMTUpLFxyXG4gICAgICAgIG1vcnRhclNpemUgPSBuZXcgU2l6ZSgyLCAyKSxcclxuICAgICAgICBicmlja0NvbG9yID0gJyM4QjQ1MTMnLFxyXG4gICAgICAgIG1vcnRhckNvbG9yID0gJyNDMEMwQzAnXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmJyaWNrU2l6ZSA9IGJyaWNrU2l6ZTtcclxuICAgICAgICB0aGlzLm1vcnRhclNpemUgPSBtb3J0YXJTaXplO1xyXG4gICAgICAgIHRoaXMuYnJpY2tDb2xvciA9IGJyaWNrQ29sb3I7XHJcbiAgICAgICAgdGhpcy5tb3J0YXJDb2xvciA9IG1vcnRhckNvbG9yO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJvdW5kcyBmcm9tICdAY29tbW9uL2JvdW5kcy5qcyc7XHJcbmltcG9ydCBCYXNlQm91bmRhcnkgZnJvbSAnQGNvbW1vbi9nYW1lL2FjdG9ycy9ib3VuZGFyeS9iYXNlX2JvdW5kYXJ5LmpzJztcclxuaW1wb3J0IFBvaW50IGZyb20gJ0Bjb21tb24vcG9pbnQuanMnO1xyXG5pbXBvcnQgU2l6ZSBmcm9tICdAY29tbW9uL3NpemUuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVmdEJvdW5kYXJ5IGV4dGVuZHMgQmFzZUJvdW5kYXJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvb3Jkcywgc2l6ZSwgYmFja2dyb3VuZCkge1xyXG4gICAgICAgIHN1cGVyKGNvb3Jkcywgc2l6ZSwgJ2xlZnQnLCBiYWNrZ3JvdW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiAnTGVmdCBib3VuZGFyeSc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWaXNpYmxlKHdvcmxkT2Zmc2V0LCBjYW52YXNTaXplKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRzLnggLSB3b3JsZE9mZnNldC54ICsgdGhpcy5zaXplLndpZHRoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3TWFpbihjdHgsIHdvcmxkT2Zmc2V0LCBjYW52YXNTaXplKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IHRoaXMuY29vcmRzLnggLSB3b3JsZE9mZnNldC54O1xyXG5cclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZUNvbG9yO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxMDtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29uc3QgbGluZVggPSB4ICsgdGhpcy5zaXplLndpZHRoIC0gNTtcclxuICAgICAgICBjdHgubW92ZVRvKGxpbmVYLCAwKTtcclxuICAgICAgICBjdHgubGluZVRvKGxpbmVYLCB0aGlzLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBnZXRWaXNpYmxlQm91bmRzKGNhbnZhc1NpemUsIHdvcmxkT2Zmc2V0LCBwbGF5ZXJPcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCb3VuZHMobmV3IFBvaW50KHRoaXMuY29vcmRzLnggLSB3b3JsZE9mZnNldC54LCAwKSwgbmV3IFNpemUodGhpcy5zaXplLndpZHRoLCBjYW52YXNTaXplLmhlaWdodCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZpc2libGVCb3VuZHNXaXRoTWFyZ2luKGNhbnZhc1NpemUsIHdvcmxkT2Zmc2V0LCBwbGF5ZXJPcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgdmlzaWJsZUJvdW5kcyA9IHRoaXMuZ2V0VmlzaWJsZUJvdW5kcyhjYW52YXNTaXplLCB3b3JsZE9mZnNldCwgcGxheWVyT3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgbmV3WCA9IHZpc2libGVCb3VuZHMuY29vcmRzLnggLSB0aGlzLm1hcmdpbjtcclxuICAgICAgICBjb25zdCBuZXdZID0gdmlzaWJsZUJvdW5kcy5jb29yZHMueTtcclxuICAgICAgICBjb25zdCBuZXdXaWR0aCA9IHZpc2libGVCb3VuZHMuc2l6ZS53aWR0aCArIHRoaXMubWFyZ2luO1xyXG4gICAgICAgIGNvbnN0IG5ld0hlaWdodCA9IHZpc2libGVCb3VuZHMuc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCb3VuZHMobmV3IFBvaW50KG5ld1gsIG5ld1kpLCBuZXcgU2l6ZShuZXdXaWR0aCwgbmV3SGVpZ2h0KSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZUJvdW5kYXJ5IGZyb20gJ0Bjb21tb24vZ2FtZS9hY3RvcnMvYm91bmRhcnkvYmFzZV9ib3VuZGFyeS5qcyc7XHJcbmltcG9ydCBCb3VuZHMgZnJvbSAnQGNvbW1vbi9ib3VuZHMuanMnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnQGNvbW1vbi9wb2ludC5qcyc7XHJcbmltcG9ydCBTaXplIGZyb20gJ0Bjb21tb24vc2l6ZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSaWdodEJvdW5kYXJ5IGV4dGVuZHMgQmFzZUJvdW5kYXJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvb3Jkcywgc2l6ZSwgYmFja2dyb3VuZCkge1xyXG4gICAgICAgIHN1cGVyKGNvb3Jkcywgc2l6ZSwgJ3JpZ2h0JywgYmFja2dyb3VuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gJ1JpZ2h0IGJvdW5kYXJ5JztcclxuICAgIH1cclxuXHJcbiAgICBpc1Zpc2libGUod29ybGRPZmZzZXQsIGNhbnZhc1NpemUpIHtcclxuICAgICAgICBjb25zdCB4ID0gdGhpcy5jb29yZHMueCAtIHdvcmxkT2Zmc2V0Lng7XHJcbiAgICAgICAgcmV0dXJuIHggPCBjYW52YXNTaXplLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRnVsbHlWaXNpYmxlKHdvcmxkT2Zmc2V0LCBjYW52YXNTaXplKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IHRoaXMuY29vcmRzLnggLSB3b3JsZE9mZnNldC54O1xyXG4gICAgICAgIHJldHVybiB4ICsgdGhpcy5zaXplLndpZHRoIDw9IGNhbnZhc1NpemUud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd01haW4oY3R4LCB3b3JsZE9mZnNldCwgY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIGxldCB4ID0gdGhpcy5jb29yZHMueCAtIHdvcmxkT2Zmc2V0Lng7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuaXNGdWxseVZpc2libGUod29ybGRPZmZzZXQsIGNhbnZhc1NpemUpKSB7XHJcbiAgICAgICAgICAgIHggPSBjYW52YXNTaXplLndpZHRoIC0gdGhpcy5zaXplLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZUNvbG9yO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxMDtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29uc3QgbGluZVggPSB4ICsgNTtcclxuICAgICAgICBjdHgubW92ZVRvKGxpbmVYLCAwKTtcclxuICAgICAgICBjdHgubGluZVRvKGxpbmVYLCB0aGlzLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFZpc2libGVCb3VuZHMoY2FudmFzU2l6ZSwgd29ybGRPZmZzZXQsIHBsYXllck9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJvdW5kcyhuZXcgUG9pbnQodGhpcy5jb29yZHMueCAtIHdvcmxkT2Zmc2V0LngsIDApLCBuZXcgU2l6ZSh0aGlzLnNpemUud2lkdGgsIGNhbnZhc1NpemUuaGVpZ2h0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmlzaWJsZUJvdW5kc1dpdGhNYXJnaW4oY2FudmFzU2l6ZSwgd29ybGRPZmZzZXQsIHBsYXllck9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCB2aXNpYmxlQm91bmRzID0gdGhpcy5nZXRWaXNpYmxlQm91bmRzKGNhbnZhc1NpemUsIHdvcmxkT2Zmc2V0LCBwbGF5ZXJPcHRpb25zKTtcclxuICAgICAgICBjb25zdCBuZXdYID0gdmlzaWJsZUJvdW5kcy5jb29yZHMueDtcclxuICAgICAgICBjb25zdCBuZXdZID0gdmlzaWJsZUJvdW5kcy5jb29yZHMueTtcclxuICAgICAgICBjb25zdCBuZXdXaWR0aCA9IHZpc2libGVCb3VuZHMuc2l6ZS53aWR0aCArIHRoaXMubWFyZ2luO1xyXG4gICAgICAgIGNvbnN0IG5ld0hlaWdodCA9IHZpc2libGVCb3VuZHMuc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCb3VuZHMobmV3IFBvaW50KG5ld1gsIG5ld1kpLCBuZXcgU2l6ZShuZXdXaWR0aCwgbmV3SGVpZ2h0KSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZUJvdW5kYXJ5IGZyb20gJ0Bjb21tb24vZ2FtZS9hY3RvcnMvYm91bmRhcnkvYmFzZV9ib3VuZGFyeS5qcyc7XHJcbmltcG9ydCBCb3VuZHMgZnJvbSAnQGNvbW1vbi9ib3VuZHMuanMnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnQGNvbW1vbi9wb2ludC5qcyc7XHJcbmltcG9ydCBTaXplIGZyb20gJ0Bjb21tb24vc2l6ZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BCb3VuZGFyeSBleHRlbmRzIEJhc2VCb3VuZGFyeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb29yZHMsIHNpemUsIGJhY2tncm91bmQpIHtcclxuICAgICAgICBzdXBlcihjb29yZHMsIHNpemUsICd0b3AnLCBiYWNrZ3JvdW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiAnVG9wIGJvdW5kYXJ5JztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUZXh0dXJlT2Zmc2V0KHdvcmxkT2Zmc2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludCgtd29ybGRPZmZzZXQueCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWaXNpYmxlKHdvcmxkT2Zmc2V0LCBjYW52YXNTaXplKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd01haW4oY3R4LCB3b3JsZE9mZnNldCwgY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IDIwO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0WCA9IC1tYXJnaW47XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBjYW52YXNTaXplLndpZHRoICsgbWFyZ2luICogMjtcclxuXHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2VDb2xvcjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gMTA7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnN0IGxpbmVZID0gdGhpcy5jb29yZHMueSArIHRoaXMuc2l6ZS5oZWlnaHQgLSA1O1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oc3RhcnRYLCBsaW5lWSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyhzdGFydFggKyB3aWR0aCwgbGluZVkpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGdldFZpc2libGVCb3VuZHMoY2FudmFzU2l6ZSwgd29ybGRPZmZzZXQsIHBsYXllck9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJvdW5kcyhuZXcgUG9pbnQoMCwgdGhpcy5jb29yZHMueSksIG5ldyBTaXplKGNhbnZhc1NpemUud2lkdGgsIHRoaXMuc2l6ZS5oZWlnaHQpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaXNpYmxlQm91bmRzV2l0aE1hcmdpbihjYW52YXNTaXplLCB3b3JsZE9mZnNldCwgcGxheWVyT3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IHZpc2libGVCb3VuZHMgPSB0aGlzLmdldFZpc2libGVCb3VuZHMoY2FudmFzU2l6ZSwgd29ybGRPZmZzZXQsIHBsYXllck9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IG5ld1ggPSB2aXNpYmxlQm91bmRzLmNvb3Jkcy54IC0gdGhpcy5tYXJnaW47XHJcbiAgICAgICAgY29uc3QgbmV3WSA9IHZpc2libGVCb3VuZHMuY29vcmRzLnkgLSB0aGlzLm1hcmdpbjtcclxuICAgICAgICBjb25zdCBuZXdXaWR0aCA9IHZpc2libGVCb3VuZHMuc2l6ZS53aWR0aCArIDIgKiB0aGlzLm1hcmdpbjtcclxuICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSB2aXNpYmxlQm91bmRzLnNpemUuaGVpZ2h0ICsgdGhpcy5tYXJnaW47XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCb3VuZHMobmV3IFBvaW50KG5ld1gsIG5ld1kpLCBuZXcgU2l6ZShuZXdXaWR0aCwgbmV3SGVpZ2h0KSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZUFjdG9yIGZyb20gJ0Bjb21tb24vZ2FtZS9hY3RvcnMvYmFzZV9hY3Rvci5qcyc7XHJcbmltcG9ydCBQb2ludCBmcm9tICdAY29tbW9uL3BvaW50LmpzJztcclxuaW1wb3J0IEJvdW5kcyBmcm9tICdAY29tbW9uL2JvdW5kcy5qcyc7XHJcbmltcG9ydCBTaXplIGZyb20gJ0Bjb21tb24vc2l6ZS5qcyc7XHJcbmltcG9ydCBCcmlja0luZm9Qcm92aWRlciBmcm9tICcuL2JyaWNrX2luZm9fcHJvdmlkZXIuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJpY2sgZXh0ZW5kcyBCYXNlQWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoaWQsIGNvb3Jkcywgc2l6ZSwgYmFja2dyb3VuZENvbG9yID0gJyM0QTU1NjgnLCBzdHJva2VXaWR0aCA9IDIsIHN0cm9rZUNvbG9yID0gJyMyRDM3NDgnLCBpc0FjdGl2ZSA9IHRydWUpIHtcclxuICAgICAgICBzdXBlcihpZCwgY29vcmRzLCBzaXplKTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB0aGlzLnN0cm9rZVdpZHRoID0gc3Ryb2tlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5zdHJva2VDb2xvciA9IHN0cm9rZUNvbG9yO1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBpc0FjdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiAnQnJpY2snO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZpc2libGVCb3VuZHMoY2FudmFzU2l6ZSwgd29ybGRPZmZzZXQsIHBsYXllck9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJvdW5kcyhuZXcgUG9pbnQodGhpcy5jb29yZHMueCAtIHdvcmxkT2Zmc2V0LngsIHRoaXMuY29vcmRzLnkgLSB3b3JsZE9mZnNldC55KSwgbmV3IFNpemUodGhpcy5zaXplLndpZHRoLCB0aGlzLnNpemUuaGVpZ2h0KSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlzUG9pbnRPdmVyKHBvaW50LCB3b3JsZE9mZnNldCkge1xyXG4gICAgICAgIHJldHVybiBwb2ludC54ID49IHRoaXMuY29vcmRzLnggLSB3b3JsZE9mZnNldC54ICYmIHBvaW50LnggPD0gdGhpcy5jb29yZHMueCArIHRoaXMuc2l6ZS53aWR0aCAtIHdvcmxkT2Zmc2V0LnggJiYgXHJcbiAgICAgICAgICAgICAgIHBvaW50LnkgPj0gdGhpcy5jb29yZHMueSAtIHdvcmxkT2Zmc2V0LnkgJiYgcG9pbnQueSA8PSB0aGlzLmNvb3Jkcy55ICsgdGhpcy5zaXplLmhlaWdodCAtIHdvcmxkT2Zmc2V0Lnk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5mb1Byb3ZpZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQnJpY2tJbmZvUHJvdmlkZXIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWaXNpYmxlKHdvcmxkT2Zmc2V0LCBjYW52YXNTaXplKSB7XHJcbiAgICAgICAgY29uc3QgcmlnaHRFZGdlID0gdGhpcy5jb29yZHMueCArIHRoaXMuc2l6ZS53aWR0aCAtIHdvcmxkT2Zmc2V0Lng7XHJcbiAgICAgICAgY29uc3QgbGVmdEVkZ2UgPSB0aGlzLmNvb3Jkcy54IC0gd29ybGRPZmZzZXQueDtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcmlnaHRFZGdlID4gMCAmJiBsZWZ0RWRnZSA8IGNhbnZhc1NpemUud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHgsIHdvcmxkT2Zmc2V0LCBjYW52YXNTaXplKSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlQ29sb3I7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuc3Ryb2tlV2lkdGg7XHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAvLyBjdHgucmVjdChcclxuICAgICAgICAvLyAgICAgdGhpcy5jb29yZHMueCAtIHdvcmxkT2Zmc2V0LnggKyB0aGlzLnN0cm9rZVdpZHRoIC8gMixcclxuICAgICAgICAvLyAgICAgdGhpcy5jb29yZHMueSArIHRoaXMuc3Ryb2tlV2lkdGggLyAyLFxyXG4gICAgICAgIC8vICAgICB0aGlzLnNpemUud2lkdGggLSB0aGlzLnN0cm9rZVdpZHRoLFxyXG4gICAgICAgIC8vICAgICB0aGlzLnNpemUuaGVpZ2h0IC0gdGhpcy5zdHJva2VXaWR0aFxyXG4gICAgICAgIC8vICk7XHJcbiAgICAgICAgY3R4LnJlY3QoXHJcbiAgICAgICAgICAgIHRoaXMuY29vcmRzLnggLSB3b3JsZE9mZnNldC54LFxyXG4gICAgICAgICAgICB0aGlzLmNvb3Jkcy55LFxyXG4gICAgICAgICAgICB0aGlzLnNpemUud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZS5oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuc3Ryb2tlV2lkdGggPiAwKSB7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQWN0b3JJbmZvUHJvdmlkZXIgZnJvbSAnLi4vYWN0b3JfaW5mb19wcm92aWRlci5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmlja0luZm9Qcm92aWRlciBleHRlbmRzIEFjdG9ySW5mb1Byb3ZpZGVyIHtcclxuICAgIGdldERlYnVnRGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBgVHlwZTogJHt0aGlzLmFjdG9yLmdldFR5cGUoKX1gLFxyXG4gICAgICAgICAgICBgUG9zaXRpb246ICgke3RoaXMuYWN0b3IuY29vcmRzLnh9LCAke3RoaXMuYWN0b3IuY29vcmRzLnl9KWAsXHJcbiAgICAgICAgICAgIGBTaXplOiAke3RoaXMuYWN0b3Iuc2l6ZS53aWR0aH0geCAke3RoaXMuYWN0b3Iuc2l6ZS5oZWlnaHR9YCxcclxuICAgICAgICAgICAgYEFjdGl2ZTogJHt0aGlzLmFjdG9yLmlzQWN0aXZlfWAsXHJcbiAgICAgICAgICAgIGBCYWNrZ3JvdW5kOiAke3RoaXMuYWN0b3IuYmFja2dyb3VuZENvbG9yfWAsXHJcbiAgICAgICAgICAgIGBTdHJva2U6ICR7dGhpcy5hY3Rvci5zdHJva2VDb2xvcn1gXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlQWN0b3IgZnJvbSAnQGNvbW1vbi9nYW1lL2FjdG9ycy9iYXNlX2FjdG9yLmpzJztcclxuaW1wb3J0IFBvaW50IGZyb20gJ0Bjb21tb24vcG9pbnQuanMnO1xyXG5pbXBvcnQgQm91bmRzIGZyb20gJ0Bjb21tb24vYm91bmRzLmpzJztcclxuaW1wb3J0IFNpemUgZnJvbSAnQGNvbW1vbi9zaXplLmpzJztcclxuaW1wb3J0IEp1bXBPcmJJbmZvUHJvdmlkZXIgZnJvbSAnQGNvbW1vbi9nYW1lL2FjdG9ycy9qdW1wX29yYi9qdW1wX29yYl9pbmZvX3Byb3ZpZGVyLmpzJztcclxuaW1wb3J0IFB1bHNlQW5pbWF0aW9uIGZyb20gJ0Bjb21tb24vZ2FtZS9hY3RvcnMvanVtcF9vcmIvcHVsc2VfYW5pbWF0aW9uLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1bXBPcmIgZXh0ZW5kcyBCYXNlQWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoaWQsIGNvb3JkcywgaXNSZXZlcnNlZCkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBjb29yZHMsIG5ldyBTaXplKDMwLCAzMCkpO1xyXG4gICAgICAgIHRoaXMuaXNSZXZlcnNlZCA9IGlzUmV2ZXJzZWQ7XHJcbiAgICAgICAgdGhpcy5wdWxzZUFuaW1hdGlvbiA9IG5ldyBQdWxzZUFuaW1hdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdKdW1wT3JiJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaXNpYmxlQm91bmRzKGNhbnZhc1NpemUsIHdvcmxkT2Zmc2V0LCBwbGF5ZXJPcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCb3VuZHMobmV3IFBvaW50KHRoaXMuY29vcmRzLnggLSB3b3JsZE9mZnNldC54LCB0aGlzLmNvb3Jkcy55IC0gd29ybGRPZmZzZXQueSksIG5ldyBTaXplKHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpc1BvaW50T3Zlcihwb2ludCwgd29ybGRPZmZzZXQpIHtcclxuICAgICAgICByZXR1cm4gcG9pbnQueCA+PSB0aGlzLmNvb3Jkcy54IC0gd29ybGRPZmZzZXQueCAmJiBwb2ludC54IDw9IHRoaXMuY29vcmRzLnggKyB0aGlzLnNpemUud2lkdGggLSB3b3JsZE9mZnNldC54ICYmIFxyXG4gICAgICAgICAgICAgICAgcG9pbnQueSA+PSB0aGlzLmNvb3Jkcy55IC0gd29ybGRPZmZzZXQueSAmJiBwb2ludC55IDw9IHRoaXMuY29vcmRzLnkgKyB0aGlzLnNpemUuaGVpZ2h0IC0gd29ybGRPZmZzZXQueTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmZvUHJvdmlkZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBKdW1wT3JiSW5mb1Byb3ZpZGVyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh3b3JsZFNwZWVkLCBmYWN0b3IgPSAxKSB7XHJcbiAgICAgICAgdGhpcy5wdWxzZUFuaW1hdGlvbi51cGRhdGUoZmFjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFB1bHNlQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucHVsc2VBbmltYXRpb24uc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1Zpc2libGUod29ybGRPZmZzZXQsIGNhbnZhc1NpemUpIHtcclxuICAgICAgICBjb25zdCByaWdodEVkZ2UgPSB0aGlzLmNvb3Jkcy54ICsgdGhpcy5zaXplLndpZHRoIC0gd29ybGRPZmZzZXQueDtcclxuICAgICAgICBjb25zdCBsZWZ0RWRnZSA9IHRoaXMuY29vcmRzLnggLSB3b3JsZE9mZnNldC54O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByaWdodEVkZ2UgPiAwICYmIGxlZnRFZGdlIDwgY2FudmFzU2l6ZS53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCwgd29ybGRPZmZzZXQsIGNhbnZhc1NpemUpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBjZW50ZXIgPSBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAgIHRoaXMuY29vcmRzLnggLSB3b3JsZE9mZnNldC54ICsgdGhpcy5zaXplLndpZHRoIC8gMixcclxuICAgICAgICAgICAgdGhpcy5jb29yZHMueSArIHRoaXMuc2l6ZS5oZWlnaHQgLyAyXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnB1bHNlQW5pbWF0aW9uLmRyYXcoY3R4LCBjZW50ZXIpO1xyXG5cclxuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSAwLjc7XHJcblxyXG4gICAgICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KFxyXG4gICAgICAgICAgICB0aGlzLmNvb3Jkcy54IC0gd29ybGRPZmZzZXQueCArIHRoaXMuc2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHRoaXMuY29vcmRzLnkgKyB0aGlzLnNpemUuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgdGhpcy5jb29yZHMueCAtIHdvcmxkT2Zmc2V0LnggKyB0aGlzLnNpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB0aGlzLmNvb3Jkcy55ICsgdGhpcy5zaXplLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgIE1hdGgubWF4KHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCkgLyAyXHJcbiAgICAgICAgKTtcclxuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJyNGRkQ3MDAnKTtcclxuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC43LCAnI0ZGQTUwMCcpO1xyXG4gICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAnI0ZGOEMwMCcpO1xyXG5cclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNCODg2MEInO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG5cclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmVsbGlwc2UoXHJcbiAgICAgICAgICAgIHRoaXMuY29vcmRzLnggLSB3b3JsZE9mZnNldC54ICsgdGhpcy5zaXplLndpZHRoIC8gMixcclxuICAgICAgICAgICAgdGhpcy5jb29yZHMueSArIHRoaXMuc2l6ZS5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICB0aGlzLnNpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB0aGlzLnNpemUuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMiAqIE1hdGguUElcclxuICAgICAgICApO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEFjdG9ySW5mb1Byb3ZpZGVyIGZyb20gJ0Bjb21tb24vZ2FtZS9hY3RvcnMvYWN0b3JfaW5mb19wcm92aWRlci5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKdW1wT3JiSW5mb1Byb3ZpZGVyIGV4dGVuZHMgQWN0b3JJbmZvUHJvdmlkZXIge1xyXG4gICAgZ2V0RGVidWdEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcblxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU2l6ZSBmcm9tICdAY29tbW9uL3NpemUuanMnO1xyXG5cclxuY2xhc3MgUHVsc2VDaXJjbGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbG9yLCBtYXhTaXplKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMubWF4U2l6ZSA9IG1heFNpemU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2l6ZSA9IG5ldyBTaXplKDAsIDApO1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGZhY3Rvcikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSAmJiAhdGhpcy5pc0NvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzQWN0aXZlICYmICF0aGlzLmlzQ29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy5jdXJyZW50U2l6ZS53aWR0aCAvIHRoaXMubWF4U2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgZWFzZU91dEZhY3RvciA9ICgxIC0gTWF0aC5wb3cocHJvZ3Jlc3MsIDMpKSAqIDEuMzI7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VTcGVlZCA9IDE4O1xyXG4gICAgICAgICAgICBjb25zdCBleHBhbmRTcGVlZCA9IGJhc2VTcGVlZCAqIGVhc2VPdXRGYWN0b3I7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdXaWR0aCA9IE1hdGgubWluKHRoaXMuY3VycmVudFNpemUud2lkdGggKyAoZXhwYW5kU3BlZWQgKiBmYWN0b3IpLCB0aGlzLm1heFNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBNYXRoLm1pbih0aGlzLmN1cnJlbnRTaXplLmhlaWdodCArIChleHBhbmRTcGVlZCAqIGZhY3RvciksIHRoaXMubWF4U2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaXplID0gbmV3IFNpemUobmV3V2lkdGgsIG5ld0hlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2l6ZS53aWR0aCA+PSB0aGlzLm1heFNpemUud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4LCBjZW50ZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZSAmJiAhdGhpcy5pc0NvbXBsZXRlZCAmJiB0aGlzLmN1cnJlbnRTaXplLndpZHRoID4gMCkge1xyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNGRkQ3MDAnO1xyXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHguZWxsaXBzZShcclxuICAgICAgICAgICAgICAgIGNlbnRlci54LFxyXG4gICAgICAgICAgICAgICAgY2VudGVyLnksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaXplLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNpemUuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgMiAqIE1hdGguUElcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1bHNlQW5pbWF0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYXhTaXplID0gbmV3IFNpemUoNzUsIDc1KTtcclxuICAgICAgICB0aGlzLmNpcmNsZSA9IG5ldyBQdWxzZUNpcmNsZSgnI0ZGQTUwMCcsIHRoaXMubWF4U2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaXJjbGUuY3VycmVudFNpemUgPSBuZXcgU2l6ZSgwLCAwKTtcclxuICAgICAgICB0aGlzLmNpcmNsZS5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2lyY2xlLmlzQ29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGZhY3Rvcikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY2lyY2xlLnVwZGF0ZShmYWN0b3IpO1xyXG4gICAgICAgIGlmICh0aGlzLmNpcmNsZS5pc0NvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4LCBjZW50ZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmNpcmNsZS5kcmF3KGN0eCwgY2VudGVyKTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCbGlua0FuaW1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJsaW5rVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuY2xvc2luZ0R1cmF0aW9uID0gMTYwO1xyXG4gICAgICAgIHRoaXMuY2xvc2VkRHVyYXRpb24gPSAxNjA7XHJcbiAgICAgICAgdGhpcy5vcGVuaW5nRHVyYXRpb24gPSAzNjA7XHJcbiAgICAgICAgdGhpcy5ibGlua0ludGVydmFsID0gNDgwMDtcclxuICAgICAgICB0aGlzLmJsaW5rU3RhdGUgPSAnb3Blbic7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGZhY3Rvcikge1xyXG4gICAgICAgIHRoaXMuYmxpbmtUaW1lciArPSBmYWN0b3IgKiAxNjtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmJsaW5rU3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnb3Blbic6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ibGlua1RpbWVyID49IHRoaXMuYmxpbmtJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmxpbmtTdGF0ZSA9ICdjbG9zaW5nJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsaW5rVGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdjbG9zaW5nJzpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJsaW5rVGltZXIgPj0gdGhpcy5jbG9zaW5nRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsaW5rU3RhdGUgPSAnY2xvc2VkJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsaW5rVGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdjbG9zZWQnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmxpbmtUaW1lciA+PSB0aGlzLmNsb3NlZER1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ibGlua1N0YXRlID0gJ29wZW5pbmcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmxpbmtUaW1lciA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ29wZW5pbmcnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmxpbmtUaW1lciA+PSB0aGlzLm9wZW5pbmdEdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmxpbmtTdGF0ZSA9ICdvcGVuJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsaW5rVGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzRXllc0Nsb3NlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ibGlua1N0YXRlID09PSAnY2xvc2VkJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRCbGlua1Byb2dyZXNzKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5ibGlua1N0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Nsb3NpbmcnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKDEsIHRoaXMuYmxpbmtUaW1lciAvIHRoaXMuY2xvc2luZ0R1cmF0aW9uKTtcclxuICAgICAgICAgICAgY2FzZSAnY2xvc2VkJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICBjYXNlICdvcGVuaW5nJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCAxIC0gKHRoaXMuYmxpbmtUaW1lciAvIHRoaXMub3BlbmluZ0R1cmF0aW9uKSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZUFjdG9yIGZyb20gXCJAY29tbW9uL2dhbWUvYWN0b3JzL2Jhc2VfYWN0b3IuanNcIjtcclxuaW1wb3J0IFBsYXllck9wdGlvbnMgZnJvbSBcIkBjb21tb24vZ2FtZS9wbGF5ZXJfb3B0aW9ucy5qc1wiO1xyXG5pbXBvcnQgQm91bmRzIGZyb20gXCJAY29tbW9uL2JvdW5kcy5qc1wiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnQGNvbW1vbi9wb2ludC5qcyc7XHJcbmltcG9ydCBTaXplIGZyb20gJ0Bjb21tb24vc2l6ZS5qcyc7XHJcbmltcG9ydCBQbGF5ZXJJbmZvUHJvdmlkZXIgZnJvbSAnQGNvbW1vbi9nYW1lL2FjdG9ycy9wbGF5ZXIvcGxheWVyX2luZm9fcHJvdmlkZXIuanMnO1xyXG5pbXBvcnQgQmxpbmtBbmltYXRpb24gZnJvbSAnQGNvbW1vbi9nYW1lL2FjdG9ycy9wbGF5ZXIvYmxpbmtfYW5pbWF0aW9uLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1YmVQbGF5ZXIgZXh0ZW5kcyBCYXNlQWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoY29vcmRzLCBzaXplKSB7XHJcbiAgICAgICAgc3VwZXIoJ3BsYXllcicsIGNvb3Jkcywgc2l6ZSk7XHJcblxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgUG9pbnQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5vbkJyaWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNFeHBsb2RpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzSW50ZW50aW9uYWxKdW1wID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblNwZWVkID0gMDtcclxuICAgICAgICB0aGlzLmJsaW5rQW5pbWF0aW9uID0gbmV3IEJsaW5rQW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gJ0N1YmVQbGF5ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHgsIHdvcmxkT2Zmc2V0LCBwbGF5ZXJPcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRXhwbG9kaW5nKSB7XHJcbiAgICAgICAgICAgIHBsYXllck9wdGlvbnMgPSBwbGF5ZXJPcHRpb25zIHx8IFBsYXllck9wdGlvbnMuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRYID0gcGxheWVyT3B0aW9ucy5pc1BsYXllckZpeGVkID8gMCA6IC13b3JsZE9mZnNldC54O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlclggPSB0aGlzLmNvb3Jkcy54ICsgb2Zmc2V0WCArIHRoaXMuc2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlclkgPSB0aGlzLmNvb3Jkcy55ICsgdGhpcy5zaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKGNlbnRlclgsIGNlbnRlclkpO1xyXG4gICAgICAgICAgICBjdHgucm90YXRlKHRoaXMucm90YXRpb24pO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKC10aGlzLnNpemUud2lkdGggLyAyLCAtdGhpcy5zaXplLmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjRkY4QzAwJztcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNGRjY2MDAnO1xyXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcclxuXHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4LnJvdW5kUmVjdCgxLCAxLCB0aGlzLnNpemUud2lkdGggLSAyLCB0aGlzLnNpemUuaGVpZ2h0IC0gMiwgOCk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHcgPSB0aGlzLnNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGggPSB0aGlzLnNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICBjb25zdCB5T2Zmc2V0ID0gNjtcclxuXHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI0ZGQjM0Nyc7XHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbyh3ICogMC4yLCBoICogMC4xKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh3ICogMC4xNSwgaCAqIDAuMjUpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHcgKiAwLjMsIGggKiAwLjIpO1xyXG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbyh3ICogMC44LCBoICogMC4xKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh3ICogMC43LCBoICogMC4yKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh3ICogMC44NSwgaCAqIDAuMjUpO1xyXG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5ibGlua0FuaW1hdGlvbi5pc0V5ZXNDbG9zZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHcgKiAwLjI5LCBoICogMC4zMiArIHlPZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh3ICogMC40MSwgaCAqIDAuMzIgKyB5T2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8odyAqIDAuNTksIGggKiAwLjMyICsgeU9mZnNldCk7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHcgKiAwLjcxLCBoICogMC4zMiArIHlPZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjRkZGJztcclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5lbGxpcHNlKHcgKiAwLjM1LCBoICogMC4zMiArIHlPZmZzZXQsIHcgKiAwLjA4LCBoICogMC4xMSwgMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5lbGxpcHNlKHcgKiAwLjY1LCBoICogMC4zMiArIHlPZmZzZXQsIHcgKiAwLjA4LCBoICogMC4xMSwgMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzAwMCc7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMS41O1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmVsbGlwc2UodyAqIDAuMzUsIGggKiAwLjMyICsgeU9mZnNldCwgdyAqIDAuMDgsIGggKiAwLjExLCAwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBjdHguZWxsaXBzZSh3ICogMC42NSwgaCAqIDAuMzIgKyB5T2Zmc2V0LCB3ICogMC4wOCwgaCAqIDAuMTEsIDAsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyMwMDAnO1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmVsbGlwc2UodyAqIDAuMzUsIGggKiAwLjMxICsgeU9mZnNldCwgdyAqIDAuMDUsIGggKiAwLjA3LCAwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmVsbGlwc2UodyAqIDAuNjUsIGggKiAwLjMxICsgeU9mZnNldCwgdyAqIDAuMDUsIGggKiAwLjA3LCAwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI0ZGRic7XHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBjdHguZWxsaXBzZSh3ICogMC4zNiwgaCAqIDAuMzIgKyB5T2Zmc2V0LCB3ICogMC4wMSwgaCAqIDAuMDE1LCAwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmVsbGlwc2UodyAqIDAuNjYsIGggKiAwLjMyICsgeU9mZnNldCwgdyAqIDAuMDEsIGggKiAwLjAxNSwgMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjRkY2OUI0JztcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHcgKiAwLjUsIGggKiAwLjQ1ICsgeU9mZnNldCk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8odyAqIDAuNDgsIGggKiAwLjUyICsgeU9mZnNldCk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8odyAqIDAuNTIsIGggKiAwLjUyICsgeU9mZnNldCk7XHJcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDEuNTtcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHcgKiAwLjUsIGggKiAwLjU0ICsgeU9mZnNldCk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8odyAqIDAuNDUsIGggKiAwLjYyICsgeU9mZnNldCk7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odyAqIDAuNSwgaCAqIDAuNTQgKyB5T2Zmc2V0KTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh3ICogMC41NSwgaCAqIDAuNjIgKyB5T2Zmc2V0KTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xyXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG5cclxuICAgICAgICAgICAgY3R4Lm1vdmVUbyh3ICogMC4xNSwgaCAqIDAuNDcgKyB5T2Zmc2V0KTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh3ICogMC4zNSwgaCAqIDAuNTAgKyB5T2Zmc2V0KTtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbyh3ICogMC4xOCwgaCAqIDAuNTQgKyB5T2Zmc2V0KTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh3ICogMC4zNSwgaCAqIDAuNTQgKyB5T2Zmc2V0KTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odyAqIDAuNjUsIGggKiAwLjUwICsgeU9mZnNldCk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8odyAqIDAuODUsIGggKiAwLjQ3ICsgeU9mZnNldCk7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odyAqIDAuNjUsIGggKiAwLjU0ICsgeU9mZnNldCk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8odyAqIDAuODIsIGggKiAwLjU0ICsgeU9mZnNldCk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShmYWN0b3IpIHtcclxuICAgICAgICB0aGlzLmJsaW5rQW5pbWF0aW9uLnVwZGF0ZShmYWN0b3IpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpc1BvaW50T3Zlcihwb2ludCwgd29ybGRPZmZzZXQsIHBsYXllck9wdGlvbnMpIHtcclxuICAgICAgICBwbGF5ZXJPcHRpb25zID0gcGxheWVyT3B0aW9ucyB8fCBQbGF5ZXJPcHRpb25zLmRlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSBwbGF5ZXJPcHRpb25zLmlzUGxheWVyRml4ZWQgPyAwIDogLXdvcmxkT2Zmc2V0Lng7XHJcblxyXG4gICAgICAgIHJldHVybiBwb2ludC54ID49IHRoaXMuY29vcmRzLnggKyBvZmZzZXQgJiYgcG9pbnQueCA8PSB0aGlzLmNvb3Jkcy54ICsgdGhpcy5zaXplLndpZHRoICsgb2Zmc2V0ICYmIFxyXG4gICAgICAgICAgICAgICBwb2ludC55ID49IHRoaXMuY29vcmRzLnkgJiYgcG9pbnQueSA8PSB0aGlzLmNvb3Jkcy55ICsgdGhpcy5zaXplLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaXNpYmxlQm91bmRzKGNhbnZhc1NpemUsIHdvcmxkT2Zmc2V0LCBwbGF5ZXJPcHRpb25zKSB7XHJcbiAgICAgICAgcGxheWVyT3B0aW9ucyA9IHBsYXllck9wdGlvbnMgfHwgUGxheWVyT3B0aW9ucy5kZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IHBsYXllck9wdGlvbnMuaXNQbGF5ZXJGaXhlZCA/IDAgOiAtd29ybGRPZmZzZXQueDtcclxuICAgICAgICByZXR1cm4gbmV3IEJvdW5kcyhuZXcgUG9pbnQodGhpcy5jb29yZHMueCArIG9mZnNldCwgdGhpcy5jb29yZHMueSksIG5ldyBTaXplKHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluZm9Qcm92aWRlcigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBsYXllckluZm9Qcm92aWRlcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1Zpc2libGUod29ybGRPZmZzZXQsIGNhbnZhc1NpemUpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuaXNEZXN0cm95ZWQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQWN0b3JJbmZvUHJvdmlkZXIgZnJvbSAnQGNvbW1vbi9nYW1lL2FjdG9ycy9hY3Rvcl9pbmZvX3Byb3ZpZGVyLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckluZm9Qcm92aWRlciBleHRlbmRzIEFjdG9ySW5mb1Byb3ZpZGVyIHtcclxuICAgIGdldERlYnVnRGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBgVHlwZTogJHt0aGlzLmFjdG9yLmdldFR5cGUoKX1gLFxyXG4gICAgICAgICAgICBgUG9zaXRpb246ICgke3RoaXMuYWN0b3IuY29vcmRzLnh9LCAke3RoaXMuYWN0b3IuY29vcmRzLnl9KWAsXHJcbiAgICAgICAgICAgIGBTaXplOiAke3RoaXMuYWN0b3Iuc2l6ZS53aWR0aH0geCAke3RoaXMuYWN0b3Iuc2l6ZS5oZWlnaHR9YCxcclxuICAgICAgICAgICAgYFZlbG9jaXR5OiAoJHt0aGlzLmFjdG9yLnZlbG9jaXR5LngudG9GaXhlZCgxKX0sICR7dGhpcy5hY3Rvci52ZWxvY2l0eS55LnRvRml4ZWQoMSl9KWAsXHJcbiAgICAgICAgICAgIGBHcm91bmRlZDogJHt0aGlzLmFjdG9yLmlzR3JvdW5kZWR9YCxcclxuICAgICAgICAgICAgYE9uIEJyaWNrOiAke3RoaXMuYWN0b3Iub25Ccmlja31gLFxyXG4gICAgICAgICAgICBgUm90YXRpb246ICR7KHRoaXMuYWN0b3Iucm90YXRpb24gKiAxODAgLyBNYXRoLlBJKS50b0ZpeGVkKDEpfcKwYFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZUFjdG9yIGZyb20gJ0Bjb21tb24vZ2FtZS9hY3RvcnMvYmFzZV9hY3Rvci5qcyc7XHJcbmltcG9ydCBQb2ludCBmcm9tICdAY29tbW9uL3BvaW50LmpzJztcclxuaW1wb3J0IEJvdW5kcyBmcm9tICdAY29tbW9uL2JvdW5kcy5qcyc7XHJcbmltcG9ydCBTaXplIGZyb20gJ0Bjb21tb24vc2l6ZS5qcyc7XHJcbmltcG9ydCBTcGlrZUluZm9Qcm92aWRlciBmcm9tICdAY29tbW9uL2dhbWUvYWN0b3JzL3NwaWtlL3NwaWtlX2luZm9fcHJvdmlkZXIuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bpa2UgZXh0ZW5kcyBCYXNlQWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoaWQsIGNvb3Jkcywgc2l6ZSwgYmFja2dyb3VuZENvbG9yID0gJyM0QTU1NjgnLCBzdHJva2VXaWR0aCA9IDIsIHN0cm9rZUNvbG9yID0gJyMyRDM3NDgnLCBpc0FjdGl2ZSA9IHRydWUsIGlzUmV2ZXJzZWQgPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBjb29yZHMsIHNpemUpO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlV2lkdGggPSBzdHJva2VXaWR0aDtcclxuICAgICAgICB0aGlzLnN0cm9rZUNvbG9yID0gc3Ryb2tlQ29sb3I7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGlzQWN0aXZlO1xyXG4gICAgICAgIHRoaXMuaXNSZXZlcnNlZCA9IGlzUmV2ZXJzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gJ1NwaWtlJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaXNpYmxlQm91bmRzKGNhbnZhc1NpemUsIHdvcmxkT2Zmc2V0LCBwbGF5ZXJPcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCb3VuZHMobmV3IFBvaW50KHRoaXMuY29vcmRzLnggLSB3b3JsZE9mZnNldC54LCB0aGlzLmNvb3Jkcy55IC0gd29ybGRPZmZzZXQueSksIG5ldyBTaXplKHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpc1BvaW50T3Zlcihwb2ludCwgd29ybGRPZmZzZXQpIHtcclxuICAgICAgICByZXR1cm4gcG9pbnQueCA+PSB0aGlzLmNvb3Jkcy54IC0gd29ybGRPZmZzZXQueCAmJiBwb2ludC54IDw9IHRoaXMuY29vcmRzLnggKyB0aGlzLnNpemUud2lkdGggLSB3b3JsZE9mZnNldC54ICYmIFxyXG4gICAgICAgICAgICAgICBwb2ludC55ID49IHRoaXMuY29vcmRzLnkgLSB3b3JsZE9mZnNldC55ICYmIHBvaW50LnkgPD0gdGhpcy5jb29yZHMueSArIHRoaXMuc2l6ZS5oZWlnaHQgLSB3b3JsZE9mZnNldC55O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluZm9Qcm92aWRlcigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNwaWtlSW5mb1Byb3ZpZGVyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmlzaWJsZSh3b3JsZE9mZnNldCwgY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0RWRnZSA9IHRoaXMuY29vcmRzLnggKyB0aGlzLnNpemUud2lkdGggLSB3b3JsZE9mZnNldC54O1xyXG4gICAgICAgIGNvbnN0IGxlZnRFZGdlID0gdGhpcy5jb29yZHMueCAtIHdvcmxkT2Zmc2V0Lng7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJpZ2h0RWRnZSA+IDAgJiYgbGVmdEVkZ2UgPCBjYW52YXNTaXplLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4LCB3b3JsZE9mZnNldCwgY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZUNvbG9yO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLnN0cm9rZVdpZHRoO1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gdGhpcy5jb29yZHMueCAtIHdvcmxkT2Zmc2V0Lng7XHJcbiAgICAgICAgY29uc3QgeSA9IHRoaXMuY29vcmRzLnk7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnNpemUud2lkdGg7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmV2ZXJzZWQpIHtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oeCArIHdpZHRoIC8gMiwgeSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8oeCwgeSArIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICBjdHguZmlsbCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdHJva2VXaWR0aCA+IDApIHtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBBY3RvckluZm9Qcm92aWRlciBmcm9tICdAY29tbW9uL2dhbWUvYWN0b3JzL2FjdG9yX2luZm9fcHJvdmlkZXIuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bpa2VJbmZvUHJvdmlkZXIgZXh0ZW5kcyBBY3RvckluZm9Qcm92aWRlciB7XHJcbiAgICBnZXREZWJ1Z0RhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNYW5hZ2VyIHtcclxuICAgIGdldCBvYmplY3RzKCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VQaHlzaWNzIHtcclxuICAgIGNvbnN0cnVjdG9yKHdvcmxkLCB3b3JsZFNwZWVkID0gMCkge1xyXG4gICAgICAgIHRoaXMud29ybGQgPSB3b3JsZDtcclxuICAgICAgICB0aGlzLndvcmxkU3BlZWQgPSB3b3JsZFNwZWVkO1xyXG4gICAgICAgIHRoaXMucGxheWVyTW92ZXNJbldvcmxkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNSaWdodEJvdW5kYXJ5RnVsbHlWaXNpYmxlKGNhbnZhc1NpemUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53b3JsZC5ib3VuZGFyeU1hbmFnZXIuaXNSaWdodEJvdW5kYXJ5RnVsbHlWaXNpYmxlKHRoaXMud29ybGQud29ybGRPZmZzZXQsIGNhbnZhc1NpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRXb3JsZFNwZWVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllck1vdmVzSW5Xb3JsZCA/IDAgOiB0aGlzLndvcmxkU3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlV29ybGRPZmZzZXQoZmFjdG9yLCBjYW52YXNTaXplKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllck1vdmVzSW5Xb3JsZCkge1xyXG4gICAgICAgICAgICB0aGlzLndvcmxkLndvcmxkT2Zmc2V0LnggKz0gKHRoaXMud29ybGRTcGVlZCAqIGZhY3Rvcik7XHJcbiAgICAgICAgICAgIHRoaXMud29ybGQud29ybGRPZmZzZXQueCA9IE1hdGgubWluKHRoaXMud29ybGQud29ybGRPZmZzZXQueCwgdGhpcy53b3JsZC5zaXplLndpZHRoIC0gY2FudmFzU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFRvUGxheWVyTW92ZW1lbnQoY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF5ZXJNb3Zlc0luV29ybGQgJiYgdGhpcy5pc1JpZ2h0Qm91bmRhcnlGdWxseVZpc2libGUoY2FudmFzU2l6ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJNb3Zlc0luV29ybGQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUGxheWVyTW92aW5nSW5Xb3JsZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJNb3Zlc0luV29ybGQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2FtZVBhcmFtcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzaXplOiB0aGlzLndvcmxkLnNpemUsXHJcbiAgICAgICAgICAgIHdvcmxkT2Zmc2V0OiB0aGlzLndvcmxkLndvcmxkT2Zmc2V0LFxyXG4gICAgICAgICAgICBib3VuZGFyaWVzOiB0aGlzLndvcmxkLmJvdW5kYXJpZXNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IExlZnRCb3VuZGFyeSBmcm9tICdAY29tbW9uL2dhbWUvYWN0b3JzL2JvdW5kYXJ5L2xlZnRfYm91bmRhcnkuanMnO1xyXG5pbXBvcnQgUmlnaHRCb3VuZGFyeSBmcm9tICdAY29tbW9uL2dhbWUvYWN0b3JzL2JvdW5kYXJ5L3JpZ2h0X2JvdW5kYXJ5LmpzJztcclxuaW1wb3J0IFRvcEJvdW5kYXJ5IGZyb20gJ0Bjb21tb24vZ2FtZS9hY3RvcnMvYm91bmRhcnkvdG9wX2JvdW5kYXJ5LmpzJztcclxuaW1wb3J0IEJvdHRvbUJvdW5kYXJ5IGZyb20gJ0Bjb21tb24vZ2FtZS9hY3RvcnMvYm91bmRhcnkvYm90dG9tX2JvdW5kYXJ5LmpzJztcclxuaW1wb3J0IFBvaW50IGZyb20gJ0Bjb21tb24vcG9pbnQuanMnO1xyXG5pbXBvcnQgU2l6ZSBmcm9tICdAY29tbW9uL3NpemUuanMnO1xyXG5pbXBvcnQgQmFzZU1hbmFnZXIgZnJvbSAnQGNvbW1vbi9nYW1lL2Jhc2VfbWFuYWdlci5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3VuZGFyeU1hbmFnZXIgZXh0ZW5kcyBCYXNlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZXZlbCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICBjb25zdCBib3VuZGFyeUNsYXNzZXMgPSB7IGxlZnQ6IExlZnRCb3VuZGFyeSwgcmlnaHQ6IFJpZ2h0Qm91bmRhcnksIHRvcDogVG9wQm91bmRhcnksIGJvdHRvbTogQm90dG9tQm91bmRhcnkgfTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmJvdW5kYXJpZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGJvdW5kYXJ5Q2xhc3NlcykubWFwKChbdHlwZSwgQm91bmRhcnlDbGFzc10pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBsZXZlbC5ib3VuZGFyaWVzW3R5cGVdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt0eXBlLCBuZXcgQm91bmRhcnlDbGFzcyhkYXRhLmNvb3JkcywgZGF0YS5zaXplLCBkYXRhLmJhY2tncm91bmQpXTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvYmplY3RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvdW5kYXJpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHgsIHdvcmxkT2Zmc2V0LCBjYW52YXNTaXplKSB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmJvdW5kYXJpZXMpLmZvckVhY2goYm91bmRhcnkgPT4gXHJcbiAgICAgICAgICAgIGJvdW5kYXJ5LmRyYXcoY3R4LCB3b3JsZE9mZnNldCwgY2FudmFzU2l6ZSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUmlnaHRCb3VuZGFyeUZ1bGx5VmlzaWJsZSh3b3JsZE9mZnNldCwgY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvdW5kYXJpZXMucmlnaHQuaXNGdWxseVZpc2libGUod29ybGRPZmZzZXQsIGNhbnZhc1NpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdyb3VuZExldmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvdW5kYXJpZXMuYm90dG9tLmNvb3Jkcy55O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShmYWN0b3IgPSAxLCB3b3JsZFNwZWVkID0gMCwgY2FudmFzU2l6ZSA9IG51bGwpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGJvdW5kYXJ5IG9mIE9iamVjdC52YWx1ZXModGhpcy5ib3VuZGFyaWVzKSkge1xyXG4gICAgICAgICAgICBib3VuZGFyeS51cGRhdGUoZmFjdG9yLCB3b3JsZFNwZWVkLCBjYW52YXNTaXplLndpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlR2FtZVNpemUoZ2FtZVNpemUpIHtcclxuICAgICAgICB0aGlzLmJvdW5kYXJpZXMudG9wLnNpemUgPSBuZXcgU2l6ZShnYW1lU2l6ZS53aWR0aCwgdGhpcy5ib3VuZGFyaWVzLnRvcC5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5ib3VuZGFyaWVzLnRvcC5jb29yZHMgPSBuZXcgUG9pbnQoMCwgMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ib3VuZGFyaWVzLmJvdHRvbS5zaXplID0gbmV3IFNpemUoZ2FtZVNpemUud2lkdGgsIHRoaXMuYm91bmRhcmllcy5ib3R0b20uc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYm91bmRhcmllcy5ib3R0b20uY29vcmRzID0gbmV3IFBvaW50KDAsIGdhbWVTaXplLmhlaWdodCAtIHRoaXMuYm91bmRhcmllcy5ib3R0b20uc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYm91bmRhcmllcy5sZWZ0LmNvb3JkcyA9IG5ldyBQb2ludCgwLCAwKTtcclxuICAgICAgICB0aGlzLmJvdW5kYXJpZXMubGVmdC5zaXplID0gbmV3IFNpemUodGhpcy5ib3VuZGFyaWVzLmxlZnQuc2l6ZS53aWR0aCwgZ2FtZVNpemUuaGVpZ2h0KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmJvdW5kYXJpZXMucmlnaHQuY29vcmRzID0gbmV3IFBvaW50KGdhbWVTaXplLndpZHRoIC0gdGhpcy5ib3VuZGFyaWVzLnJpZ2h0LnNpemUud2lkdGgsIDApO1xyXG4gICAgICAgIHRoaXMuYm91bmRhcmllcy5yaWdodC5zaXplID0gbmV3IFNpemUodGhpcy5ib3VuZGFyaWVzLnJpZ2h0LnNpemUud2lkdGgsIGdhbWVTaXplLmhlaWdodCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9pbnQgZnJvbSAnQGNvbW1vbi9wb2ludC5qcyc7XHJcbmltcG9ydCBTaXplIGZyb20gJ0Bjb21tb24vc2l6ZS5qcyc7XHJcbmltcG9ydCBDb2xsaXNpb25SZXN1bHQgZnJvbSAnQGNvbW1vbi9nYW1lL2NvbGxpc2lvbl9yZXN1bHQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlzaW9uTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3b3JsZCkge1xyXG4gICAgICAgIHRoaXMud29ybGQgPSB3b3JsZDtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1BsYXllckNvbGxpc2lvbnMocGxheWVyU3RhdGUsIGNhbnZhc1NpemUpIHtcclxuICAgICAgICBjb25zdCBjb2xsaXNpb25zID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IGJyaWNrQ29sbGlzaW9uID0gdGhpcy5jaGVja0JyaWNrQ29sbGlzaW9ucyhwbGF5ZXJTdGF0ZSwgY2FudmFzU2l6ZSk7XHJcbiAgICAgICAgaWYgKGJyaWNrQ29sbGlzaW9uKSB7XHJcbiAgICAgICAgICAgIGNvbGxpc2lvbnMucHVzaChicmlja0NvbGxpc2lvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBqdW1wT3JiQ29sbGlzaW9uID0gdGhpcy5jaGVja0p1bXBPcmJDb2xsaXNpb25zKHBsYXllclN0YXRlLCBjYW52YXNTaXplKTtcclxuICAgICAgICBpZiAoanVtcE9yYkNvbGxpc2lvbikge1xyXG4gICAgICAgICAgICBjb2xsaXNpb25zLnB1c2goanVtcE9yYkNvbGxpc2lvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzcGlrZUNvbGxpc2lvbiA9IHRoaXMuY2hlY2tTcGlrZUNvbGxpc2lvbnMocGxheWVyU3RhdGUsIGNhbnZhc1NpemUpO1xyXG4gICAgICAgIGlmIChzcGlrZUNvbGxpc2lvbikge1xyXG4gICAgICAgICAgICBjb2xsaXNpb25zLnB1c2goc3Bpa2VDb2xsaXNpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tCcmlja0NvbGxpc2lvbnMocGxheWVyU3RhdGUsIGNhbnZhc1NpemUpIHtcclxuICAgICAgICBsZXQgdG9wQ29sbGlzaW9uID0gbnVsbDtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGNvbnN0IGJyaWNrIG9mIHRoaXMud29ybGQuZ2V0VmlzaWJsZUJyaWNrcyhjYW52YXNTaXplKSkge1xyXG4gICAgICAgICAgICBpZiAoIWJyaWNrLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgY29sbGlzaW9uID0gdGhpcy5jaGVja1BsYXllckJyaWNrQ29sbGlzaW9uKHBsYXllclN0YXRlLCBicmljayk7XHJcbiAgICAgICAgICAgIGlmIChjb2xsaXNpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb24udHlwZSA9PT0gJ2Rlc3Ryb3knKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbGxpc2lvbjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29sbGlzaW9uLnR5cGUgPT09ICd0b3AnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wQ29sbGlzaW9uID0gY29sbGlzaW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0b3BDb2xsaXNpb247XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tKdW1wT3JiQ29sbGlzaW9ucyhwbGF5ZXJTdGF0ZSwgY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSBuZXcgUG9pbnQoNTAsIDUwKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGp1bXBPcmIgb2YgdGhpcy53b3JsZC5nZXRWaXNpYmxlSnVtcE9yYnMoY2FudmFzU2l6ZSkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5ZXJDb2xsaWRpbmdXaXRoT2JqZWN0KHBsYXllclN0YXRlLCBqdW1wT3JiLCBwYWRkaW5nKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xsaXNpb25SZXN1bHQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2p1bXBPcmInLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludChqdW1wT3JiLmNvb3Jkcy54LCBqdW1wT3JiLmNvb3Jkcy55KSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUG9pbnQocGxheWVyU3RhdGUuY29vcmRzLngsIHBsYXllclN0YXRlLmNvb3Jkcy55KSxcclxuICAgICAgICAgICAgICAgICAgICBqdW1wT3JiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrUGxheWVyQnJpY2tDb2xsaXNpb24ocGxheWVyU3RhdGUsIGJyaWNrKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUGxheWVyQ29sbGlkaW5nV2l0aE9iamVjdChwbGF5ZXJTdGF0ZSwgYnJpY2spKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNQbGF5ZXJMYW5kaW5nT25PYmplY3RUb3AocGxheWVyU3RhdGUsIGJyaWNrKSkge1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkUG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZVBsYXllclBvc2l0aW9uT25Ccmlja1RvcChwbGF5ZXJTdGF0ZSwgYnJpY2spO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbGxpc2lvblJlc3VsdChcclxuICAgICAgICAgICAgICAgICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBvaW50KGJyaWNrLmNvb3Jkcy54LCBicmljay5jb29yZHMueSksXHJcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICBicmlja1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sbGlzaW9uUmVzdWx0KFxyXG4gICAgICAgICAgICAgICAgJ2Rlc3Ryb3knLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBvaW50KGJyaWNrLmNvb3Jkcy54LCBicmljay5jb29yZHMueSksXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgYnJpY2tcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tCb3VuZGFyeUNvbGxpc2lvbnMocGxheWVyU3RhdGUpIHtcclxuICAgICAgICBjb25zdCBjb2xsaXNpb25zID0gW107XHJcbiAgICAgICAgY29uc3QgYm90dG9tQm91bmRhcnlZID0gdGhpcy53b3JsZC5ib3VuZGFyaWVzLmJvdHRvbS5jb29yZHMueTtcclxuICAgICAgICBjb25zdCBib3VuZGFyaWVzID0gdGhpcy53b3JsZC5ib3VuZGFyaWVzO1xyXG5cclxuICAgICAgICBpZiAocGxheWVyU3RhdGUuY29vcmRzLnkgPCBib3VuZGFyaWVzLnRvcC5zaXplLmhlaWdodCkge1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkUG9zaXRpb24gPSBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJTdGF0ZS5jb29yZHMueCxcclxuICAgICAgICAgICAgICAgIGJvdW5kYXJpZXMudG9wLnNpemUuaGVpZ2h0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbGxpc2lvbnMucHVzaChuZXcgQ29sbGlzaW9uUmVzdWx0KFxyXG4gICAgICAgICAgICAgICAgJ2JvdW5kYXJ5LXRvcCcsXHJcbiAgICAgICAgICAgICAgICBuZXcgUG9pbnQoMCwgYm91bmRhcmllcy50b3Auc2l6ZS5oZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZFBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgYm91bmRhcmllcy50b3BcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGxheWVyU3RhdGUuY29vcmRzLnkgKyBwbGF5ZXJTdGF0ZS5zaXplLmhlaWdodCA+PSBib3R0b21Cb3VuZGFyeVkpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFBvc2l0aW9uID0gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICAgICAgcGxheWVyU3RhdGUuY29vcmRzLngsXHJcbiAgICAgICAgICAgICAgICBib3R0b21Cb3VuZGFyeVkgLSBwbGF5ZXJTdGF0ZS5zaXplLmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb2xsaXNpb25zLnB1c2gobmV3IENvbGxpc2lvblJlc3VsdChcclxuICAgICAgICAgICAgICAgICdib3VuZGFyeS1ib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBvaW50KDAsIGJvdHRvbUJvdW5kYXJ5WSksXHJcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICBib3VuZGFyaWVzLmJvdHRvbVxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJpZ2h0Qm91bmRhcnlYID0gYm91bmRhcmllcy5yaWdodC5jb29yZHMueCAtIHRoaXMud29ybGQud29ybGRPZmZzZXQueDtcclxuICAgICAgICBpZiAocGxheWVyU3RhdGUuY29vcmRzLnggKyBwbGF5ZXJTdGF0ZS5zaXplLndpZHRoID49IHJpZ2h0Qm91bmRhcnlYKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRQb3NpdGlvbiA9IG5ldyBQb2ludChcclxuICAgICAgICAgICAgICAgIHJpZ2h0Qm91bmRhcnlYIC0gcGxheWVyU3RhdGUuc2l6ZS53aWR0aCxcclxuICAgICAgICAgICAgICAgIHBsYXllclN0YXRlLmNvb3Jkcy55XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUGxheWVyQ29sbGlkaW5nV2l0aE9iamVjdChwbGF5ZXJTdGF0ZSwgYm91bmRhcmllcy5ib3R0b20pKSB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkUG9zaXRpb24ueSA9IGJvdW5kYXJpZXMuYm90dG9tLmNvb3Jkcy55IC0gcGxheWVyU3RhdGUuc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sbGlzaW9ucy5wdXNoKG5ldyBDb2xsaXNpb25SZXN1bHQoXHJcbiAgICAgICAgICAgICAgICAnYm91bmRhcnktcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBvaW50KHJpZ2h0Qm91bmRhcnlYLCAwKSxcclxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgIGJvdW5kYXJpZXMucmlnaHRcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsZWZ0Qm91bmRhcnlYID0gYm91bmRhcmllcy5sZWZ0LmNvb3Jkcy54IC0gdGhpcy53b3JsZC53b3JsZE9mZnNldC54O1xyXG4gICAgICAgIGlmIChwbGF5ZXJTdGF0ZS5jb29yZHMueCA8PSBsZWZ0Qm91bmRhcnlYICsgYm91bmRhcmllcy5sZWZ0LnNpemUud2lkdGgpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFBvc2l0aW9uID0gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICAgICAgbGVmdEJvdW5kYXJ5WCArIGJvdW5kYXJpZXMubGVmdC5zaXplLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgcGxheWVyU3RhdGUuY29vcmRzLnlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29sbGlzaW9ucy5wdXNoKG5ldyBDb2xsaXNpb25SZXN1bHQoXHJcbiAgICAgICAgICAgICAgICAnYm91bmRhcnktbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBuZXcgUG9pbnQobGVmdEJvdW5kYXJ5WCwgMCksXHJcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICBib3VuZGFyaWVzLmxlZnRcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29sbGlzaW9ucztcclxuICAgIH1cclxuXHJcbiAgICBpc1BsYXllckNvbGxpZGluZ1dpdGhPYmplY3QocGxheWVyU3RhdGUsIG9iamVjdCwgcGFkZGluZykge1xyXG4gICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nIHx8IG5ldyBQb2ludCgwLCAwKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJMZWZ0ID0gcGxheWVyU3RhdGUuY29vcmRzLng7XHJcbiAgICAgICAgY29uc3QgcGxheWVyUmlnaHQgPSBwbGF5ZXJTdGF0ZS5jb29yZHMueCArIHBsYXllclN0YXRlLnNpemUud2lkdGg7XHJcbiAgICAgICAgY29uc3QgcGxheWVyVG9wID0gcGxheWVyU3RhdGUuY29vcmRzLnk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQm90dG9tID0gcGxheWVyU3RhdGUuY29vcmRzLnkgKyBwbGF5ZXJTdGF0ZS5zaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgYnJpY2tXb3JsZFggPSBvYmplY3QuY29vcmRzLnggLSB0aGlzLndvcmxkLndvcmxkT2Zmc2V0Lng7XHJcbiAgICAgICAgY29uc3QgYnJpY2tMZWZ0ID0gYnJpY2tXb3JsZFggLSBwYWRkaW5nLng7XHJcbiAgICAgICAgY29uc3QgYnJpY2tSaWdodCA9IGJyaWNrV29ybGRYICsgb2JqZWN0LnNpemUud2lkdGggKyBwYWRkaW5nLng7XHJcbiAgICAgICAgY29uc3QgYnJpY2tUb3AgPSBvYmplY3QuY29vcmRzLnkgLSBwYWRkaW5nLnk7XHJcbiAgICAgICAgY29uc3QgYnJpY2tCb3R0b20gPSBvYmplY3QuY29vcmRzLnkgKyBvYmplY3Quc2l6ZS5oZWlnaHQgKyBwYWRkaW5nLnk7XHJcblxyXG4gICAgICAgIHJldHVybiAocGxheWVyUmlnaHQgPiBicmlja0xlZnQgJiYgcGxheWVyTGVmdCA8IGJyaWNrUmlnaHQpICYmXHJcbiAgICAgICAgICAgICAgIChwbGF5ZXJCb3R0b20gPiBicmlja1RvcCAmJiBwbGF5ZXJUb3AgPCBicmlja0JvdHRvbSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNQbGF5ZXJMYW5kaW5nT25PYmplY3RUb3AocGxheWVyU3RhdGUsIG9iamVjdCkge1xyXG4gICAgICAgIGNvbnN0IHByZXZQbGF5ZXJCb3R0b20gPSBwbGF5ZXJTdGF0ZS5wcmV2Q29vcmRzLnkgKyBwbGF5ZXJTdGF0ZS5zaXplLmhlaWdodDtcclxuICAgICAgICBjb25zdCBvYmplY3RUb3AgPSBvYmplY3QuY29vcmRzLnk7XHJcbiAgICAgICAgY29uc3Qgd2FzQWJvdmVPYmplY3QgPSBwcmV2UGxheWVyQm90dG9tIDw9IG9iamVjdFRvcDtcclxuICAgICAgICByZXR1cm4gd2FzQWJvdmVPYmplY3QgJiYgcGxheWVyU3RhdGUudmVsb2NpdHkueSA+PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5vcm1hbGl6ZVBsYXllclBvc2l0aW9uT25Ub3AocGxheWVyU3RhdGUsIG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAgIHBsYXllclN0YXRlLmNvb3Jkcy54LFxyXG4gICAgICAgICAgICBvYmplY3QuY29vcmRzLnkgLSBwbGF5ZXJTdGF0ZS5zaXplLmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbm9ybWFsaXplUGxheWVyUG9zaXRpb25PbkJyaWNrVG9wKHBsYXllclN0YXRlLCBicmljaykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAgIHBsYXllclN0YXRlLmNvb3Jkcy54LFxyXG4gICAgICAgICAgICBicmljay5jb29yZHMueSAtIHBsYXllclN0YXRlLnNpemUuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1NwaWtlQ29sbGlzaW9ucyhwbGF5ZXJTdGF0ZSwgY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3Bpa2Ugb2YgdGhpcy53b3JsZC5nZXRWaXNpYmxlU3Bpa2VzKGNhbnZhc1NpemUpKSB7XHJcbiAgICAgICAgICAgIGlmICghc3Bpa2UuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1BsYXllckNvbGxpZGluZ1dpdGhTcGlrZShwbGF5ZXJTdGF0ZSwgc3Bpa2UpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbGxpc2lvblJlc3VsdChcclxuICAgICAgICAgICAgICAgICAgICAnZGVzdHJveScsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFBvaW50KHNwaWtlLmNvb3Jkcy54LCBzcGlrZS5jb29yZHMueSksXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBzcGlrZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpc1BsYXllckNvbGxpZGluZ1dpdGhTcGlrZShwbGF5ZXJTdGF0ZSwgc3Bpa2UpIHtcclxuICAgICAgICBjb25zdCBwbGF5ZXJMZWZ0ID0gcGxheWVyU3RhdGUuY29vcmRzLng7XHJcbiAgICAgICAgY29uc3QgcGxheWVyUmlnaHQgPSBwbGF5ZXJTdGF0ZS5jb29yZHMueCArIHBsYXllclN0YXRlLnNpemUud2lkdGg7XHJcbiAgICAgICAgY29uc3QgcGxheWVyVG9wID0gcGxheWVyU3RhdGUuY29vcmRzLnk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQm90dG9tID0gcGxheWVyU3RhdGUuY29vcmRzLnkgKyBwbGF5ZXJTdGF0ZS5zaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3Qgc3Bpa2VYID0gc3Bpa2UuY29vcmRzLnggLSB0aGlzLndvcmxkLndvcmxkT2Zmc2V0Lng7XHJcbiAgICAgICAgY29uc3Qgc3Bpa2VZID0gc3Bpa2UuY29vcmRzLnkgLSB0aGlzLndvcmxkLndvcmxkT2Zmc2V0Lnk7XHJcbiAgICAgICAgY29uc3Qgc3Bpa2VXaWR0aCA9IHNwaWtlLnNpemUud2lkdGg7XHJcbiAgICAgICAgY29uc3Qgc3Bpa2VIZWlnaHQgPSBzcGlrZS5zaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKHBsYXllclJpZ2h0IDw9IHNwaWtlWCB8fCBwbGF5ZXJMZWZ0ID49IHNwaWtlWCArIHNwaWtlV2lkdGggfHxcclxuICAgICAgICAgICAgcGxheWVyQm90dG9tIDw9IHNwaWtlWSB8fCBwbGF5ZXJUb3AgPj0gc3Bpa2VZICsgc3Bpa2VIZWlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdG9wVmVydGV4ID0gbmV3IFBvaW50KHNwaWtlWCArIHNwaWtlV2lkdGggLyAyLCBzcGlrZVkpO1xyXG4gICAgICAgIGNvbnN0IGJvdHRvbUxlZnRWZXJ0ZXggPSBuZXcgUG9pbnQoc3Bpa2VYLCBzcGlrZVkgKyBzcGlrZUhlaWdodCk7XHJcbiAgICAgICAgY29uc3QgYm90dG9tUmlnaHRWZXJ0ZXggPSBuZXcgUG9pbnQoc3Bpa2VYICsgc3Bpa2VXaWR0aCwgc3Bpa2VZICsgc3Bpa2VIZWlnaHQpO1xyXG5cclxuICAgICAgICBjb25zdCBwbGF5ZXJDb3JuZXJzID0gW1xyXG4gICAgICAgICAgICBuZXcgUG9pbnQocGxheWVyTGVmdCwgcGxheWVyVG9wKSxcclxuICAgICAgICAgICAgbmV3IFBvaW50KHBsYXllclJpZ2h0LCBwbGF5ZXJUb3ApLFxyXG4gICAgICAgICAgICBuZXcgUG9pbnQocGxheWVyTGVmdCwgcGxheWVyQm90dG9tKSxcclxuICAgICAgICAgICAgbmV3IFBvaW50KHBsYXllclJpZ2h0LCBwbGF5ZXJCb3R0b20pXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjb3JuZXIgb2YgcGxheWVyQ29ybmVycykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1BvaW50SW5UcmlhbmdsZShjb3JuZXIsIHRvcFZlcnRleCwgYm90dG9tTGVmdFZlcnRleCwgYm90dG9tUmlnaHRWZXJ0ZXgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3Bpa2VWZXJ0aWNlcyA9IFt0b3BWZXJ0ZXgsIGJvdHRvbUxlZnRWZXJ0ZXgsIGJvdHRvbVJpZ2h0VmVydGV4XTtcclxuICAgICAgICBmb3IgKGNvbnN0IHZlcnRleCBvZiBzcGlrZVZlcnRpY2VzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUG9pbnRJblJlY3RhbmdsZSh2ZXJ0ZXgsIHBsYXllckxlZnQsIHBsYXllclRvcCwgcGxheWVyUmlnaHQsIHBsYXllckJvdHRvbSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNQb2ludEluVHJpYW5nbGUocG9pbnQsIHYxLCB2MiwgdjMpIHtcclxuICAgICAgICBjb25zdCBkZW5vbSA9ICh2Mi55IC0gdjMueSkgKiAodjEueCAtIHYzLngpICsgKHYzLnggLSB2Mi54KSAqICh2MS55IC0gdjMueSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGEgPSAoKHYyLnkgLSB2My55KSAqIChwb2ludC54IC0gdjMueCkgKyAodjMueCAtIHYyLngpICogKHBvaW50LnkgLSB2My55KSkgLyBkZW5vbTtcclxuICAgICAgICBjb25zdCBiID0gKCh2My55IC0gdjEueSkgKiAocG9pbnQueCAtIHYzLngpICsgKHYxLnggLSB2My54KSAqIChwb2ludC55IC0gdjMueSkpIC8gZGVub207XHJcbiAgICAgICAgY29uc3QgYyA9IDEgLSBhIC0gYjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGEgPj0gMCAmJiBiID49IDAgJiYgYyA+PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUG9pbnRJblJlY3RhbmdsZShwb2ludCwgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tKSB7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50LnggPj0gbGVmdCAmJiBwb2ludC54IDw9IHJpZ2h0ICYmXHJcbiAgICAgICAgICAgICAgIHBvaW50LnkgPj0gdG9wICYmIHBvaW50LnkgPD0gYm90dG9tO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBvaW50IGZyb20gJ0Bjb21tb24vcG9pbnQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlzaW9uUmVzdWx0IHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIG9iamVjdFBvc2l0aW9uLCBub3JtYWxpemVkUG9zaXRpb24gPSBudWxsLCBoaXRPYmplY3QgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTsgLy8gJ2Rlc3Ryb3knLCAndG9wJywgJ2JvdW5kYXJ5J1xyXG4gICAgICAgIHRoaXMub2JqZWN0UG9zaXRpb24gPSBvYmplY3RQb3NpdGlvbjsgLy8gUG9pbnQg0LTQu9GPINC/0L7Qt9C40YbQuNC4INC+0LHRitC10LrRgtCwINGB0YLQvtC70LrQvdC+0LLQtdC90LjRj1xyXG4gICAgICAgIHRoaXMubm9ybWFsaXplZFBvc2l0aW9uID0gbm9ybWFsaXplZFBvc2l0aW9uOyAvLyBQb2ludCDQtNC70Y8g0L3QvtGA0LzQsNC70LjQt9C+0LLQsNC90L3QvtC5INC/0L7Qt9C40YbQuNC4INC40LPRgNC+0LrQsFxyXG4gICAgICAgIHRoaXMuaGl0T2JqZWN0ID0gaGl0T2JqZWN0OyAvLyDRgdGB0YvQu9C60LAg0L3QsCDQvtCx0YrQtdC60YIg0YHRgtC+0LvQutC90L7QstC10L3QuNGPXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU3RyaW5nUmVzb3VyY2VzIGZyb20gJ0Bjb21tb24vc3RyaW5nX3Jlc291cmNlcy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmFzaFRleHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbER1cmF0aW9uID0gMzAwMDtcclxuICAgICAgICB0aGlzLmZhZGVJbkR1cmF0aW9uID0gNTAwO1xyXG4gICAgICAgIHRoaXMuZmFkZU91dER1cmF0aW9uID0gMTAwMDtcclxuICAgICAgICB0aGlzLnNjYWxlID0gMDtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB0aGlzLmFscGhhID0gMDtcclxuICAgICAgICB0aGlzLmJvdW5jZVBoYXNlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSAwO1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAwO1xyXG4gICAgICAgIHRoaXMuYm91bmNlUGhhc2UgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShmYWN0b3IgPSAxKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSArPSAxNiAqIGZhY3RvcjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uVGltZSA+PSB0aGlzLnRvdGFsRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25UaW1lIDwgdGhpcy5mYWRlSW5EdXJhdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMuYW5pbWF0aW9uVGltZSAvIHRoaXMuZmFkZUluRHVyYXRpb247XHJcbiAgICAgICAgICAgIGNvbnN0IGVhc2VPdXQgPSAxIC0gTWF0aC5wb3coMSAtIHByb2dyZXNzLCAzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSBlYXNlT3V0O1xyXG4gICAgICAgICAgICB0aGlzLmFscGhhID0gZWFzZU91dDtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hbmltYXRpb25UaW1lID4gdGhpcy50b3RhbER1cmF0aW9uIC0gdGhpcy5mYWRlT3V0RHVyYXRpb24pIHtcclxuICAgICAgICAgICAgY29uc3QgZmFkZU91dFN0YXJ0ID0gdGhpcy50b3RhbER1cmF0aW9uIC0gdGhpcy5mYWRlT3V0RHVyYXRpb247XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gKHRoaXMuYW5pbWF0aW9uVGltZSAtIGZhZGVPdXRTdGFydCkgLyB0aGlzLmZhZGVPdXREdXJhdGlvbjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmFscGhhID0gMSAtIHByb2dyZXNzO1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuYWxwaGEgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHgsIGNhbnZhc1NpemUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgdGhpcy5hbHBoYSA8PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IGNhbnZhc1NpemUud2lkdGggLyAyO1xyXG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBjYW52YXNTaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZShjZW50ZXJYLCBjZW50ZXJZKTtcclxuICAgICAgICBjdHgucm90YXRlKHRoaXMucm90YXRpb24pO1xyXG4gICAgICAgIGN0eC5zY2FsZSh0aGlzLnNjYWxlLCB0aGlzLnNjYWxlKTtcclxuICAgICAgICBcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUoNCwgNCk7XHJcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5hbHBoYSAqIDAuNTtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgJyMwMDAwMDAnLCBmYWxzZSk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICBcclxuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLmFscGhhO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCAnI0ZGRkZGRicsIHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmFscGhhID4gMC41KSB7XHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9ICh0aGlzLmFscGhhIC0gMC41KSAqIDIgKiAwLjc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBoaWdobGlnaHRHcmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgtMTIwLCAtNTAsIDEyMCwgLTIwKTtcclxuICAgICAgICAgICAgaGlnaGxpZ2h0R3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDApJyk7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodEdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCknKTtcclxuICAgICAgICAgICAgaGlnaGxpZ2h0R3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDApJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgaGlnaGxpZ2h0R3JhZGllbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3VGV4dChjdHgsIGZpbGxTdHlsZSwgd2l0aFN0cm9rZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgY3R4LmZvbnQgPSAnYm9sZCA3MnB4IFwiQ291cmllciBOZXdcIiwgXCJMdWNpZGEgQ29uc29sZVwiLCBcIk1vbmFjb1wiLCBcIkRlamFWdSBTYW5zIE1vbm9cIiwgbW9ub3NwYWNlJztcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh3aXRoU3Ryb2tlKSB7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwMDAwJztcclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDg7XHJcbiAgICAgICAgICAgIGN0eC5saW5lSm9pbiA9ICdtaXRlcic7XHJcbiAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gJ2J1dHQnO1xyXG4gICAgICAgICAgICBjdHgubWl0ZXJMaW1pdCA9IDI7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VUZXh0KFN0cmluZ1Jlc291cmNlcy5DUkFTSEVELCAwLCAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwMDAwJztcclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDY7XHJcbiAgICAgICAgICAgIGN0eC5saW5lSm9pbiA9ICdtaXRlcic7XHJcbiAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gJ2J1dHQnO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlVGV4dChTdHJpbmdSZXNvdXJjZXMuQ1JBU0hFRCwgMCwgMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzAwMDAwMCc7XHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAzO1xyXG4gICAgICAgICAgICBjdHgubGluZUpvaW4gPSAnbWl0ZXInO1xyXG4gICAgICAgICAgICBjdHgubGluZUNhcCA9ICdidXR0JztcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVRleHQoU3RyaW5nUmVzb3VyY2VzLkNSQVNIRUQsIDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChTdHJpbmdSZXNvdXJjZXMuQ1JBU0hFRCwgMCwgMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHdpdGhTdHJva2UpIHtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2UtYXRvcCc7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjQpJztcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFN0cmluZ1Jlc291cmNlcy5DUkFTSEVELCAxLCAxKTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb21wbGV0ZSgpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuaXNBY3RpdmU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IFBvaW50IGZyb20gXCJAY29tbW9uL3BvaW50LmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBsb3Npb25DdWJlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvb3Jkcywgc2l6ZSwgY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcclxuICAgICAgICB0aGlzLmNvb3Jkcy56ID0gMDtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxTaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBQb2ludChcclxuICAgICAgICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMTUsXHJcbiAgICAgICAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDE1IC0gTWF0aC5yYW5kb20oKSAqIDgsXHJcbiAgICAgICAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDEwXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJvdGF0aW9uWCA9IDA7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblkgPSAwO1xyXG4gICAgICAgIHRoaXMucm90YXRpb25aID0gMDtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uU3BlZWRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4zO1xyXG4gICAgICAgIHRoaXMucm90YXRpb25TcGVlZFkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjM7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblNwZWVkWiA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuMztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmdyYXZpdHkgPSAwLjg7XHJcbiAgICAgICAgdGhpcy5ib3VuY2UgPSAwLjM7XHJcbiAgICAgICAgdGhpcy5saWZlID0gMS4wO1xyXG4gICAgICAgIHRoaXMuZGVjYXkgPSAwLjAxMjtcclxuICAgICAgICB0aGlzLmdyb3VuZExldmVsID0gMDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jb29yZHMueCArPSB0aGlzLnZlbG9jaXR5Lng7XHJcbiAgICAgICAgdGhpcy5jb29yZHMueSArPSB0aGlzLnZlbG9jaXR5Lnk7XHJcbiAgICAgICAgdGhpcy5jb29yZHMueiArPSB0aGlzLnZlbG9jaXR5Lno7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5jb29yZHMueSArIHRoaXMuc2l6ZSA+PSB0aGlzLmdyb3VuZExldmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29vcmRzLnkgPSB0aGlzLmdyb3VuZExldmVsIC0gdGhpcy5zaXplO1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKj0gLXRoaXMuYm91bmNlO1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggKj0gMC44O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJvdGF0aW9uWCArPSB0aGlzLnJvdGF0aW9uU3BlZWRYO1xyXG4gICAgICAgIHRoaXMucm90YXRpb25ZICs9IHRoaXMucm90YXRpb25TcGVlZFk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblogKz0gdGhpcy5yb3RhdGlvblNwZWVkWjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxpZmUgLT0gdGhpcy5kZWNheTtcclxuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLm9yaWdpbmFsU2l6ZSAqIE1hdGgubWF4KDAsIHRoaXMubGlmZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlmZSA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHgpIHtcclxuICAgICAgICBpZiAodGhpcy5saWZlIDw9IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjZW50ZXJYID0gdGhpcy5jb29yZHMueCArIHRoaXMuc2l6ZSAvIDI7XHJcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IHRoaXMuY29vcmRzLnkgKyB0aGlzLnNpemUgLyAyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGN0eC50cmFuc2xhdGUoY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSAxICsgdGhpcy5jb29yZHMueiAqIDAuMDE7XHJcbiAgICAgICAgY3R4LnNjYWxlKHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgcm90WCA9IHRoaXMucm90YXRpb25YO1xyXG4gICAgICAgIGNvbnN0IHJvdFkgPSB0aGlzLnJvdGF0aW9uWTtcclxuICAgICAgICBjb25zdCByb3RaID0gdGhpcy5yb3RhdGlvblo7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWxwaGEgPSB0aGlzLmxpZmUgKiAwLjk7XHJcbiAgICAgICAgY29uc3QgciA9IHBhcnNlSW50KHRoaXMuY29sb3Iuc2xpY2UoMSwgMyksIDE2KTtcclxuICAgICAgICBjb25zdCBnID0gcGFyc2VJbnQodGhpcy5jb2xvci5zbGljZSgzLCA1KSwgMTYpO1xyXG4gICAgICAgIGNvbnN0IGIgPSBwYXJzZUludCh0aGlzLmNvbG9yLnNsaWNlKDUsIDcpLCAxNik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY3ViZVNpemUgPSB0aGlzLnNpemU7XHJcbiAgICAgICAgY29uc3QgZGVwdGggPSBjdWJlU2l6ZSAqIDAuNDtcclxuICAgICAgICBjb25zdCBvZmZzZXRYID0gZGVwdGggKiBNYXRoLmNvcyhNYXRoLlBJIC8gNik7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IGRlcHRoICogTWF0aC5zaW4oTWF0aC5QSSAvIDYpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gYWxwaGEgKiAwLjM7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwMDAwJztcclxuICAgICAgICBjdHgudHJhbnNmb3JtKDEsIDAsIC0wLjUsIDAuMywgb2Zmc2V0WCwgb2Zmc2V0WSArIGN1YmVTaXplICogMC44KTtcclxuICAgICAgICBjdHguZmlsbFJlY3QoLWN1YmVTaXplIC8gMiwgLWN1YmVTaXplIC8gMiwgY3ViZVNpemUsIGN1YmVTaXplKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGN0eC5yb3RhdGUocm90Wik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbGlnaHRBbmdsZSA9IHJvdFggKyByb3RZO1xyXG4gICAgICAgIGNvbnN0IGxpZ2h0SW50ZW5zaXR5ID0gKE1hdGguc2luKGxpZ2h0QW5nbGUpICsgMSkgKiAwLjM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YWxwaGF9KWA7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KC1jdWJlU2l6ZSAvIDIsIC1jdWJlU2l6ZSAvIDIsIGN1YmVTaXplLCBjdWJlU2l6ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdG9wQnJpZ2h0bmVzcyA9IDYwICsgbGlnaHRJbnRlbnNpdHkgKiA0MDtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtNYXRoLm1pbigyNTUsIHIgKyB0b3BCcmlnaHRuZXNzKX0sICR7TWF0aC5taW4oMjU1LCBnICsgdG9wQnJpZ2h0bmVzcyl9LCAke01hdGgubWluKDI1NSwgYiArIHRvcEJyaWdodG5lc3MpfSwgJHthbHBoYSAqIDAuODV9KWA7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oLWN1YmVTaXplIC8gMiwgLWN1YmVTaXplIC8gMik7XHJcbiAgICAgICAgY3R4LmxpbmVUbygtY3ViZVNpemUgLyAyICsgb2Zmc2V0WCwgLWN1YmVTaXplIC8gMiAtIG9mZnNldFkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oY3ViZVNpemUgLyAyICsgb2Zmc2V0WCwgLWN1YmVTaXplIC8gMiAtIG9mZnNldFkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oY3ViZVNpemUgLyAyLCAtY3ViZVNpemUgLyAyKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzaWRlRGFya25lc3MgPSA1MCAtIGxpZ2h0SW50ZW5zaXR5ICogMzA7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7TWF0aC5tYXgoMCwgciAtIHNpZGVEYXJrbmVzcyl9LCAke01hdGgubWF4KDAsIGcgLSBzaWRlRGFya25lc3MpfSwgJHtNYXRoLm1heCgwLCBiIC0gc2lkZURhcmtuZXNzKX0sICR7YWxwaGEgKiAwLjl9KWA7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oY3ViZVNpemUgLyAyLCAtY3ViZVNpemUgLyAyKTtcclxuICAgICAgICBjdHgubGluZVRvKGN1YmVTaXplIC8gMiArIG9mZnNldFgsIC1jdWJlU2l6ZSAvIDIgLSBvZmZzZXRZKTtcclxuICAgICAgICBjdHgubGluZVRvKGN1YmVTaXplIC8gMiArIG9mZnNldFgsIGN1YmVTaXplIC8gMiAtIG9mZnNldFkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oY3ViZVNpemUgLyAyLCBjdWJlU2l6ZSAvIDIpO1xyXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKCR7TWF0aC5tYXgoMCwgciAtIDgwKX0sICR7TWF0aC5tYXgoMCwgZyAtIDgwKX0sICR7TWF0aC5tYXgoMCwgYiAtIDgwKX0sICR7YWxwaGEgKiAwLjh9KWA7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDAuODtcclxuXHJcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QoLWN1YmVTaXplIC8gMiwgLWN1YmVTaXplIC8gMiwgY3ViZVNpemUsIGN1YmVTaXplKTtcclxuICAgICAgICBcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbygtY3ViZVNpemUgLyAyLCAtY3ViZVNpemUgLyAyKTtcclxuICAgICAgICBjdHgubGluZVRvKC1jdWJlU2l6ZSAvIDIgKyBvZmZzZXRYLCAtY3ViZVNpemUgLyAyIC0gb2Zmc2V0WSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyhjdWJlU2l6ZSAvIDIgKyBvZmZzZXRYLCAtY3ViZVNpemUgLyAyIC0gb2Zmc2V0WSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyhjdWJlU2l6ZSAvIDIsIC1jdWJlU2l6ZSAvIDIpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyhjdWJlU2l6ZSAvIDIsIC1jdWJlU2l6ZSAvIDIpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oY3ViZVNpemUgLyAyICsgb2Zmc2V0WCwgLWN1YmVTaXplIC8gMiAtIG9mZnNldFkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oY3ViZVNpemUgLyAyICsgb2Zmc2V0WCwgY3ViZVNpemUgLyAyIC0gb2Zmc2V0WSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyhjdWJlU2l6ZSAvIDIsIGN1YmVTaXplIC8gMik7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKC1jdWJlU2l6ZSAvIDIsIGN1YmVTaXplIC8gMik7XHJcbiAgICAgICAgY3R4LmxpbmVUbygtY3ViZVNpemUgLyAyICsgb2Zmc2V0WCwgY3ViZVNpemUgLyAyIC0gb2Zmc2V0WSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmxpZmUgPiAwLjUpIHtcclxuICAgICAgICAgICAgY29uc3QgaGlnaGxpZ2h0QWxwaGEgPSAodGhpcy5saWZlIC0gMC41KSAqIDIgKiBhbHBoYSAqIDAuMztcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDI1NSwgMjU1LCAyNTUsICR7aGlnaGxpZ2h0QWxwaGF9KWA7XHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgtY3ViZVNpemUgLyAzLCAtY3ViZVNpemUgLyAzLCBjdWJlU2l6ZSAvIDYsIGN1YmVTaXplIC8gNik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRXhwbG9zaW9uQ3ViZSBmcm9tIFwiQGNvbW1vbi9nYW1lL2V4cGxvc2lvbi9leHBsb3Npb25fY3ViZS5qc1wiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIkBjb21tb24vcG9pbnQuanNcIjtcclxuaW1wb3J0IFNpemUgZnJvbSBcIkBjb21tb24vc2l6ZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9zaW9uRWZmZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3ViZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRXhwbG9zaW9uKHBsYXllclBvcywgcGxheWVyU2l6ZSwgZ3JvdW5kTGV2ZWwpIHtcclxuICAgICAgICB0aGlzLmN1YmVzID0gW107XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY3ViZXNQZXJTaWRlID0gNTtcclxuICAgICAgICBjb25zdCBjdWJlU2l6ZSA9IE1hdGgubWluKHBsYXllclNpemUud2lkdGgsIHBsYXllclNpemUuaGVpZ2h0KSAvIGN1YmVzUGVyU2lkZTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBjdWJlc1BlclNpZGU7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGN1YmVzUGVyU2lkZTsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBwbGF5ZXJQb3MueCArIGNvbCAqIGN1YmVTaXplO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHBsYXllclBvcy55ICsgcm93ICogY3ViZVNpemU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IFsnI0ZGOEMwMCcsICcjRkY3RjAwJywgJyNGRjY2MDAnLCAnI0ZGOTUwMCcsICcjRkZBNTAwJ107XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IG5ldyBQb2ludCh4LCB5LCAwKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmUgPSBuZXcgRXhwbG9zaW9uQ3ViZShjb29yZHMsIGN1YmVTaXplICogMC44LCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgICBjdWJlLmdyb3VuZExldmVsID0gZ3JvdW5kTGV2ZWw7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlckRpc3RhbmNlID0gTWF0aC5zcXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucG93KGNvbCAtIGN1YmVzUGVyU2lkZS8yLCAyKSArIFxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucG93KHJvdyAtIGN1YmVzUGVyU2lkZS8yLCAyKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWVkTXVsdGlwbGllciA9IDEgKyAoY2VudGVyRGlzdGFuY2UgKiAwLjMpO1xyXG4gICAgICAgICAgICAgICAgY3ViZS52ZWxvY2l0eS54ICo9IHNwZWVkTXVsdGlwbGllcjtcclxuICAgICAgICAgICAgICAgIGN1YmUudmVsb2NpdHkueSAqPSBzcGVlZE11bHRpcGxpZXI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuY3ViZXMucHVzaChjdWJlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGFjdGl2ZUN1YmVzID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5jdWJlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBjdWJlID0gdGhpcy5jdWJlc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgaXNBbGl2ZSA9IGN1YmUudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIWlzQWxpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3ViZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ3ViZXMrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoYWN0aXZlQ3ViZXMgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNvcnRlZEN1YmVzID0gWy4uLnRoaXMuY3ViZXNdLnNvcnQoKGEsIGIpID0+IGEuY29vcmRzLnogLSBiLmNvb3Jkcy56KTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGNvbnN0IGN1YmUgb2Ygc29ydGVkQ3ViZXMpIHtcclxuICAgICAgICAgICAgY3ViZS5kcmF3KGN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzQ29tcGxldGUoKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzQWN0aXZlO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBQb2ludCBmcm9tICdAY29tbW9uL3BvaW50LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIGNhbnZhcywgb2JqZWN0TWFuYWdlcikge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TWFuYWdlciA9IG9iamVjdE1hbmFnZXI7XHJcbiAgICAgICAgdGhpcy5vblBhdXNlUmVxdWVzdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbkRlYnVnVG9nZ2xlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uSnVtcCA9IG51bGw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sYXN0TW91c2VYID0gMDtcclxuICAgICAgICB0aGlzLmxhc3RNb3VzZVkgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaGFuZGxlTW91c2VEb3duID0gdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNvbnRleHRNZW51ID0gdGhpcy5oYW5kbGVDb250ZXh0TWVudS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTW91c2VNb3ZlID0gdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgdGhpcy5oYW5kbGVDb250ZXh0TWVudSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub25KdW1wKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uSnVtcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVDb250ZXh0TWVudShldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZUtleURvd24oZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC5jb2RlKTtcclxuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub25QYXVzZVJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25QYXVzZVJlcXVlc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ1RhYicpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub25EZWJ1Z1RvZ2dsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlYnVnVG9nZ2xlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vbkp1bXApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25KdW1wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZU1vdXNlTW92ZShldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB0aGlzLmxhc3RNb3VzZVggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgIHRoaXMubGFzdE1vdXNlWSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0TW91c2VQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMubGFzdE1vdXNlWCwgdGhpcy5sYXN0TW91c2VZKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgdGhpcy5oYW5kbGVDb250ZXh0TWVudSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJyaWNrIGZyb20gJ0Bjb21tb24vZ2FtZS9hY3RvcnMvYnJpY2svYnJpY2suanMnO1xyXG5pbXBvcnQgSnVtcE9yYiBmcm9tICdAY29tbW9uL2dhbWUvYWN0b3JzL2p1bXBfb3JiL2p1bXBfb3JiLmpzJztcclxuaW1wb3J0IFNwaWtlIGZyb20gJ0Bjb21tb24vZ2FtZS9hY3RvcnMvc3Bpa2Uvc3Bpa2UuanMnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnQGNvbW1vbi9wb2ludC5qcyc7XHJcbmltcG9ydCBTaXplIGZyb20gJ0Bjb21tb24vc2l6ZS5qcyc7XHJcbmltcG9ydCBCYXNlTWFuYWdlciBmcm9tICdAY29tbW9uL2dhbWUvYmFzZV9tYW5hZ2VyLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdE1hbmFnZXIgZXh0ZW5kcyBCYXNlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih1c2VPbmVEaXJlY3Rpb25PcHRpbWl6YXRpb24sIGJyaWNrcywganVtcE9yYnMsIHNwaWtlcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMudXNlT25lRGlyZWN0aW9uT3B0aW1pemF0aW9uID0gdXNlT25lRGlyZWN0aW9uT3B0aW1pemF0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLmJyaWNrcyA9IGJyaWNrcy5tYXAoaXRlbSA9PiBuZXcgQnJpY2soXHJcbiAgICAgICAgICAgIGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIG5ldyBQb2ludChpdGVtLmNvb3Jkcy54LCBpdGVtLmNvb3Jkcy55KSwgXHJcbiAgICAgICAgICAgIG5ldyBTaXplKGl0ZW0uc2l6ZS53aWR0aCwgaXRlbS5zaXplLmhlaWdodCksXHJcbiAgICAgICAgICAgIGl0ZW0uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICBpdGVtLnN0cm9rZVdpZHRoLFxyXG4gICAgICAgICAgICBpdGVtLnN0cm9rZUNvbG9yLFxyXG4gICAgICAgICAgICBpdGVtLmlzQWN0aXZlXHJcbiAgICAgICAgKSkuc29ydCgoYSwgYikgPT4gYS5jb29yZHMueCAtIGIuY29vcmRzLngpO1xyXG5cclxuICAgICAgICB0aGlzLmp1bXBPcmJzID0ganVtcE9yYnMubWFwKGl0ZW0gPT4gbmV3IEp1bXBPcmIoXHJcbiAgICAgICAgICAgIGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIG5ldyBQb2ludChpdGVtLmNvb3Jkcy54LCBpdGVtLmNvb3Jkcy55KSxcclxuICAgICAgICAgICAgaXRlbS5pc1JldmVyc2VkXHJcbiAgICAgICAgKSkuc29ydCgoYSwgYikgPT4gYS5jb29yZHMueCAtIGIuY29vcmRzLngpO1xyXG5cclxuICAgICAgICB0aGlzLnNwaWtlcyA9IHNwaWtlcy5tYXAoaXRlbSA9PiBuZXcgU3Bpa2UoXHJcbiAgICAgICAgICAgIGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIG5ldyBQb2ludChpdGVtLmNvb3Jkcy54LCBpdGVtLmNvb3Jkcy55KSwgXHJcbiAgICAgICAgICAgIG5ldyBTaXplKGl0ZW0uc2l6ZS53aWR0aCwgaXRlbS5zaXplLmhlaWdodCksXHJcbiAgICAgICAgICAgIGl0ZW0uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICBpdGVtLnN0cm9rZVdpZHRoLFxyXG4gICAgICAgICAgICBpdGVtLnN0cm9rZUNvbG9yLFxyXG4gICAgICAgICAgICBpdGVtLmlzQWN0aXZlLFxyXG4gICAgICAgICAgICBpdGVtLmlzUmV2ZXJzZWRcclxuICAgICAgICApKS5zb3J0KChhLCBiKSA9PiBhLmNvb3Jkcy54IC0gYi5jb29yZHMueCk7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVdpbmRvd3MgPSB7XHJcbiAgICAgICAgICAgIGJyaWNrczogeyBzdGFydDogMCwgZW5kOiAwIH0sXHJcbiAgICAgICAgICAgIGp1bXBPcmJzOiB7IHN0YXJ0OiAwLCBlbmQ6IDAgfSxcclxuICAgICAgICAgICAgc3Bpa2VzOiB7IHN0YXJ0OiAwLCBlbmQ6IDAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9iamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnJpY2tzICsgdGhpcy5qdW1wT3JicyArIHRoaXMuc3Bpa2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZpc2liaWxpdHlXaW5kb3cob2JqZWN0cywgd2luZG93S2V5LCB3b3JsZE9mZnNldCwgY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IHRoaXMudmlzaWJpbGl0eVdpbmRvd3Nbd2luZG93S2V5XTtcclxuICAgICAgICBjb25zdCB2aWV3TGVmdCA9IHdvcmxkT2Zmc2V0Lng7XHJcbiAgICAgICAgY29uc3Qgdmlld1JpZ2h0ID0gd29ybGRPZmZzZXQueCArIGNhbnZhc1NpemUud2lkdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2hpbGUgKHdpbmRvdy5zdGFydCA8IG9iamVjdHMubGVuZ3RoICYmIG9iamVjdHNbd2luZG93LnN0YXJ0XS5jb29yZHMueCArIChvYmplY3RzW3dpbmRvdy5zdGFydF0uc2l6ZT8ud2lkdGggfHwgMCkgPCB2aWV3TGVmdCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuc3RhcnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2hpbGUgKHdpbmRvdy5lbmQgPCBvYmplY3RzLmxlbmd0aCAmJiBvYmplY3RzW3dpbmRvdy5lbmRdLmNvb3Jkcy54IDw9IHZpZXdSaWdodCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuZW5kKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh3aW5kb3cuc3RhcnQgPj0gb2JqZWN0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgd2luZG93LnN0YXJ0ID0gb2JqZWN0cy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHdpbmRvdy5lbmQgPSBvYmplY3RzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHdpbmRvdy5lbmQgPiBvYmplY3RzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuZW5kID0gb2JqZWN0cy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFZpc2libGVPYmplY3RzSXRlcmF0b3Iob2JqZWN0VHlwZSwgd29ybGRPZmZzZXQsIGNhbnZhc1NpemUpIHtcclxuICAgICAgICBjb25zdCBvYmplY3RzID0gdGhpc1tvYmplY3RUeXBlXTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpc2liaWxpdHlXaW5kb3cob2JqZWN0cywgb2JqZWN0VHlwZSwgd29ybGRPZmZzZXQsIGNhbnZhc1NpemUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IHRoaXMudmlzaWJpbGl0eVdpbmRvd3Nbb2JqZWN0VHlwZV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb2JqZWN0czogb2JqZWN0cyxcclxuICAgICAgICAgICAgc3RhcnQ6IHdpbmRvdy5zdGFydCxcclxuICAgICAgICAgICAgZW5kOiB3aW5kb3cuZW5kLFxyXG4gICAgICAgICAgICB3b3JsZE9mZnNldDogd29ybGRPZmZzZXQsXHJcbiAgICAgICAgICAgIGNhbnZhc1NpemU6IGNhbnZhc1NpemUsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5zdGFydDsgaSA8IHRoaXMuZW5kOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLm9iamVjdHNbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh3b3JsZFNwZWVkLCBmYWN0b3IgPSAxKSB7XHJcbiAgICAgICAgY29uc3QganVtcE9yYnNXaW5kb3cgPSB0aGlzLnZpc2liaWxpdHlXaW5kb3dzLmp1bXBPcmJzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBqdW1wT3Jic1dpbmRvdy5zdGFydDsgaSA8IGp1bXBPcmJzV2luZG93LmVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcE9yYnNbaV0udXBkYXRlKHdvcmxkU3BlZWQsIGZhY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4LCB3b3JsZE9mZnNldCwgY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnVzZU9uZURpcmVjdGlvbk9wdGltaXphdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpc2liaWxpdHlXaW5kb3codGhpcy5icmlja3MsICdicmlja3MnLCB3b3JsZE9mZnNldCwgY2FudmFzU2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlzaWJpbGl0eVdpbmRvdyh0aGlzLmp1bXBPcmJzLCAnanVtcE9yYnMnLCB3b3JsZE9mZnNldCwgY2FudmFzU2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlzaWJpbGl0eVdpbmRvdyh0aGlzLnNwaWtlcywgJ3NwaWtlcycsIHdvcmxkT2Zmc2V0LCBjYW52YXNTaXplKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJyaWNrc1dpbmRvdyA9IHRoaXMudmlzaWJpbGl0eVdpbmRvd3MuYnJpY2tzO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gYnJpY2tzV2luZG93LnN0YXJ0OyBpIDwgYnJpY2tzV2luZG93LmVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tpXS5kcmF3KGN0eCwgd29ybGRPZmZzZXQsIGNhbnZhc1NpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBqdW1wT3Jic1dpbmRvdyA9IHRoaXMudmlzaWJpbGl0eVdpbmRvd3MuanVtcE9yYnM7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBqdW1wT3Jic1dpbmRvdy5zdGFydDsgaSA8IGp1bXBPcmJzV2luZG93LmVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXBPcmJzW2ldLmRyYXcoY3R4LCB3b3JsZE9mZnNldCwgY2FudmFzU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHNwaWtlc1dpbmRvdyA9IHRoaXMudmlzaWJpbGl0eVdpbmRvd3Muc3Bpa2VzO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc3Bpa2VzV2luZG93LnN0YXJ0OyBpIDwgc3Bpa2VzV2luZG93LmVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwaWtlc1tpXS5kcmF3KGN0eCwgd29ybGRPZmZzZXQsIGNhbnZhc1NpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5icmlja3MuZm9yRWFjaChicmljayA9PiBicmljay5kcmF3KGN0eCwgd29ybGRPZmZzZXQsIGNhbnZhc1NpemUpKTtcclxuICAgICAgICAgICAgdGhpcy5qdW1wT3Jicy5mb3JFYWNoKGJyaWNrID0+IGJyaWNrLmRyYXcoY3R4LCB3b3JsZE9mZnNldCwgY2FudmFzU2l6ZSkpO1xyXG4gICAgICAgICAgICB0aGlzLnNwaWtlcy5mb3JFYWNoKGJyaWNrID0+IGJyaWNrLmRyYXcoY3R4LCB3b3JsZE9mZnNldCwgY2FudmFzU2l6ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdXNlTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbkNvbnRpbnVlQ2xpY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25NYWluTWVudUNsaWNrID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9ICdwYXVzZS1tZW51LWNvbnRhaW5lcic7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGF1c2UtbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGF1c2UtdGl0bGVcIj7Qn9Cw0YPQt9CwPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXVzZS1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNvbnRpbnVlLWJ1dHRvblwiIGNsYXNzPVwicGF1c2UtYnV0dG9uXCI+0J/RgNC+0LTQvtC70LbQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFpbi1tZW51LWJ1dHRvblwiIGNsYXNzPVwicGF1c2UtYnV0dG9uXCI+0J3QsCDQs9C70LDQstC90YvQuSDRjdC60YDQsNC9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcygpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYWRkU3R5bGVzKCkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlSWQgPSAncGF1c2UtbWVudS1zdHlsZXMnO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZUlkKSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgICBzdHlsZS5pZCA9IHN0eWxlSWQ7XHJcbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBgXHJcbiAgICAgICAgICAgIC5wYXVzZS1tZW51LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucGF1c2UtbWVudSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA0MCwgNjAsIDAuOTUpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNDBweCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnBhdXNlLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMzBweCAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucGF1c2UtYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGdhcDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnBhdXNlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnBhdXNlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnBhdXNlLWJ1dHRvbjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgY29udGludWVCdXR0b24gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjY29udGludWUtYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgbWFpbk1lbnVCdXR0b24gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjbWFpbi1tZW51LWJ1dHRvbicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vbkNvbnRpbnVlQ2xpY2spIHRoaXMub25Db250aW51ZUNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWFpbk1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9uTWFpbk1lbnVDbGljaykgdGhpcy5vbk1haW5NZW51Q2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLmNvbnRhaW5lcikpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXIgJiYgZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLmNvbnRhaW5lcikpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9pbnQgZnJvbSAnQGNvbW1vbi9wb2ludC5qcyc7XHJcbmltcG9ydCBQbGF5ZXJVcGRhdGVSZXN1bHQgZnJvbSAnQGNvbW1vbi9nYW1lL3BsYXllcl91cGRhdGVfcmVzdWx0LmpzJztcclxuaW1wb3J0IENvbGxpc2lvbk1hbmFnZXIgZnJvbSAnQGNvbW1vbi9nYW1lL2NvbGxpc2lvbl9tYW5hZ2VyLmpzJztcclxuaW1wb3J0IEJhc2VQaHlzaWNzIGZyb20gJ0Bjb21tb24vZ2FtZS9iYXNlX3BoeXNpY3MuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViZVBsYXllclBoeXNpY3MgZXh0ZW5kcyBCYXNlUGh5c2ljcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3b3JsZCwgd29ybGRTcGVlZCA9IDApIHtcclxuICAgICAgICBzdXBlcih3b3JsZCwgd29ybGRTcGVlZCk7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb25NYW5hZ2VyID0gbmV3IENvbGxpc2lvbk1hbmFnZXIod29ybGQpO1xyXG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDEuMDtcclxuICAgICAgICB0aGlzLnBsYXllckp1bXBQb3dlciA9IC0xODtcclxuICAgICAgICB0aGlzLm9yYlVwSnVtcFBvd2VyID0gLTI0O1xyXG4gICAgICAgIHRoaXMub3JiRG93bkp1bXBQb3dlciA9IDEyO1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbFNwZWVkID0gNjtcclxuICAgICAgICB0aGlzLmlzR3JvdW5kZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLndhc0ZhbGxpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucHJldkNvb3JkcyA9IG5ldyBQb2ludCgwLCAwKTtcclxuICAgICAgICB0aGlzLmNvbGxpZGluZ1dpdGhKdW1wT3JiID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGZhY3RvciwgcGxheWVyLCBjYW52YXNTaXplKSB7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hUb1BsYXllck1vdmVtZW50KGNhbnZhc1NpemUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGdhbWVQYXJhbXMgPSB0aGlzLmdldEdhbWVQYXJhbXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcmV2Q29vcmRzID0gbmV3IFBvaW50KHBsYXllci5jb29yZHMueCwgcGxheWVyLmNvb3Jkcy55KTtcclxuICAgICAgICBcclxuICAgICAgICBwbGF5ZXIudmVsb2NpdHkueSArPSB0aGlzLmdyYXZpdHkgKiBmYWN0b3I7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyTW92ZXNJbldvcmxkKSB7XHJcbiAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gdGhpcy5ob3Jpem9udGFsU3BlZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpc0ZhbGxpbmcgPSAhdGhpcy5pc0dyb3VuZGVkICYmIHBsYXllci52ZWxvY2l0eS55ID4gMDtcclxuICAgICAgICB0aGlzLnRhcmdldFJvdGF0aW9uID0gdGhpcy50YXJnZXRSb3RhdGlvbiB8fCBwbGF5ZXIucm90YXRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlzRmFsbGluZyAmJiAhdGhpcy53YXNGYWxsaW5nICYmICFwbGF5ZXIuaXNJbnRlbnRpb25hbEp1bXAgJiYgcGxheWVyLnJvdGF0aW9uU3BlZWQgPT09IDApIHtcclxuICAgICAgICAgICAgcGxheWVyLnJvdGF0aW9uU3BlZWQgPSAoTWF0aC5QSSAvIDIpIC8gODtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRSb3RhdGlvbiA9IHBsYXllci5yb3RhdGlvbiArIE1hdGguUEkgLyAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLndhc0ZhbGxpbmcgPSBpc0ZhbGxpbmc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHBsYXllci5yb3RhdGlvblNwZWVkID4gMCkge1xyXG4gICAgICAgICAgICBwbGF5ZXIucm90YXRpb24gKz0gcGxheWVyLnJvdGF0aW9uU3BlZWQgKiBmYWN0b3I7XHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXIucm90YXRpb24gPj0gdGhpcy50YXJnZXRSb3RhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnJvdGF0aW9uID0gdGhpcy50YXJnZXRSb3RhdGlvbjtcclxuICAgICAgICAgICAgICAgIHBsYXllci5yb3RhdGlvblNwZWVkID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNGYWxsaW5nICYmIHBsYXllci5yb3RhdGlvblNwZWVkID09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcXVhcnRlclR1cm4gPSBNYXRoLlBJIC8gMjtcclxuICAgICAgICAgICAgY29uc3QgcmVtYWluZGVyID0gcGxheWVyLnJvdGF0aW9uICUgcXVhcnRlclR1cm47XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhyZW1haW5kZXIpID4gMC4wMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWRqdXN0bWVudCA9IHF1YXJ0ZXJUdXJuIC0gcmVtYWluZGVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRSb3RhdGlvbiA9IHBsYXllci5yb3RhdGlvbiArIGFkanVzdG1lbnQ7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIucm90YXRpb25TcGVlZCA9IGFkanVzdG1lbnQgLyAxMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgbmV3UGxheWVyU3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvb3JkczogbmV3IFBvaW50KFxyXG4gICAgICAgICAgICAgICAgcGxheWVyLmNvb3Jkcy54ICsgKHBsYXllci52ZWxvY2l0eS54ICogZmFjdG9yKSxcclxuICAgICAgICAgICAgICAgIHBsYXllci5jb29yZHMueSArIChwbGF5ZXIudmVsb2NpdHkueSAqIGZhY3RvcilcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgc2l6ZTogcGxheWVyLnNpemUsXHJcbiAgICAgICAgICAgIHZlbG9jaXR5OiBwbGF5ZXIudmVsb2NpdHksXHJcbiAgICAgICAgICAgIHByZXZDb29yZHM6IHRoaXMucHJldkNvb3Jkc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaXNHcm91bmRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29sbGlkaW5nV2l0aEp1bXBPcmIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKdW1wT3JiID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgYm91bmRhcnlDb2xsaXNpb25zID0gdGhpcy5jb2xsaXNpb25NYW5hZ2VyLmNoZWNrQm91bmRhcnlDb2xsaXNpb25zKG5ld1BsYXllclN0YXRlKTtcclxuICAgICAgICBpZiAoYm91bmRhcnlDb2xsaXNpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgcmlnaHRCb3VuZGFyeUNvbGxpc2lvbiA9IGJvdW5kYXJ5Q29sbGlzaW9ucy5maW5kKGNvbGxpc2lvbiA9PiBjb2xsaXNpb24udHlwZSA9PT0gJ2JvdW5kYXJ5LXJpZ2h0Jyk7XHJcbiAgICAgICAgICAgIGlmIChyaWdodEJvdW5kYXJ5Q29sbGlzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuY29vcmRzID0gcmlnaHRCb3VuZGFyeUNvbGxpc2lvbi5ub3JtYWxpemVkUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUGxheWVyVXBkYXRlUmVzdWx0LnJlYWNoZWRFbmQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1BsYXllclN0YXRlLmNvb3JkcyA9IGJvdW5kYXJ5Q29sbGlzaW9uc1swXS5ub3JtYWxpemVkUG9zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChib3VuZGFyeUNvbGxpc2lvbnNbMF0ub2JqZWN0UG9zaXRpb24ueSA9PT0gZ2FtZVBhcmFtcy5ib3VuZGFyaWVzLnRvcC5zaXplLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5LnkgPSBNYXRoLm1heCgwLCBwbGF5ZXIudmVsb2NpdHkueSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzR3JvdW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVHcm91bmRlZFJvdGF0aW9uKHBsYXllcik7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuaXNJbnRlbnRpb25hbEp1bXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGxheWVyLmNvb3JkcyA9IG5ld1BsYXllclN0YXRlLmNvb3JkcztcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjb2xsaXNpb25zID0gdGhpcy5jb2xsaXNpb25NYW5hZ2VyLmNoZWNrUGxheWVyQ29sbGlzaW9ucyhuZXdQbGF5ZXJTdGF0ZSwgY2FudmFzU2l6ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGp1bXBPcmJDb2xsaXNpb24gPSBjb2xsaXNpb25zLmZpbmQoY29sbGlzaW9uID0+IGNvbGxpc2lvbi50eXBlID09PSAnanVtcE9yYicpO1xyXG4gICAgICAgIGlmIChqdW1wT3JiQ29sbGlzaW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlkaW5nV2l0aEp1bXBPcmIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKdW1wT3JiID0ganVtcE9yYkNvbGxpc2lvbi5oaXRPYmplY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkZXN0cm95Q29sbGlzaW9uID0gY29sbGlzaW9ucy5maW5kKGNvbGxpc2lvbiA9PiBjb2xsaXNpb24udHlwZSA9PT0gJ2Rlc3Ryb3knKTtcclxuICAgICAgICBpZiAoZGVzdHJveUNvbGxpc2lvbikge1xyXG4gICAgICAgICAgICBwbGF5ZXIuaXNFeHBsb2RpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gUGxheWVyVXBkYXRlUmVzdWx0LmRlc3Ryb3llZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdG9wQ29sbGlzaW9uID0gY29sbGlzaW9ucy5maW5kKGNvbGxpc2lvbiA9PiBjb2xsaXNpb24udHlwZSA9PT0gJ3RvcCcpO1xyXG4gICAgICAgIGlmICh0b3BDb2xsaXNpb24pIHtcclxuICAgICAgICAgICAgcGxheWVyLmNvb3Jkcy55ID0gdG9wQ29sbGlzaW9uLm5vcm1hbGl6ZWRQb3NpdGlvbi55O1xyXG4gICAgICAgICAgICBwbGF5ZXIuY29vcmRzLnggPSB0b3BDb2xsaXNpb24ubm9ybWFsaXplZFBvc2l0aW9uLng7XHJcbiAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS55ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5pc0dyb3VuZGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3JvdW5kZWRSb3RhdGlvbihwbGF5ZXIpO1xyXG4gICAgICAgICAgICBwbGF5ZXIuaXNJbnRlbnRpb25hbEp1bXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIFBsYXllclVwZGF0ZVJlc3VsdC5hbGl2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJNb3Zlc0luV29ybGQpIHtcclxuICAgICAgICAgICAgbGV0IHJpZ2h0Qm91bmRhcnlYID0gZ2FtZVBhcmFtcy5zaXplLndpZHRoIC0gZ2FtZVBhcmFtcy5ib3VuZGFyaWVzLnJpZ2h0LnNpemUud2lkdGggLSBnYW1lUGFyYW1zLndvcmxkT2Zmc2V0Lng7XHJcbiAgICAgICAgICAgIGlmIChyaWdodEJvdW5kYXJ5WCArIGdhbWVQYXJhbXMuYm91bmRhcmllcy5yaWdodC5zaXplLndpZHRoIDw9IGNhbnZhc1NpemUud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0Qm91bmRhcnlYID0gY2FudmFzU2l6ZS53aWR0aCAtIGdhbWVQYXJhbXMuYm91bmRhcmllcy5yaWdodC5zaXplLndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBtYXhQbGF5ZXJYID0gcmlnaHRCb3VuZGFyeVggLSBwbGF5ZXIuc2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgcGxheWVyLmNvb3Jkcy54ID0gTWF0aC5taW4ocGxheWVyLmNvb3Jkcy54LCBtYXhQbGF5ZXJYKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQbGF5ZXJVcGRhdGVSZXN1bHQuYWxpdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVHcm91bmRlZFJvdGF0aW9uKHBsYXllcikge1xyXG4gICAgICAgIGlmIChwbGF5ZXIucm90YXRpb24gPiAwICYmIHBsYXllci5yb3RhdGlvbiA8IE1hdGguUEkgLyAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ1JvdGF0aW9uID0gTWF0aC5QSSAvIDIgLSBwbGF5ZXIucm90YXRpb247XHJcbiAgICAgICAgICAgIHBsYXllci5yb3RhdGlvblNwZWVkID0gcmVtYWluaW5nUm90YXRpb24gLyAzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBsYXllci5yb3RhdGlvbiA9IHRoaXMudGFyZ2V0Um90YXRpb247XHJcbiAgICAgICAgICAgIHBsYXllci5yb3RhdGlvblNwZWVkID0gMDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHF1YXJ0ZXJUdXJuID0gTWF0aC5QSSAvIDI7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbWFpbmRlciA9IHBsYXllci5yb3RhdGlvbiAlIHF1YXJ0ZXJUdXJuO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMocmVtYWluZGVyKSA+IDAuMDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFkanVzdG1lbnQgPSBxdWFydGVyVHVybiAtIHJlbWFpbmRlcjtcclxuICAgICAgICAgICAgICAgIHBsYXllci5yb3RhdGlvblNwZWVkID0gYWRqdXN0bWVudCAvIDEyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGp1bXAocGxheWVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHcm91bmRlZCB8fCB0aGlzLmNvbGxpZGluZ1dpdGhKdW1wT3JiKSB7XHJcbiAgICAgICAgICAgIHBsYXllci5pc0ludGVudGlvbmFsSnVtcCA9IHRydWU7XHJcbiAgICAgICAgICAgIHBsYXllci5yb3RhdGlvblNwZWVkID0gKE1hdGguUEkgLyAyKSAvIDEyO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldFJvdGF0aW9uID0gcGxheWVyLnJvdGF0aW9uICsgTWF0aC5QSSAvIDI7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb2xsaWRpbmdXaXRoSnVtcE9yYikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEp1bXBPcmIuaXNSZXZlcnNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS55ID0gdGhpcy5vcmJEb3duSnVtcFBvd2VyO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueSA9IHRoaXMub3JiVXBKdW1wUG93ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEp1bXBPcmIgJiYgdGhpcy5jdXJyZW50SnVtcE9yYi5zdGFydFB1bHNlQW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SnVtcE9yYi5zdGFydFB1bHNlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGluZ1dpdGhKdW1wT3JiID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKdW1wT3JiID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS55ID0gdGhpcy5wbGF5ZXJKdW1wUG93ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNHcm91bmRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllck9wdGlvbnMge1xyXG4gICAgY29uc3RydWN0b3IoaXNQbGF5ZXJGaXhlZCkge1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ZXJGaXhlZCA9IGlzUGxheWVyRml4ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQbGF5ZXJPcHRpb25zKHRydWUpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyVXBkYXRlUmVzdWx0IHtcclxuICAgIHN0YXRpYyBnZXQgQUxJVkUoKSB7IHJldHVybiAnYWxpdmUnOyB9XHJcbiAgICBzdGF0aWMgZ2V0IERFU1RST1lFRCgpIHsgcmV0dXJuICdkZXN0cm95ZWQnOyB9XHJcbiAgICBzdGF0aWMgZ2V0IFJFQUNIRURfRU5EKCkgeyByZXR1cm4gJ3JlYWNoZWRfZW5kJzsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlc3VsdCkge1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhbGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBsYXllclVwZGF0ZVJlc3VsdChQbGF5ZXJVcGRhdGVSZXN1bHQuQUxJVkUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZXN0cm95ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQbGF5ZXJVcGRhdGVSZXN1bHQoUGxheWVyVXBkYXRlUmVzdWx0LkRFU1RST1lFRCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlYWNoZWRFbmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQbGF5ZXJVcGRhdGVSZXN1bHQoUGxheWVyVXBkYXRlUmVzdWx0LlJFQUNIRURfRU5EKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0FsaXZlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdCA9PT0gUGxheWVyVXBkYXRlUmVzdWx0LkFMSVZFO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRGVzdHJveWVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdCA9PT0gUGxheWVyVXBkYXRlUmVzdWx0LkRFU1RST1lFRDtcclxuICAgIH1cclxuXHJcbiAgICBpc1JlYWNoZWRFbmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0ID09PSBQbGF5ZXJVcGRhdGVSZXN1bHQuUkVBQ0hFRF9FTkQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9pbnQgZnJvbSAnQGNvbW1vbi9wb2ludC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFrZUVmZmVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmludGVuc2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoaW50ZW5zaXR5ID0gOCwgZHVyYXRpb24gPSAzMDApIHtcclxuICAgICAgICB0aGlzLmludGVuc2l0eSA9IGludGVuc2l0eTtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGZhY3RvciA9IDEpIHtcclxuICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiA8PSAwKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50aW1lciArPSAxNiAqIGZhY3RvcjtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmludGVuc2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRPZmZzZXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gPD0gMCkgcmV0dXJuIG5ldyBQb2ludCgwLCAwKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMudGltZXIgLyB0aGlzLmR1cmF0aW9uO1xyXG4gICAgICAgIGNvbnN0IGZhZGVPdXQgPSAxIC0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEludGVuc2l0eSA9IHRoaXMuaW50ZW5zaXR5ICogZmFkZU91dDtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyICogY3VycmVudEludGVuc2l0eSxcclxuICAgICAgICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMiAqIGN1cnJlbnRJbnRlbnNpdHlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0FjdGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kdXJhdGlvbiA+IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnRpbnVlQWZ0ZXJTdG9wKHJlbmRlckNhbGxiYWNrLCBvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydCgxMiwgNDAwKTtcclxuICAgICAgICBsZXQgbGFzdFNoYWtlVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIGNvbnN0IHNoYWtlTG9vcCA9IChjdXJyZW50VGltZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSBNYXRoLm1pbihjdXJyZW50VGltZSAtIGxhc3RTaGFrZVRpbWUsIDMzKTtcclxuICAgICAgICAgICAgbGFzdFNoYWtlVGltZSA9IGN1cnJlbnRUaW1lO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKGRlbHRhVGltZSAvIDE2KTtcclxuICAgICAgICAgICAgICAgIHJlbmRlckNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2hha2VMb29wKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2hha2VMb29wKTtcclxuICAgIH1cclxufSIsImltcG9ydCBTdHJpbmdSZXNvdXJjZXMgZnJvbSAnQGNvbW1vbi9zdHJpbmdfcmVzb3VyY2VzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpY3RvcnlUZXh0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMudG90YWxEdXJhdGlvbiA9IDMwMDA7XHJcbiAgICAgICAgdGhpcy5mYWRlSW5EdXJhdGlvbiA9IDUwMDtcclxuICAgICAgICB0aGlzLmZhZGVPdXREdXJhdGlvbiA9IDEwMDA7XHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IDA7XHJcbiAgICAgICAgdGhpcy5ib3VuY2VQaGFzZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lID0gMDtcclxuICAgICAgICB0aGlzLnNjYWxlID0gMDtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB0aGlzLmFscGhhID0gMDtcclxuICAgICAgICB0aGlzLmJvdW5jZVBoYXNlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZmFjdG9yID0gMSkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgKz0gMTYgKiBmYWN0b3I7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvblRpbWUgPj0gdGhpcy50b3RhbER1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uVGltZSA8IHRoaXMuZmFkZUluRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLmFuaW1hdGlvblRpbWUgLyB0aGlzLmZhZGVJbkR1cmF0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBlYXNlT3V0ID0gMSAtIE1hdGgucG93KDEgLSBwcm9ncmVzcywgMyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gZWFzZU91dDtcclxuICAgICAgICAgICAgdGhpcy5hbHBoYSA9IGVhc2VPdXQ7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYW5pbWF0aW9uVGltZSA+IHRoaXMudG90YWxEdXJhdGlvbiAtIHRoaXMuZmFkZU91dER1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZhZGVPdXRTdGFydCA9IHRoaXMudG90YWxEdXJhdGlvbiAtIHRoaXMuZmFkZU91dER1cmF0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9ICh0aGlzLmFuaW1hdGlvblRpbWUgLSBmYWRlT3V0U3RhcnQpIC8gdGhpcy5mYWRlT3V0RHVyYXRpb247XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5hbHBoYSA9IDEgLSBwcm9ncmVzcztcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmFscGhhID0gMTtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4LCBjYW52YXNTaXplKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8IHRoaXMuYWxwaGEgPD0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBjYW52YXNTaXplLndpZHRoIC8gMjtcclxuICAgICAgICBjb25zdCBjZW50ZXJZID0gY2FudmFzU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGN0eC50cmFuc2xhdGUoY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnJvdGF0aW9uKTtcclxuICAgICAgICBjdHguc2NhbGUodGhpcy5zY2FsZSwgdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKDQsIDQpO1xyXG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IHRoaXMuYWxwaGEgKiAwLjU7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsICcjMDAwMDAwJywgZmFsc2UpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5hbHBoYTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgJyNGRkZGRkYnLCB0cnVlKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5hbHBoYSA+IDAuNSkge1xyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSAodGhpcy5hbHBoYSAtIDAuNSkgKiAyICogMC43O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgaGlnaGxpZ2h0R3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoLTEyMCwgLTUwLCAxMjAsIC0yMCk7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodEdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsIDI1NSwgMjU1LCAwKScpO1xyXG4gICAgICAgICAgICBoaWdobGlnaHRHcmFkaWVudC5hZGRDb2xvclN0b3AoMC41LCAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpJyk7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodEdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsIDI1NSwgMjU1LCAwKScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIGhpZ2hsaWdodEdyYWRpZW50LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1RleHQoY3R4LCBmaWxsU3R5bGUsIHdpdGhTdHJva2UgPSBmYWxzZSkge1xyXG4gICAgICAgIGN0eC5mb250ID0gJ2JvbGQgNzJweCBcIkNvdXJpZXIgTmV3XCIsIFwiTHVjaWRhIENvbnNvbGVcIiwgXCJNb25hY29cIiwgXCJEZWphVnUgU2FucyBNb25vXCIsIG1vbm9zcGFjZSc7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcclxuICAgICAgICBcclxuICAgICAgICBpZiAod2l0aFN0cm9rZSkge1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzAwMDAwMCc7XHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSA4O1xyXG4gICAgICAgICAgICBjdHgubGluZUpvaW4gPSAnbWl0ZXInO1xyXG4gICAgICAgICAgICBjdHgubGluZUNhcCA9ICdidXR0JztcclxuICAgICAgICAgICAgY3R4Lm1pdGVyTGltaXQgPSAyO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlVGV4dChTdHJpbmdSZXNvdXJjZXMuTEVWRUxfUEFTU0VELCAwLCAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwMDAwJztcclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDY7XHJcbiAgICAgICAgICAgIGN0eC5saW5lSm9pbiA9ICdtaXRlcic7XHJcbiAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gJ2J1dHQnO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlVGV4dChTdHJpbmdSZXNvdXJjZXMuTEVWRUxfUEFTU0VELCAwLCAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwMDAwJztcclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDM7XHJcbiAgICAgICAgICAgIGN0eC5saW5lSm9pbiA9ICdtaXRlcic7XHJcbiAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gJ2J1dHQnO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlVGV4dChTdHJpbmdSZXNvdXJjZXMuTEVWRUxfUEFTU0VELCAwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcclxuICAgICAgICBjdHguZmlsbFRleHQoU3RyaW5nUmVzb3VyY2VzLkxFVkVMX1BBU1NFRCwgMCwgMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHdpdGhTdHJva2UpIHtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2UtYXRvcCc7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjQpJztcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFN0cmluZ1Jlc291cmNlcy5MRVZFTF9QQVNTRUQsIDEsIDEpO1xyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc0NvbXBsZXRlKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc0FjdGl2ZTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgT2JqZWN0TWFuYWdlciBmcm9tICdAY29tbW9uL2dhbWUvb2JqZWN0X21hbmFnZXIuanMnO1xyXG5pbXBvcnQgQm91bmRhcnlNYW5hZ2VyIGZyb20gJ0Bjb21tb24vZ2FtZS9ib3VuZGFyeV9tYW5hZ2VyLmpzJztcclxuaW1wb3J0IEN1YmVQbGF5ZXIgZnJvbSAnQGNvbW1vbi9nYW1lL2FjdG9ycy9wbGF5ZXIvcGxheWVyLmpzJztcclxuaW1wb3J0IFBsYXllck9wdGlvbnMgZnJvbSAnQGNvbW1vbi9nYW1lL3BsYXllcl9vcHRpb25zLmpzJztcclxuaW1wb3J0IEN1YmVQbGF5ZXJQaHlzaWNzIGZyb20gJ0Bjb21tb24vZ2FtZS9waHlzaWNzLmpzJztcclxuaW1wb3J0IFBvaW50IGZyb20gJ0Bjb21tb24vcG9pbnQuanMnO1xyXG5pbXBvcnQgU2l6ZSBmcm9tICdAY29tbW9uL3NpemUuanMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnQGNvbW1vbi9ncmFwaGljcy9wcm9ncmVzc19iYXIuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ybGQge1xyXG4gICAgY29uc3RydWN0b3IobGV2ZWwsIHVzZU9uZURpcmVjdGlvbk9wdGltaXphdGlvbikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGxldmVsLm5hbWU7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbmV3IFNpemUobGV2ZWwud29ybGQuc2l6ZS53aWR0aCwgbGV2ZWwud29ybGQuc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMud29ybGRPZmZzZXQgPSBuZXcgUG9pbnQoMCwgMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ib3VuZGFyeU1hbmFnZXIgPSBuZXcgQm91bmRhcnlNYW5hZ2VyKGxldmVsKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBDdWJlUGxheWVyKG5ldyBQb2ludChsZXZlbC5wbGF5ZXIuY29vcmRzLngsIGxldmVsLnBsYXllci5jb29yZHMueSksIG5ldyBTaXplKGxldmVsLnBsYXllci5zaXplLndpZHRoLCBsZXZlbC5wbGF5ZXIuc2l6ZS5oZWlnaHQpKTtcclxuICAgICAgICB0aGlzLm9iamVjdE1hbmFnZXIgPSBuZXcgT2JqZWN0TWFuYWdlcih1c2VPbmVEaXJlY3Rpb25PcHRpbWl6YXRpb24sIGxldmVsLmJyaWNrcywgbGV2ZWwuanVtcE9yYnMsIGxldmVsLnNwaWtlcyk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzID0gbmV3IEN1YmVQbGF5ZXJQaHlzaWNzKHRoaXMsIGxldmVsLndvcmxkLndvcmxkU3BlZWQpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSB0aGlzLnBsYXllci5jb29yZHMueDtcclxuICAgICAgICB0aGlzLmVuZFBvc2l0aW9uID0gdGhpcy5ib3VuZGFyaWVzLnJpZ2h0LmNvb3Jkcy54IC0gdGhpcy5wbGF5ZXIuc2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gbmV3IFByb2dyZXNzQmFyKG5ldyBTaXplKDQwMCwgMjApKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYm91bmRhcmllcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3VuZGFyeU1hbmFnZXIub2JqZWN0cztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYnJpY2tzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdE1hbmFnZXIuYnJpY2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBqdW1wT3JicygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RNYW5hZ2VyLmp1bXBPcmJzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzcGlrZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0TWFuYWdlci5zcGlrZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmlzaWJsZUJyaWNrcyhjYW52YXNTaXplKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0TWFuYWdlci5nZXRWaXNpYmxlT2JqZWN0c0l0ZXJhdG9yKCdicmlja3MnLCB0aGlzLndvcmxkT2Zmc2V0LCBjYW52YXNTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaXNpYmxlSnVtcE9yYnMoY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdE1hbmFnZXIuZ2V0VmlzaWJsZU9iamVjdHNJdGVyYXRvcignanVtcE9yYnMnLCB0aGlzLndvcmxkT2Zmc2V0LCBjYW52YXNTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaXNpYmxlU3Bpa2VzKGNhbnZhc1NpemUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RNYW5hZ2VyLmdldFZpc2libGVPYmplY3RzSXRlcmF0b3IoJ3NwaWtlcycsIHRoaXMud29ybGRPZmZzZXQsIGNhbnZhc1NpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShmYWN0b3IsIGNhbnZhc1NpemUpIHtcclxuICAgICAgICB0aGlzLnBoeXNpY3MudXBkYXRlV29ybGRPZmZzZXQoZmFjdG9yLCBjYW52YXNTaXplKTtcclxuXHJcbiAgICAgICAgY29uc3Qgd29ybGRTcGVlZCA9IHRoaXMucGh5c2ljcy5nZXRDdXJyZW50V29ybGRTcGVlZCgpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TWFuYWdlci51cGRhdGUod29ybGRTcGVlZCwgZmFjdG9yLCBjYW52YXNTaXplLndpZHRoKTtcclxuICAgICAgICB0aGlzLmJvdW5kYXJ5TWFuYWdlci51cGRhdGUoZmFjdG9yLCB3b3JsZFNwZWVkLCBjYW52YXNTaXplLndpZHRoKTtcclxuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoZmFjdG9yKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhcihjYW52YXNTaXplKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGh5c2ljcy51cGRhdGUoZmFjdG9yLCB0aGlzLnBsYXllciwgY2FudmFzU2l6ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRyYXcoY3R4LCBjYW52YXNTaXplLCBwbGF5ZXJPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RNYW5hZ2VyLmRyYXcoY3R4LCB0aGlzLndvcmxkT2Zmc2V0LCBjYW52YXNTaXplKTtcclxuICAgICAgICB0aGlzLmJvdW5kYXJ5TWFuYWdlci5kcmF3KGN0eCwgdGhpcy53b3JsZE9mZnNldCwgY2FudmFzU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdyhjdHgsIHRoaXMud29ybGRPZmZzZXQsIHBsYXllck9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuZHJhdyhjdHgsIGNhbnZhc1NpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUdhbWVTaXplKHNpemUpIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuYm91bmRhcnlNYW5hZ2VyLmNoYW5nZUdhbWVTaXplKHNpemUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRIb3ZlcmVkT2JqZWN0KHBvaW50LCBwbGF5ZXJPcHRpb25zKSB7XHJcbiAgICAgICAgcGxheWVyT3B0aW9ucyA9IHBsYXllck9wdGlvbnMgfHwgUGxheWVyT3B0aW9ucy5kZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllci5pc1BvaW50T3Zlcihwb2ludCwgdGhpcy53b3JsZE9mZnNldCwgcGxheWVyT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGNvbnN0IGJyaWNrIG9mIHRoaXMuYnJpY2tzKSB7XHJcbiAgICAgICAgICAgIGlmIChicmljay5pc1BvaW50T3Zlcihwb2ludCwgdGhpcy53b3JsZE9mZnNldCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBicmljaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBvcmIgb2YgdGhpcy5qdW1wT3Jicykge1xyXG4gICAgICAgICAgICBpZiAob3JiLmlzUG9pbnRPdmVyKHBvaW50LCB0aGlzLndvcmxkT2Zmc2V0KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBzcGlrZSBvZiB0aGlzLnNwaWtlcykge1xyXG4gICAgICAgICAgICBpZiAoc3Bpa2UuaXNQb2ludE92ZXIocG9pbnQsIHRoaXMud29ybGRPZmZzZXQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3Bpa2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBib3VuZGFyeV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5ib3VuZGFyaWVzKSkge1xyXG4gICAgICAgICAgICBpZiAoYm91bmRhcnkuaXNQb2ludE92ZXIocG9pbnQsIHRoaXMud29ybGRPZmZzZXQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm91bmRhcnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSAodGhpcy5wbGF5ZXIuY29vcmRzLnggLSB0aGlzLnN0YXJ0UG9zaXRpb24gKyB0aGlzLndvcmxkT2Zmc2V0LngpIC8gKHRoaXMuZW5kUG9zaXRpb24gLSB0aGlzLnN0YXJ0UG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGp1bXBQbGF5ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmp1bXAodGhpcy5wbGF5ZXIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBvaW50IGZyb20gJ0Bjb21tb24vcG9pbnQuanMnO1xyXG5pbXBvcnQgU2l6ZSBmcm9tICdAY29tbW9uL3NpemUuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJpY2tQYXR0ZXJuUmVuZGVyZXIge1xyXG4gICAgc3RhdGljIGRyYXdCcmlja1BhdHRlcm4oY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGJyaWNrQ29sb3IgPSAnIzhCNDUxMycsXHJcbiAgICAgICAgICAgIG1vcnRhckNvbG9yID0gJyM2NTQzMjEnLFxyXG4gICAgICAgICAgICBicmlja1dpZHRoID0gNjAsXHJcbiAgICAgICAgICAgIGJyaWNrSGVpZ2h0ID0gMzAsXHJcbiAgICAgICAgICAgIG1vcnRhcldpZHRoID0gMyxcclxuICAgICAgICAgICAgbW9ydGFySGVpZ2h0ID0gMyxcclxuICAgICAgICAgICAgb2Zmc2V0WCA9IDAsXHJcbiAgICAgICAgICAgIG9mZnNldFkgPSAwXHJcbiAgICAgICAgfSA9IG9wdGlvbnM7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdGFsQnJpY2tXaWR0aCA9IGJyaWNrV2lkdGggKyBtb3J0YXJXaWR0aDtcclxuICAgICAgICBjb25zdCB0b3RhbEJyaWNrSGVpZ2h0ID0gYnJpY2tIZWlnaHQgKyBtb3J0YXJIZWlnaHQ7XHJcblxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBtb3J0YXJDb2xvcjtcclxuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBicmlja0NvbG9yO1xyXG5cclxuICAgICAgICBjb25zdCByb3dzID0gTWF0aC5jZWlsKGhlaWdodCAvIHRvdGFsQnJpY2tIZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IGNvbHMgPSBNYXRoLmNlaWwod2lkdGggLyB0b3RhbEJyaWNrV2lkdGgpO1xyXG5cclxuICAgICAgICBjb25zdCBub3JtYWxpemVkT2Zmc2V0ID0gb2Zmc2V0WCArIE1hdGguZmxvb3IoTWF0aC5hYnMob2Zmc2V0WCkgLyB0b3RhbEJyaWNrV2lkdGgpICogdG90YWxCcmlja1dpZHRoO1xyXG5cclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3dZID0geSArIHJvdyAqIHRvdGFsQnJpY2tIZWlnaHQgKyBvZmZzZXRZO1xyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAocm93ICUgMikgKiAoYnJpY2tXaWR0aCAvIDIpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgY29scyArIDE7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xYID0geCArIGNvbCAqIHRvdGFsQnJpY2tXaWR0aCAtIG9mZnNldCArIG5vcm1hbGl6ZWRPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChjb2xYICsgYnJpY2tXaWR0aCA+IHggJiYgY29sWCA8IHggKyB3aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHJvd1kgPCB5ICsgaGVpZ2h0ICYmIHJvd1kgKyBicmlja0hlaWdodCA+IHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmF3WCA9IE1hdGgubWF4KGNvbFgsIHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdZID0gTWF0aC5tYXgocm93WSwgeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJhd1dpZHRoID0gTWF0aC5taW4oY29sWCArIGJyaWNrV2lkdGgsIHggKyB3aWR0aCkgLSBkcmF3WDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmF3SGVpZ2h0ID0gTWF0aC5taW4ocm93WSArIGJyaWNrSGVpZ2h0LCB5ICsgaGVpZ2h0KSAtIGRyYXdZO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZHJhd1dpZHRoID4gMCAmJiBkcmF3SGVpZ2h0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoZHJhd1gsIGRyYXdZLCBkcmF3V2lkdGgsIGRyYXdIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZHJhd0FuaW1hdGVkQnJpY2tQYXR0ZXJuKGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgdGltZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0ZWRPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgICAgICBvZmZzZXRYOiAob3B0aW9ucy5vZmZzZXRYIHx8IDApICsgTWF0aC5zaW4odGltZSAqIDAuMDAxKSAqIDIwLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAob3B0aW9ucy5vZmZzZXRZIHx8IDApICsgTWF0aC5jb3ModGltZSAqIDAuMDAxNSkgKiAxMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd0JyaWNrUGF0dGVybihjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGFuaW1hdGVkT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRyYXdHcmFkaWVudEJyaWNrUGF0dGVybihjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc3RhcnRDb2xvciA9ICcjRDI2OTFFJyxcclxuICAgICAgICAgICAgZW5kQ29sb3IgPSAnIzhCNDUxMycsXHJcbiAgICAgICAgICAgIG1vcnRhckNvbG9yID0gJyM2NTQzMjEnLFxyXG4gICAgICAgICAgICAuLi5vdGhlck9wdGlvbnNcclxuICAgICAgICB9ID0gb3B0aW9ucztcclxuXHJcbiAgICAgICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoeCwgeSwgeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcclxuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgc3RhcnRDb2xvcik7XHJcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGVuZENvbG9yKTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3QnJpY2tQYXR0ZXJuKGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCwge1xyXG4gICAgICAgICAgICAuLi5vdGhlck9wdGlvbnMsXHJcbiAgICAgICAgICAgIGJyaWNrQ29sb3I6IGdyYWRpZW50LFxyXG4gICAgICAgICAgICBtb3J0YXJDb2xvclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBvaW50IGZyb20gJ0Bjb21tb24vcG9pbnQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3NCYXIge1xyXG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSAnIzMzMzMzMyc7XHJcbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSAnI0ZGMTcyNic7XHJcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9ICcjZmZmZmZmJztcclxuICAgICAgICB0aGlzLmJvcmRlcldpZHRoID0gNDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmVzcyhwcm9ncmVzcykge1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBwcm9ncmVzcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4LCBjYW52YXNTaXplKSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAgIChjYW52YXNTaXplLndpZHRoIC0gdGhpcy5zaXplLndpZHRoKSAvIDIsXHJcbiAgICAgICAgICAgIDIwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCB0aGlzLnNpemUud2lkdGgsIHRoaXMuc2l6ZS5oZWlnaHQpO1xyXG5cclxuICAgICAgICBjb25zdCBmaWxsV2lkdGggPSB0aGlzLnNpemUud2lkdGggKiB0aGlzLnByb2dyZXNzO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmZpbGxDb2xvcjtcclxuICAgICAgICBjdHguZmlsbFJlY3QocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgZmlsbFdpZHRoLCB0aGlzLnNpemUuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5ib3JkZXJDb2xvcjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5ib3JkZXJXaWR0aDtcclxuICAgICAgICBjdHguc3Ryb2tlUmVjdChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCB0aGlzLnNpemUud2lkdGgsIHRoaXMuc2l6ZS5oZWlnaHQpO1xyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm91bmRhcnlEYXRhIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgY29vcmRzLFxyXG4gICAgICAgIHNpemUsXHJcbiAgICAgICAgYmFja2dyb3VuZFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCcmlja0RhdGEge1xyXG4gICAgY29uc3RydWN0b3IoaWQsIGNvb3Jkcywgc2l6ZSwgYmFja2dyb3VuZENvbG9yLCBzdHJva2VXaWR0aCwgc3Ryb2tlQ29sb3IsIGlzQWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgdGhpcy5zdHJva2VXaWR0aCA9IHN0cm9rZVdpZHRoO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlQ29sb3IgPSBzdHJva2VDb2xvcjtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gaXNBY3RpdmU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm91bmRzRGF0YSB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20pIHtcclxuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMudG9wID0gdG9wO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgICAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1bXBPcmJEYXRhIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCBjb29yZHMsIGlzUmV2ZXJzZWQpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XHJcbiAgICAgICAgdGhpcy5pc1JldmVyc2VkID0gaXNSZXZlcnNlZDtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIG5hbWUsIC8vIHN0cmluZ1xyXG4gICAgICAgIHdvcmxkLCAvLyBXb3JsZERhdGEsXHJcbiAgICAgICAgYm91bmRhcmllcywgLy8gR2FtZUJvdW5kc0RhdGFcclxuICAgICAgICBicmlja3MsIC8vIFtCcmlja0RhdGFdXHJcbiAgICAgICAganVtcE9yYnMsIC8vIFtKdW1wT3JiRGF0YV1cclxuICAgICAgICBzcGlrZXMsIC8vIFtTcGlrZURhdGFdXHJcbiAgICAgICAgcGxheWVyIC8vIFBsYXllckRhdGFcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy53b3JsZCA9IHdvcmxkO1xyXG4gICAgICAgIHRoaXMuYm91bmRhcmllcyA9IGJvdW5kYXJpZXM7XHJcbiAgICAgICAgdGhpcy5icmlja3MgPSBicmlja3M7XHJcbiAgICAgICAgdGhpcy5qdW1wT3JicyA9IGp1bXBPcmJzO1xyXG4gICAgICAgIHRoaXMuc3Bpa2VzID0gc3Bpa2VzO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IExldmVsIGZyb20gJ0Bjb21tb24vbGV2ZWxzL2xldmVsLmpzJztcclxuaW1wb3J0IFdvcmxkRGF0YSBmcm9tICdAY29tbW9uL2xldmVscy93b3JsZF9kYXRhLmpzJztcclxuaW1wb3J0IFBsYXllckRhdGEgZnJvbSAnQGNvbW1vbi9sZXZlbHMvcGxheWVyX2RhdGEuanMnO1xyXG5pbXBvcnQgQnJpY2tEYXRhIGZyb20gJ0Bjb21tb24vbGV2ZWxzL2JyaWNrX2RhdGEuanMnO1xyXG5pbXBvcnQgQm91bmRhcnlEYXRhIGZyb20gJ0Bjb21tb24vbGV2ZWxzL2JvdW5kYXJ5X2RhdGEuanMnO1xyXG5pbXBvcnQgR2FtZUJvdW5kc0RhdGEgZnJvbSAnQGNvbW1vbi9sZXZlbHMvZ2FtZV9ib3VuZHNfZGF0YS5qcyc7XHJcbmltcG9ydCBCb3VuZGFyeUJhY2tncm91bmQgZnJvbSAnQGNvbW1vbi9nYW1lL2FjdG9ycy9ib3VuZGFyeS9ib3VuZGFyeV9iYWNrZ3JvdW5kLmpzJztcclxuaW1wb3J0IFNpemUgZnJvbSAnQGNvbW1vbi9zaXplLmpzJztcclxuaW1wb3J0IFBvaW50IGZyb20gJ0Bjb21tb24vcG9pbnQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxGYWN0b3J5IHtcclxuICAgIHN0YXRpYyBjcmVhdGVEZWZhdWx0TGV2ZWwoY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIGNvbnN0IHdvcmxkRGF0YSA9IG5ldyBXb3JsZERhdGEobmV3IFNpemUoMzAwMCwgODYwKSwgNik7XHJcblxyXG4gICAgICAgIGNvbnN0IGdyb3VuZExldmVsID0gd29ybGREYXRhLnNpemUuaGVpZ2h0IC0gMjAwO1xyXG4gICAgICAgIGNvbnN0IGJvdW5kYXJ5VGhpY2tuZXNzID0gMTAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRCYWNrZ3JvdW5kID0gbmV3IEJvdW5kYXJ5QmFja2dyb3VuZCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJvdW5kYXJpZXNEYXRhID0gbmV3IEdhbWVCb3VuZHNEYXRhKFxyXG4gICAgICAgICAgICBuZXcgQm91bmRhcnlEYXRhKFxyXG4gICAgICAgICAgICAgICAgJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBvaW50KDAsIDApLFxyXG4gICAgICAgICAgICAgICAgbmV3IFNpemUoYm91bmRhcnlUaGlja25lc3MsIHdvcmxkRGF0YS5zaXplLmhlaWdodCksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0QmFja2dyb3VuZFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBuZXcgQm91bmRhcnlEYXRhKFxyXG4gICAgICAgICAgICAgICAgJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICBuZXcgUG9pbnQoMCwgMCksXHJcbiAgICAgICAgICAgICAgICBuZXcgU2l6ZSh3b3JsZERhdGEuc2l6ZS53aWR0aCwgYm91bmRhcnlUaGlja25lc3MpLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdEJhY2tncm91bmRcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgbmV3IEJvdW5kYXJ5RGF0YShcclxuICAgICAgICAgICAgICAgICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICBuZXcgUG9pbnQod29ybGREYXRhLnNpemUud2lkdGggLSBib3VuZGFyeVRoaWNrbmVzcywgMCksXHJcbiAgICAgICAgICAgICAgICBuZXcgU2l6ZShib3VuZGFyeVRoaWNrbmVzcywgd29ybGREYXRhLnNpemUuaGVpZ2h0KSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRCYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIG5ldyBCb3VuZGFyeURhdGEoXHJcbiAgICAgICAgICAgICAgICAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgIG5ldyBQb2ludCgwLCBncm91bmRMZXZlbCksXHJcbiAgICAgICAgICAgICAgICBuZXcgU2l6ZSh3b3JsZERhdGEuc2l6ZS53aWR0aCwgd29ybGREYXRhLnNpemUuaGVpZ2h0IC0gZ3JvdW5kTGV2ZWwpLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdEJhY2tncm91bmRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXllckRhdGEgPSBuZXcgUGxheWVyRGF0YShcclxuICAgICAgICAgICAgbmV3IFBvaW50KGNhbnZhc1NpemUud2lkdGggLyAyIC0gMjUsIGdyb3VuZExldmVsIC0gNTApLFxyXG4gICAgICAgICAgICBuZXcgU2l6ZSg1MCwgNTApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnJpY2tzRGF0YSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGp1bXBPcmJzRGF0YSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHNwaWtlc0RhdGEgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICBicmlja3NEYXRhLnB1c2gobmV3IEJyaWNrRGF0YShcclxuICAgICAgICAgICAgICAgIGBicmljay0ke2kgKyAxfWAsXHJcbiAgICAgICAgICAgICAgICBuZXcgUG9pbnQoY2FudmFzU2l6ZS53aWR0aCArIDIwMCArIChpICogNTApLCBncm91bmRMZXZlbCAtIDE1MCksXHJcbiAgICAgICAgICAgICAgICBuZXcgU2l6ZSg1MCwgNTApLFxyXG4gICAgICAgICAgICAgICAgJyM4QjQ1MTMnLFxyXG4gICAgICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgICAgICcjNjU0MzIxJyxcclxuICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBIZWlnaHQgPSBpO1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5taW4oZ3JvdW5kTGV2ZWwgLSA1MCAtIChzdGVwSGVpZ2h0ICogNTApLCBncm91bmRMZXZlbCAtIDUwIC0gNTApO1xyXG4gICAgICAgICAgICBicmlja3NEYXRhLnB1c2gobmV3IEJyaWNrRGF0YShcclxuICAgICAgICAgICAgICAgIGBicmljay0ke2kgKyAxfWAsXHJcbiAgICAgICAgICAgICAgICBuZXcgUG9pbnQoY2FudmFzU2l6ZS53aWR0aCArIDUwMCArIChpICogNTApLCB5KSxcclxuICAgICAgICAgICAgICAgIG5ldyBTaXplKDUwLCA1MCksXHJcbiAgICAgICAgICAgICAgICAnIzhCNDUxMycsXHJcbiAgICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAgICAgJyM2NTQzMjEnLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgYnJpY2tzRGF0YS5wdXNoKG5ldyBCcmlja0RhdGEoXHJcbiAgICAgICAgICAgICAgICBgYnJpY2stJHtpICsgMX1gLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBvaW50KGNhbnZhc1NpemUud2lkdGggKyA4MDAgKyAoaSAqIDUwKSwgZ3JvdW5kTGV2ZWwgLSAxMDApLFxyXG4gICAgICAgICAgICAgICAgbmV3IFNpemUoNTAsIDUwKSxcclxuICAgICAgICAgICAgICAgICcjOEI0NTEzJyxcclxuICAgICAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICAgICAnIzY1NDMyMScsXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwSGVpZ2h0ID0gKDMgLSAxIC0gaSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLm1pbihncm91bmRMZXZlbCAtIDUwIC0gKHN0ZXBIZWlnaHQgKiA1MCksIGdyb3VuZExldmVsIC0gNTAgLSA1MCk7XHJcbiAgICAgICAgICAgIGJyaWNrc0RhdGEucHVzaChuZXcgQnJpY2tEYXRhKFxyXG4gICAgICAgICAgICAgICAgYGJyaWNrLSR7aSArIDF9YCxcclxuICAgICAgICAgICAgICAgIG5ldyBQb2ludChjYW52YXNTaXplLndpZHRoICsgMTEwMCArIChpICogNTApLCB5KSxcclxuICAgICAgICAgICAgICAgIG5ldyBTaXplKDUwLCA1MCksXHJcbiAgICAgICAgICAgICAgICAnIzhCNDUxMycsXHJcbiAgICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAgICAgJyM2NTQzMjEnLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgTGV2ZWwoXHJcbiAgICAgICAgICAgICdEZWZhdWx0IGxldmVsJyxcclxuICAgICAgICAgICAgd29ybGREYXRhLFxyXG4gICAgICAgICAgICBib3VuZGFyaWVzRGF0YSxcclxuICAgICAgICAgICAgYnJpY2tzRGF0YSxcclxuICAgICAgICAgICAganVtcE9yYnNEYXRhLFxyXG4gICAgICAgICAgICBzcGlrZXNEYXRhLFxyXG4gICAgICAgICAgICBwbGF5ZXJEYXRhXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlRW1wdHlMZXZlbChjYW52YXNTaXplKSB7XHJcbiAgICAgICAgY29uc3Qgd29ybGREYXRhID0gbmV3IFdvcmxkRGF0YShuZXcgU2l6ZSgxMjkwLCA4NjApLCA2KTtcclxuXHJcbiAgICAgICAgY29uc3QgZ3JvdW5kTGV2ZWwgPSB3b3JsZERhdGEuc2l6ZS5oZWlnaHQgLSAyMDA7XHJcbiAgICAgICAgY29uc3QgYm91bmRhcnlUaGlja25lc3MgPSAxMDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdEJhY2tncm91bmQgPSBuZXcgQm91bmRhcnlCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYm91bmRhcmllc0RhdGEgPSBuZXcgR2FtZUJvdW5kc0RhdGEoXHJcbiAgICAgICAgICAgIG5ldyBCb3VuZGFyeURhdGEoXHJcbiAgICAgICAgICAgICAgICAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBuZXcgUG9pbnQoMCwgMCksXHJcbiAgICAgICAgICAgICAgICBuZXcgU2l6ZShib3VuZGFyeVRoaWNrbmVzcywgd29ybGREYXRhLnNpemUuaGVpZ2h0KSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRCYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIG5ldyBCb3VuZGFyeURhdGEoXHJcbiAgICAgICAgICAgICAgICAndG9wJyxcclxuICAgICAgICAgICAgICAgIG5ldyBQb2ludCgwLCAwKSxcclxuICAgICAgICAgICAgICAgIG5ldyBTaXplKHdvcmxkRGF0YS5zaXplLndpZHRoLCBib3VuZGFyeVRoaWNrbmVzcyksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0QmFja2dyb3VuZFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBuZXcgQm91bmRhcnlEYXRhKFxyXG4gICAgICAgICAgICAgICAgJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgIG5ldyBQb2ludCh3b3JsZERhdGEuc2l6ZS53aWR0aCAtIGJvdW5kYXJ5VGhpY2tuZXNzLCAwKSxcclxuICAgICAgICAgICAgICAgIG5ldyBTaXplKGJvdW5kYXJ5VGhpY2tuZXNzLCB3b3JsZERhdGEuc2l6ZS5oZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdEJhY2tncm91bmRcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgbmV3IEJvdW5kYXJ5RGF0YShcclxuICAgICAgICAgICAgICAgICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBvaW50KDAsIGdyb3VuZExldmVsKSxcclxuICAgICAgICAgICAgICAgIG5ldyBTaXplKHdvcmxkRGF0YS5zaXplLndpZHRoLCB3b3JsZERhdGEuc2l6ZS5oZWlnaHQgLSBncm91bmRMZXZlbCksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0QmFja2dyb3VuZFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGxheWVyRGF0YSA9IG5ldyBQbGF5ZXJEYXRhKFxyXG4gICAgICAgICAgICBuZXcgUG9pbnQoY2FudmFzU2l6ZS53aWR0aCAvIDIgLSAyNSwgZ3JvdW5kTGV2ZWwgLSA1MCksXHJcbiAgICAgICAgICAgIG5ldyBTaXplKDUwLCA1MClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IExldmVsKFxyXG4gICAgICAgICAgICAnTmV3IGxldmVsJyxcclxuICAgICAgICAgICAgd29ybGREYXRhLFxyXG4gICAgICAgICAgICBib3VuZGFyaWVzRGF0YSxcclxuICAgICAgICAgICAgW10sXHJcbiAgICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgICBbXSxcclxuICAgICAgICAgICAgcGxheWVyRGF0YVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJEYXRhIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGNvb3JkcyxcclxuICAgICAgICBzaXplXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bpa2VEYXRhIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCBjb29yZHMsIHNpemUsIGJhY2tncm91bmRDb2xvciwgc3Ryb2tlV2lkdGgsIHN0cm9rZUNvbG9yLCBpc0FjdGl2ZSwgaXNSZXZlcnNlZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlV2lkdGggPSBzdHJva2VXaWR0aDtcclxuICAgICAgICB0aGlzLnN0cm9rZUNvbG9yID0gc3Ryb2tlQ29sb3I7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGlzQWN0aXZlO1xyXG4gICAgICAgIHRoaXMuaXNSZXZlcnNlZCA9IGlzUmV2ZXJzZWQ7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JsZERhdGEge1xyXG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgd29ybGRTcGVlZCkge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy53b3JsZFNwZWVkID0gd29ybGRTcGVlZDtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHopIHtcclxuICAgICAgICB0aGlzLnggPSBOdW1iZXIoeCkgfHwgMDtcclxuICAgICAgICB0aGlzLnkgPSBOdW1iZXIoeSkgfHwgMDtcclxuICAgICAgICB0aGlzLnogPSBOdW1iZXIoeikgfHwgMDtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpemUge1xyXG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmluZ1Jlc291cmNlcyB7XHJcbiAgICBzdGF0aWMgZ2V0IEFQUF9USVRMRSgpIHsgcmV0dXJuICdHZW9tZXRyeUNhdCc7IH1cclxuICAgIHN0YXRpYyBnZXQgTEVWRUxfQ0FUQUxPRygpIHsgcmV0dXJuICdMZXZlbCBjYXRhbG9nJzsgfVxyXG4gICAgc3RhdGljIGdldCBERVNJR05FUl9NT0RFKCkgeyByZXR1cm4gJ0Rlc2lnbmVyIG1vZGUnOyB9XHJcbiAgICBzdGF0aWMgZ2V0IFBVVF9BU0lERV9BTExfRE9VQlRTKCkgeyByZXR1cm4gJ1B1dCBhc2lkZSBhbGwgZG91YnRzIHRvIHZlcmlmeSB0aGlzIGxldmVsISc7IH1cclxuICAgIHN0YXRpYyBnZXQgUExBWSgpIHsgcmV0dXJuICdQbGF5ISc7IH1cclxuICAgIHN0YXRpYyBnZXQgTkVYVCgpIHsgcmV0dXJuICdOZXh0JzsgfVxyXG4gICAgc3RhdGljIGdldCBQUkVWKCkgeyByZXR1cm4gJ1ByZXYnOyB9XHJcbiAgICBzdGF0aWMgZ2V0IENSQVNIRUQoKSB7IHJldHVybiAnQ3Jhc2hlZCEnOyB9XHJcbiAgICBzdGF0aWMgZ2V0IExFVkVMX1BBU1NFRCgpIHsgcmV0dXJuICdMZXZlbCBwYXNzZWQhJzsgfVxyXG4gICAgc3RhdGljIGdldCBCQUNLKCkgeyByZXR1cm4gJ0JhY2snOyB9XHJcbiAgICBzdGF0aWMgZ2V0IEdBTUVfU0laRSgpIHsgcmV0dXJuICdHYW1lIHNpemUnOyB9XHJcbiAgICBzdGF0aWMgZ2V0IFdJRFRIKCkgeyByZXR1cm4gJ1dpZHRoJzsgfVxyXG4gICAgc3RhdGljIGdldCBIRUlHSFQoKSB7IHJldHVybiAnSGVpZ2h0JzsgfVxyXG4gICAgc3RhdGljIGdldCBNSU4oKSB7IHJldHVybiAnbWluJzsgfVxyXG4gICAgc3RhdGljIGdldCBNT1VTRSgpIHsgcmV0dXJuICdNb3VzZSc7IH1cclxuICAgIHN0YXRpYyBnZXQgV09STERfT0ZGU0VUKCkgeyByZXR1cm4gJ1dvcmxkIG9mZnNldCc7IH1cclxuICAgIHN0YXRpYyBnZXQgQlJJQ0soKSB7IHJldHVybiAnQnJpY2snOyB9XHJcbiAgICBzdGF0aWMgZ2V0IElEKCkgeyByZXR1cm4gJ0lEJzsgfVxyXG4gICAgc3RhdGljIGdldCBQT1NJVElPTigpIHsgcmV0dXJuICdQb3NpdGlvbic7IH1cclxuICAgIHN0YXRpYyBnZXQgWCgpIHsgcmV0dXJuICdYJzsgfVxyXG4gICAgc3RhdGljIGdldCBZKCkgeyByZXR1cm4gJ1knOyB9XHJcbiAgICBzdGF0aWMgZ2V0IFNJWkUoKSB7IHJldHVybiAnU2l6ZSc7IH1cclxuICAgIHN0YXRpYyBnZXQgQkFDS0dST1VORCgpIHsgcmV0dXJuICdCYWNrZ3JvdW5kJzsgfVxyXG4gICAgc3RhdGljIGdldCBTVFJPS0UoKSB7IHJldHVybiAnU3Ryb2tlJzsgfVxyXG4gICAgc3RhdGljIGdldCBSRVZFUlNFRCgpIHsgcmV0dXJuICdSZXZlcnNlZCc7IH1cclxuICAgIHN0YXRpYyBnZXQgSlVNUF9PUkIoKSB7IHJldHVybiAnSnVtcCBvcmInOyB9XHJcbiAgICBzdGF0aWMgZ2V0IFNQSUtFKCkgeyByZXR1cm4gJ1NwaWtlJzsgfVxyXG4gICAgc3RhdGljIGdldCBBRERfQlJJQ0soKSB7IHJldHVybiAnQWRkIGJyaWNrJzsgfVxyXG4gICAgc3RhdGljIGdldCBBRERfSlVNUF9PUkIoKSB7IHJldHVybiAnQWRkIGp1bXAgb3JiJzsgfVxyXG4gICAgc3RhdGljIGdldCBBRERfU1BJS0UoKSB7IHJldHVybiAnQWRkIHNwaWtlJzsgfVxyXG4gICAgc3RhdGljIGdldCBSRVNFVCgpIHsgcmV0dXJuICdSZXNldCc7IH1cclxuICAgIHN0YXRpYyBnZXQgVEVTVF9MRVZFTCgpIHsgcmV0dXJuICdUZXN0IGxldmVsJzsgfVxyXG4gICAgc3RhdGljIGdldCBVUExPQURfTEVWRUwoKSB7IHJldHVybiAnVXBsb2FkIGxldmVsJzsgfVxyXG4gICAgc3RhdGljIGdldCBET1dOTE9BRF9MRVZFTCgpIHsgcmV0dXJuICdEb3dubG9hZCBsZXZlbCc7IH1cclxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IEFwcCBmcm9tICdAL2FwcC5qcyc7XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5zdGFydCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==