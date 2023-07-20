"use strict";
(() => {
var exports = {};
exports.id = 7673;
exports.ids = [7673];
exports.modules = {

/***/ 5514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5760);

function handler(req, res) {
    const { slug  } = req.query, portfolio = _index__WEBPACK_IMPORTED_MODULE_0__.portfolioData.find((item)=>item.slug === slug);
    res.status(200).json({
        portfolio
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5760], () => (__webpack_exec__(5514)));
module.exports = __webpack_exports__;

})();