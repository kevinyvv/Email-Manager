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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Mail = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4 bg-slate-950 rounded-lg py-4 px-8 left-0 w-1/2 mx-8 my-4 h-96\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \"Mail Viewer\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, undefined),\n            props.props == null || props.props.sender == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"skeleton w-1/3 h-8\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 11,\n                columnNumber: 62\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"px-2 outline rounded-sm font-bold\",\n                children: [\n                    \" From: \",\n                    props.props.sender,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined),\n            props.props == null || props.props.dt == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"skeleton w-1/2 h-8\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 15,\n                columnNumber: 58\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"px-2 outline rounded-sm font-bold\",\n                children: [\n                    \" Date: \",\n                    props.props.dt,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined),\n            props.props == null || props.props.subject == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"skeleton h-8\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 19,\n                columnNumber: 63\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"px-2 outline rounded-sm font-bold\",\n                children: [\n                    \" Subject: \",\n                    props.props.subject,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined),\n            props.props == null || props.props.content == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"skeleton w-100 h-36 text-center py-2\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 23,\n                columnNumber: 63\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"outline px-2 rounded-sm outline-1 h-1/2 overflow-y-scroll whitespace-pre\",\n                children: [\n                    \" \",\n                    props.props.content,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailViewContainer.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Mail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mail);\nvar _c;\n$RefreshReg$(_c, \"Mail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL01haWxWaWV3Q29udGFpbmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDeUI7QUFHekIsTUFBTUMsT0FBTyxDQUFDQztJQUVWLHFCQUNBLDhEQUFDQztRQUFJQyxXQUFVOzswQkFFZiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQVU7Ozs7OztZQUNuQkYsTUFBTUEsS0FBSyxJQUFJLFFBQVFBLE1BQU1BLEtBQUssQ0FBQ0ksTUFBTSxJQUFJLHFCQUFPLDhEQUFDRDtnQkFBR0QsV0FBVTswQkFBcUI7Ozs7OzBDQUV4Riw4REFBQ0M7Z0JBQUdELFdBQVU7O29CQUFvQztvQkFBUUYsTUFBTUEsS0FBSyxDQUFDSSxNQUFNO29CQUFDOzs7Ozs7O1lBRTVFSixNQUFNQSxLQUFLLElBQUksUUFBUUEsTUFBTUEsS0FBSyxDQUFDSyxFQUFFLElBQUkscUJBQU8sOERBQUNDO2dCQUFHSixXQUFVOzBCQUFxQjs7Ozs7MENBRXBGLDhEQUFDSTtnQkFBR0osV0FBVTs7b0JBQW9DO29CQUFRRixNQUFNQSxLQUFLLENBQUNLLEVBQUU7b0JBQUM7Ozs7Ozs7WUFFeEVMLE1BQU1BLEtBQUssSUFBSSxRQUFRQSxNQUFNQSxLQUFLLENBQUNPLE9BQU8sSUFBSSxxQkFBTyw4REFBQ0M7Z0JBQUdOLFdBQVU7MEJBQWU7Ozs7OzBDQUVuRiw4REFBQ007Z0JBQUdOLFdBQVU7O29CQUFvQztvQkFBV0YsTUFBTUEsS0FBSyxDQUFDTyxPQUFPO29CQUFDOzs7Ozs7O1lBRWhGUCxNQUFNQSxLQUFLLElBQUksUUFBUUEsTUFBTUEsS0FBSyxDQUFDUyxPQUFPLElBQUkscUJBQU8sOERBQUNDO2dCQUFFUixXQUFVOzs7OzswQ0FDbkUsOERBQUNRO2dCQUFFUixXQUFVOztvQkFBMkU7b0JBQUVGLE1BQU1BLEtBQUssQ0FBQ1MsT0FBTztvQkFBQzs7Ozs7Ozs7Ozs7OztBQUl0SDtLQXZCTVY7QUF5Qk4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9NYWlsVmlld0NvbnRhaW5lci50c3g/YWI1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuXG5jb25zdCBNYWlsID0gKHByb3BzOmFueSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBiZy1zbGF0ZS05NTAgcm91bmRlZC1sZyBweS00IHB4LTggbGVmdC0wIHctMS8yIG14LTggbXktNCBoLTk2XCI+IFxuXG4gICAgPGgxIGNsYXNzTmFtZT1cInRleHQtc21cIj5NYWlsIFZpZXdlcjwvaDE+XG4gICAgICAgIHtwcm9wcy5wcm9wcyA9PSBudWxsIHx8IHByb3BzLnByb3BzLnNlbmRlciA9PSBudWxsID8gPGgxIGNsYXNzTmFtZT1cInNrZWxldG9uIHctMS8zIGgtOFwiPiA8L2gxPjogXG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB4LTIgb3V0bGluZSByb3VuZGVkLXNtIGZvbnQtYm9sZFwiPiBGcm9tOiB7cHJvcHMucHJvcHMuc2VuZGVyfSA8L2gxPn1cblxuICAgICAgICB7cHJvcHMucHJvcHMgPT0gbnVsbCB8fCBwcm9wcy5wcm9wcy5kdCA9PSBudWxsID8gPGgyIGNsYXNzTmFtZT1cInNrZWxldG9uIHctMS8yIGgtOFwiPiA8L2gyPjogXG5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInB4LTIgb3V0bGluZSByb3VuZGVkLXNtIGZvbnQtYm9sZFwiPiBEYXRlOiB7cHJvcHMucHJvcHMuZHR9IDwvaDI+fVxuXG4gICAgICAgIHtwcm9wcy5wcm9wcyA9PSBudWxsIHx8IHByb3BzLnByb3BzLnN1YmplY3QgPT0gbnVsbCA/IDxoMyBjbGFzc05hbWU9XCJza2VsZXRvbiBoLThcIj4gPC9oMz46XG5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInB4LTIgb3V0bGluZSByb3VuZGVkLXNtIGZvbnQtYm9sZFwiPiBTdWJqZWN0OiB7cHJvcHMucHJvcHMuc3ViamVjdH0gPC9oMz59XG5cbiAgICAgICAge3Byb3BzLnByb3BzID09IG51bGwgfHwgcHJvcHMucHJvcHMuY29udGVudCA9PSBudWxsID8gPHAgY2xhc3NOYW1lPVwic2tlbGV0b24gdy0xMDAgaC0zNiB0ZXh0LWNlbnRlciBweS0yXCI+PC9wPjpcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwib3V0bGluZSBweC0yIHJvdW5kZWQtc20gb3V0bGluZS0xIGgtMS8yIG92ZXJmbG93LXktc2Nyb2xsIHdoaXRlc3BhY2UtcHJlXCI+IHtwcm9wcy5wcm9wcy5jb250ZW50fSA8L3A+fVxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbCJdLCJuYW1lcyI6WyJSZWFjdCIsIk1haWwiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic2VuZGVyIiwiZHQiLCJoMiIsInN1YmplY3QiLCJoMyIsImNvbnRlbnQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/MailViewContainer.tsx\n"));

/***/ })

});