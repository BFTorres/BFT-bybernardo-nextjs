"use strict";
exports.id = 907;
exports.ids = [907];
exports.modules = {

/***/ 907:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var _BlogItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4648);
/* harmony import */ var _data_blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2665);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9735);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function BlogSwiper({ desktop , mobile , tablet , className , blur , parallaxImage , parallaxContent , hideMetaData , children , ...restProps }) {
    const dataPortfolio = (0,_data_blog__WEBPACK_IMPORTED_MODULE_4__/* .getBlogData */ .Tf)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
        modules: [
            swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,
            swiper__WEBPACK_IMPORTED_MODULE_2__.Parallax
        ],
        pagination: {
            clickable: true,
            el: ".swiper-pagination"
        },
        spaceBetween: 30,
        slidesPerView: 1,
        breakpoints: {
            992: desktop,
            768: tablet,
            576: mobile
        },
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_5__/* .dsnCN */ .gU)("our-blog", className, blur && "has-blur"),
        ...restProps,
        children: [
            dataPortfolio.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BlogItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        portoDetails: item,
                        textButton: "Load More",
                        parallaxImage: parallaxImage,
                        metaData: hideMetaData,
                        parallaxContent: parallaxContent
                    })
                }, index)),
            children
        ]
    });
}
BlogSwiper.defaultProps = {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogSwiper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;