import { createNativePageConfig } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/plugin-framework-react/dist/runtime';
import { S, _ as _objectSpread2, k, e as ComponentDefaults, a as harmonyAndRn, j as useRtl, b as _slicedToArray, g as _defineProperty, p as pxTransform, f as classNames, r as rn, C as Cell, h as harmony, u as useTranslate, H as Header } from '../../../index.taro.js';
import Taro, { getSystemInfo, usePageScroll, pageScrollTo } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroViewTagName, TaroIconTagName, TaroScrollViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import * as React from '@jd-oh/taro_library/src/main/ets/npm/react';
import React__default, { useState, useRef, useEffect, useCallback, useMemo } from '@jd-oh/taro_library/src/main/ets/npm/react';
import { jsx, jsxs } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';
import ReactDOM from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/react';

var D = function D(M) {
  return /* @__PURE__ */React__default.createElement(S, _objectSpread2(_objectSpread2({}, M), {}, {
    name: M.name || "Top",
    svg64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiMxQTFBMUEiIGQ9Ik0xMjggMGE0Mi42NyA0Mi42NyAwIDEgMCAwIDg1LjMzaDc2OEE0Mi42NyA0Mi42NyAwIDEgMCA4OTYgMHptMzkxLjIxIDE3My40MmExMC44OCAxMC44OCAwIDAgMC0xNC40MiAwTDMuNjEgNjE5LjY3YTEwLjcxIDEwLjcxIDAgMCAwIDcuMjEgMTguNjdoMjQxLjM0djI1Ny4xMWMwIDcxIDU4LjA1IDEyOC41NSAxMjkuNjQgMTI4LjU1aDI2MC40YzcxLjU5IDAgMTI5LjY0LTU3LjU2IDEyOS42NC0xMjguNTVWNjM4LjM0aDI0MS4zNGExMC43MSAxMC43MSAwIDAgMCA3LjIxLTE4LjY3ek0zMzguNiA4OTUuNDVWNTUyLjY0SDIwOC4yMUw1MTIgMjgyLjE1bDMwMy43NyAyNzAuNDlINjg1LjQydjM0Mi44M2MwIDIzLjY0LTE5LjM3IDQyLjg0LTQzLjIyIDQyLjgzSDM4MS44Yy0yMy44NSAwLTQzLjItMTkuMi00My4yLTQyLjg1Ii8+PC9zdmc+"
  }));
};
D.defaultProps = k;

var __inner_style_data__$1;
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
    "nut-backtop": {
      display: "none",
      position: "fixed"
    },
    "nut-backtop-main": {
      transition: "all .2s ease-in-out",
      color: "#1a1a1a"
    },
    "nut-backtop-rn": {
      position: "absolute"
    },
    "nut-backtop-show": {
      width: convertNumber2VP(40, "PX"),
      height: convertNumber2VP(40, "PX"),
      display: "flex",
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center,
      backgroundColor: "#fff",
      color: "#1a1a1a",
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
      borderTopLeftRadius: convertNumber2VP(21, "PX"),
      borderTopRightRadius: convertNumber2VP(21, "PX"),
      borderBottomLeftRadius: convertNumber2VP(21, "PX"),
      borderBottomRightRadius: convertNumber2VP(21, "PX"),
      zIndex: 100
    },
    "nut-backtop-show-active": {
      backgroundColor: "#f5f6fa"
    },
    "nut-backtop-show:active": {
      backgroundColor: "#f5f6fa"
    }
  };
  return __inner_style_data__$1;
}
var defaultProps = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  threshold: 200,
  zIndex: 900,
  duration: 1e3
});
var isNative = harmonyAndRn();
var BackTop = function BackTop2(props) {
  var rtl = useRtl();
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
    children = _defaultProps$props.children,
    threshold = _defaultProps$props.threshold,
    zIndex = _defaultProps$props.zIndex,
    className = _defaultProps$props.className,
    duration = _defaultProps$props.duration,
    style = _defaultProps$props.style,
    scrollRes = _defaultProps$props.scrollRes,
    onClick = _defaultProps$props.onClick;
  var classPrefix = "nut-backtop";
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    backTop = _useState2[0],
    SetBackTop = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isTouchStart = _useState4[0],
    setTouchStart = _useState4[1];
  var systemInfo = useRef({});
  useEffect(function () {
    getSystemInfo().then(function (res) {
      systemInfo.current = res;
    });
  }, []);
  var handleActiveStart = useCallback(function () {
    isNative && setTouchStart(true);
  }, []);
  var handleActiveEnd = useCallback(function () {
    isNative && setTouchStart(false);
  }, []);
  var onScroll = useCallback(function (res) {
    var scrollTop = res.scrollTop;
    scrollTop >= threshold ? SetBackTop(true) : SetBackTop(false);
  }, [threshold]);
  usePageScroll(onScroll);
  useEffect(function () {
    if (!scrollRes) return;
    onScroll(scrollRes);
  }, [onScroll, scrollRes]);
  var goTop = useCallback(function (e) {
    onClick === null || onClick === void 0 || onClick(e);
    pageScrollTo({
      scrollTop: 0,
      duration: duration > 0 ? duration : 0
    });
  }, [duration, onClick]);
  var styles = useMemo(function () {
    return Object.keys(style || {}).length !== 0 ? _objectSpread2({
      zIndex: zIndex
    }, style) : _defineProperty(_defineProperty(_defineProperty({}, rtl ? "left" : "right", pxTransform(10)), "bottom", pxTransform(20)), "zIndex", zIndex);
  }, [rtl, style, zIndex]);
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
    __hmStyle: calcStaticStyle(__inner_style__$1(), classNames(classPrefix, _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-show"), backTop), "".concat(classPrefix, "-show-active"), isNative && isTouchStart), "".concat(classPrefix, "-rn"), rn()), className)),
    className: classNames(classPrefix, _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-show"), backTop), "".concat(classPrefix, "-show-active"), isNative && isTouchStart), "".concat(classPrefix, "-rn"), rn()), className),
    style: styles,
    onClick: function onClick2(e) {
      goTop(e);
    },
    onTouchStart: handleActiveStart,
    onTouchEnd: handleActiveEnd,
    onTouchCancel: handleActiveEnd,
    children: children || /* @__PURE__ */jsx(D, {
      size: 19,
      className: "nut-backtop-main",
      __styleSheet: {
        key: "nut-backtop-main",
        value: calcStaticStyle(__inner_style__$1(), "nut-backtop-main")
      },
      __hmStyle: calcStaticStyle(__inner_style__$1(), "nut-backtop-main")
    })
  }), __nesting_style__$3());
};
BackTop.displayName = "NutBackTop";

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
var Demo1 = function Demo12() {
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    children: [new Array(24).fill(0).map(function (_, index) {
      return /* @__PURE__ */jsxs(Cell, {
        children: ["我是测试数据", index]
      }, index);
    }), /* @__PURE__ */jsx(BackTop, {
      threshold: 200,
      style: {
        bottom: "50px",
        insetInlineEnd: "20px"
      },
      children: /* @__PURE__ */jsxs(TaroViewTagName, {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        },
        children: [/* @__PURE__ */jsx(TaroIconTagName, {
          size: 12,
          type: "search"
        }), /* @__PURE__ */jsx(TaroViewTagName, {
          style: {
            fontSize: "12px"
          },
          children: "顶部"
        })]
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
var Demo5 = function Demo52(props) {
  var children = props.children;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    scrollRes = _useState2[0],
    setScrollRes = _useState2[1];
  var sv = useRef(null);
  return __combine_nesting_style__(
  // @TODO 待 taro 侧支持获取视窗尺寸后调整
  /* @__PURE__ */
  jsxs(TaroViewTagName, {
    style: {
      position: "relative",
      width: "100%",
      height: rn() ? pxTransform(710) : "100%"
    },
    children: [/* @__PURE__ */jsx(TaroScrollViewTagName, {
      onScroll: function onScroll(res) {
        setScrollRes(res.detail);
      },
      ref: sv,
      style: {
        height: "auto"
      },
      children: children
    }), /* @__PURE__ */jsx(BackTop, {
      threshold: 200,
      scrollRes: scrollRes,
      onClick: function onClick() {
        if (harmony()) {
          var _sv$current;
          if (!((_sv$current = sv.current) !== null && _sv$current !== void 0 && (_sv$current = _sv$current.scroller) !== null && _sv$current !== void 0 && _sv$current.scrollEdge)) return;
          sv.current.scroller.scrollEdge(Edge.Top);
        }
        if (rn()) {
          var _sv$current2;
          if (!((_sv$current2 = sv.current) !== null && _sv$current2 !== void 0 && _sv$current2.scrollToOffset)) return;
          sv.current.scrollToOffset({
            offset: 0
          });
        }
      },
      children: /* @__PURE__ */jsxs(TaroViewTagName, {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        },
        children: [/* @__PURE__ */jsx(TaroIconTagName, {
          size: 12,
          type: "search"
        }), /* @__PURE__ */jsx(TaroViewTagName, {
          style: {
            fontSize: pxTransform(12)
          },
          children: "顶部"
        })]
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
var BackTopDemo = function BackTopDemo2() {
  var _useTranslate = useTranslate({
      "zh-CN": {
        title: "基础用法"
      },
      "en-US": {
        title: "Basic Usage"
      },
      "zh-TW": {
        title: "基礎用法"
      }
    }),
    _useTranslate2 = _slicedToArray(_useTranslate, 1),
    translated = _useTranslate2[0];
  var demoStyle = {
    height: "100%",
    minHeight: "auto"
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    style: {
      position: "relative"
    },
    children: [/* @__PURE__ */jsx(Header, {}), harmonyAndRn() ? /* @__PURE__ */jsx(Demo5, {
      children: /* @__PURE__ */jsxs(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "demo ".concat(Taro.getEnv() === "WEB" ? "web" : "")),
        className: "demo ".concat(Taro.getEnv() === "WEB" ? "web" : ""),
        style: {
          height: "auto"
        },
        children: [/* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
          className: "h2",
          children: translated.title
        }), new Array(24).fill(0).map(function (_, index) {
          return /* @__PURE__ */jsxs(Cell, {
            children: ["我是测试数据", index]
          }, index);
        })]
      })
    }) : /* @__PURE__ */jsxs(TaroScrollViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), "demo ".concat(Taro.getEnv() === "WEB" ? "web" : "")),
      className: "demo ".concat(Taro.getEnv() === "WEB" ? "web" : ""),
      style: demoStyle,
      children: [/* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title
      }), /* @__PURE__ */jsx(Demo1, {})]
    })]
  }), __nesting_style__());
};

var config = {
  "navigationBarTitleText": "BackTop"
};
const index = (function () {
  return createNativePageConfig(BackTopDemo, 'nav/pages/backtop/index', React, ReactDOM, config);
});

export { config, index as default };
