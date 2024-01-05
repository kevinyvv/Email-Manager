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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst AI = (email)=>{\n    _s();\n    const [trash, setTrash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [reply, setReply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reason, setReason] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [regen, setRegen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const Reply = (id)=>{\n        fetch(\"http://127.0.0.1:8080/content/reply/\" + id).then((response)=>response.json()).then((data)=>setReply(data.reply)).then(()=>setLoading(false)) //get reply from chatgpt endpoint\n        ;\n    };\n    const Reason = (check, content)=>{\n        console.log(JSON.stringify({\n            \"content\": content\n        }));\n        fetch(\"http://127.0.01:8080/why/\" + check, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"content\": content\n            })\n        }).then((reason)=>reason.json()).then((data)=>setReason(data.reason));\n    };\n    const delete_email = (id)=>{\n        fetch(\"http://127.0.0.1:8080/emails/\" + id, {\n            method: \"DELETE\"\n        }).then(()=>{\n            console.log(\"Email Deleted!\") //log success or something\n            ;\n            location.reload();\n            alert(\"Email sent to trash.\");\n        });\n    };\n    const create_draft = (id, content)=>{\n        fetch(\"http://127.0.01:8080/reply/\" + id, {\n            method: \"POST\",\n            body: JSON.stringify({\n                sender: email.email.returnto,\n                subject: email.email.subject,\n                content: content\n            })\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (email.email != null) {\n            if (email.email.check == \"Yes\" || trash == false) {\n                Reply(email.email.id);\n                console.log(reply);\n            }\n        }\n    }, [\n        email,\n        regen\n    ]);\n    // have part that gets \"check\"\n    // if \"check\" == \"No\" then delete email (offer option)\n    // else, \n    // generate ai reply with api endpoint\n    // option to regenerate, keep (save) as draft\n    //considering: display justification for \"check\"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-950 rounded-lg py-4 px-4 mx-8 my-4 space-y-4 max-w-full h-3/4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \" AI Suggestion\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined),\n            email.email == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"skeleton w-1/3 h-8\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 75,\n                columnNumber: 33\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 h-3/4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" Should you reply to the email?\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"badge mx-2\",\n                                        onClick: ()=>Reason(email.email.check, email.email.content),\n                                        children: [\n                                            \" \",\n                                            email.email.check,\n                                            \"  \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm\",\n                                children: [\n                                    \" \",\n                                    reason,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"my-2 btn btn-sm\",\n                                onClick: ()=>setTrash(false),\n                                children: \" Override \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined),\n                    email.email.check != null && email.email.check == \"Yes\" || trash == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-4 max-w-1/2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" AI Generated Reply \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"px-2 outline rounded-sm font-bold\",\n                                children: [\n                                    \" Subject: Reply to \",\n                                    email.email.subject,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, undefined),\n                            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"skeleton px-2 text-center py-1 text-sm font-bold\",\n                                children: \" Generating reply... \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 32\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"outline px-2 rounded-sm outline-1 h-1/2 overflow-y-auto  text-wrap whitespace-pre\",\n                                        children: [\n                                            \" \",\n                                            reply\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-sm\",\n                                        onClick: ()=>create_draft(email.email.id, reply),\n                                        children: \" Save as Draft\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-sm mx-2\",\n                                        onClick: ()=>{\n                                            setLoading(true);\n                                            setRegen(!regen);\n                                        },\n                                        children: \" Regenerate \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 31\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-sm w-1/5\",\n                        onClick: ()=>delete_email(email.email.id),\n                        children: \"Delete Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 19\n                    }, undefined) //delete button (because email is either spam/non-important)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AI, \"oQorSAeSpR/Sm2rYH4ZyIy2jQ4U=\");\n_c = AI;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AI);\nvar _c;\n$RefreshReg$(_c, \"AI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ3NCO2dDQUFFSixXQUFVOztvQ0FBVTtvQ0FBRWhDO29DQUFPOzs7Ozs7OzBDQUNoQyw4REFBQ2tDO2dDQUFPRixXQUFVO2dDQUFrQkcsU0FBUyxJQUFLdEMsU0FBUzswQ0FBUTs7Ozs7Ozs7Ozs7O29CQUcxRUYsTUFBTUEsS0FBSyxDQUFDbUIsS0FBSyxJQUFJLFFBQVFuQixNQUFNQSxLQUFLLENBQUNtQixLQUFLLElBQUksU0FBU2xCLFNBQVMsc0JBQ2pFLDhEQUFDbUM7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDQzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTtnQ0FBR0QsV0FBVTs7b0NBQW9DO29DQUFvQnJDLE1BQU1BLEtBQUssQ0FBQ21DLE9BQU87b0NBQUM7Ozs7Ozs7NEJBQ3pGNUIsd0JBQVUsOERBQUNrQztnQ0FBRUosV0FBVTswQ0FBbUQ7Ozs7OzBEQUNqRSw4REFBQ3pDLHVEQUFjOztrREFDYiw4REFBQzZDO3dDQUFFSixXQUFVOzs0Q0FDYTs0Q0FBRWxDOzs7Ozs7O2tEQUU1Qiw4REFBQ29DO3dDQUFPRixXQUFVO3dDQUFhRyxTQUFTLElBQUtSLGFBQWFoQyxNQUFNQSxLQUFLLENBQUNZLEVBQUUsRUFBRVQ7a0RBQVE7Ozs7OztrREFDbEYsOERBQUNvQzt3Q0FBT0YsV0FBVTt3Q0FBa0JHLFNBQVM7NENBQU1oQyxXQUFXOzRDQUNWRSxTQUFTLENBQUNEO3dDQUFNO2tEQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztrREFLdEYsOERBQUM4Qjt3QkFBT0YsV0FBVTt3QkFBbUJHLFNBQVMsSUFBSVosYUFBYTVCLE1BQU1BLEtBQUssQ0FBQ1ksRUFBRTtrQ0FBRzs7Ozs7a0NBRXhFLDREQUE0RDs7Ozs7Ozs7Ozs7OztBQU10RjtHQXpHTWI7S0FBQUE7QUEyR04sK0RBQWVBLEVBQUVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9BSS50c3g/OTNmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuY29uc3QgQUkgPSAoZW1haWw6YW55KSA9PiB7XG5cbiAgICBjb25zdCBbdHJhc2gsIHNldFRyYXNoXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW3JlcGx5LCBzZXRSZXBseV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbcmVnZW4sIHNldFJlZ2VuXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICBjb25zdCBSZXBseSAgPSAoaWQ6bnVtYmVyKSA9PiB7XG4gICAgICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwODAvY29udGVudC9yZXBseS9cIiArIGlkKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICkudGhlbihkYXRhID0+IHNldFJlcGx5KGRhdGEucmVwbHkpXG4gICAgICAgICkudGhlbigoKT0+IHNldExvYWRpbmcoZmFsc2UpKSAvL2dldCByZXBseSBmcm9tIGNoYXRncHQgZW5kcG9pbnRcbiAgICB9XG5cbiAgICBjb25zdCBSZWFzb24gPSAoY2hlY2s6U3RyaW5nLCBjb250ZW50OlN0cmluZykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBcImNvbnRlbnRcIiA6IGNvbnRlbnRcbiAgICAgICAgIH0pKVxuICAgICAgICBmZXRjaChcImh0dHA6Ly8xMjcuMC4wMTo4MDgwL3doeS9cIiArIGNoZWNrLFxuICAgICAgICAge21ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIFwiY29udGVudFwiIDogY29udGVudFxuICAgICAgICAgfSlcbiAgICB9KS50aGVuKHJlYXNvbiA9PiByZWFzb24uanNvbigpKS50aGVuKGRhdGEgPT4gc2V0UmVhc29uKGRhdGEucmVhc29uKSlcbiAgICB9XG5cblxuICAgIGNvbnN0IGRlbGV0ZV9lbWFpbCA9IChpZDpudW1iZXIpID0+IHtcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwODAvZW1haWxzL1wiICsgaWQsIHttZXRob2Q6ICdERUxFVEUnfSkudGhlbigoKSA9PiBcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbWFpbCBEZWxldGVkIVwiKSAgLy9sb2cgc3VjY2VzcyBvciBzb21ldGhpbmdcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICBhbGVydChcIkVtYWlsIHNlbnQgdG8gdHJhc2guXCIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlX2RyYWZ0ID0gKGlkOm51bWJlciwgY29udGVudDpTdHJpbmcpID0+IHtcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMDE6ODA4MC9yZXBseS9cIiArIGlkLFxuICAgICAgICAge21ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgc2VuZGVyIDogZW1haWwuZW1haWwucmV0dXJudG8sIFxuICAgICAgICAgICAgc3ViamVjdCA6ICBlbWFpbC5lbWFpbC5zdWJqZWN0ICAsXG4gICAgICAgICAgICBjb250ZW50IDogY29udGVudFxuICAgICAgICAgfSlcbiAgICB9KVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChlbWFpbC5lbWFpbCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoZW1haWwuZW1haWwuY2hlY2sgPT0gXCJZZXNcIiB8fCB0cmFzaCA9PSBmYWxzZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBSZXBseShlbWFpbC5lbWFpbC5pZClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXBseSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtlbWFpbCwgcmVnZW5dKVxuLy8gaGF2ZSBwYXJ0IHRoYXQgZ2V0cyBcImNoZWNrXCJcbi8vIGlmIFwiY2hlY2tcIiA9PSBcIk5vXCIgdGhlbiBkZWxldGUgZW1haWwgKG9mZmVyIG9wdGlvbilcbi8vIGVsc2UsIFxuLy8gZ2VuZXJhdGUgYWkgcmVwbHkgd2l0aCBhcGkgZW5kcG9pbnRcbi8vIG9wdGlvbiB0byByZWdlbmVyYXRlLCBrZWVwIChzYXZlKSBhcyBkcmFmdFxuXG4vL2NvbnNpZGVyaW5nOiBkaXNwbGF5IGp1c3RpZmljYXRpb24gZm9yIFwiY2hlY2tcIlxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS05NTAgcm91bmRlZC1sZyBweS00IHB4LTQgbXgtOCBteS00IHNwYWNlLXktNCBtYXgtdy1mdWxsIGgtMy80XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtc20nPiBBSSBTdWdnZXN0aW9uPC9oMT5cblxuICAgICAgICB7IGVtYWlsLmVtYWlsID09IG51bGwgPyA8aDEgY2xhc3NOYW1lPVwic2tlbGV0b24gdy0xLzMgaC04XCI+IDwvaDE+OiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yIGgtMy80Jz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDE+IFNob3VsZCB5b3UgcmVwbHkgdG8gdGhlIGVtYWlsPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiYWRnZSBteC0yJyBvbkNsaWNrPXsoKT0+UmVhc29uKGVtYWlsLmVtYWlsLmNoZWNrLCBlbWFpbC5lbWFpbC5jb250ZW50KX0+IHtlbWFpbC5lbWFpbC5jaGVja30gIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+IHtyZWFzb259IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJteS0yIGJ0biBidG4tc21cIiBvbkNsaWNrPXsoKT0+IHNldFRyYXNoKGZhbHNlKX0+IE92ZXJyaWRlIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7ZW1haWwuZW1haWwuY2hlY2sgIT0gbnVsbCAmJiBlbWFpbC5lbWFpbC5jaGVjayA9PSBcIlllc1wiIHx8IHRyYXNoID09IGZhbHNlID9cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UteS00IG1heC13LTEvMic+XG4gICAgICAgICAgICAgICAgICAgIDxoMT4gQUkgR2VuZXJhdGVkIFJlcGx5IDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJweC0yIG91dGxpbmUgcm91bmRlZC1zbSBmb250LWJvbGRcIj4gU3ViamVjdDogUmVwbHkgdG8ge2VtYWlsLmVtYWlsLnN1YmplY3R9IDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPHAgY2xhc3NOYW1lPSdza2VsZXRvbiBweC0yIHRleHQtY2VudGVyIHB5LTEgdGV4dC1zbSBmb250LWJvbGQnPiBHZW5lcmF0aW5nIHJlcGx5Li4uIDwvcD4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm91dGxpbmUgcHgtMiByb3VuZGVkLXNtIG91dGxpbmUtMSBoLTEvMiBvdmVyZmxvdy15LWF1dG8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtd3JhcCB3aGl0ZXNwYWNlLXByZVwiPiB7cmVwbHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgb25DbGljaz17KCk9PiBjcmVhdGVfZHJhZnQoZW1haWwuZW1haWwuaWQsIHJlcGx5KX0+IFNhdmUgYXMgRHJhZnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIG14LTJcIiBvbkNsaWNrPXsoKT0+IHtzZXRMb2FkaW5nKHRydWUpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVnZW4oIXJlZ2VuKX19ID4gUmVnZW5lcmF0ZSA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOiA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1zbSB3LTEvNScgb25DbGljaz17KCk9PmRlbGV0ZV9lbWFpbChlbWFpbC5lbWFpbC5pZCl9PlxuICAgICAgICAgICAgICAgICAgICBEZWxldGUgRW1haWxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj4gLy9kZWxldGUgYnV0dG9uIChiZWNhdXNlIGVtYWlsIGlzIGVpdGhlciBzcGFtL25vbi1pbXBvcnRhbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFJIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFJIiwiZW1haWwiLCJ0cmFzaCIsInNldFRyYXNoIiwicmVwbHkiLCJzZXRSZXBseSIsInJlYXNvbiIsInNldFJlYXNvbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVnZW4iLCJzZXRSZWdlbiIsIlJlcGx5IiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiUmVhc29uIiwiY2hlY2siLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImRlbGV0ZV9lbWFpbCIsImxvY2F0aW9uIiwicmVsb2FkIiwiYWxlcnQiLCJjcmVhdGVfZHJhZnQiLCJzZW5kZXIiLCJyZXR1cm50byIsInN1YmplY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/AI.tsx\n"));

/***/ })

});