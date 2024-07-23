import { noop, hooks, Events, EMPTY_OBJ, isNumber, isString, isArray, isUndefined, warn, isFunction, getComponentsAlias as getComponentsAlias$1, internalComponents, toCamelCase, isObject, ensure, isNull, toDashed, controlledComponent, EventChannel } from '../../shared';
export { Events, hooks } from '../../shared';
import { __classPrivateFieldSet, __classPrivateFieldGet } from '../../../tslib';

const PROPERTY_THRESHOLD = 2046;
const TARO_RUNTIME = 'Taro runtime';
const HOOKS_APP_ID = 'taro-app';
const SET_DATA = '小程序 setData';
const PAGE_INIT = '页面初始化';
const ROOT_STR = 'root';
const HTML = 'html';
const HEAD = 'head';
const BODY = 'body';
const APP = 'app';
const CONTAINER = 'container';
const DOCUMENT_ELEMENT_NAME = '#document';
const DOCUMENT_FRAGMENT = 'document-fragment';
const ID = 'id';
const UID = 'uid';
const CLASS = 'class';
const STYLE = 'style';
const FOCUS = 'focus';
const VIEW = 'view';
const STATIC_VIEW = 'static-view';
const PURE_VIEW = 'pure-view';
const PROPS = 'props';
const DATASET = 'dataset';
const OBJECT = 'object';
const VALUE = 'value';
const INPUT = 'input';
const CHANGE = 'change';
const CUSTOM_WRAPPER = 'custom-wrapper';
const TARGET = 'target';
const CURRENT_TARGET = 'currentTarget';
const TYPE = 'type';
const CONFIRM = 'confirm';
const TIME_STAMP = 'timeStamp';
const KEY_CODE = 'keyCode';
const TOUCHMOVE = 'touchmove';
const DATE = 'Date';
const SET_TIMEOUT = 'setTimeout';
const COMPILE_MODE = 'compileMode';
const CATCHMOVE = 'catchMove';
const CATCH_VIEW = 'catch-view';
const COMMENT = 'comment';
const ON_LOAD = 'onLoad';
const ON_READY = 'onReady';
const ON_SHOW = 'onShow';
const ON_HIDE = 'onHide';
const OPTIONS = 'options';
const EXTERNAL_CLASSES = 'externalClasses';
const EVENT_CALLBACK_RESULT = 'e_result';
const BEHAVIORS = 'behaviors';
const A = 'a';
/**
 * 页面上下文切换时的行为
 */
var CONTEXT_ACTIONS;
(function (CONTEXT_ACTIONS) {
    CONTEXT_ACTIONS["INIT"] = "0";
    CONTEXT_ACTIONS["RESTORE"] = "1";
    CONTEXT_ACTIONS["RECOVER"] = "2";
    CONTEXT_ACTIONS["DESTORY"] = "3";
})(CONTEXT_ACTIONS || (CONTEXT_ACTIONS = {}));

const observers = [];
/**
 * The MutationObserver provides the ability
 * to watch for changes being made to the DOM tree.
 * It will invoke a specified callback function
 * when DOM changes occur.
 * @see https://dom.spec.whatwg.org/#mutationobserver
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
class MutationObserverImpl {
    constructor(callback) {
        this.records = [];
        this.callback = callback;
    }
    /**
     * Configures the MutationObserver
     * to begin receiving notifications
     * through its callback function
     * when DOM changes matching the given options occur.
     *
     * Options matching is to be implemented.
     */
    observe(target, options) {
        this.disconnect();
        this.target = target;
        this.options = options || {};
        observers.push(this);
    }
    /**
     * Stop the MutationObserver instance
     * from receiving further notifications
     * until and unless observe() is called again.
     */
    disconnect() {
        this.target = null;
        const index = observers.indexOf(this);
        if (index >= 0) {
            observers.splice(index, 1);
        }
    }
    /**
     * Removes all pending notifications
     * from the MutationObserver's notification queue
     * and returns them in a new Array of MutationRecord objects.
     */
    takeRecords() {
        return this.records.splice(0, this.records.length);
    }
}
/** Match two TaroNodes by sid. */
const sidMatches = (observerTarget, target) => {
    return !!observerTarget && observerTarget.sid === (target === null || target === void 0 ? void 0 : target.sid);
};
const isConcerned = (record, options) => {
    const { characterData, characterDataOldValue, attributes, attributeOldValue, childList } = options;
    switch (record.type) {
        case "characterData" /* MutationRecordType.CHARACTER_DATA */:
            if (characterData) {
                if (!characterDataOldValue)
                    record.oldValue = null;
                return true;
            }
            return false;
        case "attributes" /* MutationRecordType.ATTRIBUTES */:
            if (attributes) {
                if (!attributeOldValue)
                    record.oldValue = null;
                return true;
            }
            return false;
        case "childList" /* MutationRecordType.CHILD_LIST */:
            if (childList) {
                return true;
            }
            return false;
    }
};
let pendingMuatations = false;
function logMutation(observer, record) {
    observer.records.push(record);
    if (!pendingMuatations) {
        pendingMuatations = true;
        Promise
            .resolve()
            .then(() => {
            pendingMuatations = false;
            observers.forEach(observer => {
                return observer.callback(observer.takeRecords());
            });
        });
    }
}
function recordMutation(record) {
    observers.forEach(observer => {
        const { options } = observer;
        for (let t = record.target; t; t = t.parentNode) {
            if (sidMatches(observer.target, t) && isConcerned(record, options)) {
                logMutation(observer, record);
                break;
            }
            if (!options.subtree)
                break;
        }
    });
}

let MutationObserver$1 = class MutationObserver {
    constructor(callback) {
        if (ENABLE_MUTATION_OBSERVER) {
            this.core = new MutationObserverImpl(callback);
        }
        else {
            if ("production" !== 'production') {
                console.warn('[Taro Warning] 若要使用 MutationObserver，请在 Taro 编译配置中设置 \'mini.runtime.enableMutationObserver: true\'');
            }
            this.core = {
                observe: noop,
                disconnect: noop,
                takeRecords: noop
            };
        }
    }
    observe(...args) {
        this.core.observe(...args);
    }
    disconnect() {
        this.core.disconnect();
    }
    takeRecords() {
        return this.core.takeRecords();
    }
    static record(record) {
        recordMutation(record);
    }
};

function throttle(fn, threshold = 250, scope) {
    let lastTime = 0;
    let deferTimer;
    return function (...args) {
        const context = scope || this;
        const now = Date.now();
        if (now - lastTime > threshold) {
            fn.apply(this, args);
            lastTime = now;
        }
        else {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(() => {
                lastTime = now;
                fn.apply(context, args);
            }, threshold);
        }
    };
}
function debounce(fn, ms = 250, scope) {
    let timer;
    return function (...args) {
        const context = scope || this;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, ms);
    };
}

const eventCenter = hooks.call('getEventCenter', Events);

const env = {
    window: "harmony" === 'web' ? window : EMPTY_OBJ,
    document: "harmony" === 'web' ? document : EMPTY_OBJ
};

const getComputedStyle = "harmony" === 'web' ? env.window.getComputedStyle : function (element) {
    return element.style;
};

/**
 * 一个小型缓存池，用于在切换页面时，存储一些上下文信息
 */
class RuntimeCache {
    constructor(name) {
        this.cache = new Map();
        this.name = name;
    }
    has(identifier) {
        return this.cache.has(identifier);
    }
    set(identifier, ctx) {
        if (identifier && ctx) {
            this.cache.set(identifier, ctx);
        }
    }
    get(identifier) {
        if (this.has(identifier))
            return this.cache.get(identifier);
    }
    delete(identifier) {
        this.cache.delete(identifier);
    }
}

var _TaroHistory_instances, _TaroHistory_location, _TaroHistory_stack, _TaroHistory_cur, _TaroHistory_window, _TaroHistory_reset;
const cache$1 = new RuntimeCache('history');
class TaroHistory extends Events {
    constructor(location, options) {
        super();
        _TaroHistory_instances.add(this);
        /* private property */
        _TaroHistory_location.set(this, void 0);
        _TaroHistory_stack.set(this, []);
        _TaroHistory_cur.set(this, 0);
        _TaroHistory_window.set(this, void 0);
        __classPrivateFieldSet(this, _TaroHistory_window, options.window, "f");
        __classPrivateFieldSet(this, _TaroHistory_location, location, "f");
        __classPrivateFieldGet(this, _TaroHistory_location, "f").on('__record_history__', (href) => {
            var _a;
            __classPrivateFieldSet(this, _TaroHistory_cur, (_a = __classPrivateFieldGet(this, _TaroHistory_cur, "f"), _a++, _a), "f");
            __classPrivateFieldSet(this, _TaroHistory_stack, __classPrivateFieldGet(this, _TaroHistory_stack, "f").slice(0, __classPrivateFieldGet(this, _TaroHistory_cur, "f")), "f");
            __classPrivateFieldGet(this, _TaroHistory_stack, "f").push({
                state: null,
                title: '',
                url: href
            });
        }, null);
        __classPrivateFieldGet(this, _TaroHistory_location, "f").on('__reset_history__', (href) => {
            __classPrivateFieldGet(this, _TaroHistory_instances, "m", _TaroHistory_reset).call(this, href);
        }, null);
        // 切换上下文行为
        this.on(CONTEXT_ACTIONS.INIT, () => {
            __classPrivateFieldGet(this, _TaroHistory_instances, "m", _TaroHistory_reset).call(this);
        }, null);
        this.on(CONTEXT_ACTIONS.RESTORE, (pageId) => {
            cache$1.set(pageId, {
                location: __classPrivateFieldGet(this, _TaroHistory_location, "f"),
                stack: __classPrivateFieldGet(this, _TaroHistory_stack, "f").slice(),
                cur: __classPrivateFieldGet(this, _TaroHistory_cur, "f")
            });
        }, null);
        this.on(CONTEXT_ACTIONS.RECOVER, (pageId) => {
            if (cache$1.has(pageId)) {
                const ctx = cache$1.get(pageId);
                __classPrivateFieldSet(this, _TaroHistory_location, ctx.location, "f");
                __classPrivateFieldSet(this, _TaroHistory_stack, ctx.stack, "f");
                __classPrivateFieldSet(this, _TaroHistory_cur, ctx.cur, "f");
            }
        }, null);
        this.on(CONTEXT_ACTIONS.DESTORY, (pageId) => {
            cache$1.delete(pageId);
        }, null);
        __classPrivateFieldGet(this, _TaroHistory_instances, "m", _TaroHistory_reset).call(this);
    }
    /* public property */
    get length() {
        return __classPrivateFieldGet(this, _TaroHistory_stack, "f").length;
    }
    get state() {
        return __classPrivateFieldGet(this, _TaroHistory_stack, "f")[__classPrivateFieldGet(this, _TaroHistory_cur, "f")].state;
    }
    /* public method */
    go(delta) {
        if (!isNumber(delta) || isNaN(delta))
            return;
        let targetIdx = __classPrivateFieldGet(this, _TaroHistory_cur, "f") + delta;
        targetIdx = Math.min(Math.max(targetIdx, 0), this.length - 1);
        __classPrivateFieldSet(this, _TaroHistory_cur, targetIdx, "f");
        __classPrivateFieldGet(this, _TaroHistory_location, "f").trigger('__set_href_without_history__', __classPrivateFieldGet(this, _TaroHistory_stack, "f")[__classPrivateFieldGet(this, _TaroHistory_cur, "f")].url);
        __classPrivateFieldGet(this, _TaroHistory_window, "f").trigger('popstate', __classPrivateFieldGet(this, _TaroHistory_stack, "f")[__classPrivateFieldGet(this, _TaroHistory_cur, "f")]);
    }
    back() {
        this.go(-1);
    }
    forward() {
        this.go(1);
    }
    pushState(state, title, url) {
        if (!url || !isString(url))
            return;
        __classPrivateFieldSet(this, _TaroHistory_stack, __classPrivateFieldGet(this, _TaroHistory_stack, "f").slice(0, __classPrivateFieldGet(this, _TaroHistory_cur, "f") + 1), "f");
        __classPrivateFieldGet(this, _TaroHistory_stack, "f").push({
            state,
            title,
            url
        });
        __classPrivateFieldSet(this, _TaroHistory_cur, this.length - 1, "f");
        __classPrivateFieldGet(this, _TaroHistory_location, "f").trigger('__set_href_without_history__', url);
    }
    replaceState(state, title, url) {
        if (!url || !isString(url))
            return;
        __classPrivateFieldGet(this, _TaroHistory_stack, "f")[__classPrivateFieldGet(this, _TaroHistory_cur, "f")] = {
            state,
            title,
            url
        };
        __classPrivateFieldGet(this, _TaroHistory_location, "f").trigger('__set_href_without_history__', url);
    }
    // For debug
    get cache() {
        return cache$1;
    }
}
_TaroHistory_location = new WeakMap(), _TaroHistory_stack = new WeakMap(), _TaroHistory_cur = new WeakMap(), _TaroHistory_window = new WeakMap(), _TaroHistory_instances = new WeakSet(), _TaroHistory_reset = function _TaroHistory_reset(href = '') {
    __classPrivateFieldSet(this, _TaroHistory_stack, [
        {
            state: null,
            title: '',
            url: href || __classPrivateFieldGet(this, _TaroHistory_location, "f").href
        }
    ], "f");
    __classPrivateFieldSet(this, _TaroHistory_cur, 0, "f");
};
const History = "harmony" === 'web' ? env.window.History : TaroHistory;

const Current = {
    app: null,
    router: null,
    page: null
};
const getCurrentInstance = () => Current;

var _dict, _a;
const findReg = /[!'()~]|%20|%00/g;
const plusReg = /\+/g;
const replaceCharMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00',
};
function replacer(match) {
    return replaceCharMap[match];
}
function appendTo(dict, name, value) {
    const res = isArray(value) ? value.join(',') : value;
    if (name in dict)
        dict[name].push(res);
    else
        dict[name] = [res];
}
function addEach(value, key) {
    appendTo(this, key, value);
}
function decode(str) {
    return decodeURIComponent(str.replace(plusReg, ' '));
}
function encode(str) {
    return encodeURIComponent(str).replace(findReg, replacer);
}
const URLSearchParams = "harmony" === 'web' ? env.window.URLSearchParams : (_a = class {
        constructor(query) {
            _dict.set(this, Object.create(null));
            query !== null && query !== void 0 ? query : (query = '');
            const dict = __classPrivateFieldGet(this, _dict, "f");
            if (typeof query === 'string') {
                if (query.charAt(0) === '?') {
                    query = query.slice(1);
                }
                for (let pairs = query.split('&'), i = 0, length = pairs.length; i < length; i++) {
                    const value = pairs[i];
                    const index = value.indexOf('=');
                    if (index > -1) {
                        appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));
                    }
                    else if (value.length) {
                        appendTo(dict, decode(value), '');
                    }
                }
            }
            else {
                if (isArray(query)) {
                    for (let i = 0, length = query.length; i < length; i++) {
                        const value = query[i];
                        appendTo(dict, value[0], value[1]);
                    }
                }
                else if (query.forEach) {
                    query.forEach(addEach, dict);
                }
                else {
                    for (const key in query) {
                        appendTo(dict, key, query[key]);
                    }
                }
            }
        }
        append(name, value) {
            appendTo(__classPrivateFieldGet(this, _dict, "f"), name, value);
        }
        delete(name) {
            delete __classPrivateFieldGet(this, _dict, "f")[name];
        }
        get(name) {
            const dict = __classPrivateFieldGet(this, _dict, "f");
            return name in dict ? dict[name][0] : null;
        }
        getAll(name) {
            const dict = __classPrivateFieldGet(this, _dict, "f");
            return name in dict ? dict[name].slice(0) : [];
        }
        has(name) {
            return name in __classPrivateFieldGet(this, _dict, "f");
        }
        keys() {
            return Object.keys(__classPrivateFieldGet(this, _dict, "f"));
        }
        set(name, value) {
            __classPrivateFieldGet(this, _dict, "f")[name] = ['' + value];
        }
        forEach(callback, thisArg) {
            const dict = __classPrivateFieldGet(this, _dict, "f");
            Object.getOwnPropertyNames(dict).forEach(function (name) {
                dict[name].forEach(function (value) {
                    callback.call(thisArg, value, name, this);
                }, this);
            }, this);
        }
        toJSON() {
            return {};
        }
        toString() {
            const dict = __classPrivateFieldGet(this, _dict, "f");
            const query = [];
            for (const key in dict) {
                const name = encode(key);
                for (let i = 0, value = dict[key]; i < value.length; i++) {
                    query.push(name + '=' + encode(value[i]));
                }
            }
            return query.join('&');
        }
    },
    _dict = new WeakMap(),
    _a);

var _TaroURL_hash, _TaroURL_hostname, _TaroURL_pathname, _TaroURL_port, _TaroURL_protocol, _TaroURL_search;
class TaroURL {
    static createObjectURL() {
        throw new Error('Oops, not support URL.createObjectURL() in miniprogram.');
    }
    static revokeObjectURL() {
        throw new Error('Oops, not support URL.revokeObjectURL() in miniprogram.');
    }
    constructor(url, base) {
        /* private property */
        _TaroURL_hash.set(this, '');
        _TaroURL_hostname.set(this, '');
        _TaroURL_pathname.set(this, '');
        _TaroURL_port.set(this, '');
        _TaroURL_protocol.set(this, '');
        _TaroURL_search.set(this, void 0);
        if (!isString(url))
            url = String(url);
        const parseResult = parseUrlBase(url, base);
        const { hash, hostname, pathname, port, protocol, search } = parseResult;
        __classPrivateFieldSet(this, _TaroURL_hash, hash, "f");
        __classPrivateFieldSet(this, _TaroURL_hostname, hostname, "f");
        __classPrivateFieldSet(this, _TaroURL_pathname, pathname || '/', "f");
        __classPrivateFieldSet(this, _TaroURL_port, port, "f");
        __classPrivateFieldSet(this, _TaroURL_protocol, protocol, "f");
        __classPrivateFieldSet(this, _TaroURL_search, new URLSearchParams(search), "f");
    }
    /* public property */
    get protocol() {
        return __classPrivateFieldGet(this, _TaroURL_protocol, "f");
    }
    set protocol(val) {
        isString(val) && (__classPrivateFieldSet(this, _TaroURL_protocol, val.trim(), "f"));
    }
    get host() {
        return this.hostname + (this.port ? ':' + this.port : '');
    }
    set host(val) {
        if (val && isString(val)) {
            val = val.trim();
            const { hostname, port } = parseUrl(`//${val}`);
            this.hostname = hostname;
            this.port = port;
        }
    }
    get hostname() {
        return __classPrivateFieldGet(this, _TaroURL_hostname, "f");
    }
    set hostname(val) {
        val && isString(val) && (__classPrivateFieldSet(this, _TaroURL_hostname, val.trim(), "f"));
    }
    get port() {
        return __classPrivateFieldGet(this, _TaroURL_port, "f");
    }
    set port(val) {
        isString(val) && (__classPrivateFieldSet(this, _TaroURL_port, val.trim(), "f"));
    }
    get pathname() {
        return __classPrivateFieldGet(this, _TaroURL_pathname, "f");
    }
    set pathname(val) {
        if (isString(val)) {
            val = val.trim();
            const HEAD_REG = /^(\/|\.\/|\.\.\/)/;
            let temp = val;
            while (HEAD_REG.test(temp)) {
                temp = temp.replace(HEAD_REG, '');
            }
            if (temp)
                __classPrivateFieldSet(this, _TaroURL_pathname, '/' + temp, "f");
            else
                __classPrivateFieldSet(this, _TaroURL_pathname, '/', "f");
        }
    }
    get search() {
        const val = __classPrivateFieldGet(this, _TaroURL_search, "f").toString();
        return (val.length === 0 || val.startsWith('?')) ? val : `?${val}`;
    }
    set search(val) {
        if (isString(val)) {
            val = val.trim();
            __classPrivateFieldSet(this, _TaroURL_search, new URLSearchParams(val), "f");
        }
    }
    get hash() {
        return __classPrivateFieldGet(this, _TaroURL_hash, "f");
    }
    set hash(val) {
        if (isString(val)) {
            val = val.trim();
            if (val)
                __classPrivateFieldSet(this, _TaroURL_hash, val.startsWith('#') ? val : `#${val}`, "f");
            else
                __classPrivateFieldSet(this, _TaroURL_hash, '', "f");
        }
    }
    get href() {
        return `${this.protocol}//${this.host}${this.pathname}${this.search}${this.hash}`;
    }
    set href(val) {
        if (val && isString(val)) {
            val = val.trim();
            const { protocol, hostname, port, hash, search, pathname } = parseUrl(val);
            this.protocol = protocol;
            this.hostname = hostname;
            this.pathname = pathname;
            this.port = port;
            this.hash = hash;
            this.search = search;
        }
    }
    get origin() {
        return `${this.protocol}//${this.host}`;
    }
    set origin(val) {
        if (val && isString(val)) {
            val = val.trim();
            const { protocol, hostname, port } = parseUrl(val);
            this.protocol = protocol;
            this.hostname = hostname;
            this.port = port;
        }
    }
    get searchParams() {
        return __classPrivateFieldGet(this, _TaroURL_search, "f");
    }
    // public method
    toString() {
        return this.href;
    }
    toJSON() {
        return this.toString();
    }
    // convenient for deconstructor
    _toRaw() {
        return {
            protocol: this.protocol,
            port: this.port,
            host: this.host,
            hostname: this.hostname,
            pathname: this.pathname,
            hash: this.hash,
            search: this.search,
            origin: this.origin,
            href: this.href,
        };
    }
}
_TaroURL_hash = new WeakMap(), _TaroURL_hostname = new WeakMap(), _TaroURL_pathname = new WeakMap(), _TaroURL_port = new WeakMap(), _TaroURL_protocol = new WeakMap(), _TaroURL_search = new WeakMap();
const URL = "harmony" === 'web' ? env.window.URL : TaroURL;
function parseUrl(url = '') {
    const result = {
        href: '',
        origin: '',
        protocol: '',
        hostname: '',
        host: '',
        port: '',
        pathname: '',
        search: '',
        hash: ''
    };
    if (!url || !isString(url))
        return result;
    url = url.trim();
    const PATTERN = /^(([^:/?#]+):)?\/\/(([^/?#]+):(.+)@)?([^/?#:]*)(:(\d+))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    const matches = url.match(PATTERN);
    if (!matches)
        return result;
    // TODO: username & password ?
    result.protocol = matches[1] || 'https:';
    result.hostname = matches[6] || 'taro.com';
    result.port = matches[8] || '';
    result.pathname = matches[9] || '/';
    result.search = matches[10] || '';
    result.hash = matches[12] || '';
    result.href = url;
    result.origin = result.protocol + '//' + result.hostname;
    result.host = result.hostname + (result.port ? `:${result.port}` : '');
    return result;
}
function parseUrlBase(url, base) {
    const VALID_URL = /^(https?:)\/\//i;
    let fullUrl = '';
    let parsedBase = null;
    if (!isUndefined(base)) {
        base = String(base).trim();
        if (!VALID_URL.test(base))
            throw new TypeError(`Failed to construct 'URL': Invalid base URL`);
        parsedBase = parseUrl(base);
    }
    url = String(url).trim();
    if (VALID_URL.test(url)) {
        fullUrl = url;
    }
    else if (parsedBase) {
        if (url) {
            if (url.startsWith('//')) {
                fullUrl = parsedBase.protocol + url;
            }
            else {
                fullUrl = parsedBase.origin + (url.startsWith('/') ? url : `/${url}`);
            }
        }
        else {
            fullUrl = parsedBase.href;
        }
    }
    else {
        throw new TypeError(`Failed to construct 'URL': Invalid URL`);
    }
    return parseUrl(fullUrl);
}

var _TaroLocation_instances, _TaroLocation_url, _TaroLocation_noCheckUrl, _TaroLocation_window, _TaroLocation_reset, _TaroLocation_getPreValue, _TaroLocation_rollBack, _TaroLocation_recordHistory, _TaroLocation_checkUrlChange;
const INIT_URL = 'https://taro.com';
const cache = new RuntimeCache('location');
class TaroLocation extends Events {
    constructor(options) {
        super();
        _TaroLocation_instances.add(this);
        /* private property */
        _TaroLocation_url.set(this, new URL(INIT_URL));
        _TaroLocation_noCheckUrl.set(this, false);
        _TaroLocation_window.set(this, void 0);
        __classPrivateFieldSet(this, _TaroLocation_window, options.window, "f");
        __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_reset).call(this);
        this.on('__set_href_without_history__', (href) => {
            __classPrivateFieldSet(this, _TaroLocation_noCheckUrl, true, "f");
            const lastHash = __classPrivateFieldGet(this, _TaroLocation_url, "f").hash;
            __classPrivateFieldGet(this, _TaroLocation_url, "f").href = generateFullUrl(href);
            if (lastHash !== __classPrivateFieldGet(this, _TaroLocation_url, "f").hash) {
                __classPrivateFieldGet(this, _TaroLocation_window, "f").trigger('hashchange');
            }
            __classPrivateFieldSet(this, _TaroLocation_noCheckUrl, false, "f");
        }, null);
        // 切换上下文行为
        this.on(CONTEXT_ACTIONS.INIT, () => {
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_reset).call(this);
        }, null);
        this.on(CONTEXT_ACTIONS.RESTORE, (pageId) => {
            cache.set(pageId, {
                lastHref: this.href,
            });
        }, null);
        this.on(CONTEXT_ACTIONS.RECOVER, (pageId) => {
            // 数据恢复时，不需要执行跳转
            if (cache.has(pageId)) {
                const ctx = cache.get(pageId);
                __classPrivateFieldSet(this, _TaroLocation_noCheckUrl, true, "f");
                __classPrivateFieldGet(this, _TaroLocation_url, "f").href = ctx.lastHref;
                __classPrivateFieldSet(this, _TaroLocation_noCheckUrl, false, "f");
            }
        }, null);
        this.on(CONTEXT_ACTIONS.DESTORY, (pageId) => {
            cache.delete(pageId);
        }, null);
    }
    /* public property */
    get protocol() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").protocol;
    }
    set protocol(val) {
        const REG = /^(http|https):$/i;
        if (!val || !isString(val) || !REG.test(val.trim()))
            return;
        val = val.trim();
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").protocol = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    get host() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").host;
    }
    set host(val) {
        if (!val || !isString(val))
            return;
        val = val.trim();
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").host = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    get hostname() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").hostname;
    }
    set hostname(val) {
        if (!val || !isString(val))
            return;
        val = val.trim();
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").hostname = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    get port() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").port;
    }
    set port(val) {
        const xVal = Number((val = val.trim()));
        if (!isNumber(xVal) || xVal <= 0)
            return;
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").port = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    get pathname() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").pathname;
    }
    set pathname(val) {
        if (!val || !isString(val))
            return;
        val = val.trim();
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").pathname = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    get search() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").search;
    }
    set search(val) {
        if (!val || !isString(val))
            return;
        val = val.trim();
        val = val.startsWith('?') ? val : `?${val}`;
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").search = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    get hash() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").hash;
    }
    // 小程序的navigateTo存在截断hash字符串的问题
    set hash(val) {
        if (!val || !isString(val))
            return;
        val = val.trim();
        val = val.startsWith('#') ? val : `#${val}`;
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").hash = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    get href() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").href;
    }
    set href(val) {
        const REG = /^(http:|https:)?\/\/.+/;
        if (!val || !isString(val) || !REG.test((val = val.trim())))
            return;
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").href = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    get origin() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").origin;
    }
    set origin(val) {
        const REG = /^(http:|https:)?\/\/.+/;
        if (!val || !isString(val) || !REG.test((val = val.trim())))
            return;
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").origin = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    /* public method */
    assign() {
        warn(true, '小程序环境中调用location.assign()无效.');
    }
    reload() {
        warn(true, '小程序环境中调用location.reload()无效.');
    }
    replace(url) {
        this.trigger('__set_href_without_history__', url);
    }
    toString() {
        return this.href;
    }
    // For debug
    get cache() {
        return cache;
    }
}
_TaroLocation_url = new WeakMap(), _TaroLocation_noCheckUrl = new WeakMap(), _TaroLocation_window = new WeakMap(), _TaroLocation_instances = new WeakSet(), _TaroLocation_reset = function _TaroLocation_reset() {
    const Current = getCurrentInstance();
    const router = Current.router;
    if (router) {
        const { path, params } = router;
        const searchArr = Object.keys(params).map((key) => {
            return `${key}=${params[key]}`;
        });
        const searchStr = searchArr.length > 0 ? '?' + searchArr.join('&') : '';
        const url = `${INIT_URL}${path.startsWith('/') ? path : '/' + path}${searchStr}`;
        __classPrivateFieldSet(this, _TaroLocation_url, new URL(url), "f");
        this.trigger('__reset_history__', this.href);
    }
}, _TaroLocation_getPreValue = function _TaroLocation_getPreValue() {
    return __classPrivateFieldGet(this, _TaroLocation_url, "f")._toRaw();
}, _TaroLocation_rollBack = function _TaroLocation_rollBack(href) {
    __classPrivateFieldGet(this, _TaroLocation_url, "f").href = href;
}, _TaroLocation_recordHistory = function _TaroLocation_recordHistory() {
    this.trigger('__record_history__', this.href);
}, _TaroLocation_checkUrlChange = function _TaroLocation_checkUrlChange(preValue) {
    if (__classPrivateFieldGet(this, _TaroLocation_noCheckUrl, "f")) {
        return false;
    }
    const { protocol, hostname, port, pathname, search, hash } = __classPrivateFieldGet(this, _TaroLocation_url, "f")._toRaw();
    // 跨域三要素不允许修改
    if (protocol !== preValue.protocol || hostname !== preValue.hostname || port !== preValue.port) {
        __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_rollBack).call(this, preValue.href);
        return false;
    }
    // pathname
    if (pathname !== preValue.pathname) {
        return true;
    }
    // search
    if (search !== preValue.search) {
        return true;
    }
    // hashchange
    if (hash !== preValue.hash) {
        __classPrivateFieldGet(this, _TaroLocation_window, "f").trigger('hashchange');
        return true;
    }
    __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_rollBack).call(this, preValue.href);
    return false;
};
const Location = "harmony" === 'web' ? env.window.Location : TaroLocation;
function generateFullUrl(val = '') {
    const origin = INIT_URL;
    if (/^[/?#]/.test(val)) {
        return origin + val;
    }
    return val;
}

const machine = 'Macintosh';
const arch = 'Intel Mac OS X 10_14_5';
const engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
const msg = '(' + machine + '; ' + arch + ') ' + engine;
const nav = "harmony" === 'web' ? env.window.navigator : {
    appCodeName: 'Mozilla',
    appName: 'Netscape',
    appVersion: '5.0 ' + msg,
    cookieEnabled: true,
    mimeTypes: [],
    onLine: true,
    platform: 'MacIntel',
    plugins: [],
    product: 'Taro',
    productSub: '20030107',
    userAgent: 'Mozilla/5.0 ' + msg,
    vendor: 'Joyent',
    vendorSub: ''
};

// https://github.com/myrne/performance-now
let now;
(function () {
    let loadTime;
    if ((typeof performance !== 'undefined' && performance !== null) && performance.now) {
        now = () => performance.now();
    }
    else if (Date.now) {
        loadTime = Date.now();
        now = () => Date.now() - loadTime;
    }
    else {
        loadTime = new Date().getTime();
        now = () => new Date().getTime() - loadTime;
    }
})();
let lastTime = 0;
// https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
const _raf = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null ? requestAnimationFrame : function (callback) {
    const _now = now();
    const nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.
    return setTimeout(function () { callback(lastTime = nextTime); }, nextTime - _now);
};
const _caf = typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null
    ? cancelAnimationFrame
    : function (seed) {
        // fix https://github.com/NervJS/taro/issues/7749
        clearTimeout(seed);
    };

class TaroWindow extends Events {
    constructor() {
        super();
        this.navigator = nav;
        this.requestAnimationFrame = _raf;
        this.cancelAnimationFrame = _caf;
        this.getComputedStyle = getComputedStyle;
        const globalProperties = [
            ...Object.getOwnPropertyNames(globalThis || {}),
            ...Object.getOwnPropertySymbols(globalThis || {})
        ];
        globalProperties.forEach(property => {
            if (property === 'atob' || property === 'document')
                return;
            if (!Object.prototype.hasOwnProperty.call(this, property)) {
                // 防止小程序环境下，window 上的某些 get 属性在赋值时报错
                try {
                    this[property] = globalThis[property];
                }
                catch (e) {
                    if ("production" !== 'production') {
                        console.warn(`[Taro warn] window.${String(property)} 在赋值到 window 时报错`);
                    }
                }
            }
        });
        this.Date || (this.Date = Date);
        // 应用启动时，提供给需要读取历史信息的库使用
        this.location = new Location({ window: this });
        // @ts-ignore
        this.history = new History(this.location, { window: this });
        this.initEvent();
    }
    initEvent() {
        const _location = this.location;
        const _history = this.history;
        this.on(CONTEXT_ACTIONS.INIT, (pageId) => {
            // 页面onload，为该页面建立新的上下文信息
            _location.trigger(CONTEXT_ACTIONS.INIT, pageId);
        }, null);
        this.on(CONTEXT_ACTIONS.RECOVER, (pageId) => {
            // 页面onshow，恢复当前页面的上下文信息
            _location.trigger(CONTEXT_ACTIONS.RECOVER, pageId);
            _history.trigger(CONTEXT_ACTIONS.RECOVER, pageId);
        }, null);
        this.on(CONTEXT_ACTIONS.RESTORE, (pageId) => {
            // 页面onhide，缓存当前页面的上下文信息
            _location.trigger(CONTEXT_ACTIONS.RESTORE, pageId);
            _history.trigger(CONTEXT_ACTIONS.RESTORE, pageId);
        }, null);
        this.on(CONTEXT_ACTIONS.DESTORY, (pageId) => {
            // 页面onunload，清除当前页面的上下文信息
            _location.trigger(CONTEXT_ACTIONS.DESTORY, pageId);
            _history.trigger(CONTEXT_ACTIONS.DESTORY, pageId);
        }, null);
    }
    get document() {
        return env.document;
    }
    addEventListener(event, callback) {
        if (!isString(event))
            return;
        this.on(event, callback, null);
    }
    removeEventListener(event, callback) {
        if (!isString(event))
            return;
        this.off(event, callback, null);
    }
    setTimeout(...args) {
        return setTimeout(...args);
    }
    clearTimeout(...args) {
        return clearTimeout(...args);
    }
}
const window$1 = "harmony" === 'web' ? env.window : (env.window = new TaroWindow());
const location = window$1.location;
const history = window$1.history;

// export const removeLeadingSlash = (str = '') => str.replace(/^\.?\//, '')
// export const removeTrailingSearch = (str = '') => str.replace(/\?[\s\S]*$/, '')
const addLeadingSlash = (url = '') => (url.charAt(0) === '/' ? url : '/' + url);
const hasBasename = (path = '', prefix = '') => new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path) || path === prefix;
const stripBasename = (path = '', prefix = '') => hasBasename(path, prefix) ? path.substring(prefix.length) : path;
const stripTrailing = (str = '') => str.replace(/[?#][\s\S]*$/, '');
const stripSuffix = (path = '', suffix = '') => path.includes(suffix) ? path.substring(0, path.length - suffix.length) : path;
const getHomePage = (path = '', basename = '', customRoutes = {}, entryPagePath = '') => {
    var _a;
    const routePath = addLeadingSlash(stripBasename(path, basename));
    const alias = ((_a = Object.entries(customRoutes).find(([key]) => key === routePath)) === null || _a === void 0 ? void 0 : _a[1]) || routePath;
    return entryPagePath || (typeof alias === 'string' ? alias : alias[0]) || basename;
};
const getCurrentPage = (routerMode = 'hash', basename = '/') => {
    const pagePath = routerMode === 'hash'
        ? location.hash.slice(1).split('?')[0]
        : location.pathname;
    return addLeadingSlash(stripBasename(pagePath, basename));
};

const incrementId = () => {
    const chatCodes = [];
    // A-Z
    for (let i = 65; i <= 90; i++) {
        chatCodes.push(i);
    }
    // a-z
    for (let i = 97; i <= 122; i++) {
        chatCodes.push(i);
    }
    const chatCodesLen = chatCodes.length - 1;
    const list = [0, 0];
    return () => {
        const target = list.map(item => chatCodes[item]);
        const res = String.fromCharCode(...target);
        let tailIdx = list.length - 1;
        list[tailIdx]++;
        while (list[tailIdx] > chatCodesLen) {
            list[tailIdx] = 0;
            tailIdx = tailIdx - 1;
            if (tailIdx < 0) {
                list.push(0);
                break;
            }
            list[tailIdx]++;
        }
        return res;
    };
};
function isElement(node) {
    return node.nodeType === 1 /* NodeType.ELEMENT_NODE */;
}
function isText(node) {
    return node.nodeType === 3 /* NodeType.TEXT_NODE */;
}
function isComment(node) {
    return node.nodeName === COMMENT;
}
function isHasExtractProp(el) {
    const res = Object.keys(el.props).find(prop => {
        return !(/^(class|style|id)$/.test(prop) || prop.startsWith('data-'));
    });
    return Boolean(res);
}
/**
 * 往上寻找组件树直到 root，寻找是否有祖先组件绑定了同类型的事件
 * @param node 当前组件
 * @param type 事件类型
 */
function isParentBinded(node, type) {
    var _a;
    while ((node = (node === null || node === void 0 ? void 0 : node.parentElement) || null)) {
        if (!node || node.nodeName === ROOT_STR || node.nodeName === 'root-portal') {
            return false;
        }
        else if ((_a = node.__handlers[type]) === null || _a === void 0 ? void 0 : _a.length) {
            return true;
        }
    }
    return false;
}
function shortcutAttr(key) {
    switch (key) {
        case STYLE:
            return "st" /* Shortcuts.Style */;
        case ID:
            return UID;
        case CLASS:
            return "cl" /* Shortcuts.Class */;
        default:
            return key;
    }
}
const customWrapperCache = new Map();
function extend(ctor, methodName, options) {
    if (isFunction(options)) {
        options = {
            value: options
        };
    }
    Object.defineProperty(ctor.prototype, methodName, Object.assign({ configurable: true, enumerable: true }, options));
}
let componentsAlias$1;
function getComponentsAlias() {
    if (!componentsAlias$1) {
        componentsAlias$1 = getComponentsAlias$1(internalComponents);
    }
    return componentsAlias$1;
}
function convertNumber2PX(value) {
    return value + 'px';
}

class ClassList {
    constructor(className, el) {
        this.tokenList = [];
        this.el = el;
        className.trim().split(/\s+/).forEach(token => this.tokenList.push(token));
    }
    get value() {
        return this.toString();
    }
    get length() {
        return this.tokenList.length;
    }
    add() {
        let index = 0;
        let updated = false;
        const tokens = arguments;
        const length = tokens.length;
        const tokenList = this.tokenList;
        do {
            const token = tokens[index];
            if (this.checkTokenIsValid(token) && !~tokenList.indexOf(token)) {
                tokenList.push(token);
                updated = true;
            }
        } while (++index < length);
        if (updated) {
            this._update();
        }
    }
    remove() {
        let i = 0;
        let updated = false;
        const tokens = arguments;
        const length = tokens.length;
        const tokenList = this.tokenList;
        do {
            const token = tokens[i] + '';
            if (!this.checkTokenIsValid(token))
                continue;
            const index = tokenList.indexOf(token);
            if (~tokenList.indexOf(token)) {
                tokenList.splice(index, 1);
                updated = true;
            }
        } while (++i < length);
        if (updated) {
            this._update();
        }
    }
    contains(token) {
        if (!this.checkTokenIsValid(token))
            return false;
        return !!~this.tokenList.indexOf(token);
    }
    toggle(token, force) {
        const result = this.contains(token);
        const method = result ? force !== true && 'remove' : force !== false && 'add';
        if (method) {
            // @ts-ignore
            this[method](token);
        }
        if (force === true || force === false) {
            return force;
        }
        else {
            return !result;
        }
    }
    replace(token, replacement_token) {
        if (!this.checkTokenIsValid(token) || !this.checkTokenIsValid(replacement_token))
            return;
        const index = this.tokenList.indexOf(token);
        if (~index) {
            this.tokenList.splice(index, 1, replacement_token);
            this._update();
        }
    }
    toString() {
        return this.tokenList.filter(v => v !== '').join(' ');
    }
    checkTokenIsValid(token) {
        if (token === '' || /\s/.test(token))
            return false;
        return true;
    }
    _update() {
        this.el.className = this.value;
    }
}

class EventSource extends Map {
    removeNode(child) {
        const { sid, uid } = child;
        this.delete(sid);
        if (uid !== sid && uid)
            this.delete(uid);
    }
    removeNodeTree(child) {
        this.removeNode(child);
        const { childNodes } = child;
        childNodes.forEach(node => this.removeNodeTree(node));
    }
}
const eventSource = new EventSource();

let SPECIAL_NODES;
let componentsAlias;
/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */
function hydrate(node) {
    var _a;
    // 初始化 componentsAlias
    componentsAlias || (componentsAlias = getComponentsAlias());
    // 初始化 SPECIAL_NODES
    SPECIAL_NODES || (SPECIAL_NODES = hooks.call('getSpecialNodes'));
    const nodeName = node.nodeName;
    let compileModeName = null;
    if (isText(node)) {
        return {
            sid: node.sid,
            ["v" /* Shortcuts.Text */]: node.nodeValue,
            ["nn" /* Shortcuts.NodeName */]: ((_a = componentsAlias[nodeName]) === null || _a === void 0 ? void 0 : _a._num) || '8'
        };
    }
    const data = {
        ["nn" /* Shortcuts.NodeName */]: nodeName,
        sid: node.sid
    };
    if (node.uid !== node.sid) {
        data.uid = node.uid;
    }
    if (!node.isAnyEventBinded() && SPECIAL_NODES.indexOf(nodeName) > -1) {
        data["nn" /* Shortcuts.NodeName */] = `static-${nodeName}`;
        if (nodeName === VIEW && !isHasExtractProp(node)) {
            data["nn" /* Shortcuts.NodeName */] = PURE_VIEW;
        }
    }
    const { props } = node;
    for (const prop in props) {
        const propInCamelCase = toCamelCase(prop);
        if (!prop.startsWith('data-') && // 在 node.dataset 的数据
            prop !== CLASS &&
            prop !== STYLE &&
            prop !== ID &&
            propInCamelCase !== CATCHMOVE &&
            propInCamelCase !== COMPILE_MODE) {
            data[propInCamelCase] = props[prop];
        }
        if ("jdharmony" !== 'swan' &&
            nodeName === VIEW &&
            propInCamelCase === CATCHMOVE &&
            props[prop] !== false) {
            data["nn" /* Shortcuts.NodeName */] = CATCH_VIEW;
        }
        if (propInCamelCase === COMPILE_MODE) {
            compileModeName = props[prop];
        }
    }
    // Children
    data["cn" /* Shortcuts.Childnodes */] = node.childNodes.filter(node => !isComment(node)).map(hydrate);
    if (node.className !== '') {
        data["cl" /* Shortcuts.Class */] = node.className;
    }
    const cssText = node.cssText;
    if (cssText !== '' && nodeName !== 'swiper-item') {
        data["st" /* Shortcuts.Style */] = cssText;
    }
    hooks.call('modifyHydrateData', data, node);
    const nn = data["nn" /* Shortcuts.NodeName */];
    const componentAlias = componentsAlias[nn];
    if (componentAlias) {
        data["nn" /* Shortcuts.NodeName */] = componentAlias._num;
        for (const prop in data) {
            if (prop in componentAlias) {
                data[componentAlias[prop]] = data[prop];
                delete data[prop];
            }
        }
    }
    if (compileModeName !== null) {
        data["nn" /* Shortcuts.NodeName */] = compileModeName;
    }
    const resData = hooks.call('transferHydrateData', data, node, componentAlias);
    return resData || data;
}

class TaroEventTarget {
    constructor() {
        this.__handlers = {};
    }
    addEventListener(type, handler, options) {
        type = type.toLowerCase();
        hooks.call('onAddEvent', type, handler, options, this);
        if (type === 'regionchange') {
            // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
            this.addEventListener('begin', handler, options);
            this.addEventListener('end', handler, options);
            return;
        }
        let isCapture = Boolean(options);
        let isOnce = false;
        if (isObject(options)) {
            isCapture = Boolean(options.capture);
            isOnce = Boolean(options.once);
        }
        if (isOnce) {
            const wrapper = function () {
                handler.apply(this, arguments); // this 指向 Element
                this.removeEventListener(type, wrapper);
            };
            this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options), { once: false }));
            return;
        }
        "production" !== 'production' && warn(isCapture, 'Taro 暂未实现 event 的 capture 特性。');
        // 某些框架，如 PReact 有委托的机制，handler 始终是同一个函数
        // 这会导致多层停止冒泡失败：view -> view(handler.stop = false) -> view(handler.stop = true)
        // 这样解决：view -> view(handlerA.stop = false) -> view(handlerB.stop = false)
        // 因此每次绑定事件都新建一个函数，如果带来了性能问题，可以把这段逻辑抽取到 PReact 插件中。
        const oldHandler = handler;
        handler = function () {
            return oldHandler.apply(this, arguments); // this 指向 Element
        };
        handler.oldHandler = oldHandler;
        const handlers = this.__handlers[type];
        if (isArray(handlers)) {
            handlers.push(handler);
        }
        else {
            this.__handlers[type] = [handler];
        }
    }
    removeEventListener(type, handler) {
        type = type.toLowerCase();
        if (type === 'regionchange') {
            // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
            this.removeEventListener('begin', handler);
            this.removeEventListener('end', handler);
            return;
        }
        if (!handler) {
            return;
        }
        const handlers = this.__handlers[type];
        if (!isArray(handlers)) {
            return;
        }
        const index = handlers.findIndex(item => {
            if (item === handler || item.oldHandler === handler)
                return true;
        });
        "production" !== 'production' && warn(index === -1, `事件: '${type}' 没有注册在 DOM 中，因此不会被移除。`);
        handlers.splice(index, 1);
    }
    isAnyEventBinded() {
        const handlers = this.__handlers;
        const isAnyEventBinded = Object.keys(handlers).find(key => handlers[key].length);
        return Boolean(isAnyEventBinded);
    }
}

const CHILDNODES = "cn" /* Shortcuts.Childnodes */;
const nodeId = incrementId();
class TaroNode extends TaroEventTarget {
    constructor() {
        super();
        this.parentNode = null;
        this.childNodes = [];
        this.hydrate = (node) => () => hydrate(node);
        this.uid = '_' + nodeId(); // dom 节点 id，开发者可修改
        this.sid = this.uid; // dom 节点全局唯一 id，不可被修改
        eventSource.set(this.sid, this);
    }
    updateChildNodes(isClean) {
        const cleanChildNodes = () => [];
        const rerenderChildNodes = () => {
            const childNodes = this.childNodes.filter(node => !isComment(node));
            return childNodes.map(hydrate);
        };
        this.enqueueUpdate({
            path: `${this._path}.${CHILDNODES}`,
            value: isClean ? cleanChildNodes : rerenderChildNodes
        });
    }
    updateSingleChild(index) {
        this.childNodes.forEach((child, childIndex) => {
            if (isComment(child))
                return;
            if (index && childIndex < index)
                return;
            this.enqueueUpdate({
                path: child._path,
                value: this.hydrate(child)
            });
        });
    }
    get _root() {
        var _a;
        return ((_a = this.parentNode) === null || _a === void 0 ? void 0 : _a._root) || null;
    }
    findIndex(refChild) {
        const index = this.childNodes.indexOf(refChild);
        ensure(index !== -1, 'The node to be replaced is not a child of this node.');
        return index;
    }
    get _path() {
        const parentNode = this.parentNode;
        if (parentNode) {
            // 计算路径时，先过滤掉 comment 节点
            const list = parentNode.childNodes.filter(node => !isComment(node));
            const indexOfNode = list.indexOf(this);
            const index = hooks.call('getPathIndex', indexOfNode);
            return `${parentNode._path}.${CHILDNODES}.${index}`;
        }
        return '';
    }
    get nextSibling() {
        const parentNode = this.parentNode;
        return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) + 1]) || null;
    }
    get previousSibling() {
        const parentNode = this.parentNode;
        return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) - 1]) || null;
    }
    get parentElement() {
        const parentNode = this.parentNode;
        if ((parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 1 /* NodeType.ELEMENT_NODE */) {
            return parentNode;
        }
        return null;
    }
    get firstChild() {
        return this.childNodes[0] || null;
    }
    get lastChild() {
        const childNodes = this.childNodes;
        return childNodes[childNodes.length - 1] || null;
    }
    /**
     * @textContent 目前只能置空子元素
     * @TODO 等待完整 innerHTML 实现
     */
    // eslint-disable-next-line accessor-pairs
    set textContent(text) {
        const removedNodes = this.childNodes.slice();
        const addedNodes = [];
        // Handle old children' data structure & ref
        while (this.firstChild) {
            this.removeChild(this.firstChild, { doUpdate: false });
        }
        if (text === '') {
            this.updateChildNodes(true);
        }
        else {
            const newText = env.document.createTextNode(text);
            addedNodes.push(newText);
            this.appendChild(newText);
            this.updateChildNodes();
        }
        // @Todo: appendChild 会多触发一次
        MutationObserver$1.record({
            type: "childList" /* MutationRecordType.CHILD_LIST */,
            target: this,
            removedNodes,
            addedNodes
        });
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
     * @scenario
     * [A,B,C]
     *   1. insert D before C, D has no parent
     *   2. insert D before C, D has the same parent of C
     *   3. insert D before C, D has the different parent of C
     */
    insertBefore(newChild, refChild, isReplace) {
        if (newChild.nodeName === DOCUMENT_FRAGMENT) {
            newChild.childNodes.reduceRight((previousValue, currentValue) => {
                this.insertBefore(currentValue, previousValue);
                return currentValue;
            }, refChild);
            return newChild;
        }
        // Parent release newChild
        //   - cleanRef: false (No need to clean eventSource, because newChild is about to be inserted)
        //   - update: true (Need to update parent.childNodes, because parent.childNodes is reordered)
        newChild.remove({ cleanRef: false });
        let index = 0;
        // Data structure
        newChild.parentNode = this;
        if (refChild) {
            // insertBefore & replaceChild
            index = this.findIndex(refChild);
            this.childNodes.splice(index, 0, newChild);
        }
        else {
            // appendChild
            this.childNodes.push(newChild);
        }
        const childNodesLength = this.childNodes.length;
        // Serialization
        if (this._root) {
            if (!refChild) {
                // appendChild
                const isOnlyChild = childNodesLength === 1;
                if (isOnlyChild) {
                    this.updateChildNodes();
                }
                else {
                    this.enqueueUpdate({
                        path: newChild._path,
                        value: this.hydrate(newChild)
                    });
                }
            }
            else if (isReplace) {
                // replaceChild
                this.enqueueUpdate({
                    path: newChild._path,
                    value: this.hydrate(newChild)
                });
            }
            else {
                // insertBefore 有两种更新模式
                // 比方说有 A B C 三个节点，现在要在 C 前插入 D
                // 1. 插入 D，然后更新整个父节点的 childNodes 数组
                // setData({ cn: [A, B, D, C] })
                // 2. 插入 D，然后更新 D 以及 D 之后每个节点的数据
                // setData ({
                //   cn.[2]: D,
                //   cn.[3]: C,
                // })
                // 由于微信解析 ’cn.[2]‘ 这些路径的时候也需要消耗时间，
                // 所以根据 insertBefore 插入的位置来做不同的处理
                const mark = childNodesLength * 2 / 3;
                if (mark > index) {
                    // 如果 insertBefore 的位置在 childNodes 的 2/3 前，则为了避免解析路径消耗过多的时间，采用第一种方式
                    this.updateChildNodes();
                }
                else {
                    // 如果 insertBefore 的位置在 childNodes 的 2/3 之后，则采用第二种方式，避免 childNodes 的全量更新
                    this.updateSingleChild(index);
                }
            }
        }
        MutationObserver$1.record({
            type: "childList" /* MutationRecordType.CHILD_LIST */,
            target: this,
            addedNodes: [newChild],
            removedNodes: isReplace
                ? [refChild] /** replaceChild */
                : [],
            nextSibling: isReplace
                ? refChild.nextSibling /** replaceChild */
                : (refChild || null), /** insertBefore & appendChild */
            previousSibling: newChild.previousSibling
        });
        return newChild;
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
     * @scenario
     * [A,B,C]
     *   1. append C, C has no parent
     *   2. append C, C has the same parent of B
     *   3. append C, C has the different parent of B
     */
    appendChild(newChild) {
        return this.insertBefore(newChild);
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/replaceChild
     * @scenario
     * [A,B,C]
     *   1. replace B with C, C has no parent
     *   2. replace B with C, C has no parent, C has the same parent of B
     *   3. replace B with C, C has no parent, C has the different parent of B
     */
    replaceChild(newChild, oldChild) {
        if (oldChild.parentNode !== this)
            return;
        // Insert the newChild
        this.insertBefore(newChild, oldChild, true);
        // Destroy the oldChild
        //   - cleanRef: true (Need to clean eventSource, because the oldChild was detached from the DOM tree)
        //   - update: false (No need to update parent.childNodes, because replace will not cause the parent.childNodes being reordered)
        oldChild.remove({ doUpdate: false });
        return oldChild;
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild
     * @scenario
     * [A,B,C]
     *   1. remove A or B
     *   2. remove C
     */
    removeChild(child, options = {}) {
        const { cleanRef, doUpdate } = options;
        if (cleanRef !== false && doUpdate !== false) {
            // appendChild/replaceChild/insertBefore 不应该触发
            // @Todo: 但其实如果 newChild 的父节点是另一颗子树的节点，应该是要触发的
            MutationObserver$1.record({
                type: "childList" /* MutationRecordType.CHILD_LIST */,
                target: this,
                removedNodes: [child],
                nextSibling: child.nextSibling,
                previousSibling: child.previousSibling
            });
        }
        // Data Structure
        const index = this.findIndex(child);
        this.childNodes.splice(index, 1);
        child.parentNode = null;
        // Set eventSource
        if (cleanRef !== false) {
            eventSource.removeNodeTree(child);
        }
        // Serialization
        if (this._root && doUpdate !== false) {
            this.updateChildNodes();
        }
        return child;
    }
    remove(options) {
        var _a;
        (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this, options);
    }
    hasChildNodes() {
        return this.childNodes.length > 0;
    }
    enqueueUpdate(payload) {
        var _a;
        (_a = this._root) === null || _a === void 0 ? void 0 : _a.enqueueUpdate(payload);
    }
    get ownerDocument() {
        return env.document;
    }
    static extend(methodName, options) {
        extend(TaroNode, methodName, options);
    }
}

/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */
const WEBKIT = 'webkit';
const styleProperties = [
    'all',
    'appearance',
    'blockOverflow',
    'blockSize',
    'bottom',
    'clear',
    'contain',
    'content',
    'continue',
    'cursor',
    'direction',
    'display',
    'filter',
    'float',
    'gap',
    'height',
    'inset',
    'isolation',
    'left',
    'letterSpacing',
    'lightingColor',
    'markerSide',
    'mixBlendMode',
    'opacity',
    'order',
    'position',
    'quotes',
    'resize',
    'right',
    'rowGap',
    'tabSize',
    'tableLayout',
    'top',
    'userSelect',
    'verticalAlign',
    'visibility',
    'voiceFamily',
    'volume',
    'whiteSpace',
    'widows',
    'width',
    'zIndex',
    'pointerEvents',
    'aspectRatio'
    /** 非常用 style */
    // 'azimuth',
    // 'backfaceVisibility',
    // 'baselineShift',
    // 'captionSide',
    // 'chains',
    // 'dominantBaseline',
    // 'elevation',
    // 'emptyCells',
    // 'forcedColorAdjust',
    // 'glyphOrientationVertical',
    // 'hangingPunctuation',
    // 'hyphenateCharacter',
    // 'hyphens',
    // 'imageOrientation',
    // 'imageResolution',
    // 'orphans',
    // 'playDuring',
    // 'pointerEvents',
    // 'regionFragment',
    // 'richness',
    // 'running',
    // 'scrollBehavior',
    // 'speechRate',
    // 'stress',
    // 'stringSet',
    // 'unicodeBidi',
    // 'willChange',
    // 'writingMode',
];
// 减少文件体积
function combine(prefix, list, excludeSelf) {
    !excludeSelf && styleProperties.push(prefix);
    list.forEach(item => {
        styleProperties.push(prefix + item);
        if (prefix === WEBKIT) {
            styleProperties.push('Webkit' + item);
        }
    });
}
const color = 'Color';
const style = 'Style';
const width = 'Width';
const image = 'Image';
const size = 'Size';
const color_style_width = [color, style, width];
const fitlength_fitwidth_image = ['FitLength', 'FitWidth', image];
const fitlength_fitwidth_image_radius = [...fitlength_fitwidth_image, 'Radius'];
const color_style_width_fitlength_fitwidth_image = [...color_style_width, ...fitlength_fitwidth_image];
const endRadius_startRadius = ['EndRadius', 'StartRadius'];
const bottom_left_right_top = ['Bottom', 'Left', 'Right', 'Top'];
const end_start = ['End', 'Start'];
const content_items_self = ['Content', 'Items', 'Self'];
const blockSize_height_inlineSize_width = ['BlockSize', 'Height', 'InlineSize', width];
const after_before = ['After', 'Before'];
combine('borderBlock', color_style_width);
combine('borderBlockEnd', color_style_width);
combine('borderBlockStart', color_style_width);
combine('outline', [...color_style_width, 'Offset']);
combine('border', [...color_style_width, 'Boundary', 'Break', 'Collapse', 'Radius', 'Spacing']);
combine('borderFit', ['Length', width]);
combine('borderInline', color_style_width);
combine('borderInlineEnd', color_style_width);
combine('borderInlineStart', color_style_width);
combine('borderLeft', color_style_width_fitlength_fitwidth_image);
combine('borderRight', color_style_width_fitlength_fitwidth_image);
combine('borderTop', color_style_width_fitlength_fitwidth_image);
combine('borderBottom', color_style_width_fitlength_fitwidth_image);
combine('textDecoration', [color, style, 'Line']);
combine('textEmphasis', [color, style, 'Position']);
combine('scrollMargin', bottom_left_right_top);
combine('scrollPadding', bottom_left_right_top);
combine('padding', bottom_left_right_top);
combine('margin', [...bottom_left_right_top, 'Trim']);
combine('scrollMarginBlock', end_start);
combine('scrollMarginInline', end_start);
combine('scrollPaddingBlock', end_start);
combine('scrollPaddingInline', end_start);
combine('gridColumn', end_start);
combine('gridRow', end_start);
combine('insetBlock', end_start);
combine('insetInline', end_start);
combine('marginBlock', end_start);
combine('marginInline', end_start);
combine('paddingBlock', end_start);
combine('paddingInline', end_start);
combine('pause', after_before);
combine('cue', after_before);
combine('mask', ['Clip', 'Composite', image, 'Mode', 'Origin', 'Position', 'Repeat', size, 'Type']);
combine('borderImage', ['Outset', 'Repeat', 'Slice', 'Source', 'Transform', width]);
combine('maskBorder', ['Mode', 'Outset', 'Repeat', 'Slice', 'Source', width]);
combine('font', ['Family', 'FeatureSettings', 'Kerning', 'LanguageOverride', 'MaxSize', 'MinSize', 'OpticalSizing', 'Palette', size, 'SizeAdjust', 'Stretch', style, 'Weight', 'VariationSettings']);
combine('transform', ['Box', 'Origin', style]);
combine('background', [color, image, 'Attachment', 'BlendMode', 'Clip', 'Origin', 'Position', 'Repeat', size]);
combine('listStyle', [image, 'Position', 'Type']);
combine('scrollSnap', ['Align', 'Stop', 'Type']);
combine('grid', ['Area', 'AutoColumns', 'AutoFlow', 'AutoRows']);
combine('gridTemplate', ['Areas', 'Columns', 'Rows']);
combine('overflow', ['Block', 'Inline', 'Wrap', 'X', 'Y']);
combine('transition', ['Delay', 'Duration', 'Property', 'TimingFunction']);
combine('color', ['Adjust', 'InterpolationFilters', 'Scheme']);
combine('textAlign', ['All', 'Last']);
combine('page', ['BreakAfter', 'BreakBefore', 'BreakInside']);
combine('animation', ['Delay', 'Direction', 'Duration', 'FillMode', 'IterationCount', 'Name', 'PlayState', 'TimingFunction']);
combine('flex', ['Basis', 'Direction', 'Flow', 'Grow', 'Shrink', 'Wrap']);
combine('offset', [...after_before, ...end_start, 'Anchor', 'Distance', 'Path', 'Position', 'Rotate']);
combine('perspective', ['Origin']);
combine('clip', ['Path', 'Rule']);
combine('flow', ['From', 'Into']);
combine('align', ['Content', 'Items', 'Self'], true);
combine('alignment', ['Adjust', 'Baseline'], true);
combine('borderStart', endRadius_startRadius, true);
combine('borderEnd', endRadius_startRadius, true);
combine('borderCorner', ['Fit', image, 'ImageTransform'], true);
combine('borderTopLeft', fitlength_fitwidth_image_radius, true);
combine('borderTopRight', fitlength_fitwidth_image_radius, true);
combine('borderBottomLeft', fitlength_fitwidth_image_radius, true);
combine('borderBottomRight', fitlength_fitwidth_image_radius, true);
combine('column', ['s', 'Count', 'Fill', 'Gap', 'Rule', 'RuleColor', 'RuleStyle', 'RuleWidth', 'Span', width], true);
combine('break', [...after_before, 'Inside'], true);
combine('wrap', [...after_before, 'Flow', 'Inside', 'Through'], true);
combine('justify', content_items_self, true);
combine('place', content_items_self, true);
combine('max', [...blockSize_height_inlineSize_width, 'Lines'], true);
combine('min', blockSize_height_inlineSize_width, true);
combine('line', ['Break', 'Clamp', 'Grid', 'Height', 'Padding', 'Snap'], true);
combine('inline', ['BoxAlign', size, 'Sizing'], true);
combine('text', ['CombineUpright', 'GroupAlign', 'Height', 'Indent', 'Justify', 'Orientation', 'Overflow', 'Shadow', 'SpaceCollapse', 'SpaceTrim', 'Spacing', 'Transform', 'UnderlinePosition', 'Wrap'], true);
combine('shape', ['ImageThreshold', 'Inside', 'Margin', 'Outside'], true);
combine('word', ['Break', 'Spacing', 'Wrap'], true);
combine('object', ['Fit', 'Position'], true);
combine('box', ['DecorationBreak', 'Shadow', 'Sizing', 'Snap'], true);
combine(WEBKIT, ['LineClamp', 'BoxOrient', 'TextFillColor', 'TextStroke', 'TextStrokeColor', 'TextStrokeWidth'], true);

function recordCss(obj) {
    MutationObserver$1.record({
        type: "attributes" /* MutationRecordType.ATTRIBUTES */,
        target: obj._element,
        attributeName: 'style',
        oldValue: obj.cssText
    });
}
function enqueueUpdate(obj) {
    const element = obj._element;
    if (element._root) {
        element.enqueueUpdate({
            path: `${element._path}.${"st" /* Shortcuts.Style */}`,
            value: obj.cssText
        });
    }
}
function setStyle(newVal, styleKey) {
    "production" !== 'production' && warn(isString(newVal) && newVal.length > PROPERTY_THRESHOLD, `Style 属性 ${styleKey} 的值数据量过大，可能会影响渲染性能，考虑使用 CSS 类或其它方案替代。`);
    const old = this[styleKey];
    if (old === newVal)
        return;
    !this._pending && recordCss(this);
    if (isNull(newVal) || isUndefined(newVal) || newVal === '') {
        this._usedStyleProp.delete(styleKey);
        delete this._value[styleKey];
    }
    else {
        this._usedStyleProp.add(styleKey);
        this._value[styleKey] = newVal;
    }
    !this._pending && enqueueUpdate(this);
}
function initStyle(ctor, styleProperties) {
    const properties = {};
    for (let i = 0; i < styleProperties.length; i++) {
        const styleKey = styleProperties[i];
        if (ctor[styleKey])
            return;
        properties[styleKey] = {
            get() {
                const val = this._value[styleKey];
                return isNull(val) || isUndefined(val) ? '' : val;
            },
            set(newVal) {
                setStyle.call(this, newVal, styleKey);
            }
        };
    }
    Object.defineProperties(ctor.prototype, properties);
}
function isCssVariable(propertyName) {
    return /^--/.test(propertyName);
}
class Style {
    constructor(element) {
        this._element = element;
        this._usedStyleProp = new Set();
        this._value = {};
    }
    setCssVariables(styleKey) {
        this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
            enumerable: true,
            configurable: true,
            get: () => {
                return this._value[styleKey] || '';
            },
            set: (newVal) => {
                setStyle.call(this, newVal, styleKey);
            }
        });
    }
    get cssText() {
        if (!this._usedStyleProp.size)
            return '';
        const texts = [];
        this._usedStyleProp.forEach(key => {
            const val = this[key];
            if (isNull(val) || isUndefined(val))
                return;
            let styleName = isCssVariable(key) ? key : toDashed(key);
            if (styleName.indexOf('webkit') === 0 || styleName.indexOf('Webkit') === 0) {
                styleName = `-${styleName}`;
            }
            texts.push(`${styleName}: ${val};`);
        });
        return texts.join(' ');
    }
    set cssText(str) {
        this._pending = true;
        recordCss(this);
        this._usedStyleProp.forEach(prop => {
            this.removeProperty(prop);
        });
        if (str === '' || isUndefined(str) || isNull(str)) {
            this._pending = false;
            enqueueUpdate(this);
            return;
        }
        const rules = str.split(';');
        for (let i = 0; i < rules.length; i++) {
            const rule = rules[i].trim();
            if (rule === '') {
                continue;
            }
            // 可能存在 'background: url(http:x/y/z)' 的情况
            const [propName, ...valList] = rule.split(':');
            const val = valList.join(':');
            if (isUndefined(val)) {
                continue;
            }
            this.setProperty(propName.trim(), val.trim());
        }
        this._pending = false;
        enqueueUpdate(this);
    }
    setProperty(propertyName, value) {
        if (propertyName[0] === '-') {
            // 支持 webkit 属性或 css 变量
            this.setCssVariables(propertyName);
        }
        else {
            propertyName = toCamelCase(propertyName);
        }
        if (isNull(value) || isUndefined(value)) {
            this.removeProperty(propertyName);
        }
        else {
            this[propertyName] = value;
        }
    }
    removeProperty(propertyName) {
        propertyName = toCamelCase(propertyName);
        if (!this._usedStyleProp.has(propertyName)) {
            return '';
        }
        const value = this[propertyName];
        this[propertyName] = undefined;
        return value;
    }
    getPropertyValue(propertyName) {
        propertyName = toCamelCase(propertyName);
        const value = this[propertyName];
        if (!value) {
            return '';
        }
        return value;
    }
}
initStyle(Style, styleProperties);
hooks.tap('injectNewStyleProperties', (newStyleProperties) => {
    if (isArray(newStyleProperties)) {
        initStyle(Style, newStyleProperties);
    }
    else {
        if (typeof newStyleProperties !== 'string')
            return;
        initStyle(Style, [newStyleProperties]);
    }
});

function returnTrue() {
    return true;
}
function treeToArray(root, predict) {
    const array = [];
    const filter = predict !== null && predict !== void 0 ? predict : returnTrue;
    let object = root;
    while (object) {
        if (object.nodeType === 1 /* NodeType.ELEMENT_NODE */ && filter(object)) {
            array.push(object);
        }
        object = following(object, root);
    }
    return array;
}
function following(el, root) {
    const firstChild = el.firstChild;
    const isElmentTypeValid = el.nodeType === 1 /* NodeType.ELEMENT_NODE */ || el.nodeType === 9 /* NodeType.DOCUMENT_NODE */;
    // 如果当前 el 不是 element 或 document 元素，则可以直接不递归他的子元素了
    if (firstChild && isElmentTypeValid) {
        return firstChild;
    }
    let current = el;
    do {
        if (current === root) {
            return null;
        }
        const nextSibling = current.nextSibling;
        if (nextSibling) {
            return nextSibling;
        }
        current = current.parentElement;
    } while (current);
    return null;
}

class TaroElement extends TaroNode {
    constructor() {
        super();
        this.props = {};
        this.dataset = EMPTY_OBJ;
        this.nodeType = 1 /* NodeType.ELEMENT_NODE */;
        this.style = new Style(this);
        hooks.call('patchElement', this);
    }
    _stopPropagation(event) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let target = this;
        // eslint-disable-next-line no-cond-assign
        while ((target = target.parentNode)) {
            const listeners = target.__handlers[event.type];
            if (!isArray(listeners)) {
                continue;
            }
            for (let i = listeners.length; i--;) {
                const l = listeners[i];
                l._stop = true;
            }
        }
    }
    get id() {
        return this.getAttribute(ID);
    }
    set id(val) {
        this.setAttribute(ID, val);
    }
    get className() {
        return this.getAttribute(CLASS) || '';
    }
    set className(val) {
        this.setAttribute(CLASS, val);
    }
    get cssText() {
        return this.getAttribute(STYLE) || '';
    }
    get classList() {
        return new ClassList(this.className, this);
    }
    get children() {
        return this.childNodes.filter(isElement);
    }
    get attributes() {
        const props = this.props;
        const propKeys = Object.keys(props);
        const style = this.style.cssText;
        const attrs = propKeys.map(key => ({ name: key, value: props[key] }));
        return attrs.concat(style ? { name: STYLE, value: style } : []);
    }
    get textContent() {
        let text = '';
        const childNodes = this.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            text += childNodes[i].textContent;
        }
        return text;
    }
    set textContent(text) {
        super.textContent = text;
    }
    hasAttribute(qualifiedName) {
        return !isUndefined(this.props[qualifiedName]);
    }
    hasAttributes() {
        return this.attributes.length > 0;
    }
    get focus() {
        return function () {
            this.setAttribute(FOCUS, true);
        };
    }
    // 兼容 Vue3，详情请见：https://github.com/NervJS/taro/issues/10579
    set focus(value) {
        this.setAttribute(FOCUS, value);
    }
    blur() {
        this.setAttribute(FOCUS, false);
    }
    setAttribute(qualifiedName, value) {
        "production" !== 'production' && warn(isString(value) && value.length > PROPERTY_THRESHOLD, `元素 ${this.nodeName} 的 ${qualifiedName} 属性值数据量过大，可能会影响渲染性能。考虑降低图片转为 base64 的阈值或在 CSS 中使用 base64。`);
        const isPureView = this.nodeName === VIEW && !isHasExtractProp(this) && !this.isAnyEventBinded();
        if (qualifiedName !== STYLE) {
            MutationObserver$1.record({
                target: this,
                type: "attributes" /* MutationRecordType.ATTRIBUTES */,
                attributeName: qualifiedName,
                oldValue: this.getAttribute(qualifiedName)
            });
        }
        switch (qualifiedName) {
            case STYLE:
                this.style.cssText = value;
                break;
            case ID:
                if (this.uid !== this.sid) {
                    // eventSource[sid] 永远保留，直到组件卸载
                    // eventSource[uid] 可变
                    eventSource.delete(this.uid);
                }
                value = String(value);
                this.props[qualifiedName] = this.uid = value;
                eventSource.set(value, this);
                break;
            default:
                this.props[qualifiedName] = value;
                if (qualifiedName.startsWith('data-')) {
                    if (this.dataset === EMPTY_OBJ) {
                        this.dataset = Object.create(null);
                    }
                    this.dataset[toCamelCase(qualifiedName.replace(/^data-/, ''))] = value;
                }
                break;
        }
        // Serialization
        if (!this._root)
            return;
        const componentsAlias = getComponentsAlias();
        const _alias = componentsAlias[this.nodeName];
        const viewAlias = componentsAlias[VIEW]._num;
        const staticViewAlias = componentsAlias[STATIC_VIEW]._num;
        const catchViewAlias = componentsAlias[CATCH_VIEW]._num;
        const _path = this._path;
        qualifiedName = shortcutAttr(qualifiedName);
        const qualifiedNameInCamelCase = toCamelCase(qualifiedName);
        const payload = {
            path: `${_path}.${qualifiedNameInCamelCase}`,
            value: isFunction(value) ? () => value : value
        };
        hooks.call('modifySetAttrPayload', this, qualifiedName, payload, componentsAlias);
        if (_alias) {
            const qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
            payload.path = `${_path}.${toCamelCase(qualifiedNameAlias)}`;
        }
        this.enqueueUpdate(payload);
        if (this.nodeName === VIEW) {
            if (qualifiedNameInCamelCase === CATCHMOVE) {
                // catchMove = true: catch-view
                // catchMove = false: view or static-view
                this.enqueueUpdate({
                    path: `${_path}.${"nn" /* Shortcuts.NodeName */}`,
                    value: value ? catchViewAlias : (this.isAnyEventBinded() ? viewAlias : staticViewAlias)
                });
            }
            else if (isPureView && isHasExtractProp(this)) {
                // pure-view => static-view
                this.enqueueUpdate({
                    path: `${_path}.${"nn" /* Shortcuts.NodeName */}`,
                    value: staticViewAlias
                });
            }
        }
    }
    removeAttribute(qualifiedName) {
        const isStaticView = this.nodeName === VIEW && isHasExtractProp(this) && !this.isAnyEventBinded();
        MutationObserver$1.record({
            target: this,
            type: "attributes" /* MutationRecordType.ATTRIBUTES */,
            attributeName: qualifiedName,
            oldValue: this.getAttribute(qualifiedName)
        });
        if (qualifiedName === STYLE) {
            this.style.cssText = '';
        }
        else {
            const isInterrupt = hooks.call('onRemoveAttribute', this, qualifiedName);
            if (isInterrupt) {
                return;
            }
            if (!this.props.hasOwnProperty(qualifiedName)) {
                return;
            }
            delete this.props[qualifiedName];
        }
        // Serialization
        if (!this._root)
            return;
        const componentsAlias = getComponentsAlias();
        const _alias = componentsAlias[this.nodeName];
        const viewAlias = componentsAlias[VIEW]._num;
        const staticViewAlias = componentsAlias[STATIC_VIEW]._num;
        const pureViewAlias = componentsAlias[PURE_VIEW]._num;
        const _path = this._path;
        qualifiedName = shortcutAttr(qualifiedName);
        const qualifiedNameInCamelCase = toCamelCase(qualifiedName);
        const payload = {
            path: `${_path}.${qualifiedNameInCamelCase}`,
            value: ''
        };
        hooks.call('modifyRmAttrPayload', this, qualifiedName, payload, componentsAlias);
        if (_alias) {
            const qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
            payload.path = `${_path}.${toCamelCase(qualifiedNameAlias)}`;
        }
        this.enqueueUpdate(payload);
        if (this.nodeName === VIEW) {
            if (qualifiedNameInCamelCase === CATCHMOVE) {
                // catch-view => view or static-view or pure-view
                this.enqueueUpdate({
                    path: `${_path}.${"nn" /* Shortcuts.NodeName */}`,
                    value: this.isAnyEventBinded() ? viewAlias : (isHasExtractProp(this) ? staticViewAlias : pureViewAlias)
                });
            }
            else if (isStaticView && !isHasExtractProp(this)) {
                // static-view => pure-view
                this.enqueueUpdate({
                    path: `${_path}.${"nn" /* Shortcuts.NodeName */}`,
                    value: pureViewAlias
                });
            }
        }
    }
    getAttribute(qualifiedName) {
        const attr = qualifiedName === STYLE ? this.style.cssText : this.props[qualifiedName];
        return attr !== null && attr !== void 0 ? attr : '';
    }
    getElementsByTagName(tagName) {
        return treeToArray(this, (el) => {
            return el.nodeName === tagName || (tagName === '*' && this !== el);
        });
    }
    getElementsByClassName(className) {
        const classNames = className.trim().split(/\s+/);
        return treeToArray(this, (el) => {
            const classList = el.classList;
            return classNames.every(c => classList.contains(c));
        });
    }
    dispatchEvent(event) {
        const cancelable = event.cancelable;
        const listeners = this.__handlers[event.type];
        if (!isArray(listeners)) {
            return false;
        }
        for (let i = listeners.length; i--;) {
            const listener = listeners[i];
            let result;
            if (listener._stop) {
                listener._stop = false;
            }
            else {
                hooks.call('modifyDispatchEvent', event, this);
                result = listener.call(this, event);
            }
            if ((result === false || event._end) && cancelable) {
                event.defaultPrevented = true;
            }
            if (!isUndefined(result) && event.mpEvent) {
                const res = hooks.call('modifyTaroEventReturn', this, event, result);
                if (res) {
                    event.mpEvent[EVENT_CALLBACK_RESULT] = result;
                }
            }
            if (event._end && event._stop) {
                break;
            }
        }
        if (event._stop) {
            this._stopPropagation(event);
        }
        return listeners != null;
    }
    addEventListener(type, handler, options) {
        const name = this.nodeName;
        const SPECIAL_NODES = hooks.call('getSpecialNodes');
        let sideEffect = true;
        if (isObject(options) && options.sideEffect === false) {
            sideEffect = false;
            delete options.sideEffect;
        }
        hooks.call('modifyAddEventListener', this, sideEffect, getComponentsAlias);
        if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
            const componentsAlias = getComponentsAlias();
            const alias = componentsAlias[name]._num;
            this.enqueueUpdate({
                path: `${this._path}.${"nn" /* Shortcuts.NodeName */}`,
                value: alias
            });
        }
        super.addEventListener(type, handler, options);
    }
    removeEventListener(type, handler, sideEffect = true) {
        super.removeEventListener(type, handler);
        const name = this.nodeName;
        const SPECIAL_NODES = hooks.call('getSpecialNodes');
        hooks.call('modifyRemoveEventListener', this, sideEffect, getComponentsAlias);
        if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
            const componentsAlias = getComponentsAlias();
            const value = isHasExtractProp(this) ? `static-${name}` : `pure-${name}`;
            const valueAlias = componentsAlias[value]._num;
            this.enqueueUpdate({
                path: `${this._path}.${"nn" /* Shortcuts.NodeName */}`,
                value: valueAlias
            });
        }
    }
    static extend(methodName, options) {
        extend(TaroElement, methodName, options);
    }
}

const options = {
    prerender: true,
    debug: false
};

function initPosition() {
    return {
        index: 0,
        column: 0,
        line: 0
    };
}
function feedPosition(position, str, len) {
    const start = position.index;
    const end = position.index = start + len;
    for (let i = start; i < end; i++) {
        const char = str.charAt(i);
        if (char === '\n') {
            position.line++;
            position.column = 0;
        }
        else {
            position.column++;
        }
    }
}
function jumpPosition(position, str, end) {
    const len = end - position.index;
    return feedPosition(position, str, len);
}
function copyPosition(position) {
    return {
        index: position.index,
        line: position.line,
        column: position.column
    };
}
const whitespace = /\s/;
function isWhitespaceChar(char) {
    return whitespace.test(char);
}
const equalSign = /=/;
function isEqualSignChar(char) {
    return equalSign.test(char);
}
function shouldBeIgnore(tagName) {
    const name = tagName.toLowerCase();
    if (options.html.skipElements.has(name)) {
        return true;
    }
    return false;
}
const alphanumeric = /[A-Za-z0-9]/;
function findTextEnd(str, index) {
    while (true) {
        const textEnd = str.indexOf('<', index);
        if (textEnd === -1) {
            return textEnd;
        }
        const char = str.charAt(textEnd + 1);
        if (char === '/' || char === '!' || alphanumeric.test(char)) {
            return textEnd;
        }
        index = textEnd + 1;
    }
}
function isWordEnd(cursor, wordBegin, html) {
    if (!isWhitespaceChar(html.charAt(cursor)))
        return false;
    const len = html.length;
    // backwrad
    for (let i = cursor - 1; i > wordBegin; i--) {
        const char = html.charAt(i);
        if (!isWhitespaceChar(char)) {
            if (isEqualSignChar(char))
                return false;
            break;
        }
    }
    // forward
    for (let i = cursor + 1; i < len; i++) {
        const char = html.charAt(i);
        if (!isWhitespaceChar(char)) {
            if (isEqualSignChar(char))
                return false;
            return true;
        }
    }
}
class Scaner {
    constructor(html) {
        this.tokens = [];
        this.position = initPosition();
        this.html = html;
    }
    scan() {
        const { html, position } = this;
        const len = html.length;
        while (position.index < len) {
            const start = position.index;
            this.scanText();
            if (position.index === start) {
                const isComment = html.startsWith('!--', start + 1);
                if (isComment) {
                    this.scanComment();
                }
                else {
                    const tagName = this.scanTag();
                    if (shouldBeIgnore(tagName)) {
                        this.scanSkipTag(tagName);
                    }
                }
            }
        }
        return this.tokens;
    }
    scanText() {
        const type = 'text';
        const { html, position } = this;
        let textEnd = findTextEnd(html, position.index);
        if (textEnd === position.index) {
            return;
        }
        if (textEnd === -1) {
            textEnd = html.length;
        }
        const start = copyPosition(position);
        const content = html.slice(position.index, textEnd);
        jumpPosition(position, html, textEnd);
        const end = copyPosition(position);
        this.tokens.push({ type, content, position: { start, end } });
    }
    scanComment() {
        const type = 'comment';
        const { html, position } = this;
        const start = copyPosition(position);
        feedPosition(position, html, 4); // "<!--".length
        let contentEnd = html.indexOf('-->', position.index);
        let commentEnd = contentEnd + 3; // "-->".length
        if (contentEnd === -1) {
            contentEnd = commentEnd = html.length;
        }
        const content = html.slice(position.index, contentEnd);
        jumpPosition(position, html, commentEnd);
        this.tokens.push({
            type,
            content,
            position: {
                start,
                end: copyPosition(position)
            }
        });
    }
    scanTag() {
        this.scanTagStart();
        const tagName = this.scanTagName();
        this.scanAttrs();
        this.scanTagEnd();
        return tagName;
    }
    scanTagStart() {
        const type = 'tag-start';
        const { html, position } = this;
        const secondChar = html.charAt(position.index + 1);
        const close = secondChar === '/';
        const start = copyPosition(position);
        feedPosition(position, html, close ? 2 : 1);
        this.tokens.push({ type, close, position: { start } });
    }
    scanTagEnd() {
        const type = 'tag-end';
        const { html, position } = this;
        const firstChar = html.charAt(position.index);
        const close = firstChar === '/';
        feedPosition(position, html, close ? 2 : 1);
        const end = copyPosition(position);
        this.tokens.push({ type, close, position: { end } });
    }
    scanTagName() {
        const type = 'tag';
        const { html, position } = this;
        const len = html.length;
        let start = position.index;
        while (start < len) {
            const char = html.charAt(start);
            const isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
            if (isTagChar)
                break;
            start++;
        }
        let end = start + 1;
        while (end < len) {
            const char = html.charAt(end);
            const isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
            if (!isTagChar)
                break;
            end++;
        }
        jumpPosition(position, html, end);
        const tagName = html.slice(start, end);
        this.tokens.push({
            type,
            content: tagName
        });
        return tagName;
    }
    scanAttrs() {
        const { html, position, tokens } = this;
        let cursor = position.index;
        let quote = null; // null, single-, or double-quote
        let wordBegin = cursor; // index of word start
        const words = []; // "key", "key=value", "key='value'", etc
        const len = html.length;
        while (cursor < len) {
            const char = html.charAt(cursor);
            if (quote) {
                const isQuoteEnd = char === quote;
                if (isQuoteEnd) {
                    quote = null;
                }
                cursor++;
                continue;
            }
            const isTagEnd = char === '/' || char === '>';
            if (isTagEnd) {
                if (cursor !== wordBegin) {
                    words.push(html.slice(wordBegin, cursor));
                }
                break;
            }
            if (isWordEnd(cursor, wordBegin, html)) {
                if (cursor !== wordBegin) {
                    words.push(html.slice(wordBegin, cursor));
                }
                wordBegin = cursor + 1;
                cursor++;
                continue;
            }
            const isQuoteStart = char === '\'' || char === '"';
            if (isQuoteStart) {
                quote = char;
                cursor++;
                continue;
            }
            cursor++;
        }
        jumpPosition(position, html, cursor);
        const wLen = words.length;
        const type = 'attribute';
        for (let i = 0; i < wLen; i++) {
            const word = words[i];
            const isNotPair = word.includes('=');
            if (isNotPair) {
                const secondWord = words[i + 1];
                if (secondWord && secondWord.startsWith('=')) {
                    if (secondWord.length > 1) {
                        const newWord = word + secondWord;
                        tokens.push({ type, content: newWord });
                        i += 1;
                        continue;
                    }
                    const thirdWord = words[i + 2];
                    i += 1;
                    if (thirdWord) {
                        const newWord = word + '=' + thirdWord;
                        tokens.push({ type, content: newWord });
                        i += 1;
                        continue;
                    }
                }
            }
            if (word.endsWith('=')) {
                const secondWord = words[i + 1];
                if (secondWord && !secondWord.includes('=')) {
                    const newWord = word + secondWord;
                    tokens.push({ type, content: newWord });
                    i += 1;
                    continue;
                }
                const newWord = word.slice(0, -1);
                tokens.push({ type, content: newWord });
                continue;
            }
            tokens.push({ type, content: word });
        }
    }
    scanSkipTag(tagName) {
        const { html, position } = this;
        const safeTagName = tagName.toLowerCase();
        const len = html.length;
        while (position.index < len) {
            const nextTag = html.indexOf('</', position.index);
            if (nextTag === -1) {
                this.scanText();
                break;
            }
            jumpPosition(position, html, nextTag);
            const name = this.scanTag();
            if (safeTagName === name.toLowerCase()) {
                break;
            }
        }
    }
}

function unquote(str) {
    const car = str.charAt(0);
    const end = str.length - 1;
    const isQuoteStart = car === '"' || car === "'";
    if (isQuoteStart && car === str.charAt(end)) {
        return str.slice(1, end);
    }
    return str;
}

const LEFT_BRACKET = '{';
const RIGHT_BRACKET = '}';
const CLASS_SELECTOR = '.';
const ID_SELECTOR = '#';
const CHILD_COMBINATOR = '>';
const GENERAL_SIBLING_COMBINATOR = '~';
const ADJACENT_SIBLING_COMBINATOR = '+';
class StyleTagParser {
    constructor() {
        this.styles = [];
    }
    extractStyle(src) {
        const REG_STYLE = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g;
        let html = src;
        // let html = src.replace(/\n/g, '')
        html = html.replace(REG_STYLE, (_, $1) => {
            const style = $1.trim();
            this.stringToSelector(style);
            return '';
        });
        return html.trim();
    }
    stringToSelector(style) {
        let lb = style.indexOf(LEFT_BRACKET);
        while (lb > -1) {
            const rb = style.indexOf(RIGHT_BRACKET);
            const selectors = style.slice(0, lb).trim();
            let content = style.slice(lb + 1, rb);
            content = content.replace(/:(.*);/g, function (_, $1) {
                const t = $1.trim().replace(/ +/g, '+++');
                return `:${t};`;
            });
            content = content.replace(/ /g, '');
            content = content.replace(/\+\+\+/g, ' ');
            if (!(/;$/.test(content))) {
                content += ';';
            }
            selectors.split(',').forEach(src => {
                const selectorList = this.parseSelector(src);
                this.styles.push({
                    content,
                    selectorList
                });
            });
            style = style.slice(rb + 1);
            lb = style.indexOf(LEFT_BRACKET);
        }
        // console.log('res this.styles: ', this.styles)
    }
    parseSelector(src) {
        const list = src
            .trim()
            .replace(/ *([>~+]) */g, ' $1')
            .replace(/ +/g, ' ')
            .replace(/\[\s*([^[\]=\s]+)\s*=\s*([^[\]=\s]+)\s*\]/g, '[$1=$2]')
            .split(' ');
        const selectors = list.map(item => {
            const firstChar = item.charAt(0);
            const selector = {
                isChild: firstChar === CHILD_COMBINATOR,
                isGeneralSibling: firstChar === GENERAL_SIBLING_COMBINATOR,
                isAdjacentSibling: firstChar === ADJACENT_SIBLING_COMBINATOR,
                tag: null,
                id: null,
                class: [],
                attrs: []
            };
            item = item.replace(/^[>~+]/, '');
            // 属性选择器
            item = item.replace(/\[(.+?)\]/g, function (_, $1) {
                const [key, value] = $1.split('=');
                const all = $1.indexOf('=') === -1;
                const attr = {
                    all,
                    key,
                    value: all ? null : value
                };
                selector.attrs.push(attr);
                return '';
            });
            item = item.replace(/([.#][A-Za-z0-9-_]+)/g, function (_, $1) {
                if ($1[0] === ID_SELECTOR) {
                    // id 选择器
                    selector.id = $1.substr(1);
                }
                else if ($1[0] === CLASS_SELECTOR) {
                    // class 选择器
                    selector.class.push($1.substr(1));
                }
                return '';
            });
            // 标签选择器
            if (item !== '') {
                selector.tag = item;
            }
            return selector;
        });
        return selectors;
    }
    matchStyle(tagName, el, list) {
        const res = sortStyles(this.styles).reduce((str, { content, selectorList }, i) => {
            let idx = list[i];
            let selector = selectorList[idx];
            const nextSelector = selectorList[idx + 1];
            if ((nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isGeneralSibling) || (nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isAdjacentSibling)) {
                selector = nextSelector;
                idx += 1;
                list[i] += 1;
            }
            let isMatch = this.matchCurrent(tagName, el, selector);
            if (isMatch && selector.isGeneralSibling) {
                let prev = getPreviousElement(el);
                while (prev) {
                    if (prev.h5tagName && this.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1])) {
                        isMatch = true;
                        break;
                    }
                    prev = getPreviousElement(prev);
                    isMatch = false;
                }
            }
            if (isMatch && selector.isAdjacentSibling) {
                const prev = getPreviousElement(el);
                if (!prev || !prev.h5tagName) {
                    isMatch = false;
                }
                else {
                    const isSiblingMatch = this.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1]);
                    if (!isSiblingMatch) {
                        isMatch = false;
                    }
                }
            }
            if (isMatch) {
                if (idx === selectorList.length - 1) {
                    return str + content;
                }
                else if (idx < selectorList.length - 1) {
                    list[i] += 1;
                }
            }
            else {
                // 直接子代组合器: >
                if (selector.isChild && idx > 0) {
                    list[i] -= 1;
                    if (this.matchCurrent(tagName, el, selectorList[list[i]])) {
                        list[i] += 1;
                    }
                }
            }
            return str;
        }, '');
        return res;
    }
    matchCurrent(tagName, el, selector) {
        // 标签选择器
        if (selector.tag && selector.tag !== tagName)
            return false;
        // id 选择器
        if (selector.id && selector.id !== el.id)
            return false;
        // class 选择器
        if (selector.class.length) {
            const classList = el.className.split(' ');
            for (let i = 0; i < selector.class.length; i++) {
                const cls = selector.class[i];
                if (classList.indexOf(cls) === -1) {
                    return false;
                }
            }
        }
        // 属性选择器
        if (selector.attrs.length) {
            for (let i = 0; i < selector.attrs.length; i++) {
                const { all, key, value } = selector.attrs[i];
                if (all && !el.hasAttribute(key)) {
                    return false;
                }
                else {
                    const attr = el.getAttribute(key);
                    if (attr !== unquote(value || '')) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
function getPreviousElement(el) {
    const parent = el.parentElement;
    if (!parent)
        return null;
    const prev = el.previousSibling;
    if (!prev)
        return null;
    if (prev.nodeType === 1 /* NodeType.ELEMENT_NODE */) {
        return prev;
    }
    else {
        return getPreviousElement(prev);
    }
}
// 根据 css selector 权重排序: 权重大的靠后
// @WARN 不考虑伪类
// https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2
function sortStyles(styles) {
    return styles.sort((s1, s2) => {
        const hundreds1 = getHundredsWeight(s1.selectorList);
        const hundreds2 = getHundredsWeight(s2.selectorList);
        if (hundreds1 !== hundreds2)
            return hundreds1 - hundreds2;
        const tens1 = getTensWeight(s1.selectorList);
        const tens2 = getTensWeight(s2.selectorList);
        if (tens1 !== tens2)
            return tens1 - tens2;
        const ones1 = getOnesWeight(s1.selectorList);
        const ones2 = getOnesWeight(s2.selectorList);
        return ones1 - ones2;
    });
}
function getHundredsWeight(selectors) {
    return selectors.reduce((pre, cur) => pre + (cur.id ? 1 : 0), 0);
}
function getTensWeight(selectors) {
    return selectors.reduce((pre, cur) => pre + cur.class.length + cur.attrs.length, 0);
}
function getOnesWeight(selectors) {
    return selectors.reduce((pre, cur) => pre + (cur.tag ? 1 : 0), 0);
}

function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return val => !!map[val.toLowerCase()] ;
}
const specialMiniElements = {
    img: 'image',
    iframe: 'web-view'
};
const internalCompsList = Object.keys(internalComponents)
    .map(i => i.toLowerCase())
    .join(',');
// https://developers.weixin.qq.com/miniprogram/dev/component
const isMiniElements = makeMap(internalCompsList);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
const isInlineElements = makeMap('a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b');
// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
const isBlockElements = makeMap('address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt');

const closingTagAncestorBreakers = {
    li: ['ul', 'ol', 'menu'],
    dt: ['dl'],
    dd: ['dl'],
    tbody: ['table'],
    thead: ['table'],
    tfoot: ['table'],
    tr: ['table'],
    td: ['table']
};
function hasTerminalParent(tagName, stack) {
    const tagParents = closingTagAncestorBreakers[tagName];
    if (tagParents) {
        let currentIndex = stack.length - 1;
        while (currentIndex >= 0) {
            const parentTagName = stack[currentIndex].tagName;
            if (parentTagName === tagName) {
                break;
            }
            if (tagParents && tagParents.includes(parentTagName)) {
                return true;
            }
            currentIndex--;
        }
    }
    return false;
}
function getTagName(tag) {
    if (options.html.renderHTMLTag) {
        return tag;
    }
    if (specialMiniElements[tag]) {
        return specialMiniElements[tag];
    }
    else if (isMiniElements(tag)) {
        return tag;
    }
    else if (isBlockElements(tag)) {
        return 'view';
    }
    else if (isInlineElements(tag)) {
        return 'text';
    }
    return 'view';
}
function splitEqual(str) {
    const sep = '=';
    const idx = str.indexOf(sep);
    if (idx === -1)
        return [str];
    const key = str.slice(0, idx).trim();
    const value = str.slice(idx + sep.length).trim();
    return [key, value];
}
function format(children, document, styleOptions, parent) {
    return children
        .filter(child => {
        // 过滤注释和空文本节点
        if (child.type === 'comment') {
            return false;
        }
        else if (child.type === 'text') {
            return child.content !== '';
        }
        return true;
    })
        .map((child) => {
        // 文本节点
        if (child.type === 'text') {
            let text = document.createTextNode(child.content);
            if (isFunction(options.html.transformText)) {
                text = options.html.transformText(text, child);
            }
            parent === null || parent === void 0 ? void 0 : parent.appendChild(text);
            return text;
        }
        const el = document.createElement(getTagName(child.tagName));
        el.h5tagName = child.tagName;
        parent === null || parent === void 0 ? void 0 : parent.appendChild(el);
        if (!options.html.renderHTMLTag) {
            el.className = `h5-${child.tagName}`;
        }
        for (let i = 0; i < child.attributes.length; i++) {
            const attr = child.attributes[i];
            const [key, value] = splitEqual(attr);
            if (key === 'class') {
                el.className += ' ' + unquote(value);
            }
            else if (key[0] === 'o' && key[1] === 'n') {
                continue;
            }
            else {
                el.setAttribute(key, value == null ? true : unquote(value));
            }
        }
        const { styleTagParser, descendantList } = styleOptions;
        const list = descendantList.slice();
        const style = styleTagParser.matchStyle(child.tagName, el, list);
        el.setAttribute('style', style + el.style.cssText);
        // console.log('style, ', style)
        format(child.children, document, {
            styleTagParser,
            descendantList: list
        }, el);
        if (isFunction(options.html.transformElement)) {
            return options.html.transformElement(el, child);
        }
        return el;
    });
}
function parser(html, document) {
    const styleTagParser = new StyleTagParser();
    html = styleTagParser.extractStyle(html);
    const tokens = new Scaner(html).scan();
    const root = { tagName: '', children: [], type: 'element', attributes: [] };
    const state = { tokens, options, cursor: 0, stack: [root] };
    parse(state);
    return format(root.children, document, {
        styleTagParser,
        descendantList: Array(styleTagParser.styles.length).fill(0)
    });
}
function parse(state) {
    const { tokens, stack } = state;
    let { cursor } = state;
    const len = tokens.length;
    let nodes = stack[stack.length - 1].children;
    while (cursor < len) {
        const token = tokens[cursor];
        if (token.type !== 'tag-start') {
            // comment or text
            nodes.push(token);
            cursor++;
            continue;
        }
        const tagToken = tokens[++cursor];
        cursor++;
        const tagName = tagToken.content.toLowerCase();
        if (token.close) {
            let index = stack.length;
            let shouldRewind = false;
            while (--index > -1) {
                if (stack[index].tagName === tagName) {
                    shouldRewind = true;
                    break;
                }
            }
            while (cursor < len) {
                const endToken = tokens[cursor];
                if (endToken.type !== 'tag-end')
                    break;
                cursor++;
            }
            if (shouldRewind) {
                stack.splice(index);
                break;
            }
            else {
                continue;
            }
        }
        const isClosingTag = options.html.closingElements.has(tagName);
        let shouldRewindToAutoClose = isClosingTag;
        if (shouldRewindToAutoClose) {
            shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
        }
        if (shouldRewindToAutoClose) {
            let currentIndex = stack.length - 1;
            while (currentIndex > 0) {
                if (tagName === stack[currentIndex].tagName) {
                    stack.splice(currentIndex);
                    const previousIndex = currentIndex - 1;
                    nodes = stack[previousIndex].children;
                    break;
                }
                currentIndex = currentIndex - 1;
            }
        }
        const attributes = [];
        let attrToken;
        while (cursor < len) {
            attrToken = tokens[cursor];
            if (attrToken.type === 'tag-end')
                break;
            attributes.push(attrToken.content);
            cursor++;
        }
        cursor++;
        const children = [];
        const element = {
            type: 'element',
            tagName: tagToken.content,
            attributes,
            children
        };
        nodes.push(element);
        const hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));
        if (hasChildren) {
            stack.push({ tagName, children });
            const innerState = { tokens, cursor, stack };
            parse(innerState);
            cursor = innerState.cursor;
        }
    }
    state.cursor = cursor;
}

options.html = {
    skipElements: new Set(['style', 'script']),
    voidElements: new Set([
        '!doctype', 'area', 'base', 'br', 'col', 'command',
        'embed', 'hr', 'img', 'input', 'keygen', 'link',
        'meta', 'param', 'source', 'track', 'wbr'
    ]),
    closingElements: new Set([
        'html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option',
        'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup'
    ]),
    renderHTMLTag: false
};
function setInnerHTML(element, html) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    const children = parser(html, element.ownerDocument);
    for (let i = 0; i < children.length; i++) {
        element.appendChild(children[i]);
    }
}

function getBoundingClientRectImpl() {
    if (!options.miniGlobal)
        return Promise.resolve(null);
    return new Promise(resolve => {
        const query = options.miniGlobal.createSelectorQuery();
        query.select(`#${this.uid}`).boundingClientRect(res => {
            resolve(res);
        }).exec();
    });
}
function getTemplateContent(ctx) {
    if (ctx.nodeName === 'template') {
        const document = ctx.ownerDocument;
        const content = document.createElement(DOCUMENT_FRAGMENT);
        content.childNodes = ctx.childNodes;
        ctx.childNodes = [content];
        content.parentNode = ctx;
        content.childNodes.forEach(nodes => {
            nodes.parentNode = content;
        });
        return content;
    }
}

/**
 * An implementation of `Element.insertAdjacentHTML()`
 * to support Vue 3 with a version of or greater than `vue@3.1.2`
 */
function insertAdjacentHTML(position, html) {
    var _a, _b;
    const parsedNodes = parser(html, this.ownerDocument);
    for (let i = 0; i < parsedNodes.length; i++) {
        const n = parsedNodes[i];
        switch (position) {
            case 'beforebegin':
                (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(n, this);
                break;
            case 'afterbegin':
                if (this.hasChildNodes()) {
                    this.insertBefore(n, this.childNodes[0]);
                }
                else {
                    this.appendChild(n);
                }
                break;
            case 'beforeend':
                this.appendChild(n);
                break;
            case 'afterend':
                (_b = this.parentNode) === null || _b === void 0 ? void 0 : _b.appendChild(n);
                break;
        }
    }
}
function cloneNode(isDeep = false) {
    const document = this.ownerDocument;
    let newNode;
    if (this.nodeType === 1 /* NodeType.ELEMENT_NODE */) {
        newNode = document.createElement(this.nodeName);
    }
    else if (this.nodeType === 3 /* NodeType.TEXT_NODE */) {
        newNode = document.createTextNode('');
    }
    for (const key in this) {
        const value = this[key];
        // eslint-disable-next-line valid-typeof
        if ([PROPS, DATASET].includes(key) && typeof value === OBJECT) {
            newNode[key] = Object.assign({}, value);
        }
        else if (key === '_value') {
            newNode[key] = value;
        }
        else if (key === STYLE) {
            newNode.style._value = Object.assign({}, value._value);
            newNode.style._usedStyleProp = new Set(Array.from(value._usedStyleProp));
        }
    }
    if (isDeep) {
        newNode.childNodes = this.childNodes.map(node => node.cloneNode(true));
    }
    return newNode;
}
function contains(node) {
    let isContains = false;
    this.childNodes.some(childNode => {
        const { uid } = childNode;
        if (uid === node.uid || uid === node.id || childNode.contains(node)) {
            isContains = true;
            return true;
        }
    });
    return isContains;
}

const isWeb = "harmony" === 'web';
const isHarmony = "harmony" === 'harmony' || "jdharmony" === 'harmony';
if (!isWeb && !isHarmony) {
    if (ENABLE_INNER_HTML) {
        TaroNode.extend('innerHTML', {
            set(html) {
                setInnerHTML.call(this, this, html);
            },
            get() {
                return '';
            }
        });
        if (ENABLE_ADJACENT_HTML) {
            TaroNode.extend('insertAdjacentHTML', insertAdjacentHTML);
        }
    }
    if (ENABLE_CLONE_NODE) {
        TaroNode.extend('cloneNode', cloneNode);
    }
    if (ENABLE_CONTAINS) {
        TaroNode.extend('contains', contains);
    }
    if (ENABLE_SIZE_APIS) {
        TaroElement.extend('getBoundingClientRect', getBoundingClientRectImpl);
    }
    if (ENABLE_TEMPLATE_CONTENT) {
        TaroElement.extend('content', {
            get() {
                return getTemplateContent(this);
            }
        });
    }
}

// Taro 事件对象。以 Web 标准的事件对象为基础，加入小程序事件对象中携带的部分信息，并模拟实现事件冒泡。
class TaroEvent {
    constructor(type, opts, event) {
        this._stop = false;
        this._end = false;
        this.defaultPrevented = false;
        // Mouse Event botton property, it's used in 3rd lib, like react-router. default 0 in general
        this.button = 0;
        // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
        // here use hi-res timestamp
        this.timeStamp = Date.now();
        this.type = type.toLowerCase();
        this.mpEvent = event;
        this.bubbles = Boolean(opts && opts.bubbles);
        this.cancelable = Boolean(opts && opts.cancelable);
    }
    stopPropagation() {
        this._stop = true;
    }
    stopImmediatePropagation() {
        this._end = this._stop = true;
    }
    preventDefault() {
        this.defaultPrevented = true;
    }
    get target() {
        var _a, _b, _c, _d;
        const cacheTarget = this.cacheTarget;
        if (!cacheTarget) {
            const target = Object.create(((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target) || null);
            // Note：优先判断冒泡场景alipay的targetDataset的sid, 不然冒泡场景target属性吐出不对，其余拿取当前绑定id
            const element = env.document.getElementById(((_b = target.targetDataset) === null || _b === void 0 ? void 0 : _b.sid) || ((_c = target.dataset) === null || _c === void 0 ? void 0 : _c.sid) || target.id || null);
            target.dataset = element !== null ? element.dataset : EMPTY_OBJ;
            for (const key in (_d = this.mpEvent) === null || _d === void 0 ? void 0 : _d.detail) {
                target[key] = this.mpEvent.detail[key];
            }
            this.cacheTarget = target;
            return target;
        }
        else {
            return cacheTarget;
        }
    }
    get currentTarget() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const cacheCurrentTarget = this.cacheCurrentTarget;
        if (!cacheCurrentTarget) {
            const doc = env.document;
            const currentTarget = Object.create(((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.currentTarget) || null);
            const element = doc.getElementById(((_b = currentTarget.dataset) === null || _b === void 0 ? void 0 : _b.sid) || currentTarget.id || null);
            const targetElement = doc.getElementById(((_e = (_d = (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.target) === null || _d === void 0 ? void 0 : _d.dataset) === null || _e === void 0 ? void 0 : _e.sid) || ((_g = (_f = this.mpEvent) === null || _f === void 0 ? void 0 : _f.target) === null || _g === void 0 ? void 0 : _g.id) || null);
            if (element === null || (element && element === targetElement)) {
                this.cacheCurrentTarget = this.target;
                return this.target;
            }
            currentTarget.dataset = element.dataset;
            for (const key in (_h = this.mpEvent) === null || _h === void 0 ? void 0 : _h.detail) {
                currentTarget[key] = this.mpEvent.detail[key];
            }
            this.cacheCurrentTarget = currentTarget;
            return currentTarget;
        }
        else {
            return cacheCurrentTarget;
        }
    }
}
function createEvent(event, node) {
    if (typeof event === 'string') {
        // For Vue3 using document.createEvent
        return new TaroEvent(event, { bubbles: true, cancelable: true });
    }
    const domEv = new TaroEvent(event.type, { bubbles: true, cancelable: true }, event);
    for (const key in event) {
        if (key === CURRENT_TARGET || key === TARGET || key === TYPE || key === TIME_STAMP) {
            continue;
        }
        else {
            domEv[key] = event[key];
        }
    }
    if (domEv.type === CONFIRM && (node === null || node === void 0 ? void 0 : node.nodeName) === INPUT) {
        // eslint-disable-next-line dot-notation
        domEv[KEY_CODE] = 13;
    }
    return domEv;
}
const eventsBatch = {};
function getEventCBResult(event) {
    const result = event[EVENT_CALLBACK_RESULT];
    if (!isUndefined(result)) {
        delete event[EVENT_CALLBACK_RESULT];
    }
    return result;
}
// 小程序的事件代理回调函数
function eventHandler(event) {
    var _a, _b;
    // Note: ohos 上事件没有设置 type、detail 类型 setter 方法，且部分事件（例如 load 等）缺失 target 导致事件错误
    event.type === undefined && Object.defineProperty(event, 'type', {
        value: event._type // ohos only
    });
    event.detail === undefined && Object.defineProperty(event, 'detail', {
        value: event._detail || Object.assign({}, event) // ohos only
    });
    event.currentTarget = event.currentTarget || event.target || Object.assign({}, event);
    hooks.call('modifyMpEventImpl', event);
    const currentTarget = event.currentTarget;
    const id = ((_a = currentTarget.dataset) === null || _a === void 0 ? void 0 : _a.sid /** sid */) || currentTarget.id /** uid */ || ((_b = event.detail) === null || _b === void 0 ? void 0 : _b.id) || '';
    const node = env.document.getElementById(id);
    if (node) {
        const dispatch = () => {
            const e = createEvent(event, node);
            hooks.call('modifyTaroEvent', e, node);
            hooks.call('dispatchTaroEvent', e, node);
            hooks.call('dispatchTaroEventFinish', e, node);
        };
        if (hooks.isExist('batchedEventUpdates')) {
            const type = event.type;
            if (!hooks.call('isBubbleEvents', type) ||
                !isParentBinded(node, type) ||
                (type === TOUCHMOVE && !!node.props.catchMove)) {
                // 最上层组件统一 batchUpdate
                hooks.call('batchedEventUpdates', () => {
                    if (eventsBatch[type]) {
                        eventsBatch[type].forEach(fn => fn());
                        delete eventsBatch[type];
                    }
                    dispatch();
                });
                return getEventCBResult(event);
            }
            else {
                // 如果上层组件也有绑定同类型的组件，委托给上层组件调用事件回调
                (eventsBatch[type] || (eventsBatch[type] = [])).push(dispatch);
            }
        }
        else {
            dispatch();
            return getEventCBResult(event);
        }
    }
}

class FormElement extends TaroElement {
    get type() {
        var _a;
        return (_a = this.props[TYPE]) !== null && _a !== void 0 ? _a : '';
    }
    set type(val) {
        this.setAttribute(TYPE, val);
    }
    get value() {
        // eslint-disable-next-line dot-notation
        const val = this.props[VALUE];
        return val == null ? '' : val;
    }
    set value(val) {
        this.setAttribute(VALUE, val);
    }
    dispatchEvent(event) {
        if (event.mpEvent) {
            const val = event.mpEvent.detail.value;
            if (event.type === CHANGE) {
                this.props.value = val;
            }
            else if (event.type === INPUT) {
                // Web 规范中表单组件的 value 应该跟着输入改变
                // 只是改 this.props.value 的话不会进行 setData，因此这里修改 this.value。
                // 只测试了 React、Vue3 input 组件的 onInput 事件，onChange 事件不确定有没有副作用，所以暂不修改。
                this.value = val;
            }
        }
        return super.dispatchEvent(event);
    }
}

var _Performance_instances, _Performance_parseTime;
class Performance {
    constructor() {
        _Performance_instances.add(this);
        this.recorder = new Map();
    }
    start(id) {
        if (!options.debug) {
            return;
        }
        this.recorder.set(id, Date.now());
    }
    stop(id, now = Date.now()) {
        if (!options.debug) {
            return;
        }
        const prev = this.recorder.get(id);
        if (!(prev >= 0))
            return;
        this.recorder.delete(id);
        const time = now - prev;
        // eslint-disable-next-line no-console
        console.log(`${id} 时长： ${time}ms 开始时间：${__classPrivateFieldGet(this, _Performance_instances, "m", _Performance_parseTime).call(this, prev)} 结束时间：${__classPrivateFieldGet(this, _Performance_instances, "m", _Performance_parseTime).call(this, now)}`);
    }
    delayStop(id, delay = 500) {
        if (!options.debug) {
            return;
        }
        return debounce((now = Date.now(), cb) => {
            this.stop(id, now);
            cb === null || cb === void 0 ? void 0 : cb();
        }, delay);
    }
}
_Performance_instances = new WeakSet(), _Performance_parseTime = function _Performance_parseTime(time) {
    const d = new Date(time);
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${`${d.getMilliseconds()}`.padStart(3, '0')}`;
};
const perf = new Performance();

function findCustomWrapper(root, dataPathArr) {
    // ['root', 'cn', '[0]'] remove 'root' => ['cn', '[0]']
    const list = dataPathArr.slice(1);
    let currentData = root;
    let customWrapper;
    let splitedPath = '';
    list.some((item, i) => {
        const key = item
            // '[0]' => '0'
            .replace(/^\[(.+)\]$/, '$1')
            // 'cn' => 'childNodes'
            .replace(/\bcn\b/g, 'childNodes');
        currentData = currentData[key];
        if (isArray(currentData)) {
            currentData = currentData.filter(el => !isComment(el));
        }
        if (isUndefined(currentData))
            return true;
        if (currentData.nodeName === CUSTOM_WRAPPER) {
            const res = customWrapperCache.get(currentData.sid);
            if (res) {
                customWrapper = res;
                splitedPath = dataPathArr.slice(i + 2).join('.');
            }
        }
    });
    if (customWrapper) {
        return {
            customWrapper,
            splitedPath
        };
    }
}
class TaroRootElement extends TaroElement {
    constructor() {
        super();
        this.updatePayloads = [];
        this.updateCallbacks = [];
        this.pendingUpdate = false;
        this.ctx = null;
        this.nodeName = ROOT_STR;
        this.tagName = ROOT_STR.toUpperCase();
    }
    get _path() {
        return ROOT_STR;
    }
    get _root() {
        return this;
    }
    enqueueUpdate(payload) {
        this.updatePayloads.push(payload);
        if (!this.pendingUpdate && this.ctx) {
            this.performUpdate();
        }
    }
    performUpdate(initRender = false, prerender) {
        this.pendingUpdate = true;
        const ctx = hooks.call('proxyToRaw', this.ctx);
        setTimeout(() => {
            const setDataMark = `${SET_DATA} 开始时间戳 ${Date.now()}`;
            perf.start(setDataMark);
            const data = Object.create(null);
            const resetPaths = new Set(initRender
                ? ['root.cn.[0]', 'root.cn[0]']
                : []);
            while (this.updatePayloads.length > 0) {
                const { path, value } = this.updatePayloads.shift();
                if (path.endsWith("cn" /* Shortcuts.Childnodes */)) {
                    resetPaths.add(path);
                }
                data[path] = value;
            }
            for (const path in data) {
                resetPaths.forEach(p => {
                    // 已经重置了数组，就不需要分别再设置了
                    if (path.includes(p) && path !== p) {
                        delete data[path];
                    }
                });
                const value = data[path];
                if (isFunction(value)) {
                    data[path] = value();
                }
            }
            // 预渲染
            if (isFunction(prerender))
                return prerender(data);
            // 正常渲染
            this.pendingUpdate = false;
            let normalUpdate = {};
            const customWrapperMap = new Map();
            if (initRender) {
                // 初次渲染，使用页面级别的 setData
                normalUpdate = data;
            }
            else {
                // 更新渲染，区分 CustomWrapper 与页面级别的 setData
                for (const p in data) {
                    const dataPathArr = p.split('.');
                    const found = findCustomWrapper(this, dataPathArr);
                    if (found) {
                        // 此项数据使用 CustomWrapper 去更新
                        const { customWrapper, splitedPath } = found;
                        // 合并同一个 customWrapper 的相关更新到一次 setData 中
                        customWrapperMap.set(customWrapper, Object.assign(Object.assign({}, (customWrapperMap.get(customWrapper) || {})), { [`i.${splitedPath}`]: data[p] }));
                    }
                    else {
                        // 此项数据使用页面去更新
                        normalUpdate[p] = data[p];
                    }
                }
            }
            const customWrapperCount = customWrapperMap.size;
            const isNeedNormalUpdate = Object.keys(normalUpdate).length > 0;
            const updateArrLen = customWrapperCount + (isNeedNormalUpdate ? 1 : 0);
            let executeTime = 0;
            const cb = () => {
                if (++executeTime === updateArrLen) {
                    perf.stop(setDataMark);
                    this.flushUpdateCallback();
                    initRender && perf.stop(PAGE_INIT);
                }
            };
            // custom-wrapper setData
            if (customWrapperCount) {
                customWrapperMap.forEach((data, ctx) => {
                    if ("production" !== 'production' && options.debug) {
                        // eslint-disable-next-line no-console
                        console.log('custom wrapper setData: ', data);
                    }
                    ctx.setData(data, cb);
                });
            }
            // page setData
            if (isNeedNormalUpdate) {
                if ("production" !== 'production' && options.debug) {
                    // eslint-disable-next-line no-console
                    console.log('page setData:', normalUpdate);
                }
                ctx.setData(normalUpdate, cb);
            }
        }, 0);
    }
    enqueueUpdateCallback(cb, ctx) {
        this.updateCallbacks.push(() => {
            ctx ? cb.call(ctx) : cb();
        });
    }
    flushUpdateCallback() {
        const updateCallbacks = this.updateCallbacks;
        if (!updateCallbacks.length)
            return;
        const copies = updateCallbacks.slice(0);
        this.updateCallbacks.length = 0;
        for (let i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

class TaroText extends TaroNode {
    constructor(value) {
        super();
        this.nodeType = 3 /* NodeType.TEXT_NODE */;
        this.nodeName = '#text';
        this._value = value;
    }
    set textContent(text) {
        MutationObserver$1.record({
            target: this,
            type: "characterData" /* MutationRecordType.CHARACTER_DATA */,
            oldValue: this._value
        });
        this._value = text;
        this.enqueueUpdate({
            path: `${this._path}.${"v" /* Shortcuts.Text */}`,
            value: text
        });
    }
    get textContent() {
        return this._value;
    }
    set nodeValue(text) {
        this.textContent = text;
    }
    get nodeValue() {
        return this._value;
    }
    set data(text) {
        this.textContent = text;
    }
    get data() {
        return this._value;
    }
}

class AnchorElement extends TaroElement {
    get href() {
        var _a;
        return (_a = this.props["href" /* AnchorElementAttrs.HREF */]) !== null && _a !== void 0 ? _a : '';
    }
    set href(val) {
        this.setAttribute("href" /* AnchorElementAttrs.HREF */, val);
    }
    get protocol() {
        var _a;
        return (_a = this.props["protocol" /* AnchorElementAttrs.PROTOCOL */]) !== null && _a !== void 0 ? _a : '';
    }
    get host() {
        var _a;
        return (_a = this.props["host" /* AnchorElementAttrs.HOST */]) !== null && _a !== void 0 ? _a : '';
    }
    get search() {
        var _a;
        return (_a = this.props["search" /* AnchorElementAttrs.SEARCH */]) !== null && _a !== void 0 ? _a : '';
    }
    get hash() {
        var _a;
        return (_a = this.props["hash" /* AnchorElementAttrs.HASH */]) !== null && _a !== void 0 ? _a : '';
    }
    get hostname() {
        var _a;
        return (_a = this.props["hostname" /* AnchorElementAttrs.HOSTNAME */]) !== null && _a !== void 0 ? _a : '';
    }
    get port() {
        var _a;
        return (_a = this.props["port" /* AnchorElementAttrs.PORT */]) !== null && _a !== void 0 ? _a : '';
    }
    get pathname() {
        var _a;
        return (_a = this.props["pathname" /* AnchorElementAttrs.PATHNAME */]) !== null && _a !== void 0 ? _a : '';
    }
    setAttribute(qualifiedName, value) {
        if (qualifiedName === "href" /* AnchorElementAttrs.HREF */) {
            const willSetAttr = parseUrl(value);
            for (const k in willSetAttr) {
                super.setAttribute(k, willSetAttr[k]);
            }
        }
        else {
            super.setAttribute(qualifiedName, value);
        }
    }
}

class TransferElement extends TaroElement {
    constructor(dataName) {
        super();
        this.dataName = dataName;
        this.isTransferElement = true;
    }
    get _path() {
        return this.dataName;
    }
}

class TaroDocument extends TaroElement {
    constructor() {
        super();
        this.createEvent = createEvent;
        this.nodeType = 9 /* NodeType.DOCUMENT_NODE */;
        this.nodeName = DOCUMENT_ELEMENT_NAME;
    }
    createElement(type) {
        const nodeName = type.toLowerCase();
        let element;
        switch (true) {
            case nodeName === ROOT_STR:
                element = new TaroRootElement();
                return element;
            case controlledComponent.has(nodeName):
                element = new FormElement();
                break;
            case nodeName === A:
                element = new AnchorElement();
                break;
            case nodeName === 'page-meta':
            case nodeName === 'navigation-bar':
                element = new TransferElement(toCamelCase(nodeName));
                break;
            default:
                element = new TaroElement();
                break;
        }
        element.nodeName = nodeName;
        element.tagName = type.toUpperCase();
        return element;
    }
    // an ugly fake createElementNS to deal with @vue/runtime-dom's
    // support mounting app to svg container since vue@3.0.8
    createElementNS(_svgNS, type) {
        return this.createElement(type);
    }
    createTextNode(text) {
        return new TaroText(text);
    }
    getElementById(id) {
        const el = eventSource.get(id);
        return isUndefined(el) ? null : el;
    }
    querySelector(query) {
        // 为了 Vue3 的乞丐版实现
        if (/^#/.test(query)) {
            return this.getElementById(query.slice(1));
        }
        return null;
    }
    querySelectorAll() {
        // fake hack
        return [];
    }
    // @TODO: @PERF: 在 hydrate 移除掉空的 node
    createComment() {
        const textnode = new TaroText('');
        textnode.nodeName = COMMENT;
        return textnode;
    }
    get defaultView() {
        return env.window;
    }
}

function createDocument() {
    /**
       * <document>
       *   <html>
       *     <head></head>
       *     <body>
       *       <container>
       *         <app id="app" />
       *       </container>
       *     </body>
       *   </html>
       * </document>
       */
    const doc = new TaroDocument();
    const documentCreateElement = doc.createElement.bind(doc);
    const html = documentCreateElement(HTML);
    const head = documentCreateElement(HEAD);
    const body = documentCreateElement(BODY);
    const app = documentCreateElement(APP);
    app.id = APP;
    const container = documentCreateElement(CONTAINER); // 多包一层主要为了兼容 vue
    doc.appendChild(html);
    html.appendChild(head);
    html.appendChild(body);
    body.appendChild(container);
    container.appendChild(app);
    doc.documentElement = html;
    doc.head = head;
    doc.body = body;
    return doc;
}
const document$1 = "harmony" === 'web' ? env.document : (env.document = createDocument());

// for Vue3
class SVGElement extends TaroElement {
}

/* eslint-disable dot-notation */
const instances = new Map();
const pageId = incrementId();
function injectPageInstance(inst, id) {
    hooks.call('mergePageInstance', instances.get(id), inst);
    instances.set(id, inst);
}
function getPageInstance(id) {
    return instances.get(id);
}
function removePageInstance(id) {
    instances.delete(id);
}
function safeExecute(path, lifecycle, ...args) {
    const instance = instances.get(path);
    if (instance == null) {
        return;
    }
    const func = hooks.call('getLifecycle', instance, lifecycle);
    if (isArray(func)) {
        const res = func.map(fn => fn.apply(instance, args));
        return res[0];
    }
    if (!isFunction(func)) {
        return;
    }
    return func.apply(instance, args);
}
function stringify(obj) {
    if (obj == null) {
        return '';
    }
    const path = Object.keys(obj).map((key) => {
        return key + '=' + obj[key];
    }).join('&');
    return path === '' ? path : '?' + path;
}
function getPath(id, options) {
    const idx = id.indexOf('?');
    if ("harmony" === 'web') {
        return `${idx > -1 ? id.substring(0, idx) : id}${stringify((options === null || options === void 0 ? void 0 : options.stamp) ? { stamp: options.stamp } : {})}`;
    }
    else {
        return `${idx > -1 ? id.substring(0, idx) : id}${stringify(options)}`;
    }
}
function getOnReadyEventKey(path) {
    return path + '.' + ON_READY;
}
function getOnShowEventKey(path) {
    return path + '.' + ON_SHOW;
}
function getOnHideEventKey(path) {
    return path + '.' + ON_HIDE;
}
function createPageConfig(component, pageName, data, pageConfig) {
    // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上
    const id = pageName !== null && pageName !== void 0 ? pageName : `taro_page_${pageId()}`;
    const [ONLOAD, ONUNLOAD, ONREADY, ONSHOW, ONHIDE, LIFECYCLES, SIDE_EFFECT_LIFECYCLES,] = hooks.call('getMiniLifecycleImpl').page;
    let pageElement = null;
    let unmounting = false;
    let prepareMountList = [];
    function setCurrentRouter(page) {
        const router = "harmony" === 'web' ? page.$taroPath : page.route || page.__route__ || page.$taroPath;
        Current.router = {
            params: page.$taroParams,
            path: addLeadingSlash(router),
            $taroPath: page.$taroPath,
            onReady: getOnReadyEventKey(id),
            onShow: getOnShowEventKey(id),
            onHide: getOnHideEventKey(id)
        };
        if (!isUndefined(page.exitState)) {
            Current.router.exitState = page.exitState;
        }
    }
    let loadResolver;
    let hasLoaded;
    const config = {
        [ONLOAD](options = {}, cb) {
            hasLoaded = new Promise(resolve => { loadResolver = resolve; });
            perf.start(PAGE_INIT);
            Current.page = this;
            this.config = pageConfig || {};
            // this.$taroPath 是页面唯一标识
            const uniqueOptions = Object.assign({}, options, { $taroTimestamp: Date.now() });
            const $taroPath = this.$taroPath = getPath(id, uniqueOptions);
            if ("harmony" === 'web') {
                config.path = $taroPath;
            }
            // this.$taroParams 作为暴露给开发者的页面参数对象，可以被随意修改
            if (this.$taroParams == null) {
                this.$taroParams = uniqueOptions;
            }
            setCurrentRouter(this);
            // 初始化当前页面的上下文信息
            if ("harmony" !== 'web') {
                window$1.trigger(CONTEXT_ACTIONS.INIT, $taroPath);
            }
            const mount = () => {
                Current.app.mount(component, $taroPath, () => {
                    pageElement = env.document.getElementById($taroPath);
                    ensure(pageElement !== null, '没有找到页面实例。');
                    safeExecute($taroPath, ON_LOAD, this.$taroParams);
                    loadResolver();
                    if ("harmony" !== 'web') {
                        pageElement.ctx = this;
                        pageElement.performUpdate(true, cb);
                    }
                    else {
                        isFunction(cb) && cb();
                    }
                });
            };
            if (unmounting) {
                prepareMountList.push(mount);
            }
            else {
                mount();
            }
        },
        [ONUNLOAD]() {
            const $taroPath = this.$taroPath;
            // 销毁当前页面的上下文信息
            if ("harmony" !== 'web') {
                window$1.trigger(CONTEXT_ACTIONS.DESTORY, $taroPath);
            }
            // 触发onUnload生命周期
            safeExecute($taroPath, ONUNLOAD);
            unmounting = true;
            Current.app.unmount($taroPath, () => {
                unmounting = false;
                instances.delete($taroPath);
                if (pageElement) {
                    pageElement.ctx = null;
                    pageElement = null;
                }
                if (prepareMountList.length) {
                    prepareMountList.forEach(fn => fn());
                    prepareMountList = [];
                }
            });
        },
        [ONREADY]() {
            hasLoaded.then(() => {
                // 触发生命周期
                safeExecute(this.$taroPath, ON_READY);
                // 通过事件触发子组件的生命周期
                _raf(() => eventCenter.trigger(getOnReadyEventKey(id)));
                this.onReady.called = true;
            });
        },
        [ONSHOW](options = {}) {
            hasLoaded.then(() => {
                // 设置 Current 的 page 和 router
                Current.page = this;
                setCurrentRouter(this);
                // 恢复上下文信息
                if ("harmony" !== 'web') {
                    window$1.trigger(CONTEXT_ACTIONS.RECOVER, this.$taroPath);
                }
                // 触发生命周期
                safeExecute(this.$taroPath, ON_SHOW, options);
                // 通过事件触发子组件的生命周期
                _raf(() => eventCenter.trigger(getOnShowEventKey(id)));
            });
        },
        [ONHIDE]() {
            // 缓存当前页面上下文信息
            if ("harmony" !== 'web') {
                window$1.trigger(CONTEXT_ACTIONS.RESTORE, this.$taroPath);
            }
            // 设置 Current 的 page 和 router
            if (Current.page === this) {
                Current.page = null;
                Current.router = null;
            }
            // 触发生命周期
            safeExecute(this.$taroPath, ON_HIDE);
            // 通过事件触发子组件的生命周期
            eventCenter.trigger(getOnHideEventKey(id));
        }
    };
    if ("harmony" === 'web') {
        config.getOpenerEventChannel = () => {
            return EventChannel.pageChannel;
        };
    }
    LIFECYCLES.forEach((lifecycle) => {
        let isDefer = false;
        lifecycle = lifecycle.replace(/^defer:/, () => {
            isDefer = true;
            return '';
        });
        config[lifecycle] = function () {
            const exec = () => safeExecute(this.$taroPath, lifecycle, ...arguments);
            if (isDefer) {
                hasLoaded.then(exec);
            }
            else {
                return exec();
            }
        };
    });
    // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。
    SIDE_EFFECT_LIFECYCLES.forEach(lifecycle => {
        var _a;
        if (component[lifecycle] ||
            ((_a = component.prototype) === null || _a === void 0 ? void 0 : _a[lifecycle]) ||
            component[lifecycle.replace(/^on/, 'enable')] ||
            (pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig[lifecycle.replace(/^on/, 'enable')])) {
            config[lifecycle] = function (...args) {
                var _a;
                const target = (_a = args[0]) === null || _a === void 0 ? void 0 : _a.target;
                if (target === null || target === void 0 ? void 0 : target.id) {
                    const id = target.id;
                    const element = env.document.getElementById(id);
                    if (element) {
                        target.dataset = element.dataset;
                    }
                }
                return safeExecute(this.$taroPath, lifecycle, ...args);
            };
        }
    });
    config.eh = eventHandler;
    if (!isUndefined(data)) {
        config.data = data;
    }
    hooks.call('modifyPageObject', config);
    return config;
}
function createComponentConfig(component, componentName, data) {
    const id = componentName !== null && componentName !== void 0 ? componentName : `taro_component_${pageId()}`;
    let componentElement = null;
    const [ATTACHED, DETACHED] = hooks.call('getMiniLifecycleImpl').component;
    const config = {
        [ATTACHED]() {
            var _a;
            perf.start(PAGE_INIT);
            this.pageIdCache = ((_a = this.getPageId) === null || _a === void 0 ? void 0 : _a.call(this)) || pageId();
            const path = getPath(id, { id: this.pageIdCache });
            Current.app.mount(component, path, () => {
                componentElement = env.document.getElementById(path);
                ensure(componentElement !== null, '没有找到组件实例。');
                this.$taroInstances = instances.get(path);
                safeExecute(path, ON_LOAD);
                if ("harmony" !== 'web') {
                    componentElement.ctx = this;
                    componentElement.performUpdate(true);
                }
            });
        },
        [DETACHED]() {
            const path = getPath(id, { id: this.pageIdCache });
            Current.app.unmount(path, () => {
                instances.delete(path);
                if (componentElement) {
                    componentElement.ctx = null;
                }
            });
        },
        methods: {
            eh: eventHandler
        }
    };
    if (!isUndefined(data)) {
        config.data = data;
    }
    [OPTIONS, EXTERNAL_CLASSES, BEHAVIORS].forEach(key => {
        var _a;
        config[key] = (_a = component[key]) !== null && _a !== void 0 ? _a : EMPTY_OBJ;
    });
    return config;
}
function createRecursiveComponentConfig(componentName) {
    const isCustomWrapper = componentName === CUSTOM_WRAPPER;
    const [ATTACHED, DETACHED] = hooks.call('getMiniLifecycleImpl').component;
    const lifeCycles = isCustomWrapper
        ? {
            [ATTACHED]() {
                var _a, _b;
                const componentId = ((_a = this.data.i) === null || _a === void 0 ? void 0 : _a.sid) || ((_b = this.props.i) === null || _b === void 0 ? void 0 : _b.sid);
                if (isString(componentId)) {
                    customWrapperCache.set(componentId, this);
                    const el = env.document.getElementById(componentId);
                    if (el) {
                        el.ctx = this;
                    }
                }
            },
            [DETACHED]() {
                var _a, _b;
                const componentId = ((_a = this.data.i) === null || _a === void 0 ? void 0 : _a.sid) || ((_b = this.props.i) === null || _b === void 0 ? void 0 : _b.sid);
                if (isString(componentId)) {
                    customWrapperCache.delete(componentId);
                    const el = env.document.getElementById(componentId);
                    if (el) {
                        el.ctx = null;
                    }
                }
            }
        }
        : EMPTY_OBJ;
    return hooks.call('modifyRecursiveComponentConfig', Object.assign({ properties: {
            i: {
                type: Object,
                value: {
                    ["nn" /* Shortcuts.NodeName */]: getComponentsAlias$1(internalComponents)[VIEW]._num
                }
            },
            l: {
                type: String,
                value: ''
            }
        }, options: {
            addGlobalClass: true,
            virtualHost: !isCustomWrapper
        }, methods: {
            eh: eventHandler
        } }, lifeCycles), { isCustomWrapper });
}

const TIMEOUT = 100;
const nextTick = (cb, ctx) => {
    const beginTime = Date.now();
    const router = Current.router;
    const timerFunc = () => {
        setTimeout(function () {
            ctx ? cb.call(ctx) : cb();
        }, 1);
    };
    if (router === null)
        return timerFunc();
    const path = router.$taroPath;
    /**
     * 三种情况
     *   1. 调用 nextTick 时，pendingUpdate 已经从 true 变为 false（即已更新完成），那么需要光等 100ms
     *   2. 调用 nextTick 时，pendingUpdate 为 true，那么刚好可以搭上便车
     *   3. 调用 nextTick 时，pendingUpdate 还是 false，框架仍未启动更新逻辑，这时最多轮询 100ms，等待 pendingUpdate 变为 true。
     */
    function next() {
        var _a, _b, _c;
        const pageElement = env.document.getElementById(path);
        if (pageElement === null || pageElement === void 0 ? void 0 : pageElement.pendingUpdate) {
            if ("harmony" === 'web') {
                // eslint-disable-next-line dot-notation
                (_c = (_b = (_a = pageElement.firstChild) === null || _a === void 0 ? void 0 : _a['componentOnReady']) === null || _b === void 0 ? void 0 : _b.call(_a).then(() => {
                    timerFunc();
                })) !== null && _c !== void 0 ? _c : timerFunc();
            }
            else {
                pageElement.enqueueUpdateCallback(cb, ctx);
            }
        }
        else if (Date.now() - beginTime > TIMEOUT) {
            timerFunc();
        }
        else {
            setTimeout(() => next(), 20);
        }
    }
    next();
};

function handleArrayFindPolyfill() {
    if (!isFunction(Array.prototype.find)) {
        Object.defineProperty(Array.prototype, 'find', {
            value(predicate) {
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }
                const o = Object(this);
                const len = o.length >>> 0;
                if (!isFunction(predicate)) {
                    throw new TypeError('predicate must be a function');
                }
                const thisArg = arguments[1];
                let k = 0;
                while (k < len) {
                    const kValue = o[k];
                    if (predicate.call(thisArg, kValue, k, o)) {
                        return kValue;
                    }
                    k++;
                }
                return undefined;
            }
        });
    }
}
function handleArrayIncludesPolyfill() {
    if (!isFunction(Array.prototype.includes)) {
        Object.defineProperty(Array.prototype, 'includes', {
            value(searchElement, fromIndex) {
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }
                const o = Object(this);
                const len = o.length >>> 0;
                if (len === 0) {
                    return false;
                }
                const n = fromIndex | 0;
                let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
                while (k < len) {
                    if (o[k] === searchElement) {
                        return true;
                    }
                    k++;
                }
                return false;
            }
        });
    }
}

/* eslint-disable eqeqeq */
function handleIntersectionObserverPolyfill() {
    // Exit early if all IntersectionObserver and IntersectionObserverEntry
    // features are natively supported.
    if ('IntersectionObserver' in window &&
        'IntersectionObserverEntry' in window &&
        'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
        if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
            // Minimal polyfill for Edge 15's lack of `isIntersecting`
            // See: https://github.com/w3c/IntersectionObserver/issues/211
            Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
                get: function () {
                    return this.intersectionRatio > 0;
                }
            });
        }
    }
    else {
        handleIntersectionObserverObjectPolyfill();
    }
}
function handleIntersectionObserverObjectPolyfill() {
    const document = window.document;
    /**
     * Creates the globalThis IntersectionObserverEntry constructor.
     * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
     * @param {Object} entry A dictionary of instance properties.
     * @constructor
     */
    function IntersectionObserverEntry(entry) {
        this.time = entry.time;
        this.target = entry.target;
        this.rootBounds = entry.rootBounds;
        this.boundingClientRect = entry.boundingClientRect;
        this.intersectionRect = entry.intersectionRect || getEmptyRect();
        this.isIntersecting = !!entry.intersectionRect;
        // Calculates the intersection ratio.
        const targetRect = this.boundingClientRect;
        const targetArea = targetRect.width * targetRect.height;
        const intersectionRect = this.intersectionRect;
        const intersectionArea = intersectionRect.width * intersectionRect.height;
        // Sets intersection ratio.
        if (targetArea) {
            // Round the intersection ratio to avoid floating point math issues:
            // https://github.com/w3c/IntersectionObserver/issues/324
            this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
        }
        else {
            // If area is zero and is intersecting, sets to 1, otherwise to 0
            this.intersectionRatio = this.isIntersecting ? 1 : 0;
        }
    }
    /**
     * Creates the globalThis IntersectionObserver constructor.
     * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
     * @param {Function} callback The function to be invoked after intersection
     *     changes have queued. The function is not invoked if the queue has
     *     been emptied by calling the `takeRecords` method.
     * @param {Object=} opt_options Optional configuration options.
     * @constructor
     */
    function IntersectionObserver(callback, options = {}) {
        if (!isFunction(callback)) {
            throw new Error('callback must be a function');
        }
        if (options.root && options.root.nodeType != 1) {
            throw new Error('root must be an Element');
        }
        // Binds and throttles `this._checkForIntersections`.
        this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);
        // Private properties.
        this._callback = callback;
        this._observationTargets = [];
        this._queuedEntries = [];
        this._rootMarginValues = this._parseRootMargin(options.rootMargin);
        // Public properties.
        this.thresholds = this._initThresholds(options.threshold);
        this.root = options.root || null;
        this.rootMargin = this._rootMarginValues.map(function (margin) {
            return margin.value + margin.unit;
        }).join(' ');
    }
    /**
     * The minimum interval within which the document will be checked for
     * intersection changes.
     */
    IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
    /**
     * The frequency in which the polyfill polls for intersection changes.
     * this can be updated on a per instance basis and must be set prior to
     * calling `observe` on the first target.
     */
    IntersectionObserver.prototype.POLL_INTERVAL = null;
    /**
     * Use a mutation observer on the root element
     * to detect intersection changes.
     */
    IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
    /**
     * Starts observing a target element for intersection changes based on
     * the thresholds values.
     * @param {Element} target The DOM element to observe.
     */
    IntersectionObserver.prototype.observe = function (target) {
        const isTargetAlreadyObserved = this._observationTargets.some(function (item) {
            return item.element == target;
        });
        if (isTargetAlreadyObserved)
            return;
        if (!(target && target.nodeType == 1)) {
            throw new Error('target must be an Element');
        }
        this._registerInstance();
        this._observationTargets.push({ element: target, entry: null });
        this._monitorIntersections();
        this._checkForIntersections();
    };
    /**
     * Stops observing a target element for intersection changes.
     * @param {Element} target The DOM element to observe.
     */
    IntersectionObserver.prototype.unobserve = function (target) {
        this._observationTargets =
            this._observationTargets.filter(function (item) {
                return item.element != target;
            });
        if (!this._observationTargets.length) {
            this._unmonitorIntersections();
            this._unregisterInstance();
        }
    };
    /**
     * Stops observing all target elements for intersection changes.
     */
    IntersectionObserver.prototype.disconnect = function () {
        this._observationTargets = [];
        this._unmonitorIntersections();
        this._unregisterInstance();
    };
    /**
     * Returns any queue entries that have not yet been reported to the
     * callback and clears the queue. This can be used in conjunction with the
     * callback to obtain the absolute most up-to-date intersection information.
     * @return {Array} The currently queued entries.
     */
    IntersectionObserver.prototype.takeRecords = function () {
        const records = this._queuedEntries.slice();
        this._queuedEntries = [];
        return records;
    };
    /**
     * Accepts the threshold value from the user configuration object and
     * returns a sorted array of unique threshold values. If a value is not
     * between 0 and 1 and error is thrown.
     * @private
     * @param {Array|number=} opt_threshold An optional threshold value or
     *     a list of threshold values, defaulting to [0].
     * @return {Array} A sorted list of unique and valid threshold values.
     */
    IntersectionObserver.prototype._initThresholds = function (opt_threshold) {
        let threshold = opt_threshold || [0];
        if (!Array.isArray(threshold))
            threshold = [threshold];
        return threshold.sort().filter(function (t, i, a) {
            if (!isNumber(t) || isNaN(t) || t < 0 || t > 1) {
                throw new Error('threshold must be a number between 0 and 1 inclusively');
            }
            return t !== a[i - 1];
        });
    };
    /**
     * Accepts the rootMargin value from the user configuration object
     * and returns an array of the four margin values as an object containing
     * the value and unit properties. If any of the values are not properly
     * formatted or use a unit other than px or %, and error is thrown.
     * @private
     * @param {string=} opt_rootMargin An optional rootMargin value,
     *     defaulting to '0px'.
     * @return {Array<Object>} An array of margin objects with the keys
     *     value and unit.
     */
    IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {
        const marginString = opt_rootMargin || '0px';
        const margins = marginString.split(/\s+/).map(function (margin) {
            const parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
            if (!parts) {
                throw new Error('rootMargin must be specified in pixels or percent');
            }
            return { value: parseFloat(parts[1]), unit: parts[2] };
        });
        // Handles shorthand.
        margins[1] = margins[1] || margins[0];
        margins[2] = margins[2] || margins[0];
        margins[3] = margins[3] || margins[1];
        return margins;
    };
    /**
     * Starts polling for intersection changes if the polling is not already
     * happening, and if the page's visibility state is visible.
     * @private
     */
    IntersectionObserver.prototype._monitorIntersections = function () {
        if (!this._monitoringIntersections) {
            this._monitoringIntersections = true;
            // If a poll interval is set, use polling instead of listening to
            // resize and scroll events or DOM mutations.
            if (this.POLL_INTERVAL) {
                this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL);
            }
            else {
                addEvent(window, 'resize', this._checkForIntersections, true);
                addEvent(document, 'scroll', this._checkForIntersections, true);
                if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
                    this._domObserver = new MutationObserver(this._checkForIntersections);
                    this._domObserver.observe(document, {
                        attributes: true,
                        childList: true,
                        characterData: true,
                        subtree: true
                    });
                }
            }
        }
    };
    /**
     * Stops polling for intersection changes.
     * @private
     */
    IntersectionObserver.prototype._unmonitorIntersections = function () {
        if (this._monitoringIntersections) {
            this._monitoringIntersections = false;
            clearInterval(this._monitoringInterval);
            this._monitoringInterval = null;
            removeEvent(window, 'resize', this._checkForIntersections, true);
            removeEvent(document, 'scroll', this._checkForIntersections, true);
            if (this._domObserver) {
                this._domObserver.disconnect();
                this._domObserver = null;
            }
        }
    };
    /**
     * Scans each observation target for intersection changes and adds them
     * to the internal entries queue. If new entries are found, it
     * schedules the callback to be invoked.
     * @private
     */
    IntersectionObserver.prototype._checkForIntersections = function () {
        const rootIsInDom = this._rootIsInDom();
        const rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
        this._observationTargets.forEach(function (item) {
            const target = item.element;
            const targetRect = getBoundingClientRect(target);
            const rootContainsTarget = this._rootContainsTarget(target);
            const oldEntry = item.entry;
            const intersectionRect = rootIsInDom && rootContainsTarget &&
                this._computeTargetAndRootIntersection(target, rootRect);
            const newEntry = item.entry = new IntersectionObserverEntry({
                time: now(),
                target: target,
                boundingClientRect: targetRect,
                rootBounds: rootRect,
                intersectionRect: intersectionRect,
                intersectionRatio: -1,
                isIntersecting: false,
            });
            if (!oldEntry) {
                this._queuedEntries.push(newEntry);
            }
            else if (rootIsInDom && rootContainsTarget) {
                // If the new entry intersection ratio has crossed any of the
                // thresholds, add a new entry.
                if (this._hasCrossedThreshold(oldEntry, newEntry)) {
                    this._queuedEntries.push(newEntry);
                }
            }
            else {
                // If the root is not in the DOM or target is not contained within
                // root but the previous entry for this target had an intersection,
                // add a new record indicating removal.
                if (oldEntry && oldEntry.isIntersecting) {
                    this._queuedEntries.push(newEntry);
                }
            }
        }, this);
        if (this._queuedEntries.length) {
            this._callback(this.takeRecords(), this);
        }
    };
    /**
     * Accepts a target and root rect computes the intersection between then
     * following the algorithm in the spec.
     * TODO(philipwalton): at this time clip-path is not considered.
     * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
     * @param {Element} target The target DOM element
     * @param {Object} rootRect The bounding rect of the root after being
     *     expanded by the rootMargin value.
     * @return {?Object} The final intersection rect object or undefined if no
     *     intersection is found.
     * @private
     */
    IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, rootRect) {
        // If the element isn't displayed, an intersection can't happen.
        if (window.getComputedStyle(target).display === 'none')
            return;
        const targetRect = getBoundingClientRect(target);
        let intersectionRect = targetRect;
        let parent = getParentNode(target);
        let atRoot = false;
        while (!atRoot) {
            let parentRect = null;
            const parentComputedStyle = parent.nodeType == 1 ?
                window.getComputedStyle(parent) : {};
            // If the parent isn't displayed, an intersection can't happen.
            if (parentComputedStyle.display === 'none')
                return;
            if (parent == this.root || parent == document) {
                atRoot = true;
                parentRect = rootRect;
            }
            else {
                // If the element has a non-visible overflow, and it's not the <body>
                // or <html> element, update the intersection rect.
                // Note: <body> and <html> cannot be clipped to a rect that's not also
                // the document rect, so no need to compute a new intersection.
                if (parent != document.body &&
                    parent != document.documentElement &&
                    parentComputedStyle.overflow != 'visible') {
                    parentRect = getBoundingClientRect(parent);
                }
            }
            // If either of the above conditionals set a new parentRect,
            // calculate new intersection data.
            if (parentRect) {
                intersectionRect = computeRectIntersection(parentRect, intersectionRect);
                if (!intersectionRect)
                    break;
            }
            parent = getParentNode(parent);
        }
        return intersectionRect;
    };
    /**
   * Returns the root rect after being expanded by the rootMargin value.
   * @return {Object} The expanded root rect.
   * @private
   */
    IntersectionObserver.prototype._getRootRect = function () {
        let rootRect;
        if (this.root) {
            rootRect = getBoundingClientRect(this.root);
        }
        else {
            // Use <html>/<body> instead of window since scroll bars affect size.
            const html = document.documentElement;
            const body = document.body;
            rootRect = {
                top: 0,
                left: 0,
                right: html.clientWidth || body.clientWidth,
                width: html.clientWidth || body.clientWidth,
                bottom: html.clientHeight || body.clientHeight,
                height: html.clientHeight || body.clientHeight
            };
        }
        return this._expandRectByRootMargin(rootRect);
    };
    /**
     * Accepts a rect and expands it by the rootMargin value.
     * @param {Object} rect The rect object to expand.
     * @return {Object} The expanded rect.
     * @private
     */
    IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {
        const margins = this._rootMarginValues.map(function (margin, i) {
            return margin.unit === 'px' ? margin.value :
                margin.value * (i % 2 ? rect.width : rect.height) / 100;
        });
        const newRect = {
            top: rect.top - margins[0],
            right: rect.right + margins[1],
            bottom: rect.bottom + margins[2],
            left: rect.left - margins[3]
        };
        newRect.width = newRect.right - newRect.left;
        newRect.height = newRect.bottom - newRect.top;
        return newRect;
    };
    /**
     * Accepts an old and new entry and returns true if at least one of the
     * threshold values has been crossed.
     * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
     *    particular target element or null if no previous entry exists.
     * @param {IntersectionObserverEntry} newEntry The current entry for a
     *    particular target element.
     * @return {boolean} Returns true if a any threshold has been crossed.
     * @private
     */
    IntersectionObserver.prototype._hasCrossedThreshold =
        function (oldEntry, newEntry) {
            // To make comparing easier, an entry that has a ratio of 0
            // but does not actually intersect is given a value of -1
            const oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
            const newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
            // Ignore unchanged ratios
            if (oldRatio === newRatio)
                return;
            for (let i = 0; i < this.thresholds.length; i++) {
                const threshold = this.thresholds[i];
                // Return true if an entry matches a threshold or if the new ratio
                // and the old ratio are on the opposite sides of a threshold.
                if (threshold == oldRatio || threshold == newRatio ||
                    threshold < oldRatio !== threshold < newRatio) {
                    return true;
                }
            }
        };
    /**
     * Returns whether or not the root element is an element and is in the DOM.
     * @return {boolean} True if the root element is an element and is in the DOM.
     * @private
     */
    IntersectionObserver.prototype._rootIsInDom = function () {
        return !this.root || containsDeep(document, this.root);
    };
    /**
     * Returns whether or not the target element is a child of root.
     * @param {Element} target The target element to check.
     * @return {boolean} True if the target element is a child of root.
     * @private
     */
    IntersectionObserver.prototype._rootContainsTarget = function (target) {
        return containsDeep(this.root || document, target);
    };
    /**
     * Adds the instance to the globalThis IntersectionObserver registry if it isn't
     * already present.
     * @private
     */
    IntersectionObserver.prototype._registerInstance = function () {
    };
    /**
   * Removes the instance from the globalThis IntersectionObserver registry.
   * @private
   */
    IntersectionObserver.prototype._unregisterInstance = function () {
    };
    /**
     * Returns the result of the performance.now() method or null in browsers
     * that don't support the API.
     * @return {number} The elapsed time since the page was requested.
     */
    function now() {
        return window.performance && performance.now && performance.now();
    }
    /**
     * Adds an event handler to a DOM node ensuring cross-browser compatibility.
     * @param {Node} node The DOM node to add the event handler to.
     * @param {string} event The event name.
     * @param {Function} fn The event handler to add.
     * @param {boolean} opt_useCapture Optionally adds the even to the capture
     *     phase. Note: this only works in modern browsers.
     */
    function addEvent(node, event, fn, opt_useCapture) {
        if (isFunction(node.addEventListener)) {
            node.addEventListener(event, fn, opt_useCapture );
        }
        else if (isFunction(node.attachEvent)) {
            node.attachEvent('on' + event, fn);
        }
    }
    /**
     * Removes a previously added event handler from a DOM node.
     * @param {Node} node The DOM node to remove the event handler from.
     * @param {string} event The event name.
     * @param {Function} fn The event handler to remove.
     * @param {boolean} opt_useCapture If the event handler was added with this
     *     flag set to true, it should be set to true here in order to remove it.
     */
    function removeEvent(node, event, fn, opt_useCapture) {
        if (isFunction(node.removeEventListener)) {
            node.removeEventListener(event, fn, opt_useCapture );
        }
        else if (isFunction(node.detatchEvent)) {
            node.detatchEvent('on' + event, fn);
        }
    }
    /**
     * Returns the intersection between two rect objects.
     * @param {Object} rect1 The first rect.
     * @param {Object} rect2 The second rect.
     * @return {?Object} The intersection rect or undefined if no intersection
     *     is found.
     */
    function computeRectIntersection(rect1, rect2) {
        const top = Math.max(rect1.top, rect2.top);
        const bottom = Math.min(rect1.bottom, rect2.bottom);
        const left = Math.max(rect1.left, rect2.left);
        const right = Math.min(rect1.right, rect2.right);
        const width = right - left;
        const height = bottom - top;
        return (width >= 0 && height >= 0) && {
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            width: width,
            height: height
        };
    }
    /**
     * Shims the native getBoundingClientRect for compatibility with older IE.
     * @param {Element} el The element whose bounding rect to get.
     * @return {Object} The (possibly shimmed) rect of the element.
     */
    function getBoundingClientRect(el) {
        let rect;
        try {
            rect = el.getBoundingClientRect();
        }
        catch (err) {
            // Ignore Windows 7 IE11 "Unspecified error"
            // https://github.com/w3c/IntersectionObserver/pull/205
        }
        if (!rect)
            return getEmptyRect();
        // Older IE
        if (!(rect.width && rect.height)) {
            rect = {
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom,
                left: rect.left,
                width: rect.right - rect.left,
                height: rect.bottom - rect.top
            };
        }
        return rect;
    }
    /**
     * Returns an empty rect object. An empty rect is returned when an element
     * is not in the DOM.
     * @return {Object} The empty rect.
     */
    function getEmptyRect() {
        return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        };
    }
    /**
     * Checks to see if a parent element contains a child element (including inside
     * shadow DOM).
     * @param {Node} parent The parent element.
     * @param {Node} child The child element.
     * @return {boolean} True if the parent node contains the child node.
     */
    function containsDeep(parent, child) {
        let node = child;
        while (node) {
            if (node == parent)
                return true;
            node = getParentNode(node);
        }
        return false;
    }
    /**
     * Gets the parent node of an element or its host element if the parent node
     * is a shadow root.
     * @param {Node} node The node whose parent to get.
     * @return {Node|null} The parent node or null if no parent exists.
     */
    function getParentNode(node) {
        const parent = node.parentNode;
        if (parent && parent.nodeType == 11 && parent.host) {
            // If the parent is a shadow root, return the host element.
            return parent.host;
        }
        if (parent && parent.assignedSlot) {
            // If the parent is distributed in a <slot>, return the parent of a slot.
            return parent.assignedSlot.parentNode;
        }
        return parent;
    }
    // Exposes the constructors globally.
    window.IntersectionObserver = IntersectionObserver;
    window.IntersectionObserverEntry = IntersectionObserverEntry;
}

function handleObjectAssignPolyfill() {
    if (!isFunction(Object.assign)) {
        // Must be writable: true, enumerable: false, configurable: true
        Object.assign = function (target) {
            if (target == null) { // TypeError if undefined or null
                throw new TypeError('Cannot convert undefined or null to object');
            }
            const to = Object(target);
            for (let index = 1; index < arguments.length; index++) {
                const nextSource = arguments[index];
                if (nextSource != null) { // Skip over if undefined or null
                    for (const nextKey in nextSource) {
                        // Avoid bugs when hasOwnProperty is shadowed
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        };
    }
}
function handleObjectEntriesPolyfill() {
    if (!isFunction(Object.entries)) {
        // Must be writable: true, enumerable: false, configurable: true
        Object.entries = function (obj) {
            if (obj == null) { // TypeError if undefined or null
                throw new TypeError('Cannot convert undefined or null to object');
            }
            const to = [];
            if (obj != null) { // Skip over if undefined or null
                for (const key in obj) {
                    // Avoid bugs when hasOwnProperty is shadowed
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                        to.push([key, obj[key]]);
                    }
                }
            }
            return to;
        };
    }
}
function handleObjectDefinePropertyPolyfill() {
    if (!isFunction(Object.defineProperties)) {
        Object.defineProperties = function (obj, properties) {
            function convertToDescriptor(desc) {
                function hasProperty(obj, prop) {
                    return Object.prototype.hasOwnProperty.call(obj, prop);
                }
                if (!isObject(desc)) {
                    throw new TypeError('bad desc');
                }
                const d = {};
                if (hasProperty(desc, 'enumerable'))
                    d.enumerable = !!desc.enumerable;
                if (hasProperty(desc, 'configurable')) {
                    d.configurable = !!desc.configurable;
                }
                if (hasProperty(desc, 'value'))
                    d.value = desc.value;
                if (hasProperty(desc, 'writable'))
                    d.writable = !!desc.writable;
                if (hasProperty(desc, 'get')) {
                    const g = desc.get;
                    if (!isFunction(g) && !isUndefined(g)) {
                        throw new TypeError('bad get');
                    }
                    d.get = g;
                }
                if (hasProperty(desc, 'set')) {
                    const s = desc.set;
                    if (!isFunction(s) && !isUndefined(s)) {
                        throw new TypeError('bad set');
                    }
                    d.set = s;
                }
                if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
                    throw new TypeError('identity-confused descriptor');
                }
                return d;
            }
            if (!isObject(obj))
                throw new TypeError('bad obj');
            properties = Object(properties);
            const keys = Object.keys(properties);
            const descs = [];
            for (let i = 0; i < keys.length; i++) {
                descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
            }
            for (let i = 0; i < descs.length; i++) {
                Object.defineProperty(obj, descs[i][0], descs[i][1]);
            }
            return obj;
        };
    }
}

function handlePolyfill() {
    if ("disabled" === 'enabled' || "disabled" === 'Object' || "disabled" === 'Object.assign') {
        handleObjectAssignPolyfill();
    }
    if ("disabled" === 'enabled' || "disabled" === 'Object' || "disabled" === 'Object.entries') {
        handleObjectEntriesPolyfill();
    }
    if ("disabled" === 'enabled' || "disabled" === 'Object' || "disabled" === 'Object.defineProperty') {
        handleObjectDefinePropertyPolyfill();
    }
    if ("disabled" === 'enabled' || "disabled" === 'Array' || "disabled" === 'Array.find') {
        handleArrayFindPolyfill();
    }
    if ("disabled" === 'enabled' || "disabled" === 'Array' || "disabled" === 'Array.includes') {
        handleArrayIncludesPolyfill();
    }
    // Exit early if we're not running in a browser.
    if ("harmony" === 'web' && isObject(window)) {
        if ("disabled" === 'enabled' || "disabled" === 'IntersectionObserver') {
            handleIntersectionObserverPolyfill();
        }
    }
}
if ("disabled" !== 'disabled' && "harmony" !== 'web') {
    handlePolyfill();
}

export { A, APP, BEHAVIORS, BODY, CATCHMOVE, CATCH_VIEW, CHANGE, CLASS, COMMENT, COMPILE_MODE, CONFIRM, CONTAINER, CONTEXT_ACTIONS, CURRENT_TARGET, CUSTOM_WRAPPER, Current, DATASET, DATE, DOCUMENT_ELEMENT_NAME, DOCUMENT_FRAGMENT, EVENT_CALLBACK_RESULT, EXTERNAL_CLASSES, FOCUS, FormElement, HEAD, HOOKS_APP_ID, HTML, History, ID, INPUT, KEY_CODE, Location, MutationObserver$1 as MutationObserver, OBJECT, ON_HIDE, ON_LOAD, ON_READY, ON_SHOW, OPTIONS, PAGE_INIT, PROPERTY_THRESHOLD, PROPS, PURE_VIEW, ROOT_STR, SET_DATA, SET_TIMEOUT, STATIC_VIEW, STYLE, SVGElement, Style, TARGET, TARO_RUNTIME, TIME_STAMP, TOUCHMOVE, TYPE, TaroElement, TaroEvent, TaroNode, TaroRootElement, TaroText, UID, URL, URLSearchParams, VALUE, VIEW, addLeadingSlash, _caf as cancelAnimationFrame, convertNumber2PX, createComponentConfig, createEvent, createPageConfig, createRecursiveComponentConfig, customWrapperCache, debounce, document$1 as document, env, eventCenter, eventHandler, eventSource, extend, getComponentsAlias, getComputedStyle, getCurrentInstance, getCurrentPage, getHomePage, getOnHideEventKey, getOnReadyEventKey, getOnShowEventKey, getPageInstance, getPath, handlePolyfill, hasBasename, history, hydrate, incrementId, injectPageInstance, isComment, isElement, isHasExtractProp, isParentBinded, isText, location, nav as navigator, nextTick, now, options, parseUrl, perf, removePageInstance, _raf as requestAnimationFrame, safeExecute, shortcutAttr, stringify, stripBasename, stripSuffix, stripTrailing, throttle, window$1 as window };
//# sourceMappingURL=runtime.esm.js.map
