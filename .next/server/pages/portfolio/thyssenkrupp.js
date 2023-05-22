"use strict";
(() => {
var exports = {};
exports.id = 8655;
exports.ids = [8655];
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

/***/ 8913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_dsnHooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4425);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2536);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9735);
/* harmony import */ var _Image_BgImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6401);
/* harmony import */ var _meta_MetaPost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3233);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);





//--> Component






function NextProject2({ height , number , attrContent , heroContent , className  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [$, ref] = (0,_hooks_dsnHooks__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .v9)();
    const { desktop , tablet , mobile  } = (0,_hooks_dsnHooks__WEBPACK_IMPORTED_MODULE_2__/* .dsnMediaMatching */ .AF)();
    const bg = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { title , category , src , video , overlay  } = heroContent || {};
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const animate = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
            scrollTrigger: {
                trigger: ref.current,
                end: "top",
                scrub: true
            }
        });
        animate.fromTo($(".bg img"), {
            y: -100,
            scale: 1,
            filter: "blur(0px)"
        }, {
            y: 0,
            scale: 1.2,
            filter: "blur(10px)"
        }).fromTo($(".project-number , .metas"), {
            y: -100
        }, {
            y: 0
        }, 0);
        return ()=>{
            animate?.scrollTrigger?.kill();
            animate?.kill();
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (tablet || mobile) return;
        const animate = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
            scrollTrigger: {
                trigger: ref.current,
                scrub: true,
                start: "top top",
                end: "+=2500",
                pin: true,
                onLeave: ({ progress , direction , isActive  })=>router.push((0,_data_portfolio__WEBPACK_IMPORTED_MODULE_4__/* .getPortfolioLink */ .p8)(heroContent))
            }
        });
        animate.to($(".case img"), {
            rotation: 360
        }, 0).to($(".bg img"), {
            scale: 1,
            filter: "blur(0px)"
        }, 0).to($(".title-block.number"), {
            snap: {
                textContent: 1
            },
            textContent: "100%"
        }, 0).to($("span.d-none"), {
            width: "100%"
        }, 0);
        return ()=>{
            animate?.scrollTrigger?.kill();
            animate?.kill();
        };
    }, [
        desktop,
        tablet,
        mobile
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            ref: ref,
            className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_5__/* .dsnCN */ .gU)("next-project p-relative h-v-100 over-hidden", (src || video) && "v-dark-head background-main", className),
            children: [
                src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image_BgImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    className: "bg w-100 h-100 p-absolute over-hidden",
                    alt: title,
                    src: src,
                    height: height,
                    style: {
                        position: "absolute"
                    },
                    overlay: overlay,
                    video: video,
                    ref: bg
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "next-project-inner dsn-container p-relative w-100 h-100 d-flex flex-column justify-content-center z-index-1",
                    ...attrContent,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "project-number p-absolute d-flex",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    children: "Project"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "current",
                                    children: number
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "full",
                                    children: "6"
                                })
                            ]
                        }),
                        category && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_meta_MetaPost__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            className: "mt-30 right-0 p-absolute top-0 dsn-container",
                            category: category
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                            href: (0,_data_portfolio__WEBPACK_IMPORTED_MODULE_4__/* .getPortfolioLink */ .p8)(heroContent),
                            className: "effect-ajax border-top border-bottom",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "title section-padding p-relative ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "title-stroke",
                                        children: "Mercedes Benz"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "p-absolute section-padding d-none top-0 w-100 h-100 left-0",
                                        children: "Mercedes Benz"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "case",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-absolute w-100 h-100 ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        className: "cover-bg-img",
                                        src: "/img/case.svg",
                                        alt: "",
                                        width: 100,
                                        height: 100,
                                        size: "100vw"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    className: "title-block heading-color number v-middle",
                                    children: "100%"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
NextProject2.defaultProps = {
    height: "100%"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextProject2);


/***/ }),

/***/ 8523:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_box_gallery_BoxGallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1610);
/* harmony import */ var _components_button_ButtonProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7705);
/* harmony import */ var _layout_DsnGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6878);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1779);
/* harmony import */ var _components_header_HeaderFull__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4557);
/* harmony import */ var _data_portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2536);
/* harmony import */ var _components_next_NextProject2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8913);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7091);
/* harmony import */ var _components_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6964);
/* harmony import */ var _components_heading_TitleCover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6904);
/* harmony import */ var _components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3042);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_Layout__WEBPACK_IMPORTED_MODULE_4__]);
_layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













function Project2(params) {
    const heroData = (0,_data_portfolio__WEBPACK_IMPORTED_MODULE_6__/* .getPortfolioItem */ .x6)("thyssenkrupp");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header_HeaderFull__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: "dsn-container",
                alignItems: "end",
                heroContent: heroData,
                overlay: heroData.overlay
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "intro-project container section-margin",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    customGrid: {
                        desktop: "40% 60%"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "intro-project-left",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "title-block text-uppercase mb-20",
                                    children: "Project"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "intro-project-list",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                                            className: "block-quote",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: "INVOLVEMENT"
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                "Frontend Developer, Product Designer"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                                            className: "block-quote",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: "CLIENT"
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                "Thyssenkrupp & TKE (@Lohoff.)"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "intro-project-right",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "title-block text-uppercase mb-20",
                                    children: "info"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "intro-project-description",
                                    children: "Development and design of the user interface, aswell as establishing a top notch user experience and implementing the respective corporate identity into our award winning SaaS solutions (Deutscher bAV-Preis 2017) for Thyssenkrupp & TKE."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    href: "https://www.value-account.eu/acapif/portal-thyssenkrupp/public_loginseite.prt",
                                    className: "mt-30",
                                    borderStyle: "border-color-theme-color",
                                    borderRadius: true,
                                    children: "Thyssenkrupp"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    href: "https://www.value-account.eu/acapif/portal-tke/public_loginseite.prt",
                                    className: "mt-30",
                                    borderStyle: "border-color-theme-color",
                                    borderRadius: true,
                                    children: "TKE"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "box-gallery-vertical container section-margin",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    col: 2,
                    colGap: 0,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-relative mb-lg-section",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "box-im w-100 h-100 p-absolute",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    alt: "",
                                    src: "/img/project/project2/trae-gould-lniazJqPXTI-unsplash.jpg",
                                    height: "100%"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-relative pt-lg-section",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "box-info h-100 box-padding background-section ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleCover__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        children: "CLIENT"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        className: "text-uppercase mb-30",
                                        defaultSpace: false,
                                        children: "Thyssenkrupp"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Thyssenkrupp is an international group of companies comprising largely independent industrial and technology businesses and employing around 96,000 people. Across 48 countries it generated sales of €41 billion in fiscal 2021/2022. Its business activities have been bundled in six segments: Materials Services, Industrial Components, Automotive Technology, Steel Europe, Marine Systems, and Multi Tracks. Backed by extensive technological know-how, the businesses develop cost-effective and resource-friendly solutions to the challenges of the future. Around 3,600 employees work in research and development at 75 locations all over the world, mainly in the fields of climate protection, the energy transition, digital transformation in the industry and mobility of the future."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_button_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        href: "https://www.thyssenkrupp.com/en/home",
                                        className: "mt-30",
                                        children: [
                                            "View More ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "icon",
                                                children: "⟶"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_next_NextProject2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                heroContent: (0,_data_portfolio__WEBPACK_IMPORTED_MODULE_6__/* .getPortfolioItem */ .x6)("mercedes-benz"),
                number: 3
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project2);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9210,9403,1664,3121,5675,4597,1566,1688,3233,3042,6401,2536,4425,6964,2055,4557,7705,1610], () => (__webpack_exec__(8523)));
module.exports = __webpack_exports__;

})();