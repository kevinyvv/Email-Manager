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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst MailListItem = (param)=>{\n    let { sender, date, subject, content } = param;\n    const setMail = ()=>{\n    // pass data to MailViewContainer\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"flex gap- outline outline-1 outline-white rounded-md px-1\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xs\",\n                    children: [\n                        \" \",\n                        date,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xs \",\n                    children: [\n                        \" \",\n                        sender,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xs \",\n                    children: [\n                        \" \",\n                        subject,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs\",\n                    children: [\n                        \" \",\n                        content,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n            lineNumber: 11,\n            columnNumber: 12\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_c = MailListItem;\nconst MailListContainer = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [ssender, setSsender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ddate, setDdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ssubject, setSsubject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ccontent, setCcontent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        async function get_emails() {\n            fetch(\"http://127.0.0.1:8080/emails\").then((response)=>response.json()).then((data)=>{\n                setLoading(false);\n                setData(data.emails);\n            });\n        }\n        get_emails();\n        console.log(data);\n        console.log(loading);\n        console.log(\"this line was reached\");\n    }, []);\n    //fix rem/width to fit all screensize\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4 bg-slate-950 rounded-lg py-4 px-8 left-0 w-1/2 mx-8 my-4 h-96\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm\",\n                children: \"Mail List\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 50,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-4 mx-4 px-2 py-2 flex-grow-0 h-5/6 overflow-y-auto w-5/6 overflow-x-clip space-y-4\",\n                children: loading && !data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \" Loading... \"\n                }, void 0, false, {\n                    fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, undefined) //if loading\n                 : data.map((d)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailListItem, {\n                        sender: d.sender.substring(0, 10),\n                        date: d.dt.substring(0, 16),\n                        subject: d.subject.substring(0, 24),\n                        content: d.content.substring(0, 50)\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined)) //done loading\n            }, void 0, false, {\n                fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/nextjs-flask/client/pages/Components/MailListContainer.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MailListContainer, \"IjjZtBtyzfF35PleIFj28qI3hrU=\");\n_c1 = MailListContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MailListContainer);\nvar _c, _c1;\n$RefreshReg$(_c, \"MailListItem\");\n$RefreshReg$(_c1, \"MailListContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL01haWxMaXN0Q29udGFpbmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBR2hELE1BQU1HLGVBQWU7UUFBQyxFQUFDQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQWdFO0lBQ2pILE1BQU1DLFVBQVU7SUFDZCxpQ0FBaUM7SUFDbkM7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWiw0RUFBQ0M7WUFBT0QsV0FBVTs7OEJBQ2pCLDhEQUFDRTtvQkFBR0YsV0FBVTs7d0JBQVU7d0JBQUVMO3dCQUFLOzs7Ozs7OzhCQUMvQiw4REFBQ1E7b0JBQUdILFdBQVU7O3dCQUFXO3dCQUFFTjt3QkFBTzs7Ozs7Ozs4QkFDbEMsOERBQUNRO29CQUFHRixXQUFVOzt3QkFBVzt3QkFBRUo7d0JBQVE7Ozs7Ozs7OEJBQ25DLDhEQUFDUTtvQkFBRUosV0FBVTs7d0JBQVU7d0JBQUVIO3dCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0M7S0FmTUo7QUFtQk4sTUFBTVksb0JBQW9COztJQUN4QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2YsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNrQixTQUFTQyxXQUFXLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNvQixPQUFPQyxTQUFTLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNzQixVQUFVQyxZQUFZLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUN3QixVQUFVQyxZQUFZLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUV6Q0QsZ0RBQVNBLENBQUM7UUFDTmtCLFdBQVc7UUFDWCxlQUFlUztZQUNiQyxNQUFNLGdDQUFnQ0MsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQUlGLElBQUksQ0FBQ2QsQ0FBQUE7Z0JBQzNFRyxXQUFXO2dCQUNYRixRQUFRRCxLQUFLaUIsTUFBTTtZQUFDO1FBRXhCO1FBQ0FMO1FBQ0FNLFFBQVFDLEdBQUcsQ0FBQ25CO1FBQ1prQixRQUFRQyxHQUFHLENBQUNqQjtRQUNaZ0IsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsR0FBRSxFQUFFO0lBR0oscUNBQXFDO0lBRXZDLHFCQUNFLDhEQUFDMUI7UUFBSUMsV0FBVTs7MEJBQ2YsOERBQUNHO2dCQUFHSCxXQUFVOzBCQUFVOzs7Ozs7MEJBQ3BCLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDZFEsV0FBVyxDQUFDRixxQkFDWCw4REFBQ1A7OEJBQUk7Ozs7OzhCQUFtQixZQUFZO21CQUNwQ08sS0FBS29CLEdBQUcsQ0FBQyxDQUFDQyxrQkFDViw4REFBQ2xDO3dCQUFhQyxRQUFVaUMsRUFBRWpDLE1BQU0sQ0FBQ2tDLFNBQVMsQ0FBQyxHQUFFO3dCQUFLakMsTUFBUWdDLEVBQUVFLEVBQUUsQ0FBQ0QsU0FBUyxDQUFDLEdBQUc7d0JBQUtoQyxTQUFXK0IsRUFBRS9CLE9BQU8sQ0FBQ2dDLFNBQVMsQ0FBQyxHQUFFO3dCQUFLL0IsU0FBVzhCLEVBQUU5QixPQUFPLENBQUMrQixTQUFTLENBQUMsR0FBRTs7Ozs7bUNBQ3ZKLGNBQWM7Ozs7Ozs7Ozs7OztBQUt6QjtHQXRDTXZCO01BQUFBO0FBd0NOLCtEQUFlQSxpQkFBaUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9NYWlsTGlzdENvbnRhaW5lci50c3g/OGEzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuXG5jb25zdCBNYWlsTGlzdEl0ZW0gPSAoe3NlbmRlciwgZGF0ZSwgc3ViamVjdCwgY29udGVudH0gOiB7c2VuZGVyOnN0cmluZywgZGF0ZTpzdHJpbmcsIHN1YmplY3Q6c3RyaW5nLCBjb250ZW50OnN0cmluZ30pID0+IHtcbiAgICBjb25zdCBzZXRNYWlsID0gKCkgPT4ge1xuICAgICAgLy8gcGFzcyBkYXRhIHRvIE1haWxWaWV3Q29udGFpbmVyXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2ZsZXggZ2FwLSBvdXRsaW5lIG91dGxpbmUtMSBvdXRsaW5lLXdoaXRlIHJvdW5kZWQtbWQgcHgtMSc+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXhzJz4ge2RhdGV9IDwvaDI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXhzICc+IHtzZW5kZXJ9IDwvaDE+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXhzICc+IHtzdWJqZWN0fSA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzJz4ge2NvbnRlbnR9IDwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuXG5jb25zdCBNYWlsTGlzdENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtzc2VuZGVyLCBzZXRTc2VuZGVyXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtkZGF0ZSwgc2V0RGRhdGVdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW3NzdWJqZWN0LCBzZXRTc3ViamVjdF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbY2NvbnRlbnQsIHNldENjb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldF9lbWFpbHMoKSB7XG4gICAgICAgIGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4MDgwL2VtYWlsc1wiKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgIHNldERhdGEoZGF0YS5lbWFpbHMpfSlcblxuICAgICAgfVxuICAgICAgZ2V0X2VtYWlscygpXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgY29uc29sZS5sb2cobG9hZGluZylcbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBsaW5lIHdhcyByZWFjaGVkXCIpXG4gICAgfSxbXSlcbiAgICBcblxuICAgIC8vZml4IHJlbS93aWR0aCB0byBmaXQgYWxsIHNjcmVlbnNpemVcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IGJnLXNsYXRlLTk1MCByb3VuZGVkLWxnIHB5LTQgcHgtOCBsZWZ0LTAgdy0xLzIgbXgtOCBteS00IGgtOTZcIj4gXG4gICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1zbSc+TWFpbCBMaXN0PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LTQgbXgtNCBweC0yIHB5LTIgZmxleC1ncm93LTAgaC01LzYgb3ZlcmZsb3cteS1hdXRvIHctNS82IG92ZXJmbG93LXgtY2xpcCBzcGFjZS15LTQnPlxuICAgICAgICB7bG9hZGluZyAmJiAhZGF0YVxuICAgICAgICA/IDxkaXY+IExvYWRpbmcuLi4gPC9kaXY+IC8vaWYgbG9hZGluZ1xuICAgICAgICA6IGRhdGEubWFwKChkOiB7IHNlbmRlcjogc3RyaW5nOyBkdDogc3RyaW5nOyBzdWJqZWN0OiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9KSA9PiAoXG4gICAgICAgICAgPE1haWxMaXN0SXRlbSBzZW5kZXIgPSB7ZC5zZW5kZXIuc3Vic3RyaW5nKDAsMTApfSBkYXRlID0ge2QuZHQuc3Vic3RyaW5nKDAsIDE2KX0gc3ViamVjdCA9IHtkLnN1YmplY3Quc3Vic3RyaW5nKDAsMjQpfSBjb250ZW50ID0ge2QuY29udGVudC5zdWJzdHJpbmcoMCw1MCl9IC8+XG4gICAgICAgICkpIC8vZG9uZSBsb2FkaW5nXG4gICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbExpc3RDb250YWluZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1haWxMaXN0SXRlbSIsInNlbmRlciIsImRhdGUiLCJzdWJqZWN0IiwiY29udGVudCIsInNldE1haWwiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJoMiIsImgxIiwicCIsIk1haWxMaXN0Q29udGFpbmVyIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNzZW5kZXIiLCJzZXRTc2VuZGVyIiwiZGRhdGUiLCJzZXREZGF0ZSIsInNzdWJqZWN0Iiwic2V0U3N1YmplY3QiLCJjY29udGVudCIsInNldENjb250ZW50IiwiZ2V0X2VtYWlscyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVtYWlscyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJkIiwic3Vic3RyaW5nIiwiZHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/MailListContainer.tsx\n"));

/***/ })

});