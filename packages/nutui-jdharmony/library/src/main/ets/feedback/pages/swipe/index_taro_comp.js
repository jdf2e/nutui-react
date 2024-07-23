import { createNativePageConfig } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/plugin-framework-react/dist/runtime';
import { S, _ as _objectSpread2, k, b as _slicedToArray, e as ComponentDefaults, a as harmonyAndRn, f as classNames, h as harmony, p as pxTransform, o as _asyncToGenerator, q as _regeneratorRuntime, u as useTranslate, H as Header } from '../../../index.taro.js';
import Taro from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroViewTagName, TaroTextTagName, TaroScrollViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { B as Button } from '../../../button.taro.js';
import { document, __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import * as React from '@jd-oh/taro_library/src/main/ets/npm/react';
import React__default, { useRef, useState, forwardRef, useEffect, useImperativeHandle } from '@jd-oh/taro_library/src/main/ets/npm/react';
import { u as useTouch } from '../../../use-touch.js';
import { g as getRectByTaro } from '../../../get-rect-by-taro.js';
import { jsx, jsxs, Fragment } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';
import { I as InputNumber } from '../../../inputnumber.taro.js';
import ReactDOM from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/react';

var D = function D(M) {
  return /* @__PURE__ */React__default.createElement(S, _objectSpread2(_objectSpread2({}, M), {}, {
    name: M.name || "Del",
    svg64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiMxQTFBMUEiIGQ9Ik0yOTguNjcgNDIuNjdhNDIuNjcgNDIuNjcgMCAxIDAgMCA4NS4zM2g0MjYuNjZhNDIuNjcgNDIuNjcgMCAxIDAgMC04NS4zM3pNNDQ4IDQ2OS4zM2gtODUuMzN2MjU2SDQ0OHptMjEzLjMzIDBINTc2djI1Nmg4NS4zM3oiLz48cGF0aCBmaWxsPSIjMUExQTFBIiBkPSJNMCAyNTZhNDIuNjcgNDIuNjcgMCAwIDEgNDIuNjctNDIuNjdoOTM4LjY2YTQyLjY3IDQyLjY3IDAgMSAxIDAgODUuMzRoLTQ3LjRsLTMxLjIxIDU2MS43N2ExMjggMTI4IDAgMCAxLTEyNy43OSAxMjAuODlIMjQ5LjA3YTEyOCAxMjggMCAwIDEtMTI3Ljc5LTEyMC44OUw5MC4wNyAyOTguNjdoLTQ3LjRBNDIuNjcgNDIuNjcgMCAwIDEgMCAyNTZtMTc1LjUzIDQyLjY3IDMwLjk4IDU1Ny4wMUE0Mi42NyA0Mi42NyAwIDAgMCAyNDkuMDkgODk2aDUyNS44MmE0Mi42NyA0Mi42NyAwIDAgMCA0Mi42LTQwLjMybDMwLjk0LTU1Ny4wMWgtNjcyLjl6Ii8+PC9zdmc+"
  }));
};
D.defaultProps = k;

var useRefState = function useRefState2(param) {
  var ref = useRef(param);
  var _useState = useState(param),
    _useState2 = _slicedToArray(_useState, 2),
    setState = _useState2[1];
  var updateState = function updateState2(p) {
    ref.current = p;
    setState(p);
  };
  return [ref, updateState];
};

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
    "nut-swipe": {
      display: "flex",
      flexDirection: FlexDirection.Row,
      position: "relative",
      overflow: "hidden",
      cursor: "grab",
      backgroundColor: "#fff"
    },
    "nut-swipe-left": {
      position: "absolute",
      top: convertNumber2VP(0),
      display: "flex",
      flexDirection: FlexDirection.Row,
      left: convertNumber2VP(0)
    },
    "nut-swipe-right": {
      position: "absolute",
      top: convertNumber2VP(0),
      display: "flex",
      flexDirection: FlexDirection.Row,
      left: "100%"
    },
    "nut-swipe-wrapper": {
      display: "flex",
      flexDirection: FlexDirection.Row,
      justifyContent: FlexAlign.Start,
      alignSelf: ItemAlign.Stretch,
      width: "100%",
      transitionTimingFunction: "cubic-bezier(.18, .89, .32, 1)",
      transitionProperty: "transform"
    }
  };
  return __inner_style_data__$1;
}
function preventDefault(event, isStopPropagation) {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    event.preventDefault();
  }
  {
    event.stopPropagation();
  }
}
var defaultProps = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  name: ""
});
var Swipe = /* @__PURE__ */forwardRef(function (props, instanceRef) {
  var classPrefix = "nut-swipe";
  var touch = useTouch();
  useEffect(function () {
    var getWidth = /* @__PURE__ */function () {
      var _ref = _asyncToGenerator( /* @__PURE__ */_regeneratorRuntime().mark(function _callee() {
        var leftRect, rightRect;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!leftWrapper.current) {
                _context.next = 5;
                break;
              }
              _context.next = 3;
              return getRectByTaro(leftWrapper.current);
            case 3:
              leftRect = _context.sent;
              leftRect && setActionWidth(function (v) {
                return _objectSpread2(_objectSpread2({}, v), {}, {
                  left: leftRect.width
                });
              });
            case 5:
              if (!rightWrapper.current) {
                _context.next = 11;
                break;
              }
              _context.next = 8;
              return getRectByTaro(rightWrapper.current);
            case 8:
              rightRect = _context.sent;
              console.log("actionWidth.current.left", rightRect.width);
              rightRect && setActionWidth(function (v) {
                return _objectSpread2(_objectSpread2({}, v), {}, {
                  right: rightRect.width
                });
              });
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function getWidth2() {
        return _ref.apply(this, arguments);
      };
    }();
    setTimeout(function () {
      return getWidth();
    });
  }, []);
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
    children = _defaultProps$props.children,
    className = _defaultProps$props.className,
    style = _defaultProps$props.style;
  var root = useRef();
  var opened = useRef(false);
  var lockClick = useRef(false);
  var startOffset = useRef(0);
  var _useState = useState({
      offset: 0,
      dragging: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _useRefState = useRefState({
      left: 0,
      right: 0
    }),
    _useRefState2 = _slicedToArray(_useRefState, 2),
    actionWidth = _useRefState2[0],
    updateState = _useRefState2[1];
  var setActionWidth = function setActionWidth2(fn) {
    var res = fn();
    if (res.left !== void 0) {
      updateState(_objectSpread2(_objectSpread2({}, actionWidth.current), {}, {
        left: res.left
      }));
    }
    if (res.right !== void 0) {
      updateState(_objectSpread2(_objectSpread2({}, actionWidth.current), {}, {
        right: res.right
      }));
    }
  };
  var wrapperStyle = {
    transform: "translate(".concat(state.offset, "px, 0)"),
    transitionDuration: state.dragging ? "0s" : ".6s"
  };
  var _onTouchStart = /* @__PURE__ */function () {
    var _ref2 = _asyncToGenerator( /* @__PURE__ */_regeneratorRuntime().mark(function _callee2(event) {
      var leftRect, rightRect, _props$onTouchStart;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            console.log("ontouchstart");
            if (!leftWrapper.current) {
              _context2.next = 6;
              break;
            }
            _context2.next = 4;
            return getRectByTaro(leftWrapper.current);
          case 4:
            leftRect = _context2.sent;
            leftRect && setActionWidth(function (v) {
              return _objectSpread2(_objectSpread2({}, v), {}, {
                left: leftRect.width
              });
            });
          case 6:
            if (!rightWrapper.current) {
              _context2.next = 11;
              break;
            }
            _context2.next = 9;
            return getRectByTaro(rightWrapper.current);
          case 9:
            rightRect = _context2.sent;
            rightRect && setActionWidth(function (v) {
              return _objectSpread2(_objectSpread2({}, v), {}, {
                right: rightRect.width
              });
            });
          case 11:
            if (!props.disabled) {
              startOffset.current = state.offset;
              touch.start(event);
              (_props$onTouchStart = props.onTouchStart) === null || _props$onTouchStart === void 0 || _props$onTouchStart.call(props, event);
            }
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function onTouchStart(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var _onTouchMove = function onTouchMove(event) {
    var _props$onTouchMove;
    if (props.disabled) {
      return;
    }
    touch.move(event);
    (_props$onTouchMove = props.onTouchMove) === null || _props$onTouchMove === void 0 || _props$onTouchMove.call(props, event);
    if (touch.isHorizontal()) {
      lockClick.current = true;
      var newState = _objectSpread2(_objectSpread2({}, state), {}, {
        dragging: true
      });
      var isEdge = !opened || touch.deltaX.current * startOffset.current < 0;
      if (isEdge) {
        preventDefault(event);
      }
      newState.offset = rangeCalculation((harmony() ? parseFloat(pxTransform(touch.deltaX.current)) : touch.deltaX.current) + startOffset.current, -actionWidth.current.right || 0, actionWidth.current.left || 0);
      setState(newState);
    }
  };
  var _onTouchEnd = function onTouchEnd(event) {
    if (state.dragging) {
      var _props$onTouchEnd;
      setState(function (v) {
        return _objectSpread2(_objectSpread2({}, v), {}, {
          dragging: false
        });
      });
      toggle(state.offset > 0 ? "left" : "right");
      setTimeout(function () {
        lockClick.current = false;
      }, 0);
      (_props$onTouchEnd = props.onTouchEnd) === null || _props$onTouchEnd === void 0 || _props$onTouchEnd.call(props, event);
    }
  };
  var toggle = function toggle2(side) {
    var offset = Math.abs(state.offset);
    var base = 0.3;
    var baseNum = opened ? 1 - base : base;
    var width = side === "left" ? actionWidth.current.left : actionWidth.current.right;
    if (width && offset > Number(width) * baseNum) {
      open(side);
    } else {
      _close(side);
    }
  };
  var open = function open2(side) {
    var _props$onOpen;
    opened.current = true;
    var offset = side === "left" ? actionWidth.current.left : -actionWidth.current.right;
    var name = props.name;
    (_props$onOpen = props.onOpen) === null || _props$onOpen === void 0 || _props$onOpen.call(props, {
      name: name,
      position: side
    });
    setState(function (v) {
      return _objectSpread2(_objectSpread2({}, v), {}, {
        offset: Number(offset) || 0
      });
    });
  };
  var _close = function close(position) {
    if (opened.current) {
      var _props$onClose;
      opened.current = false;
      (_props$onClose = props.onClose) === null || _props$onClose === void 0 || _props$onClose.call(props, {
        name: props.name,
        position: position || "left"
      });
    }
    setState(function (v) {
      return _objectSpread2(_objectSpread2({}, v), {}, {
        offset: 0
      });
    });
  };
  var rangeCalculation = function rangeCalculation2(num, min, max) {
    return Math.min(Math.max(Number(num), Number(min)), Number(max));
  };
  var leftWrapper = useRef(null);
  var rightWrapper = useRef(null);
  var renderActionContent = function renderActionContent2(side) {
    if (props["".concat(side, "Action")]) {
      console.log("actionWidth xxx", actionWidth.current.left);
      return /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__$1(), "".concat(classPrefix, "-").concat(side)),
        ref: side === "left" ? leftWrapper : rightWrapper,
        className: "".concat(classPrefix, "-").concat(side),
        style: _objectSpread2({}, side === "left" ? {
          left: Number("".concat(-actionWidth.current.left))
        } : {}),
        onClick: function onClick(e) {
          return handleOperate(e, side);
        },
        children: props["".concat(side, "Action")]
      });
    }
    return null;
  };
  var handleOperate = function handleOperate2(event, position) {
    event.stopPropagation();
    if (props.beforeClose) {
      props.beforeClose(position);
    } else {
      var _props$onActionClick;
      (_props$onActionClick = props.onActionClick) === null || _props$onActionClick === void 0 || _props$onActionClick.call(props, event, position);
    }
  };
  useImperativeHandle(instanceRef, function () {
    return {
      open: open,
      close: function close() {
        return _close();
      }
    };
  });
  useEffect(function () {
    if (harmonyAndRn()) return;
    var handler = function handler2(event) {
      var targets = [root];
      if (targets.some(function (targetItem) {
        var targetElement = targetItem.current || targetItem;
        return !targetElement || (targetElement === null || targetElement === void 0 ? void 0 : targetElement.contains(event.target));
      })) {
        return;
      }
      _close();
    };
    document.addEventListener("touchstart", handler);
    return function () {
      document.removeEventListener("touchstart", handler);
    };
  }, []);
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
    __hmStyle: calcStaticStyle(__inner_style__$1(), classNames(classPrefix, className)),
    ref: root,
    className: classNames(classPrefix, className),
    onTouchStart: function onTouchStart(e) {
      return _onTouchStart(e);
    },
    onTouchMove: function onTouchMove(e) {
      return _onTouchMove(e);
    },
    onTouchEnd: function onTouchEnd(e) {
      return _onTouchEnd(e);
    },
    style: style,
    children: /* @__PURE__ */jsxs(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__$1(), "".concat(classPrefix, "-wrapper")),
      className: "".concat(classPrefix, "-wrapper"),
      style: wrapperStyle,
      children: [renderActionContent("left"), children, renderActionContent("right")]
    })
  }), __nesting_style__$a());
});
Swipe.defaultProps = defaultProps;
Swipe.displayName = "NutSwipe";

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
var App$8 = function App2() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsx(Swipe, {
      rightAction: /* @__PURE__ */jsx(Button, {
        type: "primary",
        shape: "square",
        style: {
          alignSelf: "stretch",
          height: pxTransform(46)
        },
        children: /* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            fontSize: pxTransform(12),
            color: "#ffffff"
          },
          children: "删除"
        })
      }),
      children: /* @__PURE__ */jsx(TaroViewTagName, {
        style: {
          width: "100%",
          height: pxTransform(46),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative"
        },
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: {
            marginLeft: pxTransform(10)
          },
          children: "左滑删除"
        })
      })
    })
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
var ViewNode = function ViewNode2(text, style) {
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroViewTagName, {
    style: _objectSpread2({
      display: "flex",
      width: pxTransform(60),
      height: pxTransform(104),
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }, style),
    children: [!harmonyAndRn() ? /* @__PURE__ */jsx(D, {
      style: {
        marginBottom: pxTransform(8)
      }
    }) : null, /* @__PURE__ */jsx(TaroTextTagName, {
      style: {
        fontSize: pxTransform(12),
        color: style.color
      },
      children: text
    })]
  }), __nesting_style__$8());
};
var App$7 = function App2() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsx(Swipe, {
      style: {
        height: pxTransform(104)
      },
      rightAction: /* @__PURE__ */jsx(TaroViewTagName, {
        style: {
          display: "flex",
          flexDirection: "row",
          width: pxTransform(240),
          height: pxTransform(104),
          fontSize: pxTransform(12)
        },
        children: /* @__PURE__ */jsxs(Fragment, {
          children: [ViewNode("设置常买", {
            backgroundColor: "#F8F8F8",
            color: "#1A1A1A"
          }), ViewNode("移入收藏", {
            backgroundColor: "#ffcc00",
            color: "#FFF"
          }), ViewNode("看相似", {
            backgroundColor: "#FF860D",
            color: "#FFF"
          }), ViewNode("删除", {
            backgroundColor: "#FA2C19",
            color: "#FFF"
          })]
        })
      }),
      children: /* @__PURE__ */jsx(TaroViewTagName, {
        style: {
          width: "100%",
          height: pxTransform(46),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative"
        },
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: {
            marginLeft: pxTransform(10)
          },
          children: "左滑"
        })
      })
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
var App$6 = function App2() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    shouldCatchMove = _useState2[0],
    setShouldCatchMove = _useState2[1];
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsx(TaroViewTagName, {
      catchMove: shouldCatchMove,
      children: /* @__PURE__ */jsx(Swipe, {
        rightAction: /* @__PURE__ */jsx(Button, {
          type: "primary",
          shape: "square",
          style: {
            alignSelf: "stretch",
            height: pxTransform(46)
          },
          children: /* @__PURE__ */jsx(TaroTextTagName, {
            style: {
              fontSize: pxTransform(12),
              color: "#ffffff"
            },
            children: "删除"
          })
        }),
        onTouchEnd: function onTouchEnd(e) {
          setShouldCatchMove(false);
        },
        onTouchMove: function onTouchMove(e) {
          setShouldCatchMove(true);
        },
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: {
            width: "100%",
            height: pxTransform(46),
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            position: "relative"
          },
          children: /* @__PURE__ */jsx(TaroViewTagName, {
            style: {
              marginLeft: pxTransform(10)
            },
            children: "左滑删除"
          })
        })
      })
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
var App$5 = function App2() {
  var openRef = useRef(null);
  return __combine_nesting_style__( /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(Swipe, {
      ref: openRef,
      rightAction: /* @__PURE__ */jsx(Button, {
        shape: "square",
        type: "danger",
        style: {
          alignSelf: "stretch",
          height: pxTransform(46)
        },
        children: /* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            fontSize: pxTransform(12),
            color: "#ffffff"
          },
          children: "删除"
        })
      }),
      children: /* @__PURE__ */jsx(TaroViewTagName, {
        style: {
          width: "100%",
          height: pxTransform(46),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative"
        },
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: {
            marginLeft: pxTransform(10)
          },
          children: "点击下方按钮打开或关闭"
        })
      })
    }), /* @__PURE__ */jsxs(TaroViewTagName, {
      style: {
        display: "flex",
        flexDirection: "row"
      },
      children: [/* @__PURE__ */jsx(Button, {
        onClick: function onClick() {
          var _openRef$current;
          return (_openRef$current = openRef.current) === null || _openRef$current === void 0 ? void 0 : _openRef$current.open("right");
        },
        type: "primary",
        size: "small",
        children: /* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            color: "#ffffff"
          },
          children: "打开"
        })
      }), /* @__PURE__ */jsx(Button, {
        size: "small",
        onClick: function onClick() {
          var _openRef$current2;
          return (_openRef$current2 = openRef.current) === null || _openRef$current2 === void 0 ? void 0 : _openRef$current2.close();
        },
        children: "关闭"
      })]
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
var App$4 = function App2() {
  var closeRef = useRef(null);
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsx(Swipe, {
      ref: closeRef,
      rightAction: /* @__PURE__ */jsx(Button, {
        shape: "square",
        type: "danger",
        style: {
          alignSelf: "stretch",
          height: pxTransform(46)
        },
        children: /* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            fontSize: pxTransform(12),
            color: "#ffffff"
          },
          children: "删除"
        })
      }),
      onActionClick: function onActionClick() {
        var _closeRef$current;
        (_closeRef$current = closeRef.current) === null || _closeRef$current === void 0 || _closeRef$current.close();
      },
      children: /* @__PURE__ */jsx(TaroViewTagName, {
        style: {
          width: "100%",
          height: pxTransform(46),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative"
        },
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: {
            marginLeft: pxTransform(10)
          },
          children: "点击右侧按钮关闭"
        })
      })
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
var App$3 = function App2() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsx(Swipe, {
      rightAction: /* @__PURE__ */jsx(Button, {
        shape: "square",
        type: "danger",
        style: {
          alignSelf: "stretch",
          height: pxTransform(46)
        },
        children: /* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            fontSize: pxTransform(12),
            color: "#ffffff"
          },
          children: "删除"
        })
      }),
      disabled: true,
      children: /* @__PURE__ */jsx(TaroViewTagName, {
        style: {
          width: "100%",
          height: pxTransform(46),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative"
        },
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: {
            marginLeft: pxTransform(10)
          },
          children: "禁用滑动"
        })
      })
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
var App$2 = function App2() {
  var handleChange = function handleChange2() {
    Taro.showToast({
      title: "title"
    });
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsx(Swipe, {
      leftAction: /* @__PURE__ */jsx(Button, {
        shape: "square",
        type: "success",
        style: {
          alignSelf: "stretch",
          height: pxTransform(46)
        },
        children: /* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            fontSize: pxTransform(12),
            color: "#ffffff"
          },
          children: "选择"
        })
      }),
      rightAction: /* @__PURE__ */jsxs(Fragment, {
        children: [/* @__PURE__ */jsx(Button, {
          shape: "square",
          type: "danger",
          style: {
            alignSelf: "stretch",
            height: pxTransform(46)
          },
          children: /* @__PURE__ */jsx(TaroTextTagName, {
            style: {
              fontSize: pxTransform(12),
              color: "#ffffff"
            },
            children: "删除"
          })
        }), /* @__PURE__ */jsx(Button, {
          shape: "square",
          type: "info",
          style: {
            alignSelf: "stretch",
            height: pxTransform(46)
          },
          children: /* @__PURE__ */jsx(TaroTextTagName, {
            style: {
              fontSize: pxTransform(12),
              color: "#ffffff"
            },
            children: "收藏"
          })
        })]
      }),
      onActionClick: handleChange,
      onOpen: function onOpen() {
        return Taro.showToast({
          title: "打开"
        });
      },
      onClose: function onClose() {
        return Taro.showToast({
          title: "关闭"
        });
      },
      children: /* @__PURE__ */jsx(TaroViewTagName, {
        style: {
          width: "100%",
          height: pxTransform(46),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
          zIndex: 2
        },
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: {
            marginLeft: pxTransform(10)
          },
          children: "事件"
        })
      })
    })
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
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    var setShowDialog = _useState2[1];
  var refDom = useRef(null);
  var pRef = useRef("left");
  var beforeClose = function beforeClose2(postion) {
    pRef.current = postion;
    setShowDialog(true);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsx(Swipe, {
      ref: refDom,
      beforeClose: beforeClose,
      leftAction: /* @__PURE__ */jsx(Button, {
        shape: "square",
        type: "success",
        style: {
          alignSelf: "stretch",
          height: pxTransform(46)
        },
        children: /* @__PURE__ */jsx(TaroTextTagName, {
          style: {
            fontSize: pxTransform(12),
            color: "#ffffff"
          },
          children: "选择"
        })
      }),
      rightAction: /* @__PURE__ */jsx(Fragment, {
        children: /* @__PURE__ */jsx(Button, {
          shape: "square",
          type: "danger",
          style: {
            alignSelf: "stretch",
            height: pxTransform(46)
          },
          children: /* @__PURE__ */jsx(TaroTextTagName, {
            style: {
              fontSize: pxTransform(12),
              color: "#ffffff"
            },
            children: "删除"
          })
        })
      }),
      children: /* @__PURE__ */jsx(TaroViewTagName, {
        style: {
          width: "100%",
          height: pxTransform(46),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
          zIndex: 2
        },
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: {
            marginLeft: pxTransform(10)
          },
          children: "事件"
        })
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
var App = function App2() {
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsx(Swipe, {
      rightAction: /* @__PURE__ */jsx(Fragment, {
        children: /* @__PURE__ */jsx(Button, {
          shape: "square",
          type: "danger",
          style: {
            alignSelf: "stretch",
            height: pxTransform(46)
          },
          children: /* @__PURE__ */jsx(TaroTextTagName, {
            style: {
              fontSize: pxTransform(12),
              color: "#ffffff"
            },
            children: "加入购物车"
          })
        })
      }),
      children: /* @__PURE__ */jsx(TaroViewTagName, {
        style: {
          width: "100%",
          height: pxTransform(46),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative"
        },
        children: /* @__PURE__ */jsx(TaroViewTagName, {
          style: {
            marginLeft: pxTransform(10)
          },
          children: /* @__PURE__ */jsxs(TaroViewTagName, {
            style: {
              display: "flex",
              justifyContent: "space-between",
              width: "100%"
            },
            children: [/* @__PURE__ */jsx(TaroTextTagName, {
              children: "商品"
            }), !harmonyAndRn() ? /* @__PURE__ */jsx(InputNumber, {}) : null]
          })
        })
      })
    })
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
var SwipeDemo = function SwipeDemo2() {
  var _useTranslate = useTranslate({
      "zh-CN": {
        base: "基础用法",
        card: "卡片场景",
        catchMove: "阻止父元素滚动",
        byRef: "通过实例方法控制",
        close: "点击关闭",
        disabled: "禁用滑动",
        event: "事件监听",
        async: "异步控制",
        custom: "自定义内容"
      },
      "zh-TW": {
        base: "基礎用法",
        card: "卡片場景",
        catchMove: "阻止父元素滾動",
        byRef: "通過實例方法控制",
        close: "點擊關閉",
        disabled: "禁用滑動",
        event: "事件監聽",
        async: "異步控制",
        custom: "自定義內容"
      },
      "en-US": {
        base: "Basic Usage",
        card: "Card Scenario",
        catchMove: "Prevent Parent Element Scrolling",
        byRef: "Control via Instance Methods",
        close: "Click to Close",
        disabled: "Disable Sliding",
        event: "Event Listener",
        async: "Asynchronous Control",
        custom: "Custom Content"
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
        children: translated.base
      }), /* @__PURE__ */jsx(App$8, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.card
      }), /* @__PURE__ */jsx(App$7, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.catchMove
      }), /* @__PURE__ */jsx(App$6, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.byRef
      }), /* @__PURE__ */jsx(App$5, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.close
      }), /* @__PURE__ */jsx(App$4, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.disabled
      }), /* @__PURE__ */jsx(App$3, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.event
      }), /* @__PURE__ */jsx(App$2, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.async
      }), /* @__PURE__ */jsx(App$1, {}), /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "h2"),
        className: "h2",
        children: translated.custom
      }), /* @__PURE__ */jsx(App, {})]
    })]
  }), __nesting_style__());
};

var config = {
  "navigationBarTitleText": "Swipe"
};
const index = (function () {
  return createNativePageConfig(SwipeDemo, 'feedback/pages/swipe/index', React, ReactDOM, config);
});

export { config, index as default };
