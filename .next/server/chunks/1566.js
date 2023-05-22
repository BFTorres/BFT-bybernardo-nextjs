"use strict";
exports.id = 1566;
exports.ids = [1566];
exports.modules = {

/***/ 9576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9735);


function ModalRight({ className ="" , children =null , textBtn ="" , ...restProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "contact-btn",
                onClick: ()=>document.body.classList.toggle("dsn-show-contact"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "contact-btn-txt",
                    children: textBtn
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "contact-modal background-section",
                ...restProps,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "contact-container h-100 w-100  border-right",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)("box-contact-inner", className),
                        children: children
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalRight);


/***/ }),

/***/ 8326:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faShareAlt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9583);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faShareAlt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faShareAlt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(303);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9735);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__]);
_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const socialData = [
    {
        link: "https://www.linkedin.com/in/bernardo-fonseca-torres/",
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faLinkedinIn,
        name: "LinkedIn"
    },
    {
        link: "https://medium.com/@bernardofonsecatorres",
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMediumM,
        name: "Medium"
    },
    {
        link: "https://www.xing.com/profile/Bernardo_FonsecaTorres",
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXing,
        name: "XING"
    }
];
function SocialOne({ className ="" , ...restProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_4__/* .dsnCN */ .gU)("social-side social-network d-flex align-items-center", className),
        ...restProps,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "icon",
                "data-dsn": "parallax",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons_faShareAlt__WEBPACK_IMPORTED_MODULE_2__.faShareAlt
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "socials d-flex flex-column p-absolute ",
                children: socialData && socialData.map(($item, number)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        style: {
                            "--dsn-index-animate": socialData.length - number - 1
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: $item.link,
                            target: "_blank",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                    icon: $item.icon
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: $item.name
                                })
                            ]
                        })
                    }, number))
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialOne);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export removeAttr */
function dataAttr($target, $data, $defaul = false, rAttr = true) {
    if (!$target) return;
    const out = $target.getAttribute("data-dsn-" + $data);
    if (rAttr) removeAttr($target, $data);
    try {
        return JSON.parse(out);
    } catch (e) {
        if (out) return out;
        else return $defaul;
    }
}
function removeAttr($target, $data) {
    if (!$target) return;
    $target.removeAttribute("data-dsn-" + $data);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataAttr);


/***/ }),

/***/ 6878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Dsn */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9735);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



// eslint-disable-next-line react/display-name
const Dsn = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((props, ref)=>{
    const { className , col , colTablet , colMobile , customGrid , colGap , colGapTablet , colGapMobile , rowGap , rowGapTablet , style , as: Tag = "div" , rowGapMobile , children , ...restProps } = props;
    const gapPx = ($param)=>{
        if (!isNaN($param)) return $param + "px";
        return $param;
    };
    return(// @ts-ignore
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
        style: {
            ...style,
            "--dsn-col-custom": customGrid?.desktop,
            "--dsn-col-custom-tablet": customGrid?.tablet,
            "--dsn-col-custom-mobile": customGrid?.mobile,
            "--dsn-col-number": col,
            "--dsn-col-number-tablet": colTablet,
            "--dsn-col-number-mobile": colMobile,
            "--dsn-col-gap": gapPx(colGap),
            "--dsn-col-gap-tablet": gapPx(colGapTablet),
            "--dsn-col-gap-mobile": gapPx(colGapMobile),
            "--dsn-row-gap": gapPx(rowGap),
            "--dsn-row-gap-tablet": gapPx(rowGapTablet),
            "--dsn-row-gap-mobile": gapPx(rowGapMobile)
        },
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)("dsn-grid-layout", customGrid && "dsn-grid-custom", className),
        ref: ref,
        ...restProps,
        children: children
    }));
});
Dsn.defaultProps = {};
function DsnGrid(props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dsn, {
        ...props,
        ref: ref
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(DsnGrid)));


/***/ }),

/***/ 1779:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9735);
/* harmony import */ var _hooks_dataAttr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4975);
/* harmony import */ var _components_social_SocialOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8326);
/* harmony import */ var _MainScrollBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4553);
/* harmony import */ var _components_model_right_ModalRight_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9576);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_social_SocialOne__WEBPACK_IMPORTED_MODULE_3__]);
_components_social_SocialOne__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








// @ts-ignore
function Layout({ className , children , tag: Tag = "div" , activeScrollbar , optionsScrollbar , colorVersion , modelRight , ...restProps }) {
    const paginateRight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const scrollbar = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.scrollbar);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const scrollDiv = document.createElement("div");
        scrollDiv.style.cssText = "width:100px;height:100px;overflow: scroll;position: absolute;top: -9999px;";
        document.body.appendChild(scrollDiv);
        document.body.style.setProperty("--dsn-width-scroll", scrollDiv.offsetWidth - scrollDiv.clientWidth + "px");
        document.body.removeChild(scrollDiv);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const paginate = document.body.querySelectorAll("[data-dsn-title]");
        if (paginate) paginate.forEach((el)=>{
            const title = (0,_hooks_dataAttr__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(el, "title", false, false);
            const scrollDiv = document.createElement("div");
            scrollDiv.classList.add("dsn-link-paginate");
            scrollDiv.innerText = title.toUpperCase();
            paginateRight.current.append(scrollDiv);
            el["paginateTarget"] = scrollDiv;
            scrollDiv.addEventListener("click", (e)=>{
                e.preventDefault();
                (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_2__/* .scrollTop */ .SM)({
                    element: el,
                    scrollbar,
                    duration: -80
                });
            });
        });
        return ()=>{
            if (paginate) paginate.forEach((el)=>el["paginateTarget"]?.remove());
        };
    }, [
        scrollbar
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tag, {
        id: "main_layout",
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_2__/* .dsnCN */ .gU)("background-main", className),
        ...restProps,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_2__/* .dsnCN */ .gU)("main-content", activeScrollbar && "dsn-main-scrollbar"),
                children: activeScrollbar ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MainScrollBar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    options: optionsScrollbar,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "main-content",
                        className: "p-relative",
                        children: children
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    id: "main-content",
                    className: "p-relative",
                    children: children
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "line-border-style w-100 h-100"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_SocialOne__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "dsn-paginate-right-page",
                ref: paginateRight
            }),
            modelRight && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_model_right_ModalRight_jsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                ...modelRight.propsModal,
                children: modelRight.children
            })
        ]
    });
}
Layout.defaultProps = {
    colorVersion: "dark",
    activeScrollbar: true,
    optionsScrollbar: {
        damping: 0.085,
        alwaysShowTracks: true
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2274);
/* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(smooth_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4965);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _features_smooth_scrollbar_smoothScrollbarSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9513);






function MainScrollBar({ children , options , ...restProps }) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const scroll = smooth_scrollbar__WEBPACK_IMPORTED_MODULE_2___default().init(ref.current, options);
        gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.defaults({
            scroller: ref.current
        });
        scroll?.addListener(()=>gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.refresh());
        dispatch((0,_features_smooth_scrollbar_smoothScrollbarSlice__WEBPACK_IMPORTED_MODULE_5__/* .setScrollbar */ .uw)(scroll));
        ref.current?.style.removeProperty("overflow");
        document.body.classList.add("dsn-active-scrollbar");
        ref.current.querySelector(".scrollbar-track.scrollbar-track-x")?.remove();
        return ()=>{
            gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.defaults({
                scroller: null
            });
            scroll?.destroy();
        };
    }, [
        ref.current
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "dsn-scrollbar",
        ref: ref,
        style: {
            height: "100vh"
        },
        ...restProps,
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainScrollBar);


/***/ })

};
;