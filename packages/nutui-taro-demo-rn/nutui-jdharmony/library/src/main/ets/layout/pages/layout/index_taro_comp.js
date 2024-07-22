import { createNativePageConfig } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/plugin-framework-react/dist/runtime';
import { _ as _objectSpread2, e as ComponentDefaults, b as _slicedToArray, f as classNames, g as _defineProperty, p as pxTransform, u as useTranslate, H as Header } from '../../../index.taro.js';
import Taro from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroViewTagName, TaroScrollViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import * as React from '@jd-oh/taro_library/src/main/ets/npm/react';
import React__default, { createContext, useState, useContext, useEffect } from '@jd-oh/taro_library/src/main/ets/npm/react';
import { jsx, jsxs, Fragment } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';
import ReactDOM from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/react';

var DataContext = /* @__PURE__ */createContext({});

var __inner_style_data__$2;
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
    "selectors": ["nut-rtl", " ", "nut-col"],
    "declaration": {
      float: "right"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-1"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "4.166667%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-10"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "41.666664%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-11"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "45.833336%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-12"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "50%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-13"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "54.166668%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-14"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "58.333332%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-15"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "62.5%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-16"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "66.66667%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-17"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "70.83333%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-18"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "75%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-19"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "79.16667%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-2"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "8.333334%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-20"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "83.33333%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-21"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "87.5%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-22"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "91.66667%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-23"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "95.83333%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-24"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "100%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-3"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "12.5%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-4"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "16.666668%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-5"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "20.833332%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-6"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "25%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-7"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "29.166666%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-8"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "33.333336%"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-col-offset-9"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "37.5%"
    }
  }, {
    "selectors": ["nut-rtl", " ", ["nut-col", "nut-col-gutter"]],
    "declaration": _defineProperty(_defineProperty({}, "::first-child", {
      paddingLeft: convertNumber2VP(0),
      paddingRight: convertNumber2VP(0)
    }), "::last-child", {
      paddingRight: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    })
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col"],
    "declaration": {
      float: "right"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-1"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "4.166667%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-10"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "41.666664%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-11"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "45.833336%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-12"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "50%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-13"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "54.166668%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-14"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "58.333332%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-15"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "62.5%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-16"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "66.66667%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-17"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "70.83333%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-18"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "75%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-19"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "79.16667%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-2"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "8.333334%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-20"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "83.33333%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-21"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "87.5%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-22"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "91.66667%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-23"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "95.83333%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-24"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "100%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-3"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "12.5%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-4"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "16.666668%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-5"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "20.833332%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-6"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "25%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-7"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "29.166666%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-8"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "33.333336%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-col-offset-9"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: "37.5%"
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", ["nut-col", "nut-col-gutter"]],
    "declaration": _defineProperty(_defineProperty({}, "::first-child", {
      paddingLeft: convertNumber2VP(0),
      paddingRight: convertNumber2VP(0)
    }), "::last-child", {
      paddingRight: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
    })
  }];
  return __nesting_style_data__$5;
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
    "nut-col": {
      boxSizing: "border-box",
      wordBreak: "break-all",
      marginBottom: convertNumber2VP(15, "PX")
    },
    "nut-col-1": {
      width: "4.166667%"
    },
    "nut-col-10": {
      width: "41.666664%"
    },
    "nut-col-11": {
      width: "45.833336%"
    },
    "nut-col-12": {
      width: "50%"
    },
    "nut-col-13": {
      width: "54.166668%"
    },
    "nut-col-14": {
      width: "58.333332%"
    },
    "nut-col-15": {
      width: "62.5%"
    },
    "nut-col-16": {
      width: "66.66667%"
    },
    "nut-col-17": {
      width: "70.83333%"
    },
    "nut-col-18": {
      width: "75%"
    },
    "nut-col-19": {
      width: "79.16667%"
    },
    "nut-col-2": {
      width: "8.333334%"
    },
    "nut-col-20": {
      width: "83.33333%"
    },
    "nut-col-21": {
      width: "87.5%"
    },
    "nut-col-22": {
      width: "91.66667%"
    },
    "nut-col-23": {
      width: "95.83333%"
    },
    "nut-col-24": {
      width: "100%"
    },
    "nut-col-3": {
      width: "12.5%"
    },
    "nut-col-4": {
      width: "16.666668%"
    },
    "nut-col-5": {
      width: "20.833332%"
    },
    "nut-col-6": {
      width: "25%"
    },
    "nut-col-7": {
      width: "29.166666%"
    },
    "nut-col-8": {
      width: "33.333336%"
    },
    "nut-col-9": {
      width: "37.5%"
    },
    "nut-col-offset-1": {
      marginLeft: "4.166667%"
    },
    "nut-col-offset-10": {
      marginLeft: "41.666664%"
    },
    "nut-col-offset-11": {
      marginLeft: "45.833336%"
    },
    "nut-col-offset-12": {
      marginLeft: "50%"
    },
    "nut-col-offset-13": {
      marginLeft: "54.166668%"
    },
    "nut-col-offset-14": {
      marginLeft: "58.333332%"
    },
    "nut-col-offset-15": {
      marginLeft: "62.5%"
    },
    "nut-col-offset-16": {
      marginLeft: "66.66667%"
    },
    "nut-col-offset-17": {
      marginLeft: "70.83333%"
    },
    "nut-col-offset-18": {
      marginLeft: "75%"
    },
    "nut-col-offset-19": {
      marginLeft: "79.16667%"
    },
    "nut-col-offset-2": {
      marginLeft: "8.333334%"
    },
    "nut-col-offset-20": {
      marginLeft: "83.33333%"
    },
    "nut-col-offset-21": {
      marginLeft: "87.5%"
    },
    "nut-col-offset-22": {
      marginLeft: "91.66667%"
    },
    "nut-col-offset-23": {
      marginLeft: "95.83333%"
    },
    "nut-col-offset-24": {
      marginLeft: "100%"
    },
    "nut-col-offset-3": {
      marginLeft: "12.5%"
    },
    "nut-col-offset-4": {
      marginLeft: "16.666668%"
    },
    "nut-col-offset-5": {
      marginLeft: "20.833332%"
    },
    "nut-col-offset-6": {
      marginLeft: "25%"
    },
    "nut-col-offset-7": {
      marginLeft: "29.166666%"
    },
    "nut-col-offset-8": {
      marginLeft: "33.333336%"
    },
    "nut-col-offset-9": {
      marginLeft: "37.5%"
    }
  };
  return __inner_style_data__$2;
}
var defaultProps$1 = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  span: "24",
  offset: "0",
  gutter: "0",
  isFirst: false,
  isLast: false
});
var Col = function Col2(props) {
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps$1), props),
    className = _defaultProps$props.className,
    style = _defaultProps$props.style,
    span = _defaultProps$props.span,
    offset = _defaultProps$props.offset,
    children = _defaultProps$props.children,
    isFirst = _defaultProps$props.isFirst,
    isLast = _defaultProps$props.isLast,
    _onClick = _defaultProps$props.onClick;
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    colName = _useState2[0],
    setColName = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    colStyle = _useState4[0],
    setColStyle = _useState4[1];
  var _useContext = useContext(DataContext),
    gutter = _useContext.gutter;
  var classs = function classs2() {
    var prefixCls = "nut-col";
    return "".concat(prefixCls, " ").concat(prefixCls, "-").concat(span, " ").concat(gutter ? "".concat(prefixCls, "-gutter") : "", " ").concat(prefixCls, "-offset-").concat(offset);
  };
  var getStyle = function getStyle2() {
    var style2 = {};
    if (!isFirst) {
      style2.paddingLeft = pxTransform(gutter / 2);
    }
    if (!isLast) {
      style2.paddingRight = pxTransform(gutter / 2);
    }
    return style2;
  };
  useEffect(function () {
    setColName(classs);
    setColStyle(getStyle);
  }, [span, offset, gutter]);
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
    __hmStyle: calcStaticStyle(__inner_style__$2(), classNames(colName, className)),
    className: classNames(colName, className),
    style: _objectSpread2(_objectSpread2({}, style), colStyle),
    onClick: function onClick(e) {
      _onClick && _onClick(e, "col");
    },
    children: children
  }, classNames(colName, className)), __nesting_style__$5());
};
Col.displayName = "NutCol";

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
    "h5-span": {},
    "nut-row": _defineProperty({
      display: "flex",
      flexDirection: FlexDirection.Row,
      width: "100%",
      overflow: "hidden"
    }, "::after", {
      display: "block",
      height: convertNumber2VP(0),
      clear: "both",
      visibility: "hidden"
    }),
    "nut-row-align-center": {
      alignItems: ItemAlign.Center
    },
    "nut-row-align-flex-end": {
      alignItems: ItemAlign.End
    },
    "nut-row-align-flex-start": {
      alignItems: ItemAlign.Start
    },
    "nut-row-flex": _defineProperty({
      display: "flex"
    }, "::after", {
      display: "none"
    }),
    "nut-row-flex-nowrap": {
      flexWrap: FlexWrap.NoWrap
    },
    "nut-row-flex-reverse": {
      flexWrap: FlexWrap.WrapReverse
    },
    "nut-row-flex-wrap": {
      flexWrap: FlexWrap.Wrap
    },
    "nut-row-justify-center": {
      justifyContent: FlexAlign.Center
    },
    "nut-row-justify-end": {
      justifyContent: FlexAlign.End
    },
    "nut-row-justify-space-around": {
      justifyContent: FlexAlign.SpaceAround
    },
    "nut-row-justify-space-between": {
      justifyContent: FlexAlign.SpaceBetween,
      alignItems: ItemAlign.Center
    }
  };
  return __inner_style_data__$1;
}
var classPrefix = "nut-row";
var defaultProps = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  type: "",
  justify: "start",
  align: "flex-start",
  wrap: "nowrap",
  gutter: "0"
});
var Row = function Row2(props) {
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
    className = _defaultProps$props.className,
    style = _defaultProps$props.style,
    children = _defaultProps$props.children,
    type = _defaultProps$props.type,
    justify = _defaultProps$props.justify,
    align = _defaultProps$props.align,
    wrap = _defaultProps$props.wrap,
    gutter = _defaultProps$props.gutter,
    _onClick = _defaultProps$props.onClick;
  var getClass = function getClass2(prefix, type2) {
    var classType = type2 ? "nut-row-".concat(prefix, "-").concat(type2) : "";
    if (prefix) return classType;
    if (type2) return "nut-row-".concat(type2);
    return "";
  };
  var getClasses = function getClasses2() {
    return classNames(classPrefix, getClass("", type), getClass("justify", justify), getClass("align", align), getClass("flex", wrap));
  };
  var parentRow = {
    gutter: gutter
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(DataContext.Provider, {
    value: parentRow,
    children: /* @__PURE__ */jsx(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__$1(), classNames(getClasses(), className)),
      className: classNames(getClasses(), className),
      style: style,
      onClick: function onClick(e) {
        _onClick === null || _onClick === void 0 || _onClick(e, "row");
      },
      children: React__default.Children.map(children, function (child, index) {
        var _child$type;
        return (child === null || child === void 0 || (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) === "NutCol" ? /* @__PURE__ */React__default.cloneElement(child, {
          isFirst: index === 0,
          isLast: index === React__default.Children.count(children) - 1
        }) : child;
      })
    })
  }), __nesting_style__$4());
};
Row.displayName = "NutRow";

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
var Demo1 = function Demo12() {
  var flexContent = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: pxTransform(40),
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
    borderRadius: pxTransform(6),
    backgroundColor: "#ff8881",
    fontSize: pxTransform(14)
  };
  var flexContentLight = _objectSpread2(_objectSpread2({}, flexContent), {}, {
    backgroundColor: "#ffc7c4"
  });
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Row, {
      children: /* @__PURE__ */jsx(Col, {
        span: "24",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:24"
        })
      })
    }), /* @__PURE__ */jsxs(Row, {
      children: [/* @__PURE__ */jsx(Col, {
        span: "12",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:12"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "12",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContentLight,
          children: "span:12"
        })
      })]
    }), /* @__PURE__ */jsxs(Row, {
      children: [/* @__PURE__ */jsx(Col, {
        span: "8",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:8"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "8",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContentLight,
          children: "span:8"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "8",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:8"
        })
      })]
    }), /* @__PURE__ */jsxs(Row, {
      children: [/* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:6"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContentLight,
          children: "span:6"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:6"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContentLight,
          children: "span:6"
        })
      })]
    })]
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
var Demo2 = function Demo22() {
  var flexContent = {
    display: "flex",
    width: "100%",
    height: pxTransform(40),
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
    borderRadius: pxTransform(6),
    backgroundColor: "#ff8881",
    fontSize: pxTransform(14)
  };
  var flexContentLight = _objectSpread2(_objectSpread2({}, flexContent), {}, {
    backgroundColor: "#ffc7c4"
  });
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsxs(Row, {
      gutter: "10",
      children: [/* @__PURE__ */jsx(Col, {
        span: "8",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:8"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "8",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContentLight,
          children: "span:8"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "8",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:8"
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
var Demo3 = function Demo32() {
  var flexContent = {
    display: "flex",
    width: "100%",
    height: pxTransform(40),
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
    borderRadius: pxTransform(6),
    backgroundColor: "#ff8881",
    fontSize: pxTransform(14)
  };
  var flexContentLight = _objectSpread2(_objectSpread2({}, flexContent), {}, {
    backgroundColor: "#ffc7c4"
  });
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsxs(Row, {
      type: "flex",
      wrap: "nowrap",
      children: [/* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:6"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContentLight,
          children: "span:6"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:6"
        })
      })]
    }), /* @__PURE__ */jsxs(Row, {
      type: "flex",
      justify: "center",
      children: [/* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:6"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContentLight,
          children: "span:6"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:6"
        })
      })]
    }), /* @__PURE__ */jsxs(Row, {
      type: "flex",
      justify: "end",
      children: [/* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:6"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContentLight,
          children: "span:6"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:6"
        })
      })]
    }), /* @__PURE__ */jsxs(Row, {
      type: "flex",
      justify: "space-between",
      children: [/* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:6"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContentLight,
          children: "span:6"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:6"
        })
      })]
    }), /* @__PURE__ */jsxs(Row, {
      type: "flex",
      justify: "space-around",
      children: [/* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:6"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContentLight,
          children: "span:6"
        })
      }), /* @__PURE__ */jsx(Col, {
        span: "6",
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: flexContent,
          children: "span:6"
        })
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
var LayoutDemo = function LayoutDemo2() {
  var _useTranslate = useTranslate({
      "zh-CN": {
        title1: "基础布局",
        title2: "分栏间隔",
        title3: "Flex布局"
      },
      "zh-TW": {
        title1: "基礎佈局",
        title2: "分欄間隔",
        title3: "Flex佈局"
      },
      "en-US": {
        title1: "Basic layout",
        title2: "Column interval",
        title3: "Flex layout"
      },
      "id-ID": {
        title1: "Tata letak dasar",
        title2: "interval kolom",
        title3: "Tata letak fleksibel"
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
        children: translated.title1
      }), /* @__PURE__ */jsx(Demo1, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title2
      }), /* @__PURE__ */jsx(Demo2, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.title3
      }), /* @__PURE__ */jsx(Demo3, {})]
    })]
  }), __nesting_style__());
};

var config = {
  "navigationBarTitleText": "Layout"
};
const index = (function () {
  return createNativePageConfig(LayoutDemo, 'layout/pages/layout/index', React, ReactDOM, config);
});

export { config, index as default };
