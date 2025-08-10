"use strict";
self["webpackHotUpdatems1_weather_journal_app"]("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/styles/style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/styles/style.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}

body{
    background: white;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}


.nunito-sans-font {
  font-family: "Nunito Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-variation-settings:
    "wdth" 100,
    "YTLC" 500;
}

#app{
    display: grid;
    grid-template-columns: 40% 60%;
    height:90%;
    width: 80%;
    justify-content: center;
    font-size: 20px;
    font-family: 'Oswald', sans-serif;
    grid-template-areas: 
    "header header"
    "main main"
    "footer footer";
    border: 1px solid;
    box-shadow: 5px 5px 7px gray;
}

#app > div {
    display: flex;
}

.headline {
    grid-area: header;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    font-size: 3rem;
    letter-spacing: 0.5rem;
    padding: 20px;
    font-weight: 500;
}

#app > div.main {
    grid-area: main;
    background-color: #FDECEC;
    margin: 10px 20px;
    height: 400px;
    display: grid;
    grid-template-columns: 45% 55%;
    padding: 20px;
}

figure {
  display: flex;
  flex-flow: column;
  padding: 5px;
  width: 100%;
  height: 350px;
  margin: auto;
  align-items: center;
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}


.footer {
    grid-area: footer;
    justify-content: center;
    align-items: start;
    height: 50px;
}

.footer p {
    margin: 0px;
}

/* Reset style for HTML element on active to have no border*/
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
/* Style for Placeholder Text*/
::placeholder { /* Firefox, Chrome, Opera */ 
    color: #f0d43a; 
    font-family: 'Oswald', sans-serif;

} 
  
:-ms-input-placeholder { /* Internet Explorer 10-11 */ 
    color: #f0d43a; 
    font-family: 'Oswald', sans-serif;

} 
  
::-ms-input-placeholder { /* Microsoft Edge */ 
    color: #f0d43a; 
    font-family: 'Oswald', sans-serif;

} 

@media (max-width:900px) {
    #app > div.main {
    height: auto;
    grid-template-columns: 100%;
    padding: 10px;
}
}`, "",{"version":3,"sources":["webpack://./frontend/styles/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;AACA;EACE,mBAAmB;AACrB;;AAEA;IACI,iBAAiB;IACjB,0DAA0D;IAC1D,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;;AAGA;EACE,sCAAsC;EACtC,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB;;cAEY;AACd;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,UAAU;IACV,UAAU;IACV,uBAAuB;IACvB,eAAe;IACf,iCAAiC;IACjC;;;mBAGe;IACf,iBAAiB;IACjB,4BAA4B;AAChC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,sBAAsB;IACtB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,iBAAiB;IACjB,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;;AAGA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA,4DAA4D;AAC5D;;;;IAII,aAAa;AACjB;AACA,8BAA8B;AAC9B,gBAAgB,2BAA2B;IACvC,cAAc;IACd,iCAAiC;;AAErC;;AAEA,yBAAyB,4BAA4B;IACjD,cAAc;IACd,iCAAiC;;AAErC;;AAEA,0BAA0B,mBAAmB;IACzC,cAAc;IACd,iCAAiC;;AAErC;;AAEA;IACI;IACA,YAAY;IACZ,2BAA2B;IAC3B,aAAa;AACjB;AACA","sourcesContent":["html {\n  box-sizing: border-box;\n}\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nbody{\n    background: white;\n    font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n\n\n.nunito-sans-font {\n  font-family: \"Nunito Sans\", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 300;\n  font-style: normal;\n  font-variation-settings:\n    \"wdth\" 100,\n    \"YTLC\" 500;\n}\n\n#app{\n    display: grid;\n    grid-template-columns: 40% 60%;\n    height:90%;\n    width: 80%;\n    justify-content: center;\n    font-size: 20px;\n    font-family: 'Oswald', sans-serif;\n    grid-template-areas: \n    \"header header\"\n    \"main main\"\n    \"footer footer\";\n    border: 1px solid;\n    box-shadow: 5px 5px 7px gray;\n}\n\n#app > div {\n    display: flex;\n}\n\n.headline {\n    grid-area: header;\n    flex-direction: row;\n    justify-content: start;\n    align-items: center;\n    font-size: 3rem;\n    letter-spacing: 0.5rem;\n    padding: 20px;\n    font-weight: 500;\n}\n\n#app > div.main {\n    grid-area: main;\n    background-color: #FDECEC;\n    margin: 10px 20px;\n    height: 400px;\n    display: grid;\n    grid-template-columns: 45% 55%;\n    padding: 20px;\n}\n\nfigure {\n  display: flex;\n  flex-flow: column;\n  padding: 5px;\n  width: 100%;\n  height: 350px;\n  margin: auto;\n  align-items: center;\n}\n\nimg {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n\n\n.footer {\n    grid-area: footer;\n    justify-content: center;\n    align-items: start;\n    height: 50px;\n}\n\n.footer p {\n    margin: 0px;\n}\n\n/* Reset style for HTML element on active to have no border*/\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n/* Style for Placeholder Text*/\n::placeholder { /* Firefox, Chrome, Opera */ \n    color: #f0d43a; \n    font-family: 'Oswald', sans-serif;\n\n} \n  \n:-ms-input-placeholder { /* Internet Explorer 10-11 */ \n    color: #f0d43a; \n    font-family: 'Oswald', sans-serif;\n\n} \n  \n::-ms-input-placeholder { /* Microsoft Edge */ \n    color: #f0d43a; \n    font-family: 'Oswald', sans-serif;\n\n} \n\n@media (max-width:900px) {\n    #app > div.main {\n    height: auto;\n    grid-template-columns: 100%;\n    padding: 10px;\n}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cc6bd30e6688eb769f26")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.6d919400260f93c95173.hot-update.js.map