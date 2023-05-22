"use strict";
exports.id = 7011;
exports.ids = [7011];
exports.modules = {

/***/ 7011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports splittingChar, splittingWords, splittingLine, splittingItems, splittingGrid */
function spaceHtml(target, whitespace) {
    const space = target.querySelectorAll(".whitespace");
    const char = target.querySelectorAll(".char");
    if (space.length && whitespace) space.forEach((item)=>item.outerHTML = " ");
    if (char.length) char.forEach((item, index)=>{
        item.classList.add("dsn-chars-wrapper");
        item.style.setProperty("--char-dsn-index", index);
    });
    ;
}
const splittingChar = (target, whitespace = true)=>{
    const el = Splitting({
        target: target,
        whitespace: false
    })[0];
    spaceHtml(target, whitespace);
    return el;
};
const splittingWords = (target, whitespace = true)=>{
    const el = Splitting({
        target: target,
        by: "words"
    })[0];
    spaceHtml(target, whitespace);
    return el;
};
const splittingLine = (target, whitespace = true)=>{
    const el = Splitting({
        target: target,
        by: "lines"
    })[0];
    spaceHtml(target, whitespace);
    return el;
};
const splittingItems = (target, matching = null)=>{
    return Splitting({
        target,
        by: "items",
        matching
    });
};
const splittingGrid = (target, matching = null)=>{
    return Splitting({
        target,
        by: "grid",
        matching
    });
};
const dsnSplitting = {
    Char: splittingChar,
    Words: splittingWords,
    Lines: splittingLine,
    Items: splittingItems,
    Grid: splittingGrid
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dsnSplitting);


/***/ })

};
;