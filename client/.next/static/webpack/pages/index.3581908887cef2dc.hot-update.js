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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MailViewContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MailViewContainer */ \"./pages/Components/MailViewContainer.tsx\");\n/* harmony import */ var _MailListContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MailListContainer */ \"./pages/Components/MailListContainer.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Main = ()=>{\n    _s();\n    const [emailData, setEmailData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // get unread emails\n    //check if email is worth responding to\n    // generate replies with chatgpt\n    //delete emails\n    const CallBack = async (childData)=>{\n        const newData = childData;\n        await setEmailData(newData);\n        console.log(emailData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MailViewContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                props: emailData\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/mainpage.tsx\",\n                lineNumber: 24,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MailListContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleCallback: CallBack\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/mainpage.tsx\",\n                lineNumber: 25,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/mainpage.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"cF0ETj2aha3dcNQ7Xo7wEGsdzbM=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL21haW5wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0Q7QUFDVjtBQUNhO0FBRW5ELE1BQU1JLE9BQU87O0lBRWIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTNDLG9CQUFvQjtJQUVwQix1Q0FBdUM7SUFFdkMsZ0NBQWdDO0lBRWhDLGVBQWU7SUFDYixNQUFNTSxXQUFZLE9BQU9DO1FBQ3ZCLE1BQU1DLFVBQVVEO1FBQ2hCLE1BQU1GLGFBQWFHO1FBQ25CQyxRQUFRQyxHQUFHLENBQUNOO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ1YsOERBQUNYLDBEQUFJQTtnQkFBQ1ksT0FBT1Q7Ozs7OzswQkFDYiw4REFBQ0YsMERBQWlCQTtnQkFBQ1ksZ0JBQWdCUjs7Ozs7Ozs7Ozs7O0FBRzVDO0dBdkJNSDtLQUFBQTtBQXlCTiwrREFBZ0JBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9tYWlucGFnZS50c3g/NTA2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNYWlsIGZyb20gJy4vTWFpbFZpZXdDb250YWluZXInXG5pbXBvcnQgTWFpbExpc3RDb250YWluZXIgZnJvbSAnLi9NYWlsTGlzdENvbnRhaW5lcidcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcblxuY29uc3QgW2VtYWlsRGF0YSwgc2V0RW1haWxEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG5cbi8vIGdldCB1bnJlYWQgZW1haWxzXG5cbi8vY2hlY2sgaWYgZW1haWwgaXMgd29ydGggcmVzcG9uZGluZyB0b1xuXG4vLyBnZW5lcmF0ZSByZXBsaWVzIHdpdGggY2hhdGdwdFxuXG4vL2RlbGV0ZSBlbWFpbHNcbiAgY29uc3QgQ2FsbEJhY2sgID0gYXN5bmMgKGNoaWxkRGF0YTogYW55KSAgPT4ge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBjaGlsZERhdGFcbiAgICBhd2FpdCBzZXRFbWFpbERhdGEobmV3RGF0YSlcbiAgICBjb25zb2xlLmxvZyhlbWFpbERhdGEpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cbiAgICAgICAgIDxNYWlsIHByb3BzPXtlbWFpbERhdGF9Lz5cbiAgICAgICAgIDxNYWlsTGlzdENvbnRhaW5lciBoYW5kbGVDYWxsYmFjaz17Q2FsbEJhY2t9Lz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCAgTWFpbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTWFpbCIsIk1haWxMaXN0Q29udGFpbmVyIiwiTWFpbiIsImVtYWlsRGF0YSIsInNldEVtYWlsRGF0YSIsIkNhbGxCYWNrIiwiY2hpbGREYXRhIiwibmV3RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9wcyIsImhhbmRsZUNhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/mainpage.tsx\n"));

/***/ })

});