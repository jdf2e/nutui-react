import { createNativePageConfig } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/plugin-framework-react/dist/runtime';
import { S, _ as _objectSpread2, k, C as Cell, h as harmony, p as pxTransform, a as harmonyAndRn, r as rn, b as _slicedToArray, u as useTranslate, H as Header } from '../../../index.taro.js';
import Taro from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroScrollViewTagName, TaroViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { B as Button } from '../../../button.taro.js';
import { __combine_nesting_style__, convertNumber2VP, calcStaticStyle } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { jsxs, jsx, Fragment } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';
import { a } from '../../../Plus.js';
import * as React from '@jd-oh/taro_library/src/main/ets/npm/react';
import React__default, { useState } from '@jd-oh/taro_library/src/main/ets/npm/react';
import ReactDOM from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/react';

var D = function D(M) {
  return /* @__PURE__ */React__default.createElement(S, _objectSpread2(_objectSpread2({}, M), {}, {
    name: M.name || "Star",
    svg64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiMxQTFBMUEiIGQ9Ik02MzQuNjcgMjcyLjNhMTkxLjgxIDE5MS44MSAwIDAgMCAxMDcuMDkgNzcuNTdsMTgxLjU1IDUxLjNhMjAuNzEgMjAuNzEgMCAwIDEgMTAuODggMzIuODFMODE3LjU0IDU4MS44N2ExOTEuMyAxOTEuMyAwIDAgMC00MC45NiAxMjUuNzZsNy4xNiAxODcuOTlhMjEuMTIgMjEuMTIgMCAwIDEtMjguNTIgMjAuMzFsLTE3Ny4xMS02NC45YTE5Mi4xMSAxOTIuMTEgMCAwIDAtMTMyLjE4IDBsLTE3Ny4xMyA2NC45YTIxLjEyIDIxLjEyIDAgMCAxLTI4LjUyLTIwLjMxbDcuMTctMTg3Ljk5YTE5MS4zIDE5MS4zIDAgMCAwLTQwLjk2LTEyNS43Nkw4OS44NiA0MzMuOThhMjAuNzEgMjAuNzEgMCAwIDEgMTAuODgtMzIuODFsMTgxLjU0LTUxLjNhMTkxLjgxIDE5MS44MSAwIDAgMCAxMDcuMDUtNzcuNTdsMTA1LjAzLTE1Ni4yOWEyMS4zMyAyMS4zMyAwIDAgMSAzNS4yOCAwem0tMzQuMi0yMDMuODhjLTQyLjE4LTYyLjc4LTEzNC43Ni02Mi43OC0xNzYuOTQgMEwzMTguNTEgMjI0LjdhMTA2LjQ3IDEwNi40NyAwIDAgMS01OS40NCA0My4wNUw3Ny41MyAzMTkuMDRDNC42MSAzMzkuNjUtMjQgNDI3LjQxIDIyLjg1IDQ4Ni44M2wxMTYuNjMgMTQ3Ljg4YTEwNS45NiAxMDUuOTYgMCAwIDEgMjIuNyA2OS42NWwtNy4xNyAxODcuOTljLTIuODggNzUuNTIgNzIuMDIgMTI5Ljc1IDE0My4xNCAxMDMuNjhsMTc3LjExLTY0Ljg3YTEwNi43OSAxMDYuNzkgMCAwIDEgNzMuNDggMGwxNzcuMTEgNjQuODljNzEuMTMgMjYuMDUgMTQ2LjAzLTI4LjIgMTQzLjE0LTEwMy42OGwtNy4xNy0xODguMDFhMTA1Ljk0IDEwNS45NCAwIDAgMSAyMi43LTY5LjY1bDExNi42My0xNDcuODhjNDYuODUtNTkuMzkgMTguMjQtMTQ3LjItNTQuNjgtMTY3Ljc5bC0xODEuNTQtNTEuMjlhMTA2LjQ3IDEwNi40NyAwIDAgMS01OS40NC00My4wNXoiLz48L3N2Zz4="
  }));
};
D.defaultProps = k;

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
var Demo1 = function Demo12() {
  var marginStyle = {
    margin: "8px"
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Cell, {
    style: {
      flexWrap: "wrap"
    },
    children: [/* @__PURE__ */jsx(Button, {
      openType: "share",
      style: marginStyle,
      children: "Share"
    }), /* @__PURE__ */jsx(Button, {
      openType: "openSetting",
      style: marginStyle,
      children: "打开授权设置页"
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
var Demo2 = function Demo22() {
  var marginStyle = harmony() ? {
    width: pxTransform(90),
    marginRight: pxTransform(8),
    marginTop: pxTransform(8),
    marginLeft: pxTransform(8),
    marginBottom: pxTransform(8)
  } : {
    marginRight: 8,
    marginTop: 8,
    marginLeft: 8,
    marginBottom: 8
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Cell, {
    style: {
      flexWrap: "wrap"
    },
    children: [/* @__PURE__ */jsx(Button, {
      type: "primary",
      style: marginStyle,
      children: "Primary"
    }), /* @__PURE__ */jsx(Button, {
      type: "info",
      style: marginStyle,
      children: "Info"
    }), /* @__PURE__ */jsx(Button, {
      type: "default",
      style: marginStyle,
      children: "Default"
    }), /* @__PURE__ */jsx(Button, {
      type: "danger",
      style: marginStyle,
      children: "Danger"
    }), /* @__PURE__ */jsx(Button, {
      type: "warning",
      style: marginStyle,
      children: "Warning"
    }), /* @__PURE__ */jsx(Button, {
      type: "success",
      style: marginStyle,
      children: "Success"
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
var Demo3 = function Demo32() {
  var marginStyle = {
    width: pxTransform(80),
    marginRight: pxTransform(8),
    marginTop: pxTransform(8),
    marginLeft: pxTransform(8),
    marginBottom: pxTransform(8)
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Cell, {
    style: {
      flexWrap: "wrap"
    },
    children: [/* @__PURE__ */jsx(Button, {
      type: "primary",
      fill: "solid",
      style: marginStyle,
      children: "Solid"
    }), /* @__PURE__ */jsx(Button, {
      type: "primary",
      fill: "outline",
      style: marginStyle,
      children: "Outline"
    }), /* @__PURE__ */jsx(Button, {
      type: "primary",
      fill: "dashed",
      style: marginStyle,
      children: "Dashed"
    }), /* @__PURE__ */jsx(Button, {
      fill: "none",
      style: marginStyle,
      children: "None"
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
var Demo4 = function Demo42() {
  var marginStyle = {
    marginRight: pxTransform(8),
    marginTop: pxTransform(8),
    marginLeft: pxTransform(8),
    marginBottom: pxTransform(8)
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: !harmonyAndRn() ? /* @__PURE__ */jsxs(Cell, {
      style: {
        flexWrap: "wrap"
      },
      children: [/* @__PURE__ */jsx(Button, {
        type: "primary",
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: marginStyle,
        children: "Button"
      }), /* @__PURE__ */jsx(Button, {
        type: "primary",
        fill: "outline",
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: marginStyle,
        children: "Button"
      }), /* @__PURE__ */jsx(Button, {
        type: "primary",
        fill: "dashed",
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: marginStyle,
        children: "Button"
      }), /* @__PURE__ */jsx(Button, {
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: {
          margin: 8,
          backgroundColor: "var(--nutui-color-primary-light)",
          borderColor: "var(--nutui-color-primary)",
          color: "var(--nutui-color-primary)"
        },
        children: "Button"
      }), /* @__PURE__ */jsx(Button, {
        type: "default",
        fill: "none",
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: {
          margin: 8,
          backgroundColor: "var(--nutui-gray-3)",
          color: "var(--nutui-gray-7)"
        },
        children: "Button"
      }), /* @__PURE__ */jsx(Button, {
        type: "default",
        fill: "none",
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: {
          margin: 8,
          backgroundColor: "var(--nutui-gray-1)",
          color: "var(--nutui-gray-7)"
        },
        children: "Button"
      }), /* @__PURE__ */jsx(Button, {
        type: "default",
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: {
          margin: 8
        },
        children: "Button"
      }), /* @__PURE__ */jsx(Button, {
        shape: "square",
        fill: "outline",
        type: "primary",
        icon: /* @__PURE__ */jsx(a, {}),
        style: marginStyle
      }), /* @__PURE__ */jsx(Button, {
        fill: "outline",
        type: "primary",
        icon: /* @__PURE__ */jsx(a, {}),
        style: marginStyle
      }), /* @__PURE__ */jsx(Button, {
        type: "primary",
        fill: "dashed",
        icon: /* @__PURE__ */jsx(a, {}),
        style: marginStyle
      }), /* @__PURE__ */jsx(Button, {
        shape: "round",
        type: "primary",
        size: "large",
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: marginStyle,
        children: "Button"
      }), /* @__PURE__ */jsx(Button, {
        shape: "round",
        type: "primary",
        size: "xlarge",
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: marginStyle,
        children: "Button"
      })]
    }) : /* @__PURE__ */jsxs(Cell, {
      style: {
        flexWrap: "wrap"
      },
      children: [/* @__PURE__ */jsx(Button, {
        type: "primary",
        style: marginStyle,
        children: "Button"
      }), /* @__PURE__ */jsx(Button, {
        type: "primary",
        fill: "outline",
        style: marginStyle,
        children: "Button"
      }), /* @__PURE__ */jsx(Button, {
        type: "primary",
        fill: "dashed",
        style: marginStyle,
        children: "Button"
      }), /* @__PURE__ */jsx(Button, {
        style: _objectSpread2(_objectSpread2({}, {
          backgroundColor: "#ffebf1",
          borderColor: "#ff0f23",
          color: "#ff0f23"
        }), marginStyle),
        children: "Button"
      }), /* @__PURE__ */jsx(Button, {
        type: "default",
        fill: "none",
        style: _objectSpread2(_objectSpread2({}, {
          backgroundColor: "#f5f6fa",
          color: "#1a1a1a"
        }), marginStyle),
        children: "Button"
      }), /* @__PURE__ */jsx(Button, {
        type: "default",
        fill: "none",
        style: _objectSpread2(_objectSpread2({}, {
          backgroundColor: "#ffffff",
          color: "#1a1a1a"
        }), marginStyle),
        children: "Button"
      }), /* @__PURE__ */jsx(Button, {
        type: "default",
        style: marginStyle,
        children: "Button"
      }), /* @__PURE__ */jsx(Button, {
        shape: "square",
        fill: "outline",
        type: "primary",
        style: _objectSpread2({
          width: pxTransform(32)
        }, marginStyle)
      }), /* @__PURE__ */jsx(Button, {
        fill: "outline",
        type: "primary",
        style: _objectSpread2({
          width: pxTransform(32)
        }, marginStyle)
      }), /* @__PURE__ */jsx(Button, {
        type: "primary",
        fill: "dashed",
        style: _objectSpread2({
          width: pxTransform(32)
        }, marginStyle)
      }), /* @__PURE__ */jsx(Button, {
        shape: "round",
        type: "primary",
        size: "large",
        style: _objectSpread2({
          width: pxTransform(100)
        }, marginStyle),
        children: "Button"
      }), /* @__PURE__ */jsx(Button, {
        shape: "round",
        type: "primary",
        size: "xlarge",
        style: _objectSpread2({
          width: pxTransform(200)
        }, marginStyle),
        children: "Button"
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
var Demo5 = function Demo52() {
  var marginStyle = {
    marginRight: pxTransform(8),
    marginTop: pxTransform(8),
    marginLeft: pxTransform(8),
    marginBottom: pxTransform(8)
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: !harmonyAndRn() ? /* @__PURE__ */jsxs(Cell, {
      style: {
        flexWrap: "wrap"
      },
      children: [/* @__PURE__ */jsx(Button, {
        disabled: true,
        type: "primary",
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: marginStyle,
        children: "Disabled"
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        type: "primary",
        fill: "outline",
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: marginStyle,
        children: "Disabled"
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        type: "primary",
        fill: "dashed",
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: marginStyle,
        children: "Disabled"
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        fill: "solid",
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: marginStyle,
        children: "Disabled"
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        type: "default",
        fill: "none",
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: {
          margin: 8,
          backgroundColor: "var(--nutui-gray-3)",
          color: "var(--nutui-gray-5)"
        },
        children: "Disabled"
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        type: "default",
        fill: "none",
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: {
          margin: 8,
          backgroundColor: "var(--nutui-gray-1)",
          color: "var(--nutui-gray-5)"
        },
        children: "Disabled"
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: {
          margin: 8
        },
        children: "Disabled"
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        shape: "square",
        fill: "outline",
        type: "primary",
        icon: /* @__PURE__ */jsx(a, {
          size: "20"
        }),
        style: marginStyle
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        type: "primary",
        icon: /* @__PURE__ */jsx(a, {
          size: "20"
        }),
        style: marginStyle
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        type: "primary",
        fill: "dashed",
        icon: /* @__PURE__ */jsx(a, {}),
        style: marginStyle
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        shape: "round",
        type: "primary",
        size: "large",
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: marginStyle,
        children: "Disabled"
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        shape: "round",
        type: "primary",
        size: "xlarge",
        icon: /* @__PURE__ */jsx(D, {}),
        rightIcon: /* @__PURE__ */jsx(D, {}),
        style: marginStyle,
        children: "Disabled"
      })]
    }) : /* @__PURE__ */jsxs(Cell, {
      style: {
        flexWrap: "wrap"
      },
      children: [/* @__PURE__ */jsx(Button, {
        disabled: true,
        type: "primary",
        style: _objectSpread2({
          width: pxTransform(harmony() ? 100 : 80)
        }, marginStyle),
        children: "Disabled"
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        type: "primary",
        fill: "outline",
        style: _objectSpread2({
          width: pxTransform(harmony() ? 100 : 80)
        }, marginStyle),
        children: "Disabled"
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        type: "primary",
        fill: "dashed",
        style: _objectSpread2({
          width: pxTransform(harmony() ? 100 : 80)
        }, marginStyle),
        children: "Disabled"
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        fill: "solid",
        style: _objectSpread2({
          width: pxTransform(harmony() ? 100 : 80)
        }, marginStyle),
        children: "Disabled"
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        type: "default",
        fill: "none",
        style: _objectSpread2(_objectSpread2({}, {
          backgroundColor: "#f6f6f6",
          color: "#888b94",
          width: pxTransform(harmony() ? 100 : 80)
        }), marginStyle),
        children: "Disabled"
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        type: "default",
        fill: "none",
        style: _objectSpread2(_objectSpread2({}, {
          backgroundColor: "#ffffff",
          color: "#888b94",
          width: pxTransform(harmony() ? 100 : 80)
        }), marginStyle),
        children: "Disabled"
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        style: _objectSpread2({
          width: pxTransform(harmony() ? 100 : 80)
        }, marginStyle),
        children: "Disabled"
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        shape: "square",
        fill: "outline",
        type: "primary",
        style: _objectSpread2({
          width: pxTransform(32)
        }, marginStyle)
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        type: "primary",
        style: _objectSpread2({
          width: pxTransform(32)
        }, marginStyle)
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        type: "primary",
        fill: "dashed",
        style: _objectSpread2({
          width: pxTransform(32)
        }, marginStyle)
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        shape: "round",
        type: "primary",
        size: "large",
        style: _objectSpread2({
          width: pxTransform(120)
        }, marginStyle),
        children: "Disabled"
      }), /* @__PURE__ */jsx(Button, {
        disabled: true,
        shape: "round",
        type: "primary",
        size: "xlarge",
        style: _objectSpread2({
          width: pxTransform(200)
        }, marginStyle),
        children: "Disabled"
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
var Demo6 = function Demo62() {
  var marginStyle = harmonyAndRn() ? {
    width: pxTransform(rn() ? 120 : 150),
    marginRight: pxTransform(8),
    marginTop: pxTransform(8),
    marginLeft: pxTransform(8),
    marginBottom: pxTransform(8)
  } : {
    marginRight: 8,
    marginTop: 8,
    marginLeft: 8,
    marginBottom: 8
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Cell, {
    style: {
      flexWrap: "wrap"
    },
    children: [/* @__PURE__ */jsx(Button, {
      shape: "square",
      type: "primary",
      style: marginStyle,
      children: "Square Button"
    }), /* @__PURE__ */jsx(Button, {
      shape: "round",
      type: "primary",
      style: marginStyle,
      children: "Round Button"
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
var Demo7 = function Demo72() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var marginStyle = {
    width: pxTransform(rn() ? 90 : 120),
    marginRight: pxTransform(8),
    marginTop: pxTransform(8),
    marginLeft: pxTransform(8),
    marginBottom: pxTransform(8)
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Cell, {
    style: {
      flexWrap: "wrap"
    },
    children: [/* @__PURE__ */jsx(Button, {
      loading: true,
      type: "warning",
      style: marginStyle,
      children: "Loading"
    }), /* @__PURE__ */jsx(Button, {
      loading: loading,
      type: "success",
      onClick: function onClick() {
        setTimeout(function () {
          setLoading(false);
        }, 1500);
        setLoading(!loading);
      },
      style: marginStyle,
      children: "Click me!"
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
var Demo8 = function Demo82() {
  var marginStyle = harmonyAndRn() ? {
    width: pxTransform(90),
    marginRight: pxTransform(8),
    marginTop: pxTransform(8),
    marginLeft: pxTransform(8),
    marginBottom: pxTransform(8)
  } : {
    marginRight: 8,
    marginTop: 8,
    marginLeft: 8,
    marginBottom: 8
  };
  var marginStyleXL = harmonyAndRn() ? {
    width: pxTransform(140),
    marginRight: pxTransform(8),
    marginTop: pxTransform(8),
    marginLeft: pxTransform(8),
    marginBottom: pxTransform(8)
  } : {
    marginRight: 8,
    marginTop: 8,
    marginLeft: 8,
    marginBottom: 8
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Cell, {
    style: {
      flexWrap: "wrap"
    },
    children: [/* @__PURE__ */jsx(Button, {
      type: "primary",
      style: marginStyle,
      children: "Normal"
    }), /* @__PURE__ */jsx(Button, {
      style: marginStyle,
      children: "Normal"
    }), /* @__PURE__ */jsx(Button, {
      size: "small",
      style: marginStyle,
      type: "primary",
      children: "Small"
    }), /* @__PURE__ */jsx(Button, {
      size: "mini",
      style: marginStyle,
      type: "primary",
      children: "Mini"
    }), /* @__PURE__ */jsx(Button, {
      size: "large",
      type: "primary",
      style: marginStyle,
      children: "Large"
    }), /* @__PURE__ */jsx(Button, {
      size: "xlarge",
      type: "primary",
      style: marginStyleXL,
      children: "XLarge"
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
var App$1 = function App2() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(Cell, {
    style: {
      flexWrap: "wrap"
    },
    children: /* @__PURE__ */jsx(Button, {
      block: true,
      type: "primary",
      children: "Block Button"
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
var App = function App2() {
  var marginStyle = harmonyAndRn() ? {
    width: pxTransform(120),
    marginRight: pxTransform(8),
    marginTop: pxTransform(8),
    marginLeft: pxTransform(8),
    marginBottom: pxTransform(8)
  } : {
    marginRight: 8,
    marginTop: 8,
    marginLeft: 8,
    marginBottom: 8
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Cell, {
    style: {
      flexWrap: "wrap"
    },
    children: [/* @__PURE__ */jsx(Button, {
      color: "blue",
      style: marginStyle,
      children: "单色按钮"
    }), /* @__PURE__ */jsx(Button, {
      fill: "outline",
      color: "#7232dd",
      style: marginStyle,
      children: "单色按钮"
    }), /* @__PURE__ */jsx(Button, {
      color: "rgba(10,101,208,0.75)",
      style: marginStyle,
      children: "单色按钮"
    }), /* @__PURE__ */jsx(Button, {
      type: "primary",
      color: "linear-gradient(to right, #ff6034, #ee0a24)",
      style: marginStyle,
      children: "渐变按钮"
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
var ButtonDemo = function ButtonDemo2() {
  var _useTranslate = useTranslate({
      "zh-CN": {
        ce5c5446: "按钮类型",
        ce5c5447: "按钮形状",
        c38a08ef: "主要按钮",
        e51e4582: "填充模式",
        "7db1a8b2": "禁用状态",
        a52bef0c: "加载状态",
        "0aaad622": "图标按钮",
        "0aaad620": "按钮尺寸",
        c9e6df49: "块级元素",
        "781b07fd": "自定义颜色"
      },
      "zh-TW": {
        ce5c5446: "按鈕類型",
        ce5c5447: "按鈕形狀",
        c38a08ef: "主要按鈕",
        e51e4582: "填充模式",
        "7db1a8b2": "禁用狀態",
        a52bef0c: "載入狀態",
        "0aaad622": "图标按钮",
        "0aaad620": "按鈕尺寸",
        c9e6df49: "塊級元素",
        "781b07fd": "自定義顏色"
      },
      "en-US": {
        ce5c5446: "Button Type",
        ce5c5447: "Button Shape",
        c38a08ef: "Main button",
        e51e4582: "Fill",
        "7db1a8b2": "Disabled State",
        a52bef0c: "Load State",
        "0aaad622": "Icon Button",
        "0aaad620": "Button size",
        c9e6df49: "Block-level elements",
        "781b07fd": "Custom Colors"
      }
    }),
    _useTranslate2 = _slicedToArray(_useTranslate, 1),
    translated = _useTranslate2[0];
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Header, {}), /* @__PURE__ */jsxs(TaroScrollViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), "demo ".concat(Taro.getEnv() === "WEB" ? "web" : "")),
      className: "demo ".concat(Taro.getEnv() === "WEB" ? "web" : ""),
      children: [!harmonyAndRn() ? /* @__PURE__ */jsxs(Fragment, {
        children: [/* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
          className: "h2",
          children: "设置 open-type "
        }), /* @__PURE__ */jsx(Demo1, {})]
      }) : null, /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.ce5c5446
      }), /* @__PURE__ */jsx(Demo2, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.e51e4582
      }), /* @__PURE__ */jsx(Demo3, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated["0aaad622"]
      }), /* @__PURE__ */jsx(Demo4, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated["7db1a8b2"]
      }), /* @__PURE__ */jsx(Demo5, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.ce5c5447
      }), /* @__PURE__ */jsx(Demo6, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.a52bef0c
      }), /* @__PURE__ */jsx(Demo7, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated["0aaad620"]
      }), /* @__PURE__ */jsx(Demo8, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.c9e6df49
      }), /* @__PURE__ */jsx(App$1, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated["781b07fd"]
      }), /* @__PURE__ */jsx(App, {})]
    })]
  }), __nesting_style__());
};

var config = {
  "navigationBarTitleText": "Button"
};
const index = (function () {
  return createNativePageConfig(ButtonDemo, 'base/pages/button/index', React, ReactDOM, config);
});

export { config, index as default };
