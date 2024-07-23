// @ts-nocheck
import { Events } from './event-emitter';
import type { Shortcuts } from './template';
type TFunc = (...args: any[]) => any;
export declare enum HOOK_TYPE {
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
        string, /** onLaunch */
        string, /** onShow */
        string /** onHide */
    ];
    page: [
        string, /** onLoad */
        string, /** onUnload */
        string, /** onReady */
        string, /** onShow */
        string, /** onHide */
        string[], /** others */
        string[] /** side-effects */
    ];
    component: [
        string, /** attached */
        string
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
export declare function TaroHook(type: HOOK_TYPE, initial?: TFunc): Hook;
export declare class TaroHooks<T extends Record<string, TFunc> = any> extends Events {
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
export declare const hooks: TaroHooks<ITaroHooks>;
export {};
