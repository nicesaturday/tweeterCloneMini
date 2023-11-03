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
exports.id = "pages/api/users/create";
exports.ids = ["pages/api/users/create"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.db = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2RiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQU05QyxNQUFNQyxFQUFFLEdBQUcsSUFBSUQsd0RBQVksRUFBRTtBQUU3QixJQUFJRSxJQUFzQyxFQUFFQyxNQUFNLENBQUNGLEVBQUUsR0FBR0EsRUFBRSxDQUFDO0FBRTNELGlFQUFlQSxFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vc3JjL2xpYi9kYi50cz85ZTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBkYjogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIGdsb2JhbC5kYiA9IGRiO1xuXG5leHBvcnQgZGVmYXVsdCBkYjtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJkYiIsInByb2Nlc3MiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/db.ts\n");

/***/ }),

/***/ "(api)/./src/libs/server/withHandler.ts":
/*!****************************************!*\
  !*** ./src/libs/server/withHandler.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler(methods, handler) {\n    if (methods == \"POST\" || \"GET\") {\n        return async function(req, res) {\n            await handler(req, res);\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGlicy9zZXJ2ZXIvd2l0aEhhbmRsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVlLFNBQVNBLFdBQVcsQ0FBQ0MsT0FBZSxFQUFFQyxPQUFZLEVBQUU7SUFDakUsSUFBSUQsT0FBTyxJQUFJLE1BQU0sSUFBSSxLQUFLLEVBQUU7UUFDOUIsT0FBTyxlQUNMRSxHQUFtQixFQUNuQkMsR0FBb0IsRUFDTjtZQUNkLE1BQU1GLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztTQUN6QixDQUFDO0tBQ0g7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9zcmMvbGlicy9zZXJ2ZXIvd2l0aEhhbmRsZXIudHM/Y2JiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhIYW5kbGVyKG1ldGhvZHM6IFN0cmluZywgaGFuZGxlcjogYW55KSB7XHJcbiAgaWYgKG1ldGhvZHMgPT0gXCJQT1NUXCIgfHwgXCJHRVRcIikge1xyXG4gICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChcclxuICAgICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICAgICAgcmVzOiBOZXh0QXBpUmVzcG9uc2UsXHJcbiAgICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICBhd2FpdCBoYW5kbGVyKHJlcSwgcmVzKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ3aXRoSGFuZGxlciIsIm1ldGhvZHMiLCJoYW5kbGVyIiwicmVxIiwicmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/libs/server/withHandler.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/users/create.ts":
/*!***************************************!*\
  !*** ./src/pages/api/users/create.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ \"(api)/./src/lib/db.ts\");\n/* harmony import */ var _libs_server_withHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/server/withHandler */ \"(api)/./src/libs/server/withHandler.ts\");\n\n\nasync function handler(req, res) {\n    const { name , email  } = req.body;\n    const nameCheck = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            name\n        }\n    });\n    const emailCheck = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            email\n        }\n    });\n    if (nameCheck?.name == name) {\n        return res.status(401);\n    }\n    if (emailCheck?.email == email) {\n        return res.status(401);\n    }\n    await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n        data: {\n            name,\n            email\n        }\n    });\n    return res.status(200).json({\n        create: true\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_server_withHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"POST\", handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXJzL2NyZWF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDaUM7QUFDMkI7QUFFNUQsZUFBZUUsT0FBTyxDQUFDQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQ2hFLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO0lBQ2hDLE1BQU1DLFNBQVMsR0FBRyxNQUFNUiwrREFBa0IsQ0FBQztRQUN6Q1csS0FBSyxFQUFFO1lBQ0xOLElBQUk7U0FDTDtLQUNGLENBQUM7SUFFRixNQUFNTyxVQUFVLEdBQUcsTUFBTVosK0RBQWtCLENBQUM7UUFDMUNXLEtBQUssRUFBRTtZQUNMTCxLQUFLO1NBQ047S0FDRixDQUFDO0lBRUYsSUFBSUUsU0FBUyxFQUFFSCxJQUFJLElBQUlBLElBQUksRUFBRTtRQUMzQixPQUFPRCxHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN4QjtJQUVELElBQUlELFVBQVUsRUFBRU4sS0FBSyxJQUFJQSxLQUFLLEVBQUU7UUFDOUIsT0FBT0YsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDeEI7SUFFRCxNQUFNYiwyREFBYyxDQUFDO1FBQ25CZSxJQUFJLEVBQUU7WUFDSlYsSUFBSTtZQUNKQyxLQUFLO1NBQ047S0FDRixDQUFDLENBQUM7SUFFSCxPQUFPRixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0csSUFBSSxDQUFDO1FBQUVGLE1BQU0sRUFBRSxJQUFJO0tBQUUsQ0FBQyxDQUFDO0NBQy9DO0FBRUQsaUVBQWViLG9FQUFZLENBQUMsTUFBTSxFQUFFQyxPQUFPLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9zcmMvcGFnZXMvYXBpL3VzZXJzL2NyZWF0ZS50cz8xYzQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgZGIgZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xyXG5pbXBvcnQgd2lkdGhIYW5kbGVyIGZyb20gXCIuLi8uLi8uLi9saWJzL3NlcnZlci93aXRoSGFuZGxlclwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xyXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwgfSA9IHJlcS5ib2R5O1xyXG4gIGNvbnN0IG5hbWVDaGVjayA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICBuYW1lLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZW1haWxDaGVjayA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICBlbWFpbCxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmIChuYW1lQ2hlY2s/Lm5hbWUgPT0gbmFtZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKTtcclxuICB9XHJcblxyXG4gIGlmIChlbWFpbENoZWNrPy5lbWFpbCA9PSBlbWFpbCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKTtcclxuICB9XHJcblxyXG4gIGF3YWl0IGRiLnVzZXIuY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBjcmVhdGU6IHRydWUgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpZHRoSGFuZGxlcihcIlBPU1RcIiwgaGFuZGxlcik7XHJcbiJdLCJuYW1lcyI6WyJkYiIsIndpZHRoSGFuZGxlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuYW1lIiwiZW1haWwiLCJib2R5IiwibmFtZUNoZWNrIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImVtYWlsQ2hlY2siLCJzdGF0dXMiLCJjcmVhdGUiLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/users/create.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/users/create.ts"));
module.exports = __webpack_exports__;

})();