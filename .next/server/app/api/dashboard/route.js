"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/dashboard/route";
exports.ids = ["app/api/dashboard/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdashboard%2Froute&page=%2Fapi%2Fdashboard%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Froute.ts&appDir=C%3A%5CUsers%5Crober%5CDesktop%5CNew%20folder%5Caev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crober%5CDesktop%5CNew%20folder%5Caev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdashboard%2Froute&page=%2Fapi%2Fdashboard%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Froute.ts&appDir=C%3A%5CUsers%5Crober%5CDesktop%5CNew%20folder%5Caev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crober%5CDesktop%5CNew%20folder%5Caev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_rober_Desktop_New_folder_aev_app_api_dashboard_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/dashboard/route.ts */ \"(rsc)/./app/api/dashboard/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/dashboard/route\",\n        pathname: \"/api/dashboard\",\n        filename: \"route\",\n        bundlePath: \"app/api/dashboard/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\rober\\\\Desktop\\\\New folder\\\\aev\\\\app\\\\api\\\\dashboard\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_rober_Desktop_New_folder_aev_app_api_dashboard_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/dashboard/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZkYXNoYm9hcmQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmRhc2hib2FyZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmRhc2hib2FyZCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNyb2JlciU1Q0Rlc2t0b3AlNUNOZXclMjBmb2xkZXIlNUNhZXYlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3JvYmVyJTVDRGVza3RvcCU1Q05ldyUyMGZvbGRlciU1Q2FldiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDeUI7QUFDdEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZXYvP2IyZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccm9iZXJcXFxcRGVza3RvcFxcXFxOZXcgZm9sZGVyXFxcXGFldlxcXFxhcHBcXFxcYXBpXFxcXGRhc2hib2FyZFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZGFzaGJvYXJkL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZGFzaGJvYXJkXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9kYXNoYm9hcmQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxyb2JlclxcXFxEZXNrdG9wXFxcXE5ldyBmb2xkZXJcXFxcYWV2XFxcXGFwcFxcXFxhcGlcXFxcZGFzaGJvYXJkXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9kYXNoYm9hcmQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdashboard%2Froute&page=%2Fapi%2Fdashboard%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Froute.ts&appDir=C%3A%5CUsers%5Crober%5CDesktop%5CNew%20folder%5Caev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crober%5CDesktop%5CNew%20folder%5Caev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n// app/api/auth/[...nextauth]/route.ts\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient();\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                const user = await prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) {\n                    return null;\n                }\n                const isPasswordValid = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().compare(credentials.password, user.password);\n                if (!isPasswordValid) {\n                    return null;\n                }\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    password: user.password,\n                    role: user.role,\n                    createdAt: user.createdAt,\n                    updatedAt: user.updatedAt\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n            }\n            return session;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBRUw7QUFDaUM7QUFDZDtBQUN4QjtBQUU1QixNQUFNSSxTQUFTLElBQUlGLHdEQUFZQTtBQUV4QixNQUFNRyxjQUFjO0lBQ3pCQyxXQUFXO1FBQ1RMLDJFQUFtQkEsQ0FBQztZQUNsQk0sTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFPO2dCQUN0Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVO29CQUNqRCxPQUFPO2dCQUNUO2dCQUVBLE1BQU1FLE9BQU8sTUFBTVYsT0FBT1UsSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQ3hDQyxPQUFPO3dCQUFFUCxPQUFPRCxZQUFZQyxLQUFLO29CQUFDO2dCQUNwQztnQkFFQSxJQUFJLENBQUNLLE1BQU07b0JBQ1QsT0FBTztnQkFDVDtnQkFFQSxNQUFNRyxrQkFBa0IsTUFBTWQscURBQWMsQ0FBQ0ssWUFBWUksUUFBUSxFQUFFRSxLQUFLRixRQUFRO2dCQUVoRixJQUFJLENBQUNLLGlCQUFpQjtvQkFDcEIsT0FBTztnQkFDVDtnQkFFQSxPQUFPO29CQUFFRSxJQUFJTCxLQUFLSyxFQUFFO29CQUFFVixPQUFPSyxLQUFLTCxLQUFLO29CQUFFRixNQUFNTyxLQUFLUCxJQUFJO29CQUFFSyxVQUFVRSxLQUFLRixRQUFRO29CQUFFUSxNQUFNTixLQUFLTSxJQUFJO29CQUFFQyxXQUFXUCxLQUFLTyxTQUFTO29CQUFFQyxXQUFXUixLQUFLUSxTQUFTO2dCQUFDO1lBQzNKO1FBQ0Y7S0FDRDtJQUNEQyxXQUFXO1FBQ1QsTUFBTUMsU0FBUSxFQUFFQSxPQUFPLEVBQUVDLEtBQUssRUFBZ0M7WUFDNUQsSUFBSUQsUUFBUVYsSUFBSSxFQUFFO2dCQUNoQlUsUUFBUVYsSUFBSSxDQUFDSyxFQUFFLEdBQUdNLE1BQU1OLEVBQUU7WUFDNUI7WUFDQSxPQUFPSztRQUNUO1FBQ0EsTUFBTUUsS0FBSSxFQUFFRCxLQUFLLEVBQUVYLElBQUksRUFBNkI7WUFDbEQsSUFBSUEsTUFBTTtnQkFDUlcsTUFBTU4sRUFBRSxHQUFHTCxLQUFLSyxFQUFFO1lBQ3BCO1lBQ0EsT0FBT007UUFDVDtJQUNGO0lBQ0FFLE9BQU87UUFDTEMsUUFBUTtJQUNWO0FBQ0YsRUFBRTtBQUVGLE1BQU1DLFVBQVU3QixnREFBUUEsQ0FBQ0s7QUFFa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZXYvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz9jOGE0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXHJcblxyXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQsIFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwidGV4dFwiIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKTogUHJvbWlzZTxVc2VyIHwgbnVsbD4ge1xyXG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgd2hlcmU6IHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGlzUGFzc3dvcmRWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuXHJcbiAgICAgICAgaWYgKCFpc1Bhc3N3b3JkVmFsaWQpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgaWQ6IHVzZXIuaWQsIGVtYWlsOiB1c2VyLmVtYWlsLCBuYW1lOiB1c2VyLm5hbWUsIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLCByb2xlOiB1c2VyLnJvbGUsIGNyZWF0ZWRBdDogdXNlci5jcmVhdGVkQXQsIHVwZGF0ZWRBdDogdXNlci51cGRhdGVkQXQgfTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICBdLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH06IHsgc2Vzc2lvbjogYW55LCB0b2tlbjogYW55IH0pIHtcclxuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xyXG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH06IHsgdG9rZW46IGFueSwgdXNlcjogYW55IH0pIHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogJy9sb2dpbicsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcblxyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIlByaXNtYUNsaWVudCIsImJjcnlwdCIsInByaXNtYSIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpc1Bhc3N3b3JkVmFsaWQiLCJjb21wYXJlIiwiaWQiLCJyb2xlIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwiand0IiwicGFnZXMiLCJzaWduSW4iLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/dashboard/route.ts":
/*!************************************!*\
  !*** ./app/api/dashboard/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/[...nextauth]/route */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n// app/api/dashboard/route.ts\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nasync function GET() {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session || !session.user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const user = await prisma.user.findUnique({\n            where: {\n                email: session.user.email\n            }\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"User not found\"\n            }, {\n                status: 404\n            });\n        }\n        const stats = await prisma.$transaction([\n            prisma.project.count({\n                where: {\n                    users: {\n                        some: {\n                            id: user.id\n                        }\n                    }\n                }\n            }),\n            prisma.task.count({\n                where: {\n                    userId: user.id,\n                    status: \"IN_PROGRESS\"\n                }\n            }),\n            prisma.task.count({\n                where: {\n                    userId: user.id,\n                    status: \"COMPLETED\"\n                }\n            }),\n            prisma.user.count({\n                where: {\n                    projects: {\n                        some: {\n                            users: {\n                                some: {\n                                    id: user.id\n                                }\n                            }\n                        }\n                    }\n                }\n            })\n        ]);\n        const recentActivities = await prisma.activity.findMany({\n            where: {\n                OR: [\n                    {\n                        userId: user.id\n                    },\n                    {\n                        project: {\n                            users: {\n                                some: {\n                                    id: user.id\n                                }\n                            }\n                        }\n                    }\n                ]\n            },\n            orderBy: {\n                createdAt: \"desc\"\n            },\n            take: 5,\n            include: {\n                user: true,\n                project: true,\n                task: true\n            }\n        });\n        const tasks = await prisma.task.findMany({\n            where: {\n                userId: user.id\n            },\n            orderBy: {\n                createdAt: \"desc\"\n            },\n            take: 5\n        });\n        const projects = await prisma.project.findMany({\n            where: {\n                users: {\n                    some: {\n                        id: user.id\n                    }\n                }\n            },\n            orderBy: {\n                createdAt: \"desc\"\n            },\n            take: 5\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user,\n            stats: {\n                totalProjects: stats[0],\n                tasksInProgress: stats[1],\n                completedTasks: stats[2],\n                teamMembers: stats[3]\n            },\n            recentActivities,\n            tasks,\n            projects\n        });\n    } catch (error) {\n        console.error(\"Error in dashboard API:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUFDLEVBQUU7Z0JBQ3hCc0IsYUFBYXRCLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCO1lBQ0FVO1lBQ0FRO1lBQ0FUO1FBQ0Y7SUFFRixFQUFFLE9BQU9kLE9BQU87UUFDZDRCLFFBQVE1QixLQUFLLENBQUMsMkJBQTJCQTtRQUN6QyxPQUFPVCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBd0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDN0U7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Fldi8uL2FwcC9hcGkvZGFzaGJvYXJkL3JvdXRlLnRzP2ViNDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL2FwaS9kYXNoYm9hcmQvcm91dGUudHNcclxuXHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9uZXh0XCI7XHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4uL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG5cclxuICAgIGlmICghc2Vzc2lvbiB8fCAhc2Vzc2lvbi51c2VyKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVXNlciBub3QgZm91bmQnIH0sIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhdHMgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKFtcclxuICAgICAgcHJpc21hLnByb2plY3QuY291bnQoeyB3aGVyZTogeyB1c2VyczogeyBzb21lOiB7IGlkOiB1c2VyLmlkIH0gfSB9IH0pLFxyXG4gICAgICBwcmlzbWEudGFzay5jb3VudCh7IHdoZXJlOiB7IHVzZXJJZDogdXNlci5pZCwgc3RhdHVzOiAnSU5fUFJPR1JFU1MnIH0gfSksXHJcbiAgICAgIHByaXNtYS50YXNrLmNvdW50KHsgd2hlcmU6IHsgdXNlcklkOiB1c2VyLmlkLCBzdGF0dXM6ICdDT01QTEVURUQnIH0gfSksXHJcbiAgICAgIHByaXNtYS51c2VyLmNvdW50KHsgd2hlcmU6IHsgcHJvamVjdHM6IHsgc29tZTogeyB1c2VyczogeyBzb21lOiB7IGlkOiB1c2VyLmlkIH0gfSB9IH0gfSB9KSxcclxuICAgIF0pO1xyXG5cclxuICAgIGNvbnN0IHJlY2VudEFjdGl2aXRpZXMgPSBhd2FpdCBwcmlzbWEuYWN0aXZpdHkuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBPUjogW3sgdXNlcklkOiB1c2VyLmlkIH0sIHsgcHJvamVjdDogeyB1c2VyczogeyBzb21lOiB7IGlkOiB1c2VyLmlkIH0gfSB9IH1dIH0sXHJcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgICAgdGFrZTogNSxcclxuICAgICAgaW5jbHVkZTogeyB1c2VyOiB0cnVlLCBwcm9qZWN0OiB0cnVlLCB0YXNrOiB0cnVlIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0YXNrcyA9IGF3YWl0IHByaXNtYS50YXNrLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgdXNlcklkOiB1c2VyLmlkIH0sXHJcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgICAgdGFrZTogNSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzID0gYXdhaXQgcHJpc21hLnByb2plY3QuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyB1c2VyczogeyBzb21lOiB7IGlkOiB1c2VyLmlkIH0gfSB9LFxyXG4gICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2Rlc2MnIH0sXHJcbiAgICAgIHRha2U6IDUsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICB1c2VyLFxyXG4gICAgICBzdGF0czoge1xyXG4gICAgICAgIHRvdGFsUHJvamVjdHM6IHN0YXRzWzBdLFxyXG4gICAgICAgIHRhc2tzSW5Qcm9ncmVzczogc3RhdHNbMV0sXHJcbiAgICAgICAgY29tcGxldGVkVGFza3M6IHN0YXRzWzJdLFxyXG4gICAgICAgIHRlYW1NZW1iZXJzOiBzdGF0c1szXSxcclxuICAgICAgfSxcclxuICAgICAgcmVjZW50QWN0aXZpdGllcyxcclxuICAgICAgdGFza3MsXHJcbiAgICAgIHByb2plY3RzLFxyXG4gICAgfSk7XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZGFzaGJvYXJkIEFQSTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlByaXNtYUNsaWVudCIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsInByaXNtYSIsIkdFVCIsInNlc3Npb24iLCJ1c2VyIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZW1haWwiLCJzdGF0cyIsIiR0cmFuc2FjdGlvbiIsInByb2plY3QiLCJjb3VudCIsInVzZXJzIiwic29tZSIsImlkIiwidGFzayIsInVzZXJJZCIsInByb2plY3RzIiwicmVjZW50QWN0aXZpdGllcyIsImFjdGl2aXR5IiwiZmluZE1hbnkiLCJPUiIsIm9yZGVyQnkiLCJjcmVhdGVkQXQiLCJ0YWtlIiwiaW5jbHVkZSIsInRhc2tzIiwidG90YWxQcm9qZWN0cyIsInRhc2tzSW5Qcm9ncmVzcyIsImNvbXBsZXRlZFRhc2tzIiwidGVhbU1lbWJlcnMiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/dashboard/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdashboard%2Froute&page=%2Fapi%2Fdashboard%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Froute.ts&appDir=C%3A%5CUsers%5Crober%5CDesktop%5CNew%20folder%5Caev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crober%5CDesktop%5CNew%20folder%5Caev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();