import { _ as _objectSpread2, e as ComponentDefaults, f as classNames, a as harmonyAndRn, b as _slicedToArray, g as _defineProperty, p as pxTransform } from './index.taro.js';
import React__default, { createContext, useRef, useState, useContext, useEffect } from '@jd-oh/taro_library/src/main/ets/npm/react';
import { TaroViewTagName, TaroImageTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { L } from './User.js';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { jsx, Fragment, jsxs } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';

var AvatarContext = /* @__PURE__ */createContext({});

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
      borderLeftColor: "#fff",
      marginLeft: convertNumber2VP(-8, "PX")
    }
  }, {
    "selectors": ["nut-avatar-group", " ", "nut-avatar:not(:first-of-type)"],
    "declaration": {
      marginLeft: convertNumber2VP(-8, "PX")
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-avatar-group", " ", "nut-avatar:not(:first-of-type)"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: convertNumber2VP(-8, "PX")
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-avatar-group", " ", "nut-avatar:not(:first-of-type)"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: convertNumber2VP(-8, "PX")
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
    "h5-span": {},
    "nut-avatar-group": {
      display: "flex",
      flexDirection: FlexDirection.Row,
      flexBasis: "auto",
      flexGrow: 0,
      flexShrink: 0
    },
    "nut-avatar-group-avatar": {
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
      borderLeftColor: "#fff",
      marginLeft: convertNumber2VP(-8, "PX")
    },
    "nut-avatar-group-avatar:not(:first-of-type)": {
      marginLeft: convertNumber2VP(-8, "PX")
    }
  };
  return __inner_style_data__$1;
}
var defaultProps$1 = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  maxContent: "",
  max: "",
  maxBackground: "#eee",
  maxColor: "#666",
  gap: "-8",
  level: "left"
});
var classPrefix$1 = "nut-avatar-group";
var AvatarGroup = function AvatarGroup2(props) {
  var propAvatarGroup = _objectSpread2(_objectSpread2({}, defaultProps$1), props);
  var className = propAvatarGroup.className,
    style = propAvatarGroup.style,
    children = propAvatarGroup.children;
  var avatarGroupRef = useRef(null);
  var cls = classNames(classPrefix$1, className);
  var parentAvatar = {
    propAvatarGroup: _objectSpread2({
      avatarCount: React__default.Children.count(children) || 0
    }, propAvatarGroup),
    avatarGroupRef: avatarGroupRef
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(AvatarContext.Provider, {
    value: parentAvatar,
    children: /* @__PURE__ */jsx(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__$1(), cls),
      className: cls,
      style: style,
      ref: avatarGroupRef,
      children: React__default.Children.map(children, function (child, index) {
        var _child$type;
        return (child === null || child === void 0 || (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) === "NutAvatar" ? /* @__PURE__ */React__default.cloneElement(child, {
          avatarIndex: index + 1,
          className: "nut-avatar-group-avatar"
        }) : child;
      })
    })
  }), __nesting_style__$1());
};
AvatarGroup.displayName = "NutAvatarGroup";

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
    "selectors": ["nut-avatar", " ", "nut-icon-img"],
    "declaration": {
      width: "100%",
      height: "100%"
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
      borderLeftColor: "#fff",
      marginLeft: convertNumber2VP(-8, "PX")
    }
  }, {
    "selectors": ["nut-avatar-group", " ", "nut-avatar:not(:first-of-type)"],
    "declaration": {
      marginLeft: convertNumber2VP(-8, "PX")
    }
  }, {
    "selectors": ["nut-avatar-large", " ", "nut-icon-img"],
    "declaration": {
      width: "100%",
      height: "100%"
    }
  }, {
    "selectors": ["nut-avatar-normal", " ", "nut-icon-img"],
    "declaration": {
      width: "100%",
      height: "100%"
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
    "nut-avatar": {
      position: "relative",
      flexBasis: "auto",
      flexGrow: 0,
      flexShrink: 0
    },
    "nut-avatar-first-child": {
      marginLeft: convertNumber2VP(0),
      marginRight: convertNumber2VP(0)
    },
    "nut-avatar-group": {
      display: "flex",
      flexDirection: FlexDirection.Row,
      flexBasis: "auto",
      flexGrow: 0,
      flexShrink: 0
    },
    "nut-avatar-group-avatar": {
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
      borderLeftColor: "#fff",
      marginLeft: convertNumber2VP(-8, "PX")
    },
    "nut-avatar-group-avatar:not(:first-of-type)": {
      marginLeft: convertNumber2VP(-8, "PX")
    },
    "nut-avatar-icon": {
      backgroundSize: {
        width: "100%",
        height: "100%"
      }
    },
    "nut-avatar-img": {
      width: "100%",
      height: "100%",
      flexShrink: 0,
      backgroundSize: {
        width: "100%",
        height: "100%"
      },
      backgroundRepeat: ImageRepeat.NoRepeat,
      backgroundPosition: Alignment.Center
    },
    "nut-avatar-large": {
      display: "flex",
      justifyContent: FlexAlign.Center,
      alignItems: ItemAlign.Center,
      width: convertNumber2VP(60, "PX"),
      height: convertNumber2VP(60, "PX")
    },
    "nut-avatar-large-icon": {
      width: convertNumber2VP(60, "PX"),
      height: convertNumber2VP(60, "PX")
    },
    "nut-avatar-large-img": {
      width: convertNumber2VP(60, "PX"),
      height: convertNumber2VP(60, "PX")
    },
    "nut-avatar-large-img-image": {
      width: convertNumber2VP(60, "PX"),
      height: convertNumber2VP(60, "PX")
    },
    "nut-avatar-large-text": {
      width: convertNumber2VP(60, "PX"),
      height: convertNumber2VP(60, "PX")
    },
    "nut-avatar-normal": {
      display: "flex",
      justifyContent: FlexAlign.Center,
      alignItems: ItemAlign.Center,
      width: convertNumber2VP(40, "PX"),
      height: convertNumber2VP(40, "PX")
    },
    "nut-avatar-normal-img-image": {
      width: convertNumber2VP(40, "PX"),
      height: convertNumber2VP(40, "PX")
    },
    "nut-avatar-normal-text": {
      width: convertNumber2VP(40, "PX"),
      height: convertNumber2VP(40, "PX")
    },
    "nut-avatar-round": {
      borderTopLeftRadius: convertNumber2VP(999, "PX"),
      borderTopRightRadius: convertNumber2VP(999, "PX"),
      borderBottomLeftRadius: convertNumber2VP(999, "PX"),
      borderBottomRightRadius: convertNumber2VP(999, "PX"),
      overflow: "hidden"
    },
    "nut-avatar-small": {
      display: "flex",
      justifyContent: FlexAlign.Center,
      alignItems: ItemAlign.Center,
      width: convertNumber2VP(32, "PX"),
      height: convertNumber2VP(32, "PX")
    },
    "nut-avatar-small-img-image": {
      width: convertNumber2VP(32, "PX"),
      height: convertNumber2VP(32, "PX")
    },
    "nut-avatar-small-text": {
      width: convertNumber2VP(32, "PX"),
      height: convertNumber2VP(32, "PX")
    },
    "nut-avatar-square": {
      borderTopLeftRadius: convertNumber2VP(5, "PX"),
      borderTopRightRadius: convertNumber2VP(5, "PX"),
      borderBottomLeftRadius: convertNumber2VP(5, "PX"),
      borderBottomRightRadius: convertNumber2VP(5, "PX")
    },
    "nut-avatar-text": {
      display: "flex",
      justifyContent: FlexAlign.Center,
      alignItems: ItemAlign.Center,
      width: "100%",
      height: "100%"
    },
    "nut-image": {
      display: "block",
      position: "relative"
    },
    "nut-image-default": {
      display: "block",
      width: "100%",
      height: "100%"
    },
    "nut-image-error": {
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
    },
    "nut-image-loading": {
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
  };
  return __inner_style_data__;
}
var defaultProps = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  size: harmonyAndRn() ? "40" : "",
  shape: "round",
  icon: "",
  fit: "cover",
  background: "#eee",
  color: "#666",
  src: "",
  avatarIndex: 0
});
var classPrefix = "nut-avatar";
var Avatar = function Avatar2(props) {
  var _parent$propAvatarGro, _parent$propAvatarGro2, _parent$propAvatarGro3, _parent$propAvatarGro4, _parent$propAvatarGro5, _parent$propAvatarGro6, _parent$propAvatarGro7, _parent$propAvatarGro8, _parent$propAvatarGro9, _parent$propAvatarGro10, _parent$propAvatarGro11;
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
    children = _defaultProps$props.children,
    size = _defaultProps$props.size,
    shape = _defaultProps$props.shape,
    background = _defaultProps$props.background,
    color = _defaultProps$props.color,
    src = _defaultProps$props.src,
    icon = _defaultProps$props.icon,
    fit = _defaultProps$props.fit,
    avatarIndex = _defaultProps$props.avatarIndex,
    className = _defaultProps$props.className,
    style = _defaultProps$props.style,
    onClick = _defaultProps$props.onClick,
    onError = _defaultProps$props.onError;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showMax = _useState2[0],
    setShowMax = _useState2[1];
  var avatarRef = useRef(null);
  var parent = useContext(AvatarContext);
  var sizeValue = ["large", "normal", "small"];
  var groupSize = parent === null || parent === void 0 || (_parent$propAvatarGro = parent.propAvatarGroup) === null || _parent$propAvatarGro === void 0 ? void 0 : _parent$propAvatarGro.size;
  var groupShape = parent === null || parent === void 0 || (_parent$propAvatarGro2 = parent.propAvatarGroup) === null || _parent$propAvatarGro2 === void 0 ? void 0 : _parent$propAvatarGro2.shape;
  var groupCount = parent === null || parent === void 0 || (_parent$propAvatarGro3 = parent.propAvatarGroup) === null || _parent$propAvatarGro3 === void 0 ? void 0 : _parent$propAvatarGro3.avatarCount;
  var groupMax = parent === null || parent === void 0 || (_parent$propAvatarGro4 = parent.propAvatarGroup) === null || _parent$propAvatarGro4 === void 0 ? void 0 : _parent$propAvatarGro4.max;
  var classes = classNames(_defineProperty(_defineProperty(_defineProperty({}, "nut-avatar-".concat(groupSize || size || "normal"), true), "nut-avatar-".concat(groupShape || shape), true), "nut-avatar-".concat(groupSize || size || "normal", "-round"), shape === "round" && true));
  var nativeClasses = classNames(_defineProperty({}, "nut-avatar-first-child", avatarIndex === 1));
  var cls = classNames(classPrefix, classes, className, nativeClasses);
  var styles = _objectSpread2(_defineProperty(_defineProperty({
    width: sizeValue.indexOf(size) > -1 ? "" : pxTransform(parseInt(size)),
    height: sizeValue.indexOf(size) > -1 ? "" : pxTransform(parseInt(size)),
    backgroundColor: "".concat(background),
    color: color
  }, harmonyAndRn() ? "marginRight" : "marginLeft", avatarIndex !== 1 && parent !== null && parent !== void 0 && (_parent$propAvatarGro5 = parent.propAvatarGroup) !== null && _parent$propAvatarGro5 !== void 0 && _parent$propAvatarGro5.gap ? "".concat(parent === null || parent === void 0 || (_parent$propAvatarGro6 = parent.propAvatarGroup) === null || _parent$propAvatarGro6 === void 0 ? void 0 : _parent$propAvatarGro6.gap, "px") : ""), "zIndex", (parent === null || parent === void 0 || (_parent$propAvatarGro7 = parent.propAvatarGroup) === null || _parent$propAvatarGro7 === void 0 ? void 0 : _parent$propAvatarGro7.level) === "right" ? Math.abs(groupCount - avatarIndex) : ""), style);
  var maxStyles = {
    backgroundColor: "".concat(parent === null || parent === void 0 || (_parent$propAvatarGro8 = parent.propAvatarGroup) === null || _parent$propAvatarGro8 === void 0 ? void 0 : _parent$propAvatarGro8.maxBackground),
    color: "".concat(parent === null || parent === void 0 || (_parent$propAvatarGro9 = parent.propAvatarGroup) === null || _parent$propAvatarGro9 === void 0 ? void 0 : _parent$propAvatarGro9.maxColor)
  };
  useEffect(function () {
    var maxCount = groupMax || groupCount;
    if (avatarIndex === groupCount && avatarIndex !== maxCount && groupCount > maxCount) {
      setShowMax(true);
    }
  }, [avatarIndex, groupCount]);
  var errorEvent = function errorEvent2() {
    if (onError) {
      onError();
    }
  };
  var clickAvatar = function clickAvatar2(e) {
    onClick && onClick(e);
  };
  return __combine_nesting_style__( /* @__PURE__ */jsx(Fragment, {
    children: (showMax || !groupMax || avatarIndex <= groupMax) && /* @__PURE__ */jsxs(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), cls),
      className: cls,
      style: !showMax ? styles : maxStyles,
      onClick: clickAvatar,
      ref: avatarRef,
      children: [(!groupMax || avatarIndex <= groupMax) && /* @__PURE__ */jsxs(Fragment, {
        children: [src && /* @__PURE__ */jsx(TaroImageTagName, {
          __hmStyle: calcStaticStyle(__inner_style__(), "nut-avatar-img nut-avatar-".concat(groupSize || size || "normal", "-img")),
          className: "nut-avatar-img nut-avatar-".concat(groupSize || size || "normal", "-img"),
          src: src,
          style: _objectSpread2({
            objectFit: fit
          }, styles),
          onError: errorEvent
        }), /* @__PURE__ */ /*#__PURE__*/React__default.isValidElement(icon) ? /* @__PURE__ */React__default.cloneElement(icon, _objectSpread2(_objectSpread2({}, icon.props), {}, {
          className: "".concat(icon.props.className || "", " nut-avatar-icon nut-avatar-").concat(groupSize || size || "normal", "-icon"),
          style: {
            position: "absolute"
          }
        })) : null, children && /* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__(), "nut-avatar-text nut-avatar-".concat(groupSize || size || "normal", "-text")),
          className: "nut-avatar-text nut-avatar-".concat(groupSize || size || "normal", "-text"),
          children: children
        }), !src && !icon && !children && !harmonyAndRn() && /* @__PURE__ */jsx(L, {
          className: "nut-avatar-icon nut-avatar-".concat(groupSize || size || "normal", "-icon"),
          style: {
            position: "absolute"
          },
          __styleSheet: {
            key: "nut-avatar-icon nut-avatar-".concat(groupSize || size || "normal", "-icon"),
            value: calcStaticStyle(__inner_style__(), "nut-avatar-icon nut-avatar-".concat(groupSize || size || "normal", "-icon"))
          },
          __hmStyle: calcStaticStyle(__inner_style__(), "nut-avatar-icon nut-avatar-".concat(groupSize || size || "normal", "-icon"))
        })]
      }), showMax && /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "nut-avatar-text nut-avatar-".concat(groupSize || "normal", "-text")),
        className: "nut-avatar-text nut-avatar-".concat(groupSize || "normal", "-text"),
        children: parent !== null && parent !== void 0 && (_parent$propAvatarGro10 = parent.propAvatarGroup) !== null && _parent$propAvatarGro10 !== void 0 && _parent$propAvatarGro10.maxContent ? parent === null || parent === void 0 || (_parent$propAvatarGro11 = parent.propAvatarGroup) === null || _parent$propAvatarGro11 === void 0 ? void 0 : _parent$propAvatarGro11.maxContent : "+ ".concat(avatarIndex - Number(groupMax || 0))
      })]
    })
  }), __nesting_style__());
};
Avatar.displayName = "NutAvatar";
Avatar.Group = AvatarGroup;

export { Avatar as A };
