// @ts-nocheck
declare const touchEvents: {
    bindTouchStart: string;
    bindTouchMove: string;
    bindTouchEnd: string;
    bindTouchCancel: string;
    bindLongTap: string;
};
declare const animation: {
    animation: string;
    bindAnimationStart: string;
    bindAnimationIteration: string;
    bindAnimationEnd: string;
    bindTransitionEnd: string;
};
declare function singleQuote(s: string): string;
declare const internalComponents: Record<string, Record<string, string>>;
declare const controlledComponent: Set<string>;
declare const focusComponents: Set<string>;
declare const voidElements: Set<string>;
declare const nestElements: Map<string, number>;
declare enum PLATFORM_TYPE {
    MINI = "mini",
    WEB = "web",
    RN = "rn",
    HARMONY = "harmony",
    QUICK = "quickapp"
}
declare const PLATFORM_CONFIG_MAP: {
    h5: {
        type: PLATFORM_TYPE;
    };
    harmony: {
        type: PLATFORM_TYPE;
    };
    mini: {
        type: PLATFORM_TYPE;
    };
    rn: {
        type: PLATFORM_TYPE;
    };
    quickapp: {
        type: PLATFORM_TYPE;
    };
};
type EventName = string | symbol;
type EventCallbacks = Record<EventName, Record<"next" | "tail", unknown>>;
declare class Events {
    protected callbacks?: EventCallbacks;
    static eventSplitter: string; // Note: Harmony ACE API 8 开发板不支持使用正则 split 字符串 /\s+/
    constructor(opts?: any);
    on(eventName: EventName, callback: (...args: any[]) => void, context?: any): this;
    once(events: EventName, callback: (...r: any[]) => void, context?: any): this;
    off(events?: EventName, callback?: (...args: any[]) => void, context?: any): this;
    trigger(events: EventName, ...args: any[]): this;
}
interface RouteEvt extends Events {
    addEvents: (events: any) => void;
    emit?: (events: any, data: any) => void;
}
interface PageEvt extends Events {
    exeList: any[];
    emit?: (events: any, data: any) => void;
}
declare const EventChannel: {
    pageChannel: PageEvt;
    routeChannel: RouteEvt;
};
declare function isString(o: unknown): o is string;
declare function isUndefined(o: unknown): o is undefined;
declare function isNull(o: unknown): o is null;
declare function isObject<T>(o: unknown): o is T;
declare function isBoolean(o: unknown): o is boolean;
declare function isFunction(o: unknown): o is (...args: any[]) => any;
declare function isNumber(o: unknown): o is number;
declare function isBooleanStringLiteral(o: unknown): o is string;
declare const isArray: (arg: any) => arg is any[];
declare const isWebPlatform: () => boolean;
type IObject = Record<string, any>;
interface IProcessApisIOptions {
    noPromiseApis?: Set<string>;
    needPromiseApis?: Set<string>;
    handleSyncApis?: (key: string, global: IObject, args: any[]) => any;
    transformMeta?: (key: string, options: IObject) => {
        key: string;
        options: IObject;
    };
    modifyApis?: (apis: Set<string>) => void;
    modifyAsyncResult?: (key: string, res: any) => void;
    isOnlyPromisify?: boolean;
    [propName: string]: any;
}
interface IApiDiff {
    [key: string]: {
        /** API重命名 */
        alias?: string;
        options?: {
            /** API参数键名修改 */
            change?: {
                old: string;
                new: string;
            }[];
            /** API参数值修改 */
            set?: {
                key: string;
                value: ((options: Record<string, any>) => unknown) | unknown;
            }[];
        };
    };
}
declare function processApis(taro: any, global: any, config?: IProcessApisIOptions): void;
// 字符串简写
declare const enum Shortcuts {
    Container = "container",
    Childnodes = "cn",
    Text = "v",
    NodeType = "nt",
    NodeName = "nn",
    // Attrtibutes
    Style = "st",
    Class = "cl",
    Src = "src"
}
declare const EMPTY_OBJ: any;
declare const EMPTY_ARR: never[];
declare const noop: (..._: unknown[]) => void;
/**
 * Boxed value.
 *
 * @typeparam T Value type.
 */
interface Box<T> {
    v: T;
}
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param v Value.
 * @returns Boxed value.
 */
declare const box: <T>(v: T) => {
    v: T;
};
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param b Boxed value.
 * @returns Value.
 */
declare const unbox: <T>(b: Box<T>) => T;
declare function toDashed(s: string): string;
declare function toCamelCase(s: string): string;
declare const toKebabCase: (string: any) => any;
declare function capitalize(s: string): string;
declare const hasOwn: (val: Record<any, any>, key: string | symbol) => any;
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */
declare function ensure(condition: boolean, msg: string): asserts condition;
declare function warn(condition: boolean, msg: string): void;
declare function queryToJson(str: any): {};
declare function getUniqueKey(): string;
declare function cacheDataSet(key: any, val: any): void;
declare function cacheDataGet(key: any, delelteAfterGet?: any): any;
declare function cacheDataHas(key: any): boolean;
declare function mergeInternalComponents(components: any): Record<string, Record<string, string>>;
declare function getComponentsAlias(origin: typeof internalComponents): {};
declare function getPlatformType(platform?: string, configNameOrType?: string): PLATFORM_TYPE;
declare function mergeReconciler(hostConfig: any, hooksForTest?: any): void;
declare function nonsupport(api: any): () => void;
declare function setUniqueKeyToRoute(key: string, obj: any): void;
declare function indent(str: string, size: number): string;
// Note: @tarojs/runtime 不依赖 @tarojs/taro, 所以不能改为从 @tarojs/taro 引入 (可能导致循环依赖)
type TFunc = (...args: any[]) => any;
declare enum HOOK_TYPE {
    SINGLE = 0,
    MULTI = 1,
    WATERFALL = 2
}
interface Hook {
    type: HOOK_TYPE;
    initial?: TFunc | null;
}
interface MiniLifecycle {
    app: [
        string,
        /** onLaunch */ string,
        /** onShow */ string /** onHide */
    ];
    page: [
        string,
        /** onLoad */ string,
        /** onUnload */ string,
        /** onReady */ string,
        /** onShow */ string,
        /** onHide */ string[],
        /** others */ string[] /** side-effects */
    ];
    component: [
        string,
        /** attached */ string
    ];
}
interface MiniElementData {
    [Shortcuts.Childnodes]?: MiniData[];
    [Shortcuts.NodeName]: string;
    [Shortcuts.Class]?: string;
    [Shortcuts.Style]?: string;
    uid?: string;
    sid: string;
    [key: string]: unknown;
}
interface MiniTextData {
    [Shortcuts.Text]: string;
    [Shortcuts.NodeName]: string;
}
type MiniData = MiniElementData | MiniTextData;
interface UpdatePayload {
    path: string;
    value: string | boolean | (() => MiniData | MiniData[]);
}
type Target = Record<string, unknown> & {
    dataset: Record<string, unknown>;
    id: string;
};
interface MpEvent {
    type: string;
    detail: Record<string, unknown>;
    target: Target;
    currentTarget: Target;
}
declare function TaroHook(type: HOOK_TYPE, initial?: TFunc): Hook;
declare class TaroHooks<T extends Record<string, TFunc> = any> extends Events {
    hooks: Record<keyof T, Hook>;
    constructor(hooks: Record<keyof T, Hook>, opts?: any);
    private tapOneOrMany;
    tap<K extends Extract<keyof T, string>>(hookName: K, callback: T[K] | T[K][]): void;
    call<K extends Extract<keyof T, string>>(hookName: K, ...rest: Parameters<T[K]>): ReturnType<T[K]> | undefined;
    isExist(hookName: string): boolean;
}
type ITaroHooks = {
    /** 小程序端 App、Page 构造对象的生命周期方法名称 */
    getMiniLifecycle: (defaultConfig: MiniLifecycle) => MiniLifecycle;
    getMiniLifecycleImpl: () => MiniLifecycle;
    /** 解决 React 生命周期名称的兼容问题 */
    getLifecycle: (instance: any, lifecyle: any) => TFunc | Array<TFunc> | undefined;
    /** 提供Hook，为不同平台提供修改生命周期配置 */
    modifyRecursiveComponentConfig: (defaultConfig: MiniLifecycle, options: any) => any;
    /** 解决百度小程序的模版语法问题 */
    getPathIndex: (indexOfNode: number) => string;
    /** 解决支付宝小程序分包时全局作用域不一致的问题 */
    getEventCenter: (EventsClass: typeof Events) => Events;
    isBubbleEvents: (eventName: string) => boolean;
    getSpecialNodes: () => string[];
    /** 解决 Vue2 布尔值属性值的设置问题 */
    onRemoveAttribute: (element: any, qualifiedName: string) => boolean;
    /** 用于把 React 同一事件回调中的所有 setState 合并到同一个更新处理中 */
    batchedEventUpdates: (cb: TFunc) => void;
    /** 用于处理 React 中的小程序生命周期 hooks */
    mergePageInstance: (prev: any, next: any) => void;
    /** 用于修改传递给小程序 Page 构造器的对象 */
    modifyPageObject: (config: Record<any, any>) => void;
    /** H5 下拉刷新 wrapper */
    createPullDownComponent: (el: any, path: string, framework: any, customWrapper?: any, stampId?: string) => void;
    /** H5 获取原生 DOM 对象 */
    getDOMNode: (instance: any) => any;
    /**
     * @todo: multi
     * 修改 Taro DOM 序列化数据
     **/
    modifyHydrateData: (data: Record<string, any>, node: any) => void;
    /**
     * 自定义处理 Taro DOM 序列化数据，如使其脱离 data 树
     */
    transferHydrateData: (data: Record<string, any>, element: any, componentsAlias: Record<string, any>) => void;
    /**
     * @todo: multi
     * 修改 Taro DOM 序列化数据
     **/
    modifySetAttrPayload: (element: any, key: string, payload: UpdatePayload, componentsAlias: Record<string, any>) => void;
    /**
     * @todo: multi
     * 修改 Taro DOM 序列化数据
     **/
    modifyRmAttrPayload: (element: any, key: string, payload: UpdatePayload, componentsAlias: Record<string, any>) => void;
    /**
     * @todo: multi
     * 调用 addEventListener 时触发
     **/
    onAddEvent: (type: string, handler: any, options: any, node: any) => void;
    /** 用于修改小程序原生事件对象 */
    modifyMpEvent: (event: MpEvent) => void;
    modifyMpEventImpl: (event: MpEvent) => void;
    /** 用于修改 Taro DOM 事件对象 */
    modifyTaroEvent: (event: any, element: any) => void;
    dispatchTaroEvent: (event: any, element: any) => void;
    dispatchTaroEventFinish: (event: any, element: any) => void;
    modifyTaroEventReturn: (node: any, event: any, returnVal: any) => any;
    modifyDispatchEvent: (event: any, element: any) => void;
    injectNewStyleProperties: (styleProperties: string[]) => void;
    initNativeApi: (taro: Record<string, any>) => void;
    patchElement: (node: any) => void;
    /** 解 Proxy */
    proxyToRaw: (proxyObj: any) => Record<any, any>;
    /** 元素增加事件监听钩子 */
    modifyAddEventListener: (element: any, sideEffect: boolean, getComponentsAlias: () => Record<string, any>) => void;
    /** 元素删除事件监听钩子 */
    modifyRemoveEventListener: (element: any, sideEffect: boolean, getComponentsAlias: () => Record<string, any>) => void;
    /** 鸿蒙用于监听 memory 等级的钩子 */
    getMemoryLevel: (level: {
        level: number;
    }) => void;
};
declare const hooks: TaroHooks<ITaroHooks>;
export { touchEvents, animation, singleQuote, internalComponents, controlledComponent, focusComponents, voidElements, nestElements, PLATFORM_TYPE, PLATFORM_CONFIG_MAP, EventChannel, Events, isString, isUndefined, isNull, isObject, isBoolean, isFunction, isNumber, isBooleanStringLiteral, isArray, isWebPlatform, IApiDiff, processApis, HOOK_TYPE, TaroHook, TaroHooks, hooks, Shortcuts, EMPTY_OBJ, EMPTY_ARR, noop, Box, box, unbox, toDashed, toCamelCase, toKebabCase, capitalize, hasOwn, ensure, warn, queryToJson, getUniqueKey, cacheDataSet, cacheDataGet, cacheDataHas, mergeInternalComponents, getComponentsAlias, getPlatformType, mergeReconciler, nonsupport, setUniqueKeyToRoute, indent };
