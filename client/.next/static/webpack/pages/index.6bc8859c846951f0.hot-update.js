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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AI = (email)=>{\n    _s();\n    const [trash, setTrash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [reply, setReply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    function discard(reply) {\n        if (reply == \"No\") {\n            setTrash(true);\n        } else {\n            setTrash(false);\n        }\n    }\n    const Reply = (id)=>{\n        fetch(\"https://127.0.0.1:8080/content/reply/\" + id).then((response)=>response.json()).then((data)=>setReply(data.reply)).then(()=>setLoading(false)) //get reply from chatgpt endpoint\n        ;\n    };\n    const delete_email = (id)=>{\n        fetch(\"http://127.0.0.1:8080/emails/\" + id, {\n            method: \"DELETE\"\n        }).then(()=>{\n            console.log(\"Email Deleted!\") //log success or something\n            ;\n        });\n    };\n    // have part that gets \"check\"\n    // if \"check\" == \"No\" then delete email (offer option)\n    // else, \n    // generate ai reply with api endpoint\n    // option to regenerate, keep (save) as draft\n    //considering: display justification for \"check\"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-950 rounded-lg py-4 px-4 mx-8 my-4 space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \" AI Suggestion\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2\",\n                children: [\n                    email.email == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"skeleton w-1/3 h-8\",\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 33\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" Should you reply to the email?\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"badge mx-2\",\n                                        children: [\n                                            \" \",\n                                            email.email.check,\n                                            \"  \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" Reason: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined),\n                    email.email != null && email.email.check != null && trash == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" AI Generated Reply \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" Subject: Reply to \",\n                                    email.email.subject,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"whitespace-pre\",\n                                children: [\n                                    \" \",\n                                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"skeleton px-2\",\n                                        children: \" Generating reply... \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 60\n                                    }, undefined) : reply,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-sm w-1/5\",\n                        onClick: ()=>delete_email(email.email.id),\n                        children: \"Delete Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 15\n                    }, undefined) //delete button (because email is either spam/non-important)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AI, \"f2BPJSSqrcPrEkey3+VJhk73hGc=\");\n_c = AI;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AI);\nvar _c;\n$RefreshReg$(_c, \"AI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL0FJLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBRWhELE1BQU1FLEtBQUssQ0FBQ0M7O0lBRVIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFFdkMsU0FBU1MsUUFBU0osS0FBWTtRQUMxQixJQUFJQSxTQUFTLE1BQU07WUFDZkQsU0FBUztRQUNiLE9BQ0s7WUFDREEsU0FBUztRQUNiO0lBQ0o7SUFFQSxNQUFNTSxRQUFTLENBQUNDO1FBQ2JDLE1BQU0sMENBQTBDRCxJQUFJRSxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFDaEZGLElBQUksQ0FBQ0csQ0FBQUEsT0FDTlYsU0FBU1UsS0FBS1gsS0FBSyxHQUNqQlEsSUFBSSxDQUFDLElBQUtMLFdBQVcsUUFBUSxpQ0FBaUM7O0lBQ3BFO0lBR0EsTUFBTVMsZUFBZSxDQUFDTjtRQUNsQkMsTUFBTSxrQ0FBa0NELElBQUk7WUFBQ08sUUFBUTtRQUFRLEdBQUdMLElBQUksQ0FBQztZQUVqRU0sUUFBUUMsR0FBRyxDQUFDLGtCQUFtQiwwQkFBMEI7O1FBQzdEO0lBQ0o7SUFHSiw4QkFBOEI7SUFDOUIsc0RBQXNEO0lBQ3RELFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMsNkNBQTZDO0lBRTdDLGdEQUFnRDtJQUU5QyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFVOzs7Ozs7MEJBRXhCLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQ2JwQixNQUFNQSxLQUFLLElBQUkscUJBQU8sOERBQUNxQjt3QkFBR0QsV0FBVTtrQ0FBcUI7Ozs7O2tEQUN2RCw4REFBQ0Q7OzBDQUNHLDhEQUFDRTs7b0NBQUc7a0RBQ0EsOERBQUNDO3dDQUFFRixXQUFVOzs0Q0FBYTs0Q0FBRXBCLE1BQU1BLEtBQUssQ0FBQ3VCLEtBQUs7NENBQUM7Ozs7Ozs7Ozs7Ozs7MENBRWxELDhEQUFDRjswQ0FBRzs7Ozs7Ozs7Ozs7O29CQUdWckIsTUFBTUEsS0FBSyxJQUFJLFFBQVFBLE1BQU1BLEtBQUssQ0FBQ3VCLEtBQUssSUFBSSxRQUFRdEIsU0FBUyxzQkFDM0QsOERBQUNrQjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNDOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOztvQ0FBRztvQ0FBb0JyQixNQUFNQSxLQUFLLENBQUN3QixPQUFPO29DQUFDOzs7Ozs7OzBDQUM1Qyw4REFBQ0M7Z0NBQUdMLFdBQVU7O29DQUFpQjtvQ0FBRWYsd0JBQVUsOERBQUNpQjt3Q0FBRUYsV0FBVTtrREFBZ0I7Ozs7O29EQUN0Q2pCO29DQUFNOzs7Ozs7Ozs7Ozs7a0RBRTFDLDhEQUFDdUI7d0JBQU9OLFdBQVU7d0JBQW1CTyxTQUFTLElBQUlaLGFBQWFmLE1BQU1BLEtBQUssQ0FBQ1MsRUFBRTtrQ0FBRzs7Ozs7a0NBRXhFLDREQUE0RDs7Ozs7Ozs7Ozs7OztBQUtsRjtHQWxFTVY7S0FBQUE7QUFvRU4sK0RBQWVBLEVBQUVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9BSS50c3g/OTNmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuY29uc3QgQUkgPSAoZW1haWw6YW55KSA9PiB7XG5cbiAgICBjb25zdCBbdHJhc2gsIHNldFRyYXNoXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtyZXBseSwgc2V0UmVwbHldID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuICAgIGZ1bmN0aW9uIGRpc2NhcmQgKHJlcGx5OlN0cmluZykgeyAvL3doZXRoZXIgb3Igbm90IHRvIHJlcGx5XG4gICAgICAgIGlmIChyZXBseSA9PSBcIk5vXCIpIHtcbiAgICAgICAgICAgIHNldFRyYXNoKHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUcmFzaChmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IFJlcGx5ICA9IChpZDpudW1iZXIpID0+IHtcbiAgICAgICBmZXRjaChcImh0dHBzOi8vMTI3LjAuMC4xOjgwODAvY29udGVudC9yZXBseS9cIiArIGlkKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICkudGhlbihkYXRhID0+IFxuICAgICAgICBzZXRSZXBseShkYXRhLnJlcGx5KVxuICAgICAgICApLnRoZW4oKCk9PiBzZXRMb2FkaW5nKGZhbHNlKSkgLy9nZXQgcmVwbHkgZnJvbSBjaGF0Z3B0IGVuZHBvaW50XG4gICAgfVxuXG5cbiAgICBjb25zdCBkZWxldGVfZW1haWwgPSAoaWQ6bnVtYmVyKSA9PiB7XG4gICAgICAgIGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4MDgwL2VtYWlscy9cIiArIGlkLCB7bWV0aG9kOiAnREVMRVRFJ30pLnRoZW4oKCkgPT4gXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgRGVsZXRlZCFcIikgIC8vbG9nIHN1Y2Nlc3Mgb3Igc29tZXRoaW5nXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbi8vIGhhdmUgcGFydCB0aGF0IGdldHMgXCJjaGVja1wiXG4vLyBpZiBcImNoZWNrXCIgPT0gXCJOb1wiIHRoZW4gZGVsZXRlIGVtYWlsIChvZmZlciBvcHRpb24pXG4vLyBlbHNlLCBcbi8vIGdlbmVyYXRlIGFpIHJlcGx5IHdpdGggYXBpIGVuZHBvaW50XG4vLyBvcHRpb24gdG8gcmVnZW5lcmF0ZSwga2VlcCAoc2F2ZSkgYXMgZHJhZnRcblxuLy9jb25zaWRlcmluZzogZGlzcGxheSBqdXN0aWZpY2F0aW9uIGZvciBcImNoZWNrXCJcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtOTUwIHJvdW5kZWQtbGcgcHktNCBweC00IG14LTggbXktNCBzcGFjZS15LTRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1zbSc+IEFJIFN1Z2dlc3Rpb248L2gxPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTInPlxuICAgICAgICB7IGVtYWlsLmVtYWlsID09IG51bGwgPyA8aDEgY2xhc3NOYW1lPVwic2tlbGV0b24gdy0xLzMgaC04XCI+IDwvaDE+OiBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPiBTaG91bGQgeW91IHJlcGx5IHRvIHRoZSBlbWFpbD8gXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYmFkZ2UgbXgtMic+IHtlbWFpbC5lbWFpbC5jaGVja30gIDwvcD5cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIDxoMT4gUmVhc29uOiA8L2gxPiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHsgZW1haWwuZW1haWwgIT0gbnVsbCAmJiBlbWFpbC5lbWFpbC5jaGVjayAhPSBudWxsICYmIHRyYXNoID09IGZhbHNlID8gIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlLXktMic+XG4gICAgICAgICAgICAgICAgPGgxPiBBSSBHZW5lcmF0ZWQgUmVwbHkgPC9oMT5cbiAgICAgICAgICAgICAgICA8aDE+IFN1YmplY3Q6IFJlcGx5IHRvIHtlbWFpbC5lbWFpbC5zdWJqZWN0fSA8L2gxPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3doaXRlc3BhY2UtcHJlJz4ge2xvYWRpbmcgPyA8cCBjbGFzc05hbWU9J3NrZWxldG9uIHB4LTInPiBHZW5lcmF0aW5nIHJlcGx5Li4uIDwvcD4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJlcGx5fSA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXNtIHctMS81JyBvbkNsaWNrPXsoKT0+ZGVsZXRlX2VtYWlsKGVtYWlsLmVtYWlsLmlkKX0+XG4gICAgICAgICAgICAgICAgRGVsZXRlIEVtYWlsXG4gICAgICAgICAgICA8L2J1dHRvbj4gLy9kZWxldGUgYnV0dG9uIChiZWNhdXNlIGVtYWlsIGlzIGVpdGhlciBzcGFtL25vbi1pbXBvcnRhbnQpXG4gICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQUkiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFJIiwiZW1haWwiLCJ0cmFzaCIsInNldFRyYXNoIiwicmVwbHkiLCJzZXRSZXBseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGlzY2FyZCIsIlJlcGx5IiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZGVsZXRlX2VtYWlsIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImNoZWNrIiwic3ViamVjdCIsImgzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Components/AI.tsx\n"));

/***/ })

});