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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AI = (email)=>{\n    _s();\n    const [reply, setReply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function YorN(reply) {\n        if (reply == \"Yes\") {\n            setReply(true);\n        } else {\n            setReply(false);\n        }\n    }\n    const delete_email = (id)=>{\n        fetch(\"http://127.0.0.1:8080/emails/\" + id, {\n            method: \"DELTE\"\n        }).then(()=>{});\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(email);\n    });\n    // have part that gets \"check\"\n    // if \"check\" == \"No\" then delete email (offer option)\n    // else, \n    // generate ai reply with api endpoint\n    // option to regenerate, keep (save) as draft\n    //considering: display justification for \"check\"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-950 rounded-lg py-4 px-4 mx-8 my-4 space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \" AI Suggestion\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined),\n            email.email == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"skeleton w-1/3 h-8\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 42,\n                columnNumber: 33\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \" Should you reply to the email? \",\n                            email.email.check,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \" Reason: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            email.email != null && email.email.check != null && reply == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \" AI Generated Reply \"\n                }, void 0, false, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-sm\",\n                children: \"Delete Email\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n                lineNumber: 56,\n                columnNumber: 15\n            }, undefined) //delete button (because email is either spam/non-important)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/AI.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AI, \"8IBFg4uOoN6BcGd+W7GhCc1ZkrQ=\");\n_c = AI;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AI);\nvar _c;\n$RefreshReg$(_c, \"AI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL0FJLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBRWhELE1BQU1HLEtBQUssQ0FBQ0M7O0lBRVIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBRW5DLFNBQVNNLEtBQU1GLEtBQVk7UUFDdkIsSUFBSUEsU0FBUyxPQUFPO1lBQ2hCQyxTQUFTO1FBQ2IsT0FDSztZQUNEQSxTQUFTO1FBQ2I7SUFDSjtJQUdBLE1BQU1FLGVBQWUsQ0FBQ0M7UUFDbEJDLE1BQU0sa0NBQWtDRCxJQUFJO1lBQUNFLFFBQVE7UUFBTyxHQUFHQyxJQUFJLENBQUMsS0FHcEU7SUFDSjtJQUdBVixnREFBU0EsQ0FBQztRQUNOVyxRQUFRQyxHQUFHLENBQUNWO0lBQ2hCO0lBR0osOEJBQThCO0lBQzlCLHNEQUFzRDtJQUN0RCxTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLDZDQUE2QztJQUU3QyxnREFBZ0Q7SUFFOUMscUJBQ0UsOERBQUNXO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBVTs7Ozs7O1lBRXRCWixNQUFNQSxLQUFLLElBQUkscUJBQU8sOERBQUNhO2dCQUFHRCxXQUFVOzBCQUFxQjs7Ozs7MENBQ3ZELDhEQUFDRDs7a0NBQ0csOERBQUNFOzs0QkFBRzs0QkFBaUNiLE1BQU1BLEtBQUssQ0FBQ2MsS0FBSzs0QkFBQzs7Ozs7OztrQ0FDdkQsOERBQUNEO2tDQUFHOzs7Ozs7Ozs7Ozs7WUFHVmIsTUFBTUEsS0FBSyxJQUFJLFFBQVFBLE1BQU1BLEtBQUssQ0FBQ2MsS0FBSyxJQUFJLFFBQVFiLFNBQVMscUJBRTNELDhEQUFDVTswQkFDRyw0RUFBQ0U7OEJBQUc7Ozs7Ozs7Ozs7MENBS04sOERBQUNFO2dCQUFPSCxXQUFVOzBCQUFhOzs7OzswQkFFdkIsNERBQTREOzs7Ozs7O0FBSWxGO0dBM0RNYjtLQUFBQTtBQTZETiwrREFBZUEsRUFBRUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL0FJLnRzeD85M2Y0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBBSSA9IChlbWFpbDphbnkpID0+IHtcblxuICAgIGNvbnN0IFtyZXBseSwgc2V0UmVwbHldID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBmdW5jdGlvbiBZb3JOIChyZXBseTpTdHJpbmcpIHtcbiAgICAgICAgaWYgKHJlcGx5ID09IFwiWWVzXCIpIHtcbiAgICAgICAgICAgIHNldFJlcGx5KHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRSZXBseShmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgZGVsZXRlX2VtYWlsID0gKGlkOm51bWJlcikgPT4ge1xuICAgICAgICBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9lbWFpbHMvXCIgKyBpZCwge21ldGhvZDogJ0RFTFRFJ30pLnRoZW4oKCkgPT4gXG4gICAgICAgIHtcblxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZW1haWwpXG4gICAgfSlcblxuXG4vLyBoYXZlIHBhcnQgdGhhdCBnZXRzIFwiY2hlY2tcIlxuLy8gaWYgXCJjaGVja1wiID09IFwiTm9cIiB0aGVuIGRlbGV0ZSBlbWFpbCAob2ZmZXIgb3B0aW9uKVxuLy8gZWxzZSwgXG4vLyBnZW5lcmF0ZSBhaSByZXBseSB3aXRoIGFwaSBlbmRwb2ludFxuLy8gb3B0aW9uIHRvIHJlZ2VuZXJhdGUsIGtlZXAgKHNhdmUpIGFzIGRyYWZ0XG5cbi8vY29uc2lkZXJpbmc6IGRpc3BsYXkganVzdGlmaWNhdGlvbiBmb3IgXCJjaGVja1wiXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTk1MCByb3VuZGVkLWxnIHB5LTQgcHgtNCBteC04IG15LTQgc3BhY2UteS00XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtc20nPiBBSSBTdWdnZXN0aW9uPC9oMT5cblxuICAgICAgICB7IGVtYWlsLmVtYWlsID09IG51bGwgPyA8aDEgY2xhc3NOYW1lPVwic2tlbGV0b24gdy0xLzMgaC04XCI+IDwvaDE+OiBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPiBTaG91bGQgeW91IHJlcGx5IHRvIHRoZSBlbWFpbD8ge2VtYWlsLmVtYWlsLmNoZWNrfSA8L2gxPlxuICAgICAgICAgICAgICAgIDxoMT4gUmVhc29uOiA8L2gxPiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHsgZW1haWwuZW1haWwgIT0gbnVsbCAmJiBlbWFpbC5lbWFpbC5jaGVjayAhPSBudWxsICYmIHJlcGx5ID09IHRydWUgPyBcblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+IEFJIEdlbmVyYXRlZCBSZXBseSA8L2gxPlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA6IDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXNtJz5cbiAgICAgICAgICAgICAgICBEZWxldGUgRW1haWxcbiAgICAgICAgICAgIDwvYnV0dG9uPiAvL2RlbGV0ZSBidXR0b24gKGJlY2F1c2UgZW1haWwgaXMgZWl0aGVyIHNwYW0vbm9uLWltcG9ydGFudClcbiAgICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFJIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBSSIsImVtYWlsIiwicmVwbHkiLCJzZXRSZXBseSIsIllvck4iLCJkZWxldGVfZW1haWwiLCJpZCIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImNoZWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/AI.tsx\n"));

/***/ })

});