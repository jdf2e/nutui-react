import {
  useAddToFavorites,
  useDidHide,
  useDidShow,
  useError,
  useLaunch,
  useLoad,
  useOptionMenuClick,
  usePageNotFound,
  usePageScroll,
  usePullDownRefresh,
  usePullIntercept,
  useReachBottom,
  useReady,
  useResize,
  useRouter,
  useSaveExitState,
  useShareAppMessage,
  useShareTimeline,
  useTabItemTap,
  useTitleClick,
  useScope,
  useUnhandledRejection,
  useUnload
} from '../plugin-framework-react/dist/runtime'
import _display from '@ohos.display';
import '@ohos.abilityAccessCtrl';
import { Current, window, document, eventSource, hooks, getPageScrollerOrNode, findChildNodeWithDFS, setNodeEventCallbackAndTriggerComponentUpdate, AREA_CHANGE_EVENT_NAME, disconnectEvent, VISIBLE_CHANGE_EVENT_NAME, getCurrentInstance, initHarmonyElement, NodeType } from '../runtime';
export { Current, getCurrentInstance } from '../runtime';
import { eventCenter, Events, History, eventSource as eventSource$1 } from '../runtime/dist/runtime.esm';
export { Events, History, eventCenter } from '../runtime/dist/runtime.esm';
import { isFunction, isString, isArray, isObject, isNull, isNumber, isUndefined, PLATFORM_TYPE } from '../shared';
import geoLocationManager from '@ohos.geoLocationManager';
import fs from '@ohos.file.fs';
import picker from '@ohos.file.picker';
import image from '@ohos.multimedia.image';
import ConfigurationConstant from '@ohos.app.ability.ConfigurationConstant';
import deviceInfo from '@ohos.deviceInfo';
import i18n from '@ohos.i18n';
import errorManager from '@ohos.app.ability.errorManager';
import mediaLibrary from '@ohos.multimedia.mediaLibrary';
import webSocket from '@ohos.net.webSocket';
import sensor from '@ohos.sensor';
import batteryInfo, { BatteryChargeState } from '@ohos.batteryInfo';
import pasteboard from '@ohos.pasteboard';
import promptAction from '@ohos.promptAction';
import inputMethodEngine from '@ohos.inputMethodEngine';
import network from '@system.network';
import call from '@ohos.telephony.call';
import brightness from '@system.brightness';
import vibrator from '@ohos.vibrator';
import document$1 from '@ohos.document';
import fileio from '@ohos.fileio';
import zlib from '@ohos.zlib';
import app from '@system.app';
import file from '@system.file';
import bundleManager from '@ohos.bundle.bundleManager';
import distributedKVStore from '@ohos.data.distributedKVStore';
import matrix4 from '@ohos.matrix4';
import Taro, { pxTransformHelper as pxTransformHelper$1 } from './';
import dataPreferences from '@ohos.data.preferences';
import hiTraceMeter from '@ohos.hiTraceMeter';
import { internalInstanceKey } from '../react';

class MethodHandler {
    constructor({ name, success, fail, complete }) {
        this.isHandlerError = false;
        this.methodName = name;
        this.__success = success;
        this.__fail = fail;
        this.__complete = complete;
        this.isHandlerError = isFunction(this.__complete) || isFunction(this.__fail);
    }
    success(res = {}, promise = {}) {
        if (!res.errMsg) {
            res.errMsg = `${this.methodName}:ok`;
        }
        isFunction(this.__success) && this.__success(res);
        isFunction(this.__complete) && this.__complete(res);
        const { resolve = Promise.resolve.bind(Promise) } = promise;
        return resolve(res);
    }
    fail(res = {}, promise = {}) {
        if (!res.errMsg) {
            res.errMsg = `${this.methodName}:fail`;
        }
        else {
            res.errMsg = `${this.methodName}:fail ${res.errMsg}`;
        }
        isFunction(this.__fail) && this.__fail(res);
        isFunction(this.__complete) && this.__complete(res);
        const { resolve = Promise.resolve.bind(Promise), reject = Promise.reject.bind(Promise) } = promise;
        return this.isHandlerError
            ? resolve(res)
            : reject(res);
    }
}
class CallbackManager {
    constructor() {
        this.callbacks = [];
        /** 添加回调 */
        this.add = (opt) => {
            if (opt)
                this.callbacks.push(opt);
        };
        /** 移除回调 */
        this.remove = (opt) => {
            if (opt) {
                let pos = -1;
                this.callbacks.forEach((callback, k) => {
                    if (callback === opt) {
                        pos = k;
                    }
                });
                if (pos > -1) {
                    this.callbacks.splice(pos, 1);
                }
            }
        };
        /** 获取回调函数数量 */
        this.count = () => {
            return this.callbacks.length;
        };
        /** 触发回调 */
        this.trigger = (...args) => {
            this.callbacks.forEach(opt => {
                if (isFunction(opt)) {
                    opt(...args);
                }
                else {
                    const { callback, ctx } = opt;
                    isFunction(callback) && callback.call(ctx, ...args);
                }
            });
        };
    }
}

function shouldBeObject(target) {
    if (target && typeof target === 'object')
        return { flag: true };
    return {
        flag: false,
        msg: getParameterError({
            correct: 'Object',
            wrong: target
        })
    };
}
function getParameterError({ name = '', para, correct, wrong, level = 'error' }) {
    const parameter = para ? `parameter.${para}` : 'parameter';
    const errorType = upperCaseFirstLetter(wrong === null ? 'Null' : typeof wrong);
    return `${name ? `${name}:fail ` : ''}parameter ${level}: ${parameter} should be ${correct} instead of ${errorType}`;
}
function upperCaseFirstLetter(string) {
    if (!isString(string))
        return string;
    string = string.replace(/^./, match => match.toUpperCase());
    return string;
}
function getType(param) {
    if (isNull(param)) {
        return 'null';
    }
    else if (isArray(param)) {
        return 'array';
    }
    else {
        return typeof param;
    }
}
function assertType(target, type, methodName, paramName) {
    const correct = upperCaseFirstLetter(type);
    if (correct !== upperCaseFirstLetter(getType(target))) {
        const err = getParameterError({ name: methodName, para: paramName, correct, wrong: target });
        throw new Error(err);
    }
}
/**
 * 用于校验方法的参数类型
 * @param name 方法名称
 * @param params [array|object] 当前参数
 * @param schema [array|object] 参数类型规范
 * @example
 * ```js
 * // 例子一：
 * validateParams(methodA, [key], [string])
 * // 例子二：
 * validateParams(methodB, { key: 123 }, { key: number })
 * ```
 * @todo 校验可选参数
 */
const validateParams = function (name, params, schema) {
    if (isArray(schema) && isString(schema[0])) {
        schema.forEach((correctType, index) => assertType(params[index], correctType, name, `[${index}]`));
    }
    else if (isObject(schema)) {
        const optionsSchema = schema;
        assertType(params, 'object', name);
        for (const key in optionsSchema) {
            assertType(params[key], optionsSchema[key], name, key);
        }
    }
};

function object2String(obj) {
    let str = '';
    for (const item in obj) {
        str = str + item + ':' + obj[item] + ' \n';
    }
    return str;
}
function temporarilyNotSupport(name, recommended) {
    return (option = {}, ...args) => {
        const { success, fail, complete } = option;
        const handle = new MethodHandler({ name, success, fail, complete });
        let errMsg = `暂时不支持 API ${name}`;
        if (recommended) {
            errMsg += `, 请使用 ${recommended}`;
        }
        eventCenter.trigger('__taroNotSupport', {
            name,
            args: [option, ...args],
            type: 'method',
            category: 'temporarily',
        });
        if ("production" === 'production') {
            console.warn(errMsg);
            return handle.success({ errMsg });
        }
        else {
            return handle.fail({ errMsg });
        }
    };
}
function permanentlyNotSupport(name = '') {
    return (option = {}, ...args) => {
        const { success, fail, complete } = option;
        const handle = new MethodHandler({ name, success, fail, complete });
        const errMsg = '不支持 API';
        eventCenter.trigger('__taroNotSupport', {
            name,
            args: [option, ...args],
            type: 'method',
            category: 'permanently',
        });
        if ("production" === 'production') {
            console.warn(errMsg);
            return handle.success({ errMsg });
        }
        else {
            return handle.fail({ errMsg });
        }
    };
}
/** @deprecated */
function callCallbackSuccess(res, options) {
    var _a, _b;
    (_a = options === null || options === void 0 ? void 0 : options.success) === null || _a === void 0 ? void 0 : _a.call(options, res);
    (_b = options === null || options === void 0 ? void 0 : options.complete) === null || _b === void 0 ? void 0 : _b.call(options, res);
}
/** @deprecated */
function callCallbackFail(res, options) {
    var _a, _b;
    (_a = options === null || options === void 0 ? void 0 : options.fail) === null || _a === void 0 ? void 0 : _a.call(options, res);
    (_b = options === null || options === void 0 ? void 0 : options.complete) === null || _b === void 0 ? void 0 : _b.call(options, res);
}
/** @deprecated */
function callAsyncSuccess(resolve, res, options) {
    var _a, _b;
    (_a = options === null || options === void 0 ? void 0 : options.success) === null || _a === void 0 ? void 0 : _a.call(options, res);
    (_b = options === null || options === void 0 ? void 0 : options.complete) === null || _b === void 0 ? void 0 : _b.call(options, res);
    resolve(res);
}
/** @deprecated */
function callAsyncFail(reject, res, options) {
    var _a, _b;
    (_a = options === null || options === void 0 ? void 0 : options.fail) === null || _a === void 0 ? void 0 : _a.call(options, res);
    (_b = options === null || options === void 0 ? void 0 : options.complete) === null || _b === void 0 ? void 0 : _b.call(options, res);
    reject(res);
}

const ETS_METHODS_TRIGGER_EVENTNAME = '__taroPluginEtsMethodsTrigger';

const scope$e = 'address';
const type$e = 'method';
// JDAddress 专属方法
const triggerJDAddress = ({ name = '', args = [], complete, fail, success, } = {}) => {
    if (!name) {
        throw new Error('triggerJDAddress 方法必须传入 name 参数');
    }
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args,
            scope: scope$e,
            type: type$e,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};

const scope$d = 'base-info';
const type$d = 'method';
// JDBaseInfo 专属方法
const triggerJDBaseInfo = ({ name = '', args = [], complete, fail, success, } = {}) => {
    if (!name) {
        throw new Error('triggerJDBaseInfo 方法必须传入 name 参数');
    }
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args,
            scope: scope$d,
            type: type$d,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};

const scope$c = 'eventCenter';
const type$c = 'method';
// JDRoute 专属方法
const triggerJDEventCenter = ({ name = '', args = [], complete, fail, success, } = {}) => {
    if (!name) {
        throw new Error('triggerJDRoute 方法必须传入 name 参数');
    }
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args,
            scope: scope$c,
            type: type$c,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};

const scope$b = 'jdMa';
const type$b = 'method';
function sendPvData(params) {
    const name = 'sendPvData';
    triggerEvent(name, params);
}
function sendClickData(params) {
    const name = 'sendClickData';
    triggerEvent(name, params);
}
function sendExposureData(params) {
    const name = 'sendExposureData';
    triggerEvent(name, params);
}
function sendSysData(params) {
    const name = 'sendSysData';
    triggerEvent(name, params);
}
function sendOrderData(params) {
    const name = 'sendOrderData';
    triggerEvent(name, params);
}
function triggerEvent(name, params) {
    eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
        name,
        args: [params],
        scope: scope$b,
        type: type$b,
    });
}
const triggerJDMtaUtil = ({ name = '', args = [], complete, fail, success, } = {}) => {
    if (!name) {
        throw new Error('triggerJDMtaUtil 方法必须传入 name 参数');
    }
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args,
            scope: scope$b,
            type: type$b,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};

const scope$a = 'location';
const type$a = 'method';
function formatLocation(location) {
    const wxLocate = {
        latitude: location.latitude,
        longitude: location.longitude,
        altitude: location.altitude,
        accuracy: location.accuracy,
        speed: location.speed,
        verticalAccuracy: 0, // OHOS 不支持返回此参数，直接设置为默认值
        horizontalAccuracy: 0 // OHOS 不支持返回此参数，直接设置为默认值
    };
    return wxLocate;
}
// TODO：增加参数校验
// const getLocationSchema = {
//   type: 'String',
//   altitude: 'Boolean',
//   ishighAccuracy: 'Boolean',
//   highAccuracyExpireTime: 'number'
// }
const onLocationChange = function (callback) {
    const name = 'onLocationChange';
    const handle = new MethodHandler({ name, complete: callback });
    try {
        validateParams(name, [callback], ['Function']);
        geoLocationManager.on('locationChange', {}, (location) => {
            if (location) {
                const wxLocate = formatLocation(location);
                callback(wxLocate);
            }
        });
    }
    catch (error) {
        handle.fail({
            errMsg: error
        });
    }
};
const offLocationChange = function (callback) {
    const name = 'offLocationChange';
    const handle = new MethodHandler({ name, complete: callback });
    try {
        validateParams(name, [callback], ['Function']);
        geoLocationManager.off('locationChange', (location) => {
            const status = {
                errCode: 200,
                errMsg: location ? 'offLocationChange is off' : 'offLocationChange err'
            };
            if (callback) {
                // @ts-ignore
                callback(status);
            }
        });
    }
    catch (error) {
        handle.fail({
            errMsg: error
        });
    }
};
const getLocation = (options) => {
    const name = 'getLocation';
    const { success, fail, complete } = options || {};
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args: [options],
            scope: scope$a,
            type: type$a,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
// JDLocation 专属方法
const triggerJDLocation = ({ name = '', args = [], complete, fail, success, } = {}) => {
    if (!name) {
        throw new Error('triggerJDLocation 方法必须传入 name 参数');
    }
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args,
            scope: scope$a,
            type: type$a,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
// 位置
const stopLocationUpdate = /* @__PURE__ */ temporarilyNotSupport('stopLocationUpdate');
const startLocationUpdateBackground = /* @__PURE__ */ temporarilyNotSupport('startLocationUpdateBackground');
const startLocationUpdate = /* @__PURE__ */ temporarilyNotSupport('startLocationUpdate');
const openLocation = /* @__PURE__ */ temporarilyNotSupport('openLocation');
const onLocationChangeError = /* @__PURE__ */ temporarilyNotSupport('onLocationChangeError');
const offLocationChangeError = /* @__PURE__ */ temporarilyNotSupport('offLocationChangeError');
const choosePoi = /* @__PURE__ */ temporarilyNotSupport('choosePoi');
const chooseLocation = /* @__PURE__ */ temporarilyNotSupport('chooseLocation');
const getFuzzyLocation = /* @__PURE__ */ temporarilyNotSupport('getFuzzyLocation');

const scope$9 = 'mp';
const type$9 = 'method';
// JDMP 专属方法
const triggerJDMP = ({ name = '', args = [], complete, fail, success, } = {}) => {
    if (!name) {
        throw new Error('triggerJDMP 方法必须传入 name 参数');
    }
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args,
            scope: scope$9,
            type: type$9,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};

const scope$8 = 'permission';
const type$8 = 'method';
// PermissionManager 专属方法
const triggerJDPermission = ({ name = '', args = [], complete, fail, success, } = {}) => {
    if (!name) {
        throw new Error('triggerJDPermission 方法必须传入 name 参数');
    }
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args,
            scope: scope$8,
            type: type$8,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};

const scope$7 = 'report';
const type$7 = 'method';
const onRequestStart = (pageName, functionID) => {
    const name = 'onRequestStart';
    eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
        name,
        scope: scope$7,
        type: type$7,
        args: [pageName, functionID],
    });
};
const onRequestFinish = (pageName, functionID, errCode, errMsg) => {
    const name = 'onRequestFinish';
    eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
        name,
        scope: scope$7,
        type: type$7,
        args: [pageName, functionID, errCode, errMsg],
    });
};
const onPageLoadFinish = (pageName) => {
    const name = 'onPageLoadFinish';
    eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
        name,
        scope: scope$7,
        type: type$7,
        args: [pageName],
    });
};
const reportFirstScreen = () => {
    const name = 'reportFirstScreen';
    eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
        name,
        scope: scope$7,
        type: type$7,
    });
};
const reportAddRecord = (typeName) => {
    const name = 'reportAddRecord';
    eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
        name,
        scope: scope$7,
        type: type$7,
        args: [typeName],
    });
};
const reportCustomData = (bizData, customData) => {
    const name = 'reportCustomData';
    eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
        name,
        scope: scope$7,
        type: type$7,
        args: [bizData, customData],
    });
};
const triggerJDReport = ({ name = '', args = [], complete, fail, success, } = {}) => {
    if (!name) {
        throw new Error('triggerJDReport 方法必须传入 name 参数');
    }
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args,
            scope: scope$7,
            type: type$7,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};

const scope$6 = 'share';
const type$6 = 'method';
// JDShare 专属方法
const triggerJDShare = ({ name = '', args = [], complete, fail, success, } = {}) => {
    if (!name) {
        throw new Error('triggerJDShare 方法必须传入 name 参数');
    }
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args,
            scope: scope$6,
            type: type$6,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
const getShareChannelId = (id) => {
    const name = 'getShareChannelId';
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args: [id],
            scope: scope$6,
            type: type$6,
            successHandler: (res = {}) => {
                // @ts-ignore
                resolve(res === null || res === void 0 ? void 0 : res.data);
            },
            errorHandler: (res = {}) => {
                reject(res);
            }
        });
    });
};
const getShareChannelIdSE = (id) => {
    const name = 'getShareChannelIdSE';
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args: [id],
            scope: scope$6,
            type: type$6,
            successHandler: (res = {}) => {
                // @ts-ignore
                resolve(res === null || res === void 0 ? void 0 : res.data);
            },
            errorHandler: (res = {}) => {
                reject(res);
            }
        });
    });
};

const scope$5 = 'jd-util';
const type$5 = 'method';
const triggerJDWindowUtil = ({ name = '', args = [], complete, fail, success, }) => {
    if (!name) {
        throw new Error('triggerJDWindowUtil 方法必须传入 name 参数');
    }
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name: 'JDWindowUtil',
            methodName: name,
            args,
            scope: scope$5,
            type: type$5,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

// 加密
const getUserCryptoManager = /* @__PURE__ */ temporarilyNotSupport('getUserCryptoManager');

const setEnableDebug = /* @__PURE__ */ temporarilyNotSupport('setEnableDebug');
const getRealtimeLogManager = /* @__PURE__ */ temporarilyNotSupport('getRealtimeLogManager');
const getLogManager = /* @__PURE__ */ temporarilyNotSupport('getLogManager');

// 性能
const reportPerformance = /* @__PURE__ */ temporarilyNotSupport('reportPerformance');
const getPerformance = /* @__PURE__ */ temporarilyNotSupport('getPerformance');
const preloadWebview = /* @__PURE__ */ temporarilyNotSupport('preloadWebview');
const preloadSkylineView = /* @__PURE__ */ temporarilyNotSupport('preloadSkylineView');
const preloadAssets = /* @__PURE__ */ temporarilyNotSupport('preloadAssets');

let display$1;
let navigationIndicatorRect;
let safeArea = null;
let statusBarHeight;
let windowRect;
Current.contextPromise.then((context) => {
    const win = window.__ohos.getLastWindow(context);
    win.then(mainWindow => {
        const topRect = mainWindow.getWindowAvoidArea(window.__ohos.AvoidAreaType.TYPE_SYSTEM).topRect;
        navigationIndicatorRect = mainWindow.getWindowAvoidArea(window.__ohos.AvoidAreaType.TYPE_NAVIGATION_INDICATOR).bottomRect;
        statusBarHeight = topRect.top + topRect.height;
        windowRect = mainWindow.getWindowProperties().windowRect;
        try {
            display$1 = _display.getDefaultDisplaySync();
            setSafeArea({
                top: statusBarHeight,
                left: 0,
                right: display$1.width,
                bottom: navigationIndicatorRect === null || navigationIndicatorRect === void 0 ? void 0 : navigationIndicatorRect.top
            });
            // @ts-ignore
            display$1.getCutoutInfo((err, { boundingRects = [], waterfallDisplayAreaRects = {} } = {}) => {
                var _a, _b, _c, _d, _e, _f;
                if (err === null || err === void 0 ? void 0 : err.code) {
                    console.error('Failed to get cutout info', JSON.stringify(err));
                    return;
                }
                const top = Math.max(...boundingRects.map(rect => rect.top + rect.height), ((_a = waterfallDisplayAreaRects.top) === null || _a === void 0 ? void 0 : _a.top) + ((_b = waterfallDisplayAreaRects.top) === null || _b === void 0 ? void 0 : _b.height), statusBarHeight);
                const bottom = Math.min(display$1.height - ((_c = waterfallDisplayAreaRects.bottom) === null || _c === void 0 ? void 0 : _c.top), navigationIndicatorRect === null || navigationIndicatorRect === void 0 ? void 0 : navigationIndicatorRect.top);
                const left = ((_d = waterfallDisplayAreaRects.left) === null || _d === void 0 ? void 0 : _d.left) + ((_e = waterfallDisplayAreaRects.left) === null || _e === void 0 ? void 0 : _e.width);
                const right = display$1.width - ((_f = waterfallDisplayAreaRects.right) === null || _f === void 0 ? void 0 : _f.left);
                setSafeArea({
                    top,
                    left,
                    right,
                    bottom
                });
            });
        }
        catch (e) {
            console.error('Failed to get display', e);
        }
    });
});
function setSafeArea({ top, left, right, bottom }) {
    safeArea = {
        top,
        bottom,
        left,
        right,
        height: bottom - top,
        width: right - left,
    };
}
/* 同步版本 */
const getSystemInfoSync = function () {
    var _a, _b;
    const res = {};
    res.SDKVersion = deviceInfo && deviceInfo.sdkApiVersion; // 客户端基础库版本 string
    res.albumAuthorized = false; // 允许使用相册的开关（仅 iOS 有效） boolean
    res.benchmarkLevel = null; // 设备性能等级 number
    res.bluetoothEnabled = null; // 蓝牙的系统开关 boolean
    res.brand = deviceInfo && deviceInfo.brand; // 设备品牌 string
    res.cameraAuthorized = null; // 允许使用摄像头的开关 boolean
    res.enableDebug = null; // 是否已打开调试 boolean
    res.fontSizeSetting = null; // 用户字体大小（单位px） number
    res.language = (_a = i18n === null || i18n === void 0 ? void 0 : i18n.getSystemLanguage) === null || _a === void 0 ? void 0 : _a.call(i18n); // string
    res.locationAuthorized = null; // 定位的开关 boolean
    res.locationEnabled = null; // 地理位置的系统开关 boolean
    res.microphoneAuthorized = null; // 麦克风的开关 boolean
    res.model = deviceInfo && deviceInfo.deviceType; // 设备型号 string
    res.notificationAuthorized = null; // 通知的开关 boolean
    res.notificationAlertAuthorized = false; // 通知带有提醒的开关（仅 iOS 有效） boolean
    res.notificationBadgeAuthorized = false; // 通知带有标记的开关（仅 iOS 有效） boolean
    res.notificationSoundAuthorized = false; // 通知带有声音的开关（仅 iOS 有效）boolean
    res.phoneCalendarAuthorized = null; // 使用日历的开关 boolean
    res.wifiEnabled = false; // Wi-Fi 的系统开关 boolean
    res.pixelRatio = display$1 && display$1.densityPixels; // 设备像素比,number
    res.platform = 'harmony'; // 客户端平台 string
    res.safeArea = safeArea; // 在竖屏正方向下的安全区域 General.SafeAreaResult
    res.screenHeight = display$1 === null || display$1 === void 0 ? void 0 : display$1.height; // 屏幕高度，单位px number
    res.screenWidth = display$1 === null || display$1 === void 0 ? void 0 : display$1.width; // 屏幕宽度，单位px number
    res.statusBarHeight = statusBarHeight; // 状态栏的高度，单位px number
    res.system = deviceInfo === null || deviceInfo === void 0 ? void 0 : deviceInfo.osFullName; // 操作系统及版本 string
    // Note: 更新配置时才能记录
    res.theme = ((_b = AppStorage.get('__TARO_APP_CONFIG')) === null || _b === void 0 ? void 0 : _b.colorMode) === ConfigurationConstant.ColorMode.COLOR_MODE_DARK ? 'dark' : 'light'; // 系统当前主题，取值为light或dark 'light' | 'dark'
    res.windowHeight = windowRect === null || windowRect === void 0 ? void 0 : windowRect.height; // 可使用窗口高度，单位px number
    res.windowWidth = windowRect === null || windowRect === void 0 ? void 0 : windowRect.width; // 可使用窗口宽度，单位px number
    res.version = deviceInfo === null || deviceInfo === void 0 ? void 0 : deviceInfo.displayVersion; // 版本号 string
    return res;
};
/* 异步版本 */
const getSystemInfo = function (options) {
    let res = {};
    return new Promise((resolve, reject) => {
        try {
            res = getSystemInfoSync();
            callAsyncSuccess(resolve, res, options);
        }
        catch (error) {
            res = {
                errMsg: `getSystemInfo:fail ${error && error.toString && error.toString()}`,
                error: error
            };
            callAsyncFail(reject, res, options);
        }
    });
};
globalThis.getSystemInfoSync = getSystemInfoSync;

// 更新
const updateWeChatApp = /* @__PURE__ */ temporarilyNotSupport('updateWeChatApp');
const getUpdateManager = /* @__PURE__ */ temporarilyNotSupport('getUpdateManager');

const unhandledRejectionCallbackManager = new CallbackManager();
const errorCallbackManager = new CallbackManager();
const unhandledRejectionListener = (res) => {
    unhandledRejectionCallbackManager.trigger(res);
};
const errorListener = (res) => {
    // @ts-ignore
    errorCallbackManager.trigger(res.stack || res.message || res);
};
// 应用级事件
const onUnhandledRejection = callback => {
    unhandledRejectionCallbackManager.add(callback);
    if (unhandledRejectionCallbackManager.count() === 1) {
        errorManager.on('error', {
            unhandledRejectionListener
        });
    }
};
const onThemeChange = /* @__PURE__ */ temporarilyNotSupport('onThemeChange');
const onPageNotFound = /* @__PURE__ */ temporarilyNotSupport('onPageNotFound');
const onLazyLoadError = /* @__PURE__ */ temporarilyNotSupport('onLazyLoadError');
const onError = callback => {
    errorCallbackManager.add(callback);
    if (errorCallbackManager.count() === 1) {
        errorManager.on('error', {
            onException: errorListener
        });
    }
};
const onAudioInterruptionEnd = /* @__PURE__ */ temporarilyNotSupport('onAudioInterruptionEnd');
const onAudioInterruptionBegin = /* @__PURE__ */ temporarilyNotSupport('onAudioInterruptionBegin');
const onAppShow = /* @__PURE__ */ temporarilyNotSupport('onAppShow');
const onAppHide = /* @__PURE__ */ temporarilyNotSupport('onAppHide');
const offUnhandledRejection = callback => {
    unhandledRejectionCallbackManager.remove(callback);
    if (unhandledRejectionCallbackManager.count() === 0) {
        errorManager.off('error', {
            unhandledRejectionListener
        });
    }
};
const offThemeChange = /* @__PURE__ */ temporarilyNotSupport('offThemeChange');
const offPageNotFound = /* @__PURE__ */ temporarilyNotSupport('offPageNotFound');
const offLazyLoadError = /* @__PURE__ */ temporarilyNotSupport('offLazyLoadError');
const offError = callback => {
    errorCallbackManager.remove(callback);
    if (errorCallbackManager.count() === 0) {
        errorManager.off('error', {
            onException: errorListener
        });
    }
};
const offAudioInterruptionEnd = /* @__PURE__ */ temporarilyNotSupport('offAudioInterruptionEnd');
const offAudioInterruptionBegin = /* @__PURE__ */ temporarilyNotSupport('offAudioInterruptionBegin');
const offAppShow = /* @__PURE__ */ temporarilyNotSupport('offAppShow');
const offAppHide = /* @__PURE__ */ temporarilyNotSupport('offAppHide');

const launchOptions = {
    path: '',
    query: {},
    scene: 0,
    shareTicket: '',
    referrerInfo: {}
};
function initLaunchOptions(options = {}) {
    Object.assign(launchOptions, options);
}
eventCenter.once('__taroRouterLaunch', initLaunchOptions);
// 生命周期
const getLaunchOptionsSync = () => launchOptions;
const getEnterOptionsSync = () => launchOptions;

const canIUse = /* @__PURE__ */ temporarilyNotSupport('canIUse');
const arrayBufferToBase64 = /* @__PURE__ */ temporarilyNotSupport('arrayBufferToBase64');
const base64ToArrayBuffer = /* @__PURE__ */ temporarilyNotSupport('base64ToArrayBuffer');

// HarmonyOS 图片模块首批接口从API version 7开始支持。
// HarmonyOS 文档链接：https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-image-0000001122977382
// WX 文档链接：https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html
const getImageInfoSchema = {
    src: 'String'
};
const compressImageSchema = {
    src: 'String'
};
const chooseImageSchema = {
    count: 'Number'
};
const photoSelectOptions = new picker.PhotoSelectOptions();
const getImageInfo = function (options) {
    return new Promise((resolve, reject) => {
        try {
            validateParams('getImageInfo', options, getImageInfoSchema);
        }
        catch (error) {
            const res = { errMsg: error.message };
            return callAsyncFail(reject, res, options);
        }
        const { src } = options;
        // FIX: 调试发现在版本api7中 source 为 undefined, 需鸿蒙侧确认
        const source = image.createImageSource(src);
        if (isNull(source)) {
            const createImageSourceError = { errMsg: 'getImageInfo fail: createImageSource has failed.' };
            callAsyncFail(reject, createImageSourceError, options);
            return;
        }
        source.getImageInfo().then((value) => {
            callAsyncSuccess(resolve, value, options);
        }).catch((error) => {
            callAsyncFail(reject, error, options);
        });
    });
};
class CompressedImageInfo {
    constructor() {
        this.imageUri = ''; // 压缩后图片保存位置的uri
        this.imageByteLength = 0; // 压缩后图片字节长度
    }
}
function saveImage(compressedImageData, compressedImageUri) {
    return __awaiter(this, void 0, void 0, function* () {
        const tempArr = compressedImageUri.split('/');
        const name = tempArr[tempArr.length - 1];
        const context = getContext(Current === null || Current === void 0 ? void 0 : Current.page);
        const applicationContext = context.getApplicationContext();
        const tempDir = applicationContext.tempDir;
        const filePath = `${tempDir}/${name}`;
        try {
            const res = fs.accessSync(filePath);
            if (res) {
                // 如果图片afterCompressiona.jpeg已存在，则删除
                fs.unlinkSync(filePath);
            }
        }
        catch (err) {
            console.error(`[Taro] saveImage Error: AccessSync failed with error message: ${err.message}, error code: ${err.code}`);
        }
        // 知识点：保存图片。获取最终图片压缩数据compressedImageData，保存图片。
        // 压缩图片数据写入文件
        const file = fs.openSync(filePath, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);
        fs.writeSync(file.fd, compressedImageData);
        fs.closeSync(file);
        // 获取压缩图片信息
        const compressedImageInfo = new CompressedImageInfo();
        compressedImageInfo.imageUri = filePath;
        compressedImageInfo.imageByteLength = compressedImageData.byteLength;
        return compressedImageInfo;
    });
}
const compressImage = function (options) {
    return new Promise((resolve, reject) => {
        try {
            validateParams('compressImage', options, compressImageSchema);
        }
        catch (error) {
            const res = { errMsg: error.message };
            return callAsyncFail(reject, res, options);
        }
        const { src, quality = 80, compressedWidth, compressedHeight } = options;
        const srcAfterCompress = src.includes('_after_compress') ? src : src.split('.').join('_after_compress.');
        const file = fs.openSync(src, fs.OpenMode.READ_ONLY);
        // const stat = fs.statSync(file.fd)
        // console.log('[Taro] 压缩前图片的大小为：', stat.size)
        const source = image.createImageSource(file.fd);
        if (isNull(source)) {
            const createImageSourceError = { errMsg: 'compressImage fail: createImageSource has failed.' };
            callAsyncFail(reject, createImageSourceError, options);
            return;
        }
        const width = source.getImageInfoSync().size.width;
        const height = source.getImageInfoSync().size.height;
        let wantWidth = compressedWidth || compressedHeight || 0;
        let wantHeight = compressedHeight || compressedWidth || 0;
        if (width > wantWidth || height > wantHeight) {
            const heightRatio = height / wantHeight;
            const widthRatio = width / wantWidth;
            const finalRatio = heightRatio < widthRatio ? heightRatio : widthRatio;
            wantWidth = Math.round(width / finalRatio);
            wantHeight = Math.round(height / finalRatio);
        }
        const decodingOptions = {
            editable: true,
            desiredPixelFormat: image.PixelMapFormat.RGBA_8888,
            desiredSize: { width: wantWidth, height: wantHeight }
        };
        source.createPixelMap(decodingOptions, (error, pixelMap) => {
            if (error !== undefined) {
                fs.closeSync(file);
                const res = { errMsg: error };
                callAsyncFail(reject, res, options);
            }
            else {
                const packer = image.createImagePacker(file.fd);
                if (isNull(packer)) {
                    fs.closeSync(file);
                    const createImagePackerError = { errMsg: 'compressImage fail: createImagePacker has failed.' };
                    callAsyncFail(reject, createImagePackerError, options);
                    return;
                }
                const isPNG = src.endsWith('.png');
                const packingOptionsOHOS = {
                    format: isPNG ? 'image/png' : 'image/jpeg',
                    quality: quality
                };
                packer.packing(pixelMap, packingOptionsOHOS).then((value) => {
                    fs.closeSync(file);
                    saveImage(value, srcAfterCompress).then(result => {
                        callAsyncSuccess(resolve, { tempFilePath: result.imageUri }, options);
                    });
                }).catch((error) => {
                    fs.closeSync(file);
                    callAsyncFail(reject, error, options);
                });
            }
        });
    });
};
const chooseImage = function (options) {
    return new Promise((resolve, reject) => {
        try {
            validateParams('chooseImage', options, chooseImageSchema);
        }
        catch (error) {
            const res = { errMsg: error.message };
            return callAsyncFail(reject, res, options);
        }
        const { count = 9 } = options;
        const photoViewPicker = new picker.PhotoViewPicker();
        let sizeType = options.sizeType;
        if (!sizeType || !sizeType.length) {
            sizeType = ['compressed', 'original'];
        }
        photoSelectOptions.maxSelectNumber = count; // 选择媒体文件的最大数目
        photoSelectOptions.MIMEType = picker.PhotoViewMIMETypes.IMAGE_TYPE; // 过滤选择媒体文件类型为IMAGE
        photoViewPicker.select(photoSelectOptions).then((photoSelectResult) => {
            const result = {};
            const isOrigin = photoSelectResult.isOriginalPhoto;
            if (isOrigin) {
                const tempFilePaths = [];
                const tempFiles = photoSelectResult.photoUris.map(uri => {
                    const file = fs.openSync(uri, fs.OpenMode.READ_ONLY);
                    const stat = fs.statSync(file.fd);
                    const size = stat.size;
                    fs.closeSync(file);
                    tempFilePaths.push(uri);
                    return {
                        size,
                        path: uri,
                    };
                });
                result.tempFiles = tempFiles;
                result.tempFilePaths = tempFilePaths;
                callAsyncSuccess(resolve, result, options);
            }
            else {
                const actions = photoSelectResult.photoUris.map(uri => {
                    return new Promise(resolve => {
                        compressImage({
                            src: uri,
                            compressedWidth: getSystemInfoSync().screenWidth / 2,
                            compressedHeight: getSystemInfoSync().screenHeight / 2,
                            success: (compressResult) => {
                                resolve(compressResult.tempFilePath);
                            }
                        });
                    });
                });
                Promise.all(actions).then(tempFilePaths => {
                    const tempFiles = tempFilePaths.map(uri => {
                        const file = fs.openSync(uri, fs.OpenMode.READ_ONLY);
                        const stat = fs.statSync(file.fd);
                        const size = stat.size;
                        fs.closeSync(file);
                        return {
                            size,
                            path: uri,
                        };
                    });
                    result.tempFilePaths = tempFilePaths;
                    result.tempFiles = tempFiles;
                    callAsyncSuccess(resolve, result, options);
                }).catch(error => {
                    const res = { errMsg: error };
                    return callAsyncFail(reject, res, options);
                });
            }
        }).catch((error) => {
            callAsyncFail(reject, error, options);
        });
    });
};
const saveImageToPhotosAlbum = temporarilyNotSupport('saveImageToPhotosAlbum');

const scope$4 = 'media';
const type$4 = 'method';
const previewImage = function (options) {
    const name = 'previewImage';
    const { success, fail, complete } = options;
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args: [options],
            scope: scope$4,
            type: type$4,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};

// 音频
const stopVoice = /* @__PURE__ */ temporarilyNotSupport('stopVoice');
const setInnerAudioOption = /* @__PURE__ */ temporarilyNotSupport('setInnerAudioOption');
const playVoice = /* @__PURE__ */ temporarilyNotSupport('playVoice');
const pauseVoice = /* @__PURE__ */ temporarilyNotSupport('pauseVoice');
const getAvailableAudioSources = /* @__PURE__ */ temporarilyNotSupport('getAvailableAudioSources');
const createWebAudioContext = /* @__PURE__ */ temporarilyNotSupport('createWebAudioContext');
const createMediaAudioPlayer = /* @__PURE__ */ temporarilyNotSupport('createMediaAudioPlayer');
/**
 * 创建内部 audio 上下文 InnerAudioContext 对象。
 */
const createInnerAudioContext = /* @__PURE__ */ temporarilyNotSupport('createInnerAudioContext');
const createAudioContext = /* @__PURE__ */ temporarilyNotSupport('createAudioContext');

// 背景音频
const stopBackgroundAudio = /* @__PURE__ */ temporarilyNotSupport('stopBackgroundAudio');
const seekBackgroundAudio = /* @__PURE__ */ temporarilyNotSupport('seekBackgroundAudio');
const playBackgroundAudio = /* @__PURE__ */ temporarilyNotSupport('playBackgroundAudio');
const pauseBackgroundAudio = /* @__PURE__ */ temporarilyNotSupport('pauseBackgroundAudio');
const onBackgroundAudioStop = /* @__PURE__ */ temporarilyNotSupport('onBackgroundAudioStop');
const onBackgroundAudioPlay = /* @__PURE__ */ temporarilyNotSupport('onBackgroundAudioPlay');
const onBackgroundAudioPause = /* @__PURE__ */ temporarilyNotSupport('onBackgroundAudioPause');
const getBackgroundAudioPlayerState = /* @__PURE__ */ temporarilyNotSupport('getBackgroundAudioPlayerState');
/**
 * 获取全局唯一的背景音频管理器
 */
const getBackgroundAudioManager = /* @__PURE__ */ temporarilyNotSupport('getBackgroundAudioManager');

// 相机
class CameraContext {
    constructor() {
        this.onCameraFrame = temporarilyNotSupport('CameraContext.onCameraFrame');
        this.setZoom = temporarilyNotSupport('CameraContext.setZoom');
        this.startRecord = temporarilyNotSupport('CameraContext.startRecord');
        this.stopRecord = temporarilyNotSupport('CameraContext.stopRecord');
        this.takePhoto = temporarilyNotSupport('CameraContext.takePhoto');
    }
}
const createCameraContext = (_) => {
    return new CameraContext();
};

// HarmonyOS 文档链接：https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-media-0000001103383404
// WX 文档链接：https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewMedia.html
// ✅ wx.previewMedia(Object object)
// ✅ wx.chooseMedia
const previewMediaSchema = {
    sources: 'Array'
};
// TODO: 扩展支持预览video
const previewMedia = function (options) {
    return new Promise((resolve, reject) => {
        try {
            validateParams('previewMedia', options, previewMediaSchema);
        }
        catch (error) {
            const res = { errMsg: error.message };
            return callAsyncFail(reject, res, options);
        }
        const { sources, current } = options;
        const urls = [];
        for (const s of sources) {
            if (s.type === 'image') {
                urls.push(s.url);
            }
        }
        const previewImageOptions = {
            images: urls,
            index: current || 0
        };
        mediaLibrary.getMediaLibrary().startImagePreview(previewImageOptions.images, previewImageOptions.index).then((value) => {
            callAsyncSuccess(resolve, value, options);
        }).catch((error) => {
            callAsyncFail(reject, error, options);
        });
    });
};
const chooseMedia = function (options) {
    return new Promise((resolve, reject) => {
        try {
            validateParams('chooseMedia', [options], ['Object']);
        }
        catch (error) {
            const res = { errMsg: error.message };
            return callAsyncFail(reject, res, options);
        }
        const { count = 9, mediaType = ['image'] } = options;
        // HarmonyOS不支持image和video同时选择
        // TODO: 不支持视频拍摄，无现成组件，后续需要封装
        const mediaSelectOptions = {
            count,
            type: mediaType[0]
        };
        mediaLibrary.getMediaLibrary().startMediaSelect(mediaSelectOptions).then((value) => {
            callAsyncSuccess(resolve, value, options);
        }).catch((error) => {
            callAsyncFail(reject, error, options);
        });
    });
};

// 实时音视频
const createLivePusherContext = /* @__PURE__ */ temporarilyNotSupport('createLivePusherContext');
const createLivePlayerContext = /* @__PURE__ */ temporarilyNotSupport('createLivePlayerContext');

// 地图
const createMapContext = /* @__PURE__ */ temporarilyNotSupport('createMapContext');

// 画面录制器
const createMediaRecorder = /* @__PURE__ */ temporarilyNotSupport('createMediaRecorder');

// 录音
const stopRecord = /* @__PURE__ */ temporarilyNotSupport('stopRecord');
const startRecord = /* @__PURE__ */ temporarilyNotSupport('startRecord');
const getRecorderManager = /* @__PURE__ */ temporarilyNotSupport('getRecorderManager');

// @ts-nocheck
class VideoContext {
    constructor(id) {
        this.requestBackgroundPlayback = temporarilyNotSupport('VideoContext.requestBackgroundPlayback');
        this.exitBackgroundPlayback = temporarilyNotSupport('VideoContext.exitBackgroundPlayback');
        this.exitPictureInPicture = temporarilyNotSupport('VideoContext.exitPictureInPicture');
        this.hideStatusBar = temporarilyNotSupport('VideoContext.hideStatusBar');
        this.playbackRate = temporarilyNotSupport('VideoContext.playbackRate');
        this.sendDanmu = temporarilyNotSupport('VideoContext.sendDanmu');
        this.showStatusBar = temporarilyNotSupport('VideoContext.showStatusBar');
        this.id = id;
        this.video = document.getElementById(id);
        if (this.video) {
            this.controller = this.video.controller;
        }
    }
    play() {
        if (!this.controller)
            return;
        this.controller.play();
    }
    pause() {
        if (!this.controller)
            return;
        this.controller.pause();
    }
    stop() {
        if (!this.controller)
            return;
        this.controller.stop();
    }
    seek(position) {
        if (!this.controller)
            return;
        this.controller.setCurrentTime(position);
    }
    requestFullScreen() {
        if (!this.controller)
            return;
        this.controller.requestFullscreen(true);
    }
    exitFullScreen() {
        if (!this.controller)
            return;
        this.controller.exitFullscreen();
    }
}

// HarmonyOS 文档链接：https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-media-0000001103383404
// WX 文档链接：https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html
// ✅ wx.saveVideoToPhotosAlbum
// ❌ wx.openVideoEditor
// ❌ wx.getVideoInfo
// ❌ wx.createVideoContext
// ❌ wx.compressVideo
// ✅ wx.chooseVideo
// VideoContext
//   ❌ VideoContext.exitBackgroundPlayback
//   ❌ VideoContext.exitFullScreen
//   ❌ VideoContext.exitPictureInPicture
//   ❌ VideoContext.hideStatusBar
//   ❌ VideoContext.pause
//   ❌ VideoContext.play
//   ❌ VideoContext.playbackRate
//   ❌ VideoContext.requestBackgroundPlayback
//   ❌ VideoContext.requestFullScreen
//   ❌ VideoContext.seek
//   ❌ VideoContext.sendDanmu
//   ❌ VideoContext.showStatusBar
//   ❌ VideoContext.stop
const saveVideoToPhotosAlbumSchema = {
    filePath: 'String'
};
const createVideoContext = (id, _) => {
    return new VideoContext(id);
};
// TODO: 1.返回属性补全
// TODO: 2.只支持从相册选择，补充摄像头拍摄功能，需要HarmonyOS提供选择组件
const chooseVideo = function (options = {}) {
    return new Promise((resolve, reject) => {
        try {
            validateParams('chooseVideo', [options], ['Object']);
        }
        catch (error) {
            const res = { errMsg: error.message };
            return callAsyncFail(reject, res, options);
        }
        const chooseVideoOptionsOHOS = {
            type: 'video',
            count: 1
        };
        mediaLibrary.getMediaLibrary().startMediaSelect(chooseVideoOptionsOHOS).then((value) => {
            callAsyncSuccess(resolve, { tempFilePaths: value });
        }).catch((error) => {
            callAsyncFail(reject, error, options);
        });
    });
};
const compressVideo = /* @__PURE__ */ temporarilyNotSupport('compressVideo');
const getVideoInfo = /* @__PURE__ */ temporarilyNotSupport('getVideoInfo');
const openVideoEditor = /* @__PURE__ */ temporarilyNotSupport('openVideoEditor');
const saveVideoToPhotosAlbum = function (options) {
    return new Promise((resolve, reject) => {
        try {
            validateParams('saveVideoToPhotosAlbum', options, saveVideoToPhotosAlbumSchema);
        }
        catch (error) {
            const res = { errMsg: error.message };
            return callAsyncFail(reject, res, options);
        }
        const { filePath } = options;
        const saveVideoToPhotosAlbumOptions = {
            src: filePath,
            // TODO：需要获取文件名后缀，'video/mp4'、'video/3gpp'等
            mimeType: 'video/mp4'
        };
        mediaLibrary.getMediaLibrary().storeMediaAsset(saveVideoToPhotosAlbumOptions).then((value) => {
            callAsyncSuccess(resolve, value, options);
        }).catch((error) => {
            callAsyncFail(reject, error, options);
        });
    });
};

// 视频解码器
const createVideoDecoder = /* @__PURE__ */ temporarilyNotSupport('createVideoDecoder');

// 音视频合成
const createMediaContainer = /* @__PURE__ */ temporarilyNotSupport('createMediaContainer');

// 实时语音
const updateVoIPChatMuteConfig = /* @__PURE__ */ temporarilyNotSupport('updateVoIPChatMuteConfig');
const subscribeVoIPVideoMembers = /* @__PURE__ */ temporarilyNotSupport('subscribeVoIPVideoMembers');
const setEnable1v1Chat = /* @__PURE__ */ temporarilyNotSupport('setEnable1v1Chat');
const onVoIPVideoMembersChanged = /* @__PURE__ */ temporarilyNotSupport('onVoIPVideoMembersChanged');
const onVoIPChatStateChanged = /* @__PURE__ */ temporarilyNotSupport('onVoIPChatStateChanged');
const onVoIPChatSpeakersChanged = /* @__PURE__ */ temporarilyNotSupport('onVoIPChatSpeakersChanged');
const onVoIPChatMembersChanged = /* @__PURE__ */ temporarilyNotSupport('onVoIPChatMembersChanged');
const onVoIPChatInterrupted = /* @__PURE__ */ temporarilyNotSupport('onVoIPChatInterrupted');
const offVoIPChatSpeakersChanged = /* @__PURE__ */ temporarilyNotSupport('offVoIPChatSpeakersChanged');
const offVoIPVideoMembersChanged = /* @__PURE__ */ temporarilyNotSupport('offVoIPVideoMembersChanged');
const offVoIPChatStateChanged = /* @__PURE__ */ temporarilyNotSupport('offVoIPChatStateChanged');
const offVoIPChatMembersChanged = /* @__PURE__ */ temporarilyNotSupport('offVoIPChatMembersChanged');
const offVoIPChatInterrupted = /* @__PURE__ */ temporarilyNotSupport('offVoIPChatInterrupted');
const joinVoIPChat = /* @__PURE__ */ temporarilyNotSupport('joinVoIPChat');
const join1v1Chat = /* @__PURE__ */ temporarilyNotSupport('join1v1Chat');
const exitVoIPChat = /* @__PURE__ */ temporarilyNotSupport('exitVoIPChat');

const downloadFileSchema = {
    url: 'String'
};
const downloadFile = function (options) {
    let task;
    let isComplete = false;
    let progressHandles = [];
    const requestTask = new Promise((resolve, reject) => {
        const { url, header, filePath, success, fail, complete } = options;
        const handle = new MethodHandler({ name: 'downloadFile', success, fail, complete });
        try {
            validateParams('downloadFile', options, downloadFileSchema);
        }
        catch (error) {
            const res = { errMsg: error.message };
            return handle.fail(res, { resolve, reject });
        }
        const params = {
            url,
            header,
            filePath,
            // @ts-ignore
            context: getContext(this),
            success: (requestData) => {
                const reswx = {
                    data: requestData
                };
                handle.success(reswx, { resolve, reject });
            },
            fail: (data) => {
                handle.fail(data, { resolve, reject });
            },
            complete: () => {
                isComplete = true;
            },
            progress: (loaded, total) => {
                const progress = loaded / total;
                progressHandles.forEach(fn => fn({ progress }));
            }
        };
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name: 'downloadFile',
            args: [params],
            scope: 'network',
            type: 'method',
            onInit: (obj) => {
                task = obj;
            }
        });
    });
    requestTask.abort = function () {
        var _a;
        (_a = task === null || task === void 0 ? void 0 : task.delete) === null || _a === void 0 ? void 0 : _a.call(task);
    };
    requestTask.onProgressUpdate = (fn) => {
        if (isComplete) {
            fn({ progress: 1 });
        }
        else {
            progressHandles.push(fn);
        }
    };
    requestTask.offProgressUpdate = (fn) => {
        progressHandles = progressHandles.filter(handle => handle !== fn);
    };
    return requestTask;
};

const METHOD = ['OPTIONS', 'GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'TRACE', 'CONNECT'];
const scope$3 = 'network';
const type$3 = 'method';
const requestSchema = {
    url: 'String',
};
const request = (options) => {
    let task;
    const requestTask = new Promise((resolve, reject) => {
        let { method = 'GET' } = options;
        const { url, header = {}, timeout = 60000, dataType = 'json', data, enableHttpDNS = false, success, fail, complete, } = options;
        const handle = new MethodHandler({ name: 'request', success, fail, complete });
        // ** 校验入参 **
        // -> 0.基建侧建议在 GET 请求时，不要设置 Content-Type，否则可能会导致请求失败
        const isGetRequest = method.toUpperCase() === 'GET';
        if (!isGetRequest) {
            // -> 1.没有 content-type 的加上默认 application/json
            const keyOfContentType = Object.keys(header).find((item) => item.toLowerCase() === 'content-type');
            !keyOfContentType && (header['Content-Type'] = 'application/json');
        }
        // -> 2. 检查 method 是否正确
        if (METHOD.includes(method.toUpperCase())) {
            method = method.toUpperCase();
        }
        else {
            const error = {
                errMsg: `request fail parameter error: the method value should be one of the ${METHOD.join(',')}`,
            };
            handle.fail(error, { resolve, reject });
        }
        // -> 3. 校验send的数据类型
        try {
            validateParams('send', options, requestSchema);
        }
        catch (error) {
            const res = { errMsg: error.message };
            handle.fail(res, { resolve, reject });
        }
        // ** 校验入参 **
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name: 'request',
            args: [
                Object.assign(Object.assign({}, options), { url, method: method.toUpperCase(), header,
                    timeout,
                    dataType, data: data, enableSuccessResponse: true, enableHttpDNS, success: (requestData) => {
                        const reswx = {
                            data: requestData.data,
                            statusCode: requestData.status,
                            headers: requestData.headers,
                        };
                        handle.success(reswx, { resolve, reject });
                    }, fail: (data) => {
                        handle.fail(data, { resolve, reject });
                    } }),
            ],
            scope: scope$3,
            type: type$3,
            onInit: (obj) => {
                task = obj;
            },
        });
    });
    requestTask.abort = function () {
        var _a;
        (_a = task === null || task === void 0 ? void 0 : task.doCancel) === null || _a === void 0 ? void 0 : _a.call(task);
    };
    return requestTask;
};
// JDNetWork 专属方法
const triggerJDNetWork = ({ name = '', args = [], complete, fail, success, } = {}) => {
    if (!name) {
        throw new Error('triggerJDNetWork 方法必须传入 name 参数');
    }
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args,
            scope: scope$3,
            type: type$3,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};

const uploadSchema = {
    url: 'String',
    // filePath: 'String',
    // name: 'String'
};
const uploadFile = function (options) {
    let task;
    let isComplete = false;
    let progressHandles = [];
    const requestTask = new Promise((resolve, reject) => {
        // let timer
        const { url, filePath, name, formData, header = {}, success, fail, complete } = options;
        const handle = new MethodHandler({ name: 'uploadFile', success, fail, complete });
        // -> 1.校验url格式
        try {
            validateParams('uploadFile', options, uploadSchema);
        }
        catch (error) {
            const res = { errMsg: error.message };
            return handle.fail(res, { resolve, reject });
        }
        const file = {
            url: filePath,
            name
        };
        const files = [file];
        const param = {
            url,
            files,
            method: 'POST',
            // @ts-ignore
            context: getContext(this),
            header,
            success: (requestData) => {
                const reswx = {
                    data: requestData
                };
                handle.success(reswx, { resolve, reject });
            },
            fail: (data) => {
                handle.fail(data, { resolve, reject });
            },
            complete: () => {
                isComplete = true;
            },
            progress: (loaded, total) => {
                const progress = loaded / total;
                progressHandles.forEach(fn => fn({ progress }));
            }
        };
        if (formData) {
            const rData = [];
            Object.keys(formData).forEach((key) => {
                const rDataEle = {
                    name: key,
                    value: formData[key],
                };
                rData.push(rDataEle);
            });
            param.data = rData;
        }
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name: 'uploadFile',
            args: [param],
            scope: 'network',
            type: 'method',
            onInit: (obj) => {
                task = obj;
            }
        });
    });
    requestTask.abort = function () {
        var _a;
        (_a = task === null || task === void 0 ? void 0 : task.delete) === null || _a === void 0 ? void 0 : _a.call(task);
    };
    requestTask.onProgressUpdate = (fn) => {
        if (isComplete) {
            fn({ progress: 1 });
        }
        else {
            progressHandles.push(fn);
        }
    };
    requestTask.offProgressUpdate = (fn) => {
        progressHandles = progressHandles.filter(handle => handle !== fn);
    };
    return requestTask;
};

// mDNS
const stopLocalServiceDiscovery = /* @__PURE__ */ temporarilyNotSupport('stopLocalServiceDiscovery');
const startLocalServiceDiscovery = /* @__PURE__ */ temporarilyNotSupport('startLocalServiceDiscovery');
const onLocalServiceResolveFail = /* @__PURE__ */ temporarilyNotSupport('onLocalServiceResolveFail');
const onLocalServiceLost = /* @__PURE__ */ temporarilyNotSupport('onLocalServiceLost');
const onLocalServiceFound = /* @__PURE__ */ temporarilyNotSupport('onLocalServiceFound');
const onLocalServiceDiscoveryStop = /* @__PURE__ */ temporarilyNotSupport('onLocalServiceDiscoveryStop');
const offLocalServiceResolveFail = /* @__PURE__ */ temporarilyNotSupport('offLocalServiceResolveFail');
const offLocalServiceLost = /* @__PURE__ */ temporarilyNotSupport('offLocalServiceLost');
const offLocalServiceFound = /* @__PURE__ */ temporarilyNotSupport('offLocalServiceFound');
const offLocalServiceDiscoveryStop = /* @__PURE__ */ temporarilyNotSupport('offLocalServiceDiscoveryStop');

// TCP 通信
const createTCPSocket = /* @__PURE__ */ temporarilyNotSupport('createTCPSocket');

// UDP 通信
const createUDPSocket = /* @__PURE__ */ temporarilyNotSupport('createUDPSocket');

// OpenHarmony 不支持全局操作 WebSocket
// HarmonyOS 文档链接：https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-net-websocket-0000001168304641
// WX 文档链接：https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.sendSocketMessage.html
// ✅ wx.connectSocket
// ✅ SocketTask
// ✅ SocketTask.close
// ✅ SocketTask.onClose
// ✅ SocketTask.onError
// ✅ SocketTask.onMessage
// ✅ SocketTask.onOpen
// ✅ SocketTask.send
// ❌ wx.sendSocketMessage
// ❌ wx.onSocketOpen
// ❌ wx.onSocketMessage
// ❌ wx.onSocketError
// ❌ wx.onSocketClose
// ❌ wx.closeSocket
const connectSocketSchema = {
    url: 'String'
};
// const closetSocketSchema = {
//   code: 'Number',
//   reason: 'String'
// }
const sendSocketSchema = {
    data: 'String'
};
const connectSocket = function (options) {
    let ws;
    const SocketTaskWX = new Promise((resolve, reject) => {
        ws = webSocket.createWebSocket();
        const { url, header } = options;
        try {
            validateParams('uploadFile', options, connectSocketSchema);
        }
        catch (error) {
            const res = { errMsg: error.message };
            return callAsyncFail(reject, res, options);
        }
        ws.connect(url, { header }).then((value) => {
            callAsyncSuccess(resolve, value, options);
        }).catch((err) => {
            callAsyncFail(reject, err, options);
        });
    });
    SocketTaskWX.close = function (closeOptions) {
        return new Promise((resolve, reject) => {
            // TODO: 检验非必须参数
            // try {
            //   validateParams('close', options, closeSocketSchema)
            // } catch (error) {
            //   const res = { errMsg: error.message }
            //   return callAsyncFail(reject, res, options)
            // }
            ws.close(closeOptions).then(value => {
                callAsyncSuccess(resolve, value, closeOptions);
            }, error => {
                callAsyncFail(reject, error, closeOptions);
            });
        });
    };
    SocketTaskWX.onClose = function (onCloseCallback) {
        validateParams('onClose', [onCloseCallback], ['Function']);
        ws.on('close', (err, value) => {
            onCloseCallback(!err ? value : err);
        });
    };
    SocketTaskWX.onError = function (onErrorCallback) {
        validateParams('onError', [onErrorCallback], ['Function']);
        ws.on('error', (err) => {
            onErrorCallback(err);
        });
    };
    SocketTaskWX.onMessage = function (onMessageCallback) {
        validateParams('onMessage', [onMessageCallback], ['Function']);
        ws.on('onMessage', (err, value) => {
            onMessageCallback(!err ? value : err);
        });
    };
    SocketTaskWX.onOpen = function (onOpenCallback) {
        validateParams('onOpen', [onOpenCallback], ['Function']);
        ws.on('open', (err, value) => {
            // TODO：返回数据字段完全不一样，无法兼容，暂不处理
            // wx:{header, profile}, ohos:{err, value:{status, message}}
            onOpenCallback(!err ? value : err);
        });
    };
    SocketTaskWX.send = function (sendOptions) {
        return new Promise((resolve, reject) => {
            const { data } = sendOptions;
            try {
                validateParams('send', sendOptions, sendSocketSchema);
            }
            catch (error) {
                const res = { errMsg: error.message };
                return callAsyncFail(reject, res, options);
            }
            ws.send(data).then(value => {
                callAsyncSuccess(resolve, value, sendOptions);
            }, error => {
                callAsyncFail(reject, error, sendOptions);
            });
        });
    };
    return SocketTaskWX;
};

const scope$2 = 'login';
const type$2 = 'method';
const pluginLogin = /* @__PURE__ */ temporarilyNotSupport('pluginLogin');
const login = (options) => {
    const name = 'login';
    const { success, fail, complete } = options || {};
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args: [options],
            scope: scope$2,
            type: type$2,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
const logout = () => {
    const name = 'logout';
    eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
        name,
        scope: scope$2,
        type: type$2,
    });
};
const triggerJDLogin = ({ name = '', args = [], complete, fail, success, } = {}) => {
    if (!name) {
        throw new Error('triggerJDLogin 方法必须传入 name 参数');
    }
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args,
            scope: scope$2,
            type: type$2,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
const checkSession = /* @__PURE__ */ temporarilyNotSupport('checkSession');

// 帐号信息
const getAccountInfoSync = /* @__PURE__ */ temporarilyNotSupport('getAccountInfoSync');

// 收货地址
const chooseAddress = /* @__PURE__ */ temporarilyNotSupport('chooseAddress');

// 授权
const authorizeForMiniProgram = /* @__PURE__ */ temporarilyNotSupport('authorizeForMiniProgram');
const authorize = /* @__PURE__ */ temporarilyNotSupport('authorize');

// 卡券
const openCard = /* @__PURE__ */ temporarilyNotSupport('openCard');
const addCard = /* @__PURE__ */ temporarilyNotSupport('addCard');

// 视频号
const reserveChannelsLive = /* @__PURE__ */ temporarilyNotSupport('reserveChannelsLive');
const openChannelsUserProfile = /* @__PURE__ */ temporarilyNotSupport('openChannelsUserProfile');
const openChannelsLive = /* @__PURE__ */ temporarilyNotSupport('openChannelsLive');
const openChannelsEvent = /* @__PURE__ */ temporarilyNotSupport('openChannelsEvent');
const openChannelsActivity = /* @__PURE__ */ temporarilyNotSupport('openChannelsActivity');
const getChannelsShareKey = /* @__PURE__ */ temporarilyNotSupport('getChannelsShareKey');
const getChannelsLiveNoticeInfo = /* @__PURE__ */ temporarilyNotSupport('getChannelsLiveNoticeInfo');
const getChannelsLiveInfo = /* @__PURE__ */ temporarilyNotSupport('getChannelsLiveInfo');

// 微信客服
const openCustomerServiceChat = /* @__PURE__ */ temporarilyNotSupport('openCustomerServiceChat');

// 设备（组）音视频通话
const requestDeviceVoIP = /* @__PURE__ */ temporarilyNotSupport('requestDeviceVoIP');
const getDeviceVoIPList = /* @__PURE__ */ temporarilyNotSupport('getDeviceVoIPList');

// 过往接口
const checkIsSupportFacialRecognition = /* @__PURE__ */ temporarilyNotSupport('checkIsSupportFacialRecognition');
const startFacialRecognitionVerify = /* @__PURE__ */ temporarilyNotSupport('startFacialRecognitionVerify');
const startFacialRecognitionVerifyAndUploadVideo = /* @__PURE__ */ temporarilyNotSupport('startFacialRecognitionVerifyAndUploadVideo');
const faceVerifyForPay = /* @__PURE__ */ temporarilyNotSupport('faceVerifyForPay');

// 收藏
const addVideoToFavorites = /* @__PURE__ */ temporarilyNotSupport('addVideoToFavorites');
const addFileToFavorites = /* @__PURE__ */ temporarilyNotSupport('addFileToFavorites');

// 微信群
const getGroupEnterInfo = /* @__PURE__ */ temporarilyNotSupport('getGroupEnterInfo');

// 发票
const chooseInvoiceTitle = /* @__PURE__ */ temporarilyNotSupport('chooseInvoiceTitle');
const chooseInvoice = /* @__PURE__ */ temporarilyNotSupport('chooseInvoice');

// 车牌
const chooseLicensePlate = /* @__PURE__ */ temporarilyNotSupport('chooseLicensePlate');

// 我的小程序
const checkIsAddedToMyMiniProgram = /* @__PURE__ */ temporarilyNotSupport('checkIsAddedToMyMiniProgram');

// 隐私信息授权
const requirePrivacyAuthorize = /* @__PURE__ */ temporarilyNotSupport('requirePrivacyAuthorize');
const openPrivacyContract = /* @__PURE__ */ temporarilyNotSupport('openPrivacyContract');
const onNeedPrivacyAuthorization = /* @__PURE__ */ temporarilyNotSupport('onNeedPrivacyAuthorization');
const getPrivacySetting = /* @__PURE__ */ temporarilyNotSupport('getPrivacySetting');

// 微信红包
const showRedPackage = /* @__PURE__ */ temporarilyNotSupport('showRedPackage');

// 设置
const openSetting = /* @__PURE__ */ temporarilyNotSupport('openSetting');
const getSetting = /* @__PURE__ */ temporarilyNotSupport('getSetting');

// 生物认证
const startSoterAuthentication = /* @__PURE__ */ temporarilyNotSupport('startSoterAuthentication');
const checkIsSupportSoterAuthentication = /* @__PURE__ */ temporarilyNotSupport('checkIsSupportSoterAuthentication');
const checkIsSoterEnrolledInDevice = /* @__PURE__ */ temporarilyNotSupport('checkIsSoterEnrolledInDevice');

// 订阅消息
const requestSubscribeMessage = /* @__PURE__ */ temporarilyNotSupport('requestSubscribeMessage');
// 订阅设备消息
const requestSubscribeDeviceMessage = /* @__PURE__ */ temporarilyNotSupport('requestSubscribeDeviceMessage');

/**
 * 用户相关API， Harmony ACE API 6
 *
 * 1. 华为账号场景介绍文档 @see https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/harmonyos-js-login-0000001151310900
 * 2. 华为账号API参考 @see https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/harmonyos-js-overview-0000001063532145
 */
// import hmsJSAccount from '@hmscore/hms-jsb-account'
/**
 * 通过Scope数组获取已登录的对应帐号信息(依赖login行为)
 * @param options
 */
const getUserInfo = temporarilyNotSupport('getUserInfo');
// export function getUserInfo (options) {
//   const { success, fail, complete } = options
//   const res: Record<string, any> = {}
//   // const result = hmsJSAccount.HuaweiIdAuthManager.getAuthResultWithScopes([hmsJSAccount.PROFILE])
//   const result = null
//   if (result) {
//     res.data = { userInfo: generateUserInfo(result) }
//     isFunction(success) && success(res)
//   } else {
//     res.errorMsg = 'getUserInfo result data is null'
//     isFunction(fail) && fail(res)
//   }
//   isFunction(complete) && complete(res)
// }
/**
 * 获取用户信息
 */
const getUserProfile = temporarilyNotSupport('getUserProfile');
// export const getUserProfile = (_options) => {
//   return new Promise((resolve, reject) => {
//     const res: Record<string, any> = {}
//     hmsJSAccount.HuaweiIdAuthManager.addAuthScopes([hmsJSAccount.PROFILE])
//       .then(result => {
//         if (result) {
//           res.data = { userInfo: generateUserInfo(result) }
//           callAsyncSuccess(resolve, res, options)
//         } else {
//           res.errorMsg = 'getUserProfile result data is null'
//           callAsyncFail(reject, res, options)
//         }
//       })
//       .catch(error => {
//         callAsyncFail(reject, error, options)
//       })
//   })
// }
// function generateUserInfo (hmsAuthInfo) {
//   const userInfo = {
//     nickName: String,
//     avatarUrl: String,
//     gender: Number,
//     country: String
//   }
//   if (hmsAuthInfo) {
//     userInfo.nickName = hmsAuthInfo.displayName
//     userInfo.avatarUrl = hmsAuthInfo.photoUriString
//     userInfo.gender = hmsAuthInfo.gender
//     userInfo.country = hmsAuthInfo.country
//   }
//   return userInfo
// }

// 微信运动
const shareToWeRun = /* @__PURE__ */ temporarilyNotSupport('shareToWeRun');
const getWeRunData = /* @__PURE__ */ temporarilyNotSupport('getWeRunData');

const scope$1 = 'route';
const type$1 = 'method';
const navigateTo = (options) => {
    const name = 'navigateTo';
    const { success, fail, complete } = options;
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args: [options],
            scope: scope$1,
            type: type$1,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
const redirectTo = (options) => {
    const name = 'redirectTo';
    const { success, fail, complete } = options;
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args: [options],
            scope: scope$1,
            type: type$1,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
const navigateBack = (options = {}) => {
    const name = 'navigateBack';
    const { success, fail, complete } = options;
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args: [options],
            scope: scope$1,
            type: type$1,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
const reLaunch = (options) => {
    const name = 'reLaunch';
    const { success, fail, complete } = options;
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args: [options],
            scope: scope$1,
            type: type$1,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
const switchTab = (options) => {
    const name = 'switchTab';
    const { success, fail, complete } = options;
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args: [options],
            scope: scope$1,
            type: type$1,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
// JDRoute 专属方法
const triggerJDRoute = ({ name = '', args = [], complete, fail, success, } = {}) => {
    if (!name) {
        throw new Error('triggerJDRoute 方法必须传入 name 参数');
    }
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args,
            scope: scope$1,
            type: type$1,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};

// 画布
/** 创建离屏 canvas 实例 */
const createOffscreenCanvas = /* @__PURE__ */ temporarilyNotSupport('createOffscreenCanvas');
/** 创建 canvas 的绘图上下文 CanvasContext 对象 */
// export const createCanvasContext = /* @__PURE__ */ temporarilyNotSupport('createOffscreenCanvas')
const createCanvasContext = (canvasId) => {
    const dom = eventSource.get(`canvasId-${canvasId}`);
    // return dom as TaroCanvasElement
    if (dom)
        return dom.context;
};
/** 把当前画布指定区域的内容导出生成指定大小的图片 */
const canvasToTempFilePath = /* @__PURE__ */ temporarilyNotSupport('createOffscreenCanvas');
/** 将像素数据绘制到画布 */
const canvasPutImageData = /* @__PURE__ */ temporarilyNotSupport('createOffscreenCanvas');
/** 获取 canvas 区域隐含的像素数据 */
const canvasGetImageData = /* @__PURE__ */ temporarilyNotSupport('createOffscreenCanvas');

const reportMonitor = /* @__PURE__ */ temporarilyNotSupport('reportMonitor');
const reportAnalytics = /* @__PURE__ */ temporarilyNotSupport('reportAnalytics');
const reportEvent = /* @__PURE__ */ temporarilyNotSupport('reportEvent');
const getExptInfoSync = /* @__PURE__ */ temporarilyNotSupport('getExptInfoSync');

const callbackManager$1 = new CallbackManager();
let devicemotionListener;
/**
 * 停止监听加速度数据。
 */
const stopAccelerometer = ({ success, fail, complete } = {}) => {
    const res = {};
    const handle = new MethodHandler({ name: 'stopAccelerometer', success, fail, complete });
    try {
        sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ACCELEROMETER, devicemotionListener);
        return handle.success(res);
    }
    catch (e) {
        res.errMsg = e.message;
        return handle.fail(res);
    }
};
const INTERVAL_MAP = {
    game: {
        interval: 20 * 1000 * 1000,
        frequency: 50
    },
    ui: {
        interval: 60 * 1000 * 1000,
        frequency: 16.67
    },
    normal: {
        interval: 200 * 1000 * 1000,
        frequency: 5
    }
};
/**
 * 开始监听加速度数据。
 */
const startAccelerometer = ({ interval = 'normal', success, fail, complete } = {}) => {
    const handle = new MethodHandler({ name: 'startAccelerometer', success, fail, complete });
    try {
        const intervalObj = INTERVAL_MAP[interval];
        if (devicemotionListener) ;
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ACCELEROMETER, (data) => {
            callbackManager$1.trigger({
                x: (data === null || data === void 0 ? void 0 : data.x) || 0,
                y: (data === null || data === void 0 ? void 0 : data.y) || 0,
                z: (data === null || data === void 0 ? void 0 : data.z) || 0
            });
        }, {
            interval: intervalObj.interval,
        });
        return handle.success();
    }
    catch (e) {
        return handle.fail({ errMsg: e.message });
    }
};
/**
 * 监听加速度数据事件。频率根据 Taro.startAccelerometer() 的 interval 参数。可使用 Taro.stopAccelerometer() 停止监听。
 */
const onAccelerometerChange = callback => {
    callbackManager$1.add(callback);
};
/**
 * 取消监听加速度数据事件，参数为空，则取消所有的事件监听
 */
const offAccelerometerChange = callback => {
    callbackManager$1.remove(callback);
};

// 无障碍
const checkIsOpenAccessibility = /* @__PURE__ */ temporarilyNotSupport('checkIsOpenAccessibility');

// 电量
const getBatteryInfoSync = () => ({
    // @ts-ignore
    isCharging: [BatteryChargeState.ENABLE, BatteryChargeState.FULL].includes(batteryInfo.chargingStatus),
    level: batteryInfo.batterySOC
});
const getBatteryInfo = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* ({ success, fail, complete } = {}) {
    const handle = new MethodHandler({ name: 'getBatteryInfo', success, fail, complete });
    try {
        return handle.success(getBatteryInfoSync());
    }
    catch (error) {
        return handle.fail({
            errMsg: (error === null || error === void 0 ? void 0 : error.message) || error
        });
    }
});

// 蓝牙-通用
const stopBluetoothDevicesDiscovery = /* @__PURE__ */ temporarilyNotSupport('stopBluetoothDevicesDiscovery');
const startBluetoothDevicesDiscovery = /* @__PURE__ */ temporarilyNotSupport('startBluetoothDevicesDiscovery');
const openBluetoothAdapter = /* @__PURE__ */ temporarilyNotSupport('openBluetoothAdapter');
const onBluetoothDeviceFound = /* @__PURE__ */ temporarilyNotSupport('onBluetoothDeviceFound');
const onBluetoothAdapterStateChange = /* @__PURE__ */ temporarilyNotSupport('onBluetoothAdapterStateChange');
const offBluetoothDeviceFound = /* @__PURE__ */ temporarilyNotSupport('offBluetoothDeviceFound');
const offBluetoothAdapterStateChange = /* @__PURE__ */ temporarilyNotSupport('offBluetoothAdapterStateChange');
const makeBluetoothPair = /* @__PURE__ */ temporarilyNotSupport('makeBluetoothPair');
const isBluetoothDevicePaired = /* @__PURE__ */ temporarilyNotSupport('isBluetoothDevicePaired');
const getConnectedBluetoothDevices = /* @__PURE__ */ temporarilyNotSupport('getConnectedBluetoothDevices');
const getBluetoothDevices = /* @__PURE__ */ temporarilyNotSupport('getBluetoothDevices');
const getBluetoothAdapterState = /* @__PURE__ */ temporarilyNotSupport('getBluetoothAdapterState');
const closeBluetoothAdapter = /* @__PURE__ */ temporarilyNotSupport('closeBluetoothAdapter');

// 蓝牙-低功耗中心设备
const writeBLECharacteristicValue = /* @__PURE__ */ temporarilyNotSupport('writeBLECharacteristicValue');
const setBLEMTU = /* @__PURE__ */ temporarilyNotSupport('setBLEMTU');
const readBLECharacteristicValue = /* @__PURE__ */ temporarilyNotSupport('readBLECharacteristicValue');
const onBLEMTUChange = /* @__PURE__ */ temporarilyNotSupport('onBLEMTUChange');
const onBLEConnectionStateChange = /* @__PURE__ */ temporarilyNotSupport('onBLEConnectionStateChange');
const onBLECharacteristicValueChange = /* @__PURE__ */ temporarilyNotSupport('onBLECharacteristicValueChange');
const offBLEMTUChange = /* @__PURE__ */ temporarilyNotSupport('offBLEMTUChange');
const offBLEConnectionStateChange = /* @__PURE__ */ temporarilyNotSupport('offBLEConnectionStateChange');
const offBLECharacteristicValueChange = /* @__PURE__ */ temporarilyNotSupport('offBLECharacteristicValueChange');
const notifyBLECharacteristicValueChange = /* @__PURE__ */ temporarilyNotSupport('notifyBLECharacteristicValueChange');
const getBLEMTU = /* @__PURE__ */ temporarilyNotSupport('getBLEMTU');
const getBLEDeviceServices = /* @__PURE__ */ temporarilyNotSupport('getBLEDeviceServices');
const getBLEDeviceRSSI = /* @__PURE__ */ temporarilyNotSupport('getBLEDeviceRSSI');
const getBLEDeviceCharacteristics = /* @__PURE__ */ temporarilyNotSupport('getBLEDeviceCharacteristics');
const createBLEConnection = /* @__PURE__ */ temporarilyNotSupport('createBLEConnection');
const closeBLEConnection = /* @__PURE__ */ temporarilyNotSupport('closeBLEConnection');

// 蓝牙-低功耗外围设备
const onBLEPeripheralConnectionStateChanged = /* @__PURE__ */ temporarilyNotSupport('onBLEPeripheralConnectionStateChanged');
const offBLEPeripheralConnectionStateChanged = /* @__PURE__ */ temporarilyNotSupport('offBLEPeripheralConnectionStateChanged');
const createBLEPeripheralServer = /* @__PURE__ */ temporarilyNotSupport('createBLEPeripheralServer');

// 日历
const addPhoneRepeatCalendar = temporarilyNotSupport('addPhoneRepeatCalendar');
const addPhoneCalendar = temporarilyNotSupport('addPhoneCalendar');

// 从 API Version 6 开始支持
/**
 * 设置系统剪贴板的内容
 */
const setClipboardData = function (options) {
    const { data, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'setClipboardData', success, fail, complete });
    let res = {};
    if (!isString(data)) {
        return handle.fail({
            errMsg: getParameterError({
                para: 'data',
                correct: 'String',
                wrong: data
            })
        });
    }
    return new Promise((resolve, reject) => {
        const systemPasteboard = pasteboard.getSystemPasteboard();
        const pasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, data);
        try {
            systemPasteboard.setDataSync(pasteData);
            promptAction.showToast({
                message: '内容已复制',
                duration: 1500,
                bottom: '50%',
                showMode: 1 // 设置弹窗显示模式，显示在应用之上。
            });
            return handle.success({
                data,
            }, { resolve, reject });
        }
        catch (error) {
            if (error) {
                console.error('Failed to set PasteData. Cause: ' + JSON.stringify(error));
                res = {
                    errMsg: 'setClipboardData:fail,error: ' + object2String(error),
                    error: error
                };
                callAsyncFail(reject, res, options);
            }
        }
    });
};
/**
 * 获取系统剪贴板的内容
 */
const getClipboardData = function (options) {
    const { success, fail, complete } = options || {};
    const handle = new MethodHandler({ name: 'getClipboardData', success, fail, complete });
    return new Promise((resolve, reject) => {
        const systemPasteboard = pasteboard.getSystemPasteboard();
        systemPasteboard.getData((error, pasteData) => {
            if (error) {
                console.error('Failed to obtain PasteData. Cause: ' + JSON.stringify(error));
                return handle.fail({
                    errMsg: object2String(error),
                }, { resolve, reject });
            }
            else {
                return handle.success({
                    data: pasteData.getPrimaryText(),
                }, { resolve, reject });
            }
        });
    });
};

/**
 * 停止监听罗盘数据
 */
const stopCompass = temporarilyNotSupport('stopCompass');
/**
 * 开始监听罗盘数据
 */
const startCompass = temporarilyNotSupport('startCompass');
/**
 * 监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。
 */
const onCompassChange = temporarilyNotSupport('onCompassChange');
/**
 * 取消监听罗盘数据变化事件，参数为空，则取消所有的事件监听。
 */
const offCompassChange = temporarilyNotSupport('offCompassChange');

// 联系人
const chooseContact = /* @__PURE__ */ temporarilyNotSupport('chooseContact');
const addPhoneContact = /* @__PURE__ */ temporarilyNotSupport('addPhoneContact');

// 加密
const getRandomValues = /* @__PURE__ */ temporarilyNotSupport('getRandomValues');

// 陀螺仪
const stopGyroscope = /* @__PURE__ */ temporarilyNotSupport('stopGyroscope');
const startGyroscope = /* @__PURE__ */ temporarilyNotSupport('startGyroscope');
const onGyroscopeChange = /* @__PURE__ */ temporarilyNotSupport('onGyroscopeChange');
const offGyroscopeChange = /* @__PURE__ */ temporarilyNotSupport('offGyroscopeChange');

// 蓝牙-信标(Beacon)
const stopBeaconDiscovery = /* @__PURE__ */ temporarilyNotSupport('stopBeaconDiscovery');
const startBeaconDiscovery = /* @__PURE__ */ temporarilyNotSupport('startBeaconDiscovery');
const onBeaconUpdate = /* @__PURE__ */ temporarilyNotSupport('onBeaconUpdate');
const onBeaconServiceChange = /* @__PURE__ */ temporarilyNotSupport('onBeaconServiceChange');
const offBeaconUpdate = /* @__PURE__ */ temporarilyNotSupport('offBeaconUpdate');
const offBeaconServiceChange = /* @__PURE__ */ temporarilyNotSupport('offBeaconServiceChange');
const getBeacons = /* @__PURE__ */ temporarilyNotSupport('getBeacons');

const callbackManager = new CallbackManager();
const resizeListener = (height) => {
    callbackManager.trigger({
        height,
    });
};
let topWindow;
const onKeyboardHeightChange = callback => {
    callbackManager.add(callback);
    if (callbackManager.count() === 1) {
        Current.contextPromise
            .then(context => {
            const win = window.__ohos.getLastWindow(context);
            win.then(mainWindow => {
                topWindow = mainWindow;
                topWindow.on('keyboardHeightChange', resizeListener);
            });
        });
    }
};
const offKeyboardHeightChange = callback => {
    callbackManager.remove(callback);
    if (callbackManager.count() === 0) {
        topWindow === null || topWindow === void 0 ? void 0 : topWindow.off('keyboardHeightChange', resizeListener);
    }
};
// @ts-ignore
let keyboardController;
inputMethodEngine.getInputMethodAbility()
    // FIXME 当前事件无效，等待鸿蒙方面沟通
    .on('inputStart', (kbController) => {
    keyboardController = kbController;
});
const hideKeyboard = function (options) {
    const { success, fail, complete } = options || {};
    const handle = new MethodHandler({ name: 'hideKeyboard', success, fail, complete });
    return new Promise((resolve, reject) => {
        keyboardController === null || keyboardController === void 0 ? void 0 : keyboardController.hide((err) => {
            if (err) {
                return handle.fail({
                    errMsg: err,
                }, { resolve, reject });
            }
            return handle.success({}, { resolve, reject });
        });
    });
};
const getSelectedTextRange = /* @__PURE__ */ temporarilyNotSupport('getSelectedTextRange');

const onMemoryWarning = (listener) => {
    hooks.tap('getMemoryLevel', (res) => {
        listener(res);
    });
};
const offMemoryWarning = (listener) => {
    hooks.off('getMemoryLevel', listener);
};

const stopDeviceMotionListening = temporarilyNotSupport('stopDeviceMotionListening');
const startDeviceMotionListening = temporarilyNotSupport('startDeviceMotionListening');
const onDeviceMotionChange = temporarilyNotSupport('onDeviceMotionChange');
const offDeviceMotionChange = temporarilyNotSupport('offDeviceMotionChange');

const getNetworkType = (options = {}) => {
    const { success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'getNetworkType', success, fail, complete });
    return new Promise((resolve, reject) => {
        network.getType({
            success: function (data) {
                return handle.success({
                    networkType: data.type || 'unknown',
                    metered: data.metered
                }, { resolve, reject });
            },
            fail: function (data, code) {
                return handle.fail({
                    errMsg: data || '',
                    code
                }, { resolve, reject });
            },
        });
    });
};
const networkStatusManager = new CallbackManager();
const networkStatusListener = (data_1, ...args_1) => __awaiter(void 0, [data_1, ...args_1], void 0, function* (data, code = 0) {
    if (code > 0) {
        return networkStatusManager.trigger({ isConnected: false, networkType: 'none' });
    }
    const networkType = data.type || 'unknown';
    const isConnected = networkType !== 'none';
    const metered = !!data.metered;
    const obj = { isConnected, networkType, metered };
    networkStatusManager.trigger(obj);
});
/**
 * 在最近的八次网络请求中, 出现下列三个现象之一则判定弱网。
 * - 出现三次以上连接超时
 * - 出现三次 rtt 超过 400
 * - 出现三次以上的丢包
 * > 弱网事件通知规则是: 弱网状态变化时立即通知, 状态不变时 30s 内最多通知一次。
 */
const onNetworkWeakChange = /* @__PURE__ */ temporarilyNotSupport('onNetworkWeakChange');
const onNetworkStatusChange = callback => {
    const name = 'onNetworkStatusChange';
    const handle = new MethodHandler({ name, complete: callback });
    try {
        networkStatusManager.add(callback);
        if (networkStatusManager.count() === 1) {
            network.subscribe({
                success: networkStatusListener,
                fail: networkStatusListener,
            });
        }
    }
    catch (error) {
        handle.fail({
            errMsg: error
        });
    }
};
const offNetworkWeakChange = /* @__PURE__ */ temporarilyNotSupport('offNetworkWeakChange');
const offNetworkStatusChange = callback => {
    const name = 'offNetworkStatusChange';
    const handle = new MethodHandler({ name, complete: callback });
    try {
        networkStatusManager.remove(callback);
        if (networkStatusManager.count() === 0) {
            network.unsubscribe();
        }
    }
    catch (error) {
        handle.fail({
            errMsg: error
        });
    }
};
const getLocalIPAddress = /* @__PURE__ */ temporarilyNotSupport('getLocalIPAddress');

// NFC
const stopHCE = /* @__PURE__ */ temporarilyNotSupport('stopHCE');
const startHCE = /* @__PURE__ */ temporarilyNotSupport('startHCE');
const sendHCEMessage = /* @__PURE__ */ temporarilyNotSupport('sendHCEMessage');
const onHCEMessage = /* @__PURE__ */ temporarilyNotSupport('onHCEMessage');
const offHCEMessage = /* @__PURE__ */ temporarilyNotSupport('offHCEMessage');
const getNFCAdapter = /* @__PURE__ */ temporarilyNotSupport('getNFCAdapter');
const getHCEState = /* @__PURE__ */ temporarilyNotSupport('getHCEState');

// 从 API Version 7 开始支持。
const makePhoneCall = (options) => {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `makePhoneCall:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { phoneNumber, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'makePhoneCall', success, fail, complete });
    if (!isString(phoneNumber)) {
        return handle.fail({
            errMsg: getParameterError({
                para: 'phoneNumber',
                correct: 'String',
                wrong: phoneNumber
            })
        });
    }
    return new Promise((resolve, reject) => {
        call.makeCall(phoneNumber, err => {
            if (err) {
                console.error('Failed to makePhoneCall. Cause: ' + JSON.stringify(err));
                return handle.fail({
                    errMsg: object2String(err)
                }, { resolve, reject });
            }
            else {
                return handle.success({}, { resolve, reject });
            }
        });
    });
};

// 扫码
const scanCode = /* @__PURE__ */ temporarilyNotSupport('scanCode');

// 从API Version 7 开始，该接口不再维护，推荐使用新接口'@ohos.brightness'
// 但是 新接口 @ohos.brightness 没有 getValue
// 屏幕
const setVisualEffectOnCapture = /* @__PURE__ */ temporarilyNotSupport('setVisualEffectOnCapture');
const setScreenBrightness = function (options) {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `setScreenBrightness:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { value, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'setScreenBrightness', success, fail, complete });
    if (!isNumber(value)) {
        return handle.fail({
            errMsg: getParameterError({
                para: 'value',
                correct: 'Number',
                wrong: value
            })
        });
    }
    return new Promise((resolve, reject) => {
        brightness.setValue({
            // FIXME 不生效
            value: value >= 0 && value <= 1 ? value * 255 : value,
            success: function () {
                return handle.success({}, { resolve, reject });
            },
            fail: function (data, code) {
                return handle.fail({
                    errMsg: data || '',
                    code
                }, { resolve, reject });
            }
        });
    });
};
const setKeepScreenOn = /* @__PURE__ */ temporarilyNotSupport('setKeepScreenOn');
const onUserCaptureScreen = /* @__PURE__ */ temporarilyNotSupport('onUserCaptureScreen');
const offUserCaptureScreen = /* @__PURE__ */ temporarilyNotSupport('offUserCaptureScreen');
const getScreenBrightness = function (options) {
    const { success, fail, complete } = options || {};
    const handle = new MethodHandler({ name: 'getScreenBrightness', success, fail, complete });
    return new Promise((resolve, reject) => {
        brightness.getValue({
            success: function (data) {
                return handle.success({
                    value: data.value
                }, { resolve, reject });
            },
            fail: function (data, code) {
                return handle.fail({
                    errMsg: data || '',
                    code
                }, { resolve, reject });
            }
        });
    });
};
const onScreenRecordingStateChanged = /* @__PURE__ */ temporarilyNotSupport('onScreenRecordingStateChanged');
const offScreenRecordingStateChanged = /* @__PURE__ */ temporarilyNotSupport('offScreenRecordingStateChanged');
const getScreenRecordingState = /* @__PURE__ */ temporarilyNotSupport('getScreenRecordingState');

// 短信
const sendSms = /* @__PURE__ */ temporarilyNotSupport('sendSms');

const VIBRATOR_LONG_TIME = 400;
const VIBRATOR_SHORT_TIME = 15;
function vibrateBaseGenerator(duration, name = '') {
    return ({ success, fail, complete } = {}) => {
        const handle = new MethodHandler({ name, success, fail, complete });
        return new Promise((resolve, reject) => {
            vibrator.startVibration({
                type: 'time',
                duration,
            }, {
                usage: 'unknown'
            }, (error) => {
                if (error) {
                    return handle.fail({
                        errMsg: `vibrate fail, error.code: ${error.code}; error.message: ${error.message}`
                    }, { resolve, reject });
                }
                return handle.success({}, { resolve, reject });
            });
        });
    };
}
const vibrateLong = vibrateBaseGenerator(VIBRATOR_LONG_TIME, 'vibrateLong');
const vibrateShort = vibrateBaseGenerator(VIBRATOR_SHORT_TIME, 'vibrateShort');

// Wi-Fi
const stopWifi = /* @__PURE__ */ temporarilyNotSupport('stopWifi');
const startWifi = /* @__PURE__ */ temporarilyNotSupport('startWifi');
const setWifiList = /* @__PURE__ */ temporarilyNotSupport('setWifiList');
const onWifiConnectedWithPartialInfo = /* @__PURE__ */ temporarilyNotSupport('onWifiConnectedWithPartialInfo');
const onWifiConnected = /* @__PURE__ */ temporarilyNotSupport('onWifiConnected');
const onGetWifiList = /* @__PURE__ */ temporarilyNotSupport('onGetWifiList');
const offWifiConnectedWithPartialInfo = /* @__PURE__ */ temporarilyNotSupport('offWifiConnectedWithPartialInfo');
const offWifiConnected = /* @__PURE__ */ temporarilyNotSupport('offWifiConnected');
const offGetWifiList = /* @__PURE__ */ temporarilyNotSupport('offGetWifiList');
const getWifiList = /* @__PURE__ */ temporarilyNotSupport('getWifiList');
const getConnectedWifi = /* @__PURE__ */ temporarilyNotSupport('getConnectedWifi');
const connectWifi = /* @__PURE__ */ temporarilyNotSupport('connectWifi');

// 第三方平台
const getExtConfigSync = /* @__PURE__ */ temporarilyNotSupport('getExtConfigSync');
const getExtConfig = /* @__PURE__ */ temporarilyNotSupport('getExtConfig');

/**
 * HarmonyOS 文档：
 * https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fileio-0000001168366687
 *
 * WX 文档：
 * https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.html
 *
 * Taro.js 文档
 * https://taro-docs.jd.com/taro/docs/apis/files/FileSystemManager
 *
 * HarmonyOS 不支持接口：
 * readCompressedFile
 * readCompressedFileSync
 * readdirSync
 * readZipEntry
 *
 * HarmonyOS 差异性接口：
 * readFile：encoding 仅支持 utf-8
 * readFileSync：encoding 仅支持 utf-8
 * write：encoding 仅支持 utf-8
 * writeSync：encoding 仅支持 utf-8
 * rmdirSync：recursive 参数无效（即不支持递归删除）
 * statSync：recursive 参数无效（即不支持递归获取目录下的每个文件的 Stats 信息）
 * getSavedFileList：返回值 fileList 中的每一项不包含 createTime 属性
 */
var _a;
const rootDataPath = `/data/data/${((_a = app.getInfo()) === null || _a === void 0 ? void 0 : _a.appID) || 'app'}`;
const rootSavedFilePath = `${rootDataPath}/files`;
const pathSchema = {
    path: 'String'
};
const copyFileSchema = {
    srcPath: 'String',
    destPath: 'String'
};
const filePathSchema$1 = {
    filePath: 'String'
};
const dirPathSchema = {
    dirPath: 'String'
};
const readSchema = {
    fd: 'String',
    arrayBuffer: 'Object'
};
const writeSchema = {
    fd: 'String',
    data: 'String'
};
const renameSchema = {
    newPath: 'String',
    oldPath: 'String'
};
const fdSchema = {
    fd: 'String'
};
const saveFileSchema = {
    tempFilePath: 'String'
};
const unzipSchema = {
    targetPath: 'String',
    zipFilePath: 'String'
};
function convertFilePathToUri(filePath) {
    let uri = filePath.replace(/\/+/g, '/').replace(rootDataPath, 'internal:').replace('internal:/files', 'internal:/app');
    uri = /\/$/.test(uri) ? uri : `${uri}/`;
    return uri.replace(/\//g, '//');
}
function convertUriToFilePath(uri) {
    return uri.replace(/\/+/g, '/').replace('internal:/app', 'internal:/files').replace('internal:', rootDataPath);
}
function convertDataToString(data) {
    if (isString(data)) {
        return data;
    }
    return String.fromCharCode.apply(null, new Uint8Array(data));
}
function convertReadOption(option) {
    const result = {};
    const { offset, length, position } = option;
    if (isNumber(offset)) {
        result.offset = offset;
    }
    if (isNumber(length)) {
        result.length = length;
    }
    if (isNumber(position)) {
        result.position = position;
    }
    return result;
}
function convertWriteOption(option) {
    const result = {
        encoding: 'utf-8'
    };
    const { offset, length, position } = option;
    if (isNumber(offset)) {
        result.offset = offset;
    }
    if (isNumber(length)) {
        result.length = length;
    }
    if (isNumber(position)) {
        result.position = position;
    }
    return result;
}
function convertReadFileOption(option) {
    const result = {
        encoding: 'utf-8'
    };
    const { position, length } = option;
    if (isNumber(position)) {
        result.position = position;
    }
    if (isNumber(length)) {
        result.length = length;
    }
    return result;
}
function convertFd(fd) {
    return parseInt(fd, 10);
}
/**
 * HarmonyOS flag 详情参见：
 * https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fileio-0000001168366687#section1153565865716
 */
function convertOpenFlag(flag) {
    if (typeof flag === 'string') {
        switch (flag) {
            case 'a':
                return 0o1 | 0o100 | 0o2000;
            case 'ax':
                return 0o1 | 0o100 | 0o2000 | 0o200;
            case 'a+':
                return 0o2 | 0o100 | 0o2000;
            case 'ax+':
                return 0o2 | 0o100 | 0o2000 | 0o200;
            case 'as':
                return 0o1 | 0o100 | 0o2000 | 0o4010000;
            case 'as+':
                return 0o2 | 0o100 | 0o2000 | 0o4010000;
            case 'r':
                return 0o0;
            case 'r+':
                return 0o2;
            case 'w':
                return 0o1 | 0o100 | 0o1000;
            case 'wx':
                return 0o1 | 0o100 | 0o200;
            case 'w+':
                return 0o2 | 0o100 | 0o1000;
            case 'wx+':
                return 0o2 | 0o100 | 0o200;
            default:
                return 0o0;
        }
    }
    else {
        return 0o0;
    }
}
function validateSavedFilePath(savedFilePath) {
    if (savedFilePath.indexOf(rootSavedFilePath) !== 0) {
        throw new Error(`The filePath should in ${rootSavedFilePath}`);
    }
}
function parseSavedFilePath(srcPath, savedFilePath) {
    if (isString(savedFilePath) && savedFilePath.length > 0) {
        validateSavedFilePath(savedFilePath);
        return savedFilePath;
    }
    return `${rootSavedFilePath}/${srcPath.split('/').pop()}`;
}
function isFileExist(filePath) {
    try {
        accessSync(filePath);
        return true;
    }
    catch (_) {
        return false;
    }
}
function getDirFiles(dirPath) {
    return new Promise((resolve, reject) => {
        file.list({
            uri: convertFilePathToUri(dirPath),
            success: ({ fileList }) => {
                resolve({
                    files: fileList.filter(({ type }) => type.toLowerCase() === 'file').map(({ uri }) => convertUriToFilePath(uri)),
                    dirs: fileList.filter(({ type }) => type.toLowerCase() === 'dir').map(({ uri }) => convertUriToFilePath(uri))
                });
            },
            fail: (error) => {
                reject(new Error(error));
            }
        });
    });
}
const readCompressedFile = temporarilyNotSupport('readCompressedFile');
function readCompressedFileSync(_) {
    temporarilyNotSupport('readCompressedFileSync')(_);
    return new ArrayBuffer(0);
}
function readdirSync(_) {
    temporarilyNotSupport('readdirSync')(_);
    return [];
}
const readZipEntry = temporarilyNotSupport('readZipEntry');
function access(option) {
    try {
        validateParams('access', option, pathSchema);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    fileio.access(option.path, (error) => {
        if (error) {
            const res = { errMsg: error.message ? error.message : error };
            callCallbackFail(res, option);
        }
        else {
            callCallbackSuccess(undefined, option);
        }
    });
}
function accessSync(path) {
    fileio.accessSync(path);
}
function mkdir(option) {
    try {
        validateParams('mkdir', option, dirPathSchema);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    file.mkdir({
        uri: convertFilePathToUri(option.dirPath),
        recursive: option.recursive,
        success: () => callCallbackSuccess(undefined, option),
        fail: (error, code) => {
            const res = { errMsg: `mkdir invoke failed, code: ${code}, error: ${error}` };
            callCallbackFail(res, option);
        }
    });
}
function mkdirSync(dirPath, recursive) {
    if (recursive === true) {
        const pathParts = dirPath.split('/');
        for (let index = 0; index < pathParts.length; index++) {
            const filePath = pathParts.slice(0, index + 1).join('/');
            if (filePath.length === 0 || isFileExist(filePath)) {
                continue;
            }
            fileio.mkdirSync(filePath);
        }
    }
    else {
        fileio.mkdirSync(dirPath);
    }
}
function rmdir(option) {
    try {
        validateParams('rmdir', option, dirPathSchema);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    file.rmdir({
        uri: convertFilePathToUri(option.dirPath),
        recursive: option.recursive,
        success: () => callCallbackSuccess(undefined, option),
        fail: (error, code) => {
            const res = { errMsg: `rmdir invoke failed, code: ${code}, error: ${error}` };
            callCallbackFail(res, option);
        }
    });
}
function rmdirSync(dirPath, recursive) {
    if (recursive === true) {
        temporarilyNotSupport('rmdirSync recursive')(dirPath);
    }
    else {
        fileio.rmdirSync(dirPath);
    }
}
function readdir(option) {
    try {
        validateParams('readdir', option, dirPathSchema);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    getDirFiles(option.dirPath).then(({ files, dirs }) => {
        callCallbackSuccess({ files: [...files, ...dirs] }, option);
    }).catch((error) => {
        const res = { errMsg: error.message };
        callCallbackFail(res, option);
    });
}
function copyFile(option) {
    try {
        validateParams('copyFile', option, copyFileSchema);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    fileio.copyFile(option.srcPath, option.destPath, 0, (error) => {
        if (error) {
            const res = { errMsg: error.message ? error.message : error };
            callCallbackFail(res, option);
        }
        else {
            callCallbackSuccess(undefined, option);
        }
    });
}
function copyFileSync(srcPath, destPath) {
    fileio.copyFileSync(srcPath, destPath, 0);
}
function open(option) {
    try {
        validateParams('open', option, filePathSchema$1);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    // 由于 HarmonyOS 异步方法 fileio.open 在【文件不存在则创建】模式下依旧抛出 No such file or directory 异常，
    // 为保证接口的可用性，此处降级使用 fileio.openSync 方法。
    const openPromise = new Promise((resolve, reject) => {
        try {
            const fd = fileio.openSync(option.filePath, convertOpenFlag(option.flag), 0o666);
            resolve({ fd: fd.toString() });
        }
        catch (error) {
            reject(new Error(error.message ? error.message : error));
        }
    });
    openPromise.then((res) => callCallbackSuccess(res, option))
        .catch((error) => callCallbackFail({ errMsg: error.message }, option));
}
function openSync(option) {
    validateParams('openSync', option, filePathSchema$1);
    return fileio.openSync(option.filePath, convertOpenFlag(option.flag), 0o666).toString();
}
function read(option) {
    try {
        validateParams('read', option, readSchema);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    fileio.read(convertFd(option.fd), option.arrayBuffer, convertReadOption(option), (error, readOut) => {
        if (error) {
            const res = { errMsg: error.message ? error.message : error };
            callCallbackFail(res, option);
        }
        else {
            callCallbackSuccess({ bytesRead: readOut.bytesRead, arrayBuffer: readOut.buffer }, option);
        }
    });
}
function readSync(option) {
    validateParams('readSync', option, readSchema);
    return {
        bytesRead: fileio.readSync(convertFd(option.fd), option.arrayBuffer, convertReadOption(option)),
        arrayBuffer: option.arrayBuffer
    };
}
/**
 * HarmonyOS encoding 目前仅支持 utf-8，详情参见：
 * https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fileio-0000001168366687#section17477155374810
 */
function readFile(option) {
    try {
        validateParams('readFile', option, filePathSchema$1);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    fileio.readText(option.filePath, convertReadFileOption(option), (error, data) => {
        if (error) {
            const res = { errMsg: error.message ? error.message : error };
            callCallbackFail(res, option);
        }
        else {
            callCallbackSuccess({ data }, option);
        }
    });
}
/**
 * HarmonyOS encoding 目前仅支持 utf-8，详情参见：
 * https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fileio-0000001168366687#section4147155065718
 */
function readFileSync(filePath, encoding, position, length) {
    return fileio.readTextSync(filePath, convertReadFileOption({ filePath, encoding, length, position }));
}
/**
 * HarmonyOS encoding 目前仅支持 utf-8，详情参见：
 * https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fileio-0000001168366687#section140547195118
 */
function write(option) {
    const data = convertDataToString(option.data);
    try {
        validateParams('write', Object.assign(Object.assign({}, option), { data }), writeSchema);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    fileio.write(convertFd(option.fd), data, convertWriteOption(option), (error, bytesWritten) => {
        if (error) {
            const res = { errMsg: error.message ? error.message : error };
            callCallbackFail(res, option);
        }
        else {
            callCallbackSuccess({ bytesWritten }, option);
        }
    });
}
/**
 * HarmonyOS encoding 目前仅支持 utf-8，详情参见：
 * https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fileio-0000001168366687#section144923345218
 */
function writeSync(option) {
    const data = convertDataToString(option.data);
    validateParams('writeSync', Object.assign(Object.assign({}, option), { data }), writeSchema);
    return {
        bytesWritten: fileio.writeSync(convertFd(option.fd), data, convertWriteOption(option))
    };
}
function writeFileWithFlag(option, flag) {
    open({
        flag,
        filePath: option.filePath,
        success: ({ fd }) => {
            const writePromise = new Promise((resolve) => {
                write({
                    fd,
                    data: option.data,
                    success: (res) => resolve({
                        error: null,
                        res
                    }),
                    fail: (res) => resolve({
                        error: res,
                        res: null
                    })
                });
            });
            writePromise.then(({ error, res }) => {
                close({
                    fd,
                    success: () => {
                        if (error === null) {
                            callCallbackSuccess(res, option);
                        }
                        else {
                            callCallbackFail(error, option);
                        }
                    },
                    fail: (res) => callCallbackFail(res, option)
                });
            });
        },
        fail: (res) => callCallbackFail(res, option)
    });
}
function writeFile(option) {
    writeFileWithFlag(option, 'w');
}
function writeFileSyncWithFlag(filePath, data, flag) {
    const fd = openSync({ filePath, flag });
    writeSync({ fd, data });
    closeSync({ fd });
}
function writeFileSync(filePath, data) {
    writeFileSyncWithFlag(filePath, data, 'w');
}
function appendFile(option) {
    writeFileWithFlag(option, 'a');
}
function appendFileSync(filePath, data) {
    writeFileSyncWithFlag(filePath, data, 'a');
}
function rename(option) {
    try {
        validateParams('rename', option, renameSchema);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    fileio.rename(option.oldPath, option.newPath, (error) => {
        if (error) {
            const res = { errMsg: error.message ? error.message : error };
            callCallbackFail(res, option);
        }
        else {
            callCallbackSuccess(undefined, option);
        }
    });
}
function renameSync(oldPath, newPath) {
    fileio.renameSync(oldPath, newPath);
}
function unlink(option) {
    try {
        validateParams('unlink', option, filePathSchema$1);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    fileio.unlink(option.filePath, (error) => {
        if (error) {
            const res = { errMsg: error.message ? error.message : error };
            callCallbackFail(res, option);
        }
        else {
            callCallbackSuccess(undefined, option);
        }
    });
}
function unlinkSync(filePath) {
    fileio.unlinkSync(filePath);
}
function fstat(option) {
    try {
        validateParams('fstat', option, fdSchema);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    fileio.fstat(convertFd(option.fd), (error, stats) => {
        if (error) {
            const res = { errMsg: error.message ? error.message : error };
            callCallbackFail(res, option);
        }
        else {
            const res = {
                mode: stats.mode.toString(),
                size: stats.size,
                lastAccessedTime: stats.atime,
                lastModifiedTime: stats.mtime,
                isDirectory: () => stats.isDirectory(),
                isFile: () => stats.isFile()
            };
            callCallbackSuccess({ stats: res }, option);
        }
    });
}
function fstatSync(option) {
    validateParams('fstatSync', option, fdSchema);
    const stats = fileio.fstatSync(convertFd(option.fd));
    return {
        mode: stats.mode.toString(),
        size: stats.size,
        lastAccessedTime: stats.atime,
        lastModifiedTime: stats.mtime,
        isDirectory: () => stats.isDirectory(),
        isFile: () => stats.isFile()
    };
}
function statWithFd(fd) {
    return new Promise((resolve) => {
        fstat({
            fd,
            success: ({ stats }) => resolve({
                stats,
                error: null
            }),
            fail: (error) => resolve({
                error,
                stats: null
            })
        });
    });
}
function statWithPath(path) {
    return new Promise((resolve, reject) => {
        open({
            filePath: path,
            flag: 'r',
            success: ({ fd }) => {
                statWithFd(fd).then(({ error, stats }) => {
                    close({
                        fd,
                        success: () => {
                            if (error === null) {
                                resolve(stats);
                            }
                            else {
                                reject(error);
                            }
                        },
                        fail: (error) => reject(error)
                    });
                });
            },
            fail: (error) => reject(error)
        });
    });
}
function statWithRecursive(rootPath) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = {};
        const { files, dirs } = yield getDirFiles(rootPath);
        for (const dir of dirs) {
            result[dir] = yield statWithPath(dir);
            result = Object.assign(Object.assign({}, result), (yield statWithRecursive(dir)));
        }
        for (const file of files) {
            result[file] = yield statWithPath(file);
        }
        return result;
    });
}
function stat(option) {
    try {
        validateParams('fstat', option, pathSchema);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    const statPromise = option.recursive === true ? statWithRecursive(option.path) : statWithPath(option.path);
    statPromise.then((stats) => {
        callCallbackSuccess({ stats }, option);
    }).catch((error) => {
        const res = { errMsg: error.message ? error.message : error };
        callCallbackFail(res, option);
    });
}
function statSync(path, recursive) {
    if (recursive === true) {
        return temporarilyNotSupport('statSync recursive')(path);
    }
    const fd = openSync({ filePath: path, flag: 'r' });
    const stats = fstatSync({ fd });
    closeSync({ fd });
    return stats;
}
function getFileInfo$1(option) {
    statWithPath(option.filePath).then((stats) => {
        callCallbackSuccess({ size: stats.size }, option);
    }).catch((error) => {
        const res = { errMsg: error.message ? error.message : error };
        callCallbackFail(res, option);
    });
}
function getSavedFileList$1(option) {
    statWithRecursive(rootSavedFilePath).then((stats) => {
        const fileList = Object.keys(stats).map((filePath) => {
            const file = stats[filePath];
            if (file.isFile()) {
                return {
                    filePath,
                    size: file.size
                };
            }
            return null;
        }).filter((file) => file !== null);
        callCallbackSuccess({ fileList }, option);
    }).catch((error) => {
        const res = { errMsg: error.message ? error.message : error };
        callCallbackFail(res, option);
    });
}
function ftruncate(option) {
    var _a;
    try {
        validateParams('ftruncate', option, fdSchema);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    fileio.ftruncate(convertFd(option.fd), (_a = option.length) !== null && _a !== void 0 ? _a : 0, (error) => {
        if (error) {
            const res = { errMsg: error.message ? error.message : error };
            callCallbackFail(res, option);
        }
        else {
            callCallbackSuccess(undefined, option);
        }
    });
}
function ftruncateSync(option) {
    var _a;
    validateParams('ftruncateSync', option, fdSchema);
    fileio.ftruncateSync(convertFd(option.fd), (_a = option.length) !== null && _a !== void 0 ? _a : 0);
}
function truncate(option) {
    var _a;
    try {
        validateParams('truncate', option, filePathSchema$1);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    fileio.truncate(option.filePath, (_a = option.length) !== null && _a !== void 0 ? _a : 0, (error) => {
        if (error) {
            const res = { errMsg: error.message ? error.message : error };
            callCallbackFail(res, option);
        }
        else {
            callCallbackSuccess(undefined, option);
        }
    });
}
function truncateSync(option) {
    var _a;
    validateParams('truncateSync', option, filePathSchema$1);
    fileio.truncateSync(option.filePath, (_a = option.length) !== null && _a !== void 0 ? _a : 0);
}
function close(option) {
    try {
        validateParams('close', option, fdSchema);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    fileio.close(convertFd(option.fd), (error) => {
        if (error) {
            const res = { errMsg: error.message ? error.message : error };
            callCallbackFail(res, option);
        }
        else {
            callCallbackSuccess(undefined, option);
        }
    });
}
function closeSync(option) {
    validateParams('closeSync', option, fdSchema);
    fileio.closeSync(convertFd(option.fd));
}
function saveFile$1(option) {
    try {
        validateParams('saveFile', option, saveFileSchema);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    try {
        const savedFilePath = parseSavedFilePath(option.tempFilePath, option.filePath);
        rename({
            oldPath: option.tempFilePath,
            newPath: savedFilePath,
            success: () => {
                callCallbackSuccess({ savedFilePath }, option);
            },
            fail: (res) => {
                callCallbackFail(res, option);
            }
        });
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
}
function saveFileSync(tempFilePath, filePath) {
    const savedFilePath = parseSavedFilePath(tempFilePath, filePath);
    renameSync(tempFilePath, savedFilePath);
    return savedFilePath;
}
function removeSavedFile$1(option) {
    try {
        validateParams('removeSavedFile', option, filePathSchema$1);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    try {
        validateSavedFilePath(option.filePath);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    unlink(option);
}
function unzip(option) {
    try {
        validateParams('unzip', option, unzipSchema);
    }
    catch (error) {
        const res = { errMsg: error.message };
        return callCallbackFail(res, option);
    }
    zlib.unzipFile(option.zipFilePath, option.targetPath).then(() => {
        callCallbackSuccess(undefined, option);
    }).catch(error => {
        const res = { errMsg: error.message ? error.message : error };
        callCallbackFail(res, option);
    });
}
function getFileSystemManager() {
    return {
        access,
        accessSync,
        appendFile,
        appendFileSync,
        close,
        closeSync,
        copyFile,
        copyFileSync,
        fstat,
        fstatSync,
        ftruncate,
        ftruncateSync,
        getFileInfo: getFileInfo$1,
        getSavedFileList: getSavedFileList$1,
        mkdir,
        mkdirSync,
        open,
        openSync,
        read,
        readCompressedFile,
        readCompressedFileSync,
        readdir,
        readdirSync,
        readFile,
        readFileSync,
        readSync,
        readZipEntry,
        removeSavedFile: removeSavedFile$1,
        rename,
        renameSync,
        rmdir,
        rmdirSync,
        saveFile: saveFile$1,
        saveFileSync,
        stat,
        statSync,
        truncate,
        truncateSync,
        unlink,
        unlinkSync,
        unzip,
        write,
        writeFile,
        writeFileSync,
        writeSync
    };
}

/**
 * HarmonyOS 文档：
 * https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fileio-0000001168366687
 *
 * WX 文档：
 * https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFileToDisk.html
 *
 * Taro.js 文档
 * https://taro-docs.jd.com/taro/docs/apis/files/saveFileToDisk
 *
 * HarmonyOS 不支持接口：
 * saveFileToDisk
 *
 * HarmonyOS 差异性接口：
 * openDocument：showMenu、type 选项无效
 * getSavedFileList：返回值 fileList 中的每一项不包含 createTime 属性
 * getSavedFileInfo：返回值不包含 createTime 属性
 */
const filePathSchema = {
    filePath: 'String'
};
const saveFileToDisk = temporarilyNotSupport('saveFileToDisk');
/**
 * HarmonyOS 不支持 showMenu 选项，并且 type 目前仅支持 *，详情参见：
 * https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-document-0000001168936589#section9616125953711
 */
function openDocument(option) {
    return new Promise((resolve, reject) => {
        try {
            validateParams('access', option, filePathSchema);
        }
        catch (error) {
            const res = { errMsg: error.message };
            return callAsyncFail(reject, res, option);
        }
        document$1.show(option.filePath, '*', (error) => {
            if (error) {
                const res = { errMsg: error.message ? error.message : error };
                return callAsyncFail(reject, res, option);
            }
            else {
                callAsyncSuccess(resolve, undefined, option);
            }
        });
    });
}
function saveFile(option) {
    return new Promise((resolve, reject) => {
        const fileSystemManager = getFileSystemManager();
        fileSystemManager.saveFile({
            tempFilePath: option.tempFilePath,
            filePath: option.filePath,
            success: (res) => {
                callAsyncSuccess(resolve, res, option);
            },
            fail: (res) => {
                callAsyncFail(reject, res, option);
            }
        });
    });
}
function removeSavedFile(option) {
    return new Promise((resolve, reject) => {
        const fileSystemManager = getFileSystemManager();
        fileSystemManager.removeSavedFile({
            filePath: option.filePath,
            success: (res) => {
                callAsyncSuccess(resolve, res, option);
            },
            fail: (res) => {
                callAsyncFail(reject, res, option);
            }
        });
    });
}
function getFileInfo(option) {
    return new Promise((resolve, reject) => {
        const fileSystemManager = getFileSystemManager();
        fileSystemManager.getFileInfo({
            filePath: option.filePath,
            success: ({ size }) => {
                var _a;
                fileio.hash(option.filePath, (_a = option.digestAlgorithm) !== null && _a !== void 0 ? _a : 'md5').then((digest) => {
                    callAsyncSuccess(resolve, { size, digest }, option);
                }).catch((error) => {
                    const res = { errMsg: error.message ? error.message : error };
                    callAsyncFail(reject, res, option);
                });
            },
            fail: (res) => {
                callAsyncFail(reject, res, option);
            }
        });
    });
}
function getSavedFileList(option) {
    return new Promise((resolve, reject) => {
        const fileSystemManager = getFileSystemManager();
        fileSystemManager.getSavedFileList({
            success: (res) => callAsyncSuccess(resolve, res, option),
            fail: (res) => callAsyncFail(reject, res, option)
        });
    });
}
function getSavedFileInfo(option) {
    return new Promise((resolve, reject) => {
        try {
            validateParams('getSavedFileInfo', option, filePathSchema);
            validateSavedFilePath(option.filePath);
        }
        catch (error) {
            const res = { errMsg: error.message };
            return callAsyncFail(reject, res, option);
        }
        const fileSystemManager = getFileSystemManager();
        fileSystemManager.getFileInfo({
            filePath: option.filePath,
            success: ({ size }) => callAsyncSuccess(resolve, { size }, option),
            fail: (res) => callAsyncFail(reject, res, option)
        });
    });
}

const ENV_TYPE = {
    WEAPP: 'WEAPP',
    SWAN: 'SWAN',
    ALIPAY: 'ALIPAY',
    TT: 'TT',
    QQ: 'QQ',
    JD: 'JD',
    WEB: 'WEB',
    RN: 'RN',
    HARMONY: 'HARMONY',
    QUICKAPP: 'QUICKAPP'
};
function getEnv() {
    return ENV_TYPE.HARMONY;
}
// TODO
const getCurrentPages = () => [];
const requirePlugin$1 = temporarilyNotSupport('requirePlugin');

// 跳转
const openEmbeddedMiniProgram = /* @__PURE__ */ temporarilyNotSupport('openEmbeddedMiniProgram');
const navigateToMiniProgram = /* @__PURE__ */ temporarilyNotSupport('navigateToMiniProgram');
const navigateBackMiniProgram = /* @__PURE__ */ temporarilyNotSupport('navigateBackMiniProgram');
const exitMiniProgram = /* @__PURE__ */ temporarilyNotSupport('exitMiniProgram');
const openBusinessView = /* @__PURE__ */ temporarilyNotSupport('openBusinessView');

// 支付
const requestPayment = /* @__PURE__ */ temporarilyNotSupport('requestPayment');
const requestPluginPayment = /* @__PURE__ */ temporarilyNotSupport('requestPluginPayment');
const requestOrderPayment = /* @__PURE__ */ temporarilyNotSupport('requestOrderPayment');

// 转发
/** 更新转发属性 */
const updateShareMenu = /* @__PURE__ */ temporarilyNotSupport('updateShareMenu');
/** 显示当前页面的转发按钮 */
const showShareMenu = /* @__PURE__ */ temporarilyNotSupport('showShareMenu');
/** 打开分享图片弹窗，可以将图片发送给朋友、收藏或下载 */
const showShareImageMenu = /* @__PURE__ */ temporarilyNotSupport('showShareImageMenu');
/** 转发视频到聊天 */
const shareVideoMessage = /* @__PURE__ */ temporarilyNotSupport('shareVideoMessage');
/** 转发文件到聊天 */
const shareFileMessage = /* @__PURE__ */ temporarilyNotSupport('shareFileMessage');
/** 监听用户点击右上角菜单的「复制链接」按钮时触发的事件 */
const onCopyUrl = /* @__PURE__ */ temporarilyNotSupport('onCopyUrl');
/** 移除用户点击右上角菜单的「复制链接」按钮时触发的事件的监听函数 */
const offCopyUrl = /* @__PURE__ */ temporarilyNotSupport('offCopyUrl');
/** 隐藏当前页面的转发按钮 */
const hideShareMenu = /* @__PURE__ */ temporarilyNotSupport('hideShareMenu');
/** 获取转发详细信息 */
const getShareInfo = /* @__PURE__ */ temporarilyNotSupport('getShareInfo');
/** 验证私密消息。 */
const authPrivateMessage = /* @__PURE__ */ permanentlyNotSupport('authPrivateMessage');

// 周期性更新
const setBackgroundFetchToken = /* @__PURE__ */ temporarilyNotSupport('setBackgroundFetchToken');
const onBackgroundFetchData = /* @__PURE__ */ temporarilyNotSupport('onBackgroundFetchData');
const getBackgroundFetchToken = /* @__PURE__ */ temporarilyNotSupport('getBackgroundFetchToken');
const getBackgroundFetchData = /* @__PURE__ */ temporarilyNotSupport('getBackgroundFetchData');

// 周期性更新
const createCacheManager = /* @__PURE__ */ temporarilyNotSupport('createCacheManager');

/**
 * 从API Version 6开始，该模块不再维护，可以使用模块@ohos.data.storage。在API Version 9后，推荐使用新模块@ohos.data.preferences。
 * https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-data-preferences-0000001427745052-V3
*/
let context;
let kvManager;
let kvStore$1;
let kvStorePromise;
Current.contextPromise.then((ctx) => {
    context = ctx;
    const kvManagerConfig = {
        context: context,
        bundleName: 'com.example.taro'
    };
    try {
        // 创建KVManager实例
        kvManager = distributedKVStore.createKVManager(kvManagerConfig);
        // 继续创建获取数据库
        const options = {
            createIfMissing: true,
            encrypt: false,
            backup: false,
            autoSync: false,
            // kvStoreType不填时，默认创建多设备协同数据库
            kvStoreType: distributedKVStore.KVStoreType.SINGLE_VERSION,
            // 多设备协同数据库：kvStoreType: distributedKVStore.KVStoreType.DEVICE_COLLABORATION,
            securityLevel: distributedKVStore.SecurityLevel.S1
        };
        const data = bundleManager.getBundleInfoForSelfSync(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION);
        kvStorePromise = new Promise(resolve => {
            kvManager.getKVStore(`${data.appInfo.uid}Store`, options, (err, store) => {
                if (err) {
                    console.error(`Failed to get KVStore: Code:${err.code},message:${err.message}`);
                    return;
                }
                kvStore$1 = store;
                // 请确保获取到键值数据库实例后，再进行相关数据操作
                resolve();
            });
        });
    }
    catch (e) {
        console.error(`Failed to create KVManager. Code:${e.code},message:${e.message}`);
    }
    return context;
});
const storageSchema = {
    key: 'String'
};
function checkContextExist(api, isAsync = false) {
    if (!context) {
        const message = `${api} 调用失败，Taro 不支持过早地调用 ${api}，请确保页面已经渲染完成再调用此 API`;
        if (isAsync) {
            return {
                isExist: false,
                error: Promise.reject(new Error(message))
            };
        }
        else {
            console.warn(message);
            return {
                isExist: false,
            };
        }
    }
    return {
        isExist: true,
    };
}
function getStorage(options) {
    const name = 'getStorage';
    const { isExist, error } = checkContextExist(name, true);
    if (!isExist) {
        return error;
    }
    const { key, success, fail, complete } = options || {};
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        kvStorePromise.then(() => {
            try {
                validateParams(name, options, storageSchema);
            }
            catch (error) {
                const res = { errMsg: error.message };
                return handle.fail(res, { resolve, reject });
            }
            kvStore$1 = kvStore$1;
            kvStore$1.get(key, (err, data) => {
                if (err) {
                    handle.fail({ errMsg: `Failed to get data. Code:${err.code},message:${err.message}` }, { resolve, reject });
                    return;
                }
                handle.success({ data }, { resolve, reject });
            });
        });
    });
}
function setStorage(options) {
    const name = 'setStorage';
    const { isExist, error } = checkContextExist(name, true);
    if (!isExist) {
        return error;
    }
    const { key, data, success, fail, complete } = options || {};
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        kvStorePromise.then(() => {
            try {
                validateParams(name, options, storageSchema);
            }
            catch (error) {
                const res = { errMsg: error.message };
                return handle.fail(res, { resolve, reject });
            }
            kvStore$1 = kvStore$1;
            kvStore$1.put(key, data, (err) => {
                if (err) {
                    handle.fail({ errMsg: `Failed to put data. Code:${err.code},message:${err.message}` }, { resolve, reject });
                    return;
                }
                handle.success({}, { resolve, reject });
            });
        });
    });
}
function removeStorage(options) {
    const name = 'removeStorage';
    const { isExist, error } = checkContextExist(name, true);
    if (!isExist) {
        return error;
    }
    const { key, success, fail, complete } = options || {};
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        kvStorePromise.then(() => {
            try {
                validateParams(name, options, storageSchema);
            }
            catch (error) {
                const res = { errMsg: error.message };
                return handle.fail(res, { resolve, reject });
            }
            kvStore$1 = kvStore$1;
            kvStore$1.delete(key, (err) => {
                if (err) {
                    handle.fail({ errMsg: `Failed to delete data. Code:${err.code},message:${err.message}` }, { resolve, reject });
                    return;
                }
                handle.success({}, { resolve, reject });
            });
        });
    });
}
const getStorageInfoSync = temporarilyNotSupport('getStorageInfoSync');
const getStorageInfo = temporarilyNotSupport('getStorageInfo');
const createBufferURL = /* @__PURE__ */ temporarilyNotSupport('createBufferURL');
const revokeBufferURL = /* @__PURE__ */ temporarilyNotSupport('revokeBufferURL');
const batchSetStorageSync = /* @__PURE__ */ temporarilyNotSupport('batchSetStorageSync');
const batchSetStorage = /* @__PURE__ */ temporarilyNotSupport('batchSetStorage');
const batchGetStorageSync = /* @__PURE__ */ temporarilyNotSupport('batchGetStorageSync');
const batchGetStorage = /* @__PURE__ */ temporarilyNotSupport('batchGetStorage');
const clearStorage = temporarilyNotSupport('clearStorage');
const getStorageSync = temporarilyNotSupport('getStorageSync', 'getStorage');
const setStorageSync = temporarilyNotSupport('setStorageSync', 'setStorage');
const clearStorageSync = temporarilyNotSupport('clearStorageSync', 'clearStorage');
const removeStorageSync = temporarilyNotSupport('removeStorageSync', 'removeStorage');

class Animation {
    constructor({ duration = 400, delay = 0, timingFunction = 'linear', transformOrigin = '50% 50% 0', unit = 'px' } = {}) {
        // 组合动画
        this.steps = [];
        // 属性组合
        this.rule = {};
        this.unit = unit;
        this.setDefault(duration, delay, timingFunction, transformOrigin);
    }
    // 设置默认值
    setDefault(duration, delay, timingFunction, transformOrigin) {
        this.DEFAULT = { duration, delay, timingFunction, transformOrigin };
    }
    export() {
        const actions = this.steps.slice();
        this.steps = [];
        this.rule = {};
        return {
            actions
        };
    }
    step(arg = {}) {
        const { DEFAULT } = this;
        const { duration = DEFAULT.duration, delay = DEFAULT.delay, timingFunction = DEFAULT.timingFunction, transformOrigin = DEFAULT.transformOrigin } = arg;
        this.steps.push({
            duration,
            delay,
            timingFunction,
            transformOrigin,
            rule: Object.assign({}, this.rule)
        });
        if (this.rule.transform) {
            this.rule.transform = Object.assign({}, this.rule.transform);
        }
        return this;
    }
    matrix(a, b, c, d, tx, ty) {
        this.rule.transform = matrix4.init([a, b, c, d, tx, ty]);
        return this;
    }
    matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4) {
        this.rule.transform = matrix4.init([a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4]);
        return this;
    }
    rotate(angle) {
        if (!this.rule.transform) {
            this.rule.transform = {};
        }
        this.rule.transform.Rotate = { x: 0, y: 0, z: 1, angle };
        return this;
    }
    rotate3d(x, y, z, angle) {
        if (!this.rule.transform) {
            this.rule.transform = {};
        }
        this.rule.transform.Rotate = { x, y, z, angle };
        return this;
    }
    rotateX(angle) {
        if (!this.rule.transform) {
            this.rule.transform = {};
        }
        this.rule.transform.Rotate = { x: 1, y: 0, z: 0, angle };
        return this;
    }
    rotateY(angle) {
        if (!this.rule.transform) {
            this.rule.transform = {};
        }
        this.rule.transform.Rotate = { x: 0, y: 1, z: 0, angle };
        return this;
    }
    rotateZ(angle) {
        if (!this.rule.transform) {
            this.rule.transform = {};
        }
        this.rule.transform.Rotate = { x: 0, y: 0, z: 1, angle };
        return this;
    }
    scale(sx, sy) {
        if (!this.rule.transform) {
            this.rule.transform = {};
        }
        this.rule.transform.Scale = { x: sx, y: isUndefined(sy) ? sx : sy };
        return this;
    }
    scale3d(sx, sy, sz) {
        if (!this.rule.transform) {
            this.rule.transform = {};
        }
        this.rule.transform.Scale = { x: sx, y: sy, z: sz };
        return this;
    }
    scaleX(scale) {
        if (!this.rule.transform) {
            this.rule.transform = {};
        }
        this.rule.transform.Scale = { x: scale };
        return this;
    }
    scaleY(scale) {
        if (!this.rule.transform) {
            this.rule.transform = {};
        }
        this.rule.transform.Scale = { y: scale };
        return this;
    }
    scaleZ(scale) {
        if (!this.rule.transform) {
            this.rule.transform = {};
        }
        this.rule.transform.Scale = { z: scale };
        return this;
    }
    skew(ax, ay) {
        temporarilyNotSupport('animation.skew:' + `${ax}, ${ay}`)(ax, ay);
        return this;
    }
    skewX(angle) {
        temporarilyNotSupport('animation.skewX:' + angle)(angle);
        return this;
    }
    skewY(angle) {
        temporarilyNotSupport('animation.skewY:' + angle)(angle);
        return this;
    }
    translate(tx, ty) {
        if (!this.rule.transform) {
            this.rule.transform = {};
        }
        this.rule.transform.Translate = { x: tx, y: ty };
        return this;
    }
    translate3d(tx, ty, tz) {
        if (!this.rule.transform) {
            this.rule.transform = {};
        }
        this.rule.transform.Translate = { x: tx, y: ty, z: tz };
        return this;
    }
    translateX(translation) {
        if (!this.rule.transform) {
            this.rule.transform = {};
        }
        this.rule.transform.Translate = { x: translation };
        return this;
    }
    translateY(translation) {
        if (!this.rule.transform) {
            this.rule.transform = {};
        }
        this.rule.transform.Translate = { y: translation };
        return this;
    }
    translateZ(translation) {
        if (!this.rule.transform) {
            this.rule.transform = {};
        }
        this.rule.transform.Translate = { z: translation };
        return this;
    }
    opacity(value) {
        this.rule.opacity = value;
        return this;
    }
    backgroundColor(value) {
        this.rule.backgroundColor = value;
        return this;
    }
    width(value) {
        this.rule.width = value;
        return this;
    }
    height(value) {
        this.rule.height = value;
        return this;
    }
    left(value) {
        this.rule.left = value;
        return this;
    }
    right(value) {
        temporarilyNotSupport('animation.right:' + value)(value);
        return this;
    }
    top(value) {
        this.rule.top = value;
        return this;
    }
    bottom(value) {
        temporarilyNotSupport('animation.bottom:' + value)(value);
        return this;
    }
}

const createAnimation = (option) => {
    return new Animation(option);
};

const setBackgroundTextStyle = /* @__PURE__ */ temporarilyNotSupport('setBackgroundTextStyle');
function setBackgroundColor(options) {
    const { success, fail, complete } = options || {};
    const handle = new MethodHandler({ name: 'setBackgroundColor', success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger('__taroPageStyle', {
            backgroundColor: options.backgroundColorBottom || options.backgroundColor,
            backgroundColorContext: options.backgroundColorTop || options.backgroundColor
        });
        return handle.success({}, { resolve, reject });
    });
}

// 自定义组件
const nextTick = (cb, ctx) => {
    setTimeout(function () {
        ctx ? cb.call(ctx) : cb();
    }, 1);
};

// 字体
const loadFontFace = /* @__PURE__ */ temporarilyNotSupport('getMenuButtonBoundingClientRect');

const resCallback = (res) => {
    return { errMsg: `${res}:ok` };
};
const showToastSchema = {
    title: 'String',
    duration: 'Number',
    bottom: 'String'
};
function showToast(options) {
    return new Promise((resolve, reject) => {
        const _default = {
            title: '',
            duration: 1500,
            bottom: '50%'
        };
        options = Object.assign(Object.assign({}, _default), options);
        try {
            validateParams('showToast', options, showToastSchema);
        }
        catch (error) {
            const res = { errMsg: error.message };
            return callAsyncFail(reject, res, options);
        }
        promptAction.showToast({
            message: options.title,
            duration: options.duration,
            bottom: options.bottom,
            showMode: 1 // 设置弹窗显示模式，显示在应用之上。
        });
        callAsyncSuccess(resolve, resCallback('showToast'), options);
    });
}
function showModal(options) {
    const _default = {
        title: '',
        content: '',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F'
    };
    options = Object.assign(Object.assign({}, _default), options);
    const { title, content, cancelText, confirmText, cancelColor, confirmColor, showCancel } = options;
    const buttons = [];
    if (cancelText !== '' && showCancel) {
        buttons.push({
            text: cancelText,
            color: cancelColor
        });
    }
    if (confirmText !== '') {
        buttons.push({
            text: confirmText,
            color: confirmColor
        });
    }
    return new Promise((resolve, reject) => {
        const modalOptions = {
            title,
            message: content,
            buttons: buttons,
        };
        promptAction.showDialog(modalOptions, (error, data) => {
            if (error) {
                const res = { errMsg: error };
                callAsyncFail(reject, res, options);
            }
            if (data.index === 0 && showCancel) {
                callAsyncSuccess(resolve, Object.assign(Object.assign({}, resCallback('showModal')), { confirm: false, cancel: true }), options);
            }
            else {
                callAsyncSuccess(resolve, Object.assign(Object.assign({}, resCallback('showModal')), { confirm: true, cancel: false, content: null }), options);
            }
        });
    });
}
const showActionSheetSchema = {
    title: 'String',
    itemList: 'Array'
};
function showActionSheet(options) {
    return new Promise((resolve, reject) => {
        const _default = {
            title: '',
            itemList: [],
            itemColor: '#000000'
        };
        options = Object.assign(Object.assign({}, _default), options);
        try {
            validateParams('showActionSheet', options, showActionSheetSchema);
        }
        catch (error) {
            const res = { errMsg: error.message };
            return callAsyncFail(reject, res, options);
        }
        const { title, itemList, itemColor } = options;
        const buttons = itemList.map(res => {
            return {
                text: res,
                color: itemColor
            };
        });
        const actionSheetOptions = {
            title,
            buttons
        };
        promptAction.showActionMenu(actionSheetOptions, (error, data) => {
            var _a;
            if (error) {
                callAsyncFail(reject, Object.assign(Object.assign({}, data), { errMsg: (_a = data.errMsg) === null || _a === void 0 ? void 0 : _a.replace('showActionMenu', 'showActionSheet') }), options);
            }
            callAsyncSuccess(resolve, Object.assign(Object.assign({}, data), resCallback('showActionSheet')), options);
        });
    });
}
const hideToast = /* @__PURE__ */ temporarilyNotSupport('hideToast');
const showLoading = temporarilyNotSupport('showLoading');
const hideLoading = temporarilyNotSupport('hideLoading');
const enableAlertBeforeUnload = /* @__PURE__ */ temporarilyNotSupport('enableAlertBeforeUnload');
const disableAlertBeforeUnload = /* @__PURE__ */ temporarilyNotSupport('disableAlertBeforeUnload');

// 菜单
const getMenuButtonBoundingClientRect = /* @__PURE__ */ temporarilyNotSupport('getMenuButtonBoundingClientRect');

const setNavigationBarTitle = function (options) {
    const { success, fail, complete } = options || {};
    const handle = new MethodHandler({ name: 'setNavigationBarTitle', success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger('__taroNavigationStyle', {
            title: options.title,
        });
        return handle.success({}, { resolve, reject });
    });
};
const setNavigationBarColor = function (options) {
    const { success, fail, complete } = options || {};
    const handle = new MethodHandler({ name: 'setNavigationBarColor', success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger('__taroNavigationStyle', {
            animation: options.animation,
            backgroundColor: options.backgroundColor,
            frontColor: options.frontColor,
        });
        return handle.success({}, { resolve, reject });
    });
};
const showNavigationBarLoading = function (options) {
    const { success, fail, complete } = options || {};
    const handle = new MethodHandler({ name: 'showNavigationBarLoading', success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger('__taroNavigationStyle', {
            loading: true,
        });
        return handle.success({}, { resolve, reject });
    });
};
const hideNavigationBarLoading = function (options) {
    const { success, fail, complete } = options || {};
    const handle = new MethodHandler({ name: 'hideNavigationBarLoading', success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger('__taroNavigationStyle', {
            loading: false,
        });
        return handle.success({}, { resolve, reject });
    });
};
const hideHomeButton = function (options) {
    const { success, fail, complete } = options || {};
    const handle = new MethodHandler({ name: 'hideHomeButton', success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger('__taroNavigationStyle', {
            home: false,
        });
        return handle.success({}, { resolve, reject });
    });
};

const startPullDownRefresh = function (options) {
    return new Promise((resolve, reject) => {
        var _a;
        const taro = Current.taro;
        const page = taro.getCurrentInstance().page;
        if (!page) {
            return callAsyncFail(reject, { errMsg: 'stopPullDownRefresh:fail' }, options);
        }
        if (page.isRefreshing instanceof Array) {
            const index = page.tabBarCurrentIndex || 0;
            page.isRefreshing[index] = true;
        }
        else {
            page.isRefreshing = true;
        }
        const res = { errMsg: 'startPullDownRefresh:ok' };
        (_a = page.$set) === null || _a === void 0 ? void 0 : _a.call(page, 'isRefreshing', true);
        callAsyncSuccess(resolve, res, options);
    });
};
const stopPullDownRefresh = function (options) {
    return new Promise((resolve, reject) => {
        var _a;
        const taro = Current.taro;
        const page = taro.getCurrentInstance().page;
        if (!page) {
            return callAsyncFail(reject, { errMsg: 'stopPullDownRefresh:fail' }, options);
        }
        if (page.isRefreshing instanceof Array) {
            const index = page.tabBarCurrentIndex || 0;
            page.isRefreshing[index] = false;
        }
        else {
            page.isRefreshing = false;
        }
        const res = { errMsg: 'stopPullDownRefresh:ok' };
        (_a = page.$set) === null || _a === void 0 ? void 0 : _a.call(page, 'isRefreshing', false);
        callAsyncSuccess(resolve, res, options);
    });
};

/**
 * 将页面滚动到目标位置
 */
const pageScrollTo = (options) => {
    const { scrollTop, selector = '', duration = 300, offsetTop = 0, success, fail, complete } = options || {};
    const handle = new MethodHandler({ name: 'pageScrollTo', success, fail, complete });
    // eslint-disable-next-line no-async-promise-executor
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        if (scrollTop === undefined && !selector) {
            return handle.fail({
                errMsg: 'scrollTop" 或 "selector" 需要其之一'
            }, { resolve, reject });
        }
        if (scrollTop && selector) {
            console.warn('"scrollTop" 或 "selector" 建议只设一个值，全部设置会忽略selector');
        }
        const taro = Current.taro;
        const page = taro.getCurrentInstance().page;
        let scrollValue = -1;
        let scroller = getPageScrollerOrNode(page === null || page === void 0 ? void 0 : page.scroller, page);
        const currentPageNode = getPageScrollerOrNode(page === null || page === void 0 ? void 0 : page.node, page);
        if (scrollTop || typeof scrollTop === 'number') {
            scrollValue = scrollTop;
        }
        else if (selector) {
            const node = findChildNodeWithDFS(currentPageNode, selector);
            if (!node)
                return;
            // 获取 areaInfo，需要先调用 setNodeEventCallbackAndTriggerComponentUpdate 更新一次组件并获取组件信息
            yield setNodeEventCallbackAndTriggerComponentUpdate(node, AREA_CHANGE_EVENT_NAME, null, true);
            const { areaInfo } = node._nodeInfo || {};
            let parent = node === null || node === void 0 ? void 0 : node.parentNode;
            while (!!parent && parent !== currentPageNode) {
                if (parent === null || parent === void 0 ? void 0 : parent.scroller) {
                    scroller = parent.scroller;
                    break;
                }
                parent = parent === null || parent === void 0 ? void 0 : parent.parentNode;
            }
            scroller = getPageScrollerOrNode(scroller, page);
            const { yOffset } = scroller.currentOffset();
            if (areaInfo) {
                scrollValue = areaInfo.globalPosition.y + yOffset + pxTransformHelper$1(offsetTop, 'px', true);
            }
        }
        if (!scroller || scrollValue === -1) {
            return handle.fail({
                errMsg: '请检查传入的 scrollTop 或 selector 是否合法'
            }, { resolve, reject });
        }
        const { xOffset } = scroller.currentOffset();
        try {
            scroller.scrollTo({
                xOffset,
                yOffset: scrollValue,
                animation: {
                    duration: duration,
                    // @ts-ignore
                    curve: Curve.Linear
                }
            });
            setTimeout(() => {
                handle.success({}, { resolve, reject });
            }, duration);
        }
        catch (err) {
            return handle.fail({
                errMsg: err.message
            }, { resolve, reject });
        }
    }));
};

// 置顶
const setTopBarText = /* @__PURE__ */ temporarilyNotSupport('setTopBarText');

const toggleTabBar = function (type) {
    return function (options) {
        return new Promise((resolve, reject) => {
            var _a, _b;
            const taro = Current.taro;
            const page = taro.getCurrentInstance().page;
            const currentData = ((_a = page === null || page === void 0 ? void 0 : page._data) === null || _a === void 0 ? void 0 : _a.taroTabBar) || (page === null || page === void 0 ? void 0 : page.tabBar);
            const res = { errMsg: `${type}TabBar:ok` };
            const error = { errMsg: `${type}TabBar:fail not TabBar page` };
            if (!currentData) {
                callAsyncFail(reject, error, options);
            }
            else {
                const isShow = type === 'show';
                const event = isShow ? '__taroShowTabBar' : '__taroHideTabBar';
                eventCenter.trigger(event, {
                    animation: options === null || options === void 0 ? void 0 : options.animation,
                });
                (_b = page.$set) === null || _b === void 0 ? void 0 : _b.call(page, 'isShowTaroTabBar', isShow);
                callAsyncSuccess(resolve, res, options);
            }
        });
    };
};
const showTabBar = toggleTabBar('show');
const hideTabBar = toggleTabBar('hide');
const setTabBarStyle = function (options = {}) {
    return new Promise((resolve, reject) => {
        var _a, _b;
        const taro = Current.taro;
        const page = taro.getCurrentInstance().page;
        const currentData = ((_a = page === null || page === void 0 ? void 0 : page._data) === null || _a === void 0 ? void 0 : _a.taroTabBar) || (page === null || page === void 0 ? void 0 : page.tabBar);
        const res = { errMsg: 'setTabBarStyle:ok' };
        const error = { errMsg: 'setTabBarStyle:fail not TabBar page' };
        if (!currentData) {
            callAsyncFail(reject, error, options);
        }
        else {
            const data = Object.assign({}, currentData);
            if (options.color)
                data.color = options.color;
            if (options.selectedColor)
                data.selectedColor = options.selectedColor;
            if (options.backgroundColor)
                data.backgroundColor = options.backgroundColor;
            if (options.borderStyle)
                data.borderStyle = options.borderStyle;
            eventCenter.trigger('__taroSetTabBarStyle', options);
            (_b = page.$set) === null || _b === void 0 ? void 0 : _b.call(page, 'taroTabBar', data);
            callAsyncSuccess(resolve, res, options);
        }
    });
};
const setTabBarItem = function (options) {
    return new Promise((resolve, reject) => {
        var _a, _b;
        const taro = Current.taro;
        const page = taro.getCurrentInstance().page;
        const currentData = ((_a = page === null || page === void 0 ? void 0 : page._data) === null || _a === void 0 ? void 0 : _a.taroTabBar) || (page === null || page === void 0 ? void 0 : page.tabBar);
        const res = { errMsg: 'setTabBarItem:ok' };
        const error = { errMsg: 'setTabBarItem:fail not TabBar page' };
        if (!currentData) {
            callAsyncFail(reject, error, options);
        }
        else {
            const index = options.index;
            const item = Object.assign({}, currentData.list[index]);
            if (options.text)
                item.text = options.text;
            if (options.iconPath)
                item.iconPath = options.iconPath;
            if (options.selectedIconPath)
                item.selectedIconPath = options.selectedIconPath;
            const list = [
                ...currentData.list.slice(0, index),
                item,
                ...currentData.list.slice(index + 1)
            ];
            const data = Object.assign({}, currentData, { list });
            eventCenter.trigger('__taroSetTabBarItem', options);
            (_b = page.$set) === null || _b === void 0 ? void 0 : _b.call(page, 'taroTabBar', data);
            callAsyncSuccess(resolve, res, options);
        }
    });
};
function showTabBarRedDot(options) {
    const res = { errMsg: 'showTabBarRedDot:ok' };
    return new Promise((resolve) => {
        eventCenter.trigger('__taroShowTabBarRedDotHandler', {
            index: (options === null || options === void 0 ? void 0 : options.index) || 0,
        });
        callAsyncSuccess(resolve, res, options);
    });
}
function hideTabBarRedDot(options) {
    const res = { errMsg: 'hideTabBarRedDot:ok' };
    return new Promise((resolve) => {
        eventCenter.trigger('__taroHideTabBarRedDotHandler', {
            index: (options === null || options === void 0 ? void 0 : options.index) || 0,
        });
        callAsyncSuccess(resolve, res, options);
    });
}
function setTabBarBadge(options) {
    const res = { errMsg: 'setTabBarBadge:ok' };
    return new Promise((resolve) => {
        const text = (options === null || options === void 0 ? void 0 : options.text) || '';
        eventCenter.trigger('__taroSetTabBarBadge', {
            index: (options === null || options === void 0 ? void 0 : options.index) || 0,
            text: text.replace(/[\u0391-\uFFE5]/g, 'aa').length > 4 ? '...' : text,
        });
        callAsyncSuccess(resolve, res, options);
    });
}
function removeTabBarBadge(options) {
    const res = { errMsg: 'removeTabBarBadge:ok' };
    return new Promise((resolve) => {
        eventCenter.trigger('__taroRemoveTabBarBadge', {
            index: (options === null || options === void 0 ? void 0 : options.index) || 0,
        });
        callAsyncSuccess(resolve, res, options);
    });
}

/**
 * 设置窗口大小，该接口仅适用于 PC 平台，使用细则请参见指南
 */
const setWindowSize = /* @__PURE__ */ temporarilyNotSupport('setWindowSize');
/**
 * 监听窗口尺寸变化事件
 */
const onWindowResize = /* @__PURE__ */ temporarilyNotSupport('onWindowResize');
/**
 * 取消监听窗口尺寸变化事件
 */
const offWindowResize = /* @__PURE__ */ temporarilyNotSupport('offWindowResize');
const checkIsPictureInPictureActive = /* @__PURE__ */ temporarilyNotSupport('checkIsPictureInPictureActive');

// Worker
const createWorker = /* @__PURE__ */ temporarilyNotSupport('createWorker');

class IntersectionObserver {
    constructor(component, options = {}) {
        // 选项
        this._options = {
            thresholds: [0],
            initialRatio: 0,
            observeAll: false
        };
        const taro = Current.taro;
        const page = taro.getCurrentInstance().page;
        this._component = component || getPageScrollerOrNode(page === null || page === void 0 ? void 0 : page.node, page);
        Object.assign(this._options, options);
    }
    disconnect() {
        if (this._observerNodes && this._component) {
            if (this._observerNodes instanceof Array) {
                this._observerNodes.forEach((n) => {
                    disconnectEvent(n, VISIBLE_CHANGE_EVENT_NAME);
                    // @ts-ignore
                    n._nodeInfo.thresholds = null;
                });
            }
            else {
                disconnectEvent(this._observerNodes, VISIBLE_CHANGE_EVENT_NAME);
                // @ts-ignore
                if (this._observerNodes._nodeInfo) {
                    // @ts-ignore
                    this._observerNodes._nodeInfo.thresholds = null;
                }
            }
        }
    }
    observe(targetSelector, callback) {
        if (!this._component)
            return;
        const { observeAll, thresholds } = this._options;
        const node = findChildNodeWithDFS(this._component, targetSelector, observeAll);
        this._observerNodes = node;
        if (node) {
            if (node instanceof Array) {
                node.forEach(n => {
                    // @ts-ignore
                    n._nodeInfo.thresholds = thresholds;
                    setNodeEventCallbackAndTriggerComponentUpdate(n, VISIBLE_CHANGE_EVENT_NAME, (isVisible, currentRatio) => {
                        callback(this.handleResult(isVisible, currentRatio, n));
                    });
                });
            }
            else {
                // @ts-ignore
                node._nodeInfo.thresholds = thresholds;
                setNodeEventCallbackAndTriggerComponentUpdate(node, VISIBLE_CHANGE_EVENT_NAME, (isVisible, currentRatio) => {
                    callback(this.handleResult(isVisible, currentRatio, node));
                });
            }
        }
        else {
            callback({
                errMsg: 'IntersectionObserver.observe:fail cannot find the node for selector.'
            });
        }
    }
    relativeTo() {
        temporarilyNotSupport('relativeTo')();
        return this;
    }
    relativeToViewport() {
        temporarilyNotSupport('relativeToViewport')();
        return this;
    }
    // @ts-ignore
    handleResult(isVisible, currentRatio, node) {
        const result = {
            id: node.id,
            dataset: node.dataset,
            intersectionRatio: currentRatio,
            // TODO 未做，等待能拿到element的info信息
            boundingClientRect: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                height: 0,
                width: 0
            },
            // TODO 未做，等待能拿到element和监听_component的info信息做运算
            intersectionRect: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                height: 0,
                width: 0
            },
            // TODO 未做，等待能拿到element和监听_component的info信息做运算
            relativeRect: { left: 0, right: 0, top: 0, bottom: 0 },
            time: new Date().getTime()
        };
        return result;
    }
}

class NodesRef {
    constructor(selector, querySelectorQuery, single) {
        this._component = querySelectorQuery._component;
        this._selector = selector;
        this._selectorQuery = querySelectorQuery;
        this._single = single;
    }
    context(cb) {
        const { _selector, _component, _single, _selectorQuery } = this;
        _selectorQuery._push(_selector, _component, _single, { context: !0 }, cb);
        return _selectorQuery;
    }
    node(cb) {
        const { _selector, _component, _single, _selectorQuery } = this;
        _selectorQuery._push(_selector, _component, _single, { nodeCanvasType: !0, node: !0 }, cb);
        return _selectorQuery;
    }
    boundingClientRect(cb) {
        const { _selector, _component, _single, _selectorQuery } = this;
        _selectorQuery._push(_selector, _component, _single, { id: !0, dataset: !0, rect: !0, size: !0 }, cb);
        return _selectorQuery;
    }
    scrollOffset(cb) {
        const { _selector, _component, _single, _selectorQuery } = this;
        _selectorQuery._push(_selector, _component, _single, { id: !0, dataset: !0, scrollOffset: !0 }, cb);
        return _selectorQuery;
    }
    fields(fields, cb) {
        const { _selector, _component, _single, _selectorQuery } = this;
        const { id, dataset, rect, size, scrollOffset, properties = [], computedStyle = [] } = fields;
        _selectorQuery._push(_selector, _component, _single, {
            id,
            dataset,
            rect,
            size,
            scrollOffset,
            properties,
            computedStyle
        }, cb);
        return _selectorQuery;
    }
}

let arr = [];
// 深度搜索 rootDom 下的所有节点，存放在 arr 中
function traversalDFSDom(rootDom) {
    if (!rootDom)
        return;
    arr.push(rootDom);
    if (rootDom.childNodes.length === 0)
        return;
    for (let i = 0; i < rootDom.childNodes.length; i++) {
        traversalDFSDom(rootDom.childNodes[i]);
    }
}
// 从 arr 中寻找所有符合 selector 的节点
function parseHandler(selector, selectAll) {
    var _a;
    const domList = [];
    if (arr.length === 0)
        return null;
    let selectedId, clsList;
    switch (selector.charAt(0)) {
        case '#': // id selector
            selectedId = selector.substring(1);
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id === selectedId) {
                    domList.push(arr[i]);
                    if (!selectAll) {
                        break;
                    }
                }
            }
            break;
        case '.':
            clsList = selector.split('.').filter((item) => item !== '');
            if (clsList.length === 0)
                break;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < clsList.length; j++) {
                    if ((_a = arr[i].className) === null || _a === void 0 ? void 0 : _a.includes(clsList[j])) {
                        domList.push(arr[i]);
                        if (!selectAll) {
                            break;
                        }
                    }
                }
            }
            break;
        default:
            console.warn('unSupport selector');
            break;
    }
    if (selectAll) {
        return domList;
    }
    else if (domList.length > 0) {
        return [domList[0]];
    }
    return [];
}
// 从 TaroNode 里找到对应的 fields 内容
function filter(fields, dom) {
    if (!dom)
        return null;
    const { id, 
    // dataset,
    rect, size, scrollOffset, properties = [], computedStyle = [], nodeCanvasType, node, context } = fields;
    const res = {};
    if (nodeCanvasType && node) { // Node节点获取处理
        const typeName = dom.nodeName;
        res.node = {
            id: dom.id,
            $taroElement: dom
        };
        if (/^canvas/i.test(typeName)) {
            // harmony todo canvas attr type
            const canvasType = dom._attrs.type || '';
            res.nodeCanvasType = canvasType;
            if (/^(2d|webgl)/i.test(canvasType) && dom) {
                res.node = dom;
            }
            else {
                res.node = null;
            }
        }
        else {
            // TODO https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html
            // if (/^taro-scroll-view-core/i.test(tagName))
            res.nodeCanvasType = '';
            res.node = dom;
        }
        return res;
    }
    if (id)
        res.id = dom.id;
    // TODO harmony dataset
    // if (dataset) res.dataset = Object.assign({}, dom.dataset)
    if (rect || size) {
        const { areaInfo } = (dom === null || dom === void 0 ? void 0 : dom._nodeInfo) || {};
        if (areaInfo) {
            if (rect) {
                res.top = vp2px(areaInfo.globalPosition.y);
                res.left = vp2px(areaInfo.globalPosition.x);
                res.right = vp2px(areaInfo.globalPosition.x + areaInfo.width);
                res.bottom = vp2px(areaInfo.globalPosition.y + areaInfo.height);
            }
            if (size) {
                res.width = vp2px(areaInfo.width);
                res.height = vp2px(areaInfo.height);
            }
        }
    }
    if (scrollOffset) {
        const scroller = dom.scroller;
        if (scroller) {
            const { xOffset, yOffset } = scroller.currentOffset();
            res.scrollLeft = vp2px(xOffset);
            res.scrollTop = vp2px(yOffset);
        }
    }
    if (properties.length) {
        properties.forEach(prop => {
            const attrs = dom._attrs;
            if (attrs[prop])
                res[prop] = attrs[prop];
        });
    }
    if (computedStyle.length) {
        const styles = dom._st;
        computedStyle.forEach(key => {
            const value = styles[key];
            if (value)
                res[key] = value;
        });
    }
    return res;
}
function querySelector(selector, selectAll) {
    if (typeof selector === 'string') {
        return selector.split(',').reduce((prev, current) => {
            const item = current.trim();
            return prev.concat(parseHandler(item, selectAll));
        }, []);
    }
    return [];
}
function queryBat(queue, cb) {
    const result = [];
    const taro = Current.taro;
    const page = taro.getCurrentInstance().page;
    const element = getPageScrollerOrNode(page === null || page === void 0 ? void 0 : page.node, page);
    if (!element)
        return null;
    arr = [];
    traversalDFSDom(element);
    queue.forEach((item) => {
        const { selector, single, fields } = item;
        if (single) {
            const dom = querySelector(selector, !single)[0];
            // eslint-disable-next-line no-async-promise-executor
            result.push(new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                yield setNodeEventCallbackAndTriggerComponentUpdate(dom, AREA_CHANGE_EVENT_NAME, null, true);
                resolve(filter(fields, dom));
            })));
        }
        else {
            const nodeList = querySelector(selector, !single);
            result.push(nodeList.map(dom => {
                // eslint-disable-next-line no-async-promise-executor
                return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                    yield setNodeEventCallbackAndTriggerComponentUpdate(dom, AREA_CHANGE_EVENT_NAME, null, true);
                    resolve(filter(fields, dom));
                }));
            }));
        }
    });
    Promise.all(result.map(item => {
        return item instanceof Array ? Promise.all(item) : item;
    })).then(data => {
        cb(data);
    });
}
class SelectorQuery {
    constructor() {
        /**
         * 设置选择器的选取范围
         * @param component 指定组件
         * @return selectQuery 返回查询对象
         */
        this.in = (_) => {
            this._component = null;
            console.warn('暂不支持 in 操作');
            // this._component = component
            return this;
        };
        this._queue = [];
        this._queueCb = [];
        // this._component
    }
    /**
     * 在当前页面下选择第一个匹配选择器selector的节点
     * @param selector
     * @return nodesRef 返回一个NodesRef 对象实例，可以用于获取节点信息
     */
    select(selector) {
        return new NodesRef(selector, this, true);
    }
    /**
     * 在当前页面下选择匹配选择器selector的所有节点
     * @param selector
     */
    selectAll(selector) {
        return new NodesRef(selector, this, false);
    }
    /**
     * 选择显示区域。可用于获取显示区域的尺寸、滚动位置等信息
     */
    selectViewport() {
        return new NodesRef('.taro_page', this, true);
    }
    exec(cb) {
        queryBat(this._queue, res => {
            const _queueCb = this._queueCb;
            res.forEach((item, index) => {
                const cb = _queueCb[index];
                typeof cb === 'function' && cb.call(this, item);
            });
            typeof cb === 'function' && cb.call(this, res);
        });
        return this;
    }
    _push(selector, component, single, fields, callback = null) {
        this._queue.push({
            component,
            selector,
            single,
            fields
        });
        this._queueCb.push(callback);
    }
}

const createSelectorQuery = () => {
    return new SelectorQuery();
};
const createIntersectionObserver = (component, options) => {
    return new IntersectionObserver(component, options);
};
const createMediaQueryObserver = /* @__PURE__ */ temporarilyNotSupport('createMediaQueryObserver');

var apis = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Current: Current,
  ENV_TYPE: ENV_TYPE,
  Events: Events,
  History: History,
  IntersectionObserver: IntersectionObserver,
  addCard: addCard,
  addFileToFavorites: addFileToFavorites,
  addPhoneCalendar: addPhoneCalendar,
  addPhoneContact: addPhoneContact,
  addPhoneRepeatCalendar: addPhoneRepeatCalendar,
  addVideoToFavorites: addVideoToFavorites,
  arrayBufferToBase64: arrayBufferToBase64,
  authPrivateMessage: authPrivateMessage,
  authorize: authorize,
  authorizeForMiniProgram: authorizeForMiniProgram,
  base64ToArrayBuffer: base64ToArrayBuffer,
  batchGetStorage: batchGetStorage,
  batchGetStorageSync: batchGetStorageSync,
  batchSetStorage: batchSetStorage,
  batchSetStorageSync: batchSetStorageSync,
  canIUse: canIUse,
  canvasGetImageData: canvasGetImageData,
  canvasPutImageData: canvasPutImageData,
  canvasToTempFilePath: canvasToTempFilePath,
  checkIsAddedToMyMiniProgram: checkIsAddedToMyMiniProgram,
  checkIsOpenAccessibility: checkIsOpenAccessibility,
  checkIsPictureInPictureActive: checkIsPictureInPictureActive,
  checkIsSoterEnrolledInDevice: checkIsSoterEnrolledInDevice,
  checkIsSupportFacialRecognition: checkIsSupportFacialRecognition,
  checkIsSupportSoterAuthentication: checkIsSupportSoterAuthentication,
  checkSession: checkSession,
  chooseAddress: chooseAddress,
  chooseContact: chooseContact,
  chooseImage: chooseImage,
  chooseInvoice: chooseInvoice,
  chooseInvoiceTitle: chooseInvoiceTitle,
  chooseLicensePlate: chooseLicensePlate,
  chooseLocation: chooseLocation,
  chooseMedia: chooseMedia,
  choosePoi: choosePoi,
  chooseVideo: chooseVideo,
  clearStorage: clearStorage,
  clearStorageSync: clearStorageSync,
  closeBLEConnection: closeBLEConnection,
  closeBluetoothAdapter: closeBluetoothAdapter,
  compressImage: compressImage,
  compressVideo: compressVideo,
  connectSocket: connectSocket,
  connectWifi: connectWifi,
  createAnimation: createAnimation,
  createAudioContext: createAudioContext,
  createBLEConnection: createBLEConnection,
  createBLEPeripheralServer: createBLEPeripheralServer,
  createBufferURL: createBufferURL,
  createCacheManager: createCacheManager,
  createCameraContext: createCameraContext,
  createCanvasContext: createCanvasContext,
  createInnerAudioContext: createInnerAudioContext,
  createIntersectionObserver: createIntersectionObserver,
  createLivePlayerContext: createLivePlayerContext,
  createLivePusherContext: createLivePusherContext,
  createMapContext: createMapContext,
  createMediaAudioPlayer: createMediaAudioPlayer,
  createMediaContainer: createMediaContainer,
  createMediaQueryObserver: createMediaQueryObserver,
  createMediaRecorder: createMediaRecorder,
  createOffscreenCanvas: createOffscreenCanvas,
  createSelectorQuery: createSelectorQuery,
  createTCPSocket: createTCPSocket,
  createUDPSocket: createUDPSocket,
  createVideoContext: createVideoContext,
  createVideoDecoder: createVideoDecoder,
  createWebAudioContext: createWebAudioContext,
  createWorker: createWorker,
  disableAlertBeforeUnload: disableAlertBeforeUnload,
  downloadFile: downloadFile,
  enableAlertBeforeUnload: enableAlertBeforeUnload,
  eventCenter: eventCenter,
  exitMiniProgram: exitMiniProgram,
  exitVoIPChat: exitVoIPChat,
  faceVerifyForPay: faceVerifyForPay,
  getAccountInfoSync: getAccountInfoSync,
  getAvailableAudioSources: getAvailableAudioSources,
  getBLEDeviceCharacteristics: getBLEDeviceCharacteristics,
  getBLEDeviceRSSI: getBLEDeviceRSSI,
  getBLEDeviceServices: getBLEDeviceServices,
  getBLEMTU: getBLEMTU,
  getBackgroundAudioManager: getBackgroundAudioManager,
  getBackgroundAudioPlayerState: getBackgroundAudioPlayerState,
  getBackgroundFetchData: getBackgroundFetchData,
  getBackgroundFetchToken: getBackgroundFetchToken,
  getBatteryInfo: getBatteryInfo,
  getBatteryInfoSync: getBatteryInfoSync,
  getBeacons: getBeacons,
  getBluetoothAdapterState: getBluetoothAdapterState,
  getBluetoothDevices: getBluetoothDevices,
  getChannelsLiveInfo: getChannelsLiveInfo,
  getChannelsLiveNoticeInfo: getChannelsLiveNoticeInfo,
  getChannelsShareKey: getChannelsShareKey,
  getClipboardData: getClipboardData,
  getConnectedBluetoothDevices: getConnectedBluetoothDevices,
  getConnectedWifi: getConnectedWifi,
  getCurrentInstance: getCurrentInstance,
  getCurrentPages: getCurrentPages,
  getDeviceVoIPList: getDeviceVoIPList,
  getEnterOptionsSync: getEnterOptionsSync,
  getEnv: getEnv,
  getExptInfoSync: getExptInfoSync,
  getExtConfig: getExtConfig,
  getExtConfigSync: getExtConfigSync,
  getFileInfo: getFileInfo,
  getFileSystemManager: getFileSystemManager,
  getFuzzyLocation: getFuzzyLocation,
  getGroupEnterInfo: getGroupEnterInfo,
  getHCEState: getHCEState,
  getImageInfo: getImageInfo,
  getLaunchOptionsSync: getLaunchOptionsSync,
  getLocalIPAddress: getLocalIPAddress,
  getLocation: getLocation,
  getLogManager: getLogManager,
  getMenuButtonBoundingClientRect: getMenuButtonBoundingClientRect,
  getNFCAdapter: getNFCAdapter,
  getNetworkType: getNetworkType,
  getPerformance: getPerformance,
  getPrivacySetting: getPrivacySetting,
  getRandomValues: getRandomValues,
  getRealtimeLogManager: getRealtimeLogManager,
  getRecorderManager: getRecorderManager,
  getSavedFileInfo: getSavedFileInfo,
  getSavedFileList: getSavedFileList,
  getScreenBrightness: getScreenBrightness,
  getScreenRecordingState: getScreenRecordingState,
  getSelectedTextRange: getSelectedTextRange,
  getSetting: getSetting,
  getShareChannelId: getShareChannelId,
  getShareChannelIdSE: getShareChannelIdSE,
  getShareInfo: getShareInfo,
  getStorage: getStorage,
  getStorageInfo: getStorageInfo,
  getStorageInfoSync: getStorageInfoSync,
  getStorageSync: getStorageSync,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfoSync,
  getUpdateManager: getUpdateManager,
  getUserCryptoManager: getUserCryptoManager,
  getUserInfo: getUserInfo,
  getUserProfile: getUserProfile,
  getVideoInfo: getVideoInfo,
  getWeRunData: getWeRunData,
  getWifiList: getWifiList,
  hideHomeButton: hideHomeButton,
  hideKeyboard: hideKeyboard,
  hideLoading: hideLoading,
  hideNavigationBarLoading: hideNavigationBarLoading,
  hideShareMenu: hideShareMenu,
  hideTabBar: hideTabBar,
  hideTabBarRedDot: hideTabBarRedDot,
  hideToast: hideToast,
  isBluetoothDevicePaired: isBluetoothDevicePaired,
  join1v1Chat: join1v1Chat,
  joinVoIPChat: joinVoIPChat,
  loadFontFace: loadFontFace,
  login: login,
  logout: logout,
  makeBluetoothPair: makeBluetoothPair,
  makePhoneCall: makePhoneCall,
  navigateBack: navigateBack,
  navigateBackMiniProgram: navigateBackMiniProgram,
  navigateTo: navigateTo,
  navigateToMiniProgram: navigateToMiniProgram,
  nextTick: nextTick,
  notifyBLECharacteristicValueChange: notifyBLECharacteristicValueChange,
  offAccelerometerChange: offAccelerometerChange,
  offAppHide: offAppHide,
  offAppShow: offAppShow,
  offAudioInterruptionBegin: offAudioInterruptionBegin,
  offAudioInterruptionEnd: offAudioInterruptionEnd,
  offBLECharacteristicValueChange: offBLECharacteristicValueChange,
  offBLEConnectionStateChange: offBLEConnectionStateChange,
  offBLEMTUChange: offBLEMTUChange,
  offBLEPeripheralConnectionStateChanged: offBLEPeripheralConnectionStateChanged,
  offBeaconServiceChange: offBeaconServiceChange,
  offBeaconUpdate: offBeaconUpdate,
  offBluetoothAdapterStateChange: offBluetoothAdapterStateChange,
  offBluetoothDeviceFound: offBluetoothDeviceFound,
  offCompassChange: offCompassChange,
  offCopyUrl: offCopyUrl,
  offDeviceMotionChange: offDeviceMotionChange,
  offError: offError,
  offGetWifiList: offGetWifiList,
  offGyroscopeChange: offGyroscopeChange,
  offHCEMessage: offHCEMessage,
  offKeyboardHeightChange: offKeyboardHeightChange,
  offLazyLoadError: offLazyLoadError,
  offLocalServiceDiscoveryStop: offLocalServiceDiscoveryStop,
  offLocalServiceFound: offLocalServiceFound,
  offLocalServiceLost: offLocalServiceLost,
  offLocalServiceResolveFail: offLocalServiceResolveFail,
  offLocationChange: offLocationChange,
  offLocationChangeError: offLocationChangeError,
  offMemoryWarning: offMemoryWarning,
  offNetworkStatusChange: offNetworkStatusChange,
  offNetworkWeakChange: offNetworkWeakChange,
  offPageNotFound: offPageNotFound,
  offScreenRecordingStateChanged: offScreenRecordingStateChanged,
  offThemeChange: offThemeChange,
  offUnhandledRejection: offUnhandledRejection,
  offUserCaptureScreen: offUserCaptureScreen,
  offVoIPChatInterrupted: offVoIPChatInterrupted,
  offVoIPChatMembersChanged: offVoIPChatMembersChanged,
  offVoIPChatSpeakersChanged: offVoIPChatSpeakersChanged,
  offVoIPChatStateChanged: offVoIPChatStateChanged,
  offVoIPVideoMembersChanged: offVoIPVideoMembersChanged,
  offWifiConnected: offWifiConnected,
  offWifiConnectedWithPartialInfo: offWifiConnectedWithPartialInfo,
  offWindowResize: offWindowResize,
  onAccelerometerChange: onAccelerometerChange,
  onAppHide: onAppHide,
  onAppShow: onAppShow,
  onAudioInterruptionBegin: onAudioInterruptionBegin,
  onAudioInterruptionEnd: onAudioInterruptionEnd,
  onBLECharacteristicValueChange: onBLECharacteristicValueChange,
  onBLEConnectionStateChange: onBLEConnectionStateChange,
  onBLEMTUChange: onBLEMTUChange,
  onBLEPeripheralConnectionStateChanged: onBLEPeripheralConnectionStateChanged,
  onBackgroundAudioPause: onBackgroundAudioPause,
  onBackgroundAudioPlay: onBackgroundAudioPlay,
  onBackgroundAudioStop: onBackgroundAudioStop,
  onBackgroundFetchData: onBackgroundFetchData,
  onBeaconServiceChange: onBeaconServiceChange,
  onBeaconUpdate: onBeaconUpdate,
  onBluetoothAdapterStateChange: onBluetoothAdapterStateChange,
  onBluetoothDeviceFound: onBluetoothDeviceFound,
  onCompassChange: onCompassChange,
  onCopyUrl: onCopyUrl,
  onDeviceMotionChange: onDeviceMotionChange,
  onError: onError,
  onGetWifiList: onGetWifiList,
  onGyroscopeChange: onGyroscopeChange,
  onHCEMessage: onHCEMessage,
  onKeyboardHeightChange: onKeyboardHeightChange,
  onLazyLoadError: onLazyLoadError,
  onLocalServiceDiscoveryStop: onLocalServiceDiscoveryStop,
  onLocalServiceFound: onLocalServiceFound,
  onLocalServiceLost: onLocalServiceLost,
  onLocalServiceResolveFail: onLocalServiceResolveFail,
  onLocationChange: onLocationChange,
  onLocationChangeError: onLocationChangeError,
  onMemoryWarning: onMemoryWarning,
  onNeedPrivacyAuthorization: onNeedPrivacyAuthorization,
  onNetworkStatusChange: onNetworkStatusChange,
  onNetworkWeakChange: onNetworkWeakChange,
  onPageLoadFinish: onPageLoadFinish,
  onPageNotFound: onPageNotFound,
  onRequestFinish: onRequestFinish,
  onRequestStart: onRequestStart,
  onScreenRecordingStateChanged: onScreenRecordingStateChanged,
  onThemeChange: onThemeChange,
  onUnhandledRejection: onUnhandledRejection,
  onUserCaptureScreen: onUserCaptureScreen,
  onVoIPChatInterrupted: onVoIPChatInterrupted,
  onVoIPChatMembersChanged: onVoIPChatMembersChanged,
  onVoIPChatSpeakersChanged: onVoIPChatSpeakersChanged,
  onVoIPChatStateChanged: onVoIPChatStateChanged,
  onVoIPVideoMembersChanged: onVoIPVideoMembersChanged,
  onWifiConnected: onWifiConnected,
  onWifiConnectedWithPartialInfo: onWifiConnectedWithPartialInfo,
  onWindowResize: onWindowResize,
  openBluetoothAdapter: openBluetoothAdapter,
  openBusinessView: openBusinessView,
  openCard: openCard,
  openChannelsActivity: openChannelsActivity,
  openChannelsEvent: openChannelsEvent,
  openChannelsLive: openChannelsLive,
  openChannelsUserProfile: openChannelsUserProfile,
  openCustomerServiceChat: openCustomerServiceChat,
  openDocument: openDocument,
  openEmbeddedMiniProgram: openEmbeddedMiniProgram,
  openLocation: openLocation,
  openPrivacyContract: openPrivacyContract,
  openSetting: openSetting,
  openVideoEditor: openVideoEditor,
  pageScrollTo: pageScrollTo,
  pauseBackgroundAudio: pauseBackgroundAudio,
  pauseVoice: pauseVoice,
  playBackgroundAudio: playBackgroundAudio,
  playVoice: playVoice,
  pluginLogin: pluginLogin,
  preloadAssets: preloadAssets,
  preloadSkylineView: preloadSkylineView,
  preloadWebview: preloadWebview,
  previewImage: previewImage,
  previewMedia: previewMedia,
  reLaunch: reLaunch,
  readBLECharacteristicValue: readBLECharacteristicValue,
  redirectTo: redirectTo,
  removeSavedFile: removeSavedFile,
  removeStorage: removeStorage,
  removeStorageSync: removeStorageSync,
  removeTabBarBadge: removeTabBarBadge,
  reportAddRecord: reportAddRecord,
  reportAnalytics: reportAnalytics,
  reportCustomData: reportCustomData,
  reportEvent: reportEvent,
  reportFirstScreen: reportFirstScreen,
  reportMonitor: reportMonitor,
  reportPerformance: reportPerformance,
  request: request,
  requestDeviceVoIP: requestDeviceVoIP,
  requestOrderPayment: requestOrderPayment,
  requestPayment: requestPayment,
  requestPluginPayment: requestPluginPayment,
  requestSubscribeDeviceMessage: requestSubscribeDeviceMessage,
  requestSubscribeMessage: requestSubscribeMessage,
  requirePlugin: requirePlugin$1,
  requirePrivacyAuthorize: requirePrivacyAuthorize,
  reserveChannelsLive: reserveChannelsLive,
  revokeBufferURL: revokeBufferURL,
  saveFile: saveFile,
  saveFileToDisk: saveFileToDisk,
  saveImageToPhotosAlbum: saveImageToPhotosAlbum,
  saveVideoToPhotosAlbum: saveVideoToPhotosAlbum,
  scanCode: scanCode,
  seekBackgroundAudio: seekBackgroundAudio,
  sendClickData: sendClickData,
  sendExposureData: sendExposureData,
  sendHCEMessage: sendHCEMessage,
  sendOrderData: sendOrderData,
  sendPvData: sendPvData,
  sendSms: sendSms,
  sendSysData: sendSysData,
  setBLEMTU: setBLEMTU,
  setBackgroundColor: setBackgroundColor,
  setBackgroundFetchToken: setBackgroundFetchToken,
  setBackgroundTextStyle: setBackgroundTextStyle,
  setClipboardData: setClipboardData,
  setEnable1v1Chat: setEnable1v1Chat,
  setEnableDebug: setEnableDebug,
  setInnerAudioOption: setInnerAudioOption,
  setKeepScreenOn: setKeepScreenOn,
  setNavigationBarColor: setNavigationBarColor,
  setNavigationBarTitle: setNavigationBarTitle,
  setScreenBrightness: setScreenBrightness,
  setStorage: setStorage,
  setStorageSync: setStorageSync,
  setTabBarBadge: setTabBarBadge,
  setTabBarItem: setTabBarItem,
  setTabBarStyle: setTabBarStyle,
  setTopBarText: setTopBarText,
  setVisualEffectOnCapture: setVisualEffectOnCapture,
  setWifiList: setWifiList,
  setWindowSize: setWindowSize,
  shareFileMessage: shareFileMessage,
  shareToWeRun: shareToWeRun,
  shareVideoMessage: shareVideoMessage,
  showActionSheet: showActionSheet,
  showLoading: showLoading,
  showModal: showModal,
  showNavigationBarLoading: showNavigationBarLoading,
  showRedPackage: showRedPackage,
  showShareImageMenu: showShareImageMenu,
  showShareMenu: showShareMenu,
  showTabBar: showTabBar,
  showTabBarRedDot: showTabBarRedDot,
  showToast: showToast,
  startAccelerometer: startAccelerometer,
  startBeaconDiscovery: startBeaconDiscovery,
  startBluetoothDevicesDiscovery: startBluetoothDevicesDiscovery,
  startCompass: startCompass,
  startDeviceMotionListening: startDeviceMotionListening,
  startFacialRecognitionVerify: startFacialRecognitionVerify,
  startFacialRecognitionVerifyAndUploadVideo: startFacialRecognitionVerifyAndUploadVideo,
  startGyroscope: startGyroscope,
  startHCE: startHCE,
  startLocalServiceDiscovery: startLocalServiceDiscovery,
  startLocationUpdate: startLocationUpdate,
  startLocationUpdateBackground: startLocationUpdateBackground,
  startPullDownRefresh: startPullDownRefresh,
  startRecord: startRecord,
  startSoterAuthentication: startSoterAuthentication,
  startWifi: startWifi,
  stopAccelerometer: stopAccelerometer,
  stopBackgroundAudio: stopBackgroundAudio,
  stopBeaconDiscovery: stopBeaconDiscovery,
  stopBluetoothDevicesDiscovery: stopBluetoothDevicesDiscovery,
  stopCompass: stopCompass,
  stopDeviceMotionListening: stopDeviceMotionListening,
  stopGyroscope: stopGyroscope,
  stopHCE: stopHCE,
  stopLocalServiceDiscovery: stopLocalServiceDiscovery,
  stopLocationUpdate: stopLocationUpdate,
  stopPullDownRefresh: stopPullDownRefresh,
  stopRecord: stopRecord,
  stopVoice: stopVoice,
  stopWifi: stopWifi,
  subscribeVoIPVideoMembers: subscribeVoIPVideoMembers,
  switchTab: switchTab,
  triggerJDAddress: triggerJDAddress,
  triggerJDBaseInfo: triggerJDBaseInfo,
  triggerJDEventCenter: triggerJDEventCenter,
  triggerJDLocation: triggerJDLocation,
  triggerJDLogin: triggerJDLogin,
  triggerJDMP: triggerJDMP,
  triggerJDMtaUtil: triggerJDMtaUtil,
  triggerJDNetWork: triggerJDNetWork,
  triggerJDPermission: triggerJDPermission,
  triggerJDReport: triggerJDReport,
  triggerJDRoute: triggerJDRoute,
  triggerJDShare: triggerJDShare,
  triggerJDWindowUtil: triggerJDWindowUtil,
  updateShareMenu: updateShareMenu,
  updateVoIPChatMuteConfig: updateVoIPChatMuteConfig,
  updateWeChatApp: updateWeChatApp,
  uploadFile: uploadFile,
  vibrateLong: vibrateLong,
  vibrateShort: vibrateShort,
  writeBLECharacteristicValue: writeBLECharacteristicValue
});

const DEFAULT_PAGE_SPLITER = '|';
const DEFAULT_CACHE_NAME = 'TARO_CACHE';
class KvStoreModel {
    /**
     * Create a distributed key-value database.
     *
     * @param context Ability context.
     * @param callback Callback.
     */
    createKvStore(context) {
        return new Promise((resolve) => {
            if (this.kvStore !== undefined) {
                resolve(false);
                return;
            }
            const config = {
                bundleName: 'com.example.taro',
                context: context
            };
            try {
                this.kvManager = distributedKVStore.createKVManager(config);
            }
            catch (error) {
                resolve(false);
                return;
            }
            const options = {
                createIfMissing: true,
                encrypt: false,
                backup: false,
                autoSync: false,
                kvStoreType: distributedKVStore.KVStoreType.SINGLE_VERSION,
                securityLevel: distributedKVStore.SecurityLevel.S1
            };
            this.kvManager.getKVStore('taroCacheStore', options).then((store) => {
                if (store === null) {
                    resolve(false);
                    return;
                }
                this.kvStore = store;
                resolve(true);
            }).catch((_) => {
                resolve(false);
            });
        });
    }
    /**
     * Add data to the distributed key-value database.
     *
     * @param key Store key name.
     * @param value Store value.
     */
    put(key, value) {
        return new Promise((resolve) => {
            if (this.kvStore === undefined) {
                resolve(null);
                return;
            }
            this.kvStore.put(key, value).then(() => {
                resolve();
            }).catch((_) => {
                resolve(null);
            });
        });
    }
    get(key) {
        return new Promise((resolve) => {
            if (this.kvStore === undefined) {
                resolve(null);
                return;
            }
            this.kvStore.get(key).then((res) => {
                resolve(res);
            }).catch((_) => {
                resolve(null);
            });
        });
    }
    delete(key) {
        return new Promise((resolve) => {
            if (this.kvStore === undefined) {
                resolve(null);
                return;
            }
            this.kvStore.delete(key).then((res) => {
                resolve(res);
            }).catch((_) => {
                resolve(null);
            });
        });
    }
}
function bindNodeParent(node, parent = null) {
    var _a, _b;
    const { nodeType, textContent, tagName } = node;
    const name = tagName ? tagName.toLowerCase() : '';
    const isTextNode = nodeType === NodeType.TEXT_NODE;
    // @ts-ignore
    const taroNode = isTextNode ? Current.createTextNode(textContent) : Current.createHarmonyElement(name);
    if (parent) {
        taroNode.parentNode = parent;
        taroNode.parentElement = parent;
    }
    if (!isTextNode) {
        taroNode.childNodes = [];
        taroNode._attrs = (node === null || node === void 0 ? void 0 : node._attrs) || {};
        taroNode.hmStyle = node === null || node === void 0 ? void 0 : node.hmStyle;
        taroNode._st.hmStyle = (_a = node === null || node === void 0 ? void 0 : node._st) === null || _a === void 0 ? void 0 : _a.hmStyle;
        taroNode._nodeInfo.layer = (_b = node === null || node === void 0 ? void 0 : node._nodeInfo) === null || _b === void 0 ? void 0 : _b.layer;
        taroNode._pseudo_class = node === null || node === void 0 ? void 0 : node._pseudo_class;
        taroNode._textContent = node === null || node === void 0 ? void 0 : node._textContent;
        taroNode.dataset = node === null || node === void 0 ? void 0 : node.dataset;
        taroNode.value = node === null || node === void 0 ? void 0 : node.value;
        if (taroNode._attrs.clickUrl) {
            taroNode.__listeners = {};
            taroNode.__listeners.click = [() => {
                    Taro.navigateTo({ url: taroNode._attrs.clickUrl });
                }];
        }
    }
    if (node.childNodes && node.childNodes.length > 0) {
        for (let i = 0; i < node.childNodes.length; i++) {
            if (node.childNodes[i]) {
                taroNode.childNodes.push(bindNodeParent(node.childNodes[i], taroNode));
            }
        }
    }
    return taroNode;
}
function filterObject(obj) {
    if (isSerializable(obj)) {
        if (typeof obj === 'object') {
            const result = Array.isArray(obj) ? [] : {};
            for (const key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    const value = obj[key];
                    if (typeof value === 'object') {
                        result[key] = filterObject(value);
                    }
                    else if (isSerializable(value)) {
                        result[key] = value;
                    }
                }
            }
            return result;
        }
        return obj;
    }
    return undefined;
}
function isSerializable(value) {
    const type = typeof value;
    return (type === 'undefined' ||
        type === 'boolean' ||
        type === 'number' ||
        type === 'string' ||
        value === null ||
        value instanceof Date ||
        value instanceof RegExp ||
        Array.isArray(value) ||
        value instanceof Map ||
        value instanceof Set ||
        value instanceof ArrayBuffer ||
        ArrayBuffer.isView(value) ||
        (type === 'object' && value.constructor === Object));
}
function copyNode(node, option) {
    var _a, _b, _c, _d;
    const result = {};
    const { limit = {} } = option;
    const idLimitNumber = (_a = limit.id) === null || _a === void 0 ? void 0 : _a[node.id];
    const classLimitNumber = (_b = limit.class) === null || _b === void 0 ? void 0 : _b[node.className];
    let limitNumber = -1;
    if (!isUndefined(idLimitNumber)) {
        limitNumber = idLimitNumber;
    }
    else if (!isUndefined(classLimitNumber)) {
        limitNumber = classLimitNumber;
    }
    if (node) {
        result._st = {};
        result.__listeners = {};
        result.childNodes = [];
        result._nid = node === null || node === void 0 ? void 0 : node._nid;
        result._attrs = (node === null || node === void 0 ? void 0 : node._attrs) || {};
        result._attrs._dynamicID = '';
        result._attrs.compileMode = '';
        result.hmStyle = (node === null || node === void 0 ? void 0 : node.hmStyle) || {};
        result._st.hmStyle = ((_c = node === null || node === void 0 ? void 0 : node._st) === null || _c === void 0 ? void 0 : _c.hmStyle) || {};
        result.tagName = (node === null || node === void 0 ? void 0 : node.tagName) || '';
        result.nodeType = (node === null || node === void 0 ? void 0 : node.nodeType) || 1;
        result._nodeInfo = filterObject(node === null || node === void 0 ? void 0 : node._nodeInfo) || {};
        result._nodeInfo.layer = ((_d = node === null || node === void 0 ? void 0 : node._nodeInfo) === null || _d === void 0 ? void 0 : _d.layer) || 0;
        result._pseudo_class = (node === null || node === void 0 ? void 0 : node._pseudo_class) || {};
        result.dataset = (node === null || node === void 0 ? void 0 : node.dataset) || {};
        result.value = node === null || node === void 0 ? void 0 : node.value;
        if (node.nodeType === NodeType.TEXT_NODE) {
            result.textContent = (node === null || node === void 0 ? void 0 : node.textContent) || '';
        }
        else {
            result._textContent = (node === null || node === void 0 ? void 0 : node._textContent) || '';
        }
        if (node.childNodes && node.childNodes.length > 0) {
            for (let i = 0; i < node.childNodes.length; i++) {
                if (limitNumber >= 0 && i >= limitNumber)
                    break;
                if (node.childNodes[i]) {
                    result.childNodes[i] = copyNode(node.childNodes[i], option);
                }
            }
        }
    }
    return result;
}
const kvStore = new KvStoreModel();
function getPageCache(context) {
    if (!context)
        return;
    initHarmonyElement();
    const kvManage = kvStore.createKvStore(context);
    const options = { name: DEFAULT_CACHE_NAME };
    const preferences = dataPreferences.getPreferencesSync(context, options);
    const pageList = (preferences.getSync('cachePageValue', '') || '')
        .split(DEFAULT_PAGE_SPLITER)
        .filter((item) => !!item);
    if (pageList.length === 0)
        return;
    kvManage.then(() => {
        pageList.forEach((path) => {
            kvStore.get(path).then((data) => {
                const cacheNode = bindNodeParent(JSON.parse(data));
                AppStorage.setOrCreate(path, cacheNode);
            });
        });
    });
}
function setPageCache(option = {}) {
    var _a, _b;
    // 用户一般会在 setData 之后调用 setCache，但此时页面 node 可能还没有生成完毕，因此需要延后缓存获取的逻辑
    const pageComponent = option.page || (Current === null || Current === void 0 ? void 0 : Current.page);
    // @ts-ignore
    const node = pageComponent === null || pageComponent === void 0 ? void 0 : pageComponent.node;
    if (!node)
        return;
    // @ts-ignore
    const context = getContext(pageComponent);
    if (!pageComponent || !context || !node)
        return;
    // @ts-ignore
    const path = ((_b = (_a = pageComponent === null || pageComponent === void 0 ? void 0 : pageComponent.$taroPath) === null || _a === void 0 ? void 0 : _a.split('?')) === null || _b === void 0 ? void 0 : _b[0]) || DEFAULT_CACHE_NAME;
    const result = copyNode(node, option);
    const kvManage = kvStore.createKvStore(context);
    const options = { name: DEFAULT_CACHE_NAME };
    const preferences = dataPreferences.getPreferencesSync(context, options);
    kvManage.then(() => {
        const pageList = (preferences.getSync('cachePageValue', '') || '')
            .split(DEFAULT_PAGE_SPLITER)
            .filter((item) => !!item);
        if (pageList.indexOf(path) === -1) {
            pageList.push(path);
            preferences.putSync('cachePageValue', pageList.join(DEFAULT_PAGE_SPLITER));
            preferences.flush();
        }
        Taro.triggerTaskPoolMethods({
            name: 'stringify',
            args: [result],
            success: (res) => {
                hiTraceMeter.startTrace('TaroSetPageCache', 1);
                kvStore.put(path, res.data);
                hiTraceMeter.finishTrace('TaroSetPageCache', 1);
            }
        });
    });
}
function clearPageCache(pageList) {
    const pageComponent = Current === null || Current === void 0 ? void 0 : Current.page;
    if (!pageComponent)
        return;
    if (!pageList || !pageList.length) {
        pageList = [(pageComponent === null || pageComponent === void 0 ? void 0 : pageComponent.$taroPath) || DEFAULT_CACHE_NAME];
    }
    // @ts-ignore
    const context = getContext(pageComponent);
    if (!context)
        return;
    const kvManage = kvStore.createKvStore(context);
    const options = { name: DEFAULT_CACHE_NAME };
    const preferences = dataPreferences.getPreferencesSync(context, options);
    kvManage.then(() => {
        const existCachePageList = (preferences.getSync('cachePageValue', '') || '')
            .split(DEFAULT_PAGE_SPLITER)
            .filter((item) => !!item);
        pageList.forEach((path) => {
            var _a;
            path = ((_a = path.split('?')) === null || _a === void 0 ? void 0 : _a[0]) || DEFAULT_CACHE_NAME;
            if (existCachePageList.indexOf(path) === -1)
                return;
            kvStore.delete(path);
        });
    });
}
/**
 * 切换页面到真实的 node 节点，即 diff TaroTree 的入口
*/
function switchPageCacheToPageNode(pageComponent) {
    const page = pageComponent;
    // @ts-ignore
    const cache = page === null || page === void 0 ? void 0 : page.cacheData;
    // @ts-ignore
    const pageData = page === null || page === void 0 ? void 0 : page.node;
    // 证明缓存存在，需要进行 diff 复用已有的节点
    if (cache) {
        if (!isNodeEqual(cache, pageData)) {
            page.cacheData = page === null || page === void 0 ? void 0 : page.node;
        }
        else {
            handleNodeDiff(cache, pageData);
        }
    }
}
/**
 * 处理两个 TaroNode 包括他们子节点的 diff
*/
function handleNodeDiff(baseNode, diffNode) {
    // 只有相等的节点才会进入该函数，因此在这里直接交换数据即可
    changeNodeData(baseNode, diffNode);
    const baseNodeChildren = baseNode.childNodes;
    const diffNodeChildren = diffNode.childNodes;
    const baseNodeChildrenLength = (baseNodeChildren === null || baseNodeChildren === void 0 ? void 0 : baseNodeChildren.length) || 0;
    const diffNodeChildrenLength = (diffNodeChildren === null || diffNodeChildren === void 0 ? void 0 : diffNodeChildren.length) || 0;
    // 缓存没有子节点，真实的 children 需要直接覆盖缓存的子节点
    if (!baseNodeChildrenLength && diffNodeChildrenLength) {
        baseNode.childNodes = [...diffNode.childNodes];
        baseNode.childNodes.forEach(child => { child.parentNode = baseNode; });
        baseNode.notifyDataReload();
        // 真实的 node 没有子节点，缓存的子节点全部删除
    }
    else if (!diffNodeChildrenLength && baseNodeChildrenLength) {
        baseNode.childNodes = [];
        baseNode.notifyDataReload();
        // 真实的 node 和缓存的 node 都有子节点，需要逐个比较
    }
    else if (baseNodeChildrenLength && diffNodeChildrenLength) {
        // TODO：可以采用 React 那种 diff 算法来优化此处逻辑，不同位置也能通过 notifyDataMove 复用，目前只是简单的逐个比较
        // 但预计性能不会有太大区别，因为缓存前后结构不会有太大变化
        for (let i = 0; i < diffNodeChildrenLength; i++) {
            const diffChild = diffNode.childNodes[i];
            diffChild.parentNode = baseNode;
            // 如果真实的子节点比缓存子节点多，需要逐个塞入
            if (i > baseNodeChildrenLength - 1) {
                baseNode.childNodes[i] = diffChild;
                baseNode.notifyDataAdd(i);
            }
            else {
                // 如果是真实的子节点和缓存子节点的交集，需要判断两个节点类型是否相等
                const baseChild = baseNode.childNodes[i];
                // 相等则递归递归处理子节点
                if (isNodeEqual(baseChild, diffChild)) {
                    // baseNode 没有组件实例，反而 diffNode 有，证明是 fixed 节点
                    if (!baseChild._instance && diffChild._instance) {
                        baseNode.childNodes[i] = diffChild;
                        baseNode.notifyDataChange(i);
                    }
                    else {
                        handleNodeDiff(baseChild, diffChild);
                    }
                }
                else {
                    // 不相等则直接 replace，然后触发 LazyForEach 的更新
                    baseNode.childNodes[i] = diffChild;
                    baseNode.notifyDataChange(i);
                }
            }
        }
        // 缓存子节点比真实 node 多，需要删除多余的缓存子节点
        if (diffNodeChildrenLength < baseNodeChildrenLength) {
            for (let i = baseNodeChildrenLength - 1; i >= diffNodeChildrenLength; i--) {
                baseNode.notifyDataDelete(i);
                delete baseNode.childNodes[i];
            }
            baseNode.childNodes.length = diffNodeChildrenLength;
        }
    }
}
/**
 * 判断两个 TaroNode 是否类型相等
*/
function isNodeEqual(baseNode, diffNode) {
    return baseNode.nodeName === diffNode.nodeName;
}
/**
 * 交换两个 TaroNode 的数据
*/
function changeNodeData(baseNode, diffNode) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (baseNode._st) {
        baseNode._st.hmStyle = ((_a = diffNode === null || diffNode === void 0 ? void 0 : diffNode._st) === null || _a === void 0 ? void 0 : _a.hmStyle) || {};
    }
    baseNode.__listeners = diffNode.__listeners;
    baseNode._nid = diffNode._nid;
    baseNode._attrs = diffNode._attrs;
    baseNode._pseudo_class = diffNode._pseudo_class;
    baseNode.dataset = diffNode.dataset;
    baseNode.onAreaChange = diffNode.onAreaChange;
    baseNode.onVisibleChange = diffNode.onVisibleChange;
    baseNode.value = diffNode.value;
    if (baseNode._nodeInfo) {
        baseNode._nodeInfo.layer = ((_b = diffNode === null || diffNode === void 0 ? void 0 : diffNode._nodeInfo) === null || _b === void 0 ? void 0 : _b.layer) || 0;
        baseNode._nodeInfo._value = ((_c = diffNode === null || diffNode === void 0 ? void 0 : diffNode._nodeInfo) === null || _c === void 0 ? void 0 : _c._value) || '';
        baseNode._nodeInfo.areaInfo = (_d = diffNode === null || diffNode === void 0 ? void 0 : diffNode._nodeInfo) === null || _d === void 0 ? void 0 : _d.areaInfo;
        baseNode._nodeInfo.eventMap = (_e = diffNode === null || diffNode === void 0 ? void 0 : diffNode._nodeInfo) === null || _e === void 0 ? void 0 : _e.eventMap;
        baseNode._nodeInfo.promiseMap = (_f = diffNode === null || diffNode === void 0 ? void 0 : diffNode._nodeInfo) === null || _f === void 0 ? void 0 : _f.promiseMap;
    }
    if (baseNode.nodeType === NodeType.TEXT_NODE) {
        baseNode.textContent = diffNode.textContent;
    }
    else {
        baseNode._textContent = diffNode._textContent;
    }
    eventSource$1.set(baseNode._nid, baseNode);
    if ((_g = baseNode._attrs) === null || _g === void 0 ? void 0 : _g.id) {
        eventSource$1.set(baseNode._attrs.id, baseNode);
    }
    // 反向绑定 react fiber
    const fiber = diffNode[internalInstanceKey];
    fiber.stateNode = baseNode;
    // 由于双缓冲机制，alternate 也需要替换绑定
    if (fiber.alternate) {
        fiber.alternate.stateNode = baseNode;
    }
    baseNode[internalInstanceKey] = fiber;
}

var cacheApis = /*#__PURE__*/Object.freeze({
  __proto__: null,
  clearPageCache: clearPageCache,
  getPageCache: getPageCache,
  setPageCache: setPageCache,
  switchPageCacheToPageNode: switchPageCacheToPageNode
});

const scope = 'taskpool';
const type = 'method';
// TaskPool 专属方法
const triggerTaskPoolMethods = ({ name = '', args = [], complete, fail, success, } = {}) => {
    if (!name) {
        throw new Error('triggerTaskPoolMethods 方法必须传入 name 参数');
    }
    const handle = new MethodHandler({ name, success, fail, complete });
    return new Promise((resolve, reject) => {
        eventCenter.trigger(ETS_METHODS_TRIGGER_EVENTNAME, {
            name,
            args,
            scope,
            type,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};

var taskpoolApis = /*#__PURE__*/Object.freeze({
  __proto__: null,
  triggerTaskPoolMethods: triggerTaskPoolMethods
});

const taro = Object.assign({}, apis, cacheApis, taskpoolApis);
const requirePlugin = /* @__PURE__ */ permanentlyNotSupport('requirePlugin');
function initNativeApi(taro) {
    Current.taro = taro;
    taro.requirePlugin = requirePlugin;
    taro.getApp = getApp;
    taro.pxTransform = pxTransform;
    taro.initPxTransform = initPxTransform;
    taro.canIUseWebp = canIUseWebp;
    taro.getAppInfo = getAppInfo;
    taro.getUIContext = getUIContext;
    if (hooks.isExist('initNativeApi')) {
        hooks.call('initNativeApi', taro);
    }
}
const defaultDesignWidth = 750;
const defaultDesignRatio = {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
};
const defaultBaseFontSize = 20;
const defaultUnitPrecision = 5;
const defaultTargetUnit = 'vp';
function getApp() {
    return Current.app || {};
}
function initPxTransform({ designWidth = defaultDesignWidth, deviceRatio = defaultDesignRatio, baseFontSize = defaultBaseFontSize, unitPrecision = defaultUnitPrecision, targetUnit = defaultTargetUnit }) {
    const taro = Current.taro;
    if (taro) {
        taro.config || (taro.config = {});
        const config = taro.config;
        config.designWidth = designWidth;
        config.deviceRatio = deviceRatio;
        config.baseFontSize = baseFontSize;
        config.targetUnit = targetUnit;
        config.unitPrecision = unitPrecision;
    }
}
const display = _display.getDefaultDisplaySync();
let displayWidth = display.width;
let ratioCache = false;
let designWidthFunc;
let designWidth = defaultDesignWidth;
function getRatio(value, radix) {
    var _a;
    // Note: 提前调用 display 可能无法获取正确值
    if (ratioCache === false || displayWidth !== display.width) {
        const config = ((_a = Current.taro) === null || _a === void 0 ? void 0 : _a.config) || {};
        if (!isFunction(designWidthFunc)) {
            designWidthFunc = isFunction(config.designWidth)
                ? config.designWidth
                : () => config.designWidth;
            designWidth = designWidthFunc(value) || defaultDesignWidth;
        }
        displayWidth = display.width;
        ratioCache = Math.min(display.width, display.height) / designWidth;
    }
    if (radix) {
        return Math.min(display.width, display.height) / radix;
    }
    return ratioCache;
}
// Note: 设置为 style 单位时会自动完成设计稿转换，设计开发者调用 API 时也许抹平差异，例如 pageScrollTo[option.offsetTop]
function pxTransformHelper(size, unit = '', isNumber = false, radix) {
    var _a;
    const config = ((_a = Current.taro) === null || _a === void 0 ? void 0 : _a.config) || {};
    const targetUnit = unit || config.targetUnit || defaultTargetUnit;
    if (targetUnit === 'PX') {
        return px2vp(size * display.scaledDensity) + 'vp';
    }
    const ratio = getRatio(size, radix);
    let val = size * ratio;
    switch (targetUnit) {
        case 'vp':
            // Note: 在应用创建前调用无效
            val = px2vp(val);
            break;
    }
    return isNumber ? val : val + targetUnit;
}
function pxTransform(size, radix) {
    var _a;
    const config = ((_a = Current.taro) === null || _a === void 0 ? void 0 : _a.config) || {};
    const targetUnit = config.targetUnit || defaultTargetUnit;
    const val = size;
    switch (targetUnit) {
        case 'vp':
            return pxTransformHelper(size, 'px', false, radix);
        // NOTE: 鸿蒙环境下 style 会自动完成设计稿转换，无需在方法内二次调整
    }
    return val + targetUnit;
}
function canIUseWebp() {
    return true;
}
function getAppInfo() {
    var _a;
    const config = (_a = Current.taro) === null || _a === void 0 ? void 0 : _a.config;
    return {
        platform: "harmony" || PLATFORM_TYPE.HARMONY,
        taroVersion: process.env.TARO_VERSION || 'unknown',
        designWidth: config === null || config === void 0 ? void 0 : config.designWidth
    };
}
function getUIContext() {
    var _a, _b;
    // @ts-ignore
    const uiContext = (_b = (_a = Current === null || Current === void 0 ? void 0 : Current.page) === null || _a === void 0 ? void 0 : _a.getUIContext) === null || _b === void 0 ? void 0 : _b.call(_a);
    if (!uiContext)
        return null;
    return uiContext;
}
initNativeApi(taro);

export { ENV_TYPE, IntersectionObserver, addCard, addFileToFavorites, addPhoneCalendar, addPhoneContact, addPhoneRepeatCalendar, addVideoToFavorites, arrayBufferToBase64, authPrivateMessage, authorize, authorizeForMiniProgram, base64ToArrayBuffer, batchGetStorage, batchGetStorageSync, batchSetStorage, batchSetStorageSync, canIUse, canIUseWebp, canvasGetImageData, canvasPutImageData, canvasToTempFilePath, checkIsAddedToMyMiniProgram, checkIsOpenAccessibility, checkIsPictureInPictureActive, checkIsSoterEnrolledInDevice, checkIsSupportFacialRecognition, checkIsSupportSoterAuthentication, checkSession, chooseAddress, chooseContact, chooseImage, chooseInvoice, chooseInvoiceTitle, chooseLicensePlate, chooseLocation, chooseMedia, choosePoi, chooseVideo, clearPageCache, clearStorage, clearStorageSync, closeBLEConnection, closeBluetoothAdapter, compressImage, compressVideo, connectSocket, connectWifi, createAnimation, createAudioContext, createBLEConnection, createBLEPeripheralServer, createBufferURL, createCacheManager, createCameraContext, createCanvasContext, createInnerAudioContext, createIntersectionObserver, createLivePlayerContext, createLivePusherContext, createMapContext, createMediaAudioPlayer, createMediaContainer, createMediaQueryObserver, createMediaRecorder, createOffscreenCanvas, createSelectorQuery, createTCPSocket, createUDPSocket, createVideoContext, createVideoDecoder, createWebAudioContext, createWorker, taro as default, disableAlertBeforeUnload, downloadFile, enableAlertBeforeUnload, exitMiniProgram, exitVoIPChat, faceVerifyForPay, getAccountInfoSync, getApp, getAppInfo, getAvailableAudioSources, getBLEDeviceCharacteristics, getBLEDeviceRSSI, getBLEDeviceServices, getBLEMTU, getBackgroundAudioManager, getBackgroundAudioPlayerState, getBackgroundFetchData, getBackgroundFetchToken, getBatteryInfo, getBatteryInfoSync, getBeacons, getBluetoothAdapterState, getBluetoothDevices, getChannelsLiveInfo, getChannelsLiveNoticeInfo, getChannelsShareKey, getClipboardData, getConnectedBluetoothDevices, getConnectedWifi, getCurrentPages, getDeviceVoIPList, getEnterOptionsSync, getEnv, getExptInfoSync, getExtConfig, getExtConfigSync, getFileInfo, getFileSystemManager, getFuzzyLocation, getGroupEnterInfo, getHCEState, getImageInfo, getLaunchOptionsSync, getLocalIPAddress, getLocation, getLogManager, getMenuButtonBoundingClientRect, getNFCAdapter, getNetworkType, getPageCache, getPerformance, getPrivacySetting, getRandomValues, getRealtimeLogManager, getRecorderManager, getSavedFileInfo, getSavedFileList, getScreenBrightness, getScreenRecordingState, getSelectedTextRange, getSetting, getShareChannelId, getShareChannelIdSE, getShareInfo, getStorage, getStorageInfo, getStorageInfoSync, getStorageSync, getSystemInfo, getSystemInfoSync, getUIContext, getUpdateManager, getUserCryptoManager, getUserInfo, getUserProfile, getVideoInfo, getWeRunData, getWifiList, hideHomeButton, hideKeyboard, hideLoading, hideNavigationBarLoading, hideShareMenu, hideTabBar, hideTabBarRedDot, hideToast, initNativeApi, initPxTransform, isBluetoothDevicePaired, join1v1Chat, joinVoIPChat, loadFontFace, login, logout, makeBluetoothPair, makePhoneCall, navigateBack, navigateBackMiniProgram, navigateTo, navigateToMiniProgram, nextTick, notifyBLECharacteristicValueChange, offAccelerometerChange, offAppHide, offAppShow, offAudioInterruptionBegin, offAudioInterruptionEnd, offBLECharacteristicValueChange, offBLEConnectionStateChange, offBLEMTUChange, offBLEPeripheralConnectionStateChanged, offBeaconServiceChange, offBeaconUpdate, offBluetoothAdapterStateChange, offBluetoothDeviceFound, offCompassChange, offCopyUrl, offDeviceMotionChange, offError, offGetWifiList, offGyroscopeChange, offHCEMessage, offKeyboardHeightChange, offLazyLoadError, offLocalServiceDiscoveryStop, offLocalServiceFound, offLocalServiceLost, offLocalServiceResolveFail, offLocationChange, offLocationChangeError, offMemoryWarning, offNetworkStatusChange, offNetworkWeakChange, offPageNotFound, offScreenRecordingStateChanged, offThemeChange, offUnhandledRejection, offUserCaptureScreen, offVoIPChatInterrupted, offVoIPChatMembersChanged, offVoIPChatSpeakersChanged, offVoIPChatStateChanged, offVoIPVideoMembersChanged, offWifiConnected, offWifiConnectedWithPartialInfo, offWindowResize, onAccelerometerChange, onAppHide, onAppShow, onAudioInterruptionBegin, onAudioInterruptionEnd, onBLECharacteristicValueChange, onBLEConnectionStateChange, onBLEMTUChange, onBLEPeripheralConnectionStateChanged, onBackgroundAudioPause, onBackgroundAudioPlay, onBackgroundAudioStop, onBackgroundFetchData, onBeaconServiceChange, onBeaconUpdate, onBluetoothAdapterStateChange, onBluetoothDeviceFound, onCompassChange, onCopyUrl, onDeviceMotionChange, onError, onGetWifiList, onGyroscopeChange, onHCEMessage, onKeyboardHeightChange, onLazyLoadError, onLocalServiceDiscoveryStop, onLocalServiceFound, onLocalServiceLost, onLocalServiceResolveFail, onLocationChange, onLocationChangeError, onMemoryWarning, onNeedPrivacyAuthorization, onNetworkStatusChange, onNetworkWeakChange, onPageLoadFinish, onPageNotFound, onRequestFinish, onRequestStart, onScreenRecordingStateChanged, onThemeChange, onUnhandledRejection, onUserCaptureScreen, onVoIPChatInterrupted, onVoIPChatMembersChanged, onVoIPChatSpeakersChanged, onVoIPChatStateChanged, onVoIPVideoMembersChanged, onWifiConnected, onWifiConnectedWithPartialInfo, onWindowResize, openBluetoothAdapter, openBusinessView, openCard, openChannelsActivity, openChannelsEvent, openChannelsLive, openChannelsUserProfile, openCustomerServiceChat, openDocument, openEmbeddedMiniProgram, openLocation, openPrivacyContract, openSetting, openVideoEditor, pageScrollTo, pauseBackgroundAudio, pauseVoice, playBackgroundAudio, playVoice, pluginLogin, preloadAssets, preloadSkylineView, preloadWebview, previewImage, previewMedia, pxTransform, pxTransformHelper, reLaunch, readBLECharacteristicValue, redirectTo, removeSavedFile, removeStorage, removeStorageSync, removeTabBarBadge, reportAddRecord, reportAnalytics, reportCustomData, reportEvent, reportFirstScreen, reportMonitor, reportPerformance, request, requestDeviceVoIP, requestOrderPayment, requestPayment, requestPluginPayment, requestSubscribeDeviceMessage, requestSubscribeMessage, requirePlugin$1 as requirePlugin, requirePrivacyAuthorize, reserveChannelsLive, revokeBufferURL, saveFile, saveFileToDisk, saveImageToPhotosAlbum, saveVideoToPhotosAlbum, scanCode, seekBackgroundAudio, sendClickData, sendExposureData, sendHCEMessage, sendOrderData, sendPvData, sendSms, sendSysData, setBLEMTU, setBackgroundColor, setBackgroundFetchToken, setBackgroundTextStyle, setClipboardData, setEnable1v1Chat, setEnableDebug, setInnerAudioOption, setKeepScreenOn, setNavigationBarColor, setNavigationBarTitle, setPageCache, setScreenBrightness, setStorage, setStorageSync, setTabBarBadge, setTabBarItem, setTabBarStyle, setTopBarText, setVisualEffectOnCapture, setWifiList, setWindowSize, shareFileMessage, shareToWeRun, shareVideoMessage, showActionSheet, showLoading, showModal, showNavigationBarLoading, showRedPackage, showShareImageMenu, showShareMenu, showTabBar, showTabBarRedDot, showToast, startAccelerometer, startBeaconDiscovery, startBluetoothDevicesDiscovery, startCompass, startDeviceMotionListening, startFacialRecognitionVerify, startFacialRecognitionVerifyAndUploadVideo, startGyroscope, startHCE, startLocalServiceDiscovery, startLocationUpdate, startLocationUpdateBackground, startPullDownRefresh, startRecord, startSoterAuthentication, startWifi, stopAccelerometer, stopBackgroundAudio, stopBeaconDiscovery, stopBluetoothDevicesDiscovery, stopCompass, stopDeviceMotionListening, stopGyroscope, stopHCE, stopLocalServiceDiscovery, stopLocationUpdate, stopPullDownRefresh, stopRecord, stopVoice, stopWifi, subscribeVoIPVideoMembers, switchPageCacheToPageNode, switchTab, triggerJDAddress, triggerJDBaseInfo, triggerJDEventCenter, triggerJDLocation, triggerJDLogin, triggerJDMP, triggerJDMtaUtil, triggerJDNetWork, triggerJDPermission, triggerJDReport, triggerJDRoute, triggerJDShare, triggerJDWindowUtil, triggerTaskPoolMethods, updateShareMenu, updateVoIPChatMuteConfig, updateWeChatApp, uploadFile, vibrateLong, vibrateShort, writeBLECharacteristicValue };
//# sourceMappingURL=index.js.map


taro.useAddToFavorites = useAddToFavorites
taro.useDidHide = useDidHide
taro.useDidShow = useDidShow
taro.useError = useError
taro.useLaunch = useLaunch
taro.useLoad = useLoad
taro.useOptionMenuClick = useOptionMenuClick
taro.usePageNotFound = usePageNotFound
taro.usePageScroll = usePageScroll
taro.usePullDownRefresh = usePullDownRefresh
taro.usePullIntercept = usePullIntercept
taro.useReachBottom = useReachBottom
taro.useReady = useReady
taro.useResize = useResize
taro.useRouter = useRouter
taro.useSaveExitState = useSaveExitState
taro.useShareAppMessage = useShareAppMessage
taro.useShareTimeline = useShareTimeline
taro.useTabItemTap = useTabItemTap
taro.useTitleClick = useTitleClick
taro.useScope = useScope
taro.useUnhandledRejection = useUnhandledRejection
taro.useUnload = useUnload

export {
  useAddToFavorites,
  useDidHide,
  useDidShow,
  useError,
  useLaunch,
  useLoad,
  useOptionMenuClick,
  usePageNotFound,
  usePageScroll,
  usePullDownRefresh,
  usePullIntercept,
  useReachBottom,
  useReady,
  useResize,
  useRouter,
  useSaveExitState,
  useShareAppMessage,
  useShareTimeline,
  useTabItemTap,
  useTitleClick,
  useScope,
  useUnhandledRejection,
  useUnload
}
