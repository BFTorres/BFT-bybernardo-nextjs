(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4348],{8492:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/personal-2",function(){return t(8131)}])},907:function(e,s,t){"use strict";var i=t(5893),r=t(719),l=t(1911),a=t(4648),n=t(2665),o=t(9735);function c(e){let{desktop:s,mobile:t,tablet:c,className:d,blur:u,parallaxImage:m,parallaxContent:p,hideMetaData:h,children:x,...g}=e,j=(0,n.Tf)();return(0,i.jsxs)(r.tq,{modules:[l.tl,l.VS],pagination:{clickable:!0,el:".swiper-pagination"},spaceBetween:30,slidesPerView:1,breakpoints:{992:s,768:c,576:t},className:(0,o.gU)("our-blog",d,u&&"has-blur"),...g,children:[j.map((e,s)=>(0,i.jsx)(r.o5,{children:(0,i.jsx)(a.Z,{portoDetails:e,textButton:"Load More",parallaxImage:m,metaData:h,parallaxContent:p})},s)),x]})}c.defaultProps={desktop:{slidesPerView:3},tablet:{slidesPerView:2},mobile:{slidesPerView:2}},s.Z=c},8067:function(e,s,t){"use strict";var i=t(5893),r=t(7294),l=t(2689),a=t(9735);s.Z=function(e){let{href:s,className:t,group:n,width:o,height:c,textBefore:d,textAfter:u,option:m,...p}=e;return(0,r.useEffect)(()=>(l.KR.bind("[data-fancybox]",m||{}),()=>{l.KR.destroy()}),[]),(0,i.jsx)(i.Fragment,{children:s&&(0,i.jsxs)("a",{href:s,"data-fancybox":n||"","data-width":o,"data-height":c,className:(0,a.gU)("play-btn d-flex align-items-center justify-content-center text-center vid",t),...p,children:[(0,i.jsx)("span",{className:"text",children:d}),(0,i.jsx)("span",{className:"play-icon d-flex align-items-center justify-content-center  text-center","data-dsn":"parallax",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",children:(0,i.jsx)("path",{fill:"#000",d:"M7 17.259V6.741a1 1 0 0 1 1.504-.864l9.015 5.26a1 1 0 0 1 0 1.727l-9.015 5.259A1 1 0 0 1 7 17.259Z"})})}),(0,i.jsx)("span",{className:"text",children:u})]})})}},4557:function(e,s,t){"use strict";var i=t(5893),r=t(7294),l=t(990),a=t(6546),n=t(9735),o=t(6401),c=t(3233);function d(e){var s;let{height:t,className:d,separate:u,overlay:m,parallax:p,heroContent:h,parallaxContent:x,justifyContent:g,alignItems:j="center",skin:f,fullWidth:b,children:v}=e,N=(0,r.useRef)(),w=(0,r.useRef)(null),y=(0,r.useRef)(),k=(0,r.useRef)(),P=(0,r.useRef)(),Z=l.p8.utils.selector(N),{category:T,title:S,src:E,video:D,subtitle:M}=h;return(0,r.useEffect)(()=>{l.p8.fromTo(Z(".post-info span"),{y:-15,autoAlpha:0},{y:0,autoAlpha:1,stagger:.1}),l.p8.fromTo(Z(".text-head , .dsn-description"),{y:15,autoAlpha:0},{y:0,autoAlpha:1,stagger:.1});let e=l.p8.timeline();return w.current&&p&&e.to(w.current.children,{...p,ease:"none"},0),k.current&&x&&e.to(k.current,{...x,ease:"none"},0),P.current&&e.to(P.current,{clipPath:"inset(-20% 0 -10px 0)",ease:"none"},0),e.to(y.current,{y:70,autoAlpha:0,ease:"none"},0),a.ScrollTrigger.create({animation:e,trigger:N.current,start:"top top",scrub:!0}),()=>{e.scrollTrigger&&e.scrollTrigger.kill(),e.kill()}},[]),(0,i.jsxs)("header",{className:(0,n.gU)("header-page overflow",(E||D)&&!f&&"v-dark-head",f,f&&"v-dark-head-mobile",b&&"full-width"),ref:N,children:[E&&(0,i.jsx)(o.Z,{src:E,height:t,alt:null!==(s=null==S?void 0:S.replace(/<[^>]+>/g,""))&&void 0!==s?s:"",overlay:m,video:D,ref:w}),h&&(0,i.jsx)("div",{className:(0,n.gU)("hero-content d-flex",d,g&&"justify-content-"+g,j&&"align-items-"+j),ref:k,children:(0,i.jsxs)("div",{className:"content p-relative",children:[M&&(0,i.jsx)("div",{className:"subtitle mb-20",dangerouslySetInnerHTML:{__html:M}}),T&&(0,i.jsx)(c.Z,{category:T,separate:u}),S&&(0,i.jsx)("div",{className:"text-head",children:(0,i.jsx)("h1",{className:"title",dangerouslySetInnerHTML:{__html:S}})}),v&&(0,i.jsx)("div",{className:"dsn-description mt-30",children:v})]})})]})}d.defaultProps={height:"100%",parallax:{yPercent:30},parallaxContent:{yPercent:50,autoAlpha:0}},s.Z=d},7920:function(e,s,t){"use strict";var i=t(5893),r=t(7294),l=t(2536),a=t(9735),n=t(6401),o=t(3233),c=t(9075);s.Z=r.memo(function(e){let{portoDetails:s,styleBox:t,height:d="100%",imageOnly:u,className:m,parallaxContent:p,parallaxImage:h}=e,x=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=x.current.querySelector("video");if(!e)return;e.pause();let s=x.current,t=()=>e.play(),i=()=>e.pause();return s.addEventListener("mouseenter",t),s.addEventListener("mouseleave",i),()=>{e&&(s.removeEventListener("mouseenter",t),s.removeEventListener("mouseleave",i))}}),(0,i.jsxs)("div",{className:(0,a.gU)("portfolio-item work-item",m),ref:x,children:[(0,i.jsx)("div",{className:"inner-img box-img",...h,children:(0,i.jsxs)(c.Z,{href:(0,l.p8)(s),className:"w-100 h-100 link-item",transitionPage:{title:s.title},children:["line"===t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"line line-top"}),(0,i.jsx)("div",{className:"line line-bottom"}),(0,i.jsx)("div",{className:"line line-left"}),(0,i.jsx)("div",{className:"line line-right"})]}),"corner"===t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"corner corner-left-top"}),(0,i.jsx)("div",{className:"corner corner-right-bottom"})]}),(0,i.jsx)(n.Z,{className:"dsn-swiper-parallax-transform ",src:s.src,video:s.video,alt:s.title,overlay:s.overlay,height:d,imageOnly:u})]})}),(0,i.jsxs)("div",{className:"info-text box-content",...p,children:[s.category&&(0,i.jsx)(o.Z,{category:s.category}),s.title&&(0,i.jsx)("h4",{className:"title-block sec-title",children:(0,i.jsx)(c.Z,{href:(0,l.p8)(s),transitionPage:{title:s.title},children:s.title})})]})]})})},9828:function(e,s,t){"use strict";var i=t(5893),r=t(719),l=t(1911),a=t(7920),n=t(2536),o=t(9735);function c(e){let{desktop:s,mobile:t,stylePortfolio:c,tablet:d,className:u,parallaxImage:m,styleBox:p,parallaxContent:h,blur:x,children:g,...j}=e,f=(0,n.jq)();return(0,i.jsxs)(r.tq,{modules:[l.tl,l.VS],pagination:{clickable:!0,el:".swiper-pagination",dynamicBullets:!0},spaceBetween:30,slidesPerView:1,breakpoints:{992:s,768:d,576:t},className:(0,o.gU)("work",u,c,x&&"has-blur"),...j,children:[f.map((e,s)=>(0,i.jsx)(r.o5,{children:(0,i.jsx)(a.Z,{portoDetails:e,textButton:"View Case",parallaxImage:m,parallaxContent:h,styleBox:p})},s)),g]})}c.defaultProps={desktop:{slidesPerView:3},tablet:{slidesPerView:2},mobile:{slidesPerView:2}},s.Z=c},854:function(e,s,t){"use strict";var i=t(5893);t(7294);var r=t(8814),l=t(577);let a=e=>{let{className:s,...t}=e;return(0,i.jsx)(r.Z.grid,{col:2,colTablet:2,colMobile:1,className:s,data:(0,l.Y)().slice(0,4),backgroundColor:"background-section",styleBox:"corner",...t})};s.Z=a},9967:function(e,s,t){"use strict";t.d(s,{bO:function(){return u},mW:function(){return c},ZP:function(){return m}});var i=t(5893),r=t(6878),l=t(9735),a=t(7294),n=t(990);function o(e){let{className:s,bgColor:t,children:r,number:o,...c}=e,d=(0,a.useRef)(),[u,m]=(0,a.useState)(0);return(0,a.useEffect)(()=>{if(null==o)return;let e=n.p8.to(d.current,{width:o+"%",scrollTrigger:{trigger:d.current,start:"top 95%"},onUpdate(){m(Math.floor(this.progress()*o))},onComplete:function(){this.vars.scrollTrigger.scrub||(this.scrollTrigger.kill(),this.kill())}});return()=>{var s;null==e||null===(s=e.scrollTrigger)||void 0===s||s.kill(),null==e||e.kill()}},[]),(0,i.jsxs)("div",{className:(0,l.gU)("skills-item",s),...c,children:[(0,i.jsx)("h4",{className:"sm-title-block mb-15",children:r}),(0,i.jsx)("div",{className:"bar",children:(0,i.jsx)("span",{className:(0,l.gU)("fill","pattern"!==t&&t),style:"pattern"==t?{backgroundImage:"url(/img/patterns.png"}:{},ref:d,children:(0,i.jsxs)("span",{className:"number",children:[u,"%"]})})})]})}o.defaultProps={bgColor:"background-theme"};var c=o;function d(e){let{className:s,bgColor:t,children:r,number:o,...c}=e,d=(0,a.useRef)(),[u,m]=(0,a.useState)(0);return(0,a.useEffect)(()=>{if(null==o)return;let e=n.p8.to(d.current,1.5,{strokeDashoffset:100-o,scrollTrigger:{trigger:d.current,start:"top 95%"},onUpdate(){m(Math.floor(this.progress()*o))},onComplete(){this.vars.scrollTrigger.scrub||(this.scrollTrigger.kill(),this.kill())}});return()=>{var s;null==e||null===(s=e.scrollTrigger)||void 0===s||s.kill(),null==e||e.kill()}},[o]),(0,i.jsx)("div",{className:(0,l.gU)("skills-inner",s),...c,children:(0,i.jsxs)("div",{className:"bar-svg",children:[(0,i.jsxs)("div",{className:"fill-bar p-relative ".concat(t),children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-1 -1 34 34",children:[(0,i.jsx)("circle",{cx:"16",cy:"16",r:"15.9155",className:"progress-bar__background"}),(0,i.jsx)("circle",{cx:"16",cy:"16",r:"15.9155",className:"progress-bar__progress js-progress-bar dsn-animate-skill",ref:d,style:{strokeDashoffset:100}})]}),(0,i.jsxs)("h4",{className:"dsn-number-award number title-block v-middle",children:[u,"%"]})]}),(0,i.jsx)("h5",{className:"dsn-title-award title-block mt-30",children:r})]})})}d.defaultProps={bgColor:"background-heading"};var u=d,m=function(e){let{className:s,children:t,...a}=e;return(0,i.jsx)(r.Z,{className:(0,l.gU)("dsn-skills",s),col:1,...a,children:t})}},2536:function(e,s,t){"use strict";t.d(s,{jq:function(){return r},p8:function(){return a},x6:function(){return l}});let i=[{id:1,title:"BMW Group",slug:"bmw-group",category:["FinTech","Frontend","Design"],description:"FinTech application for the BMW Group (BMW, Rolls Royce, Mini).",src:"/img/project/project1/pexels-brandin-t-13182965.jpg",overlay:6},{id:2,title:"Mercedes Benz",slug:"mercedes-benz",src:"/img/project/project3/1.jpg",category:["FinTech","Frontend","Design"],description:"FinTech application for Mercedes Benz.",overlay:6},{id:3,title:"Thyssenkrupp & TKE",slug:"thyssen-collection",src:"/img/project/project2/ant-rozetsky-SLIFI67jv5k-unsplash.jpg",category:["FinTech","Frontend","Design"],description:"FinTech application for Thyssenkrupp and TKE.",overlay:6},{id:4,title:"Lufthansa CityLine",slug:"lufthansa-cityline",category:["FinTech","Frontend","Design"],src:"/img/project/project4/1.jpg",description:"FinTech application for Lufthansa CityLine.",overlay:2},{id:5,title:"InCapSolution",slug:"incapsolution",src:"/img/project/project5/1.jpg",category:["Medical Research","Frontend","Design"],description:"Web application & corporate identity for a medical research statrtup based in Germany.",overlay:5},{id:6,title:"KRONOS",slug:"kronos",category:["Ironhack","Full Stack","Hotel Industry"],src:"/img/project/project6/1.jpg",description:"Task Management System for the Hotel industry. Ironhack project module 2.",overlay:4}],r=()=>i,l=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"slug";return i.find(t=>t[s]===e)},a=e=>e?e.slug&&"/portfolio/"+e.slug:""},4425:function(e,s,t){"use strict";t.d(s,{AF:function(){return n},S5:function(){return l},v9:function(){return a}});var i=t(7294),r=t(990);function l(){let e=(0,i.useRef)(null);return e.current=[],[e,s=>s&&e.current.push(s)]}function a(){let e=(0,i.useRef)(null),s=(0,i.useMemo)(()=>r.p8.utils.selector(e),[e]);return[s,e]}function n(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];let[e,s]=(0,i.useState)({desktop:!1,tablet:!1,mobile:!1}),t=()=>{let e=window.innerWidth;s({desktop:e>=992,tablet:e<992&&e>=768,mobile:e<768})};return(0,i.useEffect)(()=>(t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),e}},8131:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return T}});var i=t(5893),r=t(1725),l=t(4557),a=t(7091),n=t(3042),o=t(6878),c=t(9967),d=t(8067);t(7294);var u=t(6964);let m={title:"Why hire me for your next project",descTitle:"About Me",subtitle:"Proin laoreet elementum ligula",description:"Proin volutpat mauris ac pellentesque pharetra. Suspendisse\n                    congue elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex\n                    justo",heroImage:"/img/about-me.jpg",infoPersonal:[{key:"Age",value:"29"},{key:"Residence",value:"Egypt"},{key:"Address",value:"27 Some Street, Some Town"},{key:"E-Mail",value:"info@dsngrid.com",link:{href:"mailto:info@dsngrid.com",target:"_blank",rel:"nofollow"}}],firstLink:{text:"DOWNLOAD CV",option:{href:"#0",target:"_blank",rel:"nofollow"}},lastLink:{text:"LEARN MORE",option:{href:"/services"}}};var p=function(e){let{className:s,...t}=e;return(0,i.jsxs)(o.Z,{col:2,colTablet:1,colGap:0,rowGap:0,rowGapTablet:60,children:[(0,i.jsxs)("div",{className:"box-img background-section p-20 p-relative",children:[(0,i.jsx)("div",{className:"line line-top"}),(0,i.jsx)("div",{className:"line line-bottom"}),(0,i.jsx)("div",{className:"line line-left"}),(0,i.jsx)("div",{className:"line line-right"}),(0,i.jsx)(u.Z,{alt:"",src:m.heroImage,overlay:4,height:"100%"})]}),(0,i.jsxs)("div",{className:"box-info box-padding p-md-0 ",children:[(0,i.jsx)(n.Z,{className:"mb-30",description:m.descTitle,defaultSpace:!1,children:m.title}),(0,i.jsx)("h5",{className:"sm-title-block theme-color",children:m.subtitle}),(0,i.jsx)("div",{className:"border-bottom mt-20 mb-20"}),(0,i.jsx)("p",{className:"max-w570",children:m.description}),(0,i.jsx)(o.Z,{as:"ul",className:"mt-20 pt-20 pb-20 border-bottom border-top",col:2,children:m.infoPersonal&&m.infoPersonal.map((e,s)=>(0,i.jsxs)("li",{children:[(0,i.jsxs)("strong",{className:"heading-color mr-5",children:[e.key," : "]}),e.link?(0,i.jsx)("a",{...e.link,children:e.value}):e.value]},s))}),(0,i.jsxs)("div",{className:"d-flex align-items-center mt-30",children:[m.firstLink&&(0,i.jsx)(a.Z,{...m.firstLink.option,className:"mr-15 line-head",borderStyle:"border-color-theme-color",borderRadius:!0,children:m.firstLink.text}),m.lastLink&&(0,i.jsx)(a.Z,{...m.lastLink.option,className:"line-head",borderRadius:!0,children:m.lastLink.text})]})]})]})},h=t(9735);function x(e){let{className:s,children:t,title:r}=e;return(0,i.jsx)("div",{className:(0,h.gU)("dsn-resume",s),children:(0,i.jsx)("div",{className:"resume-box-inner",children:(0,i.jsxs)("div",{className:"resume-box",children:[r&&(0,i.jsx)("h3",{className:"title-block mb-30",children:r}),t]})})})}x.item=function(e){let{className:s,children:t,title:r,...l}=e;return(0,i.jsxs)("div",{className:(0,h.gU)("item-resume-box",s),...l,children:[r&&(0,i.jsx)("h3",{className:(0,h.gU)("sm-title-block",t&&"mb-15"),children:r}),t]})};var g=t(854),j=t(9828),f=t(4628),b=t(283),v=t(907),N=t(6331),w=t(9849),y=t(3556),k=t(9008),P=t.n(k);let Z={title:"Frontend-developer",subtitle:'<span class="background-section pl-15 pr-15 pt-5 pb-5 d-inline-block">Alex Smith</span>',src:"/img/personal.jpg"};var T=function(){return n.Z.defaultProps={classDesc:"line-shape line-shape-before",classDesInner:"line-bg-right"},(0,i.jsxs)(r.Z,{modelRight:{children:(0,i.jsx)(w.Z,{}),propsModal:{textBtn:"Contact"}},children:[(0,i.jsx)(P(),{children:(0,i.jsx)("title",{children:"Personal  | Eremia Creative Portfolio Multi-Purpose"})}),(0,i.jsxs)(l.Z,{className:"dsn-container",fullWidth:!0,heroContent:Z,overlay:6,children:[(0,i.jsx)("p",{className:"mt-30 pb-30 border-bottom max-w570",children:"Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu."}),(0,i.jsxs)("div",{className:"d-flex align-items-center mt-30",children:[(0,i.jsx)(a.Z,{href:"/services",className:"mr-15 line-head",borderStyle:"border-color-theme-color",borderRadius:!0,children:"About Me"}),(0,i.jsx)(d.Z,{className:"no-height",href:"https://www.youtube.com/watch?v=mRvqcvqB4EI",textAfter:"Play Video"})]})]}),(0,i.jsx)("section",{className:"container about-me p-relative section-margin ","data-dsn-title":"About Me",children:(0,i.jsx)(p,{})}),(0,i.jsx)("section",{className:"section-padding  background-section","data-dsn-title":"Resume",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(n.Z,{description:"My Resume",children:"Education & Experience"}),(0,i.jsxs)(o.Z,{col:2,children:[(0,i.jsxs)(x,{title:"Education",children:[(0,i.jsx)(x.item,{title:"University of Studies",children:(0,i.jsx)("p",{className:"max-w570",children:"Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum."})}),(0,i.jsx)(x.item,{title:"Doctoral Degree",children:(0,i.jsx)("p",{className:"max-w570",children:"Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor."})}),(0,i.jsx)(x.item,{title:"University of Studies",children:(0,i.jsx)("p",{className:"max-w570",children:"Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante."})})]}),(0,i.jsxs)(x,{title:"Education",children:[(0,i.jsxs)(x.item,{title:"University of Studies",children:[(0,i.jsx)("h6",{children:"Senior UX / UI Designer"}),(0,i.jsx)("p",{className:"max-w570 mt-10",children:"Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna."})]}),(0,i.jsxs)(x.item,{title:"Doctoral Degree",children:[(0,i.jsx)("h6",{children:"DDB Athens ( Tribal )"}),(0,i.jsx)("p",{className:"max-w570 mt-10",children:"Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam."})]}),(0,i.jsx)(x.item,{title:"Freelancer",children:(0,i.jsx)("h6",{children:"DDB Athens ( Tribal )"})})]})]})]})}),(0,i.jsx)("section",{className:"section-margin container","data-dsn-title":"Services",children:(0,i.jsxs)(o.Z,{col:2,colTablet:1,rowGapTablet:60,children:[(0,i.jsxs)("div",{className:"text-left flex-column align-items-center w-100",children:[(0,i.jsx)("div",{className:"flex-column align-items-center mb-30",children:(0,i.jsxs)("div",{className:"section-title mb-20 ",children:[(0,i.jsx)("p",{className:"sub-heading  line-bg-left mb-15",children:"My specialization"}),(0,i.jsx)("h4",{className:"text-left title-cap",children:"I am a trending designer who cares about the details"})]})}),(0,i.jsx)("h5",{className:"sm-title-block theme-color",children:"Proin laoreet elementum ligula"}),(0,i.jsx)("div",{className:"border-bottom mt-30 mb-30"}),(0,i.jsxs)("p",{className:"max-w570 dsn-text",children:[(0,i.jsxs)("span",{className:"mb-20",children:["I will help you build your brand and grow your business. I create clarifying strategy, beautiful logo and identity design."," "]}),(0,i.jsx)("span",{children:"Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate. Ut a mi tempus massama lesuada fermentum."})]}),(0,i.jsx)("div",{className:"border-bottom mt-30 mb-30"}),(0,i.jsx)(a.Z,{href:"/services",className:"mr-15 line-head",borderStyle:"border-color-theme-color",borderRadius:!0,children:"More Service"})]}),(0,i.jsx)(g.Z,{className:"services-no-padding",masonry:!0})]})}),(0,i.jsxs)("div",{className:"p-relative section-padding","data-dsn-title":"Skills",children:[(0,i.jsx)("div",{className:"box-im box-im-100 h-100 p-absolute top-0 over-hidden",children:(0,i.jsx)(u.Z,{alt:"",src:"/img/header.jpg",height:"100%",heightMobile:"100%",heightTable:"100%",overlay:7,animationActive:!1})}),(0,i.jsxs)(c.ZP,{className:"container p-relative  z-index-1",col:4,colTablet:2,children:[(0,i.jsx)(c.bO,{number:80,children:"WEB DESIGN"}),(0,i.jsx)(c.bO,{number:60,children:"PHOTOSHOP"}),(0,i.jsx)(c.bO,{number:40,children:"Graphic Design"}),(0,i.jsx)(c.bO,{number:90,children:"Smarty / Twig"})]})]}),(0,i.jsxs)("div",{className:"section-margin","data-dsn-title":"Our Portfolio",children:[(0,i.jsxs)(n.Z,{className:"container align-items-center text-center",description:"Our Works",children:["Creative Portfolio ",(0,i.jsx)("br",{}),"Designs"]}),(0,i.jsx)(j.Z,{grabCursor:!0,desktop:{spaceBetween:50,slidesPerView:1.5},tablet:{spaceBetween:0,slidesPerView:1.25},mobile:{spaceBetween:0,slidesPerView:1},stylePortfolio:"work-section",className:"v-dark-head",centeredSlides:!0,loop:!0,blur:!0,parallax:!0,speed:1200,watchSlidesProgress:!0,loopedSlides:2,parallaxImage:{"data-swiper-parallax-scale":"0.85"},parallaxContent:{"data-swiper-parallax-opacity":"0"},children:(0,i.jsx)(f.Z,{className:"justify-content-between dsn-container mb-30"})})]}),(0,i.jsx)(b.Z,{className:"container section-margin",title:"Feedback from our clients.",skin:["testimonials-half"],backgroundColor:"background-section",desktop:{slidesPerView:2},speed:1e3,grabCursor:!0,loop:!0,loopedSlides:2,parallax:!0,parallaxImage:{"data-swiper-parallax-scale":.7},parallaxContent:{"data-swiper-parallax-opacity":0,"data-swiper-parallax":"30%"},"data-dsn-title":"testimonials",children:(0,i.jsx)(f.Z,{className:"justify-content-between dsn-container mt-30"})}),(0,i.jsxs)("div",{className:"section-margin","data-dsn-title":"Lasts post",children:[(0,i.jsxs)(n.Z,{className:"container  align-items-center text-center",description:"Lasts post",children:["Latest And Greatest ",(0,i.jsx)("br",{}),"Post"]}),(0,i.jsx)(v.Z,{grabCursor:!0,desktop:{spaceBetween:50,slidesPerView:1.5},tablet:{spaceBetween:20,slidesPerView:1.25},mobile:{spaceBetween:0,slidesPerView:1},centeredSlides:!0,loop:!0,blur:!0,parallax:!0,speed:1200,watchSlidesProgress:!0,loopedSlides:2,parallaxImage:{"data-swiper-parallax-scale":"0.85"},children:(0,i.jsx)(f.Z,{className:"justify-content-between dsn-container mt-30"})})]}),(0,i.jsx)(N.Z,{className:"section-padding border-top background-section"}),(0,i.jsx)(y.Z,{className:"background-section"})]})}}},function(e){e.O(0,[7948,4976,6568,3690,2689,4475,6094,7868,1134,9774,2888,179],function(){return e(e.s=8492)}),_N_E=e.O()}]);