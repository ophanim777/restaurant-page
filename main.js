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

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact */ \"./src/pages/contact.js\");\n\r\n\r\n\r\nfunction clearContent() {\r\n  document.getElementById('content').textContent = '';\r\n}\r\ndocument.getElementById('home-btn').addEventListener('click', () => {\r\n  clearContent();\r\n  (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n\r\ndocument.getElementById('menu-btn').addEventListener('click', () => {\r\n  clearContent();\r\n  (0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n\r\ndocument.getElementById('contact-btn').addEventListener('click', () => {\r\n  clearContent();\r\n  (0,_pages_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\r\n(0,_pages_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/pages/contact.js"
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n  const content = document.getElementById('content');\r\n\r\n  const div = document.createElement('div');\r\n  const title = document.createElement('h1');\r\n  const info = document.createElement('p');\r\n\r\n  title.textContent = 'Contact';\r\n  info.textContent = 'Email: ricky@restaurant.com';\r\n\r\n  div.appendChild(title);\r\n  div.appendChild(info);\r\n  content.appendChild(div);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/contact.js?\n}");

/***/ },

/***/ "./src/pages/home.js"
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.textContent = \"Ricky Restaurant\";\r\n\r\n  const text = document.createElement(\"p\");\r\n  text.textContent = \"Best Asian food in town.\";\r\n\r\n  content.appendChild(title);\r\n  content.appendChild(text);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?\n}");

/***/ },

/***/ "./src/pages/menu.js"
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n  const content = document.getElementById('content');\r\n  const div = document.createElement('div');\r\n  const title = document.createElement('h1');\r\n  title.textContent = 'Menu';\r\n    const items = ['Fried Rice', 'Stinky Tofu', 'Meatballs'];\r\n  items.forEach(item => {\r\n    const p = document.createElement('p');\r\n    p.textContent = item;\r\n    div.appendChild(p);\r\n  });\r\n  content.appendChild(div);\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;