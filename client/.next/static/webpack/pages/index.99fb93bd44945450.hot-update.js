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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst MailListItem = (param)=>{\n    let { sender, date, subject, content } = param;\n    const setMail = ()=>{\n    // pass data to MailViewContainer\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-12 max-w-48\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"flex gap-4 pace-x-4 outline outline-1 outline-white rounded-md px-1\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xs col-span-1\",\n                    children: [\n                        \" \",\n                        date,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xs col-span-1\",\n                    children: [\n                        \" \",\n                        sender,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xs col-span-1\",\n                    children: [\n                        \" \",\n                        subject,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs col-span-3\",\n                    children: [\n                        \" \",\n                        content,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n            lineNumber: 11,\n            columnNumber: 12\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_c = MailListItem;\nconst MailListContainer = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [ssender, setSsender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ddate, setDdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ssubject, setSsubject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ccontent, setCcontent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        async function get_emails() {\n            fetch(\"http://127.0.0.1:8080/emails\").then((response)=>response.json()).then((data)=>{\n                setLoading(false);\n                setData(data.emails);\n            });\n        }\n        get_emails();\n        console.log(data);\n        console.log(loading);\n        console.log(\"this line was reached\");\n    }, []);\n    //fix rem/width to fit all screensize\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4 bg-slate-950 rounded-lg py-4 px-8 left-0 w-1/2 mx-8 my-4 h-96\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \"Mail List\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 50,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-4 mx-4 px-2 py-2 flex-grow-0 h-5/6 overflow-y-auto w/5/6 overflow-x-clip\",\n                children: loading && !data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \" Loading... \"\n                }, void 0, false, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, undefined) //if loading\n                 : data.map((d)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: d.sender,\n                        date: d.dt,\n                        subject: d.subject,\n                        content: d.content\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined)) //done loading\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MailListContainer, \"IjjZtBtyzfF35PleIFj28qI3hrU=\");\n_c1 = MailListContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MailListContainer);\nvar _c, _c1;\n$RefreshReg$(_c, \"MailListItem\");\n$RefreshReg$(_c1, \"MailListContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL01haWxMaXN0Q29udGFpbmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBR2hELE1BQU1HLGVBQWU7UUFBQyxFQUFDQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQWdFO0lBQ2pILE1BQU1DLFVBQVU7SUFDZCxpQ0FBaUM7SUFDbkM7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWiw0RUFBQ0M7WUFBT0QsV0FBVTs7OEJBQ2pCLDhEQUFDRTtvQkFBR0YsV0FBVTs7d0JBQXFCO3dCQUFFTDt3QkFBSzs7Ozs7Ozs4QkFDMUMsOERBQUNRO29CQUFHSCxXQUFVOzt3QkFBcUI7d0JBQUVOO3dCQUFPOzs7Ozs7OzhCQUM1Qyw4REFBQ1E7b0JBQUdGLFdBQVU7O3dCQUFxQjt3QkFBRUo7d0JBQVE7Ozs7Ozs7OEJBQzdDLDhEQUFDUTtvQkFBRUosV0FBVTs7d0JBQXFCO3dCQUFFSDt3QkFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhEO0tBZk1KO0FBbUJOLE1BQU1ZLG9CQUFvQjs7SUFDeEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdmLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFDZ0IsU0FBU0MsV0FBVyxHQUFHakIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDa0IsU0FBU0MsV0FBVyxHQUFHbkIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDb0IsT0FBT0MsU0FBUyxHQUFHckIsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDc0IsVUFBVUMsWUFBWSxHQUFHdkIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDd0IsVUFBVUMsWUFBWSxHQUFHekIsK0NBQVFBLENBQUM7SUFFekNELGdEQUFTQSxDQUFDO1FBQ05rQixXQUFXO1FBQ1gsZUFBZVM7WUFDYkMsTUFBTSxnQ0FBZ0NDLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUFJRixJQUFJLENBQUNkLENBQUFBO2dCQUMzRUcsV0FBVztnQkFDWEYsUUFBUUQsS0FBS2lCLE1BQU07WUFBQztRQUV4QjtRQUNBTDtRQUNBTSxRQUFRQyxHQUFHLENBQUNuQjtRQUNaa0IsUUFBUUMsR0FBRyxDQUFDakI7UUFDWmdCLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEdBQUUsRUFBRTtJQUdKLHFDQUFxQztJQUV2QyxxQkFDRSw4REFBQzFCO1FBQUlDLFdBQVU7OzBCQUNmLDhEQUFDRztnQkFBR0gsV0FBVTswQkFBVTs7Ozs7OzBCQUNwQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2RRLFdBQVcsQ0FBQ0YscUJBQ1gsOERBQUNQOzhCQUFJOzs7Ozs4QkFBbUIsWUFBWTttQkFDcENPLEtBQUtvQixHQUFHLENBQUMsQ0FBQ0Msa0JBQ1YsOERBQUNsQzt3QkFBYUMsUUFBVWlDLEVBQUVqQyxNQUFNO3dCQUFFQyxNQUFRZ0MsRUFBRUMsRUFBRTt3QkFBRWhDLFNBQVcrQixFQUFFL0IsT0FBTzt3QkFBRUMsU0FBVzhCLEVBQUU5QixPQUFPOzs7OzttQ0FDekYsY0FBYzs7Ozs7Ozs7Ozs7O0FBS3pCO0dBdENNUTtNQUFBQTtBQXdDTiwrREFBZUEsaUJBQWlCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvTWFpbExpc3RDb250YWluZXIudHN4PzhhM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cblxuY29uc3QgTWFpbExpc3RJdGVtID0gKHtzZW5kZXIsIGRhdGUsIHN1YmplY3QsIGNvbnRlbnR9IDoge3NlbmRlcjpzdHJpbmcsIGRhdGU6c3RyaW5nLCBzdWJqZWN0OnN0cmluZywgY29udGVudDpzdHJpbmd9KSA9PiB7XG4gICAgY29uc3Qgc2V0TWFpbCA9ICgpID0+IHtcbiAgICAgIC8vIHBhc3MgZGF0YSB0byBNYWlsVmlld0NvbnRhaW5lclxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21pbi1oLTEyIG1heC13LTQ4Jz5cbiAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2ZsZXggZ2FwLTQgcGFjZS14LTQgb3V0bGluZSBvdXRsaW5lLTEgb3V0bGluZS13aGl0ZSByb3VuZGVkLW1kIHB4LTEnPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC14cyBjb2wtc3Bhbi0xJz4ge2RhdGV9IDwvaDI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXhzIGNvbC1zcGFuLTEnPiB7c2VuZGVyfSA8L2gxPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC14cyBjb2wtc3Bhbi0xJz4ge3N1YmplY3R9IDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMgY29sLXNwYW4tMyc+IHtjb250ZW50fSA8L3A+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cblxuY29uc3QgTWFpbExpc3RDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbc3NlbmRlciwgc2V0U3NlbmRlcl0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbZGRhdGUsIHNldERkYXRlXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtzc3ViamVjdCwgc2V0U3N1YmplY3RdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2Njb250ZW50LCBzZXRDY29udGVudF0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBhc3luYyBmdW5jdGlvbiBnZXRfZW1haWxzKCkge1xuICAgICAgICBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9lbWFpbHNcIikudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICBzZXREYXRhKGRhdGEuZW1haWxzKX0pXG5cbiAgICAgIH1cbiAgICAgIGdldF9lbWFpbHMoKVxuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIGNvbnNvbGUubG9nKGxvYWRpbmcpXG4gICAgICBjb25zb2xlLmxvZyhcInRoaXMgbGluZSB3YXMgcmVhY2hlZFwiKVxuICAgIH0sW10pXG4gICAgXG5cbiAgICAvL2ZpeCByZW0vd2lkdGggdG8gZml0IGFsbCBzY3JlZW5zaXplXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBiZy1zbGF0ZS05NTAgcm91bmRlZC1sZyBweS00IHB4LTggbGVmdC0wIHctMS8yIG14LTggbXktNCBoLTk2XCI+IFxuICAgIDxoMSBjbGFzc05hbWU9J3RleHQtc20nPk1haWwgTGlzdDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS00IG14LTQgcHgtMiBweS0yIGZsZXgtZ3Jvdy0wIGgtNS82IG92ZXJmbG93LXktYXV0byB3LzUvNiBvdmVyZmxvdy14LWNsaXAnPlxuICAgICAgICB7bG9hZGluZyAmJiAhZGF0YVxuICAgICAgICA/IDxkaXY+IExvYWRpbmcuLi4gPC9kaXY+IC8vaWYgbG9hZGluZ1xuICAgICAgICA6IGRhdGEubWFwKChkOiB7IHNlbmRlcjogc3RyaW5nOyBkdDogc3RyaW5nOyBzdWJqZWN0OiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9KSA9PiAoXG4gICAgICAgICAgPE1haWxMaXN0SXRlbSBzZW5kZXIgPSB7ZC5zZW5kZXJ9IGRhdGUgPSB7ZC5kdH0gc3ViamVjdCA9IHtkLnN1YmplY3R9IGNvbnRlbnQgPSB7ZC5jb250ZW50fSAvPlxuICAgICAgICApKSAvL2RvbmUgbG9hZGluZ1xuICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haWxMaXN0Q29udGFpbmVyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNYWlsTGlzdEl0ZW0iLCJzZW5kZXIiLCJkYXRlIiwic3ViamVjdCIsImNvbnRlbnQiLCJzZXRNYWlsIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwiaDIiLCJoMSIsInAiLCJNYWlsTGlzdENvbnRhaW5lciIsImRhdGEiLCJzZXREYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzc2VuZGVyIiwic2V0U3NlbmRlciIsImRkYXRlIiwic2V0RGRhdGUiLCJzc3ViamVjdCIsInNldFNzdWJqZWN0IiwiY2NvbnRlbnQiLCJzZXRDY29udGVudCIsImdldF9lbWFpbHMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlbWFpbHMiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiZCIsImR0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/MailListContainer.tsx\n"));

/***/ })

});