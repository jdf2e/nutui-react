import { createNativePageConfig } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/plugin-framework-react/dist/runtime';
import { _ as _objectSpread2, e as ComponentDefaults, b as _slicedToArray, f as classNames, g as _defineProperty, C as Cell, u as useTranslate, H as Header } from '../../../index.taro.js';
import Taro from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroViewTagName, TaroTextTagName, TaroImageTagName, TaroScrollViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import * as React from '@jd-oh/taro_library/src/main/ets/npm/react';
import { useState } from '@jd-oh/taro_library/src/main/ets/npm/react';
import { jsx, Fragment, jsxs } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';
import ReactDOM from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/react';

var __inner_style_data__$1;
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
  }, {
    "selectors": ["nut-tag", " ", "nut-icon"],
    "declaration": {
      verticalAlign: Alignment.Center,
      marginLeft: convertNumber2VP(4, "PX")
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-tag", " ", "nut-icon"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: convertNumber2VP(4, "PX")
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-tag", " ", "nut-icon"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: convertNumber2VP(4, "PX")
    }
  }];
  return __nesting_style_data__$5;
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
    "nut-tag": {
      paddingTop: convertNumber2VP(0, "PX"),
      paddingRight: convertNumber2VP(2, "PX"),
      paddingBottom: convertNumber2VP(0, "PX"),
      paddingLeft: convertNumber2VP(2, "PX"),
      display: "flex",
      flexDirection: FlexDirection.Row,
      justifyContent: FlexAlign.Center,
      alignItems: ItemAlign.Center,
      fontSize: convertNumber2VP(10, "PX"),
      borderTopLeftRadius: convertNumber2VP(2, "PX"),
      borderTopRightRadius: convertNumber2VP(2, "PX"),
      borderBottomLeftRadius: convertNumber2VP(2, "PX"),
      borderBottomRightRadius: convertNumber2VP(2, "PX"),
      height: convertNumber2VP(14, "PX"),
      color: "#fff",
      borderTopWidth: convertNumber2VP(1, "PX"),
      borderRightWidth: convertNumber2VP(1, "PX"),
      borderBottomWidth: convertNumber2VP(1, "PX"),
      borderLeftWidth: convertNumber2VP(1, "PX"),
      borderTopStyle: BorderStyle.Solid,
      borderRightStyle: BorderStyle.Solid,
      borderBottomStyle: BorderStyle.Solid,
      borderLeftStyle: BorderStyle.Solid,
      borderTopColor: "rgba(0, 0, 0, 0)",
      borderRightColor: "rgba(0, 0, 0, 0)",
      borderBottomColor: "rgba(0, 0, 0, 0)",
      borderLeftColor: "rgba(0, 0, 0, 0)"
    },
    "nut-tag-close": {
      cursor: "pointer"
    },
    "nut-tag-custom-icon": {
      display: "flex",
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center,
      fontSize: convertNumber2VP(10, "PX")
    },
    "nut-tag-danger": {
      backgroundColor: "#ff0f23"
    },
    "nut-tag-default": {
      backgroundColor: "#1a1a1a"
    },
    "nut-tag-info": {
      backgroundColor: "#1988fa"
    },
    "nut-tag-mark": {
      borderTopLeftRadius: convertNumber2VP(0),
      borderTopRightRadius: convertNumber2VP(8, "PX"),
      borderBottomLeftRadius: convertNumber2VP(0),
      borderBottomRightRadius: convertNumber2VP(8, "PX")
    },
    "nut-tag-plain": {
      backgroundColor: "#fff",
      borderTopWidth: convertNumber2VP(1, "PX"),
      borderRightWidth: convertNumber2VP(1, "PX"),
      borderBottomWidth: convertNumber2VP(1, "PX"),
      borderLeftWidth: convertNumber2VP(1, "PX"),
      borderTopStyle: BorderStyle.Solid,
      borderRightStyle: BorderStyle.Solid,
      borderBottomStyle: BorderStyle.Solid,
      borderLeftStyle: BorderStyle.Solid,
      borderTopColor: "#1a1a1a",
      borderRightColor: "#1a1a1a",
      borderBottomColor: "#1a1a1a",
      borderLeftColor: "#1a1a1a"
    },
    "nut-tag-primary": {
      backgroundColor: "#fa2c19"
    },
    "nut-tag-round": {
      borderTopLeftRadius: convertNumber2VP(8, "PX"),
      borderTopRightRadius: convertNumber2VP(8, "PX"),
      borderBottomLeftRadius: convertNumber2VP(8, "PX"),
      borderBottomRightRadius: convertNumber2VP(8, "PX")
    },
    "nut-tag-success": {
      backgroundColor: "#4fc08d"
    },
    "nut-tag-text": {
      fontSize: convertNumber2VP(10, "PX"),
      color: "#fff"
    },
    "nut-tag-text-plain": {
      color: "#1a1a1a"
    },
    "nut-tag-warning": {
      backgroundColor: "#c47600"
    }
  };
  return __inner_style_data__$1;
}
var defaultProps = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  type: "default",
  background: "",
  color: "",
  plain: false,
  round: false,
  mark: false,
  closeable: false,
  closeIcon: null,
  onClose: function onClose(e) {},
  onClick: function onClick(e) {}
});
var Tag = function Tag2(props) {
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
    className = _defaultProps$props.className,
    style = _defaultProps$props.style,
    background = _defaultProps$props.background,
    plain = _defaultProps$props.plain,
    type = _defaultProps$props.type,
    round = _defaultProps$props.round,
    children = _defaultProps$props.children,
    mark = _defaultProps$props.mark,
    closeable = _defaultProps$props.closeable,
    closeIcon = _defaultProps$props.closeIcon,
    color = _defaultProps$props.color,
    onClick2 = _defaultProps$props.onClick,
    onClose2 = _defaultProps$props.onClose;
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var classPrefix = "nut-tag";
  var classes = classNames(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, classPrefix, true), "".concat(classPrefix, "-").concat(type), type), "".concat(classPrefix, "-plain"), plain), "".concat(classPrefix, "-round"), round), "".concat(classPrefix, "-mark"), mark), "".concat(classPrefix, "-close"), closeable), "".concat(className), className));
  var handleClick = function handleClick2(e) {
    onClick2 && onClick2(e);
  };
  var getStyle = function getStyle2() {
    var style2 = {};
    if (plain) {
      style2.borderColor = background;
    } else if (background) {
      style2.backgroundColor = background;
    }
    return style2;
  };
  var getTextStyle = function getTextStyle2() {
    var style2 = {};
    if (color) {
      style2.color = color;
    } else if (background && plain) {
      style2.color = background;
    }
    return style2;
  };
  var textClasses = classNames("".concat(classPrefix, "-text"), _defineProperty({}, "".concat(classPrefix, "-text-plain"), plain));
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: closeable ? visible && /* @__PURE__ */jsxs(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__$1(), classes),
      className: classes,
      style: _objectSpread2(_objectSpread2({}, style), getStyle()),
      onClick: function onClick3(e) {
        return handleClick(e);
      },
      children: [children && /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$1(), textClasses),
        className: textClasses,
        style: getTextStyle(),
        children: children
      }), closeIcon ? /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$1(), "".concat(classPrefix, "-custom-icon")),
        className: "".concat(classPrefix, "-custom-icon"),
        onClick: function onClick3(e) {
          setVisible(false);
          onClose2 && onClose2(e);
        },
        children: closeIcon
      }) : /* @__PURE__ */jsx(TaroTextTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$1(), "".concat(classPrefix, "-custom-icon")),
        onClick: function onClick3(e) {
          setVisible(false);
          onClose2 && onClose2(e);
        },
        className: "".concat(classPrefix, "-custom-icon"),
        children: "X"
      })]
    }) : /* @__PURE__ */jsx(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__$1(), classes),
      className: classes,
      style: _objectSpread2(_objectSpread2({}, style), getStyle()),
      onClick: function onClick3(e) {
        return handleClick(e);
      },
      children: children && /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$1(), textClasses),
        className: textClasses,
        style: getTextStyle(),
        children: children
      })
    })
  }), __nesting_style__$5());
};
Tag.displayName = "NutTag";

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
var Demo1 = function Demo12() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsxs(Cell.Group, {
      children: [/* @__PURE__ */jsx(Cell, {
        title: "primary",
        extra: /* @__PURE__ */jsx(Tag, {
          type: "primary",
          children: "标签"
        })
      }), /* @__PURE__ */jsx(Cell, {
        title: "info",
        extra: /* @__PURE__ */jsx(Tag, {
          type: "info",
          children: "标签"
        })
      }), /* @__PURE__ */jsx(Cell, {
        title: "success",
        extra: /* @__PURE__ */jsx(Tag, {
          type: "success",
          children: "标签"
        })
      }), /* @__PURE__ */jsx(Cell, {
        title: "danger",
        extra: /* @__PURE__ */jsx(Tag, {
          type: "danger",
          children: "标签"
        })
      }), /* @__PURE__ */jsx(Cell, {
        title: "warning",
        extra: /* @__PURE__ */jsx(Tag, {
          type: "warning",
          children: "标签"
        })
      })]
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
var Demo2 = function Demo22() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsxs(Cell.Group, {
      children: [/* @__PURE__ */jsx(Cell, {
        title: "plain",
        extra: /* @__PURE__ */jsx(Tag, {
          plain: true,
          children: "标签"
        })
      }), /* @__PURE__ */jsx(Cell, {
        title: "round",
        extra: /* @__PURE__ */jsx(Tag, {
          round: true,
          type: "primary",
          children: "标签"
        })
      }), /* @__PURE__ */jsx(Cell, {
        title: "mark",
        extra: /* @__PURE__ */jsx(Tag, {
          mark: true,
          type: "primary",
          children: "标签"
        })
      }), /* @__PURE__ */jsx(Cell, {
        title: "closeable",
        extra: /* @__PURE__ */jsx(Tag, {
          closeable: true,
          onClose: function onClose() {
            return Taro.showToast({
              title: "Tag closed"
            });
          },
          type: "primary",
          children: "标签"
        })
      }), /* @__PURE__ */jsx(Cell, {
        title: "closeable",
        extra: /* @__PURE__ */jsx(Tag, {
          closeable: true,
          closeIcon: "C",
          onClose: function onClose() {
            return Taro.showToast({
              title: "Tag closed"
            });
          },
          type: "primary",
          children: "标签"
        })
      })]
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
var Demo3 = function Demo32() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsxs(Cell.Group, {
      children: [/* @__PURE__ */jsx(Cell, {
        title: "background",
        extra: /* @__PURE__ */jsx(Tag, {
          background: "#FA685D",
          children: "标签"
        })
      }), /* @__PURE__ */jsx(Cell, {
        title: "color",
        extra: /* @__PURE__ */jsx(Tag, {
          background: "#E9E9E9",
          color: "#999999",
          children: "标签"
        })
      }), /* @__PURE__ */jsx(Cell, {
        title: "plain",
        extra: /* @__PURE__ */jsx(Tag, {
          background: "#FA2400",
          plain: true,
          children: "标签"
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
var Demo4 = function Demo42() {
  var convertSize = function convertSize2(size) {
    if (Taro.getEnv() === Taro.ENV_TYPE.RN) {
      return size;
    }
    return "".concat(size, "px");
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsx(Cell, {
      title: "image-text",
      extra: /* @__PURE__ */jsx(Tag, {
        type: "info",
        children: /* @__PURE__ */jsxs(TaroViewTagName, {
          style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "auto"
          },
          children: [/* @__PURE__ */jsx(TaroImageTagName, {
            style: {
              height: convertSize(10),
              width: convertSize(10)
            },
            src: "https://img13.360buyimg.com/imagetools/jfs/t1/249078/11/8928/559/6641c6f6F823e1c5e/a90a3b3cab20caaa.png"
          }), /* @__PURE__ */jsx(TaroTextTagName, {
            style: {
              fontSize: convertSize(10),
              color: "white"
            },
            children: "标签"
          })]
        })
      })
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
var TagDemo = function TagDemo2() {
  var _useTranslate = useTranslate({
      "zh-CN": {
        basic: "基础用法",
        style: "样式风格",
        customColor: "自定义颜色",
        imageText: "图文"
      },
      "en-US": {
        basic: "Basic Usage",
        style: "Style",
        customColor: "Custom Color",
        imageText: "image-text"
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
        children: translated.basic
      }), /* @__PURE__ */jsx(Demo1, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.style
      }), /* @__PURE__ */jsx(Demo2, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.customColor
      }), /* @__PURE__ */jsx(Demo3, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.imageText
      }), /* @__PURE__ */jsx(Demo4, {})]
    })]
  }), __nesting_style__());
};

var config = {
  "navigationBarTitleText": "Tag"
};
const index = (function () {
  return createNativePageConfig(TagDemo, 'exhibition/pages/tag/index', React, ReactDOM, config);
});

export { config, index as default };
