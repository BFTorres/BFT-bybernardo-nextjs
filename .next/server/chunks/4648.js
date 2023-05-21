"use strict";
exports.id = 4648;
exports.ids = [4648];
exports.modules = {

/***/ 4648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2665);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9735);
/* harmony import */ var _Image_BgImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6401);
/* harmony import */ var _meta_MetaPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3233);
/* harmony import */ var _hooks_DsnLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1688);







function BlogItem({ portoDetails , textButton , imageOnly , className , parallaxContent ={} , metaData =[] , parallaxImage ={}  }) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const video = ref.current.querySelector("video");
        if (!video) return;
        video.pause();
        const portItem = ref.current, mouseEnter = ()=>video.play(), mouseLeve = ()=>video.pause();
        portItem.addEventListener("mouseenter", mouseEnter);
        portItem.addEventListener("mouseleave", mouseLeve);
        return ()=>{
            if (!video) return;
            portItem.removeEventListener("mouseenter", mouseEnter);
            portItem.removeEventListener("mouseleave", mouseLeve);
        };
    }); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_3__/* .dsnCN */ .gU)("blog-item p-relative d-flex align-items-center h-100 w-100", className),
            ref: ref,
            ...parallaxContent,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "box-meta",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "entry-date",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "author",
                                children: portoDetails.author
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                children: portoDetails.date
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "inner-img box-img over-hidden",
                    ...parallaxImage,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image_BgImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: "dsn-swiper-parallax-transform ",
                        src: portoDetails.src,
                        video: portoDetails.video,
                        alt: portoDetails.title,
                        overlay: portoDetails.overlay,
                        height: "100%",
                        imageOnly: imageOnly
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "box-content p-relative",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "box-content-body",
                        children: [
                            portoDetails.category && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_meta_MetaPost__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                category: portoDetails.category,
                                separate: ", "
                            }),
                            portoDetails.title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: `title-block mb-10`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hooks_DsnLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    href: (0,_data_blog__WEBPACK_IMPORTED_MODULE_2__/* .getBlogLink */ .Np)(portoDetails),
                                    transitionPage: {
                                        title: portoDetails.title
                                    },
                                    children: portoDetails.title
                                })
                            }),
                            // @ts-ignore
                            portoDetails.description && !metaData.includes("description") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: portoDetails.description
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_hooks_DsnLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                href: (0,_data_blog__WEBPACK_IMPORTED_MODULE_2__/* .getBlogLink */ .Np)(portoDetails),
                                className: `link-visit p-relative mt-15`,
                                transitionPage: {
                                    title: portoDetails.title
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "link-visit-text",
                                        children: textButton
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "link-visit-arrow",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            viewBox: "0 0 80 80",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                    points: "19.89 15.25 64.03 15.25 64.03 59.33"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    x1: "64.03",
                                                    y1: "15.25",
                                                    x2: "14.03",
                                                    y2: "65.18"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}
BlogItem.defaultProps = {
    className: "",
    imageOnly: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(BlogItem));


/***/ }),

/***/ 2665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Np": () => (/* binding */ getBlogLink),
/* harmony export */   "Tf": () => (/* binding */ getBlogData)
/* harmony export */ });
/* unused harmony export getBlogItem */
const data = [
    {
        id: 1,
        title: "Extreme Athleticism Is the New Midlife Crisis",
        slug: "single-blog",
        author: "Dsn Grid",
        date: "March , 17th 2020",
        category: [
            "Lifestyle"
        ],
        description: `Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...`,
        src: "/img/blog/1.jpg",
        overlay: 4
    },
    {
        id: 2,
        title: "The Day I Lost My Child in Charles de Gaulle Airport",
        slug: "single-blog",
        author: "Dsn Grid",
        date: "March , 17th 2020",
        category: [
            "Travel"
        ],
        description: `Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...`,
        src: "/img/blog/2.jpg",
        overlay: 4
    },
    {
        id: 3,
        title: "Relationships Aren’t Easy, But They’re Worth It",
        slug: "single-blog",
        author: "Dsn Grid",
        date: "March , 17th 2020",
        category: [
            "Health"
        ],
        description: `Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...`,
        src: "/img/blog/3.jpg",
        overlay: 4
    },
    {
        id: 4,
        title: "Extreme Athleticism Is the New Midlife Crisis",
        slug: "single-blog",
        author: "Dsn Grid",
        date: "March , 17th 2020",
        category: [
            "Lifestyle"
        ],
        description: `Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...`,
        src: "/img/blog/4.jpg",
        overlay: 4
    },
    {
        id: 5,
        title: "The Day I Lost My Child in Charles de Gaulle Airport",
        slug: "single-blog",
        author: "Dsn Grid",
        date: "March , 17th 2020",
        category: [
            "Travel"
        ],
        description: `Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...`,
        src: "/img/blog/5.jpg",
        overlay: 4
    },
    {
        id: 6,
        title: "Relationships Aren’t Easy, But They’re Worth It",
        slug: "single-blog",
        author: "Dsn Grid",
        date: "March , 17th 2020",
        category: [
            "Health"
        ],
        description: `Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...`,
        src: "/img/blog/6.jpg",
        overlay: 4
    }
];
const getBlogData = ()=>data;
const getBlogItem = (value, whereName = "slug")=>{
    return data.find((item)=>item[whereName] === value);
};
const getBlogLink = (item)=>{
    if (item) return item.slug && "/" + item.slug;
    return "";
};


/***/ })

};
;