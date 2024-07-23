import { createNativePageConfig } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/plugin-framework-react/dist/runtime';
import { _ as _objectSpread2, e as ComponentDefaults, b as _slicedToArray, f as classNames, g as _defineProperty, C as Cell, a as harmonyAndRn, u as useTranslate, H as Header, r as rn } from '../../../index.taro.js';
import Taro from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroViewTagName, TaroScrollViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import * as React from '@jd-oh/taro_library/src/main/ets/npm/react';
import { useState, useEffect } from '@jd-oh/taro_library/src/main/ets/npm/react';
import { window, __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { a as useCustomEvent, b as useCustomEventsPath, c as customEvents } from '../../../use-custom-event.js';
import { jsx, Fragment, jsxs } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';
import { C as CSSTransition } from '../../../CSSTransition.js';
import ReactDOM from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/react';

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
    "fade-appear": {
      opacity: 0
    },
    "fade-appear-active": {
      opacity: 1,
      transition: "opacity 1s"
    },
    "fade-enter": {
      opacity: 0
    },
    "fade-enter-active": {
      opacity: 1,
      transition: "opacity 1s"
    },
    "fade-enter-done": {
      opacity: 1
    },
    "fade-exit": {
      opacity: 1
    },
    "fade-exit-active": {
      opacity: 0,
      transition: "opacity 1s"
    },
    "fade-exit-done": {
      opacity: 0
    },
    "h5-body": {
      fontSize: convertNumber2VP(14)
    },
    "h5-span": {},
    "nut-notify": {
      display: "flex",
      justifyContent: FlexAlign.Center,
      alignItems: ItemAlign.Center,
      boxSizing: "border-box",
      paddingTop: convertNumber2VP(0, "PX"),
      paddingRight: convertNumber2VP(10, "PX"),
      paddingBottom: convertNumber2VP(0, "PX"),
      paddingLeft: convertNumber2VP(10, "PX"),
      color: "#fff",
      fontSize: convertNumber2VP(14, "PX"),
      whiteSpace: "pre-wrap",
      wordWrap: "break-word",
      height: convertNumber2VP(40, "PX")
    },
    "nut-notify-base": {
      backgroundColor: "#ff0f23"
    },
    "nut-notify-danger": {
      backgroundColor: "#ff0f23"
    },
    "nut-notify-popup-bottom": {
      position: "fixed",
      left: convertNumber2VP(0),
      right: convertNumber2VP(0),
      overflowY: "auto",
      transition: "transform .3s",
      zIndex: 9999,
      bottom: convertNumber2VP(0)
    },
    "nut-notify-popup-top": {
      position: "fixed",
      left: convertNumber2VP(0),
      right: convertNumber2VP(0),
      overflowY: "auto",
      transition: "transform .3s",
      zIndex: 9999,
      top: convertNumber2VP(0)
    },
    "nut-notify-primary": {
      backgroundColor: "#1988fa"
    },
    "nut-notify-success": {
      backgroundColor: "#2aa32a"
    },
    "nut-notify-warning": {
      backgroundColor: "#c47600"
    }
  };
  return __inner_style_data__$2;
}
var defaultProps = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  id: "",
  duration: 3e3,
  type: "danger",
  position: "top",
  visible: false,
  onClose: function onClose() {},
  onClick: function onClick() {}
});
var classPrefix = "nut-notify";
var Notify = function Notify2(props) {
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
    id = _defaultProps$props.id,
    children = _defaultProps$props.children,
    style = _defaultProps$props.style,
    type = _defaultProps$props.type,
    className = _defaultProps$props.className,
    position = _defaultProps$props.position,
    visible = _defaultProps$props.visible,
    duration = _defaultProps$props.duration,
    onClose2 = _defaultProps$props.onClose,
    onClick2 = _defaultProps$props.onClick;
  useCustomEvent(id, function (status) {
    status ? show() : hide();
  });
  var timer;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showNotify = _useState2[0],
    setShowNotify = _useState2[1];
  useEffect(function () {
    if (visible) {
      show();
    } else {
      hide();
    }
  }, [visible]);
  var clickHandle = function clickHandle2() {
    onClick2();
  };
  var show = function show2() {
    setShowNotify(true);
    clearTimer();
    if (duration) {
      timer = window.setTimeout(function () {
        hide();
      }, duration);
    }
  };
  var clearTimer = function clearTimer2() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };
  var hide = function hide2() {
    setShowNotify(false);
    onClose2();
  };
  var classes = classNames(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-popup-top"), position === "top"), "".concat(classPrefix, "-popup-bottom"), position === "bottom"), "".concat(classPrefix), true), "".concat(classPrefix, "-").concat(type), true));
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: Taro.getEnv() !== Taro.ENV_TYPE.RN ? /* @__PURE__ */jsx(CSSTransition, {
      in: showNotify,
      timeout: 300,
      classNames: "fade",
      unmountOnExit: true,
      appear: true,
      position: position,
      id: id,
      children: /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classes, " ").concat(className)),
        className: "".concat(classes, " ").concat(className),
        style: style,
        onClick: clickHandle,
        children: children
      })
    }) : /* @__PURE__ */jsx(Fragment, {
      children: showNotify ? /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$2(), "".concat(classes, " ").concat(className)),
        className: "".concat(classes, " ").concat(className),
        style: _objectSpread2(_objectSpread2({}, style), {}, {
          position: "absolute"
        }),
        onClick: clickHandle,
        children: children
      }) : null
    })
  }), __nesting_style__$5());
};
function open(selector) {
  var path = useCustomEventsPath(selector);
  customEvents.trigger(path, true);
}
function close(selector) {
  var path = useCustomEventsPath(selector);
  customEvents.trigger(path, false);
}
Notify.defaultProps = defaultProps;
Notify.displayName = "NutNotify";
Notify.open = open;
Notify.close = close;

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
var Demo1 = function Demo12() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showNotify = _useState2[0],
    setShowNotify = _useState2[1];
  var _useState3 = useState({
      message: "",
      type: "danger"
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    states = _useState4[0],
    setStates = _useState4[1];
  var changeNotify = function changeNotify2(message, type) {
    var change = Object.assign(states, {
      message: message,
      type: type
    });
    setStates(change);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Notify, {
      visible: showNotify,
      type: states.type,
      onClose: function onClose() {
        setShowNotify(false);
      },
      onClick: function onClick() {
        console.log("click");
      },
      children: states.message
    }), /* @__PURE__ */jsx(Cell, {
      title: "基础用法",
      onClick: function onClick(event) {
        changeNotify("基础用法");
        setShowNotify(true);
      }
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
var Demo2 = function Demo22() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showNotify = _useState2[0],
    setShowNotify = _useState2[1];
  var _useState3 = useState({
      message: "",
      type: "danger"
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    states = _useState4[0],
    setStates = _useState4[1];
  var changeNotify = function changeNotify2(message, type) {
    var change = Object.assign(states, {
      message: message,
      type: type
    });
    setStates(change);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Notify, {
      visible: showNotify,
      type: states.type,
      onClose: function onClose() {
        setShowNotify(false);
      },
      children: states.message
    }), /* @__PURE__ */jsxs(Cell.Group, {
      children: [/* @__PURE__ */jsx(Cell, {
        title: "主要通知",
        onClick: function onClick(event) {
          changeNotify("主要通知", "primary");
          setShowNotify(true);
        }
      }), /* @__PURE__ */jsx(Cell, {
        title: "成功通知",
        onClick: function onClick(event) {
          changeNotify("成功通知", "success");
          setShowNotify(true);
        }
      }), /* @__PURE__ */jsx(Cell, {
        title: "危险通知",
        onClick: function onClick(event) {
          changeNotify("危险通知", "danger");
          setShowNotify(true);
        }
      }), /* @__PURE__ */jsx(Cell, {
        title: "警告通知",
        onClick: function onClick(event) {
          changeNotify("警告通知", "warning");
          setShowNotify(true);
        }
      })]
    })]
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
var Demo3 = function Demo32() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    customShow = _useState2[0],
    SetCustomShow = _useState2[1];
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Notify, {
      className: "customer",
      visible: customShow,
      style: {
        "--nutui-notify-text-color": "#ad0000",
        "--nutui-notify-base-background-color": "#ffe1e1"
      },
      onClose: function onClose() {
        SetCustomShow(false);
      },
      __styleSheet: {
        key: "customer",
        value: calcStaticStyle(__inner_style__$1(), "customer")
      },
      __hmStyle: calcStaticStyle(__inner_style__$1(), "customer"),
      children: "自定义背景色和字体颜色"
    }), /* @__PURE__ */jsx(Cell, {
      title: "自定义背景色和字体颜色",
      onClick: function onClick(event) {
        SetCustomShow(true);
      }
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
var Demo4 = function Demo42() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showNotify = _useState2[0],
    setShowNotify = _useState2[1];
  var _useState3 = useState({
      message: "",
      type: "danger",
      duration: 2e3,
      position: "top"
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    states = _useState4[0],
    setStates = _useState4[1];
  var changeNotify = function changeNotify2(message, type, duration, position) {
    var change = Object.assign(states, {
      message: message,
      type: type,
      duration: duration,
      position: position
    });
    setStates(change);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Notify, {
      visible: showNotify,
      position: states.position,
      duration: states.duration,
      onClose: function onClose() {
        setShowNotify(false);
      },
      children: states.message
    }), /* @__PURE__ */jsx(Cell, {
      title: "自定义时长",
      onClick: function onClick() {
        changeNotify("自定义时长", "base", 1e4);
        setShowNotify(true);
      }
    }), harmonyAndRn() ? null : /* @__PURE__ */jsx(Cell, {
      title: "自定义位置",
      onClick: function onClick() {
        changeNotify("自定义位置", "base", 2e3, "bottom");
        setShowNotify(true);
      }
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
var NotifyDemo = function NotifyDemo2() {
  var _useTranslate = useTranslate({
      "zh-CN": {
        basic: "基础用法",
        t1: "通知类型",
        t2: "自定义样式",
        t3: "自定义时长"
      },
      "en-US": {
        basic: "Basic Usage",
        t1: "Notify Type",
        t2: "Custom Style",
        t3: "Custom Duration"
      }
    }),
    _useTranslate2 = _slicedToArray(_useTranslate, 1),
    translated = _useTranslate2[0];
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Header, {}), /* @__PURE__ */jsx(TaroScrollViewTagName, {
      style: rn() ? {
        position: "relative"
      } : {},
      children: /* @__PURE__ */jsxs(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "demo ".concat(Taro.getEnv() === "WEB" ? "web" : "")),
        className: "demo ".concat(Taro.getEnv() === "WEB" ? "web" : ""),
        style: {
          paddingBottom: "30px"
        },
        children: [/* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
          className: "h2",
          children: translated.basic
        }), /* @__PURE__ */jsx(Demo1, {}), /* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
          className: "h2",
          children: translated.t1
        }), /* @__PURE__ */jsx(Demo2, {}), /* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
          className: "h2",
          children: translated.t2
        }), /* @__PURE__ */jsx(Demo3, {}), /* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
          className: "h2",
          children: translated.t3
        }), /* @__PURE__ */jsx(Demo4, {})]
      })
    })]
  }), __nesting_style__());
};

var config = {
  "navigationBarTitleText": "Notify"
};
const index = (function () {
  return createNativePageConfig(NotifyDemo, 'feedback/pages/notify/index', React, ReactDOM, config);
});

export { config, index as default };
