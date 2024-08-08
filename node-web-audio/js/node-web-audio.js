(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["node-web-audio"] = factory();
	else
		root["node-web-audio"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8801:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(4407),
  throwSanitizedError = _require3.throwSanitizedError;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kAudioBuffer = _require4.kAudioBuffer;
/* eslint-enable no-unused-vars */

var AudioNode = __webpack_require__(8536);
module.exports = function (jsExport, nativeBinding) {
  var AnalyserNode = /*#__PURE__*/function (_AudioNode) {
    function AnalyserNode(context, options) {
      _classCallCheck(this, AnalyserNode);
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'AnalyserNode': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.BaseAudioContext)) {
        throw new TypeError("Failed to construct 'AnalyserNode': argument 1 is not of type BaseAudioContext");
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && _typeof(options) !== 'object') {
        throw new TypeError('Failed to construct \'AnalyserNode\': argument 2 is not of type \'AnalyserOptions\'');
      }
      if (options && options.fftSize !== undefined) {
        parsedOptions.fftSize = conversions['unsigned long'](options.fftSize, {
          enforceRange: true,
          context: "Failed to construct 'AnalyserNode': Failed to read the 'fftSize' property from AnalyserOptions: The provided value (".concat(options.fftSize, "})")
        });
      } else {
        parsedOptions.fftSize = 2048;
      }
      if (options && options.maxDecibels !== undefined) {
        parsedOptions.maxDecibels = conversions['double'](options.maxDecibels, {
          context: "Failed to construct 'AnalyserNode': Failed to read the 'maxDecibels' property from AnalyserOptions: The provided value (".concat(options.maxDecibels, "})")
        });
      } else {
        parsedOptions.maxDecibels = -30;
      }
      if (options && options.minDecibels !== undefined) {
        parsedOptions.minDecibels = conversions['double'](options.minDecibels, {
          context: "Failed to construct 'AnalyserNode': Failed to read the 'minDecibels' property from AnalyserOptions: The provided value (".concat(options.minDecibels, "})")
        });
      } else {
        parsedOptions.minDecibels = -100;
      }
      if (options && options.smoothingTimeConstant !== undefined) {
        parsedOptions.smoothingTimeConstant = conversions['double'](options.smoothingTimeConstant, {
          context: "Failed to construct 'AnalyserNode': Failed to read the 'smoothingTimeConstant' property from AnalyserOptions: The provided value (".concat(options.smoothingTimeConstant, "})")
        });
      } else {
        parsedOptions.smoothingTimeConstant = 0.8;
      }
      if (options && options.channelCount !== undefined) {
        parsedOptions.channelCount = conversions['unsigned long'](options.channelCount, {
          enforceRange: true,
          context: "Failed to construct 'AnalyserNode': Failed to read the 'channelCount' property from AnalyserOptions: The provided value '".concat(options.channelCount, "'")
        });
      }
      if (options && options.channelCountMode !== undefined) {
        parsedOptions.channelCountMode = conversions['DOMString'](options.channelCountMode, {
          context: "Failed to construct 'AnalyserNode': Failed to read the 'channelCount' property from AnalyserOptions: The provided value '".concat(options.channelCountMode, "'")
        });
      }
      if (options && options.channelInterpretation !== undefined) {
        parsedOptions.channelInterpretation = conversions['DOMString'](options.channelInterpretation, {
          context: "Failed to construct 'AnalyserNode': Failed to read the 'channelInterpretation' property from AnalyserOptions: The provided value '".concat(options.channelInterpretation, "'")
        });
      }
      var napiObj;
      try {
        napiObj = new nativeBinding.AnalyserNode(context[kNapiObj], parsedOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      return _callSuper(this, AnalyserNode, [context, _defineProperty({}, kNapiObj, napiObj)]);
    }
    _inherits(AnalyserNode, _AudioNode);
    return _createClass(AnalyserNode, [{
      key: "fftSize",
      get: function get() {
        if (!(this instanceof AnalyserNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AnalyserNode\'');
        }
        return this[kNapiObj].fftSize;
      },
      set: function set(value) {
        if (!(this instanceof AnalyserNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AnalyserNode\'');
        }

        // @fixme - wpt pretends that when set to -1, this should throw IndexSizeError, not a TypeError.
        // For now let's just cast it to Number without further checks, and let Rust do the job
        // as 0 is an invalid value too
        // value = conversions['unsigned long'](value, {
        //   enforceRange: true,
        //   context: `Failed to set the 'fftSize' property on 'AnalyserNode': Value`
        // });
        value = conversions['unrestricted double'](value, {
          context: "Failed to set the 'fftSize' property on 'AnalyserNode': Value"
        });
        try {
          this[kNapiObj].fftSize = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "frequencyBinCount",
      get: function get() {
        if (!(this instanceof AnalyserNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AnalyserNode\'');
        }
        return this[kNapiObj].frequencyBinCount;
      }
    }, {
      key: "minDecibels",
      get: function get() {
        if (!(this instanceof AnalyserNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AnalyserNode\'');
        }
        return this[kNapiObj].minDecibels;
      },
      set: function set(value) {
        if (!(this instanceof AnalyserNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AnalyserNode\'');
        }
        value = conversions['double'](value, {
          context: "Failed to set the 'minDecibels' property on 'AnalyserNode': Value"
        });
        try {
          this[kNapiObj].minDecibels = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "maxDecibels",
      get: function get() {
        if (!(this instanceof AnalyserNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AnalyserNode\'');
        }
        return this[kNapiObj].maxDecibels;
      },
      set: function set(value) {
        if (!(this instanceof AnalyserNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AnalyserNode\'');
        }
        value = conversions['double'](value, {
          context: "Failed to set the 'maxDecibels' property on 'AnalyserNode': Value"
        });
        try {
          this[kNapiObj].maxDecibels = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "smoothingTimeConstant",
      get: function get() {
        if (!(this instanceof AnalyserNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AnalyserNode\'');
        }
        return this[kNapiObj].smoothingTimeConstant;
      },
      set: function set(value) {
        if (!(this instanceof AnalyserNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AnalyserNode\'');
        }
        value = conversions['double'](value, {
          context: "Failed to set the 'smoothingTimeConstant' property on 'AnalyserNode': Value"
        });
        try {
          this[kNapiObj].smoothingTimeConstant = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "getFloatFrequencyData",
      value: function getFloatFrequencyData(array) {
        if (!(this instanceof AnalyserNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AnalyserNode\'');
        }
        if (arguments.length < 1) {
          throw new TypeError("Failed to execute 'getFloatFrequencyData' on 'AnalyserNode': 1 argument required, but only ".concat(arguments.length, " present"));
        }
        if (!(array instanceof Float32Array)) {
          throw new TypeError("Failed to execute 'getFloatFrequencyData' on 'AnalyserNode': Parameter 1 is not of type 'Float32Array'");
        }
        try {
          return this[kNapiObj].getFloatFrequencyData(array);
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "getByteFrequencyData",
      value: function getByteFrequencyData(array) {
        if (!(this instanceof AnalyserNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AnalyserNode\'');
        }
        if (arguments.length < 1) {
          throw new TypeError("Failed to execute 'getByteFrequencyData' on 'AnalyserNode': 1 argument required, but only ".concat(arguments.length, " present"));
        }
        if (!(array instanceof Uint8Array)) {
          throw new TypeError("Failed to execute 'getByteFrequencyData' on 'AnalyserNode': Parameter 1 is not of type 'Uint8Array'");
        }
        try {
          return this[kNapiObj].getByteFrequencyData(array);
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "getFloatTimeDomainData",
      value: function getFloatTimeDomainData(array) {
        if (!(this instanceof AnalyserNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AnalyserNode\'');
        }
        if (arguments.length < 1) {
          throw new TypeError("Failed to execute 'getFloatTimeDomainData' on 'AnalyserNode': 1 argument required, but only ".concat(arguments.length, " present"));
        }
        if (!(array instanceof Float32Array)) {
          throw new TypeError("Failed to execute 'getFloatTimeDomainData' on 'AnalyserNode': Parameter 1 is not of type 'Float32Array'");
        }
        try {
          return this[kNapiObj].getFloatTimeDomainData(array);
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "getByteTimeDomainData",
      value: function getByteTimeDomainData(array) {
        if (!(this instanceof AnalyserNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AnalyserNode\'');
        }
        if (arguments.length < 1) {
          throw new TypeError("Failed to execute 'getByteTimeDomainData' on 'AnalyserNode': 1 argument required, but only ".concat(arguments.length, " present"));
        }
        if (!(array instanceof Uint8Array)) {
          throw new TypeError("Failed to execute 'getByteTimeDomainData' on 'AnalyserNode': Parameter 1 is not of type 'Uint8Array'");
        }
        try {
          return this[kNapiObj].getByteTimeDomainData(array);
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }]);
  }(AudioNode);
  Object.defineProperties(AnalyserNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 1
    }
  });
  Object.defineProperties(AnalyserNode.prototype, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'AnalyserNode'
  }), "fftSize", kEnumerableProperty), "frequencyBinCount", kEnumerableProperty), "minDecibels", kEnumerableProperty), "maxDecibels", kEnumerableProperty), "smoothingTimeConstant", kEnumerableProperty), "getFloatFrequencyData", kEnumerableProperty), "getByteFrequencyData", kEnumerableProperty), "getFloatTimeDomainData", kEnumerableProperty), "getByteTimeDomainData", kEnumerableProperty));
  return AnalyserNode;
};

/***/ }),

/***/ 6258:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(4407),
  throwSanitizedError = _require.throwSanitizedError;
var _require2 = __webpack_require__(4019),
  kEnumerableProperty = _require2.kEnumerableProperty,
  kHiddenProperty = _require2.kHiddenProperty;
var _require3 = __webpack_require__(9439),
  kNapiObj = _require3.kNapiObj;
module.exports = function (_jsExport, nativeBinding) {
  var AudioBuffer = /*#__PURE__*/function () {
    function AudioBuffer(options) {
      _classCallCheck(this, AudioBuffer);
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'AudioBuffer': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      if (_typeof(options) !== 'object') {
        throw new TypeError("Failed to construct 'AudioBuffer': argument 1 is not of type 'AudioBufferOptions'");
      }
      if (kNapiObj in options) {
        // internal constructor for `startRendering` and `decodeAudioData` cases
        Object.defineProperty(this, kNapiObj, _objectSpread({
          value: options[kNapiObj]
        }, kHiddenProperty));
      } else {
        // Regular public constructor
        // dictionary AudioBufferOptions {
        //     unsigned long numberOfChannels = 1;
        //     required unsigned long length;
        //     required float sampleRate;
        // };
        var parsedOptions = {};
        if (options.numberOfChannels !== undefined) {
          parsedOptions.numberOfChannels = conversions['unsigned long'](options.numberOfChannels, {
            enforceRange: true,
            context: "Failed to construct 'AudioBuffer': Failed to read the 'numberOfChannels' property from AudioBufferOptions: numberOfCHannels"
          });
        } else {
          parsedOptions.numberOfChannels = 1;
        }
        if (options.length === undefined) {
          throw new TypeError("Failed to construct 'AudioBuffer': Failed to read the 'numberOfChannels' property from AudioBufferOptions: required member is undefined");
        }
        parsedOptions.length = conversions['unsigned long'](options.length, {
          enforceRange: true,
          context: "Failed to construct 'AudioBuffer': Failed to read the 'length' property from AudioBufferOptions: length"
        });
        if (options.sampleRate === undefined) {
          throw new TypeError("Failed to construct 'AudioBuffer': Failed to read the 'numberOfChannels' property from AudioBufferOptions: required member is undefined");
        }
        parsedOptions.sampleRate = conversions['float'](options.sampleRate, {
          context: "Failed to construct 'AudioBuffer': Failed to read the 'sampleRate' property from AudioBufferOptions: sampleRate"
        });
        var napiObj;
        try {
          napiObj = new nativeBinding.AudioBuffer(parsedOptions);
        } catch (err) {
          throwSanitizedError(err);
        }
        Object.defineProperty(this, kNapiObj, _objectSpread({
          value: napiObj
        }, kHiddenProperty));
      }
    }
    return _createClass(AudioBuffer, [{
      key: "sampleRate",
      get: function get() {
        if (!(this instanceof AudioBuffer)) {
          throw new TypeError("Invalid Invocation: Value of 'this' must be of type 'AudioBuffer'");
        }
        return this[kNapiObj].sampleRate;
      }
    }, {
      key: "duration",
      get: function get() {
        if (!(this instanceof AudioBuffer)) {
          throw new TypeError("Invalid Invocation: Value of 'this' must be of type 'AudioBuffer'");
        }
        return this[kNapiObj].duration;
      }
    }, {
      key: "length",
      get: function get() {
        if (!(this instanceof AudioBuffer)) {
          throw new TypeError("Invalid Invocation: Value of 'this' must be of type 'AudioBuffer'");
        }
        return this[kNapiObj].length;
      }
    }, {
      key: "numberOfChannels",
      get: function get() {
        if (!(this instanceof AudioBuffer)) {
          throw new TypeError("Invalid Invocation: Value of 'this' must be of type 'AudioBuffer'");
        }
        return this[kNapiObj].numberOfChannels;
      }
    }, {
      key: "copyFromChannel",
      value: function copyFromChannel(destination, channelNumber) {
        var bufferOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        if (!(this instanceof AudioBuffer)) {
          throw new TypeError("Invalid Invocation: Value of 'this' must be of type 'AudioBuffer'");
        }
        if (arguments.length < 2) {
          throw new TypeError("Failed to execute 'copyFromChannel' on 'AudioBuffer': 2 argument required, but only ".concat(arguments.length, " present"));
        }
        if (!(destination instanceof Float32Array)) {
          throw new TypeError("Failed to execute 'copyFromChannel' on 'AudioBuffer': parameter 1 is not of type 'Float32Array'");
        }

        // Rust implementation uses a usize which will clamp -1 to 0, and spec requires
        // an IndexSizeError rather than a TypeError, so this check must be done here.
        // cf. note on AnalyzerNode::fftSize
        if (channelNumber < 0) {
          throw new DOMException("Failed to execute 'copyFromChannel' on 'AudioBuffer': channelNumber must equal or greater than 0", 'IndexSizeError');
        }
        channelNumber = conversions['unsigned long'](channelNumber, {
          context: "Failed to execute 'copyFromChannel' on 'AudioBuffer': channelNumber"
        });
        bufferOffset = conversions['unsigned long'](bufferOffset, {
          context: "Failed to execute 'copyFromChannel' on 'AudioBuffer': bufferOffset"
        });
        try {
          this[kNapiObj].copyFromChannel(destination, channelNumber, bufferOffset);
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "copyToChannel",
      value: function copyToChannel(source, channelNumber) {
        var bufferOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        if (!(this instanceof AudioBuffer)) {
          throw new TypeError("Invalid Invocation: Value of 'this' must be of type 'AudioBuffer'");
        }
        if (arguments.length < 2) {
          throw new TypeError("Failed to execute 'copyToChannel' on 'AudioBuffer': 2 argument required, but only ".concat(arguments.length, " present"));
        }
        if (!(source instanceof Float32Array)) {
          throw new TypeError("Failed to execute 'copyToChannel' on 'AudioBuffer': source is not of type 'Float32Array'");
        }

        // Rust implementation uses a usize which will clamp -1 to 0, and spec requires
        // an IndexSizeError rather than a TypeError, so this check must be done here.
        // cf. note on AnalyzerNode::fftSize
        if (channelNumber < 0) {
          throw new DOMException("Failed to execute 'copyToChannel' on 'AudioBuffer': channelNumber must equal or greater than 0", 'IndexSizeError');
        }
        channelNumber = conversions['unsigned long'](channelNumber, {
          context: "Failed to execute 'copyToChannel' on 'AudioBuffer': channelNumber"
        });
        bufferOffset = conversions['unsigned long'](bufferOffset, {
          context: "Failed to execute 'copyToChannel' on 'AudioBuffer': bufferOffset"
        });
        try {
          this[kNapiObj].copyToChannel(source, channelNumber, bufferOffset);
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "getChannelData",
      value: function getChannelData(channel) {
        if (!(this instanceof AudioBuffer)) {
          throw new TypeError("Invalid Invocation: Value of 'this' must be of type 'AudioBuffer'");
        }
        if (arguments.length < 1) {
          throw new TypeError("Failed to execute 'getChannelData' on 'AudioBuffer': 1 argument required, but only ".concat(arguments.length, " present"));
        }

        // Rust implementation uses a usize which will clamp -1 to 0, and spec requires
        // an IndexSizeError rather than a TypeError, so this check must be done here.
        // cf. note on AnalyzerNode::fftSize
        if (channel < 0) {
          throw new DOMException("Failed to execute 'getChannelData' on 'AudioBuffer': channel must equal or greater than 0", 'IndexSizeError');
        }
        channel = conversions['unsigned long'](channel, {
          context: "Failed to execute 'getChannelData' on 'AudioBuffer': channel"
        });
        try {
          return this[kNapiObj].getChannelData(channel);
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }]);
  }();
  Object.defineProperties(AudioBuffer, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 1
    }
  });
  Object.defineProperties(AudioBuffer.prototype, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'AudioBuffer'
  }), "sampleRate", kEnumerableProperty), "duration", kEnumerableProperty), "length", kEnumerableProperty), "numberOfChannels", kEnumerableProperty), "copyFromChannel", kEnumerableProperty), "copyToChannel", kEnumerableProperty), "getChannelData", kEnumerableProperty));
  return AudioBuffer;
};

/***/ }),

/***/ 2455:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(4407),
  throwSanitizedError = _require3.throwSanitizedError;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kAudioBuffer = _require4.kAudioBuffer;
/* eslint-enable no-unused-vars */

var AudioScheduledSourceNode = __webpack_require__(7140);
module.exports = function (jsExport, nativeBinding) {
  var _playbackRate = /*#__PURE__*/new WeakMap();
  var _detune = /*#__PURE__*/new WeakMap();
  var AudioBufferSourceNode = /*#__PURE__*/function (_AudioScheduledSource) {
    function AudioBufferSourceNode(context, options) {
      var _this;
      _classCallCheck(this, AudioBufferSourceNode);
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'AudioBufferSourceNode': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.BaseAudioContext)) {
        throw new TypeError("Failed to construct 'AudioBufferSourceNode': argument 1 is not of type BaseAudioContext");
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && _typeof(options) !== 'object') {
        throw new TypeError('Failed to construct \'AudioBufferSourceNode\': argument 2 is not of type \'AudioBufferSourceOptions\'');
      }
      if (options && options.buffer !== undefined) {
        if (options.buffer !== null) {
          if (!(options.buffer instanceof jsExport.AudioBuffer)) {
            throw new TypeError('Failed to construct \'AudioBufferSourceNode\': Failed to read the \'buffer\' property from AudioBufferSourceOptions: The provided value cannot be converted to \'AudioBuffer\'');
          }

          // unwrap napi audio buffer
          parsedOptions.buffer = options.buffer[kNapiObj];
        } else {
          parsedOptions.buffer = null;
        }
      } else {
        parsedOptions.buffer = null;
      }
      if (options && options.detune !== undefined) {
        parsedOptions.detune = conversions['float'](options.detune, {
          context: "Failed to construct 'AudioBufferSourceNode': Failed to read the 'detune' property from AudioBufferSourceOptions: The provided value (".concat(options.detune, "})")
        });
      } else {
        parsedOptions.detune = 0;
      }
      if (options && options.loop !== undefined) {
        parsedOptions.loop = conversions['boolean'](options.loop, {
          context: "Failed to construct 'AudioBufferSourceNode': Failed to read the 'loop' property from AudioBufferSourceOptions: The provided value (".concat(options.loop, "})")
        });
      } else {
        parsedOptions.loop = false;
      }
      if (options && options.loopEnd !== undefined) {
        parsedOptions.loopEnd = conversions['double'](options.loopEnd, {
          context: "Failed to construct 'AudioBufferSourceNode': Failed to read the 'loopEnd' property from AudioBufferSourceOptions: The provided value (".concat(options.loopEnd, "})")
        });
      } else {
        parsedOptions.loopEnd = 0;
      }
      if (options && options.loopStart !== undefined) {
        parsedOptions.loopStart = conversions['double'](options.loopStart, {
          context: "Failed to construct 'AudioBufferSourceNode': Failed to read the 'loopStart' property from AudioBufferSourceOptions: The provided value (".concat(options.loopStart, "})")
        });
      } else {
        parsedOptions.loopStart = 0;
      }
      if (options && options.playbackRate !== undefined) {
        parsedOptions.playbackRate = conversions['float'](options.playbackRate, {
          context: "Failed to construct 'AudioBufferSourceNode': Failed to read the 'playbackRate' property from AudioBufferSourceOptions: The provided value (".concat(options.playbackRate, "})")
        });
      } else {
        parsedOptions.playbackRate = 1;
      }
      var napiObj;
      try {
        napiObj = new nativeBinding.AudioBufferSourceNode(context[kNapiObj], parsedOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      _this = _callSuper(this, AudioBufferSourceNode, [context, _defineProperty({}, kNapiObj, napiObj)]);

      // keep the wrapped AudioBuffer around
      _classPrivateFieldInitSpec(_this, _playbackRate, null);
      _classPrivateFieldInitSpec(_this, _detune, null);
      Object.defineProperty(_this, kAudioBuffer, {
        __proto__: null,
        enumerable: false,
        writable: true,
        value: null
      });
      if (options && options.buffer !== undefined) {
        _this[kAudioBuffer] = options.buffer;
      }
      _classPrivateFieldSet(_playbackRate, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].playbackRate)));
      _classPrivateFieldSet(_detune, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].detune)));
      return _this;
    }
    _inherits(AudioBufferSourceNode, _AudioScheduledSource);
    return _createClass(AudioBufferSourceNode, [{
      key: "playbackRate",
      get: function get() {
        if (!(this instanceof AudioBufferSourceNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioBufferSourceNode\'');
        }
        return _classPrivateFieldGet(_playbackRate, this);
      }
    }, {
      key: "detune",
      get: function get() {
        if (!(this instanceof AudioBufferSourceNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioBufferSourceNode\'');
        }
        return _classPrivateFieldGet(_detune, this);
      }
    }, {
      key: "buffer",
      get: function get() {
        if (!(this instanceof AudioBufferSourceNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioBufferSourceNode\'');
        }
        return this[kAudioBuffer];
      },
      set: function set(value) {
        if (!(this instanceof AudioBufferSourceNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioBufferSourceNode\'');
        }
        if (value === null) {
          console.warn('Setting the \'buffer\' property on \'AudioBufferSourceNode\' to \'null\' is not supported yet');
          return;
        } else if (!(kNapiObj in value)) {
          throw new TypeError('Failed to set the \'buffer\' property on \'AudioBufferSourceNode\': Failed to convert value to \'AudioBuffer\'');
        }
        try {
          this[kNapiObj].buffer = value[kNapiObj];
        } catch (err) {
          throwSanitizedError(err);
        }
        this[kAudioBuffer] = value;
      }
    }, {
      key: "loop",
      get: function get() {
        if (!(this instanceof AudioBufferSourceNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioBufferSourceNode\'');
        }
        return this[kNapiObj].loop;
      },
      set: function set(value) {
        if (!(this instanceof AudioBufferSourceNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioBufferSourceNode\'');
        }
        value = conversions['boolean'](value, {
          context: "Failed to set the 'loop' property on 'AudioBufferSourceNode': Value"
        });
        try {
          this[kNapiObj].loop = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "loopStart",
      get: function get() {
        if (!(this instanceof AudioBufferSourceNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioBufferSourceNode\'');
        }
        return this[kNapiObj].loopStart;
      },
      set: function set(value) {
        if (!(this instanceof AudioBufferSourceNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioBufferSourceNode\'');
        }
        value = conversions['double'](value, {
          context: "Failed to set the 'loopStart' property on 'AudioBufferSourceNode': Value"
        });
        try {
          this[kNapiObj].loopStart = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "loopEnd",
      get: function get() {
        if (!(this instanceof AudioBufferSourceNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioBufferSourceNode\'');
        }
        return this[kNapiObj].loopEnd;
      },
      set: function set(value) {
        if (!(this instanceof AudioBufferSourceNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioBufferSourceNode\'');
        }
        value = conversions['double'](value, {
          context: "Failed to set the 'loopEnd' property on 'AudioBufferSourceNode': Value"
        });
        try {
          this[kNapiObj].loopEnd = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "start",
      value: function start() {
        var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        if (!(this instanceof AudioBufferSourceNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioBufferSourceNode\'');
        }
        if (when !== 0) {
          when = conversions['double'](when, {
            context: "Failed to execute 'start' on 'AudioBufferSourceNode': Parameter 1"
          });
        }
        if (offset !== null) {
          offset = conversions['double'](offset, {
            context: "Failed to execute 'start' on 'AudioBufferSourceNode': Parameter 2"
          });
        }
        if (duration !== null) {
          duration = conversions['double'](duration, {
            context: "Failed to execute 'start' on 'AudioBufferSourceNode': Parameter 3"
          });
        }
        try {
          return this[kNapiObj].start(when, offset, duration);
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }]);
  }(AudioScheduledSourceNode);
  Object.defineProperties(AudioBufferSourceNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 1
    }
  });
  Object.defineProperties(AudioBufferSourceNode.prototype, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'AudioBufferSourceNode'
  }), "playbackRate", kEnumerableProperty), "detune", kEnumerableProperty), "buffer", kEnumerableProperty), "loop", kEnumerableProperty), "loopStart", kEnumerableProperty), "loopEnd", kEnumerableProperty), "start", kEnumerableProperty));
  return AudioBufferSourceNode;
};

/***/ }),

/***/ 7789:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(4407),
  throwSanitizedError = _require.throwSanitizedError;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(9439),
  kNapiObj = _require3.kNapiObj,
  kOnStateChange = _require3.kOnStateChange,
  kOnSinkChange = _require3.kOnSinkChange,
  kWorkletRelease = _require3.kWorkletRelease;
var _require4 = __webpack_require__(2873),
  propagateEvent = _require4.propagateEvent;
var contextId = 0;
module.exports = function (jsExport, nativeBinding) {
  var _Object$definePropert;
  var _sinkId = /*#__PURE__*/new WeakMap();
  var _renderCapacity = /*#__PURE__*/new WeakMap();
  var _onsinkchange = /*#__PURE__*/new WeakMap();
  var AudioContext = /*#__PURE__*/function (_jsExport$BaseAudioCo) {
    function AudioContext() {
      var _this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, AudioContext);
      if (_typeof(options) !== 'object') {
        throw new TypeError("Failed to construct 'AudioContext': The provided value is not of type 'AudioContextOptions'");
      }
      var targetOptions = {};
      if (options.latencyHint !== undefined) {
        if (['balanced', 'interactive', 'playback'].includes(options.latencyHint)) {
          targetOptions.latencyHint = conversions['DOMString'](options.latencyHint);
        } else {
          targetOptions.latencyHint = conversions['double'](options.latencyHint, {
            context: "Failed to construct 'AudioContext': Failed to read the 'sinkId' property from AudioNodeOptions: The provided value (".concat(options.latencyHint, ")")
          });
        }
      } else {
        targetOptions.latencyHint = 'interactive';
      }
      if (options.sampleRate !== undefined) {
        targetOptions.sampleRate = conversions['float'](options.sampleRate, {
          context: "Failed to construct 'AudioContext': Failed to read the 'sinkId' property from AudioNodeOptions: The provided value (".concat(options.sampleRate, ")")
        });
      } else {
        targetOptions.sampleRate = null;
      }
      if (options.sinkId !== undefined) {
        if (_typeof(options.sinkId) === 'object') {
          // https://webaudio.github.io/web-audio-api/#enumdef-audiosinktype
          if (!('type' in options.sinkId) || options.sinkId.type !== 'none') {
            throw TypeError("Failed to construct 'AudioContext': Failed to read the 'sinkId' property from AudioNodeOptions: Failed to read the 'type' property from 'AudioSinkOptions': The provided value (".concat(options.sinkId.type, ") is not a valid enum value of type AudioSinkType."));
          }
          targetOptions.sinkId = 'none';
        } else {
          targetOptions.sinkId = conversions['DOMString'](options.sinkId, {
            context: "Failed to construct 'AudioContext': Failed to read the 'sinkId' property from AudioNodeOptions:  Failed to read the 'type' property from 'AudioSinkOptions': The provided value (".concat(options.sinkId, ")")
          });
        }
      } else {
        targetOptions.sinkId = '';
      }
      var napiObj;
      try {
        napiObj = new nativeBinding.AudioContext(targetOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      _this = _callSuper(this, AudioContext, [_defineProperty({}, kNapiObj, napiObj)]);
      _classPrivateFieldInitSpec(_this, _sinkId, '');
      _classPrivateFieldInitSpec(_this, _renderCapacity, null);
      _classPrivateFieldInitSpec(_this, _onsinkchange, null);
      if (options.sinkId !== undefined) {
        _classPrivateFieldSet(_sinkId, _this, options.sinkId);
      }
      _classPrivateFieldSet(_renderCapacity, _this, new jsExport.AudioRenderCapacity(_defineProperty({}, kNapiObj, _this[kNapiObj].renderCapacity)));

      // Add function to Napi object to bridge from Rust events to JS EventTarget
      _this[kNapiObj][kOnStateChange] = function (err, rawEvent) {
        var event = new Event(rawEvent.type);
        propagateEvent(this, event);
      }.bind(_this);
      _this[kNapiObj][kOnSinkChange] = function (err, rawEvent) {
        var event = new Event(rawEvent.type);
        propagateEvent(this, event);
      }.bind(_this);

      // Workaround to bind the `sinkchange` and `statechange` events to EventTarget.
      // This must be called from JS facade ctor as the JS handler are added to the Napi
      // object after its instantiation, and that we don't have any initial `resume` call.
      _this[kNapiObj].listen_to_events();

      // @todo - check if this is still required
      // prevent garbage collection and process exit
      var id = contextId++;
      // store in process to prevent garbage collection
      var kAudioContextId = Symbol("node-web-audio-api:audio-context-".concat(id));
      Object.defineProperty(process, kAudioContextId, {
        __proto__: null,
        enumerable: false,
        configurable: true,
        value: _this
      });
      // keep process awake until context is closed
      var keepAwakeId = setInterval(function () {}, 10 * 1000);
      // clear on close
      _this.addEventListener('statechange', function () {
        if (_this.state === 'closed') {
          // allow to garbage collect the context and to the close the process
          delete process[kAudioContextId];
          clearTimeout(keepAwakeId);
        }
      });

      // for wpt tests, see ./.scripts/wpt_harness.mjs for informations
      if (process.WPT_TEST_RUNNER) {
        process.WPT_TEST_RUNNER.once('cleanup', function () {
          return _this.close();
        });
      }
      return _this;
    }
    _inherits(AudioContext, _jsExport$BaseAudioCo);
    return _createClass(AudioContext, [{
      key: "baseLatency",
      get: function get() {
        if (!(this instanceof AudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioContext\'');
        }
        return this[kNapiObj].baseLatency;
      }
    }, {
      key: "outputLatency",
      get: function get() {
        if (!(this instanceof AudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioContext\'');
        }
        return this[kNapiObj].outputLatency;
      }
    }, {
      key: "sinkId",
      get: function get() {
        if (!(this instanceof AudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioContext\'');
        }
        return _classPrivateFieldGet(_sinkId, this);
      }
    }, {
      key: "renderCapacity",
      get: function get() {
        if (!(this instanceof AudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioContext\'');
        }
        return _classPrivateFieldGet(_renderCapacity, this);
      }
    }, {
      key: "onsinkchange",
      get: function get() {
        if (!(this instanceof AudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioContext\'');
        }
        return _classPrivateFieldGet(_onsinkchange, this);
      },
      set: function set(value) {
        if (!(this instanceof AudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioContext\'');
        }
        if (isFunction(value) || value === null) {
          _classPrivateFieldSet(_onsinkchange, this, value);
        }
      }
    }, {
      key: "getOutputTimestamp",
      value: function getOutputTimestamp() {
        if (!(this instanceof AudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioContext\'');
        }
        throw new Error("AudioContext::getOutputTimestamp is not yet implemented");
      }
    }, {
      key: "resume",
      value: function () {
        var _resume = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (this instanceof AudioContext) {
                  _context.next = 2;
                  break;
                }
                throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioContext\'');
              case 2:
                _context.next = 4;
                return this[kNapiObj].resume();
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function resume() {
          return _resume.apply(this, arguments);
        }
        return resume;
      }()
    }, {
      key: "suspend",
      value: function () {
        var _suspend = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (this instanceof AudioContext) {
                  _context2.next = 2;
                  break;
                }
                throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioContext\'');
              case 2:
                _context2.next = 4;
                return this[kNapiObj].suspend();
              case 4:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
        function suspend() {
          return _suspend.apply(this, arguments);
        }
        return suspend;
      }()
    }, {
      key: "close",
      value: function () {
        var _close = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (this instanceof AudioContext) {
                  _context3.next = 2;
                  break;
                }
                throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioContext\'');
              case 2:
                _context3.next = 4;
                return this.audioWorklet[kWorkletRelease]();
              case 4:
                _context3.next = 6;
                return this[kNapiObj].close();
              case 6:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        }));
        function close() {
          return _close.apply(this, arguments);
        }
        return close;
      }()
    }, {
      key: "setSinkId",
      value: function () {
        var _setSinkId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(sinkId) {
          var targetSinkId,
            _args4 = arguments;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                if (this instanceof AudioContext) {
                  _context4.next = 2;
                  break;
                }
                throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioContext\'');
              case 2:
                if (!(_args4.length < 1)) {
                  _context4.next = 4;
                  break;
                }
                throw new TypeError("Failed to execute 'setSinkId' on 'AudioContext': 1 argument required, but only ".concat(_args4.length, " present"));
              case 4:
                targetSinkId = '';
                if (!(_typeof(sinkId) === 'object')) {
                  _context4.next = 11;
                  break;
                }
                if (!(!('type' in sinkId) || sinkId.type !== 'none')) {
                  _context4.next = 8;
                  break;
                }
                throw new TypeError("Failed to execute 'setSinkId' on 'AudioContext': Failed to read the 'type' property from 'AudioSinkOptions': The provided value '".concat(sinkId.type, "' is not a valid enum value of type AudioSinkType."));
              case 8:
                targetSinkId = 'none';
                _context4.next = 12;
                break;
              case 11:
                targetSinkId = conversions['DOMString'](sinkId, {
                  context: "Failed to execute 'setSinkId' on 'AudioContext': Failed to read the 'type' property from 'AudioSinkOptions': The provided value '".concat(sinkId.type, "'")
                });
              case 12:
                _classPrivateFieldSet(_sinkId, this, sinkId);
                try {
                  this[kNapiObj].setSinkId(targetSinkId);
                } catch (err) {
                  throwSanitizedError(err);
                }
              case 14:
              case "end":
                return _context4.stop();
            }
          }, _callee4, this);
        }));
        function setSinkId(_x) {
          return _setSinkId.apply(this, arguments);
        }
        return setSinkId;
      }() // online context only AudioNodes
    }, {
      key: "createMediaStreamSource",
      value: function createMediaStreamSource(mediaStream) {
        if (!(this instanceof AudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioContext\'');
        }
        if (arguments.length < 1) {
          throw new TypeError("Failed to execute 'createMediaStreamSource' on 'AudioContext': 1 argument required, but only ".concat(arguments.length, " present"));
        }
        var options = {
          mediaStream: mediaStream
        };
        return new jsExport.MediaStreamAudioSourceNode(this, options);
      }
    }, {
      key: "createMediaElementSource",
      value: function createMediaElementSource() {
        if (!(this instanceof AudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioContext\'');
        }
        throw new Error("AudioContext::createMediaElementSource() is not yet implemented, cf. https://github.com/ircam-ismm/node-web-audio-api/issues/91 for more information");
      }
    }, {
      key: "createMediaStreamTrackSource",
      value: function createMediaStreamTrackSource() {
        if (!(this instanceof AudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioContext\'');
        }
        throw new Error("AudioContext::createMediaStreamTrackSource() is not yet implemented, cf. https://github.com/ircam-ismm/node-web-audio-api/issues/91 for more information");
      }
    }, {
      key: "createMediaStreamDestination",
      value: function createMediaStreamDestination() {
        if (!(this instanceof AudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioContext\'');
        }
        throw new Error("AudioContext::createMediaStreamDestination() is not yet implemented, cf. https://github.com/ircam-ismm/node-web-audio-api/issues/91 for more information");
      }
    }]);
  }(jsExport.BaseAudioContext);
  Object.defineProperties(AudioContext, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 0
    }
  });
  Object.defineProperties(AudioContext.prototype, (_Object$definePropert = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$definePropert, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'AudioContext'
  }), "baseLatency", kEnumerableProperty), "outputLatency", kEnumerableProperty), "sinkId", kEnumerableProperty), "renderCapacity", kEnumerableProperty), "onsinkchange", kEnumerableProperty), "getOutputTimestamp", kEnumerableProperty), "resume", kEnumerableProperty), "suspend", kEnumerableProperty), "close", kEnumerableProperty), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$definePropert, "setSinkId", kEnumerableProperty), "createMediaStreamSource", kEnumerableProperty), "createMediaElementSource", kEnumerableProperty), "createMediaStreamTrackSource", kEnumerableProperty), "createMediaStreamDestination", kEnumerableProperty)));
  return AudioContext;
};

/***/ }),

/***/ 9626:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var _require = __webpack_require__(9439),
  kNapiObj = _require.kNapiObj;
var _require2 = __webpack_require__(4019),
  kEnumerableProperty = _require2.kEnumerableProperty;
var AudioNode = __webpack_require__(8536);
var AudioDestinationNode = /*#__PURE__*/function (_AudioNode) {
  function AudioDestinationNode(context, options) {
    _classCallCheck(this, AudioDestinationNode);
    // Make constructor "private"
    if (_typeof(options) !== 'object' || !(kNapiObj in options) || options[kNapiObj]['Symbol.toStringTag'] !== 'AudioDestinationNode') {
      throw new TypeError('Illegal constructor');
    }
    return _callSuper(this, AudioDestinationNode, [context, _defineProperty({}, kNapiObj, options[kNapiObj])]);
  }
  _inherits(AudioDestinationNode, _AudioNode);
  return _createClass(AudioDestinationNode, [{
    key: "maxChannelCount",
    get: function get() {
      if (!(this instanceof AudioDestinationNode)) {
        throw new TypeError("Invalid Invocation: Value of 'this' must be of type 'AudioDestinationNode'");
      }
      return this[kNapiObj].maxChannelCount;
    }
  }]);
}(AudioNode);
Object.defineProperties(AudioDestinationNode, {
  length: {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 0
  }
});
Object.defineProperties(AudioDestinationNode.prototype, _defineProperty(_defineProperty({}, Symbol.toStringTag, {
  __proto__: null,
  writable: false,
  enumerable: false,
  configurable: true,
  value: 'AudioDestinationNode'
}), "maxChannelCount", kEnumerableProperty));
module.exports = AudioDestinationNode;

/***/ }),

/***/ 2584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _Object$definePropert;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(4407),
  throwSanitizedError = _require.throwSanitizedError;
var _require2 = __webpack_require__(4019),
  kEnumerableProperty = _require2.kEnumerableProperty,
  kHiddenProperty = _require2.kHiddenProperty;
var _require3 = __webpack_require__(9439),
  kNapiObj = _require3.kNapiObj;
var AudioParam = __webpack_require__(5071);
var _positionX = /*#__PURE__*/new WeakMap();
var _positionY = /*#__PURE__*/new WeakMap();
var _positionZ = /*#__PURE__*/new WeakMap();
var _forwardX = /*#__PURE__*/new WeakMap();
var _forwardY = /*#__PURE__*/new WeakMap();
var _forwardZ = /*#__PURE__*/new WeakMap();
var _upX = /*#__PURE__*/new WeakMap();
var _upY = /*#__PURE__*/new WeakMap();
var _upZ = /*#__PURE__*/new WeakMap();
var AudioListener = /*#__PURE__*/function () {
  function AudioListener(options) {
    _classCallCheck(this, AudioListener);
    _classPrivateFieldInitSpec(this, _positionX, null);
    _classPrivateFieldInitSpec(this, _positionY, null);
    _classPrivateFieldInitSpec(this, _positionZ, null);
    _classPrivateFieldInitSpec(this, _forwardX, null);
    _classPrivateFieldInitSpec(this, _forwardY, null);
    _classPrivateFieldInitSpec(this, _forwardZ, null);
    _classPrivateFieldInitSpec(this, _upX, null);
    _classPrivateFieldInitSpec(this, _upY, null);
    _classPrivateFieldInitSpec(this, _upZ, null);
    // Make constructor "private"
    if (_typeof(options) !== 'object' || !(kNapiObj in options) || options[kNapiObj]['Symbol.toStringTag'] !== 'AudioListener') {
      throw new TypeError('Illegal constructor');
    }
    Object.defineProperty(this, kNapiObj, _objectSpread({
      value: options[kNapiObj]
    }, kHiddenProperty));
    _classPrivateFieldSet(_positionX, this, new AudioParam(_defineProperty({}, kNapiObj, this[kNapiObj].positionX)));
    _classPrivateFieldSet(_positionY, this, new AudioParam(_defineProperty({}, kNapiObj, this[kNapiObj].positionY)));
    _classPrivateFieldSet(_positionZ, this, new AudioParam(_defineProperty({}, kNapiObj, this[kNapiObj].positionZ)));
    _classPrivateFieldSet(_forwardX, this, new AudioParam(_defineProperty({}, kNapiObj, this[kNapiObj].forwardX)));
    _classPrivateFieldSet(_forwardY, this, new AudioParam(_defineProperty({}, kNapiObj, this[kNapiObj].forwardY)));
    _classPrivateFieldSet(_forwardZ, this, new AudioParam(_defineProperty({}, kNapiObj, this[kNapiObj].forwardZ)));
    _classPrivateFieldSet(_upX, this, new AudioParam(_defineProperty({}, kNapiObj, this[kNapiObj].upX)));
    _classPrivateFieldSet(_upY, this, new AudioParam(_defineProperty({}, kNapiObj, this[kNapiObj].upY)));
    _classPrivateFieldSet(_upZ, this, new AudioParam(_defineProperty({}, kNapiObj, this[kNapiObj].upZ)));
  }
  return _createClass(AudioListener, [{
    key: "positionX",
    get: function get() {
      if (!(this instanceof AudioListener)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioListener\'');
      }
      return _classPrivateFieldGet(_positionX, this);
    }
  }, {
    key: "positionY",
    get: function get() {
      if (!(this instanceof AudioListener)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioListener\'');
      }
      return _classPrivateFieldGet(_positionY, this);
    }
  }, {
    key: "positionZ",
    get: function get() {
      if (!(this instanceof AudioListener)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioListener\'');
      }
      return _classPrivateFieldGet(_positionZ, this);
    }
  }, {
    key: "forwardX",
    get: function get() {
      if (!(this instanceof AudioListener)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioListener\'');
      }
      return _classPrivateFieldGet(_forwardX, this);
    }
  }, {
    key: "forwardY",
    get: function get() {
      if (!(this instanceof AudioListener)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioListener\'');
      }
      return _classPrivateFieldGet(_forwardY, this);
    }
  }, {
    key: "forwardZ",
    get: function get() {
      if (!(this instanceof AudioListener)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioListener\'');
      }
      return _classPrivateFieldGet(_forwardZ, this);
    }
  }, {
    key: "upX",
    get: function get() {
      if (!(this instanceof AudioListener)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioListener\'');
      }
      return _classPrivateFieldGet(_upX, this);
    }
  }, {
    key: "upY",
    get: function get() {
      if (!(this instanceof AudioListener)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioListener\'');
      }
      return _classPrivateFieldGet(_upY, this);
    }
  }, {
    key: "upZ",
    get: function get() {
      if (!(this instanceof AudioListener)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioListener\'');
      }
      return _classPrivateFieldGet(_upZ, this);
    }
  }, {
    key: "setPosition",
    value: function setPosition(x, y, z) {
      if (!(this instanceof AudioListener)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioListener\'');
      }
      if (arguments.length < 3) {
        throw new TypeError("Failed to execute 'setPosition' on 'AudioListener': 3 arguments required, but only 0 present.");
      }
      x = conversions['float'](x, {
        context: "Failed to execute 'setPosition' on 'AudioListener': The provided float value"
      });
      y = conversions['float'](y, {
        context: "Failed to execute 'setPosition' on 'AudioListener': The provided float value"
      });
      z = conversions['float'](z, {
        context: "Failed to execute 'setPosition' on 'AudioListener': The provided float value"
      });
      try {
        this[kNapiObj].setPosition(x, y, z);
      } catch (err) {
        throwSanitizedError(err);
      }
    }
  }, {
    key: "setOrientation",
    value: function setOrientation(x, y, z, xUp, yUp, zUp) {
      if (!(this instanceof AudioListener)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioListener\'');
      }
      if (arguments.length < 6) {
        throw new TypeError("Failed to execute 'setOrientation' on 'AudioListener': 6 arguments required, but only 0 present.");
      }
      x = conversions['float'](x, {
        context: "Failed to execute 'setOrientation' on 'AudioListener': The provided float value"
      });
      y = conversions['float'](y, {
        context: "Failed to execute 'setOrientation' on 'AudioListener': The provided float value"
      });
      z = conversions['float'](z, {
        context: "Failed to execute 'setOrientation' on 'AudioListener': The provided float value"
      });
      xUp = conversions['float'](xUp, {
        context: "Failed to execute 'setOrientation' on 'AudioListener': The provided float value"
      });
      yUp = conversions['float'](yUp, {
        context: "Failed to execute 'setOrientation' on 'AudioListener': The provided float value"
      });
      zUp = conversions['float'](zUp, {
        context: "Failed to execute 'setOrientation' on 'AudioListener': The provided float value"
      });
      try {
        this[kNapiObj].setOrientation(x, y, z, xUp, yUp, zUp);
      } catch (err) {
        throwSanitizedError(err);
      }
    }
  }]);
}();
Object.defineProperties(AudioListener, {
  length: {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 0
  }
});
Object.defineProperties(AudioListener.prototype, (_Object$definePropert = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$definePropert, Symbol.toStringTag, {
  __proto__: null,
  writable: false,
  enumerable: false,
  configurable: true,
  value: 'AudioListener'
}), "positionX", kEnumerableProperty), "positionY", kEnumerableProperty), "positionZ", kEnumerableProperty), "forwardX", kEnumerableProperty), "forwardY", kEnumerableProperty), "forwardZ", kEnumerableProperty), "upX", kEnumerableProperty), "upY", kEnumerableProperty), "upZ", kEnumerableProperty), _defineProperty(_defineProperty(_Object$definePropert, "setPosition", kEnumerableProperty), "setOrientation", kEnumerableProperty)));
module.exports = AudioListener;

/***/ }),

/***/ 8536:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

var conversions = __webpack_require__(5616);
var _require = __webpack_require__(4407),
  throwSanitizedError = _require.throwSanitizedError;
var _require2 = __webpack_require__(4019),
  kEnumerableProperty = _require2.kEnumerableProperty,
  kHiddenProperty = _require2.kHiddenProperty;
var _require3 = __webpack_require__(9439),
  kNapiObj = _require3.kNapiObj;
var AudioParam = __webpack_require__(5071);
var _context = /*#__PURE__*/new WeakMap();
var AudioNode = /*#__PURE__*/function (_EventTarget) {
  function AudioNode(context, options) {
    var _this;
    _classCallCheck(this, AudioNode);
    // Make constructor "private"
    if (_typeof(options) !== 'object' || !(kNapiObj in options)) {
      throw new TypeError('Illegal constructor');
    }
    _this = _callSuper(this, AudioNode, [options[kNapiObj]]);
    _classPrivateFieldInitSpec(_this, _context, null);
    _classPrivateFieldSet(_context, _this, context);
    Object.defineProperty(_this, kNapiObj, _objectSpread({
      value: options[kNapiObj]
    }, kHiddenProperty));
    return _this;
  }
  _inherits(AudioNode, _EventTarget);
  return _createClass(AudioNode, [{
    key: "context",
    get: function get() {
      return _classPrivateFieldGet(_context, this);
    }
  }, {
    key: "numberOfInputs",
    get: function get() {
      if (!(this instanceof AudioNode)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioNode\'');
      }
      return this[kNapiObj].numberOfInputs;
    }
  }, {
    key: "numberOfOutputs",
    get: function get() {
      if (!(this instanceof AudioNode)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioNode\'');
      }
      return this[kNapiObj].numberOfOutputs;
    }
  }, {
    key: "channelCount",
    get: function get() {
      if (!(this instanceof AudioNode)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioNode\'');
      }
      return this[kNapiObj].channelCount;
    },
    set: function set(value) {
      if (!(this instanceof AudioNode)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioNode\'');
      }
      value = conversions['unsigned long'](value, {
        context: "Failed to set the 'channelCount' property on 'AudioNode': Value"
      });
      try {
        this[kNapiObj].channelCount = value;
      } catch (err) {
        throwSanitizedError(err);
      }
    }
  }, {
    key: "channelCountMode",
    get: function get() {
      if (!(this instanceof AudioNode)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioNode\'');
      }
      return this[kNapiObj].channelCountMode;
    },
    set: function set(value) {
      if (!(this instanceof AudioNode)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioNode\'');
      }
      if (!['max', 'clamped-max', 'explicit'].includes(value)) {
        console.warn("Failed to set the 'channelCountMode' property on 'AudioNode': Value '".concat(value, "' is not a valid 'ChannelCountMode' enum value"));
        return;
      }
      try {
        this[kNapiObj].channelCountMode = value;
      } catch (err) {
        throwSanitizedError(err);
      }
    }
  }, {
    key: "channelInterpretation",
    get: function get() {
      if (!(this instanceof AudioNode)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioNode\'');
      }
      return this[kNapiObj].channelInterpretation;
    },
    set: function set(value) {
      if (!(this instanceof AudioNode)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioNode\'');
      }
      if (!['speakers', 'discrete'].includes(value)) {
        console.warn("Failed to set the 'channelInterpretation' property on 'AudioNode': Value '".concat(value, "' is not a valid 'ChannelInterpretation' enum value"));
        return;
      }
      try {
        this[kNapiObj].channelInterpretation = value;
      } catch (err) {
        throwSanitizedError(err);
      }
    }
  }, {
    key: "connect",
    value: function connect() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (!(this instanceof AudioNode)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioNode\'');
      }
      if (arguments.length < 1) {
        throw new TypeError("Failed to execute 'connect' on 'AudioNode': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      var destination;
      var output;
      var input;

      // note that audio listener params are not wrapped
      if (args[0] instanceof AudioNode) {
        destination = args[0][kNapiObj];
        if (args[1] !== undefined) {
          output = conversions['unsigned long'](args[1], {
            enforceRange: true,
            context: 'Failed to execute \'connect\' on \'AudioNode\':'
          });
        } else {
          output = 0;
        }
        if (args[2] !== undefined) {
          input = conversions['unsigned long'](args[2], {
            enforceRange: true,
            context: 'Failed to execute \'connect\' on \'AudioNode\':'
          });
        } else {
          input = 0;
        }
      } else if (args[0] instanceof AudioParam) {
        if (arguments.length > 2) {
          throw new TypeError('Failed to execute \'connect\' on \'AudioNode\': parameter 1 is not of type \'AudioNode\'');
        }
        destination = args[0][kNapiObj];
        if (args[1] !== undefined) {
          output = conversions['unsigned long'](args[1], {
            enforceRange: true,
            context: 'Failed to execute \'connect\' on \'AudioNode\':'
          });
        } else {
          output = 0;
        }

        // Rust does not make difference between AudioNode and AudioParam
        input = 0;
      } else {
        throw new TypeError('Failed to execute \'connect\' on \'AudioNode\': Overload resolution failed');
      }
      try {
        this[kNapiObj].connect(destination, output, input);
      } catch (err) {
        throwSanitizedError(err);
      }

      // return given destination
      return args[0];
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (!(this instanceof AudioNode)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioNode\'');
      }
      if (arguments.length > 2) {
        if (args[0] instanceof AudioNode) {
          var destination = args[0][kNapiObj];
          var output = conversions['unsigned long'](args[1], {
            enforceRange: true,
            context: 'Failed to execute \'disconnect\' on \'AudioNode\':'
          });
          var input = conversions['unsigned long'](args[2], {
            enforceRange: true,
            context: 'Failed to execute \'disconnect\' on \'AudioNode\':'
          });
          try {
            return this[kNapiObj].disconnect(destination, output, input);
          } catch (err) {
            throwSanitizedError(err);
          }
        } else {
          throw new TypeError('Failed to execute \'disconnect\' on \'AudioNode\': : Overload resolution failed');
        }
      } else if (arguments.length === 2) {
        if (args[0] instanceof AudioNode || args[0] instanceof AudioParam) {
          var _destination = args[0][kNapiObj];
          var _output = conversions['unsigned long'](args[1], {
            enforceRange: true,
            context: 'Failed to execute \'disconnect\' on \'AudioNode\':'
          });
          try {
            return this[kNapiObj].disconnect(_destination, _output);
          } catch (err) {
            throwSanitizedError(err);
          }
        } else {
          throw new TypeError('Failed to execute \'disconnect\' on \'AudioNode\': : Overload resolution failed');
        }
      } else if (arguments.length === 1) {
        if (args[0] instanceof AudioNode || args[0] instanceof AudioParam) {
          var _destination2 = args[0][kNapiObj];
          try {
            return this[kNapiObj].disconnect(_destination2);
          } catch (err) {
            throwSanitizedError(err);
          }
        } else if (Number.isFinite(args[0])) {
          var _output2 = conversions['unsigned long'](args[0], {
            enforceRange: true,
            context: 'Failed to execute \'disconnect\' on \'AudioNode\':'
          });
          try {
            return this[kNapiObj].disconnect(_output2);
          } catch (err) {
            throwSanitizedError(err);
          }
        }

        // Note that we don't have the "overload resolution failed" branch here
        // which seems to be aligned with browsers behavior
      }

      // Just call disconnect for remaning cases
      // - i.e. including node.disconnect(NaN), node.disconnect(null), etc.
      try {
        this[kNapiObj].disconnect();
      } catch (err) {
        throwSanitizedError(err);
      }
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(EventTarget));
Object.defineProperties(AudioNode, {
  length: {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 0
  }
});
Object.defineProperties(AudioNode.prototype, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
  __proto__: null,
  writable: false,
  enumerable: false,
  configurable: true,
  value: 'AudioNode'
}), "context", kEnumerableProperty), "numberOfInputs", kEnumerableProperty), "numberOfOutputs", kEnumerableProperty), "channelCount", kEnumerableProperty), "channelCountMode", kEnumerableProperty), "channelInterpretation", kEnumerableProperty), "connect", kEnumerableProperty), "disconnect", kEnumerableProperty));
module.exports = AudioNode;

/***/ }),

/***/ 5071:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _Object$definePropert;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4407),
  throwSanitizedError = _require2.throwSanitizedError;
var _require3 = __webpack_require__(4019),
  kEnumerableProperty = _require3.kEnumerableProperty,
  kHiddenProperty = _require3.kHiddenProperty;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj;
var AudioParam = /*#__PURE__*/function () {
  function AudioParam(options) {
    _classCallCheck(this, AudioParam);
    // Make constructor "private"
    if (_typeof(options) !== 'object' || !(kNapiObj in options) || options[kNapiObj]['Symbol.toStringTag'] !== 'AudioParam') {
      throw new TypeError('Illegal constructor');
    }
    Object.defineProperty(this, kNapiObj, _objectSpread({
      value: options[kNapiObj]
    }, kHiddenProperty));
  }
  return _createClass(AudioParam, [{
    key: "value",
    get: function get() {
      if (!(this instanceof AudioParam)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioParam\'');
      }
      return this[kNapiObj].value;
    },
    set: function set(value) {
      if (!(this instanceof AudioParam)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioParam\'');
      }
      value = conversions['float'](value, {
        context: "Failed to set the 'value' property on 'AudioParam': The provided float value"
      });
      try {
        this[kNapiObj].value = value;
      } catch (err) {
        throwSanitizedError(err);
      }
    }
  }, {
    key: "automationRate",
    get: function get() {
      if (!(this instanceof AudioParam)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioParam\'');
      }
      return this[kNapiObj].automationRate;
    },
    set: function set(value) {
      if (!(this instanceof AudioParam)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioParam\'');
      }
      if (!['a-rate', 'k-rate'].includes(value)) {
        console.warn("Failed to set the 'automationRate' property on 'AudioParam': Value '".concat(value, "' is not a valid 'AutomationRate' enum value"));
        return;
      }
      try {
        this[kNapiObj].automationRate = value;
      } catch (err) {
        throwSanitizedError(err);
      }
    }
  }, {
    key: "defaultValue",
    get: function get() {
      if (!(this instanceof AudioParam)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioParam\'');
      }
      return this[kNapiObj].defaultValue;
    }
  }, {
    key: "minValue",
    get: function get() {
      if (!(this instanceof AudioParam)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioParam\'');
      }
      return this[kNapiObj].minValue;
    }
  }, {
    key: "maxValue",
    get: function get() {
      if (!(this instanceof AudioParam)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioParam\'');
      }
      return this[kNapiObj].maxValue;
    }
  }, {
    key: "setValueAtTime",
    value: function setValueAtTime(value, startTime) {
      if (!(this instanceof AudioParam)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioParam\'');
      }
      if (arguments.length < 2) {
        throw new TypeError("Failed to execute 'setValueAtTime' on 'AudioParam': 2 argument required, but only ".concat(arguments.length, " present"));
      }
      value = conversions['float'](value, {
        context: "Failed to execute 'setValueAtTime' on 'AudioParam': Parameter 1"
      });
      startTime = conversions['double'](startTime, {
        context: "Failed to execute 'setValueAtTime' on 'AudioParam': Parameter 2"
      });
      try {
        this[kNapiObj].setValueAtTime(value, startTime);
      } catch (err) {
        throwSanitizedError(err);
      }
      return this;
    }
  }, {
    key: "linearRampToValueAtTime",
    value: function linearRampToValueAtTime(value, endTime) {
      if (!(this instanceof AudioParam)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioParam\'');
      }
      if (arguments.length < 2) {
        throw new TypeError("Failed to execute 'linearRampToValueAtTime' on 'AudioParam': 2 argument required, but only ".concat(arguments.length, " present"));
      }
      value = conversions['float'](value, {
        context: "Failed to execute 'linearRampToValueAtTime' on 'AudioParam': Parameter 1"
      });
      endTime = conversions['double'](endTime, {
        context: "Failed to execute 'linearRampToValueAtTime' on 'AudioParam': Parameter 2"
      });
      try {
        this[kNapiObj].linearRampToValueAtTime(value, endTime);
      } catch (err) {
        throwSanitizedError(err);
      }
      return this;
    }
  }, {
    key: "exponentialRampToValueAtTime",
    value: function exponentialRampToValueAtTime(value, endTime) {
      if (!(this instanceof AudioParam)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioParam\'');
      }
      if (arguments.length < 2) {
        throw new TypeError("Failed to execute 'exponentialRampToValueAtTime' on 'AudioParam': 2 argument required, but only ".concat(arguments.length, " present"));
      }
      value = conversions['float'](value, {
        context: "Failed to execute 'exponentialRampToValueAtTime' on 'AudioParam': Parameter 1"
      });
      endTime = conversions['double'](endTime, {
        context: "Failed to execute 'exponentialRampToValueAtTime' on 'AudioParam': Parameter 2"
      });
      try {
        this[kNapiObj].exponentialRampToValueAtTime(value, endTime);
      } catch (err) {
        throwSanitizedError(err);
      }
      return this;
    }
  }, {
    key: "setTargetAtTime",
    value: function setTargetAtTime(target, startTime, timeConstant) {
      if (!(this instanceof AudioParam)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioParam\'');
      }
      if (arguments.length < 3) {
        throw new TypeError("Failed to execute 'setTargetAtTime' on 'AudioParam': 3 argument required, but only ".concat(arguments.length, " present"));
      }
      target = conversions['float'](target, {
        context: "Failed to execute 'setTargetAtTime' on 'AudioParam': Parameter 1"
      });
      startTime = conversions['double'](startTime, {
        context: "Failed to execute 'setTargetAtTime' on 'AudioParam': Parameter 2"
      });
      timeConstant = conversions['float'](timeConstant, {
        context: "Failed to execute 'setTargetAtTime' on 'AudioParam': Parameter 3"
      });
      try {
        this[kNapiObj].setTargetAtTime(target, startTime, timeConstant);
      } catch (err) {
        throwSanitizedError(err);
      }
      return this;
    }
  }, {
    key: "setValueCurveAtTime",
    value: function setValueCurveAtTime(values, startTime, duration) {
      if (!(this instanceof AudioParam)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioParam\'');
      }
      if (arguments.length < 3) {
        throw new TypeError("Failed to execute 'setValueCurveAtTime' on 'AudioParam': 3 argument required, but only ".concat(arguments.length, " present"));
      }
      try {
        values = toSanitizedSequence(values, Float32Array);
      } catch (err) {
        throw new TypeError("Failed to execute 'setValueCurveAtTime': Parameter 1 ".concat(err.message));
      }
      startTime = conversions['double'](startTime, {
        context: "Failed to execute 'setValueCurveAtTime' on 'AudioParam': Parameter 2"
      });
      duration = conversions['double'](duration, {
        context: "Failed to execute 'setValueCurveAtTime' on 'AudioParam': Parameter 3"
      });
      try {
        this[kNapiObj].setValueCurveAtTime(values, startTime, duration);
      } catch (err) {
        throwSanitizedError(err);
      }
      return this;
    }
  }, {
    key: "cancelScheduledValues",
    value: function cancelScheduledValues(cancelTime) {
      if (!(this instanceof AudioParam)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioParam\'');
      }
      if (arguments.length < 1) {
        throw new TypeError("Failed to execute 'cancelScheduledValues' on 'AudioParam': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      cancelTime = conversions['double'](cancelTime, {
        context: "Failed to execute 'cancelScheduledValues' on 'AudioParam': Parameter 1"
      });
      try {
        this[kNapiObj].cancelScheduledValues(cancelTime);
      } catch (err) {
        throwSanitizedError(err);
      }
      return this;
    }
  }, {
    key: "cancelAndHoldAtTime",
    value: function cancelAndHoldAtTime(cancelTime) {
      if (!(this instanceof AudioParam)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioParam\'');
      }
      if (arguments.length < 1) {
        throw new TypeError("Failed to execute 'cancelAndHoldAtTime' on 'AudioParam': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      cancelTime = conversions['double'](cancelTime, {
        context: "Failed to execute 'cancelAndHoldAtTime' on 'AudioParam': Parameter 1"
      });
      try {
        this[kNapiObj].cancelAndHoldAtTime(cancelTime);
      } catch (err) {
        throwSanitizedError(err);
      }
      return this;
    }
  }]);
}();
Object.defineProperties(AudioParam, {
  length: {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 0
  }
});
Object.defineProperties(AudioParam.prototype, (_Object$definePropert = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$definePropert, Symbol.toStringTag, {
  __proto__: null,
  writable: false,
  enumerable: false,
  configurable: true,
  value: 'AudioParam'
}), "value", kEnumerableProperty), "automationRate", kEnumerableProperty), "defaultValue", kEnumerableProperty), "minValue", kEnumerableProperty), "maxValue", kEnumerableProperty), "setValueAtTime", kEnumerableProperty), "linearRampToValueAtTime", kEnumerableProperty), "exponentialRampToValueAtTime", kEnumerableProperty), "setTargetAtTime", kEnumerableProperty), _defineProperty(_defineProperty(_defineProperty(_Object$definePropert, "setValueCurveAtTime", kEnumerableProperty), "cancelScheduledValues", kEnumerableProperty), "cancelAndHoldAtTime", kEnumerableProperty)));
module.exports = AudioParam;

/***/ }),

/***/ 5249:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _require = __webpack_require__(9439),
  kPrivateConstructor = _require.kPrivateConstructor;
var _require2 = __webpack_require__(4019),
  kEnumerableProperty = _require2.kEnumerableProperty;
var _parameters = /*#__PURE__*/new WeakMap();
var AudioParamMap = /*#__PURE__*/function () {
  function AudioParamMap(options) {
    _classCallCheck(this, AudioParamMap);
    _classPrivateFieldInitSpec(this, _parameters, null);
    if (_typeof(options) !== 'object' || options[kPrivateConstructor] !== true) {
      throw new TypeError('Illegal constructor');
    }
    _classPrivateFieldSet(_parameters, this, options.parameters);
  }
  return _createClass(AudioParamMap, [{
    key: "size",
    get: function get() {
      return _classPrivateFieldGet(_parameters, this).size;
    }
  }, {
    key: "entries",
    value: function entries() {
      return _classPrivateFieldGet(_parameters, this).entries();
    }
  }, {
    key: "keys",
    value: function keys() {
      return _classPrivateFieldGet(_parameters, this).keys();
    }
  }, {
    key: "values",
    value: function values() {
      return _classPrivateFieldGet(_parameters, this).values();
    }
  }, {
    key: "forEach",
    value: function forEach(func) {
      return _classPrivateFieldGet(_parameters, this).forEach(func);
    }
  }, {
    key: "get",
    value: function get(name) {
      return _classPrivateFieldGet(_parameters, this).get(name);
    }
  }, {
    key: "has",
    value: function has(name) {
      return _classPrivateFieldGet(_parameters, this).has(name);
    }
  }]);
}();
Object.defineProperties(AudioParamMap, {
  length: {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 0
  }
});
Object.defineProperties(AudioParamMap.prototype, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
  __proto__: null,
  writable: false,
  enumerable: false,
  configurable: true,
  value: 'AudioParamMap'
}), Symbol.iterator, {
  value: AudioParamMap.prototype.entries,
  enumerable: false,
  configurable: true,
  writable: true
}), "size", {
  __proto__: null,
  enumerable: true,
  configurable: true
}), "entries", kEnumerableProperty), "keys", kEnumerableProperty), "values", kEnumerableProperty), "forEach", kEnumerableProperty), "get", kEnumerableProperty), "has", kEnumerableProperty));
module.exports = AudioParamMap;

/***/ }),

/***/ 1568:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(9439),
  kNapiObj = _require.kNapiObj,
  kOnUpdate = _require.kOnUpdate;
var _require2 = __webpack_require__(4019),
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(2873),
  propagateEvent = _require3.propagateEvent;
var _require4 = __webpack_require__(8461),
  AudioRenderCapacityEvent = _require4.AudioRenderCapacityEvent;
var _onupdate = /*#__PURE__*/new WeakMap();
var AudioRenderCapacity = /*#__PURE__*/function (_EventTarget) {
  function AudioRenderCapacity(options) {
    var _this;
    _classCallCheck(this, AudioRenderCapacity);
    // Make constructor "private"
    if (_typeof(options) !== 'object' || !(kNapiObj in options) || options[kNapiObj]['Symbol.toStringTag'] !== 'AudioRenderCapacity') {
      throw new TypeError('Illegal constructor');
    }
    _this = _callSuper(this, AudioRenderCapacity);
    _classPrivateFieldInitSpec(_this, _onupdate, null);
    _this[kNapiObj] = options[kNapiObj];
    _this[kNapiObj][kOnUpdate] = function (err, rawEvent) {
      var event = new AudioRenderCapacityEvent('update', rawEvent);
      propagateEvent(this, event);
    }.bind(_this);
    _this[kNapiObj].listen_to_events();
    return _this;
  }
  _inherits(AudioRenderCapacity, _EventTarget);
  return _createClass(AudioRenderCapacity, [{
    key: "onupdate",
    get: function get() {
      if (!(this instanceof AudioRenderCapacity)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioRenderCapacity\'');
      }
      return _classPrivateFieldGet(_onupdate, this);
    },
    set: function set(value) {
      if (!(this instanceof AudioRenderCapacity)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioRenderCapacity\'');
      }
      if (isFunction(value) || value === null) {
        _classPrivateFieldSet(_onupdate, this, value);
      }
    }
  }, {
    key: "start",
    value: function start() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!(this instanceof AudioRenderCapacity)) {
        throw new TypeError("Invalid Invocation: Value of 'this' must be of type 'AudioRenderCapacity'");
      }
      var targetOptions = {};
      if (_typeof(options) === 'object' && options !== null) {
        if (!('updateInterval' in options)) {
          throw new TypeError("Failed to execute 'start' on 'AudioRenderCapacity': Failed to read the 'updateInterval' property on 'AudioRenderCapacityOptions'");
        }
        targetOptions.updateInterval = conversions['double'](options.updateInterval, {
          context: "Failed to execute 'start' on 'AudioRenderCapacity': Failed to read the 'updateInterval' property on 'AudioRenderCapacityOptions': The provided value ()"
        });
      } else {
        targetOptions.updateInterval = 1;
      }
      return this[kNapiObj].start(targetOptions);
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!(this instanceof AudioRenderCapacity)) {
        throw new TypeError("Invalid Invocation: Value of 'this' must be of type 'AudioRenderCapacity'");
      }
      return this[kNapiObj].start();
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(EventTarget));
Object.defineProperties(AudioRenderCapacity, {
  length: {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 0
  }
});
Object.defineProperties(AudioRenderCapacity.prototype, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
  __proto__: null,
  writable: false,
  enumerable: false,
  configurable: true,
  value: 'AudioRenderCapacity'
}), "onupdate", kEnumerableProperty), "stop", kEnumerableProperty), "stop", kEnumerableProperty));
module.exports = AudioRenderCapacity;

/***/ }),

/***/ 7140:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(4407),
  throwSanitizedError = _require.throwSanitizedError;
var _require2 = __webpack_require__(2873),
  propagateEvent = _require2.propagateEvent;
var _require3 = __webpack_require__(4019),
  isFunction = _require3.isFunction,
  kEnumerableProperty = _require3.kEnumerableProperty;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kOnEnded = _require4.kOnEnded;
var AudioNode = __webpack_require__(8536);
var _onended = /*#__PURE__*/new WeakMap();
var AudioScheduledSourceNode = /*#__PURE__*/function (_AudioNode) {
  function AudioScheduledSourceNode(context, options) {
    var _this;
    _classCallCheck(this, AudioScheduledSourceNode);
    // Make constructor "private"
    if (_typeof(options) !== 'object' || !(kNapiObj in options)) {
      throw new TypeError('Illegal constructor');
    }
    _this = _callSuper(this, AudioScheduledSourceNode, [context, options]);

    // Add function to Napi object to bridge from Rust events to JS EventTarget
    // It will be effectively registered on rust side when `start` is called
    //
    // Note 2024-06-05 - We use bind instead of arrow function because arrow function
    // prevent the node to be collected by Scavenge step of GC, which can lead to
    // oversized graphs and performance issues.
    // cf. https://github.com/ircam-ismm/node-web-audio-api/tree/fix/118
    _classPrivateFieldInitSpec(_this, _onended, null);
    _this[kNapiObj][kOnEnded] = function (_err, rawEvent) {
      var event = new Event(rawEvent.type);
      propagateEvent(this, event);
    }.bind(_this);
    return _this;
  }
  _inherits(AudioScheduledSourceNode, _AudioNode);
  return _createClass(AudioScheduledSourceNode, [{
    key: "onended",
    get: function get() {
      if (!(this instanceof AudioScheduledSourceNode)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioScheduledSourceNode\'');
      }
      return _classPrivateFieldGet(_onended, this);
    },
    set: function set(value) {
      if (!(this instanceof AudioScheduledSourceNode)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioScheduledSourceNode\'');
      }
      if (isFunction(value) || value === null) {
        _classPrivateFieldSet(_onended, this, value);
      }
    }
  }, {
    key: "start",
    value: function start() {
      var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!(this instanceof AudioScheduledSourceNode)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioScheduledSourceNode\'');
      }
      when = conversions['double'](when, {
        context: "Failed to execute 'start' on 'AudioScheduledSourceNode': Parameter 1"
      });
      try {
        return this[kNapiObj].start(when);
      } catch (err) {
        throwSanitizedError(err);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!(this instanceof AudioScheduledSourceNode)) {
        throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioScheduledSourceNode\'');
      }
      when = conversions['double'](when, {
        context: "Failed to execute 'stop' on 'AudioScheduledSourceNode': Parameter 1"
      });
      try {
        return this[kNapiObj].stop(when);
      } catch (err) {
        throwSanitizedError(err);
      }
    }
  }]);
}(AudioNode);
Object.defineProperties(AudioScheduledSourceNode, {
  length: {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 0
  }
});
Object.defineProperties(AudioScheduledSourceNode.prototype, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
  __proto__: null,
  writable: false,
  enumerable: false,
  configurable: true,
  value: 'AudioScheduledSourceNode'
}), "onended", kEnumerableProperty), "start", kEnumerableProperty), "stop", kEnumerableProperty));
module.exports = AudioScheduledSourceNode;

/***/ }),

/***/ 6868:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = __webpack_require__(4573),
  resolveObjectURL = _require.resolveObjectURL;
var fs = (__webpack_require__(3024).promises);
var _require2 = __webpack_require__(3024),
  existsSync = _require2.existsSync;
var path = __webpack_require__(6760);
var _require3 = __webpack_require__(5919),
  Worker = _require3.Worker,
  MessageChannel = _require3.MessageChannel;
var _require4 = __webpack_require__(9439),
  kProcessorRegistered = _require4.kProcessorRegistered,
  kGetParameterDescriptors = _require4.kGetParameterDescriptors,
  kCreateProcessor = _require4.kCreateProcessor,
  kPrivateConstructor = _require4.kPrivateConstructor,
  kWorkletRelease = _require4.kWorkletRelease,
  kCheckProcessorsCreated = _require4.kCheckProcessorsCreated;
var _require5 = __webpack_require__(4019),
  kEnumerableProperty = _require5.kEnumerableProperty;
var caller = __webpack_require__(8350);
// cf. https://www.npmjs.com/package/node-fetch#commonjs
var fetch = function fetch() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return __webpack_require__.e(/* import() */ 115).then(__webpack_require__.bind(__webpack_require__, 3115)).then(function (_ref) {
    var fetch = _ref["default"];
    return fetch.apply(void 0, args);
  });
};

/**
 * Retrieve code with different module resolution strategies
 * - file - absolute or relative to cwd path
 * - URL
 * - Blob
 * - fallback: relative to caller site
 *   + in fs
 *   + caller site is url - required for wpt, probably no other use case
 */
var resolveModule = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(moduleUrl) {
    var code, pathname, buffer, res, blob, callerSite, url, origin, _baseUrl, _res, dirname, absDirname, _pathname, _buffer;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!existsSync(moduleUrl)) {
            _context.next = 14;
            break;
          }
          pathname = moduleUrl;
          _context.prev = 2;
          _context.next = 5;
          return fs.readFile(pathname);
        case 5:
          buffer = _context.sent;
          code = buffer.toString();
          _context.next = 12;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          throw new Error("Failed to execute 'addModule' on 'AudioWorklet': ".concat(_context.t0.message));
        case 12:
          _context.next = 76;
          break;
        case 14:
          if (!moduleUrl.startsWith('http')) {
            _context.next = 29;
            break;
          }
          _context.prev = 15;
          _context.next = 18;
          return fetch(moduleUrl);
        case 18:
          res = _context.sent;
          _context.next = 21;
          return res.text();
        case 21:
          code = _context.sent;
          _context.next = 27;
          break;
        case 24:
          _context.prev = 24;
          _context.t1 = _context["catch"](15);
          throw new Error("Failed to execute 'addModule' on 'AudioWorklet': ".concat(_context.t1.message));
        case 27:
          _context.next = 76;
          break;
        case 29:
          if (!moduleUrl.startsWith('blob:')) {
            _context.next = 42;
            break;
          }
          _context.prev = 30;
          blob = resolveObjectURL(moduleUrl);
          _context.next = 34;
          return blob.text();
        case 34:
          code = _context.sent;
          _context.next = 40;
          break;
        case 37:
          _context.prev = 37;
          _context.t2 = _context["catch"](30);
          throw new Error("Failed to execute 'addModule' on 'AudioWorklet': ".concat(_context.t2.message));
        case 40:
          _context.next = 76;
          break;
        case 42:
          // get caller site from error stack trace
          callerSite = caller(2);
          if (!callerSite.startsWith('http')) {
            _context.next = 59;
            break;
          }
          // handle origin relative and caller path relative URLs
          if (moduleUrl.startsWith('/')) {
            origin = new URL(baseUrl).origin;
            url = origin + moduleUrl;
          } else {
            // we know separators are '/'
            _baseUrl = callerSite.substr(0, callerSite.lastIndexOf('/'));
            url = _baseUrl + '/' + moduleUrl;
          }
          _context.prev = 45;
          _context.next = 48;
          return fetch(url);
        case 48:
          _res = _context.sent;
          _context.next = 51;
          return _res.text();
        case 51:
          code = _context.sent;
          _context.next = 57;
          break;
        case 54:
          _context.prev = 54;
          _context.t3 = _context["catch"](45);
          throw new Error("Failed to execute 'addModule' on 'AudioWorklet': ".concat(_context.t3.message));
        case 57:
          _context.next = 76;
          break;
        case 59:
          dirname = callerSite.substr(0, callerSite.lastIndexOf(path.sep));
          absDirname = dirname.replace('file://', '');
          _pathname = path.join(absDirname, moduleUrl);
          if (!existsSync(_pathname)) {
            _context.next = 75;
            break;
          }
          _context.prev = 63;
          _context.next = 66;
          return fs.readFile(_pathname);
        case 66:
          _buffer = _context.sent;
          code = _buffer.toString();
          _context.next = 73;
          break;
        case 70:
          _context.prev = 70;
          _context.t4 = _context["catch"](63);
          throw new Error("Failed to execute 'addModule' on 'AudioWorklet': ".concat(_context.t4.message));
        case 73:
          _context.next = 76;
          break;
        case 75:
          throw new Error("Failed to execute 'addModule' on 'AudioWorklet': Cannot resolve module ".concat(moduleUrl));
        case 76:
          return _context.abrupt("return", code);
        case 77:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 9], [15, 24], [30, 37], [45, 54], [63, 70]]);
  }));
  return function resolveModule(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var _workletId = /*#__PURE__*/new WeakMap();
var _sampleRate = /*#__PURE__*/new WeakMap();
var _port = /*#__PURE__*/new WeakMap();
var _idPromiseMap = /*#__PURE__*/new WeakMap();
var _promiseId = /*#__PURE__*/new WeakMap();
var _workletParamDescriptorsMap = /*#__PURE__*/new WeakMap();
var _pendingCreateProcessors = /*#__PURE__*/new WeakMap();
var _AudioWorklet_brand = /*#__PURE__*/new WeakSet();
var AudioWorklet = /*#__PURE__*/function () {
  function AudioWorklet(options) {
    _classCallCheck(this, AudioWorklet);
    _classPrivateMethodInitSpec(this, _AudioWorklet_brand);
    _classPrivateFieldInitSpec(this, _workletId, null);
    _classPrivateFieldInitSpec(this, _sampleRate, null);
    _classPrivateFieldInitSpec(this, _port, null);
    _classPrivateFieldInitSpec(this, _idPromiseMap, new Map());
    _classPrivateFieldInitSpec(this, _promiseId, 0);
    _classPrivateFieldInitSpec(this, _workletParamDescriptorsMap, new Map());
    _classPrivateFieldInitSpec(this, _pendingCreateProcessors, new Set());
    if (_typeof(options) !== 'object' || options[kPrivateConstructor] !== true) {
      throw new TypeError('Illegal constructor');
    }
    _classPrivateFieldSet(_workletId, this, options.workletId);
    _classPrivateFieldSet(_sampleRate, this, options.sampleRate);
  }
  return _createClass(AudioWorklet, [{
    key: "port",
    get: function get() {
      return _classPrivateFieldGet(_port, this);
    }
  }, {
    key: "addModule",
    value: function () {
      var _addModule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(moduleUrl) {
        var _this$promiseId,
          _this$promiseId2,
          _this = this;
        var code, promiseId;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return resolveModule(moduleUrl);
            case 2:
              code = _context2.sent;
              if (_classPrivateFieldGet(_port, this)) {
                _context2.next = 6;
                break;
              }
              _context2.next = 6;
              return new Promise(function (resolve) {
                var workletPathname = path.join(__dirname, 'AudioWorkletGlobalScope.js');
                _classPrivateFieldSet(_port, _this, new Worker(workletPathname, {
                  workerData: {
                    workletId: _classPrivateFieldGet(_workletId, _this),
                    sampleRate: _classPrivateFieldGet(_sampleRate, _this)
                  }
                }));
                _classPrivateFieldGet(_port, _this).on('online', resolve);
                _assertClassBrand(_AudioWorklet_brand, _this, _bindEvents).call(_this);
              });
            case 6:
              promiseId = (_classPrivateFieldSet(_promiseId, this, (_this$promiseId = _classPrivateFieldGet(_promiseId, this), _this$promiseId2 = _this$promiseId++, _this$promiseId)), _this$promiseId2); // This promise is resolved when the Worker returns the name and
              // parameterDescriptors from the added module
              _context2.next = 9;
              return new Promise(function (resolve, reject) {
                _classPrivateFieldGet(_idPromiseMap, _this).set(promiseId, {
                  resolve: resolve,
                  reject: reject
                });
                _classPrivateFieldGet(_port, _this).postMessage({
                  cmd: 'node-web-audio-api:worklet:add-module',
                  code: code,
                  promiseId: promiseId
                });
              });
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function addModule(_x2) {
        return _addModule.apply(this, arguments);
      }
      return addModule;
    }() // For OfflineAudioContext only, check that all processors have been properly
    // created before actual `startRendering`
  }, {
    key: kCheckProcessorsCreated,
    value: function () {
      var _value = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this2 = this;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve) {
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!(_classPrivateFieldGet(_pendingCreateProcessors, _this2).size !== 0)) {
                          _context3.next = 5;
                          break;
                        }
                        _context3.next = 3;
                        return new Promise(function (resolve) {
                          return setTimeout(resolve, 0);
                        });
                      case 3:
                        _context3.next = 0;
                        break;
                      case 5:
                        resolve();
                      case 6:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function (_x3) {
                  return _ref3.apply(this, arguments);
                };
              }()));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function value() {
        return _value.apply(this, arguments);
      }
      return value;
    }()
  }, {
    key: kProcessorRegistered,
    value: function value(name) {
      return Array.from(_classPrivateFieldGet(_workletParamDescriptorsMap, this).keys()).includes(name);
    }
  }, {
    key: kGetParameterDescriptors,
    value: function value(name) {
      return _classPrivateFieldGet(_workletParamDescriptorsMap, this).get(name);
    }
  }, {
    key: kCreateProcessor,
    value: function value(name, options, id) {
      _classPrivateFieldGet(_pendingCreateProcessors, this).add(id);
      var _MessageChannel = new MessageChannel(),
        port1 = _MessageChannel.port1,
        port2 = _MessageChannel.port2;
      // @todo - check if some processorOptions must be transfered as well
      _classPrivateFieldGet(_port, this).postMessage({
        cmd: 'node-web-audio-api:worklet:create-processor',
        name: name,
        id: id,
        options: options,
        port: port2
      }, [port2]);
      return port1;
    }
  }, {
    key: kWorkletRelease,
    value: function () {
      var _value2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _this3 = this;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!_classPrivateFieldGet(_port, this)) {
                _context5.next = 3;
                break;
              }
              _context5.next = 3;
              return new Promise(function (resolve) {
                _classPrivateFieldGet(_port, _this3).on('exit', resolve);
                _classPrivateFieldGet(_port, _this3).postMessage({
                  cmd: 'node-web-audio-api:worklet:exit'
                });
              });
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function value() {
        return _value2.apply(this, arguments);
      }
      return value;
    }()
  }]);
}();
function _bindEvents() {
  var _this4 = this;
  _classPrivateFieldGet(_port, this).on('message', function (event) {
    switch (event.cmd) {
      case 'node-web-audio-api:worklet:module-added':
        {
          var promiseId = event.promiseId;
          var _classPrivateFieldGet2 = _classPrivateFieldGet(_idPromiseMap, _this4).get(promiseId),
            resolve = _classPrivateFieldGet2.resolve;
          _classPrivateFieldGet(_idPromiseMap, _this4)["delete"](promiseId);
          resolve();
          break;
        }
      case 'node-web-audio-api:worklet:add-module-failed':
        {
          var _promiseId2 = event.promiseId,
            ctor = event.ctor,
            name = event.name,
            message = event.message;
          var _classPrivateFieldGet3 = _classPrivateFieldGet(_idPromiseMap, _this4).get(_promiseId2),
            reject = _classPrivateFieldGet3.reject;
          _classPrivateFieldGet(_idPromiseMap, _this4)["delete"](_promiseId2);
          var err = new globalThis[ctor](message, name);
          reject(err);
          break;
        }
      case 'node-web-audio-api:worlet:processor-registered':
        {
          var _name = event.name,
            parameterDescriptors = event.parameterDescriptors;
          _classPrivateFieldGet(_workletParamDescriptorsMap, _this4).set(_name, parameterDescriptors);
          break;
        }
      case 'node-web-audio-api:worklet:processor-created':
        {
          var id = event.id;
          _classPrivateFieldGet(_pendingCreateProcessors, _this4)["delete"](id);
          break;
        }
    }
  });
}
Object.defineProperties(AudioWorklet, {
  length: {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 0
  }
});
Object.defineProperties(AudioWorklet.prototype, _defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
  __proto__: null,
  writable: false,
  enumerable: false,
  configurable: true,
  value: 'AudioWorklet'
}), "addModule", kEnumerableProperty), "port", kEnumerableProperty));
module.exports = AudioWorklet;

/***/ }),

/***/ 5364:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4407),
  throwSanitizedError = _require2.throwSanitizedError;
var _require3 = __webpack_require__(9439),
  kNapiObj = _require3.kNapiObj,
  kProcessorRegistered = _require3.kProcessorRegistered,
  kGetParameterDescriptors = _require3.kGetParameterDescriptors,
  kPrivateConstructor = _require3.kPrivateConstructor,
  kCreateProcessor = _require3.kCreateProcessor;
var _require4 = __webpack_require__(4019),
  kEnumerableProperty = _require4.kEnumerableProperty;
var _require5 = __webpack_require__(2873),
  propagateEvent = _require5.propagateEvent;
var _require6 = __webpack_require__(8461),
  ErrorEvent = _require6.ErrorEvent;

/* eslint-enable no-unused-vars */

var AudioNode = __webpack_require__(8536);
var AudioParamMap = __webpack_require__(5249);
var IMPLEMENTATION_MAX_NUMBER_OF_CHANNELS = 32;
module.exports = function (jsExport, nativeBinding) {
  var _port = /*#__PURE__*/new WeakMap();
  var _parameters = /*#__PURE__*/new WeakMap();
  var AudioWorkletNode = /*#__PURE__*/function (_AudioNode) {
    function AudioWorkletNode(context, name, options) {
      var _this;
      _classCallCheck(this, AudioWorkletNode);
      if (arguments.length < 2) {
        throw new TypeError("Failed to construct 'AudioWorkletNode': 2 arguments required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.BaseAudioContext)) {
        throw new TypeError("Failed to construct 'AudioWorkletNode': argument 1 is not of type BaseAudioContext");
      }
      var parsedName = conversions['DOMString'](name, {
        context: "Failed to construct 'AudioWorkletNode': The given 'AudioWorkletProcessor' name"
      });
      if (!context.audioWorklet[kProcessorRegistered](parsedName)) {
        throw new DOMException("Failed to construct 'AudioWorkletNode': processor '".concat(parsedName, "' is not registered in 'AudioWorklet'"), 'InvalidStateError');
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && (_typeof(options) !== 'object' || options === null)) {
        throw new TypeError('Failed to construct \'AudioWorkletNode\': argument 3 is not of type \'AudioWorkletNodeOptions\'');
      }
      if (options && options.numberOfInputs !== undefined) {
        parsedOptions.numberOfInputs = conversions['unsigned long'](options.numberOfInputs, {
          enforceRange: true,
          context: "Failed to construct 'AudioWorkletNode': Failed to read the 'numberOfInputs' property from AudioWorkletNodeOptions: The provided value (".concat(options.numberOfInputs, "})")
        });
      } else {
        parsedOptions.numberOfInputs = 1;
      }
      if (options && options.numberOfOutputs !== undefined) {
        parsedOptions.numberOfOutputs = conversions['unsigned long'](options.numberOfOutputs, {
          enforceRange: true,
          context: "Failed to construct 'AudioWorkletNode': Failed to read the 'numberOfOutputs' property from AudioWorkletNodeOptions: The provided value (".concat(options.numberOfOutputs, "})")
        });
      } else {
        parsedOptions.numberOfOutputs = 1;
      }

      // If outputChannelCount exists,
      // - If any value in outputChannelCount is zero or greater than the implementation’s maximum number of channels, throw a NotSupportedError and abort the remaining steps.
      // - If the length of outputChannelCount does not equal numberOfOutputs, throw an IndexSizeError and abort the remaining steps.
      // - If both numberOfInputs and numberOfOutputs are 1, set the channel count of the node output to the one value in outputChannelCount.
      // - Otherwise set the channel count of the kth output of the node to the kth element of outputChannelCount sequence and return.
      if (options && options.outputChannelCount !== undefined) {
        try {
          parsedOptions.outputChannelCount = toSanitizedSequence(options.outputChannelCount, Uint32Array);
        } catch (err) {
          throw new TypeError("Failed to construct 'AudioWorkletNode': Failed to read the 'outputChannelCount' property from AudioWorkletNodeOptions: The provided value ".concat(err.message));
        }
        parsedOptions.outputChannelCount.forEach(function (value, index) {
          if (value <= 0 || value > IMPLEMENTATION_MAX_NUMBER_OF_CHANNELS) {
            throw new DOMException("Failed to construct 'AudioWorkletNode': Invalid 'outputChannelCount' property from AudioWorkletNodeOptions: Value at index ".concat(index, " in outside supported range [1, 32]"), 'NotSupportedError');
          }
        });
        if (parsedOptions.numberOfOutputs !== parsedOptions.outputChannelCount.length) {
          throw new DOMException("Failed to construct 'AudioWorkletNode': Invalid 'outputChannelCount' property from AudioWorkletNodeOptions: 'outputChannelCount' length (".concat(parsedOptions.outputChannelCount.length, ") does not equal 'numberOfOutputs' (").concat(parsedOptions.numberOfOutputs, ")"), 'IndexSizeError');
        }
      } else {
        // - If both numberOfInputs and numberOfOutputs are 1, set the initial channel count of the node output to 1 and return.
        //   NOTE: For this case, the output chanel count will change to computedNumberOfChannels dynamically based on the input and the channelCountMode at runtime.
        if (parsedOptions.numberOfInputs === 1 && parsedOptions.numberOfOutputs === 1) {
          // rust waits for an empty Vec as the special case value
          parsedOptions.outputChannelCount = new Uint32Array(0);
        } else {
          // - Otherwise set the channel count of each output of the node to 1 and return.
          parsedOptions.outputChannelCount = new Uint32Array(parsedOptions.numberOfOutputs);
          parsedOptions.outputChannelCount.fill(1);
        }
      }

      // @todo
      // - This should be a "record", let's treat it as a raw object of now
      // - Check if this needs to checked against the declared `parameterDescriptors`
      if (options && options.parameterData !== undefined) {
        if (_typeof(options.parameterData) === 'object' && options.parameterData !== null) {
          parsedOptions.parameterData = {};
          for (var _ref3 in Object.entries(options.parameterData)) {
            var _ref2 = _slicedToArray(_ref3, 2);
            var key = _ref2[0];
            var value = _ref2[1];
            var parsedKey = conversions['DOMString'](key, {
              context: "Failed to construct 'AudioWorkletNode': Invalid 'parameterData' property from AudioWorkletNodeOptions: Invalid key (".concat(key, ")")
            });
            var parsedValue = conversions['double'](value, {
              context: "Failed to construct 'AudioWorkletNode': Invalid 'parameterData' property from AudioWorkletNodeOptions: Invalid value for key ".concat(parsedKey)
            });
            parsedOptions.parameterData[parsedKey] = parsedValue;
          }
        } else {
          throw new TypeError("Failed to construct 'AudioWorkletNode': Invalid 'parameterData' property from AudioWorkletNodeOptions: 'outputChannelCount' length (".concat(parsedOptions.outputChannelCount.length, ") does not equal 'numberOfOutputs' (").concat(parsedOptions.numberOfOutputs, ")"));
        }
      } else {
        parsedOptions.parameterData = {};
      }

      // These ones are for the JS processor
      if (options && options.processorOptions !== undefined) {
        if (_typeof(options.processorOptions) === 'object' && options.processorOptions !== null) {
          parsedOptions.processorOptions = Object.assign({}, options.processorOptions);
        } else {
          throw new TypeError("Failed to construct 'AudioWorkletNode': Invalid 'processorOptions' property from AudioWorkletNodeOptions: 'processorOptions' is not an object");
        }
      } else {
        parsedOptions.processorOptions = {};
      }

      // AudioNodeOptions
      if (options && options.channelCount !== undefined) {
        parsedOptions.channelCount = conversions['unsigned long'](options.channelCount, {
          enforceRange: true,
          context: "Failed to construct 'AudioWorkletNode': Failed to read the 'channelCount' property from AudioWorkletNodeOptions: The provided value '".concat(options.channelCount, "'")
        });

        // if we delegate this check to Rust, this can poison a Mutex
        // (probably the `audio_param_descriptor_channel` one)
        if (parsedOptions.channelCount <= 0 || parsedOptions.channelCount > IMPLEMENTATION_MAX_NUMBER_OF_CHANNELS) {
          throw new DOMException("Failed to construct 'AudioWorkletNode': Invalid 'channelCount' property: Number of channels: ".concat(parsedOptions.channelCount, " is outside range [1, 32]"), 'NotSupportedError');
        }
      }
      if (options && options.channelCountMode !== undefined) {
        if (!['max', 'clamped-max', 'explicit'].includes(options.channelCountMode)) {
          throw new TypeError("Failed to construct 'AudioWorkletNode': Failed to read the 'channelCountMode' property from 'AudioNodeOptions': The provided value '".concat(options.channelCountMode, "' is not a valid enum value of type ChannelCountMode"));
        }
        parsedOptions.channelCountMode = conversions['DOMString'](options.channelCountMode, {
          context: "Failed to construct 'AudioWorkletNode': Failed to read the 'channelCount' property from AudioWorkletNodeOptions: The provided value '".concat(options.channelCountMode, "'")
        });
      }
      if (options && options.channelInterpretation !== undefined) {
        if (!['speakers', 'discrete'].includes(options.channelInterpretation)) {
          throw new TypeError("Failed to construct 'AudioWorkletNode': Failed to read the 'channelInterpretation' property from 'AudioNodeOptions': The provided value '".concat(options.channelInterpretation, "' is not a valid enum value of type ChannelCountMode"));
        }
        parsedOptions.channelInterpretation = conversions['DOMString'](options.channelInterpretation, {
          context: "Failed to construct 'AudioWorkletNode': Failed to read the 'channelInterpretation' property from AudioWorkletNodeOptions: The provided value '".concat(options.channelInterpretation, "'")
        });
      }

      // Create NapiAudioWorkletNode
      var parameterDescriptors = context.audioWorklet[kGetParameterDescriptors](parsedName);
      var napiObj;
      try {
        napiObj = new nativeBinding.AudioWorkletNode(context[kNapiObj], parsedName, parsedOptions, parameterDescriptors);
      } catch (err) {
        throwSanitizedError(err);
      }
      _this = _callSuper(this, AudioWorkletNode, [context, _defineProperty({}, kNapiObj, napiObj)]);
      _classPrivateFieldInitSpec(_this, _port, null);
      _classPrivateFieldInitSpec(_this, _parameters, {});
      var parameters = new Map();
      for (var _name in _this[kNapiObj].parameters) {
        var audioParam = new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].parameters[_name]));
        parameters.set(_name, audioParam);
      }
      _classPrivateFieldSet(_parameters, _this, new AudioParamMap(_defineProperty(_defineProperty({}, kPrivateConstructor, true), "parameters", parameters)));

      // Create JS processor
      _classPrivateFieldSet(_port, _this, context.audioWorklet[kCreateProcessor](parsedName, parsedOptions, napiObj.id));
      _classPrivateFieldGet(_port, _this).on('message', function (msg) {
        // ErrorEvent named processorerror
        switch (msg.cmd) {
          case 'node-web-audio-api:worklet:ctor-error':
            {
              var message = "Failed to construct '".concat(parsedName, "' AudioWorkletProcessor: ").concat(msg.err.message);
              var event = new ErrorEvent('processorerror', {
                message: message,
                error: msg.err
              });
              propagateEvent(_this, event);
              break;
            }
          case 'node-web-audio-api:worklet:process-invalid':
            {
              var _message = "Failed to execute 'process' on '".concat(parsedName, "' AudioWorkletProcessor: ").concat(msg.err.message);
              var error = new TypeError(_message);
              error.stack = msg.err.stack.replace(msg.err.message, _message);
              var _event = new ErrorEvent('processorerror', {
                message: _message,
                error: error
              });
              propagateEvent(_this, _event);
              break;
            }
          case 'node-web-audio-api:worklet:process-error':
            {
              var _message2 = "Failed to execute 'process' on '".concat(parsedName, "' AudioWorkletProcessor: ").concat(msg.err.message);
              var _event2 = new ErrorEvent('processorerror', {
                message: _message2,
                error: msg.err
              });
              propagateEvent(_this, _event2);
              break;
            }
        }
      });
      return _this;
    }
    _inherits(AudioWorkletNode, _AudioNode);
    return _createClass(AudioWorkletNode, [{
      key: "parameters",
      get: function get() {
        if (!(this instanceof AudioWorkletNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioWorkletNode\'');
        }
        return _classPrivateFieldGet(_parameters, this);
      }
    }, {
      key: "port",
      get: function get() {
        if (!(this instanceof AudioWorkletNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'AudioWorkletNode\'');
        }
        return _classPrivateFieldGet(_port, this);
      }
    }]);
  }(AudioNode);
  Object.defineProperties(AudioWorkletNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 2
    }
  });
  Object.defineProperties(AudioWorkletNode.prototype, _defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'AudioWorkletNode'
  }), "parameters", kEnumerableProperty), "port", kEnumerableProperty));
  return AudioWorkletNode;
};

/***/ }),

/***/ 796:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

var _require = __webpack_require__(4019),
  isFunction = _require.isFunction,
  kEnumerableProperty = _require.kEnumerableProperty,
  kHiddenProperty = _require.kHiddenProperty;
var _require2 = __webpack_require__(9439),
  kNapiObj = _require2.kNapiObj,
  kPrivateConstructor = _require2.kPrivateConstructor;
var AudioWorklet = __webpack_require__(6868);
module.exports = function (jsExport, _nativeBinding) {
  var _Object$definePropert;
  var _audioWorklet = /*#__PURE__*/new WeakMap();
  var _destination = /*#__PURE__*/new WeakMap();
  var _listener = /*#__PURE__*/new WeakMap();
  var BaseAudioContext = /*#__PURE__*/function (_EventTarget) {
    function BaseAudioContext(options) {
      var _this;
      _classCallCheck(this, BaseAudioContext);
      // Make constructor "private"
      if (_typeof(options) !== 'object' || !(kNapiObj in options)) {
        throw new TypeError('Illegal constructor');
      }
      _this = _callSuper(this, BaseAudioContext);
      _classPrivateFieldInitSpec(_this, _audioWorklet, null);
      _classPrivateFieldInitSpec(_this, _destination, null);
      _classPrivateFieldInitSpec(_this, _listener, null);
      Object.defineProperty(_this, kNapiObj, _objectSpread({
        value: options[kNapiObj]
      }, kHiddenProperty));
      _classPrivateFieldSet(_audioWorklet, _this, new AudioWorklet(_defineProperty(_defineProperty(_defineProperty({}, kPrivateConstructor, true), "workletId", _this[kNapiObj].workletId), "sampleRate", _this[kNapiObj].sampleRate)));
      _classPrivateFieldSet(_destination, _this, new jsExport.AudioDestinationNode(_this, _defineProperty({}, kNapiObj, _this[kNapiObj].destination)));
      return _this;
    }
    _inherits(BaseAudioContext, _EventTarget);
    return _createClass(BaseAudioContext, [{
      key: "audioWorklet",
      get: function get() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        return _classPrivateFieldGet(_audioWorklet, this);
      }
    }, {
      key: "destination",
      get: function get() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        return _classPrivateFieldGet(_destination, this);
      }
    }, {
      key: "listener",
      get: function get() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        if (_classPrivateFieldGet(_listener, this) === null) {
          _classPrivateFieldSet(_listener, this, new jsExport.AudioListener(_defineProperty({}, kNapiObj, this[kNapiObj].listener)));
        }
        return _classPrivateFieldGet(_listener, this);
      }
    }, {
      key: "sampleRate",
      get: function get() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        return this[kNapiObj].sampleRate;
      }
    }, {
      key: "currentTime",
      get: function get() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        return this[kNapiObj].currentTime;
      }

      // @todo - implement in upstream crate + pass to AudioWorkletGlobalScope
      // get renderQuantumSize() {
      //   if (!(this instanceof BaseAudioContext)) {
      //     throw new TypeError("Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'");
      //   }

      //   return this[kNapiObj].renderQuantumSize;
      // }
    }, {
      key: "state",
      get: function get() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        return this[kNapiObj].state;
      }
    }, {
      key: "onstatechange",
      get: function get() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        return this._statechange || null;
      },
      set: function set(value) {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        if (isFunction(value) || value === null) {
          this._statechange = value;
        }
      }

      // This is not exactly what the spec says, but if we reject the promise
      // when decodeErrorCallback is present the program will crash in an
      // unexpected manner
      // cf. https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-decodeaudiodata
    }, {
      key: "decodeAudioData",
      value: function () {
        var _decodeAudioData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(arrayBuffer) {
          var decodeSuccessCallback,
            decodeErrorCallback,
            nativeAudioBuffer,
            audioBuffer,
            error,
            _args = arguments;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                decodeSuccessCallback = _args.length > 1 && _args[1] !== undefined ? _args[1] : undefined;
                decodeErrorCallback = _args.length > 2 && _args[2] !== undefined ? _args[2] : undefined;
                if (this instanceof BaseAudioContext) {
                  _context.next = 4;
                  break;
                }
                throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
              case 4:
                if (!(_args.length < 1)) {
                  _context.next = 6;
                  break;
                }
                throw new TypeError("Failed to execute 'decodeAudioData' on 'BaseAudioContext': 1 argument required, but only ".concat(_args.length, " present"));
              case 6:
                if (arrayBuffer instanceof ArrayBuffer) {
                  _context.next = 8;
                  break;
                }
                throw new TypeError('Failed to execute "decodeAudioData": parameter 1 is not of type "ArrayBuffer"');
              case 8:
                _context.prev = 8;
                _context.next = 11;
                return this[kNapiObj].decodeAudioData(arrayBuffer);
              case 11:
                nativeAudioBuffer = _context.sent;
                audioBuffer = new jsExport.AudioBuffer(_defineProperty({}, kNapiObj, nativeAudioBuffer));
                if (!isFunction(decodeSuccessCallback)) {
                  _context.next = 17;
                  break;
                }
                decodeSuccessCallback(audioBuffer);
                _context.next = 18;
                break;
              case 17:
                return _context.abrupt("return", audioBuffer);
              case 18:
                _context.next = 28;
                break;
              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](8);
                error = new DOMException("Failed to execute 'decodeAudioData': ".concat(_context.t0.message), 'EncodingError');
                if (!isFunction(decodeErrorCallback)) {
                  _context.next = 27;
                  break;
                }
                decodeErrorCallback(error);
                _context.next = 28;
                break;
              case 27:
                throw error;
              case 28:
              case "end":
                return _context.stop();
            }
          }, _callee, this, [[8, 20]]);
        }));
        function decodeAudioData(_x) {
          return _decodeAudioData.apply(this, arguments);
        }
        return decodeAudioData;
      }()
    }, {
      key: "createBuffer",
      value: function createBuffer(numberOfChannels, length, sampleRate) {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        if (arguments.length < 3) {
          throw new TypeError("Failed to execute 'createBuffer' on 'BaseAudioContext': 3 argument required, but only ".concat(arguments.length, " present"));
        }
        var options = {};
        if (numberOfChannels !== undefined) {
          options.numberOfChannels = numberOfChannels;
        }
        if (length !== undefined) {
          options.length = length;
        }
        if (sampleRate !== undefined) {
          options.sampleRate = sampleRate;
        }
        return new jsExport.AudioBuffer(options);
      }
    }, {
      key: "createPeriodicWave",
      value: function createPeriodicWave(real, imag) {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        if (arguments.length < 2) {
          throw new TypeError("Failed to execute 'createPeriodicWave' on 'BaseAudioContext': 2 argument required, but only ".concat(arguments.length, " present"));
        }
        var options = {};
        if (real !== undefined) {
          options.real = real;
        }
        if (imag !== undefined) {
          options.imag = imag;
        }
        return new jsExport.PeriodicWave(this, options);
      }

      // --------------------------------------------------------------------
      // Factory Methods (use the patched AudioNodes)
      // --------------------------------------------------------------------
    }, {
      key: "createScriptProcessor",
      value: function createScriptProcessor() {
        var bufferSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var numberOfInputChannels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        var numberOfOutputChannels = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        var options = {
          bufferSize: bufferSize,
          numberOfInputChannels: numberOfInputChannels,
          numberOfOutputChannels: numberOfOutputChannels
        };
        return new jsExport.ScriptProcessorNode(this, options);
      }
    }, {
      key: "createAnalyser",
      value: function createAnalyser() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        var options = {};
        return new jsExport.AnalyserNode(this, options);
      }
    }, {
      key: "createBufferSource",
      value: function createBufferSource() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        var options = {};
        return new jsExport.AudioBufferSourceNode(this, options);
      }
    }, {
      key: "createBiquadFilter",
      value: function createBiquadFilter() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        var options = {};
        return new jsExport.BiquadFilterNode(this, options);
      }
    }, {
      key: "createChannelMerger",
      value: function createChannelMerger() {
        var numberOfInputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        var options = {
          numberOfInputs: numberOfInputs
        };
        return new jsExport.ChannelMergerNode(this, options);
      }
    }, {
      key: "createChannelSplitter",
      value: function createChannelSplitter() {
        var numberOfOutputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        var options = {
          numberOfOutputs: numberOfOutputs
        };
        return new jsExport.ChannelSplitterNode(this, options);
      }
    }, {
      key: "createConstantSource",
      value: function createConstantSource() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        var options = {};
        return new jsExport.ConstantSourceNode(this, options);
      }
    }, {
      key: "createConvolver",
      value: function createConvolver() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        var options = {};
        return new jsExport.ConvolverNode(this, options);
      }
    }, {
      key: "createDelay",
      value: function createDelay() {
        var maxDelayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.0;
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        var options = {
          maxDelayTime: maxDelayTime
        };
        return new jsExport.DelayNode(this, options);
      }
    }, {
      key: "createDynamicsCompressor",
      value: function createDynamicsCompressor() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        var options = {};
        return new jsExport.DynamicsCompressorNode(this, options);
      }
    }, {
      key: "createGain",
      value: function createGain() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        var options = {};
        return new jsExport.GainNode(this, options);
      }
    }, {
      key: "createIIRFilter",
      value: function createIIRFilter(feedforward, feedback) {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        var options = {
          feedforward: feedforward,
          feedback: feedback
        };
        return new jsExport.IIRFilterNode(this, options);
      }
    }, {
      key: "createOscillator",
      value: function createOscillator() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        var options = {};
        return new jsExport.OscillatorNode(this, options);
      }
    }, {
      key: "createPanner",
      value: function createPanner() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        var options = {};
        return new jsExport.PannerNode(this, options);
      }
    }, {
      key: "createStereoPanner",
      value: function createStereoPanner() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        var options = {};
        return new jsExport.StereoPannerNode(this, options);
      }
    }, {
      key: "createWaveShaper",
      value: function createWaveShaper() {
        if (!(this instanceof BaseAudioContext)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BaseAudioContext\'');
        }
        var options = {};
        return new jsExport.WaveShaperNode(this, options);
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(EventTarget));
  Object.defineProperties(BaseAudioContext, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 0
    }
  });
  Object.defineProperties(BaseAudioContext.prototype, (_Object$definePropert = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$definePropert, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'BaseAudioContext'
  }), "createScriptProcessor", kEnumerableProperty), "createAnalyser", kEnumerableProperty), "createBufferSource", kEnumerableProperty), "createBiquadFilter", kEnumerableProperty), "createChannelMerger", kEnumerableProperty), "createChannelSplitter", kEnumerableProperty), "createConstantSource", kEnumerableProperty), "createConvolver", kEnumerableProperty), "createDelay", kEnumerableProperty), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$definePropert, "createDynamicsCompressor", kEnumerableProperty), "createGain", kEnumerableProperty), "createIIRFilter", kEnumerableProperty), "createOscillator", kEnumerableProperty), "createPanner", kEnumerableProperty), "createStereoPanner", kEnumerableProperty), "createWaveShaper", kEnumerableProperty), "listener", kEnumerableProperty), "destination", kEnumerableProperty), "sampleRate", kEnumerableProperty), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$definePropert, "currentTime", kEnumerableProperty), "state", kEnumerableProperty), "onstatechange", kEnumerableProperty), "decodeAudioData", kEnumerableProperty), "createBuffer", kEnumerableProperty), "createPeriodicWave", kEnumerableProperty)));
  return BaseAudioContext;
};

/***/ }),

/***/ 8440:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(4407),
  throwSanitizedError = _require3.throwSanitizedError;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kAudioBuffer = _require4.kAudioBuffer;
/* eslint-enable no-unused-vars */

var AudioNode = __webpack_require__(8536);
module.exports = function (jsExport, nativeBinding) {
  var _frequency = /*#__PURE__*/new WeakMap();
  var _detune = /*#__PURE__*/new WeakMap();
  var _Q = /*#__PURE__*/new WeakMap();
  var _gain = /*#__PURE__*/new WeakMap();
  var BiquadFilterNode = /*#__PURE__*/function (_AudioNode) {
    function BiquadFilterNode(context, options) {
      var _this;
      _classCallCheck(this, BiquadFilterNode);
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'BiquadFilterNode': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.BaseAudioContext)) {
        throw new TypeError("Failed to construct 'BiquadFilterNode': argument 1 is not of type BaseAudioContext");
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && _typeof(options) !== 'object') {
        throw new TypeError('Failed to construct \'BiquadFilterNode\': argument 2 is not of type \'BiquadFilterOptions\'');
      }
      if (options && options.type !== undefined) {
        if (!['lowpass', 'highpass', 'bandpass', 'lowshelf', 'highshelf', 'peaking', 'notch', 'allpass'].includes(options.type)) {
          throw new TypeError("Failed to construct 'BiquadFilterNode': Failed to read the 'type' property from BiquadFilterOptions: The provided value '".concat(options.type, "' is not a valid enum value of type BiquadFilterType"));
        }
        parsedOptions.type = conversions['DOMString'](options.type, {
          context: "Failed to construct 'BiquadFilterNode': Failed to read the 'type' property from BiquadFilterOptions: The provided value '".concat(options.type, "'")
        });
      } else {
        parsedOptions.type = 'lowpass';
      }
      if (options && options.Q !== undefined) {
        parsedOptions.Q = conversions['float'](options.Q, {
          context: "Failed to construct 'BiquadFilterNode': Failed to read the 'Q' property from BiquadFilterOptions: The provided value (".concat(options.Q, "})")
        });
      } else {
        parsedOptions.Q = 1;
      }
      if (options && options.detune !== undefined) {
        parsedOptions.detune = conversions['float'](options.detune, {
          context: "Failed to construct 'BiquadFilterNode': Failed to read the 'detune' property from BiquadFilterOptions: The provided value (".concat(options.detune, "})")
        });
      } else {
        parsedOptions.detune = 0;
      }
      if (options && options.frequency !== undefined) {
        parsedOptions.frequency = conversions['float'](options.frequency, {
          context: "Failed to construct 'BiquadFilterNode': Failed to read the 'frequency' property from BiquadFilterOptions: The provided value (".concat(options.frequency, "})")
        });
      } else {
        parsedOptions.frequency = 350;
      }
      if (options && options.gain !== undefined) {
        parsedOptions.gain = conversions['float'](options.gain, {
          context: "Failed to construct 'BiquadFilterNode': Failed to read the 'gain' property from BiquadFilterOptions: The provided value (".concat(options.gain, "})")
        });
      } else {
        parsedOptions.gain = 0;
      }
      if (options && options.channelCount !== undefined) {
        parsedOptions.channelCount = conversions['unsigned long'](options.channelCount, {
          enforceRange: true,
          context: "Failed to construct 'BiquadFilterNode': Failed to read the 'channelCount' property from BiquadFilterOptions: The provided value '".concat(options.channelCount, "'")
        });
      }
      if (options && options.channelCountMode !== undefined) {
        parsedOptions.channelCountMode = conversions['DOMString'](options.channelCountMode, {
          context: "Failed to construct 'BiquadFilterNode': Failed to read the 'channelCount' property from BiquadFilterOptions: The provided value '".concat(options.channelCountMode, "'")
        });
      }
      if (options && options.channelInterpretation !== undefined) {
        parsedOptions.channelInterpretation = conversions['DOMString'](options.channelInterpretation, {
          context: "Failed to construct 'BiquadFilterNode': Failed to read the 'channelInterpretation' property from BiquadFilterOptions: The provided value '".concat(options.channelInterpretation, "'")
        });
      }
      var napiObj;
      try {
        napiObj = new nativeBinding.BiquadFilterNode(context[kNapiObj], parsedOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      _this = _callSuper(this, BiquadFilterNode, [context, _defineProperty({}, kNapiObj, napiObj)]);
      _classPrivateFieldInitSpec(_this, _frequency, null);
      _classPrivateFieldInitSpec(_this, _detune, null);
      _classPrivateFieldInitSpec(_this, _Q, null);
      _classPrivateFieldInitSpec(_this, _gain, null);
      _classPrivateFieldSet(_frequency, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].frequency)));
      _classPrivateFieldSet(_detune, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].detune)));
      _classPrivateFieldSet(_Q, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].Q)));
      _classPrivateFieldSet(_gain, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].gain)));
      return _this;
    }
    _inherits(BiquadFilterNode, _AudioNode);
    return _createClass(BiquadFilterNode, [{
      key: "frequency",
      get: function get() {
        if (!(this instanceof BiquadFilterNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BiquadFilterNode\'');
        }
        return _classPrivateFieldGet(_frequency, this);
      }
    }, {
      key: "detune",
      get: function get() {
        if (!(this instanceof BiquadFilterNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BiquadFilterNode\'');
        }
        return _classPrivateFieldGet(_detune, this);
      }
    }, {
      key: "Q",
      get: function get() {
        if (!(this instanceof BiquadFilterNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BiquadFilterNode\'');
        }
        return _classPrivateFieldGet(_Q, this);
      }
    }, {
      key: "gain",
      get: function get() {
        if (!(this instanceof BiquadFilterNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BiquadFilterNode\'');
        }
        return _classPrivateFieldGet(_gain, this);
      }
    }, {
      key: "type",
      get: function get() {
        if (!(this instanceof BiquadFilterNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BiquadFilterNode\'');
        }
        return this[kNapiObj].type;
      },
      set: function set(value) {
        if (!(this instanceof BiquadFilterNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BiquadFilterNode\'');
        }
        if (!['lowpass', 'highpass', 'bandpass', 'lowshelf', 'highshelf', 'peaking', 'notch', 'allpass'].includes(value)) {
          console.warn("Failed to set the 'type' property on 'BiquadFilterNode': Value '".concat(value, "' is not a valid 'BiquadFilterType' enum value"));
          return;
        }
        try {
          this[kNapiObj].type = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "getFrequencyResponse",
      value: function getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
        if (!(this instanceof BiquadFilterNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'BiquadFilterNode\'');
        }
        if (arguments.length < 3) {
          throw new TypeError("Failed to execute 'getFrequencyResponse' on 'BiquadFilterNode': 3 argument required, but only ".concat(arguments.length, " present"));
        }
        if (!(frequencyHz instanceof Float32Array)) {
          throw new TypeError("Failed to execute 'getFrequencyResponse' on 'BiquadFilterNode': Parameter 1 is not of type 'Float32Array'");
        }
        if (!(magResponse instanceof Float32Array)) {
          throw new TypeError("Failed to execute 'getFrequencyResponse' on 'BiquadFilterNode': Parameter 2 is not of type 'Float32Array'");
        }
        if (!(phaseResponse instanceof Float32Array)) {
          throw new TypeError("Failed to execute 'getFrequencyResponse' on 'BiquadFilterNode': Parameter 3 is not of type 'Float32Array'");
        }
        try {
          return this[kNapiObj].getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }]);
  }(AudioNode);
  Object.defineProperties(BiquadFilterNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 1
    }
  });
  Object.defineProperties(BiquadFilterNode.prototype, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'BiquadFilterNode'
  }), "frequency", kEnumerableProperty), "detune", kEnumerableProperty), "Q", kEnumerableProperty), "gain", kEnumerableProperty), "type", kEnumerableProperty), "getFrequencyResponse", kEnumerableProperty));
  return BiquadFilterNode;
};

/***/ }),

/***/ 9599:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(4407),
  throwSanitizedError = _require3.throwSanitizedError;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kAudioBuffer = _require4.kAudioBuffer;
/* eslint-enable no-unused-vars */

var AudioNode = __webpack_require__(8536);
module.exports = function (jsExport, nativeBinding) {
  var ChannelMergerNode = /*#__PURE__*/function (_AudioNode) {
    function ChannelMergerNode(context, options) {
      _classCallCheck(this, ChannelMergerNode);
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'ChannelMergerNode': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.BaseAudioContext)) {
        throw new TypeError("Failed to construct 'ChannelMergerNode': argument 1 is not of type BaseAudioContext");
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && _typeof(options) !== 'object') {
        throw new TypeError('Failed to construct \'ChannelMergerNode\': argument 2 is not of type \'ChannelMergerOptions\'');
      }
      if (options && options.numberOfInputs !== undefined) {
        parsedOptions.numberOfInputs = conversions['unsigned long'](options.numberOfInputs, {
          enforceRange: true,
          context: "Failed to construct 'ChannelMergerNode': Failed to read the 'numberOfInputs' property from ChannelMergerOptions: The provided value (".concat(options.numberOfInputs, "})")
        });
      } else {
        parsedOptions.numberOfInputs = 6;
      }
      if (options && options.channelCount !== undefined) {
        parsedOptions.channelCount = conversions['unsigned long'](options.channelCount, {
          enforceRange: true,
          context: "Failed to construct 'ChannelMergerNode': Failed to read the 'channelCount' property from ChannelMergerOptions: The provided value '".concat(options.channelCount, "'")
        });
      }
      if (options && options.channelCountMode !== undefined) {
        parsedOptions.channelCountMode = conversions['DOMString'](options.channelCountMode, {
          context: "Failed to construct 'ChannelMergerNode': Failed to read the 'channelCount' property from ChannelMergerOptions: The provided value '".concat(options.channelCountMode, "'")
        });
      }
      if (options && options.channelInterpretation !== undefined) {
        parsedOptions.channelInterpretation = conversions['DOMString'](options.channelInterpretation, {
          context: "Failed to construct 'ChannelMergerNode': Failed to read the 'channelInterpretation' property from ChannelMergerOptions: The provided value '".concat(options.channelInterpretation, "'")
        });
      }
      var napiObj;
      try {
        napiObj = new nativeBinding.ChannelMergerNode(context[kNapiObj], parsedOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      return _callSuper(this, ChannelMergerNode, [context, _defineProperty({}, kNapiObj, napiObj)]);
    }
    _inherits(ChannelMergerNode, _AudioNode);
    return _createClass(ChannelMergerNode);
  }(AudioNode);
  Object.defineProperties(ChannelMergerNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 1
    }
  });
  Object.defineProperties(ChannelMergerNode.prototype, _defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'ChannelMergerNode'
  }));
  return ChannelMergerNode;
};

/***/ }),

/***/ 2610:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(4407),
  throwSanitizedError = _require3.throwSanitizedError;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kAudioBuffer = _require4.kAudioBuffer;
/* eslint-enable no-unused-vars */

var AudioNode = __webpack_require__(8536);
module.exports = function (jsExport, nativeBinding) {
  var ChannelSplitterNode = /*#__PURE__*/function (_AudioNode) {
    function ChannelSplitterNode(context, options) {
      _classCallCheck(this, ChannelSplitterNode);
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'ChannelSplitterNode': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.BaseAudioContext)) {
        throw new TypeError("Failed to construct 'ChannelSplitterNode': argument 1 is not of type BaseAudioContext");
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && _typeof(options) !== 'object') {
        throw new TypeError('Failed to construct \'ChannelSplitterNode\': argument 2 is not of type \'ChannelSplitterOptions\'');
      }
      if (options && options.numberOfOutputs !== undefined) {
        parsedOptions.numberOfOutputs = conversions['unsigned long'](options.numberOfOutputs, {
          enforceRange: true,
          context: "Failed to construct 'ChannelSplitterNode': Failed to read the 'numberOfOutputs' property from ChannelSplitterOptions: The provided value (".concat(options.numberOfOutputs, "})")
        });
      } else {
        parsedOptions.numberOfOutputs = 6;
      }
      if (options && options.channelCount !== undefined) {
        parsedOptions.channelCount = conversions['unsigned long'](options.channelCount, {
          enforceRange: true,
          context: "Failed to construct 'ChannelSplitterNode': Failed to read the 'channelCount' property from ChannelSplitterOptions: The provided value '".concat(options.channelCount, "'")
        });
      }
      if (options && options.channelCountMode !== undefined) {
        parsedOptions.channelCountMode = conversions['DOMString'](options.channelCountMode, {
          context: "Failed to construct 'ChannelSplitterNode': Failed to read the 'channelCount' property from ChannelSplitterOptions: The provided value '".concat(options.channelCountMode, "'")
        });
      }
      if (options && options.channelInterpretation !== undefined) {
        parsedOptions.channelInterpretation = conversions['DOMString'](options.channelInterpretation, {
          context: "Failed to construct 'ChannelSplitterNode': Failed to read the 'channelInterpretation' property from ChannelSplitterOptions: The provided value '".concat(options.channelInterpretation, "'")
        });
      }
      var napiObj;
      try {
        napiObj = new nativeBinding.ChannelSplitterNode(context[kNapiObj], parsedOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      return _callSuper(this, ChannelSplitterNode, [context, _defineProperty({}, kNapiObj, napiObj)]);
    }
    _inherits(ChannelSplitterNode, _AudioNode);
    return _createClass(ChannelSplitterNode);
  }(AudioNode);
  Object.defineProperties(ChannelSplitterNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 1
    }
  });
  Object.defineProperties(ChannelSplitterNode.prototype, _defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'ChannelSplitterNode'
  }));
  return ChannelSplitterNode;
};

/***/ }),

/***/ 9925:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(4407),
  throwSanitizedError = _require3.throwSanitizedError;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kAudioBuffer = _require4.kAudioBuffer;
/* eslint-enable no-unused-vars */

var AudioScheduledSourceNode = __webpack_require__(7140);
module.exports = function (jsExport, nativeBinding) {
  var _offset = /*#__PURE__*/new WeakMap();
  var ConstantSourceNode = /*#__PURE__*/function (_AudioScheduledSource) {
    function ConstantSourceNode(context, options) {
      var _this;
      _classCallCheck(this, ConstantSourceNode);
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'ConstantSourceNode': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.BaseAudioContext)) {
        throw new TypeError("Failed to construct 'ConstantSourceNode': argument 1 is not of type BaseAudioContext");
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && _typeof(options) !== 'object') {
        throw new TypeError('Failed to construct \'ConstantSourceNode\': argument 2 is not of type \'ConstantSourceOptions\'');
      }
      if (options && options.offset !== undefined) {
        parsedOptions.offset = conversions['float'](options.offset, {
          context: "Failed to construct 'ConstantSourceNode': Failed to read the 'offset' property from ConstantSourceOptions: The provided value (".concat(options.offset, "})")
        });
      } else {
        parsedOptions.offset = 1;
      }
      var napiObj;
      try {
        napiObj = new nativeBinding.ConstantSourceNode(context[kNapiObj], parsedOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      _this = _callSuper(this, ConstantSourceNode, [context, _defineProperty({}, kNapiObj, napiObj)]);
      _classPrivateFieldInitSpec(_this, _offset, null);
      _classPrivateFieldSet(_offset, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].offset)));
      return _this;
    }
    _inherits(ConstantSourceNode, _AudioScheduledSource);
    return _createClass(ConstantSourceNode, [{
      key: "offset",
      get: function get() {
        if (!(this instanceof ConstantSourceNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'ConstantSourceNode\'');
        }
        return _classPrivateFieldGet(_offset, this);
      }
    }]);
  }(AudioScheduledSourceNode);
  Object.defineProperties(ConstantSourceNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 1
    }
  });
  Object.defineProperties(ConstantSourceNode.prototype, _defineProperty(_defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'ConstantSourceNode'
  }), "offset", kEnumerableProperty));
  return ConstantSourceNode;
};

/***/ }),

/***/ 4104:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(4407),
  throwSanitizedError = _require3.throwSanitizedError;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kAudioBuffer = _require4.kAudioBuffer;
/* eslint-enable no-unused-vars */

var AudioNode = __webpack_require__(8536);
module.exports = function (jsExport, nativeBinding) {
  var ConvolverNode = /*#__PURE__*/function (_AudioNode) {
    function ConvolverNode(context, options) {
      var _this;
      _classCallCheck(this, ConvolverNode);
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'ConvolverNode': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.BaseAudioContext)) {
        throw new TypeError("Failed to construct 'ConvolverNode': argument 1 is not of type BaseAudioContext");
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && _typeof(options) !== 'object') {
        throw new TypeError('Failed to construct \'ConvolverNode\': argument 2 is not of type \'ConvolverOptions\'');
      }
      if (options && options.buffer !== undefined) {
        if (options.buffer !== null) {
          if (!(options.buffer instanceof jsExport.AudioBuffer)) {
            throw new TypeError('Failed to construct \'ConvolverNode\': Failed to read the \'buffer\' property from ConvolverOptions: The provided value cannot be converted to \'AudioBuffer\'');
          }

          // unwrap napi audio buffer
          parsedOptions.buffer = options.buffer[kNapiObj];
        } else {
          parsedOptions.buffer = null;
        }
      } else {
        parsedOptions.buffer = null;
      }
      if (options && options.disableNormalization !== undefined) {
        parsedOptions.disableNormalization = conversions['boolean'](options.disableNormalization, {
          context: "Failed to construct 'ConvolverNode': Failed to read the 'disableNormalization' property from ConvolverOptions: The provided value (".concat(options.disableNormalization, "})")
        });
      } else {
        parsedOptions.disableNormalization = false;
      }
      if (options && options.channelCount !== undefined) {
        parsedOptions.channelCount = conversions['unsigned long'](options.channelCount, {
          enforceRange: true,
          context: "Failed to construct 'ConvolverNode': Failed to read the 'channelCount' property from ConvolverOptions: The provided value '".concat(options.channelCount, "'")
        });
      }
      if (options && options.channelCountMode !== undefined) {
        parsedOptions.channelCountMode = conversions['DOMString'](options.channelCountMode, {
          context: "Failed to construct 'ConvolverNode': Failed to read the 'channelCount' property from ConvolverOptions: The provided value '".concat(options.channelCountMode, "'")
        });
      }
      if (options && options.channelInterpretation !== undefined) {
        parsedOptions.channelInterpretation = conversions['DOMString'](options.channelInterpretation, {
          context: "Failed to construct 'ConvolverNode': Failed to read the 'channelInterpretation' property from ConvolverOptions: The provided value '".concat(options.channelInterpretation, "'")
        });
      }
      var napiObj;
      try {
        napiObj = new nativeBinding.ConvolverNode(context[kNapiObj], parsedOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      _this = _callSuper(this, ConvolverNode, [context, _defineProperty({}, kNapiObj, napiObj)]);

      // keep the wrapped AudioBuffer around
      Object.defineProperty(_this, kAudioBuffer, {
        __proto__: null,
        enumerable: false,
        writable: true,
        value: null
      });
      if (options && options.buffer !== undefined) {
        _this[kAudioBuffer] = options.buffer;
      }
      return _this;
    }
    _inherits(ConvolverNode, _AudioNode);
    return _createClass(ConvolverNode, [{
      key: "buffer",
      get: function get() {
        if (!(this instanceof ConvolverNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'ConvolverNode\'');
        }
        return this[kAudioBuffer];
      },
      set: function set(value) {
        if (!(this instanceof ConvolverNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'ConvolverNode\'');
        }
        if (value === null) {
          console.warn('Setting the \'buffer\' property on \'ConvolverNode\' to \'null\' is not supported yet');
          return;
        } else if (!(kNapiObj in value)) {
          throw new TypeError('Failed to set the \'buffer\' property on \'ConvolverNode\': Failed to convert value to \'AudioBuffer\'');
        }
        try {
          this[kNapiObj].buffer = value[kNapiObj];
        } catch (err) {
          throwSanitizedError(err);
        }
        this[kAudioBuffer] = value;
      }
    }, {
      key: "normalize",
      get: function get() {
        if (!(this instanceof ConvolverNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'ConvolverNode\'');
        }
        return this[kNapiObj].normalize;
      },
      set: function set(value) {
        if (!(this instanceof ConvolverNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'ConvolverNode\'');
        }
        value = conversions['boolean'](value, {
          context: "Failed to set the 'normalize' property on 'ConvolverNode': Value"
        });
        try {
          this[kNapiObj].normalize = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }]);
  }(AudioNode);
  Object.defineProperties(ConvolverNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 1
    }
  });
  Object.defineProperties(ConvolverNode.prototype, _defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'ConvolverNode'
  }), "buffer", kEnumerableProperty), "normalize", kEnumerableProperty));
  return ConvolverNode;
};

/***/ }),

/***/ 6341:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(4407),
  throwSanitizedError = _require3.throwSanitizedError;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kAudioBuffer = _require4.kAudioBuffer;
/* eslint-enable no-unused-vars */

var AudioNode = __webpack_require__(8536);
module.exports = function (jsExport, nativeBinding) {
  var _delayTime = /*#__PURE__*/new WeakMap();
  var DelayNode = /*#__PURE__*/function (_AudioNode) {
    function DelayNode(context, options) {
      var _this;
      _classCallCheck(this, DelayNode);
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'DelayNode': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.BaseAudioContext)) {
        throw new TypeError("Failed to construct 'DelayNode': argument 1 is not of type BaseAudioContext");
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && _typeof(options) !== 'object') {
        throw new TypeError('Failed to construct \'DelayNode\': argument 2 is not of type \'DelayOptions\'');
      }
      if (options && options.maxDelayTime !== undefined) {
        parsedOptions.maxDelayTime = conversions['double'](options.maxDelayTime, {
          context: "Failed to construct 'DelayNode': Failed to read the 'maxDelayTime' property from DelayOptions: The provided value (".concat(options.maxDelayTime, "})")
        });
      } else {
        parsedOptions.maxDelayTime = 1;
      }
      if (options && options.delayTime !== undefined) {
        parsedOptions.delayTime = conversions['double'](options.delayTime, {
          context: "Failed to construct 'DelayNode': Failed to read the 'delayTime' property from DelayOptions: The provided value (".concat(options.delayTime, "})")
        });
      } else {
        parsedOptions.delayTime = 0;
      }
      if (options && options.channelCount !== undefined) {
        parsedOptions.channelCount = conversions['unsigned long'](options.channelCount, {
          enforceRange: true,
          context: "Failed to construct 'DelayNode': Failed to read the 'channelCount' property from DelayOptions: The provided value '".concat(options.channelCount, "'")
        });
      }
      if (options && options.channelCountMode !== undefined) {
        parsedOptions.channelCountMode = conversions['DOMString'](options.channelCountMode, {
          context: "Failed to construct 'DelayNode': Failed to read the 'channelCount' property from DelayOptions: The provided value '".concat(options.channelCountMode, "'")
        });
      }
      if (options && options.channelInterpretation !== undefined) {
        parsedOptions.channelInterpretation = conversions['DOMString'](options.channelInterpretation, {
          context: "Failed to construct 'DelayNode': Failed to read the 'channelInterpretation' property from DelayOptions: The provided value '".concat(options.channelInterpretation, "'")
        });
      }
      var napiObj;
      try {
        napiObj = new nativeBinding.DelayNode(context[kNapiObj], parsedOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      _this = _callSuper(this, DelayNode, [context, _defineProperty({}, kNapiObj, napiObj)]);
      _classPrivateFieldInitSpec(_this, _delayTime, null);
      _classPrivateFieldSet(_delayTime, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].delayTime)));
      return _this;
    }
    _inherits(DelayNode, _AudioNode);
    return _createClass(DelayNode, [{
      key: "delayTime",
      get: function get() {
        if (!(this instanceof DelayNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'DelayNode\'');
        }
        return _classPrivateFieldGet(_delayTime, this);
      }
    }]);
  }(AudioNode);
  Object.defineProperties(DelayNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 1
    }
  });
  Object.defineProperties(DelayNode.prototype, _defineProperty(_defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'DelayNode'
  }), "delayTime", kEnumerableProperty));
  return DelayNode;
};

/***/ }),

/***/ 8391:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(4407),
  throwSanitizedError = _require3.throwSanitizedError;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kAudioBuffer = _require4.kAudioBuffer;
/* eslint-enable no-unused-vars */

var AudioNode = __webpack_require__(8536);
module.exports = function (jsExport, nativeBinding) {
  var _threshold = /*#__PURE__*/new WeakMap();
  var _knee = /*#__PURE__*/new WeakMap();
  var _ratio = /*#__PURE__*/new WeakMap();
  var _attack = /*#__PURE__*/new WeakMap();
  var _release = /*#__PURE__*/new WeakMap();
  var DynamicsCompressorNode = /*#__PURE__*/function (_AudioNode) {
    function DynamicsCompressorNode(context, options) {
      var _this;
      _classCallCheck(this, DynamicsCompressorNode);
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'DynamicsCompressorNode': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.BaseAudioContext)) {
        throw new TypeError("Failed to construct 'DynamicsCompressorNode': argument 1 is not of type BaseAudioContext");
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && _typeof(options) !== 'object') {
        throw new TypeError('Failed to construct \'DynamicsCompressorNode\': argument 2 is not of type \'DynamicsCompressorOptions\'');
      }
      if (options && options.attack !== undefined) {
        parsedOptions.attack = conversions['float'](options.attack, {
          context: "Failed to construct 'DynamicsCompressorNode': Failed to read the 'attack' property from DynamicsCompressorOptions: The provided value (".concat(options.attack, "})")
        });
      } else {
        parsedOptions.attack = 0.003;
      }
      if (options && options.knee !== undefined) {
        parsedOptions.knee = conversions['float'](options.knee, {
          context: "Failed to construct 'DynamicsCompressorNode': Failed to read the 'knee' property from DynamicsCompressorOptions: The provided value (".concat(options.knee, "})")
        });
      } else {
        parsedOptions.knee = 30;
      }
      if (options && options.ratio !== undefined) {
        parsedOptions.ratio = conversions['float'](options.ratio, {
          context: "Failed to construct 'DynamicsCompressorNode': Failed to read the 'ratio' property from DynamicsCompressorOptions: The provided value (".concat(options.ratio, "})")
        });
      } else {
        parsedOptions.ratio = 12;
      }
      if (options && options.release !== undefined) {
        parsedOptions.release = conversions['float'](options.release, {
          context: "Failed to construct 'DynamicsCompressorNode': Failed to read the 'release' property from DynamicsCompressorOptions: The provided value (".concat(options.release, "})")
        });
      } else {
        parsedOptions.release = 0.25;
      }
      if (options && options.threshold !== undefined) {
        parsedOptions.threshold = conversions['float'](options.threshold, {
          context: "Failed to construct 'DynamicsCompressorNode': Failed to read the 'threshold' property from DynamicsCompressorOptions: The provided value (".concat(options.threshold, "})")
        });
      } else {
        parsedOptions.threshold = -24;
      }
      if (options && options.channelCount !== undefined) {
        parsedOptions.channelCount = conversions['unsigned long'](options.channelCount, {
          enforceRange: true,
          context: "Failed to construct 'DynamicsCompressorNode': Failed to read the 'channelCount' property from DynamicsCompressorOptions: The provided value '".concat(options.channelCount, "'")
        });
      }
      if (options && options.channelCountMode !== undefined) {
        parsedOptions.channelCountMode = conversions['DOMString'](options.channelCountMode, {
          context: "Failed to construct 'DynamicsCompressorNode': Failed to read the 'channelCount' property from DynamicsCompressorOptions: The provided value '".concat(options.channelCountMode, "'")
        });
      }
      if (options && options.channelInterpretation !== undefined) {
        parsedOptions.channelInterpretation = conversions['DOMString'](options.channelInterpretation, {
          context: "Failed to construct 'DynamicsCompressorNode': Failed to read the 'channelInterpretation' property from DynamicsCompressorOptions: The provided value '".concat(options.channelInterpretation, "'")
        });
      }
      var napiObj;
      try {
        napiObj = new nativeBinding.DynamicsCompressorNode(context[kNapiObj], parsedOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      _this = _callSuper(this, DynamicsCompressorNode, [context, _defineProperty({}, kNapiObj, napiObj)]);
      _classPrivateFieldInitSpec(_this, _threshold, null);
      _classPrivateFieldInitSpec(_this, _knee, null);
      _classPrivateFieldInitSpec(_this, _ratio, null);
      _classPrivateFieldInitSpec(_this, _attack, null);
      _classPrivateFieldInitSpec(_this, _release, null);
      _classPrivateFieldSet(_threshold, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].threshold)));
      _classPrivateFieldSet(_knee, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].knee)));
      _classPrivateFieldSet(_ratio, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].ratio)));
      _classPrivateFieldSet(_attack, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].attack)));
      _classPrivateFieldSet(_release, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].release)));
      return _this;
    }
    _inherits(DynamicsCompressorNode, _AudioNode);
    return _createClass(DynamicsCompressorNode, [{
      key: "threshold",
      get: function get() {
        if (!(this instanceof DynamicsCompressorNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'DynamicsCompressorNode\'');
        }
        return _classPrivateFieldGet(_threshold, this);
      }
    }, {
      key: "knee",
      get: function get() {
        if (!(this instanceof DynamicsCompressorNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'DynamicsCompressorNode\'');
        }
        return _classPrivateFieldGet(_knee, this);
      }
    }, {
      key: "ratio",
      get: function get() {
        if (!(this instanceof DynamicsCompressorNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'DynamicsCompressorNode\'');
        }
        return _classPrivateFieldGet(_ratio, this);
      }
    }, {
      key: "attack",
      get: function get() {
        if (!(this instanceof DynamicsCompressorNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'DynamicsCompressorNode\'');
        }
        return _classPrivateFieldGet(_attack, this);
      }
    }, {
      key: "release",
      get: function get() {
        if (!(this instanceof DynamicsCompressorNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'DynamicsCompressorNode\'');
        }
        return _classPrivateFieldGet(_release, this);
      }
    }, {
      key: "reduction",
      get: function get() {
        if (!(this instanceof DynamicsCompressorNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'DynamicsCompressorNode\'');
        }
        return this[kNapiObj].reduction;
      }
    }]);
  }(AudioNode);
  Object.defineProperties(DynamicsCompressorNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 1
    }
  });
  Object.defineProperties(DynamicsCompressorNode.prototype, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'DynamicsCompressorNode'
  }), "threshold", kEnumerableProperty), "knee", kEnumerableProperty), "ratio", kEnumerableProperty), "attack", kEnumerableProperty), "release", kEnumerableProperty), "reduction", kEnumerableProperty));
  return DynamicsCompressorNode;
};

/***/ }),

/***/ 8461:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _require = __webpack_require__(4019),
  kEnumerableProperty = _require.kEnumerableProperty;
var _renderedBuffer = /*#__PURE__*/new WeakMap();
var OfflineAudioCompletionEvent = /*#__PURE__*/function (_Event) {
  function OfflineAudioCompletionEvent(type, eventInitDict) {
    var _this;
    _classCallCheck(this, OfflineAudioCompletionEvent);
    _this = _callSuper(this, OfflineAudioCompletionEvent, [type]);
    _classPrivateFieldInitSpec(_this, _renderedBuffer, null);
    if (_typeof(eventInitDict) !== 'object' || eventInitDict === null || !('renderedBuffer' in eventInitDict)) {
      throw TypeError("Failed to construct 'OfflineAudioCompletionEvent': Invalid 'OfflineAudioCompletionEventInit' dict given");
    }
    _classPrivateFieldSet(_renderedBuffer, _this, eventInitDict.renderedBuffer);
    return _this;
  }
  _inherits(OfflineAudioCompletionEvent, _Event);
  return _createClass(OfflineAudioCompletionEvent, [{
    key: "renderedBuffer",
    get: function get() {
      return _classPrivateFieldGet(_renderedBuffer, this);
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(Event));
Object.defineProperties(OfflineAudioCompletionEvent.prototype, _defineProperty(_defineProperty({}, Symbol.toStringTag, {
  __proto__: null,
  writable: false,
  enumerable: false,
  configurable: true,
  value: 'OfflineAudioCompletionEvent'
}), "renderedBuffer", kEnumerableProperty));
var _playbackTime = /*#__PURE__*/new WeakMap();
var _inputBuffer = /*#__PURE__*/new WeakMap();
var _outputBuffer = /*#__PURE__*/new WeakMap();
var AudioProcessingEvent = /*#__PURE__*/function (_Event2) {
  function AudioProcessingEvent(type, eventInitDict) {
    var _this2;
    _classCallCheck(this, AudioProcessingEvent);
    if (_typeof(eventInitDict) !== 'object' || eventInitDict === null || !('playbackTime' in eventInitDict) || !('inputBuffer' in eventInitDict) || !('outputBuffer' in eventInitDict)) {
      throw TypeError("Failed to construct 'AudioProcessingEvent': Invalid 'AudioProcessingEventInit' dict given");
    }
    _this2 = _callSuper(this, AudioProcessingEvent, [type]);
    _classPrivateFieldInitSpec(_this2, _playbackTime, null);
    _classPrivateFieldInitSpec(_this2, _inputBuffer, null);
    _classPrivateFieldInitSpec(_this2, _outputBuffer, null);
    _classPrivateFieldSet(_playbackTime, _this2, eventInitDict.playbackTime);
    _classPrivateFieldSet(_inputBuffer, _this2, eventInitDict.inputBuffer);
    _classPrivateFieldSet(_outputBuffer, _this2, eventInitDict.outputBuffer);
    return _this2;
  }
  _inherits(AudioProcessingEvent, _Event2);
  return _createClass(AudioProcessingEvent, [{
    key: "playbackTime",
    get: function get() {
      return _classPrivateFieldGet(_playbackTime, this);
    }
  }, {
    key: "inputBuffer",
    get: function get() {
      return _classPrivateFieldGet(_inputBuffer, this);
    }
  }, {
    key: "outputBuffer",
    get: function get() {
      return _classPrivateFieldGet(_outputBuffer, this);
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(Event));
Object.defineProperties(AudioProcessingEvent.prototype, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
  __proto__: null,
  writable: false,
  enumerable: false,
  configurable: true,
  value: 'AudioProcessingEvent'
}), "playbackTime", kEnumerableProperty), "inputBuffer", kEnumerableProperty), "outputBuffer", kEnumerableProperty));
var _timestamp = /*#__PURE__*/new WeakMap();
var _averageLoad = /*#__PURE__*/new WeakMap();
var _peakLoad = /*#__PURE__*/new WeakMap();
var _underrunRatio = /*#__PURE__*/new WeakMap();
var AudioRenderCapacityEvent = /*#__PURE__*/function (_Event3) {
  function AudioRenderCapacityEvent(type, eventInitDict) {
    var _this3;
    _classCallCheck(this, AudioRenderCapacityEvent);
    if (_typeof(eventInitDict) !== 'object' || eventInitDict === null || !('timestamp' in eventInitDict) || !('averageLoad' in eventInitDict) || !('peakLoad' in eventInitDict) || !('underrunRatio' in eventInitDict)) {
      throw TypeError("Failed to construct 'AudioRenderCapacityEvent': Invalid 'AudioRenderCapacityEventInit' dict given");
    }
    _this3 = _callSuper(this, AudioRenderCapacityEvent, [type]);
    _classPrivateFieldInitSpec(_this3, _timestamp, 0);
    _classPrivateFieldInitSpec(_this3, _averageLoad, 0);
    _classPrivateFieldInitSpec(_this3, _peakLoad, 0);
    _classPrivateFieldInitSpec(_this3, _underrunRatio, 0);
    _classPrivateFieldSet(_timestamp, _this3, eventInitDict.timestamp);
    _classPrivateFieldSet(_averageLoad, _this3, eventInitDict.averageLoad);
    _classPrivateFieldSet(_peakLoad, _this3, eventInitDict.peakLoad);
    _classPrivateFieldSet(_underrunRatio, _this3, eventInitDict.underrunRatio);
    return _this3;
  }
  _inherits(AudioRenderCapacityEvent, _Event3);
  return _createClass(AudioRenderCapacityEvent, [{
    key: "timestamp",
    get: function get() {
      return _classPrivateFieldGet(_timestamp, this);
    }
  }, {
    key: "averageLoad",
    get: function get() {
      return _classPrivateFieldGet(_averageLoad, this);
    }
  }, {
    key: "peakLoad",
    get: function get() {
      return _classPrivateFieldGet(_peakLoad, this);
    }
  }, {
    key: "underrunRatio",
    get: function get() {
      return _classPrivateFieldGet(_underrunRatio, this);
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(Event));
Object.defineProperties(AudioRenderCapacityEvent.prototype, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
  __proto__: null,
  writable: false,
  enumerable: false,
  configurable: true,
  value: 'AudioRenderCapacityEvent'
}), "timestamp", kEnumerableProperty), "averageLoad", kEnumerableProperty), "peakLoad", kEnumerableProperty), "underrunRatio", kEnumerableProperty));

// https://html.spec.whatwg.org/multipage/webappapis.html#errorevent
// interface ErrorEvent : Event {
//   constructor(DOMString type, optional ErrorEventInit eventInitDict = {});

//   readonly attribute DOMString message;
//   readonly attribute USVString filename;
//   readonly attribute unsigned long lineno;
//   readonly attribute unsigned long colno;
//   readonly attribute any error;
// };

// dictionary ErrorEventInit : EventInit {
//   DOMString message = "";
//   USVString filename = "";
//   unsigned long lineno = 0;
//   unsigned long colno = 0;
//   any error;
// };
var _message = /*#__PURE__*/new WeakMap();
var _filename = /*#__PURE__*/new WeakMap();
var _lineno = /*#__PURE__*/new WeakMap();
var _colno = /*#__PURE__*/new WeakMap();
var _error = /*#__PURE__*/new WeakMap();
var ErrorEvent = /*#__PURE__*/function (_Event4) {
  function ErrorEvent(type) {
    var _this4;
    var eventInitDict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, ErrorEvent);
    _this4 = _callSuper(this, ErrorEvent, [type]);
    _classPrivateFieldInitSpec(_this4, _message, '');
    _classPrivateFieldInitSpec(_this4, _filename, '');
    _classPrivateFieldInitSpec(_this4, _lineno, 0);
    _classPrivateFieldInitSpec(_this4, _colno, 0);
    _classPrivateFieldInitSpec(_this4, _error, undefined);
    if (eventInitDict && typeof eventInitDict.message === 'string') {
      _classPrivateFieldSet(_message, _this4, eventInitDict.message);
    }
    if (eventInitDict && typeof eventInitDict.filename === 'string') {
      _classPrivateFieldSet(_filename, _this4, eventInitDict.filename);
    }
    if (eventInitDict && Number.isFinite(eventInitDict.lineno)) {
      _classPrivateFieldSet(_lineno, _this4, eventInitDict.lineno);
    }
    if (eventInitDict && Number.isFinite(eventInitDict.colno)) {
      _classPrivateFieldSet(_colno, _this4, eventInitDict.colno);
    }
    if (eventInitDict && eventInitDict.error instanceof Error) {
      _classPrivateFieldSet(_error, _this4, eventInitDict.error);
    }
    return _this4;
  }
  _inherits(ErrorEvent, _Event4);
  return _createClass(ErrorEvent, [{
    key: "message",
    get: function get() {
      return _classPrivateFieldGet(_message, this);
    }
  }, {
    key: "filename",
    get: function get() {
      return _classPrivateFieldGet(_filename, this);
    }
  }, {
    key: "lineno",
    get: function get() {
      return _classPrivateFieldGet(_lineno, this);
    }
  }, {
    key: "colno",
    get: function get() {
      return _classPrivateFieldGet(_colno, this);
    }
  }, {
    key: "error",
    get: function get() {
      return _classPrivateFieldGet(_error, this);
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(Event));
Object.defineProperties(ErrorEvent.prototype, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
  __proto__: null,
  writable: false,
  enumerable: false,
  configurable: true,
  value: 'ErrorEvent'
}), "message", kEnumerableProperty), "filename", kEnumerableProperty), "lineno", kEnumerableProperty), "colno", kEnumerableProperty), "error", kEnumerableProperty));
module.exports.OfflineAudioCompletionEvent = OfflineAudioCompletionEvent;
module.exports.AudioProcessingEvent = AudioProcessingEvent;
module.exports.AudioRenderCapacityEvent = AudioRenderCapacityEvent;
module.exports.ErrorEvent = ErrorEvent;

/***/ }),

/***/ 5395:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(4407),
  throwSanitizedError = _require3.throwSanitizedError;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kAudioBuffer = _require4.kAudioBuffer;
/* eslint-enable no-unused-vars */

var AudioNode = __webpack_require__(8536);
module.exports = function (jsExport, nativeBinding) {
  var _gain = /*#__PURE__*/new WeakMap();
  var GainNode = /*#__PURE__*/function (_AudioNode) {
    function GainNode(context, options) {
      var _this;
      _classCallCheck(this, GainNode);
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'GainNode': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.BaseAudioContext)) {
        throw new TypeError("Failed to construct 'GainNode': argument 1 is not of type BaseAudioContext");
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && _typeof(options) !== 'object') {
        throw new TypeError('Failed to construct \'GainNode\': argument 2 is not of type \'GainOptions\'');
      }
      if (options && options.gain !== undefined) {
        parsedOptions.gain = conversions['float'](options.gain, {
          context: "Failed to construct 'GainNode': Failed to read the 'gain' property from GainOptions: The provided value (".concat(options.gain, "})")
        });
      } else {
        parsedOptions.gain = 1.0;
      }
      if (options && options.channelCount !== undefined) {
        parsedOptions.channelCount = conversions['unsigned long'](options.channelCount, {
          enforceRange: true,
          context: "Failed to construct 'GainNode': Failed to read the 'channelCount' property from GainOptions: The provided value '".concat(options.channelCount, "'")
        });
      }
      if (options && options.channelCountMode !== undefined) {
        parsedOptions.channelCountMode = conversions['DOMString'](options.channelCountMode, {
          context: "Failed to construct 'GainNode': Failed to read the 'channelCount' property from GainOptions: The provided value '".concat(options.channelCountMode, "'")
        });
      }
      if (options && options.channelInterpretation !== undefined) {
        parsedOptions.channelInterpretation = conversions['DOMString'](options.channelInterpretation, {
          context: "Failed to construct 'GainNode': Failed to read the 'channelInterpretation' property from GainOptions: The provided value '".concat(options.channelInterpretation, "'")
        });
      }
      var napiObj;
      try {
        napiObj = new nativeBinding.GainNode(context[kNapiObj], parsedOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      _this = _callSuper(this, GainNode, [context, _defineProperty({}, kNapiObj, napiObj)]);
      _classPrivateFieldInitSpec(_this, _gain, null);
      _classPrivateFieldSet(_gain, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].gain)));
      return _this;
    }
    _inherits(GainNode, _AudioNode);
    return _createClass(GainNode, [{
      key: "gain",
      get: function get() {
        if (!(this instanceof GainNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'GainNode\'');
        }
        return _classPrivateFieldGet(_gain, this);
      }
    }]);
  }(AudioNode);
  Object.defineProperties(GainNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 1
    }
  });
  Object.defineProperties(GainNode.prototype, _defineProperty(_defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'GainNode'
  }), "gain", kEnumerableProperty));
  return GainNode;
};

/***/ }),

/***/ 6960:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(4407),
  throwSanitizedError = _require3.throwSanitizedError;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kAudioBuffer = _require4.kAudioBuffer;
/* eslint-enable no-unused-vars */

var AudioNode = __webpack_require__(8536);
module.exports = function (jsExport, nativeBinding) {
  var IIRFilterNode = /*#__PURE__*/function (_AudioNode) {
    function IIRFilterNode(context, options) {
      _classCallCheck(this, IIRFilterNode);
      if (arguments.length < 2) {
        throw new TypeError("Failed to construct 'IIRFilterNode': 2 argument required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.BaseAudioContext)) {
        throw new TypeError("Failed to construct 'IIRFilterNode': argument 1 is not of type BaseAudioContext");
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && _typeof(options) !== 'object') {
        throw new TypeError('Failed to construct \'IIRFilterNode\': argument 2 is not of type \'IIRFilterOptions\'');
      }

      // required options
      if (_typeof(options) !== 'object' || options && options.feedforward === undefined) {
        throw new TypeError('Failed to construct \'IIRFilterNode\': Failed to read the \'feedforward\' property from IIRFilterOptions: Required member is undefined');
      }
      if (options && options.feedforward !== undefined) {
        try {
          parsedOptions.feedforward = toSanitizedSequence(options.feedforward, Float64Array);
        } catch (err) {
          throw new TypeError("Failed to construct 'IIRFilterNode': Failed to read the 'feedforward' property from IIRFilterOptions: The provided value ".concat(err.message));
        }
      } else {
        parsedOptions.feedforward = null;
      }

      // required options
      if (_typeof(options) !== 'object' || options && options.feedback === undefined) {
        throw new TypeError('Failed to construct \'IIRFilterNode\': Failed to read the \'feedback\' property from IIRFilterOptions: Required member is undefined');
      }
      if (options && options.feedback !== undefined) {
        try {
          parsedOptions.feedback = toSanitizedSequence(options.feedback, Float64Array);
        } catch (err) {
          throw new TypeError("Failed to construct 'IIRFilterNode': Failed to read the 'feedback' property from IIRFilterOptions: The provided value ".concat(err.message));
        }
      } else {
        parsedOptions.feedback = null;
      }
      if (options && options.channelCount !== undefined) {
        parsedOptions.channelCount = conversions['unsigned long'](options.channelCount, {
          enforceRange: true,
          context: "Failed to construct 'IIRFilterNode': Failed to read the 'channelCount' property from IIRFilterOptions: The provided value '".concat(options.channelCount, "'")
        });
      }
      if (options && options.channelCountMode !== undefined) {
        parsedOptions.channelCountMode = conversions['DOMString'](options.channelCountMode, {
          context: "Failed to construct 'IIRFilterNode': Failed to read the 'channelCount' property from IIRFilterOptions: The provided value '".concat(options.channelCountMode, "'")
        });
      }
      if (options && options.channelInterpretation !== undefined) {
        parsedOptions.channelInterpretation = conversions['DOMString'](options.channelInterpretation, {
          context: "Failed to construct 'IIRFilterNode': Failed to read the 'channelInterpretation' property from IIRFilterOptions: The provided value '".concat(options.channelInterpretation, "'")
        });
      }
      var napiObj;
      try {
        napiObj = new nativeBinding.IIRFilterNode(context[kNapiObj], parsedOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      return _callSuper(this, IIRFilterNode, [context, _defineProperty({}, kNapiObj, napiObj)]);
    }
    _inherits(IIRFilterNode, _AudioNode);
    return _createClass(IIRFilterNode, [{
      key: "getFrequencyResponse",
      value: function getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
        if (!(this instanceof IIRFilterNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'IIRFilterNode\'');
        }
        if (arguments.length < 3) {
          throw new TypeError("Failed to execute 'getFrequencyResponse' on 'IIRFilterNode': 3 argument required, but only ".concat(arguments.length, " present"));
        }
        if (!(frequencyHz instanceof Float32Array)) {
          throw new TypeError("Failed to execute 'getFrequencyResponse' on 'IIRFilterNode': Parameter 1 is not of type 'Float32Array'");
        }
        if (!(magResponse instanceof Float32Array)) {
          throw new TypeError("Failed to execute 'getFrequencyResponse' on 'IIRFilterNode': Parameter 2 is not of type 'Float32Array'");
        }
        if (!(phaseResponse instanceof Float32Array)) {
          throw new TypeError("Failed to execute 'getFrequencyResponse' on 'IIRFilterNode': Parameter 3 is not of type 'Float32Array'");
        }
        try {
          return this[kNapiObj].getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }]);
  }(AudioNode);
  Object.defineProperties(IIRFilterNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 2
    }
  });
  Object.defineProperties(IIRFilterNode.prototype, _defineProperty(_defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'IIRFilterNode'
  }), "getFrequencyResponse", kEnumerableProperty));
  return IIRFilterNode;
};

/***/ }),

/***/ 4283:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(4407),
  throwSanitizedError = _require3.throwSanitizedError;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kAudioBuffer = _require4.kAudioBuffer;
/* eslint-enable no-unused-vars */

var AudioNode = __webpack_require__(8536);
module.exports = function (jsExport, nativeBinding) {
  var MediaStreamAudioSourceNode = /*#__PURE__*/function (_AudioNode) {
    function MediaStreamAudioSourceNode(context, options) {
      _classCallCheck(this, MediaStreamAudioSourceNode);
      if (arguments.length < 2) {
        throw new TypeError("Failed to construct 'MediaStreamAudioSourceNode': 2 argument required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.AudioContext)) {
        throw new TypeError("Failed to construct 'MediaStreamAudioSourceNode': argument 1 is not of type AudioContext");
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && _typeof(options) !== 'object') {
        throw new TypeError('Failed to construct \'MediaStreamAudioSourceNode\': argument 2 is not of type \'MediaStreamAudioSourceOptions\'');
      }

      // required options
      if (_typeof(options) !== 'object' || options && options.mediaStream === undefined) {
        throw new TypeError('Failed to construct \'MediaStreamAudioSourceNode\': Failed to read the \'mediaStream\' property from MediaStreamAudioSourceOptions: Required member is undefined');
      }
      parsedOptions.mediaStream = options.mediaStream;
      var napiObj;
      try {
        napiObj = new nativeBinding.MediaStreamAudioSourceNode(context[kNapiObj], parsedOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      return _callSuper(this, MediaStreamAudioSourceNode, [context, _defineProperty({}, kNapiObj, napiObj)]);
    }
    _inherits(MediaStreamAudioSourceNode, _AudioNode);
    return _createClass(MediaStreamAudioSourceNode, [{
      key: "mediaStream",
      get: function get() {
        if (!(this instanceof MediaStreamAudioSourceNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'MediaStreamAudioSourceNode\'');
        }
        return this[kNapiObj].mediaStream;
      }
    }]);
  }(AudioNode);
  Object.defineProperties(MediaStreamAudioSourceNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 2
    }
  });
  Object.defineProperties(MediaStreamAudioSourceNode.prototype, _defineProperty(_defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'MediaStreamAudioSourceNode'
  }), "mediaStream", kEnumerableProperty));
  return MediaStreamAudioSourceNode;
};

/***/ }),

/***/ 6624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(2873),
  propagateEvent = _require.propagateEvent;
var _require2 = __webpack_require__(4407),
  throwSanitizedError = _require2.throwSanitizedError;
var _require3 = __webpack_require__(4019),
  isFunction = _require3.isFunction,
  kEnumerableProperty = _require3.kEnumerableProperty;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kWorkletRelease = _require4.kWorkletRelease,
  kOnStateChange = _require4.kOnStateChange,
  kOnComplete = _require4.kOnComplete,
  kCheckProcessorsCreated = _require4.kCheckProcessorsCreated;
module.exports = function patchOfflineAudioContext(jsExport, nativeBinding) {
  var _renderedBuffer = /*#__PURE__*/new WeakMap();
  var OfflineAudioContext = /*#__PURE__*/function (_jsExport$BaseAudioCo) {
    function OfflineAudioContext() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _classCallCheck(this, OfflineAudioContext);
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'OfflineAudioContext': 1 argument required, but only ".concat(arguments.length, " present"));
      }

      // https://webaudio.github.io/web-audio-api/#dom-offlineaudiocontext-constructor-contextoptions-contextoptions
      if (arguments.length === 1) {
        var options = args[0];
        if (_typeof(options) !== 'object') {
          throw new TypeError("Failed to construct 'OfflineAudioContext': argument 1 is not of type 'OfflineAudioContextOptions'");
        }
        if (options.length === undefined) {
          throw new TypeError("Failed to construct 'OfflineAudioContext': Failed to read the 'length' property from 'OfflineAudioContextOptions': Required member is undefined.");
        }
        if (options.sampleRate === undefined) {
          throw new TypeError("Failed to construct 'OfflineAudioContext': Failed to read the 'sampleRate' property from 'OfflineAudioContextOptions': Required member is undefined.");
        }
        if (options.numberOfChannels === undefined) {
          options.numberOfChannels = 1;
        }
        args = [options.numberOfChannels, options.length, options.sampleRate];
      }
      var _args = args,
        _args2 = _slicedToArray(_args, 3),
        numberOfChannels = _args2[0],
        length = _args2[1],
        sampleRate = _args2[2];
      numberOfChannels = conversions['unsigned long'](numberOfChannels, {
        enforceRange: true,
        context: "Failed to construct 'OfflineAudioContext': Failed to read the 'numberOfChannels' property from OfflineContextOptions; The provided value (".concat(numberOfChannels, ")")
      });
      length = conversions['unsigned long'](length, {
        enforceRange: true,
        context: "Failed to construct 'OfflineAudioContext': Failed to read the 'length' property from OfflineContextOptions; The provided value (".concat(length, ")")
      });
      sampleRate = conversions['float'](sampleRate, {
        context: "Failed to construct 'OfflineAudioContext': Failed to read the 'sampleRate' property from OfflineContextOptions; The provided value (".concat(sampleRate, ")")
      });
      var napiObj;
      try {
        napiObj = new nativeBinding.OfflineAudioContext(numberOfChannels, length, sampleRate);
      } catch (err) {
        throwSanitizedError(err);
      }
      _this = _callSuper(this, OfflineAudioContext, [_defineProperty({}, kNapiObj, napiObj)]);

      // Add function to Napi object to bridge from Rust events to JS EventTarget
      // They will be effectively registered on rust side when `startRendering` is called
      _classPrivateFieldInitSpec(_this, _renderedBuffer, null);
      _this[kNapiObj][kOnStateChange] = function (err, rawEvent) {
        var event = new Event(rawEvent.type);
        propagateEvent(this, event);
      }.bind(_this);

      // This event is, per spec, the last trigerred one
      _this[kNapiObj][kOnComplete] = function (err, rawEvent) {
        // workaround the fact that this event seems to be triggered before
        // startRendering fulfills and that we want to return the exact same instance
        if (_classPrivateFieldGet(_renderedBuffer, this) === null) {
          _classPrivateFieldSet(_renderedBuffer, this, new jsExport.AudioBuffer(_defineProperty({}, kNapiObj, rawEvent.renderedBuffer)));
        }
        var event = new jsExport.OfflineAudioCompletionEvent(rawEvent.type, {
          renderedBuffer: _classPrivateFieldGet(_renderedBuffer, this)
        });
        propagateEvent(this, event);
      }.bind(_this);
      return _this;
    }
    _inherits(OfflineAudioContext, _jsExport$BaseAudioCo);
    return _createClass(OfflineAudioContext, [{
      key: "length",
      get: function get() {
        if (!(this instanceof OfflineAudioContext)) {
          throw new TypeError("Invalid Invocation: Value of 'this' must be of type 'OfflineAudioContext'");
        }
        return this[kNapiObj].length;
      }
    }, {
      key: "oncomplete",
      get: function get() {
        if (!(this instanceof OfflineAudioContext)) {
          throw new TypeError("Invalid Invocation: Value of 'this' must be of type 'OfflineAudioContext'");
        }
        return this._complete || null;
      },
      set: function set(value) {
        if (!(this instanceof OfflineAudioContext)) {
          throw new TypeError("Invalid Invocation: Value of 'this' must be of type 'OfflineAudioContext'");
        }
        if (isFunction(value) || value === null) {
          this._complete = value;
        }
      }
    }, {
      key: "startRendering",
      value: function () {
        var _startRendering = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var nativeAudioBuffer;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (this instanceof OfflineAudioContext) {
                  _context.next = 2;
                  break;
                }
                throw new TypeError("Invalid Invocation: Value of 'this' must be of type 'OfflineAudioContext'");
              case 2:
                _context.next = 4;
                return this.audioWorklet[kCheckProcessorsCreated]();
              case 4:
                _context.prev = 4;
                _context.next = 7;
                return this[kNapiObj].startRendering();
              case 7:
                nativeAudioBuffer = _context.sent;
                _context.next = 13;
                break;
              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](4);
                throwSanitizedError(_context.t0);
              case 13:
                _context.next = 15;
                return this.audioWorklet[kWorkletRelease]();
              case 15:
                // workaround the fact that this event seems to be triggered before
                // startRendering fulfills and that we want to return the exact same instance
                if (_classPrivateFieldGet(_renderedBuffer, this) === null) {
                  _classPrivateFieldSet(_renderedBuffer, this, new jsExport.AudioBuffer(_defineProperty({}, kNapiObj, nativeAudioBuffer)));
                }
                return _context.abrupt("return", _classPrivateFieldGet(_renderedBuffer, this));
              case 17:
              case "end":
                return _context.stop();
            }
          }, _callee, this, [[4, 10]]);
        }));
        function startRendering() {
          return _startRendering.apply(this, arguments);
        }
        return startRendering;
      }()
    }, {
      key: "resume",
      value: function () {
        var _resume = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (this instanceof OfflineAudioContext) {
                  _context2.next = 2;
                  break;
                }
                throw new TypeError("Invalid Invocation: Value of 'this' must be of type 'OfflineAudioContext'");
              case 2:
                _context2.prev = 2;
                _context2.next = 5;
                return this[kNapiObj].resume();
              case 5:
                _context2.next = 10;
                break;
              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](2);
                throwSanitizedError(_context2.t0);
              case 10:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this, [[2, 7]]);
        }));
        function resume() {
          return _resume.apply(this, arguments);
        }
        return resume;
      }()
    }, {
      key: "suspend",
      value: function () {
        var _suspend = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(suspendTime) {
          var _args5 = arguments;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (this instanceof OfflineAudioContext) {
                  _context3.next = 2;
                  break;
                }
                throw new TypeError("Invalid Invocation: Value of 'this' must be of type 'OfflineAudioContext'");
              case 2:
                if (!(_args5.length < 1)) {
                  _context3.next = 4;
                  break;
                }
                throw new TypeError("Failed to execute 'suspend' on 'OfflineAudioContext': 1 argument required, but only ".concat(_args5.length, " present"));
              case 4:
                suspendTime = conversions['double'](suspendTime, {
                  context: "Failed to execute 'suspend' on 'OfflineAudioContext': argument 1"
                });
                _context3.prev = 5;
                _context3.next = 8;
                return this[kNapiObj].suspend(suspendTime);
              case 8:
                _context3.next = 13;
                break;
              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](5);
                throwSanitizedError(_context3.t0);
              case 13:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this, [[5, 10]]);
        }));
        function suspend(_x) {
          return _suspend.apply(this, arguments);
        }
        return suspend;
      }()
    }]);
  }(jsExport.BaseAudioContext);
  Object.defineProperties(OfflineAudioContext, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 1
    }
  });
  Object.defineProperties(OfflineAudioContext.prototype, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'OfflineAudioContext'
  }), "length", kEnumerableProperty), "oncomplete", kEnumerableProperty), "startRendering", kEnumerableProperty), "resume", kEnumerableProperty), "suspend", kEnumerableProperty));
  return OfflineAudioContext;
};

/***/ }),

/***/ 5950:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(4407),
  throwSanitizedError = _require3.throwSanitizedError;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kAudioBuffer = _require4.kAudioBuffer;
/* eslint-enable no-unused-vars */

var AudioScheduledSourceNode = __webpack_require__(7140);
module.exports = function (jsExport, nativeBinding) {
  var _frequency = /*#__PURE__*/new WeakMap();
  var _detune = /*#__PURE__*/new WeakMap();
  var OscillatorNode = /*#__PURE__*/function (_AudioScheduledSource) {
    function OscillatorNode(context, options) {
      var _this;
      _classCallCheck(this, OscillatorNode);
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'OscillatorNode': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.BaseAudioContext)) {
        throw new TypeError("Failed to construct 'OscillatorNode': argument 1 is not of type BaseAudioContext");
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && _typeof(options) !== 'object') {
        throw new TypeError('Failed to construct \'OscillatorNode\': argument 2 is not of type \'OscillatorOptions\'');
      }
      if (options && options.type !== undefined) {
        if (!['sine', 'square', 'sawtooth', 'triangle', 'custom'].includes(options.type)) {
          throw new TypeError("Failed to construct 'OscillatorNode': Failed to read the 'type' property from OscillatorOptions: The provided value '".concat(options.type, "' is not a valid enum value of type OscillatorType"));
        }
        parsedOptions.type = conversions['DOMString'](options.type, {
          context: "Failed to construct 'OscillatorNode': Failed to read the 'type' property from OscillatorOptions: The provided value '".concat(options.type, "'")
        });
      } else {
        parsedOptions.type = 'sine';
      }
      if (options && options.frequency !== undefined) {
        parsedOptions.frequency = conversions['float'](options.frequency, {
          context: "Failed to construct 'OscillatorNode': Failed to read the 'frequency' property from OscillatorOptions: The provided value (".concat(options.frequency, "})")
        });
      } else {
        parsedOptions.frequency = 440;
      }
      if (options && options.detune !== undefined) {
        parsedOptions.detune = conversions['float'](options.detune, {
          context: "Failed to construct 'OscillatorNode': Failed to read the 'detune' property from OscillatorOptions: The provided value (".concat(options.detune, "})")
        });
      } else {
        parsedOptions.detune = 0;
      }
      if (options && options.periodicWave !== undefined) {
        if (!(options.periodicWave instanceof jsExport.PeriodicWave)) {
          throw new TypeError("Failed to construct 'OscillatorNode': Failed to read the 'periodicWave' property from OscillatorOptions: The provided value '".concat(options.periodicWave, "' is not an instance of PeriodicWave"));
        }
        parsedOptions.periodicWave = options.periodicWave[kNapiObj];
      } else {
        parsedOptions.periodicWave = null;
      }
      if (parsedOptions.type === 'custom' && parsedOptions.periodicWave === null) {
        throw new DOMException('Failed to construct \'OscillatorNode\': A PeriodicWave must be specified if the type is set to \'custom\'', 'InvalidStateError');
      }
      if (parsedOptions.periodicWave !== null) {
        parsedOptions.type = 'custom';
      }
      if (options && options.channelCount !== undefined) {
        parsedOptions.channelCount = conversions['unsigned long'](options.channelCount, {
          enforceRange: true,
          context: "Failed to construct 'OscillatorNode': Failed to read the 'channelCount' property from OscillatorOptions: The provided value '".concat(options.channelCount, "'")
        });
      }
      if (options && options.channelCountMode !== undefined) {
        parsedOptions.channelCountMode = conversions['DOMString'](options.channelCountMode, {
          context: "Failed to construct 'OscillatorNode': Failed to read the 'channelCount' property from OscillatorOptions: The provided value '".concat(options.channelCountMode, "'")
        });
      }
      if (options && options.channelInterpretation !== undefined) {
        parsedOptions.channelInterpretation = conversions['DOMString'](options.channelInterpretation, {
          context: "Failed to construct 'OscillatorNode': Failed to read the 'channelInterpretation' property from OscillatorOptions: The provided value '".concat(options.channelInterpretation, "'")
        });
      }
      var napiObj;
      try {
        napiObj = new nativeBinding.OscillatorNode(context[kNapiObj], parsedOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      _this = _callSuper(this, OscillatorNode, [context, _defineProperty({}, kNapiObj, napiObj)]);
      _classPrivateFieldInitSpec(_this, _frequency, null);
      _classPrivateFieldInitSpec(_this, _detune, null);
      _classPrivateFieldSet(_frequency, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].frequency)));
      _classPrivateFieldSet(_detune, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].detune)));
      return _this;
    }
    _inherits(OscillatorNode, _AudioScheduledSource);
    return _createClass(OscillatorNode, [{
      key: "frequency",
      get: function get() {
        if (!(this instanceof OscillatorNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'OscillatorNode\'');
        }
        return _classPrivateFieldGet(_frequency, this);
      }
    }, {
      key: "detune",
      get: function get() {
        if (!(this instanceof OscillatorNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'OscillatorNode\'');
        }
        return _classPrivateFieldGet(_detune, this);
      }
    }, {
      key: "type",
      get: function get() {
        if (!(this instanceof OscillatorNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'OscillatorNode\'');
        }
        return this[kNapiObj].type;
      },
      set: function set(value) {
        if (!(this instanceof OscillatorNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'OscillatorNode\'');
        }
        if (!['sine', 'square', 'sawtooth', 'triangle', 'custom'].includes(value)) {
          console.warn("Failed to set the 'type' property on 'OscillatorNode': Value '".concat(value, "' is not a valid 'OscillatorType' enum value"));
          return;
        }
        try {
          this[kNapiObj].type = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "setPeriodicWave",
      value: function setPeriodicWave(periodicWave) {
        if (!(this instanceof OscillatorNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'OscillatorNode\'');
        }
        if (arguments.length < 1) {
          throw new TypeError("Failed to execute 'setPeriodicWave' on 'OscillatorNode': 1 argument required, but only ".concat(arguments.length, " present"));
        }
        if (!(periodicWave instanceof jsExport.PeriodicWave)) {
          throw new TypeError("Failed to execute 'setPeriodicWave' on 'OscillatorNode': Parameter 1 is not of type 'PeriodicWave'");
        }
        periodicWave = periodicWave[kNapiObj];
        try {
          return this[kNapiObj].setPeriodicWave(periodicWave);
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }]);
  }(AudioScheduledSourceNode);
  Object.defineProperties(OscillatorNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 1
    }
  });
  Object.defineProperties(OscillatorNode.prototype, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'OscillatorNode'
  }), "frequency", kEnumerableProperty), "detune", kEnumerableProperty), "type", kEnumerableProperty), "setPeriodicWave", kEnumerableProperty));
  return OscillatorNode;
};

/***/ }),

/***/ 6436:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(4407),
  throwSanitizedError = _require3.throwSanitizedError;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kAudioBuffer = _require4.kAudioBuffer;
/* eslint-enable no-unused-vars */

var AudioNode = __webpack_require__(8536);
module.exports = function (jsExport, nativeBinding) {
  var _Object$definePropert;
  var _positionX = /*#__PURE__*/new WeakMap();
  var _positionY = /*#__PURE__*/new WeakMap();
  var _positionZ = /*#__PURE__*/new WeakMap();
  var _orientationX = /*#__PURE__*/new WeakMap();
  var _orientationY = /*#__PURE__*/new WeakMap();
  var _orientationZ = /*#__PURE__*/new WeakMap();
  var PannerNode = /*#__PURE__*/function (_AudioNode) {
    function PannerNode(context, options) {
      var _this;
      _classCallCheck(this, PannerNode);
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'PannerNode': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.BaseAudioContext)) {
        throw new TypeError("Failed to construct 'PannerNode': argument 1 is not of type BaseAudioContext");
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && _typeof(options) !== 'object') {
        throw new TypeError('Failed to construct \'PannerNode\': argument 2 is not of type \'PannerOptions\'');
      }
      if (options && options.panningModel !== undefined) {
        if (!['equalpower', 'HRTF'].includes(options.panningModel)) {
          throw new TypeError("Failed to construct 'PannerNode': Failed to read the 'panningModel' property from PannerOptions: The provided value '".concat(options.panningModel, "' is not a valid enum value of type PanningModelType"));
        }
        parsedOptions.panningModel = conversions['DOMString'](options.panningModel, {
          context: "Failed to construct 'PannerNode': Failed to read the 'panningModel' property from PannerOptions: The provided value '".concat(options.panningModel, "'")
        });
      } else {
        parsedOptions.panningModel = 'equalpower';
      }
      if (options && options.distanceModel !== undefined) {
        if (!['linear', 'inverse', 'exponential'].includes(options.distanceModel)) {
          throw new TypeError("Failed to construct 'PannerNode': Failed to read the 'distanceModel' property from PannerOptions: The provided value '".concat(options.distanceModel, "' is not a valid enum value of type DistanceModelType"));
        }
        parsedOptions.distanceModel = conversions['DOMString'](options.distanceModel, {
          context: "Failed to construct 'PannerNode': Failed to read the 'distanceModel' property from PannerOptions: The provided value '".concat(options.distanceModel, "'")
        });
      } else {
        parsedOptions.distanceModel = 'inverse';
      }
      if (options && options.positionX !== undefined) {
        parsedOptions.positionX = conversions['float'](options.positionX, {
          context: "Failed to construct 'PannerNode': Failed to read the 'positionX' property from PannerOptions: The provided value (".concat(options.positionX, "})")
        });
      } else {
        parsedOptions.positionX = 0;
      }
      if (options && options.positionY !== undefined) {
        parsedOptions.positionY = conversions['float'](options.positionY, {
          context: "Failed to construct 'PannerNode': Failed to read the 'positionY' property from PannerOptions: The provided value (".concat(options.positionY, "})")
        });
      } else {
        parsedOptions.positionY = 0;
      }
      if (options && options.positionZ !== undefined) {
        parsedOptions.positionZ = conversions['float'](options.positionZ, {
          context: "Failed to construct 'PannerNode': Failed to read the 'positionZ' property from PannerOptions: The provided value (".concat(options.positionZ, "})")
        });
      } else {
        parsedOptions.positionZ = 0;
      }
      if (options && options.orientationX !== undefined) {
        parsedOptions.orientationX = conversions['float'](options.orientationX, {
          context: "Failed to construct 'PannerNode': Failed to read the 'orientationX' property from PannerOptions: The provided value (".concat(options.orientationX, "})")
        });
      } else {
        parsedOptions.orientationX = 1;
      }
      if (options && options.orientationY !== undefined) {
        parsedOptions.orientationY = conversions['float'](options.orientationY, {
          context: "Failed to construct 'PannerNode': Failed to read the 'orientationY' property from PannerOptions: The provided value (".concat(options.orientationY, "})")
        });
      } else {
        parsedOptions.orientationY = 0;
      }
      if (options && options.orientationZ !== undefined) {
        parsedOptions.orientationZ = conversions['float'](options.orientationZ, {
          context: "Failed to construct 'PannerNode': Failed to read the 'orientationZ' property from PannerOptions: The provided value (".concat(options.orientationZ, "})")
        });
      } else {
        parsedOptions.orientationZ = 0;
      }
      if (options && options.refDistance !== undefined) {
        parsedOptions.refDistance = conversions['double'](options.refDistance, {
          context: "Failed to construct 'PannerNode': Failed to read the 'refDistance' property from PannerOptions: The provided value (".concat(options.refDistance, "})")
        });
      } else {
        parsedOptions.refDistance = 1;
      }
      if (options && options.maxDistance !== undefined) {
        parsedOptions.maxDistance = conversions['double'](options.maxDistance, {
          context: "Failed to construct 'PannerNode': Failed to read the 'maxDistance' property from PannerOptions: The provided value (".concat(options.maxDistance, "})")
        });
      } else {
        parsedOptions.maxDistance = 10000;
      }
      if (options && options.rolloffFactor !== undefined) {
        parsedOptions.rolloffFactor = conversions['double'](options.rolloffFactor, {
          context: "Failed to construct 'PannerNode': Failed to read the 'rolloffFactor' property from PannerOptions: The provided value (".concat(options.rolloffFactor, "})")
        });
      } else {
        parsedOptions.rolloffFactor = 1;
      }
      if (options && options.coneInnerAngle !== undefined) {
        parsedOptions.coneInnerAngle = conversions['double'](options.coneInnerAngle, {
          context: "Failed to construct 'PannerNode': Failed to read the 'coneInnerAngle' property from PannerOptions: The provided value (".concat(options.coneInnerAngle, "})")
        });
      } else {
        parsedOptions.coneInnerAngle = 360;
      }
      if (options && options.coneOuterAngle !== undefined) {
        parsedOptions.coneOuterAngle = conversions['double'](options.coneOuterAngle, {
          context: "Failed to construct 'PannerNode': Failed to read the 'coneOuterAngle' property from PannerOptions: The provided value (".concat(options.coneOuterAngle, "})")
        });
      } else {
        parsedOptions.coneOuterAngle = 360;
      }
      if (options && options.coneOuterGain !== undefined) {
        parsedOptions.coneOuterGain = conversions['double'](options.coneOuterGain, {
          context: "Failed to construct 'PannerNode': Failed to read the 'coneOuterGain' property from PannerOptions: The provided value (".concat(options.coneOuterGain, "})")
        });
      } else {
        parsedOptions.coneOuterGain = 0;
      }
      if (options && options.channelCount !== undefined) {
        parsedOptions.channelCount = conversions['unsigned long'](options.channelCount, {
          enforceRange: true,
          context: "Failed to construct 'PannerNode': Failed to read the 'channelCount' property from PannerOptions: The provided value '".concat(options.channelCount, "'")
        });
      }
      if (options && options.channelCountMode !== undefined) {
        parsedOptions.channelCountMode = conversions['DOMString'](options.channelCountMode, {
          context: "Failed to construct 'PannerNode': Failed to read the 'channelCount' property from PannerOptions: The provided value '".concat(options.channelCountMode, "'")
        });
      }
      if (options && options.channelInterpretation !== undefined) {
        parsedOptions.channelInterpretation = conversions['DOMString'](options.channelInterpretation, {
          context: "Failed to construct 'PannerNode': Failed to read the 'channelInterpretation' property from PannerOptions: The provided value '".concat(options.channelInterpretation, "'")
        });
      }
      var napiObj;
      try {
        napiObj = new nativeBinding.PannerNode(context[kNapiObj], parsedOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      _this = _callSuper(this, PannerNode, [context, _defineProperty({}, kNapiObj, napiObj)]);
      _classPrivateFieldInitSpec(_this, _positionX, null);
      _classPrivateFieldInitSpec(_this, _positionY, null);
      _classPrivateFieldInitSpec(_this, _positionZ, null);
      _classPrivateFieldInitSpec(_this, _orientationX, null);
      _classPrivateFieldInitSpec(_this, _orientationY, null);
      _classPrivateFieldInitSpec(_this, _orientationZ, null);
      _classPrivateFieldSet(_positionX, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].positionX)));
      _classPrivateFieldSet(_positionY, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].positionY)));
      _classPrivateFieldSet(_positionZ, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].positionZ)));
      _classPrivateFieldSet(_orientationX, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].orientationX)));
      _classPrivateFieldSet(_orientationY, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].orientationY)));
      _classPrivateFieldSet(_orientationZ, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].orientationZ)));
      return _this;
    }
    _inherits(PannerNode, _AudioNode);
    return _createClass(PannerNode, [{
      key: "positionX",
      get: function get() {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        return _classPrivateFieldGet(_positionX, this);
      }
    }, {
      key: "positionY",
      get: function get() {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        return _classPrivateFieldGet(_positionY, this);
      }
    }, {
      key: "positionZ",
      get: function get() {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        return _classPrivateFieldGet(_positionZ, this);
      }
    }, {
      key: "orientationX",
      get: function get() {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        return _classPrivateFieldGet(_orientationX, this);
      }
    }, {
      key: "orientationY",
      get: function get() {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        return _classPrivateFieldGet(_orientationY, this);
      }
    }, {
      key: "orientationZ",
      get: function get() {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        return _classPrivateFieldGet(_orientationZ, this);
      }
    }, {
      key: "panningModel",
      get: function get() {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        return this[kNapiObj].panningModel;
      },
      set: function set(value) {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        if (!['equalpower', 'HRTF'].includes(value)) {
          console.warn("Failed to set the 'panningModel' property on 'PannerNode': Value '".concat(value, "' is not a valid 'PanningModelType' enum value"));
          return;
        }
        try {
          this[kNapiObj].panningModel = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "distanceModel",
      get: function get() {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        return this[kNapiObj].distanceModel;
      },
      set: function set(value) {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        if (!['linear', 'inverse', 'exponential'].includes(value)) {
          console.warn("Failed to set the 'distanceModel' property on 'PannerNode': Value '".concat(value, "' is not a valid 'DistanceModelType' enum value"));
          return;
        }
        try {
          this[kNapiObj].distanceModel = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "refDistance",
      get: function get() {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        return this[kNapiObj].refDistance;
      },
      set: function set(value) {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        value = conversions['double'](value, {
          context: "Failed to set the 'refDistance' property on 'PannerNode': Value"
        });
        try {
          this[kNapiObj].refDistance = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "maxDistance",
      get: function get() {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        return this[kNapiObj].maxDistance;
      },
      set: function set(value) {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        value = conversions['double'](value, {
          context: "Failed to set the 'maxDistance' property on 'PannerNode': Value"
        });
        try {
          this[kNapiObj].maxDistance = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "rolloffFactor",
      get: function get() {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        return this[kNapiObj].rolloffFactor;
      },
      set: function set(value) {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        value = conversions['double'](value, {
          context: "Failed to set the 'rolloffFactor' property on 'PannerNode': Value"
        });
        try {
          this[kNapiObj].rolloffFactor = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "coneInnerAngle",
      get: function get() {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        return this[kNapiObj].coneInnerAngle;
      },
      set: function set(value) {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        value = conversions['double'](value, {
          context: "Failed to set the 'coneInnerAngle' property on 'PannerNode': Value"
        });
        try {
          this[kNapiObj].coneInnerAngle = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "coneOuterAngle",
      get: function get() {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        return this[kNapiObj].coneOuterAngle;
      },
      set: function set(value) {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        value = conversions['double'](value, {
          context: "Failed to set the 'coneOuterAngle' property on 'PannerNode': Value"
        });
        try {
          this[kNapiObj].coneOuterAngle = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "coneOuterGain",
      get: function get() {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        return this[kNapiObj].coneOuterGain;
      },
      set: function set(value) {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        value = conversions['double'](value, {
          context: "Failed to set the 'coneOuterGain' property on 'PannerNode': Value"
        });
        try {
          this[kNapiObj].coneOuterGain = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "setPosition",
      value: function setPosition(x, y, z) {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        if (arguments.length < 3) {
          throw new TypeError("Failed to execute 'setPosition' on 'PannerNode': 3 argument required, but only ".concat(arguments.length, " present"));
        }
        x = conversions['float'](x, {
          context: "Failed to execute 'setPosition' on 'PannerNode': Parameter 1"
        });
        y = conversions['float'](y, {
          context: "Failed to execute 'setPosition' on 'PannerNode': Parameter 2"
        });
        z = conversions['float'](z, {
          context: "Failed to execute 'setPosition' on 'PannerNode': Parameter 3"
        });
        try {
          return this[kNapiObj].setPosition(x, y, z);
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "setOrientation",
      value: function setOrientation(x, y, z) {
        if (!(this instanceof PannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'PannerNode\'');
        }
        if (arguments.length < 3) {
          throw new TypeError("Failed to execute 'setOrientation' on 'PannerNode': 3 argument required, but only ".concat(arguments.length, " present"));
        }
        x = conversions['float'](x, {
          context: "Failed to execute 'setOrientation' on 'PannerNode': Parameter 1"
        });
        y = conversions['float'](y, {
          context: "Failed to execute 'setOrientation' on 'PannerNode': Parameter 2"
        });
        z = conversions['float'](z, {
          context: "Failed to execute 'setOrientation' on 'PannerNode': Parameter 3"
        });
        try {
          return this[kNapiObj].setOrientation(x, y, z);
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }]);
  }(AudioNode);
  Object.defineProperties(PannerNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 1
    }
  });
  Object.defineProperties(PannerNode.prototype, (_Object$definePropert = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$definePropert, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'PannerNode'
  }), "positionX", kEnumerableProperty), "positionY", kEnumerableProperty), "positionZ", kEnumerableProperty), "orientationX", kEnumerableProperty), "orientationY", kEnumerableProperty), "orientationZ", kEnumerableProperty), "panningModel", kEnumerableProperty), "distanceModel", kEnumerableProperty), "refDistance", kEnumerableProperty), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$definePropert, "maxDistance", kEnumerableProperty), "rolloffFactor", kEnumerableProperty), "coneInnerAngle", kEnumerableProperty), "coneOuterAngle", kEnumerableProperty), "coneOuterGain", kEnumerableProperty), "setPosition", kEnumerableProperty), "setOrientation", kEnumerableProperty)));
  return PannerNode;
};

/***/ }),

/***/ 2864:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(4407),
  throwSanitizedError = _require.throwSanitizedError;
var _require2 = __webpack_require__(8955),
  toSanitizedSequence = _require2.toSanitizedSequence;
var _require3 = __webpack_require__(9439),
  kNapiObj = _require3.kNapiObj;
var _require4 = __webpack_require__(4019),
  kHiddenProperty = _require4.kHiddenProperty;
module.exports = function (jsExport, nativeBinding) {
  var PeriodicWave = /*#__PURE__*/_createClass(function PeriodicWave(context, options) {
    _classCallCheck(this, PeriodicWave);
    if (arguments.length < 1) {
      throw new TypeError("Failed to construct 'PeriodicWave': 1 argument required, but only ".concat(arguments.length, " present"));
    }
    if (!(context instanceof jsExport.BaseAudioContext)) {
      throw new TypeError("Failed to construct 'PeriodicWave': argument 1 is not of type BaseAudioContext");
    }
    var parsedOptions = {};
    if (options && 'real' in options) {
      try {
        parsedOptions.real = toSanitizedSequence(options.real, Float32Array);
      } catch (err) {
        throw new TypeError("Failed to construct 'PeriodicWave': Failed to read the 'real' property from PeriodicWaveOptions: The provided value ".concat(err.message));
      }
    }
    if (options && 'imag' in options) {
      try {
        parsedOptions.imag = toSanitizedSequence(options.imag, Float32Array);
      } catch (err) {
        throw new TypeError("Failed to construct 'PeriodicWave': Failed to read the 'imag' property from PeriodicWaveOptions: The provided value ".concat(err.message));
      }
    }

    // disableNormalization = false
    if (options && 'disableNormalization' in options) {
      parsedOptions.disableNormalization = conversions['boolean'](options.disableNormalization, {
        context: "Failed to construct 'PeriodicWave': Failed to read the 'imag' property from PeriodicWaveOptions: The provided value"
      });
    } else {
      parsedOptions.disableNormalization;
    }
    try {
      var napiObj = new nativeBinding.PeriodicWave(context[kNapiObj], parsedOptions);
      Object.defineProperty(this, kNapiObj, _objectSpread({
        value: napiObj
      }, kHiddenProperty));
    } catch (err) {
      throwSanitizedError(err);
    }
  });
  Object.defineProperties(PeriodicWave, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 1
    }
  });
  Object.defineProperties(PeriodicWave.prototype, _defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'PeriodicWave'
  }));
  return PeriodicWave;
};

/***/ }),

/***/ 3679:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(4407),
  throwSanitizedError = _require3.throwSanitizedError;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kAudioBuffer = _require4.kAudioBuffer,
  kOnAudioProcess = _require4.kOnAudioProcess;
var _require5 = __webpack_require__(2873),
  propagateEvent = _require5.propagateEvent;
/* eslint-enable no-unused-vars */

var AudioNode = __webpack_require__(8536);
module.exports = function (jsExport, nativeBinding) {
  var _onaudioprocess = /*#__PURE__*/new WeakMap();
  var ScriptProcessorNode = /*#__PURE__*/function (_AudioNode) {
    function ScriptProcessorNode(context, options) {
      var _this;
      _classCallCheck(this, ScriptProcessorNode);
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'ScriptProcessorNode': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.BaseAudioContext)) {
        throw new TypeError("Failed to construct 'ScriptProcessorNode': argument 1 is not of type BaseAudioContext");
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && _typeof(options) !== 'object') {
        throw new TypeError('Failed to construct \'ScriptProcessorNode\': argument 2 is not of type \'ScriptProcessorNodeOptions\'');
      }

      // IDL defines bufferSize default value as 0
      // cf. https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createscriptprocessor
      // > If it’s not passed in, or if the value is 0, then the implementation
      // > will choose the best buffer size for the given environment, which will
      // > be constant power of 2 throughout the lifetime of the node.
      if (options && options.bufferSize !== undefined && options.bufferSize !== 0) {
        parsedOptions.bufferSize = conversions['unsigned long'](options.bufferSize, {
          enforceRange: true,
          context: "Failed to construct 'ScriptProcessorNode': Failed to read the 'bufferSize' property from ScriptProcessorNodeOptions: The provided value '".concat(options.bufferSize, "'")
        });
      } else {
        parsedOptions.bufferSize = 256;
      }
      if (options && options.numberOfInputChannels !== undefined) {
        parsedOptions.numberOfInputChannels = conversions['unsigned long'](options.numberOfInputChannels, {
          enforceRange: true,
          context: "Failed to construct 'ScriptProcessorNode': Failed to read the 'numberOfInputChannels' property from ScriptProcessorNodeOptions: The provided value '".concat(options.numberOfInputChannels, "'")
        });
      } else {
        parsedOptions.numberOfInputChannels = 2;
      }
      if (options && options.numberOfOutputChannels !== undefined) {
        parsedOptions.numberOfOutputChannels = conversions['unsigned long'](options.numberOfOutputChannels, {
          enforceRange: true,
          context: "Failed to construct 'ScriptProcessorNode': Failed to read the 'numberOfOutputChannels' property from ScriptProcessorNodeOptions: The provided value '".concat(options.numberOfOutputChannels, "'")
        });
      } else {
        parsedOptions.numberOfOutputChannels = 2;
      }
      if (options && options.channelCount !== undefined) {
        parsedOptions.channelCount = conversions['unsigned long'](options.channelCount, {
          enforceRange: true,
          context: "Failed to construct 'ScriptProcessorNode': Failed to read the 'channelCount' property from ScriptProcessorNodeOptions: The provided value '".concat(options.channelCount, "'")
        });
      }
      if (options && options.channelCountMode !== undefined) {
        parsedOptions.channelCountMode = conversions['DOMString'](options.channelCountMode, {
          context: "Failed to construct 'ScriptProcessorNode': Failed to read the 'channelCount' property from ScriptProcessorNodeOptions: The provided value '".concat(options.channelCountMode, "'")
        });
      }
      if (options && options.channelInterpretation !== undefined) {
        parsedOptions.channelInterpretation = conversions['DOMString'](options.channelInterpretation, {
          context: "Failed to construct 'ScriptProcessorNode': Failed to read the 'channelInterpretation' property from ScriptProcessorNodeOptions: The provided value '".concat(options.channelInterpretation, "'")
        });
      }
      var napiObj;
      try {
        napiObj = new nativeBinding.ScriptProcessorNode(context[kNapiObj], parsedOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      _this = _callSuper(this, ScriptProcessorNode, [context, _defineProperty({}, kNapiObj, napiObj)]);
      _classPrivateFieldInitSpec(_this, _onaudioprocess, null);
      _this[kNapiObj][kOnAudioProcess] = function (err, rawEvent) {
        var audioProcessingEventInit = {
          playbackTime: rawEvent.playbackTime,
          inputBuffer: new jsExport.AudioBuffer(_defineProperty({}, kNapiObj, rawEvent.inputBuffer)),
          outputBuffer: new jsExport.AudioBuffer(_defineProperty({}, kNapiObj, rawEvent.outputBuffer))
        };
        var event = new jsExport.AudioProcessingEvent('audioprocess', audioProcessingEventInit);
        propagateEvent(this, event);
      }.bind(_this);
      _this[kNapiObj].listen_to_events();
      return _this;
    }
    _inherits(ScriptProcessorNode, _AudioNode);
    return _createClass(ScriptProcessorNode, [{
      key: "bufferSize",
      get: function get() {
        if (!(this instanceof ScriptProcessorNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'ScriptProcessorNode\'');
        }
        return this[kNapiObj].bufferSize;
      }
    }, {
      key: "onaudioprocess",
      get: function get() {
        if (!(this instanceof ScriptProcessorNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'ScriptProcessorNode\'');
        }
        return _classPrivateFieldGet(_onaudioprocess, this);
      },
      set: function set(value) {
        if (!(this instanceof ScriptProcessorNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'ScriptProcessorNode\'');
        }
        if (isFunction(value) || value === null) {
          _classPrivateFieldSet(_onaudioprocess, this, value);
        }
      }
    }]);
  }(AudioNode);
  Object.defineProperties(ScriptProcessorNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 0
    }
  });
  Object.defineProperties(ScriptProcessorNode.prototype, _defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'ScriptProcessorNode'
  }), "bufferSize", kEnumerableProperty), "onaudioprocess", kEnumerableProperty));
  return ScriptProcessorNode;
};

/***/ }),

/***/ 3616:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(4407),
  throwSanitizedError = _require3.throwSanitizedError;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kAudioBuffer = _require4.kAudioBuffer;
/* eslint-enable no-unused-vars */

var AudioNode = __webpack_require__(8536);
module.exports = function (jsExport, nativeBinding) {
  var _pan = /*#__PURE__*/new WeakMap();
  var StereoPannerNode = /*#__PURE__*/function (_AudioNode) {
    function StereoPannerNode(context, options) {
      var _this;
      _classCallCheck(this, StereoPannerNode);
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'StereoPannerNode': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.BaseAudioContext)) {
        throw new TypeError("Failed to construct 'StereoPannerNode': argument 1 is not of type BaseAudioContext");
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && _typeof(options) !== 'object') {
        throw new TypeError('Failed to construct \'StereoPannerNode\': argument 2 is not of type \'StereoPannerOptions\'');
      }
      if (options && options.pan !== undefined) {
        parsedOptions.pan = conversions['float'](options.pan, {
          context: "Failed to construct 'StereoPannerNode': Failed to read the 'pan' property from StereoPannerOptions: The provided value (".concat(options.pan, "})")
        });
      } else {
        parsedOptions.pan = 0;
      }
      if (options && options.channelCount !== undefined) {
        parsedOptions.channelCount = conversions['unsigned long'](options.channelCount, {
          enforceRange: true,
          context: "Failed to construct 'StereoPannerNode': Failed to read the 'channelCount' property from StereoPannerOptions: The provided value '".concat(options.channelCount, "'")
        });
      }
      if (options && options.channelCountMode !== undefined) {
        parsedOptions.channelCountMode = conversions['DOMString'](options.channelCountMode, {
          context: "Failed to construct 'StereoPannerNode': Failed to read the 'channelCount' property from StereoPannerOptions: The provided value '".concat(options.channelCountMode, "'")
        });
      }
      if (options && options.channelInterpretation !== undefined) {
        parsedOptions.channelInterpretation = conversions['DOMString'](options.channelInterpretation, {
          context: "Failed to construct 'StereoPannerNode': Failed to read the 'channelInterpretation' property from StereoPannerOptions: The provided value '".concat(options.channelInterpretation, "'")
        });
      }
      var napiObj;
      try {
        napiObj = new nativeBinding.StereoPannerNode(context[kNapiObj], parsedOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      _this = _callSuper(this, StereoPannerNode, [context, _defineProperty({}, kNapiObj, napiObj)]);
      _classPrivateFieldInitSpec(_this, _pan, null);
      _classPrivateFieldSet(_pan, _this, new jsExport.AudioParam(_defineProperty({}, kNapiObj, _this[kNapiObj].pan)));
      return _this;
    }
    _inherits(StereoPannerNode, _AudioNode);
    return _createClass(StereoPannerNode, [{
      key: "pan",
      get: function get() {
        if (!(this instanceof StereoPannerNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'StereoPannerNode\'');
        }
        return _classPrivateFieldGet(_pan, this);
      }
    }]);
  }(AudioNode);
  Object.defineProperties(StereoPannerNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 1
    }
  });
  Object.defineProperties(StereoPannerNode.prototype, _defineProperty(_defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'StereoPannerNode'
  }), "pan", kEnumerableProperty));
  return StereoPannerNode;
};

/***/ }),

/***/ 544:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

/* eslint-disable no-unused-vars */
var conversions = __webpack_require__(5616);
var _require = __webpack_require__(8955),
  toSanitizedSequence = _require.toSanitizedSequence;
var _require2 = __webpack_require__(4019),
  isFunction = _require2.isFunction,
  kEnumerableProperty = _require2.kEnumerableProperty;
var _require3 = __webpack_require__(4407),
  throwSanitizedError = _require3.throwSanitizedError;
var _require4 = __webpack_require__(9439),
  kNapiObj = _require4.kNapiObj,
  kAudioBuffer = _require4.kAudioBuffer;
/* eslint-enable no-unused-vars */

var AudioNode = __webpack_require__(8536);
module.exports = function (jsExport, nativeBinding) {
  var WaveShaperNode = /*#__PURE__*/function (_AudioNode) {
    function WaveShaperNode(context, options) {
      _classCallCheck(this, WaveShaperNode);
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'WaveShaperNode': 1 argument required, but only ".concat(arguments.length, " present"));
      }
      if (!(context instanceof jsExport.BaseAudioContext)) {
        throw new TypeError("Failed to construct 'WaveShaperNode': argument 1 is not of type BaseAudioContext");
      }

      // parsed version of the option to be passed to NAPI
      var parsedOptions = {};
      if (options && _typeof(options) !== 'object') {
        throw new TypeError('Failed to construct \'WaveShaperNode\': argument 2 is not of type \'WaveShaperOptions\'');
      }
      if (options && options.curve !== undefined) {
        try {
          parsedOptions.curve = toSanitizedSequence(options.curve, Float32Array);
        } catch (err) {
          throw new TypeError("Failed to construct 'WaveShaperNode': Failed to read the 'curve' property from WaveShaperOptions: The provided value ".concat(err.message));
        }
      } else {
        parsedOptions.curve = null;
      }
      if (options && options.oversample !== undefined) {
        if (!['none', '2x', '4x'].includes(options.oversample)) {
          throw new TypeError("Failed to construct 'WaveShaperNode': Failed to read the 'oversample' property from WaveShaperOptions: The provided value '".concat(options.oversample, "' is not a valid enum value of type OverSampleType"));
        }
        parsedOptions.oversample = conversions['DOMString'](options.oversample, {
          context: "Failed to construct 'WaveShaperNode': Failed to read the 'oversample' property from WaveShaperOptions: The provided value '".concat(options.oversample, "'")
        });
      } else {
        parsedOptions.oversample = 'none';
      }
      if (options && options.channelCount !== undefined) {
        parsedOptions.channelCount = conversions['unsigned long'](options.channelCount, {
          enforceRange: true,
          context: "Failed to construct 'WaveShaperNode': Failed to read the 'channelCount' property from WaveShaperOptions: The provided value '".concat(options.channelCount, "'")
        });
      }
      if (options && options.channelCountMode !== undefined) {
        parsedOptions.channelCountMode = conversions['DOMString'](options.channelCountMode, {
          context: "Failed to construct 'WaveShaperNode': Failed to read the 'channelCount' property from WaveShaperOptions: The provided value '".concat(options.channelCountMode, "'")
        });
      }
      if (options && options.channelInterpretation !== undefined) {
        parsedOptions.channelInterpretation = conversions['DOMString'](options.channelInterpretation, {
          context: "Failed to construct 'WaveShaperNode': Failed to read the 'channelInterpretation' property from WaveShaperOptions: The provided value '".concat(options.channelInterpretation, "'")
        });
      }
      var napiObj;
      try {
        napiObj = new nativeBinding.WaveShaperNode(context[kNapiObj], parsedOptions);
      } catch (err) {
        throwSanitizedError(err);
      }
      return _callSuper(this, WaveShaperNode, [context, _defineProperty({}, kNapiObj, napiObj)]);
    }
    _inherits(WaveShaperNode, _AudioNode);
    return _createClass(WaveShaperNode, [{
      key: "curve",
      get: function get() {
        if (!(this instanceof WaveShaperNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'WaveShaperNode\'');
        }
        return this[kNapiObj].curve;
      },
      set: function set(value) {
        if (!(this instanceof WaveShaperNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'WaveShaperNode\'');
        }
        if (value === null) {
          console.warn('Setting the \'curve\' property on \'WaveShaperNode\' to \'null\' is not supported yet');
          return;
        } else if (!(value instanceof Float32Array)) {
          throw new TypeError('Failed to set the \'curve\' property on \'WaveShaperNode\': Value is not a valid \'Float32Array\' value');
        }
        try {
          this[kNapiObj].curve = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }, {
      key: "oversample",
      get: function get() {
        if (!(this instanceof WaveShaperNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'WaveShaperNode\'');
        }
        return this[kNapiObj].oversample;
      },
      set: function set(value) {
        if (!(this instanceof WaveShaperNode)) {
          throw new TypeError('Invalid Invocation: Value of \'this\' must be of type \'WaveShaperNode\'');
        }
        if (!['none', '2x', '4x'].includes(value)) {
          console.warn("Failed to set the 'oversample' property on 'WaveShaperNode': Value '".concat(value, "' is not a valid 'OverSampleType' enum value"));
          return;
        }
        try {
          this[kNapiObj].oversample = value;
        } catch (err) {
          throwSanitizedError(err);
        }
      }
    }]);
  }(AudioNode);
  Object.defineProperties(WaveShaperNode, {
    length: {
      __proto__: null,
      writable: false,
      enumerable: false,
      configurable: true,
      value: 1
    }
  });
  Object.defineProperties(WaveShaperNode.prototype, _defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, {
    __proto__: null,
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'WaveShaperNode'
  }), "curve", kEnumerableProperty), "oversample", kEnumerableProperty));
  return WaveShaperNode;
};

/***/ }),

/***/ 8955:
/***/ ((__unused_webpack_module, exports) => {

exports.toSanitizedSequence = function toSanitizedSequence(data, targetCtor) {
  if (data.buffer && data.buffer instanceof ArrayBuffer || Array.isArray(data)) {
    data = new targetCtor(data);
  } else {
    throw new TypeError("cannot be converted to sequence of ".concat(targetCtor));
  }

  // check it only contains finite values
  for (var i = 0; i < data.length; i++) {
    if (!Number.isFinite(data[i])) {
      throw new TypeError("should contain only finite values");
    }
  }
  return data;
};

/***/ }),

/***/ 4407:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require = __webpack_require__(857),
  EOL = _require.EOL;
var path = __webpack_require__(6928);
var internalPath = path.join('node-web-audio-api', 'js');
var internalRe = new RegExp(internalPath);
function overrideStack(originalError, newError) {
  // override previous error message
  var stack = originalError.stack.replace(originalError.message, newError.message);
  var lines = stack.split(EOL);

  // remove all lines that refer to internal classes, i.e. contains `node-web-audio-api/js`
  for (var i = lines.length - 1; i > 0; i--) {
    var line = lines[i];
    if (internalRe.test(line)) {
      lines.splice(i, 1);
    }
  }

  // override new stack with modified one
  newError.stack = lines.join(EOL);
}
exports.throwSanitizedError = function throwSanitizedError(err) {
  // We also need to handle output of `assert_ne!` as well, e.g.
  // assertion `left != right` failed: NotSupportedError - StereoPannerNode channel count mode cannot be set to max
  //   left: Max
  //   right: Max
  var originalMessage = err.message;
  originalMessage = originalMessage.replace('assertion `left != right` failed: ', '');
  originalMessage = originalMessage.replace('assertion `left == right` failed: ', '');
  originalMessage = originalMessage.split(EOL)[0]; // keep only first line

  // "Native Errors"
  if (originalMessage.startsWith('TypeError')) {
    var msg = originalMessage.replace(/^TypeError - /, '');
    var error = new TypeError(msg);
    overrideStack(err, error);
    throw error;
  } else if (originalMessage.startsWith('RangeError')) {
    var _msg = originalMessage.replace(/^RangeError - /, '');
    var _error = new RangeError(_msg);
    overrideStack(err, _error);
    throw _error;
  }

  // DOM Exceptions
  if (originalMessage.startsWith('NotSupportedError')) {
    var _msg2 = originalMessage.replace(/^NotSupportedError - /, '');
    var _error2 = new DOMException(_msg2, 'NotSupportedError');
    overrideStack(err, _error2);
    throw _error2;
  } else if (originalMessage.startsWith('InvalidStateError')) {
    var _msg3 = originalMessage.replace(/^InvalidStateError - /, '');
    var _error3 = new DOMException(_msg3, 'InvalidStateError');
    overrideStack(err, _error3);
    throw _error3;
  } else if (originalMessage.startsWith('IndexSizeError')) {
    var _msg4 = originalMessage.replace(/^IndexSizeError - /, '');
    var _error4 = new DOMException(_msg4, 'IndexSizeError');
    overrideStack(err, _error4);
    throw _error4;
  } else if (originalMessage.startsWith('InvalidAccessError')) {
    var _msg5 = originalMessage.replace(/^InvalidAccessError - /, '');
    var _error5 = new DOMException(_msg5, 'InvalidAccessError');
    overrideStack(err, _error5);
    throw _error5;
  } else if (originalMessage.startsWith('NotFoundError')) {
    var _msg6 = originalMessage.replace(/^NotFoundError - /, '');
    var _error6 = new DOMException(_msg6, 'NotFoundError');
    overrideStack(err, _error6);
    throw _error6;
  }
  console.warn('[lib/errors.js] Unexpected Rust error', err);
  throw err;
};

/***/ }),

/***/ 2873:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _require = __webpack_require__(4019),
  isFunction = _require.isFunction;
module.exports.propagateEvent = function propagateEvent(eventTarget, event) {
  // call attribute first if exists
  if (isFunction(eventTarget["on".concat(event.type)])) {
    eventTarget["on".concat(event.type)](event);
  }
  // then distach to add event listeners
  eventTarget.dispatchEvent(event);
};

/***/ }),

/***/ 9439:
/***/ ((module) => {

module.exports.kNapiObj = Symbol('node-web-audio-api:napi-obj');
module.exports.kAudioBuffer = Symbol('node-web-audio-api:audio-buffer');
module.exports.kPrivateConstructor = Symbol('node-web-audio-api:private-constructor');
module.exports.kCreateProcessor = Symbol('node-web-audio-api:create-processor');
module.exports.kProcessorRegistered = Symbol('node-web-audio-api:processor-registered');
module.exports.kGetParameterDescriptors = Symbol('node-web-audio-api:get-parameter-descriptors');
module.exports.kWorkletRelease = Symbol('node-web-audio-api:worklet-release');
module.exports.kCheckProcessorsCreated = Symbol('node-web-audio-api:check-processor-created');

// semi-private keys for events listeners

// # BaseAudioContext
module.exports.kOnStateChange = Symbol["for"]('node-web-audio-api:onstatechange');
// AudioContext
module.exports.kOnSinkChange = Symbol["for"]('node-web-audio-api:onsinkchange');
// # OfflineAudioContext
// > [The onstatechange] event is fired before the complete event is fired
// cf. https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-onstatechange
// @fixme: for now the `complete` event is triggered **before** startRenring fulfills
module.exports.kOnComplete = Symbol["for"]('node-web-audio-api:oncomplete');
// # AudioScheduledSourceNode
module.exports.kOnEnded = Symbol["for"]('node-web-audio-api:onended');
// # ScriptProcessorNode
module.exports.kOnAudioProcess = Symbol["for"]('node-web-audio-api:onaudioprocess');
// # AudioRenderCapacity
module.exports.kOnUpdate = Symbol["for"]('node-web-audio-api:onupdate');

/***/ }),

/***/ 4019:
/***/ ((__unused_webpack_module, exports) => {

exports.isFunction = function isFunction(val) {
  return Object.prototype.toString.call(val) == '[object Function]' || Object.prototype.toString.call(val) == '[object AsyncFunction]';
};
var kEnumerableProperty = {
  __proto__: null
};
kEnumerableProperty.enumerable = true;
Object.freeze(kEnumerableProperty);
exports.kEnumerableProperty = kEnumerableProperty;
var kHiddenProperty = {
  __proto__: null
};
kHiddenProperty.enumerable = false;
Object.freeze(kHiddenProperty);
exports.kHiddenProperty = kHiddenProperty;

/***/ }),

/***/ 8350:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var assert = __webpack_require__(2613);


/**
 * Module wrapper of @substack's `caller.js`
 * @original: https://github.com/substack/node-resolve/blob/master/lib/caller.js
 * @blessings: https://twitter.com/eriktoth/statuses/413719312273125377
 * @see https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
 */
module.exports = function (depth) {
    var pst, stack, file, frame, startIdx;

    pst = Error.prepareStackTrace;
    Error.prepareStackTrace = function (_, stack) {
        Error.prepareStackTrace = pst;
        return stack;
    };

    stack = (new Error()).stack;
    // Handle case where error object is wrapped by say babel. Try to find current file's index first.
    startIdx = 0;
    while(startIdx < stack.length && stack[startIdx].getFileName() !== __filename) startIdx++;
    assert(startIdx < stack.length, 'Unexpected: unable to find caller/index.js in the stack');

    depth = !depth || isNaN(depth) ? 1 : (depth > stack.length - 2 ? stack.length - 2 : depth);
    stack = stack.slice(startIdx + depth + 1);

    do {
        frame = stack.shift();
        file = frame && frame.getFileName();
    } while (stack.length && file === 'module.js');

    return file;
};


/***/ }),

/***/ 5616:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function makeException(ErrorType, message, options) {
  if (options.globals) {
    ErrorType = options.globals[ErrorType.name];
  }
  return new ErrorType(`${options.context ? options.context : "Value"} ${message}.`);
}

function toNumber(value, options) {
  if (typeof value === "bigint") {
    throw makeException(TypeError, "is a BigInt which cannot be converted to a number", options);
  }
  if (!options.globals) {
    return Number(value);
  }
  return options.globals.Number(value);
}

// Round x to the nearest integer, choosing the even integer if it lies halfway between two.
function evenRound(x) {
  // There are four cases for numbers with fractional part being .5:
  //
  // case |     x     | floor(x) | round(x) | expected | x <> 0 | x % 1 | x & 1 |   example
  //   1  |  2n + 0.5 |  2n      |  2n + 1  |  2n      |   >    |  0.5  |   0   |  0.5 ->  0
  //   2  |  2n + 1.5 |  2n + 1  |  2n + 2  |  2n + 2  |   >    |  0.5  |   1   |  1.5 ->  2
  //   3  | -2n - 0.5 | -2n - 1  | -2n      | -2n      |   <    | -0.5  |   0   | -0.5 ->  0
  //   4  | -2n - 1.5 | -2n - 2  | -2n - 1  | -2n - 2  |   <    | -0.5  |   1   | -1.5 -> -2
  // (where n is a non-negative integer)
  //
  // Branch here for cases 1 and 4
  if ((x > 0 && (x % 1) === +0.5 && (x & 1) === 0) ||
        (x < 0 && (x % 1) === -0.5 && (x & 1) === 1)) {
    return censorNegativeZero(Math.floor(x));
  }

  return censorNegativeZero(Math.round(x));
}

function integerPart(n) {
  return censorNegativeZero(Math.trunc(n));
}

function sign(x) {
  return x < 0 ? -1 : 1;
}

function modulo(x, y) {
  // https://tc39.github.io/ecma262/#eqn-modulo
  // Note that http://stackoverflow.com/a/4467559/3191 does NOT work for large modulos
  const signMightNotMatch = x % y;
  if (sign(y) !== sign(signMightNotMatch)) {
    return signMightNotMatch + y;
  }
  return signMightNotMatch;
}

function censorNegativeZero(x) {
  return x === 0 ? 0 : x;
}

function createIntegerConversion(bitLength, { unsigned }) {
  let lowerBound, upperBound;
  if (unsigned) {
    lowerBound = 0;
    upperBound = 2 ** bitLength - 1;
  } else {
    lowerBound = -(2 ** (bitLength - 1));
    upperBound = 2 ** (bitLength - 1) - 1;
  }

  const twoToTheBitLength = 2 ** bitLength;
  const twoToOneLessThanTheBitLength = 2 ** (bitLength - 1);

  return (value, options = {}) => {
    let x = toNumber(value, options);
    x = censorNegativeZero(x);

    if (options.enforceRange) {
      if (!Number.isFinite(x)) {
        throw makeException(TypeError, "is not a finite number", options);
      }

      x = integerPart(x);

      if (x < lowerBound || x > upperBound) {
        throw makeException(
          TypeError,
          `is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`,
          options
        );
      }

      return x;
    }

    if (!Number.isNaN(x) && options.clamp) {
      x = Math.min(Math.max(x, lowerBound), upperBound);
      x = evenRound(x);
      return x;
    }

    if (!Number.isFinite(x) || x === 0) {
      return 0;
    }
    x = integerPart(x);

    // Math.pow(2, 64) is not accurately representable in JavaScript, so try to avoid these per-spec operations if
    // possible. Hopefully it's an optimization for the non-64-bitLength cases too.
    if (x >= lowerBound && x <= upperBound) {
      return x;
    }

    // These will not work great for bitLength of 64, but oh well. See the README for more details.
    x = modulo(x, twoToTheBitLength);
    if (!unsigned && x >= twoToOneLessThanTheBitLength) {
      return x - twoToTheBitLength;
    }
    return x;
  };
}

function createLongLongConversion(bitLength, { unsigned }) {
  const upperBound = Number.MAX_SAFE_INTEGER;
  const lowerBound = unsigned ? 0 : Number.MIN_SAFE_INTEGER;
  const asBigIntN = unsigned ? BigInt.asUintN : BigInt.asIntN;

  return (value, options = {}) => {
    let x = toNumber(value, options);
    x = censorNegativeZero(x);

    if (options.enforceRange) {
      if (!Number.isFinite(x)) {
        throw makeException(TypeError, "is not a finite number", options);
      }

      x = integerPart(x);

      if (x < lowerBound || x > upperBound) {
        throw makeException(
          TypeError,
          `is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`,
          options
        );
      }

      return x;
    }

    if (!Number.isNaN(x) && options.clamp) {
      x = Math.min(Math.max(x, lowerBound), upperBound);
      x = evenRound(x);
      return x;
    }

    if (!Number.isFinite(x) || x === 0) {
      return 0;
    }

    let xBigInt = BigInt(integerPart(x));
    xBigInt = asBigIntN(bitLength, xBigInt);
    return Number(xBigInt);
  };
}

exports.any = value => {
  return value;
};

exports.undefined = () => {
  return undefined;
};

exports.boolean = value => {
  return Boolean(value);
};

exports.byte = createIntegerConversion(8, { unsigned: false });
exports.octet = createIntegerConversion(8, { unsigned: true });

exports.short = createIntegerConversion(16, { unsigned: false });
exports["unsigned short"] = createIntegerConversion(16, { unsigned: true });

exports.long = createIntegerConversion(32, { unsigned: false });
exports["unsigned long"] = createIntegerConversion(32, { unsigned: true });

exports["long long"] = createLongLongConversion(64, { unsigned: false });
exports["unsigned long long"] = createLongLongConversion(64, { unsigned: true });

exports.double = (value, options = {}) => {
  const x = toNumber(value, options);

  if (!Number.isFinite(x)) {
    throw makeException(TypeError, "is not a finite floating-point value", options);
  }

  return x;
};

exports["unrestricted double"] = (value, options = {}) => {
  const x = toNumber(value, options);

  return x;
};

exports.float = (value, options = {}) => {
  const x = toNumber(value, options);

  if (!Number.isFinite(x)) {
    throw makeException(TypeError, "is not a finite floating-point value", options);
  }

  if (Object.is(x, -0)) {
    return x;
  }

  const y = Math.fround(x);

  if (!Number.isFinite(y)) {
    throw makeException(TypeError, "is outside the range of a single-precision floating-point value", options);
  }

  return y;
};

exports["unrestricted float"] = (value, options = {}) => {
  const x = toNumber(value, options);

  if (isNaN(x)) {
    return x;
  }

  if (Object.is(x, -0)) {
    return x;
  }

  return Math.fround(x);
};

exports.DOMString = (value, options = {}) => {
  if (options.treatNullAsEmptyString && value === null) {
    return "";
  }

  if (typeof value === "symbol") {
    throw makeException(TypeError, "is a symbol, which cannot be converted to a string", options);
  }

  const StringCtor = options.globals ? options.globals.String : String;
  return StringCtor(value);
};

exports.ByteString = (value, options = {}) => {
  const x = exports.DOMString(value, options);
  let c;
  for (let i = 0; (c = x.codePointAt(i)) !== undefined; ++i) {
    if (c > 255) {
      throw makeException(TypeError, "is not a valid ByteString", options);
    }
  }

  return x;
};

exports.USVString = (value, options = {}) => {
  const S = exports.DOMString(value, options);
  const n = S.length;
  const U = [];
  for (let i = 0; i < n; ++i) {
    const c = S.charCodeAt(i);
    if (c < 0xD800 || c > 0xDFFF) {
      U.push(String.fromCodePoint(c));
    } else if (0xDC00 <= c && c <= 0xDFFF) {
      U.push(String.fromCodePoint(0xFFFD));
    } else if (i === n - 1) {
      U.push(String.fromCodePoint(0xFFFD));
    } else {
      const d = S.charCodeAt(i + 1);
      if (0xDC00 <= d && d <= 0xDFFF) {
        const a = c & 0x3FF;
        const b = d & 0x3FF;
        U.push(String.fromCodePoint((2 << 15) + ((2 << 9) * a) + b));
        ++i;
      } else {
        U.push(String.fromCodePoint(0xFFFD));
      }
    }
  }

  return U.join("");
};

exports.object = (value, options = {}) => {
  if (value === null || (typeof value !== "object" && typeof value !== "function")) {
    throw makeException(TypeError, "is not an object", options);
  }

  return value;
};

const abByteLengthGetter =
    Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get;
const sabByteLengthGetter =
    typeof SharedArrayBuffer === "function" ?
      Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, "byteLength").get :
      null;

function isNonSharedArrayBuffer(value) {
  try {
    // This will throw on SharedArrayBuffers, but not detached ArrayBuffers.
    // (The spec says it should throw, but the spec conflicts with implementations: https://github.com/tc39/ecma262/issues/678)
    abByteLengthGetter.call(value);

    return true;
  } catch {
    return false;
  }
}

function isSharedArrayBuffer(value) {
  try {
    sabByteLengthGetter.call(value);
    return true;
  } catch {
    return false;
  }
}

function isArrayBufferDetached(value) {
  try {
    // eslint-disable-next-line no-new
    new Uint8Array(value);
    return false;
  } catch {
    return true;
  }
}

exports.ArrayBuffer = (value, options = {}) => {
  if (!isNonSharedArrayBuffer(value)) {
    if (options.allowShared && !isSharedArrayBuffer(value)) {
      throw makeException(TypeError, "is not an ArrayBuffer or SharedArrayBuffer", options);
    }
    throw makeException(TypeError, "is not an ArrayBuffer", options);
  }
  if (isArrayBufferDetached(value)) {
    throw makeException(TypeError, "is a detached ArrayBuffer", options);
  }

  return value;
};

const dvByteLengthGetter =
    Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength").get;
exports.DataView = (value, options = {}) => {
  try {
    dvByteLengthGetter.call(value);
  } catch (e) {
    throw makeException(TypeError, "is not a DataView", options);
  }

  if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
    throw makeException(TypeError, "is backed by a SharedArrayBuffer, which is not allowed", options);
  }
  if (isArrayBufferDetached(value.buffer)) {
    throw makeException(TypeError, "is backed by a detached ArrayBuffer", options);
  }

  return value;
};

// Returns the unforgeable `TypedArray` constructor name or `undefined`,
// if the `this` value isn't a valid `TypedArray` object.
//
// https://tc39.es/ecma262/#sec-get-%typedarray%.prototype-@@tostringtag
const typedArrayNameGetter = Object.getOwnPropertyDescriptor(
  Object.getPrototypeOf(Uint8Array).prototype,
  Symbol.toStringTag
).get;
[
  Int8Array,
  Int16Array,
  Int32Array,
  Uint8Array,
  Uint16Array,
  Uint32Array,
  Uint8ClampedArray,
  Float32Array,
  Float64Array
].forEach(func => {
  const { name } = func;
  const article = /^[AEIOU]/u.test(name) ? "an" : "a";
  exports[name] = (value, options = {}) => {
    if (!ArrayBuffer.isView(value) || typedArrayNameGetter.call(value) !== name) {
      throw makeException(TypeError, `is not ${article} ${name} object`, options);
    }
    if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
      throw makeException(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", options);
    }
    if (isArrayBufferDetached(value.buffer)) {
      throw makeException(TypeError, "is a view on a detached ArrayBuffer", options);
    }

    return value;
  };
});

// Common definitions

exports.ArrayBufferView = (value, options = {}) => {
  if (!ArrayBuffer.isView(value)) {
    throw makeException(TypeError, "is not a view on an ArrayBuffer or SharedArrayBuffer", options);
  }

  if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
    throw makeException(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", options);
  }

  if (isArrayBufferDetached(value.buffer)) {
    throw makeException(TypeError, "is a view on a detached ArrayBuffer", options);
  }
  return value;
};

exports.BufferSource = (value, options = {}) => {
  if (ArrayBuffer.isView(value)) {
    if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
      throw makeException(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", options);
    }

    if (isArrayBufferDetached(value.buffer)) {
      throw makeException(TypeError, "is a view on a detached ArrayBuffer", options);
    }
    return value;
  }

  if (!options.allowShared && !isNonSharedArrayBuffer(value)) {
    throw makeException(TypeError, "is not an ArrayBuffer or a view on one", options);
  }
  if (options.allowShared && !isSharedArrayBuffer(value) && !isNonSharedArrayBuffer(value)) {
    throw makeException(TypeError, "is not an ArrayBuffer, SharedArrayBuffer, or a view on one", options);
  }
  if (isArrayBufferDetached(value)) {
    throw makeException(TypeError, "is a detached ArrayBuffer", options);
  }

  return value;
};

exports.DOMTimeStamp = exports["unsigned long long"];


/***/ }),

/***/ 2613:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 181:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 4573:
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ 3024:
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ 7067:
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),

/***/ 4708:
/***/ ((module) => {

"use strict";
module.exports = require("node:https");

/***/ }),

/***/ 7030:
/***/ ((module) => {

"use strict";
module.exports = require("node:net");

/***/ }),

/***/ 6760:
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 1708:
/***/ ((module) => {

"use strict";
module.exports = require("node:process");

/***/ }),

/***/ 7075:
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ 7830:
/***/ ((module) => {

"use strict";
module.exports = require("node:stream/web");

/***/ }),

/***/ 3136:
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ 7975:
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ 5919:
/***/ ((module) => {

"use strict";
module.exports = require("node:worker_threads");

/***/ }),

/***/ 8522:
/***/ ((module) => {

"use strict";
module.exports = require("node:zlib");

/***/ }),

/***/ 857:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 6928:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 8167:
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ }),

/***/ 4741:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
//                                                                            //
//                                                                            //
//                                                                            //
//    ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗               //
//    ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝               //
//    ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗              //
//    ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║              //
//    ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝              //
//     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝               //
//                                                                            //
//                                                                            //
//    - This file has been generated ---------------------------              //
//                                                                            //
//                                                                            //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

function load(nativeBinding) {
    const jsExport = {};

    // --------------------------------------------------------------------------
    // Events
    // --------------------------------------------------------------------------
    jsExport.OfflineAudioCompletionEvent =
        (__webpack_require__(8461).OfflineAudioCompletionEvent);
    jsExport.AudioProcessingEvent = (__webpack_require__(8461).AudioProcessingEvent);
    jsExport.AudioRenderCapacityEvent =
        (__webpack_require__(8461).AudioRenderCapacityEvent);
    // --------------------------------------------------------------------------
    // Create Web Audio API facade
    // --------------------------------------------------------------------------
    jsExport.BaseAudioContext = __webpack_require__(796)(
        jsExport,
        nativeBinding
    );
    jsExport.AudioContext = __webpack_require__(7789)(
        jsExport,
        nativeBinding
    );
    jsExport.OfflineAudioContext = __webpack_require__(6624)(
        jsExport,
        nativeBinding
    );

    jsExport.ScriptProcessorNode = __webpack_require__(3679)(
        jsExport,
        nativeBinding
    );
    jsExport.AudioWorkletNode = __webpack_require__(5364)(
        jsExport,
        nativeBinding
    );
    jsExport.AnalyserNode = __webpack_require__(8801)(
        jsExport,
        nativeBinding
    );
    jsExport.AudioBufferSourceNode = __webpack_require__(2455)(
        jsExport,
        nativeBinding
    );
    jsExport.BiquadFilterNode = __webpack_require__(8440)(
        jsExport,
        nativeBinding
    );
    jsExport.ChannelMergerNode = __webpack_require__(9599)(
        jsExport,
        nativeBinding
    );
    jsExport.ChannelSplitterNode = __webpack_require__(2610)(
        jsExport,
        nativeBinding
    );
    jsExport.ConstantSourceNode = __webpack_require__(9925)(
        jsExport,
        nativeBinding
    );
    jsExport.ConvolverNode = __webpack_require__(4104)(
        jsExport,
        nativeBinding
    );
    jsExport.DelayNode = __webpack_require__(6341)(jsExport, nativeBinding);
    jsExport.DynamicsCompressorNode = __webpack_require__(8391)(
        jsExport,
        nativeBinding
    );
    jsExport.GainNode = __webpack_require__(5395)(jsExport, nativeBinding);
    jsExport.IIRFilterNode = __webpack_require__(6960)(
        jsExport,
        nativeBinding
    );
    jsExport.MediaStreamAudioSourceNode =
        __webpack_require__(4283)(jsExport, nativeBinding);
    jsExport.OscillatorNode = __webpack_require__(5950)(
        jsExport,
        nativeBinding
    );
    jsExport.PannerNode = __webpack_require__(6436)(
        jsExport,
        nativeBinding
    );
    jsExport.StereoPannerNode = __webpack_require__(3616)(
        jsExport,
        nativeBinding
    );
    jsExport.WaveShaperNode = __webpack_require__(544)(
        jsExport,
        nativeBinding
    );

    jsExport.AudioNode = __webpack_require__(8536);
    jsExport.AudioScheduledSourceNode = __webpack_require__(7140);
    jsExport.AudioParam = __webpack_require__(5071);
    jsExport.AudioDestinationNode = __webpack_require__(9626);
    jsExport.AudioListener = __webpack_require__(2584);
    jsExport.AudioWorklet = __webpack_require__(6868);
    jsExport.AudioParamMap = __webpack_require__(5249);
    jsExport.AudioRenderCapacity = __webpack_require__(1568);

    jsExport.PeriodicWave = __webpack_require__(2864)(
        jsExport,
        nativeBinding
    );
    jsExport.AudioBuffer = __webpack_require__(6258)(
        jsExport,
        nativeBinding
    );

    // --------------------------------------------------------------------------
    // Promisify MediaDevices API
    // --------------------------------------------------------------------------
    jsExport.mediaDevices = {};

    const enumerateDevicesSync = nativeBinding.mediaDevices.enumerateDevices;
    jsExport.mediaDevices.enumerateDevices = async function enumerateDevices() {
        const list = enumerateDevicesSync();
        return Promise.resolve(list);
    };

    const getUserMediaSync = nativeBinding.mediaDevices.getUserMedia;
    jsExport.mediaDevices.getUserMedia = async function getUserMedia(options) {
        if (options === undefined) {
            throw new TypeError(
                'Failed to execute "getUserMedia" on "MediaDevices": audio must be requested'
            );
        }

        const stream = getUserMediaSync(options);
        return Promise.resolve(stream);
    };

    return jsExport;
}

module.exports = load;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".node-web-audio.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			792: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(4741);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});