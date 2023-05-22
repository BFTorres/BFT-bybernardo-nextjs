"use strict";
exports.id = 588;
exports.ids = [588];
exports.modules = {

/***/ 588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Team_Team)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./layout/DsnGrid.tsx
var DsnGrid = __webpack_require__(6878);
// EXTERNAL MODULE: ./hooks/helper.ts
var helper = __webpack_require__(9735);
// EXTERNAL MODULE: ./data/team.js
var team = __webpack_require__(3729);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Team/TeamItem.tsx



function TeamItem({ className , data  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,helper/* dsnCN */.gU)("team-item", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "team-item-inner",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "team-item-wrapper background-section",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "item-content d-flex a-item-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "box-img p-relative",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: "cover-bg-img",
                                src: data?.src,
                                alt: data.name,
                                width: 260,
                                height: 278,
                                sizes: "(max-width: 768px) 100vw,(max-width: 1200px) 400px,100vw"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "box-text",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "sm-title-block mb-5",
                                    children: data.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "theme-color",
                                    children: data.position
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "box-social mt-20",
                                    children: data.social && data.social.map(($item, $index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            "data-dsn": "parallax",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: $item.url,
                                                children: $item.title
                                            })
                                        }, $index))
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const Team_TeamItem = (TeamItem);

;// CONCATENATED MODULE: ./components/Team/Team.tsx





function Team({ className , data , ...restProps }) {
    const teamData = data || (0,team/* getTeamData */.V)();
    return /*#__PURE__*/ jsx_runtime_.jsx(DsnGrid/* default */.Z, {
        className: (0,helper/* dsnCN */.gU)("team", className),
        ...restProps,
        children: teamData && teamData.map(($item)=>// @ts-ignore
            /*#__PURE__*/ jsx_runtime_.jsx(Team_TeamItem, {
                data: $item
            }, $item.id))
    });
}
/* harmony default export */ const Team_Team = (Team);


/***/ }),

/***/ 3729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getTeamData)
/* harmony export */ });
/* unused harmony export getTeamItem */
const data = [
    {
        id: 1,
        name: "Ahmed Shawky",
        position: "Co-Founder / Design",
        src: "/img/team/1.jpg",
        social: [
            {
                title: "FB",
                url: "#0"
            },
            {
                title: "TW",
                url: "#0"
            },
            {
                title: "LN",
                url: "#0"
            }
        ]
    },
    {
        id: 2,
        name: "Hisham Megahed",
        position: "Creative Director",
        src: "/img/team/2.jpg",
        social: [
            {
                title: "FB",
                url: "#0"
            },
            {
                title: "TW",
                url: "#0"
            },
            {
                title: "LN",
                url: "#0"
            }
        ]
    },
    {
        id: 3,
        name: "Jeremy Smith",
        position: "Creative Studio Head",
        src: "/img/team/3.jpg",
        social: [
            {
                title: "FB",
                url: "#0"
            },
            {
                title: "TW",
                url: "#0"
            },
            {
                title: "LN",
                url: "#0"
            }
        ]
    },
    {
        id: 4,
        name: "Bill Gardner",
        position: "Web designer",
        src: "/img/team/2.jpg",
        social: [
            {
                title: "FB",
                url: "#0"
            },
            {
                title: "TW",
                url: "#0"
            },
            {
                title: "LN",
                url: "#0"
            }
        ]
    },
    {
        id: 5,
        name: "Jeremy Dupont",
        position: "Creative Director",
        src: "/img/team/3.jpg",
        social: [
            {
                title: "FB",
                url: "#0"
            },
            {
                title: "TW",
                url: "#0"
            },
            {
                title: "LN",
                url: "#0"
            }
        ]
    },
    {
        id: 6,
        name: "Angelo Walking",
        position: "Developer Lead",
        src: "/img/team/1.jpg",
        social: [
            {
                title: "FB",
                url: "#0"
            },
            {
                title: "TW",
                url: "#0"
            },
            {
                title: "LN",
                url: "#0"
            }
        ]
    }
];
const getTeamData = ()=>data;
const getTeamItem = (value, whereName = "id")=>{
    return data.find((item)=>item[whereName] === value);
};


/***/ })

};
;