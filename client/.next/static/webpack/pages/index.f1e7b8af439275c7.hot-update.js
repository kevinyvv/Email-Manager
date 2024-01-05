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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst AI = (email)=>{\n    _s();\n    const [trash, setTrash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [reply, setReply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reason, setReason] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [regen, setRegen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const Reply = (id)=>{\n        fetch(\"http://127.0.0.1:8080/content/reply/\" + id).then((response)=>response.json()).then((data)=>setReply(data.reply)).then(()=>setLoading(false)) //get reply from chatgpt endpoint\n        ;\n    };\n    const Reason = (check, content)=>{\n        fetch(\"http://127.0.01:8080/why/\" + check, {\n            method: \"POST\",\n            body: JSON.stringify({\n                \"content\": content\n            })\n        }).then((reason)=>reason.json()).then((data)=>setReason(data.reason));\n    };\n    const delete_email = (id)=>{\n        fetch(\"http://127.0.0.1:8080/emails/\" + id, {\n            method: \"DELETE\"\n        }).then(()=>{\n            console.log(\"Email Deleted!\") //log success or something\n            ;\n            location.reload();\n            alert(\"Email sent to trash.\");\n        });\n    };\n    const create_draft = (id, content)=>{\n        fetch(\"http://127.0.01:8080/reply/\" + id, {\n            method: \"POST\",\n            body: JSON.stringify({\n                sender: email.email.returnto,\n                subject: email.email.subject,\n                content: content\n            })\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (email.email != null) {\n            if (email.email.check == \"Yes\" || trash == false) {\n                Reply(email.email.id);\n                console.log(reply);\n            }\n        }\n    }, [\n        email,\n        regen\n    ]);\n    // have part that gets \"check\"\n    // if \"check\" == \"No\" then delete email (offer option)\n    // else, \n    // generate ai reply with api endpoint\n    // option to regenerate, keep (save) as draft\n    //considering: display justification for \"check\"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-950 rounded-lg py-4 px-4 mx-8 my-4 space-y-4 max-w-full h-3/4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \" AI Suggestion\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined),\n            email.email == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"skeleton w-1/3 h-8\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 69,\n                columnNumber: 33\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 h-3/4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" Should you reply to the email?\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"badge mx-2\",\n                                        onClick: ()=>Reason(email.email.check, email.email.content),\n                                        children: [\n                                            \" \",\n                                            email.email.check,\n                                            \"  \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \" \",\n                                    reason,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"my-2 btn btn-sm\",\n                                onClick: ()=>setTrash(false),\n                                children: \" Override \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, undefined),\n                    email.email.check != null && email.email.check == \"Yes\" || trash == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-4 max-w-1/2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \" AI Generated Reply \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"px-2 outline rounded-sm font-bold\",\n                                children: [\n                                    \" Subject: Reply to \",\n                                    email.email.subject,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, undefined),\n                            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"skeleton px-2 text-center py-1 text-sm font-bold\",\n                                children: \" Generating reply... \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 32\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"outline px-2 rounded-sm outline-1 h-1/2 overflow-y-auto  text-wrap whitespace-pre\",\n                                        children: [\n                                            \" \",\n                                            reply\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-sm\",\n                                        onClick: ()=>create_draft(email.email.id, reply),\n                                        children: \" Save as Draft\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-sm mx-2\",\n                                        onClick: ()=>{\n                                            setLoading(true);\n                                            setRegen(!regen);\n                                        },\n                                        children: \" Regenerate \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 31\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-sm w-1/5\",\n                        onClick: ()=>delete_email(email.email.id),\n                        children: \"Delete Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 19\n                    }, undefined) //delete button (because email is either spam/non-important)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AI, \"oQorSAeSpR/Sm2rYH4ZyIy2jQ4U=\");\n_c = AI;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AI);\nvar _c;\n$RefreshReg$(_c, \"AI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFROzs7Ozs7Ozs7Ozs7b0JBRzFFRixNQUFNQSxLQUFLLENBQUNtQixLQUFLLElBQUksUUFBUW5CLE1BQU1BLEtBQUssQ0FBQ21CLEtBQUssSUFBSSxTQUFTbEIsU0FBUyxzQkFDakUsOERBQUNrQzt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNDOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBO2dDQUFHRCxXQUFVOztvQ0FBb0M7b0NBQW9CcEMsTUFBTUEsS0FBSyxDQUFDa0MsT0FBTztvQ0FBQzs7Ozs7Ozs0QkFDekYzQix3QkFBVSw4REFBQ2lDO2dDQUFFSixXQUFVOzBDQUFtRDs7Ozs7MERBQ2pFLDhEQUFDeEMsdURBQWM7O2tEQUNiLDhEQUFDNEM7d0NBQUVKLFdBQVU7OzRDQUNhOzRDQUFFakM7Ozs7Ozs7a0RBRTVCLDhEQUFDbUM7d0NBQU9GLFdBQVU7d0NBQWFHLFNBQVMsSUFBS1IsYUFBYS9CLE1BQU1BLEtBQUssQ0FBQ1ksRUFBRSxFQUFFVDtrREFBUTs7Ozs7O2tEQUNsRiw4REFBQ21DO3dDQUFPRixXQUFVO3dDQUFrQkcsU0FBUzs0Q0FBTS9CLFdBQVc7NENBQ1ZFLFNBQVMsQ0FBQ0Q7d0NBQU07a0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUt0Riw4REFBQzZCO3dCQUFPRixXQUFVO3dCQUFtQkcsU0FBUyxJQUFJZCxhQUFhekIsTUFBTUEsS0FBSyxDQUFDWSxFQUFFO2tDQUFHOzs7OztrQ0FFeEUsNERBQTREOzs7Ozs7Ozs7Ozs7O0FBTXRGO0dBbkdNYjtLQUFBQTtBQXFHTiwrREFBZUEsRUFBRUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL0FJLnRzeD85M2Y0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBBSSA9IChlbWFpbDphbnkpID0+IHtcblxuICAgIGNvbnN0IFt0cmFzaCwgc2V0VHJhc2hdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbcmVwbHksIHNldFJlcGx5XSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtyZWFzb24sIHNldFJlYXNvbl0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtyZWdlbiwgc2V0UmVnZW5dID0gdXNlU3RhdGUodHJ1ZSlcblxuICAgIGNvbnN0IFJlcGx5ICA9IChpZDpudW1iZXIpID0+IHtcbiAgICAgICBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9jb250ZW50L3JlcGx5L1wiICsgaWQpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgKS50aGVuKGRhdGEgPT4gc2V0UmVwbHkoZGF0YS5yZXBseSlcbiAgICAgICAgKS50aGVuKCgpPT4gc2V0TG9hZGluZyhmYWxzZSkpIC8vZ2V0IHJlcGx5IGZyb20gY2hhdGdwdCBlbmRwb2ludFxuICAgIH1cblxuICAgIGNvbnN0IFJlYXNvbiA9IChjaGVjazpTdHJpbmcsIGNvbnRlbnQ6U3RyaW5nKSA9PiB7XG4gICAgICAgIGZldGNoKFwiaHR0cDovLzEyNy4wLjAxOjgwODAvd2h5L1wiICsgY2hlY2ssXG4gICAgICAgICB7bWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBcImNvbnRlbnRcIiA6IGNvbnRlbnRcbiAgICAgICAgIH0pXG4gICAgfSkudGhlbihyZWFzb24gPT4gcmVhc29uLmpzb24oKSkudGhlbihkYXRhID0+IHNldFJlYXNvbihkYXRhLnJlYXNvbikpXG4gICAgfVxuXG5cbiAgICBjb25zdCBkZWxldGVfZW1haWwgPSAoaWQ6bnVtYmVyKSA9PiB7XG4gICAgICAgIGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4MDgwL2VtYWlscy9cIiArIGlkLCB7bWV0aG9kOiAnREVMRVRFJ30pLnRoZW4oKCkgPT4gXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgRGVsZXRlZCFcIikgIC8vbG9nIHN1Y2Nlc3Mgb3Igc29tZXRoaW5nXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgYWxlcnQoXCJFbWFpbCBzZW50IHRvIHRyYXNoLlwiKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZV9kcmFmdCA9IChpZDpudW1iZXIsIGNvbnRlbnQ6U3RyaW5nKSA9PiB7XG4gICAgICAgIGZldGNoKFwiaHR0cDovLzEyNy4wLjAxOjgwODAvcmVwbHkvXCIgKyBpZCxcbiAgICAgICAgIHttZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHNlbmRlciA6IGVtYWlsLmVtYWlsLnJldHVybnRvLCBcbiAgICAgICAgICAgIHN1YmplY3QgOiAgZW1haWwuZW1haWwuc3ViamVjdCAgLFxuICAgICAgICAgICAgY29udGVudCA6IGNvbnRlbnRcbiAgICAgICAgIH0pXG4gICAgfSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZW1haWwuZW1haWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGVtYWlsLmVtYWlsLmNoZWNrID09IFwiWWVzXCIgfHwgdHJhc2ggPT0gZmFsc2UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgUmVwbHkoZW1haWwuZW1haWwuaWQpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVwbHkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbZW1haWwsIHJlZ2VuXSlcbi8vIGhhdmUgcGFydCB0aGF0IGdldHMgXCJjaGVja1wiXG4vLyBpZiBcImNoZWNrXCIgPT0gXCJOb1wiIHRoZW4gZGVsZXRlIGVtYWlsIChvZmZlciBvcHRpb24pXG4vLyBlbHNlLCBcbi8vIGdlbmVyYXRlIGFpIHJlcGx5IHdpdGggYXBpIGVuZHBvaW50XG4vLyBvcHRpb24gdG8gcmVnZW5lcmF0ZSwga2VlcCAoc2F2ZSkgYXMgZHJhZnRcblxuLy9jb25zaWRlcmluZzogZGlzcGxheSBqdXN0aWZpY2F0aW9uIGZvciBcImNoZWNrXCJcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtOTUwIHJvdW5kZWQtbGcgcHktNCBweC00IG14LTggbXktNCBzcGFjZS15LTQgbWF4LXctZnVsbCBoLTMvNFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXNtJz4gQUkgU3VnZ2VzdGlvbjwvaDE+XG5cbiAgICAgICAgeyBlbWFpbC5lbWFpbCA9PSBudWxsID8gPGgxIGNsYXNzTmFtZT1cInNrZWxldG9uIHctMS8zIGgtOFwiPiA8L2gxPjogXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMiBoLTMvNCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPiBTaG91bGQgeW91IHJlcGx5IHRvIHRoZSBlbWFpbD8gXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmFkZ2UgbXgtMicgb25DbGljaz17KCk9PlJlYXNvbihlbWFpbC5lbWFpbC5jaGVjaywgZW1haWwuZW1haWwuY29udGVudCl9PiB7ZW1haWwuZW1haWwuY2hlY2t9ICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHA+IHtyZWFzb259IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJteS0yIGJ0biBidG4tc21cIiBvbkNsaWNrPXsoKT0+IHNldFRyYXNoKGZhbHNlKX0+IE92ZXJyaWRlIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7ZW1haWwuZW1haWwuY2hlY2sgIT0gbnVsbCAmJiBlbWFpbC5lbWFpbC5jaGVjayA9PSBcIlllc1wiIHx8IHRyYXNoID09IGZhbHNlID9cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UteS00IG1heC13LTEvMic+XG4gICAgICAgICAgICAgICAgICAgIDxoMT4gQUkgR2VuZXJhdGVkIFJlcGx5IDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJweC0yIG91dGxpbmUgcm91bmRlZC1zbSBmb250LWJvbGRcIj4gU3ViamVjdDogUmVwbHkgdG8ge2VtYWlsLmVtYWlsLnN1YmplY3R9IDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPHAgY2xhc3NOYW1lPSdza2VsZXRvbiBweC0yIHRleHQtY2VudGVyIHB5LTEgdGV4dC1zbSBmb250LWJvbGQnPiBHZW5lcmF0aW5nIHJlcGx5Li4uIDwvcD4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm91dGxpbmUgcHgtMiByb3VuZGVkLXNtIG91dGxpbmUtMSBoLTEvMiBvdmVyZmxvdy15LWF1dG8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtd3JhcCB3aGl0ZXNwYWNlLXByZVwiPiB7cmVwbHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgb25DbGljaz17KCk9PiBjcmVhdGVfZHJhZnQoZW1haWwuZW1haWwuaWQsIHJlcGx5KX0+IFNhdmUgYXMgRHJhZnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIG14LTJcIiBvbkNsaWNrPXsoKT0+IHtzZXRMb2FkaW5nKHRydWUpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVnZW4oIXJlZ2VuKX19ID4gUmVnZW5lcmF0ZSA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOiA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1zbSB3LTEvNScgb25DbGljaz17KCk9PmRlbGV0ZV9lbWFpbChlbWFpbC5lbWFpbC5pZCl9PlxuICAgICAgICAgICAgICAgICAgICBEZWxldGUgRW1haWxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj4gLy9kZWxldGUgYnV0dG9uIChiZWNhdXNlIGVtYWlsIGlzIGVpdGhlciBzcGFtL25vbi1pbXBvcnRhbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFJIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFJIiwiZW1haWwiLCJ0cmFzaCIsInNldFRyYXNoIiwicmVwbHkiLCJzZXRSZXBseSIsInJlYXNvbiIsInNldFJlYXNvbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVnZW4iLCJzZXRSZWdlbiIsIlJlcGx5IiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiUmVhc29uIiwiY2hlY2siLCJjb250ZW50IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWxldGVfZW1haWwiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJyZWxvYWQiLCJhbGVydCIsImNyZWF0ZV9kcmFmdCIsInNlbmRlciIsInJldHVybnRvIiwic3ViamVjdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/AI.tsx\n"));

/***/ })

});