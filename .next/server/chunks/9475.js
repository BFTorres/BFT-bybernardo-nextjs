"use strict";
exports.id = 9475;
exports.ids = [9475];
exports.modules = {

/***/ 7091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9735);
/* harmony import */ var _hooks_DsnLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1688);



function Button({ // @ts-ignore
className , borderRadius , children , href , LinkProps , transitionPage =false , borderStyle ="border-color-heading-color" , ...restProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_hooks_DsnLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        transitionPage: transitionPage,
        href: href,
        ...LinkProps,
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)("dsn-button", className, borderRadius && "border-rdu"),
        ...restProps,
        children: [
            borderStyle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)("dsn-border", borderStyle, borderRadius && "dsn-border-rdu")
            }),
            children
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 9849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9735);
/* harmony import */ var _layout_DsnGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6878);
/* harmony import */ var _contact_ContactForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3007);
/* harmony import */ var _contact_InfoBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(242);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






function ModalContact({ className ="" , ...restProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)("section-padding", className),
        ...restProps,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            col: 2,
            colTablet: 1,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contact_ContactForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contact_InfoBox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    className: "align-self-center"
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalContact);


/***/ }),

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
    title: "Would you like more information \nor do you have a question?",
    subtitle: `Don't be weird.`,
    buttonText: "Contact Us"
};
function NextPage({ className , ...restProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)("next-page p-relative d-flex align-items-center", className),
        ...restProps,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_BgDot__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_BgDot__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                rightPosition: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container w-100",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "c-wrapper d-flex justify-content-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex flex-column",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "sub-heading line-shape line-shape-after ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "line-bg-left",
                                        children: NextContent.subtitle
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "section-title max-w750 mt-15",
                                    children: NextContent.title
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "button-box d-flex justify-content-end align-items-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                href: "/contact",
                                className: "mr-15 line-head",
                                borderStyle: "border-color-heading-color",
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
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextPage);


/***/ })

};
;