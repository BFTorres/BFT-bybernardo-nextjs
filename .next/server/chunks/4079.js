"use strict";
exports.id = 4079;
exports.ids = [4079];
exports.modules = {

/***/ 7091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9735);
/* harmony import */ var _hooks_DsnLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1688);



function Button({ // @ts-ignore
className , borderRadius , children , href , LinkProps , transitionPage =false , borderStyle ="border-color-heading-color" , ...restProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_hooks_DsnLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        transitionPage: transitionPage,
        href: href,
        ...LinkProps,
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)("dsn-button", className, borderRadius && "border-rdu"),
        ...restProps,
        children: [
            borderStyle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)("dsn-border", borderStyle, borderRadius && "dsn-border-rdu")
            }),
            children
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 4425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AF": () => (/* binding */ dsnMediaMatching),
/* harmony export */   "S5": () => (/* binding */ useArrayRef),
/* harmony export */   "v9": () => (/* binding */ useSelector)
/* harmony export */ });
/* unused harmony export gsapMediaMatching */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_1__);


/**
 *
 * @returns {(React.MutableRefObject<null>|React.RefObject<unknown>|React.MutableRefObject<undefined>|(function(*=)))[]}
 */ function useArrayRef() {
    const refs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    refs.current = [];
    return [
        refs,
        (ref)=>ref && refs.current.push(ref)
    ];
}
function useSelector() {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const q = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.utils.selector(ref), [
        ref
    ]);
    return [
        q,
        ref
    ];
}
function gsapMediaMatching(contextFunc = null, element = null) {
    return gsap.matchMedia().add({
        desktop: "(min-width: 992px)",
        tablet: "(min-width: 768px) and (max-width: 991px)",
        mobile: "(max-width: 767px)"
    }, contextFunc, element);
}
function dsnMediaMatching(contextFunc = null, element = null) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [media, setMedia] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        desktop: false,
        tablet: false,
        mobile: false
    });
    const Resize = ()=>{
        const width = window.innerWidth;
        setMedia({
            desktop: width >= 992,
            tablet: width < 992 && width >= 768,
            mobile: width < 768
        });
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        Resize();
        window.addEventListener("resize", Resize);
        return ()=>{
            window.removeEventListener("resize", Resize);
        };
    }, []);
    return media;
}


/***/ })

};
;