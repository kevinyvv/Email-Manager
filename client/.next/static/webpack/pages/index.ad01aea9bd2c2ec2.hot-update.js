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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst MailListItem = (param)=>{\n    let { sender, date, subject, content } = param;\n    const setMail = ()=>{\n    // pass data to MailViewContainer\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"flex space-x-4 outline outline-1 outline-white rounded-md px-1\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xs truncate\",\n                    children: [\n                        \" \",\n                        date,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xs\",\n                    children: [\n                        \" \",\n                        sender,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xs truncate\",\n                    children: [\n                        \" \",\n                        subject,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs truncate\",\n                    children: [\n                        \" \",\n                        content,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n            lineNumber: 11,\n            columnNumber: 12\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_c = MailListItem;\nconst MailListContainer = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [ssender, setSsender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ddate, setDdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ssubject, setSsubject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ccontent, setCcontent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        async function get_emails() {\n            fetch(\"http://127.0.0.1:8080/emails\").then((response)=>response.json()).then((data)=>{\n                setLoading(false);\n                setData(data.emails);\n            });\n        }\n        get_emails();\n        console.log(data);\n        console.log(loading);\n        console.log(\"this line was reached\");\n    }, []);\n    //add loading stuff and map tmrw\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4 bg-slate-950 rounded-lg py-4 px-8 left-0 w-1/2 mx-8 my-4 h-96\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \"Mail List\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 49,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-4 mx-4 px-2 py-2 flex-grow-0 h-5/6 overflow-y-auto\",\n                children: loading && !data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \" Loading... \"\n                }, void 0, false, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, undefined) //if loading\n                 : data.map((d)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: d.sender,\n                        date: d.dt,\n                        subject: d.subject,\n                        content: d.content\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined)) //done loading\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MailListContainer, \"IjjZtBtyzfF35PleIFj28qI3hrU=\");\n_c1 = MailListContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MailListContainer);\nvar _c, _c1;\n$RefreshReg$(_c, \"MailListItem\");\n$RefreshReg$(_c1, \"MailListContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL01haWxMaXN0Q29udGFpbmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBR2hELE1BQU1HLGVBQWU7UUFBQyxFQUFDQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQWdFO0lBQ2pILE1BQU1DLFVBQVU7SUFDZCxpQ0FBaUM7SUFDbkM7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWiw0RUFBQ0M7WUFBT0QsV0FBVTs7OEJBQ2pCLDhEQUFDRTtvQkFBR0YsV0FBVTs7d0JBQW1CO3dCQUFFTDt3QkFBSzs7Ozs7Ozs4QkFDeEMsOERBQUNRO29CQUFHSCxXQUFVOzt3QkFBVTt3QkFBRU47d0JBQU87Ozs7Ozs7OEJBQ2pDLDhEQUFDUTtvQkFBR0YsV0FBVTs7d0JBQW1CO3dCQUFFSjt3QkFBUTs7Ozs7Ozs4QkFDM0MsOERBQUNRO29CQUFFSixXQUFVOzt3QkFBbUI7d0JBQUVIO3dCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEQ7S0FmTUo7QUFtQk4sTUFBTVksb0JBQW9COztJQUN4QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2YsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNrQixTQUFTQyxXQUFXLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNvQixPQUFPQyxTQUFTLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNzQixVQUFVQyxZQUFZLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUN3QixVQUFVQyxZQUFZLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUV6Q0QsZ0RBQVNBLENBQUM7UUFDTmtCLFdBQVc7UUFDWCxlQUFlUztZQUNiQyxNQUFNLGdDQUFnQ0MsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQUlGLElBQUksQ0FBQ2QsQ0FBQUE7Z0JBQzNFRyxXQUFXO2dCQUNYRixRQUFRRCxLQUFLaUIsTUFBTTtZQUFDO1FBRXhCO1FBQ0FMO1FBQ0FNLFFBQVFDLEdBQUcsQ0FBQ25CO1FBQ1prQixRQUFRQyxHQUFHLENBQUNqQjtRQUNaZ0IsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsR0FBRSxFQUFFO0lBRUosZ0NBQWdDO0lBRWxDLHFCQUNFLDhEQUFDMUI7UUFBSUMsV0FBVTs7MEJBQ2YsOERBQUNHO2dCQUFHSCxXQUFVOzBCQUFVOzs7Ozs7MEJBQ3BCLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDZFEsV0FBVyxDQUFDRixxQkFDWCw4REFBQ1A7OEJBQUk7Ozs7OzhCQUFtQixZQUFZO21CQUNwQ08sS0FBS29CLEdBQUcsQ0FBQyxDQUFDQyxrQkFDViw4REFBQ2xDO3dCQUFhQyxRQUFVaUMsRUFBRWpDLE1BQU07d0JBQUVDLE1BQVFnQyxFQUFFQyxFQUFFO3dCQUFFaEMsU0FBVytCLEVBQUUvQixPQUFPO3dCQUFFQyxTQUFXOEIsRUFBRTlCLE9BQU87Ozs7O21DQUN6RixjQUFjOzs7Ozs7Ozs7Ozs7QUFLekI7R0FyQ01RO01BQUFBO0FBdUNOLCtEQUFlQSxpQkFBaUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9NYWlsTGlzdENvbnRhaW5lci50c3g/OGEzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuXG5jb25zdCBNYWlsTGlzdEl0ZW0gPSAoe3NlbmRlciwgZGF0ZSwgc3ViamVjdCwgY29udGVudH0gOiB7c2VuZGVyOnN0cmluZywgZGF0ZTpzdHJpbmcsIHN1YmplY3Q6c3RyaW5nLCBjb250ZW50OnN0cmluZ30pID0+IHtcbiAgICBjb25zdCBzZXRNYWlsID0gKCkgPT4ge1xuICAgICAgLy8gcGFzcyBkYXRhIHRvIE1haWxWaWV3Q29udGFpbmVyXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWluLWgtMTInPlxuICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTQgb3V0bGluZSBvdXRsaW5lLTEgb3V0bGluZS13aGl0ZSByb3VuZGVkLW1kIHB4LTEnPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC14cyB0cnVuY2F0ZSc+IHtkYXRlfSA8L2gyPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC14cyc+IHtzZW5kZXJ9IDwvaDE+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXhzIHRydW5jYXRlJz4ge3N1YmplY3R9IDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMgdHJ1bmNhdGUnPiB7Y29udGVudH0gPC9wPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5cbmNvbnN0IE1haWxMaXN0Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW3NzZW5kZXIsIHNldFNzZW5kZXJdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2RkYXRlLCBzZXREZGF0ZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbc3N1YmplY3QsIHNldFNzdWJqZWN0XSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtjY29udGVudCwgc2V0Q2NvbnRlbnRdID0gdXNlU3RhdGUoXCJcIilcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0X2VtYWlscygpIHtcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwODAvZW1haWxzXCIpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgc2V0RGF0YShkYXRhLmVtYWlscyl9KVxuXG4gICAgICB9XG4gICAgICBnZXRfZW1haWxzKClcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICBjb25zb2xlLmxvZyhsb2FkaW5nKVxuICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGxpbmUgd2FzIHJlYWNoZWRcIilcbiAgICB9LFtdKVxuXG4gICAgLy9hZGQgbG9hZGluZyBzdHVmZiBhbmQgbWFwIHRtcndcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBiZy1zbGF0ZS05NTAgcm91bmRlZC1sZyBweS00IHB4LTggbGVmdC0wIHctMS8yIG14LTggbXktNCBoLTk2XCI+IFxuICAgIDxoMSBjbGFzc05hbWU9J3RleHQtc20nPk1haWwgTGlzdDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS00IG14LTQgcHgtMiBweS0yIGZsZXgtZ3Jvdy0wIGgtNS82IG92ZXJmbG93LXktYXV0byc+XG4gICAgICAgIHtsb2FkaW5nICYmICFkYXRhXG4gICAgICAgID8gPGRpdj4gTG9hZGluZy4uLiA8L2Rpdj4gLy9pZiBsb2FkaW5nXG4gICAgICAgIDogZGF0YS5tYXAoKGQ6IHsgc2VuZGVyOiBzdHJpbmc7IGR0OiBzdHJpbmc7IHN1YmplY3Q6IHN0cmluZzsgY29udGVudDogc3RyaW5nIH0pID0+IChcbiAgICAgICAgICA8TWFpbExpc3RJdGVtIHNlbmRlciA9IHtkLnNlbmRlcn0gZGF0ZSA9IHtkLmR0fSBzdWJqZWN0ID0ge2Quc3ViamVjdH0gY29udGVudCA9IHtkLmNvbnRlbnR9IC8+XG4gICAgICAgICkpIC8vZG9uZSBsb2FkaW5nXG4gICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbExpc3RDb250YWluZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1haWxMaXN0SXRlbSIsInNlbmRlciIsImRhdGUiLCJzdWJqZWN0IiwiY29udGVudCIsInNldE1haWwiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJoMiIsImgxIiwicCIsIk1haWxMaXN0Q29udGFpbmVyIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNzZW5kZXIiLCJzZXRTc2VuZGVyIiwiZGRhdGUiLCJzZXREZGF0ZSIsInNzdWJqZWN0Iiwic2V0U3N1YmplY3QiLCJjY29udGVudCIsInNldENjb250ZW50IiwiZ2V0X2VtYWlscyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVtYWlscyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJkIiwiZHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/MailListContainer.tsx\n"));

/***/ })

});