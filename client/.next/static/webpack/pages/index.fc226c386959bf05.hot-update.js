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

/***/ "./pages/Components/mainpage.tsx":
/*!***************************************!*\
  !*** ./pages/Components/mainpage.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MailViewContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MailViewContainer */ \"./pages/Components/MailViewContainer.tsx\");\n/* harmony import */ var _MailListContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MailListContainer */ \"./pages/Components/MailListContainer.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Main = ()=>{\n    _s();\n    const [emailData, setEmailData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // get unread emails\n    //check if email is worth responding to\n    // generate replies with chatgpt\n    //delete emails\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(emailData);\n    });\n    function CallBack(childData) {\n        setEmailData(childData);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MailViewContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                props: emailData\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/mainpage.tsx\",\n                lineNumber: 27,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MailListContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleCallback: CallBack\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/mainpage.tsx\",\n                lineNumber: 28,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/mainpage.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"HWCWZ+S6eyZUvKaFArDbtFREwRk=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL21haW5wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0Q7QUFDVjtBQUNhO0FBRW5ELE1BQU1LLE9BQU87O0lBRWIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTNDLG9CQUFvQjtJQUVwQix1Q0FBdUM7SUFFdkMsZ0NBQWdDO0lBRWhDLGVBQWU7SUFFYkQsZ0RBQVNBLENBQUM7UUFDUk8sUUFBUUMsR0FBRyxDQUFDSDtJQUNkO0lBRUEsU0FBU0ksU0FBVUMsU0FBYTtRQUM5QkosYUFBYUk7SUFDZjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDViw4REFBQ1YsMERBQUlBO2dCQUFDVyxPQUFPUjs7Ozs7OzBCQUNiLDhEQUFDRiwwREFBaUJBO2dCQUFDVyxnQkFBZ0JMOzs7Ozs7Ozs7Ozs7QUFHNUM7R0ExQk1MO0tBQUFBO0FBNEJOLCtEQUFnQkEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL21haW5wYWdlLnRzeD81MDY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1haWwgZnJvbSAnLi9NYWlsVmlld0NvbnRhaW5lcidcbmltcG9ydCBNYWlsTGlzdENvbnRhaW5lciBmcm9tICcuL01haWxMaXN0Q29udGFpbmVyJ1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuXG5jb25zdCBbZW1haWxEYXRhLCBzZXRFbWFpbERhdGFdID0gdXNlU3RhdGUobnVsbClcblxuLy8gZ2V0IHVucmVhZCBlbWFpbHNcblxuLy9jaGVjayBpZiBlbWFpbCBpcyB3b3J0aCByZXNwb25kaW5nIHRvXG5cbi8vIGdlbmVyYXRlIHJlcGxpZXMgd2l0aCBjaGF0Z3B0XG5cbi8vZGVsZXRlIGVtYWlsc1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coZW1haWxEYXRhKVxuICB9KVxuXG4gIGZ1bmN0aW9uIENhbGxCYWNrIChjaGlsZERhdGE6YW55KSB7XG4gICAgc2V0RW1haWxEYXRhKGNoaWxkRGF0YSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgPE1haWwgcHJvcHM9e2VtYWlsRGF0YX0vPlxuICAgICAgICAgPE1haWxMaXN0Q29udGFpbmVyIGhhbmRsZUNhbGxiYWNrPXtDYWxsQmFja30vPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0ICBNYWluIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNYWlsIiwiTWFpbExpc3RDb250YWluZXIiLCJNYWluIiwiZW1haWxEYXRhIiwic2V0RW1haWxEYXRhIiwiY29uc29sZSIsImxvZyIsIkNhbGxCYWNrIiwiY2hpbGREYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJoYW5kbGVDYWxsYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Components/mainpage.tsx\n"));

/***/ })

});