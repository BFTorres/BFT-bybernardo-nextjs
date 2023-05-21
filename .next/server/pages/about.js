"use strict";
(() => {
var exports = {};
exports.id = 2521;
exports.ids = [2521];
exports.modules = {

/***/ 3652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ awards_Awards)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/awards/AwardsItem.tsx


function AwardsItem({ className , data , ...restProps }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "award-item has-border",
        ...restProps,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "award-number",
                children: data.number
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "award-logo",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: data.src,
                        alt: "",
                        width: 200,
                        height: 200
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "sm-title-block",
                        children: data.title
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const awards_AwardsItem = (AwardsItem);

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
const getAwardsData = ()=>awardsDetails;

;// CONCATENATED MODULE: ./components/awards/Awards.tsx



function Awards() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "awards-inner mt-30",
        children: getAwardsData().map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(awards_AwardsItem, {
                data: item
            }, index))
    });
}
/* harmony default export */ const awards_Awards = (Awards);


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
                src: "/img/about/5.jpg",
                parallaxFrom: {
                    scale: 1.3
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
                        description: "What We Do",
                        defaultSpace: false
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        col: 2,
                        colTablet: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "box-left",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    children: " Keep Your Business Safe & Ensure High Availability "
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "box-right",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "max-w570 dsn-up mb-15 ",
                                        children: "A business consulting agency is involved in the planning, implementation, and education of businesses. We work directly with business owners on developing a business plan, identifying marketing needs and developing the necessary skills for business ownership."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "max-w570 dsn-up",
                                        children: "but deploy to production. C-suite. First-order optimal strategies build on a culture of contribution and inclusion so those options"
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
                                children: " Advanced Grid "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_list_List__WEBPACK_IMPORTED_MODULE_7__/* ["default"].item */ .Z.item, {
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCheck,
                                    className: "theme-color"
                                }),
                                className: "align-items-center",
                                children: " Top Performance"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_list_List__WEBPACK_IMPORTED_MODULE_7__/* ["default"].item */ .Z.item, {
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCheck,
                                    className: "theme-color"
                                }),
                                className: "align-items-center",
                                children: " Responsive Design"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_box_gallery_BoxGallery__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                className: "section-margin container",
                col: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_box_gallery_BoxGallery__WEBPACK_IMPORTED_MODULE_10__/* .BoxGalleryItem */ .O, {
                        src: "/img/help-project.jpg",
                        groupPopup: "gallery"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_box_gallery_BoxGallery__WEBPACK_IMPORTED_MODULE_10__/* .BoxGalleryItem */ .O, {
                        src: "/img/plan-project.jpg",
                        groupPopup: "gallery"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "section-padding background-section",
                "data-dsn-title": "Services",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            description: "Our Services",
                            children: [
                                "We are delivering beautiful ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                " digital products for you."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_services_Service__WEBPACK_IMPORTED_MODULE_18__/* ["default"].grid */ .Z.grid, {
                            className: "icon-left",
                            styleBox: "list",
                            data: (0,_data_service__WEBPACK_IMPORTED_MODULE_19__/* .getServiceData */ .Y)().slice(0, 3)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "awards-section section-margin",
                "data-dsn-title": "Awards",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        col: 2,
                        colTablet: 1,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "box-left",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        description: " Awards & Honors",
                                        defaultSpace: false,
                                        children: "The awards won by our project."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_awards_Awards__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "box-right",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container-img p-relative",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_20___default()), {
                                        className: "cover-bg-img",
                                        alt: "",
                                        src: "/img/agency-1.jpg",
                                        width: 1280,
                                        height: 840,
                                        sizes: "(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw"
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "container section-margin ",
                "data-dsn-title": "Team",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        description: "Our Team",
                        children: "The Best Team Ever!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Team_Team__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        data: (0,_data_team__WEBPACK_IMPORTED_MODULE_17__/* .getTeamData */ .V)().slice(0, 4),
                        col: 2,
                        colTablet: 2
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container section-margin",
                "data-dsn-title": "testimonials",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        description: " Feedback",
                        children: "What Clients Say"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        className: " text-center",
                        styleBox: "corner",
                        skin: [
                            "testimonials-personal",
                            "box-line"
                        ],
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "container section-margin",
                "data-dsn-title": "Client",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        description: "Our clients",
                        children: [
                            "Your successful, our ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "reputation"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_brand_client_BrandClient__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        col: 4,
                        colTablet: 2,
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
var __webpack_exports__ = __webpack_require__.X(0, [9210,9403,1664,3121,5675,4597,1566,3042,1688,4396,4425,9475,6964,2055,7270,4628,8788,1610,416,588,18], () => (__webpack_exec__(8953)));
module.exports = __webpack_exports__;

})();