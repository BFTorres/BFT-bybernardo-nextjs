"use strict";
exports.id = 1610;
exports.ids = [1610];
exports.modules = {

/***/ 1610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ BoxGalleryItem),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9735);
/* harmony import */ var _layout_DsnGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6878);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);






function BoxGallery({ children , className , images , options , ...restProps }) {
    const target = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const generateId = (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_3__/* .generateString */ .xH)(5);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__.Fancybox.bind("[data-fancybox]", options);
        return ()=>{
            _fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__.Fancybox.destroy();
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_3__/* .dsnCN */ .gU)("dsn-box-gallery", className),
        ref: target,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            ...restProps,
            children: [
                images && images.map(({ src , alt , caption , groupPopup  }, index)=>// @ts-ignore
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BoxGalleryItem, {
                        src: src,
                        alt: alt,
                        caption: caption,
                        groupPopup: groupPopup || generateId
                    }, index)),
                children
            ]
        })
    });
}
BoxGallery.defaultProps = {
    options: {
        infinite: false
    }
};
function BoxGalleryItem({ src , caption , groupPopup , className , ...restProps }) {
    return src && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `p-relative  ${className || ""}`,
        ...restProps,
        "data-src": src,
        "data-caption": caption,
        "data-fancybox": groupPopup || "",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-relative over-hidden h-v-60",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                    className: "cover-bg-img",
                    src: src,
                    alt: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_3__/* .dsnCN */ .gU)("", caption),
                    fill: true,
                    sizes: "(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw"
                })
            }),
            caption && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "caption",
                children: caption
            })
        ]
    });
}
BoxGallery.item = BoxGalleryItem;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxGallery);


/***/ })

};
;