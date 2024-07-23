import { createNativePageConfig } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/plugin-framework-react/dist/runtime';
import { _ as _objectSpread2, d as _objectWithoutProperties, n, S, k, e as ComponentDefaults, b as _slicedToArray, f as classNames, g as _defineProperty, C as Cell, u as useTranslate, H as Header } from '../../../index.taro.js';
import * as React from '@jd-oh/taro_library/src/main/ets/npm/react';
import React__default, { useRef, useEffect, useState } from '@jd-oh/taro_library/src/main/ets/npm/react';
import Taro from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroViewTagName, TaroScrollViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP, window, document } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { j } from '../../../Failure.js';
import { I } from '../../../Loading.js';
import { z } from '../../../Tips.js';
import { O as Overlay } from '../../../overlay.taro.js';
import { u as useParams, a as useCustomEvent, b as useCustomEventsPath, c as customEvents } from '../../../use-custom-event.js';
import { u as usePropsValue } from '../../../use-props-value.js';
import { jsx, Fragment, jsxs } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';
import ReactDOM from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/react';

var e = "nutui-icon",
  a = [{
    name: "V12 Icon",
    nameEn: "V12 Icon",
    icons: ["add", "add-circle", "add-rectangle", "after-sale-service", "agenda", "alarm", "angle-double-down", "angle-double-left", "angle-double-right", "angle-double-up", "apps", "arrow-circle-down", "arrow-circle-left", "arrow-circle-right", "arrow-circle-sort", "arrow-circle-transfer", "arrow-circle-up", "arrow-corner-left", "arrow-corner-right", "arrow-down", "arrow-down2", "arrow-exchange", "arrow-left", "arrow-move", "arrow-right", "arrow-size-6", "arrow-size-8", "arrow-transfer", "arrow-up", "arrow-up2", "ask", "badge-percent", "bell", "bell-off", "bell-ring", "bell-unread", "board", "book", "book-mark", "bookmark", "brightness", "brush", "calculator", "calendar", "camera", "camera-off", "cart", "cart-add", "cart-arrow-down", "cart-arrow-up", "cart-check", "cart-remove", "category", "check", "check-checked", "check-disabled", "check-normal", "checked", "checklist", "clock", "close", "cloud", "comment", "complaint", "computer", "copy", "copy-check", "coupon", "credit-card", "darkness", "date", "del", "disk", "dongdong", "double-arrow-up", "download", "download", "edit", "eye", "fabulous", "face-angry", "face-mild", "face-smile", "file", "filter", "filter-h", "filter-v", "find", "flag", "follow", "follow-add", "footprint", "gift", "github", "globe", "headphones", "health", "heart", "heart-fill", "help-polygon", "home", "horizontal", "image", "image-error", "image-rectangle", "internation", "invoice", "jd", "jdl", "jimi", "jingdou", "joy-smile", "layers", "link", "link", "list", "loading", "loading2", "loading1", "location", "lock", "login", "logistics-error", "logout", "lower", "mail", "marshalling", "mask-close", "maximize", "message", "microphone", "microphone-mute", "minimize", "minus", "more", "mouse", "network-error", "no-receive", "notepad", "notice", "order", "orderlist", "package", "package-add", "package-arrow-down", "package-arrow-up", "package-check", "package-delete", "people", "phone", "photograph", "picked-up", "pin", "play-circle-fill", "play-double-back", "play-double-forward", "play-start", "play-stop", "plugin", "plus", "power", "poweroff-circle-fill", "presentation", "processing", "purse", "qr-code", "receipt", "received", "refresh", "refund", "reload", "remove-rectangle", "required", "retweet", "reward", "scan", "screen-little", "search", "service", "setting", "share", "shield", "shield-check", "shield-warning", "shop", "shopping", "shopping-add", "shopping-check", "shopping-follow", "shopping-minus", "shopping-remove", "sort-v", "star", "star-fill", "store", "success", "tag", "target", "thumbs-down", "thumbs-up", "ticket", "tips", "to-pay", "to-receive", "top", "transit", "trash", "triangle-down", "triangle-up", "truck", "undo", "unlink", "unlock", "upload", "user", "user-add", "video", "voice", "volume-max", "volume-mute", "voucher", "wait-receive", "wallet", "warning", "warning-polygon", "zoom-in", "zoom-out"]
  }],
  o = [{
    name: "通用动态样式",
    nameEn: "Universal Dynamic Style",
    icons: [{
      name: "double-arrow-up",
      "animation-name": "am-jump",
      "animation-time": "am-infinite"
    }, {
      name: "star",
      "animation-name": "am-blink",
      "animation-time": "am-infinite"
    }, {
      name: "refresh",
      "animation-name": "am-rotate",
      "animation-time": "am-infinite"
    }, {
      name: "heart-fill",
      "animation-name": "am-breathe",
      "animation-time": "am-infinite"
    }, {
      name: "microphone",
      "animation-name": "am-flash",
      "animation-time": "am-infinite"
    }, {
      name: "download",
      "animation-name": "am-bounce",
      "animation-time": "am-infinite"
    }, {
      name: "message",
      "animation-name": "am-shake",
      "animation-time": "am-infinite"
    }]
  }],
  r$1 = {
    name: e,
    data: a,
    style: o
  };

var _excluded = ["name", "size", "classPrefix", "color", "tag", "children", "className", "fontClassName", "style", "onClick"];
var __inner_style_data__$3;
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
function __inner_style__$3() {
  if (__inner_style_data__$3) return __inner_style_data__$3;
  __inner_style_data__$3 = {
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
  return __inner_style_data__$3;
}
var r = {
  name: "",
  size: "",
  width: "",
  height: "",
  color: "",
  onClick: function onClick(e) {},
  className: ""
};
function y(e) {
  return Number.isNaN(Number(e)) ? String(e) : "".concat(e, "px");
}
var l = function l(e) {
  var _r$e = _objectSpread2(_objectSpread2({}, r), e),
    t = _r$e.name,
    m = _r$e.size,
    _r$e$classPrefix = _r$e.classPrefix,
    n$1 = _r$e$classPrefix === void 0 ? n.classPrefix : _r$e$classPrefix,
    f = _r$e.color,
    _r$e$tag = _r$e.tag,
    h = _r$e$tag === void 0 ? n.tag : _r$e$tag,
    N = _r$e.children,
    a = _r$e.className,
    _r$e$fontClassName = _r$e.fontClassName,
    d = _r$e$fontClassName === void 0 ? n.fontClassName : _r$e$fontClassName,
    g = _r$e.style,
    i = _r$e.onClick,
    p = _objectWithoutProperties(_r$e, _excluded),
    o = t ? t.indexOf("/") !== -1 : !1,
    u = o ? "img" : h || "i",
    C = function C(x) {
      i && i(x);
    },
    $ = function $() {
      return o ? {
        src: t
      } : {};
    },
    s = y(m || "");
  return __combine_nesting_style__( /*#__PURE__*/React__default.createElement(u, _objectSpread2(_objectSpread2({
    __hmStyle: calcStaticStyle(__inner_style__$3(), o ? "".concat(n$1, "-img ").concat(a || "", " ") : "".concat(d, " ").concat(n$1, " ").concat(n$1, "-").concat(t, " ").concat(a || "")),
    className: o ? "".concat(n$1, "-img ").concat(a || "", " ") : "".concat(d, " ").concat(n$1, " ").concat(n$1, "-").concat(t, " ").concat(a || ""),
    style: _objectSpread2(_objectSpread2({
      color: f
    }, s ? {
      fontSize: s,
      width: s,
      height: s
    } : {}), g)
  }, p), {}, {
    onClick: C
  }, $()), N), __nesting_style__$9());
};
l.defaultProps = r;
l.displayName = "NutIcon";

var i = function i(I) {
  return /* @__PURE__ */React__default.createElement(S, _objectSpread2(_objectSpread2({}, I), {}, {
    name: I.name || "Add",
    svg64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik05NjAgNTcyLjhINjRjLTI1LjYgMC00OC0yMi40LTQ4LTQ4czIyLjQtNDggNDgtNDhoODk2YzI1LjYgMCA0OCAyMi40IDQ4IDQ4cy0yMi40IDQ4LTQ4IDQ4Ii8+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTUxMiAxMDIwLjhjLTI1LjYgMC00OC0yMi40LTQ4LTQ4di04OTZjMC0yNS42IDIyLjQtNDggNDgtNDhzNDggMjIuNCA0OCA0OHY4OTZjMCAyNS42LTIyLjQgNDgtNDggNDgiLz48L3N2Zz4="
  }));
};
i.defaultProps = k;

var D = function D(M) {
  return /* @__PURE__ */React__default.createElement(S, _objectSpread2(_objectSpread2({}, M), {}, {
    name: M.name || "Dongdong",
    svg64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiMxQTFBMUEiIGQ9Ik03MDkuMjEgNTg3LjU0YTMzLjczIDMzLjczIDAgMCAxIDQ3LjA4LTMuNjdjMTQuMDIgMTEuOCAxNS43IDMyLjU4IDMuNzMgNDYuNC01My41IDYxLjgyLTE0Ni44MiA5OS4zMy0yNDguNCA5OS4zMy0xMDAuOTkgMC0xOTMuODMtMzcuMDgtMjQ3LjQ5LTk4LjNhMzIuNiAzMi42IDAgMCAxIDMuNDMtNDYuNDMgMzMuNzMgMzMuNzMgMCAwIDEgNDcuMTEgMy40YzQwLjE5IDQ1Ljg3IDExNC4zOSA3NS41MiAxOTYuOTUgNzUuNTIgODMuMDMgMCAxNTcuNTctMjkuOTcgMTk3LjU5LTc2LjIzek01MTIgNTI0LjhjNTYuNTUgMCAxMDIuNC0yMi45MyAxMDIuNC01MS4ycy00NS44NS01MS4yLTEwMi40LTUxLjJjLTU2LjUzIDAtMTAyLjQgMjIuOTMtMTAyLjQgNTEuMiAwIDI4LjI5IDQ1Ljg3IDUxLjIgMTAyLjQgNTEuMk0yNzMuNDcgMzIwLjkyYy0yNi42Mi02LjU1LTU1Ljk0IDIyLjE0LTY1LjU4IDY0LjA4LTkuNjYgNDEuOTQgNC4xIDgxLjE1IDMwLjcyIDg3LjY4IDI2LjY1IDYuNTUgNTUuOTQtMjIuMTQgNjUuNi02NC4wOCA5LjY0LTQxLjk0LTQuMTItODEuMTUtMzAuNzQtODcuNjhtNTQyLjc0IDY0LjFjLTkuNjQtNDEuOTQtMzguOTUtNzAuNjEtNjUuNTgtNjQuMDgtMjYuNjIgNi41My00MC4zOCA0NS43NC0zMC43MiA4Ny42OCA5LjYyIDQxLjk0IDM4LjkzIDcwLjYxIDY1LjU2IDY0LjA4IDI2LjY1LTYuNTMgNDAuNDEtNDUuNzQgMzAuNzQtODcuNjgiLz48cGF0aCBmaWxsPSIjMUExQTFBIiBkPSJNNTEyIDk4MS4zM2MyOTguMzcgMCA1MTItMjEyLjAzIDUxMi00NzEuMTYgMC0yNTkuMTQtMjMwLjA2LTQ2Ny41LTUxMi00NjcuNVMwIDI1MS4wMyAwIDUxMC4xN2MwIDk5LjYzIDM0LjIyIDE5NC41NCA5Ni42IDI3My40NSAxLjQ5IDEuOSA0LjI3IDUuMTYgOC4zMiA5Ljg5bDMzLjc1IDM4LjYyYTMzLjE3IDMzLjE3IDAgMCAxLS4wNyA0My44bC00LjI2IDUuMzlhNjMuNzQgNjMuNzQgMCAwIDAgOS4xNSA4My45MSA2Mi4wOCA2Mi4wOCAwIDAgMCA0Mi40OSAxNi4xek0yMjQuNTggODk2YTExOC41MyAxMTguNTMgMCAwIDAtMjEuNzYtMTIwLjExbC0uMTEtLjEyLTMzLjI4LTM4LjExYTY1MS42NyA2NTEuNjcgMCAwIDEtNS44OS02Ljk3Yy01MC45OS02NC40OS03OC4yMS0xNDAuOTEtNzguMjEtMjIwLjUyQzg1LjMzIDMwNS41IDI2OS41IDEyOCA1MTIgMTI4czQyNi42NyAxNzcuNDkgNDI2LjY3IDM4Mi4xN0M5MzguNjcgNzE3LjQgNzY4LjE1IDg5NiA1MTIgODk2eiIvPjwvc3ZnPg=="
  }));
};
D.defaultProps = k;

var g = function g(M) {
  return /* @__PURE__ */React__default.createElement(S, _objectSpread2(_objectSpread2({}, M), {}, {
    name: M.name || "Success",
    svg64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiMxQTFBMUEiIGQ9Ik03NDMgNDA1LjMzIDY4Mi42NyAzNDUgNDQ4IDU3OS42N2wtMTI4LTEyOEwyNTkuNjcgNTEyIDQ0OCA3MDAuMzN6Ii8+PHBhdGggZmlsbD0iIzFBMUExQSIgZD0iTTUxMiAxMDI0YzI4Mi43NyAwIDUxMi0yMjkuMjMgNTEyLTUxMlM3OTQuNzcgMCA1MTIgMCAwIDIyOS4yMyAwIDUxMnMyMjkuMjMgNTEyIDUxMiA1MTJtMC04NS4zM0MyNzYuMzUgOTM4LjY3IDg1LjMzIDc0Ny42NSA4NS4zMyA1MTJTMjc2LjM1IDg1LjMzIDUxMiA4NS4zMyA5MzguNjcgMjc2LjM1IDkzOC42NyA1MTIgNzQ3LjY1IDkzOC42NyA1MTIgOTM4LjY3Ii8+PC9zdmc+"
  }));
};
g.defaultProps = k;

var N = function N(M) {
  return /* @__PURE__ */React__default.createElement(S, _objectSpread2(_objectSpread2({}, M), {}, {
    name: M.name || "UserAdd",
    svg64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiMxQTFBMUEiIGQ9Ik04NTAuNjkgMzg0QzgyOS43IDIxNS42MiA2ODYuMDggODUuMzMgNTEyIDg1LjMzYy0xNzQuMDggMC0zMTcuNyAxMzAuMjgtMzM4LjY5IDI5OC42N2EzNDQuNyAzNDQuNyAwIDAgMC0yLjY0IDQyLjY3QzE3MC42NyA2MTUuMTkgMzIzLjUgNzY4IDUxMiA3NjhjNy4xNyAwIDE0LjI5LS4yMSAyMS4zMy0uNjR2ODUuNDRhNDI0Ljg1IDQyNC44NSAwIDAgMS0yMTYuMDYtNDYuNGMtODAuNTEgNDAuMzQtMTU1LjIgOTcuOTgtMTkyLjMyIDE5MC43OGE0Mi42NyA0Mi42NyAwIDAgMS03OS4yMy0zMS43Qzg2LjMyIDg2NCAxNjAuNzcgNzk4LjEgMjM3LjA4IDc1Mi45NiAxNDQuMjYgNjc0LjY3IDg1LjM0IDU1Ny41NSA4NS4zMyA0MjYuNjdjMC0xNC40LjctMjguNjMgMi4xMi00Mi42N0MxMDguODUgMTY4LjM4IDI5MC43NiAwIDUxMS45OCAwYzIyMS4yNyAwIDQwMy4xOCAxNjguMzggNDI0LjU3IDM4NCAxLjM5IDE0LjA0IDIuMTEgMjguMjcgMi4xMiA0Mi42NyAwIDYwLjY3LTEyLjY3IDExOC40LTM1LjUgMTcwLjY2aC05NS41MWEzMzkuNzUgMzM5Ljc1IDAgMCAwIDQ1LjY3LTE3MC42NmMwLTE0LjQ0LS45LTI4LjY5LTIuNjQtNDIuNjciLz48cGF0aCBmaWxsPSIjMUExQTFBIiBkPSJNMzU0LjUgNTc0Ljgzcy0uMDItLjAyIDI5LjUtMzAuODNjMjkuNTMtMzAuODEgMjkuNS0zMC44MyAyOS41LTMwLjgzbDEuMTggMS4wNWMxLjE1IDEgMy4wMyAyLjYgNS41NCA0LjYxIDUuMTIgNC4wMSAxMi42NSA5LjQ3IDIyLjA2IDE0LjkzIDE5LjI5IDExLjIyIDQzLjc4IDIwLjkxIDY5LjcyIDIwLjkxIDI1Ljk0IDAgNTAuNDMtOS42OSA2OS43Mi0yMC45MWExOTEuNyAxOTEuNyAwIDAgMCAyNy42LTE5LjU0IDY1LjI4IDY1LjI4IDAgMCAwIDEuMTgtMS4wNXMtLjAyLjAyIDI5LjUgMzAuODNjMjkuNTMgMzAuODEgMjkuNSAzMC44MyAyOS41IDMwLjgzbC0uMDYuMDYtLjExLjExLS4yNy4yNS0uODQuNzdhMjIzLjY4IDIyMy42OCAwIDAgMS0xMS42NCA5LjgxYy03LjU5IDUuOTktMTguNDcgMTMuODctMzIgMjEuNzJDNTk3Ljk2IDYyMy4wMiA1NTguNDUgNjQwIDUxMiA2NDBzLTg1Ljk1LTE2Ljk4LTExMi41OC0zMi40M2EyNzYuNjkgMjc2LjY5IDAgMCAxLTMyLTIxLjcxIDIyMy42OCAyMjMuNjggMCAwIDEtMTEuNjQtOS44NGwtLjU2LS41MS0uMjUtLjI2LS4zLS4yNS0uMTEtLjExLS4wNC0uMDZ6bTI1Ni02MS42Ni4wOC0uMDgtLjA0LjA0LS4wMi4wNHptMTc4LjgzIDE2OS41QTQyLjY3IDQyLjY3IDAgMCAxIDgzMiA3MjUuMzN2ODUuMzRoODUuMzNhNDIuNjcgNDIuNjcgMCAxIDEgMCA4NS4zM0g4MzJ2ODUuMzNhNDIuNjcgNDIuNjcgMCAxIDEtODUuMzMgMFY4OTZoLTg1LjM0YTQyLjY3IDQyLjY3IDAgMSAxIDAtODUuMzNoODUuMzR2LTg1LjM0YTQyLjY3IDQyLjY3IDAgMCAxIDQyLjY2LTQyLjY2Ii8+PC9zdmc+"
  }));
};
N.defaultProps = k;

var __inner_style_data__$2;
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
    "selectors": [["nut-toast-inner", "break-word"]],
    "declaration": {
      wordBreak: "normal",
      wordWrap: "break-word"
    }
  }, {
    "selectors": [["nut-toast-inner", "normal"]],
    "declaration": {
      wordBreak: "normal",
      wordWrap: "normal"
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
    "selectors": ["nut-rtl", " ", "nut-toast"],
    "declaration": {
      right: convertNumber2VP(0)
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-toast-inner"],
    "declaration": {
      right: "50%",
      transform: {
        Translate: {
          x: "50%",
          y: "-50%"
        }
      }
    }
  }, {
    "selectors": ["nut-toast-has-icon", " ", "nut-toast-icon-wrapper"],
    "declaration": {
      width: "100%",
      display: "flex",
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center,
      marginBottom: convertNumber2VP(8, "PX")
    }
  }, {
    "selectors": ["nut-toast-large", " ", "nut-toast-inner"],
    "declaration": {
      fontSize: convertNumber2VP(16, "PX")
    }
  }, {
    "selectors": ["nut-toast-loading", " ", "nut-toast-icon-wrapper"],
    "declaration": {
      animationDelay: 0,
      animationIterationCount: -1,
      animationDuration: 2e3,
      animationTimeingFunction: "linear",
      animationName: [{
        "percentage": 0,
        "event": {
          WebkitTransform: "rotate(0)"
        }
      }, {
        "percentage": 1,
        "event": {
          WebkitTransform: "rotate(360deg)"
        }
      }]
    }
  }, {
    "selectors": ["nut-toast-loading", " ", "nut-toast-inner"],
    "declaration": {
      display: "flex",
      flexDirection: FlexDirection.Column,
      justifyContent: FlexAlign.Center,
      alignItems: ItemAlign.Center
    }
  }, {
    "selectors": ["nut-toast-small", " ", "nut-toast-inner"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-toast"],
    "declaration": {
      right: convertNumber2VP(0)
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-toast-inner"],
    "declaration": {
      right: "50%",
      transform: {
        Translate: {
          x: "50%",
          y: "-50%"
        }
      }
    }
  }, {
    "selectors": ["nut-toast-has-icon", " ", "nut-toast-icon-wrapper", " ", "nut-icon"],
    "declaration": {
      width: convertNumber2VP(24, "PX"),
      height: convertNumber2VP(24, "PX")
    }
  }, {
    "selectors": ["nut-toast-loading", " ", "nut-toast-icon-wrapper", " ", "nut-icon"],
    "declaration": {
      width: convertNumber2VP(24, "PX"),
      height: convertNumber2VP(24, "PX")
    }
  }];
  return __nesting_style_data__$8;
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
    "nut-toast": {
      display: "flex",
      flexDirection: FlexDirection.Column,
      position: "fixed",
      top: convertNumber2VP(0),
      left: convertNumber2VP(0),
      height: "100%",
      width: "100%",
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center,
      zIndex: 1300
    },
    "nut-toast-bottom": {
      top: "80%"
    },
    "nut-toast-center": {
      top: "50%"
    },
    "nut-toast-inner": {
      display: "flex",
      flexDirection: FlexDirection.Column,
      justifyContent: FlexAlign.Center,
      alignItems: ItemAlign.Center,
      position: "absolute",
      left: "50%",
      top: "50%",
      minWidth: "30.000002%",
      maxWidth: "95.700005%",
      fontSize: convertNumber2VP(14, "PX"),
      textAlign: TextAlign.Center,
      paddingTop: convertNumber2VP(16, "PX"),
      paddingRight: convertNumber2VP(24, "PX"),
      paddingBottom: convertNumber2VP(16, "PX"),
      paddingLeft: convertNumber2VP(24, "PX"),
      wordBreak: "break-all",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderTopLeftRadius: convertNumber2VP(16, "PX"),
      borderTopRightRadius: convertNumber2VP(16, "PX"),
      borderBottomLeftRadius: convertNumber2VP(16, "PX"),
      borderBottomRightRadius: convertNumber2VP(16, "PX"),
      color: "#fff",
      transform: {
        Translate: {
          x: "-50%",
          y: "-50%"
        }
      }
    },
    "nut-toast-overlay-default": {
      zIndex: 1300
    },
    "nut-toast-text": _defineProperty({
      display: "flex",
      color: "#fff",
      textAlign: TextAlign.Center
    }, "::empty", {
      marginBottom: convertNumber2VP(-8, "PX")
    }),
    "nut-toast-title": _defineProperty({
      display: "flex",
      color: "#fff",
      fontSize: convertNumber2VP(16, "PX"),
      fontWeight: 500
    }, "::empty", {
      marginBottom: convertNumber2VP(-8, "PX")
    }),
    "nut-toast-top": {
      top: "20%"
    },
    "toast-fade-enter-active": {
      transition: "opacity .3s"
    },
    "toast-fade-enter-from": {
      opacity: 0
    },
    "toast-fade-leave-active": {
      transition: "opacity .3s"
    },
    "toast-fade-leave-to": {
      opacity: 0
    }
  };
  return __inner_style_data__$2;
}
var defaultProps = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  id: "",
  icon: null,
  iconSize: "20",
  content: "",
  msg: "",
  duration: 2,
  position: "center",
  type: "text",
  title: "",
  closeOnOverlayClick: false,
  lockScroll: false,
  contentClassName: "",
  size: "base",
  visible: false,
  wordBreak: "break-all",
  onClose: function onClose() {}
});
var classPrefix = "nut-toast";
var Toast = function Toast2(props) {
  var _useParams = useParams(_objectSpread2(_objectSpread2({}, defaultProps), props)),
    _useParams$params = _useParams.params,
    id = _useParams$params.id,
    position = _useParams$params.position,
    contentStyle = _useParams$params.contentStyle,
    icon = _useParams$params.icon,
    iconSize = _useParams$params.iconSize,
    content = _useParams$params.content,
    msg = _useParams$params.msg,
    duration = _useParams$params.duration,
    type = _useParams$params.type,
    title = _useParams$params.title,
    closeOnOverlayClick = _useParams$params.closeOnOverlayClick,
    lockScroll = _useParams$params.lockScroll,
    contentClassName = _useParams$params.contentClassName,
    visible = _useParams$params.visible,
    size = _useParams$params.size,
    className = _useParams$params.className,
    style = _useParams$params.style,
    onClose2 = _useParams$params.onClose,
    wordBreak = _useParams$params.wordBreak,
    setParams = _useParams.setParams;
  var timer = useRef(-1);
  var _usePropsValue = usePropsValue({
      value: visible,
      defaultValue: void 0,
      finalValue: false,
      onChange: function onChange(v) {
        !v && (onClose2 === null || onClose2 === void 0 ? void 0 : onClose2());
      }
    }),
    _usePropsValue2 = _slicedToArray(_usePropsValue, 2),
    innerVisible = _usePropsValue2[0],
    setInnerVisible = _usePropsValue2[1];
  useEffect(function () {
    if (innerVisible) {
      autoClose();
    }
  }, [innerVisible, duration]);
  useCustomEvent(id, function (_ref) {
    var status = _ref.status,
      options = _ref.options;
    if (status) {
      options.visible = true;
      setParams(options);
      show2();
    } else {
      setParams({
        visible: false
      });
      hide2();
    }
  });
  var clearTimer = function clearTimer2() {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = -1;
    }
  };
  var show2 = function show3() {
    setInnerVisible(true);
  };
  var hide2 = function hide3() {
    clearTimer();
    setInnerVisible(false);
  };
  var autoClose = function autoClose2() {
    clearTimer();
    if (duration) {
      timer.current = window.setTimeout(function () {
        setParams({
          visible: false
        });
        hide2();
      }, duration * 1e3);
    }
  };
  var clickCover = function clickCover2() {
    if (closeOnOverlayClick) {
      hide2();
    }
  };
  var hasIcon = function hasIcon2() {
    if (type !== "text") {
      return true;
    }
    return !!icon;
  };
  var iconName = function iconName2() {
    if (icon) {
      return icon;
    }
    return {
      success: /* @__PURE__ */jsx(g, {
        color: "#ffffff",
        size: iconSize
      }),
      fail: /* @__PURE__ */jsx(j, {
        color: "#ffffff",
        size: iconSize
      }),
      warn: /* @__PURE__ */jsx(z, {
        color: "#ffffff",
        size: iconSize
      }),
      loading: /* @__PURE__ */jsx(I, {
        color: "#ffffff",
        size: iconSize
      })
    }[type];
  };
  var classes = classNames(_defineProperty({
    "nut-toast-has-icon": icon
  }, "nut-toast-".concat(size), true));
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: innerVisible ? /* @__PURE__ */jsx(Overlay, {
      visible: innerVisible,
      style: style,
      className: "".concat(classPrefix, "-overlay-default ").concat(className),
      closeOnOverlayClick: closeOnOverlayClick,
      lockScroll: lockScroll,
      onClick: function onClick() {
        clickCover();
      },
      __styleSheet: {
        key: "".concat(classPrefix, "-overlay-default ").concat(className),
        value: calcStaticStyle(__inner_style__$2(), "".concat(classPrefix, "-overlay-default ").concat(className))
      },
      __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classPrefix, "-overlay-default ").concat(className)),
      children: /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classPrefix, " ").concat(classes)),
        className: "".concat(classPrefix, " ").concat(classes),
        id: id,
        children: /* @__PURE__ */jsxs(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classPrefix, "-inner ").concat(classPrefix, "-").concat(position, " ").concat(contentClassName, " ").concat(wordBreak)),
          className: "".concat(classPrefix, "-inner ").concat(classPrefix, "-").concat(position, " ").concat(contentClassName, " ").concat(wordBreak),
          style: contentStyle,
          children: [hasIcon() ? /* @__PURE__ */jsx("p", {
            __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classPrefix, "-icon-wrapper")),
            className: "".concat(classPrefix, "-icon-wrapper"),
            children: iconName()
          }) : null, title ? /* @__PURE__ */jsx(TaroViewTagName, {
            __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classPrefix, "-title")),
            className: "".concat(classPrefix, "-title"),
            children: title
          }) : null, /* @__PURE__ */jsx("span", {
            __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classPrefix, "-text")),
            className: "".concat(classPrefix, "-text"),
            children: content || msg
          })]
        })
      })
    }) : null
  }), __nesting_style__$8());
};
function show(selector, options) {
  var path = useCustomEventsPath(selector);
  customEvents.trigger(path, {
    status: true,
    options: options
  });
}
function hide(selector) {
  var path = useCustomEventsPath(selector);
  customEvents.trigger(path, {
    status: false
  });
}
Toast.defaultProps = defaultProps;
Toast.displayName = "NutToast";
Toast.show = show;
Toast.hide = hide;

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
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Cell, {
    children: [/* @__PURE__ */jsx(i, {
      color: "red",
      style: {
        marginRight: "10px"
      }
    }), /* @__PURE__ */jsx(N, {
      style: {
        marginRight: "10px"
      }
    }), /* @__PURE__ */jsx(D, {})]
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
var Demo2 = function Demo22() {
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Cell, {
    children: [/* @__PURE__ */jsx(l, {
      name: "dongdong",
      style: {
        marginRight: "10px"
      }
    }), /* @__PURE__ */jsx(l, {
      name: "add",
      style: {
        marginRight: "10px"
      }
    }), /* @__PURE__ */jsx(l, {
      name: "minus"
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
var Demo3 = function Demo32() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(Cell, {
    children: /* @__PURE__ */jsx(l, {
      size: "40",
      name: "https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
    })
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
var Demo4 = function Demo42() {
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Cell, {
    children: [/* @__PURE__ */jsx(l, {
      name: "dongdong",
      color: "#FF0F23",
      style: {
        marginRight: "10px"
      }
    }), /* @__PURE__ */jsx(l, {
      name: "dongdong",
      color: "#64b578",
      style: {
        marginRight: "10px"
      }
    }), /* @__PURE__ */jsx(l, {
      name: "dongdong",
      color: "#ffd700"
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
var Demo5 = function Demo52() {
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Cell, {
    style: {
      alignItems: "center"
    },
    children: [/* @__PURE__ */jsx(l, {
      name: "dongdong",
      size: "16",
      style: {
        marginRight: "10px"
      }
    }), /* @__PURE__ */jsx(l, {
      name: "dongdong",
      size: "20",
      style: {
        marginRight: "10px"
      }
    }), /* @__PURE__ */jsx(l, {
      name: "dongdong",
      size: "24"
    })]
  }), __nesting_style__$3());
};

var UPPERCASE = /(?:[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2F\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C0\uA7C2\uA7C4-\uA7C7\uA7C9\uA7D0\uA7D6\uA7D8\uA7F5\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21])/;
var LOWERCASE = /(?:[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]|\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E\uDF25-\uDF2A]|\uD83A[\uDD22-\uDD43])/;
var LEADING_CAPITAL = /^(?:[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2F\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C0\uA7C2\uA7C4-\uA7C7\uA7C9\uA7D0\uA7D6\uA7D8\uA7F5\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21])(?!(?:[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2F\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C0\uA7C2\uA7C4-\uA7C7\uA7C9\uA7D0\uA7D6\uA7D8\uA7F5\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]))/g;
var IDENTIFIER = /((?:[0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u0669\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u08D4-\u08DF\u08E3-\u08E9\u08F0-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFC\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F83\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1713\u171F-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u1938\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1ABF\u1AC0\u1ACC-\u1ACE\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4C\u1B50-\u1B59\u1B80-\u1BA9\u1BAC-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C36\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1DE7-\u1DF4\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2189\u2150-\u2182\u2460-\u249B\u24B6-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA805\uA807-\uA827\uA830-\uA835\uA840-\uA873\uA880-\uA8C3\uA8C5\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC52-\uDC6F\uDC71-\uDC75\uDC80-\uDCB8\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD32\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E-\uDE41\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB5\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC38\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDF00-\uDF10\uDF12-\uDF3A\uDF3E-\uDF40\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC30-\uDC6D\uDC8F\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD47\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])|$)/;
var SEPARATORS = /[_.\- ]+/;
var LEADING_SEPARATORS = new RegExp("^".concat(SEPARATORS.source));
var SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, "gu");
var NUMBERS_AND_IDENTIFIER = new RegExp("\\d+".concat(IDENTIFIER.source), "gu");
var preserveCamelCase = function preserveCamelCase2(string, toLowerCase, toUpperCase) {
  var isLastCharLower = false;
  var isLastCharUpper = false;
  var isLastLastCharUpper = false;
  for (var index = 0; index < string.length; index++) {
    var character = string[index];
    if (isLastCharLower && UPPERCASE.test(character)) {
      string = "".concat(string.slice(0, index), "-").concat(string.slice(index));
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      index++;
    } else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
      string = "".concat(string.slice(0, index - 1), "-").concat(string.slice(index - 1));
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
    }
  }
  return string;
};
var preserveConsecutiveUppercase = function preserveConsecutiveUppercase2(input, toLowerCase) {
  LEADING_CAPITAL.lastIndex = 0;
  return input.replace(LEADING_CAPITAL, function (m1) {
    return toLowerCase(m1);
  });
};
var postProcess = function postProcess2(input, toUpperCase) {
  SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
  NUMBERS_AND_IDENTIFIER.lastIndex = 0;
  return input.replace(SEPARATORS_AND_IDENTIFIER, function (_, identifier) {
    return toUpperCase(identifier);
  }).replace(NUMBERS_AND_IDENTIFIER, function (m) {
    return toUpperCase(m);
  });
};
var camelCase = function camelCase2(input, options) {
  if (!(typeof input === "string" || Array.isArray(input))) {
    throw new TypeError("Expected the input to be `string | string[]`");
  }
  options = _objectSpread2({
    pascalCase: false,
    preserveConsecutiveUppercase: false
  }, options);
  if (Array.isArray(input)) {
    input = input.map(function (x) {
      return x.trim();
    }).filter(function (x) {
      return x.length;
    }).join("-");
  } else {
    input = input.trim();
  }
  if (input.length === 0) {
    return "";
  }
  var toLowerCase = options.locale === false ? function (string) {
    return string.toLowerCase();
  } : function (string) {
    return string.toLocaleLowerCase(options.locale);
  };
  var toUpperCase = options.locale === false ? function (string) {
    return string.toUpperCase();
  } : function (string) {
    return string.toLocaleUpperCase(options.locale);
  };
  if (input.length === 1) {
    if (SEPARATORS.test(input)) {
      return "";
    }
    return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
  }
  var hasUpperCase = input !== toLowerCase(input);
  if (hasUpperCase) {
    input = preserveCamelCase(input, toLowerCase, toUpperCase);
  }
  input = input.replace(LEADING_SEPARATORS, "");
  input = options.preserveConsecutiveUppercase ? preserveConsecutiveUppercase(input, toLowerCase) : toLowerCase(input);
  if (options.pascalCase) {
    input = toUpperCase(input.charAt(0)) + input.slice(1);
  }
  return postProcess(input, toUpperCase);
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
var Demo6 = function Demo62() {
  var generateCopyText = function generateCopyText2(name) {
    return "<".concat(camelCase(name, {
      pascalCase: true
    }), " />");
  };
  var copyTag = function copyTag2(text) {
    var input = document.createElement("input");
    document.body.appendChild(input);
    input.setAttribute("value", text);
    input.select();
    if (document.execCommand("copy")) {
      document.execCommand("copy");
    }
    document.body.removeChild(input);
  };
  var _useState = useState({
      content: "",
      visible: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Toast, {
      visible: state.visible,
      content: state.content,
      type: "text"
    }), r$1.data.map(function (item) {
      return /* @__PURE__ */jsx(Cell.Group, {
        title: item.name,
        children: /* @__PURE__ */jsx(Cell, {
          children: /* @__PURE__ */jsx("ul", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              padding: "0",
              width: "100%"
            },
            children: item.icons.map(function (icon) {
              return /* @__PURE__ */jsx("li", {
                onClick: function onClick() {
                  copyTag(generateCopyText(icon));
                  setState(_objectSpread2(_objectSpread2({}, state), {}, {
                    visible: true,
                    content: generateCopyText(icon)
                  }));
                },
                style: {
                  maxWidth: "25%",
                  height: "60px",
                  display: "flex",
                  flex: "0 0 25%",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: /* @__PURE__ */jsx(l, {
                  name: icon
                })
              }, Math.random());
            })
          })
        })
      }, item.name);
    })]
  }), __nesting_style__$2());
};

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
    "h5-span": {}
  };
  return __inner_style_data__$1;
}
var Demo7 = function Demo72() {
  var generateAMCopyText = function generateAMCopyText2(icon) {
    return "<".concat(camelCase(icon.name, {
      pascalCase: true
    }), " className='", "nut-icon-".concat(icon["animation-name"], " nut-icon-").concat(icon["animation-time"]), "' />");
  };
  var copyTag = function copyTag2(text) {
    var input = document.createElement("input");
    document.body.appendChild(input);
    input.setAttribute("value", text);
    input.select();
    if (document.execCommand("copy")) {
      document.execCommand("copy");
    }
    document.body.removeChild(input);
  };
  var _useState = useState({
      content: "",
      visible: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Toast, {
      visible: state.visible,
      content: state.content,
      type: "text"
    }), r$1.style.map(function (item) {
      return /* @__PURE__ */jsx(Cell.Group, {
        title: item.name,
        children: /* @__PURE__ */jsx(Cell, {
          children: /* @__PURE__ */jsx("ul", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              padding: "0",
              width: "100%"
            },
            children: item.icons.map(function (icon) {
              return /* @__PURE__ */jsx("li", {
                onClick: function onClick() {
                  copyTag(generateAMCopyText(icon));
                  setState(_objectSpread2(_objectSpread2({}, state), {}, {
                    visible: true,
                    content: generateAMCopyText(icon)
                  }));
                },
                style: {
                  maxWidth: "25%",
                  height: "60px",
                  display: "flex",
                  flex: "0 0 25%",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: /* @__PURE__ */jsx(l, {
                  name: icon.name,
                  className: "nut-icon-".concat(icon["animation-name"], " nut-icon-").concat(icon["animation-time"]),
                  __styleSheet: {
                    key: "nut-icon-".concat(icon["animation-name"], " nut-icon-").concat(icon["animation-time"]),
                    value: calcStaticStyle(__inner_style__$1(), "nut-icon-".concat(icon["animation-name"], " nut-icon-").concat(icon["animation-time"]))
                  },
                  __hmStyle: calcStaticStyle(__inner_style__$1(), "nut-icon-".concat(icon["animation-name"], " nut-icon-").concat(icon["animation-time"]))
                })
              }, icon.name);
            })
          })
        })
      }, item.name);
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
var IconDemo = function IconDemo2() {
  var _useTranslate = useTranslate({
      "zh-CN": {
        "84aa6bce": "基础用法",
        svg: "SVG 按需使用",
        dab8a74f: "图片链接",
        "52c15454": "图标颜色",
        "7aeb5407": "图标大小",
        f2e6c6d6: "基础图标"
      },
      "zh-TW": {
        "84aa6bce": "基礎用法",
        svg: "SVG 按需使用",
        dab8a74f: "圖片連結",
        "52c15454": "圖示顏色",
        "7aeb5407": "圖示大小",
        f2e6c6d6: "基礎圖示"
      },
      "en-US": {
        "84aa6bce": "Basic Usage",
        svg: "SVG import On Demand",
        dab8a74f: "Image Link",
        "52c15454": "IconFont Color",
        "7aeb5407": "IconFont Size",
        f2e6c6d6: "Base IconFont"
      }
    }),
    _useTranslate2 = _slicedToArray(_useTranslate, 1),
    translated = _useTranslate2[0];
  var _useState = useState({
      msg: "",
      type: "text",
      cover: false,
      visible: false,
      duration: 2,
      closeOnOverlayClick: false,
      title: "",
      bottom: "",
      icon: "",
      center: true
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Header, {}), /* @__PURE__ */jsxs(TaroScrollViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), "demo ".concat(Taro.getEnv() === "WEB" ? "web" : "")),
      className: "demo ".concat(Taro.getEnv() === "WEB" ? "web" : ""),
      children: [/* @__PURE__ */jsx(Toast, {
        content: state.msg,
        visible: state.visible,
        type: state.type,
        duration: state.duration,
        icon: state.icon,
        closeOnOverlayClick: state.closeOnOverlayClick,
        onClose: function onClose() {
          setState(_objectSpread2(_objectSpread2({}, state), {}, {
            visible: false
          }));
        }
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.svg
      }), /* @__PURE__ */jsx(Demo1, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated["84aa6bce"]
      }), /* @__PURE__ */jsx(Demo2, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.dab8a74f
      }), /* @__PURE__ */jsx(Demo3, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated["52c15454"]
      }), /* @__PURE__ */jsx(Demo4, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated["7aeb5407"]
      }), /* @__PURE__ */jsx(Demo5, {}), /* @__PURE__ */jsx(Demo6, {}), /* @__PURE__ */jsx(Demo7, {})]
    })]
  }), __nesting_style__());
};

var config = {
  "navigationBarTitleText": "Icon"
};
const index = (function () {
  return createNativePageConfig(IconDemo, 'base/pages/icon/index', React, ReactDOM, config);
});

export { config, index as default };
