"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/dashboard/page.tsx":
/*!********************************!*\
  !*** ./app/dashboard/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n// app/dashboard/page.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Dashboard() {\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [dashboardData, setDashboardData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (status === \"unauthenticated\") {\n            router.push(\"/login\");\n        } else if (status === \"authenticated\") {\n            fetchDashboardData();\n        }\n    }, [\n        status,\n        router\n    ]);\n    const fetchDashboardData = async ()=>{\n        try {\n            const response = await fetch(\"/api/dashboard\");\n            if (!response.ok) {\n                throw new Error(\"HTTP error! status: \".concat(response.status));\n            }\n            const data = await response.json();\n            setDashboardData(data);\n        } catch (e) {\n            console.error(\"Error fetching dashboard data:\", e);\n            setError(e.message);\n        }\n    };\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading session...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rober\\\\Desktop\\\\New folder\\\\aev\\\\app\\\\dashboard\\\\page.tsx\",\n            lineNumber: 39,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\rober\\\\Desktop\\\\New folder\\\\aev\\\\app\\\\dashboard\\\\page.tsx\",\n            lineNumber: 43,\n            columnNumber: 12\n        }, this);\n    }\n    if (!dashboardData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading dashboard data...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rober\\\\Desktop\\\\New folder\\\\aev\\\\app\\\\dashboard\\\\page.tsx\",\n            lineNumber: 47,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rober\\\\Desktop\\\\New folder\\\\aev\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Welcome, \",\n                    dashboardData.user.name,\n                    \"!\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rober\\\\Desktop\\\\New folder\\\\aev\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(dashboardData, null, 2)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rober\\\\Desktop\\\\New folder\\\\aev\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rober\\\\Desktop\\\\New folder\\\\aev\\\\app\\\\dashboard\\\\page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Dashboard, \"CqXLs2UGdGBc+SVzyUs+VdyPpdI=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlCQUF5Qjs7O0FBSW1CO0FBQ0M7QUFDRDtBQUc3QixTQUFTSTs7SUFDdEIsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUVDLE1BQU0sRUFBRSxHQUFHTCwyREFBVUE7SUFDNUMsTUFBTU0sU0FBU0wsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ00sZUFBZUMsaUJBQWlCLEdBQUdULCtDQUFRQSxDQUFvQztJQUN0RixNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFFbkNELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU8sV0FBVyxtQkFBbUI7WUFDaENDLE9BQU9LLElBQUksQ0FBQztRQUNkLE9BQU8sSUFBSU4sV0FBVyxpQkFBaUI7WUFDckNPO1FBQ0Y7SUFDRixHQUFHO1FBQUNQO1FBQVFDO0tBQU87SUFFbkIsTUFBTU0scUJBQXFCO1FBQ3pCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsSUFBSSxDQUFDRCxTQUFTRSxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTSx1QkFBdUMsT0FBaEJILFNBQVNSLE1BQU07WUFDeEQ7WUFDQSxNQUFNRixPQUFPLE1BQU1VLFNBQVNJLElBQUk7WUFDaENULGlCQUFpQkw7UUFDbkIsRUFBRSxPQUFPZSxHQUFHO1lBQ1ZDLFFBQVFWLEtBQUssQ0FBQyxrQ0FBa0NTO1lBQ2hEUixTQUFTUSxFQUFFRSxPQUFPO1FBQ3BCO0lBQ0Y7SUFFQSxJQUFJZixXQUFXLFdBQVc7UUFDeEIscUJBQU8sOERBQUNnQjtzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxJQUFJWixPQUFPO1FBQ1QscUJBQU8sOERBQUNZOztnQkFBSTtnQkFBUVo7Ozs7Ozs7SUFDdEI7SUFFQSxJQUFJLENBQUNGLGVBQWU7UUFDbEIscUJBQU8sOERBQUNjO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOztvQkFBRTtvQkFBVWhCLGNBQWNpQixJQUFJLENBQUNDLElBQUk7b0JBQUM7Ozs7Ozs7MEJBQ3JDLDhEQUFDQzswQkFBS0MsS0FBS0MsU0FBUyxDQUFDckIsZUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7QUFHaEQ7R0EvQ3dCTDs7UUFDWUYsdURBQVVBO1FBQzdCQyxzREFBU0E7OztLQUZGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4P2QxMjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL2Rhc2hib2FyZC9wYWdlLnRzeFxyXG5cclxuJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IFNpZGVtZW51IH0gZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlbWVudSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZGFzaGJvYXJkRGF0YSwgc2V0RGFzaGJvYXJkRGF0YV0gPSB1c2VTdGF0ZTx7IHVzZXI6IHsgbmFtZTogc3RyaW5nIH0gfSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc3RhdHVzID09PSAndW5hdXRoZW50aWNhdGVkJykge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2F1dGhlbnRpY2F0ZWQnKSB7XHJcbiAgICAgIGZldGNoRGFzaGJvYXJkRGF0YSgpO1xyXG4gICAgfVxyXG4gIH0sIFtzdGF0dXMsIHJvdXRlcl0pO1xyXG5cclxuICBjb25zdCBmZXRjaERhc2hib2FyZERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2Rhc2hib2FyZCcpO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldERhc2hib2FyZERhdGEoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXNoYm9hcmQgZGF0YTpcIiwgZSk7XHJcbiAgICAgIHNldEVycm9yKGUubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKHN0YXR1cyA9PT0gJ2xvYWRpbmcnKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIHNlc3Npb24uLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3J9PC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgaWYgKCFkYXNoYm9hcmREYXRhKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIGRhc2hib2FyZCBkYXRhLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5EYXNoYm9hcmQ8L2gxPlxyXG4gICAgICA8cD5XZWxjb21lLCB7ZGFzaGJvYXJkRGF0YS51c2VyLm5hbWV9ITwvcD5cclxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoZGFzaGJvYXJkRGF0YSwgbnVsbCwgMil9PC9wcmU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIkRhc2hib2FyZCIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwicm91dGVyIiwiZGFzaGJvYXJkRGF0YSIsInNldERhc2hib2FyZERhdGEiLCJlcnJvciIsInNldEVycm9yIiwicHVzaCIsImZldGNoRGFzaGJvYXJkRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbiIsImUiLCJjb25zb2xlIiwibWVzc2FnZSIsImRpdiIsImgxIiwicCIsInVzZXIiLCJuYW1lIiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.tsx\n"));

/***/ })

});