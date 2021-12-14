(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9867:
/***/ ((module) => {

// Exports
module.exports = {
	"academyCard": "AcademyCard_academyCard__BXUfN"
};


/***/ }),

/***/ 7697:
/***/ ((module) => {

// Exports
module.exports = {
	"whiteBack": "HomePage_whiteBack__3lFI4",
	"heroDiv": "HomePage_heroDiv__c4S5A",
	"availableAcademiesTitle": "HomePage_availableAcademiesTitle__3FlaE",
	"academyCardContainer": "HomePage_academyCardContainer__2ZG5-",
	"academyRates": "HomePage_academyRates__1KGbQ",
	"academyRate": "HomePage_academyRate__wPP0m",
	"contentContainer": "HomePage_contentContainer__1R2Zh"
};


/***/ }),

/***/ 7439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/AcademyCard/AcademyCard.module.scss
var AcademyCard_module = __webpack_require__(9867);
var AcademyCard_module_default = /*#__PURE__*/__webpack_require__.n(AcademyCard_module);
;// CONCATENATED MODULE: ./components/AcademyCard/AcademyCard.js



const AcademyCard = (props)=>{
    const { academy  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: `/${academy.id}/${academy.study_programs[0].id}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (AcademyCard_module_default()).academyCard,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: (AcademyCard_module_default()).academyIcon,
                    alt: academy.id,
                    src: `/img/cards-icons/color/${academy.id}.png`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: academy.title.replace("Academy For ", "")
                })
            ]
        })
    }, academy.id));
};
/* harmony default export */ const AcademyCard_AcademyCard = (AcademyCard);

// EXTERNAL MODULE: ./styles/HomePage.module.scss
var HomePage_module = __webpack_require__(7697);
var HomePage_module_default = /*#__PURE__*/__webpack_require__.n(HomePage_module);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./util/webDevDataMapper.js
var webDevDataMapper = __webpack_require__(6665);
;// CONCATENATED MODULE: ./pages/index.js







function HomePage(props) {
    const seavusInfo = props.seavusInfo;
    const academies = props.data.academies;
    console.log(academies);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        href: "/img/sedc-logo.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "SEDC - Academies"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (HomePage_module_default()).whiteBack,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (HomePage_module_default()).heroDiv,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: seavusInfo.academy_main_text
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: seavusInfo.academy_sub_text
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (HomePage_module_default()).contentContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (HomePage_module_default()).academyRates,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (HomePage_module_default()).academyRate,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: seavusInfo.partner_companies_count
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: seavusInfo.partner_companies_count_description
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (HomePage_module_default()).academyRate,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: seavusInfo.student_employment_rate
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: seavusInfo.student_employment_rate_description
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (HomePage_module_default()).academyRate,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: seavusInfo.student_projects_count
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: seavusInfo.student_projects_count_description
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (HomePage_module_default()).availableAcademiesTitle,
                                children: "Available academies"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (HomePage_module_default()).academyCardContainer,
                                children: academies.map((academy)=>/*#__PURE__*/ jsx_runtime_.jsx(AcademyCard_AcademyCard, {
                                        academy: academy
                                    }, academy.id)
                                )
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (HomePage_module_default()).copyrightTextContainer
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
async function getStaticProps() {
    const academiesResponse = await external_axios_default().get("https://vlp-data.herokuapp.com/academies");
    const frontPageInfoResponse = await external_axios_default().get("https://dev.sedc.mk/wp-json/wp/v2/pages/649");
    const webDevResponse = await external_axios_default().get("https://dev.sedc.mk/wp-json/wp/v2/pages/4167");
    const webDevData = webDevResponse === null || webDevResponse === void 0 ? void 0 : webDevResponse.data;
    const mappedData = (0,webDevDataMapper/* webDevDataMapper */.a)(webDevData.ACF);
    console.log("shit is broken");
    console.log(mappedData);
    return {
        props: {
            seavusInfo: frontPageInfoResponse.data.ACF,
            data: {
                academies: [
                    {
                        ...mappedData
                    }
                ]
            }
        }
    };
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,665], () => (__webpack_exec__(7439)));
module.exports = __webpack_exports__;

})();