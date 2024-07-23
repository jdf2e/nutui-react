import { isFunction, isString } from './is.js';
import { nonsupport, setUniqueKeyToRoute } from './utils.js';

const needPromiseApis = new Set([
    'addPhoneContact',
    'authorize',
    'canvasGetImageData',
    'canvasPutImageData',
    'canvasToTempFilePath',
    'checkSession',
    'chooseAddress',
    'chooseImage',
    'chooseInvoiceTitle',
    'chooseLocation',
    'chooseVideo',
    'clearStorage',
    'closeBLEConnection',
    'closeBluetoothAdapter',
    'closeSocket',
    'compressImage',
    'connectSocket',
    'createBLEConnection',
    'downloadFile',
    'exitMiniProgram',
    'getAvailableAudioSources',
    'getBLEDeviceCharacteristics',
    'getBLEDeviceServices',
    'getBatteryInfo',
    'getBeacons',
    'getBluetoothAdapterState',
    'getBluetoothDevices',
    'getClipboardData',
    'getConnectedBluetoothDevices',
    'getConnectedWifi',
    'getExtConfig',
    'getFileInfo',
    'getImageInfo',
    'getLocation',
    'getNetworkType',
    'getSavedFileInfo',
    'getSavedFileList',
    'getScreenBrightness',
    'getSetting',
    'getStorage',
    'getStorageInfo',
    'getSystemInfo',
    'getUserInfo',
    'getWifiList',
    'hideHomeButton',
    'hideShareMenu',
    'hideTabBar',
    'hideTabBarRedDot',
    'loadFontFace',
    'login',
    'makePhoneCall',
    'navigateBack',
    'navigateBackMiniProgram',
    'navigateTo',
    'navigateToBookshelf',
    'navigateToMiniProgram',
    'notifyBLECharacteristicValueChange',
    'hideKeyboard',
    'hideLoading',
    'hideNavigationBarLoading',
    'hideToast',
    'openBluetoothAdapter',
    'openDocument',
    'openLocation',
    'openSetting',
    'pageScrollTo',
    'previewImage',
    'queryBookshelf',
    'reLaunch',
    'readBLECharacteristicValue',
    'redirectTo',
    'removeSavedFile',
    'removeStorage',
    'removeTabBarBadge',
    'requestSubscribeMessage',
    'saveFile',
    'saveImageToPhotosAlbum',
    'saveVideoToPhotosAlbum',
    'scanCode',
    'sendSocketMessage',
    'setBackgroundColor',
    'setBackgroundTextStyle',
    'setClipboardData',
    'setEnableDebug',
    'setInnerAudioOption',
    'setKeepScreenOn',
    'setNavigationBarColor',
    'setNavigationBarTitle',
    'setScreenBrightness',
    'setStorage',
    'setTabBarBadge',
    'setTabBarItem',
    'setTabBarStyle',
    'showActionSheet',
    'showFavoriteGuide',
    'showLoading',
    'showModal',
    'showShareMenu',
    'showTabBar',
    'showTabBarRedDot',
    'showToast',
    'startBeaconDiscovery',
    'startBluetoothDevicesDiscovery',
    'startDeviceMotionListening',
    'startPullDownRefresh',
    'stopBeaconDiscovery',
    'stopBluetoothDevicesDiscovery',
    'stopCompass',
    'startCompass',
    'startAccelerometer',
    'stopAccelerometer',
    'showNavigationBarLoading',
    'stopDeviceMotionListening',
    'stopPullDownRefresh',
    'switchTab',
    'uploadFile',
    'vibrateLong',
    'vibrateShort',
    'writeBLECharacteristicValue'
]);
function getCanIUseWebp(taro) {
    return function () {
        var _a;
        const res = (_a = taro.getSystemInfoSync) === null || _a === void 0 ? void 0 : _a.call(taro);
        if (!res) {
            if ("production" !== 'production') {
                console.error('不支持 API canIUseWebp');
            }
            return false;
        }
        const { platform } = res;
        const platformLower = platform.toLowerCase();
        if (platformLower === 'android' || platformLower === 'devtools') {
            return true;
        }
        return false;
    };
}
function getNormalRequest(global) {
    return function request(options) {
        options = options
            ? (isString(options)
                ? { url: options }
                : options)
            : {};
        const originSuccess = options.success;
        const originFail = options.fail;
        const originComplete = options.complete;
        let requestTask;
        const p = new Promise((resolve, reject) => {
            options.success = res => {
                originSuccess && originSuccess(res);
                resolve(res);
            };
            options.fail = res => {
                originFail && originFail(res);
                reject(res);
            };
            options.complete = res => {
                originComplete && originComplete(res);
            };
            requestTask = global.request(options);
        });
        equipTaskMethodsIntoPromise(requestTask, p);
        p.abort = (cb) => {
            cb && cb();
            if (requestTask) {
                requestTask.abort();
            }
            return p;
        };
        return p;
    };
}
function processApis(taro, global, config = {}) {
    const patchNeedPromiseApis = config.needPromiseApis || [];
    const _needPromiseApis = new Set([...patchNeedPromiseApis, ...needPromiseApis]);
    const preserved = [
        'getEnv',
        'interceptors',
        'Current',
        'getCurrentInstance',
        'options',
        'nextTick',
        'eventCenter',
        'Events',
        'preload',
        'webpackJsonp'
    ];
    const apis = new Set(!config.isOnlyPromisify
        ? Object.keys(global).filter(api => preserved.indexOf(api) === -1)
        : patchNeedPromiseApis);
    if (config.modifyApis) {
        config.modifyApis(apis);
    }
    apis.forEach(key => {
        if (_needPromiseApis.has(key)) {
            const originKey = key;
            taro[originKey] = (options = {}, ...args) => {
                let key = originKey;
                // 第一个参数 options 为字符串，单独处理
                if (typeof options === 'string') {
                    if (args.length) {
                        return global[key](options, ...args);
                    }
                    return global[key](options);
                }
                // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段
                if (config.transformMeta) {
                    const transformResult = config.transformMeta(key, options);
                    key = transformResult.key;
                    options = transformResult.options;
                    // 新 key 可能不存在
                    if (!global.hasOwnProperty(key)) {
                        return nonsupport(key)();
                    }
                }
                let task = null;
                const obj = Object.assign({}, options);
                // 为页面跳转相关的 API 设置一个随机数作为路由参数。为了给 runtime 区分页面。
                setUniqueKeyToRoute(key, options);
                // Promise 化
                const p = new Promise((resolve, reject) => {
                    obj.success = res => {
                        var _a, _b;
                        (_a = config.modifyAsyncResult) === null || _a === void 0 ? void 0 : _a.call(config, key, res);
                        (_b = options.success) === null || _b === void 0 ? void 0 : _b.call(options, res);
                        if (key === 'connectSocket') {
                            resolve(Promise.resolve().then(() => task ? Object.assign(task, res) : res));
                        }
                        else {
                            resolve(res);
                        }
                    };
                    obj.fail = res => {
                        var _a;
                        (_a = options.fail) === null || _a === void 0 ? void 0 : _a.call(options, res);
                        reject(res);
                    };
                    obj.complete = res => {
                        var _a;
                        (_a = options.complete) === null || _a === void 0 ? void 0 : _a.call(options, res);
                    };
                    if (args.length) {
                        task = global[key](obj, ...args);
                    }
                    else {
                        task = global[key](obj);
                    }
                });
                // 给 promise 对象挂载属性
                if (['uploadFile', 'downloadFile'].includes(key)) {
                    equipTaskMethodsIntoPromise(task, p);
                    p.progress = cb => {
                        task === null || task === void 0 ? void 0 : task.onProgressUpdate(cb);
                        return p;
                    };
                    p.abort = cb => {
                        cb === null || cb === void 0 ? void 0 : cb();
                        task === null || task === void 0 ? void 0 : task.abort();
                        return p;
                    };
                }
                return p;
            };
        }
        else {
            let platformKey = key;
            // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段
            if (config.transformMeta) {
                platformKey = config.transformMeta(key, {}).key;
            }
            // API 不存在
            if (!global.hasOwnProperty(platformKey)) {
                taro[key] = nonsupport(key);
                return;
            }
            if (isFunction(global[key])) {
                taro[key] = (...args) => {
                    if (config.handleSyncApis) {
                        return config.handleSyncApis(key, global, args);
                    }
                    else {
                        return global[platformKey].apply(global, args);
                    }
                };
            }
            else {
                taro[key] = global[platformKey];
            }
        }
    });
    !config.isOnlyPromisify && equipCommonApis(taro, global, config);
}
/**
 * 挂载常用 API
 * @param taro Taro 对象
 * @param global 小程序全局对象，如微信的 wx，支付宝的 my
 */
function equipCommonApis(taro, global, apis = {}) {
    taro.canIUseWebp = getCanIUseWebp(taro);
    taro.getCurrentPages = getCurrentPages || nonsupport('getCurrentPages');
    taro.getApp = getApp || nonsupport('getApp');
    taro.env = global.env || {};
    try {
        taro.requirePlugin = requirePlugin || nonsupport('requirePlugin');
    }
    catch (error) {
        taro.requirePlugin = nonsupport('requirePlugin');
    }
    // request & interceptors
    const request = apis.request || getNormalRequest(global);
    function taroInterceptor(chain) {
        return request(chain.requestParams);
    }
    const link = new taro.Link(taroInterceptor);
    taro.request = link.request.bind(link);
    taro.addInterceptor = link.addInterceptor.bind(link);
    taro.cleanInterceptors = link.cleanInterceptors.bind(link);
    taro.miniGlobal = taro.options.miniGlobal = global;
    taro.getAppInfo = function () {
        return {
            platform: "harmony" || 'MiniProgram',
            taroVersion: process.env.TARO_VERSION || 'unknown',
            designWidth: taro.config.designWidth
        };
    };
    taro.createSelectorQuery = delayRef(taro, global, 'createSelectorQuery', 'exec');
    taro.createIntersectionObserver = delayRef(taro, global, 'createIntersectionObserver', 'observe');
}
/**
 * 将Task对象中的方法挂载到promise对象中，适配小程序api原生返回结果
 * @param task Task对象 {RequestTask | DownloadTask | UploadTask}
 * @param promise Promise
 */
function equipTaskMethodsIntoPromise(task, promise) {
    if (!task || !promise)
        return;
    const taskMethods = ['abort', 'onHeadersReceived', 'offHeadersReceived', 'onProgressUpdate', 'offProgressUpdate', 'onChunkReceived', 'offChunkReceived'];
    task && taskMethods.forEach(method => {
        if (method in task) {
            promise[method] = task[method].bind(task);
        }
    });
}
function delayRef(taro, global, name, method) {
    return function (...args) {
        const res = global[name](...args);
        const raw = res[method].bind(res);
        res[method] = function (...methodArgs) {
            taro.nextTick(() => raw(...methodArgs));
        };
        return res;
    };
}

export { processApis };
//# sourceMappingURL=native-apis.js.map
