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

/***/ "./pages/Components/MailListContainer.tsx":
/*!************************************************!*\
  !*** ./pages/Components/MailListContainer.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst MailListItem = (param)=>{\n    let { sender, date, subject, content } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-1/2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full grid grid-cols-4 gap-12 outline outline-1 outline-white rounded-md px-1 py-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xs truncate\",\n                    children: [\n                        \" \",\n                        date,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xs truncate\",\n                    children: [\n                        \" \",\n                        sender,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xs truncate\",\n                    children: [\n                        \" \",\n                        subject,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs truncate\",\n                    children: [\n                        \" \",\n                        content,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n            lineNumber: 8,\n            columnNumber: 12\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = MailListItem;\nconst MailListContainer = (props)=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [ssender, setSsender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ddate, setDdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ssubject, setSsubject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ccontent, setCcontent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function get_emails() {\n        fetch(\"http://127.0.0.1:8080/emails\", {\n            method: \"POST\"\n        }).then(()=>fetch(\"http://127.0.0.1:8080/emails\").then((response)=>response.json()).then((data)=>{\n                setLoading(false);\n                setData(data.emails);\n            }));\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        get_emails();\n    /*\n      console.log(data)\n      console.log(loading)\n      console.log(\"this line was reached\")\n      */ }, []);\n    //fix rem/width to fit all screensize\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4 bg-slate-950 rounded-lg py-4 px-8 left-0 w-1/2 mx-8 my-4 h-96\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \" Mail List \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 51,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-sm\",\n                onClick: ()=>get_emails(),\n                children: \" Refresh \"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 52,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-4 mx-4 px-2 py-2 h-4/6 overflow-y-auto w-full space-y-4 overflow-x-clip\",\n                children: loading && !data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \" Loading... \"\n                }, void 0, false, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, undefined) //if loading\n                 : data.map((d)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>props.handleCallback(d),\n                        className: \"active:scale-95\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                            sender: d.sender,\n                            date: d.dt,\n                            subject: d.subject,\n                            content: d.content\n                        }, void 0, false, {\n                            fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined)\n                    }, d.id, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined)) //done loading\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MailListContainer, \"IjjZtBtyzfF35PleIFj28qI3hrU=\");\n_c1 = MailListContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MailListContainer);\nvar _c, _c1;\n$RefreshReg$(_c, \"MailListItem\");\n$RefreshReg$(_c1, \"MailListContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL01haWxMaXN0Q29udGFpbmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBR2hELE1BQU1HLGVBQWU7UUFBQyxFQUFDQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQWdFO0lBRWpILHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFFZCw4REFBQ0M7b0JBQUdELFdBQVU7O3dCQUFtQjt3QkFBRUo7d0JBQUs7Ozs7Ozs7OEJBQ3hDLDhEQUFDTTtvQkFBR0YsV0FBVTs7d0JBQW1CO3dCQUFFTDt3QkFBTzs7Ozs7Ozs4QkFDMUMsOERBQUNNO29CQUFHRCxXQUFVOzt3QkFBbUI7d0JBQUVIO3dCQUFROzs7Ozs7OzhCQUMzQyw4REFBQ007b0JBQUVILFdBQVU7O3dCQUFtQjt3QkFBRUY7d0JBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl0RDtLQWJNSjtBQWlCTixNQUFNVSxvQkFBb0IsQ0FBQ0M7O0lBQ3pCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLE1BQU0sQ0FBQ2UsU0FBU0MsV0FBVyxHQUFHaEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDaUIsU0FBU0MsV0FBVyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDbUIsT0FBT0MsU0FBUyxHQUFHcEIsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDcUIsVUFBVUMsWUFBWSxHQUFHdEIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDdUIsVUFBVUMsWUFBWSxHQUFHeEIsK0NBQVFBLENBQUM7SUFHekMsZUFBZXlCO1FBQ2JDLE1BQU0sZ0NBQWdDO1lBQUNDLFFBQVE7UUFBTSxHQUFHQyxJQUFJLENBQUMsSUFDN0RGLE1BQU0sZ0NBQWdDRSxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFBSUYsSUFBSSxDQUFDZixDQUFBQTtnQkFDM0VHLFdBQVc7Z0JBQ1hGLFFBQVFELEtBQUtrQixNQUFNO1lBQUM7SUFDeEI7SUFFQWhDLGdEQUFTQSxDQUFDO1FBQ05pQixXQUFXO1FBQ1hTO0lBQ0E7Ozs7TUFJQSxHQUNGLEdBQUUsRUFBRTtJQUVKLHFDQUFxQztJQUV2QyxxQkFDRSw4REFBQ25CO1FBQUlDLFdBQVU7OzBCQUNmLDhEQUFDRTtnQkFBR0YsV0FBVTswQkFBVTs7Ozs7OzBCQUN4Qiw4REFBQ3lCO2dCQUFPekIsV0FBVTtnQkFBYTBCLFNBQVMsSUFBS1I7MEJBQWM7Ozs7OzswQkFDdkQsOERBQUNuQjtnQkFBSUMsV0FBVTswQkFDZFEsV0FBVyxDQUFDRixxQkFDWCw4REFBQ1A7OEJBQUk7Ozs7OzhCQUFtQixZQUFZO21CQUNwQ08sS0FBS3FCLEdBQUcsQ0FBQyxDQUFDQyxrQkFDViw4REFBQ0g7d0JBQU9DLFNBQVMsSUFBTXJCLE1BQU13QixjQUFjLENBQUNEO3dCQUFnQjVCLFdBQVU7a0NBQ3BFLDRFQUFDTjs0QkFBYUMsUUFBVWlDLEVBQUVqQyxNQUFNOzRCQUFFQyxNQUFRZ0MsRUFBRUUsRUFBRTs0QkFBRWpDLFNBQVcrQixFQUFFL0IsT0FBTzs0QkFBRUMsU0FBVzhCLEVBQUU5QixPQUFPOzs7Ozs7dUJBRHRDOEIsRUFBRUcsRUFBRTs7OzttQ0FHekQsY0FBYzs7Ozs7Ozs7Ozs7O0FBS3pCO0dBNUNNM0I7TUFBQUE7QUE4Q04sK0RBQWVBLGlCQUFpQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL01haWxMaXN0Q29udGFpbmVyLnRzeD84YTNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5cbmNvbnN0IE1haWxMaXN0SXRlbSA9ICh7c2VuZGVyLCBkYXRlLCBzdWJqZWN0LCBjb250ZW50fSA6IHtzZW5kZXI6c3RyaW5nLCBkYXRlOnN0cmluZywgc3ViamVjdDpzdHJpbmcsIGNvbnRlbnQ6c3RyaW5nfSkgPT4ge1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWF4LXctMS8yJz5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBncmlkIGdyaWQtY29scy00IGdhcC0xMiBvdXRsaW5lIG91dGxpbmUtMSBvdXRsaW5lLXdoaXRlIHJvdW5kZWQtbWQgcHgtMSBweS0yJ1xuICAgICAgICAgICA+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXhzIHRydW5jYXRlJz4ge2RhdGV9IDwvaDI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXhzIHRydW5jYXRlJz4ge3NlbmRlcn0gPC9oMT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQteHMgdHJ1bmNhdGUnPiB7c3ViamVjdH0gPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14cyB0cnVuY2F0ZSc+IHtjb250ZW50fSA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cblxuY29uc3QgTWFpbExpc3RDb250YWluZXIgPSAocHJvcHM6YW55KSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbc3NlbmRlciwgc2V0U3NlbmRlcl0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbZGRhdGUsIHNldERkYXRlXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtzc3ViamVjdCwgc2V0U3N1YmplY3RdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2Njb250ZW50LCBzZXRDY29udGVudF0gPSB1c2VTdGF0ZShcIlwiKVxuXG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0X2VtYWlscygpIHtcbiAgICBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9lbWFpbHNcIiwge21ldGhvZDogJ1BPU1QnfSkudGhlbigoKSA9PiBcbiAgICBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9lbWFpbHNcIikudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgc2V0RGF0YShkYXRhLmVtYWlscyl9KSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBnZXRfZW1haWxzKClcbiAgICAgIC8qXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgY29uc29sZS5sb2cobG9hZGluZylcbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBsaW5lIHdhcyByZWFjaGVkXCIpXG4gICAgICAqL1xuICAgIH0sW10pXG5cbiAgICAvL2ZpeCByZW0vd2lkdGggdG8gZml0IGFsbCBzY3JlZW5zaXplXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBiZy1zbGF0ZS05NTAgcm91bmRlZC1sZyBweS00IHB4LTggbGVmdC0wIHctMS8yIG14LTggbXktNCBoLTk2XCI+IFxuICAgIDxoMSBjbGFzc05hbWU9J3RleHQtc20nPiBNYWlsIExpc3QgPC9oMT5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1zbScgb25DbGljaz17KCk9PiBnZXRfZW1haWxzKCl9PiBSZWZyZXNoIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktNCBteC00IHB4LTIgcHktMiBoLTQvNiBvdmVyZmxvdy15LWF1dG8gdy1mdWxsIHNwYWNlLXktNCBvdmVyZmxvdy14LWNsaXAnPlxuICAgICAgICB7bG9hZGluZyAmJiAhZGF0YVxuICAgICAgICA/IDxkaXY+IExvYWRpbmcuLi4gPC9kaXY+IC8vaWYgbG9hZGluZ1xuICAgICAgICA6IGRhdGEubWFwKChkOiB7IHNlbmRlcjogc3RyaW5nOyBkdDogc3RyaW5nOyBzdWJqZWN0OiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZzsgaWQ6bnVtYmVyfSkgPT4gKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlQ2FsbGJhY2soZCl9ICBrZXk9e2QuaWR9IGNsYXNzTmFtZT0nYWN0aXZlOnNjYWxlLTk1Jz5cbiAgICAgICAgICAgIDxNYWlsTGlzdEl0ZW0gc2VuZGVyID0ge2Quc2VuZGVyfSBkYXRlID0ge2QuZHR9IHN1YmplY3QgPSB7ZC5zdWJqZWN0fSBjb250ZW50ID0ge2QuY29udGVudH0vPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApKSAvL2RvbmUgbG9hZGluZ1xuICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haWxMaXN0Q29udGFpbmVyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNYWlsTGlzdEl0ZW0iLCJzZW5kZXIiLCJkYXRlIiwic3ViamVjdCIsImNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImgxIiwicCIsIk1haWxMaXN0Q29udGFpbmVyIiwicHJvcHMiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3NlbmRlciIsInNldFNzZW5kZXIiLCJkZGF0ZSIsInNldERkYXRlIiwic3N1YmplY3QiLCJzZXRTc3ViamVjdCIsImNjb250ZW50Iiwic2V0Q2NvbnRlbnQiLCJnZXRfZW1haWxzIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZW1haWxzIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsImQiLCJoYW5kbGVDYWxsYmFjayIsImR0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/MailListContainer.tsx\n"));

/***/ })

});