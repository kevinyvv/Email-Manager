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

/***/ "./pages/Components/MailViewContainer.tsx":
/*!************************************************!*\
  !*** ./pages/Components/MailViewContainer.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst Mail = (props)=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(props);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4 bg-slate-950 rounded-lg py-4 px-8 left-0 w-1/2 mx-8 my-4 h-96\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm py-2\",\n                children: \"Mail Viewer\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, undefined),\n            props.props.sender == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"skeleton w-1/3 h-8\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 14,\n                columnNumber: 39\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"px-2 outline rounded-sm font-bold\",\n                children: [\n                    \" From: \",\n                    props.props.sender,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined),\n            props.props.dt == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"skeleton w-1/2 h-8\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 18,\n                columnNumber: 35\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"px-2 outline rounded-sm font-bold\",\n                children: [\n                    \" Date: \",\n                    props.props.dt,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, undefined),\n            props.props.subject == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"skeleton h-8\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 22,\n                columnNumber: 40\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"px-2 outline rounded-sm font-bold\",\n                children: [\n                    \" Subject: \",\n                    props.props.subject,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined),\n            props.props.content == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"skeleton w-100 h-36\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 26,\n                columnNumber: 40\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"outline px-2 rounded-sm outline-1 overflow-y-scroll\",\n                children: [\n                    \" \",\n                    props.props.content,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Mail, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Mail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mail);\nvar _c;\n$RefreshReg$(_c, \"Mail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL01haWxWaWV3Q29udGFpbmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ2xCO0FBR3pCLE1BQU1FLE9BQU8sQ0FBQ0M7O0lBRVZILGdEQUFTQSxDQUFDO1FBQ1JJLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZCxHQUFHLEVBQUU7SUFFTCxxQkFDQSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2YsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFlOzs7Ozs7WUFDeEJKLE1BQU1BLEtBQUssQ0FBQ00sTUFBTSxJQUFJLHFCQUFPLDhEQUFDRDtnQkFBR0QsV0FBVTswQkFBcUI7Ozs7OzBDQUVqRSw4REFBQ0M7Z0JBQUdELFdBQVU7O29CQUFvQztvQkFBUUosTUFBTUEsS0FBSyxDQUFDTSxNQUFNO29CQUFDOzs7Ozs7O1lBRTVFTixNQUFNQSxLQUFLLENBQUNPLEVBQUUsSUFBSSxxQkFBTyw4REFBQ0M7Z0JBQUdKLFdBQVU7MEJBQXFCOzs7OzswQ0FFN0QsOERBQUNJO2dCQUFHSixXQUFVOztvQkFBb0M7b0JBQVFKLE1BQU1BLEtBQUssQ0FBQ08sRUFBRTtvQkFBQzs7Ozs7OztZQUV4RVAsTUFBTUEsS0FBSyxDQUFDUyxPQUFPLElBQUkscUJBQU8sOERBQUNDO2dCQUFHTixXQUFVOzBCQUFlOzs7OzswQ0FFNUQsOERBQUNNO2dCQUFHTixXQUFVOztvQkFBb0M7b0JBQVdKLE1BQU1BLEtBQUssQ0FBQ1MsT0FBTztvQkFBQzs7Ozs7OztZQUVoRlQsTUFBTUEsS0FBSyxDQUFDVyxPQUFPLElBQUkscUJBQU8sOERBQUNDO2dCQUFFUixXQUFVOzBCQUFzQjs7Ozs7MENBQ2xFLDhEQUFDUTtnQkFBRVIsV0FBVTs7b0JBQXNEO29CQUFFSixNQUFNQSxLQUFLLENBQUNXLE9BQU87b0JBQUM7Ozs7Ozs7Ozs7Ozs7QUFHakc7R0F6Qk1aO0tBQUFBO0FBMkJOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvTWFpbFZpZXdDb250YWluZXIudHN4P2FiNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuY29uc3QgTWFpbCA9IChwcm9wczphbnkpID0+IHtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwcm9wcylcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgYmctc2xhdGUtOTUwIHJvdW5kZWQtbGcgcHktNCBweC04IGxlZnQtMCB3LTEvMiBteC04IG15LTQgaC05NlwiPiBcbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zbSBweS0yXCI+TWFpbCBWaWV3ZXI8L2gxPlxuICAgICAgICB7cHJvcHMucHJvcHMuc2VuZGVyID09IG51bGwgPyA8aDEgY2xhc3NOYW1lPVwic2tlbGV0b24gdy0xLzMgaC04XCI+IDwvaDE+OiBcblxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHgtMiBvdXRsaW5lIHJvdW5kZWQtc20gZm9udC1ib2xkXCI+IEZyb206IHtwcm9wcy5wcm9wcy5zZW5kZXJ9IDwvaDE+fVxuXG4gICAgICAgIHtwcm9wcy5wcm9wcy5kdCA9PSBudWxsID8gPGgyIGNsYXNzTmFtZT1cInNrZWxldG9uIHctMS8yIGgtOFwiPiA8L2gyPjogXG5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInB4LTIgb3V0bGluZSByb3VuZGVkLXNtIGZvbnQtYm9sZFwiPiBEYXRlOiB7cHJvcHMucHJvcHMuZHR9IDwvaDI+fVxuXG4gICAgICAgIHtwcm9wcy5wcm9wcy5zdWJqZWN0ID09IG51bGwgPyA8aDMgY2xhc3NOYW1lPVwic2tlbGV0b24gaC04XCI+IDwvaDM+OlxuXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJweC0yIG91dGxpbmUgcm91bmRlZC1zbSBmb250LWJvbGRcIj4gU3ViamVjdDoge3Byb3BzLnByb3BzLnN1YmplY3R9IDwvaDM+fVxuXG4gICAgICAgIHtwcm9wcy5wcm9wcy5jb250ZW50ID09IG51bGwgPyA8cCBjbGFzc05hbWU9XCJza2VsZXRvbiB3LTEwMCBoLTM2XCI+IDwvcD46XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm91dGxpbmUgcHgtMiByb3VuZGVkLXNtIG91dGxpbmUtMSBvdmVyZmxvdy15LXNjcm9sbFwiPiB7cHJvcHMucHJvcHMuY29udGVudH0gPC9wPn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWlsIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlJlYWN0IiwiTWFpbCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic2VuZGVyIiwiZHQiLCJoMiIsInN1YmplY3QiLCJoMyIsImNvbnRlbnQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/MailViewContainer.tsx\n"));

/***/ })

});