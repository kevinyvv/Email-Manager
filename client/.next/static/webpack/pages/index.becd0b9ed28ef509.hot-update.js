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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AI = (email)=>{\n    _s();\n    const [reply, setReply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function YorN(reply) {\n        if (reply == \"Yes\") {\n            setReply(true);\n        } else {\n            setReply(false);\n        }\n    }\n    const Reply = (content)=>{\n        fetch(\"\") //get reply from chatgpt endpoint\n        ;\n    };\n    const delete_email = (id)=>{\n        fetch(\"http://127.0.0.1:8080/emails/\" + id, {\n            method: \"DELETE\"\n        }).then(()=>{\n        //log success or something\n        });\n    };\n    // have part that gets \"check\"\n    // if \"check\" == \"No\" then delete email (offer option)\n    // else, \n    // generate ai reply with api endpoint\n    // option to regenerate, keep (save) as draft\n    //considering: display justification for \"check\"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-950 rounded-lg py-4 px-4 mx-8 my-4 space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \" AI Suggestion\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2\",\n                children: [\n                    email.email == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"skeleton w-1/3 h-8\",\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 33\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" Should you reply to the email?\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"badge mx-2\",\n                                        children: [\n                                            \" \",\n                                            email.email.check,\n                                            \"  \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" Reason: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined),\n                    email.email != null && email.email.check != null && reply == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" AI Generated Reply \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" Subject: Reply to \",\n                                    email.email.subject,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \" \",\n                                    Reply,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-sm w-1/5\",\n                        onClick: ()=>delete_email(email.email.id),\n                        children: \"Delete Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 15\n                    }, undefined) //delete button (because email is either spam/non-important)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AI, \"8RlpSDhqhkHWKOQeCzqdoPGnXYE=\");\n_c = AI;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AI);\nvar _c;\n$RefreshReg$(_c, \"AI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL0FJLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBRWhELE1BQU1FLEtBQUssQ0FBQ0M7O0lBRVIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBRW5DLFNBQVNLLEtBQU1GLEtBQVk7UUFDdkIsSUFBSUEsU0FBUyxPQUFPO1lBQ2hCQyxTQUFTO1FBQ2IsT0FDSztZQUNEQSxTQUFTO1FBQ2I7SUFDSjtJQUVBLE1BQU1FLFFBQVMsQ0FBQ0M7UUFDWkMsTUFBTSxJQUFJLGlDQUFpQzs7SUFDL0M7SUFHQSxNQUFNQyxlQUFlLENBQUNDO1FBQ2xCRixNQUFNLGtDQUFrQ0UsSUFBSTtZQUFDQyxRQUFRO1FBQVEsR0FBR0MsSUFBSSxDQUFDO1FBRTdELDBCQUEwQjtRQUNsQztJQUNKO0lBR0osOEJBQThCO0lBQzlCLHNEQUFzRDtJQUN0RCxTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLDZDQUE2QztJQUU3QyxnREFBZ0Q7SUFFOUMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBVTs7Ozs7OzBCQUV4Qiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUNiWixNQUFNQSxLQUFLLElBQUkscUJBQU8sOERBQUNhO3dCQUFHRCxXQUFVO2tDQUFxQjs7Ozs7a0RBQ3ZELDhEQUFDRDs7MENBQ0csOERBQUNFOztvQ0FBRztrREFDQSw4REFBQ0M7d0NBQUVGLFdBQVU7OzRDQUFhOzRDQUFFWixNQUFNQSxLQUFLLENBQUNlLEtBQUs7NENBQUM7Ozs7Ozs7Ozs7Ozs7MENBRWxELDhEQUFDRjswQ0FBRzs7Ozs7Ozs7Ozs7O29CQUdWYixNQUFNQSxLQUFLLElBQUksUUFBUUEsTUFBTUEsS0FBSyxDQUFDZSxLQUFLLElBQUksUUFBUWQsU0FBUyxxQkFFM0QsOERBQUNVOzswQ0FDRyw4REFBQ0U7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7O29DQUFHO29DQUFvQmIsTUFBTUEsS0FBSyxDQUFDZ0IsT0FBTztvQ0FBQzs7Ozs7OzswQ0FDNUMsOERBQUNGOztvQ0FBRTtvQ0FBRVY7b0NBQU07Ozs7Ozs7Ozs7OztrREFJYiw4REFBQ2E7d0JBQU9MLFdBQVU7d0JBQW1CTSxTQUFTLElBQUlYLGFBQWFQLE1BQU1BLEtBQUssQ0FBQ1EsRUFBRTtrQ0FBRzs7Ozs7a0NBRXhFLDREQUE0RDs7Ozs7Ozs7Ozs7OztBQUtsRjtHQS9ETVQ7S0FBQUE7QUFpRU4sK0RBQWVBLEVBQUVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9BSS50c3g/OTNmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuY29uc3QgQUkgPSAoZW1haWw6YW55KSA9PiB7XG5cbiAgICBjb25zdCBbcmVwbHksIHNldFJlcGx5XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgZnVuY3Rpb24gWW9yTiAocmVwbHk6U3RyaW5nKSB7IC8vd2hldGhlciBvciBub3QgdG8gcmVwbHlcbiAgICAgICAgaWYgKHJlcGx5ID09IFwiWWVzXCIpIHtcbiAgICAgICAgICAgIHNldFJlcGx5KHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRSZXBseShmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IFJlcGx5ICA9IChjb250ZW50OnN0cmluZykgPT4ge1xuICAgICAgICBmZXRjaChcIlwiKSAvL2dldCByZXBseSBmcm9tIGNoYXRncHQgZW5kcG9pbnRcbiAgICB9XG5cblxuICAgIGNvbnN0IGRlbGV0ZV9lbWFpbCA9IChpZDpudW1iZXIpID0+IHtcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwODAvZW1haWxzL1wiICsgaWQsIHttZXRob2Q6ICdERUxFVEUnfSkudGhlbigoKSA9PiBcbiAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vbG9nIHN1Y2Nlc3Mgb3Igc29tZXRoaW5nXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbi8vIGhhdmUgcGFydCB0aGF0IGdldHMgXCJjaGVja1wiXG4vLyBpZiBcImNoZWNrXCIgPT0gXCJOb1wiIHRoZW4gZGVsZXRlIGVtYWlsIChvZmZlciBvcHRpb24pXG4vLyBlbHNlLCBcbi8vIGdlbmVyYXRlIGFpIHJlcGx5IHdpdGggYXBpIGVuZHBvaW50XG4vLyBvcHRpb24gdG8gcmVnZW5lcmF0ZSwga2VlcCAoc2F2ZSkgYXMgZHJhZnRcblxuLy9jb25zaWRlcmluZzogZGlzcGxheSBqdXN0aWZpY2F0aW9uIGZvciBcImNoZWNrXCJcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtOTUwIHJvdW5kZWQtbGcgcHktNCBweC00IG14LTggbXktNCBzcGFjZS15LTRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1zbSc+IEFJIFN1Z2dlc3Rpb248L2gxPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTInPlxuICAgICAgICB7IGVtYWlsLmVtYWlsID09IG51bGwgPyA8aDEgY2xhc3NOYW1lPVwic2tlbGV0b24gdy0xLzMgaC04XCI+IDwvaDE+OiBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPiBTaG91bGQgeW91IHJlcGx5IHRvIHRoZSBlbWFpbD8gXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYmFkZ2UgbXgtMic+IHtlbWFpbC5lbWFpbC5jaGVja30gIDwvcD5cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIDxoMT4gUmVhc29uOiA8L2gxPiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHsgZW1haWwuZW1haWwgIT0gbnVsbCAmJiBlbWFpbC5lbWFpbC5jaGVjayAhPSBudWxsICYmIHJlcGx5ID09IHRydWUgPyBcblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+IEFJIEdlbmVyYXRlZCBSZXBseSA8L2gxPlxuICAgICAgICAgICAgICAgIDxoMT4gU3ViamVjdDogUmVwbHkgdG8ge2VtYWlsLmVtYWlsLnN1YmplY3R9IDwvaDE+XG4gICAgICAgICAgICAgICAgPHA+IHtSZXBseX0gPC9wPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgOiA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1zbSB3LTEvNScgb25DbGljaz17KCk9PmRlbGV0ZV9lbWFpbChlbWFpbC5lbWFpbC5pZCl9PlxuICAgICAgICAgICAgICAgIERlbGV0ZSBFbWFpbFxuICAgICAgICAgICAgPC9idXR0b24+IC8vZGVsZXRlIGJ1dHRvbiAoYmVjYXVzZSBlbWFpbCBpcyBlaXRoZXIgc3BhbS9ub24taW1wb3J0YW50KVxuICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFJIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBSSIsImVtYWlsIiwicmVwbHkiLCJzZXRSZXBseSIsIllvck4iLCJSZXBseSIsImNvbnRlbnQiLCJmZXRjaCIsImRlbGV0ZV9lbWFpbCIsImlkIiwibWV0aG9kIiwidGhlbiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImNoZWNrIiwic3ViamVjdCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/AI.tsx\n"));

/***/ })

});