"use strict";
(() => {
var exports = {};
exports.id = 2423;
exports.ids = [2423];
exports.modules = {

/***/ 6860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9735);
/* harmony import */ var _BgDot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2643);



function HeaderNormal({ className , tag: Tag = "header" , container ="dsn-container" , backgroundColor , children , ...restProps }) {
    return(// @ts-ignore
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tag, {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)("header-normal", backgroundColor),
        style: {
            padding: "160px 0"
        },
        ...restProps,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BgDot__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)(container, "h-100"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_1__/* .dsnCN */ .gU)("content-hero p-relative d-flex flex-column", className),
                    children: children
                })
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderNormal);


/***/ }),

/***/ 6904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animation_MoveTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2055);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9735);




function TitleCover({ className , children , from , to , ease , start , end , scrub , markers  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animation_MoveTrigger__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        from: from,
        to: to,
        markers: markers,
        scrub: scrub,
        end: end,
        start: start,
        ease: ease,
        children: (ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_3__/* .dsnCN */ .gU)("p-absolute title-cover", className),
                ref: ref,
                children: children
            })
    });
}
TitleCover.defaultProps = {
    from: {
        yPercent: -100,
        opacity: 0
    },
    to: {
        yPercent: 0,
        opacity: 0.12
    },
    end: "75%"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleCover);


/***/ }),

/***/ 4088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ IdeaIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const IdeaIcon = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    enableBackground: "new 0 0 300 300",
    viewBox: "0 0 300 300",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m164.804 62.461c2.478-.344 4.207-2.632 3.863-5.11s-2.632-4.207-5.11-3.862c-2.478.344-4.207 2.632-3.862 5.11.344 2.477 2.632 4.206 5.109 3.862z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m86 44c2.209 0 4-1.789 4-4v-12c0-2.209-1.791-4-4-4s-4 1.791-4 4v12c0 2.211 1.791 4 4 4z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m86 52c-2.209 0-4 1.789-4 4v12c0 2.211 1.791 4 4 4s4-1.789 4-4v-12c0-2.211-1.791-4-4-4z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m66 52h12c2.209 0 4-1.789 4-4s-1.791-4-4-4h-12c-2.209 0-4 1.789-4 4s1.791 4 4 4z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m94 52h12c2.209 0 4-1.789 4-4s-1.791-4-4-4h-12c-2.209 0-4 1.789-4 4s1.791 4 4 4z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m270 268h-80.983l-5.714-20h64.177c12.418 0 22.52-10.102 22.52-22.52v-126.96c0-12.418-10.102-22.52-22.52-22.52h-186.96c-12.418 0-22.52 10.102-22.52 22.52v126.953c0 10.595 7.471 19.589 17.516 21.894l2.064 20.633h-27.58c-2.209 0-4 1.789-4 4s1.791 4 4 4h240c2.209 0 4-1.789 4-4s-1.791-4-4-4zm-89.302 0h-49.397l5.714-20h37.968zm-82.278 0 .8-8h4.696c5.561 0 10.084-4.523 10.084-10.086v-1.914h14.698l-5.715 20zm5.496-32c1.148 0 2.084.938 2.084 2.086v1.914h-4.78l.4-4zm-3.496 12h5.58v1.914c0 1.148-.936 2.086-2.084 2.086h-3.896zm-39.9-164h186.96c8.006 0 14.52 6.512 14.52 14.52v113.48h-216v-113.48c0-8.008 6.514-14.52 14.52-14.52zm-14.52 141.473v-5.473h216v5.48c0 8.008-6.514 14.52-14.52 14.52h-133.48v-1.914c0-5.562-4.523-10.086-10.084-10.086h-5.916-4-36c-1.131 0-2.207.477-2.965 1.316-.76.836-1.127 1.957-1.016 3.082l.632 6.318c-5.096-2.278-8.651-7.377-8.651-13.243zm19.619 42.527-3.199-32h31.16l-3.199 32z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m155.596 236.233c3.378 0 6.116-2.739 6.116-6.116 0-3.378-2.739-6.116-6.116-6.116-3.378 0-6.117 2.738-6.117 6.116 0 3.377 2.739 6.116 6.117 6.116z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m114 208c11.974 0 22.987-5.238 30.612-14.354 4.193 1.497 8.687 2.354 13.388 2.354 4.116 0 8.135-.622 12-1.84v7.645c0 1.711 1.09 3.234 2.713 3.785.422.145.857.215 1.287.215 1.217 0 2.398-.559 3.17-1.562l12.494-16.243h21.314c1.676 0 3.174-1.047 3.754-2.617.578-1.574.115-3.34-1.16-4.43l-17.034-14.51c.918-3.396 1.462-6.89 1.462-10.443 0-22.055-17.943-40-40-40-2.416 0-4.77.251-7.068.664-6.029-14.465-20.308-24.664-36.932-24.664-22.057 0-40 17.945-40 40 0 6.469 1.578 12.564 4.317 17.976-2.809 5.552-4.317 11.767-4.317 18.024 0 22.055 17.943 40 40 40zm0-8c-17.645 0-32-14.355-32-32 0-3.464.587-6.807 1.649-10.017 7.342 8.563 18.213 14.017 30.351 14.017 2.416 0 4.77-.251 7.068-.664 3.259 7.819 8.947 14.356 16.097 18.744-6.018 6.343-14.275 9.92-23.165 9.92zm73.695-20c-1.242 0-2.414.578-3.17 1.562l-6.525 8.48v-28.882l22.115 18.84zm-29.695-56c17.645 0 32 14.355 32 32 0 1.542-.124 3.071-.341 4.583l-13.065-11.129c-1.188-1.008-2.852-1.238-4.271-.586-1.416.656-2.322 2.074-2.322 3.633v33.139c-3.813 1.546-7.84 2.361-12 2.361-12.969 0-24.138-7.77-29.158-18.887 14.721-5.911 25.157-20.305 25.157-37.114 0-2.603-.269-5.142-.746-7.608 1.553-.233 3.129-.392 4.746-.392zm-32 32c0-13.211 8.049-24.575 19.5-29.454.307 1.776.5 3.591.5 5.454 0 13.211-8.049 24.575-19.5 29.454-.307-1.777-.5-3.591-.5-5.454zm-12-56c12.969 0 24.138 7.769 29.158 18.887-14.722 5.909-25.158 20.304-25.158 37.113 0 2.603.269 5.142.746 7.608-1.553.233-3.129.392-4.746.392-17.645 0-32-14.355-32-32s14.355-32 32-32z"
            })
        ]
    })
});


/***/ }),

/***/ 4625:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1779);
/* harmony import */ var _components_header_HeaderNormal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6860);
/* harmony import */ var _layout_DsnGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6878);
/* harmony import */ var _components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3042);
/* harmony import */ var _components_header_BgDot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2643);
/* harmony import */ var _components_facts_Facts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9594);
/* harmony import */ var _components_heading_TitleCover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6904);
/* harmony import */ var _components_list_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4563);
/* harmony import */ var _components_services_Service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4653);
/* harmony import */ var _components_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4088);
/* harmony import */ var _components_button_ButtonProject__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7705);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4146);
/* harmony import */ var _components_Team_Team__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(588);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _data_team__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3729);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_next_NextPage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6331);
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1084);
/* harmony import */ var _components_model_right_ModalContact__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9849);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_22__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_Layout__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__, _components_services_Service__WEBPACK_IMPORTED_MODULE_11__, _components_footer_Footer__WEBPACK_IMPORTED_MODULE_20__]);
([_layout_Layout__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__, _components_services_Service__WEBPACK_IMPORTED_MODULE_11__, _components_footer_Footer__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























function Service() {
    _components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"].defaultProps */ .Z.defaultProps = {
        classDesInner: "line-bg-left"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        modelRight: {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_model_right_ModalContact__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {}),
            propsModal: {
                textBtn: "Contact"
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_22___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Service  | Eremia Creative Portfolio Multi-Purpose"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_header_HeaderNormal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                backgroundColor: "background-section",
                className: "text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "subtitle p-relative line-shape   mb-30",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "pl-10 pr-10 background-main",
                            children: "OUR SERVICES"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: "title",
                        children: [
                            "We are delivering beautiful ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            " digital products for you."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: "container section-margin",
                customGrid: {
                    desktop: "70% 30%"
                },
                rowGapTablet: 50,
                "data-dsn-title": "What We Do",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "box-left",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                defaultSpace: false,
                                description: "What We Do"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "mt-25",
                                children: "The good writers touch life often. The mediocre ones run a quick hand over her. The bad ones rape her and leave her for the flies."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "box-right",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                defaultSpace: false,
                                description: "Our Services"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "mt-25",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "mb-15",
                                        children: "Brand Consulting"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "mb-15",
                                        children: "Marketing Management"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "mb-15",
                                        children: "Customer Insight"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "section-margin p-relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header_BgDot__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header_BgDot__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        rightPosition: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_facts_Facts__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            className: "text-center",
                            col: 4,
                            colTablet: 2
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-relative background-section section-padding",
                "data-dsn-title": "products better",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: "container",
                    col: 2,
                    colTablet: 1,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-relative box-left",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "box-im h-100 ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_18___default()), {
                                    className: "cover-bg-img ",
                                    src: "/img/rachel-claire.jpg",
                                    alt: "",
                                    fill: true,
                                    sizes: "(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "p-relative box-right",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleCover__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    children: "Diesel"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    className: "mb-30",
                                    description: "We make digital",
                                    defaultSpace: false,
                                    children: "Make better products make products better"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_list_List__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    className: "border-top  pt-30 mb-30",
                                    col: 2,
                                    iconSize: "15px",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_list_List__WEBPACK_IMPORTED_MODULE_8__/* ["default"].item */ .Z.item, {
                                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faCheckCircle,
                                                className: "theme-color"
                                            }),
                                            headingTag: "span",
                                            children: " Proin gravida nibh vel "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_list_List__WEBPACK_IMPORTED_MODULE_8__/* ["default"].item */ .Z.item, {
                                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faCheckCircle,
                                                className: "theme-color"
                                            }),
                                            headingTag: "span",
                                            children: " Proin gravida nibh vel "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_list_List__WEBPACK_IMPORTED_MODULE_8__/* ["default"].item */ .Z.item, {
                                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faCheckCircle,
                                                className: "theme-color"
                                            }),
                                            headingTag: "span",
                                            children: " Auctor aliquet aenean quis "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_list_List__WEBPACK_IMPORTED_MODULE_8__/* ["default"].item */ .Z.item, {
                                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faCheckCircle,
                                                className: "theme-color"
                                            }),
                                            headingTag: "span",
                                            children: " Auctor aliquet aenean quis "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_services_Service__WEBPACK_IMPORTED_MODULE_11__/* .ServiceGrid */ .m, {
                                    className: "icon-left p-0 border-top  pt-30 align-items-center",
                                    iconOption: {
                                        className: "background-main p-15 align-self-center"
                                    },
                                    data: [
                                        {
                                            icon: _components_svg__WEBPACK_IMPORTED_MODULE_12__/* .IdeaIcon */ .V,
                                            title: "Best Practices from Industry Experts ",
                                            description: "We’ve designed a culture that allows our stewards to assimilate with our clients and bring."
                                        }
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-relative section-margin",
                "data-dsn-title": "BUSINESS CONSULTING",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: "container",
                    col: 2,
                    colTablet: 1,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "p-relative box-left order-md-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleCover__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    children: "Diesel"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    className: "mb-30",
                                    description: "Some Feature",
                                    defaultSpace: false,
                                    children: "BUSINESS CONSULTING"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "max-w570 dsn-up mb-10 border-top pt-30",
                                    children: "Founded in 2000, Dsn Grid has become one of the best Digital Agency in ThemeForest Blue money going forward."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "max-w570 dsn-up border-bottom pb-30",
                                    children: "but deploy to production. C-suite. First-order optimal strategies build on a culture of contribution and inclusion so those options"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button_ButtonProject__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    href: "#0",
                                    className: "mt-30",
                                    children: " Visit Website "
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-relative box-right order-md-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "box-im h-100 ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_18___default()), {
                                    className: "cover-bg-img ",
                                    src: "/img/help-project.jpg",
                                    alt: "",
                                    fill: true,
                                    sizes: "(max-width: 768px) 100vw,(max-width: 1200px) 75vw"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-relative background-section section-padding",
                "data-dsn-title": "Project Manager",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            className: "text-center",
                            description: "Most have theme",
                            defaultSpace: false,
                            children: "BUSINESS CONSULTING"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            className: "text-center mt-15",
                            tag: "p",
                            dirDescription: "after",
                            classDesInner: "max-w570",
                            description: "Get Essentials today and start building next-generation websites,   create awesome pages with unlimited possibilities."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            className: "background-main",
                            col: 2,
                            colTablet: 1,
                            rowGapTablet: 0,
                            rowGapMobile: 0,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "p-relative box-padding box-left order-md-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleCover__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            children: "Diesel"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            className: "mb-15",
                                            defaultSpace: false,
                                            description: "Project Manager"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "mb-50",
                                            children: "Get Dsn Grid today and start building next-generation websites in minutes!"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_services_Service__WEBPACK_IMPORTED_MODULE_11__/* .ServiceGrid */ .m, {
                                            className: "icon-left p-0",
                                            rowGapTablet: 30,
                                            rowGapMobile: 30,
                                            data: [
                                                {
                                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_18___default()), {
                                                        src: "/img/team/1.jpg",
                                                        alt: "",
                                                        width: 70,
                                                        height: 70
                                                    }),
                                                    title: "Build powerful websites with Essentials",
                                                    description: `Start building next-level websites using Essentials WordPress theme. `
                                                },
                                                {
                                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_18___default()), {
                                                        src: "/img/team/2.jpg",
                                                        alt: "",
                                                        width: 70,
                                                        height: 70
                                                    }),
                                                    title: "Build powerful websites with Essentials",
                                                    description: `Start building next-level websites using Essentials WordPress theme. `
                                                },
                                                {
                                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_18___default()), {
                                                        src: "/img/team/3.jpg",
                                                        alt: "",
                                                        width: 70,
                                                        height: 70
                                                    }),
                                                    title: "Build powerful websites with Essentials",
                                                    description: `Start building next-level websites using Essentials WordPress theme. `
                                                }
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-relative box-right order-md-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "box-im h-100 ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_18___default()), {
                                            className: "cover-bg-img ",
                                            src: "/img/corporate.jpg",
                                            alt: "",
                                            fill: true,
                                            sizes: "(max-width: 768px) 100vw,(max-width: 1200px) 75vw"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_services_Service__WEBPACK_IMPORTED_MODULE_11__/* .ServiceGrid */ .m, {
                            className: "mt-50 p-0 text-center",
                            data: (0,_data_service__WEBPACK_IMPORTED_MODULE_14__/* .getServiceData */ .Y)().slice(0, 3),
                            col: 3,
                            colTablet: 2,
                            colGap: 50
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "container section-margin ",
                "data-dsn-title": "Best Team Ever",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        description: "Our Team",
                        children: "The Best Team Ever!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Team_Team__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        data: (0,_data_team__WEBPACK_IMPORTED_MODULE_17__/* .getTeamData */ .V)().slice(0, 3),
                        className: "team-classic",
                        col: 3,
                        colTablet: 2
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_next_NextPage__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                className: "section-padding border-top background-section"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                className: "background-section"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Service);

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

/***/ 303:
/***/ ((module) => {

module.exports = import("@fortawesome/free-brands-svg-icons");;

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

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
var __webpack_exports__ = __webpack_require__.X(0, [9210,9403,1664,3121,5675,4597,1566,3042,1688,4396,4425,2407,9475,2055,7270,7705,9594,588,18], () => (__webpack_exec__(4625)));
module.exports = __webpack_exports__;

})();