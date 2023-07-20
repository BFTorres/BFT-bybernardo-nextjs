"use strict";
exports.id = 3476;
exports.ids = [3476];
exports.modules = {

/***/ 9804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BlogItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4648);
/* harmony import */ var _data_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2665);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9735);
/* harmony import */ var _layout_DsnGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6878);





function BlogSwiper({ className , hideMetaData , styleBlog , ...restProps }) {
    const dataPortfolio = (0,_data_blog__WEBPACK_IMPORTED_MODULE_2__/* .getBlogData */ .Tf)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_3__/* .dsnCN */ .gU)("our-blog", className, styleBlog),
        ...restProps,
        children: dataPortfolio.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BlogItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                portoDetails: item,
                textButton: "Load More",
                metaData: hideMetaData
            }, index))
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogSwiper);


/***/ }),

/***/ 6860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9735);
/* harmony import */ var _BgDot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2643);



function HeaderNormal({ className , tag: Tag = "header" , container ="dsn-container" , backgroundColor , children , ...restProps }) {
    return(// @ts-ignore
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tag, {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)("header-normal", backgroundColor),
        style: {
            padding: "160px 0"
        },
        ...restProps,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BgDot__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)(container, "h-100"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)("content-hero p-relative d-flex flex-column", className),
                    children: children
                })
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderNormal);


/***/ })

};
;