"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Components/MailListContainer.tsx":
/*!************************************************!*\
  !*** ./pages/Components/MailListContainer.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MailListItem = (param)=>{\n    let { sender, date, subject, content } = param;\n    const setMail = ()=>{\n    // pass data to MailViewContainer\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"flex space-x-4 outline outline-1 outline-white rounded-md px-1\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xs\",\n                    children: [\n                        \" \",\n                        date,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xs\",\n                    children: [\n                        \" \",\n                        sender,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xs\",\n                    children: [\n                        \" \",\n                        subject,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs truncate\",\n                    children: [\n                        \" \",\n                        content,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n            lineNumber: 11,\n            columnNumber: 12\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_c = MailListItem;\nconst MailListContainer = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4 bg-slate-950 rounded-lg py-4 px-8 left-0 w-1/2 mx-8 my-4 h-96\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \"Mail List\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-4 mx-4 px-2 py-2 flex-grow-0 h-5/6 overflow-y-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = MailListContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MailListContainer);\nvar _c, _c1;\n$RefreshReg$(_c, \"MailListItem\");\n$RefreshReg$(_c1, \"MailListContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL01haWxMaXN0Q29udGFpbmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFHekIsTUFBTUMsZUFBZTtRQUFDLEVBQUNDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBZ0U7SUFDakgsTUFBTUMsVUFBVTtJQUNkLGlDQUFpQztJQUNuQztJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaLDRFQUFDQztZQUFPRCxXQUFVOzs4QkFDakIsOERBQUNFO29CQUFHRixXQUFVOzt3QkFBVTt3QkFBRUw7d0JBQUs7Ozs7Ozs7OEJBQy9CLDhEQUFDUTtvQkFBR0gsV0FBVTs7d0JBQVU7d0JBQUVOO3dCQUFPOzs7Ozs7OzhCQUNqQyw4REFBQ1E7b0JBQUdGLFdBQVU7O3dCQUFVO3dCQUFFSjt3QkFBUTs7Ozs7Ozs4QkFDbEMsOERBQUNRO29CQUFFSixXQUFVOzt3QkFBbUI7d0JBQUVIO3dCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEQ7S0FmTUo7QUFtQk4sTUFBTVksb0JBQW9CO0lBR3hCLHFCQUNFLDhEQUFDTjtRQUFJQyxXQUFVOzswQkFDZiw4REFBQ0c7Z0JBQUdILFdBQVU7MEJBQVU7Ozs7OzswQkFDcEIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ1A7d0JBQWFDLFFBQU87d0JBQVdDLE1BQUs7d0JBQVFDLFNBQVE7d0JBQXNCQyxTQUFROzs7Ozs7a0NBQ25GLDhEQUFDSjt3QkFBYUMsUUFBTzt3QkFBV0MsTUFBSzt3QkFBUUMsU0FBUTt3QkFBc0JDLFNBQVE7Ozs7OztrQ0FDbkYsOERBQUNKO3dCQUFhQyxRQUFPO3dCQUFXQyxNQUFLO3dCQUFRQyxTQUFRO3dCQUFzQkMsU0FBUTs7Ozs7O2tDQUNuRiw4REFBQ0o7d0JBQWFDLFFBQU87d0JBQVdDLE1BQUs7d0JBQVFDLFNBQVE7d0JBQXNCQyxTQUFROzs7Ozs7a0NBQ25GLDhEQUFDSjt3QkFBYUMsUUFBTzt3QkFBV0MsTUFBSzt3QkFBUUMsU0FBUTt3QkFBc0JDLFNBQVE7Ozs7OztrQ0FDbkYsOERBQUNKO3dCQUFhQyxRQUFPO3dCQUFXQyxNQUFLO3dCQUFRQyxTQUFRO3dCQUFzQkMsU0FBUTs7Ozs7O2tDQUNuRiw4REFBQ0o7d0JBQWFDLFFBQU87d0JBQVdDLE1BQUs7d0JBQVFDLFNBQVE7d0JBQXNCQyxTQUFROzs7Ozs7a0NBQ25GLDhEQUFDSjt3QkFBYUMsUUFBTzt3QkFBV0MsTUFBSzt3QkFBUUMsU0FBUTt3QkFBc0JDLFNBQVE7Ozs7OztrQ0FDbkYsOERBQUNKO3dCQUFhQyxRQUFPO3dCQUFXQyxNQUFLO3dCQUFRQyxTQUFRO3dCQUFzQkMsU0FBUTs7Ozs7O2tDQUNuRiw4REFBQ0o7d0JBQWFDLFFBQU87d0JBQVdDLE1BQUs7d0JBQVFDLFNBQVE7d0JBQXNCQyxTQUFROzs7Ozs7a0NBRW5GLDhEQUFDSjt3QkFBYUMsUUFBTzt3QkFBV0MsTUFBSzt3QkFBUUMsU0FBUTt3QkFBc0JDLFNBQVE7Ozs7OztrQ0FDbkYsOERBQUNKO3dCQUFhQyxRQUFPO3dCQUFXQyxNQUFLO3dCQUFRQyxTQUFRO3dCQUFzQkMsU0FBUTs7Ozs7O2tDQUNuRiw4REFBQ0o7d0JBQWFDLFFBQU87d0JBQVdDLE1BQUs7d0JBQVFDLFNBQVE7d0JBQXNCQyxTQUFROzs7Ozs7a0NBQ25GLDhEQUFDSjt3QkFBYUMsUUFBTzt3QkFBV0MsTUFBSzt3QkFBUUMsU0FBUTt3QkFBc0JDLFNBQVE7Ozs7OztrQ0FDbkYsOERBQUNKO3dCQUFhQyxRQUFPO3dCQUFXQyxNQUFLO3dCQUFRQyxTQUFRO3dCQUFzQkMsU0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNGO01BM0JNUTtBQTZCTiwrREFBZUEsaUJBQWlCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvTWFpbExpc3RDb250YWluZXIudHN4PzhhM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5cbmNvbnN0IE1haWxMaXN0SXRlbSA9ICh7c2VuZGVyLCBkYXRlLCBzdWJqZWN0LCBjb250ZW50fSA6IHtzZW5kZXI6c3RyaW5nLCBkYXRlOnN0cmluZywgc3ViamVjdDpzdHJpbmcsIGNvbnRlbnQ6c3RyaW5nfSkgPT4ge1xuICAgIGNvbnN0IHNldE1haWwgPSAoKSA9PiB7XG4gICAgICAvLyBwYXNzIGRhdGEgdG8gTWFpbFZpZXdDb250YWluZXJcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTEyJz5cbiAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC00IG91dGxpbmUgb3V0bGluZS0xIG91dGxpbmUtd2hpdGUgcm91bmRlZC1tZCBweC0xJz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQteHMnPiB7ZGF0ZX0gPC9oMj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQteHMnPiB7c2VuZGVyfSA8L2gxPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC14cyc+IHtzdWJqZWN0fSA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzIHRydW5jYXRlJz4ge2NvbnRlbnR9IDwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuXG5jb25zdCBNYWlsTGlzdENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IGJnLXNsYXRlLTk1MCByb3VuZGVkLWxnIHB5LTQgcHgtOCBsZWZ0LTAgdy0xLzIgbXgtOCBteS00IGgtOTZcIj4gXG4gICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1zbSc+TWFpbCBMaXN0PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LTQgbXgtNCBweC0yIHB5LTIgZmxleC1ncm93LTAgaC01LzYgb3ZlcmZsb3cteS1hdXRvJz5cbiAgICAgICAgPE1haWxMaXN0SXRlbSBzZW5kZXI9XCJLZXZpbiBXdVwiIGRhdGU9XCJUb2RheVwiIHN1YmplY3Q9XCJUb2RheSdzIEFwcG9pbnRtZW50XCIgY29udGVudD1cIkhlbGxvIEtldmluIFd1LCBUaGlzIGVtYWlsIGlzIGluIHJlZ2FyZHMgdG8uLi5cIiAvPlxuICAgICAgICA8TWFpbExpc3RJdGVtIHNlbmRlcj1cIktldmluIFd1XCIgZGF0ZT1cIlRvZGF5XCIgc3ViamVjdD1cIlRvZGF5J3MgQXBwb2ludG1lbnRcIiBjb250ZW50PVwiSGVsbG8gS2V2aW4gV3UsIFRoaXMgZW1haWwgaXMgaW4gcmVnYXJkcyB0by4uLlwiIC8+XG4gICAgICAgIDxNYWlsTGlzdEl0ZW0gc2VuZGVyPVwiS2V2aW4gV3VcIiBkYXRlPVwiVG9kYXlcIiBzdWJqZWN0PVwiVG9kYXkncyBBcHBvaW50bWVudFwiIGNvbnRlbnQ9XCJIZWxsbyBLZXZpbiBXdSwgVGhpcyBlbWFpbCBpcyBpbiByZWdhcmRzIHRvLi4uXCIgLz5cbiAgICAgICAgPE1haWxMaXN0SXRlbSBzZW5kZXI9XCJLZXZpbiBXdVwiIGRhdGU9XCJUb2RheVwiIHN1YmplY3Q9XCJUb2RheSdzIEFwcG9pbnRtZW50XCIgY29udGVudD1cIkhlbGxvIEtldmluIFd1LCBUaGlzIGVtYWlsIGlzIGluIHJlZ2FyZHMgdG8uLi5cIiAvPlxuICAgICAgICA8TWFpbExpc3RJdGVtIHNlbmRlcj1cIktldmluIFd1XCIgZGF0ZT1cIlRvZGF5XCIgc3ViamVjdD1cIlRvZGF5J3MgQXBwb2ludG1lbnRcIiBjb250ZW50PVwiSGVsbG8gS2V2aW4gV3UsIFRoaXMgZW1haWwgaXMgaW4gcmVnYXJkcyB0by4uLlwiIC8+XG4gICAgICAgIDxNYWlsTGlzdEl0ZW0gc2VuZGVyPVwiS2V2aW4gV3VcIiBkYXRlPVwiVG9kYXlcIiBzdWJqZWN0PVwiVG9kYXkncyBBcHBvaW50bWVudFwiIGNvbnRlbnQ9XCJIZWxsbyBLZXZpbiBXdSwgVGhpcyBlbWFpbCBpcyBpbiByZWdhcmRzIHRvLi4uXCIgLz5cbiAgICAgICAgPE1haWxMaXN0SXRlbSBzZW5kZXI9XCJLZXZpbiBXdVwiIGRhdGU9XCJUb2RheVwiIHN1YmplY3Q9XCJUb2RheSdzIEFwcG9pbnRtZW50XCIgY29udGVudD1cIkhlbGxvIEtldmluIFd1LCBUaGlzIGVtYWlsIGlzIGluIHJlZ2FyZHMgdG8uLi5cIiAvPlxuICAgICAgICA8TWFpbExpc3RJdGVtIHNlbmRlcj1cIktldmluIFd1XCIgZGF0ZT1cIlRvZGF5XCIgc3ViamVjdD1cIlRvZGF5J3MgQXBwb2ludG1lbnRcIiBjb250ZW50PVwiSGVsbG8gS2V2aW4gV3UsIFRoaXMgZW1haWwgaXMgaW4gcmVnYXJkcyB0by4uLlwiIC8+XG4gICAgICAgIDxNYWlsTGlzdEl0ZW0gc2VuZGVyPVwiS2V2aW4gV3VcIiBkYXRlPVwiVG9kYXlcIiBzdWJqZWN0PVwiVG9kYXkncyBBcHBvaW50bWVudFwiIGNvbnRlbnQ9XCJIZWxsbyBLZXZpbiBXdSwgVGhpcyBlbWFpbCBpcyBpbiByZWdhcmRzIHRvLi4uXCIgLz5cbiAgICAgICAgPE1haWxMaXN0SXRlbSBzZW5kZXI9XCJLZXZpbiBXdVwiIGRhdGU9XCJUb2RheVwiIHN1YmplY3Q9XCJUb2RheSdzIEFwcG9pbnRtZW50XCIgY29udGVudD1cIkhlbGxvIEtldmluIFd1LCBUaGlzIGVtYWlsIGlzIGluIHJlZ2FyZHMgdG8uLi5cIiAvPlxuICAgICAgICBcbiAgICAgICAgPE1haWxMaXN0SXRlbSBzZW5kZXI9XCJLZXZpbiBXdVwiIGRhdGU9XCJUb2RheVwiIHN1YmplY3Q9XCJUb2RheSdzIEFwcG9pbnRtZW50XCIgY29udGVudD1cIkhlbGxvIEtldmluIFd1LCBUaGlzIGVtYWlsIGlzIGluIHJlZ2FyZHMgdG8uLi5cIiAvPlxuICAgICAgICA8TWFpbExpc3RJdGVtIHNlbmRlcj1cIktldmluIFd1XCIgZGF0ZT1cIlRvZGF5XCIgc3ViamVjdD1cIlRvZGF5J3MgQXBwb2ludG1lbnRcIiBjb250ZW50PVwiSGVsbG8gS2V2aW4gV3UsIFRoaXMgZW1haWwgaXMgaW4gcmVnYXJkcyB0by4uLlwiIC8+XG4gICAgICAgIDxNYWlsTGlzdEl0ZW0gc2VuZGVyPVwiS2V2aW4gV3VcIiBkYXRlPVwiVG9kYXlcIiBzdWJqZWN0PVwiVG9kYXkncyBBcHBvaW50bWVudFwiIGNvbnRlbnQ9XCJIZWxsbyBLZXZpbiBXdSwgVGhpcyBlbWFpbCBpcyBpbiByZWdhcmRzIHRvLi4uXCIgLz5cbiAgICAgICAgPE1haWxMaXN0SXRlbSBzZW5kZXI9XCJLZXZpbiBXdVwiIGRhdGU9XCJUb2RheVwiIHN1YmplY3Q9XCJUb2RheSdzIEFwcG9pbnRtZW50XCIgY29udGVudD1cIkhlbGxvIEtldmluIFd1LCBUaGlzIGVtYWlsIGlzIGluIHJlZ2FyZHMgdG8uLi5cIiAvPlxuICAgICAgICA8TWFpbExpc3RJdGVtIHNlbmRlcj1cIktldmluIFd1XCIgZGF0ZT1cIlRvZGF5XCIgc3ViamVjdD1cIlRvZGF5J3MgQXBwb2ludG1lbnRcIiBjb250ZW50PVwiSGVsbG8gS2V2aW4gV3UsIFRoaXMgZW1haWwgaXMgaW4gcmVnYXJkcyB0by4uLlwiIC8+XG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWlsTGlzdENvbnRhaW5lciJdLCJuYW1lcyI6WyJSZWFjdCIsIk1haWxMaXN0SXRlbSIsInNlbmRlciIsImRhdGUiLCJzdWJqZWN0IiwiY29udGVudCIsInNldE1haWwiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJoMiIsImgxIiwicCIsIk1haWxMaXN0Q29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/MailListContainer.tsx\n"));

/***/ })

});