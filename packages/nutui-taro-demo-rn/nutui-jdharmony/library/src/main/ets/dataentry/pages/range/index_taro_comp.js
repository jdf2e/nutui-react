import { createNativePageConfig } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/plugin-framework-react/dist/runtime';
import { _ as _objectSpread2, e as ComponentDefaults, r as rn, h as harmony, a as harmonyAndRn, j as useRtl, b as _slicedToArray, g as _defineProperty, p as pxTransform, f as classNames, o as _asyncToGenerator, q as _regeneratorRuntime, C as Cell, c as ConfigProvider, u as useTranslate, H as Header } from '../../../index.taro.js';
import Taro from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroViewTagName, TaroTextTagName, TaroScrollViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import * as React from '@jd-oh/taro_library/src/main/ets/npm/react';
import { useMemo, useState, useRef, useEffect, useCallback } from '@jd-oh/taro_library/src/main/ets/npm/react';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { u as useTouch } from '../../../use-touch.js';
import { u as usePropsValue } from '../../../use-props-value.js';
import { g as getRectByTaro } from '../../../get-rect-by-taro.js';
import { jsx, jsxs, Fragment } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';
import ReactDOM from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/react';

var __inner_style_data__$2;
var __nesting_style_data__$e;
function __nesting_style__$e() {
  if (__nesting_style_data__$e) return __nesting_style_data__$e;
  __nesting_style_data__$e = [{
    "selectors": [["demo", "bg-w"]],
    "declaration": {
      backgroundColor: "#fff"
    }
  }, {
    "selectors": [["demo", "full"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX"),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": [["demo", "no-overflow"]],
    "declaration": {}
  }, {
    "selectors": [["demo", "web"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX")
    }
  }, {
    "selectors": ["demo", " ", "card"],
    "declaration": {
      paddingTop: convertNumber2VP(25, "PX"),
      paddingRight: convertNumber2VP(18, "PX"),
      paddingBottom: convertNumber2VP(25, "PX"),
      paddingLeft: convertNumber2VP(18, "PX"),
      backgroundColor: "#fff"
    }
  }, {
    "selectors": ["demo", " ", "h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " ", "h5-h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " > ", "p"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ["demo-full", " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }, {
    "selectors": [["demo", "full"], " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }, {
    "selectors": ["nut-range-disabled", " ", "nut-range-button-wrapper"],
    "declaration": {
      cursor: "not-allowed"
    }
  }, {
    "selectors": ["nut-range-disabled", " ", "nut-range-button-wrapper-left"],
    "declaration": {
      cursor: "not-allowed"
    }
  }, {
    "selectors": ["nut-range-disabled", " ", "nut-range-button-wrapper-right"],
    "declaration": {
      cursor: "not-allowed"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-range-button-wrapper"],
    "declaration": {
      left: convertNumber2VP(0),
      right: "auto"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-range-button-wrapper-left"],
    "declaration": {
      right: convertNumber2VP(0),
      left: "auto"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-range-button-wrapper-right"],
    "declaration": {
      left: convertNumber2VP(0),
      right: "auto"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-range-mark-text"],
    "declaration": {
      transform: {
        Translate: {
          x: convertNumber2VP(10, "PX")
        }
      }
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-range-tick"],
    "declaration": {
      right: convertNumber2VP(0, "PX"),
      left: "auto"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-range-vertical-button-wrapper"],
    "declaration": {
      right: "50%",
      left: "auto"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-range-vertical-button-wrapper-left"],
    "declaration": {
      right: "50%",
      left: "auto"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-range-vertical-button-wrapper-right"],
    "declaration": {
      right: "50%",
      left: "auto"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-range-vertical-mark"],
    "declaration": {
      left: "50%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-range-vertical-mark-text-wrapper"],
    "declaration": {
      transform: {
        Translate: {
          y: convertNumber2VP(-11, "PX")
        }
      }
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-range-vertical-tick"],
    "declaration": {
      right: convertNumber2VP(30, "PX"),
      marginLeft: convertNumber2VP(0),
      marginRight: convertNumber2VP(0, "PX")
    }
  }];
  return __nesting_style_data__$e;
}
function __inner_style__$2() {
  if (__inner_style_data__$2) return __inner_style_data__$2;
  __inner_style_data__$2 = {
    "demo": {
      boxSizing: "border-box",
      height: "100%",
      backgroundColor: "#f7f8fa",
      overflowX: "hidden",
      overflowY: "auto",
      paddingTop: convertNumber2VP(0, "PX"),
      paddingRight: convertNumber2VP(17, "PX"),
      paddingBottom: convertNumber2VP(10, "PX"),
      paddingLeft: convertNumber2VP(17, "PX")
    },
    "demo-full": {
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    },
    "demo::-webkit-scrollbar": {
      width: convertNumber2VP(0)
    },
    "h5-body": {
      fontSize: convertNumber2VP(14)
    },
    "h5-span": {},
    "nut-range": _defineProperty({
      display: "block",
      position: "relative",
      height: convertNumber2VP(4, "PX"),
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(15, "PX"),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(15, "PX"),
      backgroundColor: "#ffebf1",
      borderTopLeftRadius: convertNumber2VP(2, "PX"),
      borderTopRightRadius: convertNumber2VP(2, "PX"),
      borderBottomLeftRadius: convertNumber2VP(2, "PX"),
      borderBottomRightRadius: convertNumber2VP(2, "PX"),
      flexBasis: "0%",
      flexGrow: 1,
      flexShrink: 1,
      cursor: "pointer"
    }, "::before", {
      position: "absolute",
      insetBlock: "-8ch",
      insetInline: 0
    }),
    "nut-range-bar": {
      display: "block",
      position: "relative",
      width: "100%",
      height: "100%",
      backgroundColor: "#ff0f23",
      borderTopLeftRadius: convertNumber2VP(2, "PX"),
      borderTopRightRadius: convertNumber2VP(2, "PX"),
      borderBottomLeftRadius: convertNumber2VP(2, "PX"),
      borderBottomRightRadius: convertNumber2VP(2, "PX"),
      transition: "all .2s"
    },
    "nut-range-button": {
      position: "absolute",
      display: "flex",
      width: convertNumber2VP(24, "PX"),
      height: convertNumber2VP(24, "PX"),
      backgroundColor: "#fff",
      borderTopLeftRadius: "50%",
      borderTopRightRadius: "50%",
      borderBottomLeftRadius: "50%",
      borderBottomRightRadius: "50%",
      boxShadow: {
        offsetX: convertNumber2VP(0, "PX"),
        offsetY: convertNumber2VP(1, "PX"),
        radius: convertNumber2VP(2, "PX"),
        color: "rgba(0, 0, 0, 0.15)",
        fill: false
      },
      borderTopWidth: convertNumber2VP(1, "PX"),
      borderRightWidth: convertNumber2VP(1, "PX"),
      borderBottomWidth: convertNumber2VP(1, "PX"),
      borderLeftWidth: convertNumber2VP(1, "PX"),
      borderTopStyle: BorderStyle.Solid,
      borderRightStyle: BorderStyle.Solid,
      borderBottomStyle: BorderStyle.Solid,
      borderLeftStyle: BorderStyle.Solid,
      borderTopColor: "#ff0f23",
      borderRightColor: "#ff0f23",
      borderBottomColor: "#ff0f23",
      borderLeftColor: "#ff0f23",
      outline: "none",
      alignItems: ItemAlign.Center,
      top: "50%",
      left: "50%"
    },
    "nut-range-button-number": {
      position: "relative",
      width: "200%",
      height: convertNumber2VP(24, "PX"),
      lineHeight: convertNumber2VP(14, "PX"),
      paddingTop: convertNumber2VP(5, "PX"),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(5, "PX"),
      paddingLeft: convertNumber2VP(0),
      left: "50%",
      display: "flex",
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center,
      userSelect: "none",
      fontSize: convertNumber2VP(12, "PX"),
      color: "#1a1a1a",
      textAlign: TextAlign.Center,
      boxSizing: "border-box"
    },
    "nut-range-button-wrapper": {
      width: convertNumber2VP(24, "PX"),
      height: convertNumber2VP(24, "PX"),
      touchAction: "none",
      position: "absolute",
      top: "50%",
      left: "100%",
      cursor: "grab",
      outline: "none"
    },
    "nut-range-button-wrapper-left": {
      width: convertNumber2VP(24, "PX"),
      height: convertNumber2VP(24, "PX"),
      position: "absolute",
      top: "50%",
      left: convertNumber2VP(0),
      cursor: "grab",
      outline: "none",
      touchAction: "none"
    },
    "nut-range-button-wrapper-right": {
      width: convertNumber2VP(24, "PX"),
      height: convertNumber2VP(24, "PX"),
      touchAction: "none",
      position: "absolute",
      top: "50%",
      left: "100%",
      cursor: "grab",
      outline: "none"
    },
    "nut-range-container": {
      display: "flex",
      flexDirection: FlexDirection.Row,
      position: "relative",
      width: "100%",
      height: convertNumber2VP(4, "PX"),
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.SpaceBetween
    },
    "nut-range-container-native": {
      height: "auto"
    },
    "nut-range-disabled": {
      cursor: "not-allowed",
      opacity: 0.54
    },
    "nut-range-mark": {
      position: "absolute",
      width: "100%",
      height: convertNumber2VP(14, "PX"),
      overflow: "visible",
      top: "50%"
    },
    "nut-range-mark-text": {
      position: "absolute",
      lineHeight: convertNumber2VP(16, "PX"),
      fontSize: convertNumber2VP(12, "PX"),
      color: "#999",
      textAlign: TextAlign.Center,
      wordBreak: "keep-all",
      userSelect: "none"
    },
    "nut-range-mark-text-wrapper": {
      position: "absolute",
      height: "100%",
      top: convertNumber2VP(14, "PX"),
      transform: {
        Translate: {
          x: convertNumber2VP(-10, "PX")
        }
      }
    },
    "nut-range-max": {
      fontSize: convertNumber2VP(12, "PX"),
      color: "#1a1a1a",
      userSelect: "none"
    },
    "nut-range-min": {
      fontSize: convertNumber2VP(12, "PX"),
      color: "#1a1a1a",
      userSelect: "none"
    },
    "nut-range-tick": {
      position: "absolute",
      top: convertNumber2VP(-20, "PX"),
      width: convertNumber2VP(11, "PX"),
      height: convertNumber2VP(11, "PX"),
      left: convertNumber2VP(0, "PX"),
      borderTopLeftRadius: convertNumber2VP(6, "PX"),
      borderTopRightRadius: convertNumber2VP(6, "PX"),
      borderBottomLeftRadius: convertNumber2VP(6, "PX"),
      borderBottomRightRadius: convertNumber2VP(6, "PX"),
      backgroundColor: "#ffebf1"
    },
    "nut-range-tick-active": {
      backgroundColor: "#ff0f23"
    },
    "nut-range-vertical": {
      width: convertNumber2VP(4, "PX"),
      marginTop: convertNumber2VP(15, "PX"),
      marginRight: convertNumber2VP(0, "PX"),
      marginBottom: convertNumber2VP(15, "PX"),
      marginLeft: convertNumber2VP(0, "PX")
    },
    "nut-range-vertical-button-number": {
      left: convertNumber2VP(0, "PX"),
      top: "50%"
    },
    "nut-range-vertical-button-wrapper": {
      position: "absolute",
      top: "100%",
      left: "50%",
      right: "auto"
    },
    "nut-range-vertical-button-wrapper-left": {
      top: convertNumber2VP(0, "PX"),
      left: "50%",
      right: "auto"
    },
    "nut-range-vertical-button-wrapper-right": {
      position: "absolute",
      top: "100%",
      left: "50%",
      right: "auto"
    },
    "nut-range-vertical-container": {
      height: "100%",
      flexDirection: FlexDirection.Column,
      paddingTop: convertNumber2VP(0, "PX"),
      paddingRight: convertNumber2VP(15, "PX"),
      paddingBottom: convertNumber2VP(0, "PX"),
      paddingLeft: convertNumber2VP(15, "PX")
    },
    "nut-range-vertical-mark": {
      position: "absolute",
      width: convertNumber2VP(36, "PX"),
      height: "100%",
      top: "auto",
      right: "50%",
      overflow: "visible",
      fontSize: convertNumber2VP(12, "PX"),
      paddingTop: convertNumber2VP(0, "PX"),
      paddingRight: convertNumber2VP(0, "PX"),
      paddingBottom: convertNumber2VP(0, "PX"),
      paddingLeft: convertNumber2VP(0, "PX")
    },
    "nut-range-vertical-mark-hm": {
      left: convertNumber2VP(-34, "PX")
    },
    "nut-range-vertical-mark-text": {
      height: "100%",
      lineHeight: convertNumber2VP(16, "PX"),
      color: "#999",
      textAlign: TextAlign.Center,
      wordBreak: "keep-all"
    },
    "nut-range-vertical-mark-text-wrapper": {
      height: convertNumber2VP(16, "PX"),
      position: "absolute",
      userSelect: "none",
      transform: {
        Translate: {
          y: convertNumber2VP(-11, "PX")
        }
      }
    },
    "nut-range-vertical-tick": {
      position: "absolute",
      top: convertNumber2VP(2, "PX"),
      left: convertNumber2VP(31, "PX"),
      width: convertNumber2VP(10, "PX"),
      height: convertNumber2VP(10, "PX"),
      borderTopLeftRadius: convertNumber2VP(5, "PX"),
      borderTopRightRadius: convertNumber2VP(5, "PX"),
      borderBottomLeftRadius: convertNumber2VP(5, "PX"),
      borderBottomRightRadius: convertNumber2VP(5, "PX"),
      backgroundColor: "#ffebf1"
    },
    "nut-range-vertical-tick-active": {
      backgroundColor: "#ff0f23"
    },
    "rtl-nut-range-button-wrapper": {
      left: convertNumber2VP(0),
      right: "auto"
    },
    "rtl-nut-range-button-wrapper-left": {
      right: convertNumber2VP(0),
      left: "auto"
    },
    "rtl-nut-range-button-wrapper-right": {
      left: convertNumber2VP(0),
      right: "auto"
    },
    "rtl-nut-range-mark-text": {
      transform: {
        Translate: {
          x: convertNumber2VP(10, "PX")
        }
      }
    },
    "rtl-nut-range-tick": {
      right: convertNumber2VP(0, "PX"),
      left: "auto"
    },
    "rtl-nut-range-vertical-button-wrapper": {
      right: "50%",
      left: "auto"
    },
    "rtl-nut-range-vertical-button-wrapper-left": {
      right: "50%",
      left: "auto"
    },
    "rtl-nut-range-vertical-button-wrapper-right": {
      right: "50%",
      left: "auto"
    },
    "rtl-nut-range-vertical-mark": {
      left: "50%"
    },
    "rtl-nut-range-vertical-mark-text-wrapper": {
      transform: {
        Translate: {
          y: convertNumber2VP(-11, "PX")
        }
      }
    },
    "rtl-nut-range-vertical-tick": {
      right: convertNumber2VP(30, "PX"),
      marginLeft: convertNumber2VP(0),
      marginRight: convertNumber2VP(0, "PX")
    }
  };
  return __inner_style_data__$2;
}
var defaultProps = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  range: false,
  min: 0,
  max: 100,
  step: 1,
  vertical: false,
  marks: {}
});
var isRn = rn();
var isHm = harmony();
var isNative = harmonyAndRn();
var classPrefix = "nut-range";
var verticalClassPrefix = "".concat(classPrefix, "-vertical");
var isSameValue = function isSameValue2(newValue, oldValue) {
  return JSON.stringify(newValue) === JSON.stringify(oldValue);
};
var handleOverlap = function handleOverlap2(value) {
  if (value[0] > value[1]) {
    return value.slice(0).reverse();
  }
  return value;
};
var Range = function Range2(props) {
  var rtl = useRtl();
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
    className = _defaultProps$props.className,
    style = _defaultProps$props.style,
    range = _defaultProps$props.range,
    disabled = _defaultProps$props.disabled,
    button = _defaultProps$props.button,
    vertical = _defaultProps$props.vertical,
    marks = _defaultProps$props.marks,
    onChange = _defaultProps$props.onChange,
    onStart = _defaultProps$props.onStart,
    onEnd = _defaultProps$props.onEnd,
    minDescription = _defaultProps$props.minDescription,
    maxDescription = _defaultProps$props.maxDescription,
    currentDescription = _defaultProps$props.currentDescription,
    min = _defaultProps$props.min,
    max = _defaultProps$props.max,
    step = _defaultProps$props.step,
    value = _defaultProps$props.value,
    defaultValue = _defaultProps$props.defaultValue;
  var rtlClassPrefix = useMemo(function () {
    return "rtl-".concat(vertical ? verticalClassPrefix : classPrefix);
  }, [vertical]);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    buttonIndex = _useState2[0],
    setButtonIndex = _useState2[1];
  var _useState3 = useState("start"),
    _useState4 = _slicedToArray(_useState3, 2),
    dragStatus = _useState4[0],
    setDragStatus = _useState4[1];
  var touch = useTouch();
  var root = useRef(null);
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    marksList = _useState6[0],
    setMarksList = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    startValue = _useState8[0],
    setStartValue = _useState8[1];
  var scope = useMemo(function () {
    return max - min;
  }, [max, min]);
  var handleChange = function handleChange2(value2) {
    onChange && onChange(value2);
  };
  var _usePropsValue = usePropsValue({
      value: value,
      defaultValue: defaultValue,
      finalValue: 0,
      onChange: handleChange
    }),
    _usePropsValue2 = _slicedToArray(_usePropsValue, 2),
    current = _usePropsValue2[0],
    setCurrent = _usePropsValue2[1];
  var _useState9 = useState(function () {
      return value || defaultValue || 0;
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    exactValue = _useState10[0],
    setExactValue = _useState10[1];
  var marksRef = useRef({});
  useEffect(function () {
    if (marks) {
      if (Array.isArray(marks)) {
        var list = marks.sort(function (a, b) {
          return a.value - b.value;
        }).filter(function (point) {
          return point.value >= min && point.value <= max;
        });
        setMarksList(list.map(function (mark) {
          return mark.value;
        }));
        list.forEach(function (mark) {
          marksRef.current[mark.value] = mark.label !== void 0 ? mark.label : mark.value;
        });
      } else {
        var marksKeys = Object.keys(marks);
        var _list = marksKeys.map(parseFloat).sort(function (a, b) {
          return a - b;
        }).filter(function (point) {
          return point >= min && point <= max;
        });
        setMarksList(_list);
      }
    }
  }, [marks, max, min]);
  var markClassName = useCallback(function (mark) {
    var classPrefix2 = "nut-range-mark";
    var verticalClassPrefix2 = "nut-range-vertical-mark";
    var lowerBound = min;
    var upperBound = max;
    if (range && Array.isArray(current)) {
      lowerBound = current[0];
      upperBound = current[1];
    } else {
      upperBound = current;
    }
    var isActive = mark <= upperBound && mark >= lowerBound;
    var classNames2 = ["".concat(classPrefix2, "-text-wrapper"), "".concat(isActive ? "".concat(classPrefix2, "-text-wrapper-active") : "")];
    if (vertical) {
      classNames2.push("".concat(verticalClassPrefix2, "-text-wrapper"));
      isActive && classNames2.push("".concat(verticalClassPrefix2, "-text-wrapper-active"));
    }
    if (rtl) {
      classNames2.push("".concat(rtlClassPrefix, "-mark-text-wrapper"));
    }
    return classNames2.join(" ");
  }, [min, max, range, current, vertical, rtl, rtlClassPrefix]);
  var isRange = useCallback(function (val) {
    return !!range && Array.isArray(val);
  }, [range]);
  var calcMainAxis = useCallback(function () {
    var modelVal = current;
    if (isRange(modelVal)) {
      return "".concat((modelVal[1] - modelVal[0]) * 100 / scope, "%");
    }
    return "".concat((modelVal - min) * 100 / scope, "%");
  }, [current, isRange, min, scope]);
  var calcOffset = useCallback(function () {
    var modelVal = current;
    if (isRange(modelVal)) {
      return "".concat((modelVal[0] - min) * 100 / scope, "%");
    }
    return "0%";
  }, [current, isRange, min, scope]);
  var barStyle = useCallback(function () {
    if (vertical) {
      return {
        height: calcMainAxis(),
        top: calcOffset(),
        transition: dragStatus ? "none" : void 0
      };
    }
    var dir = rtl ? "right" : "left";
    return _defineProperty(_defineProperty({
      width: calcMainAxis()
    }, dir, calcOffset()), "transition", dragStatus ? "none" : void 0);
  }, [calcMainAxis, calcOffset, dragStatus, rtl, vertical]);
  var marksStyle = useCallback(function (mark) {
    var dir = rtl ? "right" : "left";
    var style2 = _defineProperty({}, dir, "".concat((mark - min) / scope * 100, "%"));
    if (vertical) {
      style2 = {
        top: "".concat((mark - min) / scope * 100, "%")
      };
    }
    return style2;
  }, [min, rtl, scope, vertical]);
  var tickClass = useCallback(function (mark) {
    if (range && Array.isArray(current)) {
      return mark <= current[1] && mark >= current[0];
    }
    return mark <= current;
  }, [current, range]);
  var format = useCallback(function (value2) {
    value2 = Math.max(+min, Math.min(value2, +max));
    return Math.round(value2 / +step) * +step;
  }, [max, min, step]);
  var updateValue = useCallback(function (value2, end) {
    if (isRange(value2)) {
      value2 = handleOverlap(value2).map(format);
    } else {
      value2 = format(value2);
    }
    if (!isSameValue(value2, current)) {
      setCurrent(value2);
    }
    end && onEnd && onEnd(value2);
  }, [current, format, isRange, onEnd, setCurrent]);
  var click = useCallback( /* @__PURE__ */function () {
    var _ref2 = _asyncToGenerator( /* @__PURE__ */_regeneratorRuntime().mark(function _callee(event) {
      var _event$detail;
      var rect, x, delta, total, _event$detail2, y, value2, _current, left, right, middle;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(disabled || !root.current)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            setDragStatus("");
            _context.next = 5;
            return getRectByTaro(root.current);
          case 5:
            rect = _context.sent;
            x = typeof ((_event$detail = event.detail) === null || _event$detail === void 0 ? void 0 : _event$detail.x) !== "undefined" ? event.detail.x : event.clientX;
            if (isHm) x = parseFloat(pxTransform(event.windowX));
            delta = x - rect.left;
            total = rect.width;
            if (vertical) {
              y = typeof ((_event$detail2 = event.detail) === null || _event$detail2 === void 0 ? void 0 : _event$detail2.y) !== "undefined" ? event.detail.y : event.clientY;
              if (isHm) y = parseFloat(pxTransform(event.windowY));
              delta = y - rect.top;
              total = rect.height;
            }
            value2 = min + delta / total * scope;
            setExactValue(current);
            if (isRange(current)) {
              _current = _slicedToArray(current, 2), left = _current[0], right = _current[1];
              middle = (left + right) / 2;
              if (value2 <= middle) {
                updateValue([value2, right], true);
              } else {
                updateValue([left, value2], true);
              }
            } else {
              updateValue(value2, true);
            }
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [current, disabled, isRange, min, scope, updateValue, vertical]);
  var _onTouchStart = useCallback(function (event) {
    if (disabled) {
      return;
    }
    touch.start(event);
    setExactValue(current);
    if (isRange(current)) {
      setStartValue(current.map(format));
    } else {
      setStartValue(format(current));
    }
    setDragStatus("start");
  }, [current, disabled, format, isRange, touch]);
  var _onTouchMove = useCallback( /* @__PURE__ */function () {
    var _ref3 = _asyncToGenerator( /* @__PURE__ */_regeneratorRuntime().mark(function _callee2(event) {
      var rect, delta, total, diff, newValue;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(disabled || !root.current)) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            if (dragStatus === "start") {
              onStart && onStart();
            }
            touch.move(isRn ? event.nativeEvent : event);
            setDragStatus("draging");
            _context2.next = 7;
            return getRectByTaro(root.current);
          case 7:
            rect = _context2.sent;
            if (rect) {
              _context2.next = 10;
              break;
            }
            return _context2.abrupt("return");
          case 10:
            delta = isHm ? parseFloat(pxTransform(touch.deltaX.current)) : touch.deltaX.current;
            total = rect.width;
            diff = delta / total * scope;
            diff = rtl ? -diff : diff;
            if (vertical) {
              delta = isHm ? parseFloat(pxTransform(touch.deltaY.current)) : touch.deltaY.current;
              total = rect.height;
              diff = delta / total * scope;
            }
            if (isRange(startValue)) {
              newValue = exactValue.slice();
              newValue[buttonIndex] = startValue[buttonIndex] + diff;
            } else {
              newValue = startValue + diff;
            }
            setExactValue(newValue);
            updateValue(newValue);
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }(), [buttonIndex, disabled, dragStatus, exactValue, isRange, onStart, rtl, scope, startValue, touch, updateValue, vertical]);
  var onTouchEnd = useCallback(function () {
    if (disabled) {
      return;
    }
    if (dragStatus === "draging") {
      updateValue(current, true);
    }
    setDragStatus("");
  }, [current, disabled, dragStatus, updateValue]);
  var curValue = useCallback(function (idx) {
    var modelVal = current;
    var value2 = typeof idx === "number" ? modelVal[idx] : modelVal;
    return value2;
  }, [current]);
  var buttonTransform = useMemo(function () {
    var borderRadis = {
      borderRadius: pxTransform(13)
    };
    var transform = {
      transform: "translate(-50%, -50%)"
    };
    if (isRn) {
      return _objectSpread2(_objectSpread2({}, borderRadis), {}, {
        transform: [{
          translateX: pxTransform(-12)
        }]
      });
    }
    if (isHm) {
      return _objectSpread2(_objectSpread2({}, borderRadis), transform);
    }
    return _objectSpread2({}, transform);
  }, []);
  var buttonNumberTransform = useMemo(function () {
    if (isRn) {
      return [{
        translateX: pxTransform(vertical ? 26 : -12)
      }, {
        translateY: pxTransform(vertical ? -12 : -26)
      }];
    }
    return vertical ? "translate(100%, -50%)" : "translate(-50%, -100%)";
  }, [vertical]);
  var renderButton = useCallback(function (index) {
    return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
      children: button || /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$2(), classNames("".concat(classPrefix, "-button"), _defineProperty(_defineProperty({}, "".concat(verticalClassPrefix, "-button"), vertical), "".concat(rtlClassPrefix, "-button"), rtl))),
        className: classNames("".concat(classPrefix, "-button"), _defineProperty(_defineProperty({}, "".concat(verticalClassPrefix, "-button"), vertical), "".concat(rtlClassPrefix, "-button"), rtl)),
        style: buttonTransform,
        children: currentDescription !== null && /* @__PURE__ */jsx(TaroTextTagName, {
          __hmStyle: calcStaticStyle(__inner_style__$2(), classNames("".concat(classPrefix, "-button-number"), _defineProperty(_defineProperty({}, "".concat(verticalClassPrefix, "-button-number"), vertical), "".concat(rtlClassPrefix, "-button-number"), rtl))),
          className: classNames("".concat(classPrefix, "-button-number"), _defineProperty(_defineProperty({}, "".concat(verticalClassPrefix, "-button-number"), vertical), "".concat(rtlClassPrefix, "-button-number"), rtl)),
          style: {
            // @ts-ignore
            transform: buttonNumberTransform
          },
          children: currentDescription ? currentDescription(curValue(index)) : curValue(index)
        })
      })
    }), __nesting_style__$e());
  }, [button, buttonNumberTransform, buttonTransform, curValue, currentDescription, rtl, rtlClassPrefix, vertical]);
  var renderMarks = useCallback(function () {
    if (marksList.length <= 0) return null;
    return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__$2(), classNames("".concat(classPrefix, "-mark"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(verticalClassPrefix, "-mark"), vertical), "".concat(rtlClassPrefix, "-mark"), rtl), "".concat(vertical ? verticalClassPrefix : classPrefix, "-mark-hm"), isHm))),
      className: classNames("".concat(classPrefix, "-mark"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(verticalClassPrefix, "-mark"), vertical), "".concat(rtlClassPrefix, "-mark"), rtl), "".concat(vertical ? verticalClassPrefix : classPrefix, "-mark-hm"), isHm)),
      children: marksList.map(function (mark) {
        return /* @__PURE__ */jsxs(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__$2(), markClassName(mark)),
          className: markClassName(mark),
          style: marksStyle(mark),
          children: [/* @__PURE__ */jsx(TaroTextTagName, {
            __hmStyle: calcStaticStyle(__inner_style__$2(), classNames("".concat(classPrefix, "-mark-text"), _defineProperty({}, "".concat(verticalClassPrefix, "-mark-text"), vertical))),
            className: classNames("".concat(classPrefix, "-mark-text"), _defineProperty({}, "".concat(verticalClassPrefix, "-mark-text"), vertical)),
            children: Array.isArray(marks) ? marksRef.current[mark] : marks[mark]
          }), /* @__PURE__ */jsx(TaroViewTagName, {
            __hmStyle: calcStaticStyle(__inner_style__$2(), classNames("".concat(vertical ? verticalClassPrefix : classPrefix, "-tick"), _defineProperty(_defineProperty({}, "".concat(vertical ? verticalClassPrefix : classPrefix, "-tick-active"), tickClass(mark)), "".concat(rtlClassPrefix, "-tick"), rtl))),
            className: classNames("".concat(vertical ? verticalClassPrefix : classPrefix, "-tick"), _defineProperty(_defineProperty({}, "".concat(vertical ? verticalClassPrefix : classPrefix, "-tick-active"), tickClass(mark)), "".concat(rtlClassPrefix, "-tick"), rtl))
          })]
        }, mark);
      })
    }), __nesting_style__$e());
  }, [markClassName, marks, marksList, marksStyle, rtl, rtlClassPrefix, tickClass, vertical]);
  var wrapperTransform = useMemo(function () {
    var wrapperTransformRN = [{
      translateX: pxTransform(vertical ? -12 : -13)
    }, {
      translateY: pxTransform(-12)
    }];
    var wrapperTransform2 = "translate(-50%, -50%)";
    return isRn ? wrapperTransformRN : wrapperTransform2;
  }, [vertical]);
  var rangeWrapperTransform = useMemo(function () {
    if (isRn) {
      return [{
        translateX: pxTransform(-12)
      }, {
        translateY: pxTransform(-13)
      }];
    }
    return "translate(-50%, -50%)";
  }, []);
  var renderButtonWrapper = useCallback(function () {
    if (range) return [0, 1].map(function (item, index) {
      var isLeft = index === 0;
      var suffix = isLeft ? "left" : "right";
      return /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$2(), classNames("".concat(classPrefix, "-button-wrapper-").concat(suffix), _defineProperty(_defineProperty({}, "".concat(verticalClassPrefix, "-button-wrapper-").concat(suffix), vertical), "".concat(rtlClassPrefix, "-button-wrapper-").concat(suffix), rtl))),
        className: classNames("".concat(classPrefix, "-button-wrapper-").concat(suffix), _defineProperty(_defineProperty({}, "".concat(verticalClassPrefix, "-button-wrapper-").concat(suffix), vertical), "".concat(rtlClassPrefix, "-button-wrapper-").concat(suffix), rtl)),
        style: {
          // @ts-ignore
          transform: rangeWrapperTransform
        },
        onTouchStart: function onTouchStart(e) {
          if (typeof index === "number") {
            setButtonIndex(index);
          }
          _onTouchStart(e);
        },
        onTouchMove: function onTouchMove(e) {
          return _onTouchMove(e);
        },
        onTouchEnd: onTouchEnd,
        onTouchCancel: onTouchEnd,
        onClick: function onClick(e) {
          return !isRn && e.stopPropagation();
        },
        children: renderButton(index)
      }, index);
    });
    return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__$2(), classNames("".concat(classPrefix, "-button-wrapper"), _defineProperty({}, "".concat(verticalClassPrefix, "-button-wrapper"), vertical))),
      catchMove: true,
      className: classNames("".concat(classPrefix, "-button-wrapper"), _defineProperty({}, "".concat(verticalClassPrefix, "-button-wrapper"), vertical)),
      style: {
        // @ts-ignore
        transform: wrapperTransform
      },
      onTouchStart: function onTouchStart(e) {
        return _onTouchStart(e);
      },
      onTouchMove: function onTouchMove(e) {
        return _onTouchMove(e);
      },
      onTouchEnd: onTouchEnd,
      onTouchCancel: onTouchEnd,
      onClick: function onClick(e) {
        return !isRn && e.stopPropagation();
      },
      children: renderButton()
    }), __nesting_style__$e());
  }, [onTouchEnd, _onTouchMove, _onTouchStart, range, rangeWrapperTransform, renderButton, rtl, rtlClassPrefix, vertical, wrapperTransform]);
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    __hmStyle: calcStaticStyle(__inner_style__$2(), classNames("".concat(classPrefix, "-container"), _defineProperty(_defineProperty({}, "".concat(classPrefix, "-container-native"), isNative), "".concat(verticalClassPrefix, "-container"), vertical), className)),
    className: classNames("".concat(classPrefix, "-container"), _defineProperty(_defineProperty({}, "".concat(classPrefix, "-container-native"), isNative), "".concat(verticalClassPrefix, "-container"), vertical), className),
    style: style,
    children: [minDescription !== null && /* @__PURE__ */jsx(TaroTextTagName, {
      __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classPrefix, "-min")),
      className: "".concat(classPrefix, "-min"),
      children: minDescription || min
    }), /* @__PURE__ */jsxs(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__$2(), classNames(classPrefix, _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-disabled"), disabled), verticalClassPrefix, vertical), "".concat(classPrefix, "-native"), isNative))),
      ref: root,
      className: classNames(classPrefix, _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-disabled"), disabled), verticalClassPrefix, vertical), "".concat(classPrefix, "-native"), isNative)),
      onClick: function onClick(e) {
        return click(e);
      },
      children: [renderMarks(), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classPrefix, "-bar")),
        className: "".concat(classPrefix, "-bar"),
        style: barStyle(),
        children: renderButtonWrapper()
      })]
    }), maxDescription !== null && /* @__PURE__ */jsx(TaroTextTagName, {
      __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classPrefix, "-max")),
      className: "".concat(classPrefix, "-max"),
      children: maxDescription || max
    })]
  }), __nesting_style__$e());
};
Range.displayName = "NutRange";

var __nesting_style_data__$d;
function __nesting_style__$d() {
  if (__nesting_style_data__$d) return __nesting_style_data__$d;
  __nesting_style_data__$d = [{
    "selectors": [["demo", "bg-w"]],
    "declaration": {
      backgroundColor: "#fff"
    }
  }, {
    "selectors": [["demo", "full"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX"),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": [["demo", "no-overflow"]],
    "declaration": {}
  }, {
    "selectors": [["demo", "web"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX")
    }
  }, {
    "selectors": ["demo", " ", "card"],
    "declaration": {
      paddingTop: convertNumber2VP(25, "PX"),
      paddingRight: convertNumber2VP(18, "PX"),
      paddingBottom: convertNumber2VP(25, "PX"),
      paddingLeft: convertNumber2VP(18, "PX"),
      backgroundColor: "#fff"
    }
  }, {
    "selectors": ["demo", " ", "h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " ", "h5-h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " > ", "p"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ["demo-full", " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }, {
    "selectors": [["demo", "full"], " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }];
  return __nesting_style_data__$d;
}
var Demo1 = function Demo12() {
  var cellStyle = useMemo(function () {
    return harmonyAndRn() ? {
      paddingTop: pxTransform(40),
      paddingBottom: pxTransform(40),
      paddingLeft: pxTransform(18),
      paddingRight: pxTransform(18)
    } : {
      padding: "40px 18px"
    };
  }, []);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    var setShow = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2);
    _useState4[0];
    var setMsg = _useState4[1];
  var showToast = function showToast2(msg2) {
    setMsg(msg2);
    setShow(true);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    children: [/* @__PURE__ */jsx(Cell, {
      style: cellStyle,
      children: /* @__PURE__ */jsx(Range, {
        defaultValue: 40,
        onEnd: function onEnd(val) {
          return showToast("".concat(val));
        }
      })
    }), /* @__PURE__ */jsx(Cell, {
      style: cellStyle,
      children: /* @__PURE__ */jsx(Range, {
        defaultValue: 40,
        marks: [{
          value: 0,
          label: "start"
        }, {
          value: 100,
          label: "end"
        }],
        onEnd: function onEnd(val) {
          return showToast("".concat(val));
        }
      })
    })]
  }), __nesting_style__$d());
};

var __nesting_style_data__$c;
function __nesting_style__$c() {
  if (__nesting_style_data__$c) return __nesting_style_data__$c;
  __nesting_style_data__$c = [{
    "selectors": [["demo", "bg-w"]],
    "declaration": {
      backgroundColor: "#fff"
    }
  }, {
    "selectors": [["demo", "full"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX"),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": [["demo", "no-overflow"]],
    "declaration": {}
  }, {
    "selectors": [["demo", "web"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX")
    }
  }, {
    "selectors": ["demo", " ", "card"],
    "declaration": {
      paddingTop: convertNumber2VP(25, "PX"),
      paddingRight: convertNumber2VP(18, "PX"),
      paddingBottom: convertNumber2VP(25, "PX"),
      paddingLeft: convertNumber2VP(18, "PX"),
      backgroundColor: "#fff"
    }
  }, {
    "selectors": ["demo", " ", "h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " ", "h5-h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " > ", "p"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ["demo-full", " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }, {
    "selectors": [["demo", "full"], " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }];
  return __nesting_style_data__$c;
}
var Demo2 = function Demo22() {
  var cellStyle = useMemo(function () {
    return harmonyAndRn() ? {
      paddingTop: pxTransform(40),
      paddingBottom: pxTransform(40),
      paddingLeft: pxTransform(18),
      paddingRight: pxTransform(18)
    } : {
      padding: "40px 18px"
    };
  }, []);
  var _useState = useState(40),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  return __combine_nesting_style__( /* @__PURE__ */jsx(Cell, {
    style: cellStyle,
    children: /* @__PURE__ */jsx(Range, {
      value: value,
      onChange: function onChange(val) {
        return setValue(val);
      }
    })
  }), __nesting_style__$c());
};

var __nesting_style_data__$b;
function __nesting_style__$b() {
  if (__nesting_style_data__$b) return __nesting_style_data__$b;
  __nesting_style_data__$b = [{
    "selectors": [["demo", "bg-w"]],
    "declaration": {
      backgroundColor: "#fff"
    }
  }, {
    "selectors": [["demo", "full"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX"),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": [["demo", "no-overflow"]],
    "declaration": {}
  }, {
    "selectors": [["demo", "web"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX")
    }
  }, {
    "selectors": ["demo", " ", "card"],
    "declaration": {
      paddingTop: convertNumber2VP(25, "PX"),
      paddingRight: convertNumber2VP(18, "PX"),
      paddingBottom: convertNumber2VP(25, "PX"),
      paddingLeft: convertNumber2VP(18, "PX"),
      backgroundColor: "#fff"
    }
  }, {
    "selectors": ["demo", " ", "h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " ", "h5-h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " > ", "p"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ["demo-full", " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }, {
    "selectors": [["demo", "full"], " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }];
  return __nesting_style_data__$b;
}
var Demo3 = function Demo32() {
  var cellStyle = useMemo(function () {
    return harmonyAndRn() ? {
      paddingTop: pxTransform(40),
      paddingBottom: pxTransform(40),
      paddingLeft: pxTransform(18),
      paddingRight: pxTransform(18)
    } : {
      padding: "40px 18px"
    };
  }, []);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    var setShow = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2);
    _useState4[0];
    var setMsg = _useState4[1];
  var showToast = function showToast2(msg2) {
    setMsg(msg2);
    setShow(true);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
    children: /* @__PURE__ */jsx(Cell, {
      style: cellStyle,
      children: /* @__PURE__ */jsx(Range, {
        defaultValue: 40,
        minDescription: "0%",
        maxDescription: "100%",
        currentDescription: function currentDescription(value) {
          return "".concat(value, "%");
        },
        onEnd: function onEnd(val) {
          return showToast("".concat(val));
        }
      })
    })
  }), __nesting_style__$b());
};

var __nesting_style_data__$a;
function __nesting_style__$a() {
  if (__nesting_style_data__$a) return __nesting_style_data__$a;
  __nesting_style_data__$a = [{
    "selectors": [["demo", "bg-w"]],
    "declaration": {
      backgroundColor: "#fff"
    }
  }, {
    "selectors": [["demo", "full"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX"),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": [["demo", "no-overflow"]],
    "declaration": {}
  }, {
    "selectors": [["demo", "web"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX")
    }
  }, {
    "selectors": ["demo", " ", "card"],
    "declaration": {
      paddingTop: convertNumber2VP(25, "PX"),
      paddingRight: convertNumber2VP(18, "PX"),
      paddingBottom: convertNumber2VP(25, "PX"),
      paddingLeft: convertNumber2VP(18, "PX"),
      backgroundColor: "#fff"
    }
  }, {
    "selectors": ["demo", " ", "h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " ", "h5-h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " > ", "p"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ["demo-full", " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }, {
    "selectors": [["demo", "full"], " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }];
  return __nesting_style_data__$a;
}
var Demo4 = function Demo42() {
  var cellStyle = useMemo(function () {
    return harmonyAndRn() ? {
      paddingTop: pxTransform(40),
      paddingBottom: pxTransform(40),
      paddingLeft: pxTransform(18),
      paddingRight: pxTransform(18)
    } : {
      padding: "40px 18px"
    };
  }, []);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    var setShow = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2);
    _useState4[0];
    var setMsg = _useState4[1];
  var showToast = function showToast2(msg2) {
    setMsg(msg2);
    setShow(true);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
    children: /* @__PURE__ */jsx(Cell, {
      style: cellStyle,
      children: /* @__PURE__ */jsx(Range, {
        defaultValue: [20, 80],
        range: true,
        onEnd: function onEnd(val) {
          return showToast("".concat(val));
        }
      })
    })
  }), __nesting_style__$a());
};

var __nesting_style_data__$9;
function __nesting_style__$9() {
  if (__nesting_style_data__$9) return __nesting_style_data__$9;
  __nesting_style_data__$9 = [{
    "selectors": [["demo", "bg-w"]],
    "declaration": {
      backgroundColor: "#fff"
    }
  }, {
    "selectors": [["demo", "full"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX"),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": [["demo", "no-overflow"]],
    "declaration": {}
  }, {
    "selectors": [["demo", "web"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX")
    }
  }, {
    "selectors": ["demo", " ", "card"],
    "declaration": {
      paddingTop: convertNumber2VP(25, "PX"),
      paddingRight: convertNumber2VP(18, "PX"),
      paddingBottom: convertNumber2VP(25, "PX"),
      paddingLeft: convertNumber2VP(18, "PX"),
      backgroundColor: "#fff"
    }
  }, {
    "selectors": ["demo", " ", "h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " ", "h5-h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " > ", "p"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ["demo-full", " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }, {
    "selectors": [["demo", "full"], " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }];
  return __nesting_style_data__$9;
}
var Demo5 = function Demo52() {
  var cellStyle = useMemo(function () {
    return harmonyAndRn() ? {
      paddingTop: pxTransform(40),
      paddingBottom: pxTransform(40),
      paddingLeft: pxTransform(18),
      paddingRight: pxTransform(18)
    } : {
      padding: "40px 18px"
    };
  }, []);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    var setShow = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2);
    _useState4[0];
    var setMsg = _useState4[1];
  var showToast = function showToast2(msg2) {
    setMsg(msg2);
    setShow(true);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
    children: /* @__PURE__ */jsx(Cell, {
      style: cellStyle,
      children: /* @__PURE__ */jsx(Range, {
        defaultValue: 0,
        max: 10,
        min: -10,
        onEnd: function onEnd(val) {
          return showToast("".concat(val));
        }
      })
    })
  }), __nesting_style__$9());
};

var __nesting_style_data__$8;
function __nesting_style__$8() {
  if (__nesting_style_data__$8) return __nesting_style_data__$8;
  __nesting_style_data__$8 = [{
    "selectors": [["demo", "bg-w"]],
    "declaration": {
      backgroundColor: "#fff"
    }
  }, {
    "selectors": [["demo", "full"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX"),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": [["demo", "no-overflow"]],
    "declaration": {}
  }, {
    "selectors": [["demo", "web"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX")
    }
  }, {
    "selectors": ["demo", " ", "card"],
    "declaration": {
      paddingTop: convertNumber2VP(25, "PX"),
      paddingRight: convertNumber2VP(18, "PX"),
      paddingBottom: convertNumber2VP(25, "PX"),
      paddingLeft: convertNumber2VP(18, "PX"),
      backgroundColor: "#fff"
    }
  }, {
    "selectors": ["demo", " ", "h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " ", "h5-h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " > ", "p"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ["demo-full", " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }, {
    "selectors": [["demo", "full"], " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }];
  return __nesting_style_data__$8;
}
var Demo6 = function Demo62() {
  var cellStyle = useMemo(function () {
    return harmonyAndRn() ? {
      paddingTop: pxTransform(40),
      paddingBottom: pxTransform(40),
      paddingLeft: pxTransform(18),
      paddingRight: pxTransform(18)
    } : {
      padding: "40px 18px"
    };
  }, []);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    var setShow = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2);
    _useState4[0];
    var setMsg = _useState4[1];
  var showToast = function showToast2(msg2) {
    setMsg(msg2);
    setShow(true);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
    children: /* @__PURE__ */jsx(Cell, {
      style: cellStyle,
      children: /* @__PURE__ */jsx(Range, {
        defaultValue: 30,
        step: 5,
        onEnd: function onEnd(val) {
          return showToast("".concat(val));
        }
      })
    })
  }), __nesting_style__$8());
};

var __nesting_style_data__$7;
function __nesting_style__$7() {
  if (__nesting_style_data__$7) return __nesting_style_data__$7;
  __nesting_style_data__$7 = [{
    "selectors": [["demo", "bg-w"]],
    "declaration": {
      backgroundColor: "#fff"
    }
  }, {
    "selectors": [["demo", "full"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX"),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": [["demo", "no-overflow"]],
    "declaration": {}
  }, {
    "selectors": [["demo", "web"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX")
    }
  }, {
    "selectors": ["demo", " ", "card"],
    "declaration": {
      paddingTop: convertNumber2VP(25, "PX"),
      paddingRight: convertNumber2VP(18, "PX"),
      paddingBottom: convertNumber2VP(25, "PX"),
      paddingLeft: convertNumber2VP(18, "PX"),
      backgroundColor: "#fff"
    }
  }, {
    "selectors": ["demo", " ", "h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " ", "h5-h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " > ", "p"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ["demo-full", " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }, {
    "selectors": [["demo", "full"], " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }];
  return __nesting_style_data__$7;
}
var Demo7 = function Demo72() {
  var cellStyle = useMemo(function () {
    return harmonyAndRn() ? {
      paddingTop: pxTransform(40),
      paddingBottom: pxTransform(40),
      paddingLeft: pxTransform(18),
      paddingRight: pxTransform(18)
    } : {
      padding: "40px 18px"
    };
  }, []);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    var setShow = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2);
    _useState4[0];
    var setMsg = _useState4[1];
  var showToast = function showToast2(msg2) {
    setMsg(msg2);
    setShow(true);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
    children: /* @__PURE__ */jsx(Cell, {
      style: cellStyle,
      children: /* @__PURE__ */jsx(Range, {
        defaultValue: 30,
        maxDescription: null,
        minDescription: null,
        onEnd: function onEnd(val) {
          return showToast("".concat(val));
        }
      })
    })
  }), __nesting_style__$7());
};

var __nesting_style_data__$6;
function __nesting_style__$6() {
  if (__nesting_style_data__$6) return __nesting_style_data__$6;
  __nesting_style_data__$6 = [{
    "selectors": [["demo", "bg-w"]],
    "declaration": {
      backgroundColor: "#fff"
    }
  }, {
    "selectors": [["demo", "full"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX"),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": [["demo", "no-overflow"]],
    "declaration": {}
  }, {
    "selectors": [["demo", "web"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX")
    }
  }, {
    "selectors": ["demo", " ", "card"],
    "declaration": {
      paddingTop: convertNumber2VP(25, "PX"),
      paddingRight: convertNumber2VP(18, "PX"),
      paddingBottom: convertNumber2VP(25, "PX"),
      paddingLeft: convertNumber2VP(18, "PX"),
      backgroundColor: "#fff"
    }
  }, {
    "selectors": ["demo", " ", "h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " ", "h5-h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " > ", "p"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ["demo-full", " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }, {
    "selectors": [["demo", "full"], " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }];
  return __nesting_style_data__$6;
}
var Demo8 = function Demo82() {
  var cellStyle = useMemo(function () {
    return harmonyAndRn() ? {
      paddingTop: pxTransform(40),
      paddingBottom: pxTransform(40),
      paddingLeft: pxTransform(18),
      paddingRight: pxTransform(18)
    } : {
      padding: "40px 18px"
    };
  }, []);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    var setShow = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2);
    _useState4[0];
    var setMsg = _useState4[1];
  var showToast = function showToast2(msg2) {
    setMsg(msg2);
    setShow(true);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
    children: /* @__PURE__ */jsx(Cell, {
      style: cellStyle,
      children: /* @__PURE__ */jsx(Range, {
        defaultValue: 20,
        currentDescription: null,
        onEnd: function onEnd(val) {
          return showToast("".concat(val));
        }
      })
    })
  }), __nesting_style__$6());
};

var __nesting_style_data__$5;
function __nesting_style__$5() {
  if (__nesting_style_data__$5) return __nesting_style_data__$5;
  __nesting_style_data__$5 = [{
    "selectors": [["demo", "bg-w"]],
    "declaration": {
      backgroundColor: "#fff"
    }
  }, {
    "selectors": [["demo", "full"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX"),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": [["demo", "no-overflow"]],
    "declaration": {}
  }, {
    "selectors": [["demo", "web"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX")
    }
  }, {
    "selectors": ["demo", " ", "card"],
    "declaration": {
      paddingTop: convertNumber2VP(25, "PX"),
      paddingRight: convertNumber2VP(18, "PX"),
      paddingBottom: convertNumber2VP(25, "PX"),
      paddingLeft: convertNumber2VP(18, "PX"),
      backgroundColor: "#fff"
    }
  }, {
    "selectors": ["demo", " ", "h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " ", "h5-h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " > ", "p"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ["demo-full", " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }, {
    "selectors": [["demo", "full"], " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }];
  return __nesting_style_data__$5;
}
var Demo9 = function Demo92() {
  var cellStyle = useMemo(function () {
    return harmonyAndRn() ? {
      paddingTop: pxTransform(40),
      paddingBottom: pxTransform(40),
      paddingLeft: pxTransform(18),
      paddingRight: pxTransform(18)
    } : {
      padding: "40px 18px"
    };
  }, []);
  return __combine_nesting_style__( /* @__PURE__ */jsx(Cell, {
    style: cellStyle,
    children: /* @__PURE__ */jsx(Range, {
      defaultValue: 50,
      disabled: true
    })
  }), __nesting_style__$5());
};

var __inner_style_data__$1;
var __nesting_style_data__$4;
function __nesting_style__$4() {
  if (__nesting_style_data__$4) return __nesting_style_data__$4;
  __nesting_style_data__$4 = [{
    "selectors": [["demo", "bg-w"]],
    "declaration": {
      backgroundColor: "#fff"
    }
  }, {
    "selectors": [["demo", "full"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX"),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": [["demo", "no-overflow"]],
    "declaration": {}
  }, {
    "selectors": [["demo", "web"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX")
    }
  }, {
    "selectors": ["demo", " ", "card"],
    "declaration": {
      paddingTop: convertNumber2VP(25, "PX"),
      paddingRight: convertNumber2VP(18, "PX"),
      paddingBottom: convertNumber2VP(25, "PX"),
      paddingLeft: convertNumber2VP(18, "PX"),
      backgroundColor: "#fff"
    }
  }, {
    "selectors": ["demo", " ", "h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " ", "h5-h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " > ", "p"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ["demo-full", " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }, {
    "selectors": [["demo", "full"], " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }];
  return __nesting_style_data__$4;
}
function __inner_style__$1() {
  if (__inner_style_data__$1) return __inner_style_data__$1;
  __inner_style_data__$1 = {
    "demo": {
      boxSizing: "border-box",
      height: "100%",
      backgroundColor: "#f7f8fa",
      overflowX: "hidden",
      overflowY: "auto",
      paddingTop: convertNumber2VP(0, "PX"),
      paddingRight: convertNumber2VP(17, "PX"),
      paddingBottom: convertNumber2VP(10, "PX"),
      paddingLeft: convertNumber2VP(17, "PX")
    },
    "demo-full": {
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    },
    "demo::-webkit-scrollbar": {
      width: convertNumber2VP(0)
    },
    "h5-body": {
      fontSize: convertNumber2VP(14)
    },
    "h5-span": {}
  };
  return __inner_style_data__$1;
}
var Demo10 = function Demo102() {
  var cellStyle = useMemo(function () {
    return harmonyAndRn() ? {
      paddingTop: pxTransform(40),
      paddingBottom: pxTransform(40),
      paddingLeft: pxTransform(18),
      paddingRight: pxTransform(18)
    } : {
      padding: "40px 18px"
    };
  }, []);
  return __combine_nesting_style__( /* @__PURE__ */jsx(Cell, {
    style: _objectSpread2(_objectSpread2({}, cellStyle), {}, {
      display: "block"
    }),
    children: /* @__PURE__ */jsx(ConfigProvider, {
      theme: {
        nutuiRangeButtonBorder: "1px solid rgba(52,96,250,1)",
        nutuiRangeActiveColor: "linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)",
        nutuiRangeInactiveColor: "rgba(163,184,255,1)",
        nutuiRangeMargin: "20px",
        nutuiRangeHeight: "6px"
      },
      children: /* @__PURE__ */jsx(Range, {
        className: "test-range",
        defaultValue: 40,
        style: {
          color: "red"
        },
        marks: {
          10: 10,
          20: 20
        },
        __styleSheet: {
          key: "test-range",
          value: calcStaticStyle(__inner_style__$1(), "test-range")
        },
        __hmStyle: calcStaticStyle(__inner_style__$1(), "test-range")
      })
    })
  }), __nesting_style__$4());
};

var __nesting_style_data__$3;
function __nesting_style__$3() {
  if (__nesting_style_data__$3) return __nesting_style_data__$3;
  __nesting_style_data__$3 = [{
    "selectors": [["demo", "bg-w"]],
    "declaration": {
      backgroundColor: "#fff"
    }
  }, {
    "selectors": [["demo", "full"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX"),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": [["demo", "no-overflow"]],
    "declaration": {}
  }, {
    "selectors": [["demo", "web"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX")
    }
  }, {
    "selectors": ["demo", " ", "card"],
    "declaration": {
      paddingTop: convertNumber2VP(25, "PX"),
      paddingRight: convertNumber2VP(18, "PX"),
      paddingBottom: convertNumber2VP(25, "PX"),
      paddingLeft: convertNumber2VP(18, "PX"),
      backgroundColor: "#fff"
    }
  }, {
    "selectors": ["demo", " ", "h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " ", "h5-h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " > ", "p"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ["demo-full", " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }, {
    "selectors": [["demo", "full"], " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }];
  return __nesting_style_data__$3;
}
var Demo11 = function Demo112() {
  var cellStyle = useMemo(function () {
    return harmonyAndRn() ? {
      paddingTop: pxTransform(40),
      paddingBottom: pxTransform(40),
      paddingLeft: pxTransform(18),
      paddingRight: pxTransform(18)
    } : {
      padding: "40px 18px"
    };
  }, []);
  var buttonNativeStyle = useMemo(function () {
    if (rn()) {
      return {
        transform: [{
          translateX: pxTransform(-13)
        }, {
          translateY: pxTransform(3)
        }]
      };
    }
    return {};
  }, []);
  var _useState = useState(60),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2);
    _useState4[0];
    var setShow = _useState4[1];
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2);
    _useState6[0];
    var setMsg = _useState6[1];
  var showToast = function showToast2(msg2) {
    setMsg(msg2);
    setShow(true);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
    children: /* @__PURE__ */jsx(Cell, {
      style: cellStyle,
      children: /* @__PURE__ */jsx(Range, {
        value: value,
        button: /* @__PURE__ */jsx(TaroViewTagName, {
          style: _objectSpread2({
            position: "absolute",
            display: "flex",
            width: pxTransform(26),
            backgroundColor: "red",
            borderRadius: pxTransform(10),
            justifyContent: "center",
            top: "50%",
            left: "50%",
            // @ts-ignore
            transform: "translate(-50%, -50%)"
          }, buttonNativeStyle),
          children: /* @__PURE__ */jsx(TaroTextTagName, {
            style: harmony() ? {
              height: pxTransform(18),
              color: "white",
              fontSize: pxTransform(10),
              lineHeight: pxTransform(10),
              textAlign: "center",
              paddingTop: pxTransform(4),
              paddingBottom: pxTransform(4)
            } : {
              color: "white",
              fontSize: pxTransform(10),
              lineHeight: rn() ? pxTransform(18) : "18px",
              textAlign: "center"
            },
            children: value
          })
        }),
        onChange: function onChange(val) {
          return setValue(val);
        },
        onEnd: function onEnd(val) {
          return showToast("".concat(val));
        }
      })
    })
  }), __nesting_style__$3());
};

var __nesting_style_data__$2;
function __nesting_style__$2() {
  if (__nesting_style_data__$2) return __nesting_style_data__$2;
  __nesting_style_data__$2 = [{
    "selectors": [["demo", "bg-w"]],
    "declaration": {
      backgroundColor: "#fff"
    }
  }, {
    "selectors": [["demo", "full"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX"),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": [["demo", "no-overflow"]],
    "declaration": {}
  }, {
    "selectors": [["demo", "web"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX")
    }
  }, {
    "selectors": ["demo", " ", "card"],
    "declaration": {
      paddingTop: convertNumber2VP(25, "PX"),
      paddingRight: convertNumber2VP(18, "PX"),
      paddingBottom: convertNumber2VP(25, "PX"),
      paddingLeft: convertNumber2VP(18, "PX"),
      backgroundColor: "#fff"
    }
  }, {
    "selectors": ["demo", " ", "h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " ", "h5-h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " > ", "p"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ["demo-full", " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }, {
    "selectors": [["demo", "full"], " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }];
  return __nesting_style_data__$2;
}
var Demo12 = function Demo122() {
  var verticalStyle = useMemo(function () {
    return harmonyAndRn() ? {
      height: pxTransform(180),
      paddingTop: pxTransform(10),
      paddingBottom: pxTransform(10),
      paddingLeft: pxTransform(10),
      paddingRight: pxTransform(10)
    } : {
      height: "180px",
      padding: "10px"
    };
  }, []);
  var viewStyle = useMemo(function () {
    return {
      width: pxTransform(150),
      height: "100%"
    };
  }, []);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    var setShow = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2);
    _useState4[0];
    var setMsg = _useState4[1];
  var showToast = function showToast2(msg2) {
    setMsg(msg2);
    setShow(true);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
    children: /* @__PURE__ */jsxs(Cell, {
      style: verticalStyle,
      children: [/* @__PURE__ */jsx(TaroViewTagName, {
        style: viewStyle,
        children: /* @__PURE__ */jsx(Range, {
          defaultValue: 20,
          vertical: true,
          onEnd: function onEnd(val) {
            return showToast("".concat(val));
          }
        })
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        style: viewStyle,
        children: /* @__PURE__ */jsx(Range, {
          defaultValue: [20, 80],
          vertical: true,
          range: true,
          onEnd: function onEnd(val) {
            return showToast("".concat(val));
          }
        })
      })]
    })
  }), __nesting_style__$2());
};

var __nesting_style_data__$1;
function __nesting_style__$1() {
  if (__nesting_style_data__$1) return __nesting_style_data__$1;
  __nesting_style_data__$1 = [{
    "selectors": [["demo", "bg-w"]],
    "declaration": {
      backgroundColor: "#fff"
    }
  }, {
    "selectors": [["demo", "full"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX"),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": [["demo", "no-overflow"]],
    "declaration": {}
  }, {
    "selectors": [["demo", "web"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX")
    }
  }, {
    "selectors": ["demo", " ", "card"],
    "declaration": {
      paddingTop: convertNumber2VP(25, "PX"),
      paddingRight: convertNumber2VP(18, "PX"),
      paddingBottom: convertNumber2VP(25, "PX"),
      paddingLeft: convertNumber2VP(18, "PX"),
      backgroundColor: "#fff"
    }
  }, {
    "selectors": ["demo", " ", "h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " ", "h5-h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " > ", "p"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ["demo-full", " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }, {
    "selectors": [["demo", "full"], " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }];
  return __nesting_style_data__$1;
}
var Demo13 = function Demo132() {
  var cellStyle = useMemo(function () {
    return harmonyAndRn() ? {
      paddingTop: pxTransform(40),
      paddingBottom: pxTransform(40),
      paddingLeft: pxTransform(18),
      paddingRight: pxTransform(18)
    } : {
      padding: "40px 18px"
    };
  }, []);
  var verticalStyle = useMemo(function () {
    return harmonyAndRn() ? {
      height: pxTransform(180),
      paddingTop: pxTransform(10),
      paddingBottom: pxTransform(10),
      paddingLeft: pxTransform(10),
      paddingRight: pxTransform(10)
    } : {
      height: "180px",
      padding: "10px"
    };
  }, []);
  var _useState = useState({
      0: "Start",
      20: 20,
      40: 40,
      60: 60,
      80: 80,
      100: "End"
    }),
    _useState2 = _slicedToArray(_useState, 1),
    marks = _useState2[0];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2);
    _useState4[0];
    var setShow = _useState4[1];
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2);
    _useState6[0];
    var setMsg = _useState6[1];
  var showToast = function showToast2(msg2) {
    setMsg(msg2);
    setShow(true);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    children: [/* @__PURE__ */jsx(Cell, {
      style: cellStyle,
      children: /* @__PURE__ */jsx(Range, {
        defaultValue: 60,
        maxDescription: null,
        minDescription: null,
        marks: marks,
        onEnd: function onEnd(val) {
          return showToast("".concat(val));
        }
      })
    }), /* @__PURE__ */jsx(Cell, {
      style: cellStyle,
      children: /* @__PURE__ */jsx(Range, {
        defaultValue: [20, 80],
        marks: marks,
        range: true,
        onEnd: function onEnd(val) {
          return showToast("".concat(val));
        }
      })
    }), /* @__PURE__ */jsxs(Cell, {
      style: verticalStyle,
      children: [/* @__PURE__ */jsx(Range, {
        defaultValue: 60,
        vertical: true,
        maxDescription: null,
        minDescription: null,
        marks: marks,
        onEnd: function onEnd(val) {
          return showToast("".concat(val));
        },
        style: {
          flex: 1
        }
      }), /* @__PURE__ */jsx(Range, {
        defaultValue: [20, 80],
        vertical: true,
        marks: marks,
        range: true,
        onEnd: function onEnd(val) {
          return showToast("".concat(val));
        },
        style: {
          flex: 1
        }
      })]
    })]
  }), __nesting_style__$1());
};

var __inner_style_data__;
var __nesting_style_data__;
function __nesting_style__() {
  if (__nesting_style_data__) return __nesting_style_data__;
  __nesting_style_data__ = [{
    "selectors": [["demo", "bg-w"]],
    "declaration": {
      backgroundColor: "#fff"
    }
  }, {
    "selectors": [["demo", "full"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX"),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": [["demo", "no-overflow"]],
    "declaration": {}
  }, {
    "selectors": [["demo", "web"]],
    "declaration": {
      paddingTop: convertNumber2VP(57, "PX")
    }
  }, {
    "selectors": ["demo", " ", "card"],
    "declaration": {
      paddingTop: convertNumber2VP(25, "PX"),
      paddingRight: convertNumber2VP(18, "PX"),
      paddingBottom: convertNumber2VP(25, "PX"),
      paddingLeft: convertNumber2VP(18, "PX"),
      backgroundColor: "#fff"
    }
  }, {
    "selectors": ["demo", " ", "h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " ", "h5-h2"],
    "declaration": {
      marginTop: convertNumber2VP(30, "PX"),
      marginBottom: convertNumber2VP(10, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(10, "PX"),
      fontWeight: FontWeight.Normal
    }
  }, {
    "selectors": ["demo", " > ", "p"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ["demo-full", " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }, {
    "selectors": [["demo", "full"], " ", "h2"],
    "declaration": {
      paddingLeft: convertNumber2VP(17, "PX")
    }
  }];
  return __nesting_style_data__;
}
function __inner_style__() {
  if (__inner_style_data__) return __inner_style_data__;
  __inner_style_data__ = {
    "demo": {
      boxSizing: "border-box",
      height: "100%",
      backgroundColor: "#f7f8fa",
      overflowX: "hidden",
      overflowY: "auto",
      paddingTop: convertNumber2VP(0, "PX"),
      paddingRight: convertNumber2VP(17, "PX"),
      paddingBottom: convertNumber2VP(10, "PX"),
      paddingLeft: convertNumber2VP(17, "PX")
    },
    "demo-full": {
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    },
    "demo::-webkit-scrollbar": {
      width: convertNumber2VP(0)
    },
    "h5-body": {
      fontSize: convertNumber2VP(14)
    },
    "h5-span": {}
  };
  return __inner_style_data__;
}
var RangeDemo = function RangeDemo2() {
  var _useTranslate = useTranslate({
      "zh-CN": {
        title: "基础用法",
        title1: "双滑块",
        title2: "指定范围",
        title3: "设置步长",
        title4: "隐藏范围",
        title5: "隐藏标签",
        title6: "禁用",
        title7: "自定义样式",
        title8: "自定义按钮",
        title9: "垂直方向",
        title10: "刻度标记",
        title11: "自定义描述",
        controlled: "受控方式"
      },
      "en-US": {
        title: "Basic Usage",
        title1: "Dual thumb",
        title2: "Range",
        title3: "Step Size",
        title4: "Hidden Range",
        title5: "Hidden Tag",
        title6: "Disabled",
        title7: "Custom Style",
        title8: "Custom Button",
        title9: "Vertical",
        title10: "Marks",
        title11: "Range Desc",
        controlled: "Controlled"
      }
    }),
    _useTranslate2 = _slicedToArray(_useTranslate, 1),
    translated = _useTranslate2[0];
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Header, {}), /* @__PURE__ */jsxs(TaroScrollViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), "demo ".concat(Taro.getEnv() === "WEB" ? "web" : "")),
      className: "demo ".concat(Taro.getEnv() === "WEB" ? "web" : ""),
      children: [/* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title
      }), /* @__PURE__ */jsx(Demo1, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.controlled
      }), /* @__PURE__ */jsx(Demo2, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title11
      }), /* @__PURE__ */jsx(Demo3, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title1
      }), /* @__PURE__ */jsx(Demo4, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title2
      }), /* @__PURE__ */jsx(Demo5, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title3
      }), /* @__PURE__ */jsx(Demo6, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title4
      }), /* @__PURE__ */jsx(Demo7, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title5
      }), /* @__PURE__ */jsx(Demo8, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title6
      }), /* @__PURE__ */jsx(Demo9, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title7
      }), /* @__PURE__ */jsx(Demo10, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title8
      }), /* @__PURE__ */jsx(Demo11, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title9
      }), /* @__PURE__ */jsx(Demo12, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title10
      }), /* @__PURE__ */jsx(Demo13, {})]
    })]
  }), __nesting_style__());
};

var config = {
  "navigationBarTitleText": "Range"
};
const index = (function () {
  return createNativePageConfig(RangeDemo, 'dataentry/pages/range/index', React, ReactDOM, config);
});

export { config, index as default };
