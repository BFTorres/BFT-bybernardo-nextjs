"use strict";
exports.id = 8067;
exports.ids = [8067];
exports.modules = {

/***/ 8067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9735);




function ButtonPopup({ href , className , group , width , height , textBefore , textAfter , option , ...restProps }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__.Fancybox.bind("[data-fancybox]", option || {});
        return ()=>{
            _fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__.Fancybox.destroy();
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: href && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: href,
            "data-fancybox": group || "",
            "data-width": width,
            "data-height": height,
            className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_3__/* .dsnCN */ .gU)("play-btn d-flex align-items-center justify-content-center text-center vid", className),
            ...restProps,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text",
                    children: textBefore
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "play-icon d-flex align-items-center justify-content-center  text-center",
                    "data-dsn": "parallax",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fill: "#000",
                            d: "M7 17.259V6.741a1 1 0 0 1 1.504-.864l9.015 5.26a1 1 0 0 1 0 1.727l-9.015 5.259A1 1 0 0 1 7 17.259Z"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text",
                    children: textAfter
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonPopup);


/***/ })

};
;