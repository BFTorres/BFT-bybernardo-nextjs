"use strict";
exports.id = 9967;
exports.ids = [9967];
exports.modules = {

/***/ 9967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "bO": () => (/* reexport */ SkillCircleItem),
  "mW": () => (/* reexport */ SkillProgressBar),
  "ZP": () => (/* binding */ skill_Skills)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./layout/DsnGrid.tsx
var DsnGrid = __webpack_require__(6878);
// EXTERNAL MODULE: ./hooks/helper.ts
var helper = __webpack_require__(9735);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
;// CONCATENATED MODULE: ./components/skill/SkillProgressBar.tsx




function SPI({ className , bgColor , children , number , ...restProps }) {
    const ref = (0,external_react_.useRef)();
    const [width, setWidth] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        if (number == null) return;
        const animate = external_gsap_.gsap.to(ref.current, {
            width: number + "%",
            scrollTrigger: {
                trigger: ref.current,
                start: "top 95%"
            },
            onUpdate () {
                setWidth(Math.floor(this.progress() * number));
            },
            onComplete: function() {
                if (!this.vars.scrollTrigger.scrub) {
                    this.scrollTrigger.kill();
                    this.kill();
                }
            }
        });
        return ()=>{
            animate?.scrollTrigger?.kill();
            animate?.kill();
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (0,helper/* dsnCN */.gU)("skills-item", className),
        ...restProps,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "sm-title-block mb-15",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bar",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (0,helper/* dsnCN */.gU)("fill", bgColor !== "pattern" && bgColor),
                    style: bgColor == "pattern" ? {
                        backgroundImage: "url(/img/patterns.png"
                    } : {},
                    ref: ref,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "number",
                        children: [
                            width,
                            "%"
                        ]
                    })
                })
            })
        ]
    });
}
SPI.defaultProps = {
    bgColor: "background-theme"
};
/* harmony default export */ const SkillProgressBar = (SPI);

;// CONCATENATED MODULE: ./components/skill/SkillCircleItem.tsx




function SCI({ className , bgColor , children , number , ...restProps }) {
    const ref = (0,external_react_.useRef)();
    const [width, setWidth] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        if (number == null) return;
        const animate = external_gsap_.gsap.to(ref.current, 1.5, {
            strokeDashoffset: 100 - number,
            scrollTrigger: {
                trigger: ref.current,
                start: "top 95%"
            },
            onUpdate () {
                setWidth(Math.floor(this.progress() * number));
            },
            onComplete () {
                if (!this.vars.scrollTrigger.scrub) {
                    this.scrollTrigger.kill();
                    this.kill();
                }
            }
        });
        return ()=>{
            animate?.scrollTrigger?.kill();
            animate?.kill();
        };
    }, [
        number
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,helper/* dsnCN */.gU)("skills-inner", className),
        ...restProps,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bar-svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `fill-bar p-relative ${bgColor}`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "-1 -1 34 34",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                    cx: "16",
                                    cy: "16",
                                    r: "15.9155",
                                    className: "progress-bar__background"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                    cx: "16",
                                    cy: "16",
                                    r: "15.9155",
                                    className: "progress-bar__progress js-progress-bar dsn-animate-skill",
                                    ref: ref,
                                    style: {
                                        strokeDashoffset: 100
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                            className: "dsn-number-award number title-block v-middle",
                            children: [
                                width,
                                "%"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    className: "dsn-title-award title-block mt-30",
                    children: children
                })
            ]
        })
    });
}
SCI.defaultProps = {
    bgColor: "background-heading"
};
/* harmony default export */ const SkillCircleItem = (SCI);

;// CONCATENATED MODULE: ./components/skill/Skills.tsx





function Skills({ className , children , ...restProps }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(DsnGrid/* default */.Z, {
        className: (0,helper/* dsnCN */.gU)("dsn-skills", className),
        col: 1,
        ...restProps,
        children: children
    });
}
/* harmony default export */ const skill_Skills = (Skills);


/***/ })

};
;