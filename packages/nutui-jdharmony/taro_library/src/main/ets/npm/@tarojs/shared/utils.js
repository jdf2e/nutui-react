import { internalComponents } from './components.js';
import { PLATFORM_CONFIG_MAP, PLATFORM_TYPE } from './constants.js';
import { hooks } from './runtime-hooks.js';

const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const noop = (..._) => { };
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param v Value.
 * @returns Boxed value.
 */
const box = (v) => ({ v });
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param b Boxed value.
 * @returns Value.
 */
const unbox = (b) => b.v;
function toDashed(s) {
    return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
function toCamelCase(s) {
    let camel = '';
    let nextCap = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '-') {
            camel += nextCap ? s[i].toUpperCase() : s[i];
            nextCap = false;
        }
        else {
            nextCap = true;
        }
    }
    return camel;
}
const toKebabCase = function (string) {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */
function ensure(condition, msg) {
    if (!condition) {
        if ("production" !== 'production') {
            const reportIssue = '\n如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
            throw new Error(msg + reportIssue);
        }
        else {
            throw new Error(msg);
        }
    }
}
function warn(condition, msg) {
    if ("production" !== 'production') {
        if (condition) {
            console.warn(`[taro warn] ${msg}`);
        }
    }
}
function queryToJson(str) {
    const dec = decodeURIComponent;
    const qp = str.split('&');
    const ret = {};
    let name;
    let val;
    for (let i = 0, l = qp.length, item; i < l; ++i) {
        item = qp[i];
        if (item.length) {
            const s = item.indexOf('=');
            if (s < 0) {
                name = dec(item);
                val = '';
            }
            else {
                name = dec(item.slice(0, s));
                val = dec(item.slice(s + 1));
            }
            if (typeof ret[name] === 'string') { // inline'd type check
                ret[name] = [ret[name]];
            }
            if (Array.isArray(ret[name])) {
                ret[name].push(val);
            }
            else {
                ret[name] = val;
            }
        }
    }
    return ret; // Object
}
let _uniqueId = 1;
const _loadTime = (new Date()).getTime().toString();
function getUniqueKey() {
    return _loadTime + (_uniqueId++);
}
const cacheData = {};
function cacheDataSet(key, val) {
    cacheData[key] = val;
}
function cacheDataGet(key, delelteAfterGet) {
    const temp = cacheData[key];
    delelteAfterGet && delete cacheData[key];
    return temp;
}
function cacheDataHas(key) {
    return key in cacheData;
}
function mergeInternalComponents(components) {
    Object.keys(components).forEach(name => {
        if (name in internalComponents) {
            Object.assign(internalComponents[name], components[name]);
        }
        else {
            internalComponents[name] = components[name];
        }
    });
    return internalComponents;
}
function getComponentsAlias(origin) {
    const mapping = {};
    const viewAttrs = origin.View;
    const extraList = {
        '#text': {},
        StaticView: viewAttrs,
        StaticImage: origin.Image,
        StaticText: origin.Text,
        PureView: viewAttrs,
        CatchView: viewAttrs
    };
    origin = Object.assign(Object.assign({}, origin), extraList);
    Object.keys(origin)
        .sort((a, b) => {
        const reg = /^(Static|Pure|Catch)*(View|Image|Text)$/;
        const isACommonly = reg.test(a);
        const isBCommonly = reg.test(b);
        if (isACommonly && isBCommonly) {
            return a > b ? 1 : -1;
        }
        else if (isACommonly) {
            return -1;
        }
        else if (isBCommonly) {
            return 1;
        }
        else {
            return a >= b ? 1 : -1;
        }
    })
        .forEach((key, num) => {
        const obj = {
            _num: String(num)
        };
        Object.keys(origin[key])
            .filter(attr => !(/^bind/.test(attr)) && !['focus', 'blur'].includes(attr))
            .sort()
            .forEach((attr, index) => {
            obj[toCamelCase(attr)] = 'p' + index;
        });
        mapping[toDashed(key)] = obj;
    });
    return mapping;
}
function getPlatformType(platform = 'weapp', configNameOrType = PLATFORM_TYPE.MINI) {
    if (Object.keys(PLATFORM_CONFIG_MAP).includes(platform)) {
        configNameOrType = platform;
    }
    const param = PLATFORM_CONFIG_MAP[configNameOrType] || {};
    return param.type || configNameOrType;
}
function mergeReconciler(hostConfig, hooksForTest) {
    const obj = hooksForTest || hooks;
    const keys = Object.keys(hostConfig);
    keys.forEach(key => {
        obj.tap(key, hostConfig[key]);
    });
}
function nonsupport(api) {
    return function () {
        console.warn(`小程序暂不支持 ${api}`);
    };
}
function setUniqueKeyToRoute(key, obj) {
    const routerParamsPrivateKey = '__key_';
    const useDataCacheApis = [
        'navigateTo',
        'redirectTo',
        'reLaunch',
        'switchTab'
    ];
    if (useDataCacheApis.indexOf(key) > -1) {
        const url = obj.url = obj.url || '';
        const hasMark = url.indexOf('?') > -1;
        const cacheKey = getUniqueKey();
        obj.url += (hasMark ? '&' : '?') + `${routerParamsPrivateKey}=${cacheKey}`;
    }
}
function indent(str, size) {
    return str.split('\n')
        .map((line, index) => {
        const indent = index === 0 ? '' : Array(size).fill(' ').join('');
        return indent + line;
    })
        .join('\n');
}

export { EMPTY_ARR, EMPTY_OBJ, box, cacheDataGet, cacheDataHas, cacheDataSet, capitalize, ensure, getComponentsAlias, getPlatformType, getUniqueKey, hasOwn, indent, mergeInternalComponents, mergeReconciler, nonsupport, noop, queryToJson, setUniqueKeyToRoute, toCamelCase, toDashed, toKebabCase, unbox, warn };
//# sourceMappingURL=utils.js.map
