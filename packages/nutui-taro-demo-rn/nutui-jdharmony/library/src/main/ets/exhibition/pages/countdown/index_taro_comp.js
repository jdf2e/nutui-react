import { createNativePageConfig } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/plugin-framework-react/dist/runtime';
import { _ as _objectSpread2, e as ComponentDefaults, d as _objectWithoutProperties, b as _slicedToArray, w as web, C as Cell, p as pxTransform, u as useTranslate, H as Header } from '../../../index.taro.js';
import Taro from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroViewTagName, TaroScrollViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import * as React from '@jd-oh/taro_library/src/main/ets/npm/react';
import React__default, { useState, useRef, useImperativeHandle, useEffect } from '@jd-oh/taro_library/src/main/ets/npm/react';
import { cancelAnimationFrame, __combine_nesting_style__, calcStaticStyle, convertNumber2VP, requestAnimationFrame, window } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { jsx, Fragment, jsxs } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';
import { B as Button } from '../../../button.taro.js';
import { G as Grid } from '../../../grid.taro.js';
import ReactDOM from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/react';

var padZero = function padZero2(num) {
  var targetLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  var str = "".concat(num);
  while (str.length < targetLength) {
    str = "0".concat(str);
  }
  return str;
};

var _excluded = ["type", "paused", "startTime", "endTime", "remainingTime", "millisecond", "format", "autoStart", "time", "destroy", "className", "style", "onEnd", "onPaused", "onRestart", "onUpdate", "children"];
var __inner_style_data__$1;
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
    "nut-countdown": {
      display: "flex",
      flexDirection: FlexDirection.Row,
      alignItems: ItemAlign.Center,
      color: "#ff0f23",
      fontSize: convertNumber2VP(10, "PX")
    },
    "nut-countdown-number": {
      display: "flex",
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center,
      height: convertNumber2VP(14, "PX"),
      fontWeight: 400,
      fontSize: convertNumber2VP(10, "PX"),
      minWidth: convertNumber2VP(20, "PX"),
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(1, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(1, "PX"),
      borderTopLeftRadius: convertNumber2VP(2, "PX"),
      borderTopRightRadius: convertNumber2VP(2, "PX"),
      borderBottomLeftRadius: convertNumber2VP(2, "PX"),
      borderBottomRightRadius: convertNumber2VP(2, "PX"),
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(2, "PX"),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(2, "PX"),
      borderTopWidth: convertNumber2VP(1, "PX"),
      borderRightWidth: convertNumber2VP(1, "PX"),
      borderBottomWidth: convertNumber2VP(1, "PX"),
      borderLeftWidth: convertNumber2VP(1, "PX"),
      borderTopStyle: BorderStyle.Solid,
      borderRightStyle: BorderStyle.Solid,
      borderBottomStyle: BorderStyle.Solid,
      borderLeftStyle: BorderStyle.Solid,
      borderTopColor: "#ffebf1",
      borderRightColor: "#ffebf1",
      borderBottomColor: "#ffebf1",
      borderLeftColor: "#ffebf1",
      backgroundColor: "rgba(0, 0, 0, 0)",
      color: "#ff0f23",
      textAlign: TextAlign.Center
    },
    "nut-countdown-number-primary": {
      display: "flex",
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center,
      height: convertNumber2VP(14, "PX"),
      fontWeight: 400,
      fontSize: convertNumber2VP(10, "PX"),
      minWidth: convertNumber2VP(20, "PX"),
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(1, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(1, "PX"),
      borderTopLeftRadius: convertNumber2VP(2, "PX"),
      borderTopRightRadius: convertNumber2VP(2, "PX"),
      borderBottomLeftRadius: convertNumber2VP(2, "PX"),
      borderBottomRightRadius: convertNumber2VP(2, "PX"),
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(2, "PX"),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(2, "PX"),
      borderTopWidth: convertNumber2VP(1, "PX"),
      borderRightWidth: convertNumber2VP(1, "PX"),
      borderBottomWidth: convertNumber2VP(1, "PX"),
      borderLeftWidth: convertNumber2VP(1, "PX"),
      borderTopStyle: BorderStyle.Solid,
      borderRightStyle: BorderStyle.Solid,
      borderBottomStyle: BorderStyle.Solid,
      borderLeftStyle: BorderStyle.Solid,
      borderTopColor: "#ff0f23",
      borderRightColor: "#ff0f23",
      borderBottomColor: "#ff0f23",
      borderLeftColor: "#ff0f23",
      backgroundColor: "#ff0f23",
      color: "#fff"
    },
    "nut-countdown-unit": {
      display: "flex",
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center,
      height: convertNumber2VP(14, "PX"),
      fontWeight: 400,
      fontSize: convertNumber2VP(10, "PX"),
      color: "#ff0f23"
    }
  };
  return __inner_style_data__$1;
}
var defaultProps = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  type: "default",
  paused: false,
  startTime: Date.now(),
  endTime: Date.now(),
  remainingTime: 0,
  millisecond: false,
  format: "HH:mm:ss",
  autoStart: true,
  time: 0,
  destroy: false
});
var InternalCountDown = function InternalCountDown2(props, ref) {
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
    type = _defaultProps$props.type,
    paused = _defaultProps$props.paused,
    startTime = _defaultProps$props.startTime,
    endTime = _defaultProps$props.endTime,
    remainingTime = _defaultProps$props.remainingTime;
    _defaultProps$props.millisecond;
    var format = _defaultProps$props.format,
    autoStart = _defaultProps$props.autoStart,
    time = _defaultProps$props.time,
    destroy = _defaultProps$props.destroy,
    className = _defaultProps$props.className,
    style = _defaultProps$props.style,
    onEnd = _defaultProps$props.onEnd,
    onPaused = _defaultProps$props.onPaused,
    onRestart = _defaultProps$props.onRestart,
    onUpdate = _defaultProps$props.onUpdate,
    children = _defaultProps$props.children,
    rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-countdown";
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    restTimeStamp = _useState2[0],
    setRestTime = _useState2[1];
  var stateRef = useRef({
    pauseTime: 0,
    curr: 0,
    isPaused: paused,
    isIninted: false,
    timer: 0,
    restTime: 0,
    counting: !paused && autoStart,
    handleEndTime: Date.now(),
    diffTime: 0
  });
  var getTimeStamp = function getTimeStamp2(timeStr) {
    if (!timeStr) return Date.now();
    var t = timeStr;
    t = Number(t) > 0 ? +t : t.toString().replace(/-/g, "/");
    return new Date(t).getTime();
  };
  var initTime = function initTime2() {
    if (remainingTime) {
      stateRef.current.handleEndTime = Date.now() + Number(remainingTime);
    } else {
      stateRef.current.handleEndTime = endTime;
      if (web()) {
        stateRef.current.diffTime = Date.now() - getTimeStamp(startTime);
      }
    }
    if (!stateRef.current.counting) stateRef.current.counting = true;
    tick();
  };
  var tick = function tick2() {
    stateRef.current.timer = requestAnimationFrame(function () {
      if (stateRef.current.counting) {
        var currentTime = Date.now() - stateRef.current.diffTime;
        var remainTime = Math.max(stateRef.current.handleEndTime - currentTime, 0);
        stateRef.current.restTime = remainTime;
        setRestTime(remainTime);
        if (!remainTime) {
          stateRef.current.counting = false;
          pause();
          onEnd && onEnd();
        }
        if (remainTime > 0) {
          tick2();
        }
      }
    });
  };
  var formatRemainTime = function formatRemainTime2(t, type2) {
    var ts = t;
    var rest2 = {
      d: 0,
      h: 0,
      m: 0,
      s: 0,
      ms: 0
    };
    var SECOND = 1e3;
    var MINUTE = 60 * SECOND;
    var HOUR = 60 * MINUTE;
    var DAY = 24 * HOUR;
    if (ts > 0) {
      rest2.d = ts >= SECOND ? Math.floor(ts / DAY) : 0;
      rest2.h = Math.floor(ts % DAY / HOUR);
      rest2.m = Math.floor(ts % HOUR / MINUTE);
      rest2.s = Math.floor(ts % MINUTE / SECOND);
      rest2.ms = Math.floor(ts % SECOND);
    }
    return rest2 ;
  };
  var pause = function pause2() {
    cancelAnimationFrame(stateRef.current.timer);
    stateRef.current.counting = false;
    onPaused && onPaused(stateRef.current.restTime);
  };
  useImperativeHandle(ref, function () {
    return {
      start: function start() {
        if (!stateRef.current.counting && !autoStart) {
          stateRef.current.counting = true;
          stateRef.current.handleEndTime = Date.now() + Number(stateRef.current.restTime);
          tick();
          onRestart && onRestart(stateRef.current.restTime);
        }
      },
      pause: function pause2() {
        cancelAnimationFrame(stateRef.current.timer);
        stateRef.current.counting = false;
        onPaused && onPaused(stateRef.current.restTime);
      },
      reset: function reset() {
        if (!autoStart) {
          pause();
          stateRef.current.restTime = time;
          setRestTime(time);
        }
      }
    };
  });
  useEffect(function () {
    var tranTime = formatRemainTime(stateRef.current.restTime);
    onUpdate && onUpdate(tranTime);
  }, [restTimeStamp]);
  useEffect(function () {
    if (stateRef.current.isIninted) {
      if (paused) {
        if (stateRef.current.counting) {
          pause();
        }
      } else {
        if (!stateRef.current.counting) {
          stateRef.current.counting = true;
          stateRef.current.handleEndTime = Date.now() + Number(stateRef.current.restTime);
          tick();
        }
        onRestart && onRestart(stateRef.current.restTime);
      }
    }
  }, [paused]);
  useEffect(function () {
    if (stateRef.current.isIninted) {
      initTime();
    }
  }, [endTime, startTime, remainingTime]);
  useEffect(function () {
    if (autoStart) {
      initTime();
    } else {
      stateRef.current.restTime = time;
      setRestTime(time);
    }
    if (!stateRef.current.isIninted) {
      stateRef.current.isIninted = true;
    }
    return componentWillUnmount;
  }, []);
  var componentWillUnmount = function componentWillUnmount2() {
    destroy && cancelAnimationFrame(stateRef.current.timer);
  };
  var getUnit = function getUnit2(unit) {
    var formatArr = format.split(/(DD|HH|mm|ss|S)/);
    var index = formatArr.indexOf(unit);
    return index > -1 ? formatArr[index + 1] : ":";
  };
  var renderTimeItem = function renderTimeItem2(formatUnit, time2) {
    var unit = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    return /* @__PURE__ */jsx(Fragment, {
      children: format.includes(formatUnit) ? /* @__PURE__ */jsxs(Fragment, {
        children: [/* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__$1(), "".concat(classPrefix, "-number").concat(type === "primary" ? "-primary" : "")),
          className: "".concat(classPrefix, "-number").concat(type === "primary" ? "-primary" : ""),
          children: padZero(time2)
        }), unit ? /* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__$1(), "".concat(classPrefix, "-unit")),
          className: "".concat(classPrefix, "-unit"),
          children: getUnit(unit)
        }) : null]
      }) : null
    });
  };
  var renderTaroTime = function renderTaroTime2() {
    var _format$match;
    var formatCache = formatRemainTime(stateRef.current.restTime);
    var d = formatCache.d,
      h = formatCache.h,
      m = formatCache.m,
      s = formatCache.s,
      ms = formatCache.ms;
    var digit = (_format$match = format.match(/S/g)) === null || _format$match === void 0 ? void 0 : _format$match.length;
    return /* @__PURE__ */jsxs(Fragment, {
      children: [renderTimeItem("DD", d, "DD"), renderTimeItem("HH", h, "HH"), renderTimeItem("mm", m, "mm"), renderTimeItem("ss", s), (format.includes("S") || getUnit("ss") !== ":") && /* @__PURE__ */jsx(Fragment, {
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__$1(), "".concat(classPrefix, "-unit")),
          className: "".concat(classPrefix, "-unit"),
          children: getUnit("ss")
        })
      }), renderTimeItem("S", padZero(ms, 3).toString().slice(0, digit || 2))]
    });
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: children || /* @__PURE__ */jsx(TaroViewTagName, _objectSpread2(_objectSpread2({
      __hmStyle: calcStaticStyle(__inner_style__$1(), "".concat(classPrefix, " ").concat(className)),
      className: "".concat(classPrefix, " ").concat(className),
      style: _objectSpread2({}, style)
    }, rest), {}, {
      children: renderTaroTime()
    }))
  }), __nesting_style__$a());
};
var CountDown = /* @__PURE__ */React__default.forwardRef(InternalCountDown);
CountDown.displayName = "NutCountDown";

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
var Demo1 = function Demo12() {
  var stateRef = useRef({
    endTime: Date.now() + 60 * 1e3
  });
  var onEnd = function onEnd2() {
    console.log("countdown: ended.");
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Cell, {
      children: /* @__PURE__ */jsx(CountDown, {
        endTime: stateRef.current.endTime,
        onEnd: onEnd
      })
    }), /* @__PURE__ */jsx(Cell, {
      children: /* @__PURE__ */jsx(CountDown, {
        endTime: stateRef.current.endTime,
        type: "primary",
        onEnd: onEnd
      })
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
var Demo2 = function Demo22() {
  var stateRef = useRef({
    remainingTime: 60 * 1e3
  });
  return __combine_nesting_style__( /* @__PURE__ */jsx(Cell, {
    children: /* @__PURE__ */jsx(CountDown, {
      remainingTime: stateRef.current.remainingTime
    })
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
var Demo3 = function Demo32() {
  var stateRef = useRef({
    endTime: Date.now() + 60 * 1e3
  });
  return __combine_nesting_style__( /* @__PURE__ */jsx(Cell, {
    children: /* @__PURE__ */jsx(CountDown, {
      endTime: stateRef.current.endTime,
      format: "DD天HH时mm分ss秒"
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
  var stateRef = useRef({
    endTime: Date.now() + 60 * 1e3
  });
  return __combine_nesting_style__( /* @__PURE__ */jsx(Cell, {
    children: /* @__PURE__ */jsx(CountDown, {
      endTime: stateRef.current.endTime,
      millisecond: true,
      format: "HH:mm:ss:SS"
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
var Demo5 = function Demo52() {
  var stateRef = useRef({
    serverTime: Date.now() - 20 * 1e3,
    endTime: Date.now() + 60 * 1e3
  });
  return __combine_nesting_style__( /* @__PURE__ */jsx(Cell, {
    children: /* @__PURE__ */jsx(CountDown, {
      startTime: stateRef.current.serverTime,
      endTime: stateRef.current.endTime
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
var Demo6 = function Demo62() {
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    asyncEnd = _useState2[0],
    setAsyncEnd = _useState2[1];
  var stateRef = useRef({
    timer: -1,
    endTime: Date.now() + 60 * 1e3
  });
  useEffect(function () {
    stateRef.current.timer = window.setTimeout(function () {
      setAsyncEnd(Date.now() + 30 * 1e3);
    }, 3e3);
    return function () {
      clearTimeout(stateRef.current.timer);
    };
  }, []);
  return __combine_nesting_style__( /* @__PURE__ */jsx(Cell, {
    children: /* @__PURE__ */jsx(CountDown, {
      endTime: asyncEnd
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
  var stateRef = useRef({
    endTime: Date.now() + 60 * 1e3
  });
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    paused = _useState2[0],
    setPaused = _useState2[1];
  var toggle = function toggle2() {
    console.log(paused);
    setPaused(!paused);
  };
  var onpaused = function onpaused2(v) {
    console.log("paused: ", v);
  };
  var onrestart = function onrestart2(v) {
    console.log("restart: ", v);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Cell, {
    align: "center",
    style: {
      display: "flex",
      justifyContent: "space-between"
    },
    children: [/* @__PURE__ */jsx(CountDown, {
      endTime: stateRef.current.endTime,
      paused: paused,
      onPaused: onpaused,
      onRestart: onrestart
    }), /* @__PURE__ */jsx(Button, {
      type: "primary",
      size: "small",
      onClick: function onClick() {
        return toggle();
      },
      children: paused ? "start" : "stop"
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
var partItemStyle = _objectSpread2({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fa2c19",
  color: "#fff"
}, {
  width: pxTransform(20),
  height: pxTransform(25),
  fontSize: pxTransform(14),
  borderRadius: pxTransform(6)
});
var partItemSymbolStyle = {
  marginLeft: pxTransform(5),
  marginRight: pxTransform(5)
};
var Demo8 = function Demo82() {
  var onUpdate = function onUpdate2(v) {
    setResetTime(v);
  };
  var _useState = useState({
      d: "1",
      h: "00",
      m: "00",
      s: "00"
    }),
    _useState2 = _slicedToArray(_useState, 2),
    resetTime = _useState2[0],
    setResetTime = _useState2[1];
  var stateRef = useRef({
    endTime: Date.now() + 60 * 1e3
  });
  return __combine_nesting_style__( /* @__PURE__ */jsx(Cell, {
    children: /* @__PURE__ */jsx(CountDown, {
      endTime: stateRef.current.endTime,
      onUpdate: onUpdate,
      children: /* @__PURE__ */jsxs(TaroViewTagName, {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        children: [/* @__PURE__ */jsx(TaroViewTagName, {
          style: partItemStyle,
          children: resetTime.d
        }), /* @__PURE__ */jsx(TaroViewTagName, {
          style: partItemSymbolStyle,
          children: "天"
        }), /* @__PURE__ */jsx(TaroViewTagName, {
          style: partItemStyle,
          children: resetTime.h
        }), /* @__PURE__ */jsx(TaroViewTagName, {
          style: partItemSymbolStyle,
          children: ":"
        }), /* @__PURE__ */jsx(TaroViewTagName, {
          style: partItemStyle,
          children: resetTime.m
        }), /* @__PURE__ */jsx(TaroViewTagName, {
          style: partItemSymbolStyle,
          children: ":"
        }), /* @__PURE__ */jsx(TaroViewTagName, {
          style: partItemStyle,
          children: resetTime.s
        })]
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
  var countDownRef = useRef(null);
  var start = function start2() {
    console.log(countDownRef.current);
    countDownRef.current && countDownRef.current.start();
  };
  var pause = function pause2() {
    countDownRef.current && countDownRef.current.pause();
  };
  var reset = function reset2() {
    countDownRef.current && countDownRef.current.reset();
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Cell, {
      children: /* @__PURE__ */jsx(CountDown, {
        format: "ss:SS",
        autoStart: false,
        time: 2e4,
        ref: countDownRef
      })
    }), /* @__PURE__ */jsxs(Grid, {
      columns: 3,
      style: {
        marginBottom: pxTransform(5)
      },
      children: [/* @__PURE__ */jsx(Grid.Item, {
        children: /* @__PURE__ */jsx(Button, {
          type: "primary",
          onClick: start,
          children: "开始"
        })
      }), /* @__PURE__ */jsx(Grid.Item, {
        children: /* @__PURE__ */jsx(Button, {
          type: "primary",
          onClick: pause,
          children: "暂停"
        })
      }), /* @__PURE__ */jsx(Grid.Item, {
        children: /* @__PURE__ */jsx(Button, {
          type: "primary",
          onClick: reset,
          children: "重置"
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
var CountDownDemo = function CountDownDemo2() {
  var _useTranslate = useTranslate({
      "zh-CN": {
        basic: "基础用法",
        remainingTime: "剩余时间用法",
        format: "自定义格式",
        millisecond: "毫秒级渲染",
        serverTime: "以服务端的时间为准",
        async: "异步更新结束时间",
        controlTime: "控制开始和暂停的倒计时",
        customStyle: "自定义展示样式",
        handleControl: "手动控制"
      },
      "zh-TW": {
        basic: "基础用法",
        remainingTime: "剩余時間用法",
        format: "自定義格式",
        millisecond: "毫秒級渲染",
        serverTime: "以服務端的時間為準",
        async: "異步更新結束時間",
        controlTime: "控製開始和暫停的倒計時",
        customStyle: "自定義展示樣式",
        handleControl: "手動控製"
      },
      "en-US": {
        basic: "Basic Usage",
        remainingTime: "Remaining Time Usage",
        format: "Custom Format",
        millisecond: "Millisecond",
        serverTime: "Server Time Prevails",
        async: "End-Time of Asyn Update",
        controlTime: "Manual Control",
        customStyle: "Custom Style",
        handleControl: "Handle Control"
      }
    }),
    _useTranslate2 = _slicedToArray(_useTranslate, 1),
    translated = _useTranslate2[0];
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Header, {}), /* @__PURE__ */jsxs(TaroScrollViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), "demo demo-countdown ".concat(Taro.getEnv() === "WEB" ? "web" : "")),
      className: "demo demo-countdown ".concat(Taro.getEnv() === "WEB" ? "web" : ""),
      children: [/* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.basic
      }), /* @__PURE__ */jsx(Demo1, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.remainingTime
      }), /* @__PURE__ */jsx(Demo2, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.format
      }), /* @__PURE__ */jsx(Demo3, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.millisecond
      }), /* @__PURE__ */jsx(Demo4, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.serverTime
      }), /* @__PURE__ */jsx(Demo5, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.async
      }), /* @__PURE__ */jsx(Demo6, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.controlTime
      }), /* @__PURE__ */jsx(Demo7, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.customStyle
      }), /* @__PURE__ */jsx(Demo8, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.handleControl
      }), /* @__PURE__ */jsx(Demo9, {})]
    })]
  }), __nesting_style__());
};

var config = {
  "navigationBarTitleText": "CountDown"
};
const index = (function () {
  return createNativePageConfig(CountDownDemo, 'exhibition/pages/countdown/index', React, ReactDOM, config);
});

export { config, index as default };
