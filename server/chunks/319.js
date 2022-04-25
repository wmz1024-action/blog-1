"use strict";
exports.id = 319;
exports.ids = [319];
exports.modules = {

/***/ 218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Nav = ({ children , ...prop })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "nav-line",
        ...prop,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "app-title",
                children: "Willie's blog"
            }),
            children
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);


/***/ }),

/***/ 9181:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ getAllTags)
/* harmony export */ });
/* harmony import */ var _lib_get_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4036);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_get_posts__WEBPACK_IMPORTED_MODULE_0__]);
_lib_get_posts__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getAllTags = (limit)=>{
    const posts = (0,_lib_get_posts__WEBPACK_IMPORTED_MODULE_0__/* .getPostsFrontMatter */ .fJ)();
    const tagsWithPosts = posts.reduce((acc, post)=>{
        var ref;
        (ref = post.tags) === null || ref === void 0 ? void 0 : ref.forEach((t)=>{
            if (!acc.has(t)) {
                acc.set(t, new Array());
            }
            acc.get(t).push(post);
        });
        return acc;
    }, new Map());
    const sortedAndSliced = Array.from(tagsWithPosts).map(([key, value])=>{
        value.sort((a, b)=>(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(b.date).getTime() - (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(a.date).getTime()
        );
        if (limit) {
            return [
                key,
                value.slice(0, limit)
            ];
        } else {
            return [
                key,
                value
            ];
        }
    });
    return new Map(sortedAndSliced);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;