"use strict";
exports.id = 3042;
exports.ids = [3042];
exports.modules = {

/***/ 3042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9735);



function TitleSection({ className , classTitle , tag: Tag = "h2" , defaultSpace =true , children , description , classDesc , classDesInner , dirDescription ="before"  }) {
    const P = ()=>description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_2__/* .dsnCN */ .gU)("sub-heading", classDesc),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_2__/* .dsnCN */ .gU)(classDesInner),
                children: description
            })
        });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_2__/* .dsnCN */ .gU)("title-heading d-flex flex-column", className, defaultSpace && "mb-70"),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    dirDescription === "before" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(P, {}),
                    children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
                        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_2__/* .dsnCN */ .gU)("section-title  title-cap", classTitle),
                        children: typeof children === "function" ? children() : children
                    }),
                    dirDescription === "after" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(P, {})
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleSection);


/***/ })

};
;