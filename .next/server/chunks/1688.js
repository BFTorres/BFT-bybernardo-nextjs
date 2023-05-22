"use strict";
exports.id = 1688;
exports.ids = [1688];
exports.modules = {

/***/ 1688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _transition_transitionDefalut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4452);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





function DsnLink({ children , className , href , transitionPage =true , ...restProps }) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!transitionPage || !href || router.asPath === href) return;
        const currentLink = ref.current;
        const domTransition = {
            current: null,
            tl: null
        };
        const handleClick = (e)=>{
            e.preventDefault();
            if (domTransition.current !== null) return;
            [domTransition.current, domTransition.tl] = (0,_transition_transitionDefalut__WEBPACK_IMPORTED_MODULE_3__/* .tdStart */ .U)(transitionPage);
            domTransition.tl.call(()=>{
                router.push(href);
                domTransition.tl.kill();
                domTransition.tl = null;
                domTransition.current = null;
            });
        };
        currentLink.addEventListener("click", handleClick);
        return ()=>{
            currentLink.removeEventListener("click", handleClick);
        };
    }, [
        transitionPage,
        router,
        href
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        className: className,
        ...restProps,
        ref: ref,
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DsnLink);


/***/ }),

/***/ 4452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ tdStart),
/* harmony export */   "b": () => (/* binding */ tdEnd)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);

function tdStart(transitionPage) {
    const svg = (direction)=>`<svg class="dsn-separator-${direction} dsn-icon-assistant-color" width="100%" height="100%" viewBox="0 0 100 10"
         preserveAspectRatio="none">
        <path class="path-anim separator__path" vector-effect="non-scaling-stroke" d="M 0 0 C 40 16 75 10 100 0 L 0 0 Z"></path>
    </svg>`;
    const domTransition = document.createElement("div");
    domTransition.className = "dsn-ajax-loader dsn-ajax-normal bg-load background-section d-flex flex-column justify-content-between text-center";
    domTransition.innerHTML = `
            ${svg("top")}
            <h6 class="d-flex justify-content-center title text-uppercase">${typeof transitionPage === "object" ? transitionPage?.title : "bybernardo"}</h6>
            ${svg("bottom")}
            `;
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(domTransition, {
        yPercent: 100,
        y: 150
    });
    document.body.querySelector("#__dsn_content").append(domTransition);
    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({
        defaults: {
            ease: "Expo.easeInOut"
        }
    }).to(domTransition, {
        yPercent: 0,
        y: 0,
        duration: 1.5
    }).to(domTransition.querySelector(".dsn-separator-top .path-anim"), {
        attr: {
            d: "M 0 0 C 40 0 55 0 100 0 L 0 0 Z"
        },
        overwrite: false,
        duration: 1.5
    }, 0).to("#dsn-scrollbar", {
        y: -400,
        duration: 1
    }, "-=1.2");
    return [
        domTransition,
        tl
    ];
}
function tdEnd() {
    document.body.querySelectorAll(".dsn-ajax-loader").forEach((el, index)=>{
        if (index > 0) {
            el.remove();
            return;
        }
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({
            defaults: {
                ease: "Expo.easeInOut"
            }
        }).to(el, {
            yPercent: -100,
            duration: 1.5
        }).to(el.querySelector(".dsn-separator-bottom .path-anim"), {
            attr: {
                d: "M 0 0 C 40 0 55 0 100 0 L 0 0 Z"
            },
            overwrite: false,
            duration: 1.5
        }, 0).fromTo("#dsn-scrollbar", {
            y: 400
        }, {
            y: 0,
            clearProps: "y"
        }, "-=1.2").call(()=>{
            el.remove();
        });
    });
}


/***/ })

};
;