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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AI = (email)=>{\n    _s();\n    const [trash, setTrash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [reply, setReply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reason, setReason] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [regen, setRegen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const Reply = (id)=>{\n        fetch(\"http://127.0.0.1:8080/content/reply/\" + id).then((response)=>response.json()).then((data)=>setReply(data.reply)).then(()=>setLoading(false)) //get reply from chatgpt endpoint\n        ;\n    };\n    const Reason = (check, content)=>{\n        console.log(JSON.stringify({\n            \"content\": content\n        }));\n        fetch(\"http://127.0.01:8080/why/\" + check, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"content\": content\n            })\n        }).then((reason)=>reason.json()).then((data)=>setReason(data.reason));\n    };\n    const delete_email = (id)=>{\n        fetch(\"http://127.0.0.1:8080/emails/\" + id, {\n            method: \"DELETE\"\n        }).then(()=>{\n            console.log(\"Email Deleted!\") //log success or something\n            ;\n            location.reload();\n            alert(\"Email sent to trash.\");\n        });\n    };\n    const create_draft = (id, content)=>{\n        fetch(\"http://127.0.01:8080/reply/\" + id, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                sender: email.email.returnto,\n                subject: email.email.subject,\n                content: content\n            })\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (email.email != null) {\n            if (email.email.check == \"Yes\" || trash == false) {\n                setReason(\"\");\n                Reply(email.email.id);\n                console.log(reply);\n            }\n        }\n    }, [\n        email,\n        regen\n    ]);\n    // have part that gets \"check\"\n    // if \"check\" == \"No\" then delete email (offer option)\n    // else, \n    // generate ai reply with api endpoint\n    // option to regenerate, keep (save) as draft\n    //considering: display justification for \"check\"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-950 rounded-lg py-4 px-4 mx-8 my-4 space-y-4 max-w-full h-3/4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \" AI Suggestion\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, undefined),\n            email.email == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"skeleton w-1/3 h-8\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 79,\n                columnNumber: 33\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 h-3/4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" Should you reply to the email?\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"badge mx-2\",\n                                        onClick: ()=>Reason(email.email.check, email.email.content),\n                                        children: [\n                                            \" \",\n                                            email.email.check,\n                                            \"  \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm mx-4 px-2 my-2\",\n                                children: [\n                                    \" \",\n                                    reason,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"my-2 btn btn-sm\",\n                                onClick: ()=>setTrash(false),\n                                children: \" Override \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, undefined),\n                    email.email.check != null && email.email.check == \"Yes\" || trash == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-4 max-w-1/2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" AI Generated Reply \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"px-2 outline rounded-sm font-bold\",\n                                children: [\n                                    \" Subject: Reply to \",\n                                    email.email.subject,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 21\n                            }, undefined),\n                            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"skeleton px-2 text-center py-1 text-sm font-bold\",\n                                children: \" Generating reply... \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 32\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-96\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"outline px-2 rounded-sm outline-1 max-h-96 overflow-y-auto  text-wrap whitespace-pre\",\n                                        children: [\n                                            \" \",\n                                            reply\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-sm my-2\",\n                                        onClick: ()=>create_draft(email.email.id, reply),\n                                        children: \" Save as Draft\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-sm mx-2 my-2\",\n                                        onClick: ()=>{\n                                            setLoading(true);\n                                            setRegen(!regen);\n                                        },\n                                        children: \" Regenerate \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 31\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-sm w-1/5\",\n                        onClick: ()=>delete_email(email.email.id),\n                        children: \"Delete Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 19\n                    }, undefined) //delete button (because email is either spam/non-important)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AI, \"oQorSAeSpR/Sm2rYH4ZyIy2jQ4U=\");\n_c = AI;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AI);\nvar _c;\n$RefreshReg$(_c, \"AI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNtQixLQUFLOzRDQUFDOzs7Ozs7Ozs7Ozs7OzBDQUVwSCw4REFBQ3NCO2dDQUFFSixXQUFVOztvQ0FBeUI7b0NBQUVoQztvQ0FBTzs7Ozs7OzswQ0FDL0MsOERBQUNrQztnQ0FBT0YsV0FBVTtnQ0FBa0JHLFNBQVMsSUFBS3RDLFNBQVM7MENBQVE7Ozs7Ozs7Ozs7OztvQkFHMUVGLE1BQU1BLEtBQUssQ0FBQ21CLEtBQUssSUFBSSxRQUFRbkIsTUFBTUEsS0FBSyxDQUFDbUIsS0FBSyxJQUFJLFNBQVNsQixTQUFTLHNCQUNqRSw4REFBQ21DO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0M7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7Z0NBQUdELFdBQVU7O29DQUFvQztvQ0FBb0JyQyxNQUFNQSxLQUFLLENBQUNtQyxPQUFPO29DQUFDOzs7Ozs7OzRCQUN6RjVCLHdCQUFVLDhEQUFDa0M7Z0NBQUVKLFdBQVU7MENBQW1EOzs7OzswREFDakUsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0k7d0NBQUVKLFdBQVU7OzRDQUNhOzRDQUFFbEM7Ozs7Ozs7a0RBRTVCLDhEQUFDb0M7d0NBQU9GLFdBQVU7d0NBQWtCRyxTQUFTLElBQUtSLGFBQWFoQyxNQUFNQSxLQUFLLENBQUNZLEVBQUUsRUFBRVQ7a0RBQVE7Ozs7OztrREFDdkYsOERBQUNvQzt3Q0FBT0YsV0FBVTt3Q0FBdUJHLFNBQVM7NENBQU1oQyxXQUFXOzRDQUNmRSxTQUFTLENBQUNEO3dDQUFNO2tEQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztrREFLdEYsOERBQUM4Qjt3QkFBT0YsV0FBVTt3QkFBbUJHLFNBQVMsSUFBSVosYUFBYTVCLE1BQU1BLEtBQUssQ0FBQ1ksRUFBRTtrQ0FBRzs7Ozs7a0NBRXhFLDREQUE0RDs7Ozs7Ozs7Ozs7OztBQU10RjtHQTdHTWI7S0FBQUE7QUErR04sK0RBQWVBLEVBQUVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9BSS50c3g/OTNmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuY29uc3QgQUkgPSAoZW1haWw6YW55KSA9PiB7XG5cbiAgICBjb25zdCBbdHJhc2gsIHNldFRyYXNoXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW3JlcGx5LCBzZXRSZXBseV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbcmVnZW4sIHNldFJlZ2VuXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICBjb25zdCBSZXBseSAgPSAoaWQ6bnVtYmVyKSA9PiB7XG4gICAgICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwODAvY29udGVudC9yZXBseS9cIiArIGlkKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICkudGhlbihkYXRhID0+IHNldFJlcGx5KGRhdGEucmVwbHkpXG4gICAgICAgICkudGhlbigoKT0+IHNldExvYWRpbmcoZmFsc2UpKSAvL2dldCByZXBseSBmcm9tIGNoYXRncHQgZW5kcG9pbnRcbiAgICB9XG5cbiAgICBjb25zdCBSZWFzb24gPSAoY2hlY2s6U3RyaW5nLCBjb250ZW50OlN0cmluZykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBcImNvbnRlbnRcIiA6IGNvbnRlbnRcbiAgICAgICAgIH0pKVxuICAgICAgICBmZXRjaChcImh0dHA6Ly8xMjcuMC4wMTo4MDgwL3doeS9cIiArIGNoZWNrLFxuICAgICAgICAge21ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIFwiY29udGVudFwiIDogY29udGVudFxuICAgICAgICAgfSlcbiAgICB9KS50aGVuKHJlYXNvbiA9PiByZWFzb24uanNvbigpKS50aGVuKGRhdGEgPT4gc2V0UmVhc29uKGRhdGEucmVhc29uKSlcbiAgICB9XG5cblxuICAgIGNvbnN0IGRlbGV0ZV9lbWFpbCA9IChpZDpudW1iZXIpID0+IHtcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwODAvZW1haWxzL1wiICsgaWQsIHttZXRob2Q6ICdERUxFVEUnfSkudGhlbigoKSA9PiBcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbWFpbCBEZWxldGVkIVwiKSAgLy9sb2cgc3VjY2VzcyBvciBzb21ldGhpbmdcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICBhbGVydChcIkVtYWlsIHNlbnQgdG8gdHJhc2guXCIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlX2RyYWZ0ID0gKGlkOm51bWJlciwgY29udGVudDpTdHJpbmcpID0+IHtcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMDE6ODA4MC9yZXBseS9cIiArIGlkLFxuICAgICAgICAge21ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHNlbmRlciA6IGVtYWlsLmVtYWlsLnJldHVybnRvLCBcbiAgICAgICAgICAgIHN1YmplY3QgOiAgZW1haWwuZW1haWwuc3ViamVjdCAgLFxuICAgICAgICAgICAgY29udGVudCA6IGNvbnRlbnRcbiAgICAgICAgIH0pXG4gICAgfSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZW1haWwuZW1haWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGVtYWlsLmVtYWlsLmNoZWNrID09IFwiWWVzXCIgfHwgdHJhc2ggPT0gZmFsc2UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2V0UmVhc29uKCcnKVxuICAgICAgICAgICAgICAgIFJlcGx5KGVtYWlsLmVtYWlsLmlkKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcGx5KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW2VtYWlsLCByZWdlbl0pXG4vLyBoYXZlIHBhcnQgdGhhdCBnZXRzIFwiY2hlY2tcIlxuLy8gaWYgXCJjaGVja1wiID09IFwiTm9cIiB0aGVuIGRlbGV0ZSBlbWFpbCAob2ZmZXIgb3B0aW9uKVxuLy8gZWxzZSwgXG4vLyBnZW5lcmF0ZSBhaSByZXBseSB3aXRoIGFwaSBlbmRwb2ludFxuLy8gb3B0aW9uIHRvIHJlZ2VuZXJhdGUsIGtlZXAgKHNhdmUpIGFzIGRyYWZ0XG5cbi8vY29uc2lkZXJpbmc6IGRpc3BsYXkganVzdGlmaWNhdGlvbiBmb3IgXCJjaGVja1wiXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTk1MCByb3VuZGVkLWxnIHB5LTQgcHgtNCBteC04IG15LTQgc3BhY2UteS00IG1heC13LWZ1bGwgaC0zLzRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1zbSc+IEFJIFN1Z2dlc3Rpb248L2gxPlxuXG4gICAgICAgIHsgZW1haWwuZW1haWwgPT0gbnVsbCA/IDxoMSBjbGFzc05hbWU9XCJza2VsZXRvbiB3LTEvMyBoLThcIj4gPC9oMT46IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTIgaC0zLzQnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMT4gU2hvdWxkIHlvdSByZXBseSB0byB0aGUgZW1haWw/IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JhZGdlIG14LTInIG9uQ2xpY2s9eygpPT5SZWFzb24oZW1haWwuZW1haWwuY2hlY2ssIGVtYWlsLmVtYWlsLmNvbnRlbnQpfT4ge2VtYWlsLmVtYWlsLmNoZWNrfSAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXgtNCBweC0yIG15LTJcIj4ge3JlYXNvbn0gPC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm15LTIgYnRuIGJ0bi1zbVwiIG9uQ2xpY2s9eygpPT4gc2V0VHJhc2goZmFsc2UpfT4gT3ZlcnJpZGUgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtlbWFpbC5lbWFpbC5jaGVjayAhPSBudWxsICYmIGVtYWlsLmVtYWlsLmNoZWNrID09IFwiWWVzXCIgfHwgdHJhc2ggPT0gZmFsc2UgP1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZS15LTQgbWF4LXctMS8yJz5cbiAgICAgICAgICAgICAgICAgICAgPGgxPiBBSSBHZW5lcmF0ZWQgUmVwbHkgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB4LTIgb3V0bGluZSByb3VuZGVkLXNtIGZvbnQtYm9sZFwiPiBTdWJqZWN0OiBSZXBseSB0byB7ZW1haWwuZW1haWwuc3ViamVjdH0gPC9oMT5cbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8cCBjbGFzc05hbWU9J3NrZWxldG9uIHB4LTIgdGV4dC1jZW50ZXIgcHktMSB0ZXh0LXNtIGZvbnQtYm9sZCc+IEdlbmVyYXRpbmcgcmVwbHkuLi4gPC9wPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwiaC05NlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvdXRsaW5lIHB4LTIgcm91bmRlZC1zbSBvdXRsaW5lLTEgbWF4LWgtOTYgb3ZlcmZsb3cteS1hdXRvIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXdyYXAgd2hpdGVzcGFjZS1wcmVcIj4ge3JlcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBteS0yXCIgb25DbGljaz17KCk9PiBjcmVhdGVfZHJhZnQoZW1haWwuZW1haWwuaWQsIHJlcGx5KX0+IFNhdmUgYXMgRHJhZnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIG14LTIgbXktMlwiIG9uQ2xpY2s9eygpPT4ge3NldExvYWRpbmcodHJ1ZSkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWdlbighcmVnZW4pfX0gPiBSZWdlbmVyYXRlIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOiA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1zbSB3LTEvNScgb25DbGljaz17KCk9PmRlbGV0ZV9lbWFpbChlbWFpbC5lbWFpbC5pZCl9PlxuICAgICAgICAgICAgICAgICAgICBEZWxldGUgRW1haWxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj4gLy9kZWxldGUgYnV0dG9uIChiZWNhdXNlIGVtYWlsIGlzIGVpdGhlciBzcGFtL25vbi1pbXBvcnRhbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFJIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBSSIsImVtYWlsIiwidHJhc2giLCJzZXRUcmFzaCIsInJlcGx5Iiwic2V0UmVwbHkiLCJyZWFzb24iLCJzZXRSZWFzb24iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlZ2VuIiwic2V0UmVnZW4iLCJSZXBseSIsImlkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIlJlYXNvbiIsImNoZWNrIiwiY29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJkZWxldGVfZW1haWwiLCJsb2NhdGlvbiIsInJlbG9hZCIsImFsZXJ0IiwiY3JlYXRlX2RyYWZ0Iiwic2VuZGVyIiwicmV0dXJudG8iLCJzdWJqZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Components/AI.tsx\n"));

/***/ })

});