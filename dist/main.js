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
			___CSS_LOADER_EXPORT___.push([module.id, `html, body{
    display: flex;
    height: 100%;
    width: 100%;
    margin: 0;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: antiquewhite;
}

main{
  margin-top: auto;
}

#newTask{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    background-color: rgb(249, 201, 114);
    border-radius: 10px;
    font-size: 100px;
    
}

dialog{
    height: 200px;
    width: 300px;
    background-color: aqua;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid rgb(160, 160, 160);
    border-radius: 5px;
    
  }

  #textput{
    height: 30px;
    width: 80%;
    font-size: 15px;
  }
  
  #dateput{
    margin-top: 20px;
  }
  
  #closeDial{
    background-color: yellow;
    margin-top: 20px;
    height: 30px;
    width: 90px;
    border-radius: 5px;
  }

  #container{
    background-color: bisque;
    height: 200px;
    width: 300px;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 8px 5px ;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#complete{
    background-color: rgb(83, 189, 83);
    border-radius: 5px;
    height: 30px;
    width: 100px;
}

#delete{
    background-color: rgb(238, 97, 97);
    border-radius: 5px;
    height: 30px;
    width: 100px;
}

#tasks{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  height: 100%;
  width: 90%;
  overflow: auto;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,oCAAoC;IACpC,mBAAmB;IACnB,gBAAgB;;AAEpB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,oCAAoC;IACpC,kBAAkB;;EAEpB;;EAEA;IACE,YAAY;IACZ,UAAU;IACV,eAAe;EACjB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,wBAAwB;IACxB,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,kBAAkB;EACpB;;EAEA;IACE,wBAAwB;IACxB,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,cAAc;AAChB","sourcesContent":["html, body{\r\n    display: flex;\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    background-color: antiquewhite;\r\n}\r\n\r\nmain{\r\n  margin-top: auto;\r\n}\r\n\r\n#newTask{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100px;\r\n    width: 100px;\r\n    background-color: rgb(249, 201, 114);\r\n    border-radius: 10px;\r\n    font-size: 100px;\r\n    \r\n}\r\n\r\ndialog{\r\n    height: 200px;\r\n    width: 300px;\r\n    background-color: aqua;\r\n    color: black;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border: 2px solid rgb(160, 160, 160);\r\n    border-radius: 5px;\r\n    \r\n  }\r\n\r\n  #textput{\r\n    height: 30px;\r\n    width: 80%;\r\n    font-size: 15px;\r\n  }\r\n  \r\n  #dateput{\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  #closeDial{\r\n    background-color: yellow;\r\n    margin-top: 20px;\r\n    height: 30px;\r\n    width: 90px;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  #container{\r\n    background-color: bisque;\r\n    height: 200px;\r\n    width: 300px;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    box-shadow: 8px 5px ;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#complete{\r\n    background-color: rgb(83, 189, 83);\r\n    border-radius: 5px;\r\n    height: 30px;\r\n    width: 100px;\r\n}\r\n\r\n#delete{\r\n    background-color: rgb(238, 97, 97);\r\n    border-radius: 5px;\r\n    height: 30px;\r\n    width: 100px;\r\n}\r\n\r\n#tasks{\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-auto-rows: 1fr;\r\n  height: 100%;\r\n  width: 90%;\r\n  overflow: auto;\r\n}"],"sourceRoot":""}]);
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

		/***/ "./src/dialog.js":
		/*!***********************!*\
  !*** ./src/dialog.js ***!
  \***********************/
		/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

			__webpack_require__.r(__webpack_exports__);
			/* harmony export */ __webpack_require__.d(__webpack_exports__, {
				/* harmony export */   dialogFunc: () => (/* binding */ dialogFunc)
				/* harmony export */ });
			/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
			/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");




			const button = document.querySelector("#newTask");
			const main = document.querySelector("main");

			function dialogFunc() {
				button.addEventListener("click", () =>{
					let dial = document.createElement("dialog");
					main.appendChild(dial);

					let h3 = document.createElement("h3");
					h3.textContent = "New task";
					dial.appendChild(h3);

					let textput = document.createElement("input");
					textput.id = "textput";
					dial.appendChild(textput);

					let dateput = document.createElement("input");
					dateput.id = "dateput";
					dateput.type = "date";
					dial.appendChild(dateput);

					let btn = document.createElement("button");
					btn.id = "closeDial";
					btn.textContent = "Add";
					dial.appendChild(btn);

					dial.showModal();

					btn.addEventListener("click", ()=>{
						(0,_newTask__WEBPACK_IMPORTED_MODULE_1__.taskCreated)();
            
					});
				});
			}



			/***/ }),

		/***/ "./src/newTask.js":
		/*!************************!*\
  !*** ./src/newTask.js ***!
  \************************/
		/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

			__webpack_require__.r(__webpack_exports__);
			/* harmony export */ __webpack_require__.d(__webpack_exports__, {
				/* harmony export */   showTasks: () => (/* binding */ showTasks),
				/* harmony export */   taskCreated: () => (/* binding */ taskCreated)
				/* harmony export */ });
			/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


			function newTaskCreator(newTask, date) {
				return {
					newTask: newTask,
					date: date,
				};
			}

			function taskCreated() {
				let texInput = document.querySelector("#textput");
				let dateput = document.querySelector("#dateput");
				let tasks = document.querySelector("#tasks");
				let main = document.querySelector("main");
				let dial = document.querySelector("dialog");

				if (texInput.value == "") {
					alert("You can't have an empty event!!");
					main.removeChild(dial);
				} else if (dateput.value == "") {
					alert("Nothing is timeless");
					main.removeChild(dial);
				} else {
					let cont = document.createElement("div");
					cont.id = "container";
					tasks.appendChild(cont);

					let taskFact = newTaskCreator(texInput.value, dateput.value);
					let h1 = document.createElement("h1");
					h1.textContent = taskFact.newTask;
					cont.appendChild(h1);

					let h2 = document.createElement("h2");
					const parts = taskFact.date.split("-");
					if (parts.length === 3) {
						const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
						h2.textContent = formattedDate;
					} else {
						h2.textContent = "Fecha inválida";
					}

					cont.appendChild(h2);

					let butClass = document.createElement("div");
					butClass.id = "but-class";
					cont.appendChild(butClass);

					let compl = document.createElement("button");
					compl.id = "complete";
					compl.textContent = "To do";
					butClass.appendChild(compl);

					let dele = document.createElement("button");
					dele.id = "delete";
					dele.textContent = "Delete";
					butClass.appendChild(dele);

					dial.close();
					main.removeChild(dial);


					const tasksArray = JSON.parse(sessionStorage.getItem("tasks")) || [];
					tasksArray.push(taskFact);
					sessionStorage.setItem("tasks", JSON.stringify(tasksArray));

					completeFunc(compl);
					deleteFunc(dele, cont);
				}
			}

			function completeFunc(completeBtn) {
				completeBtn.addEventListener("click", () => {
					if (completeBtn.textContent == "To do") {
						completeBtn.textContent = "Completed";
						completeBtn.style.backgroundColor = "green";
					} else {
						completeBtn.textContent = "To do";
						completeBtn.style.backgroundColor = "rgb(83, 189, 83)";
					}
				});
			}

			function deleteFunc(deleteBtn, container) {
				deleteBtn.addEventListener("click", () => {
					const tasks = document.querySelector("#tasks");
					tasks.removeChild(container);

					const tasksArray = JSON.parse(sessionStorage.getItem("tasks")) || [];
					const taskIndex = tasksArray.findIndex((task) => task.newTask === container.querySelector("h1").textContent);
					if (taskIndex !== -1) {
						tasksArray.splice(taskIndex, 1);
						sessionStorage.setItem("tasks", JSON.stringify(tasksArray));
					}
				});
			}

			function showTasks() {
				const tasksArray = JSON.parse(sessionStorage.getItem("tasks")) || [];
				const tasks = document.querySelector("#tasks");

				tasksArray.forEach((taskFact) => {
					let cont = document.createElement("div");
					cont.id = "container";
					tasks.appendChild(cont);

					let h1 = document.createElement("h1");
					h1.textContent = taskFact.newTask;
					cont.appendChild(h1);

					let h2 = document.createElement("h2");
					const parts = taskFact.date.split("-");
					if (parts.length === 3) {
						const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
						h2.textContent = formattedDate;
					} else {
						h2.textContent = "Fecha inválida";
					}

					cont.appendChild(h2);

					let butClass = document.createElement("div");
					butClass.id = "but-class";
					cont.appendChild(butClass);

					let compl = document.createElement("button");
					compl.id = "complete";
					compl.textContent = "To do";
					butClass.appendChild(compl);

					let dele = document.createElement("button");
					dele.id = "delete";
					dele.textContent = "Delete";
					butClass.appendChild(dele);

					completeFunc(compl);
					deleteFunc(dele, cont);
				});
			}

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
			/******/ 				() => (module["default"]) :
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
		/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
		/******/ 	})();
	/******/ 	
	/******/ 	/* webpack/runtime/make namespace object */
	/******/ 	(() => {
		/******/ 		// define __esModule on exports
		/******/ 		__webpack_require__.r = (exports) => {
			/******/ 			if(typeof Symbol !== "undefined" && Symbol.toStringTag) {
				/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
				/******/ 			}
			/******/ 			Object.defineProperty(exports, "__esModule", { value: true });
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
	// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
	(() => {
		/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
		__webpack_require__.r(__webpack_exports__);
		/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog */ "./src/dialog.js");
		/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");




		_dialog__WEBPACK_IMPORTED_MODULE_0__.dialogFunc()
		;(0,_newTask__WEBPACK_IMPORTED_MODULE_1__.showTasks)();

	})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFNBQVMsR0FBRyxTQUFTLEdBQUcsU0FBUztBQUNoRTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7OztVQ3pJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FpQztBQUNLO0FBQ3RDO0FBQ0E7QUFDQSwrQ0FBZTtBQUNmLG9EQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCwgYm9keXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcclxufVxyXG5cclxubWFpbntcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4jbmV3VGFza3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMjAxLCAxMTQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBcclxufVxyXG5cclxuZGlhbG9ne1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTYwLCAxNjAsIDE2MCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gICN0ZXh0cHV0e1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgI2RhdGVwdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAjY2xvc2VEaWFse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiA4cHggNXB4IDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2NvbXBsZXRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgzLCAxODksIDgzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuI2RlbGV0ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDk3LCA5Nyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbiN0YXNrc3tcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGtCQUFrQjs7RUFFcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1YsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWlue1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI25ld1Rhc2t7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDIwMSwgMTE0KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmRpYWxvZ3tcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNjAsIDE2MCwgMTYwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN0ZXh0cHV0e1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI2RhdGVwdXR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNjbG9zZURpYWx7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB3aWR0aDogOTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRhaW5lcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiA4cHggNXB4IDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbXBsZXRle1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODMsIDE4OSwgODMpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVsZXRle1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCA5NywgOTcpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3N7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgeyB0YXNrQ3JlYXRlZCB9IGZyb20gXCIuL25ld1Rhc2tcIjtcclxuXHJcblxyXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Rhc2tcIik7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpYWxvZ0Z1bmMoKSB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xyXG4gICAgICAgIGxldCBkaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKVxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZGlhbClcclxuXHJcbiAgICAgICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXHJcbiAgICAgICAgaDMudGV4dENvbnRlbnQgPSBcIk5ldyB0YXNrXCJcclxuICAgICAgICBkaWFsLmFwcGVuZENoaWxkKGgzKVxyXG5cclxuICAgICAgICBsZXQgdGV4dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgICAgIHRleHRwdXQuaWQgPSBcInRleHRwdXRcIlxyXG4gICAgICAgIGRpYWwuYXBwZW5kQ2hpbGQodGV4dHB1dClcclxuXHJcbiAgICAgICAgbGV0IGRhdGVwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICBkYXRlcHV0LmlkID0gXCJkYXRlcHV0XCJcclxuICAgICAgICBkYXRlcHV0LnR5cGUgPSBcImRhdGVcIlxyXG4gICAgICAgIGRpYWwuYXBwZW5kQ2hpbGQoZGF0ZXB1dClcclxuXHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICBidG4uaWQgPSBcImNsb3NlRGlhbFwiXHJcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJBZGRcIlxyXG4gICAgICAgIGRpYWwuYXBwZW5kQ2hpbGQoYnRuKVxyXG5cclxuICAgICAgICBkaWFsLnNob3dNb2RhbCgpXHJcblxyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICAgICAgdGFza0NyZWF0ZWQoKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuIiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBuZXdUYXNrQ3JlYXRvcihuZXdUYXNrLCBkYXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5ld1Rhc2s6IG5ld1Rhc2ssXHJcbiAgICBkYXRlOiBkYXRlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0YXNrQ3JlYXRlZCgpIHtcclxuICBsZXQgdGV4SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RleHRwdXRcIik7XHJcbiAgbGV0IGRhdGVwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVwdXRcIik7XHJcbiAgbGV0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrc1wiKTtcclxuICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGxldCBkaWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcclxuXHJcbiAgaWYgKHRleElucHV0LnZhbHVlID09IFwiXCIpIHtcclxuICAgIGFsZXJ0KFwiWW91IGNhbid0IGhhdmUgYW4gZW1wdHkgZXZlbnQhIVwiKTtcclxuICAgIG1haW4ucmVtb3ZlQ2hpbGQoZGlhbCk7XHJcbiAgfSBlbHNlIGlmIChkYXRlcHV0LnZhbHVlID09IFwiXCIpIHtcclxuICAgIGFsZXJ0KFwiTm90aGluZyBpcyB0aW1lbGVzc1wiKTtcclxuICAgIG1haW4ucmVtb3ZlQ2hpbGQoZGlhbCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxldCBjb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnQuaWQgPSBcImNvbnRhaW5lclwiO1xyXG4gICAgdGFza3MuYXBwZW5kQ2hpbGQoY29udCk7XHJcblxyXG4gICAgbGV0IHRhc2tGYWN0ID0gbmV3VGFza0NyZWF0b3IodGV4SW5wdXQudmFsdWUsIGRhdGVwdXQudmFsdWUpO1xyXG4gICAgbGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaDEudGV4dENvbnRlbnQgPSB0YXNrRmFjdC5uZXdUYXNrO1xyXG4gICAgY29udC5hcHBlbmRDaGlsZChoMSk7XHJcblxyXG4gICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY29uc3QgcGFydHMgPSB0YXNrRmFjdC5kYXRlLnNwbGl0KFwiLVwiKTtcclxuICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke3BhcnRzWzJdfS8ke3BhcnRzWzFdfS8ke3BhcnRzWzBdfWA7XHJcbiAgICAgIGgyLnRleHRDb250ZW50ID0gZm9ybWF0dGVkRGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGgyLnRleHRDb250ZW50ID0gXCJGZWNoYSBpbnbDoWxpZGFcIjtcclxuICAgIH1cclxuXHJcbiAgICBjb250LmFwcGVuZENoaWxkKGgyKTtcclxuXHJcbiAgICBsZXQgYnV0Q2xhc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYnV0Q2xhc3MuaWQgPSBcImJ1dC1jbGFzc1wiO1xyXG4gICAgY29udC5hcHBlbmRDaGlsZChidXRDbGFzcyk7XHJcblxyXG4gICAgbGV0IGNvbXBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNvbXBsLmlkID0gXCJjb21wbGV0ZVwiO1xyXG4gICAgY29tcGwudGV4dENvbnRlbnQgPSBcIlRvIGRvXCI7XHJcbiAgICBidXRDbGFzcy5hcHBlbmRDaGlsZChjb21wbCk7XHJcblxyXG4gICAgbGV0IGRlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZGVsZS5pZCA9IFwiZGVsZXRlXCI7XHJcbiAgICBkZWxlLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcclxuICAgIGJ1dENsYXNzLmFwcGVuZENoaWxkKGRlbGUpO1xyXG5cclxuICAgIGRpYWwuY2xvc2UoKTtcclxuICAgIG1haW4ucmVtb3ZlQ2hpbGQoZGlhbCk7XHJcblxyXG5cclxuICAgIGNvbnN0IHRhc2tzQXJyYXkgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XHJcbiAgICB0YXNrc0FycmF5LnB1c2godGFza0ZhY3QpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzQXJyYXkpKTtcclxuXHJcbiAgICBjb21wbGV0ZUZ1bmMoY29tcGwpO1xyXG4gICAgZGVsZXRlRnVuYyhkZWxlLCBjb250KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBsZXRlRnVuYyhjb21wbGV0ZUJ0bikge1xyXG4gIGNvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAoY29tcGxldGVCdG4udGV4dENvbnRlbnQgPT0gXCJUbyBkb1wiKSB7XHJcbiAgICAgIGNvbXBsZXRlQnRuLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZWRcIjtcclxuICAgICAgY29tcGxldGVCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29tcGxldGVCdG4udGV4dENvbnRlbnQgPSBcIlRvIGRvXCI7XHJcbiAgICAgIGNvbXBsZXRlQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDgzLCAxODksIDgzKVwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVGdW5jKGRlbGV0ZUJ0biwgY29udGFpbmVyKSB7XHJcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3NcIik7XHJcbiAgICB0YXNrcy5yZW1vdmVDaGlsZChjb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tzQXJyYXkgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XHJcbiAgICBjb25zdCB0YXNrSW5kZXggPSB0YXNrc0FycmF5LmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5uZXdUYXNrID09PSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcImgxXCIpLnRleHRDb250ZW50KTtcclxuICAgIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHRhc2tzQXJyYXkuc3BsaWNlKHRhc2tJbmRleCwgMSk7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrc0FycmF5KSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93VGFza3MoKSB7XHJcbiAgY29uc3QgdGFza3NBcnJheSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcclxuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3NcIik7XHJcblxyXG4gIHRhc2tzQXJyYXkuZm9yRWFjaCgodGFza0ZhY3QpID0+IHtcclxuICAgIGxldCBjb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnQuaWQgPSBcImNvbnRhaW5lclwiO1xyXG4gICAgdGFza3MuYXBwZW5kQ2hpbGQoY29udCk7XHJcblxyXG4gICAgbGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaDEudGV4dENvbnRlbnQgPSB0YXNrRmFjdC5uZXdUYXNrO1xyXG4gICAgY29udC5hcHBlbmRDaGlsZChoMSk7XHJcblxyXG4gICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY29uc3QgcGFydHMgPSB0YXNrRmFjdC5kYXRlLnNwbGl0KFwiLVwiKTtcclxuICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke3BhcnRzWzJdfS8ke3BhcnRzWzFdfS8ke3BhcnRzWzBdfWA7XHJcbiAgICAgIGgyLnRleHRDb250ZW50ID0gZm9ybWF0dGVkRGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGgyLnRleHRDb250ZW50ID0gXCJGZWNoYSBpbnbDoWxpZGFcIjtcclxuICAgIH1cclxuXHJcbiAgICBjb250LmFwcGVuZENoaWxkKGgyKTtcclxuXHJcbiAgICBsZXQgYnV0Q2xhc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYnV0Q2xhc3MuaWQgPSBcImJ1dC1jbGFzc1wiO1xyXG4gICAgY29udC5hcHBlbmRDaGlsZChidXRDbGFzcyk7XHJcblxyXG4gICAgbGV0IGNvbXBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNvbXBsLmlkID0gXCJjb21wbGV0ZVwiO1xyXG4gICAgY29tcGwudGV4dENvbnRlbnQgPSBcIlRvIGRvXCI7XHJcbiAgICBidXRDbGFzcy5hcHBlbmRDaGlsZChjb21wbCk7XHJcblxyXG4gICAgbGV0IGRlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZGVsZS5pZCA9IFwiZGVsZXRlXCI7XHJcbiAgICBkZWxlLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcclxuICAgIGJ1dENsYXNzLmFwcGVuZENoaWxkKGRlbGUpO1xyXG5cclxuICAgIGNvbXBsZXRlRnVuYyhjb21wbCk7XHJcbiAgICBkZWxldGVGdW5jKGRlbGUsIGNvbnQpO1xyXG4gIH0pO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgZGlhbCBmcm9tIFwiLi9kaWFsb2dcIjtcclxuaW1wb3J0IHsgc2hvd1Rhc2tzIH0gZnJvbSBcIi4vbmV3VGFza1wiO1xyXG5cclxuXHJcbmRpYWwuZGlhbG9nRnVuYygpXHJcbnNob3dUYXNrcygpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==