"use strict";
exports.id = 416;
exports.ids = [416];
exports.modules = {

/***/ 416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9735);
/* harmony import */ var _layout_DsnGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6878);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);




const data = [
    {
        src: "/img/logo/1.png"
    },
    {
        src: "/img/logo/2.png"
    },
    {
        src: "/img/logo/3.png"
    },
    {
        src: "/img/logo/4.png"
    },
    {
        src: "/img/logo/5.png"
    },
    {
        src: "/img/logo/6.png"
    },
    {
        src: "/img/logo/1.png"
    },
    {
        src: "/img/logo/3.png"
    }
];
function BrandClient({ className , ...retsProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)("brand-client wrapper-client", className),
        ...retsProps,
        children: data && data.map(($item, $index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "logo-box",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "logo-box-inner p-relative",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: $item?.src,
                        alt: "",
                        width: 180,
                        height: 54
                    })
                })
            }, $index))
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandClient);


/***/ })

};
;