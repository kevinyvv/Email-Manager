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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MailListItem = (param)=>{\n    let { sender, date, subject, content } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex space-x-4 outline outline-1 outline-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"flex space-x-4 outline outline-1 outline-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xs\",\n                    children: [\n                        \" \",\n                        sender,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xs\",\n                    children: [\n                        \" \",\n                        subject,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs truncate\",\n                    children: [\n                        \" \",\n                        content,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xs\",\n                    children: [\n                        \" \",\n                        date,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n            lineNumber: 7,\n            columnNumber: 12\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, undefined);\n};\n_c = MailListItem;\nconst MailListContainer = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4 bg-slate-950 rounded-lg py-4 px-8 left-0 w-1/2 mx-8 my-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \"Mail List\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-4 mx-4 overflow-y-scroll\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                    sender: \"Kevin Wu\",\n                    date: \"Today\",\n                    subject: \"Today's Appointment\",\n                    content: \"Hello Kevin Wu, This email is in regards to...\"\n                }, void 0, false, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = MailListContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MailListContainer);\nvar _c, _c1;\n$RefreshReg$(_c, \"MailListItem\");\n$RefreshReg$(_c1, \"MailListContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL01haWxMaXN0Q29udGFpbmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFHekIsTUFBTUMsZUFBZTtRQUFDLEVBQUNDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBZ0U7SUFDakgscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1osNEVBQUNDO1lBQU9ELFdBQVU7OzhCQUNqQiw4REFBQ0U7b0JBQUdGLFdBQVU7O3dCQUFVO3dCQUFFTDt3QkFBTzs7Ozs7Ozs4QkFDakMsOERBQUNRO29CQUFHSCxXQUFVOzt3QkFBVTt3QkFBRUg7d0JBQVE7Ozs7Ozs7OEJBQ2xDLDhEQUFDTztvQkFBRUosV0FBVTs7d0JBQW1CO3dCQUFFRjt3QkFBUTs7Ozs7Ozs4QkFDMUMsOERBQUNLO29CQUFHSCxXQUFVOzt3QkFBVTt3QkFBRUo7d0JBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQztLQVhNRjtBQWVOLE1BQU1XLG9CQUFvQjtJQUd4QixxQkFDRSw4REFBQ047UUFBSUMsV0FBVTs7MEJBQ2YsOERBQUNFO2dCQUFHRixXQUFVOzBCQUFVOzs7Ozs7MEJBQ3BCLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDZiw0RUFBQ047b0JBQWFDLFFBQU87b0JBQVdDLE1BQUs7b0JBQVFDLFNBQVE7b0JBQXNCQyxTQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzRjtNQVhNTztBQWFOLCtEQUFlQSxpQkFBaUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9NYWlsTGlzdENvbnRhaW5lci50c3g/OGEzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuY29uc3QgTWFpbExpc3RJdGVtID0gKHtzZW5kZXIsIGRhdGUsIHN1YmplY3QsIGNvbnRlbnR9IDoge3NlbmRlcjpzdHJpbmcsIGRhdGU6c3RyaW5nLCBzdWJqZWN0OnN0cmluZywgY29udGVudDpzdHJpbmd9KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTQgb3V0bGluZSBvdXRsaW5lLTEgb3V0bGluZS13aGl0ZSc+XG4gICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtNCBvdXRsaW5lIG91dGxpbmUtMSBvdXRsaW5lLXdoaXRlJz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQteHMnPiB7c2VuZGVyfSA8L2gxPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC14cyc+IHtzdWJqZWN0fSA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzIHRydW5jYXRlJz4ge2NvbnRlbnR9IDwvcD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQteHMnPiB7ZGF0ZX0gPC9oMj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuXG5jb25zdCBNYWlsTGlzdENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IGJnLXNsYXRlLTk1MCByb3VuZGVkLWxnIHB5LTQgcHgtOCBsZWZ0LTAgdy0xLzIgbXgtOCBteS00XCI+IFxuICAgIDxoMSBjbGFzc05hbWU9J3RleHQtc20nPk1haWwgTGlzdDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS00IG14LTQgb3ZlcmZsb3cteS1zY3JvbGwnPlxuICAgICAgICA8TWFpbExpc3RJdGVtIHNlbmRlcj1cIktldmluIFd1XCIgZGF0ZT1cIlRvZGF5XCIgc3ViamVjdD1cIlRvZGF5J3MgQXBwb2ludG1lbnRcIiBjb250ZW50PVwiSGVsbG8gS2V2aW4gV3UsIFRoaXMgZW1haWwgaXMgaW4gcmVnYXJkcyB0by4uLlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haWxMaXN0Q29udGFpbmVyIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWFpbExpc3RJdGVtIiwic2VuZGVyIiwiZGF0ZSIsInN1YmplY3QiLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwiaDEiLCJoMiIsInAiLCJNYWlsTGlzdENvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Components/MailListContainer.tsx\n"));

/***/ })

});