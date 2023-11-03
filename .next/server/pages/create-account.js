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
exports.id = "pages/create-account";
exports.ids = ["pages/create-account"];
exports.modules = {

/***/ "./src/libs/client/useMutation.ts":
/*!****************************************!*\
  !*** ./src/libs/client/useMutation.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useMutation)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useMutation(url) {\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    function enter(data1) {\n        fetch(url, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data1)\n        }).then((res)=>res.json()\n        ).then((data)=>setState(data)\n        );\n    }\n    return [\n        enter,\n        state\n    ];\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9jbGllbnQvdXNlTXV0YXRpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBSWxCLFNBQVNDLFdBQVcsQ0FBQ0MsR0FBVyxFQUFVO0lBQ3ZELE1BQU0sRUFMUixHQUtTQyxLQUFLLEdBTGQsR0FLZ0JDLFFBQVEsTUFBSUosK0NBQVEsRUFBRTtJQUNwQyxTQUFTSyxLQUFLLENBQUNDLEtBQVMsRUFBRTtRQUN4QkMsS0FBSyxDQUFDTCxHQUFHLEVBQUU7WUFDVE0sTUFBTSxFQUFFLE1BQU07WUFDZEMsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sS0FBSSxDQUFDO1NBQzNCLENBQUMsQ0FDQ08sSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7UUFBQSxDQUFDLENBQ3pCRixJQUFJLENBQUMsQ0FBQ1AsSUFBSSxHQUFLRixRQUFRLENBQUNFLElBQUksQ0FBQztRQUFBLENBQUMsQ0FBQztLQUNuQztJQUVELE9BQU87UUFBQ0QsS0FBSztRQUFFRixLQUFLO0tBQUMsQ0FBQztDQUN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9zcmMvbGlicy9jbGllbnQvdXNlTXV0YXRpb24udHM/YWFmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSByZXN1bHQgPSBbKGRhdGE6IGFueSkgPT4gdm9pZCwgYW55XTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU11dGF0aW9uKHVybDogc3RyaW5nKTogcmVzdWx0IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgZnVuY3Rpb24gZW50ZXIoZGF0YTogYW55KSB7XHJcbiAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRTdGF0ZShkYXRhKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gW2VudGVyLCBzdGF0ZV07XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlTXV0YXRpb24iLCJ1cmwiLCJzdGF0ZSIsInNldFN0YXRlIiwiZW50ZXIiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/client/useMutation.ts\n");

/***/ }),

/***/ "./src/pages/create-account.tsx":
/*!**************************************!*\
  !*** ./src/pages/create-account.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var _libs_client_useMutation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/client/useMutation */ \"./src/libs/client/useMutation.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst CreateId = ()=>{\n    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [enter, state] = (0,_libs_client_useMutation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(`/api/users/create`);\n    const onVaild = (data)=>{\n        enter(data);\n    };\n    const onLogin = ()=>{\n        router.push(\"/log-in\");\n    };\n    if (state?.create == true) {\n        alert(\"account created plz login!!\");\n        router.replace({\n            pathname: `/log-in`\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" w-full h-full p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onVaild),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex flex-col justify-center items-center w-full \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \" mb-10 bg-slate-300 rounded-lg p-2 w-96 text-black\",\n                            ...register(\"name\", {\n                                required: true\n                            }),\n                            placeholder: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/tweeterCloneMini/src/pages/create-account.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \" mb-10 bg-slate-300 rounded-lg p-2 w-96 text-black\",\n                            ...register(\"email\", {\n                                required: true\n                            }),\n                            placeholder: \"Email\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/tweeterCloneMini/src/pages/create-account.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \" bg-slate-400 rounded-lg p-2 items-center w-96\",\n                            children: \"Create Account\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/tweeterCloneMini/src/pages/create-account.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/tweeterCloneMini/src/pages/create-account.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspaces/tweeterCloneMini/src/pages/create-account.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" m-12 border-t-4 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \" mt-6 bg-green-400 rounded-lg p-2 items-center w-96\",\n                    onClick: onLogin,\n                    children: \"GO LogIn\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/tweeterCloneMini/src/pages/create-account.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspaces/tweeterCloneMini/src/pages/create-account.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/tweeterCloneMini/src/pages/create-account.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateId);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY3JlYXRlLWFjY291bnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNFO0FBQ1c7QUFRckQsTUFBTUcsUUFBUSxHQUFHLElBQU07SUFDckIsTUFBTSxFQUFFQyxRQUFRLEdBQUVDLFlBQVksR0FBRSxHQUFHSix3REFBTyxFQUFhO0lBQ3ZELE1BQU1LLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUMxQixNQUFNLENBQUNPLEtBQUssRUFBRUMsS0FBSyxDQUFDLEdBQUdOLG9FQUFXLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZELE1BQU1PLE9BQU8sR0FBRyxDQUFDQyxJQUFlLEdBQUs7UUFDbkNILEtBQUssQ0FBQ0csSUFBSSxDQUFDLENBQUM7S0FDYjtJQUNELE1BQU1DLE9BQU8sR0FBRyxJQUFNO1FBQ3BCTCxNQUFNLENBQUNNLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN4QjtJQUNELElBQUlKLEtBQUssRUFBRUssTUFBTSxJQUFJLElBQUksRUFBRTtRQUN6QkMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDckNSLE1BQU0sQ0FBQ1MsT0FBTyxDQUFDO1lBQ2JDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQztTQUNwQixDQUFDLENBQUM7S0FDSjtJQUVELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxxQkFBc0I7OzBCQUVuQyw4REFBQ0MsTUFBSTtnQkFBQ0MsUUFBUSxFQUFFZixZQUFZLENBQUNJLE9BQU8sQ0FBQzswQkFDckMsNEVBQUNRLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxvREFBcUQ7O3NDQUNyRSw4REFBQ0csT0FBSzs0QkFBQ0gsU0FBUyxFQUFDLG9EQUFvRDs0QkFBRSxHQUFHZCxRQUFRLENBQUMsTUFBTSxFQUFFO2dDQUFFa0IsUUFBUSxFQUFFLElBQUk7NkJBQUUsQ0FBQzs0QkFBRUMsV0FBVyxFQUFDLE1BQU07Ozs7O3FDQUFTO3NDQUMxSSw4REFBQ0YsT0FBSzs0QkFBQ0gsU0FBUyxFQUFDLG9EQUFvRDs0QkFBRSxHQUFHZCxRQUFRLENBQUMsT0FBTyxFQUFFO2dDQUFFa0IsUUFBUSxFQUFFLElBQUk7NkJBQUUsQ0FBQzs0QkFBRUMsV0FBVyxFQUFDLE9BQU87Ozs7O3FDQUFTO3NDQUM3SSw4REFBQ0MsUUFBTTs0QkFBQ04sU0FBUyxFQUFDLGdEQUFnRDtzQ0FBQyxnQkFBYzs7Ozs7cUNBQVM7Ozs7Ozs2QkFDcEY7Ozs7O3lCQUNDOzBCQUNQLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsc0NBQXNDOzBCQUNuRCw0RUFBQ00sUUFBTTtvQkFBQ04sU0FBUyxFQUFDLHFEQUFxRDtvQkFBQ08sT0FBTyxFQUFFZCxPQUFPOzhCQUFFLFVBQVE7Ozs7OzZCQUFTOzs7Ozt5QkFDdkc7Ozs7OztpQkFDRixDQUNOO0NBQ0g7QUFFRCxpRUFBZVIsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL3NyYy9wYWdlcy9jcmVhdGUtYWNjb3VudC50c3g/YTE3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHVzZU11dGF0aW9uIGZyb20gXCIuLi9saWJzL2NsaWVudC91c2VNdXRhdGlvblwiO1xyXG5cclxuIGludGVyZmFjZSBMb2dpbkRhdGEge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG59IFxyXG5cclxuXHJcbmNvbnN0IENyZWF0ZUlkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybTxMb2dpbkRhdGE+KCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2VudGVyLCBzdGF0ZV0gPSB1c2VNdXRhdGlvbihgL2FwaS91c2Vycy9jcmVhdGVgKTtcclxuICBjb25zdCBvblZhaWxkID0gKGRhdGE6IExvZ2luRGF0YSkgPT4ge1xyXG4gICAgZW50ZXIoZGF0YSk7XHJcbiAgfTtcclxuICBjb25zdCBvbkxvZ2luID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvbG9nLWluXCIpO1xyXG4gIH1cclxuICBpZiAoc3RhdGU/LmNyZWF0ZSA9PSB0cnVlKSB7XHJcbiAgICBhbGVydChcImFjY291bnQgY3JlYXRlZCBwbHogbG9naW4hIVwiKTtcclxuICAgIHJvdXRlci5yZXBsYWNlKHtcclxuICAgICAgcGF0aG5hbWU6IGAvbG9nLWluYCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBoLWZ1bGwgIHAtMTBcIj5cclxuICAgICAgXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25WYWlsZCl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIFwiPlxyXG4gICAgIDxpbnB1dCBjbGFzc05hbWU9XCIgbWItMTAgYmctc2xhdGUtMzAwIHJvdW5kZWQtbGcgcC0yIHctOTYgdGV4dC1ibGFja1wiIHsuLi5yZWdpc3RlcihcIm5hbWVcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX0gcGxhY2Vob2xkZXI9XCJOYW1lXCI+PC9pbnB1dD5cclxuICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIiBtYi0xMCBiZy1zbGF0ZS0zMDAgcm91bmRlZC1sZyBwLTIgdy05NiB0ZXh0LWJsYWNrXCIgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX0gcGxhY2Vob2xkZXI9XCJFbWFpbFwiPjwvaW5wdXQ+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGJnLXNsYXRlLTQwMCByb3VuZGVkLWxnIHAtMiBpdGVtcy1jZW50ZXIgdy05NlwiPkNyZWF0ZSBBY2NvdW50PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG0tMTIgYm9yZGVyLXQtNCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgbXQtNiBiZy1ncmVlbi00MDAgcm91bmRlZC1sZyBwLTIgaXRlbXMtY2VudGVyIHctOTZcIiBvbkNsaWNrPXtvbkxvZ2lufT5HTyBMb2dJbjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVJZDsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRm9ybSIsInVzZU11dGF0aW9uIiwiQ3JlYXRlSWQiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJvdXRlciIsImVudGVyIiwic3RhdGUiLCJvblZhaWxkIiwiZGF0YSIsIm9uTG9naW4iLCJwdXNoIiwiY3JlYXRlIiwiYWxlcnQiLCJyZXBsYWNlIiwicGF0aG5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/create-account.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/create-account.tsx"));
module.exports = __webpack_exports__;

})();