"use strict";
(() => {
var exports = {};
exports.id = 2247;
exports.ids = [2247];
exports.modules = {

/***/ 1013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6964);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9735);



function BoxRight({ className , children , ...restProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "box-seat box-seat-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "box-im h-100",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    height: "100%",
                    overlay: 2,
                    ...restProps
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_2__/* .dsnCN */ .gU)("pro-text ml-auto box-padding", className),
                children: children
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxRight);


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


/***/ }),

/***/ 854:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4653);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4146);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Service__WEBPACK_IMPORTED_MODULE_2__]);
_Service__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ServiceTow = ({ className , ...restProps })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].grid */ .Z.grid, {
        col: 2,
        colTablet: 2,
        colMobile: 1,
        className: className,
        data: (0,_data_service__WEBPACK_IMPORTED_MODULE_3__/* .getServiceData */ .Y)().slice(0, 4),
        backgroundColor: "background-section",
        styleBox: "corner",
        ...restProps
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceTow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2770:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1779);
/* harmony import */ var _components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3042);
/* harmony import */ var _components_header_HeaderNormal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6860);
/* harmony import */ var _components_box_information_BoxRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1013);
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7091);
/* harmony import */ var _components_services_grid_ServiceTow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(854);
/* harmony import */ var _components_portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1172);
/* harmony import */ var _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8788);
/* harmony import */ var _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4628);
/* harmony import */ var _components_brand_client_BrandClient__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(416);
/* harmony import */ var _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(907);
/* harmony import */ var _components_next_NextPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6331);
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1084);
/* harmony import */ var _components_model_right_ModalContact__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9849);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_Layout__WEBPACK_IMPORTED_MODULE_2__, _components_services_grid_ServiceTow__WEBPACK_IMPORTED_MODULE_7__, _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_9__, _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_10__, _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_12__, _components_footer_Footer__WEBPACK_IMPORTED_MODULE_14__]);
([_layout_Layout__WEBPACK_IMPORTED_MODULE_2__, _components_services_grid_ServiceTow__WEBPACK_IMPORTED_MODULE_7__, _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_9__, _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_10__, _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_12__, _components_footer_Footer__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















function Corporate() {
    _components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"].defaultProps */ .Z.defaultProps = {
        className: "align-items-center text-right text-uppercase",
        classDesc: "theme-color  line-shape line-shape-before text-uppercase",
        classDesInner: "background-section pt-5 pb-5 pl-10 pr-10",
        classTitle: "line-bg-left",
        dirDescription: "after"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        modelRight: {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_model_right_ModalContact__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
            propsModal: {
                textBtn: "Contact"
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_16___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Corporate | Eremia Creative Portfolio Multi-Purpose"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_header_HeaderNormal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "align-content-center text-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: "title text-uppercase",
                        children: [
                            " digital Creative ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            " Agency "
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "subtitle p-relative line-shape mt-30",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "pl-10 pr-10 background-section",
                            children: "DESIGN STUDIO"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-relative",
                "data-dsn-title": "About",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_box_information_BoxRight__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    className: "v-light",
                    src: "/img/corporate.jpg",
                    alt: "",
                    parallaxFrom: {
                        scale: 1.2
                    },
                    parallax: {
                        scale: 1
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            className: "align-items-start text-right mb-50",
                            description: "Services",
                            defaultSpace: false,
                            children: "Big Data Services"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-15",
                            children: "We are Leading International Consulting Specializingin Business & Financial Investment."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-15",
                            children: "On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by & charms of pleasure of the moment so blinded."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "A system that young people around the world with a club culture and techno enthusiasts feel identified. We generated a simple logo that is the basis for generating a geometric and liquid system. "
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            className: "mt-30",
                            href: "about",
                            borderStyle: "border-color-theme-color",
                            borderRadius: true,
                            children: "About Us"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container section-margin",
                "data-dsn-title": "our Services",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        description: "Our Services",
                        children: "Branding Agency"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_services_grid_ServiceTow__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: "icon-left"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container section-margin",
                "data-dsn-title": "our Work",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        description: "Our Works",
                        children: "AWESOME DESIGNS"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        stylePortfolio: "work-classic",
                        useFilter: true,
                        filterClass: "text-center",
                        styleBox: "line",
                        col: 3,
                        colTablet: 2,
                        colMobile: 1,
                        rowGapMobile: 50,
                        colGap: 50,
                        rowGap: 80
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container section-margin",
                "data-dsn-title": "Testimonial",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        description: "Feedback",
                        children: "What People Saying"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        className: "text-center",
                        styleBox: "corner",
                        skin: [
                            "testimonials-personal",
                            "box-line"
                        ],
                        backgroundColor: "background-section",
                        centeredSlides: true,
                        desktop: {
                            slidesPerView: 3
                        },
                        tablet: {
                            slidesPerView: 1
                        },
                        mobile: {
                            slidesPerView: 1
                        },
                        speed: 1000,
                        grabCursor: true,
                        loop: true,
                        loopedSlides: 2,
                        parallax: true,
                        parallaxImage: {
                            "data-swiper-parallax-scale": 0.7
                        },
                        parallaxContent: {
                            "data-swiper-parallax-opacity": 0,
                            "data-swiper-parallax": "30%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            className: `justify-content-between dsn-container mt-30`
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container section-margin",
                "data-dsn-title": "our Blog",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        description: "Lasts post",
                        children: "Latest And Greatest Post"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        className: "our-blog-classic",
                        hideMetaData: [
                            "description"
                        ],
                        grabCursor: true,
                        desktop: {
                            spaceBetween: 30,
                            slidesPerView: 3
                        },
                        tablet: {
                            centeredSlides: false,
                            slidesPerView: 2
                        },
                        mobile: {
                            spaceBetween: 0,
                            slidesPerView: 1
                        },
                        centeredSlides: true,
                        loop: true,
                        parallax: true,
                        speed: 1200,
                        watchSlidesProgress: true,
                        loopedSlides: 2,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            className: `justify-content-between dsn-container mt-30`
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "container section-margin",
                "data-dsn-title": "our clients",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        className: `align-items-center text-center`,
                        description: "Our clients",
                        children: "Successful, Our Reputation"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_brand_client_BrandClient__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        col: 4,
                        colTablet: 2,
                        colGap: 0,
                        rowGap: 0
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_next_NextPage__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                className: "section-padding border-top background-section"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                className: "background-section"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Corporate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@emailjs/browser");

/***/ }),

/***/ 9583:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons/faShareAlt");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 5382:
/***/ ((module) => {

module.exports = require("isotope-layout/js/isotope");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2274:
/***/ ((module) => {

module.exports = require("smooth-scrollbar");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 303:
/***/ ((module) => {

module.exports = import("@fortawesome/free-brands-svg-icons");;

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9210,9403,1664,3121,5675,4597,1566,3233,6401,3042,1688,4396,2536,4425,2407,9475,4648,7920,6964,2055,7270,4628,8788,1172,907,416], () => (__webpack_exec__(2770)));
module.exports = __webpack_exports__;

})();