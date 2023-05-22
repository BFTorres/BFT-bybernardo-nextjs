"use strict";
(() => {
var exports = {};
exports.id = 6552;
exports.ids = [6552];
exports.modules = {

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

/***/ 9005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export FjgItem */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9735);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7182);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);





function FJustifiedGallery({ images , className , children , options , ...restProps }) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const generateId = "_" + images.length;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // @ts-ignore
        const gallery = fjGallery(ref.current, {
            itemSelector: ".fj-gallery-item",
            ...restProps
        });
        _fancyapps_ui__WEBPACK_IMPORTED_MODULE_3__.Fancybox.bind("[data-fancybox]", options);
        return ()=>{
            // @ts-ignore
            fjGallery(gallery, "destroy");
            _fancyapps_ui__WEBPACK_IMPORTED_MODULE_3__.Fancybox.destroy();
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_2__/* .dsnCN */ .gU)("fj-gallery", className),
        ref: ref,
        children: [
            images && images.map(({ src , alt , caption , groupPopup  }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FjgItem, {
                    src: src,
                    alt: alt,
                    caption: caption,
                    groupPopup: groupPopup || generateId
                }, index)),
            children
        ]
    });
}
FJustifiedGallery.defaultProps = {
    gutter: 15
};
function FjgItem({ src , alt , caption , groupPopup  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "fj-gallery-item",
        "data-src": src,
        "data-caption": caption,
        "data-fancybox": groupPopup || "",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                src: src,
                alt: alt || "",
                width: 730,
                height: 411
            }),
            caption && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "cap",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: caption
                })
            })
        ]
    });
}
FJustifiedGallery.item = FjgItem;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (FJustifiedGallery)));


/***/ }),

/***/ 388:
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




function MoveBox({ bgColor , free , className , children , ...restProps }) {
    const refEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const parentEl = refEl.current.closest(".section-margin");
        if (parentEl) parentEl.classList.add("section-margin-move");
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animation_MoveTrigger__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...restProps,
        children: (ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_3__/* .dsnCN */ .gU)("dsn-move-section", !free && "p-relative", className),
                ref: ref,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `inner-box background-${bgColor}`,
                    ref: refEl,
                    children: children
                })
            })
    });
}
MoveBox.defaultProps = {
    bgColor: "section",
    free: true,
    from: {
        y: 100
    },
    to: {
        y: -100
    },
    ease: "none",
    start: "100%",
    end: "0%",
    scrub: true,
    markers: false,
    stagger: null,
    tablet: false,
    mobile: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoveBox);


/***/ }),

/***/ 7139:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_button_ButtonProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3042);
/* harmony import */ var _components_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6964);
/* harmony import */ var _components_justified_gallery_FJustifiedGallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9005);
/* harmony import */ var _components_move_box_MoveBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(388);
/* harmony import */ var _layout_DsnGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6878);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1779);
/* harmony import */ var _data_portfolio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2536);
/* harmony import */ var _components_header_HeaderFull__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4557);
/* harmony import */ var _components_next_NextProject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3880);
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7091);
/* harmony import */ var _components_next_NextPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6331);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_Layout__WEBPACK_IMPORTED_MODULE_7__]);
_layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













function Project4() {
    const heroData = (0,_data_portfolio__WEBPACK_IMPORTED_MODULE_8__/* .getPortfolioItem */ .x6)("lufthansa");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header_HeaderFull__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                className: "dsn-container",
                alignItems: "end",
                heroContent: heroData,
                overlay: heroData.overlay
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "intro-project container section-margin",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
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
                                                "Lufthansa (@Lohoff.)"
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
                                    children: "Development and design of the user interface, aswell as establishing a top notch user experience and implementing the respective corporate identity into our award winning SaaS solutions for Lufthansa, LH CityLine, LH Boden, LH Cockpit, and Lufthansa FK."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button_Button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    href: "https://www.value-account.eu/acapif/portal-lufthansa/public_loginseite.prt#",
                                    className: "mt-30",
                                    borderStyle: "border-color-theme-color",
                                    borderRadius: true,
                                    children: "Lufthansa"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button_Button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    href: "https://www.value-account.eu/acapif/portal-lufthansa-cityline/public_login.prt#",
                                    className: "mt-30",
                                    borderStyle: "border-color-theme-color",
                                    borderRadius: true,
                                    children: "CityLine"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-relative section-margin v-light",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        src: "/img/project/project4/jonas-allert-u3OtRCtJJ9s-unsplash.jpg",
                        overlay: 2,
                        alt: ""
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_move_box_MoveBox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                className: `align-items-start mb-30`,
                                defaultSpace: false,
                                children: "Lufthansa"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-10",
                                children: "The Lufthansa Group is an aviation group with operations worldwide. With 109,509 employees, the Lufthansa Group generated revenue of EUR 32,770m in the financial year 2022. The Lufthansa Group is composed of the segments Network Airlines, Eurowings and Aviation Services. Aviation Services comprises the segments Logistics, MRO, Catering and Additional Businesses and Group Functions. The latter also include Lufthansa AirPlus, Lufthansa Aviation Training and the IT companies. All segments occupy a leading position in their respective markets."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_next_NextPage__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project4);

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
var __webpack_exports__ = __webpack_require__.X(0, [9210,9403,1664,3121,5675,4597,1566,1688,3233,3042,6401,2536,4425,6331,6964,2055,4557,7705,3880], () => (__webpack_exec__(7139)));
module.exports = __webpack_exports__;

})();