// @ts-nocheck
import Reconciler from "../../react-reconciler";
import { OpaqueRoot } from "../../react-reconciler";
import { TaroElement, TaroText } from "../runtime";
import { ReactNode } from "../../react";
declare const internalInstanceKey: string;
declare const TaroReconciler: Reconciler.Reconciler<TaroElement, TaroElement, TaroText, TaroElement, TaroElement>;
type Renderer = typeof TaroReconciler;
type CreateRootOptions = {
    unstable_strictMode?: boolean;
    unstable_concurrentUpdatesByDefault?: boolean;
    unstable_transitionCallbacks?: any;
    identifierPrefix?: string;
    onRecoverableError?: (error: any) => void;
};
type Callback = () => void | null | undefined;
declare class Root {
    private renderer;
    internalRoot: OpaqueRoot;
    constructor(renderer: Renderer, domContainer: TaroElement, options?: CreateRootOptions);
    private initInternalRoot;
    render(children: ReactNode, cb: Callback): TaroElement | import("react").Component<any, any, any> | null;
    unmount(cb: Callback): void;
}
declare function render(element: ReactNode, domContainer: TaroElement, cb: Callback): TaroElement | import("react").Component<any, any, any> | null;
declare function createRoot(domContainer: TaroElement, options?: CreateRootOptions): Root;
declare const unstable_batchedUpdates: (fn: any, a: any) => any;
declare function unmountComponentAtNode(dom: TaroElement): boolean;
declare function findDOMNode(comp?: TaroElement | ReactNode): string | number | boolean | TaroElement | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").ReactFragment | null;
declare function createPortal(children: ReactNode, containerInfo: TaroElement, key?: string): {
    $$typeof: number | symbol;
    key: string | null;
    children: ReactNode;
    containerInfo: TaroElement;
    implementation: null;
};
declare const _default: {
    render: typeof render;
    createRoot: typeof createRoot;
    unstable_batchedUpdates: (fn: any, a: any) => any;
    unmountComponentAtNode: typeof unmountComponentAtNode;
    findDOMNode: typeof findDOMNode;
    createPortal: typeof createPortal;
    internalInstanceKey: string;
};
export { _default as default, createPortal, createRoot, findDOMNode, internalInstanceKey, render, unmountComponentAtNode, unstable_batchedUpdates };
