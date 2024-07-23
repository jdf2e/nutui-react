import { createNativePageConfig } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/plugin-framework-react/dist/runtime';
import { t as InnerSwiper, b as _slicedToArray, p as pxTransform, a as harmonyAndRn, s as g, u as useTranslate, H as Header } from '../../../index.taro.js';
import Taro from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroImageTagName, TaroViewTagName, TaroTextTagName, TaroScrollViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { __combine_nesting_style__, convertNumber2VP, calcStaticStyle } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { jsx, jsxs, Fragment } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';
import * as React from '@jd-oh/taro_library/src/main/ets/npm/react';
import React__default, { useState, useEffect } from '@jd-oh/taro_library/src/main/ets/npm/react';
import { e } from '../../../ArrowRight.js';
import ReactDOM from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/react';

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
var list = ["https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg", "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg", "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg", "https://storage.360buyimg.com/jdc-article/fristfabu.jpg"];
var Demo1 = function Demo12() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(InnerSwiper, {
    defaultValue: 1,
    autoPlay: true,
    indicator: true,
    children: list.map(function (item, index) {
      return /* @__PURE__ */jsx(InnerSwiper.Item, {
        children: /* @__PURE__ */jsx(TaroImageTagName, {
          style: {
            width: "100%",
            height: "100%"
          },
          onClick: function onClick() {
            return console.log(index);
          },
          src: item
        })
      }, item);
    })
  }), __nesting_style__$8());
};

var Demo2 = function Demo22() {
  var list = ["https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg", "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg", "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg", "https://storage.360buyimg.com/jdc-article/fristfabu.jpg"];
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    asyncList = _useState2[0],
    setAsyncList = _useState2[1];
  useEffect(function () {
    setTimeout(function () {
      setAsyncList(list);
    }, 3e3);
  }, []);
  return asyncList.length ? /* @__PURE__ */jsx(InnerSwiper, {
    defaultValue: 0,
    indicator: true,
    children: asyncList.map(function (item, index) {
      return /* @__PURE__ */jsx(InnerSwiper.Item, {
        children: /* @__PURE__ */jsx(TaroImageTagName, {
          style: {
            width: "100%",
            height: "100%"
          },
          src: item
        })
      }, item);
    })
  }) : null;
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
var Demo3 = function Demo32() {
  var list = ["https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg", "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg", "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg", "https://storage.360buyimg.com/jdc-article/fristfabu.jpg"];
  return __combine_nesting_style__( /* @__PURE__ */jsx(InnerSwiper, {
    width: pxTransform(300),
    height: pxTransform(150),
    defaultValue: 0,
    indicator: true,
    children: list.map(function (item) {
      return /* @__PURE__ */jsx(InnerSwiper.Item, {
        children: /* @__PURE__ */jsx(TaroImageTagName, {
          style: {
            width: "100%",
            height: "100%"
          },
          src: item
        })
      }, item);
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
var Demo4 = function Demo42() {
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    current = _useState2[0],
    setCurrent = _useState2[1];
  var list = ["https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg", "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg", "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg", "https://storage.360buyimg.com/jdc-article/fristfabu.jpg"];
  return __combine_nesting_style__( /* @__PURE__ */jsx(InnerSwiper, {
    defaultValue: 0,
    onChange: function onChange(e) {
      setCurrent(e.detail.current);
    },
    indicator: /* @__PURE__ */jsx(TaroViewTagName, {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: "85%",
        top: pxTransform(120),
        width: pxTransform(46),
        height: pxTransform(22),
        backgroundColor: "rgba(0, 0, 0, 0.33)",
        borderRadius: pxTransform(22),
        textAlign: "center",
        fontSize: pxTransform(14),
        zIndex: 1
      },
      children: /* @__PURE__ */jsxs(TaroTextTagName, {
        style: {
          color: "#fff"
        },
        children: [current + 1, "/", list.length]
      })
    }),
    children: list.map(function (item) {
      return /* @__PURE__ */jsx(InnerSwiper.Item, {
        children: /* @__PURE__ */jsx(TaroImageTagName, {
          style: {
            width: "100%",
            height: "100%"
          },
          src: item
        })
      }, item);
    })
  }), __nesting_style__$6());
};

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
    "h5-span": {}
  };
  return __inner_style_data__$2;
}
function Demo5() {
  var swiperRef = React__default.useRef(null);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    current2 = _useState2[0],
    setCurrent2 = _useState2[1];
  var list = ["https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg", "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg", "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg", "https://storage.360buyimg.com/jdc-article/fristfabu.jpg"];
  var btnsStyle = {
    position: "absolute",
    top: pxTransform(60),
    left: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: pxTransform(30),
    zIndex: 1
  };
  var spanStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: pxTransform(20),
    height: pxTransform(30),
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    __hmStyle: calcStaticStyle(__inner_style__$2(), "demo-box"),
    className: "demo-box",
    style: {
      height: pxTransform(150),
      position: "relative"
    },
    children: [/* @__PURE__ */jsx(InnerSwiper, {
      ref: swiperRef,
      defaultValue: 0,
      onChange: function onChange(e) {
        setCurrent2(e.detail.current);
      },
      indicator: /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$2(), "page"),
        className: "page",
        children: /* @__PURE__ */jsxs(TaroTextTagName, {
          children: [current2 + 1, "/", list.length]
        })
      }),
      children: list.map(function (item) {
        return /* @__PURE__ */jsx(InnerSwiper.Item, {
          children: /* @__PURE__ */jsx(TaroImageTagName, {
            src: item,
            style: {
              width: "100%",
              height: "100%"
            }
          })
        }, item);
      })
    }), /* @__PURE__ */jsxs(TaroViewTagName, {
      style: btnsStyle,
      children: [/* @__PURE__ */jsx(TaroViewTagName, {
        style: spanStyle,
        onClick: function onClick(e) {
          var _swiperRef$current;
          return (_swiperRef$current = swiperRef.current) === null || _swiperRef$current === void 0 ? void 0 : _swiperRef$current.prev();
        },
        children: !harmonyAndRn() ? /* @__PURE__ */jsx(g, {}) : null
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        style: spanStyle,
        onClick: function onClick(e) {
          var _swiperRef$current2;
          return (_swiperRef$current2 = swiperRef.current) === null || _swiperRef$current2 === void 0 ? void 0 : _swiperRef$current2.next();
        },
        children: !harmonyAndRn() ? /* @__PURE__ */jsx(e, {}) : null
      })]
    })]
  }), __nesting_style__$5());
}

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
var Demo6 = function Demo62() {
  var list = ["https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg", "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg", "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg", "https://storage.360buyimg.com/jdc-article/fristfabu.jpg"];
  return __combine_nesting_style__( /* @__PURE__ */jsx(InnerSwiper, {
    defaultValue: 0,
    direction: "vertical",
    indicator: true,
    children: list.map(function (item) {
      return /* @__PURE__ */jsx(InnerSwiper.Item, {
        children: /* @__PURE__ */jsx(TaroImageTagName, {
          style: {
            width: "100%",
            height: "100%"
          },
          src: item
        })
      }, item);
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
var Demo7 = function Demo72() {
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    _useState2[1];
  var list = ["https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg", "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg", "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg", "https://storage.360buyimg.com/jdc-article/fristfabu.jpg"];
  return __combine_nesting_style__( /* @__PURE__ */jsx(InnerSwiper, {
    defaultValue: 0,
    loop: true,
    previousMargin: "20px",
    nextMargin: "20px",
    children: list.map(function (item) {
      return /* @__PURE__ */jsx(InnerSwiper.Item, {
        children: /* @__PURE__ */jsx(TaroImageTagName, {
          style: {
            width: "100%",
            height: "100%"
          },
          src: item
        })
      }, item);
    })
  }), __nesting_style__$3());
};

var __inner_style_data__$1;
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
var Demo8 = function Demo82() {
  var list = ["https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg", "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg", "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg", "https://storage.360buyimg.com/jdc-article/fristfabu.jpg"];
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
    __hmStyle: calcStaticStyle(__inner_style__$1(), "demo-box vertical-center"),
    className: "demo-box vertical-center",
    children: /* @__PURE__ */jsx(InnerSwiper, {
      defaultValue: 0,
      direction: "vertical",
      height: pxTransform(220),
      previousMargin: "20px",
      nextMargin: "20px",
      indicator: true,
      children: list.map(function (item) {
        return /* @__PURE__ */jsx(InnerSwiper.Item, {
          children: /* @__PURE__ */jsx(TaroImageTagName, {
            style: {
              width: "100%",
              height: "100%"
            },
            src: item
          })
        }, item);
      })
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
var Demo9 = function Demo92() {
  return __combine_nesting_style__( /* @__PURE__ */jsxs(InnerSwiper, {
    height: pxTransform(120),
    loop: true,
    autoPlay: true,
    style: {
      justifyContent: "flex-start",
      alignItems: "flex-start"
    },
    children: [/* @__PURE__ */jsx(InnerSwiper.Item, {
      children: /* @__PURE__ */jsxs(TaroViewTagName, {
        style: {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          flexWrap: "nowrap"
        },
        children: [/* @__PURE__ */jsx(TaroViewTagName, {
          style: {
            width: "25%"
          },
          children: "Item1"
        }), /* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            width: "25%"
          },
          children: "Item2"
        }), /* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            width: "25%"
          },
          children: "Item3"
        }), /* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            width: "25%"
          },
          children: "Item4"
        })]
      })
    }), /* @__PURE__ */jsx(InnerSwiper.Item, {
      children: /* @__PURE__ */jsxs(TaroViewTagName, {
        style: {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          flexWrap: "nowrap"
        },
        children: [/* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            width: "25%"
          },
          children: "Item1"
        }), /* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            width: "25%"
          },
          children: "Item2"
        }), /* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            width: "25%"
          },
          children: "Item3"
        }), /* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            width: "25%"
          },
          children: "Item4"
        })]
      })
    }), /* @__PURE__ */jsx(InnerSwiper.Item, {
      children: /* @__PURE__ */jsxs(TaroViewTagName, {
        style: {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          flexWrap: "nowrap"
        },
        children: [/* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            width: "25%"
          },
          children: "Item1"
        }), /* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            width: "25%"
          },
          children: "Item2"
        }), /* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            width: "25%"
          },
          children: "Item3"
        }), /* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            width: "25%"
          },
          children: "Item4"
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
  }, {
    "selectors": ["nut-rtl", " ", "nut-swiper-btns", " ", "nut-icon"],
    "declaration": {
      transform: {
        Rotate: {
          z: 1,
          angle: 180
        }
      }
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-swiper-btns", " ", "nut-icon"],
    "declaration": {
      transform: {
        Rotate: {
          z: 1,
          angle: 180
        }
      }
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
var SwiperDemo = function SwiperDemo2() {
  var _useTranslate = useTranslate({
      "zh-CN": {
        basic: "基础用法",
        asyc: "异步加载(3s)",
        size: "自定义大小",
        indicator: "自定义指示器",
        btns: "手动切换",
        vertical: "垂直方向",
        horizontalCenter: "水平居中展示（无指示器）",
        verticalCenter: "垂直居中展示",
        multiItems: "一屏多个数据时"
      },
      "en-US": {
        basic: "Basic Usage",
        asyc: "Asynchronous loading(3s)",
        size: "Custom size",
        indicator: "Custom indicator",
        btns: "Manual switching",
        vertical: "Vertical direction",
        horizontalCenter: "Horizontal center display(no indicator)",
        verticalCenter: "Vertical center display",
        multiItems: "many datas in a frame"
      }
    }),
    _useTranslate2 = _slicedToArray(_useTranslate, 1),
    translated = _useTranslate2[0];
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Header, {}), /* @__PURE__ */jsxs(TaroScrollViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), "demo ".concat(Taro.getEnv() === "WEB" ? "web" : "", " padding")),
      className: "demo ".concat(Taro.getEnv() === "WEB" ? "web" : "", " padding"),
      children: [/* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.basic
      }), /* @__PURE__ */jsx(Demo1, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.asyc
      }), /* @__PURE__ */jsx(Demo2, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.size
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        style: {
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "center"
        },
        children: /* @__PURE__ */jsx(Demo3, {})
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.indicator
      }), /* @__PURE__ */jsx(Demo4, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.btns
      }), /* @__PURE__ */jsx(Demo5, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.vertical
      }), /* @__PURE__ */jsx(Demo6, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.horizontalCenter
      }), /* @__PURE__ */jsx(Demo7, {}), !harmonyAndRn() ? /* @__PURE__ */jsxs(Fragment, {
        children: [/* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
          className: "h2",
          children: translated.verticalCenter
        }), /* @__PURE__ */jsx(Demo8, {})]
      }) : null, /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.multiItems
      }), /* @__PURE__ */jsx(Demo9, {})]
    })]
  }), __nesting_style__());
};

var config = {
  "navigationBarTitleText": "Swiper"
};
const index = (function () {
  return createNativePageConfig(SwiperDemo, 'exhibition/pages/swiper/index', React, ReactDOM, config);
});

export { config, index as default };
