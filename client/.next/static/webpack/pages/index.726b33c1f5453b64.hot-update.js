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

/***/ "./pages/Components/AI.tsx":
/*!*********************************!*\
  !*** ./pages/Components/AI.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AI = (email)=>{\n    _s();\n    const [trash, setTrash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [reply, setReply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const Reply = (id)=>{\n        fetch(\"https://127.0.0.1:8080/content/reply/\" + id).then((response)=>response.json()).then((data)=>setReply(data.reply)).then(()=>setLoading(false)) //get reply from chatgpt endpoint\n        ;\n    };\n    const delete_email = (id)=>{\n        fetch(\"http://127.0.0.1:8080/emails/\" + id, {\n            method: \"DELETE\"\n        }).then(()=>{\n            console.log(\"Email Deleted!\") //log success or something\n            ;\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (email.email != null) {\n            if (email.email.check == \"Yes\") {\n                Reply(email.email.id);\n            }\n        }\n    });\n    // have part that gets \"check\"\n    // if \"check\" == \"No\" then delete email (offer option)\n    // else, \n    // generate ai reply with api endpoint\n    // option to regenerate, keep (save) as draft\n    //considering: display justification for \"check\"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-950 rounded-lg py-4 px-4 mx-8 my-4 space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \" AI Suggestion\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined),\n            email.email == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"skeleton w-1/3 h-8\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 45,\n                columnNumber: 33\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" Should you reply to the email?\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"badge mx-2\",\n                                        children: [\n                                            \" \",\n                                            email.email.check,\n                                            \"  \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" Reason: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"my-2 btn btn-sm\",\n                                onClick: ()=>setTrash(false),\n                                children: \" Override \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, undefined),\n                    email.email.check != null && email.email.check == \"Yes\" || trash == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" AI Generated Reply \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" Subject: Reply to \",\n                                    email.email.subject,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, undefined),\n                            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"skeleton px-2 text-center py-1 text-sm font-bold\",\n                                children: \" Generating reply... \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 32\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"whitespace-pre\",\n                                children: [\n                                    \" \",\n                                    reply,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 51\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-sm w-1/5\",\n                        onClick: ()=>delete_email(email.email.id),\n                        children: \"Delete Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 19\n                    }, undefined) //delete button (because email is either spam/non-important)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AI, \"Mqjghq5muTJE/M7kr2T8e/VXSIc=\");\n_c = AI;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AI);\nvar _c;\n$RefreshReg$(_c, \"AI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL0FJLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2dEO0FBRWhELE1BQU1HLEtBQUssQ0FBQ0M7O0lBRVIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFFdkMsTUFBTVUsUUFBUyxDQUFDQztRQUNiQyxNQUFNLDBDQUEwQ0QsSUFBSUUsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQ2hGRixJQUFJLENBQUNHLENBQUFBLE9BQ05ULFNBQVNTLEtBQUtWLEtBQUssR0FDakJPLElBQUksQ0FBQyxJQUFLSixXQUFXLFFBQVEsaUNBQWlDOztJQUNwRTtJQUdBLE1BQU1RLGVBQWUsQ0FBQ047UUFDbEJDLE1BQU0sa0NBQWtDRCxJQUFJO1lBQUNPLFFBQVE7UUFBUSxHQUFHTCxJQUFJLENBQUM7WUFFakVNLFFBQVFDLEdBQUcsQ0FBQyxrQkFBbUIsMEJBQTBCOztRQUM3RDtJQUNKO0lBRUFuQixnREFBU0EsQ0FBQztRQUNOLElBQUlFLE1BQU1BLEtBQUssSUFBSSxNQUFNO1lBQ3JCLElBQUlBLE1BQU1BLEtBQUssQ0FBQ2tCLEtBQUssSUFBSSxPQUN6QjtnQkFDSVgsTUFBTVAsTUFBTUEsS0FBSyxDQUFDUSxFQUFFO1lBQ3hCO1FBQ0o7SUFDSjtJQUNKLDhCQUE4QjtJQUM5QixzREFBc0Q7SUFDdEQsU0FBUztJQUNULHNDQUFzQztJQUN0Qyw2Q0FBNkM7SUFFN0MsZ0RBQWdEO0lBRTlDLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQVU7Ozs7OztZQUV0QnBCLE1BQU1BLEtBQUssSUFBSSxxQkFBTyw4REFBQ3FCO2dCQUFHRCxXQUFVOzBCQUFxQjs7Ozs7MENBQ3ZELDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEOzswQ0FDRyw4REFBQ0U7O29DQUFHO2tEQUNBLDhEQUFDQzt3Q0FBRUYsV0FBVTs7NENBQWE7NENBQUVwQixNQUFNQSxLQUFLLENBQUNrQixLQUFLOzRDQUFDOzs7Ozs7Ozs7Ozs7OzBDQUVsRCw4REFBQ0c7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0U7Z0NBQU9ILFdBQVU7Z0NBQWtCSSxTQUFTLElBQUt0QixTQUFTOzBDQUFROzs7Ozs7Ozs7Ozs7b0JBRzFFRixNQUFNQSxLQUFLLENBQUNrQixLQUFLLElBQUksUUFBUWxCLE1BQU1BLEtBQUssQ0FBQ2tCLEtBQUssSUFBSSxTQUFTakIsU0FBUyxzQkFFakUsOERBQUNrQjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNDOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOztvQ0FBRztvQ0FBb0JyQixNQUFNQSxLQUFLLENBQUN5QixPQUFPO29DQUFDOzs7Ozs7OzRCQUMzQ3BCLHdCQUFVLDhEQUFDaUI7Z0NBQUVGLFdBQVU7MENBQW1EOzs7OzswREFDN0MsOERBQUNFO2dDQUFFRixXQUFVOztvQ0FBaUI7b0NBQUVqQjtvQ0FBTTs7Ozs7Ozs7Ozs7O2tEQUd0RSw4REFBQ29CO3dCQUFPSCxXQUFVO3dCQUFtQkksU0FBUyxJQUFJVixhQUFhZCxNQUFNQSxLQUFLLENBQUNRLEVBQUU7a0NBQUc7Ozs7O2tDQUV4RSw0REFBNEQ7Ozs7Ozs7Ozs7Ozs7QUFNdEY7R0FwRU1UO0tBQUFBO0FBc0VOLCtEQUFlQSxFQUFFQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvQUkudHN4PzkzZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEFJID0gKGVtYWlsOmFueSkgPT4ge1xuXG4gICAgY29uc3QgW3RyYXNoLCBzZXRUcmFzaF0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtyZXBseSwgc2V0UmVwbHldID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuICAgIGNvbnN0IFJlcGx5ICA9IChpZDpudW1iZXIpID0+IHtcbiAgICAgICBmZXRjaChcImh0dHBzOi8vMTI3LjAuMC4xOjgwODAvY29udGVudC9yZXBseS9cIiArIGlkKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICkudGhlbihkYXRhID0+IFxuICAgICAgICBzZXRSZXBseShkYXRhLnJlcGx5KVxuICAgICAgICApLnRoZW4oKCk9PiBzZXRMb2FkaW5nKGZhbHNlKSkgLy9nZXQgcmVwbHkgZnJvbSBjaGF0Z3B0IGVuZHBvaW50XG4gICAgfVxuXG5cbiAgICBjb25zdCBkZWxldGVfZW1haWwgPSAoaWQ6bnVtYmVyKSA9PiB7XG4gICAgICAgIGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4MDgwL2VtYWlscy9cIiArIGlkLCB7bWV0aG9kOiAnREVMRVRFJ30pLnRoZW4oKCkgPT4gXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgRGVsZXRlZCFcIikgIC8vbG9nIHN1Y2Nlc3Mgb3Igc29tZXRoaW5nXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGVtYWlsLmVtYWlsICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChlbWFpbC5lbWFpbC5jaGVjayA9PSBcIlllc1wiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFJlcGx5KGVtYWlsLmVtYWlsLmlkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbi8vIGhhdmUgcGFydCB0aGF0IGdldHMgXCJjaGVja1wiXG4vLyBpZiBcImNoZWNrXCIgPT0gXCJOb1wiIHRoZW4gZGVsZXRlIGVtYWlsIChvZmZlciBvcHRpb24pXG4vLyBlbHNlLCBcbi8vIGdlbmVyYXRlIGFpIHJlcGx5IHdpdGggYXBpIGVuZHBvaW50XG4vLyBvcHRpb24gdG8gcmVnZW5lcmF0ZSwga2VlcCAoc2F2ZSkgYXMgZHJhZnRcblxuLy9jb25zaWRlcmluZzogZGlzcGxheSBqdXN0aWZpY2F0aW9uIGZvciBcImNoZWNrXCJcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtOTUwIHJvdW5kZWQtbGcgcHktNCBweC00IG14LTggbXktNCBzcGFjZS15LTRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1zbSc+IEFJIFN1Z2dlc3Rpb248L2gxPlxuXG4gICAgICAgIHsgZW1haWwuZW1haWwgPT0gbnVsbCA/IDxoMSBjbGFzc05hbWU9XCJza2VsZXRvbiB3LTEvMyBoLThcIj4gPC9oMT46IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTInPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMT4gU2hvdWxkIHlvdSByZXBseSB0byB0aGUgZW1haWw/IFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdiYWRnZSBteC0yJz4ge2VtYWlsLmVtYWlsLmNoZWNrfSAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDE+IFJlYXNvbjogPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJteS0yIGJ0biBidG4tc21cIiBvbkNsaWNrPXsoKT0+IHNldFRyYXNoKGZhbHNlKX0+IE92ZXJyaWRlIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7ZW1haWwuZW1haWwuY2hlY2sgIT0gbnVsbCAmJiBlbWFpbC5lbWFpbC5jaGVjayA9PSBcIlllc1wiIHx8IHRyYXNoID09IGZhbHNlID9cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZS15LTInPlxuICAgICAgICAgICAgICAgICAgICA8aDE+IEFJIEdlbmVyYXRlZCBSZXBseSA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDE+IFN1YmplY3Q6IFJlcGx5IHRvIHtlbWFpbC5lbWFpbC5zdWJqZWN0fSA8L2gxPlxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxwIGNsYXNzTmFtZT0nc2tlbGV0b24gcHgtMiB0ZXh0LWNlbnRlciBweS0xIHRleHQtc20gZm9udC1ib2xkJz4gR2VuZXJhdGluZyByZXBseS4uLiA8L3A+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLXByZVwiPiB7cmVwbHl9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6IDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXNtIHctMS81JyBvbkNsaWNrPXsoKT0+ZGVsZXRlX2VtYWlsKGVtYWlsLmVtYWlsLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgIERlbGV0ZSBFbWFpbFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAvL2RlbGV0ZSBidXR0b24gKGJlY2F1c2UgZW1haWwgaXMgZWl0aGVyIHNwYW0vbm9uLWltcG9ydGFudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQUkiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFJIiwiZW1haWwiLCJ0cmFzaCIsInNldFRyYXNoIiwicmVwbHkiLCJzZXRSZXBseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiUmVwbHkiLCJpZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkZWxldGVfZW1haWwiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiY2hlY2siLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwic3ViamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Components/AI.tsx\n"));

/***/ })

});