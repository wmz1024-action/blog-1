"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
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

/***/ 2710:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ generateMainFeeds)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var feed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4582);
/* harmony import */ var feed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(feed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3073);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8684);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4090);
/* harmony import */ var title__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(title__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9961);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var string_strip_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1127);
/* harmony import */ var _lib_get_posts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4036);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote__WEBPACK_IMPORTED_MODULE_7__, string_strip_html__WEBPACK_IMPORTED_MODULE_9__, _lib_get_posts__WEBPACK_IMPORTED_MODULE_10__]);
([next_mdx_remote__WEBPACK_IMPORTED_MODULE_7__, string_strip_html__WEBPACK_IMPORTED_MODULE_9__, _lib_get_posts__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const buildFeed = ()=>{
    return new feed__WEBPACK_IMPORTED_MODULE_1__.Feed({
        title: "Willie",
        description: "RSS for blog",
        id: "https://www.wll.moe",
        link: "https://www.wll.moe",
        language: "en",
        copyright: _lib_config__WEBPACK_IMPORTED_MODULE_2__/* .copyright */ .iF,
        feedLinks: {
            json: `${_lib_config__WEBPACK_IMPORTED_MODULE_2__/* .baseUrl */ .FH}/feeds/feed.json`,
            atom: `${_lib_config__WEBPACK_IMPORTED_MODULE_2__/* .baseUrl */ .FH}/feeds/atom.xml`,
            rss2: `${_lib_config__WEBPACK_IMPORTED_MODULE_2__/* .baseUrl */ .FH}/feeds/feed.xml`
        }
    });
};
const makeItem = (post)=>{
    const url = `${_lib_config__WEBPACK_IMPORTED_MODULE_2__/* .baseUrl */ .FH}/posts/${post.frontMatter.slug}`;
    const htmlContent = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default().renderToStaticMarkup(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_7__.MDXRemote, {
        ...post.mdxSource
    })).replace(/href="\/#/g, `href="${url}#`).replace(/href="\//g, `href="${_lib_config__WEBPACK_IMPORTED_MODULE_2__/* .baseUrl */ .FH}/`).replace(/src="\//g, `src="${_lib_config__WEBPACK_IMPORTED_MODULE_2__/* .baseUrl */ .FH}/`);
    const cleanHtmlContent = (0,string_strip_html__WEBPACK_IMPORTED_MODULE_9__.stripHtml)(htmlContent, {
        onlyStripTags: [
            "script",
            "style"
        ],
        stripTogetherWithTheirContents: [
            "script",
            "style"
        ]
    }).result;
    return {
        title: title__WEBPACK_IMPORTED_MODULE_5___default()(post.frontMatter.title),
        link: url,
        id: url,
        date: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.parseISO)(post.frontMatter.date),
        description: post.frontMatter.description,
        content: cleanHtmlContent
    };
};
const generateMainFeeds = async ()=>{
    const feed = buildFeed();
    const posts = await (0,_lib_get_posts__WEBPACK_IMPORTED_MODULE_10__/* .getPostsWithContent */ .$e)();
    posts.forEach((post)=>feed.addItem(makeItem(post))
    );
    fs__WEBPACK_IMPORTED_MODULE_3___default().mkdirSync("public/feeds/", {
        recursive: true
    });
    fs__WEBPACK_IMPORTED_MODULE_3___default().writeFileSync("public/feeds/feed.xml", feed.rss2());
    fs__WEBPACK_IMPORTED_MODULE_3___default().writeFileSync("public/feeds/feed.json", feed.json1());
    fs__WEBPACK_IMPORTED_MODULE_3___default().writeFileSync("public/feeds/atom.xml", feed.atom1());
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (buildFeed)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_get_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4036);
/* harmony import */ var _components_PostsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6342);
/* harmony import */ var _components_layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2295);
/* harmony import */ var _lib_feeds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2710);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(218);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1794);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_get_posts__WEBPACK_IMPORTED_MODULE_2__, _lib_feeds__WEBPACK_IMPORTED_MODULE_5__]);
([_lib_get_posts__WEBPACK_IMPORTED_MODULE_2__, _lib_feeds__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Home = ({ allPosts  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: "Blog Index",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                    href: "tags",
                    children: "All Tags"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    posts: allPosts
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
        ]
    })
;
const getStaticProps = ()=>{
    (0,_lib_feeds__WEBPACK_IMPORTED_MODULE_5__/* .generateMainFeeds */ .j)();
    const allPosts = (0,_lib_get_posts__WEBPACK_IMPORTED_MODULE_2__/* .getPostsFrontMatter */ .fJ)();
    return {
        props: {
            allPosts
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 4582:
/***/ ((module) => {

module.exports = require("feed");

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

/***/ 8684:
/***/ ((module) => {

module.exports = require("react-dom/server");

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

/***/ 4090:
/***/ ((module) => {

module.exports = require("title");

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

/***/ 9961:
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

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

/***/ 1127:
/***/ ((module) => {

module.exports = import("string-strip-html");;

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
var __webpack_exports__ = __webpack_require__.X(0, [895,664,461,342], () => (__webpack_exec__(5970)));
module.exports = __webpack_exports__;

})();