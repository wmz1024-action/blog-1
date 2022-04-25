"use strict";
(() => {
var exports = {};
exports.id = 508;
exports.ids = [508];
exports.modules = {

/***/ 6744:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9181);
/* harmony import */ var _components_PostsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6342);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2295);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(218);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1794);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_tags__WEBPACK_IMPORTED_MODULE_2__]);
_lib_tags__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const TagPage = ({ tag , posts  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        title: tag,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: "/",
                    children: "Blog Posts"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                children: [
                    'Tag "',
                    tag,
                    '"'
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
                posts: posts
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
};
const getStaticProps = async ({ params  })=>{
    const tag = params.tag;
    const tagsWithPosts = (0,_lib_tags__WEBPACK_IMPORTED_MODULE_2__/* .getAllTags */ .Y)();
    return {
        props: {
            tag: tag,
            posts: tagsWithPosts.get(tag)
        }
    };
};
const getStaticPaths = async ()=>{
    const tagsWithPosts = (0,_lib_tags__WEBPACK_IMPORTED_MODULE_2__/* .getAllTags */ .Y)();
    return {
        paths: [
            ...tagsWithPosts.keys()
        ].map((t)=>({
                params: {
                    tag: t
                }
            })
        ),
        fallback: false
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ 6488:
/***/ ((module) => {

module.exports = require("rehype-img-size");

/***/ }),

/***/ 2582:
/***/ ((module) => {

module.exports = require("remark-capitalize");

/***/ }),

/***/ 7275:
/***/ ((module) => {

module.exports = require("remark-code-titles");

/***/ }),

/***/ 1321:
/***/ ((module) => {

module.exports = require("typographic-apostrophes");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("typographic-apostrophes-for-possessive-plurals");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("typographic-arrows");

/***/ }),

/***/ 9519:
/***/ ((module) => {

module.exports = require("typographic-copyright");

/***/ }),

/***/ 9464:
/***/ ((module) => {

module.exports = require("typographic-ellipses");

/***/ }),

/***/ 4882:
/***/ ((module) => {

module.exports = require("typographic-em-dashes");

/***/ }),

/***/ 7774:
/***/ ((module) => {

module.exports = require("typographic-en-dashes");

/***/ }),

/***/ 9047:
/***/ ((module) => {

module.exports = require("typographic-math-symbols");

/***/ }),

/***/ 6252:
/***/ ((module) => {

module.exports = require("typographic-quotes");

/***/ }),

/***/ 6444:
/***/ ((module) => {

module.exports = require("typographic-registered-trademark");

/***/ }),

/***/ 9839:
/***/ ((module) => {

module.exports = require("typographic-single-spaces");

/***/ }),

/***/ 6438:
/***/ ((module) => {

module.exports = require("typographic-trademark");

/***/ }),

/***/ 4818:
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = import("rehype-autolink-headings");;

/***/ }),

/***/ 4921:
/***/ ((module) => {

module.exports = import("rehype-highlight");;

/***/ }),

/***/ 9521:
/***/ ((module) => {

module.exports = import("rehype-katex");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

module.exports = import("rehype-slug");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 9832:
/***/ ((module) => {

module.exports = import("remark-math");;

/***/ }),

/***/ 6688:
/***/ ((module) => {

module.exports = import("remark-parse");;

/***/ }),

/***/ 1827:
/***/ ((module) => {

module.exports = import("remark-textr");;

/***/ }),

/***/ 17:
/***/ ((module) => {

module.exports = import("remark-toc");;

/***/ }),

/***/ 8438:
/***/ ((module) => {

module.exports = import("remark-unwrap-images");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,461,342,319], () => (__webpack_exec__(6744)));
module.exports = __webpack_exports__;

})();