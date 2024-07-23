import { createNativePageConfig } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/plugin-framework-react/dist/runtime';
import { S, _ as _objectSpread2, k, e as ComponentDefaults, h as harmony, a as harmonyAndRn, b as _slicedToArray, f as classNames, g as _defineProperty, j as useRtl, p as pxTransform, u as useTranslate, H as Header, C as Cell } from '../../../index.taro.js';
import * as React from '@jd-oh/taro_library/src/main/ets/npm/react';
import React__default, { useState, useMemo } from '@jd-oh/taro_library/src/main/ets/npm/react';
import Taro, { pxTransform as pxTransform$1 } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroViewTagName, TaroIconTagName, TaroTextTagName, TaroScrollViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { jsx, jsxs } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';
import { S as SafeArea } from '../../../safearea.taro.js';
import ReactDOM from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/react';

var I = function I(M) {
  return /* @__PURE__ */React__default.createElement(S, _objectSpread2(_objectSpread2({}, M), {}, {
    name: M.name || "Cart",
    svg64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiMxQTFBMUEiIGQ9Ik0wIDY1LjE3YzAtMjQuMjEgMTkuMzctNDMuODQgNDMuMjQtNDMuODRoNTEuMTRjNzAuNDYgMCAxMjguODUgNTUuNCAxMzMuNTUgMTI2LjY4bC43NCAxMS4xMmg2NjEuNDZjODEuNDUgMCAxNDQgNzMuMTUgMTMyLjQ4IDE1NC45bC0zMy4wMiAyMzQuNDVjLTE0LjYzIDEwMy45NC05Ny40OSAxODQuMjMtMjAwLjU4IDE5NC4zNWwtNDY3LjQ3IDQ1Ljg2QzI0Ni40IDc5Ni4wNyAxODAuMTIgNzM5IDE3NS4xIDY2Mi42M2wtMzAuMDMtNDU2LjMydi0uNzZsLTMuNDItNTEuNjljLTEuNjYtMjUuMjQtMjIuMzQtNDQuODQtNDcuMjctNDQuODVINDMuMjRDMTkuMzUgMTA5LjAxIDAgODkuMzggMCA2NS4xN20yMzQuNDUgMTgxLjY2IDI2Ljk1IDQwOS45OGMxLjc3IDI3LjAzIDI1LjIyIDQ3LjIxIDUxLjgyIDQ0LjU5bDQ2Ny40Ny00NS44N2M2My4zNi02LjE5IDExNC4yOC01NS41NSAxMjMuMjktMTE5LjQ0TDkzNyAzMDEuNjNjNC4xLTI4LjkzLTE4LjA1LTU0LjgzLTQ2Ljg3LTU0LjgyaC02NTUuN3ptNjQuMjIgNjcwLjVhODUuMzMgODUuMzMgMCAxIDEtMTcwLjY3IDAgODUuMzMgODUuMzMgMCAwIDEgMTcwLjY3IDBNODk2IDEwMDIuNjdBODUuMzMgODUuMzMgMCAxIDAgODk2IDgzMmE4NS4zMyA4NS4zMyAwIDAgMCAwIDE3MC42NyIvPjwvc3ZnPg=="
  }));
};
I.defaultProps = k;

var __inner_style_data__$2;
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
  }, {
    "selectors": ["nut-hoverbutton-item-container:active", " ", "nut-hoverbutton-item-icon"],
    "declaration": {
      color: "#595959",
      fill: "#595959"
    }
  }, {
    "selectors": ["nut-hoverbutton-item-icon", " ", "nut-icon"],
    "declaration": {
      display: "block",
      width: convertNumber2VP(20, "PX"),
      height: convertNumber2VP(20, "PX")
    }
  }];
  return __nesting_style_data__$a;
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
    "nut-hoverbutton-item-container": {
      width: convertNumber2VP(40, "PX"),
      height: convertNumber2VP(40, "PX"),
      borderTopLeftRadius: convertNumber2VP(20, "PX"),
      borderTopRightRadius: convertNumber2VP(20, "PX"),
      borderBottomLeftRadius: convertNumber2VP(20, "PX"),
      borderBottomRightRadius: convertNumber2VP(20, "PX"),
      borderTopWidth: convertNumber2VP(1, "PX"),
      borderRightWidth: convertNumber2VP(1, "PX"),
      borderBottomWidth: convertNumber2VP(1, "PX"),
      borderLeftWidth: convertNumber2VP(1, "PX"),
      borderTopStyle: BorderStyle.Solid,
      borderRightStyle: BorderStyle.Solid,
      borderBottomStyle: BorderStyle.Solid,
      borderLeftStyle: BorderStyle.Solid,
      borderTopColor: "rgba(0, 0, 0, 0.06)",
      borderRightColor: "rgba(0, 0, 0, 0.06)",
      borderBottomColor: "rgba(0, 0, 0, 0.06)",
      borderLeftColor: "rgba(0, 0, 0, 0.06)",
      backgroundColor: "#fff"
    },
    "nut-hoverbutton-item-container-active": {
      backgroundColor: "#f6f6f6"
    },
    "nut-hoverbutton-item-container-harmony": _defineProperty({
      marginBottom: convertNumber2VP(16, "PX")
    }, "::last-child", {
      marginBottom: convertNumber2VP(0)
    }),
    "nut-hoverbutton-item-container:active": {
      backgroundColor: "#f6f6f6"
    },
    "nut-hoverbutton-item-icon": {
      width: convertNumber2VP(20, "PX"),
      height: convertNumber2VP(20, "PX"),
      marginTop: convertNumber2VP(9, "PX"),
      marginRight: convertNumber2VP(9, "PX"),
      marginBottom: convertNumber2VP(9, "PX"),
      marginLeft: convertNumber2VP(9, "PX"),
      color: "#1a1a1a",
      fill: "#1a1a1a"
    }
  };
  return __inner_style_data__$2;
}
var defaultProps$1 = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  icon: null,
  onClick: function onClick(value) {}
});
var classPrefix$1 = "nut-hoverbutton-item";
var isHarmony = harmony();
var isNative$1 = harmonyAndRn();
var HoverButtonItem = function HoverButtonItem2(props) {
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps$1), props),
    className = _defaultProps$props.className,
    style = _defaultProps$props.style,
    icon = _defaultProps$props.icon,
    onClick2 = _defaultProps$props.onClick;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isTouchStart = _useState2[0],
    setTouchStart = _useState2[1];
  var nativeProps = useMemo(function () {
    return isNative$1 ? {
      color: isTouchStart ? "#595959" : "#1A1A1A"
    } : {};
  }, [isTouchStart]);
  var handleClick = function handleClick2(event) {
    onClick2 && onClick2(event);
  };
  var handleActiveStart = function handleActiveStart2(event) {
    isNative$1 && setTouchStart(true);
  };
  var handleActiveEnd = function handleActiveEnd2(event) {
    isNative$1 && setTouchStart(false);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
    __hmStyle: calcStaticStyle(__inner_style__$2(), classNames(["".concat(classPrefix$1, "-container"), className], _defineProperty(_defineProperty({}, "".concat(classPrefix$1, "-container-active"), isNative$1 && isTouchStart), "".concat(classPrefix$1, "-container-harmony"), isHarmony))),
    className: classNames(["".concat(classPrefix$1, "-container"), className], _defineProperty(_defineProperty({}, "".concat(classPrefix$1, "-container-active"), isNative$1 && isTouchStart), "".concat(classPrefix$1, "-container-harmony"), isHarmony)),
    style: style,
    onTouchStart: handleActiveStart,
    onTouchEnd: handleActiveEnd,
    onTouchCancel: handleActiveEnd,
    onClick: handleClick,
    children: /* @__PURE__ */jsx(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classPrefix$1, "-icon")),
      className: "".concat(classPrefix$1, "-icon"),
      children: /* @__PURE__ */React__default.cloneElement(icon, _objectSpread2({
        className: "nut-icon",
        size: 20
      }, nativeProps))
    })
  }), __nesting_style__$a());
};
HoverButtonItem.displayName = "NutHoverButtonItem";

var __inner_style_data__$1;
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
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-hoverbutton-container"],
    "declaration": {
      left: convertNumber2VP(16, "PX")
    }
  }];
  return __nesting_style_data__$9;
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
    "nut-hoverbutton": {
      display: "flex",
      flexDirection: FlexDirection.Column,
      rowGap: convertNumber2VP(16, "PX"),
      columnGap: convertNumber2VP(16, "PX")
    },
    "nut-hoverbutton-container": {
      position: "fixed",
      right: convertNumber2VP(16, "PX"),
      bottom: convertNumber2VP(48, "PX"),
      zIndex: 10
    },
    "nut-hoverbutton-container-rn": {
      position: "absolute"
    },
    "nut-hoverbutton-container-rtl": {
      left: convertNumber2VP(16, "PX")
    }
  };
  return __inner_style_data__$1;
}
var defaultProps = _objectSpread2({}, ComponentDefaults);
var classPrefix = "nut-hoverbutton";
var HoverButton = function HoverButton2(props) {
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
    children = _defaultProps$props.children,
    zIndex = _defaultProps$props.zIndex,
    tabbarHeight = _defaultProps$props.tabbarHeight,
    className = _defaultProps$props.className,
    style = _defaultProps$props.style,
    icon = _defaultProps$props.icon,
    onClick = _defaultProps$props.onClick;
  var rtl = useRtl();
  var baseStyle = _objectSpread2({}, style);
  if (tabbarHeight) {
    baseStyle.bottom = pxTransform(tabbarHeight + 16);
  }
  if (typeof zIndex !== "undefined") {
    baseStyle.zIndex = zIndex;
  }
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    __hmStyle: calcStaticStyle(__inner_style__$1(), classNames(["".concat(classPrefix, "-container"), className], _defineProperty(_defineProperty({}, "".concat(classPrefix, "-container-rtl"), rtl), "".concat(classPrefix, "-container-rn"), Taro.getEnv() === "RN"))),
    className: classNames(["".concat(classPrefix, "-container"), className], _defineProperty(_defineProperty({}, "".concat(classPrefix, "-container-rtl"), rtl), "".concat(classPrefix, "-container-rn"), Taro.getEnv() === "RN")),
    style: baseStyle,
    children: [/* @__PURE__ */jsx(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__$1(), classPrefix),
      className: classPrefix,
      children: children || icon && /* @__PURE__ */jsx(HoverButtonItem, {
        icon: icon,
        onClick: onClick
      })
    }), /* @__PURE__ */jsx(SafeArea, {
      position: "bottom"
    })]
  }), __nesting_style__$9());
};
HoverButton.displayName = "NutHoverButton";
HoverButton.Item = HoverButtonItem;

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
var Demo1$1 = function Demo12() {
  var testClick = function testClick2(event) {
    console.log("点击事件");
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(HoverButton, {
    icon: /* @__PURE__ */jsx(I, {}),
    onClick: testClick
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
var Demo1 = function Demo12() {
  var testClick = function testClick2(event) {
    console.log("点击事件");
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
    children: /* @__PURE__ */jsx(HoverButton, {
      icon: /* @__PURE__ */jsx(TaroIconTagName, {
        type: "search"
      }),
      onClick: testClick
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
var Demo2$1 = function Demo22() {
  var testClick1 = function testClick12() {
    console.log("点击了第 1 个按钮");
  };
  var testClick2 = function testClick22() {
    console.log("点击了第 2 个按钮");
  };
  var testClick3 = function testClick32() {
    console.log("点击了第 3 个按钮");
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(HoverButton, {
    children: [/* @__PURE__ */jsx(HoverButton.Item, {
      icon: /* @__PURE__ */jsx(I, {}),
      onClick: testClick1
    }), /* @__PURE__ */jsx(HoverButton.Item, {
      icon: /* @__PURE__ */jsx(I, {}),
      onClick: testClick2
    }), /* @__PURE__ */jsx(HoverButton.Item, {
      icon: /* @__PURE__ */jsx(I, {}),
      onClick: testClick3
    })]
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
var Demo2 = function Demo22() {
  var testClick1 = function testClick12() {
    console.log("点击了第 1 个按钮");
  };
  var testClick2 = function testClick22() {
    console.log("点击了第 2 个按钮");
  };
  var testClick3 = function testClick32() {
    console.log("点击了第 3 个按钮");
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(HoverButton, {
    children: [/* @__PURE__ */jsx(HoverButton.Item, {
      icon: /* @__PURE__ */jsx(TaroIconTagName, {
        type: "search"
      }),
      onClick: testClick1
    }), /* @__PURE__ */jsx(HoverButton.Item, {
      icon: /* @__PURE__ */jsx(TaroIconTagName, {
        type: "search"
      }),
      onClick: testClick2
    }), /* @__PURE__ */jsx(HoverButton.Item, {
      icon: /* @__PURE__ */jsx(TaroIconTagName, {
        type: "search"
      }),
      onClick: testClick3
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
var Demo3$1 = function Demo32() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {}), __nesting_style__$4());
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
var Demo3 = function Demo32() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
    children: /* @__PURE__ */jsx(HoverButton, {
      icon: /* @__PURE__ */jsx(TaroIconTagName, {
        type: "search"
      }),
      tabbarHeight: 48
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
var App$1 = function App2() {
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    children: [/* @__PURE__ */jsx(HoverButton, {
      icon: /* @__PURE__ */jsx(I, {}),
      zIndex: 101
    }), /* @__PURE__ */jsx(TaroViewTagName, {
      style: {
        zIndex: 100,
        position: Taro.getEnv() === "RN" ? "absolute" : "fixed",
        width: "100%",
        left: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)"
      },
      children: /* @__PURE__ */jsx(TaroViewTagName, {
        style: {
          height: pxTransform$1(60),
          textAlign: "center",
          color: "#FFFFFF"
        },
        children: "这个图层层级为 100"
      })
    })]
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
var App = function App2() {
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    children: [/* @__PURE__ */jsx(HoverButton, {
      icon: /* @__PURE__ */jsx(TaroIconTagName, {
        type: "search"
      }),
      zIndex: 101
    }), /* @__PURE__ */jsx(TaroViewTagName, {
      style: {
        zIndex: 100,
        position: Taro.getEnv() === "RN" ? "absolute" : "fixed",
        width: "100%",
        left: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)"
      },
      children: /* @__PURE__ */jsx(TaroTextTagName, {
        style: {
          height: pxTransform$1(60),
          textAlign: "center",
          color: "#FFFFFF"
        },
        children: "这个图层层级为 100"
      })
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
var isNative = harmonyAndRn();
var HoverDemo = function HoverDemo2() {
  var _useTranslate = useTranslate({
      "zh-CN": {
        show: "展示",
        basic: "基础用法",
        multiButtons: "多个按钮",
        hasTabbar: "有底部导航栏的情况",
        customZIndex: "自定义层级",
        customSpacing: "自定义间距"
      },
      "zh-TW": {
        show: "展示",
        basic: "基礎用法",
        multiButtons: "多個按鈕",
        hasTabbar: "有底部導航欄的情況",
        customZIndex: "自定義層級",
        customSpacing: "自定義間距"
      },
      "en-US": {
        show: "Show ",
        basic: "Basic Usage",
        multiButtons: "Multiple Buttons",
        hasTabbar: "With Tabbar",
        customZIndex: "Custom Z-Index",
        customSpacing: "Custom Spacing"
      }
    }),
    _useTranslate2 = _slicedToArray(_useTranslate, 1),
    translated = _useTranslate2[0];
  var _useState = useState("basic"),
    _useState2 = _slicedToArray(_useState, 2),
    curDemo = _useState2[0],
    setCurDemo = _useState2[1];
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    children: [/* @__PURE__ */jsx(Header, {}), /* @__PURE__ */jsxs(TaroScrollViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), "demo ".concat(Taro.getEnv() === "WEB" ? "web" : "")),
      className: "demo ".concat(Taro.getEnv() === "WEB" ? "web" : ""),
      style: isNative ? {
        minHeight: 420
      } : {},
      children: [/* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.basic
      }), /* @__PURE__ */jsx(Cell, {
        title: "".concat(translated.show).concat(translated.basic),
        onClick: function onClick() {
          setCurDemo("basic");
        }
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.multiButtons
      }), /* @__PURE__ */jsx(Cell, {
        title: "".concat(translated.show).concat(translated.multiButtons),
        onClick: function onClick() {
          setCurDemo("multiButtons");
        }
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.hasTabbar
      }), /* @__PURE__ */jsx(Cell, {
        title: "".concat(translated.show).concat(translated.hasTabbar),
        onClick: function onClick() {
          setCurDemo("hasTabbar");
        }
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.customZIndex
      }), /* @__PURE__ */jsx(Cell, {
        title: "".concat(translated.show).concat(translated.customZIndex),
        onClick: function onClick() {
          setCurDemo("customZIndex");
        }
      })]
    }), curDemo === "basic" && (isNative ? /* @__PURE__ */jsx(Demo1, {}) : /* @__PURE__ */jsx(Demo1$1, {})), curDemo === "multiButtons" && (isNative ? /* @__PURE__ */jsx(Demo2, {}) : /* @__PURE__ */jsx(Demo2$1, {})), curDemo === "hasTabbar" && (isNative ? /* @__PURE__ */jsx(Demo3, {}) : /* @__PURE__ */jsx(Demo3$1, {})), curDemo === "customZIndex" && (isNative ? /* @__PURE__ */jsx(App, {}) : /* @__PURE__ */jsx(App$1, {}))]
  }), __nesting_style__());
};

var config = {
  "navigationBarTitleText": "HoverButton"
};
const index = (function () {
  return createNativePageConfig(HoverDemo, 'nav/pages/hoverbutton/index', React, ReactDOM, config);
});

export { config, index as default };
