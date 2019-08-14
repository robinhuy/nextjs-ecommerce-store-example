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

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/robinhuy/Desktop/github/nextjs-ecommerce-store/nextshop/components/Footer.js";


function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "bg6 p-t-45 p-b-43 p-l-45 p-r-45",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-w p-b-90",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-size6 p-t-30 p-l-15 p-r-15 respon3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "s-text12 p-b-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "GET IN TOUCH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "s-text7 w-size27",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-m p-t-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "fs-18 color1 p-r-20 fa fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "fs-18 color1 p-r-20 fa fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "fs-18 color1 p-r-20 fa fa-pinterest-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "fs-18 color1 p-r-20 fa fa-snapchat-ghost",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "fs-18 color1 p-r-20 fa fa-youtube-play",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-size7 p-t-30 p-l-15 p-r-15 respon4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "s-text12 p-b-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Categories"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "p-b-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "s-text7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Men")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "p-b-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "s-text7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Women")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "p-b-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "s-text7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Dresses")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "p-b-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "s-text7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Sunglasses")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-size7 p-t-30 p-l-15 p-r-15 respon4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "s-text12 p-b-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Links"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "p-b-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "s-text7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Search")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "p-b-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "s-text7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "About Us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "p-b-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "s-text7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Contact Us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "p-b-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "s-text7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Returns")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-size7 p-t-30 p-l-15 p-r-15 respon4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "s-text12 p-b-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Help"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "p-b-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "s-text7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Track Order")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "p-b-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "s-text7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Returns")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "p-b-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "s-text7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Shipping")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "p-b-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "s-text7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "FAQs")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-size8 p-t-30 p-l-15 p-r-15 respon3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "s-text12 p-b-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Newsletter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "effect1 w-size9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "s-text7 bg6 w-full p-b-5",
    type: "text",
    name: "email",
    placeholder: "email@example.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "effect1-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-size2 p-t-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Subscribe"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "t-center p-l-15 p-r-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "h-size2",
    src: "/static/images/icons/paypal.png",
    alt: "IMG-PAYPAL",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "h-size2",
    src: "/static/images/icons/visa.png",
    alt: "IMG-VISA",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "h-size2",
    src: "/static/images/icons/mastercard.png",
    alt: "IMG-MASTERCARD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "h-size2",
    src: "/static/images/icons/express.png",
    alt: "IMG-EXPRESS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "h-size2",
    src: "/static/images/icons/discover.png",
    alt: "IMG-DISCOVER",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "t-center s-text8 p-t-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Copyright \xA9 2018 All rights reserved. | This template is made with ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-heart-o",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), " by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://colorlib.com",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Colorlib"))));
}

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/robinhuy/Desktop/github/nextjs-ecommerce-store/nextshop/components/Header.js";


function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "header1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-menu-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "topbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "topbar-social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "topbar-social-item fa fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "topbar-social-item fa fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "topbar-social-item fa fa-pinterest-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "topbar-social-item fa fa-snapchat-ghost",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "topbar-social-item fa fa-youtube-play",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "topbar-child1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Free shipping for standard order over $100"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "topbar-child2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "topbar-email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "fashe@example.com"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "topbar-language rs1-select2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "selection-1",
    name: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "USD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "EUR"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap_header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "index.html",
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/logo.png",
    alt: "IMG-LOGO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap_menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "main_menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    as: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "product.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Shop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "sale-noti",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "product.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Sale")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "cart.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Features")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "blog.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Blog")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    as: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "About"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "contact.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Contact"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "header-wrapicon1 dis-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/icon-header-01.png",
    className: "header-icon1",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "linedivide1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-wrapicon2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/icon-header-02.png",
    className: "header-icon1 js-show-header-dropdown",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "header-icons-noti",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart header-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "header-cart-wrapitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "header-cart-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-item-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/item-cart-01.jpg",
    alt: "Cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-item-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "header-cart-item-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "White Shirt With Pleat Detail Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "header-cart-item-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "1 x $19.00"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "header-cart-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-item-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/item-cart-02.jpg",
    alt: "Cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-item-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "header-cart-item-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Converse All Star Hi Black Canvas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "header-cart-item-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "1 x $39.00"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "header-cart-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-item-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/item-cart-03.jpg",
    alt: "Cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-item-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "header-cart-item-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Nixon Porter Leather Watch In Tan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "header-cart-item-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "1 x $17.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-total",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Total: $75.00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-wrapbtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "cart.html",
    className: "flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "View Cart")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-wrapbtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Check Out")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap_header_mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    as: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "logo-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/logo.png",
    alt: "IMG-LOGO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-show-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-icons-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "header-wrapicon1 dis-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/icon-header-01.png",
    className: "header-icon1",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "linedivide2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-wrapicon2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/icon-header-02.png",
    className: "header-icon1 js-show-header-dropdown",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "header-icons-noti",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart header-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "header-cart-wrapitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "header-cart-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-item-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/item-cart-01.jpg",
    alt: "Cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-item-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "header-cart-item-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "White Shirt With Pleat Detail Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "header-cart-item-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "1 x $19.00"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "header-cart-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-item-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/item-cart-02.jpg",
    alt: "Cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-item-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "header-cart-item-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Converse All Star Hi Black Canvas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "header-cart-item-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "1 x $39.00"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "header-cart-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-item-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/item-cart-03.jpg",
    alt: "Cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-item-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "header-cart-item-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Nixon Porter Leather Watch In Tan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "header-cart-item-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "1 x $17.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-total",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "Total: $75.00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-wrapbtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "cart.html",
    className: "flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, "View Cart")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-cart-wrapbtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, "Check Out")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-show-menu-mobile hamburger hamburger--squeeze",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "hamburger-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "hamburger-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-side-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "side-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "main-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "item-topbar-mobile p-l-20 p-t-8 p-b-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "topbar-child1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, "Free shipping for standard order over $100")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "item-topbar-mobile p-l-20 p-t-8 p-b-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "topbar-child2-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "topbar-email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, "fashe@example.com"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "topbar-language rs1-select2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "selection-1",
    name: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, "USD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "EUR"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "item-topbar-mobile p-l-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "topbar-social-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "topbar-social-item fa fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "topbar-social-item fa fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "topbar-social-item fa fa-pinterest-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "topbar-social-item fa fa-snapchat-ghost",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "topbar-social-item fa fa-youtube-play",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "item-menu-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    as: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "arrow-main-menu fa fa-angle-right",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "item-menu-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "product.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, "Shop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "item-menu-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "product.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "Sale")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "item-menu-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "cart.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, "Features")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "item-menu-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "blog.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, "Blog")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "item-menu-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "about.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "item-menu-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "contact.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, "Contact"))))));
}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _static_vendor_bootstrap_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/vendor/bootstrap/css/bootstrap.min.css */ "./static/vendor/bootstrap/css/bootstrap.min.css");
/* harmony import */ var _static_vendor_bootstrap_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_vendor_bootstrap_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_fonts_font_awesome_4_7_0_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/fonts/font-awesome-4.7.0/css/font-awesome.min.css */ "./static/fonts/font-awesome-4.7.0/css/font-awesome.min.css");
/* harmony import */ var _static_fonts_font_awesome_4_7_0_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_fonts_font_awesome_4_7_0_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_fonts_themify_themify_icons_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/fonts/themify/themify-icons.css */ "./static/fonts/themify/themify-icons.css");
/* harmony import */ var _static_fonts_themify_themify_icons_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_fonts_themify_themify_icons_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_css_hamburgers_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/css/hamburgers.min.css */ "./static/css/hamburgers.min.css");
/* harmony import */ var _static_css_hamburgers_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_css_hamburgers_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_css_main_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/css/main.min.css */ "./static/css/main.min.css");
/* harmony import */ var _static_css_main_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_css_main_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_css_util_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/css/util.min.css */ "./static/css/util.min.css");
/* harmony import */ var _static_css_util_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_css_util_min_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/robinhuy/Desktop/github/nextjs-ecommerce-store/nextshop/components/Layout.js";









function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
var _jsxFileName = "/Users/robinhuy/Desktop/github/nextjs-ecommerce-store/nextshop/pages/index.js";


function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "banner bgwhite p-t-40 p-b-40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10 col-md-8 col-lg-4 m-l-r-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block1 hov-img-zoom pos-relative m-b-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/banner-02.jpg",
    alt: "IMG-BENNER",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block1-wrapbtn w-size2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "flex-c-m size2 m-text2 bg3 hov1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Dresses"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block1 hov-img-zoom pos-relative m-b-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/banner-05.jpg",
    alt: "IMG-BENNER",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block1-wrapbtn w-size2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "flex-c-m size2 m-text2 bg3 hov1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Sunglasses")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10 col-md-8 col-lg-4 m-l-r-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block1 hov-img-zoom pos-relative m-b-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/banner-03.jpg",
    alt: "IMG-BENNER",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block1-wrapbtn w-size2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "flex-c-m size2 m-text2 bg3 hov1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Watches"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block1 hov-img-zoom pos-relative m-b-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/banner-07.jpg",
    alt: "IMG-BENNER",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block1-wrapbtn w-size2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "flex-c-m size2 m-text2 bg3 hov1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Footerwear")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10 col-md-8 col-lg-4 m-l-r-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block1 hov-img-zoom pos-relative m-b-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/banner-04.jpg",
    alt: "IMG-BENNER",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block1-wrapbtn w-size2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "flex-c-m size2 m-text2 bg3 hov1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Bags"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2 wrap-pic-w pos-relative m-b-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/bg-01.jpg",
    alt: "IMG",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-content sizefull ab-t-l flex-col-c-m",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "m-text4 t-center w-size3 p-b-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Sign up & get 20% off"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "t-center w-size4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Be the frist to know about the latest fashion news and get exclu-sive offers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-size2 p-t-25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Sign Up")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "newproduct bgwhite p-t-45 p-b-105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sec-title p-b-60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "m-text5 t-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Featured Products")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-slick2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slick2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-slick2 p-l-15 p-r-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-img wrap-pic-w of-hidden pos-relative block2-labelnew",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/item-02.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-overlay trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "block2-btn-addwishlist hov-pointer trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-wishlist icon_heart_alt",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-wishlist icon_heart dis-none",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-btn-addcart w-size1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Add to Cart")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-txt p-t-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "product-detail.html",
    className: "block2-name dis-block s-text3 p-b-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Herschel supply co 25l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block2-price m-text6 p-r-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "$75.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-slick2 p-l-15 p-r-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-img wrap-pic-w of-hidden pos-relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/item-03.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-overlay trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "block2-btn-addwishlist hov-pointer trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-wishlist icon_heart_alt",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-wishlist icon_heart dis-none",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-btn-addcart w-size1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Add to Cart")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-txt p-t-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "product-detail.html",
    className: "block2-name dis-block s-text3 p-b-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Denim jacket blue"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block2-price m-text6 p-r-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "$92.50")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-slick2 p-l-15 p-r-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-img wrap-pic-w of-hidden pos-relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/item-05.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-overlay trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "block2-btn-addwishlist hov-pointer trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-wishlist icon_heart_alt",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-wishlist icon_heart dis-none",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-btn-addcart w-size1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Add to Cart")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-txt p-t-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "product-detail.html",
    className: "block2-name dis-block s-text3 p-b-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Coach slim easton black"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block2-price m-text6 p-r-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "$165.90")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-slick2 p-l-15 p-r-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-img wrap-pic-w of-hidden pos-relative block2-labelsale",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/item-07.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-overlay trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "block2-btn-addwishlist hov-pointer trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-wishlist icon_heart_alt",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-wishlist icon_heart dis-none",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-btn-addcart w-size1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "Add to Cart")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-txt p-t-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "product-detail.html",
    className: "block2-name dis-block s-text3 p-b-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, "Frayed denim shorts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block2-oldprice m-text7 p-r-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "$29.50"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block2-newprice m-text8 p-r-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "$15.90")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-slick2 p-l-15 p-r-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-img wrap-pic-w of-hidden pos-relative block2-labelnew",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/item-02.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-overlay trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "block2-btn-addwishlist hov-pointer trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-wishlist icon_heart_alt",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-wishlist icon_heart dis-none",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-btn-addcart w-size1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, "Add to Cart")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-txt p-t-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "product-detail.html",
    className: "block2-name dis-block s-text3 p-b-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, "Herschel supply co 25l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block2-price m-text6 p-r-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, "$75.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-slick2 p-l-15 p-r-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-img wrap-pic-w of-hidden pos-relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/item-03.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-overlay trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "block2-btn-addwishlist hov-pointer trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-wishlist icon_heart_alt",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-wishlist icon_heart dis-none",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-btn-addcart w-size1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, "Add to Cart")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-txt p-t-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "product-detail.html",
    className: "block2-name dis-block s-text3 p-b-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, "Denim jacket blue"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block2-price m-text6 p-r-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, "$92.50")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-slick2 p-l-15 p-r-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-img wrap-pic-w of-hidden pos-relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/item-05.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-overlay trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "block2-btn-addwishlist hov-pointer trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-wishlist icon_heart_alt",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-wishlist icon_heart dis-none",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-btn-addcart w-size1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, "Add to Cart")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-txt p-t-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "product-detail.html",
    className: "block2-name dis-block s-text3 p-b-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, "Coach slim easton black"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block2-price m-text6 p-r-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, "$165.90")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-slick2 p-l-15 p-r-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-img wrap-pic-w of-hidden pos-relative block2-labelsale",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/item-07.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-overlay trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "block2-btn-addwishlist hov-pointer trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-wishlist icon_heart_alt",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-wishlist icon_heart dis-none",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-btn-addcart w-size1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, "Add to Cart")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block2-txt p-t-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "product-detail.html",
    className: "block2-name dis-block s-text3 p-b-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, "Frayed denim shorts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block2-oldprice m-text7 p-r-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, "$29.50"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block2-newprice m-text8 p-r-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }, "$15.90"))))))))));
}

/***/ }),

/***/ "./static/css/hamburgers.min.css":
/*!***************************************!*\
  !*** ./static/css/hamburgers.min.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/css/main.min.css":
/*!*********************************!*\
  !*** ./static/css/main.min.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/css/util.min.css":
/*!*********************************!*\
  !*** ./static/css/util.min.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/fonts/font-awesome-4.7.0/css/font-awesome.min.css":
/*!******************************************************************!*\
  !*** ./static/fonts/font-awesome-4.7.0/css/font-awesome.min.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/fonts/themify/themify-icons.css":
/*!************************************************!*\
  !*** ./static/fonts/themify/themify-icons.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/vendor/bootstrap/css/bootstrap.min.css":
/*!*******************************************************!*\
  !*** ./static/vendor/bootstrap/css/bootstrap.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/robinhuy/Desktop/github/nextjs-ecommerce-store/nextshop/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map