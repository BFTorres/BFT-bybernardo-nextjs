"use strict";
(() => {
var exports = {};
exports.id = 1176;
exports.ids = [1176];
exports.modules = {

/***/ 6218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ AccordionItem),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9735);




function AccordionItem({ active , className , title , // @ts-ignore
children , number  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_3__/* .dsnCN */ .gU)("accordion__item", className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `accordion__question ${active && "expanded"} d-flex align-items-center p-relative`,
                children: [
                    number && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "number",
                        children: number
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "sm-title-block",
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `accordion__answer ${active && "active"}`,
                children: children
            })
        ]
    });
}
function Accordion({ duration =0.4 , className , children  }) {
    const accordion = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let activeIndex;
        const items = accordion.current.querySelectorAll(".accordion__item");
        if (!items) return;
        const closeAccording = ($element)=>{
            const { question , answer  } = $element.dsnAccording;
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.set(answer, {
                height: "auto",
                display: "block",
                overflow: "hidden"
            });
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(answer, {
                height: 0,
                paddingTop: 0,
                overflow: "hidden",
                display: "block",
                duration,
                clearProps: "paddingTop,height,overflow,display",
                onComplete () {
                    answer.classList.remove("active");
                    question.classList.remove("expanded");
                }
            });
        };
        const openAccording = ($element)=>{
            const { question , answer , style  } = $element.dsnAccording;
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.set(answer, {
                height: 0,
                display: "block",
                overflow: "hidden",
                paddingTop: 0
            });
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(answer, {
                height: style.height,
                duration,
                paddingTop: style.paddingTop,
                clearProps: "paddingTop,height,overflow,display",
                onComplete () {
                    answer.classList.add("active");
                    question.classList.add("expanded");
                }
            });
        };
        items.forEach(($item, $index)=>{
            const question = $item.querySelector(".accordion__question");
            const answer = $item.querySelector(".accordion__answer");
            answer.style.display = "block";
            $item.dsnAccording = {
                question,
                answer,
                style: {
                    height: answer.getBoundingClientRect().height,
                    paddingTop: window.getComputedStyle(answer).paddingTop
                }
            };
            answer.style.display = "";
            if (question?.classList.contains("expanded") && activeIndex === undefined) activeIndex = $index;
            else {
                question?.classList.remove("expanded");
                answer?.classList.remove("active");
            }
            question.addEventListener("click", function() {
                if (activeIndex === $index) return;
                if (activeIndex !== undefined) closeAccording(items[activeIndex]);
                openAccording($item);
                activeIndex = $index;
            });
        });
        return ()=>{
            items.forEach(($item)=>{
                const { dsnAccording  } = $item;
                dsnAccording.question.replaceWith(dsnAccording.question.cloneNode(true));
                delete $item.dsnAccording;
            });
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_3__/* .dsnCN */ .gU)("dsn-accordion accordion", className),
        ref: accordion,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "accordion__wrapper",
            children: children
        })
    });
}
Accordion.item = AccordionItem;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);


/***/ }),

/***/ 1930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4653);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9735);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, _Service__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, _Service__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function ServiceSwiper({ className , desktop , mobile , tablet , blur , parallaxContent , data , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Service__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_4__/* .dsnCN */ .gU)(className, blur && "has-blur"),
        data: data,
        isSwiper: true,
        ...props,
        parallaxContent: parallaxContent,
        tag: swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceSwiper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5728:
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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4628);
/* harmony import */ var _components_header_HeaderFull__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4557);
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7091);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4146);
/* harmony import */ var _components_services_ServiceSwiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1930);
/* harmony import */ var _layout_DsnGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6878);
/* harmony import */ var _components_list_List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4563);
/* harmony import */ var _components_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6964);
/* harmony import */ var _components_accordion_Accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6218);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_skill_Skills__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9967);
/* harmony import */ var _components_header_BgDot__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2643);
/* harmony import */ var _components_facts_Facts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9594);
/* harmony import */ var _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(907);
/* harmony import */ var _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8788);
/* harmony import */ var _components_brand_client_BrandClient__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(416);
/* harmony import */ var _components_model_right_ModalContact__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9849);
/* harmony import */ var _components_next_NextPage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(6331);
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1084);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_25__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_Layout__WEBPACK_IMPORTED_MODULE_2__, _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_5__, _components_services_ServiceSwiper__WEBPACK_IMPORTED_MODULE_9__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__, _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_19__, _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_20__, _components_footer_Footer__WEBPACK_IMPORTED_MODULE_24__]);
([_layout_Layout__WEBPACK_IMPORTED_MODULE_2__, _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_5__, _components_services_ServiceSwiper__WEBPACK_IMPORTED_MODULE_9__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__, _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_19__, _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_20__, _components_footer_Footer__WEBPACK_IMPORTED_MODULE_24__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


























const headerData = {
    title: `Crafting Digital <br/> Experiences`.toUpperCase(),
    subtitle: `<span class="heading-color line-shape line-shape-before">We are a design & development agency</span>`,
    src: "/img/header.jpg"
};
function Demo2() {
    _components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"].defaultProps */ .Z.defaultProps = {
        className: "align-items-start",
        classDesc: "line-shape line-shape-after text-uppercase",
        classDesInner: "line-bg-left",
        dirDescription: "after",
        classTitle: "text-uppercase"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        modelRight: {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_model_right_ModalContact__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {}),
            propsModal: {
                textBtn: "Contact"
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_25___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Creative Agency  | Eremia Creative Portfolio Multi-Purpose"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_header_HeaderFull__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: "dsn-container",
                heroContent: headerData,
                overlay: 5,
                fullWidth: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-20 max-w570",
                        children: "Miena sipu del inora aid consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis nutka , pulvinar dapibus leo della pierrano set amuse."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        href: "/services",
                        className: "background-theme mt-20",
                        borderStyle: false,
                        borderRadius: true,
                        children: "Our Services"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "dsn-container section-margin dsn-under-header dsn-offset",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_services_ServiceSwiper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    desktop: {
                        spaceBetween: 15,
                        slidesPerView: 2.2
                    },
                    autoplay: true,
                    backgroundColor: "background-section",
                    grabCursor: true,
                    loop: true,
                    loopedSlides: 2,
                    speed: 1000,
                    data: (0,_data_service__WEBPACK_IMPORTED_MODULE_8__/* .getServiceData */ .Y)(),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: "mt-30 dsn-container justify-content-between"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container section-margin",
                "data-dsn-title": "About Us",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "sub-heading line-bg-left mb-15 text-uppercase",
                        children: "What We Do"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        col: 2,
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_list_List__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        className: "pt-50 mt-50 border-top mt-md-30 pt-md-30",
                        col: 3,
                        iconSize: "20px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_list_List__WEBPACK_IMPORTED_MODULE_11__/* ["default"].item */ .Z.item, {
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faCheck,
                                    className: "theme-color"
                                }),
                                className: "align-items-center",
                                children: "Advanced Grid"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_list_List__WEBPACK_IMPORTED_MODULE_11__/* ["default"].item */ .Z.item, {
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faCheck,
                                    className: "theme-color"
                                }),
                                className: "align-items-center",
                                children: "Top Performance"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_list_List__WEBPACK_IMPORTED_MODULE_11__/* ["default"].item */ .Z.item, {
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faCheck,
                                    className: "theme-color"
                                }),
                                className: "align-items-center",
                                children: "Responsive Design"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                className: "p-relative mt-section over-hidden",
                col: 2,
                colTablet: 1,
                colGap: 0,
                rowGap: 0,
                "data-dsn-title": "Feature",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "box-img",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            alt: "",
                            src: "/img/rachel-claire.jpg",
                            height: "100%"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "box-info box-padding background-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                className: "mb-50",
                                defaultSpace: false,
                                description: "Some Feature",
                                children: "We combine design and thinking and technical craft."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "max-w570 dsn-up mb-10 ",
                                children: "When our team provides design and digital marketing. Applied arts can include industrial design, graphic design,"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "max-w570 dsn-up",
                                children: " fashion design, and the decorative arts which traditionally includes craft objects."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "border-bottom mt-30 mb-30"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_list_List__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                className: "pb-30 border-bottom",
                                col: 1,
                                rowGap: 30,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_list_List__WEBPACK_IMPORTED_MODULE_11__/* .ListItem */ .H, {
                                        number: "1",
                                        headingTag: "span",
                                        headingTitle: "sm-title-block",
                                        children: "Next level Business consulting services"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_list_List__WEBPACK_IMPORTED_MODULE_11__/* .ListItem */ .H, {
                                        number: "2",
                                        headingTag: "span",
                                        headingTitle: "sm-title-block",
                                        children: "Marketing strategies & Digital marketing"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_list_List__WEBPACK_IMPORTED_MODULE_11__/* .ListItem */ .H, {
                                        number: "3",
                                        headingTag: "span",
                                        headingTitle: "sm-title-block",
                                        children: "Management & Strong Strategies"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_button_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                href: "/services",
                                className: "background-theme mt-30",
                                borderStyle: false,
                                borderRadius: true,
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
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                className: "p-relative mb-section over-hidden",
                col: 2,
                colTablet: 1,
                colGap: 0,
                rowGap: 0,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "box-info box-padding background-section order-md-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                className: "mb-50",
                                defaultSpace: false,
                                description: "Some Feature",
                                children: "Financing solutions ."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "max-w570 dsn-up",
                                children: "A business consulting agency is involved in the planning, implementation, and education of businesses. We work directly with business owners on developing a business plan, identifying marketing needs and developing the necessary skills for business ownership."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "border-bottom mt-30 mb-30"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_accordion_Accordion__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                className: "pb-30 border-bottom",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_accordion_Accordion__WEBPACK_IMPORTED_MODULE_14__/* .AccordionItem */ .Q, {
                                        title: "Website & Mobile App Design",
                                        active: true,
                                        number: 1,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives."
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_accordion_Accordion__WEBPACK_IMPORTED_MODULE_14__/* .AccordionItem */ .Q, {
                                        title: "User Experience",
                                        number: 2,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_button_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                href: "/services",
                                className: "background-theme mt-30",
                                borderStyle: false,
                                borderRadius: true,
                                children: [
                                    "View More ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "icon",
                                        children: "⟶"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "box-img order-md-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            alt: "",
                            src: "/img/project/project2/4.jpg",
                            height: "100%"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "about-section-2 section-margin",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        col: 2,
                        colTablet: 1,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "box-img p-relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "box-inner-img p-absolute",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_15___default()), {
                                            className: "cover-bg-img",
                                            src: "/img/help-project.jpg",
                                            alt: "",
                                            fill: true
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "box-inner-img p-absolute",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_15___default()), {
                                            className: "cover-bg-img",
                                            src: "/img/help2.jpg",
                                            alt: "",
                                            fill: true
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "box-information",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        className: "align-items-start mb-50",
                                        description: "CAPABILITIES",
                                        defaultSpace: false,
                                        children: "We help to create visual strategies."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-30",
                                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati autem distinctio veritatis excepturi, fugit iste repellendus, porro delectus rem ducimus cum fugiat, magnam voluptates cumque? Consequatur eos debitis sit?"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_skill_Skills__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skill_Skills__WEBPACK_IMPORTED_MODULE_16__/* .SkillProgressBar */ .mW, {
                                                number: 85,
                                                children: "Web Design"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skill_Skills__WEBPACK_IMPORTED_MODULE_16__/* .SkillProgressBar */ .mW, {
                                                number: 72,
                                                children: "SEO, analytics & marketing"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skill_Skills__WEBPACK_IMPORTED_MODULE_16__/* .SkillProgressBar */ .mW, {
                                                number: 89,
                                                children: "Mobile Development"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "section-padding p-relative background-section",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header_BgDot__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header_BgDot__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        rightPosition: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_facts_Facts__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                            className: "text-center",
                            col: 4,
                            colTablet: 2
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container section-margin",
                "data-dsn-title": "Our Blog",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        description: "Lasts post",
                        children: [
                            "Latest And Greatest ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Post"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        className: "our-blog-classic",
                        grabCursor: true,
                        desktop: {
                            spaceBetween: 15,
                            slidesPerView: 3
                        },
                        mobile: {
                            spaceBetween: 0,
                            slidesPerView: 1
                        },
                        loop: true,
                        speed: 800,
                        watchSlidesProgress: true,
                        loopedSlides: 2,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            className: `justify-content-between dsn-container mt-30`
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "section-margin",
                "data-dsn-title": "testimonials",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    className: "container",
                    title: "Feedback from our clients.",
                    skin: [
                        "testimonials-half"
                    ],
                    desktop: {
                        slidesPerView: 2
                    },
                    backgroundColor: "background-section",
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
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: `justify-content-between dsn-container mt-30`
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "container section-margin",
                "data-dsn-title": "our clients",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        className: `align-items-center text-center`,
                        description: "Our clients",
                        children: [
                            "Your successful, our ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "reputation"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_brand_client_BrandClient__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        col: 4,
                        colTablet: 2,
                        colGap: 0,
                        rowGap: 0
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_next_NextPage__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                className: "section-padding border-top background-section"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
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
var __webpack_exports__ = __webpack_require__.X(0, [9210,9403,1664,3121,5675,4597,1566,1688,3233,3042,6401,4396,4425,2407,6331,4959,6964,2055,4557,7270,4628,8788,907,9594,416,9967,18], () => (__webpack_exec__(5728)));
module.exports = __webpack_exports__;

})();