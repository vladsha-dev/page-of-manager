module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/feedback.js":
/*!********************************!*\
  !*** ./components/feedback.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "H:\\\u0421\u0430\u043C\u043E\u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C\\AntagoSoftTest\\page-of-manage\\components\\feedback.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const feedback = ({
  feedback
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3613597189" + " " + "feedback-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3613597189" + " " + "info-name-date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "jsx-3613597189" + " " + "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  }, feedback.name), __jsx("span", {
    className: "jsx-3613597189" + " " + "date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }
  }, feedback.date)), __jsx("div", {
    className: "jsx-3613597189" + " " + "main-content-feedback",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, feedback.textOfFeedback)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3613597189",
    __self: undefined
  }, ".feedback-wrapper.jsx-3613597189{margin-bottom:30px;}.info-name-date.jsx-3613597189{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;margin-bottom:20px;}.name.jsx-3613597189{margin-right:10px;font-size:20px;font-weight:600;}.date.jsx-3613597189{font-size:16px;color:#808080;}.main-content-feedback.jsx-3613597189{font-size:20px;line-height:26px;box-shadow:0px 4px 10px rgba(128,128,128,0.1);padding:15px 15px 15px 20px;background:#f2fbff;border:1px solid #c4cbcf;position:relative;}.main-content-feedback.jsx-3613597189:before{content:\" \";position:absolute;width:0;height:0;border-style:solid;border-width:20px 0 0 18px;border-color:transparent transparent transparent #c4cbcf;top:-15px;left:30px;z-index:-1;}.main-content-feedback.jsx-3613597189:after{content:\" \";position:absolute;width:0;height:0;border-style:solid;border-width:14px 0 0 14px;border-color:transparent transparent transparent #f2fbff;top:-12px;left:31px;}@media only screen and (max-width:660px){.name.jsx-3613597189{font-size:18px;}.date.jsx-3613597189{font-size:14px;}.main-content-feedback.jsx-3613597189{font-size:18px;line-height:24px;}}@media only screen and (max-width:600px){.name.jsx-3613597189{font-size:16px;}.date.jsx-3613597189{font-size:12px;}.main-content-feedback.jsx-3613597189{font-size:16px;line-height:22px;}}@media only screen and (max-width:540px){.name.jsx-3613597189{font-size:14px;}.date.jsx-3613597189{font-size:10px;}.main-content-feedback.jsx-3613597189{font-size:14px;line-height:19px;padding:13px 15px 15px 20px;}.info-name-date.jsx-3613597189{margin-bottom:11px;}.main-content-feedback.jsx-3613597189:before{border-width:16px 0 0 14px;top:-11px;left:23px;}.main-content-feedback.jsx-3613597189:after{border-width:10px 0 0 10px;top:-8px;left:24px;}.feedback-wrapper.jsx-3613597189{margin-bottom:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkg6XFzQodCw0LzQvtC+0LHRg9GH0LDRjtGB0YxcXEFudGFnb1NvZnRUZXN0XFxwYWdlLW9mLW1hbmFnZVxcY29tcG9uZW50c1xcZmVlZGJhY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWtCLEFBRzhCLEFBR04sQUFLSyxBQUtILEFBSUEsQUFTSCxBQVlBLEFBWUssQUFHQSxBQUdBLEFBTUEsQUFHQSxBQUdBLEFBTUEsQUFHQSxBQUdBLEFBS0ksQUFHUSxBQUtBLEFBS1IsWUF2RUgsQUFZQSxHQXpCSixBQUlHLEFBaUNqQixBQUdBLEFBR21CLEFBTW5CLEFBR0EsQUFHbUIsQUFNbkIsQUFHQSxBQUdtQixHQXhFSixDQVJqQixBQXFGRSxBQWFBLFFBVlksQUFLRCxFQS9FYixDQWFVLEFBWUEsRUFyQnlDLEFBdUNqRCxBQVlBLEFBWThCLENBeEVkLEdBcUZKLENBTEEsQ0E3REgsQUFZQSxRQXVEVCxDQWxFbUIsQUFZQSxBQWlEbkIsRUFoRkYsV0F3RUUsTUFwRDJCLEFBWUEsUUF2Q04sSUFnQk8sZUFZNkIsQUFZQSxhQXZCdEMsbUJBQ00seUJBQ1AsQUFVUixBQVlBLFVBWEEsQUFZQSxRQXRCWixFQVdhLEFBWWIsS0ExQ3FCLE1BK0JyQixhQTlCQSIsImZpbGUiOiJIOlxc0KHQsNC80L7QvtCx0YPRh9Cw0Y7RgdGMXFxBbnRhZ29Tb2Z0VGVzdFxccGFnZS1vZi1tYW5hZ2VcXGNvbXBvbmVudHNcXGZlZWRiYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmVlZGJhY2sgPSAoeyBmZWVkYmFjayB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZGJhY2std3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tbmFtZS1kYXRlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntmZWVkYmFjay5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+e2ZlZWRiYWNrLmRhdGV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQtZmVlZGJhY2tcIj57ZmVlZGJhY2sudGV4dE9mRmVlZGJhY2t9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmZlZWRiYWNrLXdyYXBwZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8tbmFtZS1kYXRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjb2xvcjogIzgwODA4MDtcbiAgICAgICAgfVxuICAgICAgICAubWFpbi1jb250ZW50LWZlZWRiYWNrIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMmZiZmY7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M0Y2JjZjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4tY29udGVudC1mZWVkYmFjazpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDIwcHggMCAwIDE4cHg7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjYzRjYmNmO1xuICAgICAgICAgIHRvcDogLTE1cHg7XG4gICAgICAgICAgbGVmdDogMzBweDtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuICAgICAgICAubWFpbi1jb250ZW50LWZlZWRiYWNrOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAxNHB4IDAgMCAxNHB4O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2YyZmJmZjtcbiAgICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICAgIGxlZnQ6IDMxcHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjBweCkge1xuICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFpbi1jb250ZW50LWZlZWRiYWNrIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYWluLWNvbnRlbnQtZmVlZGJhY2sge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kYXRlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1haW4tY29udGVudC1mZWVkYmFjayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEzcHggMTVweCAxNXB4IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbmZvLW5hbWUtZGF0ZSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFpbi1jb250ZW50LWZlZWRiYWNrOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDE2cHggMCAwIDE0cHg7XG4gICAgICAgICAgICB0b3A6IC0xMXB4O1xuICAgICAgICAgICAgbGVmdDogMjNweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1haW4tY29udGVudC1mZWVkYmFjazphZnRlciB7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDEwcHggMCAwIDEwcHg7XG4gICAgICAgICAgICB0b3A6IC04cHg7XG4gICAgICAgICAgICBsZWZ0OiAyNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmVlZGJhY2std3JhcHBlciB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZlZWRiYWNrO1xuIl19 */\n/*@ sourceURL=H:\\\\\u0421\u0430\u043C\u043E\u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C\\\\AntagoSoftTest\\\\page-of-manage\\\\components\\\\feedback.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (feedback);

/***/ }),

/***/ "./components/feedbacksTabs.js":
/*!*************************************!*\
  !*** ./components/feedbacksTabs.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback */ "./components/feedback.js");
var _jsxFileName = "H:\\\u0421\u0430\u043C\u043E\u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C\\AntagoSoftTest\\page-of-manage\\components\\feedbacksTabs.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const privateInfOfUser = ({
  feedbacksContent
}) => {
  Object(react_tabs__WEBPACK_IMPORTED_MODULE_2__["resetIdCounter"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2270125494" + " " + "status-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "\u0412\u0441\u0435 \u043E\u0442\u0437\u044B\u0432\u044B")), __jsx("div", {
    className: "jsx-2270125494" + " " + "likes-feedbacks-amount",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-2270125494" + " " + "likes-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/icons/like.svg",
    className: "jsx-2270125494",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: "jsx-2270125494" + " " + "likes-amount",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, "131")), __jsx("div", {
    className: "jsx-2270125494" + " " + "feedbacks-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/icons/comment.svg",
    className: "jsx-2270125494",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: "jsx-2270125494" + " " + "feedbacks-amount",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, feedbacksContent.length)))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, feedbacksContent.filter(feedback => (Date.UTC(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate(), 0, 0, 0) - feedback.timeInMilliseconds) / (60 * 60000) / 24 <= 2).map((feedback, index) => __jsx(_feedback__WEBPACK_IMPORTED_MODULE_3__["default"], {
    feedback: feedback,
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, feedbacksContent.map((feedback, index) => __jsx(_feedback__WEBPACK_IMPORTED_MODULE_3__["default"], {
    feedback: feedback,
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3938249765",
    __self: undefined
  }, ".status-wrapper.jsx-2270125494{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;}.likes-feedbacks-amount.jsx-2270125494{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:20px;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.likes-feedbacks-amount.jsx-2270125494 img.jsx-2270125494{width:24px;height:22px;}.likes-info.jsx-2270125494,.feedbacks-info.jsx-2270125494{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.likes-amount.jsx-2270125494,.feedbacks-amount.jsx-2270125494{margin-left:4px;}.feedbacks-info.jsx-2270125494{margin-left:18px;}@media only screen and (max-width:660px){.likes-feedbacks-amount.jsx-2270125494{font-size:18px;}.likes-feedbacks-amount.jsx-2270125494 img.jsx-2270125494{width:21px;height:19px;}}@media only screen and (max-width:600px){.likes-feedbacks-amount.jsx-2270125494{font-size:16px;}.likes-feedbacks-amount.jsx-2270125494 img.jsx-2270125494{width:19px;height:17px;}}@media only screen and (max-width:540px){.likes-feedbacks-amount.jsx-2270125494{font-size:12px;}.likes-feedbacks-amount.jsx-2270125494 img.jsx-2270125494{width:14px;height:13px;}.status-wrapper.jsx-2270125494{margin-bottom:10px;}}@media only screen and (max-width:490px){.likes-feedbacks-amount.jsx-2270125494{font-size:11px;}.likes-feedbacks-amount.jsx-2270125494 img.jsx-2270125494{width:11px;height:12px;}.feedbacks-info.jsx-2270125494{margin-left:8px;}.likes-amount.jsx-2270125494,.feedbacks-amount.jsx-2270125494{margin-left:2px;}}@media only screen and (max-width:430px){.feedbacks-info.jsx-2270125494{margin-left:5px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkg6XFzQodCw0LzQvtC+0LHRg9GH0LDRjtGB0YxcXEFudGFnb1NvZnRUZXN0XFxwYWdlLW9mLW1hbmFnZVxcY29tcG9uZW50c1xcZmVlZGJhY2tzVGFicy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGtCLEFBR3dCLEFBS0EsQUFLRixBQUtFLEFBS0csQUFHQyxBQUlBLEFBR0osQUFNSSxBQUdKLEFBTUksQUFHSixBQUlRLEFBS0osQUFHSixBQUlLLEFBSUEsQUFLQSxXQTlETixBQW9CRSxBQVNBLEFBU0EsQUFZQSxJQWpDZCxBQVNBLEFBU0EsQUFZQSxDQXJDRixBQTRDRSxBQUlBLEFBS0EsQ0FsREYsRUE2QkUsSUF6Q0YsQUFvQkUsQUFTQSxBQVNBLEFBWUEsbURBN0Q4QixBQUtmLEFBVUksZUFURSw4RUFVdkIsc0JBZnFCLENBTXJCLGtCQUxBIiwiZmlsZSI6Ikg6XFzQodCw0LzQvtC+0LHRg9GH0LDRjtGB0YxcXEFudGFnb1NvZnRUZXN0XFxwYWdlLW9mLW1hbmFnZVxcY29tcG9uZW50c1xcZmVlZGJhY2tzVGFicy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYiwgVGFicywgVGFiTGlzdCwgVGFiUGFuZWwsIHJlc2V0SWRDb3VudGVyIH0gZnJvbSBcInJlYWN0LXRhYnNcIjtcbmltcG9ydCBGZWVkYmFjayBmcm9tIFwiLi9mZWVkYmFja1wiO1xuY29uc3QgcHJpdmF0ZUluZk9mVXNlciA9ICh7IGZlZWRiYWNrc0NvbnRlbnQgfSkgPT4ge1xuICByZXNldElkQ291bnRlcigpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGFicz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0dXMtd3JhcHBlclwiPlxuICAgICAgICAgIDxUYWJMaXN0PlxuICAgICAgICAgICAgPFRhYj7Qn9C+0YHQu9C10LTQvdC40LUg0L7RgtC30YvQstGLPC9UYWI+XG4gICAgICAgICAgICA8VGFiPtCS0YHQtSDQvtGC0LfRi9Cy0Ys8L1RhYj5cbiAgICAgICAgICA8L1RhYkxpc3Q+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWtlcy1mZWVkYmFja3MtYW1vdW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpa2VzLWluZm9cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvbGlrZS5zdmdcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaWtlcy1hbW91bnRcIj4xMzE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZGJhY2tzLWluZm9cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvY29tbWVudC5zdmdcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmZWVkYmFja3MtYW1vdW50XCI+XG4gICAgICAgICAgICAgICAge2ZlZWRiYWNrc0NvbnRlbnQubGVuZ3RofVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICB7ZmVlZGJhY2tzQ29udGVudFxuICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgKGZlZWRiYWNrKSA9PlxuICAgICAgICAgICAgICAgIChEYXRlLlVUQyhcbiAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEsXG4gICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgpLmdldERhdGUoKSxcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICkgLVxuICAgICAgICAgICAgICAgICAgZmVlZGJhY2sudGltZUluTWlsbGlzZWNvbmRzKSAvXG4gICAgICAgICAgICAgICAgICAoNjAgKiA2MDAwMCkgL1xuICAgICAgICAgICAgICAgICAgMjQgPD1cbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAubWFwKChmZWVkYmFjaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPEZlZWRiYWNrIGZlZWRiYWNrPXtmZWVkYmFja30ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAge2ZlZWRiYWNrc0NvbnRlbnQubWFwKChmZWVkYmFjaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxGZWVkYmFjayBmZWVkYmFjaz17ZmVlZGJhY2t9IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICA8L1RhYnM+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zdGF0dXMtd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubGlrZXMtZmVlZGJhY2tzLWFtb3VudCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICAgIC5saWtlcy1mZWVkYmFja3MtYW1vdW50IGltZyB7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5saWtlcy1pbmZvLFxuICAgICAgICAuZmVlZGJhY2tzLWluZm8ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubGlrZXMtYW1vdW50LFxuICAgICAgICAuZmVlZGJhY2tzLWFtb3VudCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgfVxuICAgICAgICAuZmVlZGJhY2tzLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgICAgICAgICAubGlrZXMtZmVlZGJhY2tzLWFtb3VudCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saWtlcy1mZWVkYmFja3MtYW1vdW50IGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMjFweDtcbiAgICAgICAgICAgIGhlaWdodDogMTlweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC5saWtlcy1mZWVkYmFja3MtYW1vdW50IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpa2VzLWZlZWRiYWNrcy1hbW91bnQgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxOXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gICAgICAgICAgLmxpa2VzLWZlZWRiYWNrcy1hbW91bnQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlrZXMtZmVlZGJhY2tzLWFtb3VudCBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdGF0dXMtd3JhcHBlciB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5MHB4KSB7XG4gICAgICAgICAgLmxpa2VzLWZlZWRiYWNrcy1hbW91bnQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlrZXMtZmVlZGJhY2tzLWFtb3VudCBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDExcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mZWVkYmFja3MtaW5mbyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlrZXMtYW1vdW50LFxuICAgICAgICAgIC5mZWVkYmFja3MtYW1vdW50IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcbiAgICAgICAgICAuZmVlZGJhY2tzLWluZm8ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5yZWFjdC10YWJzX190YWItbGlzdCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG4gICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5yZWFjdC10YWJzX190YWIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICBjb2xvcjogIzAwNWRhMTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucmVhY3QtdGFic19fdGFiLS1zZWxlY3RlZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2MHB4KSB7XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYi0tc2VsZWN0ZWQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYi0tc2VsZWN0ZWQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYi0tc2VsZWN0ZWQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5MHB4KSB7XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYi0tc2VsZWN0ZWQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgcHJpdmF0ZUluZk9mVXNlcjtcbiJdfQ== */\n/*@ sourceURL=H:\\\\\u0421\u0430\u043C\u043E\u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C\\\\AntagoSoftTest\\\\page-of-manage\\\\components\\\\feedbacksTabs.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1970921786",
    __self: undefined
  }, ".react-tabs__tab-list{list-style:none;margin-block-start:0;margin-block-end:0;padding-inline-start:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.react-tabs__tab{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:20px;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;color:#005da1;-webkit-text-decoration-line:underline;text-decoration-line:underline;cursor:pointer;margin-right:15px;outline:none;}.react-tabs__tab--selected{font-size:22px;font-weight:600;color:#333333;-webkit-text-decoration:none;text-decoration:none;cursor:default;}@media only screen and (max-width:660px){.react-tabs__tab--selected{font-size:20px !important;}.react-tabs__tab{font-size:18px;}}@media only screen and (max-width:600px){.react-tabs__tab--selected{font-size:18px !important;}.react-tabs__tab{font-size:16px;margin-right:10px;}}@media only screen and (max-width:540px){.react-tabs__tab--selected{font-size:16px !important;}.react-tabs__tab{font-size:14px;}}@media only screen and (max-width:490px){.react-tabs__tab--selected{font-size:15px !important;}.react-tabs__tab{font-size:13px;margin-right:7px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkg6XFzQodCw0LzQvtC+0LHRg9GH0LDRjtGB0YxcXEFudGFnb1NvZnRUZXN0XFxwYWdlLW9mLW1hbmFnZVxcY29tcG9uZW50c1xcZmVlZGJhY2tzVGFicy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSXlCLEFBRzJCLEFBT0gsQUFVRSxBQVFhLEFBR1gsQUFLVyxBQUdYLEFBTVcsQUFHWCxBQUtXLEFBR1gsZUFuQ0QsQUFXaEIsQUFRb0IsQUFTcEIsQUFRbUIsQ0FyREUsVUF5QnJCLEFBUUEsQUFTQSxBQVFBLEtBaENjLENBb0NkLENBakJBLElBcENtQixRQWtCRSxXQWpCRSxrQkFLUixLQUpGLFVBS1EsTUFZTixlQUNqQiwyQ0FqQkEscUNBS2dCLGNBQ2lCLHNFQUNoQixlQUNHLGtCQUNMLGFBQ2YiLCJmaWxlIjoiSDpcXNCh0LDQvNC+0L7QsdGD0YfQsNGO0YHRjFxcQW50YWdvU29mdFRlc3RcXHBhZ2Utb2YtbWFuYWdlXFxjb21wb25lbnRzXFxmZWVkYmFja3NUYWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFiLCBUYWJzLCBUYWJMaXN0LCBUYWJQYW5lbCwgcmVzZXRJZENvdW50ZXIgfSBmcm9tIFwicmVhY3QtdGFic1wiO1xuaW1wb3J0IEZlZWRiYWNrIGZyb20gXCIuL2ZlZWRiYWNrXCI7XG5jb25zdCBwcml2YXRlSW5mT2ZVc2VyID0gKHsgZmVlZGJhY2tzQ29udGVudCB9KSA9PiB7XG4gIHJlc2V0SWRDb3VudGVyKCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUYWJzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1cy13cmFwcGVyXCI+XG4gICAgICAgICAgPFRhYkxpc3Q+XG4gICAgICAgICAgICA8VGFiPtCf0L7RgdC70LXQtNC90LjQtSDQvtGC0LfRi9Cy0Ys8L1RhYj5cbiAgICAgICAgICAgIDxUYWI+0JLRgdC1INC+0YLQt9GL0LLRizwvVGFiPlxuICAgICAgICAgIDwvVGFiTGlzdD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpa2VzLWZlZWRiYWNrcy1hbW91bnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlrZXMtaW5mb1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9saWtlLnN2Z1wiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpa2VzLWFtb3VudFwiPjEzMTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWVkYmFja3MtaW5mb1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9jb21tZW50LnN2Z1wiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZlZWRiYWNrcy1hbW91bnRcIj5cbiAgICAgICAgICAgICAgICB7ZmVlZGJhY2tzQ29udGVudC5sZW5ndGh9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgIHtmZWVkYmFja3NDb250ZW50XG4gICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAoZmVlZGJhY2spID0+XG4gICAgICAgICAgICAgICAgKERhdGUuVVRDKFxuICAgICAgICAgICAgICAgICAgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgICAgbmV3IERhdGUoKS5nZXRNb250aCgpICsgMSxcbiAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCkuZ2V0RGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKSAtXG4gICAgICAgICAgICAgICAgICBmZWVkYmFjay50aW1lSW5NaWxsaXNlY29uZHMpIC9cbiAgICAgICAgICAgICAgICAgICg2MCAqIDYwMDAwKSAvXG4gICAgICAgICAgICAgICAgICAyNCA8PVxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5tYXAoKGZlZWRiYWNrLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8RmVlZGJhY2sgZmVlZGJhY2s9e2ZlZWRiYWNrfSBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICB7ZmVlZGJhY2tzQ29udGVudC5tYXAoKGZlZWRiYWNrLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPEZlZWRiYWNrIGZlZWRiYWNrPXtmZWVkYmFja30ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgIDwvVGFicz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnN0YXR1cy13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5saWtlcy1mZWVkYmFja3MtYW1vdW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICAgICAgLmxpa2VzLWZlZWRiYWNrcy1hbW91bnQgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxpa2VzLWluZm8sXG4gICAgICAgIC5mZWVkYmFja3MtaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5saWtlcy1hbW91bnQsXG4gICAgICAgIC5mZWVkYmFja3MtYW1vdW50IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5mZWVkYmFja3MtaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjBweCkge1xuICAgICAgICAgIC5saWtlcy1mZWVkYmFja3MtYW1vdW50IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpa2VzLWZlZWRiYWNrcy1hbW91bnQgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLmxpa2VzLWZlZWRiYWNrcy1hbW91bnQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlrZXMtZmVlZGJhY2tzLWFtb3VudCBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDE5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgICAgICAgICAubGlrZXMtZmVlZGJhY2tzLWFtb3VudCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saWtlcy1mZWVkYmFja3MtYW1vdW50IGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICAgIGhlaWdodDogMTNweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN0YXR1cy13cmFwcGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDkwcHgpIHtcbiAgICAgICAgICAubGlrZXMtZmVlZGJhY2tzLWFtb3VudCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saWtlcy1mZWVkYmFja3MtYW1vdW50IGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTFweDtcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZlZWRiYWNrcy1pbmZvIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saWtlcy1hbW91bnQsXG4gICAgICAgICAgLmZlZWRiYWNrcy1hbW91bnQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xuICAgICAgICAgIC5mZWVkYmFja3MtaW5mbyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLnJlYWN0LXRhYnNfX3RhYi1saXN0IHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xuICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWN0LXRhYnNfX3RhYiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgIGNvbG9yOiAjMDA1ZGExO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5yZWFjdC10YWJzX190YWItLXNlbGVjdGVkIHtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgICAgICAgICAucmVhY3QtdGFic19fdGFiLS1zZWxlY3RlZCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAucmVhY3QtdGFic19fdGFiLS1zZWxlY3RlZCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgICAgICAgICAucmVhY3QtdGFic19fdGFiLS1zZWxlY3RlZCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDkwcHgpIHtcbiAgICAgICAgICAucmVhY3QtdGFic19fdGFiLS1zZWxlY3RlZCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBwcml2YXRlSW5mT2ZVc2VyO1xuIl19 */\n/*@ sourceURL=H:\\\\\u0421\u0430\u043C\u043E\u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C\\\\AntagoSoftTest\\\\page-of-manage\\\\components\\\\feedbacksTabs.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (privateInfOfUser);

/***/ }),

/***/ "./components/form.js":
/*!****************************!*\
  !*** ./components/form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "H:\\\u0421\u0430\u043C\u043E\u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C\\AntagoSoftTest\\page-of-manage\\components\\form.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const SignupSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "Очень короткое имя").max(50, "Очень длинное имя").required("Поле не может быть пустым"),
  textOfFeedback: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(0, "Очень короткий отзыв").max(300, "Очень длинный отзыв").required("Поле не может быть пустым")
});

const form = () => {
  const {
    0: isSubmitting,
    1: setIsSubmitting
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: form,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    addEventListener("keydown", e => {
      e.keyCode === 13 && e.ctrlKey ? document.querySelector(".form-btn").click() : null;
    });

    if (isSubmitting) {
      sendFeedback();
      setIsSubmitting(!isSubmitting);
      setTimeout(() => location.reload(true), 200);
    }
  });

  const sendFeedback = async () => {
    try {
      const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:3000/api/notes", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_objectSpread({}, form, {
          date: new Date().toLocaleString("ru", {
            day: "numeric",
            month: "long",
            year: "numeric"
          }).replace(/\s*г\./, ""),
          timeInMilliseconds: Date.UTC(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate(), 0, 0, 0)
        }))
      });
    } catch (error) {
      console.log(error);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      name: "",
      textOfFeedback: ""
    },
    validationSchema: SignupSchema,
    onSubmit: async values => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setForm(values);
      setIsSubmitting(!isSubmitting);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, ({
    errors,
    touched,
    values
  }) => __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    className: "form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-2045612794" + " " + "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "name",
    className: "form-input-name",
    placeholder: "\u0418\u043C\u044F",
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }), errors.name && touched.name ? __jsx("div", {
    className: "jsx-2045612794" + " " + "error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, errors.name) : null), __jsx("div", {
    className: "jsx-2045612794" + " " + "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "textOfFeedback",
    as: "textarea",
    className: "form-textarea",
    placeholder: "\u041E\u0442\u0437\u044B\u0432",
    type: "text",
    value: values.textOfFeedback || "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }), errors.textOfFeedback && touched.textOfFeedback ? __jsx("div", {
    className: "jsx-2045612794" + " " + "error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, errors.textOfFeedback) : null), __jsx("button", {
    type: "submit",
    className: "jsx-2045612794" + " " + "form-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442\u0443"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1947735990",
    __self: undefined
  }, ".form-btn.jsx-2045612794{width:62%;min-height:43px;background:#fdd639;border-radius:23px;border:none;outline:none;font-weight:600;font-size:22px;line-height:21px;cursor:pointer;padding:15px 0px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.error.jsx-2045612794{font-family:\"Open Sans\",sans-serif;color:red;}.row.jsx-2045612794{margin-bottom:23px;width:100%;padding:0;}@media only screen and (max-width:660px){.form-btn.jsx-2045612794{font-size:20px;line-height:18px;}}@media only screen and (max-width:600px){.form-btn.jsx-2045612794{font-size:18px;line-height:17px;}}@media only screen and (max-width:540px){.row.jsx-2045612794{margin-bottom:18px;}.form-btn.jsx-2045612794{font-size:16px;line-height:17px;padding:15px 15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkg6XFzQodCw0LzQvtC+0LHRg9GH0LDRjtGB0YxcXEFudGFnb1NvZnRUZXN0XFxwYWdlLW9mLW1hbmFnZVxcY29tcG9uZW50c1xcZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0R1MsQUFHdUIsQUFjMEIsQUFJakIsQUFNRixBQU1BLEFBTUksQUFHSixVQXRDRCxLQXdCRyxBQU1BLEFBU0EsSUFyQlIsQUFrQlgsT0FuQ21CLElBa0JULEVBTVYsQUFNQSxBQVNvQixHQTFCVixLQU1aLEtBbEJxQixBQWFyQixLQTBCRSxjQXRDWSxZQUNDLGFBQ0csZ0JBQ0QsZUFDRSxpQkFDRixlQUNFLGlCQUNDLHVFQUNwQiIsImZpbGUiOiJIOlxc0KHQsNC80L7QvtCx0YPRh9Cw0Y7RgdGMXFxBbnRhZ29Tb2Z0VGVzdFxccGFnZS1vZi1tYW5hZ2VcXGNvbXBvbmVudHNcXGZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmNvbnN0IFNpZ251cFNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gIG5hbWU6IFl1cC5zdHJpbmcoKVxuICAgIC5taW4oMiwgXCLQntGH0LXQvdGMINC60L7RgNC+0YLQutC+0LUg0LjQvNGPXCIpXG4gICAgLm1heCg1MCwgXCLQntGH0LXQvdGMINC00LvQuNC90L3QvtC1INC40LzRj1wiKVxuICAgIC5yZXF1aXJlZChcItCf0L7Qu9C1INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LxcIiksXG4gIHRleHRPZkZlZWRiYWNrOiBZdXAuc3RyaW5nKClcbiAgICAubWluKDAsIFwi0J7Rh9C10L3RjCDQutC+0YDQvtGC0LrQuNC5INC+0YLQt9GL0LJcIilcbiAgICAubWF4KDMwMCwgXCLQntGH0LXQvdGMINC00LvQuNC90L3Ri9C5INC+0YLQt9GL0LJcIilcbiAgICAucmVxdWlyZWQoXCLQn9C+0LvQtSDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8XCIpLFxufSk7XG5jb25zdCBmb3JtID0gKCkgPT4ge1xuICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBlLmtleUNvZGUgPT09IDEzICYmIGUuY3RybEtleVxuICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1idG5cIikuY2xpY2soKVxuICAgICAgICA6IG51bGw7XG4gICAgfSk7XG4gICAgaWYgKGlzU3VibWl0dGluZykge1xuICAgICAgc2VuZEZlZWRiYWNrKCk7XG4gICAgICBzZXRJc1N1Ym1pdHRpbmcoIWlzU3VibWl0dGluZyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGxvY2F0aW9uLnJlbG9hZCh0cnVlKSwgMjAwKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBzZW5kRmVlZGJhY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ub3Rlc1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgLi4uZm9ybSxcbiAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAudG9Mb2NhbGVTdHJpbmcoXCJydVwiLCB7XG4gICAgICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xccyrQs1xcLi8sIFwiXCIpLFxuICAgICAgICAgIHRpbWVJbk1pbGxpc2Vjb25kczogRGF0ZS5VVEMoXG4gICAgICAgICAgICBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxLFxuICAgICAgICAgICAgbmV3IERhdGUoKS5nZXREYXRlKCksXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgIHRleHRPZkZlZWRiYWNrOiBcIlwiLFxuICAgICAgICB9fVxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtTaWdudXBTY2hlbWF9XG4gICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XG4gICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTAwKSk7XG4gICAgICAgICAgc2V0Rm9ybSh2YWx1ZXMpO1xuICAgICAgICAgIHNldElzU3VibWl0dGluZyghaXNTdWJtaXR0aW5nKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgeyh7IGVycm9ycywgdG91Y2hlZCwgdmFsdWVzIH0pID0+IChcbiAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dC1uYW1lXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCY0LzRj1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgdG91Y2hlZC5uYW1lID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JzLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwidGV4dE9mRmVlZGJhY2tcIlxuICAgICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tdGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J7RgtC30YvQslwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudGV4dE9mRmVlZGJhY2sgfHwgXCJcIn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2Vycm9ycy50ZXh0T2ZGZWVkYmFjayAmJiB0b3VjaGVkLnRleHRPZkZlZWRiYWNrID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JzLnRleHRPZkZlZWRiYWNrfTwvZGl2PlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiZm9ybS1idG5cIj5cbiAgICAgICAgICAgICAg0J3QsNC/0LjRgdCw0YLRjCDQutC+0L3RgdGD0LvRjNGC0LDQvdGC0YNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybWlrPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuZm9ybS1idG4ge1xuICAgICAgICAgICAgd2lkdGg6IDYyJTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQzcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmRkNjM5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjNweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2MHB4KSB7XG4gICAgICAgICAgICAuZm9ybS1idG4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAuZm9ybS1idG4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gICAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtLWJ0biB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmZvcm0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjhweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybS1pbnB1dC1uYW1lLFxuICAgICAgICAgIC5mb3JtLXRleHRhcmVhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm0taW5wdXQtbmFtZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtLXRleHRhcmVhIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucm93IHRleHRhcmVhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODA4MDgwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODA4MDgwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjBweCkge1xuICAgICAgICAgICAgLnJvdyB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtLWlucHV0LW5hbWUsXG4gICAgICAgICAgICAuZm9ybS10ZXh0YXJlYSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgLnJvdyB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtLWlucHV0LW5hbWUsXG4gICAgICAgICAgICAuZm9ybS10ZXh0YXJlYSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xuICAgICAgICAgICAgLmZvcm0taW5wdXQtbmFtZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtLXRleHRhcmVhIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm93IHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm0taW5wdXQtbmFtZSxcbiAgICAgICAgICAgIC5mb3JtLXRleHRhcmVhIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybTtcbiJdfQ== */\n/*@ sourceURL=H:\\\\\u0421\u0430\u043C\u043E\u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C\\\\AntagoSoftTest\\\\page-of-manage\\\\components\\\\form.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3752577861",
    __self: undefined
  }, ".form{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-top:28px;padding-bottom:34px;}.form-input-name,.form-textarea{background:#ffffff;border:1px solid #000000;border-radius:1px;outline:none;width:100%;padding:0 20px;box-sizing:border-box;font-size:20px;}.form-input-name{height:50px;}.form-textarea{height:100px;resize:none;padding:10px 20px;box-sizing:border-box;}.row textarea{font-size:20px;font-family:\"Open Sans\",sans-serif;}::-webkit-input-placeholder{font-size:20px;color:#808080;font-family:\"Open Sans\",sans-serif;}::-moz-placeholder{font-size:20px;color:#808080;font-family:\"Open Sans\",sans-serif;}:-moz-placeholder{font-size:20px;color:#808080;font-family:\"Open Sans\",sans-serif;}:-ms-input-placeholder{font-size:20px;color:#808080;font-family:\"Open Sans\",sans-serif;}@media only screen and (max-width:660px){.row textarea{font-size:18px;}::-webkit-input-placeholder{font-size:18px;}::-moz-placeholder{font-size:18px;}:-moz-placeholder{font-size:18px;}:-ms-input-placeholder{font-size:18px;}.form-input-name,.form-textarea{font-size:18px;}}@media only screen and (max-width:600px){.row textarea{font-size:16px;}::-webkit-input-placeholder{font-size:16px;}::-moz-placeholder{font-size:16px;}:-moz-placeholder{font-size:16px;}:-ms-input-placeholder{font-size:16px;}.form-input-name,.form-textarea{font-size:16px;}}@media only screen and (max-width:540px){.form-input-name{height:30px;}.form-textarea{height:80px;padding:10px 20px;box-sizing:border-box;}.row textarea{font-size:14px;}::-webkit-input-placeholder{font-size:14px;}::-moz-placeholder{font-size:14px;}:-moz-placeholder{font-size:14px;}:-ms-input-placeholder{font-size:14px;}.form-input-name,.form-textarea{font-size:14px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkg6XFzQodCw0LzQvtC+0LHRg9GH0LDRjtGB0YxcXEFudGFnb1NvZnRUZXN0XFxwYWdlLW9mLW1hbmFnZVxcY29tcG9uZW50c1xcZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SlMsQUFHMEIsQUFPTSxBQVVQLEFBR0MsQUFNRSxBQUlBLEFBS0EsQUFLQSxBQUtBLEFBTUUsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUlBLEFBS0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUlBLEFBS0gsQUFHQSxBQUtHLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFJQSxZQW5HbkIsQUE0RUUsQUFHb0IsQ0E1RVIsRUFNd0IsQUFJdEIsQUFLQSxBQUtBLEFBS0EsQUFNZCxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBSUEsQUFLQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBSUEsQUFhQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBSUEsSUE5R3lCLE1BY1AsSUFVa0IsQUFLQSxBQUtBLEFBS0EsQ0FtRFosYUEzRUYsQ0FkSixNQW1CcEIsRUF1RUUsVUF6RmEsRUF1QmYsQUFLQSxBQUtBLEFBS0EsQ0F4QkEsU0F2QndCLENBVVgsV0FDSSxlQUNPLHNCQUNQLGVBQ2pCLGNBYm1CLGlCQUNHLG9CQUN0QiIsImZpbGUiOiJIOlxc0KHQsNC80L7QvtCx0YPRh9Cw0Y7RgdGMXFxBbnRhZ29Tb2Z0VGVzdFxccGFnZS1vZi1tYW5hZ2VcXGNvbXBvbmVudHNcXGZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmNvbnN0IFNpZ251cFNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gIG5hbWU6IFl1cC5zdHJpbmcoKVxuICAgIC5taW4oMiwgXCLQntGH0LXQvdGMINC60L7RgNC+0YLQutC+0LUg0LjQvNGPXCIpXG4gICAgLm1heCg1MCwgXCLQntGH0LXQvdGMINC00LvQuNC90L3QvtC1INC40LzRj1wiKVxuICAgIC5yZXF1aXJlZChcItCf0L7Qu9C1INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LxcIiksXG4gIHRleHRPZkZlZWRiYWNrOiBZdXAuc3RyaW5nKClcbiAgICAubWluKDAsIFwi0J7Rh9C10L3RjCDQutC+0YDQvtGC0LrQuNC5INC+0YLQt9GL0LJcIilcbiAgICAubWF4KDMwMCwgXCLQntGH0LXQvdGMINC00LvQuNC90L3Ri9C5INC+0YLQt9GL0LJcIilcbiAgICAucmVxdWlyZWQoXCLQn9C+0LvQtSDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8XCIpLFxufSk7XG5jb25zdCBmb3JtID0gKCkgPT4ge1xuICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBlLmtleUNvZGUgPT09IDEzICYmIGUuY3RybEtleVxuICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1idG5cIikuY2xpY2soKVxuICAgICAgICA6IG51bGw7XG4gICAgfSk7XG4gICAgaWYgKGlzU3VibWl0dGluZykge1xuICAgICAgc2VuZEZlZWRiYWNrKCk7XG4gICAgICBzZXRJc1N1Ym1pdHRpbmcoIWlzU3VibWl0dGluZyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGxvY2F0aW9uLnJlbG9hZCh0cnVlKSwgMjAwKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBzZW5kRmVlZGJhY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ub3Rlc1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgLi4uZm9ybSxcbiAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAudG9Mb2NhbGVTdHJpbmcoXCJydVwiLCB7XG4gICAgICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xccyrQs1xcLi8sIFwiXCIpLFxuICAgICAgICAgIHRpbWVJbk1pbGxpc2Vjb25kczogRGF0ZS5VVEMoXG4gICAgICAgICAgICBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxLFxuICAgICAgICAgICAgbmV3IERhdGUoKS5nZXREYXRlKCksXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgIHRleHRPZkZlZWRiYWNrOiBcIlwiLFxuICAgICAgICB9fVxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtTaWdudXBTY2hlbWF9XG4gICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XG4gICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTAwKSk7XG4gICAgICAgICAgc2V0Rm9ybSh2YWx1ZXMpO1xuICAgICAgICAgIHNldElzU3VibWl0dGluZyghaXNTdWJtaXR0aW5nKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgeyh7IGVycm9ycywgdG91Y2hlZCwgdmFsdWVzIH0pID0+IChcbiAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dC1uYW1lXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCY0LzRj1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgdG91Y2hlZC5uYW1lID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JzLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwidGV4dE9mRmVlZGJhY2tcIlxuICAgICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tdGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J7RgtC30YvQslwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudGV4dE9mRmVlZGJhY2sgfHwgXCJcIn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2Vycm9ycy50ZXh0T2ZGZWVkYmFjayAmJiB0b3VjaGVkLnRleHRPZkZlZWRiYWNrID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JzLnRleHRPZkZlZWRiYWNrfTwvZGl2PlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiZm9ybS1idG5cIj5cbiAgICAgICAgICAgICAg0J3QsNC/0LjRgdCw0YLRjCDQutC+0L3RgdGD0LvRjNGC0LDQvdGC0YNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybWlrPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuZm9ybS1idG4ge1xuICAgICAgICAgICAgd2lkdGg6IDYyJTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQzcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmRkNjM5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjNweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2MHB4KSB7XG4gICAgICAgICAgICAuZm9ybS1idG4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAuZm9ybS1idG4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gICAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtLWJ0biB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmZvcm0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjhweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybS1pbnB1dC1uYW1lLFxuICAgICAgICAgIC5mb3JtLXRleHRhcmVhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm0taW5wdXQtbmFtZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtLXRleHRhcmVhIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucm93IHRleHRhcmVhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODA4MDgwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODA4MDgwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjBweCkge1xuICAgICAgICAgICAgLnJvdyB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtLWlucHV0LW5hbWUsXG4gICAgICAgICAgICAuZm9ybS10ZXh0YXJlYSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgLnJvdyB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtLWlucHV0LW5hbWUsXG4gICAgICAgICAgICAuZm9ybS10ZXh0YXJlYSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xuICAgICAgICAgICAgLmZvcm0taW5wdXQtbmFtZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtLXRleHRhcmVhIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm93IHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm0taW5wdXQtbmFtZSxcbiAgICAgICAgICAgIC5mb3JtLXRleHRhcmVhIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybTtcbiJdfQ== */\n/*@ sourceURL=H:\\\\\u0421\u0430\u043C\u043E\u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C\\\\AntagoSoftTest\\\\page-of-manage\\\\components\\\\form.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./components/generalInfOfUser.js":
/*!****************************************!*\
  !*** ./components/generalInfOfUser.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _privateInfOfUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privateInfOfUser */ "./components/privateInfOfUser.js");
/* harmony import */ var _servicesWireframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicesWireframe */ "./components/servicesWireframe.js");
var _jsxFileName = "H:\\\u0421\u0430\u043C\u043E\u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C\\AntagoSoftTest\\page-of-manage\\components\\generalInfOfUser.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const generalInfOfUser = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "general-inf-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx(_privateInfOfUser__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), __jsx(_servicesWireframe__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (generalInfOfUser);

/***/ }),

/***/ "./components/privateInfOfUser.js":
/*!****************************************!*\
  !*** ./components/privateInfOfUser.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "H:\\\u0421\u0430\u043C\u043E\u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C\\AntagoSoftTest\\page-of-manage\\components\\privateInfOfUser.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const privateInfOfUser = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-781109344" + " " + "info-user-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/img/veronika-img.jpg",
    className: "jsx-781109344" + " " + "user-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-781109344" + " " + "info-main",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "jsx-781109344" + " " + "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }
  }, "\u0412\u0435\u0440\u043E\u043D\u0438\u043A\u0430 \u0420\u043E\u0441\u0442\u043E\u0432\u0430"), __jsx("span", {
    className: "jsx-781109344" + " " + "status",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u043E \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C"), __jsx("div", {
    className: "jsx-781109344" + " " + "slogan",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "\u041F\u043E\u0434\u0431\u0435\u0440\u0443 \u0434\u043B\u044F \u0432\u0430\u0441 \u0441\u0430\u043C\u044B\u0435 \u043B\u0443\u0447\u0448\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F. \u041C\u043E\u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "781109344",
    __self: undefined
  }, ".info-user-wrapper.jsx-781109344{line-height:36px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.info-main.jsx-781109344{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:70%;margin-left:10px;}.user-img.jsx-781109344{border-radius:50%;z-index:100;height:30%;width:30%;}.name.jsx-781109344{font-weight:600;font-size:22px;padding-top:10px;}.status.jsx-781109344{font-size:18px;color:#808080;margin-bottom:10px;}.slogan.jsx-781109344{font-size:20px;width:auto;min-height:54px;padding:5px 5px 5px 45px;background:#fffbc8;border:1px solid #dadada;box-sizing:border-box;border-radius:5px;margin-left:-50px;}@media only screen and (max-width:660px){.info-user-wrapper.jsx-781109344{line-height:28px;}.name.jsx-781109344{font-size:20px;}.status.jsx-781109344{font-size:16px;}.slogan.jsx-781109344{font-size:18px;width:111.5%;}}@media only screen and (max-width:600px){.info-user-wrapper.jsx-781109344{line-height:26px;}.name.jsx-781109344{font-size:18px;}.status.jsx-781109344{font-size:14px;}.slogan.jsx-781109344{font-size:16px;width:113%;}}@media only screen and (max-width:540px){.info-user-wrapper.jsx-781109344{line-height:20px;}.name.jsx-781109344{font-size:16px;padding-top:6px;margin-bottom:3px;}.status.jsx-781109344{font-size:12px;margin-bottom:5px;}.slogan.jsx-781109344{font-size:14px;width:115%;margin-left:-45px;}.info-main.jsx-781109344{width:73%;margin-left:8px;}.user-img.jsx-781109344{height:27%;width:27%;}}@media only screen and (max-width:490px){.info-user-wrapper.jsx-781109344{line-height:20px;}.status.jsx-781109344{font-size:11px;}.slogan.jsx-781109344{font-size:13px;}}@media only screen and (max-width:430px){.info-user-wrapper.jsx-781109344{line-height:17px;}.slogan.jsx-781109344{width:116%;}}@media only screen and (max-width:390px){.slogan.jsx-781109344{width:118%;}}@media only screen and (max-width:360px){.slogan.jsx-781109344{width:119.5%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkg6XFzQodCw0LzQvtC+0LHRg9GH0LDRjtGB0YxcXEFudGFnb1NvZnRUZXN0XFxwYWdlLW9mLW1hbmFnZVxcY29tcG9uZW50c1xccHJpdmF0ZUluZk9mVXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFja0IsQUFHNEIsQUFJSixBQU1LLEFBTUYsQUFLRCxBQUtBLEFBWUksQUFHRixBQUdBLEFBR0EsQUFNRSxBQUdGLEFBR0EsQUFHQSxBQU1FLEFBR0YsQUFLQSxBQUlBLEFBS0wsQUFJQyxBQU1NLEFBR0YsQUFHQSxBQUtFLEFBR04sQUFLQSxBQUtFLFVBakNHLENBSU4sQUFvQlosQUFLQSxFQUtBLEVBbEdjLEFBS0gsQUFlWCxBQUdBLEFBR2UsQUFTZixBQUdBLEFBR2EsQUFTSyxBQUtFLEFBSVAsQUFrQmIsQUFHQSxDQXJGZSxDQWhCRixBQXNDYixBQWVBLEFBZUEsQUEyQkEsQUFXQSxDQWhHWSxHQWdGWixLQS9EZ0IsQUFvQ2hCLEFBa0JvQixBQUtwQixFQXRDQSxDQTFCbUIsQ0FYUixDQU1NLEFBdURHLEVBS3BCLFFBakVVLENBZ0JlLEVBc0R6QixJQWhFRixBQUtBLENBa0RFLEVBNURGLGdCQWdCcUIsT0F6QkcsWUEwQkcsS0E3QjNCLG9CQThCd0Isc0JBQ0osa0JBQ0EsQ0E1QlIsVUFDTyxPQTRCbkIsVUEzQkEiLCJmaWxlIjoiSDpcXNCh0LDQvNC+0L7QsdGD0YfQsNGO0YHRjFxcQW50YWdvU29mdFRlc3RcXHBhZ2Utb2YtbWFuYWdlXFxjb21wb25lbnRzXFxwcml2YXRlSW5mT2ZVc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJpdmF0ZUluZk9mVXNlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLXVzZXItd3JhcHBlclwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInVzZXItaW1nXCIgc3JjPVwiL2ltZy92ZXJvbmlrYS1pbWcuanBnXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLW1haW5cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+0JLQtdGA0L7QvdC40LrQsCDQoNC+0YHRgtC+0LLQsDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGF0dXNcIj7QnNC10L3QtdC00LbQtdGAINC/0L4g0L/RgNC+0LTQsNC20LDQvDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsb2dhblwiPlxuICAgICAgICAgICAg0J/QvtC00LHQtdGA0YMg0LTQu9GPINCy0LDRgSDRgdCw0LzRi9C1INC70YPRh9GI0LjQtSDQv9GA0LXQtNC70L7QttC10L3QuNGPLiDQnNC+0Lgg0YPRgdC70YPQs9C4INCw0LHRgdC+0LvRjtGC0L3QvlxuICAgICAgICAgICAg0LHQtdGB0L/Qu9Cw0YLQvdGLXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pbmZvLXVzZXItd3JhcHBlciB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICAuaW5mby1tYWluIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAudXNlci1pbWcge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgfVxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGNvbG9yOiAjODA4MDgwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNsb2dhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDU0cHg7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDVweCA1cHggNDVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmYmM4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgICAgICAgICAuaW5mby11c2VyLXdyYXBwZXIge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbG9nYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgd2lkdGg6IDExMS41JTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC5pbmZvLXVzZXItd3JhcHBlciB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3RhdHVzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNsb2dhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB3aWR0aDogMTEzJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xuICAgICAgICAgIC5pbmZvLXVzZXItd3JhcHBlciB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbG9nYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDExNSU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTQ1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbmZvLW1haW4ge1xuICAgICAgICAgICAgd2lkdGg6IDczJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC51c2VyLWltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI3JTtcbiAgICAgICAgICAgIHdpZHRoOiAyNyU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDkwcHgpIHtcbiAgICAgICAgICAuaW5mby11c2VyLXdyYXBwZXIge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdGF0dXMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xvZ2FuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xuICAgICAgICAgIC5pbmZvLXVzZXItd3JhcHBlciB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNsb2dhbiB7XG4gICAgICAgICAgICB3aWR0aDogMTE2JTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTBweCkge1xuICAgICAgICAgIC5zbG9nYW4ge1xuICAgICAgICAgICAgd2lkdGg6IDExOCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAgICAgICAuc2xvZ2FuIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMTkuNSU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgcHJpdmF0ZUluZk9mVXNlcjtcbiJdfQ== */\n/*@ sourceURL=H:\\\\\u0421\u0430\u043C\u043E\u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C\\\\AntagoSoftTest\\\\page-of-manage\\\\components\\\\privateInfOfUser.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (privateInfOfUser);

/***/ }),

/***/ "./components/serviceType.js":
/*!***********************************!*\
  !*** ./components/serviceType.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "H:\\\u0421\u0430\u043C\u043E\u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C\\AntagoSoftTest\\page-of-manage\\components\\serviceType.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const serviceType = ({
  serviceData,
  generalCount,
  widthOfServices
}) => {
  const {
    0: widthService,
    1: setWidthService
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const widthOfLineStatistics = widthOfServices / 100 * 85 / generalCount * serviceData.count;
    setWidthService(widthOfLineStatistics);
  }, [widthOfServices]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4079183032", [serviceData.background, widthService]]]) + " " + "service-type",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4079183032", [serviceData.background, widthService]]]) + " " + "type",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, serviceData.type), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4079183032", [serviceData.background, widthService]]]) + " " + "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, serviceData.count)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4079183032",
    dynamic: [serviceData.background, widthService],
    __self: undefined
  }, `.service-type.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:5px;font-size:19px;height:24px;}.type.__jsx-style-dynamic-selector{background:${serviceData.background};white-space:nowrap;width:${widthService}px;border-bottom-right-radius:5px;border-top-right-radius:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.count.__jsx-style-dynamic-selector{font-weight:600;}@media only screen and (max-width:660px){.service-type.__jsx-style-dynamic-selector{font-size:17px;}}@media only screen and (max-width:600px){.service-type.__jsx-style-dynamic-selector{font-size:15px;}}@media only screen and (max-width:540px){.service-type.__jsx-style-dynamic-selector{font-size:13px;margin-bottom:2px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkg6XFzQodCw0LzQvtC+0LHRg9GH0LDRjtGB0YxcXEFudGFnb1NvZnRUZXN0XFxwYWdlLW9mLW1hbmFnZVxcY29tcG9uZW50c1xcc2VydmljZVR5cGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JrQixBQUd3QixBQU8yQixBQVN4QixBQUlDLEFBS0EsQUFLQSxlQVRqQixBQUtBLEFBS29CLENBZHRCLGlCQWVFLE9BeEJtQixtQkFDa0IsZUFSUCxzQkFTQywrQkFDSCw0QkFDZixrQ0FWSyxrQkFDSCxlQUNILE9BU08sS0FSckIsd0ZBU0EiLCJmaWxlIjoiSDpcXNCh0LDQvNC+0L7QsdGD0YfQsNGO0YHRjFxcQW50YWdvU29mdFRlc3RcXHBhZ2Utb2YtbWFuYWdlXFxjb21wb25lbnRzXFxzZXJ2aWNlVHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IHNlcnZpY2VUeXBlID0gKHsgc2VydmljZURhdGEsIGdlbmVyYWxDb3VudCwgd2lkdGhPZlNlcnZpY2VzIH0pID0+IHtcbiAgY29uc3QgW3dpZHRoU2VydmljZSwgc2V0V2lkdGhTZXJ2aWNlXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB3aWR0aE9mTGluZVN0YXRpc3RpY3MgPVxuICAgICAgKCgod2lkdGhPZlNlcnZpY2VzIC8gMTAwKSAqIDg1KSAvIGdlbmVyYWxDb3VudCkgKiBzZXJ2aWNlRGF0YS5jb3VudDtcbiAgICBzZXRXaWR0aFNlcnZpY2Uod2lkdGhPZkxpbmVTdGF0aXN0aWNzKTtcbiAgfSwgW3dpZHRoT2ZTZXJ2aWNlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS10eXBlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR5cGVcIj57c2VydmljZURhdGEudHlwZX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+e3NlcnZpY2VEYXRhLmNvdW50fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuc2VydmljZS10eXBlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgfVxuICAgICAgICAudHlwZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtzZXJ2aWNlRGF0YS5iYWNrZ3JvdW5kfTtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIHdpZHRoOiAke3dpZHRoU2VydmljZX1weDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jb3VudCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2MHB4KSB7XG4gICAgICAgICAgLnNlcnZpY2UtdHlwZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAuc2VydmljZS10eXBlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xuICAgICAgICAgIC5zZXJ2aWNlLXR5cGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2VUeXBlO1xuIl19 */
/*@ sourceURL=H:\\Самообучаюсь\\AntagoSoftTest\\page-of-manage\\components\\serviceType.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (serviceType);

/***/ }),

/***/ "./components/servicesWireframe.js":
/*!*****************************************!*\
  !*** ./components/servicesWireframe.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _serviceType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serviceType */ "./components/serviceType.js");
var _jsxFileName = "H:\\\u0421\u0430\u043C\u043E\u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C\\AntagoSoftTest\\page-of-manage\\components\\servicesWireframe.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const servicesWireframe = () => {
  const services = [{
    type: "Ручное бронирование",
    count: 11,
    background: "#B1E19B"
  }, {
    type: "Пакетные туры",
    count: 3,
    background: "#ACE2F8"
  }, {
    type: "Отели",
    count: 1,
    background: "#ACE2F8"
  }];
  const generalCount = services.map(type => type.count).reduce((acc, sum) => acc + sum, 0);
  const {
    0: widthServices,
    1: setWidthServices
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setWidthServices(document.querySelector(".services").offsetWidth);
    addEventListener("resize", () => {
      setWidthServices(document.querySelector(".services").offsetWidth);
    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2363816336" + " " + "services-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "jsx-2363816336" + " " + "intro-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "\u0423\u0441\u043B\u0443\u0433"), __jsx("div", {
    className: "jsx-2363816336" + " " + "services",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, services.map((type, index) => __jsx("div", {
    key: index,
    className: "jsx-2363816336",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(_serviceType__WEBPACK_IMPORTED_MODULE_2__["default"], {
    serviceData: type,
    generalCount: generalCount,
    widthOfServices: widthServices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "jsx-2363816336" + " " + "general-count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "jsx-2363816336" + " " + "count-intro-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "\u0412\u0441\u0435\u0433\u043E"), __jsx("span", {
    className: "jsx-2363816336" + " " + "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, generalCount))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2363816336",
    __self: undefined
  }, ".services-wrapper.jsx-2363816336{width:70.4%;margin-left:auto;}.services.jsx-2363816336{border-left:1px solid #dadada;padding-right:41px;}.intro-title.jsx-2363816336{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;border-bottom:1px solid #dadada;font-size:19px;padding-right:34px;padding-bottom:7px;margin-bottom:16px;}.general-count.jsx-2363816336{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-top:1px solid #dadada;font-size:22px;font-weight:600;padding-right:41px;padding-top:7px;margin-top:16px;}@media only screen and (max-width:660px){.intro-title.jsx-2363816336{font-size:17px;}.general-count.jsx-2363816336{font-size:20px;}}@media only screen and (max-width:600px){.intro-title.jsx-2363816336{font-size:15px;}.general-count.jsx-2363816336{font-size:18px;}}@media only screen and (max-width:540px){.intro-title.jsx-2363816336{font-size:13px;}.general-count.jsx-2363816336{font-size:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkg6XFzQodCw0LzQvtC+0LHRg9GH0LDRjtGB0YxcXEFudGFnb1NvZnRUZXN0XFxwYWdlLW9mLW1hbmFnZVxcY29tcG9uZW50c1xcc2VydmljZXNXaXJlZnJhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNrQixBQUd1QixBQUlrQixBQUlqQixBQVNBLEFBV0ksQUFHQSxBQUtBLEFBR0EsQUFLQSxBQUdBLFlBOUNBLEdBNEJqQixBQUdBLEFBS0EsQUFHQSxBQUtBLEFBR0EsY0E5Q0YsQ0FHcUIsbUJBQ3JCLHlCQUcyQixBQVNLLGlHQVJFLGtCQVNILGNBUmQsZUFDSSxBQVFKLGVBQ0MsSUFSRyxZQVNBLE9BUkEsWUFTSCxPQVJsQixTQVNrQixnQkFDbEIiLCJmaWxlIjoiSDpcXNCh0LDQvNC+0L7QsdGD0YfQsNGO0YHRjFxcQW50YWdvU29mdFRlc3RcXHBhZ2Utb2YtbWFuYWdlXFxjb21wb25lbnRzXFxzZXJ2aWNlc1dpcmVmcmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZXJ2aWNlVHlwZSBmcm9tIFwiLi9zZXJ2aWNlVHlwZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3Qgc2VydmljZXNXaXJlZnJhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHNlcnZpY2VzID0gW1xuICAgIHsgdHlwZTogXCLQoNGD0YfQvdC+0LUg0LHRgNC+0L3QuNGA0L7QstCw0L3QuNC1XCIsIGNvdW50OiAxMSwgYmFja2dyb3VuZDogXCIjQjFFMTlCXCIgfSxcbiAgICB7IHR5cGU6IFwi0J/QsNC60LXRgtC90YvQtSDRgtGD0YDRi1wiLCBjb3VudDogMywgYmFja2dyb3VuZDogXCIjQUNFMkY4XCIgfSxcbiAgICB7IHR5cGU6IFwi0J7RgtC10LvQuFwiLCBjb3VudDogMSwgYmFja2dyb3VuZDogXCIjQUNFMkY4XCIgfSxcbiAgXTtcbiAgY29uc3QgZ2VuZXJhbENvdW50ID0gc2VydmljZXNcbiAgICAubWFwKCh0eXBlKSA9PiB0eXBlLmNvdW50KVxuICAgIC5yZWR1Y2UoKGFjYywgc3VtKSA9PiBhY2MgKyBzdW0sIDApO1xuXG4gIGNvbnN0IFt3aWR0aFNlcnZpY2VzLCBzZXRXaWR0aFNlcnZpY2VzXSA9IHVzZVN0YXRlKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2lkdGhTZXJ2aWNlcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlcnZpY2VzXCIpLm9mZnNldFdpZHRoKTtcbiAgICBhZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIHNldFdpZHRoU2VydmljZXMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2aWNlc1wiKS5vZmZzZXRXaWR0aCk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzLXdyYXBwZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW50cm8tdGl0bGVcIj7Qo9GB0LvRg9CzPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzXCI+XG4gICAgICAgICAge3NlcnZpY2VzLm1hcCgodHlwZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxTZXJ2aWNlVHlwZVxuICAgICAgICAgICAgICAgIHNlcnZpY2VEYXRhPXt0eXBlfVxuICAgICAgICAgICAgICAgIGdlbmVyYWxDb3VudD17Z2VuZXJhbENvdW50fVxuICAgICAgICAgICAgICAgIHdpZHRoT2ZTZXJ2aWNlcz17d2lkdGhTZXJ2aWNlc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmFsLWNvdW50XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnQtaW50cm8tdGl0bGVcIj7QktGB0LXQs9C+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+e2dlbmVyYWxDb3VudH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zZXJ2aWNlcy13cmFwcGVyIHtcbiAgICAgICAgICB3aWR0aDogNzAuNCU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLnNlcnZpY2VzIHtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkYWRhZGE7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNDFweDtcbiAgICAgICAgfVxuICAgICAgICAuaW50cm8tdGl0bGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RhZGFkYTtcbiAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMzRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmdlbmVyYWwtY291bnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGFkYWRhO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQxcHg7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDdweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgICAgICAgICAuaW50cm8tdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZ2VuZXJhbC1jb3VudCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAuaW50cm8tdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZ2VuZXJhbC1jb3VudCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgICAgICAgICAuaW50cm8tdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZ2VuZXJhbC1jb3VudCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgc2VydmljZXNXaXJlZnJhbWU7XG4iXX0= */\n/*@ sourceURL=H:\\\\\u0421\u0430\u043C\u043E\u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C\\\\AntagoSoftTest\\\\page-of-manage\\\\components\\\\servicesWireframe.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (servicesWireframe);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_generalInfOfUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/generalInfOfUser */ "./components/generalInfOfUser.js");
/* harmony import */ var _components_feedbacksTabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/feedbacksTabs */ "./components/feedbacksTabs.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/form */ "./components/form.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "H:\\\u0421\u0430\u043C\u043E\u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C\\AntagoSoftTest\\page-of-manage\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const Home = ({
  notes
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-853535370",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Page Of Manager Veronika"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-853535370",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap",
    rel: "stylesheet",
    className: "jsx-853535370",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-853535370" + " " + "main-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-853535370" + " " + "section-general-inf-user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_components_generalInfOfUser__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-853535370" + " " + "section-feedbacks",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-853535370" + " " + "form-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-853535370" + " " + "page-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1378637255",
    __self: undefined
  }, ".main-container.jsx-853535370{font-family:\"Open Sans\",sans-serif;color:#333333;max-width:720px;margin:auto;box-sizing:border-box;padding:14px 20px;}.section-general-inf-user.jsx-853535370{margin-bottom:27px;}.form-container.jsx-853535370{background:#f2f2f2;}.page-content.jsx-853535370{max-width:720px;margin:auto;padding:0px 20px;box-sizing:border-box;}@media only screen and (max-width:540px){.section-general-inf-user.jsx-853535370{margin-bottom:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkg6XFzQodCw0LzQvtC+0LHRg9GH0LDRjtGB0YxcXEFudGFnb1NvZnRUZXN0XFxwYWdlLW9mLW1hbmFnZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCa0IsQUFHK0MsQUFRakIsQUFHQSxBQUdILEFBT0ssZ0JBTlQsR0FOZCxBQUdBLEFBVUUsU0FOaUIsT0FmSCxVQWdCUSxJQWZOLGdCQUNKLEVBZWQsVUFkd0Isc0JBQ0osa0JBQ3BCIiwiZmlsZSI6Ikg6XFzQodCw0LzQvtC+0LHRg9GH0LDRjtGB0YxcXEFudGFnb1NvZnRUZXN0XFxwYWdlLW9mLW1hbmFnZVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEdlbmVyYWxJbmZPZlVzZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2VuZXJhbEluZk9mVXNlclwiO1xuaW1wb3J0IEZlZWRiYWNrc1RhYnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZmVlZGJhY2tzVGFic1wiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybVwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxuY29uc3QgSG9tZSA9ICh7IG5vdGVzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5QYWdlIE9mIE1hbmFnZXIgVmVyb25pa2E8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWdlbmVyYWwtaW5mLXVzZXJcIj5cbiAgICAgICAgICA8R2VuZXJhbEluZk9mVXNlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWZlZWRiYWNrc1wiPlxuICAgICAgICAgIHsvKiA8RmVlZGJhY2tzVGFicyBmZWVkYmFja3NDb250ZW50PXtub3Rlc30gLz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCI+XG4gICAgICAgICAgPEZvcm0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuc2VjdGlvbi1nZW5lcmFsLWluZi11c2VyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyN3B4O1xuICAgICAgICB9XG4gICAgICAgIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgICAgfVxuICAgICAgICAucGFnZS1jb250ZW50IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgICAgICAgICAuc2VjdGlvbi1nZW5lcmFsLWluZi11c2VyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcbi8vIEhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbm90ZXNcIik7XG4vLyAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vICAgcmV0dXJuIHsgbm90ZXM6IGRhdGEgfTtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=H:\\\\\u0421\u0430\u043C\u043E\u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C\\\\AntagoSoftTest\\\\page-of-manage\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "523879908",
    __self: undefined
  }, "body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkg6XFzQodCw0LzQvtC+0LHRg9GH0LDRjtGB0YxcXEFudGFnb1NvZnRUZXN0XFxwYWdlLW9mLW1hbmFnZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEUyxBQUdzQixTQUNYIiwiZmlsZSI6Ikg6XFzQodCw0LzQvtC+0LHRg9GH0LDRjtGB0YxcXEFudGFnb1NvZnRUZXN0XFxwYWdlLW9mLW1hbmFnZVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEdlbmVyYWxJbmZPZlVzZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2VuZXJhbEluZk9mVXNlclwiO1xuaW1wb3J0IEZlZWRiYWNrc1RhYnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZmVlZGJhY2tzVGFic1wiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybVwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxuY29uc3QgSG9tZSA9ICh7IG5vdGVzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5QYWdlIE9mIE1hbmFnZXIgVmVyb25pa2E8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWdlbmVyYWwtaW5mLXVzZXJcIj5cbiAgICAgICAgICA8R2VuZXJhbEluZk9mVXNlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWZlZWRiYWNrc1wiPlxuICAgICAgICAgIHsvKiA8RmVlZGJhY2tzVGFicyBmZWVkYmFja3NDb250ZW50PXtub3Rlc30gLz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCI+XG4gICAgICAgICAgPEZvcm0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuc2VjdGlvbi1nZW5lcmFsLWluZi11c2VyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyN3B4O1xuICAgICAgICB9XG4gICAgICAgIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgICAgfVxuICAgICAgICAucGFnZS1jb250ZW50IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgICAgICAgICAuc2VjdGlvbi1nZW5lcmFsLWluZi11c2VyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcbi8vIEhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbm90ZXNcIik7XG4vLyAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vICAgcmV0dXJuIHsgbm90ZXM6IGRhdGEgfTtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=H:\\\\\u0421\u0430\u043C\u043E\u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C\\\\AntagoSoftTest\\\\page-of-manage\\\\pages\\\\index.js */"));
}; // Home.getInitialProps = async () => {
//   const res = await fetch("http://localhost:3000/api/notes");
//   const { data } = await res.json();
//   return { notes: data };
// };


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\Самообучаюсь\AntagoSoftTest\page-of-manage\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-tabs":
/*!*****************************!*\
  !*** external "react-tabs" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tabs");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map