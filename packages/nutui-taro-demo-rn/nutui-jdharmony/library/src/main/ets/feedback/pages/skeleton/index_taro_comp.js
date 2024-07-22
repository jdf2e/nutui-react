import { createNativePageConfig } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/plugin-framework-react/dist/runtime';
import { _ as _objectSpread2, e as ComponentDefaults, d as _objectWithoutProperties, f as classNames, g as _defineProperty, p as pxTransform, c as ConfigProvider, b as _slicedToArray, u as useTranslate, H as Header, C as Cell, a as harmonyAndRn } from '../../../index.taro.js';
import Taro from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroViewTagName, TaroTextTagName, TaroScrollViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { A as Avatar } from '../../../avatar.taro.js';
import { jsx, Fragment, jsxs } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';
import { I as Image } from '../../../image.taro.js';
import { S as Switch } from '../../../switch.taro.js';
import * as React from '@jd-oh/taro_library/src/main/ets/npm/react';
import { useState } from '@jd-oh/taro_library/src/main/ets/npm/react';
import ReactDOM from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/react';

var _excluded = ["className", "animated", "rows", "title", "avatar", "avatarSize", "visible", "children", "avatarShape"];
var __inner_style_data__$2;
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
    "selectors": ["nut-avatar", " ", "avatar-img"],
    "declaration": {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "50%",
      left: "50%",
      transform: {
        Translate: {
          x: "-50%",
          y: "-50%"
        }
      },
      flexShrink: 0
    }
  }, {
    "selectors": ["nut-avatar", " ", "icon"],
    "declaration": {
      backgroundSize: {
        width: "100%",
        height: "100%"
      },
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: {
        Translate: {
          x: "-50%",
          y: "-50%"
        }
      }
    }
  }, {
    "selectors": ["nut-avatar", " ", "nut-icon-img"],
    "declaration": {
      width: "100%",
      height: "100%"
    }
  }, {
    "selectors": ["nut-avatar", " ", "text"],
    "declaration": {
      width: "100%",
      height: "100%",
      textAlign: TextAlign.Center,
      overflow: "hidden"
    }
  }, {
    "selectors": ["nut-avatar-group", " ", "nut-avatar"],
    "declaration": {
      borderTopWidth: convertNumber2VP(1, "PX"),
      borderRightWidth: convertNumber2VP(1, "PX"),
      borderBottomWidth: convertNumber2VP(1, "PX"),
      borderLeftWidth: convertNumber2VP(1, "PX"),
      borderTopStyle: BorderStyle.Solid,
      borderRightStyle: BorderStyle.Solid,
      borderBottomStyle: BorderStyle.Solid,
      borderLeftStyle: BorderStyle.Solid,
      borderTopColor: "#fff",
      borderRightColor: "#fff",
      borderBottomColor: "#fff",
      borderLeftColor: "#fff"
    }
  }, {
    "selectors": ["nut-avatar-group", " ", "nut-avatar:not(:first-of-type)"],
    "declaration": {
      marginLeft: convertNumber2VP(-8, "PX")
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
    "selectors": ["nut-rtl", " ", "nut-skeleton-animation"],
    "declaration": {
      right: convertNumber2VP(0),
      backgroundImage: {
        angle: -90,
        colors: [["rgba(255, 255, 255, 0)", 0], ["rgba(255, 255, 255, 0.5)", 0.5], ["rgba(255, 255, 255, 0)", 0.800000011920929]]
      },
      backgroundSize: {
        width: "auto",
        height: "auto"
      },
      backgroundPosition: {
        x: "0%",
        y: "0%"
      },
      backgroundRepeat: ImageRepeat.XY,
      animationDelay: 0,
      animationIterationCount: -1,
      animationDuration: 2e3,
      animationTimeingFunction: "ease-in-out",
      animationName: [{
        "percentage": 0,
        "event": {
          backgroundPositionX: convertNumber2VP(500)
        }
      }, {
        "percentage": 1,
        "event": {
          backgroundPositionX: convertNumber2VP(500)
        }
      }]
    }
  }, {
    "selectors": ["nut-skeleton-content-line", " ", "nut-skeleton-content-block"],
    "declaration": _defineProperty({}, "::last-child", {
      width: "70%"
    })
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-skeleton-animation"],
    "declaration": {
      right: convertNumber2VP(0),
      backgroundImage: {
        angle: -90,
        colors: [["rgba(255, 255, 255, 0)", 0], ["rgba(255, 255, 255, 0.5)", 0.5], ["rgba(255, 255, 255, 0)", 0.800000011920929]]
      },
      backgroundSize: {
        width: "auto",
        height: "auto"
      },
      backgroundPosition: {
        x: "0%",
        y: "0%"
      },
      backgroundRepeat: ImageRepeat.XY,
      animationDelay: 0,
      animationIterationCount: -1,
      animationDuration: 2e3,
      animationTimeingFunction: "ease-in-out",
      animationName: [{
        "percentage": 0,
        "event": {
          backgroundPositionX: convertNumber2VP(500)
        }
      }, {
        "percentage": 1,
        "event": {
          backgroundPositionX: convertNumber2VP(500)
        }
      }]
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-avatar", " ", "avatar-img"],
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
    "selectors": ["nut-rtl", " ", "nut-avatar", " ", "icon"],
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
    "selectors": ["nut-rtl", " ", "nut-avatar-group", " ", "nut-avatar:not(:first-of-type)"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: convertNumber2VP(-8, "PX")
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
    "selectors": ["nut-rtl", " ", "nut-skeleton-content", " ", "nut-avatar"],
    "declaration": {
      marginRight: convertNumber2VP(0),
      marginLeft: convertNumber2VP(20, "PX")
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-avatar", " ", "avatar-img"],
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
    "selectors": ['[dir="rtl"]', " ", "nut-avatar", " ", "icon"],
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
    "selectors": ['[dir="rtl"]', " ", "nut-avatar-group", " ", "nut-avatar:not(:first-of-type)"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: convertNumber2VP(-8, "PX")
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
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-skeleton-content", " ", "nut-avatar"],
    "declaration": {
      marginRight: convertNumber2VP(0),
      marginLeft: convertNumber2VP(20, "PX")
    }
  }];
  return __nesting_style_data__$6;
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
    "nut-avatar": {
      backgroundSize: {
        width: "100%",
        height: "100%"
      },
      backgroundRepeat: ImageRepeat.NoRepeat,
      backgroundPosition: Alignment.Center,
      position: "relative",
      flexBasis: "auto",
      flexGrow: 0,
      flexShrink: 0,
      textAlign: TextAlign.Center
    },
    "nut-avatar-group": {
      backgroundSize: {
        width: "100%",
        height: "100%"
      },
      backgroundRepeat: ImageRepeat.NoRepeat,
      backgroundPosition: Alignment.Center,
      position: "relative",
      flexBasis: "auto",
      flexGrow: 0,
      flexShrink: 0
    },
    "nut-avatar-large": {
      width: convertNumber2VP(60, "PX"),
      height: convertNumber2VP(60, "PX"),
      lineHeight: convertNumber2VP(60, "PX")
    },
    "nut-avatar-normal": {
      width: convertNumber2VP(40, "PX"),
      height: convertNumber2VP(40, "PX"),
      lineHeight: convertNumber2VP(40, "PX")
    },
    "nut-avatar-round": {
      borderTopLeftRadius: "50%",
      borderTopRightRadius: "50%",
      borderBottomLeftRadius: "50%",
      borderBottomRightRadius: "50%",
      overflow: "hidden"
    },
    "nut-avatar-small": {
      width: convertNumber2VP(32, "PX"),
      height: convertNumber2VP(32, "PX"),
      lineHeight: convertNumber2VP(32, "PX")
    },
    "nut-avatar-square": {
      borderTopLeftRadius: convertNumber2VP(5, "PX"),
      borderTopRightRadius: convertNumber2VP(5, "PX"),
      borderBottomLeftRadius: convertNumber2VP(5, "PX"),
      borderBottomRightRadius: convertNumber2VP(5, "PX")
    },
    "nut-image": {
      display: "block",
      position: "relative"
    },
    "nut-skeleton": {
      position: "relative",
      overflow: "hidden",
      verticalAlign: Alignment.Center,
      width: "100%"
    },
    "nut-skeleton-animation": {
      position: "absolute",
      top: convertNumber2VP(0),
      left: convertNumber2VP(0),
      width: "100%",
      height: "100%",
      zIndex: 1,
      backgroundImage: {
        angle: 90,
        colors: [["rgba(255, 255, 255, 0)", 0], ["rgba(255, 255, 255, 0.5)", 0.5], ["rgba(255, 255, 255, 0)", 0.800000011920929]]
      },
      backgroundSize: {
        width: "auto",
        height: "auto"
      },
      backgroundPosition: {
        x: "0%",
        y: "0%"
      },
      backgroundRepeat: ImageRepeat.XY,
      animationDelay: 0,
      animationIterationCount: -1,
      animationDuration: 2e3,
      animationTimeingFunction: "ease-in-out",
      animationName: [{
        "percentage": 0,
        "event": {
          backgroundPositionX: convertNumber2VP(500)
        }
      }, {
        "percentage": 1,
        "event": {
          backgroundPositionX: convertNumber2VP(500)
        }
      }]
    },
    "nut-skeleton-content": {
      display: "flex",
      flexDirection: FlexDirection.Row
    },
    "nut-skeleton-content-avatar": {
      marginRight: convertNumber2VP(20, "PX"),
      backgroundColor: "#f5f6fa"
    },
    "nut-skeleton-content-block": {
      width: "100%",
      height: convertNumber2VP(15, "PX"),
      backgroundColor: "#f5f6fa",
      marginTop: convertNumber2VP(10, "PX"),
      borderTopLeftRadius: convertNumber2VP(0),
      borderTopRightRadius: convertNumber2VP(0),
      borderBottomLeftRadius: convertNumber2VP(0),
      borderBottomRightRadius: convertNumber2VP(0)
    },
    "nut-skeleton-content-block-last-child": {
      width: "55%"
    },
    "nut-skeleton-content-line": {
      width: "100%",
      display: "flex",
      flexDirection: FlexDirection.Column
    },
    "nut-skeleton-content-title": {
      width: "30.000002%",
      height: convertNumber2VP(15, "PX"),
      backgroundColor: "#f5f6fa"
    }
  };
  return __inner_style_data__$2;
}
var defaultProps = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  rows: 1,
  animated: false,
  title: false,
  avatar: false,
  avatarSize: "50px",
  visible: false,
  avatarShape: "round"
});
var Skeleton = function Skeleton2(props) {
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
    className = _defaultProps$props.className,
    animated = _defaultProps$props.animated,
    rows = _defaultProps$props.rows,
    title = _defaultProps$props.title,
    avatar = _defaultProps$props.avatar,
    avatarSize = _defaultProps$props.avatarSize,
    visible = _defaultProps$props.visible,
    children = _defaultProps$props.children,
    avatarShape = _defaultProps$props.avatarShape,
    rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-skeleton";
  var classes = classNames(classPrefix, className);
  var avatarClass = classNames(_defineProperty(_defineProperty(_defineProperty({}, "nut-avatar", true), "nut-skeleton-content-avatar", true), "avatar-".concat(avatarShape), avatarShape));
  var repeatLines = function repeatLines2(num) {
    return Array.from({
      length: num
    }, function (v, i) {
      return i;
    });
  };
  var getStyle = function getStyle2() {
    if (avatarSize) {
      return {
        width: pxTransform(parseInt(avatarSize)),
        height: pxTransform(parseInt(avatarSize))
      };
    }
    return {
      width: pxTransform(50),
      height: pxTransform(50)
    };
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: visible ? /* @__PURE__ */jsx(Fragment, {
      children: children
    }) : /* @__PURE__ */jsxs(TaroViewTagName, _objectSpread2(_objectSpread2({
      __hmStyle: calcStaticStyle(__inner_style__$2(), classes),
      className: classes
    }, rest), {}, {
      children: [animated && /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classPrefix, "-animation")),
        className: "".concat(classPrefix, "-animation")
      }), /* @__PURE__ */jsxs(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classPrefix, "-content")),
        className: "".concat(classPrefix, "-content"),
        children: [avatar && /* @__PURE__ */jsx(Avatar, {
          className: avatarClass,
          background: "rgb(239, 239, 239)",
          shape: avatarShape,
          style: getStyle(),
          icon: "null",
          __styleSheet: {
            key: avatarClass,
            value: calcStaticStyle(__inner_style__$2(), avatarClass)
          },
          __hmStyle: calcStaticStyle(__inner_style__$2(), avatarClass)
        }), rows === 1 ? /* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classPrefix, "-content-block")),
          className: "".concat(classPrefix, "-content-block")
        }) : /* @__PURE__ */jsxs(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classPrefix, "-content-line")),
          className: "".concat(classPrefix, "-content-line"),
          children: [title && /* @__PURE__ */jsx(TaroViewTagName, {
            __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classPrefix, "-content-title")),
            className: "".concat(classPrefix, "-content-title")
          }), repeatLines(rows).map(function (item, index) {
            return /* @__PURE__ */jsx(TaroViewTagName, {
              __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classPrefix, "-content-block ").concat(index === repeatLines(rows).length - 1 ? "".concat(classPrefix, "-content-block-last-child") : "")),
              className: "".concat(classPrefix, "-content-block ").concat(index === repeatLines(rows).length - 1 ? "".concat(classPrefix, "-content-block-last-child") : "")
            }, index);
          })]
        })]
      })]
    }))
  }), __nesting_style__$6());
};
Skeleton.displayName = "NutSkeleton";

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
var Demo1 = function Demo12() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(Skeleton, {
    animated: true
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
var Demo2 = function Demo22() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(Skeleton, {
    rows: 3,
    title: true,
    animated: true
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
var Demo3 = function Demo32() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(Skeleton, {
    rows: 3,
    title: true,
    animated: true,
    avatar: true,
    avatarSize: "100px"
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
var Demo4 = function Demo42() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(ConfigProvider, {
    theme: {
      nutuiSkeletonLineBorderRadius: "10px"
    },
    children: /* @__PURE__ */jsx(Skeleton, {
      rows: 3,
      animated: true
    })
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
var Demo5 = function Demo52() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    checked = _useState2[0],
    setChecked = _useState2[1];
  var changeStatus = function changeStatus2(value, event) {
    console.log("触发了change事件，开关状态：".concat(value));
    setChecked(value);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    style: {
      width: "100%"
    },
    children: [/* @__PURE__ */jsx(Switch, {
      onChange: function onChange(value, event) {
        return changeStatus(value);
      },
      style: {
        display: "flex",
        marginBottom: pxTransform(8)
      }
    }), /* @__PURE__ */jsx(Skeleton, {
      title: true,
      animated: true,
      avatar: true,
      rows: 3,
      visible: checked,
      children: /* @__PURE__ */jsxs(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$1(), "nut-skeleton-content"),
        className: "nut-skeleton-content",
        style: {
          display: "flex",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */jsx(Avatar, {
          className: "nut-skeleton-content-avatar",
          style: {
            marginRight: "20px"
          },
          size: "50",
          icon: /* @__PURE__ */jsx(Image, {
            loading: false,
            src: "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
          }),
          __styleSheet: {
            key: "nut-skeleton-content-avatar",
            value: calcStaticStyle(__inner_style__$1(), "nut-skeleton-content-avatar")
          },
          __hmStyle: calcStaticStyle(__inner_style__$1(), "nut-skeleton-content-avatar")
        }), /* @__PURE__ */jsxs(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__$1(), "nut-skeleton-content-line"),
          className: "nut-skeleton-content-line",
          children: [/* @__PURE__ */jsx(TaroTextTagName, {
            __hmStyle: calcStaticStyle(__inner_style__$1(), "nut-skeleton-content-title"),
            className: "nut-skeleton-content-title",
            children: "NutUI-React"
          }), /* @__PURE__ */jsx(TaroViewTagName, {
            __hmStyle: calcStaticStyle(__inner_style__$1(), "description"),
            className: "description",
            children: "一套京东风格的轻量级移动端React组件库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。"
          })]
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
var SkeletonDemo = function SkeletonDemo2() {
  var _useTranslate = useTranslate({
      "zh-CN": {
        "84aa6bce": "基础用法",
        ea3bc18a: "传入多行",
        "02a53df5": "显示头像",
        "0a001122": "标题段落圆角风格",
        "07d62d5c": "显示子组件"
      },
      "zh-TW": {
        "84aa6bce": "基礎用法",
        ea3bc18a: "傳入多行",
        "02a53df5": "顯示頭像",
        "0a001122": "標題段落圓角風格",
        "07d62d5c": "圖片組合"
      },
      "en-US": {
        "84aa6bce": "Basic usage",
        ea3bc18a: "Pass in multiple lines",
        "02a53df5": "show avatar",
        "0a001122": "Heading Paragraph Rounded Corner Style",
        "07d62d5c": "show subcomponents"
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
        children: translated["84aa6bce"]
      }), /* @__PURE__ */jsx(Cell, {
        style: {
          display: "block",
          paddingTop: "3px"
        },
        children: /* @__PURE__ */jsx(Demo1, {})
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.ea3bc18a
      }), /* @__PURE__ */jsx(Cell, {
        style: {
          display: "block"
        },
        children: /* @__PURE__ */jsx(Demo2, {})
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated["02a53df5"]
      }), /* @__PURE__ */jsx(Cell, {
        children: /* @__PURE__ */jsx(Demo3, {})
      }), harmonyAndRn() ? null : /* @__PURE__ */jsxs(Fragment, {
        children: [/* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
          className: "h2",
          children: translated["0a001122"]
        }), /* @__PURE__ */jsx(Cell, {
          style: {
            display: "block"
          },
          children: /* @__PURE__ */jsx(Demo4, {})
        })]
      }), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated["07d62d5c"]
      }), /* @__PURE__ */jsx(Cell, {
        children: /* @__PURE__ */jsx(Demo5, {})
      })]
    })]
  }), __nesting_style__());
};

var config = {
  "navigationBarTitleText": "Skeleton"
};
const index = (function () {
  return createNativePageConfig(SkeletonDemo, 'feedback/pages/skeleton/index', React, ReactDOM, config);
});

export { config, index as default };
