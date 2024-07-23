import { o as _asyncToGenerator, q as _regeneratorRuntime, b as _slicedToArray, r as rn } from './index.taro.js';
import { createSelectorQuery } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { document, window } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';

var inBrowser = typeof document !== "undefined" && !!document.scripts;
function isWindow(val) {
  return val === window;
}
var getRect = function getRect2(elementRef) {
  var element = elementRef;
  if (isWindow(element)) {
    var width = element.innerWidth;
    var height = element.innerHeight;
    return {
      top: 0,
      left: 0,
      right: width,
      bottom: height,
      width: width,
      height: height
    };
  }
  if (element && element.getBoundingClientRect) {
    return element.getBoundingClientRect();
  }
  return {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0
  };
};

function makeRect(width, height) {
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width: width,
    height: height
  };
}
var getRectByTaro = /* @__PURE__ */function () {
  var _ref = _asyncToGenerator( /* @__PURE__ */_regeneratorRuntime().mark(function _callee(element) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!element) {
            _context.next = 6;
            break;
          }
          if (!inBrowser) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return", Promise.resolve(getRect(element)));
        case 3:
          if (!rn()) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", new Promise(function (resolve) {
            element.measure(function (xPos, yPos, measureWidth, measureHeight, pageX, pageY) {
              var rect = makeRect(measureWidth, measureHeight);
              rect.left = pageX;
              rect.top = pageY;
              resolve(rect);
            });
          }));
        case 5:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            createSelectorQuery().select("#".concat(element.uid)).boundingClientRect().exec(function (_ref2) {
              var _ref3 = _slicedToArray(_ref2, 1),
                rects = _ref3[0];
              resolve(rects);
            });
          }));
        case 6:
          return _context.abrupt("return", Promise.resolve(makeRect(0, 0)));
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getRectByTaro2(_x) {
    return _ref.apply(this, arguments);
  };
}();

export { getRectByTaro as g };
