import { _ as _objectSpread2, e as ComponentDefaults, d as _objectWithoutProperties, j as useRtl, b as _slicedToArray, f as classNames, g as _defineProperty } from './index.taro.js';
import { TaroViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { u as usePropsValue } from './use-props-value.js';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { jsx, jsxs } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';

var _excluded = ["checked", "defaultChecked", "disabled", "activeText", "inactiveText", "className", "style", "onChange"];
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
    "nut-switch": {
      cursor: "pointer",
      display: "flex",
      flexDirection: FlexDirection.Row,
      alignItems: ItemAlign.Center,
      width: convertNumber2VP(40, "PX"),
      height: convertNumber2VP(24, "PX"),
      lineHeight: convertNumber2VP(24, "PX"),
      backgroundColor: "#ff0f23",
      borderTopLeftRadius: convertNumber2VP(8, "PX"),
      borderTopRightRadius: convertNumber2VP(8, "PX"),
      borderBottomLeftRadius: convertNumber2VP(8, "PX"),
      borderBottomRightRadius: convertNumber2VP(8, "PX"),
      backgroundSize: {
        width: "100%",
        height: "100%"
      },
      backgroundRepeat: ImageRepeat.NoRepeat,
      backgroundPosition: Alignment.Center,
      flexBasis: "auto",
      flexGrow: 0,
      flexShrink: 0
    },
    "nut-switch-button": {
      display: "flex",
      flexDirection: FlexDirection.Row,
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center,
      height: convertNumber2VP(20, "PX"),
      width: convertNumber2VP(20, "PX"),
      transform: {
        Translate: {
          x: convertNumber2VP(2, "PX")
        }
      },
      borderTopLeftRadius: convertNumber2VP(6, "PX"),
      borderTopRightRadius: convertNumber2VP(6, "PX"),
      borderBottomLeftRadius: convertNumber2VP(6, "PX"),
      borderBottomRightRadius: convertNumber2VP(6, "PX"),
      backgroundColor: "#fff",
      transition: "transform .3s",
      boxShadow: {
        offsetX: convertNumber2VP(0),
        offsetY: convertNumber2VP(0),
        radius: convertNumber2VP(0),
        color: "rgba(0, 0, 0, 0)",
        fill: false
      }
    },
    "nut-switch-button-close": {
      transform: {
        Translate: {
          x: convertNumber2VP(2, "PX")
        }
      }
    },
    "nut-switch-button-close-rtl": {
      transform: {
        Translate: {
          x: convertNumber2VP(-2, "PX")
        }
      }
    },
    "nut-switch-button-open": {
      transform: {
        Translate: {
          x: convertNumber2VP(18, "PX")
        }
      }
    },
    "nut-switch-button-open-rtl": {
      transform: {
        Translate: {
          x: convertNumber2VP(-18, "PX")
        }
      }
    },
    "nut-switch-close": {
      backgroundColor: "#c2c4cc"
    },
    "nut-switch-close-line": {
      width: convertNumber2VP(12, "PX"),
      height: convertNumber2VP(2, "PX"),
      backgroundColor: "#fff",
      borderTopLeftRadius: convertNumber2VP(2, "PX"),
      borderTopRightRadius: convertNumber2VP(2, "PX"),
      borderBottomLeftRadius: convertNumber2VP(2, "PX"),
      borderBottomRightRadius: convertNumber2VP(2, "PX")
    },
    "nut-switch-disabled": {
      backgroundColor: "#ffadbe"
    },
    "nut-switch-disabled-close": {
      backgroundColor: "#f5f6fa"
    },
    "nut-switch-label": {
      color: "#fff",
      fontSize: convertNumber2VP(12, "PX")
    },
    "nut-switch-label-close": {
      transform: {
        Translate: {
          x: convertNumber2VP(18, "PX")
        }
      }
    },
    "nut-switch-label-close-rtl": {
      transform: {
        Translate: {
          x: convertNumber2VP(-18, "PX")
        }
      }
    },
    "nut-switch-label-open": {
      transform: {
        Translate: {
          x: convertNumber2VP(-18, "PX")
        }
      }
    },
    "nut-switch-label-open-rtl": {
      transform: {
        Translate: {
          x: convertNumber2VP(18, "PX")
        }
      }
    }
  };
  return __inner_style_data__;
}
var defaultProps = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  disabled: false,
  activeText: "",
  inactiveText: ""
});
var Switch = function Switch2(props) {
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
    checked = _defaultProps$props.checked,
    defaultChecked = _defaultProps$props.defaultChecked,
    disabled = _defaultProps$props.disabled,
    activeText = _defaultProps$props.activeText,
    inactiveText = _defaultProps$props.inactiveText,
    className = _defaultProps$props.className,
    style = _defaultProps$props.style,
    onChange = _defaultProps$props.onChange,
    rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-switch";
  var rtl = useRtl();
  var _usePropsValue = usePropsValue({
      value: checked,
      defaultValue: defaultChecked
    }),
    _usePropsValue2 = _slicedToArray(_usePropsValue, 2),
    value = _usePropsValue2[0],
    setValue = _usePropsValue2[1];
  var classes = function classes2() {
    return classNames([classPrefix, className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-close"), !value), "".concat(classPrefix, "-disabled"), disabled), "".concat(classPrefix, "-disabled-close"), disabled && !value)]);
  };
  var _onClick = function onClick(event) {
    if (disabled) return;
    onChange && onChange(!value, event);
    setValue(!value);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, _objectSpread2(_objectSpread2({
    __hmStyle: calcStaticStyle(__inner_style__(), classes()),
    className: classes(),
    onClick: function onClick(e) {
      return _onClick(e);
    },
    style: style
  }, rest), {}, {
    children: /* @__PURE__ */jsxs(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), classNames([["".concat(classPrefix, "-button")], [value ? "".concat(classPrefix, "-button-open") : "".concat(classPrefix, "-button-close")], _defineProperty(_defineProperty({}, "".concat(classPrefix, "-button-open-rtl"), rtl && value), "".concat(classPrefix, "-button-close-rtl"), rtl && !value)])),
      className: classNames([["".concat(classPrefix, "-button")], [value ? "".concat(classPrefix, "-button-open") : "".concat(classPrefix, "-button-close")], _defineProperty(_defineProperty({}, "".concat(classPrefix, "-button-open-rtl"), rtl && value), "".concat(classPrefix, "-button-close-rtl"), rtl && !value)]),
      children: [!value && !activeText && /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "".concat(classPrefix, "-close-line")),
        className: "".concat(classPrefix, "-close-line")
      }), activeText && /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), classNames([["".concat(classPrefix, "-label")], [value ? "".concat(classPrefix, "-label-open") : "".concat(classPrefix, "-label-close")], _defineProperty(_defineProperty({}, "".concat(classPrefix, "-label-open-rtl"), rtl && value), "".concat(classPrefix, "-button-close-rtl"), rtl && !value)])),
        className: classNames([["".concat(classPrefix, "-label")], [value ? "".concat(classPrefix, "-label-open") : "".concat(classPrefix, "-label-close")], _defineProperty(_defineProperty({}, "".concat(classPrefix, "-label-open-rtl"), rtl && value), "".concat(classPrefix, "-button-close-rtl"), rtl && !value)]),
        children: value ? activeText : inactiveText
      })]
    })
  })), __nesting_style__());
};
Switch.displayName = "NutSwitch";

export { Switch as S };
