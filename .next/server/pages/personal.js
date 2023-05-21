"use strict";
(() => {
var exports = {};
exports.id = 4122;
exports.ids = [4122];
exports.modules = {

/***/ 8308:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9735);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





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
function BrandClient({ className , desktop , mobile , tablet , ...retsProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
        modules: [
            swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
            swiper__WEBPACK_IMPORTED_MODULE_3__.Parallax
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
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)("brand-client wrapper-client", className),
        ...retsProps,
        children: data && data.map(($item, $index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "logo-box",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "logo-box-inner p-relative",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            src: $item?.src,
                            alt: "",
                            width: 180,
                            height: 54
                        })
                    })
                })
            }, $index))
    });
}
BrandClient.defaultProps = {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandClient);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2785:
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




const ServiceOne = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].grid */ .Z.grid, {
        col: 3,
        colTablet: 2,
        colMobile: 1,
        colGap: 15,
        masonry: true,
        className: className,
        data: (0,_data_service__WEBPACK_IMPORTED_MODULE_3__/* .getServiceData */ .Y)(),
        backgroundColor: "background-section",
        styleBox: "line"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceOne);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1779);
/* harmony import */ var _components_header_HeaderFull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4557);
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7091);
/* harmony import */ var _components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3042);
/* harmony import */ var _layout_DsnGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6878);
/* harmony import */ var _components_skill_Skills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9967);
/* harmony import */ var _components_brand_client_BrandClientSwiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8308);
/* harmony import */ var _components_facts_Facts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9594);
/* harmony import */ var _components_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6964);
/* harmony import */ var _components_services_grid_ServiceOne__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2785);
/* harmony import */ var _components_portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1172);
/* harmony import */ var _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8788);
/* harmony import */ var _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4628);
/* harmony import */ var _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(907);
/* harmony import */ var _components_next_NextPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6331);
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1084);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_model_right_ModalContact__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9849);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_Layout__WEBPACK_IMPORTED_MODULE_1__, _components_brand_client_BrandClientSwiper__WEBPACK_IMPORTED_MODULE_7__, _components_services_grid_ServiceOne__WEBPACK_IMPORTED_MODULE_10__, _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_12__, _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_13__, _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_14__, _components_footer_Footer__WEBPACK_IMPORTED_MODULE_16__]);
([_layout_Layout__WEBPACK_IMPORTED_MODULE_1__, _components_brand_client_BrandClientSwiper__WEBPACK_IMPORTED_MODULE_7__, _components_services_grid_ServiceOne__WEBPACK_IMPORTED_MODULE_10__, _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_12__, _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_13__, _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_14__, _components_footer_Footer__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const headerContent = {
    title: `I'M Kerri Deo.`,
    subtitle: `<span class="background-section pl-15 pr-15 pt-5 pb-5 d-inline-block">Welcome</span>`,
    src: "/img/about-intro.jpg"
};
function Personal() {
    _components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"].defaultProps */ .Z.defaultProps = {
        className: "align-items-center text-center",
        classTitle: "text-uppercase"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        modelRight: {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_model_right_ModalContact__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {}),
            propsModal: {
                textBtn: "Contact"
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_19___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Personal  | Eremia Creative Portfolio Multi-Purpose"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_header_HeaderFull__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "container",
                heroContent: headerContent,
                skin: "half-personal",
                overlay: 4,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "pt-30 border-top",
                        children: "Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        href: "/services",
                        className: "mt-30 line-head",
                        borderStyle: "border-color-theme-color",
                        borderRadius: true,
                        children: "About Me"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "about-me container p-relative section-margin",
                "data-dsn-title": "About Me",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        description: "{ HELLO }",
                        children: "About Me"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        col: 2,
                        colTablet: 1,
                        rowGapTablet: 50,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "box-info",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "title-block mb-20",
                                        children: "A Little Bit about Myself"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-15 border-top pt-20",
                                        children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-30 border-bottom pb-20",
                                        children: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        href: "#0",
                                        children: "Download CV"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "box-skills",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_skill_Skills__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skill_Skills__WEBPACK_IMPORTED_MODULE_6__/* .SkillProgressBar */ .mW, {
                                            bgColor: "pattern",
                                            number: 96,
                                            children: "Web Design"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skill_Skills__WEBPACK_IMPORTED_MODULE_6__/* .SkillProgressBar */ .mW, {
                                            bgColor: "pattern",
                                            number: 94,
                                            children: "JavaScript"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skill_Skills__WEBPACK_IMPORTED_MODULE_6__/* .SkillProgressBar */ .mW, {
                                            bgColor: "pattern",
                                            number: 87,
                                            children: "PHP"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_brand_client_BrandClientSwiper__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: "mt-50",
                        grabCursor: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "section-padding p-relative v-dark-head",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        alt: "",
                        src: "/img/header.jpg",
                        overlay: 7,
                        asBackground: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_facts_Facts__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            className: "text-center",
                            col: 4,
                            colTablet: 2
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container section-margin",
                "data-dsn-title": "My Services",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: "align-items-center text-center",
                        description: "{ Our Services }",
                        children: [
                            "We are delivering beautiful ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            " digital products for you."
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_services_grid_ServiceOne__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container section-margin",
                "data-dsn-title": "My Work",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        description: "{ Our Works }",
                        children: "AWESOME DESIGNS"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
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
                "data-dsn-title": "Testimonials",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        description: "{ testimonials }",
                        children: [
                            "What People are ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Saying"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        className: "text-center",
                        skin: [
                            "testimonials-personal",
                            "box-line",
                            "box-half"
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
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            className: `justify-content-between dsn-container mt-30`
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "section-margin",
                "data-dsn-title": "My Blog",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: `container  align-items-center text-center`,
                        description: "{ Lasts post }",
                        children: [
                            "Latest And Greatest ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Post"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        grabCursor: true,
                        desktop: {
                            spaceBetween: 50,
                            slidesPerView: 1.5
                        },
                        tablet: {
                            spaceBetween: 30,
                            slidesPerView: 1.25
                        },
                        mobile: {
                            spaceBetween: 0,
                            slidesPerView: 1
                        },
                        centeredSlides: true,
                        loop: true,
                        blur: true,
                        parallax: true,
                        speed: 1200,
                        watchSlidesProgress: true,
                        loopedSlides: 2,
                        parallaxImage: {
                            "data-swiper-parallax-scale": "0.85"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            className: `justify-content-between dsn-container mt-30`
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_next_NextPage__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                className: "section-padding border-top background-section"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                className: "background-section"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Personal);

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
var __webpack_exports__ = __webpack_require__.X(0, [9210,9403,1664,3121,5675,4597,1566,3233,6401,3042,1688,4396,2536,4425,2407,9475,4648,7920,6964,2055,7270,4557,4628,8788,1172,907,9594,9967], () => (__webpack_exec__(7578)));
module.exports = __webpack_exports__;

})();