"use strict";
exports.id = 1172;
exports.ids = [1172];
exports.modules = {

/***/ 1172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ portfolio_Portfolio)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/portfolio/PortfolioItem.jsx
var PortfolioItem = __webpack_require__(7920);
// EXTERNAL MODULE: ./data/portfolio.js
var portfolio = __webpack_require__(2536);
// EXTERNAL MODULE: ./hooks/helper.ts
var helper = __webpack_require__(9735);
// EXTERNAL MODULE: ./layout/DsnGrid.tsx
var DsnGrid = __webpack_require__(6878);
;// CONCATENATED MODULE: ./components/portfolio/FilterPortfolio.tsx



function FilterPortfolio({ className , categories , actionFilter  }) {
    const [active, setActive] = (0,external_react_.useState)(0);
    const getActive = ($key)=>{
        return parseInt($key, 10) === active ? "active" : "";
    };
    const handleButton = (e, $index, cat)=>{
        setActive($index + 1);
        actionFilter(cat);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,helper/* dsnCN */.gU)("filtering-t mb-80", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "filtering-wrap",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "filtering",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: getActive(0),
                        onClick: (e)=>handleButton(e, -1, ""),
                        children: "All"
                    }),
                    categories && categories.map((cat, i)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: getActive(i + 1),
                            onClick: (e)=>handleButton(e, i, `.${cat.toLowerCase()}`),
                            children: cat
                        }, i))
                ]
            })
        })
    });
}
/* harmony default export */ const portfolio_FilterPortfolio = (FilterPortfolio);

;// CONCATENATED MODULE: ./components/portfolio/Portfolio.tsx







function Portfolio({ className , filterClass , useFilter , stylePortfolio , styleBox , ...restProps }) {
    const dataPortfolio = (0,portfolio/* getPortfolioData */.jq)();
    const iso = (0,external_react_.useRef)(null);
    const [filter, setFilter] = (0,external_react_.useState)("*");
    const refIsotope = (0,external_react_.useRef)();
    // @ts-ignore
    const category = new Set();
    dataPortfolio.map((p)=>{
        return typeof p.category === "object" ? p.category.map((i)=>category.add(i)) : category.add(p.category);
    });
    (0,external_react_.useEffect)(()=>{
        if (!useFilter) return;
        // @ts-ignore
        const Isotope = __webpack_require__(5382);
        iso.current = new Isotope(refIsotope.current, {
            itemSelector: ".portfolio-item"
        });
        return ()=>{
            iso.current.destroy();
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    (0,external_react_.useEffect)(()=>{
        if (!useFilter) return;
        iso.current.arrange({
            filter: filter
        });
    }, [
        filter
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (0,helper/* dsnCN */.gU)("work", className, stylePortfolio, styleBox && `with-lc`),
        children: [
            useFilter && /*#__PURE__*/ jsx_runtime_.jsx(portfolio_FilterPortfolio, {
                className: filterClass,
                categories: [
                    ...category
                ],
                actionFilter: setFilter
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DsnGrid/* default */.Z, {
                ...restProps,
                className: useFilter && "dsn-grid-masonry",
                ref: refIsotope,
                children: dataPortfolio.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(PortfolioItem/* default */.Z, {
                        // @ts-ignore
                        className: typeof item.category === "object" ? item.category.join(" ").toLowerCase() : item.category.toLowerCase(),
                        portoDetails: item,
                        textButton: "View Case",
                        styleBox: styleBox
                    }, index))
            })
        ]
    });
}
/* harmony default export */ const portfolio_Portfolio = (Portfolio);


/***/ })

};
;