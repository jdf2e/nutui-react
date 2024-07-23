import { createNativePageConfig } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/plugin-framework-react/dist/runtime';
import Taro from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { TaroScrollViewTagName, TaroViewTagName, TaroImageTagName, TaroTextTagName } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components/tag';
import { c as config$1 } from '../../config.js';
import { __combine_nesting_style__, calcStaticStyle, convertNumber2VP } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';
import { jsxs, jsx } from '@jd-oh/taro_library/src/main/ets/npm/react/jsx-runtime';
import * as React from '@jd-oh/taro_library/src/main/ets/npm/react';
import ReactDOM from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/react';

const name = "@dongdesign/components";
const version = "1.0.1";
const style = "dist/style.css";
const main = "dist/nutui.react.umd.js";
const module = "dist/es/packages/nutui.react.build.js";
const typings = "dist/es/packages/nutui.react.build.d.ts";
const sideEffects = [
	"*.scss",
	"dist/es/**/style/*",
	"dist/cjs/**/style/*",
	"dist/style.css",
	"dist/styles/font/*",
	"dist/styles/font-jmapp/*"
];
const description = "京东风格的轻量级移动端 React 组件库，支持一套代码生成 H5 和小程序";
const keywords = [
	"nutui",
	"nutui2",
	"nutui3",
	"react",
	"nutui-react",
	"webpack",
	"react component",
	"vite",
	"jdc",
	"jdcfe",
	"taro"
];
const author = "jdcfe";
const license = "MIT";
const repository = {
	type: "git",
	url: "https://github.com/jdf2e/nutui-react.git"
};
const files = [
	"dist",
	"README.md",
	"package.json",
	"LICENSE",
	"CHANGELOG.md"
];
const publishConfig = {
	access: "public",
	registry: "http://registry.m.jd.com/"
};
const scripts = {
	add: "node scripts/create-component-mode.js && npm run prepare",
	checked: "npm run generate:file && tsc --project ./tsconfig.h5.json --noEmit",
	"checked:taro": "npm run generate:file:taro && tsc --project ./tsconfig.taro.json --noEmit",
	"generate:file": "node scripts/generate-nutui.js",
	"generate:themes": "node scripts/generate-themes.js",
	"generate:themes-dev": "node scripts/generate-themes-dev.js",
	"generate:file:taro": "node scripts/taro/generate-nutui-taro.js",
	"generate:file:taro:pages": "node scripts/taro/generate-taro-pages.js",
	"add:taro:config": "node scripts/taro/generate-taro-route.js",
	dev: "vite --open --force",
	"dev:rtl": "VITE_RTL=rtl vite --open --force",
	"dev:jmapp": "VITE_APP_PROJECT_ID=jmapp vite --open --force",
	"dev:theme": "npm run generate:themes-dev && npm run checked && vite  --force --config vite.config.theme.ts",
	"dev:taro:weapp": "pnpm run update:taro:entry && pnpm --dir ./packages/nutui-taro-demo dev:weapp",
	"dev:taro:jd": "pnpm run update:taro:entry && pnpm --dir ./packages/nutui-taro-demo dev:jd",
	"build:taro:jd": "pnpm --dir ./packages/nutui-taro-demo build:jd",
	"dev:taro:h5": "pnpm run update:taro:entry && pnpm --dir ./packages/nutui-taro-demo dev:h5",
	"dev:taro:h5:jmapp": "pnpm --dir ./packages/nutui-taro-demo dev:h5:jmapp",
	"dev:taro:alipay": "pnpm --dir ./packages/nutui-taro-demo dev:alipay",
	"dev:taro:harmony": "pnpm run update:taro:entry && pnpm --dir ./packages/nutui-taro-demo dev:harmony",
	"dev:taro:jdharmony": "pnpm run update:taro:entry && pnpm --dir ./packages/nutui-taro-demo dev:jdharmony",
	"dev:taro:jdhybrid": "pnpm run update:taro:entry && pnpm --dir ./packages/nutui-taro-demo dev:jdhybrid",
	"update:taro:entry": "node ./scripts/rn/update-taro-entry",
	"rn:copy": "pnpm run update:taro:entry && node ./scripts/rn/copy-file.js",
	"dev:taro:jdrn": "pnpm run rn:copy && pnpm --dir ./packages/nutui-taro-demo dev:jdrn & pnpm run gulp:watch",
	"dev:taro:rn:dark": "THEME=dark pnpm dev:taro:rn",
	"gulp:watch": "gulp watch --environment",
	"dev:taro:weapp:jmapp": "pnpm --dir ./packages/nutui-taro-demo && npm run dev:weapp:jmapp",
	test: "vitest --coverage",
	"test:ui": "vitest --ui --coverage",
	build: "npm run checked && node scripts/build.mjs",
	"build:taro": "npm run checked:taro && node scripts/build-taro.mjs",
	"build:taro:jmapp": "npm run checked:taro && VITE_APP_PROJECT_ID=jmapp node scripts/build-taro.mjs",
	"build:site": "npm run checked && vite build --config vite.config.site.ts",
	"build:site:jmapp": "npm run checked && VITE_APP_PROJECT_ID=jmapp vite build",
	"build:taro:site": "npm run checked:taro && npm run generate:file:taro:pages && pnpm --dir ./packages/nutui-taro-demo build:h5",
	"build:taro:site:jmapp": "npm run checked:taro && VITE_APP_PROJECT_ID=jmapp npm run generate:file:taro:pages && VITE_APP_PROJECT_ID=jmapp pnpm --dir ./packages/nutui-taro-demo build:h5",
	"build:theme:site": "npm run checked && vite build --config vite.config.theme.ts && npm run generate:themes-dev",
	lint: "eslint ./src/packages",
	"lint:fix": "eslint --fix ./src/packages",
	changelog: "node ./scripts/generate-changelog.js",
	"publish:beta": "npm publish --tag beta",
	prepare: "husky && npm run generate:file && npm run generate:file:taro && npm run generate:file:taro:pages",
	prepublishOnly: "node scripts/prepublish.js",
	postpublish: "node scripts/postpublish.js"
};
const dependencies = {
	"@nutui/icons-react": "^1.0.4",
	"@nutui/icons-react-taro": "^1.0.4",
	"@nutui/touch-emulator": "^1.0.0",
	"@react-spring/web": "~9.6.1",
	"@swc/helpers": "^0.5.7",
	"@use-gesture/react": "10.2.20",
	"async-validator": "^4.2.5",
	classnames: "^2.5.1",
	"lodash.isequal": "^4.5.0",
	"lodash.kebabcase": "^4.1.1",
	"react-transition-group": "^4.4.5"
};
const devDependencies = {
	"@babel/plugin-proposal-class-properties": "^7.18.6",
	"@commitlint/cli": "^19.0.3",
	"@commitlint/config-conventional": "^19.0.3",
	"@loadable/component": "^5.16.3",
	"@mdx-js/mdx": "^3.0.1",
	"@mdx-js/react": "^3.0.1",
	"@mdx-js/rollup": "^3.0.1",
	"@pmmmwh/react-refresh-webpack-plugin": "0.5.10",
	"@rollup/plugin-babel": "^6.0.4",
	"@rollup/plugin-commonjs": "^26.0.1",
	"@rollup/plugin-node-resolve": "15.2.3",
	"@rollup/plugin-typescript": "^11.1.6",
	"@swc/core": "^1.4.8",
	"@tarojs/components": "^4.0.0-alpha.34",
	"@tarojs/plugin-platform-alipay": "^4.0.0-alpha.34",
	"@tarojs/plugin-platform-weapp": "^4.0.0-alpha.34",
	"@tarojs/react": "^4.0.0-alpha.34",
	"@tarojs/taro": "^4.0.0-alpha.34",
	"@testing-library/jest-dom": "^6.4.2",
	"@testing-library/react": "^16.0.0",
	"@types/fs-extra": "^11.0.4",
	"@types/loadable__component": "^5.13.8",
	"@types/lodash.isequal": "^4.5.8",
	"@types/lodash.kebabcase": "^4.1.9",
	"@types/node": "^20.11.19",
	"@types/postcss-import": "^14.0.3",
	"@types/react": "^18.2.57",
	"@types/react-dom": "^18.2.19",
	"@types/react-syntax-highlighter": "^15.5.11",
	"@types/react-test-renderer": "^18.0.7",
	"@types/react-transition-group": "^4.4.10",
	"@types/testing-library__jest-dom": "^6.0.0",
	"@typescript-eslint/eslint-plugin": "^7.0.2",
	"@typescript-eslint/parser": "^7.0.2",
	"@vitejs/plugin-react": "^4.2.1",
	"@vitest/coverage-v8": "^1.4.0",
	"@vitest/ui": "^1.4.0",
	autoprefixer: "^10.4.17",
	axios: "^1.6.7",
	del: "^7.1.0",
	eslint: "^8.56.0",
	"eslint-config-airbnb": "^19.0.4",
	"eslint-config-prettier": "^9.1.0",
	"eslint-plugin-import": "^2.29.1",
	"eslint-plugin-jsx-a11y": "^6.8.0",
	"eslint-plugin-markdown": "^5.0.0",
	"eslint-plugin-prettier": "^5.1.3",
	"eslint-plugin-react": "^7.33.2",
	"eslint-plugin-react-hooks": "^4.6.0",
	"eslint-plugin-unused-imports": "^4.0.0",
	"fs-extra": "^11.2.0",
	glob: "^10.3.10",
	gulp: "^5.0.0",
	"gulp-insert": "^0.5.0",
	"gulp-postcss": "^10.0.0",
	"gulp-rename": "^2.0.0",
	"gulp-replace": "^1.1.4",
	"gulp-sass": "^5.1.0",
	"happy-dom": "^14.2.0",
	"highlight.js": "^11.9.0",
	husky: "^9.0.11",
	inquirer: "^8.2.6",
	jscodeshift: "^0.15.1",
	"lint-staged": "^15.2.2",
	lzutf8: "0.6.3",
	"map-stream": "0.0.7",
	"markdown-it": "^14.0.0",
	mobx: "^6.12.0",
	"mobx-react-lite": "^4.0.5",
	postcss: "^8.4.35",
	"postcss-css-variables": "^0.19.0",
	"postcss-import": "^16.0.1",
	"postcss-modules": "^6.0.0",
	"postcss-rtlcss": "^5.1.0",
	"postcss-scss": "^4.0.9",
	prettier: "^3.2.5",
	react: "^18.2.0",
	"react-color": "^2.19.3",
	"react-dom": "^18.2.0",
	"react-markdown": "^9.0.1",
	"react-refresh": "^0.14.0",
	"react-router-dom": "^6.22.1",
	"react-syntax-highlighter": "^15.5.0",
	"react-test-renderer": "^18.2.0",
	reactcss: "^1.2.3",
	"remark-directive": "^3.0.0",
	"remark-gfm": "^4.0.0",
	rollup: "^4.12.0",
	sass: "^1.71.1",
	shelljs: "^0.8.5",
	turndown: "^7.1.2",
	"turndown-plugin-gfm": "^1.0.2",
	typescript: "^5.3.3",
	"unist-util-visit": "^5.0.0",
	"vinyl-fs": "^4.0.0",
	vite: "^5.1.3",
	"vite-plugin-dts": "3.6.4",
	vitest: "^1.4.0",
	"vitest-canvas-mock": "^0.3.3",
	yargs: "^17.7.2"
};
const peerDependencies = {
	react: "^16.8.0 || ^17.0.0 || ^18.0.0"
};
const resolutions = {
	"@types/react": "^18.2.57",
	"@types/react-dom": "^18.2.19"
};
const packageJson = {
	name: name,
	version: version,
	style: style,
	main: main,
	module: module,
	typings: typings,
	sideEffects: sideEffects,
	description: description,
	keywords: keywords,
	author: author,
	license: license,
	repository: repository,
	files: files,
	publishConfig: publishConfig,
	scripts: scripts,
	"lint-staged": {
	"*.scss": "prettier --write",
	"*.{ts,tsx,js,md}": "eslint"
},
	dependencies: dependencies,
	devDependencies: devDependencies,
	peerDependencies: peerDependencies,
	resolutions: resolutions
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
    "selectors": ["demo", " > ", "h2"],
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
    "selectors": ["nut-rtl", " ", "index_header_img"],
    "declaration": {
      marginRight: convertNumber2VP(0),
      marginLeft: convertNumber2VP(18, "PX")
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "index_header_img"],
    "declaration": {
      marginRight: convertNumber2VP(0),
      marginLeft: convertNumber2VP(18, "PX")
    }
  }, {
    "selectors": ["index_header", " ", "info", " ", "h5-h1"],
    "declaration": {
      fontWeight: 500
    }
  }, {
    "selectors": ["nut-rtl", " ", "index_components", " ", "nut-icon"],
    "declaration": {
      transform: {
        Rotate: {
          z: 1,
          angle: 180
        }
      }
    }
  }, {
    "selectors": ['[dir="rtl"]', " ", "index_components", " ", "nut-icon"],
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
    "h5-span": {},
    "index": {
      backgroundColor: "#fff",
      height: "100%",
      width: "100%",
      paddingTop: convertNumber2VP(30, "PX")
    },
    "index_components": {
      backgroundColor: "#f7f8fa",
      borderTopLeftRadius: convertNumber2VP(30, "PX"),
      borderTopRightRadius: convertNumber2VP(30, "PX"),
      borderBottomLeftRadius: convertNumber2VP(0),
      borderBottomRightRadius: convertNumber2VP(0),
      paddingTop: convertNumber2VP(30, "PX"),
      paddingRight: convertNumber2VP(25, "PX"),
      paddingBottom: convertNumber2VP(30, "PX"),
      paddingLeft: convertNumber2VP(25, "PX")
    },
    "index_components_item": {
      marginBottom: convertNumber2VP(17, "PX")
    },
    "index_components_item_title": {
      lineHeight: convertNumber2VP(20, "PX"),
      fontSize: convertNumber2VP(14, "PX"),
      color: "#909ca4",
      marginBottom: convertNumber2VP(10, "PX")
    },
    "index_components_sublist_item": {
      display: "flex",
      alignItems: ItemAlign.Center,
      justifyContent: FlexAlign.Start,
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(24, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(24, "PX"),
      height: convertNumber2VP(45, "PX"),
      lineHeight: convertNumber2VP(45, "PX"),
      backgroundColor: "#fff",
      borderTopLeftRadius: convertNumber2VP(22, "PX"),
      borderTopRightRadius: convertNumber2VP(22, "PX"),
      borderBottomLeftRadius: convertNumber2VP(22, "PX"),
      borderBottomRightRadius: convertNumber2VP(22, "PX"),
      boxShadow: {
        offsetX: convertNumber2VP(0, "PX"),
        offsetY: convertNumber2VP(1, "PX"),
        radius: convertNumber2VP(4, "PX"),
        color: "rgba(102, 102, 102, 0.06)",
        fill: false
      },
      marginBottom: convertNumber2VP(13, "PX")
    },
    "index_components_sublist_item_content": {
      width: "100%",
      height: "100%",
      fontSize: convertNumber2VP(15, "PX"),
      display: "flex",
      justifyContent: FlexAlign.Center,
      alignItems: ItemAlign.Center,
      color: "#333"
    },
    "index_header": {
      display: "flex",
      alignItems: ItemAlign.Center,
      flexDirection: FlexDirection.Row,
      paddingTop: convertNumber2VP(0),
      paddingRight: convertNumber2VP(34, "PX"),
      paddingBottom: convertNumber2VP(0),
      paddingLeft: convertNumber2VP(34, "PX"),
      height: convertNumber2VP(117, "PX")
    },
    "index_header_img": {
      width: convertNumber2VP(67, "PX"),
      height: convertNumber2VP(67, "PX"),
      marginRight: convertNumber2VP(18, "PX"),
      flexShrink: 0
    },
    "index_header_info": {
      display: "flex",
      flexDirection: FlexDirection.Column
    },
    "index_header_info_h1": {
      height: convertNumber2VP(48, "PX"),
      lineHeight: convertNumber2VP(48, "PX"),
      fontWeight: 500,
      fontSize: convertNumber2VP(24, "PX"),
      color: "#333"
    },
    "index_header_info_p": {
      height: convertNumber2VP(18, "PX"),
      lineHeight: convertNumber2VP(18, "PX"),
      fontSize: convertNumber2VP(13, "PX"),
      color: "#9a9b9d",
      whiteSpace: "nowrap"
    }
  };
  return __inner_style_data__;
}
var navs = config$1.nav;
var Index = function Index2() {
  var gotoNext = function gotoNext2(name, enName) {
    Taro.navigateTo({
      url: "/".concat(enName, "/pages/").concat(name.toLocaleLowerCase(), "/index")
    });
  };
  return __combine_nesting_style__( /* @__PURE__ */jsxs(TaroScrollViewTagName, {
    __hmStyle: calcStaticStyle(__inner_style__(), "index"),
    className: "index",
    children: [/* @__PURE__ */jsxs(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), "index_header"),
      className: "index_header",
      children: [/* @__PURE__ */jsx(TaroImageTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "index_header_img"),
        className: "index_header_img",
        src: "https://img14.360buyimg.com/imagetools/jfs/t1/117879/25/28831/6279/6329723bE66715a2f/5f099b8feca9e8cc.png"
      }), /* @__PURE__ */jsxs(TaroViewTagName, {
        __hmStyle: calcStaticStyle(__inner_style__(), "index_header_info"),
        className: "index_header_info",
        children: [/* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__(), "index_header_info_h1"),
          className: "index_header_info_h1",
          children: "NutUI React"
        }), /* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__(), "index_header_info_p"),
          className: "index_header_info_p",
          children: "京东风格的轻量级小程序组件库 React 版"
        }), /* @__PURE__ */jsx(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__(), "index_header_info_p"),
          className: "index_header_info_p",
          children: /* @__PURE__ */jsxs(TaroTextTagName, {
            children: ["v", packageJson === null || packageJson === void 0 ? void 0 : packageJson.version]
          })
        })]
      })]
    }), /* @__PURE__ */jsx(TaroViewTagName, {
      __hmStyle: calcStaticStyle(__inner_style__(), "index_components"),
      className: "index_components",
      children: navs.map(function (nav) {
        return /* @__PURE__ */jsxs(TaroViewTagName, {
          __hmStyle: calcStaticStyle(__inner_style__(), "index_components_item"),
          className: "index_components_item",
          children: [nav.enName === "dataentry" ? null : /* @__PURE__ */jsx(TaroViewTagName, {
            __hmStyle: calcStaticStyle(__inner_style__(), "index_components_item_title"),
            className: "index_components_item_title",
            children: nav.name
          }), /* @__PURE__ */jsx(TaroViewTagName, {
            __hmStyle: calcStaticStyle(__inner_style__(), "index_components_sublist"),
            className: "index_components_sublist",
            children: nav.packages.map(function (com) {
              return com.show && com.taro && com.version === "3.0.0" ? /* @__PURE__ */jsx(TaroViewTagName, {
                __hmStyle: calcStaticStyle(__inner_style__(), "index_components_sublist_item"),
                className: "index_components_sublist_item",
                children: /* @__PURE__ */jsx(TaroViewTagName, {
                  __hmStyle: calcStaticStyle(__inner_style__(), "index_components_sublist_item_content"),
                  className: "index_components_sublist_item_content",
                  onClick: function onClick() {
                    return gotoNext(com.name, nav.enName);
                  },
                  children: com.name
                }, com.name)
              }, com.name) : null;
            })
          })]
        }, nav.enName);
      })
    })]
  }), __nesting_style__());
};

var config = {
  "navigationBarTitleText": "首页"
};
const index = (function () {
  return createNativePageConfig(Index, 'pages/index/index', React, ReactDOM, config);
});

export { config, index as default };
