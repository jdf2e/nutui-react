import { b as _slicedToArray } from './index.taro.js';
import React__default from '@jd-oh/taro_library/src/main/ets/npm/react';
import '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime';

function useForceUpdate() {
  var _React$useState = React__default.useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    updateState = _React$useState2[1];
  return React__default.useCallback(function () {
    return updateState({});
  }, []);
}

export { useForceUpdate as u };
