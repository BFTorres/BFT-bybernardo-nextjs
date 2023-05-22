"use strict";
exports.id = 4396;
exports.ids = [4396];
exports.modules = {

/***/ 3007:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emailjs_browser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9735);
/* harmony import */ var _heading_TitleSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3042);





function ContactForm({ className  }) {
    const form = useRef();
    const [loading, setLoading] = useState();
    const [result, setResult] = useState();
    const sendEmail = (e)=>{
        e.preventDefault();
        setResult(false);
        setLoading(true);
        emailjs.sendForm("service_mxt8ue9", "template_1f1243o", form.current, "bvnMqTU1Ir-7kgLNL").then((result)=>{
            setLoading(false);
            setResult(true);
            form.current.reset();
        }, (error)=>{
            setLoading(false);
        });
    };
    setTimeout(()=>setResult(false), 5000);
    return /*#__PURE__*/ _jsxs("div", {
        className: dsnCN("form-box", className),
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
            /*#__PURE__*/ _jsx(TitleSection, {
                defaultSpace: false,
                children: "LET'S WORK TOGETHER"
            }),
            /*#__PURE__*/ _jsx("form", {
                className: "form mt-20",
                ref: form,
                onSubmit: sendEmail,
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "input__wrap controls",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "form-group",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "entry-box",
                                children: [
                                    /*#__PURE__*/ _jsx("label", {
                                        children: "Your name *"
                                    }),
                                    /*#__PURE__*/ _jsx("input", {
                                        id: "form_name",
                                        type: "text",
                                        name: "name",
                                        placeholder: "Type your name",
                                        required: "required",
                                        "data-error": "name is required."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "form-group",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "entry-box",
                                children: [
                                    /*#__PURE__*/ _jsx("label", {
                                        children: "Your E-Mail *"
                                    }),
                                    /*#__PURE__*/ _jsx("input", {
                                        id: "form_email",
                                        type: "email",
                                        name: "email",
                                        placeholder: "Type your Email Address",
                                        required: "required",
                                        "data-error": "Valid email is required."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "form-group",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "entry-box",
                                children: [
                                    /*#__PURE__*/ _jsx("label", {
                                        children: "What's up?"
                                    }),
                                    /*#__PURE__*/ _jsx("textarea", {
                                        id: "form_message",
                                        className: "form-control",
                                        name: "message",
                                        rows: 4,
                                        placeholder: "Tell us about you and the world",
                                        required: "required",
                                        "data-error": "Please,leave us a message."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "text-right",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "image-zoom w-auto d-inline-block",
                                    "data-dsn": "parallax",
                                    children: /*#__PURE__*/ _jsxs("button", {
                                        type: "submit",
                                        className: "dsn-button",
                                        style: {
                                            cursor: "pointer"
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "dsn-border border-color-default"
                                            }),
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "text-button",
                                                children: "Send Message"
                                            })
                                        ]
                                    })
                                }),
                                loading && /*#__PURE__*/ _jsx("div", {
                                    className: "loading-message mt-20",
                                    children: "Message Send ..."
                                }),
                                result && /*#__PURE__*/ _jsx("p", {
                                    className: "success-message mt-20",
                                    children: "Your Message has been successfully sent. I will contact you soon."
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ContactForm)));


/***/ }),

/***/ 242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9735);



function InfoBox({ className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_2__/* .dsnCN */ .gU)("box-info-contact", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "mb-15",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            className: "title-block mb-15",
                            children: "Contact"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "over-hidden mt-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "link-hover",
                                "data-hover-text": "bftorres@protonmail.com",
                                href: "mailto:bftorres@protonmail.com",
                                children: "bftorres@protonmail.com"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            className: "title-block mb-15",
                            children: "Follow me"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "social-item over-hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "link-hover",
                                "data-hover-text": "LinkedIn",
                                href: "https://www.linkedin.com/in/bernardo-fonseca-torres/",
                                target: "_blank",
                                rel: "nofollow",
                                children: "LinkedIn"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "social-item over-hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "link-hover",
                                "data-hover-text": "XING",
                                href: "https://www.xing.com/profile/Bernardo_FonsecaTorres",
                                target: "_blank",
                                rel: "nofollow",
                                children: "XING"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "social-item over-hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "link-hover",
                                "data-hover-text": "MEDIUM",
                                href: "https://medium.com/@bernardofonsecatorres",
                                target: "_blank",
                                rel: "nofollow",
                                children: "MEDIUM"
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoBox);


/***/ })

};
;