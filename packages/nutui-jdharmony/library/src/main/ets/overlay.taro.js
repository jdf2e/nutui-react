import { _ as _objectSpread2, e as ComponentDefaults, d as _objectWithoutProperties, b as _slicedToArray, f as classNames, a as harmonyAndRn } from './index.taro.js';
import { useEffect, useRef, useState } from '@jd-oh/taro_library/src/main/ets/npm/react';
import { TaroViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { getEnv } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { window, document, __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { u as useTouch } from './use-touch.js';
import { jsx, Fragment } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';
import { C as CSSTransition } from './CSSTransition.js';

var canUseDom = !!(typeof window !== "undefined" && typeof document !== "undefined" && window.document && window.document.createElement);

var defaultRoot = canUseDom ? window : void 0;
var overflowStylePatterns = ["scroll", "auto", "overlay"];
function isElement(node) {
  var ELEMENT_NODE_TYPE = 1;
  return node.nodeType === ELEMENT_NODE_TYPE;
}
function getScrollParent(el) {
  var root = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultRoot;
  var node = el;
  while (node && node !== root && isElement(node)) {
    if (node === document.body) {
      return root;
    }
    var _window$getComputedSt = window.getComputedStyle(node),
      overflowY = _window$getComputedSt.overflowY;
    if (overflowStylePatterns.includes(overflowY) && node.scrollHeight > node.clientHeight) {
      return node;
    }
    node = node.parentNode;
  }
  return root;
}

var passiveSupported = false;
if (canUseDom) {
  try {
    var opts = Object.defineProperty({}, "passive", {
      get: function get() {
        passiveSupported = true;
      }
    });
    window.addEventListener("test-passive-supported", null, opts);
  } catch (e) {
    console.log(e);
  }
}

var totalLockCount = 0;
var BODY_LOCK_CLASS = "nut-overflow-hidden";
function getScrollableElement(el) {
  var current = el === null || el === void 0 ? void 0 : el.parentElement;
  while (current) {
    if (current.clientHeight < current.scrollHeight) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}
function useLockScroll(rootRef, shouldLock) {
  var touch = useTouch();
  var onTouchMove = function onTouchMove2(event) {
    touch.move(event);
    var direction = touch.deltaY.current > 0 ? "10" : "01";
    var el = getScrollParent(event.target, rootRef.current);
    if (!el) return;
    if (shouldLock === "strict") {
      var scrollableParent = getScrollableElement(event.target);
      if (scrollableParent === document.body || scrollableParent === document.documentElement) {
        event.preventDefault();
        return;
      }
    }
    var scrollHeight = el.scrollHeight,
      offsetHeight = el.offsetHeight,
      scrollTop = el.scrollTop;
    var status = "11";
    if (scrollTop === 0) {
      status = offsetHeight >= scrollHeight ? "00" : "01";
    } else if (scrollTop + offsetHeight >= scrollHeight) {
      status = "10";
    }
    if (status !== "11" && touch.isVertical() && !(parseInt(status, 2) & parseInt(direction, 2))) {
      if (event.cancelable) {
        event.preventDefault();
      }
    }
  };
  var lock = function lock2() {
    document.addEventListener("touchstart", touch.start);
    document.addEventListener("touchmove", onTouchMove, passiveSupported ? {
      passive: false
    } : false);
    if (!totalLockCount) {
      document.body.classList.add(BODY_LOCK_CLASS);
    }
    totalLockCount++;
  };
  var unlock = function unlock2() {
    if (totalLockCount) {
      document.removeEventListener("touchstart", touch.start);
      document.removeEventListener("touchmove", onTouchMove);
      totalLockCount--;
      if (!totalLockCount) {
        document.body.classList.remove(BODY_LOCK_CLASS);
      }
    }
  };
  useEffect(function () {
    if (shouldLock) {
      lock();
      return function () {
        unlock();
      };
    }
  }, [shouldLock]);
}

var useLockScrollTaro = function useLockScrollTaro2(shouldLock) {
  var refObject = useRef(null);
  if (getEnv() === "WEB") {
    useLockScroll(refObject, shouldLock);
  }
  return refObject;
};

var _excluded = ["children", "zIndex", "duration", "className", "closeOnOverlayClick", "visible", "lockScroll", "style", "afterShow", "afterClose", "onClick"];
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
    "selectors": ["nut-overflow-hidden", " ", "taro_page"],
    "declaration": {
      overflow: "hidden"
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-overlay"],
    "declaration": {
      right: convertNumber2VP(0)
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-overlay"],
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
    "nut-overflow-hidden": {
      overflow: "hidden"
    },
    "nut-overlay": {
      position: "absolute",
      top: convertNumber2VP(0),
      left: convertNumber2VP(0),
      bottom: convertNumber2VP(0),
      right: convertNumber2VP(0),
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: 1e3
    },
    "nut-overlay-slide-appear-active": {
      animationFillMode: "both",
      animationName: [{
        "percentage": 0,
        "event": {
          opacity: 0
        }
      }, {
        "percentage": 0.009999999776482582,
        "event": {
          opacity: 0
        }
      }, {
        "percentage": 1,
        "event": {
          opacity: 1
        }
      }],
      animationDuration: 300
    },
    "nut-overlay-slide-enter-active": {
      animationFillMode: "both",
      animationName: [{
        "percentage": 0,
        "event": {
          opacity: 0
        }
      }, {
        "percentage": 0.009999999776482582,
        "event": {
          opacity: 0
        }
      }, {
        "percentage": 1,
        "event": {
          opacity: 1
        }
      }],
      animationDuration: 300
    },
    "nut-overlay-slide-exit-active": {
      animationFillMode: "both",
      animationName: [{
        "percentage": 0,
        "event": {
          opacity: 1
        }
      }, {
        "percentage": 0.009999999776482582,
        "event": {
          opacity: 1
        }
      }, {
        "percentage": 1,
        "event": {
          opacity: 0
        }
      }],
      animationDuration: 300
    }
  };
  return __inner_style_data__;
}
var defaultOverlayProps = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  zIndex: 1e3,
  duration: 300,
  closeOnOverlayClick: true,
  visible: false,
  lockScroll: true,
  onClick: function onClick(event) {}
});
var Overlay = function Overlay2(props) {
  var _defaultOverlayProps$ = _objectSpread2(_objectSpread2({}, defaultOverlayProps), props),
    children = _defaultOverlayProps$.children;
    _defaultOverlayProps$.zIndex;
    var duration = _defaultOverlayProps$.duration,
    className = _defaultOverlayProps$.className,
    closeOnOverlayClick = _defaultOverlayProps$.closeOnOverlayClick,
    visible = _defaultOverlayProps$.visible,
    lockScroll = _defaultOverlayProps$.lockScroll,
    style = _defaultOverlayProps$.style,
    afterShow = _defaultOverlayProps$.afterShow,
    afterClose = _defaultOverlayProps$.afterClose,
    onClick2 = _defaultOverlayProps$.onClick,
    rest = _objectWithoutProperties(_defaultOverlayProps$, _excluded);
  var classPrefix = "nut-overlay";
  var _useState = useState(visible),
    _useState2 = _slicedToArray(_useState, 2),
    innerVisible = _useState2[0],
    setInnerVisible = _useState2[1];
  var nodeRef = useLockScrollTaro(!!lockScroll && innerVisible);
  useEffect(function () {
    if (visible) {
      setInnerVisible(true);
    } else {
      setInnerVisible(false);
    }
  }, [visible]);
  var classes = classNames(classPrefix, className);
  var styles = _objectSpread2({}, style);
  var handleClick = function handleClick2(e) {
    if (closeOnOverlayClick) {
      onClick2 && onClick2(e);
    }
  };
  var onHandleOpened = function onHandleOpened2(e) {
    afterShow && afterShow();
  };
  var onHandleClosed = function onHandleClosed2(e) {
    afterClose && afterClose();
  };
  function renderHarmony() {
    return innerVisible ? /* @__PURE__ */jsx(TaroViewTagName, _objectSpread2(_objectSpread2({
      __hmStyle: calcStaticStyle(__inner_style__(), classes),
      ref: nodeRef,
      className: classes,
      style: styles
    }, rest), {}, {
      catchMove: lockScroll,
      onClick: handleClick,
      children: children
    })) : null;
  }
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: !harmonyAndRn() ? /* @__PURE__ */jsx(CSSTransition, {
      nodeRef: nodeRef,
      classNames: "".concat(classPrefix, "-slide"),
      unmountOnExit: true,
      timeout: duration,
      in: innerVisible,
      onEntered: onHandleOpened,
      onExited: onHandleClosed,
      children: /* @__PURE__ */jsx(TaroViewTagName, _objectSpread2(_objectSpread2({
        __hmStyle: calcStaticStyle(__inner_style__(), classes),
        ref: nodeRef,
        className: classes,
        style: styles
      }, rest), {}, {
        catchMove: lockScroll,
        onClick: handleClick,
        children: children
      }))
    }) : renderHarmony()
  }), __nesting_style__());
};
Overlay.displayName = "NutOverlay";

export { Overlay as O };
