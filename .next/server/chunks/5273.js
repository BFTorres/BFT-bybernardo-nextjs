"use strict";
exports.id = 5273;
exports.ids = [5273];
exports.modules = {

/***/ 2349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meta_MetaPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3233);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9735);
/* harmony import */ var _data_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2536);
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7091);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_DsnLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1688);







function ContentSlider({ data , activeClass , className , hasSeparator , hasCategory =true , hasDescription =true , separateCat =", " , ...restProps }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_2__/* .dsnCN */ .gU)("dsn-slider-content hero-content dsn-container d-flex", className),
        ...restProps,
        children: data.map((item, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `slide-content ${activeClass === key ? "dsn-active" : ""}`,
                "data-dsn-id": key,
                ref: ref,
                children: [
                    item.subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "description max-w570 mb-15",
                        children: item.subtitle
                    }),
                    item.category && hasCategory && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_meta_MetaPost__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        category: item.category,
                        separate: separateCat
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "title",
                        children: item.slug ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hooks_DsnLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: (0,_data_portfolio__WEBPACK_IMPORTED_MODULE_3__/* .getPortfolioLink */ .p8)(item),
                            dangerouslySetInnerHTML: {
                                __html: item.title
                            },
                            transitionPage: {
                                title: item.title
                            }
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            dangerouslySetInnerHTML: {
                                __html: item.title
                            }
                        })
                    }),
                    hasSeparator && hasDescription && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "mt-20"
                    }),
                    item.description && hasDescription && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-w570 mt-20 description",
                        children: item.description
                    }),
                    item.href && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: "link-custom mt-20",
                        ...item.href,
                        children: item.buttonText
                    })
                ]
            }, key))
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(ContentSlider));


/***/ }),

/***/ 577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9735);



const Circle = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: "circle",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
            className: "circle-wrap",
            fill: "none",
            strokeWidth: "1",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "12",
                cy: "12",
                r: "10.5"
            })
        })
    });
function ControlNav({ className , timeline , activeClass , ...restProps }) {
    const [swiper, setSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSwiper(restProps.parent?.current.querySelector(".bg-container > .swiper")?.swiper);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_2__/* .dsnCN */ .gU)("control-nav control-nav dsn-container p-absolute w-100 d-flex", className),
            ...restProps,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "prev-container",
                    onClick: ()=>!timeline.current?.isActive() && swiper?.slidePrev(),
                    style: {
                        marginRight: 0
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container-inner",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "triangle"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Circle, {})
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "slider-counter d-flex align-items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "slider-current-index",
                            children: activeClass > 8 ? activeClass + 1 : `0${activeClass + 1}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "slider-counter-delimiter"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "slider-total-index",
                            children: swiper?.slides.length > 9 ? swiper?.slides.length : `0${swiper?.slides.length}`
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "next-container",
                    onClick: ()=>!timeline.current?.isActive() && swiper?.slideNext(),
                    style: {
                        marginLeft: 0
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container-inner",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "triangle"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Circle, {})
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(ControlNav));


/***/ }),

/***/ 3241:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2949);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_2__]);
three__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function effectSwiper($obj) {
    let progressStart = 0;
    let start = false;
    $obj.swiper.on("progress", (s)=>{
        if (!start) return;
        if (progressStart < s.progress) this.mat.uniforms.effectFactor.value = $obj.intensity * -1;
        else if (progressStart > s.progress) this.mat.uniforms.effectFactor.value = $obj.intensity;
        const progress = s.slides[s.activeIndex].progress, charOpacity = 1 - Math.min(Math.abs(progress), 1);
        // this.mat.uniforms.dispFactor.value = charOpacity ;
        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(this.mat.uniforms.dispFactor, {
            value: charOpacity,
            ease: "none"
        });
        this.animate();
    });
    $obj.swiper.on("touchStart", (swiper)=>{
        start = true;
        progressStart = swiper.progress;
    });
    $obj.swiper.on("touchEnd", ()=>{
        start = false;
        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(this.mat.uniforms.dispFactor, $obj.speedIn, {
            value: 1,
            ease: $obj.easing,
            onUpdate: ()=>{
                this.animate();
                if ($obj.onUpdate !== undefined) {
                    $obj.onUpdate.bind(this)();
                }
            }
        });
    });
}
const vertex = `
			varying vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`;
const getFragment = (direction)=>{
    let dir = "";
    if (direction !== "horizontal") {
        dir = `vec2 distortedPosition = vec2(uv.x, uv.y - dispFactor * (disp.r*effectFactor));
					vec2 distortedPosition2 = vec2(uv.x, uv.y + (1.0 - dispFactor) * (disp.r*effectFactor));`;
    } else {
        dir = ` vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
            vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);

            `;
    }
    return `
        varying vec2 vUv;


        uniform sampler2D texture1;
        uniform sampler2D texture2;
        uniform sampler2D disp;

        uniform float dispFactor;
        uniform float effectFactor;
		uniform vec4 resolution;



        void main() {

            vec2 uv = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
            

            vec4 disp = texture2D(disp, uv);

            ${dir}

            vec4 _texture = texture2D(texture1, distortedPosition);
            vec4 _texture2 = texture2D(texture2, distortedPosition2);

            vec4 finalTexture = mix(_texture, _texture2, dispFactor);

            gl_FragColor = finalTexture;

        }
    `;
};
function DsnWebgelDirction(props) {
    const { parent , displacement ="/img/displacement/8.jpg" , data =[] , intensity =1 , direction , onComplete , speedIn =1.6 , easing =gsap__WEBPACK_IMPORTED_MODULE_3__.Expo.easeOut  } = props;
    const canvas = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const $this = {
        scene: undefined,
        width: undefined,
        height: undefined,
        ratio: undefined,
        video: false,
        renderer: undefined,
        camera: undefined,
        manager: undefined,
        loader: undefined,
        disp: undefined,
        allImgs: [],
        mat: undefined,
        geometry: undefined,
        plane: undefined,
        animate: undefined,
        destroyed: false,
        current: 0,
        imageAspect: undefined,
        changeTo: undefined
    };
    const getRenderer = async ()=>{
        $this.ratio = window.devicePixelRatio;
        return new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({
            canvas: canvas.current,
            powerPreference: "high-performance",
            antialias: false,
            alpha: true
        });
    };
    const video = (src, poster, $index)=>{
        let dImg = new three__WEBPACK_IMPORTED_MODULE_2__.VideoTexture(src);
        dImg.magFilter = three__WEBPACK_IMPORTED_MODULE_2__.LinearFilter;
        dImg.minFilter = three__WEBPACK_IMPORTED_MODULE_2__.LinearFilter;
        dImg.anisotropy = $this.renderer.capabilities.getMaxAnisotropy();
        $this.allImgs[$index] = dImg;
    };
    const image = (src, $index)=>{
        const dImg = $this.loader.load(src);
        dImg.magFilter = three__WEBPACK_IMPORTED_MODULE_2__.LinearFilter;
        dImg.minFilter = three__WEBPACK_IMPORTED_MODULE_2__.LinearFilter;
        dImg.anisotropy = $this.renderer.capabilities.getMaxAnisotropy();
        $this.allImgs[$index] = dImg;
    };
    const resize = ()=>{
        let image = $this.allImgs[$this.current].image;
        $this.width = parent?.current?.offsetWidth;
        $this.height = parent?.current?.offsetHeight;
        $this.renderer.setSize($this.width, $this.height);
        $this.camera.aspect = $this.width / $this.height;
        $this.imageAspect = image.height / image.width;
        let a1;
        let a2;
        if ($this.height / $this.width > $this.imageAspect) {
            a1 = $this.width / $this.height * $this.imageAspect;
            a2 = 1;
        } else {
            a1 = 1;
            a2 = $this.height / $this.width / $this.imageAspect;
        }
        const dist = $this.camera.position.z;
        const height = 1;
        $this.camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist));
        $this.plane.scale.x = $this.camera.aspect;
        $this.plane.scale.y = 1;
        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to($this.mat.uniforms.resolution.value, 0.1, {
            x: $this.width,
            y: $this.height,
            z: a1,
            w: a2,
            yoyo: true,
            onUpdate: ()=>{
                $this.camera.updateProjectionMatrix();
                $this.animate();
            },
            ease: "none"
        });
    };
    const destroy = ()=>{
        $this.destroyed = true;
        window.removeEventListener("resize", resize);
        $this.renderer.forceContextLoss();
        $this.renderer.dispose();
        $this.renderer = null;
        $this.manager = null;
        $this.video = null;
        $this.geometry.dispose();
        $this.geometry = null;
        $this.mat.dispose();
        $this.mat = null;
        $this.plane = null;
        $this.loader = null;
        $this.ratio = null;
        $this.scene.dispose();
        $this.scene = null;
        $this.width = $this.height = $this.imageAspect = null;
    };
    const init = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    $this.changeTo = function(current, oldIndex) {
        if (current > oldIndex) $this.mat.uniforms.effectFactor.value = intensity;
        else $this.mat.uniforms.effectFactor.value = intensity * -1;
        $this.mat.uniforms.texture1.value = $this.allImgs[oldIndex];
        $this.mat.uniforms.texture2.value = $this.allImgs[current];
        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.fromTo($this.mat.uniforms.dispFactor, speedIn, {
            value: 0
        }, {
            value: 1,
            ease: easing,
            onStart: resize,
            onUpdate: $this.animate
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (init.current) return;
        init.current = true;
        parent.current.classList.add("three-js-loader", "bg-three-js");
        $this.scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();
        $this.width = window.innerWidth;
        $this.height = window.innerHeight;
        getRenderer().then((renderer)=>{
            $this.renderer = renderer;
            $this.renderer.setPixelRatio(window.devicePixelRatio);
            $this.renderer.setClearColor(0xffffff, 0.0);
            $this.renderer.setSize($this.width, $this.height);
            $this.width = parent.current.offsetWidth;
            $this.height = parent.current.offsetHeight;
            return $this.renderer;
        }).then(()=>{
            $this.camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.001, 1000);
            $this.camera.position.set(0, 0, 2);
            return $this.camera;
        }).then(()=>{
            $this.manager = new three__WEBPACK_IMPORTED_MODULE_2__.LoadingManager();
            return $this.manager;
        }).then((manager)=>{
            $this.loader = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader(manager);
            $this.disp = $this.loader.load(displacement);
            $this.disp.wrapS = $this.disp.wrapT = three__WEBPACK_IMPORTED_MODULE_2__.RepeatWrapping;
            data.forEach((item, x)=>{
                if (item.poster) video(item.src, item.poster, x);
                else image(item.src, x);
            });
            return $this.allImgs;
        }).then(()=>{
            $this.mat = new three__WEBPACK_IMPORTED_MODULE_2__.ShaderMaterial({
                extensions: {
                    derivatives: "#extension GL_OES_standard_derivatives : enable"
                },
                side: three__WEBPACK_IMPORTED_MODULE_2__.DoubleSide,
                uniforms: {
                    effectFactor: {
                        type: "f",
                        value: intensity
                    },
                    dispFactor: {
                        type: "f",
                        value: 0
                    },
                    texture1: {
                        type: "t",
                        value: $this.allImgs[0]
                    },
                    texture2: {
                        type: "t",
                        value: $this.allImgs[0]
                    },
                    disp: {
                        type: "t",
                        value: $this.disp
                    },
                    resolution: {
                        type: "v4",
                        value: new three__WEBPACK_IMPORTED_MODULE_2__.Vector4()
                    }
                },
                vertexShader: vertex,
                fragmentShader: getFragment(direction),
                transparent: true,
                opacity: 1.0
            });
            return $this.mat;
        }).then((mat)=>{
            $this.geometry = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneGeometry(1, 1, 2, 2);
            $this.plane = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh($this.geometry, mat);
            return $this.plane;
        }).then((plane)=>{
            $this.scene.add(plane);
        }).then(()=>{
            const bgContainer = parent.current.querySelector(".bg-container");
            const swiper = bgContainer?.querySelector(".swiper").swiper;
            if (swiper) {
                effectSwiper.bind($this)({
                    swiper,
                    intensity,
                    speedIn,
                    easing
                });
                bgContainer.dataset.overlay = data[swiper.activeIndex]["overlay"] || "0";
                swiper.dsnOnChange = (activeIndex, oldIndex)=>{
                    $this.changeTo(activeIndex, oldIndex);
                    bgContainer.dataset.overlay = data[activeIndex]["overlay"] || "0";
                };
            }
        }).then(()=>{
            $this.animate = function() {
                $this.renderer.render($this.scene, $this.camera);
            };
            const load = ()=>{
                requestAnimationFrame(load);
                if ($this.video) $this.renderer.render($this.scene, $this.camera);
            };
            $this.manager.onLoad = ()=>{
                parent.current.classList.remove("three-js-loader");
                if ($this.destroyed) {
                    destroy();
                    return;
                }
                resize();
                window.addEventListener("resize", resize);
                onComplete && onComplete.bind($this)();
            };
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
        ref: canvas
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(DsnWebgelDirction));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5273:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9735);
/* harmony import */ var _hooks_dsnHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4425);
/* harmony import */ var _data_portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2536);
/* harmony import */ var _hooks_spltting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7011);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Image_BgImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6401);
/* harmony import */ var _ContentSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2349);
/* harmony import */ var _ControlNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(577);
/* harmony import */ var _DsnWebgelDirction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3241);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__, _DsnWebgelDirction__WEBPACK_IMPORTED_MODULE_12__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__, _DsnWebgelDirction__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










//--> Components




function SliderPortfolio({ className , classNameSlider ="" , typeBg , tag: Tag = "div" , fullWidth , parallax , webgelOptions , metaData , alignControlNav ="between" , optionSlider ={} , data , ...restProps }) {
    const rootSlider = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(), [contentRef, setContentRef] = (0,_hooks_dsnHooks__WEBPACK_IMPORTED_MODULE_5__/* .useArrayRef */ .S5)(), dataProject = data || (0,_data_portfolio__WEBPACK_IMPORTED_MODULE_6__/* .getPortfolioData */ .jq)(), [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), bg = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const tl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.timeline());
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const q = gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.utils.selector(rootSlider);
        gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.fromTo(q(".post-info span "), {
            y: -15,
            stagger: 0.1,
            autoAlpha: 0
        }, {
            autoAlpha: 1
        });
        gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.from(q(".btn-default ,hr , .description"), {
            y: 15,
            autoAlpha: 0,
            stagger: 0.1,
            onComplete: ()=>{
                gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.set(q(".btn-default ,hr , .description , .post-info span"), {
                    clearProps: true
                });
            }
        });
        contentRef.current.forEach((item)=>{
            const title = item.querySelector(".title");
            if (title) _hooks_spltting__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Char */ .ZP.Char(title);
        });
        if (!parallax) return;
        gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(bg.current, {
            ...parallax,
            ease: "none",
            scrollTrigger: {
                trigger: rootSlider.current,
                start: "top top",
                scrub: true
            }
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const init = (swiper)=>{
        swiper.slides.forEach((item)=>{
            const video = item.querySelectorAll(".swiper-slide:not(.swiper-slide-active) video");
            if (video) video.forEach(($item)=>{
                $item.pause();
            });
        });
    };
    const getContent = (swiper)=>{
        const oldNum = swiper.slides[swiper.previousIndex].getAttribute("data-dsn-id");
        const newNum = swiper.slides[swiper.activeIndex].getAttribute("data-dsn-id");
        return [
            newNum,
            oldNum,
            gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.utils.selector(contentRef.current[newNum]),
            gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.utils.selector(contentRef.current[oldNum])
        ];
    };
    const activeVideo = (swiper)=>{
        const newVideo = swiper.slides[swiper.activeIndex].querySelector("video");
        const oldVideo = swiper.slides[swiper.previousIndex].querySelector("video");
        if (newVideo) newVideo.play();
        if (oldVideo) oldVideo.pause();
    };
    const swiperChange = (swiper)=>{
        const [newNum, oldNum, newContent, oldContent] = getContent(swiper);
        const [newTitle, oldTitle] = [
            newContent(".title .char"),
            oldContent(".title .char")
        ];
        const $isRight = oldNum < newNum;
        const animate = {
            show: {
                autoAlpha: 1,
                x: 0,
                stagger: 0.05,
                ease: "back.out(4)"
            },
            hide: {
                autoAlpha: 0,
                x: !$isRight ? "40%" : "-40%",
                stagger: 0.05,
                ease: "back.in(4)"
            }
        };
        activeVideo(swiper);
        if (swiper.dsnOnChange) swiper.dsnOnChange(newNum, oldNum, newContent, oldContent);
        tl.current.progress(1);
        tl.current = gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.timeline();
        tl.current.fromTo($isRight ? oldTitle : oldTitle.reverse(), 0.3, animate.show, {
            ...animate.hide,
            onComplete: ()=>setActive(parseInt(newNum, 10))
        });
        tl.current.fromTo($isRight ? newTitle.reverse() : newTitle, 0.8, animate.hide, animate.show, "-=.1");
    };
    const optionSwiper = {
        modules: [
            swiper__WEBPACK_IMPORTED_MODULE_3__.Parallax,
            swiper__WEBPACK_IMPORTED_MODULE_3__.Controller
        ],
        spaceBetween: 50,
        slidesPerView: 1,
        speed: 1500,
        ...optionSlider,
        onInit: init,
        onSlideChange: swiperChange
    };
    if (restProps.webgel) {
        optionSwiper["resistanceRatio"] = 0.65;
        optionSwiper["watchSlidesProgress"] = true;
    } else if (restProps.parallaxSwiper && Object.keys(restProps.parallaxSwiper).length) optionSwiper["parallax"] = true;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
        className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_4__/* .dsnCN */ .gU)("main-slider half-content has-horizontal  background-main", fullWidth && "full-width", typeBg === "padding-image" ? "demo-1 v-dark-head-mobile" : typeBg === "half-image" ? "demo-2 v-dark-head-mobile" : typeBg + " v-dark-head", classNameSlider),
        ref: rootSlider,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "content-slider",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-container",
                    ref: bg,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                        ...optionSwiper,
                        grabCursor: true,
                        children: [
                            dataProject.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                    className: "over-hidden",
                                    "data-dsn-id": key,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image_BgImage__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        src: item.src,
                                        video: item.video,
                                        alt: item.title,
                                        overlay: item.overlay,
                                        height: "100%",
                                        ...restProps.parallaxSwiper
                                    })
                                }, key)),
                            restProps.webgel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DsnWebgelDirction__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                parent: rootSlider,
                                data: dataProject,
                                direction: optionSlider.direction !== "vertical" ? "horizontal" : "vertical",
                                ...webgelOptions
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ControlNav__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    className: (0,_hooks_helper__WEBPACK_IMPORTED_MODULE_4__/* .dsnCN */ .gU)(alignControlNav && "justify-content-" + alignControlNav),
                    timeline: tl,
                    activeClass: active,
                    parent: rootSlider
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContentSlider__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    data: dataProject,
                    activeClass: active,
                    ref: setContentRef,
                    ...metaData,
                    className: className
                })
            ]
        })
    });
}
SliderPortfolio.defaultProps = {
    parallax: {
        yPercent: 30
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderPortfolio);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;