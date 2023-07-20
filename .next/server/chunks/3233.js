"use strict";
exports.id = 3233;
exports.ids = [3233];
exports.modules = {

/***/ 3233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Meta */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9735);



function MetaPost({ date =false , className =null , category , separate =null  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Meta, {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_2__/* .dsnCN */ .gU)("post-info", className),
        children: [
            date && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "post-date",
                children: [
                    date,
                    " "
                ]
            }),
            category && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "metas",
                children: typeof category === "object" ? category.map((cat, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        "data-separate": separate,
                        children: cat
                    }, index)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: category
                })
            })
        ]
    });
}
const Meta = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
    componentId: "sc-2f071ab4-0"
})`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.2px;
  word-spacing: 2px;

  span {
    margin-bottom: 8px;
  }

  .post-date, .post-cat {
    display: inline-block
  }

  .post-date {
    padding-right: 20px;
  }

  .post-cat span {

    &:not(:first-child):before {
      content: attr(data-separate);
    }
  }

`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetaPost);


/***/ })

};
;