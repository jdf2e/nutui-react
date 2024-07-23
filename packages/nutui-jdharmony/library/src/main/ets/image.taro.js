import { S, _ as _objectSpread2, k, d as _objectWithoutProperties, b as _slicedToArray, f as classNames, a as harmonyAndRn } from './index.taro.js';
import React__default, { useState, useCallback } from '@jd-oh/taro_library/src/main/ets/npm/react';
import Taro from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroViewTagName, TaroImageTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { jsx, jsxs, Fragment } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';

var N = function N(M) {
  return /* @__PURE__ */React__default.createElement(S, _objectSpread2(_objectSpread2({}, M), {}, {
    name: M.name || "ImageError",
    svg64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik02OTYuNDMgNDY1LjI1YzQwLjYxIDAgNzMuNTMtMzIuNzIgNzMuNTMtNzMuMDlzLTMyLjk2LTczLjA4LTczLjUzLTczLjA4LTczLjU0IDMyLjcyLTczLjU0IDczLjA4IDMyLjkyIDczLjA5IDczLjU0IDczLjA5TTUzNS43NCA2NTAuNjJsLTI3My42MS0yNTkuNGE1Ni4xOSA1Ni4xOSAwIDAgMC0xNS4zNiAxMS41OGwtMTE0IDExOS42My02LTIyMi43N2MtLjczLTI2LjgyIDIwLjg0LTQ5LjQxIDQ3LjY3LTUwLjE0bDIwMS43Ny01LjQ0IDQ3LjM0LTUwLTI1MC40MyA2Ljc1QzExOSAyMDIuMzMgNzYuMzMgMjQ3LjE3IDc3Ljc4IDMwMWw3LjMyIDI3MS40IDQuNSAxNjYuNzhDOTEuMDYgNzkzIDEzNi4wNSA4MzUuNDcgMTkwLjIgODM0bDE3Ni00Ljc1IDEyLS4zMiA0Ny4zNC01MCAxMTYuMTgtMTIyLjY0eiIvPjxwYXRoIGZpbGw9IiMzMzMiIGQ9Im04NjEuNzEgMjE0LjgtMjQyLjgzLTMzLjg2LTU1LjA5IDQxLjQ2TDg1NSAyNjNhNDkuMDUgNDkuMDUgMCAwIDEgNDEuNzkgNTUuMTNsLTU0LjMzIDM4OS41OS0xMjAuODctMTU5LjA1QTU5Ljg2IDU5Ljg2IDAgMCAwIDYzOC4wNiA1MzdsLTQ0IDMzLjA4IDY1LjA3IDg2LjE1TDYwMy44NCA2OThsLTc5LjU3IDYwLjEtNTQuOTIgNDEuNDggMzQuMTcgNC43NiAyNzAuNzMgMzcuNzZhOTcuNTUgOTcuNTUgMCAwIDAgMTA5Ljg4LTc5LjYgMjIuMzcgMjIuMzcgMCAwIDAgLjY1LTMuNDRsNjAuNTMtNDM0LjE2YzcuNDQtNTMuMzItMjkuOTUtMTAyLjYyLTgzLjYtMTEwLjEiLz48L3N2Zz4="
  }));
};
N.defaultProps = k;

var j = function j(M) {
  return /* @__PURE__ */React__default.createElement(S, _objectSpread2(_objectSpread2({}, M), {}, {
    name: M.name || "Image",
    svg64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiMxQTFBMUEiIGQ9Ik0zODQgMzQxLjMzYTg1LjMzIDg1LjMzIDAgMSAxLTE3MC42NyAwIDg1LjMzIDg1LjMzIDAgMCAxIDE3MC42NyAwIi8+PHBhdGggZmlsbD0iIzFBMUExQSIgZD0iTTAgMTcwLjY3YTEyOCAxMjggMCAwIDEgMTI4LTEyOGg3NjhhMTI4IDEyOCAwIDAgMSAxMjggMTI4djY4Mi42NmExMjggMTI4IDAgMCAxLTEyOCAxMjhIMTI4YTEyOCAxMjggMCAwIDEtMTI4LTEyOHpNMTI4IDEyOGE0Mi42NyA0Mi42NyAwIDAgMC00Mi42NyA0Mi42N3Y0MDUuODRhMzgzLjM4IDM4My4zOCAwIDAgMSAxMjgtMjEuODRjNzEuODkgMCAxMzkuMTYgMTkuNzUgMTk2LjY4IDU0LjEyQzQ5Mi40NiA0NzMuOTYgNjQxLjA1IDM4NCA4MTAuNjcgMzg0YzQ0LjM3IDAgODcuMzIgNi4xNyAxMjggMTcuNjZWMTcwLjY3QTQyLjY3IDQyLjY3IDAgMCAwIDg5NiAxMjh6TTg1LjMzIDY2OC43NHYxODQuNTlBNDIuNjcgNDIuNjcgMCAwIDAgMTI4IDg5NmgzODAuOTdDNDg4LjI4IDc1MS4yNSAzNjMuOCA2NDAgMjEzLjMzIDY0MGMtNDUuOCAwLTg5LjE5IDEwLjMtMTI4IDI4Ljc0TTU5NC45OSA4OTZIODk2YTQyLjY3IDQyLjY3IDAgMCAwIDQyLjY3LTQyLjY3VjQ5MS4xOGEzODMuMzYgMzgzLjM2IDAgMCAwLTEyOC0yMS44NWMtMTQxLjkxIDAtMjY1LjgxIDc2Ljk3LTMzMi4zMSAxOTEuNDVBMzgyLjk4IDM4Mi45OCAwIDAgMSA1OTQuOTkgODk2Ii8+PC9zdmc+"
  }));
};
j.defaultProps = k;

var _excluded = ["className", "style", "src", "width", "height", "radius", "error", "loading", "onLoad", "onError"];
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
    "selectors": [["nut-image", "nut-image-round"]],
    "declaration": {
      borderTopLeftRadius: "50%",
      borderTopRightRadius: "50%",
      borderBottomLeftRadius: "50%",
      borderBottomRightRadius: "50%",
      overflow: "hidden"
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
    "selectors": ["nut-image", " ", "nut-img"],
    "declaration": {
      display: "block",
      width: "100%",
      height: "100%"
    }
  }, {
    "selectors": ["nut-image", " ", "nut-img-error"],
    "declaration": {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: convertNumber2VP(0),
      left: convertNumber2VP(0),
      display: "flex",
      flexDirection: FlexDirection.Column,
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center,
      backgroundColor: "#f5f6fa",
      backgroundSize: {
        width: "100%",
        height: "100%"
      }
    }
  }, {
    "selectors": ["nut-image", " ", "nut-img-loading"],
    "declaration": {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: convertNumber2VP(0),
      left: convertNumber2VP(0),
      display: "flex",
      flexDirection: FlexDirection.Column,
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center,
      backgroundColor: "#f5f6fa",
      backgroundSize: {
        width: "100%",
        height: "100%"
      }
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-image", " ", "nut-img-error"],
    "declaration": {
      right: convertNumber2VP(0)
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-image", " ", "nut-img-loading"],
    "declaration": {
      right: convertNumber2VP(0)
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-image", " ", "nut-img-error"],
    "declaration": {
      right: convertNumber2VP(0)
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-image", " ", "nut-img-loading"],
    "declaration": {
      right: convertNumber2VP(0)
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
    "nut-image": {
      display: "block",
      position: "relative"
    }
  };
  return __inner_style_data__;
}
var defaultProps = {
  src: "",
  error: true,
  loading: true
};
var Image = function Image2(props) {
  var classPrefix = "nut-image";
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
    className = _defaultProps$props.className,
    style = _defaultProps$props.style,
    src = _defaultProps$props.src,
    width = _defaultProps$props.width,
    height = _defaultProps$props.height,
    radius = _defaultProps$props.radius,
    error = _defaultProps$props.error,
    loading = _defaultProps$props.loading,
    onLoad = _defaultProps$props.onLoad,
    onError = _defaultProps$props.onError,
    rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    innerLoading = _useState2[0],
    setInnerLoading = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isError = _useState4[0],
    setIsError = _useState4[1];
  var pxCheck = function pxCheck2(value) {
    return Number.isNaN(Number(value)) ? String(value) : "".concat(value, "px");
  };
  var handleLoad = function handleLoad2(e) {
    setIsError(false);
    setInnerLoading(false);
    onLoad && onLoad(e);
  };
  var handleError = function handleError2(e) {
    if (src) {
      setIsError(true);
      setInnerLoading(false);
      onError && onError(e);
    }
  };
  var containerStyle = {
    // eslint-disable-next-line no-nested-ternary
    height: height ? Taro.getEnv() === "RN" ? height : pxCheck(height) : Taro.getEnv() === "WEB" ? "" : "100%",
    // eslint-disable-next-line no-nested-ternary
    width: width ? Taro.getEnv() === "RN" ? width : pxCheck(width) : Taro.getEnv() === "WEB" ? "" : "100%",
    overflow: radius !== void 0 && radius !== null ? "hidden" : "",
    borderRadius:
    // eslint-disable-next-line no-nested-ternary
    radius !== void 0 && radius != null ? Taro.getEnv() === "RN" ? radius : pxCheck(radius) : ""
  };
  var imgStyle = _objectSpread2(_objectSpread2({}, style), {}, {
    width: width,
    height: height
  });
  var renderErrorImg = useCallback(function () {
    if (!isError) return null;
    if (typeof error === "boolean" && error === true && !innerLoading) {
      return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "".concat(classPrefix, "-error")),
        className: "".concat(classPrefix, "-error"),
        children: /* @__PURE__ */jsx(N, {})
      }), __nesting_style__());
    }
    if ( /* @__PURE__ */ /*#__PURE__*/React__default.isValidElement(error) && !innerLoading) {
      return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "".concat(classPrefix, "-error")),
        className: "".concat(classPrefix, "-error"),
        children: error
      }), __nesting_style__());
    }
    return null;
  }, [error, isError, innerLoading]);
  var renderLoading = useCallback(function () {
    if (!loading) return null;
    if (typeof loading === "boolean" && loading === true && innerLoading) {
      return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "".concat(classPrefix, "-loading")),
        className: "".concat(classPrefix, "-loading"),
        children: /* @__PURE__ */jsx(j, {})
      }), __nesting_style__());
    }
    if ( /* @__PURE__ */ /*#__PURE__*/React__default.isValidElement(loading) && innerLoading) {
      return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "".concat(classPrefix, "-loading")),
        className: "".concat(classPrefix, "-loading"),
        children: loading
      }), __nesting_style__());
    }
    return null;
  }, [loading, innerLoading]);
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    __hmStyle: calcStaticStyle(__inner_style__(), classNames(classPrefix, className)),
    className: classNames(classPrefix, className),
    style: containerStyle,
    children: [/* @__PURE__ */jsx(TaroImageTagName, _objectSpread2(_objectSpread2({
      __hmStyle: calcStaticStyle(__inner_style__(), "".concat(classPrefix, "-default ").concat(className ? "".concat(className, "-image") : ""))
    }, rest), {}, {
      className: "".concat(classPrefix, "-default ").concat(className ? "".concat(className, "-image") : ""),
      style: imgStyle,
      src: src,
      onLoad: function onLoad2(e) {
        return handleLoad(e);
      },
      onError: function onError2(e) {
        return handleError(e);
      }
    })), !harmonyAndRn() && /* @__PURE__ */jsxs(Fragment, {
      children: [renderLoading(), renderErrorImg()]
    })]
  }), __nesting_style__());
};
Image.displayName = "NutImage";

export { Image as I };
