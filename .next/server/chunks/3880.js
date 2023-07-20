"use strict";
exports.id = 3880;
exports.ids = [3880];
exports.modules = {

/***/ 3880:
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






function NextProject({ height , number , attrContent , heroContent , className  }) {
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
                                        children: "Thyssenkrupp"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "p-absolute section-padding d-none top-0 w-100 h-100 left-0",
                                        children: "Thyssenkrupp"
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
NextProject.defaultProps = {
    height: "100%"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextProject);


/***/ })

};
;