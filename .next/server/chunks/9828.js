"use strict";
exports.id = 9828;
exports.ids = [9828];
exports.modules = {

/***/ 9828:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var _PortfolioItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7920);
/* harmony import */ var _data_portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2536);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9735);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function PortfolioSwiper({ desktop , mobile , stylePortfolio , tablet , className , parallaxImage , styleBox , parallaxContent , blur , // @ts-ignore
children , ...restProps }) {
    const dataPortfolio = (0,_data_portfolio__WEBPACK_IMPORTED_MODULE_4__/* .getPortfolioData */ .jq)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
        modules: [
            swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,
            swiper__WEBPACK_IMPORTED_MODULE_2__.Parallax
        ],
        pagination: {
            clickable: true,
            el: ".swiper-pagination",
            dynamicBullets: true
        },
        spaceBetween: 30,
        slidesPerView: 1,
        breakpoints: {
            992: desktop,
            768: tablet,
            576: mobile
        },
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_5__/* .dsnCN */ .gU)("work", className, stylePortfolio, blur && "has-blur"),
        ...restProps,
        children: [
            dataPortfolio.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PortfolioItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        portoDetails: item,
                        textButton: "View Case",
                        parallaxImage: parallaxImage,
                        parallaxContent: parallaxContent,
                        styleBox: styleBox
                    })
                }, index)),
            children
        ]
    });
}
PortfolioSwiper.defaultProps = {
    desktop: {
        slidesPerView: 3
    },
    tablet: {
        slidesPerView: 2
    },
    mobile: {
        slidesPerView: 2
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortfolioSwiper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;