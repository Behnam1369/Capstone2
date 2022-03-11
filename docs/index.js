/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  font-family: sans-serif, arial, helvetica;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n}\r\n\r\n.list-item-container {\r\n  width: 98%;\r\n  height: auto;\r\n  margin: auto;\r\n}\r\n\r\n.display-list {\r\n  margin-top: 50px;\r\n  width: 100%;\r\n  display: grid;\r\n  grid-gap: 15px;\r\n  grid-template: auto / repeat(auto-fit, minmax(300px, 1fr));\r\n}\r\n\r\n.item {\r\n  width: 100%;\r\n  border-radius: 8px;\r\n  background: rgb(37 37 37);\r\n  padding: 13px;\r\n  overflow: hidden;\r\n}\r\n\r\n.item img {\r\n  width: 100%;\r\n  height: 300px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.item .flex-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: 10px;\r\n}\r\n\r\n.item .title {\r\n  color: white;\r\n  font-size: 18px;\r\n}\r\n\r\n.item .item-data {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.item .comment,\r\n.reserve {\r\n  padding: 10px;\r\n  background-color: #404041;\r\n  color: white;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  margin-top: 15px;\r\n}\r\n\r\n.icon {\r\n  cursor: pointer;\r\n}\r\n\r\n.likes-div {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 5px;\r\n  align-items: center;\r\n  align-content: center;\r\n  color: white;\r\n}\r\n\r\n.active {\r\n  color: rgb(238 25 25) !important;\r\n}\r\n\r\n/* Mobile version */\r\n@media only screen and (max-width: 600px) {\r\n  /* Stylize head section */\r\n  main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 25px;\r\n    align-items: center;\r\n    height: 325px;\r\n    background-image: url(\"https://matchthemes.com/demowp/caverta/wp-content/uploads/slider-3.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding-top: 15px;\r\n  }\r\n\r\n  #header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 25px;\r\n  }\r\n\r\n  /* Stylize menu */\r\n  .logo-container {\r\n    background-color: rgb(233 218 218 / 6.8%);\r\n  }\r\n\r\n  .menu {\r\n    display: flex;\r\n    gap: 15px;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .menu-items {\r\n    text-decoration: none;\r\n    display: block;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .menu-items:hover {\r\n    font-size: 20px;\r\n    text-decoration: underline;\r\n    border-top: 1px solid #e55242;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  .header-content {\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 16px;\r\n    padding: 4px;\r\n    background-color: rgb(155 15 15 / 31.5%);\r\n    margin-top: 40px;\r\n  }\r\n\r\n  .list-item-title {\r\n    margin-top: 40px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    color: rgb(159 196 206);\r\n  }\r\n\r\n  .list-item-title2 {\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    font-size: 28px;\r\n    color: rgb(37 37 37);\r\n    font-weight: 400;\r\n  }\r\n}\r\n\r\n/* Tablet version */\r\n@media only screen and (min-width: 601px) {\r\n  /* Stylize head section */\r\n  main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 25px;\r\n    align-items: center;\r\n    height: 325px;\r\n    background-image: url(\"https://matchthemes.com/demowp/caverta/wp-content/uploads/slider-3.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding-top: 15px;\r\n  }\r\n\r\n  #header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 25px;\r\n  }\r\n\r\n  /* Stylize menu */\r\n  .logo-container {\r\n    background-color: rgb(233 218 218 / 6.8%);\r\n  }\r\n\r\n  .menu {\r\n    display: flex;\r\n    gap: 15px;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .menu-items {\r\n    text-decoration: none;\r\n    display: block;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .menu-items:hover {\r\n    font-size: 20px;\r\n    text-decoration: underline;\r\n    border-top: 1px solid #e55242;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  .header-content {\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    padding: 4px;\r\n    background-color: rgb(155 15 15 / 31.5%);\r\n    margin-top: 100px;\r\n  }\r\n\r\n  .list-item-title {\r\n    margin-top: 40px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    color: rgb(159 196 206);\r\n  }\r\n\r\n  .list-item-title2 {\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    font-size: 28px;\r\n    color: rgb(37 37 37);\r\n    font-weight: 400;\r\n  }\r\n}\r\n\r\n/* Desktop version */\r\n@media only screen and (min-width: 992px) {\r\n  /* Stylize head section */\r\n  main {\r\n    background-image: url(\"https://matchthemes.com/demowp/caverta/wp-content/uploads/slider-3.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    height: 125vh;\r\n    padding-top: 35px;\r\n  }\r\n\r\n  #header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 300px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  /* Stylize menu */\r\n  .logo-container {\r\n    background-color: rgb(233 218 218 / 6.8%);\r\n  }\r\n\r\n  .menu {\r\n    display: flex;\r\n    gap: 15px;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .menu-items {\r\n    text-decoration: none;\r\n    display: block;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .menu-items:hover {\r\n    font-size: 20px;\r\n    text-decoration: underline;\r\n    border-top: 1px solid #e55242;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  .header-content {\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 25px;\r\n    padding: 80px;\r\n    background-color: rgb(155 15 15 / 31.5%);\r\n    margin-top: 200px;\r\n  }\r\n\r\n  .list-item-title {\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    color: rgb(159 196 206);\r\n  }\r\n\r\n  .list-item-title2 {\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    font-size: 48px;\r\n    color: rgb(37 37 37);\r\n    font-weight: 400;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n  font-family: sans-serif, arial, helvetica;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n}\r\n\r\n.list-item-container {\r\n  width: 98%;\r\n  height: auto;\r\n  margin: auto;\r\n}\r\n\r\n.display-list {\r\n  margin-top: 50px;\r\n  width: 100%;\r\n  display: grid;\r\n  grid-gap: 15px;\r\n  grid-template: auto / repeat(auto-fit, minmax(300px, 1fr));\r\n}\r\n\r\n.item {\r\n  width: 100%;\r\n  border-radius: 8px;\r\n  background: rgb(37 37 37);\r\n  padding: 13px;\r\n  overflow: hidden;\r\n}\r\n\r\n.item img {\r\n  width: 100%;\r\n  height: 300px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.item .flex-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: 10px;\r\n}\r\n\r\n.item .title {\r\n  color: white;\r\n  font-size: 18px;\r\n}\r\n\r\n.item .item-data {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.item .comment,\r\n.reserve {\r\n  padding: 10px;\r\n  background-color: #404041;\r\n  color: white;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  margin-top: 15px;\r\n}\r\n\r\n.icon {\r\n  cursor: pointer;\r\n}\r\n\r\n.likes-div {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 5px;\r\n  align-items: center;\r\n  align-content: center;\r\n  color: white;\r\n}\r\n\r\n.active {\r\n  color: rgb(238 25 25) !important;\r\n}\r\n\r\n/* Mobile version */\r\n@media only screen and (max-width: 600px) {\r\n  /* Stylize head section */\r\n  main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 25px;\r\n    align-items: center;\r\n    height: 325px;\r\n    background-image: url(\"https://matchthemes.com/demowp/caverta/wp-content/uploads/slider-3.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding-top: 15px;\r\n  }\r\n\r\n  #header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 25px;\r\n  }\r\n\r\n  /* Stylize menu */\r\n  .logo-container {\r\n    background-color: rgb(233 218 218 / 6.8%);\r\n  }\r\n\r\n  .menu {\r\n    display: flex;\r\n    gap: 15px;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .menu-items {\r\n    text-decoration: none;\r\n    display: block;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .menu-items:hover {\r\n    font-size: 20px;\r\n    text-decoration: underline;\r\n    border-top: 1px solid #e55242;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  .header-content {\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 16px;\r\n    padding: 4px;\r\n    background-color: rgb(155 15 15 / 31.5%);\r\n    margin-top: 40px;\r\n  }\r\n\r\n  .list-item-title {\r\n    margin-top: 40px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    color: rgb(159 196 206);\r\n  }\r\n\r\n  .list-item-title2 {\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    font-size: 28px;\r\n    color: rgb(37 37 37);\r\n    font-weight: 400;\r\n  }\r\n}\r\n\r\n/* Tablet version */\r\n@media only screen and (min-width: 601px) {\r\n  /* Stylize head section */\r\n  main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 25px;\r\n    align-items: center;\r\n    height: 325px;\r\n    background-image: url(\"https://matchthemes.com/demowp/caverta/wp-content/uploads/slider-3.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding-top: 15px;\r\n  }\r\n\r\n  #header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 25px;\r\n  }\r\n\r\n  /* Stylize menu */\r\n  .logo-container {\r\n    background-color: rgb(233 218 218 / 6.8%);\r\n  }\r\n\r\n  .menu {\r\n    display: flex;\r\n    gap: 15px;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .menu-items {\r\n    text-decoration: none;\r\n    display: block;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .menu-items:hover {\r\n    font-size: 20px;\r\n    text-decoration: underline;\r\n    border-top: 1px solid #e55242;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  .header-content {\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    padding: 4px;\r\n    background-color: rgb(155 15 15 / 31.5%);\r\n    margin-top: 100px;\r\n  }\r\n\r\n  .list-item-title {\r\n    margin-top: 40px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    color: rgb(159 196 206);\r\n  }\r\n\r\n  .list-item-title2 {\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    font-size: 28px;\r\n    color: rgb(37 37 37);\r\n    font-weight: 400;\r\n  }\r\n}\r\n\r\n/* Desktop version */\r\n@media only screen and (min-width: 992px) {\r\n  /* Stylize head section */\r\n  main {\r\n    background-image: url(\"https://matchthemes.com/demowp/caverta/wp-content/uploads/slider-3.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    height: 125vh;\r\n    padding-top: 35px;\r\n  }\r\n\r\n  #header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 300px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  /* Stylize menu */\r\n  .logo-container {\r\n    background-color: rgb(233 218 218 / 6.8%);\r\n  }\r\n\r\n  .menu {\r\n    display: flex;\r\n    gap: 15px;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .menu-items {\r\n    text-decoration: none;\r\n    display: block;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .menu-items:hover {\r\n    font-size: 20px;\r\n    text-decoration: underline;\r\n    border-top: 1px solid #e55242;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  .header-content {\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 25px;\r\n    padding: 80px;\r\n    background-color: rgb(155 15 15 / 31.5%);\r\n    margin-top: 200px;\r\n  }\r\n\r\n  .list-item-title {\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    color: rgb(159 196 206);\r\n  }\r\n\r\n  .list-item-title2 {\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    font-size: 48px;\r\n    color: rgb(37 37 37);\r\n    font-weight: 400;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Volte.ttf */ "./src/fonts/Volte.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/closeButton.png */ "./src/assets/closeButton.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable csstree/validator */\n@font-face {\n  font-family: Volte;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n  margin: 0;\n}\n\nbody footer {\n  display: box;\n  display: flexbox;\n  display: flex;\n  flex-wrap: wrap;\n  background-color: black;\n  color: #a4b1b8;\n  font-family: Volte, sans-serif;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  padding: 30px;\n  gap: 10px;\n  margin-top: 20px;\n}\n\nbody footer div {\n  -ms-flex-preferred-size: 300px;\n  flex-basis: 300px;\n}\n\nbody footer div h2 {\n  font-weight: bold;\n  font-size: 28px;\n  border-bottom: solid 2px #a4b1b8;\n  display: inline-block;\n}\n\nbody footer div p {\n  font-size: 20px;\n  color: white;\n}\n\nbody footer div a {\n  color: white;\n  display: block;\n  font-size: 20px;\n  text-decoration: none;\n  margin: 10px;\n}\n\nbody footer div:first-child {\n  text-align: center;\n  padding: 0 30px;\n}\n\nbody .authors {\n  padding: 10px;\n  text-align: center;\n  font-family: Volte, sans-serif;\n  font-weight: bold;\n  font-size: 20px;\n  background-color: #ddd;\n}\n\nbody .authors a {\n  color: orangered;\n  font-size: 24px;\n}\n\nbody .popup-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding-top: 2%;\n  padding-bottom: 2%;\n  background-color: #c0c0c0b2;\n  backdrop-filter: saturate(180%) blur(4px);\n  overflow: auto;\n}\n\nbody .popup {\n  background-color: #141213;\n  color: white;\n  width: 65%;\n  max-width: 650px;\n  margin: auto;\n  display: box;\n  display: flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  gap: 30px;\n  -webkit-box-pack: left;\n  -ms-flex-pack: left;\n  justify-content: left;\n  border-radius: 10px;\n  -webkit-box-align: baseline;\n  -ms-flex-align: baseline;\n  align-items: baseline;\n  margin-bottom: 50px;\n  padding: 20px;\n  padding-top: 0;\n}\n\nbody .popup .instruction {\n  font-family: Volte, sans-serif;\n  font-size: 20px;\n  margin: 20px 0 20px 20px;\n}\n\nbody .popup .tags {\n  padding-top: 10px;\n}\n\nbody .popup .tags .tag {\n  display: inline-block;\n  padding: 5px;\n  background-color: whitesmoke;\n  color: black;\n  border-radius: 5px;\n  font-family: Volte, sans-serif;\n  font-weight: bold;\n  margin-right: 6px;\n}\n\nbody .popup .close-button {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  width: 50px;\n  height: 50px;\n  display: block;\n  background-repeat: no-repeat;\n  background-size: cover;\n  cursor: pointer;\n  margin-left: auto;\n  margin-top: 0;\n  margin-right: -20px;\n}\n\nbody .popup img {\n  width: 100%;\n}\n\nbody .popup .user {\n  font-family: Volte, sans-serif;\n  background-color: #deff00;\n  color: black;\n  font-weight: bold;\n  border: solid 1px white;\n  border-radius: 9px;\n  padding: 6px;\n  position: relative;\n  left: 8px;\n  top: 10px;\n  display: inline;\n}\n\nbody .popup .user span {\n  color: blue;\n  margin-left: 30px;\n}\n\nbody .popup .comment {\n  margin: 20px 0;\n}\n\nbody .popup .comment p {\n  background-color: #ffffff14;\n  padding: 40px 20px;\n  border: solid 1px #deff00;\n  color: #deff00;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  margin: 0;\n  left: 5px;\n  margin-left: 25px;\n}\n\nbody .popup .txtUser,\nbody .popup .txtComment,\nbody .popup button,\nbody .popup .message {\n  margin: auto;\n  width: 80%;\n  max-width: 500;\n  font-family: volte, sans-serif;\n  font-weight: bold;\n  font-size: 20px;\n  padding: 5px;\n  outline: none;\n  border-radius: 5px;\n}\n\nbody .popup .txtUser {\n  height: 50px;\n  border: solid 3px white;\n}\n\nbody .popup .txtUser:focus {\n  border: solid 3px #deff00;\n}\n\nbody .popup .txtComment {\n  height: 400px;\n  border: solid 3px white;\n}\n\nbody .popup .txtComment:focus {\n  border: solid 3px #deff00;\n}\n\nbody .popup button {\n  height: 50px;\n  background-color: #deff00;\n  cursor: pointer;\n}\n\nbody .popup .message {\n  height: 80px;\n}\n\nbody .popup .message.success {\n  color: springgreen;\n}\n\nbody .popup .message.failed {\n  color: red;\n}\n\n@media screen and (max-width: 450px) {\n  body .popup-container {\n    padding: 0;\n  }\n\n  body .popup-container .popup {\n    width: 100%;\n    border-radius: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* stylelint-disable csstree/validator */\n@font-face {\n  font-family: Volte;\n  src: url(\"./fonts/Volte.ttf\");\n}\n\nbody {\n  margin: 0;\n}\n\nbody footer {\n  display: box;\n  display: flexbox;\n  display: flex;\n  flex-wrap: wrap;\n  background-color: black;\n  color: #a4b1b8;\n  font-family: Volte, sans-serif;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  padding: 30px;\n  gap: 10px;\n  margin-top: 20px;\n}\n\nbody footer div {\n  -ms-flex-preferred-size: 300px;\n  flex-basis: 300px;\n}\n\nbody footer div h2 {\n  font-weight: bold;\n  font-size: 28px;\n  border-bottom: solid 2px #a4b1b8;\n  display: inline-block;\n}\n\nbody footer div p {\n  font-size: 20px;\n  color: white;\n}\n\nbody footer div a {\n  color: white;\n  display: block;\n  font-size: 20px;\n  text-decoration: none;\n  margin: 10px;\n}\n\nbody footer div:first-child {\n  text-align: center;\n  padding: 0 30px;\n}\n\nbody .authors {\n  padding: 10px;\n  text-align: center;\n  font-family: Volte, sans-serif;\n  font-weight: bold;\n  font-size: 20px;\n  background-color: #ddd;\n}\n\nbody .authors a {\n  color: orangered;\n  font-size: 24px;\n}\n\nbody .popup-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding-top: 2%;\n  padding-bottom: 2%;\n  background-color: #c0c0c0b2;\n  backdrop-filter: saturate(180%) blur(4px);\n  overflow: auto;\n}\n\nbody .popup {\n  background-color: #141213;\n  color: white;\n  width: 65%;\n  max-width: 650px;\n  margin: auto;\n  display: box;\n  display: flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  gap: 30px;\n  -webkit-box-pack: left;\n  -ms-flex-pack: left;\n  justify-content: left;\n  border-radius: 10px;\n  -webkit-box-align: baseline;\n  -ms-flex-align: baseline;\n  align-items: baseline;\n  margin-bottom: 50px;\n  padding: 20px;\n  padding-top: 0;\n}\n\nbody .popup .instruction {\n  font-family: Volte, sans-serif;\n  font-size: 20px;\n  margin: 20px 0 20px 20px;\n}\n\nbody .popup .tags {\n  padding-top: 10px;\n}\n\nbody .popup .tags .tag {\n  display: inline-block;\n  padding: 5px;\n  background-color: whitesmoke;\n  color: black;\n  border-radius: 5px;\n  font-family: Volte, sans-serif;\n  font-weight: bold;\n  margin-right: 6px;\n}\n\nbody .popup .close-button {\n  background-image: url(\"./assets/closeButton.png\");\n  width: 50px;\n  height: 50px;\n  display: block;\n  background-repeat: no-repeat;\n  background-size: cover;\n  cursor: pointer;\n  margin-left: auto;\n  margin-top: 0;\n  margin-right: -20px;\n}\n\nbody .popup img {\n  width: 100%;\n}\n\nbody .popup .user {\n  font-family: Volte, sans-serif;\n  background-color: #deff00;\n  color: black;\n  font-weight: bold;\n  border: solid 1px white;\n  border-radius: 9px;\n  padding: 6px;\n  position: relative;\n  left: 8px;\n  top: 10px;\n  display: inline;\n}\n\nbody .popup .user span {\n  color: blue;\n  margin-left: 30px;\n}\n\nbody .popup .comment {\n  margin: 20px 0;\n}\n\nbody .popup .comment p {\n  background-color: #ffffff14;\n  padding: 40px 20px;\n  border: solid 1px #deff00;\n  color: #deff00;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  margin: 0;\n  left: 5px;\n  margin-left: 25px;\n}\n\nbody .popup .txtUser,\nbody .popup .txtComment,\nbody .popup button,\nbody .popup .message {\n  margin: auto;\n  width: 80%;\n  max-width: 500;\n  font-family: volte, sans-serif;\n  font-weight: bold;\n  font-size: 20px;\n  padding: 5px;\n  outline: none;\n  border-radius: 5px;\n}\n\nbody .popup .txtUser {\n  height: 50px;\n  border: solid 3px white;\n}\n\nbody .popup .txtUser:focus {\n  border: solid 3px #deff00;\n}\n\nbody .popup .txtComment {\n  height: 400px;\n  border: solid 3px white;\n}\n\nbody .popup .txtComment:focus {\n  border: solid 3px #deff00;\n}\n\nbody .popup button {\n  height: 50px;\n  background-color: #deff00;\n  cursor: pointer;\n}\n\nbody .popup .message {\n  height: 80px;\n}\n\nbody .popup .message.success {\n  color: springgreen;\n}\n\nbody .popup .message.failed {\n  color: red;\n}\n\n@media screen and (max-width: 450px) {\n  body .popup-container {\n    padding: 0;\n  }\n\n  body .popup-container .popup {\n    width: 100%;\n    border-radius: 0;\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/modules/commentCount.js":
/*!*************************************!*\
  !*** ./src/modules/commentCount.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentsCount = (comments) => (comments.length === 0 || comments.error ? 'No comment yet' : comments.length);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCount);

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentCount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCount.js */ "./src/modules/commentCount.js");


const appid = 'tLVd7tb0BQpHYLFSGTqK';

const getComments = (idmeal) => {
  const result = fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appid}/comments?item_id=${idmeal}`)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => `failed.${error}`);
  return result;
};

const getMealDetail = (idmeal) => {
  const result = fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => `failed.${error}`);
  return result;
};

const showPopup = async (idmeal) => {
  const commentsDiv = document.createElement('div');
  commentsDiv.style.width = '100%';
  let comments = '';
  const txtUser = document.createElement('input');
  txtUser.classList.add('txtUser');
  txtUser.placeholder = 'Your name ';
  const txtComment = document.createElement('textarea');
  txtComment.classList.add('txtComment');
  txtComment.placeholder = 'Your comment';
  const btnSubmitComment = document.createElement('button');
  btnSubmitComment.innerHTML = 'Submit your comment';
  const message = document.createElement('p');
  message.classList.add('message');

  const showComments = () => {
    let res = `<h2>Comments (${(0,_commentCount_js__WEBPACK_IMPORTED_MODULE_0__["default"])(comments)})</h2>`;
    if (comments.length > 0) {
      res += ` 
  <div class="comments">${comments.map((el) => `<div class='comment'>
      <div class="user"> ${el.username} <span>${el.creation_date}</span> </div>
      <p>${el.comment}</p>
    </div>`).join('')}</div>
  `;
    }
    return res;
  };

  const submitComment = (idmeal) => {
    if (txtUser.value === '') {
      message.innerHTML = '';
      setTimeout(() => {
        message.classList.add('failed');
        message.innerHTML = 'Please enter you name';
      }, 100);
      return false;
    } if (txtComment.value === '') {
      message.innerHTML = '';
      setTimeout(() => {
        message.classList.add('failed');
        message.innerHTML = 'Please enter you comment';
      }, 100);
      return false;
    }

    const data = JSON.stringify({
      item_id: idmeal,
      username: txtUser.value,
      comment: txtComment.value,
    });

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    message.innerHTML = '';
    btnSubmitComment.disabled = true;
    btnSubmitComment.innerHTML = 'Submitting ... ';
    fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appid}/comments`, requestOptions)
      .then((response) => response.text())
      .then(async (result) => {
        if (result === 'Created') {
          message.classList.add('success');
          message.innerHTML = 'Your comment was saved suseccfully.';
          comments = await getComments(idmeal);
          commentsDiv.innerHTML = showComments();
        } else {
          message.classList.add('failed');
          message.innerHTML = 'An error accured. Please try again later';
        }
      }).finally(() => {
        txtUser.value = '';
        txtComment.value = '';
        btnSubmitComment.disabled = false;
        btnSubmitComment.innerHTML = 'Submit your comment';
      });

    return null;
  };

  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');

  const popup = document.createElement('div');
  popup.classList.add('popup');

  popupContainer.appendChild(popup);

  const closeButton = document.createElement('span');
  closeButton.classList.add('close-button');
  closeButton.addEventListener('click', () => {
    popupContainer.remove();
    btnSubmitComment.removeEventListener('click', () => submitComment(idmeal));
    document.querySelector('html').style.overflow = 'auto';
  });
  popup.appendChild(closeButton);

  document.querySelector('html').style.overflow = 'hidden';
  document.querySelector('body').appendChild(popupContainer);

  const mealDetail = await getMealDetail(idmeal);

  const img = document.createElement('img');
  img.src = mealDetail.meals[0].strMealThumb;
  popup.appendChild(img);

  const infoDiv = document.createElement('div');
  infoDiv.innerHTML = `
  <h2>${mealDetail.meals[0].strMeal}</h2>
  ${mealDetail.meals[0].strInstructions.split(/STEP [0-9] -/).map((el, i) => (i > 0 ? `<p class='instruction'>${i} - ${el}</p>` : '')).join('')}
  <div class="tags">${(mealDetail.meals[0].strTags || '').split(',').map((el) => (el !== '' ? `<div class='tag'>${el}</div>` : '')).join('')}</div>
  `;
  popup.appendChild(infoDiv);

  comments = await getComments(idmeal);
  commentsDiv.innerHTML = showComments();

  popup.appendChild(commentsDiv);

  const submitCommentTitle = document.createElement('h2');
  submitCommentTitle.innerHTML = 'Add your comment';
  popup.append(submitCommentTitle);
  popup.appendChild(txtUser);
  popup.appendChild(txtComment);
  popup.appendChild(btnSubmitComment);
  btnSubmitComment.addEventListener('click', () => submitComment(idmeal));
  popup.appendChild(message);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopup);

/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mealsApi = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=chinese';
const counter = async () => {
  const res = await fetch(mealsApi);
  const json = await res.json();
  return json;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);


/***/ }),

/***/ "./src/modules/like.js":
/*!*****************************!*\
  !*** ./src/modules/like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLikes": () => (/* binding */ addLikes),
/* harmony export */   "getLikes": () => (/* binding */ getLikes)
/* harmony export */ });
const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tLVd7tb0BQpHYLFSGTqK/likes';
const header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });
const getLikes = async () => {
  try {
    const response = await fetch(likesUrl);
    return await response.json();
  } catch (err) {
    return err;
  }
};

const addLikes = async (e) => {
  const element = e.target.parentNode.children[1].id;
  const fetchLikes = await fetch(likesUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: element,
    }),
    headers: header,
  });
  return fetchLikes;
};

/***/ }),

/***/ "./src/modules/meals.js":
/*!******************************!*\
  !*** ./src/modules/meals.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getMeals = () => {
  const meals = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=chinese')
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => `failed.${error}`);

  return meals;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeals);

/***/ }),

/***/ "./src/assets/closeButton.png":
/*!************************************!*\
  !*** ./src/assets/closeButton.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad55efd67be9e46087e8.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d243edf052a9de2a6d2.png";

/***/ }),

/***/ "./src/fonts/Volte.ttf":
/*!*****************************!*\
  !*** ./src/fonts/Volte.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8f1ebd4e9dd1872b53f.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_meals_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/meals.js */ "./src/modules/meals.js");
/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/comments.js */ "./src/modules/comments.js");
/* harmony import */ var _modules_like_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/like.js */ "./src/modules/like.js");
/* harmony import */ var _modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/itemCounter.js */ "./src/modules/itemCounter.js");








const logo = document.querySelector('footer .logo');
logo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__;

const displayList = document.querySelector('.display-list');

async function loadMeals() {
  const data = await (0,_modules_meals_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const theMeals = data.meals;

  for (let i = 0; i < theMeals.length; i++) {
    const divItem = document.createElement('div');
    divItem.classList.add('item');
    divItem.innerHTML = `
        <img src="${theMeals[i].strMealThumb}" alt="">
        <div class="flex-container">
            <h1 class="title">${theMeals[i].strMeal}</h1>
            <div class="likes-div">
              <button class="icon" type="button" title="Press to like this food">&#10084;</button>
              <p class="likes" id="${theMeals[i].idMeal}"></p>Likes
            </div>            
        </div>
        <p class="item-data">
            <a class="comment" href="">Comment</a>
            <a class="reserve" href="">Reservation</a>
        </p>
        `;
    const btnComment = divItem.querySelector('.comment');
    btnComment.addEventListener('click', (e) => {
      e.preventDefault();
      (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_4__["default"])(theMeals[i].idMeal);
    });
    displayList.appendChild(divItem);
  }

  (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_5__.getLikes)().then((response) => {
    const likes = document.querySelectorAll('.likes');
    for (let i = 0; i < response.length; i++) {
      likes[i].textContent = `
        ${response[i].likes}
      `;
    }
  });

  const icons = document.querySelectorAll('.icon');
  icons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_5__.addLikes)(e);
      const numOfLikes = e.target.parentNode.children[1];
      numOfLikes.textContent = +numOfLikes.textContent + 1;
    });
  });

  (0,_modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_6__["default"])().then(() => {
    const counter = theMeals.length;
    const countHeader = document.querySelector('.list-item-title2');
    countHeader.textContent = `
    Discover our ${counter} meals available on the menu
    `;
  });
}

window.addEventListener('load', () => {
  loadMeals();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxXQUFXLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FB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Q0FBSTs7QUFFZjs7QUFFQTtBQUNBLHFCQUFxQiw2REFBUTtBQUM3Qjs7QUFFQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BEO0FBQ0EseUZBQXlGO0FBQ3pGLHFDQUFxQyxtQkFBbUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdFQUFTO0FBQ2YsS0FBSztBQUNMO0FBQ0E7O0FBRUEsRUFBRSwwREFBUTtBQUNWO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBEQUFRO0FBQ2Q7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVILEVBQUUsbUVBQU87QUFDVDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9tb2R1bGVzL2NvbW1lbnRDb3VudC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9zcmMvbW9kdWxlcy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9zcmMvbW9kdWxlcy9pdGVtQ291bnRlci5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9zcmMvbW9kdWxlcy9saWtlLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9tb2R1bGVzL21lYWxzLmpzIiwid2VicGFjazovL2NhcHN0b25lMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsIGFyaWFsLCBoZWx2ZXRpY2E7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA5OCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWxpc3Qge1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtZ2FwOiAxNXB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMzcgMzcgMzcpO1xcclxcbiAgcGFkZGluZzogMTNweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5pdGVtIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIC5mbGV4LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIC50aXRsZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIC5pdGVtLWRhdGEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gLmNvbW1lbnQsXFxyXFxuLnJlc2VydmUge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDE7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjM4IDI1IDI1KSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2JpbGUgdmVyc2lvbiAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gIC8qIFN0eWxpemUgaGVhZCBzZWN0aW9uICovXFxyXFxuICBtYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDMyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vbWF0Y2h0aGVtZXMuY29tL2RlbW93cC9jYXZlcnRhL3dwLWNvbnRlbnQvdXBsb2Fkcy9zbGlkZXItMy5qcGdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogU3R5bGl6ZSBtZW51ICovXFxyXFxuICAubG9nby1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzIDIxOCAyMTggLyA2LjglKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWl0ZW1zIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWl0ZW1zOmhvdmVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNTUyNDI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlci1jb250ZW50IHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTUgMTUgMTUgLyAzMS41JSk7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlzdC1pdGVtLXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTU5IDE5NiAyMDYpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpc3QtaXRlbS10aXRsZTIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgY29sb3I6IHJnYigzNyAzNyAzNyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIFRhYmxldCB2ZXJzaW9uICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xcclxcbiAgLyogU3R5bGl6ZSBoZWFkIHNlY3Rpb24gKi9cXHJcXG4gIG1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDI1cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMzI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9tYXRjaHRoZW1lcy5jb20vZGVtb3dwL2NhdmVydGEvd3AtY29udGVudC91cGxvYWRzL3NsaWRlci0zLmpwZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNoZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDI1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBTdHlsaXplIG1lbnUgKi9cXHJcXG4gIC5sb2dvLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMgMjE4IDIxOCAvIDYuOCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtaXRlbXMge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtaXRlbXM6aG92ZXIge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1NTI0MjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyLWNvbnRlbnQge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NSAxNSAxNSAvIDMxLjUlKTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlzdC1pdGVtLXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTU5IDE5NiAyMDYpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpc3QtaXRlbS10aXRsZTIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgY29sb3I6IHJnYigzNyAzNyAzNyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIERlc2t0b3AgdmVyc2lvbiAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXHJcXG4gIC8qIFN0eWxpemUgaGVhZCBzZWN0aW9uICovXFxyXFxuICBtYWluIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL21hdGNodGhlbWVzLmNvbS9kZW1vd3AvY2F2ZXJ0YS93cC1jb250ZW50L3VwbG9hZHMvc2xpZGVyLTMuanBnXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgaGVpZ2h0OiAxMjV2aDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDM1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAzMDBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogU3R5bGl6ZSBtZW51ICovXFxyXFxuICAubG9nby1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzIDIxOCAyMTggLyA2LjglKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWl0ZW1zIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWl0ZW1zOmhvdmVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNTUyNDI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlci1jb250ZW50IHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBwYWRkaW5nOiA4MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU1IDE1IDE1IC8gMzEuNSUpO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saXN0LWl0ZW0tdGl0bGUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgY29sb3I6IHJnYigxNTkgMTk2IDIwNik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlzdC1pdGVtLXRpdGxlMiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgICBjb2xvcjogcmdiKDM3IDM3IDM3KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYztFQUNkLDBEQUEwRDtBQUM1RDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtF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O0lBQ2IsU0FBUztJQUNULG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtFQUNsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsIGFyaWFsLCBoZWx2ZXRpY2E7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA5OCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWxpc3Qge1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtZ2FwOiAxNXB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMzcgMzcgMzcpO1xcclxcbiAgcGFkZGluZzogMTNweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5pdGVtIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIC5mbGV4LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIC50aXRsZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIC5pdGVtLWRhdGEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gLmNvbW1lbnQsXFxyXFxuLnJlc2VydmUge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDE7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjM4IDI1IDI1KSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2JpbGUgdmVyc2lvbiAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gIC8qIFN0eWxpemUgaGVhZCBzZWN0aW9uICovXFxyXFxuICBtYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDMyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vbWF0Y2h0aGVtZXMuY29tL2RlbW93cC9jYXZlcnRhL3dwLWNvbnRlbnQvdXBsb2Fkcy9zbGlkZXItMy5qcGdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogU3R5bGl6ZSBtZW51ICovXFxyXFxuICAubG9nby1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzIDIxOCAyMTggLyA2LjglKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWl0ZW1zIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWl0ZW1zOmhvdmVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNTUyNDI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlci1jb250ZW50IHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTUgMTUgMTUgLyAzMS41JSk7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlzdC1pdGVtLXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTU5IDE5NiAyMDYpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpc3QtaXRlbS10aXRsZTIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgY29sb3I6IHJnYigzNyAzNyAzNyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIFRhYmxldCB2ZXJzaW9uICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xcclxcbiAgLyogU3R5bGl6ZSBoZWFkIHNlY3Rpb24gKi9cXHJcXG4gIG1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDI1cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMzI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9tYXRjaHRoZW1lcy5jb20vZGVtb3dwL2NhdmVydGEvd3AtY29udGVudC91cGxvYWRzL3NsaWRlci0zLmpwZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNoZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDI1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBTdHlsaXplIG1lbnUgKi9cXHJcXG4gIC5sb2dvLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMgMjE4IDIxOCAvIDYuOCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtaXRlbXMge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtaXRlbXM6aG92ZXIge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1NTI0MjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyLWNvbnRlbnQge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NSAxNSAxNSAvIDMxLjUlKTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlzdC1pdGVtLXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTU5IDE5NiAyMDYpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpc3QtaXRlbS10aXRsZTIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgY29sb3I6IHJnYigzNyAzNyAzNyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIERlc2t0b3AgdmVyc2lvbiAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXHJcXG4gIC8qIFN0eWxpemUgaGVhZCBzZWN0aW9uICovXFxyXFxuICBtYWluIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL21hdGNodGhlbWVzLmNvbS9kZW1vd3AvY2F2ZXJ0YS93cC1jb250ZW50L3VwbG9hZHMvc2xpZGVyLTMuanBnXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgaGVpZ2h0OiAxMjV2aDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDM1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAzMDBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogU3R5bGl6ZSBtZW51ICovXFxyXFxuICAubG9nby1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzIDIxOCAyMTggLyA2LjglKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWl0ZW1zIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWl0ZW1zOmhvdmVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNTUyNDI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlci1jb250ZW50IHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBwYWRkaW5nOiA4MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU1IDE1IDE1IC8gMzEuNSUpO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saXN0LWl0ZW0tdGl0bGUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgY29sb3I6IHJnYigxNTkgMTk2IDIwNik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlzdC1pdGVtLXRpdGxlMiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgICBjb2xvcjogcmdiKDM3IDM3IDM3KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1ZvbHRlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2Nsb3NlQnV0dG9uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBjc3N0cmVlL3ZhbGlkYXRvciAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFZvbHRlO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSBmb290ZXIge1xcbiAgZGlzcGxheTogYm94O1xcbiAgZGlzcGxheTogZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiAjYTRiMWI4O1xcbiAgZm9udC1mYW1pbHk6IFZvbHRlLCBzYW5zLXNlcmlmO1xcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbmJvZHkgZm9vdGVyIGRpdiB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMzAwcHg7XFxuICBmbGV4LWJhc2lzOiAzMDBweDtcXG59XFxuXFxuYm9keSBmb290ZXIgZGl2IGgyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNhNGIxYjg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbmJvZHkgZm9vdGVyIGRpdiBwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYm9keSBmb290ZXIgZGl2IGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbmJvZHkgZm9vdGVyIGRpdjpmaXJzdC1jaGlsZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDMwcHg7XFxufVxcblxcbmJvZHkgLmF1dGhvcnMge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBWb2x0ZSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG59XFxuXFxuYm9keSAuYXV0aG9ycyBhIHtcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbmJvZHkgLnBvcHVwLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMiU7XFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwYjI7XFxuICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoNHB4KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5ib2R5IC5wb3B1cCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxMjEzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDY1JTtcXG4gIG1heC13aWR0aDogNjUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBib3g7XFxuICBkaXNwbGF5OiBmbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDMwcHg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBsZWZ0O1xcbiAgLW1zLWZsZXgtcGFjazogbGVmdDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogYmFzZWxpbmU7XFxuICAtbXMtZmxleC1hbGlnbjogYmFzZWxpbmU7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbn1cXG5cXG5ib2R5IC5wb3B1cCAuaW5zdHJ1Y3Rpb24ge1xcbiAgZm9udC1mYW1pbHk6IFZvbHRlLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAyMHB4O1xcbn1cXG5cXG5ib2R5IC5wb3B1cCAudGFncyB7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuYm9keSAucG9wdXAgLnRhZ3MgLnRhZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1mYW1pbHk6IFZvbHRlLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDZweDtcXG59XFxuXFxuYm9keSAucG9wdXAgLmNsb3NlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcXG59XFxuXFxuYm9keSAucG9wdXAgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IC5wb3B1cCAudXNlciB7XFxuICBmb250LWZhbWlseTogVm9sdGUsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmZjAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDhweDtcXG4gIHRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuYm9keSAucG9wdXAgLnVzZXIgc3BhbiB7XFxuICBjb2xvcjogYmx1ZTtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG5cXG5ib2R5IC5wb3B1cCAuY29tbWVudCB7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuYm9keSAucG9wdXAgLmNvbW1lbnQgcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMTQ7XFxuICBwYWRkaW5nOiA0MHB4IDIwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjZGVmZjAwO1xcbiAgY29sb3I6ICNkZWZmMDA7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IDA7XFxuICBsZWZ0OiA1cHg7XFxuICBtYXJnaW4tbGVmdDogMjVweDtcXG59XFxuXFxuYm9keSAucG9wdXAgLnR4dFVzZXIsXFxuYm9keSAucG9wdXAgLnR4dENvbW1lbnQsXFxuYm9keSAucG9wdXAgYnV0dG9uLFxcbmJvZHkgLnBvcHVwIC5tZXNzYWdlIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDUwMDtcXG4gIGZvbnQtZmFtaWx5OiB2b2x0ZSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuYm9keSAucG9wdXAgLnR4dFVzZXIge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggd2hpdGU7XFxufVxcblxcbmJvZHkgLnBvcHVwIC50eHRVc2VyOmZvY3VzIHtcXG4gIGJvcmRlcjogc29saWQgM3B4ICNkZWZmMDA7XFxufVxcblxcbmJvZHkgLnBvcHVwIC50eHRDb21tZW50IHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXI6IHNvbGlkIDNweCB3aGl0ZTtcXG59XFxuXFxuYm9keSAucG9wdXAgLnR4dENvbW1lbnQ6Zm9jdXMge1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggI2RlZmYwMDtcXG59XFxuXFxuYm9keSAucG9wdXAgYnV0dG9uIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWZmMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJvZHkgLnBvcHVwIC5tZXNzYWdlIHtcXG4gIGhlaWdodDogODBweDtcXG59XFxuXFxuYm9keSAucG9wdXAgLm1lc3NhZ2Uuc3VjY2VzcyB7XFxuICBjb2xvcjogc3ByaW5nZ3JlZW47XFxufVxcblxcbmJvZHkgLnBvcHVwIC5tZXNzYWdlLmZhaWxlZCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgYm9keSAucG9wdXAtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIGJvZHkgLnBvcHVwLWNvbnRhaW5lciAucG9wdXAge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx3Q0FBd0M7QUFDeEM7RUFDRSxrQkFBa0I7RUFDbEIsNENBQTZCO0FBQy9COztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLHlDQUF5QztFQUN6QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlEQUFpRDtFQUNqRCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUMvQixTQUFTO0VBQ1QsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTs7OztFQUlFLFlBQVk7RUFDWixVQUFVO0VBQ1YsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBjc3N0cmVlL3ZhbGlkYXRvciAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFZvbHRlO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvVm9sdGUudHRmXFxcIik7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IGZvb3RlciB7XFxuICBkaXNwbGF5OiBib3g7XFxuICBkaXNwbGF5OiBmbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6ICNhNGIxYjg7XFxuICBmb250LWZhbWlseTogVm9sdGUsIHNhbnMtc2VyaWY7XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuYm9keSBmb290ZXIgZGl2IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAzMDBweDtcXG4gIGZsZXgtYmFzaXM6IDMwMHB4O1xcbn1cXG5cXG5ib2R5IGZvb3RlciBkaXYgaDIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2E0YjFiODtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuYm9keSBmb290ZXIgZGl2IHAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5ib2R5IGZvb3RlciBkaXYgYSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuYm9keSBmb290ZXIgZGl2OmZpcnN0LWNoaWxkIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMzBweDtcXG59XFxuXFxuYm9keSAuYXV0aG9ycyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFZvbHRlLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbn1cXG5cXG5ib2R5IC5hdXRob3JzIGEge1xcbiAgY29sb3I6IG9yYW5nZXJlZDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuYm9keSAucG9wdXAtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAyJTtcXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzBiMjtcXG4gIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cig0cHgpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmJvZHkgLnBvcHVwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDEyMTM7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogNjUlO1xcbiAgbWF4LXdpZHRoOiA2NTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGJveDtcXG4gIGRpc3BsYXk6IGZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzBweDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGxlZnQ7XFxuICAtbXMtZmxleC1wYWNrOiBsZWZ0O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBiYXNlbGluZTtcXG4gIC1tcy1mbGV4LWFsaWduOiBiYXNlbGluZTtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDA7XFxufVxcblxcbmJvZHkgLnBvcHVwIC5pbnN0cnVjdGlvbiB7XFxuICBmb250LWZhbWlseTogVm9sdGUsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW46IDIwcHggMCAyMHB4IDIwcHg7XFxufVxcblxcbmJvZHkgLnBvcHVwIC50YWdzIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG5ib2R5IC5wb3B1cCAudGFncyAudGFnIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LWZhbWlseTogVm9sdGUsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcbn1cXG5cXG5ib2R5IC5wb3B1cCAuY2xvc2UtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvY2xvc2VCdXR0b24ucG5nXFxcIik7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xcbn1cXG5cXG5ib2R5IC5wb3B1cCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkgLnBvcHVwIC51c2VyIHtcXG4gIGZvbnQtZmFtaWx5OiBWb2x0ZSwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWZmMDA7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgcGFkZGluZzogNnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogOHB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5ib2R5IC5wb3B1cCAudXNlciBzcGFuIHtcXG4gIGNvbG9yOiBibHVlO1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcblxcbmJvZHkgLnBvcHVwIC5jb21tZW50IHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG5ib2R5IC5wb3B1cCAuY29tbWVudCBwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYxNDtcXG4gIHBhZGRpbmc6IDQwcHggMjBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICNkZWZmMDA7XFxuICBjb2xvcjogI2RlZmYwMDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGxlZnQ6IDVweDtcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbn1cXG5cXG5ib2R5IC5wb3B1cCAudHh0VXNlcixcXG5ib2R5IC5wb3B1cCAudHh0Q29tbWVudCxcXG5ib2R5IC5wb3B1cCBidXR0b24sXFxuYm9keSAucG9wdXAgLm1lc3NhZ2Uge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1heC13aWR0aDogNTAwO1xcbiAgZm9udC1mYW1pbHk6IHZvbHRlLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5ib2R5IC5wb3B1cCAudHh0VXNlciB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXI6IHNvbGlkIDNweCB3aGl0ZTtcXG59XFxuXFxuYm9keSAucG9wdXAgLnR4dFVzZXI6Zm9jdXMge1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggI2RlZmYwMDtcXG59XFxuXFxuYm9keSAucG9wdXAgLnR4dENvbW1lbnQge1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJvcmRlcjogc29saWQgM3B4IHdoaXRlO1xcbn1cXG5cXG5ib2R5IC5wb3B1cCAudHh0Q29tbWVudDpmb2N1cyB7XFxuICBib3JkZXI6IHNvbGlkIDNweCAjZGVmZjAwO1xcbn1cXG5cXG5ib2R5IC5wb3B1cCBidXR0b24ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZmYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSAucG9wdXAgLm1lc3NhZ2Uge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG5ib2R5IC5wb3B1cCAubWVzc2FnZS5zdWNjZXNzIHtcXG4gIGNvbG9yOiBzcHJpbmdncmVlbjtcXG59XFxuXFxuYm9keSAucG9wdXAgLm1lc3NhZ2UuZmFpbGVkIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxuICBib2R5IC5wb3B1cC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgYm9keSAucG9wdXAtY29udGFpbmVyIC5wb3B1cCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29tbWVudHNDb3VudCA9IChjb21tZW50cykgPT4gKGNvbW1lbnRzLmxlbmd0aCA9PT0gMCB8fCBjb21tZW50cy5lcnJvciA/ICdObyBjb21tZW50IHlldCcgOiBjb21tZW50cy5sZW5ndGgpO1xuXG5leHBvcnQgZGVmYXVsdCBjb21tZW50c0NvdW50OyIsImltcG9ydCBjb21tZW50c0NvdW50IGZyb20gJy4vY29tbWVudENvdW50LmpzJztcblxuY29uc3QgYXBwaWQgPSAndExWZDd0YjBCUXBIWUxGU0dUcUsnO1xuXG5jb25zdCBnZXRDb21tZW50cyA9IChpZG1lYWwpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7YXBwaWR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZG1lYWx9YClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gYGZhaWxlZC4ke2Vycm9yfWApO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgZ2V0TWVhbERldGFpbCA9IChpZG1lYWwpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gZmV0Y2goYGh0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JHtpZG1lYWx9YClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gYGZhaWxlZC4ke2Vycm9yfWApO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3Qgc2hvd1BvcHVwID0gYXN5bmMgKGlkbWVhbCkgPT4ge1xuICBjb25zdCBjb21tZW50c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb21tZW50c0Rpdi5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgbGV0IGNvbW1lbnRzID0gJyc7XG4gIGNvbnN0IHR4dFVzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0eHRVc2VyLmNsYXNzTGlzdC5hZGQoJ3R4dFVzZXInKTtcbiAgdHh0VXNlci5wbGFjZWhvbGRlciA9ICdZb3VyIG5hbWUgJztcbiAgY29uc3QgdHh0Q29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHR4dENvbW1lbnQuY2xhc3NMaXN0LmFkZCgndHh0Q29tbWVudCcpO1xuICB0eHRDb21tZW50LnBsYWNlaG9sZGVyID0gJ1lvdXIgY29tbWVudCc7XG4gIGNvbnN0IGJ0blN1Ym1pdENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuU3VibWl0Q29tbWVudC5pbm5lckhUTUwgPSAnU3VibWl0IHlvdXIgY29tbWVudCc7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuXG4gIGNvbnN0IHNob3dDb21tZW50cyA9ICgpID0+IHtcbiAgICBsZXQgcmVzID0gYDxoMj5Db21tZW50cyAoJHtjb21tZW50c0NvdW50KGNvbW1lbnRzKX0pPC9oMj5gO1xuICAgIGlmIChjb21tZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXMgKz0gYCBcbiAgPGRpdiBjbGFzcz1cImNvbW1lbnRzXCI+JHtjb21tZW50cy5tYXAoKGVsKSA9PiBgPGRpdiBjbGFzcz0nY29tbWVudCc+XG4gICAgICA8ZGl2IGNsYXNzPVwidXNlclwiPiAke2VsLnVzZXJuYW1lfSA8c3Bhbj4ke2VsLmNyZWF0aW9uX2RhdGV9PC9zcGFuPiA8L2Rpdj5cbiAgICAgIDxwPiR7ZWwuY29tbWVudH08L3A+XG4gICAgPC9kaXY+YCkuam9pbignJyl9PC9kaXY+XG4gIGA7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0Q29tbWVudCA9IChpZG1lYWwpID0+IHtcbiAgICBpZiAodHh0VXNlci52YWx1ZSA9PT0gJycpIHtcbiAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gJyc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdmYWlsZWQnKTtcbiAgICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSAnUGxlYXNlIGVudGVyIHlvdSBuYW1lJztcbiAgICAgIH0sIDEwMCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBpZiAodHh0Q29tbWVudC52YWx1ZSA9PT0gJycpIHtcbiAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gJyc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdmYWlsZWQnKTtcbiAgICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSAnUGxlYXNlIGVudGVyIHlvdSBjb21tZW50JztcbiAgICAgIH0sIDEwMCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGlkbWVhbCxcbiAgICAgIHVzZXJuYW1lOiB0eHRVc2VyLnZhbHVlLFxuICAgICAgY29tbWVudDogdHh0Q29tbWVudC52YWx1ZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IGRhdGEsXG4gICAgfTtcblxuICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gJyc7XG4gICAgYnRuU3VibWl0Q29tbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgYnRuU3VibWl0Q29tbWVudC5pbm5lckhUTUwgPSAnU3VibWl0dGluZyAuLi4gJztcbiAgICBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHthcHBpZH0vY29tbWVudHNgLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgLnRoZW4oYXN5bmMgKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0ID09PSAnQ3JlYXRlZCcpIHtcbiAgICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICBtZXNzYWdlLmlubmVySFRNTCA9ICdZb3VyIGNvbW1lbnQgd2FzIHNhdmVkIHN1c2VjY2Z1bGx5Lic7XG4gICAgICAgICAgY29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50cyhpZG1lYWwpO1xuICAgICAgICAgIGNvbW1lbnRzRGl2LmlubmVySFRNTCA9IHNob3dDb21tZW50cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZmFpbGVkJyk7XG4gICAgICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSAnQW4gZXJyb3IgYWNjdXJlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlcic7XG4gICAgICAgIH1cbiAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICB0eHRVc2VyLnZhbHVlID0gJyc7XG4gICAgICAgIHR4dENvbW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgYnRuU3VibWl0Q29tbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBidG5TdWJtaXRDb21tZW50LmlubmVySFRNTCA9ICdTdWJtaXQgeW91ciBjb21tZW50JztcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncG9wdXAtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcblxuICBwb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZChwb3B1cCk7XG5cbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ1dHRvbicpO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3B1cENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBidG5TdWJtaXRDb21tZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3VibWl0Q29tbWVudChpZG1lYWwpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gIH0pO1xuICBwb3B1cC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChwb3B1cENvbnRhaW5lcik7XG5cbiAgY29uc3QgbWVhbERldGFpbCA9IGF3YWl0IGdldE1lYWxEZXRhaWwoaWRtZWFsKTtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNyYyA9IG1lYWxEZXRhaWwubWVhbHNbMF0uc3RyTWVhbFRodW1iO1xuICBwb3B1cC5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5mb0Rpdi5pbm5lckhUTUwgPSBgXG4gIDxoMj4ke21lYWxEZXRhaWwubWVhbHNbMF0uc3RyTWVhbH08L2gyPlxuICAke21lYWxEZXRhaWwubWVhbHNbMF0uc3RySW5zdHJ1Y3Rpb25zLnNwbGl0KC9TVEVQIFswLTldIC0vKS5tYXAoKGVsLCBpKSA9PiAoaSA+IDAgPyBgPHAgY2xhc3M9J2luc3RydWN0aW9uJz4ke2l9IC0gJHtlbH08L3A+YCA6ICcnKSkuam9pbignJyl9XG4gIDxkaXYgY2xhc3M9XCJ0YWdzXCI+JHsobWVhbERldGFpbC5tZWFsc1swXS5zdHJUYWdzIHx8ICcnKS5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IChlbCAhPT0gJycgPyBgPGRpdiBjbGFzcz0ndGFnJz4ke2VsfTwvZGl2PmAgOiAnJykpLmpvaW4oJycpfTwvZGl2PlxuICBgO1xuICBwb3B1cC5hcHBlbmRDaGlsZChpbmZvRGl2KTtcblxuICBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzKGlkbWVhbCk7XG4gIGNvbW1lbnRzRGl2LmlubmVySFRNTCA9IHNob3dDb21tZW50cygpO1xuXG4gIHBvcHVwLmFwcGVuZENoaWxkKGNvbW1lbnRzRGl2KTtcblxuICBjb25zdCBzdWJtaXRDb21tZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBzdWJtaXRDb21tZW50VGl0bGUuaW5uZXJIVE1MID0gJ0FkZCB5b3VyIGNvbW1lbnQnO1xuICBwb3B1cC5hcHBlbmQoc3VibWl0Q29tbWVudFRpdGxlKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQodHh0VXNlcik7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHR4dENvbW1lbnQpO1xuICBwb3B1cC5hcHBlbmRDaGlsZChidG5TdWJtaXRDb21tZW50KTtcbiAgYnRuU3VibWl0Q29tbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN1Ym1pdENvbW1lbnQoaWRtZWFsKSk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd1BvcHVwOyIsImNvbnN0IG1lYWxzQXBpID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9maWx0ZXIucGhwP2E9Y2hpbmVzZSc7XG5jb25zdCBjb3VudGVyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChtZWFsc0FwaSk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ganNvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXI7XG4iLCJjb25zdCBsaWtlc1VybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy90TFZkN3RiMEJRcEhZTEZTR1RxSy9saWtlcyc7XG5jb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcgfSk7XG5leHBvcnQgY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsaWtlc1VybCk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGFkZExpa2VzID0gYXN5bmMgKGUpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMV0uaWQ7XG4gIGNvbnN0IGZldGNoTGlrZXMgPSBhd2FpdCBmZXRjaChsaWtlc1VybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGVsZW1lbnQsXG4gICAgfSksXG4gICAgaGVhZGVyczogaGVhZGVyLFxuICB9KTtcbiAgcmV0dXJuIGZldGNoTGlrZXM7XG59OyIsImNvbnN0IGdldE1lYWxzID0gKCkgPT4ge1xuICBjb25zdCBtZWFscyA9IGZldGNoKCdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvZmlsdGVyLnBocD9hPWNoaW5lc2UnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHJlc3VsdClcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBgZmFpbGVkLiR7ZXJyb3J9YCk7XG5cbiAgcmV0dXJuIG1lYWxzO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldE1lYWxzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2Fzc2V0cy9sb2dvLnBuZyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBnZXRNZWFscyBmcm9tICcuL21vZHVsZXMvbWVhbHMuanMnO1xuaW1wb3J0IHNob3dQb3B1cCBmcm9tICcuL21vZHVsZXMvY29tbWVudHMuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZXMsIGFkZExpa2VzIH0gZnJvbSAnLi9tb2R1bGVzL2xpa2UuanMnO1xuaW1wb3J0IGNvdW50ZXIgZnJvbSAnLi9tb2R1bGVzL2l0ZW1Db3VudGVyLmpzJztcblxuY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlciAubG9nbycpO1xubG9nby5zcmMgPSBMb2dvO1xuXG5jb25zdCBkaXNwbGF5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWxpc3QnKTtcblxuYXN5bmMgZnVuY3Rpb24gbG9hZE1lYWxzKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0TWVhbHMoKTtcbiAgY29uc3QgdGhlTWVhbHMgPSBkYXRhLm1lYWxzO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlTWVhbHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkaXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2SXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgZGl2SXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWcgc3JjPVwiJHt0aGVNZWFsc1tpXS5zdHJNZWFsVGh1bWJ9XCIgYWx0PVwiXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj4ke3RoZU1lYWxzW2ldLnN0ck1lYWx9PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlcy1kaXZcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImljb25cIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJQcmVzcyB0byBsaWtlIHRoaXMgZm9vZFwiPiYjMTAwODQ7PC9idXR0b24+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibGlrZXNcIiBpZD1cIiR7dGhlTWVhbHNbaV0uaWRNZWFsfVwiPjwvcD5MaWtlc1xuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzcz1cIml0ZW0tZGF0YVwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJjb21tZW50XCIgaHJlZj1cIlwiPkNvbW1lbnQ8L2E+XG4gICAgICAgICAgICA8YSBjbGFzcz1cInJlc2VydmVcIiBocmVmPVwiXCI+UmVzZXJ2YXRpb248L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgYDtcbiAgICBjb25zdCBidG5Db21tZW50ID0gZGl2SXRlbS5xdWVyeVNlbGVjdG9yKCcuY29tbWVudCcpO1xuICAgIGJ0bkNvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2hvd1BvcHVwKHRoZU1lYWxzW2ldLmlkTWVhbCk7XG4gICAgfSk7XG4gICAgZGlzcGxheUxpc3QuYXBwZW5kQ2hpbGQoZGl2SXRlbSk7XG4gIH1cblxuICBnZXRMaWtlcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgbGlrZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaWtlc1tpXS50ZXh0Q29udGVudCA9IGBcbiAgICAgICAgJHtyZXNwb25zZVtpXS5saWtlc31cbiAgICAgIGA7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29uJyk7XG4gIGljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGFkZExpa2VzKGUpO1xuICAgICAgY29uc3QgbnVtT2ZMaWtlcyA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMV07XG4gICAgICBudW1PZkxpa2VzLnRleHRDb250ZW50ID0gK251bU9mTGlrZXMudGV4dENvbnRlbnQgKyAxO1xuICAgIH0pO1xuICB9KTtcblxuICBjb3VudGVyKCkudGhlbigoKSA9PiB7XG4gICAgY29uc3QgY291bnRlciA9IHRoZU1lYWxzLmxlbmd0aDtcbiAgICBjb25zdCBjb3VudEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWl0ZW0tdGl0bGUyJyk7XG4gICAgY291bnRIZWFkZXIudGV4dENvbnRlbnQgPSBgXG4gICAgRGlzY292ZXIgb3VyICR7Y291bnRlcn0gbWVhbHMgYXZhaWxhYmxlIG9uIHRoZSBtZW51XG4gICAgYDtcbiAgfSk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBsb2FkTWVhbHMoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9