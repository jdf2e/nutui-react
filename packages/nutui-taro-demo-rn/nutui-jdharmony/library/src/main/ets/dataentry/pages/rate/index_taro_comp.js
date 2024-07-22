import { createNativePageConfig } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/plugin-framework-react/dist/runtime';
import { u as useTranslate, b as _slicedToArray, H as Header, C as Cell } from '../../../index.taro.js';
import Taro from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroScrollViewTagName, TaroViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { jsxs, Fragment, jsx } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';
import * as React from '@jd-oh/taro_library/src/main/ets/npm/react';
import ReactDOM from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/react';

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
var RateDemo = function RateDemo2() {
  var _useTranslate = useTranslate({
      "zh-CN": {
        basic: "基础用法",
        control: "受控方式",
        halfStar: "半星",
        customIcon: "自定义 Icon",
        customQuantity: "自定义数量",
        minimumNumber: "最少选中数量（支持半星）",
        customColor: "自定义颜色",
        disabled: "禁用状态",
        readOnly: "只读状态",
        event: "绑定事件",
        touchable: "滑动选择",
        touchend: "滑动事件"
      },
      "zh-TW": {
        basic: "基礎用法",
        control: "受控方式",
        halfStar: "半星",
        customIcon: "自定義 Icon",
        customQuantity: "自定義數量",
        minimumNumber: "最少選中數量（支持半星）",
        customColor: "自定義顏色",
        disabled: "禁用狀態",
        readOnly: "只讀狀態",
        event: "綁定事件",
        touchable: "滑動選擇",
        touchend: "滑動事件"
      },
      "en-US": {
        basic: "Basic Usage",
        control: "Controlled Mode",
        halfStar: "Half Star",
        customIcon: "Custom Icon",
        customQuantity: "Custom Quantity",
        minimumNumber: "Minimum Number(support half star)",
        customColor: "Custom Color",
        disabled: "Disabled",
        readOnly: "Readonly",
        event: "Event",
        touchable: "Touch to Select",
        touchend: "Touch Event"
      }
    }),
    _useTranslate2 = _slicedToArray(_useTranslate, 1),
    translated = _useTranslate2[0];
  var cellStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Header, {}), /* @__PURE__ */jsxs(TaroScrollViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), "demo ".concat(Taro.getEnv() === "WEB" ? "web" : "")),
      className: "demo ".concat(Taro.getEnv() === "WEB" ? "web" : ""),
      children: [/* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.basic
      }), /* @__PURE__ */jsx(Cell, {
        style: cellStyle,
        children: "TODO：icon 问题需先解决"
      })]
    })]
  }), __nesting_style__());
};

var config = {
  "navigationBarTitleText": "Rate"
};
const index = (function () {
  return createNativePageConfig(RateDemo, 'dataentry/pages/rate/index', React, ReactDOM, config);
});

export { config, index as default };
