/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _checkbox = __webpack_require__(2);

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var checkbox = new _checkbox2.default();

var Tree = function () {
  function Tree(nodes) {
    _classCallCheck(this, Tree);

    this.nodes = nodes;
  }

  _createClass(Tree, [{
    key: 'initTree',
    value: function initTree() {
      var _this = this;

      var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.nodes;
      var parent = arguments[1];


      nodes.forEach(function (item) {
        if (item.nodes.length > 0) {
          checkbox.create(item);
          _this.initTree(item.nodes, item);
        } else {
          if (parent) {
            checkbox.create(item, parent);
          } else {
            checkbox.create(item);
          }
        }
      });
    }
  }]);

  return Tree;
}();

exports.default = Tree;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Checkbox = function () {
  function Checkbox() {
    _classCallCheck(this, Checkbox);
  }

  _createClass(Checkbox, [{
    key: 'view',
    value: function view(node, parent) {
      var container = document.createElement('div');
      container.className = parent ? 'child-node cont-class_' + node.id : 'cont-class_' + node.id;
      var label = document.createElement('span');
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = node.isChecked;
      label.innerText = node.name;

      container.appendChild(checkbox);
      container.appendChild(label);

      return container;
    }
  }, {
    key: 'create',
    value: function create(node, parent) {
      if (parent) {
        var className = 'cont-class_' + parent.id;
        document.getElementsByClassName(className)[0].appendChild(this.view(node, parent));
      } else {
        document.body.appendChild(this.view(node));
      }
    }
  }]);

  return Checkbox;
}();

exports.default = Checkbox;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tree = __webpack_require__(0);

var _tree2 = _interopRequireDefault(_tree);

var _style = __webpack_require__(1);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// tree Data;
var treeData = [{
  id: 0,
  name: 'Test 1',
  isChecked: false,
  nodes: []
}, {
  id: 1,
  name: 'Test 2',
  isChecked: false,
  nodes: []
}, {
  id: 3,
  name: 'Test 3',
  isChecked: false,
  nodes: [{
    id: 4,
    name: 'Test inner 1',
    isChecked: false,
    nodes: []
  }, {
    id: 5,
    name: 'Test inner 2',
    isChecked: false,
    nodes: []
  }]
}];

var tree = new _tree2.default(treeData);

tree.initTree();

/***/ })
/******/ ]);