"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6094],{6401:function(e,t,s){var l=s(7297),a=s(5893),c=s(7294),n=s(5675),r=s.n(n),i=s(9521),o=s(9735);function d(){let e=(0,l.Z)(["\n        height : ",";\n        position: relative;\n"]);return d=function(){return e},e}let h=i.ZP.div.withConfig({componentId:"sc-caad18c5-0"})(d(),e=>e.theme.height),m=(0,c.forwardRef)((e,t)=>{let{src:s,video:l,height:c="80vh",overlay:n=4,imageOnly:i,alt:d,className:m="",...x}=e;return(0,a.jsxs)(h,{theme:{height:c},"data-overlay":n,className:(0,o.gU)("image-bg",m),...x,ref:t,children:[!l&&(0,a.jsx)(r(),{src:s,className:"cover-bg-img",alt:d,fill:!0,sizes:"(max-width: 768px) 100vw,(max-width: 1200px) 70vw,100vw"}),l&&!i&&(0,a.jsx)("video",{className:"cover-bg-img",src:s,preload:"none",autoPlay:!0,muted:!0,playsInline:!0,...l}),l&&i&&(0,a.jsx)(r(),{className:"cover-bg-img",src:l.poster,fill:!0,alt:d,sizes:"(max-width: 768px) 100vw,(max-width: 1200px) 70vw,100vw"})]})});t.Z=m},4648:function(e,t,s){var l=s(5893),a=s(7294),c=s(2665),n=s(9735),r=s(6401),i=s(3233),o=s(9075);function d(e){let{portoDetails:t,textButton:s,imageOnly:d,className:h,parallaxContent:m={},metaData:x=[],parallaxImage:p={}}=e,u=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=u.current.querySelector("video");if(!e)return;e.pause();let t=u.current,s=()=>e.play(),l=()=>e.pause();return t.addEventListener("mouseenter",s),t.addEventListener("mouseleave",l),()=>{e&&(t.removeEventListener("mouseenter",s),t.removeEventListener("mouseleave",l))}}),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:(0,n.gU)("blog-item p-relative d-flex align-items-center h-100 w-100",h),ref:u,...m,children:[(0,l.jsx)("div",{className:"box-meta",children:(0,l.jsxs)("div",{className:"entry-date",children:[(0,l.jsx)("span",{className:"author",children:t.author}),(0,l.jsx)("a",{href:"#",children:t.date})]})}),(0,l.jsx)("div",{className:"inner-img box-img over-hidden",...p,children:(0,l.jsx)(r.Z,{className:"dsn-swiper-parallax-transform ",src:t.src,video:t.video,alt:t.title,overlay:t.overlay,height:"100%",imageOnly:d})}),(0,l.jsx)("div",{className:"box-content p-relative",children:(0,l.jsxs)("div",{className:"box-content-body",children:[t.category&&(0,l.jsx)(i.Z,{category:t.category,separate:", "}),t.title&&(0,l.jsx)("h4",{className:"title-block mb-10",children:(0,l.jsx)(o.Z,{href:(0,c.Np)(t),transitionPage:{title:t.title},children:t.title})}),t.description&&!x.includes("description")&&(0,l.jsx)("p",{children:t.description}),(0,l.jsxs)(o.Z,{href:(0,c.Np)(t),className:"link-visit p-relative mt-15",transitionPage:{title:t.title},children:[(0,l.jsx)("span",{className:"link-visit-text",children:s}),(0,l.jsx)("div",{className:"link-visit-arrow",children:(0,l.jsxs)("svg",{viewBox:"0 0 80 80",children:[(0,l.jsx)("polyline",{points:"19.89 15.25 64.03 15.25 64.03 59.33"}),(0,l.jsx)("line",{x1:"64.03",y1:"15.25",x2:"14.03",y2:"65.18"})]})})]})]})})]})})}d.defaultProps={className:"",imageOnly:!0},t.Z=(0,a.memo)(d)},7091:function(e,t,s){var l=s(5893),a=s(9735),c=s(9075);t.Z=function(e){let{className:t,borderRadius:s,children:n,href:r,LinkProps:i,transitionPage:o=!1,borderStyle:d="border-color-heading-color",...h}=e;return(0,l.jsxs)(c.Z,{transitionPage:o,href:r,...i,className:(0,a.gU)("dsn-button",t,s&&"border-rdu"),...h,children:[d&&(0,l.jsx)("span",{className:(0,a.gU)("dsn-border",d,s&&"dsn-border-rdu")}),n]})}},3556:function(e,t,s){s.d(t,{Z:function(){return p}});var l=s(5893),a=s(7294),c=s(9735);let n=[{href:"https://www.linkedin.com/in/bernardo-fonseca-torres/",name:"LinkedIn"},{href:"https://www.xing.com/profile/Bernardo_FonsecaTorres",name:"XING"},{href:"https://medium.com/@bernardofonsecatorres",name:"Medium"}];var r=function(e){let{className:t,...s}=e;return(0,l.jsx)("div",{className:(0,c.gU)("footer-social p-relative",t),...s,children:(0,l.jsx)("ul",{children:n&&n.map((e,t)=>(0,l.jsx)("li",{className:"over-hidden",children:(0,l.jsx)("a",{href:e.href,"data-dsn":"parallax",target:"_blank",rel:"nofollow",children:e.name})},t))})})},i=s(9603),o=s(9417),d=s(9473),h=s(990),m=function(e){let{className:t,options:s,...n}=e,r=(0,a.useRef)(null),m=(0,d.v9)(e=>e.scrollbar);return(0,a.useEffect)(()=>{let e=r.current,t=()=>{h.p8.to(m.current||window,{scrollTo:{y:0},...s})};return null==e||e.addEventListener("click",t),()=>{null==e||e.removeEventListener("click",t)}}),(0,l.jsxs)("div",{className:(0,c.gU)("scroll-top animation-rotate",t),"data-dsn":"parallax",...n,style:{cursor:"pointer"},ref:r,children:[(0,l.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 174 173",xmlSpace:"preserve",children:[(0,l.jsx)("title",{children:"Scroll Down — Scroll"}),(0,l.jsx)("desc",{children:"Created with Sketch."}),(0,l.jsxs)("g",{children:[(0,l.jsx)("path",{className:"st0",d:"M49.7,20.7c0.5,0.7,1.3,0.9,2.2,0.4c1-0.5,1.1-1.1,0.7-1.7c-0.4-0.8-1.1-0.8-2.5-0.5c-2.2,0.5-3.3,0.2-4-1     c-0.9-1.6-0.1-3.1,1.5-4c2-1.1,3.4-0.5,4.3,0.8l-1.7,0.9c-0.4-0.6-1-0.9-1.9-0.4c-0.8,0.4-0.9,1-0.6,1.6c0.3,0.6,0.9,0.6,2.2,0.3     c2.5-0.6,3.5,0,4.2,1.2c0.8,1.4,0.5,3-1.7,4.3c-1.8,1-3.5,0.8-4.6-0.9L49.7,20.7z"}),(0,l.jsx)("path",{className:"st0",d:"M67.9,12.8c0.3,1.6-0.3,3.4-2.6,4.2c-2.9,1-4.6-0.8-5.5-3.4c-0.9-2.6-0.2-5.1,2.4-6c2.5-0.8,3.9,0.4,4.5,1.8     L64.9,10c-0.4-0.7-1-1.3-2.2-0.9c-1.5,0.5-1.5,2.2-1,3.8c0.6,1.7,1.5,3.1,3.1,2.5c1.2-0.4,1.3-1.4,1.2-2.1L67.9,12.8z"}),(0,l.jsx)("path",{className:"st0",d:"M76.8,10l0.5,3.9l-1.9,0.2l-1.2-9.5l3.9-0.5c1.8-0.2,3.2,0.5,3.4,2.2c0.2,1.3-0.4,2-1.2,2.4     c1,0.2,1.4,0.9,1.6,2.1l0,0.2c0.1,0.8,0.3,1.6,0.4,2.2l-1.9,0.2c-0.2-0.4-0.3-1-0.5-2.2l0-0.3c-0.1-1.1-0.6-1.4-1.8-1.3L76.8,10z     M76.6,8.5l1.4-0.2c0.9-0.1,1.6-0.5,1.5-1.5c-0.1-0.9-0.8-1.1-1.6-1L76.3,6L76.6,8.5z"}),(0,l.jsx)("path",{className:"st0",d:"M97.7,8.7c-0.2,2.8-1.6,4.9-4.7,4.7c-3-0.2-4.1-2.5-3.9-5.3c0.1-2.4,1.6-4.8,4.7-4.6     C96.6,3.8,97.8,6.2,97.7,8.7z M91.1,8.3c-0.1,1.9,0.5,3.5,2.1,3.6c1.7,0.1,2.4-1.3,2.5-3.3c0.1-1.8-0.4-3.4-2.1-3.5     C92,5.1,91.2,6.5,91.1,8.3z"}),(0,l.jsx)("path",{className:"st0",d:"M106.4,5.5l1.9,0.5l-2,7.7l4.2,1.1l-0.6,1.5l-5.8-1.5L106.4,5.5z"}),(0,l.jsx)("path",{className:"st0",d:"M120,9.7l1.8,0.8l-3.3,7.3l3.9,1.7l-0.8,1.4l-5.5-2.5L120,9.7z"}),(0,l.jsx)("path",{className:"st0",d:"M140.9,24.2l-2-1.7l1.1-1.2l5.4,4.7l-1.1,1.2l-2-1.7l-5.2,6.1l-1.5-1.3L140.9,24.2z"}),(0,l.jsx)("path",{className:"st0",d:"M152.6,41.2c-2.2,1.7-4.7,2.1-6.6-0.3c-1.9-2.3-0.9-4.7,1.3-6.4c1.8-1.5,4.6-2,6.5,0.4     C155.5,37.1,154.6,39.6,152.6,41.2z M148.5,36.1c-1.5,1.2-2.2,2.7-1.3,3.9c1,1.3,2.5,0.9,4.1-0.4c1.4-1.1,2.2-2.5,1.1-3.9     C151.5,34.5,149.9,34.9,148.5,36.1z"}),(0,l.jsx)("path",{className:"st0",d:"M160.9,45.5l1.6,3.1c0.8,1.6,0.8,3.4-1,4.3c-1.8,0.9-3.4,0.1-4.3-1.7l-0.7-1.2l-3.3,1.7l-0.9-1.7L160.9,45.5z     M158,49.2l0.6,1.1c0.5,0.9,1.1,1.3,2.1,0.8c0.8-0.4,0.9-1.2,0.4-2.1l-0.6-1.2L158,49.2z"}),(0,l.jsx)("path",{className:"st0",d:"M165.5,72.8l-1.6,0.3l-0.7-3.6l1.6-0.3L165.5,72.8z"}),(0,l.jsx)("path",{className:"st0",d:"M165.1,90.7c-0.9,0.1-1.5,0.6-1.6,1.6c-0.1,1.1,0.4,1.5,1.1,1.5c0.9,0.1,1.3-0.4,1.7-1.8     c0.8-2.2,1.6-2.9,3-2.8c1.8,0.1,2.6,1.6,2.5,3.4c-0.2,2.3-1.4,3.2-3,3.2l0.1-1.9c0.7-0.1,1.3-0.4,1.3-1.4c0.1-0.9-0.3-1.3-1-1.4     c-0.7,0-0.9,0.4-1.4,1.7c-0.9,2.4-1.9,3-3.3,2.9c-1.6-0.1-2.8-1.2-2.7-3.7c0.1-2.1,1.3-3.4,3.2-3.4L165.1,90.7z"}),(0,l.jsx)("path",{className:"st0",d:"M162,110.3c-1.5-0.7-2.7-2.1-2.1-4.5c0.8-2.9,3.2-3.4,5.8-2.7c2.6,0.7,4.4,2.6,3.7,5.3c-0.6,2.5-2.5,3.1-4,2.8     l0.5-1.8c0.8,0,1.6-0.1,2-1.4c0.4-1.5-1-2.5-2.7-2.9c-1.8-0.5-3.4-0.4-3.8,1.2c-0.3,1.2,0.4,1.8,1.1,2.2L162,110.3z"}),(0,l.jsx)("path",{className:"st0",d:"M159.5,119.3l-3.6-1.7l0.8-1.7l8.7,4.1l-1.7,3.5c-0.8,1.6-2.1,2.4-3.7,1.7c-1.2-0.6-1.5-1.5-1.4-2.3     c-0.7,0.7-1.6,0.7-2.6,0.2l-0.2-0.1c-0.8-0.4-1.5-0.7-2-0.8l0.8-1.7c0.4,0,1,0.3,2.1,0.8l0.2,0.1c1,0.5,1.5,0.3,2-0.9L159.5,119.3z     M160.9,119.9l-0.6,1.3c-0.4,0.8-0.5,1.6,0.5,2.1c0.8,0.4,1.4-0.1,1.7-0.8l0.7-1.6L160.9,119.9z"}),(0,l.jsx)("path",{className:"st0",d:"M149.2,137.5c-2.2-1.6-3.2-4-1.4-6.5c1.8-2.4,4.3-2,6.5-0.4c1.9,1.4,3.1,3.9,1.3,6.4     C153.9,139.3,151.3,139,149.2,137.5z M153.1,132.2c-1.5-1.1-3.2-1.4-4.1-0.2c-1,1.3-0.2,2.7,1.4,3.9c1.4,1.1,3,1.5,4,0.1     C155.4,134.7,154.6,133.3,153.1,132.2z"}),(0,l.jsx)("path",{className:"st0",d:"M147.2,146.6l-1.4,1.3l-5.4-5.9l-3.1,2.9l-0.9-1.3l4.4-4.1L147.2,146.6z"}),(0,l.jsx)("path",{className:"st0",d:"M136.4,155.7l-1.6,1.1l-4.4-6.7l-3.6,2.3L126,151l5-3.3L136.4,155.7z"}),(0,l.jsx)("path",{className:"st0",d:"M112.8,165.5l2.5-0.7l0.5,1.5l-6.9,2l-0.5-1.5l2.5-0.7l-2.3-7.6l1.9-0.6L112.8,165.5z"}),(0,l.jsx)("path",{className:"st0",d:"M92.2,166c-0.3-2.7,0.8-5.1,3.8-5.4c2.9-0.3,4.4,1.8,4.7,4.6c0.2,2.4-0.8,5-3.8,5.3     C94,170.8,92.5,168.6,92.2,166z M98.7,165.4c-0.2-1.9-1.1-3.3-2.6-3.2c-1.7,0.2-2.1,1.6-1.9,3.6c0.2,1.8,0.9,3.2,2.6,3.1     C98.4,168.7,98.9,167.2,98.7,165.4z"}),(0,l.jsx)("path",{className:"st0",d:"M84.1,170.7l-3.5-0.3c-1.8-0.2-3.3-1.2-3.1-3.2c0.2-2,1.7-2.9,3.8-2.7l1.4,0.1L83,161l2,0.2L84.1,170.7z     M82.5,166.2l-1.3-0.1c-1-0.1-1.7,0.2-1.8,1.3c-0.1,1,0.5,1.4,1.5,1.5l1.3,0.1L82.5,166.2z"}),(0,l.jsx)("path",{className:"st0",d:"M58.6,159.8l0.6-1.5l3.4,1.3l-0.6,1.5L58.6,159.8z"}),(0,l.jsx)("path",{className:"st0",d:"M43.8,149.8c0.4-0.8,0.3-1.6-0.5-2.2c-0.9-0.7-1.5-0.5-1.9,0c-0.5,0.7-0.3,1.3,0.6,2.4c1.4,1.8,1.5,2.9,0.7,4     c-1.1,1.4-2.8,1.4-4.2,0.3c-1.8-1.4-1.9-2.9-1.1-4.2l1.5,1.1c-0.3,0.6-0.4,1.3,0.4,1.9c0.7,0.5,1.3,0.4,1.7-0.1     c0.4-0.6,0.2-1-0.7-2.2c-1.5-2-1.5-3.2-0.6-4.3c0.9-1.3,2.6-1.7,4.6-0.2c1.7,1.3,2.1,2.9,1.1,4.5L43.8,149.8z"}),(0,l.jsx)("path",{className:"st0",d:"M29,136.4c1.4-0.9,3.2-1.2,4.9,0.7c2,2.2,1.2,4.5-0.8,6.4c-2,1.8-4.6,2.3-6.5,0.3c-1.8-1.9-1.2-3.8-0.2-4.8     l1.3,1.4c-0.4,0.7-0.8,1.4,0.1,2.4c1.1,1.2,2.6,0.5,3.9-0.7c1.3-1.2,2.2-2.7,1-3.9c-0.9-0.9-1.8-0.6-2.4-0.3L29,136.4z"}),(0,l.jsx)("path",{className:"st0",d:"M22.9,129.5l3.4-2.1l1,1.6l-8.1,5.1l-2.1-3.3c-1-1.5-0.9-3.1,0.6-4c1.1-0.7,2-0.4,2.7,0.1     c-0.2-1,0.3-1.7,1.3-2.3l0.2-0.1c0.7-0.4,1.4-0.9,1.8-1.3l1,1.6c-0.3,0.3-0.8,0.7-1.8,1.3l-0.2,0.1c-0.9,0.6-1,1.1-0.4,2.2     L22.9,129.5z M21.6,130.3l-0.8-1.2c-0.5-0.8-1.1-1.3-2-0.7c-0.8,0.5-0.7,1.2-0.3,1.9l0.9,1.5L21.6,130.3z"}),(0,l.jsx)("path",{className:"st0",d:"M13.1,111c2.6-1,5.1-0.5,6.2,2.3c1,2.8-0.6,4.8-3.2,5.7c-2.2,0.8-5,0.5-6.1-2.4C9,114,10.7,111.9,13.1,111z     M15.4,117.2c1.8-0.7,2.9-1.9,2.4-3.3c-0.6-1.6-2.1-1.6-4-0.9c-1.7,0.6-2.9,1.7-2.3,3.3C12.1,117.7,13.7,117.8,15.4,117.2z"}),(0,l.jsx)("path",{className:"st0",d:"M6.5,104.4l-0.3-1.9l7.9-1.4l-0.7-4.2l1.6-0.1l1.1,5.9L6.5,104.4z"}),(0,l.jsx)("path",{className:"st0",d:"M6.8,78.9l-0.3,2.6l-1.6-0.2l0.8-7.1l1.6,0.2L7,76.9l7.9,0.9l-0.2,2L6.8,78.9z"}),(0,l.jsx)("path",{className:"st0",d:"M14.3,59.7c2.6,0.8,4.4,2.7,3.5,5.6c-0.9,2.8-3.4,3.4-6,2.6c-2.3-0.7-4.3-2.7-3.4-5.6     C9.2,59.6,11.8,59,14.3,59.7z M12.4,66c1.8,0.6,3.5,0.3,4-1.2c0.5-1.6-0.7-2.6-2.6-3.2c-1.7-0.5-3.4-0.4-3.9,1.2     C9.4,64.4,10.6,65.5,12.4,66z"}),(0,l.jsx)("path",{className:"st0",d:"M13.2,50.4l1.7-3.1c0.9-1.6,2.4-2.5,4.1-1.6c1.8,0.9,2,2.7,1,4.6l-0.7,1.2l3.3,1.8L21.6,55L13.2,50.4z     M18,50.8l0.6-1.1c0.5-0.9,0.5-1.7-0.5-2.2c-0.8-0.5-1.5-0.1-2,0.8l-0.6,1.2L18,50.8z"}),(0,l.jsx)("path",{className:"st0",d:"M33.3,31.3l1.1,1.1l-2.5,2.6l-1.1-1.1L33.3,31.3z"})]})]}),(0,l.jsx)(i.G,{icon:o.onQ,className:"fa-icon"})]})},x=function(e){let{className:t,...s}=e;return(0,l.jsxs)("h5",{className:(0,c.gU)(t),...s,children:[new Date().getFullYear()," \xa9 bybernardo"]})},p=function(e){let{className:t}=e;return(0,l.jsx)("footer",{className:(0,c.gU)("footer p-relative",t),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"footer-container",children:(0,l.jsxs)("div",{className:"d-flex align-items-center h-100",children:[(0,l.jsx)("div",{className:"column-left",children:(0,l.jsx)(r,{})}),(0,l.jsx)(m,{}),(0,l.jsx)("div",{className:"column-right",children:(0,l.jsx)(x,{})})]})})})})}},2643:function(e,t,s){var l=s(5893),a=s(9735);t.Z=function(e){let{className:t,rightPosition:s}=e;return(0,l.jsx)("div",{className:(0,a.gU)("bg-circle-dotted",s&&"bg-circle-dotted-right",t),style:{backgroundImage:"url(/img/circle-dotted.png)"}})}},3233:function(e,t,s){var l=s(7297),a=s(5893),c=s(9521),n=s(9735);function r(){let e=(0,l.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 1.2px;\n  word-spacing: 2px;\n\n  span {\n    margin-bottom: 8px;\n  }\n\n  .post-date, .post-cat {\n    display: inline-block\n  }\n\n  .post-date {\n    padding-right: 20px;\n  }\n\n  .post-cat span {\n\n    &:not(:first-child):before {\n      content: attr(data-separate);\n    }\n  }\n\n"]);return r=function(){return e},e}let i=c.ZP.span.withConfig({componentId:"sc-2f071ab4-0"})(r());t.Z=function(e){let{date:t=!1,className:s=null,category:l,separate:c=null}=e;return(0,a.jsxs)(i,{className:(0,n.gU)("post-info",s),children:[t&&(0,a.jsxs)("span",{className:"post-date",children:[t," "]}),l&&(0,a.jsx)("div",{className:"metas",children:"object"==typeof l?l.map((e,t)=>(0,a.jsx)("span",{"data-separate":c,children:e},t)):(0,a.jsx)("span",{children:l})})]})}},9849:function(e,t,s){var l=s(5893),a=s(9735),c=s(6878);s(3007);var n=s(242);s(7294),t.Z=function(e){let{className:t="",...s}=e;return(0,l.jsx)("div",{className:(0,a.gU)("section-padding",t),...s,children:(0,l.jsx)(c.Z,{col:2,colTablet:1,children:(0,l.jsx)(n.Z,{className:"align-self-center"})})})}},6331:function(e,t,s){var l=s(5893),a=s(9735),c=s(7091),n=s(2643);let r={title:"Let's work together",buttonText:"Contact me"};t.Z=function(e){let{className:t,...s}=e;return(0,l.jsxs)("section",{className:(0,a.gU)("next-page p-relative d-flex align-items-center",t),...s,children:[(0,l.jsx)(n.Z,{}),(0,l.jsx)(n.Z,{rightPosition:!0}),(0,l.jsx)("div",{className:"container w-100",children:(0,l.jsxs)("div",{className:"c-wrapper d-flex justify-content-between",children:[(0,l.jsx)("div",{className:"d-flex flex-column",children:(0,l.jsx)("h2",{className:"section-title max-w750 mt-15",children:r.title})}),(0,l.jsx)("div",{className:"button-box d-flex justify-content-end align-items-center",children:(0,l.jsx)(c.Z,{href:"/contact",className:"mr-15 line-head",borderStyle:"border-color-heading-color",borderRadius:!0,transitionPage:{title:r.buttonText},children:r.buttonText})})]})})]})}},2665:function(e,t,s){s.d(t,{Np:function(){return c},Tf:function(){return a}});let l=[{id:1,title:"Extreme Athleticism Is the New Midlife Crisis",slug:"single-blog",author:"Dsn Grid",date:"March , 17th 2020",category:["Lifestyle"],description:"Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",src:"/img/blog/1.jpg",overlay:4},{id:2,title:"The Day I Lost My Child in Charles de Gaulle Airport",slug:"single-blog",author:"Dsn Grid",date:"March , 17th 2020",category:["Travel"],description:"Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",src:"/img/blog/2.jpg",overlay:4},{id:3,title:"Relationships Aren’t Easy, But They’re Worth It",slug:"single-blog",author:"Dsn Grid",date:"March , 17th 2020",category:["Health"],description:"Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",src:"/img/blog/3.jpg",overlay:4},{id:4,title:"Extreme Athleticism Is the New Midlife Crisis",slug:"single-blog",author:"Dsn Grid",date:"March , 17th 2020",category:["Lifestyle"],description:"Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",src:"/img/blog/4.jpg",overlay:4},{id:5,title:"The Day I Lost My Child in Charles de Gaulle Airport",slug:"single-blog",author:"Dsn Grid",date:"March , 17th 2020",category:["Travel"],description:"Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",src:"/img/blog/5.jpg",overlay:4},{id:6,title:"Relationships Aren’t Easy, But They’re Worth It",slug:"single-blog",author:"Dsn Grid",date:"March , 17th 2020",category:["Health"],description:"Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",src:"/img/blog/6.jpg",overlay:4}],a=()=>l,c=e=>e?e.slug&&"/"+e.slug:""}}]);