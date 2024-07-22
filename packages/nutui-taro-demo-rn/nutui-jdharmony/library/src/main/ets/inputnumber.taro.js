import { S, _ as _objectSpread2, k, e as ComponentDefaults, d as _objectWithoutProperties, a as harmonyAndRn, r as rn, h as harmony, f as classNames, b as _slicedToArray, g as _defineProperty } from './index.taro.js';
import React__default, { useState, useRef, useEffect } from '@jd-oh/taro_library/src/main/ets/npm/react';
import { TaroViewTagName, TaroTextTagName, TaroInputTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { a as a$1 } from './Plus.js';
import { u as usePropsValue } from './use-props-value.js';
import { jsxs, jsx } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';

var a = function a(M) {
  return /* @__PURE__ */React__default.createElement(S, _objectSpread2(_objectSpread2({}, M), {}, {
    name: M.name || "Minus",
    svg64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik0yOTkuNTIgNDYwLjhoNDA5LjZjMjguMTYgMCA1MS4yIDIzLjA0IDUxLjIgNTEuMnMtMjMuMDQgNTEuMi01MS4yIDUxLjJoLTQwOS42Yy0yOC4xNiAwLTUxLjItMjMuMDQtNTEuMi01MS4yczIzLjA0LTUxLjIgNTEuMi01MS4yIi8+PC9zdmc+"
  }));
};
a.defaultProps = k;

var _excluded = ["children", "disabled", "min", "max", "type", "readOnly", "value", "defaultValue", "allowEmpty", "digits", "step", "async", "className", "style", "formatter", "onPlus", "onMinus", "onOverlimit", "onBlur", "onFocus", "onChange"];
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
    "h5-span": {},
    "nut-inputnumber": {
      display: "flex",
      flexDirection: FlexDirection.Row,
      alignItems: ItemAlign.Center
    },
    "nut-inputnumber-add": {
      display: "flex",
      justifyContent: FlexAlign.Center,
      alignItems: ItemAlign.Center,
      width: convertNumber2VP(14, "PX"),
      height: convertNumber2VP(24, "PX"),
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderTopLeftRadius: convertNumber2VP(16, "PX"),
      borderTopRightRadius: convertNumber2VP(16, "PX"),
      borderBottomLeftRadius: convertNumber2VP(16, "PX"),
      borderBottomRightRadius: convertNumber2VP(16, "PX")
    },
    "nut-inputnumber-icon": {
      color: "#505259",
      fontSize: convertNumber2VP(14, "PX"),
      cursor: "pointer"
    },
    "nut-inputnumber-icon-disabled": {
      color: "#c2c4cc",
      cursor: "not-allowed"
    },
    "nut-inputnumber-input": {
      display: "flex",
      justifyContent: FlexAlign.Center,
      alignItems: ItemAlign.Center,
      width: convertNumber2VP(60, "PX"),
      height: convertNumber2VP(24, "PX"),
      textAlign: TextAlign.Center,
      outline: "none",
      borderTopWidth: convertNumber2VP(0),
      borderRightWidth: convertNumber2VP(0),
      borderBottomWidth: convertNumber2VP(0),
      borderLeftWidth: convertNumber2VP(0),
      borderTopColor: "",
      borderRightColor: "",
      borderBottomColor: "",
      borderLeftColor: "",
      borderTopLeftRadius: convertNumber2VP(6, "PX"),
      borderTopRightRadius: convertNumber2VP(6, "PX"),
      borderBottomLeftRadius: convertNumber2VP(6, "PX"),
      borderBottomRightRadius: convertNumber2VP(6, "PX"),
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(0),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(0),
      color: "#1a1a1a",
      backgroundColor: "#f5f6fa"
    },
    "nut-inputnumber-input-disabled": {
      color: "#c2c4cc"
    },
    "nut-inputnumber-input::-webkit-inner-spin-button": {
      appearance: "none"
    },
    "nut-inputnumber-input::-webkit-outer-spin-button": {
      appearance: "none"
    },
    "nut-inputnumber-minus": {
      display: "flex",
      justifyContent: FlexAlign.Center,
      alignItems: ItemAlign.Center,
      width: convertNumber2VP(14, "PX"),
      height: convertNumber2VP(24, "PX"),
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderTopLeftRadius: convertNumber2VP(16, "PX"),
      borderTopRightRadius: convertNumber2VP(16, "PX"),
      borderBottomLeftRadius: convertNumber2VP(16, "PX"),
      borderBottomRightRadius: convertNumber2VP(16, "PX")
    }
  };
  return __inner_style_data__;
}
var defaultProps = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  disabled: false,
  readOnly: false,
  allowEmpty: false,
  min: 1,
  max: 9999,
  type: "digit",
  step: 1,
  digits: 0,
  async: false
});
var classPrefix = "nut-inputnumber";
var InputNumber = function InputNumber2(props) {
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props);
    _defaultProps$props.children;
    var disabled = _defaultProps$props.disabled,
    min = _defaultProps$props.min,
    max = _defaultProps$props.max,
    type = _defaultProps$props.type,
    readOnly = _defaultProps$props.readOnly,
    value = _defaultProps$props.value,
    defaultValue = _defaultProps$props.defaultValue,
    allowEmpty = _defaultProps$props.allowEmpty,
    digits = _defaultProps$props.digits,
    step = _defaultProps$props.step,
    async = _defaultProps$props.async,
    className = _defaultProps$props.className,
    style = _defaultProps$props.style,
    formatter = _defaultProps$props.formatter,
    onPlus = _defaultProps$props.onPlus,
    onMinus = _defaultProps$props.onMinus,
    onOverlimit = _defaultProps$props.onOverlimit,
    onBlur = _defaultProps$props.onBlur,
    onFocus = _defaultProps$props.onFocus,
    onChange = _defaultProps$props.onChange;
    _objectWithoutProperties(_defaultProps$props, _excluded);
  var isRnAndHarmony = harmonyAndRn();
  var isRn = rn();
  var isHarmony = harmony();
  var classes = classNames(classPrefix, className);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];
  var inputRef = useRef(null);
  useEffect(function () {
    if (focused) {
      var _inputRef$current, _inputRef$current$sel;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || (_inputRef$current$sel = _inputRef$current.select) === null || _inputRef$current$sel === void 0 || _inputRef$current$sel.call(_inputRef$current);
    }
  }, [focused]);
  var _usePropsValue = usePropsValue({
      value: typeof value === "string" ? parseFloat(value) : value,
      defaultValue: typeof defaultValue === "string" ? parseFloat(defaultValue) : defaultValue,
      finalValue: 0,
      onChange: function onChange2(value2) {}
    }),
    _usePropsValue2 = _slicedToArray(_usePropsValue, 2),
    shadowValue = _usePropsValue2[0],
    setShadowValue = _usePropsValue2[1];
  var bound = function bound2(value2, min2, max2) {
    var res = value2;
    if (min2 !== void 0) {
      res = Math.max(Number(min2), res);
    }
    if (max2 !== void 0) {
      res = Math.min(Number(max2), res);
    }
    return res;
  };
  var format = function format2(value2) {
    if (value2 === null) return "";
    if (typeof value2 === "string") value2 = parseFloat(value2);
    var fixedValue = bound(value2, Number(min), Number(max));
    if (formatter) {
      return formatter(fixedValue);
    }
    if (digits) {
      return fixedValue.toFixed(digits).toString();
    }
    return fixedValue.toString();
  };
  var _useState3 = useState(format(shadowValue)),
    _useState4 = _slicedToArray(_useState3, 2),
    inputValue = _useState4[0],
    setInputValue = _useState4[1];
  useEffect(function () {
    if (!focused && !async) {
      setShadowValue(bound(Number(shadowValue), Number(min), Number(max)));
      setInputValue(format(shadowValue));
    }
  }, [focused, shadowValue]);
  useEffect(function () {
    if (async) {
      setShadowValue(bound(Number(value), Number(min), Number(max)));
      setInputValue(format(value));
    }
  }, [value]);
  var calcNextValue = function calcNextValue2(current, step2, symbol) {
    var dig = digits + 1;
    return (parseFloat(current || "0") * dig + parseFloat(step2) * dig * symbol) / dig;
  };
  var update = function update2(negative, e) {
    if (step !== void 0) {
      var shouldOverBoundary = calcNextValue(shadowValue, step, negative ? -1 : 1);
      var nextValue = bound(shouldOverBoundary, Number(min), Number(max));
      setShadowValue(nextValue);
      if (negative ? shouldOverBoundary < Number(min) : shouldOverBoundary > Number(max)) {
        onOverlimit === null || onOverlimit === void 0 || onOverlimit(e);
      } else {
        onChange === null || onChange === void 0 || onChange(nextValue, e);
      }
    }
  };
  var handleReduce = function handleReduce2(e) {
    if (disabled) return;
    onMinus === null || onMinus === void 0 || onMinus(e);
    update(true, e);
  };
  var handlePlus = function handlePlus2(e) {
    if (disabled) return;
    onPlus === null || onPlus === void 0 || onPlus(e);
    update(false, e);
  };
  var parseValue = function parseValue2(text) {
    if (text === "") return null;
    if (text === "-") return null;
    return text;
  };
  var handleInputChange = function handleInputChange2(e) {
    if (!focused && isHarmony) return;
    setInputValue(e.target.value);
    var valueStr = parseValue(e.target.value);
    if (valueStr === null) {
      if (allowEmpty) {
        setShadowValue(null);
      } else {
        setShadowValue(defaultValue);
      }
    } else {
      setShadowValue(valueStr);
    }
    if (!async) {
      onChange === null || onChange === void 0 || onChange(parseFloat(valueStr || "0").toFixed(digits), e);
    }
  };
  var handleFocus = function handleFocus2(e) {
    setFocused(true);
    setInputValue(shadowValue !== void 0 && shadowValue !== null ? bound(Number(shadowValue), Number(min), Number(max)).toString() : "");
    onFocus && onFocus(e);
  };
  var handleBlur = function handleBlur2(e) {
    setFocused(false);
    onBlur && onBlur(e);
    if (async) {
      var valueStr = parseValue(e.target.value);
      onChange === null || onChange === void 0 || onChange(parseFloat(valueStr || "0").toFixed(digits), e);
    }
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    __hmStyle: calcStaticStyle(__inner_style__(), classes),
    className: classes,
    style: style,
    children: [/* @__PURE__ */jsx(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), "".concat(classPrefix, "-minus")),
      className: "".concat(classPrefix, "-minus"),
      onClick: handleReduce,
      children: isRnAndHarmony ? /* @__PURE__ */jsx(TaroTextTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), classNames("".concat(classPrefix, "-icon ").concat(classPrefix, "-icon-minus"), _defineProperty({}, "".concat(classPrefix, "-icon-disabled"), shadowValue === min || disabled))),
        className: classNames("".concat(classPrefix, "-icon ").concat(classPrefix, "-icon-minus"), _defineProperty({}, "".concat(classPrefix, "-icon-disabled"), shadowValue === min || disabled)),
        children: "-"
      }) : /* @__PURE__ */jsx(a, {
        className: classNames("".concat(classPrefix, "-icon ").concat(classPrefix, "-icon-minus"), _defineProperty({}, "".concat(classPrefix, "-icon-disabled"), shadowValue === min || disabled)),
        __styleSheet: {
          key: classNames("".concat(classPrefix, "-icon ").concat(classPrefix, "-icon-minus"), _defineProperty({}, "".concat(classPrefix, "-icon-disabled"), shadowValue === min || disabled)),
          value: calcStaticStyle(__inner_style__(), classNames("".concat(classPrefix, "-icon ").concat(classPrefix, "-icon-minus"), _defineProperty({}, "".concat(classPrefix, "-icon-disabled"), shadowValue === min || disabled)))
        },
        __hmStyle: calcStaticStyle(__inner_style__(), classNames("".concat(classPrefix, "-icon ").concat(classPrefix, "-icon-minus"), _defineProperty({}, "".concat(classPrefix, "-icon-disabled"), shadowValue === min || disabled)))
      })
    }), isRn ? /* @__PURE__ */jsx(TaroInputTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), classNames("".concat(classPrefix, "-input"), _defineProperty({}, "".concat(classPrefix, "-input-disabled"), disabled))),
      className: classNames("".concat(classPrefix, "-input"), _defineProperty({}, "".concat(classPrefix, "-input-disabled"), disabled)),
      type: type,
      ref: inputRef,
      disabled: disabled || readOnly,
      value: inputValue,
      onInput: handleInputChange,
      onBlur: handleBlur,
      onFocus: handleFocus
    }) : /* @__PURE__ */jsx("input", {
      __hmStyle: calcStaticStyle(__inner_style__(), classNames("".concat(classPrefix, "-input"), _defineProperty({}, "".concat(classPrefix, "-input-disabled"), disabled))),
      className: classNames("".concat(classPrefix, "-input"), _defineProperty({}, "".concat(classPrefix, "-input-disabled"), disabled)),
      type: type,
      ref: inputRef,
      inputMode: type === "digit" ? "decimal" : "numeric",
      disabled: disabled,
      readOnly: readOnly,
      value: inputValue,
      onInput: handleInputChange,
      onBlur: handleBlur,
      onFocus: handleFocus
    }), /* @__PURE__ */jsx(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), "".concat(classPrefix, "-add")),
      className: "".concat(classPrefix, "-add"),
      onClick: handlePlus,
      children: isRnAndHarmony ? /* @__PURE__ */jsx(TaroTextTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), classNames("".concat(classPrefix, "-icon ").concat(classPrefix, "-icon-plus"), _defineProperty({}, "".concat(classPrefix, "-icon-disabled"), shadowValue === max || disabled))),
        className: classNames("".concat(classPrefix, "-icon ").concat(classPrefix, "-icon-plus"), _defineProperty({}, "".concat(classPrefix, "-icon-disabled"), shadowValue === max || disabled)),
        children: "+"
      }) : /* @__PURE__ */jsx(a$1, {
        className: classNames("".concat(classPrefix, "-icon ").concat(classPrefix, "-icon-plus"), _defineProperty({}, "".concat(classPrefix, "-icon-disabled"), shadowValue === max || disabled)),
        __styleSheet: {
          key: classNames("".concat(classPrefix, "-icon ").concat(classPrefix, "-icon-plus"), _defineProperty({}, "".concat(classPrefix, "-icon-disabled"), shadowValue === max || disabled)),
          value: calcStaticStyle(__inner_style__(), classNames("".concat(classPrefix, "-icon ").concat(classPrefix, "-icon-plus"), _defineProperty({}, "".concat(classPrefix, "-icon-disabled"), shadowValue === max || disabled)))
        },
        __hmStyle: calcStaticStyle(__inner_style__(), classNames("".concat(classPrefix, "-icon ").concat(classPrefix, "-icon-plus"), _defineProperty({}, "".concat(classPrefix, "-icon-disabled"), shadowValue === max || disabled)))
      })
    })]
  }), __nesting_style__());
};
InputNumber.displayName = "NutInputNumber";

export { InputNumber as I };
