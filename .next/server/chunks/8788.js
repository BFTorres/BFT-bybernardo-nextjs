"use strict";
exports.id = 8788;
exports.ids = [8788];
exports.modules = {

/***/ 8788:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _animation_MoveTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2055);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9735);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_testimonial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5285);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Testimonial({ className , title , desktop , mobile , tablet , parallaxImage , parallaxContent , speed , skin , loopedSlides , backgroundColor , styleBox , loop , // @ts-ignore
children , ...restProps }) {
    const TestimonialDetails = (0,_data_testimonial__WEBPACK_IMPORTED_MODULE_7__/* .getTestimonialData */ .D)();
    const testimonials = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const isLine = styleBox === "line";
    const isCorner = styleBox === "corner";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const nav = testimonials.current.querySelector(".testimonial-nav .swiper")?.swiper;
        const content = testimonials.current.querySelector(".testimonial-content .swiper")?.swiper;
        if (!nav || !content) return;
        // nav.thumbs.swiper = content;
        nav.controller.control = content;
        content.controller.control = nav;
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_5__/* .dsnCN */ .gU)("testimonials", skin?.join(" ").trim(), className, title && "testimonials-with-title"),
        ref: testimonials,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_5__/* .dsnCN */ .gU)("testimonials-box  box-padding p-relative w-100", backgroundColor),
            children: [
                title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animation_MoveTrigger__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        from: {
                            y: 0,
                            opacity: 0
                        },
                        to: {
                            y: -60,
                            opacity: 1
                        },
                        tablet: false,
                        mobile: false,
                        children: (ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "p-relative section-title",
                                ref: ref,
                                dangerouslySetInnerHTML: {
                                    __html: title
                                }
                            })
                    })
                }),
                isLine && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
                        })
                    ]
                }),
                isCorner && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "corner corner-left-top"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "corner corner-left-bottom"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "corner corner-right-top"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "corner corner-right-bottom"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "testimonials-inner p-relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "testimonial-nav",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "testimonial-nav-inner",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                    modules: [
                                        swiper__WEBPACK_IMPORTED_MODULE_4__.Parallax,
                                        swiper__WEBPACK_IMPORTED_MODULE_4__.Controller
                                    ],
                                    spaceBetween: 30,
                                    slidesPerView: 1,
                                    breakpoints: {
                                        992: desktop,
                                        768: tablet,
                                        576: mobile
                                    },
                                    ...restProps,
                                    speed: speed,
                                    loop: loop,
                                    loopedSlides: loopedSlides,
                                    children: TestimonialDetails.map(($item, $index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                            className: "d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "box-img",
                                                    ...parallaxImage,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        src: $item.src,
                                                        width: 80,
                                                        height: 80,
                                                        alt: $item.name,
                                                        sizes: "(max-width: 768px) 70px,(max-width: 1200px) 70px,33vw"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "box-text",
                                                    ...parallaxContent,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "title-block testimonial-name",
                                                            children: $item.name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                            className: "sm-title-block testimonial-description",
                                                            children: $item.label
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, $index))
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "testimonial-content ",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                modules: [
                                    swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,
                                    swiper__WEBPACK_IMPORTED_MODULE_4__.Controller,
                                    swiper__WEBPACK_IMPORTED_MODULE_4__.Parallax
                                ],
                                parallax: true,
                                pagination: {
                                    clickable: true,
                                    el: ".swiper-pagination"
                                },
                                loop: loop,
                                loopedSlides: loopedSlides,
                                allowTouchMove: false,
                                speed: speed,
                                children: [
                                    TestimonialDetails.map(($item, $index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                "data-swiper-parallax": "90%",
                                                "data-swiper-parallax-opacity": "0",
                                                children: $item.description
                                            })
                                        }, $index)),
                                    children
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
Testimonial.defaultProps = {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getTestimonialData)
/* harmony export */ });
const TestimonialDetails = [
    {
        name: "HellstarWorks",
        label: "Envato Customer",
        src: "/img/team/1.jpg",
        description: `"The designer is just amazing! Very good quality and taste. This template is incredible beautiful. The overall impression is more than good.The support cannot be better. I wish the team all success!"`
    },
    {
        name: "Lindamiku",
        label: "Marketing Manager",
        src: "/img/team/2.jpg",
        description: `"First of all, I really enjoyed setting this up. What a
                                                                great
                                                                layout and design. The support is fast and high quality.
                                                                They
                                                                really made an effort to make sure I got the help I
                                                                needed.
                                                                keep in mind that it is not only a great design, but
                                                                also it
                                                                is easy to change it up with little effort. Great Job!"`
    },
    {
        name: "Makrandpatne",
        label: "Web Designer",
        src: "/img/team/3.jpg",
        description: `"This theme is awesome and the designer is very helpful.
                                                                I
                                                                had a few questions before purchase. He/She helped me
                                                                with
                                                                all the doubts. Also, they provide quick support. Thank
                                                                you
                                                                so much for a beautiful theme"`
    },
    {
        name: "MTLGraphic",
        label: "Graphic Design",
        src: "/img/team/2.jpg",
        description: `"Basically im using this theme as a base for my new
                                                                website
                                                                and i couldnt be happier. Ran into some bumps but the
                                                                team
                                                                who developed this theme was there to help me with any
                                                                problems. Very slick nice ajax portfolio theme"`
    }
];
const getTestimonialData = ()=>TestimonialDetails;


/***/ })

};
;