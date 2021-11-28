(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6529:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__3f33N",
	"footer__mainContainer": "Footer_footer__mainContainer__3qSk4",
	"footer__main": "Footer_footer__main__1Medq",
	"footer__logo": "Footer_footer__logo__iMfUk",
	"col": "Footer_col__34gvs",
	"copyrightTextContainer": "Footer_copyrightTextContainer__287dh",
	"col__social": "Footer_col__social__2KV1y",
	"social__footer__li": "Footer_social__footer__li__ANDwP"
};


/***/ }),

/***/ 7557:
/***/ ((module) => {

// Exports
module.exports = {
	"logoContainer": "ComapnyLogo_logoContainer__1v4Eb",
	"logoImage": "ComapnyLogo_logoImage__6HzJt",
	"logoText": "ComapnyLogo_logoText__1DRYU"
};


/***/ }),

/***/ 4307:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__3UZ6j",
	"openDrawer": "Navbar_openDrawer__TzptN",
	"navbar__burgerMenu": "Navbar_navbar__burgerMenu__3YC-2",
	"navbar__nav": "Navbar_navbar__nav__1cKkl",
	"navbar__item": "Navbar_navbar__item__IrnV7",
	"navbar__arrow": "Navbar_navbar__arrow__1sX2q",
	"listedItemContainer": "Navbar_listedItemContainer__YKbok",
	"dropdown": "Navbar_dropdown__1nCl1",
	"scaleDown": "Navbar_scaleDown__2Tqlx"
};


/***/ }),

/***/ 6675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/UI/CompanyLogo/ComapnyLogo.module.scss
var ComapnyLogo_module = __webpack_require__(7557);
var ComapnyLogo_module_default = /*#__PURE__*/__webpack_require__.n(ComapnyLogo_module);
;// CONCATENATED MODULE: ./components/UI/CompanyLogo/CompanyLogo.js




const CompanyLogo = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (ComapnyLogo_module_default()).logoContainer,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ComapnyLogo_module_default()).logoImage,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/img/sedc-logo.webp",
                        alt: "SEDC Logo",
                        height: "80px",
                        width: "80px"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (ComapnyLogo_module_default()).logoText,
                    children: "SEAVUS EDUCATION and DEVELOPMENT CENTER"
                })
            ]
        })
    }));
};
/* harmony default export */ const CompanyLogo_CompanyLogo = (CompanyLogo);

// EXTERNAL MODULE: ./components/UI/Navbar/Navbar.module.scss
var Navbar_module = __webpack_require__(4307);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/UI/Navbar/Dropdown.js




function Dropdown({ subitem: subitem1 , nextLinks  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Navbar_module_default()).dropdown,
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            children: subitem1.map((subitem)=>nextLinks ? /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: subitem.target,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: subitem.linkTitle
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: subitem.target,
                        children: subitem.linkTitle
                    })
                })
            )
        })
    }));
}
/* harmony default export */ const Navbar_Dropdown = (Dropdown);

;// CONCATENATED MODULE: ./components/UI/Navbar/Hooks/useClickOutside.js

const useClickOutside = (passedHandler)=>{
    let elRef = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let handler = (event)=>{
            if (!elRef.current.contains(event.target)) {
                passedHandler();
            }
        };
        document.addEventListener("mousedown", handler);
        return ()=>{
            document.removeEventListener("mousedown", handler);
        };
    });
    return elRef;
};
/* harmony default export */ const Hooks_useClickOutside = (useClickOutside);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/UI/Navbar/NavItem.js






function NavItem(props) {
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    let elRef = Hooks_useClickOutside(()=>setOpen(false)
    );
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        setOpen(false);
    }, [
        router.asPath
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        ref: elRef,
        className: (Navbar_module_default()).listedItemContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: (Navbar_module_default()).navbar__item,
                onClick: ()=>setOpen(!open)
                ,
                children: [
                    props.item,
                    props.item === "facility use" || props.item === "contact" ? "" : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/img/caret-down-fill.svg",
                        alt: "open submenu down arrow",
                        className: (Navbar_module_default()).navbar__arrow
                    })
                ]
            }),
            open && /*#__PURE__*/ jsx_runtime_.jsx(Navbar_Dropdown, {
                subitem: props.linkData,
                nextLinks: props.nextLinks
            })
        ]
    }));
}
/* harmony default export */ const Navbar_NavItem = (NavItem);

;// CONCATENATED MODULE: ./components/UI/Navbar/link-data.js
const linkData = {
    aboutUsItems: [
        {
            linkTitle: "overview",
            target: "https://www.sedc.mk/about-us/"
        },
        {
            linkTitle: "team",
            target: "https://www.sedc.mk/about-us/the-team-of-seavus-education-center/"
        },
        {
            linkTitle: "clients",
            target: "https://www.sedc.mk/about-us/the-clients-of-seavus-education-center/"
        },
        {
            linkTitle: "newsroom",
            target: "https://www.sedc.mk/category/about-us/news/"
        },
        {
            linkTitle: "success stories",
            target: "https://www.sedc.mk/category/success-stories/"
        },
        {
            linkTitle: "student portfolios",
            target: "https://www.sedc.mk/academy/student-portfolios/"
        },
        {
            linkTitle: "testimonials",
            target: "https://www.sedc.mk/category/what-they-said/"
        },
        , 
    ],
    academyItems: [
        {
            linkTitle: "programming",
            target: "/academy-for-progamming/web-dev"
        },
        {
            linkTitle: "design",
            target: "/academy-for-design/web-designer"
        },
        {
            linkTitle: "computer networks",
            target: "/academy-for-computer-networks/cloud-ops"
        },
        {
            linkTitle: "software testing",
            target: "/academy-for-software-testing/software-tester"
        },
        {
            linkTitle: "data science",
            target: "/academy-for-data-science/data-scientist"
        },
        {
            linkTitle: "digital marketing",
            target: "/academy-for-digital-marketing/digital-marketer"
        }, 
    ],
    coursesItems: [
        {
            linkTitle: "online shop",
            target: "https://courses.sedc.mk/"
        },
        {
            linkTitle: "online courses schedule",
            target: "https://www.sedc.mk/courses/it-course-schedule/"
        },
        {
            linkTitle: "microsoft",
            target: "https://www.sedc.mk/courses/microsoft/"
        },
        {
            linkTitle: "cisco",
            target: "https://www.sedc.mk/courses/cisco/"
        },
        {
            linkTitle: "adobe",
            target: "https://www.sedc.mk/courses/adobe/"
        },
        {
            linkTitle: "comptia",
            target: "https://www.sedc.mk/courses/comptia/"
        },
        {
            courseTitle: "sales trainings",
            target: "https://www.sedc.mk/courses/sales-trainings/"
        },
        {
            linkTitle: "soft skills",
            target: "https://www.sedc.mk/courses/soft-skills/"
        },
        {
            linkTitle: "consulting",
            target: "https://www.sedc.mk/courses/consulting/"
        }, 
    ],
    acceleratorItems: [
        {
            linkTitle: "acceleration program",
            target: "https://seavusaccelerator.com/"
        }, 
    ],
    testingItems: [
        {
            linkTitle: "pearson vue",
            target: "https://www.sedc.mk/testing/pearson-vue/"
        },
        {
            linkTitle: "prometric",
            target: "https://www.sedc.mk/testing/prometric/"
        },
        {
            linkTitle: "certiport",
            target: "https://www.sedc.mk/testing/certiport/"
        },
        {
            linkTitle: "nextec",
            target: "https://www.sedc.mk/testing/nextec/"
        },
        {
            linkTitle: "kryterion",
            target: "https://www.sedc.mk/testing/kryterion/"
        },
        {
            linkTitle: "ec-council",
            target: "https://www.sedc.mk/testing/ec-council/"
        }, 
    ]
};
/* harmony default export */ const link_data = (linkData);

;// CONCATENATED MODULE: ./components/UI/Navbar/Navbar.js







function Navbar() {
    const { 0: isDrawerOpen , 1: setIsDrawerOpen  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        setIsDrawerOpen(false);
    }, [
        router.asPath
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Navbar_module_default()).navbar__burgerMenu,
                onClick: ()=>setIsDrawerOpen(!isDrawerOpen)
                ,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "40",
                    height: "40",
                    fill: "currentColor",
                    className: "bi bi-list",
                    viewBox: "0 0 16 16",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: `${(Navbar_module_default()).navbar} ${isDrawerOpen ? (Navbar_module_default()).openDrawer : ""}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: (Navbar_module_default()).navbar__nav,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Navbar_NavItem, {
                            item: "about us",
                            linkData: link_data.aboutUsItems
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Navbar_NavItem, {
                            item: "academies",
                            nextLinks: true,
                            linkData: link_data.academyItems
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Navbar_NavItem, {
                            item: "courses",
                            linkData: link_data.coursesItems
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Navbar_NavItem, {
                            item: "accelerator",
                            linkData: link_data.acceleratorItems
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Navbar_NavItem, {
                            item: "testing",
                            linkData: link_data.testingItems
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.sedc.mk/facilty-use/",
                                className: (Navbar_module_default()).navbar__item,
                                children: "facility use"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.sedc.mk/contact-us/",
                                className: (Navbar_module_default()).navbar__item,
                                children: "contact"
                            })
                        })
                    ]
                })
            })
        ]
    }));
}
/* harmony default export */ const Navbar_Navbar = (Navbar);

// EXTERNAL MODULE: ./components/Footer/Footer.module.scss
var Footer_module = __webpack_require__(6529);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer/Footer.js



const Footer = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: (Footer_module_default()).footer,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).footer__mainContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).footer__main,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Footer_module_default()).col,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.sedc.mk/about-us/",
                                            children: "ABOUT US"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "list-unstyled",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/about-us/the-clients-of-seavus-education-center/",
                                                    children: "The Clients of SEDC"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/about-us/the-team-of-seavus-education-center/",
                                                    children: "The team of SEDC"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/category/about-us/gallery/",
                                                    children: "Gallery"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/category/about-us/news/",
                                                    children: "News & Events"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Footer_module_default()).col,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "http://localhost:3000/",
                                            children: " ACADEMIES"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "list-unstyled",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/academy/admission/",
                                                    children: "Tuition fees & Payment"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/academy/academy-for-programing/",
                                                    children: "Academy for Programming"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/academy/academy-for-computer-networks/",
                                                    children: "Academy for Computer Networks"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/academy/academy-for-design/",
                                                    children: "Academy for Design"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "https://www.sedc.mk/academy/ithink-academy/",
                                                    children: [
                                                        " ",
                                                        "IThink Academy"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/courses/cisco/ccna-academy-program/",
                                                    children: "CCNPA Academy"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/courses/cisco/ccna-course-program/",
                                                    children: "CCNP Academy"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Footer_module_default()).col,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.sedc.mk/courses/microsoft/",
                                            children: "COURSES"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "list-unstyled",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/courses/microsoft/",
                                                    children: "Microsoft"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/courses/cisco/",
                                                    children: "Cisco"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/courses/adobe/",
                                                    children: "Adobe"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/courses/comptia/",
                                                    children: "CompTIA"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/?page_id=364",
                                                    children: "Hi-Tech courses"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Footer_module_default()).col,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.sedc.mk/courses/soft-skills/",
                                            children: "BUSINESS COURSES"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "list-unstyled",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/courses/soft-skills/",
                                                    children: "Soft Skills"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/business-courses/business-analysis/",
                                                    children: "Business Analysis"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/business-courses/pmp/",
                                                    children: "PMP"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/business-courses/scrum/",
                                                    children: "SCRUM MASTER"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/courses/consulting/",
                                                    children: "Consulting"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/courses/sales-trainings/",
                                                    children: "Sales Trainings"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "sedc.mk/business-courses/business-simulation/",
                                                    children: "Business Simulation"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Footer_module_default()).col,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.sedc.mk/testing/pearson-vue/",
                                            children: "TESTING"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "list-unstyled",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/testing/pearson-vue/",
                                                    children: "Pearson Vue"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/testing/prometric/",
                                                    children: "Prometric"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/testing/certiport/",
                                                    children: "Certiport"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.sedc.mk/?page_id=439",
                                                    children: "ECDL"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.sedc.mk/facilty-use/",
                                                        children: "FACILITY USE"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.sedc.mk/contact-us/",
                                                        children: "CONTACT"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Footer_module_default()).col,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Footer_module_default()).col__social,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "FOLLOW US"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: (Footer_module_default()).social__footer__li,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.facebook.com/SEDCfanpage/",
                                                        "aria-label": "link to facebook",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "25",
                                                            height: "25",
                                                            fill: "currentColor",
                                                            className: "bi bi-facebook",
                                                            viewBox: "0 0 16 16",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: (Footer_module_default()).social__footer__li,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.youtube.com/channel/UC6952vSkgmQ5y5ap9Q_6GdA",
                                                        "aria-label": "link to youtube",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "25",
                                                            height: "25",
                                                            fill: "currentColor",
                                                            className: "bi bi-youtube",
                                                            viewBox: "0 0 16 16",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: (Footer_module_default()).social__footer__li,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.linkedin.com/company/seavus-education-and-development-center",
                                                        "aria-label": "Link to LinkedIn",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "25",
                                                            height: "25",
                                                            fill: "currentColor",
                                                            className: "bi bi-linkedin",
                                                            viewBox: "0 0 16 16",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Footer_module_default()).footer__logo,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://aricomagroup.com/en/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/img/aricoma_logo.png",
                                alt: "ARICOMA-GROUP"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Footer_module_default()).copyrightTextContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                            children: "\xa9 2021. All rights reserved. Seavus Education and Development Center"
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Layout/Layout.js





const Layout = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CompanyLogo_CompanyLogo, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar_Navbar, {
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {
            })
        ]
    }));
};
/* harmony default export */ const Layout_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

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

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675], () => (__webpack_exec__(6675)));
module.exports = __webpack_exports__;

})();