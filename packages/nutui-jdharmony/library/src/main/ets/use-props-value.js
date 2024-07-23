import { useRef, useCallback } from '@jd-oh/taro_library/src/main/ets/npm/react';
import { u as useForceUpdate } from './use-force-update.js';
import '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';

function usePropsValue(_ref) {
  var value = _ref.value,
    defaultValue = _ref.defaultValue,
    finalValue = _ref.finalValue,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function (value2) {} : _ref$onChange;
  var forceUpdate = useForceUpdate();
  var dfValue = defaultValue !== void 0 ? defaultValue : finalValue;
  var stateRef = useRef(value !== void 0 ? value : dfValue);
  if (value !== void 0) {
    stateRef.current = value;
  }
  var setState = useCallback(function (v) {
    var forceTrigger = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var prevState = stateRef.current;
    stateRef.current = v;
    if (prevState !== stateRef.current || forceTrigger) {
      forceUpdate();
      onChange === null || onChange === void 0 || onChange(v);
    }
  }, [value, onChange]);
  return [stateRef.current, setState];
}

export { usePropsValue as u };
