"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./layout/Layout.tsx":
/*!***************************!*\
  !*** ./layout/Layout.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/helper */ \"./hooks/helper.ts\");\n/* harmony import */ var _hooks_dataAttr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/dataAttr */ \"./hooks/dataAttr.js\");\n/* harmony import */ var _components_social_SocialOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/social/SocialOne */ \"./components/social/SocialOne.jsx\");\n/* harmony import */ var _MainScrollBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainScrollBar */ \"./layout/MainScrollBar.tsx\");\n/* harmony import */ var _components_model_right_ModalRight_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/model-right/ModalRight.jsx */ \"./components/model-right/ModalRight.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// @ts-ignore\nfunction Layout(param) {\n    let { className , children , tag: Tag = \"div\" , activeScrollbar , optionsScrollbar , colorVersion , modelRight , ...restProps } = param;\n    _s();\n    const paginateRight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const scrollbar = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.scrollbar);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const scrollDiv = document.createElement(\"div\");\n        scrollDiv.style.cssText = \"width:100px;height:100px;overflow: scroll;position: absolute;top: -9999px;\";\n        document.body.appendChild(scrollDiv);\n        document.body.style.setProperty(\"--dsn-width-scroll\", scrollDiv.offsetWidth - scrollDiv.clientWidth + \"px\");\n        document.body.removeChild(scrollDiv);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const paginate = document.body.querySelectorAll(\"[data-dsn-title]\");\n        if (paginate) paginate.forEach((el)=>{\n            const title = (0,_hooks_dataAttr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(el, \"title\", false, false);\n            const scrollDiv = document.createElement(\"div\");\n            scrollDiv.classList.add(\"dsn-link-paginate\");\n            scrollDiv.innerText = title.toUpperCase();\n            paginateRight.current.append(scrollDiv);\n            el[\"paginateTarget\"] = scrollDiv;\n            scrollDiv.addEventListener(\"click\", (e)=>{\n                e.preventDefault();\n                (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_2__.scrollTop)({\n                    element: el,\n                    scrollbar,\n                    duration: -80\n                });\n            });\n        });\n        return ()=>{\n            if (paginate) paginate.forEach((el)=>{\n                var _el_paginateTarget;\n                return (_el_paginateTarget = el[\"paginateTarget\"]) === null || _el_paginateTarget === void 0 ? void 0 : _el_paginateTarget.remove();\n            });\n        };\n    }, [\n        scrollbar\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n        id: \"main_layout\",\n        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_2__.dsnCN)(\"background-main\", className),\n        ...restProps,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_2__.dsnCN)(\"main-content\", activeScrollbar && \"dsn-main-scrollbar\"),\n                children: activeScrollbar ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainScrollBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    options: optionsScrollbar,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"main-content\",\n                        className: \"p-relative\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/layout/Layout.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 78\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/layout/Layout.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 36\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"main-content\",\n                    className: \"p-relative\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/layout/Layout.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 159\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/layout/Layout.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"line-border-style w-100 h-100\"\n            }, void 0, false, {\n                fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/layout/Layout.tsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_social_SocialOne__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/layout/Layout.tsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dsn-paginate-right-page\",\n                ref: paginateRight\n            }, void 0, false, {\n                fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/layout/Layout.tsx\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            modelRight && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_model_right_ModalRight_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                ...modelRight.propsModal,\n                children: modelRight.children\n            }, void 0, false, {\n                fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/layout/Layout.tsx\",\n                lineNumber: 78,\n                columnNumber: 28\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/layout/Layout.tsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n_s(Layout, \"DXLUGE6F1tlXiWwYiLen0BEBLZo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = Layout;\nLayout.defaultProps = {\n    colorVersion: \"light\",\n    activeScrollbar: false,\n    optionsScrollbar: {\n        damping: 0.085,\n        alwaysShowTracks: true\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQXlEVEEsT0FBTzhDLFlBQVksR0FBRztJQUNsQnZDLGNBQWM7SUFDZEYsaUJBQWlCLEtBQUs7SUFDdEJDLGtCQUFrQjtRQUFDeUMsU0FBUztRQUFPQyxrQkFBa0IsSUFBSTtJQUFBO0FBQzdEO0FBRUEsK0RBQWVoRCxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dC9MYXlvdXQudHN4P2ViOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFR5cGUsIEhUTUxQcm9wcywgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtkc25DTiwgc2Nyb2xsVG9wfSBmcm9tIFwiLi4vaG9va3MvaGVscGVyXCI7XHJcbmltcG9ydCBkYXRhQXR0ciBmcm9tIFwiLi4vaG9va3MvZGF0YUF0dHJcIjtcclxuaW1wb3J0IFNvY2lhbE9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zb2NpYWwvU29jaWFsT25lXCI7XHJcbmltcG9ydCBNYWluU2Nyb2xsQmFyIGZyb20gXCIuL01haW5TY3JvbGxCYXJcIjtcclxuaW1wb3J0IE1vZGFsUmlnaHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kZWwtcmlnaHQvTW9kYWxSaWdodC5qc3hcIjtcclxuXHJcblxyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtSb290U3RhdGV9IGZyb20gXCIuLi9mZWF0dXJlcy9zdG9yZVwiO1xyXG5pbXBvcnQge1Njcm9sbGJhck9wdGlvbnN9IGZyb20gXCJzbW9vdGgtc2Nyb2xsYmFyL2ludGVyZmFjZXNcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xyXG4gICAgdGFnPzogRWxlbWVudFR5cGUsXHJcbiAgICBhY3RpdmVTY3JvbGxiYXI/OiBib29sZWFuLFxyXG4gICAgY29sb3JWZXJzaW9uOiBcImRhcmtcIiB8IFwibGlnaHRcIixcclxuICAgIG9wdGlvbnNTY3JvbGxiYXI/OiBTY3JvbGxiYXJPcHRpb25zIHwge30sXHJcbiAgICBtb2RlbFJpZ2h0Pzp7XHJcbiAgICAgICAgY2hpbGRyZW46YW55LFxyXG4gICAgICAgIHByb3BzTW9kYWwgOiBIVE1MUHJvcHM8SFRNTEJ1dHRvbkVsZW1lbnQ+ICYge3RleHRCdG4/OnN0cmluZ31cclxuICAgIH1cclxufVxyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5mdW5jdGlvbiBMYXlvdXQoe2NsYXNzTmFtZSwgY2hpbGRyZW4sIHRhZzogVGFnID0gXCJkaXZcIiwgYWN0aXZlU2Nyb2xsYmFyLCBvcHRpb25zU2Nyb2xsYmFyLCBjb2xvclZlcnNpb24gLCBtb2RlbFJpZ2h0ICwgLi4ucmVzdFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIDogTGF5b3V0UHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBwYWdpbmF0ZVJpZ2h0ID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3Qgc2Nyb2xsYmFyID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnNjcm9sbGJhcik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNjcm9sbERpdi5zdHlsZS5jc3NUZXh0ID0gXCJ3aWR0aDoxMDBweDtoZWlnaHQ6MTAwcHg7b3ZlcmZsb3c6IHNjcm9sbDtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAtOTk5OXB4O1wiO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KCctLWRzbi13aWR0aC1zY3JvbGwnLCBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGggKyBcInB4XCIpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgcGFnaW5hdGUgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1kc24tdGl0bGVdXCIpO1xyXG5cclxuICAgICAgICBpZiAocGFnaW5hdGUpXHJcbiAgICAgICAgICAgIHBhZ2luYXRlLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkYXRhQXR0cihlbCwgXCJ0aXRsZVwiLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIHNjcm9sbERpdi5jbGFzc0xpc3QuYWRkKFwiZHNuLWxpbmstcGFnaW5hdGVcIik7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxEaXYuaW5uZXJUZXh0ID0gdGl0bGUudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRlUmlnaHQuY3VycmVudC5hcHBlbmQoc2Nyb2xsRGl2KTtcclxuICAgICAgICAgICAgICAgIGVsW1wicGFnaW5hdGVUYXJnZXRcIl0gPSBzY3JvbGxEaXY7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3Aoe2VsZW1lbnQ6IGVsLCBzY3JvbGxiYXIsIGR1cmF0aW9uOiAtODB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYWdpbmF0ZSlcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRlLmZvckVhY2goZWwgPT4gZWxbXCJwYWdpbmF0ZVRhcmdldFwiXT8ucmVtb3ZlKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbc2Nyb2xsYmFyXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhZyBpZD1cIm1haW5fbGF5b3V0XCJcclxuICAgICAgICAgICAgIGNsYXNzTmFtZT17ZHNuQ04oICdiYWNrZ3JvdW5kLW1haW4nLCBjbGFzc05hbWUpfSB7Li4ucmVzdFByb3BzfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RzbkNOKFwibWFpbi1jb250ZW50XCIsIGFjdGl2ZVNjcm9sbGJhciAmJiBcImRzbi1tYWluLXNjcm9sbGJhclwiKX0+XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlU2Nyb2xsYmFyID8gPE1haW5TY3JvbGxCYXIgb3B0aW9ucz17b3B0aW9uc1Njcm9sbGJhcn0+PGRpdiBpZD1cIm1haW4tY29udGVudFwiIGNsYXNzTmFtZT1cInAtcmVsYXRpdmVcIj57Y2hpbGRyZW59PC9kaXY+PC9NYWluU2Nyb2xsQmFyPiA6IDxkaXYgaWQ9XCJtYWluLWNvbnRlbnRcIiBjbGFzc05hbWU9XCJwLXJlbGF0aXZlXCI+e2NoaWxkcmVufTwvZGl2Pn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtYm9yZGVyLXN0eWxlIHctMTAwIGgtMTAwXCIvPlxyXG4gICAgICAgICAgICA8U29jaWFsT25lLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkc24tcGFnaW5hdGUtcmlnaHQtcGFnZVwiIHJlZj17cGFnaW5hdGVSaWdodH0vPlxyXG4gICAgICAgICAgICB7bW9kZWxSaWdodCAmJiA8TW9kYWxSaWdodCB7Li4ubW9kZWxSaWdodC5wcm9wc01vZGFsfT57bW9kZWxSaWdodC5jaGlsZHJlbn08L01vZGFsUmlnaHQ+fVxyXG4gICAgICAgIDwvVGFnPlxyXG4gICAgKTtcclxufVxyXG5cclxuTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNvbG9yVmVyc2lvbjogXCJsaWdodFwiLFxyXG4gICAgYWN0aXZlU2Nyb2xsYmFyOiBmYWxzZSxcclxuICAgIG9wdGlvbnNTY3JvbGxiYXI6IHtkYW1waW5nOiAwLjA4NSwgYWx3YXlzU2hvd1RyYWNrczogdHJ1ZX1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJkc25DTiIsInNjcm9sbFRvcCIsImRhdGFBdHRyIiwiU29jaWFsT25lIiwiTWFpblNjcm9sbEJhciIsIk1vZGFsUmlnaHQiLCJ1c2VTZWxlY3RvciIsIkxheW91dCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwidGFnIiwiVGFnIiwiYWN0aXZlU2Nyb2xsYmFyIiwib3B0aW9uc1Njcm9sbGJhciIsImNvbG9yVmVyc2lvbiIsIm1vZGVsUmlnaHQiLCJyZXN0UHJvcHMiLCJwYWdpbmF0ZVJpZ2h0Iiwic2Nyb2xsYmFyIiwic3RhdGUiLCJzY3JvbGxEaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImNzc1RleHQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXRQcm9wZXJ0eSIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJyZW1vdmVDaGlsZCIsInBhZ2luYXRlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsInRpdGxlIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJUZXh0IiwidG9VcHBlckNhc2UiLCJjdXJyZW50IiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnQiLCJkdXJhdGlvbiIsInJlbW92ZSIsImlkIiwiZGl2Iiwib3B0aW9ucyIsInJlZiIsInByb3BzTW9kYWwiLCJkZWZhdWx0UHJvcHMiLCJkYW1waW5nIiwiYWx3YXlzU2hvd1RyYWNrcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/Layout.tsx\n"));

/***/ })

});