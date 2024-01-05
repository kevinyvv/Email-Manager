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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst AI = (email)=>{\n    _s();\n    const [trash, setTrash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [reply, setReply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const Reply = (id)=>{\n        fetch(\"http://127.0.0.1:8080/content/reply/\" + id).then((response)=>response.json()).then((data)=>setReply(data.reply)).then(()=>setLoading(false)) //get reply from chatgpt endpoint\n        ;\n    };\n    const delete_email = (id)=>{\n        fetch(\"http://127.0.0.1:8080/emails/\" + id, {\n            method: \"DELETE\"\n        }).then(()=>{\n            console.log(\"Email Deleted!\") //log success or something\n            ;\n            location.reload();\n            alert(\"Email sent to trash.\");\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (email.email != null) {\n            if (email.email.check == \"Yes\" || trash == false) {\n                Reply(email.email.id);\n                console.log(reply);\n            }\n        }\n    }, [\n        email\n    ]);\n    // have part that gets \"check\"\n    // if \"check\" == \"No\" then delete email (offer option)\n    // else, \n    // generate ai reply with api endpoint\n    // option to regenerate, keep (save) as draft\n    //considering: display justification for \"check\"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-950 rounded-lg py-4 px-4 mx-8 my-4 space-y-4 max-w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \" AI Suggestion\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined),\n            email.email == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"skeleton w-1/3 h-8\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 47,\n                columnNumber: 33\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" Should you reply to the email?\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"badge mx-2\",\n                                        children: [\n                                            \" \",\n                                            email.email.check,\n                                            \"  \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" Reason: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"my-2 btn btn-sm\",\n                                onClick: ()=>setTrash(false),\n                                children: \" Override \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined),\n                    email.email.check != null && email.email.check == \"Yes\" || trash == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2 max-w-1/2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" AI Generated Reply \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"px-2 outline rounded-sm font-bold\",\n                                children: [\n                                    \" Subject: Reply to \",\n                                    email.email.subject,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, undefined),\n                            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"skeleton px-2 text-center py-1 text-sm font-bold\",\n                                children: \" Generating reply... \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 32\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"outline px-2 rounded-sm outline-1 h-3/4 overflow-y-scroll  text-wrap whitespace-pre\",\n                                        children: [\n                                            \" \",\n                                            reply\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: \" Save as Draft\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 31\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-sm w-1/5\",\n                        onClick: ()=>delete_email(email.email.id),\n                        children: \"Delete Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 19\n                    }, undefined) //delete button (because email is either spam/non-important)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AI, \"Mqjghq5muTJE/M7kr2T8e/VXSIc=\");\n_c = AI;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AI);\nvar _c;\n$RefreshReg$(_c, \"AI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL0FJLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBQ2dCO0FBRWhELE1BQU1JLEtBQUssQ0FBQ0M7O0lBRVIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFFdkMsTUFBTVUsUUFBUyxDQUFDQztRQUNiQyxNQUFNLHlDQUF5Q0QsSUFBSUUsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQy9FRixJQUFJLENBQUNHLENBQUFBLE9BQVFULFNBQVNTLEtBQUtWLEtBQUssR0FDL0JPLElBQUksQ0FBQyxJQUFLSixXQUFXLFFBQVEsaUNBQWlDOztJQUNwRTtJQUdBLE1BQU1RLGVBQWUsQ0FBQ047UUFDbEJDLE1BQU0sa0NBQWtDRCxJQUFJO1lBQUNPLFFBQVE7UUFBUSxHQUFHTCxJQUFJLENBQUM7WUFFakVNLFFBQVFDLEdBQUcsQ0FBQyxrQkFBbUIsMEJBQTBCOztZQUN6REMsU0FBU0MsTUFBTTtZQUNmQyxNQUFNO1FBQ1Y7SUFDSjtJQUVBdEIsZ0RBQVNBLENBQUM7UUFDTixJQUFJRSxNQUFNQSxLQUFLLElBQUksTUFBTTtZQUNyQixJQUFJQSxNQUFNQSxLQUFLLENBQUNxQixLQUFLLElBQUksU0FBU3BCLFNBQVMsT0FDM0M7Z0JBQ0lNLE1BQU1QLE1BQU1BLEtBQUssQ0FBQ1EsRUFBRTtnQkFDcEJRLFFBQVFDLEdBQUcsQ0FBQ2Q7WUFDaEI7UUFDSjtJQUNKLEdBQUc7UUFBQ0g7S0FBTTtJQUNkLDhCQUE4QjtJQUM5QixzREFBc0Q7SUFDdEQsU0FBUztJQUNULHNDQUFzQztJQUN0Qyw2Q0FBNkM7SUFFN0MsZ0RBQWdEO0lBRTlDLHFCQUNFLDhEQUFDc0I7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFVOzs7Ozs7WUFFdEJ2QixNQUFNQSxLQUFLLElBQUkscUJBQU8sOERBQUN3QjtnQkFBR0QsV0FBVTswQkFBcUI7Ozs7OzBDQUN2RCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDs7MENBQ0csOERBQUNFOztvQ0FBRztrREFDQSw4REFBQ0M7d0NBQUVGLFdBQVU7OzRDQUFhOzRDQUFFdkIsTUFBTUEsS0FBSyxDQUFDcUIsS0FBSzs0Q0FBQzs7Ozs7Ozs7Ozs7OzswQ0FFbEQsOERBQUNHOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNFO2dDQUFPSCxXQUFVO2dDQUFrQkksU0FBUyxJQUFLekIsU0FBUzswQ0FBUTs7Ozs7Ozs7Ozs7O29CQUcxRUYsTUFBTUEsS0FBSyxDQUFDcUIsS0FBSyxJQUFJLFFBQVFyQixNQUFNQSxLQUFLLENBQUNxQixLQUFLLElBQUksU0FBU3BCLFNBQVMsc0JBQ2pFLDhEQUFDcUI7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDQzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTtnQ0FBR0QsV0FBVTs7b0NBQW9DO29DQUFvQnZCLE1BQU1BLEtBQUssQ0FBQzRCLE9BQU87b0NBQUM7Ozs7Ozs7NEJBQ3pGdkIsd0JBQVUsOERBQUNvQjtnQ0FBRUYsV0FBVTswQ0FBbUQ7Ozs7OzBEQUNqRSw4REFBQzNCLHVEQUFjOztrREFDYiw4REFBQzZCO3dDQUFFRixXQUFVOzs0Q0FDYTs0Q0FBRXBCOzs7Ozs7O2tEQUU1Qiw4REFBQ3VCO2tEQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztrREFLdEIsOERBQUNBO3dCQUFPSCxXQUFVO3dCQUFtQkksU0FBUyxJQUFJYixhQUFhZCxNQUFNQSxLQUFLLENBQUNRLEVBQUU7a0NBQUc7Ozs7O2tDQUV4RSw0REFBNEQ7Ozs7Ozs7Ozs7Ozs7QUFNdEY7R0EzRU1UO0tBQUFBO0FBNkVOLCtEQUFlQSxFQUFFQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvQUkudHN4PzkzZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEFJID0gKGVtYWlsOmFueSkgPT4ge1xuXG4gICAgY29uc3QgW3RyYXNoLCBzZXRUcmFzaF0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtyZXBseSwgc2V0UmVwbHldID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuICAgIGNvbnN0IFJlcGx5ICA9IChpZDpudW1iZXIpID0+IHtcbiAgICAgICBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9jb250ZW50L3JlcGx5L1wiICsgaWQpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgKS50aGVuKGRhdGEgPT4gc2V0UmVwbHkoZGF0YS5yZXBseSlcbiAgICAgICAgKS50aGVuKCgpPT4gc2V0TG9hZGluZyhmYWxzZSkpIC8vZ2V0IHJlcGx5IGZyb20gY2hhdGdwdCBlbmRwb2ludFxuICAgIH1cblxuXG4gICAgY29uc3QgZGVsZXRlX2VtYWlsID0gKGlkOm51bWJlcikgPT4ge1xuICAgICAgICBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9lbWFpbHMvXCIgKyBpZCwge21ldGhvZDogJ0RFTEVURSd9KS50aGVuKCgpID0+IFxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVtYWlsIERlbGV0ZWQhXCIpICAvL2xvZyBzdWNjZXNzIG9yIHNvbWV0aGluZ1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgIGFsZXJ0KFwiRW1haWwgc2VudCB0byB0cmFzaC5cIilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZW1haWwuZW1haWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGVtYWlsLmVtYWlsLmNoZWNrID09IFwiWWVzXCIgfHwgdHJhc2ggPT0gZmFsc2UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgUmVwbHkoZW1haWwuZW1haWwuaWQpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVwbHkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbZW1haWxdKVxuLy8gaGF2ZSBwYXJ0IHRoYXQgZ2V0cyBcImNoZWNrXCJcbi8vIGlmIFwiY2hlY2tcIiA9PSBcIk5vXCIgdGhlbiBkZWxldGUgZW1haWwgKG9mZmVyIG9wdGlvbilcbi8vIGVsc2UsIFxuLy8gZ2VuZXJhdGUgYWkgcmVwbHkgd2l0aCBhcGkgZW5kcG9pbnRcbi8vIG9wdGlvbiB0byByZWdlbmVyYXRlLCBrZWVwIChzYXZlKSBhcyBkcmFmdFxuXG4vL2NvbnNpZGVyaW5nOiBkaXNwbGF5IGp1c3RpZmljYXRpb24gZm9yIFwiY2hlY2tcIlxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS05NTAgcm91bmRlZC1sZyBweS00IHB4LTQgbXgtOCBteS00IHNwYWNlLXktNCBtYXgtdy1mdWxsXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtc20nPiBBSSBTdWdnZXN0aW9uPC9oMT5cblxuICAgICAgICB7IGVtYWlsLmVtYWlsID09IG51bGwgPyA8aDEgY2xhc3NOYW1lPVwic2tlbGV0b24gdy0xLzMgaC04XCI+IDwvaDE+OiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yJz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDE+IFNob3VsZCB5b3UgcmVwbHkgdG8gdGhlIGVtYWlsPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYmFkZ2UgbXgtMic+IHtlbWFpbC5lbWFpbC5jaGVja30gIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPiBSZWFzb246IDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXktMiBidG4gYnRuLXNtXCIgb25DbGljaz17KCk9PiBzZXRUcmFzaChmYWxzZSl9PiBPdmVycmlkZSA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2VtYWlsLmVtYWlsLmNoZWNrICE9IG51bGwgJiYgZW1haWwuZW1haWwuY2hlY2sgPT0gXCJZZXNcIiB8fCB0cmFzaCA9PSBmYWxzZSA/XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlLXktMiBtYXgtdy0xLzInPlxuICAgICAgICAgICAgICAgICAgICA8aDE+IEFJIEdlbmVyYXRlZCBSZXBseSA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHgtMiBvdXRsaW5lIHJvdW5kZWQtc20gZm9udC1ib2xkXCI+IFN1YmplY3Q6IFJlcGx5IHRvIHtlbWFpbC5lbWFpbC5zdWJqZWN0fSA8L2gxPlxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxwIGNsYXNzTmFtZT0nc2tlbGV0b24gcHgtMiB0ZXh0LWNlbnRlciBweS0xIHRleHQtc20gZm9udC1ib2xkJz4gR2VuZXJhdGluZyByZXBseS4uLiA8L3A+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvdXRsaW5lIHB4LTIgcm91bmRlZC1zbSBvdXRsaW5lLTEgaC0zLzQgb3ZlcmZsb3cteS1zY3JvbGwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtd3JhcCB3aGl0ZXNwYWNlLXByZVwiPiB7cmVwbHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj4gU2F2ZSBhcyBEcmFmdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6IDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXNtIHctMS81JyBvbkNsaWNrPXsoKT0+ZGVsZXRlX2VtYWlsKGVtYWlsLmVtYWlsLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgIERlbGV0ZSBFbWFpbFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAvL2RlbGV0ZSBidXR0b24gKGJlY2F1c2UgZW1haWwgaXMgZWl0aGVyIHNwYW0vbm9uLWltcG9ydGFudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQUkiXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQUkiLCJlbWFpbCIsInRyYXNoIiwic2V0VHJhc2giLCJyZXBseSIsInNldFJlcGx5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJSZXBseSIsImlkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImRlbGV0ZV9lbWFpbCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImFsZXJ0IiwiY2hlY2siLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwic3ViamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Components/AI.tsx\n"));

/***/ })

});