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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AI = (email)=>{\n    _s();\n    const [reply, setReply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function YorN(reply) {\n        if (reply == \"Yes\") {\n            setReply(true);\n        } else {\n            setReply(false);\n        }\n    }\n    const delete_email = (id)=>{\n        fetch(\"http://127.0.0.1:8080/emails/\" + id, {\n            method: \"DELETE\"\n        }).then(()=>{});\n    };\n    // have part that gets \"check\"\n    // if \"check\" == \"No\" then delete email (offer option)\n    // else, \n    // generate ai reply with api endpoint\n    // option to regenerate, keep (save) as draft\n    //considering: display justification for \"check\"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-950 rounded-lg py-4 px-4 mx-8 my-4 space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \" AI Suggestion\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2\",\n                children: [\n                    email.email == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"skeleton w-1/3 h-8\",\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 33\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" Should you reply to the email?\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \" \",\n                                            email.email.check,\n                                            \"  \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" Reason: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined),\n                    email.email != null && email.email.check != null && reply == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \" AI Generated Reply \"\n                        }, void 0, false, {\n                            fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-sm w-1/5\",\n                        onClick: ()=>delete_email(email.email.id),\n                        children: \"Delete Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 15\n                    }, undefined) //delete button (because email is either spam/non-important)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AI, \"8RlpSDhqhkHWKOQeCzqdoPGnXYE=\");\n_c = AI;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AI);\nvar _c;\n$RefreshReg$(_c, \"AI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL0FJLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBRWhELE1BQU1FLEtBQUssQ0FBQ0M7O0lBRVIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBRW5DLFNBQVNLLEtBQU1GLEtBQVk7UUFDdkIsSUFBSUEsU0FBUyxPQUFPO1lBQ2hCQyxTQUFTO1FBQ2IsT0FDSztZQUNEQSxTQUFTO1FBQ2I7SUFDSjtJQUdBLE1BQU1FLGVBQWUsQ0FBQ0M7UUFDbEJDLE1BQU0sa0NBQWtDRCxJQUFJO1lBQUNFLFFBQVE7UUFBUSxHQUFHQyxJQUFJLENBQUMsS0FHckU7SUFDSjtJQUdKLDhCQUE4QjtJQUM5QixzREFBc0Q7SUFDdEQsU0FBUztJQUNULHNDQUFzQztJQUN0Qyw2Q0FBNkM7SUFFN0MsZ0RBQWdEO0lBRTlDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQVU7Ozs7OzswQkFFeEIsOERBQUNEO2dCQUFJQyxXQUFVOztvQkFDYlYsTUFBTUEsS0FBSyxJQUFJLHFCQUFPLDhEQUFDVzt3QkFBR0QsV0FBVTtrQ0FBcUI7Ozs7O2tEQUN2RCw4REFBQ0Q7OzBDQUNHLDhEQUFDRTs7b0NBQUc7a0RBQ0EsOERBQUNDOzs0Q0FBRTs0Q0FBRVosTUFBTUEsS0FBSyxDQUFDYSxLQUFLOzRDQUFDOzs7Ozs7Ozs7Ozs7OzBDQUUzQiw4REFBQ0Y7MENBQUc7Ozs7Ozs7Ozs7OztvQkFHVlgsTUFBTUEsS0FBSyxJQUFJLFFBQVFBLE1BQU1BLEtBQUssQ0FBQ2EsS0FBSyxJQUFJLFFBQVFaLFNBQVMscUJBRTNELDhEQUFDUTtrQ0FDRyw0RUFBQ0U7c0NBQUc7Ozs7Ozs7Ozs7a0RBS04sOERBQUNHO3dCQUFPSixXQUFVO3dCQUFtQkssU0FBUyxJQUFJWCxhQUFhSixNQUFNQSxLQUFLLENBQUNLLEVBQUU7a0NBQUc7Ozs7O2tDQUV4RSw0REFBNEQ7Ozs7Ozs7Ozs7Ozs7QUFLbEY7R0ExRE1OO0tBQUFBO0FBNEROLCtEQUFlQSxFQUFFQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvQUkudHN4PzkzZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEFJID0gKGVtYWlsOmFueSkgPT4ge1xuXG4gICAgY29uc3QgW3JlcGx5LCBzZXRSZXBseV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGZ1bmN0aW9uIFlvck4gKHJlcGx5OlN0cmluZykge1xuICAgICAgICBpZiAocmVwbHkgPT0gXCJZZXNcIikge1xuICAgICAgICAgICAgc2V0UmVwbHkodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFJlcGx5KGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBkZWxldGVfZW1haWwgPSAoaWQ6bnVtYmVyKSA9PiB7XG4gICAgICAgIGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4MDgwL2VtYWlscy9cIiArIGlkLCB7bWV0aG9kOiAnREVMRVRFJ30pLnRoZW4oKCkgPT4gXG4gICAgICAgIHtcblxuICAgICAgICB9KVxuICAgIH1cblxuXG4vLyBoYXZlIHBhcnQgdGhhdCBnZXRzIFwiY2hlY2tcIlxuLy8gaWYgXCJjaGVja1wiID09IFwiTm9cIiB0aGVuIGRlbGV0ZSBlbWFpbCAob2ZmZXIgb3B0aW9uKVxuLy8gZWxzZSwgXG4vLyBnZW5lcmF0ZSBhaSByZXBseSB3aXRoIGFwaSBlbmRwb2ludFxuLy8gb3B0aW9uIHRvIHJlZ2VuZXJhdGUsIGtlZXAgKHNhdmUpIGFzIGRyYWZ0XG5cbi8vY29uc2lkZXJpbmc6IGRpc3BsYXkganVzdGlmaWNhdGlvbiBmb3IgXCJjaGVja1wiXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTk1MCByb3VuZGVkLWxnIHB5LTQgcHgtNCBteC04IG15LTQgc3BhY2UteS00XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtc20nPiBBSSBTdWdnZXN0aW9uPC9oMT5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yJz5cbiAgICAgICAgeyBlbWFpbC5lbWFpbCA9PSBudWxsID8gPGgxIGNsYXNzTmFtZT1cInNrZWxldG9uIHctMS8zIGgtOFwiPiA8L2gxPjogXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT4gU2hvdWxkIHlvdSByZXBseSB0byB0aGUgZW1haWw/IFxuICAgICAgICAgICAgICAgICAgICA8cD4ge2VtYWlsLmVtYWlsLmNoZWNrfSAgPC9wPlxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPGgxPiBSZWFzb246IDwvaDE+IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgeyBlbWFpbC5lbWFpbCAhPSBudWxsICYmIGVtYWlsLmVtYWlsLmNoZWNrICE9IG51bGwgJiYgcmVwbHkgPT0gdHJ1ZSA/IFxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT4gQUkgR2VuZXJhdGVkIFJlcGx5IDwvaDE+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDogPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tc20gdy0xLzUnIG9uQ2xpY2s9eygpPT5kZWxldGVfZW1haWwoZW1haWwuZW1haWwuaWQpfT5cbiAgICAgICAgICAgICAgICBEZWxldGUgRW1haWxcbiAgICAgICAgICAgIDwvYnV0dG9uPiAvL2RlbGV0ZSBidXR0b24gKGJlY2F1c2UgZW1haWwgaXMgZWl0aGVyIHNwYW0vbm9uLWltcG9ydGFudClcbiAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBSSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQUkiLCJlbWFpbCIsInJlcGx5Iiwic2V0UmVwbHkiLCJZb3JOIiwiZGVsZXRlX2VtYWlsIiwiaWQiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJjaGVjayIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/AI.tsx\n"));

/***/ })

});