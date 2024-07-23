// @ts-nocheck
import { Shortcuts, Events } from "../../shared";
import { Component as Vue3Component } from "../../../@vue/runtime-core";
import { Component, ComponentClass } from "../../../react";
declare class ClassList {
    private el;
    private tokenList;
    constructor(className: string, el: TaroElement);
    get value(): string;
    get length(): number;
    add(): void;
    remove(): void;
    contains(token: string): boolean;
    toggle(token: string, force: boolean): boolean;
    replace(token: string, replacement_token: string): void;
    toString(): string;
    private checkTokenIsValid;
    private _update;
}
interface Attributes {
    name: string;
    value: string;
}
interface EventOptions {
    bubbles: boolean;
    cancelable: boolean;
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
interface EventListenerOptions {
    capture?: boolean;
}
interface AddEventListenerOptions extends EventListenerOptions {
    once?: boolean;
    passive?: boolean;
}
interface EventHandler<T = any, R = void> {
    (...args: T[]): R;
    _stop?: boolean;
}
// Note: @tarojs/runtime 不依赖 @tarojs/taro, 所以不能改为从 @tarojs/taro 引入 (可能导致循环依赖)
type TFunc = (...args: any[]) => any;
type PageConfig = Record<string, any>;
interface MpInstance {
    config: PageConfig;
    setData: (data: unknown, cb: () => void) => void;
    route?: string;
    __route__: string;
    $taroParams?: Record<string, unknown>;
    $taroPath: string;
    __data__: any;
    data: any;
    exitState?: any;
    selectComponent: (selector: string) => any;
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
type HydratedData = () => MiniData | MiniData[];
type UpdatePayloadValue = string | boolean | HydratedData;
type DataTree = Record<string, UpdatePayloadValue | ReturnType<HydratedData>>;
interface UpdatePayload {
    path: string;
    value: UpdatePayloadValue;
}
declare const enum NodeType {
    ELEMENT_NODE = 1,
    ATTRIBUTE_NODE = 2,
    TEXT_NODE = 3,
    CDATA_SECTION_NODE = 4,
    ENTITY_REFERENCE_NODE = 5,
    COMMENT_NODE = 6,
    PROCESSING_INSTRUCTION_NODE = 7,
    DOCUMENT_NODE = 9
}
declare class TaroText extends TaroNode {
    _value: string;
    nodeType: NodeType;
    nodeName: string;
    constructor(value: any);
    set textContent(text: string);
    get textContent(): string;
    set nodeValue(text: string);
    get nodeValue(): string;
    set data(text: string);
    get data(): string;
}
interface Node {
    type: string;
}
interface Comment extends Node {
    type: "comment";
    content: string;
}
interface Text extends Node {
    type: "text";
    content: string;
}
interface Element extends Node {
    type: "element";
    tagName: string;
    children: ChildNode[];
    attributes: string[];
}
type ChildNode = Comment | Text | Element;
interface Options {
    prerender: boolean;
    debug: boolean;
    html?: {
        skipElements: Set<string>;
        voidElements: Set<string>;
        closingElements: Set<string>;
        transformText?: (taroText: TaroText, text: Text) => TaroText;
        transformElement?: (taroElement: TaroElement, element: Element) => TaroElement;
        renderHTMLTag: boolean;
    };
    miniGlobal?: any;
}
declare class TaroEventTarget {
    __handlers: Record<string, EventHandler[]>;
    addEventListener(type: string, handler: EventHandler, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: string, handler: EventHandler): void;
    isAnyEventBinded(): boolean;
}
declare class TaroRootElement extends TaroElement {
    private updatePayloads;
    private updateCallbacks;
    pendingUpdate: boolean;
    ctx: null | MpInstance;
    constructor();
    get _path(): string;
    get _root(): TaroRootElement;
    enqueueUpdate(payload: UpdatePayload): void;
    performUpdate(initRender?: boolean, prerender?: TFunc): void;
    enqueueUpdateCallback(cb: TFunc, ctx?: Record<string, any>): void;
    flushUpdateCallback(): void;
}
interface RemoveChildOptions {
    cleanRef?: boolean;
    doUpdate?: boolean;
}
declare class TaroNode extends TaroEventTarget {
    uid: string;
    sid: string;
    nodeType: NodeType;
    nodeName: string;
    parentNode: TaroNode | null;
    childNodes: TaroNode[];
    constructor();
    private hydrate;
    private updateChildNodes;
    private updateSingleChild;
    get _root(): TaroRootElement | null;
    protected findIndex(refChild: TaroNode): number;
    get _path(): string;
    get nextSibling(): TaroNode | null;
    get previousSibling(): TaroNode | null;
    get parentElement(): TaroElement | null;
    get firstChild(): TaroNode | null;
    get lastChild(): TaroNode | null;
    /**
     * @textContent 目前只能置空子元素
     * @TODO 等待完整 innerHTML 实现
     */
    // eslint-disable-next-line accessor-pairs
    set textContent(text: string);
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
     * @scenario
     * [A,B,C]
     *   1. insert D before C, D has no parent
     *   2. insert D before C, D has the same parent of C
     *   3. insert D before C, D has the different parent of C
     */
    insertBefore<T extends TaroNode>(newChild: T, refChild?: TaroNode | null, isReplace?: boolean): T;
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
     * @scenario
     * [A,B,C]
     *   1. append C, C has no parent
     *   2. append C, C has the same parent of B
     *   3. append C, C has the different parent of B
     */
    appendChild(newChild: TaroNode): TaroNode;
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/replaceChild
     * @scenario
     * [A,B,C]
     *   1. replace B with C, C has no parent
     *   2. replace B with C, C has no parent, C has the same parent of B
     *   3. replace B with C, C has no parent, C has the different parent of B
     */
    replaceChild(newChild: TaroNode, oldChild: TaroNode): TaroNode | undefined;
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild
     * @scenario
     * [A,B,C]
     *   1. remove A or B
     *   2. remove C
     */
    removeChild<T extends TaroNode>(child: T, options?: RemoveChildOptions): T;
    remove(options?: RemoveChildOptions): void;
    hasChildNodes(): boolean;
    enqueueUpdate(payload: UpdatePayload): void;
    get ownerDocument(): TaroDocument;
    static extend(methodName: string, options: TFunc | Record<string, any>): void;
}
declare class Style {
    _pending: boolean;
    _usedStyleProp: Set<string>;
    _value: Partial<CSSStyleDeclaration>;
    _element: TaroElement;
    constructor(element: TaroElement);
    private setCssVariables;
    get cssText(): string;
    set cssText(str: string);
    setProperty(propertyName: string, value?: string | null): void;
    removeProperty(propertyName: string): string;
    getPropertyValue(propertyName: string): any;
}
// Taro 事件对象。以 Web 标准的事件对象为基础，加入小程序事件对象中携带的部分信息，并模拟实现事件冒泡。
declare class TaroEvent {
    private cacheTarget;
    private cacheCurrentTarget;
    type: string;
    bubbles: boolean;
    cancelable: boolean;
    _stop: boolean;
    _end: boolean;
    defaultPrevented: boolean;
    // Mouse Event botton property, it's used in 3rd lib, like react-router. default 0 in general
    button: number;
    // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
    // here use hi-res timestamp
    timeStamp: number;
    mpEvent: MpEvent | undefined;
    constructor(type: string, opts: EventOptions, event?: MpEvent);
    stopPropagation(): void;
    stopImmediatePropagation(): void;
    preventDefault(): void;
    get target(): any;
    get currentTarget(): any;
}
declare function createEvent(event: MpEvent | string, node?: TaroElement): TaroEvent;
// 小程序的事件代理回调函数
declare function eventHandler(event: MpEvent): any;
declare class TaroElement extends TaroNode {
    ctx?: any;
    tagName: string;
    props: Record<string, any>;
    style: Style;
    dataset: Record<string, unknown>;
    innerHTML: string;
    constructor();
    private _stopPropagation;
    get id(): string;
    set id(val: string);
    get className(): string;
    set className(val: string);
    get cssText(): string;
    get classList(): ClassList;
    get children(): TaroElement[];
    get attributes(): Attributes[];
    get textContent(): string;
    set textContent(text: string);
    hasAttribute(qualifiedName: string): boolean;
    hasAttributes(): boolean;
    get focus(): () => void;
    // 兼容 Vue3，详情请见：https://github.com/NervJS/taro/issues/10579
    set focus(value: () => void);
    blur(): void;
    setAttribute(qualifiedName: string, value: any): void;
    removeAttribute(qualifiedName: string): void;
    getAttribute(qualifiedName: string): string;
    getElementsByTagName(tagName: string): TaroElement[];
    getElementsByClassName(className: string): TaroElement[];
    dispatchEvent(event: TaroEvent): boolean;
    addEventListener(type: any, handler: any, options: any): void;
    removeEventListener(type: any, handler: any, sideEffect?: boolean): void;
    static extend(methodName: string, options: TFunc | Record<string, any>): void;
}
declare class FormElement extends TaroElement {
    get type(): string;
    set type(val: string);
    get value(): string | boolean | number | any[];
    set value(val: string | boolean | number | any[]);
    dispatchEvent(event: TaroEvent): boolean;
}
declare class TaroDocument extends TaroElement {
    documentElement: TaroElement;
    head: TaroElement;
    body: TaroElement;
    createEvent: typeof createEvent;
    cookie?: string;
    constructor();
    createElement(type: string): TaroElement | TaroRootElement | FormElement;
    // an ugly fake createElementNS to deal with @vue/runtime-dom's
    // support mounting app to svg container since vue@3.0.8
    createElementNS(_svgNS: string, type: string): TaroElement | TaroRootElement | FormElement;
    createTextNode(text: string): TaroText;
    getElementById<T extends TaroElement>(id: string | undefined | null): T | null;
    querySelector<T extends TaroElement>(query: string): T | null;
    querySelectorAll(): never[];
    // @TODO: @PERF: 在 hydrate 移除掉空的 node
    createComment(): TaroText;
    get defaultView(): any;
}
interface Env {
    window: any;
    document: TaroDocument;
}
declare const env: Env;
declare const document: TaroDocument;
type TGetComputedStyle = typeof window.getComputedStyle | ((el: TaroElement) => Style);
declare const getComputedStyle: TGetComputedStyle;
declare const eventCenter: Events;
type EventsType = typeof Events;
/**
 * 一个小型缓存池，用于在切换页面时，存储一些上下文信息
 */
declare class RuntimeCache<T> {
    name: string;
    cache: Map<string, T>;
    constructor(name: string);
    has(identifier: string): boolean;
    set(identifier: string, ctx: T): void;
    get(identifier: string): T | undefined;
    delete(identifier: string): void;
}
type Options$0 = {
    window: any;
};
type LocationContext = {
    lastHref: string;
};
declare class TaroLocation extends Events {
    #private;
    constructor(options: Options$0);
    /* public property */
    get protocol(): string;
    set protocol(val: string);
    get host(): string;
    set host(val: string);
    get hostname(): string;
    set hostname(val: string);
    get port(): string;
    set port(val: string);
    get pathname(): string;
    set pathname(val: string);
    get search(): string;
    set search(val: string);
    get hash(): string;
    // 小程序的navigateTo存在截断hash字符串的问题
    set hash(val: string);
    get href(): string;
    set href(val: string);
    get origin(): string;
    set origin(val: string);
    /* public method */
    assign(): void;
    reload(): void;
    replace(url: string): void;
    toString(): string;
    // For debug
    get cache(): RuntimeCache<LocationContext>;
}
declare const Location: typeof TaroLocation;
interface HistoryState {
    state: Record<string, any> | null;
    title: string;
    url: string;
}
type Options$1 = {
    window: any;
};
type HistoryContext = {
    location: TaroLocation;
    stack: HistoryState[];
    cur: number;
};
declare class TaroHistory extends Events {
    #private;
    constructor(location: TaroLocation, options: Options$1);
    /* public property */
    get length(): number;
    get state(): Record<string, any> | null;
    /* public method */
    go(delta: number): void;
    back(): void;
    forward(): void;
    pushState(state: any, title: string, url: string): void;
    replaceState(state: any, title: string, url: string): void;
    // For debug
    get cache(): RuntimeCache<HistoryContext>;
}
declare const History: typeof TaroHistory;
declare const nav: typeof window.navigator;
// https://github.com/myrne/performance-now
declare let now: () => number;
// https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
declare const _raf: typeof requestAnimationFrame | ((callback: any) => NodeJS.Timeout);
declare const _caf: typeof cancelAnimationFrame;
declare class TaroURL {
    #private;
    static createObjectURL(): void;
    static revokeObjectURL(): void;
    constructor(url: string, base?: string);
    /* public property */
    get protocol(): string;
    set protocol(val: string);
    get host(): string;
    set host(val: string);
    get hostname(): string;
    set hostname(val: string);
    get port(): string;
    set port(val: string);
    get pathname(): string;
    set pathname(val: string);
    get search(): string;
    set search(val: string);
    get hash(): string;
    set hash(val: string);
    get href(): string;
    set href(val: string);
    get origin(): string;
    set origin(val: string);
    get searchParams(): URLSearchParams;
    // public method
    toString(): string;
    toJSON(): string;
    // convenient for deconstructor
    _toRaw(): {
        protocol: string;
        port: string;
        host: string;
        hostname: string;
        pathname: string;
        hash: string;
        search: string;
        origin: string;
        href: string;
    };
}
declare const URL: typeof TaroURL;
declare function parseUrl(url?: string): {
    href: string;
    origin: string;
    protocol: string;
    hostname: string;
    host: string;
    port: string;
    pathname: string;
    search: string;
    hash: string;
};
declare const URLSearchParams: any;
declare class TaroWindow extends Events {
    navigator: Navigator;
    requestAnimationFrame: typeof requestAnimationFrame | ((callback: any) => NodeJS.Timeout);
    cancelAnimationFrame: typeof cancelAnimationFrame;
    getComputedStyle: TGetComputedStyle;
    Date: DateConstructor;
    location: TaroLocation;
    history: TaroHistory;
    XMLHttpRequest?: Partial<XMLHttpRequest>;
    constructor();
    initEvent(): void;
    get document(): TaroDocument;
    addEventListener(event: string, callback: (arg: any) => void): void;
    removeEventListener(event: string, callback: (arg: any) => void): void;
    setTimeout(...args: Parameters<typeof setTimeout>): NodeJS.Timeout;
    clearTimeout(...args: Parameters<typeof clearTimeout>): void;
}
declare const window: TaroWindow;
declare const location: TaroLocation;
declare const history: TaroHistory;
// for Vue3
declare class SVGElement extends TaroElement {
}
/**
 * A MutationRecord represents an individual DOM mutation.
 * It is the object that is passed to MutationObserver's callback.
 * @see https://dom.spec.whatwg.org/#interface-mutationrecord
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord
 */
interface MutationRecord {
    readonly target: TaroNode;
    readonly addedNodes?: TaroNode[];
    readonly removedNodes?: TaroNode[];
    readonly previousSibling?: TaroNode | null;
    readonly nextSibling?: TaroNode | null;
    readonly attributeName?: string | null;
    readonly attributeNamespace?: string | null;
    oldValue?: string | null;
    // extended
    readonly type: MutationRecordType;
    readonly value?: string | null;
}
declare const enum MutationRecordType {
    ATTRIBUTES = "attributes",
    CHARACTER_DATA = "characterData",
    CHILD_LIST = "childList"
}
type MutationCallback = (mutations: MutationRecord[]) => any;
/**
 * @see https://dom.spec.whatwg.org/#dictdef-mutationobserverinit
 */
interface MutationObserverInit {
    attributeFilter?: string[];
    attributeOldValue?: boolean;
    attributes?: boolean;
    characterData?: boolean;
    characterDataOldValue?: boolean;
    childList?: boolean;
    subtree?: boolean;
}
/**
 * The MutationObserver provides the ability
 * to watch for changes being made to the DOM tree.
 * It will invoke a specified callback function
 * when DOM changes occur.
 * @see https://dom.spec.whatwg.org/#mutationobserver
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
declare class MutationObserverImpl {
    callback: MutationCallback;
    target: TaroNode | null;
    options: MutationObserverInit;
    records: MutationRecord[];
    constructor(callback: MutationCallback);
    /**
     * Configures the MutationObserver
     * to begin receiving notifications
     * through its callback function
     * when DOM changes matching the given options occur.
     *
     * Options matching is to be implemented.
     */
    observe(target: TaroNode, options?: MutationObserverInit): void;
    /**
     * Stop the MutationObserver instance
     * from receiving further notifications
     * until and unless observe() is called again.
     */
    disconnect(): void;
    /**
     * Removes all pending notifications
     * from the MutationObserver's notification queue
     * and returns them in a new Array of MutationRecord objects.
     */
    takeRecords(): MutationRecord[];
}
declare class MutationObserver {
    core: Pick<MutationObserverImpl, "observe" | "disconnect" | "takeRecords">;
    constructor(callback: MutationCallback);
    observe(...args: [
        TaroNode,
        MutationObserverInit?
    ]): void;
    disconnect(): void;
    takeRecords(): MutationRecord[];
    static record(record: MutationRecord): void;
}
declare const PROPERTY_THRESHOLD = 2046;
declare const TARO_RUNTIME = "Taro runtime";
declare const HOOKS_APP_ID = "taro-app";
declare const SET_DATA = "\u5C0F\u7A0B\u5E8F setData";
declare const PAGE_INIT = "\u9875\u9762\u521D\u59CB\u5316";
declare const ROOT_STR = "root";
declare const HTML = "html";
declare const HEAD = "head";
declare const BODY = "body";
declare const APP = "app";
declare const CONTAINER = "container";
declare const DOCUMENT_ELEMENT_NAME = "#document";
declare const DOCUMENT_FRAGMENT = "document-fragment";
declare const ID = "id";
declare const UID = "uid";
declare const CLASS = "class";
declare const STYLE = "style";
declare const FOCUS = "focus";
declare const VIEW = "view";
declare const STATIC_VIEW = "static-view";
declare const PURE_VIEW = "pure-view";
declare const PROPS = "props";
declare const DATASET = "dataset";
declare const OBJECT = "object";
declare const VALUE = "value";
declare const INPUT = "input";
declare const CHANGE = "change";
declare const CUSTOM_WRAPPER = "custom-wrapper";
declare const TARGET = "target";
declare const CURRENT_TARGET = "currentTarget";
declare const TYPE = "type";
declare const CONFIRM = "confirm";
declare const TIME_STAMP = "timeStamp";
declare const KEY_CODE = "keyCode";
declare const TOUCHMOVE = "touchmove";
declare const DATE = "Date";
declare const SET_TIMEOUT = "setTimeout";
declare const COMPILE_MODE = "compileMode";
declare const CATCHMOVE = "catchMove";
declare const CATCH_VIEW = "catch-view";
declare const COMMENT = "comment";
declare const ON_LOAD = "onLoad";
declare const ON_READY = "onReady";
declare const ON_SHOW = "onShow";
declare const ON_HIDE = "onHide";
declare const OPTIONS = "options";
declare const EXTERNAL_CLASSES = "externalClasses";
declare const EVENT_CALLBACK_RESULT = "e_result";
declare const BEHAVIORS = "behaviors";
declare const A = "a";
/**
 * 页面上下文切换时的行为
 */
declare enum CONTEXT_ACTIONS {
    INIT = "0",
    RESTORE = "1",
    RECOVER = "2",
    DESTORY = "3"
}
interface Instance<T = Record<string, any>> extends Component<T>, Show, PageInstance {
    tid?: string;
    node?: TaroElement;
    $forceUpdate?(): void;
    $nextTick?(cb: () => void): void;
    $options: Instance;
}
interface PageProps {
    tid?: string;
}
interface ReactPageComponent<T = PageProps> extends ComponentClass<T>, PageInstance {
}
interface ReactPageInstance<T = PageProps> extends Component<T>, PageInstance {
    componentDidShow?(): void;
    componentDidHide?(): void;
}
interface ReactAppInstance<T = AppInstance> extends Component<T>, AppInstance {
}
interface PageLifeCycle extends Show {
    eh?(event: MpEvent): void;
    onAddToFavorites?(): void;
    onLoad?(options: Record<string, unknown>, cb?: TFunc): void;
    onOptionMenuClick?(): void;
    onPageScroll?(obj: {
        scrollTop: number;
    }): void;
    onPullDownRefresh?(): void;
    onPullIntercept?(): void;
    onPopMenuClick?(): void;
    onReachBottom?(): void;
    onReady?(): void;
    onResize?(options: unknown): void;
    onSaveExitState?(): void;
    onShareAppMessage?(obj: {
        from: string;
        target?: TaroElement;
        webViewUrl: string;
    }): void;
    onShareTimeline?(): void;
    onTabItemTap?(obj: {
        index: string;
        pagePath: string;
        text: string;
    }): void;
    onTitleClick?(): void;
    onUnload?(): void;
}
interface PageInstance extends PageLifeCycle {
    /** 页面的初始数据 */
    data?: Record<string, unknown>;
    /** 页面路径 */
    path?: string;
    /** 页面的组件选项 */
    options?: Record<string, unknown>;
    /** 页面渲染引擎类型 */
    renderer?: "webview" | "skyline";
    /** 获得一个 EventChannel 对象，用于页面间通讯 */
    getOpenerEventChannel?(): Record<string, any>;
}
interface Show {
    componentDidShow?(): void;
    componentDidHide?(): void;
    onShow?(): void;
    onHide?(): void;
}
interface AppInstance extends Show {
    componentDidShow?(options?: Record<string, unknown>): void;
    mount?(component: React.ComponentClass | Vue3Component, id: string, cb: (...args: any[]) => void): void;
    mount?(component: React.ComponentClass | Vue3Component, id: string, getCtx: (...args: any[]) => void, cb: (...args: any[]) => void): void;
    onError?(error: string): void;
    onLaunch?(options?: Record<string, unknown>): void;
    onPageNotFound?(res: any): void;
    onUnhandledRejection?(error: any): void;
    onShow?(options?: Record<string, unknown>): void;
    onHide?(options?: Record<string, unknown>): void;
    unmount?(id: string, cb?: () => void): void;
    taroGlobalData?: Record<any, any>;
    config?: Record<any, any>;
}
interface Router {
    params: Record<string, unknown>;
    path: string;
    $taroPath: string;
    onReady: string;
    onHide: string;
    onShow: string;
    exitState?: any;
}
interface Current {
    app: AppInstance | null;
    router: Router | null;
    page: PageInstance | null;
    preloadData?: any;
}
declare const Current: Current;
declare const getCurrentInstance: () => Current;
interface IEventSource extends Map<string | undefined | null, TaroNode> {
    removeNode(child: TaroNode): void;
    removeNodeTree(child: TaroNode): void;
}
declare const eventSource: IEventSource;
declare function injectPageInstance(inst: Instance<PageProps>, id: string): void;
declare function getPageInstance(id: string): Instance | undefined;
declare function removePageInstance(id: string): void;
declare function safeExecute(path: string, lifecycle: string, ...args: unknown[]): any;
declare function stringify(obj?: Record<string, unknown>): string;
declare function getPath(id: string, options?: Record<string, unknown>): string;
declare function getOnReadyEventKey(path: string): string;
declare function getOnShowEventKey(path: string): string;
declare function getOnHideEventKey(path: string): string;
declare function createPageConfig(component: any, pageName?: string, data?: Record<string, unknown>, pageConfig?: PageConfig): PageInstance;
declare function createComponentConfig(component: React.ComponentClass, componentName?: string, data?: Record<string, unknown>): any;
declare function createRecursiveComponentConfig(componentName?: string): any;
/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */
declare function hydrate(node: TaroElement | TaroText): MiniData;
declare const nextTick: (cb: TFunc, ctx?: Record<string, any>) => void;
declare const options: Options;
declare class Performance {
    #private;
    private recorder;
    start(id: string): void;
    stop(id: string, now?: number): void;
    delayStop(id: string, delay?: number): ((...args: any[]) => void) | undefined;
}
declare const perf: Performance;
declare const incrementId: () => () => string;
declare function isElement(node: TaroNode): node is TaroElement;
declare function isText(node: TaroNode): node is TaroText;
declare function isComment(node: TaroNode): boolean;
declare function isHasExtractProp(el: TaroElement): boolean;
/**
 * 往上寻找组件树直到 root，寻找是否有祖先组件绑定了同类型的事件
 * @param node 当前组件
 * @param type 事件类型
 */
declare function isParentBinded(node: TaroElement | null, type: string): boolean;
declare function shortcutAttr(key: string): string;
declare const customWrapperCache: Map<string, Record<string, any>>;
interface Ctor {
    new (...args: any[]): any;
}
declare function extend(ctor: Ctor, methodName: string, options: TFunc | Record<string, any>): void;
declare function getComponentsAlias(): any;
declare function convertNumber2PX(value: number): string;
declare function throttle(fn: any, threshold?: number, scope?: any): (...args: any[]) => void;
declare function debounce(fn: any, ms?: number, scope?: any): (...args: any[]) => void;
// export const removeLeadingSlash = (str = '') => str.replace(/^\.?\//, '')
// export const removeTrailingSearch = (str = '') => str.replace(/\?[\s\S]*$/, '')
declare const addLeadingSlash: (url?: string) => string;
declare const hasBasename: (path?: string, prefix?: string) => boolean;
declare const stripBasename: (path?: string, prefix?: string) => string;
declare const stripTrailing: (str?: string) => string;
declare const stripSuffix: (path?: string, suffix?: string) => string;
declare const getHomePage: (path?: string, basename?: string, customRoutes?: Record<string, string | string[]>, entryPagePath?: string) => string;
declare const getCurrentPage: (routerMode?: string, basename?: string) => string;
declare function handlePolyfill(): void;
export { hooks } from '../../shared';
export { document, getComputedStyle, History, Location, nav as navigator, _caf as cancelAnimationFrame, now, _raf as requestAnimationFrame, parseUrl, URL, URLSearchParams, history, location, window, TaroElement, createEvent, eventHandler, TaroEvent, FormElement, TaroNode, TaroRootElement, Style, SVGElement, TaroText, MutationObserver, env, PROPERTY_THRESHOLD, TARO_RUNTIME, HOOKS_APP_ID, SET_DATA, PAGE_INIT, ROOT_STR, HTML, HEAD, BODY, APP, CONTAINER, DOCUMENT_ELEMENT_NAME, DOCUMENT_FRAGMENT, ID, UID, CLASS, STYLE, FOCUS, VIEW, STATIC_VIEW, PURE_VIEW, PROPS, DATASET, OBJECT, VALUE, INPUT, CHANGE, CUSTOM_WRAPPER, TARGET, CURRENT_TARGET, TYPE, CONFIRM, TIME_STAMP, KEY_CODE, TOUCHMOVE, DATE, SET_TIMEOUT, COMPILE_MODE, CATCHMOVE, CATCH_VIEW, COMMENT, ON_LOAD, ON_READY, ON_SHOW, ON_HIDE, OPTIONS, EXTERNAL_CLASSES, EVENT_CALLBACK_RESULT, BEHAVIORS, A, CONTEXT_ACTIONS, Current, getCurrentInstance, eventSource, createComponentConfig, createPageConfig, createRecursiveComponentConfig, getOnHideEventKey, getOnReadyEventKey, getOnShowEventKey, getPageInstance, getPath, injectPageInstance, removePageInstance, safeExecute, stringify, EventsType, eventCenter, Events, hydrate, nextTick, options, perf, incrementId, isElement, isText, isComment, isHasExtractProp, isParentBinded, shortcutAttr, customWrapperCache, extend, getComponentsAlias, convertNumber2PX, throttle, debounce, addLeadingSlash, hasBasename, stripBasename, stripTrailing, stripSuffix, getHomePage, getCurrentPage, Instance, PageProps, ReactPageComponent, ReactPageInstance, ReactAppInstance, PageLifeCycle, PageInstance, AppInstance, Attributes, EventOptions, MpEvent, EventListenerOptions, AddEventListenerOptions, EventHandler, MpInstance, MiniElementData, MiniTextData, MiniData, HydratedData, UpdatePayloadValue, DataTree, UpdatePayload, Options$1 as Options, TFunc, PageConfig, handlePolyfill };
