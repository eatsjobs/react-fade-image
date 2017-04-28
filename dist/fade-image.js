(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require(undefined));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FadeImage"] = factory(require(undefined));
	else
		root["FadeImage"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"fade-image_container","fadeImg":"fade-image_fadeImg","blur":"fade-image_blur","imgLoaded":"fade-image_imgLoaded"};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _fadeImage = __webpack_require__(0);

var _fadeImage2 = _interopRequireDefault(_fadeImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FadeImage = function (_Component) {
    _inherits(FadeImage, _Component);

    function FadeImage(props) {
        _classCallCheck(this, FadeImage);

        var _this = _possibleConstructorReturn(this, (FadeImage.__proto__ || Object.getPrototypeOf(FadeImage)).call(this, props));

        _this.onImgLoad = _this.onImgLoad.bind(_this);
        _this.onImgError = _this.onImgError.bind(_this);
        _this.scrollHandler = _this.scrollHandler.bind(_this);
        _this.state = { loaded: false };
        return _this;
    }

    _createClass(FadeImage, [{
        key: 'onImgLoad',
        value: function onImgLoad() {
            this.setState({ loaded: true });
        }
    }, {
        key: 'onImgError',
        value: function onImgError() {
            this.setState({ loaded: false });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.scrollHandler();
            //TODO add throttle function
            window.addEventListener('scroll', this.scrollHandler);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('scroll', this.scrollHandler);
        }
    }, {
        key: 'scrollHandler',
        value: function scrollHandler(scrollEvent) {
            var scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

            var _refs$container$getBo = this.refs.container.getBoundingClientRect(),
                top = _refs$container$getBo.top,
                height = _refs$container$getBo.height;

            var offsetTop = this.refs.container.offsetTop;

            offsetTop += height / 4;
            scrollTop += window.innerHeight;

            //console.log("top of img:", offsetTop, "scrollTop:", scrollTop);
            if (scrollTop >= offsetTop && !this.state.loaded) {
                //console.log("Append img src", this.props.src);
                this.refs.image.src = this.props.src;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var imageClasses = [_fadeImage2.default.fadeImg];
            var loaded = this.state.loaded ? _fadeImage2.default.imgLoaded : null;
            var blur = this.props.blur ? _fadeImage2.default.blur : null;
            imageClasses = imageClasses.concat([loaded, blur]);

            /**
             * Padding bottom image is a trick to calculate the space
             * that the image will cover in document
             * http://davidecalignano.it/lazy-loading-with-responsive-images-and-unknown-height/
             */
            var theStyle = {};
            var w = void 0,
                h = void 0;
            if (this.props.ratio) {
                var _props$ratio$split = this.props.ratio.split(':');

                var _props$ratio$split2 = _slicedToArray(_props$ratio$split, 2);

                w = _props$ratio$split2[0];
                h = _props$ratio$split2[1];
            } else if (this.props.height && this.props.width) {
                w = this.props.width;
                h = this.props.height;
            }

            theStyle = { paddingBottom: h / w * 100 + '%' };
            return _react2.default.createElement(
                'div',
                { ref: 'container', className: _fadeImage2.default.container, style: theStyle },
                _react2.default.createElement('img', { ref: 'image', className: imageClasses.filter(function (v) {
                        return v;
                    }).join(' '),
                    onLoad: this.onImgLoad,
                    onError: this.onImgError,
                    style: this.props.style
                })
            );
        }
    }]);

    return FadeImage;
}(_react.Component);

exports.default = FadeImage;
module.exports = exports['default'];

/***/ })
/******/ ]);
});