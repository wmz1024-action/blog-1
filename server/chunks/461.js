"use strict";
exports.id = 461;
exports.ids = [461];
exports.modules = {

/***/ 1794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const Footer = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
        className: "footer",
        ...props,
        children: [
            "\xa9 Willie ",
            new Date().getFullYear(),
            ".",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/feeds/atom.xml",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: "RSS"
                })
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 2295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/lib/config.ts
var config = __webpack_require__(3073);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/layouts/Meta.tsx





const defaultMeta = {
    title: "Willie&quot;s blog",
    description: "Willie&quot;s blog"
};
const Meta = (metaProps)=>{
    const router = (0,router_.useRouter)();
    const meta = {
        ...defaultMeta,
        ...metaProps
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: meta.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "follow, index"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: meta.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: `${config/* baseUrl */.FH}${router.asPath}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "canonical",
                href: `${config/* baseUrl */.FH}${router.asPath}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: meta.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: meta.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: meta.title
            }),
            meta.date && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "article:published_time",
                content: meta.date
            })
        ]
    });
};
/* harmony default export */ const layouts_Meta = (Meta);

;// CONCATENATED MODULE: ./src/components/layouts/index.tsx



const Layout = ({ children , ...meta })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layouts_Meta, {
                ...meta
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("article", {
                className: "container prose",
                children: children
            })
        ]
    });
};
/* harmony default export */ const layouts = (Layout);


/***/ }),

/***/ 3073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FH": () => (/* binding */ baseUrl),
/* harmony export */   "iF": () => (/* binding */ copyright)
/* harmony export */ });
/* unused harmony export domain */
const domain = `wll.moe`;
const baseUrl = `https://${domain}`;
const copyright = `Copyright ${new Date().getFullYear()} - Willie`;


/***/ }),

/***/ 3924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j5": () => (/* binding */ contentPath)
/* harmony export */ });
/* unused harmony exports CONTENT_DIR, root */
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

const CONTENT_DIR = "_posts";
const root = process.cwd();
const contentPath = (...pathElements)=>{
    return path__WEBPACK_IMPORTED_MODULE_0___default().join(root, CONTENT_DIR, ...pathElements);
};


/***/ }),

/***/ 4036:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$e": () => (/* binding */ getPostsWithContent),
/* harmony export */   "Jq": () => (/* binding */ getPosts),
/* harmony export */   "fJ": () => (/* binding */ getPostsFrontMatter),
/* harmony export */   "wC": () => (/* binding */ getAndSerializePost)
/* harmony export */ });
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4956);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4636);
/* harmony import */ var _lib_content_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_mdx__WEBPACK_IMPORTED_MODULE_4__]);
_lib_mdx__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const getPost = (slug)=>{
    const postSource = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync((0,_lib_content_utils__WEBPACK_IMPORTED_MODULE_5__/* .contentPath */ .j5)(`${slug}.mdx`), "utf8");
    return gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(postSource);
};
const getAndSerializePost = async (slug)=>{
    const { data , content  } = getPost(slug);
    const { title , date , description , tags  } = data;
    const mdxSource = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(content);
    return {
        mdxSource,
        frontMatter: {
            wordCount: content.split(/\s+/gu).length,
            slug: slug,
            title: title,
            date: date,
            readingTime: reading_time__WEBPACK_IMPORTED_MODULE_2___default()(content).text,
            description: description !== null && description !== void 0 ? description : null,
            tags: tags !== null && tags !== void 0 ? tags : null
        }
    };
};
const getPosts = ()=>fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync((0,_lib_content_utils__WEBPACK_IMPORTED_MODULE_5__/* .contentPath */ .j5)()).map((fileName)=>{
        return {
            fileName,
            slug: fileName.replace(".mdx", "")
        };
    })
;
const getPostsFrontMatter = (limit)=>{
    const posts = getPosts();
    const sortedFrontmatter = posts.map((post)=>{
        const { data  } = getPost(post.slug);
        var _description, _tags;
        return {
            slug: post.slug,
            title: data.title,
            date: data.date,
            description: (_description = data.description) !== null && _description !== void 0 ? _description : null,
            tags: (_tags = data.tags) !== null && _tags !== void 0 ? _tags : null
        };
    }).sort((a, b)=>(0,date_fns__WEBPACK_IMPORTED_MODULE_3__.parseISO)(b.date).getTime() - (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.parseISO)(a.date).getTime()
    );
    if (limit) {
        return sortedFrontmatter.slice(0, limit);
    } else {
        return sortedFrontmatter;
    }
};
const getPostsWithContent = async (limit)=>{
    const posts = getPosts();
    const serializedPosts = await Promise.all(posts.map((p)=>getAndSerializePost(p.slug)
    ));
    serializedPosts.sort((a, b)=>(0,date_fns__WEBPACK_IMPORTED_MODULE_3__.parseISO)(b.frontMatter.date).getTime() - (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.parseISO)(a.frontMatter.date).getTime()
    );
    if (limit) {
        return serializedPosts.slice(0, limit);
    } else {
        return serializedPosts;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4636:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4818);
/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7752);
/* harmony import */ var rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var remark_code_titles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7275);
/* harmony import */ var remark_code_titles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remark_code_titles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark_capitalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2582);
/* harmony import */ var remark_capitalize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_capitalize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remark_textr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1827);
/* harmony import */ var typographic_apostrophes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1321);
/* harmony import */ var typographic_apostrophes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(typographic_apostrophes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var typographic_quotes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6252);
/* harmony import */ var typographic_quotes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(typographic_quotes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var typographic_apostrophes_for_possessive_plurals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1897);
/* harmony import */ var typographic_apostrophes_for_possessive_plurals__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(typographic_apostrophes_for_possessive_plurals__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var typographic_arrows__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2296);
/* harmony import */ var typographic_arrows__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(typographic_arrows__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var typographic_copyright__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9519);
/* harmony import */ var typographic_copyright__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(typographic_copyright__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var typographic_ellipses__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9464);
/* harmony import */ var typographic_ellipses__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(typographic_ellipses__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var typographic_en_dashes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7774);
/* harmony import */ var typographic_en_dashes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(typographic_en_dashes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var typographic_em_dashes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4882);
/* harmony import */ var typographic_em_dashes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(typographic_em_dashes__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var typographic_math_symbols__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9047);
/* harmony import */ var typographic_math_symbols__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(typographic_math_symbols__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var typographic_registered_trademark__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6444);
/* harmony import */ var typographic_registered_trademark__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(typographic_registered_trademark__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var typographic_single_spaces__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9839);
/* harmony import */ var typographic_single_spaces__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(typographic_single_spaces__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var typographic_trademark__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6438);
/* harmony import */ var typographic_trademark__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(typographic_trademark__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var rehype_img_size__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6488);
/* harmony import */ var rehype_img_size__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(rehype_img_size__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var remark_unwrap_images__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8438);
/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9832);
/* harmony import */ var rehype_katex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9521);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6688);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(6809);
/* harmony import */ var rehype_highlight__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(4921);
/* harmony import */ var remark_toc__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(17);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__, rehype_slug__WEBPACK_IMPORTED_MODULE_1__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_2__, remark_textr__WEBPACK_IMPORTED_MODULE_5__, remark_unwrap_images__WEBPACK_IMPORTED_MODULE_19__, remark_math__WEBPACK_IMPORTED_MODULE_20__, rehype_katex__WEBPACK_IMPORTED_MODULE_21__, remark_parse__WEBPACK_IMPORTED_MODULE_22__, remark_gfm__WEBPACK_IMPORTED_MODULE_23__, rehype_highlight__WEBPACK_IMPORTED_MODULE_24__, remark_toc__WEBPACK_IMPORTED_MODULE_25__]);
([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__, rehype_slug__WEBPACK_IMPORTED_MODULE_1__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_2__, remark_textr__WEBPACK_IMPORTED_MODULE_5__, remark_unwrap_images__WEBPACK_IMPORTED_MODULE_19__, remark_math__WEBPACK_IMPORTED_MODULE_20__, rehype_katex__WEBPACK_IMPORTED_MODULE_21__, remark_parse__WEBPACK_IMPORTED_MODULE_22__, remark_gfm__WEBPACK_IMPORTED_MODULE_23__, rehype_highlight__WEBPACK_IMPORTED_MODULE_24__, remark_toc__WEBPACK_IMPORTED_MODULE_25__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


























const serializePost = async (content)=>{
    return await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__.serialize)(content, {
        mdxOptions: {
            remarkPlugins: [
                remark_parse__WEBPACK_IMPORTED_MODULE_22__["default"],
                remark_unwrap_images__WEBPACK_IMPORTED_MODULE_19__["default"],
                (remark_code_titles__WEBPACK_IMPORTED_MODULE_3___default()),
                remark_gfm__WEBPACK_IMPORTED_MODULE_23__["default"],
                remark_math__WEBPACK_IMPORTED_MODULE_20__["default"],
                remark_toc__WEBPACK_IMPORTED_MODULE_25__["default"],
                [
                    (remark_capitalize__WEBPACK_IMPORTED_MODULE_4___default())
                ],
                [
                    remark_textr__WEBPACK_IMPORTED_MODULE_5__["default"],
                    {
                        plugins: [
                            (typographic_apostrophes__WEBPACK_IMPORTED_MODULE_6___default()),
                            (typographic_quotes__WEBPACK_IMPORTED_MODULE_7___default()),
                            (typographic_apostrophes_for_possessive_plurals__WEBPACK_IMPORTED_MODULE_8___default()),
                            (typographic_arrows__WEBPACK_IMPORTED_MODULE_9___default()),
                            (typographic_copyright__WEBPACK_IMPORTED_MODULE_10___default()),
                            (typographic_ellipses__WEBPACK_IMPORTED_MODULE_11___default()),
                            (typographic_en_dashes__WEBPACK_IMPORTED_MODULE_12___default()),
                            (typographic_em_dashes__WEBPACK_IMPORTED_MODULE_13___default()),
                            (typographic_math_symbols__WEBPACK_IMPORTED_MODULE_14___default()),
                            (typographic_registered_trademark__WEBPACK_IMPORTED_MODULE_15___default()),
                            (typographic_single_spaces__WEBPACK_IMPORTED_MODULE_16___default()),
                            (typographic_trademark__WEBPACK_IMPORTED_MODULE_17___default()), 
                        ]
                    }, 
                ], 
            ],
            rehypePlugins: [
                rehype_highlight__WEBPACK_IMPORTED_MODULE_24__["default"],
                rehype_slug__WEBPACK_IMPORTED_MODULE_1__["default"],
                rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_2__["default"],
                rehype_katex__WEBPACK_IMPORTED_MODULE_21__["default"],
                [
                    (rehype_img_size__WEBPACK_IMPORTED_MODULE_18___default()),
                    {
                        dir: "public"
                    }
                ], 
            ]
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serializePost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;