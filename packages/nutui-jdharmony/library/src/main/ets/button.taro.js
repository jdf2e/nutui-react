import { _ as _objectSpread2, e as ComponentDefaults, d as _objectWithoutProperties, a as harmonyAndRn, f as classNames, g as _defineProperty } from './index.taro.js';
import React__default, { useCallback } from '@jd-oh/taro_library/src/main/ets/npm/react';
import { TaroButtonTagName, TaroViewTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { I } from './Loading.js';
import { getEnv } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { jsx, jsxs } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';

var _excluded = ["color", "shape", "fill", "loading", "disabled", "type", "size", "block", "icon", "rightIcon", "children", "className", "style", "nativeType", "onClick"];
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
    "selectors": [["nut-button", "nut-button-icononly"]],
    "declaration": {
      width: convertNumber2VP(32, "PX"),
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0)
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
    "selectors": ["nut-button-large", " ", "nut-icon"],
    "declaration": {
      fontSize: convertNumber2VP(16, "PX"),
      width: convertNumber2VP(16, "PX"),
      height: convertNumber2VP(16, "PX")
    }
  }, {
    "selectors": ["nut-button-mini", " ", "nut-icon"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX"),
      width: convertNumber2VP(12, "PX"),
      height: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ["nut-button-small", " ", "nut-icon"],
    "declaration": {
      fontSize: convertNumber2VP(12, "PX"),
      width: convertNumber2VP(12, "PX"),
      height: convertNumber2VP(12, "PX")
    }
  }, {
    "selectors": ["nut-button-wrap", " ", "nut-icon"],
    "declaration": {
      fontSize: convertNumber2VP(14, "PX"),
      width: convertNumber2VP(14, "PX"),
      height: convertNumber2VP(14, "PX")
    }
  }, {
    "selectors": ["nut-button-xlarge", " ", "nut-icon"],
    "declaration": {
      fontSize: convertNumber2VP(24, "PX"),
      width: convertNumber2VP(24, "PX"),
      height: convertNumber2VP(24, "PX")
    }
  }, {
    "selectors": ["nut-rtl", " ", "nut-button"],
    "declaration": _defineProperty({}, "::before", {
      right: "50%",
      transform: {
        Translate: {
          x: "50%",
          y: "-50%"
        }
      }
    })
  }, {
    "selectors": ["nut-rtl", " ", "nut-button-text"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: convertNumber2VP(4, "PX")
    }
  }, {
    "selectors": ["nut-rtl", " ", ["nut-button-text", "right"]],
    "declaration": {
      marginLeft: convertNumber2VP(4, "PX")
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-button"],
    "declaration": _defineProperty({}, "::before", {
      right: "50%",
      transform: {
        Translate: {
          x: "50%",
          y: "-50%"
        }
      }
    })
  }, {
    "selectors": ['[dir="rtl"]', " ", "nut-button-text"],
    "declaration": {
      marginLeft: convertNumber2VP(0),
      marginRight: convertNumber2VP(4, "PX")
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", ["nut-button-text", "right"]],
    "declaration": {
      marginLeft: convertNumber2VP(4, "PX")
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
    "nut-button": _defineProperty(_defineProperty({
      position: "relative",
      width: convertNumber2VP(80, "PX"),
      flexDirection: FlexDirection.Row,
      justifyContent: FlexAlign.Center,
      alignItems: ItemAlign.Center,
      flexShrink: 0,
      boxSizing: "border-box",
      marginTop: convertNumber2VP(0),
      marginRight: convertNumber2VP(0),
      marginBottom: convertNumber2VP(0),
      marginLeft: convertNumber2VP(0),
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(0),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(0),
      height: convertNumber2VP(32, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      fontWeight: 400,
      textAlign: TextAlign.Center,
      cursor: "pointer",
      transition: "opacity .2s",
      WebkitAppearance: "none",
      userSelect: "none",
      touchAction: "manipulation",
      WebkitTapHighlightColor: "#0000",
      color: "#1a1a1a",
      borderTopWidth: convertNumber2VP(1, "PX"),
      borderBottomWidth: convertNumber2VP(1, "PX"),
      borderLeftWidth: convertNumber2VP(1, "PX"),
      borderRightWidth: convertNumber2VP(1, "PX")
    }, "::after", {
      borderTopColor: "",
      borderRightColor: "",
      borderBottomColor: "",
      borderLeftColor: ""
    }), "::before", {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderTopColor: "rgba(0, 0, 0, 0.7)",
      borderBottomColor: "rgba(0, 0, 0, 0.7)",
      borderLeftColor: "rgba(0, 0, 0, 0.7)",
      borderRightColor: "rgba(0, 0, 0, 0.7)",
      transform: {
        Translate: {
          x: "-50%",
          y: "-50%"
        }
      },
      opacity: 0,
      content: " "
    }),
    "nut-button-block": {
      display: "block",
      width: "100%"
    },
    "nut-button-children": {
      display: "flex",
      flexDirection: FlexDirection.Row
    },
    "nut-button-danger": {
      color: "#fff",
      backgroundColor: "#ff0f23",
      backgroundOrigin: "border-box",
      borderTopColor: "rgba(0, 0, 0, 0)",
      borderBottomColor: "rgba(0, 0, 0, 0)",
      borderLeftColor: "rgba(0, 0, 0, 0)",
      borderRightColor: "rgba(0, 0, 0, 0)"
    },
    "nut-button-danger-children": {
      color: "#fff"
    },
    "nut-button-danger-dashed": {
      color: "#ff0f23",
      borderTopColor: "#ff0f23",
      borderBottomColor: "#ff0f23",
      borderLeftColor: "#ff0f23",
      borderRightColor: "#ff0f23"
    },
    "nut-button-danger-dashed-disabled": {
      color: "#ffadbe",
      borderTopColor: "#ffadbe",
      borderBottomColor: "#ffadbe",
      borderLeftColor: "#ffadbe",
      borderRightColor: "#ffadbe"
    },
    "nut-button-danger-none": {
      color: "#ff0f23"
    },
    "nut-button-danger-none-disabled": {
      color: "#ffadbe"
    },
    "nut-button-danger-outline": {
      color: "#ff0f23",
      borderTopColor: "#ff0f23",
      borderBottomColor: "#ff0f23",
      borderLeftColor: "#ff0f23",
      borderRightColor: "#ff0f23"
    },
    "nut-button-danger-outline-disabled": {
      color: "#ffadbe",
      borderTopColor: "#ffadbe",
      borderBottomColor: "#ffadbe",
      borderLeftColor: "#ffadbe",
      borderRightColor: "#ffadbe"
    },
    "nut-button-danger-solid-disabled": {
      backgroundColor: "#ffadbe",
      borderTopColor: "#ffadbe",
      borderBottomColor: "#ffadbe",
      borderLeftColor: "#ffadbe",
      borderRightColor: "#ffadbe"
    },
    "nut-button-dashed": {
      borderTopStyle: BorderStyle.Dashed,
      borderBottomStyle: BorderStyle.Dashed,
      borderLeftStyle: BorderStyle.Dashed,
      borderRightStyle: BorderStyle.Dashed
    },
    "nut-button-default": {
      paddingTop: convertNumber2VP(0, "PX"),
      paddingRight: convertNumber2VP(12, "PX"),
      paddingBottom: convertNumber2VP(0, "PX"),
      paddingLeft: convertNumber2VP(12, "PX"),
      borderTopStyle: BorderStyle.Solid,
      borderBottomStyle: BorderStyle.Solid,
      borderLeftStyle: BorderStyle.Solid,
      borderRightStyle: BorderStyle.Solid,
      borderTopColor: "#505259",
      borderBottomColor: "#505259",
      borderLeftColor: "#505259",
      borderRightColor: "#505259"
    },
    "nut-button-default-dashed-disabled": {
      color: "#c2c4cc",
      borderTopColor: "#c2c4cc",
      borderBottomColor: "#c2c4cc",
      borderLeftColor: "#c2c4cc",
      borderRightColor: "#c2c4cc"
    },
    "nut-button-default-disabled": {
      color: "#fff",
      backgroundColor: "#c2c4cc",
      borderTopColor: "#c2c4cc",
      borderBottomColor: "#c2c4cc",
      borderLeftColor: "#c2c4cc",
      borderRightColor: "#c2c4cc"
    },
    "nut-button-default-none-disabled": {
      color: "#888b94"
    },
    "nut-button-default-outline-disabled": {
      color: "#c2c4cc",
      borderTopColor: "#c2c4cc",
      borderBottomColor: "#c2c4cc",
      borderLeftColor: "#c2c4cc",
      borderRightColor: "#c2c4cc"
    },
    "nut-button-default-solid-disabled": {
      color: "#fff",
      backgroundColor: "#c2c4cc",
      borderTopColor: "#c2c4cc",
      borderBottomColor: "#c2c4cc",
      borderLeftColor: "#c2c4cc",
      borderRightColor: "#c2c4cc"
    },
    "nut-button-disabled": _defineProperty({
      cursor: "not-allowed",
      color: "#fff"
    }, "::before", {
      display: "none"
    }),
    "nut-button-info": {
      color: "#fff",
      backgroundColor: "#0073ff",
      backgroundOrigin: "border-box",
      borderTopColor: "rgba(0, 0, 0, 0)",
      borderBottomColor: "rgba(0, 0, 0, 0)",
      borderLeftColor: "rgba(0, 0, 0, 0)",
      borderRightColor: "rgba(0, 0, 0, 0)"
    },
    "nut-button-info-children": {
      color: "#fff"
    },
    "nut-button-info-dashed": {
      color: "#1988fa",
      borderTopColor: "#1988fa",
      borderBottomColor: "#1988fa",
      borderLeftColor: "#1988fa",
      borderRightColor: "#1988fa"
    },
    "nut-button-info-dashed-disabled": {
      color: "#89a6f8",
      borderTopColor: "#89a6f8",
      borderBottomColor: "#89a6f8",
      borderLeftColor: "#89a6f8",
      borderRightColor: "#89a6f8"
    },
    "nut-button-info-none": {
      color: "#1988fa"
    },
    "nut-button-info-none-disabled": {
      color: "#89a6f8"
    },
    "nut-button-info-outline": {
      color: "#1988fa",
      borderTopColor: "#1988fa",
      borderBottomColor: "#1988fa",
      borderLeftColor: "#1988fa",
      borderRightColor: "#1988fa"
    },
    "nut-button-info-outline-disabled": {
      color: "#89a6f8",
      borderTopColor: "#89a6f8",
      borderBottomColor: "#89a6f8",
      borderLeftColor: "#89a6f8",
      borderRightColor: "#89a6f8"
    },
    "nut-button-info-solid-disabled": {
      backgroundColor: "#89a6f8",
      borderTopColor: "#89a6f8",
      borderBottomColor: "#89a6f8",
      borderLeftColor: "#89a6f8",
      borderRightColor: "#89a6f8"
    },
    "nut-button-large": {
      height: convertNumber2VP(40, "PX"),
      paddingTop: convertNumber2VP(0, "PX"),
      paddingRight: convertNumber2VP(16, "PX"),
      paddingBottom: convertNumber2VP(0, "PX"),
      paddingLeft: convertNumber2VP(16, "PX"),
      fontSize: convertNumber2VP(16, "PX"),
      fontWeight: 600
    },
    "nut-button-large-children": {
      fontSize: convertNumber2VP(16, "PX"),
      fontWeight: 600
    },
    "nut-button-loading": _defineProperty({
      cursor: "default",
      opacity: 0.9
    }, "::before", {
      display: "none"
    }),
    "nut-button-mini": {
      height: convertNumber2VP(24, "PX"),
      paddingTop: convertNumber2VP(0, "PX"),
      paddingRight: convertNumber2VP(8, "PX"),
      paddingBottom: convertNumber2VP(0, "PX"),
      paddingLeft: convertNumber2VP(8, "PX"),
      fontSize: convertNumber2VP(12, "PX")
    },
    "nut-button-mini-children": {
      fontSize: convertNumber2VP(12, "PX")
    },
    "nut-button-none": {
      borderTopColor: "rgba(0, 0, 0, 0)",
      borderBottomColor: "rgba(0, 0, 0, 0)",
      borderLeftColor: "rgba(0, 0, 0, 0)",
      borderRightColor: "rgba(0, 0, 0, 0)"
    },
    "nut-button-normal": {
      paddingTop: convertNumber2VP(0, "PX"),
      paddingRight: convertNumber2VP(12, "PX"),
      paddingBottom: convertNumber2VP(0, "PX"),
      paddingLeft: convertNumber2VP(12, "PX")
    },
    "nut-button-outline": {
      borderTopStyle: BorderStyle.Solid,
      borderBottomStyle: BorderStyle.Solid,
      borderLeftStyle: BorderStyle.Solid,
      borderRightStyle: BorderStyle.Solid
    },
    "nut-button-primary": {
      color: "#fff",
      backgroundOrigin: "border-box",
      borderTopColor: "rgba(0, 0, 0, 0)",
      borderBottomColor: "rgba(0, 0, 0, 0)",
      borderLeftColor: "rgba(0, 0, 0, 0)",
      borderRightColor: "rgba(0, 0, 0, 0)"
    },
    "nut-button-primary-children": {
      color: "#fff"
    },
    "nut-button-primary-dashed": {
      color: "#ff0f23",
      borderTopColor: "#ff0f23",
      borderBottomColor: "#ff0f23",
      borderLeftColor: "#ff0f23",
      borderRightColor: "#ff0f23"
    },
    "nut-button-primary-dashed-disabled": {
      color: "#ffadbe",
      borderTopColor: "#ffadbe",
      borderBottomColor: "#ffadbe",
      borderLeftColor: "#ffadbe",
      borderRightColor: "#ffadbe"
    },
    "nut-button-primary-disabled": {
      color: "#fff",
      backgroundColor: "#ffadbe",
      borderTopColor: "#ffadbe",
      borderBottomColor: "#ffadbe",
      borderLeftColor: "#ffadbe",
      borderRightColor: "#ffadbe"
    },
    "nut-button-primary-none": {
      color: "#ff0f23"
    },
    "nut-button-primary-none-disabled": {
      color: "#ffadbe"
    },
    "nut-button-primary-outline": {
      color: "#ff0f23",
      borderTopColor: "#ff0f23",
      borderBottomColor: "#ff0f23",
      borderLeftColor: "#ff0f23",
      borderRightColor: "#ff0f23"
    },
    "nut-button-primary-outline-disabled": {
      color: "#ffadbe",
      borderTopColor: "#ffadbe",
      borderBottomColor: "#ffadbe",
      borderLeftColor: "#ffadbe",
      borderRightColor: "#ffadbe"
    },
    "nut-button-primary-solid": {
      backgroundColor: "#ff0f23",
      color: "#fff",
      borderTopColor: "rgba(0, 0, 0, 0)",
      borderBottomColor: "rgba(0, 0, 0, 0)",
      borderLeftColor: "rgba(0, 0, 0, 0)",
      borderRightColor: "rgba(0, 0, 0, 0)"
    },
    "nut-button-primary-solid-disabled": {
      color: "#fff",
      backgroundColor: "#ffadbe",
      borderTopColor: "#ffadbe",
      borderBottomColor: "#ffadbe",
      borderLeftColor: "#ffadbe",
      borderRightColor: "#ffadbe"
    },
    "nut-button-round": {
      borderTopLeftRadius: convertNumber2VP(8, "PX"),
      borderTopRightRadius: convertNumber2VP(8, "PX"),
      borderBottomLeftRadius: convertNumber2VP(8, "PX"),
      borderBottomRightRadius: convertNumber2VP(8, "PX")
    },
    "nut-button-round-large": {
      borderTopLeftRadius: convertNumber2VP(12, "PX"),
      borderTopRightRadius: convertNumber2VP(12, "PX"),
      borderBottomLeftRadius: convertNumber2VP(12, "PX"),
      borderBottomRightRadius: convertNumber2VP(12, "PX")
    },
    "nut-button-round-mini": {
      borderTopLeftRadius: convertNumber2VP(6, "PX"),
      borderTopRightRadius: convertNumber2VP(6, "PX"),
      borderBottomLeftRadius: convertNumber2VP(6, "PX"),
      borderBottomRightRadius: convertNumber2VP(6, "PX")
    },
    "nut-button-round-small": {
      borderTopLeftRadius: convertNumber2VP(8, "PX"),
      borderTopRightRadius: convertNumber2VP(8, "PX"),
      borderBottomLeftRadius: convertNumber2VP(8, "PX"),
      borderBottomRightRadius: convertNumber2VP(8, "PX")
    },
    "nut-button-round-xlarge": {
      borderTopLeftRadius: convertNumber2VP(12, "PX"),
      borderTopRightRadius: convertNumber2VP(12, "PX"),
      borderBottomLeftRadius: convertNumber2VP(12, "PX"),
      borderBottomRightRadius: convertNumber2VP(12, "PX")
    },
    "nut-button-small": {
      height: convertNumber2VP(28, "PX"),
      paddingTop: convertNumber2VP(0, "PX"),
      paddingRight: convertNumber2VP(8, "PX"),
      paddingBottom: convertNumber2VP(0, "PX"),
      paddingLeft: convertNumber2VP(8, "PX"),
      fontSize: convertNumber2VP(12, "PX")
    },
    "nut-button-small-children": {
      fontSize: convertNumber2VP(12, "PX")
    },
    "nut-button-square": {
      borderTopLeftRadius: convertNumber2VP(0),
      borderTopRightRadius: convertNumber2VP(0),
      borderBottomLeftRadius: convertNumber2VP(0),
      borderBottomRightRadius: convertNumber2VP(0)
    },
    "nut-button-success": {
      color: "#fff",
      backgroundColor: "#2aa32a",
      backgroundOrigin: "border-box",
      borderTopColor: "rgba(0, 0, 0, 0)",
      borderBottomColor: "rgba(0, 0, 0, 0)",
      borderLeftColor: "rgba(0, 0, 0, 0)",
      borderRightColor: "rgba(0, 0, 0, 0)"
    },
    "nut-button-success-children": {
      color: "#fff"
    },
    "nut-button-success-dashed": {
      color: "#2aa32a",
      borderTopColor: "#2aa32a",
      borderBottomColor: "#2aa32a",
      borderLeftColor: "#2aa32a",
      borderRightColor: "#2aa32a"
    },
    "nut-button-success-dashed-disabled": {
      color: "#ffadbe",
      borderTopColor: "#ffadbe",
      borderBottomColor: "#ffadbe",
      borderLeftColor: "#ffadbe",
      borderRightColor: "#ffadbe"
    },
    "nut-button-success-none": {
      color: "#2aa32a"
    },
    "nut-button-success-none-disabled": {
      color: "#b2f0ae"
    },
    "nut-button-success-outline": {
      color: "#2aa32a",
      borderTopColor: "#2aa32a",
      borderBottomColor: "#2aa32a",
      borderLeftColor: "#2aa32a",
      borderRightColor: "#2aa32a"
    },
    "nut-button-success-outline-disabled": {
      color: "#ffadbe",
      borderTopColor: "#ffadbe",
      borderBottomColor: "#ffadbe",
      borderLeftColor: "#ffadbe",
      borderRightColor: "#ffadbe"
    },
    "nut-button-success-solid-disabled": {
      backgroundColor: "#b2f0ae",
      borderTopColor: "#b2f0ae",
      borderBottomColor: "#b2f0ae",
      borderLeftColor: "#b2f0ae",
      borderRightColor: "#b2f0ae"
    },
    "nut-button-text": {
      marginLeft: convertNumber2VP(4, "PX")
    },
    "nut-button-text-right": {
      marginRight: convertNumber2VP(4, "PX")
    },
    "nut-button-warning": {
      color: "#fff",
      backgroundColor: "#c47600",
      backgroundOrigin: "border-box",
      borderTopColor: "rgba(0, 0, 0, 0)",
      borderBottomColor: "rgba(0, 0, 0, 0)",
      borderLeftColor: "rgba(0, 0, 0, 0)",
      borderRightColor: "rgba(0, 0, 0, 0)"
    },
    "nut-button-warning-children": {
      color: "#fff"
    },
    "nut-button-warning-dashed": {
      color: "#c47600",
      borderTopColor: "#c47600",
      borderBottomColor: "#c47600",
      borderLeftColor: "#c47600",
      borderRightColor: "#c47600"
    },
    "nut-button-warning-dashed-disabled": {
      color: "#fdd3b9",
      borderTopColor: "#fdd3b9",
      borderBottomColor: "#fdd3b9",
      borderLeftColor: "#fdd3b9",
      borderRightColor: "#fdd3b9"
    },
    "nut-button-warning-disabled": {
      color: "#fff",
      backgroundColor: "#fdd3b9",
      borderTopColor: "#fdd3b9",
      borderBottomColor: "#fdd3b9",
      borderLeftColor: "#fdd3b9",
      borderRightColor: "#fdd3b9"
    },
    "nut-button-warning-none": {
      color: "#c47600"
    },
    "nut-button-warning-none-disabled": {
      color: "#fdd3b9"
    },
    "nut-button-warning-outline": {
      color: "#c47600",
      borderTopColor: "#c47600",
      borderBottomColor: "#c47600",
      borderLeftColor: "#c47600",
      borderRightColor: "#c47600"
    },
    "nut-button-warning-outline-disabled": {
      color: "#fdd3b9",
      borderTopColor: "#fdd3b9",
      borderBottomColor: "#fdd3b9",
      borderLeftColor: "#fdd3b9",
      borderRightColor: "#fdd3b9"
    },
    "nut-button-warning-solid-disabled": {
      color: "#fff",
      backgroundColor: "#fdd3b9",
      borderTopColor: "#fdd3b9",
      borderBottomColor: "#fdd3b9",
      borderLeftColor: "#fdd3b9",
      borderRightColor: "#fdd3b9"
    },
    "nut-button-wrap": {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: FlexDirection.Row,
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Center
    },
    "nut-button-xlarge": {
      height: convertNumber2VP(48, "PX"),
      paddingTop: convertNumber2VP(0, "PX"),
      paddingRight: convertNumber2VP(24, "PX"),
      paddingBottom: convertNumber2VP(0, "PX"),
      paddingLeft: convertNumber2VP(24, "PX"),
      fontSize: convertNumber2VP(24, "PX"),
      fontWeight: 600
    },
    "nut-button-xlarge-children": {
      fontSize: convertNumber2VP(24, "PX"),
      fontWeight: 600
    },
    "nut-button:active:before": _defineProperty({}, "::", {
      opacity: 0.1
    })
  };
  return __inner_style_data__;
}
var prefixCls = "nut-button";
var defaultProps = _objectSpread2(_objectSpread2({}, ComponentDefaults), {}, {
  color: "",
  type: "default",
  size: "normal",
  shape: "round",
  fill: "outline",
  loading: false,
  disabled: false,
  block: false,
  icon: null,
  rightIcon: null,
  onClick: function onClick(e) {}
});
var Button = /* @__PURE__ */React__default.forwardRef(function (props, ref) {
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
    color = _defaultProps$props.color,
    shape = _defaultProps$props.shape,
    fill = _defaultProps$props.fill,
    loading = _defaultProps$props.loading,
    disabled = _defaultProps$props.disabled,
    type = _defaultProps$props.type,
    size = _defaultProps$props.size,
    block = _defaultProps$props.block,
    icon = _defaultProps$props.icon,
    rightIcon = _defaultProps$props.rightIcon,
    children = _defaultProps$props.children,
    className = _defaultProps$props.className,
    style = _defaultProps$props.style,
    nativeType = _defaultProps$props.nativeType,
    onClick2 = _defaultProps$props.onClick,
    rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var getStyle = useCallback(function () {
    var style2 = {};
    if (props.color) {
      if (props.fill === "outline" || props.fill === "dashed") {
        style2.color = color;
        if (!(color !== null && color !== void 0 && color.includes("gradient"))) {
          style2.borderColor = color;
        }
      } else {
        style2.color = "#fff";
        if (harmonyAndRn()) {
          style2.backgroundColor = color;
        }
        style2.background = color;
        style2.borderColor = "transparent";
      }
    }
    return style2;
  }, [color]);
  var getContStyle = useCallback(function () {
    var style2 = {};
    if (props.color) {
      if (props.fill === "outline" || props.fill === "dashed") {
        style2.color = color;
      } else {
        style2.color = "#fff";
        style2.background = "transparent";
        style2.borderColor = "transparent";
      }
    }
    return style2;
  }, [color]);
  var handleClick = function handleClick2(e) {
    if (!loading && !disabled && onClick2) {
      onClick2(e);
    }
  };
  if (getEnv() === "WEB") {
    rest.type = rest.formType;
  }
  return __combine_nesting_style__(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line react/button-has-type
  /* @__PURE__ */
  jsx(TaroButtonTagName, _objectSpread2(_objectSpread2({
    __hmStyle: calcStaticStyle(__inner_style__(), classNames(prefixCls, "".concat(prefixCls, "-").concat(type), type === "primary" && !props.fill ? "".concat(prefixCls, "-").concat(type, "-solid") : null, props.fill ? "".concat(prefixCls, "-").concat(fill) : null, props.fill ? "".concat(prefixCls, "-").concat(type, "-").concat(fill) : null, children ? "" : "".concat(prefixCls, "-icononly"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(size), size), "".concat(prefixCls, "-").concat(shape), shape), "".concat(prefixCls, "-").concat(shape, "-").concat(size), shape && size), "".concat(prefixCls, "-block"), block), "".concat(prefixCls, "-disabled"), disabled || loading), "".concat(prefixCls, "-").concat(type).concat(props.fill ? "-".concat(fill) : "", "-disabled"), disabled || loading), "".concat(prefixCls, "-loading"), loading), className))
  }, rest), {}, {
    ref: ref,
    formType: nativeType,
    className: classNames(prefixCls, "".concat(prefixCls, "-").concat(type), type === "primary" && !props.fill ? "".concat(prefixCls, "-").concat(type, "-solid") : null, props.fill ? "".concat(prefixCls, "-").concat(fill) : null, props.fill ? "".concat(prefixCls, "-").concat(type, "-").concat(fill) : null, children ? "" : "".concat(prefixCls, "-icononly"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(size), size), "".concat(prefixCls, "-").concat(shape), shape), "".concat(prefixCls, "-").concat(shape, "-").concat(size), shape && size), "".concat(prefixCls, "-block"), block), "".concat(prefixCls, "-disabled"), disabled || loading), "".concat(prefixCls, "-").concat(type).concat(props.fill ? "-".concat(fill) : "", "-disabled"), disabled || loading), "".concat(prefixCls, "-loading"), loading), className),
    style: _objectSpread2(_objectSpread2({}, getStyle()), style),
    onClick: function onClick3(e) {
      return handleClick(e);
    },
    children: /* @__PURE__ */jsxs(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), "nut-button-wrap"),
      className: "nut-button-wrap",
      children: [loading && !harmonyAndRn() && /* @__PURE__ */jsx(I, {
        className: "nut-icon-loading",
        __styleSheet: {
          key: "nut-icon-loading",
          value: calcStaticStyle(__inner_style__(), "nut-icon-loading")
        },
        __hmStyle: calcStaticStyle(__inner_style__(), "nut-icon-loading")
      }), !loading && icon ? icon : null, children && /* @__PURE__ */jsx(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "nut-button-children nut-button-".concat(size, "-children nut-button-").concat(type, "-children ").concat(!(props.fill || disabled || loading) ? "" : "nut-button-".concat(type).concat(props.fill ? "-".concat(fill) : "").concat(disabled || loading ? "-disabled" : ""), " ").concat(icon || loading ? "nut-button-text" : "").concat(rightIcon ? " nut-button-text-right" : "")),
        className: "nut-button-children nut-button-".concat(size, "-children nut-button-").concat(type, "-children ").concat(!(props.fill || disabled || loading) ? "" : "nut-button-".concat(type).concat(props.fill ? "-".concat(fill) : "").concat(disabled || loading ? "-disabled" : ""), " ").concat(icon || loading ? "nut-button-text" : "").concat(rightIcon ? " nut-button-text-right" : ""),
        style: harmonyAndRn() ? getContStyle() : {},
        children: children
      }), rightIcon || null]
    })
  })), __nesting_style__());
});
Button.displayName = "NutButton";

export { Button as B };
