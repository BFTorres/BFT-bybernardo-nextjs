"use strict";
exports.id = 6401;
exports.ids = [6401];
exports.modules = {

/***/ 6401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9735);





const Bg = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
        height : ${(props)=>props.theme.height};
        position: relative;
`;
// eslint-disable-next-line react/display-name
const BgImage = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ src , video , height ="80vh" , overlay =4 , imageOnly , alt , className ="" , ...restProps }, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Bg, {
        theme: {
            height: height
        },
        "data-overlay": overlay,
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_4__/* .dsnCN */ .gU)("image-bg", className),
        ...restProps,
        ref: ref,
        children: [
            !video && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: src,
                className: "cover-bg-img",
                alt: alt,
                fill: true,
                sizes: "(max-width: 768px) 100vw,(max-width: 1200px) 70vw,100vw"
            }),
            video && !imageOnly && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                className: "cover-bg-img",
                src: src,
                preload: "none",
                autoPlay: true,
                muted: true,
                playsInline: true,
                ...video
            }),
            video && imageOnly && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: "cover-bg-img",
                src: video.poster,
                fill: true,
                alt: alt,
                sizes: "(max-width: 768px) 100vw,(max-width: 1200px) 70vw,100vw"
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BgImage);


/***/ })

};
;