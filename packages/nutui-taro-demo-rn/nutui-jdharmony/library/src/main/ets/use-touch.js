import { useRef } from '@jd-oh/taro_library/src/main/ets/npm/react';
import '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';

var MIN_DISTANCE = 10;
function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return "horizontal";
  }
  if (y > x && y > MIN_DISTANCE) {
    return "vertical";
  }
  return "";
}
function useTouch() {
  var startX = useRef(0);
  var startY = useRef(0);
  var deltaX = useRef(0);
  var deltaY = useRef(0);
  var delta = useRef(0);
  var offsetX = useRef(0);
  var offsetY = useRef(0);
  var direction = useRef("");
  var last = useRef(false);
  var velocity = useRef(0);
  var touchTime = useRef(Date.now());
  var isVertical = function isVertical2() {
    return direction.current === "vertical";
  };
  var isHorizontal = function isHorizontal2() {
    return direction.current === "horizontal";
  };
  var reset = function reset2() {
    touchTime.current = Date.now();
    deltaX.current = 0;
    deltaY.current = 0;
    offsetX.current = 0;
    offsetY.current = 0;
    delta.current = 0;
    direction.current = "";
    last.current = false;
  };
  var getTouch = function getTouch2(event) {
    var touch = event.touches ? event.touches[0] : event.nativeEvent;
    return touch;
  };
  var getX = function getX2(touch) {
    var _ref, _ref2, _touch$screenX;
    if (typeof touch.clientX !== "undefined" && typeof touch.pageX !== "undefined") return touch.pageX;
    return (_ref = (_ref2 = (_touch$screenX = touch.screenX) !== null && _touch$screenX !== void 0 ? _touch$screenX : touch.pageX) !== null && _ref2 !== void 0 ? _ref2 : touch.clientX) !== null && _ref !== void 0 ? _ref : 0;
  };
  var getY = function getY2(touch) {
    var _ref3, _ref4, _touch$screenY;
    if (typeof touch.clientY !== "undefined" && typeof touch.pageY !== "undefined") return touch.pageY;
    return (_ref3 = (_ref4 = (_touch$screenY = touch.screenY) !== null && _touch$screenY !== void 0 ? _touch$screenY : touch.pageY) !== null && _ref4 !== void 0 ? _ref4 : touch.clientY) !== null && _ref3 !== void 0 ? _ref3 : 0;
  };
  var start = function start2(event) {
    reset();
    touchTime.current = Date.now();
    startX.current = getX(getTouch(event));
    startY.current = getY(getTouch(event));
  };
  var move = function move2(event) {
    var touch = getTouch(event);
    var clientX = getX(touch);
    var clientY = getY(touch);
    deltaX.current = clientX < 0 ? 0 : clientX - startX.current;
    deltaY.current = clientY - startY.current;
    offsetX.current = Math.abs(deltaX.current);
    offsetY.current = Math.abs(deltaY.current);
    delta.current = isVertical() ? deltaY.current : deltaX.current;
    if (!direction.current) {
      direction.current = getDirection(offsetX.current, offsetY.current);
    }
  };
  var end = function end2(event) {
    last.current = true;
    velocity.current = Math.sqrt(Math.pow(deltaX.current, 2) + Math.pow(deltaY.current, 2)) / (Date.now() - touchTime.current);
  };
  return {
    end: end,
    move: move,
    start: start,
    reset: reset,
    touchTime: touchTime,
    startX: startX,
    startY: startY,
    deltaX: deltaX,
    deltaY: deltaY,
    delta: delta,
    offsetX: offsetX,
    offsetY: offsetY,
    direction: direction,
    isVertical: isVertical,
    isHorizontal: isHorizontal,
    last: last
  };
}

export { useTouch as u };
