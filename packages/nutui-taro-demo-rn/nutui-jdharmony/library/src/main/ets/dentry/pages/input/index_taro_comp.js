import { createNativePageConfig } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/plugin-framework-react/dist/runtime';
import { S, _ as _objectSpread2, k, e as ComponentDefaults, j as useRtl, l as useConfig, d as _objectWithoutProperties, b as _slicedToArray, a as harmonyAndRn, p as pxTransform, u as useTranslate, H as Header } from '../../../index.taro.js';
import Taro, { getEnv, ENV_TYPE } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroViewTagName, TaroInputTagName, TaroTextTagName, TaroScrollViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import * as React from '@jd-oh/taro_library/src/main/ets/npm/react';
import React__default, { forwardRef, useRef, useState, useImperativeHandle, useCallback } from '@jd-oh/taro_library/src/main/ets/npm/react';
import { u as usePropsValue } from '../../../use-props-value.js';
import { jsxs, jsx, Fragment } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';
import { B as Button } from '../../../button.taro.js';
import { z } from '../../../Tips.js';
import ReactDOM from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/react';

var A$1 = function A(M) {
  return /* @__PURE__ */React__default.createElement(S, _objectSpread2(_objectSpread2({}, M), {}, {
    name: M.name || "Close",
    svg64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiMxQTFBMUEiIGQ9Ik04NjUuODMgOTI2LjE3YTQyLjY3IDQyLjY3IDAgMSAwIDYwLjM2LTYwLjM0TDU3Mi4zNSA1MTJsMzUzLjg0LTM1My44M2E0Mi42NyA0Mi42NyAwIDAgMC02MC4zNi02MC4zNEw1MTIgNDUxLjY3IDE1OC4xOSA5Ny44M2E0Mi42NyA0Mi42NyAwIDAgMC02MC4zNiA2MC4zNEw0NTEuNjcgNTEyIDk3LjgzIDg2NS44M2E0Mi42NyA0Mi42NyAwIDEgMCA2MC4zNCA2MC4zNEw1MTIgNTcyLjMzeiIvPjwvc3ZnPg=="
  }));
};
A$1.defaultProps = k;

var N = function N(M) {
  return /* @__PURE__ */React__default.createElement(S, _objectSpread2(_objectSpread2({}, M), {}, {
    name: M.name || "Eye",
    svg64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiMxQTFBMUEiIGQ9Ik01MTIgNzI1LjMzQTE3MC42NyAxNzAuNjcgMCAxIDAgNTEyIDM4NGExNzAuNjcgMTcwLjY3IDAgMCAwIDAgMzQxLjMzbTAtODUuMzNhODUuMzMgODUuMzMgMCAxIDEgMC0xNzAuNjdBODUuMzMgODUuMzMgMCAwIDEgNTEyIDY0MCIvPjxwYXRoIGZpbGw9IiMxQTFBMUEiIGQ9Ik01MTIgNDIuNjdhNDIuNjcgNDIuNjcgMCAwIDAtNDIuNjcgNDIuNjZ2ODYuOTZhNTgxLjA2IDU4MS4wNiAwIDAgMC0yMjEuOTcgNjMuNDRsLTY5LjIzLTgyLjUxYTQyLjY3IDQyLjY3IDAgMSAwLTY1LjM2IDU0Ljg0bDYxLjA4IDcyLjg0QzY3LjI3IDM1Ny44OSAwIDQ2Mi44OSAwIDU1NC42N2MwIDE2OS40MSAyMjkuMjMgMzg0IDUxMiAzODRzNTEyLTIxNC41OSA1MTItMzg0YzAtOTAuOTktNjYuMTEtMTk0Ljk5LTE3MS4xMS0yNzEuNzlsNjIuNzYtNzQuODJhNDIuNjcgNDIuNjcgMCAwIDAtNjUuMzctNTQuODJsLTcwLjU5IDg0LjA5YTU4MS4yNyA1ODEuMjcgMCAwIDAtMjI1LjAyLTY1LjA0Vjg1LjMzQTQyLjY3IDQyLjY3IDAgMCAwIDUxMiA0Mi42N20zMDguNDQgNzAxLjE0Qzc0MS40IDgwNy42MiA2MzEuOTggODUzLjM0IDUxMiA4NTMuMzNjLTExOS45NiAwLTIyOS40LTQ1LjcyLTMwOC40Mi0xMDkuNTItODEuOTItNjYuMTMtMTE4LjI1LTE0MC4xOC0xMTguMjUtMTg5LjE0czM2LjM1LTEyMy4wMSAxMTguMjUtMTg5LjE0QzI4Mi42IDMwMS43MiAzOTIuMDQgMjU2IDUxMiAyNTZjMTE5Ljk2IDAgMjI5LjQgNDUuNzIgMzA4LjQ0IDEwOS41MyA4MS44OCA2Ni4xMyAxMTguMjMgMTQwLjE4IDExOC4yMyAxODkuMTRzLTM2LjM1IDEyMy4wMS0xMTguMjMgMTg5LjE0Ii8+PC9zdmc+"
  }));
};
N.defaultProps = k;

var A = function A(M) {
  return /* @__PURE__ */React__default.createElement(S, _objectSpread2(_objectSpread2({}, M), {}, {
    name: M.name || "Marshalling",
    svg64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiMxQTFBMUEiIGQ9Ik0xOTEuNDkgMzc3LjQ3YTQyLjY3IDQyLjY3IDAgMCAwLTY0LjExLTMwLjA2bC0xMDYuNjcgNjRhNDIuNjcgNDIuNjcgMCAwIDAgNDMuOTEgNzMuMThsNTcuMTktMzQuMzNhMzcwLjUyIDM3MC41MiAwIDAgMCA4MCAxMzIuOTlsLTY5LjkzIDgzLjM1YTQyLjY3IDQyLjY3IDAgMCAwIDY1LjM3IDU0LjgzbDY5LjAzLTgyLjI0YTQyNy40NiA0MjcuNDYgMCAwIDAgMjAzLjA1IDc0LjI0djk3LjI0YTQyLjY3IDQyLjY3IDAgMSAwIDg1LjM0IDB2LTk3LjI0YTQyNy40MyA0MjcuNDMgMCAwIDAgMjAzLjA1LTc0LjI0bDY5LjAxIDgyLjI2YTQyLjY3IDQyLjY3IDAgMCAwIDY1LjM3LTU0Ljg1bC02OS45MS04My4zNWEzNzAuNTQgMzcwLjU0IDAgMCAwIDgwLTEzMi45OWw1Ny4xNyAzNC4zM2E0Mi42NyA0Mi42NyAwIDEgMCA0My45My03My4xOGwtMTA2LjY3LTY0YTQyLjY3IDQyLjY3IDAgMCAwLTY0LjEzIDMwLjA2QzgxMC43OSA1MTcuNjMgNjc3LjE2IDYzMC4xNiA1MTIgNjMwLjE3cy0yOTguODItMTEyLjU4LTMyMC41MS0yNTIuNyIvPjwvc3ZnPg=="
  }));
};
A.defaultProps = k;

var D = function D(M) {
  return /* @__PURE__ */React__default.createElement(S, _objectSpread2(_objectSpread2({}, M), {}, {
    name: M.name || "MaskClose",
    svg64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik01MTIgMTQuOUMyMzguNTkgMTQuOSAxNC45IDIzOC42IDE0LjkgNTEyczIyMy43IDQ5Ny4xIDQ5Ny4xIDQ5Ny4xIDQ5Ny4xLTIyMy43IDQ5Ny4xLTQ5Ny4xUzc4NS40IDE0LjkgNTEyIDE0LjltMjA3LjEzIDY0Ni4yM2MxNi41NyAxNi41NyAxNi41NyA0MS40MiAwIDU4cy00MS40MiAxNi41Ny01OCAwTDUxMiA1NzAgMzYyLjg3IDcxOS4xM2MtMTYuNTcgMTYuNTctNDEuNDMgMTYuNTctNTggMHMtMTYuNTctNDEuNDIgMC01OEw0NTQgNTEyIDMwNC44NyAzNjIuODdjLTE2LjU3LTE2LjU3LTE2LjU3LTQxLjQzIDAtNThzNDEuNDItMTYuNTcgNTggMEw1MTIgNDU0bDE0OS4xMy0xNDkuMTNjMTYuNTctMTYuNTcgNDEuNDMtMTYuNTcgNTggMHMxNi41NyA0MS40MiAwIDU4TDU3MCA1MTJ6Ii8+PC9zdmc+"
  }));
};
D.defaultProps = k;

function trimExtraChar(value, _char, regExp) {
  var index = value.indexOf(_char);
  if (index === -1) {
    return value;
  }
  if (_char === "-" && index !== 0) {
    return value.slice(0, index);
  }
  return value.slice(0, index + 1) + value.slice(index).replace(regExp, "");
}
function formatNumber(value) {
  var allowDot = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  var allowMinus = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (allowDot) {
    value = trimExtraChar(value, ".", /\./g);
  } else {
    value = value.split(".")[0];
  }
  if (allowMinus) {
    value = trimExtraChar(value, "-", /-/g);
  } else {
    value = value.replace(/-/, "");
  }
  var regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
  return value.replace(regExp, "");
}

var _excluded = ["type", "name", "placeholder", "align", "disabled", "readOnly", "maxLength", "clearable", "clearIcon", "formatTrigger", "autoFocus", "style", "className", "onChange", "onFocus", "onBlur", "onClear", "formatter", "onClick", "confirmType", "defaultValue", "value"];
var __inner_style_data__$1;
var __nesting_style_data__$f;
function __nesting_style__$f() {
  if (__nesting_style_data__$f) return __nesting_style_data__$f;
  __nesting_style_data__$f = [{
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
    "selectors": ["nut-input", " ", "nut-icon"],
    "declaration": {
      color: "#c8c9cc"
    }
  }, {
    "selectors": ["nut-input-disabled", " ", "h5-input:disabled"],
    "declaration": {
      color: "#c2c4cc",
      cursor: "not-allowed",
      opacity: 1,
      WebkitTextFillColor: "#c2c4cc"
    }
  }];
  return __nesting_style_data__$f;
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
    "h5-span": {},
    "nut-input": {
      position: "relative",
      display: "flex",
      flexDirection: FlexDirection.Row,
      flexWrap: FlexWrap.NoWrap,
      flexBasis: "0%",
      flexGrow: 1,
      flexShrink: 1,
      alignItems: ItemAlign.Center,
      paddingTop: convertNumber2VP(10, "PX"),
      paddingRight: convertNumber2VP(25, "PX"),
      paddingBottom: convertNumber2VP(10, "PX"),
      paddingLeft: convertNumber2VP(25, "PX"),
      lineHeight: convertNumber2VP(24, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      boxSizing: "border-box",
      borderTopLeftRadius: convertNumber2VP(0),
      borderTopRightRadius: convertNumber2VP(0),
      borderBottomLeftRadius: convertNumber2VP(0),
      borderBottomRightRadius: convertNumber2VP(0),
      backgroundColor: "#fff",
      borderBottomWidth: convertNumber2VP(0, "PX"),
      borderBottomStyle: BorderStyle.Solid,
      borderBottomColor: "rgba(0, 0, 0, 0.06)"
    },
    "nut-input-disabled": {
      color: "#c2c4cc"
    },
    "nut-input-native": {
      flexBasis: "0%",
      flexGrow: 1,
      flexShrink: 1,
      color: "#1a1a1a",
      fontSize: convertNumber2VP(14, "PX"),
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0),
      borderTopWidth: convertNumber2VP(0),
      borderRightWidth: convertNumber2VP(0),
      borderBottomWidth: convertNumber2VP(0),
      borderLeftWidth: convertNumber2VP(0),
      borderTopColor: "",
      borderRightColor: "",
      borderBottomColor: "",
      borderLeftColor: "",
      outline: 0,
      textDecoration: {
        type: TextDecorationType.None
      },
      backgroundColor: "rgba(0, 0, 0, 0)"
    },
    "nut-input-native::placeholder": {
      color: "#757575"
    }
  };
  return __inner_style_data__$1;
}
var defaultProps = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  type: "text",
  name: "",
  placeholder: void 0,
  confirmType: "done",
  align: "left",
  required: false,
  disabled: false,
  readOnly: false,
  maxLength: 9999,
  clearable: false,
  clearIcon: null,
  formatTrigger: "onChange",
  autoFocus: false
});
var Input = /* @__PURE__ */forwardRef(function (props, ref) {
  var rtl = useRtl();
  var _useConfig = useConfig(),
    locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
    type = _defaultProps$props.type,
    name = _defaultProps$props.name,
    placeholder = _defaultProps$props.placeholder,
    align = _defaultProps$props.align,
    disabled = _defaultProps$props.disabled,
    readOnly = _defaultProps$props.readOnly,
    maxLength = _defaultProps$props.maxLength,
    clearable = _defaultProps$props.clearable,
    clearIcon = _defaultProps$props.clearIcon,
    formatTrigger = _defaultProps$props.formatTrigger,
    autoFocus = _defaultProps$props.autoFocus,
    style = _defaultProps$props.style,
    className = _defaultProps$props.className,
    onChange = _defaultProps$props.onChange,
    onFocus = _defaultProps$props.onFocus;
    _defaultProps$props.onBlur;
    var onClear = _defaultProps$props.onClear,
    formatter = _defaultProps$props.formatter,
    _onClick = _defaultProps$props.onClick,
    confirmType = _defaultProps$props.confirmType,
    defaultValue = _defaultProps$props.defaultValue,
    _value = _defaultProps$props.value,
    rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var _usePropsValue = usePropsValue({
      value: _value,
      defaultValue: defaultValue,
      finalValue: "",
      onChange: onChange
    }),
    _usePropsValue2 = _slicedToArray(_usePropsValue, 2),
    value = _usePropsValue2[0],
    setValue = _usePropsValue2[1];
  var inputRef = useRef(null);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  useImperativeHandle(ref, function () {
    return {
      clear: function clear() {
        setValue("");
      },
      focus: function focus() {
        var _inputRef$current;
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      },
      blur: function blur() {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.blur();
      },
      get nativeElement() {
        return inputRef.current;
      }
    };
  });
  var inputClass = useCallback(function () {
    var classPrefix = "nut-input";
    return [classPrefix, "".concat(disabled ? "".concat(classPrefix, "-disabled") : "")].filter(Boolean).join(" ");
  }, [disabled]);
  var _React$useState = React__default.useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    updateState = _React$useState2[1];
  var forceUpdate = React__default.useCallback(function () {
    return updateState({});
  }, []);
  var updateValue = function updateValue2(value2) {
    var trigger = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "onChange";
    var val = value2;
    if (getEnv() === ENV_TYPE.WEB) {
      if (type === "number") {
        val = formatNumber(val, false, true);
      }
      if (type === "digit") {
        val = formatNumber(val, true, true);
      }
    }
    if (formatter && trigger === formatTrigger) {
      val = formatter(val);
    }
    setValue(val);
    var eventHandler = props[trigger];
    if (eventHandler && typeof eventHandler === "function" && trigger !== "onChange") {
      eventHandler(val);
    }
    forceUpdate();
  };
  var handleFocus = function handleFocus2(event) {
    if (Taro.getEnv() === "WEB") {
      var val = event.target.value;
      onFocus && onFocus(val);
    } else {
      var height = (event.detail || {}).height;
      onFocus === null || onFocus === void 0 || onFocus(value, height);
    }
    setActive(true);
  };
  var handleInput = function handleInput2(value2) {
    updateValue(value2, "onChange");
  };
  var handleBlur = function handleBlur2(event) {
    var val = Taro.getEnv() === "WEB" ? event.target.value : value;
    updateValue(val, "onBlur");
    setTimeout(function () {
      setActive(false);
    }, 200);
  };
  var inputType = function inputType2(type2) {
    if (getEnv() === ENV_TYPE.WEB) {
      if (type2 === "digit") {
        return "text";
      }
      if (type2 === "number") {
        return "tel";
      }
    } else if (type2 === "password") {
      return "text";
    }
    return type2;
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    __hmStyle: calcStaticStyle(__inner_style__$1(), "".concat(inputClass(), "  ").concat(className || "")),
    className: "".concat(inputClass(), "  ").concat(className || ""),
    style: style,
    onClick: function onClick(e) {
      _onClick && _onClick(e);
    },
    children: [/* @__PURE__ */jsx(TaroInputTagName, _objectSpread2(_objectSpread2({
      __hmStyle: calcStaticStyle(__inner_style__$1(), "nut-input-native")
    }, rest), {}, {
      name: name,
      className: "nut-input-native",
      ref: inputRef,
      style: {
        // eslint-disable-next-line no-nested-ternary
        textAlign: rtl ? align === "right" ? "left" : align === "left" ? "right" : "center" : align
      },
      type: inputType(type),
      password: type === "password",
      maxlength: maxLength,
      placeholder: placeholder === void 0 ? locale.placeholder : placeholder,
      disabled: disabled || readOnly,
      value: value,
      focus: autoFocus,
      confirmType: confirmType,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onInput: function onInput(e) {
        console.log("eeeeee", e.detail.value);
        handleInput((e.currentTarget || e.detail).value);
      }
    })), /* @__PURE__ */jsx(TaroViewTagName, {
      style: {
        display: clearable && !readOnly && active && value.length > 0 ? "flex" : "none",
        alignItems: "center",
        cursor: "pointer"
      },
      onClick: function onClick(e) {
        e.stopPropagation();
        if (!disabled) {
          setValue("");
          onClear === null || onClear === void 0 || onClear("");
        }
      },
      children: clearIcon || (!harmonyAndRn() ? /* @__PURE__ */jsx(D, {
        className: "nut-input-clear",
        __styleSheet: {
          key: "nut-input-clear",
          value: calcStaticStyle(__inner_style__$1(), "nut-input-clear")
        },
        __hmStyle: calcStaticStyle(__inner_style__$1(), "nut-input-clear")
      }) : null)
    })]
  }), __nesting_style__$f());
});
Input.displayName = "NutInput";

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
  }];
  return __nesting_style_data__$e;
}
var Demo1 = function Demo12() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsx(Input, {
      placeholder: "请输入文本",
      placeholderTextColor: "#757575",
      onChange: function onChange(v) {
        console.log("onChange", v);
      }
    })
  }), __nesting_style__$e());
};

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
var Demo2 = function Demo22() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsx(Input, {
      defaultValue: "NutUI React",
      placeholder: "请输入文本",
      placeholderTextColor: "#757575"
    })
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
var Demo3 = function Demo32() {
  var _useState = useState("NutUI React"),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsx(Input, {
      value: val,
      onChange: function onChange(val2) {
        return setVal(val2);
      },
      placeholder: "请输入文本",
      placeholderTextColor: "#757575"
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
var Demo4 = function Demo42() {
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Input, {
      type: "text",
      placeholder: "请输入文本",
      placeholderTextColor: "#757575"
    }), /* @__PURE__ */jsx(Input, {
      type: "password",
      placeholder: "请输入密码",
      placeholderTextColor: "#757575"
    }), /* @__PURE__ */jsx(Input, {
      type: "digit",
      placeholder: "请输入数字",
      placeholderTextColor: "#757575"
    }), /* @__PURE__ */jsx(Input, {
      type: "number",
      placeholder: "请输入整数",
      placeholderTextColor: "#757575"
    })]
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
var Demo5 = function Demo52() {
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Input, {
      readOnly: true,
      placeholder: "输入框只读",
      placeholderTextColor: "#757575"
    }), /* @__PURE__ */jsx(Input, {
      disabled: true,
      placeholder: "输入框禁用",
      placeholderTextColor: "#757575"
    })]
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
var Demo6 = function Demo62() {
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Input, {
      clearable: true,
      placeholder: "显示清除图标",
      placeholderTextColor: "#757575"
    }), /* @__PURE__ */jsx(Input, {
      clearable: true,
      clearIcon: !harmonyAndRn() ? /* @__PURE__ */jsx(A$1, {}) : null,
      placeholder: "显示清除图标",
      placeholderTextColor: "#757575"
    })]
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
var Demo7 = function Demo72() {
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    keyword = _useState2[0],
    setKeyword = _useState2[1];
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    style: {
      display: "flex",
      flexWrap: "nowrap",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#ffffff"
    },
    children: [/* @__PURE__ */jsx(Input, {
      placeholder: "受控下的清除",
      value: keyword,
      onChange: setKeyword,
      placeholderTextColor: "#757575"
    }), /* @__PURE__ */jsx(Button, {
      type: "primary",
      size: "small",
      onClick: function onClick() {
        setKeyword("");
      },
      style: {
        marginRight: pxTransform(10)
      },
      children: /* @__PURE__ */jsx(TaroTextTagName, {
        style: {
          color: "#ffffff",
          fontSize: pxTransform(12)
        },
        children: "点我清除"
      })
    })]
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
var Demo8 = function Demo82() {
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentLength = _useState2[0],
    setCurrentLength = _useState2[1];
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsxs(TaroViewTagName, {
      style: {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#ffffff"
      },
      children: [/* @__PURE__ */jsx(Input, {
        type: "text",
        maxLength: 20,
        onChange: function onChange(val) {
          return setCurrentLength(val.length);
        },
        placeholderTextColor: "#757575"
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        style: {
          marginRight: pxTransform(10)
        },
        children: /* @__PURE__ */jsxs(TaroTextTagName, {
          style: {
            width: pxTransform(40),
            fontSize: pxTransform(12)
          },
          children: [currentLength, " / 20"]
        })
      })]
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
var Demo9 = function Demo92() {
  var _useState = useState("password"),
    _useState2 = _slicedToArray(_useState, 2),
    inputType = _useState2[0],
    setInputType = _useState2[1];
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsxs(TaroViewTagName, {
      style: {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#ffffff"
      },
      children: [/* @__PURE__ */jsx(Input, {
        type: inputType,
        placeholder: "请输入密码",
        placeholderTextColor: "#757575"
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        style: {
          display: "flex",
          marginRight: pxTransform(10),
          alignItems: "center"
        },
        onClick: function onClick() {
          return setInputType(inputType === "text" ? "password" : "text");
        },
        children: inputType === "text" ? !harmonyAndRn() ? /* @__PURE__ */jsx(N, {
          color: "var(--nutui-gray-7)"
        }) : null : !harmonyAndRn() ? /* @__PURE__ */jsx(A, {
          color: "var(--nutui-gray-7)"
        }) : null
      })]
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
var Demo10 = function Demo102() {
  var formatter = function formatter2(value) {
    return value.replace(/\d/g, "");
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Input, {
      formatter: formatter,
      placeholder: "在输入时执行格式化",
      placeholderTextColor: "#757575"
    }), /* @__PURE__ */jsx(Input, {
      formatter: formatter,
      formatTrigger: "onBlur",
      placeholder: "在失焦时执行格式化",
      placeholderTextColor: "#757575"
    })]
  }), __nesting_style__$5());
};

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
var Demo11$1 = function Demo112() {
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Input, {
      align: "left",
      placeholder: "文本内容对齐",
      placeholderTextColor: "#757575"
    }), /* @__PURE__ */jsx(Input, {
      align: "right",
      placeholder: "文本内容对齐",
      placeholderTextColor: "#757575"
    })]
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
var Demo12 = function Demo122() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsx(Input, {
      placeholder: "事件",
      placeholderTextColor: "#757575"
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
var Demo13 = function Demo132() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsxs(TaroViewTagName, {
      style: {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#ffffff"
      },
      children: [!harmonyAndRn() ? /* @__PURE__ */jsx(z, {
        style: {
          marginLeft: pxTransform(10)
        }
      }) : null, /* @__PURE__ */jsx(Input, {
        placeholder: "请输入短信验证码",
        placeholderTextColor: "#757575",
        style: {
          "--nutui-input-padding": "10px"
        }
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        style: {
          display: "flex",
          width: pxTransform(100),
          marginRight: pxTransform(10),
          alignItems: "center"
        },
        children: /* @__PURE__ */jsx(Button, {
          type: "primary",
          size: "small",
          style: {
            flexShrink: 1
          },
          children: /* @__PURE__ */jsx(TaroTextTagName, {
            style: {
              fontSize: pxTransform(12),
              color: "#ffffff"
            },
            children: "获取验证码"
          })
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
var Demo11 = function Demo112() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsx(Input, {
      style: {
        "--nutui-input-border-bottom-width": "1px"
      },
      placeholder: "边框",
      placeholderTextColor: "#757575"
    })
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
var InputDemo = function InputDemo2() {
  var _useTranslate = useTranslate({
      "zh-CN": {
        basic: "基础用法",
        uncontrolled: "非受控",
        controlled: "受控",
        title1: "自定义类型",
        title2: "禁用和只读",
        title3: "显示清除图标",
        title5: "插入按钮",
        title6: "格式化输入内容",
        title7: "显示字数统计",
        title8: "对齐方式",
        title9: "无边框",
        title10: "事件",
        title11: "布局",
        text: "请输入文本",
        password: "请输入密码",
        number: "请输入整数",
        digit: "请输入数字",
        readOnly: "输入框只读",
        disabled: "输入框禁用",
        clear: "显示清除图标",
        clearControlled: "受控下的清除",
        clearButton: "点我清除",
        codeplaceholder: "请输入短信验证码",
        sendCode: "获取验证码",
        border: "边框",
        formatter: "在输入时移除数字",
        formatter2: "在失焦时移除数字",
        align: "文本内容对齐",
        placeholder5: "输入框内容对齐",
        withForm: "配合表单使用",
        text1: "文本",
        password1: "带密码可见",
        wordCount: "字数统计"
      },
      "en-US": {
        basic: "Basic usage",
        uncontrolled: "uncontrolled",
        controlled: "Controlled",
        title1: "Custom Type",
        title2: "Disabled and read-only",
        title3: "Show clear icon",
        title5: "Insert button",
        title6: "Format input content",
        title7: "Display word count",
        title8: "Alignment",
        title9: "No Border",
        title10: "event",
        title11: "Layout",
        text: "Please enter text",
        password: "Please enter a password",
        number: "Please enter an integer",
        digit: "Please enter a number",
        readOnly: "Input box is read-only",
        disabled: "Input box disabled",
        clear: "Show clear icon",
        clearControlled: "Clearing in Controlled Mode",
        clearButton: "Click to Clear",
        codeplaceholder: "Please enter the SMS verification code",
        sendCode: "Get code",
        border: "border",
        formatter: "Remove numbers on input",
        formatter2: "Remove numbers when out of focus",
        align: "text content alignment",
        placeholder5: "Input box content alignment",
        withForm: "With Form",
        text1: "Text",
        password1: "Visible with password",
        wordCount: "Word count"
      }
    }),
    _useTranslate2 = _slicedToArray(_useTranslate, 1),
    translated = _useTranslate2[0];
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Header, {}), /* @__PURE__ */jsxs(TaroScrollViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), "demo ".concat(Taro.getEnv() === "WEB" ? "web" : "")),
      className: "demo ".concat(Taro.getEnv() === "WEB" ? "web" : ""),
      style: {
        paddingBottom: "20px"
      },
      children: [/* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.basic
      }), /* @__PURE__ */jsx(Demo1, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.uncontrolled
      }), /* @__PURE__ */jsx(Demo2, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.controlled
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
        children: translated.clearControlled
      }), /* @__PURE__ */jsx(Demo7, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.wordCount
      }), /* @__PURE__ */jsx(Demo8, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.password1
      }), /* @__PURE__ */jsx(Demo9, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title6
      }), /* @__PURE__ */jsx(Demo10, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title8
      }), /* @__PURE__ */jsx(Demo11$1, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title10
      }), /* @__PURE__ */jsx(Demo12, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title11
      }), /* @__PURE__ */jsx(Demo13, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.border
      }), /* @__PURE__ */jsx(Demo11, {})]
    })]
  }), __nesting_style__());
};

var config = {
  "navigationBarTitleText": "Input"
};
const index = (function () {
  return createNativePageConfig(InputDemo, 'dentry/pages/input/index', React, ReactDOM, config);
});

export { config, index as default };
