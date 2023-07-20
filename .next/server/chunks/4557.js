"use strict";
exports.id = 4557;
exports.ids = [4557];
exports.modules = {

/***/ 4557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4965);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9735);
/* harmony import */ var _Image_BgImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6401);
/* harmony import */ var _meta_MetaPost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3233);




//--> Component



function HeaderFull({ height , className , separate , overlay , parallax , heroContent , parallaxContent , justifyContent , alignItems ="center" , skin , fullWidth , children  }) {
    const header = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const bg = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const holder = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const content = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const animateText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const q = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.utils.selector(header);
    const { category , title , src , video , subtitle  } = heroContent;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.fromTo(q(".post-info span"), {
            y: -15,
            autoAlpha: 0
        }, {
            y: 0,
            autoAlpha: 1,
            stagger: 0.1
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.fromTo(q(".text-head , .dsn-description"), {
            y: 15,
            autoAlpha: 0
        }, {
            y: 0,
            autoAlpha: 1,
            stagger: 0.1
        });
        const animate = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline();
        bg.current && parallax && animate.to(bg.current.children, {
            ...parallax,
            ease: "none"
        }, 0);
        content.current && parallaxContent && animate.to(content.current, {
            ...parallaxContent,
            ease: "none"
        }, 0);
        animateText.current && animate.to(animateText.current, {
            clipPath: "inset(-20% 0 -10px 0)",
            ease: "none"
        }, 0);
        animate.to(holder.current, {
            y: 70,
            autoAlpha: 0,
            ease: "none"
        }, 0);
        gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
            animation: animate,
            trigger: header.current,
            start: "top top",
            scrub: true
        });
        return ()=>{
            if (animate.scrollTrigger) animate.scrollTrigger.kill();
            animate.kill();
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_4__/* .dsnCN */ .gU)("header-page overflow", (src || video) && !skin && "v-dark-head", skin, /*  skin && "v-dark-head-mobile" ,  */ fullWidth && "full-width"),
        ref: header,
        children: [
            src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image_BgImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                src: src,
                height: height,
                alt: title?.replace(/<[^>]+>/g, "") ?? "",
                overlay: overlay,
                video: video,
                ref: bg
            }),
            heroContent && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_4__/* .dsnCN */ .gU)("hero-content d-flex", className, justifyContent && "justify-content-" + justifyContent, alignItems && "align-items-" + alignItems),
                ref: content,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "content p-relative",
                    children: [
                        subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "subtitle mb-20",
                            dangerouslySetInnerHTML: {
                                __html: subtitle
                            }
                        }),
                        category && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_meta_MetaPost__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            category: category,
                            separate: separate
                        }),
                        title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-head",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "title",
                                dangerouslySetInnerHTML: {
                                    __html: title
                                }
                            })
                        }),
                        children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "dsn-description mt-30",
                            children: children
                        })
                    ]
                })
            })
        ]
    });
}
HeaderFull.defaultProps = {
    height: "100%",
    parallax: {
        yPercent: 30
    },
    parallaxContent: {
        yPercent: 50,
        autoAlpha: 0
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderFull);


/***/ })

};
;