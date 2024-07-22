import { createNativePageConfig } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/plugin-framework-react/dist/runtime';
import { _ as _objectSpread2, e as ComponentDefaults, l as useConfig, d as _objectWithoutProperties, b as _slicedToArray, f as classNames, g as _defineProperty, a as harmonyAndRn, s as g, u as useTranslate, H as Header, C as Cell } from '../../../index.taro.js';
import Taro from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroViewTagName, TaroScrollViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import * as React from '@jd-oh/taro_library/src/main/ets/npm/react';
import { useMemo, useState } from '@jd-oh/taro_library/src/main/ets/npm/react';
import { u as usePropsValue } from '../../../use-props-value.js';
import { jsxs, Fragment, jsx } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';
import { e } from '../../../ArrowRight.js';
import ReactDOM from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/react';

var _excluded = ["value", "mode", "prev", "next", "total", "pageSize", "itemSize", "onChange", "ellipse", "itemRender", "defaultValue", "className", "style"];
var __inner_style_data__$1;
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
    "nut-pagination": {
      display: "flex",
      flexDirection: FlexDirection.Row,
      fontSize: convertNumber2VP(14, "PX"),
      color: "#ff0f23"
    },
    "nut-pagination-contain": {
      display: "flex",
      flexDirection: FlexDirection.Row
    },
    "nut-pagination-item": {
      height: convertNumber2VP(39, "PX"),
      minWidth: convertNumber2VP(39, "PX"),
      flexShrink: 0,
      boxSizing: "border-box",
      display: "flex",
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center,
      fontSize: convertNumber2VP(14, "PX"),
      color: "#ff0f23",
      backgroundColor: "#fff",
      borderTopLeftRadius: convertNumber2VP(2, "PX"),
      borderTopRightRadius: convertNumber2VP(2, "PX"),
      borderBottomLeftRadius: convertNumber2VP(2, "PX"),
      borderBottomRightRadius: convertNumber2VP(2, "PX"),
      borderTopWidth: convertNumber2VP(1, "PX"),
      borderRightWidth: convertNumber2VP(0),
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
      cursor: "pointer"
    },
    "nut-pagination-item-active": {
      color: "#fff",
      borderTopWidth: convertNumber2VP(0),
      borderBottomWidth: convertNumber2VP(0),
      borderLeftWidth: convertNumber2VP(0),
      borderRightWidth: convertNumber2VP(0),
      backgroundColor: "#ff0f23"
    },
    "nut-pagination-item-disabled": {
      color: "#c2c4cc",
      backgroundColor: "#f7f8fa",
      cursor: "not-allowed"
    },
    "nut-pagination-lite": {
      width: convertNumber2VP(40, "PX"),
      height: convertNumber2VP(20, "PX"),
      display: "flex",
      flexDirection: FlexDirection.Row,
      color: "#fff",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      borderTopLeftRadius: convertNumber2VP(6, "PX"),
      borderTopRightRadius: convertNumber2VP(6, "PX"),
      borderBottomLeftRadius: convertNumber2VP(6, "PX"),
      borderBottomRightRadius: convertNumber2VP(6, "PX")
    },
    "nut-pagination-lite-active": {
      display: "flex",
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center,
      width: convertNumber2VP(20, "PX"),
      height: convertNumber2VP(20, "PX"),
      fontSize: convertNumber2VP(12, "PX"),
      color: "#fff",
      fontWeight: 400,
      borderTopLeftRadius: convertNumber2VP(6, "PX"),
      borderTopRightRadius: convertNumber2VP(6, "PX"),
      borderBottomLeftRadius: convertNumber2VP(6, "PX"),
      borderBottomRightRadius: convertNumber2VP(6, "PX"),
      backgroundColor: "rgba(0, 0, 0, 0.2)"
    },
    "nut-pagination-lite-default": {
      display: "flex",
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center,
      width: convertNumber2VP(20, "PX"),
      height: convertNumber2VP(20, "PX"),
      fontSize: convertNumber2VP(12, "PX"),
      color: "#fff",
      fontWeight: 400
    },
    "nut-pagination-next": {
      height: convertNumber2VP(39, "PX"),
      minWidth: convertNumber2VP(39, "PX"),
      flexShrink: 0,
      boxSizing: "border-box",
      display: "flex",
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center,
      fontSize: convertNumber2VP(14, "PX"),
      color: "#ff0f23",
      backgroundColor: "#fff",
      borderTopLeftRadius: convertNumber2VP(2, "PX"),
      borderTopRightRadius: convertNumber2VP(2, "PX"),
      borderBottomLeftRadius: convertNumber2VP(2, "PX"),
      borderBottomRightRadius: convertNumber2VP(2, "PX"),
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
      cursor: "pointer",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(12, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(12, "PX")
    },
    "nut-pagination-next-disabled": {
      color: "#c2c4cc",
      backgroundColor: "#f7f8fa",
      cursor: "not-allowed"
    },
    "nut-pagination-prev": {
      height: convertNumber2VP(39, "PX"),
      minWidth: convertNumber2VP(39, "PX"),
      flexShrink: 0,
      boxSizing: "border-box",
      display: "flex",
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center,
      fontSize: convertNumber2VP(14, "PX"),
      color: "#ff0f23",
      backgroundColor: "#fff",
      borderTopLeftRadius: convertNumber2VP(2, "PX"),
      borderTopRightRadius: convertNumber2VP(2, "PX"),
      borderBottomLeftRadius: convertNumber2VP(2, "PX"),
      borderBottomRightRadius: convertNumber2VP(2, "PX"),
      borderTopWidth: convertNumber2VP(1, "PX"),
      borderRightWidth: convertNumber2VP(0),
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
      cursor: "pointer",
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(12, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(12, "PX")
    },
    "nut-pagination-prev-disabled": {
      color: "#c2c4cc",
      backgroundColor: "#f7f8fa",
      cursor: "not-allowed"
    },
    "nut-pagination-simple": {
      height: convertNumber2VP(39, "PX"),
      width: convertNumber2VP(124, "PX"),
      lineHeight: convertNumber2VP(39, "PX"),
      textAlign: TextAlign.Center,
      fontSize: convertNumber2VP(14, "PX"),
      color: "#ff0f23"
    },
    "nut-pagination-simple-border": {
      borderRightWidth: convertNumber2VP(1, "PX"),
      borderRightStyle: BorderStyle.Solid,
      borderRightColor: "rgba(0, 0, 0, 0.06)"
    }
  };
  return __inner_style_data__$1;
}
var defaultProps = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  defaultValue: 1,
  mode: "multi",
  prev: null,
  next: null,
  total: 50,
  pageSize: 10,
  itemSize: 5,
  ellipse: false
});
var Pagination = function Pagination2(props) {
  var _useConfig = useConfig(),
    locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
    value = _defaultProps$props.value,
    mode = _defaultProps$props.mode,
    prev = _defaultProps$props.prev,
    next = _defaultProps$props.next,
    total = _defaultProps$props.total,
    pageSize = _defaultProps$props.pageSize,
    itemSize = _defaultProps$props.itemSize,
    onChange = _defaultProps$props.onChange,
    ellipse = _defaultProps$props.ellipse,
    itemRender = _defaultProps$props.itemRender,
    defaultValue = _defaultProps$props.defaultValue,
    className = _defaultProps$props.className,
    style = _defaultProps$props.style;
    _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-pagination";
  var _usePropsValue = usePropsValue({
      value: value,
      defaultValue: defaultValue,
      finalValue: 1,
      onChange: onChange
    }),
    _usePropsValue2 = _slicedToArray(_usePropsValue, 2),
    currentPage = _usePropsValue2[0],
    setCurrentPage = _usePropsValue2[1];
  var pageCount = useMemo(function () {
    var num = Math.ceil(total / pageSize);
    return Number.isNaN(num) ? 1 : Math.max(1, num);
  }, [total, pageSize]);
  var pages = useMemo(function () {
    var items = [];
    var startPage = 1;
    var endPage = pageCount;
    var partialShow = pageCount > itemSize;
    if (partialShow) {
      startPage = Math.max(currentPage - Math.floor(itemSize / 2), 1);
      endPage = startPage + itemSize - 1;
      if (endPage > pageCount) {
        endPage = pageCount;
        startPage = endPage - itemSize + 1;
      }
    }
    for (var i = startPage; i <= endPage; i++) {
      items.push({
        number: i,
        text: i
      });
    }
    if (partialShow && itemSize > 0 && ellipse) {
      if (startPage > 1) {
        items.unshift({
          number: startPage - 1,
          text: "..."
        });
      }
      if (endPage < pageCount) {
        items.push({
          number: endPage + 1,
          text: "..."
        });
      }
    }
    return items;
  }, [currentPage, itemSize, pageCount]);
  var handleSelectPage = function handleSelectPage2(curPage) {
    if (curPage > pageCount || curPage < 1) return;
    setCurrentPage(curPage);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    __hmStyle: calcStaticStyle(__inner_style__$1(), classNames(classPrefix, className)),
    className: classNames(classPrefix, className),
    style: style,
    children: [(mode === "multi" || mode === "simple") && /* @__PURE__ */jsxs(Fragment, {
      children: [/* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$1(), classNames("".concat(classPrefix, "-prev"), mode === "multi" ? "" : "".concat(classPrefix, "-simple-border"), currentPage === 1 ? "".concat(classPrefix, "-prev-disabled") : "")),
        className: classNames("".concat(classPrefix, "-prev"), mode === "multi" ? "" : "".concat(classPrefix, "-simple-border"), currentPage === 1 ? "".concat(classPrefix, "-prev-disabled") : ""),
        onClick: function onClick(e) {
          return handleSelectPage(currentPage - 1);
        },
        children: prev || locale.pagination.prev
      }), mode === "multi" && /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$1(), "".concat(classPrefix, "-contain")),
        className: "".concat(classPrefix, "-contain"),
        children: pages.map(function (item, index) {
          return /* @__PURE__ */jsx(TaroViewTagName, {
            __hmStyle: calcStaticStyle(__inner_style__$1(), classNames("".concat(classPrefix, "-item"), _defineProperty({}, "".concat(classPrefix, "-item-active"), item.number === currentPage))),
            className: classNames("".concat(classPrefix, "-item"), _defineProperty({}, "".concat(classPrefix, "-item-active"), item.number === currentPage)),
            onClick: function onClick(e) {
              item.number !== currentPage && handleSelectPage(item.number);
            },
            children: itemRender ? itemRender(item, currentPage) : item.text
          }, "".concat(index, "pagination"));
        })
      }), mode === "simple" && /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$1(), "".concat(classPrefix, "-contain")),
        className: "".concat(classPrefix, "-contain"),
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__$1(), "".concat(classPrefix, "-simple")),
          className: "".concat(classPrefix, "-simple"),
          children: "".concat(currentPage, "/").concat(pageCount)
        })
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$1(), classNames("".concat(classPrefix, "-next"), currentPage >= pageCount ? "".concat(classPrefix, "-next-disabled") : "")),
        className: classNames("".concat(classPrefix, "-next"), currentPage >= pageCount ? "".concat(classPrefix, "-next-disabled") : ""),
        onClick: function onClick(e) {
          return handleSelectPage(currentPage + 1);
        },
        children: next || locale.pagination.next
      })]
    }), mode === "lite" && /* @__PURE__ */jsx(Fragment, {
      children: /* @__PURE__ */jsxs(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$1(), "".concat(classPrefix, "-lite")),
        className: "".concat(classPrefix, "-lite"),
        children: [/* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__$1(), "".concat(classPrefix, "-lite-active")),
          className: "".concat(classPrefix, "-lite-active"),
          children: currentPage
        }), /* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__$1(), "".concat(classPrefix, "-lite-default")),
          className: "".concat(classPrefix, "-lite-default"),
          children: pageCount
        })]
      })
    })]
  }), __nesting_style__$7());
};
Pagination.displayName = "NutPagination";

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
var Demo1 = function Demo12() {
  var _useState = useState(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage1 = _useState2[0],
    setCurrentPage1 = _useState2[1];
  var pageChange1 = function pageChange12(v) {
    var c = v;
    setCurrentPage1(c);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(Pagination, {
    value: currentPage1,
    total: 20,
    pageSize: 5,
    onChange: pageChange1
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
  var _useState = useState(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage2 = _useState2[0],
    setCurrentPage2 = _useState2[1];
  var pageChange2 = function pageChange22(v) {
    var c = v;
    setCurrentPage2(c);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(Pagination, {
    value: currentPage2,
    total: 12,
    pageSize: 1,
    mode: "simple",
    onChange: pageChange2
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
var Demo3 = function Demo32() {
  var _useState = useState(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage2 = _useState2[0],
    setCurrentPage2 = _useState2[1];
  var pageChange2 = function pageChange22(v) {
    var c = v;
    setCurrentPage2(c);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(Pagination, {
    value: currentPage2,
    total: 12,
    pageSize: 1,
    mode: "lite",
    onChange: pageChange2
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
var Demo4 = function Demo42() {
  var _useState = useState(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage3 = _useState2[0],
    setCurrentPage3 = _useState2[1];
  var pageChange3 = function pageChange32(v) {
    var c = v;
    setCurrentPage3(c);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(Pagination, {
    value: currentPage3,
    total: 125,
    itemSize: 2,
    ellipse: true,
    onChange: pageChange3
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
var Demo5 = function Demo52() {
  var _useState = useState(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage4 = _useState2[0],
    setCurrentPage4 = _useState2[1];
  var pageChange4 = function pageChange42(v) {
    var c = v;
    setCurrentPage4(c);
  };
  var itemRender = function itemRender2(page, current) {
    return /* @__PURE__ */jsx(TaroViewTagName, {
      style: {
        color: current === page.number ? "#fff" : "#ff0f23"
      },
      children: page.number === 3 ? "hot" : page.text
    });
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(Pagination, {
    value: currentPage4,
    total: 500,
    itemSize: 5,
    onChange: pageChange4,
    itemRender: itemRender,
    prev: !harmonyAndRn() ? /* @__PURE__ */jsx(g, {}) : null,
    next: !harmonyAndRn() ? /* @__PURE__ */jsx(e, {}) : null
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
var Demo6 = function Demo62() {
  var pageChange5 = function pageChange52(v) {
    console.log(v);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(Pagination, {
    defaultValue: 15,
    total: 500,
    pageSize: 10,
    itemSize: 3,
    onChange: pageChange5
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
var PaginationDemo = function PaginationDemo2() {
  var _useTranslate = useTranslate({
      "zh-CN": {
        basic: "基础用法",
        simple: "简单模式",
        lite: "极简模式",
        ellipse: "显示省略号",
        custom: "自定义按钮",
        uncontrolled: "非受控方式"
      },
      "zh-TW": {
        basic: "基礎用法",
        simple: "簡單模式",
        lite: "极简模式",
        ellipse: "顯示省略號",
        custom: "自定義按鈕",
        uncontrolled: "非受控方式"
      },
      "en-US": {
        basic: "Basic usage",
        simple: "Simple mode",
        lite: "lite Mode",
        ellipse: "Show ellipsis",
        custom: "Custom button",
        uncontrolled: "Uncontrolled mode"
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
      }), /* @__PURE__ */jsx(Cell, {
        children: /* @__PURE__ */jsx(Demo1, {})
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.simple
      }), /* @__PURE__ */jsx(Cell, {
        children: /* @__PURE__ */jsx(Demo2, {})
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.lite
      }), /* @__PURE__ */jsx(Cell, {
        children: /* @__PURE__ */jsx(Demo3, {})
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.ellipse
      }), /* @__PURE__ */jsx(Cell, {
        children: /* @__PURE__ */jsx(Demo4, {})
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.custom
      }), /* @__PURE__ */jsx(Cell, {
        children: /* @__PURE__ */jsx(Demo5, {})
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.uncontrolled
      }), /* @__PURE__ */jsx(Cell, {
        children: /* @__PURE__ */jsx(Demo6, {})
      })]
    })]
  }), __nesting_style__());
};

var config = {
  "navigationBarTitleText": "Pagination"
};
const index = (function () {
  return createNativePageConfig(PaginationDemo, 'exhibition/pages/pagination/index', React, ReactDOM, config);
});

export { config, index as default };
