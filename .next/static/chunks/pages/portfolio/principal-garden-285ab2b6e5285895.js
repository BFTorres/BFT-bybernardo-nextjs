(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6695],{5214:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/principal-garden",function(){return r(5606)}])},2055:function(e,t,r){"use strict";var n=r(5893),s=r(7294),i=r(990),a=r(4425);function c(e){let{children:t,from:r,to:c,ease:l,start:o,end:d,scrub:p,markers:g,stagger:u,mobile:h,tablet:m}=e,[j,f]=(0,a.S5)();return(0,s.useEffect)(()=>{if(!j.current||!h&&window.innerWidth<=767||!m&&window.innerWidth<=991&&window.innerWidth>767)return;let e=i.p8.effects.moveSection(j.current,{from:r,to:{stagger:u,...c},ease:l,start:o,end:d,scrub:p,markers:g});return()=>{e.kill()}},[j,r,c,l,o,d,p,g,u,h,m]),(0,n.jsx)(s.Fragment,{children:"function"==typeof t?t(f):t})}c.defaultProps={from:{y:0},to:{y:-100},ease:"none",start:"100%",end:"0%",scrub:!0,markers:!1,stagger:null,mobile:!0,tablet:!0},t.Z=c},6964:function(e,t,r){"use strict";var n=r(5893),s=r(7294),i=r(990),a=r(6546),c=r(5675),l=r.n(c),o=r(9735);function d(e){let{speed:t,parallax:r,overlay:c,height:d,heightTable:p,heightMobile:g,triggerHook:u,animationActive:h,caption:m,className:j,asBackground:f,parallaxFrom:x,...b}=e,v=(0,s.useRef)(null),N=(0,s.useRef)(null),[y,w]=(0,s.useState)("");return(0,s.useEffect)(()=>{if(!b.src)return;let e={current:v.current.querySelector(".cover-bg-img")};"bottom"===u&&i.p8.set(e.current,{height:"+=".concat(t,"%"),yPercent:"-=".concat(t)}),"center"===u&&i.p8.set(e.current,{height:"+=".concat(t/2,"%"),yPercent:"-=".concat(t/2)}),x&&i.p8.set(e.current,x),h&&(N.current=a.ScrollTrigger.create({trigger:v.current,start:"top bottom",onEnter:e=>w("dsn-active")}));let n=i.p8.to(e.current,{...r,yPercent:"top"===u?t:0,force3D:!0,ease:"none",scrollTrigger:{trigger:v.current,start:"top ".concat(u),scrub:!0}});return()=>{var t;i.p8.set(e.current,{clearProps:"height,yPercent"}),n.scrollTrigger.kill(),n.kill(),null===(t=N.current)||void 0===t||t.kill()}},[]),b.src&&(0,n.jsxs)("div",{className:(0,o.gU)("dsn-parallax-img",h&&"dsn-animate",y,f&&"dsn-bg-parallax",j),"data-overlay":c,ref:v,style:{"--height":d,"--height-table":p,"--height-mobile":g},children:[(0,n.jsx)(l(),{className:"cover-bg-img p-absolute",fill:!0,alt:"",...b}),m&&(0,n.jsx)("div",{className:"cap",children:(0,n.jsx)("span",{children:m})})]})}d.defaultProps={height:"100vh",heightTable:"80vh",heightMobile:"50vh",overlay:0,triggerHook:"bottom",animationActive:!0,speed:30,parallax:{}},t.Z=d},3042:function(e,t,r){"use strict";var n=r(5893);r(7294);var s=r(9735);t.Z=function(e){let{className:t,classTitle:r,tag:i="h2",defaultSpace:a=!0,children:c,description:l,classDesc:o,classDesInner:d,dirDescription:p="before"}=e,g=()=>l&&(0,n.jsx)("p",{className:(0,s.gU)("sub-heading",o),children:(0,n.jsx)("span",{className:(0,s.gU)(d),children:l})});return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:(0,s.gU)("title-heading d-flex flex-column",t,a&&"mb-70"),children:(0,n.jsxs)("div",{children:["before"===p&&(0,n.jsx)(g,{}),c&&(0,n.jsx)(i,{className:(0,s.gU)("section-title  title-cap",r),children:"function"==typeof c?c():c}),"after"===p&&(0,n.jsx)(g,{})]})})})}},388:function(e,t,r){"use strict";var n=r(5893),s=r(7294),i=r(2055),a=r(9735);function c(e){let{bgColor:t,free:r,className:c,children:l,...o}=e,d=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e=d.current.closest(".section-margin");e&&e.classList.add("section-margin-move")},[]),(0,n.jsx)(i.Z,{...o,children:e=>(0,n.jsx)("div",{className:(0,a.gU)("dsn-move-section",!r&&"p-relative",c),ref:e,children:(0,n.jsx)("div",{className:"inner-box background-".concat(t),ref:d,children:l})})})}c.defaultProps={bgColor:"section",free:!0,from:{y:100},to:{y:-100},ease:"none",start:"100%",end:"0%",scrub:!0,markers:!1,stagger:null,tablet:!1,mobile:!1},t.Z=c},5606:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(5893),s=r(7705),i=r(3042),a=r(6964),c=r(7294),l=r(9735),o=r(2689),d=r(5675),p=r.n(d);function g(e){let{images:t,className:r,children:s,options:i,...a}=e,d=(0,c.useRef)(),p="_"+t.length;return(0,c.useEffect)(()=>{let e=fjGallery(d.current,{itemSelector:".fj-gallery-item",...a});return o.KR.bind("[data-fancybox]",i),()=>{fjGallery(e,"destroy"),o.KR.destroy()}},[]),(0,n.jsxs)("div",{className:(0,l.gU)("fj-gallery",r),ref:d,children:[t&&t.map((e,t)=>{let{src:r,alt:s,caption:i,groupPopup:a}=e;return(0,n.jsx)(u,{src:r,alt:s,caption:i,groupPopup:a||p},t)}),s]})}function u(e){let{src:t,alt:r,caption:s,groupPopup:i}=e;return(0,n.jsxs)("div",{className:"fj-gallery-item","data-src":t,"data-caption":s,"data-fancybox":i||"",children:[(0,n.jsx)(p(),{src:t,alt:r||"",width:730,height:411}),s&&(0,n.jsx)("div",{className:"cap",children:(0,n.jsx)("span",{children:s})})]})}g.defaultProps={gutter:15},g.item=u;var h=r(388),m=r(6878),j=r(1725),f=r(2536),x=r(4557),b=r(3880),v=function(){let e=(0,f.x6)("principal-garden");return(0,n.jsxs)(j.Z,{children:[(0,n.jsx)(x.Z,{className:"dsn-container",alignItems:"end",heroContent:e,overlay:e.overlay}),(0,n.jsx)("section",{className:"intro-project container section-margin",children:(0,n.jsxs)(m.Z,{customGrid:{desktop:"40% 60%"},children:[(0,n.jsxs)("div",{className:"intro-project-left",children:[(0,n.jsx)("h4",{className:"title-block text-uppercase mb-20",children:"Project"}),(0,n.jsxs)("ul",{className:"intro-project-list",children:[(0,n.jsxs)("li",{className:"p-relative",children:[(0,n.jsx)("strong",{children:"Agency"}),"Read Full Article"]}),(0,n.jsxs)("li",{className:"p-relative",children:[(0,n.jsx)("strong",{children:"creating"}),"932 Designs"]}),(0,n.jsxs)("li",{className:"p-relative",children:[(0,n.jsx)("strong",{children:" Published"}),"June 5th 2020"]})]})]}),(0,n.jsxs)("div",{className:"intro-project-right",children:[(0,n.jsx)("h4",{className:"title-block text-uppercase mb-20",children:"info"}),(0,n.jsx)("p",{className:"intro-project-description",children:"Nestled in a quiet enclave along the recreational waterway of Alexandra Canal, on the fringe of the embassy district, Principal Garden reflects a new daring in residential design thinking that purposefully seeks to maximise unbuilt space amid the density of urban Singapore."}),(0,n.jsxs)("div",{className:"intro-project-cat mt-30",children:[(0,n.jsx)("span",{className:"cat-item",children:"Architecture "}),(0,n.jsx)("span",{className:"cat-item",children:"Photography"}),(0,n.jsx)("span",{className:"cat-item",children:"nterior Design"})]}),(0,n.jsx)(s.Z,{href:"https://www.behance.net/gallery/98338319/Principal-Garden-I",target:"_blank",className:"mt-30",children:"VISIT PROJECT"})]})]})}),(0,n.jsx)(g,{images:[{src:"/img/project/project4/3.jpg",caption:"Web Design"},{src:"/img/project/project4/4.jpg",caption:"Web Design"},{src:"/img/project/project4/5.jpg",caption:"Web Design"},{src:"/img/project/project4/6.jpg",caption:"Web Design"},{src:"/img/project/project4/7.jpg",caption:"Web Design"},{src:"/img/project/project4/8.jpg",caption:"Web Design"},{src:"/img/project/project4/9.jpg",caption:"Web Design"},{src:"/img/project/project4/10.jpg",caption:"Web Design"},{src:"/img/project/project4/11.jpg",caption:"Web Design"}],className:"section-margin"}),(0,n.jsxs)("div",{className:"p-relative section-margin v-light",children:[(0,n.jsx)(a.Z,{src:"/img/project/project4/12.jpg",overlay:2,alt:""}),(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(i.Z,{className:"align-items-start mb-30",defaultSpace:!1,children:"A simple space for a wonderful family."}),(0,n.jsx)("p",{className:"mb-10",children:"Nestled in a quiet enclave along the recreational waterway of Alexandra Canal, on the fringe of the embassy district"}),(0,n.jsx)("p",{children:"Principal Garden reflects a new daring in residential design thinking that purposefully seeks to maximise unbuilt space amid the density of urban Singapore."})]})]}),(0,n.jsx)(b.Z,{heroContent:(0,f.x6)("small-silver-car"),number:5})]})}}},function(e){e.O(0,[7948,6568,2689,874,9774,2888,179],function(){return e(e.s=5214)}),_N_E=e.O()}]);