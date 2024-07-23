import { _ as _objectSpread2, e as ComponentDefaults, l as useConfig, d as _objectWithoutProperties, j as useRtl, b as _slicedToArray, f as classNames, g as _defineProperty } from './index.taro.js';
import { useRef } from '@jd-oh/taro_library/src/main/ets/npm/react';
import Taro from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroViewTagName, TaroTextareaTagName, TaroTextTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { u as usePropsValue } from './use-props-value.js';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { jsxs, jsx } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';

var _excluded = ["className", "value", "defaultValue", "showCount", "maxLength", "rows", "placeholder", "readOnly", "disabled", "autoSize", "style", "onChange", "onBlur", "onFocus"];
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
    "selectors": [["nut-textarea", "nut-textarea-rtl-limit"]],
    "declaration": {
      left: convertNumber2VP(15, "PX")
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
    "selectors": ["nut-textarea", " ", "cpoyText"],
    "declaration": {
      position: "absolute",
      top: convertNumber2VP(-999999, "PX"),
      left: convertNumber2VP(-999999, "PX")
    }
  }, {
    "selectors": ["nut-textarea-textarea", " ", "taro-textarea"],
    "declaration": {
      backgroundColor: "rgba(0, 0, 0, 0)",
      resize: "none"
    }
  }, {
    "selectors": [["nut-textarea", "nut-textarea-rtl"], " ", "cpoyText"],
    "declaration": {
      right: convertNumber2VP(-999999, "PX")
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
    "nut-textarea": {
      position: "relative",
      width: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: FlexDirection.Row,
      backgroundColor: "#fff",
      fontSize: convertNumber2VP(14, "PX"),
      paddingTop: convertNumber2VP(10, "PX"),
      paddingRight: convertNumber2VP(25, "PX"),
      paddingBottom: convertNumber2VP(10, "PX"),
      paddingLeft: convertNumber2VP(25, "PX")
    },
    "nut-textarea-limit": {
      position: "absolute",
      right: convertNumber2VP(15, "PX"),
      bottom: convertNumber2VP(12, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#505259"
    },
    "nut-textarea-limit-disabled": {
      cursor: "not-allowed",
      color: "#c2c4cc"
    },
    "nut-textarea-textarea": {
      outline: "none",
      display: "block",
      boxSizing: "border-box",
      width: "100%",
      height: convertNumber2VP(40, "PX"),
      minWidth: convertNumber2VP(0),
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(0),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(0),
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#1a1a1a",
      caretColor: "#1a1a1a",
      textAlign: TextAlign.Start,
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderTopWidth: convertNumber2VP(0),
      borderRightWidth: convertNumber2VP(0),
      borderBottomWidth: convertNumber2VP(0),
      borderLeftWidth: convertNumber2VP(0),
      borderTopColor: "",
      borderRightColor: "",
      borderBottomColor: "",
      borderLeftColor: "",
      resize: "none"
    },
    "nut-textarea-textarea-disabled": {
      cursor: "not-allowed",
      color: "#c2c4cc"
    },
    "taro-textarea": {
      backgroundColor: "rgba(0, 0, 0, 0)",
      resize: "none"
    }
  };
  return __inner_style_data__;
}
var defaultProps = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  defaultValue: "",
  showCount: false,
  maxLength: 140,
  placeholder: "",
  readOnly: false,
  disabled: false,
  autoSize: false
});
var TextArea = function TextArea2(props) {
  var _useConfig = useConfig(),
    locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
    className = _defaultProps$props.className,
    value = _defaultProps$props.value,
    defaultValue = _defaultProps$props.defaultValue,
    showCount = _defaultProps$props.showCount,
    maxLength = _defaultProps$props.maxLength,
    rows = _defaultProps$props.rows,
    placeholder = _defaultProps$props.placeholder,
    readOnly = _defaultProps$props.readOnly,
    disabled = _defaultProps$props.disabled,
    autoSize = _defaultProps$props.autoSize,
    style = _defaultProps$props.style,
    onChange = _defaultProps$props.onChange,
    onBlur = _defaultProps$props.onBlur,
    onFocus = _defaultProps$props.onFocus,
    rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-textarea";
  var compositionRef = useRef(false);
  var rtl = useRtl();
  var format = function format2(value2) {
    if (maxLength !== -1 && value2.length > maxLength) {
      return value2.substring(0, maxLength);
    }
    return value2;
  };
  var _usePropsValue = usePropsValue({
      value: value,
      defaultValue: defaultValue,
      finalValue: format(defaultValue),
      onChange: onChange
    }),
    _usePropsValue2 = _slicedToArray(_usePropsValue, 2),
    inputValue = _usePropsValue2[0],
    setInputValue = _usePropsValue2[1];
  var handleChange = function handleChange2(event) {
    var _event$detail;
    var text = event === null || event === void 0 || (_event$detail = event.detail) === null || _event$detail === void 0 ? void 0 : _event$detail.value;
    if (text) {
      var _value = compositionRef.current ? text : format(text);
      setInputValue(_value);
    } else {
      setInputValue("");
    }
  };
  var handleFocus = function handleFocus2(event) {
    if (disabled) return;
    if (readOnly) return;
    onFocus && onFocus(event);
  };
  var handleBlur = function handleBlur2(event) {
    if (disabled) return;
    if (readOnly) return;
    onBlur && onBlur(event);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    __hmStyle: calcStaticStyle(__inner_style__(), classNames(classPrefix, _defineProperty(_defineProperty({}, "".concat(classPrefix, "-disabled"), disabled), "".concat(classPrefix, "-rtl"), rtl), className)),
    className: classNames(classPrefix, _defineProperty(_defineProperty({}, "".concat(classPrefix, "-disabled"), disabled), "".concat(classPrefix, "-rtl"), rtl), className),
    children: [/* @__PURE__ */jsx(TaroTextareaTagName, _objectSpread2({
      __hmStyle: calcStaticStyle(__inner_style__(), "".concat(classPrefix, "-textarea ").concat(disabled ? "".concat(classPrefix, "-textarea-disabled") : "")),
      nativeProps: {
        style: style,
        readOnly: readOnly,
        rows: rows,
        onCompositionStart: function onCompositionStart() {
          compositionRef.current = true;
        },
        onCompositionEnd: function onCompositionEnd() {
          compositionRef.current = false;
        }
      },
      className: "".concat(classPrefix, "-textarea ").concat(disabled ? "".concat(classPrefix, "-textarea-disabled") : ""),
      style: Taro.getEnv() === "WEB" ? void 0 : style,
      disabled: Taro.getEnv() === "WEB" ? disabled : disabled || readOnly,
      value: inputValue,
      onInput: function onInput(e) {
        return handleChange(e);
      },
      onBlur: function onBlur2(e) {
        return handleBlur(e);
      },
      onFocus: function onFocus2(e) {
        return handleFocus(e);
      },
      autoHeight: autoSize,
      maxlength: maxLength,
      placeholder: placeholder || locale.placeholder
    }, rest)), showCount && /* @__PURE__ */jsxs(TaroTextTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), "".concat(classPrefix, "-limit ").concat(disabled ? "".concat(classPrefix, "-limit-disabled") : "")),
      className: "".concat(classPrefix, "-limit ").concat(disabled ? "".concat(classPrefix, "-limit-disabled") : ""),
      children: [inputValue.length, "/", maxLength < 0 ? 0 : maxLength]
    })]
  }), __nesting_style__());
};
TextArea.displayName = "NutTextArea";

export { TextArea as T };
