"use strict";
(() => {
var exports = {};
exports.id = 4348;
exports.ids = [4348];
exports.modules = {

/***/ 5280:
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






const heroData = {
    title: `Bernardo Fonseca Torres`,
    subtitle: `Digital Craftsman`,
    /* description: `Digital Craftsman`, */ heroImage: "/img/about-me-sketch.png",
    /* infoPersonal: [
        {key: "Age", value: "29"},
        {key: "Residence", value: "Egypt"},
        {key: "Address", value: "27 Some Street, Some Town"},
        {
            key: "E-Mail",
            value: "info@dsngrid.com",
            link: {href: "mailto:info@dsngrid.com", target: "_blank", rel: "nofollow"}
        },
    ], */ firstLink: {
        text: "DOWNLOAD CV",
        option: {
            href: "#0",
            target: "_blank",
            rel: "nofollow"
        }
    },
    lastLink: {
        text: "LEARN MORE",
        option: {
            href: "/PortfolioSwiper"
        }
    }
};
function HeroSection({ className , ...restProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        col: 2,
        colTablet: 1,
        colGap: 0,
        rowGap: 0,
        rowGapTablet: 60,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "box-img background-section p-20 p-relative",
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
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        alt: "",
                        src: heroData.heroImage,
                        overlay: 4,
                        height: "100%"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "box-info box-padding p-md-0 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: "mb-30",
                        description: heroData.descTitle,
                        defaultSpace: false,
                        children: heroData.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "sm-title-block theme-color",
                        children: heroData.subtitle
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex align-items-center mt-30",
                        children: [
                            heroData.firstLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                ...heroData.firstLink.option,
                                className: "mr-15 line-head",
                                borderStyle: "border-color-theme-color",
                                borderRadius: true,
                                children: heroData.firstLink.text
                            }),
                            heroData.lastLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                ...heroData.lastLink.option,
                                className: "line-head",
                                borderRadius: true,
                                children: heroData.lastLink.text
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSection);


/***/ }),

/***/ 6120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ resume_Resume)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./hooks/helper.ts
var helper = __webpack_require__(9735);
;// CONCATENATED MODULE: ./components/resume/ResumeItem.tsx


function ResumeItem({ className , children , title , ...restProps }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (0,helper/* dsnCN */.gU)("item-resume-box", className),
        ...restProps,
        children: [
            title && /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: (0,helper/* dsnCN */.gU)("sm-title-block", children && "mb-15"),
                children: title
            }),
            children
        ]
    });
}
/* harmony default export */ const resume_ResumeItem = (ResumeItem);

;// CONCATENATED MODULE: ./components/resume/Resume.tsx



function Resume({ className , children , title  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,helper/* dsnCN */.gU)("dsn-resume", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "resume-box-inner",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "resume-box",
                children: [
                    title && /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "title-block mb-30",
                        children: title
                    }),
                    children
                ]
            })
        })
    });
}
Resume.item = resume_ResumeItem;
/* harmony default export */ const resume_Resume = (Resume);


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

/***/ 3788:
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
/* harmony import */ var _components_button_popup_ButtonPopup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8067);
/* harmony import */ var _components_hero_section_HeroSectionPersonal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5280);
/* harmony import */ var _components_resume_Resume__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6120);
/* harmony import */ var _components_services_grid_ServiceTow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(854);
/* harmony import */ var _components_portfolio_PortfolioSwiper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9828);
/* harmony import */ var _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4628);
/* harmony import */ var _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8788);
/* harmony import */ var _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(907);
/* harmony import */ var _components_next_NextPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6331);
/* harmony import */ var _components_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6964);
/* harmony import */ var _components_model_right_ModalContact__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9849);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1084);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_Layout__WEBPACK_IMPORTED_MODULE_1__, _components_services_grid_ServiceTow__WEBPACK_IMPORTED_MODULE_10__, _components_portfolio_PortfolioSwiper__WEBPACK_IMPORTED_MODULE_11__, _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_12__, _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_13__, _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_14__, _components_footer_Footer__WEBPACK_IMPORTED_MODULE_19__]);
([_layout_Layout__WEBPACK_IMPORTED_MODULE_1__, _components_services_grid_ServiceTow__WEBPACK_IMPORTED_MODULE_10__, _components_portfolio_PortfolioSwiper__WEBPACK_IMPORTED_MODULE_11__, _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_12__, _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_13__, _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_14__, _components_footer_Footer__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const headerContent = {
    title: `Frontend-developer`,
    subtitle: `<span class="background-section pl-15 pr-15 pt-5 pb-5 d-inline-block">Alex Smith</span>`,
    src: "/img/personal.jpg"
};
function Personal() {
    _components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"].defaultProps */ .Z.defaultProps = {
        classDesc: "line-shape line-shape-before",
        classDesInner: "line-bg-right"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        modelRight: {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_model_right_ModalContact__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}),
            propsModal: {
                textBtn: "Contact"
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_20___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Personal  | Eremia Creative Portfolio Multi-Purpose"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_header_HeaderFull__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "dsn-container",
                fullWidth: true,
                heroContent: headerContent,
                overlay: 6,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-30 pb-30 border-bottom max-w570",
                        children: "Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex align-items-center mt-30",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                href: "/services",
                                className: "mr-15 line-head",
                                borderStyle: "border-color-theme-color",
                                borderRadius: true,
                                children: "About Me"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button_popup_ButtonPopup__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                className: "no-height",
                                href: "https://www.youtube.com/watch?v=mRvqcvqB4EI",
                                textAfter: "Play Video"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "container about-me p-relative section-margin ",
                "data-dsn-title": "About Me",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hero_section_HeroSectionPersonal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "section-padding  background-section",
                "data-dsn-title": "Resume",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            description: "My Resume",
                            children: "Education & Experience"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            col: 2,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_resume_Resume__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    title: "Education",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_resume_Resume__WEBPACK_IMPORTED_MODULE_9__/* ["default"].item */ .Z.item, {
                                            title: "University of Studies",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "max-w570",
                                                children: "Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum."
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_resume_Resume__WEBPACK_IMPORTED_MODULE_9__/* ["default"].item */ .Z.item, {
                                            title: "Doctoral Degree",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "max-w570",
                                                children: "Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor."
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_resume_Resume__WEBPACK_IMPORTED_MODULE_9__/* ["default"].item */ .Z.item, {
                                            title: "University of Studies",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "max-w570",
                                                children: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante."
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_resume_Resume__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    title: "Education",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_resume_Resume__WEBPACK_IMPORTED_MODULE_9__/* ["default"].item */ .Z.item, {
                                            title: "University of Studies",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    children: "Senior UX / UI Designer"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "max-w570 mt-10",
                                                    children: "Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_resume_Resume__WEBPACK_IMPORTED_MODULE_9__/* ["default"].item */ .Z.item, {
                                            title: "Doctoral Degree",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    children: "DDB Athens ( Tribal )"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "max-w570 mt-10",
                                                    children: "Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_resume_Resume__WEBPACK_IMPORTED_MODULE_9__/* ["default"].item */ .Z.item, {
                                            title: "Freelancer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                children: "DDB Athens ( Tribal )"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "section-margin container",
                "data-dsn-title": "Services",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    col: 2,
                    colTablet: 1,
                    rowGapTablet: 60,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-left flex-column align-items-center w-100",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex-column align-items-center mb-30",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "section-title mb-20 ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "sub-heading  line-bg-left mb-15",
                                                children: "My specialization"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "text-left title-cap",
                                                children: "I am a trending designer who cares about the details"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "sm-title-block theme-color",
                                    children: "Proin laoreet elementum ligula"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "border-bottom mt-30 mb-30"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "max-w570 dsn-text",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "mb-20",
                                            children: [
                                                "I will help you build your brand and grow your business. I create clarifying strategy, beautiful logo and identity design.",
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate. Ut a mi tempus massama lesuada fermentum."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "border-bottom mt-30 mb-30"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    href: "/services",
                                    className: "mr-15 line-head",
                                    borderStyle: "border-color-theme-color",
                                    borderRadius: true,
                                    children: "More Service"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_services_grid_ServiceTow__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            className: "services-no-padding",
                            masonry: true
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-relative section-padding",
                "data-dsn-title": "Skills",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "box-im box-im-100 h-100 p-absolute top-0 over-hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            alt: "",
                            src: "/img/header.jpg",
                            height: "100%",
                            heightMobile: "100%",
                            heightTable: "100%",
                            overlay: 7,
                            animationActive: false
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_skill_Skills__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                        className: "container p-relative  z-index-1",
                        col: 4,
                        colTablet: 2,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skill_Skills__WEBPACK_IMPORTED_MODULE_6__/* .SkillCircleBar */ .bO, {
                                number: 80,
                                children: "WEB DESIGN"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skill_Skills__WEBPACK_IMPORTED_MODULE_6__/* .SkillCircleBar */ .bO, {
                                number: 60,
                                children: "PHOTOSHOP"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skill_Skills__WEBPACK_IMPORTED_MODULE_6__/* .SkillCircleBar */ .bO, {
                                number: 40,
                                children: "Graphic Design"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skill_Skills__WEBPACK_IMPORTED_MODULE_6__/* .SkillCircleBar */ .bO, {
                                number: 90,
                                children: "Smarty / Twig"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "section-margin",
                "data-dsn-title": "Our Portfolio",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: `container align-items-center text-center`,
                        description: "Our Works",
                        children: [
                            "Creative Portfolio ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Designs"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_portfolio_PortfolioSwiper__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        grabCursor: true,
                        desktop: {
                            spaceBetween: 50,
                            slidesPerView: 1.5
                        },
                        tablet: {
                            spaceBetween: 0,
                            slidesPerView: 1.25
                        },
                        mobile: {
                            spaceBetween: 0,
                            slidesPerView: 1
                        },
                        stylePortfolio: "work-section",
                        className: "v-dark-head",
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
                        parallaxContent: {
                            "data-swiper-parallax-opacity": "0"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            className: `justify-content-between dsn-container mb-30`
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                className: "container section-margin",
                title: "Feedback from our clients.",
                skin: [
                    "testimonials-half"
                ],
                backgroundColor: "background-section",
                desktop: {
                    slidesPerView: 2
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
                "data-dsn-title": "testimonials",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    className: `justify-content-between dsn-container mt-30`
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "section-margin",
                "data-dsn-title": "Lasts post",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: `container  align-items-center text-center`,
                        description: "Lasts post",
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
                            spaceBetween: 20,
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
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            className: `justify-content-between dsn-container mt-30`
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_next_NextPage__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                className: "section-padding border-top background-section"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
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
var __webpack_exports__ = __webpack_require__.X(0, [9210,9403,1664,3121,5675,4597,1566,1688,3233,3042,6401,4396,2536,4425,2407,6331,4959,6964,7920,2055,4557,7270,4628,8788,9828,907,8067,9967], () => (__webpack_exec__(3788)));
module.exports = __webpack_exports__;

})();