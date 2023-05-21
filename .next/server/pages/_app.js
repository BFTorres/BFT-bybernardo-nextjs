(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 7674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@fancyapps/ui/dist/fancybox.css
var fancybox = __webpack_require__(6721);
// EXTERNAL MODULE: ./node_modules/flickr-justified-gallery/src/fjGallery.css
var fjGallery = __webpack_require__(1886);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.min.css
var swiper_min = __webpack_require__(8722);
// EXTERNAL MODULE: ./node_modules/swiper/modules/parallax/parallax.min.css
var parallax_min = __webpack_require__(707);
// EXTERNAL MODULE: ./node_modules/swiper/modules/pagination/pagination.min.css
var pagination_min = __webpack_require__(2996);
// EXTERNAL MODULE: ./node_modules/splitting/dist/splitting.css
var splitting = __webpack_require__(3023);
// EXTERNAL MODULE: ./node_modules/splitting/dist/splitting-cells.css
var splitting_cells = __webpack_require__(2990);
// EXTERNAL MODULE: ./styles/style.scss
var style = __webpack_require__(1733);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
;// CONCATENATED MODULE: external "gsap/dist/ScrollToPlugin"
const ScrollToPlugin_namespaceObject = require("gsap/dist/ScrollToPlugin");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./hooks/spltting.js
var spltting = __webpack_require__(7011);
;// CONCATENATED MODULE: ./animation/dsnEffect.js


function moveSection() {
    external_gsap_.gsap.registerEffect({
        name: "moveSection",
        extendTimeline: true,
        defaults: {
            from: {
                y: -10
            },
            to: {
                y: 200
            },
            ease: "none",
            start: "100%",
            end: "0%",
            scrub: true,
            markers: false
        },
        effect: (target, config)=>{
            return external_gsap_.gsap.fromTo(target, config.from, {
                ease: config.ease,
                ...config.to,
                scrollTrigger: {
                    trigger: target,
                    scrub: config.scrub,
                    start: `top ${config.start}`,
                    end: `${config.end} 0%`,
                    markers: config.markers
                }
            });
        }
    });
}
function fade() {
    external_gsap_.gsap.registerEffect({
        name: "fade",
        extendTimeline: true,
        defaults: {
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            },
            ease: external_gsap_.Back.easeOut.config(1.7),
            start: "75%",
            end: "100%",
            scrub: false,
            markers: false,
            duration: 0.8
        },
        effect: (target, config)=>{
            return external_gsap_.gsap.fromTo(target, config.from, {
                ...config.to,
                willChange: "transform , opacity",
                scrollTrigger: {
                    trigger: target,
                    scrub: config.scrub,
                    start: `top ${config.start}`,
                    end: `${config.end} 0%`,
                    markers: config.markers
                }
            });
        }
    });
}
function textAnimation() {
    external_gsap_.gsap.registerEffect({
        name: "textAnimation",
        extendTimeline: true,
        defaults: {
            from: {},
            to: {},
            ease: external_gsap_.Back.easeOut.config(2),
            start: "75%",
            end: "100%",
            scrub: false,
            markers: false,
            duration: 0.8
        },
        effect: (target, config)=>{
            return external_gsap_.gsap.fromTo(spltting/* default.Words */.ZP.Words(target[0]).words, config.from, {
                ...config.to,
                willChange: "transform , opacity",
                transformOrigin: "top left",
                ease: config.ease,
                duration: config.duration,
                scrollTrigger: {
                    trigger: target,
                    scrub: config.scrub,
                    start: `top ${config.start}`,
                    end: `${config.end} 0%`,
                    markers: config.markers
                }
            });
        }
    });
}
const dsnEffect = {
    registerEffect: (...param)=>{
        if (param) param.forEach((item)=>{
            if (typeof item === "function") item();
        });
    }
};
/* harmony default export */ const animation_dsnEffect = (dsnEffect);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./features/smooth-scrollbar/smoothScrollbarSlice.ts
var smoothScrollbarSlice = __webpack_require__(9513);
;// CONCATENATED MODULE: ./features/store.ts


const store = (0,toolkit_.configureStore)({
    reducer: {
        scrollbar: smoothScrollbarSlice/* default */.ZP
    },
    middleware: (0,toolkit_.getDefaultMiddleware)({
        serializableCheck: false
    })
});

// EXTERNAL MODULE: ./hooks/helper.ts
var helper = __webpack_require__(9735);
;// CONCATENATED MODULE: ./animation/SvgAnimate.js

function animationUp(svg, onComplete) {
    return external_gsap_.gsap.timeline().addLabel("top").set(svg, {
        attr: {
            d: "M 0 100 V 100 Q 50 100 100 100 V 100 z"
        }
    }, 0).to(svg, {
        duration: 0.8,
        ease: "power4.in",
        attr: {
            d: "M 0 100 V 50 Q 50 0 100 50 V 100 z"
        }
    }, 0).to(svg, {
        duration: 0.3,
        ease: "power2",
        attr: {
            d: "M 0 100 V 0 Q 50 0 100 0 V 100 z"
        },
        onComplete
    }).addLabel("center").set(svg, {
        attr: {
            d: "M 0 0 V 100 Q 50 100 100 100 V 0 z"
        }
    }).to(svg, {
        duration: 0.3,
        ease: "power2.in",
        attr: {
            d: "M 0 0 V 50 Q 50 0 100 50 V 0 z"
        }
    }).to(svg, {
        duration: 0.8,
        ease: "power4",
        attr: {
            d: "M 0 0 V 0 Q 50 0 100 0 V 0 z"
        }
    });
}
function animationDown(svg, onComplete) {
    return external_gsap_.gsap.timeline().addLabel("top").set(svg, {
        attr: {
            d: "M 0 0 V 0 Q 50 0 100 0 V 0 z"
        }
    }, 0).to(svg, {
        duration: 0.8,
        ease: "power4.in",
        attr: {
            d: "M 0 0 V 50 Q 50 100 100 50 V 0 z"
        }
    }, 0).to(svg, {
        duration: 0.3,
        ease: "power2",
        attr: {
            d: "M 0 0 V 100 Q 50 100 100 100 V 0 z"
        },
        onComplete
    }).addLabel("center").set(svg, {
        attr: {
            d: "M 0 100 V 0 Q 50 0 100 0 V 100 z"
        }
    }).to(svg, {
        duration: 0.3,
        ease: "power2.in",
        attr: {
            d: "M 0 100 V 50 Q 50 100 100 50 V 100 z"
        }
    }).to(svg, {
        duration: 0.8,
        ease: "power4",
        attr: {
            d: "M 0 100 V 100 Q 50 100 100 100 V 100 z"
        }
    });
}
const SvgAnimate = {
    up: animationUp,
    down: animationDown
};
/* harmony default export */ const animation_SvgAnimate = (SvgAnimate);

;// CONCATENATED MODULE: ./components/nav/toggle/index.jsx





function Toggle({ textOpen , textMenu , textClose , targetNav , reserved , setReserved , removeOpenMenu , className , ...restProps }) {
    const splitMenu = (0,external_react_.useRef)();
    const splitOpen = (0,external_react_.useRef)();
    const splitClose = (0,external_react_.useRef)();
    const navbarToggle = (0,external_react_.useRef)();
    const svg = (0,external_react_.useRef)();
    const backgroundMain = (0,external_react_.useRef)();
    const TransEnd = ()=>{
        !reserved && targetNav.current.querySelector(".primary-nav")?.classList.add("open");
    };
    const onCompleteAnimate = (e)=>{
        targetNav.current?.classList.toggle("dsn-open");
        navbarToggle.current?.classList.toggle("open");
        document.body.classList.toggle("over-hidden");
    };
    const toggleClick = (e)=>{
        setReserved(!reserved);
        if (reserved) removeOpenMenu();
        if (!reserved) {
            animation_SvgAnimate.up(svg.current, TransEnd).to("#dsn-scrollbar", {
                y: -200,
                duration: 1,
                ease: "power4.in"
            }, "top").set(backgroundMain.current, {
                autoAlpha: 1
            }, "center");
            onCompleteAnimate(this);
        } else animation_SvgAnimate.down(svg.current, ()=>onCompleteAnimate(this)).to("#dsn-scrollbar", {
            y: 0,
            clearProps: "y",
            duration: 1,
            ease: "power4"
        }, "-=1").set(backgroundMain.current, {
            autoAlpha: 0
        }, "center");
    };
    (0,external_react_.useEffect)(()=>{
        spltting/* default.Char */.ZP.Char(splitMenu.current);
        spltting/* default.Char */.ZP.Char(splitOpen.current);
        spltting/* default.Char */.ZP.Char(splitClose.current);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "navbar_toggle",
                className: (0,helper/* dsnCN */.gU)("navbar-toggle", className),
                ...restProps,
                onClick: toggleClick,
                ref: navbarToggle,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "toggle-icon",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "toggle-line"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "toggle-line"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "toggle-line"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "toggle-text",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-menu",
                                ref: splitMenu,
                                children: textMenu
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-open",
                                ref: splitOpen,
                                children: textOpen
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-close",
                                ref: splitClose,
                                children: textClose
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-load background-main",
                ref: backgroundMain
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                width: "100%",
                height: "100%",
                viewBox: "0 0 100 100",
                preserveAspectRatio: "none",
                className: "bg-load dsn-svg-transition",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    vectorEffect: "non-scaling-stroke",
                    d: "M 0 100 V 100 Q 50 100 100 100 V 100 z",
                    ref: svg
                })
            })
        ]
    });
}
/* harmony default export */ const toggle = (/*#__PURE__*/external_react_default().memo(Toggle));

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/nav/dropdown/index.jsx




const ArrowLeft = ()=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "30px",
        viewBox: "0 0 400.004 400.004",
        xmlSpace: "preserve",
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z"
            })
        })
    });
const Dropdown = ({ children , name , textBack ="Back" , ...restProps })=>{
    const refName = (0,external_react_.useRef)();
    const refBack = (0,external_react_.useRef)();
    const handleClick = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.closest(".open").classList.remove("open");
    };
    const handleClickSubMenu = (e)=>{
        handleClick(e);
        e.currentTarget.querySelector("ul").classList.add("open");
    };
    const handleClickBackMenu = (e)=>{
        handleClick(e);
        e.currentTarget.closest("ul").closest("li").closest("ul").classList.add("open");
    };
    (0,external_react_.useEffect)(()=>{
        spltting/* default.Char */.ZP.Char(refName.current);
        spltting/* default.Char */.ZP.Char(refBack.current);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: "nav-item has-sub-menu",
        onClick: handleClickSubMenu,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "#0",
                ...restProps,
                onClick: (e)=>e.preventDefault(),
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "overflow",
                    children: name
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "sub-menu h3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "dsn-back",
                        onClick: handleClickBackMenu,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ArrowLeft, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "text-toggle-back",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-name",
                                            ref: refName,
                                            children: name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-back",
                                            ref: refBack,
                                            children: textBack
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    children
                ]
            })
        ]
    });
};
/* harmony default export */ const dropdown = (Dropdown);

// EXTERNAL MODULE: ./hooks/DsnLink.tsx
var DsnLink = __webpack_require__(1688);
;// CONCATENATED MODULE: ./components/nav/Navbar.tsx








function Navbar({ children , textOpen , textMenu , textClose , hamburger  }) {
    const nav = (0,external_react_.useRef)(null);
    const [typeNave, setTypeNave] = (0,external_react_.useState)("");
    const [reserved, setReserved] = (0,external_react_.useState)(false);
    const removeOpenMenu = (0,external_react_.useCallback)(()=>{
        nav.current.querySelectorAll("ul").forEach((item)=>item.classList.remove("open"));
    }, []);
    const cutterElement = ()=>{
        nav.current.querySelectorAll("ul").forEach((item, index)=>{
            item.style.setProperty("--dsn-li-name", "dsn" + index);
            Object.keys(item.children).forEach(($key)=>{
                item.children[$key].style.setProperty("--dsn-li-index", $key);
            });
        });
    };
    const resizeNav = ()=>{
        if (window.innerWidth > 991) {
            setTypeNave("");
            removeOpenMenu();
            setReserved(false);
        } else setTypeNave("dsn-hamburger");
    };
    // only runs after first render
    (0,external_react_.useEffect)(()=>{
        if (!hamburger) {
            window.addEventListener("resize", resizeNav);
            resizeNav();
        } else {
            setTypeNave("dsn-hamburger");
        }
        cutterElement();
        external_gsap_.gsap.to(nav.current, {
            opacity: 1,
            delay: 1
        });
        return ()=>{
            window.removeEventListener("resize", resizeNav);
        };
    }, [
        hamburger
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        id: "site_menu_header",
        className: (0,helper/* dsnCN */.gU)("site-header dsn-container ", typeNave),
        ref: nav,
        style: {
            opacity: 0
        },
        children: [
            children,
            typeNave && /*#__PURE__*/ jsx_runtime_.jsx(toggle, {
                textOpen: textOpen,
                textMenu: textMenu,
                textClose: textClose,
                targetNav: nav,
                reserved: reserved,
                setReserved: setReserved,
                removeOpenMenu: removeOpenMenu
            })
        ]
    });
}
Navbar.defaultProps = {
    textOpen: "Open",
    textMenu: "Menu",
    textClose: "Close"
};
const handleClickCloseMenu = (e)=>{
    e.stopPropagation();
    const parent = e.currentTarget.closest(".site-header");
    if (!parent) return;
    if (!parent.classList.contains("dsn-hamburger") || !parent.classList.contains("dsn-open")) return;
    const navToggle = parent.querySelector(".navbar-toggle");
    if (navToggle) navToggle.click();
};
const Brand = ({ children , href , transitionPage =false , ...restProps })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "main-logo",
        onClick: handleClickCloseMenu,
        children: /*#__PURE__*/ jsx_runtime_.jsx(DsnLink/* default */.Z, {
            href: href,
            transitionPage: transitionPage,
            ...restProps,
            children: children
        })
    });
};
Navbar.Brand = Brand;
const Collapse = ({ children , cover  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "main-navigation",
        children: [
            cover && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "menu-cover-title header-container dsn-container",
                children: cover
            }),
            children
        ]
    });
};
Navbar.Collapse = Collapse;
const Nav = ({ children , className , ...restProps })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        id: "dsn-primary-list",
        className: (0,helper/* dsnCN */.gU)("primary-nav h2", className),
        ...restProps,
        children: [
            children,
            " "
        ]
    });
};
// @ts-ignore
const ItemLink = ({ children , ...restProps })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "nav-item",
        onClick: handleClickCloseMenu,
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            ...restProps,
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "overflow",
                children: children
            })
        })
    });
};
Nav.Link = ItemLink;
Nav.Dropdown = dropdown;

/* harmony default export */ const nav_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/header/menu/MenuContent.jsx



function MenuContent({ className  }) {
    const socialData = [
        {
            link: "https://www.linkedin.com/in/bernardo-fonseca-torres/",
            name: "LinkedIn"
        },
        {
            link: "https://www.xing.com/profile/Bernardo_FonsecaTorres",
            name: "XING"
        },
        {
            link: "https://medium.com/@bernardofonsecatorres",
            name: "Medium"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (0,helper/* dsnCN */.gU)("container-content  d-flex flex-column justify-content-center", className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "nav__info",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "nav-content",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "sm-title-block mb-10",
                                children: "Info"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Bernardo Fonseca Torres ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    " Hannover, Germany"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "nav-content mt-30",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "sm-title-block mb-10",
                                children: "Contact"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "links over-hidden mb-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "link-hover",
                                    href: "tel:+00 (2)012 3321",
                                    "data-hover-text": "+00 (2)012 3321",
                                    children: "+00 (2)012 3321"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "links over-hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "link-hover",
                                    href: "mailto:bftorres@protonmail.com",
                                    "data-hover-text": "bftorres@protonmail.com",
                                    children: "bftorres@protonmail.com"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "nav-social nav-content mt-30",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "nav-social-inner p-relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "sm-title-block mb-10",
                            children: "Follow me"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            children: socialData.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: item.link,
                                        target: "_blank",
                                        rel: "nofollow noopener noreferrer",
                                        children: item.name
                                    })
                                }, index))
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const menu_MenuContent = (MenuContent);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/logo/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.e068f711.png","height":109,"width":126,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAQAAACfUMTVAAAAa0lEQVR42g3DvwoBARwA4J9SnsRz2LyIK2WRXP5lMkldFKV0SQwGgwxSuuW2e6qvu76+sJc3y8bBzTUMnW0kBrZOslAJF2tLudAJXyNPqam7vm74S7ykJt5meuEj7KzMZUKEn4fC2MJRS7sGgktRn1vqcGsAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./components/logo/logo-dark.png
/* harmony default export */ const logo_dark = ({"src":"/_next/static/media/logo-dark.b6226333.png","height":109,"width":126,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAlUlEQVR42g3NO0pDYRSF0XXkz7W6YOEUtA6pHIFjsBWsHIqNvdhlQLZWOgJBiJIHJCe7WPDBLnb9Lh5eMccmVl2l2geuuvo0ms9iqWzS64yd4ab4S+8HHjPcUW/0Ace4bp5KXQ7qJ8Oz7lnZoYsJ98nvgUUclDQ4NTOWkQu9xXvcxhTH+IqXwgU1Jdaxwn9UTF1dzTgD70oyGESFAEYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/logo/Logo.jsx






const MainBrand = external_styled_components_default().div.withConfig({
    componentId: "sc-b77fdf4b-0"
})`
   img{
    width : ${(props)=>props.width};
    max-width: 100%;
    height: ${(props)=>props.height};
   }
   .v-light & , & {
        .logo-dark{
           display : block ;     
        }
        .logo-light{
            display : none;    
        }
   }
    
   .v-dark & {
       .logo-dark{
           display : none ;     
        }
        .logo-light{
            display : block;    
        }
   }
   
`;
const Logo = ({ width , height , alt  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainBrand, {
        className: "main-brand",
        width: width,
        height: height,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: "logo-light",
                src: logo?.src,
                alt: `${alt} - logo light`,
                width: 320,
                height: 84
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: "logo-dark",
                src: logo_dark?.src,
                alt: `${alt} - logo dark`,
                width: 320,
                height: 84
            })
        ]
    });
};
MainBrand.defaultProps = {
    width: "80px",
    height: "auto"
};
Logo.defaultProps = {
    alt: "BFT"
};
/* harmony default export */ const logo_Logo = (/*#__PURE__*/external_react_default().memo(Logo));

;// CONCATENATED MODULE: ./components/header/menu/EremiaMenu.jsx





const menuContent = [
    {
        name: "Home",
        dropdownMenu: [
            {
                name: "Main Demo",
                href: "/"
            },
            {
                name: "One Page 2",
                href: "/demo-2"
            },
            {
                name: "One Page 3",
                href: "/demo-3"
            },
            {
                name: "Corporate",
                href: "/corporate"
            },
            {
                name: "Corporate 2",
                href: "/corporate-2"
            },
            {
                name: "Personal",
                href: "/personal"
            },
            {
                name: "Personal 2",
                href: "/personal-2"
            }
        ]
    },
    {
        name: "Portfolio",
        dropdownMenu: [
            {
                name: "Sliders",
                dropdownMenu: [
                    {
                        name: "Full Screen",
                        dropdownMenu: [
                            {
                                name: "Slider Distortion / H",
                                href: "/slider-full-distortion-h"
                            },
                            {
                                name: "Slider Distortion / V",
                                href: "/slider-full-distortion-v"
                            },
                            {
                                name: "Slider Parallax / H",
                                href: "/slider-full-parallax-h"
                            },
                            {
                                name: "Slider Parallax / V",
                                href: "/slider-full-parallax-v"
                            }
                        ]
                    },
                    {
                        name: "Padding Screen",
                        dropdownMenu: [
                            {
                                name: "Slider Distortion / H",
                                href: "/slider-padding-distortion-h"
                            },
                            {
                                name: "Slider Distortion / V",
                                href: "/slider-padding-distortion-v"
                            },
                            {
                                name: "Slider Parallax / H",
                                href: "/slider-padding-parallax-h"
                            },
                            {
                                name: "Slider Parallax / V",
                                href: "/slider-padding-parallax-v"
                            }
                        ]
                    },
                    {
                        name: "Half Screen",
                        dropdownMenu: [
                            {
                                name: "Slider Distortion / H",
                                href: "/slider-half-distortion-h"
                            },
                            {
                                name: "Slider Distortion / V",
                                href: "/slider-half-distortion-v"
                            },
                            {
                                name: "Slider Parallax / H",
                                href: "/slider-half-parallax-h"
                            },
                            {
                                name: "Slider Parallax / V",
                                href: "/slider-half-parallax-v"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Carousel",
                dropdownMenu: [
                    {
                        name: "Carousel Portfolio 1",
                        href: "/carousel-portfolio-1"
                    },
                    {
                        name: "Carousel Portfolio 2",
                        href: "/carousel-portfolio-2"
                    },
                    {
                        name: "Carousel Portfolio 3",
                        href: "/carousel-portfolio-3"
                    }
                ]
            },
            {
                name: "Card",
                dropdownMenu: [
                    {
                        name: "Card 2 Columns",
                        href: "/work-card-2-col"
                    },
                    {
                        name: "Card 3 Columns",
                        href: "/work-card-3-col"
                    },
                    {
                        name: "Card 4 Columns",
                        href: "/work-card-4-col"
                    }
                ]
            },
            {
                name: "Classic",
                dropdownMenu: [
                    {
                        name: "classic 2 Columns",
                        href: "/work-classic-2-col"
                    },
                    {
                        name: "classic 3 Columns",
                        href: "/work-classic"
                    }
                ]
            }
        ]
    },
    {
        name: "Works",
        dropdownMenu: [
            {
                name: "Works 01 - 03",
                dropdownMenu: [
                    {
                        name: "Huggl Power Pack",
                        href: "/portfolio/huggl-power-pack"
                    },
                    {
                        name: "Lengshuikeng",
                        href: "/portfolio/lengshuikeng"
                    },
                    {
                        name: "Maybe Speaker",
                        href: "/portfolio/maybe-speaker"
                    }
                ]
            },
            {
                name: "Works 03 - 06",
                dropdownMenu: [
                    {
                        name: "Principal Garden",
                        href: "/portfolio/principal-garden"
                    },
                    {
                        name: "Small Silver Car",
                        href: "/portfolio/small-silver-car"
                    },
                    {
                        name: "Yaren Collection",
                        href: "/portfolio/yaren-collection"
                    }
                ]
            }
        ]
    },
    {
        name: "Service",
        href: "/service"
    },
    {
        name: "Stories",
        dropdownMenu: [
            {
                name: "List",
                dropdownMenu: [
                    {
                        name: "List 2 Columns",
                        href: "/blog-list"
                    },
                    {
                        name: "List 3 Columns",
                        href: "/blog-list-2"
                    }
                ]
            },
            {
                name: "Card",
                dropdownMenu: [
                    {
                        name: "Card 2 Columns",
                        href: "/blog-card"
                    },
                    {
                        name: "Card 3 Columns",
                        href: "/blog-card-2"
                    },
                    {
                        name: "Card 4 Columns",
                        href: "/blog-card-3"
                    }
                ]
            },
            {
                name: "Classic",
                dropdownMenu: [
                    {
                        name: "Classic 2 Columns",
                        href: "/blog-classic"
                    },
                    {
                        name: "Classic 3 Columns",
                        href: "/blog-classic-2"
                    },
                    {
                        name: "Classic 4 Columns",
                        href: "/blog-classic-3"
                    }
                ]
            },
            {
                name: "Single Post",
                href: "/single-blog"
            }
        ]
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "Contact",
        href: "/contact"
    }
];
const EremiaMenu = ({ hamburger  })=>{
    let $key = 0;
    const getSubMenu = (items)=>{
        $key++;
        if (items.dropdownMenu) {
            return /*#__PURE__*/ jsx_runtime_.jsx(Nav.Dropdown, {
                name: items.name,
                children: items.dropdownMenu.map((item)=>getSubMenu(item))
            }, $key);
        }
        return /*#__PURE__*/ jsx_runtime_.jsx(Nav.Link, {
            href: items.href,
            children: items.name
        }, $key);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(nav_Navbar, {
        hamburger: hamburger,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(nav_Navbar.Brand, {
                href: "/",
                transitionPage: {
                    title: "bybernardo"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(logo_Logo, {
                    width: "75px",
                    height: "auto"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(nav_Navbar.Collapse, {
                cover: "Menu",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Nav, {
                        children: menuContent.map((item)=>getSubMenu(item))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(menu_MenuContent, {
                        className: "section-margin"
                    })
                ]
            })
        ]
    });
};
EremiaMenu.defaultProps = {
    hamburger: false
};
/* harmony default export */ const menu_EremiaMenu = (EremiaMenu);

;// CONCATENATED MODULE: ./components/option-theme/OptionTheme.tsx




function OptionTheme({ className ="" , lineTheme , pageColor  }) {
    const styleColor = (0,external_react_.useRef)(null);
    const styleLayout = (0,external_react_.useRef)(null);
    const [creativeLine, setCreativeLine] = lineTheme;
    const [colorPage, setColorPage] = pageColor;
    (0,external_react_.useEffect)(()=>{
        spltting/* default.Char */.ZP.Char(styleColor.current);
        spltting/* default.Char */.ZP.Char(styleLayout.current);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (0,helper/* dsnCN */.gU)("box-options c-hidden d-flex align-items-center", className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "box-icon d-flex align-items-center justify-content-center text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    className: "fa-spin",
                    enableBackground: "new 0 0 512 512",
                    viewBox: "0 0 512 512",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "m272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871c-11.049-3.53-21.784-7.986-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698c-5.337-10.313-9.792-21.046-13.323-32.097h-10.87c-25.988 0-47.133-21.144-47.133-47.133v-32.134c0-25.989 21.145-47.133 47.134-47.133h10.87c3.531-11.05 7.986-21.784 13.323-32.097l-7.704-7.703c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697c10.313-5.336 21.048-9.792 32.097-13.323v-10.87c0-25.989 21.144-47.133 47.134-47.133h32.133c25.989 0 47.133 21.144 47.133 47.133v10.871c11.049 3.53 21.784 7.986 32.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698c5.337 10.313 9.792 21.046 13.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87c-3.531 11.05-7.986 21.784-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697c-10.313 5.336-21.048 9.792-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zm-106.349-102.83c14.327 8.473 29.747 14.874 45.831 19.025 6.624 1.709 11.252 7.683 11.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148c0-6.841 4.628-12.815 11.252-14.524 16.084-4.151 31.504-10.552 45.831-19.025 5.895-3.486 13.4-2.538 18.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695c-4.842-4.842-5.79-12.348-2.305-18.242 8.473-14.326 14.873-29.746 19.024-45.831 1.71-6.624 7.684-11.251 14.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133h-22.147c-6.841 0-12.814-4.628-14.524-11.251-4.151-16.085-10.552-31.505-19.024-45.831-3.485-5.894-2.537-13.4 2.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695c-4.842 4.843-12.35 5.791-18.243 2.305-14.327-8.473-29.747-14.874-45.831-19.025-6.624-1.709-11.252-7.683-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148c0 6.841-4.628 12.815-11.252 14.524-16.084 4.151-31.504 10.552-45.831 19.025-5.896 3.485-13.401 2.537-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695c4.842 4.842 5.79 12.348 2.305 18.242-8.473 14.326-14.873 29.746-19.024 45.831-1.71 6.624-7.684 11.251-14.524 11.251h-22.148c-9.447.001-17.134 7.687-17.134 17.134v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147c6.841 0 12.814 4.628 14.524 11.251 4.151 16.085 10.552 31.505 19.024 45.831 3.485 5.894 2.537 13.4-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "m256 367.4c-61.427 0-111.4-49.974-111.4-111.4s49.973-111.4 111.4-111.4 111.4 49.974 111.4 111.4-49.973 111.4-111.4 111.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "box-inner-option p-absolute",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "day-night ",
                        onClick: ()=>setColorPage(colorPage === "v-dark" ? "v-light" : "v-dark"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "title-mode text-center",
                                ref: styleColor,
                                children: "Style Color"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "night active",
                                "data-dsn-theme": "dark",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 48 48",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "12.3",
                                            y: "23.5",
                                            width: "2.6",
                                            height: "1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "16.1",
                                            y: "15.3",
                                            transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -6.8871 16.5732)",
                                            width: "1",
                                            height: "2.6"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "23.5",
                                            y: "12.3",
                                            width: "1",
                                            height: "2.6"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "30.1",
                                            y: "16.1",
                                            transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -2.5145 27.0538)",
                                            width: "2.6",
                                            height: "1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "33.1",
                                            y: "23.5",
                                            width: "2.6",
                                            height: "1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "30.9",
                                            y: "30.1",
                                            transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -12.9952 31.4264)",
                                            width: "1",
                                            height: "2.6"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "23.5",
                                            y: "33.1",
                                            width: "1",
                                            height: "2.6"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "15.3",
                                            y: "30.9",
                                            transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -17.3677 20.9457)",
                                            width: "2.6",
                                            height: "1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M24,18.7c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3S26.9,18.7,24,18.7z M24,28.3c-2.4,0-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3s4.3,1.9,4.3,4.3S26.4,28.3,24,28.3z"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "moon",
                                "data-dsn-theme": "night",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 48 48",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M24,33.9c-5.4,0-9.9-4.4-9.9-9.9c0-4.3,2.7-8,6.8-9.4l0.8-0.3l-0.1,0.9c-0.2,0.6-0.2,1.3-0.2,1.9c0,5.2,4.3,9.5,9.5,9.5c0.6,0,1.3-0.1,1.9-0.2l0.8-0.2L33.3,27C32,31.1,28.3,33.9,24,33.9z M20.4,15.9c-3.2,1.4-5.3,4.5-5.3,8.1c0,4.9,4,8.9,8.9,8.9c3.6,0,6.7-2.1,8.1-5.3c-0.4,0-0.8,0.1-1.3,0.1c-5.8,0-10.5-4.7-10.5-10.5C20.4,16.7,20.4,16.3,20.4,15.9z"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mode-layout",
                        onClick: ()=>setCreativeLine(!creativeLine),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "title-mode text-center",
                                ref: styleLayout,
                                children: "Style Layout"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon d-flex align-items-center justify-content-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                                    x: "0px",
                                    y: "0px",
                                    viewBox: "0 0 35 35",
                                    xmlSpace: "preserve",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M0,25.366h35V9.546H0V25.366z M2.121,11.667h30.758v11.578H2.121V11.667z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                    y: "28.283",
                                                    width: "35",
                                                    height: "6.717"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                    width: "35",
                                                    height: "6.717"
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const option_theme_OptionTheme = (OptionTheme);

;// CONCATENATED MODULE: ./components/option-theme/RightScrollTop.tsx





function RightScrollTop({ options  }) {
    const scroll = (0,external_react_.useRef)(null);
    const svg = (0,external_react_.useRef)(null);
    const scrollbar = (0,external_react_redux_.useSelector)((state)=>state.scrollbar);
    (0,external_react_.useEffect)(()=>{
        const wrap = document.body.querySelector("#main-content");
        if (!wrap) return;
        const boxNumber = scroll.current.querySelector(".box-number >span");
        const trigger = ScrollTrigger_.ScrollTrigger.create({
            trigger: wrap,
            animation: external_gsap_.gsap.to(svg.current, 0.3, {
                rotation: wrap.scrollHeight / 2
            }),
            start: "+=350",
            end: "100%-=" + window.innerHeight,
            scrub: true,
            onUpdate: function($s) {
                // @ts-ignore
                boxNumber.innerText = ($s.progress.toFixed(3) * 100).toFixed(0) + "%";
            },
            onEnter: Show,
            onEnterBack: Show,
            onLeave: Hide,
            onLeaveBack: Hide
        });
        function Show() {
            external_gsap_.gsap.to(scroll.current, 1, {
                right: 10,
                autoAlpha: 1
            });
        }
        function Hide() {
            external_gsap_.gsap.to(scroll.current, 1, {
                right: -100,
                autoAlpha: 0
            });
        }
        return ()=>{
            trigger?.refresh();
            trigger?.update();
            trigger?.kill();
            Hide();
        };
    });
    (0,external_react_.useEffect)(()=>{
        const scrollCurrent = scroll.current;
        const handleClick = ()=>{
            external_gsap_.gsap.to(scrollbar.current || window, {
                scrollTo: {
                    y: 0
                },
                ...options
            });
        };
        scrollCurrent?.addEventListener("click", handleClick);
        return ()=>{
            scrollCurrent?.removeEventListener("click", handleClick);
        };
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "scroll-to-top",
        ref: scroll,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                ref: svg,
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 174 173",
                xmlSpace: "preserve",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Scroll Down — Scroll"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("desc", {
                        children: "Created with Sketch."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M49.7,20.7c0.5,0.7,1.3,0.9,2.2,0.4c1-0.5,1.1-1.1,0.7-1.7c-0.4-0.8-1.1-0.8-2.5-0.5c-2.2,0.5-3.3,0.2-4-1     c-0.9-1.6-0.1-3.1,1.5-4c2-1.1,3.4-0.5,4.3,0.8l-1.7,0.9c-0.4-0.6-1-0.9-1.9-0.4c-0.8,0.4-0.9,1-0.6,1.6c0.3,0.6,0.9,0.6,2.2,0.3     c2.5-0.6,3.5,0,4.2,1.2c0.8,1.4,0.5,3-1.7,4.3c-1.8,1-3.5,0.8-4.6-0.9L49.7,20.7z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M67.9,12.8c0.3,1.6-0.3,3.4-2.6,4.2c-2.9,1-4.6-0.8-5.5-3.4c-0.9-2.6-0.2-5.1,2.4-6c2.5-0.8,3.9,0.4,4.5,1.8     L64.9,10c-0.4-0.7-1-1.3-2.2-0.9c-1.5,0.5-1.5,2.2-1,3.8c0.6,1.7,1.5,3.1,3.1,2.5c1.2-0.4,1.3-1.4,1.2-2.1L67.9,12.8z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M76.8,10l0.5,3.9l-1.9,0.2l-1.2-9.5l3.9-0.5c1.8-0.2,3.2,0.5,3.4,2.2c0.2,1.3-0.4,2-1.2,2.4     c1,0.2,1.4,0.9,1.6,2.1l0,0.2c0.1,0.8,0.3,1.6,0.4,2.2l-1.9,0.2c-0.2-0.4-0.3-1-0.5-2.2l0-0.3c-0.1-1.1-0.6-1.4-1.8-1.3L76.8,10z     M76.6,8.5l1.4-0.2c0.9-0.1,1.6-0.5,1.5-1.5c-0.1-0.9-0.8-1.1-1.6-1L76.3,6L76.6,8.5z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M97.7,8.7c-0.2,2.8-1.6,4.9-4.7,4.7c-3-0.2-4.1-2.5-3.9-5.3c0.1-2.4,1.6-4.8,4.7-4.6     C96.6,3.8,97.8,6.2,97.7,8.7z M91.1,8.3c-0.1,1.9,0.5,3.5,2.1,3.6c1.7,0.1,2.4-1.3,2.5-3.3c0.1-1.8-0.4-3.4-2.1-3.5     C92,5.1,91.2,6.5,91.1,8.3z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M106.4,5.5l1.9,0.5l-2,7.7l4.2,1.1l-0.6,1.5l-5.8-1.5L106.4,5.5z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M120,9.7l1.8,0.8l-3.3,7.3l3.9,1.7l-0.8,1.4l-5.5-2.5L120,9.7z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M140.9,24.2l-2-1.7l1.1-1.2l5.4,4.7l-1.1,1.2l-2-1.7l-5.2,6.1l-1.5-1.3L140.9,24.2z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M152.6,41.2c-2.2,1.7-4.7,2.1-6.6-0.3c-1.9-2.3-0.9-4.7,1.3-6.4c1.8-1.5,4.6-2,6.5,0.4     C155.5,37.1,154.6,39.6,152.6,41.2z M148.5,36.1c-1.5,1.2-2.2,2.7-1.3,3.9c1,1.3,2.5,0.9,4.1-0.4c1.4-1.1,2.2-2.5,1.1-3.9     C151.5,34.5,149.9,34.9,148.5,36.1z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M160.9,45.5l1.6,3.1c0.8,1.6,0.8,3.4-1,4.3c-1.8,0.9-3.4,0.1-4.3-1.7l-0.7-1.2l-3.3,1.7l-0.9-1.7L160.9,45.5z     M158,49.2l0.6,1.1c0.5,0.9,1.1,1.3,2.1,0.8c0.8-0.4,0.9-1.2,0.4-2.1l-0.6-1.2L158,49.2z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M165.5,72.8l-1.6,0.3l-0.7-3.6l1.6-0.3L165.5,72.8z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M165.1,90.7c-0.9,0.1-1.5,0.6-1.6,1.6c-0.1,1.1,0.4,1.5,1.1,1.5c0.9,0.1,1.3-0.4,1.7-1.8     c0.8-2.2,1.6-2.9,3-2.8c1.8,0.1,2.6,1.6,2.5,3.4c-0.2,2.3-1.4,3.2-3,3.2l0.1-1.9c0.7-0.1,1.3-0.4,1.3-1.4c0.1-0.9-0.3-1.3-1-1.4     c-0.7,0-0.9,0.4-1.4,1.7c-0.9,2.4-1.9,3-3.3,2.9c-1.6-0.1-2.8-1.2-2.7-3.7c0.1-2.1,1.3-3.4,3.2-3.4L165.1,90.7z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M162,110.3c-1.5-0.7-2.7-2.1-2.1-4.5c0.8-2.9,3.2-3.4,5.8-2.7c2.6,0.7,4.4,2.6,3.7,5.3c-0.6,2.5-2.5,3.1-4,2.8     l0.5-1.8c0.8,0,1.6-0.1,2-1.4c0.4-1.5-1-2.5-2.7-2.9c-1.8-0.5-3.4-0.4-3.8,1.2c-0.3,1.2,0.4,1.8,1.1,2.2L162,110.3z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M159.5,119.3l-3.6-1.7l0.8-1.7l8.7,4.1l-1.7,3.5c-0.8,1.6-2.1,2.4-3.7,1.7c-1.2-0.6-1.5-1.5-1.4-2.3     c-0.7,0.7-1.6,0.7-2.6,0.2l-0.2-0.1c-0.8-0.4-1.5-0.7-2-0.8l0.8-1.7c0.4,0,1,0.3,2.1,0.8l0.2,0.1c1,0.5,1.5,0.3,2-0.9L159.5,119.3z     M160.9,119.9l-0.6,1.3c-0.4,0.8-0.5,1.6,0.5,2.1c0.8,0.4,1.4-0.1,1.7-0.8l0.7-1.6L160.9,119.9z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M149.2,137.5c-2.2-1.6-3.2-4-1.4-6.5c1.8-2.4,4.3-2,6.5-0.4c1.9,1.4,3.1,3.9,1.3,6.4     C153.9,139.3,151.3,139,149.2,137.5z M153.1,132.2c-1.5-1.1-3.2-1.4-4.1-0.2c-1,1.3-0.2,2.7,1.4,3.9c1.4,1.1,3,1.5,4,0.1     C155.4,134.7,154.6,133.3,153.1,132.2z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M147.2,146.6l-1.4,1.3l-5.4-5.9l-3.1,2.9l-0.9-1.3l4.4-4.1L147.2,146.6z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M136.4,155.7l-1.6,1.1l-4.4-6.7l-3.6,2.3L126,151l5-3.3L136.4,155.7z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M112.8,165.5l2.5-0.7l0.5,1.5l-6.9,2l-0.5-1.5l2.5-0.7l-2.3-7.6l1.9-0.6L112.8,165.5z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M92.2,166c-0.3-2.7,0.8-5.1,3.8-5.4c2.9-0.3,4.4,1.8,4.7,4.6c0.2,2.4-0.8,5-3.8,5.3     C94,170.8,92.5,168.6,92.2,166z M98.7,165.4c-0.2-1.9-1.1-3.3-2.6-3.2c-1.7,0.2-2.1,1.6-1.9,3.6c0.2,1.8,0.9,3.2,2.6,3.1     C98.4,168.7,98.9,167.2,98.7,165.4z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M84.1,170.7l-3.5-0.3c-1.8-0.2-3.3-1.2-3.1-3.2c0.2-2,1.7-2.9,3.8-2.7l1.4,0.1L83,161l2,0.2L84.1,170.7z     M82.5,166.2l-1.3-0.1c-1-0.1-1.7,0.2-1.8,1.3c-0.1,1,0.5,1.4,1.5,1.5l1.3,0.1L82.5,166.2z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M58.6,159.8l0.6-1.5l3.4,1.3l-0.6,1.5L58.6,159.8z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M43.8,149.8c0.4-0.8,0.3-1.6-0.5-2.2c-0.9-0.7-1.5-0.5-1.9,0c-0.5,0.7-0.3,1.3,0.6,2.4c1.4,1.8,1.5,2.9,0.7,4     c-1.1,1.4-2.8,1.4-4.2,0.3c-1.8-1.4-1.9-2.9-1.1-4.2l1.5,1.1c-0.3,0.6-0.4,1.3,0.4,1.9c0.7,0.5,1.3,0.4,1.7-0.1     c0.4-0.6,0.2-1-0.7-2.2c-1.5-2-1.5-3.2-0.6-4.3c0.9-1.3,2.6-1.7,4.6-0.2c1.7,1.3,2.1,2.9,1.1,4.5L43.8,149.8z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M29,136.4c1.4-0.9,3.2-1.2,4.9,0.7c2,2.2,1.2,4.5-0.8,6.4c-2,1.8-4.6,2.3-6.5,0.3c-1.8-1.9-1.2-3.8-0.2-4.8     l1.3,1.4c-0.4,0.7-0.8,1.4,0.1,2.4c1.1,1.2,2.6,0.5,3.9-0.7c1.3-1.2,2.2-2.7,1-3.9c-0.9-0.9-1.8-0.6-2.4-0.3L29,136.4z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M22.9,129.5l3.4-2.1l1,1.6l-8.1,5.1l-2.1-3.3c-1-1.5-0.9-3.1,0.6-4c1.1-0.7,2-0.4,2.7,0.1     c-0.2-1,0.3-1.7,1.3-2.3l0.2-0.1c0.7-0.4,1.4-0.9,1.8-1.3l1,1.6c-0.3,0.3-0.8,0.7-1.8,1.3l-0.2,0.1c-0.9,0.6-1,1.1-0.4,2.2     L22.9,129.5z M21.6,130.3l-0.8-1.2c-0.5-0.8-1.1-1.3-2-0.7c-0.8,0.5-0.7,1.2-0.3,1.9l0.9,1.5L21.6,130.3z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M13.1,111c2.6-1,5.1-0.5,6.2,2.3c1,2.8-0.6,4.8-3.2,5.7c-2.2,0.8-5,0.5-6.1-2.4C9,114,10.7,111.9,13.1,111z     M15.4,117.2c1.8-0.7,2.9-1.9,2.4-3.3c-0.6-1.6-2.1-1.6-4-0.9c-1.7,0.6-2.9,1.7-2.3,3.3C12.1,117.7,13.7,117.8,15.4,117.2z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M6.5,104.4l-0.3-1.9l7.9-1.4l-0.7-4.2l1.6-0.1l1.1,5.9L6.5,104.4z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M6.8,78.9l-0.3,2.6l-1.6-0.2l0.8-7.1l1.6,0.2L7,76.9l7.9,0.9l-0.2,2L6.8,78.9z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M14.3,59.7c2.6,0.8,4.4,2.7,3.5,5.6c-0.9,2.8-3.4,3.4-6,2.6c-2.3-0.7-4.3-2.7-3.4-5.6     C9.2,59.6,11.8,59,14.3,59.7z M12.4,66c1.8,0.6,3.5,0.3,4-1.2c0.5-1.6-0.7-2.6-2.6-3.2c-1.7-0.5-3.4-0.4-3.9,1.2     C9.4,64.4,10.6,65.5,12.4,66z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M13.2,50.4l1.7-3.1c0.9-1.6,2.4-2.5,4.1-1.6c1.8,0.9,2,2.7,1,4.6l-0.7,1.2l3.3,1.8L21.6,55L13.2,50.4z     M18,50.8l0.6-1.1c0.5-0.9,0.5-1.7-0.5-2.2c-0.8-0.5-1.5-0.1-2,0.8l-0.6,1.2L18,50.8z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "st0",
                                d: "M33.3,31.3l1.1,1.1l-2.5,2.6l-1.1-1.1L33.3,31.3z"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "box-number",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "10%"
                })
            })
        ]
    });
}
/* harmony default export */ const option_theme_RightScrollTop = (RightScrollTop);

;// CONCATENATED MODULE: ./layout/LoadingPage.tsx





const Sibling = ({ isSibling  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: (0,helper/* dsnCN */.gU)("dsnload__row", isSibling && "dsnload__row--sibling"),
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "dsnload__img",
            children: /*#__PURE__*/ jsx_runtime_.jsx(logo_Logo, {})
        })
    });
};
function LoadingPage({ className , glitchLogo =true  }) {
    const preloader = (0,external_react_.useRef)(null);
    const $ = (0,external_react_.useMemo)(()=>external_gsap_.gsap.utils.selector(preloader), [
        preloader
    ]);
    const [progressValue, setProgressValue] = (0,external_react_.useState)(0);
    const [remove, setRemove] = (0,external_react_.useState)(false);
    const present = {
        value: 0
    };
    (0,external_react_.useEffect)(()=>{
        const tl = external_gsap_.gsap.timeline();
        document.body.style.overflow = "hidden";
        const handleLoad = ()=>{
            clearInterval(timer);
            tl.to(present, 1, {
                value: 100,
                onUpdate () {
                    setProgressValue(present.value);
                }
            }).to($("*:not(.bg-load , span , p,svg ,path) , .v-middle"), {
                autoAlpha: 0
            }).to($(".bg-load"), {
                yPercent: -100,
                ease: "Expo.easeInOut",
                duration: 1.5
            }).to($(".bg-load .separator__path"), {
                attr: {
                    d: "M 0 0 C 40 0 55 0 100 0 L 0 0 Z"
                },
                ease: "Power4.easeInOut",
                duration: 1.5
            }, "-=1.5").fromTo("#dsn-scrollbar", 1, {
                y: 400
            }, {
                y: 0,
                clearProps: "y",
                ease: "Expo.easeInOut"
            }, "-=1.2").call(function() {
                setRemove(true);
                document.body.style.overflow = "";
            });
        };
        const timer = (0,helper/* pageLoad */.$X)(0, 100, 300, function(val) {
            setProgressValue(val);
            present.value = val;
            if (val >= 100) handleLoad();
        });
        return ()=>{
            document.body.style.overflow = "";
            clearInterval(timer);
            tl.kill();
        };
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    ;
    if (remove) return;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "dsn_preloader",
        className: (0,helper/* dsnCN */.gU)("preloader", className),
        ref: preloader,
        children: [
            glitchLogo && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "dsnload p-absolute",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Sibling, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sibling, {
                        isSibling: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sibling, {
                        isSibling: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sibling, {
                        isSibling: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                width: "100%",
                height: "100%",
                viewBox: "0 0 100 100",
                className: "v-middle",
                preserveAspectRatio: "xMinYMin meet",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "linearColors",
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0%",
                                stopColor: "var(--theme-color)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "50%",
                                stopColor: "var(--border-color)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "100%",
                                stopColor: "var(--assistant-color)"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "dsn-progress-path",
                        style: {
                            strokeDashoffset: 300 - progressValue * 3
                        },
                        d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "loading-circle v-middle",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "loading-count v-middle",
                    children: progressValue.toFixed(0)
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "loading-text text-uppercase mt-30 dsn-container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "Loading ..."
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-load background-section d-flex align-items-end",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "dsn-separator-bottom dsn-icon-assistant-color",
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 100 10",
                    preserveAspectRatio: "none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "path-anim separator__path",
                        vectorEffect: "non-scaling-stroke",
                        d: "M 0 0 C 40 16 75 10 100 0 L 0 0 Z"
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const layout_LoadingPage = (LoadingPage);

// EXTERNAL MODULE: ./hooks/transition/transitionDefalut.ts
var transitionDefalut = __webpack_require__(4452);
;// CONCATENATED MODULE: ./pages/_app.js























external_gsap_.gsap.registerPlugin(ScrollTrigger_.ScrollTrigger, ScrollToPlugin_namespaceObject.ScrollToPlugin);
animation_dsnEffect.registerEffect(moveSection, fade, textAnimation);
external_gsap_.gsap.config({
    nullTargetWarn: false
});
external_gsap_.gsap.defaults({
    duration: 1,
    overwrite: "auto"
});
function MyApp({ Component , pageProps  }) {
    const [creativeLine, setCreativeLine] = (0,external_react_.useState)(true);
    //--> v-dark , v-light
    const [colorPage, setColorPage] = (0,external_react_.useState)("v-dark");
    (0,external_react_.useEffect)(()=>{
        animation_dsnEffect.registerEffect(transitionDefalut/* tdEnd */.b);
    });
    (0,external_react_.useEffect)(()=>{
        const scrollDiv = document.createElement("div");
        scrollDiv.style.cssText = "width:100px;height:100px;overflow: scroll;position: absolute;top: -9999px;";
        document.body.appendChild(scrollDiv);
        document.body.style.setProperty("--dsn-width-scroll", scrollDiv.offsetWidth - scrollDiv.clientWidth + "px");
        document.body.removeChild(scrollDiv);
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (creativeLine) document.body.classList.add("dsn-line-style");
        else document.body.classList.remove("dsn-line-style");
    }, [
        creativeLine
    ]);
    (0,external_react_.useEffect)(()=>{
        if ((0,helper/* checkMobile */.z4)(true)) return;
        const options = Object.assign({}, {
            speed: 0.5,
            move: 20
        });
        const parallaxHover = document.body.querySelectorAll('[data-dsn="parallax"]');
        parallaxHover.forEach((item)=>{
            /**
             * Append Icon
             */ const icon = document.createElement("div");
            icon.classList.add("icon-circle");
            icon.style.minWidth = "1px";
            item.appendChild(icon);
            /**
             *
             */ item.removeAttribute("data-dsn");
            item.classList.add("dsn-parallax-hover");
            const scale = item.classList.contains("image-zoom");
            const moveIcon = item.classList.contains("move-circle");
            const mouseEnter = function(e) {
                if (scale) external_gsap_.gsap.to([
                    item,
                    icon
                ], .3, {
                    scale: 1.03
                });
            };
            const mouseLeave = function(e) {
                external_gsap_.gsap.to([
                    item,
                    icon
                ], 1, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    ease: external_gsap_.Back.easeOut.config(4)
                });
            };
            const mouseMove = function(e) {
                (0,helper/* parallaxIt */.sl)(e, item, options);
                if (moveIcon) (0,helper/* parallaxIt */.sl)(e, icon, {
                    ...options,
                    move: options.move * 2
                });
            };
            /**
             * Event
             */ item.addEventListener("mouseenter", mouseEnter);
            item.addEventListener("mouseleave", mouseLeave);
            item.addEventListener("mousemove", mouseMove);
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Bernardo Fonseca Torres | Digital Craftsman"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Bernardo Fonseca Torres is a Software Developer and Multidisciplinary Designer based in Hannover, Germany, currently working as a Frontend Developer and UX/UI Designer at Lohoff."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "Bernardo, Bernardo Fonseca Torres, Fonseca, Torres, Hannover, React, UX/UI Design, HTML, CSS, JavaScript, JS, Frontend, UX, UI, Design, Product Design, Web Development, Germany, Brazil, Bernardo Hannover"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "Bernardo Fonseca Torres"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/img/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        href: "/img/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
                store: store,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "__dsn_content",
                    className: colorPage,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(layout_LoadingPage, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(menu_EremiaMenu, {
                            hamburger: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(option_theme_OptionTheme, {
                            lineTheme: [
                                creativeLine,
                                setCreativeLine
                            ],
                            pageColor: [
                                colorPage,
                                setColorPage
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(option_theme_RightScrollTop, {
                            options: {
                                duration: 1.5,
                                ease: "power4.inOut"
                            }
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6721:
/***/ (() => {



/***/ }),

/***/ 1886:
/***/ (() => {



/***/ }),

/***/ 2990:
/***/ (() => {



/***/ }),

/***/ 3023:
/***/ (() => {



/***/ }),

/***/ 2996:
/***/ (() => {



/***/ }),

/***/ 707:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 1733:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4287:
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ 4965:
/***/ ((module) => {

"use strict";
module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9210,9403,1664,3121,5675,4597,1688,7011], () => (__webpack_exec__(7674)));
module.exports = __webpack_exports__;

})();