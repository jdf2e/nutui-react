'use strict';

const DEFAULT_EMPTY_ARRAY = '[]';
const NO_DEFAULT_VALUE = '';
const DEFAULT_TRUE = '!0';
const DEFAULT_FALSE = '!1';
const touchEvents = {
    bindTouchStart: NO_DEFAULT_VALUE,
    bindTouchMove: NO_DEFAULT_VALUE,
    bindTouchEnd: NO_DEFAULT_VALUE,
    bindTouchCancel: NO_DEFAULT_VALUE,
    bindLongTap: NO_DEFAULT_VALUE
};
const animation = {
    animation: NO_DEFAULT_VALUE,
    bindAnimationStart: NO_DEFAULT_VALUE,
    bindAnimationIteration: NO_DEFAULT_VALUE,
    bindAnimationEnd: NO_DEFAULT_VALUE,
    bindTransitionEnd: NO_DEFAULT_VALUE
};
function singleQuote(s) {
    return `'${s}'`;
}
const View = Object.assign(Object.assign({ 'hover-class': singleQuote('none'), 'hover-stop-propagation': DEFAULT_FALSE, 'hover-start-time': '50', 'hover-stay-time': '400' }, touchEvents), animation);
const Icon = {
    type: NO_DEFAULT_VALUE,
    size: '23',
    color: NO_DEFAULT_VALUE
};
const MapComp = Object.assign({ longitude: NO_DEFAULT_VALUE, latitude: NO_DEFAULT_VALUE, scale: '16', markers: DEFAULT_EMPTY_ARRAY, covers: NO_DEFAULT_VALUE, polyline: DEFAULT_EMPTY_ARRAY, circles: DEFAULT_EMPTY_ARRAY, controls: DEFAULT_EMPTY_ARRAY, 'include-points': DEFAULT_EMPTY_ARRAY, 'show-location': NO_DEFAULT_VALUE, 'layer-style': '1', bindMarkerTap: NO_DEFAULT_VALUE, bindControlTap: NO_DEFAULT_VALUE, bindCalloutTap: NO_DEFAULT_VALUE, bindUpdated: NO_DEFAULT_VALUE }, touchEvents);
const Progress = {
    percent: NO_DEFAULT_VALUE,
    'stroke-width': '6',
    color: singleQuote('#09BB07'),
    activeColor: singleQuote('#09BB07'),
    backgroundColor: singleQuote('#EBEBEB'),
    active: DEFAULT_FALSE,
    'active-mode': singleQuote('backwards'),
    'show-info': DEFAULT_FALSE
};
const RichText = {
    nodes: DEFAULT_EMPTY_ARRAY
};
const Text = Object.assign({ selectable: DEFAULT_FALSE, space: NO_DEFAULT_VALUE, decode: DEFAULT_FALSE }, touchEvents);
const Button = Object.assign({ size: singleQuote('default'), type: NO_DEFAULT_VALUE, plain: DEFAULT_FALSE, disabled: NO_DEFAULT_VALUE, loading: DEFAULT_FALSE, 'form-type': NO_DEFAULT_VALUE, 'open-type': NO_DEFAULT_VALUE, 'hover-class': singleQuote('button-hover'), 'hover-stop-propagation': DEFAULT_FALSE, 'hover-start-time': '20', 'hover-stay-time': '70', name: NO_DEFAULT_VALUE, bindagreeprivacyauthorization: NO_DEFAULT_VALUE }, touchEvents);
const Checkbox = {
    value: NO_DEFAULT_VALUE,
    disabled: NO_DEFAULT_VALUE,
    checked: DEFAULT_FALSE,
    color: singleQuote('#09BB07'),
    name: NO_DEFAULT_VALUE
};
const CheckboxGroup = {
    bindChange: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Form = {
    'report-submit': DEFAULT_FALSE,
    bindSubmit: NO_DEFAULT_VALUE,
    bindReset: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Input = {
    value: NO_DEFAULT_VALUE,
    type: singleQuote(NO_DEFAULT_VALUE),
    password: DEFAULT_FALSE,
    placeholder: NO_DEFAULT_VALUE,
    'placeholder-style': NO_DEFAULT_VALUE,
    'placeholder-class': singleQuote('input-placeholder'),
    disabled: NO_DEFAULT_VALUE,
    maxlength: '140',
    'cursor-spacing': '0',
    focus: DEFAULT_FALSE,
    'confirm-type': singleQuote('done'),
    'confirm-hold': DEFAULT_FALSE,
    cursor: '-1',
    'selection-start': '-1',
    'selection-end': '-1',
    bindInput: NO_DEFAULT_VALUE,
    bindFocus: NO_DEFAULT_VALUE,
    bindBlur: NO_DEFAULT_VALUE,
    bindConfirm: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Label = Object.assign({ for: NO_DEFAULT_VALUE, name: NO_DEFAULT_VALUE }, touchEvents);
const Picker = {
    mode: singleQuote('selector'),
    disabled: NO_DEFAULT_VALUE,
    range: NO_DEFAULT_VALUE,
    'range-key': NO_DEFAULT_VALUE,
    value: NO_DEFAULT_VALUE,
    start: NO_DEFAULT_VALUE,
    end: NO_DEFAULT_VALUE,
    fields: singleQuote('day'),
    'custom-item': NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
    bindCancel: NO_DEFAULT_VALUE,
    bindChange: NO_DEFAULT_VALUE,
    bindColumnChange: NO_DEFAULT_VALUE
};
const PickerView = {
    value: NO_DEFAULT_VALUE,
    'indicator-style': NO_DEFAULT_VALUE,
    'indicator-class': NO_DEFAULT_VALUE,
    'mask-style': NO_DEFAULT_VALUE,
    'mask-class': NO_DEFAULT_VALUE,
    bindChange: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const PickerViewColumn = {
    name: NO_DEFAULT_VALUE
};
const Radio = {
    value: NO_DEFAULT_VALUE,
    checked: DEFAULT_FALSE,
    disabled: NO_DEFAULT_VALUE,
    color: singleQuote('#09BB07'),
    name: NO_DEFAULT_VALUE
};
const RadioGroup = {
    bindChange: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Slider = {
    min: '0',
    max: '100',
    step: '1',
    disabled: NO_DEFAULT_VALUE,
    value: '0',
    activeColor: singleQuote('#1aad19'),
    backgroundColor: singleQuote('#e9e9e9'),
    'block-size': '28',
    'block-color': singleQuote('#ffffff'),
    'show-value': DEFAULT_FALSE,
    bindChange: NO_DEFAULT_VALUE,
    bindChanging: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Switch = {
    checked: DEFAULT_FALSE,
    disabled: NO_DEFAULT_VALUE,
    type: singleQuote('switch'),
    color: singleQuote('#04BE02'),
    bindChange: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Textarea = {
    value: NO_DEFAULT_VALUE,
    placeholder: NO_DEFAULT_VALUE,
    'placeholder-style': NO_DEFAULT_VALUE,
    'placeholder-class': singleQuote('textarea-placeholder'),
    disabled: NO_DEFAULT_VALUE,
    maxlength: '140',
    'auto-focus': DEFAULT_FALSE,
    focus: DEFAULT_FALSE,
    'auto-height': DEFAULT_FALSE,
    fixed: DEFAULT_FALSE,
    'cursor-spacing': '0',
    cursor: '-1',
    'selection-start': '-1',
    'selection-end': '-1',
    bindFocus: NO_DEFAULT_VALUE,
    bindBlur: NO_DEFAULT_VALUE,
    bindLineChange: NO_DEFAULT_VALUE,
    bindInput: NO_DEFAULT_VALUE,
    bindConfirm: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const CoverImage = {
    src: NO_DEFAULT_VALUE,
    bindLoad: 'eh',
    bindError: 'eh'
};
const CoverView = Object.assign({ 'scroll-top': DEFAULT_FALSE }, touchEvents);
const MovableArea = {
    'scale-area': DEFAULT_FALSE
};
const MovableView = Object.assign(Object.assign({ direction: 'none', inertia: DEFAULT_FALSE, 'out-of-bounds': DEFAULT_FALSE, x: NO_DEFAULT_VALUE, y: NO_DEFAULT_VALUE, damping: '20', friction: '2', disabled: NO_DEFAULT_VALUE, scale: DEFAULT_FALSE, 'scale-min': '0.5', 'scale-max': '10', 'scale-value': '1', bindChange: NO_DEFAULT_VALUE, bindScale: NO_DEFAULT_VALUE, bindHTouchMove: NO_DEFAULT_VALUE, bindVTouchMove: NO_DEFAULT_VALUE, width: singleQuote('10px'), height: singleQuote('10px') }, touchEvents), animation);
const ScrollView = Object.assign(Object.assign({ 'scroll-x': DEFAULT_FALSE, 'scroll-y': DEFAULT_FALSE, 'upper-threshold': '50', 'lower-threshold': '50', 'scroll-top': NO_DEFAULT_VALUE, 'scroll-left': NO_DEFAULT_VALUE, 'scroll-into-view': NO_DEFAULT_VALUE, 'scroll-with-animation': DEFAULT_FALSE, 'enable-back-to-top': DEFAULT_FALSE, bindScrollToUpper: NO_DEFAULT_VALUE, bindScrollToLower: NO_DEFAULT_VALUE, bindScroll: NO_DEFAULT_VALUE }, touchEvents), animation);
const Swiper = Object.assign({ 'indicator-dots': DEFAULT_FALSE, 'indicator-color': singleQuote('rgba(0, 0, 0, .3)'), 'indicator-active-color': singleQuote('#000000'), autoplay: DEFAULT_FALSE, current: '0', interval: '5000', duration: '500', circular: DEFAULT_FALSE, vertical: DEFAULT_FALSE, 'previous-margin': singleQuote('0px'), 'next-margin': singleQuote('0px'), 'display-multiple-items': '1', bindChange: NO_DEFAULT_VALUE, bindTransition: NO_DEFAULT_VALUE, bindAnimationFinish: NO_DEFAULT_VALUE }, touchEvents);
const SwiperItem = {
    'item-id': NO_DEFAULT_VALUE
};
const Navigator = {
    url: NO_DEFAULT_VALUE,
    'open-type': singleQuote('navigate'),
    delta: '1',
    'hover-class': singleQuote('navigator-hover'),
    'hover-stop-propagation': DEFAULT_FALSE,
    'hover-start-time': '50',
    'hover-stay-time': '600',
    bindSuccess: NO_DEFAULT_VALUE,
    bindFail: NO_DEFAULT_VALUE,
    bindComplete: NO_DEFAULT_VALUE
};
const Audio = {
    id: NO_DEFAULT_VALUE,
    src: NO_DEFAULT_VALUE,
    loop: DEFAULT_FALSE,
    controls: DEFAULT_FALSE,
    poster: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
    author: NO_DEFAULT_VALUE,
    bindError: NO_DEFAULT_VALUE,
    bindPlay: NO_DEFAULT_VALUE,
    bindPause: NO_DEFAULT_VALUE,
    bindTimeUpdate: NO_DEFAULT_VALUE,
    bindEnded: NO_DEFAULT_VALUE
};
const Camera = {
    'device-position': singleQuote('back'),
    flash: singleQuote('auto'),
    bindStop: NO_DEFAULT_VALUE,
    bindError: NO_DEFAULT_VALUE
};
const Image = Object.assign({ src: NO_DEFAULT_VALUE, mode: singleQuote('scaleToFill'), 'lazy-load': DEFAULT_FALSE, bindError: NO_DEFAULT_VALUE, bindLoad: NO_DEFAULT_VALUE }, touchEvents);
const LivePlayer = Object.assign({ src: NO_DEFAULT_VALUE, autoplay: DEFAULT_FALSE, muted: DEFAULT_FALSE, orientation: singleQuote('vertical'), 'object-fit': singleQuote('contain'), 'background-mute': DEFAULT_FALSE, 'min-cache': '1', 'max-cache': '3', bindStateChange: NO_DEFAULT_VALUE, bindFullScreenChange: NO_DEFAULT_VALUE, bindNetStatus: NO_DEFAULT_VALUE }, animation);
const Video = Object.assign({ src: NO_DEFAULT_VALUE, duration: NO_DEFAULT_VALUE, controls: DEFAULT_TRUE, 'danmu-list': NO_DEFAULT_VALUE, 'danmu-btn': NO_DEFAULT_VALUE, 'enable-danmu': NO_DEFAULT_VALUE, autoplay: DEFAULT_FALSE, loop: DEFAULT_FALSE, muted: DEFAULT_FALSE, 'initial-time': '0', 'page-gesture': DEFAULT_FALSE, direction: NO_DEFAULT_VALUE, 'show-progress': DEFAULT_TRUE, 'show-fullscreen-btn': DEFAULT_TRUE, 'show-play-btn': DEFAULT_TRUE, 'show-center-play-btn': DEFAULT_TRUE, 'enable-progress-gesture': DEFAULT_TRUE, 'object-fit': singleQuote('contain'), poster: NO_DEFAULT_VALUE, 'show-mute-btn': DEFAULT_FALSE, bindPlay: NO_DEFAULT_VALUE, bindPause: NO_DEFAULT_VALUE, bindEnded: NO_DEFAULT_VALUE, bindTimeUpdate: NO_DEFAULT_VALUE, bindFullScreenChange: NO_DEFAULT_VALUE, bindWaiting: NO_DEFAULT_VALUE, bindError: NO_DEFAULT_VALUE }, animation);
const Canvas = Object.assign({ 'canvas-id': NO_DEFAULT_VALUE, 'disable-scroll': DEFAULT_FALSE, bindError: NO_DEFAULT_VALUE }, touchEvents);
const Ad = {
    'unit-id': NO_DEFAULT_VALUE,
    'ad-intervals': NO_DEFAULT_VALUE,
    bindLoad: NO_DEFAULT_VALUE,
    bindError: NO_DEFAULT_VALUE,
    bindClose: NO_DEFAULT_VALUE
};
const WebView = {
    src: NO_DEFAULT_VALUE,
    bindMessage: NO_DEFAULT_VALUE,
    bindLoad: NO_DEFAULT_VALUE,
    bindError: NO_DEFAULT_VALUE
};
const Block = {};
// For Vue，因为 slot 标签被 vue 占用了
const SlotView = {
    name: NO_DEFAULT_VALUE
};
// For React
// Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
// 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
// 不给 View 直接加 slot 属性的原因是性能损耗
const Slot = {
    name: NO_DEFAULT_VALUE
};
const NativeSlot = {
    name: NO_DEFAULT_VALUE
};
const Script = {};
const internalComponents = {
    View,
    Icon,
    Progress,
    RichText,
    Text,
    Button,
    Checkbox,
    CheckboxGroup,
    Form,
    Input,
    Label,
    Picker,
    PickerView,
    PickerViewColumn,
    Radio,
    RadioGroup,
    Slider,
    Switch,
    CoverImage,
    Textarea,
    CoverView,
    MovableArea,
    MovableView,
    ScrollView,
    Swiper,
    SwiperItem,
    Navigator,
    Audio,
    Camera,
    Image,
    LivePlayer,
    Video,
    Canvas,
    Ad,
    WebView,
    Block,
    Map: MapComp,
    Slot,
    SlotView,
    NativeSlot,
    Script,
};
const controlledComponent = new Set([
    'input',
    'checkbox',
    'picker',
    'picker-view',
    'radio',
    'slider',
    'switch',
    'textarea'
]);
const focusComponents = new Set([
    'input',
    'textarea'
]);
const voidElements = new Set([
    'progress',
    'icon',
    'rich-text',
    'input',
    'textarea',
    'slider',
    'switch',
    'audio',
    'ad',
    'official-account',
    'open-data',
    'navigation-bar'
]);
const nestElements = new Map([
    ['view', -1],
    ['catch-view', -1],
    ['cover-view', -1],
    ['static-view', -1],
    ['pure-view', -1],
    ['block', -1],
    ['text', -1],
    ['static-text', 6],
    ['slot', 8],
    ['slot-view', 8],
    ['label', 6],
    ['form', 4],
    ['scroll-view', 4],
    ['swiper', 4],
    ['swiper-item', 4],
]);

exports.PLATFORM_TYPE = void 0;
(function (PLATFORM_TYPE) {
    PLATFORM_TYPE["MINI"] = "mini";
    PLATFORM_TYPE["WEB"] = "web";
    PLATFORM_TYPE["RN"] = "rn";
    PLATFORM_TYPE["HARMONY"] = "harmony";
    PLATFORM_TYPE["QUICK"] = "quickapp";
})(exports.PLATFORM_TYPE || (exports.PLATFORM_TYPE = {}));
const PLATFORM_CONFIG_MAP = {
    h5: {
        type: exports.PLATFORM_TYPE.WEB
    },
    harmony: {
        type: exports.PLATFORM_TYPE.HARMONY
    },
    mini: {
        type: exports.PLATFORM_TYPE.MINI
    },
    rn: {
        type: exports.PLATFORM_TYPE.RN
    },
    quickapp: {
        type: exports.PLATFORM_TYPE.QUICK
    },
};

class Events {
    constructor(opts) {
        var _a;
        this.callbacks = (_a = opts === null || opts === void 0 ? void 0 : opts.callbacks) !== null && _a !== void 0 ? _a : {};
    }
    on(eventName, callback, context) {
        let event, tail, _eventName;
        if (!callback) {
            return this;
        }
        if (typeof eventName === 'symbol') {
            _eventName = [eventName];
        }
        else {
            _eventName = eventName.split(Events.eventSplitter);
        }
        this.callbacks || (this.callbacks = {});
        const calls = this.callbacks;
        while ((event = _eventName.shift())) {
            const list = calls[event];
            const node = list ? list.tail : {};
            node.next = tail = {};
            node.context = context;
            node.callback = callback;
            calls[event] = {
                tail,
                next: list ? list.next : node
            };
        }
        return this;
    }
    once(events, callback, context) {
        const wrapper = (...args) => {
            callback.apply(this, args);
            this.off(events, wrapper, context);
        };
        this.on(events, wrapper, context);
        return this;
    }
    off(events, callback, context) {
        let event, calls, _events;
        if (!(calls = this.callbacks)) {
            return this;
        }
        if (!(events || callback || context)) {
            delete this.callbacks;
            return this;
        }
        if (typeof events === 'symbol') {
            _events = [events];
        }
        else {
            _events = events ? events.split(Events.eventSplitter) : Object.keys(calls);
        }
        while ((event = _events.shift())) {
            let node = calls[event];
            delete calls[event];
            if (!node || !(callback || context)) {
                continue;
            }
            const tail = node.tail;
            while ((node = node.next) !== tail) {
                const cb = node.callback;
                const ctx = node.context;
                if ((callback && cb !== callback) || (context && ctx !== context)) {
                    this.on(event, cb, ctx);
                }
            }
        }
        return this;
    }
    trigger(events, ...args) {
        let event, node, calls, _events;
        if (!(calls = this.callbacks)) {
            return this;
        }
        if (typeof events === 'symbol') {
            _events = [events];
        }
        else {
            _events = events.split(Events.eventSplitter);
        }
        while ((event = _events.shift())) {
            if ((node = calls[event])) {
                const tail = node.tail;
                while ((node = node.next) !== tail) {
                    node.callback.apply(node.context || this, args);
                }
            }
        }
        return this;
    }
}
Events.eventSplitter = ','; // Note: Harmony ACE API 8 开发板不支持使用正则 split 字符串 /\s+/

class PageEvts extends Events {
    constructor() {
        super(...arguments);
        this.exeList = [];
    }
    on(eventName, callback) {
        super.on(eventName, callback, this);
        this.exeList = this.exeList.reduce((prev, item) => {
            if (item.eventName === eventName) {
                super.trigger(item.eventName, item.data);
            }
            else {
                prev.push(item);
            }
            return prev;
        }, []);
        return this;
    }
    emit(events, data) {
        // eslint-disable-next-line
        routeChannel.trigger(events, data);
    }
}
const pageChannel = new PageEvts();
class RouteEvts extends Events {
    emit(events, data) {
        pageChannel.off(events);
        pageChannel.exeList.push({
            eventName: events,
            data
        });
    }
    addEvents(events) {
        if (!events || typeof events !== 'object')
            return;
        Object.keys(events).forEach(key => {
            this.off(key);
            this.on(key, events[key], this);
        });
    }
}
const routeChannel = new RouteEvts();
const EventChannel = { pageChannel, routeChannel };

function isString(o) {
    return typeof o === 'string';
}
function isUndefined(o) {
    return typeof o === 'undefined';
}
function isNull(o) {
    return o === null;
}
function isObject(o) {
    return o !== null && typeof o === 'object';
}
function isBoolean(o) {
    return o === true || o === false;
}
function isFunction(o) {
    return typeof o === 'function';
}
function isNumber(o) {
    return typeof o === 'number';
}
function isBooleanStringLiteral(o) {
    return o === 'true' || o === 'false';
}
const isArray = Array.isArray;
const isWebPlatform = () => "jdharmony" === 'h5' || "harmony" === 'web';

exports.HOOK_TYPE = void 0;
(function (HOOK_TYPE) {
    HOOK_TYPE[HOOK_TYPE["SINGLE"] = 0] = "SINGLE";
    HOOK_TYPE[HOOK_TYPE["MULTI"] = 1] = "MULTI";
    HOOK_TYPE[HOOK_TYPE["WATERFALL"] = 2] = "WATERFALL";
})(exports.HOOK_TYPE || (exports.HOOK_TYPE = {}));
const defaultMiniLifecycle = {
    app: [
        'onLaunch',
        'onShow',
        'onHide'
    ],
    page: [
        'onLoad',
        'onUnload',
        'onReady',
        'onShow',
        'onHide',
        [
            'onPullDownRefresh',
            'onReachBottom',
            'onPageScroll',
            'onResize',
            'defer:onTabItemTap', // defer: 需要等页面组件挂载后再调用
            'onTitleClick',
            'onOptionMenuClick',
            'onPopMenuClick',
            'onPullIntercept',
            'onAddToFavorites'
        ],
        [
            'onShareAppMessage',
            'onShareTimeline'
        ]
    ],
    component: [
        'attached',
        'detached'
    ]
};
function TaroHook(type, initial) {
    return {
        type,
        initial: initial || null
    };
}
class TaroHooks extends Events {
    constructor(hooks, opts) {
        super(opts);
        this.hooks = hooks;
        for (const hookName in hooks) {
            const { initial } = hooks[hookName];
            if (isFunction(initial)) {
                this.on(hookName, initial);
            }
        }
    }
    tapOneOrMany(hookName, callback) {
        const list = isFunction(callback) ? [callback] : callback;
        list.forEach(cb => this.on(hookName, cb));
    }
    tap(hookName, callback) {
        const hooks = this.hooks;
        const { type, initial } = hooks[hookName];
        if (type === exports.HOOK_TYPE.SINGLE) {
            this.off(hookName);
            this.on(hookName, isFunction(callback) ? callback : callback[callback.length - 1]);
        }
        else {
            initial && this.off(hookName, initial);
            this.tapOneOrMany(hookName, callback);
        }
    }
    call(hookName, ...rest) {
        var _a;
        const hook = this.hooks[hookName];
        if (!hook)
            return;
        const { type } = hook;
        const calls = this.callbacks;
        if (!calls)
            return;
        const list = calls[hookName];
        if (list) {
            const tail = list.tail;
            let node = list.next;
            let args = rest;
            let res;
            while (node !== tail) {
                res = (_a = node.callback) === null || _a === void 0 ? void 0 : _a.apply(node.context || this, args);
                if (type === exports.HOOK_TYPE.WATERFALL) {
                    const params = [res];
                    args = params;
                }
                node = node.next;
            }
            return res;
        }
    }
    isExist(hookName) {
        var _a;
        return Boolean((_a = this.callbacks) === null || _a === void 0 ? void 0 : _a[hookName]);
    }
}
const hooks = new TaroHooks({
    getMiniLifecycle: TaroHook(exports.HOOK_TYPE.SINGLE, defaultConfig => defaultConfig),
    getMiniLifecycleImpl: TaroHook(exports.HOOK_TYPE.SINGLE, function () {
        return this.call('getMiniLifecycle', defaultMiniLifecycle);
    }),
    getLifecycle: TaroHook(exports.HOOK_TYPE.SINGLE, (instance, lifecycle) => instance[lifecycle]),
    modifyRecursiveComponentConfig: TaroHook(exports.HOOK_TYPE.SINGLE, (defaultConfig) => defaultConfig),
    getPathIndex: TaroHook(exports.HOOK_TYPE.SINGLE, indexOfNode => `[${indexOfNode}]`),
    getEventCenter: TaroHook(exports.HOOK_TYPE.SINGLE, Events => new Events()),
    isBubbleEvents: TaroHook(exports.HOOK_TYPE.SINGLE, eventName => {
        /**
         * 支持冒泡的事件, 除 支付宝小程序外，其余的可冒泡事件都和微信保持一致
         * 详见 见 https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
         */
        const BUBBLE_EVENTS = new Set([
            'touchstart',
            'touchmove',
            'touchcancel',
            'touchend',
            'touchforcechange',
            'tap',
            'longpress',
            'longtap',
            'transitionend',
            'animationstart',
            'animationiteration',
            'animationend'
        ]);
        return BUBBLE_EVENTS.has(eventName);
    }),
    getSpecialNodes: TaroHook(exports.HOOK_TYPE.SINGLE, () => ['view', 'text', 'image']),
    onRemoveAttribute: TaroHook(exports.HOOK_TYPE.SINGLE),
    batchedEventUpdates: TaroHook(exports.HOOK_TYPE.SINGLE),
    mergePageInstance: TaroHook(exports.HOOK_TYPE.SINGLE),
    modifyPageObject: TaroHook(exports.HOOK_TYPE.SINGLE),
    createPullDownComponent: TaroHook(exports.HOOK_TYPE.SINGLE),
    getDOMNode: TaroHook(exports.HOOK_TYPE.SINGLE),
    modifyHydrateData: TaroHook(exports.HOOK_TYPE.SINGLE),
    transferHydrateData: TaroHook(exports.HOOK_TYPE.SINGLE),
    modifySetAttrPayload: TaroHook(exports.HOOK_TYPE.SINGLE),
    modifyRmAttrPayload: TaroHook(exports.HOOK_TYPE.SINGLE),
    onAddEvent: TaroHook(exports.HOOK_TYPE.SINGLE),
    proxyToRaw: TaroHook(exports.HOOK_TYPE.SINGLE, function (proxyObj) {
        return proxyObj;
    }),
    modifyMpEvent: TaroHook(exports.HOOK_TYPE.MULTI),
    modifyMpEventImpl: TaroHook(exports.HOOK_TYPE.SINGLE, function (e) {
        try {
            // 有些小程序的事件对象的某些属性只读
            this.call('modifyMpEvent', e);
        }
        catch (error) {
            console.warn('[Taro modifyMpEvent hook Error]: ' + (error === null || error === void 0 ? void 0 : error.message));
        }
    }),
    injectNewStyleProperties: TaroHook(exports.HOOK_TYPE.SINGLE),
    modifyTaroEvent: TaroHook(exports.HOOK_TYPE.MULTI),
    dispatchTaroEvent: TaroHook(exports.HOOK_TYPE.SINGLE, (e, node) => {
        node.dispatchEvent(e);
    }),
    dispatchTaroEventFinish: TaroHook(exports.HOOK_TYPE.MULTI),
    modifyTaroEventReturn: TaroHook(exports.HOOK_TYPE.SINGLE, () => undefined),
    modifyDispatchEvent: TaroHook(exports.HOOK_TYPE.MULTI),
    initNativeApi: TaroHook(exports.HOOK_TYPE.MULTI),
    patchElement: TaroHook(exports.HOOK_TYPE.MULTI),
    modifyAddEventListener: TaroHook(exports.HOOK_TYPE.SINGLE),
    modifyRemoveEventListener: TaroHook(exports.HOOK_TYPE.SINGLE),
    getMemoryLevel: TaroHook(exports.HOOK_TYPE.SINGLE),
});

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
function getPlatformType(platform = 'weapp', configNameOrType = exports.PLATFORM_TYPE.MINI) {
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

// 字符串简写
exports.Shortcuts = void 0;
(function (Shortcuts) {
    Shortcuts["Container"] = "container";
    Shortcuts["Childnodes"] = "cn";
    Shortcuts["Text"] = "v";
    Shortcuts["NodeType"] = "nt";
    Shortcuts["NodeName"] = "nn";
    // Attrtibutes
    Shortcuts["Style"] = "st";
    Shortcuts["Class"] = "cl";
    Shortcuts["Src"] = "src";
})(exports.Shortcuts || (exports.Shortcuts = {}));

exports.EMPTY_ARR = EMPTY_ARR;
exports.EMPTY_OBJ = EMPTY_OBJ;
exports.EventChannel = EventChannel;
exports.Events = Events;
exports.PLATFORM_CONFIG_MAP = PLATFORM_CONFIG_MAP;
exports.TaroHook = TaroHook;
exports.TaroHooks = TaroHooks;
exports.animation = animation;
exports.box = box;
exports.cacheDataGet = cacheDataGet;
exports.cacheDataHas = cacheDataHas;
exports.cacheDataSet = cacheDataSet;
exports.capitalize = capitalize;
exports.controlledComponent = controlledComponent;
exports.ensure = ensure;
exports.focusComponents = focusComponents;
exports.getComponentsAlias = getComponentsAlias;
exports.getPlatformType = getPlatformType;
exports.getUniqueKey = getUniqueKey;
exports.hasOwn = hasOwn;
exports.hooks = hooks;
exports.indent = indent;
exports.internalComponents = internalComponents;
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isBooleanStringLiteral = isBooleanStringLiteral;
exports.isFunction = isFunction;
exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
exports.isUndefined = isUndefined;
exports.isWebPlatform = isWebPlatform;
exports.mergeInternalComponents = mergeInternalComponents;
exports.mergeReconciler = mergeReconciler;
exports.nestElements = nestElements;
exports.nonsupport = nonsupport;
exports.noop = noop;
exports.processApis = processApis;
exports.queryToJson = queryToJson;
exports.setUniqueKeyToRoute = setUniqueKeyToRoute;
exports.singleQuote = singleQuote;
exports.toCamelCase = toCamelCase;
exports.toDashed = toDashed;
exports.toKebabCase = toKebabCase;
exports.touchEvents = touchEvents;
exports.unbox = unbox;
exports.voidElements = voidElements;
exports.warn = warn;
//# sourceMappingURL=index.cjs.js.map
