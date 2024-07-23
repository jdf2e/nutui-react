import { l as useConfig, _ as _objectSpread2, d as _objectWithoutProperties, f as classNames, g as _defineProperty, p as pxTransform } from './index.taro.js';
import React__default, { useContext } from '@jd-oh/taro_library/src/main/ets/npm/react';
import { TaroViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { jsx, Fragment, jsxs } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';

var context = {
  onClick: function onClick(item, index) {}
};
const GridContext = /* @__PURE__ */React__default.createContext(context);

var _excluded$1 = ["children", "style", "columns", "index", "gap", "square", "text", "center", "reverse", "direction", "className", "onClick"];
var __inner_style_data__$1;
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
  }, {
    "selectors": ["nut-rtl", " ", "nut-grid-item-content-border"],
    "declaration": {
      borderRightWidth: convertNumber2VP(0),
      borderLeftWidth: convertNumber2VP(1, "PX")
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-grid-item-content-clickable"],
    "declaration": _defineProperty({}, "::before", {
      right: "50%",
      transform: {
        Translate: {
          x: "50%",
          y: "-50%"
        }
      }
    })
  }, {
    "selectors": ["nut-rtl", " ", "nut-grid-item-content-surround"],
    "declaration": {
      borderLeftWidth: convertNumber2VP(0),
      borderRightWidth: convertNumber2VP(1, "PX")
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-grid-item-content-border"],
    "declaration": {
      borderRightWidth: convertNumber2VP(0),
      borderLeftWidth: convertNumber2VP(1, "PX")
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-grid-item-content-clickable"],
    "declaration": _defineProperty({}, "::before", {
      right: "50%",
      transform: {
        Translate: {
          x: "50%",
          y: "-50%"
        }
      }
    })
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-grid-item-content-surround"],
    "declaration": {
      borderLeftWidth: convertNumber2VP(0),
      borderRightWidth: convertNumber2VP(1, "PX")
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-grid-item-content-horizontal", " ", "nut-grid-item-text"],
    "declaration": {
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(8, "PX"),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": ["nut-rtl", " ", ["nut-grid-item-content-horizontal", "nut-grid-item-content-reverse"], " ", "nut-grid-item-text"],
    "declaration": {
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(0),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(8, "PX")
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-grid-item-content-horizontal", " ", "nut-grid-item-text"],
    "declaration": {
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(8, "PX"),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", ["nut-grid-item-content-horizontal", "nut-grid-item-content-reverse"], " ", "nut-grid-item-text"],
    "declaration": {
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(0),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(8, "PX")
    }
  }];
  return __nesting_style_data__$1;
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
    "nut-grid-item": {
      display: "flex",
      flexDirection: FlexDirection.Column,
      position: "relative",
      boxSizing: "border-box",
      color: "#1a1a1a"
    },
    "nut-grid-item-content": {
      display: "flex",
      boxSizing: "border-box",
      flexBasis: "0%",
      flexGrow: 1,
      flexShrink: 1,
      flexDirection: FlexDirection.Column,
      width: "100%",
      paddingTop: convertNumber2VP(16, "PX"),
      paddingRight: convertNumber2VP(8, "PX"),
      paddingBottom: convertNumber2VP(16, "PX"),
      paddingLeft: convertNumber2VP(8, "PX"),
      backgroundColor: "#fff",
      borderTopWidth: convertNumber2VP(0),
      borderRightWidth: convertNumber2VP(0),
      borderBottomWidth: convertNumber2VP(0),
      borderLeftWidth: convertNumber2VP(0),
      borderTopStyle: BorderStyle.Solid,
      borderRightStyle: BorderStyle.Solid,
      borderBottomStyle: BorderStyle.Solid,
      borderLeftStyle: BorderStyle.Solid,
      borderTopColor: "rgba(0, 0, 0, 0.06)",
      borderRightColor: "rgba(0, 0, 0, 0.06)",
      borderBottomColor: "rgba(0, 0, 0, 0.06)",
      borderLeftColor: "rgba(0, 0, 0, 0.06)"
    },
    "nut-grid-item-content-border": {
      borderRightWidth: convertNumber2VP(1, "PX"),
      borderBottomWidth: convertNumber2VP(1, "PX")
    },
    "nut-grid-item-content-center": {
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center
    },
    "nut-grid-item-content-clickable": _defineProperty({
      cursor: "pointer"
    }, "::before", {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderTopColor: "rgba(0, 0, 0, 0.7)",
      borderBottomColor: "rgba(0, 0, 0, 0.7)",
      borderLeftColor: "rgba(0, 0, 0, 0.7)",
      borderRightColor: "rgba(0, 0, 0, 0.7)",
      transform: {
        Translate: {
          x: "-50%",
          y: "-50%"
        }
      },
      opacity: 0,
      content: " "
    }),
    "nut-grid-item-content-clickable:active:before": _defineProperty({}, "::", {
      opacity: 0.1
    }),
    "nut-grid-item-content-horizontal": {
      flexDirection: FlexDirection.Row
    },
    "nut-grid-item-content-horizontal-reverse": {
      flexDirection: FlexDirection.RowReverse
    },
    "nut-grid-item-content-reverse": {
      flexDirection: FlexDirection.ColumnReverse
    },
    "nut-grid-item-content-square": {
      marginTop: "-100%"
    },
    "nut-grid-item-content-surround": {
      borderTopWidth: convertNumber2VP(1, "PX"),
      borderLeftWidth: convertNumber2VP(1, "PX")
    },
    "nut-grid-item-text": {
      color: "#1a1a1a",
      fontSize: convertNumber2VP(12, "PX"),
      wordBreak: "break-all",
      marginTop: convertNumber2VP(8, "PX"),
      marginRight: convertNumber2VP(0),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(0)
    },
    "nut-grid-item-text-horizontal": {
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(0),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(8, "PX")
    },
    "nut-grid-item-text-horizontal-reverse": {
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(8, "PX"),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(0)
    },
    "nut-grid-item-text-reverse": {
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(0),
      marginBottom: convertNumber2VP(8, "PX"),
      marginLeft: convertNumber2VP(0)
    }
  };
  return __inner_style_data__$1;
}
var defaultProps$1 = {
  text: "",
  columns: 4,
  gap: 0,
  center: true,
  square: false,
  reverse: false,
  direction: "vertical"
};
var GridItem = function GridItem2(props) {
  var _useConfig = useConfig();
    _useConfig.locale;
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps$1), props),
    children = _defaultProps$props.children,
    style = _defaultProps$props.style,
    columns = _defaultProps$props.columns,
    index = _defaultProps$props.index,
    gap = _defaultProps$props.gap,
    square = _defaultProps$props.square,
    text = _defaultProps$props.text,
    center = _defaultProps$props.center,
    reverse = _defaultProps$props.reverse,
    direction = _defaultProps$props.direction,
    className = _defaultProps$props.className,
    onClick = _defaultProps$props.onClick;
    _objectWithoutProperties(_defaultProps$props, _excluded$1);
  var classPrefix = "nut-grid-item";
  var classes = classNames(classPrefix, className);
  var context = useContext(GridContext);
  var rootStyle = function rootStyle2() {
    var styles = _objectSpread2({
      width: "".concat(100 / +columns, "%"),
      overflow: "hidden"
    }, style);
    if (square) {
      styles.paddingTop = "".concat(100 / +columns, "%");
    } else if (gap) {
      styles.paddingRight = pxTransform(typeof gap === "number" ? gap : parseFloat(gap));
      if (index >= Number(columns)) {
        styles.marginTop = pxTransform(typeof gap === "number" ? gap : parseFloat(gap));
      }
    }
    return styles;
  };
  var contentClass = function contentClass2() {
    return classNames("".concat(classPrefix, "-content"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-content-border"), true), "".concat(classPrefix, "-content-surround"), gap), "".concat(classPrefix, "-content-center"), center), "".concat(classPrefix, "-content-square"), square), "".concat(classPrefix, "-content-reverse"), reverse && direction !== "horizontal"), "".concat(classPrefix, "-content-").concat(direction), !!direction), "".concat(classPrefix, "-content-horizontal-reverse"), reverse && direction === "horizontal"));
  };
  var textClass = function textClass2() {
    return classNames("".concat(classPrefix, "-text"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-text-reverse"), reverse && direction !== "horizontal"), "".concat(classPrefix, "-text-horizontal"), direction === "horizontal"), "".concat(classPrefix, "-text-horizontal-reverse"), reverse && direction === "horizontal"));
  };
  var handleClick = function handleClick2(e) {
    onClick && onClick(e);
    context.onClick && context.onClick({
      text: text,
      index: index,
      columns: columns,
      gap: gap,
      center: center,
      square: square,
      reverse: reverse,
      direction: direction
    }, index);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsx(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__$1(), classes),
      className: classes,
      style: rootStyle(),
      onClick: handleClick,
      children: /* @__PURE__ */jsxs(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$1(), contentClass()),
        className: contentClass(),
        children: [children && /* @__PURE__ */jsx(Fragment, {
          children: children
        }), text && /* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__$1(), textClass()),
          className: textClass(),
          children: text
        })]
      })
    })
  }), __nesting_style__$1());
};
GridItem.displayName = "NutGridItem";

var pxCheck = function pxCheck2(value) {
  return parseFloat(value.toString());
};

var _excluded = ["children", "columns", "gap", "center", "square", "reverse", "direction", "style", "className", "onClick"];
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
  }, {
    "selectors": ["nut-rtl", " ", "nut-grid-border"],
    "declaration": {
      borderLeftWidth: convertNumber2VP(0),
      borderRightWidth: convertNumber2VP(1, "PX")
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-grid-item-content-border"],
    "declaration": {
      borderRightWidth: convertNumber2VP(0),
      borderLeftWidth: convertNumber2VP(1, "PX")
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-grid-item-content-clickable"],
    "declaration": _defineProperty({}, "::before", {
      right: "50%",
      transform: {
        Translate: {
          x: "50%",
          y: "-50%"
        }
      }
    })
  }, {
    "selectors": ["nut-rtl", " ", "nut-grid-item-content-surround"],
    "declaration": {
      borderLeftWidth: convertNumber2VP(0),
      borderRightWidth: convertNumber2VP(1, "PX")
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-grid-border"],
    "declaration": {
      borderLeftWidth: convertNumber2VP(0),
      borderRightWidth: convertNumber2VP(1, "PX")
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-grid-item-content-border"],
    "declaration": {
      borderRightWidth: convertNumber2VP(0),
      borderLeftWidth: convertNumber2VP(1, "PX")
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-grid-item-content-clickable"],
    "declaration": _defineProperty({}, "::before", {
      right: "50%",
      transform: {
        Translate: {
          x: "50%",
          y: "-50%"
        }
      }
    })
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-grid-item-content-surround"],
    "declaration": {
      borderLeftWidth: convertNumber2VP(0),
      borderRightWidth: convertNumber2VP(1, "PX")
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-grid-item-content-horizontal", " ", "nut-grid-item-text"],
    "declaration": {
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(8, "PX"),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": ["nut-rtl", " ", ["nut-grid-item-content-horizontal", "nut-grid-item-content-reverse"], " ", "nut-grid-item-text"],
    "declaration": {
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(0),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(8, "PX")
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-grid-item-content-horizontal", " ", "nut-grid-item-text"],
    "declaration": {
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(8, "PX"),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(0)
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", ["nut-grid-item-content-horizontal", "nut-grid-item-content-reverse"], " ", "nut-grid-item-text"],
    "declaration": {
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(0),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(8, "PX")
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
    "nut-grid": {
      display: "flex",
      flexDirection: FlexDirection.Row,
      alignItems: ItemAlign.Stretch,
      flexWrap: FlexWrap.Wrap,
      borderTopWidth: convertNumber2VP(0),
      borderRightWidth: convertNumber2VP(0),
      borderBottomWidth: convertNumber2VP(0),
      borderLeftWidth: convertNumber2VP(0),
      borderTopStyle: BorderStyle.Solid,
      borderRightStyle: BorderStyle.Solid,
      borderBottomStyle: BorderStyle.Solid,
      borderLeftStyle: BorderStyle.Solid,
      borderTopColor: "rgba(0, 0, 0, 0.06)",
      borderRightColor: "rgba(0, 0, 0, 0.06)",
      borderBottomColor: "rgba(0, 0, 0, 0.06)",
      borderLeftColor: "rgba(0, 0, 0, 0.06)"
    },
    "nut-grid-border": {
      borderTopWidth: convertNumber2VP(1, "PX"),
      borderLeftWidth: convertNumber2VP(1, "PX")
    },
    "nut-grid-item": {
      display: "flex",
      flexDirection: FlexDirection.Column,
      position: "relative",
      boxSizing: "border-box",
      color: "#1a1a1a"
    },
    "nut-grid-item-content": {
      display: "flex",
      flexBasis: "0%",
      flexGrow: 1,
      flexShrink: 1,
      flexDirection: FlexDirection.Column,
      width: "100%",
      paddingTop: convertNumber2VP(16, "PX"),
      paddingRight: convertNumber2VP(8, "PX"),
      paddingBottom: convertNumber2VP(16, "PX"),
      paddingLeft: convertNumber2VP(8, "PX"),
      backgroundColor: "#fff",
      borderTopWidth: convertNumber2VP(0),
      borderRightWidth: convertNumber2VP(0),
      borderBottomWidth: convertNumber2VP(0),
      borderLeftWidth: convertNumber2VP(0),
      borderTopStyle: BorderStyle.Solid,
      borderRightStyle: BorderStyle.Solid,
      borderBottomStyle: BorderStyle.Solid,
      borderLeftStyle: BorderStyle.Solid,
      borderTopColor: "rgba(0, 0, 0, 0.06)",
      borderRightColor: "rgba(0, 0, 0, 0.06)",
      borderBottomColor: "rgba(0, 0, 0, 0.06)",
      borderLeftColor: "rgba(0, 0, 0, 0.06)"
    },
    "nut-grid-item-content-border": {
      borderRightWidth: convertNumber2VP(1, "PX"),
      borderBottomWidth: convertNumber2VP(1, "PX")
    },
    "nut-grid-item-content-center": {
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center
    },
    "nut-grid-item-content-clickable": _defineProperty({
      cursor: "pointer"
    }, "::before", {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderTopColor: "rgba(0, 0, 0, 0.7)",
      borderBottomColor: "rgba(0, 0, 0, 0.7)",
      borderLeftColor: "rgba(0, 0, 0, 0.7)",
      borderRightColor: "rgba(0, 0, 0, 0.7)",
      transform: {
        Translate: {
          x: "-50%",
          y: "-50%"
        }
      },
      opacity: 0,
      content: " "
    }),
    "nut-grid-item-content-clickable:active:before": _defineProperty({}, "::", {
      opacity: 0.1
    }),
    "nut-grid-item-content-horizontal": {
      flexDirection: FlexDirection.Row
    },
    "nut-grid-item-content-horizontal-reverse": {
      flexDirection: FlexDirection.RowReverse
    },
    "nut-grid-item-content-reverse": {
      flexDirection: FlexDirection.ColumnReverse
    },
    "nut-grid-item-content-square": {
      marginTop: "-100%"
    },
    "nut-grid-item-content-surround": {
      borderTopWidth: convertNumber2VP(1, "PX"),
      borderLeftWidth: convertNumber2VP(1, "PX")
    },
    "nut-grid-item-text": {
      color: "#1a1a1a",
      fontSize: convertNumber2VP(12, "PX"),
      wordBreak: "break-all",
      marginTop: convertNumber2VP(8, "PX"),
      marginRight: convertNumber2VP(0),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(0)
    },
    "nut-grid-item-text-horizontal": {
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(0),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(8, "PX")
    },
    "nut-grid-item-text-horizontal-reverse": {
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(8, "PX"),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(0)
    },
    "nut-grid-item-text-reverse": {
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(0),
      marginBottom: convertNumber2VP(8, "PX"),
      marginLeft: convertNumber2VP(0)
    }
  };
  return __inner_style_data__;
}
var defaultProps = {
  columns: 4,
  gap: 0,
  center: true,
  square: false,
  reverse: false,
  direction: "vertical"
};
var Grid = function Grid2(props) {
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
    children = _defaultProps$props.children,
    columns = _defaultProps$props.columns,
    gap = _defaultProps$props.gap,
    center = _defaultProps$props.center,
    square = _defaultProps$props.square,
    reverse = _defaultProps$props.reverse,
    direction = _defaultProps$props.direction,
    style = _defaultProps$props.style,
    className = _defaultProps$props.className,
    onClick = _defaultProps$props.onClick,
    rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var childrenDom = React__default.Children.toArray(children);
  var classPrefix = "nut-grid";
  var rootClass = function rootClass2() {
    return classNames(classPrefix, _defineProperty({}, "".concat(classPrefix, "-border"), !gap), className);
  };
  var rootStyle = function rootStyle2() {
    var styleSelf = {};
    if (style) {
      styleSelf = style;
    }
    if (gap) {
      styleSelf.paddingLeft = pxCheck(gap);
    }
    return styleSelf;
  };
  return __combine_nesting_style__(
  // @ts-ignore
  /* @__PURE__ */
  jsx(TaroViewTagName, _objectSpread2(_objectSpread2({
    __hmStyle: calcStaticStyle(__inner_style__(), rootClass()),
    className: rootClass(),
    style: rootStyle()
  }, rest), {}, {
    children: /* @__PURE__ */jsx(GridContext.Provider, {
      value: {
        onClick: onClick
      },
      children: childrenDom.map(function (item, idex) {
        return /* @__PURE__ */React__default.cloneElement(item, {
          index: idex,
          columns: columns,
          center: center,
          gap: gap,
          square: square,
          reverse: reverse,
          direction: direction
        });
      })
    })
  })), __nesting_style__());
};
Grid.displayName = "NutGrid";
Grid.Item = GridItem;

export { Grid as G };
