"use strict";
exports.id = 7920;
exports.ids = [7920];
exports.modules = {

/***/ 7920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2536);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9735);
/* harmony import */ var _Image_BgImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6401);
/* harmony import */ var _meta_MetaPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3233);
/* harmony import */ var _hooks_DsnLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1688);







function PortfolioItem({ portoDetails , styleBox , height ="100%" , imageOnly , className , parallaxContent , parallaxImage  }) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const isLine = styleBox === "line";
    const isCorner = styleBox === "corner";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const video = ref.current.querySelector("video");
        if (!video) return;
        video.pause();
        const portItem = ref.current, mouseEnter = ()=>video.play(), mouseLeve = ()=>video.pause();
        portItem.addEventListener("mouseenter", mouseEnter);
        portItem.addEventListener("mouseleave", mouseLeve);
        return ()=>{
            if (!video) return;
            portItem.removeEventListener("mouseenter", mouseEnter);
            portItem.removeEventListener("mouseleave", mouseLeve);
        };
    }); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_3__/* .dsnCN */ .gU)("portfolio-item work-item", className),
        ref: ref,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "inner-img box-img",
                ...parallaxImage,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_hooks_DsnLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    href: (0,_data_portfolio__WEBPACK_IMPORTED_MODULE_2__/* .getPortfolioLink */ .p8)(portoDetails),
                    className: "w-100 h-100 link-item",
                    transitionPage: {
                        title: portoDetails.title
                    },
                    children: [
                        isLine && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "line line-top"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "line line-bottom"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "line line-left"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "line line-right"
                                })
                            ]
                        }),
                        isCorner && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "corner corner-left-top"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "corner corner-right-bottom"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image_BgImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            className: "dsn-swiper-parallax-transform ",
                            src: portoDetails.src,
                            video: portoDetails.video,
                            alt: portoDetails.title,
                            overlay: portoDetails.overlay,
                            height: height,
                            imageOnly: imageOnly
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "info-text box-content",
                ...parallaxContent,
                children: [
                    portoDetails.category && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_meta_MetaPost__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        category: portoDetails.category
                    }),
                    portoDetails.title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "title-block sec-title mt-20",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hooks_DsnLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: (0,_data_portfolio__WEBPACK_IMPORTED_MODULE_2__/* .getPortfolioLink */ .p8)(portoDetails),
                            transitionPage: {
                                title: portoDetails.title
                            },
                            children: portoDetails.title
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(PortfolioItem));


/***/ })

};
;