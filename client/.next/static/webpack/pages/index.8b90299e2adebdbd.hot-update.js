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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst MailListItem = (param)=>{\n    let { sender, date, subject, content } = param;\n    const setMail = ()=>{\n    // pass data to MailViewContainer\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"flex space-x-4 outline outline-1 outline-white rounded-md px-1\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xs\",\n                    children: [\n                        \" \",\n                        date,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xs\",\n                    children: [\n                        \" \",\n                        sender,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xs\",\n                    children: [\n                        \" \",\n                        subject,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs truncate\",\n                    children: [\n                        \" \",\n                        content,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n            lineNumber: 11,\n            columnNumber: 12\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_c = MailListItem;\nconst MailListContainer = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [ssender, setSsender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ddate, setDdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ssubject, setSsubject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ccontent, setCcontent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://127.0.0.1:8080/emails\").then((response)=>response.json()).then((dataa)=>setData(dataa));\n        console.log(data);\n        console.log(\"this line was reached\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4 bg-slate-950 rounded-lg py-4 px-8 left-0 w-1/2 mx-8 my-4 h-96\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \"Mail List\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-4 mx-4 px-2 py-2 flex-grow-0 h-5/6 overflow-y-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: \"Kevin Wu\",\n                        date: \"Today\",\n                        subject: \"Today's Appointment\",\n                        content: \"Hello Kevin Wu, This email is in regards to...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \" \",\n                            data.title[1],\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MailListContainer, \"Vz+aQvkEKf0QGb5AXavEvRrRCo8=\");\n_c1 = MailListContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MailListContainer);\nvar _c, _c1;\n$RefreshReg$(_c, \"MailListItem\");\n$RefreshReg$(_c1, \"MailListContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL01haWxMaXN0Q29udGFpbmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBR2hELE1BQU1HLGVBQWU7UUFBQyxFQUFDQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQWdFO0lBQ2pILE1BQU1DLFVBQVU7SUFDZCxpQ0FBaUM7SUFDbkM7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWiw0RUFBQ0M7WUFBT0QsV0FBVTs7OEJBQ2pCLDhEQUFDRTtvQkFBR0YsV0FBVTs7d0JBQVU7d0JBQUVMO3dCQUFLOzs7Ozs7OzhCQUMvQiw4REFBQ1E7b0JBQUdILFdBQVU7O3dCQUFVO3dCQUFFTjt3QkFBTzs7Ozs7Ozs4QkFDakMsOERBQUNRO29CQUFHRixXQUFVOzt3QkFBVTt3QkFBRUo7d0JBQVE7Ozs7Ozs7OEJBQ2xDLDhEQUFDUTtvQkFBRUosV0FBVTs7d0JBQW1CO3dCQUFFSDt3QkFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXREO0tBZk1KO0FBbUJOLE1BQU1ZLG9CQUFvQjs7SUFDeEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2dCLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2tCLE9BQU9DLFNBQVMsR0FBR25CLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ29CLFVBQVVDLFlBQVksR0FBR3JCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3NCLFVBQVVDLFlBQVksR0FBR3ZCLCtDQUFRQSxDQUFDO0lBRXpDRCxnREFBU0EsQ0FBQztRQUNOeUIsTUFBTSxnQ0FBZ0NDLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUFJRixJQUFJLENBQUNHLENBQUFBLFFBQVNiLFFBQVFhO1FBQzlGQyxRQUFRQyxHQUFHLENBQUNoQjtRQUNaZSxRQUFRQyxHQUFHLENBQUM7SUFDZCxHQUFFLEVBQUU7SUFFTixxQkFDRSw4REFBQ3ZCO1FBQUlDLFdBQVU7OzBCQUNmLDhEQUFDRztnQkFBR0gsV0FBVTswQkFBVTs7Ozs7OzBCQUNwQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNmLDhEQUFDUDt3QkFBYUMsUUFBTzt3QkFBV0MsTUFBSzt3QkFBUUMsU0FBUTt3QkFBc0JDLFNBQVE7Ozs7OztrQ0FDbkYsOERBQUNKO3dCQUFhQyxRQUFPO3dCQUFXQyxNQUFLO3dCQUFRQyxTQUFRO3dCQUFzQkMsU0FBUTs7Ozs7O2tDQUNuRiw4REFBQ0o7d0JBQWFDLFFBQU87d0JBQVdDLE1BQUs7d0JBQVFDLFNBQVE7d0JBQXNCQyxTQUFROzs7Ozs7a0NBQ25GLDhEQUFDSjt3QkFBYUMsUUFBTzt3QkFBV0MsTUFBSzt3QkFBUUMsU0FBUTt3QkFBc0JDLFNBQVE7Ozs7OztrQ0FDbkYsOERBQUNKO3dCQUFhQyxRQUFPO3dCQUFXQyxNQUFLO3dCQUFRQyxTQUFRO3dCQUFzQkMsU0FBUTs7Ozs7O2tDQUNuRiw4REFBQ0o7d0JBQWFDLFFBQU87d0JBQVdDLE1BQUs7d0JBQVFDLFNBQVE7d0JBQXNCQyxTQUFROzs7Ozs7a0NBQ25GLDhEQUFDSjt3QkFBYUMsUUFBTzt3QkFBV0MsTUFBSzt3QkFBUUMsU0FBUTt3QkFBc0JDLFNBQVE7Ozs7OztrQ0FDbkYsOERBQUNKO3dCQUFhQyxRQUFPO3dCQUFXQyxNQUFLO3dCQUFRQyxTQUFRO3dCQUFzQkMsU0FBUTs7Ozs7O2tDQUNuRiw4REFBQ0o7d0JBQWFDLFFBQU87d0JBQVdDLE1BQUs7d0JBQVFDLFNBQVE7d0JBQXNCQyxTQUFROzs7Ozs7a0NBQ25GLDhEQUFDSjt3QkFBYUMsUUFBTzt3QkFBV0MsTUFBSzt3QkFBUUMsU0FBUTt3QkFBc0JDLFNBQVE7Ozs7OztrQ0FDbkYsOERBQUNNOzs0QkFBRzs0QkFBRUcsS0FBS2lCLEtBQUssQ0FBQyxFQUFFOzRCQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVCO0dBL0JNbEI7TUFBQUE7QUFpQ04sK0RBQWVBLGlCQUFpQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL01haWxMaXN0Q29udGFpbmVyLnRzeD84YTNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5cbmNvbnN0IE1haWxMaXN0SXRlbSA9ICh7c2VuZGVyLCBkYXRlLCBzdWJqZWN0LCBjb250ZW50fSA6IHtzZW5kZXI6c3RyaW5nLCBkYXRlOnN0cmluZywgc3ViamVjdDpzdHJpbmcsIGNvbnRlbnQ6c3RyaW5nfSkgPT4ge1xuICAgIGNvbnN0IHNldE1haWwgPSAoKSA9PiB7XG4gICAgICAvLyBwYXNzIGRhdGEgdG8gTWFpbFZpZXdDb250YWluZXJcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTEyJz5cbiAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC00IG91dGxpbmUgb3V0bGluZS0xIG91dGxpbmUtd2hpdGUgcm91bmRlZC1tZCBweC0xJz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQteHMnPiB7ZGF0ZX0gPC9oMj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQteHMnPiB7c2VuZGVyfSA8L2gxPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC14cyc+IHtzdWJqZWN0fSA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzIHRydW5jYXRlJz4ge2NvbnRlbnR9IDwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuXG5jb25zdCBNYWlsTGlzdENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3NzZW5kZXIsIHNldFNzZW5kZXJdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2RkYXRlLCBzZXREZGF0ZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbc3N1YmplY3QsIHNldFNzdWJqZWN0XSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtjY29udGVudCwgc2V0Q2NvbnRlbnRdID0gdXNlU3RhdGUoXCJcIilcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwODAvZW1haWxzXCIpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGFhID0+IHNldERhdGEoZGF0YWEpKVxuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBsaW5lIHdhcyByZWFjaGVkXCIpXG4gICAgfSxbXSlcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBiZy1zbGF0ZS05NTAgcm91bmRlZC1sZyBweS00IHB4LTggbGVmdC0wIHctMS8yIG14LTggbXktNCBoLTk2XCI+IFxuICAgIDxoMSBjbGFzc05hbWU9J3RleHQtc20nPk1haWwgTGlzdDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS00IG14LTQgcHgtMiBweS0yIGZsZXgtZ3Jvdy0wIGgtNS82IG92ZXJmbG93LXktYXV0byc+XG4gICAgICAgIDxNYWlsTGlzdEl0ZW0gc2VuZGVyPVwiS2V2aW4gV3VcIiBkYXRlPVwiVG9kYXlcIiBzdWJqZWN0PVwiVG9kYXkncyBBcHBvaW50bWVudFwiIGNvbnRlbnQ9XCJIZWxsbyBLZXZpbiBXdSwgVGhpcyBlbWFpbCBpcyBpbiByZWdhcmRzIHRvLi4uXCIgLz5cbiAgICAgICAgPE1haWxMaXN0SXRlbSBzZW5kZXI9XCJLZXZpbiBXdVwiIGRhdGU9XCJUb2RheVwiIHN1YmplY3Q9XCJUb2RheSdzIEFwcG9pbnRtZW50XCIgY29udGVudD1cIkhlbGxvIEtldmluIFd1LCBUaGlzIGVtYWlsIGlzIGluIHJlZ2FyZHMgdG8uLi5cIiAvPlxuICAgICAgICA8TWFpbExpc3RJdGVtIHNlbmRlcj1cIktldmluIFd1XCIgZGF0ZT1cIlRvZGF5XCIgc3ViamVjdD1cIlRvZGF5J3MgQXBwb2ludG1lbnRcIiBjb250ZW50PVwiSGVsbG8gS2V2aW4gV3UsIFRoaXMgZW1haWwgaXMgaW4gcmVnYXJkcyB0by4uLlwiIC8+XG4gICAgICAgIDxNYWlsTGlzdEl0ZW0gc2VuZGVyPVwiS2V2aW4gV3VcIiBkYXRlPVwiVG9kYXlcIiBzdWJqZWN0PVwiVG9kYXkncyBBcHBvaW50bWVudFwiIGNvbnRlbnQ9XCJIZWxsbyBLZXZpbiBXdSwgVGhpcyBlbWFpbCBpcyBpbiByZWdhcmRzIHRvLi4uXCIgLz5cbiAgICAgICAgPE1haWxMaXN0SXRlbSBzZW5kZXI9XCJLZXZpbiBXdVwiIGRhdGU9XCJUb2RheVwiIHN1YmplY3Q9XCJUb2RheSdzIEFwcG9pbnRtZW50XCIgY29udGVudD1cIkhlbGxvIEtldmluIFd1LCBUaGlzIGVtYWlsIGlzIGluIHJlZ2FyZHMgdG8uLi5cIiAvPlxuICAgICAgICA8TWFpbExpc3RJdGVtIHNlbmRlcj1cIktldmluIFd1XCIgZGF0ZT1cIlRvZGF5XCIgc3ViamVjdD1cIlRvZGF5J3MgQXBwb2ludG1lbnRcIiBjb250ZW50PVwiSGVsbG8gS2V2aW4gV3UsIFRoaXMgZW1haWwgaXMgaW4gcmVnYXJkcyB0by4uLlwiIC8+XG4gICAgICAgIDxNYWlsTGlzdEl0ZW0gc2VuZGVyPVwiS2V2aW4gV3VcIiBkYXRlPVwiVG9kYXlcIiBzdWJqZWN0PVwiVG9kYXkncyBBcHBvaW50bWVudFwiIGNvbnRlbnQ9XCJIZWxsbyBLZXZpbiBXdSwgVGhpcyBlbWFpbCBpcyBpbiByZWdhcmRzIHRvLi4uXCIgLz5cbiAgICAgICAgPE1haWxMaXN0SXRlbSBzZW5kZXI9XCJLZXZpbiBXdVwiIGRhdGU9XCJUb2RheVwiIHN1YmplY3Q9XCJUb2RheSdzIEFwcG9pbnRtZW50XCIgY29udGVudD1cIkhlbGxvIEtldmluIFd1LCBUaGlzIGVtYWlsIGlzIGluIHJlZ2FyZHMgdG8uLi5cIiAvPlxuICAgICAgICA8TWFpbExpc3RJdGVtIHNlbmRlcj1cIktldmluIFd1XCIgZGF0ZT1cIlRvZGF5XCIgc3ViamVjdD1cIlRvZGF5J3MgQXBwb2ludG1lbnRcIiBjb250ZW50PVwiSGVsbG8gS2V2aW4gV3UsIFRoaXMgZW1haWwgaXMgaW4gcmVnYXJkcyB0by4uLlwiIC8+XG4gICAgICAgIDxNYWlsTGlzdEl0ZW0gc2VuZGVyPVwiS2V2aW4gV3VcIiBkYXRlPVwiVG9kYXlcIiBzdWJqZWN0PVwiVG9kYXkncyBBcHBvaW50bWVudFwiIGNvbnRlbnQ9XCJIZWxsbyBLZXZpbiBXdSwgVGhpcyBlbWFpbCBpcyBpbiByZWdhcmRzIHRvLi4uXCIgLz5cbiAgICAgICAgPGgxPiB7ZGF0YS50aXRsZVsxXX0gPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbExpc3RDb250YWluZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1haWxMaXN0SXRlbSIsInNlbmRlciIsImRhdGUiLCJzdWJqZWN0IiwiY29udGVudCIsInNldE1haWwiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJoMiIsImgxIiwicCIsIk1haWxMaXN0Q29udGFpbmVyIiwiZGF0YSIsInNldERhdGEiLCJzc2VuZGVyIiwic2V0U3NlbmRlciIsImRkYXRlIiwic2V0RGRhdGUiLCJzc3ViamVjdCIsInNldFNzdWJqZWN0IiwiY2NvbnRlbnQiLCJzZXRDY29udGVudCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGFhIiwiY29uc29sZSIsImxvZyIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/MailListContainer.tsx\n"));

/***/ })

});