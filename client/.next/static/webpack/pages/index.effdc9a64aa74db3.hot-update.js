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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MailListItem = (param)=>{\n    let { sender, date, subject, content } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex space-x-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \" \",\n                    sender,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \" \",\n                    subject,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" \",\n                    content,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \" \",\n                    date,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, undefined);\n};\n_c = MailListItem;\nconst MailListContainer = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4 bg-slate-950 rounded-lg py-4 px-8 left-0 w-1/2 mx-8 my-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \"Mail List\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-4 mx-4 overflow-y-scroll\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                    sender: \"Kevin Wu\",\n                    date: \"Today\",\n                    subject: \"ok\",\n                    content: \"Hello\"\n                }, void 0, false, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = MailListContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MailListContainer);\nvar _c, _c1;\n$RefreshReg$(_c, \"MailListItem\");\n$RefreshReg$(_c1, \"MailListContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL01haWxMaXN0Q29udGFpbmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFHekIsTUFBTUMsZUFBZTtRQUFDLEVBQUNDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBZ0U7SUFDakgscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQzs7b0JBQUc7b0JBQUVOO29CQUFPOzs7Ozs7OzBCQUNiLDhEQUFDTzs7b0JBQUc7b0JBQUVMO29CQUFROzs7Ozs7OzBCQUNkLDhEQUFDTTs7b0JBQUU7b0JBQUVMO29CQUFROzs7Ozs7OzBCQUNiLDhEQUFDSTs7b0JBQUc7b0JBQUVOO29CQUFLOzs7Ozs7Ozs7Ozs7O0FBR3ZCO0tBVE1GO0FBYU4sTUFBTVUsb0JBQW9CO0lBR3hCLHFCQUNFLDhEQUFDTDtRQUFJQyxXQUFVOzswQkFDZiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQVU7Ozs7OzswQkFDcEIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNmLDRFQUFDTjtvQkFBYUMsUUFBTztvQkFBV0MsTUFBSztvQkFBUUMsU0FBUTtvQkFBS0MsU0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUU7TUFYTU07QUFhTiwrREFBZUEsaUJBQWlCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvTWFpbExpc3RDb250YWluZXIudHN4PzhhM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5cbmNvbnN0IE1haWxMaXN0SXRlbSA9ICh7c2VuZGVyLCBkYXRlLCBzdWJqZWN0LCBjb250ZW50fSA6IHtzZW5kZXI6c3RyaW5nLCBkYXRlOnN0cmluZywgc3ViamVjdDpzdHJpbmcsIGNvbnRlbnQ6c3RyaW5nfSkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC00Jz5cbiAgICAgICAgICAgIDxoMT4ge3NlbmRlcn0gPC9oMT5cbiAgICAgICAgICAgIDxoMj4ge3N1YmplY3R9IDwvaDI+XG4gICAgICAgICAgICA8cD4ge2NvbnRlbnR9IDwvcD5cbiAgICAgICAgICAgIDxoMj4ge2RhdGV9IDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5cbmNvbnN0IE1haWxMaXN0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgYmctc2xhdGUtOTUwIHJvdW5kZWQtbGcgcHktNCBweC04IGxlZnQtMCB3LTEvMiBteC04IG15LTRcIj4gXG4gICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1zbSc+TWFpbCBMaXN0PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LTQgbXgtNCBvdmVyZmxvdy15LXNjcm9sbCc+XG4gICAgICAgIDxNYWlsTGlzdEl0ZW0gc2VuZGVyPVwiS2V2aW4gV3VcIiBkYXRlPVwiVG9kYXlcIiBzdWJqZWN0PVwib2tcIiBjb250ZW50PVwiSGVsbG9cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWlsTGlzdENvbnRhaW5lciJdLCJuYW1lcyI6WyJSZWFjdCIsIk1haWxMaXN0SXRlbSIsInNlbmRlciIsImRhdGUiLCJzdWJqZWN0IiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJwIiwiTWFpbExpc3RDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/MailListContainer.tsx\n"));

/***/ })

});