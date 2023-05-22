"use strict";
(() => {
var exports = {};
exports.id = 6313;
exports.ids = [6313];
exports.modules = {

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

/***/ 6904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animation_MoveTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2055);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9735);




function TitleCover({ className , children , from , to , ease , start , end , scrub , markers  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animation_MoveTrigger__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        from: from,
        to: to,
        markers: markers,
        scrub: scrub,
        end: end,
        start: start,
        ease: ease,
        children: (ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_3__/* .dsnCN */ .gU)("p-absolute title-cover", className),
                ref: ref,
                children: children
            })
    });
}
TitleCover.defaultProps = {
    from: {
        yPercent: -100,
        opacity: 0
    },
    to: {
        yPercent: 0,
        opacity: 0.12
    },
    end: "75%"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleCover);


/***/ }),

/***/ 1952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_DsnGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6878);
/* harmony import */ var _Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6964);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9735);
/* harmony import */ var _heading_TitleSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3042);
/* harmony import */ var _heading_TitleCover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6904);







const heroData = {
    titleCover: `Eremia`,
    title: `Angelo Walking`,
    descTitle: `Project Manager`,
    subtitle: `Creative Web & App Developer`,
    description: `To avoid your boss’s staring eye, you should not roll your eyes to check
                            the time. The Time Tag Watch is a consummately appropriate for it.`,
    descriptionTow: `Those tags do the role of the hands of the watch. By rotating the face
                            of the watch not the hands, it gets harder to be damaged. It provides
                            you with experience to feel the time at the end of your finger without
                            damaging your watch.`,
    link: {
        href: "/services"
    },
    textButton: `View More <span>⟶</span>`,
    img: {
        src: "/img/project-manager.jpeg",
        alt: ""
    },
    social: {
        title: `Social <br/>Media`,
        links: [
            {
                url: "#0",
                title: "FB"
            },
            {
                url: "#0",
                title: "TW"
            },
            {
                url: "#0",
                title: "LN"
            }
        ]
    }
};
function HeroSectionFour({ className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_4__/* .dsnCN */ .gU)("box-gallery-vertical box-gallery-content", className),
        col: 2,
        colTablet: 1,
        colGap: 0,
        rowGap: 0,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-relative box-content order-md-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "box-info h-100 box-padding background-section ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "box-info-inner",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heading_TitleCover__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                children: heroData.titleCover
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heading_TitleSection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                description: heroData.descTitle,
                                defaultSpace: false,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: heroData.title
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "pb-30 mb-30 mt-30 border-bottom sm-title-block theme-color",
                                children: heroData.subtitle
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "max-w570 dsn-up mb-10 ",
                                children: heroData.description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "max-w570 dsn-up",
                                children: heroData.descriptionTow
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "border-bottom mt-30 mb-30"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex  a-item-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "sub-heading",
                                        dangerouslySetInnerHTML: {
                                            __html: heroData.social.title
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "box-social ml-20",
                                        children: heroData.social.links.map(($item, $index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                "data-dsn": "parallax",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: $item.url,
                                                    target: "_blank",
                                                    rel: "nofollow",
                                                    children: $item.title
                                                })
                                            }, $index))
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-relative box-img order-md-1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    ...heroData.img,
                    fill: true,
                    height: "100%",
                    heightTable: "70vh",
                    sizes: "(max-width: 768px) 100vw,   (max-width: 1200px) 50vw,   33vw"
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSectionFour);


/***/ }),

/***/ 4120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_DsnGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6878);
/* harmony import */ var _Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6964);
/* harmony import */ var _heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3042);
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7091);
/* harmony import */ var _button_popup_ButtonPopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8067);







const heroData = {
    title: `We help to create visual strategies`,
    descTitle: `capabilities our company`,
    subtitle: `The Best Choice For Your Successful Business!`,
    description: `We always stay with our clients and respect their business. We deliver 100% and provide instant response.`,
    descriptionTow: `Our clients describe us as a product team which
                        creates amazing UI/UX experiences, by crafting top-notch user
                        experience.`,
    heroImage: "/img/about-intro.jpg",
    link: {
        href: "/services"
    },
    textButton: `View More <span>⟶</span>`,
    img: {
        src: "/img/help-project.jpg",
        alt: ""
    },
    video: {
        href: "https://www.youtube.com/watch?v=mRvqcvqB4EI",
        textBefore: "Play",
        textAfter: "Video"
    }
};
function HeroSectionThree({ className , ...restProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: "video-section p-relative",
        col: 2,
        colTablet: 1,
        rowGap: 0,
        ...restProps,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "video-inner p-relative h-100 v-dark-head",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        ...heroData.img,
                        height: "100%",
                        overlay: 2,
                        sizes: "(max-width: 768px) 100vw,   (max-width: 1200px) 50vw,   33vw"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_popup_ButtonPopup__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: "v-middle",
                        ...heroData.video
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "box-info mt-50 mb-50",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "box-info-inner w-100",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            description: heroData.descTitle,
                            defaultSpace: false,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                dangerouslySetInnerHTML: {
                                    __html: heroData.title
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "pb-30 mb-30 mt-30 border-bottom theme-color",
                            children: heroData.subtitle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "max-w570 dsn-up mb-10",
                            children: heroData.description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "max-w570 dsn-up",
                            children: heroData.descriptionTow
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-bottom mt-30 mb-30"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            ...heroData.link,
                            borderRadius: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                dangerouslySetInnerHTML: {
                                    __html: heroData.textButton
                                }
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSectionThree);


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

/***/ 3786:
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
/* harmony import */ var _components_portfolio_PortfolioSwiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9828);
/* harmony import */ var _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4628);
/* harmony import */ var _components_services_grid_ServiceTow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(854);
/* harmony import */ var _components_hero_section_HeroSectionThree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4120);
/* harmony import */ var _components_header_BgDot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2643);
/* harmony import */ var _components_facts_Facts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9594);
/* harmony import */ var _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(907);
/* harmony import */ var _components_hero_section_HeroSectionFour__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1952);
/* harmony import */ var _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8788);
/* harmony import */ var _components_Team_Team__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(588);
/* harmony import */ var _components_next_NextPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6331);
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1084);
/* harmony import */ var _components_model_right_ModalContact__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9849);
/* harmony import */ var _data_team__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3729);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_Layout__WEBPACK_IMPORTED_MODULE_2__, _components_portfolio_PortfolioSwiper__WEBPACK_IMPORTED_MODULE_5__, _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_6__, _components_services_grid_ServiceTow__WEBPACK_IMPORTED_MODULE_7__, _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_11__, _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_13__, _components_footer_Footer__WEBPACK_IMPORTED_MODULE_16__]);
([_layout_Layout__WEBPACK_IMPORTED_MODULE_2__, _components_portfolio_PortfolioSwiper__WEBPACK_IMPORTED_MODULE_5__, _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_6__, _components_services_grid_ServiceTow__WEBPACK_IMPORTED_MODULE_7__, _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_11__, _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_13__, _components_footer_Footer__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















function Demo2() {
    _components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"].defaultProps */ .Z.defaultProps = {
        className: "align-items-start",
        classDesc: "line-shape line-shape-after text-uppercase",
        classDesInner: "line-bg-left",
        classTitle: "text-uppercase"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        modelRight: {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_model_right_ModalContact__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}),
            propsModal: {
                textBtn: "Contact"
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_19___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Creative Agency  | Eremia Creative Portfolio Multi-Purpose"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_header_HeaderNormal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "align-content-center text-center",
                backgroundColor: "background-section",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "subtitle p-relative line-shape mb-30",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "pl-10 pr-10 background-main",
                            children: "DESIGN STUDIO"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: "title text-uppercase",
                        children: [
                            " We digital Creative ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            " Agency"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-relative dsn-under-header ",
                "data-dsn-title": "Our Work",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "half-bg-top background-section h-50"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_portfolio_PortfolioSwiper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        grabCursor: true,
                        desktop: {
                            spaceBetween: 50,
                            slidesPerView: 1.5
                        },
                        tablet: {
                            spaceBetween: 20,
                            slidesPerView: 1.25
                        },
                        mobile: {
                            spaceBetween: 0,
                            slidesPerView: 1
                        },
                        stylePortfolio: "work-section",
                        className: "v-dark-head title-inherit h4",
                        centeredSlides: true,
                        loop: true,
                        blur: true,
                        parallax: true,
                        speed: 1200,
                        watchSlidesProgress: true,
                        loopedSlides: 2,
                        parallaxImage: {
                            "data-swiper-parallax-scale": "0.85",
                            "data-swiper-parallax": "20%"
                        },
                        parallaxContent: {
                            "data-swiper-parallax-opacity": "0"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            className: `justify-content-between dsn-container mt-30`
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container section-margin",
                "data-dsn-title": "Our Services",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        description: "Our Services",
                        children: [
                            "Let’s Check Our ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            " Services"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_services_grid_ServiceTow__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: "icon-left"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container section-margin",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hero_section_HeroSectionThree__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "section-margin p-relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header_BgDot__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header_BgDot__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        rightPosition: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_facts_Facts__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            className: "text-center",
                            col: 4,
                            colTablet: 2
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "section-margin",
                "data-dsn-title": "Our Blog",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        description: "Lasts post",
                        className: "container",
                        children: [
                            "Latest And Greatest ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Post"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        className: "our-blog-classic our-blog-full-img",
                        grabCursor: true,
                        desktop: {
                            spaceBetween: 0,
                            slidesPerView: 2
                        },
                        tablet: {
                            slidesPerView: 1.5
                        },
                        mobile: {
                            slidesPerView: 1
                        },
                        centeredSlides: true,
                        loop: true,
                        parallax: true,
                        blur: true,
                        speed: 800,
                        watchSlidesProgress: true,
                        loopedSlides: 2,
                        parallaxContent: {
                            "data-swiper-parallax-scale": 0.9
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            className: `justify-content-between dsn-container mt-30`
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container  section-margin",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hero_section_HeroSectionFour__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container section-margin",
                "data-dsn-title": "Our Testimonials",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        description: "testimonials",
                        children: [
                            "What People are ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Saying"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
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
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            className: `justify-content-between dsn-container mt-30`
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "container section-margin ",
                "data-dsn-title": "Our Team",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        className: ` align-items-center text-center`,
                        description: "Our Team",
                        children: "The Best Team Ever!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Team_Team__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        data: (0,_data_team__WEBPACK_IMPORTED_MODULE_18__/* .getTeamData */ .V)().slice(0, 3),
                        className: "team-classic",
                        col: 3,
                        colTablet: 2
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Demo2);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@emailjs/browser");

/***/ }),

/***/ 7182:
/***/ ((module) => {

module.exports = require("@fancyapps/ui");

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
var __webpack_exports__ = __webpack_require__.X(0, [9210,9403,1664,3121,5675,4597,1566,1688,3233,3042,6401,4396,2536,4425,2407,6331,4959,6964,7920,2055,7270,4628,8788,9828,907,9594,8067,588], () => (__webpack_exec__(3786)));
module.exports = __webpack_exports__;

})();