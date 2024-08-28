/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://xpage/./src/styles/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _image_prof_img_prof_img_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image/prof-img/prof-img.png */ \"./src/image/prof-img/prof-img.png\");\n/* harmony import */ var _image_event_3_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image/event/3.webp */ \"./src/image/event/3.webp\");\n/* harmony import */ var _image_event_2_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image/event/2.webp */ \"./src/image/event/2.webp\");\n/* harmony import */ var _image_event_1_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image/event/1.webp */ \"./src/image/event/1.webp\");\n/* harmony import */ var _image_event_team_section_ball_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image/event/team-section/ball.png */ \"./src/image/event/team-section/ball.png\");\n/* harmony import */ var _image_event_team_section_search_team_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image/event/team-section/search-team.png */ \"./src/image/event/team-section/search-team.png\");\n/* harmony import */ var _image_event_team_section_tour_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image/event/team-section/tour.png */ \"./src/image/event/team-section/tour.png\");\n/* harmony import */ var _image_learn_learn_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image/learn/learn.png */ \"./src/image/learn/learn.png\");\n/* harmony import */ var _image_info_block_info_block_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./image/info-block/info-block.png */ \"./src/image/info-block/info-block.png\");\n/* harmony import */ var _image_market_appStore_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./image/market/appStore.svg */ \"./src/image/market/appStore.svg\");\n/* harmony import */ var _image_market_googlePlay_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./image/market/googlePlay.svg */ \"./src/image/market/googlePlay.svg\");\n/* harmony import */ var _image_code_code_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./image/code/code.svg */ \"./src/image/code/code.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.querySelector('.bt__prof-img').src=_image_prof_img_prof_img_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\n\r\ndocument.querySelector('.main-banner__img-event').src=_image_event_3_webp__WEBPACK_IMPORTED_MODULE_2__\r\ndocument.querySelector('.event__img').src=_image_event_team_section_ball_png__WEBPACK_IMPORTED_MODULE_5__;\r\ndocument.querySelector('.event__img-search-com').src=_image_event_team_section_search_team_png__WEBPACK_IMPORTED_MODULE_6__\r\ndocument.querySelector('.event__img-tour').src=_image_event_team_section_tour_png__WEBPACK_IMPORTED_MODULE_7__\r\ndocument.querySelector('.main-learn__img').src=_image_learn_learn_png__WEBPACK_IMPORTED_MODULE_8__\r\ndocument.querySelector('.info-block__img').src=_image_info_block_info_block_png__WEBPACK_IMPORTED_MODULE_9__\r\n\r\ndocument.querySelector('.app-links__app-store').src=_image_market_appStore_svg__WEBPACK_IMPORTED_MODULE_10__\r\ndocument.querySelector('.app-links__google-store').src=_image_market_googlePlay_svg__WEBPACK_IMPORTED_MODULE_11__\r\ndocument.querySelector('.footer__code-im').src=_image_code_code_svg__WEBPACK_IMPORTED_MODULE_12__\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n  \r\n    const navItems = document.querySelectorAll('.main-banner__nav-item');\r\n    const eventImage = document.getElementById('eventImage');\r\n    const eventText = document.getElementById('eventText');\r\n  \r\n    const images = {\r\n      \"src/image/event/3.webp\": _image_event_3_webp__WEBPACK_IMPORTED_MODULE_2__,\r\n      \"src/image/event/1.webp\": _image_event_1_webp__WEBPACK_IMPORTED_MODULE_4__,\r\n      \"src/image/event/2.webp\": _image_event_2_webp__WEBPACK_IMPORTED_MODULE_3__,\r\n    };\r\n  \r\n    navItems.forEach(item => {\r\n      item.addEventListener('mouseenter', function() {\r\n        const newImage = images[item.getAttribute('data-img')];\r\n        const newText = item.getAttribute('data-text');\r\n        \r\n        eventImage.src = newImage;\r\n        eventText.textContent = newText;\r\n      });\r\n  \r\n    });\r\n  });\n\n//# sourceURL=webpack://xpage/./src/index.js?");

/***/ }),

/***/ "./src/image/code/code.svg":
/*!*********************************!*\
  !*** ./src/image/code/code.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ef22d5491973021a47b.svg\";\n\n//# sourceURL=webpack://xpage/./src/image/code/code.svg?");

/***/ }),

/***/ "./src/image/event/1.webp":
/*!********************************!*\
  !*** ./src/image/event/1.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d73f35d4181afb8b3a23.webp\";\n\n//# sourceURL=webpack://xpage/./src/image/event/1.webp?");

/***/ }),

/***/ "./src/image/event/2.webp":
/*!********************************!*\
  !*** ./src/image/event/2.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f786e23dbaa0b504ab5.webp\";\n\n//# sourceURL=webpack://xpage/./src/image/event/2.webp?");

/***/ }),

/***/ "./src/image/event/3.webp":
/*!********************************!*\
  !*** ./src/image/event/3.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"17901a4f8251fecad074.webp\";\n\n//# sourceURL=webpack://xpage/./src/image/event/3.webp?");

/***/ }),

/***/ "./src/image/event/team-section/ball.png":
/*!***********************************************!*\
  !*** ./src/image/event/team-section/ball.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"51659663c6d8630c0292.png\";\n\n//# sourceURL=webpack://xpage/./src/image/event/team-section/ball.png?");

/***/ }),

/***/ "./src/image/event/team-section/search-team.png":
/*!******************************************************!*\
  !*** ./src/image/event/team-section/search-team.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9d10d59e89ccadecaf13.png\";\n\n//# sourceURL=webpack://xpage/./src/image/event/team-section/search-team.png?");

/***/ }),

/***/ "./src/image/event/team-section/tour.png":
/*!***********************************************!*\
  !*** ./src/image/event/team-section/tour.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8abf11b123f4b0da98f7.png\";\n\n//# sourceURL=webpack://xpage/./src/image/event/team-section/tour.png?");

/***/ }),

/***/ "./src/image/info-block/info-block.png":
/*!*********************************************!*\
  !*** ./src/image/info-block/info-block.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dbd333909ebf90c082f8.png\";\n\n//# sourceURL=webpack://xpage/./src/image/info-block/info-block.png?");

/***/ }),

/***/ "./src/image/learn/learn.png":
/*!***********************************!*\
  !*** ./src/image/learn/learn.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5ad087262a6b72c7f8b3.png\";\n\n//# sourceURL=webpack://xpage/./src/image/learn/learn.png?");

/***/ }),

/***/ "./src/image/market/appStore.svg":
/*!***************************************!*\
  !*** ./src/image/market/appStore.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f35deb89505b24ff8a0f.svg\";\n\n//# sourceURL=webpack://xpage/./src/image/market/appStore.svg?");

/***/ }),

/***/ "./src/image/market/googlePlay.svg":
/*!*****************************************!*\
  !*** ./src/image/market/googlePlay.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"11b574c30d8ad3397264.svg\";\n\n//# sourceURL=webpack://xpage/./src/image/market/googlePlay.svg?");

/***/ }),

/***/ "./src/image/prof-img/prof-img.png":
/*!*****************************************!*\
  !*** ./src/image/prof-img/prof-img.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"510d0b35f181b8f7b61b.png\";\n\n//# sourceURL=webpack://xpage/./src/image/prof-img/prof-img.png?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;