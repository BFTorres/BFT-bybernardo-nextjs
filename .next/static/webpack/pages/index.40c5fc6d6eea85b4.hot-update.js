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

/***/ "./layout/MainScrollBar.tsx":
/*!**********************************!*\
  !*** ./layout/MainScrollBar.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smooth-scrollbar */ \"./node_modules/smooth-scrollbar/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _features_smooth_scrollbar_smoothScrollbarSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/smooth-scrollbar/smoothScrollbarSlice */ \"./features/smooth-scrollbar/smoothScrollbarSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction MainScrollBar(param) {\n    let { children , options , ...restProps } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _ref_current, _ref_current_querySelector;\n        const scroll = smooth_scrollbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init(ref.current, options);\n        gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.defaults({\n            scroller: ref.current\n        });\n        scroll === null || scroll === void 0 ? void 0 : scroll.addListener(()=>gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.refresh());\n        dispatch((0,_features_smooth_scrollbar_smoothScrollbarSlice__WEBPACK_IMPORTED_MODULE_4__.setScrollbar)(scroll));\n        (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.style.removeProperty(\"overflow\");\n        document.body.classList.add(\"dsn-active-scrollbar\");\n        (_ref_current_querySelector = ref.current.querySelector(\".scrollbar-track\")) === null || _ref_current_querySelector === void 0 ? void 0 : _ref_current_querySelector.remove(); /* .scrollbar-track-x */ \n        return ()=>{\n            gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.defaults({\n                scroller: null\n            });\n            scroll === null || scroll === void 0 ? void 0 : scroll.destroy();\n        };\n    }, [\n        ref.current\n    ]); // eslint-disable-line react-hooks/exhaustive-deps\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"dsn-scrollbar\",\n        ref: ref,\n        style: {\n            height: \"100vh\"\n        },\n        ...restProps,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/layout/MainScrollBar.tsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this);\n}\n_s(MainScrollBar, \"E8SuFTOZzfTwHYxuU0X+gh6996o=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = MainScrollBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainScrollBar);\nvar _c;\n$RefreshReg$(_c, \"MainScrollBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvTWFpblNjcm9sbEJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0E7QUFDYTtBQUNkO0FBQ3VDO0FBUy9FLFNBQVNNLGNBQWMsS0FBOEMsRUFBRTtRQUFoRCxFQUFDQyxTQUFRLEVBQUVDLFFBQU8sRUFBRSxHQUFHQyxXQUF1QixHQUE5Qzs7SUFDbkIsTUFBTUMsTUFBTVQsNkNBQU1BLENBQUMsSUFBSTtJQUN2QixNQUFNVSxXQUFXUCx3REFBV0E7SUFHNUJKLGdEQUFTQSxDQUFDLElBQU07WUFZWlUsY0FHQUE7UUFiQSxNQUFNRSxTQUFTViw2REFBYyxDQUFDUSxJQUFJSSxPQUFPLEVBQUVOO1FBRTNDTCwyRUFBc0IsQ0FBQztZQUNuQmEsVUFBVU4sSUFBSUksT0FBTztRQUN6QjtRQUVBRixtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFLLFdBQVcsQ0FBQyxJQUFNZCwwRUFBcUI7UUFDL0NRLFNBQVNOLDZGQUFZQSxDQUFDTztRQUd0QkYsQ0FBQUEsZUFBQUEsSUFBSUksT0FBTyxjQUFYSiwwQkFBQUEsS0FBQUEsSUFBQUEsYUFBYVMsTUFBTUMsY0FBYyxDQUFDLFdBQVc7UUFDN0NDLFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7UUFFNUJkLENBQUFBLDZCQUFBQSxJQUFJSSxPQUFPLENBQUNXLGFBQWEsQ0FBQyxpQ0FBMUJmLHdDQUFBQSxLQUFBQSxJQUFBQSwyQkFBK0NnQixVQUFVLHNCQUFzQjtRQUUvRSxPQUFPLElBQU07WUFDVHZCLDJFQUFzQixDQUFDO2dCQUNuQmEsVUFBVSxJQUFJO1lBQ2xCO1lBQ0FKLG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUWUsT0FBTztRQUNuQjtJQUVKLEdBQUc7UUFBQ2pCLElBQUlJLE9BQU87S0FBQyxHQUFFLGtEQUFrRDtJQUdwRSxxQkFDSSw4REFBQ2M7UUFBSUMsSUFBRztRQUFnQm5CLEtBQUtBO1FBQUtTLE9BQU87WUFBQ1csUUFBUTtRQUFPO1FBQUksR0FBR3JCLFNBQVM7a0JBQ3BFRjs7Ozs7O0FBR2I7R0FyQ1NEOztRQUVZRixvREFBV0E7OztLQUZ2QkU7QUF1Q1QsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01haW5TY3JvbGxCYXIudHN4PzczNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNjcm9sbGJhciBmcm9tICdzbW9vdGgtc2Nyb2xsYmFyJztcclxuaW1wb3J0IHtTY3JvbGxUcmlnZ2VyfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7c2V0U2Nyb2xsYmFyfSBmcm9tIFwiLi4vZmVhdHVyZXMvc21vb3RoLXNjcm9sbGJhci9zbW9vdGhTY3JvbGxiYXJTbGljZVwiO1xyXG5pbXBvcnQge1Njcm9sbGJhck9wdGlvbnN9IGZyb20gXCJzbW9vdGgtc2Nyb2xsYmFyL2ludGVyZmFjZXNcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgU2Nyb2xsYmFyT3Age1xyXG4gICAgY2hpbGRyZW4/OiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W10sXHJcbiAgICBvcHRpb25zPzogU2Nyb2xsYmFyT3B0aW9ucyB8IHt9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1haW5TY3JvbGxCYXIoe2NoaWxkcmVuLCBvcHRpb25zLCAuLi5yZXN0UHJvcHN9OiBTY3JvbGxiYXJPcCkge1xyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBzY3JvbGwgPSBTY3JvbGxiYXIuaW5pdChyZWYuY3VycmVudCwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIFNjcm9sbFRyaWdnZXIuZGVmYXVsdHMoe1xyXG4gICAgICAgICAgICBzY3JvbGxlcjogcmVmLmN1cnJlbnRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2Nyb2xsPy5hZGRMaXN0ZW5lcigoKSA9PiBTY3JvbGxUcmlnZ2VyLnJlZnJlc2goKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0U2Nyb2xsYmFyKHNjcm9sbCkpO1xyXG5cclxuXHJcbiAgICAgICAgcmVmLmN1cnJlbnQ/LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3ZlcmZsb3dcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZHNuLWFjdGl2ZS1zY3JvbGxiYXJcIik7XHJcblxyXG4gICAgICAgIHJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Nyb2xsYmFyLXRyYWNrXCIpPy5yZW1vdmUoKTsgLyogLnNjcm9sbGJhci10cmFjay14ICovXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIFNjcm9sbFRyaWdnZXIuZGVmYXVsdHMoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsZXI6IG51bGxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNjcm9sbD8uZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbcmVmLmN1cnJlbnRdKTsvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJkc24tc2Nyb2xsYmFyXCIgcmVmPXtyZWZ9IHN0eWxlPXt7aGVpZ2h0OiBcIjEwMHZoXCJ9fSB7Li4ucmVzdFByb3BzfSA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5TY3JvbGxCYXI7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIlNjcm9sbGJhciIsIlNjcm9sbFRyaWdnZXIiLCJ1c2VEaXNwYXRjaCIsInNldFNjcm9sbGJhciIsIk1haW5TY3JvbGxCYXIiLCJjaGlsZHJlbiIsIm9wdGlvbnMiLCJyZXN0UHJvcHMiLCJyZWYiLCJkaXNwYXRjaCIsInNjcm9sbCIsImluaXQiLCJjdXJyZW50IiwiZGVmYXVsdHMiLCJzY3JvbGxlciIsImFkZExpc3RlbmVyIiwicmVmcmVzaCIsInN0eWxlIiwicmVtb3ZlUHJvcGVydHkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwiZGVzdHJveSIsImRpdiIsImlkIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layout/MainScrollBar.tsx\n"));

/***/ })

});