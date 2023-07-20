"use strict";
exports.id = 6331;
exports.ids = [6331];
exports.modules = {

/***/ 6331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9735);
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7091);
/* harmony import */ var _header_BgDot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2643);




const NextContent = {
    title: "LET'S WORK TOGETHER",
    /* subtitle: `Don't be weird.`, */ buttonText: "Contact me"
};
function NextPage({ className , ...restProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)("next-page p-relative d-flex align-items-center", className),
        ...restProps,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container w-100",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "c-wrapper d-flex justify-content-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex flex-column",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "section-title max-w750 mt-15",
                            children: NextContent.title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "button-box d-flex justify-content-end align-items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            href: "/contact",
                            className: "button-brutalist mr-15 ",
                            borderStyle: false,
                            borderRadius: true,
                            transitionPage: {
                                title: NextContent.buttonText
                            },
                            children: NextContent.buttonText
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextPage);


/***/ })

};
;