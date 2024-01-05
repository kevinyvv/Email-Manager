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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AI = (email)=>{\n    _s();\n    const [trash, setTrash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [reply, setReply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const Reply = (id)=>{\n        fetch(\"https://127.0.0.1:8080/content/reply/\" + id).then((response)=>response.json()).then((data)=>setReply(data.reply)).then(()=>setLoading(false)) //get reply from chatgpt endpoint\n        ;\n    };\n    const delete_email = (id)=>{\n        fetch(\"http://127.0.0.1:8080/emails/\" + id, {\n            method: \"DELETE\"\n        }).then(()=>{\n            console.log(\"Email Deleted!\") //log success or something\n            ;\n        });\n    };\n    // have part that gets \"check\"\n    // if \"check\" == \"No\" then delete email (offer option)\n    // else, \n    // generate ai reply with api endpoint\n    // option to regenerate, keep (save) as draft\n    //considering: display justification for \"check\"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-950 rounded-lg py-4 px-4 mx-8 my-4 space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \" AI Suggestion\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined),\n            email.email == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"skeleton w-1/3 h-8\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 38,\n                columnNumber: 33\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" Should you reply to the email?\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"badge mx-2\",\n                                        children: [\n                                            \" \",\n                                            email.email.check,\n                                            \"  \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" Reason: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    email.email.check != null && email.email.check == \"No\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2\",\n                        onLoad: ()=>Reply(email.email.id),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" AI Generated Reply \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" Subject: Reply to \",\n                                    email.email.subject,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined),\n                            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"skeleton px-2 text-center text-sm font-bold\",\n                                children: \" Generating reply... \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 36\n                            }, undefined) : reply\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-sm w-1/5\",\n                        onClick: ()=>delete_email(email.email.id),\n                        children: \"Delete Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 19\n                    }, undefined) //delete button (because email is either spam/non-important)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AI, \"f2BPJSSqrcPrEkey3+VJhk73hGc=\");\n_c = AI;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AI);\nvar _c;\n$RefreshReg$(_c, \"AI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL0FJLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2dEO0FBRWhELE1BQU1FLEtBQUssQ0FBQ0M7O0lBRVIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFFdkMsTUFBTVMsUUFBUyxDQUFDQztRQUNiQyxNQUFNLDBDQUEwQ0QsSUFBSUUsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQ2hGRixJQUFJLENBQUNHLENBQUFBLE9BQ05ULFNBQVNTLEtBQUtWLEtBQUssR0FDakJPLElBQUksQ0FBQyxJQUFLSixXQUFXLFFBQVEsaUNBQWlDOztJQUNwRTtJQUdBLE1BQU1RLGVBQWUsQ0FBQ047UUFDbEJDLE1BQU0sa0NBQWtDRCxJQUFJO1lBQUNPLFFBQVE7UUFBUSxHQUFHTCxJQUFJLENBQUM7WUFFakVNLFFBQVFDLEdBQUcsQ0FBQyxrQkFBbUIsMEJBQTBCOztRQUM3RDtJQUNKO0lBR0osOEJBQThCO0lBQzlCLHNEQUFzRDtJQUN0RCxTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLDZDQUE2QztJQUU3QyxnREFBZ0Q7SUFFOUMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBVTs7Ozs7O1lBRXRCbkIsTUFBTUEsS0FBSyxJQUFJLHFCQUFPLDhEQUFDb0I7Z0JBQUdELFdBQVU7MEJBQXFCOzs7OzswQ0FDdkQsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7OzBDQUNHLDhEQUFDRTs7b0NBQUc7a0RBQ0EsOERBQUNDO3dDQUFFRixXQUFVOzs0Q0FBYTs0Q0FBRW5CLE1BQU1BLEtBQUssQ0FBQ3NCLEtBQUs7NENBQUM7Ozs7Ozs7Ozs7Ozs7MENBRWxELDhEQUFDRjswQ0FBRzs7Ozs7Ozs7Ozs7O29CQUdYcEIsTUFBTUEsS0FBSyxDQUFDc0IsS0FBSyxJQUFJLFFBQVF0QixNQUFNQSxLQUFLLENBQUNzQixLQUFLLElBQUkscUJBQy9DLDhEQUFDSjt3QkFBSUMsV0FBVTt3QkFBWUksUUFBUSxJQUFJaEIsTUFBTVAsTUFBTUEsS0FBSyxDQUFDUSxFQUFFOzswQ0FDdkQsOERBQUNZOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOztvQ0FBRztvQ0FBb0JwQixNQUFNQSxLQUFLLENBQUN3QixPQUFPO29DQUFDOzs7Ozs7OzRCQUN2Q25CLHdCQUFVLDhEQUFDZ0I7Z0NBQUVGLFdBQVU7MENBQThDOzs7Ozs0Q0FDNUNoQjs7Ozs7O2tEQUVoQyw4REFBQ3NCO3dCQUFPTixXQUFVO3dCQUFtQk8sU0FBUyxJQUFJWixhQUFhZCxNQUFNQSxLQUFLLENBQUNRLEVBQUU7a0NBQUc7Ozs7O2tDQUV4RSw0REFBNEQ7Ozs7Ozs7Ozs7Ozs7QUFPdEY7R0EzRE1UO0tBQUFBO0FBNkROLCtEQUFlQSxFQUFFQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvQUkudHN4PzkzZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEFJID0gKGVtYWlsOmFueSkgPT4ge1xuXG4gICAgY29uc3QgW3RyYXNoLCBzZXRUcmFzaF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbcmVwbHksIHNldFJlcGx5XSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICBjb25zdCBSZXBseSAgPSAoaWQ6bnVtYmVyKSA9PiB7XG4gICAgICAgZmV0Y2goXCJodHRwczovLzEyNy4wLjAuMTo4MDgwL2NvbnRlbnQvcmVwbHkvXCIgKyBpZCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKClcbiAgICAgICApLnRoZW4oZGF0YSA9PiBcbiAgICAgICAgc2V0UmVwbHkoZGF0YS5yZXBseSlcbiAgICAgICAgKS50aGVuKCgpPT4gc2V0TG9hZGluZyhmYWxzZSkpIC8vZ2V0IHJlcGx5IGZyb20gY2hhdGdwdCBlbmRwb2ludFxuICAgIH1cblxuXG4gICAgY29uc3QgZGVsZXRlX2VtYWlsID0gKGlkOm51bWJlcikgPT4ge1xuICAgICAgICBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9lbWFpbHMvXCIgKyBpZCwge21ldGhvZDogJ0RFTEVURSd9KS50aGVuKCgpID0+IFxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVtYWlsIERlbGV0ZWQhXCIpICAvL2xvZyBzdWNjZXNzIG9yIHNvbWV0aGluZ1xuICAgICAgICB9KVxuICAgIH1cblxuXG4vLyBoYXZlIHBhcnQgdGhhdCBnZXRzIFwiY2hlY2tcIlxuLy8gaWYgXCJjaGVja1wiID09IFwiTm9cIiB0aGVuIGRlbGV0ZSBlbWFpbCAob2ZmZXIgb3B0aW9uKVxuLy8gZWxzZSwgXG4vLyBnZW5lcmF0ZSBhaSByZXBseSB3aXRoIGFwaSBlbmRwb2ludFxuLy8gb3B0aW9uIHRvIHJlZ2VuZXJhdGUsIGtlZXAgKHNhdmUpIGFzIGRyYWZ0XG5cbi8vY29uc2lkZXJpbmc6IGRpc3BsYXkganVzdGlmaWNhdGlvbiBmb3IgXCJjaGVja1wiXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTk1MCByb3VuZGVkLWxnIHB5LTQgcHgtNCBteC04IG15LTQgc3BhY2UteS00XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtc20nPiBBSSBTdWdnZXN0aW9uPC9oMT5cblxuICAgICAgICB7IGVtYWlsLmVtYWlsID09IG51bGwgPyA8aDEgY2xhc3NOYW1lPVwic2tlbGV0b24gdy0xLzMgaC04XCI+IDwvaDE+OiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yJz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDE+IFNob3VsZCB5b3UgcmVwbHkgdG8gdGhlIGVtYWlsPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYmFkZ2UgbXgtMic+IHtlbWFpbC5lbWFpbC5jaGVja30gIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPiBSZWFzb246IDwvaDE+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7ZW1haWwuZW1haWwuY2hlY2sgIT0gbnVsbCAmJiBlbWFpbC5lbWFpbC5jaGVjayA9PSBcIk5vXCIgP1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZS15LTInIG9uTG9hZD17KCk9PlJlcGx5KGVtYWlsLmVtYWlsLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMT4gQUkgR2VuZXJhdGVkIFJlcGx5IDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMT4gU3ViamVjdDogUmVwbHkgdG8ge2VtYWlsLmVtYWlsLnN1YmplY3R9IDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxwIGNsYXNzTmFtZT0nc2tlbGV0b24gcHgtMiB0ZXh0LWNlbnRlciB0ZXh0LXNtIGZvbnQtYm9sZCc+IEdlbmVyYXRpbmcgcmVwbHkuLi4gPC9wPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcmVwbHl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOiA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1zbSB3LTEvNScgb25DbGljaz17KCk9PmRlbGV0ZV9lbWFpbChlbWFpbC5lbWFpbC5pZCl9PlxuICAgICAgICAgICAgICAgICAgICBEZWxldGUgRW1haWxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj4gLy9kZWxldGUgYnV0dG9uIChiZWNhdXNlIGVtYWlsIGlzIGVpdGhlciBzcGFtL25vbi1pbXBvcnRhbnQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQUkiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFJIiwiZW1haWwiLCJ0cmFzaCIsInNldFRyYXNoIiwicmVwbHkiLCJzZXRSZXBseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiUmVwbHkiLCJpZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkZWxldGVfZW1haWwiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiY2hlY2siLCJvbkxvYWQiLCJzdWJqZWN0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Components/AI.tsx\n"));

/***/ })

});