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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AI = (email)=>{\n    _s();\n    const [trash, setTrash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [reply, setReply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const Reply = (id)=>{\n        fetch(\"http://127.0.0.1:8080/content/reply/\" + id).then((response)=>response.json()).then((data)=>setReply(data.reply)).then(()=>setLoading(false)) //get reply from chatgpt endpoint\n        ;\n    };\n    const delete_email = (id)=>{\n        fetch(\"http://127.0.0.1:8080/emails/\" + id, {\n            method: \"DELETE\"\n        }).then(()=>{\n            console.log(\"Email Deleted!\") //log success or something\n            ;\n            location.reload();\n            alert(\"Email sent to trash.\");\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (email.email != null) {\n            if (email.email.check == \"Yes\" || trash == false) {\n                Reply(email.email.id);\n                console.log(reply);\n            }\n        }\n    }, []);\n    // have part that gets \"check\"\n    // if \"check\" == \"No\" then delete email (offer option)\n    // else, \n    // generate ai reply with api endpoint\n    // option to regenerate, keep (save) as draft\n    //considering: display justification for \"check\"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-950 rounded-lg py-4 px-4 mx-8 my-4 space-y-4 max-w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \" AI Suggestion\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined),\n            email.email == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"skeleton w-1/3 h-8\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 47,\n                columnNumber: 33\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" Should you reply to the email?\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"badge mx-2\",\n                                        children: [\n                                            \" \",\n                                            email.email.check,\n                                            \"  \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" Reason: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"my-2 btn btn-sm\",\n                                onClick: ()=>setTrash(false),\n                                children: \" Override \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined),\n                    email.email.check != null && email.email.check == \"Yes\" || trash == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2 max-w-1/2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" AI Generated Reply \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"px-2 outline rounded-sm font-bold\",\n                                children: [\n                                    \" Subject: Reply to \",\n                                    email.email.subject,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, undefined),\n                            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"skeleton px-2 text-center py-1 text-sm font-bold\",\n                                children: \" Generating reply... \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 32\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"outline px-2 rounded-sm outline-1 h-5/6 overflow-y-scroll  text-wrap whitespace-pre\",\n                                children: [\n                                    \" \",\n                                    reply,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 31\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-sm w-1/5\",\n                        onClick: ()=>delete_email(email.email.id),\n                        children: \"Delete Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 19\n                    }, undefined) //delete button (because email is either spam/non-important)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AI, \"Mqjghq5muTJE/M7kr2T8e/VXSIc=\");\n_c = AI;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AI);\nvar _c;\n$RefreshReg$(_c, \"AI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL0FJLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2dEO0FBRWhELE1BQU1HLEtBQUssQ0FBQ0M7O0lBRVIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFFdkMsTUFBTVUsUUFBUyxDQUFDQztRQUNiQyxNQUFNLHlDQUF5Q0QsSUFBSUUsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQy9FRixJQUFJLENBQUNHLENBQUFBLE9BQVFULFNBQVNTLEtBQUtWLEtBQUssR0FDL0JPLElBQUksQ0FBQyxJQUFLSixXQUFXLFFBQVEsaUNBQWlDOztJQUNwRTtJQUdBLE1BQU1RLGVBQWUsQ0FBQ047UUFDbEJDLE1BQU0sa0NBQWtDRCxJQUFJO1lBQUNPLFFBQVE7UUFBUSxHQUFHTCxJQUFJLENBQUM7WUFFakVNLFFBQVFDLEdBQUcsQ0FBQyxrQkFBbUIsMEJBQTBCOztZQUN6REMsU0FBU0MsTUFBTTtZQUNmQyxNQUFNO1FBQ1Y7SUFDSjtJQUVBdEIsZ0RBQVNBLENBQUM7UUFDTixJQUFJRSxNQUFNQSxLQUFLLElBQUksTUFBTTtZQUNyQixJQUFJQSxNQUFNQSxLQUFLLENBQUNxQixLQUFLLElBQUksU0FBU3BCLFNBQVMsT0FDM0M7Z0JBQ0lNLE1BQU1QLE1BQU1BLEtBQUssQ0FBQ1EsRUFBRTtnQkFDcEJRLFFBQVFDLEdBQUcsQ0FBQ2Q7WUFDaEI7UUFDSjtJQUNKLEdBQUcsRUFBRTtJQUNULDhCQUE4QjtJQUM5QixzREFBc0Q7SUFDdEQsU0FBUztJQUNULHNDQUFzQztJQUN0Qyw2Q0FBNkM7SUFFN0MsZ0RBQWdEO0lBRTlDLHFCQUNFLDhEQUFDbUI7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFVOzs7Ozs7WUFFdEJ2QixNQUFNQSxLQUFLLElBQUkscUJBQU8sOERBQUN3QjtnQkFBR0QsV0FBVTswQkFBcUI7Ozs7OzBDQUN2RCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDs7MENBQ0csOERBQUNFOztvQ0FBRztrREFDQSw4REFBQ0M7d0NBQUVGLFdBQVU7OzRDQUFhOzRDQUFFdkIsTUFBTUEsS0FBSyxDQUFDcUIsS0FBSzs0Q0FBQzs7Ozs7Ozs7Ozs7OzswQ0FFbEQsOERBQUNHOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNFO2dDQUFPSCxXQUFVO2dDQUFrQkksU0FBUyxJQUFLekIsU0FBUzswQ0FBUTs7Ozs7Ozs7Ozs7O29CQUcxRUYsTUFBTUEsS0FBSyxDQUFDcUIsS0FBSyxJQUFJLFFBQVFyQixNQUFNQSxLQUFLLENBQUNxQixLQUFLLElBQUksU0FBU3BCLFNBQVMsc0JBQ2pFLDhEQUFDcUI7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDQzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTtnQ0FBR0QsV0FBVTs7b0NBQW9DO29DQUFvQnZCLE1BQU1BLEtBQUssQ0FBQzRCLE9BQU87b0NBQUM7Ozs7Ozs7NEJBQ3pGdkIsd0JBQVUsOERBQUNvQjtnQ0FBRUYsV0FBVTswQ0FBbUQ7Ozs7OzBEQUNqRSw4REFBQ0U7Z0NBQUVGLFdBQVU7O29DQUNXO29DQUFFcEI7b0NBQU07Ozs7Ozs7Ozs7OztrREFHNUMsOERBQUN1Qjt3QkFBT0gsV0FBVTt3QkFBbUJJLFNBQVMsSUFBSWIsYUFBYWQsTUFBTUEsS0FBSyxDQUFDUSxFQUFFO2tDQUFHOzs7OztrQ0FFeEUsNERBQTREOzs7Ozs7Ozs7Ozs7O0FBTXRGO0dBdEVNVDtLQUFBQTtBQXdFTiwrREFBZUEsRUFBRUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL0FJLnRzeD85M2Y0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBBSSA9IChlbWFpbDphbnkpID0+IHtcblxuICAgIGNvbnN0IFt0cmFzaCwgc2V0VHJhc2hdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbcmVwbHksIHNldFJlcGx5XSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICBjb25zdCBSZXBseSAgPSAoaWQ6bnVtYmVyKSA9PiB7XG4gICAgICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwODAvY29udGVudC9yZXBseS9cIiArIGlkKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICkudGhlbihkYXRhID0+IHNldFJlcGx5KGRhdGEucmVwbHkpXG4gICAgICAgICkudGhlbigoKT0+IHNldExvYWRpbmcoZmFsc2UpKSAvL2dldCByZXBseSBmcm9tIGNoYXRncHQgZW5kcG9pbnRcbiAgICB9XG5cblxuICAgIGNvbnN0IGRlbGV0ZV9lbWFpbCA9IChpZDpudW1iZXIpID0+IHtcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwODAvZW1haWxzL1wiICsgaWQsIHttZXRob2Q6ICdERUxFVEUnfSkudGhlbigoKSA9PiBcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbWFpbCBEZWxldGVkIVwiKSAgLy9sb2cgc3VjY2VzcyBvciBzb21ldGhpbmdcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICBhbGVydChcIkVtYWlsIHNlbnQgdG8gdHJhc2guXCIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGVtYWlsLmVtYWlsICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChlbWFpbC5lbWFpbC5jaGVjayA9PSBcIlllc1wiIHx8IHRyYXNoID09IGZhbHNlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFJlcGx5KGVtYWlsLmVtYWlsLmlkKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcGx5KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pXG4vLyBoYXZlIHBhcnQgdGhhdCBnZXRzIFwiY2hlY2tcIlxuLy8gaWYgXCJjaGVja1wiID09IFwiTm9cIiB0aGVuIGRlbGV0ZSBlbWFpbCAob2ZmZXIgb3B0aW9uKVxuLy8gZWxzZSwgXG4vLyBnZW5lcmF0ZSBhaSByZXBseSB3aXRoIGFwaSBlbmRwb2ludFxuLy8gb3B0aW9uIHRvIHJlZ2VuZXJhdGUsIGtlZXAgKHNhdmUpIGFzIGRyYWZ0XG5cbi8vY29uc2lkZXJpbmc6IGRpc3BsYXkganVzdGlmaWNhdGlvbiBmb3IgXCJjaGVja1wiXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTk1MCByb3VuZGVkLWxnIHB5LTQgcHgtNCBteC04IG15LTQgc3BhY2UteS00IG1heC13LWZ1bGxcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1zbSc+IEFJIFN1Z2dlc3Rpb248L2gxPlxuXG4gICAgICAgIHsgZW1haWwuZW1haWwgPT0gbnVsbCA/IDxoMSBjbGFzc05hbWU9XCJza2VsZXRvbiB3LTEvMyBoLThcIj4gPC9oMT46IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTInPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMT4gU2hvdWxkIHlvdSByZXBseSB0byB0aGUgZW1haWw/IFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdiYWRnZSBteC0yJz4ge2VtYWlsLmVtYWlsLmNoZWNrfSAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDE+IFJlYXNvbjogPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJteS0yIGJ0biBidG4tc21cIiBvbkNsaWNrPXsoKT0+IHNldFRyYXNoKGZhbHNlKX0+IE92ZXJyaWRlIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7ZW1haWwuZW1haWwuY2hlY2sgIT0gbnVsbCAmJiBlbWFpbC5lbWFpbC5jaGVjayA9PSBcIlllc1wiIHx8IHRyYXNoID09IGZhbHNlID9cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UteS0yIG1heC13LTEvMic+XG4gICAgICAgICAgICAgICAgICAgIDxoMT4gQUkgR2VuZXJhdGVkIFJlcGx5IDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJweC0yIG91dGxpbmUgcm91bmRlZC1zbSBmb250LWJvbGRcIj4gU3ViamVjdDogUmVwbHkgdG8ge2VtYWlsLmVtYWlsLnN1YmplY3R9IDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPHAgY2xhc3NOYW1lPSdza2VsZXRvbiBweC0yIHRleHQtY2VudGVyIHB5LTEgdGV4dC1zbSBmb250LWJvbGQnPiBHZW5lcmF0aW5nIHJlcGx5Li4uIDwvcD4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9XCJvdXRsaW5lIHB4LTIgcm91bmRlZC1zbSBvdXRsaW5lLTEgaC01LzYgb3ZlcmZsb3cteS1zY3JvbGwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC13cmFwIHdoaXRlc3BhY2UtcHJlXCI+IHtyZXBseX0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDogPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tc20gdy0xLzUnIG9uQ2xpY2s9eygpPT5kZWxldGVfZW1haWwoZW1haWwuZW1haWwuaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlIEVtYWlsXG4gICAgICAgICAgICAgICAgPC9idXR0b24+IC8vZGVsZXRlIGJ1dHRvbiAoYmVjYXVzZSBlbWFpbCBpcyBlaXRoZXIgc3BhbS9ub24taW1wb3J0YW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBSSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQUkiLCJlbWFpbCIsInRyYXNoIiwic2V0VHJhc2giLCJyZXBseSIsInNldFJlcGx5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJSZXBseSIsImlkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImRlbGV0ZV9lbWFpbCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImFsZXJ0IiwiY2hlY2siLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwic3ViamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Components/AI.tsx\n"));

/***/ })

});