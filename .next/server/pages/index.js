"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405,588];
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

/***/ 6218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ AccordionItem),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9735);




function AccordionItem({ active , className , title , // @ts-ignore
children , number  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_3__/* .dsnCN */ .gU)("accordion__item", className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `accordion__question ${active && "expanded"} d-flex align-items-center p-relative`,
                children: [
                    number && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "number",
                        children: number
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "sm-title-block",
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `accordion__answer ${active && "active"}`,
                children: children
            })
        ]
    });
}
function Accordion({ duration =0.4 , className , children  }) {
    const accordion = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let activeIndex;
        const items = accordion.current.querySelectorAll(".accordion__item");
        if (!items) return;
        const closeAccording = ($element)=>{
            const { question , answer  } = $element.dsnAccording;
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.set(answer, {
                height: "auto",
                display: "block",
                overflow: "hidden"
            });
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(answer, {
                height: 0,
                paddingTop: 0,
                overflow: "hidden",
                display: "block",
                duration,
                clearProps: "paddingTop,height,overflow,display",
                onComplete () {
                    answer.classList.remove("active");
                    question.classList.remove("expanded");
                }
            });
        };
        const openAccording = ($element)=>{
            const { question , answer , style  } = $element.dsnAccording;
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.set(answer, {
                height: 0,
                display: "block",
                overflow: "hidden",
                paddingTop: 0
            });
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(answer, {
                height: style.height,
                duration,
                paddingTop: style.paddingTop,
                clearProps: "paddingTop,height,overflow,display",
                onComplete () {
                    answer.classList.add("active");
                    question.classList.add("expanded");
                }
            });
        };
        items.forEach(($item, $index)=>{
            const question = $item.querySelector(".accordion__question");
            const answer = $item.querySelector(".accordion__answer");
            answer.style.display = "block";
            $item.dsnAccording = {
                question,
                answer,
                style: {
                    height: answer.getBoundingClientRect().height,
                    paddingTop: window.getComputedStyle(answer).paddingTop
                }
            };
            answer.style.display = "";
            if (question?.classList.contains("expanded") && activeIndex === undefined) activeIndex = $index;
            else {
                question?.classList.remove("expanded");
                answer?.classList.remove("active");
            }
            question.addEventListener("click", function() {
                if (activeIndex === $index) return;
                if (activeIndex !== undefined) closeAccording(items[activeIndex]);
                openAccording($item);
                activeIndex = $index;
            });
        });
        return ()=>{
            items.forEach(($item)=>{
                const { dsnAccording  } = $item;
                dsnAccording.question.replaceWith(dsnAccording.question.cloneNode(true));
                delete $item.dsnAccording;
            });
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_3__/* .dsnCN */ .gU)("dsn-accordion accordion", className),
        ref: accordion,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "accordion__wrapper",
            children: children
        })
    });
}
Accordion.item = AccordionItem;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);


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

/***/ 5041:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./layout/DsnGrid.tsx
var layout_DsnGrid = __webpack_require__(6878);
// EXTERNAL MODULE: ./components/Image/ParallaxImage.tsx
var Image_ParallaxImage = __webpack_require__(6964);
// EXTERNAL MODULE: ./hooks/helper.ts
var helper = __webpack_require__(9735);
// EXTERNAL MODULE: ./animation/MoveTrigger.tsx
var animation_MoveTrigger = __webpack_require__(2055);
// EXTERNAL MODULE: ./hooks/dsnHooks.ts
var dsnHooks = __webpack_require__(4425);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
;// CONCATENATED MODULE: ./animation/FadeUpTrigger.tsx




function FadeUpTrigger_FadeUpTrigger({ duration , ease , delay , start , end , scrub , markers , stagger , children , tag: Tag = "div" , ...restProps }) {
    const [ref, setRef] = (0,dsnHooks/* useArrayRef */.S5)();
    const animateChild = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        if (animateChild.current) ref.current = animateChild.current.children;
        if (!ref.current) return;
        const animation = external_gsap_.gsap.effects.fade(ref.current, {
            from: {
                y: 20,
                opacity: 0
            },
            to: {
                stagger: stagger,
                y: 0,
                opacity: 1,
                delay: delay,
                onComplete: ()=>{
                    if (!scrub) {
                        animation.scrollTrigger.kill();
                        animation.kill();
                    }
                }
            },
            ease: ease,
            start: start,
            end: end,
            scrub: scrub,
            markers: markers,
            duration: duration
        });
        return ()=>{
            if (animation.scrollTrigger) animation.scrollTrigger.kill();
            animation.kill();
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: typeof children === "function" ? children(setRef) : // @ts-ignore
        /*#__PURE__*/ jsx_runtime_.jsx(Tag, {
            ...restProps,
            ref: animateChild,
            children: children
        })
    });
}
FadeUpTrigger_FadeUpTrigger.defaultProps = {
    ease: external_gsap_.Back.easeOut.config(1.7),
    start: "75%",
    end: "100%",
    scrub: false,
    markers: false,
    duration: 0.8,
    stagger: 0.2,
    delay: 0
};
/* harmony default export */ const animation_FadeUpTrigger = ((/* unused pure expression or super */ null && (FadeUpTrigger_FadeUpTrigger)));

;// CONCATENATED MODULE: ./components/hero-section/HeroSection.jsx







const HeroContent = {
    title: "Hello we, are <br/> Dsn Grid",
    subtitle: `We’re a creative agency with an expertise in make custom websites.`,
    description: `Founded in 2000, Dsn Grid has become one of the best Digital Agency in Themeforest. <span class="mb-10 d-block" ></span>
     Blue money going forward, but deploy to production. First-order optimal strategies build on a culture of contribution and inclusion so those options`,
    authorTitle: "SALVADOR DALI",
    authorJob: "Digital Artisit",
    experienceNumber: "25",
    experienceDescription: `YEARS OF \nDIGITAL EXPERIENCE`,
    heroImage: "/img/about-intro.jpg",
    awards: [
        {
            number: 37,
            description: `Business <br/> partner`
        },
        {
            number: 19,
            description: `SUTISFIED <br/> CUSTOMERS`
        }
    ]
};
function HeroSection({ className , ...restProps }) {
    return /*#__PURE__*/ _jsx("section", {
        className: dsnCN(`about-section p-relative`, className),
        ...restProps,
        children: /*#__PURE__*/ _jsxs(DsnGrid, {
            col: 2,
            colTablet: 1,
            colGap: 50,
            rowGap: 40,
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "box-info pt-60 pb-60",
                    children: [
                        /*#__PURE__*/ _jsx(MoveTrigger, {
                            from: {
                                y: 0
                            },
                            to: {
                                y: -70
                            },
                            tablet: false,
                            mobile: false,
                            children: (ref)=>/*#__PURE__*/ _jsx("h2", {
                                    className: "section-title title-move mb-30 text-uppercase",
                                    dangerouslySetInnerHTML: {
                                        __html: HeroContent.title
                                    },
                                    ref: ref
                                })
                        }),
                        /*#__PURE__*/ _jsx(FadeUpTrigger, {
                            children: (ref)=>/*#__PURE__*/ _jsxs(_Fragment, {
                                    children: [
                                        /*#__PURE__*/ _jsx("h6", {
                                            className: "title-block border-bottom pb-30 mb-30",
                                            ref: ref,
                                            children: HeroContent.subtitle
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "mb-30",
                                            ref: ref,
                                            style: {
                                                maxWidth: 570
                                            },
                                            dangerouslySetInnerHTML: {
                                                __html: HeroContent.description
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("h5", {
                                            className: "sm-title-block line-shape line-shape-after mb-10",
                                            ref: ref,
                                            children: HeroContent.authorTitle
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "sub-heading line-bg-left",
                                            ref: ref,
                                            children: HeroContent.authorJob
                                        }),
                                        /*#__PURE__*/ _jsx(DsnGrid, {
                                            className: "box-awards pt-30",
                                            col: 2,
                                            colTablet: 2,
                                            colGap: 15,
                                            rowGap: 15,
                                            children: HeroContent.awards.map((item, index)=>/*#__PURE__*/ _jsx("div", {
                                                    className: "box-awards_item has-border ",
                                                    ref: ref,
                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                        className: `box-awards_inner background-section`,
                                                        children: [
                                                            /*#__PURE__*/ _jsx("span", {
                                                                className: "has-animate-number title",
                                                                children: item.number
                                                            }),
                                                            /*#__PURE__*/ _jsx("h5", {
                                                                className: "sm-title-block",
                                                                dangerouslySetInnerHTML: {
                                                                    __html: item.description
                                                                }
                                                            })
                                                        ]
                                                    })
                                                }, index))
                                        })
                                    ]
                                })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "background-mask p-relative over-hidden",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "p-absolute p-20 h-100 w-100",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "line line-top"
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "line line-bottom"
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "line line-left"
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "line line-right"
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "img-box h-100",
                                children: /*#__PURE__*/ _jsx(ParallaxImage, {
                                    src: HeroContent.heroImage,
                                    alt: "about",
                                    height: "100%",
                                    overlay: 4,
                                    sizes: "(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "box-awards-item p-absolute big-number v-dark-head left-0 bottom-0 ml-40 mb-40 z-index-1 border-style",
                                children: /*#__PURE__*/ _jsxs("h5", {
                                    className: "number p-20",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "has-animate-number title",
                                            style: {
                                                fontSize: "110px",
                                                lineHeight: "120px"
                                            },
                                            children: HeroContent.experienceNumber
                                        }),
                                        HeroContent.experienceDescription && /*#__PURE__*/ _jsx("span", {
                                            className: "sm-title-block d-block",
                                            dangerouslySetInnerHTML: {
                                                __html: HeroContent.experienceDescription
                                            }
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const hero_section_HeroSection = ((/* unused pure expression or super */ null && (HeroSection)));


/***/ }),

/***/ 627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_DsnGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6878);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9735);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _heading_TitleSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3042);
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7091);







const heroData = {
    title: `WE ARE , <br/> DSIGN GRID`,
    descTitle: `ABOUT DIGITAL AGENCY`,
    subtitle: `We’re a creative agency with an expertise in make custom websites.`,
    description: `Founded in 2000, Dsn Grid has become one of the best Digital Agency in
                            ThemeForest. Blue money going forward, but deploy to production. First-order
                            optimal strategies build on a culture of contribution and inclusion so those
                            options`,
    heroImage: "/img/about-intro.jpg",
    link: {
        href: "/about"
    },
    textButton: "About Us",
    firstImage: {
        src: "/img/help-project.jpg",
        alt: "",
        fill: true
    },
    lastImage: {
        src: "/img/help2.jpg",
        alt: "",
        fill: true
    }
};
function HeroSection({ className , ...restProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_3__/* .dsnCN */ .gU)("about-section-2", className),
        ...restProps,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                col: 2,
                colTablet: 1,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "box-img p-relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "box-inner-img p-absolute",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    className: "cover-bg-img",
                                    ...heroData.firstImage,
                                    alt: "",
                                    fill: false,
                                    width: 750,
                                    height: 915
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "box-inner-img p-absolute",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    className: "cover-bg-img",
                                    ...heroData.lastImage,
                                    alt: "",
                                    fill: false,
                                    width: 750,
                                    height: 915
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "box-information",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heading_TitleSection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: "align-items-start mb-30",
                                description: heroData.descTitle,
                                defaultSpace: false,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: heroData.title
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: "sm-title-block mb-10",
                                dangerouslySetInnerHTML: {
                                    __html: heroData.subtitle
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                dangerouslySetInnerHTML: {
                                    __html: heroData.description
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                className: "mt-30",
                                ...heroData.link,
                                children: heroData.textButton
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSection);


/***/ }),

/***/ 388:
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




function MoveBox({ bgColor , free , className , children , ...restProps }) {
    const refEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const parentEl = refEl.current.closest(".section-margin");
        if (parentEl) parentEl.classList.add("section-margin-move");
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animation_MoveTrigger__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...restProps,
        children: (ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_3__/* .dsnCN */ .gU)("dsn-move-section", !free && "p-relative", className),
                ref: ref,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `inner-box background-${bgColor}`,
                    ref: refEl,
                    children: children
                })
            })
    });
}
MoveBox.defaultProps = {
    bgColor: "section",
    free: true,
    from: {
        y: 100
    },
    to: {
        y: -100
    },
    ease: "none",
    start: "100%",
    end: "0%",
    scrub: true,
    markers: false,
    stagger: null,
    tablet: false,
    mobile: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoveBox);


/***/ }),

/***/ 2785:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4653);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4146);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Service__WEBPACK_IMPORTED_MODULE_2__]);
_Service__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ServiceOne = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].grid */ .Z.grid, {
        col: 3,
        colTablet: 2,
        colMobile: 1,
        colGap: 15,
        masonry: true,
        className: className,
        data: (0,_data_service__WEBPACK_IMPORTED_MODULE_3__/* .getServiceData */ .Y)(),
        backgroundColor: "background-section",
        styleBox: "line"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceOne);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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


/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1779);
/* harmony import */ var _components_slider_portfolio_SliderPortfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5273);
/* harmony import */ var _components_hero_section_HeroSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5041);
/* harmony import */ var _components_hero_section_HeroSection2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(627);
/* harmony import */ var _components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3042);
/* harmony import */ var _components_services_grid_ServiceOne__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2785);
/* harmony import */ var _components_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6964);
/* harmony import */ var _components_move_box_MoveBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(388);
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7091);
/* harmony import */ var _components_portfolio_PortfolioSwiper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9828);
/* harmony import */ var _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4628);
/* harmony import */ var _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8788);
/* harmony import */ var _components_accordion_Accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6218);
/* harmony import */ var _layout_DsnGrid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6878);
/* harmony import */ var _components_heading_TitleCover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6904);
/* harmony import */ var _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(907);
/* harmony import */ var _components_Team_Team__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(588);
/* harmony import */ var _components_brand_client_BrandClient__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(416);
/* harmony import */ var _components_next_NextPage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6331);
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1084);
/* harmony import */ var _components_model_right_ModalContact__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9849);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_23__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_Layout__WEBPACK_IMPORTED_MODULE_2__, _components_slider_portfolio_SliderPortfolio__WEBPACK_IMPORTED_MODULE_3__, _components_services_grid_ServiceOne__WEBPACK_IMPORTED_MODULE_7__, _components_portfolio_PortfolioSwiper__WEBPACK_IMPORTED_MODULE_11__, _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_12__, _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_13__, _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_17__, _components_footer_Footer__WEBPACK_IMPORTED_MODULE_21__]);
([_layout_Layout__WEBPACK_IMPORTED_MODULE_2__, _components_slider_portfolio_SliderPortfolio__WEBPACK_IMPORTED_MODULE_3__, _components_services_grid_ServiceOne__WEBPACK_IMPORTED_MODULE_7__, _components_portfolio_PortfolioSwiper__WEBPACK_IMPORTED_MODULE_11__, _components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_12__, _components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_13__, _components_bolg_BlogSwiper__WEBPACK_IMPORTED_MODULE_17__, _components_footer_Footer__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
























function Home() {
    _components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"].defaultProps */ .Z.defaultProps = {
        classDesc: "line-shape line-shape-before",
        classDesInner: "line-bg-right"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        modelRight: {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_model_right_ModalContact__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {}),
            propsModal: {
                textBtn: "Contact"
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_23___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Home | Bernardo Fonseca Torres - Digital Craftsman"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hero_section_HeroSection2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: "container section-margin container fill-right-container",
                "data-dsn-title": "How We Are"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "section-margin",
                "data-dsn-title": "Our Portfolio",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: `container align-items-center text-center`,
                        children: [
                            "Creative Portfolio ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_portfolio_PortfolioSwiper__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        grabCursor: true,
                        desktop: {
                            spaceBetween: 50,
                            slidesPerView: 1.5
                        },
                        tablet: {
                            spaceBetween: 0,
                            slidesPerView: 1.3
                        },
                        mobile: {
                            slidesPerView: 1
                        },
                        stylePortfolio: "work-section",
                        className: "text-left v-dark-head title-inherit h4",
                        centeredSlides: true,
                        loop: true,
                        blur: true,
                        parallax: true,
                        speed: 1200,
                        watchSlidesProgress: true,
                        loopedSlides: 2,
                        parallaxImage: {
                            "data-swiper-parallax-scale": "0.85"
                        },
                        parallaxContent: {
                            "data-swiper-parallax-opacity": "0"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            className: `justify-content-between dsn-container mt-30`
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container section-margin",
                "data-dsn-title": "Our Services",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: "align-items-center text-center",
                        description: "Our Services",
                        children: [
                            "We are delivering beautiful ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            " digital products for you."
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_services_grid_ServiceOne__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-relative section-margin",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        src: "/img/project/project3/2.jpg",
                        overlay: 2,
                        alt: ""
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_move_box_MoveBox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        tablet: false,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                className: `align-items-start mb-30`,
                                description: "Build perfect websites",
                                defaultSpace: false,
                                children: "Unlimited power"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-10",
                                children: "Most of our writings have centered on implementing strategies for business units, with their unique"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-30",
                                children: "geeza arse it’s your round grub sloshed burke, my good sir chancer he legged it he lost his bottle pear shaped bugger all mate"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_button_Button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                href: "work-classic-2-col",
                                className: "image-zoom",
                                "data-dsn": "parallax",
                                transitionPage: {
                                    title: "Our Portfolio"
                                },
                                children: [
                                    "More Projects ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "⟶"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `sm-p mt-15 theme-color`,
                                children: "NOTE : Some details are very important."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "section-margin",
                "data-dsn-title": "Testimonials",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    className: "container section-margin",
                    title: "Feedback from our clients.",
                    skin: [
                        "testimonials-half"
                    ],
                    backgroundColor: "background-section",
                    desktop: {
                        slidesPerView: 2
                    },
                    mobile: {
                        slidesPerView: 1
                    },
                    speed: 1000,
                    grabCursor: true,
                    loop: true,
                    loopedSlides: 2,
                    parallax: true,
                    parallaxImage: {
                        "data-swiper-parallax-scale": 0.7
                    },
                    parallaxContent: {
                        "data-swiper-parallax-opacity": 0,
                        "data-swiper-parallax": "30%"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_swiper_pagination_SwiperPagination__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        className: `justify-content-between dsn-container mt-30`
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "box-gallery-vertical container section-margin",
                "data-dsn-title": "Our Services",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    col: 2,
                    colTablet: 1,
                    colGap: 0,
                    rowGap: 0,
                    rowGapTablet: 0,
                    rowGapMobile: 0,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-relative mb-lg-section",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "box-im w-100 h-100 p-absolute",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_ParallaxImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    alt: "",
                                    src: "/img/plan-project.jpg",
                                    overlay: 3,
                                    height: "100%",
                                    heightTable: "70vh",
                                    heightMobile: "70vh",
                                    sizes: "(max-width: 768px) 100vw,(max-width: 1200px) 70vw,33vw"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-relative pt-lg-section",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "box-info h-100 box-padding background-section ",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_DsnGrid__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    className: "box-info-inner",
                                    col: 1,
                                    colGap: 0,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleCover__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                            children: "bybernardo"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            className: "text-uppercase",
                                            description: "OUR PURPOSE",
                                            defaultSpace: false,
                                            children: "We Plan Your Project"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_accordion_Accordion__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_accordion_Accordion__WEBPACK_IMPORTED_MODULE_14__/* .AccordionItem */ .Q, {
                                                    title: "Extensive Employment",
                                                    active: true,
                                                    number: 1,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Quisque placerat vitae lacus ut sceleris queusce luctus odio ac nibh luctus, in porttitor."
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_accordion_Accordion__WEBPACK_IMPORTED_MODULE_14__/* .AccordionItem */ .Q, {
                                                    title: "Dedicated Staff",
                                                    number: 2,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Quisque placerat vitae lacus ut sceleris queusce luctus odio ac nibh luctus, in porttitor."
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_accordion_Accordion__WEBPACK_IMPORTED_MODULE_14__/* .AccordionItem */ .Q, {
                                                    title: "User Experience",
                                                    number: 3,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole."
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "container section-margin",
                "data-dsn-title": "our clients",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_heading_TitleSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: `align-items-center text-center`,
                        description: "Our clients",
                        children: [
                            "Your successful, our ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "reputation"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_brand_client_BrandClient__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        col: 4,
                        colTablet: 3,
                        colMobile: 2,
                        colGap: 0,
                        rowGap: 0
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_next_NextPage__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                className: "section-padding border-top background-section"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                className: "background-section"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 303:
/***/ ((module) => {

module.exports = import("@fortawesome/free-brands-svg-icons");;

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ }),

/***/ 2949:
/***/ ((module) => {

module.exports = import("three");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9210,9403,1664,3121,5675,4597,1566,3233,6401,3042,1688,4396,2536,4425,2407,9475,4648,7011,5273,7920,6964,2055,7270,4628,8788,9828,907,416], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();