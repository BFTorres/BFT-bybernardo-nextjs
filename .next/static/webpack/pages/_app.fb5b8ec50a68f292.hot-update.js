"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/header/menu/EremiaMenu.jsx":
/*!***********************************************!*\
  !*** ./components/header/menu/EremiaMenu.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nav_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nav/Navbar */ \"./components/nav/Navbar.tsx\");\n/* harmony import */ var _MenuContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuContent */ \"./components/header/menu/MenuContent.jsx\");\n/* harmony import */ var _logo_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../logo/Logo */ \"./components/logo/Logo.jsx\");\n\n\n\n\n\nconst menuContent = [\n    {\n        name: \"HOME\",\n        href: \"/\"\n    },\n    {\n        name: \"PORTFOLIO\",\n        href: \"/slider-full-distortion-h\" /* ,\r\n        dropdownMenu: [\r\n            {\r\n                name: \"Sliders\",\r\n                dropdownMenu: [\r\n                    {\r\n                        name: \"Full Screen\",\r\n                        dropdownMenu: [\r\n                            {name: \"Slider Distortion / H\", href: \"/slider-full-distortion-h\"},\r\n                            {name: \"Slider Distortion / V\", href: \"/slider-full-distortion-v\"},\r\n                            {name: \"Slider Parallax / H\", href: \"/slider-full-parallax-h\"},\r\n                            {name: \"Slider Parallax / V\", href: \"/slider-full-parallax-v\"}\r\n                        ]\r\n                    },\r\n                    {\r\n                        name: \"Padding Screen\",\r\n                        dropdownMenu: [\r\n                            {name: \"Slider Distortion / H\", href: \"/slider-padding-distortion-h\"},\r\n                            {name: \"Slider Distortion / V\", href: \"/slider-padding-distortion-v\"},\r\n                            {name: \"Slider Parallax / H\", href: \"/slider-padding-parallax-h\"},\r\n                            {name: \"Slider Parallax / V\", href: \"/slider-padding-parallax-v\"}\r\n                        ]\r\n                    },\r\n                    {\r\n                        name: \"Half Screen\",\r\n                        dropdownMenu: [\r\n                            {name: \"Slider Distortion / H\", href: \"/slider-half-distortion-h\"},\r\n                            {name: \"Slider Distortion / V\", href: \"/slider-half-distortion-v\"},\r\n                            {name: \"Slider Parallax / H\", href: \"/slider-half-parallax-h\"},\r\n                            {name: \"Slider Parallax / V\", href: \"/slider-half-parallax-v\"}\r\n                        ]\r\n                    }\r\n                ]\r\n            },\r\n            {\r\n                name: \"Carousel\",\r\n                dropdownMenu: [\r\n                    {name: \"Carousel Portfolio 1\", href: \"/carousel-portfolio-1\"},\r\n                    {name: \"Carousel Portfolio 2\", href: \"/carousel-portfolio-2\"},\r\n                    {name: \"Carousel Portfolio 3\", href: \"/carousel-portfolio-3\"}\r\n                ]\r\n            }, {\r\n                name: \"Card\",\r\n                dropdownMenu: [\r\n                    {name: \"Card 2 Columns\", href: \"/work-card-2-col\"},\r\n                    {name: \"Card 3 Columns\", href: \"/work-card-3-col\"},\r\n                    {name: \"Card 4 Columns\", href: \"/work-card-4-col\"},\r\n                ]\r\n            }, {\r\n                name: \"Classic\",\r\n                dropdownMenu: [\r\n                    {name: \"classic 2 Columns\", href: \"/work-classic-2-col\"},\r\n                    {name: \"classic 3 Columns\", href: \"/work-classic\"},\r\n\r\n                ]\r\n            },\r\n\r\n        ] */ \n    },\n    {\n        name: \"ARTICLES\",\n        href: \"/blog-list\"\n    },\n    /* {\r\n        name: \"Works\",\r\n        dropdownMenu: [\r\n                \r\n                    {name: \"BMW Group\", href: '/portfolio/bmw-group'},\r\n                    {name: \"Mercedes Benz\", href: \"/portfolio/mercedes-benz\"},\r\n                    {name: \"Kronos\", href: '/portfolio/kronos'},\r\n                    {name: \"Principal Garden\", href: \"/portfolio/principal-garden\"},\r\n                    {name: \"Small Silver Car\", href: '/portfolio/small-silver-car'},\r\n                    {name: \"Yaren Collection\", href: '/portfolio/yaren-collection'},\r\n\r\n        ]\r\n    }, */ /* \r\n    {name: \"Service\", href: \"/service\"}, */ /* {\r\n        name: \"Stories\",\r\n        dropdownMenu: [\r\n            {\r\n                name: \"List\",\r\n                dropdownMenu: [\r\n                    {name: \"List 2 Columns\", href: \"/blog-list\"},\r\n                    {name: \"List 3 Columns\", href: \"/blog-list-2\"},\r\n                ]\r\n            }, {\r\n                name: \"Card\",\r\n                dropdownMenu: [\r\n                    {name: \"Card 2 Columns\", href: \"/blog-card\"},\r\n                    {name: \"Card 3 Columns\", href: \"/blog-card-2\"},\r\n                    {name: \"Card 4 Columns\", href: \"/blog-card-3\"},\r\n                ]\r\n            }, {\r\n                name: \"Classic\",\r\n                dropdownMenu: [\r\n                    {name: \"Classic 2 Columns\", href: \"/blog-classic\"},\r\n                    {name: \"Classic 3 Columns\", href: \"/blog-classic-2\"},\r\n                    {name: \"Classic 4 Columns\", href: \"/blog-classic-3\"},\r\n                ]\r\n            }, {name: \"Single Post\", href: \"/single-blog\"}\r\n\r\n        ]\r\n    }, */ {\n        name: \"ABOUT\",\n        href: \"/about\"\n    },\n    {\n        name: \"CONTACT\",\n        href: \"/https://www.linkedin.com/in/bernardo-fonseca-torres/\"\n    },\n    {\n        name: \"IMPRINT\",\n        href: \"/imprint\"\n    }\n];\nconst EremiaMenu = (param)=>{\n    let { hamburger  } = param;\n    let $key = 0;\n    const getSubMenu = (items)=>{\n        $key++;\n        if (items.dropdownMenu) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_Navbar__WEBPACK_IMPORTED_MODULE_2__.Nav.Dropdown, {\n                name: items.name,\n                children: items.dropdownMenu.map((item)=>getSubMenu(item))\n            }, $key, false, {\n                fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/components/header/menu/EremiaMenu.jsx\",\n                lineNumber: 139,\n                columnNumber: 21\n            }, undefined);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_Navbar__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {\n            href: items.href,\n            children: items.name\n        }, $key, false, {\n            fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/components/header/menu/EremiaMenu.jsx\",\n            lineNumber: 143,\n            columnNumber: 13\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        hamburger: hamburger,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Brand, {\n                href: \"/\",\n                transitionPage: {\n                    title: \"bybernardo\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    width: \"60px\",\n                    height: \"auto\"\n                }, void 0, false, {\n                    fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/components/header/menu/EremiaMenu.jsx\",\n                    lineNumber: 151,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/components/header/menu/EremiaMenu.jsx\",\n                lineNumber: 150,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Collapse, {\n                cover: \"Menu\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_Navbar__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                        children: menuContent.map((item)=>getSubMenu(item))\n                    }, void 0, false, {\n                        fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/components/header/menu/EremiaMenu.jsx\",\n                        lineNumber: 155,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        className: \"section-margin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/components/header/menu/EremiaMenu.jsx\",\n                        lineNumber: 158,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/components/header/menu/EremiaMenu.jsx\",\n                lineNumber: 154,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bernardo/Documents/projects/BFT/dev/old-websites/bybernardo-nextjs/components/header/menu/EremiaMenu.jsx\",\n        lineNumber: 149,\n        columnNumber: 9\n    }, undefined);\n};\n_c = EremiaMenu;\nEremiaMenu.defaultProps = {\n    hamburger: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (EremiaMenu);\nvar _c;\n$RefreshReg$(_c, \"EremiaMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9tZW51L0VyZW1pYU1lbnUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNtQjtBQUNMO0FBQ0w7QUFHbkMsTUFBTUssY0FBYztJQUNoQjtRQUNJQyxNQUFNO1FBQVFDLE1BQU07SUFVeEI7SUFDQTtRQUNJRCxNQUFNO1FBQWFDLE1BQU0sNEJBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUF5RGxEO0lBQ047SUFDQTtRQUFDRCxNQUFNO1FBQVlDLE1BQU07SUFBWTtJQUVyQzs7Ozs7Ozs7Ozs7O09BWUcsR0FJSDt5Q0FDcUMsR0FDckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BMEJHLEdBQ0g7UUFBQ0QsTUFBTTtRQUFTQyxNQUFNO0lBQVE7SUFDOUI7UUFBQ0QsTUFBTTtRQUFXQyxNQUFNO0lBQXVEO0lBQy9FO1FBQUNELE1BQU07UUFBV0MsTUFBTTtJQUFVO0NBRXJDO0FBRUQsTUFBTUMsYUFBYSxTQUFpQjtRQUFoQixFQUFDQyxVQUFTLEVBQUM7SUFFM0IsSUFBSUMsT0FBTztJQUNYLE1BQU1DLGFBQWEsQ0FBQ0MsUUFBVTtRQUMxQkY7UUFDQSxJQUFJRSxNQUFNQyxZQUFZLEVBQUU7WUFDcEIscUJBQVEsOERBQUNYLHFEQUFZO2dCQUFDSSxNQUFNTSxNQUFNTixJQUFJOzBCQUNKTSxNQUFNQyxZQUFZLENBQUNFLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUUwsV0FBV0s7ZUFBakROOzs7OztRQUMvQixDQUFDO1FBQ0QscUJBQ0ksOERBQUNSLGlEQUFRO1lBQUNLLE1BQU1LLE1BQU1MLElBQUk7c0JBQWNLLE1BQU1OLElBQUk7V0FBakJJOzs7OztJQUV6QztJQUdBLHFCQUNJLDhEQUFDVCxtREFBTUE7UUFBQ1EsV0FBV0E7OzBCQUNmLDhEQUFDUix5REFBWTtnQkFBQ00sTUFBTTtnQkFBS1ksZ0JBQWdCO29CQUFDQyxPQUFPO2dCQUFZOzBCQUN6RCw0RUFBQ2hCLGtEQUFJQTtvQkFBQ2lCLE9BQU07b0JBQU9DLFFBQU87Ozs7Ozs7Ozs7OzBCQUc5Qiw4REFBQ3JCLDREQUFlO2dCQUFDdUIsT0FBTTs7a0NBQ25CLDhEQUFDdEIsNENBQUdBO2tDQUNDRyxZQUFZVSxHQUFHLENBQUNDLENBQUFBLE9BQVFMLFdBQVdLOzs7Ozs7a0NBRXhDLDhEQUFDYixvREFBV0E7d0JBQUNzQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkM7S0E5Qk1qQjtBQWdDTkEsV0FBV2tCLFlBQVksR0FBRztJQUN0QmpCLFdBQVcsS0FBSztBQUNwQjtBQUdBLCtEQUFlRCxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyL21lbnUvRXJlbWlhTWVudS5qc3g/NWQ4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIsIHtOYXZ9IGZyb20gXCIuLi8uLi9uYXYvTmF2YmFyXCI7XHJcbmltcG9ydCBNZW51Q29udGVudCBmcm9tIFwiLi9NZW51Q29udGVudFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vbG9nby9Mb2dvXCI7XHJcblxyXG5cclxuY29uc3QgbWVudUNvbnRlbnQgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJIT01FXCIsIGhyZWY6IFwiL1wiXHJcbiAgICAgICAvKiAgZHJvcGRvd25NZW51OiBbXHJcbiAgICAgICAgICAgIHtuYW1lOiBcIk1haW5cIiwgaHJlZjogXCIvXCJ9ICovXHJcbiAgICAgICAgICAgIC8qIHtuYW1lOiBcIk9uZSBQYWdlIDJcIiwgaHJlZjogXCIvZGVtby0yXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTogXCJPbmUgUGFnZSAzXCIsIGhyZWY6IFwiL2RlbW8tM1wifSxcclxuICAgICAgICAgICAge25hbWU6IFwiQ29ycG9yYXRlXCIsIGhyZWY6IFwiL2NvcnBvcmF0ZVwifSxcclxuICAgICAgICAgICAge25hbWU6IFwiQ29ycG9yYXRlIDJcIiwgaHJlZjogXCIvY29ycG9yYXRlLTJcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOiBcIlBlcnNvbmFsXCIsIGhyZWY6IFwiL3BlcnNvbmFsXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTogXCJQZXJzb25hbCAyXCIsIGhyZWY6IFwiL3BlcnNvbmFsLTJcIn0sIFxyXG4gICAgICAgIF0qL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlBPUlRGT0xJT1wiLCBocmVmOiBcIi9zbGlkZXItZnVsbC1kaXN0b3J0aW9uLWhcIi8qICxcclxuICAgICAgICBkcm9wZG93bk1lbnU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJTbGlkZXJzXCIsXHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bk1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRnVsbCBTY3JlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25NZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJTbGlkZXIgRGlzdG9ydGlvbiAvIEhcIiwgaHJlZjogXCIvc2xpZGVyLWZ1bGwtZGlzdG9ydGlvbi1oXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwiU2xpZGVyIERpc3RvcnRpb24gLyBWXCIsIGhyZWY6IFwiL3NsaWRlci1mdWxsLWRpc3RvcnRpb24tdlwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcIlNsaWRlciBQYXJhbGxheCAvIEhcIiwgaHJlZjogXCIvc2xpZGVyLWZ1bGwtcGFyYWxsYXgtaFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcIlNsaWRlciBQYXJhbGxheCAvIFZcIiwgaHJlZjogXCIvc2xpZGVyLWZ1bGwtcGFyYWxsYXgtdlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiUGFkZGluZyBTY3JlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25NZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJTbGlkZXIgRGlzdG9ydGlvbiAvIEhcIiwgaHJlZjogXCIvc2xpZGVyLXBhZGRpbmctZGlzdG9ydGlvbi1oXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwiU2xpZGVyIERpc3RvcnRpb24gLyBWXCIsIGhyZWY6IFwiL3NsaWRlci1wYWRkaW5nLWRpc3RvcnRpb24tdlwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcIlNsaWRlciBQYXJhbGxheCAvIEhcIiwgaHJlZjogXCIvc2xpZGVyLXBhZGRpbmctcGFyYWxsYXgtaFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcIlNsaWRlciBQYXJhbGxheCAvIFZcIiwgaHJlZjogXCIvc2xpZGVyLXBhZGRpbmctcGFyYWxsYXgtdlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSGFsZiBTY3JlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25NZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJTbGlkZXIgRGlzdG9ydGlvbiAvIEhcIiwgaHJlZjogXCIvc2xpZGVyLWhhbGYtZGlzdG9ydGlvbi1oXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwiU2xpZGVyIERpc3RvcnRpb24gLyBWXCIsIGhyZWY6IFwiL3NsaWRlci1oYWxmLWRpc3RvcnRpb24tdlwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcIlNsaWRlciBQYXJhbGxheCAvIEhcIiwgaHJlZjogXCIvc2xpZGVyLWhhbGYtcGFyYWxsYXgtaFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcIlNsaWRlciBQYXJhbGxheCAvIFZcIiwgaHJlZjogXCIvc2xpZGVyLWhhbGYtcGFyYWxsYXgtdlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNhcm91c2VsXCIsXHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bk1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJDYXJvdXNlbCBQb3J0Zm9saW8gMVwiLCBocmVmOiBcIi9jYXJvdXNlbC1wb3J0Zm9saW8tMVwifSxcclxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJDYXJvdXNlbCBQb3J0Zm9saW8gMlwiLCBocmVmOiBcIi9jYXJvdXNlbC1wb3J0Zm9saW8tMlwifSxcclxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJDYXJvdXNlbCBQb3J0Zm9saW8gM1wiLCBocmVmOiBcIi9jYXJvdXNlbC1wb3J0Zm9saW8tM1wifVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNhcmRcIixcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duTWVudTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcIkNhcmQgMiBDb2x1bW5zXCIsIGhyZWY6IFwiL3dvcmstY2FyZC0yLWNvbFwifSxcclxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJDYXJkIDMgQ29sdW1uc1wiLCBocmVmOiBcIi93b3JrLWNhcmQtMy1jb2xcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAge25hbWU6IFwiQ2FyZCA0IENvbHVtbnNcIiwgaHJlZjogXCIvd29yay1jYXJkLTQtY29sXCJ9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNsYXNzaWNcIixcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duTWVudTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcImNsYXNzaWMgMiBDb2x1bW5zXCIsIGhyZWY6IFwiL3dvcmstY2xhc3NpYy0yLWNvbFwifSxcclxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJjbGFzc2ljIDMgQ29sdW1uc1wiLCBocmVmOiBcIi93b3JrLWNsYXNzaWNcIn0sXHJcblxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICBdICovXHJcbiAgICB9LFxyXG4gICAge25hbWU6IFwiQVJUSUNMRVNcIiwgaHJlZjogXCIvYmxvZy1saXN0XCJ9LFxyXG5cclxuICAgIC8qIHtcclxuICAgICAgICBuYW1lOiBcIldvcmtzXCIsXHJcbiAgICAgICAgZHJvcGRvd25NZW51OiBbXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJCTVcgR3JvdXBcIiwgaHJlZjogJy9wb3J0Zm9saW8vYm13LWdyb3VwJ30sXHJcbiAgICAgICAgICAgICAgICAgICAge25hbWU6IFwiTWVyY2VkZXMgQmVuelwiLCBocmVmOiBcIi9wb3J0Zm9saW8vbWVyY2VkZXMtYmVuelwifSxcclxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJLcm9ub3NcIiwgaHJlZjogJy9wb3J0Zm9saW8va3Jvbm9zJ30sXHJcbiAgICAgICAgICAgICAgICAgICAge25hbWU6IFwiUHJpbmNpcGFsIEdhcmRlblwiLCBocmVmOiBcIi9wb3J0Zm9saW8vcHJpbmNpcGFsLWdhcmRlblwifSxcclxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJTbWFsbCBTaWx2ZXIgQ2FyXCIsIGhyZWY6ICcvcG9ydGZvbGlvL3NtYWxsLXNpbHZlci1jYXInfSxcclxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJZYXJlbiBDb2xsZWN0aW9uXCIsIGhyZWY6ICcvcG9ydGZvbGlvL3lhcmVuLWNvbGxlY3Rpb24nfSxcclxuXHJcbiAgICAgICAgXVxyXG4gICAgfSwgKi9cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC8qIFxyXG4gICAge25hbWU6IFwiU2VydmljZVwiLCBocmVmOiBcIi9zZXJ2aWNlXCJ9LCAqL1xyXG4gICAgLyoge1xyXG4gICAgICAgIG5hbWU6IFwiU3Rvcmllc1wiLFxyXG4gICAgICAgIGRyb3Bkb3duTWVudTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkxpc3RcIixcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duTWVudTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcIkxpc3QgMiBDb2x1bW5zXCIsIGhyZWY6IFwiL2Jsb2ctbGlzdFwifSxcclxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJMaXN0IDMgQ29sdW1uc1wiLCBocmVmOiBcIi9ibG9nLWxpc3QtMlwifSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDYXJkXCIsXHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bk1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJDYXJkIDIgQ29sdW1uc1wiLCBocmVmOiBcIi9ibG9nLWNhcmRcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAge25hbWU6IFwiQ2FyZCAzIENvbHVtbnNcIiwgaHJlZjogXCIvYmxvZy1jYXJkLTJcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAge25hbWU6IFwiQ2FyZCA0IENvbHVtbnNcIiwgaHJlZjogXCIvYmxvZy1jYXJkLTNcIn0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2xhc3NpY1wiLFxyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25NZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge25hbWU6IFwiQ2xhc3NpYyAyIENvbHVtbnNcIiwgaHJlZjogXCIvYmxvZy1jbGFzc2ljXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcIkNsYXNzaWMgMyBDb2x1bW5zXCIsIGhyZWY6IFwiL2Jsb2ctY2xhc3NpYy0yXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcIkNsYXNzaWMgNCBDb2x1bW5zXCIsIGhyZWY6IFwiL2Jsb2ctY2xhc3NpYy0zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LCB7bmFtZTogXCJTaW5nbGUgUG9zdFwiLCBocmVmOiBcIi9zaW5nbGUtYmxvZ1wifVxyXG5cclxuICAgICAgICBdXHJcbiAgICB9LCAqL1xyXG4gICAge25hbWU6IFwiQUJPVVRcIiwgaHJlZjogXCIvYWJvdXRcIn0sXHJcbiAgICB7bmFtZTogXCJDT05UQUNUXCIsIGhyZWY6IFwiL2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9iZXJuYXJkby1mb25zZWNhLXRvcnJlcy9cIn0sXHJcbiAgICB7bmFtZTogXCJJTVBSSU5UXCIsIGhyZWY6IFwiL2ltcHJpbnRcIn1cclxuXHJcbl07XHJcblxyXG5jb25zdCBFcmVtaWFNZW51ID0gKHtoYW1idXJnZXJ9KSA9PiB7XHJcblxyXG4gICAgbGV0ICRrZXkgPSAwO1xyXG4gICAgY29uc3QgZ2V0U3ViTWVudSA9IChpdGVtcykgPT4ge1xyXG4gICAgICAgICRrZXkrKztcclxuICAgICAgICBpZiAoaXRlbXMuZHJvcGRvd25NZW51KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPE5hdi5Ecm9wZG93biBuYW1lPXtpdGVtcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXska2V5fT57aXRlbXMuZHJvcGRvd25NZW51Lm1hcChpdGVtID0+IGdldFN1Yk1lbnUoaXRlbSkpfTwvTmF2LkRyb3Bkb3duPik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPXtpdGVtcy5ocmVmfSBrZXk9eyRrZXl9PntpdGVtcy5uYW1lfTwvTmF2Lkxpbms+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmF2YmFyIGhhbWJ1cmdlcj17aGFtYnVyZ2VyfT5cclxuICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPXtcIi9cIn0gdHJhbnNpdGlvblBhZ2U9e3t0aXRsZTogXCJieWJlcm5hcmRvXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxMb2dvIHdpZHRoPVwiNjBweFwiIGhlaWdodD1cImF1dG9cIi8+XHJcbiAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG5cclxuICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBjb3Zlcj1cIk1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgICAgICAgICAge21lbnVDb250ZW50Lm1hcChpdGVtID0+IGdldFN1Yk1lbnUoaXRlbSkpfVxyXG4gICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICA8TWVudUNvbnRlbnQgY2xhc3NOYW1lPVwic2VjdGlvbi1tYXJnaW5cIi8+XHJcbiAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICAgIDwvTmF2YmFyPlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbkVyZW1pYU1lbnUuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaGFtYnVyZ2VyOiBmYWxzZVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJlbWlhTWVudTsiXSwibmFtZXMiOlsiUmVhY3QiLCJOYXZiYXIiLCJOYXYiLCJNZW51Q29udGVudCIsIkxvZ28iLCJtZW51Q29udGVudCIsIm5hbWUiLCJocmVmIiwiRXJlbWlhTWVudSIsImhhbWJ1cmdlciIsIiRrZXkiLCJnZXRTdWJNZW51IiwiaXRlbXMiLCJkcm9wZG93bk1lbnUiLCJEcm9wZG93biIsIm1hcCIsIml0ZW0iLCJMaW5rIiwiQnJhbmQiLCJ0cmFuc2l0aW9uUGFnZSIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJDb2xsYXBzZSIsImNvdmVyIiwiY2xhc3NOYW1lIiwiZGVmYXVsdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header/menu/EremiaMenu.jsx\n"));

/***/ })

});