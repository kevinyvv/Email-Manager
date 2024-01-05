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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst AI = (email)=>{\n    _s();\n    const [trash, setTrash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [reply, setReply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [regen, setRegen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const Reply = (id)=>{\n        fetch(\"http://127.0.0.1:8080/content/reply/\" + id).then((response)=>response.json()).then((data)=>setReply(data.reply)).then(()=>setLoading(false)) //get reply from chatgpt endpoint\n        ;\n    };\n    const delete_email = (id)=>{\n        fetch(\"http://127.0.0.1:8080/emails/\" + id, {\n            method: \"DELETE\"\n        }).then(()=>{\n            console.log(\"Email Deleted!\") //log success or something\n            ;\n            location.reload();\n            alert(\"Email sent to trash.\");\n        });\n    };\n    const create_draft = (id, content)=>{\n        fetch(\"http://127.0.01:8080;/reply/\" + id, {\n            method: \"POST\",\n            body: JSON.stringify({\n                sender: email.email.returnto,\n                subject: email.email.subject,\n                content: content\n            })\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (email.email != null) {\n            if (email.email.check == \"Yes\" || trash == false) {\n                Reply(email.email.id);\n                console.log(reply);\n            }\n        }\n    }, [\n        email,\n        regen\n    ]);\n    // have part that gets \"check\"\n    // if \"check\" == \"No\" then delete email (offer option)\n    // else, \n    // generate ai reply with api endpoint\n    // option to regenerate, keep (save) as draft\n    //considering: display justification for \"check\"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-950 rounded-lg py-4 px-4 mx-8 my-4 space-y-4 max-w-full h-3/4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \" AI Suggestion\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined),\n            email.email == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"skeleton w-1/3 h-8\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 59,\n                columnNumber: 33\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 h-3/4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" Should you reply to the email?\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"badge mx-2\",\n                                        children: [\n                                            \" \",\n                                            email.email.check,\n                                            \"  \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" Reason: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"my-2 btn btn-sm\",\n                                onClick: ()=>setTrash(false),\n                                children: \" Override \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, undefined),\n                    email.email.check != null && email.email.check == \"Yes\" || trash == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-4 max-w-1/2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" AI Generated Reply \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"px-2 outline rounded-sm font-bold\",\n                                children: [\n                                    \" Subject: Reply to \",\n                                    email.email.subject,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, undefined),\n                            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"skeleton px-2 text-center py-1 text-sm font-bold\",\n                                children: \" Generating reply... \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 32\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"outline px-2 rounded-sm outline-1 h-1/2 overflow-y-auto  text-wrap whitespace-pre\",\n                                        children: [\n                                            \" \",\n                                            reply\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-sm\",\n                                        children: \" Save as Draft\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-sm mx-2\",\n                                        onClick: ()=>{\n                                            setLoading(true);\n                                            setRegen(!regen);\n                                        },\n                                        children: \" Regenerate \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 31\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-sm w-1/5\",\n                        onClick: ()=>delete_email(email.email.id),\n                        children: \"Delete Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 19\n                    }, undefined) //delete button (because email is either spam/non-important)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AI, \"AORXmLFb5ytGCUpxh92J4qPxcsg=\");\n_c = AI;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AI);\nvar _c;\n$RefreshReg$(_c, \"AI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2lDO3dDQUFPSCxXQUFVO2tEQUFhOzs7Ozs7a0RBQy9CLDhEQUFDRzt3Q0FBT0gsV0FBVTt3Q0FBa0JJLFNBQVM7NENBQU0vQixXQUFXOzRDQUNWRSxTQUFTLENBQUNEO3dDQUFNO2tEQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztrREFLdEYsOERBQUM2Qjt3QkFBT0gsV0FBVTt3QkFBbUJJLFNBQVMsSUFBSXJCLGFBQWFoQixNQUFNQSxLQUFLLENBQUNVLEVBQUU7a0NBQUc7Ozs7O2tDQUV4RSw0REFBNEQ7Ozs7Ozs7Ozs7Ozs7QUFNdEY7R0F6Rk1YO0tBQUFBO0FBMkZOLCtEQUFlQSxFQUFFQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvQUkudHN4PzkzZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEFJID0gKGVtYWlsOmFueSkgPT4ge1xuXG4gICAgY29uc3QgW3RyYXNoLCBzZXRUcmFzaF0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtyZXBseSwgc2V0UmVwbHldID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbcmVnZW4sIHNldFJlZ2VuXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICBjb25zdCBSZXBseSAgPSAoaWQ6bnVtYmVyKSA9PiB7XG4gICAgICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwODAvY29udGVudC9yZXBseS9cIiArIGlkKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICkudGhlbihkYXRhID0+IHNldFJlcGx5KGRhdGEucmVwbHkpXG4gICAgICAgICkudGhlbigoKT0+IHNldExvYWRpbmcoZmFsc2UpKSAvL2dldCByZXBseSBmcm9tIGNoYXRncHQgZW5kcG9pbnRcbiAgICB9XG5cblxuICAgIGNvbnN0IGRlbGV0ZV9lbWFpbCA9IChpZDpudW1iZXIpID0+IHtcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwODAvZW1haWxzL1wiICsgaWQsIHttZXRob2Q6ICdERUxFVEUnfSkudGhlbigoKSA9PiBcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbWFpbCBEZWxldGVkIVwiKSAgLy9sb2cgc3VjY2VzcyBvciBzb21ldGhpbmdcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICBhbGVydChcIkVtYWlsIHNlbnQgdG8gdHJhc2guXCIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlX2RyYWZ0ID0gKGlkOm51bWJlciwgY29udGVudDpTdHJpbmcpID0+IHtcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMDE6ODA4MDsvcmVwbHkvXCIgKyBpZCxcbiAgICAgICAgIHttZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHNlbmRlciA6IGVtYWlsLmVtYWlsLnJldHVybnRvLCBcbiAgICAgICAgICAgIHN1YmplY3QgOiAgZW1haWwuZW1haWwuc3ViamVjdCAgLFxuICAgICAgICAgICAgY29udGVudCA6IGNvbnRlbnRcbiAgICAgICAgIH0pXG4gICAgfSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZW1haWwuZW1haWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGVtYWlsLmVtYWlsLmNoZWNrID09IFwiWWVzXCIgfHwgdHJhc2ggPT0gZmFsc2UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgUmVwbHkoZW1haWwuZW1haWwuaWQpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVwbHkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbZW1haWwsIHJlZ2VuXSlcbi8vIGhhdmUgcGFydCB0aGF0IGdldHMgXCJjaGVja1wiXG4vLyBpZiBcImNoZWNrXCIgPT0gXCJOb1wiIHRoZW4gZGVsZXRlIGVtYWlsIChvZmZlciBvcHRpb24pXG4vLyBlbHNlLCBcbi8vIGdlbmVyYXRlIGFpIHJlcGx5IHdpdGggYXBpIGVuZHBvaW50XG4vLyBvcHRpb24gdG8gcmVnZW5lcmF0ZSwga2VlcCAoc2F2ZSkgYXMgZHJhZnRcblxuLy9jb25zaWRlcmluZzogZGlzcGxheSBqdXN0aWZpY2F0aW9uIGZvciBcImNoZWNrXCJcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtOTUwIHJvdW5kZWQtbGcgcHktNCBweC00IG14LTggbXktNCBzcGFjZS15LTQgbWF4LXctZnVsbCBoLTMvNFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXNtJz4gQUkgU3VnZ2VzdGlvbjwvaDE+XG5cbiAgICAgICAgeyBlbWFpbC5lbWFpbCA9PSBudWxsID8gPGgxIGNsYXNzTmFtZT1cInNrZWxldG9uIHctMS8zIGgtOFwiPiA8L2gxPjogXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMiBoLTMvNCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPiBTaG91bGQgeW91IHJlcGx5IHRvIHRoZSBlbWFpbD8gXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2JhZGdlIG14LTInPiB7ZW1haWwuZW1haWwuY2hlY2t9ICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMT4gUmVhc29uOiA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm15LTIgYnRuIGJ0bi1zbVwiIG9uQ2xpY2s9eygpPT4gc2V0VHJhc2goZmFsc2UpfT4gT3ZlcnJpZGUgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtlbWFpbC5lbWFpbC5jaGVjayAhPSBudWxsICYmIGVtYWlsLmVtYWlsLmNoZWNrID09IFwiWWVzXCIgfHwgdHJhc2ggPT0gZmFsc2UgP1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZS15LTQgbWF4LXctMS8yJz5cbiAgICAgICAgICAgICAgICAgICAgPGgxPiBBSSBHZW5lcmF0ZWQgUmVwbHkgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB4LTIgb3V0bGluZSByb3VuZGVkLXNtIGZvbnQtYm9sZFwiPiBTdWJqZWN0OiBSZXBseSB0byB7ZW1haWwuZW1haWwuc3ViamVjdH0gPC9oMT5cbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8cCBjbGFzc05hbWU9J3NrZWxldG9uIHB4LTIgdGV4dC1jZW50ZXIgcHktMSB0ZXh0LXNtIGZvbnQtYm9sZCc+IEdlbmVyYXRpbmcgcmVwbHkuLi4gPC9wPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwib3V0bGluZSBweC0yIHJvdW5kZWQtc20gb3V0bGluZS0xIGgtMS8yIG92ZXJmbG93LXktYXV0byBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC13cmFwIHdoaXRlc3BhY2UtcHJlXCI+IHtyZXBseX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc21cIj4gU2F2ZSBhcyBEcmFmdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gbXgtMlwiIG9uQ2xpY2s9eygpPT4ge3NldExvYWRpbmcodHJ1ZSkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWdlbighcmVnZW4pfX0gPiBSZWdlbmVyYXRlIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6IDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXNtIHctMS81JyBvbkNsaWNrPXsoKT0+ZGVsZXRlX2VtYWlsKGVtYWlsLmVtYWlsLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgIERlbGV0ZSBFbWFpbFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAvL2RlbGV0ZSBidXR0b24gKGJlY2F1c2UgZW1haWwgaXMgZWl0aGVyIHNwYW0vbm9uLWltcG9ydGFudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQUkiXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQUkiLCJlbWFpbCIsInRyYXNoIiwic2V0VHJhc2giLCJyZXBseSIsInNldFJlcGx5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZWdlbiIsInNldFJlZ2VuIiwiUmVwbHkiLCJpZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkZWxldGVfZW1haWwiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJyZWxvYWQiLCJhbGVydCIsImNyZWF0ZV9kcmFmdCIsImNvbnRlbnQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbmRlciIsInJldHVybnRvIiwic3ViamVjdCIsImNoZWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Components/AI.tsx\n"));

/***/ })

});