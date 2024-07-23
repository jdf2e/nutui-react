import { Events } from './event-emitter.js';
import { isFunction } from './is.js';

var HOOK_TYPE;
(function (HOOK_TYPE) {
    HOOK_TYPE[HOOK_TYPE["SINGLE"] = 0] = "SINGLE";
    HOOK_TYPE[HOOK_TYPE["MULTI"] = 1] = "MULTI";
    HOOK_TYPE[HOOK_TYPE["WATERFALL"] = 2] = "WATERFALL";
})(HOOK_TYPE || (HOOK_TYPE = {}));
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
        if (type === HOOK_TYPE.SINGLE) {
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
                if (type === HOOK_TYPE.WATERFALL) {
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
    getMiniLifecycle: TaroHook(HOOK_TYPE.SINGLE, defaultConfig => defaultConfig),
    getMiniLifecycleImpl: TaroHook(HOOK_TYPE.SINGLE, function () {
        return this.call('getMiniLifecycle', defaultMiniLifecycle);
    }),
    getLifecycle: TaroHook(HOOK_TYPE.SINGLE, (instance, lifecycle) => instance[lifecycle]),
    modifyRecursiveComponentConfig: TaroHook(HOOK_TYPE.SINGLE, (defaultConfig) => defaultConfig),
    getPathIndex: TaroHook(HOOK_TYPE.SINGLE, indexOfNode => `[${indexOfNode}]`),
    getEventCenter: TaroHook(HOOK_TYPE.SINGLE, Events => new Events()),
    isBubbleEvents: TaroHook(HOOK_TYPE.SINGLE, eventName => {
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
    getSpecialNodes: TaroHook(HOOK_TYPE.SINGLE, () => ['view', 'text', 'image']),
    onRemoveAttribute: TaroHook(HOOK_TYPE.SINGLE),
    batchedEventUpdates: TaroHook(HOOK_TYPE.SINGLE),
    mergePageInstance: TaroHook(HOOK_TYPE.SINGLE),
    modifyPageObject: TaroHook(HOOK_TYPE.SINGLE),
    createPullDownComponent: TaroHook(HOOK_TYPE.SINGLE),
    getDOMNode: TaroHook(HOOK_TYPE.SINGLE),
    modifyHydrateData: TaroHook(HOOK_TYPE.SINGLE),
    transferHydrateData: TaroHook(HOOK_TYPE.SINGLE),
    modifySetAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
    modifyRmAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
    onAddEvent: TaroHook(HOOK_TYPE.SINGLE),
    proxyToRaw: TaroHook(HOOK_TYPE.SINGLE, function (proxyObj) {
        return proxyObj;
    }),
    modifyMpEvent: TaroHook(HOOK_TYPE.MULTI),
    modifyMpEventImpl: TaroHook(HOOK_TYPE.SINGLE, function (e) {
        try {
            // 有些小程序的事件对象的某些属性只读
            this.call('modifyMpEvent', e);
        }
        catch (error) {
            console.warn('[Taro modifyMpEvent hook Error]: ' + (error === null || error === void 0 ? void 0 : error.message));
        }
    }),
    injectNewStyleProperties: TaroHook(HOOK_TYPE.SINGLE),
    modifyTaroEvent: TaroHook(HOOK_TYPE.MULTI),
    dispatchTaroEvent: TaroHook(HOOK_TYPE.SINGLE, (e, node) => {
        node.dispatchEvent(e);
    }),
    dispatchTaroEventFinish: TaroHook(HOOK_TYPE.MULTI),
    modifyTaroEventReturn: TaroHook(HOOK_TYPE.SINGLE, () => undefined),
    modifyDispatchEvent: TaroHook(HOOK_TYPE.MULTI),
    initNativeApi: TaroHook(HOOK_TYPE.MULTI),
    patchElement: TaroHook(HOOK_TYPE.MULTI),
    modifyAddEventListener: TaroHook(HOOK_TYPE.SINGLE),
    modifyRemoveEventListener: TaroHook(HOOK_TYPE.SINGLE),
    getMemoryLevel: TaroHook(HOOK_TYPE.SINGLE),
});

export { HOOK_TYPE, TaroHook, TaroHooks, hooks };
//# sourceMappingURL=runtime-hooks.js.map
