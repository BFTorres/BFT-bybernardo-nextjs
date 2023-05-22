"use strict";
exports.id = 2536;
exports.ids = [2536];
exports.modules = {

/***/ 2536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jq": () => (/* binding */ getPortfolioData),
/* harmony export */   "p8": () => (/* binding */ getPortfolioLink),
/* harmony export */   "x6": () => (/* binding */ getPortfolioItem)
/* harmony export */ });
const data = [
    {
        id: 1,
        title: "BMW Group",
        slug: "bmw-group",
        category: [
            "FinTech",
            "Frontend",
            "Design"
        ],
        description: "FinTech application for the BMW Group (BMW, Rolls Royce, Mini).",
        src: "/img/project/project1/pexels-brandin-t-13182965.jpg",
        overlay: 6
    },
    {
        id: 2,
        title: "Mercedes Benz",
        slug: "mercedes-benz",
        src: "/img/project/project3/1.jpg",
        category: [
            "FinTech",
            "Frontend",
            "Design"
        ],
        description: "FinTech application for Mercedes Benz.",
        overlay: 6
    },
    {
        id: 3,
        title: "Thyssenkrupp & TKE",
        slug: "thyssenkrupp",
        src: "/img/project/project2/ant-rozetsky-SLIFI67jv5k-unsplash.jpg",
        category: [
            "FinTech",
            "Frontend",
            "Design"
        ],
        description: "FinTech application for Thyssenkrupp and TKE.",
        overlay: 6
    },
    {
        id: 4,
        title: "Lufthansa",
        slug: "lufthansa",
        category: [
            "FinTech",
            "Frontend",
            "Design"
        ],
        src: "/img/project/project4/plane-gff4c52fb7_1920.jpg",
        description: "FinTech application for Lufthansa.",
        overlay: 2
    } /* ,
    {
        id: 5,
        title: "InCapSolution",
        slug: 'incapsolution',
        src: '/img/project/project5/1.jpg',

        category: ['Medical Research', 'Frontend', 'Design'],
        description: 'Web application & corporate identity for a medical research statrtup based in Germany.',
        overlay: 5
    },
    {
        id: 6,
        title: "KRONOS",
        slug: 'kronos',
        category: ['Ironhack', 'Full Stack', 'Hotel Industry'],
        src: '/img/project/project6/1.jpg',
        description: 'Task Management System for the Hotel industry. Ironhack project module 2.',
        overlay: 4
    } */ 
];
const getPortfolioData = ()=>data;
const getPortfolioItem = (value, whereName = "slug")=>{
    return data.find((item)=>item[whereName] === value);
};
const getPortfolioLink = (item)=>{
    if (item) return item.slug && "/portfolio/" + item.slug;
    return "";
};


/***/ })

};
;