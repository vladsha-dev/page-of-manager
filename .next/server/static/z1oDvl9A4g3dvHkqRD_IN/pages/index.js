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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "65ip":
/***/ (function(module, exports) {

module.exports = require("react-tabs");

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/privateInfOfUser.js


var __jsx = external_react_default.a.createElement;

const privateInfOfUser = () => {
  return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
    className: "jsx-781109344" + " " + "info-user-wrapper"
  }, __jsx("img", {
    src: "/img/veronika-img.jpg",
    className: "jsx-781109344" + " " + "user-img"
  }), __jsx("div", {
    className: "jsx-781109344" + " " + "info-main"
  }, __jsx("span", {
    className: "jsx-781109344" + " " + "name"
  }, "\u0412\u0435\u0440\u043E\u043D\u0438\u043A\u0430 \u0420\u043E\u0441\u0442\u043E\u0432\u0430"), __jsx("span", {
    className: "jsx-781109344" + " " + "status"
  }, "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u043E \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C"), __jsx("div", {
    className: "jsx-781109344" + " " + "slogan"
  }, "\u041F\u043E\u0434\u0431\u0435\u0440\u0443 \u0434\u043B\u044F \u0432\u0430\u0441 \u0441\u0430\u043C\u044B\u0435 \u043B\u0443\u0447\u0448\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F. \u041C\u043E\u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B"))), __jsx(style_default.a, {
    id: "781109344"
  }, [".info-user-wrapper.jsx-781109344{line-height:36px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".info-main.jsx-781109344{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:70%;margin-left:10px;}", ".user-img.jsx-781109344{border-radius:50%;z-index:100;height:30%;width:30%;}", ".name.jsx-781109344{font-weight:600;font-size:22px;padding-top:10px;}", ".status.jsx-781109344{font-size:18px;color:#808080;margin-bottom:10px;}", ".slogan.jsx-781109344{font-size:20px;width:auto;min-height:54px;padding:5px 5px 5px 45px;background:#fffbc8;border:1px solid #dadada;box-sizing:border-box;border-radius:5px;margin-left:-50px;}", "@media only screen and (max-width:660px){.info-user-wrapper.jsx-781109344{line-height:28px;}.name.jsx-781109344{font-size:20px;}.status.jsx-781109344{font-size:16px;}.slogan.jsx-781109344{font-size:18px;width:111.5%;}}", "@media only screen and (max-width:600px){.info-user-wrapper.jsx-781109344{line-height:26px;}.name.jsx-781109344{font-size:18px;}.status.jsx-781109344{font-size:14px;}.slogan.jsx-781109344{font-size:16px;width:113%;}}", "@media only screen and (max-width:540px){.info-user-wrapper.jsx-781109344{line-height:20px;}.name.jsx-781109344{font-size:16px;padding-top:6px;margin-bottom:3px;}.status.jsx-781109344{font-size:12px;margin-bottom:5px;}.slogan.jsx-781109344{font-size:14px;width:115%;margin-left:-45px;}.info-main.jsx-781109344{width:73%;margin-left:8px;}.user-img.jsx-781109344{height:27%;width:27%;}}", "@media only screen and (max-width:490px){.info-user-wrapper.jsx-781109344{line-height:20px;}.status.jsx-781109344{font-size:11px;}.slogan.jsx-781109344{font-size:13px;}}", "@media only screen and (max-width:430px){.info-user-wrapper.jsx-781109344{line-height:17px;}.slogan.jsx-781109344{width:116%;}}", "@media only screen and (max-width:390px){.slogan.jsx-781109344{width:118%;}}", "@media only screen and (max-width:360px){.slogan.jsx-781109344{width:119.5%;}}"]));
};

/* harmony default export */ var components_privateInfOfUser = (privateInfOfUser);
// CONCATENATED MODULE: ./components/serviceType.js


var serviceType_jsx = external_react_default.a.createElement;


const serviceType = ({
  serviceData,
  generalCount,
  widthOfServices
}) => {
  const {
    0: widthService,
    1: setWidthService
  } = Object(external_react_["useState"])();
  Object(external_react_["useEffect"])(() => {
    const widthOfLineStatistics = widthOfServices / 100 * 85 / generalCount * serviceData.count;
    setWidthService(widthOfLineStatistics);
  }, [widthOfServices]);
  return serviceType_jsx(external_react_default.a.Fragment, null, serviceType_jsx("div", {
    className: style_default.a.dynamic([["4079183032", [serviceData.background, widthService]]]) + " " + "service-type"
  }, serviceType_jsx("span", {
    className: style_default.a.dynamic([["4079183032", [serviceData.background, widthService]]]) + " " + "type"
  }, serviceData.type), serviceType_jsx("span", {
    className: style_default.a.dynamic([["4079183032", [serviceData.background, widthService]]]) + " " + "count"
  }, serviceData.count)), serviceType_jsx(style_default.a, {
    id: "4079183032",
    dynamic: [serviceData.background, widthService]
  }, [".service-type.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:5px;font-size:19px;height:24px;}", `.type.__jsx-style-dynamic-selector{background:${serviceData.background};white-space:nowrap;width:${widthService}px;border-bottom-right-radius:5px;border-top-right-radius:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}`, ".count.__jsx-style-dynamic-selector{font-weight:600;}", "@media only screen and (max-width:660px){.service-type.__jsx-style-dynamic-selector{font-size:17px;}}", "@media only screen and (max-width:600px){.service-type.__jsx-style-dynamic-selector{font-size:15px;}}", "@media only screen and (max-width:540px){.service-type.__jsx-style-dynamic-selector{font-size:13px;margin-bottom:2px;}}"]));
};

/* harmony default export */ var components_serviceType = (serviceType);
// CONCATENATED MODULE: ./components/servicesWireframe.js


var servicesWireframe_jsx = external_react_default.a.createElement;



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
  } = Object(external_react_["useState"])();
  Object(external_react_["useEffect"])(() => {
    setWidthServices(document.querySelector(".services").offsetWidth);
    addEventListener("resize", () => {
      setWidthServices(document.querySelector(".services").offsetWidth);
    });
  });
  return servicesWireframe_jsx(external_react_default.a.Fragment, null, servicesWireframe_jsx("div", {
    className: "jsx-2363816336" + " " + "services-wrapper"
  }, servicesWireframe_jsx("span", {
    className: "jsx-2363816336" + " " + "intro-title"
  }, "\u0423\u0441\u043B\u0443\u0433"), servicesWireframe_jsx("div", {
    className: "jsx-2363816336" + " " + "services"
  }, services.map((type, index) => servicesWireframe_jsx("div", {
    key: index,
    className: "jsx-2363816336"
  }, servicesWireframe_jsx(components_serviceType, {
    serviceData: type,
    generalCount: generalCount,
    widthOfServices: widthServices
  })))), servicesWireframe_jsx("div", {
    className: "jsx-2363816336" + " " + "general-count"
  }, servicesWireframe_jsx("span", {
    className: "jsx-2363816336" + " " + "count-intro-title"
  }, "\u0412\u0441\u0435\u0433\u043E"), servicesWireframe_jsx("span", {
    className: "jsx-2363816336" + " " + "count"
  }, generalCount))), servicesWireframe_jsx(style_default.a, {
    id: "2363816336"
  }, [".services-wrapper.jsx-2363816336{width:70.4%;margin-left:auto;}", ".services.jsx-2363816336{border-left:1px solid #dadada;padding-right:41px;}", ".intro-title.jsx-2363816336{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;border-bottom:1px solid #dadada;font-size:19px;padding-right:34px;padding-bottom:7px;margin-bottom:16px;}", ".general-count.jsx-2363816336{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-top:1px solid #dadada;font-size:22px;font-weight:600;padding-right:41px;padding-top:7px;margin-top:16px;}", "@media only screen and (max-width:660px){.intro-title.jsx-2363816336{font-size:17px;}.general-count.jsx-2363816336{font-size:20px;}}", "@media only screen and (max-width:600px){.intro-title.jsx-2363816336{font-size:15px;}.general-count.jsx-2363816336{font-size:18px;}}", "@media only screen and (max-width:540px){.intro-title.jsx-2363816336{font-size:13px;}.general-count.jsx-2363816336{font-size:16px;}}"]));
};

/* harmony default export */ var components_servicesWireframe = (servicesWireframe);
// CONCATENATED MODULE: ./components/generalInfOfUser.js

var generalInfOfUser_jsx = external_react_default.a.createElement;



const generalInfOfUser = () => {
  return generalInfOfUser_jsx(external_react_default.a.Fragment, null, generalInfOfUser_jsx("div", {
    className: "general-inf-wrapper"
  }, generalInfOfUser_jsx(components_privateInfOfUser, null), generalInfOfUser_jsx(components_servicesWireframe, null)));
};

/* harmony default export */ var components_generalInfOfUser = (generalInfOfUser);
// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__("65ip");

// CONCATENATED MODULE: ./components/feedback.js


var feedback_jsx = external_react_default.a.createElement;

const feedback_feedback = ({
  feedback
}) => {
  return feedback_jsx(external_react_default.a.Fragment, null, feedback_jsx("div", {
    className: "jsx-3613597189" + " " + "feedback-wrapper"
  }, feedback_jsx("div", {
    className: "jsx-3613597189" + " " + "info-name-date"
  }, feedback_jsx("span", {
    className: "jsx-3613597189" + " " + "name"
  }, feedback.name), feedback_jsx("span", {
    className: "jsx-3613597189" + " " + "date"
  }, feedback.date)), feedback_jsx("div", {
    className: "jsx-3613597189" + " " + "main-content-feedback"
  }, feedback.textOfFeedback)), feedback_jsx(style_default.a, {
    id: "3613597189"
  }, [".feedback-wrapper.jsx-3613597189{margin-bottom:30px;}", ".info-name-date.jsx-3613597189{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;margin-bottom:20px;}", ".name.jsx-3613597189{margin-right:10px;font-size:20px;font-weight:600;}", ".date.jsx-3613597189{font-size:16px;color:#808080;}", ".main-content-feedback.jsx-3613597189{font-size:20px;line-height:26px;box-shadow:0px 4px 10px rgba(128,128,128,0.1);padding:15px 15px 15px 20px;background:#f2fbff;border:1px solid #c4cbcf;position:relative;}", ".main-content-feedback.jsx-3613597189:before{content:\" \";position:absolute;width:0;height:0;border-style:solid;border-width:20px 0 0 18px;border-color:transparent transparent transparent #c4cbcf;top:-15px;left:30px;z-index:-1;}", ".main-content-feedback.jsx-3613597189:after{content:\" \";position:absolute;width:0;height:0;border-style:solid;border-width:14px 0 0 14px;border-color:transparent transparent transparent #f2fbff;top:-12px;left:31px;}", "@media only screen and (max-width:660px){.name.jsx-3613597189{font-size:18px;}.date.jsx-3613597189{font-size:14px;}.main-content-feedback.jsx-3613597189{font-size:18px;line-height:24px;}}", "@media only screen and (max-width:600px){.name.jsx-3613597189{font-size:16px;}.date.jsx-3613597189{font-size:12px;}.main-content-feedback.jsx-3613597189{font-size:16px;line-height:22px;}}", "@media only screen and (max-width:540px){.name.jsx-3613597189{font-size:14px;}.date.jsx-3613597189{font-size:10px;}.main-content-feedback.jsx-3613597189{font-size:14px;line-height:19px;padding:13px 15px 15px 20px;}.info-name-date.jsx-3613597189{margin-bottom:11px;}.main-content-feedback.jsx-3613597189:before{border-width:16px 0 0 14px;top:-11px;left:23px;}.main-content-feedback.jsx-3613597189:after{border-width:10px 0 0 10px;top:-8px;left:24px;}.feedback-wrapper.jsx-3613597189{margin-bottom:16px;}}"]));
};

/* harmony default export */ var components_feedback = (feedback_feedback);
// CONCATENATED MODULE: ./components/feedbacksTabs.js


var feedbacksTabs_jsx = external_react_default.a.createElement;



const feedbacksTabs_privateInfOfUser = ({
  feedbacksContent
}) => {
  Object(external_react_tabs_["resetIdCounter"])();
  return feedbacksTabs_jsx(external_react_default.a.Fragment, null, feedbacksTabs_jsx(external_react_tabs_["Tabs"], null, feedbacksTabs_jsx("div", {
    className: "jsx-2270125494" + " " + "status-wrapper"
  }, feedbacksTabs_jsx(external_react_tabs_["TabList"], null, feedbacksTabs_jsx(external_react_tabs_["Tab"], null, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B"), feedbacksTabs_jsx(external_react_tabs_["Tab"], null, "\u0412\u0441\u0435 \u043E\u0442\u0437\u044B\u0432\u044B")), feedbacksTabs_jsx("div", {
    className: "jsx-2270125494" + " " + "likes-feedbacks-amount"
  }, feedbacksTabs_jsx("div", {
    className: "jsx-2270125494" + " " + "likes-info"
  }, feedbacksTabs_jsx("img", {
    src: "/icons/like.svg",
    className: "jsx-2270125494"
  }), feedbacksTabs_jsx("span", {
    className: "jsx-2270125494" + " " + "likes-amount"
  }, "131")), feedbacksTabs_jsx("div", {
    className: "jsx-2270125494" + " " + "feedbacks-info"
  }, feedbacksTabs_jsx("img", {
    src: "/icons/comment.svg",
    className: "jsx-2270125494"
  }), feedbacksTabs_jsx("span", {
    className: "jsx-2270125494" + " " + "feedbacks-amount"
  }, feedbacksContent.length)))), feedbacksTabs_jsx(external_react_tabs_["TabPanel"], null, feedbacksContent.filter(feedback => (Date.UTC(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate(), 0, 0, 0) - feedback.timeInMilliseconds) / (60 * 60000) / 24 <= 2).map((feedback, index) => feedbacksTabs_jsx(components_feedback, {
    feedback: feedback,
    key: index
  }))), feedbacksTabs_jsx(external_react_tabs_["TabPanel"], null, feedbacksContent.map((feedback, index) => feedbacksTabs_jsx(components_feedback, {
    feedback: feedback,
    key: index
  })))), feedbacksTabs_jsx(style_default.a, {
    id: "3938249765"
  }, [".status-wrapper.jsx-2270125494{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;}", ".likes-feedbacks-amount.jsx-2270125494{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:20px;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}", ".likes-feedbacks-amount.jsx-2270125494 img.jsx-2270125494{width:24px;height:22px;}", ".likes-info.jsx-2270125494,.feedbacks-info.jsx-2270125494{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".likes-amount.jsx-2270125494,.feedbacks-amount.jsx-2270125494{margin-left:4px;}", ".feedbacks-info.jsx-2270125494{margin-left:18px;}", "@media only screen and (max-width:660px){.likes-feedbacks-amount.jsx-2270125494{font-size:18px;}.likes-feedbacks-amount.jsx-2270125494 img.jsx-2270125494{width:21px;height:19px;}}", "@media only screen and (max-width:600px){.likes-feedbacks-amount.jsx-2270125494{font-size:16px;}.likes-feedbacks-amount.jsx-2270125494 img.jsx-2270125494{width:19px;height:17px;}}", "@media only screen and (max-width:540px){.likes-feedbacks-amount.jsx-2270125494{font-size:12px;}.likes-feedbacks-amount.jsx-2270125494 img.jsx-2270125494{width:14px;height:13px;}.status-wrapper.jsx-2270125494{margin-bottom:10px;}}", "@media only screen and (max-width:490px){.likes-feedbacks-amount.jsx-2270125494{font-size:11px;}.likes-feedbacks-amount.jsx-2270125494 img.jsx-2270125494{width:11px;height:12px;}.feedbacks-info.jsx-2270125494{margin-left:8px;}.likes-amount.jsx-2270125494,.feedbacks-amount.jsx-2270125494{margin-left:2px;}}", "@media only screen and (max-width:430px){.feedbacks-info.jsx-2270125494{margin-left:5px;}}"]), feedbacksTabs_jsx(style_default.a, {
    id: "1970921786"
  }, [".react-tabs__tab-list{list-style:none;margin-block-start:0;margin-block-end:0;padding-inline-start:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".react-tabs__tab{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:20px;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;color:#005da1;-webkit-text-decoration-line:underline;text-decoration-line:underline;cursor:pointer;margin-right:15px;outline:none;}", ".react-tabs__tab--selected{font-size:22px;font-weight:600;color:#333333;-webkit-text-decoration:none;text-decoration:none;cursor:default;}", "@media only screen and (max-width:660px){.react-tabs__tab--selected{font-size:20px !important;}.react-tabs__tab{font-size:18px;}}", "@media only screen and (max-width:600px){.react-tabs__tab--selected{font-size:18px !important;}.react-tabs__tab{font-size:16px;margin-right:10px;}}", "@media only screen and (max-width:540px){.react-tabs__tab--selected{font-size:16px !important;}.react-tabs__tab{font-size:14px;}}", "@media only screen and (max-width:490px){.react-tabs__tab--selected{font-size:15px !important;}.react-tabs__tab{font-size:13px;margin-right:7px;}}"]));
};

/* harmony default export */ var feedbacksTabs = (feedbacksTabs_privateInfOfUser);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./components/form.js


var form_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const SignupSchema = external_yup_["object"]().shape({
  name: external_yup_["string"]().min(2, "Очень короткое имя").max(50, "Очень длинное имя").required("Поле не может быть пустым"),
  textOfFeedback: external_yup_["string"]().min(0, "Очень короткий отзыв").max(300, "Очень длинный отзыв").required("Поле не может быть пустым")
});

const form_form = () => {
  const {
    0: isSubmitting,
    1: setIsSubmitting
  } = Object(external_react_["useState"])(false);
  const {
    0: form,
    1: setForm
  } = Object(external_react_["useState"])();
  Object(external_react_["useEffect"])(() => {
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
      const res = await external_isomorphic_unfetch_default()("http://localhost:3000/api/notes", {
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

  return form_jsx(external_react_default.a.Fragment, null, form_jsx(external_formik_["Formik"], {
    initialValues: {
      name: "",
      textOfFeedback: ""
    },
    validationSchema: SignupSchema,
    onSubmit: async values => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setForm(values);
      setIsSubmitting(!isSubmitting);
    }
  }, ({
    errors,
    touched,
    values
  }) => form_jsx(external_formik_["Form"], {
    className: "form"
  }, form_jsx("div", {
    className: "jsx-2045612794" + " " + "row"
  }, form_jsx(external_formik_["Field"], {
    name: "name",
    className: "form-input-name",
    placeholder: "\u0418\u043C\u044F",
    type: "text"
  }), errors.name && touched.name ? form_jsx("div", {
    className: "jsx-2045612794" + " " + "error"
  }, errors.name) : null), form_jsx("div", {
    className: "jsx-2045612794" + " " + "row"
  }, form_jsx(external_formik_["Field"], {
    name: "textOfFeedback",
    as: "textarea",
    className: "form-textarea",
    placeholder: "\u041E\u0442\u0437\u044B\u0432",
    type: "text",
    value: values.textOfFeedback || ""
  }), errors.textOfFeedback && touched.textOfFeedback ? form_jsx("div", {
    className: "jsx-2045612794" + " " + "error"
  }, errors.textOfFeedback) : null), form_jsx("button", {
    type: "submit",
    className: "jsx-2045612794" + " " + "form-btn"
  }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442\u0443"))), form_jsx(style_default.a, {
    id: "1947735990"
  }, [".form-btn.jsx-2045612794{width:62%;min-height:43px;background:#fdd639;border-radius:23px;border:none;outline:none;font-weight:600;font-size:22px;line-height:21px;cursor:pointer;padding:15px 0px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}", ".error.jsx-2045612794{font-family:\"Open Sans\",sans-serif;color:red;}", ".row.jsx-2045612794{margin-bottom:23px;width:100%;padding:0;}", "@media only screen and (max-width:660px){.form-btn.jsx-2045612794{font-size:20px;line-height:18px;}}", "@media only screen and (max-width:600px){.form-btn.jsx-2045612794{font-size:18px;line-height:17px;}}", "@media only screen and (max-width:540px){.row.jsx-2045612794{margin-bottom:18px;}.form-btn.jsx-2045612794{font-size:16px;line-height:17px;padding:15px 15px;}}"]), form_jsx(style_default.a, {
    id: "3752577861"
  }, [".form{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-top:28px;padding-bottom:34px;}", ".form-input-name,.form-textarea{background:#ffffff;border:1px solid #000000;border-radius:1px;outline:none;width:100%;padding:0 20px;box-sizing:border-box;font-size:20px;}", ".form-input-name{height:50px;}", ".form-textarea{height:100px;resize:none;padding:10px 20px;box-sizing:border-box;}", ".row textarea{font-size:20px;font-family:\"Open Sans\",sans-serif;}", "::-webkit-input-placeholder{font-size:20px;color:#808080;font-family:\"Open Sans\",sans-serif;}", "::-moz-placeholder{font-size:20px;color:#808080;font-family:\"Open Sans\",sans-serif;}", ":-moz-placeholder{font-size:20px;color:#808080;font-family:\"Open Sans\",sans-serif;}", ":-ms-input-placeholder{font-size:20px;color:#808080;font-family:\"Open Sans\",sans-serif;}", "@media only screen and (max-width:660px){.row textarea{font-size:18px;}::-webkit-input-placeholder{font-size:18px;}::-moz-placeholder{font-size:18px;}:-moz-placeholder{font-size:18px;}:-ms-input-placeholder{font-size:18px;}.form-input-name,.form-textarea{font-size:18px;}}", "@media only screen and (max-width:600px){.row textarea{font-size:16px;}::-webkit-input-placeholder{font-size:16px;}::-moz-placeholder{font-size:16px;}:-moz-placeholder{font-size:16px;}:-ms-input-placeholder{font-size:16px;}.form-input-name,.form-textarea{font-size:16px;}}", "@media only screen and (max-width:540px){.form-input-name{height:30px;}.form-textarea{height:80px;padding:10px 20px;box-sizing:border-box;}.row textarea{font-size:14px;}::-webkit-input-placeholder{font-size:14px;}::-moz-placeholder{font-size:14px;}:-moz-placeholder{font-size:14px;}:-ms-input-placeholder{font-size:14px;}.form-input-name,.form-textarea{font-size:14px;}}"]));
};

/* harmony default export */ var components_form = (form_form);
// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;







const Home = ({
  notes
}) => {
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(head_default.a, null, pages_jsx("title", {
    className: "jsx-853535370"
  }, "Page Of Manager Veronika"), pages_jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-853535370"
  }), pages_jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap",
    rel: "stylesheet",
    className: "jsx-853535370"
  })), pages_jsx("div", {
    className: "jsx-853535370" + " " + "main-container"
  }, pages_jsx("div", {
    className: "jsx-853535370" + " " + "section-general-inf-user"
  }, pages_jsx(components_generalInfOfUser, null)), pages_jsx("div", {
    className: "jsx-853535370" + " " + "section-feedbacks"
  }, pages_jsx(feedbacksTabs, {
    feedbacksContent: notes
  }))), pages_jsx("div", {
    className: "jsx-853535370" + " " + "form-container"
  }, pages_jsx("div", {
    className: "jsx-853535370" + " " + "page-content"
  }, pages_jsx(components_form, null))), pages_jsx(style_default.a, {
    id: "1378637255"
  }, [".main-container.jsx-853535370{font-family:\"Open Sans\",sans-serif;color:#333333;max-width:720px;margin:auto;box-sizing:border-box;padding:14px 20px;}", ".section-general-inf-user.jsx-853535370{margin-bottom:27px;}", ".form-container.jsx-853535370{background:#f2f2f2;}", ".page-content.jsx-853535370{max-width:720px;margin:auto;padding:0px 20px;box-sizing:border-box;}", "@media only screen and (max-width:540px){.section-general-inf-user.jsx-853535370{margin-bottom:20px;}}"]), pages_jsx(style_default.a, {
    id: "523879908"
  }, ["body{margin:0;}"]));
};

Home.getInitialProps = async () => {
  const res = await external_isomorphic_unfetch_default()("http://localhost:3000/api/notes");
  const {
    data
  } = await res.json();
  return {
    notes: data
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });