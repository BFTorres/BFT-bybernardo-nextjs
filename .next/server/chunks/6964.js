"use strict";
exports.id = 6964;
exports.ids = [6964];
exports.modules = {

/***/ 6964:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9735);






function ParallaxImage({ speed , parallax , overlay , height , heightTable , heightMobile , triggerHook , animationActive , caption , className , asBackground , parallaxFrom , ...restProps }) {
    const target = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const activeAnimateTrigger = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!restProps.src) return;
        const img = {
            current: target.current.querySelector(".cover-bg-img")
        };
        if (triggerHook === "bottom") gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.set(img.current, {
            height: `+=${speed}%`,
            yPercent: `-=${speed}`
        });
        if (triggerHook === "center") gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.set(img.current, {
            height: `+=${speed / 2}%`,
            yPercent: `-=${speed / 2}`
        });
        if (parallaxFrom) gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.set(img.current, parallaxFrom);
        if (animationActive) activeAnimateTrigger.current = gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
            trigger: target.current,
            start: `top bottom`,
            onEnter: (self)=>setActive("dsn-active")
        });
        const image = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(img.current, {
            ...parallax,
            yPercent: triggerHook === "top" ? speed : 0,
            force3D: true,
            ease: "none",
            scrollTrigger: {
                trigger: target.current,
                start: `top ${triggerHook}`,
                scrub: true
            }
        });
        return ()=>{
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.set(img.current, {
                clearProps: "height,yPercent"
            });
            image.scrollTrigger.kill();
            image.kill();
            activeAnimateTrigger.current?.kill();
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return restProps.src && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_5__/* .dsnCN */ .gU)("dsn-parallax-img", animationActive && "dsn-animate", active, asBackground && "dsn-bg-parallax", className),
        "data-overlay": overlay,
        ref: target,
        style: {
            "--height": height,
            "--height-table": heightTable,
            "--height-mobile": heightMobile
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                className: "cover-bg-img p-absolute",
                fill: true,
                alt: "",
                ...restProps
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
ParallaxImage.defaultProps = {
    height: "100vh",
    heightTable: "80vh",
    heightMobile: "50vh",
    overlay: 0,
    triggerHook: "bottom",
    animationActive: true,
    speed: 30,
    parallax: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParallaxImage);


/***/ })

};
;