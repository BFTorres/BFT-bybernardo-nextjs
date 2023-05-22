"use strict";
exports.id = 2055;
exports.ids = [2055];
exports.modules = {

/***/ 2055:
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
/* harmony import */ var _hooks_dsnHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4425);




function MoveTrigger({ children , from , to , ease , start , end , scrub , markers , stagger , mobile , tablet  }) {
    const [ref, setRef] = (0,_hooks_dsnHooks__WEBPACK_IMPORTED_MODULE_3__/* .useArrayRef */ .S5)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!ref.current || !mobile && window.innerWidth <= 767 || !tablet && window.innerWidth <= 991 && window.innerWidth > 767) return;
        const animation = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.effects.moveSection(ref.current, {
            from: from,
            to: {
                stagger: stagger,
                ...to
            },
            ease: ease,
            start: start,
            end: end,
            scrub: scrub,
            markers: markers
        });
        return ()=>{
            animation.kill();
        };
    }, [
        ref,
        from,
        to,
        ease,
        start,
        end,
        scrub,
        markers,
        stagger,
        mobile,
        tablet
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: typeof children === "function" ? children(setRef) : children
    });
}
MoveTrigger.defaultProps = {
    from: {
        y: 0
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
    mobile: true,
    tablet: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoveTrigger);


/***/ })

};
;