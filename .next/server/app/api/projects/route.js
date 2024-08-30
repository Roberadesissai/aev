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
exports.id = "app/api/projects/route";
exports.ids = ["app/api/projects/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprojects%2Froute&page=%2Fapi%2Fprojects%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprojects%2Froute.ts&appDir=C%3A%5CUsers%5Crober%5CDesktop%5CNew%20folder%5Caev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crober%5CDesktop%5CNew%20folder%5Caev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprojects%2Froute&page=%2Fapi%2Fprojects%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprojects%2Froute.ts&appDir=C%3A%5CUsers%5Crober%5CDesktop%5CNew%20folder%5Caev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crober%5CDesktop%5CNew%20folder%5Caev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_rober_Desktop_New_folder_aev_app_api_projects_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/projects/route.ts */ \"(rsc)/./app/api/projects/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/projects/route\",\n        pathname: \"/api/projects\",\n        filename: \"route\",\n        bundlePath: \"app/api/projects/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\rober\\\\Desktop\\\\New folder\\\\aev\\\\app\\\\api\\\\projects\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_rober_Desktop_New_folder_aev_app_api_projects_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/projects/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9qZWN0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJvamVjdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcm9qZWN0cyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNyb2JlciU1Q0Rlc2t0b3AlNUNOZXclMjBmb2xkZXIlNUNhZXYlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3JvYmVyJTVDRGVza3RvcCU1Q05ldyUyMGZvbGRlciU1Q2FldiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDd0I7QUFDckc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZXYvPzFhODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccm9iZXJcXFxcRGVza3RvcFxcXFxOZXcgZm9sZGVyXFxcXGFldlxcXFxhcHBcXFxcYXBpXFxcXHByb2plY3RzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wcm9qZWN0cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Byb2plY3RzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9wcm9qZWN0cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHJvYmVyXFxcXERlc2t0b3BcXFxcTmV3IGZvbGRlclxcXFxhZXZcXFxcYXBwXFxcXGFwaVxcXFxwcm9qZWN0c1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcHJvamVjdHMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprojects%2Froute&page=%2Fapi%2Fprojects%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprojects%2Froute.ts&appDir=C%3A%5CUsers%5Crober%5CDesktop%5CNew%20folder%5Caev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crober%5CDesktop%5CNew%20folder%5Caev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n// app/api/auth/[...nextauth]/route.ts\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient();\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                const user = await prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) {\n                    return null;\n                }\n                const isPasswordValid = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().compare(credentials.password, user.password);\n                if (!isPasswordValid) {\n                    return null;\n                }\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    password: user.password,\n                    role: user.role,\n                    createdAt: user.createdAt,\n                    updatedAt: user.updatedAt\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n            }\n            return session;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBRUw7QUFDaUM7QUFDZDtBQUN4QjtBQUU1QixNQUFNSSxTQUFTLElBQUlGLHdEQUFZQTtBQUV4QixNQUFNRyxjQUFjO0lBQ3pCQyxXQUFXO1FBQ1RMLDJFQUFtQkEsQ0FBQztZQUNsQk0sTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFPO2dCQUN0Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVO29CQUNqRCxPQUFPO2dCQUNUO2dCQUVBLE1BQU1FLE9BQU8sTUFBTVYsT0FBT1UsSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQ3hDQyxPQUFPO3dCQUFFUCxPQUFPRCxZQUFZQyxLQUFLO29CQUFDO2dCQUNwQztnQkFFQSxJQUFJLENBQUNLLE1BQU07b0JBQ1QsT0FBTztnQkFDVDtnQkFFQSxNQUFNRyxrQkFBa0IsTUFBTWQscURBQWMsQ0FBQ0ssWUFBWUksUUFBUSxFQUFFRSxLQUFLRixRQUFRO2dCQUVoRixJQUFJLENBQUNLLGlCQUFpQjtvQkFDcEIsT0FBTztnQkFDVDtnQkFFQSxPQUFPO29CQUFFRSxJQUFJTCxLQUFLSyxFQUFFO29CQUFFVixPQUFPSyxLQUFLTCxLQUFLO29CQUFFRixNQUFNTyxLQUFLUCxJQUFJO29CQUFFSyxVQUFVRSxLQUFLRixRQUFRO29CQUFFUSxNQUFNTixLQUFLTSxJQUFJO29CQUFFQyxXQUFXUCxLQUFLTyxTQUFTO29CQUFFQyxXQUFXUixLQUFLUSxTQUFTO2dCQUFDO1lBQzNKO1FBQ0Y7S0FDRDtJQUNEQyxXQUFXO1FBQ1QsTUFBTUMsU0FBUSxFQUFFQSxPQUFPLEVBQUVDLEtBQUssRUFBZ0M7WUFDNUQsSUFBSUQsUUFBUVYsSUFBSSxFQUFFO2dCQUNoQlUsUUFBUVYsSUFBSSxDQUFDSyxFQUFFLEdBQUdNLE1BQU1OLEVBQUU7WUFDNUI7WUFDQSxPQUFPSztRQUNUO1FBQ0EsTUFBTUUsS0FBSSxFQUFFRCxLQUFLLEVBQUVYLElBQUksRUFBNkI7WUFDbEQsSUFBSUEsTUFBTTtnQkFDUlcsTUFBTU4sRUFBRSxHQUFHTCxLQUFLSyxFQUFFO1lBQ3BCO1lBQ0EsT0FBT007UUFDVDtJQUNGO0lBQ0FFLE9BQU87UUFDTEMsUUFBUTtJQUNWO0FBQ0YsRUFBRTtBQUVGLE1BQU1DLFVBQVU3QixnREFBUUEsQ0FBQ0s7QUFFa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZXYvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz9jOGE0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXHJcblxyXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQsIFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwidGV4dFwiIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKTogUHJvbWlzZTxVc2VyIHwgbnVsbD4ge1xyXG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgd2hlcmU6IHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGlzUGFzc3dvcmRWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuXHJcbiAgICAgICAgaWYgKCFpc1Bhc3N3b3JkVmFsaWQpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgaWQ6IHVzZXIuaWQsIGVtYWlsOiB1c2VyLmVtYWlsLCBuYW1lOiB1c2VyLm5hbWUsIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLCByb2xlOiB1c2VyLnJvbGUsIGNyZWF0ZWRBdDogdXNlci5jcmVhdGVkQXQsIHVwZGF0ZWRBdDogdXNlci51cGRhdGVkQXQgfTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICBdLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH06IHsgc2Vzc2lvbjogYW55LCB0b2tlbjogYW55IH0pIHtcclxuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xyXG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH06IHsgdG9rZW46IGFueSwgdXNlcjogYW55IH0pIHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogJy9sb2dpbicsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcblxyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIlByaXNtYUNsaWVudCIsImJjcnlwdCIsInByaXNtYSIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpc1Bhc3N3b3JkVmFsaWQiLCJjb21wYXJlIiwiaWQiLCJyb2xlIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwiand0IiwicGFnZXMiLCJzaWduSW4iLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/projects/route.ts":
/*!***********************************!*\
  !*** ./app/api/projects/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/[...nextauth]/route */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n// app/api/projects/route.ts\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nasync function GET() {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session || !session.user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const projects = await prisma.project.findMany({\n            include: {\n                assignedStudents: {\n                    select: {\n                        id: true,\n                        name: true,\n                        email: true\n                    }\n                }\n            },\n            orderBy: {\n                createdAt: \"desc\"\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(projects);\n    } catch (error) {\n        console.error(\"Error fetching projects:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session || !session.user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const { title, description, deadline } = await request.json();\n        const newProject = await prisma.project.create({\n            data: {\n                title,\n                description,\n                deadline: new Date(deadline),\n                status: \"pending\",\n                createdBy: {\n                    connect: {\n                        email: session.user.email\n                    }\n                }\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(newProject, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Error creating project:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2plY3RzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw0QkFBNEI7QUFDZTtBQUNZO0FBQ0w7QUFDUTtBQUUxRCxNQUFNSSxTQUFTLElBQUlILHdEQUFZQTtBQUV4QixlQUFlSTtJQUNwQixJQUFJO1FBQ0YsTUFBTUMsVUFBVSxNQUFNSixnRUFBZ0JBLENBQUNDLDZEQUFXQTtRQUVsRCxJQUFJLENBQUNHLFdBQVcsQ0FBQ0EsUUFBUUMsSUFBSSxFQUFFO1lBQzdCLE9BQU9QLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBZSxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDcEU7UUFFQSxNQUFNQyxXQUFXLE1BQU1QLE9BQU9RLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDO1lBQzdDQyxTQUFTO2dCQUNQQyxrQkFBa0I7b0JBQ2hCQyxRQUFRO3dCQUNOQyxJQUFJO3dCQUNKQyxNQUFNO3dCQUNOQyxPQUFPO29CQUVUO2dCQUNGO1lBQ0Y7WUFDQUMsU0FBUztnQkFDUEMsV0FBVztZQUNiO1FBQ0Y7UUFFQSxPQUFPckIscURBQVlBLENBQUNRLElBQUksQ0FBQ0c7SUFDM0IsRUFBRSxPQUFPRixPQUFPO1FBQ2RhLFFBQVFiLEtBQUssQ0FBQyw0QkFBNEJBO1FBQzFDLE9BQU9ULHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM3RTtBQUNGO0FBRU8sZUFBZWEsS0FBS0MsT0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU1sQixVQUFVLE1BQU1KLGdFQUFnQkEsQ0FBQ0MsNkRBQVdBO1FBRWxELElBQUksQ0FBQ0csV0FBVyxDQUFDQSxRQUFRQyxJQUFJLEVBQUU7WUFDN0IsT0FBT1AscURBQVlBLENBQUNRLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFlLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNwRTtRQUVBLE1BQU0sRUFBRWUsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1ILFFBQVFoQixJQUFJO1FBRTNELE1BQU1vQixhQUFhLE1BQU14QixPQUFPUSxPQUFPLENBQUNpQixNQUFNLENBQUM7WUFDN0NDLE1BQU07Z0JBQ0pMO2dCQUNBQztnQkFDQUMsVUFBVSxJQUFJSSxLQUFLSjtnQkFDbkJqQixRQUFRO2dCQUNSc0IsV0FBVztvQkFBRUMsU0FBUzt3QkFBRWQsT0FBT2IsUUFBUUMsSUFBSSxDQUFDWSxLQUFLO29CQUFDO2dCQUFFO1lBQ3REO1FBQ0Y7UUFFQSxPQUFPbkIscURBQVlBLENBQUNRLElBQUksQ0FBQ29CLFlBQVk7WUFBRWxCLFFBQVE7UUFBSTtJQUNyRCxFQUFFLE9BQU9ELE9BQU87UUFDZGEsUUFBUWIsS0FBSyxDQUFDLDJCQUEyQkE7UUFDekMsT0FBT1QscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzdFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZXYvLi9hcHAvYXBpL3Byb2plY3RzL3JvdXRlLnRzPzQ1NDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL2FwaS9wcm9qZWN0cy9yb3V0ZS50c1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCwgUHJvamVjdCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xyXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCIuLi9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuXHJcbiAgICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlcikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGF3YWl0IHByaXNtYS5wcm9qZWN0LmZpbmRNYW55KHtcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIGFzc2lnbmVkU3R1ZGVudHM6IHtcclxuICAgICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgICAgICAgZW1haWw6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIEFkZCBvdGhlciBmaWVsZHMgeW91IHdhbnQgdG8gaW5jbHVkZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb3JkZXJCeToge1xyXG4gICAgICAgIGNyZWF0ZWRBdDogJ2Rlc2MnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihwcm9qZWN0cyk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcm9qZWN0czpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuXHJcbiAgICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlcikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZGVhZGxpbmUgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBhd2FpdCBwcmlzbWEucHJvamVjdC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgZGVhZGxpbmU6IG5ldyBEYXRlKGRlYWRsaW5lKSxcclxuICAgICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcclxuICAgICAgICBjcmVhdGVkQnk6IHsgY29ubmVjdDogeyBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsIH0gfSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKG5ld1Byb2plY3QsIHsgc3RhdHVzOiAyMDEgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBwcm9qZWN0OlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiUHJpc21hQ2xpZW50IiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwicHJpc21hIiwiR0VUIiwic2Vzc2lvbiIsInVzZXIiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJwcm9qZWN0cyIsInByb2plY3QiLCJmaW5kTWFueSIsImluY2x1ZGUiLCJhc3NpZ25lZFN0dWRlbnRzIiwic2VsZWN0IiwiaWQiLCJuYW1lIiwiZW1haWwiLCJvcmRlckJ5IiwiY3JlYXRlZEF0IiwiY29uc29sZSIsIlBPU1QiLCJyZXF1ZXN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRlYWRsaW5lIiwibmV3UHJvamVjdCIsImNyZWF0ZSIsImRhdGEiLCJEYXRlIiwiY3JlYXRlZEJ5IiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/projects/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprojects%2Froute&page=%2Fapi%2Fprojects%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprojects%2Froute.ts&appDir=C%3A%5CUsers%5Crober%5CDesktop%5CNew%20folder%5Caev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crober%5CDesktop%5CNew%20folder%5Caev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();