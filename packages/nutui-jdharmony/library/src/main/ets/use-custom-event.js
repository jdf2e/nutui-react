import { m as isequal, _ as _objectSpread2 } from './index.taro.js';
import { useEffect, useRef } from '@jd-oh/taro_library/src/main/ets/npm/react';
import { Events, getCurrentInstance } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro';
import { u as useForceUpdate } from './use-force-update.js';
import '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';

var customEvents = new Events();
function useCustomEventsPath(selector) {
  var _getCurrentInstance$r;
  selector = selector || "";
  var path = (_getCurrentInstance$r = getCurrentInstance().router) === null || _getCurrentInstance$r === void 0 ? void 0 : _getCurrentInstance$r.path;
  return path ? "".concat(path, "__").concat(selector) : selector;
}
function useCustomEvent(selector, cb) {
  var path = useCustomEventsPath(selector);
  useEffect(function () {
    customEvents.on(path, cb);
    return function () {
      customEvents.off(path);
    };
  }, []);
  var trigger = function trigger2(args) {
    customEvents.trigger(path, args);
  };
  var off = function off2() {
    customEvents.off(path);
  };
  return [trigger, off];
}
function useParams(args) {
  var forceUpdate = useForceUpdate();
  var stateRef = useRef(args);
  var currentRef = useRef();
  var previousRef = useRef();
  if (!isequal(currentRef.current, args)) {
    previousRef.current = currentRef.current;
    currentRef.current = args;
    stateRef.current = args;
  }
  var setParams = function setParams2(args2) {
    stateRef.current = _objectSpread2(_objectSpread2({}, stateRef.current), args2);
    forceUpdate();
  };
  var params = stateRef.current;
  return {
    params: params,
    setParams: setParams
  };
}

export { useCustomEvent as a, useCustomEventsPath as b, customEvents as c, useParams as u };
