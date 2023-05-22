"use strict";
(() => {
var exports = {};
exports.id = 2521;
exports.ids = [2521];
exports.modules = {

/***/ 3652:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/awards/AwardsItem.tsx


function AwardsItem_AwardsItem({ className , data , ...restProps }) {
    return /*#__PURE__*/ _jsxs("div", {
        className: "award-item has-border",
        ...restProps,
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "award-number",
                children: data.number
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "award-logo",
                children: [
                    /*#__PURE__*/ _jsx(Image, {
                        src: data.src,
                        alt: "",
                        width: 200,
                        height: 200
                    }),
                    /*#__PURE__*/ _jsx("h4", {
                        className: "sm-title-block",
                        children: data.title
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const awards_AwardsItem = ((/* unused pure expression or super */ null && (AwardsItem_AwardsItem)));

;// CONCATENATED MODULE: ./data/awards.js
const awardsDetails = [
    {
        src: "/img/awwwards.png",
        title: "WEBSITE OF THE DAY",
        number: "4"
    },
    {
        src: "/img/cssdesignawards.png",
        title: "UI Design Award",
        number: "6"
    },
    {
        src: "/img/awwwards.png",
        title: "STAR AWARD",
        number: "7"
    }
];
const awards_getAwardsData = ()=>awardsDetails;

;// CONCATENATED MODULE: ./components/awards/Awards.tsx



function Awards() {
    return /*#__PURE__*/ _jsx("div", {
        className: "awards-inner mt-30",
        children: getAwardsData().map((item, index)=>/*#__PURE__*/ _jsx(AwardsItem, {
                data: item
            }, index))
    });
}
/* harmony default export */ const awards_Awards = ((/* unused pure expression or super */ null && (Awards)));


/***/ }),

/***/ 2643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9735);


function BgDot({ className , rightPosition  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)("bg-circle-dotted", rightPosition && "bg-circle-dotted-right", className),
        style: {
            backgroundImage: "url(/img/circle-dotted.png)"
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BgDot);


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

/***/ 9849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9735);
/* harmony import */ var _layout_DsnGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6878);
/* harmony import */ var _contact_ContactForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3007);
/* harmony import */ var _contact_InfoBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(242);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






function ModalContact({ className ="" , ...restProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)("section-padding", className),
        ...restProps,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            col: 2,
            colTablet: 1,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contact_InfoBox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "align-self-center"
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalContact);


/***/ }),

/***/ 8953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header_HeaderNormal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6860);
/* harmony import */ var _components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3042);
/* harmony import */ var _components_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6964);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4563);
/* harmony import */ var _components_list_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var _layout_DsnGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6878);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1779);
/* harmony import */ var _components_box_gallery_BoxGallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1610);
/* harmony import */ var _components_Team_Team__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(588);
/* harmony import */ var _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8788);
/* harmony import */ var _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4628);
/* harmony import */ var _components_next_NextPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6331);
/* harmony import */ var _components_brand_client_BrandClient__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(416);
/* harmony import */ var _components_awards_Awards__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3652);
/* harmony import */ var _data_team__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3729);
/* harmony import */ var _components_services_Service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4653);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4146);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_model_right_ModalContact__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9849);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_22__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__, _layout_Layout__WEBPACK_IMPORTED_MODULE_9__, _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_12__, _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_13__, _components_services_Service__WEBPACK_IMPORTED_MODULE_18__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__, _layout_Layout__WEBPACK_IMPORTED_MODULE_9__, _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_12__, _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_13__, _components_services_Service__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























function About() {
    _components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"].defaultProps */ .Z.defaultProps = {
        classDesc: "line-shape line-shape-before",
        classDesInner: "line-bg-right"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_Layout__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        modelRight: {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_model_right_ModalContact__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {}),
            propsModal: {
                textBtn: "Contact"
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_22___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "About me | Bernardo Fonseca Torres"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_header_HeaderNormal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: "",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "title text-uppercase",
                        children: "Bernardo Fonseca Torres"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-uppercase",
                        children: "Digital Craftsman"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                alt: "",
                src: "/img/IMG_3797.PNG",
                parallaxFrom: {
                    scale: 0.1
                },
                parallax: {
                    scale: 1
                },
                overlay: 5
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container section-margin",
                "data-dsn-title": "About",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: "mb-15",
                        description: "Developer & Designer",
                        defaultSpace: false
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        col: 2,
                        colTablet: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "box-left",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    children: "My inspiration relies on the freedom of endless possibilities, and my passion for designing and developing products with a touch of simplicity and originality."
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "box-right",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "max-w570 dsn-up mb-15 ",
                                        children: [
                                            "Born and raised in Rio de Janeiro, my family and I moved to Germany in 2002, where I specialized after high school as a Hotel Industry Expert @",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "",
                                                href: "https://group.accor.com/en",
                                                target: "_blank",
                                                children: "Accor"
                                            }),
                                            ". After ten years of professional experience in event management and sales, I graduated from the Ironhack Tech School as a Fullstack Developer, subsequently starting my career in Tech."
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "max-w570 dsn-up",
                                        children: "As a software developer and designer with experience in FinTech, I specialize in creating award-winning SaaS solutions that prioritize user experience and clean user interface design. Currently, I am overseeing the frontend and design for a diverse portfolio of clients @Lohoff, including BMW Group, Mercedes Benz, Thyssenkrupp, and Lufthansa. My expertise in implementing  corporate identities and agile methodologies into our user interfaces and workflows has allowed me to develop, redesign and modernize multiple prominent FinTech applications."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_list_List__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: "pt-50 mt-50 border-top pt-md-30 mt-md-30",
                        col: 3,
                        iconSize: "21px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_list_List__WEBPACK_IMPORTED_MODULE_7__/* ["default"].item */ .Z.item, {
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCheck,
                                    className: "theme-color"
                                }),
                                className: "align-items-center",
                                children: " FinTech "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_list_List__WEBPACK_IMPORTED_MODULE_7__/* ["default"].item */ .Z.item, {
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCheck,
                                    className: "theme-color"
                                }),
                                className: "align-items-center",
                                children: " Frontend Development "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_list_List__WEBPACK_IMPORTED_MODULE_7__/* ["default"].item */ .Z.item, {
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCheck,
                                    className: "theme-color"
                                }),
                                className: "align-items-center",
                                children: " UI/UX Design "
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "container section-margin",
                "data-dsn-title": "Client",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        children: "I've worked on projects for"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_brand_client_BrandClient__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        col: 3,
                        colTablet: 3,
                        colGap: 0,
                        rowGap: 0
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_next_NextPage__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                className: `background-section section-padding`
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

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
var __webpack_exports__ = __webpack_require__.X(0, [9210,9403,1664,3121,5675,4597,1566,1688,3042,4396,4425,6331,6964,2055,7270,4628,8788,1610,416,588,18], () => (__webpack_exec__(8953)));
module.exports = __webpack_exports__;

})();