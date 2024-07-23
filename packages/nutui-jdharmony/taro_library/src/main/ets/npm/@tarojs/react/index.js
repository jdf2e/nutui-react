import { isObject, isString, isFunction, capitalize, toCamelCase, internalComponents, isNumber, noop, isUndefined, isBoolean, hooks, ensure } from '../shared';
import { FormElement, convertNumber2PX, document } from '../runtime';
import Reconciler from '../../react-reconciler';
import { DefaultEventPriority as DefaultEventPriority$1 } from '../../react-reconciler/constants';

const supportedInputTypes = {
    color: true,
    date: true,
    datetime: true,
    'datetime-local': true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
};
const SyncLane = 1;
const InputContinuousLane = 4;
const DefaultLane = 16;
const DiscreteEventPriority = SyncLane;
const ContinuousEventPriority = InputContinuousLane;
const DefaultEventPriority = DefaultLane;
function getEventPriority(domEventName) {
    switch (domEventName) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'input':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'reset':
        case 'resize':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'change':
        case 'blur':
        case 'focus':
        case 'select':
        case 'selectstart':
            return DiscreteEventPriority;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'pointerenter':
        case 'pointerleave':
            return ContinuousEventPriority;
        default:
            return DefaultEventPriority;
    }
}
const randomKey = Math.random()
    .toString(36)
    .slice(2);
const internalPropsKey = '__reactProps$' + randomKey;
const internalInstanceKey = '__reactFiber$' + randomKey;
const internalContainerInstanceKey = '__reactContainer$' + randomKey;
// const internalEventHandlersKey = '__reactEvents$' + randomKey
// const internalEventHandlerListenersKey = '__reactListeners$' + randomKey
// const internalEventHandlesSetKey = '__reactHandles$' + randomKey

const HostRoot = 3; // Root of a host tree. Could be nested inside another node.
const HostComponent = 5;
const HostText = 6;
const SuspenseComponent = 13;

/**
 * 给 TaroElement 绑定 react fiber、react props 等属性
 * 提供 fiber -> element、element -> fiber、element -> props 的方法
*/
function precacheFiberNode(hostInst, node) {
    node[internalInstanceKey] = hostInst;
}
function markContainerAsRoot(hostRoot, node) {
    node[internalContainerInstanceKey] = hostRoot;
}
/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */
function getInstanceFromNode(node) {
    const inst = node[internalInstanceKey] || node[internalContainerInstanceKey];
    if (inst) {
        if (inst.tag === HostComponent ||
            inst.tag === HostText ||
            inst.tag === SuspenseComponent ||
            inst.tag === HostRoot) {
            return inst;
        }
        else {
            return null;
        }
    }
    return null;
}
/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */
function getNodeFromInstance(inst) {
    if (inst.tag === HostComponent || inst.tag === HostText) {
        // In Fiber this, is just the state node right now. We assume it will be
        // a host component or host text.
        return inst.stateNode;
    }
}
function getFiberCurrentPropsFromNode(node) {
    return node[internalPropsKey] || null;
}
function updateFiberProps(node, props) {
    node[internalPropsKey] = props;
    if ("harmony" === 'harmony') {
        // @ts-ignore
        node.updateTextNode();
    }
}

// 从 props 中，更新 input 组件的 value 值
function updateInputWrapper(element, oldValue, props) {
    const node = element;
    const checked = props.checked;
    if (checked != null) {
        console.warn('updateCheck 未实现', node);
        return;
    }
    updateWrapper(element, oldValue, props);
    updateNamedCousins(element, props);
}
// react 中原本处理 type=radio 的逻辑，这里留个空，暂时不处理
function updateNamedCousins(rootNode, props) {
    const name = props.name;
    if (props.type === 'radio' && name != null) {
        console.warn('radio updateNamedCousins 未实现', rootNode, props);
    }
}
function getToStringValue(value) {
    const isEmptyType = typeof value === 'function' || typeof value === 'symbol';
    return isEmptyType ? '' : value;
}
function toString(value) {
    return '' + value;
}
function updateWrapper(element, oldValue, props) {
    const node = element;
    const value = getToStringValue(props.value);
    const type = props.type;
    setNodeValue(node, oldValue, value, type);
}
// oldValue 为 event.detail.value，value 为 fiber.props.value
// 如果 oldValue 和 value 不相等，代表受控组件需要更新
// 更新的原则为，fiber.props.value 永远为用户所需要的值，因此 node.value = toString(value)
function setNodeValue(node, oldValue, value, type = 'string') {
    if (value != null) {
        if (type === 'number') {
            if ((value === 0 && node.value === '')
                // We explicitly want to coerce to number here if possible.
                // eslint-disable-next-line
                || oldValue != value) {
                node.value = toString(value);
            }
        }
        else if (oldValue !== toString(value)) {
            node.value = toString(value);
        }
    }
    else if (type === 'submit' || type === 'reset') {
        // Submit/reset inputs need the attribute removed completely to avoid
        // blank-text buttons.
        node.removeAttribute('value');
    }
}
// 判断当前 TaroElement 是否为 supportedInputTypes input 或 textarea
function isTextInputElement(elem) {
    const nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
    if (nodeName === 'input') {
        const type = elem.type;
        return !type || !!supportedInputTypes[type];
    }
    if (nodeName === 'textarea') {
        return true;
    }
    return false;
}
const ReactDOMTextareaRestoreControlledState = updateWrapper;
const ReactDOMInputRestoreControlledState = updateInputWrapper;

function isCheckable(elem) {
    const type = elem.type;
    const nodeName = elem.nodeName;
    return (nodeName &&
        nodeName.toLowerCase() === 'input' &&
        (type === 'checkbox' || type === 'radio'));
}
function getTracker(node) {
    return node._valueTracker;
}
function detachTracker(node) {
    node._valueTracker = null;
}
// 之所以单独创建一个 tacker，是为了统一监听不同 type 的 input 值
// 比如 type=checkbox 或者 type=radio，就需要监听 checked，而不是 value
// 虽然目前还未实现 checkbox 和 radio 的 finishEventHandle，但后续不好说，所以先统一和 react 一样的写法
// 需要特别注意的是，tracker 初始化时的值为 node 的初始值，但后续会变更为事件的 detail.value 值
function trackValueOnNode(node) {
    const valueField = isCheckable(node) ? 'checked' : 'value';
    const descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);
    let currentValue = '' + node[valueField];
    if (node.hasOwnProperty(valueField) ||
        typeof descriptor === 'undefined' ||
        typeof descriptor.get !== 'function' ||
        typeof descriptor.set !== 'function') {
        return;
    }
    const { get, set } = descriptor;
    Object.defineProperty(node, valueField, {
        configurable: true,
        enumerable: descriptor.enumerable,
        get: function () {
            return get.call(this);
        },
        set: function (value) {
            currentValue = '' + value;
            set.call(this, value);
        },
    });
    const tracker = {
        getValue() {
            return currentValue;
        },
        setValue(value) {
            currentValue = '' + value;
        },
        stopTracking() {
            detachTracker(node);
            delete node[valueField];
        },
    };
    return tracker;
}
function track(node) {
    if (getTracker(node)) {
        return;
    }
    node._valueTracker = trackValueOnNode(node);
}
function updateValueIfChanged(node, nextValue) {
    if (!node) {
        return false;
    }
    const tracker = getTracker(node);
    if (!tracker) {
        return true;
    }
    const lastValue = tracker.getValue();
    if (nextValue !== lastValue) {
        tracker.setValue(nextValue);
        return true;
    }
    return false;
}

const isHarmony = "harmony" === 'harmony';
const IS_NON_DIMENSIONAL = /max|aspect|acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function isEventName(s) {
    return s[0] === 'o' && s[1] === 'n';
}
function isEqual(obj1, obj2) {
    // 首先检查引用是否相同
    if (obj1 === obj2) {
        return true;
    }
    // 如果两者中有一个不是对象，或者为 null，直接返回 false
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }
    // 获取两个对象键的数组
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    // 如果键的数量不相同，对象显然不相等
    if (keys1.length !== keys2.length) {
        return false;
    }
    // 遍历对象的每个键，比较两个对象同一键的值
    for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    // 如果所有键的值都相等，返回 true
    return true;
}
function updateProps(dom, oldProps, newProps) {
    const updatePayload = getUpdatePayload(dom, oldProps, newProps);
    if (updatePayload) {
        updatePropsByPayload(dom, oldProps, updatePayload);
    }
}
function updatePropsByPayload(dom, oldProps, updatePayload) {
    const handlers = [];
    let fixedHandler = null;
    for (let i = 0; i < updatePayload.length; i += 2) {
        // key, value 成对出现
        const key = updatePayload[i];
        const newProp = updatePayload[i + 1];
        const oldProp = oldProps[key];
        if (isHarmony) {
            if (key === '__fixed') {
                // hack: __fixed最先识别
                fixedHandler = () => setProperty(dom, key, newProp, oldProp);
                continue;
            }
            // 鸿蒙样式前置插入，防止覆盖style
            if (key === '__hmStyle') {
                handlers.splice(0, 0, () => setHarmonyStyle(dom, newProp, oldProp));
            }
            else {
                handlers.push(() => setProperty(dom, key, newProp, oldProp));
            }
        }
        else {
            setProperty(dom, key, newProp, oldProp);
        }
    }
    if (isHarmony) {
        fixedHandler && fixedHandler();
        for (let i = 0; i < handlers.length; i++) {
            handlers[i]();
        }
    }
}
function getUpdatePayload(dom, oldProps, newProps) {
    let i;
    let updatePayload = null;
    for (i in oldProps) {
        if (!(i in newProps)) {
            (updatePayload = updatePayload || []).push(i, null);
        }
    }
    const isFormElement = dom instanceof FormElement;
    for (i in newProps) {
        if (oldProps[i] !== newProps[i] || (isFormElement && i === 'value')) {
            // 如果都是 style，且 style 里面的值相等，则无需记录到 payload 中
            if (i === 'style' && isObject(oldProps[i]) && isObject(newProps[i]) && isEqual(oldProps[i], newProps[i]))
                continue;
            (updatePayload = updatePayload || []).push(i, newProps[i]);
        }
    }
    return updatePayload;
}
// function eventProxy (e: CommonEvent) {
//   const el = document.getElementById(e.currentTarget.id)
//   const handlers = el!.__handlers[e.type]
//   handlers[0](e)
// }
function setEvent(dom, name, value, oldValue) {
    const isCapture = name.endsWith('Capture');
    let eventName = name.toLowerCase().slice(2);
    if (isCapture) {
        eventName = eventName.slice(0, -7);
    }
    const compName = capitalize(toCamelCase(dom.tagName.toLowerCase()));
    if (eventName === 'click' && !isHarmony && compName in internalComponents) {
        eventName = 'tap';
    }
    if (isFunction(value)) {
        if (oldValue) {
            dom.removeEventListener(eventName, oldValue, !isHarmony ? false : undefined);
            dom.addEventListener(eventName, value, !isHarmony ? { isCapture, sideEffect: false } : undefined);
        }
        else {
            dom.addEventListener(eventName, value, !isHarmony ? isCapture : undefined);
        }
    }
    else {
        dom.removeEventListener(eventName, oldValue);
    }
}
function setStyle(style, key, value) {
    if (key[0] === '-' && !isHarmony) {
        // css variables need not further judgment
        style.setProperty(key, value.toString());
        return;
    }
    style[key] =
        isNumber(value) && IS_NON_DIMENSIONAL.test(key) === false
            ? (isHarmony ? value + 'px' : convertNumber2PX(value))
            : value === null
                ? ''
                : value;
}
// 鸿蒙样式特殊处理，需要在插入顺序中前置插入，防止覆盖了style
function setHarmonyStyle(dom, value, oldValue) {
    // @ts-ignore
    const style = dom._st.hmStyle; // __hmStyle是已经被处理过的鸿蒙样式，可以直接塞进hmStyle对象内
    if (isObject(oldValue)) {
        for (const i in oldValue) {
            if (!(value && i in value)) {
                // 鸿蒙伪类特殊处理
                if (isHarmony) {
                    if (i === '::after' || i === '::before') {
                        setPseudo(dom, i, null);
                    }
                    else if (['::first-child', '::last-child', '::empty'].includes(i) || `${i}`.indexOf('::nth-child') === 0) {
                        // @ts-ignore
                        dom.set_pseudo_class(i, null);
                    }
                    else {
                        if (i === 'position' && oldValue[i] === 'fixed') {
                            // @ts-ignore
                            dom.setLayer(0);
                        }
                        else if (i === 'animationName') {
                            // @ts-ignore
                            dom.setAnimation(false);
                        }
                        style[i] = '';
                    }
                }
                else {
                    style[i] = '';
                }
            }
        }
    }
    if (isObject(value)) {
        for (const i in value) {
            if (!oldValue || !isEqual(value[i], oldValue[i])) {
                // 鸿蒙伪类特殊处理
                if (isHarmony) {
                    if (i === '::after' || i === '::before') {
                        setPseudo(dom, i, value[i]);
                    }
                    else if (['::first-child', '::last-child', '::empty'].includes(i) || i.startsWith('::nth-child')) {
                        // @ts-ignore
                        dom.set_pseudo_class(i, value[i]);
                    }
                    else {
                        if (i === 'position') {
                            if (value[i] === 'fixed' || (value[i] !== 'fixed' && (oldValue === null || oldValue === void 0 ? void 0 : oldValue[i]))) {
                                // @ts-ignore
                                dom.setLayer(value[i] === 'fixed' ? 1 : 0);
                            }
                        }
                        else if (i === 'animationName') {
                            // @ts-ignore
                            dom.setAnimation(true);
                        }
                        style[i] = value[i];
                    }
                }
                else {
                    style[i] = value[i];
                }
            }
        }
    }
    dom.setAttribute('__hmStyle', value);
}
function setProperty(dom, name, value, oldValue) {
    var _a, _b;
    name = name === 'className' ? 'class' : name;
    if (name === 'key' ||
        name === 'children' ||
        name === 'ref') ;
    else if (name === 'style') {
        const style = dom.style;
        if (isString(value)) {
            style.cssText = value;
        }
        else {
            if (isString(oldValue)) {
                style.cssText = '';
                oldValue = null;
            }
            if (isObject(oldValue)) {
                for (const i in oldValue) {
                    if (!(value && i in value)) {
                        // Harmony特殊处理
                        if (isHarmony && i === 'position' && oldValue[i] === 'fixed') {
                            // @ts-ignore
                            dom.setLayer(0);
                        }
                        setStyle(style, i, '');
                    }
                }
            }
            if (isObject(value)) {
                for (const i in value) {
                    if (!oldValue || !isEqual(value[i], oldValue[i])) {
                        // Harmony特殊处理
                        if (isHarmony && i === 'position') {
                            if (value[i] === 'fixed' || (value[i] !== 'fixed' && (oldValue === null || oldValue === void 0 ? void 0 : oldValue[i]))) {
                                // @ts-ignore
                                dom.setLayer(value[i] === 'fixed' ? 1 : 0);
                            }
                        }
                        setStyle(style, i, value[i]);
                    }
                }
            }
        }
    }
    else if (isEventName(name)) {
        setEvent(dom, name, value, oldValue);
    }
    else if (name === 'dangerouslySetInnerHTML') {
        const newHtml = (_a = value === null || value === void 0 ? void 0 : value.__html) !== null && _a !== void 0 ? _a : '';
        const oldHtml = (_b = oldValue === null || oldValue === void 0 ? void 0 : oldValue.__html) !== null && _b !== void 0 ? _b : '';
        if (newHtml || oldHtml) {
            if (oldHtml !== newHtml) {
                dom.innerHTML = newHtml;
            }
        }
    }
    else if (!isFunction(value)) {
        if (value == null) {
            dom.removeAttribute(name);
        }
        else {
            dom.setAttribute(name, value);
        }
    }
}
// 设置鸿蒙伪类属性(特殊设置)
function setPseudo(dom, name, value) {
    if (name === '::after') {
        // @ts-ignore
        dom.set_pseudo_after(value);
    }
    else if (name === '::before') {
        // @ts-ignore
        dom.set_pseudo_before(value);
    }
}

/* eslint-disable @typescript-eslint/indent */
const hostConfig = {
    // below keys order by {React ReactFiberHostConfig.custom.js}, convenient for comparing each other.
    // -------------------
    // required by @types/react-reconciler
    // -------------------
    getPublicInstance(inst) {
        return inst;
    },
    getRootHostContext() {
        return {};
    },
    getChildHostContext(parentHostContext) {
        return parentHostContext;
    },
    prepareForCommit(..._) {
        return null;
    },
    resetAfterCommit: noop,
    createInstance(type, props, _rootContainerInstance, _hostContext, internalInstanceHandle) {
        const element = document.createElement(type);
        precacheFiberNode(internalInstanceHandle, element);
        updateFiberProps(element, props);
        return element;
    },
    appendInitialChild(parent, child) {
        parent.appendChild(child);
    },
    finalizeInitialChildren(dom, type, props) {
        let newProps = props;
        if (dom instanceof FormElement) {
            const [defaultName, defaultKey] = ['switch', 'checkbox', 'radio'].includes(type) ? ['checked', 'defaultChecked'] : ['value', 'defaultValue'];
            if (props.hasOwnProperty(defaultKey)) {
                newProps = Object.assign(Object.assign({}, newProps), { [defaultName]: props[defaultKey] });
                delete newProps[defaultKey];
            }
        }
        updateProps(dom, {}, newProps); // 提前执行更新属性操作，Taro 在 Page 初始化后会立即从 dom 读取必要信息
        if (type === 'input' || type === 'textarea') {
            track(dom);
        }
        return false;
    },
    prepareUpdate(instance, _, oldProps, newProps) {
        return getUpdatePayload(instance, oldProps, newProps);
    },
    shouldSetTextContent() {
        return false;
    },
    createTextInstance(text, _rootContainerInstance, _hostContext, internalInstanceHandle) {
        const textNode = document.createTextNode(text);
        precacheFiberNode(internalInstanceHandle, textNode);
        return textNode;
    },
    scheduleTimeout: setTimeout,
    cancelTimeout: clearTimeout,
    noTimeout: -1,
    isPrimaryRenderer: true,
    warnsIfNotActing: true,
    supportsMutation: true,
    supportsPersistence: false,
    supportsHydration: false,
    getInstanceFromNode: () => null,
    beforeActiveInstanceBlur: noop,
    afterActiveInstanceBlur: noop,
    preparePortalMount: noop,
    prepareScopeUpdate: noop,
    getInstanceFromScope: () => null,
    getCurrentEventPriority() {
        return DefaultEventPriority$1;
    },
    detachDeletedInstance: noop,
    // -------------------
    //      Microtasks
    //     (optional)
    // -------------------
    supportsMicrotasks: true,
    scheduleMicrotask: isUndefined(Promise)
        ? setTimeout
        : (callback) => Promise.resolve(null)
            .then(callback)
            .catch(function (error) {
            setTimeout(() => {
                throw error;
            });
        }),
    // -------------------
    //      Mutation
    //     (required if supportsMutation is true)
    // -------------------
    appendChild(parent, child) {
        parent.appendChild(child);
    },
    appendChildToContainer(parent, child) {
        parent.appendChild(child);
    },
    commitTextUpdate(textInst, _, newText) {
        textInst.nodeValue = newText;
    },
    commitMount: noop,
    commitUpdate(dom, updatePayload, _, oldProps, newProps) {
        if (!updatePayload)
            return;
        // payload 只包含 children 的时候，不应该再继续触发后续的属性比较和更新的逻辑了
        if (updatePayload.length === 2 && updatePayload.includes('children'))
            return;
        updatePropsByPayload(dom, oldProps, updatePayload);
        updateFiberProps(dom, newProps);
    },
    insertBefore(parent, child, refChild) {
        parent.insertBefore(child, refChild);
    },
    insertInContainerBefore(parent, child, refChild) {
        parent.insertBefore(child, refChild);
    },
    removeChild(parent, child) {
        parent.removeChild(child);
    },
    removeChildFromContainer(parent, child) {
        parent.removeChild(child);
    },
    resetTextContent: noop,
    hideInstance(instance) {
        const style = instance.style;
        style.setProperty('display', 'none');
    },
    hideTextInstance(textInstance) {
        textInstance.nodeValue = '';
    },
    unhideInstance(instance, props) {
        const styleProp = props.style;
        let display = (styleProp === null || styleProp === void 0 ? void 0 : styleProp.hasOwnProperty('display')) ? styleProp.display : null;
        display = display == null || isBoolean(display) || display === '' ? '' : ('' + display).trim();
        // eslint-disable-next-line dot-notation
        instance.style['display'] = display;
    },
    unhideTextInstance(textInstance, text) {
        textInstance.nodeValue = text;
    },
    clearContainer(element) {
        if (element.childNodes.length > 0) {
            element.textContent = '';
        }
    }
};
const TaroReconciler = Reconciler(hostConfig);
if ("production" !== 'production') {
    const foundDevTools = TaroReconciler.injectIntoDevTools({
        bundleType: 1,
        version: '18.0.0',
        rendererPackageName: 'taro-react'
    });
    if (!foundDevTools) {
        // eslint-disable-next-line no-console
        console.info('%cDownload the React DevTools ' +
            'for a better development experience: ' +
            'https://reactjs.org/link/react-devtools', 'font-weight:bold');
    }
}

let restoreQueue = null;
// 对比 TaroElement tracker 下的 value 和事件下的 value，判断 element 的值是否存在更改
function getTargetInstForInputOrChangeEvent(e, node) {
    var _a, _b;
    const targetInst = getInstanceFromNode(node);
    const domEventName = e.type;
    if (!targetInst || !isTextInputElement(node))
        return;
    if (domEventName === 'input' || domEventName === 'change') {
        const nextValue = toString((_b = (_a = e.mpEvent) === null || _a === void 0 ? void 0 : _a.detail) === null || _b === void 0 ? void 0 : _b.value);
        return getInstIfValueChanged(targetInst, nextValue);
    }
}
function getInstIfValueChanged(targetInst, nextValue) {
    const targetNode = getNodeFromInstance(targetInst);
    if (!targetNode)
        return false;
    if (updateValueIfChanged(targetNode, nextValue)) {
        return targetInst;
    }
}
// 把 target 塞入更新队列中
function enqueueStateRestore(target) {
    if (restoreQueue) {
        restoreQueue.push(target);
    }
    else {
        restoreQueue = [target];
    }
}
// 判断是否需要恢复 target（input、textarea） 的状态
function needsStateRestore() {
    return restoreQueue !== null;
}
function finishEventHandler() {
    const controlledComponentsHavePendingUpdates = needsStateRestore();
    if (controlledComponentsHavePendingUpdates) {
        TaroReconciler.flushSync();
        restoreStateIfNeeded();
    }
}
// 遍历 restoreQueue、restoreTarget，恢复其状态
function restoreStateIfNeeded() {
    if (!restoreQueue) {
        return;
    }
    const queuedTargets = restoreQueue;
    restoreQueue = null;
    for (let i = 0; i < queuedTargets.length; i++) {
        restoreStateOfTarget(queuedTargets[i]);
    }
}
function restoreImpl(domElement, tag, oldValue, props) {
    switch (tag) {
        case 'input':
            ReactDOMInputRestoreControlledState(domElement, oldValue, props);
            break;
        case 'textarea':
            ReactDOMTextareaRestoreControlledState(domElement, oldValue, props);
            break;
    }
}
function restoreStateOfTarget(item) {
    const internalInstance = getInstanceFromNode(item.target);
    if (!internalInstance)
        return;
    const { stateNode, type } = internalInstance;
    if (stateNode) {
        const props = getFiberCurrentPropsFromNode(stateNode);
        restoreImpl(stateNode, type, item.value, props);
    }
}

const ContainerMap = new WeakMap();
class Root {
    constructor(renderer, domContainer, options) {
        this.renderer = renderer;
        this.initInternalRoot(renderer, domContainer, options);
    }
    initInternalRoot(renderer, domContainer, options) {
        // Since react-reconciler v0.27, createContainer need more parameters
        // @see:https://github.com/facebook/react/blob/0b974418c9a56f6c560298560265dcf4b65784bc/packages/react-reconciler/src/ReactFiberReconciler.js#L248
        const containerInfo = domContainer;
        if (options) {
            const tag = 1; // ConcurrentRoot
            const concurrentUpdatesByDefaultOverride = false;
            let isStrictMode = false;
            let identifierPrefix = '';
            let onRecoverableError = (error) => console.error(error);
            let transitionCallbacks = null;
            if (options.unstable_strictMode === true) {
                isStrictMode = true;
            }
            if (options.identifierPrefix !== undefined) {
                identifierPrefix = options.identifierPrefix;
            }
            if (options.onRecoverableError !== undefined) {
                onRecoverableError = options.onRecoverableError;
            }
            if (options.unstable_transitionCallbacks !== undefined) {
                transitionCallbacks = options.unstable_transitionCallbacks;
            }
            this.internalRoot = renderer.createContainer(containerInfo, tag, null, // hydrationCallbacks
            isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError, transitionCallbacks);
        }
        else {
            const tag = 0; // LegacyRoot
            this.internalRoot = renderer.createContainer(containerInfo, tag, null, // hydrationCallbacks
            false, // isStrictMode
            false, // concurrentUpdatesByDefaultOverride,
            '', // identifierPrefix
            () => { }, // onRecoverableError, this isn't reachable because onRecoverableError isn't called in the legacy API.
            null // transitionCallbacks
            );
        }
    }
    render(children, cb) {
        const { renderer, internalRoot } = this;
        renderer.updateContainer(children, internalRoot, null, cb);
        return renderer.getPublicRootInstance(internalRoot);
    }
    unmount(cb) {
        this.renderer.updateContainer(null, this.internalRoot, null, cb);
    }
}
function render(element, domContainer, cb) {
    const oldRoot = ContainerMap.get(domContainer);
    if (oldRoot != null) {
        return oldRoot.render(element, cb);
    }
    const root = new Root(TaroReconciler, domContainer);
    ContainerMap.set(domContainer, root);
    return root.render(element, cb);
}
function createRoot(domContainer, options = {}) {
    var _a;
    const oldRoot = ContainerMap.get(domContainer);
    if (oldRoot != null) {
        return oldRoot;
    }
    // options should be an object
    const root = new Root(TaroReconciler, domContainer, options);
    ContainerMap.set(domContainer, root);
    markContainerAsRoot((_a = root === null || root === void 0 ? void 0 : root.internalRoot) === null || _a === void 0 ? void 0 : _a.current, domContainer);
    hooks.tap('dispatchTaroEvent', (e, node) => {
        const eventPriority = getEventPriority(e.type);
        TaroReconciler.runWithPriority(eventPriority, () => {
            node.dispatchEvent(e);
        });
    });
    // 对比 event.detail.value 和 node.tracker.value，判断 value 值是否有变动，存在变动则塞入队列中
    hooks.tap('modifyTaroEvent', (e, node) => {
        var _a, _b;
        const inst = getTargetInstForInputOrChangeEvent(e, node);
        if (!inst)
            return;
        // 这里塞入的是 event.detail.value，也就是事件的值，在受控组件中，你可以理解为需要被变更的值
        // 后续会在 finishEventHandler 中，使用最新的 fiber.props.value 来与其比较
        // 如果不一致，则表示需要更新，会执行 node.value = fiber.props.value 的更新操作
        const nextValue = (_b = (_a = e.mpEvent) === null || _a === void 0 ? void 0 : _a.detail) === null || _b === void 0 ? void 0 : _b.value;
        enqueueStateRestore({ target: node, value: nextValue });
    });
    return root;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
let isInsideEventHandler = false;
// 重新包裹 batchedUpdates，使其可以在触发事件后执行 finishEventHandler
const unstable_batchedUpdates = (fn, a) => {
    if (isInsideEventHandler) {
        return fn(a);
    }
    isInsideEventHandler = true;
    try {
        return TaroReconciler.batchedUpdates(fn, a);
    }
    finally {
        isInsideEventHandler = false;
        finishEventHandler();
    }
};
function unmountComponentAtNode(dom) {
    ensure(dom && [1, 8, 9, 11].includes(dom.nodeType), 'unmountComponentAtNode(...): Target container is not a DOM element.');
    const root = ContainerMap.get(dom);
    if (!root)
        return false;
    unstable_batchedUpdates(() => {
        root.unmount(() => {
            ContainerMap.delete(dom);
        });
    }, null);
    return true;
}
function findDOMNode(comp) {
    if (comp == null) {
        return null;
    }
    const nodeType = comp.nodeType;
    if (nodeType === 1 || nodeType === 3) {
        return comp;
    }
    return TaroReconciler.findHostInstance(comp);
}
const portalType = isFunction(Symbol) && Symbol.for
    ? Symbol.for('react.portal')
    : 0xeaca;
function createPortal(children, containerInfo, key) {
    return {
        $$typeof: portalType,
        key: key == null ? null : String(key),
        children,
        containerInfo,
        implementation: null
    };
}
const flushSync = TaroReconciler.flushSync;
var index = {
    render,
    flushSync,
    createRoot,
    unstable_batchedUpdates,
    unmountComponentAtNode,
    findDOMNode,
    createPortal,
    internalInstanceKey
};

export { createPortal, createRoot, index as default, findDOMNode, flushSync, internalInstanceKey, render, unmountComponentAtNode, unstable_batchedUpdates };
//# sourceMappingURL=react.esm.js.map
