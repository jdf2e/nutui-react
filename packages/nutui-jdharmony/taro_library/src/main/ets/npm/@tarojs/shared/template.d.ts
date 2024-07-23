// @ts-nocheck
/**
 * 这里我们需要关心的小程序种类有两类：
 * 1. 模板递归：
 *  - 支持：tmpl0 套 tmpl0
 *  - 不支持：这就使得我们必须生成多级的模板，tmpl0 套 tmpl1，tmpl1 套 tmpl2……
 *           直到超过阈值 N (N = config.miniapp.baseLevel) tmplN 会套组件 comp，组件 comp 重新再套 tmpl0。
 * 2. 小程序脚本语言（wxs, sjs, etc...）：
 *  - 支持：可以在模板使用函数缩减模板大小或提高性能（存疑），例如判断一个值是不是假值（falsy value）。
 *         将来或许会把数据序列化^1 的操作也放到小程序脚本语言里。
 *  - 不支持：使用纯 *xml 语法
 *
 * ^1: packages/taro-runtime/src/hydrate.ts
*/
import { internalComponents } from './components';
import { Shortcuts } from './shortcuts';
import { capitalize, toCamelCase } from './utils';
interface Component {
    nodeName: string;
    nodeAlias: string;
    attributes: Attributes;
}
interface Components {
    [key: string]: Record<string, string>;
}
interface ComponentConfig {
    includes: Set<string>;
    exclude: Set<string>;
    thirdPartyComponents: Map<string, Set<string>>;
    includeAll: boolean;
}
export interface IAdapter {
    if: string;
    else: string;
    elseif: string;
    for: string;
    forItem: string;
    forIndex: string;
    key: string;
    xs?: string;
    type: string;
}
export type Attributes = Record<string, string>;
export declare const styles: {
    style: string;
    class: string;
};
export declare const events: {
    bindtap: string;
};
export declare class BaseTemplate {
    protected _baseLevel: number;
    protected exportExpr: string;
    protected isSupportRecursive: boolean;
    protected miniComponents: Components;
    protected thirdPartyPatcher: Record<string, Record<string, string>>;
    protected modifyCompProps?: (compName: string, target: Record<string, string>) => Record<string, string>;
    protected modifyLoopBody?: (child: string, nodeName: string) => string;
    protected modifyLoopContainer?: (children: string, nodeName: string) => string;
    protected modifyTemplateResult?: (res: string, nodeName: string, level: number, children: string) => string;
    protected modifyThirdPartyLoopBody?: (child: string, nodeName: string) => string;
    supportXS: boolean;
    isXMLSupportRecursiveReference: boolean;
    Adapter: IAdapter;
    /** 组件列表 */
    internalComponents: Record<string, Record<string, string>>;
    /** 可以 focus 聚焦的组件 */
    focusComponents: Set<string>;
    /** 不需要渲染子节点的元素 */
    voidElements: Set<string>;
    /** 可以递归调用自身的组件 */
    nestElements: Map<string, number>;
    componentsAlias: any;
    set baseLevel(lv: number);
    get baseLevel(): number;
    private buildAttribute;
    protected replacePropName(name: string, value: string, _componentName?: string, _componentAlias?: any): string;
    createMiniComponents(components: Components): Components;
    protected buildBaseTemplate(): string;
    protected buildThirdPartyAttr(attrs: Set<string>, patcher?: Record<string, string>): string;
    protected buildComponentTemplate(comp: Component, level: number): string;
    private getChildrenTemplate;
    private getChildren;
    protected buildFocusComponentTemplate(comp: Component, level: number): string;
    protected buildStandardComponentTemplate(comp: Component, level: number): string;
    protected buildPlainTextTemplate(level: number): string;
    protected buildThirdPartyTemplate(level: number, componentConfig: ComponentConfig): string;
    protected buildContainerTemplate(level: number): string;
    protected dataKeymap(keymap: string): string;
    protected getEvents(): any;
    protected getAttrValue(value: string, _key: string, _nodeName: string): string;
    buildXsTemplate(_filePath?: string): string;
    buildPageTemplate: (baseTempPath: string, _page?: {
        content: Record<string, any>;
        path: string;
    }) => string;
    buildBaseComponentTemplate: (ext: string) => string;
    buildCustomComponentTemplate: (ext: string) => string;
    buildXScript: () => string;
    mergeComponents(ctx: any, patch: Record<string, Record<string, string>>): void;
    mergeThirdPartyComponents(patch: Record<string, Record<string, string>>): void;
    protected buildXSTmplName(): string;
    protected buildXSTepFocus(nn: string): string;
    protected buildXSTmpExtra(): string;
}
export declare class RecursiveTemplate extends BaseTemplate {
    isSupportRecursive: boolean;
    buildTemplate: (componentConfig: ComponentConfig) => string;
}
export declare class UnRecursiveTemplate extends BaseTemplate {
    isSupportRecursive: boolean;
    protected _baseLevel: number;
    private componentConfig;
    buildTemplate: (componentConfig: ComponentConfig) => string;
    protected buildFloor(level: number, components: string[], restart?: boolean): string;
    protected buildOptimizeFloor(level: number, components: string[], restart?: boolean): string;
    protected buildXSTmplName(): string;
    protected buildXSTmpExtra(): string;
}
export { capitalize, internalComponents, Shortcuts, toCamelCase };
